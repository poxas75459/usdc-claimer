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
    "2bdThAqJRFkBA4qDPfVganaA6tUmRwUE5STCtUMxixmgBFyQDPVjHQNqUeKryuubGjUDVWAQskMxZm8MfgswAv1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gi1g3sfZAsFmCGMaRCs2TWH3ysT9FcwapWjSSwY6sf1vW38pN5KU1MawEnvjMHzQn1NyJG7WzaFNrG3KC3DMaBk",
  "key1": "JwdZViLk7zKwtVhgueyXyYqvF8Pqd5xPqzjdLK4e5FEEDcgjH32WQfKPeA9vw8oMTt4mPdCMhHYbres47AxU8Tp",
  "key2": "4jntyXL6VShBJFrQvkS9BTNKYh2JMak2fM6r7bWWxBjvSWfnVugAqbryDTWGVwYuQ3fN78dc7WFBT1uaksJG1PPz",
  "key3": "yTUyE92vJRLiZExYg3DCvQKmwrG16o87fX8DuGFFMnSdUqrbNjaSNVC1uhmFuHjLCuXSv8NnSF3ToDv9kCVStJc",
  "key4": "46acm8VRdCozbCrv8atXQm7JEDNe3droNcJBxov5URGtFwMPU5boSBQPokawBgicJDc6B92cy2Kq7bKVcAjV82Sj",
  "key5": "3LniwKyGc29whiRmTbRPjhnRtqJhkf1JxHKpcncdCapc8C2fa6UaCJMGxNb4um12JXo232x3MZDW8HWmxcfa2Npm",
  "key6": "3MTNsb9133AGaq2jKminJb5FejiseT6J8whcE9MnNqM16YrbkftNZCZAjJRvWhMbdv1hzVnHcW8TiXRHw3CtPfZ6",
  "key7": "35DeRCK5LQECEc4ymz5VaWR7zDe1HMrezBMXUeCGvhv1VAKr1kekEzxRmjsueh2Mibo13LzVxeeS2yNvoXdMrz6P",
  "key8": "VvatPoSAjDHDv1gs8HpujPJXLbnQYGmpG37icrd1GDBBAVuDq2mCkz8TqmfxiYur8mNpfP8KR5mw4YsTb7G3pnw",
  "key9": "2RxbEk9AHNcHLVhgFKhiDdNtVBxQVihGbHVsnu4m7K8ZunhQ8iAQMUdnQJcrZT1fwaxgkgeWtjW7iGJfFw79XeYL",
  "key10": "3Ba9skFpq5vQb4JwdRk3pw62syujpe5yJJaHEaaD7A5LLUibmKJrYv12dToXQrMGKZTpYSTE1eEW5J1D4tpx4XCb",
  "key11": "3mJd1wbBCLDPrVtHHXAZrZL2XrG7CzrAkCgLvkKngrNvYrS7rSeEHUNdPSLSwMRUdQrzPnh6FyDBAKkdrb3Wdsnd",
  "key12": "4tVqVGyu3gZc2CNH8sUEYCroqom3FWisBdmYaUJNuGihcDpNrmeCMeFErqeEvbFsrcRKfEDS8ESFbuVcZ2kH9Vys",
  "key13": "3SLR79LoyLANvPMkL2FbYNmDQt8iHUYBzEU9DxcaGPiQZXeAtMq9tugK4w2KRDqnJAbPumLsbp7YRjdckvV8BiFy",
  "key14": "4cPsZsnsur2c1LCePHkEtYZXrzxRoJCNa7onNLwD93MSGw42kX39B2rKeMajPv1AvuuwCW8Gizf7qKxd5dMB5Xcp",
  "key15": "43p4CQgh1mWMmExmFKpbekxvScc9Z6we781JFksU3TwnmJSbsjS2Ct85YWjqoZStT7bKzFn5CnYfRpWK5eWv3Fw3",
  "key16": "CZGk4Kas5gEdE8WMZPcDXM9R4d55fx1J3Jk3ZRaD1okpQK9YcCGyDRxzoKKRRsyuaQTfymqRYW6mk1e2RVssjqF",
  "key17": "5K6kcqUQQZT6T9Fp3WRz69eFHV5iySosfuySiMw7qnnpaZuqq8mZFEMub2TvJMed4SeyQY5R9AmQDTxCeRAeJ7qW",
  "key18": "24zhBkqaAcBpCXJF7ieN8SfqsYLFfYTyvyRfgBjcs2takWuWTHdUygFcW6kPx6eX9RiBzkwS7Z1LoTYvvj5sdj4Z",
  "key19": "3m36o8mKaG3pWDQqSzbdeRPFFthEcZZYJvjx2aWSnCj56zjCvsT2voAf8oKqUiaRRsogKZj2G36Fa2HqWb9d1eDG",
  "key20": "tV4eJq6ykFxeXJJrJU4iJZk7GJBKFtJ6xEdsLMdaBtuaPqJVU57HmE4CPtEjt19YqfpVRZ8Rd3AnsANXXTsYDAx",
  "key21": "TKWunG2JBrv2TgcNmpPSpknwY1UJD5dZMVSvDxtAAWkyJY8L2cwdbbeTcWSGUP1b68cwKqPoGBjbqvVa92ZScYE",
  "key22": "3jfpdMZR246xwrdeuNC8og4dXuujgumaR2R8X7F1f75uSWsMFf5urth1mC89YZDZ5TSr8qC7nX4CBgS9FJtyeEH2",
  "key23": "5UqqQUypKLDr1b5AVwAxh3jYxFoe87DSLDYpoED1f5ChN693RadJcet1s5wHyYSQTNUwF1DnUFfJfbMPLkkyNZ12",
  "key24": "1294chvURGNpZzFm8ssB4LoHEkmnawNE9F9cSf7r9NMYX4oEAs3JCXMZVF6VzuAYaUdHXMnngbphFpBMH4QcVeF5",
  "key25": "5Eu6avTiYQQgLy8DabxyVD3grHv2VA4PSEVEobYWBLNUnddmHVfhPvipaD6aBrnXKV4RJZ9bLrbwip71zQxcjBDP",
  "key26": "J4GgLfazXFD9hZQddu99Qd5Ema6XmmRzUed4XHqcY9EcsxWUoj6f2PCs9XRKtChcjGx1ehC1w7YLUknpmFob2Xb",
  "key27": "45LqRZapKw4MxKnzNzYBZQAuGxaceEhuuVnygme4pdwvLicD3p6ywvrm3n9YprjJL9jcJW3sn4aH9qtCFsVc3A63",
  "key28": "WRxLGt4ub3NwfSabUVsYCbJPbju4K1GzqrrVsShDDQHuyzznDWkoUbAX884c7xPno2HG11fgKUFV54UWyCbU88H",
  "key29": "2ua5MxW2HSiBi5ZQSJCzG2qz9G41YHcKdhwmiwZc5neELaroMzStZCmkqqZjpuTDNZmrrmt9wqH3n3mH3MgQucLW",
  "key30": "4G2EpkKh2GLgvy1B7bwLGiLdpHEGNa49sjKDjhjwPBxFJJCe3mso9CVzePzppSBYWT8gYHCNqgpXWPap25hgHbMm",
  "key31": "2rrVX1vVi4shCjcENQgqqCnAUL9vnBQtLnbExvxzxUez7jjiZFRfJA9RBTTGsc5affGnGv1Cx322ne1vc92XfFUh",
  "key32": "3veUmzgitLAKAxXEN6PWPndzg6nZrbvKMo6dSev2bHtaUA3mu6HYyuf36ccJXFvDLnok2RvLBWaPaULe7YM4Wkd4",
  "key33": "4WQk8bhvuWPVw3n3M5aVXAHNPosN2mbjce54aTFqVoLahR2zYeE6v5BEW6zfCyEkjp8nYQXpekKCHVAaeeufhRDf",
  "key34": "3sUeEeowYLxUPwt5o52LBWMpJx4dBJPrzdcyyYsqGn7CVBvSZRzB6vmX3nRJH6BhA115d3AV94HTn3WQVq8oc7W9"
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
