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
    "4uiQyWpdrJJzBa7NnLzHGAgoRbzp4qZ3eTPqUft9RXgDHnD9fwn4Pf2SbaS9R4DuAvBQSYGpaXoF5vLxDHAMKAin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBSKKKqC7eLjhqRHJ2CtaEvk1C539jHW7FiWsuJWrmLTtRDoFXp8GEiFZwFkCZPDiya8TsMSs41CF9x1tLeE1gX",
  "key1": "2qiAG2VKeQ8oXJgKEXHTmrGgzog87eQQcV6aCJ66sPXMAWmgc4p1ntZJTuddz1CdX2txAMLbGJFQwVefpWncmT6j",
  "key2": "4ZZkYEeGSRRZPNMADA6v9naGDASosPtoofNM7FrMMpfaK3cwSTDsHJozt26dp3Rebauxveq4fQLA4ULjFhYRjAmz",
  "key3": "mEGx46Tvny2wTQ1t2e1p7Vnuua1hGjDig4XFKqxefBrGtemH1Z5p9THEvn6AmAB6NwEiTu4JWds3YsPy8HcmmBs",
  "key4": "rdibg91MLHJCvZH7xXNJjM2CStnjbp5pUcufdYzFTmNXVjonawWmnr6oqwEH2QVPa4HoPjW92DkcH9NiZqUhuaj",
  "key5": "1YF7tz4NimtpQvQozd5RdqQ5k5Lr6by6u7pRSPPXJsASS98kneHMQo6Mif5FG4RZ5i1BE2bZScwDSD65wHoH5Nk",
  "key6": "5ZuCZBoHNiusuWy7rpJLJyTWXKuPxLxdjx6xfAz7o1cqRig1dncw4Ej4AsAAPbEYyuHX3VECESyuX7fVgFCi9h6P",
  "key7": "FGngoa6UEHqh6TXv9dG7QAp8SzHeY9jpryxdjvofnrSehkJ1iXYrLYDobv8GLRy3LKo1mr5ydmAhwuf6qcJDhnF",
  "key8": "5xQHdHSu2MREVL4svcQaHAqMRnMdSkSwhLmtZvJbb3ZswjzisfDQFr7ELoAcwT9J1VTT2aV5DZ1sUVoyg3qNFW2r",
  "key9": "persebvVN5zexAu6nV1Pa6LLm8Wn3yxsU8N6m4VrLmi2vzh4G752FHoAdgQaUoXTEhEbQUcNxD6s4Sxqu58n8q2",
  "key10": "3zxsq2nJd17EfbFcnGzSAt2sE6EpHoqwkE64qAFPwnXWVyRnUCxGP98k9PBr3F45mRD5DSV7rTFtSjWHT6bUndnE",
  "key11": "yTCVRugB4VQkdMEi5TvrtR9AQ9fGWnLtMp5GHEgYgZECZzpSVvFvJ7udS2CjoLQMf5mBF8Cy4WL9HuVduvBdL4n",
  "key12": "33WM3grqCpHSoGTQAt6DnK7FRRgPaNVMgzPJ97ysajegyTezLCu77qn3iNcWLH5CJt1WBBWd2pFEXcHCrFntZcW6",
  "key13": "NnL4AYTbaYW1amvtv5wL7hCggPtoeKJgMr3tFffRnzjFGM5JHcRT13NPZyWD3C8dZKxsYs8nSw1bvm2wKvBpJNR",
  "key14": "5tLdmCFmkz8zgfmaTWVpcwCNKNJsw547zYJQMjap1nYXMkZp6cTbNgeZtd5TrqnTyffdnC3Ff41gQqnGMhSJNYNi",
  "key15": "3qaDqGqq64KsUcMfb8zc7RBSjTUam86z1krxNnHvqtxrUNDdM7ursLmQVK3NYdkrBtmqGZHFVSUC1NhkDoEch2eq",
  "key16": "4jzwEyQHQX4oe1zygrjMmp5m5DLrufpgg7F3SDXyZRiW1aQwmhEzgpyZoVhHoYpGhb2ZXWXERazjovHVARctWSag",
  "key17": "4SABAcLSu8tt6kWY8ybWLjYhaxFakzn4tJzdKH46yGyci8PBXeV7YbDdoDDmSDvefphdAfF4wHJBSdPwYfdUicer",
  "key18": "bpQfs9SePo7ptZkX1QaJZrKXCL5hY8jVy6J78oVPSMs2NQoDAyF1FFSnz8oZVEuHiQ3yzmhPBX1gTnCz9CxAm4f",
  "key19": "y2F8QGZ1HzB4NKddDtyJvofbPPBHeFrXMRAXpCeheAcANjbwoMsqqCuKPNvvas9G6aTnWDfBzGZmKcqrNNexbf1",
  "key20": "3Qq6Cqs7xfqQDvQQKoErbWBriDkNPx4CpWWyi6xEuhGxPgh5zyctCku92iu2cskhqjZ4rRn63QNbb5mz1SEy87jk",
  "key21": "43u31AE7cxpjpfUFZtgognmqyDQddEMmEwMnGmz2tBCNRsjKdyE553HXXzFtrvaBeSMgeAHk75gGhNyuWyKM5Kju",
  "key22": "2KV9TP1GT988EX5FA5GAVDdvXSqqWErM8UsQSABhSFtbdH8U5K6q2eVYomY61gr6Rwv92qdpfxnzhVZtmvDeeEYM",
  "key23": "3ZV1wdyUpboLk9J3pK6dbbr3a3B8gFyJCevkNCy8FpoCVDU1nz3MHC5MjWoZHij7g8trNCbvK3eVn3AZerWEhGJj",
  "key24": "2oah2jya122K4YSzWm9wuGnpEqBaDdbfXv1TTGLxujkWkahH3guB8nS7Tzri3M4CfuzQRqyuMNVX781qShuYjNRD",
  "key25": "45BfrDE6AH9XYUkNvHMaNZz2o35yAWZxWdAZeZw3KuphFNM3CPqh7GwoFw2kG1ybjS5JwprGoCQ3H61nK9USMKxU",
  "key26": "2mVe1sk8idGt7wjGQ3T4TKpQGvUs4Pav94Bw52tGdE91nrVMXHLTJ2bCWwj7NS9fXBk3DE13KkNtmXXSP8SZFLiM",
  "key27": "VaUPkv4ckaThfReYFg9kbTmQduV9czEYwMuhR7ZNs3dG8ZtRFKemUYw9cbu8bAc4Z884bvw6vRPwJ4pwE6T6vJf",
  "key28": "3rJ7rbbtpmnfQm6HtxXN1XEeo5SnNQrHGQWhbyt2voJpMAgkxU87kPXXjKWqeLYf2tFhP2u4enDFuqa9ZUSLZjSj",
  "key29": "MXvXHgBF3LbuNdyNNWjC6zTA6efrt6iQJFKSbCvctoRLqvt8ZdpydY42v2cNC7nA38Q3rSPiRhYnfN3xLvebDkA",
  "key30": "4q4Wozr2ngpnuMnYCWeB17QZHkrv1BFzdgMWWStdLTFwaEuG9xkrWMvsaXgoo7B9KDLuTdNQc6xj9Shrx3ecHdW6",
  "key31": "5gai7Dnav2UG7Vukr3ucCB26cZPKiGfdhbkzPgQe1r3jhc2eZ1eqkNjCKju1omDHuYvRkKNEcKo7AFLB2Cyz2wDG",
  "key32": "2zT9J8fh3xtMxgxgDopsFsJcRq31DH1VPb6HZ692LXZYNDm6oxLVt1bfuEHaFAXCrCuMbERWJYWLVwAmr1Z6Cs2c",
  "key33": "5jxG1XE1ruqxv3Z9CyGhuD1YZVwdQ9RUbwhutcHp1dX8dF6m7icgmrSZHrKFAbAEbvsxfh9oUQkExapkcuyDtH9t",
  "key34": "3Xm2XeZ1f4ziwXHmXX3m2FamxicAvK884eSgWB5s4UxzNurqZvxTVrUosNPMuD1kY3BizJSL4kjPFaEnuomwyFrz",
  "key35": "KSCwPQV6gewaD4ksTT9db4tDrr2vWucXN1cAPCjozjTaspswRTZ5BjwJPjZfGwrKWbyMo9htJi3BhgVbFT5tdTK",
  "key36": "4JGaWaUBG6dmEuxyVzTR4jg7Gk76hTADcsuHmXsvud2ekhEzTfWJ3cebBctxxCN2QVkYsZ9zzr2tTYzdxG1b8YE7",
  "key37": "2KRaRnYh9Rtyc5oxDVvtY2THw1tjYXwaFLadi7T7s4NSjut6zgdKLKGC5oxicjLq3vvnQbv2sbFpPQPDfQQJwPWX",
  "key38": "mmQcdYK46kt8gk26qwtNk1vsW4tQ13kvrwWnQWKd264AdZXjnCRT2ycz5Zq6RkyExBUmjTB6rFHdR4doQT7b5kd",
  "key39": "496gV3rept2ihAzf3o9kED7BnRpTx1mqLnZTb8q76T5s99UvUVRwZzrTVRXgvW156ZMLAUXPYpYoSs6FDk1DLLH",
  "key40": "2jjc4YDsxLZKRMy7PGnwVL81xzggGJjus5PNqfYPiGFDSmSSRBqMW7sW9U3gLnWsXF2cr9Vd49XonsbnWiuezk3V",
  "key41": "3HFSjQ7pUhDLCM9FKhZFT4iNNKA4e2QSmgXD2ieXd9DMGdvmqAnUyWic2ZNNNCYTyqA9fMkMFhomRAFcLcyjZmVg",
  "key42": "5br2sQUMkzaRUXBsgZEbmghKbfMpxdxUcyZFsvdpsd6rw1yYWUXkWqXgjMepEhqW56oLC7MoAgtGiWrRAmwTFYX9",
  "key43": "5VWTf3hR4yC2UiuM8BB4nUJPe4Nau3RePJr4MPWCwzhrd4vHwcU35xnpsUDARmb1eVTWkF4gAZVRzSK2dNE7Jb7n",
  "key44": "4KcLCAUi7tj8HvjcKUAu4PL4dmW7wBYwqEeYYFjoUsNiBv2zLhLM7Jx7cFu55SzRkASm9j1kfG5MXMsnwEeeL68J"
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
