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
    "5sFwiF137SRuCyLEovDeqs9uappeMZ63bXcMHR1ewRc2SUaJhL29M1jQzcDwPzrZ3yymsiFzYriPAxPzE1p1Niuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuTxSwhnmgrVR6KZika2W7863p8ZBndTbAvEf1bqxRmofSZqhTt4thU26WWezCGv4ticraUgxf3DfJhpnuHLzjW",
  "key1": "5Hf9SsL3V3onDBHbUFqQuRMrmUoSSPAwYf5K15AqrdtG7RdZGymzAdnucMgKCN4HAS28JU6f1B4qDv2SnEXkanNa",
  "key2": "21yE7YRh55siarwtCHFSvHoaqbjib9Nw7M4YxJXgwaULMAQREzakoPKAR1FGcfpwbHRxGz2hfMVMQC2pj5Mp9WCe",
  "key3": "2xHqWESRTMMFpuo69wfkUCuVhwuFCNeMAeo3jdwacm9CSNHvTr1ssrBoDFg9fnRvsnjU5YxRurKjKfQiFWA4ESzX",
  "key4": "3iBUMeFTJP9qwz4iNvM1Nbb98M6ToeyYEF4BAea8ian5xoa1fMyTJHziWWgZgCKkYzHqWNGkrRw7gUvZvkA9TueN",
  "key5": "5PJ3wpjeHryqPxctQa7hgd73Bca5ZdrkXo9AhD71YY6U6rxCBUji14G6iXyLb5Sdea8NSsCMXHtji4t6SSCebC86",
  "key6": "QA7JkivPBVGjq933UvCVZrsdx2JLd1jcTobe4PhpgvCV3YU6Y297vmn6LhZYYKXckb7MPAhVpsVvmaqrj7mp44U",
  "key7": "2HUhZ7UqbZpMChbN6y9JiFQUskKrZgsMeX6wnfD6E27ixpABx4UanWuE18BxyBEaHxUycEdy7r2mF88d1eg79PGM",
  "key8": "63wr8Rha9vE5xW1TWRoqm8apBW4LRd1KxGRSpeSpJunTud1YpBcTcCqAfwRiP3fAZAQXDm5DMsZ3TdyZYPQzyTDp",
  "key9": "5tHFD3PDxhwETrEnjKkFuQKYGZnn4M1HHDS7DcjTmjG3Yim9VmPZqDHi8UHhapv6Bs5rYRUUu5hUapQgqn7VkD8n",
  "key10": "XgF3UerDdAEBX34sD6KwybkJrvJGngd14vQaejxHRxMCWtvEBSq3rTXmNtEjL8mQKvNpf6PE4ajB7aFQLyNsrrE",
  "key11": "5dSRUu6cPm4gkXTMX2nZPxSoohzMbVVUv4ELTbiibDRHNuG6yiQwJarn6uzeVo5jXNtFpEDU4yNk39wDYwCvBCyS",
  "key12": "4jhYsWCps9HUU6bWLGPqa9fdZZ8M2K3xV4aVpACxrVz13KtEZ7hsTZPGyChzPAQwwnApcbVCuPi7hy5fbq1pexrK",
  "key13": "5SUgJswB8UcZiaqPSofrqmE8N4WHNkMiowWhia51MaXt31QuoeZzBhjBpyx874AFf9QCcHjzv8NETD3S4iBibYi5",
  "key14": "2y1qQ3GExQbvQErBZ2Nch2g6afcoFzQSWKUq4zVtxPfAV2CGpvEFhpAiB6dQycFzM2DNMu9SqvcRAmwtRMBmMcis",
  "key15": "3SZDfYec4rYBEPCQhWqpoYUGkbHDHiJeQxAa81DVWC4cq7LrifcbqrxXYr6C2jkrCWwTHMaF6XiUBCGqUNHpDuLb",
  "key16": "2CHmwm3BGUeye6fzSau8tihTNe5KQh3Vzuzcqhc1kzKybsRt1dpbpEe7vef1oacqtQ4ZC5hrEVceLLYat698jyj",
  "key17": "2dSrKmfjuC4VK58mhZM7A18Jor4gjb4BB5GevRHyXzT726yEPJ3YCDMPTAtGXZWFRFTyEmCRnxqv3gMCXgtEQiDR",
  "key18": "yVe1sWRZ1ZmRf5YuG6a1bHHeFX92i1A17qiy9sSheiqpbjEy63DCHaubUtNz3Ca6gzyiX4APsA85YLFazsr6NaV",
  "key19": "54XeePcXGTX6jTpHTa4m2MU2gwDg2Uk3skHSfNHbzWUEVrRf1eiCmtFnwKSmtSh5gRSkft4Koh8rzaPLT5xzWsn",
  "key20": "5T7uVyKLM1VJcyxNQu3AGaCpDyNkwddTJJvzLMtLqoq8M5q3qrfzH5FYdvfHz4NctHkDwXqUnh1aiaA5gM7C5MRr",
  "key21": "5rRXUFwHq83x4No6dN7ryeCpFnJXHKZg5CDCf8fm7jzp72nLiFS1xFL1e2dHaa4fd2v83jhHTMtqxfKwQpUZQWKT",
  "key22": "63WDUCuxC2pMrde1YJXn9bSAoWRWidLPksuD1HmbEdk6QXJnEzrdYHbLVGp5Eoka5K85VcT4x1JDUYc9n32wRK55",
  "key23": "5QSNKJRZ4LVNDftgqkx8QQVn2MWwSVM3nDc4Rr72nSNWgvhM6P2whUW9oAKM67iMWeUdw6fKThnausStsyyGHf3M",
  "key24": "qLCpfWpxodpz6TeghekDqmEXmH4bwMAm3uDcuAakR3eNqqK1aC6efm3Y4RkFuv2xaGiSiQvss76dUzANrYgWZbF",
  "key25": "24HNMAVkxvG2L8kqcU9fm6xaChQpkYGrqyJtdzQTKRtf9YhzD4T8pMu6GuQqnnCXvQ38TC3XH4YEdR8Cpc2ZmxfJ",
  "key26": "5uPXT8KzGRLkfyHkrXr3ixGrzKj51iEGhuKkCZo8son9jKLYWuKVfWDYt1UYPmbzDXhNpCLMmR7NZ84YB2gxTmgg",
  "key27": "YetxGctxnChG3CD6tQg1EJKEpwP7xBA8Xknb4AnB633sjsRWeiZxJ4HstqbZ9Guo9AnbKfGaJQwFoNsjBCzporn",
  "key28": "41Wj8RGNo9fqLUVrMWdNUUNkfYQ3sFNJCzHSYDbE3bLmcZpvrj1yu2mLFHAuJBuM6TgNmLF3i2vys9J4AzTJNBpw",
  "key29": "3RtdQwVwqCEzXd7F3NFmsLZqGSyjsCMatSrUHMQ3QWYW4vxiPDZAz8zPY5VApKXDWpoEyA6rwYEjJp73QWQhhGwV"
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
