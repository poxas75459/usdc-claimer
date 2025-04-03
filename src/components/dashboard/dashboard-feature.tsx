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
    "qUE3FX4Ghin8MLFQDvJLzB1BK5dtT9Fo2Sh2EgAepuHxcvS9vi4KD7JcsmaHxgwhpDWvQ8ZZGcWcrsDuQgoYF6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAcEKNspvytNgsDhUKSVLAiRwmnkhXFWn27c9CcnHYwUNG53Z1YBABSnrEMPTpPT6KnCZ81sx5KAtbmgULBKm4U",
  "key1": "QcsCR7vTuzySFycjgVt3rn2qKDq6VhFaYCD5RFXFogdnftyuZqenxFfffsQvfZ5Y67ib8tz28XuFZ28ZfsCXHss",
  "key2": "2DgVycn9QvdXVzZMfCJQvoQ4MkhqzqMToG7QUZ2jJjSV5Xm8hWUWrinc3iM9sfhKFaYFHs8aw9SJMCu88hzpdwF9",
  "key3": "2k4YCvgcEsFzPRWv7AsF61RRhAg4THYRTUG7aE29chwHVMNYx6jFSComK6LH6RoUgTezFtiQzsqiXAnPknLQErNS",
  "key4": "TqttXhhYguQkur7z2H9tmWJoeh6nS1SB7gqfMJbm5b7ZMy4zoHaCatUuAXQA1woGBsW9C3xyuJfLsafCzvSW5TM",
  "key5": "3mfPQdtJLk5g2oNqd6VKvqdvsVmBTnrndrppzByF5c6y5pJFagsXuvTzFSGxT3J6iZJztUveM5EbDAytvm6ao172",
  "key6": "3ng4BcBWBRLrvWJ3ZTxe7dkpyG7pqmNtkbnXJRHqUtqDaxrjHV4EsD8SYFfvpRtrNR9XemcoV6fbChLgfRvkNrmS",
  "key7": "3tPcTqCkLL8PwAsNbgbp9ngTSH7DnP7vqjHA5TieQy5SWTgYpYpAHJBQMjKCRjowTzhW74hiHHc1nVgT3WtW8xSj",
  "key8": "47XZnb3qhcYRoEcLQtfMK2QTxLBVBXGoLH9k6fbEWZYw3jEL65mqaffyokHgnpaKzAE8tKHhwsWDUFeNyGDBiPA2",
  "key9": "66RUat8WBiKYrfQJ1deGYA5fzJq2gxm5BSFLdPxAFemjnS4NGajVr8fkK2sW2W2yGTXhE46UXvU7rHgGbCkBRXY7",
  "key10": "5sd1czKjBXPgdWh3V9GBwQHi4wNqLrEzLFuMrxpy8KdWeGobpuGxu65tbSreTbdHByQbUByWjgV2axUXTGbaaXBy",
  "key11": "3uUaNoakEsmQ314djvQTXdqUH5gWAyh7sBdiMELJA4RfcmNxt8zxVhwQ3nznPU944fjZKK8p5HHJY55ZP1iCnsvn",
  "key12": "25gmK2RDi67abXcDkgHVAmqDkuYR6V9krHdZUweNPK2Yg3wGR5NBj4t4xhCyBUT2U5A3h6rE4uXYX9JB4BNykHVg",
  "key13": "2dqnDS7CfotZDwfrnGiQuk4wL6jsnZynWXRZSQBdCSSfehPHFJ9ikrNPdWnh1mEGNJfT7TH76k8pAu3hvki9VLpy",
  "key14": "3JngdsAd9PwcHJvgyKxknq5TSfN1c27amATKADFQhR34ZoFwrLGiwtU7vEBnAVVmBbQA6TWco9staiLDZ7QXqECo",
  "key15": "2HHTWLizG4pYmkcD5cEpD5qX8ptx5EHsvEN3rFqQTGeXD1nUhT1J5WA6ezSAvMpscjz42NJzhrRgoWcF8iQqWs4p",
  "key16": "5gJvStCjKBLTtbpod5JpWbQVDb4FBwTn1ixdPko4g6zSNx9GAocEo5qHT4nh2JQztaa4Yw3doVpYPMfNRSmRZmt7",
  "key17": "3RfA2pp63zHGHGHbh9Nwcf1rocad9iw8Vkcwjvqzcfg7zvoNvj4pAsBEcm4dW8Z9RLosUknGwZx6BX62sbaBrtHT",
  "key18": "3GT5hzestnnuZMpZ3QLbnh6vyPAUuNvrw8W4d9BpRa2GttVtsEfbzSti6SsuJhdKC5tXMYBuzqbPpJVTeA9ouTip",
  "key19": "4629B6sVMJMmTKHyoWr69yXNAtZNXLK8FK4qQF9WJcEbAQ9NZ8Rm9MF1Gpfi65HtARGr7pojqT4xMytHhCMJEkCJ",
  "key20": "4W5DVmS8UKcEmpYNSYN41fbbpny58gUk1VSEGgsMbhyrSRXE81UEaBz7oiBVaLyShMAePSXksXv5pUvmaX2wzFYq",
  "key21": "3HCcwKFbh4M67jWqvv6AidCvoH3SwihEt9oGUyF341yqNkKzt8SRsHLYMckQtXGjpPhVqugN92KtVjpnUxFRGUaW",
  "key22": "21MeKFnJuYTCUJMkQyp89SuxtsdyQ2FQNMZDpegR4ioG45X5cyLGpbt3v624LefLB8zt8a8u2f27VLMBWRcyNMc6",
  "key23": "66j6LmuGEmufKDQ5nKnRxfkU8Uvn9cqUk5RnBHSbxFQNxwZ2GzDKJVhqg9i3wYdEnK2ntz7pwv5k2Yb97Sr1Sqqa",
  "key24": "vsArY4G8gphkBroKfiBwwizUGvN1E2H2wRDWV13pntQqcadnqbPuNytfF2kMpds6cYrLPY8NA3u1z4HHf4RtR9G"
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
