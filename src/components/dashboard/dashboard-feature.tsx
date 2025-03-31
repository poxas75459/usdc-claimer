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
    "3bpKCuyyNCURKdBgMHMEiKcBM7me7qLcxwVGFCd7B5W6jVSSGTJEt8zKdSD5sG1ZiseGwRVHbUVnqmp5aF6Fnf2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKeAPHQExvjMsTYKQRUyqWpMuHDiUx4oUUi9jnGE7upqmPd4ngJtrrGEjJCCu2HAc4ygLFvZmtpRMVShgbGaLSc",
  "key1": "UJPuhLsnhhzkr8L3y4jiWK5Ns68QnbuM56Rqp9SCLADUCd9ufefLHGARxJKnkntrmXiCszQaicYuNXm7bDgXRpa",
  "key2": "5zLjgezFRPqHKL1DkZuQdd1qS5DkFuNakvivmBeYf1GpuhXb7q3PbjjmhZGrqBWWkkAWECFxrMS6S6HhJ3QDuULQ",
  "key3": "2gvPCjYjevN4wL8gsHJKTTsUa42YKU6AmLoiS2z1syy5LdSGJLU761DtvR6RkuPUbBngdpSrQXSWQQDu9k6G5pFa",
  "key4": "2kSDGVqfBKZ57XNVZqM45uZV89YsWQK8BqUQSLfPLFPTTubSH8wY6KQT9649tVzMEebkvKR9sDptQzfmAEmkVqo5",
  "key5": "gmDhpbK7bFvxZbbt5DQ6DGnuTjGnbWCf9UMs31CWEDr3ehPm9vUUQSddgUXf9ktTDa2XoqjRdsq9EjKoSUyRTt3",
  "key6": "2iLyFPh6B9dkFz3DfmvEJVtjaL1oj8Aoe3nvMCUnYYM8GTmZB1GQdgM1u8wmGX8HPwjxCF3KSYRh3i5hbc1F5YW2",
  "key7": "2jQYnzKESpru728GU8MZqfCbdPGDEFj1PSiWym1kPHoQBhAb8n55nCpW9gzBHZwqdeMLzbwW35at2K6FAB3NNPsv",
  "key8": "4QFjDfGAR7vv12nDwFVBPevvDWNiUAx1u6EdWDyfvVVUTNLiHhV1UEDFBkg7thKBGE9KX2dhjNzXEkD5zwUQTh4T",
  "key9": "36RVPWTgZ1NGuciAhpqjQsbFZrz7ar6YGUU8YZ7KLhSezL6AX7CAEXBmBtwAEq2zG686FYot2m75zXp8i1W2HP4a",
  "key10": "35MYhFL83J1UqpgX7u8zjg3h7RZBmDHJex393YJr8zjyqpAN1g4v4q4w5jbMvJTJas37jgdma4QSABgNhVy12U37",
  "key11": "2nEyVJBbCq6n7YZMuFm6iP5K6XnoqHd7BFpn26jQDrqCZAEnhwGsAP6GtCAKDRCsKkBBhvNfK2CMBTJR4itjW8p2",
  "key12": "2gAFtYYZH495wE5VHtEf1ousCAEfoULhqmzUqoJVabvAyHyhgfHYY7Ljw9Ee9ojUs7bddkLTrKhs5iJwb2XGYtAY",
  "key13": "3AWv2LPFtXAANgARPnPnud2CJctsf5bpF5SG66xUvfJHtFugPq4QqBiwBfMN7xUBq1y3Su624ER8Z2CpKakdnscc",
  "key14": "3gstbQde1tnJr7uxai15q1MbkQDSZBAq1TdJ3TtcjUEUryG1yM3iHwx2Q77h87beqyztVEmec1RfZKvoAnJSAzB7",
  "key15": "2aVrfdqJkRLMwjUcb2HSewnwT2SSDdm7FPjr3PMTG6mNVnAKNt6mSZWuhVqGho7SSeSst54Ghu2muzfcG3bG6F22",
  "key16": "4dQkpswKAWpo2EFmgUu7mnmZJoVQqxhwQqACJhfRDtt4ebAVu724wTXHvsYEdbe1syDj52hoga7VG8Yauw5kTUfU",
  "key17": "4xipbcppLu7P4VXaw32avv994paVqqvLhHQ3bmuyBfpb2rkP1GdG7pjNG1DFcHyynvxLDXrUBaCx5XuPqovkd8Gx",
  "key18": "5GZLzhtx1kVyRgSs9dJBM7Px2XuXdJTe3NASYSbmxRqJgy2s7QUBdr8zLxftBLqBeEMAit9i8CbNzHfYyKePEaLx",
  "key19": "5fUadtby6DEDSswTbXH6rfcWi92RiDg3Ve7ZqxxYgLDjwRRyGq43QheFph1UBD19foxmQmvixJgztUf4UgDC1f4d",
  "key20": "37yBGQoWpeoxSi59qBGB7QamGJq44cZWsAkuyVLgbZY74XeKhA1HwrNx1ELnmdGWQQnRruiNnF68cddHMaenJvdr",
  "key21": "5fhjKaVvsBx5csPUbJTWyiNQ9oWMknbgJafRKpApGz5D8Jxr3TkHTyQSH18SWDCywT9zaooamhfLNvB7NmUWsL9M",
  "key22": "2ER3C48S9yuqiKEEWzTF5iQ2mrT2fpmieafdqA57tXMyLhKHDY8zPYSeVEWyCBg3KKasY2DVuKDpZnWfStitSycZ",
  "key23": "5oTs3mo8Tk3BYcdLyXXnqjK89xXgtEaHhCmCpCA7uUW1x9vP2iDkNZzue4fV3D3Y6gLQsr5N9Rvd2mp4NGb4y14J",
  "key24": "4fkeeEFXeLQ621MqyeU3ProzMjDzkaqvSPx24V8d3WHizomQCpVeh4YNyM2X1d7D3YfSF2mhvf2wib1oFWQeMavK",
  "key25": "2NvvUYj45biPfxnZMsBhFuQU1NrPgwZGpHpQqDPyCZRucgu2zQYScz453EP2w5Cjsu7dqtX2o3XB6StZ7Fp4wY4s",
  "key26": "h71oqWiaLAZ6u669eTLm2KyCqmDdXd9VgFxeHZA5tTBZkqg9FwCmHtFg47NoAF3Li4oeiEfciSdpJ2drjfCZnYm",
  "key27": "41n5KJi3s9U4UTmvh9HppqekGWaE8Rf9d2pdRQ8nntpGb8ZP4BYxERp18LeVoA3wQfjDy8CPx2bPde1UJck1rP79",
  "key28": "rHbMHewW6GcrkBKtZGN6o5PANMph5MShN75jdWrnnZ5X4swudX1KuK5J9Yhsq6Uu9zUcAUzeqW4Eu6KJkBLoK7o",
  "key29": "479iEMCJN5Sn7Z1MmSnTdVLuW85fgyM4cTnmN4JfgFqo5ymppmmzNZNxZMfS53w2MusTdiEi2FVehhbj5WwhfSAM",
  "key30": "5KA55qD8yEbKeyYmLtPAM5oGWiAQUTYvFSmk4wPPDg5gR2JKyNRMtdqminiaiuzeWYLsMbyU9cDzLxtH1CBAnErG",
  "key31": "4axykU8sek4vQPbk4C1dW6Gq76pFcttYtBwQNteMK5ieUEu5z9AZKRgEExbyz7KZa1YNm1Py9oWwPSZvN8EdCLQV",
  "key32": "4zFYMKt9pj9U3ikveuj2VGpZ8p7XQp77FTPbaXmzkCQt2de4YPR6rMSVXzscnGbxgxUkR7kUQMdwwnTYwKsjVF9w",
  "key33": "Tdt6UQbhjNpLubprHSqqudL6wfGb4AavKmjB4URSCkk6mXNaQXpGSStCBYnuEiQ2aJmgFVv7LUbwT8iDX1y1xiH",
  "key34": "gvm6mchwEUdD4cwiGem1gTFmApV1pn6mfNybnV8xb7dnt2cA754mS1ajh22hMbZLwPfbXSQGaWhCWcUStc5J7hx",
  "key35": "2vt23ErXqVTmkc6sbNDbmEi5spPwmhFLh7PggmrzSC86aUYMre6mmipDVRuvU8r11G5gvi89eELPc1dSWxSebvXG",
  "key36": "4DBBqnUbgXySzeyKPksEzhR8gxW7WP74fWq8WP6YUr9M6ZZZxovtFJdwZpDmxcw7o7eMqDkp4UnfeEtELoi8KERX",
  "key37": "36k4cpFc4tgEscyQcEjRT4mR6SUhzoWY4rKmz7MSa5JzSafj8E9zXguyiUCX9rpjkptfoU7QDhXx6jQzq7jmqKxq",
  "key38": "3qAPPBzS42QYrxFCnxRv62vZL5uYRdHVvRmd2SWGMFrv5ocLBNphKi7ELHKtkR16Rdx4jQdd8UiNJ9shodMoB6p4",
  "key39": "5biinyKQtWNr98s9XsytMc5UVHL2VZLehVfsXRutFyC7Wa7wtM9ciPAG756hbHwjz4Bb3aX9JakMPmee6VNynFah",
  "key40": "5atQnjSKaGC744FcKXkQuM85aJCvuBwHTvivW647uTdcsmFSfkVqBYPmQXfG6WnR9xgf24q4d2R7pHCo4NdBer6K"
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
