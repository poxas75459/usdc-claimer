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
    "3t3ErfXUTBZeGuw2YFLx3WD1ru3EFtiq9PvxB3gPJjEPxeogugaJnUhRnYmaQvW4zPnPy3NA9AaRMoSgdMdpvwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNE1K8Pic8TDraEHQBa2nXjXr1NnjBCX9uzZiMMpgoTAmKfNgCtCYGrNRWvRDX5GdiEX7VzvEApn9ecMQB9BUK1",
  "key1": "tVrWXDvJcrkge2LSNMWRXrfPPWRw6m1WXeofxtaoWhdHPfZF8DnzcTcvuAz3nsUkwdnZSqDkHB2ufhhpz8xwwyL",
  "key2": "5LeyU61p1oYYjrs1NX9Vy8mGnXmdpbkT6HbKvsXaaVHQh4XUb5i73Wig8boJ8Quv763EkAa5yPbpX8EBGXDHE98Q",
  "key3": "5ZnwvR2HGNDpqpQYsrh8TqGrKMUfTnvb4gptfJL1iscb2U9T83LrUV3N2bENixxbmQZKssf9WZPL2wxoDCA6tHSQ",
  "key4": "taEBZYkheoBU1dUgVzx9N4AGeMHLeQJkPQnGqFhVYmwchRVfdn8jzzy9T32tAjS1CGfpex6v2ZzW6mTTb6WsnT7",
  "key5": "2HZNqn8G3TzWzHT35bv5mHpanFqLQ84PGouJFHmfrR2MDNXcUC3iba7MafKoHgRJeozmPrk2TN1wNmrJYKwopXQ9",
  "key6": "2XVQLKT3YKbyYegkGYJXvzkzJdXGXWcmBP36Z1S5ZU334zeaPz9fttJwwTBj7rQYwqyd39bqc19ZJ4ZkMb68JUbE",
  "key7": "3NtaEh93gHVfY1kwu8q6eCJ93GSu77rBh7nk2dSHiHaq1pJyHGSnfhj3jQveqa12CFxyXCnCFnKjSCuwxwwvKogu",
  "key8": "3HMrURUwZLBMorYQXPNQsTagiUtpANMJy25McbsS4yayA9Do9yRfSMyXei8aVNvUNHo19iscb6T6LSUzoVCjKzuD",
  "key9": "2q7g2cxEuKxz6sFsHyNfwLm1sSm35VuMjnNv2EhtyD4SGQp6aL4rpBP3Z8tUFGDP9o9qgC9MNnD9QVLwymoQpd3c",
  "key10": "5HEQHAcVwwoFQDbxRhzqEDhY1R3ckP9yAFrFkSURCbiLhq1kLfYUBBVeRC7wNuMyDsre6xHyRFtMYiuccSXtBBRL",
  "key11": "2YjtJLrGfd9bB4g1gGtvuwPyDN6KVotzvnDmD2HRJG62FPkgicSHShtXD71qpCrRsP1kr7BCFw14tLT3t8mbsdeS",
  "key12": "5nxmthxjUv9HeH8pEmSczfB23Dx9Hg2TvG7XCBGwaV8gC5HbsV3c4J75LwH1BrPTdwpFuMAs2yrnCFmX2rcHPiLY",
  "key13": "2CYpAVQFb1xaVZxyzJM3doFZpcsf7mrZPKn27yVBpSAbcrWaY9uJf716ki5c6351tCuEWjpc5Nwnhko5XqHzyJFh",
  "key14": "GzBQtNtVKPPrbnKDafm7dPXqGmXaAgR9AdV6Fivyt6oZuV3eepz6uyBXoDZsKQaQhYbuNrVB3vV7AR3nGv7w6uC",
  "key15": "4pD493ChMyQFBb8EEow7ELsTkPPpDxR6StaeHMTyniDUi278SkASVT5X5WmHiJfgUHd6FXAz7EhCLfPjfJfmiKmB",
  "key16": "38VHuqBkBFaK51Cn1dUUx7ZdHk316oQ8uZ8crpuhVBx5bNzwDXfzvdAmFfNw8xYMnETDXLaZR76UqT9mj2g5BmZA",
  "key17": "2oZjZVfV31wj7SdE6vV6Lta6k7T8UMmk1uNgm5GxfbkyPHJvZ5npLwDuWJi11DHDuN7mgP6BAoUbMdamiXeZ7wiT",
  "key18": "5x6kfkW4cFrXfoHJjXn2VqvyUTECazi2DeKUsarfQ6SX43N94NuCZZY6pDR1ydfW7VuMG8LrFSmbg2X8GMxksazb",
  "key19": "4GZNuraYdEwAFTUkrptppxVmsEbAUrvKYDaVipJ7gxQn6pd6qjR6f1hbChndAJLRMkwu6aq5LrcKgjHfaqHLjwrk",
  "key20": "C8QtGwQPEJtQUTcPFUq7HyV6jh8cPqye7Qa1ev1KzjWmvFDHjTTu4PUBLdThYPrxTNR3LbKGFYi6Cgm1kM6JH7J",
  "key21": "bbWkLyZdYefD7bqEJL8FJmJ6uZDJAS6dXrKUvF7Xyb8z22mjV5pRqEFNJHkqNLpo49KijZnL3Ks5Wx4rLj5TTK3",
  "key22": "5KUzLLngJEuMfhUdnJF7hF9EySjFhPwQMqobf1oHvinsRwxAu24ZB6Le5fybSaRyCmsiR7dDvwqGAeGkM4PheHDy",
  "key23": "2e3JfN2XZtwULXYyVYS3BTDqMvPxSCeX6x86rbyntP6E4KLBZLiduZTs6jXQLxpijZuVUxAhyukkyY9pnknHTagT",
  "key24": "3CN67bzVEMYiEfFU6Ujyae93d59sw8XbkhqAP3rQTC8ot68RBTzbmj39w1qdt9xmEwvtFGfVhQqBywNKEQJjuEmr",
  "key25": "2BmEuyPy2HfBiE6JHWS2a29qH6RxRWkDLoptCUjKe2RPcRQiBzyLtMmYyTqaACf72vg4tHtHf94FoJWoFbkxkM9T",
  "key26": "5VxeETCBHV9NpkdHQT3sLHUyc2aS6mcZX2QTzZtqSrM8UVj5tW3ZUGBUZF4NFw3mXYbEXBa1AHmy8m7Y5Btmxp4r",
  "key27": "5sW3h2tYNW9aD5rz1dzX6z5eX4HBdcV8thJXcG9aGDjWZDLHtoPwL3Vq3cSqzsdbmGsq1EP8aqjYEC25N61ftvCA",
  "key28": "4PfgMgMnHWmJ3Rcby4nTUFbRiT59ZCHja9rwMpLU2UUbMSE2BZqB8pV3rKonZhNBVxXKBaXrGN8SfJ35eaUEkzw6",
  "key29": "hhGMVB5qVAVkZ4c12WH1zWHxYXdsKnV3MCPJWdpvnTaQbCf1mjPgtESR3sHu71M74QvNtm4xfvSdTAPh4iNdJam",
  "key30": "9JHTgFcjAbk4Kk5Fuk8HL45Uxm3MTi5qJmqXyc2ixUNERkbco3QAPHCUYXudCLBmG2oi93XnrMteXpqsLyCroEP",
  "key31": "52MnH57FgPo6w2oUc2nmUTqMFcKozsrGhhswukfPRcKxP4YseKoEvMYDCuQgpmskBhUainbepUi4D9P576PWCcWn",
  "key32": "3aiPUckojyib4oUfL7wU1qkHWLN3bw9s8K8vgYuM7dKYeGQ3a9KzZK7VMxp7eTddEUyRbuRAYmVdGnMhY3zGqLts",
  "key33": "2A3NXGUZMCtnQfjYThXv1uUSqbwakWh53HhZ7hfmoHgbL5psFiQNwY4WacbrKYxABtzSPVKiqpKetk998SXW4A49",
  "key34": "3DdNsNkzsyRut6zdn9tbXetRNcPK39H2beYtFp2kN9HstFmgihRgLvbAPKTYV5mw5ZvZUyDNAzvcLZzGu8UAaojD",
  "key35": "5P5kNoReuCFa9rs15k7PbgGm4HNNCJBJQcTL49S9nZe4BdwPT1yxgL48K9LqWWEPtGc7ZeK9V7v7wJaHJVzE1kZx",
  "key36": "2T4zvjfrUVzJATFaGf6dRmrdphJWgQmMKobHV3KJTGL1CABi5s2Ye88UyQxRT5jxs6RkRqrEEG3v9maXyMFqfjdG",
  "key37": "2PMAkWHdLA52eEp7dhRMHJb95Nf2hqpWi5kbkERw5gUFsk6HNtcFSkN6Rby83hcmBtncdLoLuJP8UerUrau9Gsqe",
  "key38": "4oLqLuTqyZfrcnmgoa2QxGtRTL2r5273br46icNsmTaf6k11VTE2WQTgaxLE3sdkqzVq58PYCDiv7EBnZsfWctt1",
  "key39": "2QskFJN5w5kPwbABfSW7trKRYm3BaLgwHpbMgtLHJ7dD3De8xwZEgAd4DK5CEi135XZn9kRqqSEF8m93dN6qS2U5",
  "key40": "5bFY5qxaosym4Fa6XNfndGNfXA7K4poMcEs3fQawbJqYqc9CypVqz1zhv6CG9DYbJYghXc1MGpnJQ2h5e7cM6Xdj"
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
