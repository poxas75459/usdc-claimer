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
    "53dpC8Tic69E4QgQPhzwYm6uY5Mjr6ArH5p6RZRTBkH5EqtnbKVJJXREbNE8kTxLTf2M4pqDKToh8nnRyzLraYHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JpQiFMDGU6Eez6wkE1QUYqhvmJJZdS9D7zQpYEnTUQoAfbBs8KNt2NJyAui8Xoz8iVVsey15mPeyRvxQ6TELQoV",
  "key1": "5pAVskvCHXHmLD85ZKH5v3G2GTdamUnokyhp9teQkGFZzK7C2WUuRaXSfCJo1UP5oxXUw49oRdZj4HFzBrmcDaCA",
  "key2": "3F2gbmuWnPury9risGNBdPuSif6voXG4bd1urN3bxvY8KRMkXKHedSH5FhxA9c8j6JmbyGy7YT6axTq7SaLDYcCj",
  "key3": "5atkFa3qWVFMgHwF8KtiUgG35df7vqaZUQYakHaid6jhN74LxJWX2z1eM4g5ysJFEqG1Abt3uuaZRdGTeQwJXLxX",
  "key4": "2PXUoimvaTAFKJonQuuBQsj94bbwQ3nCJSxreTwpMMPtrDD37ZcyDV8x96huUHEPnfcsGNH5DShfT2UhuZPa5GRe",
  "key5": "2cg3CxRRCSdgYDPKmydf6atwnRBUQr8Knc8yizQLAG3YyWmfidufdxD3JGPdU35h7rMYd2FPGs3HPT967HGPrKS7",
  "key6": "5DKCXHLTpgELXxox1Lp6EvVo2NurwtLhgBp1TArpKC9DnWCFgVDc4RCMkUfGKF3zFn5Xw5f2GAmxDLFYYtReN8yt",
  "key7": "5MEdcxPAWX1KLTgfgwoiy5zPQwdN4jPxd3taWzxUms61evZoxvmNb8H1jh5mpE2KfXSHi5JpKsd3BsjtzYLL8YpR",
  "key8": "2tbNarxA9Qqm7w5ZvLJVkVT5rs38TEkgtiwVBiqVMGo3EkD38rhcy8Sr9JcZeUDAdRJ7mmQP1Kq6ShwaueaGNx2",
  "key9": "2kUKY46bRqJ9Z96wC1grvDd8gZ1oyZ974dRAmEJXQEHEvEzvkgoEmEQcjUfBcB2c88oasfZjCw4m54Nn9aKgxtYV",
  "key10": "2nZp2BeJDSXdbwPEHzxwvc2ohZfKhz4c4qjpCxPwo4ZfEzdDkpwNaR9ZoAfGYSrD7NkatrJ15r6iCGEagAbCxNJn",
  "key11": "65hDKq9XjGzcyEAThwYDzZC36qzh7bjP3WCrnbCrp5DH7TLXPm4sLgi8QnP2njmmFkbmYfRMbABSd4HJ16JzCjNg",
  "key12": "4vFbjvj897LLQ2FETZxm1zbUuxJ8AUa1A5U9gXuD6WbQgdRxzhBKeYXXvSeqQYWMF3VcXs8Xk2g7pQY9uYKpDC5c",
  "key13": "4C6aLDQJLxMy5wCQk1YBsoC2xf8aZwrb4e517PXPLMCPpd6VDHMXjKWPtVy8savj2eY5RQHiqnHaS8qUbthJFYop",
  "key14": "5Rd7gDnUNUgJ5RPcMozGRjTkDJxv1wbdD8QT7hiLu7VmVcjVtz3r9eBdxZLFRHpnUd4VVH8A5d3PnoFNBnQFRke9",
  "key15": "sbMGqTWRUssR4x9Vc3xac92nUjyYumPbnDAzuoE2g6HqasBY4yLroBYBXpG4SWPrm8meLnRoWDHCKCYNTDFW7j5",
  "key16": "49YdYF6eCbbdEv5d97WcFzGmJqL33fKPZsHA7h6R3XkqqV2CAt7q6dhZ4SVxfuizWLMmR9c5nMikzy6pWn4wXdEZ",
  "key17": "2soJ3hY6rm1qyz549SRjZ68fVYoJzct8xcfpsH12fyLVQqAG37E34m16a2DsBwi6zKGmAt6vWEaPH9vjv7uGNHxe",
  "key18": "5YiQG4uMjhLPg4UnYJyJHk9HegoJBc1bNbfKpp9QLRLepPN7D2GZCQUFbSJSTDAhZXH48oY3ttsBSjrWa9G61Qpu",
  "key19": "5zUFHStKXrUvd2Y1EV1HrAsWQWKw4ujwcK42gTu94TFmEcXUGGkgPWeC3QQhMKVZx6YtRwbHJkEqJ574r2HR8G3T",
  "key20": "49xoSjEys7HpsHQ4XPbmEpoC58DwLGDTLP4sLMss7KjUE5z7e2fAtr6fpVySff2EsksY25W7af4gqPsyWJTAMnhA",
  "key21": "4tJfBcyejAfLYhkCtGY1EhdAZukEuNcMHnyvCfQRHqVqiURtErogSabA7dTUhbAYtpw7UdrCPeTNG2cD5EAvdDrf",
  "key22": "fYdhhS6FeqGCqkCpfwa2zsnHg1t7mTWW9phjzytP7TVTdA9tkcuQthWpNcfhJk3LTpwgBvEzJmYgzn2A4BvN28z",
  "key23": "2A3tGZ6oz8wwrhXEvERbjM6pE7TvuBuAhwbgimWjKPddKJBBSgWHNrZXafUdCYLkswFsknoSwgBb1kugrMqeZSTD",
  "key24": "ZXqzFv26fJA55HQPZWKYKpRsn6r1siNjz7Twh4yGyw7doZuKUeSnjcMtkEcAykgDDLssCgoZ9cvVxEsDewjzc7u",
  "key25": "D2nuxhYo65hcAh3jNzoDFrZQsChGnjyBqCuoSatAD8TuKxdszKwRWHWrZCzucN6T9szGv6EzZeEQEVfM8LZRAwY",
  "key26": "3sss7aZRkdC1qfSiPr7M9vRhBX8JsERPi7VwNBuMURkmAq9bN8QuMd4ALtQc6RcfBrvQjmDFJc3C25B6JMQTJuSR",
  "key27": "MCkuJzhrDZvFkzQLW41uiJmpNjfyP7bdn8MgRRdgd8k5v5W3NCLPC6bCPBzDjqEZxQAEscphWZRBQh4cJJ1s2e9",
  "key28": "26jLWLUygDGKMmgcSJ1Y4LHaZcu6WqTTyVLdKxpuwhtXRLNzPUC3EQETuN4oX31f7XYnLgWD9XtiftRZ8pWJtRiR",
  "key29": "3nxqebuGGrPcr9QCNhNFB4re25NKkJbU9FV2mgtzWgU7Q25z9GmhjV1Vd7rF8VYRZFjKtkbbh4V3YM469vzpvAxW",
  "key30": "5pfA9484e5D2dHdq69v38jdYGctone65q39Ne7hEWA6Eq8rfBUbnNJRmMjJfT2CLLDU31JWGYhbUVwJNcRQuXJuk",
  "key31": "4qjpPNKEascPLdgjripaYX4TyNmW6KBQLQ7ggZ3mx55rPrL5yCQkEtBos6eTf7zLJXWjiqdPyEisUV2hTnrNJRUJ",
  "key32": "5B1a4S4AtRkGoCMM5ReRBszTBpxESoaj3Mz96r1xn2CNnSKPWZoLMSTLL2dPE65KHcxYAmqmJNKwPFdkS6LT92oE",
  "key33": "5ymQpTt9Mk4euEKbSA2L7APXFR3AJGU2zXSn1ip2X1QFTB6y7YARD5uBMZ1ieo4QstaE5S6gDNwqADDm4P5ELGX8",
  "key34": "5AEZTSduTdC6BRVsLkgMsJQERQphYncXQRmcFCwsBwhSuS9fbtGcsVbepdoo2LKBQ8aLbsrWLzQZuAoFpZUNntot",
  "key35": "5ou59MPHMSZUfxs9XUXNSzSXA2cGYH9y9EW6rF9yErXeqqy379Lhf3jt8vTy727hDuFmFnQdnf5KoGE2LaCM4bno",
  "key36": "i7Spm6QyoB4ECXyttVrQhv6siCdVJ9avruPc6M4DLUU3xNFsTtt39Zn2VbDVciJCtLsWgNXVUPonAwamAP2EUWo",
  "key37": "57Y1c5m6WdVNYZM6z9QXm5Li6xsrXxDoZMmNk5NSETekTvFXUsyiXxmGBUuvmxBGcBrHXnEiNFJ3tznmULgsVAPi",
  "key38": "4iwYYVc99NgcX5Lzd1eaS4kh2GMqhZm5MPKBo2gYjTLDEeMGaQTbJCC8ZCvmxLgsQ6Pmbt8yvDodyDmkPBd6Z5DR",
  "key39": "3nAEtkZreLgzJ8nTTUjqtg5W4FNPri3HNTbEKjkSR8nA1xfQVfCBe3QouFU3j12Yb1jApK6nZJ88QDYYFihgEDhV",
  "key40": "3Sc1ZcbAZ3wRZHFx7trJ3VjvvMzLmhjfhzu7CxwU1qVnDQTui7VWuL5PYV7b2Fa2zq3Y5CBMGdf3yVKXbn9vqLX1",
  "key41": "61hLPwwP1q7XYaZYxMu8LPWcf9gkqLR1vAXYUbMCPPZ7TpPv6bYqqbSGKWGcyXrASF4Ao9Aw6WRzXNpecoQf9nG7",
  "key42": "4H8zS9NxAPUyDTzWp8xk7sRN46xxV647eaSHdrfFretNVy9BK4W3zXVdgxtg7NLuRbQT7kr94RSvLjGxgeyAGBk3",
  "key43": "3CYxWkeFVmHWZddZfoi5SEVH5zt4jR9CXNtmaNshp2N7hjbiZm3Lj5NQhyRV8JQPVXtndJVZZzWnwAwAkBBc1h9Y",
  "key44": "4P3hqbouAk34kPewCrGrmx1BWXEdZc5PGynrxkuf1BjNz1uds76Ag5VGFrZwYdGV7G2ErjjJr2YqNAXsvWi4yujV",
  "key45": "4XauJNBZ6P19pWMYAUA9qM7sAyaeaqdRrhm6SYyL47MWGfbQiHNxcktiYAiYWwFsMUuFYzwEnHsMMwVLk9rjDZLL",
  "key46": "5yGboGRvV9c1gt7WE38CvqgtgEhmpc7kozF8UxoKAUyAMu4CZGunHYB7qr5BS4HPggZLTkr34H7S8kkALiQ5AHut",
  "key47": "2vxzyzjaorJCsDB3msnyqN5XoFYwQzh45758ujQ3AaihHzBTx67n5iuELK7e3juqQkHzwcZ4oFCPZghASaQydtLD"
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
