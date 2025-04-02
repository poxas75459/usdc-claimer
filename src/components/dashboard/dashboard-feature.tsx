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
    "4XRKaWYSCrqi3VcNHWiMNeyTHzwuhd4pSPtrwVhk3MUaqumLEvQgQQY7QUu4cLR64mMtaXTeVdFZMzNFzucsKFLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbGoDuoWbu6s86AZkjWk7zVnHmQQ7AK331F8e8FGyALwVRJjnfBhnG3N1U8Y6S9bW1N97zWg5UF8sKTKz1NGMeL",
  "key1": "2xDdu9gYk7B8dR8Zrobp58MhaFnsLWEsQE9DsqsmajvrD3tJQsSpCjquyWAGBGG3SZH38E1LsXRMMkXZ3NjZFJTq",
  "key2": "urtwpjp4ctBDgRRujQXHcruSN4pcLMzh6V9Af4aFme5wTaVeMJmGR5DZGBiHP66voWDqzQpisbu99oMDsdtbxLd",
  "key3": "4V2sg5CARNWXB9UhwY35yQYpxoJDnv37uSUPsE8PCQ9oUFGwXhzirsG4TY57DoF4Z1c3qMJXeZvsdx1hgpWxHozr",
  "key4": "3xCTsAGBZsj4Qdddk5mxZjMNQepukusYoVn9gnEXuvdUYzvkXguYDtmSg5w4wq33Qt4YEJEEVTwXgRWkrPm6JdzB",
  "key5": "327ZaoZFicLzSvm432np227gi8auwnUcZ32voDJhXuvGRTRRErpLHhH8VAmrQWPR7MKqm3WdFUM6z4sUihhU1r2i",
  "key6": "2ehqQ2XC5uyXJQC4kNQG51bcszgL48tY4vs7jRViW9DiGn1YzWE4jygVpnzJP9xsXmfAnGNXZHShtvYgNtbHsQ5V",
  "key7": "2nAXKJycQtBptzgExKoccimS3wj4i626nyHz1sXm9j7SQPXE8qSqEiS2LYSfZ9wij2cSDxxQZDHfVo9UfuvmH5RP",
  "key8": "3hK3usuHy2jnPVtSCPzFz1nhiKEJqWiwZQjDAvj14DogTfVo8xMEQWHi9WhHuZQgEFZTNLg1N13E4dnMxrGdwdpC",
  "key9": "5KuwRJVrGybExDbVrhM4XS6pa8NXGqYcAUdgKdwnmpRi4ZWWD9pNiC94b9fjYKfwhDeQBUnduQWor8UmipUMfSBA",
  "key10": "4kDdjWNuYZiJ8MD5r8BfpBeA3F9eC8us8yNgJMoCais47VKB6P2b2tjLZZLZjAuRRH3QJ7GhbUYtvRtnAJDExLfG",
  "key11": "5UGamSPrTw2MsTMydE4N3YRTQmD7XVLUaP3a4zEeGbEUfyfj8a4WkNbtiqur876aTFgWRFqt8eDGaB36xDh3DxKM",
  "key12": "5JBRnFYejfqg1gtUwwag21RQPBjYuy2DuqDkAiGACa9nVVvHuw7kQrqqD14KNje7FxaA93VnKpz36E2k2NudPxu",
  "key13": "4FzZbwiXB5E4MCPY9DPeei45hYSMis2mmyCGA6ffgeZxkrhBQ5jDp29wLU9ZDRkwNGNyH1ykVWg42DyTr8dVZ41m",
  "key14": "4se5HgnLTWHtT6byraouf54X4fWsrrCSF7qizXbDA6q1zt3FHZxnttgtQwAzSpDMHghYJwkpHS3Lpze3793pt4Gn",
  "key15": "36g6c84TdLwvnNUwT14hJrJcfBR2e8eojTiNFHKbQoaVM1FiMy5dhcaLT95FxiFfqgDepWehqSaRT4WMeP7KLzo7",
  "key16": "yo89UqRxFSBXtdJfez82SW3gVvjwZP9C6tLcGEpy5rLQq5wov1hbnptbKm9CXFvxgULpczUwHrK6hT3QSkh6FYp",
  "key17": "3S9jDkzWLawGQJAyyqM6TiWP2nU2jfc6DgPaFJzJcY6GpTS7LX2iptfaA9RiXP785XAi7pw7azW6HfQWnLLwtPWp",
  "key18": "7De5K3LWsoS3C3LLYgQDpuFpt1y6CsL7T2DX24N2s78RHFfr8hC4C5ARAxFuy16nhYKJ5tiuavGhk69Wzdposcj",
  "key19": "5h4UH9jep4oWiqPBsdPhqoQ6D4oPyKKEwaSXhHmN4yMph1zmQ3ZR4XBga5piCfag4FhR82jKguYBY7A6nce3aPXD",
  "key20": "3B7LN45mtYWAYXoZihJF3cK2bAjpntj8PCPFJeXnHjbiQbsQTNhjtKD1TS1dx6TWpGqF6askNyVxb4Si5Q7HWPQp",
  "key21": "3nLz3ewYQPT6yEW6np3C8qMSMSKiVyjSLLKR1L9xuAB75eGXGYEvqvrae7muG9Sj3TxvWqEa57tUsc3oKmFinFHX",
  "key22": "5rSMt2PC8DL1KmzzCr17fRUb35c1XhpqTnDJrTAS8vQD3aYcvHQWXJ58anpZvVR9wV5jPQMoYtY6Z6onZZF7es4C",
  "key23": "4gXXFSumJoqwtgDmfCxUhMRfBD3n6MzpVd9h9wQSFB6dLeXvQmqXaUSkPJZCo856Fau1c6EugK54gub9RitghAVy",
  "key24": "5Z78ZVCjFZZ5iGYpGZU7nVCTZU3uwb7YTNehbaQM5uW1navr6eQkjzqZyDk7xK6D26PL3n1JF7WBSmr4ntq8NKn2",
  "key25": "3PDqAAW7svbeiYf5K9FwrQVk7h5VC2zqCcJE95RSSWqFZz8e68aqBVk968DqicH8h3XKQjyhiMxzPAg5qN18rVUd",
  "key26": "37tL7an7gqpHwU959Gg4D4eaXhUb8iuLH9FM9T7vBrthig2rJzQXiFogDkvJ9isNLoR69sTDravdfsmKhiUfnx7R",
  "key27": "htudtMBcwsPCUvrmzRN7mvoAzi4VCCrqJcW5zDTQJ1RgNacnYUofcLPkGxHuGFov9ceiHprGMh45vvRheWbqUct",
  "key28": "2qJMxUFbawVNm63Pvq8q3BAkqfgrV3kBcQ199wsxUWufzWpqZyM3dhFV1fc8KPT4q3FgQBocdsiNuguXHWCwCBGw",
  "key29": "2NMytZGExkcEMZbZtjtLzum6FsmbEBBtH1S4sKZY8ccs6YcooVf44Yt6RQrcpjpPkEueog2pZjSrSY3CKoKokqjx",
  "key30": "5M45wKDVwGsLAGoU3UfYdJtrn5EMMKzdD9fsCZGU6fNCYpxX8JSKoGvMqUJvuYyXqsR6mLvbdpxhZeSGQAVQC7hc",
  "key31": "5towrw3kDzHXyo3QXrPjFbJoBp4xCooKanbMJmHdGnSmKCMPyBAr18KQzPMqYxNSd2rUSrk5ecNpjwkgb6f8x9AY",
  "key32": "67dpM2y3LT3SRySXGqe1z8oxLeRk2YKL2UceuT2VwM6JPMXT7LTodZ7vuC1zY3B1vuWsLGL9zzfko1r23kkdjduX",
  "key33": "3jskSkWxpsXqXaVw5QaRzfEmE3hbHvQzMpt7eg2JVAYsL8kMicdKwPkKenpBeiJCupHSVtKK1qfrNcGQ1YcEPVa2",
  "key34": "2Bi2bdgyWFnf7KxcosFrFHEvzsXY3iHuP9yze9PWCXMZAJE8RLgfyDifXtKQYkBobppW95rZnbgSrjr5wec4CWEp",
  "key35": "uUE3VGQ2DkRmUcrFimhGeGE4mFkzf9uDom8GnTyzDtK1XnHJnZJkeBgUtq4adHZFv8HaKTnkTrFf8BdhKQLXLt8"
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
