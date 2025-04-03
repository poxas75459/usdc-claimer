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
    "52M6aEL4WGJikaifLhYNWPReepTMypTWKDWizhTtBmBWSKXzHetpJGwrGSTnqjs4zYAHyhcvZRTr5ZYa23aWa6Fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kfxh2XmLXxXyySQZXgVtcxFCyURDwrdCWG1LevRAyV6YFege66Zj4S4j6i6qng3Xb8f44KigX7EiUKH5btP6xFT",
  "key1": "zM2fxWZE3TJrPJJurPPzH3BqsQusa4wrn3FDPRAc9urhnW4erJUyiXJhBPH7cpRGUsiH1k9n5aokYFaCZq3MPhH",
  "key2": "4nXgUfK5PA8NzbieLXCcUFBGeze8Gr13B2e7xSj3D1q1GdN6Stpx2dFZg7whNZ4pMk1JnUTWYUFX6L9TuCUrXcFf",
  "key3": "42gxDKtvxN3ssPZ6mqMXF2D2YXwwEPcmVkkoYTPoEQniaBHJkDNKKFUnS4f3DFZscUTGeoSo9mTx7sYjCBBhr7nh",
  "key4": "3LXXqNYkhT3xQ3CbEwWYRvpSXmy9disZJMBgZ2ufhDZBJWQTJRPdS19PCmYPPx4Q1nsjZBNgRVBjapQykLoeqhgL",
  "key5": "t2ygDAoJb5bq6w2n4XNJUiPazkEkMayJXGywBm3vF9XCZU1cGraNMdZPuZ92Cd8UZqDqGRn7fDDWE5WJLCdsKpP",
  "key6": "3vU2APcZRTkDMJNHA3GPiL2ZFmWTNAu31W2K19YtcGPH9cpZs3ZDMSqs6X4CpMcjmvGS6RUcAvZsqmZAAhkAQsPt",
  "key7": "35zgHXV2fEPeNHffCK6iXVjt1kJjYXPqzqQndQr51Wwtta8925aZa1xz9EM2GrgLrkhLyzaf2kDvZwcKSq2f2DHx",
  "key8": "29tRLiUhrAVSbJthmPKHouowxVKymr6aXixEd5fm9kzZ6D3gERdvTByao6ehxrbvt4yGe71pyYBioDnhJiFLgwWk",
  "key9": "4nYDw38ktAcPx5tzeG34kvDSuhcZW8GTkTVhJgoKVmrJUCVCxj6btyXLuUzTxD7oFpfaGiovLeMCoHsYDiQSxuJd",
  "key10": "tJpjhLKV7UzztK7Gu3g4AYu45pxrN5K5MhxgprA8kQ9Cn2VuE4h58ryGb2LYm1oN8GPP7Kz9Uf66WYh9YPVyHNK",
  "key11": "5k5vZsdnDNzhhGwGNUqXGuGSjBrLCzNxT6BNJPJYsgvZ1kGh9vTQt6Z4KH81SBYeE3EsVad4A2TJtt5Tjf63fHVa",
  "key12": "5FY16nDbsWjV4MkwGzpmZwS85FxSFABgiCfSeJ58Ru1JpDQPkBMit4spTy4oupmQHBoQdZTiho8E56tZWZahCx4n",
  "key13": "21fKTpadrxVwhsd8iQYPJnLgSZtynK3vgsioYkXovHD81piVQbVfSD7LyuFUbEDLbApNVH56c3UrtUSazFB6Jg55",
  "key14": "2K5qZMT2z2X2HNbwNbDeXztPTzP9wuq2JS4T2V1ooHW5z5tpHVZzFG3P6CVnwJPcwbXKGT9TwawSYgTz7Uej5im4",
  "key15": "4mjSAdqfmytQfihsce3EgM5yb2HmhiWCKNa7MPyPfwRUWrq6Nvoquj6DJnf9P3VjX9LJCR6kiNc5snBMJv4XpybS",
  "key16": "3LoMVZGUNvazS6YFKqKyR1AAQGkRqKZd4LjrqtvW4PwnkjN8wRZXkFcEdTKXtz6BcjM2s7k5LgvRs9EK7Q5r6nQ7",
  "key17": "4cJKGryrUyfGeVo73L7PJTRFq3acCZaZqpkczLRzrZ8mdfVr5UYDdoEmmrrzL5DPwaevPv3xCiSGpcwAy3iZ1EBg",
  "key18": "MoG11T3ZKMJ9LRhQDiYvChzfD6t7W2nXzEx3DQCfBNYNMaXxELwE7sEtUBnSeMnyS2MQ8NsyDtxLzLKRjcK8u56",
  "key19": "zoaBPmZh7iw2Yg3dCBUVYJDb2ntChhTCMCbb2rhMR9F8x4RgU6GmPE7nGFLYVyfaCQzDpspddr1kJs5KFyo16hv",
  "key20": "3QZBRZ5nJUgTNd6bKHzPzUT9WETMEcTbycWe25ufAmKHdc8earJHFyhzZP1DkarYn4dtj9RNFJyJGG2wydp2PYz7",
  "key21": "3zGjjVnoWDPf4meknmLZb1xxxaSpn3jZ68NHVqAAnfnKXG2LRdc4mPADmZCHCTnuLyu435pQWZyKiTdjhXL6HaEv",
  "key22": "5tmGqwFrqmdn5z5aC2sbPGvVFAk6oDigQbCHVs4W9ow7ZMGhtJtWdu5v6N5h5bTjQTGjHik8hiAhB2P5FajbDnKe",
  "key23": "392bXruCodYkdAxcXXs7cc58nszWYqd9xEYEwyJqKG2JhPxEhkgUca4AgbU4FjLhG1jCiYZiCKEswZu8UhP2TrgV",
  "key24": "U5RZttEftEtazEDfgbcgKP7krh7YZm9nhxGZQVB3i5sT6eXjMgVCkpw7oGnmRXnFn7ZPu5epJ4iEScqpLPthgCW",
  "key25": "3w5dFwWhePYutLVTGoxBdk5UkJWA6JcazM1Q2NmYpBkmjVdjr3yZyWGDFomW7uZoTNbcvFpBWFs8CWUaskrzpMfJ",
  "key26": "2MxQCuJNgjDLhAGicA6zT92ex3eTo9MMZpC2Y5v22No6QCqF9E9XhSmGWfSyupXpjdCszEscWK9dFEouRUz7sutK",
  "key27": "24kwPbqmyrenci3c7bQ93Czqwboez5ownc1TJrdBrw5WGyPe6AUPhRQiJyTyaJ4Gj7Wu1enCwAegvFMeYZXVeTNh",
  "key28": "3viXbQg3GRjpERScBd4eNXAjDAEZi8VphSzjaoChyqACHT2yeNvDhGzyvNp2HBFgtE7qqZnaL96droXMjmRETdaJ",
  "key29": "2ELUbytxEQddQz7JqJe6uHRfLAkik1TT1vME5stURn5YV1kM52UgiCE7PHP5Cf7qoUv7DjQ93cVPKiNyP4h5SQe2",
  "key30": "2Z8TmVhXY6AuqhecWJZhfF8tbigUjqYJJPpPT2YNavxqUTF6HLhCMNZHJRFWw8yUKyfwcdQs6mMWfXs1o56gE7RK",
  "key31": "2RtGhLqGKrVosuD3SNzHAgwn2N9yCfW2H2dr2VVKjogjFWyFxyjAjnFEGHaeGCcpW4URbXe7a9JYL6LMySjpCuMH",
  "key32": "2wdD1gPJ2JLuckXs9vbGo49mTs4ydQKnr6ET87gLYxU8tM4TRFYhkTBf5jjgvuYZoPq24KkENYy6ghcHB2Pf6WRc",
  "key33": "4dAB1ucBeYmaAM9qaRvMaEctzHtwYoS3iDDxZ726kdeN4jxcSaz3yuSLnVdquYceFiQpHJuWvA5Mh4xHsYTfgTAf",
  "key34": "5J1erLDSCCEemDQCXFfd4waBLDxsoKTjBfw9LN6X7DXDmFhfQZWKC8DqHJdCfLHSuPdXmtCZ2NpaPmFZdYijnDZJ",
  "key35": "2Xuonx5ma3jcZtqBvr9GsH1Sxd5NxcFyPzrYVLZw14d6DupTckaX9HwqY9GMgbJgcamAFziwEmPWLTX7wbxoZ7WQ",
  "key36": "3mvuEYjhYv4ocpqxvmtQ9HQa8pZ1Sbam72BMQX7CdR2i2Mkvfrsrr8wwY2k4Vgc51vELLuRDBzEbJNnsDEyQXQyL",
  "key37": "3GExk4RAphtBc4gVFAHzEJHAuaLnhh6GBRk1CBngzMMwusqQdDh8ztwPfKEgpE1BnKpwEkFqCZgzDkWHaWx3CVbk",
  "key38": "5dN7eZov81Y1CnmvGjvBGFHBVDAjtxVhQn8qUMTD1ne35mMeZW7FVBt4h69H1q3h4QYcXYJvDmGXHzr3KEtt5XuQ",
  "key39": "b1KHAqe2EjS1mTejnHTvuK2Brom1ms8GnYbEzT4cxMozj78CuujRNkoJEkiKmt3PV8X59uJR362NMnNUXACzxMY",
  "key40": "Zj9TFwnNT7RNr1XUq7LNMNvsW2c2DLctNpprxKfWkHPNFoYPGhasPZeEkwXmV8nrrBTWpUHeZeoKxhuGVX1ikzY"
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
