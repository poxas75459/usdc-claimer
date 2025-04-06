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
    "51xwhpCFScEWCb3kpp8gLrQRKDXMtSPdeCBQpRJwijhYmhLw3sf897a6JpVYGwvzFHtbAJVFLJAQXruZT4WWGKmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TqP3H67TdkV1mEEFPn2Cac9EQWAnjE3GJxnMjCGzBz3BKf9rEpmpoVWYcoR2JpX44WzGQhu7QAVtuMTMygsyo3R",
  "key1": "64QgtxoSHNXhpYh9EkaTaJTCKKaGuuuoaJyN8WNJLsMSjFhNSYeNhd9EJ8NpR8Vm8pGZSvjMhWesKuQGsJPLKKDh",
  "key2": "5RLKojUKodmWemUXCfjnX43q6GAp4BEf5XMQPKN9P1yB2tdE7xsB5JfrYxKiZDutEFBLgT7thTeDSkRfR5TKAtkf",
  "key3": "eTstka8NdV2AZTEnapvNGwfcuuGD3TnMncK1BiUc1SK8wTBKJTqCZkvWfJgrY1KDMgdcogwpaTGwhNZFWmgUFcm",
  "key4": "3nkUDFRPJg9FCG5mGTssja1tMMNXAKL2rSizakBuh3YiJc2bQNpqBjiUquFeYoAwKoigXtYqu32p4Giao7fzfmVv",
  "key5": "4j6WDGNMn9C5ybMgHLgAXDRATmZQnDkVwbLipmsiHhCCNWngLhsWoHE6aGCS1TqnjiTx34TF21P1ddt4GP1KhunT",
  "key6": "nHrAw3t7XeBSk6hiGsKXi1wL5vCBy26nYhdTVwfB98ACX2j7yXKxvgshKAnz6vXKSDwedKo1xT7raytE38zvkmD",
  "key7": "2ubNxTeoVYFS5xVSoWmdFgLBZh45aSNLyBmVVA5HvJcAMUJ8Fd8hCEXBtcN7uq7xTj1HY76ZiHkTMk4511mY5zEH",
  "key8": "2V8VNiqaLaoNgdiPFMF4CN3AnVmXx9a32eopW368jz4QXXtqWcfXPkTmWFngZJNwuc8nf32oxs4kHd2qNKWenQdj",
  "key9": "jXCpRNAW1qBr1EUa5qnamQP8jqidn3ehjQJn3i6GpQ6eZp6KMCNYRiguQtcxVwpgPM2pLAgqhXveH3xrUMxCXMX",
  "key10": "3UjHbpGRE3KG6h7uqRosCWSyi2b9L1RwezSCnSrZnYVgSrhzDwCwGtbe8ePJdo9ghsmQBTQBHQE8aYqKPHRd3YkU",
  "key11": "4guvv223k8Ck7dfE6ewFzfyBjuGGA796krwYG3iYa7BDCTFjhAVL8i6uh1LgYdH4GwaZKwobwnp21JafcZHd3kfk",
  "key12": "ARF7EkAgCdnfNkDUHvhvVYcVe3TRN152Xmi1dEDFZ7GvRcD5sTzczxfaygHkfcXcsUTw4Kqw9Xh8gBKQXgyiRiG",
  "key13": "XwwWKSfQRFAqhryfeTVvv5eqGnjXQYGRjxXbG6ARbRtqZQHPgudZJJ6MPWBHB8AvRcTxoSn7VjmpWWTNZ3Gw6U7",
  "key14": "4e9nHTkEAeVSL8nzQzY9ozTnL3Ns3Ahxp1MMaWTDZ5NboTeM9n7QE7QWpv8KDCEWoN7a27xP77BCSLF1rcxh47jR",
  "key15": "2WkDyUFeJxd8JcZX5k2hLuwm7neg5YcCfMdPuP9A7o4aihfuapQRuF54zdUuKqzbor5jtg8iXsuL2bLwuME6zqPb",
  "key16": "9aL1fhoFec49penNUKsQ7RMk4Z5RzEnKX9K3dWK296FuWPpLJNneJq2sjRhRA4frnWFycGmCZtGH2DVy3qowd8J",
  "key17": "54Cvz6Q91MLXftrkkZTotdAiBNxWMxye3W5PyQYr99FepDJfvmA2F4nKuKMz84846gcvxT1J5HR9azujFW7YDNPU",
  "key18": "JNNPhnpkoofnPMx6Soy6684uyHxSVdsbeptBs6qrYvXgzAoG5a7KftZXY3NCURPGP89oZeaNux4sRMRSTgr4qaS",
  "key19": "5TekADVhRbWuqVZ1ZZ4n7ihegcjTh9eKojNWSo3LRXSbxzzg1PQrL42yKgGPFvpzDCmG1Gkvrp4iYs9kgfCNsgd3",
  "key20": "42gowSwWgwxRhAepPHMNnmmXZX8EQGDCJchxop4StjFFWyEwUPqH7Gkhsho27e5724KUcanCTCK6dnTB31B1ioPX",
  "key21": "5Ps6y8KpjGP2ZNTrNnSpgdu3Dn6kLh5yy69LNh9mm3Mid8Dv3ZyiYm88pENPiThYyd5Mtq1tciYpNJFtLCZ7qqgr",
  "key22": "4pMwUrcebVGUZ3UoP2neVCio5ZM6JjMXJ3LhtKadVamGTmpENXfW4PqXtC49MdfMYB8ngx3QTvD2pq6X5akkzgfA",
  "key23": "2RrrX39X6kbLYtyUE6hGdefMX3R5qzZ4xETmMDt7oD1WJfdWNH1BBXwwh8uQYwL6xjPREFmRsff1PoTeBLEYMT2P",
  "key24": "64adTYW98vQcjkd8bNeCvV8LrZRSbqA7ZEZ7Zf9XpanktY1SQugsFkefgHYs99Fv99GPPp7rubCbRwURN1Gv4Y5x",
  "key25": "3SbBSPdxp5ePZ6aTDo9DcQem21Lbfc4dnqareE441zkDfMEwGGx5d5dScn9HibTrzw5jnFjd1NMDpKp72h3XrBvv",
  "key26": "37Adt62brPJyKLXVBpfVNQMaPvGKxE65Fx7MLded7q8GyTqJBtCU9oC4c8JH5Z5c5eLtgW4twkuPvCZsgCZkKuQL",
  "key27": "csp2bHu95BDVmi4HhuP46xbwpjrViHiiDg2ajsLggHmtVUjnWTTu4o99yeM4i2AdEBrYS9DVg41vhd5UMLRxBzA",
  "key28": "3k9PhEraRjVsErkaSdX1YNbEDYiZ88zcZcdPAFrRhFNDxVMKbaXkHR8cYaiBkZeLj7j8WBBzeuP8aTX9JPTMZieZ",
  "key29": "5wprchRaFYtTBSqYRWXancw15tPykdnFjBMwELRSyCCfmhxAkvSNDArv8bo5UdsJC7kRiN5ouj6xjqVvm5Y3XzfU",
  "key30": "3Eur8tqMLHsdip4hgBkcZDDGCWZyXCNKtRdNJq3kvDaUjoXaERteg211actiGM2kd5aH1rgLjMcXwptWR6o66HQ8",
  "key31": "tmWgQY92u8SDr6YnzLHbJkiXxBPntW4HDdK6KYuqzGbf1xtHonA6j61d1Xns8MNJpYL3gmXY9QeQQa7b1n1RxuV",
  "key32": "8F87JdZpXUmxfTKKxvxp6yGr5xYTZsArYfJZP48Qbw3J95ASCGC6dKAA6JbMnsZMQVLtFATUYdbQv3PqtSXudUT",
  "key33": "2BjvfNENXrLZN4F7bVhhKYZ19f1t6sNMtHEGrMRsUFVwUwdSq53wGf4V4uJK4m4s2wMNEwFLE6igHYJ8HAZ7PfW7",
  "key34": "3ZhreLTptUeos4Zieq1fujqBhzkY9HFdGNErgNcG6Cq2xo2oq5GjYKiCRNzZ5FZgkT6Jjq8mvh3DLLD9rQCLGimP",
  "key35": "3yy6KDseJx6dw3SYAHu5y4gPj1DgWDfwMC9FqaQUAeTG5dRJeHdd42AfB5DcYht5QkhAi9QDrYFo5a9HNNZkPivY",
  "key36": "rDCRbN3CfQMPZC988yDmCX6t12cLvyhv5ieyR39hcGQnKBdrsodQ3CMbyQ1oqqdXpbW6D5KPDv5FHBfFqhNqWmM",
  "key37": "3X9gEKDWPmw92HJLWXM9cJAbDMHEAH6LnMWueW6Sphv5FxJC6FUsrCjDZwLizFpPbFq2xiYGp2ge2nu3Lybv439Q",
  "key38": "wAaESgX7iB5KknV1mYxi4KSFNsUrw2jKvybWjcheG6HfjnPvAyUSzzY9faciyTgyKyX5WmbUvCigZ1SvQyp5Nea",
  "key39": "2DK433Za86gYHJc1XrfKeJ51uRugwtYJhhfs6PgeVy5yj2xwvPGoitvDnJvBNqHCf9kedEjmQT9tfGMSuwCGAahi"
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
