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
    "4Kbyuno2WdkX5zREBzqV4iAwUhuztqeQNfX4Dy8uDf7JzAS4DfaJ1xjwjgSBT5vhDe712ButtuPHnu3ThTteRj5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfxK1aYP4oAt2MnhX5VzRQFFVJLpMPzYdX3XjZzHHphECA4cRApygRRa8JGXyiwLU2iwewQbmR4s5irq1PAKZyY",
  "key1": "3MNCjkCu3GpDg8UNddEcvp5aDm6v9STZgFxw1twZdtRZBbQ47EYtQaDYcuVhrr2McxbZhYUs3TB5TH3dLLdhRN2h",
  "key2": "4FCmgPncu636oNfdFJnGdeY1jHKzxdzXABZ4XnqDGbe8jadEjAJwLMuErnD6iuyUPehYtTSLRfsmD8tEiwmwChp2",
  "key3": "2qXqXG7FgQ7E2aqkeHYXXP4CQBziuvCxpWeTBzz7Wmrgfr62QsX1uu9m8NjGtyLsGeTwNpwVdGeV7JmkyKvBjNJe",
  "key4": "4YFaRD9D4T5xro8qnQzEGFyc7waesfsZUpCt1jFJzJo8R8Y21sMurDTUbgVcKfXrL47nLLaEvTWH7c628rih92G4",
  "key5": "61gZi2biULUy212bbdnQg7YVAqw9HFdfakuvc1Sh6TcwH7jaK7thSzTriAdEsRLXf585RiLQHgULgGsD7CCVsBoJ",
  "key6": "4kdZpZixEYD9wnMZQyAjScdV4iHKPY6gVAyuj8gXDSmXw2Pa6NyFmLaTJhReqsEPAF6RRZqDXQuHT6gk6pe7GCmc",
  "key7": "PKKgvkChhfWkn1Gz7AdJRsyKGm8qMxM2TmhK3gYowH7bywrEX3b215nJkMJSRrDB7wcXmkMDw36JFqogjWzzP7H",
  "key8": "4sZknggVAtQRQgGQgjbn5xpWqFS6VAArQ1JWcj3nKduHRPq1SyqxebjdunAxpFAL8eh46sygHWXKJtEak79PRMxA",
  "key9": "4zzwjys5JdWa46dsd9A8wTPxZhZm22JTvnYEZN8o21xpFj72WvoFPYeoEf5HS3WEGnjsVksfnPFu75mANyFwPAuE",
  "key10": "i31nKbcNC7A7tnwSc5AtgokS4zqZFxvx6QBCSnLwJGctTHkC3bNcfWjS5seJ3Ko84PmRkmAHMrFKVNw1eXGx8bB",
  "key11": "4WUsKYzmS9A13oR1W46D2JhZ2Z8Y6E14H65w9fj5EeUAGyAiTVRj1HXX21xzLnyAfe2TqTR1GNtTHz6ncGb6cJr1",
  "key12": "58MhzJ6gNt7assYZrJkzVaJun1YR9tn9fFvJGGipRSN6MLKgGQGyD6QYB74UfBavQJC7U1okQaNW6CsnekTZsUgt",
  "key13": "2o64iPsvLMxyARc5gehyS7h9kDXC1rRZfkW5ywpGCm19vNt8HLHmyFHSJ5wWoa5tUoC5kNpYb9F3vqENRmmW6qwh",
  "key14": "5ZE1ZSFBPsYPCLk5qnqfNQ1Qv5kiGhpmPn8o6cmKd9pHNzNyg7jp1wurtsxqF9NK3hndg7ptnqzQwEMwtL5AuGjP",
  "key15": "nqesgEeREy1qoaPDMDd2HKMMWdyEhybtBXXzmrfHnYx8iBE5vPNRY1qqQZHiBCtVL9GWPnfViFj4Zh93JFLxVbr",
  "key16": "337PSw6DreeoVk59AUVtjHCkMd51bLjw87ezA2EakAJNxoG8x6AGL5mRBDFNDjdseSYyiySB1bi7zieC8tsY6Roa",
  "key17": "2SLnUDgQr1fHrH9pSh8AGL5wggf48716RkChgytDdpB2oWrSpdsEDnBxMp2FTZEq34xaoimAAmVifYv3mp9NTY3P",
  "key18": "5ZxbUE2fQf37VUfgsFdUf1SegfKBojUJ1jp1V4CVSpBsuu2eG7wWiEQvAsobxXcq3cQrWE1vZHwEvUbbBx4HqkgS",
  "key19": "3T933s1mdUq4cRw7LxGRfVaHRjcmdb1DvRMfhTApvxuZmYq9H8ykdQc6JEihFzZYamTTw4hUWRkr6mWFvvXC7Q2H",
  "key20": "3LZCNjaDsK1ZkhKbVhdTh7QrdFEkhFPRfL1jJjpmmucDNUN85GiwwH4UVyJZWEFWnVeMpT1f5xU7DxUGRukCuLDK",
  "key21": "458a2MUEjX8PEPTXw4h6QKdxqZQCdL9B4QozUrD3gq1Wv2zzWnxBrT5nNRnRHaQ1WPN3M2oNHCNAEx9dgq3nU6Gk",
  "key22": "522MbpHUkvnEXSeWT3S347MeL8psGjeXKYUjbD8AuQSDScP1w3TER7NxP1pW7GC9fuRcpoxDTbN961VtPxgCS6oX",
  "key23": "26rZJtgeeCNqR3TyyKq2NeFcqhsxZi1DrRXtnKSrWsPg5DG4WzGEE67rhZrgtudnLQVKes4EiEdwS7mws58HkUbB",
  "key24": "4b49SiJBMBqMeZbuY5taqwhBCnAgNPAiARbPmaHPXQVSoo6s6s3MfcyLPaoHezo9xS3QK6mDjUHFXgUERYjfQASC",
  "key25": "4u5tzZ7PxVn2xsMRHKfyZ4Se6FSek5XVd76pFgNkKnm5xyrpUSyEdVCb2TpYPdGcBtMdi2CybiCzHi7K12rmY51i",
  "key26": "3TsXJPqvXpW1rznrgk2UAuP69Eij4y8kYjX6ifSLaxRvyLRruwZWokFHjHZ18KfaQSCwqjvVfi2TnjmiVeohDmPf",
  "key27": "5PuatdcNSMhs1XGqrNaiibv7mLLSB4wqavmwLPeSZSwb6ZiQUVsMDtyYmHHTzwUHkqaY4EWG2kwXoHx1uqx6VZpW",
  "key28": "3cLfi2nn4U5Pkm7NfWadGevgRiPi5E7SgJ1QbjPwmeRhi3dEdxbsJ5djw5Phq7iprACn3g56Ak7nrSNJChRRWm2q",
  "key29": "2MAcgQQECS7Us42uHZFqczwTmdx8Q1E2uE8ikpTUx7h1BKbrmtksLHd93U5So4px24xAvT9sSXRHfTKaQ8wk7LfP",
  "key30": "HxXUmxTnUS1pYTB6EPrhhdRvHwp5TPcHGGQjjHNd3HQJ5zXtwmvxWzohTTwFf7iUfiwVpVsCYVSN5MVF4ppDADM",
  "key31": "rTPDb5vm3F242hyKwkbmGC1MKC443SLGm9CRxJWuDYv7zoF5Ki6ZpecKww6rwkSsSaV83Zja14e2aocDNb7KJe4",
  "key32": "4HXN1nUtBzi368KPkNXJ6haS5ck3zkhZdWtbFti96inn1YN4sJZZNuPsPwuAeY8CfkDxREjQtsqvd2pxMKm5aN2p",
  "key33": "4JJYmsbfj4o1zwfFGDcnJMYni7GfMDpWjPn2ywv7W2Q4XkhxRsNqz5vKREBY7MrQt81z887T2bKUtU13H9NcH73V",
  "key34": "4amuMxuBBWQqQn9yM1jo7iLYw3ieK7B4ifhaMeS3CxRjjzaFBFSiFcYWLajr7A865Na5te2PLvi14CFJjkEhyZe1",
  "key35": "4oRj6Qak8h3tjnwN3jP7guE68ekVNxSyqPpBEUcDxLfUU1hLJf9QAV7WofUfA7TaR1YVZEe7RvLfkLk29dg4KftG",
  "key36": "5WKFdLyeGNca5APoRc9RxV8wCr3jyZdY4hfZiGFN56L2Ak5njepWJfUQKgt5q7cQLo4Er7sstrQxubZDnYbqDMmN",
  "key37": "58bZZ5t117KVLiy1R4Nm8xDBUH6MZ7awuLji2yFupzdstQkBbLq6nsKVLz4dJLxv5tPAjxu2vAefQv6ah4Xwni3o",
  "key38": "3NnmMHgr7yZnCsCSomKMpLbdiY2SHAYFHmDgGGKKJUqgPWJcRPS1tDdhhVy2KscfjLutCWQnid14NcjotjUpmHU1"
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
