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
    "2g5Pzirtrk4TPmf9Gbph75YVshgdgmRP1AWo4n7dnpzyaK4zB8TX3csWrMLaWshjBYdcPm4uxjzWAW9u3crVCfY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCsLQmrKa3pEaPSxdNxjwrQd4jh4RCe3gUvjGrBSB1DJBLiZWmkEvz8hG33cv1eCZRp7Z86qhg97UKLa4vWm5Up",
  "key1": "43XNH3xTow2JbWQysjpKZS4cBLfMED6fno8G8LA2MNZTpYJEAE1VkjcLsez53TXNVanagv9Wr8tMT4c48Ft2pcR6",
  "key2": "2Hs5HWb78Wa6o2hKQP1L8X31pF1oaqANzGeuKkr9hpDvDTpeBDKzRJ3hMAEfTiuCkL34YdXGQubb37fafqTkfLsF",
  "key3": "5ibpYxGCjCoztuS1SVnGzeMeH1WjAXzwJcaqkmWRBRAWFykVV49aXrWXh1T7ML9SzsaEGoAWX9jqUcjSaLYCXE3y",
  "key4": "4rUHThEULpN7BCdrY3SXg5MMLH4UicTKrFpD2qCDnhHDbGsbiNdeTB7HsaTBWGgnWKrUtFMipJ8CjhKrfVeYfPBE",
  "key5": "5ShSgoj5ZSU3P4HTs4WCkBra56XY5S45KCDnShGjCuwet1hKXJ6F7RA4qemS57449wkfZcyMPot5e53EjDLVZTY1",
  "key6": "43FuBU6hXM8iMECq7RWT539sKLr2MrBJCHgvJptjEYBKcVG4pseYkVQbamjXA9DopVmTzDjb11f4k5CrxSjGcX6A",
  "key7": "46pot6Gpc6jgC2ptLmGZDc7p6tao4xojg6EXgyArEUxgeooqHD1kGSGExHhEccHP6AgxUNGsngJVQ4Wa2AVtm7W8",
  "key8": "2eztZt6w4N6NqTN6VRBKqcpCXpJatAL3FQFZpsrr893Z9gnDYe8bkW2fHs86sZJw5k7Kv2DSSmbUV7XoxRLuNahV",
  "key9": "4r1JQvqNqcUWsYBPUZgHVHJumewkUZHjiPW3Z4zFFYZHC25sceqjNRVTjH2TAB2J5EsQZt5sF4cyXSNYxpCQeRoF",
  "key10": "4pPPFM6e2Lb37ruDMkGGQS6iedR6GytB4jkd3pEajz4QWtUTc7YVHWZSeVhwtRJWBFWC982GZk7YoWMaohkmzyn8",
  "key11": "54yoDVdZuVZN7uT2ThWzJ7K6ATXCMzJBKKahTZNiMFP6uWdfU4Bmq6qh9uGZCqEMCYRW4tN7hzv4czWB7FRe2GyA",
  "key12": "2fFHwkAGL8oYuGkbdDoJQbPJG788tb9LzignWFEMqAcggRvw4bcK6r9RFMkkJdNEXk8wfQ1t7b18MJ5Hg4YgYhj8",
  "key13": "3pKFnJDqSFw1AJinhiB45DYUzg6pZYZgsxs8GNuPYcN2se3Q23N8E1fN1VztS61HbYnrZWH41XYVJ1Gkd3yCtPEm",
  "key14": "2pdBfYzaGmxPZ5UcEqby6eUXGMdgVjyX7VXqGRwHLSZD9vyAS8XGGpLzZnS5MG1pFV1NSrYg4ytJzPJvcpWF1ouR",
  "key15": "5NgC4JKGu58CADBhxs7Q5dM9HnhwMPLn7EH2sBvW2V9hjPwuoWNYgsg6nFeh789QFKgFArCvcrbk7cdSraYU3KMF",
  "key16": "2FaDFDnwbAXVn42KXMxRgJKtcvJRwhikqCXV7cbL1AnQj9HEBUqESzESUV2d6uxmuS1R3yHgzUeXNjLkaapnUEkR",
  "key17": "3vu75PopdbHn9Wyw5Ec4nnANWxQURNPhjvujwBwCgtToPQ1qURTvZewHGL8s9UiM1Q44c37jk8EAcwuBnYXPqXQR",
  "key18": "3GV9EoBWRYfEEVXFeKg6S5BtxJ81PhyLh8RNJuxvbySGCQ3eLEfnSVgr5kBjNPbkLgRyCAwkMaz6cU1t8Sr9wrVn",
  "key19": "74B5K24c3Y5USaVkYdK1ZTWaXRdEUn5ZiuTWzMUNukpo6wsGNHzPt7uEn46deNdS8Pc1c9xztpmLtsC5fc8qjvD",
  "key20": "2bcHk1v4NeE4uDeXBN83Yx6nzCiGsoJPJH9XDXfbcNjYyovnhrg2vAXfrv1jjitBXhPoFmSDu9xu7UC3bq2MKPqj",
  "key21": "2vVUNPHirTrZYXwQMNK3juNz9HPvN5c8GqQkwerCCLTq1XQb6mtTawNk6hGrYimZUowZ69WvjyMozwtRjnfJpkis",
  "key22": "3ZbPLcMJp9F9S8hhguB2HrCPYy844Lk2GRY5VJmr4mwuUQJkT6QgjeR74cGMK5D19G6LFtiKeVQhoFLDvMM3ZfWf",
  "key23": "3cwu1P3iRRXboYRyAYnCnmMQpQb2XyBjH2MU5TUzBoP1P31oRCgwC5oZBEXWHtFQAwTeeEwB5m49FVgPPvfs7zJr",
  "key24": "29vEEaSnRPUoVUHQ83SJi91m91PsLmNUeTLPqnW5k3suWZi7dA94LmvBuuRtYCJiCWDQB9HHKgd5QoZ7aNL1Tjj5",
  "key25": "E2rxkp1VHZR5z2uXHWGRfioeaxJugA4vwQxPmdU1wskQoxhuRAEJ9TaJbvyxFVt3jXAx9sA3Tm27G7sAppNhbQf",
  "key26": "2yEUE5xvnCtTHtffuWcXFTDwWucwiuhGtEW63kMuNgCZ4XRzXVWrqp5ft2sFYtm483t37sJafscSfuDrKSn6TULN",
  "key27": "4D43pedEd166WW2jBYdFXb3Pgd1wu6juSTW5qubFX9eCpYNbwRkJkFFcRqUsthv4dJWmbGPe7SELtjDFMbHgn3jW",
  "key28": "3QyvAJ2nHMduxQnBQMJMYGbw4zo2gE6xsZPhLbzy57zhDd8WqTD5YkHzwngNaD9QUvuewSY942Vm7Up2zFsrRhpn",
  "key29": "432Bi8QtQX1ajHdt7a4CNH6r5QguuE5MigLZqpWs3vGpVS8fmef2TLfYTN6q7DvF6TJL5yWLRbuaEJ46KH5jB5mF",
  "key30": "2XEUuAXEtEysdAF8nnQt5MXkbeXFekFWXi6uCTKpS7soGsfhDscpJs4Cbk6VMWMEBAdPp3JRmxBFYnFErV4j8DgT"
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
