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
    "5VnwnCd7DQFE59pVhwGxetNcH6QXbbKFociVGTH3tJ6kgF18QezF2yNGcEdfUMpdTzSTsAfC582cmVzU9hjQ2Nk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTZwEoBUfbdcjB15AdaGQdjqdwiwvGKJTMKDPNdqFaUvDq4USjDhgWPDujybaJZmfdb61zfLgkCXVr9iSX3imZH",
  "key1": "4KJ9buC4Qcqbtb96Juaq9Tp6W6krXjCAQpBu22Eb4f5NtB8n1MkPdSDGYUmPf17GPXodrHb8YfQ9UEBupnJt2uwj",
  "key2": "3iGCMXqFviSe3eNZ363bmYxNLqyH6nVUJKxiZr2P13qWdjZVUNBoFZNdErtuDDQtEowLpxJYeAvsYZTuJYrJN5EM",
  "key3": "MAph2JvLifXQCA3o3gqVDpNRHURjrsqKgqSX4kmwqsRxoqMxJFcy1JbZDw6uPzZxn6JdS4V5ZsvKGSQQ48FZHaK",
  "key4": "5xuQFFAYsU7wc8eLBPziu4eFt9fwdifNzZN5GmYWmnD6d9c158RfSrofegu7QejLXkSB8pdhSfHmxfH7tnBFpW26",
  "key5": "xmS9aLYr9vd1HvVSL1A3zh5Fp3NgqFhjoSxiEG8GTNf3TdZs8aQ3y9SX7uvuyBr9gTmGjAdtfW7ixyh7w15rxAD",
  "key6": "3pQmBxL114JhyTnRSW26nrJn93Q2ifwrS7mXXQbAet6FsrpxQVm61qfzS75K26SpDMNC8cUnTMez1fPCCW3WPVYD",
  "key7": "2HJPLLBTbR1sz9hMht4pK8D92xJJ9JwuNGsog4yVubKmUx1hMk57N7ZdcsZNLLZitrBHFdfp9WLps8URzTyq3amz",
  "key8": "4R3efk3qabCBSEM8qTdVGUDfxM4m5kWBa9buwG12jZQwdmKYN8De9TspUw3i3Z1sWFqZ3NPfH2QmrQrX3VYfmGWi",
  "key9": "579qD2P4wkiSdjt8y8qQBACSqn61Ezr6F5k9NvzU8FDLfJ4R7LsMhVKrpH54MjRjMpzeYeGTaWiwv2k91zBZRCrV",
  "key10": "3gGht1cRUpNUcYtRJHeWcEMYUh3at5Z11tYQ8rHo66JtbupDdccQbvmxpXNeCnoMp5jvJZwLFon3zfss1DUPHjJB",
  "key11": "4PXq8YtQeXavt8HdEkkZXcnzJnkFWFxqVVGzUjBPCCdmJcFX8Yo7VGyeQrgwjHRbVrPrb9Ev6UHNk9aKBH66dxRu",
  "key12": "22Fdvn9TgyKKffk7s5tMo1vmujXevRjJQCtv1zgu6PWaL6LgSZEPNxp3pjsKEkBGwnA1znennRRZEEJYX8srbpoC",
  "key13": "vJXjxnDgXQ1BEVsajXHD2opd3NwHJc2E13PFT3LGpAJLnoFs6XZuJ1dHioYRLH6onLshitpJ1BBU4qcEkcJMu4x",
  "key14": "3J64YzaCUVDt7SMYA4sWfZNixurxf84NuELszQfyUFbonAdSGFKAdSvDbuXtU7RFMKubR55xF9PdjPrxgWa9M79i",
  "key15": "3mS9ukEcPxcCtC22GU3VakRbMbRVrGMFXpS48JUvn7pCkynWRsu8AUL6c9RwSZs3qxBjRp6nxYKRgVFXFQJgwhw4",
  "key16": "2oWdEuSreqRE98Nz3KcA3PueAyA7t6ByZqpqSd4676oMvAg7btiTrikVfmP9veUwtmWhcAxEjqFjHnQcpCzVAAQU",
  "key17": "7DAZttFCU27thiC9XRNCSxYpG68vcykPdcswV9tewAYwDjwf46J2BQBUJGn9KKouweuJEX9Vc5Rhb3iWH76TXjP",
  "key18": "463fCuC6NEZCRcuw1v9bZzyd5fsg2wPr4NGAhyfF5xbKqfC5fXXEFZ7DCL2MoN4Y8LZQBAy3Rie77DJw9yUxGdfP",
  "key19": "64YRQuuCkqiALtacgN8aJJ3iwzEuQY9JhBJYfRgYCUQvXKLMtvDjr9deHpucNXZAajYKYaEYXAKJJjUfk7aTKJ7k",
  "key20": "4v82wP5kKT5EYatRMHe4ndub62xbcZptPdTaLmLqiTroEisyETYjmQ2pXc3Pxn2Q3HU3DXiRTsiukFby8dhU74km",
  "key21": "a7ZJdPFTnXCq5ig1WUdqE5fts2D7RgjeyCDDkYyGTgNjJ5iuz1Dc1peBsP8pFK9zVaXLTjgPUavjw1YhNVXPcPN",
  "key22": "3Aj7tcwB3GQJ1uXLKTkMhAiBju3bUVxFStB3LvTPpanp3j2XgiYMU3VdXBYcAPrAbEtS6aCYfa8GaKeypo5Vq5Ea",
  "key23": "4fErP4jY8aQcQpwV1uyYjzH3yhE8PZ9Ui95i5qS2ofoHmbzv6UJU4s294Na93rjwbLDCxAB31wB6ZrBFSjKJCbAt",
  "key24": "5C92qtvYLsJVAAwqfD6yKSYFti4fn3t8GRnfeu4rgundt963CZ1szKLyg4nSKci5AHy34A387xQLwigMm5gh4cUE",
  "key25": "5PrruqbxonZ2yXogP8qd73ERHLMNuTdBVqKEtqsqLwa96R1EtFgvfGBVR3x9Ws4UwCdDfdAdmPNbSgVv6NZM8FyC",
  "key26": "37HdmV2KKDCZN5m3KVbEYysDdwyv73QoJ5pKkfZjsJvngbmH2rcTYAxpJPhec6uhW5fDLunctjg8BQWqwfRvq4LT",
  "key27": "5JwRNxa5NW1gPJ3wbeq9REWW5jWEc3WDUVec2P9Jnat3VpiETS8LDP9BXgZKWJVTNJDxf88Sj9ek81A4pvxmKc3X",
  "key28": "5tX3rFgdYBiUmKTDVfnVq6RjrbzmUTMvkGgHDWWubNQzfFv61nGVszHHUrCecSPVhV9v68GRU1qSRvoCZ9UmH1w1",
  "key29": "37AASGVfcpcoWv9N3L4GvAwjudqF8kixiQT4SiBUazedmvyWhSgACCNfdpFc3ySgeYWzSa83QtpByNLwhjWa7K4D",
  "key30": "3zoY1f5T87dXFzhoyo9h6JEDKRm33tm5BEV5ChqN4dQSdqY4JvwLkcvHeiYH8Sj5NEQuiDJTfhy26yYcZ9KAh5kz",
  "key31": "29AMDXfxKtTxm6R5vUxgBuexSwDjK2j7tapADDHqLqjcA2M9zXK7sjyJY4iNY29Ko7u5A6tSMFseDto3tcvHjvC5"
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
