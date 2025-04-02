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
    "5KXKuiQaGiyScwso5goLGhy3MKG5azvzE3gPMyBi5MGgiTPN2xHwitpQvvUnn6ceuz6NLfaYTxBk1cbEPyAYi5G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NswYyy99qMLpdZvxUwtqsckZhngfFXZViSKeqztRVPb36bs2nKUC4ji5NwxWkGxh8t3neu7478oT2gcnyg6hRo",
  "key1": "E4VeP9ojfFGK6uQSRcrsaZMhY6LjpmKxCHfKiW5oQk3TXvABLRX3HtrokVvfdJoVNZdjinvhRa5oD6LiPf2jyXs",
  "key2": "2KYgbwXxF8ZRTnDiP9REsZqMtihwT9QjPQzpjag4drgRAhmuTkpzgs8qZKfqUjPCobpdkfpJKX2xb2tUnfcou9ny",
  "key3": "owb3i2sEebJ2X7neT3Kt3T9En53qRujMPRk1GuUz6h1XbHzYVJiuVWFaQ5SXfHHEecoLPMpY4xYJEQ7Qm81EueT",
  "key4": "4aQKRrL6zeob1qHoCJNodr8ZmMSArVMByiqqknjiLyJF4x3SbAJ8sXUzUxMhfyaNsWbLm9xvwXjsEJiwJTW8n9Mt",
  "key5": "38MNkhBDVmmJBX8beVkFSTWUTJeGJ8JtXeMA4eQgRJHGYUr6sULLLsRd4Ao3pBwjisnh6G5zX2K1esdrVGCm6LM5",
  "key6": "2bknj28zEsfCV4Ktg5EwUFWD81uHR42iqprKfCU2AdxbLvSqBWcZGrfvYaf4PMgyxGah8SqDFLVehJbpwMxR7zQ5",
  "key7": "EcytyXsfvhxavdReYYJuZsQqaoVgNZqPo9o5fEe6KB1gZYMogJQwKUnjHv1vuRwNYXBLJR55xDJbJGSgrpktVQ4",
  "key8": "4ig51ofAw2HhsnkMBqjv1Bh8w6N8GUbbYEBeQyihgTA2WUGJikQkf5SJanqoHApZ53paNbozz99MWWfzBYacUGxH",
  "key9": "5qyjZkrt2SA6BEKZcMjF8ksa4nV1B3BgYkp2Zf9NronMAcA9sRxEHKSEPB3x9dwwgS4gymx2rhdSgNC7F443CzTA",
  "key10": "64BbMqARBGyPvAc5My8NqV5soYByUA33tEzpT6hqUWSbPAMPQjMszEYxfzLKsw72xbadzW2ziKJ6sWfX5VkjtYVb",
  "key11": "5NneKF5zRg8xEce4mxZud62F6Tg4K1DdDn6gQbiCXZKCSFWJuLftGu7yt7YoJ23z1bgeSNZoX3KqwwUahXQRqtAw",
  "key12": "5naXQKJpqLxSx7NcHNuPrUYJPgJcrsrNKnH5iTCredtuVEtqLKPhwyLjdXqhNUJCXBSK4oUUvPRJiPdNcm1v5euU",
  "key13": "4VMTLNuP1E5cMR9QZGACFR7iKQTTLmN2iz6bMiq7E3KjGzXhJurZAy6UyLqyeTuejsUsgc5YF5bHwybZZbkvsjhf",
  "key14": "5KHyd4CUxG5Z1JFmYLLTFzmnLqHN5d1ZbmX9JKggoUyUSHm7Jth5c4SSbNN4UYLXAoXLWbzWS3iCdQUDH4Tnu3eB",
  "key15": "4oXENHui4Q5WtkhFrpUnLxaUcZ8cXqDYh2rvwayfcqoHQaLipPuM2oi9ttLasSUmmH1QHNUEL3oGMbLMPoDCvQXs",
  "key16": "3Bu5X2Z1M7HMgM1GJFqAjV9NnM6SmUWdEeZVjwQzfKfVZSbWnfGxDE7zZ1XBehhpufMtSxQYZ3UA1n6MrnKBxcJn",
  "key17": "2KmdW6QrUAkzPkS1fqo2TcUHxV6H1gjaxBozXZD4Ggc6BH7wUGge8tZVgiGqpGFTcNbyeQMpDzcg9bVmna6FT43R",
  "key18": "5dWzxW5v8T5GuosmGopmZvRLwF2HPpGhLW9q2VKqmnSmyVWmMfV1WfFW7ksM2A15i9kmLJBPVvhRNrjMXkSeMKcj",
  "key19": "35CW4b3fH2bASoHVcti9apBDMvhyL1R4nRYB9tSYivGq5uVVmoRJiutQuGph8WJV3KKEaJqv6P4uoJdcgipP29GT",
  "key20": "Lpvf4xwPfcCesY6cudVPvLiAy5A4iFR5sBnHvruTJ9ELFnyT1SehMCneGpBB8BMXv8pz8ACTfJYLJz3Phfze6r9",
  "key21": "4dwmMNvJVcQcsHq4PPcDWnQpqBUDpo3trVpzydGSEU2kMhoWFpivRpZnS2VF6dSa5nJYxi1Zew6nx7EVahGpbRmh",
  "key22": "613R4AfxjpTA8kHfozX2K6NGwGbFKHZmi8RxdkYjvPLdxLdv4VUWRuguNbnA7GDU5Q1kZuuQx9NXosF7LN2BFPLB",
  "key23": "9QR2xJDnqa69Lo8FHbkLk5ifop6GqkpPP9FHjvwG1r4ygLG1CEYd9M3WVRnHLiH4tfAvriyKrn6JdkpQRZ3GW3d",
  "key24": "oLuRJTeqocEGCpbD7kRbb1ZMP8K6J3qNPZqYmWVmCUt28LZ6bYmEEeDBMcYjxb7EiqZ1bCv96UytbdH2hkwwu9L",
  "key25": "iqGwybvVNGC8iK2YWa6dZ1vmbccY2WWQG4xqsTD1YvF2t1yhUr3nfZF71kxQpP7EoKBw6P7uTrFXsdSbazzuD57",
  "key26": "5fbUwnZfPunwYQvyUKj37P85zEjgcKtYknJNSMLwopayomqjRZKRR8oE2KCUjaLPq9HLhTVEbQHXVrbasWPBP5sF",
  "key27": "66PLSGpiN2umJxyuq73NfYk4A23kGuLt4hwkYraWGNf6SYFRXQAkEo6M9yXvM8VX2sDy7ykWvXBNwM3hWXpopVi2",
  "key28": "5hdFWiRPdK6cjAbxemeGRkGumWJMXQjcU4GpWuyrc6vskhtFCc3VgbWqcAtiZ4536WJxQEfzC1LnXUDbMwe18GqH",
  "key29": "5CsikKXk2uSbifV7XHj7h7gjHVZYsayG61a6hpbzwoy7tac8tdGwY7npxFbMPubEQ1GCe9xT2m7yprbcfu1KvHh2",
  "key30": "3yCQFSK2gauGF8deMKtciXzk33atxScsvHpCKfEUG5e7KnWSZ96AGynZqbJJTTRroeDrj1fryDc6PDCeMj1HEf6S",
  "key31": "3zN9RVrHtshFtYwFgmyegNetxntyBHLydqabGcxMnkWZQiG4dHYRskC7iVHjyYjvgPcStpt1H3RG87D5cwqh5sB2",
  "key32": "2EjnPPdrKMZS81Xcrr4XMjWRRQQXkj8CdutCTcTK6HCTQAAiih8WZagQapzfmwiFzQJg87X11X5xwAtJg8TNE8yx",
  "key33": "2a3ucNtkfQv7gWLb74HWAdnLo54nma5eFKh8F9BLQsFU98uuZ8AH2wviiHexTzAgGWqD6YEH9njG4mEAt7nj2FSe",
  "key34": "329dvgGy5X7GjHThWtU2gNaW25zevpVc46ZsSYj64yZwfgZVRxDopv1HyRQCCotn9JBXJoZonKWskWfkFgi3MpeB",
  "key35": "4awLXe6cJ4euQGC1bkkhbUBSp6wvxDm5yEo3stibLv2FSQeYuwcnfUYT832fLpemxnAhNGvT5CopUWgB1Ka1mvo7",
  "key36": "5GxRgBn8oPAfVYpaqBVj3eW72H7ZegP1DSpnw4wsTiRQa2p2WaWMeQrppnxJMhaTE7b59r9cfgyWLKKiHJoC8cbs",
  "key37": "4Kq4b5rMjV7ufLfpiPC2P3oWfyKcZ1fzri1H1cYDADmgPaWudyfkPYUEp5fYpSb4Gsppyxy7vF7ACoqxDX39pyFs",
  "key38": "d5VTt2qEDSpdpFKWdS5Y9EmVnAvwKhNPDS5jqckSeve5ciYPRayy6bP9WoDfxRDMowJZR1xqFiqSpifD1GmdpNe",
  "key39": "5wgPLFgUYVqyDGLaf2QZFWQBL5QTjMfqP1YojniNe1FD9ayojCuFt7xD1at1LyrKGuZd4yvmgHxqPfwjfc1NgVUw",
  "key40": "5R3TNg7ijQ8PugJDbnkbNcoKj2p1ik7smurBAHqA3g2nE3W3DzKWCi2zGZgdxavvA7VDsFCH4FkMFfrqHES7ifZy",
  "key41": "2BC8SPFXJF6xBSC1SvbHNPS9B6HH1fNV2yJbMdXNs9xv3eHczd6g1ii6DwjPmSYjjuAs9vqPLavi4sSiXMHzZ9v5",
  "key42": "3bW5qdL4Xu5zX3ymW48xvXmhPk39RRPKBUHzM1Bwj9KtninwAHAaD7F5Xfortz6DARWDTCDmwd6q9S58GkzNLduF",
  "key43": "rdr91dxq9oJVGXuesSvWFC9MYzCmbWL2B8rucqxp7ENwB759ftsF1GTGPcYR7cWhdkfZeJNSshXc4hwYgDYLcSd",
  "key44": "2DaBy2DuhBxivz2BdkNB9HfUWrbPf9rQ7Xxm8Uc4m2NjUhRfQkDoJmSKUxGjNUepARWmzm1Zr21tCXf6kVEJVKrb",
  "key45": "4k9tsvJ9FQc1FcckuUuB2tBDRJa6f5y1jsuFccwGt9oZFPmx9Uv7oUKycs3y5wr2TNwGj2VcEp3rnBCKTuDNhv8g"
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
