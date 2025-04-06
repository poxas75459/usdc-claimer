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
    "2kPhW46uxdUTogiMWkJzbvwitxGMHAsPwaPEPqxMHfrcyKvLmjjxQFXopaVz7UtveMtM4gqoW6DSHfF5KrRkTbDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjuBUaAxaPWGBbVMDU5paQcd9Nx4RR9xPfTGLixaU1YkdD8seXRcHd9UuajZDDy3BuFp5E1hgibDVsawfirE3ps",
  "key1": "61jtDquSomzRghQEAwiv7KVzdEvoQUrrXwyLv5UbvR8n2EEYAbgEnJd1qaP6fytn7VPw853egUAHZwMSeSaWPRsg",
  "key2": "53ZCJpuaowS8f26Ja4mNMwLBx88nX5p3Ye9y9Gy4DrfM2yJ5ShvvjcBp9XzjXeF7xy1Y3f7vsaYpANhLPJB4dFcR",
  "key3": "7nycaS5NVcnYtxLPiGKCiph7fbvb2p941VU1CdW89G6UNCNFHhmZAjARhNiSPmcRNtnntYfEEZM2KgbqVvar2oz",
  "key4": "5FHfYZLbxKjw7GikCA82ZnZPwiDJB6N62ZUDpn7no26SxyscMy3w2RCkZ2CAtKAvWbi9CDYdQ4Tuhs5AZGgN5b8s",
  "key5": "5kCjyTx3JU28rua9yDF9rvWrXtEt2sCZXnSAjvvWudrqfkDTqgwcrUNF1L5EbvWYi11bePrnAvR8h9BW8D7SGEDd",
  "key6": "2Datp4s1jwMUju6MC9hoSHCRZziamk8ajEjVz8xXdvLiypmRPcQGACC8aH2M6r8Y3Ch89t1dtdUhabCihXkyybC6",
  "key7": "2M5WJcJowU1dzMtFC7nb3Po9z8jwefCaDavwDcSPZgayV5VGoKQXStdW3vGEc8LvaoHFf5V4tXjHs3Jhs57rysrR",
  "key8": "4iNipKvJY7K1zzBgUwJWamaCCRgEZeTpL2DV84P7ukhfnAKqA7oyjLm8UZ4NenUEc2MJxwjmtv9zsxT5MUjj3Yzq",
  "key9": "5FjKPumrsNsjwRek7heEARjFLYW2ZHUkjL2LgXDp8QdyLZakeGxxasUWhtwRYVakbiiNSVcFD5WJpXrnJrgmZ9kQ",
  "key10": "5oqDtD1evNabnZBLQ6BiZtC2aKvw7qycF6QpW6d1r3L4a39RJuZTmpQJH31kbJaJnyGQyMXEVKFSfZJ6iMmoWh9B",
  "key11": "eMZnajg8PByrJSisbFvY5fm47jekpDqsTszGSQFhBxXZJZhk2fAeVYeUi14KkM7rP1DaGM3E8XHNdm3tGn73xR2",
  "key12": "4crsctGDoRbbreJreLSRRRv2uDRVMyb3GTmaYMpe2rviNKsxwRzBXC6ditdFp8E13TMrN6hmBiJy8m2MFB5jF1ky",
  "key13": "Yo4YokxGaYbL6tLvW8VZAvc1rhNFp4G8ihaztRfoAT7jBTi6ynVgbdAEcjqBsCg5iy8Z6kDTtPyHRyRjxjUt1to",
  "key14": "5TJgYv7BwouqnRhznswT1zXmAWPFj8pKWxVWMtjpC8SzjJZmKytTtT6DrFB8cr24M3Qd3dCHFurK6EVxrTvjTBQe",
  "key15": "4JWQGdqe29UDy7AUMNdmrNLomGzJ1ytLQr2AGr2q8AAeSvnUgp1PZzJmkMqKxUGaTtRQi7n9mbKy7pHXsCwPWnAL",
  "key16": "35b5wxTrqd7DLFyB7EGELMQntrpYv5fPg2mQiUZssZKRBB7seZSDMKtK1XTkB4UPaYH8wxVtaF7jHxownXgAgFmv",
  "key17": "RMbyRwrWNhm6oNdnL2P7aNZMxFWfXzo3Pr5LW6u65AH1mF2r5UByWYUnB1XpVExyve6mzVotf5K7Ms3fgLH9U52",
  "key18": "2UPKcKV4PpzVpA6UZgzdRcKqhQwPqL4D93pLijcPj5Q94etTXfo7QajcC8yuZ9ioByjzZ1thCwVsLUW3eCH6GDQf",
  "key19": "5J32AYBEPYbXeAHK4aXwYDT2wRQfUUYNPSC8FLNwF6kuCXd1UFxqy8VyQHcRb7WuoaMNZ43TWDAPgA357k7ve4Qd",
  "key20": "2ncjnt3qsrNS81eYtKSe6pJkorvAgVAheXCMmJrXZVXiaos2GK6Chau5zRWLJRYpPPNU7kbA2cPRLdaNYX8DWcvj",
  "key21": "3tK7X1jh4swMmH4JaK39oz4Zj9MR7P3pYUG4gMa6fZSNEU9GkcJu1g4AKxbQEfJifef5wi3LQkEffK67Ve17dkzj",
  "key22": "5hEjhgUukZbSLqMH3N9voNYHsNVv332X8vZRKgqyYETEcLCDxyfYtaCuqyqq3nCxyyGDJ6AGdU4dRfDyDvZRtU7q",
  "key23": "1TxDGLkDaQwUVsc3259ARoSfZBbLYd7GeQj5MY5GSTxyqFBc6fCtGfEFuzNLCLYciRSp8LB2rD91YtU3MK4Ms5X",
  "key24": "4ZSLgmxhHygGnoQ4L9yPWC1BhPGeQFHZDwDjdnbrX9QsV1dkWKrGMNEuod6r4YXMoVoXuK2vRQdDLxPgWkrxnCJ",
  "key25": "3ahzfSKRHSArjU5euffKKuV2ekuL15pPgeW9rJUiqj4z4vctb6zwDiKiwonW5Gi15TMpkjPYTNLumtU3yx9CZYgC",
  "key26": "i7WrdtmLgGbJ5Dwgzc35zVdy4R5W1zzgdANZq3PidNdSgCC3sxFGX8W8FGudUXKH94jFj3BzxoDU8DrRDKoo14j",
  "key27": "2rWBdH3cT4EveurrWrZx9YqwBp81dXC8SDupAnN3F9PJdHVYJ8poH1zBc2piB46QVzPPsNAaZ2Lmn7T5ErvQ51gM",
  "key28": "53Z13apZCKHAq5UAaVEvMjjs87hagoZr11uZUX17aRvo7792ZK6WRcqG4uLLsGaYoxB2NmnkZ8KjpCVXR26fams9",
  "key29": "3FuiU1UyqNwTS8d1iWfxqoeyKJYwTi55ovTpFYw8DxUB9hbGcpXqa49kQ7euFZ3skntkabtVEn5PKFzrGmcsUFiM"
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
