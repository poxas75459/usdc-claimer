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
    "4TdXfGWamPG61dqeHnpbuqteWZJuvcEBchpGXEFWou8v6686pvj465sXCTmhdXypB3zPi99UzmGMYWvBMtV8ANYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqGsmViVMFcVEgezeLvZqqAhYaFgb716w8Jo2yg27RVq2Lm7XHUYZbAeCswDeXx9mYdiuSFFfjYu64yCd7gRusC",
  "key1": "64k5RCgWzX7JMxG6G6mfzwoCTCCAeEKTkeyRNr2v1fxKmzrYJGVdKXoCCf8GxWK8GQRepby6fdpr9b3Sg7psC41m",
  "key2": "4kgyW5c84TrWzFh77nJRhj1jxqrm15wryJRviCa46nuHDRGxb8CUKVt8WTUZzXEoRod4nJeaub6j5xbGPuC4zatn",
  "key3": "65ATMyrmcLSTvQNTD4MQr3sCdoeyfk4BGChNcGTyTACLk2Fv4d62wcnPo7j9dnsxjJNTx1TmL3c8rdbg2aogfNUo",
  "key4": "2QTBtMkfx25nXP6jk9jkPz87JsKuFTjgdUj1QzVVerx1f9uKrPbnYMnkoNRfiUuSVdQ8SmYUjh51kBmLXTwhmY6Q",
  "key5": "ADLWqmwDWq4Xn59SteL6jmkDWU1Pxu7AbgXTHdd3ELWTXYggDQ1bijMVnf17KbzUxYKg5QUw8AhoPZnqioXj8Uh",
  "key6": "3Dh6uaWFGzT8T4TiTtbcm8VjvaGwscrtyrtngqTS3PHst5wwo3xT3uqrTKQgagEgQCwSmCMbguxccDYZaHY9j62u",
  "key7": "5Ud6C3wHiESaiguRSBwsuDTww4rq6Hh7RxabWtXT97FymctpeGNTskoy1ag5DsdNqJ9Vm2LMYXjzusXdDEsW6oLp",
  "key8": "5zu315r79VJtjYkFvN4Vr5qyTNrFUgjh5PdyR8bw9iqpfFPKEbztfqEGvkBoSBdzhopiFgRChSUDShGP1WTNX8ej",
  "key9": "45AhDyQYjDLpRQ6xwuP1CNy7g5TTLHq9zdnh4RRLX6dpXGMXFntwwo7DwqqgbUZgKxuym1c1Ppxxei75M8ZytHfc",
  "key10": "5DLjLKGTX5nWdF6zM5s6f8AC9dL77ky1qPwQr4ia2DBFV84kHy1xrCMf13WEmyruxG1iBsGnqyMtLa34YgSrRjAj",
  "key11": "S9MHjiBkHEoSBaeoAVCfvaqhyvcQQb7jAe95jz7HxpfteX1Em3r4YbZT56Jvk9tgpAhi7E8fdqkzWS4wYEBHERU",
  "key12": "C7jueUFZJ9r26ZfU3Xvqof9D8B5A2DhEK1sZP3eR2VHr7ewFRPDKMQGdHaVWDR7S8EHmiCW2SKNeuRNV7SJvgf9",
  "key13": "4crbASDdQWkX19TPKCtEj6DsGXwygpcYQobTzg335ZHCDbiTXDG4Tu5qt5WHeggQsvkqMKP24ukEErXSst6dDWgx",
  "key14": "5WXhCupnx8B1GK58CYFxNpVkKzUaooWL9Zmb2zDev9EPnhWXiWS47wNQkQLzU8wR65i1rYzBoLEYGQ6VxK4vpiEC",
  "key15": "2m3udquWZifaNYG84UyaBo8ZhNwohrCX8Qj5ueumkdjRNhTqTXfBtUcSiLvkviLePs6ESCvYaSaz1he7x4w9sq93",
  "key16": "3GQqC6N4EfgjiNDCgyXZVn4h2UfrQT5TKvWMg4EKTXDrpFSamQjiRjtA5dCqeNqF7gosWaX8c6QFcmqmyQ3joBWt",
  "key17": "5Drr4fYb2HPPZU67NeYFthJj18Hbg9TFFifkBxJsiuSPkv1jxEzcbg9tAKnYcEePAYLHgSK1krDeUZj7Upotmjyp",
  "key18": "2unEsiQE2CudEFn78SNmpwL9AXZovUvJiKAojd74davXaBFHesz8VvhP7t9TSAsvSiXVNdxptpLZfwdfCY5d1KBm",
  "key19": "47Bim11SrsNJfzksEcxQ15PRvM67UsJtEfpMBWifonzK2pTskwazAy5jrxG87YRzKyEae1R3hWA4fQAvZpUEkhKT",
  "key20": "LX6H2eWkHa6AV3HjaCyjEJcYKx1i4juLtBFAz79kx4BjxwLSWAKW5Zqa2AFbFUgEXgfu94APxBRuAQUrmwxu6St",
  "key21": "3tNbjwDeWBk84tMYgwkh8PgapCR3yZmWGoBBt7YGYMktd5jkuy5syDJK6SXRbxEyuKFaHEps9bXZKc5aR3pXhPng",
  "key22": "4wVAC3fxBeuri5i1sBbyhEpDk6APfYjNQjRbo6xxxkUUF8niQc1QVwn1Q8w8FMHWJbEXA8UkpcKikdYQqvvWRhaY",
  "key23": "36KHXubVLM3APfodpt7qFY7ayAv6bffazURWyUwfopv2eKJ9jvPE8Xqzrm3ab6gezotucnZV9dfWn6WL73KqwRSg",
  "key24": "3AtB6JUQpcgkDaVD2ZTps4wFuoE7f41Zyra4iXQqfdATQ99tqvCZSvGL2vciMHGCDFbEqUktbAs38VXf6xs2Puxi",
  "key25": "n7GbfkRkNPvQyYNjrqbnVo3QXPokARsGyCHMu8vHkW4QiTGanp3MNCsgFVK8A9cfTeWT87Cf87q3V8Sxep7Gfwi",
  "key26": "2DZvNz6TawXibWaWwjCkxpXpCv4UyLfPncfassQobBDYD1DvxJ2PCux5zZWrvAGEEXGHzAyq58cCEk2voL8GzYvc",
  "key27": "3CKm4buNBpJQ27Ab6HvpymtFrVd2WoqDhdDsJ9ffCWsgRpXAYwWUNwBqDqD3GaLnqCzgKm8fQBECahw3gs2VjKyB"
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
