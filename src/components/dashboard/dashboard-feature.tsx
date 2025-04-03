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
    "F12kQDKnajwKVX8U6zGxhoZz2WJdudn5Wx3rwE3SZqGP6WT6Hxi6qsEAsSNdX6S78nZbkzkk75VbJ4VbkpPJ726"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GsCL36N3HJAjS57dGJBPx3W3CebiVSiTW9bxEirepThPSVM4oVDGKzSgofxeeoiDgFx5dVsUuDg5uutWRCSpUf",
  "key1": "hTiuHMs6rVd8wZ77oJkxAFDDqsEe3W8yCBJgWXz7b6npzgWc5mZR8oHLv8EwVBAx3uy7cPhRSZw5rx9cF1TqQHc",
  "key2": "EtomgAWGB5XhvJxW6GSGDrpHeX9MfouwjQRicqt41pzcTUdJs5HjXi9R5S5HT4ErUaiPH9PMoKdqjAXCMDk9QUw",
  "key3": "iAwDYqPWyCr3xBLYkJNsKbu7YRYmi8HXkSSUNzRkH8xycYENSuGSU9uSm2SAh99WXKgmsu6j95M4CsPLANXyNNE",
  "key4": "9DPmrMd5py4W8L5pPEqufJZWNdVpdJzjkDq1s8yZZ6S8zhyCA3bD9fRiFJefZ8gctxWoz7SX8goYUiRe2VNzdpA",
  "key5": "2JamfWPSZhByhi6p33vNSy64jteeYZqPXVNKUTxjWQJcHFhMvX922CJ1cy83hw2GQvNrW846gngUcNTpo5R3Q6cC",
  "key6": "Rxw4a1xm5neixTxHBBvf5nTeKSVt9vDHkfVYtjQpiH7E69GXPrDxeWqMxPg8uFE837ByqsB5arb69vabGR91YDY",
  "key7": "kUe2XkTAPTTswASTe6yLD94nbGpfCFxJzxEWHbaCx3258BoD64oXCqqbzqGrQD9nio3ztoSzUEW6d6CT6ofYtPh",
  "key8": "2qCewFSuojz9zYnPQEAhkSHR5VU4ZgXAUEVamC6rRuxE6DMCu24i9gvQKpJ7zCPNBiVgYi6y8Hi1GYkP91o6Z28f",
  "key9": "5h2W8zTgeBvPqh2PZvEsjrvaaYw6aLcWBf1btDWt2Du9bxN74sc32BCRswdpgF9VrAAgrDQXnToB3WjE4prKCPSA",
  "key10": "2V2vo1NqeXq2GXKm9sxGLqMqiA3PXo9py9Qns7FBTbGuwynMgLfBymjMFDrJE2fPeHjY3rtYd39c6rHHa8k9P5jh",
  "key11": "29o69Kwdk1ermEeMvd4wCGRsMygfYRzRG9fevHrWNs3SwxkGtGFJcf8Lk6HxjXTkTQv2D91oze4u3NBvFcYnWPA8",
  "key12": "5J3eSVxCrJ6wuPYYhLu11XXW9D1hLNCLerNJyDv4wujmBHEjhLoToPuGHvkuMNX5K7SMexKJrHvoKnY5na3z2mbN",
  "key13": "5gF5kkhLxDjgUsdE5gQMw1e6h4vTLuXjsN9bzTbk4So4v5rvhbmqtdCAn896jWfSewkTonuKsKAWaWCZJvcE65A7",
  "key14": "4n6xkfKWn7WWu1tZsRtXpBQfVha3qaP513pjHM3SUH3r9T7MbL5jf6qeTu3t3C2X6tHdZ8Dtw5mn1GXPQgYDrCzS",
  "key15": "3RDUqgqqKXdUWVvDupMZc8PMTba77cJ3Zo8BvGGnYxdgL4MUpV6LDBpbHNDzw1G2oa6AtUqTmLiD23NZEKcd6xja",
  "key16": "3tQSrwz3WHD29m2sB6urpezVUkjpNenTpBo1zkpjoX5z3kMu5Vu6XSoWUPBzS2FwppBo6X5Ty2CmiXDS9y7kULjm",
  "key17": "4er1DbbAKqQY2DJDJ1qwY4MdVx48F5SiqWdxSpmX23yr3ECBjST7PjauWYsHmoazpd1UYQ8D67PDPGBVBC5fniCU",
  "key18": "38SVcb2mrNXyaVFv2HQtWjRnSoSmjuL4rHm5zrjYi57qWJ91PnVqGLYyFT6wZ7VL3xqTT1VNe5HytKGgbc6w5VAz",
  "key19": "4U5M1WgkRGASaU45qznX9gw7dEYkZaVMrQTAarMJt2fQprGk8rGtBf767YrMkNo1qczBHA2TsDVkKKrnC4Bn36cL",
  "key20": "28yEVboDu3xwqKtVAfVFg3WWWtY7WH6owLYMqVqYK4uYGdF8gTWJDhTpWEvwvrSR71aEffof7f3bqZJAFMsqSQaC",
  "key21": "pa2BWYkETmN5vd2ViJVBsFFEBEdao9WENh26M8DNo4wJndp4Enq3Vw859pW7s3jKjBERttzuPJagrxgh8ERZ28C",
  "key22": "3Mg8mXTCHFXyy13NaQTnERBkqSfqwetu9tpLrDHtn63cvaP6D5YUfDPXWPA9QtGYWjDf2H6cuL8ufs4QBruoUnE5",
  "key23": "3EM4TLcAQLbFCRswg8Xi8FmiXqpoHsHKAo5uNRm2vovx4PPWqRUswtG4XxKh8ZWaLWLTYfRaTf33FXX5SY9avAVH",
  "key24": "PCeonDLcVbU9PxCdZz7XJbXnLVhS2CMNC7xhMemBAJHtDemXPRLztq2qrPqn2a2Zv3owVV8x2LmYn4wCixEKec7",
  "key25": "5G43ecLinuQf56wLDPhSboFE1srRevJeEckogm7kdmKk9FhXYHbjE49917p4qMkJa4CWnLSqN2J2GbRvfT7jXxwN",
  "key26": "WSsTUhti4M6QoEFPfgMgudCbAoiznEqr4f7XJXdM1C2dg2nZCA9U6xQzTMbDgb74V9k22qEMBVrCyvxTvVxZ4rr",
  "key27": "bCxP8QfP72bGcwE5W4AyhJeXomsVkh74bME57f9FfajJn3QjBQcsmSWgNnhAK8PyZDWYUkFsKHycLzWBwJ6NQbL"
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
