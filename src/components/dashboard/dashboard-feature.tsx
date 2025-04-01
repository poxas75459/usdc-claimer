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
    "2wvKUxB12Ka8FDbzMQwgPkTsEGxWvpB9hNXEbBPBNw4sojjAAzA81NjgaKTdCwHyyHdFacHYbLLmxJg2L5vPywQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWnv2E14dGLFLo4cPwS8ikyKVW63fn2zLFxUtVKpW5PLtwmcrA4joEN7MH7uacBaAHmFiFmTGyV6hcVET2MhBKL",
  "key1": "3xTwATMVzbm2mn97YnUZJRntWj7DweD6gnbiAgkKtoGL8PcC4zz8R2RoW9VbecwKGjSzcJRXz9LMcms4Qz4qRGf9",
  "key2": "5fuQsWsmGN631EAaVQLTD2G21AVNcyoy2LKG9Fq1G2CxCMQxiMDix6iHPge5aL9oLE45zfXdVkjh4dC8PFHdsBLz",
  "key3": "qRbt3CzDTojFUAamzTRCnWF59iJq27ur6cvjn678w3qv8rZc3zKa8akbqJRZCcJqAE2gs5PdhpHpwkAcmo6e5sM",
  "key4": "5vMT4YUYsSYHciuMmTH3PHD2NrsHLB1x9EjYsbj5sBXSUvg2KRTAeFpKPxYkq7sxuokAezKQMuq4Sg35As63v9bb",
  "key5": "5H27GPvJn3kHRYBfybadW57v8QHL3DdfDhjrT8REcJKvxHBCnS1LpAz5xuhAKpffwHi246Fq2ZGpGdDUhTCEtxFB",
  "key6": "2fRaoHA4DjDvY2LiMBar8aHrAxztDnuZoc7nZE5vo1mN23dwFwP1KDZqte8y7ugPvj1tF9ACfwhS3RuBGmfsc92s",
  "key7": "36cn4VdUoihiD6oRgjs6bsDW9zPwGWuChJ1taUkUB9bgxcaAKhERpYec34vLCkRBLB96spzNzMH8cnFHb2sype9F",
  "key8": "5VM4f1QtmSLnXh539LM3qjCLKDuy5UapdowtMNeCBJrWX71pATQRRz8XnxJP6zmyuEtZLEK8udUJoV5m9fpeHyH2",
  "key9": "626zjrt35y1JSRtEpkHZsp8FHwC8vQjRyasCBfroeq1oR34zsBUuyKXifLFq86jNjRepRoYsWNAAcnaBZ1JvqpRH",
  "key10": "53BFKxvENxYUahUnLs3PCK58hrmXR1ait1E96uKXi7wiS75U4hZyCCesAbZ3iNBMBHfWpcewAwjDd6DmyJ869B2u",
  "key11": "5q1AsXJmyy9DmNtZ3FJiRGEpb6C48MZYEhhwKKGW19LoeCsQ18d12tVSGTFSH2zqWSUVgr6oL2B8TrmBtYLRTa7b",
  "key12": "5cH9btZqcnCDeqsmQHXoxoELRmsAHCRfHfcxaWYUfXSoQQqw861R2i6od9ViUqYnFsr9w1NJiX9di7Q9YjmLNAUe",
  "key13": "3C1wsXYtvx9gJgKjTrVut3H24cW6JLvDeFu7Kz5pE1j9SH7z4e1jgCho4eKPsKp7NPXv9BTQE476XmXduTZqezDp",
  "key14": "2VyCs7TrXVGYt4sPMVNunKh5f1XF7q34Dtk6dx1W4g8QykcLHVR75YZrVrLzaPKapcSLny8Vn6cUGm7M5dDpziAN",
  "key15": "2UDsX6mrkw5mGNigwYGbHfcdJ5eyRUfS9tpgkzoYv33hybhB5vCy8DVK5C46vhd4imCPfecz6WPMAeCr54oywc9K",
  "key16": "38C8zSj73PPmFSL62vcx4Tt2GtjZ9iEaQaKaFqN3MSrejUUPC7rsKsxeYzXP8PxxBSncpHLjcPfp6hXimxe2nUS2",
  "key17": "3yEhNWqzySdnJrpsApdgSwMVv8Ew7iBrxp1Ts1BRPVRAX27sMfwZxTwqwABcYeEPV86SQBNeu8TpekYcWU6iuo68",
  "key18": "4Q336DD4kjG37CMAJrXtvcBPkVvwXGQZBY6ZVsdAxxw5SHxPRQeb8ifdKeixRJcjyCVh5y8h7FHjbEtpbJ5v5BMB",
  "key19": "67JGbwCdngBQWRLoWTBnezZNJk9Z71pr8zr6wGFz1ks4b4i35HGJ94hnMXVbJ11qNdFKSERzvfhxnUZ4hroVex1h",
  "key20": "5wfLX9S7gYv38NjCqHMziFQYQd7mCgL3Xr3CbtQMsTYRUo1y3U8CY5PEyrpbNanffk9pYXAZLkeWVFVmRW9BtbhM",
  "key21": "4iLToL82D2xFiL4qqkWh2qUqhUqZxsftheX7oMX6uy96pTfMTf9HtezS8TvY4siMS9FyTTVAgqdJfyaw5rhj5kXA",
  "key22": "4MZXbNdJ5G6qtVwkBkWDaWZSLD6f6N5ZqxpQrk2djnX1cwFqX7Asw1KgmFHtbrN7nKKWdziE9TeuBV3jhhd2d3CL",
  "key23": "yHc4X9R2FPkFLmcrvVVUeUf1yDitSmbzqtd4HbCMXv8kf9XzBBmh3NLiNG7gL1SgWEPyS5QNdeP5zFbG6Ui8TwK",
  "key24": "4AUTDvtBW88JdwSHPh1kyH4ZTS1y5YEXREEmBdzz65HxgUbtdiVLEvQu5pTnMW8pFqgcRn8Yv77cso4dwJsSnHHu",
  "key25": "2pNcdqUY7QZ1TXJrppHyTnB2fzJSJLP3VoREnyx9rZRxjPD1BdBdCojvWEKTfSduW6TDhTEF8azJCdLaHCCCTFCx",
  "key26": "WfsFfyGVhSDUkWLtJkUfAD4ek7P7MUAdF1ri1BASVGLB7ME7nKxvFJwHSgguBXrhkNTsHyb8974PjnCbhGqcKAV",
  "key27": "2R9UVtorcXeYbcvqUx2m5Yi6Tfc9qJk4MzfXoivYEY1XMozas1pfeFPYHDptCnYCVLNCa7xAQ5cjjhf53mV22tuA",
  "key28": "xvEWnmU9hbba3Y6cxzh2raCjkRJ4A32nYk4jdTEEuKEpk2tzWybzzmQM7QuDi7iZM542gK53qDfsDXnENh8YeCz",
  "key29": "4LbXY4jDSKGMo5zE6tWkRcem3bEDFp9qVLekaYo2zYJEQ7BQfMTb4T7XY5ekjFU3rEbDaU2jFg2j2bjKAdx3Y1ZX"
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
