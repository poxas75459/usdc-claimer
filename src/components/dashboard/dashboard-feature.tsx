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
    "4Z7jG9Kb5PPjVJayuQLmSeHekwZeyCETvac4Ugz3nkcmPZXiwAu8dvE3NZF38WAy7t9k1NgvqaXoyTnirCk54JFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ikkCZLcbhYJjfcMB98nsDi5QVBsF2qcLuSF57g7jLgYhWSekPaibze4jL1dRr2HVaULKqvcvBZB2TtUt8QgHgv",
  "key1": "3SWw7EKPSPjSufy4e2WpuyNJebLs64DjyM56gSaoY4eFd1TBbYeCch7iWU9cnyjPEB8f4Xbw71mZiL3ZpQKuepB1",
  "key2": "41EzfPZ4ggZGSZekPeSV1DKdif5PESkcCwWrN48f3aE9EnZR3aWvH6egJyf1BV6MF1G6Ftv5jKNhQ3abT9ib4tTQ",
  "key3": "5mzhWCoZdK4WjJX8MgoSyTFfAQBqTZHvBKtMdczFBbqSbzXj4T15KGJBg7H9KbCub4tXA3hWReD9qHAoF5UyxBRG",
  "key4": "4FSiLRpdVh3JUtxCdJTUrwycX5xUrkJkycNdyq4UMeEsCfmqie9xYywSWEkgnef3ZSzB1kVR5boDRioCZBUJVVzL",
  "key5": "5kBqbW5UY8kjFdYkwPss5xgEukxapt3nEch1ZTHtVAZeufKRYxPdpexBxZPM6HbNspDSS828gqY4vDf9vQyBhyro",
  "key6": "3XuYzsBGGby1fb7kq4UMBFudvS1MmZQP7oLd4s78jtLqjMtYiqpn5dcMc86qpUyrGXMBfVhzg2kYKvWYp52NnJRr",
  "key7": "5DpAsdbYDfwUdgQEX1dcfkZHEtDHAhXobobdisF7rYEgVNVkuZusjgDN7YuD5App8Kkhh2BQ1iuw264fRzbfqmcr",
  "key8": "VocbryiCQ9VAEfG1sJ12QU9DtqNtTkEkWJHvNBXHFFCwAa6Vv2SbGdq9PCCY1t83dvSsjYw9hhVF4Wq4SmmBmr9",
  "key9": "5f2BPrT3BKTBK36GwS4Gij8NuetWPZM6Ta4zQfqahAejvi6KDZ5hyRe6zZtWar1dK3VKa4wo4mGmJpVzzLdZ8VD1",
  "key10": "NyxmeWRef5KjU2pwG78WZRzsY2gc87odoUstVXwKxuo8vQaJG86ApPVEapBB7dXC1oHfFMgA497VJxYcfeYrueY",
  "key11": "4WdA297tVAgT3xb7JcNiYYLeNavR28hL16mn4xjwYvL5GcQLFYCiHEuKUKy9jCCer3jFPtuzcfzeUk5TtWCNmEq4",
  "key12": "52PNFFYJihP5ThP79t4r35Dc4CSwzrjoT1nceeF7udxdWbx6ZkN7g6gYziRUojqSgn685Kr8JHDFPureKep2prwa",
  "key13": "622g7fA6Wr2Go4MTAcSCaF1LiCJXPFm5hB8s2Rrrd5473GLyuAREwVGx4NyuxcoS1R9XRtkYz4qnGQ5zZdwQjZBE",
  "key14": "rDVhTMcBProffRMTSR87jQvGfn7TgPwy77RF1ByMBs8auTX4DmMmkg74cENaVfMTB8bk46mRguWGDGC9kV8K64H",
  "key15": "3QfFVzpmRGejVqCdKXTtEMi9dtm3QNYmaiJVPfa4CqRpUaorjE1k9fA7n4Un1LNHns1L72ARAmPgGaPd1wXEFaYK",
  "key16": "494g9RdJ2WmbGD4rEV6YMdxTcJjG6S2584ofCas5TeWMY9DEUogtPqUXfyPP5CKMHLdAFE1GhCZBB5JgAAvEmZRZ",
  "key17": "5QvBnZC6D8smPEDv8wVNDk4QVC2QjBN5D1kTGeZ8VxrDrqsL4Ue4tpMvw2eciMSX4fy31GwvtRgvrnVF6jkcrfzv",
  "key18": "XWF2s1b2SvYfprxcG5qakMXuCQAKNZsYCJY9QBuKdXDSteAv34hGJCWaAdn4Sth7Ps3g2S6cYejCBxd6uNZs84j",
  "key19": "C5uD3StFPQbibAYCqL9b3jCsFkwCkgfP6actyfP3mkDmBYekSbCvBFWEBxnXR87MUtphD1ARRWdiMDfD7vWqmRh",
  "key20": "4csrsbvuppYoD7RaDgZjDDekTxjxpx1JhBm2yf3oxGnYmGYM2Ampy9ZcpAur8DZ8JF1QK3qMXtY8ZT38BhHUud2o",
  "key21": "2VoNkkokK35XjKhL8oVNeBaDwaJxnqjc5mt6jw2MKjxtzPRpb6R14SRe9FXYEBcVmGA3Nta1bipWBcro8J3q4F8w",
  "key22": "3pU6kbhTPFxxzhjubTFMQdhxtHGqp9dx9teD4aPmUs3es7KMR6BgrYSJfoDDn3w8ZwUwwh3LaLuG7PzeUgu2Zbe6",
  "key23": "3Kdqw3JB9V4GDwjmdertgxCcJnvqbiTDCWmJF3PT6kS4ZnEwPBgYSxmdjkaMi47hPoEu3swkgQ8pYtGatfUmtNbT",
  "key24": "23Ls27WRZ9WUWUwCoEQuVMyTZuqB2otFVNBq6ycLfvZCpqKw4i3tF94hYeWAkTXdZ4GT4bJtnvsCrTKrM4vnY6sv",
  "key25": "21XU79ahU23JDvnx8jZ9jJQ9HtVo8ScqD9PUzJcHYPM53wtRpqAaPDttsAFwCMD39o2DhPqBHuLTR2aq1ugjm8jX",
  "key26": "3Um3GEpAFhdv9hxekWFiEnks3nBWXh87xEyfWUSBmfsDKQe1Cqxx1mgtAQcCv2PNjJG33n6ENJWUGTmbE9vJUcBS",
  "key27": "5fqFT9N4nWyKCzY6nHa1gZjCzjcdVeUuYq84gZuUpXpqskXFzAyxyurrr5bEGZNH2RZXVj6ZMZKrBiekMy7d2WrD",
  "key28": "5iD4nQkwMKg6Fy6KgKJW9FCV93KZXp2f17PXJXLactomU2EZK84EZqt66PFA9hyFTcB1QNJsPDkawoNEq8bnnUXd",
  "key29": "4AXCc3NwGP51jjxKRozeqiequvcY3pJyVGyfGjLqzUaKKv7m77ZVdV36pHRWHgPiTWgC912cK1pAMTm8JVjEYmjf",
  "key30": "42ZpWdtnJWg3V5fEG2jXkRTxbNcCiRuDX6WfwC4B6uenYUUWuf2dwtnU14JwR2q12NTqbSnc24SQE4JZSNTihuHg",
  "key31": "3vs916egEYqRNs7LFsMT8y6aXEyXujfYTB6NqurTZ7Zt2d8UX9qGn8LkBz5R8avu452yf4zKmqpXP2h6NETmYKRb",
  "key32": "3cT1CKVJiKozkH1CytSXrXQrzJULfb6Zek8MPSCZCv1ka1qMfQAYBJWBWeyaN2LrTiw77HyHpbzTR6NGpmKUQmTj",
  "key33": "YN6EH9xPf7i7Vk4aH1EkkVY7P1NWc9XBNo72kPKVYot42QaSyBvr6FiXz8MRNj3kz6xPpMajab1mRSzPPDGcUAP",
  "key34": "5XAguMrzgvrDqT9FH2VsSWSESpyh3pCJBq3wyjbhE16xbbjQJKJ5BgZwj8YHqpuPiquWRjzpGt1rYgUsKY3k3hoL",
  "key35": "iSor44jsCqhge8N671j4wKLun3da8YDwxqVSGsaod6WGHkAN8uZqviMvdDKPf3VquEwzYB7F49ATqmaJmAtW4zW",
  "key36": "3vSGvSDVasPCSqBc8iS7SszVRSLMFeW21C7XdWa7LUpp95cQsi4JFRg8dcHhhUFQsoP82tZdwte5GrLrSxEA3RJ6",
  "key37": "EE8fJ93C4q1jxrBhDxuhxjBMJu5kbhv4vbpHUj7KHAqeb3FwLYoWGMTgyXppxhQAh7vAmCkrNXkbwKQanvTdCcu",
  "key38": "5yemmLpxBaYjxdvm2yVWfk1TKN4eWXiMJGcJnMqRAv5jVzG4vp29P9SSbo45V6y8Z2VFEyHYyEpTNFKUHsAwvjds",
  "key39": "LA8XnwrfZ4rQNLwwpis1V2NVFnawezEhgfADTCFCR2e14vM1wdU7cDMfWpftek4rA5TQdKwuDjfzVWQKpJp3VZU",
  "key40": "4Sd55otZicnwxAGZoSf6HpM6tY23tfcXwAwmKm3Y4QAYzxwhmFpNBeowbysP1BECYqroJArGEJhu7gRNL8odaWU7",
  "key41": "47drq6kvGBKuanNMiJXaKxBF4BjJCFC5MiQUuQsxRcfgN1WfpPx7YWHoNMFsBrx75Hi51XybfFpf6io68wMH4Bg9",
  "key42": "2bodG1hGBi6uQwohcZGhTVwCgB7azgZdu3kCj8GgSstM4WeyeHhK5NZQdeTtTDvMZ4qRd8j3p7569XXqzh7zVwot"
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
