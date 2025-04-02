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
    "65WvGwggywoPrXfF7hbVEpC8t7KTAE1HpiXKJB9bvZ3RsLnfD4B7BfXFJXgCY5iVvQ3eFoLy5SkUW41pLQKWBHrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpnC2wV7AsByJf2VN4VRC3AYgqQkh32Vp2cgdLhtSQTUMCo71dsiVwQBAWMuV33T4ZvJG4zYb412oYQmoNhJ391",
  "key1": "3webpyC19ykNq1df7jpGPpXQvy1uvdNZgpRjkbCh9n7xrCCpFQNAKDV7jue8X5jypGb3EpDcskpco3xkwNRGkeJy",
  "key2": "2D4dgccduCwPycz45gzKmCRejXCmpcf13kX3aFAmsxPGRuDfum7JspRaPL49kX4PahEm99oFexnipqy6WKLaTKnN",
  "key3": "3HVWo7CKre45UhpgNwn1ddwsTWMh8jrQW9ES893D3Y3yx7dVhXtux3shDGU5U9SyG9pWda67dXvMSxb3PRrUDXPo",
  "key4": "2G5hw9Z1jMCj5xRfpCqqEkGw72KpaTCL9b7GLjshGd9522pqj3VCKCxKUMpJpxAGBiJP2WVLtZKwyKLfrZJSrpF6",
  "key5": "356npAmzvYXyFgJumZLwPsEGSPm5BZC963WD8fqrybLrjaHwc6vsjLFdxNSnMjpeY7kRihHzAphnuG5WBRyxfMhH",
  "key6": "4KDDFndpumWGhF6gh1BewuiE43JuDeygLV9DzZiCakvz6b4c6gE25AhctfrvPU19AqVtNEzmr4tatTu2D79SDEvW",
  "key7": "gNHcQ4yTg38pYjm9dmX5hmTkPffjFCKkwNv79NnNJgEZG4rLRFUumJZvrB5tawXryCxgAVg8ow8M6fFK8Y89FeB",
  "key8": "3sDCmjs2wmF9QcaSEiGFgpHwkob6n7jqgDmrsTh64geKs8wejcVhA9YC4UjzByRhVSuV1ADwfFBvpoViTfRmBMEu",
  "key9": "52mSG2v2SWjE7iFE5mAP3GZFUiaGDrMDJo5mrvaSJB7m84kfxm6vF2V8cfqb5TfU28sb4EhPLr4kN5U5oNxxHCME",
  "key10": "57BjRWUMjhML3fFoVWC5X8Y4GUZvQj7xT2363SF6QAAsQ4cPF7oFhSqE7ysYQmZCakDPYcTDASJNQpg1w1ihchzj",
  "key11": "5Y3v8xHsaBEUR5vavi4zSB3tdrharF9WhctbUYVh3H8iCiRcJLYvzaRHZPq6PjCigdVq43cpxekbFRz679FBZwB9",
  "key12": "j8B1KYpCJvqJ8fqdamQhiFmG2dKEdfrcNtHX1Sj9vF6udkqyivGvjJ74ZmFuzVYTm246hVk2d9Dasu7zTGxEFKK",
  "key13": "38NZ6tqUitCvkpk2cXyG7eLJfzZ4Cv5BkTL8DP9AfoLzzPfHGjmREukQBm41sfoP8un1wpagobDWEiZm1j3qoKvC",
  "key14": "2CFXpzQxRudDdTQmF4a7ARgCSXv7BXfXfssaHv5L1dZ8jREttAJ8QjHv8pNNbwPBXuBJrze1bxaUbvBbyeyLx7Sz",
  "key15": "3xSSyp43HYk1qzQTbCfm4v98BYojjzHJqs73MH4aELuKgKkZy9ctjR3sFnSqYGPrwtM5vBq9g9M8S3aGbxHEew9D",
  "key16": "J4sjfdYhTseR3z6Uq69RzAkvYwFk2wC5J8Z6nrwR89RvXKXN2HfbJviCwT69phSVUvsWq8UyQWSQdipFFUtciww",
  "key17": "3DMW8AC7ni7Q5YRJ2EXCtHUyBZPdncu2PB1sUcEvEvmsSWbKNbNX4oM31xVC3rfCQQde75794Gdo3mWFSW2VE6tz",
  "key18": "67MHrgX95fEr17W39UvmEmhG8Gtn81ki5pkPC2nZJ2GTTMZcpDyFJYhPPefaxxerwr321WQ9dLTCamJA5zzF6NSH",
  "key19": "3tGpqibDCDqDsgfEBcWo6JDuDb5LJARYtgPQmSppMUagH1JgHbhSEvJzAikTcgoMJGJXZuFKfzn4MUBQvjgpzC7C",
  "key20": "41GSWbWpzhTyZSmde16pySMkJDxLAK7JnmBdrcnhw6GRuLjW8dBwG6TxnseSiqCu79uxX6HdRonvukBrzp8ShwaE",
  "key21": "43ccyMzkQMje1eBmxgDDCaTGziCJCMkTWU2jwU3epetrbmRecPx54JJqL3dBNXupnWphFfPdzoJXvMyC15EGSj9p",
  "key22": "39RZE9PFcZ8ZcJfK4iBCSXFWpFMAyF5rjAWDAzTgpruiYUAKRuLvSmqjQ2mNKeNjUjYqDTj2V4Hz1zXmFrWSSWUV",
  "key23": "2RSwULHgzj71XGcjsKwUo2RT1ZZHn4bS4UUzm2ZFFbaqE8UkCnjYkn83TnuoLN77aBLQYT4w9cPWKwmQ3Ma1uxY4",
  "key24": "3mKz25ty933p96qni9rybX6yHxGzVkqgBee6D5kBDtibP1ocpL77oYDfyqWqHWyFJp2L9Lmeo1id7ZsdSbsYWD6J",
  "key25": "3sSVFUNrJbpKY3xzmLEkdniHDAJNw2cDYtzYDBCn4AUzN4vhti93hqFwvi9JMDEeThVnKfQjMFaxcDh6x73ko1PM",
  "key26": "5e5d4egSYVchwdp3vLLrX6iZ71rEiFfAdNzNMARG9X1TKJ28ZaCtzDL3iamBApCiNLJhBUvhyVhrmsvXKXeV1qiB",
  "key27": "1AsJvUaFs9X54mmbibocUCHCH9xm6T6Hx6XZ4fVvP6LB5JmUpuLdEABYUzBb3R6rLge8h7HZDsQPpbGnkQDeE62",
  "key28": "4dGmAThnbrx3B6nh4hMEtoov71MyoURiJ5mkWUGyeVtxXdyDpPGd6ukHwxdYKpk1buCo7B83RrG7UjZq9ncDLdKc",
  "key29": "5Aae5nJPz6tCrgtZo5a5jk887ohqK4cYd2BQqejTs1aFrX5dtmJ6XgiGEDUuhf8TqRwuUPRNCKKbg3HeQ9vYJnYZ",
  "key30": "22qkmwXVNzDwGRFqZtqqEJvz6xYEPAZE2ARQ2j4gGFuDiszoUjkpDkMfgB7y7fvbXdvh7jpRTyPV3MZ2SsRYhCSL",
  "key31": "2WJMWj6aQzMjpgXRhUdK9X6qyLE8wMonATBr8eBU8Fd5NDo1uKysFqDKYLpsvTsVZUs6eTv2uQXZKLbtG5Z1jKFb",
  "key32": "3a2BavDCgnEY1u2Lurz1qGejC2Smk9JCEXCcaHQMigmCtWa8MkWZvPf9XrUo8JaSeSvqxmjZQDu7HWJ8pLhWvcXv"
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
