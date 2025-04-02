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
    "4ZQeBghnC6oNrwKHRD7sFX69RbacUKpNjYuDo8tArNKPbqyWpYJ47Zc95KLEuohzTwHrQWXUPYSnhPBjCvnZWVBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7NPdyQPw8HZMrYDzqs3gSEMCCxFC7R6H2vNtoJHT8hGEZZx3pdfyubAVeuTFkasmD5gF2yFVXcnYECuMZ5PCz1",
  "key1": "4g5zaXf8v8iRNUqmB4fLH2JbvRgFsfVoj7Jeg7uQqhb4qgxUNagi6AY8hNSGzu8najDhrF9UDaoLTzCG2ksU3YWz",
  "key2": "VAFYenGibNxvtjrNptfpaTY8M9fwH8x4Wq8MC9QH5nwfJ8FwPTFSp9Q7mM6wsZKq2gAxU3mhgvJ1yC59Xvs2Jt7",
  "key3": "S92YB9orx8TXsPsLwqkxK3CwFgUPJrjjT6SEDWHSdLcD6P9UdgJs3ERcX3QYkyUWi5BoVeipNbMGD4S1Gmi2qzh",
  "key4": "2So8rSoB7kHZ9dJdJ5GNDqAmNAUjJ97wn4T1f8scwFjMw3JYHWF2KdegP7iu7GxDaG6FNkP4g9GoWhqeSCcFyFky",
  "key5": "21HWWMimBudujoEKLcJpQRZTygJJaCpq7zqSvYa96Bmq9Jsb48nXRs6oLJVacY2CCmjNoVi7Jw8MCRNJNFx58Uuz",
  "key6": "4VrPEzQS8nuqNS6ko8QqMM8wE87EeYFYwDieCMBdgkgfCCK2mY7nkA3nQ1B1UVA8Hz7pghGFcnxk4DJ5aFqo59Ge",
  "key7": "2U1NAZahzcnPdqCL3HgFxzFVuqk4Wjr8LPoXU5xB72BbiimeekgEdJxicEz5QEyAdHskBdbuRNXmKJVJdosb2SuK",
  "key8": "yu9HXQ8Z8S9cgJiKe92cb1WNsdfhDmnjEciBnBZNJckHCYRuAiUSCQYJbfExKNGKAr73ocNRh46jKGZgN29DYrW",
  "key9": "56UDXjagKAkUup8GqvcSEftAMzmEN5KjYwMEGs5ceJnvC5rUmiAbuZPzP2qZCNXVUjhvhtFL2kkSm8uAVRuWFeC",
  "key10": "2VgeFZsEHuQ9scbh5KQi4KdDKJDjmqMGVMxbH7iHkPqUn3UEvCo1jztdv2US7RTKHpHbcf2NB9PPLKDUXpq4Jka9",
  "key11": "2aYtDu2kFRjEhnX15Q2RKFPykkPHuzmh43ypS6722RSK3iu1GF4Ea8XpnArMT83aa8ujJVMJbrGpy1gX3w5mP6T7",
  "key12": "4cYVdhkU3BY86txvJ1ZTuNBATXPpgm3ikPeXm5CvJre7eBfo2GkHqtXrEbGiYy1odZk2goSdqPGCEYjSu7dKP6wY",
  "key13": "XgvmjWLUq8hfM3LWib1fTSiWstsnPEXoD58B22qUm6i18ANFZRtEFUZZBzLjgBJbnd5HxeEk95P9ZA9yLeFrj6h",
  "key14": "3yzrNfSDhzkajnf169V5mSZURSVW63zjWiE7srU8Fh7Y9MYKzLKKXZUEjYeoL35RkVYGQnCsE6zufXptWgJAebR",
  "key15": "4fRAPDPTD8gSjnxa1EpmYZJ2vdHihk6Cdb75fALZHJpsUqEyX4rWc1riLj3fjhYKDNEHsXhdXx2ZZ3L3GgYaSU2P",
  "key16": "5pX2V2fSqY34KPgNigQ6KLGk3U7iCZ5T5UkaAnDUj22zkjbYg62DjGjYhDEZxLk1qY8bmc2PPNiyNENBvdeD6ZC2",
  "key17": "5vGQhbhNmXkMtnV6gA8tV78iB5hiE1mqsDQhRTdpXdyUa1w4F3zirG63DNj5KxuJYjdpuBcJoLpV9JDSuUNFWkZr",
  "key18": "3Ruf5iFASuj2B1TvvD13tJ1xRvCjHpnFLsr78VipeohgU6JZFRCBBK5mhi1enn7BVWtQ4saMbkgaMfWspRhdKuS2",
  "key19": "HhUbPBZXosW55Q6gW7jqw58NNitNkVYZC2b8SVuRY9aiiG5qDhxkBnW2Qa96Wim8MJzTeFGQEuhj9MNkTNEVyKK",
  "key20": "2tT74eSzcSnimaienZCzDQmVpKyJwTm6ZtQvuy3nJFGiWMnWqY8v1tW2Vhcc1hPWD9CRUdGdvS5DmUjuojgcQLeB",
  "key21": "4itTAtYdHBnVqXzrxqChKF7ckcAaZ3aovo194Pj2LdHBTRamUxBjWqdHsLGXchEJaB1Rxf71G8xKibKNj1qMyTgj",
  "key22": "3yC8AbhKAib4RRkgCuBdsqvrAWnFFPLUC5uZoFieRRaPRfPVMTrQWeRD6shkzpdFgBsBkLioeHDdKeVA4GWaVtZ5",
  "key23": "3eufveepeod3kpjb2yD3mkq591EJ8xdxRi4WxhoPn8ywP8TjwtCkCEMu8jKHuTjvKpQtP5p7YDmgWaZMY13yRg84",
  "key24": "3Xmzc4UcF6qpeBzr98ThQpZ3FN7w8PzCgDPdnMibZFen5EnNQouQcMbap57iNWod6LMunVisKEVxVuqsvmpP3SE5",
  "key25": "dobQVNLjeCNfuQDR3S461VUmge5shxqwMCaTCzGAJWZ3dY8vYfNnENtV5xKk8nRSUebBNaQ6DSrbbuWyaQJd94V",
  "key26": "5oNbHg6CRKPFh3pqVmGPn4MaMc44Yag5Nv9VRKxz3i8T2zZSyJgPpeytFYxvrvynS1stoRtK6QrCKp1reXvzrVK",
  "key27": "2ey3P2mfAyYHBLiu4Co1ZinsdHAAWmVP2XX9n5PcZ57jJEZuZQqZLW772b8cL4BiF5BmAyqb2EQn34eRL6yfnbqe",
  "key28": "5gY1dAp78aAMxfUCQpnWg2UXrZ3JWX6M4YK7JPAeZYm1m7MPdPRLKevkJHRWVCJXdbBge5apEks92fLRKNbbY9DX",
  "key29": "4X6eNnp5RZ2xyRLai5Cdr4UvDG8ktMSSuQDrDYDzrMAw1XMD6c6WTu22b8TaiEjScgRnXXJLPpnbU2u8HSJfYwnk",
  "key30": "t2BSHcHQSHNQMfhhqSU5a2dfRGiQyKpXguJnbauLEWuUtb9MkpFzmJCBjy996f8ozJCg65HFkQW5ALETBWnub9d",
  "key31": "3ypiQ67HMPDLm4N2usjTCLnBsFKf7Zs5YCDXRnbCErZysrwuYKTm2BSsc86QQzejLAJbtbAbDHhWGyn7wvvFhiMG",
  "key32": "3x3dQCoTy84SJNX5fGHFKEyBHUxN2EzeiqQJTVujNR4GK2WG4WeiwEsQ7kD2HfVNzitPqyD3PPEzT982xsia9gKW",
  "key33": "2LXbLRGhNCadkoc9jngdzYQZJTyU24E5ZE5XVTepR5gCivTomJS7XCBFjmpGCs9GogMcSvUgN2RniHUGRKjpCGb2",
  "key34": "33fCzh7tVABKQPnEq4KRZX2cFj2j7L99iBZ32TnKztLPRUH48FzkomwtH6GH12jTRuj1gx4nDGaS9BBuRn8AZuUF",
  "key35": "5ee4u6sVJYdv6DBA91fZSf2KEsDhEE1VSsJeyUX8udxvrSYV8oM64M1FVBauYD4KQ3mcBjNcscAxaK82LWquw8Z5",
  "key36": "3V48so66rC8PDkXnxnge5NpKExsWNZLbLDZaTps4zr844siC6qtyctEcdieBbXf1shqaE1r9f73YsocSgQAEPnQ3",
  "key37": "3CQTem4ZGEbHekqbT88Zh5JTmNC6dWVfpf3PiuoPcC9XUH1iFTkUdmTrdfRkhqAVUm4mqSUb9rM1TWGSxLBD6Kzo",
  "key38": "HvWGofRyWNod41aLd45tiqD6prCtNrPDgfsphTapc55SFFL4rZTV4yDPVQAnify9somNbznKc7WShKDTSPHZ8kU",
  "key39": "ysvfEiQt1NkgRC1e9ChN4XfJNK5GqnsMhmzwUEADt3XSDWFLNka8Lu6tBuHDbqhrKjDrZp9tnB6VFXuGccQF9Ua",
  "key40": "5gwft62xrX4EYHSPEdvZvLjZcDXJnfyR4LXhVcPmvmg1XVrTKAJbKG4UDVSG7JMba5HhmDVebr6yE5U62D46QkPj",
  "key41": "2KVfixkc3RHk57bcjntqCtHQmKWD588ajEYK9YLEw8giM2hygh5oWBZb9gJPdEjGf2KNA5iARdsCcN9KjSuURHhW",
  "key42": "5A2P9bHtrktzgCingTCDiL6aiZUgBUvwnTxoej44c7DQZHU2mEbhss5WrJiyx627tdeizUftg7g3J9RdjAayaKqZ",
  "key43": "4ponw8WpWWJw8A5jmfgPqRniTxvodV8Cz7pX32zabsVmcLvnvuVJcFyVGuudkCqbgQx9NACin6ewELAF5kkJdi5r",
  "key44": "cHDd1n8zWLorAfjKzHzr6pSvDHDfRgEhZqpCha4Y8EqamqaJohb3S5tbWpf53sGoJ2XYfoXRu2ofinquJWbC3Sp"
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
