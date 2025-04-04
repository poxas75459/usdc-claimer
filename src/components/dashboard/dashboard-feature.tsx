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
    "62aEGYu4Ss6wfKstwQWipfYPqxEBRMoaV1dmaCSDfNjCcWrpav9Wtbsu6TbnThdn1tDsbYXpa9UUw4gx8ifyaQkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWCXvZNE7ejxwQGdmtxdbducZdD9GVvADdW3dSKad15SzEEgdbSJASX33CQYJ8eVynWznL7oMTFUtXK893qgA8q",
  "key1": "2EqDsU8w1cYSXSo1qDK5hSNAPRgCg2Y6rRMdg17gDDpE5MS6kQ4HrCrKUrmggcwYy34pijW7GXGgZ5bTBoiCWLVy",
  "key2": "2ngtGvQFsro5UVNVeKqg959k8X89igpdw4wsQ8wCodTaLssRtdfbYqznZRPWQjBb62BA9zCftxQey694yViVR3qo",
  "key3": "Kef8CuWyJAihahff1m7djXt6L9DEBu3jaxHrQXF6tFB8hHF8yeVTN73mb1XUEaA8Zug6ohjLc6GyzQVumucQonp",
  "key4": "4ZXMZNJAuk1ZV7gKeE1iPstJjUWLQ6uuvi5rTs9ajRvWjbKuVthqXkD6dhTQ1G5zfkU2ggcG2eMTy9xFsrcEFCk7",
  "key5": "BUBo4qwfrpy8SAVvHNASoqxZuZuWPruih9Tu3b727o1XGohdqGDp4Q4TdRGBwAwmDTkEcEWNkYsHR8GoBha2h6t",
  "key6": "617wNsmWW3qemx9gETBqZwdmwxvaFhYVtH4FYWEHNkNZMQEZFP4QLzpLUWH3gj1rCLueRf2zrtA9wDRTXvHCp2Mx",
  "key7": "368RggPCYYmGC2ovHGShUx9yGyKFQwNFA1mKHg5hjqfkqiyDtNLFvAruBhD9X3SYXtaiB2WDxB1FrWhUtcgSaiXw",
  "key8": "2XeQok4RtDKqMvjWufSceviuWX73MkwBd1SPZTQpTY76UTo3GCQJL8r8zD8rAwPhAnTb5ApEpogdbBCRoczYQGok",
  "key9": "FfNVidpdiaAqD6e1N1mYuS1AXLntWPsdiVofGJozinPVHz9k4uZ2vNjji686wrC5prVJfvTY9aE9QcQnEwH8eWg",
  "key10": "29bNsxUpb9YAciQYZWxVdjrxhTzsDhqwiyHDbHS6DiZm5FLWVAmrde81VjFPEdBWUamVt6NdCgn5wvokmjvUTMTL",
  "key11": "2yC7pE9qUcnLdf4khfJUgEsfNNgmfJPa7V8F6y3sdPNQVzXz8UfbKfvTX9A4v44R1PgShb6njGPFjU4sBNkMJFQC",
  "key12": "2D2eXmYujzMwtgQp5jrpo6nuXKKQLeH8pWcsSK9gsWLcPcksJx1DdXL4y4Pq83LZimwpBERtR5izXuemnmgpqRNX",
  "key13": "4qcgToVraYM9MaqRp7cAnKwupvhVJSrdqxy7WS2ewSgGK5ULss3MKELEE28XNCsvVEChfgi68BqJbaknHRtxwfJu",
  "key14": "5WxnDDLnzp8qUL2MiBUv8Yr7uE3eXtvGFtMZBcrRazmytBjYQ8BoW3ZosZD5gjEgGpy2HTHHpfT5noC9kvFMEsd",
  "key15": "2cmZZUKm8Lb4ZMTZKghBMCununGTifHQsKDkk5QgCpuKt21bKGfqWAfAURzT8b6xa2ChLJrcfcDbDCv7FPf3S3JK",
  "key16": "472qvSjPtofj4PwTaVeZdLFuitbQ9RLQtxRn3Urr2KHhgmVvW6esAZfRyikcHXjJg8E5VdajdkyRiL5R7rod1eSF",
  "key17": "uG94LdW6fkZGn7djwomPg1mzLFF1eB7UUpTxUAqpx8qMUuYn6CvGCVp1uWka7dxwo6oYoNVc54xqZNkzWxB9GNX",
  "key18": "4dXzYEcPMigu1JTTbWcuo3W7PsWh2XTrJHmMEz9SHJ5aa5xCK9RTQhQ5zPsgFqB9cEn4a2hchCfeoYc5r3WdsKTA",
  "key19": "3LfzCQxWPtrKAHLzkCsuBHVJWT85LZ6LAPfYgaeC6RPRFesgzv5vksPRpepZgEyoq55tsX4VcoN8JbsvKXhMpKJS",
  "key20": "ymM1QKbHogqMrGLu4Vs1wDisVsB4RFAkpbKTDeYwfde5uvnYGb6DHzgudWnk6AfFs4Erxd1neH1hZyqiHLpiVU7",
  "key21": "22y1CXcdPYtN1jYfaVTRWHgjxzNBpcu7RZNi159Wdq2Jib7NtmgoYPpVxqx763cEbMNPFmwJ1YTkPRqYb6p6VHzw",
  "key22": "5wzYhSYaRdfzS2VTgF4FJdYD5vjVAvRRYYRdW3SCymx4YEBhPQtSszH2q4eF9sPieffTs7hhqYGhd5WE9PpqLct7",
  "key23": "JrW1AUsD1RihBB4hyF9raY67Mw9pMtFYZs3bXndvy2jCsUHEqEE84Y2yWzXeu4bYS8AvQrvtQ3gkdszAaMy8auP",
  "key24": "2kFcnkfsLoX1N9o6NzCC3iTjyxMoXhuu9MscDU7vrAzeLyMZdwTC8A3hwjF41exw3hKEwbgszgqcMDdtZzThgYXv",
  "key25": "2ghGCTqFhVCGUgJTAnGu1mKBLejLFuAaEXp25MUnGJSr1xnesKfCmi7x1F8VfjpPSKUUW5P7RaJGszgVcYUkrtpr",
  "key26": "2cGdtQhzHPpawvoCShoy1CknBn2YKu6R6SeGjrsnbipkHiV8RJMPNVqFRxGX2aAh54DmHEYPLfPJ4N768roWxP2c",
  "key27": "3Dei7HJnDxCWKfK89b8qHYvVSxxAbNVVW3BmvExYD6ARAbiMVeK5YfmUHB5Xwk7dh41KtbvQPpxA2i5yzhW1gaM4",
  "key28": "4RQY1adpigGpabEKLhT2574jK6aSo4yxNiXu7Yj7sqvbZowCjc9K4XTTiDugyJqWohXB6DpNRQ8aWq8GNeTMYdFg",
  "key29": "5Baa8MJfHLpRvNzV2GLFq8DhVtkSaYgAMAfKab9eh71QEE48CfwHUQxFrNRYfSEFffeuRtjYcx87ZJZ2GxJpnQVK",
  "key30": "wXY2D3FnyBVSKKrwafPaM62CHrmFemXPQBJHLWZV4usCwEaHZd7wQcxcjJR9LdbPdU66WT3xibMvYWfoyR7rVuM",
  "key31": "4HKjo8pbiar32AAUodrdVcERPRmMsX6iB2vcuMffbif2FSZwBhDWCnxVprr66H4YsgBSvUjxv8dMDq5QUDekuMTj",
  "key32": "3xpFVGaWu4YDahigCS2vrQkX11vbfL46q11ysGFQVWACMvrcn8e6C4zrrfNnCkWPCv9qS9B3bTUFbTZDZ4q5fv1s",
  "key33": "2ovuxb3KJG6crxqtSvC2iG6WdQNbGFmVK6WsNXft9phYu8btTS7yucgM6XJTAAhUcYLcxcVd4GzhWNgWH1B22Ug8",
  "key34": "VoTn6F1EBRrUKtvuZ286DXbZ442UuGUuH1a6oX5EM1TFR24SSio3fp26VB3Xk5TgverrQ4ywJ3B9LT4gyNbQGHY",
  "key35": "4xNg4qGNnA7R5qfY9oBaosHAWbhLuc89hyV8jWH2L8UeMa2hj9CujrENN6cCmnJwxPg79hFBGY8b8kaMqjGKV3kk",
  "key36": "5hjjYJZVpMDN8pTpS9BSzsZSyKHaN4sh7sxxwBW11RbXtVPuEGXcpWwFGoEuzTBLbP1hvonSpPDCJydmmJJNfMk4",
  "key37": "2EM5uTtQ9irRW4QDvQKoZuuZm8Hn626qrh31wXNxWeS3Sx1b3PUxypGJKYPbMqFvcgArGNMuS5ZMy5PtW6bi7KjS",
  "key38": "66WKv2DaySyPUQFCXUYKpkBLEKZ8etGMS8Po7kxetAUFvREE6HVkNn1vFMhaN6faPpRgVeGSyVXyN4FCfniRRWQo",
  "key39": "5XkDRZvm87rUv9GQ8sMNTHQ8FHDVysUMzhMfACY1x53NospfWaDzboZrMG8H5p7E8TYn2dK9HBSRbGBDi5txYHbu"
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
