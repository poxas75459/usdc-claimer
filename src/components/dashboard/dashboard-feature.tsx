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
    "4xYWGmpTuD1VjeE6iiFf3GW4XaNqcvndSsZCrkLvQ5UFsfbRMr1gRWHZyJSK85CtfoFVUczE8wgsZqtjjC1BiaY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhGtajswNsyv7g8fxiztR8kdDCV23AcvYKP9euFekNK7BbuSZhu1Ay5tjAfiADdBm5DnxTUXkzfKVT6Vg9ueK56",
  "key1": "4FcXLzBVHiBPm4qKW3v7Eww6PWC7Cqzd2ZXtfLT3FZ6udGf2adhshd4TdhMnzDKRqauX8ect3Qr8LyuLqSE7Vfy5",
  "key2": "5YZPWASS7Z9WiBWaTWALYuonrmVEJ4kfinPkxDZPPKFvdyw4zMT4gtMAKHXFhuAGRUq8dkGqZkSg7gVXjcsNT6oA",
  "key3": "66m3ikyek32xCHemq3duSZ6ktgcx5HZD35igfdkxL4ZvK8b1HRR9yhybmgeUsxvMgs2yDG9yHdavDvaAdPoMSsTE",
  "key4": "2oJBV8N2jE1YYVv8kMrTd3A8NnPva2tjwByfnPdwRLRZnXroUWeusmKAcKe329EnjVogCFsdF5CgDYgt9Uckch9R",
  "key5": "2hihtq6LdNYNz5q2r99ALeEYR69WzGZ4DmuUAKzQC1wqFbtpQxQWp5wsPApBSpVCRxYtKfSPe8iiowsaWXmepCJv",
  "key6": "VKJo9Bhbr8qJwyVfHPUXNALbCo54ADUxpaSjwpoL5NoYJodfCE79mGVC81AuTHtCNJaapnUpgi4NWHACkGPDBUk",
  "key7": "5oDyjnAHviuem9ENE4tfuYFbAPmAP4tNWm7Q8ZHRfiBKgVQZjv44kDuQA7ohH58PTD75VFe3AGZpejTJ2aR4cDaW",
  "key8": "5JEZ11q2Y7MijyT8nK3VKhX4pjp5QbZz3t3gq5w5piw45FyA2Xc65cxnuHqeXbmhGh1oU7Tg13EwX7BGgNGuFevb",
  "key9": "3wTuWn6VYLSryJQTLDk1b8x9BGMnxvRSv5gjPqTuPn5U3nUHu1VLtQtbyHEXik2SxCmtsraTF4g8VFPkcbcUWHaH",
  "key10": "38x5fCgMG26hx354nmkqZzLMMa2m483Wb8rGDQiN7PHZeh5Nq4WeUqPKK2TguEY95chdpAF8vQF1d3Hp4WsUecsV",
  "key11": "4tX3SNZ5CSd8LjEvhAv2Razpee33Ea1zhf5A4vxdAiygNuhcHm6rXzZtDAdnVM6QcAHbBF8emiFxZUmdTn8HNGcP",
  "key12": "3SefdpwQ3ZA6ocy614NSwmeBVf5JAu7fK5TkNDRdmKVwLaX9f9d4eRTaXfsMZCtKNKX8xggM1oRPjDGbTWhCDNpr",
  "key13": "3pDu3ePSBsNW9bLGNarL4BdE6Jwzd7DrXFh4jiKjDx4uX2kZQf1nup6rsexJEbKmNtovSwtTdcqwWKp4Pdm4xSdj",
  "key14": "5gGuiiWwo9ig1rmYttgkqgjUCcB1N1J3bysbNDCCbxtsLjteAZZhPU5fTXZFKovdRgqJo9P6Rru1gQydsZQ9GSJE",
  "key15": "4KZQ665v5yssYekYVpUow4fKSUujUTzo55KBs17qZwm9NXgCJBf7JBuivuW8G9FfsADgd6tjo1ctNWyxXJYarfPu",
  "key16": "3TG2jqAJB6RXDQh6fQ739zCQUTHVdirxcwwvZLxUUt8WtHCCoM5acPaufBYDMSaWqnn4E7jJWc5wnVBK6ZRZBh4Z",
  "key17": "3QBCAFpTxcDX2zgXwDV8NEo6oz56Q2BN1RF4mbazy9EzAFhxRaYgTuxWRVw1M9isP7sjABmNcRAUxmF6a3csnL6u",
  "key18": "5XaxizGPkKvgsvP5ZjP1KAkJFkNZU498wjHZLPMAbTGJNTTwzsjW1jud6agviNfPXeScY66zhzFq53CKjxCVz7AF",
  "key19": "5vm5VM9CcrFnEUs9Mz3mE28z7q38DrKzRaqUaEwXF4yrQYHwPU6whJzjwsieuXAEFNxDJaksBk8WQhsrxvBMnfkM",
  "key20": "2DgEvp6k311LqrYmBNNgZQHEorXGVaxA67E9txovBokcxJCxATwqUbb32paB6sCuT4w68FkvptfrnVCUbX6cFiFC",
  "key21": "AzgJifSpvzMc7XsRUWqbBQnuA6C67TgJ9cUhYfiLeGCwTUuWZ4HzKm7SWaCdu7Ha29BJ9MzkLEZ554cMYhsAtS9",
  "key22": "3xnsrtwno4NH6Ma2dq4EQmjWqZZANC5CtwERx4kPmebPnFUrujqqRCCM2Fgp312yJP5CTYu9AFvwHsNaDiYfC1gs",
  "key23": "3ExMZ2eAwugRGLEkUENXMjQybaNixkr1oFcoLNbfwMzcitF9E7tQ2ZUojtvBg1FoQ1aq1buTwuqYUq8pTshcW5mP",
  "key24": "33tnKLkZwbf9e5kKeCmVXAjvawuPJoPnoh48dbDM96Gnp671CtVEBNCcbPNCBUVPKeXkM12JTZusVbou6WHFGBEM",
  "key25": "5iguLcNHf2672cBnx9HCEqPawhhjzcnLKJ4mHw7YecSszZwKanSSBU4UnZK3mVHXa3b5rLMDPSPcDaPrGTfxmhcV",
  "key26": "3TFRnSTRLqAp6bVAfioEU1cxchEvkS2o63jaZimD71sSrFPd9ZiJLMYsZMrMw4mtzFxop3RTFoFBVsFdvtjg2yUi",
  "key27": "4yJicH7WbqbDoKbjC8udQWALGaNAHYEWYqLGUQ4Fr8u1Pbp3Z2Dw2JTrtUGUkrh9LYthPwSEcaP2mmxyof5ayYz9",
  "key28": "2Mn3dPCieBeJBh8sXvTBTUiCVbvVE8SjuEo6fDfTom4v5enLWT1iggMtBEPtj8BPCmYcXQuXu1xuyiQDybk2fTi3",
  "key29": "5fMjAuscj8TJTHxEax7hPzp5F2NNSQ78MGnfGJauUBJ3otE17NdCDNwzmyTaYF8ALXBjNKPuu4pQXTudEB3b3e5z",
  "key30": "3799yXeRJw6oBMv7wWCQQnpgbHwMginuovqvQLPjHVyB2cHvcY5L1pAopb6kWyNvrmbrt476xqUEpmn1TVsWMn2r",
  "key31": "2FARtmu4RAfiXmCv5fEUDi51p5Rx26bP3NT3oZhXPWXXBwoqtgj1W8zyc4KQANZDG4NGy2RB1MjnEe5Fh38eh4DW",
  "key32": "51emqZSCKRzA9oe2zK1xpe1E6sV4p6CuMpQaxbhsJSxL2ycbHguZiyQGivdWM4rVZVJU1n9vKYnVuFbDKsYcsWQ8",
  "key33": "2UnF1vpsVJhPJ57U74zSKcF6SUAe24t6Z3zMTc3WkH71o1pSoJmjy9AVYFgfuP66SH8zisXmAJPfjjj3H4paUNT7",
  "key34": "27yqHkXR6L4d8LDPaXBAHEZix5cgWuvTvYhmuz7cGdUzbt6qVduV8GeZVECum91XRDuytLpYjv6RNLrLJ4boumoa",
  "key35": "3dQNb87QcTPamDLKiUobp3n9u1taKozn9A8mJvqg7Hg2K4xo6ArLypJGj9XjG21gffadFZCRvgAKJMvyrqhSBJk5",
  "key36": "tZdvurVLC9iyKuvBuuouLBLqopWJzAU1eoMyS6Dgv9HVtSL1SNYfi7i4LBFpQ88vwEK8rXYS4Uj2QaA1TAHvP39",
  "key37": "41eswZR8Nbb8YixjuSDFXmSTGSUgUmDY8RZQRBK1wgk5YqCjmUMMNgRVKs8BjLgECz57UioWecfBR9DrUpMEK237",
  "key38": "3xe9eN1LPt3zdwHXibLaEPBraz3wqAkTaZ6G1fmSjmeb2meQC2ZxBsTerLeUZQvr6V52ZepvVCW8xDhCyY9Zc7F6",
  "key39": "2pfGNt681i1Z4nyHqManx5D8ckph7GyzNFpEp3Z1EXuQwaVSyyWRCugzA3FXP2G3DBNsQEaok1mQzfuczTsNeYcP",
  "key40": "gcQY4UxGFZDxgkPrZJAf8QLYPLWMxmjfsoDysJxPGEwhpAkKeNuTpQFXJzGCZ6i1nFqAuDPB6jZ3R63rp8JKw1i",
  "key41": "3HYy6nMijMHhu5HGEfdUzo48fN8jQQ2ACuaD7Nti54DVWrLCsFfy58Q91dRoAjZ43pdg1V7X8BbCVXDvUWywiUPE",
  "key42": "5KzguHeR65Kpi2ZU6unFuSLu1hpnVzqCRgzTQ4xmpS4UHeRGzJQFYyqz12bgCiRupXehTGAHJCzBix8VkcceQ1gw",
  "key43": "5wNmj9aT37iiYoC6anx2wkoYLMVqeH7r9KhzhAtzh84aqua4Bm5BmAn3tjr3qGKoYARCtEsu7drvhwSZiGTF8UW4",
  "key44": "583bksjA87TexLNewu1ksHdQ6wwLnr59ccxUXRzGobLafmqWUYbpGhpSeZ4qCid9KBQZwKJSnsZmrcrNSHtf4zQa",
  "key45": "pKqt1AqJAUg8GBtNp5qsdenitNEPGSQELCcnnyKvMD9DuapeHLNbFxmKNj9hJXsNcGCQE2nah2v6eu2oRLtb81p",
  "key46": "apawGSehLHEMA5H2Xv3eQiHjMGYMfXxvfcaRur9phABTXQxaZvAbGTec849LsjxsXX4zamSoLtd9qajatbRbxoU",
  "key47": "5k5M9boYWut7gVRDAa1xBt2nB5oWit6uJttAaLzCHtVhMMnCHnHCHAFxtdgKBmSHAJREyjDoHRFFGUGoU923B77t"
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
