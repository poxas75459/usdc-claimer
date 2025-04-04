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
    "3RQo4AGVGA5pyX3dbe9o23DTByqM4gwrQ5vXeeiJY45bfPLnjX7qrNgnuUBbq6X1HyrXfMunFn2pFZNcRrgmSQmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZZm5oyWjT8MH36b4UZ3o74jJS1koCwwQJSKt1RNmtZAZjdFMkajWGfWXNEyfhxPt7wXHxWF2HSHzyj3rQfL2G7",
  "key1": "28PYLk28YBeX7aJaGbzTz17iMexfgNWFpe7unsU3ujELzbysR5nezJKiEPMmwAzd5kh9NCVFM4TB2ZyoEk2Dw1mK",
  "key2": "5pYA9R1NLPq5vuURbHXRkftGNAgb5WAvEDiqkMdoGUs1oAHTQzu3izGCqp2xGYC9kZT8F2PQ79JPCfAhxjznRyg3",
  "key3": "2dizsA6pHKB5YWSkNjEmRBa1qjycZRPoizngZYhraRbdiy1d4bYSyMsM7X68oU8ozpLQ73Y5ey1zMCZ3Tcg2GFaS",
  "key4": "3TazZWJzQBAciat7ubwgfUqQ7xzXBY9AfX1XHDFgYovFKaMDwbwehqq5S6agA78BEVoBhidXRfpv4bTVCss1hYES",
  "key5": "oiSLMASGqkwKgwPhMxDsLLtFLSv6hS6aBoHcgZKKNcP4g2WwpqcF3SPhHUf7bzNBTdyS4jBsH5L1SwhbVrdYyHc",
  "key6": "5a9Fp3Rw1Ybq4Te2dToFNK2oVZcByajezQsc6oSF19TktXZZUELhQhuQ28MaxtDi1WJg2yyoCvJVpMQPSXRRkXFu",
  "key7": "3F1fNs9PQm5qY1p1A267yTmo9EbBHaMcqkraLbeDgccuJA7rCMBwZaXQ3c3UZfSfnUgJLmpu17uzU33Ti62AiUGH",
  "key8": "39kLjspGHfeouWnHCFfSp4foUPaY1b9k5Q9MWy1CRvYYQ7QaCoyixHeKFPWEn95L3bkBnCFYuq7wnDcUFHAVELpq",
  "key9": "2rKY5gXgkrU5br3FVP9ofrUjnbtKNaM6qZwDmhEMRmbJuPA3LxcNah1AepHMeYL7TTUsvCVBdSCpDmujNwS3vinK",
  "key10": "2mo5FQFCRPzN17mQpfg1EWYMSz1uP3zzvVNU6nnGSVHKDq6FTTLcGMQiJt3QRrD8rDoM9XoGMvKPEc7e8XBM9mcv",
  "key11": "4sKG5JbZJtJvbAGeWMJgJqDSs4D9a6rEtpFR535hKc98s25iR5iFw5M1JVWvnpzkFex1cH7Gq4sCCJpCn8eBqj96",
  "key12": "3nSSWH3jgFTftvUGq1KfDafnRg5krCP7rsgohbY63mkpktd8MijvzYTmK2ng4NjQdAUXWkjUZUEAdsMzjVmnsGDX",
  "key13": "22kRExSDozuCrN5M9FvkabFFa5PgxLnjCYoE8Ds8VcU7jbZLRhjjvV1SVYhQA2TUC1FKMNkk9bCWfY86yzffDPWN",
  "key14": "5XmU5xDFHr3JaCKMguSqauxevodd9Pv2eDAjwJBua5nWrDADRBU6nJPyu7EUJtF5tpkhtEbUQNiVhwV7sYHuZ5Mj",
  "key15": "4azGU4v3fUVZrWqUSUkBN3s4aPs22WwiQjhbGLkZiVn8y9tUdJGeePrafeQn7hvaWkZrKHnE485gy2Ck3kX8i98G",
  "key16": "2RBbihtKC921HWcBeQPxKwA5SQCSQiwvaedxSa7HDfbPCTkpn8fsZSZsZ9jUqNzBaWiz5JddgNc17AUquV1C9zh7",
  "key17": "4NsvKCTCAyNGM3LBmtTkJi2H3mE86Nqmk1peGotCfJQXTyeFkrk777wNRRiEpmgQhckVSbRdFm5v9eqTTpNEo9va",
  "key18": "5jB8R3YDz1rronTsHc1ieM2ZgrXGWovnTHBEGiUXrupvER5wDVnaAvzNVsr4qJxVN5375ZcBt5KbR7y4ABtRvGir",
  "key19": "3Zkba9Dn25yWXTixVYTLAcheDpVwHZAiDWPbdRuED4SCd7KM8MWKBD6YfzAif4i9reC9yFyQMjJ5F8tG7JzwG7PU",
  "key20": "7szzYdBHiTJDrUuZXtJBv1qDshvE58DvvDaPVM7BuP7sYShd5rmabVJmMscYvx6Rcs9rXKrqkyek5DitZChiTst",
  "key21": "2yfxJgaPy36EEGCrRyUvctv5uJWQbKeEgWFUmKPvFwNwtNeZNbB25HRyeDAno4rsARQ4FU5dxCBJRSYwcPdSNjxX",
  "key22": "2sZSSJYJhMPc2vWB78Xr1qodxRpYCrjaRE4CmVnKSvDsq2YAGVqGgNauAo29nPBPE7M8ykUf1Bvzyq2eznfKpcMj",
  "key23": "41fmxAQ5M8GpCKgWPZHNHQsPoJqxPekrEfESkMyDWGYDrKznvSwvU2wxfhQBfky1E4htS8sWSu7Z3ThqDkk73HH",
  "key24": "q77mrtia59y4RzM3UwUjQDXdEZJCY9NHjnLHNzTwm3hbG8BGhYibqPnqZeLktFEReqhVbGSxrSbGGea28S2j1Vq",
  "key25": "4S5bfZubazAxM8ajMFzX15fpDDGNVu8PSzJuuLGhUVDK9SYYHLrXFNPcDfuJTuiTuDCnJ5kZwRebYZd6Rn2y91wt",
  "key26": "4XarNcWbZN7qZN7MNzeoTS9oixnkPfyFXNniyo6D9dHAjjhcVaHVcUDwi61dDF8zFzigU5euMgxwyMp2JseZLKUG",
  "key27": "4BQiGs7YwcrVd9Uoax3TADuaVbrkDGF4DnzvQf8JkBZyFXvEcoPk1RniPBJPzb2PGxoyqADj37GJokqT7hXtjpEg",
  "key28": "2s7o8AKZoGWBE9gafZGw43uNf2mRspBCz55E1xhS95EUk8i9BKU783VPfp1DMtT1GHMd7h5cfBKmquAjqzu7qn3M",
  "key29": "88KifsBe6vEC7RxHYkvafL7PasKZiMhvLVojcGLvwUkaG2dKyDLpvVnvL6ZKQXnMuGGYUdsy6aKA6jDPyBsFaJB",
  "key30": "5V61NM9Mh5fKg85vKcBzMJ4CKs2tNcSBMu1so3Ffb7KzHvN16neJEQ8XbVrncSCFauR943XWVBjJi7osgD8NNqUb",
  "key31": "3dPpFExX71nXNfxGbPkG6STWYvr9bgb6BymKarSyS5yxUgVfxW15rjGRhohrFyuwLpskmVvzaFgUNKcNLAt1ssMk",
  "key32": "4ZA7gQmBsCxHjJT7B5Vo7UpCzQiVN58ytDGMDgm5JmKthsLKbiCrMBMxa8PnQijeWwU7YMvC9dSuse27ioH8YEU4",
  "key33": "3ybeypTGNrWspMiXySi4RhHUdocY6oupzaWYByQhQJoSXYLaB24d7NPhjwZXvcSmi19HFozPkxQJtKZmchLU5y3k",
  "key34": "5vwt5DRgFp1AzMLznn2JNDvBgkvHFrtuaJdw7PoYAX2QhJu394VTMwYfu38xSH3U45MDVUSByYCkJUvq3NhWsxGP",
  "key35": "5MSo3gptCx7uzWgbMnTdjBCpXYSM5Y6eqX5oNvCYzqTYvixrE489Z5AVdpZxyuv7BE3unLdT5FJAPi5YRF2oNHCv",
  "key36": "4E2mWDFSbNpkcJ3DJ6h3PY5FgENhjpeTa2uus2fGkZcoARGFbuX675TSgipX7rnWyANeyUfyxNHWXY9nXNwJDHHB",
  "key37": "2buCZV3ZMprVoJp332FT8MPBwgCuAZ1JkDJJUxPCpxGLPk1vo7tyoBd6UUy4qGC4hYGB4zSYK9uBG3yXAWyFeGEu",
  "key38": "46hU5aCq5ibdsrr6NsCXXXr3DdSGDaDitwXBBGqGFMSsLbVSKpaX8iHVd7vXZeNmiN2LfXychjQtkEozfQZ7GaKF",
  "key39": "5x8XsyB19F8vbqBVf6Nb2vxdtTj6zxGiNiLbxhk3SMrZy861FNxsxgw77qWpCuYmcM4BREQVGErvjZEW4bBpJChZ",
  "key40": "3TouHwJRdbQT1ZqjzqvieFJ1QbKGxHQwht2gybbDUmBndELwA58tcunRjkJRbGAHxNXhYv6pF2rZ2yfh1vgdcAw9",
  "key41": "2DQukmpBxXzpwAKanbDH7pF5pzv9Dt9RcTKZeKfoPpmh5kiWj8446PPx3R1zVz5A4WtsFcKs5TuQ7w3FGjM2fje3",
  "key42": "2JUUq8Pp9APfVR1HEZmSn7ZHAJBgBBt1ZaZT52KsMptqJPKh4BEP9yABfJjCPZvuVacLg5BVWJ2dfWc2dq5Pgadb",
  "key43": "cG8mhJ7WTTaF7AT9HCRvagcNDD5AF4d7VkbfJ7cKtzoCsY9ndrJ7D1F7AHVQJkiLAfTwtnEhqRmPQdUCLxTaovn",
  "key44": "4YUWhZrVt49CGDPcBD6eTNTne4sAasqkN2Gcx7h67jazftLwWhg6U4xaHuuiqWfWzhaNvAVRyTS883ToCeCFmFrH",
  "key45": "ztaucnfAeAY6q1NB5UNXo6VdHhZ4nRZxGWNMC2XaaASg7G44dFTAFft1iEeNPqw9LyDU9aZfAYwMBiSmpwTKFeA"
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
