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
    "5LdcuvysWU9yxz211RqqCqy31jiAPJivWh1LZxGwiTrhWujErFJ6c2AKi5Wstv6RLExzPJN7nNL6px3HyvQ6si1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64NManSinhzB54uU5x4q6BB6zFowZKiqu9dsuCt5aB3MTufbCDHKJZ8g593GYn6S4Lug15weGj1WcDedMKxbyYKC",
  "key1": "4JSefQoFNLE4vGAJpTLk6JBLYUsXrEbMELq5m2y4aBKASixLKhnYqzvExqhEucr7C2SjvVr7Ftyi9ADjm5ACemd3",
  "key2": "FiYwQxrTasJfbS6K7xTKsZ99NbsZUmwiAVQHEysJqXa1ZUT8gFGgfYTKVRTuCWokFLkuyXn3g9hY5tN87B22TfP",
  "key3": "2KtTNzZbxCkB2Yp9y2TmpNGYJHrxb8xJJURAT7dLUgP9Zxki82sJZjmLG4W5bPjTptETnYyaRrm1oicu6MxFhPDd",
  "key4": "3sbywm6RoefBekip929Ya5jpnXgKSmYXUeU5Kt8xmPd54taWPVY9SHT2jJPcDTyo4gFcrsZA5qukdyKPF6ECoRGy",
  "key5": "43W6xP1hrB9C7EDm9YWHWUCHmGJHMmjuSXtMFEWAmeSoVuGRkMWBFbb2CZ9s7eBqYHXbqBwcD2B4RVhipa1tg8DH",
  "key6": "3UVLwhjXZDLrSFFD6Nbf74QnDMmC9uB9RanVsx9AZuf26Hk17xaWrgDScvZhAZP2Z8d2CHKgpmmYG9WjivNMGiaF",
  "key7": "vbWaW7FpWZnzyoZHgZqkTWtJ5tFwEqejLhgDWKmCQUkUfFTw9iH53RkJ4gvL8fz7dNQcGvv6xP8Vu5jC78Yetj3",
  "key8": "Sjfsm2D1FFeJBsvhqYijGvkS5KXkod8QSprUxnByk8MKHHBf9boDX75Hks5NiALZMGMX8vzK9PX8wGxfDn4yAki",
  "key9": "5PfScxogNYMPJJsvLcKugh4SByseuUunwwspeYx6xmP6aXfrmn79TBgHFd2Vv1UudehycJmtyhMMtw3TwZeXerSX",
  "key10": "hXTnzVvYN2zBgBhiSciVvVN9TLtX6xkDte7cgSba5smPDffcwsTugM1SD3BE1K7XHWdtTMtR9MTjfyjJHJXdZdb",
  "key11": "hBBHLYwAUvfAn8ZTWxkpUTfkfu1var4LLsXZGFdPT8WTrNMH5LHXnAsWkMdDQ8D8UFJVJD5aaWVAsNrtAdyHNkD",
  "key12": "5VPTupW9yhqGbSLy26ydU7NU4tJUQGHQGPfyc5gnf2RJSSUhftNv4cLY2rmP1YBND5zPdQch8W8Z2RpY4mxjxkfe",
  "key13": "41NMssdC1NKofhHCviukhfi1zUpdu1LMLRb9kfth3YkQaBPRvnhky7NJv7wxxGA741mEuw34uixMcTW62C1GNt1y",
  "key14": "4XjYAJ7vEpFzPppjR9Mv9wywW4BDfHXdNazJpqBkoiHQHPQPkZRig7qbAAKtjNNXNvTBF5cpSRc56mRaeGFRtxoN",
  "key15": "39Fv2YTwRH4ZsT63LZxRyFLNsRck9vYrfg4iqiaW74HhW3uTjNUNm7ApqDSMZiCiJejsNjqjnNfs826MGtJpvJJB",
  "key16": "32gVGSwcnYHwKWPLJyTURwd2tyMMaky9DkF8Ld4F2H7Zi8viVnCP6MuqswuFQUUaZps2MNdtPWDuSVavFHcSwgc7",
  "key17": "355d75SKGeJRvSYCWQk5TnNs7LDUsiwoRfDq51ve2G8kQr9rx4LYmT5Zmk6Qq5zcHQcDPqZojE8soQPMaC1bXZJy",
  "key18": "33fiQcivoybQzV7ZwA1gy84DhDZS3j4u6oWCDaXRszknymRQp7RxQhUd2rgQhtwAqj6MuXFEHKmNyVGHjyaEnfaM",
  "key19": "57whu6ntzpTpAN64MbeBRrzjLwV2fk9Y2NEc4AgABUAW3q3CHPYsWegtwbMa5uGqxdyj4rKPo5t3cSgzp1iGm3hq",
  "key20": "4qQsB7fRc8jWfg8xy7p3jtDBNG2Bg2TjeHw7GFVsq6DRYLxaTrQciv2VxpbuQe2MPk6qy5cHibWyLnkqxMRBQWz5",
  "key21": "mB3SJ9a5xV7x2v1brrvH2grH6VQ1RFyfiGt8xBeeKXHgyJp76pSMdmF9i2Z9uVi2j129pYeKhMfXm5m3LCnPsti",
  "key22": "6tiMsphBvssD86GZPXyQDQ3y39UvGCgvn214q8uNWv9ofXN7jVXwMXQHd3A1WVwThCCNBTs7sPdY6c5N8h8NaKH",
  "key23": "8pTmSZ3NJiwXD43vP1FYYkfBks2VqB19R9Zhp6cUSZZJqU32VsVhnxUNRRWyiABm4iiCqrZWURJvcRVbdSyZr8G",
  "key24": "43LtFx3qsFMEq8THWo1N57gSAXDfijJsAT4QpGFbKRHMjwzbMRHA7rQdnUWaVstd1kE92uFPL4xYhSJ3PAQj9zWB",
  "key25": "2dek7ruNK7g6Q1y4bE3jVkKM5xiDL4nC8yjBJDQD5FaUNQo3AbDGqhsyKnEJ9dRTkH4khPehRVpdUbg17pAATiib",
  "key26": "2QVwJKmHn7Z9AkpNdGrJ7ggNgi663G2YX3fBh9PiABeycwFwRYr3fJYGgQXb2nbwUosWW9HK2Rfo5u1ponruSvEA",
  "key27": "4QEcm6Y8LBC5ZaiLJyJAWLrgTw1bqHuXspa8jGnkPw1mToEyqFEwX6rXeAt8AigcxrM2hbYjBn8JoUfpBMFffa4C",
  "key28": "2ZScTEv84tfAFYhxTYc6fVsuYtjSca64bopjWPBtcHA1z2cQC9FQq1EBrWyPJh7dzf1deEMTuCX7VrYPhyik9sq9",
  "key29": "2uTJiVzAWRYe9iN66YwYoFpNSTAYqopbMw9DDNRYzvbAWsGEpKYgeeGKC7MHhTLczmLjKwqq3nKPsbXaqtyyYmBp",
  "key30": "oW5wnFTEaP5LMjH4vdyaoPTvyo5HqR2DmTZTqkRR63oysJusuyEM4Cd7Sh5iEGfVrUj2bs3e1PnUmgVrcC5kH5E",
  "key31": "4jYMkvrh9hdk8PpVNSLVVko91Gns6vVHv4cjBkNHGswCCG49ngTc7AKW3XD7bzhPxSPWxUbfreLF4uv5PrKCsjyu",
  "key32": "2FL1oDYLJszhavqpFij8EL18VifgoXQttzBnzf7yaoDM9RyFD3gdD4PtqWXjs8KS26LcG67HWZrFke38PPY4Veny",
  "key33": "4Ka4gFEM7w2PJe9RzJejUCvBwbMHhd5QBWrFwuTwXkYNSZ7BGsWX4UkvhmfnaZJnTPbtVnTEEnqDuCTw8SvL89XC",
  "key34": "2PyKH4JURe37yN6Weff1vLHCpvdbvwrp2Wj8h2PqkAwEHSp5RsBfSFUYRixwMv1bbmuzEMPpDHG5HWyESzvGB2Xg",
  "key35": "3zwNVeYrPUndtTHsPGqZet3N9AYfghCgDMinE4tiKoxxNJjdptCfZ8quW7GZW3dAtzDTtiQS8Hm34CDLrefMGYFw",
  "key36": "FyWEKXASmpaXKSYjJWz5A9Y8E9ta1oR21RCKTKEscSpHCdtYqSZ7Qs4XZKBjZ7uk43ucjeAqfcXxDP8ziepmoYb"
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
