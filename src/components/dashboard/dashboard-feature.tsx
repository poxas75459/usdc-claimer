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
    "5fyeq8oaYRmdiSTGxXyCi53yqHzisV1xG2NaQLjiA25qYQE3TJPPPtBXvMydxCzCyMemVLmuKariPWCtrwNgTp3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Wku6TuirtrU8fygMFAgGYbhAKbfsLxPBiXJuZkRAmeB7nMxEvx2V9z2VTChFQfMkyTN5Wp8w7HKdc8GHVQMmG8",
  "key1": "ZRzGRkcgFfqEpF36C8b4dBmHVbkVjQcTLFcSKUH2Sgw5hcJsR77ou2TajDzkHgrNkKyePW3n2Py4KdEupmJDcST",
  "key2": "5mAkpTvffkTVHqAdVAtCGHjGkBWoAmNCVdALMc4qaNHGQts2dissmsZu8rdBfVsrjCwsETF9FEFWKSXk3XrGCqsp",
  "key3": "hR8JnM3XDFJx2ajUazJkkRdog6yrQWN6iTEm5UpZp4xjzxZCWtGHPY2MC85TGg5akfWg15fU3tbwqAMVVUKFjpZ",
  "key4": "3D5i8zpfNuPoKuGqMn24gdRnkyZHJ4bNPkDMDr252ikACymciazQxrsF4FM1wzf8yN2Yjec6d8BdurDq8tovYaC7",
  "key5": "5vjL7asvzwAuvrHrWfLNbdjDFkSb9qB7ErQvXCsc7zkSBYukRMJxFWhgnTsyM7BSfsPM4tH1vv4huhey6RBNda3U",
  "key6": "2DT9UMa98GdqUbjSuYAoH9VbF2qwfwGQNAXbHt7AZrnepAWWvuYKDxY8gAHFivfLK4gDgJgdv8UwyWumvT2Nj7sy",
  "key7": "WxbgABCAqx7YA9vagZdMD1kiGaNQ7eFCBj2HXP4UXzzQB2Wr1q3JpTz6MsmxDZzdGvALsRXX52FoX1JsDkyrfrw",
  "key8": "4JaEv9tMMGCetug2gBXuXeTSnoFWGwavAv9ynQZNjfmM3pV7DMmJCepY6rhsTtonDBpNvhTdGrw4z8ZirrqoPq5H",
  "key9": "5yLwfDMzNGDFpuEJgzg2Gy5sjL5yFeryXMCKTuosGs5JwYxq7nGfzDeGWFpFYe3sZCXtc5moBWRhYLyyF4xqjkmi",
  "key10": "4RMteMzDQgWSy4TAqCmjtC64uBgxRRc8x6kdmbSEmU6JXf9XCPVNfpon5qhtCzA5ZQymGsDjwfSzFAPh9L9HKgSN",
  "key11": "anfkD4EYsTgqK1S5ijVzciCwzVXLM1p6HrCawxEW3KsvHXnxkBsnuCPFP2wQrKdK7KeazbGSUg4zzEvG2t6uAci",
  "key12": "2agoNsub4aND8U5Xvfv9GMm1Zo1Nntkv3J9excrNLd9rHUCkntEge1Uz6YmwvjYTjtPA7n9YgLQ6ZbVc7wLpVMmy",
  "key13": "4x57ft1x8bvtRt5dc1VsQMZH6ScaGmTQffNkLqHJCj6FNv7D1H589yKWoW8BBXxmAFvGczkpohFDuzvnJz74syHG",
  "key14": "3KxVYDYzPca84sAKXhLHaYkmGxHDSoxUKvevmdVUCgFKQV3CZ4JQduuX49gQRQiaxbCXW4Qo8qS6PTU4Upr4DAeH",
  "key15": "2GsbSVEVsMx65VCcH8iSZZMAyhupkU6mEBT1yiMoV8i8A2WMD3knkwPKis7UFL1CmYS6qLMuigAcLKnK4W9EG1f9",
  "key16": "5NN6fhHDd4vxXcC5w2AvmQtQGRVXHfRFDEpU5jJ78aDgLcwCbAUBsLPFw3CvewLcqNF7dPCG86p8YeZwcnP5VWWy",
  "key17": "5wskvjnGmTe6hocM1QBaQ3gmhifo43tL33kVhk7Hom8exwRLw8QeFUSZ37T3xNCp8NaXEG1T45x7sNCvry1eqjCX",
  "key18": "82ycNjpXkqKBB2w2DvEzosMT2hpRJNPxQPChWf7FY7zxFiNgT9UTaB2cxtJo924HQcg4cFxvxq8xJNrnmEVzN3A",
  "key19": "3aru9MVewQP29eWnZdPem63rQsyLEuDTXGpch2g1nY8mVMmFnAKijqCbBow4MjgeCLqC9piRUw4EAPS5sLUmqvi2",
  "key20": "2AATTvndhMUD56NWPiAShNa5fz1GMgJv5uAFcCfj8jGsnsHMWkqUMcDDp7eQsykkSCkDdn6x9cV74DdpLdj8LEuC",
  "key21": "4KqjoM2HisUABpqm5zcbuduvLa7zNYbjpuTauh9m2dKA8CTUCxDF1VhPYgfktYz1whvEZpmHZYPbFq36McKaVCp7",
  "key22": "38CjyTCFNpeZuUXwryXYTpnx921h13sHWKsoPkcoxorXWEuupgWXotYzCfMiUPttef3VXHjGVn4EbNt7R1YDoGNe",
  "key23": "3h4uCSAgr8A8k31LsxpsC8hoQFthmZWR3HFfvdJfzpWUcRzbGES3fWjCjQg7HiwhaCNKgAC3YGZ2ULRCTs7Zqyux",
  "key24": "43rDhfYr5seMwr2P8P4dxTjcc8qLhUYiY1x96hSPJNukzhBuxPiCZ8VMrbJBqmfNiiDunQ15qw1VHPrpN7AUNavx",
  "key25": "31cHs8mz1dEh2RZrHatGhM7LwUwreaEJtTCADJPjS4UVRJWTd47Yh2LyHnDbRsn1KLqdj1dKEsodY3nhh2C3XjwP",
  "key26": "UbYbyMQ4nFszrUUfM9AHBBaXymdxRZZNr8yCAN6smuC9sJWwuSuQWKAMKZeT4zGQKPdG18HUwYvdnHLar5FWDBB",
  "key27": "391LoY2ZLh1F7Y3S4yVYeUpSaUQXrX9JiTyi2LdbH7DUX2QBNhoD55WRz4ZmtEmuLyMeoj7PQfCKiM4KPPJnxsNg",
  "key28": "3fufJbFiTpzXAFGQm2zQhijf2uX2s2gxHVhcRr8Xas2oBHAdmjzbZGUM1JNwQEbTNNKaWEdsQe25ahXqQJ2u8D8n",
  "key29": "3dCFKvDgvaTSRuDVt27F4VQ8dT6NsgPVhSCXuq3BJPfsZVTRVB371Hri9JXDN57ShPVCTUUySwXkaRguc7wyyVJ2",
  "key30": "5BZqN3Sno3dunuGWbQKYWKxKndQTmcmvmyo77cfHUUMBgEVhThktKyDFcqD96QU8Sqio1FJsCMZKArofV8U3oNRi",
  "key31": "4GzV45tJVK6Nf8vSEtcViXoM49DaTMgtHrdeanfJ58HfQSHLuAzmVcY4qBfi18FxW9QVhLsfYB6PdZwKLKAd6mbh",
  "key32": "3N5qXPcBmoYpQo4aMRX2afJ71hDQVx7tFqerKqwRtnLRkRFKGBGynV35c3qAV3PgMXXdajEFvJyhSvw4XLiaatRg",
  "key33": "5QoWhrCtxTQUseTQCmTULnsqoEUVrdGT4eZBhFgkqTz5GW6z7nvcPyG5eT3i4aZxytgUeVgock9gE1SXvz3cBiSM",
  "key34": "2XfUzPdJ4PPBkZBTFbpaQPAcKTAiNnEqkyPyqTADS7YCtEPVeL9CdC2weBZFznfZ4ZzcbBZGxbUaqi9Byquf2WYj",
  "key35": "3SYuQW61dYRCvP6r1DZZPd7KL6pTJxMqtbNKJGqSyyXDQfJ1n6P78f6VAwcSk8NUn9cf2aRCgzEx4ZcBJMLDwkvb",
  "key36": "5XAxZErvyTbpQp8f5Z53Fu5Zjq1k5nLmX91u6JhXChZ6XHrB6CtmD7cbuJMAd3a2Lm77NpanrSq5gUP2cos2S3sp",
  "key37": "5mT9B6hxzefTTUUQL5TNwm4uYeJ3muNzomEit7PUaxRAuQd9mFwo7yyifi9uQaBv45r7xUF3ALMw6wKoGWMEZpyi",
  "key38": "56Nxjf3gyhHqUpDBvShdJfVSGf8D3HwDRKY8wo8gnJk5F4rWhn2y6pJdDeeXmPcgLAmwK4aJJAnZyYnHwAHH6z3D"
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
