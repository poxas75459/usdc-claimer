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
    "4KWighVV2UHtahCbJqw2796ezVXdMWfxNPXim4uK1U38sMY9z4h9wPmfntmgtBeCYAe7AUmS1i98579enHqLRJvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27CH1gcH3W7sMuhuaazwqZCX3ZLF8WPefCH56akCDLMSNmRmcgEsUfs6qWo74VXQ9kgydzftLE2TE9aKC2t69bxV",
  "key1": "2PYCDCbUQZdRq1pZnkaVPFLJ6zF8UFD7b1FxwMBHu7Ff3V1EATJjCMNsD6UWfAV12hTLruxNmWQqTWdnMmfquyoB",
  "key2": "5HhxS7cdacE7uEbrJBgVnCK5dc2h91zDsvFef6Gh9dDBsPHAA4s1qExmvRQMWjKaPeABc7i5BDdUC5DPzzw7tvsg",
  "key3": "3n5mCn33Pam95zpf9dS6wnHfBHPwqWcCjwA9QXqpYbc71sLt2b78Xm3BbKaG8FRGrRxcjtwWqKrZJ9cdgu8UvuHd",
  "key4": "5wLne8rRRXt2aD92Doaw2rBDEWP4jiHsnFEGTht5BNHxuHCxNLCFAoVZHcoqemz5gKp68qC7MsYB7a6unEucht1X",
  "key5": "347Hg2iBDwiK91XwFrHYhhgv36SgAya8jHf22ujmSqz9ez818Ydvquygde95XSJTCN382ovRka6aJ1zQrmzVqZgm",
  "key6": "3PgWSNDyXk55UqQcMVr4dDMbfKB9VQ69ayVCa1gXCAWutFWKBnJ3Xw4yasnTUqFj64oyc26a9sXJpXVXfwvfJ2TC",
  "key7": "24p5MJfJKcuc2cVnis2brP3NvRhBP54bb3nmD5ofK3jAcUK7rcxmF5LCbwqTkVqAtfdZHxqiSmTtE4Q16dBGn3kh",
  "key8": "4QcamSKrvEPfSUMoQEbkRBvFUSh5CzzX3QJLFWT5kevoopAPDXnckSU6G3gebznLcvZAfkpjv4gv9QmuS22BeASF",
  "key9": "bpyX5cbU7JCevPNqhTwBisjhJDNr8FRrWfnXtsPBHgxGgQXKqTX62cfpuPgAVnaBtSsE5KjtYMofLMouJxGRuUL",
  "key10": "5Nwt81pvShwqfa16ShZ4jp8a6K7JYvouGXfJoKf9KALrNxuKoZAZwujde1QMRkFnshWj41TzTtWjjgSZd1hUh2Sj",
  "key11": "7FUTApJWFPci2xPsweYszaHExHsu7wPEfpeoYx3pnmVox1DLuDqVzrN7pnTDvdLDRNzE6Dd1PPfTrMFajLcrtQV",
  "key12": "kMWo3fXTLEYeeTCuDPdXLHQst8UBq7RByGEKvGuyb4TBheJuGX3x9UGMQu64MJo3jCDkLcDyhJcPqPonkru7zsn",
  "key13": "1JcpG6RByooQk2RExRF32TL11bR6q4RLRy7vYH4Bxafh1JCnc2ajHhKLzmvTnQc2BnTcZr62c2A5e9WAvmweZnS",
  "key14": "ZD6iN5EZbDz6kDogNZpLpKzmXF8h2CEY9KjHmMdgSMokCDxHPkJeBLDd35vsG1wy539uZbNDnUAu2djoM5pQQYT",
  "key15": "5GTSdPBaUqGKJWVmsW9i5nVhGpPTxTTwxbYBqnw1xxsbX9pxbXQobAtfMuHhY4v7PfTkwEutRiCSX6LB8iBA39sn",
  "key16": "7oaMooeWA7CbxzDj8yHBiPg48QtVti122A37kyLffzRYP2MtpwXaeDZzFEHxjR1owiuZeCr4kZUYsNAEVfaMksy",
  "key17": "4ZMowFcBByuDs9qnzHNqigAExxYhCgpfbAYWdLgsWrSLVXZbAN7wZc8RLgPPS8uFnmNeDyPa34BBTQua9GdFJMz6",
  "key18": "5Sekxwp1cY2h4aqp5TbEgM2rpfixixFQQy41hGNNUATRvqXThpLjjCrmFoZLBnB8ASVDgAoQgbCgRWG8qVqfv28N",
  "key19": "64P1uXvJziR65rSbF4eTM6jM2mrdpp3wk3fPKzvPnjeTbRonP9zg2M3cnAQX1K11zBTP2JhrQDM7e31LtyCSryrD",
  "key20": "17KUkZRFfLVTPB962BRoeT5t4F8sQ47Z5ZAwgEavtuB54vSwZSWQWRnyhbxvKYos3vo5r5Gv8yeePqA2SqwQLit",
  "key21": "2VYvYmEGWX5kqkGRGrbpDNzfXWuVVKi3jwv8eEuFNaADgjmmG9GzWC6sVMbpbwz1Q7V7YUHDLqXmvyUWLvFCRXW",
  "key22": "2dmKgGpejGUzSfwXeZVL4DgTFbU2Yx78rsj4AwkevmVYXu8zUTTaoiWKtRAAyFDQY1ntWKfKZ5bhZPkEe1hRJmLw",
  "key23": "KNxqKM2cLGjcLjFWvFS8BqTRrTTJED4vcsuvQdij241XDfVAubTMGJYTxeLbbsKsq2TfnHbdQHdcT8Wb7jGDvh4",
  "key24": "44SFVGCFSjai6CBGQmqtGo68BkjL3qq91PKpmkUSkWRkDNxkT5upbNi4NhqKqd7G4uwPHjDpdy4bzdi61bhBEiu2",
  "key25": "3RztVwDF2fQdxTBex7U6c5fM9vQt3qxBoNRtcXhHdNVPEzwDTktURyDdroMkDQAsA9NrNqnvV6ukTTAMUm1AzU36",
  "key26": "3bA5JiGiUnuVvC8SGeUpYgnqiJDSpZuWy5HhJxPDzem6VbyUZtiAfZgbkyrFDNtm7kBRwP5bpR5wHV4djDmvTpry",
  "key27": "4U2SwTdnRgrYubAwJFf1XiwiSkzhEtCYe5meypBMpheMwymuzccFa8Vysoc1JmKBm1GNWr3PnKSdrhBuf4ykJrtC",
  "key28": "3bmLv6NgDPBFUkhNpA5fEmjsUyXrbmFjPr1dmhpVBsFBxBpjGTYjvEFhbxcVHgA51v7uW5QyBVjZg62fdiZ7XLeX",
  "key29": "rjEGJ8TQtJobrHYBXRKgpqhNeNJkuGGZBHxAS8ANLvVbRFy6JLhDfevTKFGJWRzHsLu3GWqe4vAGSu6LoVx72Cc",
  "key30": "5NPKHBHb6NGQVJaicmQc1HnTHrsJfrzrMza1552hc9ge8ZiERtDNzz4NoAXb5WBxsu19xfVPsudmhEGCyGG1ES8n",
  "key31": "2qyKZudNM3nY31wVwHbeHtgUY8DRAJigqLxsPe87HYLpHLcuiBSJHpdy3vWHqZYmiaPPVEr26HJmAaF73vmkwDxs",
  "key32": "4r64CZkPfMqoSfPSPTFZJ8gSYFwnGGmGZktZrUwkJtES18wJw7uSWXL3XxhsiTbzmkjzKa59GFr16coaB3ycnSpX",
  "key33": "Xt6r5t65MYr6YAFaMXhkU4cEE1SKvjMVxcicVCcPmPrNG3sat8Fs51SxdLaHaqUzX7LkCquZywxtvjmmiHKM4at",
  "key34": "5vLs2Z8k25HnL5DUHo8XCG1Vu9VM96C1muSvZ6vcUNWpWpq6LBYvQD73EMhYGjCpdqfKg3Tp2D9xuAjYZg4bhv2S",
  "key35": "3NWhtwyexKvaWcsz3qr5U27RjXTV1KTXoCJ8cthm9yg6D3m9jJUh2NVrSZrsE9e9FBRWwrqFN8wu7dYcKASaeQJq"
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
