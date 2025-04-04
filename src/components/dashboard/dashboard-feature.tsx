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
    "5KkNfB6n5vsphJQsV5Dk9hqauWQXGVkj1khfGQbSfjEBJ3fbUeVL52eJTnyiV1h1mdJXE322LMJPpSLb29x3wsT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HySHsuS3JA9J6o2xuV7J5ewVqSVMFas8ZQwG44yzfSCkSZHigijxudkoLeCeWmKvFqyMLMRc4r72YW5cbM2RxrE",
  "key1": "5ugkEZb3t1vwCoXuip6bYvqz46yixvYD5Vs4AQCpY4o6JTNPjumNBDTKjHbRTq6RQqCvoTDifuDPTs9v4Ymxaah8",
  "key2": "5mZoCRDAjzFBR7MnUES8rHRR5cqRteYRS4iZqMh5ZEo3cAdA6cGRWGWZEuTPDcRC77vX4WwZpJZVYH8gfV9GyqYA",
  "key3": "trBWticTpVmDnHX5AQ7poujsVrn55Eo6LU1pZ1a7EHYQYx7GZS9qecrDmfDNmikcd3ttyvMDSegbdYSFYGNAfp9",
  "key4": "4JzCHGxuB6cDeG1e5sp7689q3QQGhJzAFquBPcL7JnDgkZVzU6EQycqsfhohLPTCLgnhmpwABa9QuM2xDNQfLCMy",
  "key5": "8ZNMscMHDmDn8wKu4zr7hmtdzh425LU36JKHxR4bR7ecHKh2T449nAdV9p1N9MNfSn3KjSTvYCBDFVk6Gkix2YB",
  "key6": "33hZjjNNF4Si4hqWStTjok9t6bSedavZhdUphGmgg8aLHXBUXfbqCwQbZjZcKDrjzyQfjfL5zgkByVccHA7rur4P",
  "key7": "4Px75vKKwU6Q129irK8BgJ6GRfCCD1FSdingcY8TsFJ7XeAaaQPLYHBYteGqV7sTzdmDeWs4oAU5K9WmLVTAXDZ9",
  "key8": "3TbZWSaGbtDj8TPwTtAwsWUmFAPQErpUCez7yohXDphWLcs7MsJVxAjzo2nEbTeH9Ufap7pKiYUBdwmaP99gJmmp",
  "key9": "5jYrvydN2tBDdKQGRP9dLqZ8gQK2Yt5YXqhUiizQgEBmS7QkqsVei3zc4jU49uweb9VEZoZQdzXZgcZdjUcn6Qiq",
  "key10": "5d6x1oBvQaeWSQGZ5GKK2JSPgknmy1xC7qW6kTKqvXd6CFNFFPeSz9mxuKY7Q9asxhVvtJVVyGPc8w3jko1C2e13",
  "key11": "566ihMhoNXEDcjrBEKgCXgsZXLEd9kXayMAdWT59LeFwxetQpaA19GszYdfFmUF1qDRzUhpRUNEuhDdKTyNgyQ3e",
  "key12": "42eEo5D77nPJgSLkNSrfxKn24eAgjwbgAMhCCyyThPdTnke7gAYr7yhttih3TFnsBwDbMu1oXVYE8Mv7s9EV6UzW",
  "key13": "ja5AMWKjudBixgTQXFtPbUnsXa65MXKo4on68jbankp71BGawL6W9LEb87Xj4jpiprwyCos4HXoumFadKqRT8HL",
  "key14": "3qX1tGZUYYwrYdfcLHFjy6fG1DeqqHJuFCo467cNVhByQRZYNuWNE7R7NBSMWyAEdTVHTcCwPNEdMW37DLoWQaQu",
  "key15": "5hMJ9fdzgtW4XU49tQfMFMVYKUWACVX6dknJ4svEPvx6Y5Gv5y6utevYkfSXao3g5v8u81XCUz1Y3J6CW4jpGG7n",
  "key16": "4RD1FRS6TjiQTD9nY3cKPJKBuj9p9kdjYnPNVJEUosnfXVm2PhKgzJAZpijcNvxoJEdx6X9wSDmB5ZSYgY1Yx3we",
  "key17": "4fg4JPNtCm6BQxB8L4cZkNnqdF3zfhj5jPXpYsqRJ5k5g47J7hTnrdDG7AEs2tGcRHBEMtEpasvQqM6oDBK5XuGA",
  "key18": "Ech95TfqorPYBi4WhJj9f8pQf9SRVSNzHcviXU83XsPLBjw3xQY1bhVJWLpkNZf7GT3zVzqi6k8oUKzuX4sNVZ7",
  "key19": "5H9e2DQwPhgEajAg8dpWbxY7eUby7pH7Nt1t3q7As36xee5FjfUgF9CgNJFEwGxfLHw1qVvdFWkyVMzYMauWPBCQ",
  "key20": "22DgQJdpqMLqfKaYhyuqByE6ALQ9PS8FWPPE4DDwRRGi8wGmtDCrBcG4rabcwYHjHEA46o1gq7rFR282N5hYHR4c",
  "key21": "2XSQ6K4UZTV2jPF3acSkfrwbMRwgpexk9WN42mFj66MBWGreT7pBCKRqcSETjfHHuawVzTyUKyqUW4fi8LZz6HLs",
  "key22": "2oXPsNVmm85wcsguVFXZo9JadaPj7dZHAP4MZBe679o3RCikp725XPjpJMJxjA3iLfN4zsqc6hFChMT8KUTh1wbN",
  "key23": "5SoynL1Dn951cpBFo7uNMpVEpMXBmpbyYFbgY9MZuBbhMvRwG9fhiHoTmd3RdNhULt33dLkWDLAabwU6YrTCohxo",
  "key24": "2EZB3Gpvp753zDF94ZWXBFKHX9TmA5dVpscMeQgyg3qgZV1ppNERB5PTE4pKA3s6gj3KumgeTdk6vauCwhfe6gZM",
  "key25": "2wAs7UARj59oDhCUMNnzkYzTgzXdZ19n3nkNJHRSxMsHKpmSzUQcwHTE3T8gNkFvXiH1FMYmQTcGzVJLG1n9obmq",
  "key26": "29np5grrRVy76L18ZQqKitHoTScTLt9k5LWcDP7L4ZULs4vAwphprQFPRRmtfGfPHRswMdaGDxqSMvipQwjX4Bm3",
  "key27": "64gZTsBeoz8WMVpbLdPDiLShjTr1guNoWFphD3fZWARZZDn3ymVVyoBSbDzDNQuaiQeANYvFGsh2Q7JavbtGZ9jQ",
  "key28": "3JHHtc2pDGA3JFuowa2zNsn8E5rwTahPBnFwCddEkosSfYQfBPNTZ3XJTVQgkfhQaP5LmWGDr82XyoZKkhnwyT27",
  "key29": "4n248HXSzVwkYMWWqGFeWwgaSVw3YUgaDcNRAaghKshG5ckcLuruh81tUZBBcevEEsNVfYc46bJokgaxM243XZeB",
  "key30": "65RmYgs9sEqpbsno9xKpqqLiDbdr8QpNeGBx3tXtVhxCrPkYadMUcNF4pTczcdRrxfmLqPRkbBHWgM9cF2xUez6z",
  "key31": "RYwChMh6ke43QAJ9sHF8njZCLKCjYDFBkygFEGRDx7Rjmjgt6Z1fVzvcHaJ1KSccVNzKfXSsC23ff96iJTRE4jg",
  "key32": "65HGtXfXJ7Qf7cvQ51A9M7GeuCQihq8eMZaB6rY2goWXjhD4oaT94SPcwmZU19719PA6kCWN8n4rnEKCyyyptCoU",
  "key33": "2WzJNFanewhawgGAACe4UkZx98iYA8WURUoREFGec2HULQL8Ck2Maewqn1K17EHRcijYL4jrUZ45bi7FBeHkJ2Aw",
  "key34": "4viM3dzSNw1FL3zztYf8oQXWGgDK2nSMtUQvHxjVUh8Fa6VyCMHWGQPexWTCZXQLgpruVha2me9Wd4izhjSywCDR",
  "key35": "n7Jpnf4gDL7dd9zrB2Myb44mJFaEtfraM5UdWqpVefeKbV1vFDmiSpJ1ptiZorNZtA6bmNYTiT6czWpfeUqv9B6",
  "key36": "3iaRmudNZeVcusU6DbWh5qj8EnxpwQ1Nwp7GeaX7MPC8FcAD7bzcFq65J1HXygXUazJq51k5KF5nrVAKajQZAQer",
  "key37": "2XnKrxEZxGwbPVKwrkz848CCTkeuHdn3zZPcQfYjAojCi2rNzuKJyHFhghwKMKJyNrTthDhjnCL7Nj13BcK6CMLC",
  "key38": "3EQX1gzLTW8hi1RSuH1pN9q2w2uAMkCAC6NfD2N6LYRboTswG1Ga1WSWToDzh9LwDdK2hcWTAC16zE9ahL7Qg3y3",
  "key39": "49ey8tQzDyjacM7aCrRPLjLs9iCJHuqQNeNh4JUPYunFRrAHsCXC2NTHfup8oPTxeRG3jfVDKtFxrN9uAS3VmnD1",
  "key40": "SfvHmEUm7Gek8nMboTr2gGY1Q8JvTLwLKBW2sG5bgkCP7fwTBbM6cJxxiQjm4t8A1sGofriu1Bc1jXF9wy9hBVk",
  "key41": "4kXDrpS9DCiauPXhKoE1SDKtPJsDJkKiGgHbJ2ctZewuigDL6hhUfqCJcZnZMQjGnJNKkWx9FvcPn9h5itCxJPBy",
  "key42": "Wj6ZYhrs4RJoJEDKV6FHqPYkFvZKfXqG5P7DyTWjrds2gvkJxii3CWugwqQyJbdbSRAFzg4iLYaZ3Ddtn6w9Kus",
  "key43": "31NMyJB7s2ebBHZE1W1T3haFeSEBJwwkH5APx51DfKov7tMEF2cb6YSAEnyevNXdYaPyepR6ncc7aYwzyziAc9Jz",
  "key44": "23FZtdYbdku5czga3wjxGUWU9PhHrHcR4o4zHs75jgt6bEzDCajdUjzarMR257CeBaJytkGz1b24N3soSpS2StAt",
  "key45": "5169K27RcJn9XynpUwcK2WbFCjyvPmECZXKokB5EYrYgj2kRxTAyv9WeWTeYV44weAWquyRTfbE4r1dbFWNidKKd",
  "key46": "5y7WkMkbddvpvqAT3F1McXHsTvgRtbMUjJYK9EgdfPR17bu4TXZP9F9jenHXWS8i967JQhRoP8fvQeRLb6MNiLwF",
  "key47": "5VHcDqpYaK3Q6m18pTWRuLpG82pdqpZxhS8fUHeDNVNE14S71LbnmF2XXfMiAMSeKoJ2RifvJs9Bz3XW3XsRxYSs"
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
