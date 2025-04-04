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
    "5bfAv7Y8ChhHe4RTfWrLNyQR8CvRYFdMzcJrznD2JzXKQAm7jfTXbFE7szhGd9XUCyPzG5bQnEaDPuGNFRpkoLBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nAmhWwd62p87q7qeYhSQuZKnhKQ1VWm3Hcdi5oCusiSGuiV1PHPtmKzT9kvK9tT3MCSTit5Ca83cR8wNVFVqW7",
  "key1": "4wAgAPEMg7qom5bCnqMRnDWNNsYpovCyCroShCYdQVyDQvAtgJvvRUKzmTHkmYundov888Nwynr1JiBaUtdT1KkP",
  "key2": "3pUWspR5FB7RQP1MBLmenqbPfRXbkvve23dDY57aWx8rJpwxqsGzxDCCTpt22RHwk8c9NBNoRHR9vxQy8HwAKsff",
  "key3": "5K4DhMYHWmHKegFz3iFxbKvgZzkgaVM1ZKfx4Y5hEtubWPzpj1Cfm9GHR7KRZ47Q2oZ8m1eAkz6wDAd9k6WRpfEq",
  "key4": "5Kr5ToPfPTTSYFNSHeLykkTDiJVGy4yesuc2GnX8pz5WQExx9U3Ej6DwDEc2oE1x5LdfseUtgqoqT9eePNcP9zZ",
  "key5": "PMSHfypX6gTiE93oxRgkuAgXKrnsaUePBaMR5fW9VGNCsQUDuMbyQPP7Y2Y8JmDaY35VckDREfxVJr31evGNr9b",
  "key6": "3VVqkPcCMeKYjmuVvXxyFrihPj17w5WPLVA7N69LQWBYdNAPaYchubs61zHqdrApoa2Z8fy4wK4BN4fa9YR1YDtE",
  "key7": "5fZHarYnE7BNEoyVhCY6gsjfUKwXvnWDSZJgnuNo2Z1zrhUpAawkde2AguWGbCk11b9kZPkN4xXwKduR5tQhj4yK",
  "key8": "3AtCoBSF5WK9dAxUwYGJW4B3uF29nLrz8w1s1eNDexTXic4cdmtt4dazuY6aUnY4Z21c8teT8jMBwZFcNJQthZNa",
  "key9": "59wL3VJhSgdp91M8CbG7rGgU6B9h8kgALZe8dpL4qqtss4nz8o7zZtRoX1B4hX9i2kQcmpFo7HtS3ofzn6g8jAGL",
  "key10": "3qH6XqexS2tc8BkZDxmB8oXynu2phHBjPt9JkeekcjVERwUDiXuTRNt7mZBa3gi9LA2WyP5XAt6gmetvNdwjw1N",
  "key11": "4YkjjodnnUpTSVMnRU2GdVPVVETMCNj4YbWpWxgzNLwNo2mYcEhrU1oZrbMGc3n8fYBP6yHgt2pBwpmeQyRWHaCm",
  "key12": "5q7QcCdZq2JoYu4dJPPjZkQPq4CZxLBbfvbzCunadRwBQ8PL1HQxRbczGjLLw2u1TgoqLmMPZ1My3TkjbMhRtBSm",
  "key13": "4NbWrnQ54FPwY1mdqKStxoRGefVasvdq3wAXaWvLydnt51rE39baojEpjxqcVwfZ5hGU5dnNtvi96i3Kpo1Ta2Hr",
  "key14": "EuwFkHLD4TMWhz3TZZtqsorFcW17UmYoxfipba4r2vHTb6aRtgUPi2Nm4UakPTHJRQ1ezsuiotS6sk2or9B9WCe",
  "key15": "4YBzchXubmoFFEj3wiY7qGK4STWBr9jTbdNCX44ENKtew9oWH3zoMsKMQdHxLFdUXkBteVfbZFsriXCrK62nq6Sd",
  "key16": "4pgbCgMRM1ZmfKZ7vAEYJ6muokUXv3VAKFkWK4qWyh1nqymnFYkqoxdymktgkTjU1JtwHnr9CSbfNP4fJWSJ7ChJ",
  "key17": "4PvJRFJskaF4X3JLHhdx2MsGsCsYpFaWcV1vYgzCb6irfCyupLCcEJ1obpjtormohv5epKqxFgN1GZTxW8Ry1tZn",
  "key18": "5hqr9KeCAzrH5gmQv4SFbfYdhdMSYZ6EVdBm5LwEWnyETTxoGoJUMgMMTmrsGBnTBkjK2V8fA6dGet2FFrfNAuYE",
  "key19": "4XTEHjvBfc2nYLHUEEYzSiWKHrXWnBtc93yz9FngKdxFCbv9pPFisq7oLFHHYa1aAXUkaTwU8R7akg9Vyf9KVUR6",
  "key20": "45zZsg4eiLeZVpKWvsBmidntb2Hmnj2ke4P9PSjX3EwoEKEz1qgkQTCKvNSWM7dY4XpwcyHdZmszEAmF6QDg7ZaH",
  "key21": "55tFcefmmAvA9pJSK6e1veX7uWvoYzKfZ1JyJg5Jmazt6uL3ENkuqQJfE2TrU1ZF981xGMfkFny25EPDMHvBkseS",
  "key22": "1n4y3WhmerqcNj3QKZVgRFvHQZG6F6yW2ZQSBp1tEHafVoLRRpRpqt4Tejdnb1rkux26nWBPoLDFzPzY1tDHx8o",
  "key23": "4qmoxUfUrqLDsSfBNS5bX7yU5XLfQxA4JktvmcWYr4kZECuAjCXgRqDqTWz3raL4yDA8Ugz8BfdKGVX3eyvsvmHA",
  "key24": "5u6BfiFzLWbu3AJs7Sby6UpTxrHKXVL27t41LB1oSxTfrMJGv4PwTyzFy2UgKTTP9LtsFfZEHdZWgXSVeo2jYsGv",
  "key25": "5AGCZmdQb5CRFgxnbaQiQFCMFycAX2iE8DDn63bsTdfeehBUWr7we1rSQEgqADHdwWeF5orKNVmouZw9h9YRxc5X",
  "key26": "4XZYGvq8uoudyEjHDZQHUVgzmqeRjDQjehxUv4TTbuRTfuEehz4Bb1GrS4sCi8PiuHtmqRa1Qk6UTwcbA4C8Aeka",
  "key27": "3XK5pT2Ud5QGxysDu2tT4KnAkuFmnWTJ7ciF3C2N3M6ReSUjjrZ7zFvK9JaopQbeiearcf1J2u6P8sGvhr6WK3U2",
  "key28": "5ceqLhRGrdN5FNaC8BfyJaeSCj948Whpdv8VG8k3qmHK15Er5TzVJsMH6SdyqQehn5GoCmwLai7cteCFcTs8yEPT",
  "key29": "4fYFRk5iu3RtQYFshWMPszdm4rs5kvm2L41Kmu7wZpyJJ3f8zTscJk9sY2oUweV3jggCuvXsb82pVrfzaZFaxs5z",
  "key30": "2av3gbc8B9vn1YoJ34bSH7BGk7cCQ8qGv4fYpTS7moUUkXHEjbj3ZArk72b23PDfXDx6Mz3VZu14s25AeMhkwnW6",
  "key31": "eUpzEUFwSyPERTiU9KS3MbHLBGrMt95SggdbwwjLWeVwDW1iu9Q4APJqLnVx6CGaw7u9P4YpPEVt8R2hosw9Qcg",
  "key32": "233uHrGazWDRDmDPyxAHLZctj22KQp99XCjeRgnrjkM6fqxmdrCHQ7ezY8mswzFhm1kF8U5Fzju4Wspa7XaYQV6G",
  "key33": "3n7Kr6hx9Xi7vM1GcCpBR8SbBgc8C9mXUCjLw5UNeQvdmKXhHD51ywgEaPnK6W3uWm1fJphdet6fmgSgxkGniiiE",
  "key34": "4C3R1E5oC17dBrM8WXjmzhATWRFwWN8495xoCzmMvixWQAwKZLKBYfcQGGDriPnkWtGnTzoN9sJGqQmRhKoF3d3Y",
  "key35": "2yk8AjQGaMmSwk9YxMt9v6pDYs39y253eYneE7Zw5M97mwXKGY7mKRgoW24iKsYZzgobM838jvwC8bYCn7DGDjQj",
  "key36": "3pLMc199ZpBio8UtXc8y8DTJ3VQPxjgJi59Z8wPiSAVXRdXS42YbnnAt2viVuuVYff2wEGfoNaq7N7xfodb3Ax5a",
  "key37": "2zu8dugMnQLsTUeaEYn2DY8kamycF77zJAFPr2zPAV8kAbuuKUTbHmkZNiuvJNjzwsigk1CLAewc8baAccKvyMcq",
  "key38": "38A5iM6K5N41xxCFiRikoX522nSkb1qD1Rz8XcdzBBxLRgBkUnBQMS8gsSW4mB2BMmhGHhgNgqNCdfiEvoEDo6bG",
  "key39": "pkqmkA4V5PUHGW9VNDgt9vQSKZhPEJMeMbvanNUzpMTE14NHnwPs9zGKZacNEKmRkY2Dc24K1rvyUVMHgfJWGKq",
  "key40": "4ygE8UafoQT7QJebBSkSSq8Ps2DdqJqZ2XTTUbshSyRtzL7EHmvPGzg2TExX4rHcCqQwY2vyQLqWncFMYMCLTawW"
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
