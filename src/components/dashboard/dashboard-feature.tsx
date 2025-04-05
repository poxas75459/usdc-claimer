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
    "5uDBCAX5q6qcfEqDrdnpXGfUhEo9sZ5XZRxCYLaqbGJC2bBNNAH7Ni7rtW9zDCmBbMNYdqwf11GxvynHQ7tA9uU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66VM4SoNhz1W5DtuP8M4vTVQYEdeX3NM18EAutXtTswyK279uFL3AjYYGz6AiMruDDwT416djBctF8hVtgxjeGv3",
  "key1": "4yxBvimNHeYKkZtWv2e2gjsLa2PDXSKj3UazV2ZGV4JCjc5FhoFdY5fE3c6nGsdXB9mPQuHV6WpDN5NCWZUG1jpc",
  "key2": "5qZCzMB1cya31evCZajmt66hxPv9wQ4VpneJHVek9AgGGawxHb8JBJXzBMSGoSPHvZiKHBuEZ1xhCXB9EkW57FPV",
  "key3": "5FsCY1PWjeVaPNSGPFss42dg2gRBW4me4ZPyaiLbcrJ79Wjxut77d6o1QWrKUjGnTaCaL2XvaoinZc7H2EE6bKFf",
  "key4": "2994CzaoF1bn9oX2LK11MZ47YJmcP9K9UoMGTMjVSCFZEHFk5DMao7iEs3CB8hd79oaMJGUs65F8BVp92FKQRJRK",
  "key5": "58eXhic3hkvvykxA5RpkDWaDwcEg9DpPFS7CUMffsNsN1eSQ4gUaGoUaPn3RnH57fkGohybqFLwjv47BqYdxFHF2",
  "key6": "46VjgCcSaAk8oPU3PPNdZoVfGcJBWUBf4JDzmyh7sjpfdwXRXnUBX8SJkDTcJL7uLaXXWnD4qJpGSSZkXTvRXShd",
  "key7": "3uYHU6MAKudZnrDGa4wkpT6o1gzua5YyagCVL4yF6RFQR2ngDP2uHHou6nC8YiiTCoY71rhE8j88b8agYvQgM4aM",
  "key8": "3BdWdAb5cNeBeddYcM25xjZd3UckfK1AWjeYK6ughq2fchGkW9vyk8Pp28zJsaTiYEqt3jRt3AtLvWjQbtMupi1T",
  "key9": "3DnwXceT2FqJtQQXEp37KgNcqFRyoCpCWCctKAfXjT52uSRLpXd1UA9BfrmrYeCJSbzCkRM8y5VL81F7djsbMatB",
  "key10": "4tGUoeRyaNPG4s4XiPvdtkhHGKnMkrVq1TguSVV6ch4VNnquFouepSkduNFU8m1zqYFpSTURCMNEtY2ZMveX6Eg2",
  "key11": "3zvFTaoH8erbExdVEqtYvsmj2N5gnKEGGKs14cbbUGS7WJMKUJe76q8rr8XkhPYDizJorTegoiLmh6rYEmKpWQ8P",
  "key12": "4sRJvBD7DFSecJaVi3ZbSSsWPqA76YgKU3c4fRS5qf5man4ivFQQB3RWxkfvpxuTMxPKdZHNf2KvJZFE2x1Dqpcx",
  "key13": "3VoeEGaWzmixRJokrWB38DjKhTDrAUdVN5eFhSaJudLHC3BH4PGvA7Jv71pCG3v3e72WQkdvxsVsvR8EvdAxdTxn",
  "key14": "2fGzaSz2yTen8jiVo4DVbcNS11ddPBKNDSEPfqyMXcDPA96Sqh2yFz2kYGggwnPuyZcrZ2yXr4UpHk8GGQNpgTSX",
  "key15": "4MrBZZNMoSrLckchAmhpY8kjiFiqrzGTqLBeJ7NWLpyBfsUWL7o9G14bjtveZgUgoozyM19w8BCWH4wZk6rk2we7",
  "key16": "4VZYT4iRu8Ufzj6vWZjm7y3myJaxgGBJwpKezjNRF6QjWm1rdYwpWqLTdn7D5qXYtnVwK3xoPFCVYUWUrsD1YjBJ",
  "key17": "3DDtHL5yDQkHTTdCUra7SWL51d22gTynaJk3xNXr6tQeVqPWQRfjGykZ4rUH6vKyUCWbf47pJaeyYQjno1mdjscB",
  "key18": "3xh7wWhcDfk9ppiZi2usU7HX5QpnzdcsB4KkC4ypJDsKzYn2xQgaUZo1vHpjhscwJUuXv1TCSBeN8S5T51XBPXPC",
  "key19": "3xS5WA3qCtUFjJJUXcv5X62ZYgxQLcNHrjYcxtxee3zw932NVJwzXMG7HDUCEZyoJ1Xz58ismoWet6emFBMV412s",
  "key20": "2848gPNCR1vM1jXdSkXky4LR27wYVA8ff3LrJ8h9G6ArVKNa4oAZzpqpq6YAEEUypCiPrdoJ9hQB72VoXi8aXGvc",
  "key21": "2oMEChaycznaKmPn5rwauXW5DCnCjKzrWFsrMFBsNkK87PN8k26PeS7EbxCxach2iy22sxHrz791Hc4xchoaMFDm",
  "key22": "2WE9awSuTaoymWaLZPdzdF2cXVVCXZAPpb7LY7a5Kk8FrmoRcWSRpF2aumCHbaNHcyXcP6DrLyhZibrG42WACFMy",
  "key23": "2K4KLjfWKA9erZnCtL7YABieXy3BFHjoFitqe2ifzZuoef9zx79GB7C1HRTL2N7goGN57QKn4THHg3PDE4zFQfeP",
  "key24": "5uWbA1xAKr6aK7znGfWKTXAX9uqX386fRD1nrrgq3X9qSn8ftkeZ4nU4P7XkBornBvzyQqtHV7jEAScHrvtA4KkG",
  "key25": "32wvZAAk2vYj5fTx7jjF3ozeMkrLfBLv7zqM44688rEVfmxKNF3wVa7eMfH9vSkGHrFHhYYNqoyig33Xg9HyZ9hJ",
  "key26": "w6SX68gfZdXdVtqUmFg8jTnEnFpa89FirjzGKMoPotrxEfviT6JtC5UDshAPHyk1wQFA1AG2nswNqD2kVf99yGp",
  "key27": "9rYvftARdUwBqzNr3sPapCg1BauJDQX2oXo8w5eYW3q6ZtSkB4nEcJC366b8g35u8suiKn96QpCAx6S6oTh92Wv",
  "key28": "4R4xdSiG2t2RNviipvpcsNCinKyJVyJuwuRq2wQ8f44sSE2pKMNxKkwrFec3Tcf7MQ1k973fUCtaywbVaaNV1NhG",
  "key29": "3KVcKRdVJmq3NdJQo6rsgkbH747NEHZ3c7JuqrP8rZDFE1LLEtiQTXcc3JEqvN4vNv2gSje4HEEJQQrvYh5nVVbh",
  "key30": "5Yjmvv9xWifu1t4JQ46ogqeFqjkjfBNwfGs2gXU4GqeKRcrbyoACUH9NUT7q5UvwJqaKo17FdBmN55NWhYq8ezvq",
  "key31": "3Gt4aVMMtGg4MueqXWygE1HzuJqw3VVwrZLRsJHR4s3Q3vTGBFqyQz2R8Xm9ghvm2wq1BpkQVtivfogbMroZZJoc",
  "key32": "SU9etoX69Y16XNguHDGTbV2V1gTqcc8ouWpXBin7eUQgHaz6TgT6HvTufSmzWNmQUui14VH2VykwM2jXzGvFVtm",
  "key33": "3WpbNsMM4pt8xnZTaf78y25XtDYvDye4QKQZyBQoGNJsGB1FgkkgLviyzJq6Q72DGNXu4f6vFo71vwv1Xiyn6Z3k",
  "key34": "fu28q6avLHftgJJDH5poSF7YsunuXG6Hq7c77434rhhKtdP6CoubQUDUYiaaqBhJ1CJheyf46RhLAZKmtW4QqTE",
  "key35": "2Jg7sn2aSZrK6kr1n5bBkcnV7knBUSJu3aQhZRf9uKhVgES5Jo8FqBrdSKJ4tW2t6kgHTLxemUrWiFyLQWANXvz2",
  "key36": "47KiH5gJwNkcezng6UqMgUxWtEmN541EcxXFkdjNUnx5cwecfcC9hDianU3NJdiRsHijbBLSJiVg6SH6tVriUXUT",
  "key37": "5Hen7XDfQCxSKJLriBFS2Hx3LqnKKe9nebdrtXWKnFUTsUU4YSDPbPXLk3wDk7xbtCxL6x1VzH3HcVu8mxtLN2vD",
  "key38": "5pcF5zyGQYnZEAwPq4qSRz2fSKsrABXuQtcmybP8VNfct1ojLGYnsrNcb4p7r3GSbECwtaVHJHYVZk4y7xHBAtVL",
  "key39": "496G61aYF9RkeH7sk1DwghyFLootKZfJATrb8r2jgCfo2jTWBxAU48JEpZFrhTtdyJUTwz5uzvX1rRT3xGbn2rJS",
  "key40": "5oLbFbGm1BqEJWqE6gCpZGtFVoSc8qUPwKbdos5TMbgTcXd9ME9hasYmJuCEibqPDGxdNm1vhFnzyx1w6Tz45Zbz",
  "key41": "dsxoS2dg8ChjGgBaRiASAXbbVkmdTpRvVG68Qq5FXpEiYyPqLghL22LpmsLAuauHmanJ76PYSjYFHDrRyo3NMfg",
  "key42": "3mAeYFh15ckizLsaiJX24mr563Ht7SBuD7sjMScnwa3jLFskJXs6y2NUbxNRo2mTzPtfYCcC8Y11Q3rYqXeAtTDh",
  "key43": "58Y8ZfZBbQi97cGU9JKNPSdv1RnsnQwDzdiqZwbBipQZLUGS3P5GvTD6DGQSNtLmXSERvHWVEL6dd35AZ8HkkdZ8",
  "key44": "PWgahhJ1yXV9G6n4t5sKsgws1YLXZ98MRAZsKSfVQ69YvoSsi3nwNzNjRfRMaEs75BtbD46PAMZ5i9kcYkRNTeo",
  "key45": "ieU9jAGfJJZ1VYiERuvSPwhCbG4Q16MuHcXci5pLbTNk7pq9qBoKogxLuQZNGegd8BDppugxsJ7goPjPaxZrdbL",
  "key46": "4ygUPZqDhzFt6wawioPESZRjXCpbWvZPdbP5FLc57rszuhQtg1dpaLs7yFMnG2FQyk7eGcuHczubzzz5ni5X2oSv"
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
