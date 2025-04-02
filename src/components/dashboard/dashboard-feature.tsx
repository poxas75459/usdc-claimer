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
    "5d8rvtYQvMThNvruvHXgbbYmq1XJc6MjUWqR6KJGiN1Sm4HGKXMUKQwrWU16iSEcE7YSpWV1EQ7bToCzThSrQztu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfK5vXeAfLuLrqZuNTMaXRT2NcJghmVJu1vh39HUEmhkJkBvXKkgg9fVXyGr6uBdBSwZCVT6GSkeeNFzbbFRrs4",
  "key1": "42Au2aEK7S5DLe1Kd5KdgP7VRSjFpGXWs8DbSVtHgHGh4sxXBuQUix3hkUtq1QrSCH1JSjxyDT1eR41tRN24zni9",
  "key2": "5WcdcFrSbmrP2iGtMeyeh7EhuL7MHmgiHUF2q4bZk7KyaGqRN4BxJFZF98pAcdRh5KwQaxtbf2sTQkANUVoGFdwS",
  "key3": "3satCnbWvhQ5DTtvumoT31tvdniko8r8734nuvUruhdXk3DUibYQ5SKFBLqWWQ738CBoBxfT4RCMyN9FqX3MTW5S",
  "key4": "67Gobcx5S27Y88Aod7zpFGr1zfZYbJgK5k5duNMaBwfsNMg1WVKs8L9vJvoTg53fAHJ3XtBxTod8AkbkppNrkdEm",
  "key5": "2morpQ7jGJ4zTJ4D4Qio5R9MrXvvTkAYw3q5D1TFoo6biTp43Y4Uy83hNw5pr9FmE2wtcDX94GGboEmSn2ogTzRv",
  "key6": "32M11gtRCqGvT3CDHH8f1sck8byFfxAsw4Fayn1P2XSznUTex26kgsUrEjM1vo4pAVDWpZZyPpUQKsKXJRtkcBQ9",
  "key7": "2hqiCyn9XfoLMtMjR8PMEScsGyuKDkFrBwaJLy8DgiGJ2zEQMJd86ThkDFq2RUmd7PBJb1LhU7h1mvDJYQ5Hbqvp",
  "key8": "2WnsLbLunwJE1KzyAdwGJ8LNndsFH9c9swkXKsZRnEF4yAmdkiAq1Rmch997pJUzqhQL14APsr9XWfeUcj3B28Jx",
  "key9": "3k6C2w651aSpw6AzHQwASaJQHCp57zjMg2rDA6e9vN6mmrj9EVxrwjzWhKd1fn48XxFRstYKcpp7Lz3kQr9jtKnB",
  "key10": "4Cc1iPbhRDHYns7mzQFQq7PkdZhSTb1UfRtD5Vx41LaCieVWNZxmDeXnUMvKHBdEVen23MkF5rk5Ve96kUPGn2TV",
  "key11": "whwr1psLsZJgY579YtRXXsZsA3ZpybKH9w7aWzdHLeKdcJP5a24o5jD3P8VrUVQL1RF4L6dpurH7NjY1zCK2TRY",
  "key12": "2Rk5eSG2zpwvwg4AR74MvLtyxpaiZPfgsX5JUygmWRTgcXWyH4Z433vmgxt3pE2c8sUGpJNQneRet5KaaLTNrnNQ",
  "key13": "g8XTU85xoKUTf2kkQT7xrzNsDG3fnXjH9vztqhoJUqNP4bvy5xDFQHNUCRYhtC82CguED6n8mdGUjzrYkxx6jJa",
  "key14": "3CcQEZqHC6XqtTbEk6piyLUnz5u73Zo644P8DR1yUf8jTh77DaWNBdhd5KTjPHErjBhXTdMAnWw1b6XesasthbZw",
  "key15": "5DZSn7ftKyPicBQ5hAnaqymnGhEzsX27i5Wg3khPQT16SxYRKYzHUdpGAQ88qHZyJAen1mWi3bi4WRpRE4vJoQm8",
  "key16": "5gxarzjod7GZHaDR14aFATc5AJnpzEByrKTMqV9SAPkBWk6xTVPqgXapyVa1yyG4p4QaTkSwXC3vzSQ8CAGZXmE6",
  "key17": "2ySoEYpbvRgm4fapicSqVJ2d9riar5AA3Pvdizmn5cBLszcRFt3MbvvPCUyT7va4vh34fPbyjApHB6mmgo3Sqeqy",
  "key18": "4jrM2XL6C8xxWveB38nMkQWqzLAZYQkhGDqFvY2vu8yq349v5xxjYesfugsoGso5dw673ak3Q1PyRyfsvDvvm7Er",
  "key19": "69x4KmBzLptEBhtsHfp1FVzfKPqPCQuab2XucoCjDgpaww58VNgYADmxBm34skSM9z4XyJ3CzgUrYA7wdtLpwPK",
  "key20": "3V3uCzJG9BxNS6CsXgqpS6rG72rjyd64w86NbgtXY5Le1XosfkrBTFZ2nr2AAn7XtWB5WMfDPzjZp1TC9vyBAVoT",
  "key21": "XpDNWzXrLLdn1ttnh9A2yJYQ8bNSM82QdPzh1PPvnNLNRfNLiruJFsVm5x8TRnkJVxjqgawor7SEnJwJJ78zPpP",
  "key22": "396sfsd58tjVahJfjRmMmvPkc3nR2atx16LFKEPzNaT8ZZcuzaeqHFVTddtwJScFDTX2UVT61KQdCVDgBSMVbKxw",
  "key23": "5HsVxDUzHumUHbcgt9nUt2gg2DJKLrTJRDCK8ZJkXwYZW3HS8XQoqpYsYLgqHD567nJWcDnRrXQKupw9GxDtcAkR",
  "key24": "4ieSPSgpxWX91GiaQvtvzg4vzDauKULMtd5MmrHYbyVWCWKfBLwkD9TuzMamim3PUgHa586P3TZ1dQBkduBAF6Y2",
  "key25": "5vXKH6hRv2bmZRAb6duDWFbzRU8wspEDz2dh6c97KXpJToUui9EzoocsGKsLPLTgDgNbLc6XV5HuAXxYyx5zxSBt",
  "key26": "5Tzi6DuY327VWahjbHdr5BMm1XiyhJXdvZwWjTuRNpxAckVyiDxh5TMZWJfZ9Wx314A6NRSUyWMwYvzTzwENxUwv",
  "key27": "4BSwqtuUJiUSiRppWJ4EJKoBrz7Wf1WtPFTzSASLHsFsvsLZTXgELqat3Ur6PGribK1uuraLuhk9HFTzKxRXGfqP",
  "key28": "2rFHYAseSXFvwMi7DrrWshZHdo7CuAFAMhQviDk6CfPmBzaUG7mZQDkETAs5czPuRJf8gTLYFG5t5GHGUmLiYHpi",
  "key29": "2QHc6PreSuLvcvRoYqiysb9cGFjzYUbZYPeih9YtthSsv6J1Zy23ANKxSUYAfEXANKPWUj3UxY7ZdyJAN6eUxEZx",
  "key30": "3wXzahHR26J1Ve7kywv21XJ3uMr4VFnfwdi6d62j66AagSw4Gr8b73t362y82U914yja7kT1kBGPFwsvoRc5u8Pp",
  "key31": "2sfAVo2V9BCtDzkqbWgMx3H49xX2ZFw88eYfz5S5XiNoUsks3gnTbfKRGL1hayKLeK4p9xxnwXV3o69NUZxvU8G1",
  "key32": "3MK2WHdD6VGzQfJRCU4isvuRRG6mD5qgXsiiCP8MFq8UN7zarxKBr16LXY4yWPeDYr9zqzw6MWALvc1qvvFa3Zhe",
  "key33": "5pGjM7SH9CJ8iQMYCBJjobmZNC529c2R1JFwcAMHcYQro9TKaCmaSDUMQ5GLck7HAQpyUU8khEUdS9oGuYAyKLis",
  "key34": "52tVcYqd1TsTt2n6r9XNCyR8egd5snXM5N51GuH3VRatrmWYdBk8QqYQrhu1GeTuQrods8qKLmi2oKPhntCRa4wv",
  "key35": "jWh7svmkdmwJevsyYuonWjcqQEjHY1vq5NXi4VkpauX7C9H53gTr2m2iVXFMs7gstvkTu9w3iaYPpBdDj4QAt1L",
  "key36": "4vSHAZtsf3UgEkHKzCCTWYk8N513NP2Kw5thfmVkvAegSWJDmrJzmcn5ZRiz8jzKTSAvZSwnD2DjEmh8Q1qYbqh2",
  "key37": "5uc8hegBaFHR7BhrzgrGddPBXr3NhVNocXXHVc4bMm744ffaYQj87wyYDcG1MffV3WfQC4A3VNguCQCkRbbKxg6U",
  "key38": "45jHbDtmfSH8PCTx3P47KcHNr9mKZi4dq3TfgjsduP1ZZBPs9X6vVKd7LWrYDj9Qe3tvU8F4TJoBaEwN6qo4qYwc",
  "key39": "58khuvVu6xBuMvjqu4p2FtS1cbBG7Qi9JfvwShsgpaHC86yMMHdtdDbYGBaf6os39S379HF8t18bopkNvEhXPaKK",
  "key40": "2rNcrGQDp8rrmSNRFUTGcWQ3EDfxJUS3qEZf6ocZo76nyGnQhppKEVBheZt6WCCV1qGPFqftqHZ9WK1wxcS4Liqq",
  "key41": "2WMJFQnvx5jdRVtSXdQLspzVCG6b6XrYt1Kfe38FRd25vvJr7z3HmfaU7pcAfFi7uUSdNguanTr7hk4H3Px6AFMB",
  "key42": "ncwuapgDXhYy4dsAi3iciyLZdk8Ayk14du6W4WYtBCFy778gwSomUbuPqfDChnL1eBRqHQxf936YsZeDvB6sEmN",
  "key43": "5ZwuQn9cDDDd6w3LdsxzFHv4Fcxw12qsHjJgCWqp6BU5LZqsKSFm65wF7kXgBs3T7dKWoRbfrzi75sJZ38hTW5Yo",
  "key44": "mJXaUsfTWBvBRww4cpmiPrivqz4K73CVuZnSihPFm5ud2upeFFTzkBknq1N2kSBvTJKQCYw5JuU8UvZcvqtVsJk",
  "key45": "cxZncsSaabS3Zkd5YyB3dTEmrw2VCJHSSo91QjvM9kHv8zpA3BG59eP3X23suPDZMDg8DxKgEsyAahtpB387jDq",
  "key46": "Ef1uz9Embj9dJCxrvD96nNwWa7DQkv4KHXoQc4wjHRuXrbKPeKyASiLVGHahJmKf7fCzZAXHj9YMZ4Cq2ag6RDG",
  "key47": "459JJWqMQpJaTQkWYTP9jzFAvF2m8qF6t3qqguqnRtAVGCXetZNgVaCkYSqWE363LsCRUSsVpRsnUYcWwbtV5fe9",
  "key48": "3B7fVdstpctYdC1c6h51kRia4qxGvyrJM1otSFfvu4WsfMtSWh6ay9uy1pdd6mAo2KGRuLqwSpBpEutyjRCzaWbi"
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
