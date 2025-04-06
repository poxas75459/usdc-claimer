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
    "5gojsv5Wwwwcv1URMvCtnVFv1gUtgxvq98nY4TykAfRkmrxGc9zWRhN3LMHbNqrZYGTt3iWxyuhLJfxucUahREAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vW7JthWY1NjqR3TQd6kfBsExsTqmfMzWdsJLKKXzpyoKRdwnHn1c1tBdWR3ZJtgsRkJFD3adzKhiztsoLbejbDT",
  "key1": "44VBsPoVxiSNVJpUCRfnCfBZ98nzxniHNMQAQJqSiqt3CdD1KSGTphLyiiKdqxnyithhsnzAaa9FRJSBSJoTJ9FX",
  "key2": "2zKJV3t2E9az4cQtHsQHoj3kM4vPHh6mfXkj7usfY1dyRLrcVeWjVKVmB51K6o5XYkXkt6384M7ZaoiBgcpmCkkB",
  "key3": "4ecbZnyj5Rd65gs8wA4wi2YoFSCS1MHZcKCn1fp8y6Gs9WQaCUvW19NoXhweqrMrZjVhYF6d8UaWAFkagcPPo2eM",
  "key4": "NJBuJvFYQR3sxGGyHRTLZHVJfyc884UJSJuUR1XvV7z9HQ26jWVw8mE5FnQDgataXwnWEQ1xZnFSaL85ciDvNs1",
  "key5": "3LcLSpHRrc6v6Ljiu4JfubQPQWNnV5huwQpphE4a8ar6L14CGDnTyaoTdeJcC4ugSVfjSAwfrumcTJsDfsHZEfcz",
  "key6": "3i612R7ZDBp6VRBC1dWEuoQtsMMGy7gTgoRmq5c3VN1skQ65aHkXsRmYMAKpxLFJADkCeKYUv2NpM1rjNBWy2yj2",
  "key7": "5ZcTyzP4t1kincZ9x92AHvUET9FfzBoxTGW7kHcrCy4pCnhQqhF1mfrKuAC74BSeeTovak2DKGo6ZSokDdfHZJ9y",
  "key8": "513teW2Bmc6e9Cgqfmues8Uw9KHQinQJSqx2FSbU7rxZ1LfmYwEzCbyJ7yrLkxCBpgHM3KToGZma6BjAYuCMxg5B",
  "key9": "tpaPuo6Ko985YMnjdKFvcXHVYvGoz148ySteXipJLNfpPxbi2DLceUGHFSi5mzBVEEbC6kfCwLn2iM4enTGeLQ1",
  "key10": "iKMjX2cMDNB5SRnzuRUMfR8MBL98D6Nxw13yci83esRsJE6QWfyPH3jS79Yx4u8qtN9CAeTj7CRdgWAENDEp5N7",
  "key11": "2bLWf9HsAZnhiqztcccUGtG67e6Kz4MntS6zRinyEiRmNo6yr6mdhScU6DU7uANHTkBKCcEn8H8EjC4foQMB5nU8",
  "key12": "4XVgPUfoKYbb3QgfsKpMkpVATZPRYzfvUU5aNNu6UjvjPAJT9dYGvhVQmxLLhC5Jc5AALZxKRJYkyXSWdDFUcLsK",
  "key13": "2jUf5M4bbKTiq627YFSNZvji2m4kaS5pD4KzqYdfvgG8M7YXD5ELgqpQ2sPoouURFsPGW9eNHJPSNYwqBGNao17z",
  "key14": "HMRTG7rGygB4ZLGJgUwi3R4s4hKQGPBt52T3HmdEiNeDSN9MoqsmvYABRMK6egm7vDiG6GZ41nSfwjux8HpAvqV",
  "key15": "2fQfMUPs7GJDEdEiz6rWHZxbn2qgUKA8RbxeEuNPkBtZo5UHjCuQQgJTMiVQAC4PAUozvCCdnKEcYTQcQyDY5zLM",
  "key16": "4BQbFnxgFgvQAwz1qWXCntTSBgzbBBBVmGUp6KPFDad2HkKRrFnwaopddsMPgCMQ8kd1Nz3qQwGD4bgop85dpRfu",
  "key17": "5ug8GsYGRzpKJPGBayUXXqvANQTNku6vuo3rdC7Kt2cDSQwTyMg5aHgmXdbuJoUxjwZ33wanEn3wBw8WNpDPQKoi",
  "key18": "Y5wKu81Hxa7EYfMywCCXpobtUSegj6MMwZHqMm9hazFN1EZXUM3r8U3GZupPbvWjmGupzLh4fCKBR7SZBxYELUy",
  "key19": "3PfRXrovrqcjZ7YHD5X1oQArUPM4adva5GvrFhXT47GUVJoqks31JXT1rSUharZfWRdMkCPh1nTBdDheBkg6MGtC",
  "key20": "3duJAUNALeCpxE6jruG3ZuW1ntG43sjv2V4E8kGddmKJ6rQvy3h4K2QZqS77YdwdzqcQpkMuzbEEBbk7KNA4cS5t",
  "key21": "3MNBNAkKK5hJJkRutEqv6wP7JGzNX1BTC5RQu7dkVrsvPMBmcRnLbGEWDLiKVGPW2yy8hBZJwr37RkGJHa1FnrM8",
  "key22": "4sQY543mR6y1ZbrkLFzCZ7X6fY6EkihbR9qR7LV7jWTyAhPMebG9UpBorBXaUJBaVLQePbN1tpXHtZTeHRGx4Xwu",
  "key23": "tKcxwcM4ERxQRmeC7b9e7A1m5tHvP3irfW4778q63vazGAhr1HsaPPRwiWc9A6HtPcgSi3GKz9kEu3q1NvqJPKn",
  "key24": "2PsBh7PLvj9TeiqKFjCNwQVMLUhN1HZS6Ke2mvKeZPfCpEyTbNjrNow143KFKhqtReu3NX7sEQyevCkrBDwZp6vV",
  "key25": "2ZGygg9wNYDDK2h9FY1zFknaH5CyrxYKoErwrpUvQQkEMomMkQhtWbT9DUfVGUfFqcaUnBefM4cK1zdR4yEcv9ep",
  "key26": "5K8kHLTeArWZdAFFNbALZiSxZ6Cs5EHj1onitUjT1QN77NKZuZMj61hJH2Bv5vccApKU2iCwiUHhmGtp7gG7kVzT",
  "key27": "5nUoZtTeYLcrateAY8Jb4sScScaCdBMfrADevsWf8pAsicu1P362s2DZNH38gPJWKEN9nZ1rdjAtqAZ489J5PmgW",
  "key28": "5x2PxtZsT3nweYXo7hB95ETvkqY1iSAWrJ5zavG1TzkSr3fWQxUKYLe1cZC7THgACg7LZf2QGebCuFTgBa6DWqzP",
  "key29": "2tTBgnDrprLmDTKYShandTJyCDbDcHPrFN3aLz4gWjnmSGYhMzj6NVAKMoK9A9qdtdd74e81seeLCgVx7jSQxMdR"
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
