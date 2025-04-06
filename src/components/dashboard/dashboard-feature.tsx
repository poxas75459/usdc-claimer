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
    "57Vg25FtV8QcnRxMs7PKqkU4BQVFZcR7c2F99XKDVz9NNhtrDUqJPbE2m5E5D3RJBgb7pUSj5pdG1KULiZBbtYF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEdqxrd6XZvwX4qZHU3FzEtwVFBfYYvNxxXp5uK4ptiwNEsMxCwqgd9kdmxz3RMgkGTWTjJjryNF61ShuLesf7X",
  "key1": "3tEhaFwLkXaKk7Gg6TLxfg9nqdzhCgVVZo5bb3dfFkQUpySs3BQsKygLhsBoZ63Rthm1sYPc543QahwC3UFiLFmZ",
  "key2": "4vWe7PNqwAjwGEvehFCwj2e9LDP9374mVo1efNkvF8RsZpU9pp7UNeynxj38QHAvzc51r5XZxmuVydfDUfEQ9siT",
  "key3": "5bSJvrHjiNYc49dhacppSaqRLFmV1NfPHwQBcK6EoiGxj57M5eTxsnsjqbWBxG6g7xvWYSUS59tVjyQzBmKg3LBt",
  "key4": "3Zxfrsu91tXQDYo9NXydDM47HiS4ZYEcaTWDqkWnT8TAakebXXK1p5ttf6wct3hsG3uoFbJoKpaytD5YGguBw4We",
  "key5": "5ARvgUzvNoow1jQehVHmrpHjFsHrRdriSKhxaBzSbB5qf8csyFGtwk8XysiFJWVHnwPmBwwwsHd5sx483dH7dagi",
  "key6": "5ax4mDYV5R4mNjTJz9yydzHiuEDsV9igWWzV85g7QT5hWQUuJyofSshs6uQWrGshHjdKr1r8BrQ4Nyu7WJoRX2e4",
  "key7": "65mvYKpkyMYtxjSa7v3Mcnjn94RD1qLmSTLhfrWEP1a2hMWWLGZVD5gctLuzjGtMLXLs8GxZ6D3jMnv2DjdZmfpW",
  "key8": "5XCPb2qaYaVutij1NZ6PCryedMr7sWFxya7xBHMniqnvgxxP88LQ8MVA4T75bAR9ytRfQ8FFMUBbMBPH8doFkUj5",
  "key9": "YSyv3p7ETE2CHNVDNtxgz8RAwqd4vpK7VmVhkXLsSrwbf1Kvx31HrBeyZSCG2bd9JNdr2wbAtRBEjSkucUdhstq",
  "key10": "2kxshhPkz6Xoy91wMoMNx9t7ju4Qs3ST8Ecejdj8As1heriUnALyAf7Qdz3hbQAm1GXncPBGcF6CamwXf9QrzkHj",
  "key11": "3FhxzssAbnm8ZJpj24wsaUyhBw1GDNvWB5Yw9QY9BfEH9b2ZkmpJ2TuZvMh66gq2xj1SwR1u7mwUu7HDMoF5q5eg",
  "key12": "5WQ45SZHBTQyEZwYdcVgaiVeED8JXhv4j7pPvnqX1JtVQJYaFNLYjDeDJM6ooJYxZSxvm6trSwNm4Ry7eew6m56o",
  "key13": "3rMwjrtwWCy8dEXKj5QtN2fDBnoQwyxChHP1MmGYJ1YYbxERw6QPJ67wBik6prvaoBHELRGf8ESunXURys1sQTMF",
  "key14": "yb2sXYaPvK6Wntqnb7BdTQ7Bh9CWXVs1xdAAnULzrs61jQXv2FxvopuJSeVekqfi4fGcSk8PSKytiK2VjydUe4G",
  "key15": "2feiAWtvwePwd6SySas8zjwctK9Qfh9Y8G3TrqMYuhLnvuPuakg3uRmq4JFfp77xMgUtfJLPtmLifUpD83AzRR1f",
  "key16": "2Y12bvAsXPcqBwpj3KYLAMrevMpLFyJ55UbYHbuPyjmfbrVKxyNNcuKfRoUxSriHRi5ndKosujqn2n5FnrY1TQSg",
  "key17": "2xDewMiYrTiw6X8fuSj7dntRshtc5tcmLTcUpVPDJ5poXWFKDBLGXZXXLoez67xR5EAyCB7XWVSsVF5yetqSY1Pv",
  "key18": "2GETUignuUHfvwxq3Hw9Z333mRtBoNLuSnuWzH9aJJ9CtEMNYCxBEa9SucUGyMghHGdMNTExUmPztsbXWBsNft2M",
  "key19": "5bFiG7GNE3ZanWx85r9PkTEZXxuinVef1A5ZrDygjVC2bp6zx8FnQSkNi7XXiKeC2GBZVWRmwb7FaAsBbtwerVA6",
  "key20": "5GytVCHYB7bdeV7HaZbpiAvChMSj8XJWsGigRUPgA5q2aHGPE9Phn3rzXkyuwg2Kz9xKUtg7GEJit6xJEbpSM14N",
  "key21": "2vCqTQiPiC71vtNLn4ormB2DdBW8gvRJBDwgu55m6p2Xkr3yyYmYeahc3vEVs5C2RhYEooHGdsV2MzMyTA9dvzUK",
  "key22": "3M8yoTz3sPfH6ZeeXk3zUHp9MoSecmZtspmkxTqmLJRCsZJnKHxnmgi3s5fGzJuburRbTfCoEayYQy2dnWBWvUVA",
  "key23": "56fke6n9yM87h3c19SQV8jGRZH5PjcsbQnVSXyA4aQ6nbGjykGSG75ASUfkVNuRfyAD5N9KsAXnJ5w4Py7Gx47Ly",
  "key24": "5ekKb5VAoBvHfCXNNmPmgyiRWpeNErER9ThivUtLDWrvAqCBfJ9kZDah2fmzmZBhrq5EPDezWYMwosLNPdk9RjBZ",
  "key25": "2dt87PtA52gxUuLyAc4ZrdCCMKYQMfX9CgUaGEkKxUJtshKVgicu6aZfk68jj9DqX1ijkrH5SnJjnuB895iu2p8S",
  "key26": "35mqs5Se8rExSXoqmhUiCEAHXAr7EmiF6UcbqGy2sG6kvFdePqViRck1xfTfUMZQeQe5k7Py7mnAYTGHnQpAwEsS",
  "key27": "3bB4yKukj7aSuUpProFvFMXnjaZHdj5eazKKTLuy11A51YmXhnEnSxHci7EUqNG1FVYbfMDfjBosyEGupN5C8wkf",
  "key28": "4zBSTUkDSyhXwzCnj5PEAAB612giznK7KWMPpSh7VmCbn2Gwp4DYUeBSFdgUa2rhmRaMGUkpUcZr2nqmMgPH2CLn",
  "key29": "2jNwxDa3jwNSULhnLtMZ4b6CxsydWVEfpT8MSV1DKV4x3ueup5aPwArrVLLLoUXWwBzJsYYV8Y5ohLuNRLPtBfrJ",
  "key30": "qKVKHL7yLvKzeZsapQ7WggHs47Jic7z7LsTCGK7jvmFQ1fjiwksygku1BDmEsnJ4QkHUrm8E7aXL42R4giS9zJ3",
  "key31": "QsAS2NZtpjrVJ3V97WtdQNxpp9GMJt5TvT6iXpLN5oyAVfBY2ozsA1RnSCBUnArUc1u1xXT3xeYJx8Bha5az8uT",
  "key32": "3942zfnGNvWvmAe2bedqZ4nzvJp7BNbZXbEjS7v4TcwpxvWjBMxfyMby4fb4vdiCJJvfoKY98CHfjjsJBd46LRdS",
  "key33": "5e4PRk9SbdZwaTRa11uwFGPr6P8rkdDMwEVVVGVStBgfViTvyjmrH64H7WFwHL6PReG9bYmPePjThzqp1RDqhZXL",
  "key34": "jDwivYREUUys2MGuWFderJkJ6Af7xfmb3JuMqsGXfKQpbByAvdtWYXJabxG2DSamjocyNn5QamH1aCQSEeiFq97",
  "key35": "33DhKMw7BXy5BCDdD1Mi4j8LGCt12QZ6XkBfP9vxHvupuHgr8eNZyExWWAEfLF4x6Tf1eGiDBEWiqVf5UCYfMQ4z",
  "key36": "egYytT7XCtmEV3XEbuEoWHK9h1H4QRkPBaJh7YdLfREoY8iuEfxA7nMv2SJ11YyaYSHKXb6ew8EatwvU3EUjJiR",
  "key37": "s1ocJjAsbB7iQhY3fBke87yphwcBypBAjJs1UzEZjvVAEHZKVhnpJKf1uVH1uzQyVThmBLMFDWtMiSA2qotZKgn",
  "key38": "5D1v6DhWnHLEp4HfHhfLzrvMv8sFhnndZnH6gFKrzZnAZXLsVLUTdydAJuZbfFXpKebxkd15KZvocj6n1QLSHEHK",
  "key39": "31bjcDEkUtq9aCnSiZK4UMageZTiZzN2yUp6keMtms6AcnH9wxdshsmRZ77U6b5TUTz6H5G1dMzcCkRa7jD16fBA",
  "key40": "3zqAxVftmjm2dSvsYApsTTRwZFwAM261sNyH1Zh1kDZC5vWjmPLe2Zd3sVAxYinWeBQ9EJCvinDNRfxbUyLVHhH4",
  "key41": "2t2LQKSxTohRwPuP2gbJFuCraktq8rSyDaZk4VZqFFiveP2TKHwTq13NhSXk1ZPPwjRiA948M3v33fgik33Uix1x",
  "key42": "2A6GKH2gyT81XaJQu1HdE8TwM5HKRrzpshh9Rt8GGBfNsERt8dJubu428wJAKrCZNzvz3MazDngborXibArtnn98",
  "key43": "VdDK3fJhN2bxkzVPL9Ai2FNSiPEqWFzDWjPrUGmFUxXrRhnKb4Cp42cMHsvWa9XgwVeZDuNp5AKxXiaSdMYe5cy",
  "key44": "nGJXvGDWwWKsxMjsoro5yAY1nMTvXhV6mCHSBzHdAUs4f97ExE36a5A3BtKRNBf6GqHitE2nVfDME6t5kcPS4zs",
  "key45": "fyCgsp7HJLeexw1cN12pSdjMgtTJVeT6vddXqHWxNT9q2eiv7Sx1QZ92ZWBLGXr1JoAdQBk2TwRSACbWL1tirnt",
  "key46": "isqsUWonjX5YJiyAkJ5RQuBn87ySz8oVkSA26jHRRw4g6FG2e9RrVaivaH5fDpyGefGuy82uyfoiaSAeAiSvn6x",
  "key47": "3wsyDFf5cxGr6L6ZQYtC9KcdACEh8oKSPWzCHA5cJXAWPjgwHwoSpxQUwMoJmY4VEE4zai4SEeTvHGFop7UihmNx"
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
