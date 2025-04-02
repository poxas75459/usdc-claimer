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
    "5N9WowJxVQCeKz55gGr1rh1RGBFEFBdTYPru4aeLneeQHyujYLRu3b6kUe5UEd4vynBH9NanPsCyRQ79fLNZ3KRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9zjeUFNexWk7JASaSiSfRcys46TzFa7t8ooJW8eE3wVvTZ3QkkTTZMzcaQUpwGeKfMeQ1NuqEbq8tHyRPnb2WDn",
  "key1": "fXz4rE5b69wQArERL8q9VBdCvXh4DmtbVkqx7eM4zjB7KkypV9SjG7aq9kek4NprD7DPVVf8PN4PMbhF6d8qYcg",
  "key2": "3AJ9Wbu8TaSJv6kWnkBr1ryWph61zQd5iCuaXosQAtc7vdW8QLuQpTzuu9m8LSMoWmWm3XxAQtMP3YN2D9B9CYrF",
  "key3": "3k7CekgdwD4rj5PYVj5ZQ46W7dju3BLfDFvoM61xY6ffbHmXyptSwuFieQfMzkgDh4FLYbwSRr4HvRQxE8Ymm9LR",
  "key4": "4Hu6UEAHxasBiqffifPVJCq43AFziEt3XPPrcjmPhr7k8dEXRs7gto8f6mi84Yp2CqEehENppJy3rsg7eF2BiDUj",
  "key5": "2jTRxLCPeJA2hvTdCz4yi28kVrUMVir7as2qdjQu45Zz78vpu65Z7jxGtzPGuukYb2WvwDCyqvEJaJzsQaQz3YaQ",
  "key6": "YVL8gRfQwyG7B8v2pWEhnFCPovDwQyyrbuhpcnuNrZt2wtcopJsDdJX1CSPuYGUP7DxajkmVXqziLm3uWo7KVdL",
  "key7": "4vZeny3azDWaT6KjZZWeE6iQUi3yRutwVaejVH9A6jxhzpEoAhxLUzaRewMXZgp5aambHYsFw2yTsZdtezphQS5R",
  "key8": "5GJvjTyQjGLKZRHu3vWygETLqczSPPuY74BgAPQLHX49p5WVd2rg4N4ctWk8VWbSaVjTVCGVyVkoPB3m9kj7kzYK",
  "key9": "56JSQwLGyxtVQd7Sm4qQ5e5jpYPQoARw3vaYYLfpkB2X4r1dv2zDJESriJ6HGhLMWgKPWYQ4Xs1ahHz6bU9Yaa7Q",
  "key10": "5RDJ4MfkNouMzrDYTHaUHMyNGiq1d9ZauoW5BdmNGf3U4DzopP6EGNiwE3ngcniN4ZFebtnYdLA9H8MJaSzNQknt",
  "key11": "5VnMC6C9zKszx1ideqrc53MexXDwDZNvPX18N7fzJ7NXqYC6bnXbopFWz9WHCz7GAvjMWH8V55Xw3gN5t1ng4WSX",
  "key12": "kxZgE5WLsdMWf9YT2iK14W55zg5dZeg6avSjArGRAmVXS3dpHDCQxub9GSZfjS1d6Ub6vc2EpNmgXYBhoDw9G8C",
  "key13": "3vLpy65B1ExMgDbVHGkKEbDyr3bEw8bi7i7PdNLgN6snh1yCVu7WrAkhaZoWrowm3PUgGBUo1qwfxSt3wCn37qbe",
  "key14": "ypfhdpBHii9CeA6ck3mP67ZjXu1B8uxysdqLqZzMjwUUWodD4CaHNQVvVG9SBqnb8rACa8UWY84GaYf3naufWLr",
  "key15": "3JA4AyXVpzmaQjeFxrRAKgHAwsuNt2hgnHGLAyYobTwfdsXdLFQJSePy5aeWiaX9vJfsRmuXttws4QKr19Vusn7M",
  "key16": "4di8BUMppqgsurzi5TquxuLNz9gBe3GsemWk8uZi8uG3M2m1vgQdhhXEnhTz1kaSxjkmTni4Lxi31iV6JJa3daSE",
  "key17": "8UxXS9CEoEk7tgzWCwtRU4Y2MNbVhpRYh2WSx5JUVDiZu2KaNc2WjAoxwT8qzNaTwdpoyAWGdpxfnKAM2DsqBZm",
  "key18": "3VLkMARpUaD6vMrYHSJ7cbhRsmDEmoLEdeVy4hK2jJxTUWs759qTbnMfQXfbtaYctGuPUqfavSK2GxpsQRC79WBc",
  "key19": "5s2pjW6piwyh3LUr1eXDB6z92Xt7meg5wpJeZk5AoFDM3dzAouqNxaVZu7kZW6s4YZxGKGwBWov1xWTnCQerv1Wr",
  "key20": "2AxAuttX4Afs2PgBowd6prxusytS9EBHktY2kCuwLNjq5PZd1FpNs52YtD8hZ4R1BK4Ti2B7xvwDuEMWMeWgdCfE",
  "key21": "42yudfb43frrU41tkP8zwCqKA1wkjr92Zd8u7YrtSBRE2sXTbVrjd26xyFzSxsnYnCLkwWrjxipseswCSiiqhkBU",
  "key22": "1Fa3h6HqjziwAL9zVqD6X9TF212RnqqRu5aCNid6NrQzVSiA9vkXvSk6pxUAdmszZ4PyTufgBYxkNm2rZ3fFTsV",
  "key23": "4htzsirc5E1z7JvpaFkWCzWpFgS4ASMF2P2jfvwspxtA7HpBXapw518XrwRxSMgDWYi7oKASGXkpC7UsUTeP4pdQ",
  "key24": "5oBSZWEZfhYdZYfeNdEF2bkEQAK1MX4DZPkD2mD52bfhHdbF72P6Y5PX8umrmVFC5J3TSURvFPrtBhWy1nnHjky5",
  "key25": "47dNgb5aNRovygyJ8WLHQi4tFprwoWsqsBDHhC8khcFKxbMH4CVe5x6zVZ5cugZdLeoVpdR5c7hHs7njih27yjhd",
  "key26": "9XUs2y7TiDDTJwu9VZgEakiVePXFmcJ6bdyhCUyue4BUZypyPQtwjPFjqYHnnMSKw6pPZ4CVk65ZJ2mEcR67w3u",
  "key27": "3uQ8rZ4ygKzgdtBeeeutTRB3izZZTyKzLZBCLgKER6peC7ndvBtqhs5LiCArNvuMusQDdyVWjnTpeZsRabMDUHoC",
  "key28": "55Pe5kJQv2Hn5HvGpLUfk9u5Jw7heDHH8s5fWU53uQaKVTGqAQbvZEKo5U1NMKicraCrZ12ieVDqdGiHr9Mxs1Cn",
  "key29": "2FRb9FjwCejGJg4G9oxt6szatSvH62c7cKCrEZET6EpCPWTrqnrLLfvHQeZHm6fFGhAQouatXNFXdiiYdepBUh85",
  "key30": "4PK88pZQ7oZ2yKi5Sfqyp7ordWh8BQkQerrZfcKQW6S9u7c7J7XHztg9fRSStyEcyjhNJ1HTDVtFxddx1Un4CZ5y",
  "key31": "4GcgjD4jV8fkPVxZm7CKmgRmQ6pB79Yoct9tWckRL1AVVheq4yEkbqNBHGHwg9w6oZMcn2jxEmpvgooY2Wxfsmt4",
  "key32": "44pHTyiQcbNjtr1ojP3NAyyShED1AiW4A96SvH7Dda16nube2tF7pxsXnkJ4cWT3hSCPzdQvdSHggDUt9FpMr19y"
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
