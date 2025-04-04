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
    "5BPDm6G6LcUWomHX68VWdeVjeHfU4vLMbsg2iJtVqhS9v6hho8YZJk1NBx2rrfTqdcejWCEeMWEDtJAbGxSSTsfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzT7R5jbUeQTxFYsZtogZWfPzDya793cJUPFWqzWPkhAhsKqrpSZpqrL3QCBxzrz4qEKshuRKsQT37ekYPGRvFr",
  "key1": "5F4VE4sgSApUViMxQqToLqEk33n6GQHjwEjg3vMwBWvveRmCXNh6srpZ5EJMg5BwPSGctNwF4vzrZtaQm93UEAhM",
  "key2": "4LSHs2myr1NPU9QSjM1Q6Px884esPv8ZqikmQw9Xai8naFdzghp6FGEaXTip9iS9gCSBf6n6zhoZidEa1ftnQk1F",
  "key3": "XA9hiQrnq1EAu1m5Z9AmK5mM4EqWAdnQp5fdSfyKv4jYqCt9rAck1qFAXFuTQtijefHWmt2f6gyGmx8nqByxRQx",
  "key4": "kH3UYfZDCKBAUAjBBWHeVLxjoJaoZpS6hPooqeaHKSMUfrj5f2JHx1ua92fo1ewMnwR3ndVR8TymQYeknPBN5Hh",
  "key5": "CryUdxciFipdxnTbTC8Zrho39gFKhHfwGQz9MTuhEZk2tpjo2EZUKQCYdjKu3oTht3N3eWW8qGKNKdn58uTVDi5",
  "key6": "oiVP4LSuFPkq6eA2KHThBYWepZ22VHbytx7yxCUqTHCW1NEAn1dGMKWyrLKya7D4oHPD7gvEJyGYV7tsGEsNg2L",
  "key7": "53mDhKoHKyLARA2mLeAKX7nWVzTpbKzZT4363i1aXUC8kmAMk2xuAzVaGDXmhH4P3bp5e3fEQmoYU2biuRKkqfVK",
  "key8": "5aWwCLZVNt1aC2jbBD6nhVWw5GX5w9nXTMZPXvkuPmqszPuN5Thgjv6hw7Fta6mxMjBUHtUVonqUnWgPpY1eMGCg",
  "key9": "4vd9AEqFAZYRhmYv9b993iCE6wC7Sm6NejcphCKFGWk53asa9k2kgEhv1qvZhVwE9YiWJb5H2RcnAquP7AfSaxYr",
  "key10": "SpERxFPnRDdZmRFGFphLwzY7JWcdesk95Z5rMXNReSaZvK3cK1o1ZepzKgWaBoDEpyYyCA5VbTK338ocyvXCLp9",
  "key11": "Kskgw4GUovqEVq21uWMgpnQr2BqXECnYfefJ4MNYjwvEYMJFjYC6oSZzcFzWUbviSvgmaXBGUkRxz5373eSE36H",
  "key12": "3sZd88r4JPKgCFcxCTakXJNG5syp4Ch7kAAkyhG1RK2BD2gWdrf6CnZorn7WhaM4pGqKZByxGdSBbVQHzL4Y1coL",
  "key13": "6fwqSnnWivQzWBJYT7GCTyXaizkDHPmV9bfnCcTaptUimpoCxMo1E4juu72pL6d3omojjPcKPKRm6epniJS3HoT",
  "key14": "3x5RoEFcpnCYqu6bYqPgMHfC2X9mznJ2Lp6gVGmdYSH1Cz5XJsYUNUph8LxyQsbXgbJvab7YpoqYazQqDm3SpbNW",
  "key15": "deAKU1MrZzqDBPqQBP2yZMn6To8ARKYGUyYoQqJyD1R19z1kD4S2ZGehLDQjePXdtxicBjUtFr2nzowZtRMciSa",
  "key16": "fhKEKG1VrpJ4bpCV7V3x4xSNxJdPxFhR7tmtyLxC6YGBNqqqkXXfhtWfcTUXygzZvSfhrh1j9jn7DVgkQ4E4svk",
  "key17": "3Sw2XCFgCn3i1Acmku5es1Y5w7t4s4VZBWq96zRnMXjpStMPxZ9uCKB3Aopr42cgfLe2wU2JMSmX9cqhdH4mtV91",
  "key18": "4rPQeXsU345co4B19guFf9FANs1C2fux84i9EqDg6RBw6C5KPxZ73qZD68iKSrPVVza5KDoyZUPo8Hwy1apsYv5V",
  "key19": "4yzdmT9VcQdrUnqPFa42x64Sk1bo4Lzw2QoTHTvpbBjPeXL15qkRNJNyZSU9miJbfnvkn5xXU4cUiip55PdbU2yc",
  "key20": "4Jk6vS35p5RYcTzzpZtVAMXyHEvCF45i5XpBs62rgtYwTrWDgiwHNg32Sux1uQzN5ynQBQTYNZusQcdc9wPvaaKi",
  "key21": "2YUoRNGbVGiNV156PCWktqKmWN3sPppEbxeocockHwFNs5e9uUDWKbsQJZop6x2JBhBvxv8PAjGevXFWvWsFnMjW",
  "key22": "4cFpLtRoRbHXGhMNYrJ6HQL56YhYTWWp8CWcGH3JhXDsxh2eQGqgALMXNddxscxvrBAX5fnwRS8k1CyQD5F5BML",
  "key23": "5yxEVC3pCg7LyjdB3tRYzSULac1rYufJ2dZvrM5TQSdFkPxfsJUSjEQeaFdf8QXW8zxwu8L5MB7VNuSNZ2hesBPy",
  "key24": "4k1JotmZDCvYdU5CrqgWeNoyiZTnfvxMEYb6k659u4HE5hTgRsbjsPGT2FFnEbN5LjukLntGLGmpwQgaVZwBbGTR",
  "key25": "CF9BHu7ohu822tK51CsMogAResyQybqmwR69KGsJQJhBhCGWn5o2toRcU6zDWnUFTecrpMNQU5v5NKohXMDGJTy",
  "key26": "2r17u1R7p9scCR31qcKghkwmGY41hPMxMSYVitnpwERWahFWix9KLToxEqY4PCxVwbRPbYHKaNGXNz5rJVsRPnKd",
  "key27": "4P58n71VZ3HDdSRPoDQ87bypjArr8Y8oHTdUidi39URr1x4Jyi2DrWwBLk93T6M2eSSPoy88FKG6EntWxi7tjyXp",
  "key28": "21GQvk19A6HH3ESxW3v6QCyAZxxyq34EYc8MzP12otCu7xaQwJWu1hGED682eQ6ctGugiCknYUK2Ng57jgPhU4dE",
  "key29": "Z4HKe2mr8XxpvP6PPkauZv3LxvqXEBxPsLUHttrsPB3UTJP36x1YuaxcgR76ebbbdGTgjSUGvCVn8XY3xeqch2H",
  "key30": "3S72R6S3jS3GfZVEf1C8X7ug2zC9wwjTUtdTa4wrRKptX4ccUsDSVLUefgxFBr3dyg84Gx7HR3G1Hsyq6HD26ACS",
  "key31": "ez8tw2x3bbdzTBECN8si6gBmhYCzcW4AaZnC5uC7TmiU51MN9qWCmDFhdMK5PobfSryYZ8CjxKEQpAFybak9DyS",
  "key32": "58VdULo5EbWkDCpQ6wxjNsbVWR4zUR3hvHu7wb7Ev6pmw96iQ7BzuXsySDFe6yhTrpmX9s5imNk9aeGJvfeeyFCZ",
  "key33": "474HGGrddM4Fe7erxuyTH8eXT3p7X2JZoiYfA8gpe8GhbjJ1yKTpiug7eJk8Sctf28orMWW9R5BpcAL7bmPdipYk",
  "key34": "5bjJ6ewoZUhSAWdCNGaVHSWPSSBjuiXfV5WAp6cxTBXBQUfp1nxuebnhDbaP9RaR6ZJtJZeNeZ6GncHvkpsdrZj4",
  "key35": "2sTrYaRytHfzKtbEZ5FYbwjdB5AXNpC3CzZoFtoNUXtmWmVfEurgQFnNnuj9RPcUSJnWRaPseR91wM7bL51SNu7R",
  "key36": "21KCvSvmohP2opzZHoEXA51ojQUdu8uieiz4W35rH7qc7A8GUD6byZoYGZQ49jAeeXnjtKHYoQ4M2HC8YBsoPfH8",
  "key37": "4m1Q1fzUKUCYMWhYdZzVYWVXFTEy3U2jPAADns3YeX1ReRbaxxUmWkj8BLnPTHnSfra6xAhVAacFfkcWMeZ4Vxh1",
  "key38": "5quqxLfbLF5mzHTjW8me4yeM2nKcYwyhFcLEozHSKtqyJCuYg32ksvYqBnxN9mzAZu8xm4rLRWL7K528ZXN6dgd1",
  "key39": "5PNUGgC4dCRtcNLD8eQJTtQvwWZYyZ4dHYcNK9noAfL1vfSaKEn1PtYDHwjWaFEaQCnG5wCEr3yR5DsucW1L5E97",
  "key40": "5DBS2PmWfVLeXdtn7EyfWM6SqimoXNbHaE1iN9GUiQJaNK3Bjw2FdmG4k9NUZgEKgKHr7D66gM8Zprh4WxsDFcRD",
  "key41": "4ZF1WfvLshshu6yTmaJMjyRT1JPKW3doSvAHqYp5CgqkEtoMjVVkW4UtNgGZRgMnEvL4fULtzC5WGfUVDFSS12ke",
  "key42": "4F3qB1enfk1shjnaWrgfxhrYTheTehYbjA3PUL6F9cKSXux9LysjA6s3vUiny7xChdL8DE3RmbGhrrayEvGsJg72",
  "key43": "xpa1vxNgiwWEKM6sNjyWgADBnYFGqJ5baYKfGe9um4147i1rff42o5qrmrP6XiTfwdZszmwPxDYiv15pMgzJ6Bx",
  "key44": "32vYk3GCiyPBYiPnSGd7ZSWqzBjCEr3QUji6AvfX4bzSkGk9PjbhhZfByCdCpJsy4whK8FybhhmbfnCGjNj87TrT",
  "key45": "nYkdcZHq4dqNZJN8dU7jruai7DU6bPWxDgU6YWov8rZPAVDmAnZF2NpuYNNoQ7BrKnN8J5iHeArdth7wmKWnBGi",
  "key46": "3yW1hsor9QZYXVk9JPjFXjcofZLHMSxXtu7pTt1Ch8czjzMhVAPQ2drycGjcC4kseZvxvRHFWhLbTHgBLjtqK1Gy",
  "key47": "2ByEN9wecfNZ4dPnaKLLk5aKzy5djmWGjD512fZuNor3Aj1teNgVx9TTBgWUz9Qq9cV6sV2u7FJYG3AjBYk6egbH",
  "key48": "2NzsEAP59miCNbDZnHZYeEs2d32Aw1YUvP5pqRK7VB8Rpae5ehq5o3FSq1cxkueWH2ftqXoW5FdZhYrfyWwpvgjJ",
  "key49": "bdXdHMnjy9Le4ScyeNSh6mEYExiY7Hp537gG17y8Mf9scLVWEze84oX57UbKL4LjtjCN2SezigLX3W17Utfdt76"
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
