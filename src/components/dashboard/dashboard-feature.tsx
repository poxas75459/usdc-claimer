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
    "4XSTyrWXM3ctwErgegwKEP9T6RhNwtABxZs56c2LzSXoReytD13NJvzVNAWservrfV8Jc1LTLg2EuNQQQ5nNU1eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVf6PpKr5Fcb91eWm5cQM5E4NKbHHXRZtuHxVri7NDnWWeVnsXHumZDsE1X21Ms8wpxwtL3k2ysGjAf8rE978fW",
  "key1": "RQNUDTBHrQNciJX513vJCTSSFqTUpqENFmSVq3u9awSS7CoQQ35NQxeuwZvsR68qLRa4fmnEysGifJ9attJELWV",
  "key2": "3GPGjkA2ypfPhq2R51xw9RZ6ibC4adM2vNduUaqgfPAWmT7A5Z3wMUctiJG3BfwHaP4w7ZVkYkJ68AGD9k5XUyaE",
  "key3": "5NS4RL2MDTwFEfpCVo2vaaciSuDPrNkTcSsYHtCb1RqPEjeZV2JyY4PbswT1vtJHgUZs3b3WV7fWcfoaXwMUSxLV",
  "key4": "3cQA1uxBzFvi48uJz4TQcwNSc4kqV9vLFaRkAR7zfoJvEwGtqtCKYDEQ7DMAc8ptxHe4N9G3JVDQLAX3kF72yV11",
  "key5": "2bfPgaS736g7DshYxs49aQW3B8ijBAVaKYFvUD3SanCMLZamdeqp5wseqz3xcViwTJVAkcoCKa5exragPRBcyNbi",
  "key6": "5XGUVX7S21c9VQUHnfhUw7wLKyWA2NTao8umivMVgZxw4HxpNq1qcm7GhK8mS8KH5XmSVLjbzrXzuwTCo8QmE754",
  "key7": "3gm9iWkWHCGuaXb1UZszN3QHtM1rPamL3nVa42rbsd2ex4wiJF17mX5S5FyUYQwVdzfM792AEtFWmsNGmpjxjGKd",
  "key8": "pgm7g116P81equSymZpnZuYiJbeBmNRGPmaknwWGgrFvTVZXmMM1xenEuLAqzhPHWSgxZ9Do9auT9WbMmgygMJg",
  "key9": "5R7F6waAoYgcUhrqTbv8qtfmnUXZTpQwzfkeD6PVr9L8aJbeZndyfSxBANt3zhbScA6ufrLyKXtLSgfojAdvynhR",
  "key10": "4W2Fqx9jgkZCf1iQLifoH2wEZjAVoy3D7AeAf9Z87SkrChWNaxB558Gvn5DwTkKRmybrxYbrMeaPCigRh6sNPZFP",
  "key11": "57D1ZhCu4mVVhQPGWSEbGKwDjkeZv66jpD2QiHUv5EHTejiggbAzx9dP9VhJb1TrVbyK3eUFWvaxtAKVMDoDo8v7",
  "key12": "2F39U5zrcvyptwh95y8Xb8JmRs9zqzasbj8n1URMeJvLwMQzCR63KUmRW2oUzAakjJNVcgkpKYr8VC4MdiFKZjXo",
  "key13": "HLCaeK1E5dnhJDbfGLCj8GeFAfgqdH1MkVEnh7VAo6VYF4bz3MK88fJUAds6UMcvYhwfLtLJKyRjctEXqgjXq6E",
  "key14": "5DEb2XNDQprFu6eYwmXS7zEvtafPwscuHnPSb1GVp2npR7EzoZ9MTritcZbj4grcxZ6jEXMG33NX7vM9WAhV85Mc",
  "key15": "dh4v5HxwPUpMmUKY4HsLt3Aw5mn2HKVFYecz8hrghramhZ6ePPfUqyZDP6HskfCTe24qmUcrzfCVfxgwb5tDip7",
  "key16": "ArUYhMZeHMDNGMs86u6U5vABe7oUvcrtLSfa5undBbZ2CsXJCiGuun4HTdmpBu9ajsPFqydUnnoQSvmXJpBYBmz",
  "key17": "4YU8ThjabF5EKi6nu1vWV8ucpCbo8CbkaKMFpXNRc6wqECSQh5igSaeGfBLKts4Kw4bhWPRCpbzAzbA2jPixpEyj",
  "key18": "5JHuL8LMWTE3jiEdjdw13YjrH8CsVAyGeg4bLx6L9z6ho4t6LmvS31yhCvwR2m68FCZ7ghFY5MTkXJxdU87LV5vz",
  "key19": "2py3fn715uRMx6jxkk4LnxPBBdzznb692HLzoLxAtYoKG5YJky1692vppph8U7KXA6fhBdnC8p1b8wkukHMz75xY",
  "key20": "3At92YNpU3a8ZG6xCBRs2acJJrKac76jrejoi4KQn9q9fKA7sWdRZYt4TD4Zzoz6BQfEa5cCXLwnj58nNJ5mBPKS",
  "key21": "2Wqc2WPkHzd2jNkSGa5v2NJxEHjumHcDwPz7JB2ysy79z895fRJLG3eiPeLAHmiHCJbAteNqY8BpU2tqkTXaRCUi",
  "key22": "4quVwcrXfNHZ8QsDuBEQ9BggebFcuV78ivekehFjX91PoqqcKuZypPiJ3mN2yaAfEZkjiHQ1V8LuC11Vf4nCN21n",
  "key23": "49CtLYZQBT5Y3JKMDBiQkynNJParLUYd1k9aLUySSZTMNY9sGekuxe7gHJqV53V3Cosbwn5viBspWAERxfNT6MQ3",
  "key24": "HtiwNGqxDMbd6NUCfXbHm1UnAa9j2EtA6E6bEErZhbTzMXyWJAeV4QkcvqwTxtH2SecDk5BUBvLn4jadZXjZjnr",
  "key25": "2UnSWXTHb6ffTnXdPLQZUm7uzPTh4ou6EoGKwqoXvLtPeBQ9MqH6oGRnaAdnZ285eMyotpU9beXeitivu9yujd1o",
  "key26": "4B7GG4eNmEYEE4MrUzK9gjKFqTBewAGEs42NKqPQ9q2F46ArQWxao8tfJT4U7RgPnfryyFx6aQRcexkY7a4M4y9",
  "key27": "2iReg97SPZQp39Hn2qT4unCJCYn5EBFR9mHechQjWsny1vkBKBYJKEgBu9E12CikAHn928GKsaSHLQBBY5SdM4n2",
  "key28": "3r9mLZT3b5uvKX4oU5fwqkAZRt91PjHfZPdSQJbT27PdFQ6Rz8JYYvzRkcUiyCUGjuEmsvddTYMtXMdEimJwUB7P",
  "key29": "3Goi3rGoWHUXu7AecAg7TMo37sPeEL6hW2HxUfYhRYnfECPmkAprAWuVKwTCSmYmhUGd4oTMyeM5FLLyMBq5wpuG",
  "key30": "2iv1oJmZKHo6H96TxBhhnPKnQo233keYwRd2CRivh2TrHYj94mwgokW3XeJLPGrPyhLKJvSHPb7MQvZYGQqqKJ4a",
  "key31": "2ALzviFhg67SdxgEUBi2L28EvA1uMS7yqBHGcjMbKz49AKYWzAByJNuezazH9wzXMJNHiDb5uZV3nFARS5FnyKoa",
  "key32": "3Yz746JmZoKAk1UK7uZkpuK7rdymz67dBhBruM7fMUXaJSpCj48jSyrwWxMSH3zU48aW3LsA78QNwonFUzYnaoN1",
  "key33": "2mxLz8E4QoBc7iXQkAdW7vgbgZN1CtppytUWZE13vDQLwQdxf3Vio7XSDZ5vM35vzf3Z4awTaHsEyeKcqrCthMg5",
  "key34": "3iuKBL72CabjHHap4k4baUsL8zTaMZHHN17DjoUYHsTvdCdsKfBTEnzfD71Gwet9wEToPRnhcMVCbkqex76CSj8f",
  "key35": "4YAW7DcFqLRXHrgRaorgihoREjk9XVFVHymh5zithLMeXAoekjXexQu9sisi19awx4o3FjhdsU3CiZP3J8QrPAvq",
  "key36": "31xu3Npb7Qek2JrJkwM4uiw9RhmCjQJ3vRUThqLU57Ptnjr53pte4rMoPVjVKbM7nDEo2EeSB5agiD3XT9VkWwgc",
  "key37": "5gJykwEBaYYTKn5iX8Xy6FYnTMYgeJVy6CfNgMYvG3ezByLoVANXFyHKA4j8HqPwY7giH6AE6MVMnqg8GeqLY8oA"
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
