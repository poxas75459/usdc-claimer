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
    "Uv45tc13deXevVSk52aUK4uXjGRtcv1SzgmtYcVyEcG2dUwzWYCVr4pguPsVBgGDbff7d6euLcE1MM3x431zM7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqJPPMPNT8SRCgdqtVUEJRcYVjCEs8QncCaxpYfVhQZZxUiMFvxxTpsNJ5EBaaeMXyEr3DXfCXBJSEsur4CXsJJ",
  "key1": "56nkeGPrp1VrG11ChdL1HBNTTUprbTT6UD3tSs29X8A8Pwi51GPy7LsPZL82c6JNo6mw8meykRMjTvDgBoW9fcyW",
  "key2": "2Kk3k56rWyKDkCoRJBughsuitH2TgVNHax4bEMzJkkkpN8kR7AKaEoRwmUDZHmjQUrAxxgJy7cHz6Utn4rV6m9tz",
  "key3": "4YRsnJzNB2SqjxRN85mUgSAePx2PjNVhDZrPJWCoMAfz9sRWQk6SnCPEbn2T2atXj6ADuknJi7ZCm1PAmHpXbtBJ",
  "key4": "2sVf3fSnrriEpENW7u5jsRx4qjMHzXDbPse78wkcPprv9EYX3hMS9x3b77qZCyzXaXU558y2AJo7H8WTsDJ5v1mm",
  "key5": "359QCHZSMpnyRmvNmeQ4wrZ5epd862ZztERH2wRsNsuEBFhVaHJt9BEgjMpji8qz14Dt9mT49P5e6aTk8vPQvyu1",
  "key6": "4UjxEGViCnY6xSboFZbLuTdoDDybprXKCjWapQWu9fXdXpvRRbFUiy71KNxuqRBJJ14aT6nQBS75K9Q3YipgqPmz",
  "key7": "7smmUFs6y8UoQW6VGwaH3GUzY43Ruop1MTEPFCgwmybxyr8CGSQyzw9LxnHLnbNwsR1FxSdpTHvG5P7FwgP4mQY",
  "key8": "2njwH78UU6agnUJXQRJ4veWJHae3WbFGrnUQHZRV8bnNocidpohMmr5ZgbeBxruRSYYAzb2wPeRGBJ3PBteTMzJm",
  "key9": "2AogKJPL8NZPsdCyvQXYB25QX68tbjGDrNpodghJRkAJPh8r4g8FrE1BYi5hxN1m9PcNKGiKgxpEVE58LAuvsCH6",
  "key10": "4L3buwMR6jbL3UCXWe2Wvnn7A9azLqxAREdYfScinoQmdmRJATQWErAuHnSNus6Js6o8VFPL1BLprKjZ4xMve9pS",
  "key11": "3zGbMuxcB2L1C7HJwK1jev7SUEXDo49BCdYMtfjnyymLAzB868g5EPYmrgTLUGjzaXtET6hvhHFgRoCUSLVdfYFE",
  "key12": "3GwuJApgbma3Zx9ZN2DUYPMPTdYb1NJrvQS9gUheegvFRUQJFNWTePFpqRCsVLZ4SyM25XnLzyD2Qa1XWx7rVwoK",
  "key13": "3EHGQU4mMHhZavwufPiqJxkKvTPEJ14WGxpQrHQYKfnZhGTNsQNNg4DTua5zPNCSYSUiykFbzNuZhEv11N6PsqSG",
  "key14": "58LvuiQDNUFjfq1FARdLds3R7jurF18ttPtPMadJz8rWdmWs94QpE3okTkUR1tJZNFQ1QbTq4BDf7Qf32wd7VY45",
  "key15": "3u9FVjDsQgSssUCUgBiFpXWpeTpm1R6oiiTa5BcWZJRiQKcSUiBKqLiK3m8QdvZmRwf75QPTDR7njjrQPiN5sTT9",
  "key16": "2644ZHVXcFegm4qEEgRxrKfSAiD1vPPuDMKwgdM4m55enX4zdDojZ4QFfE7BrmA5mp7HYFAeyLSA8xmAE1Np1KvU",
  "key17": "Gjkj5MrfpzdZsceauLXFChmThkG9q6DJvLNA9XqLqpZW48NZmyrnGNMe59Ndefcs45tPgVGwdmeXP8UWuZiyLvC",
  "key18": "63jH46aHKpjx3hTTjREKMzcWzRdFtbJYoBKD1rd2NfF5srfcnr3srqdUR8KdRUX8xjvx3F7hkETxmKwTVvg3EKvp",
  "key19": "qCoK1iE7xHwPK99RNTfy6pekTHfAtgSLpfkNat23r7HvDaqqVXmXhxLFaXYZmqKcEjvqa2vjaG2JnJnrahBoh8L",
  "key20": "4CL4qG7yowsXDNPq8xb339TgHMGGzz4MYTPSMyBrgwoioMw4kmuKDd3yL92D3jVCJE7wWTJALKmkfBJNkBYjAGdL",
  "key21": "4cZEjJFDW9h6P59LNQ3Buu9fbCKuv2vPBrYHCUVbV6MjpKyD3mikvxDx9ZSHzEZBPeQ43vpPE6YPzQMXqPpZQNJg",
  "key22": "2TyJE5qfjX8BJ3yWmbGZuk7PHgP7aQKj13DegD6KdHtVzYdFQg8e2iHVQLXkLnTDXYpNrBFZvMMEp5JChCxVDoKZ",
  "key23": "AesuGbThkuDFqamUN1C5phBgoDqR9NKZxDwAsaSWnGn63NrYo2sTqJx1Xg9xcW6KZ13LrfXF8psFjcjzX5a4hJa",
  "key24": "3aABT7Am71NvCXzDyKjDomSmfGvdgEnp5hXjMVqghxdxBcjLVwkU6BgAjyW52sSLeztpn3Y5GFJnJbW5Da6eba3k",
  "key25": "2DBqgeCXyw6fLF64tH1EkQ5gEwYsF6rn2SQpEFAD5EaFJbzb4v7ukduWC6m4ep65vyHafhf4HjUMyHrXzKzPDdYs",
  "key26": "3i97k8h3P3Ss6qUtHecBuk9P51koQDbJ4AdSi6MkhDzonfEe63paw8QnNWmBY668Tm2AiBDRkAJmLdxYutQsH7GB",
  "key27": "4u4LgAoqYniuuPH9MWm9XFpTLQ3HjNDG76T1UvNTk9Uoj99MLEZWAS5gcDtqa1ZereVmnzikXaude3raXqSYDpzb",
  "key28": "u44qPnfachLXrgqoMxyQQ8WtpgrbBi7c9VmKQgGgAf2n62fdVnToNomJMP6FVp2ziuLmeNPqrYbX2LnDqtmS1V9",
  "key29": "3tsmXN1Byt4CNpkvZ68z3ckpPqQNgp87CurvDmP1wkHzTePAMv6xtEx3WA5Vj31y1FiQERpREeATQPYYPNXQaVSE",
  "key30": "5SogjQj4aV6pM2NXMk64kDh4RxJ4FiKjNy6yndvXc9v8kX5cYbbqBoRJvUjBbnqXt5hKgJRBnzLzb9yNjt6vtFmT",
  "key31": "4vgKAzcqnUSdYnKpZPyivsq6SSmQzwdAENmwDNetjsCLmzQf4mrXnsr8ayuV4ETLtrLce44fpNEYbym8J4z4VZww",
  "key32": "3L7zfFud5gXqzMfm6MFadnFNQ71eWphHJFNRahhY82kZNgFyzf1BXFL13bDmGNF4ghghTHSGkpGL1KMAf4EykJcP",
  "key33": "5SHVwBPtSfgLcXPvNYM1oTDebx5pZhp8919iHjwkPMeyx5b3Lhmy8FBBwPfqAmr2kW5Zn66jB1tBs85bazuqWXv5",
  "key34": "5UynytEKwKt62cxqetJzVL4fEwqxsoMQqMFzX5z2rCTyWe98FHS3AQXdqwqbeTmSKgVUkJ3grsYVtgJ7XmgJ1tnE",
  "key35": "4D4WVma6qAE5Fzhy6FRrdJGuDiTEfgUDp6eN1MYsagHKLzEMDfzZwWgBGr94PxBy5kcghKK8hzb27hJHDKyBKoDb",
  "key36": "53gsv4eR2R2kHKycL5jcaoQvNEbCUTgfsohyUb6tg5KTqML6B6a1FyRXj27Himud9oHLAHzbhdAc3C1s68y7d1VM",
  "key37": "5ESVnjn3TfZgamKLmvLVwpMqNZz6p9MEYVigEcEcoWLeMgdvZ26xyJDm3zNp4c3L4pjP8HJVG8Ue2P8SfHTzjPa2",
  "key38": "45WBFqR5pBaoZghPdAo9btAvBhF8FX63j1dXtUzWCmg3jc51w9vcRVN2EHF78MT7nkaTZPbHHaJGetVSrumcowh2",
  "key39": "2AmsGFaqFGShmigZwwNCUigf5yzv8Ah1GzPAVEW1pkZKdey6ciXiDUEoEDm2waQmUvnVWJWamu7qDsUBNcT9SykK",
  "key40": "3SamwafZqMg96vAfrMZmATXa7YCT7qr1kx2nSY79pAwSPAz34o7U7PMi3TM5FQfhzchwXMosamKvGie4CN67PRfM"
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
