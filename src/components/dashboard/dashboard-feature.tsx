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
    "3CFs3nUpAPHx1csp4pqRPqMkJe9VtnUPe7f8971AeE5cfp6tAETp7xthAVe4hvAbcCB5JoTRJDxJLo4yL3RBvCDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hh9X9kuCdoK9ntDwSHjb65LfcvQkHorQr8oeGdvPp35qDMELnF9n21ufUJsz2LkTLRFAWUtwXsDD1P2Fhf4zJHm",
  "key1": "CkmyDJvDfmKEF9YwH3rxUgJYc8MMWtSqEuKGCahr3jCDNfkhni7Y4gTPciYpJZyoXBf6uKyW1FQknRLuBR1jurd",
  "key2": "UM2R54RftyADar7wogyqds6uEsyfDetZid9AbnTEXyzVi6emMEo4ZfhHN2sVmW6YjobdCzfuxaHhr3WhxKoU9cA",
  "key3": "5EyVmqM4uLBzgFixsC4jyJV1KE8Pz7suv4iCSsiRF2xFTvnUVJrpWMgjaasQj2kDTNioPT1Pd2VDU4bTwM37aZUF",
  "key4": "2mkYWWG62zS2TtcWdfFPqTxBHVD1UYCeWGhjazurWuBfBVsx1wB7yQ2xbDDs8RuFXJFP37MTdbJqEio2pSCLPXW8",
  "key5": "T3yQcfck9meMQogiJ8trZm9Rj2fb5bnvXEP1UNoP68S9wWL9WAzeX3RECncmDJDCwur65Hxj1xqnVUpQsGomxzg",
  "key6": "4fbCQuAy2uj1qH6BTTstvayfCf51uHr3dHxcBw27zQ32miJSaASr3mv4YKGzMekX7Msmw5EqcPR5TUiEsSXegBdX",
  "key7": "22ndW6ASY6CzRyZFhH2CmfCP5JseFV6YBRrued6PW6Tz81Twd2Py8RHEDgof7ob4sfd8UEmXdpvKw6oYW6BcHV5X",
  "key8": "4trGU8KVu8P6X5bJkoUKtukvLdsXrALp1ubXXxPYdRXicpLQkL3RughtoCdYu6SHQ4uWvj1zdKBNd9G6EZKdECEE",
  "key9": "5MjFg5aeB38S7DP48yq2mbAegJWVj69a1LHgZqAZfvcZ5bFaFhA1EvtvYhgh14XoJN3kU2DzxvGssVwa4284udn1",
  "key10": "5CvfnfyXi6QTXTig2qFhp4yQXcY4CwfmdgZajrgQaqSW6jxc5zXzZ8rKdeczaPxUsEJbZF7wQYKt6UNtMy5fn3Tb",
  "key11": "4sp4moyNgGuVoXt3cQDyUoFfEXoxaCMaB9p2YE2anFq9cgJE58msUrMpMpM5yAAtSUBUX4RtQmh2KhqKRtu7aE6P",
  "key12": "5WPS26WbYBXqzNV3asuW2A1ZD9n5h9zCzBQG1tAAqWhDHPNF8nzAct2hXgHSNsNQVQ5tVVSLqef6bRyPs1sGxs5V",
  "key13": "x3cLPc1ALMhQrEdxjkPvsRGKc4YqWvfqgML5HDQtkYR7ssiQbyueBD4Ln9ZPfKvY9zR5NK2rL3nfDnTWJWgdZfX",
  "key14": "38zsbN8Fo2uoMFLMZkp2zsBBnprARrpcNGNcJ8Ug5ksPtEwPX6sALTA64u3jrsPVK8HrSQcwXs8Hx122brh6LjJT",
  "key15": "2Kb4wZiP89Hv2ddPSzF8v57VJGEVsF2K4VE3sBp4oXduthPqEHC4f1Me6dJueRhnerw6DTviyuvHaD71Yq3WsWnT",
  "key16": "3v7kkATvoHAYGWWT8Z5ePNjkVNeDEf22LQENa9HCgc8cXo9yx6vYApD2wjqtXZAoryHaaz8TjBLoywoyH7qBrD4t",
  "key17": "2KVho6mTYvGtoDiSgpETka2bgVboaivrD27oR7jhd33gJtwAfBkYMZvPZRi2GbCFPf2BR315uEegKrYHuJ4CTgyK",
  "key18": "61ErxkaBU4iwb44Ry2tDffcGcRRkKDsMcxhP5KgB62WTPCMPQUbsydUQnRHYwuYDjHfx66KtfpJ7wfz6zca9KmGW",
  "key19": "fJN9aRRpW83qibU7yt5CyMsxHzVyfpatWaeW8P45SNVgYmuECgyxgbWDrhTwhfWFViFiMvYBbKB2HKWtBimWwD8",
  "key20": "4CgUkNxWvYZn9eramkdNfKGjTpomQpPga5fcwnciRKJno8zmLjymhKtAwguciekUcGTwHpnijWxf3DBNuQnkhgT9",
  "key21": "3y3F9KVisaV6qgbp7LQX4fRm7khpuvi4PvgvdJF8Nk7uuy4gvtan4Ro1ENhTPNnBwvwDSYPeuE9Z52Ck89MwMrDf",
  "key22": "4nwmRAgEn5SciUCU7PrrUx6dTziZiN8Tt54gYYGwmn7J5sYpA7ZxwkLu89dihREXUnjFMa2ZG8x24wwSaY6vFoR8",
  "key23": "2apVrXV8qwytB396Hq8c28Mjfc2shJqorHKu3hx1fon9EWFn2XZLCNjsp8q3gHoQiL6zdQZgFgsZX5YFSUiRNVsi",
  "key24": "N7FWMMji1zhuBPDakxQJrJD7mZvYLgP4rNJZMtVg3St6fw5fJb43d2sBapGyRtZA3aGUEG3SvxiJ6JfQaJPTCFj",
  "key25": "5aYtXfybtv9CAR2rG9idRyCKjm9tph9LmZxN3UNAWuGGCR9W1xEKLRefQehweFZpjWxNnsRQLjoVmUSR7UpueCEY",
  "key26": "EdmsZ1VdgXbMPt8qi4FxkFmuDjD4bJGiyp99zCKdiWcveJrAio1SGXsrSDgManAmsv1ttvR395B4qqgudyb4fhb",
  "key27": "BqgZtLCESTdk3TJNT3wX1Gb96iKFajBRAAT9DmQNpU5w4tZARH4FMMZ34wwPpJUV5mfmV2uzRENQrJF37xdUJMc",
  "key28": "QmoTSHEbaeCuKBSSfgfMkP18XhThLz5ihHri7Huaiv3E3NDiXXtUwJRcn4p3os955miQnEBVRdsBjQUMwZsucWY",
  "key29": "4sZkoGGz8MqEfuTguUgqgVMEGzZWe27u1UDW6waqKvRGC57CzXtiZZAVazdJPcFQujYThHjeyu9uwoXdBFtxcFgG",
  "key30": "5KJy4VUEKG4cq5otLPBEuRH2pFJarn8QTDNrzfgNji3uJKMMPYyWbSkXBFV6dCucVmtrpoE6bJnanp1dmm1JTqEF",
  "key31": "3zRCdACBkAkWdsdce6L1CPwiCRsqybh4HqYgZr32Krnod8MW7h4YeZzdakybWjDFye9Gj4i1LjgdjfQoyVC9Rgot",
  "key32": "MgEnEaGUkgb1vLFd5Y5LBhEyj415G8FmCbxWSjoK2CJpAY1NE8TwHoAzSe5jhVu2oAuXGMGR88YYegbViAmR1fZ",
  "key33": "4zaVVGx9KxyUhnCttgj6bsScUviqqsz23MTvgnLriHg9PaMpxhHUSFfGHHU5rWc2j1WWS2oFLGWYHeZQnrkV4TM9",
  "key34": "2pyz9XvGKefDQ1di1v8bm2rUEC9v3sAYNDfJYZ5936mPMmAjSKZ5VbiSPLDmk2E5LWCaT3GzidjHKXfSsrWpjCSG",
  "key35": "5Y8AJPfdMvT269PGB4nVsHN2JTKyhWLVEib1mKAZeaodrzTd8XmHGbQsVv5LpK8A3XfZ8BTyhv9wQzBxSafZX6FK",
  "key36": "54Ny529m58jxs5phMG1EuU1UTAxa9KJ9vp3wR7KbYVD3Xz5KRx63DzrsiWPFP21JCyMzjG2EmbtPXpsBCzfSFynG",
  "key37": "3tTsTCSRD6ngCcEuGPo12zKrfsV7Mmaa28dSnLza2haL9tqbUdmGovkfwQPoASvHFL3x1HZe87M3Yhd1yUCohwjA",
  "key38": "54MT3pEJBWQxCgYtY79Cypq6rbM1YLSVs4exyPPDhErrxuptS46Lce6S2S7kfWtxF4X9pVq7AjuLxr3gj1t8w54w",
  "key39": "Fi5dgf6M4vykf3Wikbo4fE9pLJHeTKVFftF9MTxHAewf2kbkcicdJZH5SR6NVbeTKZT6BbyzkUf6VTk6oqJ5SY8"
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
