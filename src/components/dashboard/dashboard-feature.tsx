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
    "545K7YCVKuhztPifjPDCpwxJcTd3ZCK94SJdBQFGi2v5jydFtuBvJxM77FHpfVy8MHQuWGcAdBBEcAv9QwTQzz7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wktu2ecw4Ag3RCLTiBzA9enCetwFWnHKqCTqYbZTurMpDTD788AEVTCebx69tc5kQddD8YMtvj6rnFiqgtMLukf",
  "key1": "2HpzMVXKWwnUuGxoNnto2GbExQTa76pAeyrZazijvkrwe8he9N1qSaKBaGmD7rNkhpPnzkqatKY1TvYvhboyoBrc",
  "key2": "5CWAoWPd9LGhWzZHVXFb3jTUch5zVQEAqARrYtQLgvbbk6S9mmAqT3JrE8YcTNB4cm9kW6Z9SBwuuSEVBubpsqzy",
  "key3": "Q4buzqLrYJJZZ24H4TqYczpApnTRQqmEJc1YcmJxEBwk32k3v4zWtR5EVAQyJELukDrbccCXpoLEQzQqm5vpnjx",
  "key4": "kAPLAVzigNGQTb1Hb4bbRqYMyAEJjiDkjgq4EExW9hbAyh3SQwVdjqe1tKWMSUtPjygdfiBDwr4FRNApBLZUsPV",
  "key5": "2xds3PF8Wmin6J7VWdFn8wv7TgC3Wk9kGw4Ebo13zpgDZtnTXSTHzqxsp1ZFeh53b2qQsyRdbP8Eo3uybN9s7e9J",
  "key6": "2EbCiBUrKVESmLeNXHwDjTbv2gtQVwBpLKBmzJneQktBw7mPQvRwRRMtoqRJfSAPZY84Ue1yQ4dmqoP9My5gtXj7",
  "key7": "6SFqfN51yMTRneMz8weQhAwK1nUiStyCEM5YuoXbBWmDvSn6sjUqWvejmQBRUhCrWWt1J8AkVCnZnsj2m7mde4G",
  "key8": "5tMb1aLq77CUNkFEsrcF6ZpPfo8cN6ZFkp7cbF9qJvcWXboXMdZVshiRnFrRMu4Ucr4GXx127ry6om4CocBKGGcP",
  "key9": "49qLzVHBPqC8LCZxT3vPzNsArWk5QWAMSJBQ6231NXagzbxfg17ohActLRvYCS9fHucL4yXp8JPqdLGpBYYXFweC",
  "key10": "QxnnELX3hzfqHexPpmRVrMhjvCLoPvp8r96XMtJfNvZTwjBs1xn7tJt58eaHzry6QJqZaoaR882UqpLeA7MLGqz",
  "key11": "2E4APo3qqVLVs4uk1wBekgtVeo5TSe8cHFnevZ2ZxPTWyX3y43KdnZyoHKQdtned2e78Yrb1XwRyp7itbvz88Kin",
  "key12": "BXmtcmUnoyJSrcCPjjWwa2NFqum8usuhdceX5m3rwKeiDeYewCGc9GFUh4mKY8NK7JEqdFBTE34TQ97n6L5Losv",
  "key13": "2nNWt5CV7wBTreavfYDaZvFRRRfWGBByZrb3aTE9JTcREGs1wormggyzByXTLVVLM8MvnPz9N6mZkTXo9Ecj8n3G",
  "key14": "67BufjdWHkCv7UGSH3SEueD5rZYkfx8V5idrMLpCqmv4sfShScMzzivuXvN5j4RiZEtBQE93a2rJEmgDzZHGk7mu",
  "key15": "4bGQSM4j3cxWf8ezpzBF6Sr4TSYenc3xmg9fzfx8sZR8xdzFuPmWrVQ78oq5SmMJLM8HhFv8hUeDuUgcnX33TczH",
  "key16": "4NU9c4kk94QiWiJxJoCpR9MWtvTMKGr4PtQccsKNg97zh6x6cTQ88LLcFZagng4ymkSLZ5myBy7kZd4PiRKjXKkq",
  "key17": "EdHu3GaTq27CNXKAgVxdkqcc9R1webfq9LMoaN9Nn5K3r7aBrtzjBLi1yCkNsADkKta9umSLAvqRxwUHpWZG9mr",
  "key18": "4jbwdLXdd38YLW4cBcTusS6E9X2wrSjFu5WuG8XTk4BcK3A6k3zuBQn3S25m9Qe2HhhTMPeFobobhpyMcY2UqEfS",
  "key19": "4LveRM8QxcCBEvZd1WHPio6VuANTNGkfXKk76kGTya4ht6u4eQBtoQJF9TmcyJuVefKu46bxGfGbeZTNdz52NdBm",
  "key20": "2xQXfVAFskBBTVQcdeLRZkFggcaAqqEwrBopCwSs1szfgdPjNH4ZiCW4ESjwYUte9ygKTHAPEHoAtZjVXCFMTCvh",
  "key21": "4wkv7UNL26TRT7YrCzcRjVkqucTxxKPcgx3RC6TweaiCfs12RajTwQjV9P3pE2ivzooKc19Dgy2LYfcX9B8PETg4",
  "key22": "3fmM1ak87Xd7FzmqRVeb4KJG1xKxpJRtrknxuPadwutp3V7xfDW2GWtPY351BrB5wpKrVpA8b4sb5Wa3Y5cNu85w",
  "key23": "38aJuXHSeXBuVuECSsg8cGBPRUEgV2PvbrNJmxCUuR2pubCrdn3TasCNWx3ATg7oaCeem5XovLJSVoyddnBEJFZB",
  "key24": "2QDQXiqJBn5FjkTZHm1EjjcUwayDS9AJQTJhcnCAUjpTt3JCS7px8P3djV5hjQP1nm2bDw6u2bBid8VyTtajLu6v",
  "key25": "5GnpmAsFY5kp3SE34WGg9RsUTwnWYfGGX4zdjoXgB3c7m7o2YRCgyTwXLZVLpo6q7snt2mqRgCx8C4ocd6JTUgk8",
  "key26": "5opVESUftD3NPzDqr2kzRemUnoZaWB4hK2RMkrSD52p9wGEAd4tugh5GBfEeErrR3y21xkXP4npB4a4FXVzDiD5V",
  "key27": "5ZmZg6hMNFczEutiaoNM9xenBSe8JecwELmdA3e3tzWwhEuMHUrNP5ZXqKSMHeHwFwnbRVkNWjpJ2ds114Mji73c",
  "key28": "28oiPkN3Nai8tgYoB1Cuz7yzZ9At4eSRgR3L1hFVz6bSYuqhEN5dTch59zGgtrdru7sPSBKso8b8JaNsDWRh4SEd",
  "key29": "4S4EhCkVgwhDxVZhAhQXEDW9GyFFTVdfuxiZ6yXwQqeBQ5aXot2jTa19qDRZwA6igPwsfFZsBrKLCS8MkQ7UsCoT",
  "key30": "2UuZYgHMTLAqZddoGGApf4Lfp5yqTTs2Tn2jCaWMZchfpa7FK92SfLgm7kgmmsCbVn52wVomwm5aLX2AKa4TDAMs",
  "key31": "2TCaJzZ81dymxZkmSimv1vdFixeRVTwa8Ap8hAjiWeMQUKLWn2yTLjBms1VB5qi9EgrZFX1SaHkTrjSXK9GtmfKN",
  "key32": "36TF3Quy8sqUHmmRSSjJDxuYj8YVXrLTj78kJKtxvqbtNmhnSXbksomEoCGKy1fpkLdB71BF3dUFquZBM6EbqAYj",
  "key33": "4EZLQXZuXvp9tANZ9GgnGTAqaTeLVvWuHzBndsHF7gzBFSPLptXXMqjdMpaYBV6Si244ESdYD6K6qBEXGaL8tYp5",
  "key34": "4i8DSqUDEUZS1UHgAFcFYzysvt4rLYBzdrM4G9KhBstayirA3oKfDnaf5nHzLM1mPRYv2DdHzsB9xuFAYTfHRQkT",
  "key35": "3FVWd77mKtbcnnue3Dcxh3YP8SfCw43CAXT74L5saHmFdEnFdFSxxp4AyWuXauonmQmWkJnhpE8yYVHmQRhAoJXw"
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
