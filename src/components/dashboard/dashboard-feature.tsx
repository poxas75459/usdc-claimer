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
    "2hDfSafWrbFunEyKPEhXn8GpVv8Ya9JsUuDKVzFRSyJcNTSXat31tSCzJp4i6G3ZbajicaQMmWRQV4NMD5t3bnuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XDs6Qp6SE6TnuWabH681zNXfU4wjwXYNsJFb8WNzsspri6jwoVTimj8TFCwUefQ4bNPV4gSk1jgVhpGPZMLH2Yo",
  "key1": "3a5C5Q9rmvEVQbknvBCWMqXMB48rdK5EtqJnkJ7RUAxUYyPq7oD9U1JL49zyy1FBG9Ay8Y5t3y2hYhpT9A6CbqKE",
  "key2": "2HyVDGptQLUfB6TkmYv56FN73jzGH5XT5BFZXcPDGPngrPhSpaBoxWtyb3RUcNvPFuEz7Q5vkanoMYU3Fyxn5mfw",
  "key3": "21UYYY6VyN3cVPt4Ra6Bdfaf8WHSyox6KhAN2EV5WA36jyKXRZaBiJXrfoXasJKQJG68vscdqsCVmwmWku9L4yh7",
  "key4": "3DPqS4LozUmCtCfb6FWhiZ5EKpxNkxgQw1h119kcBfY3qqRfyF19GzrAJ93q2gYpTYVCvg1bq5Zcfx97MD7sZtSk",
  "key5": "2N1hCjCrS7ysNbJQxoVxF2CmLgFgkywgr4nZWedggZokQYoGvoEq8sdfs1XpjCfBSjQWRrqTHBfHVLjgPMEJjVeU",
  "key6": "3LRcYow7PTE6p35x4N34UsRAFufWrYRn9vxgdva5dibQ7VjC13gfvrfPYKtbsD1b1rEhNVAB7zLub4MdkAmbrAgE",
  "key7": "23bEGQEWkmAhg9K9X2hQjpiRUkFu9mYU5BXTGJTm57y7N777BNYuYAhPkXXjJNongrSeapSAXWZ57s7gf3qzyuuA",
  "key8": "k3o8sw3DuHg7mE58yoiKKePw7eMLbFgehPid1M2SSN6hAp5UJvczbhiVgpdcgxK4e3SGtks6PFQT842R72Lyvgd",
  "key9": "3Z4nvyEcyknf1NfyghJ9cKa4vBMomN17vLN8cuZAqzoVUcG7zFc2yHkBp5bQFexVb2TCRMdJyv97W3vyZHqjLLx4",
  "key10": "3NsFDMVNUHnsT3R8JspMAZ3mWFEmKe3sSgUfvaU4H1fvtNNn9yC966JF8W8JEVFZHfb24kHryuB1onBw95EkNWvy",
  "key11": "4iuVj5kpGrxFidYKhZD7YTZhuttuQK2JZopcHNw8JF5CTc91jL8A9HqdEPeyDqJmwtqLpJv548fArvCxztGoZJ5J",
  "key12": "CQd34XinqutWLn6u1vMLX9gvzKHkMPdEVs3G6SW2X41awc1fJ59TarE5A19FURjc6mv5BqYpwaYn1o8eyjcD4CR",
  "key13": "5xtagrKsBJtf3eAfu81Dxb22MufKpJEg4X6NmoCARaBwHmjg25szzwkFw8xWckqmWciHaubXpsC3gSv1mRhpYrZK",
  "key14": "3YvwmUHoboNm8yVCvP7i9ykGWT1xa7jXSKFCVQYdJGW9GizQYqq5S5zjtSMhtdpj9eRzpyFcUJUJj85RvpWThKvU",
  "key15": "2mF4A8y2xmg7Uw2txf63jp71p7gbu4H41SLqVDFf7zdU3uYrF1ttckdDefH4yyU7h6JaYAMSRWdXqLc2ebWNt2Nb",
  "key16": "DNwWcACxh88djFq28UwGJbMKFeo3aATWWTDo489LNEf8fCVeDj6kNm2Ws7r1FjWbjqFMyRFd2SwfsPd4Gb7kJai",
  "key17": "5w1hEbHjB8rUdjKrVQHn7SPDt2oyYffCiHDZkmCvmxdrHbBD7PS14DtcKgBevnW5PdBNp5mb1jytjLs24nvtY6d7",
  "key18": "2wutgTaaic6SLBgawjXatWtSQ8dNvT5eTUKdvrMcjE25neJgF7pkEq6tZqA9KaCUppW6i6tpxygaGHsH97VPBZ5r",
  "key19": "213xFgemZMTWbRmcyLxZEGjaStbGAMXxUCNEh4AhnmENuktnvY8kcnfhZXtfJJhnwjwMfVngn26s99NTgaGNuUMh",
  "key20": "4V4afRYyTewhWMJQXLWUjRK9YF7Tvb7a81ahHZvcd85q4wNVxWpeYtvMQLAx9RRGQAhL5zAKcZBEaQgjS77X9PtA",
  "key21": "5Y3GnqwJhAsuGER7FZv3dXxeSj4sFs2iMeMjHUoUJxYhR3LMZ3BmLLwemXPG5TWY6D3uY2hkKSHCAVzG8SvLt6FK",
  "key22": "3Fvrsp2ijsy3khzM4521mtkYFw1PP5VCXAQBCJgDG57wJMtHhMHBxhzbPeUiat6B2ZSANM5fd67aFkaR8bFa6jfV",
  "key23": "2mG6RpWAZPFVz3mPUAk1ARNNU7D1SSFiyUkWdfREsWtLZYgGDahNqcvemd4ar9eTjM6fqEHYqG9k5Kio8LRwVprf",
  "key24": "53pLxKKwQiwfYuV63Rdpnyqa8HAbuLCBUUs8jUMPSMUe2Gkbs1QCFqvCXihv7GPQTy3fLgAy7qmpM8d6wsEApWBA",
  "key25": "4oPX8Y6dTRQ7k1ogUeJfjcirQEZLfzhzL6wdmLs3AWxdez45nt6NWXe2LAZN4t9X5rTZ8pAMGBeXVVnC8bM62vUA",
  "key26": "33ukEkerrVqLzFVzivG3x1dznbZsmXaPECJma9cMceUN3drzvJTYU8NdUkVF2oMaCzQSVPnmBduo6G4viV7vymqB",
  "key27": "4jvYztYvuGsk8GngGize8M1C5WwmwAKaNBLkbyApCXGVj5DTmo9bFzX8RnL9JGjxXYBejfeSc7zqP7h6BzsT6GfW",
  "key28": "4NauZPMmmoEmxM92xqPF99D3p6nPSWibLGT1txRHVqR2bKkmevbn2YXQez1HYXy4e5iCYDv6QqJ5mzxWEruNc3Rf",
  "key29": "2Cy4fFTedp3L4qoz9g8TVhALWYTLJcayokbfx5sWygkN7aSwqchuABkBPv9AyupRVkcF3dbodGXogC71say924X8",
  "key30": "3cjWJzGqaN7SjLxtjcQNzJutNYXScRkhWfbabiQJre9NMFDeYvLc6Zazh22gTNRVbJZBacTdRjTp3AEVJoLaFwMJ",
  "key31": "53QoxbceHGrsqi9P6Etdbc1DWVHVSbpDrovQCRvTbYojQZ1QsmDvYdi2hcFnXHtpj2dUcNxRQw7pzujZquvJpgcm",
  "key32": "ehXtNnbXyHDC631DSy2qqiYPLRQXYxPQkAHF58TqAjcbNouuL5r6Re4rokkV5gzv6nt9eM2sDWfqFeKd2HK9wiD",
  "key33": "5dKHtEg45xRmBy9gPshG8mUQxJHbyX98t3eZcJBsqDFsxUmDfUmbqxcmSjcz1dNg4uPyduGTanwCSMDVkggTCQuj",
  "key34": "3KUReq3TeBX8EhfdgtaSTHPgsgdNvd7ir4vyc2zKV18z2sxoKBnMXypJxHZR9Yjk4URd4EJgKENmZadngLZmTFxR",
  "key35": "3PGEvZwQD4FTtUgDkdUY3VoXEjq58ALXXRazi4gsQMPJ5WcA3czHZH6iEHMXE2C28LG1Qc8cPx3K88pu4jrtnJHY",
  "key36": "4DsFvy9U2iWvYHKhG5U4s7rgaiHgWY31LMqEni38adzre5s3ZGDkr23HvgLvnEz5Bk6jzTk7vJhXe76KCyGJcThP"
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
