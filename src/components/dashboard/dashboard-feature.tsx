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
    "NTPccEsjHZj6NSvUex75FxPp4cgwpYCknaYJHqwoRoPMSNzLMQqgRsLtCxfftDdFA1gcKfAd73qzxMb5iJvE1f1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnAeW4raXGZpWgcDeu8rt31czMBCfXyBhW1VMBvrpNEZ7xBe8fSYn6hovVdKqDqsTLN5Tgr9bwcwZtg5ui2xrFV",
  "key1": "2uvx7dRQ4rvENbKTTXBjDBu1H2aCYJbGTrNU4dCTfBhMnpXS12s72RBtSi8RibRvPa9PJt1vKJaacfKmWg3rmf86",
  "key2": "3BSyNJPBbWFMoJBdjbXEqkGrmu1kefgTHddxEeufYdJrc9SqXegZQqWnX8dGTY1Cp1enLMA1kZ5pUCWUj52WxBtc",
  "key3": "4i249RhnqFMkMCoJKPftN49c2aBsSDhGRoybf4HCjZUB7ycehkjQcdgpupSmMzmN89EWP2BXG6yvdoFgu1iY6WnH",
  "key4": "DPDQiEHCBA5fLdEzkPmeFzzxeqxAZkMG3fMwTD2g7AMf2zrMmUsieBaX9NKpfCxVf4UYVBAZw8Wwk73uzsiEKZs",
  "key5": "3dH769xpUFozjSXbSU6Pye4R9GoYoozVw3hfiQkXjJwaZXV6F3qJroxLHdw3V4qoWsvLqSGW6ox49sorFC1fh69a",
  "key6": "GAVnqsKFJjSTZyenTv72SULyp9jZNhkQXYARDmaez5ZTfZerktX6jkdHBhnfXcXQC9kaNkunAkHQpL7wSPXtYZ3",
  "key7": "fYS2V3KVVo2oDbHg5x2YzsnfZQtpuWwZiHR7Vc95fCGUKYfkKmPbJrFfHa5Gm6LMBGamTaoerFBaww5aJCcoo7b",
  "key8": "Hqjjs8wX2n5KQVv1nYZHni4DMmNhxJdLPdcUkcCAUvN3PeFUPgXTMtNpviDB9XTHBM2z5nPCXRH1Pq1JNUCenRV",
  "key9": "61D2tTb3SBVt1w1dLmbhm8gYsCfkiVn6WoVGHWv8CNzVMQ8gdzTpB7JUhAhoHUWNyGHdQmAeXjUFyDZyNubG9Fn5",
  "key10": "5h2tQpqNHsoeadVgUERM2Nv3wEYjx9zgKwXfV6qSeiTaDmaSCtG2UgCR3YYBxwcQhdheUv7wEdqMTAP2ENAu9X65",
  "key11": "5WsxaxrmmbDSNBHfy8ZQQ9ivQUok43sw227mL3bm11NLn6w28kZkAzVCjkwhWVc8ZE1AGVpL7jiZxsta5BMHi8sp",
  "key12": "2jREP4A4asen1DwZiY1uoXUVqst3D3ETTtHwxTSMy3H8mqEUCzwDS85yZq5u3oxhXGH7yFaXYJJQj68MNQA2aEA",
  "key13": "riaTqnDx16H8PJJ2fZtMWM9poVmqybXiU6zy9X99vUCN41M7PoPtNqFLou5h8o3bH6Byp9SDSbjQPKQGTATJCiv",
  "key14": "2zR6kGoem3WpbwsCJeYwsZqvyEyq64N4J214aHiP5s4wUCJ4drWoah8yeVi3RSJCgFJkjYGq7pxq68gqVCy7p2F6",
  "key15": "J88grPJ577NBQvBXEgQxzTGru5upooKWMbb47h1xAsBM7T5UJQhLcLnFr63pe6u2fFP2BHWqkQMEewTLtsucKEM",
  "key16": "4jJBnkEDqRCqjVaAf2TpPS1CoLQCtHaD5BtKeTRncMCm76uAzLczSopCRktCYQjVp6aSkhzJ734CKt4B31XXgcBR",
  "key17": "5cGWKskY6aTCQh27mFnEPfmLRi8pSh4e611p3cp7FjzcSHyQ7v5MDttxd75XsJUTbSf7CrHAH9iFb2ydg6rG2SqY",
  "key18": "5ZZ44jJ1yjC2vYuCmrVWDiw2oqPG4cTWrBhz9Yosm4Z2MA1Qvd4dTV59ZFJty1VD7GyyVfkEmburzWf7UYmnEp3R",
  "key19": "2a1tRq99nkSi7LUuVZ9RPfo9GDoswMubN2NJ1rnypo3MTQyRhWeKCC8Rq7JrrY7CCh5qGSUKHhK2ZKdgggLmGBng",
  "key20": "3U938fPBWZkXcKZ429kNM1WbobS6DmyS5TAZgrknSjVNqRxo6ixKzNoqnzR4u8HTedZGPVceR9YZCTwp9PatMw1F",
  "key21": "4xJwZztBjNuj6ttrYodtuqGaQiFW5nUPQ7MyzA3gUUe66hF3a6tCAT3r5RECz8Det3jvxohgjBWGNQRMwYTFueFX",
  "key22": "3kPcKx4hxET8iuU5ALeyVsCSmz7pwALNmzJmCUZSFaytD8sGdkYQAgzdaiaZkBjLCEVpmVuQMjds9vWWQy3MWds2",
  "key23": "48rLHjDJQwb8dqTJePsxUnZWq41NBH4gKJZb6tWD4XFuBvrwZbs2k1wk9fTXKYm2TKRZ4b6CLYDxxmfD3AwGJxwq",
  "key24": "57M58ryMTH1S2DkuHyBMvmKz9f7bvZfiVRr9QBUk2Q9CMY5KoeVgas6skLMBqRgqPTR2AAHnyFJDtxVAU4ChQkMv",
  "key25": "4doqQP26RCneFnxXNge4r5uEBjAb7yD8kuwSYP3FFVrq37QacQEjSpajkk4afazpof3u184HJ3Nx7MC2TCwdHndM",
  "key26": "3ckbMhRM4jRxPzdbdRrTx5ELFYYf2TfHJFYy3XBAfWxkCNJhRYzLwG3FUrg1jWzJZuiCrxHQCc9pf5aKPSywqMtp",
  "key27": "AE2cs5nSyjurcDmYNGCxLBq93a8egweuiaw23PTAGhXZaoCgb1MkRtDfbaVjZ2i9vYLmmYinh6uuHFWNmsxmPTg",
  "key28": "31cquHqQbSihTRtUX1U7kLhpKW6XhygMFqU9mLFjRzEn4h3gQsrjLh6AE8LMjqrzpQAAmeRj4YSgdTn7LHa9HEGt",
  "key29": "64tvbZjCgCrAjLbYTJ48o8RUJtPUGFgTfomumLUPffjbhX1hUDJK1aDTNZxfW8ZEwqPnXVBGSz7NGMpU6ywq6cYC",
  "key30": "2vKbEtw1fjEMxNMNJad8uXrH8LKnrbGf3i6XUgispUraKfhE1HqyWBhEYcwRkaNR8Y9ajNMNouGSWrPpco7BsfPZ",
  "key31": "FKqAQ2FmX3gCbgrPovB5QjY12wTyy42Z3VznuahTXPaTaum2zYvRHhNbzW6qEWSKYa1WxPoWBjyuiDXd1mPr67i",
  "key32": "4SqufPtBKh8rGnZP82iHNJTn3JxEBA4WintVAgMkepLFN8CrjviYFwSfEA2gFrMs9bPj9tpZ6TDCqiBTd12p2FDg",
  "key33": "265r1ABHeEAxJ95HLLFDYX6ZMRix2YRv8XuVFGhp3QhZi61UXFU32ev3w7h7FRxmDdEpw63sosaYNmi3vFKCiAyj",
  "key34": "3UgMJLrJLwuWraeKgZmKVzC3AErsN4cRiPwYNjmUXH5k6HTfQvnoUo8TWeD44yzndPfwLpvHi9ZhWjkA8ueFiU8t",
  "key35": "3pFEy2TgLfDDfigPJT6VoJzghn8RgpKu1rNToiN35GzAXUR9j3qXQ7zh5RjDnmjXNLXEfLSF4gDTdrf656pUz2Jm",
  "key36": "3vVQ1GV8WkaYpH3AhuCJXeP4DDoaXNVospWWSaHW6utuir648RRAQJHXMxe1oZXK1ResDATtNJSBXVhCsGuGYNr2",
  "key37": "57Ju6dYd9WptcFcZmVci7SWT6L4zYDJDPwwVtgnSiKCEv9f9nGyLWTbtkVAnecSfLJ4y4d4z9GLWTJtUSLGVBA2Q",
  "key38": "NoRe9NkUpC3YwjgzzUGYccDiReyi7ySo1jm8odV87XJpbnpLgz3Cj12aiVCkreyKKwqNNaASqBqcfFUYuNRAhhL",
  "key39": "5eZbzLqWyVjS8U7BgWYvWiKEqtyXbTFeD3inZ4m1JAhUZ5VA6FZ8Yu7X7ub2RDj5Abod3a9BP5vrirqw7Vydfwea",
  "key40": "3MYkN5gMNkwzgAJWbLY2xf9Nsj3X2J6mSRyLKe3EPhWSgysLiqpQYVw1GP8Reb9t9zAGFTNDqnLX9PBdENqgXpKZ",
  "key41": "2kDxP9HuXNqcLnFUrxh62Q17uRynfQ43PfLzF4t4Kd4s2H9JYybvd37LJUyoyCDTsjBRs32vgHKDuGQYtB9Ai7tp",
  "key42": "3yaL3ZF1iMx2mqAPKZzkoXkVGx4oGCbZJGwMkH36ywFPEPRCMjxhUPxTk7NsydsenbNpP6QFdoBirT6W1DCEjacP",
  "key43": "WDw9mQEcKkx4akB9B76XJM7uark9uB6kC2quQLuNYexoRurwjp8z3QkSFHP2LcieNNi7KAZpN6gYyhEf29YxyWA",
  "key44": "5j5AntpFqUJDumMWyoHFLza4Peoh4YVVTHdpzqRcSG6yqK2bwEu1f1JumX5jq4toss29vm7JJ55rFU9WvzbbsXCV"
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
