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
    "5L5bsK2XZiXZTbN1e1hUNt5ZKTw4fC3yD62xKY6cPfjfS7Ek8SPMGv1djRYXu2iE1brh4aQE2npfhQT26hh7GxKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUQcvoaJ4ifTUxPRUFXH7gmKKBM2qAWismwa6zbi7xBpekYxfq8DSjkZbef4rPRTHxLVgwmskSTUQeTD8rqRutG",
  "key1": "cGkStCtJZBBu74LqJZDPQ7BaQhfbGua6VRUQY4Y9VD89St5VqMorgE6Kheq3bgSp26aid5n8XFTZrduoc9rsNkC",
  "key2": "5qwKBzKa2ffFBfTwf5pYPEdqBsrPafStBVUF6HRiJynk3egBkCFg12xixih541FsjEGC23KtBfoCqmnB4mB5KEdV",
  "key3": "5ei1impMtZaAa76L2S2Xseu8juUdFN9bXJpsGx67zsF6WvHqm3f2hq6pcnW85k9F5Tf5bTeCwYMrvHPuVmE3eYGc",
  "key4": "4CR5e1XFpRg6YVqSM54SSzWZ6TwtNWEuAJM4bncbHiKtzZZJFjphpVs6iE77jdQDiEWojseBcnDRcLPjPXP8gVzT",
  "key5": "5oFXsjrM65RfYVv46wXzfgoPu48SjiFNRa5AGUdhm6bS6WBCncroj1V7j9yw8YTUhqw9nt6zbZc1GmKpUnCzxxSd",
  "key6": "2Cws4TQauUAio2cuucaPkq3nggjDNLwwfFz1sovHhRFRpj9DVeTAmn5anMfrybYKUJRzHfzJo95XzLnYqfcrKATD",
  "key7": "57sFynRs7KLBiMp5uP33tWrHef3Z4UmxMjJasG4qswaj42re2LvGm2eke7zqaVeL3V4uk7n7Sfng659sfShcsND5",
  "key8": "vMUv2wimRsua2zt27oS5Lx4e9yuz5mo3cZJMyFit2pzzNNWLhjg9GVtLAUgRpQ9N856T7XG2arAgTTXD6ZZk4eB",
  "key9": "3fCEyxNnmBsUXBDVenFHzd2F1yVYwkJHw8UYMcdVLRqCDey7Q5SYLfoDWRJbjBJULasQGxEATCXScY4wsYuDuyHb",
  "key10": "5U4wjDwXowCeBFmxS76muQsBf9LARQSY2zpisFRAhyyq4aqw6NfcTuWkP5iZ2HM2P5RavuBTbbR4ULE6HpeEovg9",
  "key11": "K9UPvq8a4vJmG63nMha1ktt514cz1d1nMjHucTFf8WNUgdHEb4wACQuNEVXmm41V81TcwmNzmDpXKgoAUb5DeTT",
  "key12": "5jqKTVSstCgSwnnzsWEbjYocTToTwrkMfUkSQTgJLaycueNtRnGAzx47kjHM8sY2HjwooM6hr4taszoZpdKXCjr7",
  "key13": "59XK8RjT5DXKPGEmhnf4yntsgD4C2dgkGzVtvfEdKiTofLYrmMTtKnBQs68j5KCpov4nJJwyPhaEEKdgVniZyeJF",
  "key14": "4VycqGJYgR4ZWAtVS6upQQEaELkHEfW194xiNBAwNKoqwpsp79oN2Lg8G6CJJmCU3kUNWCcR3SGcqWd4NruSibsQ",
  "key15": "5RHagDnAayZZwu594ahYYtcdEQncZC6KppSrri7oU7eX97hCdUTVCKtA6DCXRi2Wbr5GVgemPrMRLfAcwAiqzdQW",
  "key16": "3GXSXsMQ8rvSCedqRJ9fuBoYcPfZabLHKa9pNFFeUni2KzPwnTQHzWEkbJiGf1hMypby5z4CbHiBbEATBbjWjjUE",
  "key17": "PZ7a38RbYyeLHiCpNrMYbTbVYS1Nr8AhjJWNUzp9Rh4DGCAHskuM7z65GAqR8bbWu6KcfDQ8FBeieAkwfZNqxLq",
  "key18": "9TRhPj6Czr8qdT9bstnwdUJnLcPkoRnN8q3WDprJT1w9tHSPzgdokmMYzhiT5M1fKczyB8tUXT7uBFQiStfsXHr",
  "key19": "4GdYwcCjRQv3kfzHjE5YP7YYr2epdYjbeYDykKSgvLQ6GzWUS14rMBcJgpBnrudJZWdq3U5pouot7TsoPukUL2yP",
  "key20": "5Jg4BvtmtjzGmPJxRCr5vbVJWtuwCkdnQeNEsswRpLQw3JXwovdsR4sPzzpfMySbqkof39Aop6R4BzFQj7c8ZTHd",
  "key21": "3cFJ5ZBZ79YnWxVjta9YV8KaNnwJJwNvCViyPiNLCmdTAQzdXEJr5h458rZkzmYNVazfcmoaXdpjiE1q7QbSMcuX",
  "key22": "4gkYNbFDpvfE1FCfsfuv9AFQhdDyE4YUK3DVUQdxD9XBNaa7aEkMLwbKvUhMCT6ytnSzwcM5YaXf3AQeJhHkuprS",
  "key23": "4GxbcEUP1mkk8EJxA8s3N2dZ5Ps24RNjFtQeJLH4EfWCFASCZLh2nBZAFwsK4H8z2sTKDi2J8EuQKceMEeTCfD3X",
  "key24": "3i5bh8GEv9ARs9XG7UXsF58fgdMPeS8oggDob7Z9hX487Mvej9ahLkfbeES6MemeVDqswUb3zEq4dwwJqQAQ2RnR",
  "key25": "2E4FEX9KJyw4i3kE5m8kgnWQTsfGh4BEfxZTd2rAKp83iZzWjRHeu8q2ZkJF73o5DTW4JJtwSayd1jaJcQVUUkdf",
  "key26": "2rahpM18T8mpji2d7gn1fWtBNj2tVqkXbb4cXSS72jaT4xpssrRpW5ACU6L2uNokz43fYvJCU8oVY97DyQypsTii",
  "key27": "5hXnVU2ab3EYU9Nk1hNBM6b6twEYSpXePeQa6y9CmvuidwqpDD8xakywkhoZr2eNBkrh6JsfLrBWousCpCnHCWuu",
  "key28": "5mDvNmfKpmjYCKzaGdd4eZJuLuT6yN9RUtrizRxYnp7ycaS6pynwmXZGZxSwAQmtTH9bY8LjWAcXLrDmdU3xgP7k",
  "key29": "2ZZQswuQch1p1Ez5UfYaskvtBnCupkdAcimN75ADJ7EFDzY6SJwhrm91ku7cZQUqGAT2oxF5xFcFkHchJTPPiJJV",
  "key30": "587AdTR5nnV6FV7SLDXZ8M8rQFKNxdAAFSht2BiqVbdEXUHkTNmU6kvDZuDo4TruQEbHds8ZUdJfuzQ9aTfEuDFe",
  "key31": "M6dbotyAzRu3nGnDjNL2oVsidnAoNkQaJm2wcodZiRuKw3s1ybjr7xMVNDzNBUrDZCoVq2NyKM7PPZKo6yFXfDy",
  "key32": "56iYWH1zeQJZPnMAueyKNLH6E9WUhWrHmSa9sMT7szrY1nJFP1pkdiTRBpGBUPkcnF6UENrVuMVTSQ3SwN5HnfNM",
  "key33": "2M4ZnJnAU1WMJVC2w4LnQvYZcQdTnBmBFJfs5eEDBWEEYWFBvoG8tQWfwujY6Lr5CmvNKxhPB3eefg3LBMRWRKzU",
  "key34": "2a1y912cGrZ9qie2FJWA6QcGK4CBNrXFWW7fXipLMsRp6WdXDgPusgaKFXCwitmDJabtEbYTpPhf95Bt8oxCG7RC",
  "key35": "3WiVfoJvUkviC5Si2bM6hDF9VAyJhFvo3vH1R1qaYYdNyFFTKPR2L287mYE5yz7D7K5AeEXV1AWFEBupRYEpcKsP",
  "key36": "54EugTA1aRoqoJSitgJYFQVh3NQPAquy5ijqGXwGmJ5F6cFbLjPLBVkKSzDCkkvoNsfCWnf6fNNhU4KTL8j6wb2k",
  "key37": "4vZj2kF8ZmUbXNf8hkgzSiVy7T8vrs9iVxWairkUae8Daqtr7cCBRe5qBx5kA5ZyvKUa8JUGDUpsWipHWpACpXbh",
  "key38": "64qmZ3USXD8EHtfBnjk3vLEa9jQhhqPbzoGnpJvo9yaZeChcMVZ8NDRwy111bMybM6oCfQFuvQbsMS2qjHSxXLek",
  "key39": "2ZbBDF3tGTYuNeyzAp5EYEGdgBzgubGi8N7NtUG4XZEzkqdsrDHhxp8MR2t1doRqYu9i1ctbHrNQT4uiAY1vR9uQ",
  "key40": "3pxJ82ABwbcGgsc4mYqKjyns3qttNCCFXJEW5LmdFeMaGyb2AXcyUdBD2GsstAUYB6SVGpocPhC25FW6gmk1eRDk",
  "key41": "36L2QrMaBbYYTDcXZo1JBFQGgNK9FWdstca6XAxToSdhouow4axy2QwMJ2EJhJPFf1UaQHcxtSnnNkdULVnjACeR"
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
