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
    "3HHB7rzG8wE7LMcvqSQycq696nQhMrmj67HVh91NkssWb3t8tv69aNfsmTeGPTK2yuVStTrDYW61HZJr6SmSRkUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uun1mpuEJoKYufgsChyvAgn2TrPsorXhhMwKZDZBthfr8sPkU5H7KFNY8G83GJfFbimjx1ENbf9yAGrjBoVLmy4",
  "key1": "uQVXGdsbcQEEjU3U7tehwujZoCLD1CexQEYdTUckheH7YQ21m1qbAWhZL71rXc3eYxUftbdNE1bKYy2rGVNZTJi",
  "key2": "363Z4mr67s9zRrZVjFBmDrXidxzrD7NDLS9JEtbySS97oTWnErEv3xXhPqVWNHfRxRGW5kPpGkdrmsBcqShWw17w",
  "key3": "4NWGv6XKAtTU1SDj7eDqmmukYQ5VbxtB2BUpEpMD8i1EcH9WTPhWRyVDzdemtY3oSUZ1bu7yUbseCRPKEfEgc7hb",
  "key4": "45fArKCaFC7fRURc5PZ6v8wcroCZCwbL6xojh1J5NPSozitPhdhqwPrN4nZnherJSRBqXpmcbLtgBDoeYJtdgWTz",
  "key5": "5DV61tnzbagHkSsoHgQQ3CDwhjX7BhvqYnhPDc24rguXwb8XDoBVgXSaaELbbdiVQ9Lk69DhKTKjSjHxZJEXMbnt",
  "key6": "4gYrBxLZhC77MVUBnyTY6QQAcrFaSZ8vH8Y1rSXscsndKF3eBV9wABeyiyE5Kn9HSe3tZMHYNEMGbxdqDBCR4AfT",
  "key7": "5QBHhfvfGEtaVzNi7KSQogZLpz6fXgN77XVXzyDTxgr7e17szi1a5hWwKza2gbRm2ELpVizcMjtwuiGdFHeTcWMQ",
  "key8": "3KhAQVR7wXA7eZ856BHiVswaTdHRu53JhHmqTwnL6uSPU7s1LVkuEVASPsGEVGNshnCDAZuFd6e1LWdhHnbpESw6",
  "key9": "2mTatdCW1ZcWpaGjQXDgAocW9KjQ248MNUaTvwAy82khmpU3BmCd85reuhgtwajU9m8yrBMDcPZ1SsgVAeAWp4XW",
  "key10": "2mcD4uJDUYUbhFZ2ri5hky7yzawNDWmk4ePun6NBaVnAAe7UdcPfc6emtGzpzsPM8QsLym4yfdq47cVCV6NwZPbK",
  "key11": "jM6fohXMCe6rifq73GTjqs6cnHBNnW6xixHCseXP32yuShi7NL7QY6cVT6jZMtT3m8L7mUfbuF3VoFLtnkk5C3C",
  "key12": "3FdNuYmqqyzSzLaVh1sP7rdJLE4ivJxVWc8g3FtyahMHcj9Qskqubx2Cps7Py36frYmBLxnUM1xw7cZhmvKx8MNy",
  "key13": "3q3DvVxqaX27Mex5yhKwybbj3e7FmErMbT2RBBD2wxY8fJu83VApufhiarBo54D1joF6nBTq8iQJ7jXSqYtWJFjv",
  "key14": "62ZwhUuviRUxMSgY19xNVPFDSmoXWrnwa6uUHBv2Y3F7i3oVCmKUhY44dAwnX2sazGaoQbxgTtBJTH1xSyiV5MSC",
  "key15": "vsecqDHeGnEJsxdakj3rcLoUqo5mds5ZbeHSn6Fxb3pkywNdnmDKPKcCDQXftecWsK1XWh4FJNF4SKTfX9txJiX",
  "key16": "3CANdBxKi5EsQqZZQENtyyq2gbg269MqAAqKbKGEXzh37Q4fXSfuUKkkWrcW3uDxgYKiH23RvYF95zC1htK4nWuY",
  "key17": "66AgqRPuET3z38LdzAenGV5uTovZHkcKfdWxi7c2yY4fk6fxS1ZUtYWKCcrdpxzk4Pz3pkAhfgH3dJSKNHUdvTT6",
  "key18": "HQHTKYF6iyqxpRX6piC6YiwquhJRBUPp6a19duSUoMk9dTQTCVWt7hwnaPuyDVnsNnSNfbqCfJdo8MJAuU6g7a6",
  "key19": "5tBxsXwBTn4YbAdPUmchM2coaJKFiyDBWtaHWUuBkxPvG1EQ9kGaPUvYpm9J5J4KmLHDA1ULTqjrw8vK8icsEoF2",
  "key20": "2iseupsfMYDk6XkcwKMmfjA3eWfRPTM7NgHq19gNby6NuGQoA65WhWYEnKzaSZBQps6Fd4PXH6JG364gJRJzEpcZ",
  "key21": "uxXdQsydcjvHabbvQd7CdH63SVVWHhZSHi19FTEbotKf6bYH9qTKgnBB7kqv5soi8oawu1AufsqaGDTfpqWRB7C",
  "key22": "32BHPzaY4kvsuPVVtrbvQUr3yDmkLbe89Hth2CijxCp3diNXxArSZohTjAbgQRfAN3Cm4a9S38XJjSBk4zhwxvk2",
  "key23": "2tgU3hevgAWAmyCegUdF3muEKhwr9MLGRoaCNnZfzahB7UmsB7Ra4NpEBPJdx3J2NHLLwErmEERCKnwyKfSVuYt",
  "key24": "uxKPtv2wmJeiR2tyUtGqEyDf7bs1Z4v9PUMxLWvRHxFqVsSjZ3Vphw4JAaayRxD2GoTEtppdonL5SdmyftVWJcR",
  "key25": "eTVLrRwYVYv3d9MusrqAjRSwNo2QqRX7Db4C9H6nZy6Ufj7gF4Fc2cwv1iyG7rAij9pnpb9RVYsmxgJ3RRKi8nB",
  "key26": "3vi9FdKWbMQtWCX3FsCMA6C79fPf5xWWYRErJ7W25nyY3V2WQCA5XSJ35WDnFKNMXgUHcLeccj52ZisYYJPjKoTz",
  "key27": "2xaD1iZYrTxQZBPrxVV3jnNUrL5R9EKDqb527UZHqWiYLS6J1SyYijHXzmsNVg1SMPnmqgu1cpHVASHEkyTK7zAh",
  "key28": "4ptqyAg5XGnf1jB1Cyp3PsFJNoc5aNrbEvyVpZHvteEGJaKHxWd2qskaLiLTYEPyfTGoAdMhGb9aB9Uct3KLaJfT",
  "key29": "5SK4qgYdKhSPL2sqiRdTnMsyEKYg1NDrQzmRhrYV6Ri2FcK897xuKYXz7L91PSqXMAnjSsYHmeTrawbkJ6tAx4FL",
  "key30": "59dgLZYZ7T4eAaYMcmi9Yg9m7pJqX9HhxgevPwqfUjYh6GHBbjKVyDXhRfQXrBA1MMdBDYD1j8NDqc7qwyS6HVRR",
  "key31": "2xnkWbFEJMQnHH88NrDECuUKdcjZNwH7kdsacZ93swahBHSdXineR9xvWnm1KFYMK2go2tR3e4zckgYSumtQP1hm",
  "key32": "3Zab85zhFk8m54fEa31WRp4hHWPbea6yDaKd51J4JxZwNFC5MBeQ8GoGhSN7zrbRF9HQypJoxsCmVcLowvKxzQ7N",
  "key33": "43QC5HKwGZgNrmSAxVmpwWhFkimqYPHAdT5Ld8kmL9tsuFLLVX4ZYYfufPkBH9pRqyyxMhsCfNm87BsqaYUiqkEy",
  "key34": "29HHLY5q4ZJ7yT6zyuBc2CZx1qRNP4SRbcgmDsqWjtJDfzXddy9nv8aboENpFqnwVZr8qMV55esgMsCm3S96SPH3",
  "key35": "2NK4bAmHgPhGuoTqE97kt4o1eA7uLzTnswraBrrLjnsLfnRZ3Zoq16nZYNzd6bEPTKeHvU282anGtwn7SZE6p7vd",
  "key36": "44NXdW9na977Xnty6qZ7ftbCjL6i9s8FRKMXtsLJw4kj58JNZUWn6rTYnkDYJGXVQ7oajn3fYaZRNw7iLKKFyzqe",
  "key37": "3Y1iFRtkr8eBsyJEWKMv2vveU5uk9ciijAwBwYeVpEDL7jzGDYWaHZGi4ARe4nCgZeTNG4skgswxWNrpAH6Bc4Jx"
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
