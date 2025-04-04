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
    "4P2bgJ9nrAofPPW14HtFduVsGXuAKWYMGiF8VnZGcfMNGuuytkbQN13htRuFk4AMxBDyHipmUD9jfCV8p1KHvHbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HT1wgoT8gRuvzLimQk1LkgzzZMn5LcZ96kpcjMWY7XboAuyKhE5DVAeiu7MzjbVV5WwhEneGHFMwWtB3MCzy1ZP",
  "key1": "3PiGMyVxt1muRPePMDKocxWvkSN6pkxoHUmQ3Gzxb1nv12hhj7wqzMtr7oBQQXC54k2J3dkMhfbuV6EZH8x1WHzp",
  "key2": "SiwbEtmYtS9FwQ3sEFNKNdCLiLY5SbfZfQW2keE3B3dydjtendFPffzNxq8egMWHzmx71GkC7HApBY2shwn9syS",
  "key3": "3uKPzuJTBW13zCs5r5tkRBaz3sFc4nyvzmAcQEXm1Qd9qZJvpstfh4nsZx1TpptcDvUvvDPmyPCjXdwdKVYeppA8",
  "key4": "ZUd28B98PnezRwkewMr4TwAvaYMEdiUTtqmpK7vWjxtm2Noqj4PG8YvB8SV8STNoG9JzeRV89L469KQTUonbvtc",
  "key5": "3Pt39e6bqyjoSqfSJ7GbafZgBhh4uXLeSo9hBhgeRQ9Mg1MSJo1wRMpJ4rQKBPyuK4LqSihpYB5E39iFTXW5MBqo",
  "key6": "2rW7sHALFuFkWmpAhnH2AnbBGpHU6VuxLi7XnmKvFfyAibgZ1Sjb7TdW8sJwVPZzgTzM4jR9R42Yi2dQcRLHpp6n",
  "key7": "3P4GMYYEkjY2TxqXUour2hT8K7hN8joLHqvfzVceNPddpo8qAohZ7RR3ti7RhWEYtyoD6k7mR3dWA9mQTWbz4ySy",
  "key8": "4qEmcMQ8B1FQzsobc6gKkANnceMF593n2X5mTKrapTztqGq3bXx5VXsvk43d9f4qWt43p4fe47Yi3Yn68VgkmE7p",
  "key9": "5a34h1NkGvD4mJktXqJMPGqwYNDJTLpzkE5eWAZgSkXMT3UU2VC6nmRwzGEHmpxRWfgSYN2kiPL8VnUqdpg8ECdm",
  "key10": "4qCQE9WNZqSqcor7yojWs3XFEW3vySqPWJ9NB9ej1k9vTv8yasFyPKj6dCGqHxH3gj8KNUVf2hoyucvhP18P2sVy",
  "key11": "2SHjFQEJ2YpqqZEyJGCKXykABR6yfajQzkX2GPZBhRQ5vrx8fDQE1u8SF2rivL6pKwPtSMT9qgvF7Vtcm6KhyXuF",
  "key12": "Bumez8yooqDqJTw2TxLugQhLk7x7P7a1VDbQnpYF1EP5nTAAufds13srTuCe7MNLK68c2Kph6zaLDABAEWGrXoD",
  "key13": "4QJSRwiPZrvoSyD6XmFWZ2HTdkRAScuGmEj1k86Cg4k2urEdJUhNMSuyM85Evg5jZkTviBWUcSzQdcoKmK8f91EF",
  "key14": "3n7Gt43hpx4L42LBCe274313sGBrrdj4NTWEk93ZkMeYroc2MxHTWendX2ayi43hDoMDhyQVeUNUyvx97Ainhm29",
  "key15": "4vgGQ7ER1UCFgMT2G1mByCm6ArW42L9xsHFvHUzn36qkTmTJrxtffJPaZYLqemDy3vX2LMdNbeJMhoNtzcnHhHqv",
  "key16": "2VGoLaeJokfqHcxLwZzANMqaZj2ohNB3i5PzQYmFvmJQfmGDHtrmy9YxSSNFaiNZTioNHMy2nnQDrcLHKfZH42E1",
  "key17": "28cPHeJbogRb9a8hgvNox3Wgghsv581oFnaPZdFxat5GvAdq2Pss61RLKQxfzvJa4hVTJdQ3ZFiwVxr7x8NFB727",
  "key18": "3ow4GmBpBx7txBcR5RnxDUdo8yBwU129TpsH44zPC3kqexRxzxXA95dr8fyASe5ZvawAQu77ZxsKcVaL7uCdtxSD",
  "key19": "3gaNJbnVfT4VLhrJodTNCAg1GXyqB4Uj3B7nukxBazz9MJ2KZjLwgE7QqXjDt45pY4bBt5wjoiu6rwCfSK7gZriv",
  "key20": "2AybGf8KUvUbbWAPa9bpart3Dq7hh1CLtVPihkt9adgADShr7cWUoLBs2jcPSkaLHXSfFDAUKR9zCN37bbQ3R6cg",
  "key21": "5XnYAVYjqgFQnUzwhwEyFdE28E67jcv23NXUVi35bu4gn7Th8S6vB7zretXtwC1oa5tAJ7ZS6utrveCqDiTqXip6",
  "key22": "5wCtfBJCxiPmG3xFwyRDjc3D3oXTBUPJUYreqQmcrxa9MMFsdaYq5oaoGT97zVZtfs1DW43jQnxiCsRYM27ApNTw",
  "key23": "34Yc6nLVJrqekAb1WqnkSHuu7GvZpSHfCY28PHVWmjmuH9b5D6V5tyy2SETqo75PHj5HjRLH24Xko2oFM3srHNxN",
  "key24": "5fumaYNHwdWGRX1JSeakJwjXPnDktvLsKtPf8S9VZ9dXVJVcbZWpvhJuPPZj8Xw7WvDTGKj6iqX1SKFEhEG2a7tN",
  "key25": "3azAQywp2S168kupH28as58WDe2aR5wckgjb1ANfsbX32iKoAWAGBAVwhAG3fsCweXsF7xdhHdmUgE7eXNjUyX3o",
  "key26": "2gfrXzX8S84LCS5C5sKq4Qoa1niLFNv2vDrjVnF3GhnstPE1bnNJ4dmyL8H6Eq2vvGK1uuq3BtoPwy17jLC3p7Ld",
  "key27": "3EjsvwSebSPiAaziJZPNeqPCzCmQyDiy5VheWnm6ehdR1SnogHCYcV7x68NUUVwJEJGoDmWnWC3P9ZCHScw2G4ue",
  "key28": "5z5eVCoqR3VVrzTnfa9MhX6QzakKZQmRd5c63cA4MYTxWbBuhFejGTA7WYrgLrJ7hGA7TQCYikVciJgR5jeJnGHN",
  "key29": "65AanqFj88FFNtrcM1j7GwaYHMUU7VVHCibhSjy5h3T3Qx8YeWbSGWgXWxtbvqbEmHpRUrtmEH3swNNvZRftYEsT",
  "key30": "4zZQYb7L1yaJtFHGaVEKYNvKtyLi94ZzR3P7ft3TWRvLNabJT8k9U3M3nUrSV4biVKJqiUUBRijw9WHDBGGagCMU",
  "key31": "3jYFCxdgwZULHXpzwx4KKh9r5su31vCAko9msGzHtRef9EjWtwN9VSmVPYmdQ9R78qGnXmx2rfGpRDuQrkjCprMm",
  "key32": "4KHkkfV9ZkwFZPANc6Qt7yP3RHqsA6gqcNB9HUkSaNQem6cfUEU6XjxJZs7FHVUzmZTT7TKTBcCvd6WiYXKjEY81",
  "key33": "5CP4A5mUt8sh6828rBD197WiMe2mcaMXE9J9B81CnJXZueVKMaC5odDHMt4cF4GxcuhdqErGLgWdLqFvnnMRkEYC",
  "key34": "bfmVHwrKL4XeMWkXWRg67wrgzmDzndtH3ypepQhQCv6ZizAJwG4HWXEEbaLrYdgz14g7sbbr6Fb28hhKupZxsZh",
  "key35": "VZgeYUDqkCEHdw3GZkn7oC2KS7PnwgyQW7Ao9nivzFEr2kqVQy8UVYMxqeyeyft2sCviJTD1uopRoQ5GDfTXzD6",
  "key36": "NNdjEFDT2oHVLxQ6Zt8S17LNaWVUJnqjBaawvJaWkCeFuSvYPex3p3gQiwP48Uua9negNCSKdqJtx1hwurKJeqW",
  "key37": "5p14pS5gqq3ViREF1vCBEGaZjKT6mdLYwkSGU8hbRXsYnK1TXJ47MXD7b7mziTNPk4swNTTkgJLDPU3vPBeenTMk",
  "key38": "g8sPSEWa4HDHgGHv98UWnDZ9GPFhwZSpxcBcUq8cdvqDYyinK36MEgA6nvA8xn283qqkhqLPhuaPyj2ucGeQoMF",
  "key39": "4mHK2iy9eSSXmyCbANQ7be4So9Z1s7p3zefzFd8LrUVA1zBrFbrF5xk2DFAQ77wi4fJChgvCwrPf2x8FyWrQvivD",
  "key40": "4e6QawtM1cj9hSVP8KyW4VJWHmRfZsi7YUai1smUsJPA1onzUqZaUkAvnrKWCZajLBWQncecturVRd7m52ikSNXL",
  "key41": "67MsoLagdtyorX6wDKTeh5YTqzUy9qATgFnpBnoBoFC8MVKr3gvXHEfCFqw2poUk8VF8whVZMwqH6HadaNibFqH",
  "key42": "4rq83Z8NTFvtb3SUFN1cJ3tYNvWY5ABgZpQGQeh6NscXTrcgoahVixkzFQpEroc7AvZJcFwvPPSESYK3ZGrinuSc",
  "key43": "333nNbKhE2CGgXHbWDFNs2H7u7sgUdA1erkJ3ZREwSwwtAcF1jWrC5a2dYZGuJ8AS13moPP4n6UtMJt2GvoJPJV8",
  "key44": "3q4Zk3wJcmcXmSZVfniKRSQpbRXkdNFETNKjDMbASq1GidXnMc5cByVUvPzBRhTW142Tg7osG4YNrjxyV8i7FgKY",
  "key45": "5MTmwHhB3THJZSSUw3KUEfGheQGzr6SX8EoLwafQcDXyiXHcaajk67g5Xbr1j8PZyVttMhJ3ZNkPKNSfkA2i3qjV",
  "key46": "2zHy4nYKqZ6odVeLpWWqH12SpBn4eD8LNJK138rH5Kioo5efoxsDYcfbBf5hqJUcn8zpix1kwCG3Lrus4AtkyxSu"
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
