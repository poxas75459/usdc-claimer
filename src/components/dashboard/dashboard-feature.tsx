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
    "5yY91Q1vgk7VX7kYkeggwMaTen9k1LmSgDTT9xzfEwUkWPxB2JT9pC2uayh3DHkqGNgAzEAMmC7Si89PDPSEE3EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Cg7LyrPLK3TTYbnAen2tio3E48uadYuSNQY5xLgBq5btKwEzzLruymUJDGRAMtkUbeBsobDCfaCFBToqohPosJ",
  "key1": "4ADughgPZf62KCEZR4xnKLrCBqLGucgFUy7D8hCRPtFve3LYJCriEBaoW68Eeh3pkYJNY7WC1ATHK5Ks7kz7PXwW",
  "key2": "3q3f4H5eUby8eUdrUeVLQgPXDjuVPMpkZ6d4Lmd7ogyun62yZecAcLJz68UZsT2YUEFbvKQnDyLytVSZXAgBq4ch",
  "key3": "4SuHLYs6b6YU6GNM9qsoSYBbQwNSyKCJQngvLnuPU3p9SpudSU5Q8oNkWUgVLUL2XFTjVCqwsj4zn2yCyxkqdXTt",
  "key4": "4Cfo5yYwiuWmgrLWjoj8YCPgAPuaYd6P89YfEQ1cYbXpzhWBfHZ4vH3rjCeNYewuqzw9M2c6BQi5TKbEHDRDX4MZ",
  "key5": "vhFD5xP3GUUWtYpSzR6gZkXX7mqcYNSJLuNP3hMsxKSY8YLmPxm25Cr94jCJ3E6FUGu4592oTP4guDHtLhwrTGW",
  "key6": "4x8K7FK3hey5NnTq9WxZiJcaKx4jXBPjbFXk43KmqU1rk8NQp4MGtH1kwERPuKwT4QUFS9ogPkx2zkB1qPfv27nn",
  "key7": "32ngx8PB4SnDDoR4wWjmx7xQ5tXKGTCnQH5cCq87nJnGPaVijXQEvnuhkYSzTWUBTBf5oJLLjT81t3k2T8mNKKYg",
  "key8": "5H1J6PuvYjUKc739aGzVN42PaA1JbQrVX6f1JNaXjHquRqZcorDZGyzrYLGb8ZYhD6r7LvK9ZbfpUPQdTXhDQHUU",
  "key9": "2gj4GgJ4vsWscxwF795u5UAGAoNTdfYwNGdqDmuJfBhQq1RLxKffjHqFcHFXfAPGezqiFsZqPDLWQBaGCRGv6o6S",
  "key10": "3dAZmoawqAEAZzopjKavPNLRT5Kba46aHbCoBujxbCqT1phFhAg56gF3sW3MDyHctWPxn47z9A7489owRtRdEv6s",
  "key11": "5fqvKtMAqgpSCA2AgmGQo3rwjHoDfPiuyg9cCJpcTPtWiFb1myRB2gJJoCvjSqxAzLZ5jkqjS9JJYiJvJqW7nuMM",
  "key12": "Ktjey1oUmX59Mf9svYpiDpZN25XUgV54sKk8UToyMuXVgjCH1dZDjzkipu3XQBGS9yNYv7zZZRh8Cd4sCQkdoEK",
  "key13": "5Jer2nE3DTVeqbW1TEihkjTDYDqZ9S6qLwN5rPLSFW8nWTb7EJU2vBaS8GhbeMt3pc5XnyPRgXwDF3QqRvZnRf3L",
  "key14": "2TxT4rRMYiCDkZUTQbgX5bwcSLSJYdXV6hYCEg3QVJd8crhN8b6H9PK4Nrjhci4zRdLm2hDVmWj7vQ2HHdxtL2fS",
  "key15": "3nQRrNaPr3pDR2aJQxqoDNycoVKJboVm2HAdtsMvMiieh7dXgM2dYV3wK31iY2RiEwbe8SY1CaWic5Vbeh2keHDu",
  "key16": "64t5yUtVf3GaZ3UVeji2GC7L6XidE7GUD4zBn82fMdfUMEaGHEgoszwdjYTDHBexHdNAXqRZndvuDwZuMz3TGZwa",
  "key17": "5bKwUsnb8QWZs8DHyZGBqWJBcL9r2VgwaCki4yCjT3r9ZBLBBjepUc8XgKB382AiugENG9dZd4hjQEinEj66gGow",
  "key18": "4fEJcPg3iTa9PvsCUw8vTDr5vpyY84XP3zyjbyg5GGVEfzMLFb4aymcxoPWFagNKH1ucvM1oPcmZhGLMukoBnqhZ",
  "key19": "4bzDcK6AjLLz59YQ3gqoZCQhqek4zdaz82NYfZwLjLQ3m4DCtubkuXfuDmHXPzEJjpRc5vsSxD3PxNGvi6hJKCKK",
  "key20": "4c2Dy2v8gD4x68JAe6Xp1UjW7Dt5YM3LNqnDSV7T88vjsQVKchqUHixzKqrsJ9kjs7TQzu1XGr2XLrYhHFJ9Cc9e",
  "key21": "4q4YtNDcPnG85ztEYqtnU9gpdkB71SyoprKSTnNuz8vWLW3TvFHQAbsnwRKqSKZG2jUPUCcUP64RV7TgNp6fypqj",
  "key22": "3vXYhVvr3V1sG3K5jFcLEGm5db1CAHWPk1spPuZ7LrKTS8bvhefdpnFYHGbVJPfJRaZh2rkHq168Mez3NmXXpjn6",
  "key23": "mUFs5RHWhsPbmmZZVoSwG3sy4zkxbbCzihw5vvxZL5r4BkT9DqHduhC6sjHj6fagC3DQiNQbGGA6GfKPis8czNH",
  "key24": "D7dRkkUHC1eD2Nww8AbRqrSPS7L9yvxARGMRkbf6dUDzsZNvFFS2mhFgtPFnusxLZSkfL9vwvYgtxdxwaTLfcTy",
  "key25": "2bKgZv1Ew2LVTkBo3Ch6Zwbh6JDkxtVYi1WyjVynCXgEnpPaCQWXPkXiCifPCK5kmSjK72BJxBNzvHSiimD6GFDT",
  "key26": "35gKMCZvzFDb8nR4pdRqaRKY8FFiaU3SR8SeFGV5eqC5NQLMAxxrh6dd9fFfHeec8ULj4Z8vyHKf2tAjT6x1ZJtb",
  "key27": "5iyYf4LJvQgzgNG8ZEtauwNPgMqymJbSbF4BGiR25BwF27k9Wm79TsBXzN8aTxGnnpCkjYJSVwFyGWyX6MxdEXqz",
  "key28": "5wYK3udExF9SuFxL7Tq2RG4qpGdKTZfEPuN6hqDmS54oMFKGyWrRaVGPZwK2KN14dC58NpDwxF6NDSx8fYoegGyS",
  "key29": "52EXeM3jiELQM9duzNNZVHKWssgGrLp3y9L2KAKAkoCCC3bShHLV7Udo9SCHok6CkkSPsMa4b2bNkPYHSFdxjiK",
  "key30": "3hvKCgqA3r4s4AH1fKfX676kEHgQg7FN9H1FP5jGcBEatK4UFv7tMQZb4sjEP5JRWx8Ky5APTPaUUb4kzww7tzoA",
  "key31": "52NuRx79t512xt4hh8pfV1mjgLtN3P5TXe8xVDJJ1aZnqoiEdF399D7nG4cyRgVpz1vfJJsiarDqw52qu8Km6bP3",
  "key32": "47emDozAK5HsssJ7x7bZa24ZHTCdCkJwZ94FcWtxCtNddLC8tZ8XufQyyG72vLQLdzx5F2cHuCSi6dfFgtHFFxqc",
  "key33": "qVLt9RZKfrJ3TCycAAFjC2kDZtbvtbbEDJgYtqv564Mp1agWLPeabXTgSeDJE8wBQoccj2xMxm27DYgkESF7xPY",
  "key34": "LuK8uyH7sW2EpvQF24YhCRy8V3FCQJY4APzAaJaPk5TZAVabJH8ohWeFDDgkeLb6KftBQ33Jx7BzfwrosGGrfJH",
  "key35": "63Nq8YLorY2VV3apCNypdFpMAcG1DJiHYb6LxcnYgJh9mCe3SZfwPFuqSkY3LWBzv8ZiigR2dPncninbr9CZ1G39",
  "key36": "2EM33BRAERM2AT69yojwn47sD6g636SsEPxwLBkK4SoJtJWYPkG3UmnDWDsmvf1URVSHWvz7HmftJKfC2Gj2LLL9",
  "key37": "3jqK9gLqSpDias8jcfBswyfQ9MFcQ57QvtKW7iHaCLSRrZGw1iwZ8agq8Fqpt8UHnKQHssTV1GiKBNVhZNYNDiAE",
  "key38": "zsSpmeSoH4xSdtJAJoBYemeobLtG5qyc3JevWPzoJHBQwqmTDuDYwruBWUjdsMhVaAodZAcoC7o5Ff5m9m5JtZY",
  "key39": "5VYGegPYfzoVpqDJZYNLSGQMs73nuincw2A1F4aXYQKWn4uA9PgWBEjfSkJahNsgSYh8nRAFzgfi2DsdCBSMHQ6M",
  "key40": "ZeyvFSnznBydUrSUUfm5gY51QVzKwbw7JuSyoa8BFNFZyQfY7sUc3zaTdu4PGjfHNXSMvB8xkKhKqdeEwFhgxTy",
  "key41": "3DcDhZ4FF2u7pbGcGh3dhQH2zePf217hwrao6QDjmx22hJUPMcXug4cwJmcvtSBP3kE3TodeUAxJxiGrTtA9bfRU",
  "key42": "63aGtyjR2T8KbcB4W7F2wqesk2Brbw2pwLTLxKKMRR5apwq5QzVrGeATocvsbg7NHPx5AygKXJXa2LvXNcTEBDeb",
  "key43": "3JbBhd93vFK9uyobQGQgGz4T8xUNtHzoeuZZcSStL5XYaqXfVR9nYRAqbVLurLcXARHvS2FYY2qhLeLnxccLXKFw",
  "key44": "2Y8y9oLjYUriNCtPLkZ8QiFHzwSQtYkeGjWiqBhbHSuBAWEEnhnUovdDj4ehhRfXPbrF4KDdhMhhwZYLW8ZbWo3d",
  "key45": "BdQoKMZEL8waw28tAbamRZLez3hu8yW19PtLJhfw9vcFQzGeuYVckQyugtYWKbGvZekyXEuc9ecesU8YgRfzmVF",
  "key46": "3sBEQ8Hfm1YMr9cRuWtq13y6qGkutKeHZKmZuT8jTNGNstoPLLzSW1NpJv7Agjom6WV8KrvzdQ8cXx8T5SBTuhc4",
  "key47": "3AdNe7NpRuifsP1AEt3dibefJNaqQ5NPjvV4838RLhnsLd24ATWC2rLsZ2xXEST9zuHTTwLSyzY8xamdhiCWTSRF"
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
