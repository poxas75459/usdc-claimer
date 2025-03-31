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
    "59BQMVfcT5CSLe7UBkqfKRoKSSvK3YAvFGKQJ2TAWfi1VNFuWuSruVbdrEDWjBSrGhdG799Wze9WUCuHyJ5BA7NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFcdLXYH3bsn3xAAwHMeLi5KkmaTi8hihrowZuQjHfHAiGRXjoPpe3eCSe1p7Dj2oq3n6XtJfFdYJokHdh87Ci2",
  "key1": "65RcZmEngZMBr6NhP6hTU5q4YrqHVEc9sU2obgWWTdW3w1D8WfP4weFPaANWHeofJpSb5JT2zt1sxoZWvG3gQBhk",
  "key2": "67DC53rHrE4rXJCR47vwY4ezRX1Mtof6ibkMmt5fho2KWWd25TjX7dZhX83mdZ7g5FFK491syxfb8FhBEoGvjKek",
  "key3": "3XyVtU9cA8KYQgEE7ubMvG2PMpUx6SFnDADnLAbSQAA3dem5ZHjM3wkAAmoW6ynDefudTFzVyneNsxYub9B3J9Uh",
  "key4": "64i7J2CqA9iVmbnGBJ5KkQSsWPeNaVWaZiu2aKbLrSpy5DfhvUpF1K7KUHmirWpcKyg1v7bXA8MkaCYgpmRnpxBV",
  "key5": "4drHXvPyCf2ZZN7ph4WXWRoGwdQgMETGPnNxwxowTNGZ5s1jniA4QUBVgHQGsBfYPaLzsdHYnYbMHxUxbnPiiBvo",
  "key6": "6Nkmo3MDPp6xqDMPvZJrbxBJn8f5mUXXT6JdfxVp2BospFLxnSnWtwTYFrJimRywZhjbWpdTSpHppRHaFYHXyMN",
  "key7": "5iw7A44jY8XeYLXojCsVA4Gy932htsGRK8vfMsRBGrYt2t181YVqu3AVkGvnciT6NogHSB84uAtGiyphQ4Vyxxhi",
  "key8": "29RLm5fvbJ9bb5AVkS4MBR95XmiE1BZFVnw2stweDbmqMBknpawh6743TLryrhjAE4eEnN99NGQq5L8m6A62RapR",
  "key9": "eqpcNCQigxnJTjvS92BStnVd9v9UQHe4Qs4sJSEmkb6SSserjBF89nWMoTD7863BLhXSpWvu8K4FEmqgh76YvNe",
  "key10": "53Nzyvabw2vZmSpVhXb6XsR8pvbMai8QR64nQAw4oFK4RHRChjJiTYMaRAd5JMo3z9qUx8nQcR8c7dPoJn6Di4UF",
  "key11": "2yZWzxw51EfsZJ5EMr8N7AFaogVgLXdbN1F8CK6yuPbRKrQf17q1rSPWNBsMTqX3sjCWJwcKdHJyf7sf7HkKCUwT",
  "key12": "3V63Rw9UEnbsxjrnSab3YoxkPtpqBAMu8mqVrQPYL7NBcXqNeFMgwNj2i8YQkmRV8oGETpsqncs7RtpuWnGtWNVj",
  "key13": "G9rmbR5iNJduqZPKPxdZav9jrcMeiFL2UQMhhdX8jJ6yjK2B4ut9XSPqTLtbvVriWu4jybVjDBJX1jE733wv4u4",
  "key14": "5nXSe5w2EY2sfnXqCBFYZx6LKYFYvxC4UskA14iQhS8YrDgkXKqyQux8q62ML23uhe2oD2hWX2bYMAzYERhdzwBz",
  "key15": "5ntAN55otYbCWZ7XGyMzMFDBtgvKgv9CQfq3o7taPLWTrBFKpQxjJE8gy3agm9RGrYJWTEpMhUGbDn1FAdGMiAQg",
  "key16": "2786CvFUUgSgLxjknKPLXc6ap7f8iKzHRBG1Sbp52g3hdXBZ8dxbsLzHP7PgoUcuBf19XDczK6hqeXf9Rw74watg",
  "key17": "5bE2shAFfhdhwkJmYLAmzcyB7LqWoi4uKm3TvBcmj9LnafPRxFc5htv8o56oD3QkQeExPyJMhqjGLxsVanKgoKuX",
  "key18": "4Q5NsCrYXk1aAWAtVWadVYSm4Tja5atqmcn4egBFL6un8bDwsyCZyLs8zPkSegyRkGZHidBGdQZhCmZkJHnWPQN1",
  "key19": "3ixQieFq7MgJf59ewn93HLBkYZwSPhDmrZQfBnTbZ6pmabNaKLCTKkyXefm46R18CJ1wvDxCUDTk2HSBh31AR48B",
  "key20": "3j3ofGuLgaRnfsS1PZj3Gb3yqGxV7ceDGnJqNfupqLQJ6DivuEPPajBHDsvJ3mvVG1mF4QR8omh2Pw9HVDW8VsL3",
  "key21": "4DXR66JLoTtuxZ1jwphV6bNDwMi3w4k6mAaVXbs4oypi6BBgnNBGksSUNzjHucuYhWSCaxW7rrGwyEhi3i9ZYvBd",
  "key22": "WNyKxJzp9arNfVLBVWdikB7R53eFYSwe1e9dDxy1phoNhM6aPtebRNNQDYEHpLLnTZepftYFJVtEzLVEM1HYyoQ",
  "key23": "4YZRzfyYAiCNP9vHYZ5oCYAADqqUiHRD2gbjyEp5xx8FGUqCkcV9EnKZLmGe7twzVhcqVYR9FzT4yWCs4Y9F6h6L",
  "key24": "nHw2aeK4EeG4dwJPYiW71pHmhxzEuadJFonvgZ1Zf5ZD6cfjmbiHRBroMweg8GKL9b3rQFzqdwHvfUyBBrCUzKV",
  "key25": "aDDp7VnKtbpuavbfWJTR2BBCsoz2QpbiNdoLEb7GwYDdJTr8C85AUpa3MpaJHkSTygoUrX1kPm57Q4k6GryioUm",
  "key26": "4xhkj955BvHGRRLpRhgYEH4Frfsa2YkmjG3xU9QmbqExP6kyXkFH2ofP4fKKCPzXwXxxM1M7rPfHK7UVdg4KsNMK",
  "key27": "4YsDT5XVU3JM5T6YdB1QbXoaiJciXepK8wQnnnZ7QFSpz3Mz4rsnrGGF5YuF1ksqL8Qsjbh64ajWR6qn4GLqTgEQ",
  "key28": "5mLgDBcKhKTLZuLKLDamTPqhUDsujCn8cGCvN9y1DUtV9yc3nxAk2uiyfAZDGx2EbG3AVqjbNpFiJ5MF1q1B1svi",
  "key29": "5P6Bkf6tDKo4fxeTffxpcv1ZFm4gLXXBCSKnTCD2mdFzvsQwvxAJgqdQcxDNG2GU4nCfUdN3Brxq7KJq8P251vwK",
  "key30": "ATtQqffgnskMysSe5J6bAC14NvdoEu6cu638x4WUyqfs9XvATUcWGPS2dEpdNn8tAre1DruDUpZ68Rdumc27JdX",
  "key31": "39Kt7GbxZLqwRjdRbGo8Z44LgvrJs57GwnqULKu2QHyg3tuanXgii2tKLNS4ZNzVk9oGV9JazMBP2Q6hVWBEvBnc",
  "key32": "yYDUBKjKAME5LmLJzisbpmCT6fBPYC1hYTcAbmNAFGSfbuQ8dnRnFDRRX1CKHZVVQhgWnGFk8zWh1hXSC2uWqbF",
  "key33": "3ZFr6vFp6RfS1hbe7LpRWKrF4hPamytCX8rbpL8wg2xz5MvJfdjZTgTgCY6pm9rNcC6A5Gy2VAFveDSjN6Uj5uZk",
  "key34": "4MNPSSQh7yJZtfUCGJS8e3bYeXN2mfHWQjgDqd7zotrTK1BssFRquawD4yvPmFkVuTmAXjJrg9AVyJRwfBKRMn9j",
  "key35": "n4nHUJyS72cE6wVkFc8J3wppLcz9pcKconvUF1wcYBgXYHeYU4BvKYzGtuCwjfS1H6LxTg3A9gQrAnBvBDL7w21",
  "key36": "5P6143zKrDUCdNioBxk3QRjTAAgPPGizNFReFS33QLxFXrVPahr9uZu69Lj3oJvAsyawmcLnrrtdxEvJ5PkakAbX",
  "key37": "4bH2EY51ePXffhgT25j7ttEYbZbxTgdzV85qtPdrafsDLn7HmpJkjYRFzksLtoku5jbWocjMdn56qFTt2kaQD78H",
  "key38": "Dd85kvo7TiVcySjUA4GHPqsMo9iNb8H9xijvHwyGZGVjH7gQvJk2Vq1gF13cebjQDgTkCUnD8j9DTqYS2ATL2ru",
  "key39": "2x41PXVBvX49qYnb75gpLfWQoASfn9uLTGhvscAv6KzDwbVZKwczChjvj2ZtnJKoppUcpunvD8wb8TEcyBRdL1Jy"
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
