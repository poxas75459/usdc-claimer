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
    "5JtcdVY6nptTYD83Cmy5VJTQ7ic2pUHMvL8peJvyQc4dedJ9McC9BfiixtCdgt6oXe67j1AjvFFRF45NL4eidvvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmgv9yjKjmRZsvfPttuix6qHzC77HBuunqi5cRAqyuyf6Qbn6zRyoVdyAfxpwaHG1W8P9DJWQwuLPTsFYZ3UM9E",
  "key1": "KzaGw1qaByNmvewkKra6WCVFuUcXGg9vah16diyux3hUtqswBRCKnnTB2B5JtHYwyJfhtBxC8Smf6Aj2t4DKLDN",
  "key2": "5KbuMzVGQEecvF81SfPCRBWKH4Zvuqp8ftVmMBGmM1oLd33uXgYU6HKQkoaZVG59kggRHBMLz3yRotbVZUe1QvJv",
  "key3": "5MdhKUUBUKB9szHHepsrdZrHhmwCTJSgd5ddRQXhW9U66jCsXDuLy68tqoexEQ5XyNHXdN7vRncBpDPCR9vXGTLP",
  "key4": "3RAvsVapWXxfS8pKYg7zj6Axvua273uCSp2kGJPW3D3swgZ93duz5unzDGhQDHrN9RX6g3jkoBXrSrXtKRaEsdxJ",
  "key5": "dAZGQzTFum2Lf3fbiuMZsLMZ9keoBAbt3t1xEQKjEP8J8KrBNNgj5QNCitFt9Y1xtrusV6LBVN66yNSetgFxnrK",
  "key6": "4npPLEPMGof4sYzCPdUX7pXaGGAe7HGX8xtLpJ27LJaWp5bwAXHQMavDDcPLztGS8SziQP1AYxQkF66hTQNC8iZt",
  "key7": "2VZJUFR6xb3MMfqyb7vptJufJXe3AAKeheB8PPveaw5iRDFJxPeK1ATr97UYB6GPuej1i8dhGc2z9s8NkzVNmYcG",
  "key8": "3xGHZFT4UNcVCTH2YXxG8soVrRRJtFJpepcRARqWPi2KdxN5GSMchaJEUNCywGv41VxdwfnpuLP8jvvnuD7V3UYF",
  "key9": "4m6ahDNRZtVHP6vXzjH1FPUFC2Vg7jwFPfoabjeNFLg78qwdFv2hxD6kRsLWo21Eyt7xjKYxh3egRv2FD3BeU4hF",
  "key10": "3vQ8BPwDixQax8po79vRPHGVCmDQ7hLD4whCHqx2s5qk6GynK5aG3qzg1WU1y7TN2pwPpfVDosbvKNt4axTC44jC",
  "key11": "3juvR6A2gGztwCYkgfkJz6Q2AL5QpkD4oY9fyp4DsjJnWxb95GT2MgELGdEqzC47aFvA6MTwGSopfY2uTdUmY6hV",
  "key12": "5kpqMDCh9cMHyKJFJ9sBbN1vRptFfnJ8vMzse2aSARKY5CHCPSLxiD2f2QKUZcc3ntRamgyZk1ZJjDQdThyXE8FN",
  "key13": "PZN8hVR7yRSiY2BLPD7cqtJ21jQ1i5TC2YVftBnze2yVixu1osJR5qsMsxzs3j8RLYHnAb6yZPe2vqv4hrSiLkJ",
  "key14": "29YpBiUNnSJbHVL6dufhm5NV6HAtsZsZiACg2dcLLynKbVqMFeXHEBJ2A8WEQ1SdAho2ZkpNW7wBKFbUehiboPmi",
  "key15": "3zfeiLBfPgqBkXgFVv9cchTShsJuu8BpKzniQUVYjxXnEA9JrUcfRbG6WdNBcKU4YXYXo3xc2qFy4xX9qRmC91Qp",
  "key16": "3hcZWWkWGPVb69xUzxmA3FoY61FeYiVRJ3RzdbAdTk5giJQ2D3cnUj3E7UYTnRmQsu84TKS8LQ6xHNrbYPQThHbD",
  "key17": "3ExMajMonHzQKmn2PyJWbq89Bb4aP7e2otX52oqC7NUTJ4bctFctdhtq6Y6mEEgbDwC54JkoawNuevaFj3xtPG3j",
  "key18": "DQfPMkXoVdgZpqEWbTRjnaWqoNaag2Trm9doJR4dsTtRZ92kgWJBvSi5fX5wpY1pSZCsb1s36UW5QvRUhYQi8d2",
  "key19": "4JLypRa87Q8q8Zm2uQXYhXJ9BJhqiVdm2TU3f2MoZKLzEqziW4nX8wnchBzbyU7eg8XhX75KbfNdF1rfx8AXYW8q",
  "key20": "5BS4N6TY2uFid4DhhHR1q6bNtXDvH51JCFpeAaXTenyneYaWydCWzq4uWFRCszic6WRsmHQD54HYLUS6f2Geh3Nx",
  "key21": "4ACqJ6hUhZjkg2E6xMQ9jkjbRBBqhRcMbbqyrYwwXCdAHkMW9SkKjcyzzqSdeaRJUArudnA4v8FULCuC9MhWyKsB",
  "key22": "2q1hcNJyJetWtqxMsNz7TmgQ3AMN49mhkWtdvp93pmXbEjJ2ATYMP4tFknfLCw976hDQQSw6EdavwoyCicZaMSXs",
  "key23": "33n7n43saj4y2C3BSSWxRWiWBTDPpqL75bMaqFbMnpiqFmRscW5buJ2uu8UMfyQWCWjcna4oYdZt8tdDDasRw97a",
  "key24": "4YTzrQs9HCZkB42gA7Auy63B5Bqa4i1uGrKDYyzHXS1LLZJJszpXiJai7oBot2HEwFoy4tiyDMucofq7gX5tQ8Tk",
  "key25": "2AF41QZb8HANtUQWp1hUwfUaJEmjLq5sFfvXomf9sadKRqEeCLxnUxJywgmLUcnGnfhbuMMwxrLaTwS3n2jhNyqj",
  "key26": "29UmYF7zzEEvjpFCmwjiCxAzNPbn9V4JmxZP2bZxPMZee3fL2LFVQh3PtB7GJBJuRN4DYWtnPH8SpwUq6MHwJkF3",
  "key27": "3SMt9DgiUGcV1UgYfqGZkjqAFoG3USaYyECtELpchDrtQLPo9cjJZYDcY7WcWwwLL5CRDB1EoMe36pEn77qeTGzr",
  "key28": "4EDJJjZW6YHPHkLL6S5iJhWVZG8nSfVkatz1mxf1gLgW1LcQrZ7UYu28S1LwTiT8gkZPNFrCUaqCMCcswgnvHyHG",
  "key29": "5KaewSe9kChqaCnHRU56FaWvabUEHXDdvgD1kA7xw1rEN9rjDUZjvnd5Qb4iityNHSS1MSHykMFkQGV3MM7wjbqa",
  "key30": "3gX8o71eLi3MZSUbrj3sWrTFSqs3bsXou9BrnDyu4euXJfNrV4NiVQi4qKZ2ucMyriY4efEwetv1a76vaqooEo5s",
  "key31": "33aZb6o3Dcu94PdhA9qAD5FGZRwFkDDKuyMj895XgDfBBZ3juh9UKMpg9NGEz1qi4VHB2VnFuy7LebjXRhuXXWrg",
  "key32": "2Gj22azB6mL7smewx8RUFzyv7NrARjNKUEAgTiMRSJTf8yK5b8aomGsVxXzLWYj8hx7uJCHWDUPjUiB8mCxrBTTC",
  "key33": "34be5s9pwfGmvrLGbUsthoj3F9AZ3uFEo4C7nPJmx8XrzWutedkgkvtaWzPkhx9b3PDiDBH2Ras7z9qTGrChY6zo",
  "key34": "3hA2oBMscCujkHa4eqCCLxZ4BbD4mwJqMVkryprbYrNdRHkdVFkF9ZRrkuic4C4Ds3oAiSRg9WFnXtsfgaUA8jzQ",
  "key35": "4PatDB5D8KfgEDL71bFyLMwWhTTu3NUFQG6qE2QRjeUumzTvneVBgaAAiBthqvz1ExXR9fMDCXbeC8KecSLAKAji",
  "key36": "3Ymgp4S7QSrBXd1CeiYeRpVYYAgdNXU2ZXexnUdPJfTR3MpMzBRbkJwEUiyoFuH3dAbGN9GwGGjn6vLUawqYSwhh",
  "key37": "3vLDbCGhcTRUdALAgZrZBmUA9eAt8YEaaDR1FsANYcAJo9QDVWeUD6sfrEk4yXUiYyGkTsjFoUGBWWyeuDYFB3qL",
  "key38": "4mgMiUNwoQoQbGA4rf86jqJukVuQg4drMCq1dUuTdkxjQcXE8Rxax7Gu5H7mbqBUgK3p184GXMSC8FJa3y9hLuuG",
  "key39": "4vKUajy4Bz5dh1uXYPcs2f7FdQqvZ9g5LovqnFEjyjRkY6z11e2aGrpVrmA3taAzx4oRvWxtiLMV6eDHkbK39AEy"
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
