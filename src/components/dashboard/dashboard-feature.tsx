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
    "VM4n5nQJLyTgWqpV4gnQnF5MD6JPu1RL1k7RgyvaCYJB4aFAFDW8Nk7SYSBvcBU5ibGxWdTNVVioSrgxVC3HDcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brEEmHMSdcNhGJDbAFPXQJzLF6JTu6dBM25LmCxk1yP2SAVmxjZafzHoPkNpcJfvghVDK5UVurHhyKYq8ZtsFJn",
  "key1": "5wXaSwH7MfK7nFKcFkka3fC1KTkB8r6aZMyBXzT8L3GKQomiqkAEGDWhKv4u1CqeJguuLQEK3SQLUpM4Ahef8XV6",
  "key2": "4mCUJLyybiMHEH6xYh4zQJ8rEUsjMbQ6dNjFZEzwHU4HRD7mjHsqktXUtiv2wuFKUaqd49NCcd2M89HdRaX8MdTQ",
  "key3": "74DKFL3JD58CHqSPQpMHL3HfoZgBvh5MTFJLzjXkQddPNkFkhq6KvoeSDp7xMBpygJrzanVHFCEVLi1iijpYiEm",
  "key4": "3i5HSCWiz7KcVy4ntYiEyCBwVRfDRQTBBwcU4BEDP85mYA8sN5EXr8M6fAw5inyUJT1RMycHfPDsh9VU83Ukxghs",
  "key5": "5FXC3tVsU1rJn8PRwBd7HWTrVgtaJjQ9gVySuuCsty6e9369EYkBE5RRJmyhrjsKYwXuQDfn34cwgauSz98qxsi5",
  "key6": "v2avjLLmJagyqA7dm2b8MTYxEuU82fSkE9SXb79fQsTDwNPKTyH19JArbHK6zRqJe3xTyBbxn3vn7qdfePFKGvw",
  "key7": "2f172jG8Wf7KRiBsSt2PGFCo3zDUuiqLQzgAPo3KqruWYtCPXrjiTzDUSx5UZf31yqRWbqdstYSxoqDgNPZxf5Su",
  "key8": "4bzTWFmiixC5tgUwZYhpYerFPePCEnKaUgW76AvpZj7LTWda6zZNu8Thu4HkABRWe26pykxDMFGKikiCF9oYbYjn",
  "key9": "45NJstSzhBp8MzRYw7b6CMku1vfZsYZ3QfDcPAKPs1EnUUnsf4jpMvWdNBKMkf5H7XHyo5b2DxTnJfLxu4Zy1PEG",
  "key10": "QZA9aF3oXD69bkxCGZVzEEHKkDzyMYCaX5HeoiZ7eLccu8wfaAm86VTa4CEugFQpCZCrRCai2SagcBZhWge4hQy",
  "key11": "ZTJWMaQ6x18bhRNPQqaUj5QLoS4tNktyNWRzF1MMXdpPapDgLBZFBLxLs4Ze34FMsK7zvb13PGCDrdGphKcKPq4",
  "key12": "qPBV6iFDze9qh7ozaPm59xYYSU7m1XKjUTHTtaquacdtbjj2Q8Rimz5ju9DtU3dNqLpAt2pMeMeFsDXTM1ds8wo",
  "key13": "siQnU6r4MJ9zcjrvK1cq6SkgJGBxdPMS6M8FWXDJZWWrHXE4jKFyvLLDZGH3kxpnHHUTHZrP88ysyDCpfEgji4j",
  "key14": "5ufiywYNQwEiahdME3da44wzEcvpWssViH4HnBbaF62fbRCFKnFVdsqhrbn7Xuv49iRCdT3Q4mHC81U3zLuMaRyA",
  "key15": "3KRthhUVGnpcAxbpHkGQYamHSjWFjkdyrQb8hZgHta3KbJkacwV2Y3i2F6NsTQvprkmFAyAgW3dgxMtjHPicPhK9",
  "key16": "42yHkktAejRc7SkQJAvBQrHL2dUyP6HLhA4AF27rfwmBsztwqn9f3oRgt2L28iWtrMxJBVonAfvY6xovbpMxNoCb",
  "key17": "4CU7hGXHreRMAAKQanVewwVWJQKkL7S5toch26DLPvzqEw9uhW7RLciYU4zEmWXkowwh8b1WWmP4HZ2rvDUPyXV4",
  "key18": "z1iYsvVFCVHjVyCadRK8zBgHq6KpQtQXaiJSSXqaXewqn1CPrBrKucqsNGoLTaMNmnRpqAeEM33HgndRu994sjS",
  "key19": "5qTvFKjtC6GwhcYd6cCeMhKJxgA5z95xPzCBDovtaTZUKBYgvk37hywYbEzwTxjvEvpZzYqdUrM5n74u7GGMs6BN",
  "key20": "34YP29y3gr21PgpDjVmBXXgUDLBxx8Cp7BBp3rBoJZ3YdjzCLFH9LvfvfuNJsejE4ZfMnv1iPrwgx7ZPdPnNRh6c",
  "key21": "21wBM3Wb7RQ8GCBUPthtj34P2Nv2FPCUchZkDft5oxUhScYezo2NoQMrMmkdzwaURjaMRpzcgYGqAoALpDL93Ujj",
  "key22": "3o1NjdB7y5d2i2XmJnzeRX957fexSFFpRNwUtgGzUvdi8NJRAey51cGVeoXMdNCeNjk1cJpd8a3hPyvqat1fWxAB",
  "key23": "2gbC2wq2XZyYcsss7k9YzeadTAQja7kTz17DwnBEjQsyQHbtqXYtfoAnefKTNTH9wBdRT22yLg8WtkEZBpexo6Ds",
  "key24": "4ZYfUYFJkdeSbaqzPuCMebnkd1GuEct7uBfW4oZbiQUL4CDYWMipisJFGfdbb1KgWpj3biowGAeBLxtvC1uc2tft",
  "key25": "56KPEgrSV3vBSo7wBe3Pv7Xbe1Bkjung6w3T6cZrmKCxp4Piw5heFZyn7rSJ5hsfJUHnp2MfAQUGKG7fsPH9zDg2",
  "key26": "335aALKoJuNq9JWsUku9yESqbkQrAY2giyKbu2GjzFNn1nLeH4dTUvXC8TwKin8poKjGXXzPtgAEnaWuaQzLMBW",
  "key27": "XyGxjiVRQXQwAXjPcvdanwBJTQY28JZhFnoT5W8YtSh5QD3F499AeWaxH3UWtfVCgqkJmr9Fpk2JeevVrifiKZY",
  "key28": "5PwCAGKt9UwpnaX72C8cbviSRHZwNXmfbuKwnBH9RjSsRXaWnsTMboZNacpw6xPRPSqTsXqSZKfsXbftJ1vAyMYt",
  "key29": "3KhesrsJGL6zou1NPgJ4BFaZ88wPFaoNpd1f5okHfyAo4nuo4WpJpXztNPxRW8WhobBa9B8HNG1a4crS2sAJDvnq",
  "key30": "2YBYAayqZ3EV1i3yreVfuR1eWEitydfbXN4pHawE6SctE8zYQfg11TonxXZXLqDAMH8AfFrNV3n3peiF1zVVYLQF",
  "key31": "4PwxkWiRK3hZvKb83ic1f6S2kHF953eQwbXJ3Jwdd5stC4dMkGaf1xqMCrPKn58UViLSFqcuFzoDC9m8cw5RUsXD",
  "key32": "5Cnc7toTapkpYscy3xDmdg1vBVHoyBvGMHhXCdmAXmCtGkxtZr7obJqwbjssuHMZkBvb9pvPh4yjf2ob38EWk3L8",
  "key33": "448NYi2gPPiR1W5igBGTxhn399ttNtKu6pQhMJ7N38u4n8sfhuyRsGjUZX7RiM6tYEa3f1EXpEkt8ynWrx85zdcw",
  "key34": "2idYAjwZqbkaEBpkNDq6R8nWBNkk7GYvDtiVpRP8sqPGRwXVBuKrWC9ZzUbfgLPKZjSK4cWsM5jiJF59RfFasrJM",
  "key35": "2FW8TztKT3C6pNj5gNmfYJ9UaJQzwBHPgevNwFhGL2y3ZUWWjvKV6s6AYKE6YMsoNwyLmX7oNa7i3fbMdVcENkdV",
  "key36": "51X2PZe22ca92SL116mRHj863AsGjibDx4zxPMMixhxYArZXWkmdGeMwhH1BTt9XvAfLjqiWrctsJ5YkXh3gLeqc",
  "key37": "3ZUumo7VMyRD14VRkrjFC2XEoWVKSzws7K4S8THDkfyHSS9rWrWr5p7Fv5oXoP42iVetW8nnZkLUF3WPjhaHYq43",
  "key38": "AF9k5jCTgG9ABqvLXu4T5Jd8VdccXAoQoTXsW9nkpUUpad5uMzqABmmFLtxNGB4hMSvSBYz47q9pDMyruaEjkFY",
  "key39": "3WDAXt4VGhwQWYfRHMSNqiUqNafqvfszFfX7kHXtzUdjcbzN1rbRutZzujsaJQN2C8mgmRTsRYgaMrKkBDDyE3nv",
  "key40": "4fZnXnvKWFHwcdEBGaTHTYUeqatv59s9xiZ7o8rA9tpUoCr5ST8f4sakjS5aWp5fNpnxHgpZSboyCASifLuKCaEe",
  "key41": "2BNm6ReA3QA3RmqT5WRRrdHgYUZSmxPGfMFZvUd7eMuQuqa6JfdGYUkx6c6zVcfwZ6RnLFhqMgsFJ7UXw6C26kyT",
  "key42": "4ce9FaR4qz758acfhTYxq2DpowKCYJoLXvYR3Fzkwt6wBWSuK4Au8KEaREpfbdihMPrT9egpMpVU1FBXnvD4jqbQ",
  "key43": "5CmpHVUujLukiFKtkLVAQotny5vmZJqjnUnezhyRMv1p2AsWjoJfXUupWRt3j6X6vpNx5iiG9tdgR2n9vPzySFWu",
  "key44": "2mGhwmrvTLp7vdYGPHNW4uveqQeb6jaxxLw8aQzY6as3RNfvPoUGrYZgugAqgcsiFjxhZagWFWUZEX65P5KdFNFP",
  "key45": "67G1La9WfH7bj1Dwek52KGcijUQfXFWY3TxjAHxd7HmKxebM97cd2a8DnLrDXvzztzF68ygLJJJ2LKH7KjbvFwET",
  "key46": "3YnHgsgkiE92dH64kC4CneJKHWNhhnwu9VfpkXjZQSUtwB3chd7zQGnYeZnmVKrzHAQKAKrAEcob9bn1uxuu7v6F",
  "key47": "5c2xQcajgwXjUKi2EQ39BDbgNmwtcdg5vNXWxT2DyWLu8sGYWCTWC4U9ewmhQb5xWY6kCmRFDrxgzmepwe264bgq",
  "key48": "344CAR6erDWJsRQp6LqedtiAQZuQSVDc1YzC2m3NonuyT6nPJXTCD2PmyGfLZnAvbKWXLZ4ChTaFnp76KQMQwpnw",
  "key49": "43Rt3yY3mmSLG3YXtAeYPHS6kHauYG29xM5cTyBGHUa2ZfAJ9aiaXEVqU4KBkZnnUdKZtHZqwLwmJvJGt5kNdGwB"
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
