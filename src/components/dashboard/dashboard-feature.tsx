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
    "sM8miRUDo4cvwS4ton6hyKBRyh7Lm8HwHGKhSi9oPJfGW2W5Y1mZJvVgt8oRTPdE4JWb42Bny6YCT3apbNn8eFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovqewHgEsQzBG6m2FpcZFEYdm2igFZxoK27a3CL9XED8bkposNkN8GXZeAZABYLniQWhxAJ8zS6TwbLwd8JB3ev",
  "key1": "2bR6G1F1xAgyQKmXQYekcc4gqrriz9AWa5Ph5oSsu8RbrvrZUAzr1J9FKQQksqzKucUvwxqY8NQ3suuHDuWAwSrm",
  "key2": "2g4V7Ake96CfnQkg5EE3KaXu1TzAeSTpYFhSAvcZcD6siZvGcTQKaL7t8qss2U616g5aJpVZMV7zEo5Y2PRtYt8Z",
  "key3": "5pDqRbpJMKWWB6CebuSSjJtutDVqozqb1PytQsxMt9ay6rccVuVg3TLc9QAqbMAwe3bNx9tWj7W45tuFzmPVRqHG",
  "key4": "41chpY8Zdwah54v51T64fjZw6NAvNkajvxrufyAPfe2Lxs7DpD1RLJsAahenTAiWPcKSd6saogTM6GQPo3NCSM6g",
  "key5": "2EAVTmgLFsQwqVZrQ8CrWbHGuMUjiPGagWaq5ZG496F1qGsusFuLh2rPUkjgB2mdgFnCwd9FFBAG7NucZjPHVoBQ",
  "key6": "4HjvKtpzky3Rwcuhi9DHxhaKTTPJgmxhRALNc8ToQU45n98pdryCmVyFQ4iyn41a3R1eiAVLeMBoSPhea1NuiHKz",
  "key7": "59B1kgRkCKf3VRKRDLnKcKScnmRkz6Qtp17xTmasCTM2NwDWuY5m76ziGwdv8P2NuNXXarpYiB1JS6qk4C8VdkcR",
  "key8": "3Gf3pEdxmZECvjzeETBULX6GgBpHVab7g91f3FzXWq4rYb4xw2tZZXXLkCmofFJ4uJFLhHoBpjGVx2TVUC6KW76F",
  "key9": "EuDgYcbbM8HXzvYDkUJheGT23b1UPfcAwZ2KmAXEzq54peMFxpVQxzJCDbghXC6N3G7wpSE2GWdd4N4ukBVWiNp",
  "key10": "4Fr7xVqytSyrLAtJVka9BnDRShpTHg6vR6y5MFUPBghhzqzBUugSmfspHZBrK8JBhM1HXhbiit3ZLEZTkSQJj5mS",
  "key11": "3krn7ZPmUmKUdSCPWsd5pM3BbAhZ3xvZ7txVcrZ3UrTNnSZxr6UfCT4j4EMAEK7Wu8g7nV8nnkDuAy6HzmG7YZUj",
  "key12": "4MDGQgNL3A3qMZFqYapbKGpwT152Xaf6Z46t5PTpag8jB6gANmv9FQag721UbJL2AzXrh4akKKMZo3b6ixU1JVmW",
  "key13": "2wFasYi1TVajATPiuSFwJNLw69QJFVg63GkXRBau9QYRhJA1rRqHTEk69uQfmneQRYRePg5GzoAPm6Zykk9ssEe2",
  "key14": "4e3Phbn7aqsM2jP7QBdXH8b5z2aTjAct4sTrFyJ5d4i5KTWS5A5cvCEJFPYx4n1jaWUHW8sC4iAsJ6jvXwhaxnfr",
  "key15": "5xD7GQz4bPe4kBv1Gpi1kM3nwGepattg9H9HdBzZZsJJgcFH6MyD8fYijHuM1tDY48mS8PK6k5cUMkzN1zjEjmk1",
  "key16": "5PYjJUFDYoDzRGPHHkwKyLczyhwYZTbxPWX5QmwpscUqF9CttHYZ3Ms2m4BWBifztmWrrhxuFnd69TgpKiRJNJdo",
  "key17": "3j1TTr93eXuUnGX8xc73FWAYNgUQx2AFTskgDswexooRAbXkn6DEQ5zWCpbZDqmnqFBUHwhLKnV46sDYB7s2juN6",
  "key18": "3aQ12uqFiNGG8dkkE3E43a7BizyTSR5YNtU6FAnPqYpP6Yb9tCnsPs5sWcJxNWroC3h5eAGpV2BT7eZTDXs6JNHW",
  "key19": "3sBCeAYJPiqZa7gD3YhoyAkpF5WADYwc9Z2Ap8iaRA8FptBpg1EZ5MDwYSfnafTtiLuPr52FYALPBjccQBQayFpQ",
  "key20": "2Ho69dBqJZhhk9VHnm3nMvSWpJfMMLb9Wa2AEh66ZepF81R2hKddF2TxhCpEUBKZp41Ly5VxL2Lx6Q4egZF1mfXf",
  "key21": "5Xf7jZMxHPqoD5pEd6MdYxbJuheXWNdRa6vQbHAizJPJPnsVVRodY8eJxBTtKAubBhpUXkrae27mt3VBBGmp4RbN",
  "key22": "2S5Qe6Xkou8BWcQ3ceSsAetUxtyrv6pW9EhVGFziKMzHV4DnZc9vEdDykEJf8sHuNQpWpPNMB8cCWz2SFKN9qsdP",
  "key23": "oEczaDqFUfxcSuRVZRgzPfNYqcty6cpANr5sS88r17UGfo4YakFaaYDdUpaVgeuVfP31CLe5QdG4VKerkbh4Sjs",
  "key24": "4JvPouN5LPnAqG3avXvtv9HuYykjtSiKg5WPxJpqKbR8BMjKAkoeS6Sc61SSDCtdX6TPr5siWRdHHVG3q2cowx1S",
  "key25": "5jxxj86CJ4Ue7KvaeJN4szgnm6LfEUkzLw9iLfp1mfjEd68tc5qreMua4qHhV6Qx2rVpS9HXGB9dfaausLXCQALq",
  "key26": "2N1XSqcueWHtXAnBgivy8CywemZkzDVpBYMBbsWwTfkwgnas76GVTW2WwTCBfpdU72kd29w1G4uszhKZV34m1ma2",
  "key27": "2vtxN51geGVN4Qkrkiz5UcLZ5NgGe4vigNXVd7ygHu2oYzDb62Ssc5KR9yDpXzEmeHDkZfftTqEjrhEofNZL3zdw",
  "key28": "4E2PCr1PxSr2XQ6cCGXQtEBE3HLA3KfmVuy6xSie4QX7vZLvQWdS6EmjfBHaMk177t26LoQjoy7wLjUkfhPnQFNU",
  "key29": "2ufAy4vWfMX9EaKzrKmj6dHLpHe7R9CU5XaAZgVzh8MiuTcwj4DpQ8SXaUK3rAUbAJiFRoHrXyxVMv96FDJTkPQk"
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
