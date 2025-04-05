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
    "4MhPEd6pFpiJSRw8YvASiUtMqAMPovzEWsT4WGyPMyb3dp6wfBxHHXG7HoSYbq737ExNjKbQcLhjyzNVLyYPTxuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Re9mKaCcmfpRc5JdWzCctvyvJVR6yHdsL66TRLv7bXA2nRxWNcnJBNoo2bygbP1pc5Y8q1RiYTEjcfyWDzkVuGj",
  "key1": "3NnESUNsoHU1wp2u4m8NbA6MZxiU9JqBsXjvfCFiuEakzeHbPmTbVbmfntFaPodXrgV7WxqLJ5Ypyisj29N6t8Ez",
  "key2": "82qJefgPKiJAx8k18f5K9X1UkuMjBmNAFFjEJHN9kBNWfDx69gnNheQJjTqgcDJKPGaNGkxCU1nJnnCKbPbMiKp",
  "key3": "4GdrVBZZogfv86Y175ZwKxsrAXwkjhcfUGmgpf75LAFGJ5qebMesSNFLvKH5p5ZAMpYCYRwG8MERhZ7tyohjwp38",
  "key4": "5p7gpzDnezJXgofwAF2NBLyHG1ThDvDQSaDB2BQ7wrNWvqVfT33iaq516PkVPb3nz9o12XpFBi1CHybMTrNaNwEU",
  "key5": "5STGkYHFccT9WEgBZYoppyfzHXqvCS5UDNPLsise9zFWuvNuFw4HuBa16fjN4XHs7ZdbGQrKqkicLbGuwyNbmRPv",
  "key6": "5Ar5Qcaze6nbykyKtRfzcj6uLpuRrU6V33av1yHVumQ9MqC5h4VbKUdPgBDYQw9Pr2Q7Ji7YkFeAkbXS9Xb8jy4R",
  "key7": "wjyx67ZgRgVa6AgQL2ZaMKBQyoe6oscdL5jDKoraHQnqt38Q4kNvLpfqhQHTUE9tbNfNKkftgEqMhf4zaGuQyUn",
  "key8": "Xv9K9qAKoWbGp7T5eyvUobSRAGjvn3xurJ6kTngRQZqw7hLdbhtuQwgYLzB7zfLx9j52er7r7vJTf4Nkkweat8T",
  "key9": "5xUud14MqyFebPT67TA76jbeMeipmBQdoiLk4K88iDkNjB4TwhTJWibzxX2rFWET1Njq3CGw4pv7yhLvcA9qiyn8",
  "key10": "4yCKDsXbNNPZGKG2mEHcFq99FcbLqBB7FpEVVz92xe1kbnXXjp7L35vc8rusXyGKeRbQbHUzKXmcKam2spFMP3dC",
  "key11": "2tU4vAhWv1j8NrCCwFMC6bQyhS1EodqjLma9ckzphXeUM9mMpRhZQB1WdvEKNXPh2pn9bTShHrSJ4HA3UVQv2vzE",
  "key12": "SMYjTqiv83iTodjaA1uvwZthNpS1HLEtuGrnV7cvg2s69HQ6P8t8nsyrZHnhE3RqyXiXqRSpjg5WZZDFNiZuCs8",
  "key13": "2qmYEWMpHsk1rfnuo4Wi4jzm6JBRxWddrqHWx7RkyRkFJxeNBtcgkJGrEKi2h5cBhM2f41jSwdX7FX6fTZxo1BkT",
  "key14": "49fcVNVduQQ8W81qpcNQjDTMtG5FLGRVXAjCUoqoW19vpMkPQBQ3jf8SzhiQwkEAX4Su7CJB2T2f21Zfn59eQFGQ",
  "key15": "5mr3u7DFbR7mR1T6KU6NgUK1FCnHXs5XcwTjdWMH35MGXCciJojyh9ncNk6CdrCrJ6wmexESLm7NhDinkgVRSaws",
  "key16": "3iQ6ApZXZ65kJ9TaSh2Y3WY7uCWKdQpJdCbsEP1dsHSo3y44eXSeWfwP3BrunWUmkGd5VwftGheHSMJNgjbAj425",
  "key17": "2sx3UwgzRS2gE86BzJKBKB47tr9JkdXHes4NDHfP56sudAs5BfWjJX8kvc82eGyxTeFq5w8ATz8XgiSXP2scc6fs",
  "key18": "3UkeXG3ogzXofJGcrDVp6kUtYsBBm23zUV5B3xxnS2rMxLaeAvZcvhUXtqFK9USg2EYvT8XBwS3JP9tVGTrb3UQb",
  "key19": "43587uGhE18bCJydrrju3fzuLCrTYZcQmftmnH5CwKZL8HvVAy7mQdMiRiHXCMTEadwUZAhFQzgWUYgPZ5Z1fJSM",
  "key20": "37q2Dgf6GwNHCbBVvkLWHuiSGpwgGweRLBgac8L2gsAixbFuMjiKQehuqfZCPJfQZFmjtMMvXBQVPSKDkihFASDy",
  "key21": "oT6qxoS1YzfaDiemgqmabtWH7jbxfjfrkTRLMU8RGAiWs9doqT2x8wvn5hiBsb3KW7tmrn3a2T1r7KGJsHuDJT8",
  "key22": "5dydCFCzr7f3ahEyzEPdHpRrwku3onuKhGeq5MEkmPzGixLA8YrbqNvxEji3Uf8Bvq3nwcZroCPq8QLiDEvEvaTN",
  "key23": "39WLWw8Lkruk5joyAkfYx9gLNxZiFWG5su53YVAeY35t6QPb8jTLUrfXHri4bCpLUc7LwkqnzrFPSgFQVBw3L5Ut",
  "key24": "4KuS1WdDB8Goxeh9CcNQVmKCz32QzKpYook7v4koMwrpc7x5Wb1zayKq569X2GHs65YeqxbDvpqAhPt8bwEMkeJM",
  "key25": "5r24cJFwnxB9AjGasDpm8CPnS8qUsuorTKbEANntuJqR6n9A5RxwhWb7xbKBinHqdxXKzkg3xgSBZKizTtxPv1CH",
  "key26": "2LmJxsYS4RSBnUAhTx56rY9J5jCVYH2dhZRwpFE4k6zLbBYazR7UwXHeMPsQBCpkkXTRP3mNfXB2jtXhdUXqcSf4",
  "key27": "5VUzXi9xCbYKJ9hnUtLfG8xEMNbJ8uuy9VyrAYeaLmK7BfaZJWyMugCQUc4gbkEyXbFoPCSv7fTBRwBCz56BZHxe",
  "key28": "35pzWkNjV2weRnF1Cw7HscoVzeQXAq6RvTxMNUNZVk2mhKev1BHmuDaCAZa2x42QrjXUaPY8FfhL8dRc58RzCEkx",
  "key29": "1qLT2WR8tYJ4suN941Hp95QKUR7wojaYV1qdARExHQG88ppxfULpRT7ZFELqDENQa44boLGz7BEPhhsXwrd8uWR",
  "key30": "3vLZc2q5u3bShU9Xj2BpikRzw3RDJvUgqejpp7FN3xvT6zxHVfY4bAXC27aefoLgGqkrnJVZLoE6Nw8J75pYcDss",
  "key31": "BSqEfoB6oGXoUXrNrmwZUwJoSNPSTXv9F4DKx5rJ3NeHH9FzcVwur5oayN2v7MuXu8MVRijPrHu2CoLbYBL98K2",
  "key32": "4HN5u9TauYqGhrA6iDAuGe2YFYpcSiMPhZgjnjeZdrKzieKHc7nPmEnuVUxRnEnXFEZkyMfoEepGZW6SYJmSVwSJ",
  "key33": "5BkanHxJ88R77xQMeWiGxPmgYue27WTsNAyYjBCRbeaazTGTYGi3HEvhaxBH4N3LF4ETFr51mXELJjWaFnxrgUfK",
  "key34": "62mtAbeqLoE3qFAVkBMeWWkEpiAjtw4FU9VrFXUoKZjh5B6WjvcuQga3jmDTYRJbzSv4fp8qhKYGDzEWKCqC36nF",
  "key35": "4LwjV97PhkySraCt874kWsHZQ4TWoCYt91AecyFezhrbULQjYjCJDqSY8L7YAyBmWEQscdHDzDvgXcGXiVwPNTde",
  "key36": "TPvyG2EJnAFRTVKrXD4Vv8R63mGiAou6LE2ebCZvvQmDzUeiCiTqUY3N692T9ps6HTQP7arzhTuY2VXTV8Mbkz9",
  "key37": "iSmrSFeHxuP91T5Z5qPswcqvPCnNJfVvCjpDBdwKnjhk9iJkFR3UFKjafXcF74LKVRzi3ZJ45jS4FLznGfQqPgc",
  "key38": "3zBNxsvakidixgtE1B8hJz9we5Y784RTcF7LvUDMSFmVx5XxCB7NyUAK9nWji5Dug7QD29FMmtKw7Db6r6wvEapf",
  "key39": "Dh8nV94BLALKHvXoeH2T2Hr6PQDyH5pgDrVaWTvDwxBvKZmxUpSVwqyCmGvZbvAR4hMSo6cE7zsdRtFee6Y5YS8",
  "key40": "GtSuoQzm8kqZAfjYv38gLuyGyPhLUB3xMhPZHQwcCW6rh3xMPCibbVuNGP7oTzY5qKakfVMZymLA8e4D632Jm4B",
  "key41": "8MrMHZftxP48DSMFAFgkaC5LYa1YPxkTfL1UJ9mcYeSiNpzhMybspFhM7jXmDwy5tBVSuWK9kRgfh1Cdb5o3sMu",
  "key42": "RGrTmwUmCqr5jtC3caKHwPycHYAaCHKuY7j9gDkE8dNxTVx1qjZttwMSDvRkrNcMqEpabjE4E8Gyp2S1XQfgpS9",
  "key43": "4jfuSLWRRbCbkve97vS557nq2X7GVzMc9Y5DzZov86bvTag3p1N6ECz9jXzMfr5pWBFXCmLVknpa1ExvX73Eb3TC",
  "key44": "4nzgbawxk3codFBzaMkNiGHMSPvH7s4qxP1hDhVq4edQ6kNooVnVk8251wzcYJKtYX58gskJiasWXoCCUW7FFPkF",
  "key45": "5HR3YwuYKkwYZr79f3tbf7isyHYaHUrxkHFirJNs1geYxd18EW7SpQzvHc8x98oCzjNwLLcMrKRe6USrs3EVQx8i",
  "key46": "5SwFcRRReLo7qEoemcZm8biGUBcewvtskggHbPSUPuqgQYSSFQFSwM1sUgbJPXpJi2i3V9RyGExutbsPMzYLKsv7",
  "key47": "3WL8rGxRLyat6nYJXQniL7AMDgof5X7z1eu4oJkkGfndJFk9G92UfBJu9odJ7TWNpu2RdXjXYJeMMAuYDK2UqQWa"
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
