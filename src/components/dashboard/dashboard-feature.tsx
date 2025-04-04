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
    "5RmANagHzDhn1oNzvthsHM5BDbLWsPvP3DQ7kuWaCm3QiLX6sQhkHKEfAnmocZq5kQqwpTYjubTPT3m93VyJh8C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtniVwLRF4bfBbBGXnwnA4NDgBPrjBsTDEYD1neZEWQKmChkboVN9bAWe8m9fChfwjtVApZneyXzMcRzwXgF8nk",
  "key1": "4iUUbqTkaPT2PcEWyq69BVm2vdupLV4J9TCmdt5k63R4dST4Sf8Suee2xwGa6zxjbzG3n8pF7zhYsKrSfaUnRg9W",
  "key2": "4dMKNXxntPDW7hkgweeZ9d4eg1d1s8cX9kKWsynAnJG9o9xRkCDBKVQ4gmf7jrDhRMFTdQNFMQqascPodeQSg1Bo",
  "key3": "KMYW7NKTSmGr34GCaKDZk555bY6E4L5qtMLs7fGDvgVcmXCDqRKxzpeSCJYEY1NpoqVQRR6nkaUVbSfNDswScLQ",
  "key4": "2UqVEYtMiLpw8pYisvdSR9EegjK464XRpsneq79NM1EXf2tbBj84tcfeKmabhuz3U5UDKZJ2nX9Wsj7HTPDPDMLp",
  "key5": "5oNFHwEJpCDtsaUiupSpceG37azjAFaxMiVbx6TkENrixXEWZq3Y9kj1SV6NUNmabTRCkXfAMgX5UCHvfo8UcGQb",
  "key6": "bMmVcS8F7DicdCVfnDVn9jBWLoVv1Vpg7osdKtmAXM46taYJN6YpqDAaLeubkGTVKhUzGMkzjEU1uew9DzLVpae",
  "key7": "3CvUXTbB2utd589nmf69GCck3Gx83aSqncnkRHfMD53ZX2S8cjSyi6o4b1qbZHnoLKu1ZThDpFCkb7CCPB5vSeeP",
  "key8": "3vNqBeqSP98RSh2VfKbueXg8sJWBrDLuayq9frU8kN2rzXXTV2zVxMeaY6K76JJr84x6yjbsG7evQvrQ7DhSXthF",
  "key9": "5Lu5rqEL4CwRFXg1hgknEQ6qyv4m6K1KpoG5Xtq4iXbLQMK6FJ3DWPfy4Kc8cqNLJGvgzX6CBauN9JnLnM2L5f1K",
  "key10": "uLZZpHPKFQqUGXhzi56jxWVTYtVWi1XS8v7XUgC2RdxTTFN9DPwn9JueCh8s2A8j3e5o9B3HCcsuGhv94YdtXxh",
  "key11": "fVWUFmvA6ZXqmZRXGnz9Tz3Ek2mBDDUzoyC3SFAivf2J9qBKhiDdHRRw7DEMriGe3aVCDr8EzvqtC2sFqwHF151",
  "key12": "3nyjKeEuYU8Q1uuYxWwJPMgff4cVnb3xf4R7Ar9jfxA6VcvNoVLR4et8MjU9KQm36Gd4oXidWY9N1wPNWY5oqFMD",
  "key13": "4GiytBBr6RQiWRpi6NuZbkGwNUABY68Ypf7KMLi11RSbidoa6LN3rUP4hXkHtjhVvvFCdS5bFBBC1NNnRcETEyGS",
  "key14": "2i9u6b67s7RMEfyRniEaV4Hu3AV4vcSXq6K1jUnRAYFKFdqTSS94yqMFVr9xupgmhMbEhqahQk3f8ydoBUNU5KXv",
  "key15": "XzYb8PvGVVhXyUQWJUfeR1UKwPhECRvgTbxYkj5QS8xeBkhyocEUZzT5VyMzKD2kjtPjCnAKSqAde5mTTQXdy6W",
  "key16": "bafDB8U6GWSxKyKS6Ds2vvbhGJwJC1421w7wAxRVND9hkZ4UmNCj8tsrJZbFQUmunXU6G5tBGRKWoSfGPoEJEBH",
  "key17": "5G5b4hTf7QqSyqisFXt87WaN7ZhYQsWkNZf1nsuc47DLkLq3YtHiZhwT83PNzqhe5vggbQ5dYyEAp5rasCBqVewQ",
  "key18": "4MNKaz3xZfjWQjHNCJ6rRd6gwqWmAXgt4AHSG1jxh6Fxsv9PqgRuM3XCgVhtBLrNoN1yWvBvUuTsMUv7cnwj4und",
  "key19": "5Zp6nPYc5rkotPSjYoz1KrtqCMrg7BRsZhbmc56ZZonkjDnnnMEXtP9hoXWzLAHd8A65ZVi1VzchLuLc14hjftcM",
  "key20": "omvRhjeooiJ1e1XC5mWQvdsm5q87QqwsBff5ZMBgQVKbrvTimB1976WgAyZKoZFx7C5kSoNDLyGPdhbdkYdDboP",
  "key21": "5whPLTyjfuHJR1eRHcAfizuXhACF5iudTDnGa3gWGvd5SLCHiZSytiHBU4jK9Psye91GvEkMLcd3RwVnpX8ZQDRR",
  "key22": "gDvzAD5v5Nez4sDb5DS1bAu7SyBxh1q1UbLRnrYZTBvef6uuxVE4QgDZxrJ3LDtpsVDrDVF6NdEZmtqyfEQuy8g",
  "key23": "3fr3S9L1HdCJ6RAWj3bjweXc6sRbfqbGoDrx7BFCG1pJgHbr4gn8MREfE4RGS3mpqXKt3xkfJbHXg25X9XPavU8B",
  "key24": "2FP7cCRjPwdcMV2iLTzJhDr6o8Pox6XYiBdJ24ocJw1foWFQQJUvfQCZivWBVzq8LF6GKUgHwD6jTzCchEicM9WP",
  "key25": "3RgXZNucoV9UX1VLEXuYPBUA4Vg8u1aF4S1gysk3NgkwuF4vZ1JGrfJmMsWc66NaqcGihAQkRAdUPwAjUzi4dNjL",
  "key26": "4H87dUgnSHREnxjeSYpMVpHTZ4AWiqho4b8G1r2gofX2D4w2u99W9K1nxLTJGNQqb8Va5RbX1Rx4wNtKm6CEexm8",
  "key27": "XHYyPBy6ZzCYW4syLYUjBU7oYo3BxQdHxFJ1CeioffCLmgSfCdSinjK6VbjjzZ2hGJobhTx89YgGkLjL8FNW1dw",
  "key28": "4BM94YEP8i1eQPF7isUioKN3s9hN5aNqnZKngEe3uCypqemLiL2pp9TB2opeJZ91hu6h7fhkfeJ5yafqe7KRbfL9",
  "key29": "3DBiTGi3v4x9pLZGncLhzjTxkHgVbTkqTBoHAQU27Mo6oZhRp5xPVYyrzAJffPLyzMs3ypDH2zThBVYc4mrnaZgd",
  "key30": "LCSy2A9sExnr97T52cnBhTy9ni46jhfa4qn7Gdm37QwGUAvVWrUZXLC6JWTEC9hqf4vipWqZJWCNq8sYc1px1yq",
  "key31": "67BTQ3JW2hZfwhrt8aabYSVS8xmNxxo7ABFT8LRV4e9Dn18xC7qkq4Jrt5H5pmRrvqxk2bPjHism1Vk2eWc1mFv2",
  "key32": "4CtpDJH19byBMSMmQJizngDtsYbhqUE7dRCSKW9FHfgvToVRBbFC4VTFDbfuoKCngpRYbszSpqbAaSgCwp5Nb4yA",
  "key33": "3z6kVxYrgYHzSL3zGQcpxzFVjMT6jhBgZ37ATfXJ1R8ENmxRae4C9t8EMCYWZ43yFndPGUTF3T32m1tdNWLGYXJE",
  "key34": "ab7ABMWg8N5NLddhJzQjDFvmfPGNYJppq1r4JbcDAooBgzCwLeSTjxzPVHXJbwj6GrZ7ctTRYEJ8XBAquHcXfVr",
  "key35": "53XMDtMkRctrYBSr4vzujKiCwsC7wvmwTTzAERVYjarZCpmggKfYyneafD8hrL4URjQv22ysWR1S3gqB1YTwZ4v8",
  "key36": "9n1AdQVkyhUz1i2t73cm9YNtPVLeZvDPox5PmKRNxqfyVCJUHB7LeqRHoEgsGn5284EicZjmhm2sgKQCNFS9Xn7",
  "key37": "2nWHjrWppcpwEL8PWZxW9kkESKRre1EieV6FKyn92rCpHZwJYUdj4NZ6GRxrSDJQWsuL1rkYECSovhumhQGgR5L4",
  "key38": "2R8EJ2zi8aTLo2igEWAX4H1fzgMrANfN1JV96YZBmkkZK7RnhdaasEYaEj3KJ9PA1quPh9UDNTxAJxsa6GoHKC8r",
  "key39": "4KkGgR54e5jKw5GA3J3SCX84jPSDhgvCjWNVdkjigT7KSHo6DejAtGMjSFS9KdbSs8xBYfbkFWbbcqq9dBbYU5cz",
  "key40": "5PPkxj8NwP1nKkNaHjozjFsrda1HzxfqDfRFu9SuQsYTgiVWgrWXDrKXftw8LYu2iWzcPuHFysRJZnirAPG87JC3",
  "key41": "e8BTFyxszzEzam5cFB2idYWLawvotoLzRRjibznxyfnsTmEBxfqEFqMvWVDhjx11Ywi7ZDkqGwK1zKL9P7jdYTC",
  "key42": "5NZ2aXwFUmVPBVxfXitoXmynHkPj6E68kToqp3CwonTieomvvL3jLpN9r5Mp4kWj8V3NTZUeFug5Ld5KeUJUZSG9",
  "key43": "WfgWH2iVixhgLGG2MqGvbHGokznWzehDXSxyJjHPGmcEH23hmTxeMwuNiK9QcAsihnisPFYmtG36DGMAXyUuCAB",
  "key44": "362bRVmGYvqRnyofhBNeJbZqRTFjMZh6BWcLortmzo35QjgT5shA3DCNkMQaxW3ghwFcQsh8YVPJ1YyhcYjKfGZN",
  "key45": "5RgkmaEoWHgr2YneFvECMgM59NZ7CPVV2xuSAa2BhxPVcYMUAFMwPf55xL8Bcvj1rpFdd1aNrn9UZR13XipAtykS",
  "key46": "BDt9vnGC8HafaedgpeC8kReQ2DXVSKZkPXMABHzPFNfUn8jHbsEViHrjM7rVx21k8HXn4P8Ef7a6pZWaRmtHjFj",
  "key47": "4smUAoWtoa6vbrKfuekRb1EZ7wkMSKLefaxLJFvCZk4DLksjoL1yLZXSHAR1N8g7veN3bDeJPxKYGHeHM5BTkkEW"
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
