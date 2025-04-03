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
    "2SNkxP7Dr4C47kusmBV6rBD7piSK4jUQdNbP351JvuSQjzTBVr399hamBhNisC5oZnqPSgtYurR7b2BQ1sHf99yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQMk4yCSnEptzjQ5M7uJGjDGUR7R5fJhAdS5vZceo6CFH5iXTPHYhT8sFdzNkhsfPMtq8XV4AKr8fM7wqtKeh2R",
  "key1": "47jteF7waip8vghBev9FxwWoKeRQNn5XKKnduXf9qnyBNyb7HgxMBNhWe3juF7GznK3QgknkYxL2EiwDtrRrNKaA",
  "key2": "2AxDKEkFrKPdrMvBYKjDxtFAAmcfrUqPosT9PVbgBgZfnbg7DPRtr1q6WNPSLB4CZXXH1NVWKxvQx2tCsWMEirZu",
  "key3": "57pHMFv8g9vxR2juXNMdjM1pzBb8WZD8o3S9hXdBwc5KCz9wpV5z9Hos4RRTCURtbbbZKVUWVA7GnFqnvTpoWSRe",
  "key4": "4818vhdoVc38yFyDNW48pMAq8VpUyM8aBmmqzpu5inG5sc9bP6fj2CpSiJi4Y12uKt7yqZsuBK6oy86mDLvzuiiE",
  "key5": "5xRxcY4G3LE85MwsbNFfnJwRS5yDxz1QAyqHgmL5BKyLWeqCezyX8HyaZS2eutKsE8U7X2SRYdmaJw8JvkzcqD8E",
  "key6": "4KsZTt4mdvVRvNct9yqo8zkNahKF1Xz9fgUSHWcwife4GqkmiYNmtQE7HoY51GGTfoGQffqsqJCufLcbvAi5fnC8",
  "key7": "WAMhCrPNXkhVR3ko3cFbgBKP93qD5Vvgrq4SsuPmKYL98NdxGRdeb4bMCJTby6Sp1D2ztyjwuqbTuiKWjmvYCAa",
  "key8": "3tMBKeRGGiKdthoHUjDAJAQNseEtGqHs9K9YAVHZA5TY1eSxWQNZ915RrEk6ZBd45HqVUwjr55kLEdtTuSc7Rs9M",
  "key9": "4mjiqiYQF6GAvu6s9CYYD8oRm3jV2Ze1JeaXoczK5Y3c4fCcZj5BLkhPUxicA595uw5r5g2N896E9rkN5SspUiE9",
  "key10": "3cgFWXk57Z9UcyGQ7AmYtheyMMvs6rp8vsjS1NVgjMZfKpaHTYSxJDFYTPZTSHxhRU3bQznRFWVUjYnPxiFh7uSK",
  "key11": "4VKNZbeG6j5PzEQbxycYhkdAbovQNzVeRNZ2tGE6amiWz8KRVkYPt8MLzZ48A2UNmWoyHXBYsbbEkfPxSx1EGrGP",
  "key12": "3KXSU6iKz4avD3f1A7aDfb4FsdF5CBhm2jjEfrdCv1g87Vd7rTrQdkd96yxscLM7SYcWWhniR3TVBKZPgGgd9jni",
  "key13": "56mDUhS7YRGJm837iNZuwjSGvGqc8CGT8GkP25qVyTyrTDEipgytkn1B6oiVkU3GYSozXif4N1CMJSXhHdsm5x4D",
  "key14": "66fKYcW1bP9YUbCxCiBMww5PJuqyG1UzDhGZMZ8Gt9usZVhntFQhSReMmsUFAb2CaqZSVizVhghXGpFzkeGnaZsM",
  "key15": "4CuZ4m9xggqGtynZ8V7c88U6Q3Vo9wnSmnK8TMBUGaDFbACipsDN6HJzsDEBTtqgp36nvjHLjA8iDzKwB99ZnKkE",
  "key16": "62EehiFqYfRAjBbYSyJ4bHti8WYf6KbpHALoCdFXvMousxfNobSkNGK5vz8aNuVgYLcr24oBbDrojJQMudzosfun",
  "key17": "41GV9AvN2addsZZ1V3Eo2wM4LXjMWjRK66qaLv9pctg7XuY6dwGvbrxWZtenrWacEVDqwNUPcqDgGbLH8862ALUR",
  "key18": "2yTwLdSHKtnE3NPKmnmxaKvL4i1v5cjJAMdC6daARLGzMXTjzDmWzcGoSiWiYTCgdiv6jKnkykGPUp7WxBZLepKV",
  "key19": "439itVMShqS8uXPYGb4sFzCoYCBEerq7bEWD5AdC4cNPXCBvMLUFM4Lvp4HiFviCkioKFbXtKoG62UJb4ey1ncCF",
  "key20": "4HzqkEkkKSGERUouVbQRAx6dWd6sFQBitdpjErGcQdgxwB5HokazZLqPfnBewZJoLpXYYe3GkeBWxpVXhbJE3SSb",
  "key21": "3DPnUKFP5rfHGnTbGwZEa5tQLvQExdU8Muvszr4phA71FmZWVWJqaHod8cXkwNu5yB9fv9CDjf5Hn17NiPk4Q3kJ",
  "key22": "2XR5qDnnJke2TtPwzpsvmP8ZL7qVwCjYRVWxqpQNZ6xA3y1TvCDhdDGHYDLQvrSF5wwJX7sBiWsC44KpDhTQVjch",
  "key23": "5ANgPJYoEnyxvrbqPQkWEGqBeUiwsZRD57tjkVCyujGxEQmYpu2qUn9B8cNpPeGSox4moiCvVo58ZdGfHzRULAmJ",
  "key24": "2qoWkKpwZrnJoMNMfsD4h47db6NcQop5D5eN99sg7mNM4mrMtySV4M1iByWhzT65pLXETyx2HN6inATkqtB4ngw2",
  "key25": "3g6htPtCNPaRycKX1K9uNmTMwRLZZDvrb495XyPxaoPS3FsE7TmF1gxNU2msmasEHSDBLZaiRFeBL99msdzNDtML",
  "key26": "5fq9CxaajoBWZvaSpjpujCHAcV9a6Pfs1H6pBRMqN9NcUKRVuSHV3xtiRE5Ba9nYSuNrfLuWESDA1KV6dVSjSLAD",
  "key27": "3E3KWuqj3HxPZiVm1mwAbqkEpyfApPTxENqaKmWX4bBb9WuQonXbuwM8e4M1LXL1JhcHjtdN3hf7Fm4gjMbbxkbE",
  "key28": "4MdhqcnNNSDyHpbaCgAiycfwYkA4P3WGWUUyTtVrU1EaBHqZ9hr1CkzMjcVj4fra35hGDFDy7NVHEZaKKcQnwG4q",
  "key29": "4emGZcQbWhUbwH8777q96DXubyA5xYm9cBwyFxdgvj3BcVHwyqzbGtcQLWuFxsBtZvAKX7H8TLw3BP7D9mDsx4wJ",
  "key30": "5HBR1N2g4XPcWRn5rEcuRDLfCMfU6q6Xz3rqYit4LoR6U23iHWZ5TpzqgRZqT4iQCZ3yHYKuxbw4tPxkJfEHpbzq",
  "key31": "4c8dNQBjesHm7GfhpQvx5jzHjdBM8krKYx592Q97CR2YAEFqzqZAPEumJs1D1CQWJGaJj5MNfsSVbR2m4HUUFaqD",
  "key32": "3zmJc9vZLK8eDvNeErCgu3pBbNsXKEy4BL3wGeTzAEBXRSPrb8oWWfb3Xj7pQaY9ZTfh79ZDDKpDJ2pH9KrAbSQ",
  "key33": "58c2hs7PZVDLbJf9gDLDfpXC755YW7sSdF5EeCPAjhKbivvUV5dfqsGpukqsB4r1uSUMZbA7GGZdDU6ykaZ7C4jh",
  "key34": "5c7qmpfmnXfSZKTa7tLhA7gLtgHst3vPTjvGTaLBYpCpzj2WRsiw885m6B5edF1SCR8H4tbe6Lrt2p3zmJuL1eH8",
  "key35": "2AzuCZ41LhZLDLCiaA42oxNP75eDAvGMPMayYtjx25WweRPjJp7NjF8Wb4iDSqtFP26oph45e53xqBi18eLC7r14",
  "key36": "2QmXJNfqqmYKq8FB1cd2fibZwBsSExpwZuPvVCEYBPnBKDT8Z3S9hUzwxf2ZCQG1NzWJxyVxSmXJVDe9ZyKpysKF",
  "key37": "63d5eETPPqqHMxY4N3tdEy9FQbukf2QBC6JUQj3xBu6JVdykcmMkofJ42815VDFQSXezAszZWnpoFwcS5fVofMu1",
  "key38": "U9ugHjmDQPMnUhAVEfFb2ck6yDSzWdwvTRgmkxAEhBcFx7xAiERE4QTVbf8gWZfLyAPUxvsVgNYoK3kghhirk5f",
  "key39": "fB5j8jXqfsaAMAj43dVuU5kefDtEMUzFZ8NmLPc8ZTRphZybD6QfUe1gww3cSng6veeDkDWzVfFR7j64UbyviuF",
  "key40": "J98dywMRsxsrWfLc6LG8rGwTzvr8BpTp1zjotkaHUCgBDKbh9ACpY3ijQdswePPiHuaFdPVoHqWkB5w54GcGKQD",
  "key41": "2jzxNAUgBWHrhjb8PRVTrLiWYLh67yUMUzmipbbfdtt8mfxDcaJpFzZF2HhAwoiyEiVTndeP7LjRaLzuLQ9KeG4t"
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
