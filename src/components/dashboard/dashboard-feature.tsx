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
    "5B7vmK97rDTkrW6hUiHkwurjksPyNpXm2SF1YN1W8QDQLeuuGVUWbjj7yYWUST83j1CJ9BpWZkxn7M6AEuSJbaX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3m1CYKuc7RGmVFzmg1YMNYFy8LqKX8iEyVCqoip8udh9m7Eg1hvCkc2qo7fh8CZtRsEMRXTCJofgPHWDSn5oFh",
  "key1": "2dYZjNAhqQbxpokKpxXBnt8V9JgwVQMg18BhzZ5vKqHnrhUh2nJnJ1YYGEUJphypo45cYn8MTdxPL1xSw2B1qEfZ",
  "key2": "2hak66GPBgggREU241fHEteorGUUV4GyTUZdQaAn1FbfhNZiw1f1TiB2bqHgNCrsxLBwkkCqyvaugb5RNKCxyCrB",
  "key3": "NWXtWwFoSR7U9y4LDbbuv9s7skUwy5fX8mDYct6w1zuzMgN9n7dvnBqMVnfty2S7vmTrr1juM8peUeq8eCE9LSP",
  "key4": "5gyD8Eq9wDMxw77mRmVbYqE8VeEHdyeuQnHPdgCnFDzWtKFJ9SBdykkLhjpUxj6KouTgHYCNLG3sy7gQcz2F6Mky",
  "key5": "3qEZ4G6GkLD2HbA3GBdgTC9F6Q7Wag5kBBbtEgsK1wRvC4AVoxKyCmHgDAr5CXd478CjJRhcG64icU2kDD6wMfww",
  "key6": "cpr3BV3oHCLS8nMJg8HZvsfrtWhGSRrvzeLhWUAYQHtuKr5xWikL7H6BiRNZu3CA5ZXZgkYCLNbNzB6saHqDNRU",
  "key7": "61kdjSkYuzgENmo1cDXPvESphHqEPsUSGKJEGXrqniGNBV5n45re4zpG6uNc7GvC332V4bJVCeJyDbV3V3eFmWRH",
  "key8": "JWM5aqUDREKd958F5oJKnT4mHNoAQ5i9pkF93eimb9wApG8E9kmXKUeJEV3JeAMh7hXDwgccMNBRW1f7izoNKAz",
  "key9": "AYzA9e5PBD7moYKShB9CKZW55Z84XT7funKMXdQrbvSX7pvFN4aJBuxXfZQ5iksLEo4ZciAMzGQSdaKPaakJJT7",
  "key10": "23e2kyVxfeUpNtTssVT3ZP24SztM2xACy2LSgiKSaGVVvC7E1FuhkUtQUsArUU8AwYPppgb1wW1jij8gd4fXKcLw",
  "key11": "2RrMkCjpiGEjo4Q7WgYRF741zT5uLrrSAQRQguuNfueCYFykqa7XniAfmSdsYKpWtmxmeQXap9og6tf52BxMb1TV",
  "key12": "fNwNjw8QyapNfjWAwvQs1shc9gD9wQS3R3GezHFmA9CiX7xKi85FWVnTPU8bu7LdkEHDdxfSrhPNTnJZXoJ15gi",
  "key13": "5jSRyxp1nJGgLEEoBWZBAsiB2bWrmSJdKyTinief5n38pHZ1QVcNCt1zk3RJQxJdeFjA5B6S7tPHSJUqQWhXrmzM",
  "key14": "4QmHM4WGWV4iNay7jEM8whyP7hk9dDwX1Y9pGrXsC8DN8ETZxXweuPdKuQY2SYkU5Z6yH9mTbJweef1eUtTZfY3j",
  "key15": "2pZTnND8ZtneDdHJWwnUhsqUVhQvVrfDMK7ZpNTRzYP2CB6HXrKayS1gAAygZroq6EWM4SmVEKRUzhCELo6fnh8q",
  "key16": "2UDmT6oHSnyik9mzD8p1PXbrL5LKjSNyxDEWQ4m38gF3WuTikXe1KUHwwtMo9N87QSan7tFDd8fR36k7tFaXfz1h",
  "key17": "5CHVkMjroz6Puxt686JpnFLakRXFN8Vk5PxNV7mpEU1mRMd6n6tKULUg2VwCqVHryScJNF8TrYu6EWWqgp8yBzTL",
  "key18": "2CzvcAEMbrrBb4bCV9ZoaUTdVuHbmmUE3BXv2hwGLaAwohjx2ZwbJbvQCJaRsB8fVeERuUnBJYk944QUi2i89Pjj",
  "key19": "vvkkD4L4wysHjwrsNT1kjzBpfFUgQBYc6FX42rd4MRfY98mncjAknnHh3CRNuLMNML2AnrMfnHbP45eGkA1iDsQ",
  "key20": "5SWerTaj1KXtpJJBL58PzRuvc7gkKvqM7ND8Z7S9iHnNQw7fFJtDdYvXmxvCCZstrnVxsMXU2s8AtfY3GBdpfUjQ",
  "key21": "5LvKXwu1nPSZ7NALn6Kq1bUndvytNUvdk9YCu1WPTDSH5PpKc35befrNTs4Ctu5dM5yMb9wRFpxgPdpMm68vw1nd",
  "key22": "5NG2NhXT3bRxgVMf7XtrwGkZyjmTEyeu5sMaams2zWmRQjrhCjMxnsA68AjcWtSJXyZqadWpVYqKHC47CqxwZYmV",
  "key23": "4CyEwtkTiePbhqf2RQFfW1jUvqAxxzPFqiNWodMMeAGwMvW5fqQnSE3qnXHoHXDL5JSNj1CZ8FRC6MR6dPHTFDkX",
  "key24": "44zoaURTSApo6GFy8JrXrkEVbswtufVdL9a2wpoUw4CnF9qGwSnuXuDssYdpU7DHSQCE7EATPYSryiRRmsxEB7yM",
  "key25": "4vDZFLAGdCAcRuvnDESCkAxtmkGctTLijH99kQBDoBH61eW3u3owqoPdknGE5jtNwwDbsbY3yV3n76g8zvvmMiEN",
  "key26": "WpWDYRoDZBXs1SvnGcCGQjXPdHXqAiJU82kraUecsPt13xs8Xk6UJQYCjsspMpFTudXQ8rxibM99f3LGbtG1uxb",
  "key27": "26t69aKnV3o9JeJcKC2kSbonPVppCRqLgP7T5PYqo2k9FCgjxxtddVTi9dvi8SiS1817yyNSjH8g4UoBVrnTmnGX",
  "key28": "L4o8xcnohgCo5GgbJR5SYHAqAosMN2ohCkRCUQcLU6GgN8AD1a2nf7VpiigaZ32kf7crAbS7xgijCPgJJUG7QPt",
  "key29": "5gujnPTq77L6wj5he1AUwW7tmjexNcNV1uFRP7utNZ4X8pxihSoNDWhM7trPzunV8XDu6rSJGVAo6wVur9z7qGvk"
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
