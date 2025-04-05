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
    "23cgmvzcGk1q2dSh9MMGNeFvxAUa5CDF7XAdss9ijGi9oK6kSEWbk8KWpYUsT7GcFPNYrdQZRdZFydJMhXYsokGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Amp78fGhgeNgpFFkvoyr6B8nBCTMP2nvHcfBR6mGwHFFzvvy9fDVrLd7HuYVBhVWh6r69Fry8f95RUoBzhXxhjX",
  "key1": "415VjfkA8HHa5fB8pBWLqN7mxJv6JcyhUneP2DUpQ8B7GEeFv6no9U8nUV9amoB1DfNDRzpRPLzaVCojEq1P1PBP",
  "key2": "5SDSrQCJykEL8goG78DXNJE6f1e8UG2Y9a9mrfSJBRvdWMrxzwa1qwA3SEqxhm7mcqW7QyRM3itZW6KQxsmfTTQM",
  "key3": "qx5Gdcz7Na4j6Eqau16w9dLL5AWbh4Ac9B3ztizv2YG5Q8Lh1rLaUQxiJ6ZebMPF3bVP2Sce6ficx3XmeBkDsEY",
  "key4": "59nv8hPBdpBd473zRYKUF8SuTtANWXvDFshDPDRvaKoDdWabpGcSLF8yZS7mz61uMeKA2Kc6DYuD14aRK6BjvR44",
  "key5": "2WGNUe2oNuJfEnL8F2bm7HT8Pksdx5P6HcYaPakgf5Vx9kMiMeXEnH2Y1hpkfGxbyLqhsKk95jhc362JFatvuPDr",
  "key6": "3rYb377hHcNx3iPzQzLiZU9j7YsY48F2moazRLrvuptSC9ThYQdiSbbtXvef8vSXGU5Rv8rPCfCwqa3utMqr32QG",
  "key7": "2wXVXfGeSciD5gM1cJNAE3ohkubsp9J3rgk3TJttV9CyAvsSjJ3wbN5bTYFCzp91pUrJoy6HgCCfoMiMsF21Yxtt",
  "key8": "kvPPYCmU5n4GqFw2Y72vGqAjaCPNRxioTDPsmATHST3k8vFCB6xP1iptYNupYUPkPcpRq1GQTPdHinCZTuwCT9U",
  "key9": "4jfmebRbUXAbv62HovbA2EpmA6HAymVNHGC6vcKiQAMaKC1wMdMp4tH4wrB6MfYCh7rVqQFXjAKgioEqV62fTbzj",
  "key10": "fs8hMGDaJxLexg9YJKRpYKWdpDtcP2U4fXbYjZB4bBkMyDbNPcjBLZ2ndniuFs2s53TikE7zpSaJVp5rpD7993W",
  "key11": "W4S38RDGuvJfgyAL8nCkBq1g7zdCaXE5VZEdrHnmgNhiHT42C6xy11ghC6eftMnFiYAj8SGAMh31nq2rktrQ4ie",
  "key12": "Qkf9QvzPQeaaTDKyTmHf1AuXPaajW6siNcJxLk74ESfFw4NNqhqK3w5qKV8p4utNyt63bLLxsCrsgUV8BVJnm8X",
  "key13": "4DbPBFNimWaYK7qwvZF5QNBMLWqyVDxUEbUzgh3F2XBK1aPSkF2fdFk4wXhUiphjPokvudtR4La6Q5GPGEiiyWqk",
  "key14": "4yGR5wXFR8ZhN9cgHwnjxwwbgBESqPm5hEfPxeT13vjjK2epMt4fHXeXuH5VUrATupAXYqnrZPnUAxmKjaZNrELx",
  "key15": "WMk31WhSPxJUQ8yZUDGq3fFayrviqCLnMKXWezFmLq7BTedeLrAAQsn5q9VTDt79z2HDauDkQB1tjfpqaNJycco",
  "key16": "44uZZrEYt32kTuzevLg5xwqNsEUKbrAFBXFEgNXQTdFG48xQZDGx8aj2SeDu8qDjFcTegPtHGdD9Eo6hJSs7zf6p",
  "key17": "41UuUSZeqrGXSKKNk4rccALy1z7GjSXAgBgx3FCPnBaFdpo6zj2JR96Z2NWL73Y7Qf7ERrSyFKUkcJcv9K9JJhfo",
  "key18": "uLzn4F2Gd7LHTdYRSS7FFYaxb2wsyL77AULgCNmG37ZdSqhyZppwgESnMjQ3NPpDLQb7D2NegmMsUpNNgJZtTFX",
  "key19": "5Mwyg29J27a4MwPQbEaYqcocdTvbCt6mm1hpGmL3vXfNNTDQR8RuPrCja9XupAaAKQHRQix3KSqCcimFgUkUBEE5",
  "key20": "euDJzzb17n1auQ45s35JLG6vbSmM4aTxyoaXpb8RYBXKPY3u8btsFMDWK2Viu8s97fa7qQLALEzw4so9pqACKbC",
  "key21": "2AfequGZjxw1Cm86YCP43Vb5D6W8tyK87gHcnDeBGqGohtyACcj9fSjM7WVv3SkcLM2Reo6ox3zsEbb5Zg7UiqDr",
  "key22": "Jrrt9F38n5tuqBb1qaVCr6SYhSSmyGaCJiqrHqzgXQ7Ver9eCR4SEr6erk33UYoTptwYLDKXVDi1hSYUisn8u5v",
  "key23": "kAHC8QZLSLZEdAxkpwzALWg4XbXn7pF8G7443ATVNDYbNQC9Hqz9M6eht7CrT1Scyheg9JYpt4KCkXc6ocMxgtq",
  "key24": "54N9ajbxhgFPdM99AjGw8qFkU2feA35SVis2EPXPnDrhyXmFcPM4op7RPjZV3SJNLTQm4C58dF5YCDoneRroZFFG",
  "key25": "3rcAwPQZj2KsSPwvNwd35R8phodenrFdfCjaomCNh4He8CbS9DKcBHHboVdPqDjazL7wvYkH7XNtPhChvMwgUS8S",
  "key26": "3JbrEPgucDMFcMAToj9Mon5iMEg6Uh8vbhfpjFDsp9LG3aW6VpmV9wYt8hLaVSq8mmnCt1ZYvMDpEeU5KfD9u5M4",
  "key27": "38UTrmdL9HHsxmxcwmCMbqREVKXemGTWJhdTVGzDKcxpcLiCUWisRoPHs2bmFagWynxQ86bMCQQH5kg7axqm8H64",
  "key28": "3Wn9DgR59UFCJWH9ygUpVtGcvySR8wMW5ZgE9bigZrMqwgNZztRj9CeKh6Nwcj1m7ZEo1Na9uwNRJqVNSCfRNerL",
  "key29": "oo2BA9DmQAsv9xtBRLhAbymjdc9A1iv6S3eCtYhA8QCVKmUnjhZhwbD6dejPFDUfbHPhV5QJeWqx5PMHQwZrfyi",
  "key30": "2qNLKBEqMexBUcXxtoUUcpKA6Bvhgv9FJAagHVKLmTECs8JfowjDfxBaNonKRGhcd4KqPwCq7H5F763a6rWz1eWR",
  "key31": "5peBuYFKqXpmk2V5XfNYn3K94MU1i7T79WnnC3ZLB1YG6eQSsozBx3VitaqxeRgCMYYZ4WszzN7SHSMbCy44EQ8j",
  "key32": "3g4vEFGyFyuLBxpRRPfLPNhaWkJ5Kdhv3X2hdEN8ukcqg3G67LnZy9TNnhPSoX7xyaMWYV94LyKrX9zhnCXktqGf",
  "key33": "3PNWtxAfCnosXV9eJanDNrufpP1PjSYQWfpYd9BGPxzPEyrbm43zhPXGrNp8FdqoFQrt76iKdCZqMQjykrTuojht",
  "key34": "35xyP2Qj1JiHLUWQdRPcSSzuudeFwxWzNcDRD8iFeDqiKb9xQ798fyeR9UTtxVixoJjP744rn3NRK9peihjyauG8",
  "key35": "3DTF8qW8VZKzXiSojKU5VsUmfK5zjzbv5hBwSwvJUeNHhAHpgtRBcptuWVU7eGAjTsjcRVKt2XtMAH5xzdQfBCkf",
  "key36": "4b7anu5MYiEKysbijW4SsRH3hH5qKirSPMTSBkMvwdyRDN7ahqSkkV21wKVxSSBETRvb59JDL6t21M3xQuF6griC"
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
