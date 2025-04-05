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
    "33BWiBNDNMiey8dCk1T8dc7X9S2vD5sn1rTttdGbDtkK33do9aTHzGVw5hx1MizfMaaA87iZDvczEjh5qx6suH62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omBJiM67yUreQDHrxxfK56vzFcjwfk4aWSysPfogbmgRMzrXfttYmMqcjCsd8nAoztiFBeuVqKtci8rMTiRZSP",
  "key1": "3o7T4YoUB5NUaee63FRY9G2dRWd5ULsmmcUS1xnsrgoLK1neZ1BV5SRdJ8e4kUmSXrrAN88HiFEfnjRruTbeXcYL",
  "key2": "9Dea2Dc94XBNgKnxnxuxLSR5QvDSx7b8XFfu8tANZRLRAfor5mdC1B5e8HJYQexEwZLjQECKkfcdrXNXBb52vuj",
  "key3": "62dgtkyUBq3iW6xjmwWvvnnUStoFPp7feUoULfox2Vp6HZZu1x7k6SUEuXkX8PsYgjq6eBBADTXW5ZdidSffPSpr",
  "key4": "2H9pjhJxUQUxaKtrNwHZY8xLVqoQh3EvZ2Ljm2bErtyvkhXNkd2yAXau3V8q1MBc5sNQwYSbAwkEx5CgXND3nHJF",
  "key5": "3ogvMcf3optvuQzimKHTZorRwutq8boo971J27og2yRuQCgqBb9B57CCLTVsHNCzTCpVMyUG5SwH16kVgb7fSAju",
  "key6": "5AFnjwqrHB5sJx31o3By9eYi4y47DVmEoJRcPXcBUQPLF65NsdoVjYA84NLcyh81viwV7wdxFTKsgQMp4SAEt9N2",
  "key7": "sL9TZqXa23cattZViRtp9M9vzaBhWX3LpPDBiVXLQ2Dr92bTX6Cm53amEEA6aABg9SSKFZUrPY7jMfDSbNmBQoo",
  "key8": "28fE9pvJhKVssxi8Kp6QeAsJS4wyU1c5ut1RHScmFWU9VzexM5nn9u7mrdX3AcWDTAnvj8TNTfFpyFzrWQrAYqtT",
  "key9": "36dj2tjwNUSvd2c4V5TJcQ1N6Y17ZDdWn7Y5u9L1MuXcUg8QY8yZQ1rPBcx7GcPJLQRYNkURmNoMGrJVffrCW55g",
  "key10": "3okZZBnZJDqn4KGgPT575LixohHHNYzLRmVdLKoi5uqY4H5eimbByx5vJ59HQj6V5QKCxwEEpjxQRCdoEjLX7dTW",
  "key11": "2jzhSGvdeQQvtYbuVZNEdrp6JRVZGeE8nnSxv6ZVyhMqe3or5VhLeFmrWTDqvyumHUoYehoBrq64uUmysRnZpmjF",
  "key12": "4jsoWGGfK3tUhSm6vKuBuEeptdh46VLH8kY3EMViK5LaNFeNTMEHA6WrKyNzoPxr96HYJahHRE1h8XF2W4swadxm",
  "key13": "2AxP9EpqUe4jkrkayYufidseqvnjnVnWybk63r62hyYAc12M7kRRnDzsH8jxpW8xmqGkAMNomKQ6CWhovy4Do6UC",
  "key14": "oEeKtezmxHEKoL5WmyWVTTEgR9iWpaBzyewYEJDMEhCHRK8bJAnpKSrF2QJByw89wPY5vEdAY7tPrwWdY2xgobv",
  "key15": "51pUw3AuDXF3N9oA9TNqLXsZn3SkntW8ViRddxrJw3sxzPG2MxkbRBUVApi2687qhm8QyPVdArdVA52kGnPuFyFE",
  "key16": "51w75uLcnUEtnMtJzxkECnMHHSYdhR9YtyJWWgQjL4KzJ5vGMKbmXfAW1r4bcJPkNQpGUEbgAXoLSrzpzmjteHtk",
  "key17": "2rEbgqVBGHXzZNSAicK8xarFyZvfJooabq6JtVrtkCjJjgfdyQjxdw9789crt7oLqp1hcXmfgU35CG2iPFeRHh5Y",
  "key18": "26NGh6dwkzU4FxWgvghytNGzKo4cXorkUeauHdmVGB3VsL4jL3cgx5kVK4WxDTskhkSUDgbVyRupJbH3KTr6rptv",
  "key19": "Qb87TXbebXC8hwieAG84qVM1RHw8zd7S1x7Ext2VynfkjRbCAUyfeo4pgojCLiPXgpPcQNPwKURjgwtNxvfrGGG",
  "key20": "5urKnZDTjXYLRVHHGCoPzKoUHJkXzDqSJfNkBkbr9PbhctgLQcCkjmY3CDavNjwjEtmi4aEwAoWfJyxSH19Cb28X",
  "key21": "3WCFfuffKb3YWbGmqviKsYDN2rDLLtvgCrPZwD1hCTXW8RKrDT9QxeZQ24d5WfJs7UNMMt792zMAk5saQ96zuhkM",
  "key22": "3G9cw11DpbPssXyBZKXfaKkJu86zJX5mfksUxegUjMHw68CcJefY1qSuRmreezPuYDGCieV5TUPd8P71UMQiN4gZ",
  "key23": "4hwRZzFG3Stp8o6JfWVa4Y2ogt3nbgY192eBCCpmebPF62TUqcPMML31pjYsxKhAK7HhW2qvUN4uaD2Ja1kumQCD",
  "key24": "4GwgzuZ5Gz8hLt5ER6NnDXACsSQvECSxA2jL9HhuViNtUozkaj4gWJYKC6qE4qXCBEkrSfPC2Z2F94u8fjj38ZQr",
  "key25": "bAksBYm1zANLyGk8iVw3ttB1HKNJ9utxkh5NhpittJYDtBfm7TFZT4F9Kn4mAi3Q9V9azKtu95c9AZqBxf4uAck",
  "key26": "3WE7sJwDm3VueGs2Eegdy6WueFxgFKML58zFc4CCT8hbjQDbNr4Y6EAL4dkAia3Gtkfv2A4SPZ78bxBoLZKCwQox",
  "key27": "2YtkpwUZEEgQbBgZoh3k8F11R6EskeQSE8weE3Dw6ykePqEk9kb9PJQf6Vw71tz8Hg4yaqDLn713UsqPid7uXB8D",
  "key28": "5At5XQyQxMsscGryH5XZdv4unHiyaMqZPLgr7Bw43nibfj2J968EbJsUU2pjBZwzphUgiXrEagVD5VvRAoQP5AR4",
  "key29": "5joVP9YK9xZQxBbyEHEsj8Mk9qdwXmDhXziBV4ajrT8Q3Q6G3XCgWT2oVwKmMWLvJ3DbSFVShyEbAuoxB2tmjFPp",
  "key30": "64YZ1eSBeEwqLq7yerAeFJf5DJpRDymiDsBqokpmmXtkMxywwGnERojVGDD76Y4Bb273AdqvJEjH13NMBtEsjEU5",
  "key31": "5ZGEsWmhczefrNZ5tC55ADeuHYrwmWypcVx9MyhgkgTdqqnbaDaszMgobDrhf96XeQgcqtQ9adBBWyVx94YQ8Ypf",
  "key32": "4EwKHYwArAfQ6THEeXuQHTfscu2em8bGcQHR5Ae7kUzMTMMuY7EpCt5mr4xXpcnXyK1tHFxB8Hfq2yx4DSfBD7re",
  "key33": "4hWx26fAJSmy25J5v1xcYnK1XfKgBkJRDySLfmDRw8kCiUvBoa83px9jnqGw8adMELgWKgpEvBR2uRsCCSha42Zj",
  "key34": "49zNtKj3XwzRTwh27HcLVx8arYB9iJVsPTDGPpxmW1ATNW1Ji8Ffz7QmGHpM9yaPyKkswbBe3TCg64jTRSqE3JEk",
  "key35": "5AoquWQhYrV6Tn4M9k9Kgxz2ohk7ekje7YN37sTYY4rmFb4fGNQpNsZoJXGSjbqaWdTV9XuiBHwYSWSi8hhHavxi",
  "key36": "3NadwmERbmM8ViguFrn5gz5VUQn2b5uYV2NTcxa3N9KFZnZXz7pKVc7bYjEXgnxHNotg6UaCi2dMnbkfu5PieY32",
  "key37": "3ATFcAwz3dzZVhYDxDhAe1GB3FBWq29cwCJh5GxUpGnh7kfMFU1n9pGEym9ecqaQPud47e8yeL6g7ZtoycMHjjZ9",
  "key38": "Zii3hnzX7XKzUtMMTn7SYT9UgnSS8jfbMEHYC8c89urw4x3rhQJTcRfPrWg6dVgeiKuBiuEVFxDAEt5oVQn5YtD",
  "key39": "4YVr47FoKkvj6q4H5pxPZrtdGcgVaynNXSttTuCVU7WnFvPc6sdYX8T3Ycv2MzSMLFcxdVVk344QKmYnVWLxKcbe",
  "key40": "2nSDeEGetNHED2xRg1xgLqFza8jT8sEaqzGMbeLzqxqTvW6FU9dahQ6n6sEVkQ9sZ6VCvCjTxgNQKLbqfDAWF9Gj",
  "key41": "459nuUBSnfScnjDDY7CnWFQQJpzu7P3Y1pX8XVJm2828LZb4SfwnytnNXwk4VaU62P4dKQHNSQiBn614gaXz1p53",
  "key42": "HwkokPD29h9dGHtMxfxvEo4ZTstz8L9vpBVFwGzJfVvgsqD6QX8uaoi3iVhC1agGWcTKx9rZM8x7nZ5LtbBZTyo",
  "key43": "3nYwrrUJSfsgyikMR3rfT43DZUukbsjU1nnPwUkgxmxFLjgW4V8N5PNGBKVTTwzbWZc1BNjrd6pQ7BS8H7uN7eFU"
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
