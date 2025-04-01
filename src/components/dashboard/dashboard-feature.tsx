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
    "5aYymLqRFD7ySSNxqkmQqwmMu5tJk7Zrc8jf8FAPwoWfY6yJw43Cfq48d55w5sVzArsPv46jKppFdW8ZWX11342y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542NnsphrmPkQmfjGWPoDhfFrahHxVSUGBXVe95cCPsViCaQxjjtKqanetY6qK3zmtJ4Wi6m29r9Ytcqike6Ss2Z",
  "key1": "5LSq1R32YcyPusWvndB5DcR6MYrym3RPZhyCJ4DrFj5tpLMweDZEdkzmGre2VZiHefbUaekXJeKRRgGkdhVaUfUB",
  "key2": "5ETELjgd2VTj2hTbeq8PfwuUTVvnXJkkLfJwhGNXrscNgvUHYjWEnvrnN5WvqiavehPr9LkJDp64A7sGhsvx8eYS",
  "key3": "4naRmLpX2EuwN1yRxUyLKzGv8sxcaMwYPe2AGFuu1hsnA5oSawVpsQYh83ed4qEgPAWXYnpbWdMAC9RpdJLsk1Kx",
  "key4": "4LvU69BCz2VMz8tuCpJ7VnZmLcihut3J3m32vim9kK5LwUAvdULiB6MJovBwXaaB78FV34onw5Q6RDiS3Q5sSPBt",
  "key5": "tMA4kd8Z2Hvzxg22jcpALqJVY8xHYZavg5DFrFF4gwXm9u1EW6PZzN4ZmYuZR61spe7iTGDHf7htd36TDp6rtvv",
  "key6": "26ZkZRaR4o3s6TUDJLG3FNvGCtQTtavBR8o3SMf6Excxud1n8ToHJaRSjWBRx7wXQVeKLfiHe8yGMWcHMBRXKYAC",
  "key7": "65L6bEZMc1zWyCDvKhmbZ15mv6iCW8EThthjktNkPvrJCuFCvidBDh4iVaGeX1iYRX7ZLAYce9FHFsZpLE7QmfPG",
  "key8": "3JTg6b2aC31rvWXhhugofL8uAcSFj7tfJGHsKjaJhHFTNotW8updxnZeeiRf3XWRp7Z1xsv33G1NmtVZr1ZomQo5",
  "key9": "56uG5GWEeWC8LubzV6qw9nWSPfG73PCNKJb7bUmzmCuV7SvzdZWgYqQkBEQkKxDTAw7faKSXc57VE1ndLWXyT3p",
  "key10": "5vUNUrAv6inamBvopunPAXuRnqaf6bYZUpDA7yx7Tu2ardK2rzHWe4sguKCvJSSRZqh4DUL2nj27qaKvGBAgEUor",
  "key11": "3eJemSEkw3KxQqG18qXGq9dMNgUzgfntTsTu2QxssT1YDbq8K4uwmfJpXQYG3eBXMqJ24ByS7oAh4uwwa8v6vYkj",
  "key12": "aWZUwFR41zVVgZdVNrFabFyRLBGXMmSXtxdcVy7PeQs4ko5A4z47FuPVXGDHS8a3NPA11ZsVGE94LMwcUW5VZ8u",
  "key13": "5qaeuRinyUzb3dgnGCdP1LJL67Lvqp6n4BKxkkY7W3iCuXUDDuoq66pmHEGTcbcti4gE1j8wHK7N99ZXFRirfWq7",
  "key14": "3Y3ZmfPUiUUVvu2v2L4FJ79YTf28xk2kVJ6UH5YW9XGkAqbh8djvn2QNy7FrNYF2SRDn5wdZHzvXRESkMTcWt1o7",
  "key15": "4VQmSWeAHrD5myUrnGG7NYRgWQYganoxeu8ttgaGUfbDNmbzjBTMmWXyAdsFMPNeCxYApMzGjgrgYS2qgdEA5RMc",
  "key16": "5qE9nWenypi8JgcMPtMe7rZ2Pd9WdQ3ub6NpSegpEQrm3obyW5FowvVa18HEY1syBpzBNYSAzzJ2LZPRmCKMmh1L",
  "key17": "5D9Whh5vvtL6WrYeQSFpu3ewdFiwTxzZYtKTzupw8yJ3423ic41m7gqbJA7EFFdhih4WKS3XD2C8ShJRKAyAPws7",
  "key18": "49RpuutpNdrug26ToiTQQySjaxCxmXzdkaM2EWPMUYiZXo56ZQMZkzUe4GfAzfJc7TMURz8Qb9sSLVtmorWivp6V",
  "key19": "5Y3oWNkveNgWsqeAA7BW6CoXBhjH37RD1YhBBDF6tD5umki1ZL3wUHt5Tzb41XvpYsEEWUZPeVrbbruva6Eenw55",
  "key20": "3Zrg25NSQUFEbzdNUQF8wLziE69HmU2APMzpU8wYjaCNrg37pHGAbxedhpFbzQUQ9TVyTDyRCjFpBGn1WyMkkM6N",
  "key21": "2njxuds1zkRQevn8BLk5u8d9ByqeFsNhEcDHuxiztYFi4dh66SiTPX36E2VzkPcqy5Bho4Y7b5RXDarkJ3RDDNWn",
  "key22": "2VQQGbj6FGgfdz9Pub6av6Ap2cD4D8hGnvKGVoX3FS3YFcWYbPNSJQtFzh2KXsXe8TjGugCowVGLW6rHkEyNuSdm",
  "key23": "CNkMiW4kZqRFgTf2eRvTCi6oR6tnVg9XLRQXvcfDwzYso6R9CujS3PQdPcoEs3DSoQ8UiMpjWM3LjkamqKh7kZx",
  "key24": "4gbycLJrLnXndMfGYhUfmvVBREnbmhYXiCXZNH7CtnxiUwMNKhEjvYsaXuNBob6qCkbiKe3RtK97fu71fauB95ms",
  "key25": "yT7pf8edUQf2TRqnSkgqpHMAcMUbAKxv34GBzmN1faG7R8aXba5mSmoBdPWrKZkwbiV1ogt2bgYkqowhuLpuYCk",
  "key26": "4miEJt6vWXp7yVeL4sFB2HQ9moBXnf88PFvXHMQS8VbVZQnyDgXU9QQjYfTT3ADA8oXudtzeMdSFB2FCT9FUd7af",
  "key27": "2uZXHPTeHSn3C2jABEBGoqDTS15ZEBpWWTyk6D11NFtu2ztiy4fWL6ndsG25wA8C4TkdQjJCd3HHUh7X2MesJM5R",
  "key28": "3fCXdnt8XuKgnnRsWoW8r99ThqQJEpsKbfqnyq9ErJqodvC2ihUSU8t8RJchvgZmpzibQ6wWYTKovXFDwGw7vPfC",
  "key29": "MkCpf1Bpp2yeCm1qgW7zRGqihmK5sHoEbLpsfn7C3hkNn1LAbBNwfGYSkGTLz2E6D2p1ijfEzEZW8eZ2SBupk32",
  "key30": "4tZT14fvDeyNpnqFQgtX9XRAowi8d7xC8WvQ9DmbkfcVwc8gFgTbt8RHqLhSVgWZs86mTRwQZ4BNRiJ8BjjNptFU",
  "key31": "4JF7x7Bn8MdbZqFuwkmAFRz1NggKPeD7mxYXq24f14q7JZ2Kktp1cSEJRVTsb5mAgJAq5rmXgZyeFaZf9JM8xk9R",
  "key32": "3LfruwoFu3bCTtLNbB2eDvpR6qyKswJ7Q2ssy638krn5tpsqfXoSvoBw8N7YLtiFT1fRqMWV4BgpuL9KPo5fWbxy",
  "key33": "43f5812tx45kPbBFb4Tms51JKdGvt8rMg5jnWg4oK6PwXRNxrfH3CbjdDvhKgqmUzprFD6AiNRLgqPZfNVMRyo2S",
  "key34": "2wYes1ad253AQCGTAz2kEVsPP6es6g1aknQBiXnJpdZrAr5niHHo4M9woGhG4wqY6VvPSYEZJMZ7UJKcwNhwdKg1",
  "key35": "5Qd5vUDoL85FnU7y9nmDRZC5vsF9QALbsh8xZZDPnhF39tf3La9VWJCP4X8VyPqejada32zhhdcNcXnHCXMDKdAh",
  "key36": "3kEbdZmq6sn1wMhke5QMXnxpZXAc11yRgDjPNW9aBhW2PKszpSLPNJ7ku5NMf22yzZ2Wuad2rS4Go9XVHZ1FgB4h",
  "key37": "4wD7TJLCPt9ArEZpPkRorMDgEeZgdrAuitYHvZaNLUKK5EZsKq3dBfxbEu4FNzzcyuwwM566x7bYtjtX9qHsN6SV",
  "key38": "35tqFWNtHtfm7UUPJ1xhE1nSYjwnp1JY2uUEaZzGZwAianBhf44Xwc8v44PGE5qUL1q8tpnEcQS2S64DV5wf6cQC",
  "key39": "2JLeFuxczsrsoQ1Mr8b1tNaRi4G89zwhXUoF8qTstTbtcYMZrVmUixwqh7ACjHGVdyeqpePDVLFBS41j79c3oUWc",
  "key40": "24dMUnYtDbFZ9ywDTS9eNXsLUm9Km6LRXmPQ6CRTX1v1dTs1jmmeq4RqvRhFs7xZ9RTfzYiyTEMneoXVHZT923vE",
  "key41": "5eQkG8TLkWE4yGknYaM3PUMnWb12rEWhtTC7R7Z1ZkABUqhyLWzwpMg4mM8nZZwBhxcz8kmWFaeNrRXmbosdK6bf",
  "key42": "2kDB1B1Hq2RvZH5ZehGTvHwuYosGtDNx6ZuZMBsZzNLAUGXgwEXjpAueLNEpKSruRi7RRsGZs5CCSXp8smDXTehX",
  "key43": "4YqEnjhqRymx9WpoiDjtRfuvJtfzqbkKanVoZeD8pyQg8X6CJeTeDoBgvmEUqebMW9oVQF7gnNJJfZ2niqgVyd7d"
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
