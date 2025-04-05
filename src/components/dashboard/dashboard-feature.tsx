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
    "3ed1DmigRVgfWYp4mQVq8ES5vATq1txhPjtDRHLcBwC33krt8X2nTEnTUGtpKRnj74h1chPQPhn1yiaCrk33SWp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axQB4gHnYegZdq6yiXQjmejGSzA3Az9gFizwfoUAejKBUez6aHQJar5jzQ7JpfCw7k53V9Ykf1BHhvXJ1SPvfbb",
  "key1": "4cFFA1wUkThb1S8eU7yuSd2HNUoJfJ8D64ZhMP9i38ACnor4uYkgzBKNz59dfZmF1pTS8MyGKNsBWoSLF3fRm1RS",
  "key2": "4VE4wDGZghtJ8bN9ijA4nVKRgz8cg7WbFKdAVF3sLgVZQMysozBmj5nnVWmbWmm3dZcjrDsjeTSVWNt2tHqGabU4",
  "key3": "hcNi45EShiKDHScRYiyjoM4d9x1guBE1XZjU33tzmHX13678j7dmAD7W1hb18KmMsx6tEreiEpGhaZFV7JPQFKR",
  "key4": "5KCRu87AocuuckYxouiReGJVyZEFmexNYCuGKjiAhxGEukRSqajGMHh6TQCrRFp4CAiAkQZvET5xkF1o3A3nGPfB",
  "key5": "2nTaqKmRsoK8YaWaX3WqwZnocUtXevjtGfPucJXxTeEWj4iAYtPMjHwesCkAH6QDifEgTBCJArEVjSrXdrvS3UuK",
  "key6": "2VWcRJ6o4jXskbYRgBQVTVy2uuzTBkm86BsCAsyXVqitBfXaF89ZAEg3wenMRZxWYtRV6jCjCosLpt6qpYsDQ1QD",
  "key7": "4Gqd8QqTVCFoeWdw2nuTVN3aq9FSuJCEoy8xgzmEuqFAfadTprCZoZYbMKZHnBU66R45upFFGjjzJvUE8thzANou",
  "key8": "4RrBs1aHGeoqMYG53X4PXE5hnhjuzyLmhbvFapm9FWm4xLjRgnvvfjhBvNHsjG4vqUjqnGsFUcVPnNeZ3bw79T8n",
  "key9": "54mMUJENCXbacyZMfmEzALD8gj3UBb2uWnpxjNcbrvt1bhMdgqsfgbEt9ypyGEmFTcNkNWvmS6cjqZPgwNM8uQwm",
  "key10": "2xoS4quH67Gp5NzZTAjJAWADMswBwiHKK1S7QqvKECd7JNkRsdRKqZLWhjpwWZStFNSg5bEwUnQUa3C2NkKfE8KN",
  "key11": "yXdUMuyisk1eR2n3r8TkUMh17e1XWyeZWHW6WyYrEx6prpwfs1hbVSK15nfGw2KF5Lib6Ejn6GBRfuePWWSZEmy",
  "key12": "gj6sTqg9BzkHW9V4zR5WpFPHmPHsoDQWRmRb1c8R3XveVD4M5K8oTYkyZ5a5f5Xvp8HziuXUvUQKabycVvavBuc",
  "key13": "46U656dQkCihyaVwz9t4Cy3HoDurL5YxADQFhJPjrUhEtVhyvAydXwEXLgyEpWjAhG7Ahcpi6GFb8qrsUDADKRPS",
  "key14": "5pdZoPRd7pFczYShLPdDxA19Fy8owU6WzjbPN12ZAuNpKASaJ9WuWuWBSqV4oLQM4E7yLHZbbRiE4qswHmiK33TG",
  "key15": "5kvTWJv66BYsXPghJo8LDmiEkWkcRzMvUjAccRWJCv81tUJmArM2bCCWni9jSD17zewTJfgsvumKGBtTHbTPapFc",
  "key16": "4hQuk6rCWq4WyrFShuaiReeo5hKBs2cYAc2PbCgeaxAFxdBxabQZiBbw7UH2XoHLMBw1h3qPh8X3R8UmR9uQEtr9",
  "key17": "4rzcv1ytZPbYj4py8LPhZdMKH3o4oJxb9rp3aJN1MecK2JPVkejV7M3shpn95sf6u75hiGUHHtK5XZt7epKBMT3g",
  "key18": "EQ9F8YVrKBQrXjrouQHiKwJ7hrJLPDATNnozmFAJuj7Wi6hqCcufL5jVpFWBuUz3pqLbWDFtv8vApqZm4yQKcp9",
  "key19": "5EyeRcFY43ECyoe9VvAtQwfK74z4TY1y54433SLiZUKgMrarMY1f4guLrUfaRsuriSnhsHxjHGHw3wfmdGd5dWgb",
  "key20": "GMiP9rcwgLxWrvzZM6CYM3Yk5oFQuy2pWZGwyAexcXzTU4LycAGdyAqxBVgZdasEc5d9tdqnr2AoRWnuK6g4aN2",
  "key21": "2uMYxcGNJSKQ7zFM28jR3gVTbkFqiK3dwWNQZWtAeFgdwBLR98WjJJhEdRP3vQJVFUZBjHv8mUPQbQMzh1h9nmUE",
  "key22": "4oQprri14YPqbuoxa21PReWxV4beN5PdQEVUY3tJzJi9kd2fw38z2dQfuTboNP3miAUXL974NY9ePyToADyHDDSR",
  "key23": "5UAEFitkFeMtgsMsJPpLUv1GxEMfCZ4GDWFnqbz8ryNWwQSrDBbdNx7mf8bTrJNevQWMdJu6pn5gGfrXQWv8LwtB",
  "key24": "3F41FJfbswFJKa2SYY6zPAQwKVT2ZuA2zE1fW5xVLNKabBgcXMwngGRQzMGQrU9uMbgN3Ac4rc78CznffhFVAZNB",
  "key25": "56Y1dHjiDjm6cjWsKoHSJvXcVWaqbKGhxhGiazEsFRQVjCTiNbA6rqQDwLuNdjFeCyj9MtzZz1GwhHLqecJuvuX7",
  "key26": "2n4MWNSpjGNcjxqo819Y2G12Dp2ZqJCfSwHCpZ8Rv8tpqQJ6F76KES8PFk9JUaX9472JNWDR5t4r52iSZCbFMrMd",
  "key27": "EbWAbsyNfiPst2xhEk5eA3pdJ9L9s4Vtjq2X5DsFfAo5kB4UrN36Rq4BWgXVRH5embvsUrqzeAqEE5kXiSYcy72",
  "key28": "3GFgY5iBaBEdbHKkon5PP9fVZP1MXJrKZVurMnBLThg6sZiNx6gWDkRX28BRgGPPnvkNg65LZYEMcQyfmF6EsTZK",
  "key29": "5wouhGRKNuQQtkwubTx4eKYzVzth14jarPro7cJBt48p3GjsDQV1S12CsM2X6YRkJakf3vxb57MsDHDU9pT748Px",
  "key30": "2QFCG7N9ua6y8aM2JjkrBRYemLTLYdW39whfZWX38rVTG6YFEkWFLM4Rm5KTZwBXLr5jCst2FAJFudkT9cAeVnsG"
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
