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
    "3V19V2fnCf9r5mJvauEFgFwSnivgh8A8uUwte1qfrB8m9GauV3WDMJqiDs5zwkUBJd9FYuJqztDjt5aHQdj9ZgPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJyeCyqY7GSuUuL8zRtbU7tW4e1VBQvets9nYg7vbQq9FsKb1m6UNxSQaDbuhb7xb9KZxiARJF8P3U7pATabnhF",
  "key1": "m7cBFrE45DiErkD5jbHmgtEN2AtgmFFKWUGzgMvh6M69aHoP2bTj4WeQ99sq46rYwQetB7rxBqMKPY8hd68V7hB",
  "key2": "5SVau79T5HR62Bdgm6uQsnM8EdFcyYhYjXuZP4UzKWWMqRPdhx5KihVy2RKKcxdh39uNbxRdWq2LQu98WbZTqxAS",
  "key3": "58PzNXMP2AhnBUcqYxUkeSzr1jUbzefJBejAHtXCDXQR6fr8TMEE8FjJnp98Y8GTg7iXu7MVvGAFkE7zG7RXmdKH",
  "key4": "4ykAytd7jR1QY87pbVxTxZj7B8b61qYLS4ZyGFPG6mXuMDkXuvrXgSfpEFMEV4PCAe1BaVdoBJthkAECcgScS2vr",
  "key5": "DP4qwW1G1Znuu2dQYGUPVAQqmBvy6CWSw7oTLH6VusTgxRt619NM333RFXCceSLbGKqjtkbuH7bSnxk8XpsQka3",
  "key6": "5vkzdrZ9jtZ4NcUangULf5Ef6gdmxEGDyHDHZn29L5E62tHGX1ydaMHty1SNKNPuMfDJaa1NKiYJr3TUHXPSNSQG",
  "key7": "YutQ7CsU5fZ8RtFNGSfK9EbmagSHSdmkr3yP3QVvxK8FU8fBNpxGhRtvVxGy24q1gc2bJMR9Cz7h1xwL1kygF46",
  "key8": "2RXJo43q5kQ15hobKBYJMtwoS2NxxrxkjX4TY28vGmxm5YESyRGsiTgv8S8Q2ZJLA6GFHmqdrQsC1tz3zqi1LKBj",
  "key9": "NNyudLpGgKYA7LejpSEeGgV3ugafjQ6zyVG8v3XXNx7N12uzbp8R7sFfjgnMnDYkHriqk16xETYaftnp7u2fLS2",
  "key10": "5h6dcFC2mrXqBrSfXE8uP53Et64qGuz2s1v9AUE3MQRgoR5zgdVviZa88N25xMtxLWPAmTQ8gUBDLDyBobDZQSfW",
  "key11": "4Yj3jqGWqzXaAEcozVT5G6dRLBm9Nd9csG3xPdKEQvPw9VTgfKiSoM9yRcBY3rGXt7noyq28ZVrnaeQw9kTbWTX6",
  "key12": "5KaNfCXWP7oV6D936hJbvniXgnjw1w7hzMRsZMYmE8n61A83R6e5zqv27Kr6mm1dwVuTR5k4P1mprsakx5hm6uec",
  "key13": "3NDyC5ucoXazGZgMaYTVKiDZpxRevymGN5HMjVtnvEukVjKyT6U7KyQSAkuEJXW9cZsjzUZ9SbMiGbzzy9nCzcKD",
  "key14": "Rmxt9c6K6iP5foCgSXoPVrHQrFsn4TyHwa69GKz2HALeLSXmb81G6nNoPqCxtGXKaeesNncfJwDVq5xK4yXsggK",
  "key15": "AVqZCGt5GzUGVLHHsasiowGJQ9rPfZzQUo4itQruiZekvUHa1vau6GriahDeRWreCqFHe5gizQaTELDnzrgaGiX",
  "key16": "aAiTphA9KPty8Q3kzHKXiytBmXq5jEfXjoDzd4hUM2ZQ4MTg8jJQA2jVgzFHqseMWNLAXeLcRnZaNiy83xjeTRd",
  "key17": "H2vdqJZfhHhQDShzc1wYZW6ynKjVFPM2cSU6ZjFr27KPnvfnrVJEpNnbpQAaR3oguxXXLamsxr1cQ5anR2seTHo",
  "key18": "5EomKPnKtKtyeG2FPnTfsvq75ZiXemk3hNt17DpNm2T2tb6JfbTYd8GDX4odE4LsReVZU531pa49EJJK1q3det3P",
  "key19": "4qiiJqyHbk99QFMELR8gEXwSJRdSbTABJZgUvqyYqpnhcUNL6eDKch1zxtFFy2nFQ4C6ZgAUfURFieckTYqkT15r",
  "key20": "2YgvdhnczsnYgPqxhdhVrD7hAcRhx4jqQ61AR5aRdBupa7vaDFBYGuxUZYXiqCNX9EN7TGUXiAATvPAZVBdpXmaH",
  "key21": "42En8KxLJmeC2NA83RRX7yQXmZ4SkRmQYPi1Ku8uQs48bgvZjt8NYZYK6e9dbVr2gC2RBd4f31UVsX8V78aMeAGZ",
  "key22": "3NvWzJ5euWYNAv5TSP174yqwz4k3o2mNHEKVribTJ58pqurZCHddkP5KyZrvsYm99fxhCiQSgUWBFjuJG3hRLE39",
  "key23": "4G4UyTEidjkUnYohKMqNMUAY1mahahb1yy1ttFoogbyaHaZLzm6EHCuSpReUfgsKRbGHBkhZ8ZRsaxUFfaN1UDmx",
  "key24": "3dmGstDk1AevHgLCjJYeMpg4vCCd1sW1GKjMTcwwA3toYC7jM36dfmfE35J4pgNK75xqH5Vd7t5xHAa5LgdU12on",
  "key25": "5Apxp7U4kDviDA9jCpc8Qa7Q2ehQCnZMrYCjvTnako5fGHtrskXWuZmjZLo6qDWP8zqncixufsgWbqE6YBdsgSmz",
  "key26": "5gLNij9m5pEfhFBM6yUKUJvXJVH3BJvUrvPZDjHtRNTJc18oHPw3otCLepNM6SUVDzjGpaYZNxVtbSkerjg2UYjm",
  "key27": "2xmZTqnG7bUTRYkBhQ4Mvdkr3dhi9n7Hvr1Bj9QPa29ea1Hmtpj3nYPuEWq77gSaNxY6uHhGTGoQ5P4VceJGCu8f"
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
