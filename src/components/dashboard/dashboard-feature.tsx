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
    "46pT5fPRNL5BWpXpAmvzr6esLG7TPDoCj6u1TTVLpPDuhCY1TeF1Y66aajNNBs1BHJXtL79F9R66rKmUuatgrRf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2buB9VRYhSskFjGC2c1wUs6kQM2vrrftyrfVRavWubGiHVV7oF1Cci3F33hBHcHKRRZHmk9ToRYFcMjMmcZGVjLG",
  "key1": "2nbcejMEJ5rPiskuyxvAeQQsSW2RFtBWJdjJK79WRwoLSf4RSjwEfqkKQsakBUicC77BQTpotUTtfBbN2tsTiQsb",
  "key2": "2uCgU6q7LVDEebSbk1XbLgnfRi3hcNFAEuo6C4YRfuPpZujYUFksHgUXhKdP8XR4SKqWbXEYd6hxmL54spE4GVhs",
  "key3": "2fqHbF2zDY7rkkHpkkDcuXYTQMh3mHpHHeWg7b4pRnhG5ktBSbvjdn7Qr97vinAmnULX9yMNxG4RnA8UTuXJJzTB",
  "key4": "38fkvhVYBQtXFuZS3rjCTNy4sdoNY3MobaFQRXoDHgYMwygi2UjwMt8udaPCKCx9YhPvAEpFa8WPdAC5ndkoVafq",
  "key5": "4SB5HSxhWB7oqZeXQeeDucNQusHmXLes7iZrQeabEqijwzUiYBuAfy5KvJfNkD9eRS49MpRcE373bJ7eBis39cD1",
  "key6": "3CHi62tuFJxmYifpSw5eGGLaWmyWRURZWQ7htsMDSmNxcxcSRLw2Cm4AKforLZHYguUxqssJu3N1f8J7HGWU1oQX",
  "key7": "3G45fkNQuq7L1CKj4zqecAe5RvJrLNRZUt9NyFrWaC5zFwsQ7FJ3LY5JWSt2soYjqivW78MVBCcaYNeNWqqKCLVX",
  "key8": "CUxjW4ixAB3SxUAkFLri92BPJ7cz68yWh8Wbh2dqEJB4raXsyJzHDCu8BgRri3oMRjgHHDFo9ucKKWEShwChofg",
  "key9": "4gDR5JvpzqoWH3tKj865JvPQGB4eec71k2CGzPsgohV2DbefUuivQgVKXY8CwtDk8e99ePZJYLfB4KLWCEDnRHTN",
  "key10": "4KHsVq9SDuwv38TR8uJQvjrS8WLqKYNdiXrthsK5MvF9vjDZ1nAAN81Dv9THKFE1Ym8ogU4x1qu6BpMBPXH3KBev",
  "key11": "4k8w1eTNbYTxQJjmzvN8oCb76E6sHimbE2YVo18JaZn1QGcNHanh1se1CEgr3E9mt7c3j1DovULLa43m7zzCBgJG",
  "key12": "2ir6XmPypvFRpVQZvPU5AsqJHFn6Nv7zUDaH1fR9nvGt29kbnXBT6qY11FiNmGQQKzowH1Cyp1UrJg2qqj67niX8",
  "key13": "5TdVYusUzXkbEHo8YHgeziidhLRbQ4yVRdS4s17hgZpeZBjNudUEvU2dHfaPJy29G1X784ddSY84NQQupHdxCKpJ",
  "key14": "2BWqVoNNpbQFfFEDMzQ6pP9v2QWPVTmjGZEqNid3KgFeuAYwuS388xP8qhPDJpATGTpR6VGjHbV646nxrQv85KDS",
  "key15": "wfunoJXD8R8mee1ydf8hY9qWt7NmU8epZskDV6MNQGPLQCsyrQPjNrgc1aJRsVdLSUeaGpDwWXGSAWUvUF7H1YR",
  "key16": "2DrLqFvhVzNQJK63EgLa28mV84FgRpBSNtK4LLTDZfjUJ7sfgAouuJc8zPxi2SrmDjXJtD88kcWHV4YbpGifdfRs",
  "key17": "56BzWDjD6RbejRXaGRmGMwyLksuVSNgMo1AyHUmdi1nErLurXgGJWYeVPG5P13byVqMqwF8egpuyfJ1HMfUSUaFv",
  "key18": "4chPVqWJYoQQCAJteGgronJ1ER4ZMsXHRxbYHzW142D6xqeGEP8TK8RVwvitY8V1TNSKkWz6CgntPBJZRA9dzpX2",
  "key19": "4yaBaRkV2WJeP8bVCaXvvCx6zav8nEoheLFg9nJ64Q3rHh1dW8fMcEgopXkqkU7xdJZgmYkwMx4spxtRnjbZg3bc",
  "key20": "5PRc3iTRyAXGNKiNYxto6jDd2ZTbZYgyAZ493kus2tYrh8No795fb58JkJGzdcPDQnNYYG9LEybPBp5rCyNw5x8o",
  "key21": "2SKNMbUqeE1vdcYG5UW7hax7mSVZ8xzXVknaZZupQrjKLuGL9PKVaFuSTE45Sd1L5xBWLtavfPTiBzqcwBHqXG6h",
  "key22": "X6tWeCceW24xTwGvMHq1ymavEhMbeVETxiXyy7Yw221hWJnf8ZUEYwg3rW1f6ZbrcjMnjA9jiFsxfryKy4kr2pt",
  "key23": "49upMVWGtqvRCQVAnhJV81Ki5nFivS96AxqWNQ9Bd5n9eP2ZjvH77ouYAy31ce4VmjFMiCZf1frkvjZJdP8TroY",
  "key24": "3EXBwQnut9WSWZqFVNcP9yDLSZsb52g2vueXg846eXXoZ9xoPyAn4msbweYHULZYUFG9zSPfF2bHDr8vEPK2WAM8",
  "key25": "y5JTQ1aM2hQzBRjC9GmnLq2tWSenH1pEvvEk4rs59vyUqQzkPjaJ6x1wXTVW3Zfa7MBUaQkM7tsVacc4P26oUrU",
  "key26": "EoGau9v6G3wTSaZD27XXUZsjTc6rgjD3QgizUd9BHNjmf2kmuazzdWhUVKiApnJJ2PqTcg2GLyea5rjyNJ4gHZY",
  "key27": "4C8JQHRf9mCvxRj6D5wQs2GTs5F4yjuu7MGKsYLLKNv9sYQXkpyQDWVFtuiNTbcvkj7hz7P7Ht7y4G2iJzHXfMuu",
  "key28": "43ETwfcbXLUJwsAERBKqPLWkyzDQj4ipsgvHFshEN1zm1hx16pwtyQ5mMFicZ5M2N9jWtbYYCS67fvuRheey3v1i",
  "key29": "5hxdPe6AbxnpiZUtejqyYSFMnMTbXgjPBdAs4aW4eFLCpfHUqu6Xac57aHnpDAJS7YwXX7VYas8JNCiE8PSagvPG",
  "key30": "33fRFA2ENeQi369VeRkJWsngAV8Uc4qPnQdZJ15nG4c8F9owSnT1ihcQgX9htMqCbBKGr2vwuKPmxMe6ndiS7ZPv",
  "key31": "4YtonNJ2zSNqvtBrZfm3mGc51mSHaop56pyQ1m9LmnNMyjgwsFYy9V6ceARcmTJwmD11jvSVhrH77bu8CDufibZz",
  "key32": "4ZRj1Ci8N84e2gCmAEjgvNrULtWMER37ZWj8QKn9d7wgywmigoMNon1Cc5wEx6eBWvfHChhT6GJUetZeLufLBmQp",
  "key33": "4iQAWaDp2qZwKyRtL2dHWx1UQZnZ6zY3BH8oDqrHWnL4afNjCthQiNnLNx7YEuHZnQxHp32YstH1K626C4DBBmsS",
  "key34": "3uu9XSxAHRw15rANRtd6CmNatjAPRaBcrNtpnSKupE3qykewKyk2FuSQ32jvsqXGFz8W3nBiN8RJRun3D4Q5EKPY",
  "key35": "3RVHsYj49zcDpSzsCyDBRe5uqFpJ2Ag7zM9LT9b2tU52sd1J96c2s8Myn4krje5WGQatEMQ7wgePQ1hcKedKv3RC",
  "key36": "66Wb2coVbBqhcMfz8bBLQrRomSGoweUeqro4853PZ7kevLwXRyGg6MvVhohiEqZyWzhwq6R7C6i2PsKtgQ4hK2ub",
  "key37": "5aA2x6CPcRQ9KghixPrmaK3zSi4f6VsAVAFS6czr4epBBaY94pM1s6EKDwj55t9jfQ5XncHrxWn3akG7e2vyFuH",
  "key38": "4JJptreon6f3TBU1eAeszbEuC5gP37mcffdXnDGJf4PCigY9kZS14CcoriC7EBwgmv3ppNYJgnxv6LmEgX3MRZU1",
  "key39": "2zrBXAy3WzYC5oTNSW1Jc18cyZpKV3sGeRB2Q3hhz1DLoy8XepDMbNQ3TdJFyWFTVMkzpHeZ8DAxL43Yu6jLfdML",
  "key40": "5ZSc4eR4meJsJp6LRhb3DRWVUepjXPzoeZe8S3a5Veq4w9MvTH54dj8ucVrTAdbSZsHWEVWSjXp1Q8V8VDf9YiqY",
  "key41": "5Yv2VZsxsuqsKRfDcxiwJwwLdLVThr77cvdFP5pTjfAi2K7XuZpecz1M14yPkwp7BgG8MwMaz6DVTNoKbMZqRaKe",
  "key42": "s6uXJK53qtLLfHXpwzwEJhfLuksCnsBuicSpkXnADswQzbMV6vTTiFKivZ6tKEPzx9DWnh8fR1bZLfGrcPTjkkz",
  "key43": "5fimvPnELWNkUtqU8uQpEu1RcLf7DXsqXLwo8Pp7UQa5LfsK4P79NYP1CVVWHX8KADbWDvgSN1NV62eSCmisvqoF",
  "key44": "5rR2mwqzh6SbQ3u7fwbgmr9qKTQunMXZcQvJHCg5NctP9ia7ZUxqTwWqmHGVJn3evLxpCFS64ak5JHXrg3DENqCF",
  "key45": "21UVFAptYvGFYhWHzp5YZaMd5anyRuHV675qDRdycoNoQXmNF8EsgnqLaVNah9opmnk56eXkgnMEHB68UrDYUuLR"
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
