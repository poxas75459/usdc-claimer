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
    "5vWJw3NwW121vv941PKJ1fjULrUPu8WtFTyA9Qbnfsdxz6PXhvXuCNCGJ2bfb74hPc8tspn2yqx3XbBHzu7wDdgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Uu2DddHifG1RRMGqTMb1GspSHjLB5wvAuhUmdFvYjUPtMfL3tG5YZG1BUVA3WsefLGjYZx9DT2tU8LHfZDxNaj",
  "key1": "2Tt5QybzW3kBG7AHU9uQAzBB7SbxGCVUEbh1f3GHwomN1kPP3JWegyu1jAVN2cjcfak8jAf4uXhUWeatTHz9grTY",
  "key2": "34J8RZ7CcubwVkJGsCyoW3WXrgQuj9DJXAuQsvnXVDeB1oFaXTLyXzg2mxC16Jf6AnJanDcFGzeVyLexaXQDR5Uj",
  "key3": "3vLeapYxdFLj13u8H9L6yhxKF5FaB4NuwodnqMpHBGxagEQtvXLMkQwy2m2bfPffa4KSAg6U3Ncp4p84Lzp4BaDB",
  "key4": "2wRRu6CN99mXH81bQxnZZwYBtBsEy86iDjKEd89BUJqvhiApmxbKjgB5bcPPbiPbgToSaZxqak6iswgAGJkWTMDu",
  "key5": "5QijLuDKao5GuG3CXxdQiscdwE6XFU9GtxC9AwdUdXaqYrqhZdix224wo7nFSCfpKfa7PAufpRp8JnDDUPJUVk7z",
  "key6": "7483mbuKJVP5KBM922MCV35MWd9e31At7mcib9maSNUnk4y2Qj7QtzYmmjbq9PoFwhkEkccue1duvqwV3rfmGpN",
  "key7": "5F4EfVDZe51vuM57X6c66NtKzMFTGFcdvkDvxri3m2X8cKY6rbyStaWpb2yjspkPt3hqbhoovQyf8q1VLF85j9vT",
  "key8": "5npfq9qgoyRPz4kMtEXgYxReVGrFjaXiWur2eTsXg8dtqBdAdD37QtceyAbCWrkX3DGyo3XBxDu3Dp7XqAZheZZZ",
  "key9": "45kzJmZVxjpLX1ugFMt7eHAAAneaoEXYFmzYsnDsWpe4XoHBaUzMGJisy2hVJkzz6QNtvd9cE5frCPuyTr4WJUi1",
  "key10": "591VusHEhdx49TtddP3Zw1rt5CDmk78w8kXWvtwafGDWLt1uDdutmUM5kixT2haRkR7BetfBKScPfPu2RE7eprpD",
  "key11": "3oLw1TZZGMP98s8uKB5sDEy897KfhcXqjmN5dLPuR1E1aaTJscMnc6giau4TKYP7WcLuB5JiNVX5yrsGu7jZWWqB",
  "key12": "5inQpKW8vupeAvLiLEYBSJMtM4NQ7WYmP9qgbYoDdvMEsayF4JSGR3fryTULQUB36Y3AU5dD9YPtorY3opHnkLKz",
  "key13": "5tDfUkGTvSJPjCYsfdX96VR5qaVRjheUiqi3Kh6dMzt8fCpSHzaBSfNAnUxqW3opvY9AiazetkDcDwNEfanGunad",
  "key14": "4j8e28865HVrrWb7tLqYz3DCsUBTnyc8ktxEg3c8PNpUiagJsHvzhbMUjvZFSJ9SfTC6g3H7M3Kev8NCE2qXT9nn",
  "key15": "r3tJ9YP6ANxa3FyfM4MGebkycTABZSZVxah4s4xfbL97MiekgXaD4QtALigDPKFGp2KqE9nVSkzkdMbxX4XNfmk",
  "key16": "mWR8QqD91TL9YiPGdc3KcdhmtCu3DhE8M1BtcjZhVuMb4xFExe6N8N1gUH2FmagjH2eGtHZb7x98K5fJC2tbLkp",
  "key17": "55pwq93h5xSd6vwXmXfBEgrUP2iyDRzi6Ti5UkZjmvD8PNyYWV4QehFWm5xGc7mJhJkVhgBMayNVD2bf2H3x4os6",
  "key18": "5zE8E5bZrxHxxBozvAuytg2USvWc311JAw2NfSVEuxM497pnzJm7QAmPC4GvkJFgGeeTMpH78NnBDyQsji25UJmw",
  "key19": "4XxiSGHW2oRmsBhmxFTVUc4EhsbteaUZPz52AKuXmdD3Kyt3m4rXJp7ALhBeUimtRyoHZFDi1SZZzRV7oCTMTjrK",
  "key20": "4ZXJyPgvDL25CnuWfnoY5b1XGZbB5QPS2RSgt8uoyjEPN4tM4wjaTX3kkVS9oAEzZS5CV2eqpyd5HXkHnFcyQQ9M",
  "key21": "4JEcYNWBWbopvEER4jpRPjPvArfZVvcoGhiMH1wsBT28WdifrZZUtyMqqpSawbVtww6CGpEfHYQgZWmoRUBTNzHv",
  "key22": "58qwpyPuXRr5jd4gPKQSSGouLswb5ARvg4TgYRa9mwPDTLrv6m39ffS9QTzz8wVSWfcKE2GnueYHAg8rYww51hcd",
  "key23": "3QGZByGhHPmZ64nYA6eoVihjESKpKwYRqtnMMDFawv3jYDnLSprfhJzFvvYuKsPrRmG8kwri7FsMP5J6GEyzCtui",
  "key24": "2LV7kcFfhHhtfV55ySRn6zWL5ep7rE3Luz8oFL4Xju9P1PrbLNi9iAcjxCEGnocGt8HZ6CWqKj8dtoPCZvRQFGeR",
  "key25": "9zSXy5FkmbeGjbH1MGXuon1Cz1UGbtLhRzpTfKTbaSCWEDtYokZ7mGGoQSXDYXPhmHDmVdE8ZrkYidgrak4qX2j",
  "key26": "3WQiE1oiDBY4o8tWPNRWnTSzP7SHiQqHZrq42pH28p5v3jS7perx3YEUsEbxhPp3qFVu2XvBLrPqPewNTNAr4Umh",
  "key27": "LNNXwubRPwtB6EG8mZZBvM1StkrxitSS4UcB3jg2GAt3pLP5HA5s7uyTxpzoEyvZu4QvEzbFsxd6cc6pXGXGuUy",
  "key28": "3jRgtyMSvEx1GMB9jXV6p2XjC8Y1r5MgJpTzUyTZ7WjRt9VaHnTfcP39AvThpiQSR7DjnsN7dDH3KJsBmvs3MVCK",
  "key29": "4EXbvkGVMAzffNEMNsiiGrH81JWWYt9mnL6BALmZnvdpTijQGYxrW3yGU4qokHkWwcdPM1MGdbp9QyouSLwGRaTy",
  "key30": "2JTtM5uQjPM17vnnridSLNZB87YiU9PDerTquNxJdaisNyAtL6dcVUFYf5eT8SXw5qh3jhwktgsG1toTC4jMQrhy",
  "key31": "2zaYK53yYVT4ZW8HE88eg8c6Y2kofL4aQJy2TyLcaSLQVZ496D3fRfwAueKpVSebvM7o6gSusfPPYLJUhTwnkqae",
  "key32": "3Qno259BcqKMCjyij2bi2U1ZjKpuY3TTSFAJSRQgBLvwBAxPMKLVssXSmEjD4YrxSXQosXPcWqMLJGVc7F5bwxRF",
  "key33": "4KWPGz4vkgKxsfaWuiHqbw9Ry2Wsn6bJ5RpBdRCKvxvMr8Mfc7v4T34GxCS6Ky2Ry6VuLRFgvV9q1bSQy4dQe7Wo",
  "key34": "2JUYdcVn5DqFTmH5EMngH5e3B1bJWwCahZ28dkHN9r6afBjZ8avgCDE2oHQ6xoUrJx3ZGMz6ruYY8Anz7MFMxgr3",
  "key35": "qTQRrgDNfwecwzYZ7weDsfbKeM722XpFk6TeKZCSvoFMBo543FPsvBjn1PTHRauqCajBX3LDWSwfpTtdsrjmYhP",
  "key36": "33qS9bev8CUmaFb7Mqs9S5BWQ9WgscYESvHdxi8XuFA7yNnSrqe5HcF2Y9NYg2QBSwdcZ3kJb3AeGQ3symLjuPg9",
  "key37": "3azJPUixGEQKouE2c5vX91ErDeohFR1rbRP8mcJvWCZH9kzHy8SutTGrkH9nARUvJxnDpTEm8gs4vT7VDiVT13Wk",
  "key38": "35jeHqdkVQycKPPjt7ssMKfahVWLYdL7cGKay5e6tafnLfvFPXb78VpCDEdTaVN2rrJvPjYMgLWeDtAvRmBSe3zA",
  "key39": "4fus2mPfPHu2WbpsTqTtWnX4GWm1d7ZN5edLj2rNUdZRdXXG9VTAjmnAeEkrkfv9o46ECvqtJWUzrJ3b96hNSwJK",
  "key40": "2BLmtvPSnF2HEkCfFDP8rnqLu3Gy1n9bpdMCqyT1nWxptCkkFPjMk1gQVgPFJ1jaVJZbUwN7JiqszaW3LHadAG4Z",
  "key41": "4MKhTQUdTS1vB4CtbMabMSm9qhFu6SAMFC4Zshxe5ah4XkAtCWBJfSt38cDPzuxeXVrjfYKGJLU9bh8yyqPnJwdZ"
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
