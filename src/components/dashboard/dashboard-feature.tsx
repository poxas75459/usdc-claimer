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
    "4DfhpXEv9fS6WvuYS2f8K85GTHmaP9ecUTsLwxarCyTSeCCr2DEwRqTEW19WPyYZ956yshewUJuWC51kSt7tqQnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DU6gujrnSeB6Ggj7RfS4N2evUKUPjThRHzxPXgGKS5nBxjzwU3om7AvVchyFfvbDuyynAnbiYNk53hD8SRDUGd",
  "key1": "eQRdDzkSwt6QLEELyvia4C9PH76xVLNbtg2bSzNBJy3odm7Hf9VcY98pMb34bYpu7JyFjtyUuQVBsKxRyBUTkaK",
  "key2": "emGFCFYhscXb2BHPBB7WLYobMfyELtjzcAZC7APsP4B25oD94381cBF25698rVJQg9rMi6FWBV2cYzEfPMMU7kJ",
  "key3": "3s9YRxKnQZSrAJr6yfaPK46XAECbANS1ayBEb87gnpdDuqmBnyEvg23kYkaGzPnb57aFKio1B6SC8AAUutCHZAvi",
  "key4": "5LETce8vP1Kg2xV42YvGkaaNbZNC73B3cvf4pXvqgzv7gjrgvDX8vs4hh5qQm34b21TTioukYLYB1sQBuDkPhbiw",
  "key5": "5xCbN4pDnPn6dfAA3rjdWYwJJT7Kcc82gZXH1tDSJn3wSCkqEVhchbnQafd5rAcnN2VxdQxduC21zewJYEmcLqL",
  "key6": "nQcLTm92c4dwxSGxbSjjVdAX4V89eWmCmUBPLS2Z95aGtQZEkMMhbJoVphAZecojQMs91Y3hqAtMk3VNPwjWiTE",
  "key7": "uy5VJrofECsUVksL1fq1GNa2XB9hy4pZsATx7PvXE9nQ1AwGLiRW8JqiGHuTnYku9uBmZVYPQAX4CrXYbV79U8c",
  "key8": "5E87eramyWybY22qk84YyZvPpywtT4XGfEVGNsJtZHAr7hL1JQkZYt3bdNe5iNNYAEcTMvw8L8hMiE8f7NtZNccU",
  "key9": "27U8zYnwvMLAeRpsbDd6ZSvHEeuvLAQqQRpirg9tdmgBhMoXLoUqpb5xwjLJp3vmoQLQpvefcYSBiDF7dV7itFbV",
  "key10": "ZfopgMopXx8Rri9zQbdsPj7gjLYbu4o1N5gL1BBQf1Sso69k7VSDtYsFaouQUR6jRbDzDgrnrdvGySgmXvh3q6e",
  "key11": "2zfVD8sb7NHVibN38w2ewWN7RF1uZvrQjUnoZaQPBYCjbjCbmsSxMsD18NBJzWqt9gNrH6U4KP6F3ZE5B54ox7fT",
  "key12": "4P9syniraeJVHecitEyQwUqNwJRUck8JtrR4heEvnpgBXQxbjzus68pzAaBrtAD5AFekApzEEXxtQCBAnomM6S4x",
  "key13": "41WXFuLvHLeDtoC3ZyQzroBdtJyvwyCXhaKZoQvczEJaB45mejaicmo5pZJLFQVkH1to4tx6rKrXvrvNmzvom7Fs",
  "key14": "3gXzcwRrmDS3k4TGTXpqvtPsRd3BUkmDFpuhDpzBkdwaQqUzmjmrAqVhBzGRyKiFQJkZJQf3Q1ccWsBiSLzdWxqH",
  "key15": "5A9MdbL1KUACGmTjvjMW8sXHPzy9DkaccGV9t4gyQ2oJx9QnXRnBKjQBuZAS7abjACXKW1B6Yoc2bwHYhM2GtCA5",
  "key16": "4GHbge3hpnNr43utc4N1fck1h6pfdtrm5Sw583kMT1qWNqEMMurS9XCHKr5mvKKqNJ7vdbR8BSrfNct9PhAibCBN",
  "key17": "4ZDXns7F7W5rjxpwwqDtDGVMcSrqy6tZBPbzo77NSPcDNwmgwGvTbuAuUV8q9kuSmWk2yw7mvs3WPhZ6rYHaitcJ",
  "key18": "2eg7Gm1BgnZcudaQ4FPwqTc5oaNKbofGFKmfEE4VB26fRehatoLXkHCb1Rdg3k2sPtL2fdtG9CPfER3a8LxiAy5d",
  "key19": "5VyQohtrUTi1XUZyiiXhjnjLHLqyR5Po3QC5Lezy8Kjf7NXYuXGEHDk38v4kxseoZSK78uxx4veU4UUkr62bt2k8",
  "key20": "5m9SzPmqbLmJ9TxehvwwBwF46hYQceuXXBvddNVJaq1GmpQPpwGYxPzvSLyLZAFRzsBVFcvFZYZSrwrXfhC63moX",
  "key21": "4ZGhrfh47ivdKvRdBDYMticQ5B1nP2aauiDMx58hBrAjtQzeAUhKhzEY6oXU3oHZHQjyQDQhRy6mgB7snSYt7kk3",
  "key22": "3jCJZfU5Meyhi5i1Y42rRVrVoUEVoQqzdt3W8jFzfNa3erHTi8ciE9gGH9BKyuxYuVR3b5ZMnwtZBMBJY8tHLZi9",
  "key23": "bFFAS5Vs5FJXC5HvrTgpa3WXjT9gZqSNePfbpnD132zPGPoyJ6We9YmQcS4ajL5kpS1sBhLrUmnb62vW9YarNf4",
  "key24": "5ExKJeZ43c2bGdS4Hf8Rf8ci7eLDiF7MjZWawXCBXqmSgSd4G7YGNhfxePDdsWeZXhjCciTh8Wjy2FTv762W2Ma1",
  "key25": "3vFXZ4nDCt69QXZrNkmGuRNsruouvJk48fs1fHnsVic5N3GUqWN3UtJgezr8Yupoweahivhkvexe2DiyM3pLSpgZ",
  "key26": "2C5z6jvJqaR13RTNE2oiu3mEeRs7EHdgApaLKMehAsHNR6k9RCghUZC6Vzfo2sXMLH2LJU8eSshcSMNNiqD9myxy",
  "key27": "TkjA2dfQ2P6MDupoT2XCATDHh5rArVFGrqvCy5YxTJXxGYAQwAXTxx9jBqQuH161ZyARHYNbSVsX6NN4hnsH5YP",
  "key28": "4zKJ4JhyHN85h8s7uwkVuPoFKWAKVWap8kbRFoiDFaShMqWCdegf3P3eX1wnr8nB7tiqUmMkvgXJSnBkR141ZwNy",
  "key29": "3uXmvcnugEvDi2FFpCK2qewxaxYB4cuM1pecoR1NEzEj24yKsELigxeCivq4t3pXWcbc8mm7W8aBmLytdvQyt9A5",
  "key30": "3eesgjZc7ZqDY7LGA93sRKEP81YVpSbii7G7gvqvC3dcKaJUfsP15tpjg1AtbfmVPE3r1JJ1oTFsUYGvwCxmL8Nh",
  "key31": "667BfaqqP6F6c7t4zWbz4xaj7SMzvBrt4zv6bymQp7iakLELHHpmWgg1LyVoTwMXfkLREhW6Tz29CQHR8M78dcd7",
  "key32": "3CN8R4J33zu4U8zuyXNWvzjPqT7DNCuHMMAPdLCMbhH6cL9pojtJRDRyTqhBq4giHmyKbGwq5du4HEvjPpk7x3QU",
  "key33": "4WqBkFAxsBJP2mSaxV6bg2Cb8zWQ4sG8y644ZJ43yKZXXiMdVNoYzgVpeyLDXdaHHSHmUDJAVPw4W4xuoxH7PMPW",
  "key34": "62x7wXc3xEMt3X2rrHiHCcBvbgF9yXTYwDKhMuHtb7hq67SY2ZQEQXv5fWKVsY6bzWq4Tk7hfdU2XakD8cAuBcEi",
  "key35": "4GeWokKgUjkR4umW4DmmjTNgftsp2qmRUsTBXdnN4rr2zhrJWDJ4B5xpe15gaJC3MwHuPDxTSUXtafbBi8bY5AdL",
  "key36": "2jez6iCmhmBwZCHS7r7Vg23nZTfi6E6dieH8nCkFCTWbZ35Qd4s1QSZpFRV5yUNW6dNjqxtVjSxbti63SQjJpiVr",
  "key37": "bdzJ3StujbPEic9miD2XtVVPE7yYBBYp3cheQWNRtR8Va5WghC2QuvcVNAQLrhzvYWeERaC5q9UpypnJkZREZd5",
  "key38": "4bFmkqZDqHYMXnVyoXoDNTNkgTtv4KCRhhdX42GMAm5imkYZm6De1yuY4KiRySHQtd3ZnhGpojU76JFi9gPcG6R4",
  "key39": "4aEqXgDqz2SEwa7NbAqnNXfpZvcP5RGez4fxXvtDEbeXrgo4Gi8c2zJUHm3LpPVJ14ciZHrLotujZ9ZrLs3tgXQY",
  "key40": "2gX82i4eKaHcVLNEWfKGRngAM1iG7iLiKYHJiUMvrfek6JeCWePo2ZKG3zc8pNwXEDFX4QLbRnmF2BzardYwe3ai",
  "key41": "4szdgSE9jPzPyqHLP3iKx6FLRdEdeUqT7f3PrVNTkczmioZNLrHfzE6LRaq9UsTUnUSvHcKf9EZGHs2nWQXKV1Ts",
  "key42": "5pBsXyBvmJ6QFzMHk8d2NXGEjo7qitbGeYCxpLpaM9FkMsGPuMKZCSNpU4wbRkJ6vCTMqW4DDfPm2DFJJccuLn5f",
  "key43": "2j21wiGgXjAzD74MJKEYMmaipjB6rn1wUEC8ZjjS9pUiThJVKSpEbEVvFE3Qe8JSRcxNMt1pYYd5v3KCFncAsDRC",
  "key44": "5s6v3wkaeeYxQhtoohPKj657uiNT7eU1s933VuYYYpWFRB4TvAWSSXwWtLZR2mWW5FttDUJ6B635z85JQYckHzaF"
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
