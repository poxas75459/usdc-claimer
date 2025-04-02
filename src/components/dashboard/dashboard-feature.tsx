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
    "2wxB8Q12aQNXxLnWS6NaPYa4o3uvi63aMKaqc4KMG7HaX8HmfDLuiXDp6sgGbZkhX21ajPkuc58jGWN8anu5xdY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EFumT6LqnybmSzAwacfCna3muadfkh8KrevMCje6u4SjvjYCgEprLSbMkC2KECHkFtTscnKEa6qRVxv4veAcP9",
  "key1": "5qnwDu4a5XDDVCzfZvT67BvZdVJHgaPLYsqyjRuTTjp74fAji1pjMJfdq4cXhZyvmKXFhF7LCDSPjnnzJ4zGxZYQ",
  "key2": "3Qzymwfe4URpCBBGtcYkouGZwzd82ogcfbUHUbyWHvkzd6vpV8QLqdvGct3eMdmkoHkKd3eocUS5g6GMCuXt5G6J",
  "key3": "4crTSh3QfGad3kpezcwCf8AXYH985uisRj8wKfU4zjaEsGSuADRHpo93dGgQuLP9kav95J5PV4eWLGBWqVTyUN3q",
  "key4": "sadUUhERCaDuRNjv2MaEFegKHZCfBogw5wiyWJX9RP5HDdhj8oZw4SchFh9y7byvsih8NCyQMkwTLCNPYxvs7qA",
  "key5": "2zA3veoF77ZTHgPksMVPVTq6tkTNx9MpMVRrr1nmEGwqcdsDYVNWpr2V4x8qsUn8HcX5u6tDcDbUGiwK4eHNb1QP",
  "key6": "3kc9oyMfjzi1R94ztB5sB9WCQYcCvANFLLWAjfAuSyZdVPZ1xLc8mPVEMdgBrbqKtxsRr5p6VaDXXFiHdjxW541V",
  "key7": "4A6F7MsJiykHZu7CVaZ2hdR69yhUdACDy61cYC8YQL4MgQVrcx2GpRkEhg3yCKyPQSiTgSsGs69zCqUnp5Uk5Fui",
  "key8": "5DKrXa7k7czsedgra84dnUFgxX9MkJ6sLbGbH24oE4LuZNJjRpFNBebuSDDm6chvg6dqqBcvGCEeq3phbFLZBsyT",
  "key9": "3nDayYq1QgQjjQZNqGoszve2VGJEKVQEfY5Uzy812M9EM4UdZikvgJSiznf39DxvkJJQy2eAn6bPZQD55GjFxC6M",
  "key10": "3MmgUP76oFTUeUauV5UqzmiUigBEjUxygCzRV72C1awuHg3Mc8qZjNmYy8WvXiKUwctAZzFjohQJkSjcpm8HNJZH",
  "key11": "4KkNuXnSAKTDb31E3TnP3FGC32mnu2HC8JbLU4yfXQWdttTw7CrfjbQgPQG564YYbujptgdJF1zWMZJ5UHLH7cp9",
  "key12": "5zWnZ9KzPYunbYtLZJS3UfCsdFZGp2JNDtr1bLFuQkB8ZgPaSNzVmMWsismK2JhyVgFwWCmosy2JWiGVVUye4kd5",
  "key13": "5aexFHkBky6GYXu4fuvdrTM4fNZ6G2GNFo1GnJg2rC7HYEF9cmbAhEp9bWuHuJ99UfpmRz2nQpGpzvjSiipZPiqv",
  "key14": "3YBUUZ54GH4V54iHBQ34ywF7pG7xfDEeyYgbaXMPazBUu6Cxe63Z2YSDoSFJ5uef7br87Lo9aaL2CX525y3VTwKS",
  "key15": "4mrpL2UPBFByKRDPA3os615FgGeZWvzfqFSyHpDjEi9d6EPmrAUw17jrNk2bM2kA4QszSxEKoPowT33LGnYumccL",
  "key16": "3sQvPCneT1Him964mW3TdMEumx8EyUxoatUiUGK2DDNcWa2HPr77TFKEZLMB8G2HwfsyLTETroZZXPSooJQ3RprZ",
  "key17": "XbUu9b9koCLRyCAK6tWGRPkdbAm3zsf2BVSgCyHLJJ2CSagfN9TN6kL2ii32WqffV8E54QoZBvbiDKU6wHf7fJN",
  "key18": "JTfVU6jajgnHRp9K1uygd8obd9JJtDWV85fxjC6iqXUdx9yVoFvTbEtP9P7LkXXoVuCRXA4Z3jt1BbPecQBJqNx",
  "key19": "2Wb1MFZAqejVyCqAEHfiAUWevidRJUjLpr5jaxfwGzrbk5YAR2SqD1Zxyh3oh8yGt4nCQJaAUTALN2W18izcCPF9",
  "key20": "5PV6kSmDK9ZHkj97BmETvSHggiSRD9bdDjEx82aLdbbToWRPNvKPHZtUs5ap6Bqaqu2mfTqj6CyvmqdJqb5h6SUH",
  "key21": "EJzkD2AE2HWrjnvg4y9CjeskRrKjYEHXZxM8rFoufJJsjcCAVikjuGPi6VZXmNawREYtCCYwb8WWrqeJch56Gny",
  "key22": "2mwzh9pmnYPJ9fTMbQZfpXi1KJ4TTmaotWiqduTg89ZqgcXuARN29USJQ1iKWyS9fgoEsHraqV1QgPun6QHy5rAi",
  "key23": "3R5g7VXBAFzqBx7KMNMguMk2WfEETuZs3ihYQfNuqTiV5QudeKRhFjRL8jseQgZWyRUdQwJsD76VAZRJfbkvtU23",
  "key24": "5tygWWUzjGmRQRJf9iBPkEDbE9s6CqFWCiyksEtXc3NCDL7vo19FPXUAU7jb1mD6YdrRQpXFxKkUUT1Atwv1Bumj",
  "key25": "2wBjMJTDBCFBbcE6QLcgaNjDcmGereQ4nmKYpEGWyw1ubmcQZE2BWkArLsrojJYMa1wWJSKgr5PBzpKdPH2ppbPj",
  "key26": "GoUXGShLBhwEVgW4Hx93LqbW4nFhzmZhEhi89q46q5qPyWcS1Snrgz68LeDS7g7FNYWQDKHduif4KvZAzBi4AxK",
  "key27": "Sg4KzUJZeTTWdfsnsqeusWyHPsLGCj55fADAKZa9ZvLUY2KHBa66UopA4LdHpNPJkMprwysv5o9Q6Um85nfuJkZ",
  "key28": "5K7g72n59AKRpuJJmVdBE9up2kXjy7uRke3eNnKFWuDEnDH1fzMYDGSGRM6z7Ejz2W8qmyYR6KuNkQAMPcrQUcv",
  "key29": "3TJ3t2yiy5rqBUVSUFXGMWor4PXEXJ4ffXRQqFoQRbaq3JrmiKpakP19mTexBtx9MEezgGuiaNLBbJgJWnoSwcY4",
  "key30": "5x4g3rPS7dqSs3FH4CaGuRZ2ntp92fRJ6JWRYUTarPZ4CJ8W7JhXgGtrUUnLbAutMVgCQhYsd4gmiNW71xRn8wPh",
  "key31": "2GFSUNa4zqiXpWjaScPPXJQSiaZxP6ViJCzKxT3e2BHMKPW9nr6hdjN1MmTWNJa8qsqiDJVmdLHgM57c5HGf6Kkg",
  "key32": "2xHhSFG33Kne4JYirHUMb4cga2ekAAq4vnjRSdnMMVqaCwVM7rAfNPFGiQ7Po53ijMTBYogyiwuqLLcJBbJj1hzn",
  "key33": "37eUs6Q3jD28BpBoTu48uHZTnkntyiKBH38vVxCGj1WhoF41aCGiSnFsnAuz65AMEhj1wnuCPrYcxXkzdvxTEsz3",
  "key34": "4cCcTKQAfMu1buwFr4bs6Fyyvv8ZQf6pYjHfVomr2Chhmj9DLzdyEgYpKtNzoQRRRUw2hRxQGAUhs6RBUJqhELVS",
  "key35": "XvJAYTngjKcnVKwvAaGyVLWYt963uLN8bLfyHu4ScqAnwe6m5j8sDUPZGVuZbDzW5tGawTZLbDKRimexDDxdvc8",
  "key36": "3q7e61S5ht4g2bTNsAR77zn5UXT3ABjiUuY1kjRwaTG16uuXx2ZgMHnX87kBB2JyzZF9JnRB9kB49Xc3tSEbKbGJ",
  "key37": "4B1grUGZMkYYLyUFvNPhDQUWMt4HJx8kgxX87wPbq74h7ngoanwRKw7PUvjB5cfBWF5JfDPe2qmbTxTSXsUTLsKZ",
  "key38": "5fXNpbnknKQe15gLxESX1s26smyBWTvdtJRnMwUKQxCgNy9VGyEg3Q2q97bzXprRN2pjXjh8kpz8AVBVgNzkE77v",
  "key39": "fr7BTbiLtajn566vP7A3TXYq5DpCJBbT8xDLCrpUFMECZ6PMF7ACtYQbo3rJMCzZyvcGddbH5JgyEudvp6V4f76",
  "key40": "3ippDzKAPp8E26NS6HoVPe63iWzDBNqEVs8Nh71Ry5JBWiuRePAyW42Tgoj4KrvVJVqDzJFa5fKzFDwQAxRpNfKY",
  "key41": "5rBi7VremWN8fU2m8kPJJsGF98krzrygF86QBRpSsrw8mzCp3gZwLZTb4DE13i86xzR1vG6GVGXm3u4E19vUdtcy",
  "key42": "5XRm5D5F2F1vgTKy33F5mJ1pRZSjvPtxDiQA3ib8e2aFyH1zkWW74Bu4fdW9Acro4jmxGYpQ4vXzsYdRsPWHpcnU",
  "key43": "xqD2Zq9AgVmU46mDJS8TDYBZ11pxrpwDKyhc9iGnoqv4239tMMRC7id9oNeSEEpTKToH7xUYPFZxyWkSWGEp2rp"
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
