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
    "2RSkoPxopqeaTDwk7urFzsynKhJRNw7uDwUF134jEenGJszFxjtsNZukUjf4kGJCHnc5qk1xkZS9cVmLaqgYggyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCWs6QyWJXUc11NZ2f4uHN43FHUyCHr1qM2bWGcvGB272pLJKLYdRetmr6uvy4YFf5HL7bMdXHKfscupocvm3GU",
  "key1": "6192KMPsFsLahiS6iGQzQhS2gT8dp7cHTPHRP5aziNdLHq613hyvk9gWGey834GUeErDu8cofZ2cETm7DEHjdTGG",
  "key2": "3NLXzsWk4peXqrrFeRbxy6jYjw9T8dvcpEU2EAnuNbxW4in9sGVZYtJrRrVeYfdqhrav2M1hRfqMYETYi7PeV3jG",
  "key3": "5NCgbMBwbZ7JiZWfvAVpmCjpU3gKG6FeVs7dDFKjauV88a3qYtj5acVvizeBivxxwpP2FVkbmgABKU8M2RLEGeDR",
  "key4": "4Tjkj7sFHAQJ5iCY7hEE7x1uBs8w6EHWPsiSj7d8ezfMuy1GHWBcjGeHTbf81RHmKMFDUSyCzeFaoqEc6DEtUoPr",
  "key5": "3zkEEFgpyMbzEErurjTRxUVq1ws4iWUnPea1v8GHS9rSmrKG3b8Yxfas9XbvSBFUwBmKME9q5CQCoeweGTBj44GL",
  "key6": "3fbTXWXmHVVxdJwREXznBayZCL5MNnRXqVdpQHuAnivRGLPK6CQRrk1aimiYfahuMLfPC1dKRXQWC5Ugkgde4EDa",
  "key7": "3cAbM4sfPagzjrCFedxUEZUx3Mbemuy8gXqFVbZRkS939SZVZADN6CraeUfV6DndHzw8itxWnhbjfbm62uk28JVJ",
  "key8": "3iPRPEBMJkXqQgzvzVj9Sq1P3wnSj7VAXMhBaSvUmSwRV73onZAYhafbpBYoh7QwzYySa1dTGxghiK4aEon63cLZ",
  "key9": "4peLy8BpYhCie9mR8NvzaP2wNjwRSzZWCXaGVSVv6h2toj68xgtBQb6jzVD7BoztSboBoLf4euXNkUqjThf5YMJ4",
  "key10": "54C8W5PNZHENKQ1jPQDkwFjJJvoXY6uJh2c2bPVbGWcEG6ebVaKmakK3rEkJEaSmUoKK44W62dAR7sGEU5ir45FU",
  "key11": "2BKdhreSjSZz4W28CQuJq74Ry9jAaAnhueu2r34d4SKyeuyENYWVUWw6KY3VqRqCwan68R8UATQrHtrC25NJhMd9",
  "key12": "22Y6RUdahXjp6x4tHR1WizVJw2LyBs2dMXTxmr1GrUutToCZaBV9zV6KxxXZdjDd4pnc2b3GdG2zbCbpfxtDyTvA",
  "key13": "4VmpQmVmCjWab3eaDDSeh5JJE2dCJ9fEGYNj6RuszHQHSx3RLJxQ7tJZXJoKyHu4UdNGbKxF1B5EB4CvsJGvn4MX",
  "key14": "448tJWNXdYAmZxpLcQqjbWozc4NModAJvSsy9JyD4kYcDE9QEMuGFcoMjNvzq5ieqcLhfCmgb2CCRqQredCmQ4rZ",
  "key15": "66PfGg6NCevvdp4CMyCGxrS9G8zTRsk3YLzfnin9pHF82azaYTVJcPP9PxiCyGniBABFCHjZETVmEgwe8cuH5dta",
  "key16": "2f69sdqiScrXtonbB74gsvYHKGnKH9aSioSVAA9QrvghVbKm2XnAkkAECM3SCxgqDZ4pqBdqQdwejNJ2qvicwEqf",
  "key17": "5USc5kmbr6kPc8WskhJfaCytscmRQStiybtDeqoQS3ri32u3Q1f2H6C6CGTg6QTmGS8isC9mfaSifgufY2nUnEr3",
  "key18": "5gXha2tKAqRjDNaAU3UthTp9a88QbcMf7vB5zVgtwSomREiX7EjFPZFEGbYVg8p6zrVeSrczqX3G7oLCMNZEDSwU",
  "key19": "23ZReaeG6yiodquW2vsxHWamSbpWDeJzKAs6f6Ke3ZQ4jcNcUeTqpSCgctijNsMSsfeXcE6rkAPRa35NnSG4QACo",
  "key20": "5WkRuYCrXTwo5fffC3TPZYQjGKUVSmSU4qFQJE7nSfwrQoqBX4J3RJpohjy5NTcUA5zE2x9nEisnXxKf2by9JfvZ",
  "key21": "5QYwLyS5RJdb4PRupnkAQJr2mA4zrojvC5xRF9Q2Y3bEWrCoEmVssDR6F2y1UWJy3jvZsvVZ3DoxVzBr3mFJSzRv",
  "key22": "4XSrhubA6YvGuRdti9AUfq5AiFMMkCAQ8YmWnTZYEp9oegj4gGShB4ncEVfYg2N5fQeW6FqJj7tdQkWQ3uELWBeo",
  "key23": "kL97EgyVsDtrQRsZT3eudPYcU34RPs7M8NpPm2EXNUXGoneZTH6fr1eikGeMAi2GauNXnN8NRWvRQAm4bBBY2eJ",
  "key24": "Z4a2pKFE248VryViWb91oHifeVwrfxz7kik8zRTKNJKDYMPyz9P8LJj2GpMDascmC1t6GnYmc9tiRYuk4EzQw2y",
  "key25": "2BZWxxAbPrJ4SV83jPccPgGKDCKrVWh3b41Wt43wEmb8nQf9RsjdS9FHoDEu4HP2b9ePhnjE2yyvZ7HV6Jfpa17J",
  "key26": "5NsTHL2vpqVY5neytDUQPBfmzNsva9fpupQQHw8KJtfnUaZ11Q5Lhr7vSwZyDVXYj9Grq2NTdN5yTatH9NY37mNt"
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
