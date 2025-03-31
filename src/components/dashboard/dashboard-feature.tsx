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
    "dJpBfAwZYTb7KgrNr1fKvH8HwSS2BSeza5BpiBVDkbeLo6YJNmPnuMkJ5UpAt9TZurGqAPKdC1yhWzZ1eRVwNSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axVwdw97VtdTNMKsoz4pe9ymo316jEgxwgVZDM11FKPCsvgDEJWim84mUuwkfyBaJzr41ULGaLVdC87tMWCcWH7",
  "key1": "5ST51Ei1nR2PfUvSsZZwgNvRtodSYPF4qmUq4qcBj4ryY3ewjy41ZgWSV9gWggJbZQM7TJGAbyHNcWKKymbs2oN",
  "key2": "bzcWBSVtyvpPYzSWcNcnKCdicUr1Gp4tjdx6m8KjdRYYpPbpgdguPsKfxxdGtKbkrgLMys61XQ5jPmRazCG4zvE",
  "key3": "WFHCnhJfuMxzALXAPyHqDYGqdopbuCWHkHQ2zks23Jx6rAL9GVeyHrENYAyrVczGzZiHg5go8f4yGSTVR3ufYXs",
  "key4": "58U85VCd1iriMa9ufaGKVbrnZJEHzEgBEo4V1Kr7XfJvgtYeMPJFtXrENFtQ8yzeKfBX33gq1qmg1yNq5zpnUHJj",
  "key5": "3joGX63xv2rCodjxQfP4P2zrqBBqgvnRw8eyeVr7FFdVbM2Z34xENxAY4nC3YPmD34ax5RyMFG1J3fXHpPUd9bHc",
  "key6": "4uUL2HAFS42JLwjt29oDu9Cja4i6BNGnLK8nzDnqWszwCgqfpEP5HSkpAS6YZs7DKNzwbnVhaoAhr3mDcrXJJBdq",
  "key7": "45jwA3a44N2BDkVtZZXWR1UJ2CLVByhrtXbXPtcSNJH3bRMs5Q95C3d4uLY9ojkNCbhKD3A1H3hUfiEpyTTGK6sg",
  "key8": "3oRBwec6EsJcPDoXXnkiVc937v1doMB6ZcjipTXLM7aKgfXhLECR5u9g66bJsiG2qsvVMqAsg2mzW4ZtDeD9qUAQ",
  "key9": "2Lc2Qg2B9D7tApZGkH12yEaMZKW5YxdBbGszYbiTnHGur8a7FAMMKkF1BV1CoTuGS3PFVYBVNK5fS3Mm9Qj6RZUt",
  "key10": "3sQFV6MDq9iVnUu51WzZq1fkdbsu4i35JHV2rUT6jiGLtKn8snr6fSWd4mN3aE6SaPT8i3JKN8qrvNSe5cx8xqny",
  "key11": "3DraZ4uoYatGXxN9utXohwZMgqqhSh1pkViEoMpnvy5wmgtmXZrHrcJYaHUAatP4qWbdfxtYh7zDQtD4bGaQ116K",
  "key12": "5sVGme3JVCZv2nPfKFauhpy5jQYv91W8QwQuEvB3Gkv2rvS2RVjdy26vHNJ27vKoUbyHDaWSavubmThS7qP1QrDs",
  "key13": "4iFYuthKNdtPVr7JTcK1gAVQNZbz4qNNJ8zr3oYd5SysEKejjCcehU4wf4HDJ5fF64ALGbk6yDWomRjauEZSF1iS",
  "key14": "4zDPY48HYY3AGM6WJrfCF9rwzq27Poo1pyRpTebGZ2GAs23t9A34Edck8dqCMM6wUiPNbqBLUyxXC55Ag7ude3LL",
  "key15": "2JfsT7iRGPFkv6Y1cw1mUfqcjckapm5zqzM3NSJhzzo78mFwSbhgbmZuSX4Npqhqvzvr9TtbaDVyorie23Uhrv6q",
  "key16": "4PhdEyJdSaU9TYADYaTmmawjJUCsPCprPydBBSELRWddwyej2VKiDhXdfVHhQTECrisUZo4uQYhLZwYBfsqdxz6z",
  "key17": "2U4H7vfMYvjEysuuC22v5JpaHBTjeCj6zeYa9hXNbuPpoJhABbunFHjaFKT49feEA7MhbiTe87AcsoLimgxReUYc",
  "key18": "5VY4Tnuc2V1DiSHcJGuAhU9Fp7Wj8eM9ZwnhdYyNVoffSPy6qdhs1oVipJ1bbvCQsBoTwry6FmgZyydadGtrXLZd",
  "key19": "4soFLLcSn5RLBRcG5WmCHP4SQLeBncSCuZ5hKk7kUUqP2gAmVq6PMamnSwcG5wb7wZ5nU2VYtpkxkL24eVcntors",
  "key20": "285Nt2WqAQPCXgX8zfwf1hwE1NDi9P2xMLyTHKa2ngSqXaMLxM2FyzhLLvbUnYKEJejc3mtYWXnptUJw9XZ8o4ad",
  "key21": "eceiVK72fgN72FvtMk1HFGXPQyBkZbtfArQ5mRmuGrsyGUbXiqqZwmJQRQEpXfdH4jDzCMtdLQBfHoUAGtjVXH3",
  "key22": "33wyZD7zmtFhzRjKAb9gF97y7Mpv9QNwNUCSfzXtvxidupaXyY6vLp7ngwZUiYNeJefKjnwPBoBh1mesfa3h2VKi",
  "key23": "4UFebvYi9TVG14Xzs1Awb1jp7y2DrzHruqQ39ysYNR4x1G5YKXCfD1mnvSx5rjbEEXwQuyd9wtrG1FTnPAi4NHBA",
  "key24": "58HyGfoRQEN8ewCwhUWrXwSjChYbogRx8qLtkGoawLxWSAiwRRkwcjqLgF12JCuWjtdNb6WzRvs55N1zCv1u1Tfw",
  "key25": "2MFiFCNBXgREFoiMLAshaHCgmSsuyj2xnZHUhYv9PX8Ks7LxraWw5U9Bh3FW5YsDpuDFTGs3Ct2kqPsinjHpU6XB",
  "key26": "GZWdjDDDJUcWH2DGRUushLwEoFdXgkcNLy5ZzzAjokGnepnj6Qgq8KojADKUzzjMkyRb2EPYFe4U8gL3R4Xscb7",
  "key27": "4mBqWCFi2knPXKjG9oFvShhCjYphPWGtuTtHsjm4grYbDJCi9fkRKbmciy5VnBuDHwgaEfnPtvWdE1nDrcNWF449",
  "key28": "5ufmsqVDBsU9hGEgbcnghk3Nkh6kApvCuWcFFcDvEAWrNw97QgBZfWuEPEQQGGTeHWd2ScASk9LupwVfhPn6eCft",
  "key29": "4XQbteEdrx5ShNNFLBwTKUt84LPzVFVG7TxCzPjRq8Y9gSdeBEMiu9DPHuJHBTC31qDU7NmCJ1RTnVyx6TNtLrtE",
  "key30": "2jf5RrhW6fEkGeLxWpG2Fe5cMeS5cqJgtTRo8WiHC6HvXmVazvS1ZN9Divqjc1vmThrPMj7n6gL71WmFdgRxc9ZU"
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
