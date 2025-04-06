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
    "5481Z7d7Vqh8DqBTFQtZRDcFUJeyjhqLQy4rZwvjo8MtwsucoHoiPmVkdVjXrd8fJR2wrbZ9qqv7dNtJvdh74q5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCYeMabJxEcTcsRUiDU7jKJRgRxH7nY3v48GsSBniDrwJakMQR9QmLMkZb5BbdNyhi5JbvDok8ntgZMGyD9DjD6",
  "key1": "bmtWGwv71TNaJabVB8JS7jR8iuuQBDMsnruUTxNnR6tSVksiV2TjietW3VCckH8tbrgzDGLqjo9xRUGaeCZzhyh",
  "key2": "qUm81Ek5M7TR2JhhWjw87orm3RoU776ht229j6xd92pacVDJX846cyr3sy2QZpi9nYqkuLgtzqqm4pX2X2yBggU",
  "key3": "2eQ7wGQrCytXgE3iVQfeH1RJ1ei3sv3GyiBJkmPhWaEsmXGdPSx7nMw61C7razh8aMAQ5LTR1u3oCzJ1y7kL5Svx",
  "key4": "m4zF7dxHnfWPJgeZf8SgL26jygJkkoByy9BnJKxB7LCTVHZDygVtV7KCy7VXvKVSZuJhGSTs9JS4Swcp8PZT411",
  "key5": "GKjsMhAsJjgnL4W3A79aJMEbVKnWfe8RmAPeHcn9kzSfRdBe9pa15vJdU1vaFadKttJeGp6iCBVqcxitYT6Bdyb",
  "key6": "4dwq5JiYajrRaqLAmEdtomgKo1BZ3ytxpPsuxrkpb5iD7h6gqWEJg53aDVBnTw42e686XAveH2YTRUpfLX7sRhLn",
  "key7": "3cVHZnXiWYu4xXKhTheR1SeZVxq6FZ2ADjY4T4niRHHmQrMvktEbwyHDXV4bo5o9zFjwDZLphqxi4iG3hX6Gdmrr",
  "key8": "2AN2juTcdBvH3dsDrDPwA38VQriKdrCRwaqJNXG717m8biZUTXuxH5Zy5LGYbK7UE7qyHJ86YVL1k6iLe5brxczi",
  "key9": "3znx9MZgHzmtMwsdrsNXDVkxL9iTwJSv2u2W1YAdwpvxDVu2hMk6ghTFGrEnqu8HkicoMrctnYsWS2iJ9vFkWP2b",
  "key10": "3T9hJyQEifMY77Ekj15Vf5yAie2UB58vrxTgt1nHyUrpGVD5GtWR33HyURRn5nHp14sxkE1B3qJGkwMBoUCaY4EA",
  "key11": "Jq2C2CdzUn9w3wk6PiYwwwSASPMymmKTTrEh4Mtq5sYEaRqrcJhDPfVdVifbgBgbP7Q6MgR17Pves2oHQRfB2KK",
  "key12": "5ECiPyX6WPEVGXAgmAqo4oJGmRj3K9XktvsfoJqafrenasHJkoyxbCVXf6k9U6Hss8n4VUzDfMST9MAcPVF6gWfx",
  "key13": "vTxfChu2dfyXfJA9cgcHbTn1VdpZsQ1CxgnPZWfm7o278czd2aeWkwSgrkULZWRgosBejpV1YLDL9R61JWKHe4a",
  "key14": "5dwRmdZJTtKbZkXQU5AKoXnxex4XB4kdAJBjVreNQjFBNDznYuDx4LgWSTiXQ5oYZRLim7BhZBKYJs5uW1HaTGX2",
  "key15": "5VXi45CcrwsM8jC8KDaugrnF1GeRhymM6Ywk88C7tpcGnmbCjd1NCcn5sovjHs4MVWRiZib81XBq9BtyEfi7ZT9n",
  "key16": "BPiJppeJwmFT3qwsY8Pq7Wh4f9EjH4iUMZjK7y36z9wbrsbYyEUbJhDvVptEPfKiydmFiAh3xmLCbfWuik1PN9k",
  "key17": "3RKr2xq48oQSpTVp373G9cNeVToheiPK8meTyyXKKa8y4pWM4rKUhPC9rDL6izRNe3KJxGEmZkcG3zfm4HUHCA4R",
  "key18": "37S255CXP7yaUgYmZu5zCUe4rTyYou9yci49U4tZTTN3hyunbvr4UzYnzeLo9jXrWtxZ1xF6xpkpriyy1KmSJZe1",
  "key19": "5YtLXD6AkJp7tFHFrrtVqBgK1gnBMMpFpaVPVHnosHwjshpEhoSLuHX9NMHZKfqiR5n7epwfz2rUVEFKjDkKhWms",
  "key20": "4f3wvuNN71878MrcbTYsHkXAzjsQRJHmDyxRND5tfVYqSsM7UDBr2B5y17yt7Sdc4ztrSGSGPX9sUU4xrHDdXTBC",
  "key21": "4jytQqrrC7LFmzcXAkjPMi6texvjKoCqQV8UBKqs3CXxEcmB4u7Dkhm6JTAxGY2oaMq7ELMcowkmiSXY5dc8Xhbj",
  "key22": "9CVgMaq9ZFhB9fvzcEQACroqXrwM2s5c7qA7auySJcZXG4K8S6rhVfaHsgY25FYwj8kaooEhVKQZxTVcoSjut67",
  "key23": "4p5NmZz6UnE7ZhJZQiSN41HFVWUWz58BeRaT3h7SWszEViJZVpVgfZV5cVnjRP388sNrAfizrW4xciFnYh3DZsmh",
  "key24": "4na5op9MyQ1wxkLafBccLkQny3CmEzQUSUNou2FdgUgsfDiisLfBJFo9xE4G9kZ75BkVw1vAnG2XvsZLWVYFtAqj",
  "key25": "3mNNbLv4eNFD5urgkWzt9MbFX5Jjxt3g7ThQ4FYs171iZU7ZK3yCCmjpxQXLQdxYADepMHyd1m2AKcqMA5Tr5bNE",
  "key26": "64s2fjtWCfZzwgiMuzH4hFKt33vQBMVV8hzLJTvxbvmaheQGQbNrakq7hDrKTpTUYXEnZGCqTrKyYG961uGLpxvy",
  "key27": "toVn1ZR4S9kWUfNBfVhmi76JLzXtWTrtGcFt4VMNwoa8uLV4Zo6mZoAhTQ6PoFpAJC6cwqSKW3hp8XWK5GW9Bbr",
  "key28": "3GnDaFMqsWuC3Tg9eit3y8zaUADy8okaRvT6gRxw8VmpsNG2g1HiTG1t3DdzW2Vd3rpVBUkL3AGeJwBRKX1aTQGW",
  "key29": "4nMtMDDtmB85XLYVAcy3XemfAktBwa34chBfvZMYQAmLC9EzYCFUhK2v63Q4WrnZMSurkvzHVvRX8QrnnVTy5W3R",
  "key30": "4Y2x15Z4yKJRjF3LBCU6u1AQaaR1vEGWApWYmaXmaUWXKcnw3v264nRL5Xx6Y5R4QifAsazttXTbLJNGCcuNMWq",
  "key31": "5D5WTsLvZnmJrH38nQho4KMipDc8DA4Ki3PBSqkz5qFgejhCkA2xmi8DurteXeqv9Vmow7i9BwHKf4LTdpafqxAX",
  "key32": "3MxdMe9Pnqc6fDkKTQBGmBsRVbbZZwfX1jEEvadF5T3d1t3pFG1JEKADowKiib5PMgBR5ZmHzq5CXFpsdKep5Z4t"
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
