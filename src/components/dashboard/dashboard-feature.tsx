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
    "zFhs6utMY7S7Nx7akNqVBSFLhfK2TFjCGeWzCzcMjPGjCc4utTK4xxuXZCjwHWKG5n6k4zGJhoeHC8q7i7dgTX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AES7RNycyYrrKRavNg1utC1XepPfqdgZkjDx9qDJx9gWLakqdU2LChCJCeX1y7tftUSXadhfVAR7LZTHZAJGyP",
  "key1": "2oQJq3bQwqZJAhyTKHxuEXKPVWfaPgZh5BUp7pkiSM6N1uQuCPHwkjvmFhctiTNd5JhSiQ3mqhNXtB5PJZaiV4Dg",
  "key2": "5wRQKEMhNNpjtiMXpfm32xquUGfMojHUioXufifeGRQdErhRpr17PaaWqh2KNUmpw1JH2CrkfyKfUGGEYGgKudUv",
  "key3": "4SooBYsPLGLF2vstdcoJJg7arHsToTjNttPLcrMXC4yEcfqakcbpxfiJJunSQwYLntBkAgmvkJiRAPDccYYwoywp",
  "key4": "vTyXbim8tDtqYCmnFK1QNUaqcWVLNdWDZX6aq3sD3mxS9XBheFREW61WZuy4sXKhzCvAu2Nz8PMxNqQ86WetZjA",
  "key5": "5K6xHKvdDbDwuzG6htovf5SPmQdxGX55QsbXKAuibJ3jT38DuAfSdW2N4iMgRXYySvaRiZYXQnzj2ZTpmFH3672F",
  "key6": "4xRUt5yB7kJnaSw8q78c1t7ecsuWDUgp849MCJUp4RLCyyTHyYuYpZVRpJjKn2TAeB71jsVozcJWJkcGRsZQuhrp",
  "key7": "4tTNx3GV9Nwek6SekQmZXZUZBrYLrZVCsSBofaP9rN5RTM9gYL6yYxq5YT3huq8Q1yVjvFFSHC45ftCoonPjRmXA",
  "key8": "4yyBgYzm6kk8YeyLaz465EKo3earR6pxKswDdVoq6WQauEFmwtgbUQv3gfdmPx3ufuwYsWA9feLEernxKcrgvNad",
  "key9": "3i5hTAM443tqrH98qRAb658RuCiHMD3FypBSVKEfJeDJDHpg19JXVmvMjBTzRLAifgkCfEDT7ShQDNsoSyTDMZ1G",
  "key10": "Z4ZXF1TkVhzCcSrRJc5Mpn9TGX61bNFhrqd2a9MC3RLVBvbbL5LARGhp3zeu77qM2LHx7c464XhyDhAbBmUDdv5",
  "key11": "3vzNrLMDa4fPui1sNRBbw1vecsm65S6dr16mi35SyozfMBZq7YqyhJadsjjWg4AFiHeusU1sDbgL3WDjqhW8GLG1",
  "key12": "2UFS8BgY1f37MeWgy9jwtAdnmuwymuES44FiHgMqz3n1B4gkfm9j5th7drPho8EhgrrmtCQScK7fDGJALuB3sURk",
  "key13": "3MAubexVDpJ6gDLPSYHRBVJNnvjZbk4QM1n4bLzvDWfXSd9zx3G4wBcooLBiuMKwJY77W6Ud4cp9f9xQcJ5ePQcy",
  "key14": "vMBM7ufaG2NS2WNyFc6ThQ2ZcvhfTyYycJwLmwtiP1BRenG3CmJQmBLmoo4tA4TV9Hgf3agnD5RguHPdDoFLypW",
  "key15": "4PEzVbjdWUqUYz7zomknjBCAu12XPJSzSog4w9KSP3aywqYYmHEs21PSFoFaAyvDH7FM9HGo8euA8yRn8VHcDHE8",
  "key16": "2Df66Cji23isdAQbr6WgqWR2mzeULud3vkFNpAjYwcgUKKQ2PfasFDNqrkBr2cRFMfispvdHv9i7XmV2K4XjwXT4",
  "key17": "4vZNVuFpqoE9onBcogng5rzXQEReLb2x1KZpTL42EfCep56dmrHkN3Cf8iFcwQsSzgqXn1SETNaop8mb6oUd6T7t",
  "key18": "4q761nVwKpcXVHPTkisyWeBvVfndBjSHNCSQF8uYfww6DqRHmUGdrvx2C2acR46V1caNFn4Xu1uaUvEb8saDoUmX",
  "key19": "fFP6LYnGRM4p1txLDDUoPCwuyA1zkkS1n5DKow4JUjaRajCyw1f5DCUyFpiTPLsUdhwYPm2Dgt84DRxTNug73Yh",
  "key20": "nFpC8jcHBc6NtPJrxs1iUPxwZRKrJHd71JfxY33nd1gxcEbKE5w3QoCL2gm6b7C6EaKr6ib7jLRbpr2wzw8u1kw",
  "key21": "3svwgsbxFJHY8TfPPDxEdz6DsHGGByFL5ZQiVV6JAxoFp1wFgCzEMGX5zshQkiYbhXFWJjtknEPkoWCPgFdgQLm2",
  "key22": "5ueGpKFrD6WmPXkenkwjFzW1HLhsCCvErTU4QM2duhra7RxhMpeFM8huWnfrCzEcpqoiXZyhodwam6zTbywBpmQi",
  "key23": "2dtcMJup2Lw6sak6nth8UB5m1AJqoKxq9jR93iRvkV2LYuQE1YS67FvGaXkoq19ke3yTBVYBy5uQrp3iC54FBeDa",
  "key24": "M1wi3UhDYsSkzdQ3V5AVeAsrWh4fU68ekhDxLLCXF64GMihfmJRkUVeVJTAcKVF7Z361h9ch4EXDfaYmLQcA4RE",
  "key25": "9tedt7bLaJKbNSy95U6XQeyjA7SyDq72LcTRMrVmSjD1MwBU1nh1Q8bFjSMNYBPsUPfkzZ6QYSkJRvWekqS7cqa",
  "key26": "4gJLQsVjEd1rC3g8MMuqxP3H1DHVunURAtEgbLNLnEDxCCH9tBXSuUop9mDQtvEb2JUyKjLuth5go75MxdN2rYam",
  "key27": "5ZBnMGByNGtmnLP1HfSX5J785FMsGfLb7mxTonUDH51qUrYHVqMM2Ri271iUpyvWXAMh5UopZGQgX8XUeVztsgn9",
  "key28": "No6zkso2vunCJte7jd4wmCRRgnuQvQzmGDf2ZoXDztnQBbB4rV8VyV8zpfva5R2SPgNbrShtYDELNshB8aRuXKx",
  "key29": "2qKL95RHybZhNWAcM7xvdGNh3gfL5fXbjDfDeoTWpLc7o19RqwEAAfGMz1ke51dhCPBcBwAdNTDN7UUfmdvwotTF",
  "key30": "5RyVfTgg7q8R6PgX1qNtPRVJTsdHqzizpqRhY9b6X5dFP9A24EfuaznCHiaiSfTJS37smGi29nNtxsbxhhfAMoHS",
  "key31": "649VLTaShoJPRrp5vFRMJEWXrNAdC7i37p7NJ2XbZsG6276VU6tFCc63LhCDoMjaWCFLtCbPNYbUh7RE2y76WWjq",
  "key32": "fJyEj2bCT5pMj5kJFSPFUEJN8Lb7zpFUmqxJuENMS4CBA3NECvcZ57ypFWxf2cAHwSY6ob6JCKGXBVGpBJKmG9G",
  "key33": "3PXv36JSt1ghbzQgp8YJmhGee4NT7UjsHMhnUNJH2BjruYc5f9mtC9zccn34LXinC3LfG4uJ2HQ8U3pYabURa57d",
  "key34": "4FSxE26LQvYrKcWqPxRxJXtTyumH4ndX3fMjhXgjrGTqbCy9Q9ttJKqQDoRUuWa7mt2g9W4g9XJHzDgZApi5sxZ",
  "key35": "5Zx1GKdWJAkcUg7oAsghjuCem788PQg7wdij5ty2V52oTbAY4UxGQK9qYF39bb7xjrsCWypnrutVeucdLjsQqpYA",
  "key36": "3ieeUp7Rd8UKASsCnJCYPSYYBJsKVmpJ3VgLfgZ1nXJntAgwDBhaAvJ3JV6uMtKKufQZF1cc3J61qgSQwcSu9pq1",
  "key37": "mz8Kab74oQF5BXVfmpub1yVKb2MHYb1ptqJZhFp6SddhcKQP77SNSJapZVuLgC7GCu31SXfz3mVyviE3oy5Zsix",
  "key38": "AAM7A2hiaVZqT4V8b3XPbydPXyX5WW1DSs6CEEAHa5bqAXJKcTP4uRwnf3YQShz8kyvWCKg8vH6HMW3CRytMPiQ",
  "key39": "crzkyre1mj9RMA1qShB4Aeptqn8QWxwBx7ANan9McZErfKWzzSM1m8ibYHBDGx4hubpDRLwYB6Zt5Q8ovVpJUvt",
  "key40": "3qhbcH6xmKxXthRx6F7SwvF3Km5cESEbuRWcXwzmuPaX6prPcBksBr4XcFMXZ3VVhd4xiyGNFkx9gR27MgzTtDjv",
  "key41": "4VMcjLLEtf4M66ZSYRD5hA1XkombBCKgrT7tQJyvNrFEadwQCTnT7kRVFfLurgsxVdc3NZHkpAuBUMGDRafRUaUn",
  "key42": "m9zy75Q18KSVhQYuj1noaCobrJTCm7FZ55wVJU6w23pXp1fSpdx9pSZzUq2FzeTocfcE5trxxPLSC23LWDUgDAA",
  "key43": "2eJyxXM8taFijy1859Xw4BTEGYcxxyMtbdqCGcjFHXWLF8JcRf28gCmjZTcCDUAjj9v4T7vVSMEnor9B4Fmpdity",
  "key44": "3aHAX8GkF7BdDuraWoQdYfr5xwXW2zavj7KzbnQjHoGokyhipSgSiM2oMeti9cMiZg2UfRhr1mPXCnjeJafu8WLP",
  "key45": "5pzkDCbjhQJwFctS9ErDkw6SHprf5squNr714ug3arQbphZmPkq2ViXLHLdeyWHPFQFQM4Duyvrk5UCtnkTPrzgF",
  "key46": "5tm7PYMR2hzisemuYqn4uy9s9hav5amv5A8krVeE3SwLBqhgV9o9YLzdFDJDKZKvrpR6z8qivMcjR6HxErvEnT41"
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
