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
    "3J8jZmq6xHZMEw4wBUVUsrVFUbcTJuksrVSXfpjiuuDB26BfWXJXDUvDZoiAC1sqSVVDUsx4dv6aDo2NncX6oWv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBEPfG9EMMCrqnMV9gWRxBo1YZC9tdCBdRpeSmNrC3CXGihuroCJm1hE9DVv4qpaonJzijXkuUfVQEqLVWRWCeb",
  "key1": "4UGeaEqNRKHCFewfUorSbaq24kMSw1NWnY7fbemTaayXfrAcE9TceUFrCEQkfJZ8eaD51spBsYco5YCxy4c5KCJw",
  "key2": "5xKrurdrTVsZcVyH9QqYe6STonA1REhSGEhnLiJc3buANDtSMonGNPFFfpbvHcHeS7cY3brtVXyUEiMQSMnxaMSs",
  "key3": "2HSnMSLd8aWDo4EVDJjWcavwjAsYZub1uF1rSqNEdam88QQYwZ7Akq74GZBzrqsxdoqt6VZjToastT8BKtD2BxMG",
  "key4": "3EFRt1jRPdPzCuJwifn61QNz4w4MTFFWUL989byofuBZY4A6DhKCG379EfZL5JmEe67YqnbzqYaTB3CC6sDL5dz4",
  "key5": "2sGpN1ktGQUAdYBEkxL7851vc52D7w8VrW6FsRUKKN5km8fMnxSnLFsRDA516Jfv6ZJx8TTVtJK7TRmAWnrU2Yan",
  "key6": "2sQ5vX7XUvtYB5kZFmFhdCq59Jxzkg2JpqwGuyxsdsW4M3QM3TYZ7Girj9B4Dt2qYJ8qVLpxNi3rjHZ4xkmdeJFV",
  "key7": "45DRX8N6wXTkgUW5x8yd8C933rJHSQbomNH4yn7arhYD5ACZt9fMT94RdYYJp2R2yuggPy4duecjCNhdN9mXKesY",
  "key8": "62xkPfRWWc72TAXE4jq24f1q5Kjx2qeVaxSoqjGmqxfBoUrqhbP6X8qmwGGeWH2b3oe4oZ3iXpfbBvsPbA525bQN",
  "key9": "4VtgQ1mRY2Gmn845kZxD8Any5MBTbk9k8RKa3RxJnS2biPib88LSaBh2eeTnFjh7oLxnigXFAJhfBXamfp1atZ47",
  "key10": "5HHzZStQiPRnTCkeGL9mP9wogWmCrwGL2JTk74PkoBQq9mZrjwEZpf1s8kSnMNwRi6ndsWirnD4cy6ktfrZAW9Y6",
  "key11": "busZ4ooZ9XLnUhBVvEdhqNMdnVjGBJ8vD14KE2n79cQtCaUyxgfMCtPhnNkmv9s59x4JgxFT2vWZtW2TGryo9YL",
  "key12": "4oo6vG7AiG47XkFNVArrW9TbajU654pdSdHTCsJ3bCGsE6Cfn4YB9cGLHWkEoCjBJpBPwDV7vGCXwzL1yiqNRUo6",
  "key13": "F1HxuFAwcEW3ZZKAFDM2fnmdYPKGZT4f1STyYjod8ECrVDuj4XCGqwqZFKVWaB7VfAzEfcfzqJ6tSyREyB7R1oN",
  "key14": "DA7SHykt22g9LpPGRC9BcMEbnDQYJmQxc4sGdoe8V7HZeGcbvBaCsKrSUHEBi426kR4NtGnShQyr5sHHmpw2XGW",
  "key15": "2w3b4k8mKk1ugtYFFgP3Qg1zw4U6eoiNXTVBtccR11gvKRJxp83gNccfkcy8cxd2vqnwXmidQdPG7mnNSxw3UZAD",
  "key16": "3CHLj2qBiEFMp4jhmhySEHdhiNgHYw3CdKt5E5GdapL4SjyBgN1BYEPgpCfrapbUwidGcFQHvULBZCgmNTouZ7gX",
  "key17": "2fTdfgm4mVptbLeSF118GS48f6814hgKt1z1UYbu72hVH7rxSrJyrM91i69u3qbcutGnWG7fzYhj8iUu8jLdtrkS",
  "key18": "5nq1i7JzdMf5TT9PkatdwkrAS2exV9CpaomwnpUt8GyhyhQceH1Lrxbdvg951uVkfttFFje4jeZPwMhnkaTfagyU",
  "key19": "B1waL2mcawNxY5Vi8arZ6i831c8bJ8kXd6vzcYzyf7fTpCZ3Rh2YoFFrtJxvkJ2dLGjFU8oJJtdEwbdmkVqNYp8",
  "key20": "3cFgEAmJh2XeTe8RSVN1a4sUoSQUCnuUEiqmBemtdAhmyqu6zuQLonMxNHqLHEisdmb57LrDcdz9xbGt9r62D7vw",
  "key21": "3GY2527dkzBUj5LJR1H9v1a2ZaYeZUdfmF6JpAquEZYZsHG5YoETFW5gfut8gGEap8FE2JnN2j7t5862ae2VTcTZ",
  "key22": "2U9QJXUNrruhAW3F35oXLk7yYb58oFWhkynbSaLgC5qc8GPUnR6YfxzB1cB3XMS1WuWmvxDM9fucNuLaJjvF9dr1",
  "key23": "57fm8hVf58KYZLkdfQrnpenn4LuLdgENnh495CNu8CDe8ZckSoizhWRoujj95HkDcPib4nv2rQ8fz6JHsWgFTQbq",
  "key24": "4Uw7mU1njMXrJ3fhgizibRnn8hGVBMSA8ahAZ3GCppaHUgSkg4FWDAyk48BdKkjCu5fT8rn6JWuqrWTGqcVURPsL",
  "key25": "2vw45rkGkftS14bjqzn8ZaJHnn4LW1UMQPhUxh7mGBoNmUb4esnhxiGCoZqiGmrhhtzkzi6UuTv3xHQtqtEeHoVr",
  "key26": "oqdHRhHaFyrGNeqjasLARi5AnBi4bVqgMwCs1mRMf4PjGQcMkSfPNva46jQtB8tnCBrG1D23QFc3NHk7YGN5qZX",
  "key27": "4HUr2b4yUbn2j7cxbxfhkPEigWE7aTThiPKcUsdGsxmd9zfZrFbY26ieQ4gUG6BWusPY3HV4iM6i6AFAEQe9UJ7B",
  "key28": "2CfACxHRiUVu2ixW2K2F3SEFMXjjsertbF7wS5LL1iFQ8deVLV5v5rjRywuziZHJHD3BS1MXdRaf9uG3vdY8aq1j",
  "key29": "59cAJb8kSYdApapbwqsgXoV8w4u4adUL6WpuWYc1icYx23HaY8BQd1JvtaPiTDQDKDaMJ3LsS8ozzua9Rgvi1kBh",
  "key30": "5YW7zPsCSzaqP5yT2AFWRFkmj4hc9RkfBrMR9xyCeybox7exPmhazFyzZVJozk9e4iHR7uvXbBdk3vt1uPNhPCa3",
  "key31": "5zrNGmGf8YqTrGpMFidBXptizfyZ9GvDQXv5RpzFspuGkyPsReEJFTFLLmgqsi4GHyZE9wciMQ79U9dsTUWnLN3Q",
  "key32": "3ascKjLM8riPBThE4m73uArQGfQkjMfaWZUC1JCYk4Y7VzMVBtVRJrBnp983CVMbm2RxYG8LUwxMPksdFThG8WA4",
  "key33": "2wqn6sF3grZ6d24Z6BoeRmamZTpeds3apkYrGqwa2W1SuhCX7o9SKcozAxrsQTgKrUcF9qeYm6dMvQ9er37B38zw",
  "key34": "LKuBk6c5M7henoUrjyDeJn2rwUm7faEoXgrAmjH7sgaQyCbRpN8kSsPE9Tuu1MWBgbsK4UvT2WLZzrbdw4LQKa6"
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
