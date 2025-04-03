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
    "5o4WPUpezowPJsUa66oRh568UCw5LU5M85wowp8D4RRN2adGDGQQF3ypqeEJVmsBRwLb3aYJr7JBKepZYp7SarVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245m1P1YBxcTXvtE4FJcHEZQHomCmVMR8VdC2VhG9w4VMT7QmdcLoWyqVDSSbjzKEssb3PVNHj5i85Rg1or7LWVq",
  "key1": "QqqQ3LSue81S3N3TY7wLfwuFiBXnww36fSN55Ju6a41hm2ySRfsJZQgAPqQ94tDGBojJ5LeB6hWRGs46zALrL2o",
  "key2": "3Pteu2RuMfzBnt1j1oTn3ceE7dTvFneGE3CvRejCPnh4o8mUSNPTg4cuT7awEpXxoGcqC9GVJRAVP2Cj8po4hsV5",
  "key3": "4iqo4QmixZig8xwFGahrahLELxZSWn7kwT1WoTRNhA1oNMvpvrfs7qdCSBGXdVMaXHJm2Z82MdymbKqdDJa6kVYb",
  "key4": "hm5WmDoBKy4sLUFkz6havTY1UWLJDcFFhyFaz1Q2nFpXYs6kQLU8aK6a45P9tQJ4mGDAYWQfKV3oquAbky7bCP2",
  "key5": "51AHcLu2a4B6pSnMJxRZfxhPfrG7ksMYczANsmspL9Nnfh7htMVNNH6T5XscMDmWudgRH2ZGWqfqrojpad7ETaGP",
  "key6": "29ZhkG7fxYw2LqXENZHSiWJQucmK6DEC2Nhw1y4UvEVheWJCCnhJYPgYDrkc6cD7XoDQjWYNZu4FD98X1XzkYWnB",
  "key7": "5ZbabLGTL9H2RSLtEHYU9QPBy6KmYyavbjpUJMseiMqWfWN5c9KRWiyTmy6Dt76yhMs2Jv2NJ7kq1hN5gi3cU6Pg",
  "key8": "4Rm7rR19Fvbwq4w9gcM7J8e1xNpjEJtnnEbgCARqgmKxmtMCYrXuGP2W8P8iZ3RtqYFEsoXt46e4wJQcZECDwZGt",
  "key9": "2Qwa8fEerG9yA1dwTGJLE9ssSJvasbSjGENphaPnb23Q2E5kWS1z2QaEnmGAf6VCKHNL2T3JNdPyM3o4qfvJueMD",
  "key10": "4CSP4NSQAPMQvMWoLezguMppWoFbfkroL9j6Ywp1XZ1soEyzYrmnptiEfVjyXPwv7hTFivYzG8YTEcN9JCBuH4pC",
  "key11": "35rhHiKQsdhCHekc4T7z7aCyyr4F9WkLDZd8wFRW3NBQtiSxdofoT7eQXh4z6EQLt5cmWAAvvaQeJFXgDWXGoEN5",
  "key12": "2GzCvae316LBPdUAN9uvuUeDyG4ieZQeyxPGsz3j1UoT9f9zQPEaxo7vnWWBSWbimEqWSEQo3JhKa6ggtvhTgRFX",
  "key13": "2N2NJBbEzg1B9srMdKxAeEv1RXUbeXUF93oZYv87ifwmD49DwTdMENUry6caf6k1FCgfRjhLVLLVHseTJie3u8H1",
  "key14": "4USjXnSc8oi2UGXfpqsXkBgo1AczpnZKcGrgiKVhpe5Fg544iPByN7zNH6HaRWS6fBS6WpcLh16HS4p9YWjjhCqn",
  "key15": "WDzsbXDozCtJg5rYmeGKhB4gBRZ6eKC7kbmsFho62RGZNvFRR34oXmdPb5yYMyGVEYw8XGF2vChkDsSKCK64aEM",
  "key16": "4rXKHoVQRbmGMsXSVKy58brhhEkpJAoW7caC5rYk53pDxAT5AQJ6Q4he4VW2dya53Twe6bpP6ieSMcimu2xnkcF3",
  "key17": "2EB32xteW19wHawxwrV3mK3AtTyAhv3S8xnK9rYFX8cjNWAr7U36Zwv9p6WVrycTCcghvYAj2H7z2LkCfatucimk",
  "key18": "3YpzuCKgBsmMcsQxeBuZEdXMhuxjmSSDVwHZMtXhJZzB5ekBk1oMU3MsJDPDFaKK3YtXTPHAuVQExKicH7LW2R96",
  "key19": "SNDXtvri7vBZfP6e2kqswJXVfuEXfuHFLAP7YYGtF3tjHEhwUahjXytgHWMX6Yzm4M7oKuF8pctBHxx3mDrkC3A",
  "key20": "5FVQKCdrH6F1NXaQqjYZUiTjMgPugw6hMu5FeKUs7dxZkj4r16bESULwCWWrnHUFgz1vqmcK7th1eczJsLinTuhK",
  "key21": "Y7wZHHUAvz7qy938ZBG5VR9hdzV4bhNcGNH5vaQvKxfTU6JMpJr8yF3197ikqihMu1tgQhZqPQf5FB5MZt6skxw",
  "key22": "42BHWQdK8dab6791hYXoiytXraF5QrhmS3VqqGuuyJFZpKU9KFjF8byD4Ww9MP7cLVgbSNotHSdqhu8Wctvnbzqe",
  "key23": "62kpEH4jS1wyvGrpnqVwwrAfkcQVuFiz13u5uhdi4Li9kGkb1v3s9eF1uzrejm1S6x5mRDA83rnEeo4gLVWkXwFH",
  "key24": "2S6N7HJWrDYZHbWFvwwqTA1kT3DmuHsaSctTqZDxyUpVoFMVXvRSfY6oeYUueory1QJinQah4wDzEDv1CEkN6rVh",
  "key25": "4bDY3oCLZjHKWjXUN8FphQeg4YYYbqLXRw3mE2sypX94KR3ZaQwQrLa9uZA4AKwowfeGHCFjHNtAPY6Vv3UwhhMP",
  "key26": "3SqtkywJRMjSSiPumqGC4uNS5j8aqJzHZcRuWxY7gkR7CbektkALJFYeVJAfZctEe8c9vfoNh5oBxEzgDVANUGNm",
  "key27": "3pnqFsL5guoj79ftErrL2ET3XocLZbKWStEURznG8wBcvT1gxY2T1XwZCpkEZAZgVNtWgTbXGVY8r7JZTERCicPZ",
  "key28": "21VvQrKpWSqhBpAv5zZaaDNLfpGmDRSBwHBySwtjP24aC535M7b4W7NRHejsTrGAXK9cWcZf7BVZwBiqv3dH6HMa",
  "key29": "513nx7aHXqsMKmMUt6Wvuf5hmhgniUdGrtdWxVnrALgA1D6tZA8TuCASZm64LMc5JgEBe8AdjMP187xNcNdDB2st",
  "key30": "5v5UAztzQjyk8Uo7HHGAdr8CqgJVDPErwQ1rkeAH9EKtdC3AAH2c6qx9iE2tNWZw8mFLjUTqmgNvXk3JL934gQVS",
  "key31": "AxYqs2NTSgQNQGx2ToMxf6nYUpxJVtkndmaw2bLSjMy6HfdQzxFt7jKrKWrXt11fVXG1jYZVWrSFpGDCuESoWVG",
  "key32": "5emPToDb18tLZTh9JzVhyVpjSgpnCQxRq46bXjJiDt5udBA8yJHFhwxbjPfTtFjPYZGWS2MX9fBhD85U9xjipbo5",
  "key33": "3cgLR2wqJQhiY4ZeJkAFFRSqwAgCDEgkmckjjp24sXq6hZLm5aaMxc2gjAQjGyJitBUc39kcdzz3aFoQwLpX4snH",
  "key34": "2sExGzWStdj3YmL5YQNnnqxKgr7x2UQuU9qLfw1VqT2KsdXZkt6NnFHB9EXCffH9rhcPjECoivsjYe1BExq9eYqg",
  "key35": "5nL6Xi1Yx4Tqd9f8PpZ5zGYM44CTKfgP3tNhnGjZaMXGYYox6ZfnqaWPynsvuJLNETsKhB6usuZseMoxGKmC4hEL",
  "key36": "5f9efScfKyWP11TCaRcfdPjE1MUeqrLCcYoxDutiXeLiGL2FN75cuzHfg9UjpJc2ymjA9Pha6NVrBBz6VSPVdV1P",
  "key37": "547LnrmoqyVn3wsfx8y3iVbZX6eqmiJw1rB4GTzbakJJ7Hn9DFoc4HPhMLRKi81QkeYpXhLY9dQ9g3f4Ts5AAZtT",
  "key38": "2TjY9y6wYouSeMCBPmKKNoe77ZJ5n5wrHybvar9mVE6RR1aQUmmxs9Vq1PPa1yQ1UvH4vdb2K4oHoqJob5cUJDKW",
  "key39": "44DXidCdRhbTZr8j9D65e6iegVfxH8vAEoF691nNh76zDD6Kgdvu9EtH5N2q6z3GttsB6JWKSdDdBhEntcjwridB",
  "key40": "dDyLzmr19SWFT1wiKyLNW9oH2Xua1Lf2pzeSUkELTrjAkLBECLmBmdwW5sQTWw8KLDkrSTRhShedYbSe2XKLfez",
  "key41": "ZhBx9tJVsx9EaB8axkRNHJy5w6w4SDvCXV2wHth5EPV3zJAbff7XzLTqXVn1ecuSYkCGHsw1xm9FgbSZd3c8juk",
  "key42": "54DHY2vExMCbatnPSEeMQDvVLWL4pKST3nEZh7a8Nz6mhttUEQmJQLkTQzCgAz79c8fGBSPmyaCoZ6Lm3p6uzkkD",
  "key43": "FgUuMFYQ1kduFvzaKyTwmQdzMsdLcCfu3KekYXenSrEbuK1rkE8MNiXD5a8Td8Cjna2HyNfDNT3n8Weq8fZYsdc"
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
