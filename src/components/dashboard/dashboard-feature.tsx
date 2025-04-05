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
    "3SVyCoxLvYjAZPdqZTh3QDh5ukTeNNp1djbKMgM3V85TVqqARpeLyA1py2cRz9fHxUWWwy9uuiowouivSsREGrR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D67TTqog3nyDQ1YzC7TYX6C91kYHaswymRfgHmXr627fW2ENqQL5kYnw8bp7Li36oaJxgQXZTiJnanbaDjL9pqP",
  "key1": "5S9kSATfro8buKneAX6D4xUmQC4byyLhxQtLAAPTB1SeXuha7uBcrhVmoAydrWacDisfm1ByQsQxqjwgjj5Nr9sq",
  "key2": "3sHqaJNEohfqYUmGWhm5wdnfbAy1XHZ99zRiA7WyuztBQFxaJf5uTN8CAuTcZd2mbQ8KzxnD362yjggTzRTubKwo",
  "key3": "bfYsG68hVBbw8GauG6ovPJu4AWKY1UhrvqfZScDKVdcv1M35rbraoMGU8evDrsh78DfUTar259fTa7bVLshFkYt",
  "key4": "esqnhsVvAewYCADqqx9GPcx27QKUitm6gKnPxgwfbodywgsyWwe86v3a4DS2XTkF5SSayY8ox27fXpCkMEwqcsN",
  "key5": "4h9vTx67rZFWJvN9fai3odBtHEqnH2wU1DCkpG2ReWtSUgbArZzV99x78THcBZXgcwHXQPJKYiCGS3FVUtseEg4B",
  "key6": "LE9BPxU17Y752VDtvULodHfRCS6VmBUHNLycM5fTxq9VVDDTEkLdY5VdgzMRyZzGhLpHq3mVv38KNmGVADUm3xL",
  "key7": "5UjscjCLu7GG8fk9ArrvrcFhStfsaB3SZnPwYFyDYG2R3zK7Qh4uw6m4jiw8E4CrjFYD8UL2HZFRyWQnPmiTkmBy",
  "key8": "3EeVm5TbV7TTacAjqv9WBPLAFuaCduwJdL1eHar6DN1qX7hvcbFKcfEitEHd5newdcUhj3dJCxicWeNMVtrEceXF",
  "key9": "w6h8YdUPAZoozwJC2MEfwDtKchsEau3ud2mhAbPRFuYfhrV1fWiwKYm8QoGMnAv4hg2GVtA4rvixi99zpgk17VW",
  "key10": "4K9gQiEbmApuSbQMYg8fHiTWiS2oYAN1DAN63ufiGK9GMWzguutqSPaHH5d1xNnB7M8KUfWstyRSyM8DLgMAy9kT",
  "key11": "2cHZ9X82ec4ZNEdQ5hHw9p1fH5LTc3hqam12Phbkt945tRJepvemrjtke5VqzDiSGzE5ArzmXRhUG63JSqkgo58J",
  "key12": "3FWCox6fzwjqYVdP2BWciXq1r1kC5gKvXX75Rxs4DM9bMxWCoC9nKn8UBkKBp1VwNCveTF7Bd9BjnnDVnKsSWJ4e",
  "key13": "2Wsia88z3QLp4e2xHa86ofpoDba5KEMoErefwhZaLvejUB8jRMbsEsJZJGNFp96DsmHSaYq21AbSwxAipYQnSERC",
  "key14": "45ZfKBJe8yjWdPafh9pC1f5bzJR7ndrtuTo79GkXUVNVYSJvUCNHjEfhwctVTRjRKP4QM1KXuXVpYg6RygBoaM5d",
  "key15": "3eyna1Dixxu33pSZ1izc51ZXodXU44qcirbrqbBh9eMgzsirvhBF3uYQNkwsTfdTSek3m8HE4CAV7cbXj7vWhdhE",
  "key16": "4zLLpHxKFPEVGrymxUt9u5uyhjHJE2thX7F7tkYU4kCVNbWcVa87nXdDb83Ex1beGZ95DqGvzddJLyHiAFW2Rrzb",
  "key17": "2Ainu2dEoQn5dh1JPsf5BJySR8GrK2pfTwXo52ZX9BKCcNX5C9ThKdD6bCHVD45L3rhWTuGYSB8tuCXmxpWvDFXY",
  "key18": "4k9Ad4RZX6EgSaUKr2CLzPETMgrmpaqTY2Vmaxny1rXNrGCaz3JBD4EG67xpXMUEKGmmpbEhj27PZ7py3E7i6UWL",
  "key19": "2A9qPxQxd5hm35jFiNP8jXu9tuaW5So1p1ktXKfc8vBtxQgpk5wd1kQLut19a2dmi9yUcSLhtbYdza4oojPTufNe",
  "key20": "4G21KARJ7QDqaavTdsAzQeDSYRrLSizepGXcyk67A6ZdciTJX4dQJ1MWM2rgoPHHdmY1rGzwnU1gZ9aCZcC1fvJa",
  "key21": "5uwKWyHhPWCy77bc6PMK5T5r2JUPnpphe5WrjGZKCSUCRHhoLvRdjTju4JzrpSNm8ZssiyKt4ZYnYpo5234kQQPD",
  "key22": "2WgKdVVGUS3GkcZvkFymLQnHVXkBsHFs9A5vAhYyUv6Z6SYPre5cEyC5X2GSP9mQYCEJFZE7T1jPNS7ikpJCLiyy",
  "key23": "4fdfqMTS9Mv2oi6h2dL6vReWECBQzseBtkvhZzg5AkCas2JE4HR9Et69nhfXBEdN4qF3tFCZPH942RXxW9VXvLSr",
  "key24": "2MMmiQreQWuKYsL92pjgyQrDDtni5CkmpgULHkHckfPsB1iwc6V6CvHgA1S9VzcMW36fBQQ2BqWCwMXvuN4WNtpQ",
  "key25": "2zCFixsaCine3TPdJXoVEUEnYrDXGKiBHsompeyGrpYAxAtyMQU9tTtJoHeywWha12NK5hAYTwR4GcGU7JnBH9hC",
  "key26": "38ZxHtnsnBMdvzXgAX5jitZL4C7SYRNhUh7GcX93jbm93nfmoWWbTzFdY6JHvgmC5d2FTDEde63d6vQqqoaprLb1",
  "key27": "4GitFeqz8v1ZWGdJXmLcXYLZgFCRXNran6itenmYFQ4VTFEt3Cb5qENin4RrHcrQjSW7daozd5L9gc8YAMeMkbit",
  "key28": "2QCFAgfd6ju4iW9hgPkjJn1SEntjEpzRma1rej6G1SL5xsjQ4cpZ5mfvTNsyNbCsi9DNpHFpYP4kfqKHkRqZU1Ww",
  "key29": "2B9uu5ZbfEww2eJzedq3NgXdjEjd9TYSpHsscjyT6Xb2zVSHsrKVUQMCjn4ddj2J3t8qEjCSrwcEABv7gmf5k9kw",
  "key30": "2ajydc5jXqPDnRSoF35CSThnQHXxZbZcQ3fQgg3BZcuR8xfhp6kPKDGVn3zen5qhMkYx8dxDSATLUMtd5MzRi2AL",
  "key31": "J1VU99oXPSCExKGjUTPGKWNKnUKhL1SmGi83tPxqn7t1awyXrAerc3oVXLSbBZjV1NMffP9JacnfZ7cdps8527r",
  "key32": "52DzmWmBd6JjmhMYtaQgjw6pGM6uqqC9JD1YESsM2EbLjdnqgZwJ9SSnN68Jn14UDdzkSkQoRiwMXfELKZLJVU2A",
  "key33": "4qehxRrgoCJkejjxG11QLpBCGnoCXfktAjWf572SW1nK8ZpfSDFNudrwS6YDdLEYVbcBcJLS1X1vShWfGkesXvH4",
  "key34": "2dB8vvuNbvFwg6bZ4vPiAPtsyrwouDuXyYzQcZH87Hhui86xMshqDGCgpRRNPYbsD9ongvKftgdU7iHBxZfvzNx1",
  "key35": "3ozhtKRshCTvFekjtempuShuLTAtPtETiNPp9rHcKgRdi5HjUWDBHQNyunmvbppRmoZcM6Gt9j8ZE2dySfyoGxth",
  "key36": "42uBRCeRbupmX7524yVqpaf6q2o1tDWih4bhaNf16C3naN67ugXhV5xUwyNQejjS5YSsdiXHEB3EdocVUW94tdgA",
  "key37": "cVMnFbEpf4L5bC54gpKfzLk5xSXRrMkxDjAWv4XvP933SkoPZ8qc9JN7UmAhzoyPdzdK1UCCUEWc5S1gyyomus2",
  "key38": "4bhvB2KPrSHoEKoTyYFK6oS8zr1pqPbvpNL7S7emUbCutEdFx1pKrWhhWS4A7pUc4ZiwJ3sHxqEMLY6EpmmdZzXd",
  "key39": "42WrZboCtxCvwdZ6YfsDN8pw9kmATkWx5p6ijPWTP8hczFxJBheCoZVEfGjM9wDQy37gQdTNv9wLkakJp6Q8ma5E",
  "key40": "5b1DCTadWKoMVuqt8T6uz9c5WkRgZd9wR9eRhGKDgBRPydw3QWQUtYbkUdoqBgppJVkkHeCs4hfa1ufKtYqNtj83",
  "key41": "2zE5NtwHezPMx5i3ifkZgwBY6b2UcTxNhwJzXXft7q2zeCkaJ43UPr7wUQtiX7CaH7rzbrWYmYZAvb5BYbtsDpfz",
  "key42": "fJViF1vjdA4poXTTjuq3zj2tBpgBKwJpNZitaAquX4uTnAahchmf7adGFe8EuFAFzqnfFP69ShhDXn3pB74WkNC",
  "key43": "4q38gq9h5svR2ZWzVx8xLxz3a8511gxh33ooF5N1d32ZFABSzzbvuk7Bz2abC6rWpEj6PCwe47wXT3hwAF9z5Uw1",
  "key44": "5ciYe3hLPNSXcfJRArCUCjjR6HEQueaGepc9NRH4YRtU5M2snujCDcJ5eq3uWp5TUBzbzYwfN6HeFJcuS2r3V4U4",
  "key45": "GkHM4gmChYe2w1S496tgoHW6NZ3bcDehQCj1pUs7QksjM89UX2q8CaSm9dAdzchY73NyF2aGmQhoXtpWZkk7Pz5",
  "key46": "3iDpc6giFLAjZvgtMSK8vt8AbEMoZeGEwgZym7gCTbamZtt2BiZkR1M2a9XCxabZSHrY5Lg1RYmTMCqX1K6R4Nns",
  "key47": "5Lwvn2e5LMseWtYYrQCXufbQXpAFTvo4b5A5CbJXmCamNfGAQXptWAxNRugL5oRMTMuyx4929amg2ykW5FfLExi6"
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
