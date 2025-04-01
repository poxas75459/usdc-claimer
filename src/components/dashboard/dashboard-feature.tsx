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
    "4KT2xwynVQjKiLYUarGs5MXnP8ymVXAsRjPHLgWLSToUaFc1z7m59Xydd6LESoWT2HCxKeSbTmxir9oiQ2hNCdRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYDEgVgQaZWQKBMYrmmezbuRu6jxcGbrwSSxdbouJ6SQPhhNswFUmhxhNy5Gp1E1rc8d9kYPBwhK9VWMpjJvC5b",
  "key1": "59AGTDcHk7wyUXR5vZYcQcEvhBEpHWcbVxreCCEEKFdUZKE6UyRWEv63HTZmpd5PDWBN75L7E2ujFAxyaJ14Prx9",
  "key2": "ASMcZ4Z653sW4PhBJQbQT8fhJB9Tcx8CvMWHHHvt2wbdNiWNdpaLJHPpZjtGkD5QQVjrrTi75nhHUEzfXzHxE2d",
  "key3": "33fnKK5rENQ7iWQRA7i3xP6KuAwNMHcv7hhL4PADMEqPw93b2eaewXFJ4eUJdrKQdVaYnaTwtFjo4Cc55iwAYfU9",
  "key4": "5s3WY45gptVfGZQjrCHrcNBcUG2ber5Brt6TR3kotWCjMkRcP2U9inufqWLv9XGwrty4JNqhX1mY55pouAZBVxdi",
  "key5": "2qpQFTV7RhTrjJqRQHzEz9CfTaMtmwWHBPsHgxHcYjLkQu9ayiu2v4zgW8cWmbgQp2u6ASEgQrroeH8i1LNYSj27",
  "key6": "2XKJAFc5ZvMNuWaPLzB79ResjUGikJA2w3t4o3Yb3CSGbkAz7sWiqe9eLahpzmcuN13rhhHxQ3XYTciNPm1taZLx",
  "key7": "2j8ZGq5NjzAS3CyhmB8CTWbouKk2NATAM6axaLeHyAAkBVia2LtAwdMxsaXWFuX6XUodkBR3yZxQynbhho5majEi",
  "key8": "3eFz6VGEqBYMm6yVUgEziCTmXRapmzq1QAHjrzKKmKFPfhdFgnAmp2Q1AjV8rHLwrb5d5L75BiiLYbEwBp1NT8nU",
  "key9": "2CCcWWBo44frdNjXDaaqXEoewabaUZhfFRdSkWiGxtiiNeWiwr9pYD6EMv5S8N2A7GGbUETnbS6m2yhqr3sK5ZST",
  "key10": "2KE1H2WiiZrABdJ5uydoVM7jzFpAVzJGkJkheBpby5Uu2X1qSC2HYHt4sPuSXrxGZ8kNxJoQdnS5EE9aRsPZz3hZ",
  "key11": "2Z9pnywuy2t45aULG3e58r85N9LfKEYiZstFEKdTqewi7bhtpMgtuues7gPRpASfWXMJdcqEihsbcq38Rt5H6wWz",
  "key12": "uhADyLkftpNMvPGZsFvJCGyGXP1S32qvUvtY8VByzvQCknNHe8KgcLaA7eEiFACbCMWkfLu4UKvocdGyCKWdkZ4",
  "key13": "4v3cfzurCaswtzq7tR7w7HZBgNoLS2HGg5ZyMnpywMcfR8ZHEA2fwxu6nzd5G3GDyVhmUBJfLdfhxsJQ9gWepe86",
  "key14": "4mrF9vtMD9U3jUr1t3b5iorJbyqaVFP8DbS8cDVHSNmqLvSREdStuHdxNraA3KNDYEvRWzd2GhkyiaJQtuo7SHKq",
  "key15": "31fMymiFZ6zpTkrxkrFVHjXfdcz8KSp8up1ESkE5bKKaWHdq8VQHTFt7neCjqDg4EenmMifJaz5P1xRrjUcY6gpa",
  "key16": "25LKaFVSM9wMxed8vCJLVxaBgf1cPFyXchpUjhEXYYz2RvfQzCUopSbh9fzroyhBFQmgjRr24FgSoBMjArcb5B1g",
  "key17": "4tKZxsfbXvxg6jbuzhkgfUBAiaRTHaNAhQX1KpGb9EV7mHt3ck6MKUHi1v6Pu5hzD7TPtB6anZgFG16vUsiXB67Q",
  "key18": "gnjzUkJA3HAN3mzWijevedBqo3ye392KtcZaP6fwzF2gCFQEoYvjfykBqznXQ29ypWuJmwHd75mcMbKjjQ7Wdr7",
  "key19": "42jVf1sk2SBNKzPAAcoUefb5YKJ3KmHnG9e4jXFbuBofeoHs4xEe1mBzRMDDXiH7uZvqnXxGNATABMGamACLit7",
  "key20": "56b8QQrY7EAWPRzCY6fuUV356jfDtmhg2NvLuDN6Z3RbN3ioW3K6jcKDyd8DtaNm97RKrLDAyig7KPcmFj4NDUkC",
  "key21": "49EdMwGddw3DvU4Zx26QJ2GwK3QRm59jiAj4Z7n5V8c5tuDvXphWgzCnXyiYdw6WbSrGA1SBy6AXGvf4W55Yndt8",
  "key22": "61a8DpypGjwLWbWx6cWsgkrpy5K8vCsV5bV1d7LHNSgFNqK1p793B5q2BmtRJXs3eTZe8BnkCHgUwmrbr7G3GMUK",
  "key23": "JTTPyuiyswAgocUyERUGhdwSCNUq65Ppy2yJSmrG2EVQ7uK3Tp483eCPpvfjbuc62RUh2Ab5LsqAKXTv6pCU64G",
  "key24": "XJQBgfQAocpRktAfn6P43R7CuKzSsShAhwuCBHFbn8ZahpPEKesHWJpGzgiqV5JM7pFFF9jjVqamejiqTCUgUrW",
  "key25": "AjCz7qpEmaShvJ8ownJjTUeJ4cm6LBzjPoMvpePfbZDbjsiwQRj6RC691W1GLLr8Gdc7zrZx4VyBVzKtRyFeRrN",
  "key26": "3gXN9ahWs6BW6VD9qqaiqoBb9famV2wTNVAt8idXgMqDhqpWbxP8NRfehkMdCkfSRoemyMvTiVEbvVEvatUwR5KR",
  "key27": "vCu4q9pzFSXkiTaELQ2YkG7jfiXbthHt2nSBzKYsTcPrfyRK9c7taAXf454gzdHsRm3gbfSDntkSKrJ1maLx7ny",
  "key28": "3x2w9dB8dK48CNgbaSwtpxCZv8chg3V9WD5YuikULDmig4YdMbB4gBESBEfZk6Jc7ZmBUqDD4tS6qD65nFQB4NvK",
  "key29": "MNuPfaS6qGsjka5iM6J6YUMW2z452jpd4az6aeasjU6QVcQ4hcKGxnHmR6Y8oeG5ArAHbqY71gYRC3nCu1oQ7J8",
  "key30": "HxtyWVBwfzPvRZLzw1LvqB5YCKu3MaTLCi8kN9DMSc8S43giCTWcR2SL6T5pexbJPJ1m1SxsmKLDQiNZQ41iXAg",
  "key31": "4qHJnLYNZfvXc6oGqfhV8x7PaTHze3SEWEY1L2Kjup7fCdL1huBxNtm8uctNdPggguncZBxcKE5Hi2xgeVgFXCcb",
  "key32": "3TdMU2YEv4jExPsNah3KsLdVhgHF31zmyiuo6Ck4Nq2vpoHQweAQ7chTwDuKY61gF3fCrtmjKvVYPHSkZ7gg4FX5",
  "key33": "4FGHTcpZSnXwyWnb3JvdVf4xn9MxD8fC1rtx4dV6FojD48qHS8LQzC5LvdTZedCpLe12qpHY26Uoz575h8VXwdpS",
  "key34": "DpcQk96v1Ms1meDtzMaZSwWZG6bmbizuM5t5qXDXQfwpKX7d3c9tWKvgUid2Gh8iSNErJFX58VFjms1V47QVCaA",
  "key35": "3DUrWFBgULw8zAagGVonTGW6pd9QdqpGtNi9VUp58jbxbmx2twt7BgvSRhFWi9iVxCHWPeDxmWA5PBsEpkWPcf6y",
  "key36": "WWXUsACKdCVmxAxwXcYAt2bMtnTHawaB6uWwHgPCRWfKHyLpPiZSDjVUyZUXE4Ja5Q854r9y9eHVsXAr7mQqVLE",
  "key37": "36RUAPDEsMgfoNacgr9RLaheiGmX8NnrpBzSR7cTmcjbEeBZdiT14Km2xStXYYpDPqKatPS7Wje1dy36iSzAa2Nr",
  "key38": "tTV7tfBXZuivikskLFkXKfvL8ko8BN3UdS91wNQ54tLz7Ri1aAWEChHuxWZdhffsM6SpJay9Z8xdnVDv6EGfrpK",
  "key39": "3DxXHci1D6hpR8XeBQG59iPPQU5orfiPkBGQpaMQztUuowBWPR3bZtkmjcvpEv2QrDuyzwDMnrK8CmY3emELfUZe",
  "key40": "43HBuaqoPcRrp3g7yPcMcr5bvHG9QyXRs4bLFhBdRdoWr7seUbPsCV1gT3Kp6bKeGsjfjmgKcL1gTdyjMdZPv9VL",
  "key41": "3xz7EmjKuVidYv2PHQsxbDUDixfMj8MvDpP9vZwywKRkXS8oX1UxtHT2Lokn7F5uFrjLVCrr35c73AKVmrM7zJVf"
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
