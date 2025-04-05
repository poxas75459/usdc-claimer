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
    "54Sf9NrjurWS9gN2ca5G6RnJRdiVgWa19HdnrMw4tKsLzGGSYY7ozRiiLn3bYZQSNasA2Kqa6vXDbiagXcZVuh7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33djPHhjKJwm9jFp3gafJ5mXT8ShmmuAJPcumyc6gDrArvNb7kTMGHLXF8EbhwLYzFM4JTqu86xt6mnAVj34qmzp",
  "key1": "9c8WLveN2g9qvBkqo8BBZy9kH2vQz5uDE2MB6Wkn3Und4YykHNJHf3dRztX7WYhRVpLeDVNqgMKgGcH5HEVSwiW",
  "key2": "63D39qPTtPJ3YoV8wWK1CrvHa1gX3HvtmSHvExPHVtham8v9g5NdPZpizjH555sywV5NcBpnAdKxY5a9ao4CXHFp",
  "key3": "3fx3zoRMjMce4sH6TrVtBqxqm2yqqtbHci1kx6wGGfDSw7BzUBCZteheXLpLXwWwUywh39s7gGVZLmGRYXRafTut",
  "key4": "5VRhkBTjqdAagNgZVtKuJFsoRSCvBDknS5XLspqiRyKXF7upkjJEdBd5HC8TswegUWk81LSiPBCVDUorVWxK5y1Y",
  "key5": "58AjWSmA6if3dUFAzobs5Bdp4kFhBoUKG7kLLhqAdp4snoXXBNvYykotAi3TxiMq5H8BHQpXsuci3X5tRukTc4eM",
  "key6": "4CYxXTJE23PhwteUaVQRe9UYcMWzKvthX9P6bZjRBdkDT6pLA76bKFigwKfXbfKes99GzmvFX4ozCSEzL8K8UJuh",
  "key7": "4mGnnAtzNXMpHPCtEuEfy4j35Kb78WBcyXWL1DDQ6mgotQTVxTZ4xmut1Fx41bs6T3kwde4A8S8Lg7dpJjwcnXqT",
  "key8": "3fTorgbRx9BKu7vU7x8qo7Dy1yPtfqF19kE2L23XEfxsWN5bZ75jd675mkY95cjiuXSKnPhadWsS8s2UoRf9wGYZ",
  "key9": "4Xnz3NotmK88n6LVxJFUSQQCHAzjbCoSLNjWY44zbVE8sSeXmukZhs1X2bK1g4XjmdkvM9wxCaqs4Yt6xNr2uszm",
  "key10": "3szHDyoLmA3Gh3xeEeAJfbGGav6gjcuLjVFjDMbAzE98CnvdQDBG6GYgjeMT9XSmgxoEe1JRQyJkjXQSYUJWbAk7",
  "key11": "3gGfzRQHK5pE4fHnZh16NAVKPGYeFwPRcxBVpvZBtHPN5cff1g4p2t4CG1X1bJhX1zCA5BUJ3sJQdNtkDjizh9VS",
  "key12": "3adyXFX4aPNJFiyf4c4DwbbcxBTcTB5PQipWQc85jDii2vHCiBXnBwJEtDCDGjmvnW3hRZMaHu1PtgZB27GSR7VG",
  "key13": "2H6P84GorirPUfCJCYAQF5XeVBHeAoU4irXZfqtYZSAaYtUTE59oBptQmD29kKFRXoLLXkjSYhggKUF8mtcijEaw",
  "key14": "6XQsfRnzRRwadFyFNBr19qCyn9uie7Rm7fQNJbdFBT4F4j716uTmFPyNXX7RcrL4NQnY2sKVtPwTjom7se4JBch",
  "key15": "5zo6L5fiXq9S8PKuhBZLdSUZZBUPpXqVfv46F37Y3hsYLjkzYus4kbNLrJamtbSXyxXY2Jys7dHFiPii2xCK8jGE",
  "key16": "LNuM1URZQy2N931d6JkH9UaiDmqGdHpbqLxyUyba3J3KE2nRftPhX22KYufTFWYo7eFiJYpodrmTZXGFy5m5xqY",
  "key17": "3zp195xsmy9MvjBTkGq1ap2iaS6ynNATbfpKeodsvEtZNE4ic4dAbaPmKpka8D9MN2xH1EHBrbgTKrT6VkFfCZdo",
  "key18": "5dREC4T8CJNbUAfUsbK5dkoYw7UrrAur1uTvYpacsBadu9ou7XPoctUrD3SPxbhs1gjCSaA4C4iHWWQht4hPYQNr",
  "key19": "2PDPAEdzMwo2F9Tnq9gsT662rbTr7eFhPcbcDA5thaZhH89GGKj5GvvcivhhTVZZN6FUrJ5UvF3u2ZVy62VmNbxi",
  "key20": "5JAN8qPTKDSs4HqfFQe5mgM1knyeTAED4rgm4aFNa9eBZQBKBnZWQVWz7UHaccv63Myx3k7D3GTa2HRGRQz2fayk",
  "key21": "t3DA5d3WB2SpUMGZm2598M8Ncd6JEAnC4WE4DNt1UKShRmaV1Uet1dsiz4LKSz99e4kmzcQ2M6pz67G8gRDvWeb",
  "key22": "5ystFMsKBaAtH5JwwEYPL5KPJXMahTGZdHEziZuyZMiMmr9cx5Z1e8fM633q3srjHMPsACob1zNni8QEn36wPCZr",
  "key23": "v92frsrRU9kC7vSBrzodfXtEa4cG132UipdrNF5M1k61BNSeGGL6ioQMvd67YkpGkGRLgY3UN3e5Nq65PWfjHsf",
  "key24": "4wUb6cDGL7p7TjM9BztCWjAx36zNUY8M4nk6mav132muZzgcW7LTJK8kGwwYeuGw9APNDppXQWWVc66xXJfBhe1h",
  "key25": "2ruWXhEfE2eDkSvMJ62QXfZkeH26p3k9XUvSeGqJenNn9kBxcYdAVdQCW6diFP8zizGSrxfm1iQXGJEmoXvw7P6g",
  "key26": "4sfe9tmd87AyqRgSRoGaWkM5yhVGxrDqhxiQ2xo9vBLrTj9rZTeJULoRrx8ZV2P5aN2tgzEMzm9n2SF6WFA67o5P",
  "key27": "46KDuaZpTMpQseBRVdWq6PDXttePhodVJArT9XYEWVg6qENXAYhTU6eD15cYETvr8hHEfDPbXZAwb75wTmrWenWW",
  "key28": "3cN7Tn8s5j4Yr4e4xzsWRkb9XbAxBp4f2J6YdvKDLqkPNyUYdBZHHYUX7XBkipxvtWVwQEhGuJu8j8Jy6xcP7n8D",
  "key29": "2RF1mETgqJs3V4v1hhDzvee2378XAP31yXjfBpRNsqCN8rGgnvfHTgcgbRPVTuEJh7wRK5uNTsDWMHUaobiVT2BL",
  "key30": "4tXV7GARsd1cAH9WvNZZCfeT5WdtmFhoM1awBG4dtA5J28PvBsHNpvJfCzAHdhCqM5jFNZMPpRUzkiE9FAm51k4K",
  "key31": "431hTwh6Vw94TjZRo5LQiNtaXCsLYYcaMswKRfqvkXGFsx4KYPzoEEsxkms7jVa15HEYd3w6hXTTAd2Abh77UAtN",
  "key32": "5J9Ci9hymmoMHcuGNgXVxxqFcz3eAzrieepeT3YUnRNU3Zjse9R3w2TCzYj5VAzPnzJrttzhjgS1gAbqEgWwnxHc",
  "key33": "2Y6C3EnWp3A5S7K1U1nmjAVt6jm6KgLCenQSW65wgMDQBDqBHKPeyQ9rHy2X1YqRAsTRd4EyN4z6wXWePsaTeMpm",
  "key34": "2ZQeThjNSJLFzJoECXWTwGkhN2ScDaRCTiuiM42UDWw2JWxujxq5ueoeVnLRAU4Z2ZKY7wMLEQf3QhsTPB471got",
  "key35": "uqmN1HE7wiXsVFryB5ozVKh8Kv6kZxE8bcEsjVFjSSZELGDmfcBS2N5jC1nKSWKb8mdsfPUGiooRh3TX8pMhq9f",
  "key36": "4r1R1xzj5j9DVD9hfxoEyHVAmxTeCHXTM4H9dQ6DuMbUfn1SgFwtE4GvBJ2XPSsN393UvdKQmys9m8PTpF7RrbEy",
  "key37": "3FNmtDvGz3b2Erbh48rqxfToqrVCrUBk3ZKUe9YTtxabZtxQC8W2HadP7k4UE2LoPPSG5XmNkd3EYQhDRS7sro3w",
  "key38": "2XR1HPcukN5vHZ89ZghvXGJJwjR1upb43eWvyh328TgTPzJppjtQ2ktFCgDid8ihqvs7hMFrVGNteTT52kx6kwkv",
  "key39": "4YeoydCDWAiiFQ7EZXqhHv6wLt8Jj6EuUTbgZhPWnmmGPreeTUuuXgMxFztPpMPWdKk7pXMq4RMSzpq1eAhJwXFN",
  "key40": "37rRp9gE9ZEfsG7a1xLYza9qs9zrA5ZLDYWm9W84uR4qdy8pTXb15qLYevAjuxDHezA1smDse1S77TLxAxD82dGH",
  "key41": "3fX7Gp3JqimhUaL6QT6Dne587v9DjEByz3mNNFcQ5T489gxM9KTvxw8mXH15yYcHzQVVg9C6XmmZNhZ9GnZ7oTc8",
  "key42": "5WoCEVCKnmqShWrcYBwKB1pTh5LD13LtJRNgeujYB8yYuYhsFJQ6ivp9fkAuudb4H6U94hXadBSbvULReFd9g7j3",
  "key43": "3cxXHfwtZxJZrXS4A1rxjWR2jaZFA2nCoCBH151GAWDiMoKa4piCWj625GNpMgsNeqsV7mcsFts6jzR7WNY451A9",
  "key44": "kbRhYdn3CLgWB7pEa4uVHK3C4NvtHDcAYfpxAdN6tb1VsQHcZpR3X9v2SR43fbY3unCh1qqLBXbzgcLvuToeysS",
  "key45": "3D7n2Tjyz2z5oDGk72ZcVASDtdxqCksMkDXtni6dFYTBW1MNU5EmYeqsXPYkf1o8rEL4uD1BTq8DgNVXVdyuGVzD",
  "key46": "4ASTAuCQQM69mDfC69Fk9HEPdiyLKxisa9RZx1rMLHLmqZiDJVS4rnLudcudcsEhTUnW4P8CCT8LsfDP5zS6R5LE",
  "key47": "4h5UPYPgQhhwtmUuqc1WAKk5ZYBTGa2AXnfAY7YDZGarHRvY2WrbpvRtUW5CSCtSnkReQgiCxutERPwPh8TY7FJ8",
  "key48": "3Ji4Ha3UaRj8uKr74fufGvS8XJicEjkSwEDYKp5zj4VJAP8rDuwqSiLi3cf57TnQQkwYXqkFPxLxFCSQyXqq4TH",
  "key49": "S53zB5wB6qpmd59eLQVUhy4yjtA47EUSATrRKP5mcB69UTbfAXc3xp48C789usXhRcsH7tJrivLhL1HQtEsh4ZR"
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
