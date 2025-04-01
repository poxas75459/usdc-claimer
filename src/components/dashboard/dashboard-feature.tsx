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
    "2ghZaqxoX7bad8HpWKRpJ69DEmSbJ3T35jpsVSvtB4E2YhXeS2n2Sv5RsgYJBLWWnn5vAGZYYTFxkvC8HytoxsZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qfifCAaDB62JQUzACRjNwJWxA7yAAavHCPvWiDCcHJPYRsr9JEjmJpH2v1wCZDQpStJnoweVz1Z2NX8oV3KfmB4",
  "key1": "25ANFJEK6bAFKgQJNLDg2FWc4SezB3Xp7Cmb3PDEb6oQCtHgmpWVzsE6FPxsYgfmXNmj58s1peBWSfvuVjRToBDT",
  "key2": "tKVDoAQWWy9mawnxaGyBbKa33YUK5wZ66M1TGeD8kQSMpjGLaijoSahiuk5RmJL59diLAWVtf2WQi9iPFL3V7U1",
  "key3": "X626udV6bCHs8Nv2LyBcVKtG25S2hBrDYSNHTsdWYeZRMcio3unBm9L5AzzyXGres9qCRcdAvusDhF3fFDh3z9B",
  "key4": "SN2x2gGGWULB5uSu8tdbdQgceh2AfBWEhmuy7MLbQcfUC8sPokRChKKDChqa4pZn8jRdHRsyQ3sXGX4UTjDQA1f",
  "key5": "2TCREniRdn9g9U5MZ4V6jFi9eW5oQFreVvxdqVTYVq3h5MwGWcYSiWFVZTH2733vG9WQVMBrYToAqXqdy4HZKYsE",
  "key6": "32xBxjRFhBpTAFwEgwbm6GZmzTP9Mqv3CenVFRdfnE5HC78PxPdKjuPu4qWP9FiM99yXrTQpMwEdckV7fNj7iiRR",
  "key7": "5s4y13Fag12GEZt5Me3qofTHxEjdmwG1ZDFpjR5EQdcAijXE8dQxvguZjtfrFZ4okxu38ApmC4v8ydtWnfXjEKth",
  "key8": "2Wcjy5c4aZzcQFmEKeoTHHiBo8QHDMBvcPsmGuhTkJcevqrMWCJPgvfPTwf8NqbnxuAPm3eMyHtxvYnNowxz3dZ",
  "key9": "4St3WNdoqpDxyH3dUTMB8bdJRJRFG7Xh8tP3LFfsBq7j9oppKa9wxJfUGRP5vonDvHPpB3REjZcpYR88LrUcCAEr",
  "key10": "R229A4oLXjfFZC7Ffq6vwsE93N7UTEYdBJ4UUSups315wJreShXy8U4nVfXMZ885LFMZVxsG78BuBa4QubKMqyL",
  "key11": "3nwhGmswBWZKuQsBc2DZFmPjAeTvFWpvZVsHcCUtHq6RGPWq55KRYJficYLudTQgHiCfXG2gQvMNMWHECG14T8C2",
  "key12": "4QZS3ZSccMoEJkhctKWaTWuLkUZfL9byDytktp5dfismfRyq3LJF65QQXM6zhjxsqrG3EPFjjkWp4hbbcRSf4ZGt",
  "key13": "2GjjADQdvruwcEJ1kQwG88ZH3QESUHMrXrqMj6YivpFqCqwheBp3xJJ37kS74W53Np1vcJPEkLZWpD5mgHo997ZV",
  "key14": "21HCQ9P44qtr2GS7k1BPE7gGvj1Yc16GZNoGBKuEKUTNwfG2DEWTxU6cMfscmmQwhKDfwUcJR37w7qWPzo7TwaGt",
  "key15": "2TqSwWhLLdbgaVpHb8WP7aM8byTs6Yhx5Tf2vt6YuKenWay6SB5AGL22LamxRAQNqjnYzrPVoex3WPjAHbNEHRYy",
  "key16": "5WsE4qHnniRhEcN2CCJS1WDBHFvqivt8N4d9q3LUpA2CQQQbSiEzJsST5A9Y3MSZHnVeRm93p8DLRniYEGnvHsK9",
  "key17": "2bbKG8sUh69Ape8uejqj5WQzsngGLCiQUvQr1WUBKPurwDLsZKWUhfAFpBUQYkGhwovPUWjBSFabEghRcCyMwgY1",
  "key18": "4YZMVWhf1MSf7jAkZyffrSyW9Pqhohi73RAZAWiNAMTSbKBfesfzdPTvUNydcgQq39MuxyQ4oJAA5rWnLqxLSdty",
  "key19": "6eEoCh5p3o1Lf3Q6H7682CMg9JoYxyJWq5wwtVCDtT5yAiKJztiWc8wteNemDT7TbAWLvPkWjnJp4wQqtZHbfVq",
  "key20": "4J5ZbwUbdkTWLrv98sXpzoMnsQu3fAAUCzxDkjGAXxv1dTVerHs8UiJoottKeYsVMpAokMn8Rj94oz61rPU51xvT",
  "key21": "3hXLNMCkPYAqH8UuCQj2uX2C8sNXunynTXRhtbgmjXt4spUGePQD3H9tpD6uDzs9biu9qnY1YZCYesz7dweMVch2",
  "key22": "2b8TS5MfEAYfsbrN5LZV96qSppFAfW3ZQc3gTkjt1WSjeNWvZScVcAJaAQYmzPGXapoJQ3Dso2tA4bSWpHEtX5Jx",
  "key23": "5XgWUWrqMapX7CY16wgrE5uqo7mUrx8zGjARfd5Wze4DmqDUnrUyqLwpN75kTRoHAeRxSxUSwRRPAFsp5VY6FWBB",
  "key24": "2qvE4bZMKfhkGBN9Rr31Dd7p3WoYcuTzpjGwJ7X1ptkb6GP4p9qPo5DFx8xB27VyE4rvZhFc4D9f8Dab2MBEdnmH",
  "key25": "knaoHYNCHPyGzTpJZahi4C9jX1Bmef1RZ9vYKxx8fSBFWfNr8S2CphoBuW83oXrujf5G2TwsUqAyxyq4L78du9q",
  "key26": "267n4JqCQDYc711JETJy7SNcSVGcwSrFjTy5divKjVKzrSNqg89tyAXnLRcMtyiAhE6TXLLRDojEzfwQ3M12iLyD",
  "key27": "2ovo7rJHqLLTr3pACvcfH3ViVko2AZZnVm4Nc4Kpi8Y93Bv9M2ZU1cHyF9iLmr5CskpdeRiYe1D11HAwAFCUoKZy",
  "key28": "5xjg52rqmQ8oTw1J7kLqk3qvDaArxvmrbBco6sMkjigZzEqNeUJccgLykRqwnnjvtqnomqnWhgt8wLP3ErxqMBoG"
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
