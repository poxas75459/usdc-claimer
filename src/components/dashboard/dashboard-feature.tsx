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
    "Ww49SFeXaqUYsbQz7Qnh2FdV4X23PHL96B4ygoiqLXnwtRsFto5RmTfJQxzaZP1jJdrJdNbzKDBn5Rr2Kw9s1aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a71kgfCSxGaidVhDfjx1KDtnuNb7gpYLvdebt4VV58rMkpCTBb88xaWu9tbcSeHoog51pjor2Fhg6Fc2UYwae85",
  "key1": "5GTtVH33x6PW5UTYNji2sSugGd74cDTipfWqe4fefiy5ZMAjSrbY3Fnesf6TAjSzWd7oF45m25oPfMvMZMJtutW2",
  "key2": "38ZCyFw1QoDfJYWdsZRQcxR4pNX9ZPSnZSA55Hr1cBvQsnHygfYow6tidHrax5mgBhLiWw549oTaaWGHmT8jUUmV",
  "key3": "igwP8H5C7wELK2MbHFvdgCnBqERL8qK1a5BrZWxhcfYwvWVEG8qoUj9HCzq5rpyfskqCZS1HkDjYrHNEFk81VbF",
  "key4": "2MxDVfNgHKBGYiAPJjKcUDaRMLJLY7x5Dn3JNtGhLi3hxWCwHqbQVSutKPT8EiZne8M6vDviDX7rgx3PJ37noA5w",
  "key5": "4zr31X3FowKTFYoCbZiFggRTBPKd26dkN3oPYSXcxSUMuQ6yjp8DpsW3n6TXfC1rqJMyki1ws6e4rckysn6kd3fM",
  "key6": "4mxFxuUFkarjGmhmCEwpRqiwHtg7dAqu99UZ6TEB1gA1mSDvtSTde3bXH6gyRfUkrVwW5HC3GwCvM6fE7abxd8Un",
  "key7": "45JNQoVZKbVWr2gfmoJfSc3Ez2d3o8kkjuLvBsdA4gSLBL4Uw8z4pKSj9SDgsE65zzbKLvKPA4onMWqrPHscUL8U",
  "key8": "5pVM6MNK2L3vF9BFPZB2SHakBakrWV426ybvSktKpctaME69qCSdf1GT3T1s98kA1Mutq2Rt1LPBobi525Hb15Xe",
  "key9": "33J1qKNJGxjhcxiCCJSNqKAvcdST73KvBBAzXdWrWpxF23WP4BhA8zTbZPMjzHeaAPmpgYUbrVnrtN77R5QJxN51",
  "key10": "5iFh9Aur6R3u5TAb5uyCg7ymkYU4xKUdkHoHrxqZPpyAh6hyrpQeDBTiX1ydDRChUFEjXjwaGeXL2hmVXk3872Xs",
  "key11": "2JkUd2LujjBnJDSAYtrRy4hcJ6CCmh36ubcba3c9b7XHz6Zr3F13mjZzUb7HA9x3NsbzPNkgCYMGfpsGjKNR1gob",
  "key12": "2cUGdHWN5hioKZ5F9aDzD6xsyDZwP1KQNBGauvBkCrZXYdcjRDJQiugZoazWfatWwMSKCmqe9h5KrGskZXFRBhGw",
  "key13": "gzfngjF5cLKFxfcPQqmhre1J1gVAjpSYgN299yCxMtVpez3FKwi3yoTeRzHbNsG6KdeeKmR8GrZCkgZv1HYGxSW",
  "key14": "5FUcp5CPDLhxnizanLe9bBLaKofvXSqW1N6pVkuewGHpxXhJ7Hr9Me2rW1VqMCE6AguwU3Ds4vKGc8tfLgw2xMZd",
  "key15": "62s59rRKP3h6YntTUHHXk4toUeL5oPDL8WQ4HeZJ7yeZiWtcgYLH9fc2herf7SqJWDBz9RHZG4Wjo76xwjqrtB6V",
  "key16": "5DJHjMNsNd2UT6411msFQsSUMrqrQhemWAZAVPUs8ef4jfDFUrbsRQzcJQ418Yuz91uBXBHxjpYD41BStB5ok1rr",
  "key17": "kJGQerENi2KtAhyKSqwM6Lqz7Rq9pkQ7CRpt7JiqNGgCgTG3pkA18eEkxQYNDfxsK7bLnuXvrbV5BhtDU9X1KqK",
  "key18": "5NKbFg6o2hn7aKD4REHwH8GfZY2iQjn2Ldhk6ncEXB71b46eMz25w6bADtPXYaZcaW6NoBYewaocKrLaUWirSPQD",
  "key19": "QDDiAB5JUgCNLcSGYUVEAb6keHNG68n6zZohdHyh77AqAkYZvHjfzRgm2Zyy9S4EizULYt3r2kZD9aBuUMqPWJy",
  "key20": "2df5tn2czG9Lhs5LU2STdFxwLyr4MH94nJARTgqLJVHKh7MN5w9qnLFPhDcC4XPSNrwNMkfdMzKe4wTMpu7fgNgk",
  "key21": "2w5c4jT2NxnoqNkNZvw6ptfRMWcBj8bwothtxMFJvZeRzFEBwU7eKsKQ9F9Z2aYX9WRLfggMzAR1jkpsEZU6vZrp",
  "key22": "5HygTVLWp3UVMSNTH5s9s7wjntH3qLTJhK8YMBQPP5p3iMcHo6uMZVBnBjS9F4KYqdgN5GskwTMCkE3ByEZrEXHo",
  "key23": "5Q8QBuYAm9muk6JABayXLDRuUUEPDfQvzUhHWZsAPjQ2apaDJuh6pfmLkhxgYs5ZRRQSnG15rzqqsXecAGpS1wAZ",
  "key24": "3ydYCJx9NdVEPxgBP8EqLVG2AM8tEynKkM2t1jNB5MfZMg8trSucA2wcH83DC3mV2rTFdpy1RoCHhV9q76Es59s9",
  "key25": "3Q82XThJxq5qdAZjSFRMEMuDaD67bCf6jg54keTuS5e6JipZdPavx2bUez23Cn8HUb9NRWKNAUqc1omVq8v595xo",
  "key26": "4v2fAA9QjfmadeZXty84y97SVp19tutm9EZsGXdztTFzvGWPaXpVAemLLVPifDbxhN9nJ6h1Yc3Sjq6ivqeZRy4m",
  "key27": "4wbUXTuktK5tH2aygpxFS2FU8AQ6VJLLdWv7w9RUL7HQ6QNcHXVa9tohWbgPVgGKxC585nsY53TNEUkHmQbA682p",
  "key28": "49vcADpDHWAzJ184Q8HsGEW3HnCnHpCSBscyXZpEUzjJfXJypt6c6XWgAAvfdo82DZCPauKRZtu6PLdNua2Thsf1",
  "key29": "cCrZ7YjiDRkjSSKrRsW3BP6eWaE9VVPLY9SCebAWMZwTTFqpwyCofH6yN7aZDDkJ2N3nqF6rHNgYE4p2TsKWBTb",
  "key30": "2FYzEEcPhu85Jyn2Vt4d2FGkw9MKNhiMYHspbVXeKkuD8xZtTQKaAmqdbVTFJKtw5tXHWPbUWAsDXxnd5d3wmeJq",
  "key31": "27rMPzqXyFUkkntmoQ41a5tGhkXCEM7BjsgBTWHd1EASbBPoHqvoJVsLBZUhL4DKdZAmxX1G7f6H79AMfyBPK4fi",
  "key32": "21XQN5jGPU4gZUGmybhipbwrGjzdnCDbbLC8FWhrdZXe1t1HPiy1tm3fXNGpzLGS8FPVQoGJ8G7MRNWQHrbKKvVX",
  "key33": "3k61erz1WtLTmJHqeDXcrZCY6UyfB8TRqq7yJjKy2ykmiREHCrL9Ba2GgdSRk7Hqs9wK5hTop6Mbp5P7a8Dg4j3Z",
  "key34": "3tCbTwqCo3b9Bs67qy5KQfuXoigWn9NSmxWH7HKurYYgEWrudAnME2MCa131BtgSyFVtFR1ZXiB3P2EbfQzM7t8K",
  "key35": "41UicAYrhF12nfEcBhTiLx8fYArAVru8mjjiENgsnZZL4bNkSSMQJEgm48jK5sjkUUQou2tW4KwsgMsUkVsgSQmx",
  "key36": "3fMhmVkjge8q4Y7iMwdYq9S9wp6utkfiNLSyxni51h3pEwfdJs98orBzKUriXeTFGL95wPRVGt8kk6wukq1Xdanp",
  "key37": "4YkEBRxngtqbjniQVga9h4eDrNbp1pjq45XrXrRUvHxSNZrFcmP3xbYe4QqTxH234ySWH2xTJ4Fhrh8aEwFHwfgN",
  "key38": "3L84UiGCaxZ5696jYKozTZ9pCFrHuGDw5rKhKiQSKDqAdLAK6Fdn5J7RG8eRvba9p9C5CDPgWTYFz4sb1xFnijmG",
  "key39": "4C9rqTWwjvmY5DoQdhGpgMY6kJGbX253sAYopAwTwBTpZT4hVrdj7zNgy15UrpKWHBwJFpdcneBD6ZQ9Eza4Hgxc",
  "key40": "5TxEaqNuqL8qPhQ3tbdNTexniWcxKBuWs1d9vTi43LVYTChmAkfc3a64RJDiLF8HeDtH25yxvLsAEPE9Q9M4v8Ad",
  "key41": "3hUbxzzrnPCr7pBtasF6bRf3sdfjTUV1PUDUWzzC1je8cmWHXHeqbru4sXfhxqCXbAGrNZfGEm6NrWDdEJhUWLEf",
  "key42": "61hijVq5GsssRHLzxJqxLFD43RPExJeaM5avDXXa1pNf4ZHaSLz18TXg1KpRmMnZniyoKdJYLeBW7nsDZPsxuKQd",
  "key43": "4cNFGKksA2nu28yTi5rBzNq4V8Y7iZVswViT4ZNuesJWDPqhrnfdeBwyep8sRRjWkz9ZBRMP7tFp4Cct3dXkbtep",
  "key44": "3eDPPRChpBftxuD5CX3oLHxwT7p6GJZL7QRYGsChpDVKuDEpQ1ZqrdAQdeCXekskVNnZkXYpiKuB44WzP32EEMaX",
  "key45": "3Dft9rqwh3PVsH2KSn4o99R8fX5HdpApNHfRRa72rT1vcv6oLvcaaH2DExpmwuEtkpw2evYXCi5ppF9dgCnSVcH2",
  "key46": "2F7Er4ioLxujSVCPo79FL5uwxpJtrz8HSU87dXf2zhBpSH6CM3i9wAWZe2XCp4NuDfFwTpJ9KmTeCm7Cqvctf3YY"
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
