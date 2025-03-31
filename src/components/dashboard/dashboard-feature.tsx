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
    "5xaCQU9AP3cLpMzhyPLfYy4L7t5enQeykVbuGf5chx9RSCF68B2NphKaxo6QLPXUH3mDMKhxyncaHb3KaY8honmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCygt2oDF62xWm5mv3eKekovHJpdj2HHWKwRw7zk8erfNMncoKX7mVP8AZJXf2FSNYBz5saz8AzNESzfCT4k4EQ",
  "key1": "5P524RzQjNaMeEwHrUBee4mU2kNyN7eeaRDYB78g4xPaRZVqasRYfryonNXWs94Dh9wezTcvcNwSPREddFthgvco",
  "key2": "eBnZh1m7pVZ2UqBRWMYscNfGh9PnRui9qx8ayHTa86xC4bQhc8fgsLPp2JWGgm4MbsKrpRsmhaLBpDwkdQWZvtd",
  "key3": "52r3TQQXv2krqavad5eC1TmWCTcdnY9A2i5CMbj9LErKynW2mgo15jCwrE4LQBv6i2KzWteSAYWo4JA4Si5fz5Yb",
  "key4": "4XqNEDd5kQktbje6yPi85zxrdDDYnbxPwFDM4LFYj8oeXPCGWs2nnqfg6eAPHzV6MXK421e2yvCWTorUqtYkVtaN",
  "key5": "46i3WcbAthqAdJAfcoJjxdn2mLrsy7cmwYuMepCYBY1CkNN35GryaFF26DJodpAuJnZ5gmNiCYqvPt3iPUhH3Dd4",
  "key6": "52ut5VoxNJmogCmrS9Zg7uZzSbbjjJMWSfsX4yjdPXMLXgNE71kMW6g3XVAEVJELEJpKw7KNjcuT9Pe6AiLkNV4A",
  "key7": "3RSxHMt1tMUMzppwCvyTJ4KgDrs8G3LtfJRn6fmY5Q3udXfQg6PL6t4JXg1qUMN2FfDGkoiHKhwmyJxLRfXi3GuN",
  "key8": "2Vz73vaim4obKCPgcmhQD22JNEKVtL5Edctn6yDgia3e5MCn5LVn6P8bLmSbnGi1hRmrz7BFSD3VDe3AeoQgW9eo",
  "key9": "esRoTTpiZAYcvEs8Xua1YQJX4CTbTfYr3UpxdZ4ZmnQmC3KwBu2Zr3i5VD1jAtKKtgwfDKXFDNY2iRP7UEjNTeJ",
  "key10": "2EZea8yDHngSqj2UkQGghTnDqVrtPFMaTi9TsDBdQxJ99FgiVq5exQt3kuF5CPFz9FZh4eW65q7WF5hm1U2yxzbS",
  "key11": "5bC5s2hwHGNZC5dRYX5evDhSbfiC1jHc7LcPrvp55R3NbcUsatPxLAzZeG5fAgxmzmp5YWnvAYTQuQ8HvvDkfQ5n",
  "key12": "4KRuqMnSct3H2cz2nVRFXoUQhwtQ7MCuv5TwHcYqaVWMpnN3tPgGh71G4GoYDWgbZShkBaWc4YNFjZirKedHFHYo",
  "key13": "3tcc1wHksx84JKHj3jPvGaFyCHLY3jYfeNnt2Nnj4tuuys3wVwJ6puogLY124xvDKP4bhvJ3VB1F3fRx97heu8q8",
  "key14": "5hvRWUmvNpY123VD94d16WUc1BVJBxvup8mj2hFPrMyTSReD4m667XQea7ckhyQ1g169eUy1GwRWfVxfxBdXEUTR",
  "key15": "2gwg15TseHfDzby5mSyb1eVTzWwWEL25LBSTPxpxjgAHYfywN9n8wPVerzCnBnH2TuXvtgp71FeVi2gp4T8qBLyL",
  "key16": "4GW6QheqURstyKbenK3X9kJLvtNyX6tmPiN8kPazFji5iDydrkAEYpKNWoD3BZhP6xi1aCK8Fs87qYyhpyBevBMi",
  "key17": "1GodDnWX5MWVCroX3TF7T2We8MSKux8t78YoTuNHzbPhYBPQQJWu59AuxnB5soxhYH4vs4UjpuFPnASqzNHRXTd",
  "key18": "25eT9e8p46PC9rAY9sFmY1MQdXBPrPMRJcMUhxBpcSWduRe8KCd3yYcRBL2FRUUCgV4Xv4H7xjxPuJWiMuKyE2V4",
  "key19": "2Efveictf1ZN6GiRXfdNzD4zekwTCGD8WMexjr1ZViME1njnVC1C43Hp1qwSeyu7JUACm3BF7fu87uTRiMvHrfr1",
  "key20": "5ft9Kcimc2qqL5F4HNpMthBU9FiFsjC1RCD7ZQdJpbZkPt7bk6uGL348J8G4E8w1DLpHpkyBt766ev1AB5b4Qyk",
  "key21": "5RYCAtKvWMynKHH3WBS9WfFqRW6hWDAPtVFhD5sNYRuPhgDfyojQK1nJaH3aLiaXfCjn1yQvE5DJ1A8LMe46gkCG",
  "key22": "ebippV3Bf7vF2pdkJqhXyosjrfVutnEPi3wi6gRHYB1KSJdLwkdZ1r5pjLLtyS8o21eZE9LYXY92BKGzX82pvsi",
  "key23": "1x6ka8rNHabdCyqbkCScAQzrSKJifYYnepYuVFny3p4axvWz7vzhe1XVJV8j3toY2ZsP7aTwya2L3mUMqr3fMQM",
  "key24": "4F7xVRjRpipJFfxBnCPhjgpUPG2k1wfPSM7ERAXrzQWJdgwSTFoeFbkTHJ6qjE3R9PshU5fwp5EVQvmTik8WSMbt",
  "key25": "cxRCvCb5aqX7zjHpWzrK5rt7ivRCGfjepYKaWUwWaYLR9QpXqXBFAmVPZFK6y6CHwptY9HD7iV3yFu92yxfT1ti",
  "key26": "uPFoDdpM6y3w3dqZnmnbauRq4g3qX6GFymcLQFtXQADESNWHFvxEo5oY22UpHErUrSGqPkixhS1douQ1ipcM9nF",
  "key27": "2degHHmGufgoD519UB7j6xYstUi9sEF5a3vkB35GzbJjsuQXdz8gMoMfPkEbg15Fy2YhrqZZpLmEUmCSW7BYHg8",
  "key28": "cLNsTkC4rZb2rGje3A8mJNusLUGqBcUNtiajxsoawQ4VM7t6DW9bsethM58yVhryvm6TbUV9oS1a4a23xSBcU6V",
  "key29": "4DxG28PbdFCVG4oBaPj1RPE4ea6RG97S78Sa4AAsbAYvECcPKPw4NDPYSbY8xCwdSYeEZc35ACd51yQfQ6zpzEB6",
  "key30": "26WDvS2ys79ZUzY9nbGPGKrXbQGG2GTD34BSiAWPYtGcYqFhnn44eU3tTAuu4fjMaa3H3pr3uukdJXA2VoyGLiPA",
  "key31": "2YWRJ1MUAf1P1bRdiSDwmkvH9rw4KptxRpJ1XU9fBo6gug3JqZJRVVdwEofoJBkyKnYwkxHfwHbgd7d9S2Jx1DeM",
  "key32": "3fcRCUGSo6eYftBtnioH8nSne3fjm3BWGgLTC2btPrwxGDYZCSxgPwawVRGqSzi6Zh5rcHLFyb9JiWewHBBndAu",
  "key33": "2VrDtbkGUg9E9unEstDL2Y2BfVJSSBgxpFy8P4Evi39uxsRcK7TGDcM9LSwTSM5SSbKfk3aSxWoQ7RDcrsPZw9he",
  "key34": "4qTdYaCkrPoMLPxgUfZ1yjoSpEDPSbz6CZD28bkafCKewEZqmTfYoGiZZ3mfupEmPQwE3VBEpxkAPnvAdZ8tTxMw",
  "key35": "Yp3ThSgBQKQyLkj7RoXviCVh6FMfse1Pf2yhMAbUQ43cfn9fmD7Cj1sPNCaGW7ZUD4fwJsxvrAs9VLyhNzfUXqG",
  "key36": "43m5ABVajzf7WK49B2NPhk8FH99ZwKiyRMyyN2rCUDF6Lqsvir5xYZQ7X4Dg2uT7xxF3NgCQH27jWhcx5AKK1MoM",
  "key37": "3KdP37jcgXekQuwkWXP5SujyPPwgF3QyFwTLoPshQ2LyHyh37ZkPCL1QppmsdSPL1pm4s4UhcnkuQuJiC91jHvJK",
  "key38": "52sbGL17VNr4HbhdJKzL25FEZfgmfpnQmfUjVpmw7SzjYT4wuNVYb9YE9RcqTYEpkeLqVqX392rBwNXt8yfu6t9k",
  "key39": "5pqQsmEe4rqUjpdoMRVpyuhhEtSvYfHwzBpYLwCaEy91F9hmhW8NX75wzLryS42zTdfA4EcAGXgs7CPHWxaqjYn9",
  "key40": "2PQVap15GFHKauerN1ZRZmZrMvVJWz1bC3a2Jt1UVdUcySnZyp1KrgVdB2QQxRfT2WbXY36NQgBKanHguPAtpd6E",
  "key41": "3tE5JRM1vvKTb26AX8R9RAU5dPnQWY34R98ijfbyf5Pc5s345kJT7s3KmC5LaUxTe8hwpjMJt2UsPE8uB6sj8FJj",
  "key42": "BgWMY9tbpDyPqtCPSevxShpXKUTgJiji7YiE2yKoSZcZsfwLgtMwZVCovD5oVfrDo6t8PjnCQSkggVCAmT3wevS",
  "key43": "5mbFaokEq8KxFGTtUvXSrAvPqTSwjpvCwf2sbRZSgHxaZcQsNgWciWmMWyEU5nWCv5UyYyhZXqSbZt7UUFD5WftA",
  "key44": "58BRB4ywEaEoxFY9Z9t6fJPnQzTxx44TjHBKs6btAQ5z9VidpCweBVXcDwhVspAAAo5ySZp4BZEtq7qvbsSy9LmW",
  "key45": "5AytUnUQ3PvqBQbEGJMxtpR3XGXvETNj6p5fDHEmT97SL1nmn6gkPX6DxsbdpXyRVVV169zMF1RjV3Es9fwV6goM",
  "key46": "LTq1Mq9v25bFQ7Dy1AyM4A75fsAxEpb9Do8nSgQQz8AzUvcaLaPbCVYw4iCy4fYY4T4yzP9NtbJEq9KFuAJNekM"
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
