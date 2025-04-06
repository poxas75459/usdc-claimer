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
    "2GCTQzg3axAGFVtJzVHtKnZeay1yqWXasVWt612WHTXf7Sc7HQp6pDaYGh6f4kANAeZp58R7Twp3P4oVBiXM2YfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5arMLMXwbWMY8qjuQvL4qG4zRqzDqzFhnENLye2HLmqex2CkesES63ux56mxGzdfHLTHgXi3PQSnsnWeyyLXM4",
  "key1": "2ddVXqufewgyRrEV4kFAkY86vP4fzz22eJLP7X5Vv4ugAmkBz9bahxtMnWo8cm32wBEKdDjriM26Y9VWiXYNdqVW",
  "key2": "4ddb7XeEFnL5PgbxRbnEmDxVkoMRAgNnLX6f4ESDZZmokw3XwmKx35ZDzduSZcrrazkwpKwW7Q9347HZQ9PSdEj2",
  "key3": "3ny29j1Sy5bopaddrcHv8Ho8pmR4bgd376XzG7YaqSg8Nbq4VRFvNYypHhyZrDAybrZxRxasGZgiVYKyBhG2tHW",
  "key4": "47mrpuxtwGjHEAY7PBQQaYAwYLLVg1goRxC6k4qDeiFf5nCwHBmaqG2qdS37xPTgiyvQvrv6Udzo2oBMpvrEbv9k",
  "key5": "iPjTKne2Sm5Z3LmNU1eeuMLQN8usQnw3nS9dN9c123eE8QHhrjMRoGaRqeHKezrqJj69unA7yn8emuxPBLLWe5G",
  "key6": "5C64HAxnoGWntxT8tWuDYdipXMyZaoHMajYTKgEUYiHwqacyuiayc1jJk1SKygeA8QuRHscV3ZyXCUhLtxnVH3dT",
  "key7": "3UAGhPLfrYqYhRKDWtaw9pPiLN9BAEGS3CH9qm7ncRCutcTE6CPjTJNQAHuUwWWYWWkgoLDGEKfk6kvm6ERv7o9f",
  "key8": "EYqbfEn5jHUwRZmsS5pWcAJkfgFFMwYEgbRTfg3Ccpb7VPpqrunQjmMev2Eyh7Zgwqi3PPUPQgLyji7XumM8QvY",
  "key9": "51xpthGoJ5tLvZg8gbV4yKP6nNsDWPLrgHXGuZHQxz1zErFuWhyNeygBxUmYtqausaS1xqRejjifek3LuZgVUCjU",
  "key10": "fbyxL2HTvNBM4DPb3pgwyRKWd4jKjvpE2yttK83YBPpUYVaVKwi71ByvMtHNHk82SRJH4WqyGq6go5tUH8ekVX3",
  "key11": "2yDEfMsxyfY1q1ofDt18X9dP3Ej3kf33UVmeEyw9Zh84VkudkBn8Gu4WntbYUJp24GyxV1VsBFj85386Zr3bY3yW",
  "key12": "51cxECT6RZzQLrM5Fj3oBLuGpTPEh45RzQfSARV7wf4ShgXTo5SwWtaiZ3uGMNqDGq1rdxureo1a18PqPwGbXELe",
  "key13": "5KvRw3dPPwiELYqtusrdJzGE3JHrMLxVPFGvtu2qK5hfFgpmWHKRC8G4EN7vv9bNhSH526cYaAYKky1KtbCwVvPt",
  "key14": "4vmTjo6K86xXQRznmpn9ez8hwZSdPKrRPuQJJfkzEL3Sj4uriYoJR5VhydWjznuVqe1WVMjMuGBzDHz8i6mMVTGd",
  "key15": "4RLpAgVmuqEcRa1NgQMdMvA4S3omUr876U1sx8Ci9EjU2Uct1ptSMiicb6NdLepDLxS3RQtmAo8LeyZi77zdKH3x",
  "key16": "4JTPHWQ2BtWyhzgN3hPAvdeqRjSRwU11zzKBQXfLMi6eJE4Uw9E9FU1arqYQQNxZaEo8zgCCYCacJQMbWe9RGmvs",
  "key17": "5ARtei9M4P21X6gzjpqDbibzpwncUKN29QZiRDxigFFsWkQ4gH1qrgyBSbCZaNhczV1Z4Uc6tyYkhw6ah7Js13gk",
  "key18": "5Vm1LUZ4fszx6evJ1e7HLh1otemG8JfTn1GCabUy43hMo9tm7UmkCZ37CpggFS2umEnRBeu8ZnPReMRcgXdgj4FY",
  "key19": "3ARhVYsAktBKogrvy6jMy7p2Q85Sp5EoB7uDmpdsvZmPEsGkfqvDW51NR6hWDiC1QFzJR8ZUf1QLwknFrHJyw7Rm",
  "key20": "5sojeWq2NLnNL2BWoPFpn1zRCeMZKBFKEe5snmmKGWaK6AmvXcRfYj8uK26r56ANGjsHac8rFDMAH2DhwEHnkG56",
  "key21": "tNBv3fREazuiBdBfxw4v3xUv87LukefNEq7b6JiBxTeZ6UudMZMH4xTB63cby68WCUUYAWNDQYgjdFh2rFvK1WH",
  "key22": "3AuqUQcYtPBY3gYGgfHy1DKPHuyjqXGiSkEWk5szmnthXUyaFh37bhiPnU4AJRXefFFYWw3Le64XwJACXSq1x1As",
  "key23": "4ApNjZriMTuxPqnMTgCY6knVM4UAEf7W5nWn7aQp7PYg6VN3zDo3h9AswM41RTxb4hJt1zR26DYZdZftkoq4zMgE",
  "key24": "5g4wCB1iJMuBKubguwFHB9ttL94uFkN8ChNg7Vdda6gKKAzZqYgVt8nYNxefm3gNZbJtCRYn1SwXG3Cr66Ta89ru",
  "key25": "3eToBTMK8vqr1MtiZSjeRR5pakBzHhaZZMt7vHsqXJsGfGqVLEgcxoxxfStALDV5kspyJfy2PTbKt41kYzhp418F",
  "key26": "4tJpkoBav37mJCqoRoYYzV5eZpZybFvojSqk5uwb1WBMRw95qNKsrZTAW9Qcja8DjakQbqTbq5qRJH6ZjB359dF1",
  "key27": "3kErgHMZBEqnEM5o9KDwiC7j2sQKmPnYNBSstja4tvbAPLGb4hgpYw7zykheGuuLj5iF5eFWF38x43ksC6ayw3cQ",
  "key28": "5MNr6b3vAMhieJBEyVJ8WE17X2NyHFLFuThTS3kiPeyyRS6Wj76vstQ9AKvN6vDy4vG3wdjgpiHVcNYxfneyLHWw",
  "key29": "yHxef83NcN47735LAJTWYmgUUPEAc39cyysJCG2oJGpPgXEeQcs8ejVJ5J3kPkcDRmTBBQEFbSLcMhK5mfGpUi9",
  "key30": "2vyjNitpUPmV3u5LNdJMEjthpGGqRVydWqDMpnjbMNRCNXJdL1SSTo5vVomVR8TZqtbDFwHsbDKh4Q6ykGfUExnw",
  "key31": "v67d2nBCoQXrv8mUaofNE8oEdjwzb9mo8sDbunz9sFis6Zwv9DQ98JWEmdA9B9hUPKrvnLea1d9VfXQwQahxDAf",
  "key32": "mu9JjER55hkCZJfov5tuaTZ1G8PaqzMWrUvnG5Vj5zmS4EEtcE2MrkEF48qVqR1p4Pmn3jLxDdqPTioU5aJM8N5",
  "key33": "35jLQ5Mxc31RFcR7cx85m1FBrUwUJPj4JHdNKJLn7ZHH2vtu4SW76hWjDoLHb8uqL7qXnVB2vKHekEJQib3vHGnD",
  "key34": "2kMspkRKpf2uWPuK4mMSyXqVWiVjKWDQJSvjFuYLvfDnLCd2zFbYFmbtycobPnCP8quDChmFv6qvtqD3rGAzRvjb",
  "key35": "4tSwCXV32oW7TFXfWA27iHE3UobWrPVeNVarYNvtka13WErns37AB3ojP3pUbS13Ywd55imzu9AkkzG2U1YaqJWX",
  "key36": "3GCK9VCfYzwSuxUDethRwCX89dnR4XKhukmSX1uD4Eb7Z7LUH7Wh9dGVLCHzLLyY1XQZY3BeNwpo8ASKon5zSdxz"
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
