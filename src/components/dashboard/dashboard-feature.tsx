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
    "TfkXU2SxoY9ErGTEFPQRRJLkvdc1cb9826X8RKkWG6aQ8YX6kbF3g75ZC7Pbd3VwheChF2ctzmDKtz1ocMmZnoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WEst8LjtMkig4tuUbiJLPaipQpVhQha6Um9HN6f9KZ6u58xPa2GkMAXVkpjienSsxiZrDrWaPBQRFXAmeazccr",
  "key1": "JhEbGgQSWVz8RUyxRHmBwMZtN3hPLNtG7bkxvCYn83giQfxrP29RDTQK9oaKQJAcYC8Tbw8DXtnzvWP2jY5k2T1",
  "key2": "58nAWWsw4K9zeZ8bxR94GXtcmUuVosBqQLEmqdvYNf5BYxq1xdJ219hw7hU8xZ82MtNy71uGwYifNahNHoazfEnV",
  "key3": "oABExjfU6UdGevu1m7Yi2GWPezgRcTJhVV9gdmhJ9RkpkE63Z6S9F628ZV3fC2VvimEj7N5be5KA5pRBBfvgYZY",
  "key4": "4vHaXrvtx8V8vHANPdWw53v1pHyxNze2kuSm6Fe6pQP9sj6W1mP9LGw4KciJk1WhoJK1u2bpCxFcsKgXQNY8bMBX",
  "key5": "64doYJfdYfcB9D7xQABdVmoP99nrSrtnk9wmeFfZHbuSenKsWocFbWbAKGhZ5aMfFxRYwTGPQ2idwvQZuWarVxWw",
  "key6": "4cpNUSteZ2p4MWKD6yrm9Z99LKRc31BCyXeYRbSkmgVxvi4WegUzxQL2KzpdnKiz2mHrLjDk7Gvv5DSsHs1hqohh",
  "key7": "2ZMAppxKAwhCcRfXMDURcwvQ6EdMzwME3GY9bhKxcN69C36ytJtUuJM1HYnMd8JFQr37YTi2PiSgGtGTdzdoc6n9",
  "key8": "2fhzseAuxUqBvr1CgxnT8Mwz8prXH9wCgNUtThRxMjyyk3KRFVqrx2BhZGZK8RN9g8npzXYK5v9Nzw44q4KWhQDn",
  "key9": "3x8XeL8k3VYtJiYV8P9yg9WjLqH5vTc7377zGoPr35hd4GpGeNQMvw3H3777WepgZdEXCYGBATx4gxN5TUR3uxpf",
  "key10": "djUyb3nXK9MmoJegyiCm4quzCC584mmZmC2UosWxTEQsZDfsQ9SRDsraAVzwaia84v8RG5DjN1ggBZFq6wCdXKK",
  "key11": "3nK6gmX6Hq9QjDTJBAEP2WNMEp8u7tHHL6TTtsxaSgYHs4UW6y4LuNUJARx99J4NZH3gpxGfiLbJFAJqq31VL5q4",
  "key12": "dkKSN8LVTA5JGX2YZNzfWctkMRhXtsZJZcQm4FDPX3uy8hTjBixqK5omyvSaqk5fbLzr7w3ZpeDBKG12eU8pBHh",
  "key13": "4KkNt9wZMg3adbWP1UZY6x8upse9gCZ9giWvdgobqaUhTvx19TAvczxVVAdCHXxGP3hdxiE63ocGr55uKCM253h8",
  "key14": "3DtwNTarLcN5PRJwGVrwKUjWzfuddYjimASWM1wxhpfxoJD5g4dBPYWqrB1o4B6WqzXykxAnDwpuwq3uo4HAKmjb",
  "key15": "5fCDrHUkhKpHNSA4XF2WXpm1zZvsnFwT8JHCiDFEoJKEN25xhtx1vpvquUZUW7nEqjAh2PMia6Cor1u742SYPDMo",
  "key16": "GvvkR7QND5YzHVZ7dRSKNmoqKq4XJW3Ss2CkqNhjSakr5Zp3NNDJtCtbwQYbdCkdSMxkLoUavnjEFz9B3QJbXa6",
  "key17": "2FMwiCQLFY6YiaP3uP4YnALr1zbuF56fjPqLqABqhFkieb3UbjeKEdNURopLTv1vwitvevBiQHgve7oZv183wq7W",
  "key18": "3WLrM6VMtEHKgsiB76oio9wYrEvcKJXcqTUZGBDuCXfUREtAvfuSPs25qRseS6EsB76gQgryJQ8ykswWNs4xPLP",
  "key19": "sC6h7nFYBEmRivTnA4BFFXoFN22KgfdQzHBgb31H7gZRxGij6j1W5yY1TUieatnsTedkfjS67ndTvZevE3Vhcjx",
  "key20": "5NChY1ir9LU5TDNuHyRedUjKa81pNgbxYuXCYB5UpLqqoVSLSbJRFnFABzM6hVT75peTwwMqvwpCC8Hr7TFD9SNt",
  "key21": "Q8Kkq6powaKYsuBD3ahfU2z98cJhCrLpmKz5wCr8Jz5AYg2Po4jZbm5Y4mZyfkQtQVsd2anE5Xhu9sKXE5prk8a",
  "key22": "3LFkphbeYDjQpBFoxgB9oQxrtPhy1cjtPwJaDpKRPkVJU1as9gofqzskoGtnFwo7YtGfM9r3wjSTJFbBEEVgmf37",
  "key23": "29EScJK8Z4ZUk4hwpZzxgkTwBx5oNc9wPDZfasamyMqq7AvfnnaM61Mmn499zayU84AR8DbQuDnyTBGpXMaLVFaR",
  "key24": "57nPEHcHAkYDyfY8qif7QrCeJCWUneJfrrEYhMtBhg8utsieShTz4Fi6vQJbpdyjSc5AhENBEuipL7P6AStuh9RJ"
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
