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
    "67Up39Xs2ah5YvnK59ZQeekK21CUHm94acY2G7m9uefDmkzQxSr2SsH7dNeGFPpGFzQ9tRGu4pKPLmMVN9bDbXMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LogNw32wLTiZC7SRvKLCSXWbmxY7twAK4X1KihpdmaoYwQpohsY5c9iixKB7u1NwR2TYgNiDTJKUq7AvoNaX5ns",
  "key1": "2zN9sEAs7nR9CZqHULT8Th6ncT9nPufwVwvG96LX8CaAMmG1Lsy7ZLMCJQSjycr8HvLZjrFZTJK6mNHrx69He2Z",
  "key2": "41fm4N6wchyJ5zMPfWVNDzmgYvC2rZyjyau15JfAy39kFuGwoscqyjaU6N9SY9BBKbSZKYYzUCWeWx2tHgubDGQj",
  "key3": "5QcZLce75tkeauqaaDiaXgmH92to1REr2FBkfBn56vCwjkcHwByFjuarXbs1V589bTCmYCRngEcVKCkCvYNmwNhY",
  "key4": "5cJoWhfheuwrAta5AxgZnYGR8SwMduDZWwBcRNcpMZ1Mn2C3vLBnCGJJa64t3fj4Jz11FjLhAT66G3v6ZAkC1M56",
  "key5": "4g2DbJFhWczyLpTJbmaqtpB7oq48itffmXw6kXDBtfQUzhwVaKKG1nHpmZ9mHy1BwDeLy3iMWYFyiKfTMJrUwdAz",
  "key6": "5Dox6Gvrz4ZZSysJJLTeGZmVYHBGkP46Z8Szdr21YVCSgsUrfQgG3mm1Cp3xBTgzQLJJsVySmBUFvy6368E3Vtq6",
  "key7": "3QHJyMtEDkDcu1s3rL9iXs12V1DSwUXR4vtWfNjDVAHdhBvYxPbrgkeqL1AvoVuqufeKAk79FW2uUV7XQkzcGAHo",
  "key8": "m6i2SydK8DezNey1UA5fPGXrrzytrmQoQHSXokvR2BxCCDqHBHewXYGe85KCkHaxNhySVmwi7KvtErZJBR7zdEy",
  "key9": "4GTGPMtdfeatLHHqetjBN1xnJq9h73ue95dof7cMHgPFyoNvBwoTJuWwxJmFxFiiYi79YqgXBgkfaKtN6od1PvFn",
  "key10": "3xEqKzm2odWfixP6WCijsBxL5YfemzZ7HSY1yMBcQe3iBTzZWCwtAFTUJFZbv6XHUUu7RSmUyeXngEkrwCYvV7GV",
  "key11": "5LjM7yyP5Rr9FQ6KJMY2SzVXuXhvARgxvo3LuRT7RY3wyjSYTG89QGuh61XFLcyBa2564o7o1PgPwynDhJSjBupv",
  "key12": "54xNvBRePJ61ntDobSGU8hwThdtK3X3REhbyRtXeuUS7NFAoW6UK55fmiGUigkSFUCyQJFb92bpmHHPdgVWE5PhP",
  "key13": "2onWJaoRL23YuxjihB3pSfeSQn85PVUFYgcEJWCRVT8HBk2XAZscE9ddp9iEkdFkEyta1T8N3JQJAcGNHh7SNYXq",
  "key14": "3HijmBqPnYKW2xyGkYUTLP48zUorGVTtzc8tbFKFunmNwxzGuPVUiyHsJM6K7Yk2MS9wA3ZT88Cjy4LbbzrWWrZq",
  "key15": "5S1VRC3X7KnjVbTWjJoZerDP4pYCZpxLo7GXNb43gQJ8KjkdDStTyQQFpT93D8gFKXSpWtkFTP27jKsNaT8A9F4H",
  "key16": "4BfnMFjoF8A9PvaBirE3RbgHHsyLjZxCSk6HeMkga4b1AgvCuSDEmomzJXHckXrXiAyvCMWmRmvRXZRkWRPkwvhV",
  "key17": "3JzVe3gwwDaz7mCXLYMcQDCRNp1JTcjnwBhzosocp9uY4sf7VoB7ubdbgEUQ3JsT4pFv9pageRfdE7TCtnGwBMcE",
  "key18": "4WktNGggVGKDStdyfDUbmoAna9wKcL8hysRGptGaeD9sDX1koNBpnDzFxAqgeeFVStHbNA5hiB9FaXoY1aLVsh6z",
  "key19": "2FhTfu3tmfnvSqgG2mH1mALUCW8AwfGKZbwFqr6jmXmb5QigCV57FZcQsUHgYfaGdXANfFmsgNv5WRUnHkVdG3FP",
  "key20": "2B2i8BjtdsZHyzeq1dVKWsyz3xhQEsaLXzpd4o27JwpbjcMYnqh4z5LVx8W5WXz3adorXXiyJghVAjCPQaXtAkuP",
  "key21": "kqAPEzTG6CHVvKn9juCGhPEoVeNmt4hBRk9NVG7TRLAFEizwLvrptVbXJkufFjaGTXjnvG8hvnB14KPXC3VJo5N",
  "key22": "2UVtyK9yWs5rUqHR6HojorGgreQVko7Tz3WHUoGdNyTBgcKeeo2ViTqz7w23PvcocqarwhctB4n9jMveGZCB8rK3",
  "key23": "3U7ZzhcPZYkLWY6fRjXbDBkZt3jtHKoaVQkRC2qWTDrYjaHt2QtKKAzX5iWzCWJhD6t1ZdoA7gD8eH2fMvaaZDD8",
  "key24": "4CfFSz3fkwC5VTwx8CZX7wdaCPAnuNHHp4SibnkKxcYgWHjbvFC7bonnkTh6dnC2P8NbxXMzQJ5L4iEi3D4k1NPA",
  "key25": "32zDVvLzaKJX5k3QMQ1cFgbxGbpqrRj77wW65dzuNSsXzAD1ua48UPdnv1rSjBHidkL3QiW51YPjyg7GL6cuVSYq",
  "key26": "4KSihqfT3YWSSEKM4s67iMzjDaJSC3rPrMDvyfVu9ry21fmjAmHZ1GGQr9sHjyi7sLfaXNnMn165bpZa6Kr1arcn",
  "key27": "4ZVt7rPdLmR8RcqWCpbDVcmp6suGwxGSKS25tGvVM9UafgTEHRRhJfMGdfkjFizmX1BV5W8fNyfvzJcv2EUt8TCL",
  "key28": "4RgPUGwk9wVrk16JVWQy1tqvEgZ1Tmbrw4BeAS8DocEYoDdB4ndf8G33qo2A7t9a1y9qhDxZQ7EdCUSMD3inS2U5",
  "key29": "3fvZzPnSkE7HS81sbMJvYjrw3BXoJAJAehZJF6kAtWanPxNZkTHxPdkzujytzGjNjVog6ycwFCU14GihhcxT6Eod",
  "key30": "4yfvG8sE7BVhHkV6srGP49saEmBdQdVWEZzpZLEqrTKYfU7oR89NAEHp5eceE15yM344jiGboQ8J52A63qxyD4Db",
  "key31": "3eALvYQD2S9G9DNX6Vn8fubRXu3a4VkAfYW1Jo5CgJPcY9pnRQ9EYSdDJHu8ZvfkLuwx11sAGmhDTKnrDELttztB",
  "key32": "4nPn1wwJABg6SuNC4xBDLZCJ6MVLMfuKKnvgUVizPYY1y4LhwfBdH6e1nzRHSAYWZi6eJdjgEjgUjufPkvfCh1rC",
  "key33": "3M77zi8khVCwDA2MSTw3txmPN55bbumEV4nXDz4d1f5xzQofVca4RzndmPBGs1gdar7tSmB5iouZwjcBrb824ML1",
  "key34": "v9H2pAHipZiv8eLKeMoNnrWRVux7KfnnZQUhoLKgvhGmocWwkRH3166req6fYkWDfvHPpgnszXcmNJtud5Fs7G3",
  "key35": "2AD387kvbFPaEjYGUKf4CTeyXQSLaxuiqN47TZVFjE1LAyGcYyovCLEsAsWbwLrRdtq2gNyfMCy7gfhpkRSmrTD7",
  "key36": "7erA4QZ3343Rroh3XQuhZdHwp6rWopbBt6ME93FVBamFLhHuwYfZD7J17m9aHCMXKrgpy9H8fMQRR6b2XXLLAh6",
  "key37": "5qnSzBQmbZ8Y138kdWE93SDxuUZHmr5cpQdJJhJQEWc3KhBMvaAYjqWjapVfVqtFbgaqwt22WbDVbBu64nvr5csx",
  "key38": "4rU4qEvNUr1XWjxD2GEQmn192hUqfYR3YyN3f5eSC7UKEFzmxjxEaNxDgLUHnZNub5rEPqD9A1UNj52urdHuWFMQ",
  "key39": "pRtwEmgKXGDXgjJeKotwGN3KmCavZmUhosqQoUw99hyqF7XJ881vjxVpd9U4SgPKweZk7avYTx9vhaDk2kne7Vi",
  "key40": "3pAFu6YwYDcsSoSDPtoieA3pvm9WUnpSYP4ESF9fxMDSeaTXi44LCezxb3wL6enZgRpHyxcV5hqbtWZy4goy8185",
  "key41": "2ndNiBw4Me1szziX3Rb8EqyDPdCD4nVWHAKh9dVRDApFTJp1MBsCfQVyry1i4HxzCLtZZnBCNe8FSSuuRq61EHhM",
  "key42": "2aii173DFY7kokSiwwx5nTtn6apT3nu83GorndAT35ZoEqq6Vu4PYPnU8XXzWks8mmvcgfDVuPWo7hgpHeGMxcG7",
  "key43": "3LTREq3AxvNUor4w27x1vXxkrpZJE8gvn8rDaVLJqszkukhWzUxUCearmiWAbKCze6yrg92nW9stbc7BaPHgDHqq",
  "key44": "3BosqaTDqk1aYZUeGv4KRzi5hyBbvKZfPtPovgJtxq8WjnAjW2ciN2A4twszJswtbeg2iMcF7RCauijhamVvEwGj",
  "key45": "3Son9WY9xjZG1NfoEe5yDgrJT77BBem8vUFbKB4nrBwSirk2VjWTGDU8MR1su82XBW6dKLkCqrkJtYrDxvfxoEvq",
  "key46": "4QZEPrpqvoeawkC5BcYqjiA2ymNkCsVxRS6K3tKrYPwJCrPDtxuDvJmVNuom7gvYbLReCzf6rSLLbHKajCY9HN4f"
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
