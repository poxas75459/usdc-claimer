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
    "35kHyPt8g1Vgs31n8RLj8RoWHaWj9sX6HQAR9P4DidWyDhWqYFKJBK22ZEF324h1FYC5RiamD5rwuW1KztKMprjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZNpegegFqqUSAWggmpzRdbQuWPHgco1dfcJJ21gDvLvxQzR57v74tNKeVztworrcjAvHVeUTfnVsn984v2JtFCp",
  "key1": "62o5jPehjWFASjgsGjAt2ZZ52RRRxvVdM6F38f9dHySE6JYCJjoaSS9vupB9XccEWam5hsAJLeG6kerTRZ68wJ42",
  "key2": "4ETAUCNV596jaYBSvwW3unUXKEMCtNZiSw9SqK3d3Seeg9JsVYyiqtd5XGoa4bvEtpkJ4VSq2v5zk28hD7aVg98W",
  "key3": "yUYc32had6xk6g1q6K7oxaZ1VGxgkBmt1Eu8VUgQ59fdfDx5jxzGqYJ1SqZSx7FK8Jd3jNCPZKCeX6LqXTZKdCa",
  "key4": "Jgufaw4TnjFWF9pM1rfGL4jErSBBLbdDnBRw2fQPtwoofvCs2Z8KGd81qFFfEVwFVRAjJdqHwBV7JanFqJ7TDzi",
  "key5": "3KtbN1euL6jNAmsSyEeJbkFVxMLbWQHF8AgzPbWgB3CZVYRgLBs7EST85rQ9EzhQHHjTfMCF97uUFtfCwV4Ghicr",
  "key6": "3QvLYbvtJAxp68tbV1cBbrstKgSRmZ3SVFA6ci9U1N6pq8TkYzBTyWnDhNfyXFuKFEe9LpZtz85v66rNhZkW36cc",
  "key7": "2oz8vcsDBfewBFS4DuPsusd8SnM5AQJjFxiyeNEWoZMpdYssVxeu6tWeqvW7az5YrEYRA7h1dUpLKDhvEUNiZdWh",
  "key8": "3M8GTNmui4wQV3hnbFg9hsNJJ5KWDgZwLqJtJpUiGEK4vEKCZv3foFcei6apMCRmuMi6jiUZqaRRNK8hn3e7DhaW",
  "key9": "3ELY6iaPkDwdVGnK2zutJZUtgaBvka2y6QahQkuGmzwrS61nCaqaZx6bUAAvUH9qEE3yiQUhrngqPAWHNcHmhoLb",
  "key10": "3FRF1BMfqJ7MDcoYGCCc71M9rThyN1DnDjRjwiuWzweqkmMDFGeZjAoCUfQe39Y7Q77QtzwJzw9Kk9agwwfcoNuR",
  "key11": "5RmDYgkJEXiSens4z2a8hWZoNmz7kTRR85Jg2W8HtKhb3xwwpYQZFGw7x2Z84LFgJVyyZxUL5aP6738JCZ7BoDWr",
  "key12": "566XuzqJnqb48r7349eDEKgVzRjHzLazYkq2asL5qHBwiBoUBptCZhzatLD22GbY2PETF8SpQGF6Z1LGstBQPAPd",
  "key13": "ZL8FfKYXRWLGdvaUMWDaNdBjBZcFcHoB62EhPFpXWnBvd9S7hiseVrJHmQ5jDCQRbQxKVW8ET6J9n5iB56H3DRz",
  "key14": "yyPLwDNY51pSTb7bFVhMtwFSaDta5uiNr8J4ogz2sxvF37eTUiX47yyRDY78kyzJTreAM74NxgS6sQBQiYz3ecx",
  "key15": "5n15dx7zAw5GDQ79eD5gQGUSiu3DV132gWF1Cjvy8pGiPF26aiXTN1umfDmRg4fnjq7TW31moK4wy8SfDLESW5sP",
  "key16": "4USwLe3URHetMWNwdvdMeTTy9Ka2FBuukQ7HYpLjm4tF71D1sNS53MyjzDg6fqfT142SE9ReM8zgHGYPgkeVf4Pc",
  "key17": "r9w5KutBVCpcyWBrsFaUtT8zzqMXjfyR2oyttvevXRGsxgPiFn13LQ1ddizMYdNYQsCaN2ApTDyQkxrvozwUMqe",
  "key18": "3kGXtX9gmvH1pzJrcC8r2Z7kBtjF4YcH4SwspUTuZ2epv5dfNDJdqFgsWRvRmzTykxRpFrLgSZuaQs1J8jiyRCqK",
  "key19": "4P1srgBcgV4BzWRKcibB6b6VserGapmgCqA1KzQEk9f29PkU3wgWRyaLwqigCgVFQ4Uz5VAibFjvzBSMmfgb5a1F",
  "key20": "5bRTxtu5FahEkxNTUjVUW9TLNAHntFwnmE77DqBSz6WbpNvJDereRYhqHSuQibAFQQ4RK5h4m5iprcvU1zRBJCjB",
  "key21": "24mPAWFDMSS8QwWg1VyyNfz7LChxUyUTsmSrGp5ZrLZBdFgeqzTFc4vJNqZRsDLQ1Us9Lv5PwgtpFE5x4ETGZu1m",
  "key22": "3vFkSc5KxYHpyNVJoFDNHWPZieYmUjVgMGXTfY9cbWxcV3FTVmU1eEAEmwZqGAcpaCd4dLbTWS3CeMzWgFrfrtr8",
  "key23": "4s6i5ZFMEQL8AgK81prmFQQVL2FAVVPzcFwzqezfwqrUU6AN7Y1itYP2WDzAqr6tyuKVRySJnbavDx33H7vcDnaa",
  "key24": "wN6KAvqrVQHBZjpLqMEU5yNkUjd5qxhRxmgTC5iHgQF7fPkvZvNc9q75ThLysRAA9bUywt9AmA1yeGqTVZyekwf",
  "key25": "2ut3kSJcDugDPRhthQNYS8FpMJsqbNfwNrSgnQQA77Y2Aap5AeNNUpevrLX5HrHXREcotG1ByojuEYBUewqgq9jE",
  "key26": "3wz2ZjxedLoE9UStDQJ9KCLeuC1ogtkRLE9tsq3t8CHT9z5JDk64w3GE9U5NAvBr8wT8mVrHWtXk1z7aPvjwJSsx",
  "key27": "4xxpbuRSMU15jVrrCP7iqzU8udinzK1yHhBjjHq99Q3VEi1aESac931kt4MvS6Gg2ZHRxZzeKCZFWoGUyTAz6hWh",
  "key28": "5mMFDk4aPD19YU67syKenZKZsADHfsHedA5nUu7Woup4p1aBNNNRc1eCFjHSoAuBaW3JZWejv5xe5sFATnvqNRJy",
  "key29": "22xCN2W9kpb636G6GcFKMZa1vGvHgvMnuAYGY6ytLLUoa6neLqprbTfXkGDe6XUiXjtFadLjjzM72xB38vU1ddKJ"
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
