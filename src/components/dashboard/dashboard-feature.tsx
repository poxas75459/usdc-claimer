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
    "4AJ1ZMudf4DCW9eyDdaWqcQ1pSHWg87HZf2XSGCsMWfWJkhpi4eMi4Q3ALmwdATybdiVJEbNgVVnKdP5qmzvzmJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5us5qqYhFG79cs6QDBppch2mmBdE2TtahRRbmztrzpyCHZnPDJngpcjh74NQCnErYAjfP5FkdtKhGuQgaX6fwkGY",
  "key1": "2ikoM8Ssq8TzsLe1pL2itjroV4mZT3hTXsmAxUvhKn4oeYthSCpg8L9PPssGeU1t21rJcZod6hU1cPjkwvwYTT6B",
  "key2": "5Gf6tHuEgs66TXWeyHJQc5bT2sbF8bRyqmZbaMs615tSkWxwuvqyh6KdPEDsRKpiqxBrnDDjamGz8DPfmwjzBZDG",
  "key3": "3AU51CAEGGwz373dpDMLydmHRH12tiKYHvG9g2AheZQkwQQDASPBhBt53pNkojrTT5dgGk6vdozgsDsDn7vBkLr5",
  "key4": "2w59gYnfdriWc6MA4YTDHnSYL12LgNEjd8FmbNCVcpKBbRDxpzQ4YzKAbhY2tn9wbzSA8aePAxmC4fuX6NK8XYqm",
  "key5": "2PYyGZTWrF6a59F9GpAoHwSo48CHNoeoBgG3zTF9hMBLKyxvbjkn7ZzafnqvJzS71XYwL7Agj7K7pztLovV6gAmm",
  "key6": "jK2bGWsgxQ5RrDU135LLzYni3NdaGAEucT86eCoxonvUHF6JcsqxPPeQ7gAS3rSs4iJspojxvck5CjvxiRhwD91",
  "key7": "5j1nJSD6a7nkMFcuRm3EUjobpMEu4WNMscuL4aqbZaTPA26Hc51MoSuqzzuNRhdGMSVzEQi8icSSFPqH5HVrjqSa",
  "key8": "4teyvHFh9iBeTA8nqNNTEpMmzqUhvFY77hDKa2TMVAEmxe5sEbzfyNVgzYJAvQfCuu19C9EcxduPnd9GFngzv2ev",
  "key9": "2WLsfCGMWBDLYZb98yyr2eYbRer4kqYPhkuRHv5tULDDPm6YyRjquqCpQrH6BF8r9W9wvHnL6qT1TFudXzMhh1D5",
  "key10": "2jDmkg7BZEWkMmoT7puZEm4vq5mQbxoKXtDbLCjJnMC3G5sXxAVDW7RSU8GmP17vRsPH7DTUCoc7xoGbuxTHv2pG",
  "key11": "grJ7Wfns8qpPqidiFWMPYZ9DTniFqCWJF41wHapBaPvR6EYHtpEoAoCWG6pRAbfxaRdgY15HPkp7kaL8DFF2W2J",
  "key12": "52yQrUVdkdAfWU3LkkCF67RpURTjGxzBHmx9qFU7pN6V14pz3486U3NjPFviiiEqAnBfA3pxGb8br1VUtewrVMjY",
  "key13": "5c9x6ciaoKXSu4xNviPtVX8YK4TCwQRMvNNR7NxfqHtL6XcMqX7EpjKnXh3Z2gdQ2uTGB44eTTdpkunW9Ap1mN1K",
  "key14": "2BjkVvXXhtD8km1CkLyvjMfXMtciqVMhUg8na4K5RK49n8LyEitorA1WsvQuhqmpAdi8JJDBAwfijyewKBp94n4Q",
  "key15": "5zZ4Gs66V2tu7GKLGdhcxN9FqWXEhCG6ggF3pbPhkyzKeLfBSErfPzT3bMyLVCXrZsGVW7AnbLSwq1TGuaPSqwYj",
  "key16": "oYQmRsyPNZX7WcYYCBpSuQkK9YKNHyNHZiNhr3V1gM1Ku71Qfne1bmZihsmQMx3NAdNcX5wHNcA2WLbm6uuZMSE",
  "key17": "5ij1dkyTFkhdSbjoL1vBiHcy2KieTF8H3iba7R7UpKoL7C5NDS71LddGJJ2UG7mkzyxcGPKcNSXE5ZKGMBaXy8V3",
  "key18": "4uk8QwUo7W5Rz7fmqMuUYnXPP1MvzbSL87G3hrRXMuiKhgSFk8JDjZCjwjfy5b61DF2K3Ndr2boYKzZq256pWKpT",
  "key19": "hAFDhN5nYdHieR7SXoSkPLhf1ovzjhi1WNZ923z42VUJxSBfvdvqJSAL59jDZqTzNW6Mgvhx7wf28QNNbf7UJ2n",
  "key20": "2y1QM1aWXTh5x4HnBhkVTZCzJZwqCnTZh5wcwtfyYasNoUqWri8sEFJtPu1aXhvr53bFeZKFAJHM2WaUSV61H2Py",
  "key21": "3B91EQtMNbsex6L4ZxrwfBDjC2btdHB7P1zCDUBgQmdEzk17RRpd4tmCMEdqZxUTKhD5R783S7T6JzGvdqScs83i",
  "key22": "3dUWDKrJEmJixKpYuQPvHiMjoVfPc6whvhnUvo67fLgVasP21XRkc1eTYhHJ963g38t3hTD5ho2cp9S6Z8TwS8gZ",
  "key23": "35RjZSsGZLqhTgBzBpW6KmKNijL67wbHgmPskhxHcTzT1EkEdzKGXXc2x7zNW7pc8pLbbyhsbKyaAy9U5SkeYKSx",
  "key24": "WzhvbVPo6sM7FUFSDCiZgFPRNPn1YPW9UwTnGGMYX8qsR9TqQcNj3s6kKhh8nedmwwqc67PCFSsprUizsN6sd3v",
  "key25": "bkptv7xoGZUWpAYdSBJuJxyKrpXPszWFf9fV5AMiQW9psC5A1WexRRE4YU1z231wHobWAZvDqWuoEsEnbPVReUJ",
  "key26": "2juVciqa9oBJhr5hA6Xyk9dXzR1G7y1Hv513M2Y2GyV5cYrGGgMdDt6LKmXzoxPk44rQU3qRZcemF3nrXzHT9LY2",
  "key27": "2ZE3NUELkVaicrVc5xeGPfMxFFkf7wiEsfSKpv3oMZeiSiscXZPNZgyZ8gKsM2gkQEsVThTh1NtZvbKvJTEnDLgv",
  "key28": "5WQ8KNeSTNZ4zsiApDAi63GLDq8UqvL95q3hvExeEhrMicDXGskjN9rHE3oxiNhrMQMBU9s1DyzzZERYuTdSBcSR",
  "key29": "z65fjsJ8CXkmXtkq7BmwgBnfgAqSVSqAtAuQKZjpmbXafuQ48CBRLk6CcAR1FFYq4GjLxkU3UvX1xjk5cXdfojb",
  "key30": "Kp5wBUS1pvTbiFMewJwqb9YHx9LVpUa4VCfLXnpy8A26nv1QNL54GdND2oHifbAfZeNMhRkTk5ganCWaC3NX4cV",
  "key31": "4myrJRTCdR1kNhvdcDsujRxXV3tqg4B3sgZb1wHmH9HHAdekFnoZ16GoBp6D58T6WodUKii3hDk3HuLJYD9nJmS5"
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
