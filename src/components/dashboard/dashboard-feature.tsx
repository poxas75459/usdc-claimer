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
    "5zpA9nfEg4HdXsuHp8m86X9fiPDKVeDW2hNS4hmdjYccdzCfMVengX4CZ3iWmujVcyvA4DLKif6Y4L2wKCPJPS4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAGpWAe82RA4gB1jgZtddz1ng7be1nbdsoNuCWtNTDfE46gUa9GBk5VbCEKoLP71bD4pKcqBGRkMDHQpqHuKriS",
  "key1": "3bDV5xR6RaRJiPZVWVWSMLDST1C83beTLWJXvGX8GQhFdwBLKjYgk8utwc8LkHEbHPiuSRBRJwY3yK16SYM4zcm5",
  "key2": "2M1hLpCVoEWgqxGiM652AurbYCue5JUBWR9X49FDVGbQ3QEZfS58cnXLVvuGTbwVeBo1SNFbtZRLE6yqG6CTDE2C",
  "key3": "qCg6hSvuNvBAKpPohwWDqnK7HcKzcZw6BrqiKMpov6YXkh5157onqJhbxDFhaKRKj6UGJpgDa2G2jxA2Vx6LWx4",
  "key4": "5xfjJLyJddVvdAnj88Wnx3JHKwfEShJVkRnaRE2aWnsn9CUtE4dswyo15wn5fBoYmft7Juha9LN9yHHzp2HJJgCB",
  "key5": "4nQHvuj8mJBoF9JL5snUP2TsomgCXNPS6KY5oioB9remnsvpSHNQSTjuvkoe9cm6xJwsgs6fxJmd8bp3mVQrwh8T",
  "key6": "4xrs2qpR9Ad2bvwoXxCUB1MRMgFw5qn6eKgfBqf4mTW1xDmjaNVcttv7rSHrMdFzF4Zej3UbbMm7QTUgt6Btkh7U",
  "key7": "5FMGWZ4wLg1tqMYTvV9ffNmh7yWsqEV6viRzgRjUFX7A5Jh4VMWnwtofM7RmDnwVtDzqcKigZKrLrssPfBzYDSH1",
  "key8": "3LH9UAC2Fw6cjemcfMMEUcGhQZd2Wu3F5dDN3QsQGHDNnes7nEcQUg5arS4QY5jYnnGJR3w5Mnntwm1f7ZXLRatU",
  "key9": "Jmwvc2Xhnuc6og1oiy2xkehRFiGUsp62Dkoyi9dGozq9LJYA286tA3gZdLHdfM2xuvckkRNi3mdhrjp1FkFQKtc",
  "key10": "5Fn4zgirHuShrK8sTs3qwS8cDn2uU88YqitckiFowHvJkhyW2jTNdz7w7xQzVxPuZRX6nbMoYt1o7qADsQweNQd1",
  "key11": "4iQjbVUk8UWrMtcd4KUxe8PrAwrzczPVEiDkyo8AkrUHo9QcnWkzFXxJsB4bZkcUSYfvAoZGZMXbFTN8D369EWgo",
  "key12": "3Q7jyreTbszUPh6L5k2UTbEozCL7VV1n221CjNhTpsQBvCQPfXWiwgoRggJpFLsXzJ6ch3txvNF76fSLu4zrTRQ6",
  "key13": "623TJENuF3HUCEFqRLFRGDegce7QWSYHnbXL6NxsSvJ3KXpzNaLC7KS8t11EaMuD3PjYSa8E8W4FpNGgMUts6iU7",
  "key14": "414nDn1V7GQyNjdXPGZxRZWAsmZAEC2MxNbv7XJf4QZJHf4tRd4cB786sMmSN6vUz1EYBAWsgPhJdGfJfv9MV2aY",
  "key15": "3uPTZqebBs9ZuYkqURuHzaot6wwuASpThcLmcHCUfYnr1LwxQCxrqBgVGXzYwfdct7gpvMBYxTYbmH1PRuXU1gzx",
  "key16": "5KUwsoWxuFgF5C7SNvWDb1DKsbSrKEnH5J3ezJ14jEgoGM4fzfjrZiCrX11JBQLDYY9449Jtub1nQtHm2LoX31fx",
  "key17": "jBBP7DU3cphRk6mL5rhHWZK3wpWTEpLi7yPcBkHhMM6GbvVsgkBQEgmWRTA398pQHSXtLPS1eq9QZVbwWcTHX93",
  "key18": "3rGC925Pg8yxNUBJPEDNmYJHo3tQJkh9LseCfysxpdPSLKD5quZf4jLHyTd5mN2mB4yoFZ6CrzVwdSXLevjPpyBS",
  "key19": "49jhkRg9MJpu2seLm9PUvNs3TRi1DWsBEGxCmgjQZjxSen7aVbPrDSeenqGAkH63EaZnBGTiBVwXCSzwAw2onagT",
  "key20": "5F7W4G55wjHPbofwxPJWtUiKT2uKX4YKucd4kJXpEC29dKwJZm4RSCnLeT2bRrRDSCZJb89fnTEC1LK4eh3aMSp9",
  "key21": "5ffvyzoUB5PdT9h6fPGGyWxXANb3TTW74Bbn3kadagQsYyJA29w7mrSL25e74ugvTn6vFTbK5pKhMbH75TChBG8B",
  "key22": "23L1SKrMFs6fECEz2Q1qH9QYRRUj5u9wLKKZYvXJdhRVZ1isQujCoKfVSX3LmjzjPcB6YwvHSXAjt1jJ3E6mZEUc",
  "key23": "4oZYJAtsB6pE6jM77EsVrDsx4DcCgaw51idfrKT1h1e88Qryeq2xad5HPMUB6Chpv5gCDXGVTJA6mkcnBXBrLDwU",
  "key24": "3h4uSw3QaUz8U83X5cw8z7XKhnch3DkoBeDRaeCANWnfM27TYpVFqVEdY4KKvmx9skEaoWu13JDyKJLC4GBrpwS6",
  "key25": "3QgZbdwiW6stcdcMET7gtVPmHQLayf9mwo25StajNeWNhWKUUE32eMeyemsGpMjByYpKjo4JZK4GeP4f1qJdUsSr",
  "key26": "2puheQMxf6tTGrHzqeCSZRY3ZGHzqpHwbHYLULcxgcJPqkjgDkoRcasG5aycCpAuc8scLrecaqxQzgJbgFy3QWoy",
  "key27": "2bpHBmYZ2GhJjoWU48afQG2sKs67RDSVM5RKVjMLsr2Vp6mW9vDRRwmDa2ybMUxPFQ4JzzgtTPreDHPRxoGMAhue",
  "key28": "5UHotQNSpsHYgyMtiJw3TcAdNh9CeJD2W9zMbcF5R3jFEAqJ1q9AzYYYUGHapcdrBiTMA8ifdsP6M74YS1o1ZD3B",
  "key29": "4G5SDgUJu5jmAxVgm4GdtBrmWQ3z3PBpnTMtMwNYvv1kzadGgKt2Z7q6m5foHfrJ7CRj4mYKbmxHFyq23tfqBssU",
  "key30": "3Hu6satorxnctivi1W91xv4KXHi2Ksda8QueNyPduyhtW5QGLjkNEn7HcsoVhisqrcoQ5xFEwrzBVrteMohNdTte",
  "key31": "5G2d41v6uaMKrtkmM3xbX4x8Qohu4bZP2YDkwokikQsKo5mfuWMfPVqPCiA9govSgU8TTL6qzqo5ipzaUdEAnnga",
  "key32": "25pVLSVb2hZC9y8fw7FdUGYkaPNJSxsChZRhjPXebzeTubTVXBnhZ6yrGYsay8knncyU5L7Feg5iTmtcEZQ4esDQ",
  "key33": "36CHzNqR1qEQ7BJ1iyLoa52U4GMkvv16RGrDTXASt15SXiYK9C4k64TbWZtQU2AaqdH39Ahwdr7bNCAC36twjfaH",
  "key34": "2ThUHGAkADYG6MvcTPBWgjmLt5UAACEHB4n3xT2xP1CHgDTsBPfDtTn7DtusTYgwyAAYFtY1fBHPZnP95ZuFSXFy",
  "key35": "2VaiwvkTmiFdCJgCZ7qUVuvjAN8QwEcPYp4PwwNjBx9NXiBoDURvdwKFCJhutGDPn6oT9rxVby67T3iRixjds7Ke",
  "key36": "4nbCW2vnhrzGvFvRgtcfLNtWu4nHAS7gQSxJBiMoFnKYVUDb1YGfXk8C2qgWRvbPxV8j8xw8cE2kzXz4cSgYQUGB",
  "key37": "5nWcWAswvGHK3Vu4LFRkS3HZeB3PyyvUxbknVHNeNKi5JWoZkZ6QYXfqAdd3EzbyaU8msNkpo1vPbscRrJT24GyK",
  "key38": "2VXRZRwk57Ld6WxKpZ7HLhAGugmAvuxNd1EzJd3NqPJdLCeg8QR66UrLuVjcaRy5YjrFdCJTjYdJkpkzcWMZvEfu",
  "key39": "4hR8gUiJgLQUoZNm4sT8i64fFNj5cRYuD1AwF7AXn6rsx7PqohQDxF2dy6kU2HSfkmAPw3dJAZSsnevsXzFBrHMn",
  "key40": "23UZXEcrQ6g2XDVUPWYs31DzhhpCFCjg8vpMzHZ4McFDzBTh6ui9SkmQem8HkynLLKZaW7ksiDWzHnkU724nooUC",
  "key41": "25C1rG2LYP7wj84TU8sBEsupvyJbuMxheyd4fnt5UV4DSm9Q6BeuSo3ebovMiF77QmCbGJ5h5TEbCpMLhf3tBGum",
  "key42": "bfE83z4NdLcw8L65SKZJVm1ZmCHek9i1nVSHYH9QfSTC8ShzNmZhUKtbK11Vu5kXiY93jmmfR8DD5Zxn1CvZ1tX",
  "key43": "4D2wmJbVkcBsykfejWYGJai2KV1xuAeENj4rpxbcxmSxwMWo7cJ2is49yPWydFNtpwW9TaFuEh6juoyZQAF9jq9A",
  "key44": "5SBSxS1bcHM1pDRt7C5nbdsAFmWp5eGWybjqC4Gt8rz6jQREr4kdU7889Rxk2bqxPF1Epm5QUWXQYZJHC66KBSYA",
  "key45": "2ajqKA9Xqam2YpGwoA6opGoiXEQQy6tCc9z4azezE3VMpNooYBN2A67RYQWyAtF6EhuvMNqifiD5mBZL9y7JwcjN",
  "key46": "5zTZrsCWs9d6HDisQXTsH7obF3YKjQsDcpVRCs8a11f24zUE7eGUAx99BP5yxjg9ec2k1fCEgGCziNQm6iJDdLtf"
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
