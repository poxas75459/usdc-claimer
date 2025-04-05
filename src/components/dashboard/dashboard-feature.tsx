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
    "2bmb97zFT71et3HMVie4oRfKXRpWbTwWVzr3SbPF71ucFnx5EcSpsic1oz9ZgvG2T2mG9pm7NHhmsCELDPmTy8gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5p6y4w1KU4bVVnk5i9V8LDMNHEu2iA3HjtLVQNyPVDHAYTxWAfcVbjNUmbX1cJbwC2bmidcfZjrFECJ6b9xwCJ",
  "key1": "2xUEaRBaUpdnhTpKk5eVHK8tyyFF7o3SAY4eYGmw25JukdEsqDFzFoYBEjbkECz1Si161VqYbwkGLyXJcZqYcGEo",
  "key2": "3RKk9ktoTcFG68zaUzKHt3PThJXtY3aHWKkjwTaroJXqioye3ub3kY285E14DhzduFogy6WjUvYB9wAbqAhMuceh",
  "key3": "45piNmnQqoPpsFpk9fmZhdZTMtra6n6n3xcvppATjMaFSqza5xNikFwgY2GZamkQtf32gBZp41aCSV479Ebdarnn",
  "key4": "3PP6pM8dTkwrq8r9zjs9kxavNnzEEDNykCrrLt85pbtzaoev3NWn38srgpgdFTYamvRhpqZPCibjaoTLyc9jk1e3",
  "key5": "29TKdMiKuP4pNsBtgFxUPLKtc2Nmw8cYDnGDzF9m5a1qnakaX3nEW45szyZrZSCSgD2LRwrJCbJfg1VADQPHCVn9",
  "key6": "3GWrojtX7fTjguVBwzeLTSPBUYV8EL1zt4Hbn4EtJDttzaGqMj5yJN2tAvg2ZJfhsWhU4Nrjw6HXQEZcvb4fLMjK",
  "key7": "57gH4BydYWwUwFjTvioUvdTyftFhAqkXikvn4wDf3WeNBeSj6u6PBhpTHAGbH5qQtQmaNz5jUuNHxDaDXTbt5T31",
  "key8": "4ULBN6WLUU9ee84Djr2bHY57TuYchmQ1tpmPF8PV4PqgFs1kZEkgEU8GvshrAFDJ6h9x4GyTTAuMvRHrw8Az8TEy",
  "key9": "4o2StGZRo4VCxp1tmqrHK3ESbGR6ZjJQ6hU8hF3kSd69rWz9q7Kpc6Fj4Z6RTifgBN8nGmJxA6FVc1spL7vcK4PE",
  "key10": "3okUFfgTpmEsPx14xmv96rAKh7yNfR9U5Xj8dmxSZsj5GuhvRZ9oxdSVesqe1UxwFmJujNqCJzo6YEGvQkWLQdJS",
  "key11": "5tMFoQXHZoGZSEadfATtxm5DcmGjbvEKC4HwU43xxy5TtQTV4d2c7DfrBAmZmb6p1DAsYWjqbRTdtcsiiVZ9mjMv",
  "key12": "41VhWubcwEtciEnMw4F6x4zTmPTWpEPsjVBzKhAp4UAuUnGXvXvXSYxcbwpTVL1CoF9zcqhEnUS9K7kM7t6kZJSM",
  "key13": "3HtCb3xqK1TjfFQ9eDPWtMg2NtfBVnxFYkifqFKey33PMUmFSSFwaKa9BNYdALDp3qUqkqBFiUEBhjSMuv7DmvLv",
  "key14": "2KeCoVHH7zrE9rMsYG4H5DNtY8yjdEuGf596wKBP6geur5mdSoiuwLfEuzMsoSG7mqnex39oj7zJQXDzNRFrujyH",
  "key15": "2u6oDHeXyE6mLs3LYNU5o6pdBftGsjxbNExXEm2HWoVxHbwbfJxsT8w3f5Tez3w3R7sesWZpr45u4Avz4ERTuYpr",
  "key16": "3GMLKVeR7DjKs49g8WfghMFAeBykjYeUdhaG8bwVDdpftGouLJY5wyEzzQds1f6wLqT6sJSftpAvSKNx14orQDjH",
  "key17": "3jGzXJjnEHCA3D2xSkDRBgAPgPtXE9pbd5doEhP8ZAAPRL923StCr8T1F7nnurrJAMizDdvwoF4svESFyGjsbqkA",
  "key18": "5g1oUm9zJjSRz6WAYJVdkXYXG88bzwZTFhiivuySw1JGyVnshCBcJ2g97seVXaGmtES2whxme1tppzqUhUFuRNEr",
  "key19": "433owSzckYwwGnBLL8TqkZ3aCB3Hx4iM8ELYFr18JF1Ss5F1BZEVNxniA5zvDewdPjiyUmf9w7pSh9JzTLyEh9bn",
  "key20": "5WAyhr8NxqiThMwHujsC7HmFqtHKwkHaBWpdkjy8cH6PF7iVJBdru9Qu9kmSR6DAVettowTeXewMq9rQok6KamPJ",
  "key21": "3jw7XCBpr3k7zXFaEjUA8XC8NADXfCnx5cVYBoPR9ZYEk1gGrfdLi3Qe3eCfaEtSsgicSdnoFGWA83H5WR467rXa",
  "key22": "4V89GX5WUFatkGTsSYJHNU8cjbwfKWvn5hYJmmb8FDDpDdbWYGan3AnbGK3o9wUrKLd6JHuPzDT9aNhAowFGS4ji",
  "key23": "5SvUZcd7KwzcXH7WrZTx2jJeMgcw1fH9x7FRUmhEPgf5CSamT1ssi7f7eUY8AbQc8DQHdNiYwdU15nywZocsE1CG",
  "key24": "4Y7ihsnp3kKA82s5CkFTsHTiGfcVyJt4987mtUWRE7Y9zUCbLEvJYKeUFPv3xmCUbLhwPrfB3YqyLBuT4fSzFAYd",
  "key25": "SxrqwRAkztcUN7kLMQKg1w5xagjqZbFY4eTJYEj7dCZLJkcKLP9gkhS2eX2tHvxaSq7z5bqC8qqW8AuaZEdiZ9j",
  "key26": "4kA8y3b4JSYVexSMDchX98hpjVorXfTv1ipjuXufi5rsHbN9wcQyW2VAywx6NuQoeNaoU3DZrqtLzXhFpiSBA9x4",
  "key27": "5WMo1aEnzs6d9Gmcy4GuuaQUwLAk9WDXiFKJGU86h2FL7myP9JfQ1eacN3Txtg1n9rBGv6JRf5zzrMgc9xvdbzHu",
  "key28": "4J5EGgafRkrJhZFysW3Myjk7FPJBMLUcgQHBNEWGHFn1hRCFY8cPWrWJzqaRbmK37BXeKDGieHDbEyyGiQkQteEd",
  "key29": "E8qERfEkCsyDzHNs11qWURDS6K4j1LGqb4ctrWGuTM6gETotzk9MnwK1BqucUy7nLCo9WvkCEQhkUhzuc6De21k",
  "key30": "4kXkmx81mKLunbSdQTp2UTLBMDgQzJoQy57gRZ1TfEpovSjkywGmUvG4nAA88sVPXFS6xkNXpydkhjP1Gdy4gqng",
  "key31": "5SvYGT43YoJWnizaGGxjpvuaiCub1PtBq4arNjpXkwntFePyZuhnu2w4oBvYbVTcfhv6VfCzNPZudkL8SDuGQL2S",
  "key32": "3Gdm3mvJiyELTr1XSFEmc2b6kwpM4DFWjJ5UcGgYi6hprsnAajFZAF7R3kYxHnnG46xAcxvvzAk4rSsjuEDRjrfK",
  "key33": "mYW1BM9DLcPFkfju3Fdtun3N9yi4h67vZogCq8S8bxZXvu7CmvcBs57A9d1CY2VJHXVf1r6U5VM3CSKJP9x4qNw",
  "key34": "3sfx4ZSXbrRv6yiqpizSGRhzZKXMEZDKRzWc2J1y15cTCVmqqtk2dzu9C4Uez34CPih2CUD1Xoc9moHhuogB3GE8",
  "key35": "7Ro1FTwWUDWkBgJ9vSsSJL2durhiog4wSXpSptXHm2QBACo5YD52MqfvzjEyqRQdwzFWGZGFykyhwULWoE4aWH4",
  "key36": "5t17aYPfp51gJ1vc6x5e91s3t1DeJRGT3G4HJj9DtAw1TLGhteLenFA918EP2oHVkZ3gL7XpgAHEKDedCAmGz2rm",
  "key37": "2rQJHDoaQjfDuC8BxZvsBuiozxUCQYjME46wJsY3gbHSbDcLs4Gu5Ym9QJwn3aZrWTWeL4tt1Kr4LjYHYgDt6WNq",
  "key38": "4iYyPksPDHAMKo3dFornqZb87p2E9DsMRoDvVQEyeJoJZBZJEHz4YWcJLbGDeXqbKfip1jPym1EzUX3N7VVyhMUj",
  "key39": "hcRRKajKdh46Yw5omTEAAnxAtGgwyxqtLfWCymbKKHPwpcysNkiKPggifvS9GYy6h9CrPKRU2tmUiGadCR5wadA",
  "key40": "3s9BD583L6hWK9s5DaqdXwkAJjEpGhiM732365S6KQWEAMomYtqozygmTDRWqHavFD8Xt8xyMCegwmdFQ1n7Jg5R",
  "key41": "3ip2P6yeiLyfF6qrC5Cu9ig67gxEsQ6XH8qVz7vmVpG1GdHyocTbUm6qWCq63g9B5EihK2FugHYpsmsYqmyEhHRF",
  "key42": "9BrjMCVh8ir5rvfQfiVoBHzwEQKmHEhSzLA41JJ5npfmzJRZ9s6vWYQRtu5KyBDfXE3LFW1ASshtrktyzV6NDgy",
  "key43": "4pv5KqNKqnxJqQUSYBgJorr8jEEriZXqdNuoGWq3CqkJgjYRGQJkQPmkfAZcJUv8NxbKaxzJj3kRcFbPYeHf9oGx",
  "key44": "5ak8LjufRV8ieYSnok6Q6beanZqqZnxT1dmti26u6ZWb8WtDC9Ss6jev8U5pvGM45HUPcsYosoU8T1wu9xJJpjrw",
  "key45": "8E4uxkB1CJESJjKQKdRXKPyQ8ctiXLSD3H6kDuoLTgs1KwiS4d8LQhicxPf9iCTHym4Na3eqhF4FkoL4cqyeEDZ",
  "key46": "5p55bE3gz3JfGwZTRWjkaJjJUGsnXbnw4kMyZYXfnJ9sGxmXaqCV2XtpKpbbcHQ2yA2ZSAX8XTHCU2LpmjcF3fdk"
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
