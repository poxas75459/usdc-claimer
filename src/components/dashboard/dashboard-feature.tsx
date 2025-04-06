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
    "3MZ78AbxkThk5ydknwzxWWiTGCzrPJHi4E5aNHrZnpCv5vNhFJTKFwTc7muCybho2Z9dLZwbE7vouazcJiQoLDPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dy5ohC6sEkBVYQCyJyt3VzUmJ9kNEndLbhbz6nRJmD9xmcoKYtv7xsdopSt5AsundbXZEngKZHkzWvVYuKRfdHr",
  "key1": "4S4MTdhb3BgV4TkUXQyWq9BYmRVDRPv2o9M16FwWE9HvmFJwUGqpV4qVRsMokZECKfY2CxL5S4NQKZRpWYNoaBGT",
  "key2": "3TxEFbGWzv9vp1QuHU9hVZitfLsgQMDZssPg7cXLs6HgdCsUSWFrnQDS8CZSDo2SEYbgTsRAm4xP7H542NHsETam",
  "key3": "669j2xa8HPvFVwf9vzZcyymAeFMkLSfAM1HSnkXeMQH7MPJ1353t9dvoLKoDRecpEvymJQaZJp7j9w4UQG8FdCjL",
  "key4": "JfKvNnxpjUoK9HuLUEuEmnYxK6zMk7JV6cMmiFYNU5imCjWPvMCJkSJGi472a4dW4Sox3N1t43jHvehXH8V2aCt",
  "key5": "2PpD9dBgr9fTEby7oMv4dfs7uN3niQHAeXsx1djBAcBc83CRbDxkEQjuLtosigUg2w5EdaHKYyTeRmBhKGY9CPY8",
  "key6": "JN3s9Z35sGQarVUatverDq8EyRzgdSimzqCPMxrACXq6VTqreAxfuTke2TsVN3uP5n9guq2Y4Z4d8gQrEzLu9ye",
  "key7": "2wmq6mvGpi2YxT1tANBp2WgaNjiSNz3YzNFroaCHhwuVZuVJ2RUGvY6fyU62d9sqJDMQuVzgCmp4dJkf9WqNxbs4",
  "key8": "3h3fBHFJ5MKPq3FQ21EReRmzcZ5gH8AMUSr5ZKGnXNKUAewuDQbRkUycd78ggvxoeXkUaudM6zwyAPT7Eu9CXUzz",
  "key9": "5kdhNsRybXRpeWcsdSpTEraThQW1tNzC6w4U9M7AUeivSjhcnjswytk5tyFZLUSjtBtzWmnta8jQPBof8ZxKSUwT",
  "key10": "4tqoocomMPgCGwgn6ZJQ8nxM3SVSCf8T6SCN4c5drpXTfAPGvGbzCNuQjRbrXSqyo4MJfKqUvTDRiwejWL6SeeUp",
  "key11": "CiDBadazpC6f9uUcXdUAezsjJF7twTCmAa6rpd4PACxqRWZAPttTZRqNxj8HchxWND7q1TPWVLZAGDR9wwD8dJn",
  "key12": "2Vmq4Cz3Dr2Vjo5yX4h1Jebj9sDa65Sv1hLyExFTP4kHswNg7kXj3syFNuJg1GT8W4nHtLhQnaqWhp9VTcCRicVG",
  "key13": "28Nr4HEYsYQnomSwcARdVY2SnTqwne39BBDhvxN6tGe6DRXzcwpLS1PdWdCUK1BV4j6P3LC7ygihddjyFwjPbpcV",
  "key14": "4nK5XCt2tYXYexCk12W5owU7tU9bxHRnD4JeToiDpBugPPqjNzaJQmMPvUs3VfpJb8N2XLzX3hRULHbuYMbhAtdG",
  "key15": "4X59WamgQLNhzyPFNGLyMnZ6wARtFucFhZMzjbg5L3gK2gtdDoPu84PWYZGrb5iNBVEuKdewMVfZeoMasndy9G8R",
  "key16": "3FHHEmV32wPAJAAhdrd9PhM5tznTgYxoERK4Dy2PNiXo9CH9Yi7DrtqnNRggwPjK4MLscJFUJ7v2Qb3ayvCNMpQZ",
  "key17": "2fht2gqfW7neMF1dPpg5ctwy2Y6rb8cke1t8Z2NXZMaxa8zJTg1KsrcQyuFX3m28CCJPPfHz2FdzjDKHr4W3BNEm",
  "key18": "nTAyWq4MZccK2cB5DA3kq1GxaQTUhSCHaagnkcHLbJm3kqWzeSMRafooaEGVdciutHwPbWvpAiQg1wCtLKj9Eem",
  "key19": "53cbCCCHDK3djfeC6BQ1p7MPVphhzP9nTgyV2ysy1CvE8Hh4PyrnjZrkxjisCjeidsKxJ63eADCGFQY8HCxA2VgS",
  "key20": "37CpSQhizteMYqTNebabcr3JtPDEQSxcwFT3g8Ggs63B2CimBLNWgTp3wdWrnLa1CEtMXpNGXfTumjMiq46JUCEB",
  "key21": "3oTAd5dMtbfRJGQ6H3TMNtNQ8JMTjZ49C4hFR3U2LcryvmVrEKGJRmPxeRtxNu1uDGwTjyTk3F7AAomaDpiYNMvb",
  "key22": "B9DCRwhThDFDhzeAmRPwDeJ1H4rHEuEGHdWyergSNSAgaiGuqQFFEn58a1FhgoPP7GbBcg9xi7Jbru5Lg1hRojb",
  "key23": "34VWKMYWQryZ4Ct1hru4Fn2Ho1NVfx3x3RMHYdRkGRWzEweaq3dWRNWS32tv6WwmSXtdUJtMLrfF9zrxwAm4mVgj",
  "key24": "49c4csYirp6DGXqrMX6WHxW7hAywYuKEm9k2Z9xyLqmF28qeJszftQq5fcaZgzB3Y1U7dsMTSu2b9TGGPGhbfeJQ",
  "key25": "4EwpaDLsDHqkzF6BpcSw8ciy9C3jSyGxrKnMXG3pnES41o65e3wvhFwjT8M81Ku8QD139pTmWww9Z7EABv7yJuya",
  "key26": "2XRtcE41XRiTv6BM7Fb1PXfd8vjEkTbnhHx7LfwShoV3CSHfQXCVcH1ew41wuUUAH4Bt3MNysB3viDXyZDkCzvzJ",
  "key27": "58a1Hj97KC8XxAo5CKqGujBcZjAD23bEuqAJ4hTvBfLEHQ6kWnCKSzV7otTWbDbKr57ikXKD41ovoxs6o8G6twWx",
  "key28": "3PxU7icJLeoM5Ji9v94Gqp6Kp1EgfEDH8wGZkLvSTVyfdJe73GMznqGqAEooGSitvn1DkcMHkHn4HYBWXsEGMsmh",
  "key29": "2NxedJg2xS6RkTN869zgQfULXaANbtj2EZPnJN1YX53SALMETJ5jE9mCpnRpcHbSXbR1LkuADjNFJpDgjyr3M7gY",
  "key30": "4RWsdjEzbZNDxif9WELyB2YcRvpHhGMqKZNng6JYPBTXvGioTisHmvxssD4UYq9ueo2N9xePSkg1Zdt4fEQWiuxR",
  "key31": "2MEroTJbFKBmgKwij9f2kJMPyFKgnjNYLewZMAVsbw3iWMVzmVxMuKEo7DKm2bBQskVuc3ueyPGPnokMTRiuhBRw",
  "key32": "LJyYtjQhypXLnFnu2DcX8vVbBLhCCNH5mRYN2DjoZE4zvbNn3zTtDUN95oAEeJgtuCHx1RY2AoeW3YTeznSyvxN",
  "key33": "2S4eanhjmkChiUCUnyAofonmCWtiacVQ7DDpsaPeAs4B3P3oAcG2Hauv9184WmWroQdXe1qUKjVpPMsubWmCKNPZ",
  "key34": "AZX17De5DX7ubxukLStt6xUgLQkNVFqXLaR5QxKjTKk6o6AG37GeEgERH5UqVFuswqnRi5upy5iDLNmyLrKsKsj",
  "key35": "3UGnotMYbywD8SgFMQjQWBtG8QapzfQ67HUsaBQjno7DFMtRi4SsidBDKDAQRusea2db7vp3kGX2ZKREUw45Zkch",
  "key36": "5iPCLbYxVRLLYEgsCEaDsj2BFgCj8b5TMvQ4TZkvcJU7Xz4BA7Sqov1Ar4xu9yqDMXwkqr3eQFnGXhJhcyjq99QY",
  "key37": "42cB5JDKKTSxPETH9Sz3DUP7tQT5YYtSZqaBeS6vaY49CUWBHUiXNmw1Ppuv78PTV3sc7925c7TAdEiWAzwL1Xky",
  "key38": "4zADsvbg8mWiHoyz66ZyBsLrvpP2M6NFuFEqjC75R8txBVtTJE6B82UBCqsDD6wx9pT2kDRG3kADtNqs6E1mgvpJ",
  "key39": "3r62uajxGVCLuLnvuSCFNCqorvEJ2ts4Dj4jRzn56SP6esJZHx6rbss9UZvfYeRAzDxinEVzAwaT1jbKjiTWFhiE",
  "key40": "nvErK8ckX8b1PeGiYhUP3mAfPmmYcVtefHiEFY8kC3smmqLsmsPWdjo2sZ56ohMy4aMuJxDA1TMih66bdvPEZWG",
  "key41": "2XBx1riTZmMPqk71upk26N4pLD9PfTkNoWjKHpHrW5tuE8wsqb7CkpqrioJem8MWpjXtpXTiWdeEdHkr7gW1m8s9",
  "key42": "hXGxdyZwuJRbAiaJn2RLKGik8AaU5Jkgq4sSwTQXEnyLAUrejFa8UE1TXHvkNSHvYXnmT9JtmwdZ6wHPh7oYjkP",
  "key43": "4Sfk79bcWp2a4pgbhC54yhRe5A5x6a2Rt7npH2aXSAceoSYZpy3nydz7JbXbHLFw1CNEeefxADXQd71h8rJjH1Ln",
  "key44": "3dCY6yD55CzPytFaGAaApX6HpQZUsDqTWMr1gp4YkwcAabMirznRRtY7Fsj5qqWJaY8mQMt8BDWNVL5XrFuCWRP2",
  "key45": "XRNF4msNtRiqRJV7WZFbuT4Rh3CHy2KqwFB3jZqFctqmhJU2EuGskLrPiKy8EnTh2VFBFiKeNKZKRFPiGNR5ghf"
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
