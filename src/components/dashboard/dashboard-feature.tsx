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
    "5W8DkSu8Amwds8uwhpiN9wEqPy92euo26xs7DHv29fYxwsRMRHgg3ZTdgLBsPJtrdTGVBSzbw8ArdtgXKgUJiPzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrU5WfQZ119jMeQeZKQqTEKNUks9MBhqqcPkyjeEQgDRZBgcpjDjYV8rrHjwkjErK6JPRGUffp4y6tLf12sy7xe",
  "key1": "5bAiX6sW8JdtCndyeC9Q56QKe9XDfC1boPYjGzFeRQUCRfxhqgvq4jhBEMU2Bu3yjGhG7RXc7ZsUDPYPLeghc4ux",
  "key2": "29zzBVZL8V1ggMisvcX7RakjaiwXBDPCqS53ftQiuVHJhiEdavhrsjCaMn65jzKBVTNHN4ruKNXnWZ6GYVfGfU9A",
  "key3": "59hSRopfKTgSzPPP7rYtnENqfDgbXzKVVy5Jfd2StdshMRBeWBGmnWgbm1ba7wynVDHEcqtaPkHvwwPDUCqSpjuS",
  "key4": "38sCwQMTnAJQxqAzLf753pe3wG1CpottfcjVWvJKyuPUa41qqqq2on9DVaVxPFY1KWyuasJnSR41VJD4Y4MWJ8Pi",
  "key5": "MAeGiKuvJYGKYAW3gPhdz5di24wRXeF9T7DL67BnKqxqiLX9JspLAqVMZBgZBDX7Mk8e4NuumBuNdVJm4iRwFrv",
  "key6": "66CSQZZGoR1pLUKVv4Bdfr5ywiZ8YutVWUvpwbz3qGEgW5UqTT6sU1E7rYSUZiTJ7ZaipzvXTXuoQaJqDmfNJSPt",
  "key7": "4eiu2UEye9fhChRxeTwQUytAj8G2QxnGUcwuBVzwoEZwvWE35hzkGE9tn1EG1EEPmeqs5Vhg5wnyyKWtfbGX6Z1T",
  "key8": "5J1g5NiZbth4WjmSPTFEAyuxT3JdwKHK94RCvM7hkZzHgnQPgq7RKHBPSjEWdDUCFs26vUp3ggzR2drDTsXC6ieK",
  "key9": "2ddmXtXtbjTTmr7bajzG4iuHgk1QKpp8mmAVmTeE4WZpWCJVH29CrmrKkqSySo2frk1d5CfhWVHWgVcdDf8dA28d",
  "key10": "4aa7bD8ziEaFdFFUa2muJrtyH5jqFP9RJsVECiaNMDbNwDRE4dFc8tu18MBZBbNqPAUkrve1AimUttLEgZMSJ7Hy",
  "key11": "2sfbH2btbEotxMSPHD9zLfHWGKEjpjRt4CXvQZDCG5hXboWzthR2d2HzbvhJNPY3q5CZL8Tq4ZZfa9evQgJhvW8H",
  "key12": "2WRNxi43Gb2Mw3WYfpLFjVbaHcEpHuMuCiBc8inJFxoiwn775HZDDaNjLCATyoyz4U4rNH1x6BCxEyjsPrTCxZoL",
  "key13": "5rCLG9RhBaTPpDsSwwkGfQrQKYNLhEVt7pfXDMXub5FCSbhbHgXir5Ge9BSvZSosjgZUeJxABJZnotiD6STwQehZ",
  "key14": "fTWG2cVhuHTQeKEjMYwEfqnaYjbpvLAkcEfCjq3Ns1bpNNaQ4MtNjnULxbQriff1nzoBZCBvqFRunFne95Yjrf8",
  "key15": "4jEYFeDVAoYkwmiKqRArashEsLPwEdNBkF48otPFYLgHkrEWzH1rZrsUBmtCUD3AtT2P2G4BAR1msEuf3Jg84y4e",
  "key16": "5UPeUQxUfBcGnpSmqXdAfXVt6AHHCLobWEVPUxvuCw7xE3EL3mR9hPjbGDiJmxMqnRMsshtpqaizNwGDQ6s4z6TJ",
  "key17": "4Acdevyz4xtuQF4MfwsoBoCUVheG7hJoFijXYyPjTEvB8tkCDYVYGqWZ9yrwMKFRndHY9fa4p3sR1igonTm1HHzu",
  "key18": "2vVJ1k6hbr5vbg6jtcEb7iY6dR9UVXLiMvpFrJPfHXs328mJfPGmkTusY6WUwrY33ZwnUJe8ZrEsoMTagvsB5tax",
  "key19": "4Yf9toyPN9dekvarPH5Tsp34968iSXouLjirRdgfevKFvWZ3fUo8aggzWCgqMdTDH4WF91PXdMLYpGhbJevj9V7G",
  "key20": "Cqwy6Ya4oqm1bgPYtZk1yUuLE7iMmhUfdLtJSWufkAxefcggnrCM7hcYLadotXiRDxF4jNDWeJp3qpMFPwknQKP",
  "key21": "3HkG8zK4S3v3Bvkwi1sqWZkWAJdqYC1ihbTQebB1QWSKP7mnYy3u7zogNd23JNxhdkWTP7S5acE4dxNWvC4ZTerR",
  "key22": "2mqPEz5V3c3jiZRKVeMm3NQFuVc56bJzZS8WGZdr4QED2SJetBVFhLQfEyv3CwRJXvaJU3s3kuCWUpQoqXaV2w3p",
  "key23": "2QN3vcRdpfT4Me8FwRUmgYGfUECwNLEYgvQEUpy9R1nhvngQa8htcRBHNy5dBRER6AQQyJfzBYckhg8sBoHrDEt5",
  "key24": "vWXR23Dq1trcT4nF1xpDcmTTPg25zyANqAkVrR3YyxxfuB2rt5kw1eXk85z4Xgv1v1NPj23o6EX9Qg6aXuStW9L",
  "key25": "3Jcum9izDQJG94jxYCCP4HpaJjtoguqYpnUwzxtWUKd6c2Xc4mVNHve7Wn95dXxgNBXmQEgC1QWZLg6tGCWF1ibm",
  "key26": "axRLRomaKFjfQizsDJXTxWaya55aSE1uFzKYV6LNdnzyyBBvVxuYi2TxdzZada87raiQetMymZGK1dWBvXWydXx"
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
