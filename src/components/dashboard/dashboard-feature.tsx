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
    "3TrFhFr7UWzgmGUcQUeZGp4Rm6KEWK6xaPY2hqxAat5zBMmdRnGQY6FUhzpjmRk9hNqJoWULXgAKr8fGnPCBqWGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zxJhp779erJEc8pFpcgUXf4wnCboJykV9zCQJmEr9GeS4od8eQNAXos3j5sYGswSV4dZnChz1d8oALVxF25gTYq",
  "key1": "6tX2TgFxouZmGTBMvJHLPCSh39nCmU2FxZZnWs6yTb3E4hYjHHRf7o7hZyqC5PN138sbgM8GUBg7h6TyKnnpE31",
  "key2": "Em1j7D38js2wkarp1w4KgcwtNb3PNGpRWj8REsb9x8vVWqJWmLA4oe83A7zcfTFmfrZicrQFitJpFkuce1hDSCq",
  "key3": "5chhk2EubTJXA6AC9hsbN2b2qgWvUKqSXMxLHLxsJVQ4AEsQSa6xiyTf84nZCtKNQ6BLfQVj5wnXtAEFt8HpCFmc",
  "key4": "3r3rnqARURv4dt57P1G9KREFmDzfH1MKDuVfcYwayvLbJvMPMbDqbttvNZc6krTjmfZqYEbhXuTzy9JDjwV3Q8dW",
  "key5": "4goPuRFMRLKSGsChnrtmdmjhnyMSB6YuT5oLo4Wo5SmZcGKAZYFhpFhzJ5fdFjzJMadGSJksbFiQyzXNUWSiU337",
  "key6": "26Wh6EcjdLDzQR32Vk74zcsZvvZYpTv12zRTwSYquiD2LLqcCnz1YGzBZs888Hpa2YRn4EDrTyK9MunhR2KiL44E",
  "key7": "58AfRMqpXF24y7qkaaGij1TDvpGsboEbGr3nH64qV3V1agxjg9rER94Bw7zV4F4PeA7XgDCGYET9LzMYs4YtcojH",
  "key8": "Efqg2Z95NLGjMtt1BMiVd7D9X5wuAsft8iEui8r5uAArJWWu4SW3xPZQo4DtFeWKizC4nSXEn2i7d488pn84p5K",
  "key9": "3zhcA989zqTsZZqhrJquZTwr9e3UzQQjqpTcaqZNXyria2eUYkRWCPgoGU8CXkPp3ShvQ9A4KESVNki9USJJwr6F",
  "key10": "zqEJQwreinq5aqMePMAWrJMuEvy9kTPRoMuzV8JmupwFAkKhGxVh26F5MFiYLx8NAeFtrcye2HVkKaWc88rxRbt",
  "key11": "4vxhwTF3MxuAQvdNG4sCcNdtat7Qs9SX3rTTDhhbiBgNeXpGAjB9pjL2PmVh288Q8DxUVEhZ4GvhttNsWCcvwYMt",
  "key12": "wVb3sBiPyFdtNv2jHZeomYTDdh2orm3JkJ31aBMRX8Emx1ZfYhuie6bzWj1yXSYH3UsTb4nYctWAzhPwPM9ifzW",
  "key13": "2CjDnMZf1K2H7Uepb5ajnBDk4J6JJbRqpjrBYfGQnFTVA7SE8HYjRkwCU6kYjUK3m66y7465koKwXV9vR3eUPjdV",
  "key14": "2aYC8s8QyyBTtjUercrTy41gH46aY1zFvVi2m6horuYRqo3qdDhjdBUwWdGtvwYCsEy2hsiGh7UGX24ngTZbHknc",
  "key15": "2QRg5udPUj12iG2LMA8P8Zg7LfVW4SMN3XeVJi68zV7hZUuoKWEg36tnAKCc7ArGKiyrVjuNhbna5ds1eH2frZMU",
  "key16": "iPbFpEkaD6ZXnsmAfdziiKYbQuN7VXqy1Zdo6SEswdvVbKvgnQn6Eq7biXRbXeVPWaeFXXj9eJxQopixsN2cPk2",
  "key17": "5jjkWmahAYeH4UwL7tjQstEzmfgHCydP1ZaG4QaVv9vFhAh3G7JyykWSf23fDwtjyUAhyTyesLqZronVpzcyEMFE",
  "key18": "4ZTYeWBACJD3xTjb6GGdxFPSjLd2uyxfhoY1mR6uzk4wLm5gwGyUedRGqFGMT4n7y27MzEiBhWZ9RAQRRNKRrtPB",
  "key19": "4U8nJkVHuXHjECUXWQJP9aH7neSNJQ6AqgBc9ZQZuufCMpiogRKBWDHceYzC1pYwnSvohLgFsNGRwAMPvXGwekMc",
  "key20": "3Tu2fuAEhaxR4nraf2JjjQ2sWeXADwHNJCGaYftATyfcRKZ3faf83MNotAS8bLjQdbbCDovoFcJyLXgqfgyXsjyi",
  "key21": "2LWM66LA9gVKvtVZ7u7jxy5irWK797qbE1SEMU68RLGBtFPw6uBNq2zYKoTeAuUJkhqwXzVDWF12MTF29HWwQgY8",
  "key22": "4pZMe6Ypqq3bK7JVzKGrULjoqRP7Aanmq5NGCc5kDDqWTaQorSBPqNK6TUMmE5fPz17HJQfMEmAAsB1XztVHGMku",
  "key23": "DpfvS6hKQ6B3JLuqX1X2X7393HdAzy49DWcRzds7Kgb5CWuMepZB55bUP93xfVTKQrGHh5M7LgZgm3u3J7oG87K",
  "key24": "4Pu6chrLkc6NvCevyNiEsqJUiWyphid6CudNfSgwXusbHL4W83jEBj2kdHCHbJPL5bL8TYwWMLrbDZp265bQAS67",
  "key25": "Kacyps8H9X5d3MvDoqgYuJj1b56wVqnDiByAXUZ7Nsd5iFe1D71pG3NurL1BVfjKrETcnbqvFHG4TuuwHaBhfNZ",
  "key26": "2hymM5fp11zwJv2LgF4Hoh4QM8CEFE8seBwCHYy42TYz1JuJ2qK1nLCwcCMot1ZCKF6gYeK8F7Vb9N8VSGk77jh3",
  "key27": "4d97XKpTP7f6TPEa9wUeX2LBQ8fBmdDxovBimAgui991HoHdg1QWMU4x895xw2rwr3kRQfgvXAF4mcVEyhxfXNWg",
  "key28": "3vhYk6axf8dbVgBs1BNnEPkXwDXNB8JhmUKBie1ykpF7LwJHby1LUrirEZfVtqQ6CtwsAEmUzi76aH3Zcvmvzw2x",
  "key29": "5hc41FnughDYfJTEz8FR9rBEGmKZjiKWSBqAMUQ24Y1x84tTtp1KrS1cfx7UUB8kGUe2MibrMXhAPk1e9FA3qzeE",
  "key30": "2SQKESUbU2pHbFHMw853HmAWSXY2QafptrEjToutDpjpb7QLpkg5JSg6SsEa2rB8PjQLZeTKfnCYBzjN736gFQLR",
  "key31": "5uDpEeBb5En67SULpYebh6a4PFFiYHMPFvnf5m887xDECuG2dMTwBeCTxxt4UrgMR1RKbkwFGQcniWKmwFrsMyi6",
  "key32": "26GK1YEZ9PUow3X8h1inCKkhuAaKRcNTWcVtamUWFxrCi2XDQXcwiUZqJuVhs1pkELT4tthaWFL9R4HjC7QnMFb5",
  "key33": "2TDvhkiuDJzVU1nuoVWQWT3NGagowRWdNGKBpCZLMARcXNd3jLJ4jAv5MpBCbGLDLtA52xx91bnYAh8Z8PozoM6h",
  "key34": "4nTeVwQkfnFRsPHUAFd6rApoc5HwDgwbviPHU7VnuFXfTUkPFbpUagBPFNgYDohNvAxpzaq1vosFzfaRz9jLNtgf",
  "key35": "9RGEVD3uzE4w4NYAS3QQWmiDSnnfanzrJssqghg4x5SPXGGhjxjx6SrQUDiWSScdHEJxszXQSyVzu8RByqWMExa"
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
