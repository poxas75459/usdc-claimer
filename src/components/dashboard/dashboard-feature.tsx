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
    "snSzmA7FTyu8Q75pguVVSz5WcKcH46LkuxthPYiEUvjKfQrfikLRyPXPJDkL1QbBwsXAkPKJAZQ9Hi5RxR8VAvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6Lf3KxdhUpRwjtDfXCMZ8xJySf7AwTSKvMP2AqPqqYrPNGU1kwwuvY4Pw9k6gQ525crtBVfs9HQNF9tMu664GM",
  "key1": "w3X4Tah6wHJifRvrBSvo8xua9K4Z9ufJERk1nu2r8M7ypwYrQjyyHViaRPsyQrU3Fmk5Z7sqaDCsjzYdAH9wU84",
  "key2": "4BtHoaLKdaMM8t1NcK7sLHwZiujZq2KJcuSC3MY2Eivbimif2VmCG3NEbggneWy75GE16ErKJEbwMSB6NNd37MC",
  "key3": "4TpoEfxW6bjw9pZrv7uV283nLQ9mdNxHwRQcdJpLtFTEm5vLy7pUNxQrRuVDH1MiWGoZ7V2DhK9gV2MtRQvATjZg",
  "key4": "28bKuM71eH8KzgWpms1nVm3yZSvSVaFKCm2ryAyAmuqA19MWDagpAaCzonpkY18HDgeLM1m8SZ7EU6F1ZkUMcLEe",
  "key5": "22MEbJsFu4B7PE9yrEWh1wHg5vhkrEZg4LpRETsLYPX1YjKDkuGDw5BPLHLRw6yq6maouYxsLgBqLLBkMj6MLo9x",
  "key6": "2qVqwfZNngfSZFomsthrAx9CgUNac57kmnu6FDdGB7FAFr4CzDUh9doCCxxHEMC9hzQTAXUH2WK3FjtgYAfDik2z",
  "key7": "4ZsGX2iBVTSVfj63W1Vbr8kvXYgbxEPb1bbfCjm6eGCfv4BPB4v7CFzwp4sAbjeGVSydUQWE79ibk2ESHHYtdng8",
  "key8": "X5ph83gb93PQSBLd2a3cqGggjHurUa69NiGeVvbTNS8AvSHDrbPDibwt1dfxUHRXK87DSVFnqj9jhWZm8jkoZvy",
  "key9": "3X28gHuE5mTk1xmVQg3TsxB2mvRzuSMur8Xao1rXBKzhJefV1HFAmHmphKq6a8obKdYz4X2CEYCAcW4BDaC2VADM",
  "key10": "4jjBf5WSx1rzFqNKHfv84goUXNCUkqZDrmSnaMaMVg6c78WmrqjCxpw2zExKuNG1t2cYMbpq53qqs3GZHXNhjNY3",
  "key11": "3txQC1GyCfUiRHVpnxaQsBwBKVC1pqu7hKkXrqYRcnvfDnt5Hn1Tdu5Tht1CHxJTA47Wd2Ls42JLbYsFFn9C3ooH",
  "key12": "2rbFPSdQnyoAdh9AuW3sbey44k6RSuHmoAd8XfbzyKPpPyosSJiZR8iowJntRAo8oqtxZmGjiX5nDTCaFe8qu1VC",
  "key13": "R2NXEEFpMstjnbmoVC8orGg7YhcbK129vpDMGucTpJeTz8mS4mGB3paCM4MCChCrGCDmxVYCe94CJtnjFYGka8b",
  "key14": "hf9ndhjZPfp3HhMmRK14fC3ZPw4E3k6zxe2wmVpmR1X83Nv65rn5nTJbEF9oyBBbjcEbNfTi9MhDmYDSk94bmVW",
  "key15": "ZFV7BWZ9SnMz1x2XUkpmeXZWh9UZgAzv4RnueBZQ4SYwuHxWsSqjuFPR8Syge3FAmCnHA9maF7qLRJEVfhMriNi",
  "key16": "9wNcStWhBomDmtJZEneQk5c2oQXFgXP7ENP9VmasJ2Hx2s1UvN4uM5R5CyWmdxQWGXJE9uLvhwnAa4WsF6k8qSW",
  "key17": "4UFa8ph6GzaG1sADuuWeQbCXmLUdp9EyCEo9r2PeDaz7todEkrqCy3ftXP9uAs6m618cSpgG1EUsZyTnx4iWgCCp",
  "key18": "5pCQcqtUB6hnDctx1geCGxKnwyaY6k2cjJWJEvRYRB3792XBsztjWNhC3J2gm7AJsXjY3MRw5PrxhayhCwYj4Lyi",
  "key19": "53gJNHjnvU2qVHpgNicWTKpzVzhKFHnjdRE8pnt2XVYp7WdM7rT3VV4BiX55W8NS3SPtKn1K5WYwkCJ9r9Y8iZh5",
  "key20": "4wbLvVXEyeCBrxaiABbhJmydaN84yuJe4otssJtRNm4JR5djbk3qH5tj9AuvRBcmaW8GH65uxiNJHQA56DJXNTBG",
  "key21": "2JS7cyZ4r5QyYWF5VWFWpaK84A1gF2ztTx7YpPY7gW8u8E8CxBfQdH3ZkvpoJH6ykW9LbMECdMFyXGvVSbkoR4D6",
  "key22": "LoQGrhWbqs5iyTETz6rf8GnB2sLzqzYTvV1Wt5f8wEuRGe2tKFWbHqU2eCrygWsr2ffkYb9xtJmdXXGv6oduev5",
  "key23": "2co3W1ccTjSC54S5u9y2nX4v9Qw5FJA3XrjUaqqQemXjrhcvGNu7XATkzCNeRBdjfRGgJ8jJPui9TuPXR9gswbux",
  "key24": "5riwpP4Y3eaMjYjZRNo838AXFno2sRihziq45Fe4zTMX55N5yuJkPkUnWaiAqbzmTzRCa7eMmVJX84U9rhEsSZWw",
  "key25": "2EvMSRUYzfmVJh7dpmdvAivpu1k3VecS2M3fJkW5V1sEn9UzJ7Wc8rizScP5keLrcukCz3AP3sRyWzf9v1TyfDGJ",
  "key26": "45SLJnEZUSuREUH9E62LuYnS7KSQZJwZM3UyPvWWs7M2EePtDB6nJjrdLL6Y6jspgM46ihGUL1U38CcNDmeYnWrg",
  "key27": "57Jus3CRkT8eCAXbg1xqT5WAbC5Bte3iCgkeeRoYsfakjVLkG946tvrRxdaDbWJBJ9thzrwCDVAkv2FmqESK65dA",
  "key28": "2pMcGhcbbwTXrmjfPjycCNAkeVEdboQgrdVHateTWJk7ZynDsGnQXYAKskxkbzY89j56k1ogbpuhER2s6ektfTmk",
  "key29": "5X4AeG8TA8hUUBfnXbjXRRLbMTvvKdB6ovzEKCKNUEjd8D5tA9YqpPim2qLHoAH28757XvNtKEdMrMExsVXjK3a7",
  "key30": "2GcgYCc1bsaB61qxkFDjY9AehTGfanqztr5gAN9dxf4XZ6Hty8eLFLyGwBmShxBF9AqrkUN6buwqvT4T8b52S3yr",
  "key31": "2KWxmWcoLpiNqgvqsdouoa8eyZmtgD2teUBN2Ew6NEHARuuR3kkgCZ84Vk67qQ9qQtSX1h7RE8nQNMeeKpjiMXdR",
  "key32": "5jDmjknamcVKjiWi5yXDZyRggnMpBqsGqDFPfBkPQP8MbFYNmqS29ADGo8wAMKxYhQ3P9PgHH4peu59szGrHDm2o",
  "key33": "4tkZKf5qTBNKxn2dZihB8RQDpcZS4FP3gSMimmmcUXnYhnAeqD2bs8YdqaMwTEFx4mFCHbYs1K3rY1gbdFDdccFw",
  "key34": "5jFCTHhnDnbZSvvUpwJBescvLS1fH3LHC1wiJAaVUZAnbkToKU8DoB3GrLpkGpFAmebUSjRRqH7MUGN1R7p1pqiQ",
  "key35": "4SZUQCfeMbk8C2BqiBfNDj66xE2WcPx6R1Vr9cECgGbS6WQVKwP2ySvr6vZRwcPd6XhSG25HeHj3Tw6DqvnSx1zu",
  "key36": "2dTD9FCum2k2xgowmhP5Dpt5NyGKd8S6HTFNhnzpmKMC8EvS8dWxCtN3a9bs4W7adJSw8EiUPpGgRfNw1VBvTxD8",
  "key37": "XZ6wmoppfGfArTjtiMbbA5kEgYWS667Gk6KFKXLFaJsB2vGCLyqRxWUqDoKfg5jQ3DRuf8fe2cqNAz3D1K87Lu6",
  "key38": "5x8oqxxQ1AR9aRmDQNoWsgrwJysXiS55CnbbHS7BymqKy6PaT6sq4V5z1rSZxJNfyV91Yj3GYinnnr4ou29jwpsV",
  "key39": "2uQDt4Ynikh4wicw8pgsxgFcpggMnTzRVfsKtNmCWcW3xnkCCAjyo8BQFWAthk1RQcaSye9WiDQzVLB526ywP178",
  "key40": "4Xigs2Kkzw4sLnFe3LtjeQDg9zNruS9eLZJ2SFt3xQ7K2MTiep9jmcEsndWtyRT6DSwqvg5pPHgiiqxqAnEDxeuM",
  "key41": "4XZXSfUPGjnjzq5MjcfJSzt9bGCat9hp1MuFddmbab9c6urytkLPQj23DuiCvmD5b6qtJQ7be8GCScuJj3Fbuw1K",
  "key42": "2VnrG5yiXmYnSzJUSVxENkjdhBTf72y78ZifGHyQTEQaj1J9GDjgrZY2RVHm3wzMUj9yjDsgx131N6NzVJKZTn2B",
  "key43": "2xFREpkN67dwSjLnrfByDsmJfb1CY8qYmmMfeWjdxYZPzrKmaijT2kqaMVz7EW3CkiMioY5rbdM1dgWgjFqDDxs6",
  "key44": "o7TywGmootM4MnRoprHTWwDzBBpCqdoYYerD9PWhCmhgPxzieWGEpLDRDfi5882wPav99mCz6QUgTgLP75Lrp5w",
  "key45": "5H8KdaanowC9xea5rQUepn8tXQ4Mh7EjArtoCG1X3gMBb9Ja9rdPQ4xbxodCBaqYD4mAoHCA3vh9dMAMseeCiLd3",
  "key46": "5TMqC48YD2judcUXyihGRC6LBmCC9TfvdKuroUtSr9PazoETpNtBLxiZ7ijgepkkPgQoiRTepSx2VkmdBiMBm6ga",
  "key47": "2DgqJpHgKHhhdCASEXkErDse8vGBW1CHPgNxCcRjYTBguf927eVQqfDTHtw1ejhs4uyt29abpmtrbeAFqoAx8LxG"
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
