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
    "3u2bdoddSvxVRTf6ArAGePsRQtdbS6jM5LuSmyqH45wcha85N6yxnD2QoC2WAwhr6daV1Wsy5uVupqCbHvkEY7vQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gBVpQve67LLR9n3Js8f9REWdCxbAd8mRxE4yGaG4xYXEMwQnTzHSASvA8bYxLc5ercpaYvHHjHDaweDzUgAzpYe",
  "key1": "3QvNbJrpbwGspVLeMgcfqoDP57GBdUNRXYmLJS43ZMfPvUZ2sQVPqJAhohGa3Nw7u6YSSyC88AT2tAyPX985dF4G",
  "key2": "54iuXapVZ8XijW5AnuPpKuySUpqaK5up2s1Z5NQKYXMd7BQjY8M8UH1Mnq6JbKcc6agTcTpNG4CuJucYpakkXfFR",
  "key3": "mKNzKSt1YEC6jGweLapXL4s3CZcu8fLTaBQb6fVUwiD64NZPyLSNeVxgjqm7RapjBPyru4MXeAPnWtxJ27XxJa5",
  "key4": "3b8jx2rSnFwEhCmy15DVpyzokeaezpRKDDw6Kc885KHMhNo1moEhHyb3TdSaomazKNqKUqQhs2fL7QrdaWgYuqks",
  "key5": "5E5ntm5HzzmDDTpH2MWaiENRDszeBauhtJpDk5CxwzGkF3ZkJHSsvYwwwKuzUdsykuUbG41hDYwbihT3AG629QQh",
  "key6": "4KJCyLem4xrLsaP43NLZ55SetDL4tBU3QhoVLz56XysHK8ArGbqqFiv5rNM82P74WQiHTMNmYjCyiWXaASuv9LeY",
  "key7": "5c6pTwXPn7VU1APfwTtmtBHLzQAC81FTd9RgywKwYcRxXfr4anPB5uvLuKgEbafRJm2BtN5Tb5etfNAmXWDHEF3X",
  "key8": "3HcTAtDaNjprgpn1pq8yzGfQp7VHXLz7D6s2BNqcTXbLQ4TwnoxVbqfV2hWSD3kLRLxfaQLWRUBD6yCZ95bMw5j8",
  "key9": "2xPvgyP6srDKA9VtE5rYNiydyDF4GFiMJNMCxfvmQ3so6ooH2XP9W6sSccHVBN1RGBaPjHgP7A9iAzEMZzw8UAnD",
  "key10": "3XW7tyBcDhfzZjvwxw8vDwdBSpP2nybUCZb2CrWTu8ivrrkSSBgRtF864rthctuPyNfc9T7DW2yNPi3HktmpXvZy",
  "key11": "o5EMkiHPgNEH5xQHjwvns1KJ2tZVF7kPMukBtxC5899Gfp8rWaTh4wRyNh7Eij7T3Fhy9uAJjiEdJU1Hx4dC8Um",
  "key12": "3LYPDCrV8NUAkrRG5ekhhZ2nWFX9mg3JtAFh7xdfuWkKfaQ8vRXtpyyrzEC35bEsxBLzThnNLYSYSY5CMxKLghr4",
  "key13": "2b5cgzbLXoakuEJeryQg3vSyoYsAa71UTeiLNrdCtkhTasCLiqhMCtRtGTAtHQTnExAjNG1c9Mt73FVze3xg6vfU",
  "key14": "59vcjyoqpWhgGsPQjMPScpigrxyYGPjTojvigdomtqzCxqSRrdKVE3AUJXEBjAk6nnWcg4zpV66MCCzjpgADqC3r",
  "key15": "5EM2JmtkgkvSundBHYP5D5Z7rJdojWg91gyLsG98ax8RnUYPGfhT3ewbWpgc7K5od5TRxNMN2zFwDgSxqB1Y8Eyq",
  "key16": "5dFUtS8Hc4BP1TVirJuSpRjdXDaenRFSQ8CZhGmGPfx1oHXiw2YkaHjxzPxbLEhSB4UQHyLdn9PJoCvh44DvLkRc",
  "key17": "2UMS55M36CirQwd6X4vbEthBe431dLmmrCAFQJXq8bkcoTL2a2qXv863ZFn6MCRwLPLTwLVGygoXkAnwtmdmB29s",
  "key18": "Vp68k8mRhcFQg47b6RPWGjSTYi5j2n2Qgn7edY2W9xB8JkvvbBgWay85ee2VABQJEu24kyemY2i8dK2psLnRyFU",
  "key19": "2Ny9N6HBJdFRGwp6GhutszwkXx4H3RX6KNABHoYzEzWbPZrvJ3TKChN63YEU1G4i2FRUSTK6db1oZtWhqjNRTm8w",
  "key20": "61oC5RTzzFMj1XF4Vc6djF4y4fzJEmZuQhWpZJfJJsphpKNY3Wj2cJsD2nMLbszwfLMyiwARagN4N2WL9z6sPdZr",
  "key21": "3h6Cvw7roLCqMXj9Ys1pk3FrwUPw9Sc9CRnLfpvfJmhz5NnhC19GJBKjUSoYDPVddkkzQcTnW8X6impPJ1v8MeM4",
  "key22": "5JhJNDXNDegafC2unm7a7u7m5A1syGvw2jav5si9YQ51Fd3cmK771SUgTEkdZXtDwYYy6gchDyMj9q4XdN7zQsZU",
  "key23": "Ab8z4EGF6PTYkizcRGrRG656bBRgDyevzTihs7odGUL4qzVuX515sj2RZvA9k7UyVimPce3jUYFaY5Cwvnm3VQu",
  "key24": "37BzuiKKU4c3RQ3q6SH6VtQhn2vpRk87B4ijp2kY92hFcS8WVBWT8NpsjZpZpT3PX6U2UM4zNNZ5HgbbhQCnqEy5",
  "key25": "2nsYTxBYkxYQEaX4ydH7Mo5tpG6XvV2jN8CTFR7bayXsH3nNqrvfD2vDHi323GKdXGjFgxsEvfXDhuL6ey2xUSkW",
  "key26": "2mcHRCy7W5CT2Wzt7Ex56qN6vXnWCcSEBdyL1aaM5WM7KoJxof3sGgSj6qws4H8cKUaBYwEMQNgyLstdXLW3axVB",
  "key27": "61d7LnLrDANX7PjFupYdLN4vokhtCAY2CrZ1y5bUYkCmEFe4ebKHjmnBKtAx2KrGJRjWZCVULkpEBriWbAT9DiG2",
  "key28": "24QwLwfx2JpTC3gEs6Xr8rnkW7yWGpFDiMV9knDA4puTuMGjHkg3vEJMdmZfyixv8KmTxo1i4tLCVxQoS2Wn1krZ",
  "key29": "2rTkrfXT4dHYajU8kXcHCsyzWhDmuXbnv2VhNNNRaG3w7oev5sF3geoFqnuqHkbGXHTvVHdWh4j1ZHJ1pqwgGr4s",
  "key30": "jEHsQH8kRxttr4h2MSDi5Zf75EAiFUe28gt8fjSST6oEE7iXFXU4iCmfRgvGHqznEv1wajuYUeDfoCHYXxWMee1",
  "key31": "3B1194yvqmFmvp6z7GmTE4TmeMatsshC4Bvgs95rujRzBT4GmDWMEDxjYyWyoL7WfbxHWh948TiDiJbp9vTKCG7h",
  "key32": "2MwhL2PM7J5GPzqDU4wZ1EVkzhwD4KudvpFbLRkRsLPSe458YD8JhvzAmLmsNac9tCEUMeC2N1HaLF64DEdbd4WX",
  "key33": "4yFSs9vuEgzBk3sCLJ4EPp89TCwZFH4QhjGfUkNPWvXWu5xvpraVaqAXbmrM1Yw3Hpvgtqk3FLfX3M3kmvgeVdEY",
  "key34": "2G2LWTB5bB3rQbmxczodXAwmw2NopdMKhWN2Udaq5rA3MQgCt1aYxRfGqUttUgkdb1J4C7uq5JsoFJVGqNvcbA2Q",
  "key35": "EAy8gu2WedMhnwnNoP4Ly8etvGvLhqdwEGHXSQUXTypsvL156PNN7CjXehZKpPiRmtGzUtYdg3N92zejPRM1RDR",
  "key36": "3pkceDSjJ7FcjZkdKuDfXJeadpHLFu5pHBHh4xNJ5PP3xH9fTuEMAZQYBd66MR65W2C6UtoCFY8iLYn8MWPDKNiw",
  "key37": "2X5sZqBZcwiFafocBJ9mgy3h9koeafvcNEE4NDaSaz5aRiBV59r9rBKbBB31g8QJ8QoqHNwbAhgUDh46Zoe6RyTS",
  "key38": "4nHA4Nd5oWvPeXYHqb8CdWb6fPbwzzKCuqT6DX5ZVWRL7EQLBh6YrPubSvgPneBi73keq8VqXVV3ef5AHiAj5kAq",
  "key39": "4aySB15YmYD5svs7WuEcWQq6tpZNG6rwf9LQKFc2iuarXdBLUML5tY3gN4Y7pztDRxDjmujTz8c2hqYZfYjx7kuC",
  "key40": "3pxTdbhYW4dJyZWwtEZ2zXgDByBCsg1FkAtckJQkts8fKAxbR3cwkAuPuSMjFSP7udFyAPZzRoxpw3td8YRVpNiH",
  "key41": "4fkVDDzLbT2WQ8UyfjdWxaThSo9pxzpBLBUJJ6X63x5iezTqnsoX6CDp4L1GB8Hecx4jFMNiTNoTbAY1m3tXtP2e",
  "key42": "5SEF4zKg7TY9ummbvKJJTDf1oYu6NQDdqtSZkMZmevh4WFg6tY2GnwxcZXtrseBacWYtBWFpzbtrC7LogBqqowaa",
  "key43": "548kxsXrQdXEUJhLoGVWVFRizmrMZvMznyNruzD3Lhamk6LVLyjMRGmecWdj8AXUj9BaBiirbrGRzoQMfEcWcTSp",
  "key44": "v5CC46yPt98GuRqTXqrYAqbf62d8cpRFDCmhMWkxiD98U6h1bCBEKA4RAhgDuqv5XZP93QuhH5if3tvqjS5fW8T",
  "key45": "47BvsKXNTTEdWHL16hnpTGTDoSz2AFPAPRHETZDWC2nGTvdBk8ENiekdmdpsxC7RVNLBHvCrzSG2wQPPSkbfSscm",
  "key46": "xDwnWofJLGXEfJvuyj1rfW6T8q9vUiA2nuDnNBBhJDvGJJHMoJNBxsTVyoETQoETGGfJiETbe6WgoLSmZ5X2fpR",
  "key47": "2mYkB1FjQegqLidg6FrMGWBpVA9QoCSgVZdrXWcNJZ2CjpZKUCDXFdYTViPD7L4UFi8fnmeEcdmrw9LNCHmQqVUv",
  "key48": "37ssCzbRH9kqqUN5aStJSZqi44n74dg6MzQfviL44zg2HV42yxkoosEPXT95j7JrNNG7bjRQz8WDjyi99ztXmXkh"
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
