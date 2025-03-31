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
    "3ECjcBW81y547q2c13TX2iPQ7pbdYAzzsgNHtPLNhWGqwT1jEp52s9v5CwoNnYXGuEftC362uBNxrj3M2FteoWWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kr3Q3bbe1R3hjXRD1z4SdgtUysc8DGX2zmxCvA3YeBdHMdWGwGSLkwP1rH3RGiNug4xakrRmc9Vf7V5iys2NoM",
  "key1": "WP1j974BActcZSfLnVyyKvxaxjzyb1RsjSHwuQYUZuxzSiyzErLbd4WxPaKGXejgiHiUmkGEMm2DrYb1JKrLatb",
  "key2": "JPXbaVQE1eSxJZs6JZmRdgmRhqWi4bbj9eTWPCZJPbQF2QjAD6ZiN9kVG3JY86WXQRoZiyU9rZdLWNJifdBoXLE",
  "key3": "5yowY8FHJbhzEwXDYG43s7mVWBJGHxXjSFTfHaL62YqNGjzbx2ZSC2c1RapDVkJwUgnhya1ReJkP8XxfD5NJjcxk",
  "key4": "5dU97AXph2XAPa2Cv6x9thZ7aS2S4nKzukosKVV2CHhFdjrmLHfhiwzUDUJbRGrSrNumiCGa8X6mgr2umKm2wRHb",
  "key5": "WCeUip1P2ZRTjwwsgzxJuiFaczadCsWE2YZCQfu58p2a3ruqTYZTbaus8EjhbEjFzrJzrE6rQZWe6z3i8FjHF9o",
  "key6": "2kYPJ7THS9bsKETZqTpLS3qYvsMudcGvncVUDV4ME4THtzKuj2D1e7udQGz9jR6xNhpjvXZw1ncV7rW4hQjHHEc2",
  "key7": "3ifs2jiwywsbw8q3hbqoTYd8bzSQUPKKpEL7WGVoa5KKE7mWGGzQvx9kA6xzCKgBrcJkbMPtrptptjSJkZymJqKk",
  "key8": "55daUgX8fS9ie2in2xLQKufmUXRooCPyNW2X4om1dMgYD9XHchiLvef2oQELbwJZA7kBn5TXFVofMaGjH3m644JR",
  "key9": "419ziyJGFAVvrDMv21UPLRu9Zo1yvVmwjrA3J5zJ4QEiuMHjhSoHxXgCBE7LTyHSr4dr6NoAwv7ZwUPtUyRgZygm",
  "key10": "5BY3aSz5dvv9a6op7HYkvEfqMbjdoTtuzdhsSCySzLwFhyb1AaDq3kWAvtSsNc6b2NRkQUMi9chJJG13NVV7CK6H",
  "key11": "4cfikEqZ2D4RxqfjZ5oiSER5AiC5rn6SfMPCtz7oMKzatTHnRfWg9Vw2wAofGcCEWXNEi6WZUgfJNtWGFWPjaBnS",
  "key12": "2bpsZit43F1H6bsTaRnBpYp6thptwmd1QPhgGod1T8a4kSsYvTc3urMwB8XzZPbxHeJ2K9qENWW3hNp1Vm7oHCCn",
  "key13": "kmx5v3WphSxbqxDcMqrSx7nNq3pjYKKxcMjFvXZwAN119jPwEjbWSAttnVqxzZEz7HQomZ769Nre2T6wVEt9ngw",
  "key14": "2GXVHF4ReFzdDNM9agQwFRmhucmRFSHtkXENq57k4ULirbkQi6oxeuxxrfmY7NH9b8d6WANtvTPLnzioeQedSfz5",
  "key15": "2HPYLy1JwBvASpDE9a8rUFsjJ3G9CPq1oM5yTnqK9We6xNEaWxwUonTMELYnDhiwFBQh3JiGep2TfNqXB6PCixYU",
  "key16": "5T3VcEEirmw3KpqPJ9baabjcQMTfUwCfKnwZaSPaWZLVgGCfLFN7uSiFQLBsquPKMMdS7oS1fG7nE9qvUuCHQHfW",
  "key17": "3dZbcaWuGv6RoFe1XA1aJfb6vyf32fyxzX9YqyK2DU8hnGy1BUq71Z57t7roRaJ8GTL9BxUc4aCbSUo7HHuqydgn",
  "key18": "4BFD653NDVqozxpjWr9xhWSpNk212deXAa2MTQsgL4RccDCYEWztuCf2fQoLBcKsvGQfBFD3J8iBrj8R2nL2huYH",
  "key19": "3cw5hoesthLiSdyqRvaK4MRKkQ63V23xzrXWNpWnynvmTtpHoWHUvfYkmnYZeG7ZbPzuctur23wgbsdDQj4sjbAx",
  "key20": "NSEESL5WzmGf9gKm2vae7ZFrxkskLeDKqRtnWZhKHAy5mdocfCV57Uw5FyuMAs6UtewJ1LbNLaLLsMTtCQdskTJ",
  "key21": "2D9HDpd3JVsyY3k78XtVcKSXVbtFeWnWpoqy8KkFM7Az5rS5ucvpRqVTXnodFbkBiFARYyYhoDb6QKS5RCix9VBx",
  "key22": "3xAPd7V64yeDjD44aoMZHtd6YXrcfFgh9cmDFQki5GVDW6JCXBhCmB9zKbL2ugEQDvp3dPEcwjm4eQ4QrDQofWAo",
  "key23": "5gFV77QunPFZH9tTMRWJ3M2nuHnUt42B5vkm9wEBB3QEDUBou9bxFv5uU4Yjp8cNTXnhSTb333mrPrZavV4MTc9t",
  "key24": "3Xc5JGzZZYcwaBedV5xxfRW2C16jUdvbp82ZSmVcjoYLzueZqp78MHYqVvxCRa8oirJyg5JmBFRrokwMdH3qRGg7",
  "key25": "5Yhsiz68wrHuufXnqFafvarEF58EriJpxyG3wwDTXTvr2g3SrYR6J6ue855fQLzjy6LT2Wtt7eD2eMcoxx2wugrS",
  "key26": "5cKwt3LW9H8BVUqBBWUr9ktaZB59SEV9uoDicbTN8xtjk7wi6AiiQvitVsDavr5CK6u4qjK5Phx2aEP8CMqGiMhs",
  "key27": "2iVYtLpX8ZY4Y4w1ffsMx1RSK1uj6ZkYCVZY51QFRsYkk2J4BdCXbeKLz6VNcMdr5byzYZNxWKZRmYKpUYR9iZok",
  "key28": "3VpUe6WJvpSpdUGXBcHyhHEkczMf9eyj5jUASpUCBbSGW1zZY2eLEKgNZAAD9f6hizYeT39AQf9kBJMmkt7D9MA6",
  "key29": "SKDTi7U79UuVb5rGjexu2TkesaFseqx6EThoNvWjTsUMgty4HsoQrZPJ2GuBYmKXYEhjwM4DowJU6r25nPntGTK",
  "key30": "5gD953mcGQR6UshSpcz4BiW3wDiueVjDrmqr9yWFbeg7MARDaQPdW6yPKV6HgFdYpevy3mULeRS25ioNk7MRv1SL",
  "key31": "4AZH2UWuC4dd3Zk6Q7RXsQiziBF5ASdBzn9wgfRznzFK7otxJpmwJDF6rh64WnfreiP78UtgDwJ64jUtmhre2t5u",
  "key32": "3NZdWpTmysyeuxhmkPoUGKRHmh6hT5BLtCn4Ass6A79qngGPyQ5aAz1bzjieR5bgeAym138NFgbjnNz19RQUtQCB",
  "key33": "45pahjTDBww878n5D2i97HeTxe7YDwJPUKpnYeNwkXhs2Fg48oVeGP3iVAiy5VjdEQMLyM98cUm9zaYhGWjscjZZ",
  "key34": "3cpK6WsZh1uj8tu3tYnoUvEx6Xx78EjYKDwRpRtY1dGujqPLSW2yVkvYip1x8d1GXJuGwyy6sP9rMDMy8FucTniC",
  "key35": "4J1QUEZG5Bb7jbCebqnLtCnFxLowzPz78wd9XbzFVHvGNQWxAidbojAcjYbX68XgKmTv26LPGvjYecS9gNf4TPbn",
  "key36": "4khCUt3hPsWb559WhbfBmFYrtUEzZucxsoA2bNFdbgf8CVZsRbvHPVFEBJ8hhMi1fX8BVg3x1x8dsfUCQaGiXTfB",
  "key37": "enzyKXpxz1CLHSQQ6tnRpxiwEZCcgkicZ7RT7za2h4DdNmrb8uzYKuquTf5EExLoQX7f5qkebvoQnu2hr8AR48J"
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
