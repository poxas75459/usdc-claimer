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
    "5HdoxJwX2nDmXBgPv1XhYZ4RSBSQ6bLfUCrUhs5po6f4VNU1KLZTyEkzRc2PkSwYT24DCd4s32A6YvMSeGgjocPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkLWxohbCCQUqAVtWtEL8xGrdG2EWkktS6A1HVm6ofdX1vYmouM36Br3oWztLh5AvcCRfJjmVeYysUpQHxLF2AC",
  "key1": "5swVayXQScDDvrTUnvsfw1FqjT4cQQpkGKEG722NLDy5rvy72ESKbd7Nb3neTMYpoDgXibipMjarnLyZtuDB9Bqq",
  "key2": "tY9H2h1CdaRELrTHyDB23Jcf93oBz5FiJwwNoGAnmhEMER82mBDV7LF3iNvcidpdGoyugPHfqUKfC18yG4jLxHp",
  "key3": "5Rqxw9inpGoLABLeuRjFU8NE7s4fDnMviH9YiBJYoE34z9c4kvQPH2fzeWiqDp5a7Wccsoe7NsM25Vwrb3HWnwRQ",
  "key4": "y71SMVLNAXNJ9ZB3GZrEexgdWq1MKs3FtFtPV4VNTW4crEuz2xozGPtAczj95isntXH4QUbax4ftdpxm5e1zZem",
  "key5": "2P5WHdozqPREuRZX9YimUPb98BBRt166Rk3sER1AnBuBsXkS7QyB1UR68U2vH146jDSxrWzQA5KjHxUd5ebtADYe",
  "key6": "2qhRia6tneMb9MZhVL2Nh4LBM4zAZBq8DuCSiYtYkcUS2TEtRhtmi9yNhwufT4GqhcDyjjdsdq9qkr53visLUfvb",
  "key7": "3dVTAa6dTbgjUWRxgPzL2VfqjFidxACW9JZY1Z9XGRFK71UiKNrZWapwe591neXvWnwr5pthMN1sNXLVxVmBst3W",
  "key8": "5FUnHuXv7EVLbEJQzAMdmB7JsmFhUEgUYActkfEbSw3y7F3rP68Z6GxZNMDgu3jo29x1vqTEXapTQGV6ckr2mc4N",
  "key9": "3zZuQnxY9XABPj1DPKnndZnwBmK389aawK6tsqAQczuU9SXrVeL1fDiZeqYEfcy26Pg4j1TrSZeR7upynwgG4w4r",
  "key10": "4a7di1EXXRVV9GaiNYRyRdbFPgX4oAUzgpyN9PxtC1qRigsZNE2EkCUmaXZhveVnoMcx1AiGFj2CqQfMyLxN8WAA",
  "key11": "2AcXtAujSD2PKgNTKf63eCoZHdpXRzNZABw64G1kwaYuZkmEkDPbQDmcFStWMQGWjAB8XZnCsYm6DbJYn11HTd4D",
  "key12": "51BKvVYTmhrE9z8k2Eeu4QNC2kFWC5Skfh8rUwMM7FoCfHUMrBV98YKZ6Ldop6rnK2myZtebuRjC5EQHg6Jc2Yrj",
  "key13": "5MZFJfMcN8wSTcmzq6oM9Q6vktUxkkxWeCvwevRU6VxfV3tEPHjhmr6nGfPsUUY8nZRpzGcKvmjjkTEk3YLJuaE6",
  "key14": "3wwdnxcuSKL8VP1xywDXUKwZW2pohkJ5rTmhx7VYZm5YvwChJCRrCrLUEq7wLQ5FzszyZQmaa8LWW2FqAMwk4f98",
  "key15": "4bM4PMZq58SwinQDq4vJsLwnD3KomJW7zHD5to7xDQtYYFTFdoyUzVsnS5tdrWrLuicVyaLGHWdzPTJKr6YRLcsc",
  "key16": "4ZtQtGr8GdVEapV3gGGMeqFzkAPAAe51tQUVez7MhRDMGqXonSdeNExY5VLuS6CFAYhY6E7P6PzBJ8RxKxRk3Dcy",
  "key17": "5hbrQAh7jJMmQKdYoEHT8sHXHxhEXe6x5BqJDVMNaQkWxRqEATLsmNwM3j6UXMz4P2nnst44AzEfKSfKRHJgdxUH",
  "key18": "2wmpmmeeMExDnw9iWqiKDG9Z25HYkqFFpmAtRNejniKHCZnpVfdcLJzxG8dPmw1ne3mhLJQvCKrStuk7ZHBH1Zaq",
  "key19": "kDA5Mp7Ys4UCMMUeMQXfk3nV9aXdmWwJcBNVWEEATvT72WqkNVYESDZUpq5G8tpRufJbRxpsY1mDVNpashprSqV",
  "key20": "46p6eVUmAqBsKnCuuxuQDzDDZzMS44xFVqqcysdBjUHkshbb9acx9ToFnVo6eNX8z26P8iYwhsaS4PUeDGGsgUig",
  "key21": "4vnvUfmerTvbVDN3wWFQMQySAcFTzLDjkXZWTs7udaZUtkr9ac876vJssudZohga6pPHy4JrM3VCkbsSgEQn2STw",
  "key22": "hx3wD4TigPywz4jKS4idEXTU6FJg5YWx3VvQ1nbnJHUzxTA5k7xFeMeENNmAZgc6g1ZqNG57xR5HckfjYx3sLRf",
  "key23": "3bpXtSFZk2Zk4Po1voJh1Z9JZqnWLDFBtuP9ewAbXVkTuuYW1hd3y8cqY2L13sXLeoqcEH9BCvekU1y2xw8QYQmg",
  "key24": "3r2Nm6kWUGDMaNVKXm9WRTJwXDhThdkGmZ8huMYWWTjjh7iHmN535W2sWGPsiZhWnbVjX2GFggdmXJsw942ZoD3s",
  "key25": "3nUZ7ViEdq9QYpZbmaC2k3Rr94LDV6KtD3A1bM6Pi6xvuBFEgxUzg52Z2PFkZhKamScUMq7akpRcNWf8g8HJ1xsg",
  "key26": "4JZUFTiSsxpCNkFF4EJYhmx5tFzpm9c4uxrUJiJwMknwbmqKrWxhp2wqKZQRYAp1ToDUfp4otHGDJeKhBCXFqVE1",
  "key27": "2yqL9ywsPgw9YEtUAYY2cW7x2RmWCzKJzXBSo66JRZPiARgGVG8fMrRDn2H1K5iL8BHeSMEQ14rBGZ993Lg2tGDK",
  "key28": "5QbDoEz2RRiVQr2mawLcpB4JzzGCHK38wPiCXp7acpRDpuzXpqdmh19PPkc8SSuc5xE59JGYmC8G5M2MCPghPr1Z"
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
