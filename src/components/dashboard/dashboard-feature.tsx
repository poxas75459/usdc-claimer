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
    "4wuJTjA9VCRKjvAV8cNKiQNCoKe2kdwbBm7Y1GxM6LepULcKqBtu3MCJqZNrgp6oZxf1gMUhwzJRuP9yxaXuGMDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDjDZpH8Pbh2bRiGKAEFp7sSt5dAUzKaX8Go92vkQ86BHqhAv2iWgTNWpLenZYsaUoLeWMDHbAuSXyjjPNBm8JQ",
  "key1": "46Lc8qfwdUnXTtxBcQHZExZhZHvk1Ppnrc7ZNtbhWz41LhpcLvBQtLHEqLM1w1Gx4gH6FpA7WwQpiTg4UqJ37fUd",
  "key2": "38s3tzHNFLFbhin8tywgMVSo2Zrnm6e6GskXCYFbKe9xNEMdk3dWzDaZ2geBDbygyKHKiusfKSoPhj5Hq9xNvvA1",
  "key3": "uhxmuDf1AmxBm79Gph56FjaB57Snc9WVARZytYNc6h6eXfw2wMvntwjX2KMe4PNWAvUGXww53YfRzUZe7XDRJmg",
  "key4": "37K5QiGr5FVw3W3z2oMGE2fFZwSYwRBfAqhDqGwY4xGR7fjPbpCiqsMpR7yRmBv68ebyRhDHKG9SXPEMbsxe3TJa",
  "key5": "5wefEVf9RUHZLwzawcx7iGXM39pR5WRpcPgBBYDoBPHt1W39Xk48F7qVr55yMdXZRwGgFvsuSU69K65MtWrHoYZ",
  "key6": "2iMP9eS3Cw5gBUMzK7pV8vSoo2xQdE9xJCbzvvzXgDwM3vTdoY9JSR7xGbcFWoTyW79H2DoZheq5yYN5yV3t84sb",
  "key7": "32WiRZkXw3fYuM43tYxe6rwcafgNv5g5V38pZrANNrZMj2YKPsr4wWaG1Z6YVYRaGVowi3GdLGwpixguCwXr4SXG",
  "key8": "4s9ytxmpobvcpMmiTZphaamdo75KBBErtSqi1nY29Jjn88oxCUf8nBkPzQ86g3qj57xKWnbgeP4ZVsFCKG7uLALA",
  "key9": "3jvyuWukj4gv4pdFKtxEiFKt53jFxFQ6kMqdQrYMeve3p3ArwFCaEXcCE2NAQDHqcmXa85Mpj95BDapitKUXAxwu",
  "key10": "5gSBBmS62u9BXcCSuE8JrAxM1NfVy7Rxcwi3wHMhqApN5o7RVnbomL2HbXRuDMA6pZsb37rnTZzQW7RV8HFXE8Wd",
  "key11": "52rQ9z9Rq9AfHBm2mY69agann2wj7TCNY7CBYvtVbMeagGWvVGUatyC1wW9huxRTMYCkXbzDrMVdx5jptLQCQZDW",
  "key12": "5Ki88K1aKbmSAq4QKnTLCquRrHupLsKFuY2NfPKjyzKqRAh7qgq9ykMGtqLEY82AwgweZ23ewV6SymkFp5bQViBw",
  "key13": "57ix7rVukfJzYYkJk1Fg4v5hejcmKeXnttXsEWYgsvZxmDJBghhd4Vh8w6YefprGfLps69nnNqBRLbH1ytNtoZNz",
  "key14": "kxJqu3EFmhvNjPKo2NSbizSE6xYWHadpVfcPC3n8ev73gTjcAtBAAdB6f7kTeeiye4Tuyh4tQfXPiz8U4yV4E8e",
  "key15": "5k3MtGrBd9FNUFxFXWhRAopieqP3aNJqG255He6vzF63bNEVpt8E7Zkp3TiFVzsWaAA8fZd2c3JttRBjeqWGD7ng",
  "key16": "3AKcz4V5tSQenKsuwU1nJATkVvBmyixkJSmj4yJrh7RVn5GjeeK5E1o4M7Y1MYpAP4kPnxi5cHdVdynMgzZpskzb",
  "key17": "Jocjk54irJZpREiJKMadbR2E6PP2PQ2oseqvCunEMfKBeoDerFGqMfSGd9osDRcP9TimpQbW1LdMEG19uBgswou",
  "key18": "48PnnAUQjSX3P1gvKoXtUy8sC1mdUyZWXQzjd1LNnFfiuHksuQegSXmtqug2oKJd5Aewx1PLkuwDcchfSzVxiaAq",
  "key19": "3tjdV1bN5SofNPL2K7cxPatViBbDC62CDd4y1UwCq5AcaMsGCK6CGnnWr1Cicwik7LJwooUGuvfaawKJFDBPEWMb",
  "key20": "4d39UMPBSU7BE7BJydLEPdj48UYwbR1Sr99ycpU5nNQugu5N1M4ib3sWbeHxa77eHFvsZgf8fKsuRZH98Q2Zbg9x",
  "key21": "4BAzyezGX3N8qGBWUWUnJwSiKzVdZMWY2cLtdLJneYSuNr6er4WDsYgh4RCDdDyuip4bKH4XNvyNKTNVMZ5NCDoR",
  "key22": "35HvW2H5DXSdHDYWD3B9jXoCWKXY3DvVmoKh2CLXkK1RZFYnqmQ593KQK5gzmBakRBLYqUu6DecMTEmqr1mhZS2J",
  "key23": "25Qp3wfJvHmFjxRGjN36eqsjstXdb4VzrouXQfsDLtYRBhzimy8ihChCqJq9cfb1rHh5E3Gq5QeZmVfGsjHcBMAk",
  "key24": "2TtKzxJVuCjFJs91k9RbEqjgTjV5nWz8AV87h9rkNr6EUZfUE9upQagpr5kbi1uaBzv3zjeTcXPeUZ2CbiSByE8r",
  "key25": "3P3ynqxucThRGZsttnrhvS78j9amxHQi2dX6D5fw2saP3y2ohL4qwmmDBHFmo5pi9d6VNGaYfL3Vv3eFEZXZz5Fa",
  "key26": "26VyoBHq2wEEkrfT8YaCaV6H5EYPLA785EWp2ZFDNtKs2rkcT3XWqV8UYW9yoT4H63VnYNkmZeQYqcKKAYuaxbvf",
  "key27": "4YLVZEHhtzAfWvg5nU1RgtaFyTgK68r4M9bwhPaxoEbY1UkHc8xwZXtfCNHYx2XbUfGSETU2v1nskp36YE4UhQur",
  "key28": "a99wWeUS6R2RgrSckTQgUnFGuQGBvWW2aBd2jmpb49YNUGvk83uKCspcqwxWnfEGvw99nFD6yYWZUKYBmWK99gH",
  "key29": "4nFsFYWNAYSS8YAffnHdS67Sg169LgjKkoFegUtiVYqt3TDn2vDWtGmcRHqcpv9MyMarLwSvuMPuqR4Z4YGJk52o",
  "key30": "3w9RtVhmi1cxLsdqNCwmMaR7s7VNBsSKDPBJo9HqvAkC421c8YeQbNi3d18imuo8kdYZbmBxKq6WhpVF3SzD33yb",
  "key31": "5A5E2tfypdzZf1RRx2jQjyYPkKX5unUVMYSUVSM1dz9SNZvdYjRU1oeZDQjV27n5rMvrXNvsPennTokXBfarFS6F",
  "key32": "4UANRLCRjBgs4GPZYH6xzdtfKqx4qTuPTuzXLfSnBKmDCcWgoWsF28PsJTsXPyyoWSZwQ32VMssXWnBmkab2V4Vj",
  "key33": "5RJfzoYPyU66whCZFJPzWU7Fsdkh6xCwjkCVCXAUQyAcseQmhm9pQ9J5ZQV7VUCWd7goRmD28bR5NET1UG86B7wB",
  "key34": "589998EhUkBj67UPYBjKAC8GTrbBd1LLqfoWy8KBow7vpf4t4WC7hUqCL534FKwVx1Sb8YBrFpPfDEbgq8T9heMz",
  "key35": "4BjKJ8cLVDby8bbUsWrLEvDDargfgxfgYHhHHfkQ3mmPtrodpD83NjBnszTeRUeAUCtXxqBxXkQttUkQDdPzjdNy",
  "key36": "2KfTE1o2ZGdAeNACWu4Sx3bDpiQyLXCoJ69av7GX5ePigkc7dCfE8GRKg3WShor93uEV6CH1XZCdsAWNZv7jDGWe",
  "key37": "3bd2PwhHwbz46t1GCYfa722cDGJsPfpLRxuQPkDshGWdcTR8Cs6yYWvKeheENrAhqnVLtdyr24QRjBRLK7maTunr",
  "key38": "iJx9dhH2cZrXnTH5KTji62u1s9YRPw8yXkhSwaXPEyuXYYM8ULzoTTKThwM1inuHbzuSsBzvfupNuvngFk8k45F",
  "key39": "4SFB2cqRuaqeviSREBwgjZC946JXaiPpKjf5QZgRaV3AS5wTvGfAqpfymdzcv5yw7jmECrntXNvGQ4MT6SpEjNtR",
  "key40": "4YudPCaMTRvjjJHJMKW5tADk7pWbTm2Ze6ayWxHtmSRfzyKbqG4Bmd1PmM3YCqKWpgbF26kjHSnycHHqm16YASAM",
  "key41": "4pJtKd3esaxJD4MijDBHQrUX2dEosCZnTw5ZAzsEouE1mhiKgeRTwawrWG96D5bdH7cXSNbeJPrgcyKVtggyvQvQ",
  "key42": "2ZDak1C32qg6mDEWzEYWJmHHPnDgH7SxWMZXYwjc5xKtszvBgGdfSs452MXNEQyFBvSt2Gz7tLeAKs8cPbTi24t",
  "key43": "q3Z6crNeNtyzCDwxWikv219mbsQ5mWPZy4sUptGj2ce88zoNeRnufk8u3eZGJjZTV3jjhcC4Nm35kMwjDMZoteA",
  "key44": "2ty7NaXYqXbhWm9wpMxxjTDkqa6aX7dhskkUREvHkMu2JEpSy5dQwuJYafNrp23GNLtD7CsNVcD9YA5AvvLn1ise",
  "key45": "5uRvGBepCouqjYsYvDxXPAYJVuNV63jHZaKxLuCEkniY4V15TEyCmQ9GdWTL4fvuddSd54ntxFBET9HHkd7qka6o",
  "key46": "3FXnhaPL6QM3JAc1sCSccsvG5CoUiFkXacnHgSV6rh9k5na98b4pThcWXRFsyykeJfaBvf4Ne41faMRTwFR2sLEm",
  "key47": "4X2hDiUAdqfhG5d8S3um7hX5BhgZ2Da5m8EdUWkxqwUNG5bfwyqzKHhw8yt7U7WADWNwFGBuhFypkTUQ1oGcxDYr",
  "key48": "2WydWY5qsPt2rByU4zx2eJZdMXUbRbVSmGs8WG14Q43oakV23s3VqotYBJVqYVHTE1mf6LcMo85QEbDKi5Bj8hov"
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
