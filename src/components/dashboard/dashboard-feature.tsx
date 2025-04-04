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
    "c76JVQ7RXRfGoBw1xgATVNxtmhZNb9RfUBkh876FdibX4vL99wEAru4hbQQCNuZoLhEtX1xoFsko9kVt4heUiBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RieNoh5Me6Fbx8ECNaL25CHK2EVAAN4btoc7tvhgm52wBdoAMLfS2phJxh2ANbYoiBviMWEwenVbpTdxkUfW9cS",
  "key1": "ngs3GkYsEwzo5AG2oLxcUN9qXkEeoioswwnPz1jdByYDEVkr2Jr81Wnx8tAH66VszvwgeX5xPXtdYDSNdxBGWVD",
  "key2": "4yms3ipxnqsyvFJWJhSa5zCNgCACM9R7TwzfkkW19Sb7k6RgVFdkaqsyanW5bxoarSPfyCbsLGySNBKCMMMNVnZB",
  "key3": "4Yczz2fN87S2unT676sbwe4JoG2Bz63v8ZTfQqJwhz3CKVUVk1sHkKyGCavBQgfz1evhQTpk7rbaYXPUD6RYJtqe",
  "key4": "4AwJwteyZAAFefdS38WTLPM7p9oUbqMEQu2eCxpqof2RrPgYiNxvwFUp3CLjyaRvmYRy2Njg7R6x4W2FKdLTa7ob",
  "key5": "47F2hmQhbr5efeDdvmBhLR2nFbZPSrJoSyb86MDayGD1EGDQiZcW3CyFd8AbveaVoPdw9CdKBcvSEATAjNa6hJcZ",
  "key6": "52woJrteKBJN4j8VahVH3TjGn6htzMnFNSBvZkWhmyNKo83RDKoHSNkVrxVBGVAQT44rNwGMA6LetZk5mxRhaJfV",
  "key7": "TqdmgG5kvhZtxLrkjdfPXVFp3xncse9McSMfgCptKgUTshHyxyHC8XqEVUXQfh18MeQq5Qwy68DCKkLQ5hGqviX",
  "key8": "4DpUWG7qAtGqgZNzp5Gr9nw5ynSB2hcYfsx8EgUdgFWBNELz2BNzGz6UWm8FYbBXEsDW248tkxBo263xy2xqy3Ci",
  "key9": "5N6pacCRbfpXWSWeSvDtATaWGkKdcMx23ah8GASCMVzL4FoHoTN5WcRLJ3KAzhWN7XyVYT7xU3H2GT9FQNz8H6yA",
  "key10": "4YGHNfXQ62Wq83pfkHpFMUfpEyvf4k4rwYBMQNNWY4zDH38fNDU2ApeoMARe2seUKTS48SUyv8caWgWYa1kJyXEa",
  "key11": "4TUKDr1xHcNyFLTrNAE4SyrRK53cDYFzrNS8ij6bQENSanhWCWBgVrp2Pj6EmTKD8phxq6DX1qjzYVvPq73V4emn",
  "key12": "f89wATB4qm818LzppYdhr7FJ4jgrU2CnzeDGn89MkX6ECmUhLHGXcfokWGFwVfQA4ouQa714vsuDiLwW8d8Fa1C",
  "key13": "5vrfMf9PoRLiRLPHx1zhUTC86d9LVbcxceZZuSDzEiMjd8fETketeCxckhmYrzBVfwirghonm31zo5Ug41XkvPMs",
  "key14": "3jQCgJs9kZ8uAoNJinK7exYb5iPnn7tFNmW7pXh7D6Gun7gwDKYCAkW2Je8TcX2mRNj66ap5rQAi5taowYHqupgk",
  "key15": "3SwjFBc6hPkwvC4vjrkF3xFrNRhKEVmPfdY1GfA8SzNfLvQbPmEkqWP34xC7GMQhcE7CnXyGLNn7d7XeCN23N6Kr",
  "key16": "4UELgJ5QZ6hrmoczbt3jcyXF1ufPWMpaztUezxRPX1Rn8rqhzDqFmiFFifozSSjNNDdvEzxG7ZzHWM4AHuAcYSPV",
  "key17": "5zN2cDXvwW4tKVFshaudccL6Aayi1YwwUimFKX976taZjm8eo9BV7wkM7Z6qfRpGpGoaJbAHFPbFh7uAADsTNM3K",
  "key18": "4c428s6EowFS2dkqwxf2Vo3SYhRLGHQmvxgKG43TQnSiA7sqEPsBAymxCQzQqZcx4N22mZhzro63Q2Y8BckVA29w",
  "key19": "4h5SBAeGJdKHv8X3c4KXcMkSk7quxCRe1m7N9tCPTvdzVndWmdBiz9AQnDJcfMPQPjAa3zoNP2sBmQKEiFv3RMjF",
  "key20": "5Gt6N5RW6rUmSyZqjmBQ7ZzAY4FSYXhjApWVaf9p7E89BGrG6Ejewz2bPHW8JSvm7kRjyMukExdwuxFSa6wWx6s1",
  "key21": "JSb68x2mCXWEht4evRZEA7saakGYErnX8dT6qhMK25i4g1zWhMKyTyX1tRiVCCrfinvBBePEJuxoGedFqFjqVmy",
  "key22": "racBV4v26B1DsqU9Cr5eogUKd7gdLbvhGriTfhTAvetPxH4NLLbG4xTbDuQCKiFqZYCHzZ9nePZ45zqtND74FgL",
  "key23": "3Je4yEqZcUUMNL9JaRCv2FF4UejRHyo3CLYhf8hSqwyxjfztDZDxHnxBhV3fW3WmNwpawj4LiAyDLNn6FpMARnMA",
  "key24": "66X6NHPGBDwoy9exqp2Nfz1EBDvYLQ2vrv4qbSmVPXftuL3PF7S6GD7eXbQQNiqSLuSKVHS94YBXxiAJTfg1GtdN"
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
