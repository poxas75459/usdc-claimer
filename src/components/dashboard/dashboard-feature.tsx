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
    "4CUTyDCdAzpPCEJ7jfznjk8ar8q4dEgeZjP6w9HHrBxRhbguUHHveyne9k6DvrTDJ8AerEa6fgz9uRCdcYCc4ho2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DRK9AF9o4SpW3X3FM262rdRmCFaASjRLVbueZZPvLgGwJxr2XYYXZQKhezc75p7HQGf8pUuvcrWuAqfVqkTYJH",
  "key1": "QV6dbbKS6PkgXgGu1YtDw3EXYfsdtP1Xx8LXiJ3bbWAbiJah3KoimgmKnNyjyZpSyxfvU7XVq6iZVjkToY7Q31L",
  "key2": "2QJwdzGJT2UnSStEuhtyu7SW3UvjDW3BZcUTZYbxFHSiwMnCjRyorG9TEG8jdnmu84SuAeU8od2b7EpsnC1TxuFN",
  "key3": "515gzD6szZfaSzzpUSuJPDBq7FcCrZjWu7qEjZEqe1YrYyY4DxUb8pW2ttLEWtkrRXtF19ZCYKZBUKajc52iorh5",
  "key4": "5pAkVfoonJiCZ2wApcPWVg52KcntgiGhusvmxs4eYjixsuyHJufJBm1Bg3TM6U9yaJXgmLMrRiv4ztEJZb1QTTD2",
  "key5": "3iXH22cdTx73KE66BXUGGyjFuVqKboL2jrR2nLj6JCQu2sMAHXtddKe73Pexjj61FYuLfE1rUknap13JE7YgwZo7",
  "key6": "Zm6httn9aFbho3bcGuNL99vZSBJX3uiBuab24XLVGFbHztqorUFXpDRa5aPNRjkrDgtStkxFvYF4WXLGrgWuWGW",
  "key7": "2fBQMWG4vg6fX69RY4gdrkQZxpzyj4BYAfpZ1b315wtCf5SJHnb1EVZhb1eqShzu1EWEMyR4LArVTwvoo5wncdUe",
  "key8": "3bbcDQxnm9BsCMc8EoZ7ZxjKztm96MMRq3UrQ7HNZN6ytce8vSc2xroU2MHWfZPmMbjDwkW3Tm4JJW5ZowNHJZFh",
  "key9": "41vc92HKP5Txb1gXMj9dNcNpHhKVx9fkKBgYirbyvAQWegPzHb36YCf3UZ4e5QuuahGzqK4ujc9YEBRQVCKZ3sr9",
  "key10": "2zcXYsR8HrzK2WK3e5QZGPQpqo2niEDFvsG7Q6hnEyweugQVqpRM6uCGPeNUkE22GUo6q6dE7QiMfPdWsr66cpi3",
  "key11": "4HebXBDqpFQt89p1jrXzwcVZKEvbKAvbpdcFnrvoLgfKrJ5zNxvvqWLUD81oKJubLs4TQxcRtYg5U5g9T5NQUaA6",
  "key12": "4TeZha21phPkjStqUyHQ5sxyB2GAfcjPDWEz3PD4csVECmKWmWETWnhTqMZk7SUqiFEU2uL4zf9unm2utTnv2z3v",
  "key13": "59oyU31PohDjRsdwEo68QYC5WMFpkFbgtnZDXStYDnNL3eW7sKFxftjrV7MH9tYEPUjJza1777LzqjPMCro58Ap6",
  "key14": "4v6xv6wUMRrtBg2yBEajsmPHQRGXJSPcT35UiiZaSWongeQTeNbw2D4HwDX3mMaXDsHdMBYNBTNyj6EwhDie1uf8",
  "key15": "FT2sLPpcQnjMRNAuc6WL3PsifZ3nVPKyppCTnhT37dMBDcDyFAtm5nkppZbE8quk1i8QYzoafNt7C1rum5EkfnS",
  "key16": "5CHobmaFxCtopa5ZfprcTpCJc2akBoYB5NRurgLnt4kYRJ35rBoH9pjQHKttyB61xoqzLofEVcgvtJJ8iA3kFU9a",
  "key17": "3s92Tj9k76tAZZcEmX2i2G267C39Rhx38y9CqYvN474pr2Vbp5rGw3Tn9Rm8xyyaj5v8vynsPvv2meuYjDXRqRZG",
  "key18": "2F6tMJZpzU3HLWo6WYNuq2YTpGVNGU1QRecEebV63AC65RaCk5XT7T9hQ6rou7tn9KPGju9rSVGoePyB6MNLK42u",
  "key19": "2uvH7c6vQQuzQ5xQifrr1vYdbX1hTn6L348tijHQmvFhiCBFS7BuYQP2iVG2PJsbsgWAbUMyBdQarbnfRrpfbo1D",
  "key20": "23nLzUibomKQjtodJ1bKN18JyRmZVQy2PEEqqsY7qv6sFDjYfK594SvU8JwsMaSUUQJRcfGCywwKzaL495hneCVs",
  "key21": "5eRp4UdX8LR3mVoHgV7Ut5qf1ctM1eEwVmx1qFZkD6c7Do7iPjVCvrqKKSgtKw4znM2y7io7ctHscJ4YT1Bd5yM6",
  "key22": "4heBbrKc9Qg4P4ejpsJzUjMisGU7qEHHaCFW9uRSsAv9DuFnoWToKxPfhKDoULBS5kS6ervTt85kftApEDMHDbks",
  "key23": "wnGwyCTED2Axa6onWPSosm6oZ2xSyFxzKR55vvtK9E9kH8Nqp1DUyMHTTN7xgAsEEEx1rDYnNJXDH79BjKYbj75",
  "key24": "2zDmcKbiKmcCbsLK497XcR8LQjeZ3vpjLkoAeDTWfVxv1nwB9xgq1mFmwyq6ufBw7KwAGfdGvw8C1dAfSPNMRekk",
  "key25": "gUqgCP1kaNC2zh1yrkppbRhr3GDdY1K2CNeatGPLwiWvZFi1WNDjXvzxxoSPpoCsNKJk28SrjxHPEUUGwnTd5LV",
  "key26": "49pEERbpkxgHCFBAACiYqscRcjXbeUzppL8oU9r5HEVsWCMxDxYZZMQfB7Fbt8n4T1Ywwdrz3cXJTw9zCrpT4eYQ",
  "key27": "WGzTS8VWgcrpV3Uk85VWLeWFC2tmJeVvvp1yxYKPSPXfW8to2B1faYwsLj3Zi9RKCu16XMGjVV8LuUU8KvZcP3F",
  "key28": "2Gv7GSoSchrQU5fnYH2ND2pgsNNinhz84jyZFBP132rK4GTDovgAzGNZGtSHiwjwxEPezw5dJw1zyxR51vwEg6hH",
  "key29": "4FCB3SMU3pvWvDEsZuo6CFmVNB63awGrYgq9vzfRVpSZG4JnyELi8u7Y6hAg7pBTmDRjM5xkAYMEjuNYzFzZ6YTG",
  "key30": "5Au22SuTJgEQs9MZ7d5YCDUhDhEXuxdBXVyFhSwET3t8ayHniRn4VwB7mF4XKwjXpL4JZkDUCiQo8vvVRccUXQms",
  "key31": "EYwbT9V6Xm5CiV94NkuS1rVLPCC9qJw2fNFGHXH1cb2jvty7phxYr18zsN3Ty4sZLCMCTZzLx9Fc1H2gFfzjqdY",
  "key32": "3PyKFV5wPjguwajG63bbj9ToyvdNQMTyhzDNorQLK9wsW6EJ4FvBACPNqMcgvA58DcNbHWfx83Qhw4L12q14odiM",
  "key33": "QQ7dkDHnav6xv5vJ3biJivtRQ4cdSoMqSjNipbNHs9s7whffkvvaBEMqWwdCQ7LUy8Kw4CmXGQamZNa695i6XEV",
  "key34": "vEmRXzDv9Che6tC6PnQazRTRqwHCoXF9FjDCTZukXHN1wxYV9KqHWPWuWVtioZ5sDZsveUrWrxW9zdVPBQNz3vB",
  "key35": "59VHz5UYVLsUtoBwFx6eAcCsMap9EZtje8c3yov7HChYDhFzvQ3qr5FpKt8UM4VLXjBbNo7ZHGzfwUCcHTwGwWZK",
  "key36": "3UbmwjnFFjfoDFdumwqPKWLddDXFp2KfZSFrC4B15dbyPXq9FQYUy2GqUgbFvcabPsx4unAVKjvLCRgQ7HsvSqEm",
  "key37": "rGDXXt55zWECTQZpKobSXUdjP5hHwCmPTxmpPpvGp4thn1mTaUWS9no6nnWdNRyreNZTV1FKF5fV35i9pQugoRW",
  "key38": "5GbgNh6TZ1BSPZtikTFsCGQGom5nbW2TPu1wTgrqAHm5pJAY91ccrUYhLsRr3zqRJD2XBMNDaghEdUiWz3oa1kUj",
  "key39": "3jodbYrYJNWfY7p56wX8anUn5h9cqDERoVhwtxXAnw1pTbk1en6T1xuNZaD1yeTHy1yWTeNQFwibSGasskg9scad",
  "key40": "4LjXXCTi42UaU8sMH2N8xTF4e3Hj1QwhEyhQ63SxpRss8iG6Gk3kfpFtRdBmPsFrheE3Uafrk4nsuhKfTasZYzGk",
  "key41": "2DfACsfEeuRntFxXB5rGWqBranJj3nFkmpxCpZnkXAjJrGGsJhEyKSa23ouBMmYdPDA9ZCBAohrKK31h9saEdDvB"
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
