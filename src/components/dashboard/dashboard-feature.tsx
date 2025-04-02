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
    "5Q98dnXrfoddmGjj2tWToX2CiktPBoPs7Hu8ahVnwj8MP1EChE4knKV1Pf9bCjv64Rh4XGqGAU1VcLwLHJHVdttn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LbNvG37ptjg2tXQRkFvB9JLLaG1srDGQDh2hwbfPSRnfrwqdnmBGMJ8tgf5kH6xmegFj8PADMZJ4Z1izyEPdjHY",
  "key1": "4saepoo5NF2mooWNmpw6hvz7uLBU2MzcSb5uf6Z76VbSdsdvEquLh8S4MW1wJYi8962vvRAkDPvP93rPXvjzAZ6e",
  "key2": "56Yhi1equ3CymU74Zh5U3Yfy7A4ff9eoicmZx3GifuEs4SpUbRUAvq96edefpThgJYUznKiLfmv8NEkrW3S2vQ7g",
  "key3": "5At6YHpcZtiKc6MsbUvYUnBcpGm3o3XkaLkZtJiaMLKTPyexESvEk8m5kbmMr77MZrUozRykUwKsEi9cCqDSaXbZ",
  "key4": "daVJqtLbydMMSQXvjFQHxZ8RgDjDYS8pZgmPi9exoXELpKRcT7qYjQk3MEcY88TMd5QBheHcuFdpDef5i6Uehnn",
  "key5": "32Af5jXZkH2mQMVhAU3z8f2w9JcrG2E14PRGjwdctyqwWiugUGRbwxYrChVdS7AqTy4j9PDiAbB52FNKjqAPRkki",
  "key6": "4KREoLjepbbUiMKYjhiyJ6hTYf8wGetQwWb9SYsf5E8r3rxAge1fbRCpdCDAv8pixbPiZj7dhiSDGzRChiE8Ty99",
  "key7": "2DK3rX3LnLtypSMjyMC18MvrVDQpu9Fz369xFAEfotqciXyLv4UBChsKFtF7AKpxQcFAkXzkxrtTjoSCd5VvZEB4",
  "key8": "5UcjLeNddBPCM8hEu4SrHWZ5jta3UvStsxZs8rRae1aKs4AJBtTaCQ1PQRzFRmi42KC5DAYimw323j82H2Pub2ZP",
  "key9": "2e2YWVJY7VvZfUGYZwYEBz8EkuswDsjS6riVaxffrVpGzAkvrZNLnV6uR9d5ZS5hukit6Pev5j9sxMnKkfDdunDy",
  "key10": "2qLjYDuscMzjBn3RgbZXcuMu9fjyi6GMWqK9EpHHepwcaE2KbSoDqYHrBRkn4W5iWjYT7x5pQ4hyB7guCrxfmHtL",
  "key11": "4MZk4usBjkmwE4ZC9yfsB6JmXURZ9LNYAqrjZH8BcYfRTQvRjEns3tCu7NwWZm5qhL7xfoFQ3tAGjzDQVbdMpnX5",
  "key12": "3CEUY8Lh7Fpi9m3h7ao5E6yKJ3phjgkbcY4WpRaNbhRKn7s6N2GDTUVWmo57uJ7zJkdURqoCz21uJxkhUvSs8Qr3",
  "key13": "2wcfzUcUwsZV5vyweEiLcHg5YTp37qFR5k5negu4GrxRENuyFhAnc6vZWnZKjNQkpwNqmvDBbBFqwcqQfhUrRnug",
  "key14": "4sw4xTmKqyuaAFfbvQUun1Vastz8nwH58p257vKaQcmPAAyqKLEZ9tNHKBBw57DR3cEoZcQemd67CqsiW94Vp3Es",
  "key15": "DYHm8tPiibVUpDCzz1FoaFCvK3WEGEKx8tYPWqimNc5ijj3o2k8K7csaWvxcBv1ckrpeaBgCuT3en9e8RWbFLQM",
  "key16": "L5UAQvH9r2P8YnrSDtrZoewZU54RiMzuuTUqtcM9Q64aZkBJXA25HFhgMXdWW1enVJUqP4GeLLxniG1BcsVyZF2",
  "key17": "2NYXo3XFHHLrMWTA8JkKYyCRdaxtNSX5xqQDhuGRiisBN8t8TX2z2wGDStG67gqNs2UvRybFjM8vcd3zMF7WQDx7",
  "key18": "5UhyHMpqZijrKyKYEynY342nng8sNYeKhQwJQJkBQrNEv1v4ga8wMnbsyfEcrA9gBtDuTJhefxp9L1YaoqQ2WaMk",
  "key19": "49h3eczsn1AAYRU4sfjKkCvB1GDbXDByeocowigwBdz7S88R9aN8fxVjpqC5e86ThKQN9NBingrwEhQTkaqrAjGB",
  "key20": "4SbwuNvegUJiDGg3KdtURubtb8c6botGQj3CJEYmMEDoxfRFoLMgqU5einU9oTZP9j6g3NbxyVim3smPDN81V2wN",
  "key21": "ijUfQGMQv5AbL9zmjiedv4VSaQciQCTjgy4TY52NXcbDtHLbGqmzRc3T5JC1DzwjxjTqTW5f4okVYkgVqijs3fB",
  "key22": "4hmNDNKHxVEieRAamiJgCZvX4wch6SamXN9NLHhbhgqE2jqf4RWiU8tbs5GVTzxrK5kjkL4yLEYUWVVi9enPGMP6",
  "key23": "4m5wcgPezJbh77oVTB8DvLvTo8f3GjiQ4qHydDLX4V71aLdDhyApS8NBoFKbvYWP2UNhbxmPx6iD3V71YUWek5gA",
  "key24": "5ZMqjrT7Mg83uj7W6F1zrcTTQKTtV3kAuFb7mgTwY8tJLXZriHczF15ss9Tr4vfWK6e6VCffwqH6bJhBGjaRz7DW",
  "key25": "5UzAcBeAYLC6hxPKMjebF8YvDhPnt1J2w7SHtcGkhxddbtt6iTdqxGUnDTaSA267dA631sknzU12CTYWVzK5MwNz",
  "key26": "3KQoooy2LNqRyNRMoZf4Z9tk7bRmJEed4ReKqb31rK5MMfqkkKXLFtMrcUn8AEs6DjDDAy8HutsD6S9p91kUwsdM",
  "key27": "2sT9S4UMs4vRUFz3rEQSPAsxcYU9bEB4xyrXA2juXfFegLkmPBBMTynUh4bbJzMUwoAKgJ5RULSbjzJZBPZVmNUM",
  "key28": "5nsmMHqBQdwZaxbTq8bWYs2zY7jxKfp4AGw9rmnDLCJ5Hjc5KhrXQQe1K9kU8VjxHKDG53eCJyEZvxMZZvyM65tD",
  "key29": "2DzWH39hbtevMFGV2ZwvpcTD8VNsQvwxQn9Y9TwKGSqdpZqRSBmwNycB44o5Dvz6qRDVrxJb9utNTysBXrGVQMnn",
  "key30": "4na9NtdcMpRgDNCQaWvaJHQKz1jGSgCY4YdaM2GdHNwp7jhQpLfRATD9JjHjdgpywAQvjRZtLnrq2Vys1iyziMRg",
  "key31": "2bnM2YYBwU5JiJ9Xhd7VrkYwyQY5KdbMGukwH2kWnAQEUs624Ey7U7GGVdqq2LGWc8WdbPeHAvTjUkGvcvzFM6Ez",
  "key32": "2e1fzzwjK8NTCguKnkeC3zHbJ49DpYBGJDroLczFm4AjvFMbZJ6s6mXaV9rccz4ktFqndgmMJ3UykPg5NK9Bk2y",
  "key33": "3CjWdP68Ns5UJPSR3Uge31ayxmWAJnz9rs4RpULMCrTmKsFzYg4KKdo9STSaamKwJ28srSTURi8hBNWUVhBijPCJ",
  "key34": "51LN43S4gi1j6S1DGwmxNjjZFY1JUdRfadQmP42hxqa5LzsKMUuWjy7WVXrwf2VTpQvsN1u35oi7Hij1tkMjKz4n",
  "key35": "3rp564o8dSa5C47JFpWurpGtySsdca1kkJbKsSc7rbUXfU7XW4jX3EdrohV4pS7gfMSN5ZdEoRZr5hpcm8Q5Ef4V",
  "key36": "5fWCCTWEELh1aQ7e7JetVADDc6WJsXNnuiHoDMJh4uiKrfBxE9gAvNGSb55JapYEudFXCCpqSd6q65ZmDf23LySX",
  "key37": "4bYxmmDPNuFQQZs1nJrrLJzK5xSCwfyfSC5vYqfsRrhhPDsRDLu3EMgCGjLFAwDowKf3u7KHkRyLHXRNedX4D4WX",
  "key38": "51DjU4L9a6f8LU1Uwpa1gyKoBDPcz2xNn9cyPgRaAMHemfnt44BLJfD2FiWkWGxfyjFMLcwATcBpLA1Z9PK4KfRg",
  "key39": "2hnARMeMRowBFLjH7eAqxC464FhZMYVqU8KdvARX9enMFMC6MJW35kQtffnFjsKF5PwwJP5CfXRmGMbmEtGgbfUh",
  "key40": "pURnAX6a3L8kxWq1bEKFTCvcbc4sLFcxQdVMwnLTKYULFS3RnQ7VfgwXGiuZXhaB7EM5AhDT7RsWoFmBYSmPBQe",
  "key41": "4jgfEuMuE5DvnqBns3LNUV3MDFbjNXPso9maKJTLAF2HWACDkH5wGfdukM5RZF59stQKM6sAeSkhmZhRPU6MHpLL",
  "key42": "ZFZeWYdCxwdutZcrSRxPVocjtRV1AJQu4tr8ZpPMd6u1Uqv3ZaixQpFaaKQuEVCB3Ligz4wQcVuSowVgdVYgq4P",
  "key43": "5fdLJfmQf9kcwyzJJhDLVd1ZyoJZvUVEJgot3jsmSfXysZPhCE55nGmA2zVjcXiTwqj2ZhAtxQA7ZyH9HpJoCAoY",
  "key44": "qZbA27NdhGv7ETGdTfHgmXpS7SSWeuxiDUDANn2hBpAQ56ZRZaT2CQranxEWLALkJsgnVRmVyzc5Bf2jhcnumUY",
  "key45": "5dMszeRzVWdn4Po5pAysyZxJQcFm8h4qXsYthhrH8m8gXGBJ8KkqqwDSwsVTVxYQckttQtVXbeTwLgNw7V8mjBgT",
  "key46": "twDC1fV4mjPbNqTsJBZqMzHaCvQbbRLUaeEceUsD2FKW7vXSThz7ZcJdoxMgqE53tWYkSCWQjnHZnBQ9dCceKWx",
  "key47": "4pMa894n4gjV42QvEZ5gxCaGUfgYBRBKWuBnrFxpi9FDGDuHX3FMRMoVNRCUcGHM37qDMbTLDsydyWzVNe1cSwWw",
  "key48": "4jmJyAdLwUeGU3DR9FvMdp2kzFxMdUEyo7i21m1ABewV4AQfKachLUSMvD2ZbuvkPq9THi2PRi7pg6y6KerRYu6y"
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
