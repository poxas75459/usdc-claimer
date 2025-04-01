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
    "5mP6K8sMPNWEh66kwyecTADZskr69HLScePSxpJNtANYfpdi6jpZMwXjPRhKCdUd95trRtiWeFbtKqcyhjNzunn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UVzLc6ieVNJhpwkPk7hvQQkrRv5igFbF3jDDrfLjSe4WBy51AHkTnz75c9BcW1NAPQ6aiweSAM2hNEuYhVG99Q",
  "key1": "mcsYVmenZUGdhwg1H8PTjEYq3aEPTVDuGquMRa2jUKFdvvUcdprDXbbCZqHFYFsKwXsXr34AKUQUrAAPhyftDXr",
  "key2": "53u5Hv2tWVW7tbzY6mAPaHhVqqzVeL2wM4T3utNKy3W7aTL3bcUqYy6oYrgwxHYfWKKnQVXLYvuhMNopa9SjXtPg",
  "key3": "2zV2DRHBQtF4h4EWRCND6kau9e9xKRLan7PTQtvLMEpW8d86PjStQr5SJzKLJzY2QhW4Wk7hJn8Yjsf6A1GZYhLH",
  "key4": "4VMtj2xyToGsycTphUiPJCECai8g5cd8zJaiwrhUQZnbgp71kobcehKakwwLi1UFjpMp9bMhuMyaaqJJLqw2T6su",
  "key5": "5Nfx8G7PSe2esPR63A6xLqUyKkdrMVCYiHUB2k6kp5EhVUh6jkHNuR7rB6L98ixvJDJPq5BJTFdX5pStRZKUSPXT",
  "key6": "4ZTJ55hmHdfkiLnsfnpWnFwpm5PYi8skd5wC9mFaDgWTeaoSERPu4UFhvB5WQG6gAopziCpjAsW8mn83fn7EAQBP",
  "key7": "62MGfdpPTdsomsiifdc3qyzBWuFrH7sTPmPvVBv8sARLcHEyz4LRtUmCmcy4rWbCvqmcLctistM9PCxZFFBtd4zT",
  "key8": "4TN3CJeCShQahhJvQjLJj7To7sghh69qyM9aCGdNc7t2XKPoJFdQYHWxWs5qDBSLwgCW1dnHVcsnYiB1NRMVwx8g",
  "key9": "5Q1RBiQpQ83krrGRTTqkaw6b27SHuriVhtqcz1FRcRZHoTL1qLosYUYHeqVhJqL8pWQj15iR9YAqYEw2QxCSVBRQ",
  "key10": "3fF6owFHxAmitU19YNoJPBtq9odLyH5fAtinyVYJeDVYuzgsdrJ3jdARYkiSg4wxMAAqTGVZ2VHXCGPtDiLu2zJx",
  "key11": "4WLtFtxo1dc4YGxYzsC8hoEkfs6fPuryzUm6rSEjFrNhEyz3A95DGwgR7oH62TLtbJTLQBVFixugvmJBHyKt1ypP",
  "key12": "4VuTS5fJEJzy9fCJbMLJ9YothNn9BzUZ58LavhgwSGWeQ8p7dC8BqVeyWkEJijpfWgJXTyQDUVQkomcA3EPXTkvV",
  "key13": "3LPqq4qT75QcEhk8EMwhVFoDwYQaSapZ915Ap4GT1oeVMqq3bYg2sVbeiM4B7i7qZNvGxJ1QqkVxFj7RuNaXicbh",
  "key14": "4MX5PwVPrkkdd9Tm6WdcKKXRU2o3UZ1NZ3yGLZNEe5SeGEg6yymiEcXHfBYJZWQZjDrER7xw6i2UpUkDTHQujqbu",
  "key15": "5EvgL4cWTLxWttYWnZRZtxgdUC87LgkzcbwvQYtPEgjjMrkMeTzDSugQJekGGZdJxDXg7xo9kPFoswCYK7qJ7Gax",
  "key16": "3RDmKs4MRs1UfhjS4WnS9e91kQ6bw4sLtPaCwDFa2M419b9DF4eNa6peg3fz7DiH1WxPXipyz975pzaHm59giz3z",
  "key17": "yZvy7iTQjNgrU5zsejJvs8Pqx6U8Yuv3Dbc995EF3cWN5RkGu12bJNwadfeB9g1NRnXkJGqeD7dqevZ9oTkXk9X",
  "key18": "5hMo7QGpq4X8fH6QozvA2vxRhs3hAZFK1xGbSGedkQcXM9kW2gVhaHfR3re7ZmcSVixcVbPcP9ra89SMMSCHh3tD",
  "key19": "265o24QE9YYQ3JZXQaW4NrUEBHjDLdQaXNupTeUcJV9sbSqyJ8L4uYRXWBXhoJrYjuqUtwZbso14kepUUuoGE4pG",
  "key20": "2c4ABpkMFeUvxy1SpJBuLr94mBRszRs6BVG1oRadCznfGxUjsenGWSHP8NneqASvqJ5C1mmmDzRaXNsTi7XfAULm",
  "key21": "2zt5EiCN2CwzrnTXotr7fhKKuVYRWC21yDeipape6CoLjkZQQQv9XW6KSniySXMN9zQ89DnCZ1jLQddMZMViEGJa",
  "key22": "3Z6CnCZjeVezQgCQ57c69jA8vZGbCY4AjPZP3n1n9mKB5oHwXKF2iTBo8vaRdU4nwhDZ87F2EA4SPs1VjnWQHjAL",
  "key23": "5BLHpkVXC7NJ5wE1L5aJgskoyJiPWPrqbw773TUaYUj4c3rAdgt4UK6QHdhBNzoa4FWmPaKHhKyy7ZrJB6uLHSZB",
  "key24": "5jcTn25kx2cEgK5D3tEjFSvhfhA6X1oZ4C5qsmxv7tGh2BL3JRdMAq9Pboa6vb3xpRe83etVEq37zdGkM2ftH3jw",
  "key25": "2jhp8jLCQs16epFvyebiEZ81Pvcb5Tss3NvUoigkR3Cs7hmaL4WfN1WsWxmE9Ev9cBjXMRMty8Zm2EAYiHuXFWTW",
  "key26": "H2yaiP4v2WK1qMcSEteGgZ3EnzjoBYNGmN9x8miCppXbBHnQEtgtQnG9pF9e7rkA2AD4h6nH2LjE3HpUp6sakNn",
  "key27": "ExgQbjaZb3uWnfQUvEdF8MYfGGuhc2WjT8GsuB5hVvtWjP64Sa1DVsgtAvXuWmdXZyTANXcTegrHkLnLUeeKWwM",
  "key28": "2RuuiLa2ZWkMYPK18ibY2U8pUJm6tSss99sxbum3iMuDMU6NwqiGDBxR2wh2yVaadfVuCffXQu79BarsMz5MV21g",
  "key29": "5Fju7G17TGKhxK5FkFFJKWWVdZJUuNHjRTWDofS2WP9yGy3EZD2YVqMojMs7pa1MS78XJ4EgofhjzjQuwMikMPfk",
  "key30": "5htqTQEpKSpCbd9HPVrYrotYN319zGpYE5HNhjkAhzdsMNZxxHMjBZmB8qDL8oWxERHbwsE98LqWYjiCeFQFvnAj",
  "key31": "5XrZrBVmHPYuxZkM3Mwxwxd2xpAvi3YmES8uNsAvy8kpFxdTR384Kvzt7yh5Mf8JmQxb55facEo7423UKWJu3s41",
  "key32": "4iAZc1HuGQ3KpBJe95hpYeoeMLi8dsMJ68DguCTYDsUJ6XioKQvigmhMqhaUxj5hyy2YkgyC9qAATB8GJGv51Jpm",
  "key33": "5WgZHgQcoznJswFRVSiZnRq4a3zizbW7ayPtxWthR2KAH7PrzJnGLwJSq3ymGTKppQpYYVjCv9qfBtrRHtbkvJd6",
  "key34": "2GMwHjKKJxmWjVUGJB5tRv659HroSNpvaSXbDZpERuxa7GMF3uPKbbZJRDXvjjwsunic8TTAFmY7X8xkpi2MDNPx",
  "key35": "3qXVCEQgVZqJVniLN7Sf28JfqvMzX3fkuTh11f6Qmkwjk9hc8qDcxekXFtWijV75gMB6v9ph9AcVw9MiHraLuSYJ",
  "key36": "61YRyjnXRkoXoZmeGhAvcCxvMgzecJtf66nemiFzHEeDQdCpJ8EuwtSZb3zjcyU9Xmo9g9L3n8x81rvziXtCtRV6",
  "key37": "56kUnUFY6fU9B3MrUL35rEnEioTWyFsBXRrnxnG1T4HsXP4n85HoNERE99DP2893LSZyAmE9yQbnoZaj58gzS3KX",
  "key38": "Fhy9XBGyQms8yoip3AqMqTLAV2UuD8yqJ4JxwJ5P1yWGMsezEHj4LPwho7Xppt7UxdRUDMaAohXVkzPKyp9Jijm",
  "key39": "3BsVAvcwE9aUSVzKKXQEcr1cTr64wR7Qukh1dRHFXvGw5VNLwTKVANKwWCpi5g8vA2avkq3hNDFFGhXExBZDnYus",
  "key40": "3jYGLnk6eey1gFcyneDKnSSQN25v8MoPhRVnTFpZaB1NKN4p7xx1FaXWpUvDSo3kPJQC1z2E7eEg6S46oshuL3Rp"
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
