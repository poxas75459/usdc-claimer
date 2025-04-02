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
    "2y6fB2NtHZcLt8FCQCQ5CiSQV4w5QaExrPaBdP8JDpKo37ES9gxhwbDzo16zFTXoWAWgnm5V8LJh8LRQGtX5KVAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhLDV6urTahaJmMcG4C9PxmEJ5eVZ45Yvmi2XMAnFcRcCfBBjmeL34nEjzTFDUC3J8NrPAb9JRT8CrSSgtQgFqg",
  "key1": "3cBRb1dZ62saf33UdRa1NzoueTJVe6hHg7UyRPqFhixmuro744gcZ1xrBPVDRQuy74GvJiTx1R91HxoWHL1D2uky",
  "key2": "55AwE5P6f4eNH89BhE6ejPCTXggopMyUn1WzR6CWPr38PHC4NC242m5yBGDA2692UTPeFoK8TdKFSvmE5o3H473B",
  "key3": "2ZDPMDArMMXxZxbp2Cji2i1zVhMugxthfMYyjS8gTts1idiHnesgiapbm9M3bH9s2uE3Uq3mmKySKHsKT5CaXyEU",
  "key4": "4pgrw4k9Z8RMoYgYaiz4baS7rKwCVEvLvWth9phiHJZZstM9jmnNesAR28T5EvGd98hgk3eiWEbCZ3EqwRDiUvp5",
  "key5": "35tX96DK8YKw6BhcVmdE21GPEJwpTHFGajmcFYgtSvcQQgDuynhRJ44BBYLfRWmFjoJoXGYQGv1aomMWWv8HADVh",
  "key6": "2EJhc5wSvDoCYCF1G1f8vzacBkZUg31AgEnCAg7xcDYSJjXnD2n2Rf8KredhiuktWeAanDeRVYY6Zb4jkdDNMZxA",
  "key7": "4ssdKsXffG1qXFcE9NtzEYttEcXG27z3w74FqC9EmKr9LgYMGBnAHUr1L85EVWVKLPefYksJhCSKEfoNwa6VZGnP",
  "key8": "5TMqS75iqWR7YTHYyQJkSkcgYD7ogn3vRRUNSehyLewUGeccWBT9YqPEkf1LAVDREFgtnVZQuPKNMYd7taDBmeRR",
  "key9": "5XDeorkQ3xhjDCnsSWTSaH5kTro6RwWNzoRQ8fyLZJs4Ts6jhpch4hgg6Rikn2B9SYSY9imYFMJP48U1EQLAR5VH",
  "key10": "5mqATGXPT3yUnLchX97JdvysrdRqRuQUFep1co8cJCqcNBx9neN2bEyN4mhTyMq94mrDqg5LAJo51TrKu37tEkpj",
  "key11": "4d3dVFV3EcDK4DVpH5vGhZPt2SEB3ZE6BE5DLLPdB69DMrwb1EbGw9Q2uE97ehmRREiovrSQGUBnQdKbWcJSSUrS",
  "key12": "2ogkJipWwuVK5XXkCi9GM3aSaXXwdePBmmsHCBspoAytTXLa1GfbSCR9qYLtP7oSBDyC9PsZ2oz9iPVv67NPdjn9",
  "key13": "4isnE4N5tPdDtFiUjNABj4qHt7mTfo8ZCKqAwd5FJx7ziUYeD9DheeNKfZ1VBmoJPsYVoiCRTQa1iKBYEZdYW2CF",
  "key14": "3ja7yt4iQxKJzx5uM5H9QdVta1vrvfzs9meQu3sK17BuznHUhWrYFQdNcza4WDfe93gfoXuNdB7AqVSjA15htAnC",
  "key15": "2BLVrW25S4xgLUbCJBVQDgiSapy7n7qkNT4pvxEfwCDgkV6cXVdDgXFCfkavN5aNuLJrGinbzqc7pk4oBsTQBYeg",
  "key16": "wF1gieEJWDfEpiaKyET3M7EvWtgj72qKFp2bnmh6v8efM1s8o6917XwVmAA5RrCXDDpZ9Ljs9kHspZVPFA5qApb",
  "key17": "5kP5BfWEWwG3316qYQrRoZHgedEpz1LqupWavZEofR8iLVVFHuzVN2AhGghqEZ5AirTyucSMYb1yH7dyx66PC7ib",
  "key18": "5kEZqFxbdrSZ4skwGy9BY1CEiuvf678zpnpMNn7MMUDbjoduU6Aabo85W4DLoYFgC3zVcVSz7wbti4f1jkGfbtT",
  "key19": "MvokCqEni2ZTv1T5gJMQ8P6Ah9Bm19ztEKUXrGB4LrbWeg4HZC4R6smhPKvffeVCYbWUxg6BfQazz17UuX2a6iM",
  "key20": "4ZTjSua5cqvr3YLaoSiXUyxKe82PWfxkss28ZTttqfR8j46tsU3DZCpVRsdNtS2UXdNyL4Vo8BnPkY9xXHUhrk7Z",
  "key21": "4RqAi4F7UKPU8GmgcM7RKduk4uaRn6XTFzuiFQhUffkSSGqGovoUFNqU4dVwErA6dfxtzv8jYYkTcfmjrRQoBAdc",
  "key22": "4bzuPF3aJY5Scm1hLD3re66Rw4hycjRVTELrQ2BVNBpLteD66q8AmTqhQLMNJcH9vASDdc95EQAK8gsYeJCoPZ75",
  "key23": "5dU2f1j2PRygz2qmR2dXnCZr1d5JXPNZuwoygxspBEF59TV8hAabAwyfA4cp9HcnvmhQSxwdms61u5DqkUyUAwAC",
  "key24": "4N9oDahELCC2s2LWZKanrMAo49yiyGXhFYi16mdaHQxAwUrD4R7WkBLTrpnygeSGnvqZrR7kHUSCC4gmjs4emZJa",
  "key25": "5U1A81DMRmhgn2z9vpAEkWRGze6puNWgWMpjwYWkKtA7cR2DU6gN2Yh6bcDSjf4cpKRqWSUnqTfC7Q8gMNhetrv",
  "key26": "384uvsq7n3DKxehchmrtwkddrS32gT3qoxi3ZE59tAGFxypLmvqHX3aemxa8wR4RfrpMXJDbwZY82BKQA2Go9jZ2",
  "key27": "5CQdcTEGhXNT7bMpo7rvaeunkuQdRcYKqvQsN1ohrKV7PPeLz6or5gKqtWDNDcRa6h7pmmpDjoTbKcEWGBMDYjCt",
  "key28": "CPXvRzciehTpFKvQWHGvT4BAVXUd515DNWGXcJWH2MuYwtcQGoyySg6b2LL4mnijciAJY8kwumqAFVRQpjHFpgn",
  "key29": "wPndzXp6p6Gt3kYgfsYuWYaGf3HgRfS1vBefv5kT9KH3F5ATRgYxYnh18j41xAmh6i7dBFDv2vhTLT9oF8qNpnM",
  "key30": "3av9JeHoFDhmaxhU1iBRe54nCzRwpTjUyeZ6FF9av211RfwBPHLm7y8AupjdW1inuGxXehmXXTegs5sie5Pr3fHo",
  "key31": "4vhWQo1oQreJ6h69uM6cm6hVoAicvYYQJHLtwVxgV7SK1A7KMBo8tzM1v8vrMk7AA8hYgt5JmFMuPfRBn1LsTLxB",
  "key32": "57c2ztj2mhVMgUCvnMxEBoJnJAqhYi3eqsdqfphvrE83Ma7Nmo9CjzorfXfFLnKXPaw8F5WX3WKxP1m7AK3UWuMz",
  "key33": "sJgKvuRNEzGg9dFTZn47AUM34MdxBMAiycdK1Qzeqw4qp9XviLNUcr1P9grGSGVLMwYSfWHsw5ZNfuRpk7wQ2Nt",
  "key34": "4ZnvDHzbnAEpPY9RoodoVYtAjf7squjf1c2YtxcnNZjgsgVULyxKqpuNPZ2UD5873M1ScQNjyKxoDy1ixcPQ5rYs",
  "key35": "4TpkBZ1u6hwLiqewUE1PMx2KHJn5nYnhvXza4tWVhBHhLpGJAmyqSrnbuBZvAV8ZdX2q3nFyi7bzghGUcDX6JvfK",
  "key36": "4nJKsqcyR2BMdz13j4FQznzKBHCj9WpPwDUn4Ls3JMr4LWu7spGrbEd8NPFbtP3o8ccezxHCaJJqKkBTFYahNZ6x",
  "key37": "pVYk8gKmbpMpH2GzxP6F3e9UcBygACvfkU4PZ2h3ZR5pb5KkSoFz6kWw7wRNF7QjLKx69WhmE4Lgm1zW8zZTtvw",
  "key38": "3G1Yx6k25WYVsvM7V9Ug57AXzDpNz1LXqSGwZqcJqXmXL57FAL3yVwku1xxn9o6PknuZt5TRbLdz9UyEbvVNC4Sj"
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
