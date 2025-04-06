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
    "2pQN54z5JGP1NjrGqhfLaNL2Fyvso22kwuHHZ4oYBveXftkWHctxYnR8vyaXDxWWMrRLssRTb65qFdiFDgVgHjic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJ6VwjfGJhPF7WHBGuJHNgJ2fQKxMn2GSBrFaqcf5yBdag99eHjQEfsH2m8ztmbGqiU2XhtVSHMFkPSPwyz4AVg",
  "key1": "3pBpufFwSxFaXLmovuZsGDFYUQJs1RUCecSTbmTMNQZqu5cXSPt42dwaWLdVXkt4QEot1T15Wk4LTU55wqpa5EaH",
  "key2": "3p1Q1wkQUdAKQirGGoHkifWvZrWJrRfMgDaAEW8mNoBbAYArX919QYd6PFm9S43R2qvsoNi8nwXjRKUBe72Y88ki",
  "key3": "5GCevfLHAyaXipRjaagFTUgTwbB4x6ZUKV9jtczVqePT4xT9JyqdMV7sJ1rdfyhqeqXrPtE8A5VxrftBRrRpGwJS",
  "key4": "2St9jHQE7v8CHT412puRSR7259VxVbXie6p3DWaj1kCRWge6M8jGjPYRDjC6suNz1S2cdaRkNEagev4XshywK4BZ",
  "key5": "7JB5zd2zETNrgn8e3cKgLktk8shxvd5gYMGCQPyoWWyf9GLviDHhVPBx8zUyekY2MSVV73Gdz7vfJShnsUpDFbH",
  "key6": "4mgLJoZAjb3pvzJG4jcUNZzm2rgsQ7b1YYCC6EjYUkf8ctdrugCdyBu29SdBbUXQavxpz3UtxP5xCmGuC1Bi8Kii",
  "key7": "56UQJVSGeEzj1R1qYc4U9QdMxk6iA569L411hNk2fyTqdpeoUPqpHNq5rYTzUqfhT2de8NRL2MVTWj5QAtuvDKcv",
  "key8": "ZX5ZsXmZzCdG6SJwsv32USo5597qcni13o4ZP1CNm4NGHYCkYC3fU2JgC9NvQJh9vtqE11LPQx6h9GM8avDo5Ud",
  "key9": "2tBh6Hi92wzieKbxDuNg4eJnzvYjBZnj3QD6DUgdtyUjhujbSjUZfjw4t9bAspX8nK2uE3waWDRmhA6WkKYvhxhM",
  "key10": "52AhVN3RYc1dApeKAX6X8WYnrYMV1gqKEb8Uih3X4px6mxNBXKxahbDXAYCtWcCC4JS3vfpsvp9GyYXXLiJ2jkfM",
  "key11": "68RS2Fj2rNqMJmU9TQo6saqazB65KYjQv2sh36WkhQrcuk9Jee3HnkNbCzPaMVwzo4pjaXRu5YT92V4evsi9WnT",
  "key12": "8oDCX2QCAo2gqTeHeK8zjdv5JrZFdjqPP4AA9Nbu9YeWZn8BkQt7Guej6ReUBjfX3FEz5oy8XKY8sPh6X7w9G7E",
  "key13": "5SQzFhWoTgdmtH9UQPapeMVLNV9VQDCjYXa2rnGhV49jCJsyNWP8r79BntzSKtNRBJvGLDEBYep1vw1f8sX3yyt7",
  "key14": "eNBZq5PKXHPeLHKJ2X6VuBGBMz44tKUWc2si6CRNRZcDTmExRRkgNjfY7Rtrt21UC2yX4wMsRuGRwMhgFaso5oM",
  "key15": "2wUpGvLVK3rvqQU9xTYuF2h6PNfpFYG6Go4h6tvAknS2kDfziD3KRzY7btP8HMZ7jy6V8yaAcKjw4Q5z9HzcGpuG",
  "key16": "5mSfWsPuhttsL29EQzDcpQ621BkqoSWtKzQibmcCKGtbWLn2qtKbX2QW4GRZKzNGePJZFmasuBknrNANVadasUQh",
  "key17": "23ubueqsUfVBDbMaXEwHDCqjVnVtQFp1hEM4kCffMCErzzSJrU5kfH6DQZCMKiXaRFXe1abHQATKimbU6GyvSVJK",
  "key18": "zryWpLD2DZy2KW745dQeB4VMv5FJs6P16Jhwj7aP1mLYaT1AJ2h4Q45TNnxT5zzWDUVcXuMPP2ENWog3hWucS8u",
  "key19": "5KFY1PkhtiWav3Hgv9x27mXJbEsQwRNNhUMaCKpp8KmvEFQmskF2XU6nuVaPLRyEqmkj8tFkjxHJQHmj5ekBGxbf",
  "key20": "5VcqLX88yrFQxeq4Y3bQZmaUaXHx5ggztenMwAddyVrGLFYUPZDdFvb3AQFJBqG6vN5EDCh7u25zy52UFxba3ndQ",
  "key21": "CVjZR859rKTkB4arXJyabZedXD4ptYgjh7pQgcaet9wdHkZuxCGY7XYs66zSjRSVpE9BrtXKTiB69565sjGgBRF",
  "key22": "3Jjb3vayvXBUwThmKG8HivZyr5tyWgmKKJTJvSt41TQURw2ez9rMFVLDiHrzhp5nGopqzy9oyT31uUy3Jrz9CAvx",
  "key23": "2q6gLiVxFNyDjQrrnxTnD78USj9fsELBiYyiWVMjgK5cGC8kqF16Ghs1BuKuGtz1VXnaPy6TvyRecEEQffimKt76",
  "key24": "4znwjbS7R8LBwFVZJLwBRk6H6mmMSB5EDY15DGq2niTKpD1QLynHKULdkdfn3xrWinkDWEWWb9JcgdecLhuJqmEm",
  "key25": "3jdfXAPubRdd2SzoMt9b6teHg4nKnE4n7gAsXzRi6HJrjgbUdrmt6PNUoe9mgKosV3w59bCytePN2cPXqyfPT9fg",
  "key26": "3pnfjqRu1wpDnFDJ9D85hE4Amx2uTZU5hybhxcHnaHGSQzZeoNiRmzkxrFFKh5igoPbXSUUieu9RnF7KvEmjoR4a",
  "key27": "2AMKCm2r7gAx6zXsTxiXAAPvSQeFpXtpwJRDjpC9nGXoo3bGP1dxnXkCv7nFQpu6rVyckPVJC5E3JDbkT4FqmwAN",
  "key28": "2ZCdmeGTNDqp4sMkqiWM7yT91HhuHGsbFWwLqFGhYKjwYFrKUVdEphLnrUW4xggmwLrSVdZ2Y3LN6J8AMmM4VZDk",
  "key29": "GjpiTcdZMdyuuFe7T1QpY5nCRpKT6QsPYFppofX7zuvpGXASBNvY7CKzMpfmuvusGZV7vvGXbV6vGoUJCn19YDn",
  "key30": "DnErFyg4j5yeHSG7XuyxmxiCJhgkh9nNdfipEF7cjUX84wynZS3RahPGz6ygUc1fiNZUjPw5AhQGPYkNf6XjzAC",
  "key31": "AhTXxGktAgo4nMHVQJSxanuAnXMr2XNMbuYtP2H5Rp1ZUxMqVZyegThCFkH9zjdY7RBtJbXsaN7cuNBEwM9MEFF",
  "key32": "CPQcWXgwksvMRTPUrv4RPq6w3fkp1StUfRWzUYmit8f9Y7N44Pp6DLgZ4dhg3A1BQThdjDXBhBKNyicRk8s3PYU",
  "key33": "3nTVjsK7V8EfdAyq8AZeiaPAEBdavGo4u2wwSLrz7xzr1FonKczdT6HTr3tukFnGNusnvkCPMy8z8FJMBXPqzfcJ",
  "key34": "3QtXUCzU2aMoucH7fioPdBDt6xSUDgeiXdZ3cg4Ahbo9xRALGMLdAPGnvjvTVbuNFQ2kxZm3716AhN4Y7YvVk92H",
  "key35": "47dTiDm495uakKb9zawbJMKv4JXyFRAR7BpXHKEDnsm74u6RXFEUQHb4xjWpqsS9avBfSiWHyUX9ZxsKsYhx8JcJ",
  "key36": "52rZq5ncJLBYZb4EMDReaVsZCcCJg8Z2oPZWA2cbvj19a5pXETujXdG15GYQs23PtgxaWnwGTVXKLLTpj3cmqSgY",
  "key37": "21nQ8489PzqjHRhktWZg1Pgkd4qXbux57pXGEkUVngvvwhoA8mJHGqSwg57F5SmBRxW4jqP29FrhStZeMaJTN73y",
  "key38": "3Y1t18pBaebPByNb1QngvSvG2bpWFMBw6HWVboZPyiKjHZ1G2NFChPJbmMavDA93uaFEgYn4CgMV4rYt5Pm8WLi7",
  "key39": "5FBC8qdYjhySPjg6heDu9psu6YsxJLPpydzVfnbdyvJRQeESNCxRbhU1RQyhCLdjjZXGM9xfyCm1TE6CMF4gpyNt",
  "key40": "4ZN6FcCLQFkzZzww3N5r8pRTEdptkcwzsjrB9vh8MvEXeKxkJ8uqNhFGWjuvg1viYEnPnzQcNcZoywuAsmjmip2w",
  "key41": "CZJdgHT8n11iWktRQP3CXTtgcR3LsnDeHUC61KrEwjHSfMXfbykSuoY9HBbs2vHexBkW7xaxWDJy9ovYFDWT7Zf",
  "key42": "4cUh3NfeNXP7z6miE9gKMpXA3zrN3uUi5wFZfPhRXh1782k5vRapd4S44eb7SZsL4xthHiSFFeSqV12wPKonVxTJ",
  "key43": "MhBjT2psYsh3fyy1qMKcjcopwntDCstLo46ymZHtsfsJ9P8kE2c9Q8mKNL3MaJTaNCf8atYpVpcM1jmVVBryWA4",
  "key44": "5paZ9RXHHcpHeYGxRpP7i1dVuTzHnTEbtuuY8zJwiC44d1aVA2Ug9ULUp7g6RHV2eKbyCFGmvho4a1Qci9hQiDAW"
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
