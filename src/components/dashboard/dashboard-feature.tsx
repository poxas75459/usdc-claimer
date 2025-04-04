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
    "2ybUEPAxcEuv74WsmykTQeghFWTct5oqNXFPCw1BVTj763RRC2TRyPffQLExCFedtLQUv7fY68aLyFmLHHiQZWU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BE4MBdeyCfNVpPJUHsSWFp28QffcFVHSLZhzSpRMzZk8MCKBtwKGmuxNNGADwQgmJPmTPHhnYdVSX5n41QqcfE6",
  "key1": "5m4DWFzAALBMToXDneLAkqH37g8rF6AKd3q9j6aeVGf5WTaSozPjALF6TZctnXfnDAswpnu1pgb4AEBJT8XxYqMM",
  "key2": "2CcN1xcEDfC4XpmKKYBveDoEA8dRNUhtddP9Px1fFehSkHtTJKUwYBhhGmVZ54Y931sCtnuCqdv91dNSxScU8pCJ",
  "key3": "36NRCQ8KQErbUtmPn1NnYvLt59j7UVfh8hGFG9D3mWRNsdMZkT5wBEqVkMrUuFXkPKm9yEfE3GFvVkRC1vA2inQG",
  "key4": "4m9kWTop3jg51WcENDu4N8CGjKHZF9kq1rYiHShpJVdishuL6PGFPSVAsnjYG46tb2ULrWNkS5rpy2XEpYzmS74",
  "key5": "4KYFu6cxCTCgpGfCBWvV1s8U4fhHSibu31r7Fqsw1ci5FYRvN9YXYzphQESjN3RrdFAKSBfwq5LB4U57BW5A4KF6",
  "key6": "3cdLfvqUKYtdkaentGisG1fwCw2eTEYQa21eR3PovncYFNuNZiEu8mTYBikHtsBq2ym2DRcHS7WgfdZULhHnbY9Z",
  "key7": "5R3Jw6muAnujKhYg3SRMqJhvCSyeqVKp1M1vMG2MDqF4t4rkYYoxTRvuijdYE1A5kDTFD2mjXhJpXBgPLdnATnDU",
  "key8": "2Vsf3swrUtc9JaKWWeHzBV2Bq5pDKj4MYXZCY3eHMd92WeXmBpV4hKNcNJAhGwEqwb8ypwCJUMBtDQLfywr6jwxZ",
  "key9": "4sJ1tpgSLpdc67UJbMr5uaDv5L262TJVUhv2g9WYyKSQJvmmfZ9ZvpA9D5VUSqkoKAsbvp6cfZZG4Dzq7ncD7BPR",
  "key10": "3SANCCKPZye58CvKp3JsZ2Xihcq5TVPenFcmd78UusGM4gKfRRcwcim4REFk5CbKiEUS14W25C6bkZbsKeJvnqW",
  "key11": "87WJpT3PR1Q33kxrKNkF4o9ZEboVYM5VV4GSMnSAtrQSE63Rt6igEm1MsRcqXy8LehF4r2yu9ALghNd6yJEXLCL",
  "key12": "4QGEfKD2Ade7wme2Afg1q5RoJ4RBBDi2iKwGxyoi8V8sXzgx1LHHyYsnGFrSHk3PPRPBnHHEW5TfR4mnpDWL7gvt",
  "key13": "GLHiHxJRE1M9Y2HdTvz9nyKjxQvxePg8tigb3AHTM4aV2hRpjGvnDSuZqSBwcJhbSrjy71xZxRyu3tuXbkuRevh",
  "key14": "4M1FkMAt6jPP3KN9qAUqFtVXQNFDffyAHAJk8ABvgceqeW6btmko19M5npjJQrJYqmvPcinbkYN9gi5TGg4dYdeH",
  "key15": "2ovsS3zZqRA1FDda17K6PxtwbbordDqRou7WEoCS1q1LeEZhijyK4YUmMSQgyebgezJ6NVUJHEiCrpAyjA8SJNqB",
  "key16": "27FrJtp5tTLnh2oUYcZko9iknDdP7fcA6TqDdAfMPvc9XHHHyELLg5wqeUowUutXiKXqCEqLfuNWEpdCA6x4HQjp",
  "key17": "GCjajPLAb6ruASFGhPX4TBKtAVowG62rDjF1UchLoNgmQxMFyN9dEyMwq8jfXsfBGiqe98VCi6NUuZgT9BNBFqS",
  "key18": "wpjnrrFdGh14HjAf4C7bMKja7RTEdA4ouyK14MnTGo4J7cuh4Ljj4dSRCAJ6WJJSzQj7zUFWcxzX83BP9YWgr5H",
  "key19": "4n3aHPVCpTjLnMmrDfZvitdvMjGi5Sqe64wBdeCbAZQjAfny4tuqFQbHdNMuaGkRwQG8VY1sjwzYcnhXiZzTMnAs",
  "key20": "4D35kBXQhESD1yyCuduBcvJFb1ud6gyNLhpiPFwrpH4cRwd2AwKzEVH4anQA5PjRNZvcSQJYoAiREP8WLPpDugmV",
  "key21": "24fC7ZR1waerhgCi2Sx2HZ7YtHRot4pVFmLskZVa2TcsjxjgFscePnNj123Rd6SUPynwhsywCKVUQQHuiDzpmZhz",
  "key22": "RPN8H6b7bFojcjUKKe1F9KuZp7fBvWKwuSFT1ATEHXuyZYSB1rTuWHjUcmsESzsSdLc1UH5QM3ZeeZhRyV3E8HU",
  "key23": "5QXfh81L8eSATH6bAYx6SjuqjY6LeYqPT24p7row7V4dbN3qyKriPgPceyBWx2DiE7gDQQG5YGyBW6bXAmLNMNJJ",
  "key24": "5vNFzyqE74RUx9Yz2W9n1WDZCMkX6XdZsDrskwjPGVSkDS4px8dxMLoYZD1XCCn7YFd51nTxB457aWky2ZjwH2i9",
  "key25": "42gyqZNmWLHA2tuDTAqZbNun3hx2Bp7aZYAEhixrNVWknqr9hEdBcSXoxDQdHne3GmE1UF7SjWV35huWPfNbpGag",
  "key26": "4bVXCyPK5yA87vevqyaWFWaaAzXTH88gwv5NV1hBL8a555xvH3EqYq5EbnJK7uLgRRi9pZy5tXyr9UqjsAPzsGgg",
  "key27": "22VaEak8HY3GyGzpksoN1fsxAHGbEXtHAXEFR4yC8RxMhsAchWRjXnb3wgW6nUt1cZ3aNp2bioK7cT63vs8No3pT",
  "key28": "5mJsWWPdopf1Puw69V7HHmj8j7XBTcYByGA3kpSTUYuaSZNMM1htbPZBRuj1Tt7pdRsz9gCLFnsYqEfE5gnboorv",
  "key29": "hxXo7sPro9KZwKpHWL7L92UXXNSnqEu3g2CkDXUHnxeg79Ao3dU5MXTws724a39sGmhckbyPeBmqcHAP6ycFKFD",
  "key30": "4rJt8GEBSSMHivB8eG6vRvbh836y3kHa25nCdVRdNbZtP2Zwsy2JTyLPRpCHftxLYDoTy75J6RebCEZiNLJ1Zh6f",
  "key31": "XsHboo3rZpMZ5aBR196TFXMHxuFC8HmZse6CqdAq1hMBzVRKHWJxTUjXb7pKbKcaz1VWsezNzs1gxiHGNBhef3i",
  "key32": "QmUFNf8PB3172ctwroePH8EpdWApfnHaiCUVTGVe66cgpzyzUYsUXmguriTF82SqT5JvQkpQNUeUR85YUyZiWwN",
  "key33": "55rJWZkWypdTorLBfctQb4eYZj1PqpV6TeEei8BM32oggitXabSRbQtgS2ZgomCRZyhavyh8FVxc42uPkL4VPsp8",
  "key34": "hQxbcqgPnrEk8bpgMGJeoZbnhhCthRu6UvsJdNGS9yF1pD61Ga4bxuv16F5tnD2GD48Hx5mfiLRpBXp1jmZqzXs",
  "key35": "4ektYLWW8uWW6nHHgyMP1WGXm6o3BgpfU8hwwajR1bGdG6Dhg58pU2uKaJTVzqnM6JrDi96ZFdeYAR5y9aTbpz6U",
  "key36": "4wULiL3y2fGcQ7KYdxWh4Hx6rxCuog2CMRUQm9dMnhfVUxrjLu8r2X3CKjQAQyc7QofnRxiHRcNqZCJjD2fZ1mZH"
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
