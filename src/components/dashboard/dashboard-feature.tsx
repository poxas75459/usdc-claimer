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
    "3G8ytXYJ25DHbpYnuVwYmd2RTsUyUV1PMNN57bk1h83V5PYb42FBsucrNAToT6KtZotSYvt3Jh3ng78HUj5ZswSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ynxmKfKvCthMLEk2ZcWVtzG5dvFwd9yCE2vJ5Kjwo3gDxa3sVGRgnDFFmi8TY5jN7GD2fa4Nc6cS4BpcTpYtmJJ",
  "key1": "4MyHTA2hkUZ8tn7a2VvGUwmSCi2Zj2REk2eFTZbmPKDghZiQZDjdu9AAWrWTKxNxgs6a1PyBLfFABMeodQfBDvKq",
  "key2": "2QYHzmR1oQ8BbKdqMVX5Xt8D8iDLG6RC3mfv5pwMs577BPX2aPFrS3sPuiNUbsGbP3tDKVuhSftQTbRF6hBJQKjt",
  "key3": "3fBcBcGeqs4dVTNTPujonywiqpuuoeRr5S9tCeFpDQ1g2yEEoJPKr8FuSzJsmhQheUyKETi7Y7ZambXa6xZCoLso",
  "key4": "2MwhgkwYATi4wT5AGVmsXqdrb6pykmtP6fg38ERnZq84eS4ortePctyUJXiL9pkfhEAVTPVmVxegjPKF9WPyRjy5",
  "key5": "2Fnc4NL3nUjXCH63HN2jgphH7qnSN16irnuUsXKbvjojQYpGMqRiFqP7P7tnrkHSV3yJ6D1Su3ZriGgX7t4TXBx6",
  "key6": "3xEx2r42HNZAbdGvGJHEZw1iFvdfCkeHgAK9njYfpNtu5UZn3fHyxKfHxkJf2GjtcmoNgd4ELmkkfEDZXQnFHeTv",
  "key7": "4po9GNY6CQiSBtc2gN3nUCCHN6RyWmW3sTuysvvQ3zbMXp3J3BiCgJkDTuDUYQN3NcrUkJrnUdiv6c8L9aTCUkmn",
  "key8": "5EoU54c5La3vcXiG2D24rWWReGME12nNKpEacwgqGPKaZTxzHT7dgXWcqup13N2s7jxurBKWWjEGg1F9X6MP8Ndt",
  "key9": "2EDuHCen1ktRp1SqjJQ8V6daWiiivKmTMhHF1hxNYfTz3eePAAtvyXke6vFLPpvaGMpLzT1hTi2SEvUKhqYzw5nU",
  "key10": "53PS9jXHnf94dN1uD4W9HyZ8s7E6JmzpSfm3p4kuQuMNqxJss8HE53BpvCqsSWuMAe78dK68cc38U23tAatpqiiJ",
  "key11": "ZmkeXEWGpzHTnmni8otVTKu2cfDf45yWZwcivvbshK72UTaXJhNwZCvLpKfAhXsaofMBUNm4UYANbwFULrqGL4h",
  "key12": "24ZsgULPxErYRoQT66Hv5daT9qYMXv3qLj3U6ja7dxnqPr4NQTLXqTDkhfT4j14PSkSrRbJL5gZZRdz4jdoJfgC5",
  "key13": "218YhoRQKuX7SMAePytUVo929RbHPwWDieWZPMTY5QxwqS8zgvk9RF1GheUzNXUtamt2QWk8K9fqhFR47ssJBsSS",
  "key14": "3YUz1zi857JZgR7DxvyHzyVY43jgBdBAFwJ91i6ccifSgLS9e2jDRogKD6kQF1kg5pGL45T9rGvE3LbAJK5j3h3n",
  "key15": "2qBXgWkn9SMMz1Bma5obQXDdKU1Ra4gGxJJQYgsVCQKMXQt1Wn9vFxzNZ5t37yisjfnBcjaxnm4XSpzMKpfDuF3G",
  "key16": "64AHxXo995zEmMGKw6AnFADchus6a2iKWAWSH2tNvuwQan3N7Zxm77wkxdJf7FxaQcAZ43ELQSB9tyJQR4z44Wsp",
  "key17": "3ZXgMQSoffhkzwxTXcTTiZdsdd8W4BMfwXff6tgdaZ15Q95CxTdBp5DVHP9mSvTnqwnRVyia27Rmohgtyp631MUr",
  "key18": "4Hnh7nQEB1i5nvaqbXtxwMSQncoHWPHCyYEx6Npn6WghWciEi3D7VtAGPANpFXWbsCEXQUncwQg9kCP5mAFYMgQV",
  "key19": "AbvicSXbB5tVBy3aPnRWvp5B99WxT489gDL9hronGNt5ANc34ccc7tPA5uWDukEKquDRe2CTWdLAehBnrfDyiyS",
  "key20": "4WArmcRdW5RZrEmALZLuot1xFNA2tCLUZsJqdLsducHojipZWrFnD5Lsgv98GvKQQ61tLt2xv6VX9jLzQAndhbpk",
  "key21": "4XAxTaaN9LbYFgBRubEC3veFz82zK3vbALTJeK3W9YM2WoLR8PTid6KqNhjoy5sowDb3nyTYopCk398omJWsZvg3",
  "key22": "23NMQoGsDmy18RvE4jwfvHYgzYHBWdwpMy7mD7aRMbVYjLucayrWFPJo5rTmXH1tc337Wzj6qLmzEBTdQavddbt4",
  "key23": "4wdrCbeJrqUNbVDd1SXNWPm2Js6ruNikxa4ELHpUHEa7yhYWucUPejh7zYVTBiUVfU9mz9LKL491VNcFqWctT5de",
  "key24": "4PLUQovXFHk3MPp1y9FJqAufi2YcDYMEcCpEN4ndsX3p6UkEivhoznkaXCXRcuEZFWXiW7vdCyByfZD8BjuLKhuf",
  "key25": "4dos9hox6uACEJS26W89RDa396mqvrZzLDtNe1vhRFUFGshSgVi6J2MHV6Hc38avP9MVMKBohosEQh4ZegTV8ypw",
  "key26": "nLRtQmRLtGQtVUYLwQeEyha9McqSXaEcbyapHdK87poVfpCjgKnHnF4c4nFRp5nkF8JegrMBsFARrGCVfBkfh4Z",
  "key27": "31wCcpXiu9orFYdoB5gFaNQdktmWGfm6ujgNDwpxvsG1bFSq27kJKxmg3pDfHAAYVmKUGoVeYc39VkzNsANrmD6z",
  "key28": "5a9M1DjSFzCKUr9vLCTM3QM99QULTgB63wvEbW9tHg2djzgtZX65XMWsYpnu1VzKKs7tTaPDaQm12yMBNs6rHHz2",
  "key29": "QKQStLqo372ZjacCAUSLuwPBRQ7fycjP8xt3dMdkV5CExhv7LaqUbMRyFbsCAhsPA3qyYQ8x8Z1xeaM4FGHcePp",
  "key30": "63S1vtNNyFKDoehWusgxjiTkwy8Ab4BPBtjuf3WU5A9tQVJbHy5uinQQcoMgG7AA9p6Rn2mnnzigdFD7Sba3fAnd",
  "key31": "3Qb6XGJNfLeG3QZUC8VvuSav9yfo9tvB7tkTQGiL75PiLH61CN8UDMohC6KoPRFyVhUD7qgQn1H6q4wfkhjLLGKU",
  "key32": "22HDSihQTT8Fwfa24X55b1GLKTVcWctNVvA7cPFsPBn6QipcGtJ1tpfXDG4NjArXC7iMzsBphffCH1QJnjtQ3s7u",
  "key33": "2DtMdgYZxnPvYT9BrHSGZ5kVQLsHnWQa3FACoFErgERpCSw3DXkfyF7qhEHSnE4rM99B5zB3F2vk7faXbLJjKNpa",
  "key34": "3AtzzqYvREh8d3CpD5oqyPmkFhYSjhZ4Noe9UN5BT57fj3tBnTo6JUfBEghbS3QLeFnFKYjh5jVoT3oeQLvfFGSv",
  "key35": "4BExWET49FVCYUR2MrFQEuvqwVhc3NcAH7HgbVNaJQGhcWpBRvCtGMNax2XMZyo2zp6YhSfUpLhSfnGFBkebExhc",
  "key36": "4c4kFpvxnuhDegRFCekaKSWk5TiwYQF6teW88Gxs37QZRuTY1jJBg7kagntst1HyFBZtgaFJrZYHbpg2fjWJaJJn"
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
