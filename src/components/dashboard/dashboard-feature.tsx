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
    "kAQLn66Fjdhsji4K2DXB5cwpn5kSBQHrLWyWcnqJq1S5Dza5xndA1HJoWxVXTcxmATzyMZJyboDKtrVKMQ54E1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsNttT66BJzeMHtiVgu73qVxpkUh4SUWN1gkWMwvkFv86XeZAF944pifAoEj3cpeYDMs4zWkeMC7awoFeEgBRJG",
  "key1": "2RYSCAwxPwJSAAg63A4ePgvbv8FyES9AFU193zXjRmbjHWtGjqa541bfo7Hn9BNVEtmWkzEJMirGGGoWT2uHxPEs",
  "key2": "5BCCDPgoLkUsvwMqthSaWdaZcXNnr7mnoBLJCt55dXn3s6jgq1Y6QMTRMQRi1h3fdP9AoxHWtSYtsVMNksEBgpRk",
  "key3": "2aN93q24THjdMPVL9zn8tsyixabc6pDDjvrF4tqM2VB6FSGS6PDF7SPcAsu2m1odbrJxtS9KNyj1hgJ3mepkwWQK",
  "key4": "3Zpf38TxViA8PmwcmgKibfo6Q7cLyMiVsZRk9NXTVHeLCWxoU8SbK5p648R3nzYGdxUwPJof7xSdndjrzyhgSgwc",
  "key5": "4W21y6FHiaxdXcLtAsT7DrYkC7AXmngexed6iHmof1F2iDmiZ9EUHVmteAbSM6B4FjvPkSX7hAMHe1nDTYsUDe4A",
  "key6": "5LbeRacFweH732vU3CnitxLQyp3EBXs9JX59srqMsBUcm5VKTvrNt8ph5A4d4CxhE1udYCGcsvgLyB8ALwBssfHE",
  "key7": "2WgWtttPqNFfNTiUZayVNmBsMQbFdcFZx6JeYrzUBXwABhzGiPyDtyWV1k66hyNCp87f99KGe7CGZo9HamwEsSfg",
  "key8": "5Xf8tWzcVWSzh2gTDVjgNZGGwQcub1MWtfJamySJrGnK3tmijfuwReCWYJmt6YwkQAnjFwuPQj9YWKMjYugvZHqv",
  "key9": "2Ejts4WZQevRGpJYgC928XsXwjo2o3k2nQgzDSULX9fQjSLDiv6Lo85ThwuX1LNaGEdGuCkNqZyfzJS1tzV3sp34",
  "key10": "Zfgzm5anEBYRKuZfgrhofrLTwChtojQEmf5NGNcwH6S87CcbT7G3H7eamxniwp2M26pLwTSFjfb6j8Ekxfokngw",
  "key11": "2Z961Db4r7LouwnDU11wYWV9SxJEPaXEKffHoaXqPVLa2fqCHUiXrWoy19adGiNbpDkhj4WzQ9TFBcsM53WdwV1A",
  "key12": "FbtpkEMFVMY2QYgjuDx4Cb87KE2wSCd2L7Qk1UGzGH2gW6HSEenfZQeo7Bd64iSbyuK3Qx1t63BHz2RHUt2qLVc",
  "key13": "4Dub2ojzGKFbf1uLXf4nNYMCQuoE5oKGSkjfBBHhozMC5kTmkfuJ4oz5cMcNPGZuxn5weWeCQqmoZW1oTReaoSnH",
  "key14": "2HDY6VWpuZX5CNHqPZDSjZynz6d5f6gmhesPNRWMNpYDZnH3QTbrT4e9M9bqEfg22J3h4SyfupZg3juhKpD38hgd",
  "key15": "4N5kzzfhTqXzzjNNDRoScPNPG2vukZUjEDQjeZsFaP23fNCGyi3ENsBivgmZNL5QH1VJ7sXzeYuzv2T5ucj2NyHw",
  "key16": "4uWctGHkD92aYY7GhteSjjKLUMsYHtdagNHsosSGgSiwQiWdwio4NExoaeyZmRzufRgsYZPSkVDQ3Pft7SLDqWTS",
  "key17": "KGzpQcderYQbFVnk2AmbBWrUvCACTD6pLwgUa2cF7eRkTmGGFF1U8PWW5SAJv8SWEZKt1eKX5AmXyxECEAnUWmJ",
  "key18": "65PgAwFwbmWjSwqmY1jzRhXdMNTzayca5R6GXLXqM9VpESTBEeH1Yuri19YRQE6CfuYqnHXFGvFD1oXcPFPddsRR",
  "key19": "4Wjn1oZ8ktwRAo93HnWoN65kzZNNJPreLzSxoE466KqnWjatAxuRGXvXQDi9Ww3aTyt5nqjdjXyok2xqFNS9RnJR",
  "key20": "4ESSQMuvVkz8psjn9DpUGQwRGV953qoVugbnYYt3fQdUcinZ5eUy5rTjGiAZNcoskHixiUgTKQJJ1DhL1g62pA1k",
  "key21": "5TNZfqL4berYkZyTJEv9cKrFLHJ8qC9MaPaxKEeessqmQpxd24MUtQxo8ZuuM9Um8PHTFBniGQToSBfNLhw68NiX",
  "key22": "Ub6sWq4VVwtvh8837rtGZbJRew35bE6Waao645QJ8z46Yfucx48ZxwFiDjKbcXmHcjHecbQSv4BMjjRFD5zc8X1",
  "key23": "4nJa6zpTNZVKQmdq5spsq3z3csdH2GUNzcmHRS5fPshfZzH8vbRtSRPWd9iip1f3Sbk9dQWbh4reB5FgW5uq3ydB",
  "key24": "ufykm8hbnxbKt8CssCFE9mY7TEJUDeiGvBADMQaRjcSJBxZWfzzbAaYsodfGGPy4niTjqNCVmWq5hAVhdYjENud",
  "key25": "58bjEsga5BNN4Ma5EBoPtkE3Rt2582VTtBkkqDjQVzAKkPUzpPpmTHXb45KpspNN7NST4r13ALBKDB3J35a6Taom",
  "key26": "Ta6Q8w3RLHVmQL6R1sV3oFnKB8mrgQf438EikXJDdmDfK342wzi5RftaiUL1SLRJ5EdtDS1auBWWRcXNVttFega",
  "key27": "5sRcUSuaW7PctXZvywUd5myy8DopKm3bjgdzrXUiv9RYNyMpHYaNirCR8UgsHNnNMaMoZ2u1gZzpU2bNVyfqHnsE",
  "key28": "3F3NrJefNEnTc9cBGvfo4BxfvsywsoT8x5fwSzYozAb5TpPqmgFJpkVWEBfkPsK7eGL6wqRyfeEooU2XnSCeqRqQ",
  "key29": "2Zd5r1sT2VRgX1spYq1sASc3V4x4g5XBHu3V8A8daSh9JsVyrs8zSXWQa1c7ZZM1gnmvHfBbX6giMDHV2b5LgPYG",
  "key30": "3Wvbqq6pY8uoPT9zytajkzkUqpMUQr657pvb7TYVx6LG13Xn1Zbvynf3TZg6Hs2cEN2xhZ6eYiTcZQ5BgmUTRVou",
  "key31": "3dbr5GjcV3nGh6oh9aN17jCrprDYBLomLznh61CWbtDmCMEtKGbJsshe6zR6D34PLcGvohSwzfR1Nj57r3R8A96Z",
  "key32": "5Seg5tFFnEWS4KRByzFyAu8Bz76D7JwjqmRbg3z5cfNzcdcvXw9rJu6mzeppfM2A94a6BBk9Vhoqwaqm1zkcAJFx",
  "key33": "3rCKkonHwynjUJ1SQhgECjBwnwYNQrp4igQDM62Cig9TjAUBJ5FFQPHEeyBWURSVVizkSca8Ki4ASRXLbTcXVurp",
  "key34": "8r1TWc8u6pt1G3GwuEeYbBRnZ68sX772kecgadNmmQPTaRzwpXTrTjUUNLCwWf7Ti24qBDvF1susCUMtDg2J2kV",
  "key35": "ZgeLxNJcenb4s5GAyBFYpVBWSWRXZ8DQ1x6L1NLW6NY9g3kQjpe9ecb1WMYWfoHPLgmtZUMUtKKsXdJiFjCNBew",
  "key36": "5ZQJUSYvp9CQ8ooPtU31T9k58SZVTjwPJP9JmTbG4Qsi9auPThHCXWHWqVPtrzhuHdrsAVghud8mBmgQxWzLG8wR",
  "key37": "2ux6eS9jsYW2kD5rfy2u16RkcnSpXb3NNcgfm6Hn6pmWHFjSwNQbdXuJr1DvPHw2tK3shp65mumtVA9e9k3PtW2P",
  "key38": "yfSx4hKCpnNxjYCwFXWYewnQVouCQVub9DUhkubaxHHSPPVLXYVsoJWG1hgdFooiVBss8GhPgXctjw1EFFGjdiQ",
  "key39": "GEULGD58NCrrpn2uwwR8zPsnJgJivmLEfuAJggJoBgnsP1eKUexE5vEXDyaFLCvUB6U7sG3WqysQhff8rWty6qT",
  "key40": "4kZtqLBGg6h1LHe14PaLK6Hou2LDhmpHNJv4jVdsioLXdpa5KrPJ13uug63aJnv6kdhkjTHhdk4FgRE4UxzCjkXu",
  "key41": "UPYWXYBGxspFegVbBiMQkQjUEifpyr3ASntCEmPJNCvQ83nJkjPAb8kYVULWDn7WhdQijjzwnFg7aWwdEz9bEdF",
  "key42": "2KwHLAmCdmgjknpHrjVtYmAMThmMjjtapa32HL9cJynvHpyiPkuFz14ikKDpN1KZT7if2QJKVmoF2yRYnoWnG7Dk",
  "key43": "3XYW77NxA7yVvgcmokgNS3NBGVHeHkvD5aEP3c1GUJiFB39djNxX6oaw8Hjxp3wCrEANDH5evbTWGYUVjpjiEk5o",
  "key44": "3AKAFwBG7TiwuGvfMpJEuWLfUK4BJE7bsFdop7739FPLFahRiG6m3LZWXKHMCcPnZn7cjVRCy1pGideNdihLCsDV",
  "key45": "2LiTjKr9ju8cJewjWzHqyGEDSEtz3GSLfkZykEe6dWnHmT63BaJrpvRCzDrjHs7G3e3Q94Pq9vA4pxbRam98UZCV",
  "key46": "3Tz6Yi7g9X1dLY6ia9ccXaEP6RhdrSYkVbtb7YycBefjtbCMtQWVA1pTteHdMiAevYaH28xAkChbWzS56xMG5kKA",
  "key47": "5mCVPnbZ72zzYiKbnXs4JiVvv2tJAfJKWitS83gLKc1963FJd3xcstPtsXzM2XwWDfZQttxbxiieUeNzCS9goERX"
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
