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
    "28wmkZ8vwcVsxbdw7WKFyBoPX6SHnxLMUZgaCyeNKLWsaB3Gh6Y2hoG8UhGD2XR6LGkfmsoJuQ6hK8G8pABSq5Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUyMhxSQC2dPDNrqKDFPdtUtcXqv16rme3a1D5xk7YXoczVaz2DifZ4s9U6ZeY3DvdeN8Hr7NQJ9BiaFEYaE1Fi",
  "key1": "7uXZ22NbiTkVR5wReWSJVwjLYpgfr6hNLz2734x5DnDZ7Xj1zL3CgjjongxUAznP5Yb3ZGgSp6zVsgK4TpJkRMC",
  "key2": "45CqQdSq7jmuG1YygQMCa7QPcC4tQvSvjyaJDqcAeMwNiqfvjYSZNW3bRDj1dSJHi4twNoWwH9dT4tCVnvJD7GbK",
  "key3": "BjmfWebbpAiVHWzMjJvBmkQcdvUaAhD1noKWxWgMXmLRPeBaA7rpJrwp9bfKMbHyi9gGKqm6RNEdjv3Ep7eRVzL",
  "key4": "5CtYJnNXJqQ4B8SSZAT3Y27qAGs88BX6jXyq1ZkPtiUFCEFffEoxjjtztfHQ8Af6gNpBeqDjHX1UkDHD12W83zpx",
  "key5": "Lk8xsFXjAeJAw8mao2U9vZYxa9imaHqY7ZQvQPEHADYxT8rozhhYnrhrSaTqSCXb5qETYJ6PEYecudELMm2ixii",
  "key6": "SefhDhgJTeU1E7NdXVrVvn2nwKuDhDGcLJ4FPSRW7eesXhu9x7uBRRgosf3gqHqdv9udRtJbxskcgrYopUJKmyQ",
  "key7": "5oxd3dMqPF6aa4mb9ntExBsDJBZU3apa9VHc7jiaxyAnJZqyyTandwAuT2Rw1PLGC2kdaMqfuFaAbuwvDHaKvdme",
  "key8": "4XsXsUnrcjabHQdunNFydNSyPQD6SbrQzCvxX5eAWManKmdzZNjY4cYYNaFCieRQoLR6qjuYDkwRRZudgb5QGp1R",
  "key9": "5oFQVFugNzpxoJ4dEv9wk1BAGYt5LJRHzUonG4ao87PYEkaLUWBVbZP9gNdu4wPeyiT3g7bcaPAseEh74mgH7db5",
  "key10": "4wzPYvZuueqa5SE7nk1nFYKwan4Gm6Zh84VBqRrMkwFpJ8rgmKNHuFUBYPyv87SM2Qz4mLzoMfa61hMdFmu8diLQ",
  "key11": "5C2a74yDJHTJXXczkz2UZ3K11uxS38Ae4seJT9cSGikgLGBwP1QrpBEvEH2mPLJJyoaA6nXnVpEbMf4RLwvfKNAW",
  "key12": "5tucSFpCBpezDT9SMQYje3kfsQEtufkCBpnhn5NcA6Q83R6TSo6D2zMiJByPRX5bKGabTeYumEV3daNGW9E4FvvJ",
  "key13": "5c3Q7LrHjMhrYDpZyLysd7GM5fwJwfswpkYowU23MqB64DDnvn8p7fqD3j13u9kBKCGuk2yWwNppgogYkEJ8MjNS",
  "key14": "4DNhTqJC1kSj3biVkvTEN5uRJhNBP2XpTJz4gbuhZfNoXV64E8JiADgxiAD3TroJMqyifxJNZRkvJr5qTpBemgXi",
  "key15": "4VtoWhLpmX1a66bF93zPUE5hxpboFuW5MPRW69e4hLVKqcH56uEdcyYN5VueUDruvhp1LQ6CQpNRyouosfMABazK",
  "key16": "Lfv31wmwTowSk4kHrYGrWgPnAhNdSa7mD6a73Fo5Lt1UYfoZGFwnshmms1y3vF2R6Pn6E8UdHyPAczB41jZ46VM",
  "key17": "25PCanraAixXHTC6Fg6TBoz96zNa8X2ZJwmTnxSheKgThi7a9m5M16QiMiehcsDnHAd1fqEZFuZu6wkPT67vJc7c",
  "key18": "4V19pNhvtEjpgSQJo69q6aQA9uvPqGcBs5emytddJVYa53vEzgdN4RABrbwAfYQUUAphRxF75WodPYnzHDdEbDf9",
  "key19": "4A635YZsTJKwvJaSBPduurjv24ew5o2cyM2hFg2UoSAywqvahkQB5q8Zzdk4hqYacYHg5JTVYW5NL5KCCtX4VSYd",
  "key20": "4ywzTCpJ66zSVWZBuKRPpUoo4tpVeanm1sRS8qenHyhQaTGiRF9bkovETgvDNimKx4c7yEAqHQWhBcKgEUaije1w",
  "key21": "AAnDukvkGGndkv8uT7YzMnavVd1xUFg8WiJgpP3wQir47SMmq6VMesiQBhJNxgw68eJuKgmXr8DM5SXZmR1sUDw",
  "key22": "3XW43b4RdL2LYiDGkxkeoLcP5uq5WoQNE9qiVPfE43PP5xz5roVkxwF5TAGeGLCo7m44DXQEzww5nKex47YenQSz",
  "key23": "2eGZ2hiyozJR9h8beSe28v1kfEkr3w2PAVuGGAg87ArEhu9K7EB5DsvBvWZrBgsCAzsBdGNJwxxNhyMqgbkXz61f",
  "key24": "3m6SNECMJYthJaEifMqviU8axa8ikP7q1CKZMEucRCS1zHGmxSCEwcRNJ6P1zySA7c1HwCA1kSpYfzL2PQ4qBvKo",
  "key25": "5bNRaX4BKmyGEqX5wrmL4vHTKv4eRwhGP7GppBgf6mYFLwuvSzJV5d8PD3V8KRzvw9y5JPfuBTW3nGMTUFMqRnWG",
  "key26": "KTktTU7cubWxkvdVrTCEMFgkJtpfbo6qiMJpj3DydsWe4ECkQWeqqM2Y9fYEPLmZWXXbwBcds12fzSqJstCT1qm",
  "key27": "3iHJwmCrhTzuF8gThqtdyn4fm9iGv5NRgUXTsAkhBezedeVyDURvoXCitDrjxztBTZBNLWqDV8bftUKG5G1oF6Uz",
  "key28": "hXi7QsoNvMLX2wKQf71DMpkRaXpieHwuKHpdXeRbR4nNWeVCUqtEEREjMoVqNZowzRR2cTxkoLq1EkyMe1naoon",
  "key29": "5wg52jAUo6T5PzP1GG7XoevzHRXvSf1APTSpUDnncesWp7gm8C7Qbao9b9AoymXtWHyRaz2CBvkxiJStkFba1dZp",
  "key30": "4eH1VC5p16HK94npwtCzpXpKcfuCCWgU5HVtMndJ5ozV51UMVkANtLDJzpKGWBxDh6QJ5j8K3a2e3RmJqh7x3kJx",
  "key31": "5bJcE2hgBCrX8Jy35aMePmRFRs36P1gp5WvAW4RNVeNugDLT3Kb4322AUuuMz9XbK9hgZUwCGk6PVf7nrSYqVJdc",
  "key32": "PxPQfWQsa3neJ8izTdNDthY169RzGvioBK5Wio1NyQkwTRSQEJBEoot17cvbnEfJ8shtMZdpYYgmMYzLm1gKGeK",
  "key33": "4gt8g17DGimV5j4xMMwGABbG6aqBe1N8Y7R82K9gi1GNeVZHCJS6MdunHa7kq5AZ1jG2TL7Kdqwi428ufsXRqQbt",
  "key34": "2Lz5BBVDv8PtEwCJRrR2cDdMYoAhLYH11Y9gwxogBaShyciN5dH76eSfm2xiLQEyRLXXofdpKE1ANcXnkrd73Cup",
  "key35": "rfVJAM2JxvmPxDAGTDuVywhDZDx5H4z3jrWQoSvZJxcEpQ3HfeFc36ywqEh9S9MkyuXsYgZMYwxgwWp4KEXx8BB",
  "key36": "28C1gzDmhKC8Kg7pi9ecDhLL3vv95BDnhyAjfMP9aHgezDa3CBfKMqKpibHfsKYgMbtW7cheMv4kMQVWdpschudW"
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
