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
    "5wzD9nDeJoVrcYtzLUJ4pPyC9Y1JhBjFJEsbWhrmiwf3UnPjuW5B2yJWKHQT8WDuffrjYrrfVNBbgon53APAtXdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8ZM4pE6RktAxFMq9MZmaahyMhN8KHnryYyoFCPnXZs6ydp6hWZK3Fv4DcErSpkvS8tFP2TfwVPALCA98fcawBS",
  "key1": "gG7Hdg2qVzLFQ9F48ZtnM3Gjo4ZgLX7n6wmzsZ9SxFg8dFK8k6gK15cztFNV8y7AzpieCBp4x817WMpyR4XEdFq",
  "key2": "4zZdptFuHFyxQ1KotAnigo4JSApkpYcwhGD7a2KDKsfPVf5wzubqAZ2SmqbinD3Km7U8YFm52r4EqEGpZL4fuRag",
  "key3": "4cAoDzahP3Xk1Z7PyLt3L87r7NunHXHo7yM2Y49QmrYFqantPJtfJSM38qNz2skCy7zVBVV3drndBWV5URh7b4ou",
  "key4": "5GWwViDPmXQG3gEyrFEtLeTK5p7ePWHVTGo2U4ZXsu9jLYm1H9avRWtbzCMoeW7domw83X9ZHUWjuFVQmWjcZuX3",
  "key5": "uvuMfnNzaaedCrQUatcfSsbVN99KwzF7bcRNe2Q1UPYGTNHTe1dubvQGKDoxfLS11nZ4UZTeqH2etFgPBGXg3um",
  "key6": "5nfA4zNLfzSxx772j25QwbPQr7skx4BAT9PwgRQw6tvW7FvCMatWHRn2QQP8s5HkreaBYAiUTcpfLXtJcWvxAfqx",
  "key7": "4x63xQpd5H7Y17wbE6ArsWuCDfoRED7zkYJGEnZzyNtjC3pagaNTrgDtmGyKGreMR9V1FqRWMX4sJKzuyJt4UwBg",
  "key8": "2pNfd83aYSbkpiTv4qYEruJodhPZQpMdULuyvQUAK1LugWydQP7PvB1GiLZYTJBYGqGBuWfK4UVCq3x9k2Ku8ZzT",
  "key9": "b1EGP8iTdgfR5Cdeub9zYrk93fgr3WsDo4Qh1EEPEbkNTPujKDJNGZwvCgFZ1YUUyU76FFVxZyY9bajuKY4mWQR",
  "key10": "3kbNLtFb9VwQf4DpwJZtP2BtPcLX4pdhWDKtYBjidaR4xUENhw2ovjFzNin5hNJbyEovMz62N3PF6C5B5VggDpSH",
  "key11": "4AM6ZijuLsH66jz69jMTP2zay4noQEUpdbb6z3ziQ4ix7gVPSYj42TMZvT6QLExJC8oKUHd98EYpL6LxE9s1vRzk",
  "key12": "2v38QHeUUCbrQrV4xPPXMuzB14PyRHGPqbMU52ZUFkvtBmGKyGorkUk9F6JdXsmR1pCSw8ETBpoYnXX76jzvDDXD",
  "key13": "4dT3SDvr2WrqQ3vjzBmLW3Ag8tzyBYsAwhTxpHVRG6SAaPnvRDgNSC6qwTTPDDJbtF53Mtnc6tECECX4m6YZsc46",
  "key14": "2KV2JZZ89WD95LjHkAMQBU6g9L1UiWQR5c4xwWQRo5Hj9mJaN5wGKoFr1RKWStAWydYeBk17QCrVKoefV3e9bdj9",
  "key15": "2aKfFMBMirbdYfRbBWjvEkqsKM6PuqE7A8kUN9ZtbyH2H4kxLxzqjZ9WTJ2gKiTehtwzZjASwSbUQu299AFzHdeQ",
  "key16": "22MjptfTPvgmZ8nUd8qzp6g5yAfdqFckthYJQU3Wrq8DigUFPLrR6EDHH7BM6C41ULDDns49yoZ5UeRJzz8BHn2h",
  "key17": "2HwYsLYiQCbutkmERRVQZkHdonj2Tg7sPsnjsxodgL1EgBkMRkEBxYdXTH9aCEey74bcVUTSXbU3k5j2Wc9SWZBc",
  "key18": "3pVPUyCQxm4zGwmTuTHuc79HTFTLysAJNpKBP2Bfy94mMtxZRCSyCBdDbiBeUxbnEZDomFSUGpiyFZTbUKUrv132",
  "key19": "3V2tguTLstZyBGJonf9VRXRNnyktvg6khbgcadUTMAsKCEgQias2JnDHsz6ttAMn3G3hWUns7E74kWNcU8vuF7AN",
  "key20": "2VFqts5vGs4SYbrdfSA7DmBsVHjPwhEzffPpi7FiD8HTpTKEhifsKCYPpX8TAgAoAkZYRF7RiEyC3wn5L6QjLBKD",
  "key21": "2Fw1H6nroW3TXBCXjqZ2fMRpuzPpAJnp3WXVs2H7Ro4AV6ywSJa6zcozWZP5eLzkHJYowF7RCynypwTwZ4AxVcj6",
  "key22": "5Frs2HeJcHizAT3dLdiBPvD2Gq5tKnco6Cs5Dy5FrKEFXPSpqns5jXXXQDwJQx53LYLKx9xPtYRWxEaz9Z9tui6c",
  "key23": "22tCrLtua1wZSAwSkSvjURrjhU2aRWV3mAkoGmZFRkvSPHMUHqjsuEEpU6d8bgtYv3cN5RcxduT3WKdffQPLhgj6",
  "key24": "m92Y7Mj7mPxReCsm5b16RuXANerq7FDyQtViVUWyx1mproYNaV3o1y5CgXmn8ts9Top5pky6zjvdvu4NdwtjGpB",
  "key25": "2aH1eh4uswtxYhYCgRhsaDNVeEfG1oN6jUmCu5n7p8L5Po92o4LEW76rM8bthXgYrZuHhLse5ajraUaPZQyo51XR",
  "key26": "5Um797QBqHoPaG2ndNtyvoED8BSMiSS2NugXPX2H4tPR1A2NVbbdwkXWVPToYrkMrrigspvH82WqDdBnRNN8BMVD",
  "key27": "2thJvsNnXArvsoUh1ZXXku3pd8mtVzsGwJ3sPbNdLFBfTGavNiM763ZzQEq7KdA8c7vMr5f1ixVoG2TUSfiNLGEj",
  "key28": "66tq3nT2zDYCjg9mwBAHVBfYftdPT5FchZLgGKg6aiydXg97itR4PHVqq2EKyave66m2i4uFw8uivdH9dxkbL9d9",
  "key29": "53r1vRrkF86tDWKwBDH7PjujXvLPJBuRS24NfVypHahTeXMp1dwimXHkGfteY18eCQUo5vVWxNDbeUkvXt3GwUch",
  "key30": "57LLuymRJL9Ncr8CPVhF82qxav1iw6hAEaJFpNRnS1ZEuYKMmdaPpYcNiNnKtQoSLzaAYbKzs6zDdL9NDz9V9BnV",
  "key31": "2VBeH2BWrrY9Ka8TeA9pBzSMzPfmeihL8Wh2d6Ef6zF6NUEy6gsdZ692H2EAJt1iMtuEmvaBTdpQmmriH9FTE1ZG",
  "key32": "sRAPEiKZnKSvjrfoVo5mWoVU37pjRagbUhFqSEPrHgoGhW3X8bgHVFg34iAqNzZb2oBBbq4RuZJBcQnfXiE5zeZ",
  "key33": "2yo6ddSqaaUVb8hXHecihVpjTqdmiWC1Kg89LhCcpX2csTANocT2K89Tqs45gX3n6vTKtYe1JmVbPPSpYCA4jPJQ",
  "key34": "4aPK3kd1mQMAc9pudvkyrTMVKNW6zF5A33qrceRhu1yeKRvJBPNSc7jsynZecmsJfDZcph8h4cpfjFhLQMTtBxWz",
  "key35": "5nHKKj5Jr9SSwQ4tsiT3Yisd6tndHujmyCMUwmMtSCUDDrhxfnfFGsbtmyXL7psFZFaL66ig7sKTrBMP6GwRgRe1",
  "key36": "2zPbUT4NdpBbGXpxzZuVYcuF2kjECwNznBjtwz6CegvMcbKoFykaRzKdBz9H4nppVzAao7C2CPqGzpD5bMjiNHb5",
  "key37": "7Tf4aGi4bEZUe1fXXx4myH1dnKa4eGp9q4a4dFHDXLBYZBQjgZLtCS98Xj7WaGcE1681ZGpgYe13qA1gTttjqJf",
  "key38": "2cZbXmU6qAfe8LjjqMSazKD33usZk9MFdUuEZ4HGSYebXjfXP6PEQb9xsqrrJmuMzeRnsx16XSFQuxpa64LhiKDD",
  "key39": "3zc27aEboZwq1NxJYe4PGGnaydy3WCsGPCoZKYh6L5NnmtMiAofYGALCfK3Adh1Jv4NDAxhiFdAJdXV2gzGUmGX6",
  "key40": "4pf1LqsDR89ptV8hJJUmrbJ9e3cCtiSe5mYMYp2XVQWEkCqUVfaVUXNwszWnahn1j3U1tWbKoxbfa8VePmZnaeEL"
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
