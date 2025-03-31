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
    "5abBLomFkt6yubh9VNHYnashBJwoZtYGJNtvzMsJ1gDZ1fF9doFuHwrAd4D2ZiWPcdkMmfWBj7rtHU41xBRnn8N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JH23P1t81PHoyxGV3PjhFazKzPEkFP3U6GptHsDKET8KZSHVZvNGZPQRitA3G2kYSMCAsAPVbrDXiHW37RQvD7E",
  "key1": "5XxetmiFBLUsnvpH4tVZY4Sir5kkVLzHAVKRCpoMxrci6FzBNuhRZ7Y2TijMuqknHhDRRLorgC1UtHENoG9p3ngX",
  "key2": "49Y1jvdCbbHLBYBy4saYbXBiJhcWsjaYUYPHQzJfPuBhktZEBCNshXBunQum2vSQd2s9vaubrSbkXgtbizCc8L4M",
  "key3": "5kJrCugdAxrZyonpp7iQoE5n568FE4kUfko8P2jXUBWN59asMw4dCTswFAqYXfKrfAV3sFz8j43c9tZhmYRfWAnN",
  "key4": "4vazvx4pm81tJkD7Gnw68RrHhLrY7NpUCdZagchdyv3PEdbwFf1ub5j3CQmkb1uSYXCBrANjodt4Eb3LfoNmbdsQ",
  "key5": "dap379iZjB5dMspC7MMbqcvvRVF2iUUTrRAQkNvKPLEUACcWqs8oddixGESvrVCGAR2Pex5pkooQFDRWqR2q7Yv",
  "key6": "5iwXGXebEtZqzare8syxPtuRojNGbXiVpJrMgBajZbqD6s1Jui4ZxYoqEY8y4i1k673iAQ2EmZBQZyL7ZneJS44t",
  "key7": "4GQC5LG9MH4GXchXA2MZwJV9ZQ6t3L4p7tnmpSvja687pDHTGXbLMCknE9FHNnLc2ppRHDXB6AaBsdTjoAeyvhTn",
  "key8": "H41jqENTX5e2LuWSkn99R8hznBQNjybKqMoA7FwA47p9aYaWfJpd6DfzPh6S6frJhyfYcAMVxFforKQ2uvLSVyB",
  "key9": "bXX979cR712hxwNTUpHoq3j2iAz66BpqV7y96CoSr1cbZVGus9tGWfLhhNY75ecnsUyQC2ZiCzdW69PzAkJX6XK",
  "key10": "2QEPYVeG1Q7he3G69a2u9GxJLmvgzGv4btTgdVJrDPbLxUcy12yWsZC89MYFwNv48cRujWKUAgkTVM9imspMdMAq",
  "key11": "jBGjPoMZrqorY42L9zhbq4nMq3arQEi5Dhcq95HRXm3atR4zJ1y1NY6JBwx9B1oboJTbRjxtQYsHkxt2k3YhaBk",
  "key12": "3cWXkZPJHVeKciQer6qEDNNxSqzKWnR15zXsxhDsbu4wSGcWs9nB7CqHkSbSfC4SYHiDC9qufaCNFom6PKqdookn",
  "key13": "oNpjmq1j2cKd8TwphkR791nCqBwYt56G2CJB4Tkvx2UkzvsQMgPns8naYaCaJFvuqQzyC9C1C2fYp914UuS1xYB",
  "key14": "JyFCKxSzK2ZnPPSn5cwsVbLBFqzdrR3G9SsayXoa3XQv8egDdxhydXw191T2zrpy2hzdGF8paSjMbfkUSrHJGGX",
  "key15": "54MWRbGB9iBFCWnBe7Wn4WD2ycmQR1mrDxuNM4hxNximd17AEYsMAGUV4xUbitXXhxqs84kPb9ir3E257N1SEbZg",
  "key16": "66ti5wnpe6T2vtKhG6cwquCjsc1BSHCfPU3n9KhyAyYHjgEMPTHEno1AqD8HinGjz2DEjQWh8MXsa5oMvDxyMJ7B",
  "key17": "2zZFjnFCUp9G4nvB7a2qMA5Rpj2rehu9RJV49TM9nXaK4grwrLLA9xCtXDFMh8tf82pD37dESALqT6qM1caFGqeh",
  "key18": "5bTFsHjQXd7i3NbgTiWWZJpjcaPCNGDnMUPiuwTEtZvNYjSMGm8yX2Gr7yy7jzy1m9fR8DHkmNS2ABfMoGpEvhNg",
  "key19": "yZcKwVX5Y6azwn5JQZbgL7AHgiDQR782YerNUntTCVwaFLYP2CU9bcun2iLGKxYzXgAagVVJ7knSJhiXGWzdAov",
  "key20": "4amNLpg21ohTD5q6rhmmjYhvQpjawxTc78NV5DdTR1EeCXZjy8vG1BmAA1rSTjXtJmqLSrpE353HtUGzvzyKnqup",
  "key21": "2QLLtzrkUv5VghxsHKwzWfEtQxQazR4YApiQ2CzHV7pyJRhdSJ1ro22DVi2Fq5AyxkFfr2555BtHQqsdh9bkemgF",
  "key22": "KYvyLTmdSbe1Bo5raJtRYuRggM9enGgofWXzsJF8MxPJLP7dwKupkZ5FBkBLwDrqGcUGWHhSYPm5EcSQriAf1SS",
  "key23": "4wXRaW9BVFkf2hpi5SyQ87UeQhGtyRmhZb8rKANgUKQJomfnnAyHyDrWkB9TXiwABYQBpB3GZbtxVz8WRHfjHkmq",
  "key24": "5FJwc9rT32CNuzLgJYqGmcU8oP4jW4bLbWsmgqw9tk4jJzySAZuwqDs8BQcTHpPVNT93C7JZj4fQgmrrfctTkxYc",
  "key25": "62n7yVc3Nhf421KVuPZYZm4FTJZQJY7pfTgHsKZMD8ibUVBsvSMVrQewSsaRF8W4AR7jZQu9nhgD8bKBxcDhoisa",
  "key26": "3iQHj64Cv3C8v5mshuT2tamBV6QRXQchPQekT4nj5gZrCE2VkTeKfiSi6MfPnnyHq1UewvLZy97Qyi2o2ExsHZQ",
  "key27": "4uvVb3pgwm78sVzCH8zuvX7zwNh6dvqk3TpBohqxdM2wwng8uzNPKhCBx2pKX7vGCRcUsL1ctFLvLKphRbahsnRw",
  "key28": "5PtDSTiPUSLGFVBwRhCoftBcfxa9QgEvXwD33tkLcwnHQebckTSPtFjSJYwBPZya3XoBpAgvMg7CBBojGpoHp61B",
  "key29": "656dRPiC6ULCZemV7GxGZGKafeaAt7tj8nhJTqZsxvML5XcJdY6rfH452WaFuwqumZMsvqYjmqCnfqTbJF7JY1nr",
  "key30": "4CE3438r8Hko9QLdTBsXmdH4qdiGbmaZ6q32xeXf4tnX4SPv2izgbAhLyWtHL3mcC82HmPfm2CDxqDuqH82DRi9y",
  "key31": "3gGqFEXj84dwRdq4TmBzH7cMj5q27wJA8LRdfXz8LRvYeJGciFcCqFWPVf7XGWgVoiMkDm5Eytvs4KvWUSpYHuSf",
  "key32": "3SdjVrZouEm45fSSbVMfNwd9L6nyoLprPG2m5jBWywsznmBzfnCisjsdv6SbDwQ3xbuik3NrWwBx5bx5rUVF8bkh",
  "key33": "5z4BfeW6ZzNYfjxNoVG1RvqesfiAThmqsmRCKu8ZfiXq9MjiiX8j287vAAR8VsnWjmz5auayAJe5DSDGz5heceg6",
  "key34": "5KbjzJvfZJU7BqTKDxFKTuhbykyKGRpG2zoPvBTEpQPZCk2AnECL4rpvBimD7KQRaNJfvpt198ax3gHwAgDmsJxG",
  "key35": "3Z5DM6EBmLvNNntzBCZbQ2BmNSgz3aeRfrXpwZAYvFGnxmqspTZidsLWnUAfRnMCg9T1bUZ87ESJxnanuN2akVae",
  "key36": "5WNRHjUmXb6mmj4zzyTaqLz2pAL79rruSaiTFBo19Hgwxz46uwTF8bqLRw7XRsbuBBJEsfuVe29FJMFnBKnWhr1i",
  "key37": "3jXr3jbpJEa5GWLakjkD2EYtZfmPyNXG9MjP1GWVQUTr79T7WvoygUYx6p9AWXwCdpwGiaio4bUwYPNGn5Mt1Zjh",
  "key38": "3D6FuiVJ2wZVTB6cej99V8uTD5DgMUNWsmwH6mzVCKzxUufpB9Ku9qpstGTVu3hG3ZDFq4BPiPZAV1GiL19KynyG",
  "key39": "3M3m58beSQjeTRvHw5h59GegJ2nwHuzZkgnbKGQxjU5Jk76MejnSQYouAEjC9oWVKc5PymSPLvbNWESVz6VBgSSM",
  "key40": "4Wh6At1zWJ5NoXaBHr9jUsuMX2BNkeVxyh1t4qCAK79CdtTZ9LPnqz8CiCpY9vBX6SZKkMaCfQApsHai1zt7PnjM",
  "key41": "2rixy4jwgWNZPPEAwR27KC9tTzT22DbyG41d1hfSKqz849exjXN6558u9JZVJXtnd1FWjaVCrEUX4XU4Q1qBsZRs",
  "key42": "129SwGbXxipvAMiyFPVbD1imEUrgphbi97sD67dH6Ej7qoc6cZ2yk4fMYN8zdb94eTbX19LWnm8DoNyXLBVXRDLP",
  "key43": "5tCQsnssJhMJbSsyQC8Gru6trCLJHZ8VvY5339uBehraiUrd2YpUKjdpQQCnnpJxLL9hMZ9dMHdUPS9vU8StLoES",
  "key44": "48MtaFutix7oAYyxFwcspi3qpugRxPcnzD2JRs369pvt5ugiDfzGerQTj19CDbtuPHvd6oJXXjFwANWampytaFS3"
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
