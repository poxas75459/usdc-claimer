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
    "92SDu4iCumhBTvEmd25utnjq7tesqEd5jszCFXsig7bWqztzfH53ajavvENbE734AsFGkfPSV12fk7KEZc6ZFPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abBZurFLmCCceqBMNzADurrGpMnsCUrnJRgFCXFnnU9EsA5gtYRubZJmZ3ni6P6oq66HucKg2GuvrDuVRqnLVyx",
  "key1": "5bGUxct1nuXN4wGhiS9yNsugdcS6QZbG5NuGoA3Wd4q6pJDJHz4DGRfRuj131VFQFxAahjzD53kkXzydpcdWqP1G",
  "key2": "5NDKsFXv1bWGDUpiMDudLo4yPdNmikAS7ogtknVZ6G9cSfnfSeQJg1woGAiFnsLqCUHPcmhtpQkw2ZwB5pgQDbg6",
  "key3": "rbgs59UVCUNisdtuEpB9sxWrrgSEBNexzQwdpfGN5LJ8zFxKZoji2E9WR1GmTPLzK2duVijuEwqu8MqRC6dvM2z",
  "key4": "neT2z6FDNiSMAaDKAWtWYDMfdsEg7UTPfXv8NpQcz5Ffq9dySzQN9fxjCRZRFXrSZ7BhUsWvufPhPh2gYhTc7BN",
  "key5": "58j8jYgYoNT2gy9JV4WMKT5W8A8YGijaEL8KJYQASEs3em7SPmCE1veiymcmMGQ1pfsBYH9DAvgLJbNBuKUcTC7M",
  "key6": "62kGAJ82k5fYHSLP6bXFSa83hy4ei1a1YJLEPQEuRqth1tYhrMfvUvekv9K75tt2u17uVPHKH7sUHE8dvEY1ZPL7",
  "key7": "5uSR5t6Qht2YWMmmkthVECuvSUJpbthnX2DfzDZxBj1GUVUgKFc4ZXc37MUqUHyDbvkZskan7P1KLitUfXVtQsCg",
  "key8": "2p2h1bSzqK7uvYAMv7DRu9Uz9wMj7Suutwa7c6qbnrGk2vkKjbaT997yLrfGu9qsxJ24DMqThNFtB1asvQV3HC95",
  "key9": "3WJ5Mvmps1W4kzWtEqYdin9nUUbn22HYta6Xn9KwmBKfpVsWCiTNpBJFnYadrDTofWj4UATaUj4ptMFf3XwrFfVJ",
  "key10": "3JsyNrcZ9rhA8tJuNGdvRppuYmxtsr5Y7DiV6nwNFC8Z3ArktTLg4XwpDMwBUZWVuTTPW5TgHqjiYVyarpDdbGA3",
  "key11": "3vx3ymgkLngw2sy4Wtd3cLTBYh6LzHDhZSt2LCWLmpvdnKBm4j1hCM8Mqmi4BbwioqysvNFA2X1oW5CogP2MyNBP",
  "key12": "Brj2nivE2LW3yQGYL6k2G5ruiFkG5t2Y6cwefFKV5EfH1dqXToTjzjTnGWf7BbmYN5DNZK8akdtgrkrZs67EFwH",
  "key13": "35t1zx8Up2QrbCpuinaWSbxCFXX5MvgTtmerjUwq4FLFo11ScFqwuRxPcvWBn846NyP1WRPCTpEbqpcteNd1MxGx",
  "key14": "5LQEpvi9Uj7WuTFT5HfzXZ2mTdAoDBhxCNsZYQ1Mx2aJhisE4g1dppiEDwf6mt7L3GtHJiBmFvbFxFkQYdjLNNU5",
  "key15": "35bryCE3nnYQgTbdVJN2Wxg3whymT42gE1AVw6WzCmcYhNeeVVpR5sZvktmnjormncXCr3u713auFtfeHkPF73gD",
  "key16": "2SBZCJiyH9LoTWcsJiK4hNJprXkocRDoXXpd5gmszYJcfFBbLYj6wUjSd3rqGM5TGWUssz95XPQ13Wz5b9u2vUnt",
  "key17": "4aMtRzfyJKYEh9RvvYnNzSaayWsDwmw9MwymRZuqtcjfdSdutgnr7mDXwynzX3Jwy9z652ZFKzUea3DRHj2UmmKo",
  "key18": "3EeE7PnYVBUCwPDmqa9AL2SVbgaXts6Mfpo75aD4Hj9ywzZxyArLHeGMDzhPH3Qq1hkVGCpB7JJWTrzFHgEGJs8a",
  "key19": "5Zmi2ms9HKz6fRaot4hoMvZEFDW799zot2HD3vH5YfjZUn3erK9UEsgv1X4cWTE774NcqzhhdULv5FLUuMSYujWb",
  "key20": "52498GYcmR66JuFUBbEAx9yDQ3kDYJCmPdffeAiBWgWp6BjE8sGpzcWbkz4D7S8DznhhvfaXXBqCCihPxRNfsB5h",
  "key21": "C7bmXFd7DFpd6fTVsLtFhq2QG2oWsrt5cxF1t256K2RbVWJoPyx6HtwMt7feTtdZ9oDzdRE8VuQSnj9ekeXjyNk",
  "key22": "2LN4Zi5jX5Y4uTydTrq4dNZx5EfDUktjAwwvYtZQ4mq5hc17npLE2m8HNPXWE2eUrxSTeK5ehcMyqzTE1NMxriEv",
  "key23": "2VaZ13w45kA1oeuYxafAexLcAeNy2Ak5M7ipuCbBCYbrooLHQ6CW78Tsi382YF2H7jzhHu5vRmZbUqq4rrHzv6Cv",
  "key24": "31b29ggGk9x6xVJJC1pGbgtcVkbctdjDBg4dgZ4WHiFsQ7ZJDNBzrN47n4BLgnUSLStVRvnUasXFKFu4kJAVA9EF",
  "key25": "4Geeyzdn644d7MKxp2tZynp5GpCn3xuXqw8PuiFi6tPdtHsdDUqshHCuDtARtQ3ixnrLQiWEYGbMy7Afa5up6D12",
  "key26": "3UfN1YWiaXXoYvDtUxYWA7SiVxsGjXth5EfgQ7weG7mFUjC5uoac4M8RogPh5Ne9U9fzDVSYvieznnBmR9NV66n6",
  "key27": "ZnWTMUi7vkL7EWFygMv4j4RMRWaMZhEuUAJJVBA5YXWJTTN9YBm7YxGZqHQbUzs7PsehqHvxDv9VHoWW7CcnwwP",
  "key28": "5QoD1zkCTdNEqPb5WSFW6kvi2kd3jcedyZEvCW2dz2zf2xWqGFvXRBdhrxkbqDGRwwf6p3Yw76c9rprT4h8oq89T",
  "key29": "WqwXb1U2wENfhC8Cmxibge3mT8KhHKwx7qRsXGsa4Bm9EBPVQuwGAsVXK6QkUXcwUoT3Gw3YigdJmKCkKPqfLyA",
  "key30": "23aB6r6uPLEmMyY4s2vjNSCWiiozgguuRvZiSC8fhmymDDwFNSNUfkFseRs9LzEXQHLLTvLYDRKfSjgzh8dNz3BL",
  "key31": "3poaKSrQrz8kvEffKdz6MY4XLwqiPC6Gdt6jADiHHa3fkN2GMgiY7fWKJ2JC1pBKBDK8SQ3r59i6bPi6mZfTyp7H",
  "key32": "2Mm2aYibkzS2B29XPPhg7QfAqFopEWWh2zgHhpBMm9YKedqtqizFW8pjYFtfjmwgXy6ABk7U3nPNKeqmkjk7eHTr",
  "key33": "oMnnN79XkGs2CXCCVg5NVKcUGuaNcFqXgwkK6xVecxr5hMVL6iaRbouxRP4eh6cWTwx5DczgHo6hGvsoRFy6qsP",
  "key34": "3uNaGf5mkNV8VeD2VStkW23tkLC3r9ZoWbwgG3uCzUqy5GeCE5ST5LSoRVAn2Y4ww4zM8YEhFL2Rz8RbDKyY7EA2",
  "key35": "466Lu7cjcQxaVdZBmnvfTrmZfDAypg7KnPmNpyP4udLyfzaDc26AjaXR3ce4LQTPh5aCafxUVSepmRHLtNJBif9F",
  "key36": "36hFbaEyU1Y9vf1GokLfxXpGtjzRgsNpH843MdfkmsjricPub2vtSg6znRVqLpAz2ntSYQo7kyP3eXce3pgTHnvH",
  "key37": "poDp4QJbJPUU2Hb59koQhKaweJ4TTWGrwiBEq4SvA4pyez4adcYUpXTMaqXGCXokdQJJrwm2Qy1L71QyNDPmWVD",
  "key38": "ibkrDh3vvnvmo2F3CahSwt5yNJon6soJtfVP7d26htoM5RS2mDRarX5uCV1pKT36LLLcfqGv6KWU854saJQLUod",
  "key39": "2peAm8WXZ8R4iVqRY5TB1VBAKU9jj6tdZmDU3znq7MKAdC1bu73otmmZ65QFV4gE9LerUX3vfPNQr1dg9XCKFvny",
  "key40": "4YiUnEEN6eZFsXee8TDoUc9J7fSJxtGLH4VMjouwudGimeA7naGEAzXqsjNk8NFaXMMMa5sGBD6QTDC931zUpyei",
  "key41": "2Wc2NqcBjpa2jhPyWH7ERxrgarJjemH9bgh5DuKzXXumeUDGvnz7sTmHXv554AHHtM8MP7thE7sDPNbUtRiEPRjT",
  "key42": "gEAMTT8UFG6DV8YvtsccTwg284PRD5Kvtt7NbPsmgrUktcdq7AsyqotPV7cpH5BxkSjjr19qG7xrq1wScxzfWE2",
  "key43": "iKBTN7cUcTYp98dHLwe8tez3esmoDUqBF67xBAiNh4Qs1G3EhBSmAYaN2SKn9CdyMiXF3bs8WPKohaThu8bXGxd",
  "key44": "2PEp6aLrWxLb6fk6asWwT39SC1jAEuSqGGueqGs5gNNFZpzDMHg6guQXby75ufXHWn45o79kbAFYEhsUmv1ZjRKf",
  "key45": "4pSCQ822g82gV6t7oc5yKRQoNzXriRUcyr6hPj8qFLYZWHtjn3wUEtH6ze4DjkWYn8L6tJRxuYVkrnFPLFjprEvB",
  "key46": "22We7ahP1nwbeHeUkUZVHUcc3YtpkJA6s4invtANrBjypfSs1ZbzKe43D21pruEzm7zvu3o7MWEcYxqWf7cd383k",
  "key47": "3j4DkFQix7sXuH8Upd5ga4xDMo7C5zUwz3JMsXLgxpYFvrqLh18ZBonbqYjnBaMuaWsUCcQ8PCNqNeLRBhYWy1aZ",
  "key48": "5buCEM1Fw8g7qac4caYgqW3zhvWTMP7eea1ie1P43D7X7RsNfJEm18VjvzeZ9Yccpi3kDJhZgmWaxuKragcFdH9X",
  "key49": "5XXj5DMMZxKwFFdz2WLWkpKm24G9M2A7t84V5Eie8HJZe8ynt6yofRuVG44ZyRVct9rNMKuConvhqBM1swFLnUdV"
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
