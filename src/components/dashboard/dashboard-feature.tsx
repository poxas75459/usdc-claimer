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
    "31YUkVABCpKWwsuxfTNcjBPnMbFhP6hAMTrRSvVMMXswdW6WWXhxJQUbyigQoC7uT8oGp5DDeqXWqRYf5YK8HZAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368jdy3Wqwwc48jUPzgyHhZoiVMyJWZzkEY8yuKbv3H6NxRE7wQNdKtswDYSWduzQiTD2AbM8xeq2ZJdJRHHLcZs",
  "key1": "5cvxWQXvNVbXJMt77T1AjnyzGEp2WxU7Du6e2cbW4FnrJ6xayNdTAGWdegrhoFtNRsdpszhDSGbrJhsqyK91B7PT",
  "key2": "51Z23UhcAgwBLB3rDu4pv2Vj2rqeTEK3QQAFx9sWmQ5p3NG32NGN6VvSHy4bcBLTRaxd1BS657z51FNpK218EGTU",
  "key3": "D6PRW2YFGXb2a8NYmoaAGfCfG3Jbk68BvQzy7UtUg4JStaR4NrHxC5zEpo3EMvzaxf5TkP8nrXZjK9Hu6Wtv6NN",
  "key4": "2LYSS3wS8Sw3XHzMNDksyDrsRzdvd8W4ypcbXAbju3rZEBh5y4wf8V9tZGbvzA2oT6ZAcDCgHRwGxsM8BnUBvLQC",
  "key5": "tc53vKkV3Lt1zSBRFpvxjFfkVVduCZndbodqEu6pw4Q5S58rzT2cFjRARYGiqkVifpbtPkRJ9xdWUyjH8YB37YR",
  "key6": "5WKPUAjoDCY9iwH1B44nQRWC7SxENhos6miD7aDGVAUht94Pp7pfB1wLFcS5tPvMNpWe1CSa2nnuKhav5Hvm8YJh",
  "key7": "vnNQk6YTeR3MiyAq6RK9WrjEqhZgK9sh5rXJ3HBUktZknj2yr2a2dnFM1q1D3TvzamGG33i7MXZiV8Yaf84u51t",
  "key8": "4o7yqin697EUwq6KmHuxdqrQDjMSiDeLRmufDDG8oA8tTms1VCkEUog6LamZTQmQyrn2Ucg89hHEJ3yTCCemJmFH",
  "key9": "5FupTBexEyTtVugjxbkuzrNAH1pJyphvdoAB9u4GqjgyxArdr8ZvRb1SG9tVwsgD8XxDDCEogY6iWbs32jh2PDyu",
  "key10": "5UbA3WoWdR2WrCDoMTb49LPjGgJRovxJgwzXEasncZFZgpDtUXMcSyuEDVnPtQ3nNpxQWHiZsg1xoxyjCH5EdLHd",
  "key11": "3JRB54AYou8UQxfbJbH5XiCV5N9ydDUZaaqCYq3xaoD9gCCtMz1tbGrirGJEB7m6fzTEBhwxTrSDtTdhPDGPZS6",
  "key12": "2RSS1SKBpTBFpDguoVQYoPuSMMSCcYxvYKANvBc6GfX7Z9P4jk7fMs3Mj29WEYzR7b7KSYZ62GPFtbPtps7SJXow",
  "key13": "4Y6AFrQ6h5bJcgtjHkEgsWiQGBvyvPaMZ2aUzPrTZZn8zyFhJFCMcyGZQcW8YKKiZowCcrHr4wFS5VqoUe3bRi1",
  "key14": "21MBVWysbHpKagfQZYi58LpzA38t6Mt7Krp7Wyh6sqpHwC5FNFu9B1DsxFPzaXAJ1XvP8HgdoL1Wz5HUCjQKSPVn",
  "key15": "4LYs1ddLiRc5tFFAFyF6PW5V29i8XaB3RD9yZe1FuWVZkV5nfs6j7fyLWNKSVaKjNcnfmRjsY1aSGTsCA2j13Vvp",
  "key16": "UgwCd4e7TUy4qaMafzFCHFPze61aLGCRa1cwsGg2t4JtYVnJ3UPXPPtMSCXpdwzP9LEoBUpXP1yyMUkeqobne3Q",
  "key17": "dRr44a63P87zc2CwizJzyXd7wbqmEXrHdA6ApFnMhapg9fPzqVunwzasPTZNM9hh4sicSnM4DX5UD9HWxLiywfm",
  "key18": "2DrgZwVSK8d89qYwn3yHDJejN1CkbvGA2CXah7YHBAMoqJJ8wpR1gN4rBJ5dQg8n3mvUZbSYS2pk2h1tLSNAtDu5",
  "key19": "67h7dURJSoFtTf3RobqnoUPuBv85kQEq34oBZ1WX814fYLfYTkrjhLPuCMeVufnnCRJ2fQaPY1TjSgMjVep9iWPQ",
  "key20": "4qHhuMgdNJtnPzAFouciAd8QUryjynrhnmLTDdPAVxyMkj3sMWC2SdTyosZwrzUZgrGQeZKoB96sgAgHaNA4vw7j",
  "key21": "41rawzbceCcP7ez7c8qMohg8S6nRQfPegyzfByTFJKtF8AuwVpv15YRNiNzwxMLkZbWWaueRBaWU6qJgPUj5dYVc",
  "key22": "3NLFWZ7yoj3XJR7wbrUfzmhFTZhuaMAvZNTffy2maArwVQhsncGAxUM4zVHkdmbNRajsGA3qcyewkbmu67PKg2hR",
  "key23": "4NyRnLbTVhFFt9fctnYHRdRiyFFBamxouTZRnXCY7ZUAZM5BDpuNn1Y3YPyYWFNxms59TEje5bfFetCpjm26fHLM",
  "key24": "2hL5Dut1ZSc1ubSyZy3o9QJFFQcrJCEL4Xh4aUhrR29xDADwz72RhNyYgGfKHkpM9BMeMvY5d9pmx2otdiodfij3",
  "key25": "m92kMV8N4L9dSdri8BTa6RoP79ySQMADxjquc8bKS7hXcp2czbKnjeeNtXb3K5c6xYYD8xX1wHpJXqRqz53UzeZ",
  "key26": "4SLo8KJitZjcT3PhrDA4VyUGuunUk7sTVaK7efnf2o11rAjjYr8K8po7pgfeUoDEZgQTWgPtze5dK7fmZh4uQ9st",
  "key27": "3Mod27HHurF9KqKyqsUM8nYdemv6ztrw3gi5c9BywXf1BebCgHNo1YBDKUJJW8jcCknqo2P8G24gaEes38hUCsRP",
  "key28": "3pNV1bzMamMAjHMUNnNzBMxmsZo6G4FbPWcqA4NP9qFZ4WNa3muFHfbLai2Mkm4o9NAehJ2ftr5nYEVWLjCo6eG6",
  "key29": "4mMK1XbS6VmKDeH26Y8PfDHLfezLZqMEkucxArgvr1wjLSK5cqyDpaPtcWdMaN8rPbQrXT8LnJiExAzyqNia3Zb2",
  "key30": "3wuGbXWuS3WSV9Cg1Uq12C2vxs9rfX7mjQw9uVhmCchCvwDLmRv4V7QGwMn7S8nWUtDGhJfMwLXsTFASLc4MzGS4",
  "key31": "35wFmuPC5kk6krEwNLpiFrD5dd7MpEKRtXM9G1rc7FJwPehPxku5NnEXhMbYUQdSKzrwJgiWGziHd5ZMV88VWJhk",
  "key32": "2oK2rqVUK3JDscmQY4kQJjeJ4bif2L9gsr7srKZH3563TA6bGXxbc29NqoaudEEZ4y2uNCxyyoPDkhDVFiPwWMkg",
  "key33": "4JfyBUSgEgkKTH3nmA4rtfTyRGrE96q6GyqU7o8jKL89C96Picyz2J5bMoWRD3uCa5F4SMtGs71AejcgTZ8ht2xc",
  "key34": "2qPQzAZv3dcYN4TENuenxRZSPffy66wbeM8knB5ezYh7DqYpgXg4Pz5GR2uBJ4oVMCnX7KjrB69tNcnx85gddDk",
  "key35": "4hWWvPVF7eSqRqSJhxaBC4MyH3RnDVh4QT4E9Hk4V6zWNu8XEL4xa1cPFhGXvosvPZ2vKtStWjgTt1uLCG3CAZsv",
  "key36": "2zWDdPAKG6k4XkWU8Pn5vjfzrcp2Dmh38XTfk3yMicvwwYR6EQQaPRBWp43Jh74vZ3tDp81rccB46QwGQowts3jf",
  "key37": "74bng2g5MBHJUhYWF16bFSM7AJDR1JRU4UmCKRJduPCxSYPNTeQPxStTzCHZnfzPUx8prZvvf7CTZD8FUnjcSN4",
  "key38": "3uAksL9v3ev9M3E5NfT9fSGgtju39c6mVfrkGYRNTpEAnZmmc76KmfV5LpZ69LnKceV332X8QDKSwarjGFeNFMrd",
  "key39": "2kLmHNTLTtuAdwS5diK3E9Kw5u4q4ugfQb7YbNtGhExYv4CfyXFksuYSKWt9TcSDomDR9A9dnCjuCrwBfKApQ2YV",
  "key40": "4VoXXPmHzkCrhX7Ji4aoB6TVnQDud639yYiL4vVLgMQEACprmUneQ63LWS7dgqeSZFdyqv8yMLJWmtqqs9us5X4D",
  "key41": "3sc6JCPRcMgk46MhBdH15xGHbiGfcKgeb9gJ3oHZgYaeXQLA4ApohPdsYDLpSfzvnBE4cyQhJyYA4EN75nBb9W86",
  "key42": "ac2MkgzqZyk2Deiw1L2XbyqHorQ8Ep6aT8y3Suh7EEkqU1qtZqqPUmbAfb7ErNgudv3LcL1v8kmHQ7W45TeaXrW",
  "key43": "3Q7PhvP4XyLSzip7UqWvy33yveEQ9LcKKq1nPqNssq99nKDSLR4miuXFBgqK7XSLB3TeomcaJUBZ8QAUweMtnZEL",
  "key44": "3yXpGWfDR3LPc1XVb9ueYsoxSQBV66rGDpy6h6GkoUi39X63gbuMdwCMJPcDGzQvw9ctpiUrwSBDdtPfjAhWSLrp",
  "key45": "2qR4EKyYyrNM6FS4yActhLWjawH3ZrLBLWcDuDF8ozGQiqU4DVbkzx9sGTvQa1MBTPCUzRFSNGUTNbz2ZSaD7NLa",
  "key46": "4VdATWx7pihUZe9FazoCKL2nNcmzfQS2an2PUDCBxG8s5bFUvg3iq5pSvrGNLRuxBEaKwJFjir9J19Ejhhs2foLJ",
  "key47": "5CCcezopAN35o3xUGxJmMbJar2YqgAwnmjowWTGbZaps9dpCSofaS4iCUm5RafTvL4stuXE4SqoAwU7j17PHWTeZ",
  "key48": "2iZP9xLeaRrWRhVTmLBFUWk8YkpX25FBh3esX1jP42xGYKnVUqEdfsHLQ6iosYDSJrpnTFRtUvZALtTki8Sz57rq",
  "key49": "AJBaHuBw85ef2sZBxsi1SGDkGnUmgDsCSPrWFdnbzP1mC41rBNhdahwVMkryiLwrFz9YBAkqqoTYyaWYv2QxvdW"
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
