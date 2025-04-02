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
    "4xvSzMXuCbHQC1arxq82StWDH7TZ65XrR5HVrGM9XmpdX1MixYZTcq4qEtHrcrdFdHJsnVjiiArWH3qXE6GtyEXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wg97UsnLd4NFiuieuwzrCo1CyN5nzvGFVMgjXFpAGkgpXaBQqT4HQx2jMPgGNTNyoyHJRa69fJdQxsB7autS5vu",
  "key1": "3YiYkNZajtZy6H4LRFZL5XBcRMVQdujCPaqvru1ZzXteUb7HirgafHgJGiWqZgCVHXPJvtr9ussGFQPFQefkxMgq",
  "key2": "tTWBKe7QaqwGjR1bU2g6wDLNfu5MNE93u2MgedUbUbbg2bjh4AKRc8gdMsb6uFrewwfMqYX5ZwefMwN6NKoqeqt",
  "key3": "4oSpZHhsiCjqZzNHJZmooecs4TSgNi7WNmFU16dsbtgvVDNn95uu6WXYv9ZTy9JMhZEQaLPVt7VnrHrJGnjz36wQ",
  "key4": "5RW8syBV49yVh3oKnLBX9KoZcSzHv5j3EQ7SmJ9CCqibPDKpxnsFijn7x6wKXwHA7ttznqKzB9uX7EYRiN7aY7t2",
  "key5": "4yJp36S7q8SrDdXXUPycetmV8AkyVzRAGLSmTn4TRE8nYYhVRm5LepdUu2ymukm5EHHtUERnmQY1yk7X5yRamUtn",
  "key6": "4stZPbQfauVF25N9ini82bZYZgMAaNKi2ywLCN8mYdj1CDLXqw5JaW6fiPNp8hLEhtgD6RMfEQpehMhUmsoYdzVH",
  "key7": "4Xu7Lp5fgFWsmaHoC6GUdGUAAWP8Wyyuhm7Td2ZeHWEAhAring9diKg1t8RRcuZD8hhhDBZkbAEgCqBqYgTigRgc",
  "key8": "3hV8cugxpaeAe5Yycbahkvi1SnmJHdW2FrYjw389euY4XiAByBafCCqpnCw6kKg23tNBU4VjVSESbbBWpaWFhn32",
  "key9": "2qDjrRWunBk57TRHDXkAA2mtpXGWCaVuCNZaaoVkh7YrXDNGVWxdg6y9bJwKhbKnYE3bUgZeCUS4urth6KxoHWfv",
  "key10": "2tzEzrr6Kzi3s4d3czkhzKyFGP4GiWiAFDWUURhNqPW2FMYdXBd57Qyr9mRPUccQGZtwVvtHpQp6J6Gdsu9KFHsX",
  "key11": "2WBrQD4R7tPXFdLmuPPNgnnLTAjgMCiQbuHGgBi81zRsZr3Ci9yifJoCHDjzYPqpJXBzGXZyc2AJa9fWi2U4exbt",
  "key12": "4DSEuD92c77kRuCrt1rXnE8Putxj8fn1zRKKzB3UhobbnBqeiwv9Yrd22c4LSgBL4VXohLxBRc4SPB1MpzNKyuFa",
  "key13": "3TEVTfr6uE9qnXfrVLTv3fU4HZZMbynUFdD2DmvvpAphDAPfXsGcdrd4FCjgbKsYxJ6G8KU9GGWG4sgkE8azsvBn",
  "key14": "3JgtJipSDr8KtyPB8Xn3QRkmBGin9PLveyKuPxujRy28v3MBDqLcQWKjgqmU1VinbwDn5VPVD9Su5JZnT5gbAxPH",
  "key15": "4WeQtfoWZrLkz4cztpZ9ioGycEbY4ZvgfJXNj4J6aMg2mzj8cafBisu2iW7vXnpEekBiYTVZUK4WHkQgrJKYpT12",
  "key16": "2TaFj4LtTJFBjGqWnhq1rhNXFNs1umnwwhjXYRobnrw8WnHkGn8vBkMR2shkATispDCKMSJiJpTHysx8AiJSKSv1",
  "key17": "2kiohienq7x3fvuugur4fG2xR3o1a8H2pPYcH3q1pbwyd3ayGVuX1TzMsaiezNCqvpidtfE7RJm9Go7ZGp1DD8jj",
  "key18": "32P6Be4qU1tcWDGTHCapJFU7EcwXxwmHxhxarhyPqVkaPWLzcnbHG8izVxUMWq8EUfF7yNTXAgYKF7mmJWUK9gqB",
  "key19": "3nSPaEBPj5k5AqseoUWp4fn2dFPqxZHhiHkV1yefvAk9JC9oJ6HX7Zj7oBQC8HVMutBL9pLPbFMkWxAQynvZ38cv",
  "key20": "2hJynJySF9g9k3wBuxvia1eRFeTThKUEMsvuzXdEXopHgjUBEwXQuEGCQVYv8q2bu8tczHQJcwyBYstQ9Qswc2z8",
  "key21": "4JaxRqdqYGMNfFw6kvjCkZjuJwpdG3HhhJTSaBm5i6L16maRACaSx522Jo3tkZ9LkU8YziEfvSC7khQ3DZHg7a2n",
  "key22": "2sHNoGPBgcdoFbv7nnrL5fnpeD7FrXaGfhKtLe4CNCrVwpsAbEQofz5Cgfiz1AEdQva5kqo9z5sovhprD8v4mmTg",
  "key23": "5S9Robu2cbK5mut6eRQ3Kt5hUY3DorhEzPfnRdqBD292edWZwLkFiFXTjeHPNhTLNiDdVJcBEQt6xTdJLgZ7rJFW",
  "key24": "3KdNNCm7KCJfkPdjXtRuRfMDJHW4WzVkfBo45fh4P1pCcEeDZFwzG8Gbgtbht1aTnPJKPShz7Lhb9XSScEpYcrjP",
  "key25": "4XW9X1ShGrcpLNk2ms1tEwoP44GvC4LXbiJtydrfDq1c3svDeS3TgGKPvLUyDW9wk7T7Bq1b6Bvw2irQEoiG6E1i",
  "key26": "vFcQwkZfgMpusMzKV9gSEg4BJRe3vVGm4Rh4bgyg14RvS2vrbCFQDfgKKE8YoEVMzJMtYoLXkm1XjZKhHjbCgSi",
  "key27": "5kRuQ8WamdEjJukFvPtQgo5p778aeR9UzDEBhS5cAGCNZ2PXaFqFB8wBz289ncJjJif7k6ZyJDGBrkgFgqkC4qcR",
  "key28": "LvzwHjvB3RrHf8LvJ7YVUE7YpgLPSXsQp5XNUka7dPDeXGfB4xTsJi7iZk7ob7Zu2Ntn5VSa4Tv2N7ddjvUrhz9",
  "key29": "2jKCBhhUqkeGycMc85g3sUQW8wKWfEof942RGauu2F3gLMP25xDGWsKwK3rRHEmbBxa9ekr4tUdRuz1nkEm7hXnr",
  "key30": "3T3tiREvi42pprKbgsFTqGdNqVZFJm8dXvTEhquuc1CRuGu9uJNa8JRwfCdir7zfTvQGkATk4V7sDrBUEAN3rN8V"
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
