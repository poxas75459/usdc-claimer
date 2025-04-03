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
    "3ZtjejW5os2fF9arZZn37Se9G2eDHrrXFdsYoU1GK9sbUYpJWiysVCAwckaHn9ocp2JVCzNKEJxS4YrUKCtx3MPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tn283hkp1M6SmACTu7zknngSeMUzQN5oKfMXAfF54sR3WceiEH3QnQsEvC2ZbnaEtCFBAEv86tDbsfsGRs4AHez",
  "key1": "5AiZEPeHxkMScxDMwDjfK5xH8RxLeWXkVpNMF1BG4iihTams4qirnT4w8f6WSt5XdZcQYtrKdSmZq8DvC58m8HNh",
  "key2": "2gcMdWiYX75kEpCFjbJJVyUVfF5rfB57cmvgB6W5SjtQcfhxdbVSdZpsA89WiukBUwdiUVuNdJsjfGarbknw4H4k",
  "key3": "4Lw6EaDufyJdA6TNKuJNDSWMGE6VYvWfJ1n3izZSi2vMgF2wM7s8bzxLkgYZrJFEM7GHprawTuCCpkFVdu685frx",
  "key4": "23EXmzth8jWY3fUQd8SQ4dCxx97zWexhKeCRoCtQcNGK5wVutV7EMh1wsLnGX21mFJZvbJ3h8mw2ARwDqduPvvD1",
  "key5": "4kCLCzwfaynjrxwJfwidhpwgRAArqohFpA4Yob1WQmUqKo34a1VMgnEQY8Wff2r4grS3ksAKwKQX4szV7NZ6b6xD",
  "key6": "NJe3ww3PCviqMHk3jwoviM7DdLkCvGmNSydnamWWzrjPZVo8KnDtARdpzrYXuW2mjBfq6orx2akMXFbpCS8SvLE",
  "key7": "4qEgfnoYFQUqots64ePQWrfETbeGFCLmTkFTrEvw7JLt6Jf55xLY2dgc4YHpUPtLXsjFt4k27WMBkXNVyQABYRWg",
  "key8": "BzdXjrQzLXcE8hufjtoLQmVXFj1pbTaHdaiZFMqicWCyDynJMbrTczkYviyDkPdEQ8q9cz9hZCoPzaWU41eojUK",
  "key9": "s1DqBAhWGj8d2MpVUjadKZeCpq3BFemcM8L2oz6jowhJqt42UgBh2qMKpCG3EQCZdZb95YSw29b6mUwM8NXcskG",
  "key10": "4RPW7sSRk4SUpn5FJK9uwMDk6QDZPYyJZ6QpQSRwh3z8KSZ8aPMbKKiip4Ms7pwd3YvYgcm66rhYuCixgpHrnXYm",
  "key11": "4STB2YZWsi3hKTdQYFpMao825fDVJ7RkHnKajoTRES8mt3ZQr19qYfYRbJh5tfMtY8ne2GMsGoN4P2jxfRGesvui",
  "key12": "2miRGMAiYYFQk6Fm6MtWY3fSP5Nf2YfVsDfTYxHtwVvdnznBckRbzmhb1Uh2oNgzWkBsvEGQpQJ52A3avKSgZnXQ",
  "key13": "YZrvLxAfvrtPXZ4RBTQH6jQVfaKFwQMJ6sFYCHr1XGB6A4oebwCVKSdNp9bYwRgnUg2E97pC3V6QnHhHcEVEEWK",
  "key14": "3NtJYVo33pSNnu9ULfpNKXkX3pmjKw8JieB2Uh27WjXfMx4DHbHfZ8u3GfDqifhCShrmaZCkquSRQJG9bgPSHrV8",
  "key15": "5LyBD9WExKWZr6wWWJYxW4TjDwdcpeJ3xkdKaaXsuvwp6C1NyQwgswqWGQLCUNSe1AxMHkDGLk8fyKFQtNnJQQWP",
  "key16": "3DHHdMrM4CwhpMS5PzNJGqsxCjf7WFHqJ1BaxvwxsMEzPYSBWm6npqwTPZQsoihVBdKqpaPydESJftLytcNrx66S",
  "key17": "TKvgdgM1yraasPundg8Y8oBcPUT5EW7mP8zRSStHcvkFRZfR5UPx3uZU8jFBQpir74k7ChgkGMemjpV98FpNZtw",
  "key18": "4EqAbCCiumoap5zZHuSuHUYn9SebYEecaAu3C9vANyVzqasGzKJqDMbd4FBYqcD883PCWnV1bR5UTsdruLsY2W55",
  "key19": "5AwUfCRpmX3S3zvH8MbADRgc5DgSAzvntpZEQ2JTfHo6RkGKXSimj8Aa2BUoutmUSb4zrLCNBVF7Awja5gAXLZh6",
  "key20": "2Sn51fcPND3gBDfAVbjXC3JCYEWFGwX6pwZzxUztTg1EjpujsmSUasZQS7Lpwwyqp97nK736gPA9fAMD1r6GpV6f",
  "key21": "38PUKYF55oXL8EVBCQ89tUT5kbkaaeZXEztsP2LyEbHUV9K5C9d1pGWmXs2b6HhbrgFhWh5F3D3dRguqBdUVSGN9",
  "key22": "4ZsXAZPuRz8vzECmsA3gHFFQi9LBv2niHHrVz9TDncrGA3H8hKThmJGu3SJMrGLSzb9jSYGvQgNCfAHUEFdic7px",
  "key23": "Vc3i1rs6mWEdms8hNk3V87kDWSPTX99s6ZP2hdoLkNXRZ48hnk4M8psGJwaYnHXg4o3jyoATAcs2MGnfQDPjLgp",
  "key24": "3or5mYFd48E3afHyRC1kH6439dn6SG9kdZEAeF3VxjiDs5qfNtE9mBgfwpGZFdmcdKE1JH4kbC1vwV7MGVXLp3uo",
  "key25": "3j9ETnNhT9ScSujNUXDPyaLNc1eN5ZXfCC8bPfuHiqWjr3LmYgssKoSTvmxHMFZLrvRzf4Y3VJ1jDfprdZo8ZZ6Y",
  "key26": "3zEKiPM227pAsobnHNNMbqwt34DG2ifMRVcm8oYJdmZsWg1KxCvS1rGjhG3A4Yh6X5oviRDnuF7t3pSmYGh5Ehsr",
  "key27": "66en6Jhepz8SPw877wUiojL547WMHch7K4RXecf5acJpDQkTbGpowWAFK4HKAm5AJqk8GPMPPBmsSBSbNznPGmZe",
  "key28": "8fYnWycVBGTHtwemQFM167qQYYhvTVcz76qHeXWqBiKCNPHhEhHwzz8cRCaW9eewG3axa4aBoALW7WAzaJ3J5P5",
  "key29": "2zVeSACSAx2CH18v6bBMuJ3RSk7AiDsjvpwmDF93NXQ7JsR6oPJ97GuivJUgTpmzRLFpE9Qss7xmbeT7En3psADf",
  "key30": "t6MciWRi9w2KrPkPjbroe8Bxz9ypokMNE6rt7RvpV9Wi8vBhs7oGxzWJJTSMMK1zdSmBehTn99qXNSFWEnB9DHB",
  "key31": "ZLQX35Ba1tjA39quu1XfZrQXuTyZ897KX44nEMBaP2ewKfGTL8Bmd5fVRAGT1mzRTtGserGVa8XNYwThk9stExW",
  "key32": "4B5XZNUETxcWGDbfeEXufHRqYiHnJdhSSUUXsuuhBAoShge9iAVfGRsowAdiwWNRQZ4CgBc7xhJf3qd56Smvg9vV",
  "key33": "33gwaab8XArYfD7HvSf3jyWBJM33iUgQMUKmiujk6kBZ41QkFPMLbZSxsmPaEC8vSSMu8Q89Ju9yZoyXPCRps62u",
  "key34": "3DDJYakXjtUMjXGWjU2Mj8niVdhjkHpDtvv26FTyVeUFwHhZBbPGouPkpNW9vmYJH4QpNADA5DX3ZomnfsMRern2",
  "key35": "RSweC1yoxPBy62taCfdq6NDHMbEfhJdfRPaAGNQMnQE1EgJoayC3v2peZUCYAeVUJNtnCd5fZ12rc5ME25x86Vp",
  "key36": "42jocBopAFiKp8khjDyTSHEppyDkJo2JvsPXPN7WgX8cfsn7GqwWgh8xfUKsc8d4VXdR8G9NktfjMRYEhX2dgtx6",
  "key37": "5eKpKqfx7jqKVBJDymmgwpvuvPG5iE56qD94EovsAUd8tcQAuNQdCg64EA2mxxLzkLBnN89Cwk4dW8A6PNrnUXib",
  "key38": "xDozKZrtNA8bSEpF2cwuMEE6hdWkxmN3mcn4YT8CZQHiP4BexTC3Gm12TbHLqLybAJQY1BvMPbDFCYYa9W5QCJG",
  "key39": "3eq2wbhHdQJ3TmCHdMVgdEEQc1rtBw2usmded7uidLfaNQaK1ZPHYTT8d2EMk77CNf7UJRcotWsutmRftYN7UfWA",
  "key40": "3Tq9H76gy5v484jeo35UUQSkHWDBUh6tFKTaRVqkiGwWMvRLP24zRetcYHwrAKPaWEjFHCo1rSJAgCBLv5zLc3VH",
  "key41": "3iy61VuiWjCtMFDiHCstKUxYN8zwJTB1yQ5DwZmnba6TAYRcFEcmrVPdzkZBLDut1Bp67PeR5w9WT6dvZMAPifmv",
  "key42": "2hzbungTtJrKwQLDihQ2S6DaNw9xnjQarsocFAa1fji1jci2XpATdZ46X6HaSVPTxa2xkqYo3MFZX1MMqg7fgdmN"
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
