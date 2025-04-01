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
    "5QTUEVrj4fJVW5iAba4UXZJe2XxM7kXCunpbXSQdiVABsoAd8ttBPbPAsRPYkHCNkCuxm1PpyRvKn3WTnyrRRTu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXF3ATTBcej8rY49v8ZZFswF5dyzEXqKs5Q7LnVdJZqtXHZdk8nxN6Ncp8yKaAZvcCJVPjTtY8J9QrcE6mSPBRq",
  "key1": "4bZm9DN5EHE7RcTwTjydUhR72QWNKDumtfF7rhyhG8LT1nKLtQXLUNXJ3vXqNkXCBbBVZqX8nCE82d8wLUqTCrRJ",
  "key2": "5ZY3pqKJNENm4b1VyuPuixJSxCRdDzRqn7F6sXbqk5ggSdyHpRPuySpaJet2sUxf2omdTzUfHMABVZqVWuxL3QTB",
  "key3": "5bVok7N7aozypsLEcHbBUGDZVY2X9dCiUXRJhrvNu446jLyUorguJvEEQspjFS7vCwxv1tj5opJUVh5HEP913FtY",
  "key4": "jyYYUNhD45sTbuYrU8a84vU6rMkrQVZRQiPdBWmqA3GNTcjAX6CbnyE81R4RVvE6uVei7p1Asi938oqJe6HorbB",
  "key5": "2xJig94ZTLMCHynndPou2pJycHgwvArZzzYyd9DYVke7DcdKqhGyERxmYw6VrpXMNKrqV4DitwN2q6ymgbQEqY4y",
  "key6": "5QfdAsyaTNKQMJ1SxbRoZSMZRCgEfpsUtHrinsAHRwhZdb7pcpRZ37tMemfCR63mkpTf5CvcK3Shbr4pkt8jW864",
  "key7": "4YkzxwTExAeK7Mwanex2AgmKwmc4ViUpuXfYDhGFBk6fZ3hkxxNrPSUHRvn8Tt1wpixqA1AACnerXubHeT6aPwic",
  "key8": "2qtEf4rtJvq7HsjygyjPa1EAtX6x41goZNyBiTBhTgN12Jy5PxapZgwdjxvZD2eG2S63vdAKA4ohHmLe3ynTEXHD",
  "key9": "64YHk4aJUkhxnHvfaZRb4Cg8zxeJzwHW8NUcQn5vbsgscfCEuLGhsQHYQWMDuBfZEfX96BZPo5EnYUmAPhYCybD5",
  "key10": "3HnirVqvtg2caUGKgNzmQTbKVntYiAbxBAxZY456f8GdYcQJWHGanMWeFmv6sAQypRhurKP47bgdNk1vZj2xRQpx",
  "key11": "5wET1kLBEzYc6teF41RrXLsRxaM1uGmGycoxqGjSsopaWxDnCGJBc6W6cQMCi2bS6k6H6Skj2P34UH1N8Mx3G8hk",
  "key12": "2D5umnBqRdApn5igboZk3FEq163DPqVqBqnjTykvF8YepZ2cvPQxqx4fgBD9cY5WDfVZRnARy8ajJzTmiHupvKTA",
  "key13": "3pZp5A6dqxSPUfNm5kSRuRwZ7NXdRPtBeYCGvoJ1UHrAiNYsPouwUMK5dH3TNJ4yHe7JNCEJX8iW3syNmiSfwspH",
  "key14": "2j1wF5kNrLdTBUrjx5wA8CLb97NDmyPZqSq4YRwFxrvVdAAbMZUMBDakedtYm7qyKr4YfuiKcNpuapYkxbThTAih",
  "key15": "2NegDvC5sQwA2Ekjte2oDTtMyi3QAyD92v9tU6u3uZNMRxXQ4qt8FnLez8mfxa6SNzg2qYCXDkYd6c8mhgpnBQr4",
  "key16": "5SvgZ5mUBykKzYm1smRUJc5qqpMCms8mNh57rnjFGp7SckfE23h6xjrAzmtVbLU2GzdEtSSEJWt5SZKbQ9cadYrr",
  "key17": "5jZ6c7GNsGDr4YwMY1yERvxyBmHYnEwa535K5cZbdesvVj25FvdxUYfW8t1rFeQ2VjnPiLEr5PBkMHcdACB8HkZx",
  "key18": "53w2oiv3guGhkV1M9RCLUX9p2dMnHMMWfrEwGDJL2vddWLFNFNX74U6b4GvfAyKqwx6Ex5xepAh1r9Za3WG7cnjC",
  "key19": "4bKdUU2zJ4ka3WT3w3T8xDtquSbaedj3a5KdSb94hzjhsGSEL7wY6fagRRMhKLVnsXArcKqxPUgtYuGTyB8QxCba",
  "key20": "3FiAuoMEupe69RaPkJC13M8pYyZNAuXU27tFi6rWXmmCGEVUBQVqh48LyVPDa9cC8cfTTWWAhW6D8pbmLFXdHCqs",
  "key21": "5F2WvyWsMSNgXF55D2xM5VgkfTipzwehbSv6TEkESC8xJ13G3H79bxy2gJjgjpHtXL3ugFwkUQRkVhFu2grvEKFh",
  "key22": "37Gaye97AQ1wvxYMvCEW4qH8ifqneVfFvCwhXeBtFED4iBr81ubfboqrSre4EUy7VEBPcdmP7qtjkeZWV8tDB2kS",
  "key23": "vCZ3LCX96MCrPpiZGt7H6PdbJx81Q8GdRqBygmP1E6JhX9weizqGLE8SKvCcUbknoHJ9PHxKZALY2jUzeacNj4K",
  "key24": "3YXuDVLBBQDSxd6XUJqTPVeDAvNfvbv62XmLuF6tUnB7eQNtHry499FDTnsaNyKniAQAZquxNvyetie7b7wNVdUy",
  "key25": "2FUVR4sSEBYDeFk1sHz9eVAueBV8fEzmqsJinAcJiPmHT6j6UpEDsW4YaVLSLh1HRqNMt57kJH9QJqtuo9yTsGxn",
  "key26": "5rQ5gb6prEQYyFKQHDvc4YzXF2t8tCvQYxBM51s1gJZVSXd9aPwg64abzPcb9fowN1a27QWcXYgpJT5wdDvSwDta",
  "key27": "4QAjdKU6d14G8oHQ4H9L9VXHQG87AA1Fu3AaWL4YLLjoR6fHVUFMULUExF5umWNv8oRCrx1bAVeg3TQXHw9NRYea",
  "key28": "68LAghjZ8TcBhZD6MCJagNwGgcDw4Z5sk4Q8WMcXUdykCe6TDiE2Ynq8tW3HUipDo7kAbF1KTCziShiGyAmVaFb",
  "key29": "3keSbZK8x4m65cGXxP5eWT846w5jVcBNKHx3DMsdo5BRzN537x7tfM5HXRdNkEQ4eZM2YpBKETpsaAAxScLPFyNN",
  "key30": "5c6Z9VHThkNprkRx33ed36EURVB7jo3nLqynC36VF8VKXApGjXynkzY6f9rQvFJrajwURHRx7DoseUnhGf6YupHq",
  "key31": "4fGoNdoQQfVBw98PssdDcwiHzegBQTCtTctJ2btbbBiX2oAJ6sej96EjC8DP6vXGVRhZmwqVhzpr4h22euPfLFbM",
  "key32": "2DXb2dG1CRR3CX1QqQtyuesuUKMbXWp7xobKMeS8k1Z3c1dJEQ5hYvuCFSNqiPrsKpXhmdcigySTPK4zs7MjBZtz",
  "key33": "5LvS5dt5ZHia9LAWQvCPtkUpkYHHQcvsBMBKiBuWqjAnsszKm7infzConHyMtgGcdzRB89RSBLfiSZ4giF5f3Fdm",
  "key34": "4KFxsPo8T5GWqacJNsrwEkQ3xqXi6NeNhhkhaBBSVzz8ytxcgjC3mc2cfoy4sJy2V1csYVSGZgXW8pyLztkXzQMF"
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
