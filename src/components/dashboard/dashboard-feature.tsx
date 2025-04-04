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
    "BE1VDABbzWXupUJ27zBrrASQvtV93D7jP1rtif9LqbtN7janRgK1G624ctvgc5ta8S739qUzrJyRvsP66ZWQgEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Chev9iJc5YdKpBNUd4Bv1gkSQP2zVsCCpiAegbQyhCHWAP2zCfz1wTAiRbSk7rVFZ3LMFecgWWp38pvnu6kuRbG",
  "key1": "TVUzdvHQhq53k6VE23ngceMvQi7PLckJZ24wktV5piv5CdPJiL8tQEmwvWiXMQdFXnGvWZYZTKAodHgtgqon1Yy",
  "key2": "4yxUhx4L2rojUEm4Ut1bs7EvxHAK4L9aSsZMQW5kxMchNfy3Tg9EVy3BEkEqmNygbw7cisT81odaT14KojtZmLcg",
  "key3": "2JeGk21yrkft7gN3sjZq5zxeSHpypEQfbqvMKcZANA89EGEAUAJhf5KnNdfuqCpqUjqpZSpUzjphJzoQGrEXbKWi",
  "key4": "78wye2Vp9Qu5ex59BW2aEMMbcLC9b6XX7omdRJQL9yaeWmrJPZzjtJb5HMRRMs5mD985TxdkMK4TXCxei587Mxa",
  "key5": "4qvCsyYJxckUuajd71WDecrZCtABeJfG4vKHanXmC8bp3gPn2Ryaa49Sup27tr4ctAzTkBokcMutmZtM6fFJxfqw",
  "key6": "KBiGz1ZfbxBLvhMYxDyuGUqNe7fQjSvLeXnUkCFDnHdTUjXQz8svAqFABY115M7Cae6ZZsriuH1UnjK6uhFFDDZ",
  "key7": "4eULknfqy7UF3YUTyp2GtMpGkE49vg2Qx3LSfKH1wDNFt1A4qmedb62yWpDSTSZ5oXD771nRcMQmjwUtmMmqxxGD",
  "key8": "5K3K9xwvRjSnoV3Y9BP5NoDBBiUg1HLywAKBtsh86MAegYw1wyWvQfnstg7XCHgquxpPenogvy8TuadJsLFC45Cx",
  "key9": "4nqjq9j7G6eTvbdqirAXJgLcToNpdBtdvXh7SWd3vXVwSdH7Y3XpSG4Kc1gUe7NsNnP6QrEpDqRUeqbAeG9qDMGc",
  "key10": "34z5akMmus5BM3wuN6u28mnctcdnEszNh8h8GfZP5fA1zfhc3NPiPQJdMwA3c6pbV9XhQWqqebgW79i3zWt4sYR4",
  "key11": "2nCLpj352r4FYzjMHRVxm67AwBv3TY728ja6c5RQfenXvuhzfGzx1a29yDALWnJMKLEvRfPHxWYk17hnVb6uHtqM",
  "key12": "2auY9oJcpqQRD3XNgj22TSSDPFAUiLsEjtmDDhmWBSZPzkASNuCYQcbDzcnzXcTdsS4EkWcWRQSMrEcYNqoUECqo",
  "key13": "2Ahwqievk7YvgWxkJa3hkS186FmsLUzQyexhLuV4EMCwZVotYh1bKDLw5m5ZUEcDZHzH1Q2WNyZp27Fg91yfrrj7",
  "key14": "auup8CJqi71go2vLmGpqkFEiLe7cVYKm8HG9Swi5ybgLwBSC1DUnhUQNSDLQ9bVFwBWzT3etTmigtDE3L7qptme",
  "key15": "GmSSiCn22tBtrsVPjqgq55m4EtqoLtTg6CyEU9nF5d2jHyvzdfB7B95W4V3seMWAYbt8qu7Ki4cFRiSsqr4pXag",
  "key16": "2BC9c6VgoTHdE4a6vYACEjcSGxPibosnYiWSxq5AQ1NEq2Zr3njfZSXtBnYpmTFYAW2ig8JsiV9GEPJgcRJtjJGo",
  "key17": "4cvuvrroQ5KfTBUJUWkt39Gk8DACGoKfdzwzpBwG6WeNstqwUajcNjDQPsgxcoWAvYA4zoLu9AsqZgUAyHhVSHgQ",
  "key18": "51vR33zFx6zT2w6UWkGuKqBrCz9Ctqu2iTpTSXDAoH9aS9ap5gqWHo6b4njU88yKLAS27HxMNCDhLiWYpsMe1vni",
  "key19": "3CK8j4wpwZ1scgJREC2VwcSoNnUjngVQKm5fjPTLQRJEECuboHGKxWBh8xMhKKerghCzf2sbnE32FEWxXrWkKDUi",
  "key20": "5EgvpsUWiuxUbdGaN8TYL3tjbosxqpy9pV893oWDsMNh1cRUFJDKuC4XiWiAg4qLQRbo17Ffwsrwge5apsq5eHX8",
  "key21": "2AmDMserPPiFNs9pfBWtTieZdC7CEYSYdkoKPFyUZL3hTaR1Zc1Qf5VtYF6BMGQsobVsjPoGHmZJprShdy6UqDSD",
  "key22": "3pXq16mvxhAauhyHUMjGtVqY7yAhB1gDR9wJg3rexFMBzP3VKA3EcK3UYefReqm9aqw1ECczPQSJohQrwcjSZ9EE",
  "key23": "4YFR8AYTJVyD4K7THvhgAccT1JVCpdRcMSDmnmja5fJ9y6SPhNcQdry9ThGM3rbaLu7i6Jo68TT6U6eF6cqUS7q3",
  "key24": "53iuDy7fPjzgDPPm2GMkR7Qsg7tHgm5PocJ63aeV46LiqucAidXRWvv9o85cSpX4BUyHDvTAPcXGg1ixQNMTKJqw",
  "key25": "4QV75zs2zTCmLyZyFs6RrAretZEq6Sdwon2zR5FCsGp8q62NXBpMcfwyRwTFbpwv7fMwemsVQxac6CL4ZUkvKuH7",
  "key26": "3EfHmnVdZQDEuZCvyDBTWsrksYpTGkuARqRjsDbY9saqr9tAtpPLSfBhVXXX1NJnZxn4KQ8FGGbcWV1BVhU2ELtp",
  "key27": "5oVHwChKAgVSiv6tJmdNztaDD3PtawQtc42DFJevWPrb9WCf6irrU3sGZTPMGcZyD35zJbPdoPLpZ52yAmYJWTBN",
  "key28": "4mFLQmLEnhEoxcd6xRXFsMXnda1nWzy6kYVChtzWBH8gtUfnRoGqnJwP8aKSxQwDh3dmtUZDkmqUJuyovtfBHpSe"
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
