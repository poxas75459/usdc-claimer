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
    "3QuUpAvWrNsdzuXdxusxxoMevkTS6vu4f36iGQcbmhvc9nbYXuMustEp2G4qBe4hVC1QwwJ5qSFa1iUGMdgqnAdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129Ko3eoMh2KdCWpx6ZvyKpEbzF7ACnxDHwkRgzoCAyeuiqtfZxa6r2GkvnJmTCqzyzygDkxnvEQoH5FypjWnT4N",
  "key1": "5pFvvQ92AsGjaEACvhL64m74gXcrfx2tm2Vy5Tgd8YoGprcM8hzw57qgAZ5PnkD8rGuRB1EW2uLKW1xe6GjF8PdZ",
  "key2": "3DZ6K5e8oWBCzg7eSx3wn2tFNAZNvDnijNi4ru9SFGyKUhFgTzkTNs5j9Nx6WGJ31BWdVi1Jbd6XAFgcdZ1gxEfZ",
  "key3": "fZXVBAQ81UHsBZ7jhZgW6qSVM8sKxmUHhPQPcvh2s3HkQ7voGW7jD9JHNsj9AEQurnpW9Zb1DbsPeVGHxZHGfKx",
  "key4": "3N8EW2yWSJPWrWxRmUWknz3E3KDMcqAz8YcywHvb9siC2qWR79xtY5rKMHmZrnyjtzKUawhqEnxBF1adzW7ups6J",
  "key5": "377zovmjqwiYF5T9eQW5HHZDDvXrvXVwcA3CbZz1MHK3kofaka1nV2Gj7Sna1fYmCLtbBmM4RC3WRz4jkvQispiB",
  "key6": "z2wFfaJyeuRRJJt2BYRbd89Rcbryh35oJAbbA3MoFKcM2cao52kSsagPQtfUnkbkdFALVNjMfDNjvJdyAQorBcE",
  "key7": "4CXLy7YqWskwkXv5RLMHPVTJ6Rza9pBD7Fk1Q6qe84yGwkpk4EKc4Zru47LaojCa1h5Ptzk7ideXGuBJDgFVax2f",
  "key8": "39bp4JsrtsmKCZti8EcnmwLR1Y7nMbwgXMGFrFPeheRzZ6ZMMm32kkJ1UM9GDTL5UhjBkgyrDSjsCWtTJZsnRtg",
  "key9": "5LNnwvBmk1NuAfb1KbENSRskkg6SgLu4Md8A1ac9gN3F7bYpTCfASXDaTBhkeWmw4WnTeJsLKUZ9pFVuUB22whQQ",
  "key10": "36ZxFTvPvJT8dK8uQyVkWJ8f6xnWLWBXQeYsmPMH5d8qyqKtx8w6Tza81DSbiv64QSQkW48vnV6JoL6GZRLYkdCP",
  "key11": "3GgiatbjnzqtdwKHAFWWb7Ls9cxzDX8NqDShNiFeYgNiNEBF3865XcZUFfGWMexJuM8HStNWQiYZmRuxtdYc7Mer",
  "key12": "2GSGYH5GXdwB6F31b2YiHQ89saCR5dKMfUEQkbCc4V5p5uDxUV3wbiERC9puhfoBCzz6Q5SRyNvFrcYG9LVzud1q",
  "key13": "Tx1vK215FbGT7FGysdvZRXC8Vf1amg15Gzk5gtdwVyi7ZUHtRRHnNv9853LtyNLjfozEX9kNsPxrt7ryuix4dpn",
  "key14": "2ffrbCPeWJdMxPxwa1mvXvQXt15AtTzJ1oUAuU1HwLaR685PTvFj7USUUM3NupvsR44ftScLfHnmhAL7FFiWuVhB",
  "key15": "2kKB5QyV7gC9XM5Ny2ayThc5ShJ6y6TKvVro6y4xb5fQm5GxwsuQiVSioRr1egbHJ6gh6TRG9aM3tWnfqKBiZLGu",
  "key16": "5S6SSkJfRwq1ekWvidSuYzLhDLXuvghVar4GYHQDNmqZT2xrqUbVFVw5e1xMxPGXPwtGJC29tQSdBrycFZ8z2fv9",
  "key17": "ZRuK21YX6zw4nGDBFv4CLsYXPdVVTxqZ88dEKabAT6D3ax9EbWfBjajKXgrHnBas1F2eLK5Wg6gRPudYXYobgkP",
  "key18": "38xi4AagWLQBMpLsPgV6GxyDLgvGCg9xoTvy2RvCmHyCwJFDqXTWk1f6VRDXg1JWdnB37cEe9ayEYWo53Uh2ye6y",
  "key19": "35fK7xYfvMueVhVdTEBTzM8YyMGywwgokrBeEjCPjgXQ4nmHMFsRmBRUtFy5D5SMS6bGpCwKsW7UBmittEVJtyJ5",
  "key20": "24vSi3wXhgphePSTCfoqETx9DqvA8FXWueu1W9sD7p7uYVJKfrKho8uzmpR8AwomcHKxzPH8dASdQYezMiKu4vP7",
  "key21": "67kK3zrJQzdjRttAucVuk6ozrXtAbrREBSZXAdYtb2mgfssdEguXp3y8HdGU6LfDLap6DAkfKb4gDmYsReWgPa2E",
  "key22": "4YSNDaeuo5AMEy98zdpWD2x7TUP9UV63efu17ois83DSZcXqNYioEYtKWPfUZcfEiZdbUMcj5GwCshs41AzTR6Ze",
  "key23": "3y8KMTwdyvkjjYV6q7MhEJWgv6LwvTq2nVkipcEeyFWZhZaj6JtPntrZmj3GfyVMxLeyT5ffhUQGBrJgFrF2F2Ne",
  "key24": "2vJ1jrFzyn1KTRmsBxwgrMYv5EYcHh1LeudXtExXuVHB6zFwzWwddAzSqS4JqgMMUknK9LXXo2pyNuUsuvo8KvQb",
  "key25": "xmktTh7oxJEZ48xBZ2Ur7vaLDnQwP9scehBQRMF6Rzg2cLzW2RknvPqdirSt6UeS7mxaM9Azr19mzK7ttL8RjKb",
  "key26": "ySgpt6vqKGYKTo9A27Y3Dgiywx344gV6JijQ2hHyHx9ikv2riDkjtC3ztKeGMLcXmLhDDJAbMoyLceSGikg2aQf",
  "key27": "4KMAELLgkUdZGqpgQghLRjVpeBqwx2tMKsHXRgBXNnraKL2m1Nw2MRpy2hT2AgvarqDNCsRwrc8mFAn9VK7G4ek",
  "key28": "3tRzGdYC6D45x8vg9DsCVb8azm4P6XQLkrSxTM8kwUzfLXj5enBxaFXw6KxMS97FQikR3nYqY6x9sCporwsnfrUa",
  "key29": "43kfoVuzMo7yaWpoiRZt2SEiPdHMMAzk4WaAbESQKzqSUEF1KFJN94WFwPi6XVtMHFkB5q72M9pSgjFFJ85javto",
  "key30": "3PtkRvUKpgqN2HGPwpA85Hpv6TspE6NsWEcvoVEnajhdFVQaxxQKygy4Awy3gKHAQr9w1FRPa2usqw3hJP4yFYaj",
  "key31": "2PAfiTUnJcXPFxWiKmM1hN2cnSifYAoowfrPQ265qXwtsTTKK5o9tDa3VKewmXVjiftpVf1e8NRcmAaoHLZmSEYC",
  "key32": "44StT6mADZNG93ZPrHJvgbEmHKEEEaAxyBcjkD5ZBtMJm3ydL1S36RdLm261pQ2NM3LfeynSfQydNnUKkEnjTbVs",
  "key33": "4TtGrWpDXoQayBQfZ31BgsnDrY6UDJBnaNi3tGWYxANSK6VDxTjuymcHTkTStRpKU8ivhZfTZqgEYT8F2z4DTMkK",
  "key34": "53yAPAsUCfFsyUa7KjdnC9sKwdfBXFoEZztZBop46ctT8etXRwVVHqT5jvRJvPt4kC7kEYWmZLyXB3CY1QWmFKUd",
  "key35": "3v7zmEbEfPzk9j6wkyBF6ZdGqTag7QD4mueGumDfBsZDSuj3ZZanHiBRi9iQULG26aDancZbpc6Cqo1vVDy3XCRc"
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
