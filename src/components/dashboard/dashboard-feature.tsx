/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "mHQgWN7Y3GTJdtSJw9E66CvBiCvP1GywVsEbJzQccYEu3ZANooib9DvUGqxPpirfN9E5u5ed5hULC2UKKWZWvUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfZ4FPziB4tBSWHpQwMEGgJEhF4bBHQMxkjqX6kBVUPdpQgv9Zic7vPHEW2PoQ9Z89tW3Q6JGiwW2ytnfT3Y7YQ",
  "key1": "45LWFtvX8HxRJXiqvQaxTG22TWWw7s4K6gNEftRZtaeYZSfw4PsJNcai3pr45jtHChTn9v5dAiPgwH1HPZoHBVBZ",
  "key2": "5eDU9jrNf4Y5yCCghfmomKiayi63oJXN7zSfmDkqXLLHRFBYV3kkR3cH7e46uHn232A3pMwSq35ZcRkCByZKuFa2",
  "key3": "34qYYYrjYFDFFpStn5DSBTbzSRqKYwCzh52td3qafWxPjjhweVGH4sZ1qGT8ifvGczrnMhiKdvSXKTVFbnnVscfs",
  "key4": "X8hvYJnaPj7UXXrxUUN7ZVJsss7WiJno9e5iv2QUJT9XgH4g7rEiDNrejKdBXR82iuALTxe85hzEKMUPCYP3Xgr",
  "key5": "4XF8KNbVBmDkWbyk2gU7z3etiA4AkpZDdDEtmSawdkf6TpzLUhjqEeDr7u7F85BF2eZH1SNvrwchAoF1RdN7sTgP",
  "key6": "4N3N1hcyEGRw4Yfxo8ws4wd4Etm3MLyN5DwnsYoaTnDyRhCTQcHho1XnrKBojFxt9HgqcQNRND8z7RgJwgEGXHR8",
  "key7": "3eSkKqNz1DnnEn5icy8zHLgP7SGuZRLVGH7Ch3DzkuhdSp9Y8iBVCJYoTZePsiQwHdBRQLaVTAoXW4GpjTxdmcB8",
  "key8": "2EsCTqPMYjkyYJ4QMuH4xKcXpdJ2PrvtfrdJrQuKACgWkXkxx9bC9utdSdx2ahVyXqmn4vZMHNJHDEBSSSX3BQ3",
  "key9": "5EV4YiLKWmXwqHmA91MUsJ6FGUYxhfmH5V2ZXq927pUSFZDVakphme7DDvrjWXLapVvBBwtxXm4MpNjvqSqE9dVu",
  "key10": "5PNCeJw3NvnZrRc2E2VS8z2ytsdKDqvCKcPsDippWCjYW5X5nAtNLJFFQYu23gBPeonT97VxkVHKgJaKKDor5qbq",
  "key11": "4kypYuxvAAGthYjRjmhVqKjcX6nWvajNxibtBGycnVVLMP418eEX9k6qWESL5TEwcfXzS91bthrMDEdFJmr4R7C5",
  "key12": "48MRaMRUMmaX4pnTJcA9rLYh2ZEPscqAtsw7UNjuY3JufCK6aUs4JzSaN913Y2RtdmjzgEzH5AojXiedGPFVVdkY",
  "key13": "TURutbdZjQpDYxH1qCen4isL7pdtUkEYgfKAa1MBXymfAQWuM62s32t2qcEYBiNpVPQuaz4JMRUjpRWRhhPJ2zw",
  "key14": "37Xb77134qXtNPcauH1dFyMFKaUBYKNU6Zb4fnHakYLyoVNQamAaspVcMnVrLidedeLxnxDjjzzKXhfWE2KiZDJ3",
  "key15": "2yq29Vk2NoR4r36Dtx4PVroJF4LxfPD2jWGMYYc4ZbhXNKynT1JaGauTy5wG45iDT7b1FdGwuz7nQp4B5XMR6LPu",
  "key16": "pSNcrsCeL8ei3i2pKVv1uH4XyHMnuGWefyj7gt6tp8nrA94ZGdetxVELHdLBUy7NZhhZo4QYsYNHW6F2HXAqXLG",
  "key17": "4X4LGdFMe4q7DZ3srKKbqyi3Lew2GhFRdNeULvn83wBVqNz88qe6VXvuSYywmRTAdLZ1kzmmuw6RKWr9ybCsV4nA",
  "key18": "2pK1TRSTYuudBpn28oySV68q2NXLzR6WXqC3VDdoyotEx7ocpFttkMgzqvpfC5mtbbBG7q6B3hRdht34eAwni7P3",
  "key19": "2k2FKCSgsSfwTpNFw9YQ591Jf8ruNpka6ot6SAjJKpWojzqU6Jtr6MsDVPstpNJzPd8V6EJq4zAkfLV92nNcr3UZ",
  "key20": "2nZmdwMg55ygWXpkGMbC3nYJB8eniRRhid9qcxKpLeSd16wzYFkcJMPcdhAnn4P98SqP2m5SnVG2PTGhKqKK9pRj",
  "key21": "1noKLrNAMF9NB1VDWJvoyxiYDUCMCxieu8oYKCJMMnqp4mHztm6m4dFyFM32NTkV6szFQuCVB6mnYMJ5tAGKUgc",
  "key22": "5u2YivMLVg6pneYcKY4U5mZEMoqZ6TWojaTvXSUUjoigAfGdh6mDyynQ8Ryj3ZXjPdAFymtTURJbbcTajoBXZoiw",
  "key23": "2k2uZLWwfCSmX81a9TWRg4XSGYcFqLvUrPXxHAVvTrRhZVs7PbPwaexyQ1g53BiS6yHMTzB1jWZ3DqBP6jT8Mz9m",
  "key24": "4NZyjB2oGeuBwK8Cq1LTv75XAXLcZDmuw2xyvHVPhExZhoCNiSYcoWmSU1rNGfjTFWx2vmV3mFzP4mtMDWNigpkt",
  "key25": "38R1NUMFL9jrQazXf2miYyTo3t6c5YUi19mPCw4aiF43fcMDNea5ibfcVAughi4hX6BspUjBeZnWERGJ2LM5d9GG",
  "key26": "zcTreGtctvt8bqyf9tgbGWC4ytcFNJ5NN6vgS2V7cz8RNuBLqMo4GS6J313UpbR6Uvj9MDZkuikdoDz48hSjgfw",
  "key27": "4PsmCjYiS9VGnbGVib3aXrXSgceqKoDzqkwRSYKbca12395pzPr3TSmwsHUxHPaCM2Juzg7Sy3ietygQkw1jdzub",
  "key28": "4zNnA8ZtgEvHUAoWMRUuvFfPfHgdqQQYcgrCUXyded9Z4EndPEoUqzHrJguhhJsNZtru9fgNCw9CBVj1VUHKVZr8",
  "key29": "5c5KvsimAKwBfnL7yJffnyuH2uZN5UCM45XDKaRzFcyMGQSXVG9jqjDHZsbfShCLmdGU7RVBkdatY6xcEQikUNkf",
  "key30": "5xQwkMDVRGoTm5hp8xPs4aPFALr79LzbCYLsKbiRPuVUJB2Sc56pqQ9SDoaoW3iwkZw1hqVzM2JdAP6fStx4ccKx",
  "key31": "2NddoHuxTmph7MWMDaZnaFVMDqfVy76jQGaKH7CpcHEoTb1tBkbqhmTrkCLt33bvBZZyhiF7vYZBYfydS1jzRy3t",
  "key32": "zXiChCLDnJBSkQd3kM2Ga6tCdiZRkfADdsjKaKbbfDx7DuVUfP82ZesCubKMa3mHBvkJf8JeYKvjHYtdobmumka",
  "key33": "2HsyG1XFTGBQng936bK6XZLfCm3jKDuaUQ8dYJDLk2qkNjKNwAXHpZCNvvdHZHRLUSD7Gds9q37yrJQtq6s7nMgu",
  "key34": "44HV2gdAYB5eLtYrwg1dBv1kjABuJJG4YAUSG84rNNJ4RAcgHiejJjFBfjZ6GeeLiXxTNCBP77WaitUhadQU1YLh",
  "key35": "2Tfcyoi4RMWyVuxEer3eGDin4MHN7VRiUQr7hyaogXCQH7yUSRyo6BQTx5fTuNBT8hzWkfGF4Dra8qeWYCEFt5yV",
  "key36": "2c4fLUma4Z7RQqivSPoubzfWVSuj2r9bB9hfCdbaUsfEWjrS9DPDwai5veMDEf7RszyLEC55RKiQsJTgpvLCa9mN",
  "key37": "4gXrQKHPtUVaNBxjxELkB6nAUHWGBAhQEGNcUrumzwsQipez82sEbmhVDCxHabyCshNHxLuY9nJi92r8pjram3Zb",
  "key38": "5QnSky6yP64geMo71sxmvVCZgJAs5KYE7XD2vta181fnQc3DpW1mszooo4jLQhi5osz11pPYgLhrSp54SoTUorQs",
  "key39": "4qp43wA9sxWht6ZFS4JcZ2y1EgkUKFDhdr3m5BzpWtGpSwU6vMRrw8QvwW7hCS5JdL9XjmnkZ61RPRoWxaeiHDji",
  "key40": "26KaY7i3tWV8bMuLcVTQc5gj4jb1JrUF36vAkBjizry6pUfdaRvK5APtEB98YT67GJVcfdsAvPnkhgn3DxuNAaPk",
  "key41": "sxmXo4tzeNyFZkDpZePZhdRUherLLAvTbp7xrWokB1PgkdEqf1LzTBLsafMA7T356LBkZemnsX9CDn1XhxBkENg",
  "key42": "3MHhocY1yLM5rgZ6v2dqQT6BqSApfjXHg8BXBwQSyE7gsJRq9vijN1MpY9tmoLJbb8HZfn4MmjZVtax39R5S62ye",
  "key43": "2dBqWXBGjo1hT2uocN5Fkd4NhAyXA9b26wEuwYsnrGvhPhCpVtEsiRvG5pH9PVu7jtYQvCvMRxxoeihnWXMhJDJy",
  "key44": "5D8iDcuoGdNmaULAj6YKkxPDR7RHwyru28FBSmXcmkDcokHcQByYE2E9xuDhmJemFHT4wavfs5XHrc14x8pRCrML",
  "key45": "4C3gaecfEemCZkbXhZ6TvH3Lx5T11v1b4xvxfqTACU2gXnGwRA4ieXHXjnY8FR5xsjk7kKpM756nbtArQVocW5B6",
  "key46": "3TNCZ5UDu3A1Crh1aPLndDbqFtkpLT8Zmk5mrcrpF4iqYojAMkh7eHVEbgEv1FkmN9SURfsZJXk3P2ZNc8kseUQu",
  "key47": "xYzCQtZCvQxABScnfWchvpomePFdGJhCFAsbZyGpAHdJExTnugyXGBKfmEBNUtZr8Boahi82WYYqa5XkpD68kir",
  "key48": "2yQxAm8fXKNCr2MyFQkUbqaP16oAjE18DtcdzcMAdvcU5qp2oEVe4yp8bXzxSCxRjKx65359rnRyN2q9Ux4uX5Nd",
  "key49": "37S3CFYEMPEUDq9cuz6zgkB1EC3kbgxq1hXVvq2262tYExu5keoaXbQzEE3EHJ5SMsvDpv3AExewHQKuxgQye6jC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
