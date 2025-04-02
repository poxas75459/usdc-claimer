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
    "3sRsSNFxZCsqwDMGEfNvPFuGM1KWaRsRT2Nd4rzPxEcW4VKQx1CB1V3C5yM95x6ooHgPtZeS5j24EHNfnG3RToxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExtPftxdfZ74vWuT8jPBcAGDb4MuxfJQLaUuDmZcTR9pRTNBrht6xHZpSd5jQzoMRbUZNEYAXgBd94Hkb2HKBig",
  "key1": "XPjAGcFZZDWCEYiWB7pv3usbDMibxf9RBtjpoVxyfSrt3UG5LUpwAgSZBLyoEX5gY72mAJEtV2Rh8AheLLZJ6J5",
  "key2": "qVAmYaaSRXxAB5KkkMFHwrnfhmB28iq8oBcAne51nn8yPPyjhVWKJQqswRCaceKifNGUmfFKZSN7jmA6qoTdYZr",
  "key3": "kYWY7n2YS1naSss7Demyq3rZRoTXhDgsCAS5RDwKntkWbTKz1s5Jc61mfWovC8RwvofjA47g5cJLBbSHoe1WeJY",
  "key4": "4ucA6FZpARGRDZtAT7xuQ3AATBJnGixwRD6zfeSVXi49rgYDSFyKVb4dg8dvAyvfxZRPTegFTGiL6acba9mvWjDV",
  "key5": "44sKHdJNswVsNYD3N4xtSoKWEDkbUjiHfd2Bqjc6HEzXSXEUwnRuavmETqvbUdhknD3mPCbgjZdeN7Ew4TNmFXmN",
  "key6": "3rKqMfYwg1irWNZ7rxERPTLHXU9bt5ZYTZDrmkM4DZnVnUrT2jDEduvcFqD9EfddCn7EFTJKoTB5jnNwmZrUuP6m",
  "key7": "62AWbWkQyFsNQNXLmSL3R2u7m2vRRUY4LdxiEKJ3dX7z9k3ZEFV1sTxz27ppLWzGhHar2rMdgDd1jzRjR2jLPAVq",
  "key8": "3MJqbLUH5hrn9pqM8QDaPnJ2ge8aoHH1jBzZ7st4rjbm6xa6TnSHA1CCrcaZpauB9vrDC5c7GjtS7nvbm3pCedT8",
  "key9": "5iXmdChQjPwWUHBy2UpHgBpDkH8HiKrwuzK8ft476NPRuMigH9u95yWS7EyZuevQaHCvz8ZU2wJRBQRCtEEXqjVE",
  "key10": "2bbgXXduvdaHYGq8m2iCHYyEvkxrqgkoLPGbDkHd1HGaD1TbtEkj9WV2QGujYHESMs71Ccq9Xi2Hg4BmK27MMmh6",
  "key11": "4KSq9cnF154aSihvyQXWKqjnUyDUWW5th73Esu4oWupJBRg9UU9qWSnYDtSUXHzTuKgYNNvz4Z2h5i3tzDxxjrQm",
  "key12": "2MQuyEtuaRDJcHizt2EqHGyQ8sn3E6mFxEAH6p7exjY7bb9gu4QstVGB5Z6GfoGxXc5C8Y5Axx5WLjw7iz7tyfHd",
  "key13": "61dUWQB3QP3bozSh6q3nJqh5UUedZct5r5jbpjvjJzUi3NxST3uRhp9yFRvq6qWVZo79FPLcjz3wCmMUhj8vNjws",
  "key14": "246u7cge3ZG6CYAUXKEct3hMrWz26mukFow731tQXoyft5BVjqbq5E1dv6SAwbdPxSVpUrTUEfdcyBSSLp3i9NQD",
  "key15": "ndJtghT4jHp2eLjYFFaNXxcQKzzuX5HVNpRYkg3CHH38fP2SFuKp4FDnptttTojjTdLPy6LMvKsD33pyx5siLju",
  "key16": "4m3zx8cvXfHyQKxaotSsFpXGaFtC46rYLSdvrBprxvGkej5rMtxsvhe6cLGugp9w8pSEQbwg9TcBXX45gKKsZim6",
  "key17": "3fshEwEWQexU4k3NnUhdgK3pyiazpLAwwrJRxww2ve347utbnCafNbkcra9tA1ZuEKAADRwT2NgjS8hwxaayK4bK",
  "key18": "523kzq8tJSZBTEPa8DxMm7zEEaqoiWgdgUsJh3imxtNB2WK7BdthYRSuPR38kD7ZFaGt5DyDwo74SJBC7iCWHYFk",
  "key19": "31KWoaaq3s3MnyMgLJpcM6vVUJV1zo1NhrbvAaRffGfRx1bJ1KBquHDYpSMJGKSqnNMhzjNoCsNQGrZxmWrZB4Cj",
  "key20": "32Y4QygbSvWYCzpXwgAbMfRZCpffNz3GbCFwM8cW7phuitNEu8sJsqpwi9rvvANnFdsvhJQydEXica2rVvmhRePE",
  "key21": "5rynunWa2ooHkhied8SeaBqs6JaQLaf1MhyAEax4dy99WnigsXgN269Z4PZ23gQhUh43xLPYWemmdtbdYYRWosrj",
  "key22": "eSf3ZznrjmrZPs7DEXQDxe21j4rJvg8NVkv5QdnyRphdMTscxUnkEiVNu6QPPwUJ6vHBW142ryofkg1Lwzgmapd",
  "key23": "vKuTDuvEA3YtspuQcL41pgDRX72bJMghLKpmi6ov4wkaDrTSef3GqoUq7zQpZWm7Ekw46cczEsHWWunU3Ugoef1",
  "key24": "2zzt49DgKLdQtRPAJj8p4gNxX9zkYMPQ2Zx3GZyCuvM99fakTx7PWkcUf37mrhjeTmAL1yyzJJ7t6qbQxVjwV4rr",
  "key25": "21QXQjZTZKefW86qY2wymwNpVMGs8t6ZRfWQe7AP8egNXiBW3CCKPCyYa1vFGCuQQwjZ4j374AoNLgjabaR8YT4N",
  "key26": "3vkJBHG9Y9Wfacqrz6qfWN2NcoFzZ1Lb7F7e8GFavFi2xatyJKWJ5eYYwcxnhpfwWdwgMUCCmk2Stnd1yJEaRcsz",
  "key27": "57qzKQZ82fgxvQrfuJYnXaiGge1jEJpqpeoHhddL8yKUNR8xJfP5vzTbzeau8kneyfMMyVSqbuXhXn2LNGZpXuC6",
  "key28": "3zLGrWVVbEKt68cfH8EWg3Fw9ACRNJQJo299zoXDYzDfdV1h847LzuyrXsMThamhAow6gh84oUuNfkDdVuuLGHqn",
  "key29": "5oXtd938Vg6yckQaTHHVZZ4eE9pwqhHSBjrmQuJ1VZKenujAssxUMhMB3j3A1ijeLWRWszFjfhVSAVJr9hXMWYkc"
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
