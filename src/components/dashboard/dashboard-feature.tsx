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
    "4Wa7xAZaeMv6L5YWhDgCn3G8xS9X4CU6aewqbvNcVxyk1qrYDCatcNQ9GLfypg71Ynu2b2E2AcE6ytjzGwfrJ3kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ptqrg3q442TrWTGs4fc22vVVPsk55pKfsR9Bf1YJ7kFYjM7NX4mEXrM7xdsvk19GuTEaKipo4yv3ZBRfThh3Wyw",
  "key1": "5ASnwt2BH2e7b5X99uSeomPHPbUwG3iMoPEddQjFCXaWpTY3FFFiePz1Ey1EE7wbiUMa27HTb33vuex6sSSbUTZg",
  "key2": "2ZKyWw1D1Q6fLjoWy5r2dLjV1WMtdZ6PPqHEqqMPeAbah8wtumwZ88MwAmM3Tt7y2Y1nGfc6cPokEr3HzfCMD5Jj",
  "key3": "3F7sUMpjGUpgpizJWwa4ytThomd1rkGkbmpg5GFAUTwMHRWo2h43ns8JYLN53ijDNZhcsATA4e9pGyPNzU4mnbGY",
  "key4": "61QcE8xcnFh6iJGfMtfnfbX758URZzB7yqkWvgbGFTRrrA1TAZ71tCpAq23c2TQNsn4EXQJNCfVbLAD2p127RPmQ",
  "key5": "53GcdQSPDSz3qBzUHZKx3HsAVnFPz8uUYCwEHTo8vmc8q1gT4Qaj9mrRkKiEwt3hMpJ6NHEpMpP4pWYHVh3m6m2t",
  "key6": "5APi2TB1qBaY65c9JRGSWqu8BBCUComRa5SGkLFu73LkgtXWxssvVKV3qQSeF6RQEsC8uNtjqpXQ72fcUfUE8oH8",
  "key7": "3vstD5GrcUTvpQUZy5cfRnMwHKGgj9J6AzXBx7CSiqnrPiyM2yxVbZJQCR1kQGqD1hAsZXKoeE2TpLipj1ZgEtMi",
  "key8": "5qWKs5WS5ZHTksKZm1pvAtp47UCBtYL8XeAXx8tFmQYzK9axkZECDd8AHbyQDgm9L2eRf3cdp42Kah6KUdHSk9Vh",
  "key9": "24nEP8nAYJkRuzGt8Eu3uUtKe72r6axHhmHjAtQeEDW45HYErjnfjGYEDP6hQaGsbnjV3v94qyQ8bFcJ3aFDMZxN",
  "key10": "2dP3Y3icv6C3eokcigy8TT8a7F2gXQyyo9M4x8ezbroYcV1JNxUtBgMYT7jWtpuRsfpWAVorFf9xM1AYhtynT29s",
  "key11": "5ibPpcw1YvAmFYu8srwMTY8T6xAJgtvemjor91cuTB7DYmdYqtJpWq6jKGXkg6zX7QcgpZNETfVdA1DemXtbgVph",
  "key12": "5pTTSyHXSkYDjq3euePiAcYpVjyg4GLL2HYNEDs9GyBV7rRVZs7EyDSa522LTmTnJikctPCEQ8AfiWkFMn568bFV",
  "key13": "5PuYmVAcBNtYhCDWjvL3kJtNED7qudDypcHhsj9Lnq8FXU4SrauZp9VMEXWMmxXvJgaiwYEpN5epBkcZ1F4u9tTk",
  "key14": "3YHSrWpahnC2xVQZitp7StaMDnBqcgH9NtdNn24b7Wcy7kVEMdVw8cJnLQAgpAZx1V6GK79ihz33KkZrKZZGX9Za",
  "key15": "47GdY8wqS3GLLLFTqwKDNk2QzqS16WJD1BGB3kK6KqMvXk3BGR4ebcxwSQujumV5jGPyAD2QCAArEzFjqBsyitsc",
  "key16": "46sweaLh7raTgYAvhiHF7KsWVKefgWVdmYBZ8Xvjb7mGDeUUkWrQyJwUCiLeGyfsomMsQ4FbGTWpduqdH89Cs3hq",
  "key17": "4zQCgd4vWuEebPS8NcBaMqdhvfiAc5DRB7Khg2oNUx4Pwz5dZJSxTQU9cWUZ5KKUgmcwGP1fefiMxU5Bvi75cW8V",
  "key18": "54kCZSd3GkuUDV4SbZhX5DnF1onFoZFaGRHfmiriD86Wo1MDPQKQj6aj9UeCD12rqwjkzivKmmEVgfhD8w1diEt6",
  "key19": "4JUaLfdmyeqtkKogGJN35A3CjgkYWzHJxpHNy4tubCsRqVtTK4wff43dbmMFQ5D8hHuVR3mbA2fCkUmooZVUUCwR",
  "key20": "289US1ksWPNbkaCmzdBYwi1NUzchQLLebKMHsjFrhpvgYTZQndVd3NPanrLEnfKzLPL7jer1gPna4cSkPiEbwQQh",
  "key21": "51BZt9UTAokWviEtav8rYbt6wdcQgEUwXorBrCmXcK6qmgKdTT6NcgzSbHQgrKQbMr9mZq5XftxqsDzP2y9vtN6i",
  "key22": "4kpXgUqFx3tbGGUdrYSYHQ7CBqjtGrSjhhpDeGhrYghUAMx4CtSTbHrwGQhT8m1xoi3ySu5bnkzaDgqEHiVafyiR",
  "key23": "3sfDepHH6dt2AVLeXg5KYvT5sLEavvJTXXYUEjcdLFEi81sbi7RxryyAzLg8PTx1FLi9mjd8jvQmqXJ81DQDcK1t",
  "key24": "3b69J6FYwChYZS6m1xh29qbCD7H8akdLKdkV8Bnf77UbXwzeRcAEg3RRvypJ9Xg56DA2GdSjFSrZJue1HKVnc8KC",
  "key25": "3fyMV7gDpzuhBxdXWXgLqmHgtt1BEVQKXzb1cVVdazqpyXZEPAmSvcYJovxcezNTsruxs4rnU6Z6tg6TrPeButwn",
  "key26": "2cAmrw8uzfcpUJqpcYyzP16m9KHjx5Z745dHZAJia2CYbVBqjLAHcbatzoWCJPbsNxmCam6jNYBnzUX5a2ndUcKv",
  "key27": "YYqaUo8z51wWEAAvpsUwC64ucaKDeBkW1aVMmokQnYKUn4w8SXYhjAtXGrPvfyzsSGJopQed8gJ5ydpTnXY3WpH",
  "key28": "GV96koL8fy2geX2bdUSHLZyQCdaKAgbJMecMmMA2Bu2vCtxGJKzmT5wKS1cowP6xdmD6WtNtCTCPpiA8ppqsMBo",
  "key29": "2t5WGyixUq3NE2qgCDtLmuB4LR98miAVqJBA3ovyLkVmw5UqY6HSe2AxDNDSFma4K5d8MetYiwYTpn5SFEVfNLNT",
  "key30": "5GT8eE77HsQDJwx1Q3AMBCaDjhrBPRK1FNJRa2G71uSnsmtakRTJhoMUCftY5qCaTKTSwdSqbBU3bBseauzNz2ta",
  "key31": "3Yosx8Wx1Ln23m7fy1YpnwFSctZtmygdNUwXavz2vUUU6VYEjAbJsE5nUABz5B4HEUD5nrYtJHnojTrBh5EesgHM",
  "key32": "2LcxqNzViV9jHC96zNh7xYESvSkomNX4CJj3vEAhVrQirUibx7oDmPzxR8XTa2x4wK6GQpjfrKaShTGjthgYWwmv",
  "key33": "2DXVtgZUQgifPJYnud4E8xrUePk4U46Enq9z2cMDYuiky7oaASEjc1LejhqaaJyhb4KmfxyUasuWFhn6orx7DEZv",
  "key34": "46fvQQETe61vxtQdq4CRJLwNtSqDjQkAAkrg1D15DQeup1uZtKxz1RphQvGDo6vJUrcZgpViZaAVX1daTvyRmsYr",
  "key35": "2HH1baGpbyLfcNzW8dyW3b8BBioj2cDZnzu66wD6jWK1vWH16FTKjyRbFjq8YsePdGDhF4xLLQe9ywezK3X8SZTf",
  "key36": "3NZA8B4Be8V7mchsTfKiJbFwPrYzyuWEYne72QaxAmhBLWjccUhi3Ca1bCTjqs4FR3xgfQb4UUQMebCyQuRcuMXi",
  "key37": "3A4ugpspgiMkDfkN7jhxzDpaqjdWWeXmPaJKSMzb4JsMALpidDNFwX3mLHYDXYkNs8fv9e7A8jG2PDtqhJE4wARy",
  "key38": "26pqzb57jEX4YuqZQcEs5VWFg75ERMTkS7e4zjnv1jWdhL6oXkkvSPQN1NQ11nFy5U3D3t862mazZazx47gdnwTc",
  "key39": "29LkGxHZWW7u3pSZ2yWpy372HPeQUGDcoporEuLRGNzvpTiTCQg89RMuMrVebqTZKVoMcJVfEmWSbsLQ6Dp2ND6n",
  "key40": "2a6g3m7Ni3ibE4u25T1Jac3JEAPbMdG4ZntBkafuRB3Ke65WtK9QmUqtcN3bnYakJtwkcitdfUeUsodHY51euvy7",
  "key41": "3iwFjmxLWk766qaNrVCeJ5tnTezJEeve1rnnUmp4ZkxNKSwsg9PHXUUcAnG4w4kRvePRjRTZchZhrw3tvR9zCRBS"
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
