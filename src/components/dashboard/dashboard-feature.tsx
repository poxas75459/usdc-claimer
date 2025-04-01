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
    "M5LDGGeb29t5yTyW5cYtFJYMPtWdLi7WZz8twCM6qFCHKWBJ1YRRG34wvPsSxGKW2X293Pc4G1CPgfTgQMWvRNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UxXPfCUJhJkbFj4NkixH2S71mgU2fZBwgbJ4nGFdWgBQWm6UHh5U6wSoyqnNVD5MiJjagQftwkNTzwDLuoUGDuz",
  "key1": "33knSEnhFxXC5enii3BeUaa3AkZ1pNFb9hHMWZdq26ruio4grRVSSsDUaAoLY9D6T2V49y7ngfCbcCCn6mseR9mx",
  "key2": "4wMzDqT39xtVT7CdMMZNSCaABH8kEvtPhY8dFtjQupd86fkHDxZoVr7zvnT1UeMfFmMAuBSiaHN4ujtyyLAY5bcR",
  "key3": "3XQmumcVNbPC8KHzG2j7RsSh4JgAdfdV6e8K5dVAYykeqfy9V3tc6Zbz6v2VrKjAdf5gs5UERM2Qj8EaGLy8kKoJ",
  "key4": "39Qe1vuGeS5EeKpv8euKry6GFPgesw87PjrqgQoj2BGnDup7QWcUDtqgcGC4JythwerR7AZCLgz7jRB3Puoi1fQ6",
  "key5": "55DJ4UZ4gC3H6rHhdgtxA5RXt7FgX5sds8FL9kFAfkXhxYXqvNyGPDAyma9Lyj4nJ4zVQgjimuVssnHs1qe69kUK",
  "key6": "5F7nyEFj2y8vYq9q4kUwBxd5VqmkeGzhPp4M4u6F8X8RKzxEUmcpXdQhGaRZahnH5nwnf9dEah8g6uaynLFHD1Zg",
  "key7": "3rZ7iKJxW6dbTgaBZ96nvBXZ9TZiSCTCQXPMwjvNp64at6E2A97mgojhLhCD5ogMkUoHXvbDB6dTRZCesyaJFKK7",
  "key8": "cV5qLFkgM7zrbD8MxusR3yXB6fBngand5TTJXvknoWundV6C5v9XYRsDUyboh6k2mCtsgbW2gH3BjpMejAxNqf5",
  "key9": "3P25TX1Hy1S6AsANXtj2kDprTQxjBofKDKAseywREveoaZjSqS7SFLFvxFUyv4RFrWn189oC8c9f55uNbWeSttL9",
  "key10": "3piBFU77pKRGMEuhMaTWTtrUqZufvSEoZYtvrRAwiPd5VcB1YTjTeZ3PWEbR7hhVYqeRkbjHzDnTL57AApWLtQ3B",
  "key11": "2H1YxiYFi7DwZgkygJShFZ8JYXjKGaBm2mYkq3VGDpaL4rZykfGjyv6VbfhjEBrGZTWq8uTWfrdumKSWDs37bcnq",
  "key12": "3qxBG4RPaUicehz5xbizhKCU7wQkvom8X46JmWVR7rUurjxDZFeX5zpcWEfm6FooQHuWaBfVzZxqgHPVnaTHCb7U",
  "key13": "4rfv892rAx7iyBs41NT1VKoyxDvE3R9N86nVN72E8oZ3wZ7Ph2Mc9XoFcvDAFstKztoq1kwtWGdZ3paCf1F8pGPj",
  "key14": "4FLkpmTRtFkCwNiW2cqtB535FxfWaZiFyr2bTwt77yLm6LJ6tSVdDMkX4F8ckfXtf1UgVf62Hp9rxJdpQtfKX74",
  "key15": "5ACSGHZhucTTPSHGtc54b9mXPFYwkbUDEEECL12JYzh1L9zcwUiqWKhCfBt8hr7tVvn6Y58U93qN2uVEecDwJJFL",
  "key16": "4FPTpgv6qQsc9gzk3j5cvF7f3be2NQt9VA1ChpKaQNvru1fnaNrMhNaP1h5rVZybBnnU1Ffztm4aPvZq98uRQcjH",
  "key17": "2uyEvCbNP5U1u4HT5eyVs5kRYjRnbfyNFjGBxLEWkG8jXqPXf4sGLZ7oXXMNZVPmHjdBF84DcgvkRp53ww5V5aBx",
  "key18": "4SPjiUds5spmDWLA4DvSVLQthy8emEBRsASSsLnZsDMRwSSXbv1T5JP6ZyXVLb1XrqfuqgepjSwwHvu71sn78bkR",
  "key19": "4e5w8x4CVjZiwQgg7itD9RW6sVxzYsd4yC51vbF7oGcC9S1o8oUvanyZhLEhsPbr2baQyNzVKFUHJSgXTeGe88dn",
  "key20": "28UBWGDgLmYfSDPem7vtc6iAz21yC1kXRRKHgeZbmr1jHivp9ioUoovSkUvhVvzp43bYRjU7mHjzgDH2dePs9Cxw",
  "key21": "5b9PCTFcNzaacrK67gEzYErEyWguejUDgSt3RVwRe6B7VqSxmukCkZQfuynYZpFrvFeSNgeFtdwmx1Pm5RBrRm8D",
  "key22": "3b14xwQPxSvQJw7V8srX4q9cKCEvAUpX8gvCi9LA9dkhS4TfNorfWY3KCnV81cty6kcGcvCWQtuEojz5UwHGcJy6",
  "key23": "5nhTNYNWdUaGwFArFDX7xXEY3RCQsP4JnGzjiKXsEwk15Y7QAXp88o2UFpGNQKwVZRGBy47YYPKXTLA2BARaLQvz",
  "key24": "5ZfHCkZKMxcqnA7rFLvrahtVtp2A3jAbEWvw8jksCbYW6LsM9J6GU6aaYD3cQ3EMV4ZPbzjDgGdS9BC9BE3Zed3X",
  "key25": "2386MSQapyE1T6tfgucawigLCCku2oiYr96rKDRfVpSroJhoUTZPv7a1tWSHyuKULrWQdYT84NXzBxGbXaHYQRya",
  "key26": "3MWLFrcpdyDALZeADjFAZMdaNgso8idUpZVW84SrvN8orXLnsJRWkPDabjeTzoruwFN5sBWRRQUibxrk21G4C9Tj",
  "key27": "5v1Ye88uxEy8ZsbsueT94mxkHXJC3oHA5B9z3bSUAhRZkhHtbfynToP6T1mqcsVJVHwgCzozj4NFWCr8sGhty9Vk",
  "key28": "HfKhgHCvUUoHaPwX3fakEo4xnBydpcddYQvFh2azqpn94K3pJsR9CPr29SfEB9KD6k2V7ey7wvqKnWHqWmwuud3",
  "key29": "dzvGehovtd9B3QPY4dMW3YUdbnqsdshphqfsGrjkCSXBP2BZAEUAqXzcrZbn9GB3rZUBYZ7ophh2NT4hLKNhQGm",
  "key30": "3o4PJuNBfBQQKhEPJfvoa1NyjZCyjPTA6VEpWC7BfLKcnKjZaF539xUuZhPRvfNMja97882bZemavxMWU39inp9B",
  "key31": "93tMBLV8RPYsDtV9HyMSzrGoTzoFKMRGgsF9wmuNW6BFKdG1YJkvmeCQ7JtRfuUtgF8Z2yiQm3qhC5GqbDpSjUi",
  "key32": "inkw3meLXS4dJ3JB7zKsvDf3vrxK1oL94TJWEtyk3JHFFkYdx875vTw7fc2bDUyWH9evrFHkVy8d6pfuDRxepKX",
  "key33": "42cCDSwS3xDFYXKRWukrRpaxkMPYc5TBoKRdZhvptwgsp3UckvSx7VbeBr3pPTfGmUCKN6Nioau29o8nSQjKfX31",
  "key34": "4PVnNq7xB82UFjAwwMBoeMQsbn5Cw3aANSEFVFsJQyUnPqZmiGN7pAkApUrudF6K5k2RgzcikmawDziobspv8KkX",
  "key35": "3Q2kMMnDLeQeHvGrNEY2VSYSacG8Gst6HuzaboJdepUcffDCw5cJYr7nvgAgwr3v9joayynuk6KgJYyfkHF1QPDD",
  "key36": "3q8PszvfHhoFSSYoNjL7R3gmPTG6ZDeqT424r2qvkDrjvAsNiyNBwfN7k7XwQizSbzDjnSRUkRMa495eCtJg6h11",
  "key37": "5oeK3sZgmq8hNERqEvk8DkRnNr8sN1FQiSQp5ANGbs823MSMCza9ZfK8YAvXooC3di3pmMgk3F34HJJM9uSo87dj",
  "key38": "JgAfPk2gkhnLgYvQok2HPXmMCkkvuGf9xNpnRPz6VfEQCfoGpsqWZL1iYgqEqnCyCZnzEymdVkZ3sjPuu9t73Fb",
  "key39": "5TDHehM9zxkpjMkzGCmFEGBqMW5xo83DWCN6JvKXZEyHjnAUrBMErMordM4ksRS8F3C1HPhgyB4qNQv8RPLZmKao",
  "key40": "4bKx63aC6GdZtUBTsUEHNVVfBaHZv8hMWPFWWVPVR6h9JBB3231KgZF27CmPgUs1vfapr5uEfKmKUXDdZ558dhp4",
  "key41": "4j9AbmshhgofaJZsncEKRbzd5hKqfgEGTXif4U27EK4bVqJWam5arxb9jKmqqbu4jCthydJ5cETrF4aDeytdaVYU",
  "key42": "JR9g5F6cRdZbKXPHCvRqsYvMdK7yo2rv5cFtWg9wA8ffAxuGm89PN8XnTQBipJpBXvLitb8Ed3bJq6VP9ZPp2bL",
  "key43": "3Hk8pDftcJcqNTah4ijo6JWf5Gsww41CpsT7trodqco49ZFPLJESpuhtXW5C3kxHLbTcpJ8djkY3AKzcMzPBepju",
  "key44": "2fg19FbW2RziXUvG6NMvWBmFxm8GYRHjd6QBNVD8v4KFZu5XSVibHCE7fRKwuHmH88ajTirCXS9Y2nnmT2fjV6Ci",
  "key45": "9WNqYZRM5ffWu6dDULxo1JiDWMPu476SQoYZxsGTTAjtAYUMBrB3jbXfR9JhSQhAUwYsxmRQ55YLciPxrdrTkN3",
  "key46": "42rS2fEiWvG99k493XFrR2GhDAUvVNLtHccpZYwtPPsLuUeutzv7KDZNY2ECnKcLRqgNpZghdqkVaTg5gcBY8Vpm",
  "key47": "59mYFddLRvV22TQY8dYq8thzMkyFQau9MW8ycseRqMZXKkqYCXH1DjqtwFAyJn2W19zaXxjZ8XowGcxuHntf7uex",
  "key48": "3xjnMRtrqw1dJ86WRvA1Pbtt1qkCJtKsJgrZwG61MMgXdfJPCcQfBUg3QnbaoTdDpsCsMuvxB1e7wYdY1WfnipUb"
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
