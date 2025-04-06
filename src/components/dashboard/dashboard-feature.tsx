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
    "4UP573HdRM1Acp7Z4Un4ADUHeifb1h5cnuiXoZRBvCriSQaWSugQqwofbrgiASN5FGcSBxvKRDNdzaasDYA1nBH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dn2hUwTbF8tVJyjbQehKJy4rAM5mWeFQ9wYqXxmtPbBp2L3TvJGERz9u816C3kZW3zXamJzhUBGogBo7hfAADhN",
  "key1": "2SbdaG5DCJQNc5kD87w4pJeT8xCjdMhJA2xkzCF6435yVfxWnQhhn8gFeAT8z2YyVmcgFi1H8PbFPCUBVZe1YDm7",
  "key2": "42LR4iARYgMFqHSCHucmqsqP4qWM3KhiqBKPo3FEnvGCJy2JKPX5iKXyCxmkTqTmWM2FyoMmNE2dDhVHUYm4BP6U",
  "key3": "4QzzAMRSRm2NtmDRMpNTWiwUCcPUL43Jk2JUQKxN8kromeWTeRfYH6rMVezbbBZ3DXRnK535vFknYpvsRinheARw",
  "key4": "qUXACZZygcG7DL77h6V8FVYFt3qZEaybwEz9dCVFVGHsWgx1rzcHzYRS3oUeMrLs2MoSRdcsnsSiZKZ1qcccVR6",
  "key5": "37VQgN6HPTNUDWhRv8h7GttuQTTQYtwhfUvvVKmUFDNLeNtr6HCkZXC8LW5tqabaoxdAetBqsKB1ch4BwtGKWLZK",
  "key6": "EQRbdo85csCXLBV6shcLuSxM8eu9Mo8NFVTh3CqsxAmoFCuJRxk5rdfZhsNA91mFtFaNatcsQ6Wen7DM4tHMt3A",
  "key7": "67bPJZ2xiLdTnCfkPCMtbtmCJhguiqrXreUdPhyjDZQmJzhkG8iR4Mcg94AaKrhw7nbPc2YFo7VQCLDXpbY5v69S",
  "key8": "XjX8GEaJEK8ZZ4LYwQh411ev6RxeiZeaYfBxk85pqU53597n8KW6NqGwyLS7qf1jbsncuKMKJos466WSaqjjbmT",
  "key9": "2hUAuBcpgJxybuSHhhR6ZUd1iZwt46Ueoy6PyK8pLLmoVSszpWmwqSeb4RfkGx1ofPJmQr5Xuc4jx57QqoxveZVF",
  "key10": "d8E4HYVSrwT6rzqmVjwTgi1svS4P37XihYQCgaqySeDPRmw2tYNrbZbUZP4ai9G5jgT6g2KA9HHtyjS3NRC52xe",
  "key11": "4B1yRhCzqmPQocGJYUAqLtoWPPQiq9gja3LvXsf1Tu8qKfvDXVhaNRyRLUxhecT1WVPtaRvkrNMBUawwMFK9gTyd",
  "key12": "5oNnwAYCgL91iSipH9Zd8Xcb2QTrwruKC3tQKG8ySDQtYbCr4sk3sALnAm6BmmfK7uyDkH7nzgoQkF2r6mCDDm1Q",
  "key13": "51kGHHtvNrfSMAg4uNbRZbiVLoHPs7ut4fev5WJ5vsY6VS9urXDicyBNE3yJ1yJnjwbzHXjpyDkQyVwWLE7rrUo3",
  "key14": "LW1DhTGTxw8cqZwZJCr9dndMCuUhXkqVjuJPsYcdpXgBUycFD5xEQbia5bL8Hbfh4Ga4CF3KYq25aZimrJCWinQ",
  "key15": "3UDGGubjLtG3YwdpRppKJcyeWG3Qx5RepBKGD7N39KWvvkChnQxKeFLrQSbNRRhGnAuJnANG8Yu5weUWjyNbzdYy",
  "key16": "2DEYLyaxbcG1Z8WwtHm7Kukmu3XHjGg1Et5SnN7HBHhSY99YGWbhHjWW51X5nn4pL2MXAoVasYC4Ycfo5gb4Xoow",
  "key17": "5tBgyGFVC5cpTLKyz5752faxy4ueNWnkCdDdwQ1WToZpnpYpYuCgZEQdB9EtRb5tBf7J8DCbtaTskdWwX2fh5Bdb",
  "key18": "5hfWtBKCeENQiggeDsN8TosBsjqaPTEBZBWsCjSYc9RdGB5egfEsjngQFivKPT49hVFQuTGqiRsYaEZVQeab8JaK",
  "key19": "3JBKgkbGUKnm4h7KA6Mu7r2Q8naS916XDY6jY6GfBaip73sLU22SAy32UJfiP23bakRv5xrE7HX3YY6sRgbXSGpz",
  "key20": "32U6UoXfNPipydgcRcoEZiCaZFQcP2mYB8uUq8jPumi3va6ayVfa47DvmRU6Nry4KGxVrgYdxW4DkW6qT6wuUTCv",
  "key21": "3CeBXzwh9c4NZj6xJghwq6Po5DXrnAizWesF7ofKUUfmgDZT2RftY9HW1uMQU1bMpoJPkBHjfVVcKnRLe2XZ8NJC",
  "key22": "5hLabRi2Kk8fmxVinYEsBQ7JB9JkJ88opdh4DLQzz4s4at2PAkLZWiRBorhDzwFpugyykXBnMGky1D6WdkFkG8ZK",
  "key23": "5zrbAAi1uQwB8hddYbx8x9eteqnZnCedV1ziVt5xDyipoiWLwKwvjrzw4S5R8bQ8nhBqys8YMAFpvgmtxEmfZGbP",
  "key24": "4w7DQXUbkHh8frzjQ4YXFhpbWCQKFocSKL9aSCbV5XJhwiTf81rgkYLxgyBhQRSKgyHvPwYC1C8QF3AL6nGuvqZ1"
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
