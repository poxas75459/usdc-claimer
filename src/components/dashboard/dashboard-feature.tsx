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
    "62ztYM7NEvuHK6z2zKeDt8neuGZd8Bry8a94f43xij5D6979isT15HaRhMFJRUyjHTf3MjsQ7HFNNCbUPfCjahCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSGs7Y4ftaTDVjhur5Pmb71Z5iBAZqWJHobhtouBJ5JVep2saXAvc8g4v62rgj6mAj9ArL8fDqjAmxCiF8YMmf3",
  "key1": "4z3z7wi1t5eenkjjC5FJKLiHM58q75T1UdFpjdaMH8Nf7LbfLsrVG73apDoNwdgzaCLtNsprXcfPLTSeq13Us6oU",
  "key2": "4YKcczSsyBTqfayhk1oDxXSGndN3pxZWPGrSzZAcLPaX2HRYrQYfh8kjW1rYt3b3rsKtJ89ytRgHAzERL82PXc3K",
  "key3": "3fDJktcdxtkEjXRzuHTwmYShjfAUwv5DkA11e1ctRDunVkwXBeF2hcVugiUwdhS7NU1y8Vz2ttEYUKaD2ZXS6pGU",
  "key4": "KXwLSe94VEnu3zyM7HsbPVPzzRoqXM7zzHhmeFwRUifp6eMXtUBHiqRo8DZ1g6upadDydymD3TH6stCd9YRBM6m",
  "key5": "56xbmLnPetZkEZNvM9V5oeg3v574cdfxMBjVeDvpDw3f12CoGzqvW93ChYeHps9b5riktapRuM2YTF9BTtLcDyP9",
  "key6": "4KHvzF9s24dto8giLr9xXgXr7xHkxLJrzPWoKbVKtxv5H2kJsmWhAdPXo8z4Mnt8AZyCJDdYhgEkfWiFHSG7kMdQ",
  "key7": "4ANPcqU7VAfEurqX5nfXim9GV1p4AzmExjzM3shfjVe6XFYf4sUxMkVCzZZsmAarHboL2EFsuGnf5dFHLtvT7u5S",
  "key8": "3DowwEWCURLXrEnp2ifcYAtwCGjS8PbxU3LEMbpUUU6RQRfTY7rWTvwkdfnwXoCdpbut7r1SEmBbD5D5bB5RqvkC",
  "key9": "3QHtmMrXA4b1KusVSN1ZvsJVKjHbuv2rxoAo66aq74JnCyDKWEWcokSXhWXZvJA7xQUfFjFGFmWr3frVKyC3kXuA",
  "key10": "PegDRY1FYFQepTM29eNLk3TUEwn4UUUHJjipU8RMHTXSWjFmf8T6nP57Pc8PdmpkE8Fm22TQSNAwtH5yBNZPfHg",
  "key11": "5qLzBnaGKjGr5hjP9bsKLkQVEY9AsSppVCgEF3vQGJxNWJ2y83ggiDqggCFB2Jj13ymP7B3gyUv9hPW49ypirMWo",
  "key12": "3dP7HLfWvjLKHf7B1a6a23TRgvDqGwhrzXZGu1FNh2nbFrrTv2bdTxQpWQCxAA8i7QZXEVzN84FAxhQpgT21G9Aa",
  "key13": "3HW3pKKh8Jt7janMzRnh86SBHgiGp6TiD6ybLFVBjHBTvxkHgNw7EfFYnd4RTWSUYFsW1KVYZdVTeUvsvXfaZ3zv",
  "key14": "5RhmsWv9oW9rQB8UNoc9R3dXoqPLmzyWicdamsQem9qaCo2KtgrF7N8X2YpQoZ7Z9KBUZ1gJSmFi7azAjMtYC7tj",
  "key15": "4tsC4QiLqfHuVoz9jhM8VDdSVFuMdRxaxqRAnsHG388vc1zxv8EYCFUffxAunoxQcpA9Kd5GDp7DtWhdfX99SwjL",
  "key16": "5tt9Tob8Rup29eGW71SpDEadgg6Qo98TSxLoLFHifwwH7YAZzx694v2nSEyhEJAaTghidFASX9tDUq6hRuSbwJ8u",
  "key17": "2m2mQPBr8keoEXjX6giUtLHJ1Jpi32kvs27EtVX63uxXWM4cn7neKkLKa2mHjes5N712nHj5BjvJJ3L9gT4cYasL",
  "key18": "2exKdNgjtoNNchXMWUrngGBgn61nkEHbsjxfqT6jYVZiFB3C6rf2mLHnZSghDdoiipFfhzw2snirDhQ9KeRpDnk8",
  "key19": "QPTH9FEyUQCWyx62gKPzu3seSG64yt3wUsTdkiawUfK5nPzHSrbo8zAYYVVZPFExHf9QYihTCWwhAuijXAL6amX",
  "key20": "3dcExNFiBBWcQJQNL4z4uos9QPbD1fWi7GtiJFqZ7TPKN643Q7BbZZ3Z9uabhNCqtcYGQr5DiQJpUAnoNAeAD3AR",
  "key21": "4ZaAAPrmSgJ2GYbBqndXRW1SB7jTCxi1H3TdNcTtGKRCf5E5ytVJfGHaPUkkX8PYbZHKeVT7pXGCDMQ74hBdvMuA",
  "key22": "3ZwEoAZ5RoYGbQPvgMqaCVNSd1Edrm4srhfGFK7NLCmGa8DSs44LL39H1Qac4KfMK9dGK6Aw4p41UpY9xpJ6cemx",
  "key23": "3myDfpXiLdtHQQiUdUoAMezpvqRErAroqLQmUzvjmwJV5QXq7ehbe2DvkVGKnEyRfnEQetKxykdPXD5N97wmacRr",
  "key24": "3cv4aP5x3QdhhzvBwJKMVdkFQs5piL1oN5GkMPKU21K4b5EEc5XskM8yRZSWz4U8NEPCHBaqihEF1yXM1oQrmYEe",
  "key25": "5aPVSZ171BPLRfL21qA28odDz7FCCJJVsEULZfJccSAYYShhq2MbWAQvzyY8nHvnZ2fSPALvxTUMaMJpXq5jBuAZ",
  "key26": "5KsTcS56fgrKvhn5QGXWkAbZWg9cQrYoCyAKtWCrC1YA6inGRxgDy7ewRb4TLta5xKPViGjwL5rxF4dhFttzZiSR",
  "key27": "3iRBovDp3AedtfePgvCcLfAQE8Ad9RYd1Us64aNsVfr6WugqyBmpTZJ5XziZJHsnfAfQNoFxZXNmwUvjHGyS347t",
  "key28": "46M6pBf5GXWQqrfGbW2afgbiDeUWwWzkPcs1QJ2dweP3mEpn8ttKtp441swaaebDzgevC9Ys7UZDWRfRy5WoM5VS",
  "key29": "FM5CQYdzuBXUF2NvVnwuKZ4sqUKF5V7GvEZ83T2Z2cscqciBuJ5Le28nVTWJ6W2LtNVVwddjHh7Mve63Y4m5kwa"
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
