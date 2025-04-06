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
    "3txBJxN6mE9cWSQMsDshvMM4wr8DwTUurSXmUpjPM3xzVRe7msBAvvmf6J23SxHaeC6VRsHkKwPoDni9P5zxUDdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yzZCHCRHFmKqq1DN4fcHXHuz7mtpUw4FyjVTG16PaCkgYA8B4sL8ngNBnF9BkHUEevqzrkjpE7eJzGBAsmxm4F",
  "key1": "AYR2ZQYrCPC1JDuFAirvkmfVRFAamJHubei2WMi4982nrpe9RaymaYZ4JcTewx4QPu4dVCPkszVZ3ModMKMRdob",
  "key2": "HUeyWgixbT5TEv5aUoMk5jD6zgPhXKTgkbwzihyynVSHwoTWvzZGSnFPBCYAiiFSxD4P8s29P7h372BJ3xGXWLk",
  "key3": "2ZqjdawF9c4BaimhG1kPMXHKx9FBYJQQjU53Y7AfPkCm3Y2vkF7dMEvroHTHA6PosWvKjtK8o5CDnDmjzC9beuG7",
  "key4": "4qs2X1pPPWVUJLWqBgh4Apo2fciZUTmYPfCKBeMLRzaHdwgivNt417UjYrKNv5HPgNGvEdgaFKeYy7CNfog6uLcQ",
  "key5": "3nJ5dLr9zQdimitdaBbzdsbDiTVrDV99XWXuxenrxtomBDx3UbDJK6DtEnaghhedUDku6LFcp9zxVZK6ZfpLf4N8",
  "key6": "UAEtRq1vCt7bxcZMUp1bNy1HGHtZANamak1VDTSJKAYmESXeLFvYguubkwMqSaqDE2zxWZTJEWfQedADWPgvXf8",
  "key7": "3hNBYBkcXSncAcsWzT57nYQN4v8ohhZg9itiw14ffQtbZPXM3xvtHBtk15zkSPwBWAjohQZLdFXgzFbwsLLaNe2E",
  "key8": "je57nevHDuYYsJv3RMSoCiifR54ep96jwMYz5mYgvG75eLj7y4NusP7HwNXodwECYpGP9rFHBVdEGVmqGQzXWi8",
  "key9": "3qzWC8s7o8n4hw8YScZXVikcvHqC9U3wUWSYHTgqNb2Pz42ZKEhsH2WejBiKxHyw52jxKeZbKnWYK5S1EbtYSfUU",
  "key10": "2M4SqRGKry41CZS9bTvi86jz2x6pERxAzV4vc7VBfVWon86nLeEpnyKWL3a4FKVfuMwm1B3hXRPPia9xv2zj1A4X",
  "key11": "62X4dDWV3j9zGssSbSGxiqY6iiwhYVqp7h2q3SJm6BqyiJHahSHCWHGgVhizbnp9rYaDay6uHBWPNGF2vACg5Jxa",
  "key12": "5Hf4YkXKC2Fpz1LrtHDRmtSd26jbTXS4bAy6YpmcRUHaWCNSV3sCbhz5eyYWZtF3WgRazKnKTZRtg9p7p3qy6zVk",
  "key13": "23Fcc5bFzFgvHDiui597UYDbufDgPQF9FU7UHJ8ZiERxzmUZeWsvxsphfctmsHJpRMss8ZnC8BpPBKjrpGnQuD98",
  "key14": "3cyE8HXRnLM4hXYV18v7fRqKiCZTy2ijLfbQD6A4PkVHSDrrtTcHKP5qGS74cBpkzBWbzTHvC4V94KtaHVNbMeVd",
  "key15": "5vcwL5gnyYnhWwS6qBSuLBaeoY4ztf2pKaiyXTuAsp5G7NYKbKEwFXnhcLLV6pztUqwykNg3ZMAj5hLrb9uxueJy",
  "key16": "5jnGSCYLCbUQb9v6qCTuDQo8mxhGvxsTTZfxB4iW8ez3891h4ckMRNyB2ZNF1ZhBkPAEzSgR3ASAAcvVrhTaXpaC",
  "key17": "52DXz5DJGjCEAEwGowGrPninZnxv3qmMj7DZ6JCDj2zESsPymxe1oZsmTXvCP7LT25B43dWfN9sBVj4bRUc8ebLa",
  "key18": "484TUXHWvh9YhqURu7WAE4aCHsAkPdkRvUhKVTxwXiP3GdgbSBH4du35Hd1GGrQrrKqEcGNJzSuBJQAu1RJRAqSi",
  "key19": "3ewLSMdABYTGm9qQjurte14uKRLwtKXyY2prKoGRsicSz4EwA8keG8zvJPQkrcRRSDDXM4DnQsJfxbgBBerDZcfS",
  "key20": "2oREnFXgK1HiEiYGLp9LQvNbUH7z246QdsVjz5WwT9GMJNsQhUhmRxsCUeobv1JXy2856vv6a4XV3tmStDNeqWKh",
  "key21": "4eK5svWWUSCJkr59RYCqMhgsFk1SP2ppjtvJo2NmDbb4vcqsXkMry8T2EoN9YjiQQiDt92QSSDR3YrKPSDP9FuvK",
  "key22": "65rjmkJDtDQFkGizKzZKswKaup3PvhfrdjgXC8W4zuGmZh1SBwZpD4MNLxov1EmYPo6djkYckfQhuw3poHy8uZRX",
  "key23": "2BuffVsW3JgVCWna5xPDFLAaJtn5q1QQQ8zVhaG4MuvinqNo1uxwHXdEwt7yWj5fp8FVA1TeTazsYZo6Exj6PvEt",
  "key24": "2sxJxpZyVWXcAGCEf4U7m3gm8sgHj7Lu7X29jFsSL2ECDzzck5J3UqvkAj541GZJQHyBFZejv2t5zxC8xZosWVoh"
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
