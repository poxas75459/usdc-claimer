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
    "5Mj4aeQVqc7hW5FZSn3tnVrnoCVTF63tnffGLQ7QdtNAvuw7pqPuZCAgibd4iwBayW4PP8r2R5rCtzb3oQVhGkxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPvJAaK9asLu3N1d4NZTXH3SMsHT6w35RVq87xHZ4fguTwBx3pJe2So96wGmgxc76TAAV3CfT1XW5peATsSoQ1J",
  "key1": "4mLW84Vw7QmG3QzKkytakdCMxVrvHoppjC5osGrPMWEYvoGRqoYxzaSEy1E5kv9JKBhEjPBg5Mi3NsCK3WQysa8n",
  "key2": "5HNFnryhyroYsAQ1HooyxWGCrhPVWukAB4qhYPnX32CVyXDYp9WApmWweHvx3ZLtaiZmEyVQLoqxzk3HTUDE5jS2",
  "key3": "5u9cVcjZiJsXrvgZYYqPaRTr6hH1girBE9oTh5FJL9snqFTPPzW4dzzAeGRnesdGVfE9yKdL6pq9WHmgXHxKbEcv",
  "key4": "5b5WY1QFdZvxWysk3oehYzoBtKZniqCMmBHW48NHUV5F18LCTvge4Uk1CESZ5b9Qwznbdg78me1sZaP9REF3uoQk",
  "key5": "4CEM5ksNhyEKddto4HnEHiPg4igeitiFMN2p4tdvUA1NQ1h3naj3pfNRFvSFgmrCMpWdsi1PP6beRxyqK4T5LGqV",
  "key6": "5ExfD7ccdt8jvk2Wcc2NjKDhkThZP4VvfUqKRqYCpRfvbe9YZmprJWc4JoMGFsJnVqisHq4LXs5FYagavLx3sDPe",
  "key7": "4kk2qxsMU7YWVGKLzkLddKXiaw3kG8VpEmsLT9f5dHxRsFjMewkbNRPDUG77cSdH47JyzFn1bMgcHTG7iHjK8P5p",
  "key8": "2RyKVgNcZ4cFGC7V5wyBnBMGH6b5D8DBCdg1uwUEq4w9Hxq6XovuwJZT7DYZvuounjnjMjQiasqXjbqRMoFozy3h",
  "key9": "2wH5MZLDmF48PquYQpjjjMvFY6NiPyhqYWkznFaV6mW7URAaKup2zmh9JtCvfKKppKXGX3WMCg8PzcVwBo1i1hv",
  "key10": "QPd5gRtSMgYnnZsfB5CsGvoakbNCLWRFKEAfw7XaPJUkmtA7hVxZt3tz9Gah98i24XUxoTXmJu4Z5ZgpduYdYV1",
  "key11": "2Mit7MdMyZ1pZR4TTu2qmTCJhz6TqVhYXXNvLB6QuAvi6mVVda87HjoswkeGCKCJLxs2tAeAu9VDmCJa6RvwGxSs",
  "key12": "3rniXSwMWc5oGXMTuc2mxVGwPVeso4TDyCmkxXZ26JkiB38UxaBtoCjzhq9csE8bkZGvZHwRJraKtSZUs5633p9z",
  "key13": "5KaFdSMeLgtfgv4ZcRVrKjmzhHaQQHuiG9cAd89bjcPeJ6nEAGD4qRJew4eSpNEQNJPrzfGcRFixZXTV6wVFpm3X",
  "key14": "2DuJeyHpXxFBsvFHfifbdHUZJZmQgcNTWfkuyWVwKBk4QdrK3HmWKUEc4KcjN4yAkXDD5WtApueeAb425kaBEijm",
  "key15": "3Rh1WZAdai5YoeH6X9CmFT9HUhgqEuNEojPqy65neXmqfDQKHSaxt5poo5PAp1K5MXmEtG8DwtwJvnSkcsoQSokM",
  "key16": "2aZBnGUVcwfGW4dbTKBnaEVjeN2cAmtusq75m1Z4AD4zmi23dy2tibpZbRXXXAjh6wtwarjLK6CVioW1UWGSkUWW",
  "key17": "66GdKBXX5QNcUh6XNojGUorwn6tY8MGXgX6BJrMAS2dr9TtuUmVgdv1X4ReDZteu1JyBfmhqADvGPK3jdkzMntHz",
  "key18": "4aisTfWyBTkS6GxPSdaGPKP8BrnrpMGGenY7gJ1tGD9Z2P5Yqut9yi6w1dFXgqWyKrJw8wxUuLjFF2wjXHQ9ZKcg",
  "key19": "4EjcGHaYohyDjMmYxtspHgejXsw5SNUd8SbxwVz53Mq6XBKsaoPUvNfyxDkjLejiTFyrgDGW6sDQLHRwPm4FFnrJ",
  "key20": "6u4vxwZJQE56tFh8aAVoH5sdhfp1VScJju7eT84pb4W3BM3C2omis2e4J1LyxTprzm35xQKjfDGqp4L8BxSF4bU",
  "key21": "sf8nbmQkymAd3iCdUh4H4SGsp7FjMmamrtxArfD8u3pgPR55eeegZck3P5eqbo3CbQ9LcEay45TRafw6zannFQy",
  "key22": "4QCPLGSqsaZ3PT8DrZjaPp6tA4KaJ6RPnWHQQ3B78cbxdFygAXSAKksnxyfVY2zhyjZoqj3v3NnscmVtyhNJerMj",
  "key23": "2HdEAhH7CPGaMVF7q7vCn1WAnZhHRXx81Gwm8oVVF9f3FR7f2u9m2ntCDd3BEthfQmtorwHk9XY4Uo8rTrguoUuN",
  "key24": "48zh9ohKYLM3ijJvegzAhaozFnd1h9LHFL9CZiCYkgLfLjKAeLACgoExGJvRCQo1RutZ9au3gawiHG13xyCe4yq",
  "key25": "4mE1V1iYFm7sRBqYM2W8Gr5xAUGGpoAnwaKXyzLQEUmmy3DEY3BHkZYBt9rpnb7kVFLEv9nFvHFZ453UDfhA3Arc",
  "key26": "4Uxy9JCso3pawfoVtT4uXjiKT3zZsWApb7TurRtmfQSgVvtHn1XcMrwgDJCdpJ21AY6kdscSXteyX76KY8tizh6P",
  "key27": "5PDpD5kvWATwnqyC9uFGBzWBBcaFFECKHoSGFVruuuWzofhE54UaFZQZc8Cf1fm2SnpHzM7sboQQ9U3UHd9HfKfT",
  "key28": "5DeZze7HJSwDPPoHDAds7CSyoVm5Um2bUSxGtdfjv7wUL9b94DaYobJgmPTTmres6CjLC88sW8myHpABgiBXmNdT",
  "key29": "2tunFaDJgAJAd7nKdAT59MPbkaGisun97Uoc3zDCkeaP2PPm3XRMmvyxzwA2nMTgzcbHekcqXyRGF1AQT1qhsVNq",
  "key30": "3eCY45XywSCh5RrXpfNvpVRu6ZAV1CVKz1qBcEE8ukW53PFkLLM2Lrt6dbhy1NpiwwEVCAtZUnsm8LetTWCeuRGZ",
  "key31": "5JuTYgTeSVi8YeZFqbTNv38PFZoCzwXHGt3JN5wopzfGPuWEkm5JBpFWxcK1TVwTyDWctGPjpepFTKgapJ7L8o5R",
  "key32": "5uMpr8PpwmfSKZtKGrk1uiT7auSo8Eysp49qN7EEBPj3us8x3k7BwGvfwmBCKBxo2sRsqiRXParFZKrtvjRgpmQt",
  "key33": "3kNp3u39bqY4bCDNESH75hksT4fcd7pSrctmygFUednvk2QU3uXBp8UZG1X3F1rnr9Ftp3WA6eKqvVFZEycTcx5F",
  "key34": "3b9V539UQX1bUjov96GXi1PN8VGwmLd191QKGWVBeyAFAiWd53mN7RHemG5uqMZnPDAe9YVJQ21TpN5GEHuEuJDy",
  "key35": "efcEvW29vq9oJe2x2Qyq1LpLRwot3fkVDFrswySqwaPkux29DQo453YoTAsXt5NrKEX3Fqs3zUmGH4kDqui8dW5",
  "key36": "5XrpBBxes7REogwKaZBkKJYWnmSDsHWv9vzomgLK384MhuxoctX8JZqGnBx6s7YCX8qCr3bSJZzihtYJViVDKZNc",
  "key37": "5kmJfcEcbMhYbcWa353kLSXra6M2XkKRaQNH1qpdyPRJ5FYm923XXERQzVV9vv4RjzdXxDmScsCfGfmayPXuPsBS",
  "key38": "2qjYSpFQBR5Mb5Yt162zszQmuJmzV3MwdsVyvxSCEKypnQvvQazRqWhQQuLjRuvVhJQ1q9xpzMTx1ehy26qPrbNM",
  "key39": "2NUWGDmu5jVA2iaHLhwJUvB7zPfbd29okq984iqtMwHndNoZqvx1jovsg8Z8Dbv7RhJRZ3KEDkwust3ME9teLBMu",
  "key40": "4veGk9yhUR9diY1xsVLRRxJU4vmaagVfGrxS8jMWGYd7Y2zeU5MZcg58K4XPYw9Y5sLFyZiGqWPqke8uqGCZHaqk",
  "key41": "26MJoVBXEfG6E3zDDJCwTbWUBh6j8WnWx4vxNzLmKXcxyUgbFFx9fexSnxVpHVsJMPAkF2amX6iBMgUF85CreF9R",
  "key42": "Mb3MWSH7CaJuLxPV7Q6z2XVbobAtHHZp46ae9PihPAwXYcmtzJq8JBEbMStEvXcFxzSDRpgUXj2aR2Qb4etFXxt",
  "key43": "3WkC5dpeTcw78qCtx7XLzU8zAzsiNepBbTqT6LuwkJtb8WapJeuDDjnKgUMCjzYEwHEn3w9JAoGWLKiaFz4dx6zn",
  "key44": "2nM69v7S6LdDg8G8DF6mSoyeX4zmnvQWuTiKezavWsbTrj9i5yUHmvbMeWTswH5irX1KcimkJwurqK8gtBNVwZrs",
  "key45": "2SFgdvGFS6bQAaki9KjtbUV21TCo2FnAnssUHpEqyoJoq2atMAnUsNF9rqiZFKXZGc1VgBkTZU3jgosxG5PKjbzC",
  "key46": "3PM9AWjgNNMsPsn4WJt8xbeDh6nyaNDfj6yPNrbvvWvgSSp6jK823RLqt5D9wg7P8TtjNyCb3nY2WoH7nWuQCSwt",
  "key47": "Bavx6zxt8z9pdgDTodGKJmWFg3MdvQTzRrpHDGTvWiGNa8gszjaiwcUs2c4f3A5KiWRqNfVxwsZhjt396djiYQi",
  "key48": "67eKVybSqxEq97DaGWcA7JwHuULZnwJWN97QbxtebK51n1T6RJm6vMLjwfp9SzLxJwpuFe6pYs4yThxg9w9ScaiK"
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
