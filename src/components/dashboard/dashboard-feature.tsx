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
    "5BXhtR7RRT7tEKcguWtLzuHSAW4yPiheTWiBZVCLWWgMz3xRiygTMHgzRc6FVurZsjDGuoHtYGtm9uuTPFvHp1of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aW4cdpnvjNcrX98981ZUDYXq6z76bNDSH7bhsfiP4zLUZFZZroorJW8k13Wo5EATY4CEA6EscU2N9QHxfg9LHtV",
  "key1": "3uuHWJDFbRrmne1sxvpqJcWKzv8P6Hwe9rigPCUhtfyzU5Pv8coC4Ug3wq3MkbcMb3YwSiFqhYa9XC6WcRZNWtcP",
  "key2": "3VxyJTRFpyStRw3xwdkhhXoGxdi1xXhhhmnkUgbdYW3JiJ3UBqETDdCorsvMu557fYrSZW4maZkfe5FzFnehQbz9",
  "key3": "3wTrpQvMTsQDYwfNyVKyxq17xobqysf6AJfmaAxdGb2YxxuonLqnsLnHjtKKnE8EyijmBHt1VsZxGBxvHQcuYSqM",
  "key4": "4Gd17F71QZjXkiBeiPFZHgLytBv7W735FjWxDTn1BWkL1w1NFCM6AK2GuYUpf47SgKWFkTYu5XJrFyEbAjdGrt8Q",
  "key5": "d1Kgjovg9PrMoTWZx1DQ7Kqwf1rfCwFGeDc3ppxyxTnJ4e3JpfZKcuqFpEhbQFPdWbFvViC5uwxcMUpyQ4nHYeC",
  "key6": "41T4K5uMD5hYCb7zj9FJYpridoX9hH53U3EdGtfK9WyXb2zhpSkL3rgyqYuGfUuoFyURRL46N9ix1migxgS35hNr",
  "key7": "2VFNRfZQoY9EqNuvftmfKmgtp2N5pxuq4u5ao27WZfhkd6MtDXnE3E52XXbbHSdsMNwXd3wzrwzvYbm39hRyL6G6",
  "key8": "5bVTMTPXDA6rZDdbArarWHhfkq2BmKR9VCY9MontWP9zv9C4YCdojDJSLe3BeBKKrzFMrhuo5JVf4oYXR2Bd2vhS",
  "key9": "2zr8VeZCDJCjow2ceTzUXDoaLi5LV2EyRBY1bThfU6Ab2ZpgkjkG8KwZyNWHedMhtDBL1Ta95VY3ZmQuCPkXAY8x",
  "key10": "2CXS4FCK9xsX68w6gX1T1PMQMGv7NXM7xA1KoYxwexQ7AC6k1pkpHDtw6BKBFKvCgz5yZqnCXusmmTjh75nx82su",
  "key11": "3TePfTQHVfX5GZ6AN2XJtyU2JCJDfbUrpYFtTLxWgDPwsM1E3BDckkA6ZiruAusfoMFJvLinamKGRUtYSSKCctof",
  "key12": "jZvEEfVT7B1E6SH1HCVXyQUga3akiNVSHfXbpbuGw3K7zVsU6oXfgHLB3A2Jx4hZbR53gEvWqkzoBvtMGqEjxbN",
  "key13": "4CBPc5pvMYj4XCoMV96HXLPLAYRcXaDrEpfrg4WQkDQdgA3Hzs94xuVFbnY8c9mFXArtv9dLaZtgc7657eq1MsdY",
  "key14": "Tbeeb735aKioxsf49i6PbUKX1W2xqWFcU8Hm6PuRpEZyL1hW9Si8VTq2j1rPwrXBQ8JSKeyk45euRGYzgVnCKFe",
  "key15": "4KekR3L7tfUZBJop2gMJBAXsjynJMab3gPQGQc18Yt1wWiJAkfeJ2rurH9NGYyTCxDLdMSc9iw8PfeSAGQvRkPEi",
  "key16": "3A4oQx9sLnaEb4GQbFzHzKvVSjLFoH5pVonMNAQKboQAFrD17hWUu2xPQt1jdQed9GNR8Dq83oyW8eqV2XgWRBDd",
  "key17": "56NGZHMCxGrpVpjvWBiDoKPt2fBFu1RFGwGGKMmcQbpmCVxtUcyfq1CzmXMfeTHZVFvN81TmNDwmoKMpWkPC8kqy",
  "key18": "3vYh5oS6BfE1dvePUcheq55rYYw7nu5CpdakQGueAbrWLF8qN8WXjApLbmZw2GFiczXy9thtFi61fKLa5f7m1k1t",
  "key19": "49UwvfBj7ZdkNc6BurawvYJi4XQ3GvKENFzTxasLDJGYSzaxaaBQnDYfvdeURxHphSqGgJZ8SdWzeTwTSExZxueF",
  "key20": "3iZidDV2XTrDP9k9pNxCdexo1vd4z53ZYvkajhfqEDavS8Zc8BNjPVP5YEb664fGc9eZGGrPFN4R2XrNUiwc3Ljx",
  "key21": "2MWFdcGdot7TvDENBnbQY2gdiwy4pJQP7QLaYYadshfc7wLNsGwsG6LbDXdohRNQLptvPcc49DmanBw4p4p277Nf",
  "key22": "5Q1Fi3VyA935QwoMWHXsNh8hx6mCoMzzY73RPCvniRNDSJDzymvEBqQEMqea954ZQw7SHaPxoSJvRQwqS8ooZvTF",
  "key23": "5pZadhXhRC8JTvHw41PqNzeQ6oPChFJ9qZjc9SAtCwfboL9fv6zX79cKmCAfbBJMU3QYKqkLrZE88jhkwmcbT7vi",
  "key24": "3RDQ5iiMSSu6exZJv7voTAQa4VG6byXoNGEBsHLp3BdRALErqVPPo9BdFUVrXntj4SAsCjXScdVZDHTsZY8cMC8z",
  "key25": "9mjsfdDHkLDgHdkBGLmR4kGpxjBR6k6rT9GZusF5KAd76XppAnHAzzpvvxaaP2Y22VcQskuEofaBfvxTrnEtfuq",
  "key26": "d7o4M9jYdDcGgpFifL5sCgWoTszycUxPFST42Fq1ZThK7RLf85jXAM6BqyXRQyaeX7to1Xm2XareEPMXMdBDXhe",
  "key27": "3DdBSpASyAwhGTmjjgzR14cjHpt3hBWvoX8paVGx1DcBZ1kWu9XqcydxZpoQrYmCB9ugBiasKkoNotRuh5ZsnRfg",
  "key28": "52eqwf73H9x8DKRxQt3Yjxk4JWyhjFRtYta3PeTrDMq2SP6mesqq7fgo1VDtGQ8zPgSb95yR7LPAxZnRDJN2UjAk",
  "key29": "4X6CBcMwuzDzui7x23sgruQP5JQkoneBwQsgzL42cPsDdHY3J3qaN3iaHPih4p7XS6tEdSQWKTgj7Fxe8XotdJJ9",
  "key30": "2yfUGZnPfGZmeZQP7SqniXX23rfmDLxiZuQQ24eEHA2GL4BWVa3MLnbXQj6EGYhvfkPp25YGdWaGqjsSGevDTDjD",
  "key31": "5S1bQ2jjGLK55fhh9gpNiMfNtz7F55AJBxdiuV6Ux4anRe9kqR6s6KXosrKwJpqxRidujbY8ox4q89ZtLrHgReUL",
  "key32": "hEMUcd5SRVQ4TejGGpHC2nhY8fq4BzzX7r6S71836GDfU2huev2qHXUWtiPjUER215tsZLv8G3iop9iVv14PZDd",
  "key33": "2y9ebaGRP98DjqxdC42JuSvqWpvsrCMGSoVHdFWsKae2tupF7P9qPJnRjsLXbXb4yxD1vmTKe8BmfBdCzPAv7Sxg",
  "key34": "cjmxfJuBHdvJowcVeQTxcWnaijTwX8kXmz5YEPbc9itXX51SWLPhtJqVkKtUtRiRx6XmxbrSjnLpxnkbqhCc8Ma",
  "key35": "5FT5NzmKJ7tnpki3ivoTjAuea8ouWmsZh2dz5gTqHo2G7JSKvoCU6jMaR9dbqwbo4YYM5DuwKY92SCrb7TjjXPEM"
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
