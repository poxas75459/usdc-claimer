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
    "4LYK8uFovDrVAKEie8to6aFrkMmyUKzd8WfbRpMDjVHEMZ4LPx9NGE6xQQr48sQe9hDXUdhTuYamMgTW9MoQbJZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVTbhWvEZNznQRAf6fs1pSzQ2qxhu7m3JXBNKT9QgTbpyH17egLLtUj5vJRdikUSZMiwC6ax6w9JggL27XVnL3d",
  "key1": "j9ERpVMj7deMhoXikFa3sDhmj8tMwYT5sf5vQgfXLag9Q5zAzu7du6MNSxTat1Xn8H4rNEHNm8coLPFmDkASv8T",
  "key2": "4vCuvo9NkWcMTXuZZ1bKsrtvt9Gvo8CTcvjfKw6FZ9sAJZAJYi1DK8eFVFhVuaZ7m8M86kghQUeUvccwfcHkQhPV",
  "key3": "2sKqjFoPk3DmnJaEYERLqjtsVncitxWZmEsxFfEeGoKLYo4iMA89MGjRFTCt5JMdtuhZwQemUJY1rNzmknLw8Byr",
  "key4": "FoxAcdq74gtvLMH7sVFp6g8VPMULYDyPLarNGqZcoKgWGbLDVfsBzEtR8FmnZZVPenKWwngYoqL9UTefp4WDejW",
  "key5": "4TH9wSKbjBHowWk85rGZcSkP7XWFJzsszk1Yx3bAGBUbyoNHo7qouUNmJnpHb49bpPJgpnpfoG8S49ANA4a8LG8o",
  "key6": "gBT6j9yvGR5JNjmrXShKhkGZtkTUMzs6XjiFQVsDwQRUSRBiQheowbYracwHt9w6hGDssDQY73oSSYXnF5K7bxa",
  "key7": "D4D8CePM4dz7uU8xhezJKkGbRq49KFA3PjErXz3LGAi4AxjBaJvPUZ9dk87qVtxsfMsJnaS6vFkn52eoJCs4qTk",
  "key8": "dQEghP4wEie4nWmKcUfvYqJfvDnDjEPg6c4Vw57sMxXNc2RrvEquRNKiz3AxrUsDQURzPJtvAM8TrWoR8XrYDkR",
  "key9": "3wqSyYnFVvhTPXvpa3ssbnqQT5h53Qqwf2EWUGfpSUXFvJ7AvdD53HnrEbBDmYRFuef3AD4GERn3YqABAgvbutoZ",
  "key10": "3LvwpvckjNdprn6iCRwWymwdtb1q89uffqCcp3sA1zw9Avk4jLqGE56bTrLy2cbdSxD7bH23jLKLRNbY4CDyaHiL",
  "key11": "2dCXu5TkJY2CxqyWAjcLs4Rn5Wt5XtQPAqVy96M6YG1ktKajAKAJiKaBWcoRk8XFGqAYMQpk2sWm6KCStZK8gxLS",
  "key12": "2sX5AhBYMKdsKipFbt18zWaJYZ5QLioAvDDg7CzWg7AdzHT6jcaLZAbMDgYVtmtURskHMefSUwLMdWbHTsa3sNTF",
  "key13": "4GM27G3Kbk3NxqvSJN2srsWoxGz299qKeQLVQVKTH7MdDhLSTznDYLSUGgjqxCvnFqpE4JM9rdApLa4cR36XatD7",
  "key14": "2cQoph1mEamhHpya73mWmu5zb4BiJrNJTSW8CuSfeUskPJRQ2S6RcyScZYJojyt9WSey36XiacvHfFaxZc8CxFd1",
  "key15": "5peXeKAXAiEsSit47JawrSMLt3XTErgXhKXbfxYTurJtBDfwymz9PBmFzydyakGu7TDFQUmaUQZqbtLa9eLpa5TA",
  "key16": "5nxcUK4yoqCepFNf8oTDPtozM73ER76vT4dagU8rsQ2nYXXVEmpRnWarXTTMWhoRW8ovjjaWn9uQzsSV7DoYsqHS",
  "key17": "5jchXNXA6Tycw4jaLKRREM3GWMUJSwJs7rMT2igxrBxHuye7nYdWdTmiziik9Upw6d6yRXpypDmvAgi6ecPEuWAt",
  "key18": "2aYT934N1SUBCk6EJxFgD8PrBbnHmnK6stWkCge8MPy58gFChwM96u7CkDgHXyqDjvZoGqMyDSPqnrfVsfYs7L2L",
  "key19": "3fUVLcWfVCwuFG8DnYGn3ncb4Uw9V8q7XruumsY4RtqcjQtMsKye8FDLitQWajpwAzrz7bEzi48FqdPU4iAhWByz",
  "key20": "huALj1VKLsBhRYUYp2svUucFVobfKfazjNjaecUpHi1sNG4W8DFpmAHaYjYUjPUcSbX2XUWRojNHxywSsdvsD4X",
  "key21": "5Tdb3z5fwvJ6QJJy8F6PMatzTnHmEj1NnoBmq35oK2wbnte3jhajoFYgdeKTERhqm9B2rG12LmC8Dmyh6Qp5B2tV",
  "key22": "dL8TAU2C1YBcquYrdW7inFCd7P1sPVbyewQF4VDMPM3tqFetbuRBozu3bMBcz2mcwELMxkCnQbXSKJXvDLuHTfw",
  "key23": "3kLeNK8rpjSppwWfsM2ZMrBz5gb94EKF7A7xBjnxj816y1Zhsqz99tAJ8dnFxkvk69DHv5eHzZqAtAK3cZrrqzMX",
  "key24": "j5YHWceryNmw1AuwhqxQSvrrm3Ju4Wr9e2qMLy8dwZFamSS6DHkU4tP47EhmC7KS6BwYRNyEMmYe4ihoZpsX539",
  "key25": "cqD5nnDBibXyfJ9Ewy4e8LuyHnk1rsAcSaxTfEeXvVDGiCDYBUWpzUDZM2ZTYVhdY2UnvXmEXE6otAaALnzrgmF",
  "key26": "4mxdLNvY9CUWCcBz744A5H3rF69paSux34wsiiExPajfNt3NkNrGYvg7DiN45XVYKpdTmT3P1q5v2PLwbuybf3wW",
  "key27": "3dbCmkDycK3b84XFeyNbpqPtJbK4QpwmpscJB6zVbeMfxAJzrkuHMyj43v2Paqty4aZrzmN52R46ey4fXXKQA5Ff",
  "key28": "5HAS5KMULu5LaChxkiSuitLZsZrgwbA32XYhtYjxVrfEQM2vcYwwmSJM1aQcWDvVaN9t5jj5852zTotUez2SPBbQ",
  "key29": "5Dc8NMMZuaAKtNNzo7toKgYSfjvhEaNMHwpSKoC856mY4G7hRrzzp8R8CGcHR2rACh3ENYVwwswyw2zSZVq3ms1R",
  "key30": "4UAJFPviqvLxxBMfheM5zdVwtagsBhrDG2gjxXnkKJTgwqqSrNKVCwpPWpx2f3vvWV5Ti7sW1GSPhokJnY4DmKR6",
  "key31": "4Dpdmtsg6PqCu8MtgrXLzr2j6BtUadkZikKmN1NuhtZsfC6P3BLYZLG95ENGNeeGezXfCfNdRsYjVt6pAqrs4r9F",
  "key32": "3BmLzTAWAaH9zWe6FmGZ9uZqjtucD3WHb2AnV4v4C2m8Tepnuz6JULihsyQY3jNax9BmRnjcbBBh5eotc36kH9gn",
  "key33": "vFWbJAGMXNhLW2kfSpp9dqDQGc5zDcgTgWbehNdp4K6MYvkNHA2Cs4GobjP9zBzBmUsd2Rr6GApo5EWaFRSvHev",
  "key34": "4u9SVWRu42TBdXT44qbWofVpF9wyLrQG7kEmDGcee9G2My3dqq5poy8XuwxesRSbSRRQRC3erhfDYgGBwdwTcV3w",
  "key35": "2aQe8yJ9puLM1EAo7m265FqHYELMBrb8wikNYkcF6gZSixrbJiWYsjUExVVtC8PC39YiQQCwD9bSYVCxFEnsAyGi",
  "key36": "5HifwPEK844doFMva3KFTr1XaSBA179uQoNxZ8sYaw8LkRgAm4VGZXKNPfvA3VbyYuvj8djpiNJh2MyZb6CAYtWc",
  "key37": "2M9HyiBgsaFeKcYjMVMbndKETQesRg9gNcFVaEeGy8fm93LiDkTanMQT9DS1VPjqXj8nmKbANFYqR92ecjzKvdPA"
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
