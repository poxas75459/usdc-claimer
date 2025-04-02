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
    "kUaJcxsPf8pdnPGaei8UWdnDky9ysDrF1e6jzwbubwZjXM4miuMRecztjyKbm1EsBovyZeCeSYZmhChjHidEJbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aaMPxrzdZ85qgaSuoub6fSMyMjyTc2uS4NE2dbD85sabwRt3o4H98hRnssXGSFUPvcMrahYaDuvgNHY1FgJTmzp",
  "key1": "3FJhrrWCZy7if967PAWL8pgcj1b9xWQiWhGR9whBQrd5pmrpMxMFupzfDeUCSDyydXfQa3XhrAj7Xw1g7SPQnMUs",
  "key2": "hfzGuoKgbDV8eeP3Gx7XThQcmuXVUmZVhB41fLepEnFfP4qihpUhqsu2souabb3uLqtu6xn46VoJTZnCKXmsWW5",
  "key3": "VpuoL26xsNrzLJoc1tjXzrSmFDoswyPhgdPmgZthKZ8HAtMoGJkWV9EgBXgcsCLAwTtLWJRWQL7RtM7L1QRJyyA",
  "key4": "55iygiLbbRnUjtdmzLtY4iR1PTPPAMueMnZmX9AVAc7v2b8KrqkPrAwHmb7QgZQ9uvzfdnuqHE1R7oEsk6b2tFHE",
  "key5": "2p5TqUkb2ohKYcTQcoemTMqnaEay9YAzQmtBAD6gGUxw2Ko3EEQsMvRb6ypSYc9SZdtjsVDXK1mgmDWN7odtneBE",
  "key6": "5e44Ge6Ce8HjYH4Td5thFDsDJKZNfnhYo5FUtEenau5nzLXchZd4NKm76fX6eSfF9SDcwfVWzT9dcRjxUsHXkYDg",
  "key7": "2BwsKAhfe4xzCUB7etuQAZ3RqbyNAeQ95mrKwkanrzNrTABk4MK5ERaJJGTV531YNXcryjiZaf9RCsFSAyW2dK5x",
  "key8": "2kQZaRkt22vKuFVxQ88Y76ok8jVNcbf12QHjsaxJC2jd3F4DbS5TgTwgkQbdKq8GUukqeZxRkDzFtAftDMijwTPT",
  "key9": "32B6Ui1vYKFMNGRoeQVJnpu2jsePob9LnHDidoNF71H2SUAZY42VSgKpr4iFsn9KE5WcBF5vL1iJLw8yWXQWAMBk",
  "key10": "2mdwSGqDuNvdQ24gPtvHMUcf8M4agm6ELAdKeV2WtvQpUY6DbUYEh9L3gr3fTTKxQHDTnNHZeWCgwkx6gcPXxTK8",
  "key11": "4XPwyT7fh444e18VjaTfS5pyounStRiN2d6oNyZW3YT1Ufi1zwFnHcmabtrSNg5qhvTNwdWhLouV6h2SJVuQPxtC",
  "key12": "5CJGChdBbZABHrxwy421i481ysJXdTiGUu3r58mibYemgcgxxUzrLiT4uKRree4bixHCJaXU15qjYYdtHWRpZWUF",
  "key13": "4YW8v6dJkRijVzoUcmEHhPYKZWRvqVXSwePYnTXcY4Vi16jqPjqXZCsNCYA6W4qtVK4XgEatBc6SgjsEPQpSnPca",
  "key14": "g8qVQ56ZfcvHnbX6QwofC6h3aEP5jWnL6Z31SruNHsvygm53LvABMzghrrVjsafmrsxTvtqdbQ23VhcmQC4V1kT",
  "key15": "52qoNpRM3ZwLDLrdUMUmFwpwc3BxVRKzFMDw71MP7MECz8sBDtqcQzFTR7N9rDJN2sbaC2MDWag5GBp62GqEGnf1",
  "key16": "LwK99jm6UEZ4BemRqpAn7qSzZRtGS4KiaGDERPYSd3HhfFmb44277wyf6gDxMUyXqDZhKVKSUXjidrcBVyPbntU",
  "key17": "2abhbVnt3ErYLcEy5SHPus6yhTyfQcD99uZ4KotQtFETsWfWG79L5Yfv4QCYHVVmKTQKAvfu9Tj2pmQZw8yaS6rS",
  "key18": "5yL1VMru3B4Z6uVb9BNBivDDZZ5J87rXHXM12JeH9nqgZcKzMjzwxgEjRvSr86LBLpZnrDKteCtBziiLrUGhkvh5",
  "key19": "3HiKYQMbSPJ2cTKxNLL34Ja9C6PhZt9u9ZWEs9QY2nvXEeb1ZaB8BEUNHWsSdpWnttJD3EUJA4aUNJPcYjqzpxXB",
  "key20": "4WNanbSTkXZXa4wLAmejs4MVdPD1Vxsiz3Jzb9CotDLpMpchcDnvFbYhWv31KdZvpZteoqTb3YkCPkqwxjRhpyzL",
  "key21": "3Zhxxxx8RQXnQNb8JJELEk3D4XnBoKJYt7PDu343gaTVESMGpQiLaxpuEdM8wRvCh3Z1jrhaVVFfTqXjMDkd6VDJ",
  "key22": "2mN6A7V8niYEkC6EkmLvZSXmTHuGmhHXHb39TU4GyerBwk6EhYZr8ns5B8FFHBBampu1k46b9wvVVrXQpMS8Vi5x",
  "key23": "3BgZurNivbtWQMAEhMT27Gytva5PtLMnkMFF1XgpQeUxRGXHwezPasPtkiYZvBJJPzSXdNj2cx43Mf7Xmv81kcvX",
  "key24": "4opPvs2PWkrMwgV5AmHuV29aScRDENVLdBrxewkYTFtMqMN4G9hEhemSZy2LBz7g93Diz4osjEbPWFxA2tvtNcdy",
  "key25": "3UfgbfkkforvGsDXHMbvEv5Jd4diRwRfbF7BvhyQmkbzeQ2HoZVNe6WGMBmJtmLWeCv3PA9JeMoJFFPiLcTVjsTA",
  "key26": "kRLuxLnxAKbFKSmJ2b3siCYU2kjwBbTGb56mkJPUeK2vxYhNFBUG3wAC7CY2EXea6rQiUCznWp292Z72hTVdNHG",
  "key27": "5eiZ21X1bfJzcYwFygvTKu983qEa88zcdcCLERYn7H9qbHsD9wVmiNW8PdnL195rAS6PE6u2JnirsYqP6h2EXodj",
  "key28": "h4Ug23Hz7yP7xHiYjveaVnLYnYvv2v5fGCNooT4swDi3oTwz2RvjRmhypkcAJu7E2u7hbhNTNH8qDDJLt4g3yGS",
  "key29": "2xiCWC2gV7hqyTQ8NwW9bTzfpYQMYxJbfjwJbozcxPaKadxqPy3ynaPWz1ArKZSgXBdcSqTiiwNWPJnt3YGZrC4z",
  "key30": "2tAhSuB7JeG3SuephUcAWJs3dGE24qikbZRrBteEv9y7qo4H9fHNodesULWC2mstmdkHHKtEjebAeDkp8d1iakzc",
  "key31": "4gFePrz9tAALGvfkpyEv5HG2TjxtbCiokRj5TJEtAVoZzirtdwWVCHQXHCG6LS5zb6gM4pxsQeMv9SZ1eTuYHyCk",
  "key32": "2NTrjNpSyLmk51MCt8ihipnyzhRkox5FbtGETTEUaudS5osKToHXTsCXTj8HA7hczWL1kQwamqTX5pt9aFGKaCvD",
  "key33": "3gAxTCLVP8vT8e3fRxHHavFFBq2H95ffpsTpcQseyQezTVGQryJy4ieH8LU5pZtRyWJhRUm7bLZpL5tL9jsKEMK",
  "key34": "29sqk1qEb7AKSD64yKkZYkq3cfBPhqjCJBKAp4UBx4ZeP8LVqVk1CohmRSXWss578RB5cczLWpSZySUj4jAD2jA2",
  "key35": "2Wn4TZBCfbky7CtEVvijLZAaAAFTkJKoxPpVZNpNyy9tYRb4zQ6ZKn68pHN8SW8xqfKLS1J3kg36KaKU76ryoHVC",
  "key36": "3C7edz4g1MSu8wFht66zv73VHcMchbHHRC4YGbvVKQ8sG45xSVs3EGVmxyBfVywh3NpqeEbGT4Ji3u617x8KpF25",
  "key37": "2pD61hJr3DYyK347o937uyHJyu6uWFzLfjkQBtQnGh2BRgBBNu1Y1GjHPkW3JAq2SRYnqtSmZm7yhh9jcD6CE9Ty",
  "key38": "2PDuM4z135f8eLSuZLauXfacaf3pxFhoz8Ysr4jtAHemgK7qS5CPjYu34EFiMmfTq3k8h9vmqUAJfv8YavfEmCbr",
  "key39": "4cKEUaBaqZuWJEseqcrsFTYC6JSzU2d84H5sgZztc11GyX6ayYez7vPmNxyJBG3JzRdq683qHMMb22P7y2hgD996",
  "key40": "2UUpFfoc2APDbKdsHxXuaridhucp7sozQYARWMgqmrQLQZsV5Yta8FYVkro5UDPfaYrcXZTCd6afwXszio8SHgTc",
  "key41": "2izVG9Q1A3uDpfopFbN6FZM9cN9f5DP7J3f3dYAjne87SVNz1XwKy9eZ5isFTMcxtKvScGrH4WxumejZSiBAnEf1",
  "key42": "R3YvvzWeact6ayuTbVP4Uy9wvnXNSjSy4QiAKB4y3djG7prArzznEAZZT2gj98ESwTgGggr3bnqWPGvgLnxJjgb"
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
