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
    "7N5XNYcUcAa5YmE7JE4jfUGfViRGbqudyVF4AqZibAYj2KBrh2k2wAzByEY9zjWsT3z8JddyXwxBd5irtYVgpNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KpMaxwkXVpXjTRMecT1eHid9EzYVM8BDJG58Ck21AczMUNYYKvzQjEPsJr3bajSHtvyzu7jXkDevQyFMX9mSsXi",
  "key1": "61whmcad3axAWgHxFvsVbGqyLFW9NiQ19Mc8z7rPEjqz9eqquW7oaW6cspJuqjcYcSUALuYANr8sjoJpwhnLBT8j",
  "key2": "67PosFHPUG8mGVrvficE2QHyGifXRmFFHp13cQLdHh9Ei5oshnfVQT23oF61zhkkDhC42EiNKnwGD9sqtXsEG9Q9",
  "key3": "f2ba4iE4GWf2g5mdEscoVjVncsDipWQADRKmw1RoNL3NewxTo7Mfaggw4xZd2mM8azBdarVVxbqB69jgQggT5cZ",
  "key4": "4QGjgdDJzkMcUZGpidB2bLSMXmkSpuL7ZNzvZjqY6JwQcBKKic78UKdsrj1688doFkY5Be3Ao8cRC8dTDt6aaR3M",
  "key5": "HGaakJmM1pvdRMvrwoAyd2ap8MPaCPbQRApL2w7Exbf9AfRwd36mnaujU17y7kgjRhiQno1uqFaodPLeuZbWL4c",
  "key6": "4ydRpnTA8kEmrWJdHfuPMDSGD6ZVtAu9J6bu7vmARNZZnpbaPbPjjicJiAGaEzjuiVwffdSML6LfPTT4Htj2K7x3",
  "key7": "apY8nNkwPDysb1gtw7DU2D4RBV7qHVu9oyyv9gKp1f4wrQyVbYho4crGu92X9v8DnJSJPvqYsznnNPVh4hEgcQ5",
  "key8": "2epU6ZR3onamQc5VfbBZqV5icKJWNyBPRCwYEnNtjm1VvMMjecCdm75nEKUUdcqWocQx2qyUPBYD1eM7cKpGJDsU",
  "key9": "5RchxJZ8amXHp4er1gJ9c3LafPfTmq15KgjMx4igVkfxvjjWSS1CizVQqzE8H7kizZeVWTDvQxvjxXjYhnXQNGM",
  "key10": "3RUPUvCsdsmDavhjbYazLXFLUsW9iutaZXgdr6wYPnmJwLLN7Pcr6f9CHzCXSUqCEpDoSgK8dX9d2XnhpkPXwEdB",
  "key11": "3LmhSzHYZUov8J3UstmJjXE7iZoKwzhv5f2xc1GeSJ3qfhWeqPD7jXCeXC4UcPR2hSVNJea3kANLVgebzrbAnJ9P",
  "key12": "2MuURBqPCerRQjzqu6KAVzyc6aABYZeco7gkXCXwSFKE5NFmwMNnUSrwve7TZX1qrFWS3dskp2qE1MzmfSqbPKyG",
  "key13": "3YhfkgQyvUrypLw3FMxqL2L4RYMqEUbbdbmi4GaEwa7Z2dk6Rmm4DombSy7SD6xqHSZY9WpqFqwZWhqv68pHdoxj",
  "key14": "3nAHRQkxqLk4Yy31gMmh5wQuJ44kvQEcF1rW5CZ62NVJLokxhSvYjNnJb47vB5HjUsuYownb1eRyUvjXsBm8VbZb",
  "key15": "5g1Ztma5p5iX4AM9xW1BwB7wnW7uDBmNe8EvE9SF8TKMWRSr22WpJeR2jSVKho2zsL6y8BwbDQkrqBL9z5kRPXxR",
  "key16": "4FcgxrvhGnXzxSij7uFZYAQDup8eC9dYmNSn1kR8r2jqEYMyHBjcuCrJNuFyPPbJnh3n4A6cX2d69kkxYrSwCsuP",
  "key17": "2Cd8HJ4FKHjirNyLvT8UuEku97qZSVBCRKWUdEZ4BqTGbTG6pY8UC9FaMBcycp6dLt9XHxXuJShyEPY7La66D4td",
  "key18": "3L5RFtxEX3QfG6J2jsPqk4tXrMWB9odbht4V1ZffhFfNe5DJBsSNnr1ivZo872SW3D54M2Ryjz9vnpxT6DV1Wrfi",
  "key19": "3cgEZJRVWYP2yCMRnHJYLmMGB9igxYaW4knqwQc3J4pXyfdobj3PCGZAEKFjL1uYaSSJYj8XS3dmqUd4GynnGBmz",
  "key20": "5TNJHD9fM96YPyh7vVfau5XKe75ReAZooukWZctiFQy8Kt1uZ7nivEacVvRTi9TnAAxSDyuA76RSosUnHi13oeQr",
  "key21": "2seKfyJoJPcyVwX6FY4q3ff8uE9iCU25rMVLvhttP6GYvMH2E6bqoUSmKsPE2JgoJJQLC1y5R3NVBnmYU7oBzY5r",
  "key22": "5s6GyMBXAUHdG4gYYLowKGrjoqMEttyK4GnJatEwKqunFBUvfUaCSHkM2N1L6LxRqvbhoPFgQLqSAGsKwLs5eupK",
  "key23": "5466iAhVduCCAWvmTbpu4Vc4RDuWkXYZXYSzXJgqkNjk4ng3Wcb3BH7zdmwe3n5g3V6En2bjQwtXToj9uKV9ExZp",
  "key24": "5YArDF6auYTtH3vs8UpZmKQdx69y5D7C7QJdys5h3s7KJGuHGZfjEGgFVEsVAyFGAhuCjYTPL1iiwkY4dGvVZ1Uu",
  "key25": "3y5JZbBjAWxJ8jHyhHj3kuinuZqTocv1uD9UU2y5LBiMH1cuWQaaZeGfJoD54nJoafDc6H9yHoBhemzjMrbwCKNK",
  "key26": "3m4CWmK8Z6Q2JpBs5Cdw617XnARPpwCNkyaCBUPrCuFkXE9M3QvDSsonXrTjea2bAxPqPrFh9he9zpd8rZxmk5VL",
  "key27": "4hYCEtMV6cvxb9QUfHrPCv12gewUxrboo1cD6iV1JM7vih1GaVM1CKkkFEvCYB5APCNBqqHYT4RhkCVQZNKbnkeA",
  "key28": "hVzwv28kLt4qFAib4i8EPDrn3eSDUzuR4eq73yGbSk2E4n5dU39BPs21EpFeevMN3fjhha6vy84AovJZrWNdfVh"
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
