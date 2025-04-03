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
    "3HYxfW1YuTWwvSqwrxi5Kju2VveaoJGNtL4XEZ722GruyzFrhLNEaCEyJWCSdZP8icn5uvyx4qQPGU2hczGYBEwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8URZS9VPFfir55LFSdsBm5XE3xcgnMEZDEKQsp1qUWWt6p2di6DA5uZnVUY6mpU7LLL8yeG6vvEbCPbMheq86K",
  "key1": "6L6vRLMBkWmpi7u77hana5uc4YEnouHcmnvnYDnewSJHinwRcZpkhEynedx5MqVcc2i7ME5acdN8sKEDyQNRnWn",
  "key2": "2BTczdoFd76seEKVFv4jptctkUpdqUNthpGzqSg2X7uQmwdJhioS1ERRWYfShvnsGaXxU84KLof3v6b7y8turwKN",
  "key3": "5y9JD5fWF7dJAbW5CbdbKrKrgZCvZ81EGRJSsj4DRzMbtFA6AqEEyKmtkboAmv9CXKc7WbqQ2D5uDcENYWUD8jJ1",
  "key4": "3kRfWj6gMcZGQPMZdHsg4t7PZfP4dRaHU5c3itDnQQmrvK8rbieruMEENyFwpdi1msnDLran4SCWqG2mAmDwoVFL",
  "key5": "3BqQsWnjrKtUWPJwdSdCCV4xGWHcQVXY5SQqtNS5VdmSETZ7JCqb9WnBvLkRZnUSNNATpYsWTWGa9Y2Pitjne8pT",
  "key6": "3mcRejmW7XayybSaSKfivmPDdXAoJbbarArb9LXadTsmMzZjq27vVS6JiohsGaCw2qYa9J9USGEGTmzJcShFUjM7",
  "key7": "2KaUpc8B35uBnJJ5tKGKk2KHbJfiYsq5JfQmcZg3VrNbhpTZotfGGbPGsV6z5wPGdhevC2UAXe3SZb5DE6NDj2Tq",
  "key8": "5WiApr75u5wJ99JEyupci12TcrUvHYujxg5YFvQryyyqdaJ9q6CDZB298kbaATthvXw4Yr5oiyzsJ3NVr7LGcht1",
  "key9": "3HwzDwDt9Bmr4xGxJKrkhakX1MqRgTTRwHXeQESr7NFFx8eLmDiFZ52zu7ix9FC7e5JnemiGeMEy6Mf6BSj2SDfZ",
  "key10": "4XVVF4MeaZ3ftQBKV64QDeA7GPYrsGFu2CnKoqzMrhGQLghhzsnZzRHYgCYpxsFL22DkXV77xGzdDwAFHyntT7za",
  "key11": "5C8eA1eDPtxGnB5v7vbceWKo9ifEjceeJSbbmtu9yZjs8kcV3FEAghSMvvJXXGScDED3m1MYM9Q3XYk85ZFvMFmz",
  "key12": "3taTDMREEG3TbzuMCs49WLHM72J57JRotWyTfRc4hojA87hXbgKX9qrWJySaEcJTN89tDaU43ZWSatkRG1KANojn",
  "key13": "3fG9xDBhWzTF2RoTHJ38bMZiVfZJ9qt2Ca8PmRyTwjHGovTVi3Qz21ozvCFkjJn3vGcFgRipkCxtxPa3YkdvRvZZ",
  "key14": "5nFNm1TFKtXg8a1wkAZETH3F1j4usS9fGgxzk2GzqxtqbdUA3VW664ymCuACY4mNBmLPZnYe28NxwhRZoiaiYttz",
  "key15": "5YssknB1YGLjGej19wFzZCvzGnSiEjJ7zNvFkUmo3aqHyaJ1Wtrs11YP471Jt42iUHtmsBvJvUy4owtbmAGDbDoZ",
  "key16": "3AGmWbHqxZM7MkihYEAezcTaCrUzAhzntuvg7nQ8RyRzYGbScvnBQcnri8R5Th47F5a5TxpLSK1LT1FdDph66b8M",
  "key17": "2jMvchgyLQFc39pj5bqkBGYevGxT5duaHn6dXiKvDcTtde9yppnM12MLGiDpJ3DSnT3dXJYmDiyJYzqLasQezUy8",
  "key18": "2K2L2HpsRgTQcs8SA8VMHvdbGiybGadFTxxjgKU1JyfJ1KWiDpCvfMXsQjZHxfqZnzeoDdwaf95YQme2rbQsZKib",
  "key19": "4b8XJQbPxUxHtkCH1KjbkwJ8q6za4Qoi6YXznTrdZKZpFtFJL8mvWugh4vabDnWSTG86AJcLdWLNBDB6yXpVxEc5",
  "key20": "552eaDiPkEeEjGrG7hoizUfXEcNSQymvAjktgUjqFJrTLVAYFD9wJoKHv2sRzviXbqVPyqhY3s7or81FRhxVALcu",
  "key21": "41QwMTgmi9AVfB3H6WLfjURb5m3Vegz45s2Rgrz6bMF9tHtTP7B6eXvjnSEbxbqhTrk4Y1LwoPZcam9fHkHBx9zn",
  "key22": "ZsFKxnANtowrHC43ZRTPJki6RMHV7fkr4nafojGBULJNKWJCNta8sWyBPPoPdPYeCbFuCEFCdKKZFYG52Ne6Zqq",
  "key23": "5kgp1LpCZj5NQbkBHhDRgEGCf6qzUmvvNKrygkcrisfN39rivtkUVjTHCxgd84UD2hCKBaZVL37tTpYvZEdvTAWT",
  "key24": "xpqj3tGUoFaGZ38yXP376UhddeAVhfBk6ySyHja8jXf7Kgjf2pVSAeSz2ih532MskcESVGxaUXbesPZVETnY3MX",
  "key25": "5GzQX4BehwX5NDwnmSBZEBnkfAh7DeQ36TVVj6wkMaYNKWGnYTe68x8dA6MkZXCGZhqsWZZ8RrxoBjZqrMCwQMS1",
  "key26": "955DHVpGcSuxWxubf4bp6Ld8zTKktsKUDXxoRewQUyvpuJvf992ckdnpxfx8uu6dxufj7UJN4YoEV9mstRyS7eN",
  "key27": "2QK1ev4ZwR4HBTcX6ruBRNQCMzFb1M4mhrfimSUQEDpAg9ixLCiKQnbpF4h7bRzdNxY2r7ZRXWUdWEk4PZSDYyny",
  "key28": "58zd28uBfB1v9mDZf4pzbrMpPWXMCd9Cuea1NwuFMKKfCKqfq5JU7ZmDeWh9wSNKiRxJxb6pQur6EQPLY1stivm2",
  "key29": "3nGhzspxYo6UyhDmjwWEwus4pcjo31S99EEz2a41j3mGQqrDaTUyHEvrE5YXC3b3qsZtfDwUqpQ5Tz51bpzEZ3gC",
  "key30": "z9sXmfbJqJk3S4eQtsrGSYGAE63FdUZzVmYPwV9A1d7P1LVobsNbr4AQ2ivRLetwFmJK7R1WsnmQXzypDuyG5nz",
  "key31": "q96c1orFZDE7XfM2zUAeFLr33g6oj7NmbUYHAVJGDBtn4dBDXjzNMmc8LQyvuuMjxGKbGoEEuWpYfFdmSBu3mgu",
  "key32": "67d9GDS59eiCjNF3WsQ54PsrBRw8PuDVPCcxqRSTesGzG9Um8prMzvnQB9Do8Y9rp8pkWdjt8RqZvRJvRyo5YLb2",
  "key33": "3GKq2on33WrBdyjkdEQ2MAHgoynq6apmudeXCwDh6Ky3vQCzUjCvuW8P5ZQhF44yV8PomUydJiBbPWxixokVZwhm",
  "key34": "3ng2t2LJq4rEpkp1Nu9HPy7NqUMEnzFje2vFjscjFWuxqkPnM3M84iLA1J9a5eyvQj9SXzijswvetsDYKWHdZdaX",
  "key35": "2S2jwsUcj3FtESkm1cUuBPm3z9VxTTfkZVm6TL4SMoug53gWoU7dgJaEBLTUrqQ3TCWprbnhoR35pEjyLrpteG5g",
  "key36": "3uqDJsjALys5c7KAt73Q2qk9PHn9cfFHfj9yu5WTBupHPeXjPw9gs4NLfCQhEJn5F6tmdbuidphc9zrAwJuWxYhF",
  "key37": "32bAkF8sYeXMv4XhChWUEfad2Tb2mh3F9aixzf8hX3FnkBkXr8uj4BLKYDSwCzXYk2pALb78yib8Nq7LAPtMGY8d",
  "key38": "5ARUeEMU2BUGicbiPMr3iH4yNwujYrRTvwhRq4ARLsdGkGuPiYFGi8maCPCioks14uR4zwFCq7fvyhxABshrUSeJ",
  "key39": "4BfUSGjez8Jk95AJLnKXkrBasa4Rnk3qFw5avfFsiJERTY6QHPMYJ1RJfQVno7w8voCpKxay1gZH99Z6o9e2ERGP",
  "key40": "2adj83jB4uhFgNgZCQV1wo96u4TWNWGRPBRYGaTNRRnpkbYzxC5d9iSSLjuHpS48HUeuBMc4EPwoQauCGXy45nFr",
  "key41": "4JH9EP62bxK3TYFvzFg5d5SDgZy2VaNnX3C6e3Hc8GznVz8taVk3gWRHHTp791mu1EBhvYBCpdsC2dz98iBMkq3d",
  "key42": "3PbbKpRPRrwcR6PmSdNmMHkUpSGLM8mJuGfDDe7jXWoyJ6N69BN4cowc9xwSujX2ge6FpKJArkgKPRjCnXyC9XGt",
  "key43": "5iVdQJe1XhFXrnM5ADDQzxGxw7k7ev6iLzAsoANCpvx67iUMtxJLxZeQ2wmbDFfio2Kz1uF4t96vybSA1KoRFsCv",
  "key44": "3GgfCgdRdS14kVtb9SFwt6PsjQBNy1u7gQjfNZPPDsBti9sc81QL4ek9EZSZWUcAVdpggqwC77mAyrxj9a116h2g",
  "key45": "44otV7TUbd6NZiWuyy6jdU3EpZ8U8YeRb5sE7PmqAZKtWYADKF61Caz9Vg2m67qFowJWiX4bQ4CctnBQfXPPgeVJ",
  "key46": "4goU31CjCpGerkyAGx8nuxUhj2QZDUZvEffRBvmusbXymH7uWBG7881LwvT8pkXbQLrjtJPSLnh3mzbMnb2zxCyN"
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
