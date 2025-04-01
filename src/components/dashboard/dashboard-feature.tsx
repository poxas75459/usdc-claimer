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
    "tdguKx92sob4ETM8mokK5VwESdtsDEkmLmTsDn8TCgptaCTqbuuTz29iWEkhjGGdBU3w54Uh2a3LmEGBNuwXfDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QyWiqVZHUA76gRdxwFEYoxwJHyuWEbKVbpA46RGDynTYVmvnn4bCWZnw7QiWHyRosvmw6mTbqVQ9j8jMKwZBTLb",
  "key1": "gknF6KLMnKnssf4DVxhVUmnFXPr9yXJsrQq5Jo823nffqVTpVhfT35tgBH8y7NqLTwJNNt8PMbjMBXGiyKJQL7P",
  "key2": "2ibX2qa4zh5eTzFwYsdoSF2quq2S3zTMk62Mt5LktVzbh9oB2AknyLg5ArPMCir12ZDYHbhaSkSiSa2QPGjRVF9V",
  "key3": "5E4jTgWAj946Bn6Xj9P8mt5xMCsZnoLvVyzrThUdUFj3gBtcgLDZ2ve2okyzLJoxrHvK2Le454e6E5MDv21v6Lse",
  "key4": "2uYHnkMuvzPdRVUbo2DBUFY7yiuGGwy1h8JKKHX3XBtFnbVn32h7Td6Ruf4kQDofKavrZXWTGW2yeo45vbKka8eg",
  "key5": "4qwboTabDpttTRPVtELqgafYtUNzjM15cdrojqDpYTMSm3Kg8XWnktymUdCfichvLEuo3vo5xVHBVkk1AjmEdZJV",
  "key6": "4XeWd5NcHvaS8XfV3Ln1sACSxUemE899gbjRc2ThrMJrCo6jcrgnWkyQ4rpcnZ4bp5WnK4gU3EEaGDqsj7QKZsvj",
  "key7": "4mNyHcuFA9qAo6GkBKWsEoUB91qCmUtJ8Z1sAih4iQxRUM2ZfLztyGsjGaCooUs1uVhsCVoVgYg4hxEbm9BzuPdN",
  "key8": "5Kmv7Dex9GbrYWSfoKVGqazRuy7hj5s7MSjt8wTdh3GeRPyxkLVv2GyTJfzvJjrfzMFYp42UkMHRBwoB9WJh6JZY",
  "key9": "4pdqoemf7UWgYQ43iSjFgCK89AZ8rvou4wzTmoVS7z7KNDQiqvrPBzm3GYCG2C2zf8PfrCt3iXpLPqKdA6AXHHPU",
  "key10": "2DbUxox4sM1Yz2HvibTy8BkDmevWQKwyCrvsGM7TDKwsrdSukfVYtUePWPGpJgB4idKacH5rM3izg2gQ5cGjjrvE",
  "key11": "5hc4QthwuD7ZrzowJSMMFqSPxkNJF1WsoJCJVnMsLe363nCj4pBfBjUzVpJCsrY6uKR4TVUvEsZw4K3r1Gb6fLQQ",
  "key12": "5A8Toe7o59KQsG3aRmYTFPHsNF7YQfrejpGPv92TXD2d8q6J3Dx2ww5oxmedK3j7T2UmFJV3NyxEHGpdwPpPe8P9",
  "key13": "3J4u2GgjmWznWGYe3ha9CxN4qxy8LrTHL1EddpD3sbpiqXR8WQQqy4YpQEAHbJWGS3YLgp6MZbo1Aa2vbsFWaF2o",
  "key14": "4tvrucokWG85YaFftEZMvkhEdfemoqS9moTC2GES9gkSvyTcto4UpE9r6XUbVgQ3WHu4QFspMUGj8V1Fx99NofWT",
  "key15": "3T3FUWcLpa3SkJ31YEHPRqvgRy3RLF7GZ17y2fy4bYUPjmqMLrxKV96eUAgVHLNc7cqpiiVVoWRnEWr9ufNvK5Sq",
  "key16": "5ScsAxfBArwRB2t1vePzLqFUKr9o1QYXhZ9KP3efMrzqgTUR4PWTZBm3Wq4voWasuEN9uZGtHdfQBXjNeKy11TV5",
  "key17": "5gRrehqHSiaYHPP7wGikceimdhbKZeMqeED6frWcFK5c1txgFWcxC266APmPFapERWiGMShdKzMEuha6qSGJtCdK",
  "key18": "4yW8jsZWwvLKJgq1qKFVu4CxW5JZ76pBehuaRY2QV5H4G4W1mqzEVoaDp9h3qzghNK19y7XLiYWecfmxgLskqAqf",
  "key19": "3ukVU9gz27L9z4o13GooD946fCiPzgCSBCVMxMnJsAtXsmCDsYEGbBwBhcmac7qxPDjzZspuW3VzdBieRnJnMgtZ",
  "key20": "2cf4eUvs9RMSqWmJ31AQP7tHc6MSKjLJyFYpTa7mz678FRzohFE6uNgfPtLeC5LFBHkqYJhtEcLDRbGU8kWfbMbt",
  "key21": "4tQbjWSsYpfCMVv6WLLTByJc5yAW24nPXxKZ7ZaxS1BWF9cnCxKBXF7xnoZLtpBkLNRrvqwXyJiyJsZdWNvHnev3",
  "key22": "32mNKiQdEBeA2wytGsjyg1AffPrwbaMVh2chYLABE5mekRw5z3AUeLLSbqrXHdrRf9vKkta1jFmZTnFJaBVeADoq",
  "key23": "125dUwyibUMTKfBMAfsJdUVbJHwwEg2WTnb32Vaf6mE6UGtjXhNEJ3YyRidJ1S9QpxVcFH1mDVXCZizAXUcSE92m",
  "key24": "43gG29J9ZQtXXiD5hTJB55x34iG9BdwMSjUHai2fbYUpPMcedtmWdnKfT97u42NTpQ2b9BpBAYAGEcjSpFNpUyKF",
  "key25": "2mjvgjWfoXEaN2VR8tRvaYhayuYrERqZVoSrvtiLXNtHYd174NuMwSJWn37URguvxEZqCnwLHCXqHaaYw243Rogm",
  "key26": "4qbciEu7zdYocZtUG6LNBQhsiD5QvNfJyJQP6983oGKoRmMzukapW5GgLUEC7zze6tGvCNExzKshngjkf9AvcFaY",
  "key27": "31uxDvAx38moXwmo5LUv5YPtxZyQrRAQsXDJxqbyV7Svg26SM54BDcooTp7XiSdtaycb8LJRSVewooibQVndw4iC",
  "key28": "4WvqVs7bvjjcu46dSzFMy8Eti9sVTKbedNdbL8RxX6mDEUFH5scnmNC5VWz29GwzkPeUssY2Vj3FG2tPqYAkmspf",
  "key29": "ck5s5S1NMKSJxDbhU3g8hFzKPVREKmFsXfeK6y1s8kkLFqgcdK7hGPm4HdHW8KXgcXd2WmJTi2mJXFv9P29SQMN",
  "key30": "qpj3tJfpXMi31B1aCmtps8ZuyEDV1ToVP9UEtdc8Hx2uEZjeKvAoHkLdqNwxbJVV6dH7eKi3G7n9z5e3kuG3ibW",
  "key31": "331ChSqCVvPdq26uEAcyhKB5aHUHFBso6oJMJQBjEeKiohRoZMBsEsRYMyrWyjqA9rnC1rV9SsDnEFyxtBA5mJcN"
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
