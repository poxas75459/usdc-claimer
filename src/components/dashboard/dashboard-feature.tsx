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
    "5WH3Xf2MyTRWM8saWUYD8ds3AEj5jeXLCFxrraK3q6TXo1VFV27F1DnHCa5J1HYhVq5UybkLA2MpwVodS4Vi1SMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "88gSqTWZPN3K6pXp1PCQRQ6ZKFAYds3jyAkLXVF3qkzzeSrAuZzqWEddwfL6DW7ghtnTVEzHHZXwJ5AnX4Gh6mD",
  "key1": "2Mf5X7BPbLJKZ1Z2QvLAs6ATNAabSBURosA2qZvkJnTbr9ijwBzr231gxZwXmuCMQK2XQD9VzrY6EyFUjfoxzQew",
  "key2": "4kymvbVBhDhx1Lcm4rzJ4SwoFNL9SNhuueJbsbo8GtdrFNiofsY1WRoX3T3Fq82zoGtff36b4BfqrAj2a3sHyyff",
  "key3": "29U1nmZ3xwSu2BPq5GNnJ3N9xtpado2WiaPxTHGhM5Ps9pX3g9KXesbAqeWz8S62uv7SmRePR9arXGpLghkJ7VJx",
  "key4": "3PhosQs4wvxyZEBibBrcoC7E5Lx1y6eG2s3dcgvpt9578dmvosufqFTaowmKs6ZShSMVijhFU4NDGcn5FN9QrAaD",
  "key5": "tDHRoWTdxnDwGJCkAyk6s4wQgeBW7Mw3tzw1PtsCaspPLiMCLgCcdMDdSinhHXeoYyoisWtS81tizrk8DEgi7EU",
  "key6": "645BxmaC8PJZqXvv3srsfoLKMqDCprRMHsSJHN4YXdwHSRL7ybCZMVopEH5s96J9DgLq5Tnk2rhmnvcQova8TU6P",
  "key7": "66L6LJxuyvUWM8NPZyXrcXTqr7Fj4w72hb3Rq4Nj8wdX2WukywJX1TBUv6sryPhxoRib2PnZVndNXwfCNTPbjnyq",
  "key8": "3vsvRb9ogQzPxUeXHMbFsdVuLVwB7RqqoxXwJaWYwq8RcMWYTqn2E7ZxycjM2GQDKscoDQ5wZho6aHgx4Uefc4tn",
  "key9": "wA8YJ5PfAr7DSJbXA8ZxP5J2EnR5Qy7pLUXPwcLXZpTuL2ipGk18X5vvHb9TSbD98F3y8QpExcYg4yRuo4HeY6b",
  "key10": "j681QaiFxqR1685N8EF3wXMZegg221Zedr96xJUw3ertevgcyFNUSrwJrjMrE2ikzQkGDNuaETNfDntKFRaHRTm",
  "key11": "2BMePRZrLKKkqWMjFKg5PeduTvTydidjx2X1ws897Z7U5SRjRmrZt5gdH7iSf85s3dxZUAcKPHTopm9Uer8ZEHpU",
  "key12": "4VG8xV39DjsvbAuZLQVhdaRyKBf35HbqSYEsMpk17pNxMKC6ALSLbuPWeKWadWAkXUqPEJYHizB6kpQefdw3oCxE",
  "key13": "3NeGr56jKMCamXArdCNJKooq2BphVZskVKxDjqJKWAMsu2gFv7zpN2dHjYVpsZhJ3k6TkxmPkHyEmophXRHXPAaq",
  "key14": "4CaB14UqrA9cmaVSxN6tkStz2h4GHe5dUXMoNpVw3GzfAhxzgGC61taMTn5JGf2itYFCDmM9fh6ygbz3hfW9Nfof",
  "key15": "5NwFZom2vFtA9BYGTqAJWCZocLCaHSKJf9zGDcZXvcuHQ1tc8KBaMRL4QYjHJ79y7QwTdBNKkB8VcQeL3Q8NECWZ",
  "key16": "4SG9iXCdeGmdaQgtYaoqUENvYgKd14FknJkheRbw8cyuqArLZFRwaF8AJuYtwXKdQRrGfRxzKVvgvxaCp4jb9u37",
  "key17": "2Lm5zzFbTaxPTNGdtpwKKpLEirZ7Xq5wr26LRZ9JGoRrV9YdP1GHE1Y28nueKd7FeEU6npEHD9NiUaNxvmKtrbA3",
  "key18": "2PvgF8UBoav1he2mC2xNgTQgXKR5Nn4suitS3yL6ty2NHpN4fet7fUU73882eK54k35CuYspDEFaZJPhrL9Ah67Z",
  "key19": "5VMai9FibtyiwpqZPvcxdWAJc4y26J9nVhrQupAS77mVWiSPP3rZVKKfuHipL9khYVCbKDjP8DjmYMEfcJ5Qtrxs",
  "key20": "5mjwyNsTasBpmwvEC9YhmmpxpCjmR8qfuUkABgzjPrYSMNypPxX16uHF3msLr76zHgH9PsLbqnP1GvgxAufbZm5S",
  "key21": "5fWbX2paH8LbsrkVQfraY3hUHb7r6Zu2rhGveuFBCn66iCmctig13DQGRyxvFrzbUhmjELqMWNnDPei3CxsMNss3",
  "key22": "5ZEcti9DQAbM7Cd9G2T931QwUawhVMSGzqdYL8TXquLDfC56vnryEqejp8imwsneoEgSFS8okpq8XmfqCZeEDbwH",
  "key23": "4BbNmb8tnedGXfjbLjvRQWFmXvEQNkSBmxNvp3fbopEtjZg7U7aAEZG6jvDSQGvX2D4xnrm1L1HqpvCSMA4DnVL3",
  "key24": "zA42X6neddEGCBpV8B996v4mYdBDobp4BRDXP4uZPwLabVAUhaZ9ecfgMkL1kte941sRC7rYFzoGgzznNVHAHf8",
  "key25": "3Lr9pZ75hSfVcc1MiQyaT9TNbq4wYeyw2bjGrWATt6nqqh3GHAyYmtMkmhrdmwEWnqQseeEUqA3u597cnin8hphR",
  "key26": "2Fh83rMTZm6L9dN68QDMGxBQHhtS92P2nazXP5Nk2TjCgb3r3ABSUZ6Mxwr5szv85T5S9ZmPBdaU22TevgAYpF12",
  "key27": "4cndf1UTapAwko78ohVrac6CdXaed7VoJuVvZh3g5tGJDRJoxLV9yxXtw6YhwUXGs4yJ7DRwEu65SVVvaUsvVFc5",
  "key28": "3DBVSAgkmsaeMW5mFECP2yeqSMWziDCK6zMwHPntMWBkqVTKcWiGcqPjjziWGuypmWV9uFdKoVBC5ptWpY9serwy",
  "key29": "5DNRGdZpkWMf3EMoqPpiJDyyhG58FGNFpTFhKXYt5bUDhXASy4QnnwgrHV3dT4VyAMCB9aXercZBtyXvjURpEu1m",
  "key30": "5WXiZBPkH314eDjnbsvHv3TKdCXSXBLMjHBVkcJ9CAcs9w8LPrigbkh7qChJzJTUjvzD6H5Spy59nBHjfWAjojSi",
  "key31": "5f1vvzfgY8k9wg4Ufh2esCQT1ZjF8gtEPXK8dwHYaPDf5wCvubHB2pKcBurtSGFfXMju5WrxentzCzP57KV5uGp5",
  "key32": "5qTTpL4baHCuV5hF9bDrFu7AcDjhFwjiATCuBeGEMK6de8XMKqsZeGJ6Gimjh54up6xfNp9Cgt7tw6FgbCwCCX1s",
  "key33": "4n6FwPEL2a371Xii17UANmRsCPTVSZdSUPT6nPZDcuXkZ5LWwKzZGcVFDYaXqYVG3U3DeyFtVSxEG26LH367Dn6d",
  "key34": "4y6mCt1pbpxjszgDVJMuPHhiUt5EGhX6LEH4Lkp8gjCzFxo82GdydqZp4CjvSUJUd6BNhoRD9VjZytvFyh1RVciT",
  "key35": "53qN49WxeZonbZhhxaromTmiVj2i8yiLRQVseE45noDRoyQ8zTJwzcHdDmyGmWtjpeWXoJAdPjfnewgEk3VB9HVB",
  "key36": "4qhcgRpPCK58NmPPycCD8FNuanN6Q1KsWFqkcxim9oFsB1fXhVRcMb62iZvW8fgf9Fuu4jkTsP8JwFvpzRZ7nd9g",
  "key37": "3w51HMLtwjSnecVFSEoj9DhUrg5mFGCYXGBoHzrG6yg9XtuA44XMSLkpRwmWQMtpvUv1rNgv7u196hJFWtf1cBmP",
  "key38": "5ZdMMd276p6Y3CSpsnjxHrMd9BjXCXfZMhC5ksJ9Zkog1dthCABz4XApXHdNNSpSa9peMfEfjPxp2cBrt9T8K7cE",
  "key39": "3F8R1HNUdBCSyWHdddh55AYtzP9qQePusjphR9ycXdbh8mnUQvUiHFV5QibEDcF2SYPwfbHwDmkirDQM1WP1iWqs",
  "key40": "4eqiy9f8kp2dqJzkF58UYN6bZVcfwC7jfjSLyVBWjezc9iJoAkCDxKvVrGQUpnCzmZU2mM5hM6WMudKhQt9tYMP9"
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
