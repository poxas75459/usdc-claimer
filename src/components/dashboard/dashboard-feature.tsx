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
    "ySqjbR4PLMNjfHFDSdgydKKBeBqirVxGm9Eoh3v8b8U4kFQ5j2EFj2cJhXWVR6JM7NDyawEZaHtMSqQJQNmfe9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqrjpbtbEp7taYb3si9xGW3ze7tejj9VmDLtYwJP943854f4bsps7ZAYecNRbMUNYQuqiEkeUS3dCksnqYi2fNH",
  "key1": "2WDcWKnMg1aJpXUq9DerQchDMtFygxDTGKDfWXvRx53az42ApkBeKm97h9sh8frdo42iprzcbGrcs7qVhxLd2ygp",
  "key2": "3F4kLyPjrM75T1hR9Z7ukpKG4seJMxpdh48hSW32tU9kfH3rXqPUm94s3gTX3XQw7PwB85JbSppNZnKJRyg19E1T",
  "key3": "3nBCc2q9cdi64GYoCpB1BGuACZyzP14iVAStK4PvsVYkLT2Y9sVngZpqKMfGCqKyAhioZVabHyeFboqeQNNqYhCd",
  "key4": "63eG1nQcDZNQWeFKFcJikyY3FUZLgeRFqCyPwetcVg5QX7ydFbi1FUi3ssepYWJuMTZvpzSq6V7HFUHr9rsGeLdA",
  "key5": "3QH7N3UShKBxTcCnrM3xqGnBZWujvb9U1wNTACPBbtZDkxkQqBE8zc9m6UHgVAkJqf5ghz5ti62iYGArqCQcPhpB",
  "key6": "AACBQusybQcCY6YbL6dPv7WQNk9vKsAcmXAbC8sJMs8K25z8oSRbacYhHBjcjxjnkY9Big6cG2viaGAfGBmtGrP",
  "key7": "4mKXnRh3Yjqrdzsg8KnzXDnFJdLfZevWhSseM5y8AmhbC1xMEMSSQunQrGZd1796CAbnoYBjJoQEAVkS5SPyfxzG",
  "key8": "aBr8mJ9pjMAJQmnau7nKa6qE5u2rwdCUdgBXKt9gQvma6dLKkvn6dzd12S3nvx2dSyrEoSEKwvLBKJiNkxUphT1",
  "key9": "3qahA4G7s7fPvTBvqrooFTiracoqFVMFakSbNPv7NBnSAEcvxV9pm4MgdHXWjtLSfJyi1ZTTvVHDwdkgd62vkbKi",
  "key10": "5f7AP3MohXGmnCf2mr5q9s6P1umKVUA7izuG8wbcQGwBh2qSeSqijJ1nMyRZwwMDWFprMqtFfsUexFbeb66c8pMz",
  "key11": "okoDCr4XNK52sdMkxNvTc6GcBB6ekeGTEnG71MLa4oTjr92nirDmYa1NuNa8cp3TawnghGVRvp78hLkx5tig4Ln",
  "key12": "35ZCoNSqq8vZTgaSE8ovmMTGp3Cxe6ZyhRzBUVtgMNhVzo64Y8gQAq2MNADeD3wKAngs7ZMJc8UPvT18v13pdFgB",
  "key13": "3sV7Xuq6qaWq1vSdRvi6mS6z8wjzn4A9dEYER7tAwSfq9PhWvQbH9ZUxfHbQsBzkGK9pRdtTvRS1ZMsq7uD4NKdE",
  "key14": "2SN3NwJ5ZebBjN64CWKuPttGoFEPyytVPyqeoePYg86z8TrrzL58zHqechu7ki18WU4ge1jiu8kTD8kLXXAyKhDH",
  "key15": "4Rvjc1op39Z77CTnaE2pobXKZyqQGBwNyx58JYQJu72DSxbCeoC76P4fvYafz8iFvbkNb497urK1NdLbGHRoH9oD",
  "key16": "5LJxj1PWyKrWQXMU13bTbTY5KgtKGXcx6TsfQy7oxRs2HHFz1mGtJ1gCEUrvJ6metPA3HzWkfWt1Q3JCLteKNJio",
  "key17": "4tVz4LpS6p5TN18dmjdLTxeY4Jm5AUkQGyeiBzrpmYMGK3umzVhhXHSXtSDeh9JzQQbS9r6PeH7ZyqYKbWbr1miC",
  "key18": "5vnkCndWvb9ioxwefMiPjiv9aW9buSFag7iYcDKMR4jHds1tznQXbY77JZK1sWq5L8mANKYZshXmGdRuZdbNF5DP",
  "key19": "3BHTPTWM2URCPCTMRu2EafHTVo295cLb18zoziRurZCNgEVzWu2pyr51SDCYCbvtkm5V1YjPTnbEYmFyJnZZaKry",
  "key20": "2XF6CS41UFNq6wCFBgVBeeijYJV9vzbyNmxMGq6EfCCYzA6GJF4HvEU9PRbmZ5cVhCaqPTa3JFH3VpBar5muKgD7",
  "key21": "5ecujZsLqVPCXHd2BZu7BiQAeXimughY7LPtin7aN98J2vpAEUmUA1BcyYJZUuea7PMSK4oT6NXzfkSiEqd7XJ9d",
  "key22": "56ax7KRy7tDFa8f3Kq2B6AjxnrQRJRqa1jdCAE3LvvJhs8sYxYyK72zohuLLXeG5YdmC5ux6ME5FcWTrYyYmSGes",
  "key23": "UpGYciBu68CHzHELC2Fv75z9iwDd3Mco2W7ALkii24xZKk8g7Rq92g2ERNE6LiN43ZGQD4khZHNsb7WqaFo5red",
  "key24": "3R8vQqDwkWuceBVCEVsaVePakvtXGyCaKeSeJGtXoMmEt7JaAs4KEvuZzjuCDSLYWpSXf77o7ZnHkVwLagYb6jHx",
  "key25": "3wMq4xbtpb5K21UEUyyQtEwH3qn9CR5sfyVd55y3XTfWGBEToBdEpfYSy5aLruCcRgYCk9K2pjseX9CsXeMd1XRw",
  "key26": "5n2Ma17h8kZebHL5JSj1rHx64ymoA8LYg9iCztQAFDBF2UMNfGsH5t2vn6UT3kCVjjQjC2bSR7UCqpaJH49xj8Q3",
  "key27": "2ao7hkwpiuhP9taiHXd3CCNJELkJZ282Ck5KprWo1iNoaJa9HAkNYkBcxoey6LzaAhQuRrSZc7xRjbvNKcEZxPuv",
  "key28": "KTfRzksCFk5Gf1gaX1PuUuYkk92UzVmm42AoFPMtTMP7fVdXpyRL5XZnd3RnCoVa7jkZjjZ4nKnU9G2RPFaVbK7",
  "key29": "bzGYah1F3uBQkaUMNsLEszoBy4xBMfHwwcaV8eKc1cJeRLc3psQjbEMXvAEukAaKYny6L3Mje6ozLxti6Y6JmLU",
  "key30": "4a7dUtUnpgiHiPBTUeikE76n1NkpTHG1hjpxkxC7CRRmyJtW87oZjAk3aDMrueF73xH5TqHzUSgEWLW5EevibEBT",
  "key31": "WFHzWhHrjS8uRiotQVAixPjJtmkFxmZ9SirE2yCorhDhpx4DjTRjmHAPcpBnfWcfFWiEJWHXewNyt4GD8vJzZbA",
  "key32": "2oFujkKQ8UD6tSFonKw7sufp79YFs86ym3wstqupkkammBXiNsUR3cWNbRC8kCzYtsw5x83trgvTKC328CHDe7WP",
  "key33": "gWpfdbBz5LKYSmahbBC4iZc3enTdycw7KQkG3koAHkrUFayybCJFMNzH2zn7PBCUhaN4xxCxHp9Pzcs3iRNfNp2",
  "key34": "jd74zdQHTRh2KhZSVFoZfmBHkJVooPMtjZyr9yD9GzH7V3Zy9PMauVLpbaebcjAXtAqo3xjnQG4Qx9Gso5G7TL3",
  "key35": "2R972aoD4zFMizxJUp8K33sZoxawGm8Td4VHNyiQDbjobtXrNDzhHF5jUConpjooQedz98dQdP8jHrs9bwDQS8oB",
  "key36": "4eHUmYdzqjyCA32cTkYg7gJbHP1cAmx4K97A613vc8vFFHACpN1PsGzkjHgfYZ1VSFBS9RpN5ng15zXuipwxbjJu"
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
