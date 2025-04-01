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
    "2FxrnfzFZSovQfppCUDrw5Esd4e93rfxtx4d8a4LHWVdfmbemsHjtnaJf4hA3TLKn1jMFZtFSjCUTFXyhF1jcs37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ah6kjQqZTZkkZhSyV78xahxsd2Wy5dqi3wpykfphUDYyoBF22BXUZ4gVdnAnoPEBQbBJDdnpWg419Qb72ZTDJdr",
  "key1": "2ysEYkwCbUH42fod4suxRgCQKuJBofTAM7mTSt16hzB2vrH43e2hzk984zvJjLxW7cm24jNWKGyuE8s5hKN5xAuj",
  "key2": "4Q9QXyAxDPeUkff7mTyM8xzYc16UJdGgMKDTp1gKSjyuYqtmnvPR7Wj4XvMr3bqJjmaNRzkQYPEjdC4Nwy1NQ6Kp",
  "key3": "5jkZmMrYMRLgkaCuVb9GDKcteJTUwCupaUJFayujGDnPmqpD6pgU6tKF34Gu7PQKEgDVkq3Kmy5Zm9xXCBvxTYSt",
  "key4": "NM8oJEfXABonPXXFnEfAhfR1AoQBf8GgYjGqbDTsxV1aJ94gJRVJeFUNHfAqiurYqMTvuy3EcZRcmD6ahHdGQcu",
  "key5": "298WmQnaCA7ERbBA18GC5voP4agtCy7NNHVo9Pa7EPkwqxcsSoSwu3fbE1iV6VwrJrAAtXwgj2twXaapVYc4y6jh",
  "key6": "59uXMsLxnoNyS5G1eaj4ZeMfD3Ev58bwtoLRnKf4g5fe1253jz1Nveq39FG4vRC7kfMPxesHHfCG1MCdw8RyPcfi",
  "key7": "5NVEhRjCSb2ZsiKUyhxfbc3AHevecm3xnFdxhNGWmDj5dvDRrNfgv1Gu9Zv1yqVLNrZ3E49L9LfgFZ1joATjgwh6",
  "key8": "3DiVGtksUkdqyXPHAtM5U9RzCbupNLLWzCxQB9X2iCsDHAuQ7mwJ4oxidu7Z5rdoFGa6TiykukJs5BXZfyjQJTnd",
  "key9": "4AjzTZZ1Ye53npRJ7nA9bNv2JhHdXmUFtmxKjCe3wy8gjow26Jv2ShX2SbDCvgeMmcSmz3yhBKiDFBif2T99GU7m",
  "key10": "2vbdtyhdgDGLnx2naXXBix2LK6HZtB1LpoNcqcp9kQFP9EEdvJ4FcknQQSPLCZPDyViu9nabfhKHUiQDbjR9gZuT",
  "key11": "56uB6DnyJXSpfyMknYg2rNvDqBQVvk4ZTPkB1LV9rZnNNnPAvoyDdrqc47Wp1TiJ9QiJ8eNoApPVtKb9222feYCn",
  "key12": "wJYS63mDFGxWmtGW5BFScFGWk3Q8vq2fQ6joQBtGquVw831UvdQSZQVLT4CMmwiZ6syoWckJSbfCxFpmTEDtUkT",
  "key13": "5upRzTdmm4SmUq9hzQJChqLtigMRdU4Q6TuPqjvdF35vZKipQXfyry8SS5YuozZPJBv8dbqrj9srXcvBdzP5kdLi",
  "key14": "26ux4bvkUHTJqLAs3N249THcCNW2hiBJJG8SnbcHMVTKnbBoYhANyHM3Nv9Twd6rsmEj8u63GUmTjoQQ1netvWxj",
  "key15": "5EwBWkr6on4Lf3U3HGpZfVWP77JYhaxZrQ1yoQ8uXeAbkmUzcfY1L671VPjmzrQ6KGFwAdY93m8FngkLbxMPwA18",
  "key16": "5q6oPhFpvJgwPHi8X3DdCgSj8kTScr9yHLDUP7VoaKEN2eRwviKGJt9BuRCjHDXrbmnyrfmAY3U8WXxSsh8v5noL",
  "key17": "CzHbtT6KfwDKcSb38L6wUdEsuhD5Nt3GdPaHoZfmqYAiUTWfg8y584b5BBiJn28RZv6jqJooipv5pqCyiJk2Qzt",
  "key18": "4nGv9mHB14P6e17HAmcdNDSgqEL7aKhtyMMMy1MAuZFiPNf3jvJukYMxXK9Lkp2KzPun7pKs1GC9XF9g8jdduu4o",
  "key19": "2U1MP7EAgep4JuzRrV9RM2KgSTHWxyLatqbxxuLNRhx8SBKDFrx739Z3Ufnqqs5cgC8DrXS9tbru51DvrVZXUuuw",
  "key20": "2wdrKgTgVEpVmpwpySMBqtvpLizVKV6YCJhp2Lce1gQfGAKUVCXg4B1emx7K2ieQCGLPkvCbtWsFPD2khCzAVvmj",
  "key21": "4xBBrwPDMVjHFYSWmEkCF3SoSMF3Ec4oRYKN4AKfYCiTPoAQwSPueoKUFaMuGMAV986T2hKZ9k1ZFPVvpFA7WR5L",
  "key22": "4fWbMfH1R13umDpYrg9XDYuCcMw1GpXMQYd93eJCpQUXMMEU6w3MhizyWo34rvYKpZydxc4Nd2zggYMVNp5cTnnF",
  "key23": "47DBjnJYsqfjFX5Sad2fcZw5jxRgyu7FX5Cp2Eu3QL9nYWHEoDwQkKsgVETNGCqcDQAUZPdRknygvptnPfbU7bjE",
  "key24": "583RV6PBerfjUVJNCCK4V28qMnN2zEmyHZeBGGxd3hj6uC2wEMxV8oi7tCnYAzHZAcCaTCv5Fy3N83LUvecNGM1R",
  "key25": "2nrKmnViBtM43CCLYYUwTjr9rnEVKZyBU2wxgDxj4F4QUoJdEzi9ebB76hafxZpi2AS1G9ur3Zamdwv53q14qDuH",
  "key26": "5YHUS18G8ctcmoqSKg6uE9vNY4L83ix91hQgx6srXH6K5KoERcPGvn3m82YEBvxNwiAxoeyaTUgDkco27iLQEuyn",
  "key27": "3NDjeWkBR455XjvwewcFY8mF1HCpxrQaURnqMFfjbVFdUsC7caujfXLiw7sRiuJHyiCvLakRVZ2gfo2mJkkSNuVg",
  "key28": "53VmzJJYDacttUThEJsCMqoavDdh5AqLY444ppE73VM18C8VWDvMZw5gbAmTKY7Eh1cn9oQetADKC2sQ2nwhQVNn",
  "key29": "5JhRrWVYZBt8xVmQTph6JsPcasqqKXHmoLi29E46PhzzREcytHmcQPe8g3qLWcAnJjt16DhoEs5AxexfDkqrg1uo",
  "key30": "3E1npaujWvAmypVewMUXvmwgLD5JiHxrtNUyqj2JYwXdqdichh7amhqbH62nz8y5B6ZD4UqSVNyXQCJm8m7ukHYf",
  "key31": "5whoQo9nGYgca37GGY9aTPswm5BnL9GP9qShPXUv6dyk9qbKxZsCabXk4B7KqpThAvLuVH72o4g5YEgcL3H3hbm",
  "key32": "25MM5CT7R4G5BDsUaNGf47acEf5vjkCHX9BzRLoBMzbCA2UfZZzoCphRKLqZjeRd9sKTYqfbK5vJ8NFGmz4uWL2N",
  "key33": "61GEwcqXrcZTeW595EV98K6q1S1rfSY3aK2K919TdhD2r7YZCPVaUPMDrpAwGLxqrbxW7qLXpQmqaGZNtED4X9L5",
  "key34": "mmiMSp7SgHD5Bjso9dFACNpmbJCNypfV6e1EXXT4wpaXtkFNJixBJuVrfhRDbbGH2KLKQvGEtdH8Wz2nFbAX9rY",
  "key35": "54gV2WiGGhMUPHwsNgHq5KU6N8doynsez1agcidzLeaV6EBUDzEsTfqRzmKChiLoYSkBKtrigfdM8L4on4W6zEeK",
  "key36": "47mfzymVUhcce5Qe76a6k6kwTNqHV2dAZQhHkdCtsamiEzxWLAdvYWnWRnKRsfNeVHML3ERhXKowGBSxXhiD8C5A",
  "key37": "5H4Xwcp86xoPz2FDFt2PRgXGmaCCq8XkaXs2nK5yHH6FZGAt27ThU19ygyZASfFXxYpw5VpFauhHimoR7cXPsx3t",
  "key38": "462Mrg44LQERAaF61Uy6cNiKj9G8qB6vQdH9nxRjH4wHPSwyfAPF7y3ewjVdBjMYDGQty7xC3sQFy4ggkHxcSs6i",
  "key39": "2FVW1xjhaCiPMYj49MeokPfcm8bAkZcd8JvHnQxkbsWGMqp7jehUf43uNZU4KkkhTxtvpw6N6mJxLUwzBMUaMzWU",
  "key40": "5vcXajaTi1M5SvAXCsDyQT8pzY6hgzrnEgySy1srAdqdjngN1dJeN1vCAJhDikA6aMSWRteSXVcH5nJbpENR4gRz",
  "key41": "5A3xc1dARYbpvgByiQHDXb9fKGPZXsJ4rywZFFeGhvSGJxmFP7MdNYUXpicURkaiWNacvXCRgszvhgYvsJDHeEXT",
  "key42": "vRxzPuKq85tudu1vVnMSzHBpyxAfkZRzbtFQUfR4Ggi26aaymjcWTxp4nXsywyLqNjyPNUDSFQVSZTRHzU9iWNX",
  "key43": "4QmXQSn6uNvPeqCMR63WdWZwpCGa3BUzTHpKaSc3wqCGqYLe3x7EYpMnJztfpHz3gTRULe2SgVShJwDCgfkRh9uf",
  "key44": "5iY7ZTKEwoX9HrX3QeeXPP61cGtKn9bV7pySHhAWa4nUsxGbwCjzapi91WvHfxkBigGrJDbPt9b36epG8yQTKvvC",
  "key45": "4giS1dY69dGYQszup5JaSRqToFXAfJWJtdGFJSV9yfaqSQJNT3X4gwAvbiApPo2wq9owBmdMBLzoLWjgzMoghajq",
  "key46": "26qMKgPBPX37uMfYGKSMA3hdVxF2Uqu4ti4TncXBNsGPMNJ9G4go8qGuQ4HS1f95tubnb3GicxKiSiKSHtFLGmWV",
  "key47": "yfmEdkrSEdNMq1pMWKMroF6NofRyNCrZRDF5CZKkPhFD6VYkWX2yyisGyWPBDHVV9j3Ndia94PtSoNmurbPDum8",
  "key48": "NofDsh2cGdizE9bQNv1n4QaiFnURk7hbUogWV4oez6GaKN5zANNrPmcwsx7pcQWfHj8Z98239QTZuM9gKzJuD8r",
  "key49": "2P7vC7rqdyUX6R3ZKy2arinXK4jtZyuB38hkaWE7DEWrdfyrVPxqUdpgfnRTADdY2F2BGtzjTc7wm9fgLbgbuhew"
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
