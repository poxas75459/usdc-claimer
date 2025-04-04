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
    "3U6tcjTe8gZDectGUcAmSF3zSMBWpjv9i5r3bQXmuqoJnNCSG8zUohc8Bh6g4mMYsZmS4SKRgBtxbgQjtsCgHAJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKt61uxaCeXScHR4ArvFPSEqExmUUssBxRwGRfJkiygmh8fhW2fxu1MQUD3wAVs1xX6RecnHRkP6dnKZZJr5urZ",
  "key1": "5cbn7rtXqbYfQVyxX8BqNde8p3fiQeaQsGpFuM8QY6fgfineAqZvKL32LKGYEDT25JG3w45b5AMgXhn5NEV9CmgS",
  "key2": "4qz2SfdNd6yTC5httJMUmnkqQRd3Tff33YrTuTwq31UthWgQuEx8pb9bjxjAkUQSAB7VvQmu9pbzVJSu3Gornpi1",
  "key3": "2Py9eRdzzQn2jxm3mP3aHY7tYYGi6bx1dPh2bBhUhKoE2f9GrnTKq2JbRfeSQJ3uVDCZxnprNqhNhQpsVAdVYghc",
  "key4": "3AdC7mZi6Ej8jGxDQvsDV7WeBcWqk25LFPnqimkKMRYGYV5zqezwt3gRN1FhsaT1rEyXzhLcN4YLawP7dpgr4LEN",
  "key5": "4kohuC9gLX7YWatmZRbugTL214HqGkiLgfbaGBeMNGyBxkBEay3nhQStB8ojbaVngJkcmdgUGXzfFJNqqZ1k9QJo",
  "key6": "3tM9YgQ9t68yyMLCAa4xRnVTSsGc7x5C4thXGbt8yCRi21xCrx26NpVATKmi5B5qHBNX1hYNLkRd9h6pq7S68xir",
  "key7": "2fH9gzUX5k3cdWMTnzneRk14U9hBFyraiJs4mg6P6r9iv6Sa9A1m8QTicVhNYTiu6pUoRFtGAwQDTUL9M9X3umTc",
  "key8": "QQcTTdqpg2x6xZv8nLV2bJzFkV6gLfzxPcB5cVE4HfQNFELQg36HAug5jRuxuJuBKgeFzZwseqcy6X71z8Hy4XR",
  "key9": "D5oMUqzRC2buehAzQjGNvGR8GwFqWPcPE5hPmqZUxNQ9oKuw9R1bw5YfvbT3VgzKcQZFQTtGA7T6cf3D7AbbtPG",
  "key10": "66irRn9K69TuUvfBKDJKc7bVqy5vsf945QheQQgGjKEJjWGf4bmjoqrrbXM1TYcZWqdi666RrHjE68yv4V89VEYv",
  "key11": "2R31Bx91oUfSjWJALrUymACSAHhg3fg1UREAPZbyKQi4npKiKAk3d6FstxdzQTFeZrz4SjuyHXzdHCjZQndDSBkG",
  "key12": "2To7ECkkKEHzr9LYQJSeK21NPEtErKzY3nDmZqkkn1RvKCPihGGmrCkwZrrwBeVz86BEM1Ar9dFDcRA6Ko3MWs1p",
  "key13": "2mMiGBGgJnUVPDp9kq9u8yocn2aACqA1ox72R7UxspaUG1HFaG8wBSAE9MDendjRRjeevCRLRGZhfTfMNiqWUz3u",
  "key14": "3WQrxRCnEzjn6vhYP9tmVeruiZyukLjWzmPtY1qGmQgbdegdhG53t9mpdipJXJCbMNeR6GVGLBqt2HmLmmGzqKFw",
  "key15": "5sGpCo5Kmm2vtLCsqpkZDa8PKsA5Vr34N122561VYFQB2517BJ3Dn6Rx1YvDg2ZoVWS5xv8nz8L7zyFv9fH2aK9B",
  "key16": "2cr4FgS9qk3XwhswDgXT7F7aB1BNbNJYe7uUS5A8rY9ig6mWuutgjCjDjyhRqyaJVLe8Ygc9w3GJF3zY4oaFEh92",
  "key17": "2it7pLjMLWevMsVUVqxn9RE6axattNe5LUVqbEWt4deeEGRS7jt5nm8TEF65x9WSPXPP96FC9jYd2vDD7UYy27jw",
  "key18": "Qwticrp1aFeJLzTfNSMp7ZU9egLU7fEa8ngrz8cVF5smLDs8UbCYGDfTfiFshpw2B57sitwZ4ig9Z5oLJ3M2Xpz",
  "key19": "qDDbGtz5nHupQUJgMz6cMnVGFaYypg748hVMs86anBFEds8h9d9xPvZyvYHEtzNHxKBvq5QrqDBXTNgVetSXXLN",
  "key20": "2vPz5ZDDK9aVW4MczveTUtj9hsWDiQQ7Ej15kr98zxHwnrvi5AQECJ4qLKUeoJQevV2ojD493MjXtoLNDwK33Q3r",
  "key21": "3UrYYUDw231RYvygVmd1ZtUQ6sVdX9p2FNP6meP8jgwLxKxmPE3smu3oWtWq8eMrFGYnLfntV2RaG2em9xbRX1qN",
  "key22": "39tx5MGPXD1UUaEYsQwydX7qTksGk4ZcakJ4ywpvkZcfR5LMX4hKdrVW3zQJo1aAJvwccbPS43WwRRZhYvUq1sM4",
  "key23": "58yqGrS5V54sdh6v8FwWtthC9Y6vpYUq8QpAuvUjM39TWwcdzWwHDFuuJXd14qAdD1HyCoadrcob8C1MQgkZ6erN",
  "key24": "4Db6MJnTSQz7saKsHmutPko7euZdZp3XgzbMxnWWdrr7XyNY1Q9SEVjMkTr9KdHdYDdfam8beJtn4oT5wjn8qx8M",
  "key25": "5iWvuwpqrZzokxMzcQeP36rKxqKfEsZGUwNNACLhhn1boUbic7pUmxtjyzkJPgZ5h4NBfLdmZBpd5GsxAES6W5a",
  "key26": "5fcHVsFeDCWpHtvnu8g4fjo3vjrW7ovP5QhkFZiB3iwGVYyAzUutBed4Gspz3SKP7gkyZUe38dFtJvTwbd5uV8Jg",
  "key27": "4rbyKjiW8r8tBNRPx7FqE6QRFS2xPgWUxdqhGu7UAaHgDphJpUYNd6oTRCLhns8WC9WdDTHkY5EWGDhR4sAFhzDa",
  "key28": "4U6JiQQJxct8crJpvUVbAkNdE2TqPu91aKmPsrguwhPN4RnRnJH6jiV4VXin1SNLqUZWFEySMVqzYx1zhgDqxJHF",
  "key29": "5J3MmFBndzjcdtZiTCU9XrRS8za37SEf7nwQR5uAv7BkPqMp3s5qcudwdCqYWwZEYUjwzw3LWZ9mFmnwxX3t7cYi",
  "key30": "2VEdVBfwTuLkPzPQhvFZMnFdPMrnttrxQz3Yr9VFeRC2Hz6PiaAiRiAMHfzE2zHEgMi8TCJuFRWxQ9DFmoCwFxp5",
  "key31": "hu8nTBAFaPDppPko7cgUZxAwnEdF6XLshsus5qq9qfT3PvQ7inxtHpc5vYe9NSuhTn6RRGkZEAF9ikawFr1pxG1",
  "key32": "4hRVA4vNrJywee8Ur9wWBg5C1xbVxXix96jx9zWpqugH11wctARdf7mXhg85jg1TMi1oGJ7ivFuyz33tYGw7UkLR",
  "key33": "5rLZv19uxiog9ezj2WQzorhLeE2yZxJNk68Yfn9G7GZY6XoPwer7WDjxoshaQo3CHjU21m4K6Z7YqEfr3vB8DwQn",
  "key34": "4QFgAYaFvPWnZ6YpJEfx7Py139t2FGGVuMFQb24HsAZKsu1AwDe3wAt93jcC2cQdMoyZ3N7XVLTAmCVbAFTJpVyo",
  "key35": "ZMCnwVh4CTTTzgMLQBKuRL39fi9jwKxYqPNsksijhD7GGvEixBRBv3FvkFj6C7cbzaUnp2REkx7R8ttGdzrsRh2",
  "key36": "4ytdtkWDDTQgtrUCMXHaMVXbgo5Avwj71Zb2q9zMAqgvUJNjYD1r9P3Z7VZx2jxyhyHUUHo2v59r6ntxxkJPa99Z"
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
