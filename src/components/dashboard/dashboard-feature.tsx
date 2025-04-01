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
    "4iGE2oz3pUAyuz9s43FxLHuKN5gcYanbmUGZpXng2zPJ6de4YFuaTpbjM83F3pC2rJiJZixAntMdxEzkBEJm2ijg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsvB8bTe9Ara9jPdyCMgaTCDYDo42QWU9NFhfpHnZNXtpX3WhmNr5ukwLWqXJTX8QdXZY4HD4aZAH36gmYggUnk",
  "key1": "3DifAHaBiE7hu5GFSy4ZjGyNHwyCntwCxu15Ht7zbsPUBBEBNRob7KGMxeDXi2spVJhsW7HEP6asYNgQ8ZLPimSm",
  "key2": "5pYSmTpyMBP16fFLJphaXs26hVXnhDdLkfs59iZawswAssZt4pryZBvpamj8u5qu8AVeNPiSFE6Fx1pbtd62qryj",
  "key3": "3fY2PSQGJfkbdZ2gs54aUJTLKtV2tiKxy71VfJY9wxRaQ9MHHS3sLahErSPL6e8NfJwJv52C2XWTpaS3zZbkG3RN",
  "key4": "5iBq5yW3SbaJrw1t4r6Fqku1dHeq6aME7xNrkdyyWKTwmDLn4BmB7j8A6PWoWG9DWotQphA7XDSFBpacp81qY2vw",
  "key5": "5pThqCYotiVsCh16n5RDjwJxM1GVU4z6SwFKMxZTucPX3M3QDaVmNz55QPRyPge6WU8LMhbu5cZ6RK8GkDNJFJSJ",
  "key6": "k6KMbdU6hACKyESN5E8AjgRKaLcu5GFfykiphWMfNdwZtdeG58QjZLSaXtMcrjjtv7X9FQBQ37DS7cx9rH8iUa4",
  "key7": "2aH1KUP7SN4xRWyjvjRCD1EVa4rHgzdQtzeDQaeg8bKnioyKAVfCXRigDUNJdxTsTeqZuq4xT7vgej7gjRDbGhLx",
  "key8": "2Jebv1gNsxwcHEJnpVYk9ckUX6bcwVsD6PLRVuvhFE7gaS4REZoDMnmRATfjWYkT6KaV3vf4GUVAzFz75GkEAZhh",
  "key9": "3wBGtMC7dwnBnmF5mrb1MB71FYME8BDPNV8S7sz6RuS4bzbaKYWi14cBZC7DexqLTuo8tUKiTEu6nPM6rRHSSAxB",
  "key10": "3EJGmmeiTtGrtUXnGC8sv7JJdJQZrGbYx3ttQqw6K6tL1GLbR7uTQctDdeRhYYwsLi2AZTcUVWCzPyBypQDLdRLv",
  "key11": "3biVdqDn9oKq6xWc6cQq54TsFxKpzz3dGLL1N2AWnmb3d6dwar5PeXDqPVhkxSQF13gPcTfSnH9AHDsjkL5pNwv2",
  "key12": "2k372j57rHuvpPMvHnY47xXuLxYKyxwVBTaPcLGxbdvPymbb9D66Eh8hDMuuPauDE4iWnMcf5svUK6AYfNDZ7hdG",
  "key13": "WiGHhNqCNZAAyeFSKy6U3CvndDjnJZVfaJp4P8mh3kPHY56NenaU1r6i8jVfe6X6n7psdEk2PPdDxx5yM264kn2",
  "key14": "4Q5nFRTwQAfrAHSofg9UGWf5LXjvTqPt2MDPfn1LngkW6CkMPSKH2s2YPRKCh2qo6GJoZfkeGRFhdfFtwGbnC6CY",
  "key15": "51pL2xsAUZfNoupU2PjbcZ24zdc66ehj2hQnMtCvsM872WAcgGKfYjK5yV1vSEP83ofrSHwKCjd4ikK82fC1LZsu",
  "key16": "2PEHG2X98y3ExyD3SKy6P9AXdVW4wgHcBTLbuu8stLCjy2Ce9xykppRTBWdXYvDTqNxDSh3kGdR71v1ocJhWrbQe",
  "key17": "4tfuLEkFWMwUqhxj4kH6xdfkgjgHfg8ZqtYrwnZMeyLw7AmvBtDJDQWMGaKU3P1TckJUxBL2cyC5bpzJnYSZKxh",
  "key18": "2rW1T7PS2qYxBgJSbiKiR2eyrg3Aj8MYJ1LySi3ScboqRs7JETjWeMB18xHxicVaoYdiccguBZB156JiD75771to",
  "key19": "2pgWAd4rdFjU9yKpLGHwXcvfjG19kU6abXSXYBzWinXmRpb8TP4FuzLYWR7b3B11PfJLYmLrwS5qsiAx3kZFK55e",
  "key20": "c9Bw11MXQ3RcNxXaYJewkn6dVgYVe2wHsCBgaAbp1v5PozC8SijXzQXiWHJYwmzaVg6xxtwqRzyHnhAZ47yxLp3",
  "key21": "UxNsYUeboJ3XvRvTWb3bG7R87jhT4CA7QhF5EKsYpiyyCqbqsrKTLzLWd7Y67h7746pUL2rUUWdB1vkPqe8sJNd",
  "key22": "4PQMpybexTPBGeCz63x3X5QEkXa2k8KFKZK6kVVJ8TYvwYD1HbMJ9kcj2qz6bTfPgarQiFE3j8LX86pFy6GzeCia",
  "key23": "2dnvQ1uoXg2uT6RyXqgm2WYkLGW1ZESci1pjcgBQYe68pW6Zn4pZ1N4ArBQwG8s9Jv1Efsh7HnHGeGg1g8yjMkqe",
  "key24": "FDS4CmMw6itiWqhsXDNrmxVt3hvWV1yAhP9SmVr6mVYDAG9VSXmgH4TPnYTqa92x1SAfsnr95F6TEgSw6vGRuFB",
  "key25": "4z4bNyT3nUNAT7XY2rJJNG4t8Q6giGq6tUtmqnyKmUQgTo1BgE1gJmRo8nWccM8GdiCmVZWWsUwkAKhfzyPCqU3r",
  "key26": "2arM9TYMuXGQMz2qjyguj1RKUSFnKjBYzNpk85ZUNqnUVYnpGDAMarmYDNSHiAYM3KhyY1He9rLwSyaEhJzfQkXw",
  "key27": "53JDfBtdVJMA5jjXWz3hj2msVV4wcvYXPjxnGvxuBp7oax7qHPW3tuWZw98cQtKPQZpnGKCkJ7phyx7gkF1bYtdN",
  "key28": "2woHPh7ms1YwRjBn4J6gczUUihtb9k1xEWS4r7wyteadCp3Rrowb937SY5wYoKV8XB9NPJKB9Cu89QYZ5CrZ53Dq",
  "key29": "21X2tKkiXgGTo6jTKGKAA2VC3Pmm9SZTrSMKVWVBdx7PFvhEc2UxCToScqsmBd9pHzsCMXtCiDuxSPqn421hGJNQ",
  "key30": "53uLn83WTkCVwLDiBvyPtSPiUnEnMHhiRDqmVtFA2Vpfd5DmyZhwjXXp6N1LM35K7RwCySUrMSQi9jh3m857swSM",
  "key31": "5F1FdVSEcXJZKkN2g6dwuqzUgAhMfjGtaiMkMPgKQ6iQFzfFFSTugww8n3q5rPwj8xNYwrEDZTsWg1ZqZ6SM3hrp",
  "key32": "2LBsqzzchEYWNvuJTzZXxMCrxR69N9CfgBrFc3kYuU952e3DgBfdAcXV588nfAxoLne3mScguCJNEefvah9VaQY3",
  "key33": "5vQBadCvnWnLVKiBCyzGwR5R4Lgb2qh2zUuHo8cWokndjTg94ht8o9k4ZqVNqXvVoWT1VnWbc3rGQc6G8kxPsC9E",
  "key34": "63HZo3Qr2foHg9FnuPL6hG8htHUKs6dDyRyrouYYA29raFC5gSV3xu4cnoBjbYrmWoBW2r2gCQAg7mhWu7fDvE2A",
  "key35": "wUWDRbT26jvKoxfKC7nv5GccDe42CjNKYAKTSB2ohuKJ8PeRHuyo371mtNTffehyyDcifEbxG6SNbyjJgNjz9ea",
  "key36": "5wRDUJU3PhYdsbn9jAW79hsuTHpaSV7d6FGisYXmaCd2RDmdPHU2874zGmPawV65V4WHBsmHMU6wPAB979FPNpt3",
  "key37": "mbjmi3FrXucxAYfCJNEM8nGu9smQPecieymH3aAGz6sPcYKWfDdAETXbHCiPuNKPPYyzDbhC2TqDt2ZDMFHHgJD",
  "key38": "Af9U8gxGNDnyYQJiBc7Wdr3UEH7eMxDiguUonAG9rsqrDFxNZiZUn4XHn6RK51bP31kZwfdr9mKSbQvcA8EL7Ba",
  "key39": "4MJ882ebKqQcsM4Zv196KojjLJewuBL8Lg9bVQuebhEZZ3BsKPdUubfAV1AB2uWaUPAKPToaDnYp6eAiThBCSnd9",
  "key40": "39oriKJKPcR4gRkbgeoKCRD1Y3EQJQJtg83fKzGGf2b5KSZRVmkw9NEhdtH8iFKNShLENKwz4ytEnTQnDZNE5dzr",
  "key41": "5CjhQnRnewTqhsZAg98mf7npLiSCjbCDDskAUnKvYzVdBCQwwd1zS5GKHEwd8yFRambRLJsQftg4odKW1vJTK44V",
  "key42": "4pmH5evnWi6odJwjPHJvvjezSDz2bxH1GZp2TDPrzEtJ4vNmMh7EwrnwLat3WudSTvSd8LMeozdPFSpu3Tr4jNZp",
  "key43": "mmgdDNaAR9YmLvdJGo14gdntcuTFhmA8wsXBBeSmxLrTrhzuD4JDWMy9oVFMupFeq8tbAqZnPCSwH71k86KSoPs",
  "key44": "5ZxEfTZBvUXc1244EQcTpFwvp8dpLaYsUxbZ91thTP8Hdh4eF7mSASSVw17ZpqWATe1usqt4iKgMyehKtZ7AwNKg",
  "key45": "bam6uVVri9jZrKRN2gxGCpt74SXm9HLcdjv9QSSxFLe4dPTjtsRPAaL4xKVe7JBZjCcJDS2QTpLSeKt2jcYGbvx",
  "key46": "4pujfdGCN1E8sYTaqYPxumxcC5yu4domMCNd9Mx7YZpGsquJKMiBbNeb9Y8pjXnQDnbQbYuGRyeb8MHFNtqni39A",
  "key47": "4w8qF3GUcd7eSpEXjrhvdSaqst1AZocborsr95VizLPdnMyo8DDZ7qnkS4fso32ibX3rn5CqJGmd7jX6t4PiCY9o",
  "key48": "5X2nbRaEpzFaEiBdDzQdqXwLTRquT7UH3WyX4KpLZQ2KcXAyRzYX2N7xj5shiVTqrFKXkNetHEPctDFRepy2kSDD"
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
