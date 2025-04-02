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
    "4W1XqanfvmwwihGJBh9DpL8YwXV8qNp9PJ6mrWTFLucDsgGEkindtMzxBZjFqWzjBgbHxKnzvmZRm4nB7nd2QEeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479qLXNUbbsbauPXTDKxomxNYR3yfct8quQpdfmU5MMrSNHo5qjMAUCfRM8cgDDBkgvqTQwqJ1VwG5Yv9oU6MLTm",
  "key1": "19e93wybQtg14ScryzK1umLHtRFkcpUAKb6z8w6H81csuqVNAEtqYhv29kC8FsmNX3xPr1XV6Upg39nBz3fqBEh",
  "key2": "67cYuMJfMNkVHsckf3nFMwcMjeeCLjAUPCCPqikYDtkU7ShDNsXAioJBqmUg2Rze9AbrJiZ11mr9o3PFXAKPmRTf",
  "key3": "3nKvbKr3crdrEcZyLaEWLcxiWfb57sEzavcSYu1N2TRYteDXjhGzkRyTcdzHRLNidmVV1c3nc25TPWnK32WEzLZv",
  "key4": "499fScynLqfcQ5qZLm9wL73vQ6v3mi264aocV7PZ6i4MFQ9KLesGV7eyww8HkfgVtiSArUwVbWq4m7E2PcZeRxNd",
  "key5": "3MZcj9ATYBLvjobfUnetQ3pEYHmtyC4RCCG3ZxLUAv1YaP37WMXQospgZV64dpWVaSni4XVPfjPwCWUNpi3HLpLn",
  "key6": "25QBNpKx2ZcJ78xezyxNcBio8TMgz5VZZu76o3DrRCvnAx5dDdKKp6Rs9CDQwWABvouPh1XRVV38uu6kA7q1XpVK",
  "key7": "2sN3GzSGDEJwXW7ruY6Uofa4LkbaAcwr4sqx5Wtc1CGdeUwuEGRmyDfqVy5RobhX8RHrfHGSvnwcFa1S7ZA6qXru",
  "key8": "64DccLvTtBpQRbuRm8xaVV622riC7Nf7rjMytdAon55mCdrj8EjeC3d5iXsXGqahFcsjpGN3gV62D1kfFQ6YBHZC",
  "key9": "4VM6NH4QkLjCWjuBm2gne4cFcgv9fz4wH8Kd1rgXU5gxw3bv4ZgkJmMCAzuSW6WAeEQUtgQFwjhKiq4V9qXEiYjt",
  "key10": "GTkTiMWZcMkRGoUZA4fWEWQnBFUhKmXEk27bXgZQpaF9Ln7fvpdhypK2mojUjMUcu7w2m2qAyRMj4bKYmjeHYwr",
  "key11": "48WAG1xXquGkijhKyh1iHHndtcZUjVTMZAXvXDvtQYLGL7Ly6po65XzFkmfwsYp2c5ygpsXe415sjwjbYYfntX9n",
  "key12": "7wKb94Vsi9FC3FUjAVp1nzbqTWWvRfTrNX2nY5zJm7sfarsm7t3Vs63pxYMpHoRiGUdqerEYQg1goaDT1XRGc2N",
  "key13": "mK7MzV6D99YA189RSTrPzCjaG55uJovCfMGqULW3WBL5Joa1T2iTS6vjzPnUxadGgFL7UzDEqiQQ24VV6X8XRAg",
  "key14": "3B1Yqr6qwjdQiAoXtRLEgxHcvfk4hbd1G28wdcuAA5h4dN2sVMtEBXafuU43yFkm27AhCHA8SCBHffc6zz53kDYB",
  "key15": "5rUnE3YoahuvRo4rPPM56s4baemdSNgFkNirxnxwyKhm3ZiPtweNFGsVvovEmafoZfW9tRjPWE6v9U9TED7BP3ht",
  "key16": "5TjKd3rt5QAGcox92ZgZRkunSfbSpfpzoQ4vbxpyTzjabgJvykJBTAZLssq8PhLgGaV6kvQavg5XRCUZodvrqNjL",
  "key17": "2ohBWPguppq61zeBGhS9GrPtHxCyx3RUmfm5ezbH6M1snsXQ4n51KC4BdvaV7kj2fk19E2az6QmbbpfT7NTSqtSh",
  "key18": "2ck1entdE6g5CDJ6y6yeqPdkqKHK2VtWE8m43kpNVB2zn3G6fETGUotmjawXpYLVzb4U6vnGiDCEkE3QukwBYf2k",
  "key19": "2EZenY9jnWLLTKbcyrrzJVaavYN8aE5FQMorQ9CTjgxyPb2WvVgNBieJZHN87QTGWrat9ZF1qSKqPEJzC6gcnQgv",
  "key20": "nYnF47xNSzMV1r8gg583qBfKhCkzVdagPeHNDwtcq8f6YchTDMAKMY8HndzKYHqip13yyi4efYkM7B9qA7Bt1kB",
  "key21": "2BMQjtZZH4L8UuRaUcacc2B4oSahgS1bU9VFow94aPB4rzAVQ2J1CeAVDf144g883fyRi1AGy1YHstdZtSP3hPoo",
  "key22": "2J2FNkiKVy5m1JxAyS9PpdioKSewQiVw5YUTWupiXFC3KmVa3zwPJMpja9CB5xhPtdxxP5mhjsXZcMb6hWMsB8ow",
  "key23": "3qcXQmAE7qdtZZs8mqDxC3YbXwWYPcMmUcYcPcuMHhLjFze4UsiANZDsLW6PSe51eEs5t7DNhMkixu2Z76jSqjYR",
  "key24": "2bLCv29nU2mtxANWPV4oxWv3PFnZc2Gd72KgXFQ9zE3hvESkGeCYiLEjnN2tE65MsHmqZNBQexwKaBzDbZdxkLom",
  "key25": "6G3AyjmStUxhg1cJQjLpjqC5uaY4H1Dwtou2v44pTox6E8WoLvh9UYyUCwFcLmE9WzAJA4wkaYwmMr3zPu5t8Nh",
  "key26": "3oPdaHZ1T1Cu3AkZn1Mjc4CHYnwStZcPmWMdaAtyThPw4rZYjYRFhqgPJ4nzLePESS6Qdradev3MJUxa5RLB6pfA",
  "key27": "4imkkewWG4yY5xv3763uMB6zmNaoS55LAAJ19kS4WozxbryumGgnhHMp18SJ69joJQRsXQH5racd9HXHBLDMffkL",
  "key28": "39bSpaVyj1LbaBCLztd5sgtrNUU2B4tg5227zAaJCfUXid4ST5CkxbusJfC6NgVCnwJSrFGwJcQDsD1hos61dtHR",
  "key29": "4KamVEEwc9Pz4cVTMs9guYE2XiL1Qb861up9iDYcW998iU1S4t8jEw4nSTskUov3FK5J6QzeK8y3mNyjkarMD64P",
  "key30": "uqPXDcNm4U1QyGRCPjvqE9mbd1GdrYTtKEb927Y3ZpTNngXvLc7WqBNeuDeyWZTqmym5iDeofA1vvH1q4dddq5h",
  "key31": "4x2MamYFboTRKLvBQCLeai7mJgBY8fE1jAYHKcMShoBrgQtWPsqHxwQuhEKmt3JRM7ztxCWJBaYmiFXyWkXTonSb",
  "key32": "3jg3v2QggtHYQfia7B64ckb3GDM71NQC2bnwcqh6nYV2Ab8NaFx5xXMvPJ2JkbMCszgpe2Lu44zNHWbBQ57jd8Jr",
  "key33": "2zL9TyxK8GCh1JQAWtRh6hqAx871K4xVevWVekxnkv8xcj6b7yrvPjXZ9kXZscxZDRUtN3KwkCJLGghJGvVWkKfu",
  "key34": "28D1QLccPBLzyeaQPHQhMdA2eumZxvHmUe32seXnxNyQcjj66Bdk6G7bVeKRaVkMUhxFovnhfcVb2Fi3nHztYBbe",
  "key35": "2JahbT5nw7anbn1rnMti3fSLT8rMPL4vwUMSto9cP8WirN57hbxw2j5C8FG9SReQyTy8sQSqRuLwa2haCct5FJuB"
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
