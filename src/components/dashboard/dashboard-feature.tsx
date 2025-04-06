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
    "39dnPTWismky3LRbnnPnB4KMZWpKmDcYv13pV4YfLD5sfrA3si1RmpfNHyTS4nCD48wHBYyH7SXd62q4Rs6F4g5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ekBdmPeeAHMmSPmTRAU5v4w8Wk8KrrfaU3V5YRCrPbVseefv7zJSh9rDVYRpPKFvn1wyiZhNBwTtTtY5gfy1EWi",
  "key1": "2ycbYB6fpWYiKtN9Mkf3xdFjM1FhRwn3LLfnH2NNiKF7Nimo7DShWETHWbPPqzTnmKaeM9UiGSemSLACkEp9wAnK",
  "key2": "43hYEsfjnditLGDJdSGsKmbhBE8ixRDeQjkDkzBHSak7uAS8fKV64mjpQGAC3ckYzJgZ5BSEcnpJ49ackC7qXhnJ",
  "key3": "35PeRooxc3BVByqjAc6THERXej9HceLHj7ceMqoQpxBDxLkxspugVgu6PKnkT5SigEj2fEzR5B2zoJansoFpP2bW",
  "key4": "3yPtjeMGzK3zwmDgcZKWkWeSpv7y2ZFEyW9jn4APNxKwpMFVmJ8GLozg5wKMvyEcikYPoazee3YfDxa6ZHgkjPuj",
  "key5": "2B7kh4BBsmWJV9pbYMjkH3SiZ677H8CkwieP6rpUEDzMbZg9fvo6xSj5bfYkjGdWJsgAw4EG1osRHLbQFPBXxpPm",
  "key6": "2z1JQ1pMmetJtmFF1ep41D1quyUnYUFgcFssGyRomY5o5V4wMgkfxeGuTSwpkDZHoNrcCsqMxwz2tBgHsKrcrfwr",
  "key7": "4aPzNq4ExKAzWQMdFsvyEgNx6Xgas9suyR6qJi5maiwiMcb6pKeBNTnd7xSWZupPKSkXkqCs9eecX1VaLamo3HyU",
  "key8": "4Cyni9UH3TLpnhtjXaZPh49EMtVGr6tP4NiqWnwDPVq2aNQ7epg2JEDNGGfa5tWba4ZMGDVPW3StNjhofen3TDd5",
  "key9": "6TrvcbKM4NjPfjWe9VpX8iRCg7HfAxNZp1Q9CtACt5UDXcRv4Wd11gSfK7aiypQfVMfxMCz2ti7Ug1tbgPmoGNA",
  "key10": "3LjKerMUdqL1rGiphdcMwCEopPms5qCZ6QKU7n2kVdY8rjE78PSB3JuwZ5D14kQLSZgkkmpPz3v9sXwRvjnNYe7G",
  "key11": "29V2aqvZk5HkAHUY732JmVeD3zCSa7Rw3Li5n8iw2WYtZozmAQHagsQjPt4fA4SyEwBtrEGEPdRzH1KWoESNoNYA",
  "key12": "2kcKBsrSbowpP9n882pykEtTWGKXJYc8MyjUuxzAhas7MeseCv3uYB7Jgw2SAo59FRyqfgmyGCKnFJARtTjgEEdG",
  "key13": "8ZNJCLSC2kUMW6QvafWnW189kLV9kkxb1qpwD7paGUV74tQKRKjzR4Je38riz8yDGChTNFQCHkykMvjrijTXccG",
  "key14": "wxZ8oUtCtwjRAej2f8RCuGL14c99HWvYXsr9GSe5vHiWp5Cm1JkeLMBxx6Kh6rUHs4e5GvfyXomwzKK4omMaJLY",
  "key15": "4ktD27zZYTu4fweGmHPLWztWagjFeFygfjgiSSUygxV47XaY4X23WAszR3NE16YWq9K2Gm8sDdipxGnu1ZktfoWY",
  "key16": "5nsMJseKZekMqbvJwq86gWGsLcAgzT3iXAXYCTDvwi2uW6igy3JBPFsNtN41x7xydBTDed7J84PM5fUdyg8BdZr8",
  "key17": "5Y9A5wvuyuwLXJFg8j3v3BDvpMjWTXSMhaBeq1zQ1wz6fwbpeBhMdPQrsUbs4V59VPUZwAk6CeKqwNxFyFXYNtiY",
  "key18": "4nV4Cz71UCeuZqyiAA14n1VaUBF72Qdqek4UvRc3dnCUh1KK2sBKPygTASS7fjkGXt5U8k5jQn36DGf8k58MAS1e",
  "key19": "5PQ8595cE2wDPejWNu29NmzXUksZRx8vccYNXNufiLF6tbV4j3VsknGQtW7f41tYyDttkYdQrrEQjKd4XejxyHZh",
  "key20": "2A24EcDDKU4oKu4dvG77extz1hwDEsnbu1M9jG1374F9PjXKY3xkoPkndDQMSfmoMRZQogyfTuwXXe8JxeGg5Jnn",
  "key21": "cLmJpqr7q1Upbq9oFC9RRbq2QZiUrVbBNDkvGQkWAYm4TXHJeS34zUmyDTHh3EMjD6vQqCMnsTxrfTybUAuecyi",
  "key22": "2MK63E5PGJ8bEYWE3ZHJUmBvM8LCiVDbnWgVuzDZoJPRFmfVV7ePKh5h9sz8Kx8j9eDjzpLkCLzjvkNFrs9risfh",
  "key23": "2TWjHv1FmsCSXJi6ohBLHzUEn3EcLTJnYGjjqjeb5rXL8JnfZ1JCpc2qUMzBgVNBwSRKaspvZNfDBAoBeWHSjSb4",
  "key24": "3v86XmoJjpwP3SHLouqtuJKzMTXdWXE96q7r1XPhPUAYoYxMTKx1SeqUThDmkMeSGetmGKsq76xyGPh8VG7kdV8y",
  "key25": "2S1XBPDGxdZdhnSzEcC32DwvLDNL9g3fk8g5ccLs8ob5K6q2ADVXqo1ZqXof3nHVtvQrL7oyBGYpN4QoCAVQ5Vvb",
  "key26": "4BpWfaq2SxwnHeyWYsAr9nD3CgsA7jh5XE6dcE8zNVCnDctcfqfN8HpxLvPpmnbfb7C9jM4JmJvgeLWza1ojac4H",
  "key27": "42a8kq1eueyDBsJW5gzpHmQWoLxqgh67einPwgmEQGejTQyspUCivQSZG1mPmFVy5QwPeAdsCU9SyHoZ3jmW4G3M",
  "key28": "3owrK925k5cLurz8kLPW8BsXJpL1vqQ9ZG5nigRnhzyXBMYFfdLXpEbhhvZ8N8NmW9GGZ7aEivGrADwEYCCJVcER",
  "key29": "4Xeb78ae7yZr2o6dULuntpwQRg1Cz6zRTsat4ZSi8rgYycWAcHX65HPauKZTwRc9iHPBWPiKNJTnWxmCKaEaAprT",
  "key30": "5Rx5hdXTwYqm1kDeYGjZxNFSoqzLuYPY9sUFqTocgbaTfuTQMQxLPpBLgfcaazcDfMxwUux4AGyWJe5q8az8svgc",
  "key31": "43CRmoL6VZ7XvViMF1C8dSi14e8dQvs9UZnn4LbpQdhWURsRJCNfZCFai2bXJuJ2LerEz1fhkLybJXxy664WTzEY",
  "key32": "2xpp5jbdEuAdHnEGPR7rLXBxwkMVvE622TyrNU856cTFBVnqx4t1epbWFKFHSV3nRRowm1N3x3L8EGdr6NZ12H1R",
  "key33": "5SfcxArMU45MWFwBgJPRsuFENPtcoD8rsv7tBV8Y2nLqBrSCBTq8nv4zSPN45JG7cm7uFU5hcK8xTeB1u5kaAKPP",
  "key34": "3gyxTFM46YpAQ8LciMGzChJVMzjdjExU3RqyBWxwtbuqqsJ7eF9aiz5bxAxxbLDJqPQoPKYCTpn9iBzCdY9gQthQ",
  "key35": "4aH5aG3JZMgJFetdX3APKcMVzbVyLUB1JZbf9we5Pzo4UUdFJt8MgGJFTryu7Lhj4NQ4LTRyrvFetBzohvnu95ro",
  "key36": "4TMLmrY4m4YCyMnsMBmqUu5HrvsMd1sq6Awey33QbNRfYrncj49SfdWyShEzp2u8NWqyHjvs84HQmMDNWJoGwKpx",
  "key37": "3oyYgzb34iooG6aPA8mJzYk8H2YUfvDPjrTz6h65d5YKLeabkH1EFX3fcfRu9zmwci39QzzEnNCvYqsCxsZe3vvK",
  "key38": "65gQ8GrYdxCGzTi4qbDQUyWcHLqxv3LkkhAxdgv9BweGHe7mSzkFyhREppKpSMr3cuPeiL99JmaQPjFHAFUEMB8m",
  "key39": "4eotzFMyhVZ5PhFsZC8EFhvhcKbrBCFNB9UhRPbp9zS4Q1qeKzdPuybAoaTbWLYagnWtmHz7WDp66jJUNsnXBqjf"
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
