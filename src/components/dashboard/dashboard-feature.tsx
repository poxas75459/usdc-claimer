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
    "3rUW9vfFxB7ZrzLFuw48THUoMchxnVrtDExwQqgQ1EQ6ZruMAu7gg34BtnUfNy8r7oCJuSdnokbNtP6aAc51yzeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jve86BMdzdHycNw9Rs8vphe4RqQ5AVC9xTCKU7zZRw9b5PAviK3MPAFwEx5KVYDgnfY2jjKNp274xag7Tc1s2pr",
  "key1": "2J4KV6txUJTgbsdPqVB68h6oKmqSvNwpakWruPCYCDZkNRBJd4pM5e8CWgcSBygguoHghfDrYUmGhiPWq4xH9Rqg",
  "key2": "xng6fseczBMoWXJqjBRTPRXzShuq8gopWzQpvtoiQujBd3P7Nrfy5zXtDf24mLKD34KqDZQF8hN8AbgxH4QMFDi",
  "key3": "5kaThhTE66iauVthFwTrQsU7xC3faoCq3McZYuzfj5Z2tppNpWt5fnMrrhLup6htwf3KY68oBGPZ8epCNj4Z6is1",
  "key4": "4extQYvwsTreQiD9GGBhBehNvpDy14jiUetYctAx5H3VmT7Rh2kmDEBJ5aTK2rXae6pVsLC8PkU9t2FhVL2mJhZT",
  "key5": "41Y3z3CZqoPrQ29ivBn1CTU4FDehCrtaNJqBjZJsGTsfhvHdWQ4bMjoBbiMqV8mSxeGYh8rmpqDAtbqUJzb3Z1rD",
  "key6": "3iGcBLfgZ7kNxgaZFzbLgfqPhpFtuFvV2VD2mR1pdvmdh8UbyE3a7ZEMjRgyX5TYdbbZkVPFZZk286z7Rrni6TXU",
  "key7": "46YhKr5zbYJst2aSWtgsTsA9DQELv7tHNHvr8MbSMHpjpeRSEeXq49a5t9KmYGbirkv5q38FXxMXCfJz4VRQMbmk",
  "key8": "59Uqh4XExSbyE182Rik7dbKqc9RxA2FpL86XT9giE3PaU5Qbkmrb8BrHqWsY89AGiWobQMqyMw5EvuASKma2JTDW",
  "key9": "2mZq4qjBzt7QWbxpyVnmQMcRfng9iPQGWwk8dygBw6SCJq9JojumoDoXqn7FYtfdi2ph2iuzwqDsfzYcrTrzHwnq",
  "key10": "H4wKqjmYsJTRmu8HvqUxmtsirYDFNhW9NC2xSe1DKDqLiJykMgGiVFU55tts23WhyMX2Z8WVNxS34DThGVe3vnC",
  "key11": "267qvhWSqTdKBdTZbvsHtMgD7J98QN67QZAo6FRc7CimE9AUv7uxYwDQnSvBbxoyn8kSpu27eFvG1dUP8p1sEUnU",
  "key12": "2jQdCoSnCKThWPpRs4zKLbfq4wXVTMXfrN93hxNLLYwWEfN1u4gQrSEiPUFP8XMB9FnSw1BNUTT2vpo1o4szBy9U",
  "key13": "3TtJeWxFamMsNXH8e6VyWs4GXrJqQTqaMY5Dkijivj4ayNennpth3jzaPmY8iyXJ9FrAnnFyj65jaegu4dYBAWJU",
  "key14": "5cT4z4cQyDsoTvdwQtBrNWafMRcW9Txczb7VWQ6hv9QAi2SPqoSw4RqBMH48CsXBP1DGJTZc8v4MFaBJw5TEk8Jm",
  "key15": "5pr5zbo5jT2ax1YKkeSUvPZUhLWhhiBAxggvVN8e5J9wQfoUFNx3GfRjW4CMKHT6bBFZ6TBgtvbSAUQuiR6gAdFx",
  "key16": "2QiwPsxPjnb3oBQ6ZwtYixwSRgyPehstQwMwqJBojA2nUjFfBrnfwWsqpmMe9sauTWymHqpoJKm5KjeE9zppnER3",
  "key17": "5Bbh8TnNFT6dQiv8JnGVSrvChDoLWnZ3KXDW4go5dEmVfNDDNQxL9EvopuXXw4T8GovsVw4G19kXomUhpp9iqYP6",
  "key18": "LV8c4k5x2V9mjRm81jixEThXt2XrAaYefLmm1QdbVRKv7LiaPjeK5KXnWuRoDaxSmmJDSRJwPxRdJWU2epanLme",
  "key19": "525fww7aA6reYNY8GW8tR1zoN1zZin1bG3rfRjyWuiiRqUa4oY7uKeqmKeNKXwMznkPDEcAVjBe8HnCJCdJ2VnJ6",
  "key20": "3PQp7MqGTbSzdNeyp7jf47ptedbZSKjtLyyQsXdwnDqVsGd4TctYtWtUksJKJjyfQZbCdnYVKFgNve8pKJMsVEyE",
  "key21": "5UUoWtVoY4iUWu6AamzdRHLRpbbUW4DBUDSewnq9w4V43WY1JBCYsCn1wAB7PUz3tTcVDD2XoCNjFdz9fPXEfPV4",
  "key22": "62rA5eYCxdBa4H1tuxBNvM8eJcTL86Gdx2Mdm7yuTqMsia313VtGsPg7zMb8CaNUaS2Rr8cmAjBFnZaCErkNCEpf",
  "key23": "hb8GzeKLkKo26PfjFpBCQzu4aSrnZ3vNu3dXSsNt5BKkVm7RMCq5RBn1uNAzRbogYGjjtNhdBYXPL3JWzJ4YMXa",
  "key24": "32QeyyzUyBXPNUQZCkZwfccKNHuEowt3Go5XRZQeGbUaT3HBPLNSdTq6kvKQXnum6UXsLycCxsYDi9WKos5kNKUL",
  "key25": "3zQSDpuE6PBmYmH6fKUEDr9W5skvcS7n3yyFr2RDbAvyNkJ8TxjSj2i9WxNyhUuQ4QzzaGnRt3d5uoBKiiu5a21i",
  "key26": "4Yqu1sB1JC2b2VPoHZxXdP9ibPvvoDu2X3GfnBQ4RJwH6c5xMjvZDcFMp9Lo96dFacyjPTPUdmjBq7igraKw74fB",
  "key27": "3FJ3JhKTMWpmTdnMLkKY7ekeHyYFGFeNxxxzReVaeuNyojnNM6R8H3Gy1Tk8c9f1w4xjhN4P7P2Xno3iEL5Y7ySK",
  "key28": "3RfPgFdFijZRiuEjevBiqAu1EMkoc6uakV6yu9WfTf7dkYAZ9hpmzLuRNtyFK2bk1uYLPjFsshCAKLcGygtRLp62",
  "key29": "3H1mrGiZNniCEuMFiY7KR4KRjMc7a1NJ7ZmgT3wxJZrrSAB6RdN2gUELEjaKNwT6tHT6ciRo9GVGTG8J7cxN6nk2",
  "key30": "5sBAEy1pVBByXZ45ATxsd1rfxHj4sUh9RshULUZh9vzXJUWZvpv4Sgb6j5HK3tmSWFkrbCRkb7XJn5HWedBj5rw",
  "key31": "2p594vXGtR73oiKRkHtr37jjPHmvehPwdZpNFt1bHqWs8ZdDDUbLLVSrTrSgFd2jHYUSZVFBeiDFHsJVM9qtJTH3",
  "key32": "4zEiBzd4xCwTpS9z3AJnzMCTDgSzn3pdZywLS2AZftwhXBgDshWkWNE59gPB99gvYHRaF8uXQytZaJBZmrJJkdD5",
  "key33": "Y2ymk6FmYhZ9Cb9Pvpogu17VFf91Um7LftCBy3CHXYtqPzhQQf5tmCfzdXDvtVASPSyGCb6vfCM78tfyZTcAw1b",
  "key34": "2oJHiJUvYLEQCSQve18zhT3K1XaE8XxhWLid33jtoHwN9eo5TsKyVyQYuZPnhis38Bf4YkagTSJTGAFtbfmHDrU9",
  "key35": "3Zfus7zuYkKMTCCYxsEcAK9sNg1mVfEm7BEtytqYS7a2d4WS5G3seyMhnBsJuYrut8UsB1oCURFxtsXYEsHmEshM",
  "key36": "JWLdxXP9VPJtBP8bDjFqGrUfbgBe7NtnNz7jFsR9jCZZTr6SEFAcTPchmBfXWuvrihZSVx5dYJ748zcnyMT4bGV",
  "key37": "kZ7g5TESL2QZ7B94S5pwYFzpVexLrm3uCzg2eXSXgiR1CnGhAWZg8hBwfqzS1kNadgncSP5Ty8bfETgRghQe8hY",
  "key38": "4WGizizbWpqhw73MnFeWukUReSHq4XobXeK9nWfcWRUsxfTSH1G8zw96hQwR9GpZAM4HtkhHLgVjBJ5vXcGCnPtY",
  "key39": "3BS4scndV5KR366Xqdr98upSmm7sjWVDEL5TKDQc7jmjkBXaf9YiLBnHrR7rptrjFgztHpWx2e7jAVJYwvq1tZGF",
  "key40": "3eDUK1KxecBHUrXSBzarrEJMKDtw9SDAeid1DJ6Aw5CQmLbJ9GggVWD1kbryU4X4c3WAMgP4XPfWir9Doc1yjUaz",
  "key41": "A1fkf3fRFiyJ8FPhRx3BBYM7iuV47PEa7hXp5jmVnACYfcSjDZX6RnebfcEpj41oLhQc1c5YnSxXtcQi8xtPmj2",
  "key42": "4ZGUsSujKcBteXpxZzu4shFRegXKZAK7mzWucdnYC6md3qiJDRfTQ3ZkQwF8HKFTYRf7ToiZCoqPCCRb7dzWyeHz",
  "key43": "2ACxxBjXwLHJnDjxAzXH1RsMyamDn3yAcPSSzHV7nFuJsYbBigNET4mqnMzCqsivTctUjrkj8QAKxQ7PBN4PgdeP",
  "key44": "WdqKTP8toHgFAPUdnZqx5jcfFfRMhZiXzZnUF3MSkfUREjhxGY4ykdmRH7Qg3jYr6NUMoBx2ZcTirwv5XBXx5zs",
  "key45": "57TRETwRufeSwHoCowooQTwfp61jcJWfwZcgyXH8AXHBd41aTkzdjeLJH5M4LSFsX2Cv77qgnmb7SYrWfqrL8RKy",
  "key46": "3HaxAPMgFxncV1gH8jREUfJa5d5ogk5622cwjAZ92Yfrt8SkZKaDW1a7SCJG3cnXg2A1y7PZi9991NauRCDepQfw"
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
