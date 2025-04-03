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
    "21z5frZigiZJbuvY1xhWGkme5VdgbFKYSb2RB4KQvJoYSsdRoFoG5RDH9gUStJZ3nU7bV5WFjhGvSFgNHUhv56oG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LsyCy3R4B36rLkRsd6RL52Yw9CT7Dn3T2LW6ycUAbsWHxqtHbRhZ2QPYyUhcdStXY4df46xjd8wrcDk7o9mz6GB",
  "key1": "5qoAdHSwxZ5DjWsNmyvQiNvyrr98nhiGAG5mjq4W1nUSawDDcsFL4tNmJXmudKTW1zmuLWxDaVVZT927vojtcYjo",
  "key2": "2nLhoYn9GzQKjeQSLih7WeLtsCkYmQUCpqpmnFgQiDaJsPQYEUPbuxCREWdXazgBWPgeDXvf3cwyBsNBahiZxnuR",
  "key3": "D7BBta9nwZQAbfnnTJZEmu6aeVqp6q6LxQ2cYTwej9qQjskYahuMZBHJ9W4yStshonYDktNpr9CTJPDXTXRe4Cs",
  "key4": "3xMNbv9TVcjF5c3kfcM9wte365vbFicaWZF9bMQDDjv7t9ohEjCAjJdiV36P7VRgEJw2nhPnKHS1Ecsp1TbMbLcW",
  "key5": "9Y1LHgtsfvUDxnqYidD68uQEuNxmCgYWRiVPuuXfjv8LjsLuzYWcVx3w7SzD5eKpkkFB15LenD3LEcefazLj1G1",
  "key6": "4ApFTyxFVVkn4THRkskYeFGVsP8Drco2jLH8zH4z3ECZUR85o1TSjpn8j83iwLYJAk2hzDgkbgAAnop69G9NbXFz",
  "key7": "4Nn5WsvMk64shttin8XaoF8jg5qa83ydroXpU1kmifyQDdGN3uH9fz3crARLoG91HLWyBG54KGJvEJ1xsvxEGYc8",
  "key8": "2L1ADz93jQF7frLeoSbD2jicAwbGHw1mhE8HgkuNNdg4ri22ZhKnFTFKC4zARqFfaZMbPSKDUNCMrBSATFgSLQdo",
  "key9": "4SeQ7uhoZ7S1ZYuf5C7pKz11vL6C2ZnvwotCsnTtqW8VS5WCxuYbE3G7oK2p3oJgXVp3zHhpTgcre8SMBzUV9sjs",
  "key10": "99dnZtrbeBMhAYFy3LySGPuZ8DMD2wY1ZufJEsm2JK1wgBUqBbSeXJaK4T2y7eqqjGNw91dC75TtdN8GdPfN42Q",
  "key11": "3YYiBpRSZidp3t13p6LadsGR7KAnEm3oT3s5eCaPzXgAQH95yckQhNm3svtWBvvL43qgx4d2PmixJySXNv7Ec8Ma",
  "key12": "2XWE1JTminHjKuvktxS6yfi5MmQJRCc9hjCWefiXzC5gzotWefqHzHCELwAQfcGb3t8JXzkYn176e7dZi8g6jsCv",
  "key13": "4VVZZ8mGXkMaLzH5CdENRS9YwC5JvvDxvYvhYdRjoAaxMc5bMXXEAg1qiEwbMWWjz1tjoSpEc5qwtXCiYgpGqB7F",
  "key14": "21awNcxwhgSE7hjBQgZGE6nxQrYNEoTkeXXEjkArea2p2S8uLkRpz3HmqsNkx7PwcxEHBPi6kgKDY6KkiZ3HAk5c",
  "key15": "DejRNpGkZtU2ZHDfJW3UfzJs2x7LJQo5SdUTv76r5CCNrakSK3yDDzpHcdpA86njJZsoSe8p7ZLDU4ELBDe1BR2",
  "key16": "5DE3v3q5opYCD6tZFLjDXPQn36Ni85coPVpu8ceYXZpQH63qV3yga9C3ZRBNb2qDgNjPPyzBF7VmhkwtPTd1sGg7",
  "key17": "3MMV8oJJa8YGrZ2wYyCM6BjyGeqnvSGPM898WxqZyDFCFpbGSJusD8mmvaSMUoRn5ey3yi3b4Y1G5vQmxfgEJnqW",
  "key18": "3FKXw4V8am4dgusmXPEh8GgzoDamikFMCDsyPjcYDm8XojhYz4X7Xt5ycumFjFcfx865WwKMxJEFZK4wLoYuutGr",
  "key19": "XWJkFuxiUmYDSsXBffZj4J37EGYrb9nGwkwFuZxU83S4gLve5KfDuvUBVh72SSH1N4HZFpeFt3WeAyT17j8L7on",
  "key20": "5c9jazfYNjXjcKnKuCsRzXBbqDrvnCp9WrD1iqA7K8mQ8dQgNMEeHAorcjpsHw35k8qTfo2hpk2zEm4MaRCHvV4V",
  "key21": "uKFp83wnPpzEvLgWjZx1aY6Nd4iQ1X6AJqqBumju6YKa6zFs3ydhXgPMdXnQQfZ4GHp5joBfgynZMDS5aP4xrEH",
  "key22": "3SnBmneT95UG5gmyUGRDoG2apfhtwqjNZbm2DVesUJnfm7EYqr45vjwrmtxyHwqihHXgX4Zw5VZrvPnJRZosdrAy",
  "key23": "33SRaBt1VVkhHaYAZpVmftFQUXbhEjM2FL4e3aabLFY7cGBHayTdMjbL4mWTrdUVLwTczkzRKSZ9tU1BsS7r4VCV",
  "key24": "2EdUiXXAD9o5i4etUPpcrWDCZjzUVfMogRzMPaLDFyvaBeGJ5LnkJDvfCXFszhCJCLGK4GrZUueWJDKRHsfjgVCH",
  "key25": "2rum3tbTDs5LPw1z8DyMUnwEEe7P7kx1zkfNJsUVWGbeVpR9egXNZodUcBCReFE9tP8qrDSDAEvwzCxgG1AxU2EB",
  "key26": "34GQsRywdp7wWoATZhDm7uw9HjU12Zg9wXmdG1yeZ58mkL3EXvcQ1FYshGyVsCYwpfrYbG5qysUt1n17Y1teAMVi",
  "key27": "25DzuCB3LzP4cuX5cRftCsqdfUE4b34rdTD3b1Z3jzhrJa6VcUBCajNZDYctBYKbpc1sZZBF8rZ5DKupMGVP2quq",
  "key28": "2RdCAzDiK9eKzDTZPJMXk4MXc5s661HTMSRpzQVKagZffYkoo1LVaQxSHixRPQsiguFHw5WfVC7cid6dneZ4cmVr",
  "key29": "4XHUjhitc2heH9yET661UuZKKck3mNamNPYQ4p8iUiruLKuCyx5zn5YujXdEJwxF3Jg5Kk1Z8Ja7Pkhf2NwY34G9",
  "key30": "28PBWy9X8zGDUBPvvz5sY8mepj29uqiWb6awDLzku3Tjoc55Cm25hZxf5vcZR1JVX3FSvrzkDYxaJT8khkW963Xk",
  "key31": "3rK9GczcLRuyrqDMrTmun5gH59CJsG672ZM9oidzVEqaYZUdJBTZCf5go4iKyARtyGaEiKSdLcUeyPJRJRvh6L6j",
  "key32": "2fxzYqgTDESuGLe1Wt5xSY8AiQxcnYHZR4Ku1ZicLXPnzoQRcCfsgjF1KV9PvHnwoPAEQR686G5Zk1zcvZ2bSqgU"
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
