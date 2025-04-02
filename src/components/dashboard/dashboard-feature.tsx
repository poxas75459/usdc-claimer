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
    "3ZeDppQvL9pZp7fCk1MpGAtdCG5xpMyTYNafZynnh8WZeiS7z5H71gTxZHvc5VqZcC7uJcD8SqnEa1YJdFnantnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpSf5YaRuia9YXLPDEeHirF4jZLcc3Mk3T9vQJVmE4BGy3BDKU5VtQjQChxDnankiRVNZZkNHWL3CT3qx3X1aH4",
  "key1": "4KiDJ79YU9cfMqtKNvgyUgcSw8xa3sPF9NGVypvBXe9h7rs2fVxSYSabWhimA35bB8ZyZVK5urHqpjXtA9EHBbEg",
  "key2": "2sWK4zRWov3D5wb9afqzbhxwN1dK6H3ByuTwQihHiJsGnRLefbK8wXUho3op2bkx1dgtRAyhEfhzK7pakQwmWs75",
  "key3": "59zqp5jipw7KDa3X6StRSmqUQwhtFdTeGYkUWa4nTM35jM8bZDHrb5gsrqCuHr7t9Qx662tbxVMHenZeuwnP7VrR",
  "key4": "csWuWihSPfNBoS4ZHaZCBwHCcDw14f5gVjZnCtq4LnbQroXHn6Nwm89nTbaPBFdyjQ4ud2wZMjro2zy57dn3k3K",
  "key5": "2ky5cLFHTeuEDqoZ27T9zkMs7cDL6JPZLqgeGj7WCCBBt4fKvFe4vN9NhQ8nYPhjD7ehRD4s8RtE12BEC4FMm9Qk",
  "key6": "y4vgHu52Kix8QSw9N2PtfCvZ3Y92mbPpfGudmU4xN9TixZs1FmbGg3WciVijTx292Nf6Ej2AAg5bv47KVHxNnUR",
  "key7": "59sELMWzPXcfQg7fevKFgdKqJEbwXUUrwokhh2R4r8WtAUoEb7Cw8CT5oX5xXrumA7Gfg26YxpgA2d5KEtqnzVN",
  "key8": "5tNiggZQp1D9dGyECPW8ht5qpnwkxtmZsVyyC5uNSJ1xuPtHxxQ2z8dNWNnNho2uTruxqyxULKz1e1ARe2tmMVUZ",
  "key9": "4ScDhuRj2KAQ6FeWtzsu8GAaEjApWnvQD7NR7TvP6vX3CLCQHsadDv2RGuLkZeEgp85bSxJYzpAw8gGwkqPUEdeC",
  "key10": "2gY3TTggQUNq2fvKk4sNriXXQhKzrwhAbXsSCTq1TzEUbLiwAhLReDxCSzqePQGxLrhiKjme4KbWLhe3kR9CKu3s",
  "key11": "54x5QQ2supLH1R5yLB5DB6zes7s5BmmGYEYXWiXnhon7y9J7hGz7B9LBfvEZMQ3uKjtu6W7XxqJEtuRGmK9zyeRT",
  "key12": "3re5CGN7iFaAHxNbPwLH91Rw8QiodpqncPiSGRetnorHkErFForDFHBe2sSBq6dAKMuz7awTTMUEWbUVSULRhfQS",
  "key13": "2krZfdz62HphL7hzfAUPpLETAqaQecmem2uW4zKskDK1cCvFq8RTQPx4Zfd3jJeyfcFkDCnMfnvWCNftKSVUzSds",
  "key14": "3j2LVQMDg4A3zfPqPbVuairPCB9tG5XVMiV9gBFhbgT1brbA4KhQ6i9Lh15Q4ba2XxwHYM6Aye7BfGLztMHVKFrL",
  "key15": "3H9hMaStazKyxpGhBBTUUMwF8w1sMrRZYK3GTNDVEHh1WrLYB5tY6X28tbeRtookGW11ZiEbcK4KZfWspkQd9tqH",
  "key16": "5U6btFwTTuhJzkHoEt1Y8un9Xxnpibf5J61sGsQoh4vCcGcbBcuAtUMnJvMpRGZGsTq7Tx6icS5WUFevsYDiUvR5",
  "key17": "4RDShgsYtbaaHUFzRpERCrNDR3NRDF4tJT4S86ecEhVE7ExxQ6DQCzyLJ3LFnXzgeeaCzsQu8gbXtCUmbtAExCiS",
  "key18": "5FQXfJsiYjKw7mfjwP873BSoHn9R6QoDtpoWXZPCKd3PuRBbLBmaCmnWy6wAdwRZgpeGWoQUprrVsrEsFZ46Akbw",
  "key19": "336J7g51cjvaQTTuZ8HowZahiWyPYMd7gpi7YwKd5SUNAHPBjpDXL893aPdyRcQN5hVXJPqdANxnqMSqR9Xv3ZLT",
  "key20": "5C8xXf493LRFknrS65cp5sCTEQgvAwvDnj33wzY4wZT9DqbgzAZ4HUuTB7Mp6tRig3ocrw5hFyoqY3HiggHySXbp",
  "key21": "2z522XF3RJtS8Ky8mQPtTSYiGmry43R5m56FCZrFUwNiBrE59L1AU5zGqRwYmwbCJP6WZfzhy5AgfWE5iRhy4nDS",
  "key22": "yTXHyN6dqGiA4QLbJRFKNGjE6ig6fr6MSJr6yB57qNDuVdaJvbYVDrZYxHGVcxAN14mXayMRLPUxY6ehrPRjYzc",
  "key23": "EzXgLqQEApyDQCvGwozNDz6ZZwEMb3TwCRZNLs7ebtu4Q1YMW27zuZmeyvkUPxUserhSrsf8dk8PWiywx91xRrr",
  "key24": "2ramZE9x3HzNndSBqjFRrKSVQEubaT5ffzFdzpC37g65AQSeVz5wXgSPtkaUSqEN5Mtzkh7DMRwNbWsWjHqpEuqE"
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
