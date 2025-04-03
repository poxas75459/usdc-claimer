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
    "Mi8D6mWTgtzpufffdGGWn7hWyh94dfpq74FmuGMizbpWZfuo2WaaHfHc8jbpVDXTFZBwvJUPqdQzKMC5bumLg4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VgtAgrAnuZhhCP4vXNNjhboQeie3iBTD5wqePtQkcvi9q7CPcMyrGJGSi9tPLrFyUgZgc5TErPAoAxekypgQu8D",
  "key1": "XtmJ1YBNpZ5Dnbaz9Vzn2BfwCQjJXqByHgRATNYpycX33pFR6zuys44Ko8AxrG12eg8GfLPRTiFZLhhHBF9qhdg",
  "key2": "24kygxGRmiEWPUbt5m2zFSbWQe5o7cvnpgHQaQegEpoYSHEvoYJyb33rsvFZBaRYWNzRP34w6uYg4toPuAf1BWTe",
  "key3": "BGh26THxaoot6u3qD9xQyGK6L6VSkhgExBPKSTQgRSvspbBpu9dUtUDvoiCkHEvtGLUo29w3W4QeVJuUQBeRh4n",
  "key4": "3N6sReXR6RCeR7jMoRgXhXKVvVjsGpxGWhZuMkBvBqvECfTSm8BtfYSwHMyuzHfKKvzYLM3CZqxSNQVqTqH3umE",
  "key5": "5d8c6v4cVJvntYAAS1Ee7r6meY8CDQADV9ewa3A3LTxUam9ov96WocPyXU8MQTjQ7AhcZAoVVoPMcbPnkimzoE8i",
  "key6": "655X2UvVoi6nyCy29Zy7MFPugDTrse7A8z4gzj3EZKRuj4oszjnXLvqok5bsChYzYWtb45iYZX18xBwNM2XHaLBC",
  "key7": "4NdeUqPg1pLgwo8dirGgJFV9CtoHiEhkyEqQjFu1VHczF9K4hwbPCwEKN5PzBzGiFd5KMxirSrZQD7V86GozbGjA",
  "key8": "57whSXFWk9ek3rL3K4n4ApwqZBES1sHfhRCwk8wh5C27BPxFBSKBBgri3rstDiwgcFboqvZ3V2XSw63BnaUMy8xs",
  "key9": "28W8rEHF2P36LRsFhmwgXKin83MP8b3q7ViM1BJSdpxrbcBs628aTvKbdkYhqmcv26Y64grMPMepexRe5m1D7BYY",
  "key10": "Wbir5i4VtUjENUFQtKEbFmJsLptSSVKMG1r7SvLj7EusZkC31oofgBdJkR5NDLsX2L7z1e3ni5CVKhMsGj6FYh5",
  "key11": "5VuX1uzAsnsVrmjhncyztPLSqPyDzju5dqd48gBHg32qjrnjkeeZt1dutVm6dVfg8dXZZvcND9QXgHy36CdKQjBe",
  "key12": "3w64YfmE77XJCVyz79Fxp12TZcffnuPr3xBkBqdy7rfRBw8TitruccHHUQzWyHGQCT4fSLNXnd6nS7HBwZBPzd2D",
  "key13": "2ayT2GshgbHjPTZK4Kcxs8jiZPqXLRMZedavfad5FE3p5MNjgAjTa8MtpJBPDtvA9qs13iefGTDyciaGngPJqMDQ",
  "key14": "1r4ZDiKoyiXg5xPDcwrjB3xXPqU9vyidd7yZb3QvmQegpvt8nkN8ut38uqEyVseaitXcCpGgb5DSaJ8SPZukr5Z",
  "key15": "667CZciSoicguHDF5B85SqdsBFvzoVpnXi56w9Cw4VmLyUkiauQWnMUqDZ4E3YoGWzCirREeBYsa3YwQHAkfxBLK",
  "key16": "3GmgBguvUXmcG5XUqJvxxVp5qrxGfat6sxz3eLRq2PxnzUFds6KzxupUApsoPZvbWPFbKZGs2uz4pnBonLTSaD74",
  "key17": "5pYzs4YzqokNve9TwdXoiDUNgHtVxMXit7b92WLHpndX9YQPL6XMMqnMHX9oQusfz2HtiCbhsQTzcu1yLK2swvH5",
  "key18": "2Jzz6XwCQ6SSZg94zQEZKxhVFYJZmu6vgAkua5w8GhhWDzhc9T5DP9onzbvtdHTr2KU978sXierrFE9xhYRfoAGP",
  "key19": "5s9NUcxcAsB6Gzm6NV7u3EPHDVERaBBLquPjkaM4TKrQnzasPXiswFrUpwQFxjvtb98K8rJS52DHKoPAXuUropmT",
  "key20": "2bBM2HQsgnbwJfEEQjP8x9dZpbuQkGjqQ27Fm1dpaRZDfaDCCq8yT7QDhBe1pbwhjDyBXzSCSTMd4pfz7hFy3Vqk",
  "key21": "hNjqnQYBEhqnPwxA1BS7CtCsCNHuuYGAFQPe88y2QvJ6vFSpUmzKmQF4YQj3Q6C5MfrdfgL84tLPSX5YAcXdyoG",
  "key22": "4DG3UiFvujwX1UnLNJBqCEshmPcSMFnLfsoss9dKNfQQCXzZgGpuLw5A4ypUeWnL4h8GM6zsyc2uXM9eZYrhf7hx",
  "key23": "3nGaSN3hKHZcDFqVP77cc6oDdvV2wLtz1f6X3CF7QT87p7vgT2PE1cMN2MEgaMjf1aZPkiQj5T4aJhapB63tBxb6",
  "key24": "P1gvbvLA1uHEWfuUuUfcLQYet17QTn2whappGDfgSwFpanUALypohJRRiL2qgCYujW13QYYPiGRePk8mRZDrdv7",
  "key25": "5qqBfNsAUiKjgdg1WkLFxzi2s8ouS71P2DULuNecAAGPYRjPbtvw1S5jEQ5hhrJc4rJCQ5aZcQHFUmBZ7aL1JzAk",
  "key26": "krEDDBGcr5nhzgUTktVYVtVCe3g7rWcipRdcWBrTYfDbPKqTwHNmdVuLCBCWD8t52L66hkztU8R6pxDHGZUvHdY",
  "key27": "2spgwXtGJmU5yrUcFuYEZEeFwmnepXzSFVqkS4E159sg4t4iRUduSn8jS3fo92zJHgAHshsHFLPMB2LTw3mTGX3G",
  "key28": "2QGBYMf81937Fj1JAHTPssWBFdjnGtdVRsyekPPVW2iaRG1rMn5hNqUeU3YxMKM1HmEdrd2fN7wQZNp9Lwxmkpnc",
  "key29": "3u7MkypaKTpEUQV52uUoPHBvNwuSQ5zHGBsyfF7T96quMBLfxSDiyNcWjSLkQNaSVjHbpXvq98jbznv1pQY9cDTT",
  "key30": "2c1R1wVpijtiWWmCVw9YMwj4ssGiiDE4hrmmbwb6Q4CHpP7xd2gXfUEszYomwSaTS6CFHr44AuXyzsoxj29eWpUD",
  "key31": "2gdiSd8pzTABahUscGtzP7oFPV4DoTb4HNbE3MRZxtyzGJMRz226TyDtptqBuHiZmxhijeHPJXHK4TghUTnakUK2",
  "key32": "3bGEzyJA7agudsAA2TU9DyKxx5Kvos5K8dBQG8jY9w3NcH6wkAwWScMK7JrC8H4r2xRTVMx1agp8jDXBEzFGgzha",
  "key33": "4h86YY7bZJ6jAHypCbk7uZcbNPrskuu5vG6bJnrXPyb9SEk47reR4wSpcckuWFFgQSWsUEN6SwbsZSSwZjEdnAxz",
  "key34": "2J9kY4XT7AKpUuSsbdnaWDxTW5MzvxmiXGj4DPuf1tqehBLW9ibts7ZgaT5nVsXAsAVFhoMvdejAWCgBHKe4ZzLB",
  "key35": "2gk81LdgjH6kzx1Sb2CaCWUz2cmoXF7mErfZKqfC3W4PvSXTJxtJa1CCDez4nhhK6b5qdTPPxyW9HTvk9QLeP7Vj",
  "key36": "2op2fPxqnHRMvxo7hEfeuuceJUEtCmxPikSfNxCWoYCUE3p9oJE6t8GqEbBrWAF9UxDSozVkk49YFRFJzPemy1QK",
  "key37": "5BWhHAH4asHp167u3PwUib9ce6AJykU2m9MWgshtq5hCR2QzWMMj9bTFYP3ZHYpLpBVSiSBLfSPpGP18zbjZSQHr"
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
