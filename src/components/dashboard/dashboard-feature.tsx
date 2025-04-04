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
    "V1v2msFMWTJXTeSo9hWvfWrBDodzhVMjexummfpfioFhA2M5syu7tvcTFSsAsuP1psGgwEsLn9uJYCxpEUL93QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLYSDXhkzQCbSQsEZfeuAfUX9zQg6hKqmHoLdMexrYAQijbD6gwL1DESmcegvv82sKBoxqaEB8YABSL9TecccXE",
  "key1": "2mpQwf7FLdsvdWesh3BrddZ4nHbgebCVkdromsUed4TnZrwpPbVWieVYBaNs1S67Z3dJxioRVtL95sMnKgjVKyWk",
  "key2": "5K3GgdjcBjz8DYe2Dfyhfnd196FLUFHVF9ptFrxKn7Doharh1QpuoYycMbvVWq3DNNUFxqpzKLKSaWKraZMjTK7n",
  "key3": "3H8njTdmM7AaoCrsHhRsAJdot4eMhghRvWK1VJDwXx33wokuwUWAR51FRWzmj8xqX5S6waWvhyB3DkMRZ7KCkS6u",
  "key4": "2TaEvqWg57rbLzJ2FmgqaBztWpaU2HUsgRK7YKqe47ezM9y7V5Ygcf2RMiSA7Yp7KViG4FUmaU5RdeYENQSML8d8",
  "key5": "26QT3DWLvxYiCVk6CAxMu29Rocr6FNUzbUfs8fPuX7zP475JapmYQmXfoU2sqmA3sAKJrdZ8S48FtkmCPyxQjiKZ",
  "key6": "u7YNnDzg4tEWUBKC2QApQURcFZiU7sH2SSfs3FzCQQjb52SpXGwqxjY4DE2hVk2xnPx3DFKT7iJgdwyCLFiRg6u",
  "key7": "2cxDVgfEbC3FQgvxmbn727N5H2oKSUzmC8CnzNkmGV8ZGzfzLQdU1wDpwhwBZTkt7yJ7u7BiVnMVLXCDnQdVxPRZ",
  "key8": "5GJiGmJ92w6NeoYvh33Hy9mDWXpWKigVdha5orTh7cWu88TvYmxjmGNP96n2L6FAXEypsDkDAqW7km7N4t2Ze4ym",
  "key9": "2RKymvWAkCm8u3hqqEnXFjutN43b8ywv5J8HHXqrdyxWyFZZjgqgVPjvoqxWMYkHLc51JNA2np3c9unc64yLbjcD",
  "key10": "4twMZbvcGGwrSZZCUvyb5NZDpBDpPKs9xfa1RHfGjnHf8cUFr95WS4pWaeCANCMuGmN2UbXg1vxAD1xjB52MMgdF",
  "key11": "7ptwyhspaGrSK8LZBt1W6PMiXBoHsSq3pcSjeYc865yDrr3chLY6o6oz3tDfnrVo97AMiUmKh8dszjWLmwL69rY",
  "key12": "e96BgPhLDydc2YsRYF9RwRUzcXpPjb3vBkJ7qhotPC64gZDesBfCvWenAuTT3qvpNPnR2Pjrm74JAqJZkWPzF1s",
  "key13": "4N14QaS6EbTZjvRthrWWjXF58eNyNEbLww6xDHHrBQEvsGWE984rUaU22gNQ6wHSkJ6QrnDRnqdmWuG5qe1XRAhw",
  "key14": "3ZPsjcprGiS5pxg4mFcq7EStCrTfxEKfsiMvDKGQymFfuaTTSdS8CNFucU284bv5HRuMmfMmCSqD1nm3tpBL36Ah",
  "key15": "58LrS9SLkaHyCmHa3vftjmz9vdH1T4j2JhjCfj1R5pHXizRE1SLZgPrC1jot4iRufSDp99feEUHrLxTw1toHNi7F",
  "key16": "5kMMzMiVYGhKXAomFDMQDGeVkKE84qxkvWAT4o6Pyf9CR7ThpDKRF6tvygmDUSusCvuqoeWDmpdfXR8XT4dxT3WC",
  "key17": "2GobHtc8YotZGu2UgxAKQNpRtESDqA4tPWFCFyHGPHwogCGNPVszRsGDFqwHPi1EpeScmP1NCERkqbe2HxfonSUb",
  "key18": "2HiCAXMQRcumhkPXYuiqLZQy7jnwivAqEtmZcyj6mhNBZpZm1huyCD7NaHajD5jzuhRDHF694tx8B2hFYEPwQYmT",
  "key19": "2h1xV2sMcsRaqBaBEHLRJKU3RiX3YBDaeTc1Y3j1aZXvpSktKj4vMS5o6Gxhiobh3Pt5AULz3Ks8zxgjFjqN55dV",
  "key20": "5aWMk2G3Fb6tT9kufpAqXdG7ipWNmg5pR1wgY4fbsAr38DUHebmP4rxBUiV8urkNtp93HM4X2KxLBvZHrhf9ZCmw",
  "key21": "2qpvD27wwKb2SbDs9DBG66ZEQngpiAeEbiTkWSL96Gza9MPmmYTwRBQFmXEtLQeV6n6EDhXqR3Zg8wjUZJaQcnpu",
  "key22": "6QRWjHd3DVf4fi5LrjDQxX8U8WX3Xthn78AbJWfk1Td3iMm7Kovk3FURsyE6xFy2QVAtSFY9EMphyXunCx2dxAC",
  "key23": "48hEBSnTJ81MKeE8Hmk7ghPid826CVoTMHmAqwQDmYEzk3gYFFNPm6DnB7LAzVVfHMAknHfnaFjLXwmmTQEfrSz5",
  "key24": "DirqV7Xr1HBtTanx5N2UGPDmE8SBebMwHcF6VAMEa9rd516HsKLcpSe78M5TMRMrZLCpER6u6Z2men6N251tbGk",
  "key25": "5PyYsgpgLazfyxEpgZzJV3B33Bbwff7EZaPBbDqSweB4sdjoRxRoaWwqt6fCCqGuhrwGUYht4W3EaGiBsPcqmNNc",
  "key26": "wCZJapaqXaMkAYSRG2Mze2UrdxzbMwbMM8WSgjv4JJ5P4i5xdWYFuAYHQJxh2vGqCPDSmTU6dTHsKijARUnHnb6",
  "key27": "66Rt9j7kFDf3dTaaDdSyxhDKJ6PLxLx6uvq6xqKXLNwmGgeG7n5NssTsCjg8KoGAsQWbzDZuvwCyBnu8h77ZXr3L",
  "key28": "5Rgkt8szbCtEPQ86GJszKVRT89wDDD5GJfd6X5eiyh2641U68TygvUDH4mDjEUVFHhtQb1XaFZGdPzy7p2eWDmxH",
  "key29": "4RyZ4zvyuF8o4jhgkGffEnNLsy5RHKN4paJTktP7RiCk6AYGbjfGCSBrcEg6j6HHZArqRQSdrUAd7drq7wVkWzWc",
  "key30": "2FnEtB5h7eEiMiEGUEsS6nxNzwNz1n26PGJBX5nP9w8jdqe4JE8YhtLLNu9z9BJ7hshTSNYUZtXxUcwsRroUX3RR",
  "key31": "2XCay2gf9tHPf9iJ554P1jDFWTH8tRybLoXGp6xJwVMNLxUEFRgyMfYxq4SY7r6svG5qgLnS6hpQVSkNVj5a1ywW",
  "key32": "5Xf7ULRbuaj6mcsdb7VPZx8QXxZMWSV8hKDEKgYc5eZNfs3GioLpYduFUnfqH8g6hQSdLw88JcChyeu9pX7b32L5",
  "key33": "4NZekpYBBemCopXXAZdXBVpqcFEvRU9M4LvrhqvWZuNcWN6a9JD3uDiiJzxQqWXGEt9UqUVMysrZYkv1VxwjScQY",
  "key34": "4nZ7JLuMfLribUWUmpRSq9dY9Gpmo2K6UvnQSRGmmcQKjzEZHr428Pnb1ZaSWcFb5YcBJUgtXqQF4yWXvTZ7ThB9",
  "key35": "2MPKrL7YJkRWdthqKiacCyVgUbQ9sbyuKGtukmbN1LotYMZQst4cjX2jEcz3NreE9P1R2HaHSjRkRMytyjy4eYeS",
  "key36": "3qLxjFEMs9aAvtyZoJLRDqKybTzbG8aYD1BnPtMiXfhRtH9Zhkm5jJEZSrQiKpVe4QGhB6rrX3DuYXgUwJp8JVdD",
  "key37": "4LNM3b6UBjoL2y5CeLEjr9qLDN8bAhSdDarhJXCKquwo34u1WtcffcNW9cpq2ecjGJWgb1Y4jxJghUczgv2z8QTH",
  "key38": "XAbTBrPPUpBaVDepJ9gFtgX2uRuAhiXi8enZfDGXR4LNEjyvNGNr7Y7Zb7ak3Y7wB99Dg1NeRAm8UyEcwBi5URb",
  "key39": "7M1ZGHSK2SZhqHWEXAsAXMF9mvpwdy7GUHfYxRePNqYrqixLafdEz9mxRW9nR55cqCRjFjWYXgoS9mmxWkaApVs",
  "key40": "AfGfVhuqmHdHGxMEqFb9Vo4mYM3SdVDHh1E7yBzajLcrTSwWXTfhCvP1nHTSSeCXDT6fT3GX3L3V5g3sfPv3ADz",
  "key41": "BbDB8s4QxhKyiThGAVZeR77BViJyZC5bWRwc5qpJ6MWQR4482EB5GefmiLTHigWkcS2fxAYeH6Z9bu2FQatHopC",
  "key42": "5c2yvzW87ij31U4U7bivpxZ11Friv9PjRWcVtDm5Xe3qVHPYRaoPrVw6pm6Z1gBDUvRqGeYaPgZ9ef2ZnvpoGuuq",
  "key43": "2r2x6PiW2o9Rspeu6oXL9KFrMzn53PD5eqkwYvQyhBGfuU7Quc9P8Q3deg7qDBiqVW5pdm1yhPMjKhMzD7hDHHrs",
  "key44": "2U5RLoMEAtWdeDLNtNF2nEzPfUKGZ9XsysAeiSSpRyFrUjHrKFdn2VWSM1kwdEBupHCgMT4rc2AckMQHPBX9ewoZ",
  "key45": "3cpkhhQD1nc8s4HU1NBH3bngFPoCWK1KGutpE8NLD9r9AhHc3X1CQgA9ufuwE3ojCWYynJgYpUCRMnEZZYg3HNwJ",
  "key46": "3cS6HXYxuH9rQ8CzjprRk9LkrzxSSgedNAvBoJVD1i7zbnZDVAoW6SqfTQincceoSXQ21JWkrgZsuutZFmnbYgMM",
  "key47": "5q4fvjsQFFGqCXWxM7xed8axh2ZV5jg5Gto8paSxSi1mpEU4D4UCVq2jYitPX6pEcqsxcpuLZt521GUnB7yVVuV"
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
