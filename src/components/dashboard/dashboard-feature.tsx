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
    "aiREhjFgtL8atLJ6rzcDQ5GDV3hFF8nryCfozv5CYFLqXQNMH9GwGoUAubHbHazuuMeih3ty3J2smpX7x45odCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PR65tTAZ3T5apxr8szqf171EjBTACGfpWQYY9atmrJrJA81JEN16smhL6cR8wp1fF3cCmXKQEQQcq83wVo5X1Q",
  "key1": "4ZLL91cDpWFNqmrAytJJRwFpMctLcKqiP2a3QuWAvHtUDMj2B1qQiTYMXK9Pc3USRRp7mFB78fxHeBRdqKprAxSf",
  "key2": "4aED52EQmmHYcpHk8iJFS3YLXQN1f2P4afXeHYsAYrXDd9cQTGDT9TNYTkf3bX85C1x72V1RNwJvBB4X8eBGthye",
  "key3": "itpQUhvF8T79ZXRvPJjEjcKCBg1hhN2UyZtV1JjBBh2aQEkuobvRDtUUi2RAH4MVfoA3Uc5c7brxarry6fNzgpG",
  "key4": "4FxTxDWVCKpvQiJVQZJ669tuWqaTvTWbcD5BGbiHcUKqJhDzaJPhYnPPmLk3cnnoMf41s7u1Bomy1djMPgyGsJbn",
  "key5": "2c9QguR1WJrFZoBqq6FiMX7sr7HVpFPdb3gPFEAtRq53DmScQGBDd4jqR4HQeCYNYQmH343mpNFy1BoF4r8RSrJJ",
  "key6": "2yHFegDKFNTuq2S1rZyDHmrkvQLhLdARNtmtbfWLSeejxszojov2hBWnsFDjJFp5TEkVarkVTcuaNYdJUG1f6rDx",
  "key7": "5LYLrdbuSDyHmhMmt6GF8fhrouvUQHzUydZpuDQPUJEfsS9EnwoVPVCBaSjCFqnGfsyRjm4NaePnwjfLm8nvDwDf",
  "key8": "5ZDYGDN8RqrDkbFLtkS2qeoRLXxJpJMjdHy3zk4yXbsK1Df4V43RDvS216bMaF7H7J54AyZeQdJZ9rHr1p13ryNm",
  "key9": "46QdRWK2erGe41W8gmW2seyWspd1EhHCydAShqqaZJEF3TdC34Zn2NQrMrzA5Tur8jKnbMsg5bh8Zw5RoaUgKWJ9",
  "key10": "3RoKdAnJVtf3V7uRMewnUA3t1nJ1c28BzpzmjShHMbKnvADYrozFPDJ7bwfDfN2HgFvdmEg9tv1j7RHdQ1XQqASH",
  "key11": "4Ehd2GcCFNJEGrhbBgHBaU2XMxokFkXmSrfpgq7swYSi7g7ztAm5mrnDKyMVip9KV2zDJRuE5GEBnQpsZ76VWLnN",
  "key12": "3SU2PjoJ1vvFFoQcBGYJb4cWKRHkuG61u9a8vo26fdRnjTncVhbiBLGyWuVFNNdvGSTp7waCoEwvPvPY5jFGnqCy",
  "key13": "SuMfnEuAH6Sx3TdeJQS6dHRBYzUk8NZXAEokT8cpLq1hsCcfcGy8X6VyNBEiuV7ELEVRBfU2W9RkUMmvRU4DikU",
  "key14": "4ywQb1rr9AuxSKBYJKDxPspyvWXK2TuKEH9Dud9DP3QCP6BdAjXehJQnrJ3Jiuq1kvfWpyN5JWZsXSyaprG9eSJ8",
  "key15": "5MDaGJtRsTRG3GbzehreK8FJYfEeaZdBnoLd2BLH3aFvkyM7ja4svDf2KN2usJgXeACeP4hRhitYznKcXX22yr6N",
  "key16": "3iHbefkP9bLfPow39cceXcWX6u8R91G1NM2FWZJdkgsU6GF2Cq7cEQyzKzFskjvvw5pG987rCtfNMiKv3zRwTJS4",
  "key17": "d51MWrxLKSjYtcmfizdn8ezWxk9PoiaxQMvwDVEkgmWBR17Rekio2X9RUyda8fzkjXQHckrTY7ZNyLmEGc5k5wC",
  "key18": "3BKEFWJjbMfDaAwqdmrPhGdKgTd5rMfRUuAQLEXJBgzfrh6x4pX5KmMk7Rk66cGpgnXsCAVxp3et5hXH2xHzdEQ4",
  "key19": "5LcTmiXHj274wJnPmNdjRw3sCUSPLnaMKfnRYFdw6Q3vCWmEbABqeRk2arAWbuUvqPi5PWgyCTJAhhEZc4rFXDv2",
  "key20": "366uQXcD8Cr85TN43oUnZUkVuanVbXpb496478savvJyuFAQNYmUzCVBKNGf1WbXacUvG2ModWYHFwu2x57cQ6Dp",
  "key21": "G9VeKKvK2ubmKnvZdbNx2rtBvt8ZxqBcXriXKPa3NqfVvnN4X5E1kkHKk9LS6qKL1TLWWJ2gCEQUBRjB9fCPNrP",
  "key22": "bQu8DUycEzEc61RTgU47MwxgU1TfrBQ9nQrXZVPZzSECm7UgLUBQ4PbdQ6L2BgaHS814vvfgceeRm5JPeunpGXc",
  "key23": "2ciFEw5TuCU1mHACViQ4HMx4PFZcJumrYP3PiYnjCVtWZtA8pwJzXq1NHHH4RxhGginYj9Uv6AdySaPNBC7kjYJT",
  "key24": "5tdDdi1fbH3V3Ec7S9zC7e6Cy76Viw5M49yXXM3R7RKLrEsyidK8KbDB546sbxRibhWxfLHKe9UzFFozsyTK7zsk",
  "key25": "3z5DkhyH71Rp4TrzmKgBiPNUkvyLaPWxRZfifBXw2bci2AFMqpbKhMXAQD7rnuLqUBtVwYBnSrqj58SGYyEjoWAL",
  "key26": "55Nze2zzSgKNs5LgWNpojHBSE2QPDvPuJmPhGzzcwwXFacUTwdWufJJEE9kVTaFqqUpPj6xS6ToKJKLN9QY1cNGu",
  "key27": "3KfKntTXrNiwQvpkmirDPRrakSqUKPt3fV82R3cztanQRdjHSDhsf8qGBfNEB7bg7SRRDhjAGPop4oM64B4wA9dL",
  "key28": "63xokRE28djTrMxpipugumhTB1L5hUg4eHnqZaCGRQcuPDJrqZP8xewjKFmWGsxSunwbacdMANDyxTzfG2Wz4jTS",
  "key29": "5MnCzS6axmsMSqBepTWKscV4JoTWNgLyBRmQSvyFcFNAMZoKppZypFWK4g9JrJm11urhENrC4iEkHHNEHhYGQ4Hf",
  "key30": "4rufWDCZg57Nw37Lz4MSmuZP9oFfccNb6ZgzkcGvSKYt6C3gDQJXtRk5CP1Jp5zwwYNvqLLisAdfSu6yVDgrGtY1",
  "key31": "uxa8xxPYjQgpHK4RHHv4mU1J4UQbpxPR3V68NY4hX2LrXG6uZXU5dbmyyV2dy4Pk8QsmvyYXBLN1MbxHEQDL98D",
  "key32": "2DypwpvJLmuXeVHrVs5HcYLXJ5ZsU3F95xB96shN4cj49rVHJochzr1deMfJBAnSCBXp7z17nQMeveq4T5NMjSRX",
  "key33": "5vstDwvshNxokmMzCJnKEiyXQ2cyijWekC5fBq9A8eJxKb53Jd3fYs7NjW6aYcCHhiUtWfoAL3DFYny6eAuXnGhD",
  "key34": "iZHHe3owRUiQSLb4R7xMZVwSbCpXgPHiQNayngY7KGnL79JT71RPSG3rp1KHSWFCPaBwyxG6LuSt8KbtyGDjWjD",
  "key35": "4VUaLaRBUFedEpE1zYrpJTPSLUT2P5fxmgzYAsDCWgbgaJzCQjrZJHdmmArV2GCyTQdpZ9SpivkLW8aQbmji6zyR",
  "key36": "5upjs841w1FZiEB6wQ7RpYY1FfSEzjPJQuQxmt3rgujoqo7mGmJRZog7tQdaFsHfDFw75DspVRgPxnWmryKSk2UV",
  "key37": "GQZMCAQZruxNMS7ug2WJRmg8YyTYHK3HVMs8n4xDniQjdtbETMXbW7pmcNy1VggDvvWZKpBK8szVPLKcZZc4q1s",
  "key38": "3UwihUHCyTsXM2FFtxQUhePtpPy4QbScW5Siae6MsjaTvKN1VLCsxtGs7472TnEm5YgU2588BPg1x4j9NX2bPQ3f",
  "key39": "6wZGtvoMRFfjGYm9mKWEq7iFnpyoKpCq4E5q92dvfEdBCtyGRk5naWCrUvqJcfqtMqu8p7Pzm8xww4QMsaThsUr",
  "key40": "2XRUBSWqScgGNtjJdVZPUeS5pG4PjxUSqv4AtE2ftdBnEYjvQy4oboB7UtWT4jUQKiNPMWtMDyfP1yrYJBwUKPTo",
  "key41": "4wueem5M8a732HAfiRRFog6TFTNbofvFpKegjrcBR28g6U32pWKRar24WiToMrw15pSRAMbiyCqwwuCygUnYKPBM",
  "key42": "4QmkfSJc2wZcyGWAbsTJRgJ3ACuxD3A2rTVgLckYFVhhAyn61aEhqyQjVS1dbg4PXkV1FQfrS8yBUpv2yvZa5bRC",
  "key43": "3upw6XDwzqo2nJHsfqs4DJci7Kc5moQCmeMuZj4iNaKEFLzFQZZ7Ks3E8TgKS9gKECvqKiBgdt8C3ZYSoFKGirds"
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
