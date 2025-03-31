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
    "3423rEazmip1Gds3SpHd9RcqJH8VEkQUdEvP5LpJFf6dJkRhQWovnjd6aLAvRpg2JnbcmrupYfyacfxAmJsx4XPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoXvMpGnRDrwRktuPR7yTSZiYKuktKA87WVY5Du73kZHCXam4egFBPq8PS1Y2mwfpkC49svrsxEiCNpEesyVxTX",
  "key1": "5t3mLtJfspftwxhHuy5y69RxY3sPeoqwnjw6RHsuqT2gwcq5Vu95LnVQvixmD428Gt3fDvmERaivtaQyVTBvxtvQ",
  "key2": "5gnfbQg723ggTNEfYm6XUQsivpvK5cCGGuPoVWaXgGLy5EgxQSqypRxbaq4agkK5BT2YeUpqNvJcmQ8o8yWPvmFp",
  "key3": "495qRgtBq5pVg3dXiLC2MMaqncGkti1nsfigmoa24e1UhJjLFboHwwYAWvfBGrhCi9EQerG12X6VLse6pCLrUYdS",
  "key4": "3ZXf8SWqZnfWvF388uL3chaNdf5VRY9ccr9GKPVu5JDioUh4nVnShTRivh4YeSw3K51tmgxpoo2qVcpS2C2quzJ3",
  "key5": "31PmmvYCJwzyJhgJGVHXgtfz7jxa5X5WdMTErFZQYKGre2isno3Ah6qVeYHGRzpCCrjdzmmyYQzrQDxPQTcjr8Ay",
  "key6": "46WPjkDvJJy1W1yY5Ba8V4Z4MpmQE3D4UAcEkYHcBppeyLcB7RchVjc2aqnKAHXAXXT9vzS9cFQqKHVzfVvugeYk",
  "key7": "2E5QXPyDb49tTLBgtTUWwJpcxjApJ9y8swcisokMrXFHQ6Hw7NqVAUAjyg8URefj2iFuh2P6phRpAi2F2DxkXPL7",
  "key8": "qmkhZnrryc1iA1r7oYeR8SYebqTYffWeZdjDphxbojACjrGNQz84RBMPFnBWGffRzEpxSSBWERPGisgWSR7kRMr",
  "key9": "26kmc8mXjWYof9P16vwaabCJkJcZ8h1twimRBTpgFYKKWSKVetuHVp7EDD7LzaayWGy7qU9hwensm61AG5DX81yH",
  "key10": "5xHCxF22zZN1Y4iiEAZMZ9YtXafumEsmFBSHJPuBHp2PZxixA14taP7KnChf1SbLwzBFrwkR1THkH2GLSBcgCYmp",
  "key11": "5eCkqm7g9nMXyPVEjrstnJepmXXHf5LrigRB9FH6xVdoAm1ECEEQWDks2DWdrs6Hhsg5nvRjriV9WRjB5NR26Vxi",
  "key12": "3wBXnyo5GGcFy8hQpnNuCjsb9ZX8HJk4AQSGtG7Eqya4iciJSGTmrQG429Y2YjwPK3Npov4zHW4XfSQEs5tDAFuw",
  "key13": "PQerZh1MGDu2wLLzdAa4DznwaY3d8ySbDwnr12m3AARVxBHv3R9sPQCk6bbSFzN1S8Hi4ZkkSAXa99emygX3a3s",
  "key14": "tF1fNHYP42ciS6wnwwzmrqLDZzdocukHhYQcipytrCfv3DTtxhY2r7fmAYv9yCJef4EwM5mECY8WL4zvAxwc124",
  "key15": "hy9vTicddPvqNJGdZL3cb9Y9ZZS1o7p7PpBekAzc6QuPxyuvhuwL3ATorCQJHPeDSzbHNkqkAXFdykaiNonCUD3",
  "key16": "7saEb97g5DhyP6TcRUWKyEaB7CoWSyMXnLmfGifJDjhSywp3w5sw2YQyb7HsyBvc1X1CeHvYVcUEDkRB3DzxFHT",
  "key17": "52LouWoyTc5Vrpb9CS9f49Zg6mqPaxb7gbThDVsnzbiUFe9Rw4JiwikkQf6QbMqhgFVirn9DA6DxEdujqBw433ih",
  "key18": "4Zic7FXsb4WthZpan5D84yuugdejeJYyeFJsehwDgHRTXBrH6kUAEB8jq93BkRpZsSpSmsr5rS1tr1zfjKZNrRR4",
  "key19": "3sfpKQHTjtHwQdib6E2bt9S8tcj74d3xX8ZBfMcBqiE896utQanknJMeMkFegq6CUa8V6H4o27KTneF4UKn2eNDG",
  "key20": "2TmddD9bKqMH5FHZVmWKnybRfFjuRGfkuYcKBkpSFdwnqqUKEbdT13HRyJMKoN8fJsH1HvMrqUed1MXYAtceEHnf",
  "key21": "iLQcnxyvbBeyXeb5FRB4BYc5cfqgpSrdgqX6pF7pXR9Hj94uoZx7wqtNi59fzgS4GyLhjV6wmpDPYhpSKDSJWUT",
  "key22": "oVUpezByees9hgEdpnM5q8EUo5pZaWvwWsHXzgVmBXbbLpqATjZN5YzN7MZDxRgaeS2A5UWtZ8DUu8mQe5MyhVK",
  "key23": "62vRfu9qj5RBYnhMyNXACEzbfZXh3GptGimBt4bJGQXDKvm5ycd1LNre8vXBfj5s3xrkrYy91FiL6jMJK84rnBKf",
  "key24": "4MNfw549TytxUqGWDFLDZpJE8vNu2ps1wemGdiUbuAn6WtbGEstn7YYWJkf4G59d2VyfXejvVbjRN8jHZXJJMKPd",
  "key25": "485cEtwQvQL18oLKyGyAgEHhVVP4hwezGFY82djhpaTCxGMnZwnEdzQFLxDxZ9Lo8aSzMYxtDNFR4BdHzqXQiHC8",
  "key26": "5bbr2FPFMM9V3wpv326Vi7j9XAnKBA5pUXDywcpikptNfnXYRhxg2aEpwXNggqkiKVsxwJgmzmWx9fjFQyLyWSYV",
  "key27": "4KUk4Ezro8RxQ56MbpYHSNHvxAuh8Stw9ingi7LWhTtpPCdSy4CkgiCevP6B6pRf9VgZeL24xmh9po5NY49FfDaW",
  "key28": "4jRo7obUTq9KL8QLzHGy4n7V82dWnmhx4DbkiP8S7EDuYSkFbTqyrwhS4m4WZchPzEWgJEDNkiBojKNuo4pSmiEM",
  "key29": "3qUnxUWbaeT6s3azAh5Bs1CfFHAGzCcZ6RPHfCWQdvS5RvET8zxAdivehN44HVfVYaoeaQ1feABMYTYDhqLcd2mU",
  "key30": "72b68i1T8aAn36epm7SPsXYbwyjnyTMAs429AyLfaHfxmowzvFvBT898fJ5u6MuTAUm1arz9M6EMLTrGSkUYURz",
  "key31": "5VGp2R6gMVJ2rXgsFwbd4oQ2BqL5ApMbnXPiFYYaXN21CPTE38E9jfgUrZ4H7tvbg2wjrCG3E3DJsAN4M8YcQXME",
  "key32": "36Up6t8uEkCSKHjoGkkyyeGJMZoiRdAgH1c8QJ3CcgSQ8j7i8KXVX5o1EGLgQ4AwEtT4aYZ46ZVWUnJwR7LK3TC8",
  "key33": "3H68BQTXA4R9nTZSTNxcpsSAxMu8B6KaBPASgMBn6tH1AiwDsoc3tzN3pfNYKPu2Rkpzy4juHa4MUBtewQAWQ2X7",
  "key34": "2GoZoUxMMyZAADjNLbq3hLdc3cGXZpMv2iDZLweLMVnCWJznsRGNPuCMDPo3GgEvNqpjnFYdxrzx2HsfxqMZ5wQn",
  "key35": "5ypLMmLkAosgz2bTzEUSMzhP1CoPW4nXX2zHe1mm2LKxr2GmAasPELEbiqymLUxKkLhiReP7NoVLY7sLFEoN315y",
  "key36": "2rUfHXNdFchmfgjWbNtVZu98Gdq152m6pPAKB1YndHgNqBpUnA7Us2PhFiEpQc5G6nTYd9azWogHiVUGgiD2eWbR",
  "key37": "39YWnkwhLJ31N2ejGk1UfBeLEM6QU5X8jdjbqnFXaRi643EANRNk7Fp4E1uTQoXK7PkesfF7SrTpa9gCNhZBN59G",
  "key38": "4KPsCy6ZgFkR2L5fmsPGsnLK2MnWPzVbkAmNFMpxGQZtpnCS265We2jbokqwJTXthLBGGgwHwBH6rjNRcPcbfYA3",
  "key39": "2Ju9Rs3DK1wqSGp4gg1C6EX9bvZq4k1CzRXujBF3ygk4TRit6mxeYnKB9eYUif69uw5HXhr1eucFRHZfrg3Tda2C",
  "key40": "2Z8c8H1eFziWW2iKvumQNjexoxjEmDs3hz1QzgE2ynfP4jXdsaN3dxBTfGUtiyXLka2Q5VpRWA8oBLZKLMDd8b5B",
  "key41": "3dkgQU3ZyNnF4EJzYKZWtN5QjxgEXsrkeB4B7yRyABMimBRmKfFsTNguERfbBvNwAd1nsHgjFqkyXAso5jLjvT9P",
  "key42": "ePu4Z6vQ7p6nVqFv6XYCCLQDYAEuvZJ74DFw6HFWToLRdwCTew5cVfUqSw8CLbUaHBKQdykouybc6kVprbsceev",
  "key43": "2A8TXVgUxshQY6sHRfxgDigKWY8tJi3656QxHobvyj1GPhmoxFh7dApcSTirMHWVfj7fXkRuyH21W78RtyubAiaG"
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
