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
    "5pQG4BpxqQ7ZDTa3Y5jZPaoc2NsL1GiyP4CpmXpxg5kaAYwZooDrG8BeLzQyNDxVsNKwe2vDK6oDasaRm6BoGqoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNwHqD8wkmGEQ1GiwCmsyKmGUsFGPA5snKaKZnRohXz7gkAXaiE1yDUekNGF1iVbdfsRUF7CdR1MNrxAvM5qaq8",
  "key1": "4CQA2NQ8TuGuqVXeitHx8Y4Xgr8xsVfvqk4xTQLS9BNgwMYJHumHXxNSAne5poxc51XwQGN9HzKJVogMk4wb566g",
  "key2": "4pXJegMXA5LqqMCAjE8AbHVqo5Q9e4cH8EiiDmpNTfgaMkiumjqMNGRXFUWAvsMQDaQuCDLC9cyp76K2knTH5onN",
  "key3": "64BBsRNkqP1PxkMqBho8GcsL3t9fBs6vhsr18XcrXhkE3m9ENaidSTJ19rKSpmQbDPooTgMeqwbzVngE6t1xQZva",
  "key4": "37UK6riL5BxhKh7xmau8LiaMJkdNmLmtej5qRA6g1gkVebDa4cqCPEfPQNzg5y7YBv3Cbjss18SRJ3hEKQoewQ8L",
  "key5": "4kpktgFbgej5gufRCJxSsN3jBWh1igsQdvJHT7ox7HVmFZsBy7s3zCsq336BEyHK7N5zgh9r4AiZsxaTUnwvSGZ7",
  "key6": "5WuDj8Hd3pHk5pWNygX1uMe6oATF695uLW7GmZuyLnfLpx2sZKXwh1vgkisdu3EfrmC2B7dJAsrMooYjSpQhhpR3",
  "key7": "Lnm5KaTPxeFiEpwRdw2LnYUXeLfvvQPjaXj5srEV9q1sTJ2XzspdcQtBavupZNrL3qygRJG2bgLNSrBiseukrBr",
  "key8": "2xCvTw93E93KakRHJZsNBXAGXqrZ92vMZTghyYyKiRfV2ZzjXaEuwMQxRf9v1tMjVnRArUfEKXKgSgnY9BuUdWQw",
  "key9": "4gUiz9GRDoGdKmHoJaTFgRoCuqTXNDxQ2dv4xLn7HmVvt4dWoRQrgFqZfidFnrndxT4G8PBEsNk7adnZMjFxBztX",
  "key10": "47JTjCmWdJE5JzWdrQacES7CzwyftWWMpmR3VtNw5DBZmEk4jLWot48cmqcScaTAEJvgGTgSnamPYhiR8tGYCfyd",
  "key11": "3MrTEdKtDfarCdYvivjU4abkJBUtCmBSLJaM3rNz9Qcq72aQU3YVkGQDaQXxsKpFG3LEVJS4yXqmNi5K3BvUG8pR",
  "key12": "ngobhzKmo6VenZNvNcBhW5ZUbHWngzCtgUz3Qefd2SVUvA9Qy8KQ7acP6PxhRs2asbThFhiWiEthDa96fwfzs7r",
  "key13": "2dFJQ2rKDmsZmivRSVQCaSnK7j1fEM2cVhzDkAq6rEW3bDCv56BvsUYXYUUttsLDYM8mqruKhZ9cjhwrAQK9k2yV",
  "key14": "3KLfVWTM9CA7JJ39pCVQfqaxDK2MwU95FWQTmgjoaPszZC981Tn1GTpNtSUtwUUfcEHdX6uukTR4zsR4ePk4fGGT",
  "key15": "Bg1avRKwr7rdqjrCeZbFYDWfjgHGjBp3EUES6eWvpHAdNhNs4N4PC1L84fFaVuDz2qJMzV8exLfU8CaX8RUMQvJ",
  "key16": "64mLLvroGknawAJRqGCeUgaeQoHSBoQaxMbR7KNN7r3d1FbA8MexcMg16HxMeL8c2Xe7akA2mA8QorVeezqJCkiu",
  "key17": "cC8NmE2eFfxRmcYS14YY2mF9sTX9XBuAHLW7ky7tqU3GAK4KUyJBjtNKUYMiUCJRcxU3jFTdEcFzsWHEZpjiz1b",
  "key18": "5y9XgvGzZfDdkmYz9fMoGqwKFo5Po1e82gH2WkgnFTHmjqHw7K479qZq2kEicy6DgCod9xakfhzKn3tL1YNhU7M6",
  "key19": "5zBf4aY9uKubPe2T1351qEzHKpazrsGTGuRzi5TGbX94z1mwxkpuJV8vk9UPYJcU8o53qkMzb3eY41JNbUJ5AxWW",
  "key20": "djZSLwVL4ZSzDm3qg3fvSfDHUcX1rL2DZN82fKktH8tqVK3J4cdzPnLF5j2C86RRpWEs9LX6bfHHVbghHCB1Pcp",
  "key21": "54oJknqm4ehKgBvEh8YcQN6teuiUAn1amUWPY6dpUUAeSmF9DaV8sgSrc9LYDCBu93aqSxWSXSkAQabbqr84DKTm",
  "key22": "2LrYN4wTMMJbEhnLeLcXSXELZsWa9U2U4XVkhaBJA6NhFu5iFJsJiHcjLn928fb538okaifWmuLTZBCFNtn12syr",
  "key23": "5xTyWUuA21N479GUWoEJXgE2Y7vmU2ELzDFXdAERcp24NEonQb7YScZmS4ndntTSfa1Q5UY2ADeugKbnAeK9huw7",
  "key24": "4ZQd3FKKC2ABR2kmhAW4h3gyJQz1TD3qs4iFRmDXeJAeRB6ScrMBhsBP8soDoqGq6zCG5sAy4JdLkqPutj3GwGs4",
  "key25": "5jWphzkNw2oJEJfwv73Y79KHXF47GSME3F3UXfNsPnoJkW7TKwgNgqJiU5gnWJs6Eey6xBY9mH6zhgykdUnCyDUs",
  "key26": "2vuk9V9HSiFbDnKDf2yETZy7x3iNWkacb7rR68dcHJv543o5YZpTkTGMD25fArRFVei734rYcZVM3KGoS53V9sjA",
  "key27": "5ask2KD2WzPLwfWwM5DBkU1ftWAYWnheMNyDJd65v1Ex26pFFuWqZ94u9tdyogBR1NzyN8sWWAkQzFK6kQXaRX3x",
  "key28": "51R72kfFBeiZCdhobyyq8L2s1o1EFgMvmWDsW5cqHUAgEy1BWBJh6QftxXCzhFU4DLJ7UhRxx5uZNzMm1u54eFQY",
  "key29": "2KEbutcjPtVsYkhamLZJNtVAaLthqkQP1zPd99sFvXHHSsTZECKk7mUDie3s4jXwuXWtWoRgxHgJPfGWQFbDKXsz",
  "key30": "YSmfVqE6Sc7FCCEsf5awHnqaDxf6njXfetvG9ibEC731i49199is5TgfWw4SdAYX9kLaWWaGcpcsG7yh8QtNAT7",
  "key31": "2kjZSmZdym6223nem8r7ZS8HEbBuVSPPpfa5AofndqbJBmqvR93zzBRfSJVtRzRU4maWTPVDdbM39WWvZzW45CjF",
  "key32": "5NqiPKKA5YJX8QeZhgfX2DgZ3cxcqZ4zP6RQsf4y2cjMTCJHJEWrNa1QuTLz7yaxTXkL2DNFaLimpojCC63EgwNE",
  "key33": "2o7eoctLXsX3P3r3b7y51hiJnYQ2VJJn7uGJ8v8CNFbZ2agFyxe8ndWkgGvEkk6Dnf8YNFUv8DgqF2apdPfh5Hs3",
  "key34": "3h6ozfSBKmRkwzeb2bYc3fqHDijD2EcGtu92VMm8bkrxvmb3pYSakmTCd93tQaLr8aHpdJZqkUV9E5A6rPYDzCrc",
  "key35": "2dc2irUJ9BmaaEWJAUcdAAxwjMzChGq9tbmnqB3Z9ApzGAiaXQtoxhHC2vbuXBNsrUYP3Cq7eFJRG3w4qU6DbMZX",
  "key36": "5QWbSYgetrVfFMyFoZqUZeFEG1Y83JXhjxNVfKT1vebq5QVaSaNJSyLmtj8peoWb59u1jdibqaUjiXscpV7a4nuH",
  "key37": "4oQUSjA27b2rSRcKw39FWwX9sU6uPCBcT9xxRQjNGi4qiYTmB7BPwm18oYZSJWeS4ApjWG5kcT2jtvk3KnFpEnFM",
  "key38": "5K3rt8Mrg6k79HythKrLAbCfmoGwct4a3keozosbqeuRn1hffpbzP36HK78Y6drddsKaxkquLeEX3S4gC2PZQae2",
  "key39": "59XDA8rhgvJQ4Nm7SeWhEjE5D9bfDaPYhgbCSMGGT18snuueRACmJtR5SuWLvuF2LTby4dKdayWVLQoQHRFCoHQg",
  "key40": "5d667aCCoPbVDYLx9pBESPqfYk3s4dH6baR4R2aPZPwptQYwMPwRbNZ8fqJD5giyDJSNbAxZfkGNjSwe7r8yYL5z",
  "key41": "dpue86WAKWbyojqbrxSrLHyyjHkyQfLuWcHWHNTaf55S1P3xVCA4oH7KpnzZwVGpwuHW5yXfoc4JKfPr5TteTaj",
  "key42": "3d9PYZ34rHxfMRZNxCV2HqTZ8QQT8Gp4YjVHhb7Jb1tyoBXuyUasRRADKpMmCyrVpeb6eG6Echi7eRiXgp4Qdk8u",
  "key43": "2J6iYiWGTKC5k1RpXDFDAH6qxQWP1Lmmh3GusQ7YEthqqUc6Kkn5prc1CS86Z8SQRNaYovAZFLLm9XcRFpvAcA5J",
  "key44": "3oSeyENJg2Z56NDS6xaAs3d9XJjKtVSKP5FiFh3Z5WoedJopZSmi7f9G8i4ikmZqQcpDVU1bZJzesNpsvYJLvn1"
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
