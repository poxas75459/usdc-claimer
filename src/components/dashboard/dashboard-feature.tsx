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
    "3JzutnQQDyytMWJxDNM6qgfd3cqWpKGb21ZKFubAWjgH1Hi6ssQ1HJCtEoJvyNqYuEnANKyg5NUbN7cip3rNjEzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdU2CxKrG9Tupf3HkWscAP7KgDF62YuDEmMvyENc46teUBrxxvcpswrJfyf9v9VT3SypVhhJ2gCxHyddgw1xbCW",
  "key1": "4SBtwh7Sym84TMLq44z3BZ4v3XDGGf3evs1LSFtHVnjDwnZ8HwDLXsxgSaMSbT9Uv6aczya73F8TbVwrNPAQaWxw",
  "key2": "5Y5Z4xqyHk171H35mBaWxTLwDUuLcYoYFMwovVB2oPTYXqmoCvbR1wC3Zj7NwM4aFBN1DTGw3Ptwc4au6ZS8fYES",
  "key3": "C8UpcFR4BpcWL5ZqAeYd5bY8q79d1vMVk2BNS2gTyomtQk17ojtMKrVHNDa9hFfxbXQjLkfwUoyde85x4knK74d",
  "key4": "ZrKsQxbZGbEfv6WcfHbVw417xM6e2SzetAyjHoXPhAPfR14PjEaE8Vie2vf6FnJQN2Lk5BwGbwxh1YCmvvgnkLn",
  "key5": "2yVGSLCD835yoenX3VNk3aeqTSZhGtaYuy2xBVf1Vw51GSctnV6fu95eEbaU4bKojh4CqUQpLGV4AocZyM1EU8WX",
  "key6": "cP1JMtXSCYsaEqm3XssDtUiAoNJ2B13VsDEibpkuZfzPe49JwvEyxJiPCLqM32Vmy3vC6vMfs4yXWCj9X8v6aXN",
  "key7": "2Gs2jzFHxYMzvmFTZcj8TREDfL4b8yebRz7pEpKDPu77UJoKt8WVpfpgwDjruCEsZ9Twj311HD1inerYw1tYuoQh",
  "key8": "DWopBGA44U46BJ9239qVaJhfr742bX6DCN6fNS1dws29TkkpACRhYkoSK3UHWNUTSxXiqfFuw2kFZsWLj9nmpqa",
  "key9": "o3zsMRMmwqbaCeMAn9udErhe1wSrZYhqWZ2oJWazwQEad4UG24HMTtxwWWjVsTyFRvyYgEqoc2cdobX2ojwxwkA",
  "key10": "4JgAt2A9diRrxjvXg2mUULbSHhCyazzVh9EG2Nj6w4yFvwUcDPzvMB9kbHJgpEcxnXzb3c8kWY51HFfSSfHtPCHP",
  "key11": "FAj8uKMqFoxynzQ88hJs6kb4EYyWGRFgQh3YV2LHYkX2w29ukAt18xgv97a46PcTL3CBrR8NSG9kvo8k7yhdzXD",
  "key12": "4MszancjXgTJJxHiSdShHxjMJJQJmmmNXvouH82bCiMXV2qwtca84rJ8g9SpHqsnb8W4TAk1HmwnBMMqR26Wv2vT",
  "key13": "4Xn1DHtipfuRh6JzBujuG4QFQMLG2A3fn9YooeBoUyMwqZdLDVffGHpnBLkrpv1gDvzWcN5UY2AsJJLKLNWWmB9v",
  "key14": "3J8MrxQ1sTb6QhAEzUrwGAk2WxMU4VUzshzHZaGdPSKpnUiiBPG9eXboSYUp82xHinUvm2yMaLTy5ywCkwAoL9xK",
  "key15": "5YXmuZA9z53pvT1hHmkQ6UKu7Ko1ef6TC6j23vc5zkB6a7AauSpBPbmteweBtRVF74Ac7xfdPwmECjziRo4G8ALE",
  "key16": "3rNEWHdyRKWHuFewJcLZLSha1JPFNmGWm4o1aWwposKGC7pdkaVwALKGzwEvTQHH9y9k5Zm9Ss98W7M7Tv8GDJZd",
  "key17": "5mXssKBhumyQsyNgXuRMtTocQydx5iU5hBwWCYSMJeLU2ckRAfLq8kBmoqiGhB38ntRFHUfbaUc5dTim2ba8gpwu",
  "key18": "4k6f9iuwUrJdy4qVbjUZhaxNE2CM8d2ozoB7gqkrnjwXWPpCavKdMyHCfmah5W5SyZ9tm9VWdmasHgXFioXrRuYr",
  "key19": "2g3mmTaqwwPQ4PUSSB3Fv15SQs2QMd2kWGzLTWmM4QhHMAzpAWHWKZw37pjBcrLDZh48dLB5wV2rE96FzaWY57r7",
  "key20": "3ZsEbUPbphDe1WZeYHLkA3HNn3NxZcAartM3Ghq4qUZYuMeUYMZN75Kx2fJRm1H65H7sFUFy3tXvs2kvz5xpxzcw",
  "key21": "21WLKhfWNzP5tcXWZaSc1LaCmuD8zN8W2Gfeks19TfoDEjWo5fFjtRaFph3MZ15jdTWABUrvWT1nLTHx5jvz95a3",
  "key22": "5xVzYptVoM26RE8bTpFkYiFZY76KrqTgSpKK58M47wMCGb6SVuaVWFtU4CFaiWniRNhm1Wc6WJR73a8Jsy6pDNYt",
  "key23": "22DkhiKJTbqpAmdo1p8PrM9WLdkftgmbaxWs2crSK63znQ2sucCCPmZCkN1vLaVBauvMPKM2tRhwZiUt91wSuGLV",
  "key24": "5GhX37jLjnH8kSrpCz65GUHqYVpjafTN1zJz1139EQmFG6x71RncvduN9MR4zP5iPmqsTtUMsUzRPpFjgQBY7eRk",
  "key25": "27k4PKrfx1ijTQohPQTHGuTY2JQidbWzFgskeUuSndidPmPUgmMtFJNT7iZ4MLJa6KRvCcqbV5NDCdewMMMm6YDP",
  "key26": "3pC47Z12JDEoJJVGvHwWwmS3Gc6JZeJmw89TJBmpijni6nXF9uDZg2DTq5jmDVoLSAZ7XJkdmW3RM5xJKuJN1oyw",
  "key27": "L8caiVVTwTAyx2hruve97sBHhydCo9DJ3hCqBvkDwjS5c5aWx2X9mPqdZ4StMpSKGycYiuHB9FggVrxvnhQQEgs",
  "key28": "4tr2a1AJRVpdz1Nfaa4KeMYgDARu9TjNs1e9VhwGakG4FXoK8bXu5ZhvwiVLHaRquK4TmcDuWsFGzb3qZKkJzfXL",
  "key29": "5gynVNRso3LhjnZGmd5sMsmXNw6kZqeFavom2QHZcDMmnGkwWMnGLRbsDG6XhZMXpEeQcSKVWoa8BvzMquGVoWGS",
  "key30": "2kxg2sUd9fipduybn53L4DKbyD6LKunq21ieZ8SL4Xzr9c8KCJtfErbpMPKm6abZ7piRt5TJbPpt1C6b24Tv1xVd",
  "key31": "4vJXJzzau2dZ5kvNaxkzkC1KRFDU3DFmCcEE96WvftB6yjrzNMrT1A3d61MjkD8aAvGDcpYcrPtetQGC69FuVrap",
  "key32": "3Fwq9HVZGC3jAAL4tdzTQQK9G1AiQP9hBHPXUZ1BGKXPCy7LVSmmZPGyDjsJhYwd3CpyHVN53LmsccjvfebYXxvU",
  "key33": "3YPgpuvU8Frvoda7CPMgbNA1Aq5oVDmpAgiUgaEAn9sNyDByV22WgLHaKR66Z5AumBQkjChyhthcLGohUV3B3c3x",
  "key34": "56ezimK224SkxMkHmAEfQ61capT5gGdZgyZyr1ng3A9kx67qZMFXyTasve4tTWBNHNBTWpzty38M2USSA3rufNCu",
  "key35": "4eW3zERr2imwhRNV7zfUiuRXkkfyq1iw76eVbo7qzENY9QCKSMT9Gk66dbNWzUEvqhCezBtx1oTUzGMRuhJYfQQH"
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
