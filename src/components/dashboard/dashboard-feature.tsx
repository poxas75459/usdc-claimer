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
    "5R93aLY4vXBQCKMZ3GzZsfmo4voqAAMaA2DGMQXo3ZKWogfqdimq91QBjDYFjXF6maG5jqQt1vruKi6Z4MHb6WRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuiAoGuT6odDDA5XGiUR1oUg7FKnEVu1apBumbVEgcxAvjGrfhZHojNsZ9so3CT5y57C4Ki7oh3z6RKvPxpYxqz",
  "key1": "3g6Da7YvqdoB7XpknSwdAZn246Xgm22D3z73NBtvUMvPYiJhwBRD9H6hp4noF6THwVMPFyrLm7mxDRAc7FLzetqg",
  "key2": "3Qd2Uaxhwe6UjGC7uLeq1cbJsgYF6Fs3L5DyJm5sgKH72y3cEyDJbnxJWhCmh31nzmCwr48PEy3KXMip8J1TPHsw",
  "key3": "4qTkt6eZyv9b3CAMi5BumidxQ9uvtAE8XzMHoZWuFWoAc1cukg7cFMkQUcgQ49xKiYhtJb3dybiCYUE9feoSLQ4q",
  "key4": "hNXBq5RbtT7qLcSEvnHQt2wJ4tWP8j5j6WtqNU8odGco2MFDUs88oTGf9663Neuo2i66MM6z7cYX9PqSpV5wvBk",
  "key5": "4AHFk2723whJqtrhATdjdQMUyAhJ6nTvCzCK2QVewVBCEWU3DaXfh21iG63T1Y7CsLr2xMnxJpmiDoHvjTEu5bcW",
  "key6": "3CfaPypbwJeZg8hWncoRx7wg5suLC7HH3WuHizYdEehqHwZCPXW5LqqWVJtgJaUmxBt4ip9tzN1okNApUE2WvQuN",
  "key7": "4SEU3Gm1HRJWbUzBpqjagvR359bsqjF8pAtEmfLf5grRCFiQsey7WEaVBARmTctfCR3RV6f5x8fHzpCC7D6jY4nV",
  "key8": "4PqJBPQfDk8nwGKWnukD4aSF2weLWFpPE9AgiR1SkDeyZSFv9ED81Gnpckk5XEe5SC3U7bwEnuVGokPcn8QhdamM",
  "key9": "eT5tp8Mrmw56yXAbb3KpPKvCkACk5Wk5hgvC4936EkMxpTfMPibTfBmrH7m4thTzK8bagicXXvUWRAPfDhRg8oJ",
  "key10": "5R9yk2cF9ZHWgQ2WZ2cF2XUeKRfYnKg3FosQcfdXNdpue4MWpZRLKAWL4XxhjaZys7Bo8yhuMt5bkq73UiuZEGuj",
  "key11": "4vmz4D1HcBoHeuwy36S1cTuWSxRPUbFimKwp43jdoJ2ZSgQjz2KTw8xvzDeoHeJjJVR4bVS9zfPQXmH1aGacJWJh",
  "key12": "A2usJndY3MJhrs7ZokMLHncpwstQz5JQFqFwWhJfBm9D6d8HzY1JvENrueZ2xdGP6rXoCH2DEmNSu3ynX1yXS4y",
  "key13": "5KmumCisxqWqK3Mj7jTaCjw66G18WZb53iPnpLaA7Ey8LjfFTEU6vzbomyeLJTs3Uz2WtQ5bTygT571ti3C5dTF2",
  "key14": "4YWimF76ke7d4pWJmfNDBu5PfJfUfTZfXBNjGPqLaYmWasUwsGAXEq9KHUKbb9TF5ddiQYgKJTVsxn5ac4Mn8iJa",
  "key15": "5PArEs7dDnRAjYBH28ijjDhvmEZe1fDLC4QezDSyo6ZxcaZp6H1gpMS35me3RbhDSA5YyFFXWQPToSogBhpwXSW5",
  "key16": "66QQQqJnkVrgGcqGAVPerj6YVtp212ix5okwdCvod3bexk3F3Zmi69KfMfThQN1cpTESk7sKwY56Bvcma9RPFVyE",
  "key17": "5CxuiVKAkQkCDyt2WLCLjh82GKd8PMMxFQTSzB2nytzkZjdJgDhRJ79zHNdCiD7L39mSoD7P1eJZX1oHq1QrkKgL",
  "key18": "s9jeTSwnyXXPWJem5HEvmSdowLbPAFdDE8mPyS5hUxBs6H6YgeMkuYEXgh8fHepN3twB3WSFvokswY1s5z9z9kx",
  "key19": "5b3JYNDb8tpcgKtjMfMK8yJ5Xh4yVddUYQy55bekXhhm59BdjihyPcj2fFoW3eymL9CE2Zcswg8zdhH63XqmBZsX",
  "key20": "3C722rFe9nqfXsDbnANveHQQw5qs5Dcd9JxSCbPjzcc41ftUMCrF6apa3rTwrVXsSYBvPbeWhnVGmusGGtA7hXMx",
  "key21": "ciPkUxLyxsRt1jWLRDw2AVT1Y5FhHAC9Kw8dTCyU8TdrhBvVYaLmDYkpfsPQpkKDWiPKGCJfLzpeWWo7jUuUuzK",
  "key22": "3DeiB74PfGAk37uhVuKfRF7d7PrbtEDZasuxJgZreksSFkLPkp8sFr2XtV4YfQPCrh54SvodYP4n2JAtAxmRQMgA",
  "key23": "3yHuqEbxUwnzhrzszF1Pvm6R22Ut8at3D4UZjVdwc11cRvDUwSqoGmQ6nD4kTMCuQPdPtoLJX6ngvHC1bzYeL9T9",
  "key24": "4wE6ykswmYg9aWSvZEKfFQDCdhyG5yRpStZztubmSaBbMSuBVoYTwWJLxArk4iJyqDR3GwGz7EZMS1qu68oXgg9H",
  "key25": "JNDLUPEnkbzLyXr4uuPWi8Be1iV31TWHSJyjq64ALnMPv3Lvdxjaf3CqgUYVBEj8zWFgzXCYdECUEjJzbm5Pm8k",
  "key26": "4YSJJsv1z4nf8T4BxxokvakLHD5a3iS35nu46gYc7eRRQ5dWs2zaJV16td1biEsrYVxdmK2oso7sR4fZfszsrpuP",
  "key27": "3LYSEFotuJUq6HenEabN1MDyZkFkZMsUD4rxo6C5acfdkgWnUoG23BFH11RGPUEfx9SM5vW6gNqszZUaT4rBwtUe",
  "key28": "3RmZK5wGmPsQbwQakFwTJTcnFfCj6ebmQnU8hNv7hLkR28GBpkoG8THipbMXdUCZftakMa99Tbr35q58jgYYyUZE",
  "key29": "2ohUattJKVXStSz6mrfexqRNpaAssgmVrpLk42gawhJf4vbVaxQYX7ct7P49vDHTS1hsB8ZfB8imoGoZraWburfL",
  "key30": "3mzufpYFGMncvGA8Zx8HqtJXtiq4KQojHUUCxzWeapGNT4zdVVosu7dKGFN9tLUg4jk91E1dmtcttknrtMLN6JrV",
  "key31": "3VAXNcRzeyVX35ZCrYfCUqR97mCUMtjo5K1TS8inQMuLXRCHjqQCyRqxTtAbJULD6RY2zjCCikKzkzvqZB7HV121",
  "key32": "3U3KpG6vTkWX2JsAPGtmhN43tSnToc6ZKvv2j7Tt1kk3QmWYW49sWcbngxXKDtsaEzv8sANLSZKfRJ1ShQEUqYtj",
  "key33": "5QfdtJ7RScFNnz8SUsoLCtxN3CgmED13tTiuqXbJUkYQSaMEahA1qSZvcPyfiDj36FC8UoGRh411dQWkTqFtzaRh",
  "key34": "3wBbDHXVheX6V22edfRm85euvZmgmjspqPedZ4gotPujv2SRD5xJhTjaBXobNkik4RsK2aaqABxhSbdhEtTdnr32",
  "key35": "5KC6UVZ1UxNqAPMqa85svBG96v8DRxsAXvcEXpAbbwzntBJSs6BaUtk5y2dQEPVP7uj7dSP8SAVRZtzZCyq3aeac",
  "key36": "5BbLwEWShtzsSQSYAUqf13HdZF4QcKJ7KY3CvXbmCUneqQ81zMDFHTJ9vgPHAPgBAz1VcLAAgHkSpcUQfonKmo8x",
  "key37": "3Ks9TSRujcgqSoyrnFmx9snhwLMnPaYVWAUoJudTWRhk47gdv7PA5qKLwgki2zWq3iKzKxVYHUjDXfCwrP7Wgq7h",
  "key38": "5ZEfcFTQYmmTYkPEjATDeV3KDppwcxgn9GNXxoL6VBs8WCouPCY7DrHSUYW3E1DF5QTCirac3c9rbxLPsXwyBGWW",
  "key39": "3A7wd4g2uE8aXLs57fW7YHDZAiwepgG9hcUBZRdbUkGU4bp3b4zcwt6KRVmUbQo3dMN5K36Lz5n8N2bosa1ujKzY"
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
