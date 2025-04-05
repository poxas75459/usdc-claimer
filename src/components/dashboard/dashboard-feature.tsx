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
    "2YKcVVEYJ8rCWG8WdPbZMNxVkySP2ufupjHCwDY8b7bpuuYBiDzCAHyEriKVybC5opRh9ScrTLUrGWZZsPws9yP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6hf7wdFcmKJPipQfMSGQzWfScAGGUw4PY6iDqLiRAnmyhtrCeZuB9dRCA86t9h9qFqr9k6aE7Wg7wsUzgmVi6R",
  "key1": "5sCTHcy2DsXgEnyiscJbLTn3KeUSsuENrQqZrsbZioYwamhQCcsPrFu3P6xj4tYBeXp9JaDsaiNAbuaamyKr3xM6",
  "key2": "2ZHcpsf5U7ZxFtfBVe5iNj1RhgYgxy27W3BDcBKwa4ty5MhyxpWZCiNp7jKQDN4a6RhML47mjrcWDjxBuow3YYU6",
  "key3": "4cCfUNTSDDbhzNoS7x8EGhDeiaR4LkcimTFM6Q1RQF3s4FSEsFJ2ac8qHKgHQkgZaZexDsXezGeUvhWq7dFWK6se",
  "key4": "42kUN7aFYk48rWhfQfZSnm2dQ8gKmrDudpVGfD76Wg8x8SKHkiL5ccP9ceboiGmLjPnY5n1HMneznycuS4cdjsjg",
  "key5": "zfi1RcaghUq5KMwZYGrf3zgXgXbaveoZdWsdC9UTnsw6otwWMkk7hVvs6ooiQAa39ng7tvLMShBF24yZdiuKeEA",
  "key6": "318V2x3iH86PiSNFiosDzbC4RAoP6SqTtXqJUTYRJu7NKA6K9vxVadxAQnZJGCc6WohZ6Rk2arFUZkzW8Pf2a92T",
  "key7": "5yKtokEF4keDzYVyfCgJghHkaaMuuwpGouQJQ39QHqhLqbKv8uL14NaYBLUqnzcbPGgbyEho4K9aVe8GCxC3UeKR",
  "key8": "5neKfr4uReHBrpRPfpMcBwfNHfUaXDXdcd4hiBBEHwceouE1qXYaZGuZnb4tuHo9qaEY1ttNuY81GPP7w893Hy3f",
  "key9": "5SPDFVt7i1mPa1WTMQcnP1Ek7a2v3XgXTMHgAYxgXtopaGhc1LuN6YYJAbYztidBcR1bZ9Z3U6QqYJG9bCEzagVQ",
  "key10": "Qyq2byFyHfVTi9VFcXFEBE1mFA8KzxppZhobxZ862j1ZQnVJWbfFcz1gRaAp5cTeNGVyuQYGNhB38v41Ck4hu7i",
  "key11": "4sj8dxyM5r4BSvYgs5RXY8CSYhqn6tLmbNxNgAAZmMBsxLWRh8rTbvBBsReotWstZ4Zvbqb7q4paipAzLwVhoCqX",
  "key12": "23P688sQ7zbPXSsBZawgMCDLvPt1ojQapphc9nvvpiieh9hMQnRa2R3ratZDim9ziMyqcsWfBxQnzTcW4wFmADe2",
  "key13": "4vizF6oeo72X7FABvJGtJa5PKq2sRf1Uv9m6wpZUB35nkGMLBd88EEBojDCbP1rJt7Xr5sXNVrZDnwMYJLMvonwH",
  "key14": "461bkjwCT9SQ5opQmntu9HZb1VKn2f9EaoMSTbnPFgsy9AnujiHjVHCyQE3wj3WakfM2cFZCc1joVfTPoCvREkg1",
  "key15": "VWdZvDMGsFhzHY2pzQH9uXWzCf2pES6M5JgWyACDWb7i39ZGSKFL6SSid7twKiqa1njacMjDeGk5pwqKsiASTFV",
  "key16": "5qA6cpAykMG1ZsBstSdK1io6VBeqwjKnZVvQrpgsd2Bp19F4sUnMERTiSGPoQZxAsdvFqe9P6vkMWntsL21gxSQ5",
  "key17": "5Rg6uiTpheNqJ88P1rn4pXhPuRyodUf4jDoVcZLTrqkCfGjwbkTL4yTYvQHXR6qRpoy57nvXav64cLoKwWodNCBx",
  "key18": "34X9o5Sq3K4AHx1piLJptvDgeBCBjNCRCutseAWPUghXwRoP2qEMyHrwRCeYTdz88CXG6ZP4F7zUFqUeTRjQcCBB",
  "key19": "5jhhHQwFTKBXwVkTLm1xAkWBtg9U2ewdQWPyTEBz5rwFm5uqVYHGhJsQdtDmnuyKomxPoPhks1BFskdV9xi9kq7W",
  "key20": "4tBgr8E2sRS222ScubGo5syn2zENp27STEifhyKYHWiBhtWdsMFowEYiLKhTtLARrme1r4N5mpeAuGK8tY64ZRfY",
  "key21": "5YBqKX6Gi7bvvEem977DPzFiboh8hHhrV8FVEZQoxSj4NbMWg4JRCaFiETAicHxdW3tdXi2bTBAsKKT5gC2rQTZ7",
  "key22": "BGb3VTU9kRQSqwCUS6ArJVX9Khzfnz6jQjen5xxiVjnSE79coD2xqJ2gUMGHuxa8u3ordsLTZV6bLCaZ2UsffMA",
  "key23": "2B6V3Xj5Y31wJTLN2ojiTnLRFzbk4VedWSpquEgkPXqAUq62rDY3BdytgWJWCbdSwexN5gahKjwTUAsHhA5P92D7",
  "key24": "4phUf5Ecp6XEymFVYvPEQJ6EQ6bXAGQUrmgQjrsSHZHLwCER2YQjeMtX9EBpRzxru8mMjDdcY1N9qgNRBYwKUjDe",
  "key25": "2L5ZUE1tnQ2x5J2prmX6f1FJ4DpcGdctvmUyKADSV5w8qTwBSchSSz8XUgossXczVFATnKyLQUoBrMsqyeuTVWYS",
  "key26": "4DhsL2e33vQWPWapxJKB9yHKptc7eDwRpThmzqFL475nTEHPy94mawLLbpg357UtqArmPbQ46KYv92WLXdByEvuX",
  "key27": "tD2hmqm28Zp1QEyZhfQPju18DRKw9oHY45zgmiQY4Lcy28tyNwgHfnkLFHrFN8gaXQh3ZnfNaAszDYx3DiXfXKK",
  "key28": "2GSWMVgK5mbDSXTtnKriTHHLW3GqP3Yf9rzm39oJCVLUvd9ZXwVkjvXLbbsz1tkzub2VsU5KTqjsZz67E4jQ5ctM",
  "key29": "5k758ACS1PhrDq5rEa2RmfSNMorAGuXyxiuPjB5pVuXP7k3f524WCVudpvAGKXogQsTNS5X3p21FeQmk8fsNTeAw",
  "key30": "3vZxuuinLwhBpM6ZZNijM52ocwFt93YHdFw7SQsUvNoBDx4FZP4sVFHThCmuN6ofQGyJMjmGKPypsbbTSP2mxMPa",
  "key31": "4vynmLTKJXvr7vNvhRcmHJsU6JskGTLJHYyB3e3vusuotpvUKHr9xFtNCXK5qrkMLVsRwpREmAyC937jNLFaLazQ",
  "key32": "MEVrQc62F5wbPanM8BhAvxurQq6HYCMrrBdLYY59P5qa3aXibbisgQESfbgED3FC6gyKUR4QFQ7hbT6miDEPmx1",
  "key33": "497J1X5dqMHkxE6tUVERfLYptTpQm1vzN6AChe3bUo7Syc5D9nWRcTL8t1dSLUVgqq3etnnbu3PVkfEsiRyqs6DU",
  "key34": "4ZtgtRbDh8W1xFx5w2X4PfF35WiMC7AfdjV3V9GDoet2mUhpruMBGyUxgohUwujp9etnCP6andTDcDK2rToH869j",
  "key35": "2iQfh9BjTUSRQGG5CYhFT13LSLNxQMK6sGReeGtgYai2WKWaxvgvuTf1JmPzcup4tJsPzHPHuFtLa1ReHYS2TLDW",
  "key36": "4vvEG99n2cr7NQx1HnDHBrZs9LZKFTW1EZ8dGD7Hp9hECbt8yvqDxasbYYXBCEe2A8bxBLyB3d4S4zUxRDfUanvx",
  "key37": "2zsGgKervZiiwjLPGrLp2H3rt21gDdjMjjiBB5LEHtSjQq14yDQKa2G16FKobbH2CSpGgbaar66vdtnXxBCkwDmx",
  "key38": "2jvbWqf9v8fj2zJHj5LuHUgAeMEsXHJU5Cyy1DccjigBpDMHhAdD8VPFcFzD44sbs1iPSnypLjXkmk83qa5t3Qez",
  "key39": "zmSFMuoPKLpRrcwpFovksF7HJripLtqGmWFCF1ygTPsPXHyT5qkQbLtcrup6yBJzJHxymPH7ERZsbcfoe55Eqkm",
  "key40": "3pjPpwYadoeukU1RXFyPY8Zxhy7a9RWdhZEt1cYnrWGj3SvgSPxUXtg8Vbvy1JFyjSHDM9qEcEqhRLRyxdngDNQp",
  "key41": "RsfxvRqzmoyTXTacD6URCP22MT577jBtFYSSBFrwhJxb62gFtDkNs5VhL94rtMhJZER29itMFqGzohH84JtdKc9",
  "key42": "4eSQGp8c68kcETj2Qy2JQ1nokonmCSUraXUxhGY8vLtTxSAQHK3KD1TkETyM3n7TnN2dUeL9XwzRbJW2f8qHSpdd",
  "key43": "2ntAJEYduzaSTGfmbFHUoKZC7GBwS6M3MihPmM7sLxskfinRe3rAVqe5vBuBwtDss3cdEKFTnWc8setGHiGSix8V"
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
