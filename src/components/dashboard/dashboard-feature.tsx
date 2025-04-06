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
    "7xcLhrYWrunGpKk8M1QV6cZtG6cidz6ukYigNJCpmMEpEQjKR6xp675JJVHWsWFYmVQTT1QsPNx4oXGaBigMxUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9hgLvRyu5mxLoH3aWoF66xoK2juNYFnzEYLAHJk9FZ8LWGMrHaD1BocJWjMRcShVeKAwQZDfkZzzEbLFKD6sdw",
  "key1": "4Z3ELY7MZBJPcPSYEHfddqvtSCjaovhVaCpZSMwDKiUULy8rRicZSLCwiuNH9mLxg6ZmEuEqpP9LBvKMrzDH86oT",
  "key2": "4pZBGarANTPoWnjCzEsAkv3fUFyBDDtneKdG3attdwXxDvuYQohDE9LB7imufcd4jrfV7M9wB7fSb47anCzFrdVv",
  "key3": "4TecPmRhTHfQeAG9cV3YQ5ZrdNBopTcyh1pP19NfwjtnyC9R5i9WJQaBfEJSQAN84tNRwHYzoAviDKCHGofVYUb8",
  "key4": "4B6Bzs4XkPiVtT3ZKQYTaYC2rxvpqrhbXmhmWgQ7kifyCSSsz33nyoSKi6ZTTM9ho9M8Y276UECyM9HH5TqPeFe3",
  "key5": "2hHobP3TvxiLP8143mupr5WH9JMrGwZWSnrocn7EdjccMPmucS1cdb7NbHnBJcQezYikNQjuRYHQXSviAM62MtLw",
  "key6": "4rqbgEWsHGBzo8CJGPtG4at2uxJvCSBMbTY8pd1Mu9Z9uRSASFUEit4TF5ZKhB3W9ZYn6NLtXwGa7frFScgTA7Kf",
  "key7": "3LG5vUWeXwG23vpYikCR9Wwk5kaQXpkHozK22ZKABs7wHhX4Q41Lkb9FaUu9TDUz1e6rVt9bP4bNxSZicEapp3Qs",
  "key8": "4DPmffA36DMEWkaPe7YHLMAye31yQQS97zWuoHSiXKbWNEvXkHjgnLssk5AssuGnUYeWHCPawgYUuBSg1ep3VPqg",
  "key9": "4ggkoNxmQHMV1zFh7jv4HGGdFoSaneF9SGqSgjEGvgSi13SHJfQoAUfjJ3o1iL3pbdDnfvKX4aZh67Lss2hxKq67",
  "key10": "3y4mwPECaGNSVrmTSP1EPmbta5s235R9jHKVABJuMs9UcdDWpErk6WHscorq6CSPYDKRrQggXFamyqEHGwEUwZub",
  "key11": "tYHkHzCrWgjSsGV2xN7GbW2thGLYwaY2Bv29fnnhDU64hRVvtyAQyrXDt7s2t98FLY6n2EU9bjfYPxjVD2oBLYF",
  "key12": "5pqW4GRQCSb2LWpgaMaVZunGXyMbmpvkzDmDQuSdas7vLD1DUcLiPRSmskKRLcoj2NyhCD2LaGQgYSMcfs7GmSou",
  "key13": "4WBZ9v2kMUBRq6EiWb7j1sUiBGSTw4bwaXpaeDxqjRfrfPdsqDHJdvgFt3o9p2AhVvZu2dQQxTdM9zdWzLqeaukB",
  "key14": "2jSCyyFK8HDQVmMLcZJQRDji1uNB4u4PTQ4PR1nV4Da8pVYNU1jr9kNiEmxtk4qwR2sXLTA7rvEw1pwZpkn3DAZg",
  "key15": "2xLBwpaW5KbctGLTpGQZWRohU8NZovX9dj2gXUZCGnyrvqjN3GUguqktf49HRyFhDPLApb878ZKfbust32zmFspz",
  "key16": "4F7fMVdwmufc6yzXSj7Qup4s7riPUkqGGgD6npa9KYDdbxFXk7iZshXqWHnKFRoarnUj4S8pvJfXLikseAVvtVUW",
  "key17": "9erwXDtfCacvmu1CP1nDrr4adYHR3S1Nt4DtaPAZgHWoHwp4h8wwzTc8LjjuuQTxtk4knp2zDogyJtD2h3vsFRx",
  "key18": "2UEgzQ4xjbf4FNTT3yCfP1YAMWtWDEzrYgX5JhnKWkxigF3uWhZhmbg1tZXYxpbrCvGo4niNsrSGBXFkDbiuw1aq",
  "key19": "2gMSniiuMi2Z51LNSBUFyQW5ivKfTe3Wz2v3UHeD6FABGDW6ddQCNkTa8y6vkuTprrKwqbjP4wz7zzkiRJwbY3sE",
  "key20": "2s8uQ7dShE4EdxRYHcV7m2bJtvNcWCnC38QvVYjwceAp9aeuxFwqHtiqiuvtyNqS8XRC9A9c8CQ8dXdzpr5NkYPE",
  "key21": "4joaR1BNXRqbEuWWPPDZKgQyhTPqc5SqojKoAek5YLsrUJSVRpgYpQZpAoSxw4eFgnkXZxU5EoEhbWuerAKPPDjs",
  "key22": "3K8LQ246tPjDtzkWkubJox6ycpagLe9a9U4u1AP2tKepFvJp2EuUfW4nejsmGsz8FCDEcYBpoxDQtPXM5bHkyvJy",
  "key23": "2H75zHukXTzafQ6GJE7mHSN4qUYB2QVcGRTJCJn69EpLYwE2gd5YxTyYmDbFEtS4ca14z4DBUkyo4V7mCzEuUssz",
  "key24": "3EBZgMRbN1qH8jXQFXRGdH5HrWAEQPMiFECXV3frtQS4sarffATc6kwQKRve3UzL4gYwyn4Ryw34U1xu19VjPLob",
  "key25": "4cYETZbFdB7fejvdhpcWPa62pasojD9u57k64uisuDduWd686PcBRhuYa6YvKoiH9V3mrWpHwBBMcx6K5ZfKuqva"
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
