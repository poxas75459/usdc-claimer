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
    "2Vqo7zgEbDCHy8aNPueHCZhotoFAq9XYU9a8tZUQmvsUEN8tNhS6Vr9f4CrK9ftXAEPTgtn2MxN6gUFeyJBaXTE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avxaVoa8RvwzV7SbxcEJQ6kg73pi7mPd2Jz4gwmH3mazR2h62KitxzBNNeFFgZMYDidTi5pxW9VbaDKowrp5hG9",
  "key1": "2CAkQEv7ZBV6Gtswg4Zc2QUtXe49oGNTTxYVoVNVnnBR1iv4fjbhbUSjNfF1qC1qkPh9irHX8dGEDYjjYYwjhixt",
  "key2": "4E1fgkbDa4oUFHWjrhv24jfN2SbqghqaeVc6Ut6JWBYj9rPrafwrVGdU1Jh7LUSrrHFV56DePRadUDb6tvLZ6fXK",
  "key3": "4mW8QvWWgTGx7AAyqCQZcm9BL9qpQJXPcAaMp3M2maKwSqGqwHKLBMfsA8X3xj2c62LM9kbKvhYEayreJynFwF8D",
  "key4": "2RAXEtj8RLG11avWKV5ntaRdcvdAZqXxQ9dsPeRW7bmV9FSU8Zg6oaDZuWTKJtb4jySwvC6HN1ojRQxBTzwLMMfP",
  "key5": "MEYrF31pgSJvTP839dUBfwJX8rzxFPZakKRvpUdUYVxVzypfFRpY3rq4uyHenttrKP3LgethJBpJejRme7umso3",
  "key6": "5vazmXQenQAWsfCo53daqREAnTGdergnRFecb643ZrEE9oiqXcaKhEpM8nv6XGvuA4fEAMfvYN23zeJGQKXmzfFD",
  "key7": "2hLDKWkETQ5d8BPHoPvwcQWyTt7nU3WKigpyiSo8LYeBQpxHqtYjspTrHXLoyXtT3M4md4Laww3r4GKWtSjjwkAd",
  "key8": "4c1bDwVH1rG9Mhb8szqXNf5Q1h7CBtGpbre6Gaa9SEmM8GBd9PG3wN8hzXfQ3RpbQqbizNtx1tA4k912wh68q9PL",
  "key9": "4sXoF1f4kYieUm562dqsRmLE7CWMy5ZaX5gA3EGiT4QQCav5dB1GkPgHtxhyVEgTAvcerYHBwTEoGG8bMrFZxPtK",
  "key10": "54fq9Vo6qkAngMP5TZBD2D88fGhmEf5Qp3S2cPDoafNDjf4hCq8kAj8Eyb1K8YsXigQDJn3mHpVsFZ2A5MMV1USP",
  "key11": "4pKo3rgGJcaF88FCoN4JeZ9TrsxSuhDaDD9VNMdGK6puAZyfitnqHYyApMeouqTMLm75DBHK6o4XNNbATV9NF5AF",
  "key12": "5ij1x2hbk3QKuxrPZ7Q2f7JZbjB5AbJKEhonjc5gDGaREzHE4D1Rd3d5BJ6hk4QfhghvPTFBzz5e75ZZNf9jUYob",
  "key13": "5D19ijPwe8eAbK77k9yrBMUUQ9WK43P3cgzQ6xfzjGzbJHYegZpfEddaGitbirHugqQmeYMenUwPpBF7vx5xrxVd",
  "key14": "245ext61FZ4f9AGTCAhpn2ukzZ5zJ2fowAbbqmffDgc5TgxmfNuWEeEFX5R1jWoqfSbjbAGh3NKqJZMBtS5fkLwH",
  "key15": "3NgNXud6DoMqkuyEqzTjV3VseYjZCgJVqRxRpiaU1rNMkhpkCVxeYvcH7Jnwm4XN126GyzvQaTWoTx3QTFmVjQjs",
  "key16": "2fmnQwpWoisi94rhetBGJ6dsaiEVWwNrEjoDs48Q3fct8BFQvJU63HvrZvhpN8dR5prwfxHdfMFuKFQW5StJi84M",
  "key17": "2KbJcMQUMV5V59MV4fFFaqrgPxTJm4jSWbWJfB31ekZZN3mHZbGm59rWrWBXhJNCgVWpEnNN1TdaLhUfUGXN958p",
  "key18": "xJYpWqbfdEif9YpAfseLKsizqtBwcaBTAouMcEzKzMXy9VeBPsvkvnNRBZCYiESdVZigqM5iw8WKZzi5r7CG5Jk",
  "key19": "4uRnvzfSk5gvy2UeTxRQaSPAXNhfGGcPq6PBAeFgTbyHEj4LStRX8eHR18FRhe5YrWP2tMU6zNqJ8ACVAm2SB6VT",
  "key20": "3TmcvNhoXxNbMnRYme3wcQ55m73YH797MkQvZp5R2TPJNCPnnctv5rVcdbnBVHjbjzBcRiE13QEbgbTHdhMwMfwe",
  "key21": "dTMZt9ZxaHeiXeAEvfx9S9Vez4TJQHwJ9eeVKUFzHdqQjPrc4kYcM8nmwXQn91ghehQhZZeHsCvo7KL2nPkW7qi",
  "key22": "2vXzftbenk9HyVNqwwiBu69RY5piDyNaJes5qaPyB1rTdCsNGRRrn7gQxqdLmiwi2dPDdXpmSFgWgpJeT4pk3MfF",
  "key23": "57NySA5QWJSzzWsTw2EyVedB4pGFY2K4xbNmh3EAusVdSmXGNJbLBsbN433qLB8uU2DAJzFLDNPCpdjFrXCKgnfZ",
  "key24": "b8A6GSEfLPccJ6j5nrsrgnifkuUPfeCyyaXH94pRUr7tuPUrz6NGRB6j3Q2Gjp6PGhHqnHbf8St9Ns1Jmb8i7Kh",
  "key25": "35b9QrsWjkMhcaer1qkicEHFRrXzjGz6x4jYdZNJjinhvYxQhvBKJpwPrZQYL5TNc1CTZgZyTxRrLUoGcyUkKL3e",
  "key26": "xBDT1BRmTTx6jHRssW8cdE9de7CGVQDkzNr8GWm5UNYAp9ERQi9cKK5Uwza8toCVPkWwGfgai7jwyBvDjfrAwep",
  "key27": "5xt4hAaHCJVqvSS7kVoAJZomEgSyMYUwAnxrLMWUeChZzbzKmfrQKzg9gZXAtAxxHncm7Uj7TRYyivoYkd3gu2t9",
  "key28": "5TtFB9u6DDQjUkrMv3AsECwKceq9BPwgk7d1cUeEX6Gq9iXDxmXH6bGgdS9ehJub5huH88axDD54ovyu7ngjoeP1",
  "key29": "46162Y4FBkns1uYn3iWqoQvSnF8vEjoBxdQLYW7XmMpGYgyjvvh1aAbSoYbeRnWppvzTbqwUV4G3pF6nwa5HofDk",
  "key30": "iyyyrcBVXzEALp68b4qQQpi7BtoA62rTHsCzguciC15Kx7eoiG2ouxpWcAZHn5DHgksRfoFE9vZR15WE1j7USqA",
  "key31": "2C4F83vKuAQKAZaDETKyWwk41zx8BcMndHR5hMHnhoJXaoz1zXPxR6P3mBKkanavwF5ob6RjirqtcR2szaLjmFom",
  "key32": "3reYFu52kRi7cqdyJauykN3SXjhWX3RjR6e6PwLtm5Qio4aEx75z8n8dQDBhzbEfXjDXaXTNrok6n9nFwpr3qXE5",
  "key33": "255Y5eCTN11HeHf6UmyjnoV2MG1VrSJV3MHkzLWhHRv3zncMcJMxnxFVo1K8ggz5jH4uLiLYkAUCYSrba1UbRVou",
  "key34": "2yFgdhtj4UsYpUkM4Zooc4okydZf4uvrUmD2jCiptDf44cng21Zub3pVyqdNv93S42QfggVghZiiWRhvbhm2Frtk",
  "key35": "2vxv7sqPxUmV7QruQT7XxzXZ438VepJ4HjhZ4vfyKeRjoUgGkwiKARvPxXSXQPS38kFuQhdnAoRskhZRPJTCiKEW",
  "key36": "27wdZUb4PURkevu1Zv5fjAw6fVEmDUXgK48ftxc2b3w9gJpVfCFTZKEaY6Ronb72WqhCEwn4wpjaMQgoe9DqNuvc"
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
