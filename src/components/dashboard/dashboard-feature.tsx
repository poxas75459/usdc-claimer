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
    "6B7DA4SPGuvVeqYQ3unaqNRVh8WBeRNpudfKme9qDdnRZ2UFeJc6SNB9Tr4a6aExdSsRkJm9tQoS1bo5vRroUKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fyJDvQWbuCPj6J75r8P6Kh3oJ8LgAVfwRjQGnQH49eiTXCbFrrozSbcPHJB5shjU7HD5aZ7ZQA4w34qiRpBUHuS",
  "key1": "2TQhegC4zRDqmk92t47AmDfNyopWY5XiD2S1GwFKh9DE4BhEENHWAcYTX3p6KVqMhxnHAQfATTMAi7RLdvuBe8MP",
  "key2": "EW1nqAAmuWper5fqAcws1xmzpJAs1pjJAEY4xNZcSK8YN9zNaPvkrAgkFdjRSkQdmAbcT7qs3qgJXGoKQR8SwLR",
  "key3": "5Js5QHFgPRtnJFq7mNAYVZ6APz8uDXWGmosvVAAj6viPhsHN2fLVtMdxqE51kCXDkfdq1xUbaHh4J3mA33CKPGpe",
  "key4": "59eRU1ZzJUBUFcRuaxocfShAbQR6QN3sEBjVCBffaxi3Rahyh6nsQP3Hbn1XQEhPfam8zwt51aBfsrjj7pGVNdGM",
  "key5": "3D8mPTZ6JqptFcPBYaZWoR7Tb6jvKzQWGE7BBF4FjSRV1MA9KNg1GiN8a9PUkM6xZEqVzW7roRhHam7DaQcxrnEf",
  "key6": "2EpDNQ2BRnNdy4SAiC7RJsw8cv1ndTP84jCGZAsNtQcPDqrAoJpfcQgen1Nztz1EuQ7Sh5tpXNBeA5AcnGp92B5X",
  "key7": "3zJvXXuGxgFVRHLRptVL5nyBFtkExAXCgZu7MCwA8icmr9AC8KfTSzo3zuo2uiwSfdVJhuk3CZ26xT8u1rB3EzLJ",
  "key8": "2GxN1QxJkRfUuRy9qvfMuAKHoh7KyTctKY1ugF2aZ1gNC6bSYD9KyKtemb8PjpM9nWPVSnSsfgBuQidaANdUCAoe",
  "key9": "42XuD6tnWHRBtncCCMmUTSmv7VeJukj9StKwHZtpp5zmjFRyv2kfsEwPxgwKahQJkhJs8xvURzVzusMZt17jUJyX",
  "key10": "2tNqf81XQUdQCZ4Jbkxbq11W3px4rWJP7aXnFQY6wqckDz5oFyC9xr3bkji7MsfUVEhqTvZLDrX6iQS12Szszf23",
  "key11": "eVJwZwvDcPh4QhejPGwGYZi7yxVjPLP8x1r6uwYPgYV6pcFW7EWAs4uamvFuyCrKgzE7XegHUdnnBG3Rp8mPsQj",
  "key12": "4e8f4yiMaNF7zCtNF5Todj5Bt88gQpGFe1VAb9LyQ6YsF5zSkgUKGp72fpRQV9oQ1EsPZJtiqzPzc8NQ3VM1s8Dd",
  "key13": "3MoGZ39hVT1TmbyHBWBJSLmp5HftHiwPKgYasr2s9Vq1pUQZpNzFUxyRWAqXNzDMEViqqnm6n3fjBWWFUQ4xVfC5",
  "key14": "4kZqqwegkRqxfPZP7o8q1T2v8WXa2VcLEkUnfreZCxQUhgpi2emvBhqhUJHUrydEGSnPHsnsJW8twhtiZggWhoB5",
  "key15": "2AzDM47DA4DJbGFT5rUxLYchpuhioBaa6UaAyrCB3aYFzFBFUKZhSFPD1arYutn5Xtk2FDDQ5ebedYJ3tkA9Xqbr",
  "key16": "uC4q1syY6rEbujyfEYj7ejdwTwo729tpivkbgvgL26Wz8epmWTNawncQXWQquQeWFp1fXoxVRgzB6ix2rX1txSA",
  "key17": "4BsxXhry7onaibVjaf8GpXVK1fwCjK3dccGVm7Jx1t1HiCN9kesqKGq93buYjM8asSoFTUpncLWCaehSzZjiD88M",
  "key18": "eF9g1g7dXEyQyuwiQPdSQLjp7gaJccVRnz2XuUdCN317Zj9utkmqk7EeeJXySseRwavdGUzWYfR1myuxLQXkce6",
  "key19": "r6gdr252M3eRs8KL9hbErknC5uqFXaw1sfkUHsMDY7gbyG14PBQZPN5RT8kE9sCvXHncDyPKpMwrB1vov62uUXh",
  "key20": "5hhbzNoKK1DXVBiphB2kCH8f9SSWGpEjJ3DWnnUxL4GRf2791aEjGYAxERcMvJefTSyrKuuYXaFd45mToBpdSCbD",
  "key21": "2kVLHWGwPK696LKZYWV3KR4nBrxZ9CgodYxTeU6zGtN7B2f3w3wQSB8KNEAVUQMomghAs5LnA5HqX5S4U1otVCgR",
  "key22": "o5B2G9dHLcndg8wbDo6E8kvNmyTiwWV2frcCShg5F9DeUd7qD73B2stS3Jgid7ubvWJz1zFAJ2iKPJLVTjmAJ3Q",
  "key23": "6AbpmeZ3q5M2Xaeps9UqtFZkvuawRr9w3PsQPrqL5TqBahX3fSX5YizFhHMYXfvamYgT9xYx7qJ32S7kVca1sM2",
  "key24": "4DRC4bCGQaLRdRdq2PHTY7NkKFzfjXeGCQmakDjh7fpdfqjPYapvHiLuNx3NmWu3HxsywxDSZVXrPwWfmfCK8Jhe",
  "key25": "3pN66PkimWELtVsx7x2BUmH9t8ipxewD7tFmfE4aXRA6mN44FRLp8k8tVidofAMeWyjkvpFUnBGnmFjnpoiwurbA",
  "key26": "Q7Uhp8biZ5a3mF9HfVHAkfrcSjguzCgXtD7ZKoRrrXMNxPxxDTNWWYqVjFDNhin6aNUK29HzYCuzLpRpXpr3Ycb",
  "key27": "2mLtzKRCtARV96fBeef1QipTrJhVK4c47Dv6u2uaYkhhNPGSpgFApg9H2NQLRpLjr7DnJSc1zskRn2nt3PKyu2aL",
  "key28": "3SEX9STWhXBJXBwWykUAAyNAPE4QK6jr9cccitvwvmTUzayEoJHYHHyTSFy9Nib8ZdAuCgsiYzVfXnrZAY5yGykq",
  "key29": "3885PFW4kVrauoiHQxyCtAX8KmhUDNYvPwk7ZDpx8ZpNEDQmgDnCoTiYsTc4vzxxEUH5mNyurEiUof6XooW8zWyB",
  "key30": "5Kqs4H8UTNqUZoMGMPEcTUyTyV6RdVQn3TzNKto6ybMEEz3jsxzsyWRc4HAFgxmPiUSTRK8Jdj5SHDG17bSGrmqR",
  "key31": "65AmZyMYZGhv9ryZXSbZFonXGgt9AG9LhH1f9b5sRW3ZdP5ZfQM8rvpTLMch8nFZ4QRwd738pvMZqQkV2npCYkrm",
  "key32": "2ZomPymmEGFDChMZvjdJ3r84mLsnBEjvU3AZUfqVA7YK4NAkLJhSkaWyHobrzuXWYKE7uN4Go9TtSpKyTMYgE8YY",
  "key33": "UBR7XDTXkUUAP6VShexiQ7iRJZUza6NRU6aZXSWWvtKFvndJtv6cgtSJoY1Tnc2KNCAdmsjDgN3szMh4RqUY9sW",
  "key34": "4YLwP2C4okkVx213NaKEshDH4PWFTRWj3JYkirqyXr353jLuTxhu1wC1NyCPHGb8ayFwPixhqBsNWagAqDd3uc2r",
  "key35": "2Tw3brHwr3EHjR12LXu3LFXaALvM2i6qTDUd9dofRNwGek1549p5YLQ7idBQUEXMg8ozAxcZ52kB8jd6MsqYGMYC",
  "key36": "QCnUAWCymWmoKsidtwSk8GVobJukqQ83ex8cGt9tHkNuh424XfRmaMEgWMHNrXFJk69s3gmo3ixmhtdgZy3D7WH",
  "key37": "5ehspFucWU2GHQ8UJB2FHTZGYz8gYLLBqkzJQzC41mnU1FAckJ3GVRAEH9w9DZv1EpVWNQTaY9jwV3k68J8fYavj"
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
