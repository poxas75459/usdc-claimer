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
    "qCZXLukatqdLn2rKqqfj8mE4qr3g22ybGKgakcs3xJJ4jVZzjtc9A8fCdUiQfVJtiqZcBKC59yVUxtmVSrnCS6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BssvCcYhQMUhT7CB2VaqxmBKy3Ha4uvdvttJLnyxVKenrW1nz5q47rh5u5zaVadmjBuQKiDPDUdzrrLdFdLhHRZ",
  "key1": "3ZBMBXmXGfCzjeugR6DUddDU4W98i7jvUCRkaduYcCcQrLWJ3c4SbpRanQDeRvYkt6hhxE68GF9ve4D5c9gnBxGx",
  "key2": "53hpxaGfW1duDkCuR1s2YHCHFA9fLbDEJ6eFeaBT84F4Sy8Ujq1BDHhf6wufMhiaa8EATfWbSfcjTbqhZG6GhWwQ",
  "key3": "2XQcdtQt2ZEpU4DGCgHKa8VuRbNB3AVJRaDvH63z59jZEuv6oU1mTQS2R1sqgaksGTauCg4YiQCaE9vYxaEHCRJw",
  "key4": "3k6z2x4aK7JQXrLd4jvu7UwFmHw97BkRtgy2sVEeVoFTm3BkQMqkeKf9vZJJN1BB2QDFWaboU5pTSZWpTe8XSduZ",
  "key5": "5mYpTv11Hfyr41W1sG9i7Dpar3G6BRuzSJLDqGDCJp8heqvnqCbZNSTR7fNJ5a5pSXtzipsP6i5ea1KCho77KRVt",
  "key6": "65rawB5gHLFUkphD7QafEQ3L8Q7yc42B2V57PBUtRSmLqmpomfk3HR8Y2ZA1kFP6H1H3Yd7rD6rDjamokdUD9ZWs",
  "key7": "5YV95tf83K4r3euqCDeY8DngdA2Cm5zsggNzGH5xbafxHQtFH6rNrBPNB5ThWqegW69iEAZFVGpBJyKreGNqyVHn",
  "key8": "3Bw5zdDc7VbSVd4GmEGftLe529wmtBZo4TdcqkzrkXvJRijSrF3GQqRqHuFmwZVf2epgFjMzBe8p7ZscGEYRcVH2",
  "key9": "2n81qkJ2bb5nNscMWzgSk2Ev5nE7cKDAwBgZnxukKA8xgsgVHqHtJMM9zr6SuQq42qjcpDVh22ivFJSnnyeovaum",
  "key10": "2otj2CFHb5gEmXZzcWBqNy7yZy4WGQQMBPWBQYY4epgSeQL5Ns5J79mdmCAkAXe1okgYaPfQkdJuLGrSoCEe9KAm",
  "key11": "3S9tejgkRnjqau64wsKxvcsAJ4GpfmNybgviXF2y1uWRLpCqnBx8Eg7Li8yPvzPpHLXfccbdBVmZcHCckdF6Cdjg",
  "key12": "5aBX7c8t8eFjHiYitGaWyAU8oybPRyB37cShM8XgiQAz9iV9NWUeppYVZvaQZj74QUczR3usFRDkSgjZWoUhU9fQ",
  "key13": "41b2CX8hgcuYaCi2c6erGn3a88dwNNn22Kgz5mvTMMJX5HXYdXjxzzu2tdejoRKcFXWY3aWkGVGFN35q8PMtjfX7",
  "key14": "38aoJB7huYnyzbeGb6R8jdcER48MjrDBXgLorXooRvcfhsM1bRiXNX2jJmAXdomyxnpkk17yPCxVYAGAawWnSvWA",
  "key15": "3hC9TytiWWYu8xdEBatMmSFoaPGT7hJQcgM3vQNAd2WsGHwkqC7xR5yNVWWLkx7eyjfVdp8VXdm7W3B8FhkphZ1a",
  "key16": "5wR6riTLk2BL436fPvWa3SmJUi4CYHrSwNfBuK34rDcqTGVPAaGn84HJDuoynLGHtNJhsxT5yf7R7Gn6wRkXdn3p",
  "key17": "5UUe6s1zGtbjoLwiy63AKavmkePyw9z1PxWrZtosvnB76rCBBVycYpZXF4x9KYxoRvCxey4gyLXJKxFDhjEotUa1",
  "key18": "53F5k8EVvWA4gJe23qtVWAbN8YCtmjpWzPXSFvBoR235J2NXtiFPiLs2rgLnpHm9WcyWyS3amEBGgLkzgEZgL5iQ",
  "key19": "sWZvq5DjCwE85wyTytzi9zSh6KpZ7CftfPomFA9sgZ3vgjvEovgeear6uwFBfo31ZjNPZKUbeMpJci1QghvVjDc",
  "key20": "2ogoz8iGHEPNHMkvhC8ZLyUKuz55rEUWZ85itEXcpcsrNGAr4g9ZteTMcZ1qrK4v3crj46S5PhPk1aHdConRB4xX",
  "key21": "2AnU9kFfNaQxcgaAXT3eTBoYoTCp2txNK9XgFe1CaZLvXGgkwgU6U4RpjFTebGstEqtEmeEHBHZprDoSiEZhSgMQ",
  "key22": "2rjj5qg35ME3dH2MsjL1QottUfS8mg1G48zZjEtCd8vQZkfJXPmULYESgj39UcM7GKAerQpWcMZaM3Wo2Yn2fSxm",
  "key23": "3yGNFR8yqeQcB3QEHoQMCNxn948jsRqjpcnvwYESKjYbXDCYAKveQLQzvuxP8eycr8dWdjmZYsech2Mfi3iFYoVB",
  "key24": "59o7HLgtXfEoE2a4xEJQnAiDBXKXADGoVy96C6JVeLWk8m9wpVd7Pbw9RLSv5Y8xhWQCWJ4YqFQzuWYbHUHatKdL",
  "key25": "cBJRYES74QLSYm39XyYsS8YE2SVDySf4VwNmgHGQAPJPY3XGQbdvMKrNfM6zXsMpHzeEwGKxgRYrhbqK2aweaCC",
  "key26": "42w4K36Rpy4k1cA5bZmAip1e8eKz4GcMFjzJKpYNLwJgDcSndhuRiV2v3KmE3r1PQ1o27yqT7fioVVh5wDVdkGps",
  "key27": "3aM1Xb1dDgoCgY3Sg7B2wZxD2iGtvURq7dS8xULTZ2hiCkmLLW6SEAk1cgGK9fVswsu6STFcUzbz13qKqK5yeXE3",
  "key28": "4A8UV1KjGbzBwoDKYGq1YxH8QXBgJwFwB3L9Yj7pYeN4Q7zAT9ALZA6N3CLox5tcmYVYwei5DYg5ixPj9qGwQ6Kd",
  "key29": "4X69VZZecRruJQaWsSG3h6c6B63oW7TR5JJpytqruoJjavLgWhphJQtZZBp6LRAoATZ8Hp5Qk1jahUCNdVYrrijG",
  "key30": "38Jqx4hY87ZDNCxptvKBgTD8WPxQQ7fabbBdCEVi8NkA2Eb8yq9jhuaJPrzSUbo5QkMEUNP9mB1DmSEx997Ugs6Q",
  "key31": "2yKtEprGJVJLYS9t2CDuJG3u8F7nxVN4fBbQG52gPJRV8VYXcTmAXgxhFHtQJBLGPrim4qTpTzD6SPQciocLeNEy",
  "key32": "5wtWUfPLdGoFcPyK9X5bgNY7kTT4km5Tb2actLMvisrk2713ckfr8n4gMVcYy91Y3Vpncgh1bAtwWq9XfhiFL2EL",
  "key33": "2PBCnUL1SQmJdt5BMR47Q3U15cjXrXmeN4F4FNGJT3zVjtWQccPEfpyHAwTwauJTWt2KngApGZStkWUV4cqp2n9f",
  "key34": "3WotrCSQ23jwdj7Co8a2sfk2j9KXDcn4xVSAK68mdM9fKkPpuJLXRUoTVTiyit7qcTdmqNufNYn4JG7RSipFhK6K",
  "key35": "6Yx2qvcw87ASu2Jemu1oTJfZk1nc41AounEtTKApetZD3WbGvh52EWRUn1Zo5SuTXQ3ozsj5krvRSJeJFLaN4ef",
  "key36": "3fPY7x6YSsECB6UTWmguxqAuvG5aMjD4qpDwBoZ8zehymwUhKtPRaqBZT1rQ1FUqXWyRXsUxekcaQsgxr7kAdU5S",
  "key37": "5vHQXPfKmxFjnVKXqbuqHaZgkY8SLSMf7CAJSFwydurEauDuojGH6YfGDpBAZ2bWzEFW1ApfLKuCNY2zAYRhTtoC"
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
