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
    "2YiND59p56HA6hi7ACFmZRWah3avHBbDfZJuRNQ3dVgaDy4poPS9fcvdJfkrFig4Dxx41JKXrCPkNcu4JYCCx6z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sePhMoe7U8x5sRWrrtZqu2AppqFDqA6VdiyM2bqeGuTnU17fXGDiN49NZuoNVktihkestmVMZmJmJdi83oxRvah",
  "key1": "24buoPWNaGn4jyQbKiVvSZ4phMpHuabp5hXauhVh1qFr2VYKKsdhrx7fRwRcM65VMDMrcoC7FRWua56KkgfsdjTw",
  "key2": "wRLff4KaHZpN9fjCgNxQ1fV7Uv9GXH2QzD62shDPLNMrUjVmWsqBfLcDW7KmXTrgF3k6NSpwc3ZbeqJGvW99rUS",
  "key3": "377MdiskicVvagJbnvMUN64fEHUqkDQdL6MXgoiqseHSshuaJVxkeEJowK3iTBuUAVvPTVkgZ4zXKynQKHXwM7xg",
  "key4": "eHd1KTKW5vTmPktPMtJCBJKE8z3qeWpmigiKXTKnT9rQPkB2JuuDee2CN6pvWsnt7MzuaYUvfrsiLWhGv9BE8WX",
  "key5": "4h3Qih341bdqKwqVeLBN2NQrZVyCn13xtihZBTdRzyop54wygVdjwgcDshpDJjosam867ZjnR51VmKoX2MTF5S5a",
  "key6": "4zTttc5BPdh3CmKJM2YF4WUzn9uFZy1YSTL2ySZ8Xxfe513dpY7QkK8UGSomNxwXAMQukWFrpTXh4cUZM18ALERG",
  "key7": "2p7W2vAS5YjZpNcero1ZrfbbKbnmupX2Mt6PRD1ibc1L5HHucKweNQ6owkTsgnsqrBtFTcY9KQETGRrxWcdSZwv8",
  "key8": "5i6gc2C5iiK6u9SxNkvRkvcDGu6tWAcwCyPqDRedsLKcDYGRmCvsBxA5B7HA3viVqTqdsd9oEPCnfusmMYfPzfSJ",
  "key9": "3BXzgebuYm1uYCKGzMH4phtoR4ScSNbtDmErBUtWCLeUJhUrkRU3bLKe5Nmy21EEpeobSRSzQYFtZervnUWar2JJ",
  "key10": "4z71X3koeK1WB8esadHfPAxwLveTp8EEtfvrhYPNRdact5v2DvoZv74bun2opmGGEwEHKEbW8TCbe3u8nnPDnqWJ",
  "key11": "sbgoiHSFkhSGvHRYQTaZjXXUF1kc8rzhFamuAg61Wi2tiCwmQsLPSNear87kTbEYfoKUiKi3bXWUhiY97xNZfjX",
  "key12": "5WWRf2SBGXtLEb5LRCDZ1wf1WJfoTTNyZhAZMTy9FrqjjhzLjhxgb3ZHtaHnxmtwCk2XmfCxgDTJoiucdoHhVjwA",
  "key13": "5VGzo6dEevDihVkkHpM8c1JG3wj1XaYt73J2f2PJ41FGzPwLLzvttwHhAUYsx3Q7W4fJyP4gmbHxKDXuQCKQCnJr",
  "key14": "532aT9FEtGz8HV9vXo6FUyKYJV2Ww1gWAKwPGcW4dRSGZB3f94cyjXR7jU9Xxdm4ddLcDwxTrMrzf7d7XZ2WC4fZ",
  "key15": "4ykxNiTaT6U2dZK9X2XW2wwg6Jz6f4JAWNFawptgrprpPMkesni52LMQrvdnGBhEZEtCxNaoSpjR1y6vsebmASxz",
  "key16": "sBU7W1ajwfSrnvb8155JoZR9AsiSWSMCNtqHPogjaE1T7kB23F1KST2waXKqGabwcb4mVnPspe8wbugxyzNZEhP",
  "key17": "5kwZXuPNfUZmdW317yMCvbhKRMmNJqFY4Fu2viwoVu4XAFfBNxkv7sBqKEKFGrPQWf9AmxpNffdaVDBRYb53SrcR",
  "key18": "5R4DVASeeZgHMGnXDST9LKFmeQz1z9SuRK4T8dcWMmSCBzixVtc5XxBPrXwBoVhE1ZeQ9wHW4qMHbh7UA3unv91C",
  "key19": "3ADUK1NQ8JFfKWLQE2QgzGMgcfupYinfyc5mPw4dbQVp2zf1BTciV2T1dniTA1z1encUB2E3LseExQwHdVYFnayF",
  "key20": "zrPFonMyJLmk15dD5Eq8L4yzAKjC5s1yjKPaK9zU6RTZjnYt8xL7oXtEWmuBoLLRpGBUixakdEoaQCsCAp7q9b7",
  "key21": "5ppWEM3d55z95CNwNVYi2TFpby7ymturwBQDKaPb4P5axyTy6rBDFwqFHJiCSbgvUMVUT7YBx1hkGX4E1oHDBuGM",
  "key22": "5Yq3pBEFBxJ3D3zybteue1b5KcGaHo8de6kcBdZb9hwxw7efEqmUDQH2gMw41NvammxKzoU29ssYVRQDNBCgPZ4s",
  "key23": "3M9qfmYG45BJRuc33FE4ZBYWZANJV8yjg4pta3o746DaTP7JhTvaWfrFx6Gr4hcfFUGdUsuhoVoki8rpTRYEhPnM",
  "key24": "4s5x969sW65z4iEo8eoErq4vq8JXnJLQW7UWftwbejaWAvqbHVYznB5HEbfid6Q8MvETxCftqirVEU3En9EETmVq",
  "key25": "5rscgw8mNPABzUF1o8Sq6aXV7TJzVo5HtBeJGkJKB4EF3qdFyJmiacoLHqaiUG2o4U2HAJGECfYV7n8jAr9bemeW",
  "key26": "3GGdvfjq6AT8rPxnK2JNTSgDw6R6Ws5kCitnUUDHrWhGcBoreN44sUwXs22ayiMugZBEj4KoK1DnWwh2gA8yHLdD",
  "key27": "5Zw81yMoCsp9hft3P7wdDC9jF5xSZAdwYzdXaMCyU9ECmVkuaDV7pZvy3T2L2NsbPKaMD7WispHer1fRRVzMYVkQ",
  "key28": "3KS4o3TSReknbgkXM1rWAA61e6LBacRhECRrxVe2SBL2nLoHdpGuCaezaSfnJ714Jpr61dtJjMjTjXYFvUdyC6BK",
  "key29": "82aHNJuWd5x6Mr3pUCXQftBwP8YYQsevwxBUDBFN4DT1e2QMvi6a9JdWAamsAtv52RGJqYnHKBxmUM4RkDYWC3P",
  "key30": "2KieAR9B7EhxaHjUY1pSqLG8EQwBvUAJcrUteQhTqhnqicXJRdchH5Y5XhgA1WCT8cGUbsLKB2aiUsGhdmavH8Ej",
  "key31": "2BqGJ2HFk4a9B57puHutZiTLaxCuyaeY9J7UomFA2SFw3rkFJHScKUvH6SK72KEtYR4kVAZsMDyNdW3JN1TBYjZn",
  "key32": "V5UJKscRuxFp9PMrP4VbaqsVswzDzGoG7Q6amen9cBdDMm7ydLHHU8s7ArXsxoEMvcBGpnNAr6iFnoTyRj4esFP"
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
