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
    "zxwSSKACVdLnC6EWUXxUm5m8ju2w8NBYW2zuruXWDSqqi1qAfwkDCMy487tkZKKo7Dbkqr9GRY2eenVmjvUbjWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpvzHqhmSJ753psxJJ6H6TwFvTg5CnaV9DxZDK77BGaZqzaZXacYbsUw5Nrj23TTgMgCD3u4HJoK3eYSYGsadxL",
  "key1": "EiKx7bFLmdSkxdexzK8hu1KdnLgYLQcaHpyo4dyp67Y5QNtoAhUuA11Nvk1x1TXk6gUNGSH61R77AkCozoePH3A",
  "key2": "3oK3tUzFLZBZ4f6AnoH6sTrJ23W757x1a8SbKGhGEqhQ5HpCK2Q3pMMRCDQjpU424gfXfhG8SSeiP33aXYqCygd9",
  "key3": "4sFcoecpkw8v6vyCtUjKNzgVQVdxG5rruhxaB8vxMCD1EFm5HeuofwVpc8BXr5iMsbfCfXqYF75JSKJdPViyFeqy",
  "key4": "2SzEhehHcaHfUN3QsTPCDvDbWnEfronusbkAXwTdBRrk32xiUG6kYt8qoU3SsduFQjTbvDFwvB7gtfqeN9Rrhxfa",
  "key5": "ULH3tvk4rmpawJiJ3UDpfEUSQR7MZxhV8A58HCsWqjaojUHzFiTUd4jR7rqeXy9bumqaMe87LejEcRrmZB6hCL9",
  "key6": "2WKGQWYhcvZ1t1eSWsg8PCUvwqHvU8m7nA8xi2G8BSR96zzVrZusVvn9a2etv89sUGQegVPeQeoiTonvKN51m595",
  "key7": "3ePZP9XecLtTvNdJtwBp6ERtX9VocQwrnMFYTiRzrgmWU1yPdhbaZYLq43hHY4ENqj3BuRQqZzMu4DRTrgLwse1x",
  "key8": "2oGatCTikEkzPukSqC8XpKqXErKvqfMUXptBqUJ63xVipjbq3PQrfi3ytS2Xadpu3inahzHnQpiYhkqJ2MpeQwEJ",
  "key9": "4uoZpyLc9nWeEckgmdkhYLAkSG52G4JtNgLVNe8LGi7ikw91jygeupjWfmD8nNibhxsiLnCVfWDHSoq9Dqkojwaj",
  "key10": "29fGSd1uW4D1AJKzdBrhcK78ZDrQ1wYNhbHCUUPx1wiHrD4jwyvk8jivn8nZ5x7kkGJiBP3GHmvBYNcjVxpjGay7",
  "key11": "5gVzSJENmwTiFJQ6LwvpwX2SHnYiGqnGvKokK7jizxcLkMzFfvqLkwWYLA5n6etWuDFcPXaHj1xcWVq5P9kiKNLm",
  "key12": "4JBm4UbeoFCtDp6CcKZ4Qo6YKEpunM2Gz7sr2f9ZYKDTcBX6nuS7XTf7EUgx8WKzCsZuAwyhSjAjNXehVa3csPjM",
  "key13": "29AuXHd1fz88Nauohz44E64axHBFtvXpLAHMYxfLpLpkwbNXMMHDkyCjV41CN8xpaEQH959xNw7CRMipxwPjLsYX",
  "key14": "5Fo5zhQw1Ls4p7Tb7fx6YbTKYXBeSra9bFA3nDtxcqdNLzczvG9bjLj1L36xqYad1pbxdcRx6SgfYtBy1SvUW4B3",
  "key15": "5v7WssQMLMCU77vGu5tjs9RJf1AVQ8PmeWbyqS1uStNpQC1aE7vdxU5gj6RVGVx6Rnhu6GeAb7GrvV5fGcuZ5MHp",
  "key16": "5t4vb3RPcpStX3KQX3ZsxEmZGVyGooZY32ayMQWEFaAhB1hzpoPxaXj6hjwVkARQUfwaPwA8JZjVKQ3s1t7pjzJb",
  "key17": "3HXsZR1xBRzrZyMRgMTbMWDRhwHsvfiJTvRmzriGgdN7t4mtpwriGKqqT6AoLbirqW3KeJK1tcQsGXiG15AbPfFV",
  "key18": "3j1egPtyYh9gVLgtGEYEftDnqZLyAREC4FfpXFBF5xkpWD3K73UMY1sr6sq49vn5s47nmqEbz7THA4qsp2yMAuaA",
  "key19": "4pPGzi1AuWFxGbZHBtTw3mZqM2oN3ZS6ScSocEjvLsPBVsd5yVH8uy3yBV5RgezdfMr7FdASz7c3vNih5tTj6TYy",
  "key20": "YG9cWt8uaVsbnjkphW2wiVWbzXYRcH6XmJEuZ6N2JBZqHMW7WAHN8hafuvKf9kTHddjwW7vDeo7BurchczDx8sA",
  "key21": "3GCG9KnxYU4F3Sr7LdUnvgPMQCNNzMvXA6N8ewwAvmzStNX8oQpXsFaBHGQBVZHyjgxZNPg3r3foH7UgaUbsPoVh",
  "key22": "47uN8wmBvbBF3KWhPNtaQSy4QgNUQWVS3M4zjxQYBU6K1S4wHwkyib6sGLKEstGKWu5ghaZLG2S3oafNsKVhNYjZ",
  "key23": "bo5KjZhSpdBgMdjEV2iy1EFdNwjSWqAZo9XHua8XGQrczEaaYi1T9SDKzvn4PrDgz67gwsu7NFHDnQ3wybnvHs3",
  "key24": "3g497nPQdr7sRjFa8o8kiqEAu3ZLm3B5ifnp5UGrSAkrSRUQjWGVgwi8tVjVUxcnN2qsqCQbnZezPJmmHQEzMyPG",
  "key25": "3WfnzAV9ZAEcS8GLBRzvDNjsqKD2ZPp4usPsMxUCmZHMqyr7i4szJCVmQRSq98d32UaN5Zugz3DoC4yJmhXSezwd",
  "key26": "3a8r1hAquiBvYdezb9prAcY8JVYtSRYMy8yieR9XnQQociJvwre1TUpqCPHWEywv6RXeuZkp4BM7xiScxnukPi4W",
  "key27": "4WpRgfsQD4gTvWWV8Km7SMcK44zCEckh2S5Zg4ijZLrmFANA4qitvdnqB74eLP43F9SFeViMGxT7X7oZj98K9tTr",
  "key28": "4qtTFv9Eb6RKC2KiTTMqfEMrTCg8QTpT7itVSzh9MSDFA3qRUknQMqXmooG8KwhKVDqZkHYYdJ8TNJtqSk9GqXUG",
  "key29": "395od5whxEq7PV1PRJEwfkyJ61W252e9fNnFarATMQsacGLtidwcF82tAZzr5nLwzCEVrJXmuseEudWoNkXMJyuw",
  "key30": "4wPPqSZAnxeh5L7giGBTPUHCnZAjhVQP6eUYcYJHcRD2oUf5xz4QkpFtG4baK3uPdpyxWmiNmoJ3N52rBtSfM67p",
  "key31": "4CX9UpCxbdugmFwDpbXud5foDSzC5RK4gWX1RW6M4LoCKp5TWKU6UGsRbw1D1yyEdT4Gz2G3sc4SfaNxuzRsm6Hp",
  "key32": "3MnCRFRYzamT1b5E9gFy1N9Ldg9ihGTCeuX5eL1qAcGrzgz1rWKHcH8cScihePJsdzo7cWEGS5KWWDqkUm8TKfnJ",
  "key33": "vfCSmpzVVMFBgwrDn4AoEhtacv3BBxQrQ4hU4RmeYpvguZeUwgMKhHw7mQFUA3XbKGjJCUNRqG5FuobD87KnWYd",
  "key34": "Z48ii821yF7533jxS7UM6KMibgeDaCzqU3uSVFJLYhcUvb2Ki4cDnfGcyFNufq8sybrWFhQY47Dume83BwR91Rx"
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
