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
    "5gkth2DeTumds5mHU9aMSSccax2an7iGvjgzLeQxLhQWryH9n3An8JhLJL8WAygy4VfgwVnxYK6eA7KEx8AqcuHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TLojtVs7mcuZZi7cEv34ZCtBypCy3YGDyaZdr3ry1TAVRuLWoSmLG1Nv2hRs99jjuN6kvyeMA8JLCEEh34m3K3C",
  "key1": "9BLKmsnDMFHgwrEoMryB9qLJcqyY2mGDpm3YLdcrZCPM8ZCnefvxc1Wp4y3TYuCFEEL4GxoWDfYCKfaKaPZHffh",
  "key2": "4KyTjacVScxcc57HtPXWAVD2KFUWygZEGa82iwiv6rZEGyEDCDjFHDrHyvwm4EQK92YGwJBdPMeMMjWbNm19TuVq",
  "key3": "44gsTmQViKHKNGQMsQb3yf6VRQaC48xZC25aQKtDBidSu1JCULzVpgP7HB4RXTHXufTdL8FjaTej4pkJMjitSWKQ",
  "key4": "P3HKikwPbCHnBgsxAbn2yi68S5zG5yCuVqa8SvUpPhnbHESJsbHojwArCmmFLL6E7kGsyhocx8PYGvNTzuQ696Q",
  "key5": "34MRFBH1SinJuyGjkY237FgcjyjSUTVca3JxVA6teU3ubdcgBkpf5KSxwNcTXC48gXUvUh4pHsjBjhGSUBRWEy7H",
  "key6": "5RzejnXZS8zxtR678yymFzbjKq51ZujbPcBwdHhry6RV9SoAM1rjuSHdACouZYzBu87Y75i8CzpkvXU2xANJoF2L",
  "key7": "5hhLZpRMes11gcFNhnpyZUvrK9V2GC4HTwbVDjy7CbihgQgFV6adxeBr8mrZDp4LEvtVdr9yYuJzXukNUXfeXEgx",
  "key8": "2ZbjN85uKyrZvPTZqwNQWUCiyfyC8DbyRaTuv2ajF8saZJhdkX551XBvCEQDYPpwC2ys3YzFpp5b89Zr7B9rYPo",
  "key9": "2tED2QhPnk5Y3cbiLgJimeuTWkDHbaiZZLBpsnLAgkr7wPJXFiZVNMZDGXxLC3YMuZoRZcKd1XQ1uSuUX2w7q168",
  "key10": "4jT3rWvjpnsjQxjn6hPXnBNz9vY35noA5pVqia8hAnnkM1pmD1BjZMSwcWWMsWV8xmwEyCN66QECr1MjNFVAM7KC",
  "key11": "CcWehfKUkcR6UwM72VK5qenL7stpsFMmnxYikhL4rNZQ3NLMbZwkabWhJZobs84nPu6vEunQvRegiRwvNJiNT9n",
  "key12": "QTdfzWhw2sK2jNpq41yfyFViPTFajv9JnDtu5koL4xNsFnQy65oH6RmnvxXg1jFK5wkQNgR5cXgFRJfCWD5teYh",
  "key13": "3ByXHJk6vtK2K2jptMi9Nr54pdP8c82cCvkiuV8exdsdXT8qY5nZxtHQxcb9uVw6ZRoja8VT8N4gS7UhT6a5QwBb",
  "key14": "2L7LbpFbTwSqrEzCoqysjia7oxbYY3Hbrq4cjRN8PV9dyWkKLLQfnXdWvfcvmLnb66Y1RNwV8kVUAQC3qi2bYa6q",
  "key15": "2E3do6xXS2Y7LG8x72Hv9VzHnveDawhLZvTFXSFoVAyiAmBjXuSB8fwnA9an6k4fRfj5zy3HcVzF2D5vmyTwzu8Z",
  "key16": "4igVgHx9WqjREKqsSzm8hvCgekqu5n2CpzJe4q4oVQmvLLjfiCmztL4kv4FHaxycU3RD6hWnwJ5HPpGkhaWyTJks",
  "key17": "4cA4ggtEjQ7VaRUcYNZTacLHpgqz8aZWpw7aTYh3MXReNGtSBLAzXt7GA2idDGdyfKFHeeBaMdHsEWocF7GkFMjs",
  "key18": "qf1U3AB1ZNnVMW7femuwTNtdc9vMDipuAHAF2m2EMMEfmGs8gnutc3ZQS1kL4TTb8rDHaDTiztSZYGqJ38QiFmo",
  "key19": "2Av1Zd9kVk96TXju5Tc1xZnabiiFgZVQAT86tzYGDhNZUdBxtqGfVT1t2M2L8Hveyq1KZeTXaNTqvW8L4KHe7X6n",
  "key20": "2JsHpy7G6RtqjrJ5Gwd37VqT9MqykKohV7L4yAv2QKejeW41K4nRqUr1aWFna8emxzNMYZXEp9qSbUs9NioWkmTG",
  "key21": "KhzLpSp5FXX4d5M6wXVWGcoeAq4BZnGUfbRQEt42nPCFfn2mvwn4jo85a8JwVf2ctk35Ti7Lmpo5X7Rt8xrqEY2",
  "key22": "4aXWvQfdJ824DK8buPNUWWBNCR3ZDNgSrU2JHC1MHYuYJ8dGaXLyKCa5Hy1f95vnhwxRJVzs8iUkwWKoi6zcEuV3",
  "key23": "2PxzdzKrJGJh5nUpHv6UyzEMZ7Yyh8Kx8DdKQyHh8X9q6MhLpHtZnhJkZchxjxtyq8rS8GjpXsV5NYNtXE4S2mPQ",
  "key24": "3n9wc4d9btFgHsurvzgDEHg3hn8SyGJYMiwgd3FBsx1zChs3P6Tk3u1GFpwEi3rxYHNqdxAZri44UhGHkgL8g251",
  "key25": "3NdyYHgUv9qYAurvQXcVNzRkW8TzSmDnW5EcQ9JQhe2fhTZQVpHe9pqucLETJFCDTJDQGpf6DXUEDC3VDyhBdRh9",
  "key26": "2MuMmmH53qgL7SAA3Xv5fm8yCSxUJQjkEJfktkaPiYZzSyLx8xNRteByRzmaphDuWtoKdEAyPp7JRC1Gf5s8mnbq",
  "key27": "5YikDMJ5M1DDsciQqAKbi8dBr5izDESUNnFJkEgzm6Umcu8agwRFXSFzN94KwmAKVTBQvw3bGf5NW4ZtfKqr7tui",
  "key28": "RM5sGx8q3z33NhLueRYHKxJn2JT5BKHf1oThtXkU1qrrPJWwULiV5E8NcfvySLuC44xJeo3ytPBDeigrwvyiK75",
  "key29": "4VYnNUr44wQsQL9wQQ1MGnmbEvSSDdR5GExMzJwvusLKyFrwi2UXkVuwthJtEAw9XQ1YYw1FeoHmJvXfzJMvDi1t",
  "key30": "3C59ZsiHvhaUiQ2DL5QzNGKtPn3S5VU9FjusxBSStSu8PKgtdNXbPTUU8dQXmGoe2EfBi1wfJ8sbvbNUJWPmNFXg",
  "key31": "2fAPC9X6tU4YNyEDzRGzzkpm71jRWkRF8HsbuaHjAZqr48GSL2KJbBMGaLyTb9DfS7wqESS6MonVVFdxY6ovViej",
  "key32": "3vFvXpdkE8mLCiFMBcSMWNsGUrMBPxuCMWVciUHABdsM4uRLgoRD36rq9Uv6gDYyNWn3TGbZJEPayx5kiGnD3rQX",
  "key33": "mBpukKC3hhg5tjK2U7eL74SHFnRwkYSzAExrrSjaJwowUVeMjoxEybMZ9qY7Bw9gHgcRYnBWwBZdWfSw2wRCjsb",
  "key34": "4oh9T3NhW4unRNvrMeuJvfQ7btHa3jXNf1sbbXiKsX7ioF2xmoJZyNiCAxDaukVDC6EVNmmAhAXwTPJHFrRsq2ce",
  "key35": "3NDH9JqAvRyapkQE1NW7dXSvjdvu8sTYCFUt95c2kvgoqcYXJ5spxhARdP8bmEXqhCkFd4bfvHYS5Hprds5bLtCy",
  "key36": "2oMxM3oGsGWs5T3KGDiJs1CK3btFHa2nVXSyhuqrmpnngkEytrMQJLCNKz3uE9BwqMhW8rk2hnzE7xscrmMMawHh",
  "key37": "3ciMCrdFB5hZA6V65i8F7rNXosk6HJ8koBb8jC2NdfwhVRM3Gr1f2tdPUE5A34jt1Cke7a4fqyaAdNMwY56YzSjT",
  "key38": "4svkQBVi276QPPPd9bLTAUM8Wfxtbcf22erkMhiKP54zSwmz7ictc1VmXUNCyPQbLMLYo6q9TtuQ9DuxuntLNFkj",
  "key39": "i6T1coggHUgvSayve18A8HDQAsm2RoSPtZHmTdwFFPsmuw3oAPD6AbfRVq9GvpexvRYbczFwZ9QUo7q8vGCFR8f"
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
