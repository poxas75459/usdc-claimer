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
    "4qmiqR5smpx1vYV7zMUDC1bZameyjYNJqh1hTY8fh4iii5s2kfUhfrtLhbSpFzJAGfwtVXWFSStKks2EtFbBah7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4pHA8drSzf1kzyWZgVUxgm1526MhMpGZMYSWATaX2yuyvjwSj3oTuyf6seA72sUKA3U69nYkvACAG66hnZkhYP",
  "key1": "48t4BPW9x53dyYDjbo4XBneT2eAcRQ7p67uk9NrgDXeumxr7vz9XGi3FV2sHgvh1MPty3q5KKuu54siQbSWUfzUj",
  "key2": "5eorinmZdgGbTbcdJ7gqfv4RqPHVv6vVowrEaDHjPwe43qHKxrL6iBh7vJBmQzehP6AfjU1ocvWXdytEZtw1UKPZ",
  "key3": "45dbizdPrx6uBnuC1VPRo5dD24HuoDdJDHLxV6MTrPRbFgVvyNzZR9VYJN2dcb9AeJt8Ea7TzwiU9CuEAtC6WWET",
  "key4": "5iRVpJJ9WgQSpnpME3cDuWgtbxngFKXr5ej83RAcMmVMiCekUJJrbbi4Y5xKtxKWqMzjXd1oeWxEQeffSLukVAmu",
  "key5": "x9vWufRizWmeVdvH7FSG7pqAfDtWBqqAK4X5WUm3cTenuPurX4MRwPja9uvu1kcUMrhm6u7TtUWrQE99vf8jBK9",
  "key6": "4S6RJESrFKbMWhgbnog2f7N3hKnfRJeDeDWkEijh7CzDuoRVtbxa8fKztGBR73PqMT8e8KQbgj3Av5RCprscDnVo",
  "key7": "x1EN8pt8Bwuceq2WG7T7gVK1Wne7aW1prKumhu7fhn4TGfKuDW9t94T4WN3wPBPNVdefoL6tz8JDL6nS9xEggEn",
  "key8": "4pBrrfmE9tFxoVdEUZimpU5QtEe71b9GoDjj3pqYZiNQQLEGt6KDdU6iZwNYTMzsnAU6vm8Zz96zESfufnin4NwE",
  "key9": "6pcwzudZK1K9h5mpfQ9z487sX69oRBBxGdv8pUvWm3iQvhCqicFR2Jzj8UPaYuQinVQk2RUS1tpbJhDE14ZDRDs",
  "key10": "CvynsK8e4nE8dBgjMBEm1zyGijYyF1XphoZvkxznsm41ukQssSK7tSd9Qq92Pd6vwCTTHD4fXyRQBE1p4uGnzum",
  "key11": "2wwQtHpjifkxcyF3GAFGrWGV3BqJ5gMcszr2Y6yt6isYGtYYzt374NsLyx5t3xa1hX4rYXGpujGMXmkZbD8DbEpA",
  "key12": "3xoFYfGZEXBK8RSw1MhZuyLvmyGQ4HTya4dvRasSSJxTn8BjYTCUA2JMWHRcR762AHUCCNrgX4N1xn1i8PLXzcCs",
  "key13": "2GsLsFDQhSGFcJ7D2RfSeZrexWpHUuAPq6GtpACnyNGjNcELxZPogjpTWbMoaFoZeJDvyPitWra4FYnNkPBh7RUe",
  "key14": "3BwSQh2QGZ5WpdTgDLbiyFhkrch1wxDijbkT3ZW9sQ6Hgc8KjbRP19iwpQrG7Qah63aadZt68m7UoHXJNyUn499E",
  "key15": "7qrnPk9xAHrBzAM7kPTVETcvoRbTwmbMU8cuuYJLejKf69zBcnzuUFZX4FCPVUk7ZehFUQ7ZpXbncf5Lj17d2QY",
  "key16": "4QBKfRJ324HERTN5BHk1KMdnJwQPRvBiMoBrJnXKpP2FoPZKBSYt7GbiTNEtvRDw8Y4vAGv4KMHQkk8oY86a8Xze",
  "key17": "dH461tNaApRs1WQawXNfdfrPjHh1dcqJQ4VrKyNnM7DTgrTTDWL5oA1EQvNHBRrCQ9D5uuRoYdRCkmQXfnEKCaA",
  "key18": "bx5XXWCXmPyjdebmZKZJkbs72A9bnyviJqdE3ZVmti5WDzLEExM36pVbkw2NowzF6Pn92X1StieCrW5ceUqSco2",
  "key19": "4K11mHyDTBNTVAQ8kq592QaYzhno5G25U6CAogPzvnkDvsCq8wJoGFkA8sR4kWt7VLCYhCHLZGNBk2huSJ2P2D2a",
  "key20": "4T9ffcNmY4LDvWQFWrAhQKEhNZQUtYibBzgftEWzwP8UjCTLJp2yJyWmHarm3aRxuSBCSdVpmSWsdNgBEFH6ctZD",
  "key21": "5oviXB1aJztijmhZY2161cBycFUTASehweHb5pRaa9KgLx9jQ78g6zeDwEvFHTNJsACVyyco5VjqnpiV6XE9XfXe",
  "key22": "FDMDgKg8dbXR7Aa84qDVyUCYEPnT9oFXRaHc5ULACkUYUSYFjNo9MDWBEFUk2t4ibwq7hW7GR1eviBSpZ5NxcoC",
  "key23": "5pvke8WMsGz5fLLRwF6QFVRKUxr6LLM1Xph5MYe8QYpcYNS8At6knCT5tAMefcsn68nE6LXKpSU2q73ZQKGjv1di",
  "key24": "24VZcePGE2nSpoGJs6snHScW3VncJEaHqLx3MoyLT5Ug64JmgVUjo82cc1q8CCmBJhsSV46TXQvKTLuQqgDbeG6R",
  "key25": "4eSnK5VSTgAa3K3TpxPudUT63rATC698axwMP2wJ2uYGNzZgxm4UugiBC6bRp7iS2CybLY5LsN5CVv7ejdWV3UAB",
  "key26": "TEHFe4FLJ8Q4TRD8pzJsKkT5PkEFh5Rh4ww8LHrYHZ7LrqBmw31UFhe7VPc7s1yvVUeuMVArunBwArepiN1WXNq",
  "key27": "5wsb2r68ArF7WFd1DuebkskeGWpitcMRRUU3hJBB3PT91tZTMSmKcLW1KUoPa2AqJBGLwhBoQPViW4fvNKR5UNLZ",
  "key28": "di8tCo7EmozA4SjY6HuHmHtCZm4J87sAifUBiGfoFjJdjxHHXgVeYbqQFQ9S3f9ZsghXa8TKUzoTbFzHm82MzF7"
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
