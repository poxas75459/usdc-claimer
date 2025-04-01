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
    "2x5tibgUNFXiok33mAW1PxYQHJJHyrDHvr5HXPEd6HNQhzuK7Es8pv9EFEEADhUD7EJ7TNAU82ESN1X8r1hbTUxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fknodcL2MBJKcEzBdvPU1tug2KbNQ3cXUXpjhkSPUyxCynoJ4pd4CXogsV5gGqRhVNFJuVDLP8hPMXHhPhkdosV",
  "key1": "5xyGwjMb5VLDn5fuVoAx3V4jWTBSFf9HmD4ycyAMdxDJREXQ3KTVs2skrDHKKWcRRFin8KEPYwYS7vqJFYKYdAv3",
  "key2": "2qxrNJzZR5Uomou3xgCxuKLsbQL8BRSd3bMitnr3TKeenM5oSQfcD9P1cjLG6QQVZPBXmMg4cgJ4z5kCVbnUVwSS",
  "key3": "3nUQfmGGRGbq7qoTTYZwAp2AyT7t12qWxoDpq8xWNSojmj83JedVPrJLDTEVzhP673h19b42oRj52DbPbpxsyS73",
  "key4": "29FDZJ2WRb4tYQ1pP2Fx1U4TT57JKku4T7KStmGWS57kYsh8HAQT4Qm3f6o1wbDJTNJGpwBvi6gcXm8tyiy5NLe8",
  "key5": "2C6yb11MbaHzPyDYFG54w9f9b4HkE46ce3U7TwHe1AyJSuXVXCG3XugtMGDfzbZpwiiZYSYxkM8n7we9tFpfkPUF",
  "key6": "hmQQ3owHyMHNN9BWnffxKKukLucC885PFdfth4chc2EPwWVwXBaoAE2bgd4no6yXt8Q3Y9dLMUVEoXm7gh7yFpY",
  "key7": "2qGTDiJdAnvA6oLwkpufNp1cq9YKx9h6c3srcM8fF4emfJHkHNYEAd53VaiqNkkQZpAa8gGhGCtJnRYouPzGghJY",
  "key8": "CEFsPgFrSAcCz7bRrouLMJgbP51c5wa15V8SKGWWzkEMUyKZquPnGCi2WXJJAX5qe7Q6nioUgeRZspF4gLn2pvA",
  "key9": "5SSFnPKvciEaQnap83pZhRMnMjJSwFrdtk3oaM6pJKceoLVDKEq4b3fVommGEXabgBZQsHxhXKMFyEqR2upiNwsa",
  "key10": "FE9CDXLYqHdq7RBc1gHyXagYviZvJGsCeaHMG49yMf4nhL5eENirVuASS6RBkQ1Tzt8ydcx2ny65ZTJEWRyiWNV",
  "key11": "xwqaCFCKsdCPsUixYQtU97o3989dmmYen9G4YnGqVeb5na7isAGNZEvo5r8LoXLtSJpU3PAZGzQoCsWbn1Pshp2",
  "key12": "3gUCgZtNQAHuX2yK2MgmCnisK2rsmgcKd65bTYDNdvAh74oeZ5MH96ErSPJkBt7ejTYiSwpKmsMgeh9qP6sYZKaf",
  "key13": "2doVvdfgQuzEgBcXmm5986KvCLZ7jYMfn2pFKtMwjGefiUmMpYquG5qKsCG35yNH1YaQGMixPuF4BiW4GBTw9RGc",
  "key14": "5p6ALHDre78C6LGn8bHpqB4dTpmzgcW5q1FhQX4BUF8xRaMgpxuRpbUEdhWhCbbRL9uxvWF3V4i65QuZWpGNkX4w",
  "key15": "QfmVoimJ6J4z6GEoyNKMWqPAVV6hPgF2aoLLTRaSFby7NAbwC76zsbpWbi9m5jGw4mtLjWhUW3uYo2EnVNjud5W",
  "key16": "459VFTGsNbvyHpt4XXC7d5gLxFibWF9havyXk5narrnMCDdfiZE7pgdpP53fgMQiiNv2dFt3eTWqXwwNeTfhv6q4",
  "key17": "5cTqG6asrwpxNZt2JdUE64FFRGw2fRA2J5rsGnMUWWq2mca7hxCUNDke3hzpWavYMrKbTadtukXGZpDPn9bbm6VS",
  "key18": "59sfujQqwhuudtQtSweMEdHsEcULMysa2osY1VdSNMzz2acRzDyrqZRd4XoRKPDu4ip7SLPUE1XfTzauDipWj7J4",
  "key19": "4Q4k9WyRHecCmxEsMC1dGWy7b6XgsAUUkX61uqrkopGy6yGqKphPnYMfNJRrqB6nBqy99DCXRHTMj2W9tz7TYDgJ",
  "key20": "4hrpECDjSy6u1fHidW1ZUBoFf8fe1sQETHWdGm2h7LfMC9TfBSd2YxSz3e3ToYNTHm8VHWWMNjcdAEeYhdSQ5AJa",
  "key21": "GGS8rg4of2PtVEt6wydFy4V2truTcJgXdhh8qYH2ZMzUbAspCptbMyD7dAu5715LogZePQRxhrrqPmVQrsUrpJm",
  "key22": "drKnNqFvRbxrrcgfdHKVfRJ887XTivL89QyXt5fGwC3FxHByspjXSzNY1nM1NyCjpr1JnifNssW3utnpo2ad9nd",
  "key23": "25vqvGvDmyPj3t9y7NQDv52g3k65mr6B55SRGbY2t5EsUSDZML4J4KRr7GPnWV4WqWwJ6eti5SDYYeLpAEYQi5JC",
  "key24": "2hm9YHB8QD8h2dxkyrqCHKojmoMBWdPSeLxYfKHX9GscPW4ma4VAmEywg4wPuXR1NRuKsLtcRpksWLW1DHKAWHBx",
  "key25": "5ZyQpuybFnH8uYWGvgetuhut7UV8fRZ15WFJKdNxCD5jg7AZciNcB2QUicpCN9Y3LYwmvfr8n8DJTsaBoG9bAtkj",
  "key26": "2CaNF4z8PV13SNHrADGG8z15kFvBjkYv7dRpM7oQnwTECALf2mFsmQP3eR6K5segCpW64VeoGyPaYfeGnfVrvQ3S",
  "key27": "Q7PTrNqaRcu53QQB88e1gYjLg6fd31hQyeNpQcSNwJ1ABCM4FmocCcK3iyh1CxhNd9Qa6LXFvnAyHBq1VKpCK81",
  "key28": "BxtWkxN1ztZttHNUHBuYThES14jAvFyaMVv78wEsNjskxADAXcvXDbis6E2rLoxfSqKVwPQTyiagVFmvM8mLneE",
  "key29": "uab8CVwUkGM54cxcymMJkSyucQwSRQvyTM4X4uVtMiuesKsVhHW5sDcefmVSwTAjpUbWUEsDiHjg5WPbVW2THTu",
  "key30": "3Wrji5KJi9GvvLNVMXawP3VYaSREdDVz3wbJ4xZfve75X461rC2SW4B4t1ahcAAd7xDFbXsFFizWEx9BAyjUtJtz",
  "key31": "ZcUSucUaM5DBSjoDBYCVmXEiiepoSajSw1AbJR91YiThYF6BAHwn5FunLaxVfwDpXwqQquRDFd9Z5nYtvqTypDp",
  "key32": "535PF4VcqFjALhb5tdxk9jju9bvaiEL35ZTzVtLt6WWSBZVLoD18BJucK1AYsou9fsH2UgemPhuGXSFPkSDuagHB",
  "key33": "2qR2ZsHHhXKwRtkhC648CKTuoySkoGMCPr5CFMVP8MvWjMBDq6SgYFY9pFUoccEW5mHaromShPAugn76oLENFdWU",
  "key34": "SjfHwJj6eW9N4159pE83MWyB9nNbACqxEoAhzHQMjDS7zzszaignovpySHPESxseBuUS7YnAtbbrcQrCseeg5e6",
  "key35": "3U5GejxwEACP959LYhuUKMY9hEzb3EunrLsNGtv6J6iSysz4scgwwf123hmbEPvT69TDR5hEp21RyZXrRErynwE",
  "key36": "2ze13CTMeFLBDq12XfHUFt6hqcKHToCHFLSjRrgCG9mEeVegZjWZTQrsbBzggT4QwNDvJMSD3aAkoXd9KgBM9Yck",
  "key37": "5HcKffAA5KEgnNap4qNk5y85BimQ281N7AQvcUq3f6TMY1AmUZPYgdKYTXuUQM8Lpe9TTr45gRxj1bS5mZYhADLq",
  "key38": "4aV8952SSiwxw77oY4QXfLoYpHVsJ2dYbjALsD3qHPwGmu7aW1BaCdsNDKsV7P4HCa96CdsKGgDoPYdqarS4ThEq",
  "key39": "3jyj1RuptKcCWPyGg5TAoCpBLGqHmThyVB8Q3vUf7TJKJHUrhvX1xpCwKDrSpDe25x5eTwkazb4VaWzoYLGNL9Ju",
  "key40": "aARRzZBqBNMvCWuF3SVByE8wxiwZMMgNVKWhobtigfD66SFt3SfA4S5N1su1mZkhvhjmMCy4SgU8XWD6PSjCemS",
  "key41": "3a6yRpMeRmyLMiR6YaCDB5PM3NxiXgoauiuNuo6XBSbAWkukE3FcQmfzWSuR332JArXhe8uQGVwimA5cShZ6LSb9"
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
