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
    "5gsRo6J8UezZiZ7db6gkKKRX6WCVLDDBXe5iaTRx9VQh6ckzVdwtVn6MYzTrpYggZGL1XQsqZiPxzyX9tPHHkBt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgCv6ZufiJDGJKapS384Snsy6Kgswz1AvESGRjUt9aicob2zJSMkZp52CesUK2N66tjPfMeKHeD7sJQcFPTcPsb",
  "key1": "5kgcmiGHtTJF2SneCP8EizGKdLuwqhRd6kdh4QmM3MyEUEaxMbmR5UDE4958yDb9XQXQzbyWV9YUDFDiLWyEnAsW",
  "key2": "c12DLvXW2XiVxrAynW2XXJiiNmFZGsDkNHK92rz22QAAA5N3wVb5yzW7kzMRrsYe4vqzoYAWvGSgQSWEYuJBabV",
  "key3": "4JAiphjZq5vUvvEB9RdZs9SusAnxk1vhjRr7CFuHBii2HQvypeHDsVEf34LJCRH1jaUQgbPV5THUhBK1RJDzDkeD",
  "key4": "285E42TQriqcFUQq8hNivZ9iGtYTZcCQFBfjtJWBhakLNxEj2Mbfy8SCkhMuSmMqeqc4uQJBygnqWy8N4fpVoFd1",
  "key5": "5WNrSCDEDmmE4ibaSMNPaWXu1Y53BxgUrguGCXUUpoZ5NZMspU3juSajaU5jrAQuy8AJzF2thbGFj1ZDY9KGEpcy",
  "key6": "2RHKF4LC7R31rx9VhzfgbzUEJTcFAPQdrRwVqFjvhKh3jgfj5yoyoSExEWYLCfdhB7F2XjZ1hpiZNGTzosut7fQ8",
  "key7": "4h4To8RBvQnuK1cNBPZTxRCvXjd8meLnyoEhFFH3SRMgC7exLFLbc4HsJWBmVde4PYHUKua21fxSXciJtcFhVvaL",
  "key8": "5NHrpmhQBq3FTyFa6Hk8iwQqj9BimA8vCbPXPKty3VKspEASmWvCDbEekMU1g5vDGyurzG2zFMN9Ncmbf98m5KJE",
  "key9": "4bWxGzGr9cY9tYZDuWfXGNsPaKC16Rg6JYaKFMEhSC9QQjUXegf7BUH8uZkhDK53zMCoxbHw2WvfoYNn4N8qdXPg",
  "key10": "5xa4yzNzqJeP5mLbKR1c59iNbWocycTK95vH3VkRaK1VHr5WtsaRgXe4y9e9sSMzsmQTvVjqyxYaEjDfYBRFoULn",
  "key11": "4bJ3i3ha9PNpzRuzukFvK4iophrvkdyftoFbHvRTPUcuGDDLqsCuj3R8JLJcjoRvPCWDNfFqkwgueCymJrUtWLx5",
  "key12": "4sy7inKthBkuj4TswNztrRvfgtzxoVxYh7PRBP9nCieu16P3ZgpTjkm8u6qPeHNeYiaZuC2xBpe14ynxzy7yhTeh",
  "key13": "4TDTKViVTUfnrdAY26KNJj9Fg82YTEjTvXZTYqNUsWqFZFEXUjbysNPd9LBtVqJ83q8A728sc4Z3jpJq3HTLSkDW",
  "key14": "5BfFPh6DigpzdhFhqBtQvajFYX3i7jCWaedSH973e5qaDHhsEjBi6bBYRzaHSzfLF7Cb25jHnjHR2WxuJ9tu5uFg",
  "key15": "ad21aZacf9JNcQkF7Q5srnbARn8Ef8TGRrXovXLSyWUcnixyou5Roy4APURAr1MkTZuqJiL1hFGRpdib1kataje",
  "key16": "2bS5KkfaPZE7UxT2LFB8uJDJWrpvXAKsVaryMCCFrdDcwTP8j9KM2jDhcxyZDH4Src89Hw6m3s2bVsosy7rU4Uto",
  "key17": "4Y6h6wXB5HbScXJ4si7sJruK9W9RNQscs35V8CGJhwAonaiqCrh1S1byCVEePoiDeNBSvaZDkbxJzjsvL9E7YSgu",
  "key18": "2F2rHXxVesgViPWL6oU2r4Y3U9cTUxV4QWr42w1nn4zfUqT2MYuHCfecrMDa3J3TgfnkKF43cAsvndy4PyFWpq6N",
  "key19": "5Z8sDy6EzCCKxrxPbXxaVZSzCbRxfqbsPuMzWsSFbzXZyLbspUziEn63sb2y8NkhaxqZWUVJczLLNR9JQAbfxz9D",
  "key20": "5C6Jgto5XHTEhZADU59FuWNPVHhAWFR6Tcvbo3mmMWsSJcfBmoEeR24BoBAXUqnnmmA35PV1AXFhAehhqv1jrvZY",
  "key21": "pkMjRhyuWzKEsw1p8DzRcYcvtcuZKNo1qiuQzVkzvyfCya5vWp1vARtotnKrGxAWMqYQqqKzkwz8Xcx1TK3fLcR",
  "key22": "2xh7tJA5LT7zgYerCkvVe1NgYYtF9PtuuhutJqAdS5ANSbNuJjJgYEbSTj9w8zpmmKDMDPMFjScHfFNG1eqnGPdk",
  "key23": "2fNEkeabfd8w53wEDdjfQEsTFRfqnXeiQskvv1XXRZsK97L4WvyFvJ4edog1oQi6FoXqB9LaN3C8Dqdweq3aDGgn",
  "key24": "2GZYWWEmMo81mgCKi1Z9PmzDk1kxhLKsWjpNQBiiJFvis8aunzEh6hVD1Wzi1M6x97fc9oWqJqjRCiK5Sj2UAnG6",
  "key25": "7xS1n1dgyWq3uTt5JD9wYVWQB1YbWCpYvnET2vT9DHtDudfmWJ26saFKJxa6Ck3hNrojEvNXJWjhatKFGxVxhC8",
  "key26": "iidQcTocb334GqsTAmKk8aRAXs9ksbrBvvkCosX6zAR8td1DZYPTgNHKnoLA5fjY7MGeTD9WMzC5fz54UL3oQpH",
  "key27": "5pxD3jMKt9k4rKFFe8detpeLmnMe12cuxRXcz3y2NuXquRHLumCjKZv3s72nHRvWZgcXvzKgLNo4mjQNQRiVQK7e",
  "key28": "2nM121HBpv43rUFY5o36ovzdMc8P7gTzKeiwGVSjmdp7HoLXs5fDQ2Xf4gjSiJ5uVRUGmS93KUt1EjXK6A2zPNmM",
  "key29": "3FKEgbEWTyreabVRpm1WSSSA1R3EXiTdr62T6RB93ZhW9MC3sSENETAhDrGJ1FCJXUM5yZG28f69EpPBRgFKdnT8",
  "key30": "647EgK2zZRo4f1723NQkLhfdMU41Dw5FptPZ6BLvP26b5NEsXfcV4wtZr7TnC5qJyr7FDLEpbecKtRXNeCeWqe51",
  "key31": "4rNcKeJ4Ayrocv8P73XR1jUPPDVW1CDwGx2Vk5M26oj5tfmt3psYJdWSfu8xEZuRx6Pspz8F49gxFBdDR5b76kX5",
  "key32": "DJ6YMkEikKbFxjYHPvZQ8nYx4At5YD1Aqt5KT4eCnpqcaW5xZtjcUjdGctUxZsKSauu4TqGeD77XqNM5AfNg74B",
  "key33": "3uRWgC9233W6a2nCG2GvL1FLdLu2ScQZfxZgp9qRUhRjgKxQQSo1XKvJEowhN2sedbUowQyHB4RuZ7U3jTy3htSu",
  "key34": "4kYaZwwDh4HdXDkBNGaSMMXbSJsCKdx1CFDyjXgeaYPkeuZFard9XfmhuoUxGBRgfCwEw1FHwXvmEunctAETdDA1",
  "key35": "2US6PAcYLFNZpHFEKcWynaJQLq2a2GzuQFT67rGdUZLSonv7GpXgSg8J3sDHRUbQa8Lp3zMN1WL8b65oHMfpqHnA",
  "key36": "2vM49mBJurrdNr8tB4aZEthquaMyb2yoE8efNumcLDPe2n6Kk2s9R4GrGTuUanwaoHNcVq6ybLTobrGKg94a2o48",
  "key37": "5svMZNpj6RtVFiDNuATtyfavDNTmAn1xqUpgQa3PHQFnxjSvAsKsk6T6z1QacNdSPmKfZWatuomgxf57LnkwVVZY",
  "key38": "2bVZN7Aum4CUubz9qtye4F18Jp55mHdqkyAxDCwUXufBQdscb3t5RA8BmARCHq3ktSGjSiD58hmSERtxxva9bF6w",
  "key39": "3H8GX1U9KC6rWJT2Gr9RmXLtuB8akNbytmWw9g8LL2coqr5xsPPuph8VGKzt2gJY4x6mqY1vnw9i75nc4AYkKV7o",
  "key40": "3caTv1t99QU1rGezV6BPYHAbiVXZGWZ3oFLC3uUxUvgoiGynZnJMux7PX1byghYzCjjzdqrEGLfcem7v4d8MQZn3",
  "key41": "2vd8BPnrkpndhJ3V6tght1aXnx7YXkGdSCqSGayZwG3b8aWU8Eix2cnaK9QCzv37gRrdGUXGvZ8iQKRWo1p3QjP3",
  "key42": "eRqk3N6EbBqpvrUphahCCYENKLMcUeuGZJJkhRjT2qg6rzPLaspiXr9A2qW8ay3r7sWFjssr4nePNegeZxsX5QQ",
  "key43": "5R1XdQonZC7pk7DtzJj9bZwvpA3DwiXFhMRrRjhBYi8prZw8RoxHfs2H58qFGHA8D6JqJFxBABNfVvf2w7AyfRHi",
  "key44": "3Kh3sQTQ76SUZTmeXFJWwqoWu54pG7bnaGDQLvjB4eQErbNBVk5sYGUv8PDyc9drrMGRN16S9FxSgw7FttME5FWT",
  "key45": "2VbKq9YrG66RXXT83V9iYR5pKzThbCXdKJcHhV5ggTDELEAoQFmk2XVf5zCxyC8fP9viVxjJQMFWKcNU1qhgKFuU"
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
