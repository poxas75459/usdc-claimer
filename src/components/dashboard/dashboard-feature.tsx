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
    "2v7k9zstAM1EZUeNMNn1zbU5Jb7TpDZCFnQRQo98AinwSBqs1gEgUw2C35dgGiB7UNZ8m1EDXrKeMyReF7ZzAcrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUSFHg8cTktek4Wcw6ctY6SDACw29swaboP4WqcDsoK4PiqstVsVAxQWcSsSRTgzF56z7V7sqSmK63B7DvSPHqs",
  "key1": "Cs2xrhJutWgnoUSoLeDAw8RmS2hy64LsvxHyy6RcT1fdVtxi5VP7Y9PYUo9Mnsiy4pqhTiszbqShaB6XDfTHBec",
  "key2": "3uJTFzF4Tr7fxCUZhG9XX62axQBfpbsHd3oRqvWz4gEWLH57jJfQ7Jhovi1fcECpxyDpu2BydJgsU28LPw8aeSeS",
  "key3": "2BG8tVfYWrXmfutjzjkVDrXR2wR6VePCzXPSvodRPD1pYfowx3kcpNy9N8wh7yoQq3G2bsPqDYzfdskXj3UsHgGc",
  "key4": "4JL6gqbKiPDusmSeXYxSUasc8WnoZvpiw8JxAYYssafGAURwkGkmMdMeGwMj33m2wpgNV26f2CxBVcjfV1K5Taj8",
  "key5": "5egWde3P9teRjZeEQkFuLhKL26suhNqCFhRL3SUbLK4A5m62zvoiAjoSh22xAJWcLHhmmHH1Ja4um3N9qF4rzKus",
  "key6": "2m3km19DyFqv3GvZXqoLUwScfVDovtxynw2GcD5JE3rkEzWvxxG4BnbSobGRyTudM1t3MB2kM8ftNktqUXjcnCJj",
  "key7": "2w5CGrUyehXF9gQwhn2C3T55Te1k5WFmSL9Yf3Z4Ga1JoJCuGGEWCTeDFbzhhxxHu2DCFJFEWpYEtHYHoRRWCMyk",
  "key8": "2dB5EqGqF7VeapQRSQWKBh1Qq24Mk4ihyDjLxm5nVwtph8r84mV55gCDRNoWP8YHwyWT2zSn1fnjj6xU3Y9aNLhN",
  "key9": "47AJ8AYiG2TSfHbx3FZEv5gs7cdYBhp3xpBhRrTGfZyKAvrtzVxRt7cnKX49suMuYrpzKVN8uCkafwke4KUKwLZC",
  "key10": "3Dt22VUagzS9RT8fBqDP6npTmPnsEiLwNzrPMnZNEkKENuHiJ7q4c6q21y4wH4MotWECrWdMahL4beB7LXdwnWZc",
  "key11": "omdK2ieBCW2LEacdvHgd32tWxL7y8z8BqVhLsLx78aSaR4t5w1Pqd6P7t7wiqWtUhjoxtg7c9tvs57toG6o4Vyf",
  "key12": "3bxceHt36RktLbBqhR7jpHAtotdEufkFQ3AWgYuTcM8mZcbijowVaobHApaP63BDmBsWJF9oeKgMiRexpooLQ2VB",
  "key13": "4K4Y5ZUivLMrhyzUJ9qQiNY1DKSMS8gfMHtNBfHkqLsN7sD4Gdp19NJJQ9R8mLwsJ9M3JkB8AvocnRNrnAoFg5tn",
  "key14": "5CBb6jBhkJx9i8yQEJCToHGFEYBxFMGgxhfHk2i7UHBrhDC58dphbjiCxVhu28gnXe5t6Lt8yWbGEryooJ5VnGN2",
  "key15": "4WaNThzu9ATK9rbfhDwLqnGgBzA3FLTLRuCCtkqXGsy28MvmShi91n4biH1d5iviHbbPfTYZeTB3nDBM32BDkJGy",
  "key16": "4eqqgKpxPetBfzQnud1X54yQEoGZcWPuTHTDJqxscMAyzztEKEuwJNLFjxdzcs1yNxwk3xbZQcuTSh3nhc9fCkk9",
  "key17": "4pPMA7VqfR7FLsg5LuefzXUVH9W1ygwUbu6tcTyT8Sn7vY25ff7mBvQ5t59gfUNjhmrEjzR8353AS5MBwSQfqoUn",
  "key18": "32ewZ6Q3VJVF5hPCQvLpiHw1dP8sroZ4SnHCaUf5zdTrBps7veNLeeqcgPC4kqwqWof3rt8kzcByDnHmQjMX7yyB",
  "key19": "2cVmSPKpbksuoNs2meVHzSLRG2Y2YDT1KbmtpB4Kz9kf9JoPYaQbuqpxWJ4uZzhgwfWKQzwSgYQ4FUfeSsxjdvk5",
  "key20": "5MSQMuMnCNXByHeesxZwUYZH85tGxJQz5tCJHGJT6Z3gQevaGZv4gbf89orWdTg14nesUeqfSEvNKPWzcFCaU1wf",
  "key21": "GmhvEwqroWZibAVvBMQcK7GEW45r5iABpm1KLXUhHyRbkp3zz81NYwKjb9TVDHXeWUFX6cKvnKPqTFNJkYLU9Tv",
  "key22": "2qY9eopsM45RgpsBivXrVcxWyPGYjPRWBGGEeWi65dsABKaipH21ijk6dj6Z4gZHRiLWeMyUi4gqqoo57MGJtdex",
  "key23": "5ssDDXaz6EhhhBqFhocTrfajCT13ENew6PBGSg4Y2xAa5H5gDG3CCT3tfyUbjrzc3sxBuuvCGboeVF7gLk4XS2tT",
  "key24": "3NEsu1twHW6Q71hQqxiMJGmYgSJvzHS5qsRA9LRQgderLCNiFpaq7RcfNzaAMb3iTPRjvZ9n2A2HWCXqjtYx18Zg",
  "key25": "5xCxgTrBKixQWQCiRjETc4SCk3wq9y1KYVJ1VWzdAbxjugg8Z6E6juVkWj2Gh8NuY511kcWADVNxnxmpuopUKVdp",
  "key26": "5obMNZMSGSdTsTB2cqbnPGZJGR9GNpKn46eNvp6eKVcozU2ei2gyL7Lud6fcC6VW9uTvYsHxovAsLXizZQLKTj2M",
  "key27": "4EVxxocgwzebinaRfBnC2hhMP5iwBjVKsPGdTpsBe6M92yCXV4fuTT1WBDEr9X8iQetFbhAfK6BYGRbz1gC6WcGq",
  "key28": "3rn1FrVKcKcpfJhkkMZLB1d4MrPAr6ta35C4oYxiWAsT29feKF5XWWT3HkvFfx7Cy6LU1yzeshxLL3H5NPaEnxPC",
  "key29": "3vTUDgAXWJtXyfa2EYGuES92dTZVYK7YXsSm943hDAsMxngbTgzuy7oFR3MgZsZT99zLdDjSzEipBXQcSujtye2S",
  "key30": "3aJwssCvZU6GiZBpNMgd2WvwjjLBd5q7qYzte3Lq5x6JjonAgyjuavMuQq6etaBvtfsmEtSvSRm7VDnxETJiZTk",
  "key31": "4oLkkLmKfBwRqC9G1HrMsaVTwAxMumYAZjXWBycs6DkEVPeJR6nS2Jyw4j8HxdgYx4tRrnNhzgok9kDBFqReVL6N",
  "key32": "4W2SHn1ojUeDx6QEiiFueeGD41SDXVV5PNMKVNu3Pcm6N26jyh5mtRWoVirBp9pdyChbRR5ejQBsJT6U1tq8Cwy1",
  "key33": "2WuJqNKKEzDm8WVQtVFpypofD82E2pxdfVFwh3C4q1dNaViFM37zw5jtNQbiGZTeLuKMPWfJZE9eTDoYhUMzCFC1"
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
