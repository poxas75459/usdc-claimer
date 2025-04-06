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
    "5hYs8VNrutHLu9DURe8GKjdAer3peQZQYAk7RHjjTqDX9RbMHMQ4FEqK4yoWZaThaSLx1aoKqoi8gT7zf7nf73dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaXBLHFzxoNkzGY8GnEvirDfaUNPk5fiyDAgyjLKXNFeW9bX41afogojKWHTwFb3sXskvgqNgFh4rgjRQK8EoRs",
  "key1": "e67mJjX4bpC1XGoocnjZgLuy2yLo4UuxVRgRtfaXPfdWposZTHQjKR3cymDRHVHmkEYGQnJ3kA7hV4NHqt9uCk4",
  "key2": "58gAS41Pby713CPXuqazJn8tQ2wMjp2jG5ZHAWGUzPqtZhKY5gcp2HEJLy7sQSZk1jsyNuARkhd4wR9q8PThk3pA",
  "key3": "4WWzs8PUJ7ABTMyBSq6tZa3D8EBKVRJpfLT6KdAazBCi8CooefDn8WHpS1AhBN7dzi2CGMbAsLMwdquFB6AKiWwX",
  "key4": "478F3smG9Hf3u5mckG6cA6r4kKGGjYEkfaVJPaYyjPaJbftujEaLH6QTcuQUfgEcj2e6Gyidx5PNdPFRXFb9fCt7",
  "key5": "64wnEYWRBDW9aAXxpFhtn9B8ofrAg1QHSktj951uMFCDvnHvxLmnMUbaUVWCvUv3bzyjdw9yjH9ubpuVveBHsyfj",
  "key6": "4mcyr4jkGK4a9iEbiU7MVgboGsGBwi4BDGVyd5ZCjkk1Nu32FVmiaaM7v17othyd3ncQdoBsbpnLR44h6kCBHK5s",
  "key7": "UbhhnhjLm56vsQkWTYPJZJLeAXrN1hHAmdUFXTrJv7UfEJVZoaexXGp7tVAJ9PiMN4c3MtmwqRn4GkBQAdHATwB",
  "key8": "BTaXcnzSf1Dw3A7EETSAmBdkYCiv5FFTuwpcz5eJME1x7q2fRhRikUZAAWWTbZMLuf2mk4tHTFJzjuQdghSkr2C",
  "key9": "3kjcMNBFmpsPX64kEaByGCybcN2FDDbMCcEfZwMr3x2Gf2WqnMHtYyUqvcHWvngRaYHUka9wfQKzKUeyXsKb9Kwr",
  "key10": "5Dom1Dp1NooeinpuEkhAXW5J2DepfJqYmG3nsRLQUdR6e5UDjcY5pnzyWrnCn6j9WepE64aAvDohJVrajysL2yka",
  "key11": "3QurEiEcmB2kwYWUyvwmetk7rZiZXLXYA2XSY5JkAAkiHX1xbMxn6VSPokZorW65KNEdQ5nuBXokCtWmeFpWoY39",
  "key12": "67epLb2Lxu5FDY3Vn84yD4DrAoCFCH7i4Mn3ngdfABSDp755eWvzKmjPj4qYnp7P1X9QNhCydRv8PMRJ1B8FzQVQ",
  "key13": "2opjySE8NW19qC61M5W2gTAqv2E3Yh3LfLeQFgbYPQLABsAoQXRhn549q92qa7bYqq9XfNjfsjUfHmtt9dEV5hX9",
  "key14": "3htQx4zRcTEQ7137H2rSqFFGNTjUbpjeWAuQnsvHNg2RYbFE8TU72Z2xc8ssG1nftmNaUpwUgBfoFE5AYLmYY4ps",
  "key15": "526Zehkq4r3MUBPzk7F9b5HGTEvhP5LLiHhJGfJPXv3CPJnPJSFNujThWV6ZfvArHaLLyJmLQQf2YdDsTYy87AXN",
  "key16": "47MY9hJym9xXnadDWuL3V5fhXKET8Ta23W9kovfhA2xPhFgvzUfEWYaVcqWhefu4TsrKffbq9qbM1PeEzkQmBVot",
  "key17": "cp8vkStyKAXtp18o7sLFGRijyifyfmxfWjpdpcd9fA3nNTUVninashd9GwASDhskm1JLvAsqRCBoEP5RxAYE8nn",
  "key18": "4uRjneYqNFsem2Yv18BZveGDiH7mQ3YHevyDaTwP2SBzGm33r6gUPNNyAJnLZicr8FEQJintX15VVZNaPfcFeJQq",
  "key19": "3jhFxFgLy7iDYZRx9Md9EMap2rQuEYTJE2MrGRfVBcVEi2wRMzNGwuDJQNSE3mgqVyX89j6UFbjgd6gwWyHhwvZd",
  "key20": "2jQWZ3wMpvnjfsGMacNuJR4bRXxEkS3pXoQ7qrVZ79bU28y9Kxi4VhuF7iBg4cxjkB2zmxhQGExoJAXznr7uvj1T",
  "key21": "5JpEj7LSRrYjEVu49wvTnE5nKGyjK9qcSQYaL44ibjif2y8ot8bJmVH6jf9sqWHS3EQTEFKLAjPdZsVjZsStUias",
  "key22": "5Q8hXgKLfEbtoTpdKFyqJhoW7ZEBS8dNcy8LjS23gVribJo4uejqCA7zC97yk7bVvpKF3777k64L9Vg5XiUK3w3t",
  "key23": "5VvbnfiCQaAomPxqjnf2Sj4M4E9KgqjtFfRMLkYupsBcSBARBGyp6tEVHQXs2RP7bM5yHZgDPA6WeyYAqbYottQo",
  "key24": "5pizaJW2MgvUPHTZb25xjA71dhEHuUcMKoppy7fzugvvyJxAbbzusK1LMgGn6EmWbseKiFpUc1sxHtSfqP93xcmt",
  "key25": "2Qd7s9gkubnpL6RhvNWbBzgAEzQN2yFx1PjddKvmbtwZ6AMxzmmB9k7WzQXtmRYvqFD6NqibFn93ByruqyidHQt8",
  "key26": "53C6cGoB92yE21MC7TAjJdUWPkXwgo6QsFQi3WYtGhu7ELwgrCYcvNjhFPDs6HyRkUq6ysFYLFdWmBLEqiu6595m"
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
