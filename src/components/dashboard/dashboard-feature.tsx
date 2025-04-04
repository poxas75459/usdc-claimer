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
    "3UxZuwFaGLanmhex2mdV1kFWQ8zUynmpGfUPZP18jnNjN9jWpANsQFGVEmnRtn6nDyL7CFZvAK6dvrRQ2zU7Gj4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAg2QZF87K9qTNpGQCzkUYSmZ69GRdctH6rLR4oawGaU7LxZanReDHv1Af2KLwsb7Dqv8zRYK4cvw2gaxtceJbb",
  "key1": "5pQVrQNppfV5qKw8JrH5kdJ4LvE4gMrTFNiAasyyGxgqbHomdukZ6zGnU6kroZQ3B11WVmeai7LQ9rp7kkyd5bQo",
  "key2": "3Lht4CzMYEgYvKyqFANTeFk6sTKLK2TBKLnWsaHdfh56heBQitJqq3u4zZtMqJnWzwvMNf7RLH7mmtnjtLooX5Rh",
  "key3": "EYjjg29vFKeUtj7aNFwP8gLtUE1MsR451wnfm2XwAKbjBMXoY8VJxyCpnF6FzWx1BV2wwg2PaPjHctHaTDHZCWV",
  "key4": "4St5QhterGmtAXCVx7bYA3hav6FRAttGpGtVpRHL2GqEk5z2guFbTzr8ygAf4ostj4G7VVq731m9UTPbAn5HyjZP",
  "key5": "3asPC4HekRYczfW528D88NvEKLL15NnEp9KMVA8mvEXdJeAmpd9Jr6XM97S9y3NqBod4KGucVr4VXcnCYJkH4JPn",
  "key6": "46osZ9NL4mQTYjNNcjJpktNd9y2HDtkYUPdn64M1epVXnNgpV6V55XatXQrwLhxFdo1qbnVrXd3tGiezSVggNtii",
  "key7": "3DggVJLi3Nf7oN2vU1Dq79PDzBbLtE5KgUGH6QrNSQqqagMuDvzhZN5utmAS4uV91KeiTPB7KszVTJ267gfQZ2Kh",
  "key8": "5syVhPYGdsZoH8EV8Qjw9auYTEFAxWa2hSNVQ62abfgxTgvCMJtqvW3psrgSyna7Eq11XsGXGXEY1zsjac4ZqXMF",
  "key9": "2BNoVVrjcA8vFjnDn8A4ueJ5HHy4sSDr9pxstsDYuFvJJdac7kSPz9YmSqjC9JV1ecCHPoCvjt9HtXbZrakjkHXY",
  "key10": "2ERjzZ2HhJtJF7i7X9RjYz49Usg5L6pb4J9BuQpmjCPtgdU99YyYT67PhfngRd5CKxuF8oBXtsu8wfyiPbwPFHX4",
  "key11": "2d7ALnhmEz5yKAoESU1QNAWP7ubaZ5i3XxtGi7hnXX5FX1m6zrhjtAFHk6Rn6YLFoqcMUcfWsqc3hQxexMet7bNJ",
  "key12": "5ESp24ZJZNbUC7WWkKbWsvuJyyC3nBZE5djyFisNLtVauLStdbbxLYLgMYEcFbuudifr4pVpfThmpz4pzHLweGon",
  "key13": "51rGU9NiomAeENeeWZyrkWCUaE4Y6FhtJrwhZw1B21u9qjxLTLcM7nyiR4FaLGYijZvY8zbBcHRJh4JEwGCZWYbQ",
  "key14": "4NAbjdcEvdQBENTUhiaNXwMWciMdpuLtddXW4u7g8J3jr732xzhrErN6xbaXQ8DbarGeCGRkJTDax4dRqaCCpYE8",
  "key15": "5JcNH4vJd6TCYFRSm4XHAewhCFciwtfiZZihH68Kk8nuARbVDSchNP6DqUTyTZpaLZaacCerX9D73qmYgivQHTXy",
  "key16": "mSGie23eva5f4s6eEk7JbcQUgCEAMogziyEjZozKH5wo4eRVRvDQFVztFg5Shd75hxPfNcgxUB3q9LLmYTSYmLu",
  "key17": "2AiXH7KeRJA8xGDejrsfbD32v9e3GKTRHob2j37aQfWyh7ciB84iQojY61w1aMyBReUBAiwknbKacioRenhDNZDm",
  "key18": "3zVJhE4dN4uhjFTfCPPC4E4JidUyLKSaxYVZ5Jj2h3N2GxJQZjP1T4j1kC35yeMUMCmUnWYfC6vVrH62wT2vYCfe",
  "key19": "Rb5Bgnr87VprpLNiD2kewL6xkZZgVSnKbXrkfbpcEDLEcDNeRN557DZZNeTDuPKn4XvXXngmFD98qrAVyDhtA2i",
  "key20": "4vnL2JzE7c6umdk24qRZhki3EEx7BXrpmcfX8Kb3brdFYRhXNRef3zS6y5amHuifcF1ExXUYvdctK6ZHm1i3LNai",
  "key21": "65VzQR3GhbF1arAfdYGBay7xCuh73sBkkktjSuRekXiL16sLDPZRkFFcnbLBz3TVtQ3beHWEyWho9T8H8kw6oR4F",
  "key22": "2y4uTpJtSpyoTcgLGFHsEtBmq39XXXnfaNsTGktAyyuJwKBMYeuKxdXspMEpjfKhvSnSsd57nsQQevJPXgEtqwQy",
  "key23": "5qVUWmXhVzvpQUqZzrof3gbXqtLJQhy6xG6Jx9zNDuTbPzDSiijyBchEPx3384yC56St51Z17xVgvWPX2wbxbZzq",
  "key24": "KKWcHeJP3MfxBgcEYKNAPfc5ComXzmegb5JuVP3mMZmzjm6YA3PK1Lix6wDpps6Z139DAqY47psSCaUVbg2g4As",
  "key25": "qiK6XS9QiKHMeGw3BLWW4SDbmt8MmANs56HrkfeEQYQq58Sc9C8xAQrTgtowmXKkj1HK4UebkzcKw9jvyzwW82u",
  "key26": "T6FK6qN1X5ufsMQcv42VYmvTMtT7t4oAR6M3ZWEyGcmChgn3KzJvh38tg7bVvgrFyH2Ai9dLzHjx3jMQUWKMbZ9",
  "key27": "6uhmJbBvGC5VnTXbpdr68r7daESyWJcNTThe4CLZRfxKE7e9BCDmQ7HP4MaXe4ZnVF5zFkQsy5k2sKTQknEWV16",
  "key28": "dvow4bF8csJyrMbZtNG38pUVh4VjqWdC4o4scT8DMvFKpGAoKWwPL26r6uLnFbBoXei5saRFztyDUkj5isqxXcG",
  "key29": "5UCxGrWrTu4c1ajTpMVXr56xNvEwpDfVz3LsN7SsQHDvnNgbKnDkLGnLZxvMSkNNcQRPxARDsa9QZMhwTz5vUDhy",
  "key30": "4Ld2n4GQ7VNXr2Vhf3nVNWMwFvLrTDTND8qD8GEMbT23RJTaeCbm8MAVTZGK6x1gZfZJRSoHDGXcwQvPCZJQ2vv8",
  "key31": "5PzuPwatuD8f4GCRRGeZy4J4mPF1jEQn7db8FkHLRNGkyghneWgcJmSoGGWPbBoqYivpKVQfTq35canuaivmdscU",
  "key32": "3sFL3FhM2LSqs5sLXwZFK8cx88cQqLtGh4mkEo9sijMnREgYacf71LqEViLrU4PuGgtQv2CMy8UPsm9WepPxrzAt",
  "key33": "vrz1DK5rNK5tgHn7Rv8ie8JRUQWAgCjZabwYBBpRBmG1aeSBxEvCtRMn7SPhLq7ojHRCThzB4tgSin9R41HuVo2",
  "key34": "3Wzc9b3CZLQR6YFGPeib1cJuyZwsPNDpR5x8xnfV3xbTFiYuC5tjw9Aj8LQKH91vZgrnwt1KmfMMSKhBCiCsDDnQ",
  "key35": "5YhuYoiL2ufyG5QMMTFoeT5fDUVENogduv7eXQVHS3LtpqBCPXpoGasM77JDdZhcy4GrhuKWZWFoXePTYzt7wxok",
  "key36": "2uH9hcRehvFZYKRVYYGTGHYSznFSM5NdyoK1x3XRrqhbutLeZ9RXz84SaBeuU6taGpTxHLQQHym1z1EthwNtWFWR",
  "key37": "SeNQVMv8PfTHj2zAnc65a3a5Kef2jN1yegXQ7X26Gd9zrjznXd7GgvDLnj3hQvgTgmBRhy5SsrNEh5c6J2GJVHn",
  "key38": "3oTcSbCVC5gX2h55z4PGxE8dmJ7k8WVrAZ4mCLJopVVhQc8QBob3w3wcTnxvLJsvZ7jdBApitbWqxDkRsASirSEN",
  "key39": "24VKA1s1q4iq84j8iL7VimwuX8GwoWuai5hMBjQvq35LqQHurUXWcSsFQCuz5chdMbda1v2hdhx1KWGnnVx6nd6z",
  "key40": "K9S2jQ9pBq9z6DLvYEWtkSeL2k2mLEZTEkrxwfNvnZPzRN2ZBQkv2kvPiXMGNKkYpzcUDsuDxojRY51ShpbTkVk",
  "key41": "58eorXGwZfQ1gFbedAGnQvhguPzLifuBhD8vnKg5YRMsYZMUVt7EpFcy2jrHbi64FPz4QSou17i9uBLyTn7FoEvr",
  "key42": "26rtq729U64eLfPDA5ezzNge1o3GpT5wMmaAzmWe7bwGd4dRTLvPKccYT6pkBiAsJMibRyxLX8cUamtuCfuZpAHt",
  "key43": "2wGj3frcaZty13Qmxr93aXT2eFDH8G9AkVJJy2hA28K4T1wmWvtTtfZqvR95NLSToUCfVreePP7iz3Ng4NQgsqnN",
  "key44": "54z97cUxJqUJLPaVpxWVTueJvDFX5oZZNP6U4K8VoKqWRo5zvU2Q12GdRJGcqAiwwsC5QAWnXe2zfQqYRui99erL"
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
