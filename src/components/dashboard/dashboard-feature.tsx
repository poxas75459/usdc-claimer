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
    "2pqcvdkEswE1Sw7xyFp94hAS8vWt3PqGQKjZFz2jGwAQBxfxKggRyAxGZn1MkJ9JbH4XWMHEnREoucRs1f4FAoNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHwrhs3w4MdaAgvZE8GyBJHHY4jn8q7KAq4GoxshBHCnWYsChdfndPSpoRk2UPW5fSfy2xxEvKoWXg6MQoypFTz",
  "key1": "4nSHSo9WUGo9Hd5XT1y68BJww668p4QFcLebMmRhDHTwuTFh4W9wzQ7PVZqm43LbrUfeLHmpALryPySYNuQJbJL4",
  "key2": "5FPf85jWYUqMszk4UZpz7eibY8satDT6tizu5SpdaucQZEpVoxqR9RGXoMtfaPhJADkXq4T2G56agoG6hrgxJzff",
  "key3": "3ZGE1mXwGoYR6Wf3xvmSHuxtDdsWwA1k8iBW1HoZDCJKSMsiGD2vbAYtKDESq5kWBz7HmK1EP7u3ic33XAJZEeRx",
  "key4": "f72TcU25fLsphv41uDy1Pqis6rnLw3f77FDH19nautoEtCcoghiKkuairoGiqLHBfzefV62j9FfxohdNAVPVSFU",
  "key5": "5zNFF4GBKQQU4sqBhUjDFRZ2w9gHkn3K6bqwxXtukkwzxkJ58UZ9k21r7E7kMUFwGDmcoYsk9ieE17qgvZVNJ9yj",
  "key6": "pAbv66Ekp185w6LM7C3obJRoUzZECjvkYAXZExmMJBofrbLVsp5iwT4kTEEVeAjPvAN3myWvpmr6a9ZYRF6gHd9",
  "key7": "4zkNPjjhqgXshgrjMdkVVzk3SnWbDK8p1WG3ZcnGX9S7VejeXJkeP8u5QLuar3fHPRc3i4Gdcr9qVX7hFFsvBKmv",
  "key8": "5z7GfBKVUyry75BH7AE2kjmJ7w8QXURpx6GXLbkfNsMK8ifmySbBM1KeCoG8oj3RvEVz9QZGfHCqD6wGzQbaSFiw",
  "key9": "X2pNb6FWcDPFmNDU6x5qmYXYUBVyVyyqhyYWxrGa1cQ2p7JbrJEEuJtMWkAQVQsW32JTHXPkS32rV92Jmna5nfe",
  "key10": "63vYFArvcaR9PJsy5AwXqxpecft725VXtrxrTZQ3tsn3Y81Qy8ba9UgNwamsmgasQPfxaB6oAUKyarcc8CCY4PfX",
  "key11": "5GcTuMymaqaCyrYXaM8ZX3jU7UYuNZW1FXBKBfEkb6DAR47HRZW6K7rTU2m9RBWAusiUDkfjsv34mNqwhaRgppVG",
  "key12": "t8UyKJd28GyogMTzMXpS4nqL9aCDgHDM94YPdv8BTmQvZHUpCfboaZUPPMxBhGWFBUuu3p8t9RKhU4iqQqXiHMG",
  "key13": "5SNxDuAuJienSWaA7XmtgThwTYYY5LZ2NeWRnRDGSxech7RgXu3g6dwcZWso6GrqE9m82chPSTsQta2WCh12K5eB",
  "key14": "5ec5FzwHrjQQfp6d2HKbZTkGA7JyJC2SaYVVyzwQTRJTtRPrUuWYBD3wwuaSNHPVgP97CuQeWBsCvp2VBkNkq4Yc",
  "key15": "3K2ZE3X8Mt2iwroNi9naniNHtXd4fMGQKPcwzzLLdjcEugjQiee6c9FmhV3jqa9DYMwVwbWCyvuaV8xyKrLVwtRu",
  "key16": "3uJF5iLUeSpxVjYqHFh2Pq9PmX2pt7TUxxQZrpiKLJYVKuwAN3F5oipcGjTBPexgvVbu91JCmTSnAQMkHt5AUJ2j",
  "key17": "5gTP5uLhtArvaxd3kBjdDFLUkgAmdsFkVs8hQuVd8b2RH2Jyi9bdwbgrbnPoPNgaPra5aVBziqgNiX9wi2zktCPo",
  "key18": "uR6myhZU74iSVJYpNjFRgztkqPx6H6LVCaMrDjEEfhiKJSuEVpknocCmuu1B7cTKP1V7jNkBrNWbc9krhjUeQdE",
  "key19": "39Huqa8LxJ5WUJjgLmDQhfFne9RCQxMzjAiK5JoTs6D8q2zr7QBRDix9Rxq9zuZVopNv8UfNWWrmew5FgCoRo7UT",
  "key20": "36Mjk6XuV1jjsXXkt9hP5dGQ4VJD1YUqmwfrhmvJPNLTjvMNMS6oHRovj6LUUswix9PG6Jqid3mGLxpNs2nUo9rS",
  "key21": "3mWp1EgBEdNQ3GS1YMRmJtsQcXK4Y9rUddYf4FuQYgpJZLUTpjh33W763p5nWzgMYghFMs38yWxctkbsVeWoeBv9",
  "key22": "2Ubsm34CBNwVW59rLAQeqUfAQFvMw1ijv4eCHVrqEvCyXCMeV6kcR9ZRosFJKYN8twbDYMaSYtRcxYWAVHcX81jX",
  "key23": "5nY8y3uNfqZXgRVRcJLSrxxijudhHZz1CkEv6rCutrdvYGTrZUqRH4yi8NfwFGkHssmd3ucfv6GoRWJLdjP7h4tY",
  "key24": "4KtRKrRockSRtUnGYSdDHe2BX9X6UTkuMFDLrEHQk9EtzFZUYZdViGMu8ekmpRLU38cds5qS9jTBiY85JbJnJG2S",
  "key25": "3if1eCLifsh7CnjHsTruiMh7KgQ2E6ut6LPQH68kKsq8Hc4GK6HTC7nULqcVbZXVcsXdxJGyySXijegVf7aK4BQ3",
  "key26": "3ELfiCqR2HDCdSFXLBhuY51bLMfbU49nMC8f39FJN6YAccffDkugiEqns7wxJBwsGB3VAKeoDM5YsMKVZtkMu4vj",
  "key27": "NLARXCtEXXXDA2b2298ob9r7iuG7wT8PWSxwmDuxLwMjt8QZ2gZvUwceZuMoeV1mwLwDGAEr1m13rqzMosZdFqd"
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
