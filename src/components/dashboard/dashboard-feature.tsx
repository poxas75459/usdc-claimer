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
    "3rrzBYgyVDtvgst4PnQdjd5yzdesxhkUAvJ8jEnNKou1NGPDDyWFFwhtDEETKewrgYGfBtGvup1Jjm78PibSXcoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRaaUEZTuQruspe6oYG2m8zubtAiwoBsYToiZwAPNfB9ksuBoMwUjuYWeJH5m9uNAUAaHk2gLCp51EAkAZzEFmn",
  "key1": "52tyVDUToDRAgCujHsD8SB1tcYoa2iqPdkT5rUGEKH8MVJ2ADLRNDinWftZKpnsAdvtM4rBHqpHVweC12Xhqrmp5",
  "key2": "NHTPexgAwk226c9Hy8MfHLBjihdnCU5uUjh9baZQkLZ2W3h47TJM42d3xQCctB58f7Ni1har2s6WsuHTTHVC65i",
  "key3": "2TKTh1xzZWU6PHvsNoQX5qMsDrf48KsnFzpaw856C1thbxwgGMRS2hKP7f9EZrcSpRUUnTTmR2RnqUJ6E82zTfV2",
  "key4": "51EBNZ7F3wCJvcrfXiLVPnYEmbiGeDbF3Q1t5THc7bFKA4eVhkF5Rr576NfBvJUywzV71R58pZuxLyvckoCeSwAe",
  "key5": "3TEa6f6F2ZsKuMtd5DvpLN1rENL2gVa16uvt4h8om1MJH75y1EtdCnXf9ABTy2otgWH17mJJqdJQ3Tk3Um8M4rUv",
  "key6": "57vBB288uFomsfgY3xD4USyTPbjR781fhjoULpdDsXGWif35VNAXKrSVjrvXQy2ndCkJzHFFv8bLHZZGLp4eLbGP",
  "key7": "4mzx9hvAeV6892Et5y3yRtYchRzE9ANL6CF3iDG8ZPfM5mweTNyk83s4ZKHWwkMEmB1NBeT4vgyRX5L9pH8BMwsx",
  "key8": "4h7yoMhzJ2QxeNj5LVdwt87tZhWJbdHnd4taYFN7BsFoXkB9NaG2Wvc2Sas1b59nPG6gpnQg2oY1igaM32hLtRcb",
  "key9": "2E8EPqPfHhT4sdThmz94U9Kdj8g51anCgZfBkyYYfSWzstoYmwCHkvLg7cbPQgDXHqTNUMpE7JVr5GE73RdxwNdD",
  "key10": "3eZk2xuKv8So6fXWjZEfnRzMBhhJXYC1bvvNoS59ToG2GSHh7NYksp2vcmyeXuCySWuEBdqigRQZaSaXf7GGe4ZK",
  "key11": "4xuEx1cenZzMjxQXSS47muyGXgHWBZHwJy24CAYjBTVBUz1NcAAZHuaurQ9gU7sV6MKrRg9dSev29xVD6dpSfEwL",
  "key12": "4qCjLaG69ggveXKU1PJj5kzj5eyKrKMUJ2MJqX45upq1aQjm8AQxpscfAMDBsjV1R2UR4D8S9nJzbXzTg5n49Cn",
  "key13": "5fttiSgkte5MgEzNj7gWoTq5Gbi9xYDzvEDyEc7UHbkwrDDijsKBTMcFS3hc648KPP5QvcVJPFx3kWE9xw8TqsTx",
  "key14": "37145W3uThyy7qfuRaCtJMy81QG6XpVc9nXbx1BQoZV19ov5z9MeS3pGQYk2FmrBy5CB6e3N91khc2Ea1GXYrR7W",
  "key15": "2iiBReEgHNDCfcGhU9PuwQ1jDgZAXt9vLQd78UQAFVdwNAr76oobMT47vJQAfCEqTg1SpiWZhoSNaKNrcQxudzv4",
  "key16": "5UNgZ34d1HqFEYVs7cvZquWRQ9QHKo8Vwoy3i2QtquzDuPSH9xWeytez6bWWYWvBp2MupkEeauQRXdKCf799Dv6B",
  "key17": "3rSo8APBw1JGQUTjTCpU7vMFAs8Qro1ZLukkgPDxirXswvsiMMrZnWjQu8R8zqaZPFCuQQ5qtHqPXanQuDC4Ri35",
  "key18": "2HA83Zjy9j2xhgKwSPvxqY8mDMYAz3dEsErBu14Pxnif67gxRs2nSNPZdJbuA1JL6YMFyVBzkVayoWCmh5MhjwTt",
  "key19": "3eoG9LuJnwXwwTSYV2jT8jQYGnMp2EQsCKCdHDCzVUfBridrfKZaF9Hi5KyeBYNk7CwN7KoJQcrKq4EpG52EgcqG",
  "key20": "3Sf7ZWY3kHNUNo6R4pfTaUxP6b7uYB3kW2CRpwKMcFXKC4EUU79YVsVao3hQsURN6uqhap6Pws5n796525YpWSoK",
  "key21": "3X6mAHu9scQ1qD2aiFwiadBXA2fN3Fn48mB7rDDaCMnr3R4o6HLFbaQMGigQUKJJrgVydZfiUA1xVPLLXg8ScnDZ",
  "key22": "2WwjyRxCGpdf2B6FDtMtNJq2HgkieZ3GqEG2L6FdKhEby1Yj9zNHzk6Bq6vS7YHRrbnBsfDR6qy36HCigx1ytzWL",
  "key23": "3uKCcKJVc93255xkpfwqCZqibGf7wjemWYp3VDNCN8qgAbaVxDfRRjJcCD6KqxU5kzvePh1nSxDnuaEZqFc3Psjg",
  "key24": "nTBSFEJYY2LJHFCD2VdaGf4id2nE3vbXaGGVCQdAqKRiFG5o8eaWHaRxSHQW51SpA5uXikoWFjHHp1aoWDap4sk",
  "key25": "2P37UyUs6qTw7uVfnBUKtt9eU3CtshxAQ7E2QUZbE8Zg4qwhtoLGZ1CpkYXsW4VZaT1sum7zkRAdYaKmEEpSzatZ",
  "key26": "4tVUSKv7EPSaq3RpuybnmnRznviXYWVeqQhVn8CkGQyA7vzY2ymf1g5mBBBXcpWrv2PNSnjYmpA7BiAJHzQhHd24",
  "key27": "XLFYva4m2LfVkuobqxqY2gMTnpgfYWuwzViJCzbhvWFo2VqutxuY5eEkeHihvGWSq8vpGaJe5bc32YL7Fuaw9fm",
  "key28": "4ZT5DhSE2pWksg7htLZnYDSPV62Cj58JzMPgd1zYE43F6ZZzkwYCgsLWwAXh6XiryaBp7gaqXKh8LiS5BjVkbiBT",
  "key29": "2oFj4ApPf8idcDXPXbjtvMF1RnoQZiA1tG6EeLPYsDSZcjDyuNRt3YmcWse5EWFJX9DfwSuWDidTaa6qaEyXdme6",
  "key30": "4uGkpyapWJHS7ASdKnu256682sFgxkztD1RS4Uxqm4rZEb9VEtbo6Mu2e31fFEdr1ZphQ5QLBwxwASrZPx18o4xs",
  "key31": "3ZNrq3cZkTBqx6eHNk9NrU5u5qp5rdZhxr2D26Q1SkGaZ1Jv1DEWRtJuzTSkJ1jjwwSpXRFGEU7CyQSWgFT3MaPc",
  "key32": "2J4i1YTQkVoPYkrscLKxQupHM4uBS2cWfumTgu1LLQNsLtJKo4D1koEGPEwUmGXz5mtDMvuzjd7YZtavwDBoh2pa",
  "key33": "3AiTKwB8nNt9oAiytqzGdmoW8B22cgbsyZBvP4hFgmB9YRKMGho77xC7G8JtoctLAkC3Cr4aXomeXeHHho4W8GRn",
  "key34": "41drrAXfjEcP656pe5RBfxrokZvS7QagmwGKF36Q2FrB4RtmwzteffzaUaRyr1e5NLefuZmDgNgMpCDwFeB1Wsas",
  "key35": "63aA4dXQ1hZHAnpLGedxZP3ZTEcVN9ZnMeNtjJQ6YibiKqccWjKAdXoSKnhiFSKW8w91i4ZmDnVyVdGFYueKBPru",
  "key36": "qSohxPNwgUDz2sey6FUymnTwY9E2kNEevZfNq9GULoWGYQvY4Cjty1hm1HennXG9WUWzLUh1oCHGHhUWrgHHUDr",
  "key37": "3CBJjfsTjq2BCaMEZvCeLK4VLMmhXBDoEYzmiWWpdjXP2fYLgk8Pe7iLzt4YjT8czdg5EiyQVE3VFd54wSgu7j2K"
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
