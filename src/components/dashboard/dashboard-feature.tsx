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
    "3dwFrQmVyXhUjg96thGLmwsN4MmMSjT7eujPRaYeWTD4GTspdskkNKdxJ4KVa4rYkD2jQkX2v3rTdAx1nBr2gbEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vus5h4uWwuLH4cdSksVucMtFGtZWdRywS88NTWBDZjhy2YzEAU7oU458AsUG1MnRskQpYt2cSctcEySziwsrAgd",
  "key1": "5RjmMSURc6ZVQs6i8zU4ZaGSFbt1NWzbcLGVSqR9AP5wHxH3JoFbEyRGX4Dg7mEaz1H7szcCm9rBVgFW7m4spnHY",
  "key2": "53PAMrYrKS4VwLqVcsHiweJK2oPzC8A2unkbtKSKbPGSCTAXHnnECZx33BG1bh9hS3eZmVxCedhfPQkLVTZZKYUY",
  "key3": "5FFQ1ZpXbMQk3PZT7N2Xchga3z9bTre93eZ2mwwYtf3z6WPtbZtyAwWNtC5PiKs4u1RFbw6pCoNWiorohaqoM1ky",
  "key4": "zEUE9nmENaYs1Sz5CjRrxGHLiRvEHVoTruqeJKjPsnDEPgjkde55vZbQSxq15bWtW17EPW2KErVNpxtPQrDuFtv",
  "key5": "5GBrPU2Jo71JKYjPguw2JMJWADri8T546zdR4D8o3XciDsKAcmVTVKGpbgMo392gkeLufdZvr2McbdaWaZEQsHnh",
  "key6": "5LPSfFAvTCrCDogk6M9S4KmosxPEUfoAgRJFyjSWfdNdW1SyN21iA5BV2GbppCan72AdxWJUJfxTsTc8jpJtpxp8",
  "key7": "31YsB2A88mpMHJFfnN3WiWthnaUCj69vzmMQXtgfFHBKdDTApjmt3UXWKw2bFPeSAw8pPQyerdhMvSyQC5Jn9JS9",
  "key8": "5MJbH46KrGY4mixpXvziURxY55aBKhPneSrbLSS77LeVdFfBW7UhhCGRb9YogmYBWsZHemrpUDs2e5GDm7V7y1si",
  "key9": "2NhQeKvnzjmSpErtcUtNnfg3chhXCQqK9gwPtuyfFvPXwNvq96r1zze4MYf2kkw16YYcSHMbVfyqGyKANkSKr1FB",
  "key10": "5UQtfRMNEdesoVnAsTWj5aaAUXUHFMfYQUKxJfkKSr4DT9sLqyR1wN7wMU61Gkg1t1KjFM6yFeEjaXL8ig4fqbe1",
  "key11": "5tqc372wDpQtXwmB1urfpjHGM6GJAByAVnLimzSeR7jemxJvuYuSMcSw2mb1btzH24RT5eb2HXULRo49SpAmbi12",
  "key12": "3R6h3Xtyx9rkfgCgbnrZSsCdL1sjskJrc3BDtzfSLPpoT3AAaW3r8U8b2bE6i8JofCfJRM62vpBfmXbLxeoi6GmQ",
  "key13": "4dtYJGzdjZGhpnu93SFuYh1P1j2nAqzNNeq61cTQAWXDA9WQp7XNz79s7heMjBTvsnD1KzdWmu7g2x4B7VTAGu4K",
  "key14": "4YykcPHK68W7myaPHNqcwkDrxPxP4FYzcWxvp2vNfxKdsKGtDSdJ3SZbupFMri1c1DAxfn5tDXmqFn9CXvbtACU7",
  "key15": "43oAYchwRczWoJyvCQmQk7jB37NK4zL7y2xw1uKHESpmDouwFSwFagEuxnZLQDRs5J41ST1buXyaYxgLW7zpnD6B",
  "key16": "2QR9kpkBQs6Evqq4ebWEjK4nN54B5uU6jSkRdEkbWy7FYzUg69nVckarACjiXYTPvCU6ksabzhfAnrKy1ekgTfqf",
  "key17": "VgNMYmfbqfQirCRJtrVdmeY6G2p4qgsm5zUaVDatACwJeRqzMRfXGfFwfVrp88qe25chvzvvvPztREByHM5cQL4",
  "key18": "Dayhu1LJNitLpqJwbUMuuQK6Qa4Rh9CvYB3XpHot4Doyj1SrfFgDyjbxG8PwyRqVAwDTFvnxJuzLT27eHQYBirj",
  "key19": "3r7CSugzk8WcRJPyomJ9msFaJFTuUNKih5DFoJv2ZpwSFMZiZ1xAb8JnkfdBxAMPxpwfnuvgkDeDWT1P7WKJY1ne",
  "key20": "4JeU96J56S3upe8Z4Fb35ixqD96UTugzn9ZVVEkJUtDSCRtEZJZnxH88NQMbCmh9uQD7HJHbASD7P1ovAHyVMzUD",
  "key21": "2WV1mdDQpkRxnfAjJ7RK7X54r3EvAS45ziqzw55wGviPhSwrHMdpre5chcC7rktsYDNx87H8rtFpAG3BexcrLa3y",
  "key22": "9Jq1yFXFKF7oiALrvjWda5dgvtoESVv36SXT4DeBVgu4s4rtJPt5Krguzs5BVosRsqRBzuVPirurLKJ8S8ysr6P",
  "key23": "5AD5ySFYVzgowWwu8ewSL23bRcVQ8psZ4nmYiU8wUQuC3PSru6dKVyzFkLCuo1KfWgay3uvjhBr3owzzhWxaS2x5",
  "key24": "3X3sBGwBFeg3Fe5QmH2x2zZoRU4R1t148GyNiTzLbXeBGmL4ft1uqtD4aRMRZrSSobEgHhyxXJ1p4eZG34erUv61",
  "key25": "iUthUiSc2dvgbHo6Sii1bcH67qR8qsdtT4gBHxrr3dgHLZvaQD9FAQbBP6U2zf94BT2sgtiZ3JRsjitcJ35Sdjm",
  "key26": "a9zvyBHvFBCsq5hqhzxpJQ6V83EqCcRAGiCw9A2kTFrUjmWggoKvCdbCGgE1CWohXWDYJD7BobVwRdq9Jie4CaY",
  "key27": "a6PA1of18fbQG9KfkPNnuoChZtPmttpeWaSUQTdTs8MhtMrq12Afd96HeFDH7SM6gKA1yWJj7NUptvvkRGMiUoH"
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
