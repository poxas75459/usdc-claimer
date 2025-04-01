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
    "5FSUvWLyPjGxSFG2qcXcgfUMFDjDHvUm5asG9U79zxJyMCPyrs73yWwZVYiNAmSBTsMsvJVdBFDQ78mJoAYxDC9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NEfs5UyWNAycrrcvS2iWKGfZKoSiWffXnRULY8cFgWEZjm14nyyq7wTYXgbBhLJjN41bmxRYcTvpDiAskV1fTDL",
  "key1": "5Un1Mxd5kzYk37TD86gxM9TDK4Ys6MrNuASfLu3smBPNK1ztYtXT3QXX8nvtVuFcWJ2cMjyv23Q1bBstyZ4t983o",
  "key2": "5ZS3CT5RhhBqQ4g9qaZm1uH5yP58uJ2s5NcAcNDWhfFWTy7pXG49gpoZ4Mm5Wzcv8PnR8QFQPKxwLANTgnvxDgKV",
  "key3": "3jgrz4JJpiuw4u2hmABXgWPG3WyCdpD7t858g8tGjFZuZY9neYZ4nnZQ9jxdNLEPfn8S5WCzjqMfaEtvythELStt",
  "key4": "WbUBzNG5jU8WC4H1Tax5aucXaxPviKPLsZasGDpMvyBjbf8PtMFC1fcQ67YHAoA53XjYpEem3LSEFbkgMFYMxFM",
  "key5": "3HyNHz3ig7BZvNaqjvprV2Ce3h1QgBjGeeuiMYe8QTX9pPXGk9f4Dkp3Z6J48NnivCrPCPXvRL5daLnpucQWpAbk",
  "key6": "3Emsga4iqixGwUTaoCUvVoE3rNX3mUif9zFQPfKDVgPkNVccRh6jXTV1PcZh1eM7dWETWf3RZM92KuMEkmzDH9Xi",
  "key7": "2N6wBQtdhDWgZCn7pBB5EMdgCXGcXEKFptug4hrQLy58YaQWZDSs11oY1ZZXQkwHaPsT9Q89bymTH1b6yWpyA5NV",
  "key8": "2yYHLHAqdUTdLKp2StPFcvfVwjacMJBXmaGgVoSM16RSNtaqTYRSq1uuNtbM6UZMxgfLDdjNQv3Vb5p1UMsaQFuY",
  "key9": "64Gq46jQiMAwABYL4tjQFxfdSsRM9H8ZfA4jhuKgu73KSrHXo24a2cFeXKKoZB3oqbMFhMX44A7K3s7C6JJtdS1W",
  "key10": "4k9rdrfWnzU6Q79PMpGHW5eLaEfvhK4TuLi87iojajdYAegvSyziebn1DMoYYCTvoD7J71MV9qYWwRtGoog6WZdu",
  "key11": "4HCfHPTJFLpBa7sFYXqcpuxisnGaSqsJzKi74X1Kdxg526AcUtfxJVFT7jBMLdiavuNdZVc7Nni27hbs9A12ZEeB",
  "key12": "3wfSqKQyE8Mk7ZiqoLW2UpnQuju1WWgfumvnbBJVA6mKLgj6vF1ZHTHAkobAU38KJjBcirRoLtdsbXjgjwrDiCCM",
  "key13": "2iaFBqNPYWzkQZJWGmMNiKYGDqVPimxH1Wr7Yp4RtXke3XxyjDEzXhskocKT5ZTbSMReHKPSuVxjsrgwC37mLbwZ",
  "key14": "5UL6bT22S8vo8zTHDK6KrPKooDexgLoaAHH3txiJhyKF1yNiszVpST1XLaLeSmg9GsuEcCF5pzo7YaEnU1cv6GxE",
  "key15": "2SKZ13hbsUCAj55wMBbM6GJLGQMPGye5pQWpMNAjjBjdHTro8E4i7xri2RLbDqY6sBotnhzKxNyWjWT5CbLn13f6",
  "key16": "5TEpeJf4NmbM2jgA5AjV6QRnXPqjy9uqF3PS6om6MMB4dh6uzqXkbWZ3ej4XYkCDs1mNyYwoxDECTLya1aYydnUa",
  "key17": "ZZCQBvfjHFXcNnvyahBdxa75XE9ggW75tozai9RStEpLcVkHWgYLTWzEkLekdfW8gWZNBBpvB53sAht6rAequzN",
  "key18": "3KNggHXUtPabwRxyE3n5jvKFcZ7ucnjLHg9JnvMa4GnQFKzmMznw1eWtWtBZQ5N25a9s7GzgX72GSRaRiwAJw1R9",
  "key19": "5k4dn5AydxxDkXezZLfoYM5n4kYoYJFkzBHv4o4BKqGTiFJbpW8VmJEJTDm1dXieAB8NvaSF8bWZcun2MsRM8sfP",
  "key20": "2F6eaaR7uZxEvKFAE7EvsMv1bSyEMiHbuUP2ozoq8DbouqtncrA7cB3DRXtVQenEf2nyi7FtENyV2HsA4PyMdpNX",
  "key21": "5wRHgcwWU3zhyYPFxAHasxJNq1aCmVUPcgr7WcdqZGF4C1SF7U7QvbiW8vjoUzKSXNPfwSxzzpa1WPWKWd9fJeqa",
  "key22": "2QavLcBg8NKMsEbGbznxMRBEde1TF9vRA5WhqjsUvkUj7YxojnNPU3zvpiZ5kwUBJDCFNUE1QyUzAiucgsbhDL9i",
  "key23": "UhSP1wqQ6SBRsNBeT8ZtbfKqLU1soXQ3UeJdGNcv2Ywmd6UqPV5XnEsprSvF3GfNv4K7TvaZj5Jhcf1qxKZ1XEY",
  "key24": "sNJ5jiz6HY8PNFHQKTnbztijnMUZCmVjmCx6AVtNzKMZGWKa3UdpThF9UVMC4EU4FxVVXSbszqQGRZNQYyd6XE4",
  "key25": "22prr1r9xJEBvJsu8jErbVoRgjqtW39nAa9XXRWYWLpfdkehrB6srLptboXYtT62dPuRW6b9gUijxoWiJKq7rHHk",
  "key26": "Y4qDsxQ7hSNYEX9q3AftXCHyMSYZsorhr7bd5hfbFybSN3UQDT34a4emvNqxMeoAswRa5YjrexLga6jKxMeR997",
  "key27": "2gZpgMsYDCbf7RMYSU7mBfKSfeFvQxxjmfozhVcF4qDnWXY7AQCRLeH9GcYoUBVx7wJfMoRoMeCGwGs8XzNv3ArL",
  "key28": "64hVLaXjRzg5G4aaz7M4aoDj54VLtPQRN8eeqX9fKfMjqZgaAbwcd2nRDaRdR7E36rzSBzJ32ECVnDsLeCcogJnu"
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
