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
    "NNz9g6QCAmZAWY7ZE6c23U6gCnYpS9vJapckkUwwieDvkU8r2VREUnNFvpwNw5a3ihx5TwxxzArvkrTdtBuSNNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NFuaZGkeUj7CZjqHG3tUX9hKNaFHyFpc9V8RYg5JJwHmFw9xrQpjJBWxu8dFvpfFbqKzSArq4s1rmLbswTk1jJn",
  "key1": "2tVDwihdx3HmbJpKzP8XcouvZ2VykFH5SVnB642TcktTuMADp9aHdCPBPrGBheXBXrSfX1WgVt4khsiqThGd9Hbb",
  "key2": "45hf6bYtT45rGcEqoboj5PaibJrxmk6roCzca3swowQfUDzHd8rhoT9Yh4jRQMLA19hSu2wMipcWLgrFLgFtYwDk",
  "key3": "5f6AGJKLR637RpVEzu4JwTojV7NQH5JNuHc3V75GpfHU4UeMoNQS4sJFBBHERpxBM62ocRU8c2BBL35GvvAXPfTD",
  "key4": "ZCku4KVge5ATQb3cW6DtEsF2kMxoFkjQCSt1iyZsr3q1a44Y4RmY189kWhDjYpsNGYcyVMu8pTZrNaymdKHwNnR",
  "key5": "4QHYpSD5vaG8fswGzunYkraQaoCxrhJRPTa3qeeemdgGegtiz9mGsKeYMqR51U6TcFT9GqKEPrykGtxek3iMxZxk",
  "key6": "4xwrt1MbgjAbS76Pqm6e2GLdYoTb7nRNKfPDxenVyft2fozPj8RxeytPaQJo8hb2TbWLVsMMeWWL4r6ysNhPmLYG",
  "key7": "4JMcaG5rcBVkaya62T5GZoz6hU4hwLen8d9ReG2MBVvB1myZpG1oSVqtgrsD7AdC8bHmxmRdo9V4ZGiAAv6EjQJQ",
  "key8": "a6FEbVhV9GzwVwXdh97E168Fti5htzbDWfvJBgk1gTMFXP8TknJAbFBQUQ1voqC6aZFBbp91d4JrxRV47GBFxiQ",
  "key9": "3k4kwoCquWxVNGUhsJ17akxAFwr1zGJ5XsNfARCvjZYTZwh9bAZVd3RmHGC38gxgxhMTY4g4jncHtJcA6vf66ZCG",
  "key10": "3rCamgnYkLCXt4TvpbDGvjdbFbwaEs6rpuAhfgP67BmxHkkxFmkCuGUYBvaHEQaXkokWQ8RhVw8jR8ExcHKc4o3N",
  "key11": "W9ECV5voCHNMeCKnV85xvWNwrkWt7Qv5jSa6UWNXf5kaMB7mfRxy2eMA8yA3jv1eTmZFL5UcAxpVJvxRtF6UqJb",
  "key12": "3cAbeFnZPdSEUiKkeAShKpYHgDyKC4Gn4GPrbgQjQkU3prWr49QxRnLwagRqR8mQ2rJUpQLpF24LqC1gwViQP2Uo",
  "key13": "3BkSitF1owN52XMDhEYuDE9qUT2xPY75YTK3sTbDZrGiNHNenoZRTbYnGm5bexQBJaBJemorpNDrFQDEUsu6kuuz",
  "key14": "4FFLSdcM7Qq4qHTRDwc8WyFAzbtZDKyksyuboDMeeQw7rpLvZWna4RkEoENWg5uTYDwW99t5LET2kZFwTYMhVFZR",
  "key15": "f5xz1Lj3GEiqvudkmWoRJg9cPsQnzB52KyPvEgrBkDgF1juMtJ3i6VhAKMZUML6PyNeY2JJvS9vvMqgTMJr5gHF",
  "key16": "3Fk1a7ijUYvQrWAsVcsZsMZg9qeMbpypdn6ZfWMmAiaAVoq73YVzG8q89wKjhGfi7bDYWW4T6udrdWrtc4MKPSY7",
  "key17": "T9V8nnnWPSGdZ73JrVpqohsS3mWx2o5cYU9Ue8znDtJJHC7JEoDw3ZJNUiTw84Yota2qA6V2zKfy2Ly71KSTmyE",
  "key18": "3PtTSSUvCZWHJ7qoVGRu852HXUNGf232JJy2pbtuUaNJ65YgvF8txiTK4rgCZi8jNAb5KFYJHMwFifodmDK9AnEv",
  "key19": "3anuKQeZkfwp2enBTeKbQHJc8PE63YDo5JtGZLvvGZBm7JkFEWy4juHRo3HZS9WtzigAfdMve6ifXVePgUS24dg4",
  "key20": "5Rj23UaAnBitmCUd4wFQgpNWpyw2zQu9yNz687eJm1vpbfKBRGK3TtNvJDLSj54xo8u1641uydSxSCdeReVCFvgh",
  "key21": "5Krin14geVTgMzP489Tx6UJo7ydktjXktZEZ8JCS825o1JCe5eYfA6Cx88jWKXG24LkBfg3hBJ3a4Qb5F5sK4Jbz",
  "key22": "4adFxidtriig4iUgP435r2EKyxYy3DrCHAa1kPgTcc5UuByizZpVAxd5PC1t3JoJRJVB7dnMHS29ZDeZjf59RYHb",
  "key23": "2BwUNQ7ND36ybNeVStJ7YdvRRU1W5bJSB6m9SDZYqZSmStmDXfvJHdgyZZxrcUGVk2DbnXwY4vsuwMNtQgooy33u",
  "key24": "4a4WCb3kLXYHg3khSVecL48sLYHwHPVAykdXPo523xF1kzqxgKz4t53sBAm1ykCquV92C11HhEkc1BYRbfn5Mqhh",
  "key25": "5hWCtPrBNKnbmozfW4vzXgBvqyYrVEDE1AW4AqH7CmhRXC8dy5px9NyQjUzJD4XdBJghTkzewUgWfRXZD2hV7zyx",
  "key26": "h4W8KpEFHcxi3tUF1cRiHCWGEPYRiRJHcFXiZcJVp3SXZMhHQgevcycpHeTCuzK8BHJ7w1AChiADghCqf9GLSFU",
  "key27": "4CbnQcigij9CVZyDgZYcuh9DmhQ4ZFts856R8x3YTuXntzFPPX7czkJbm2ddX81fHu7Kjfa8AtmuBSv12NW5dKBC",
  "key28": "2cVnvciEZFpPTqewDNxcpaABQJJQxzE7DFxhg8b52g3FWvZ5AE49bQbHqwcxDpeYgHkzLRxhXKsYdinvkBPxi5Qv",
  "key29": "4TYxVEyR4dcEXe3iAW213uG6Wxy8k9EKZNquTQBGwMvnzQRGNuMpovWZsqLwLbLNoCMvAZswCWDceDKS6oC7BzHn",
  "key30": "4SrjoA15sz7rfptbb6V2LUBMg3PwnA4mtjjppVHb5f8m2xf8yxpeAf4Uac2AhinUqUfR4CWoFeyJFSQBmSnYFzyc",
  "key31": "2fr4V5SNrYd825yHAZUbWbCvDJNwtJt8mj9QZY6u8snszXzKyXqsJHYvawbWZAhPe8ngGtuzBFgddbfLhpm4s9d9",
  "key32": "emiYMvqG4EqZADPGVxTmrkuXPpQTbAK1oLPCxx5NCucua2ZvPGMdoWcdtvbadzzYLsyK2yG3Jy9yzEvYp39g4kZ",
  "key33": "3kXbxyJyAYc5EHqRaZxhBkKHn4JQaf5FwAZARwHCVKA7u7t3SwJsqaBsbtxze9iVsbmGyC2hBNmomfGKUhTLtiPs",
  "key34": "32GcCmWVJ7DMSHjkLmMekVNSRpwo7GJcWf1PdUWwY4HPHbJ9iCc6yysSzwB8RyDThU9fcLKzKCTHkcmYskMBKmRH",
  "key35": "kgKxoYW4VVapE2KM2T3ZGpFbnqoswAyKjfappuuD4aC2v2MULsjv6HxtFH3R7GdnAkmTmWZgnYQso89Z8i92u5W",
  "key36": "x8263po1FiR3EwMf3YzsxBsmGcqDXHqiRmjVg6Fwi9umaaT1aqvr2QtQ2RTpaUKgJh8kBxuwbKpngtgbmaGEWsy",
  "key37": "3m777an8WgMssep3Ao4CaUeTU49houVrtMBkAuiRr7sdeav4FUXLFSTVxjfBaD4Xe1dvQ5wDwKaCEJZ3F4Xj3SqF",
  "key38": "BVWJA8bDMioaNpMqMEzqf2WT7HbrhX5ACMxP6DmqJ5DgRZApeSUGm2QJbb9xnVDuzye2kCUtBBnSDd8e24wRveV",
  "key39": "48tTvQJ23kCLzLpp8wshJASUW9b2WcAm6PDAnEFVHKPRn9bTVbmrf24Jos3CVczpiaJDNkMWiSzRxS7a3s8RcXHy",
  "key40": "4xAgiiCcEkrrqzdGdcDCv2BehZh7BdvrtmWKiNztRTCgpY9b88AGquTmnGR2GCiCeUT3ebxMyo7XqZYNixxjxPrD",
  "key41": "4Fan7sdiiaSbvo97q2CjFyJjfpjGyNW3QXjxSSWqd4tKGKGCB2XTxQSkvpcERAJRSybGthNvpfDqAeJHYb68BtkY",
  "key42": "6E9WPPXe1Fdf7pfZsFhNhmofVpNMUiAiukWdFpwCHGacVUcvKZpAmzHeJ39EdDNuF8Sa8nZ2H3Sk41wSChw7mgd",
  "key43": "2FmDCQaNfCR9UggVMmYhYGwX5AxDdzbEEf1uB6YuHUQAbWkb5NVAz79u9ZXvzuj2kEZFLK6TypurcRRN7MobxKKz",
  "key44": "5pqbwaGhUbZHHooXrXbt1b8p5xgKPgNrNzFWNN9vK5SBwZQc9eWevSgxU1yduqPDnLy7GPCasywRGcLkg4beTXBt",
  "key45": "6dg6aEpznS7XiXREacf9nXeiFXZDrBxQj8SkAnjsQdSxYysvWPiMN6pzmwK6joWcuYA1joaAme2AqStef9gsSss",
  "key46": "4RUPevdQd6NCtiWbk5npDLepRvKdbzkVz6qha45DcTmsP4XcBgXeTZfWMXQo52DJPR7WrSAEyDknj5V26brFGvhx",
  "key47": "4MSL42Ak1uKxEhcNum1KS4heS9obceCoiQj3f8LbXQx7BKwue4NfZYUXaHUiXJjtdf4Hs7L5gRQjVYtPVCXEtyiV",
  "key48": "5NKbJeKKFH78tZS3JvsUCCGScYNxyGtUukx9RRup9qfcQCfaKWG8VnofiQDAKmAh1LCTf3uHxhWRvHJCHLrW8xCF"
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
