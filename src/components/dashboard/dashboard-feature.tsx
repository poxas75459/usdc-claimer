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
    "WYZLzEw8H5kLE72okjcyVugV8GfTn58T9pvVvXoFsvhibuMtbN5zjjT4RodLNU7i4iGFrCf5i2iJS9HRE4bW3Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wiyngG5d8sAfDWRfZZK3BUCF3SMKs4XWDMHoeiuagoWgD2synRaFNGXzATiNvfLR5FWAvXR3VnNEXnHtZL6H2JH",
  "key1": "5c3kzpSN96RZ62iSfwFMHHkRDfT68qKU3gc6xpubtwCvMaLmyiHGkQ3JgowLsMq8Wott5gTM6whbRp365E2wsFom",
  "key2": "265WdETZVt7EYL6Fg7F3Dvr8xBWRJrMqjkESvkTkvGyYRdZXhZH5PAcJbwW3cQSPciBSCBuYzMgoRkRDo5cdiRsU",
  "key3": "4D1ejQnqMHsLsxi9kbXmKBh9NRfUNWignBnyY5vZskbCjZp4tatEBKwH475cvV1ZTCWDqJCzrfy9YT4ebt6pNXFH",
  "key4": "29Q6XewD1sYvSae7tfmJEj34t6wRPrHz6T61nACznQBr8HTxSq1SN5inWskS5JCTWbpQgeGVov5SN3rSh1SpYnmm",
  "key5": "4ARgTCzvNuvzKKHj2bS1g7BYw7N6WLSoQ6CUuyme77Asa5wqdXXpeUvibXeCSqKhxpdntoTzp6dW4coVVK44f8dw",
  "key6": "5MbHhc3pnxvRWG9vixrvcMcRov9HvzM2G6cGJr1fpVFa2wqci147rjL1jvCz2D4NPXMULgbxNDme7EeFbRZqPDyX",
  "key7": "3RrfKVQkLq9UGuCXBHq7M45ZFVBgELS56cTbpsSGdNiwCxZSEfVMTgejcftWznWH93k8fp8cAn46NT7wTWwvnQZm",
  "key8": "ei8vs3eHJdFnfoeD7U6JQEaF4o9yAUSstsqJ6fGbAsZUJTM2B7zqhD3ufn4MM8ZpqJnDE7KCn4v8K7aea4ATerQ",
  "key9": "2gRhF8YpXEHP6UQtgMfAPdt6woqyY682EUSmr1JMpPjTv5zdTMYQRkuYTWE6pZxvYYA6u3DgskPHy8oS9xWTYVGK",
  "key10": "3H3QWcsynP53NjyGei7osnx7GQQ6ZbGsAAJG4pFrXwPPjgP8vd2oGqEySY62qFJLckP2rRd1ZjDgk8zSANEp5h6E",
  "key11": "26GdLcBLN7BesbPEP5KNesc3MaxHnvXhw7wCXAsXAqS49bbjnYQuLCpfkjMCkHGbCN6FVpeK21MT7D219fe2Nqu8",
  "key12": "2AgRZ9nUuupk2g8fDMq1Bc78WEFyyEh5XWGELW7V5WbEMmdUfV17KTQg1BW5D4EwUzhBgmDnHYWBEvvV1Cydco1f",
  "key13": "pyKeYMBKvLFT14mW4cz3ojFh7RrsoUEiFRbXMmCznLbCMSprdL6YDY9VQ4YjhhNthb9hDQxJ97sbQwDbArEP58r",
  "key14": "54hMVVvRWP77xxxgcrLZ7Mg78sA8snsJWMvhiZTapiRAgMqvYLavbmSon1jcM6dT8SHpBYsWKyt1Mc5JLstGo1pK",
  "key15": "i2NpfLA3qEXrDu65e2BuK9acRSgbS1Vfwojr6GPMEAxEdHuK5qTmLFuzSsLm6mRV4Usk6ETxVcy7xLenLKnr9BG",
  "key16": "3GRMVanJ9qg8Ce7KcX3DXS3NiC4HyiEKgDpeqZfthcWAu1fgypA6HsVMLhkhVVG3cWrqpMG3x8RUishVXtRsyDLM",
  "key17": "123J1wGJhDDjD698W6tzKFTo5FoFHPDDo5apkDEF3sqsAFbnjHDd3ASugdnfWJMdDfRNhvnQg3LBLaYZETjBcue5",
  "key18": "5DtK3u2BH4zsUUS46ZuxrML6qcrMWSzUCP3wnWAJaDLVmYXUgzi1xbVyNTTYUVqRjKDqfwvzMsCFn1SKL4D4S9nz",
  "key19": "6m3PGd63vHYt67i4EbrguTWe3i79fRp44N9yzGeFiA8bRxzDPGw4QacQxQwx9p8QRAH6tsVhvK24HkVV4c1tsek",
  "key20": "513V7hLT8RBRbgKVSAB6iU4tF2tS9ea371X4yCFYsogVmfhregaqA6i8griKz2UZqQGH9i1rRogarpY3B1A41ijk",
  "key21": "4pgQYgwj96DU4dQEk3wRPjtBUMUuUZxXhpw1qsgtKLvcKNd3cPWm7Z7AgsiYhPFmxrqfEREKZqCz43ay8p9HB9fW",
  "key22": "5qwsqDYwGnz11dc2WkrfMxEkLxT9DQK48VfE6jQKFzCoNt8pSF6M8kcUTyDECZtSknCNQJ9BheuXq1WXT1ZtHRJ2",
  "key23": "4invQFZjqyVAxisDJ6k1UBmhTpGi2RPvaWgf7s1x7WEZ2jYhR5rBXjf3Cip5X51LBbS52LidrSU1ZXttfQWSmRcC",
  "key24": "bKs3mfEqdNeYc6zQ2ec92kqk6EPQ2uRBxTyFFwPzv2NKx8dnGbyGDGatPJNAbvn4YwPSTvXzsbVyqhMWYg3xGWv",
  "key25": "58vpV4XtNjEoN9iCBRBQJQE5gxRmnKpyMRjacTqEt57Z9xWyo9TzCHHJSbSNW8Dz5FvUc8WvDhtjPRhcigPCeRbc",
  "key26": "62VANVW5WrwVwbj5Unvii1PFnVU8o7Ki3v67zb1w3qrbfFUzcawQF5Jv9RfRfKiEq3r9VVgiza1JxuiGd4DGSC1t",
  "key27": "vcqkJmVkmatwbetkjkvJu3T6q4Q4taB9idEgxPUjWBURPjcbp562YiGASznbEbYgBLvuHCDvET4tszqTCMQMqD3",
  "key28": "RmrWJAh5M7viUyG3YVAeFYvJBiKYyESPg7GZrjm5g26radhidth6ybsSVRSo6brKEHEhKBWsgfzZMvyS4rW3qee",
  "key29": "emJTQD9kGvBwWM9MUwvTFx6H2hHSe74LVjZs3NjjqUP21GKHTLmfuxzREcVj52vAHZccuZpUZYkpcjBGDdy647n",
  "key30": "FLDgUotQ5PBZiUSBXmV2gThbFYskGBkuJJcAjjZzsRbaXLcfevvdvoaznVLgfCEgdz1gmKqfWCP6Dijt5o6kg3d",
  "key31": "4b58ZFyxNGGEXkMDimjrn42tupGrBtfD1zS6y9HuNg14u6bKFCvNgNjADCKCNxFcrZX4mqenk9vGgxfcNHbp9oVa",
  "key32": "4DKx6J1q73fdHMwGfhcAwQo5j5fmY9484f3wHfveJJtNwQ8RdjJMVBfEq7phSH4dUE8ETCofcBraMAJtMgwyRqjx",
  "key33": "erZCJX7Xk5pXN5Dg456sXFCaCmXMeYwYTGXAdD7Ump6Nid6mz6uaHBQGn3csvQaxX1o8Tc6uoTZ9pGDVURg3qfe",
  "key34": "TCKLiaFKrvpECx1o5rZ1Mpt8WLuGBGCqAp5xLoWVvfBksjN6hsrz5797DkRnCKUbobVmUXhTXfWgPm7cdmEsC5z",
  "key35": "47FdPwG93M415XeWtdBG5xEH9t6UsQWNo2Xxrky36Fjd7L2TgZrqLGqMCyyBPZ4AGMtAdvizyLLi3nu3wN3kuBfQ",
  "key36": "cDzk1FmvEHUJV5HrnbRzhw2VYEqa7ypHHmdRkQN2k6VxB8zC92cjvuBmvJBKPP71KfMzfGooKRopHUzBtHNw3jj",
  "key37": "WCdKUjF6NLRwXuyzQU5k6mbuaufwTJvxYKnJDX9JQbvJ4kc7HiR5wwsQYC3rLphp7MqC1VrLuXbzC9544WWSsad",
  "key38": "7wVZLNJz4XFJAnH9pyea5qKf4LiomXP6YjdVUBS5oabX3Mvxb12Eqt2Q6Jh4WuUVKkoRCWj9unt8dBqeEMRUKgx",
  "key39": "2Pv6CEmj2ibjBRNzK3KbkRUEVJtsj68SeY7BhKCbrU94wTJQSLQeCD8vwHRGRB3685J1VqsH3mCn15Ci3QJ1yFRP",
  "key40": "2W4au6wFciZSXkiN5mFVVZEeu6rsZAF3jq59NPMtbjMcZfzSToCvVgNQy4gcmjhaatgBHAdKMCZyGMfDqKYJF9ZZ"
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
