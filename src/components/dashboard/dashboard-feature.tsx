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
    "3gtvavwUSvEWXihxM4uLmYuzVFSNdzU8n9PcRezz39k2sGF3TLPDiQcy2DeqPB5o4Us8iJtUUyU3UUowapMXbkqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sEmvNrpQftAmbwh4qVUTaaGJ4EFBn5rqQoi5rgparHezERXbBbP5j6NcckxwwL85jRJpYYmbwJ7yaaDHU8DgwLe",
  "key1": "2HaqZsXqorcbVixgWwLNFkaYmnsa23dqJA9iaMFXRcEyFepusbGFve8KyztEfTgvEzguGrvXyTfoK5J9MWKZH3jX",
  "key2": "4UDqdWVuwGw372zjcphus6THHRWYX8cC62wYqgg81dDWdESaGqPRe7L6C5ySfwMhebAVzE15icpJ1QWmAFQ8hWpR",
  "key3": "2oc2NKPAMC932uMBQSJ9thaU9mQJSCY7eFAufP1t4oS23qwDj5pHaRvTKWeC2B6UKpPqeCE6FPC7fwwHVVGdv49W",
  "key4": "2VnA6nn3B8rNNHLo2KLvMNossALhMdDCpLGHc7G2GuBk4Dz3BW61nMz8ZoWVhDAJwAoW6szmMsrQCVfokLYtz4ut",
  "key5": "5YYAaneYw4axnp6gabEoRwqMtxu9tY6zoD51yK1K54HoMWCDzuKfkb2pAuk9CsokkMtyuGzcE5DwCVW7P3zM5AZ3",
  "key6": "274HWFa2R5gQzg1a5eRJyfRjEma9ocDJ844R7cMGYxgWvZEU3ij3tpg1TERLRc7pxb1T9f39c6wNgBuidnnnKH7Y",
  "key7": "3EzxWd34tg5bGxRkd8kFVHAnFqfcZpQf7uWmgGPeFoxRzzkKbkvHm7cuYYeyEvfGseP49aXs71EPNieMfPnMvpAw",
  "key8": "2eVanJ1NHrhJv7rqcPtFoqNxrcxnRjXSWgxjjBfT5howq8PuCUAf6GnrJXwoAmxEkfzywaJqaKghz5SkZxt7HefB",
  "key9": "5ffzoZSZKtTyqpeQSNDiNUydWjRvqgroUyT963h88mSwDYZQzaifKjRDUfRpzLstknP22JZQSye6XwcoVPPvvs3n",
  "key10": "PAsRd1w8tfdkisRBSojsCGBmpbRS6nKfgoYzYeKR7jKSGtSwo9r52fsPjoT4yVMq3kjuC2pChzbxrcekGetMEWk",
  "key11": "2RU5T3x11xRMCjEiAJuFvjaAgHMB5sBibFcDnsz4aKPSh5iwBRaE5vEd7wr7fWq2ozrAQHrMauYeipF5kAzU1Lva",
  "key12": "62ueSqX5a44dxFcpXxpPKaCu1RfoSZYA4dvYzL9zubqGXp4G2GZyf8F5suyAFHn7emcuDMD4CB6GRq8kGzqEXm2w",
  "key13": "35T63mpTEcUPy4bw4F6VWCf9pDr5ZRibcbqcYCY89bv4mcaaQawxjEEfSLUS3hRXZNGCSUXT3xFqxTsch1z5fxfD",
  "key14": "5bthDhVHsA42H9rjbrqniNfm1GhsrHFpsHV5NyMVu7jiNtD1CVMv48AMpnsr15ayqKkCL2sNnEypurr14RBDDDxY",
  "key15": "GDdxTshBPXpze1vh7XKZ1hNqpsadfSuHDWYfm7oPbiQye7oAANB4ECY3oHgdmGYKn2PgJmGY88SgcCXp4LmTZeg",
  "key16": "2f9srCnqnhMGCAEVwT88hkhtkecxvoyUMuN4H3LgSm6Wq4NZoobJ5psWve1Wz3Q5jLE2bbzVKbMZNtG3X9hBTuU2",
  "key17": "41RPvPTnAdur8SnpJFPtYYYupuh9KhtEFTM8kg1kzjTKmsuQG5povM619b82sRbeHAbCYmhqyobja1crmB4TJP6G",
  "key18": "bvszuH7bRqXD8wC1Js1sB2y9Hg1oFvatphmWSu2LQkcJRTQPPpHmKg1MkXZsLV2d8AFrF9iNrxKeFF2meD2Y66t",
  "key19": "5wofQySU2VP2DYQ6mSD3CMRtcWnnHUu53mEzQvUXSq47gPUj8vhu9w3NUNT6P75aW7eLa1jk992i1oomBuQeYh2P",
  "key20": "4qgE8xjD9F6GxCPHWnUznbrPZgqdTPbSGCz3ZBerBKAykUrJW1sVhKx2j2SWjNUaZVv2uFApMU4iQg3qpPWHs2rd",
  "key21": "67YkGgzb2BFKRjGkfndsybeaBH7hQaZvXDE3u3Qw46q5zYZKP8oEbXbA62g4DUzQ1jb1S8U4zaLt6m1FQTmXSUgL",
  "key22": "4iLh3ePeMHsNJtwSh7znLF1dA5Cwu6hVXJBNgqBtqztmzhoR8UAoGHycNxQQG5W4VNhLcbp3u4QfSeviTwFdmv7c",
  "key23": "4NGJcqBF29GRAoeYSV9HqdNuSwKT6JckThmEP6NJyCDF7xDV1Wyd9S1sAjp74rAHfQ2tLR6ptNNyFSezJRmjvk4z",
  "key24": "2EyHd1mXuqm2Jjz92o2RNJCxx5QMucaByxcfPev8hLxJ35V3rMdbTBgwRXHaLhyZAa6jcwccqhJKHskcGiPRMMjA",
  "key25": "5ZUgtxBaF5iVi1yGRamVr7ujKnHgoj6JxPdjNc6ZbpcNvAXQw3R3dRkUTZA3ZmRft2Fz1FP6ufU72NqkUHHjfgRu",
  "key26": "62MBpiETXF19dgdrEhjmfroJDpxfkRhjQAUgauT6TM7pVEpHQymi3o8i9mbf4XunVWHHHJr11FMGgaXgf1swY62K",
  "key27": "4FiiyWGcvtYguHexiQn4gSfgQtmE1k6eKecbovVMXLZcTm6YQ9oRBfFbdrkdt4NHht5C4gTfbxxYn2X27fCZUF9f",
  "key28": "3s9RRnWL8VLxoqr96hDTKJ4adUHg7t3AC1X2Qc98Vwieypqj5hiezski3HH3SE29agTkb5ndKbVDehn8akUf9tFD",
  "key29": "3rYbex1Ekr8gAT3bvrMHmYf2tk1orVVVkqXu2Lm1bmTmVzXTLQUHxiZi6zbJ4yT6DKRL59N2uHaTQinor4pgUnAN",
  "key30": "3gscrzANakD9XrLMBZtJ5vTgNBB4WZFMP3qmwvq78ujCrjjkjXjbym7tkNV8NjatUSb55zp6zPmqNJtbXErj21vB",
  "key31": "4jy4YGtLxhnm7DhneEbHxRfzcGNMqL2oiTzSRuw9ywF5zG97sdUfzezc56bzCoR5kYxetw6uRFxgTAbPa288wiFq",
  "key32": "4ajJfvrwYZnnzjUBvdc5vVXMqKGwHXcRNF8pWaEhoPc33mnm9P3F1oskxPsCcgbQ34sqW42XGKPxmQe6hH8vbZWV"
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
