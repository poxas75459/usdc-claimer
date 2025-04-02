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
    "5V1LvAAxGueD2V8NDyL1o6dYoQQuK6sCsaothHF31LFfHER6PW59KBtruVpJnBKYyfSxLHWopKPvHTtytTiBJ5Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xwL3yPgYfCncG6cc1fHw4FqAsKqcFACZYsGb2JhrFM1RVKdJvt9qb7fi3aPsUt6oSzYuy8XBznRo85cYs6MmmAg",
  "key1": "3e2xwVYkEL6kAuYNz3UA5RygTNNLYCXHDk2jLmwYkGnV4YZMyjh8B5mJEBnDPpt8NfvKqng9pCDKjGmjdcbhezym",
  "key2": "4xUhP458QjvrY65K3aWDmrUKsJdUmvzgtndFdvDGaU5KyDJgTS6wNCwpzp8QfYjv13ku4AM4t8bdkTiXQeXUCDWG",
  "key3": "3da8UzdFFgifNBrnv4xnXX46iyW6sgoEpUaRLs6PQKL9Hiv4DkgwCqY2HL94J6JDoVVfmKLWRY3MjUz2Dmhyt6kL",
  "key4": "jqUba3UEE7goptHo5R9xCYCfx7EUh7tPqyi1UQmBwqin455xEA12mrXztYzTttr8oQfPpzEPFj2qxBHX48hQDSE",
  "key5": "2cRXw9GooDBjxCb1jr6G489wbNjR6mtqwFmrQSqVVisyWkhqVtSigQEHzh7kbiAncSEkSo5nRwF5LxgZAm4UmSiT",
  "key6": "4de7QepbpfnN7YumXoUf4rkBuUFfDG1vWdUde6qn7UQF5c9TEAqhtGuDMNsfWKra4uU8Z76ZWumcEStXXdq69VYJ",
  "key7": "26cGEKq4FuoD8o6v7m2RH7AUugJQBMPC6JLHUqeoFbV4RmxJo8T26RjZbfX8qf5PmJRTwwrRwhFuQAxLDQqUMTUi",
  "key8": "2HtTp7Zda2QFnumxarnBYXvTkiMHUvb4ysnZvXm6Y6U2sajyfEcE5dosVumwXsZSZo6wTJrftyPCxHeWJ4tntK3a",
  "key9": "4gZxvdkP4xnLfn2oLWsEVdvD5BqfTbXSu8BzjYSB1N9RMfMiV2myDLskLNPbofyYApAHdyLy7Ri1srbVEP3q352W",
  "key10": "fvHwedHr2CkJ5rz9oDt5aFcQMSpCNRMVF6EsmqFYv1H1jhc9xUjKmEtiJshpFqKP1YBWaZu5vPWo7EFZP8AjF1B",
  "key11": "2b7HVb7PjDUu9p4fwY3btppW75gdcA5Av1EcqvDCqNk6dBgxZKYRMrq8b4PMirnQxeLapAw6wT6moxcKj29cGF1w",
  "key12": "3Jvt2bjwFA5eYRE4hUqzZfnHjQsn9YrS2jbuoqqL3XPN5cRBmDE1FSnxNXAyjWyXEmAzeg6JCmy3PmMNac8pUwbP",
  "key13": "5FE3CXHVG37a4YoAHjjzg2Lte3Z3NQUCXvpBAjU2zT7xJv2jynP7dGAXVhZWtZqhhS7rffTj6sPkWWn3QCUxUiCK",
  "key14": "3Diq5hrgPHTP7nKdjoSA1isecnTm2Nanj9U38PDH3eWkuPKuLSwWQP6xDHSB7xc2LeeYPD8oAZyqn3WebLAHL9g9",
  "key15": "pHp92qj87gqw8BXbYevX6sTV82CeY4oCxeyvKsRasyacyj2EBPEpjfNYLqwKU3dVPkEaPoTNADHWKPXrUbCEtDk",
  "key16": "5ExQoWZkzqdLksR1cFfEpeyohs1CFAMgi7mKr191htxuUyoXvWT7HjMimWtTTmvMXcMi7UBLkLoR97UjMnA6e3bD",
  "key17": "21t4BHksygwPxG6XyVdoa6UwraHeurimvBHEtw7fnJe8yKZsfwW8JjzHqsLt8stKatWAXMMswjASmhSYPrrMPEoZ",
  "key18": "2qPTouWp3WYWHDQrPkhqJpt9SqmcWZoRbQE6ACnDhQuicSbiqotX7QV3GYTaPygLk2PhVwK6Mznp2okugUUsKfVq",
  "key19": "2fnRkpY5wYLYw9TW1KdpxdKi6UnQuUUmSLcJ4E2deGVe1krVA5oxUo9rMVkbX5FrSBZdj4XfgLUa648ZRmJjjpnv",
  "key20": "38Y2FQd1xG6B4p3k7K39G19RrsvHz8vUxigbzLNNhMUUTVxVJWHos9aX7Pk4aRXBr9Q2biqHRoqC5FYaz5SmLk3A",
  "key21": "45J2wNcX6NqtXvjwurnMKP2TS1hcDBwYU1LivkoVdigYxKYQZbM4jBDL8j8gAZii3t1MxBtAEtnCyfpDubSrwWgL",
  "key22": "5MGoZmReL7MaEK2J8vkzvqnpMUQUgGgkV9WiiPqdmLvSxBpghRTnr1CoMvMbRnZmGfmRZTqTeVvoNTxvTNvK1wHn",
  "key23": "4BriGGjP9RDfC5bTvFbZTtRKeDVYtKGvfqQS3UmJMQN4UQM7evwuWaQBw42NaDCFWWSZv8GXhsfkjyhAqy1cWx1v",
  "key24": "55dT9me9A1H1SmRTDzRiv6yBnVUrzdiHMKU5omjZgbMMjAnKv7N9tfRydnaTgdbEFugU8f8d69MWpr3QGzjbLLHM",
  "key25": "239J844zPyVeoa7n9bVhjgFFY8qyGgsuNoeUawPEXRJ3MJcEYSqqeyJ13jnGdxNhgkppUWrghKJyxcR2wFFwSQFQ",
  "key26": "5xUVuyUScDbSWs46jSmPjdwFckufMZHSwbMTZYDJJFuabpyYAxxF2Dn3gKNDVpNjsttYtFxwFJZP3gXBWaMQSDHu",
  "key27": "4CpZnHaSoMuiApbevJXG1GzJRxgEEidKLbLgNPpPeNu4VEkPTmcr5fXko4LtGCQR7zvwyxSmoCXr64bLTGYfQV1q",
  "key28": "5vnG5Ji4P7ag7TBiH46GCEgJYw26hEfVHTjDphkdU8ALQgzZ2WsqBsCqu3L3pFRUVaKytvm4jvEkxETzGxBj3RZE",
  "key29": "5WSAaER2tnDWqHR7HPYeNoiQff2DP319UZXaCd8sqKmxit3H6jTrWt5evceZxs7cpjNz4UNW27BqSbT5h4VQJJ8X",
  "key30": "39UnWAL5x2VrmZvbPevPt1WkJzS5BDL7EjwpzBRzpq34RAKmNWnmxCGYvbjDq4JaZh96DPjjT5qi823fZjBzpgVk",
  "key31": "5F51p3pJQzW3zW6XeExvctLQnVNn9YK9U1GZhuTZPNpfBmPi8W9rAVWvJhaVDFDCRnaXLaocu4A2TTg3AY9gXAe7",
  "key32": "3BtRCQFrUbPZLWwsr3d8rHhn5qTkHxuwpDDELhFDU9EGiEeucRgLVmVB9D18YcDoQoZabvjPFFEffPw2TnLUV5DB",
  "key33": "63oKjsuca37pgCJGoWR7rVu6YQjgAwRyhcAcZtWvTCWR4Ezagd9jXi6hJ6Gd1YxacfxuCTUjDzeMtFWmWkb1USee",
  "key34": "3kR5gh7sbuZWCtksCyrNLhkNfzSWzHDepoNwpJTE2bEt6s2iaaGKKfKGTZ8gmUySekJW2pJEnT2y4y7Z6Dh5pzP3",
  "key35": "4nqZVmASJ4SvKBVVJTRytVDapTowVqhpH2qp5KFkHd2fKKhJ19rQk3DCFKdNmhdAUA1NSaAQftS763KZ2p1jfwCj",
  "key36": "59Juep5zHwZvEmHnza9G3k8ye1qjgQeQS3dCi2MCfdg8beLM72gdKVUxpgkLG2CsokpgmCtuXZAcGci1UyTcfnV1",
  "key37": "5eFfnohtupwscNLKtw1hC6JTLaJFRNYBnqgx2Cy6PpUjqYYmpnbFquXR8cSHKaepycgVpZ35piEf94Qhe16k94MG",
  "key38": "4H4UBR8NxEf7Sn1HzDTmxmT88LbSJ6ztMWvoNEm3ySW8oSuHqoX7NqyNNJTmAvkGTohRA5UsGUBXLzmyQhVCioK9",
  "key39": "3GTMAwQEvaEULPDMRERTBWgZmuC6YfifejSwH5TjwWkSCRf1vfSFK4e4VzG1zbVfnb2xSXtXBCbng7HL9QzQgSFw",
  "key40": "5TNsxPh6Z4fX5s6TthUUpyeNAxWuHYiUnJQkoHYALNrmwwjtRh7jM19yCaoPAuqjbG1mhZ4CNJCgFNN9x8gV2ZwQ",
  "key41": "5Egdep6YExEjPmACB46pYx9UuFAxkKvdQtt5tZfj6rFGSHGGHvaXXLBY3yeiy7qfdBrd1aHh36qBLakvpwwxmAGk",
  "key42": "4BHHiW6KE2nBCVEcYqiKWmCZG4hd8usc5JhPyyEzoNvXXew2XrBN1MjvkL4BrM5NGpBxoP5KEnHGh37MhdBCXkLd",
  "key43": "2gkhvY4F4TuDN8KSBfbBNJSecEaiMUJyN2NZKRFLqj3tKMhML26dcLJHH8tDrTdGSKhpr1KMyRA436s7CiHbWw3F",
  "key44": "XqcdbDkQAMDE6NZ6iT32dFNoyKqH4z4kM3qVcYGskVBPbLWWkP3rUf4eX8pojjD8DY4MSnbGJgX7HfWUXzpf8sk",
  "key45": "qwkUHNCHoaPVTcZCM5GfRDGhMB5dpTLrTofJe18FshPeC2htBcKrAQby7uUNWB8q7rYYbh6X4erNWoUWDfop4KW",
  "key46": "8nSYcDY2RHTy1Tf6YHsaUvGe8J3WSibikKg4JAGgaayRVvvSJGsBbxdP9vTLu69irdkgTgEyM7giMap3vE8sBKB"
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
