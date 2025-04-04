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
    "3HVRcy48MD8mfupM6DHVMcZqEpxVtSqhCG4YrUarDm9DZkGXmMvUTydybfWP9MUxnY1y6mvytqyeQdV8WCAsXLY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bbyAUWPb5Dppdo6vRAbgKYSezrTLhTLzQBpr2fbPdUvXZX6RnRHRk9mTU4ezfBKxKzkudmQHe74iPQj1orXPNi",
  "key1": "4vHmwtHJ8csJYYDUmXjwik8unsnmTxB9uDvnsS6PCtpS8tgXVjhJfWkwdpZrv9x1cuayyVMsdVEL5ePjUNYjC3d3",
  "key2": "3WGmxFFuJCZuCHQhzqZR7Jt9dub219DNyJwmS5uP97fpcATsYYXieVAagtydASaY5vjEu4z5SDMEQbuHQ1cTCuEv",
  "key3": "2HEo6xr56njvDRWxP5KgXZuCHt6VG6Q3h6AjTEQxQ2tdUm9ZzZJcxfCyHtPdM6maVnjuWPDXyiNAZBd6HXnnDmQa",
  "key4": "57UVC6ooZUHptQvG7roX5Ho8Q1frf99AAFb42jUhbbC1XFofyrgFCdwUqQXqa3gNRXq6tMho9vXHTYFTGuhqF7sb",
  "key5": "5u3JQZyC7dEyVcMvysUtbXoSbThGjbDucjf1c2dtYe2qRmfamqdbBh9PnZDAxP8VvDPRKvj3wCY6XcfN6KXPq97y",
  "key6": "5egaA7fpaU6kBefEUYatGZtXnrAW8fZq7t645mDxSoiiDWxccNuf9MseZZLpxb43d69RMH5riByKzyzLrxkNJju1",
  "key7": "4ge4uLaGPG7C9NvmQzsqTwLXVd88rQjJUWmd6viUPMd9ZJoMEL1GxVFWdMirHGS6vRpoKA335oqnuG7JBA9LmbpR",
  "key8": "3k6vgQFi3LR7SFeeEDBoaDsq7gaVEM9oX8fnSEyVDqwRaUtK6shm3bnACQwWNqQv6kcZk6UkwyHYaS6f2bG53qeD",
  "key9": "3GoxJCFypJ4ZY7x1bgzHuVX29EHdkLefeKmX6HaiR8rDBkrgkRcwdZpfAVqjouH7wGCTLo3QRbWwyDPGvyRYvRLU",
  "key10": "VwjuZbxo1ATxhvvqtrbKwT5GESK6cwdGMczRvLq3Je6WGJv76rrSrVz4SC58NP3S1d5hKWo67ip37xFgSmSHQHF",
  "key11": "2s9ZxXs1yHB2xCUEUdqYrsTKM5EgJH3R4FTiiV8uxitFN1uV5UqKrtx43hac3uKHZTuf6kjMm7Wz1eHNyqymowVf",
  "key12": "KnDB38MHqjXJPqtdCu8g4PssHnagma3Rz3XMG6tYNWgcT3reVpSgm6wKuS4hhTrW3mEmcUvoWCkaeNxv4EyPKDb",
  "key13": "434CzEtv77bx6es1R16DX1CvC1BbwXYTMRdUYRXovzxKq1YN2djr2oKfPimW8hFLKdfbVXY3iwW6CgnzMSHEhnRY",
  "key14": "XCo3gKbmkPbaxJKGYGqzG99sgPNmhTVRk2FMPcqkTNAaFwKZM2SraPWergW3QtBZY8KJwYBvGwHnzaP3yq72xyA",
  "key15": "3FD69AGwwWvfPjayf2WFRqHjrJ8mrfNgoWViwNf2CUgtHxbiCxhfEPvuwx36jCnHKx6YmutPjrDLmEotznUB67Ks",
  "key16": "64NuXXGX5STih5vgVuaM3hYYMahFdrMbR8M77XxMvptex8aeimL86MtNZ2VoEUiqfT11J4iMn63yp1VHeaWwmKMe",
  "key17": "4GYJvZwiu8mQiwxTH8CvDipEHbuwz219LLQeZoQuzvisEzcPnTohFBA39aGD8r4FgrTSQF5pyfNofgHFgc5i94s8",
  "key18": "3hnYwb1rVTChQaRnvXpUApqW6uzVksq8EFT9UDrfKDcrHZvroJWEeEUkCYKdBiBw7BmJJ6hnGwxyv1kwRpsByutF",
  "key19": "4vx6AxAWWECmVtRo7F8c2jfBKHDvG7oqGp9n9Gsxrc5ZZVaJ4umiiUUw7RjcQ63ML2pYfw7CJSern976JRknyRk1",
  "key20": "94iYyYDd6k7m9SGkMEZ1pjojGgLxG1Zid135mCLm5p71w3bx6eqDzczwxVmGTH1NMoWEp5DfRNjHTZbBiiJd5Bd",
  "key21": "4rxULnNUC8nptZZfQtiWaUmXs3GhyKg5DEH3nwXSH6rTtmoJJLRkjQeAM6JmphttUePW7PZ8fHVkD6qBxDvd6i2J",
  "key22": "2hF6pvdPCZTPjL2WQRFmGfbH53g3x5XuZSkrL2onEUXyzUKywwaTPak4Ayt6Paf4hzaHgwc132GtjqBWmL3wRfUw",
  "key23": "4VoxJsUcrGeeurxvwcxT2jsbqTTwBQ8CXETVJe5pdsSf3YFfrHZQRswz7aqQgL6zVLB6pp1czhtuFYe4ehETnyuU",
  "key24": "4QmjzqW2EYZrLXzAq29X4FMVM1cjk2Ej334uRan7gZUooYMN6SzFnqeeKF6Dq3U6WKZQcxNVpjGizZ5TKaga1syd",
  "key25": "2HGWrcin1JBsYsuCGwp7xXC4omowsLVhtBczfHREjJMHRjAvJJ9UPEeLQ1zkmRJKKwcqQiRRpdV4nkDFFUgTK9gF",
  "key26": "5o1wrToFKFFdqByk1oPE711rmNCtQioST1Dsup7X46yyxDTwSzwCAGUDqAM2VuhDAj4QriHBsuTGwUxysNvEVU9y",
  "key27": "3c1xsDdzcptZ3qmRZuGvTXbRQTPKBdc7aq2kq7rmu4CFVhtBhosDL4Ek9FQ5g5d3TMgTxMhmc931T3o9qpneicbo",
  "key28": "zuaofgfjtsgPwifeYFrj5ro891uKqY7eThg1ydvCnc1pUFEj3ALfR8b8XV3tB8iQankSJyj1tdLqyW2ziAB4kCm",
  "key29": "2CTkgNNNtnQ1W7YVDk6C4UWP2FVcQ9KCvJ92irjR4cAQdqsmR4C9AHGqEpjNuaaiYs48DUEt8QonxcAwsQa89fCz",
  "key30": "3rA4coGJXmZv1c6gmGwtwPrqoysJsMBeUZeY78txFgrjhXn4VSu8VUGysmJsXY5V8kqQNhDNac23AQBKm8fjvUVo",
  "key31": "2gLNF4DbqnZG584qVsQQf7kX1j94QsCHCp8QYDFBR54f3P3zi63PjzWzvmhVtspyLLbH9BxRbNWs46juxb3r4sNK",
  "key32": "5yq2K4sK2qqXEtcE9dxQcBPzrrAYHPFFyyiKMWPmM3SZu4H8bkNQ8Kpcmiikfi1oXEuA3bjUiLMUmkm9ZDyErkbn",
  "key33": "4oXKEEhqh7GuCcPachb1pDukMzyFyxKiGpeKza7wb1nPMWdkGPLv1YP1htGNM9xdVtTSqDyEMspHsVhLAUV9Qt6P",
  "key34": "2tt8UksDSRgXTJWmAxBQqgqDnsyHHmkzk3pdJFiTGZqZH4VDqkS2tqxbB58FqkARZ3k2GNjmCkw39Sb78T7HZggW",
  "key35": "MwEuJzxFMU3zLBCHsAVCX4gGzfi6WbydaAMsLKjLV2C7toixNkQ6vRMiLGYzpsTmM7fNYkTgYD42zDMP7EzfUem",
  "key36": "Ew6AGJs34jLus23njEZ6PfA31zoH2r8TwbuFe9pbVEaXsgvj6YaD7EXfd45tR5LwDVKEKmQyBMxb8FL1sA6SKHq",
  "key37": "BA8BzTTFv3vWKbbMAx6Wgi3ETWVBbv9uRZyFhWemKj7WMf5KQbHTki5vJ7Ct75pjC5ZydzCcHqUPB4PCu7zt9bd",
  "key38": "3p4KkS22XyiPLT7VvJxgdjQAdB91usdiV464Ug2eNzPpV1G8pq35yGCR2DCkBFHVFpoei26t6jcZLP5Xr8zyzRaD",
  "key39": "W22xm5wkD3zWn9SePRM9MNjVNQ1Apd1FK4gpnVYVSyVwF4Fg7Dn2in8uA66YwEUqTtxnrSdQ7YH7D1rgEV5jB14",
  "key40": "414GSRnAGEswWwoYzUtSQJBJvQmVs2yoN6qPUK55Q5kmznr3M1KkcWrwLNJBf4HtiLVH89D3d3G84rtPKHuN3W9q",
  "key41": "2XJVk5XXpwjNd6pJU4KyQHRmUB6228BS2N6qVzQdCEcrJcstD66PwVP4CR99khAFzdBFfvq7kEWiAeknW5cP73FX",
  "key42": "23GcMWXDJcf3X5LxBWxFcoxaB9HY5tHwN3r8SMEjesrnZb6bXiM5qNSSf4A9acnBaWhsjyByLrMw5SLxA5wJEz3T",
  "key43": "4RB3MdiVP6EZbdh7wMyRgeefo3NqaJ8SATegKeznruQ5BGE41RYeiBeLN894qLk8MnkN2Uoko2mab4J3GpPS8iqx",
  "key44": "3op3ibb2mfmd1HpYPpVFN8tdcDX3z7agjNWW5j2GTVdNWPLh6G7amesGnTmE2kVYkGXsq7eVHPBvbLw7BxjH2Nyt",
  "key45": "25A7fdvnE2tkFfqMS6GmJJiVa9rWX9JwJBJSH6BHJSuEv6k63hyWPMoiG1GKWTnUbznQPMwd8x8f8oVaznjP7Hjy",
  "key46": "4k37bBmZBXsznEu1o5a91FKaNYrn9pLnyyjWLWFeUkfJ6gpKgXAgKRp4h6hr4kHJnxb21GhgfMV8RXW3wFqFhRoi",
  "key47": "5QTaDZSfxVC5bxf1uo7HoJkek3eBimGJuXiNQSshmNWMMzSm6CkGxGgxBrk3cv1s4qd6sPXPSYRVFGHAX9t2SiE6",
  "key48": "4sN27ywwUF4m1dPHKVbmRJkjnDHPDRSmWTgXi1rWFHy6CKpT23mWRY57TWDegZ9xdcbC3RV98FyP2w7hu6AJdrtn"
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
