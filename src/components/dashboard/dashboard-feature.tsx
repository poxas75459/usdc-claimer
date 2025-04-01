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
    "5bLDyPMG3SEDcHp1UM7MH58uAKMjvEqnxS9LVhFwGNaDYU7LkdvYowtvRsFuXNavenX9q8hZhDwTnWVenAbK4sUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WGcPFGFLmL1hqXGGesihMzAwyqK7N5c4paeRZAGGiUBfZ1d6QdUTLzEozep4JzQJ4AS9uxT2MxGpLEC65RgJed",
  "key1": "3fVaansLn7vmvR2S7ppnTszs9jDYmqa4QXEkiX1RceD2wtu6CjGRGLsXqsi62iK7fqpJ1dHcWRKvu8YmwwVPrxW7",
  "key2": "48a8PDZ6EdE1g4joU3wpeSBtpcB7PErBFYkwSF63WRUCjCrsQMbgdF5aTrXsrUAico6GStusTk7E8GGBSXvgo1L3",
  "key3": "2d8MT6JgVtbJ2dS6MnDwYzjjgYqaSvzuxKxBCthd7jwQR7v763qPhn4GLHyfuYW4D5jd4HFys2igWFgf8FyQinQr",
  "key4": "2t8yUJUrhNVkWqjmoy5KwxPa53LoKCawsU8989gKFGLHYPzdCPNHSXGETWacGgX9UjjZdZbWce8xaK1mmqkyLzwQ",
  "key5": "5XGLbCxntrvyNGqwZ3tbPnoAM6pQbRw2RZb136kNwFeTrhvozzU3ZwKx4ptmqvVono25z5ce26LPpCy9wpwezChK",
  "key6": "En6vEa43xuULcAe2iegWhStGA7mSZRZnw1CrkV4vLd22Hb9pEZQtPZjh3B2nwrg3eM8Xsst7NskWUFKWSVsZf5D",
  "key7": "3Aho62Yw3WBy2j4jgu85o7ZDhAgTuPKECqVe7sDS861fQh9QkxTNowLzSTXcFFZJrNXLQ4cgxnNdU4zVo6pdcN7f",
  "key8": "454M5BDQsYvsSRo63hXHAXcff9U4G5ztGZoA4xLW1Qmkkp5sbe3frJCKbPdtySkL1Rib7HCNuufTRDusgg14FCT1",
  "key9": "3chgi4W5cSTgAW3vDEV9sWxBAEDU2eKyN3dRxNMc2eJ9qJ3travnHmygEdtTWFp5ufPMxQsQ62jeqyAF3nywaaKH",
  "key10": "2FEMTxDNv3HAousXRc54KDghQN4ijFkBAqjLtSk2ddYPYADNMku7ynGZWvovsuX4wVae48B5qmz2QVNWTMGP4oM5",
  "key11": "2wMd7KpkKmWnjYYxS8UzgqP45adojNkG9SwvvCLrKMZmQoH6JKvGDHwBxri7mNrxD4Y8bSofmqpqQq4v7Cu2afCU",
  "key12": "2s8eYqZknBYDSUFZgB9Lcia9epzQG8DNjBbApo4gtPmGGa5X5teenDq3s5EJCukXg3aihkVr9CcMYWuJJKHMrX5D",
  "key13": "4Hu67XqncGxGMGRv7p7MDYYKcAcPFjbWynkRq8MJU8N4nSDf5bjGUubWXPUxVqaUwGgCm694voa5gdyzezsz3KQE",
  "key14": "4nVp1UDrUasHrKqp6cmgEZQqqHeNvjqhpfcuwRZA43V2U43dWVZw4A6VKRDvY9ABCTV1oUaE3xCxrwjebczW1Hf8",
  "key15": "6CtCaGb7TZduXjqGHx1Nq74wERYLeZbP3sUu2QaGNbXivS7DnituoG1DjMk7KNxpifDozcPKoLZMr45NLFvvGvZ",
  "key16": "2CFkX924BXeeKo7AmchsrXegcwxRPTeMmfcWV3zprvsRLaXpPzNarHiXmU2udyA7HvDi4dfpa4DneiPF4MEeBPxJ",
  "key17": "53axHn9EyAHpKq1Mv8SR8bmhCjHB1qLKSmzBZJYbZXjzjnpNmzd9DAe2x7vL5ED28tbtBYRJH4eJBjtmM2QD7DPA",
  "key18": "51jgZ464jaFa1CP2eqvop9zmoG9EPVpKNaeGVj72AgcntahxHuKa81KkZZwVouLxJT82ZUbqcAsMEiJwRGFKkNEE",
  "key19": "7LL5jQra8bD6kLbijauz3MWZHrLvNXpCXB7C2aCuZcNg5XCuemifysADcF3LktZ3FnPdT9qiuVhPdNkb7gXoTT7",
  "key20": "4WnF6jXkhKEMDfQV3ib33q9NqueehZg1aHCh3taUTQD4Pp2oKDG6TrmMNBKm6yhTEkMmUfNTMEjTCmHkGdXdo6Zp",
  "key21": "3X3Vs2LZCLNEdbMYFQT6zR4J9XS1kD5qJtYrzSJU7UQSxz1wevfXFEycbua1oc8bbguR73WKEvvtnaJ37CGVJo6d",
  "key22": "5SXWHe5RK3HgmcSkjC4iHKwf9zvxXjnMgxx43VjoV49kKWaZ41CvPwmbQP1fuWeABZxhwexJUG1QLH7P3cGALdyL",
  "key23": "eV7i86add2TuQ5sqMLoCtsbz7fk3MoYewD71yT63ExRAd7DxHN8YSDVGGTVgqwmavUMT6Pqx2KEz5DEK3xuVJY6",
  "key24": "3efR6JwNt5VKYapq97miQNa7HQFFXfWwdsfQJCKDeeDr89kHQkRk2f4bSYvzYHzB4JXKzXf93gnSnxoYqMRjs7mF",
  "key25": "65Y7jDcWm8MrDoGVg4kpQRvPcBhaoNa1RkwCVv3G8YhihpYLivXvMtLTRM9tgF9kpmTWHCe2nwTdTCj4kc927spD",
  "key26": "3X2LXcupFttpPsQ5AH5RrrS1BvZRshG1ma9szXQXpf4XThjJCuvVnuV8NuQDc1ySgEqpsskgePpXyWxLgCET5hZL",
  "key27": "3jwkRYwWAfH4NWKcR9CyWGHocg9D9Abd9o894iq12NxcE18GoT42dNguchEq293F1nDscfXSy3BtduFXujdQnodq",
  "key28": "5chXZ3eHWUWMnbxJXCLAugo9SMoB7Y9dhgQ2XbNjX5ho4SHGEPXYCfzeZgKfr2t69gnjLTQnHuBVYo5exPEpaWqr",
  "key29": "2nbtfDumEG8t4WUehuGNXcqGqopFGNKjiF7v4VvouqybTTrz1tZ9GvTTA26GGk5UBZBgXsn1gRYqpdqUXXfAVUnD",
  "key30": "QDUfLA9YjWoZTBPGUgQR4mAx1chKuiudMfJRtiYhJtVX9R2fMhDHkFU43V3xVHvSa4nyDExhVTn8ZMQHGGhFj3y",
  "key31": "3c68a7KBDcm3ZSXP3G5dkcdLrr7k5HWfRaZop6nas33YgozKmbB4F2ysWGENzU842WNhWf4PXZchyLyyzZJUtHVR",
  "key32": "29WshRNsEVWEXE3SkFTupsCVNUhfTfCDvv6P58z7ASAp39vB8pALkdRTvJFREXeobsbmD6G8WZHo1h8KWHog3aMM",
  "key33": "3dyzxiytmStF3pyCX6H4GSup1itu4oEBeygCGkm1VCw5AZixHCo7M3MsRqtppZCc1DH7EMKUpdM6nEf3oWYk2LC4",
  "key34": "2npwN3j8HfbgyZYL61WKT7aPq1wKyqWaS5N4cNjt5g4547AjWgba4yDAkdzg8jeeg3pu2tcfKgJn7Bbqghw53HEd",
  "key35": "39bbponXaVHTjdFH5DkxA43SNGoeRNzMkRM3VycFocdKb9iAHRh6b3YtHnjgrbE2hwjepRB7PBLQ2oSb8i7GS4mb",
  "key36": "ktBv3JUJgiDx5eWbLLMTR3PNAdKcBtEfSTYJYoQmwiMVqRdisz3NKDrr6nS1JGCYCLAEisCkQRbQTuCAcjHVX8H",
  "key37": "2Yg5hhb3wNkCXFNrLbew7H2h3GS2QpyYwLRZGhtXdabjQKghQnhSS1oksKStncriwguSkT1WuDWL15XJ8ugv7t2k",
  "key38": "3o3twBRAzJpFV462wyaGSDHbsAxdnksXUvZeXkv8a6NEr7mkP94YugjZLKVpUjBaJGGyW9ydaW3zHSvB7Zv5RvSP",
  "key39": "JDPo9du1pW1J8h4mvzNVYENVeBV8iUqiiebwSUB5GPUugavkmr8XZWB8B3B1HuVJ81xC6q57KnV325WJtfZcSQU",
  "key40": "3Tunvh7XGi1rC4ggQgd5KSa71gYfkejBugUv9pTcMsFHs6uqr3iR9zn4bcgSDEJRvFhxGMmVAHdguQZSU7A4sLHx",
  "key41": "5RWdaGK55m4zDBhY9toVpWPvyh5oXeUC1GyGzc3pRgctM12k8oqM8zueUwBnjWrp5c6MGR9sCtxWDKSUMRcaE8ET",
  "key42": "2XGKvvRMT9fGBJTE2WhTzN1LySoXnfhU1VeDhWkbQnmxrZ3s6MCtS2vuJfgggE8QDkdaoJ9p4NAzNuXRJSvQS1cq",
  "key43": "7jzvtg1zCZuznk1dagbgzBLVbgEFAdrqhJfzwvMmUAMuKMYYu7qxoZDCSZXMVFJKKhDH63eVUB3Axxu5N1LwPJ6",
  "key44": "atpputuVyeBXMW4hemC841YvLBVAv473u8GLFazbSbJTtMa3qKYjUssQnUZAjRGM6fMGr9hhwfDC4LGjhTacbLw",
  "key45": "Dmi7ygzghQBVURAZjvFHBC27ZJrwYiax9tKj3JbQHuG2VmFb1yGutnrpSm6xeuPcGGa3ZSN4aD9HLVXYSvWu19j"
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
