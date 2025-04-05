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
    "3V4NDqwgaAVn5SNbDGRfSTf7mp3uh7rLJxfFWivhreQoDZfhDNqpYTSAqtr5h38tUDh5vXzAArwqqZqmvQUAtkvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBeH9p3kEnKCKYoCd65MhFrqbdZG571fxG3jt4n2Qm3VM2N2i3c5tEaiFkk7NAsQ33Lkfb2FLPzi6iRgZEpdPmH",
  "key1": "58WbDbWMGWrcxuK3ksqSrAsHqNweqUtJcbpKe8wfwp4JnQoFh8HrTHFWJmgSgYQheL6imyxHuUPszJvFqzU9izGZ",
  "key2": "31Hqd8mg3if2g5akd91qJThjETtr4nRDyuL9cPAb6dNT3BuFqrE82usa3HaUxd9Ak2cABF7pEedeMJnDhmpDPwZH",
  "key3": "pWf5K7xauLXZwzXyLhMA9uWjRm7jdUYvydHHKrCqj1wZkYucyB97zQrnaUDDBZcE6Tb26zVUAjJgSipEuLZu1PS",
  "key4": "4FZN2s8kGr7PqvMVs52YG6LVEDgzMdCwZRuaQWpnUaW7w5Y4qmGKaJkTN9wxuV4KhpvNbMRLrhSpVihJefwTibt7",
  "key5": "4PhS8JdXpTFGXQx4AcUUGPkmVu9S4cZ1hrcAGtMwgTywtsoMT4gZXwyZcr3X8t9zK3nzviMPUMPfAd1tyNUDEAu8",
  "key6": "KnFZfYQ1sDpoFt4XdV9kqYWmBWCUsb3AscWGsohMqKpFQFDCcBfpKKC5v4uy5L7NPtm1jrG142jsvwjKjdomRg5",
  "key7": "4kfLtNPeGgEJZ56krg4Ca2tDp6dCz2EijcBWFzbNT8LHwHx5tG4YjexM4rWCDKUwXsYCXLZwLWU8a11FWUfQUF6N",
  "key8": "32tf94SiN7Df1jbwWrHySSo9LsnQK11RLzywsFqkK3nbjGztb27CHZKEPPHb762Y9f7HVhZ7NUPHL9ZTy8Fprzgf",
  "key9": "3x2gwUW2Vaw4jukRLcahbUWrXXd7rHrE7RMXXEfyVNRV3gSiY1rKvGDmWdFTrGc2kpN6GMriXVL5CDnMsAG8NCRQ",
  "key10": "2YqqsxQLMpkLAShW2mb5DALQ8TKcczRZNAKW6PWPcFMPKEFWy9EuYVNxwSwZj47DTjsBcH3BBjN9fdDdQxGi3dqN",
  "key11": "32pVsVmUxC8hkkJGe58tYFxQxnXjQv91gwi1i1syRmRKcn9F8ATffLTYJqenJ98L9h9MjWug8sEfdArn3LL7yJFD",
  "key12": "5h6A3R2Sfze9m29UXKeaRr3Y4dhT4mnSy59qZfvTwvuQgdcfmG27zwEeApGdPCBcer3yU8UGaecBVaNCfZsyPzDY",
  "key13": "3r1jXXWXWMzRKjzYqifQXK3N2drEFgqiuoTLFGAbYRrKZXswLgzhLcoUwZ1eDsLRFp5pTXCfsmeoXSwugEiVChNZ",
  "key14": "tyQijV5HRtK4eU639b6yMkeo6wB1mgy2n5ZMfAKtpPuY2bY6pT6q33XNvijvR9zqz4wx9rbtcrznjBkSh323ZwX",
  "key15": "4qgTKTAV2HQ2VfYYQkSRBQTjrz4C9HnkCGR9Swvg7vuT2vWHTTGFaEQ7gy4fdTTcwZaEw2d69h9iWbPDBQ3Lyk4p",
  "key16": "41HdZQV5wMWJx6dZBFGE1d6L925qT4rrk6gcVdoMmrJcXyhJGsqecp6EZunzGAZxLq85JRAwvaLEG6nUkYbEJy1p",
  "key17": "4VJ5z35j8WB6ZB9C8qahuFojKhdpFepHM6ahAcoqdMKfo1GkLVtSFc8qg7oBdaNECTRTxwbMVn6XbXCbXvgoijm3",
  "key18": "2dk2rLDwM5iC9nLSqubioS2V7cejUiMJzHP724Zv6THLmotf1RUSM2FEvheWdVjEC7H8aqhLc9Ao1T1B6DaN8Tbq",
  "key19": "2Qf7j4PFQeneBkxjVEDjGgjJPB5fZBg9rSEH2wf6Dey55UjYuDNdyCYJa879Lpa4Qv8nkkGEygDafyejQ7zFYhzn",
  "key20": "3m1Z1dD9y6E1wFjo4Aaof4TWSwDpvP65f5VEZhP9NMWmZXSjozWB9gi7gnJAG3ndu4oyDo5EGVUU8UXGr7f6Yoew",
  "key21": "37B44cxwaVGdMGHFdaayjtheVS9wAUtKqwRHKLmWWpa6uD4YidJBiq8FSYSLZrkXdqM8sLG9cG8XRoHjjun6GHtm",
  "key22": "5cY4CFGAoc6dhLq4jnLPsypzJKGNrkqpMNzPY43vejD2xDiQJu29TxyYJqe2G9EWkwr8etPEQhAHPKbFqZzh18PE",
  "key23": "2ZrE4v3KTP9R1jBkg4NQvRESvs3vSfsuYFyGYHEJGpR5wr4aS5tEHctn9GNLqVuGvh6BoPMhLEF29UYW3AJPXznk",
  "key24": "31abdUrFhSXye3FEQBK3xJuGo1xzZNhrL3Pb1XENEMaDmd2Cv99qMiUXtL8DJfdU8rFx8JsEsyNVJBgC86Ekp684",
  "key25": "5DcCddXdAC5yJzvxz5MCj9Ldz2iw79UDpXSXmK9371hYnj9v287agf7ZLCoLWpbPwLdxL67FxpL9gHny59o4eR7N",
  "key26": "5DexpU3WhyUw9pLofRQzZSKD6wKuJebxE7hETQKKyj2kCqMTqmUQDfdS2vCaFhZv3iTTU2dFj2Rv3nfxyupLGjNh",
  "key27": "5s6GDp6haZtuFuCx2ZrhG1X6qspkHFNvjZxKZheuF3eSrcVFBuTos32wAYgutNi8ier9vSTR2ZiUdP6RhjMgLEtt",
  "key28": "2gbP52dmDosoL4zAQvyCweWFaoR6vmyHqgxuUSMFgF3FNv1LPyV8CHFRyqXmUKdqUiVAiqkYuNNBfVUej99uYqVu",
  "key29": "66td6bLDVsXGMJwuWLXZo6fkVkkjvVSk7WvXArfHn4McQByJmwoGsKgAEvaxDS4ZWNTFWF5fC8qFJ8LNHMCpQB9S",
  "key30": "3XCPvB7TZUJhrXtBScHAxn1C831RSp6ynmkxLZtzkVzY2Xs1SJxyUSTMrvAzy3pEn7WqakmLTXhyWpVK6trsAZpV",
  "key31": "4VDF3GeWSTjg5R8paNh5yNUKtoTEaTjSAAZHnxjDAep1b37J2WADjLd92H6vPwEhrgHHGLB1t5dahFvB9Myrd2C",
  "key32": "2N6vgtBu2uiP6n7DQVDf8q1hNFHZGGYDt2mPuQac1KghkecyBJXUy7ZMyz5asZHznAUNBWMxYmma6FpaM4fTqh7r",
  "key33": "5syvkpLvVB2MBc9WJUGM3RDy2y2dvJuvyyWyYzKanpzAd7bdzeSGRhM4NVVNidZXpPJBgniqJZevhG6ZudgDCo1p",
  "key34": "tusPZsMvyFm7JnsNciqanVJM6LuMttBRRZt3WKVRURkgWemE9rEVRzhWvWgTzGqnn8fDeZEMxfjpSYMhh2MgBJh",
  "key35": "SNg3XHqddaUw5fkqGTdC25QVKcjj9caHFyaVJ43XUC9uB4XhEvVKGjVoghb8AuHxmaZrez3Hyq3Te6nTZEdHfAo",
  "key36": "2f2Bo9V2qkE4hDjDFYquEHqadD6UvdGzg2PLaDEM96GUyYcXJCf5i2W1wyhctboxnLyMf5Q5DhSepumuzRtwTtjy",
  "key37": "4hpbHiYvK282tCe5ensgEPqpF9SmXfPafQCwZbrwNLFQcLp4WUy1JeMyd2Hs5VaY9p3R97Kp52yvxCxU4oPpzLR",
  "key38": "2F29VDNMEUFJNm1AQicNvtpcvJGmkv4mKSqkbA6qUP3onh5FGgYMTdhTK8T5JQUB7E8mTVvVMkfgeVQKBkzNtxFM",
  "key39": "4rzhMUATmUMazid5oJCi2bpeX4DqBaFajR8t8uXS9rGvpmLGNVFB2hYvBbLvhY9T7Pr3p8mu4LVg4WsKcNPyhYBM",
  "key40": "31RXLSyRBjM62UARjRSDEbwk1RTDZ9KSgvcHPUkduPbHwSiY4Joa5LMic25a3u8PzPHrbjRDDS9Z6P9wS7aayvSW",
  "key41": "2yAxtTSYPeM7WnYANE8XLoYBMm2BF9E5LN5SK3AdApUJ73QUVG8xwLSsZXkwzM2TeHrcp5ULbptW4G2VsX333QM4",
  "key42": "2bnYrvHPgUKxATjopAxs3AczQajEkRMaaWcr6Byu4Tz1NfVzGJCgMwXQBHLrf2B19owUroaXwQZa8xNubRz3TVyZ",
  "key43": "2QPeGxr6KdvQQSi8aySwuEV3rVndr5WcJbJrRjQmcdT56JJDiNWseeW5cAnjG7vfSeskrqoGA45fUkWAPatCa9NQ"
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
