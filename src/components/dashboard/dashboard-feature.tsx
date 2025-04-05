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
    "3Bxn2AymrhG8BHaTLVjMM8Cbmxw3ZP2ph88HiABdbhubBbD9RRGa6ennXwK7yXZ84SWfdzbCeyeSK4uNZTeZfzdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lp94H4D3EXLYt2vd4Dru9D9M2zNnxU9vJawzc7p4w67iiRKb9DZdmLVgLCekpGNjvfujhxfZKpMQ6CPmPFzFSqZ",
  "key1": "3oQ1muvVJRrQUy4yt5JJvGG9kxvtAg4muK5rt8ARtseRp5Sb5rsn4PtFj21teTrydZvmBJXKVWk8tku1GVGF7FGt",
  "key2": "KWsneYJxhCVCWEqEdQe7RzWGdVftX219XuzqF8fQ465wua7frNGN7cccWgEhY9SJxD5To1vgnsKFffxj365sMPn",
  "key3": "WSAWUBbUbtqyC4WSR4YJRjRRzrQ2nX7WzidTuhcxEgCrFLKSjroEJscAqDe2j3xjsm8PBfjS4iKRYY5LUE2tCKE",
  "key4": "X85HmyHHsPFbfqq4ykweZWN1SfBj78ftnY8KJYnJq2DwX9o5tf3fNQcc8kR35EP8xFvvWqdR6SLrHUEegqqsx4p",
  "key5": "4YZTNrqGiGzLj2urbq9mWRrim3DrQhBQMsFzAgN4tRZGvk5mnGjcLh3QVXawzn3SjAN9EM2WK7SKVvEbrqR5mE94",
  "key6": "2KBuHZRM7bUocFokGGJBwxcavwsSNj8pudJaZ29rZ2k7m47Y3977gcpXfRYAL8E3uKv1nkwfKB4iuCkCVS6vEFmL",
  "key7": "4NiT4iMy9ctdJhwBcsgaTUJ9PvMwUACdywmRwu4CRNMuhuL4A7JAEECfdkvHzT92DbnwPmqeEjPsqHR3Xh6XYpzR",
  "key8": "4HmhvNqfruL93RH9vxoTay91iHK5ARZRRS4rCzztNXx1kcvkVkzMVHQvHbrdtrK2XLSpdiKDvNUEpPKzfiEbU5PB",
  "key9": "5q29zmL9ebdzQakbC35npN4JcsstuYAaDkZ3fEpqVmvYSutkv8Ahe8PgAW16A6sfBpXTA82jFcexBt9wKN133uJr",
  "key10": "3wBgDEhzn6w2NfxfY5jGoDF4FjookH4NQXitzGJ8LidDFGUnTPipNj415sUs57puxe8Vv5MBZT4Qy4XSxgEzhgtn",
  "key11": "49oiostJJuw8Uf313frRMUtbcmqbACAVMBH8pVd3kamZ6V5DpxgTj2kXSWxUfXmZ9fcjjJKuB1TVYDVpWzMiuRfA",
  "key12": "WSPs3BGofigH6GCKMKh9a5MhLfvqU5ULL2Qk3MHqRf5JKyPotcHmfXR5mc1tok9AGi6csQpwymvoyVhC8LSnJf9",
  "key13": "VTaW5koF5LYWwwVvUt8vkPjccryVn9vd94D8Hxo243szSwHei36FPhBBwG7bWWxjCWkEgnMEyGBYuMcKRm5FYN9",
  "key14": "3CiYHKYNCzGrJy9gn8nfjecGwaLbsfniPzbpj1jrK77nJAXnwBrtCVsDQQZmKBLZzD2vFgGqTDRp71pqoKXMD7Va",
  "key15": "3ayB8rHDndjCss9HLpe3sD7rd2ReEZeGigeNYB1qssg1QQN3SJ4sRQrinSdvwMovtxrDLjUvXNWSV9CktoqoqSFJ",
  "key16": "4Pij8dGpeov59S9d3UeMYgxXBpu6guKY1t5eoJNRYz9WHG2zUMo8FhyZTKt23j5Smm2S3yKAhyJCMK64uADwW7CL",
  "key17": "629Q3sTZ5SkMubkxrW3kyBub2L179MSWZxCbYVhqX8yyqvsmwSDFrtDfgk8aXT6Ek2uNwSmrbbRrVuT2GRr7bdLr",
  "key18": "5y5TqiMa3zj2A8WTAfBt83J9rpJDzvRMaddXyEZ3KqWRBtWjCwX8KGZfZ7ReECmiv8iCR4P2xF8snUZZBB1XPYC",
  "key19": "279xJHJ8DyrRpYdRssMso4pnuMEGcDdZyyoA3nqsM1LCVtEhoa61Tu6aRNi53VNxVw4ey861hq6ad1Sh4hWERkif",
  "key20": "2uPjJXonqdzCfhc4AB4znfDJDZ3imdSuMdT53ht6nnYsfR3bsH12CpqU4f4jmXtHNrXHkacCWzfQWfz7spWCT23e",
  "key21": "65wts1wwaz1SysfuwtvryV5jcZC6dmXbzyTeF6C5dgkoATTXi5T3gsb173X8aNC1J5zWENWkwSvULY72zpQ85dMU",
  "key22": "481YZyGEmR1RLX3ewMgfbyX2owfkE5mVcNSEX8ARPVmSBxjU589rNwAbCEmdksmxo9Qyfne1vsSHm1tUqwp22rzr",
  "key23": "3NkuvFn4GtE9avvUZXRQ6wFJK4Vwn1q5LqNnpoHxRMUpFNTCwCePcWZtfAusEM156qKMUy551L6rbEBaHt2dCjKb",
  "key24": "5W56tGiLkwwjU2rcNERLnvVDexU4xwECnckrWje7zoaWoCfXVCnH3skzseP9bG341bT8QTCZuSnvubDNXUexpyyQ",
  "key25": "22MGQr1nSwEfEVDmQUQudnNr35qNUwhihwxNNAZs21qA8FnrA7E4R3wGvszJh8GXzMFk6uBqB2PjV8j6VoAXwVab",
  "key26": "4iDqNkiH63h9MrSnQqJc3Nk37UYwvUKnb2pbjwbrMW25YtcjEyL8u2LXh9a2YJUGPVaKeeUKLpY3apbWokt6eCsc",
  "key27": "unBFgSszNUWCpq1CZLnvqPhHqSz7Xx2GkyxmPm2kEbxcibL45dSapDcvddMfVodGN48kxriD8SZcsBTxRQ51NFg",
  "key28": "3Mr6nTGZzaermHVvzHqVfduZNnqzGCeNZqzcbDigUd5NrscwSURXf7gZz2JKDrkNMeVaLCYYbTDDg3LYtqJ7H2DW",
  "key29": "BgEfko5vhciLsbSXexu3S2FcpEgUM1Aw1z9u7qxS6ARyWG9Q4AAYWJdXmN8PT315P1HkTP2gAg4w38EkCyDcs7F",
  "key30": "5qRdwd5NmMBtdhC9ToDBTGv9TGpbPy7VobrKxAUau6GAVccsHCoD3bspGSkrHubE5kCY91ezrQCC4zhSVkzNcDxb",
  "key31": "53JMPnJm6iYupvCnDDrwNMb1AufZWLxKKCS2hdnq35TZnhwF21gCq6UcBAUGP94jRezjMu7u5siivL6RwijWKQtG",
  "key32": "4yyEcZ7f7FNTrJnHv2ETch1m6fRuxvwgSXfwYrAngfBYGCsec1L1swTCfNFcSrCjcdWJCNM92rUwbFHpKBMzgacr",
  "key33": "vkyFv4UCJwUjx9s3UD2eusEAg2K21k7qq55sZL26gKSJzCpkurdnMjPueBfDAynvYK87kXf7bPsWKXoVvvaAHbm",
  "key34": "4cnmvvXpyfN8i4hzeGPRXwbNKpkCuzzGsqi38fKjXVb1eFiQHfPxdQrzepZbkmTgjgFWN8SdNAZ1v1aMkAWpnKFo",
  "key35": "3V3BFmKMtdNARtaB5Wq13mu2LRWtcAChX8cwvZRDCBSjHnCWCgJupVmfUugNi1FP1KUxiBfYwDvZXjQHoq11doYR"
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
