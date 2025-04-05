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
    "5bvv1mG5jNWx163tveni34NPBDP4UGtjxbkNxraj7mx74evodzjKDLAPV64v9SQTVFArFk6yRsB6iGe8hoJj8sB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ry8G45FATVPzXJerzADc2E66MaehtsysUTWtuSS3QTjwjnixbJ9iMk9mN8tJs6ApsnbtziPQh11AjRZAwgp3ack",
  "key1": "5be3uoVTgZsrFMNtrsygtMQvNnzSsSouPZkWmBRY4YytXqKG6ksbTsAAAWMyS5tMJEeVAjiW79Sv29qFXGcokynb",
  "key2": "2E5kgPM38ebnoK1rsaFHMSqzHoVj1NNag3Fdf3i7dVe3tN35jEGW9gYePZFGFEtayVQUbzJ99WxrHMrd5SVKa2um",
  "key3": "5mpZ5m5jCP4Wi1fwTkE61EF7eTntBdGFzu1aB3qycAjjASXvgmvF5rHYKgpq7LXGTrJa7FJPxcG6mu2eZzEqYze4",
  "key4": "5NcM9C5Df6LVhkegJuZH71ZULC8JHfPaKJjM6aQbad4vqNNMzF2YxSnuvFyNCqhAA3kdMXmkrN6F9rNu41tz5KP5",
  "key5": "5T34iDuAo6DmLnKtrBuVLQcienFpzNzQJejoh5hDkRPMjMRvZ1AcYQFXBU9y6XLsysZUsa7W3Lhj9pF7rFXxfStA",
  "key6": "2UQGPcq7E5MB56o3nJKeTkFwNhcJQ1qS69PfZQEqgAUUUEeRGPDHSBjo5DH6qVxQCscDdc9c3dnpVhTUt6ByvZDQ",
  "key7": "2TzqrsFww3J3piLbdzV9AMDXA4iX8GvyEn9c368U8CRLWsyXu65ihNjS4PPpTND1VoZXWaVpWHMhvxS7WDwsyNiL",
  "key8": "5Y8bWDc4nzYgEE2fMKLYvnvZFacV95mnF6RDHjdVTy7GcvU6zpFJ2JtZyQg2bn9VD2hAskBhpxWk1kDgwt4Rf7vq",
  "key9": "4Tqs8DdnExCbW6HjQY6zGqMdmLLxh7k1ywcJ88wFteEg5XJMvCTXid6ufAUePJoZq3FNnxKYDq8eCoUcQk92FAAe",
  "key10": "xQCQg1xHbEmiKHqUgYoBsvB4ywuagXEvpcz3cQL75wLNcMT3SFcuXQALgGdRUazQRHkCBruQ2uBWfsYttkkwBAZ",
  "key11": "wnjAxHCNNzfRv1dMToCfS5r1eDpn6daMW2qVJCypXvwEm6etipgULkrimRiHKjTpm77MrguN1VFT9X9iUGsTak1",
  "key12": "3rZNKQiR86pg43N2f3iGuqPXP8Qmaj7B2vimPuqiAxHipb3vrsiKwJGb5MmUzoytmFNYgvBSsiRC3WVoqTRxszy7",
  "key13": "34f7qZvo7s6V83QTNGJqA6E2HefFBFf3tPGARKBYR8Egg5fxSSX7UFQF8zEkTFjV5vknnHzT99oUHp8pSWBMcgJo",
  "key14": "az91AcN5XKd3rGaMhvbxkAFsutkiXeufoibc3dHEUGM7hQB4oWEkeLFDVgi52rSP8PyGYLoZauGnaeRrMQ7c3dz",
  "key15": "2WxNixgbK6zbEfLdbcrCkuFxBDpP8Pe9F8kuNDsjBByUTgnqQrhz1YR1kkCtniRSxQjcY4fyWa7PzLooWtBmSNrL",
  "key16": "4AMxsD59ciUVgUXrBxiUDL1XR9sjn1i7QJe4iK91ZiuRPsPHDCRdwStrs6PqXuWZHftx5iU3mwqfssko2zqcqxxd",
  "key17": "2Ds6a8WMeusFM2DKjPcpXEcw4YXgQqLDKFKFweAZRMqNd2f8sr493V7F6FMWTBCHCfZx6pEhNtf3azcVH3vQVJKW",
  "key18": "tTRxaJ3zmW7K8kuoNPvoGmwdE8sandK6aZCwoNy9CxTUw8CspHysF5hUv2KrxaYLAhsZCWNRuT2YXxsUJW9HhXV",
  "key19": "3pVQjbNLkTeJpWDZKHQJFPZsJQrJ1rFfbvuBMTCBkadyeZGrZ1e8UZQGwkqBErk4cYxnNbhDZZZmgyN6CP3JSVec",
  "key20": "2DqH17RsaZdSg4VWonLEsHNcBS3gyBpHP46EkhcodDFQ2eTkhEnxakRvhPegRhN9HSmPsyK98sPMk1qvjWFrzwjL",
  "key21": "4LkcSs2nm1sgCsMV9XGBPgjY7uSuZNLz5YBFYxEtKLceCcrfdCM5nqfZGaLT7bHXG2ci7bKTb2CcmteLDMvDUGU2",
  "key22": "33P34a1qf1HukWezEwQbnd2AMn3k4kJgJbfQGTeUNDQmZz8YxQaxW46LXxwhBJgCB7mvFVFFtziafZeBundDqBbU",
  "key23": "5fQSr8xn5q1JN7WaRvPcEp8gUq7UYM7MpYDrGSa5ijmX8Jy7pV5SrAJT6pt28kkZvppLL4wLrBMBQ5jAuBVJektt",
  "key24": "2myzYDg3TegdLzCcNPoEd4qpxJiQ7MRUvbDB5xTLakNTzpupFhahA82cZ2KBQaCwwa59QQyeUK85TEgScVhBvmEF",
  "key25": "2VJDEh8JciJyKrCzcpc59JbUUuNvaz5KTKJNqcBKqeBLRRjRXSqGH3kegwdgj3T8D73u9bqnSypBtUJhouAHDoCF",
  "key26": "4kTuLDBvAstCwFFd7JbW7xsinUXKA3L2syJhqMseuzeFbtvRPXTx7cyvNHne4XokZ9tBae7hX8rH83TWystq5Mva",
  "key27": "5FXT6ZZn4ybyp1o47RBgB98rD4juPS8ivn5qDAVMS8wmbBUCgwbdWzGEpdV3aQwjSHa4DBN98WEGYTEHw9KiWkqN",
  "key28": "3qCD5294E6U9npbnxcX8DpwnsXy3DncYxcfLVzN6gkhi9XvkpSjgn3fSbTGhmFFqWUZEN1WNB5yvvsVxZE244Z4X",
  "key29": "36YktLMN9w8rr2nM6SnEqSCqTtR9eEdifHpQJxvaHrJHkVHrqtoGsXpNG6gXNhyPXNz4Z6TtThGoJqtdKjanuyHe",
  "key30": "3pNjGYo4wf7ZN8hSufmEbUBbAWaPWkuQd24Eg8sWg8HxJ3G1EhqeZ4JrfwQ8buCKcdbAhaunjyPDAh9N6KD3Fovx",
  "key31": "5mgEdB69QGCG8vqsM5d3UTqMCmbYG89vW5kkjstYAxPSsV13c8A7XJ12xHHwpyHgDHConeht5gmarV5y2qpvaj6h",
  "key32": "61tLio4qEy1XqYC2hsPjmKGTASuMbuUeaVwTH2KivLCfyam6v7droEDLy5ogJP3n1Ki7jr7rgzoRGBdFP18uMjeM"
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
