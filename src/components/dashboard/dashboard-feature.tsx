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
    "3AgHsMkHuh7zmwr7qi4BhTXRNboubnmLQACYBdj7cs878qAjZ42S9A4xmD57iZPt17dwFUVXA4ZFbVXoa7zT4zLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTEVqPuR1fDAXjkAu6sJf5AfDLtJqayeRjgyt41n1Csf6gqeDaANwWajMt3PEhbebpbgJyJNsYmESn2vK5ZekCw",
  "key1": "5cBPjksMPxdyffdTL4wxVp2Xv47VztS3tMLzuNLuehcJurh2imPq5BS9BF6i6iZKJa6xDwB9mUabJzpcJEjEX9pL",
  "key2": "4bumbnD9NYVNDXBqPbgRQG2sAVWyA3ouMXvvu5QMQ34reLDJVvzcvBxvXcVwERhm9TCfvQSGcPykE53yU9YDBhjv",
  "key3": "62ypvftMMahVe2C8ScuLeekzmurXcYLx2nyygNJFtEVUSxaSEc6hKLw39pUbVXspVoiPPMPCUwmTSsjjY2pdTDZk",
  "key4": "mSjxQU6b2d79kXpbco4sdSvodmZ6W2WrKbwtUjJVaakD1pTRUDejAQX97q2ENYhaWN5E6AQZr6MHSjK65pa4rmg",
  "key5": "46qats11y1BZRWhPbdRdp63QcfQKkyxfTwBCBerx42xHCQ2FtB2fJoQ4Uy5HN1f3PVjH3vCvetVh16Gv3aG71LC4",
  "key6": "TNDzHB83GPC2w2DYWqDJTANV6YeufRG7JgRBTGC77wyegLVAKMn6XxFQPi61RDgpqo4Pmx4vMhzxTqWpgfMetdv",
  "key7": "39TBu3cz7zsZ2RHpAtW1wS5cWzviY8nmtFpWtbZuUXcfd4dX2LDESUML1UMJP8dfWdqSzTQJNo9eUKXpsL8Kj2zW",
  "key8": "Yn7n9QEerdBLtL24rWh76ca28h7w41EzBXvS31stLsovrEWjWSX8LxFTs3j32yZGCrgsGcpgX46LJPjcLjqCbgs",
  "key9": "rURmzJkj3a6Q3GP6h9dFQW17YAa6U9bZydM23pJ8swCz8FpoAxB18TNBSeczGFLwKEpuzJcAirsUnEx2Cm4JNQy",
  "key10": "475GVFE1kXCxxdjJgwEiR3ifU9em2dqEeJhvHfJVSqmv24sX2T4v1xwjrHKoaAbhFAbETaadGgpmzjYCakRDvnBs",
  "key11": "r48jGAZ4A1wk8wKGwTfbVNTq55PSwGNF9LQYyVd1EQuXsqJNHdmNo8U1vforprRDeMuzA9ohVscYQLNDNfsaYT7",
  "key12": "3ZwsZPu5tySYi24ydvEmgGzLU3Li3rTBYzNsmj4y5rsbtLdMjRjQoWvCFT9HnuEYRHHZHERwGRPEvonKcwFnP2Ah",
  "key13": "576rGpNdXxYXkFttcBCS5iFekgNbn62B4AFSKKsAYkuV1QXuMYQkA1XoMesPsiwHwgFdvHrVWprvYdHYfcJRVe2p",
  "key14": "4DmPR8VBfMynBNVczFLKGGnRWvPvXdTa8mnqXq2uVyrpzTsCgdyg3kiG4B714FRLY2CkqS6TNDXPaG36aJqbPUyP",
  "key15": "43onSxH5fHLfkL5enJVW2BRJPJ4mJ2pnwY9KTx2h6sQZNc1qVK3r45h1GBkeciKdfWwxZ7V4BE4Mak2m5rwegU43",
  "key16": "5Xa9xHyqPva5zkxjC5LCg4kP95PkwPLP7nKqRLo4C5u5mXXsTuaEG5XJNELsYguyrQFVMwL3BpT5oN8AwgY8PFbc",
  "key17": "3E2H7b7vaYDT2AFWV1fb5H9ZaWniX1gyrfvE6h84rgeVRxD1hHxW1vhFkTnFgPtKVMeNAcT9k2sffFc7HNcSFdSJ",
  "key18": "5RaQGiLkZXuJ6TRffG9VgxRhNkekE6keqNHwpBCVNQFe2t9a2BwqaoWrsQGPptRfqa17aBzCB5nrBkcwaGRR1JBH",
  "key19": "46L3cWupLMJ7rPseUgjfuGZ7Hw4uWPnJoGvRRki5H4b3qNxyrDm2neRBGNUU8js2pBpUdPoH9EriYqPPkQrtDHKt",
  "key20": "62u9HqJVcX7NSr6a4As1UZSsrwcqp6nsSjRR3ocwLGBJ2GpDVvv7K73TJaM55B25B2wGS4ogbavJfjHCKX3f6dsw",
  "key21": "2u1NdhMprStkYBFXnkZ8XCwY7EW7VPL4WHbrQ5HZz2cixPvHqpUkTwizKFBJPcbx3W4VHDNkpqk2Tb8wQaSY8m1s",
  "key22": "4GgPT28Vw4HGzsxvunStUdxwQWj6QGGtmGhJq4BP9j9LA6PfEzAUbrooTeWeBqyGeLk3X6CNyu2ztGou31SGZr3m",
  "key23": "5YggqxQ7nkZuAs6t9S3nSPY62MYFScSjFgK1gZ5nLW6osBUdPMrWbCD5YQiV974N8yPebDNmkbxYP9MqZgxhDG5R",
  "key24": "48nJUWXAgmi7Z1oEY7tRMMNsuFDL75oGNdPPQzxcQRuq4eVhi3DuvsckQ42vJUSqn4NubDYBKpLfec92xTw74tKR",
  "key25": "3GfMWp21Nsb4ocbat75gQthfbVLkKB783HsitT86cMKwcSj83usVgMJsWMKdyezvayJrWVT55SkMcDD4yk1xanhF",
  "key26": "Pmtnt7aBiwQD5Q7U2DoZ2m1vrPwVhWrJYc61HKoyBpyTgKn3ccxeQA2HsTc7t7sTrZsKnro3pML3CG4PyvNtREp",
  "key27": "2nv2ZY5r7baW7B52ecSu2jTvULRQe49SKzoDNoJNp3xr9atKLW4hNfXMCWQkJLGLuzNd3zd7KxZfjAu63yJd5r5R",
  "key28": "RG6DAipKNRGXrLHZzZWD87QXMnJqyeyzbnKRxEDC28cZ1fAvykG6UQei5rTnbfnXz5AyeKeX5WPhRa7qiG2o7DL",
  "key29": "2EECWvMX6KVo3xQtkearuu7qmna7sYvGjMKFHEe1n84PGaTtzQ8zQ5sj7MMKojHZzUtETbg1D2wUcVS3Yb1zXNQV",
  "key30": "4aGfFGeKYtP73q6B7XV1YxpidZQii4K1Ns1yZ77i1Rr15xrhKWHvuCZFoTcND4x9QJSVYBwPBDQQnTh5gmvQ9VRJ",
  "key31": "2EFpHeqG68Emor5uAcLvGAi8uMfDGDJ9ect7roVTnc1HpqHWLNo5Vd3wBKfoQrQsmGUEoQMYaWXAMydDdDXPskte",
  "key32": "43og6nGGGyYGjZeNhwd7jvx1Jnn128fj24cX4UBAgC44aeeFA3X13iT7BrpVKfLdm4KkpFBPZyDrYNpSC2p34Mhr",
  "key33": "4kWk2KYYciVhea6YyQKZGKDUSbAXFFAVbiZrbYwDAk55MmABZRY1Catw7QZJjbGBXwFnRa3qE4oVCJNGEAtnGkid",
  "key34": "4ESseHrAUqq8FLJ98ZK4uGc6qb5VdeQNXP27KH8tSVMrb415YJbCm6rcM9ewLvpyGBEdZbUu7jSdiL3UbXhJ76Pb",
  "key35": "5GfcJGLyRhRxyLPPmR9HqEBucwm51vfJfVZBzRyJjczDGEKHdyVU8yBH5Nrc1h9vmroZagAdSYAkmid9TThyLkSz",
  "key36": "2xRYpC37FM4FKytx5pk8SmWroLQt7qZ8kmfAgtWchmBM1PNFu5rGRy9kE7LUWj7LLUGDEAeLRPEqjCDcmfpnqJLf",
  "key37": "3gh5MY26sJZEQgAxx1oLJPJbZpJQEzjMZnZHXS2ZxMhhnLhtgbSZJMFr57PUmXdK3m7pPws7ivYSjSf5eY5Y1Jky",
  "key38": "4cd9CqT3jr1JSiXkxnQMMwZsn6bb2ynKGicrzzSEoG1dMpedxuHKGwCcsWPuojEVm6a3fQJ8tumxmqRohACwMt6s",
  "key39": "3oJ7cBTXpieSucUeD94WZwzwrTciEhxc4xe6tSuBE4W6qV2YQbQqDDgfUZLFEgDD6chUwXgLX4NdNPG32cfttKty",
  "key40": "5pRht8UW1XeysQRYrdacjFuNTQGcmdkG8ycVUp9JsR6RxYEDJPSJkLdbQ28UXqWeMk3TdiWi9TxSubNLNHQK5Wzp",
  "key41": "2nCXzJhZFsjhTmVbndo7FsHgAdbR8oKeZM6FMMuZHUkaSF6tcbaMMRjRaiSmfx9WWQNdnmefB9JQJj3CE2qQLzUs",
  "key42": "2cWGfu9SJEYHNfMMCu31hVLdJ8k4tvCn3CRiZQf57mM1masSCyNeoVgDWHa2zccnxPHPDGqjNMc8xJhE7ztrzYnx",
  "key43": "5MqFc83hLjiiJQWQMterw1MpxcTd3My3i9yLdReCMRxfDTzhvRrFcYAf68Qh1gMHmrnyxWZgJqyG3cvZvdWnwkj8",
  "key44": "1r8VStcCZ3MLNrgWCw8qQMhP9ouEgf6cBEdgHDd7ghQsPT1ePqYKs9CmkF8wP4iBVKvsxH5G9R9NHLdwUz545Np",
  "key45": "4r9M1EUXnaNSwcPyJb9AoDj8jWj2GqUHRkX54Zvn4rUfVk3izgLcjScvLpDNUa1To82Fjh6SLKQbcPvEddiEV8oG",
  "key46": "mr7LV4bx48wacLdn5gj6wP7mtsy6bfCAXbPXMmJvFoMYYSHG85qKrPPYivXfVjqp4ogswnwdDgHCtacdWG3DNWu"
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
