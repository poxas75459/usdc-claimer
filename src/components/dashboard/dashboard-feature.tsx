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
    "f2dpi2eXxF4BPozJQ6dCw1qJL2Hg9k2ibmUZpgoNU26GSjCLbz7JtDi4W36vrDzSJyHZfztadGWKpjnnMRH5A3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39V4QfFpWRKrEygAmciozYY7aj3HYLCVZN5Li5VM2LMVsBfHAufaEKz2Gv7ziJfaHPGKFPhc9MX5rzJBcS6mMrn9",
  "key1": "4Ks66zKwqshqtddfPDjkiAmTjNeAHrmZVNeoJ9d8TnU24jhQrT9oJGrMVhA7yjP2HcDw9ZB6e5NbFoNcj5xY32dS",
  "key2": "5YjEwZMTWFB6ps3F8imohATLn7ci6qJFjVKwXXY3wXTKpw1TKduzPhepgezktVwV3WqBhSFvCkcvZvGCjaCkjubr",
  "key3": "2jUyojfbfpvsKCUKGxQetzJKQMYLDmecnqm3gvA9Szi3XJWNVD8BsNEYAX3BwXQ2rvJ2Po5iDvKJJumYmAPMvpGN",
  "key4": "2GAsm6BCEvZQVh95ejovMebaZHGxAHYsy2Awh2BA5h7iGjfUij88spMy4U54gGt8afoXBHpAerftVcZZWJNEDSU1",
  "key5": "4YciyqJ5VTBLiP95wrrLfdjZizms7jVeKyP4H5Yunj6a9YuGDtnbQoMfWt82ENfSccTsRfFyR5YrWZRpmYGkytsC",
  "key6": "3V13LDK6cJoisYwXjTGgcZpvpt87bjNSfmPDqNHUyowrafewJpt2ew3fKG4Nrv5mesd4zC52n7mTSy9sD76VkGp2",
  "key7": "5MzHSZ1L7YznooghMJR5TwmiEPuDRCUdgDvik6aazqHsikr9SrkMc7SdfZwJcZCJhNKrSsbkCNdGYERf4g3qbDDo",
  "key8": "4RM3nqEPnDhzRc2ncCh3cVuVdroWx4G8UqZH7Rw259jhZ1W2rCndGo8a4VtyEdSay8zCgrj9Ex2BfaKiALo8wyoQ",
  "key9": "coiZwUEjWn3pTsSU7eb1WWhAiWfM3kBicTWgYsSq9YcoyaGuC2zziKs7R7TvZsoP19ptNX4YC218BEGbgnYubVs",
  "key10": "JZZx6atSNAZFdRD8v1bXNngPqWZxyyayteFjxAZkvzjvncQyskum9RMtySRJehWoxzjnRryNvuR6tyb8g1cKE81",
  "key11": "5ca368WnQpPGU4jAhXo9Up1YtwPRrkUYS7Ej61MuXn5CBi6dSX5taL7ZopF663vRiJM78VVSEJHnggMCqeHcqEdS",
  "key12": "2J2L8UXW1DrFsbwYjhZYx4Ynjj4G5LoSomu2aFLkGKNtZ8E5ws5vxJhMg3xmX76qLWmMhB18TrzPHEEqhVWprKhc",
  "key13": "4RAQ2gqfnd5sLmNXrq55Gp6v2Y7EQkHWS3d51pNPjXi42ocifWtbX9EypdjBoFoYd6vn1TVtHRwovjnAYJcWgtY",
  "key14": "59ijzxc7hKofJ9qG5jKLrpz8t9ssPkL69Ed7pV7doBHQvHQtt45CXqjjGsigBCdBBUhU5yNB8L3W3UpEfSTgnH6r",
  "key15": "rFxYFoCuAcjQr3EywHNpJScEzeG3nm77CfMCfsoc3N34MKK4YZVad29fTnQtaMxxLsEXgRBx3SXtZr8SX3KJVzE",
  "key16": "5qQa3wY34YX2iURpdJurcQNyVMBY7n8WX41DRU9Pdgipa57UbR4rXoViS9ordo97jC5wopFaUUF6itW9hJAeHTLN",
  "key17": "2zqBFCHTyvCAuode6BvJCz9Ga3xQBKZ9QDqLhH8W1cJeHfBbxeh2JByXskjzBDR2bXjVnTzBZDYCTkDRDjgHyDhK",
  "key18": "4RsVmrKhnkHWeLzQRBLowkKsCvLJaiV7SQT1jDRQv3FzrDiu1YBWLEkYJjQhef73YYKkXX3HA5DLqC3jrvNkxoSW",
  "key19": "49dyb1UGN3XGBy6eLxtZrf8DADgzvMq4PxftxdYV8gBbPm4Bqu5hyvgkV1pe425N8uiDhE5EemVzVZjNK1WryHwa",
  "key20": "4PSEEm542NREmZjab2sr67V7ULMiP5mNetkYzaw8JbBd6zErLeYyMo6S1YrRYgeQf9urxbw3TGUzPtFZJ45AfrqN",
  "key21": "2kY5EdjYXh8DZnmXcDESY2N8PkBC6AZKCzYjvpjsvrQTFgaGFdctBLtJSESjSK9CuDvyPa9g5Ba8yCQ5YAYiGtjA",
  "key22": "3s6m8JQ57G5jKg9LUyseTUFV97ff9pX2V1jLV64zqUQi6Wi7PjgpXRK8HQViyfAdK3s3VJrE7yPj42UWjU5Jtz5k",
  "key23": "CETwZKrFdkvAQCyLG38WdPpWkFqPSfB4MNeaam5nwH9bp1yugm3fuDjwFZdEGkWHLyg9rKroasuUEVTugZDW8KA",
  "key24": "SuKFtzbwBy1TSXqaVpHdE6fuUzvwgQrjtvWexF5Any1VB1WDENzhKfBzsRE5hRnoXRAKmTcMyVnv9XYRk9FsvWk",
  "key25": "2f8Ho4pSeTFDCgbSSgiWTirEu8bbhmYf2Lqf2EkucgEuCA8Fd2r5dyH7kLFUoL7zPNyg3pYV1Q1AcXoeYwQq3UdN",
  "key26": "ATeqnfJ7DQ2otAYY5Qp5LDf6y1rUaVcmhEsZ1r75r9ef3NJn499S4JxbiN1qP5Y9orhmjw9GBpLfbZEH4CvGFVa",
  "key27": "2fU13Ui5Vk23rV4wVN4xnJzJRXUpo8D8oHDpvBiPRU8ypQrzKb2Bao96cCzTq6meJiMB9463YXe64Z1SJHFLMRsq",
  "key28": "3fPXZ235HNRfnrCJMML84y8Bs5QBbd8uDao3mwsTnt71yaM5ZjzEasP3skF2XzSrJTdFZWHWZVEgQoAPxM2WEHW9",
  "key29": "XkiDwKCM2V2aF1mZQBfyTNmASZnow22uL4i2M3ZrNmHWGNk2rM9wq6fQxa71VG3VRiqpbmw5Afvw6e9bf41D196",
  "key30": "2Tgq9vSPH9CquLtrJACoeni8cwQx1ejaFBwBVhsCcHMs7pT5hfpkaSavmMYzd2vFoNxuuoPGWo21uGCuUdWP9S8r",
  "key31": "5sns75Vjfi79aaFeTxMzqBvhRwJJdFBZ4zSHNuAu3mvRD3VWUppES3Ke5JqiRjvKdXima6KXGwAKNNLZsATqBXUN",
  "key32": "2zc8ghV6N4o1qnbYMM4BvpeM7YoHnDVvagHdgXqZFEDg9g52JbAEkdUKjQMwaEpR9g7GgLbgP5Dcf5ktqdJzRRe9"
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
