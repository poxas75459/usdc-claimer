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
    "5vrkgTUk9zoce9MxEn9NfzePDUaeWcfAX6URFZFKycKojChAawf3tJXqEWsceBBL4U3ozSNjMMrLHCecx2F2WnHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4B8HcbkzihKeCRv9BPvSgrsnHoGexWzroTpVZvb7VmvAzFUKywuf6SWW4BC7Bda6vsuKiwKzvTtahgT5r5YCDv",
  "key1": "4negZSxkmcXqCQWkdhNskMhrZBPVjdWBdXW11J7VULN2RP6pAYgFSzbPVxRe23DAU5pFbNp6DQ6Fj35QCvcLhrig",
  "key2": "2u23qojiyHnfjiwNEZWrYn8etMeJRBXakbs5xa62SCcLk798CzpWeRZ7Qt42jvYNkKDXddATWM7aL859b13xMiqa",
  "key3": "4C5t9xiRN1RALK2VwyyuADR7SJb3QAowoTqMBon1Kq7C9KzFVfLbvpR2wPMNBvsmz7aTNpBWbto58xGjWYPNFLBn",
  "key4": "2vvWkaVKcVb3SPUVmRc9HbKzakvhQmLvcvSyHdGhFrfCQZWoaRFuJGWqDkCMUdip79M4Ra5eR6WHyHSgAcU13M4",
  "key5": "55E3wrWdRhRMVXVVbfvh7y6RU9gawucUDeqtZeVwSMjmS9FnTtGNyFBjvwx72pot7cVPeJXs8YEL64vadqHHbrsH",
  "key6": "33Cw1YPFrS24tiNpA2Cvee5ngxQLYQFCxZE9KqKoPpJWMuKJ13im7p9J698N4JYsFP1CeytH4NnVmj8XkPsoBusL",
  "key7": "4gQwJQQozSa2KfSpVzRgLehFHjfZKKAjNAmDJTVdGD8Bj2MdCr4Ct6MXbjXVtMmDW49mXSsAMq7wHARRgvWcBVn",
  "key8": "2a447aBWkQtc7HgTwHSBH6rCxsZBKstB7s6uZWEqEY7ruhgNiLNh6TPU5Zhwe9HeRpNMpRUe8g7s33qNpmtFK7EW",
  "key9": "2a4ifAc3orTHXHLnF8DbgFzKcAUecE7ug2gqrpdyGNAu1dKYKHUDnqTGkENuwHWYQzB6WQXiTq8VM9UXrG4tjcyy",
  "key10": "5XbhNRX6gaHvh9Wj34UksjUZuCaAeDS1fGegPabRBUr2QSgQQEyVnHwtCe5sG3iW9P7QzNAc8Xr7E2uAV2btqHLM",
  "key11": "5pLdCg4QP7NCxvqG1dgddcuTbyWZ5cu34fyKapuD6M2TWsusxq6wEygjk1fHcJRuyyTEKVtoLTcSepxgPiZMSQoT",
  "key12": "5UfVc8eUTkkNuxGrsCSzJQRsxJo6tJgCZvELyaBH1Cq1pM4tRnuDB3t8oo2X8xkU9UGGQzaV1RF879iJDmn5CKX2",
  "key13": "45gqt1GKkK742GqsJWwQSpyYKydWuTM6SixWcrUbDiABFva4zQqKQuJWsVVcWvvWskGbedNw3nepC2tHPcXx4S2C",
  "key14": "4jLjpUL1j36wyVPkpXXnAG4Rpi4jwzKC84Phvth13FrHpAHr58YsHe74tFw6XL5GLGBBSdZKRWdWmYS1Mk7rni4x",
  "key15": "3QPxopXb24jsmnqUHDtTF5gBKgEhzg7KVM7DyJ9Lbpor8uhcXSMYxv529UStaZqfw1qwV2VfvwveGCjWT6wZSioS",
  "key16": "nSZ8xLUV4AGY3ui4EM1YuPwQgpU1AyS58t9t3KqMuCsYduD9qnDrCrGhkCrqCrCga3k7xHeugJknU8hcmzmfyWi",
  "key17": "32D8oHikkusiZXkahmGxAB6u44KTWmj1q1XCwokHJJXcQKFscgTDKGU4YHHaBnETZWeAr341ApjkurwmdwGqHzJK",
  "key18": "YPAAarptSMa2Zz36doSEzA5Zd2oXZKKQ4Ak17JbD8Myxj7h1JVsZZJU14vvBKxDQnir4vWKJPMgxPsG1k8W3Us7",
  "key19": "jLFNCYZ8mC9dqiNrf2oFizWkUPP7sDAARUAiLk4AsN6GYGNpjcGFL56q11tLgkF7wYDf1aqLq962ikUamrdRKF7",
  "key20": "5U3P2NkTBiJNMTELMM1DbTfrDj7BkU5p5QDRYgsRnDQeLorXW9XSsNDSdnVKfmjBCJeg6xrVoCPuKW8ZyB6HBwva",
  "key21": "3m3Qic1pZZpve4dGpY1Vr6quwUxWg4kVmSuy7qe2keKRnwvbcBahdx49SAYW3nfBvukFDn3fs4yRvyFaLzQhHrc7",
  "key22": "2FjFM4Sfyff5ZfQ3hPVG8ZcUDKPrY4512RwnHMxp4LyfhAkUYsfoJxZaR8gcDqHqSE2ZVHHr5mtGj4AzFTQ9yhqH",
  "key23": "5BZnNSskfdjXN4Hu5UoV5VjFaUmkzvdKm9pXZwU2e1DgbX6ue1QCAJsSTickjezDVEeapfuzUC8qbe82b1gv9u37",
  "key24": "2eduiiwrvb5P6YRJBSbzR77pBvBixwe9n6PikHWLd5jQrtdSpAMEag3t3KiNjfE4ovsPgYdD6FMHoFr2x1sqE3t9",
  "key25": "eVDNArgoDDuKezDdemhumpjatMKCMFVFyJE5B8etcJx2tvTWupiogVU6DMHgnqZyy7d3VGX8H5v98EGzwqjvZEQ",
  "key26": "31fEBgUguxqQVB2oeK9fDz57uoeTd2uWsUoLviYLZkmt3BNwKViSoEsDwosYeZKsnpBk2JA5ShHSvHqAUWf3Fyja",
  "key27": "2r3vLfxW1HN1JLEeKgSRBXpdHU5HaGe6AKXSKeSeS14tCK4nttTENn8uU25QBtZAsVEum29r7yLH8yWSNpjMSUnt",
  "key28": "sHXgrEENkanoWrZc9qbE7DqM5dfmwkMvx6H6ghot9m4HormwDZUS5LSSN5tnEVL8Qoh7JBx1b61RENk4TbpLhi9",
  "key29": "4u97MhrDFsEu8nzNScXes1XRUEDMoe8gzFFubXjD6GddqcxMf1NDFT8utpb4iRB3DJ7YpQzWE8qoz4YJGSZhoDTA",
  "key30": "3o3uRqjEQWDKA3NYGVZtz4XA5KULs5CdATyEF1UxgnoNJm3JukP4KZUbDsvJNsjn1W1t4GFhT5KwanCtCPwP1vUh",
  "key31": "27s6mAf4x4vpcwhF11Nv2DXfB1vejVEotiUwbARz2U1uNvHb8dwLmezQt9Bb9k9XJwtSLYEitZT7HcUzcSqDqWKw",
  "key32": "3vrz4Mi1ny3iA6iQGm9sPxL5dK3nsDKizXZxshJxrHGjnvXpkmCmbr2GtUQWNbrsbfZipLKL9WEVKHbpjByVLEgG",
  "key33": "3aaZiJzU3VAXAYYFkDHsLHBxf2acTUb1qFCnHY1ddYJhCSafVGR5tWYRSwH7iyy7uhneuSmfZrxn7jFXAHiunKkm",
  "key34": "3Vwomxuk7yXTUPiwHtgiEof6NkggYGBWY812YG5fMRLj6TbPuEyquqeQUDpDmzTkGHmwVEwk4h2Pur5yfAoUZmgK",
  "key35": "169X6KkaHFC8F9Lx2UeD6n2iMwqJA9P4JLbTT3mHpsrqTAVZN6jpGfVrGfN7MJbzWmbvHoLRAj1GYroKPQ588i4",
  "key36": "4iv3TftfEoVX5sVsjaz8avaxQLgtqwLFStd3mNXPuAM5TjRzocAPykmcWUWj6HG8YjWhi54QdntLGgZgidJUk4eR",
  "key37": "5KrVVwHT9WZhSzd5vzL6eLm6Yp9v3giBgwQovLNZGQ3GL1HimM1WLPV4XRWGJmL59yRaCdhVfL1sBmMDNCEhfNxm",
  "key38": "3BHrMD4Buetk5x5j5MFK1Ujh4ecxtomZ5KfyJyHWC46ZoPE7huiw21AhmtAm9SQY4kBH3gVaABuEUXCefGK2MGE1",
  "key39": "3ojgFuBtrWZHVpwdf6sYSC88pB4DMoMaXFpAm3mqZ4PBwCQbSpgn41sX2FivY51tmpYtxrrF2ZwKMrSxYgVTNv7c",
  "key40": "2UTacnpTdL1qYe4eLpuw2hhBAb4mnBETESiuhRH7LcGonBNbP2MXkPh4bmNU3HgjNrHAgU2fZhni1GJX3Wzzz1F4",
  "key41": "WdCN4hwUtfPRvn9HbzH9YTL8VVK5UEyW7i1GJdWQA6AXcdQJHw5mJ1V636AmUGjKSMPqRQvY8zLBkPEA55DFrRb"
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
