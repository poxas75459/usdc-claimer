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
    "SUTXSzVZxFALfeHY5bNtvMovigDzMdFrtZD6Z94anzBpjCjuRkzNXMdvyapfRapiec7dPDK1wRNR6GXDBVV5gFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBmDupxuUM1hCb6qMmtVVGMYzsQGimrLZwLAnP82NrXRN8VbVwmpfV5yQZJ2sRn7AFS1ePfcdmz4HbnxdNqTiB8",
  "key1": "EBPgpjZHPWb5sob8cmiuZXkPRNLSJCEHkgRAoqP1D32nBQVgrSu2aqc5Ht4mZE5SabqX3LAeA61Dxc3jQd6jUJ7",
  "key2": "DCmpZve2m5t7XS5pVF8gu8UskWtr5CKUfvCXzDfeWvqBz8sAokh5zJvonAy86wrTR6WHq2tZbWhp5iZrcA8F535",
  "key3": "4Lgi9RgZ6qo6p7EtQx34jMsWYjzRKcKKgWVuGUtijp1bdmJze6rL2W1eYZfdoSimJPMZ7HUsvj27BQuMm2ZYt4eN",
  "key4": "2Hk2G2YcWH61ZCcTh1bhHpABVCE3vkS3AfJiAkwyXQuubad8jCr2HwwMvPJTEHMMHZHoPnR9BtBjxVD8HMoyJ8Ps",
  "key5": "54bRg4fGQtC83dPqxzHcyksRX2yZTjXa167eHpZW5q8Ask7KsnVdtdmsrpiiYwsdQFBeY4VHfjegeRc9k2XZXoyf",
  "key6": "5LBvDZJVoY8V4dMbTKKDme8AZErpVtmVZ6YSEGxaFfCrcbYtE8mEDvzp66sABp7TAcGqW5RuRK4rzXDRwyQV3ott",
  "key7": "2S6dJCZZSucEu4K6rfvBCGR6VivxjQmTUgx1RkWm3JqGwv1xGwCzSgWpKkKbXNQAQXQeSENCaGYUzkhYqYGxqR7t",
  "key8": "2H2qHD4oh6cgRnYU1gqU7AYGuqiF7MmGTTU393xWWCb5W2bpYDEJbZs8Haz5sDPxYurzSHM7C8usDaa6XUURJt6X",
  "key9": "bvGX5ox6KTZ3tMgaZLwjdB9RV7XzetLHEnaqMZXS258yYQyfU6VKBou3nj4br9g8EirYhLsQHHMjCuDgMkQWAei",
  "key10": "61KjorvadL514GuJWwxtp9dkHzGy7o5YqktH8utyWW8SCfFVZPEiD3BS94kBAZ28dbL7287TxAex3Eac3yrUBb7U",
  "key11": "3SMxodpXT5C7ZJoLBcaW8gj5twRw6bUbyjAQVPfccWm7LdLXfSbAYQ267mAXQNfDiWXMD4RpFjSwQukviwKS74Jn",
  "key12": "28F8hdmC1G4LDwuDMbhzAiKppLk9BZSaeZn5dDMBR52mqKYjufp56ohS4T62YvFyhAbfAyR7gc6PwLjL282SjUim",
  "key13": "3oi1VSRkHgWrcfWs5GNFnVNLK4tW13TrpEv7XU2THm5yCqA8KdgDdybY31QUdLasrB8fSrwrgn2xGPgKbVGSe1ZC",
  "key14": "2dcFQ76XKeEkQ2KzP3YN1hshU5MQcRLnsnaNsJKB5weQxYUgAMgDVpoc4go67yaUFzf4FtfyvBvm9oPCCuw2CTc1",
  "key15": "3myFnph9VFeWSdp64ad9pPnpcz2jBZ7pSV6uuxnHftf8zz9VW4xhgPLprwhYCoUqpk3LSUUvWbNgMFokYSRkRnSN",
  "key16": "2qmvvLsMuzLnGeDzNPziv7yJ9UUQgFXLmEU4mkWJMx1QUNeDcZUrMJSyxe8RrAJxrjRzhpyrTRMpXn9oYvuwecHo",
  "key17": "39YNokBVQQTT1rxVq3muE89JQeeXmubGbwGYo2hZs4Z8aZVaYbRNn4VaQPQrhNtR86dXqfRmQ7iEZZfPF4RjAb8L",
  "key18": "59dNAzp828zJTMHoPSDKQ2iaPhWU3oDTK1L3HiFocnPuzpsKbS7qmAka53D1zKoXgGX5K3X8iMeqkkevYV1qZ4x7",
  "key19": "4caeKBMpwHUaSh69VrbTTWYrgNJafrrLicU5s2unu6rynSqoN6pHADSmgFQCf5okifpFXkzb4hVLCvKpzqsTjNqM",
  "key20": "49EKKV5KHdxL6k16a4NGVrtsaX9GySA2G6UUPjoxB1s6pCpfjN4TJfM9khGnynEhidGUby3jkvGUcpxHex4mikYY",
  "key21": "58cjGbB8vbdCvdjV8J7SkdtMUEo2YTxUwt5vM6RJpm9H7v351uZKCALfMw2dThDx1jxmBgj1TcBwphDv9V3ayNzY",
  "key22": "4PoJMLBDCVuEoMykhyJyRUp2qD2S7hR5ZsMmwuTe2yx9azf9ppRxcgjrvsf7jMoidcFQiaogz7fZ6S7ChnjXieBP",
  "key23": "5USfMHmjDyhp67HkV7BKTo6tGZktt5sh5SqT7eFYJGfEJUrwnN5BNkGUfr8xac8yR792DDTn9w5AZBUrMLbLWw8R",
  "key24": "2fnxsMU413jNLjfwfrcYbWEFgk4hNezB8EH8XfdoeYmKDNMEaC8kFrNSXG37sVHRzqAXMeh1ncFqBP7uebUpDrLd",
  "key25": "3m3hJYZnGgzkZjNobDF8upKTSXvvEWfHeF7n1StPW37DRuYWX3r9MuhUFcsfhP8EgypmnPHvsXe3ReK5a4xHU8ea",
  "key26": "GWfwv1xamX4LS4iEzm49c2QF7X5wSh8ZkJbQ4Z6Z6rRHVHUiDTrmPLqwMR4JqEzknWUpSwiGs4JfZJ6cLQrKfKd",
  "key27": "3DK43dG7JWn4t3bmAqQe9m7j5zgrHcJiGb5oYg7seEXC65RxNBDApBA4LEq9ru7wJyrrfJ8Xw2P1kC92KdU3vC4y",
  "key28": "3upcK5dkc5neqooRihoJD4GwSTnXjHcBGt5cyrnXxAXFVey4eFNch9VyKzEE6j86RpTnP7dabXgSmtX6K9TdUzq5",
  "key29": "55zU9nnRU6tVGHq6325GjapF6kMu5cF6q5GwQ1wf2aBLAMXFxmYBzJ22u5s2fAaHQCTGkBmRdW8woLsTzdLLEyGe",
  "key30": "MCyfVrZcatBifYHR3vV27W6JCdQNDZMkvr4nfCWGFUer9CfErBimmufmV12Gp9tgpuDm631VVmKzCzXraZGevja",
  "key31": "5gmamdecGTLe23DfGtB9DsscoHF4Bk6sz4CBMk7t5ecR7MipaxKruUj4pRBuwKPM11RuUWU9rREV5edmuixix91z",
  "key32": "677ybscMKji2mzdGyYFVEkGowJ8hRwnJMb8kN4fFcHbQVzFHBDKcsRFx3BaxTstRV7a8jMHRpQkLCNmZWQkmT2BN",
  "key33": "2uBxcCYnBsGg6F43LCwbr1BHfQP691EoFNXKPPiPurfqfXkiMwMrG99dZgZceLCKKLd6ew97KGWZet4jaAcgcKqT",
  "key34": "3YVojhmbseKfsSEqkadsrhm7w9M58eFMNnszbabPR5WoNaJ9omk4ociEnHQNVNpQ69kcbncqV4PtE4W9B5Nb5tux",
  "key35": "4Lqq4MCaDu24sXDv4q62fg6VCGAoiDgTTPhuzciAbbHx7BBSvemmi8VR6BbsJhamTKX27tkaN8uYnLDNwrgGvYHN",
  "key36": "35fWsEUB6VuJG4xiWv1EGXBBPjxgejZFdqxTrwHvXimJXFyj24oWYTqgBPEJcJNbTKvFkWS3iXUVodQVbCtB2wBh",
  "key37": "2F2EoxS3rb8q7BQivFdeMUion6JiM7sdzj2rjwMbPCz979gCiHEVJ9NnskZ48YuqQq4sDWwtaniuLRKbiCLQTa1w",
  "key38": "cMLpkExWKg6gMmKMMUdccenrjG2kwwhuiH4ptrbo7QC5ijaqPnL7JcWPf4eBhLCMHAFne1vzHCru1fbMV5sXDh2",
  "key39": "2kY2XXNSvfLvruYnKGrmYiRvGqkMGYohc6o1PRbhd8seqWdRYS4ZWo2EVxXmXXvFcsSGkxL6TgyATmTgNyyDwJi7",
  "key40": "5AzgqNkX4cbiSbxBG48YMP7nSXf6iXu1Xsqsik1wctqKNGUMgk6k4Bs3cJtEbQNc6JndjN2oMth2Jsw24b3PAXqb",
  "key41": "ep5pZy6yzKbe9sUmTwqZCwe1s2ZjcJtcEz2bkzGb2hNZsC8aws4RCPfYkRfYNoHmrd9t31LHAwmCTKBeGzJq8iA"
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
