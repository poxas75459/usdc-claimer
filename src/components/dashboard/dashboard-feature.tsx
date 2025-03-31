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
    "3mn12FBbEnChYsfy8xAPe55DAG4p6PtrXhA6WeGw2b5W3Vt4G17j2rFhjRomnDfNyhxPvgtyeMJKd5o8zn6QdWAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4422r1jRJzfV3DkeyKKc9w2rQds9YqyGqWRRQgNjbNbf9JaZE9yiXgRwkSPprmf2cXjGdvsYMpjWXWLcyA4pgjat",
  "key1": "NhR4woKGALXxsXsMxZiKAGeGrs2PsS89rDq7oWY7LX3bxmXUTr9g6EBZ9rgLC3CWWHSJYFurRjMiUMvjwqt89HF",
  "key2": "3Q7ZM11JCorAYMtcbBGuRRQPWgYxiXPzeUViSR1qRsuqHzJtEXURGJ6b1biyPsreB9fEWkPPKaVFWLdhtRS4htMy",
  "key3": "4oZCjutGduAgW9mFH55dTqVxxN4PAfLo3PTSW8CGaH4F86v8ZKujj1j2GxAxwVQvTaraMmRnosb3M6H1o6jdqYw4",
  "key4": "3Xg54RWyUp9ByVmruj5X6ua86Z2yz34L7q4Y2uzwXiDe9wCHjFZ6SXynNVEihcA8EG4by5JTbz9rfAu1YPFnivbv",
  "key5": "3GC6X1T7phWZSaWq4EbnV6WunEqHu4wvn6zBAAb66vVsA8yBqXV6XohicHZTEj7bJt1GnjyKDqM8yvSAFJu7SBCX",
  "key6": "3HqiD3MGShjLeMMwrEvs2ATkLK1vCGri7gtpvRStAgbwFJqiuNAeKokEf6EeKxYPsKd8UpMjpnGzMUCJ8H3oyfWv",
  "key7": "62TzZfN2Hph5M76bs5SaTPcefbN5snXYVsBSJrHZk766rrAW8wWJhiq8kxdoqZCHatubHtKbAwUQj4K65f4QsYzj",
  "key8": "5ixLW9NzzhPn9TMU3JeWwNbWpTvS8X6TnkFnwfW3H8aEAoRicP5CQQieqK4hDhVMJhSDwnkLnvAaXE15KAxXZYDn",
  "key9": "23ab4SqZC4GEDpN2BuKRvAvKqSNngfRc33FLgti9nfAFWGKGjghCG246Dnz8FqBRbQqapBeepZt6RVyCniGXs1o2",
  "key10": "32z6cA9qdpueYS9vV7TeoBJFVCs5cmpJn3kWquemV7VFsT4MujDYk1cBbbCH6V7uocXareRgEaEFKZzfa2oTWn8z",
  "key11": "3coAdgQfnXZU5XodjxYyhSy1qvNPWh1mxJMnBtzSNMPaVdCcVn9dm4XSgmyN7Rd2ATz6bGPTYX9ZkAChArMAtKDZ",
  "key12": "2njB34MaMzpieaMmbWvkHQ2ZsL2wJ4NSwfC9giykzriMitazYRdcNrBHMJj6uV7iGTXRsuZvzbGoK8qKmaJusVxw",
  "key13": "3mpeo5yWozGUevweMsHNEeiSyR9hULL4CbgnAqCYroGtPjzLUh3jrTdzLRb6Bx2nCegeqP4ErzoboCoKVNYSZGut",
  "key14": "2RrZLxEFg43aDFh3292r1bcutTWUt1X2iRdCXUCu3UM1WwUcb6oKp3CPH6S65eDRUWygfwdoxe4EDm9LwQBqFV5h",
  "key15": "4tPsWFd351jjEJfTz2xpRU8bXYyadMJvUWxjSfSxkMPRpUXwfff7mEHrLrNiFTEzwBKxb7jVzTFjtdEE9fSDXfEr",
  "key16": "3sF3zfB2HnDnVwQPYvHUJjmCDLo7U3vSwfKQTXQWB4keuAib1sKPggy7qsuHgvpfui58tWMxVgwMurX8jGYUUMM2",
  "key17": "aPgXDATYs1R2DKdd1zhxZ1DqxRm4kQZAA7toAPcxTGnXfDhLWewCXNSZ1H5y8Rv6hv6U1f8BG4CkegUeD3e9vaN",
  "key18": "4p9jYYrvGNE5RnVoFuEaz4LW71YTwdp8gXRde8UYxpLtWJiE2XSFN6H1MQTYe27MkmxfRHnxAtUkUmzRfF2w5fVL",
  "key19": "3tAa4vY8XRrxyxDB2MAUSe3mXwUoapxZyyzuEwixSXwRkWgs4sjKvCgmxN932jZrcoHyEBDBUkfde9u5i3Kt7oth",
  "key20": "38HdZnmneybmifoQL5v6Hcd2mBipTBB94xYYGiPLs7u61JvMojTG5MPzNugkCRPfANcmnMEt3j3gK5HuSirurqfw",
  "key21": "4qqfH55caT56MVNUg9knR36saTqG4mdxaF9z4VuSRoG9DJ34o6kfQU78wSew4ZtRyxpivvff7nfRnrtBJjaraC1r",
  "key22": "45JoK59SXpJki6RDgwp7sBYCcjyu1qnMJmPFUXkwC4HqBbApYfBZc35HVfRzDqX62k9uzMXSb3dL3BB2CvgdjboY",
  "key23": "3wLCvxewfJAcdphDQ8dbTjUmjNwM6fj2956T7dJEXASFMZkiawaospHSNX8QrzUev6rZEMHPVcceJrKGMhEZeAmZ",
  "key24": "UPFzrKBDTDRqh2adn65DzxXjUeBaS5rtonNbFfqkmeCPZNQ89e4fTWKEfSBDuZVDET6uYBx31bZagXCd1BffcZo",
  "key25": "2vZC1cZe2MhC6VidJJowUJNf8dxAxtomLoJL5dD6UoKrAKpTRArQ1PtSYU3RCrjDB7i4FwAVZqT45SUhnuduSheK",
  "key26": "4SGXVmuErZyn8EVcFHgB4YUnikhV79FVn69tkNpSoW66gCoZPb733F5UmwyhjRaqpkywL5PxmtAGyQK79mvZ76d5",
  "key27": "4prWDNDXF8kCkjB6caesoomKagUTMDd5DhwUebAMiuckQn75Emrp8yt5wNiECZawWMC5bHycMFX1FzpxEa8T1Lhw",
  "key28": "4aLNLxpeeXWbXsuHkAc4FkCqTQ4YhzLAL2z2pbJiAJmRAvmAq7X2EDZWUbJx8vLo5fgSsbTyfkBeAwcAJV6Nn2d3",
  "key29": "66qL5hJWeiF1bhHSEHAgpSAd9K66gFA9okjkKWf9wJNbH4jywtCD25vyvqSU31bBJqiRmtXap1KM91z4wHCAwvx2",
  "key30": "4RxFS2fnHu648xDDPJsV6MeyZ9gzZnxzbVDZ1ixd6JHwKpUhFKFhMzqLKhGQUcwRPvx8bE9kARvUNtNiJ62tdShh",
  "key31": "KVJmeq4N4jdB2LebkzLMSetzkofWAjtWfpjnKdSfwXSGrnway4pibX1KJ7K6QS6f18wQnzUmmy7exxikm1WDA5q",
  "key32": "QJtu1B3GfbUCQEeKSiJKQ7jZq7fCH5nF3XmsVqfpvVDq8vCuKUKCkPMwbdXuRZp7w4mN743bYMY6omWuDYdjsFT",
  "key33": "3cZNeBKQBuhGJSjifSFoVJGG6i8ckocjQ58qHU7rSAL7rTNeKsQB13X59bNNCm8Qqk9DmdCQXGY56nLJGBoTPDns",
  "key34": "4FXnuN4TMLVMVsPEznGw8KUE1nuiFcJGcEo8YgiRBGr6xjHEurkZKDknCskH8xh6NUQ1XA5meE3Qvc9dVSQcUNJK",
  "key35": "5Motjd3ZSN8ew8b6bviAYdiK1cKMFCxu8gsWigTdh8i711T3yo2bdp4Z6BK29nYM1cfT2LVi6hReG2wMXLh8MYz7",
  "key36": "25iwJbES59Sc82Z3tZW9sPxhTw65LVduYefL3faHQUCWaSpoZDSU1TRyWQ5b8gzpRbkDQ5exzWV4HRfiQAwqP2o2"
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
