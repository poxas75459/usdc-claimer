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
    "VJ8Puwsab7ukNq9xWWoqAUQgDsERLJ1rbJUPaeeTohNGztibVZ5HNX2sAYAKMfeeFFQqepSbsFKGPRqSbAu4Rh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ev1TJK6BTHcmMaKvft5rfx7am8SiiaNLqhCXD68GR2GqFbsmqU12S2beqcSwk2THjsBmpCXqoYnx3RCNiEiARvi",
  "key1": "2uy6FgR3wwwKhcD4mKQVwiFjJRqU4yezSLrdMBnzX48CTLfVqsKMN33bikW4ckNjeLwQNB8fdxEVaDrDrFCxuCys",
  "key2": "7y2dzqXee4pzHYckKspkcBybNsLZkMHAqpaGhfqCv88fDWmbBb8qfrrDuM2eUerXqfrtNLrEexx28byvPeyPs5b",
  "key3": "4JjWWgrfgavtigQ6XyyeMpnNJP3PG5bnrB7SxdKqbM95ViVqt2rmBva6VtTnYY5pxsAyJMm3MihnyVW48sUUK4Am",
  "key4": "4XiqMvmdojaomfk5AD8K6DHvoNcW81BSrZ9NoZVToTRYdC8mccz4UgfEgAHGKkntg8Gi729rEUjF1ZPkxoRBgqBw",
  "key5": "5hXhSYogjPzQBNX56qJtLhZKBkixLWBFusYgnM7kyo3R7nviNRLURwN3etTxCTTht3BunrCJrS34NGt7WL7r7GsQ",
  "key6": "3Zibjc2S66FLBAz33AoE4r5vGpzf5qwSL71WMKRPYrVZnbGVBEKXHp7figj1b6okYXNLy9HiYE12JAarDpfWDyGZ",
  "key7": "5iPJhatmq3Rw5XzENR5V8gVBi8Kqxqvi5fii514DHC4j5RJS7yXyRFur1CcFVTEVkSkrrbo9VuPmZ6PFkGzH5SWT",
  "key8": "4Fue1oVUGC7qXcMsMzKqNy5YiTRy95XmmAN3jqykCQcXA2dAHiD6jWyoZfZ9HQkbLZxF54KgwtnU99WLyvXNmefd",
  "key9": "3Z3JuSuzoUV14DcDgWdaz9Q4mPWC1QJVRKvmjR5StKBfAX4YYU9ikBd5Fm4jhg6LNSZNyFs37XdnPgHxaGUeF1Hi",
  "key10": "47bhA9w32P5QkYchay1q8oJ23dMtGRgVzj56jH7uVNk8ocEQLMVRa4TRA3s8XT42dtGiMfBaC2szJWCfb2anYKQ3",
  "key11": "2ARvGU9r8MjrXMUz7ohDqDg9KnP6xvzVUS3sna2K1d7HhrSe49fzY6jUxgat1By4ffPtNM8bN1KTW4kraPTPJHPw",
  "key12": "3RDW1UZVt5fBqfYE3RpQSkQgzoSrkKdcnUCUdmKSFvUmV1BgVgjJqKwDE5LZiThyXcriqCP2rKEVbjeodfft9tbx",
  "key13": "5AzAUrVJtraYSvDfc7oRbUv36DkxmA5eiTHE75t31anNHpj2i3PEC692sX7uqYc4cngJo7Ld2uVKhXqfXH7irr3y",
  "key14": "4cntmeJoimJyXDZThrTv3zDWRYJrc4SaGozjktZ2HbyWGhLFwjMnwr9uCV7pTtApwjwtTtnfDKc3oMrEbtLC6rn9",
  "key15": "b914TMe4VrHKrXjPof1agXdV1A9aC7hGcSNPQmXT7pRfe3txeakpNu9MB2vrwzCQe83MtPqW1YrxCtLmkj4dNL5",
  "key16": "4RxzjHh5aqV9SCv7Tw2N5KZ19PERavmNiXs6i73dLH9NiXKvymCoKLs2VWXWC6faBcZfeQMGJR3ttp7VqUbAJzXA",
  "key17": "5JCsB2bW2GUtsBwse6aqFmYEdehdNAnFWR5QTK2tiqHJaiVBGWT6iWmq1BeLFQESUAtxgj6W8oDn5RocCaS2X51E",
  "key18": "2LpatYKDnbeRiZGrFKv4KNCsZ31AEHC6f41YrkGTPeANFUukRHdEAZqtBn5u9vGSAq9XLZE2Ypxd6HpotzcRGDdC",
  "key19": "MLwnMHABCb3mVGXG92jBARBQNMLKz9nAEisgxd3ndCs5VcZHAiwy5PvTYJrZyTqrgs783yyjvEs9XknZDJVL5j8",
  "key20": "4ARJb2AcBX97NtQBbXtg6BRud1iVQAuuYCY8inDZUS5bsbExDxCxxbSLokvpa4WYLdAZ9Mm7sySSecBxgCSBbHMA",
  "key21": "58KdjHrcJiuFYVr7kzkTAzctJ2Kn55cyFYjjQGxFhFo2hL3CGzRTPWxuPFZnXNG85CdqqGV98F5RoGDUfp2Me3bu",
  "key22": "4QVjPuyp6KS9C3tNnf1bAwmC5ftZUEDRkNAPuA9BmxFdA8MBYU2DtXG7VcZZFZG43HxYjRcaaV6SXqtHvaReMRrU",
  "key23": "4DNGbxkWBdhTuMc1VxAkVptxeeyr9HX9icFDYZek3gRAjTNujYo1F9KD95LqXe3wstyvNWpH5GfxZBuzyWenw5Ar",
  "key24": "5Q7kXMjjqrdL5L123V53LqXPh55NpqYTVYQ1BPrccEUzs5KS34E4ztUE7aLtkwgNkriUWTsEfmpJyBCt5BwDtmQE",
  "key25": "62hWVevVBhzY27EwfxRfKXvkkFFn3UTzfmzMXp8CU1Zr14AkoC5iWHupiBTrZSAi3o5DUXhYUk7RzKSx8FQRAgJ8",
  "key26": "28igsoMjv3fvjzpRjg3TQguU1hysh1Hv6wwiatQBXFr3a3g7jtWySjoRt48b6AxUdfBCVLaYDTXRt3nVBLAfUuJV",
  "key27": "3DcuuTkLoSN52zswbxuEWqiCjYoPxnFPQcfXn1zTtpYbwBd6F1WBb9wrrPoPR22ATmxgfeCbaFwr17pnruSgoQEU",
  "key28": "2wRorh9kdJdEwxCA93o9cWWMMcxHJGArhuDTEPZV5Zj7x8XP3GDmnU5rXZGkDNvdyzpdhX6ibUg4Kgxea3M92WiA",
  "key29": "4u8Jq4rCK2trjJ5eyCqMmgWWXsJ5F9N6ydRd5ZDbeQBVeza792JqiukjdKBqqksU8U7VKBCn4zVVK9wjUJGoS9d9",
  "key30": "3Ugt6WPRSZaYQboNvinJPsejQH1XjCswsnyx5spRnfd8eBovapj4N7ur9zeBFGLTSiocBTdVXdcVEteLuApiEegS",
  "key31": "5VHUUs6QwdYUS6ve3iSU9rHwBU1rfWwNTAyPV97FWYwAayWaBXfhBvdy3U2tF29ctHVfLoXsx9tsEkjfwVqUrXLo",
  "key32": "5ccoW2yeqTtqqek8Mc1MAJj3wAGaJHxgF6mn3wQcieZ2ufscv3f2e4tFBRLjNnuNsRRNvECKirCUfL1ACCe8cmwi",
  "key33": "2u1PXGEUsQBmB5bAKwBDcfxAsHVR1bBUQUEPRg3DcfcFG2n1AeApQKQLhNtP6UhauyMxMXMu5GDcDBRhBhsa9p7n",
  "key34": "4RXr5D6qca42mk8Evk6K1JgSLuFPV9D1kBEJDz9ckYQLNFE3tSXdsQJzGxPktLwgYTCsQs5rRwfZKLJTVioT2mgd",
  "key35": "3X2dutxWg65tTiC8NcuCdmZBtoQ9Nr4bsBuMoveidv3K1VxXfvDXdiy3AnEw2ErjbMDwag6cAnuuE84Fbi8keqhC",
  "key36": "3fmqoaZNpYPbkhmVUaZsVStBfecDsadrtCAAs76iN7EWsupoM4ULNZRLKBQcxTcWZvAXuEMK9YXw9LvHJNextRzP"
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
