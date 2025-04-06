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
    "5vZBSCr1M7A3aFUkw7reyrNvaRTydgDGtgudAxo2RPsqoAnSDnrxFL15c2B3zkQYh7tdSvpna5u3yHQvnZ3QFBCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8HUnx9KJ8Zvbg9DkqwjHy2iPd42SkHgbQ5RZsynGaKMzge16VyYfXoM9n3EUjGZSkqhrc3Km4kwdiA933Svzop",
  "key1": "4DQfNoG21YU8hHXu99f7haoQrFXAaJpAxPzhsLwfebbi1UsD1YiLyGQJVipiUgcm9pk52DYGdHQ3y2Zc237mTMD1",
  "key2": "5UGjnhZjTjFMQtRuJKrc26RbAaz37Nr2S5UZfKshN4fwRbAmseg3bPENcLcnGDVt8cuKmZnbdGjC7ELaxDsecQKX",
  "key3": "kekVj7y2DNTPp6qevco2Hc9Uf3PGHnmunKpuqk2Jb4DB3WATmBtQGCjQf2XtK4AU4uVx7fyaugAdri6vdZh1kd9",
  "key4": "318PhDb42sPWoAaq7RfuqSHveDtNMor5eZAxP363kpr1aDbERcnBNChJzjRuNEWLdEZEfEpDbSM56uqmz1Xo9vGN",
  "key5": "3XC3MMCkyBu4g34turNVzMwPTvABZ5rrwQknsoA91wQC2d8rrjeZ1csAbd6cVvBQb93s5RyJSj2ATg8DzUtWC7r2",
  "key6": "3U2ywxHoRtMP5xxJhDMAk8aAQQ4hHa2wNp2Qv5kctm7gnB2Ze39NJ6rJGqy9GVN1HPYNSsArHiEaJcaZyLHYTVCq",
  "key7": "5uqqoPVJNHqNzehaQhSMaXcmW22LXCqio65WXQHvStyShj7sax8DpxPCiuDztzKqDM2oBiAxChBUxTYJmdBkDznJ",
  "key8": "uoxDCTQEMqU77DRURyb9LeR1inQpC6HsVEbjv6N9k5baTcSvCNMify6y9Z4YvLk84Tq8cmZRpBpuWhCZKqFkuVC",
  "key9": "4SaCgh4oLUbtP1Z5haTgYMpJfL5DaH2qqmgEJUBZDNJegdpzTrvTJtGVHXEc8n3k26fmLfDZMMifdGpf3Ca1Eq4w",
  "key10": "2bdCbyHBUWfghHEyWqf6iVfjptizjy1tCCt9agbk9wFmkAaGaexmZa4gjNb9oBrRxSwx81KzcchwTxP8vrj1th9A",
  "key11": "26SUJaPq1Jv6YB2sroQTLAAemRKjb5PVFHgmVH9zUxrjcarLXQSWFnhpTgntXGfBjZXVJH2C1T1oibkb3xQD5FbT",
  "key12": "36cQE6vgKNPdCycWmwubgUPon6aYFJzevRFxq9aPzhf5RGYs6iY3xdNDNMDMUpQAtGKiXs5hei8DdnWgKxye4pxy",
  "key13": "489TG3XGTXgdxjJ6SaNDScaBYeH542UgDj5hAoGWiCMKkM8RNQAmNKQ8T2j9aEb6T5MXrYqQ6MRQzAexstpwaLSV",
  "key14": "zGikbJ6LEvLczrvrX1Uhmg5SVeUD3EgHJwnkfTWRWoAyhxeYj55FMdtymwiWFxWY4gEeHBru9fQs6jV2j46YxHd",
  "key15": "4VKyuXucBUUmMKxfQTbviUc4foZvygHt3GfJn7xeCBqWiVDLZmFxYjrEpL6d1VidzhgUF8JDkVLijHnRJNfJSwet",
  "key16": "3xNfPwB63mSw6JYrhUc5Quem7xo8BKr9b7S6SWsh8pY46jSQVkAzYHyj5NnUqKgqkKounF7yzhRtdWGAFDqojcqB",
  "key17": "4gyiekyp8sneWzqDoYwBAEE1dpY38xf5nQZSjmcw1pFdPGK5Sz9v7V5M8ZYm3qFeSHKuJaq7xZk2ydNAduCNUkLa",
  "key18": "4YvzfwXwnVnFq5tF5uPVFAgy5n88zz6QbBzTMBmExNzDuCErBTDjzaBF7W1VARW6x1mt4rq3HpdMkWQ2skiTLxyr",
  "key19": "3QKucPga9G34qCjpRcqu9A9A51CSbDhbaAbXdNJ9dCSpY9jE36XxAH1PWd8qBLDW8TBbNyjMv9kPwFcaNrRBsLj9",
  "key20": "3YDNg13RheHxzpsi5vc3u2DdCXZ1PihTfwkiGKa6mCsrEuwvN1ogH21ntA9d3wqLbmsvBo9vJo83YHY1Wm3Dbh4h",
  "key21": "3dEFFbyKyo9JkDsshNB5CWd3HPRknBvKqNRyQSAZrGkfV2m7NN37yhGuh9yypNeix72PrvrbsnznPW8A2a1oM8Mf",
  "key22": "3dehioncSZe3uHTbjdMmwMofevTnxNbvFkQ7TX5xrHgRCm7udJVLS6rDEKZ4ufPLHWDjXSVn2LyxzN2WtDJr2NxJ",
  "key23": "2QJp858PLeFN3aDLGzo5HTgSymeKwUHsoG8MNBN1oaoFy6hZo1g8gyXQEprNERhj3U6Brxx2aEYLFoixXeh21eWx",
  "key24": "4fZ27yEsLPV3KPvTm65yGLo4EFPMthz89TeLCV4cotube9eczvz28GTHdGFJdsfwbQctYABAYUrmqnyjnkQYUHuq",
  "key25": "4oWsYxfvXFVP4aTzLCa8tXyps4vnaGkMXSVA8t7btLVQbWHafRGSVb3pK363CetikwrqaDmZYH5VRA46UVxePpwf",
  "key26": "5ptda2zbJASXQqHXbEAXsvyY5yvEge6PSsgcD3mUL3cyeYt5uEawaTqwKnmh1XB13zyKCPdabyCiENjGPcH8eRHc",
  "key27": "5GPW9wZwnHmGhz8W5KDJ2WAjtW4dKMKKwihhHqaqEzRzcAZuN5Pz7qQWP42KvfSjZk9WNiakn5DWXevGEXSHx4cs",
  "key28": "5sx1NjTiwqyUrBndPwXXdJCd8RQGmRG4dUHqerWUYCdCjDtUjwwTAqgcbSjAboT77rAabQVo23x9FPQUYMbzyGQ9",
  "key29": "2iPVZgt55a63dEbwmiYQqSX4NP3uwLM12kBJivnt2HDMDgGdgSnTEGeGBLLQd3Gt4jV9GfmU5F2QdAXKwsfNR68U",
  "key30": "aEn7fjL4oahcQqF4vDdVzMcsDTvLBceohjiTtEinhLWrzgvnNNbkmCFZsjKtwsiGbx2JhJZDmvxfE22NaqmnQQd",
  "key31": "3Zm5LF6TazFWGZZ6bA7PS2xRD67sGi2CeWkN7DGL7YTgKNT59sLfyPPkGV7Ufm9EC1g9RspxaJmc2Fukeg8H5HNj",
  "key32": "43evo52mr1q86xP64yUbdQv49Uyoa38oR7Dcv4oa1mCArWJtBdwNcyedeqoZQLboxUdgKoyw6BRiMFZVRgycFgQL",
  "key33": "XV7RyorTDffgryNm3Nq9rfWQ2ZxeTPhYCYQ3tcfZEW2etJPeYUhJGTZ9SEJ7Poqc5ACXxxfr8gSSkFZpPiY9wFF",
  "key34": "5UtHApFBEZDKKJdxYphj8fasQhgTotXYoWMYGuuPvPVJBiHQqsbLdUujLiyjyf8BhLaDUmsqJwweV7G8Tth7Tuhk",
  "key35": "5pwCvMqGbFxQSBhcmmJteWdz14VuFSaGDx2KKj9RMqUC8J2Nd9WkFePADVurkYHM52XqfH9Ku5Uk87xF2mp57pzc",
  "key36": "6214kQtX2Nc34Tp2NQfrN5kLBFvHpF9cfT9QcK69xpVv9A93VUzcpLHXfW6DfsqctL9eHU8uNbYPcG8CSMv6nKPZ",
  "key37": "3r1BPezPxKNk3C8NpDR8rBGV2YNcxUXVHNSkQe3NBqRExqEkHAbpyuzKJKs1whRwnHzn4NLCbYxCiLTdNtRbGySH",
  "key38": "4p1SnZFkXpmPZ6KoXeZoGd59GQtb1w2YtKoTeJeqBfSy2oXF2Tjh3isBHxgueobdoDYz55d59Ne4sdsahazyMyu8",
  "key39": "3bWPxqVzgvC3U1Vd6W6MEwJxNrv6tnZ5fFsX3ewvPaj5bwdn8jtSwFtdh164yb7L4a8V3d3n8qdxr1rr1W67i4Vq",
  "key40": "3QpzqRk22qpV8fRcQXbYHmrdPDV5mMKxn5aVz6aAJE4jjYf6daM9J7erd4oVWXR8fjy9dpoYPWpAzDzMEsEKHm7D",
  "key41": "aKw38KpRjpdVmcwVEf5yCg48ZLmKup2RzKnJxQ6FERmCt6iFwGe28K2oB1ddiLhNAcorhLfqbZMSfxW7svdNiWH",
  "key42": "gECFSnFwFrtGNvs9qfkHCBGvbnMrAbdskTT4b9CTiFxLj5M3zbZ1teE7LL8TDTzHZJmWCP2ZeGJEhVGdKemgtRN",
  "key43": "3HEApP72FJWrCMHJsgzrKqPLytTdVNyaWWyuJNLmCEugVLFTAKb8DLXxYHycPgy8Gthc678SC7rPjQqXqwLEFPhm",
  "key44": "5jUvNhxiiCZRA4kEYyqiUZdN9HDYbAcHtKsSiSweyELQSiG4D8T9e3p4Qp4KmN4XUpaeuY6vGCdFpWerhPR49F7A",
  "key45": "3AferrAPWtqCpNL7BmhcebvGYv7E8USHjddRDAasPK4vMMo8B6QEBsDqy3xRBFvwHP9bGVsTznGs7Lkq5U6AQS3j",
  "key46": "d8sZmcCrsPkYgdSrR4k93YTFQYs47zgFoEF3z8pt2Ge1utAiSsfnCUFaicQycx1jVoFJpiqHM9hPwxq1ug5aJB9"
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
