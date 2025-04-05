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
    "331Rz8ahAasMNQSd2x7EhHxJqvC7eyVydebQTFxVnhCwvdSq8VB4k9xcWPSQhEypXbhRrKFpKWMKcEEEQpm2SeAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ZhWo9WCSBU3JVauQ7i5wihNJkX2YuocAycBwp6jRy1gQ6nzxyhMkaYrf1hKbwdNGRr8YwMNBR9pSfGjBcQPwRM",
  "key1": "3RxkkUPuN15H68Vo7snD4rBUxMu1ypNg8F9ZW5VjmQQDAhQ14vgQo2G6yguxZQ1tMtZhLUKEZJ81w934SC77tjHf",
  "key2": "5nnSgosKhZoB5LYNrcH58AFa1uaaGBXJD1Anr9UKUp3qqoy96Fr8bZUjAgHp5DLKyp7eGL5Q1U19pFw9hHk8zbSF",
  "key3": "53MFYrNHpLjga5gfe3fmRvZ3pJw2WbVgbyR8qrtdLGJeok7BkAjtR1YZywEXvTSRT1HMsYE5zUsYmZSkz3gym41Q",
  "key4": "5zXtmSLFKF9sGUiQGR64552zH4fCk2Jtm63F2QFM2NXi6L3ZMeAzsU1shxPbPhCTCNbKXTQ83LQJLvsFTjUarN4t",
  "key5": "4vCb1HKnzsct7kRY7CYP1Xb88ULsjMMjNMeuVvES2ABCztUmLEaDYBVHchkSb2JoBLp8MHuUPX9rAmKrs4mtESru",
  "key6": "5vwTE9vAKrFe9X6DrKTkJJC8RBhUC4kqjUKocfsJxLRsiAjzsLHKSwmuVqcR1EhtcpBbPWZTn1qrBtoqccHtjvXw",
  "key7": "3eVu5ScL1vb9C7VZDoZoUWPrT5KAgnN5YfGmTjvnG6vGpYyETTCMKEEVBTGPiom78UVwyCF8uM9WXV976Ma3wHaK",
  "key8": "4qZcCWXkoN1KUd3NzMJaLEDvdsyjyp3zJSCkMfgagduv49KqhuwgqftaDmLVE1F4s4fLtUW2kjexYhu5MqUTsWwu",
  "key9": "2YeasPo539t91oNiBiZ77e6s3uF4NGryWJKSvX5hMj5pcPUFxGo3CABa77dJZu8XxxahAGsAeHVQXVtPNdzaugeT",
  "key10": "5g1USSthaM7g718E6rgWdCjkPF7hTRDLRmqNAhoSV5cc336uLqmWapcgKpY84hd2xbmuH7KU9W1kEUCy9XpxKZpw",
  "key11": "2JeCrmYoVjLZDyvzQKtHGiktpoQEmdMbMUt64oAFkiBBSA1a1hrcf8Y69ADsYH4ePQpvvK7Jv7nnmtTbUYAoHHVF",
  "key12": "3aUHDxfkmTbMSo8JJxYJzuoi3DXXLgQbkP118wG1Gt6FSSPNTCskSCL8WKHf3oUB6uZkZZSyTPXoa93b3L9rDsYz",
  "key13": "cr74Rfr6N8HS8A9EUcmyF2RjYpAnxUMKXLrd82Lj47SZvWK4UCntvvtiZBDHdoa3B7GDjteRq5Z8tYTViW62mJ6",
  "key14": "3V8BtEiRXwkTKRX22cSm5qLnvSuv1D2Y6yx3HaBcrLvR6H5HkuUdsiNZVeUBKLW7Um8egSKT37fsW8y7LcJiPbPc",
  "key15": "46c6qu3vexEi1wTh1MsYBYD8a8LAY4SWyCwnsN4tu134tVm75vqj5H1PAzh4AoTLU2Ae2DQCgbXu5Y65Z3jhcLmx",
  "key16": "mC9TfwnqLM1f6m4oGVnHsTLmoiUEN8xa6MSjskK7AK4T1QxBxwSFQahZNSJoaVHRTt9SXFr8kwJeXLH6XToZm2v",
  "key17": "jVCjAxhxqmD4co1KkDQ4GsTXKvFBQHSnadPbv25ECyeaoyWTAeZ5yPHPhJEfBfiU2ZNxNNCHSj8fhzfZVPkQv8g",
  "key18": "c1aaDuiHBLGFLw3dg7TrPmvTGKQdJeCV1jVkQYNMYXvTeGVWQKiAfBEYTNdXo7kPF5TtdWubJ5vvBsWfnqEoawS",
  "key19": "4wHdjT1ME1Qg6RhtZZ3cQH7uTxs5poFFJnyE3mip4aC6m6ajVW8Er7Jb7LJWfFY4aPm15icxAYPqEtgXgkzRizFQ",
  "key20": "57mwbt4oa7z8tULBHDzX5ssKniYpphnJBzibMUVwjr3aYbPo4wy6ULKBzzuD9vH2MKm2k9qaqXbZKaYGUrrJuV12",
  "key21": "nyY6vrfkhSsaPMVVrQ12TcomsDQSfjg1hA1DbXSLGTxLr5pDR3jENhTW6gNs36YoQYLzfsyAesKJSgeeJwhPkyc",
  "key22": "4QWmPw6ARjE8PezewuKhG3k7nkn48bd7r5fvdvFc5JXeC2Cb8qjQzEdiq1fvcTP9GYFryjiRiTG6S9ZV5TQrHCyR",
  "key23": "YmhrZci2XSzLmHWYRtc5TZdbAmoX4mMcgiZtTs6D5FEP18kKAF5uREtvSbjhN5TYU3q6pmp1ayznHY3Hv7sF67z",
  "key24": "4EamAxc2r7tWMrJQdcNEs6Ceni7QuT9bobyNV6JxTh1AXRy7n7mbUhmBQ4vbK86xFYEkJp6LxaEirsj9wGeieniw",
  "key25": "5uejKuKrFvfbdyqA9CpwQMMKZYXgoso7bQyzcQDjGNBVSCKxBUVExKZ1GBmxb527ZrwmErWYoYHspmBGKG2LYvHB",
  "key26": "2QS4Xy3XoxDfnmnzsLwbE5SvsNwrpbmRuKZaqsDfH195552sSAw44t3SD1cBX41Eyiu77obMdXzFquJDj6B2aTCU",
  "key27": "6TaVRWjEYc3DmDF1K67PuHCqh7Jze8WVkwK1mp1aAW5UngTaDactfewxT7wK6q2efKmSa6v49x4GT9cJr19ojf1",
  "key28": "3oa9YR7KyPrrnmddFmvQYYaPdtaJe5nA8f4wWcd7yQJtJ3obWGKwzhQSqL7J16px2Dq7y4vt5atguvVXeHW4coZf",
  "key29": "5cuELXyGacgpdczq4Qcrx5Ftqa3vAs5uUNhfuiwTAd3Kurzi2t8pAxwViAeTekat92J6hCEHaWAuctuktvEyGFP4",
  "key30": "4Y9XQx33fm9Y2CS4JmPC7fH3dJmxPvmv6ufh453v42SWJgTQzjo1MWueLLFQCX4WUDFvy9mGDGTpKM5sf8w3VxH9"
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
