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
    "9cJ6V6cPYfnqQ7aiGep55X6jdkt6sJDJoRR87v9dBqQ8H5Db7AwyHFzhvdTswMj2mZJ3VngAVe8R2uR5b7157WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kuS8JxmKZDJsRG2oFYAWjV6sE9K3UoLTkejfQSyTXdYe3yja68yYQjbXAvrD1sw3X1TYCKRRTjnqHhyJwkzq9Ur",
  "key1": "3BX1cbhuDi4sKiq8TWCT62HJK3BjhXZHkbTvpmju1DhediKZd6DVHKvtHt77njStph7ij8vxUeaehjKfoPsG9Nc1",
  "key2": "43rJwhokQyRwDsHQrenXo32znE6wSG9fXh4RA7fHuS7aJR4xk5BZKG7z7Mu4nTj3epd3r2yLzQkbLXTnMi6STqs5",
  "key3": "58M6jWE21K9bupdyW3eBBG7N2ansUypy4qkU6zQ5UAgrGAQMAvBmQ8XPJc9tXkJ3AJ3dzwbsxTFGRPiwV24NTj2Z",
  "key4": "2QDjojpGMWLuG4XACFpNbyLefJ791BhSde8VEkKJGDttn7RZEp1ma1ZepvVGQzmbCwv5B5bxjxvVscgUVxWBp5Nu",
  "key5": "oNwMxZMseRT6xCRncSMYDPaRYhzNotpxsKgaFBTvWQUPtkDdYRFR9oGr5wJF2wXjm2mU35kAAyXQ5cW8FyhPGds",
  "key6": "3C3ZR92toUmHnhHiRLSe4pL9kZgPkq9DJ4W4jmUYXXGxhjqfMF58uMf8JMryhLEjWPZJe9fPV7ZP8QhtC67k3Vfn",
  "key7": "yJK1mqJrJ2MCh6SToCRjcKa9mSSHSafSMfPN5RA5pTRNxnUBN1UZpjd8BrJNhzwYMpfJsYdroDxsyUGzJgE84B9",
  "key8": "28J2NC4r3tV2BRzQgNoEzCDvVuMnGQqfi8WFp2XnS96GsRzKfeUzPRqMAnRii2o1dsjMcGJmchmosFdqwpkRCkuB",
  "key9": "62YDWzrpoKHyQV5Hv5zpB3JH29JBsxzMXexGsNrLQHY228qkBn9XFNkmK2dWf4gbktQs5wjriiJHAcvSe2ESy6Bn",
  "key10": "35kdEyE3MJcShWL5de1sAAjCLyGLgaW1ohJWfBEAqF8XFmRsrmLGR1EDJVc2zVHJkPcFhesmnqtsUqZm37mgoGkr",
  "key11": "21jrXvZhbtHstnnwfykDAC1c2VgigNuCCo1jWnsF5s5MUngf29rstRTS2pzbovPBqpPtaok9Vvrxgdx2PQVeNd55",
  "key12": "2DaSuSzSruoqSvZmDDynzzaBdMyNKgcpEVceXcEYK5RAdHLXexjpRSB4fkLqHNoAGH5vjguSFkQkVLgv3CVqmpwk",
  "key13": "TpK4Ak6vktHJSarAwdYDnLn5CwoD1RQNy9Ds6JCXqJBDyyTCUXqnbnqUF95LzQJKtCu5NdywRbNakh7BCCFRVEF",
  "key14": "3ZUqdGJBCVMGwiWXqoDX9roStXTb3mRdmAax2DUBZA5so1sfpxdtmjYqBhECk52eKAVLLvJe4MsPqFt1gmpCLT3d",
  "key15": "3af2aMgUnN8PA8SbPCzoLBHVJfvtcpARP67gu1Xz8Ex8rTVfGkEGPVZFtyPKNkmzJipV8GMXiHZae3gfwENSgiR2",
  "key16": "4sPcRcJdEfX84Qnyjq5uPeQGSfJ9uf71tCfyyYeiX4YQfL5v8XwJCqf7BgHKKmaxT2wDUFnb39hrBUX4PSgLw2kb",
  "key17": "3tQn88NhTD9eMmgoSSUsUXYfMC2LkqJuJrXrxHezM14JPYTXQuQVjMYSbZigwYWcMcXH3bePgH2bsy3PSUdgXuZm",
  "key18": "1xEt6cQbJC6prgydJGcGUJrNFdxnmV2ocLNKa8NLnakfrkqyuKhwknksGxNBRxFE9tgg4Ji3znk3bahs4mfadWk",
  "key19": "4PErB5jmJC8QW5zDz6yPP51kZgdW8kat3M1bGtfemL8BGyMkLW5ycBcqMrfWroLwKi5hxVJsvZc2ZjiY9pVJZM79",
  "key20": "3JktZFQcoM4XMyCV48oP97zjPtyL85rTzKKBVpeW5dQmQLzxgB2CAUSPQuiPUxo4Uq5rt9QqJECEaPSX25ANXzyb",
  "key21": "3VC5UFRRufkgheUTHAmVVKxWBVqC4sL4ba8QFxeqzDkU8iJq7YWePnUp15gugXw8VvLm1hVRmbpttbgQBRSuWQH3",
  "key22": "4gQpL5p7jjrfqCrbm6r8uZy4q4PQXBS4z9RsxncFjB6TNf7oWkTYhb8EhDPTbfM384J6cdeM5uZHVLo7vDRYtTMz",
  "key23": "2xJvbCw38XVU6GGEdbKuFcCFC9bqZizZFngT6WLAneWhGS29m78uwJff9eqfdUwbh8KtsAc9S1wyRyA4ujZoWTy5",
  "key24": "5xFJQ3coZDWRsermCzdN1Wn1SdAz5LzrCyKUZ6HD7Eak4tBk7fvoQ9LMFohgwkBsw77QwZhBsBk7kzKKffxBqhgK",
  "key25": "3Sf3CLBcJMgScsQymq2BYAt2TZTmsygsMnNDupjfNmtBnJ6VCg4F1AaV5VsoUrZHzhQPon5CEicQQoEa2qwMEy8Q",
  "key26": "4TYcgqZzer7HFLKjXppsQm7odr8DB1bHzJsC1WyJxxFc3ZQEdbcwBbrgoN3Q79P2yvd1wGnwEaK3byd3jkuuQUzv",
  "key27": "ktXQ5ivYAfotAwCqaXQk3zxD9qzZUYHbMSiD91UdPJr7Nyo6MnpRh9DSEhTVFqASS6YL2nthKgPeJmdWoGQ9cpW",
  "key28": "2jKVBQMZg8xsS9q8mmSXGwawxYNvPUVRr5zrppMasyt1JsRieEkofGNpXmc1hZYp8Fpf6KhCdt1uL6XCWRj5dFXM",
  "key29": "WXySWsYQ78s6g726Wdk7nsQAjje6EkG86xmDoavhNVdqP4c5vXC69hHS8J3V29eKXExNEV96XfuSymGHHYgyxYv",
  "key30": "W4rGi5jBYLQMnGsgKzCJczd6xzeYutZRk8pTU32qYHkEgh5rXo4uDUFFcUAyex51tyLcAk38QbmGKR3BEcEdNSb",
  "key31": "22hSVw5TiTaE5r7MYLf3oZDLBfVC2SxKwyPH6AvE6kCBtPvaRyiaruQ1LzCDZZjtr39Ey6qFo5YeQpE68HajVZuc",
  "key32": "4ynkGZnWFbjvDDw7j8FdRVBkD6qWMTnDPhcX48xyAQrRbnr8GjumYnD6ZFqixXAer5m2BHbKQhZi4G1JpHpjfZYw",
  "key33": "43vv2tcaLEjpk92DpbmEZFZhDM7LLBPzQ1RWrF7EPxpRPFNoncXQ6SQS2QvgB5v62thxcp7WwrY1gT1AZQSicNdp",
  "key34": "2rgoYoKuG44uq8NxREcSkutpm4cnfMhsFn8Zpo5emBD7Nta3qUtc2NqrfUZqcwfuwHJ8ZxpUMzH5G5dNtij9jdqn",
  "key35": "5QjiNBSexp7Ui9uiaG6c2EmSdb5JxTEHyCCnpu7L7RPNrN9mdtTtQAeFMQqqnBqwPna1VkJ8go5oM5mPUDRP8Tnw",
  "key36": "4mgV75dekaH1BK4Vhmh6gC1w9zyxPGkJkvAZfkFV7jovWGnr7zRj7E67ws49ERTNn1EYKhSKZ5E1eb4gMT5UM23a",
  "key37": "JvCPQkjAxaqYzgoZVaqPh8BwT8A77nSocvf8ernqYANrEDkCViTu6fNAUcviJgCRfga4k3QXoKmiNnKG4bQWcPi",
  "key38": "3L6gS1VqzkhXDhzLwe4tC57fHHbPbAMEqWhwoBBgvJubPwwqZfMgEgFqGwm1kixvwREEE6Ryx5mAkq9fyRiTNpPy",
  "key39": "24CXrmajDjNXLpQFtYwe8vn3SZgHR6ekag28WCw7h582g4mYxmsCCFRagXC1Xz53ytjRRVTHpnBCPwdZ6Xyes4sy",
  "key40": "FyqebKDh4q5yAAhXhsHbdLhFqMVEFZPuqh9yncSRNNZ58bNqnsKm6BnoS8N27RVSC7c36DJRnYGPUkAqhfcDRXj",
  "key41": "59a7X7GwPnD2e52qX91kP8LNqRmYsquyqQL7D1eAmKocM4M8HHQinNj3V2mV9gNqg1M9WKnG2db9jVjEeumoUDEy",
  "key42": "223uCEMU4etiCpG24KrxhD1dggWssSCftNxSawuRwQ8gFwx3emaYjpwvGHUNEGE6XT36XuAtYmKtRb6c8h7dzyAH"
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
