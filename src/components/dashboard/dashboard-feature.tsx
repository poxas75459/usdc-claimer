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
    "NNdJTesv2PJLXQmBmAJs3cTW7pjeAhWbQQsDmKHQKHKNC8RmZgoCMBWRM7LMfRvGHzgWUqsp5b6mN9BsXWhJMJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RMpPc5kmZxQW9at3A9HhgaUbttnUXfJgRyjgecU2xb2Wpt4G2ZmoAGQ7pgMB3uiSuebHwbwN1g6Vp7ZJQUJNa7J",
  "key1": "27wLWXDENSGaWdEd85mTKqaQy22fbhhmnECecgF1bVcYqTfbyZgya7bfS9p7yZjiUugjX82BLiYZp23gRX6gjf6a",
  "key2": "A5GvbUpPgcD4fs1kG6hR7XFm7u71fvJRuvJZAha6oKWTAwwesrjzhzu8Co6ZNrM4GKWxhP6hkbcXk8VcG1QT8F4",
  "key3": "42xvocU6yj4CuUiWNKtL96xZTqd88ZDEyKKdkyM6c3LiktjAqwVzPCZzmeVaLzoG3bZuhgQ5psF7ABdkAYXfi4SE",
  "key4": "5D47Jk6PGMvqGFQhbxdBxo7k8wPhE4MWF8JZedYL4Fnd2Bm8FSCYHLXg3fGyoXXoEsSpuw99Dj1f8vN65zm5nhHR",
  "key5": "5r89oh9rLmc1v9LvffBy5RfCWy7hyfkyvHuuAEJS6h6KZByAxs6cmfcDRciLAJFssKA4MpXDAccSG7GXzf55sKBj",
  "key6": "8J9DngC5Z72WqvYrPWr6VuTWeMTw5wRywWnmxpG3CKCwx5byTRzLs9j8NCeT53kWhECMcjHrsQ3S92cPsDFNHyS",
  "key7": "zLwNow4jRKm3CtJe3pXp1Rs44yKxyPUY88NpqdFiS71tDa2dUPJBiuruXp99KAzN1qQC4oHUHjD1w64SqUtAVuu",
  "key8": "4wzQxpUQuLK4ZbR3kDeYy9hZXkJ8TCvHRXrnDSXG6QaX7ivY2uriBaVx75ipnC75kecxnqwP1ixuTAvAQQH7UZU5",
  "key9": "5mx9PiLnxRiWfK8c9Q7n4XSyCGq4DAmFvY9ocij3Qidve9hyFKkZbJc1qhPhYeuRGp4XkYeSUNw8xxkVx6qe5qKT",
  "key10": "2S12oyioovwVUEphKa4UnUUJXB1S1bFCV8rcw4x1Lv3tJimr9N8Sk1s3vr3gRiYy32bM4JvZAciqGhotFWKfH9SF",
  "key11": "5NzCXj4xBFf6iRwXpwaXiEWASfzfZBnhJQ2wFtGmyZ5hS7DoD8paqRsYxD4jM5a5HFcsgAzbgoRPmr4h3LF3gK67",
  "key12": "9UUqeukCas1HbcMnCQAM3J1RohSe4XJdr14HJXFfNUkJVahbpYefM4uCyhVb1qML9VWou9735zWwNrwejjQ3EYE",
  "key13": "5Lr9udcAQmiMBmTu5GbYR3rrYAdMsGbF7MZG8eFTSYS7NeWzm4wTrDNdqe6L9pkvRSDQcKrZSUSEHJKHL4dyzNHo",
  "key14": "2yAZLRPgMdBmXYevDMrHANFyWWynmMvmNMghmdyKvUZZ1WcpVaPXsoa1LErkkUHx5qgpWyouTtHeqSQ37pHK8Hvh",
  "key15": "4eoEFoms4TxNQdsW2Xw2vo7BeF939iRsuxpJ4ppdKEH3ytELF6imUJCeAyeUHLKenyRHWQBX1ijCkm1niz1fmCi5",
  "key16": "3sbe1K1xsjetSAD9yYhMT5WWf8Trb6rqTfK28rJWY9oQVFCATCwfsWDHC8jNFUXk2cN6xHnGQGEgvYtPc4sPtryp",
  "key17": "oqpnHWjxJvFr6fW3b4S7VNAaDHRPDeBZGQQ8Bepv2KDo1psUiKQWXKy4aovWKvMaMFi6RLmQsqCAorxwq71GTnp",
  "key18": "32j1WivQeAYhFw7azsmfVb6uHDerC1CfZdjewhzuFsx9tbEf4RdgacpoUFYDRM8YHXbgdACLqmu8ae4Pq9QtcA8U",
  "key19": "rsK2ZFJmeachwfZuGvTX3JSXKceXUDqo191CVzsF1jKwRDzMUk67oo6kM97ZBCeks4seT3QMnBEiADannS4ea28",
  "key20": "3kpB64agV8KjHhAxVyRnmRGmbqsWRca9NyZjzXsq7Yue2xBsQAgHgiVWNc8Cx2tiRPuD1iNBzRfAH8QjHjZeTbfW",
  "key21": "2T4v74EfiB1Pg477hPuGz3QVwBr6q8HjmmbzddLTST9qwwKGZoh8aJP8kFyGhKXQf6VSgh6sZYZHZdEpYPbNBEWx",
  "key22": "3v5WkuvGD1vsKpeHDsmXVF9Fq9cKnE9D4MAHCyzJHhm2USMHU1MmZcthYfcKdqSA8S7ptNnPbE9TVtcv41XF1ggS",
  "key23": "4tktLQUX8kh5f9jbYNqvyzA3h68WTCE6wcPtZEpoqXmaeV5gyY5J4s1kb2QFiEtqik8sWAT8LvChpLMwZkjpUnv2",
  "key24": "3ZJiuhQyezBdmFNHuRMRXTAjgC1DpB2WeNGCjdyKNG6TmrgCpvLXnQ2AQBmKg8FK2L3CE92ZpKVNNzx1FtqM5DeZ",
  "key25": "ipNWVBBJ8QsJjdZJKgp2nduJn4uBAjddGW6G4N64y1wJpZ21pbSaCv9ZGKhWxi7GNs9FMp7BgNjp59Zi2PZdf1h",
  "key26": "4pgLnT6BugPzWbaTHhhqJHKovwKpC2hMaQ6mMLucn68pGSf7kJYbk6a7SuAtFXRLrWHUwmMhEPekAtfKvpo6TcP9",
  "key27": "22wFFeEz9VpeqVwcB3jtDamKQneqjbNczUsxwwFDXj2Pr1xyqKtkwNS9BuTQgQQqPXwgfjYET5PC61CcxuSfaJgH",
  "key28": "34ZPNLeai4dJ49GdGuNaFibNcR2YVAkvDww1iLCSZfKZvtqLPe5hC88GhqVXiW3jZf5bLvRV9N7CQtFoyo8i16f3",
  "key29": "4hA1V7EAUMLdpnqwKqfYU8nTePm8k2mGS66JPDNtSDuYY6e9BrrTgi2kFwpqXmvmzAcyibxmJkd6be9CLEpaqNVB",
  "key30": "2hmpKtsYHKXQWnBxsmca1iVfHFKasYgruDGcWUcSUDTyNd4HfGNuLqMBK46chZvukLwR8g5NkHNn7kevSHMjAq9u",
  "key31": "mYNJYwn1zjz9VmHzXt6bwhygaqVS7uj62ixiCvf8WBC2uWmPH1RGxAW6A93rS3CnyJbsKG6rh531u3P9aqaFX9e",
  "key32": "3m7VUkvGRBiG8zv8UJVLfCfQBDU77Mpxm19wyN7445hDYbJN1SkMQF2DNszDKKXGZCp6BDvyNozSvbS6YDfy9Rnn",
  "key33": "5pQVn8Ei2xvbNsxGNuvJaqY4ErdXYMVHTTYXYmQG234ZwUgS5uM9avrQXEPFrNF4Y8JGpRxZkDPo1a4Ld9kE3DQG",
  "key34": "poLTTEqm6wyu7XSaZehJHyUV6Q7X8kyNQkcTJxQrweCPUiStoyG7JMFSyXhPkPbpGfM2C96wVEfa8vZZvJSwwFB",
  "key35": "2rZcCS45oCXUaq2UEnoA5PyMS71q5PW6DCYYnUGTKyGV6bdes9CzFmUUaLUjKiCz5RR2TTi2EBVG1QmLNSQAbEJV",
  "key36": "4kZ3MPeezmuDiwhxtoEwmRE2wd1TzAWnNLW6LKMyNPkZfPmnXk5L7NDSXcDjZKWAGvfD52TMKUp51pSHLs86RX2V",
  "key37": "2RD1inxooRV9ckDhie3zn1z944vqLfj2HJxmQwMBUrRDudLaodGuD3nCTdvC4mhNum2RFVZHeZGEVhYXCwquXhAE",
  "key38": "5fkAjpATa9saMDfUdQP9XrRDkt75WpcF7Ywg63CFDnxshob3UGgC1jPYFtSema9RiG2WLDSM33LtwyYcdXKUF7WP",
  "key39": "5Gs12MKK8DDHGU4WwBBtau7arBbhd9n3UCtfqaLFS6ctQmfSNMk6MCtoZESkCFfcNGd7VVHQXQDkFR5BAKi1tcRT",
  "key40": "2UkjTGumH4wfPD8jSoD6kaKd5Aef8qRPajRm1tLj2ZdF72iEfG98oFnM3PSdnDB9tXdefe7TJgaer4r6q41JZQ1z",
  "key41": "5PyNx2GtQRw52W8XwLLLNiAJe2edEFnL45GhczoVioZab8KZ2hAGpKQDU5TBvMcs9BgUhsAhyLP1UyvXYQCHw8iT",
  "key42": "3xs8UzJCkRmeUzxPbGaE9JrBceqtEWAq1WHvoZ9mTUwQMWuMHVJfrjwWFfe7GC3WqiWPYAngVB27Zh8st7Zx3fL2"
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
