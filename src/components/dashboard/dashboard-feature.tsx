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
    "kFiVxFVRzwMdeRNnfxMjzY3dyR73u8CDY1hkZPYt8smNswx7EW73TU93fnCVFmeh6sH2MFRoLhv5FyJx1ddRqJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZ862RoNbHngxYKXKuzkcERdQzJn1yKth6BS3QDtroNqyvtA5yya6nbgKDf5d9sMfJa16b6DzWPu8xpCCYnXc1a",
  "key1": "3NvpCJdCLSgYppGKEakPspo3vCGdr4k4jmZqm8HrCCsYjQ748uiJXxRBFyCAzt4WUGvhH6WkHNSBdnf9MrwJFL3p",
  "key2": "44Xv4qSR1VHSdyGRPEMpzVfsit2Y4vxYumgv37gLLLQUmdXZ18wS5oTnv85qNaVQ6HjRnmXeB8HcL8w8KbNsKtWi",
  "key3": "3vRtH6QsUSyPpYis1BS89fXxY5K9Pye79HdGCiwHwaF6u3qPVCeEgAAEm8shLCPgVGRRMQvyXhMcJpsjaz8duugE",
  "key4": "3rqDAxLdg2en1pcLLX3KWF1YhdJ5WfYreUFPoH9Cbn3qnBa9qYZ5Wg8NRjo66ceJ8AfriNJNLfU7mPSUdCapLfAc",
  "key5": "3tT9J9DntQRqpX7rg8gJFfsxayjNmmfqJfBocmkVzpxR5EHHJmDK4AnFzfNipEstm6nSweE2aVX9w3zcvSSJPiPY",
  "key6": "47zZmFhkTE6ncC35cQbFkBorVH54J7FMrZc2XY958u57bjf2Ni1YFrK1LdmGZJp9MvJ9VgPFTJqKQ3qRVoS1Y28Q",
  "key7": "3rwCVHSMqMCFm3zNCXxVAdSujbz9aYuePr25znpE6bhwxS87XBS14c8AtnzacmJoofnptBE68Sih9vBnfysJq5f2",
  "key8": "3k8dZsdmhnNPa1ES9KxHB7dCXbKDc2nveoD8eP14kJChDiJGTH3SXcdcS1BCzsUZB2KRxci2Tx73bztPS8YdQd3",
  "key9": "4F3ynEu1gPABwnP2kPeXgBrw5yfY6tqALtCn9HVEh2SHcmhyS4PjZ3HNnN57M4qgiUGbYPcktcB13Uc5yReHdjcX",
  "key10": "43FSbwDCnW1ZJzUak2GLK9TUhgwQ2bkYQJPzPYckntS4VEFx1mUXcGt9w7rq2nuziBpLK1ooS7gsbmbTfZiVewyq",
  "key11": "6WY6za2LNKgvguunXzv86gCqFwzPnpqPKy5ggHDMYStfLnKqzN8YPRqm5fzVMBAMEkUqK2rj3SPY5nsXT11kmCQ",
  "key12": "RjwAATadWqepAxJ1AZxF8BWoDy2vuNn4TRWmK7V5xk9e1mDsGxdMKvYjMJpYybNXrUbP48AUvFzzd1thzN85eRx",
  "key13": "3eh4DyUCyRa6Y5hGoUMtffk3DTDZ8m6ZNuRd9cjtzPrzX5q7GsVK1rsEEiPwXhez2u6wQ2mALkjPwzx1ob6P91Mv",
  "key14": "jwLvzo4czkLxHMFH4yLFZbUPqy3wk6Ea1NFX6zaTc13s6oDgUz5K5LFxP2RyUQQgSanS9EPUJhsgs4mPMAu5kRg",
  "key15": "3GzFNJP9kbcXkrK24PyWwgxRtgonmoPYEyNeBhM7UjMQgPxc8puvqJwM3xs3UmLZza5QJRymemERcMDXe73sZt6s",
  "key16": "3tW2diDNFkEqRC25RdCDwD7C91yZQp1ar9e8hAgsavBDNaio8gbG8AToUm5cmAEMFViKLtWA4Suf7hXG9hi72NuH",
  "key17": "4m25ATJkPetqwTSGkbJ2cs2jPsHpaAQoSm4Foo1BFomzagjtdHFUwaMM8uqHF3A8MDe5AQV1hMozaNki4qfJVNjB",
  "key18": "4u9j21scfZmJBnQV9RmUMr6TiN8dJMZmsYR4YvbcgivW5uTKjxpCbT51bohKdkDABR4YpNnKTrcLxjewo58NZqgm",
  "key19": "5F6M3vaU89eX7pnmumHAchcdJhKDckAHAEC8qHkYDQkRkEWGmqKMN6EX4vAucAGzgspfayKJ7dPjjiH72uNLZpSp",
  "key20": "64DfxRj6oiJjhx7QqGJsNNtDbrufbdKmTwzyp2CeANHy3JW3Z6RwccHgK1UHe5UxJZECe7xAXTXT8DnsYyHjjejg",
  "key21": "DPBNTDAQ49q4VuEvcgud759E4CmUack9Kxt6bTSLt9ajy1J3Pg4vs2NDeT2WPgxentz1LQd8iJCugXmaw3wobn7",
  "key22": "2GBCUUVQMqUtvMaqdFkG9H3224Y2xU1PMEpgVyPLy3A55MnJfZimAg5tyFicTXGdDpeVtoVJdNRjLBEfG2GBh9WX",
  "key23": "2tvFUNowRdQr1cVRimzetEz6nNzC3MohZsYJ97kJnBWhPdzeG3oPvy5qGTiWni2kPa4XXsdjRSv4SUEf5sk638aZ",
  "key24": "5FtFAY1r4gwqesfyDYUNG9LBM77Fg25hNTjmnCRMPWffXcMXS2r73ZXyCDawTkha6XYcXmpW7oKisEx6M2FNujAm",
  "key25": "2xVHrK5aKM3sBceyeLAFfsWZCSSkU7yeDwD5mEEaL6ut41YM13G3nkNWQRSxhuzoJts5GsDB7ytaNGDAQcEGXie1",
  "key26": "ENRXJydGunWgadtmbopmxd193UK8bW7N7m1RpqPDzePcdjzk3rrfKQGh3PututRUopZ13m21yZyqZCkvu7PR4D3",
  "key27": "sAhbe5HhM25dKdeeuzGTch7c1NShCUeMxmfnG8g7V2tryJoAQGb5MHGhNZa33D5fGRQtDycYH9Ugdq9yTtcGoXw",
  "key28": "2iAAw2RdaYNdFoH5EUb9fX4vSUw1XoKpVyXEBtJqAWVMmPmiib28j6C45KdGrwhBpFV8BwK6v9QxKJBp6HwvHHCX",
  "key29": "3uZjbGQJtdRaFUQmHuAGaBYFW76me6EXJDW3b5DnuGrL5naBrSsPxTMKzjSYQitgMLFufzcUKx1kV7W7WXAZjNDk",
  "key30": "4yvVd3XMhwkDKnxXiNncfzDc5j16t2P4NBfwnPbSCAKVNNFjAsi1cTVysvVEs5A38kRZuLmQ9AqJR4f1y83Xroo2",
  "key31": "26XCJtXhitzN6mfEcg9wDraGQDArsfJmus5pwbRvGkbn66VqztU5y5vNUyBqyvxDtDhmAPDrJz5jUXk2FX1qp25T",
  "key32": "5LxsczQ6ZFDjKE8soUnkAKnpPQnqcEhQkqqu7Rndj3gahaAbGCTqsMrsGYt8QBVERbXwi8a3BoYDK8kqKdW1tv9t",
  "key33": "7RTAnxzNE7SLNv9RGaaPLZB1anDoxP9mr2KSFDE3Nipo5Z6wjBHnMgDB4VDdgsFjfrKNx4M2v9an6zXnJRmRsRW",
  "key34": "2g58GbfUcvHrgDw4yYuf7QoaKZT9v7AUX8dGVpdt4Re3eJuAoaeAoseZPoomcsChHaRu6xond33hsTcLiHQtsWf7",
  "key35": "41796czZuhoiSSuVXzcTaj1jWrMMhTL4AV34VRLzEFNLrn1kizBU29cscnYJnBmXPvssNXxFiZnxEmQ5fE4wbWXV",
  "key36": "5ogeQe7wjaWpmoXqffrsUxcYHfaMxyrnDemY6pfErA1sG8LvgUdxVXFTvtWwr4zwDkvtNm9qwz8Y8wv6mb8jPwme",
  "key37": "5gtzdE9r4r8gwgj9XirU3bRJYiqa9gnXtVkQweTXUpriQpeaytH2MngUDZUiMdBPhDSQnqfvRKQQKwFRCWUqY1Gh",
  "key38": "5DFp3a4TQEkwCLepMv4i1EkTsvWjrJxWsynS8SB8uKJwfZwv87qUZdSMENCXyBkjSqLStNzyEd9RphvsWjBKprtu",
  "key39": "2SkmLtYC4V5zfzD2B4HDidnMrpquzG7CCSqQW1AmJW2DT6Ud18sCbKxXsHhiN43d3MWGbqn85mWHpSAgJR1Gnp6S",
  "key40": "21kKuTDFg7qWxhSCywmwoNFBgTL4XnUEkcYDSSZL4Ufrt2sYcyu2EixGd7akYzbXBCes8TPT91Dp21TzFs8VDLuR",
  "key41": "5Z9APyECveY8igJ4kpLqgprphTjZ64iyRGgUSsyDDKP9Jia6UyeJ9iZAiufY2tjwts4tXSoDPMkfVeH1EboZc228",
  "key42": "5ufDg42fxcSamPXwMWZT6CNeZr8sakZMeDMqVULKiDYbnVq7UUULfk8HMjETQvDdxo3UqrPoQztUNRq7hdr5v6HR",
  "key43": "2SiC9VNas43nDzJ2tJAS2NByHSJWa575BxBMzhMuGixdS1LvmR6J96oEP9vLrXuuN9SeBFFmd2GU1uMoY2Vzc27F",
  "key44": "3xvUuHiJVyt1N3jA6Wssrzg1RXL5UhG4ZkRgpy9VR1pk349cHwwi5J7zo9fwHutdLpjTEGn4b49tFLs75g1HjTyc"
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
