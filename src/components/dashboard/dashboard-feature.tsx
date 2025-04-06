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
    "524SsGqQgiMidcWZTcy5BnpNtvHPJwf2yXZEY1HkYJrhL1LKdgTMnQgHaRogsqV46BsWMXHo56jA5ihCGw46CjEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WUHFaH8v6TxhCgYvyyZcmvAP4o8sFNoqUL13Va95GAHN1pXm7dX2s7AW79wbCfLRjmGh9xrudtr5mNAmtYakhJ6",
  "key1": "2gdW6jieGPF4v2oCMZALtAVj7emREuikt6reanBsLDiDgjdGALPcNPGuAEGBTWKLD9UHDCTQRCqeopXNmBj52yTp",
  "key2": "5guXuGRFwqSu4NGhtXKr2aqU7ojA6ErbLwKkQBJPZjvmEjQVCtZbeKpww1VqGhPpcKrSeBX4XtTkHf7U3XYMUkXD",
  "key3": "75ujRsaskUnxMPWJLHsbMkCackoUpwoVuYiihGJxv2gs7R8LHtqJ9U762KsKRWHFnMbHTEz8Saw8Bu8rnDcNuDS",
  "key4": "3HXQc1HUtNGVXEbq9FF2jYaJ5Ud4XUrBUgkL1zKrcaRfkzbVWLP5G5GaJBfe2PVixgBpbR1TzpyVjsBqVocZ3gHt",
  "key5": "4dEge9gr8RZPCLBE58tCEum9SCDamHdwdP1GTuEoA4HkaW3NwdLHoEmcu8g4xGCcXH7EKXTJkizCu7pvmBZtQLcf",
  "key6": "3S8fXBC5DMNuiTtefH7ppaRdGtbDqmPr4F3G4YhTQEc7rAWryYtpSKEKzsGUXVTTd5jtkLn3WB9qVE5xuJH69wdi",
  "key7": "5DHm491Hn3srmMGUQ2U9HTmDf2nHUVswZsDBE1JbooBqWQD7Qx5FaLbUq2kyzeP9YU6inLWoUNXzfTg2TdihhARb",
  "key8": "2aqBGmE7qnWvjQcsMa3LwrCt7pMiaqv72eS6HMuwmSNN4Vp1ziXtUqDKXksgQxcjdyvy2hJS3q1kpcu2da242jD7",
  "key9": "5LXExRe1Z4ob96t94zaVBdsG8AJV8HKy86pGpBisgo4cDzYr9SVQvN43tVmmsGAKy9CwsqqWP7iPU2Dfr8TKD76r",
  "key10": "2eUGXPDVgCMccxLiRKMWJCbqW7R7DKgJ17GjjkW3ScTDLbGPocRSp3koLqE6pxhPXBg6YekXECqq7iVbW2bpLBKz",
  "key11": "4rC8bmw7JwCN4o8NTpaZ8gw5FG3Et7ix3Wg1jdC6YVgWCMi3EsRuFDdqPDYnsLnrKrdKjyTMCxoqCTowtfqC75va",
  "key12": "57VxDDpsdZbrutq9c1pLFzu1bTi3XXds2JNCnvjZoGghHBikMiVX2oVMeS4wA4nymce9e9jNHL8NGGZLS8AYCCCf",
  "key13": "5VB898v5dr5fx8gRPLHdyEpfhrg12g8Jo2ByUhU7QAsvg8Z3tkGU1tfJdPuMHNRRwd5SYYwjEL4BGNMw6HRaL9yZ",
  "key14": "5G1Ebrr8VF5HXLAy7PHSFqogdr841Uz1qt3NhuJeaJ39BQA3KddSTqHWQbU7SuLkqCVAhguGCqvkGmzhAz8Zq1DT",
  "key15": "31TJVxLATMokDdVhCrxaaubZBPas8HvPVPUWqUcKgyztdyo9iCzFLZJKy5JbDa4roWENrvMcQg1jm4zkkqX5hX3u",
  "key16": "9Rq5TfapBGpEhLPWJrU7nTGjdzfZ8PAiGoTFoezvofsXZUmB8H451wTrKL3aPEaDM4xBFwRudPfE4uwX5dbwb48",
  "key17": "3AQN4qP4kpZU3MRsH645Np2DMnBaLo8WqY4kX2maDYwwZQave2qUpk7x7uRRL4ysqGYoR9deP6qPsSr4PQJn3rhW",
  "key18": "4Qjy1A9GLi4Bv5xCrLaoxPGJCnebwJtRJwar2voHeAMXGh9LC3Hwf4uTBKSttgaEkdUkT88gWWMZvV7DGzTjWVTU",
  "key19": "3GZFMi8UQKr4KjWvXUsrCp4uNxK4YvAsPQ7akfqCtdxFRL7ua5pZw63doZiE9bjGzqgYP6BseuDS7K4fR9PXmaZA",
  "key20": "2sjWYusp6afgvFzek89e3LCHCpn3uFGNWjDjwAoXs9k6JnUmDs5sq121wLeyqif51Wq6VMg162u1qEpQrYAKc5PM",
  "key21": "34cTB77Qw6AnKuwbZN3ojYDL5optzLZVavcHPLRDVxjgg3Wh9DYzFTZVCxHqwdnLdT3PTbn74k3BoTmj1rxyiqbS",
  "key22": "5J3kVoj6f7QNbsYn9oZXvBdEWwL1tyfnz1tBDhMJdB1WpJ5VJttpWEkihsxXDMTB438Yd5LzohLqHWFhSWGpFq9H",
  "key23": "3t1m132qGMxyfeiWM14uHD6ctVBwCERs7HyiCaQ8eAzoPmvAm18m9NMYzrCMDXLD3x6sDjW4HmigQemitWwyTBpJ",
  "key24": "4QEiy2thnKVS1EQyENG7FpAKbQVKLeQnyKMs3g232M78zxKMVYthTvBaRD8485HXL56qNX7CKauEc9mb6jL7agyJ",
  "key25": "2k679YhPhH7kKwHoBqiYSLWbYcp7L4WzYCSLCFnnHKXrEcgL122xypegRC9b4X68Hf4zerA1dNudxAfUJQbB5mEn",
  "key26": "5yqWqa63N1jWXF891RwWBB1JUhxWvK389AmSPt9T1uF6wfTepkyzzeobogxVhmadbfkQge22zbKzHhJZiBJF9Stj",
  "key27": "2qnEaxumLXzBCyxbQeUUzjxNTdaqGpwerEujkePWc3rQXMZoJsQbsZXjmsMZ83xcuA2Naeg9PMSe1dF32Ga6Ya6i",
  "key28": "2j9pT2GJmRKpuou5gwHQuHXCuckYoJwoSXGANyWjNJbJGH9Lc3k8ZGQR9EAwuSyRKcvAHfDMCUWju6ptZRgQGWPq",
  "key29": "F3FfAYDAAabdgMKX14rY98zqPhvXXPFR5Eracd4MCGFv6xb4wRAo4qGU4pGuoszXi2cjwAD7BenXJkTXuTyE1Gs"
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
