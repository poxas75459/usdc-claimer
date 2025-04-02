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
    "katdXjWLfTQyKVRazekUm8PwnZCqzbQSfDxWdGDP9FFfUAMa6ZasMgLPRyWUu8W8Wydf98UwEphARFGDBwcRWVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pxjGMdinjbTZsse26a51NHr9LnEoAY27mdh9MDKPWuTZMrDie6UymYMgaAuNSbuT9j1unkxyx9dEvCiGRJQXta",
  "key1": "4VowqRnJEMegctZUxxYSm5spVFwuHsvWKCS9VKFA4BXyoizefDb3TFZmxnAPTDrMLeHCQyzYgnuiwB2PoAKaG4uN",
  "key2": "3yZL13W1AXMaQppHkxusbpjWHJBswWuxZ4ZZjyW3FrmmejNtfbNx57FX3ZjgHf81AivfmtkKarDz17YyXs9oqDFM",
  "key3": "4ghPMxAEgQphFdZYysiUUkfNRSCjpYQDogBxqJ3Zt68pmivD6hXAg8nNkFua8qeNFjhA4HjYQc8E9H3QbT9sUTBb",
  "key4": "4ZPywJpqejxNDRNan7qP8ycs511FupKgxQVy44DyM8yxSBvPdq3jVVZSeqb4NriKAJmrb2WWQk73Mz8WRKRqforU",
  "key5": "49mqqP4xzHr5BFBhju7gge7VaHYZYDJKusFNgeLxeJgRrJuXrnysgoBgekLtNEd8CSJoRieELYqFN8cR5wb9KcLm",
  "key6": "yADYWHkiHAchLtDV7daxNWa44RzNG7dskfEMqJaDwr2s23qDCjCYdoEdjbX98i694g54WG4qEb7R5DkxCZvZhG4",
  "key7": "rUHsMaptHr4RJgLKM5CkkQgE4wFczExZEpazK278EQq9HFUjtWoZ9Aygr19MmVZgnWak6MxVT7gLXdBGApudruQ",
  "key8": "3fLT7miKT8cpNJuXTyLsdJm5w85YjHjxpRBqKG4wyiVrohpy8KxKft78UywnKiWJmytUe6GyugJuEdWCTgvuQHfw",
  "key9": "5BNEpiYKzL83crW9TxTQ9NDgAdPjNexqVFHAxL4tRhybANxTMQwRtoRB5ht9kNuYNb3d5rzCa44ToGMgdZYbvkXK",
  "key10": "Zg7uoQgkZ8DxpqbBgnD3hMjvAXzQpSTtY47kZqiMa6v2agkoMpUcFyDFe9B34z3Ha4718S9H2GuP94QA3uLQy9R",
  "key11": "4ohjdMjcVrb7oMncNjAyBM9AmN8GpkfNKtAHBYHpTjXDbvbScRdLmvwaTKMuwa6bPVtppsbHo4ce4yGdvDRh4p9R",
  "key12": "3zx6bGRwj2qQoZP7HhKXChLsbtojrRcutFbKHv3EjEqSeJUhVkjZ1UZCVjRCspgtZqxFSKLNgzYtseWEaqBbwphh",
  "key13": "2jfLyimw1KDngvoZA95YxEVTwy1gZZkZitV4n6hrJMgnQxJaXNee62FKEcicR98VoqCtuJeSQdEQA6NFNZR66DYq",
  "key14": "XmpVd3JFJN5qYxMurYAZDRnDRGr7oiS99b43Ls8RQkDUzmuvr7wkB84LamW4tBjpgKz2eGHkZc5vznCyQbjYg6G",
  "key15": "VqBq7z44QvLHmq8vWZkwL5krBh3k3aJzEVxxzkKNPvEshFKwTidrUUKSXgXa7c3WSizf5iRTECjq3KmN9fLHyQX",
  "key16": "kSrAjhyx1waJxbmc6tDYT5cwmbnN1JvHd5ijVXhjtDSgavhns49E2a9qAwT5P3ERDh4cCXPK13gFWu9mXqUtz8x",
  "key17": "24tn7DyAK3fkTuzAEWtYuqhdymTQwn5LRAh1peuSX8CQK92tX5EPS5hWi3p6PAexs8nD8rJ7rtY4nds8joXsUepF",
  "key18": "2nBgQ1sAme3iymspGK9zP62qXzjpsW9m2FsJUc2oBZCdF4gHrzYhjkuHEyNJUVXPqRRU7ivYA7XpVuVBWYy1Mb7J",
  "key19": "383Cao45g74zqWr1bzSM6VamL7JDfqZvr2bZrwjFgwjBQjN9uMoUbEfFP5M2Sc3PB3mdn9T8xKBmPkFPfzKrYkmR",
  "key20": "ahBEJzYZWY36omhYQt26XFvzKm35PtEyjTcTGHVh9k4qi4y9va8J3JUSRLCghNGqfnWyV1ELsLeX7aB9mAa1k1n",
  "key21": "5KHb1TaX9EW8tToHXjfakgErgSoCTxUfeFzBHfMv5Avx1L1uvZVV6btUdAkift2YiUWqqrLeqVjkiJYjnnB1BgQv",
  "key22": "41fSvvu17JLeSg7r5B2hdAxXvh69Fssg2nVL7WHZRmUkrNHirazn824vhdsRhvpuddJWjJgFx12ufxbZ5Rhk1sPw",
  "key23": "4scbJuQFyZpzdEVcuGvGh1pyPhMUNbjsMPZcGsh5NtFXp2Tjs83cJFLGdwDGS9zjWKMqkJA9ziJKUyJaWdNCvTHb",
  "key24": "3AQ2xtpdyCGtGrTT7EU1mZ59JTRV5o4svooAAcGxMTnN5BgNT9NGsCgaR3xno33kiVbMitXBvnyF2eueQ2NgJ7Fw",
  "key25": "2oVPbLXdo4uhKuit1JwLCQ9ZsMxahcvuMzQ9REZvqGXK7Dcv7nJXMb2NW5mWtkTzYQ7JgHuLAuvhuYVZ3AQULzZE",
  "key26": "3a8FH4gdN4MMT4Fc7GEcjFpVosRMi3W7KayDFwT8qoMMLs1B3dqZVoi3zttQ1jPs2QTFLTjG54BSHLJfKUoKkhj2",
  "key27": "5xonMR6zKBL3NCJSFH7jNTDo4CAm4foxfhwMMbi3bDoJpbx3DR8hXVvVQQBtbdDECYSRjRcuGefrgWGNzxeWF3UN",
  "key28": "CaLvCPHkvcwaLYFxyq7piKg91zMgnWQFWsPGRV7wXUF1TTEuCHcGMHMTnpdfdDQimydXSsgEijY2edu2BZ6BMCA",
  "key29": "5Ak7ZSssbq5qs4UWfTbfMp37h7ymixaVKo4qoeHQtv16GacdqZDMSJTc3wmqBM3h9AtPDfYmaijzPLDnr4tJeTgC",
  "key30": "32CqBz67prjQRzYkjwKp6rWGpnrBQnz1CBfkTtBFrLN9CZ8Srt7weRXr4V1Uhi5J1ex7AQfUk4JUYMbogfp2iuFo",
  "key31": "5Xzr9jJfzu3B4jSrqwa6AKLZp896qWPh14yQWTPvyGZ3u7bW5ZocYEhiy1HLo1udvo5mZ4uqnpYU88bUQv5M1mZn",
  "key32": "5sUyJ7UmBgTzFT5gxpcKhEqGnCPhaSzwL22SKXFDjWKKPecsHWJEogaWWnhQ5MykAnb7j8cGFVZ86HV2YpHpzEos",
  "key33": "5xNqwDH6XaL1kmP6KZSyKWUP9rmWt4ax5jmKLGZd1jzrt4Pr3Mgj3E2Sf4KqL5auT3AwXMFZes8SQnXneU79S9VD",
  "key34": "41ncC9rYcEVNgUg6GcELjRAqFE4G1D3GJ3ZfjihYn1kiaHJ4TU2Zr5Eyah28VH96UN8mA1S6MXAzdj29NxBWdxxu",
  "key35": "2S71ZbesS6RERLcP4KJx5EpujZJt3Mf9QSWwUoH2ykf96xQv69tT9FxT59DEu5T1ueXVuqVdQBskVHacexQWgz1h",
  "key36": "3Q6jECrZ812MkXrQpYA3eNBgrkNiXcW2CQQzpSw87PQGQrgjuTskpirx2PC2ytAHu96vuAVeLfccSzRBFsd2sGEc",
  "key37": "3utGMEkkYKbuQuZVLfVQcdPpbzDSYsH6fQhSb2wTWCThy7iPRABJL1qrHgAo23SQLnD4ZBya6SNnRWVAopKhG82W",
  "key38": "2RazvyxkXDKsd6nuK4ca2t5WWQgQxBVXyAjgtJEFAudEPBhEU4ZE17vDo2mpvGA1YWXgpHr6U71Hcnsz7sW82Trh",
  "key39": "2u8QHSYoBxph2V5Tco3yTzEVaHqRfWXPDyv4HLVajFRgd57z2Ys6ZY4pboBXFdVGbuD4LesaNTQo7DfAb6iyLzQ9",
  "key40": "7dicHamZy3hfLXKVWCFft5uFCNre29iXchEN4ooqYGrLzbDgtnj9r6BsSSqCLjMK2dbYiuPZVv95wn8fmQmUpF5",
  "key41": "2hWHN8jJLSvFfK6dKkLQetB4owEiJxv1DaatU16o7B15p6B52pwkq6BkSxEkHYrojY29JmrWpMYTqU6xgD5xQcxe"
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
