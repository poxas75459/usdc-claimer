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
    "3u6vrMvHrF5CFSyVfbGaG5oAKai5fzxwPXRGymfV7Fi9E4AVkB94PjsnU1X1aJCo76sagpBRJDEP3ucopMZLe46M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bvD8fMpdUKoSqoiBtaj7jkQTdS41ih3MVRsT55YaFFLFxhXdWiwVSFFqAVtbXm5689QJpQf4zHyoSWqzjbeUeD1",
  "key1": "5AHn55Mq71e6zjR91vjbG2y8PL4PYfNooTU8Ajj3m21KSeSPc2Ykd9n3DnkxLVDzdzE9uHoDRcu6FHpoxRd6MoyJ",
  "key2": "3PsBzGkmh2XqqpURJ1QQAgg8gEsLwppYZ96V92RbHLwJNsPQRW7p69W9JQWX59yrSEsjaY2r2hCmPBgLJMJ1eCV4",
  "key3": "3y3PkYz3qLKqRqW12V2po9tgUCopZhJk4fer4XmDEBhC7ANbgEPpFFnowahoPPToPqbR1Qfm7Zn8o1HuQxnugpcs",
  "key4": "5xbg1F5rLMJu2tSNCuSpqekPVYDvBaGsJV6jeJSGqg7dnf3hBMmboQXj4gPd44oTmkTDyENnWGdWSAf2kfBzr3Kd",
  "key5": "3GYWr2DwjvEyFbeAQAti64N4coHtvYJrsyjA8ExpTmUvWhopmrdWKtenbUCYjTxGtJL1Ra9c96fM2SixJLLD7ajc",
  "key6": "gmBcvZp1DazYRiMg6s9YVfRoBgb38sE2gpgBUTK2RJqMHBmfPYpTjq6oanyHM2LmncsFvHGGGqcjHhSe8SGSLWE",
  "key7": "25acnweFStPmA9NouL2dE3TCfG8cB6PootLsDh5NX9QnHSmqN3SiowwPahD6aURVmQaSN121k9f4cuXk3iggjray",
  "key8": "65MZA6LQKd1AWYvdZCQpGgzmsXT6BJ6GE25H61NftancGtC9UhkiWH9TQFrYJEtNWgn3nxbUnauuU936YW42kj6s",
  "key9": "4SKg6S95aNLRUC8n4bTzLztdrtmHtzJGTsZhvnozWEjJg5huFe42GXvbE4QcUv23esVktPtHqdPUWjf3WsqEYzfv",
  "key10": "36jGV4TYENc8WeDPgKVXLmDTDnh8hdRiuC2FirxT28P214kT2C4MrMgUQexo4Gfd1X9jduEVKqJhycsK7mDE94Kj",
  "key11": "3GEB3QR7zXpiFxFiZmHs78ZZvhbXbkijFusCmzdrndEcDMAffXUPhimtptTgmCLj2vhDN346o2csf6VthHmQpg7v",
  "key12": "4Kwhuq5kFAMRD2kKuhfwd9ko3E74M3xf4Z96ryb4xkLymFMfpipgZZa9LWy1z5ndhRCAMzAtDMZi2AJzCyeVFVyK",
  "key13": "3QgwP4h5T9GcdhQSwy4z2CKRfGA3YzzEDDDAwqPgy5SB3VSvpE1Aby4ZJWpKUyvBdcG1szrHgXcF1jjtK9dEDDjt",
  "key14": "4WLCVqNzYYGDVdDeSiYgZFVFAz5EMurQizykNygW8cUVHmrQrhRipm4dhXzFRcF74p8onDyEDXV1ZdHXsdbN6oTT",
  "key15": "QuxQng7BUcNUr6tvQt9Fd2Kp9Vozu3uvbLcLmYfRttMYBQseC3aupT756dj7iiYhHPMJxNH334XrybVzw2MEiSS",
  "key16": "5o8yhRE9ZpmQu4qPJEm2uvchtfsfSwkt6dEksF7QLGcWfabRH4ddKVZgAPJ1DNCE1cnkRmbPKWcQits97zsLCbin",
  "key17": "34DMAafpBFmncWx5AV4DYbvJK14T2ppmABshuZBhkPZz4aWRo5HkFC3ZEDFyhKWh2XjSqHftGfYtnqo5NfLViTMa",
  "key18": "5pkmEZNrFffCYCSc56ffShcrkRGX6zcRpdPJ8P8TLL5mgHr62r8CSRCcEBSwpYnRS9r686aDSMPHbrXNcU3YxjS1",
  "key19": "27RjNGsUL8ouJvufCdxJdTUjWTH3AdJuFvBDUcfSgrKZmY9KmR7xjJdYyNyoBNZAeAs2gAT5R3ibchwicmCYFEZq",
  "key20": "4HNZnZDUDTXZs7mxBt9gbhpKaHY8XQqRV1gxxbmECHTd8WJZ7ZQGHoVDpL5t4KgNx6WZMjBJkbKitndr31szqVbK",
  "key21": "3QiZEyXEQvueoErQRzBThuNhVNBwdeLvTTzVPTdJFd12cbS76iauZLaKZnRxqNVqJvKKCFeA3z1jnoL8b39P66nn",
  "key22": "4eVjqPho6LE5k9KFreU5i8Dc1e86vCouudSi1CWtuUAgbWyoEjjZcTNGrB39jr3b3YjFebEnohBXyEHhJy18Td7Z",
  "key23": "4xUgiGcrADWNvjrGxbksospENUwLUzyB7xGwWkFC1VBELhEjFjoakmZ6pBheGVuRjp3G2G5LC4Q4egCc7Z9fC9Ae",
  "key24": "59xBFpTP4Wme5ZqNuQ5sVhV5S8uq4vqsdXcZyqYS8ZoYw7RooFpjwwZc8coDqYdKGf7X5Fqwk8zZ1DYpbwUGSV9t",
  "key25": "5DeXoQG2rLJxSwdiFKbXd29Ky85bBeybT6rZ8LFUz1a67kG6Cy6d2YTkr6XtQ163hA4yWCJN7T7o8Uofv5XQFc41",
  "key26": "2zMZ51aPnpwqYWRkJiqsVhvn9ac4RzDGANeJ4innXvcz3e4p76mvrpYLG9qSCkPLQYHRvbhjDuhJbVEiUh9r3bcb",
  "key27": "2fd8R2y1CgVsrxJ9eyGhpUWfpHrziUrRQgpoRvTa7J5E6TdsLUd8kkcvP1t5XHGxzG7eeExyeMWqmi8B1JSu4F32",
  "key28": "gFwFynFYgLHb3DRsJ3HcPbae1TgnUyEngEcfZetFAJbnxRCDfCbkV2NKGybZ7ozVTb9DDmBtEKjbPQnEwZwkUK8",
  "key29": "FNBYrM5esjEDS8w7mZ5VpHb4sJw3YxBDRer3fPvUgTDDqrx9Js1kkr3xqqTrLRnH8UsqaJDpvVDDyVSJSFTCcbu",
  "key30": "oSNnGjssaHXvRPNq6yRCZgv9av2SUTmnF6J6PrGYe4hCtQJxjAnKaqPeZNYAbKf6CkTckpxrVSTeJrTFJNXpNxX",
  "key31": "ksopf8zjpSov1Wo9mVTwVaRwwXt7r8yTLAqiMM1t9MaUvTzJWXft38ADWw97jpeRSUwza7HijUEn28BtPfBFkTF",
  "key32": "4HJVPLtHu88hjwKrum6beDBcz1VmXrQv4G63rP8Nn2Y4miB8QpJY45G1A9tVRtMwqgRNRLA9gEUbP2FnCaVDbt7D",
  "key33": "5MUHycMzyDjDEafBZWWWsVwk3AMNLxRXwv5CEmPiuWFYE3zQJKWsiR5WtA8pCDWFn3BnCFLH17BL78V69Mv4isoG",
  "key34": "2aWdRKcyhcyYgsMnrRAy4re2Pi1fwfJAxHqCcjxVQ1kzjWXwYeNvXuPCCN5oi3ZLHgR8reHkrDmmDwR5hubrRnuB",
  "key35": "58KaJ78tNPxivFQkgzhJaG1T4tYQyBeKLLBeJZhED5NjoJ2sjNzZy2ySo6ybANNqDsQuy1RGqWKYa9ugcZKCBtP9",
  "key36": "x3DmvM1LjVPoZ6JLbir8iWHEoRahqWgUGeAVxodvyyJs2dXJdB8ojCeSHAgkvRZ8kxKoPRYsVkzDVmyxSE1qtgB",
  "key37": "4cmkd2kd5dmrDFuZvRh2CjF3WBgZQ8vhkCF5XuMT8iUjHgfVK9LVno7JeeoBzQC8ZhmstN5PMUKDP21vX1a8UQJX",
  "key38": "4VMtcndR45RBBDP4CKbJ1TpJMi1QswmeMVhW7vqPqKjAf1ZPrfGHXTjx4v4dkEz8Qo4BBfAbmrii4gDbLPdUN9qp",
  "key39": "3gPVAFRUpFC5UVhnvPHTcT3dKMMFPXVnUPMNgDWNMLBPJF1vEw5PZ12SSp1kkPqfd1Z2eZa3VDTqLLWF3qGTHfc1",
  "key40": "5eERiFHtY2j1ZZRRDH6D3FG9ZQ6dVk18okrVvCeWhyP6zeJbbzxzm1CJNDJ8QoPCsF2Xh7QPFKiZtSZ5KZkhhX45"
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
