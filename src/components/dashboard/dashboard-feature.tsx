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
    "44nSMJ6Ym1ai7YfcKczBviEf3xSyWuyyeRquZ7gzV5nAzcZfEMHbARVmKVqYY3VVCjeUhxrqhyKk9rdVRxSvTGVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1HHWV5xMGTaQJZxbcsZkq1k3EXRSUsRXRMZjjDLAY2cYuA4PPacoUGXnXbsU9wiFoDU4ndNDNTMfsiwyGvNdzS",
  "key1": "KDQhQR8VBHyuAy4dTJMQNZYwj4qrdiLixZTbg5nHhbbnhwq8q8pZwsJbp3TgR5fvWW9JUfRjjSnk69gUKnT6ok5",
  "key2": "4Nn8FaSNqhULC95WQLtWKvskSaLfbYdhBUPdxBec32k9H5MnyoxRBRrpCPSwh4ZsoSWY6brdLJ8wdxJZZS2Pk98y",
  "key3": "628w4iYr99Qtz3f2DHBqFQxE62KvyerfHyPLDC7id2b8R82iq8z46t8nBzzcQ4R1pqeJ19YdrW4sxiD1nZpHHs9b",
  "key4": "3B4ErUQAVN9FkCSTDT3XiYBghRFUE2NjeACA1hpbnHANrfkT5VAfaK6kVbRi5DvyEc2swBYkfXnXsfv7teM8wKwC",
  "key5": "2MBCniNV8Ga1DMB2cB7fxY1iKq5F5Lhx9SshtiV7hm45Wf1sqn2dkb8bW9VX5KPffe8bR31vFFiAWukZ1JtLxi8j",
  "key6": "4uqzD5K27T9wvh9Q67SpuunpLf1wEumpkS5oT5q5T229bMs2KBg88C2uz6heXWJWPpEYWUtrHYy7iHxmLq3T7DG1",
  "key7": "4fB3D7voWTqHYTqgnd6QeDcATHz8KcfxvSUu4yFxftpCYdpejRP9nPjmmNZQnh9jitSdEFMd6ab7kVufixLF3835",
  "key8": "2k15Ti7qXRhiLLN6aWd8LrKgpf5P443aHXiRLccRqNEMFZ3tTMQCouJNXeT2bypYHgnW7osiYEv8CMPCQpPjU88K",
  "key9": "mjfgXvyMYrn8xkS5DM5f7a2EmGKQjomURupB2nC87KSLdhyLeDZZioJy52sTLdmoBmgYV9wmf3DZsXKamtN5fiw",
  "key10": "2P5ME2PCnWPqrkERJQLBifVssYqWoGVGwNqRufXktNoXe21FN5p9NaT2VhqSYSBkuQoDDNJH7SAmd9C3g7Fmw9DK",
  "key11": "4gH81sfAE2jFyGMA8hSg6sQsVaUoqrBEbEAL8EiVwuA9UPzkaPyPzpcQJZa1Wg3ujyYrm7BKoYJWCWFfxXqbGzRx",
  "key12": "21hsqrBsFdJsckmHVVciVXgDiDh6uaH75mPZPiPsiAsarTxQsnSwFmE8yByTGD87M6H8FSRLxwwbiJPFD65htqL8",
  "key13": "67EFZsn9LewkHkxHpv5KTXefx9UTvpbEFJdHXTGPqFhPjfXSgWrNZg4HLuHnGoxdsMA8mgEQuYkcGRmTVuLirkCe",
  "key14": "28kfwrriFoW9nFhk7vpeZviB2ykFmrcSPUWrMRWWHWHsKpSQYbExxRYMnQLspZuv6mYXoksB1HAuusPKcPk5nVmn",
  "key15": "4xx3i5PyCCZY9pLC881qimVGRPr8VNyS14bKy4mSLYLFGb9B367BPQXMtp3CkrRJWWgvmPxrRkvhmNw4ccvHHKN4",
  "key16": "NHgndpXv8EuhJPdQnUnZWW3JTNz8R8WjbNRYAQhpGLGJLcmZBMpczZcdLfW2G7FTnxBtVrXTAbk2Roh3a4ush5j",
  "key17": "4xyBZFmFgKaJ8DQj9swwMjHJJqrkQBGVa2dNoRjwSijTqAsA2HYasAWbHLiM1KgvciaiRWk7EZ6w91M2focY2WXr",
  "key18": "4M5PNBZgGwFBGpdVLEKuCMQ42Kpesie1SV2D99SpTG6xx3ADCD57wLP1SZ8ve2QJdbuMFun9aEJtfuKYHfBKBpN4",
  "key19": "MeCtUmJaP9799UDYQMyms1REu4usXDd7edwsurcUMGwDvrBkcANCgyr9sPfd4WsuwMPv5QtdcAmK8nwd3mJsfqb",
  "key20": "aia6e5FKQH9DNeiuyfsKXQmBNcVgXmrozHCrGLo2XUhepLLKRSaT4Whn3GTB648EF8yQeTr5mUYzbAgg6y5kpZR",
  "key21": "2GZKCysgyHG2SXA6cuLvfhtg1Tu2GQiEuiP3mQjP6xhTZzCLZvg7Z6R7LsK6oFadFsvUCHQDvBXSLYrRmGXfM2io",
  "key22": "XWUUS4ntsac4uVrqS6p6Mud4CBaE4nnosR7KCnxB26WEjbe2b7aEvo6MQBoAmkgppofbHQ4KnEdZ5TsQVcu6CHJ",
  "key23": "2Pr3WRga68v6pLhqDFifaUF6i8emz8FR1V1pXyHsYuBJLV848ko8ckibQp7ew4pntbLKAVbsj5JvwZsoekataUjQ",
  "key24": "24kyewNW26Rfg7WEFh8H8tboUGgjhHyKbkSX1LofFo2FKNacJhYrDJEDW8VfMSV8pcrvnsQNbSeWCbxg9mr7QUvj",
  "key25": "48V7yNosckYA5Y6E8ps7eKQVqFLRdephAqsGkXafB91qxsUgcULo2Frh6su7e1mRybEQMWqna17y9ytA2tbMDRsC",
  "key26": "5LSumDMh8s4Jb3AY1uMfYep4hqwycQzMPrFFxpL3cHiKSjXBJopCQKNnatFEt1zV6jCZsZJHwKUF9SJpvjWK8gGN",
  "key27": "3JA8d9anvskPd3Gd8ZkGtHPQdB6TQ1MfgvNexvtRJCnvLzoAATwj7kLjueYSR5rcvtZ234qNyJe5j3hvH5USUkSy",
  "key28": "3Yujo6Y2r7Ta9b6Hj3rVK1JdkTD8617yJShhLN3iiiDhByHfQUBfHxUK4nX43XfWtfYbqPPyopmHe3u3B9AsyZB3",
  "key29": "A14PupQahjvWf9GSXr17yxwCUAGJdPg6nUTziDYNaKAzsDTvboEByX1uzeK7MCYneU3ErGbkXhTAmTf7uH9bM3r",
  "key30": "2NFnyGz4q6a7gXW5z6GcmtUdcuXEDuvRDBjQLgzx7K7g6dwzH9JFHMApsdBoXHBHZWn9Ck8XJeYrVX1Xc59uxi2n",
  "key31": "3ZpV5ZaYDumG15xFeD9fe4CrjP7ZmMqYiTKRuGTYMegoHx9AvdFaPaeBxQy6ryXeuMJm2v8WMrDnHYifBrACB3A",
  "key32": "2nNErUyoY2Q1P27kB78J39rvxRo5saj4xeKh2SuM1afNbRVj5GZpZvx5SM8JtDXUJ6ShK4GKdFybEa36RTQkwcR7",
  "key33": "2qDVWQdcRYH4ooW5jgKkgUqXnaErKgDz4mYeHoXpL7HcSfVjZkHbUjtvYg6kA7WuHwFxqPfWkYnzSG2Ej79fo2nu",
  "key34": "5Y9hQ5FdcEdSJnF535EQXpzBmSRqzaQiGNChTZnLwKqUotdhkALQxtCS179s9YYTmo1g1PaQ54LvNK5K81GyLFQp"
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
