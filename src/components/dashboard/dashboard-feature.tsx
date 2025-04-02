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
    "522pjWGwcyrDR8SSW3355yHi3WpvxTAwwNy16fhjQH1tpbk3TtqbLTbux5JWZZJxZWPZ41aZJuuZw1Z4wo6jdryw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HK5UACVn6VbfHnTW1ELKzJtxg9K3uWHWyFtQ7BWuXzrEEKnUfnS62Rq9RvMuHiRXv1JVkaKUufUvrvHpdJioNJ",
  "key1": "3DtyZy6rRLsr16CLSd3x8g2K8xQw8ZMHjX52aZU6Z1qdAjM4ZN5kkNePrASCb5f1zCEyMfSQCopD7xam2jLcsPuY",
  "key2": "6uTsfHVQgXDq9B7sB31HCWRBnrVNpQi91xY6i7qSfBUpTzi4fQX9CUZ5YFxVDatUXGParT2uWtGhj5coXX6hXZ4",
  "key3": "4uaUSw3cheSVPPihjq4PSw6hdZKSnjCBfjXbeHunUbW72CeM2weX4HDPovsT9jxfK3Fhpru9hqHFESyeUhYfSovd",
  "key4": "64PyCRcWSUB3m1EyqwBPZ56j6Q2RvJDvJTbDjJdofvrL8hDexapDBGastoWjHRKDVD2x7H1hVw882yQkHAS9wpFP",
  "key5": "4KEbxX3hNYj5UTSudbhj7GcAetowLyeqRnQPoHG7juQ9aYy79BNDRSmmy6w7mUuVYehQ4eDs4YXQXcyxe7MvHC4h",
  "key6": "5SMt23xWbRPZ3tN3udyiCU8ZvrugKrHQFe7DLKiMXYB96F4BPczX8kK8tyT8qZrEBgzsQZ1f7T4n2g4EvG8UUh7D",
  "key7": "twHdDdJHzgmS3EotE1kSAhw3qjRWGZQbvwfu1HsuF9PiwpfbVySuTvr2B9aYKLksU5uByJ9SK6entUzUWXT6mAu",
  "key8": "3PDEPDrHbyCp5spXc7saA9tpviUsrZb6aQGEepMwSyJa4CoJxqSy9ptSC3A1PTSaaAYGdFWjVh3QaMLKB1zDz1yh",
  "key9": "PRzDfRmtYxjbg9EZL7BoLmt46NtkXvGqmsP7cGvQR43aVFNU8oq5zVHjL5c4u6RQ77dnTEd6wQ1gJ9bHed9zxVN",
  "key10": "5gpHLBTRbJ1iE3ohqqe8h1QFrh6BpkhYtzdVNbBZPm8PYRpZSQPkiD7AnnMuzJv84m1zpZ9NZrPzr7t9v4bEGv7C",
  "key11": "4L6NhYNoUztPEiaaNLTBFoGVRPPt4aMaL69GEdYLFkLHzqTcz2Ls9tVtjyaC3jVWipz8CS4K6vVUSpBPmAvinjGJ",
  "key12": "QYjz3P5z5NekpHv6QHRwgJNgTzfNApW7UVbneZJcTB1s3foyqdRmHaxyoFBahrNEs7NehtFfjGzXyr5fhtYL9hH",
  "key13": "2aueuJz1hWvkesUMCCfxfusEWye5mc9tEDiStJL6iqkpgYMG1QJ5qK9rBnujuzMYNFP3BGSb1akw4R1uEZ4aHEy6",
  "key14": "4g642rSemc5xhd7ZoBfFiX5PpCdiMQxJTwPwvYrgy8j42vtHqU3j4w2cnD2j722g1ynbPyX97tPHeha2ZXharRbM",
  "key15": "3z3a1Ai2LUH4EiV5kqWoWbPLzX4PxPHhAVPXCX1egLyqLdUf8LMQdm4A1aBvKSzwxqj9t9C2Gwr3oqPkQ1ZT5DgC",
  "key16": "5WTKKTBmCLaZfMegMuapFM4XTX4aYn3W5miGKqgBnLcHTBPqP6DS8yRZyrtBbkLAyNf4hKtVApq3wXdtYmi5cuS8",
  "key17": "2psFKiwsex3DHwAgutGDSqjWG1zL2nwRGTNeSiYcCF8R31XuxjnUUvmf3bvTf9HxNwFFVXpUJdJ6nNYqASNWyScq",
  "key18": "2YZFBAmj7eoa2NGswZNMH4Z2qrP1UQfKjcSUnUh2EP84UCKB63c2vWmEmPjv7uP37kQ6n2kugTP7ZmWRawjFnGBo",
  "key19": "42CFpkRArPiFf73MaBzHJuAG3BxNfhq2F5RLLUvRbFAHDMzdHGVdGhmwgwL7HEDcbKH8XJrzpL7etFe8ep7EvBxL",
  "key20": "61JvE1FsDcUMjVAmunC7Te6rAwqTXaKYgjkxrDPvauUeXSqAsvhFDPeMsYE8divE2rFCUjKY4pzr4atMMudjcGc9",
  "key21": "3UD7kb91K2eQ1osohSwsAnqfKAPSKWmEDPux9BiRJnEPM9HAzWNFhS5yjWFPKMSpDK45Kk7txdmPdbbttMh7JxaM",
  "key22": "EMoYU9GtjbafxzjrQoxJs1cvXnnmjJuSYBQG2pE5xUtXLMZRkk7EqSBNRdDZCHcG5qaB77a73X72jactk1Fvr7u",
  "key23": "8YKgWVGiAedkKqqwF8unbA2wFUXXujjzhKgsCBbGUUPX4bKVFyeGEpZSAYao8dmFvsin1DEQ7Sp1gYawnJdAPLp",
  "key24": "cwz2gDdRBhM1eZJ62PJ6GML4QwB1EgQ8eRoCtpaFY4Aebuum6ZgRMdrXMLHYq9BBoVwm5gfHDq9A9ekDH1ZHriP",
  "key25": "4KmvoHv7ihnpEzHSZmkqyshdU7S2VLCQ3ZjSSQgvxDz9f5giQWsAjFQNWqKn9BGQF8L5JnUen3UzXDFatHtAZAuj",
  "key26": "5cvhQGPNLmpq5ikqTuBf82787Eogjt6x7n1NxEqGpwTSKU2az37eXWzbwFj4ExeUfCQcZefzQf7dJk5MeDgNQqiZ",
  "key27": "3YVKLbLEfX9yDnJMkYG7eary1WYMBYKpzGLV3vu3xhVe7iTcLkaEtu9HiTV2Ho7Ny4tJC6pnjsjrADu8Fg7WQV29",
  "key28": "3J9qgV7J45yisPayESFrADeDxi5G1PS1AQPHcG8tNHmgoa6ZKLNgTZ45ZFpg3k5cL3zgsLGhvHLfC2ULgv4T8KMV",
  "key29": "3o1eYhQ8AHs5UPjQJDSqwt2jDb3DPqvpH4DzHo7erVV3xBPDPjLSkKKz5AiYSSJRdmFSTRa9kjw13bqmBf8mdwvj",
  "key30": "3SVjcmpy2mTXwCj7tHNUbcLfgyT1QrKMGyGmbgsHtCAvDPvCvwN1JUqKXCiotHbhWMmGYzstqNp5xQvaAQwb8Bnj"
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
