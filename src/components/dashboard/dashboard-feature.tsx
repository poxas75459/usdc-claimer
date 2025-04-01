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
    "4GLsKh6frFJpMgGZ4mgk35VgyC42iYW7AP8NcFsoWCQoqTHy7QsZQcn1zKgYGDeDGzCF3s8sUWf9kRP9uNs383VD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UWofxBRtsmaU9E12ds9BmfRTcWwf7kqRrWw1c5vs8yPJGohvTWTPM88B8jFKGtQNaCydj2UBM3rnDtoH61AZkf",
  "key1": "2MZUYJDB65GxcK9PAM5uCCoXGhhVF8J7H5v7deBqM4dhdkxp88C4knfm21Mkcpo6qAuCEB8wkTTPPuHoksQEUD3t",
  "key2": "4b7EzGZcgv75wddYwvFJpymH6HVuU4yyoXr6ncSq4Vaih95AHdXJpgiHt4PHWTbDCTWUJQnzP4P1uo5dLBfASS7G",
  "key3": "5wCiDa2vHfwEwTyQ9aBW3NHv3YSXN36nqfB3wnVkqFCDdmz84sVAZC1saTf3s5o4nzaFgDqgqd63NLwgjMaTt8cZ",
  "key4": "C6oXQaHNvWBEWvstEQ2KMUqXaQkNVEbxi1wpwqqQTHnTjiLGAV6PCjWG8y9qfHWSirfGr8FefsUtRB6Vve2BtLx",
  "key5": "3CwvZXYpcTF8BLtuDQ5bmJs7UVBYxKCMp2322RsRT2YkfshUPunL138RnRpaSnbkfAnm8YTk74eMJrH4y9qUhuRj",
  "key6": "3mj59L8FhGL3Xvv4jiyDwktV4mRtTQDMeALq1k1zSMjxHC9nM3PNcSDKZB85PwkYvAXbKdhVBfbDSLF9wh7NcWe4",
  "key7": "3QUanvYCDsYfFaG8YRhFAqZ1w2F4F2TQvSEY3kiv9oZK9KpUM7UyCCHUNEcasz7TvQpqGV6TUKENHHEDD5wf31j",
  "key8": "fTvamfJxwqJXcYvbaVFD1nzZ7gMQXAqdATWTcoQHpiKH8X7CcaNxh8v9odPiJfLNfEupwhPEwrSPPiJNcTPWR64",
  "key9": "4j5feJxe6Dr5jYmGNba4msJaUNrUoHBv5w6GMC7Aeh1An4sb8eag3tyKoUPCWsAjtPHACr9haHiKauSe8MytoDuS",
  "key10": "2Jq5UzsipJkFFsftqPQwZmiFb6ihkPFVV33cGXRzjLyQMRhrv2rBQssY6HJTT6FCQgbq2KUzmKq8wnhTEuCtPjEP",
  "key11": "41raECUAGEhdxdLBErA1fBqU5D7sjMABbXSLDuqJQMrxNZxQRpKN4dL7rVSWhsid2xuRkhDBeonznHzYBs3pfwLd",
  "key12": "5LGzpm6cQEQkxrwMNecq2vMqgid3p62ma48HwETGtn8f7CiDAG6y8ADxgt4brQFYxUSA3jAUQJi6a2LwbYnzJwK",
  "key13": "3qkyReYk9BDiZAjpXF5e47Q6ujJ1AjuEryk5GQWu5X7eYSsBYSX414JnedjHHMTZnLQ6PXxnU4ahQmpxmjBSFDju",
  "key14": "2MaeBWkBVsBijdHBzPyg7hBtm4Tn6aTM2UsCUZzLa3QQcoUNogrNzQDZwf4GgjDxBnMCZWamX9Pb2P4M1ZEoF1cu",
  "key15": "Wcc19yov7iAvW4UgWFpcD4EieKqaUQPd23HEEW7tz72Q4NKaKtE4gbegXHjVKDCnZc9rPdCbSBPqqqoTgCxAVv1",
  "key16": "3ydvLsfdWwgUU6n3UX1ypZPybA2t7ZBsQJzXJfEWtwC1EujpZt5k2KPipBG5Y8eyhb6K2Sm6Sew9BPNkdVVe8vg2",
  "key17": "2y8RebY2vEQsZUUGdThLDKvhL8z5XCnQRo441Nd6gkR5c5V9AQ2PtXQ7TMdZWevAW6Twu9CBvg28Xv1AmKRvhGD8",
  "key18": "otZHCmkUZ6H5rteqfUA29g4N8zpEJKuRumZx7YRGMdLRWkbxkcYkF9fcZDnsKCPwWcvvf8K4dNmxCgBWKdGUTWU",
  "key19": "2PiaHhbvdfnnYran8kPiyTEpongaHo3FxFbneJu3ZcR3zK4mmuoY4v975B6j361E7wnMXhrGcszTifS9kaFKBng",
  "key20": "4E43iCcSupXaUsReDNU42RjS9qDYi3GkkNf9JSV2xJG783rNswki9D4ta1zcpP9GL8S8F8q8LyvTZinKvgVhGjrN",
  "key21": "5CdTucbpBK3PqxmVx57FdmJTGqqNEHy2WwmFYTWZYy6HKxQXxSYmxKAV9M7wCHWM3dWzzrxUHQrYcXdNwPcuhAQ4",
  "key22": "2ScGbdkdnB6A18SLbx5XjYZ1Qn8DPP5jWtF2M7TyLqBNLzzSGx5bHAi3sbFzu7TDBJyXKWGWQG19jTbBYeWChazV",
  "key23": "5sZfA3CA3PtY9LP4aHtnJkCPfcrUvcMVJVx85F2Fm8Q8oHXJ6Swh7MpvpzzcigJENSzkAEB1w1mYVY4UJzKtvKzs",
  "key24": "4WMXXU6ESK5y6TbFmeKB8bqN3HKbYrHdWVDeZLbbNhEfZzmuxgXgif9ggNDojHiCJknvL5YTu6jFBQK2FR31nTNL",
  "key25": "4dxCeHXvkvAwQ3JsNu6y3idzKjfr9G9xi26jbfjixt8Ysj2TiGrduRvcGVhpvngDwSZSpZDF4oYyDGUD71DpuzLz",
  "key26": "5KZjzjn7Mv8FpYUSi5RYn8bXPmFGyNwP8zgNwh7LAvYYJyfBJna9v7oFB6xcnLnG2AEHTnuZNa8i7WJsu9SGWrpY",
  "key27": "4mKCLarNb53KjovNMddojrWkBEuBZRfvbEJzYYUC4q5Yq87Pmr5wjV3jkQKtF6pf6KG7CAg1XvWwQ6eMMUr82HXG",
  "key28": "a8EKqiG1djRqpgwnxhVH1yRFBQZf63ZPitm3SeEViAW8eUTcB4yNNKEQ2WzjNo3rwEaoZ7QM3ZKAUhFGJ99yqXj",
  "key29": "5bbA8Fb3A69d4uVoX73qP8B8UjnCotREvPWTQYxMXBbYE5Ce1uP7hbPW3bwwni1hS2FSjq5uPdk8uxC1qr48c9L4",
  "key30": "2xarsUbCNobRp5W8Dx14g98m4UEFdVTjUcfCqYT7apKJoygQVsmJvKj3TNFjWZxTzshFXt7AxwFuHHvcCwfomRaQ",
  "key31": "2pnQZ6Qk54BsAN6tVKmr8binQNrVsp4vw7WcDVFujCjwSk5Grzk7hfsX3cnUkKZJ2osNYLzdUSBikHncpGJDdMwN",
  "key32": "3QGkFq3HQkT1G1quUkRDmq27GLHbpkSmQc64za9TWyQC1Q15cbhiqgtwLzd4aQJk6p6kUi3CW79yQCiFpYvzYatJ",
  "key33": "12D8JAoowW4Eidfop3rDPmaYbU4RXQF4HKj4GAVCYZJxdGP9ZqBFw4X7gs3RH3kUAg5rUaA8yJd59BNoBw5BYod",
  "key34": "aQcF47GYMAYSGKY3g2kMfiZJ3Fj9i9yCDFynYgtLubcBxj5StP5ugUeQHVCW9UWLZNH3Gch3s1otsTSDWeAMvks",
  "key35": "3rvso6SCtfuMAe64QjVg1FKkciyAtNdLN3CuCDmq7FEGAuyLqAvHKuZbUntoFN6Q9JRnCiLPZ2vMBMmZ6MUF7QyY",
  "key36": "3Qmij9eEkvXFzChvw7b52qAU4S7UXJxVhhUkhCVwZDzJLDtt2NbtB5D5ASk6bY9NjxY9TMi9C6JFCjX9dEmfWFdE",
  "key37": "3aBencM6PP6qHtwjs8hWgq3ZgWsesjw2XWcVMkCpfdHeB1UfXMAMwyatDmri44KBqfZLJKhTQG9BC262113mSdZA",
  "key38": "3uUnDffNPFbb7L2f21sX3b33D8LvBTuxDMJReZYcnmYwyrQRWF1T1t6ciRAqGQ1VtjaK7ZMd7tYs58JWbwRBUQaN",
  "key39": "Qp3YJN7yB65W8kkYs6eFbu3veBRsv7PbP8XbuPhXAV7mwKU7f2r7ztEvXZaSFghyfAg2RsCbP9ibzTSCd2e87Ax",
  "key40": "4JMwCL2q16WuvK5ZxDu9kqc1thKKN7R2hciKbKxrEzWXSkaxjB2ywnSw6pPgkwtUGyCFM8ZTtsrSy3njf6Ke5WGL",
  "key41": "5wEirpEo6ygozQhBafULANXSLTs8xCdSfx6exWrxjyAg6gdH9THrZgLGJNFJDmiyWk1bQ8g7h6pgDbp5ua7yeC5G",
  "key42": "4qQjx5vCL8L37CPmhv7urptCJVo4KC1Xdi8zLQ4hZ1kHgQr8D4jZPLQoGkBVTkHEFhiFeKvzGFqrxdpQyWLujgrn",
  "key43": "63z6QaeTdi1gAnxGfg1LGRx8UxRohTaQw6G5Z2esZ6UL7pXpnyucgLC14zrTnva6EjQrorxB3WJJHvMEvFpEwgNk"
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
