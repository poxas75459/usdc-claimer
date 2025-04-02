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
    "4NxhKpY6vrpjGUbXNUy5LiWPC5bnfoMjWnyxd8xHkZBE7AW8PeHgnY8aF6PTJFxndobF5CFQ3NmjWDpTYqo4kxzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjmRKvyXokqypTX3AXt7RowpjiKVquVF6dNgjmGJPhCVEh7aM1r3Z3Y4yPhQFXG7UnoJhJF2gWsQfbypFwqPQB",
  "key1": "2yFpRMUHqFTVacstyCKFT9DxkK9nkVfJ1jtxaQYkk2TEN3dAGQxYhsQyqYtbGdhXCEcZWZfY6G8ugLFZr2VB7o3L",
  "key2": "4ekppRgyU3UcokaXGPiD4tm945kz1wBKn1asSGfTCA7c48KfoD8W2QunvKYGdPZson8aANxcYEad4N6Q8GN4Yrfv",
  "key3": "n8otyPvHHdkf2VwzbUrBdxmF9wQh5NNbk7JhaCbFh1mST4TsGzNn8LgjfJcsERgeMSh25fKKv3KxMuRGGFVcrx4",
  "key4": "63kkAv9o1Fv6ZmoYJyBKoY5qbBcporJMjg6qHVYB5C8X8Z4QjVS3djTHjw9r4HkAduugujus9JsxHc63LJwsLeF9",
  "key5": "3cHA2EogT66W5WiBcVBTDhqu6cBXoHouCYDvZfuZ7YKTa6VW9WTW5yBpDm6qa7v2ZEirp2rFKSQjbBU8EQPKYjEm",
  "key6": "2HoNDBKWTYBUaJhGX4a5jCmZkMrQJ1EhZx6PLTh1Cr5FSxENjSFE1pzZUBhyPkMY2ew7FWMM1cpBAJW5sjNaYv6N",
  "key7": "5Uu7RfPN4WiEHKVBvTbSRaduXPiPDZdA3iC14ZAmGn7gXVzU6Y26dgE95U9Y2DCWJhY8UEjQKmtwqGVbqsTQJzMp",
  "key8": "5YxyqLNXCquG8oTY6vqLVJLxLgogaAQVyBKYcFoPg8XkcSa9q3dX6VSA2ScCWzqsuhGAsac7G9QXxKbf7WoxcgyR",
  "key9": "UWKwVMRp6QbUvN1u1pfVT9qnfjv1UJ3joYXCCN8Pgps7DsGMe3wkiXMTkzyVbQkwWMZE3ZBCTY5CuYGRku8hmmC",
  "key10": "iCHQZvS4f2defVFqmwie5nRQ3NZ7GH9vQGxrRBJobFxU4WsnvJvP3iUuAy7t2BpTjNX8B3RNaTJxBLfPuSjE1WS",
  "key11": "XrJvtVmcmt4qpAa6CzvCZniCRcvGNkhrqvWkvh3yN2deppS9Rp5fFNFMK3k19wH3ksqq3xABem8eBojgwrq2SJy",
  "key12": "25Asd142aidSPHGxhofMfSMototAsP2QLcneWm9hPFwXc4xaKH3u4AuHrB9KQAcJE8MLtV8KmWJ4u6fQ7JsN3hJL",
  "key13": "2JsD2ecZAckfnFCzYXPnFx6D2vz8usaQmug3NqRsHCpgPHFPKMTgM8gk6evneQifW9G42u23pnz9dHjAUU1J1Aup",
  "key14": "G4Fi7dB2Uhx4rAeytXfyYbfQGt9Gf86LkqgVBfXKiAPnhzdbGAZ8W2ZAn3LjaRpLgkxs6sptrfYrrFYLHLvkfNc",
  "key15": "4ypnBahjrUzpE2Ni76kiz8Jp3pqFMXS9kxAWyVMGF9fz9fDzfwH4tbVQEEK3yGhEUrr3k3EwrBgpRWQEekymhCZt",
  "key16": "4sfwookpQX6pcLhPVwmbJZ2m85dtqZctt8FzNiFE5JwZa4pvr2tRK3wcUgP43Fr88DfHtS9AAvuKGH8ktkomUeTj",
  "key17": "21XrU7wZqq7CoujJiF5g4L9MuQkirtsGDSkKBi3zYJRu8fEC3MrU1mfAN3kKfmcoUo7GmfhEKwHmEcHDL9u44e3X",
  "key18": "2GZxDzC1awLRyzAp1gt7FfAsvS3QEF4kVdKPz1aAemZL6qRu3d3tXY3bJ3NDV6pAWCRjqMHA2TTfVgr2x34EiCnA",
  "key19": "3ihXeq6sdkZYsEGtrTiJLpoKYkRxrZxLenWbApqokK32uNRVC11HYa867RoTuynViwcDDGi468MMMz1v94qHgueT",
  "key20": "xxuaF65MhkLpQfJXiDxJ6i4FGs2mCZAxdZLqgW8x6ZEGWkBSgo9hYZ75uZ2DC8Vde44gVGjrsfTgJDUBfXicqmc",
  "key21": "3y1agySYWVXe4LYxeFVLxxWd8ivx29y6XQotCy6qu3cs1LjQY9Uig9efQmHiX4eHnajcgpPtAFCZ8ntcy4NJKTLd",
  "key22": "dWhNRFSdwWu24kgzSsiNcU9CpcKS38tqg5KXEpFf3dq2CD4RHC4wQVTrCDsKZsy68ghFkknzSTyKoxXiczFT2hC",
  "key23": "2pbUaL68nfuaDMWCYMPmtRkWpyGcr4ZCE4z3WTBvnqJHTuvQm64LD98qYd7kR5XNb19Wm2tGRKtZpTLtywHZogoL",
  "key24": "5de4WRaLkjyo9JYsdymSD3zwZkCqZRJaaETEjPwm7MKy2qa8Basi4DGB1WHk3UJtW8C42s9ijLC8vwvEWkB7Nydj",
  "key25": "5s6W2GGSzNapiHzfWSw43pG2ogb3piVfYMuEVgYGjL7b3AUkVnzJ4g68L8tvJiDuAaTCNbTLytNPu6cHeFGaqe5S",
  "key26": "WQsgURNdnYsq9nXJBtXPNPwVzNaeRfBcWviXmK9T28r8RbWCtCLgCPKfDZWDXpPb4GCuxtwz9zW1HGzQT3cGrBA",
  "key27": "3LfombspizoWnEUR5xHYnQpeh6942sniBdyqYopE7277WCAYwWn1UgSeg82ziYJy9bncZy1KyQTZV7WosLeUTLkB",
  "key28": "52eZzUbZ32MDuDyDefu231wNeKGzsT8mEMS1ZVXN77oXNiEbszn3yiQgk1ZA3gmjh11UA5UJi7VNwst9HeEdkDVU"
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
