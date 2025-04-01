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
    "5M1CCyf4Y9dFgsBK22aSbw5vQjA6uwgPnifbHZSuS3EXkkdAmjEqWUCJ3oLx9jw59Sn39Yvo9k1vuDYRmEBwWiyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cvTUoALwrkKmhmxUNTD2SjYXLaKuNGF3vETzXGPSLG7n67YFcPNVegPj1RwXsdopNJFAvrmKfKeqdeqDpHmwXnr",
  "key1": "2KTAt6KtexQ4Agn5gEY1aSgHXFoqCmoAR7Fb6LNceYFCvNTEF1FpVY1BgJAeyiMpvVBdKLnbPCxpSy5yrE11BypA",
  "key2": "2EbY4AHDsoroZ3iwZMALijsmVuisVsi5XGGaHwVmuHAYWsgKLCuiNjmA9ZzKJWk5eyrf7HMTch2uNXq8B1qxi2uS",
  "key3": "23Ge5M9SCD4WYgEpiSHVekyMkhy1LdYeGN1hsmTBANsYmNcF4chJp86T6Um3hYysJ3Eux3WVSag2f1VMvCBxa58q",
  "key4": "hC1btnCVE3roru9fqsgfNDYQcqt2GEVBhafWyw2vCvLRaRKyz55adD9D18fjj2xhSMA8eBKBhQpfiryJT3Vzh2c",
  "key5": "4mZCGFY4yh7vJwgU4DbpqpZGAWH5eFWdxpWuGNKPuUvjarK7XRDUVXoaYFLnFYXMTkN3CmpzB5g4uj29WEvq8nur",
  "key6": "3vXJTwvCXpWDrauo4SuahqfNT3c7SWLtHGsENXdytmwRYA1CrWGeiJeMYMSMZf2ZWz2pnPena8mmmBohyzkrumyD",
  "key7": "45SftxxyYMLUZW5JEytvucd26APywMM6hxvDmKLeoheEXyVe1sNdV6re7rXBiR6HaujVqQKerm4GfWSxn7oZVtsh",
  "key8": "5f5T9KT9RE52JjWB993LvvqLTDurETHQY64ZeXWtkEYZnPoFeckGtwupLnJMqq2xtq82WrVXStnE6W3R1x5qvNEd",
  "key9": "5EAHzDy1pskmofQ2nVds3T4hExZPaKeVhvdsTVE5UQCu1xLUX8oVLicTYthQf8Ky8JNdZENRghjoLqmQDuStKVFr",
  "key10": "2TFP3Ze7HepGro4wcfXXb84885Lbw5Kj1reghLVC9gFTPCnww2cpES9C7Ej5EfawvMT4oii2yB6sBx38XrNbEUYm",
  "key11": "SmsaZUwrDfTFHjkN8Q6SN5oVKbgDGfgWcPzMPMQMrJ7Fa5WyrwTKh9BuCQsQNoKcZeRJG5wVP6mYacBoxygSFWo",
  "key12": "3okd99Zjs3iPhHfUkXRdGU39fPb8G9fvrTyv5aWihRyRGMKauX4AB9WYCAR4wyCHzdcKKHYgiLRzC1TToZrSDJ7R",
  "key13": "4Rqy73GVwSV8jS2B7zTt2KahmN8sh11uDRbLAArf6cza5TFhWAV1GWE6s6paG1UcfFMLTmrfqUpTg6V3KwSewkNK",
  "key14": "4KvNh7VY8yqAq2a5Wy1Jh7vnp13izwwtudskpB1XvqnAiLyGeswVzVoG8p1m4HgoiVvwbZc3L6iVuhY1awuFWprV",
  "key15": "4oWwCPBnFYqDjWm1QX8FBgZh499TrAytfkyEBt2KUXdw1ofX8DrAVkiVFSgYKg9p6xWMMAV7caLnenQv9jL3nYNp",
  "key16": "2JrQbw86oxkPBnsCNjedeaBx2TjCd9gq7FmUuK4SCaN97nPdu1R6y8rHYDw7Y7hgWGCkKNYvP7cW5Li4ubcwkkAa",
  "key17": "CcnVskJ36nxpBSYcvAKzDzrzWba66kVrrEhVW4NzC592eYtaZYw1cLcZoJXGrGmN1q1pZhmhc89ZUCrmAiKFybk",
  "key18": "5uTBwDJsnr7KMZmRJea7bWqHwDTtrM2TYxQNj6NYVGxUpW1mFu9BQbgtsRuXgAwBV1PBn5vm1Bjr9VGawLpiSKMa",
  "key19": "2ZJRFs3hzzNTjg1mD9VKh6G26H6TjkNfSfcmm5DNsZZH9HpQnrkJHK8em3gSdmfzCDEBEM4ubaxN2268JE2vyuR1",
  "key20": "3QmL8a2bd7AzjHA9oymu2P4d7Yf3HL4XqDV1E2DJyPbUrGHppVNpFdgwMFogEpupWXjNAbzjp88xivCuqzvNNx9Q",
  "key21": "2ckgtTjjpmcQzYw9sS4UiQUjxUeMafE3MMo2rFCRuFSAY9aDtch9FR82JBC6nsKRzPj5e5hZRUAvkrMb4uKqfD4X",
  "key22": "2nG6nrDX12eSDfnxEtq8Fn4d6eG5bGqertW9Wx64ymqWnntDv9rwvyAHHzi1KeJbdrZrzRwpWWkxE7fFY9QjZqAM",
  "key23": "Jj4Rnvi4nYv3WdHAQxBqe5gHLSnHGVYPG845TtQ2jm9sfYDw9drKhAptsLWKfsC7eYNiWfeL3g9Dvfryoppkkrz",
  "key24": "4cZyebzwWvrgxusMBmRUgXr28Q4Fk2ZuyFUqP4mr5qY1hZJMF2Cosv5iiU7NHY8a6AjVX81Eps8Eihrgf54AXyMi",
  "key25": "356C8ymCnpXUyEwB1StX4kvG6j5B8xS2mK9fUoqc73tiNDkPmqHAbJxrq4Awmvq2GrDZWqjpRHYM63RgMoQ9PhuC",
  "key26": "5hdT8HepsZ9nys1Biq28Eoq1E4Y3EGHmVKwfoBdLF3zQ73eGvVrUfepHBBzAZo5eSPDr1wy21V9HPuXuc9JAQf9T",
  "key27": "5yf3TTyNbn1orrddQaqJp3gEuTyeRxD46ZV9rhEFSZht3mAhEhbvDNv8Ee3KfmNhBczD3q1faTcJRRQEsXzGkzpM",
  "key28": "58A6cN7nMKR3e8CRTBCj5XgrtBCK7MxrbXFNjELwhAsDnREp94WVFmdemeA3rdsXxzqL2MjbYrZn53LX9RxcrZQF",
  "key29": "4KXBugNimHj9yqS39SoWcLzeMKyJSRY3Rqxg9tWf6onPNMBFftN163WK7m9yqrxqXwHoC5VJJuE47uwo2m5buDK5",
  "key30": "4LqL5BYSgHJ5bqFK6xo5FAYm4u454SvNZFSSLaHarbwPMjyNH6oYjUYrLkfbTwJ6LushYWhjVdp8hSwAdh9QW3Z2",
  "key31": "4A1gU97DbeJT8At4VuyqaZkifwRrKGw76wcuxkUWUak1o2nAsXdUtazhcTLH9Q8gTvHoqDrTJCjQ1MG5atRbJhAS",
  "key32": "5W82KoNMCxN1No1NC7eQp7KnW7ybrSuHTEErnyx3xdSnw3hkS2ofNgHQDixykBJk5qbJ2b7DPQf6Zt65NMd3ChCW",
  "key33": "46A3e6jbph96yWsoCQxmRPGK64SJAGTJfuxXcRxMrv5zo2wWS2FnYJRBJ27JCy48ppkMiWQUK29hZfwxp2AW1q2G",
  "key34": "5y3vAfVdTfURfyP1r1pec7cZnunsP6jDarPAPKVeQigdhpNzXvRqmE2vLbixFxJqteQbBwaZdwDGMqwvPGocgWao",
  "key35": "6e83TH3vbouDCjCjnCTUen4WFJsban5jb3YqfwC6tws1xP95n6FgzfrmiXczFmoe5aGVD9HjGyTtkCSk6gt3Y8r",
  "key36": "3KhvMMpqHkgCToRs7KEWMB6pjBkKuRDt5z38PQH7TDkb3PoX94gK8z3Xi8nAbSBpbGjsVt3g1WWXmAhaNCHu3jpk",
  "key37": "5eDDtAuy7zH5MSLqMMmxiZBurNvQmohGh2azK1YavXtQHbjbvcJDmXfRecyurVkfHixkyG3Twq7rGX3cUQN1WiLT",
  "key38": "3EPEUx3cTJmgS8ZShgCDQ2jcz8WXxzqdaZGgbTQ1gHE2zpGQ4A8zZNuv5iWnf6fC53RDGdvEWzRKyKesnqaaEYRo",
  "key39": "4maZCFHP9EwpdPT9brYPYmAWS3VN67sWAmMSmGt7XjDzh1aPfTFGPSDszcMNUvBfiq37iN4FpcKrciMkrGHEzDZG",
  "key40": "3baZfe7Uii5SzngEqMnNgxTow4VqUKRMNd4Lk1Wmkm89b1i2zGrQ3EC5Wzq8yBveHieVEwnRv5mSzsTH5HLjn4Jc",
  "key41": "3FmqAhmpJwdPppFg4mPzqxrXe276ZkJyzrMoVYx3RhJ2efdNMChhaMpubqWVpw7MXefwtJxb61R1mqZf9rx2SG24",
  "key42": "4kEuFeYVPQ3vGAqtvykhrCiitXywCUmhgXqe1ajSQ8BLdAiEPrr6wHrRFxZsqydwUrfAh96ud9mMRCPrQmmNwBpC",
  "key43": "5d1cSeQdWp4jTwHLymn4tWnw6p67FiSV4mWNZjZUnJmMYeHKuThYz2xqGnZSvgQN8gagsLQFPg6xnU8zhHANaSsD",
  "key44": "2rn9546EkZzvKrZiRXhJgRz6e2sKnqRwVxdTawsPHocge6shMQmfxH77Rna3zckoRbs7DRyizGnqHfJheC6or21S",
  "key45": "4XWWRzXXaPMB3VSY6vu73SfkKdkbjJ7Ta56DsJAZa2iqjEaSNqwNdfuS7QsbXgWqWmxcSVhpbSKjJgB95GHEpPqH",
  "key46": "4TTpKKJoFExzuN7mar7wiMqsManieFeZZzvd9MnBT25GZCcnMSmVyJZSNShCdLZk8hw2W3kMa4bKnfwGiSEvyL5X",
  "key47": "4AUK2PsxZvtV1w47rdUNShSsZg1ZgKPuicJiwz8qukP61dMTEw4Z7P3uZjJe9oNVPGaEDo3cbqPwin4KLWPHt9zF",
  "key48": "3j4Q3mj1LWy2woEEvto54rSi5JBPHoGn7h7cvyrCFBySZHmtqopup3eSoqXHXid5K1wz33s2UbDamSk5LgkUtRYf"
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
