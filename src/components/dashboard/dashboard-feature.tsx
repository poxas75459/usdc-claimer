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
    "5Z2yMmx5UUGQHPuPgNZtJV43PD3ZT7jFNCV4Hd5kRjjEejWabC694vPgCy32GNTb6u7YvE2jsrACidBdWQs1TdCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3gdKX43XAibawgShAjuf3Negze4es9qyZwmCse6aXEpNTcF98NY8gfJcnQFW9X9fPNtvqnSNbBHHNZd3VuqQvf",
  "key1": "2W1ch1Dgb8id73RV2ikTUXKCPpaSikW19qRgJ9EwNmyBBJiDSnQnshtrWvR2CrwBviGgbSHYyC3kgs1qEQKgA4kv",
  "key2": "5Fc7b5g5UzU6nGJ4LkRmp3VCv7EoUXSxXs8CKBnWh6eJTsS1qAVz3HPnWrrPnrkAj99YvM5KBxa7np9Hny9SbNkP",
  "key3": "vsCrV3VeZerMkUnnW9Tk6dbPZjUexuBiryZrTEbmwEdGze9SkwzpYbicKsnDre1VuwyshzHfZBYGDc1VMxDad3S",
  "key4": "2GFU5MzWb2SrgnXco9gwNuhjDU3SKZWZySGeRiKeMtb84176WTaHQUZ4nJQ1tg6m5uCcF3KrbZG7PAGe6FJNJ2ZN",
  "key5": "5nwPNFZyy7erCBAjvY9SrHJ9M5Dhkp1u5cJm2XcqpuKWrJR6fjZKq63JYgBsHSLRh41zZM8MYKHqxwe9H5x79DxR",
  "key6": "4zGLTncWHieaqh9ouVx45sYC2Jd4ARaWuSPq4G6KrsfD5HBgjLa5ML5d8bUxbM9LHpZBdmf8UU6p4LyNCtH7k6Ep",
  "key7": "5D2Meb1YwcDqass1npRygv2CFe4g9T8ARcQ1s4G51zvZEuD9Y7A6qBZAU5ajJYh3TFVdencLGEu1vhCVHNLYUB9F",
  "key8": "58oZymnUWzcQ6LeiM8EaYHbPTm8QDQHw3xhSf5NRzKvkymmAZFNBtu1DecKwCsJfMCf37QmEJ4iELsWXSDGopekd",
  "key9": "55PvzWPYDjVBBnWprVeGjy9qeAVaY6cctrmAAPSRwG6v8V1CFrSdjJkF3a6JKtsCxeanappNqDCRxpwAuNEhMAYL",
  "key10": "oG6ESSzJ4mBzK6kNDqErvimx4R1RZM2G9zcNbQsrEYw6w9xZqU6Nvgnj8UcQYJPFgaYEtceTZ2NbAerjLvfo95i",
  "key11": "i2PnhsL4dqJGbEwWsekYfWPxPp9mqss3GapNPSuqxcAK7myPfbsb3nPL9FSFgCRFMZG5CmmVejFBDPmqS8r9mDE",
  "key12": "2Txid6vigToHsXC5zdoPo6V4A8vkhgdzQzsbzH2fDKXpacxvEMNEGV7Ft2iyHANfQdZ2Y9KRBzYmVUSVFkYX1Mvz",
  "key13": "3PtazpncRvynDamJ4UapXHCVBGWprTgo4bjLjNLXjYPp29V9jGXgAodkqGkaqJXp5qd7iTAE6NeiH3m9jtNWbnRD",
  "key14": "2MYq4vWhmFJFde8oHxXUQc3aS4L5gFSq2e6YGX7NqWfbMjayMxzZ75s2ZiqTkuQH3iyKKVt3B5HDoLNyQ2Khc3pN",
  "key15": "48W5AKknuifxYRtopmQLfQdunMC5LBSAxRDYNWFWyfSJiLKJBdqTEVmefmgVvnnUWjHFmgYfAm2AMouB5s7gAMEr",
  "key16": "2LXybG4Bqh9P6CfAxaGT39smenzzYtur2oyQfKWANgzVCMhBmrkSJV2nLWPBKmUkcovL11aPSX8pWdikX86PkZxd",
  "key17": "2N6sVwywp5BEq4cZZoZGDssLuQrax6ikJPjiTvCNJsyG6pjkwEV3b6nZ6RUsK83fffkJWSynQszga7uhMHjQag9t",
  "key18": "3rsdSojQS8BE5wBvDCHNDsVxhaJqd1Urrf2bcQEwwMW9Ui2QaSTteJ5paoRtqD8ZYLS3vpqgHyggngNynbxLJKqL",
  "key19": "5H1SsVakMjtivAau4SAZs9YZi7uqSfCDqaz1dj5vP8HfiMS17gNsTAxeP4EbfAntpMznRpAcXCEh12ymmiaitj5E",
  "key20": "54etcuvHGf6CeJ6PEvxoWNNHm8B8t7cHRttRDjCf5nUgE6T92gJj3AW2QaRvBXtp71jLj4DXxDyuF1VRxqj8kdQL",
  "key21": "LyUqCxm44bzmoF3tPtQSznDm21zNLdBWNPqfVRdnPzmxr7haysM4LgNMUKDHHmeoJqvTfk4hjZ9ThdHLHRaei9K",
  "key22": "2CtfP22WFXQE5jofYD79xheEgBvMhDMiFGTtheUMY2QpXYJ5sy3TDTBsnPceqmX7P4QHrwd1xGmP9TcmkW4bTunr",
  "key23": "4wjrYFGyxZ7cvzRu5ZCDiJSzT5Esu48f2HjgRnwRopRKDpQukbwL4V1zRaNZGRUQzTJoh8GsrgoPbE5NX4QtW6nU",
  "key24": "saazJ5mLBT9gEQhfSxMXRq6YKCPPVEWz8CPAQSx4eLAry9FLHjdMB3V9977eRzouJcLATyQjiKZLHiPox4rcY6K",
  "key25": "4C72mLsbis9XuhfLP3FH4NPHJc243iwPianZ37HJNveVXvXd9qL8o8zWkCBMhU3W4z941MS4UZtXGZ1HPYAGi7KA",
  "key26": "24ibv54H7vavLC5TmKwtmg3SUmbgZKBubszSVrUbKkzxNrqwTJBrjWgRGc4MJXqWRNL7ZzBfd1aWUFDEe4TwB1qz",
  "key27": "3bzhMBsHiaERhNkWKsf6c39hBbWMCndf2HkKPJiVCPSH3Ju9NaWrPwqWma1cUvGHJif6iM8zcGx7Vhz94RtjAg4A",
  "key28": "38gbjgacRe42ahxy8cttTPFp8oZuNZxBjLVqrJ8Qz51fKapEAKzVa3P8YeBBUev6qrBHurtzq5e31freTkWznYKU",
  "key29": "4wihmtXpZMGJXpTbFTRnUxza8udpBXfKveCWihycw5EBNrzwrH9o1NyPQU3cXiz2Ea39KomZHBbjQx8Yi1jh2dQ9",
  "key30": "4K1C1ZWQguu7RaAuThDYwmHaNnXAPG4p6hxX3vxBrbVesFcmJKELu5Y7cwdr1bcvvDc6mae9oXuc7dUG8Mw919GC",
  "key31": "pN33tSfAWxEqpuTKRJtqwHwoTndTb2n7ie7VthTRAodBF7QKx6heDHvqBdgVGZxFvr9pjmH21q8WZ4z15QqqZsV",
  "key32": "5j6sHRUTx27yFH4NDmpDPSRV9SQWiq9bjQiRDHQvwJoHB3ynjqT6mqp1VxY2a2EmnmCm2FzAUtRX5C7AKBfz6sAD",
  "key33": "3b5tjrtSRhYazSGY5qTygisRWQnxHqEtwHRb1LG6tmhmM9rX8PrgDavEwEDkQrziPBrGoCAegQTm3zqvCB7Tt68b",
  "key34": "3XkoTmDjP1cLsbxWk9YqUHoejgWLkzsiFPMekmScVsiL1jWX1eSo6oJjiN5YfEbetpi2342dMhaUdYLK5TZwneFS",
  "key35": "hRGwaNU3UvNvDjdSD45JrqDianvKsnuqfnUpoHWC1zKcJh6jqeeK1EtffVZtwfbpzdQMimVeTGD7cWkBf93q7fP",
  "key36": "36dqJxQRYuhuUeBiqHW8bjVcvkG8YFBam5P6ja6bgjJoyDErc7cN2CTr8fzk1fESdWGpbXVHbomT8zSF1fjtrueY",
  "key37": "652JydorFhrdQVwBpKCkH9JrUb55F3KBdaUjLAZWRLNP9itTVZZ2SU19VErwrgMVTRLUUdLBJS9xp6B99N95P8wF",
  "key38": "d8bQwuwpenbJ8AqNNjqGNG6ickRaPGLJsv5Y8D3dfDgW4AgBJEhWuRB7qFBCeYktZADCCUB7z2K78APZiSNt2em",
  "key39": "5trZXLPgqF9NAkHVi2TLXpXVqg8fQRmLq2DJ46gdaQYGsk2Exw5upJd1oRkzG4mkLWXoZf6wf3Kjtfu5b2vkTkgS",
  "key40": "5S4bWXMgfBjnFgAAa9rE5o5wPWkqqbZnUowfp89LRBst7GB5X45NeZgcu9Gz6AzMe9iw6zjipRp2wMQwvafEabDC",
  "key41": "3WjgBwRunbaRJnjhDwv4DaqP6V2dpcwoFDBPB7PRMebpg1tPpmPDHZJQRtL4c8iBZ6U4NwQXkktTfwqxbsdzq1m9",
  "key42": "5NBGdk4FYPAAHCtsMvgVgAacS5R35rdPSH2ZwMWpcQRedghUAAgVkNKos2S7sKz8Nj7QaabhgK88g5KwiN4Cjkfb"
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
