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
    "2qT3peswtjZPq5H5c7AxpS5cndyDpCsA79qj5W1pkNoWd9SGYQMtGHgvpdfth39CESdoDUVYFVpsrNWZy5kSasdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aduKJ5HnbybkLGLMK8N1izb7uZLPjSuiam6BFRYAfS1Q4DY8Vk4Zyi8gCe6ghoYEH6KS1ph5SJZvuBov2rArgQZ",
  "key1": "2ftXx3sNcrmHKob46Bq6fbDdyW2xkgi18EUsc3sbq8KeoSQdXrPxKqkndJRz866iK5Xv8shYbsqU73Hxmqzk2yAL",
  "key2": "4S145Me6mHH1KK9QNBrF6Fz7qspCYCPFgEgAru5koSXJ14Kzf5kmo4V9SeowNeTCywurGEh25kSLLAmCa6Ymw2kF",
  "key3": "38qco8HW1mRTaZJvVhdizAtaESxqs5WYUVpdyiTxxU252cnUwd54oNYPm4mxnHSuqeMQr42nemQYPooG1aaWcCXj",
  "key4": "JtDtjMT6FE5TchQjR2BJC4PcHxGh76Mp1WHoc6MufYT2bBLFMjXn4jGG9gS5pX6Wvxtk4RxFCLtKQi8U5wPdCvD",
  "key5": "5HSvS4RGvBP4i2sbsfqPvAst794MyErkezUHU1VSKHe6ErhYFSZ7e39skwgXNgQLHRW8yv2ydcRPjUqz6hcQ5kCT",
  "key6": "4AFoUzt33akKfvcyqtTqnsnddRdJ9RLEgidpyDMT2puNUPnLYM1FZcTBfvTMLjHwXEynY2en4vKNUScyQ9sjiA9f",
  "key7": "5mC8WpQyCstnfJSpd1twWJRheG63cgjvZe1aPQUZ7YGeA9ENzAuRFwPtaViL1aNkeFNDs5Eqn1HyAGNZ7vuUaT5T",
  "key8": "4e8qHKMVwSNZHqGTg2UBaMMpDP9tHij1w7au8XA5hYXewBQxiDaPiRSJjB3RZm1eVS81EEreHoCFtM4n7pj8Yk31",
  "key9": "91m9xvTGKJEm15aVKmyfND9i4K5REktxNYz68gLUaAuUVosPbqzU2LfyoxYkQQKk85RDFQCS2mGj6nNsey3aTjU",
  "key10": "34idS3zunRaYD42SMkwgXLG7K1RDcrRdXJ8XnQoLFraC6cpvyfAKz5JpaiKuMm31tWxLnsQxwXvkwRndEv5KKNCL",
  "key11": "3MwaiNLnFCevoXQoUN9XMbi9o1Y2Wafrgj2MZPqMgHBe8LfGQ6dsVRbD83gA6fsDggRQfPxwJtw5x2fENh4i6LTR",
  "key12": "4PSE4MVobY8Ne556AEqWj1e2WjinkRq7VhseteBidWtUpxTRhXHhvryERfnvdZuHaz1dKD5FDRYrEc6qb7EQBwyu",
  "key13": "Fi4tnfhR648uuyeAJjLioKry8tpB83MUbdD6fZumam1BH6E1Fc96Yg6JHaA3UbREtusyb3y2WmLPyt3QSbSnNjd",
  "key14": "poUgVWhryEaPfXzM1Lt1sE9v9tqie5cbToiXJwHG1SZ48hepDLFnbMGwwPwVR1Q9VChd39MPjEHdfcTRGUbwmLz",
  "key15": "5CChuckUscEXcx6E4QnqLSr61TBVcqCRVf8ZXundTQrHZ6UzNZvFYxWA19dsMiY8k1fhAraWA7rTjEBKXJ8tEKUc",
  "key16": "58DhBJgCzCvvG4V4Nu21DwWufZg3J2gWWPogmT3avSRdA9BVrjhps2NDxSn47heqA71WZarj6CgbmX9ArGAzwkoc",
  "key17": "1x9MYypQ1opuzZMnnQ44bZvWxDUw2qcGu5u1wx6ZoLg9ssRVMPmhffiwcYhoXmxRMy2BsKFFGDd9zy5kvZeyRhR",
  "key18": "4j3hDE3m3vh2K4HVhZmzZYvzxXyv2yzNWBzaeKKq7CLxNCZZrLnrXPxZEPtn5DUQWPy8Nu98ecieAVAvBALXxDok",
  "key19": "Z62S5hbtXthzJqHtpvY1GmqN1UGb9SazssTqXgoKAwQ2zM3BLwTp96P3CGEY8k8KvAK54eE8iFunnti79C1aJXo",
  "key20": "2kYNBL4jWnw2i3MDqgLob6Aepk3t1trYuSSSNR6SVdzUmhN6cJfhATDjSy7der2BEZNdkJYkvshk3ftoZbWc4Wox",
  "key21": "2SBXv3kz96KcVrXkLMyiZqtYxDMRAYmu853JvEp1FcD1rmX7toDqBHzocxp7ofmfwysNXRzb5QnCE34qH1GQhDcy",
  "key22": "4pu4hA7LCLYcrUSDGd7oNhrRfPNeGBJXyqyeQVVGBva7m2EkM2MKNLA956VosTj3RmB8BPKh4knhXt4znJMMxzvc",
  "key23": "5y4h9LZ65ZfhtbHA9GQdCA3vpqbYHC1pKPowcnUSmM1GT5Qhmpv3QNTmagLM1ZHuv57QnG9nfvvXCMhforBdkKY8",
  "key24": "3AZHtMFNmX8Ti49oKkvq57s9s7vFepJx4MuKmRsGZQNvxjGB4ewxR8zywBVB39LHRCYXNFKJXV2FxXWKDUGcxPxP",
  "key25": "2jPZKpM9cBfDTE6SEJKGCf9SvbQNmadGZp8erevHg5LiHCvNpPzWvZ7HWPopuafMKWuTJrDRtrKF3Styi1cXVVg5",
  "key26": "2xJ3ytDLSq5PByWUrEUnGhW5bdfgdNQYypWTNkVRRtRRxQUaxKzaJNTn8mVstRJEpJxMKjwAbnbB5jR9ZaHSxUVJ",
  "key27": "3yM685xKsvPBQfzCBGwDd9r47X2wZbUiVdC7rA5A8yh4Yro747xxkcWPJZbNe9XxyXvXzseymNJ9cBhdyLEM6ZY3",
  "key28": "4mR8Bxv7o9NW6pJ3MEPLK1yhAxbYkHfBNaWvCymJwLCk4PjP7VQb2BNQYUKb9nTbevhpYQEHkFAKEr8W7h7KwCrV",
  "key29": "3n8XUFHVgZLWexwGEXHuoZXS3qRZTo3t5r9BmJVzi6onWwvRjNuXooiDMrdEDW7tftPErXvxBKezGEq6J4yi2p89",
  "key30": "UvPSyDGFTEGEnr71dBESCP5ZGAyxtg5p4uAh4nFkogbxT6HPjwgTQkJgvVrQkHCLJ2qc9TEtbCJbVQ8sK5qWj6J",
  "key31": "3m3JMpJUkM5e4SNNgM7WuX26TJvovJMo5M2SeqyPv8WNK48YvFwSd9AvJkdfwK3SHJHadWdJ5VP33e3Fq2T6vRdb",
  "key32": "5qZxu5sEkqBxaKr24iErtM4zGzQKe9BqvdmNX5uKwChxXm934oQemYQpg3AeDEqocZCXiTYKqWmmMKmqNqJoLuwo",
  "key33": "3iKiy9WRavSbs6SxWz753PKqEZA3nJqeaZZ3fUcAGfexomCuSH1bKxm2GH8xidN8cThERU6ccBG3wCyZTd7MfaZH",
  "key34": "2ssoKaGo15mNrkEp58hMAgtVrkYAK2vinuFCjbUgA6aRfpfkxWhhi4y6m3B8ke1PXtycFxchm7NEC7s16UkaY2RA",
  "key35": "23eFjoexjqjJt9Dtzg7FTr31aKd88j4QVzcHggPDpeiUytGhV6m7ZbKr2hd1s39HuKJ2nSJaExHGyv7zYojbJBi8",
  "key36": "5bPRTxx99r8jAbmexHc21DVHC2iaFZcKY6hZYyVjBJEQ1TkQHjaFZTrz5fviz5NzeRdaA93kdLcH7rFabKBM2Mz3",
  "key37": "4EFX2EREDWBqpcFMAmawjgReJjU4oxpvp9EumDZNkwzAwZPB1TyGVNj4ZDCvkUuqN78DVwSQuH4Dibp77Ky7jGFg",
  "key38": "YF5qLLhHL4NGUthtVo9cvm7r2w23nMw8Ljfda1kzFe84jyeQRZba9TUrEF2Cq9oj4nfRbyqma3NbuEPjXebMqRa",
  "key39": "Pdjm7qxh2sjFZbR3DsjcRpWof5jL9PJnTnZZRTJJoTnDvjGCasyZ8DUc95FSZ8jPJGcPDecwUHe9UYtP3rxBNdp",
  "key40": "41jGNDunRQ6kcSNrw4jnJGrYNZHLUb9MBHRiqdyQDo12cnhw2yD98A61KRcqjc3iQ1PgUcMT7P4sxheaKKTbiSeN",
  "key41": "3yeS7Lm7z114aUL6LvwbCwk1X35nfCmxVyqVcHNDgHkWoQFkf95sie7tXBeZz8sohFcG3pUKQH6VMzbQPrc8sLhu",
  "key42": "4UdD9P4H4CrwnKNWsGkct7mar1XgQbiYzqP5GmEs1SHTy5vq75BGnwDttBZkUJvErR6uwykJydjhVVGRE8cKtjQk"
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
