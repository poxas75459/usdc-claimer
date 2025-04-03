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
    "33z8ytBqtwwCnDNha1dKukKUSGajg2gDh1TYV5xQLdM98NnpJ5ga7LHF63SrkoPCibUqwZZHFyYD3rydaQBjk8CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GaX1C3F75BFa2RqaAkCncWAe6XKReAuRxhLkM12heWCkuMcrJp56ZGGwknRWop8xGrKRvSZc1DWGeQvaoLz7CtA",
  "key1": "5wvNrEqJfTBpyjpZR4g7ia8t1xKMtUSud3WExa5RQvKkwTtimff4AX4foewJZQAXAVZYjJqp4rM62pukcBfZssX6",
  "key2": "2x1WTFd5CdSV8PRbUi3jYQgNsA5ZHuNempWDppEPDsTn9X65qRPHh7GgoZX3TqYemCn5V2Rpn5eXKQR7jinm8swT",
  "key3": "F7QbJ3PyZ9E5kfYk7BRetnSKT9AMWt88f3iWAaY2589quHPhYxm8Q7dspjCvPBRjPTV1hDw1ofgy2owUj7CZELs",
  "key4": "GFXhanQWD4mm4f8BDuUpdJ2QeWKmn5Mvkf6AgFZ3EqUtaoDcwKoGZXdM7NBXi9EvRDVE3Nk9xMGhuqQEDncVZpY",
  "key5": "2ANqn2nkAyZMVRxnnBQhv3c2d8opE15rKTNkZP28jyJnnrNiYd4uPJpwWSTdPzKe6qgA7Ndr9tu7DihkRV4GqG1L",
  "key6": "4JZB71Nku8dmMJfYDdKKVusnzD8h3Qq2SWTeTe724hx7Pv9dR67CqdHR2xjhUAdRiidTDLR5JXtcNMCX9rHHGgaJ",
  "key7": "3wP3MA38YDy5UCNG5rwi72P245A6L63E9AZpy1A9Ftzw8G49gsij3ieg3W683XS6KQhDocePLxLw1E83Lk5reZd1",
  "key8": "2WcrQLNvt7g9hWic7SG65W6xqtekmZLGiy89vRh1CuedgL5UN7PNQkMzijbTaT3gYnyPitPS3rK9tVwTJFHiXqWg",
  "key9": "3gZikkbk7rGbTqhgUQ4Psg8BkgBzQyLq518s7pYcNrJ7d59iueK2DZ8aUKFZAT4rHQcHM9nP1AUCJ8vi8goEfzJr",
  "key10": "yT5yPBaUp7Vwv9QfUcDGrcZF8PD18tKujMXdwJ84uUJeyVZtcv3BuJGRqW6B34yax5mj4D9ihQhfh6RMXzkVqit",
  "key11": "62yowj7WBAkAhbkd4PtmbCDxSHk6aFWBeYssMCHFNCaGXQchNHm4zgbwYasMtamgankE2PtE1rvjxVyx9bPBAfw8",
  "key12": "58s299vda8GdoAmuCtYUQtBpAS1CHRDsnDZj71FTmJF7pGCePcAwX5weWrhrseKQYGYGiqxkCnNCMwBpqXcnsZcG",
  "key13": "37sVUcVFXoiKARVRJtjTmi6QZ1rapmPDrHtAR8uk5vxWwVAksiTWzJf1rTbRYda7gJ3q3VmzmkS5yXuZ6ERRH7Wq",
  "key14": "34T1MZwaWFuteqQmyq6PDBpqEy6k6Vea9vWj2YqZkP17QW2mYNxD9sQ1TqrEH2DJLoxsSfGcWH3shXgyVTX8HD2A",
  "key15": "2ZoLpJnxKJSJ9amF6MCnJU6eWmBwfmzSpQw69ZeiRfuLrehJP5XPFSRU2w4ojvWV3bVbC9s6zJ1hkUHUX3BxL5py",
  "key16": "2JvQ1u19ckb4axEX5Vh6VADA6gjqqzWqTSR7TSy91A79ZNASnHtHswTTdmH7d2Lu229Yck9MDr2rFW5U4SVm7NLX",
  "key17": "2ui2CEBsnExCjAHQTe8rRKmskzYPq75myAizUAM9mgRFojMCN9Coaj18tU2aD3bYxjEyBai8qqYGTA2Qex3DcNgX",
  "key18": "q6a7L28wvJVDmgMPwBZp9dzFgofxxfMBmF5JqnMrPBDH2K17fCzSLifiEkWDXfUtgDd4UVHYhgFNfRio6rFPiWW",
  "key19": "3VvxhTgfNsCmUsbU9VKdFdGh3SLMJyy7J3hbDvRrZwLWRe4tXw7DAFGwEWGM1dnYfTqJN36ToK5kjPVMT8RvJaTy",
  "key20": "4CLCXrTYTHx9rrZGNGx4S9MR3v1nyaM6kuQrwzaxoXKXLTjwoYZxh2BiGTj5mf2PUgijRA64bXBucrvA8xPxCNnX",
  "key21": "2JLRw9fjPedbwUvibiYCr1ewvzxLUyRSwu8h4BAxonq5dYsNRFnrAZLaY71xo6BHXCKpRZn8Lru7XYnm51JN7u42",
  "key22": "4kyDHy6VVC1dM6LtnKQZmCwo6iKQuNfo4gXPvKd7sih3psF49oWPkigZTZqY4r7wpTZbNCPc2h5FoP5xMMMWxRRu",
  "key23": "4pMUeKtWSRkzicUFf4kQuhiFigW5iqdphreMPnWRqDKJRMGUdCKmb5i2oXS8hJWYVHvtinVDS1fpAMeYPuBJXHcm",
  "key24": "bhmEzzKQtZrXAG3cavfq7AJw6PDpkTuyz5rbRASV2fac1KRTm63sUjA9WZT9SJ5BApBAgBVrjdcYkhEeB2ySABN",
  "key25": "44YP279qwVPh2Dvunkthvi7mGbAv6Yc4H5JykFThTzLfUPmMiAJkJhM88dJHrSVutN7j9MLJxMNE1xDUUrr33F4b",
  "key26": "YnCfgYzjubgj4u1KkE6jvi9s53aMqEigzsng72RETWRrrNEDcMF25rfRg34CANFU9PqFwRtDoGBtkW3NowDTX9L",
  "key27": "4MQTiRu4tAdZp9zXpMtuv8sUrLE1DAebQ4LMDSG3VoncGgpKc4q7nxr4gdLy2UQ9onD3vu5cyFhUwGSdgP454qUf",
  "key28": "3d8QgZdFuJCS2ExAszGDC4VkCLp5WmbNaxQkjTug6yU2jFqEdbQ5CRPgSNMRGYKjw4V8cdJvJZV4jpZzqfFZufgD",
  "key29": "322Dts3JceHLv2mzMdJiKKHuUSFTCeWyMpDo1NTuPFzR9HdGMsSCRCGuWmSKLsEPM1tgJ8KE8WVpjasTjL4G4MxV",
  "key30": "3nruqX3yc5owQixRoYNCLqXmYqsSsu1mYVThV9LfRbsWxWpJfKXD3ZAEzygWDEpZBZj2Hz6VgDmYBa4Xr4uw5jwu",
  "key31": "3qWEKz8dtpPFpsfzktAF3iPm7sydg21NopESNAbZG3oyuFf4TZS43NKBXmwmhMMkRtTH9iiGz8vnRmxTWVDx1Rh2",
  "key32": "3V71CHM22zC9mqtWC9V5Xs7shkgsCYgwYgF8YZwcuMp55TiKdQ8R8bLJ9xwWvdYq1DJRraEYLzBLAD4otLVzJaPQ",
  "key33": "3i34z2i93SYcsoR7HvwRwGbXZnkCZqHaNBSbSSwjBZyNhhM6xCTMnV4abyUYduB6HnFR5LyJR7jSYT4sSXnhRXAa",
  "key34": "BCxVptBBgphPG7n6CthTy1YKBR2aodbs3PU611M4Bf5gGX2hHAva9x9phYaLBKkKxqsi6oVKXU4uzZZwsckLmmz",
  "key35": "4CzXL2kJ8QzHkfkgWcJMtMCGnRc8mEiiegZbGdF4pRdu1ujtRtb5BUzxBTQgqg9dEHdkKpWG4u1DuaiVzu4BQyzE",
  "key36": "43KJeFqZPXAzQUzvNJkJTpCoCrwMp9WeTa3CJesfeJX1p5pALcuaCXCzQgfa4TT7TpHHY4dWJewYgr9HM4bUDiBN",
  "key37": "4Qo8ZR5NNjbp9P98jCyMYYqK28JcN2pNemKojwRfSvKe1FvMp2CbEuzHdaKzXRsn6RsEnqR9KzsTQ2GDBoMUzUXr",
  "key38": "3t6rtNQmAarwGsN2Df6KxL6qk2VuhZKioJxdStRdCgvwRVtX1gtbG6VcakysdemgsCDD9ZMudC4fpy94gWimzhXr",
  "key39": "2Gm5qTQroqPU72ZfQuaFpNMRfTeS9m1Nr79tt1BcoThdGr9uAAqWto9zm5oV56Fh95D3urGK3sMpyv6YfkTts4zT",
  "key40": "5FtVcDefMdeH89WJM1EByBqfw1RQoXCxoSdCCPY95kCTYnjL21XmB7cVFJWVY458VgHNhPwfQ72Tu6JHtGwgHxK7",
  "key41": "44eeBJvxsCCbuizmzgSDW94XxjZqXjxoChjZya836XmhT4TehjK9mugf3GEfza15eDZD3wzoKFNFqYNASvSyYDv1",
  "key42": "65HoyDwRHppfKt5rKdhp23aUeR3m6iZhPQbn5xT6yNFNY6YycAk1GMyW7YuewUv5RNwDAwemhd5nDLMDKUkzZroM",
  "key43": "5EGpupLwUgZntK5CKFgbL7bzov6t3TTZEeND2uXf3DH91JY4xrNzfKAexiug5AJuienGduRo53qMeMRuA7yQWX1R",
  "key44": "JwMw8MkfxniKYBmwdsMcKYtP44Zm2GXc6QuEb1nperYoFxY1N26UVHzJ5Aw3MUkiavMw1UYYiZQ1pNdQPHCyHMr",
  "key45": "5hPg7MH3rX8dUpqhXBRh9sywxaS51ir1wZRsE3BD5PdMMJyzA3kj3ZKtfMfEDFb92FgdjkqSFNsLkjfpyhbN9Par",
  "key46": "4vb8pmcPTPMucyU1NhHtywkiM1QYtmz5dWzPtXfaJkxYs7WyFtG5R3kn6JCopixNjckLP8xWeZTgzvYcJitr8jCk",
  "key47": "2dgNJqR1GJt3U2umtFkuQ5WxSdBFmM5jQBJtidQwnUgXwPf4kPRbp2AHxzHSoWQJbiDzmwGG7dXyfeNkC55VVTmY",
  "key48": "2gfHmMEQrFV1vhF86AcqVxjx2whvJG1rW2VXujXcZYoCWcBA6jtN7wjmXutMsS3uaDPJKXf7hLSpt3aeP89Jgjv3"
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
