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
    "5mFTfvHnfyBXn2xjp8Vs2ghpEv4wGmsqqhojM9NjG1QSpY28P8K58gz1prvUTEqfihza6YJFB6vkga3jzmqVywtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBu68mVztzfood9cLufB3EQgrweW4x5vrddPaQ2JhxuxfFMBFZuACsw9Tx45HWT8FEFRPHbGo1h3ERnhhia7XVr",
  "key1": "5HVBxNLsemdtu2UPLKW1oVjNatuNERy94ugjzoC56H84xBkbxMhqvm6V2injKRkap4iY18C69oMwFPsEbqTo6aoQ",
  "key2": "3rmF8oiaAgh6iczjU1Jr74i94RUjSssMoTnD8vLAGKdYTubJzNqdLdFpJBuBy9ztTyHt6j5GUPty6HhL5M3DnyoK",
  "key3": "5SyN7QMcK5VS1UUtqthPkPQXyuS1DLK63f5uATfXXeM7BuVgyQsKtJg4WiUgZeNmjQikYJyN5eJEzf7g8FBqB4RV",
  "key4": "1knS2feDmHwcgdoavmHb3MmjFWCEfLNtm22gMTiud8CTksi9nvWrVUr8UqxAGpCgGwampKKKwAVMtDTpJdpwPM9",
  "key5": "2FSn2mDYLtSbnfxvvBESnJN1i7yz2H89BwTtq3yzWqugLCYYr4eH3h9pGKJq8vM6CDnp6sNZ6Rp9gXRnxDv1DYLH",
  "key6": "2ehnuMzywJtR36WpK67ujLBWdsDW2F2kAQ1FEuTVRTBH2unxwRQRX8RDcMXvhxYwf6b7tYLZWF9U3biKTNy559Xp",
  "key7": "2KJnkTC7XPNVcjkNoELpMZX6XMWz3oTaRSTjY6VXwHY473bMkCfu69Q3zpub7n2dkYB2KRMx3Y8gWAyEx7Pi7XCd",
  "key8": "5UCvbCDHfTPsKQ8yzsJfkJxRNkajfC7xLXFAPU4t43u3kTpeWwgmd8YfmDr1szh9T6JRaz7uThNjyDmEnzcfJcBn",
  "key9": "3Nr5khCE4zFLAXr7M1Z1EScBDuQRYS2zwgZfFsbvUigYuxNWXSWoWhSJmyZ5QdmbQtchNRrwuzwPEHJ2z4dURPoi",
  "key10": "5p3dR34ZgiG9SyqV5MXEkfowUVXQdjoNBkRS96GN1LUZ4LLRUa8xP7SBHKv7bJwjgKe35YTue5JMm99pawteYCrX",
  "key11": "CXPsE89XmrrD4sb3XCqK6sKCJ1k5Lujv29Ta5tTwRvFMiz9ijKi2RNJ9VgL78o6KM4SVLsLMjA3b5mnRHkWLJbT",
  "key12": "j5PeGKuEPyZqkgPXbsdhybxaW7CeZFZDLp49Z4nkhnk1tSbWLLfV8ruB2tGKaWZSB9fanKtn6dTYvXn14WSLxJW",
  "key13": "D817BNzwcLfzGGeXjpDsZWES2uzcsojBKfXxE77Y4iXsyPB4e3iJfR9YhSrY3F2KgZJc8o1oM6JviZD8UDXuaqC",
  "key14": "2MEHENpghXBBcZZH3BXekGFvf7YR8M9FvwZVuQ5gUDJGR8XS1AkP44u9uf3UXGApCwyuo4nU3DQ77jLrJV35VqpY",
  "key15": "DKAGj6RY2YMrCjVJa6ynCUVdqn4sLdpA4VEvWMFr9yAaUrLSoc6YSEXkYtrck1XyfdKH2HZeJ5pXfCTw791bURJ",
  "key16": "3jyPEiZt3TJzYQkFwRHCrwcYL9MvcdNW8GpyC8QPH3B1PMhTh6h9ztyEtyVx2tmB5mPcp7DbSNzzx9gTZPZh5gbY",
  "key17": "Jo7Ak1drQYR5jSrnXEG6VpmPT85CNp2RVj1EmRSTCSdc4UjteNNjGQisjRVJGx41ShW7UDLDphYG7Zg3xDNvJjk",
  "key18": "2wf3Ab43gEaSi7dYLLg86hrS3m9pE76yi8a6Xw3vaekaxGAaH12ho3LHxg3pMCBitnVC29Qz8AcWsaLXmLSVRaRH",
  "key19": "kKJdNTvxMbdqbzZ7QcW9CQsUF6pDoT4YHy4zENsWinpp3xyY1phBHsj3GLb8i5gS1iHhsLFoKiik9b5t2RwGtNi",
  "key20": "3qmaFstpDPdujRDqwVNGiyaypAFTiP64EoZwKVwRRfp4HqShKeDBumovmgHRfKqQ7PmUpHXw7d1XW9NgHtnt3vB4",
  "key21": "2jJNv3TnQRvBB5NsTsic4FLn4CH8rBp1iVG42mNvt3Zv9XuAPLrGx8SnJYyMPy1LNskjiDTnaRqeD77HELqEfntS",
  "key22": "3abqnmRYGETfwSLKPW3LyayDhVmu9fjQQvgvfkdu1JjfJXfHhE15xi2NgsFNvMZPhxZjmceWcXFomf1BcUjvfgNJ",
  "key23": "3YnuwYELDNcNYPQ5LHyrWCSyPXiqTyPcGU9cUi4VfhuHnES7hUxCM1AnoxgDT27sPrHSe5woUezRBfNQdw95PayG",
  "key24": "46CLQtL4XzNF2P8U9TqkD9oaoHFCZK8B4HGiD4Qv9aMVEGMRnUwFevYQuHDRvJQe5BcCa945jDm2oFi9Gu4RFFfU",
  "key25": "38v45FSFgmrihrRkWvzRkqmQ6akyjLbFst6zDZwqmpDmcpUCJC2pNNqUoEf38RJzSsWJTvQj2T94hAsCXahHveHN",
  "key26": "3YPGhf2E7kERHvDAcNWwKSsjhjEoVRAiTSCWbjpaydB347sWF8PuzxrcvDEpraE8wu5YjNvGyBKnxkT5JV6dPtWr",
  "key27": "2LefVheAEezJ32PTRrbviwfgqRUGaL2ogYURCtJsr9PKYWhhk9tY8bVbtZS7nVrivd4gcU6syD7dqiCGLK5XCAyg",
  "key28": "3Qh92Y4e6GJeBDDaCa3Qdvo4AfSGQV5VQ7qRxSuWGuNMXniNJ8q9aBJf2918RM77JEqJY7NGZQS7wJQDPurWY1ht",
  "key29": "4naSkT3osTX4jCAdexEhTn8fxoFb6cwejPWAbtNJP8mQJAeMbkCKJpqEMA9qaW8LamVifWxtJw9kH73wh1e3x9Xj",
  "key30": "3udwaN4PeyFpjSLrUuCgFdFDEoT4Q1udzn5zjhiSjkhzMG2EF7HX43s6tWoFdkhWBJfYpfxPpyokup2R8y3vdK3Z",
  "key31": "iariejnKtzAeuRcfn45yuaQp1C6GJoKfFfxoNffj1DRbYfVDMGQ94WDvfnRJPfbE9fPDXHpqWxspihvqVa8y7yf",
  "key32": "5pNA1jvWpDnAndzNPpaBL5Akg1dLaNq2tTw29fMoTL5YeM3wdzuStqgodTtKHmYx5RB6s43YM7vaKr1RZJ46K1Dg",
  "key33": "544KU9NQAMRVvYuuv22kKqyyX16ZNfk3QmQ12W4HQoSZKhCg4tesyoTRAdVmpeosxpaMqVeYDsozrQMHgHY81M5Q",
  "key34": "3fv7JS3ma83iWviLwJBx42Y8R2kJ2zVCG1avhGsBKg7ayL13jyP9S7fHhYs4Wu5DpJoK3q5xz1LNy6WuALpUtmXR",
  "key35": "25Kd4UnVY6WEQ6o3zEMLtXd8jsjHZQ2YEx28xntb5oito2xe646sL5DFpTuCFd2zyFjeE3PzBEYqfjPp7PdyEFQf",
  "key36": "3vdruZaNH28nw17sM5AGbS3uvML8AqThrMbv4HXSR3XKKdpTYECH5sEmH53y3VwxWeU8ZtmYEmJKkk7ggmuN3hMu",
  "key37": "2Anbfsz7Mh4WH1hxChPkAErBzkVdZYivEXEJzt9sqQajAeiKEWD2UmcGZafrjCtRreJVy3ovLHEJZAUMLQqGSKGA"
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
