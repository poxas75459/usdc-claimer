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
    "RpimPhBTTFSGpYrqF6yxNWnifm75NeLGBpDC8xRDKBbnhFHy9H3PEqwsriFik26dCGsQbidLV3rNZuG38EAgZWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLgPx8eiYtjv59nt1rCivFsYQsiLnBusX2xp7LGkz9Xy4uVviup7orPVWFeC2QUP2w5B1V1jadtLebfEkoPp6it",
  "key1": "3n4caT7dcApZDUyoQoncGEjdq5aZSczsQz1vbXziBou7KLqQgpbAM8a9CvSi4GMBSNWKzZrhN178C4em4jHnHrA8",
  "key2": "3mnACYGgzBbqEbtvqTuPDP8yW9QySArJRneHpqKRr2qz9kCcM4KRpMQr9zLSqWS2vZamvbur4DZMiBqpoUmzuetU",
  "key3": "4RpZfjFK7vg48VonY2tzZqHiKVPZeP1mh8hYwMnDdzmsUupbFZRsWSXuYqdV2GsV81rRDHwbFSCe5CXUjGVTYDRP",
  "key4": "61HSvLYzMgZEJAPKViWuxgGG9WjoxsA9Sgy2A4QLMdYHkGLe6T7Jmq22tXnaeZ9Q4b3GVeBgN6inT5aR3Xs4oa5L",
  "key5": "PPpWv6sogNpHudMsXzVgiS39KZLDCwfxoszqg1Mg3rpdmw2r5EJ9NZT5nGUuW1E63QyXpkyMsRLokWtGqXht99N",
  "key6": "2NdSz1tkQf8TYtSkXhvorifrvBfx4Dzq12w5KEdS8wKqH5mDa9ARXczczDd4b37B3zg2o4F2di7CvFBTTGvJYTAN",
  "key7": "36csY73S432VmxUHMceEXEwYUmm3zcorhxdjL5j3K89GhBACdoQEHgVZsMrPJ5hgA1B6ks67GwdLqFu7yWQoh6jF",
  "key8": "67PmUkGc7WB5rwXWmRyraxvR4u5sWtVUgRtseQsKFwSRqQyHrb4ApT3KYZydiQpuDYaWVrhYPct8V5tjAX9THSAw",
  "key9": "5CQhvxZpGCq9CMVF9AqjGS7Lepjj75gRGzHJGp7zactpGEeJy5pudKGKqFCBWz8Hctgme1zM1h2sZYsJFUd1dWX2",
  "key10": "2yqff1Bqc5KUxKLcKaEcnPwj3gHMS9AR5TDPmgzMmyzyA1gqNub7ePG1ZivYhMQbCdtJgfLrtz7abEyURyfRPhCm",
  "key11": "37m2eTueFu3WEEPSQcPEFw17oywoYv3YkGap7R5Fvr7QJgvc1czUKQPhSgQkxd85MbmjjPoir5MoYc9snRqcq3BP",
  "key12": "43TPe3LrhknSrs4BKL6TZLb86Bj62YkftVkZEGT9LaoNVNy7ia1SyoXBzS213J5FcZhp8DVDENPb2t4tjsSSQ6tR",
  "key13": "2CRAGLs291uK4fML16KjHZJ4GagwLzQ11zcEtXy9rr9Je5m7sqY1iXAMNpzmgqRC1RvxmuPETqtJLNDsqF8kJdqX",
  "key14": "4Kg5WW9beQpGYJZTbyb2XsPtkTw1qNAVmor3bFRNWTHeQ2QVhep5FmafXq5u7kuxEfxpJTQrxGQSCmbpdzG8CnJF",
  "key15": "bdksUaiKPqDKbqPGps9szmi4AQu3ocEqkRRh5ZeizxuL4Ujsg12RQRuwv8tsWyRhbZ7gdquqLj8YnknbRU9CHV5",
  "key16": "2UUtMq86brEwJw1VairGMKtkNsDy2oUdVeadQ2YtenCSA4rusF6Frf57EUDC1JDWMDzhfq3gWnfgmt9qHYCJ2WqY",
  "key17": "4oeGbDtFBMcB85SgwswjuXvuWLubbpYiUY21xF1wCmFFW8RyV453MMJMHmL2Y35rMo4AxeABcPg43xTTcBseU4AJ",
  "key18": "iLkec1zaXf9B7jdG2kDX3C2hcyphGYLMuoUKSjuM8Kpu9yyu5f16RSiwoZC35tYuwSLuhiWCk9APEJ7Bckk4cgx",
  "key19": "41xsMQGDrkKa1QeTyRhyVQjRMrMCTrpeVTZEoqDJ45KCXtyRhqFHCNsgXsy4a3S5sSCrHxN3zikdci7iQfnNx1m1",
  "key20": "4S7WYcgydBWTfv5hgrNX8fmzBP9zqaW2J5SvNj4UfGxdbwTToXeA9e3Hz6VkjEMnRKMBkcuGXpAxBXMXQNVjU1df",
  "key21": "wKa44bzs5aVFGKJiCq2XrAeVp1LvqDksMXBE5y4e8kaSx4aq9tcnsV2DNdFPHuZYXSzHMD7FRdb2CxbsC6a5o31",
  "key22": "3SfUGqYJcYXucAwVv4qtx3Qp9jCD4umaJJaPK34iMHEoJWSdqonUh4RiiKkdeat6GfP2WpVt3KBxnZdBAcsJsVyr",
  "key23": "daHaTidRUQw1nzbasikVLoUPhetLB12MXUGudHEnje5nmfZw7tGWuK3ScdV3biixJFKGqKRoGcd3xJG4Y4yHKsL",
  "key24": "35MxCoczHuDw6UX5CLcFAADQMr2XDDisSW5bjHiG6LrSxKN9Z64Hn2nTxi5xJ6vZZBd3Lf2XQ5UBRZiBDGS7mWHM",
  "key25": "4GGvpk4rykXsj2WNYwsBFwczoA67seuvB1kk7QxRjaBUZ7VLx8zvydsUxbJvcw1cfJKCaX7BtH6aZSDxhL35a5ud",
  "key26": "QWRgc1GAvC5RP6PJSxCVzs3WZyAgRydwYVd494EyodHxR4EwrooCwxkUUdLdvycHXKVH2angxV8w1HqU3PqEuKs",
  "key27": "4CxTsYPPDJ6crRrzPWFYbjkHUwS5D4ma5ZrEYZphu3SwUUXFeixig2VdG8tTEWEaumbEMKFpi9tkUNbP3EgWxiaG",
  "key28": "4RFJ9ddyb8AY8KRyu7twQXo9qCwsNq4sLVvG15x1XGjExF1q7fuTJ7psbQaGN6EdjXBcLBy3s6E1ZaKNqQasVBu9",
  "key29": "2pmTk7jVnjdnU9RWkGX8eR2rNer28bH3VF4JUxpPstYG5BRM84VqBtyMYJWSidSkmp89goKWuVVLdatsgpytDymX",
  "key30": "VAXQXvCXpByja8GzxLWCE92T9HZk9J6AQB1bA7RDtNpuKz2FUPrSgMqa9qeZUKdXBfs7vCoKHWwktugkghNoh7L",
  "key31": "3KFdrNuB84k5WnWnkJpFSecPiwxWdemBNdPh4vfAmFb6A4mk2iqYajR9zt24hkDY3SjLck5BfFReiz6v9AAGBWMS",
  "key32": "44hddKaCG5KkSgzMwJBanqxXDsck7SS8ZH5crKmFfon5TSBfuFeSuUQEuopmiP1d9w1SUrCEFrELdnLC3Z6DyYnX",
  "key33": "5f9qEzRA3kyjn1hsUSvKgXvQ7jGMn53NLUrAyB5TNMqbtosRcdg4F82SHUHfXMdzUQZm7w4aRhrPaCo7sheEGjvJ",
  "key34": "66aYCtKb3x4PwfiWfYAMb6Z87XLviK9AzrdR3YG7sXZ44d9tnz9NPTcbgdNbfzJ3RfRz3wPNUQGYeexFLMEGQerm",
  "key35": "3Y5nzeWKnBBd8X8j2N45Gxsm7hpQvo9jipEiCuJZTNJ8eMZvEL8h8qXwBwuyeRCrtEDBSt5QXu2vVZDf4J8173Rb",
  "key36": "2po2dh11YJMwRBThh6cwGeEEcqyig7uYwRtovuPviTSDRdVJyndMNCWbRrJ3xVGDNjNJ4S1Yfm1vnq26MYtgdV4s",
  "key37": "2azNXhu5XX4th9im85Ly1ACp9pr8VKVmj6ykgz7AgbJu6XMWDHctXQPF5dMQ781PjfQRXxTg3EQTnroU49KvkCce",
  "key38": "34XDFYtrxgB6ZSkYQYcKo4c2w2XNVQ7c6EkY4AnRFKWji1pz14sCXsbMRbwM6Q8nYowPhAMR3q8mfT3TFs2thosQ",
  "key39": "Rvn5ubzsQ4KDWUMrVwJHGRWNQSnAPeFPGeAkXf9UjpKTqkWyABaYXa4hmsxoGeSUDtkhSmzzoMFDLxprWBs3Ao6",
  "key40": "3RGnqpjhB7pGpEXBwsSJuEz87sJUqE7rYXJD8uaWmtd7zYxbco3qf8U73Wqsvfh5y8dS7dmNAyyZiwfgGsY5B7vq",
  "key41": "5DEREsuZRTAwYjegmqG6VZ7gRmHsQj9bKitUGCwc1fbZmZcfNGRjbiMoWX3rD6hSxWTiSH2DbnBhJaEX4wjuKVcC",
  "key42": "4PGNXS6Bmw1BLYjxKb2abaCP3uAPf7BX9R17Kr9YLH9etRuBUCAh2cKfASYAXv3Tj3srQyZSc55qcsqk6yNucvEN",
  "key43": "MYz9G9ovtYEqA9VhFKouFH9YE2wQYHHN4ajZYHE4cPKzUXxwLjSdvkBFaZDiSKTAmmkwFhcg4X3HwagQ6zZrwF2",
  "key44": "2SXxhnsgNXu1UX9KZxa6EUJmZXYo3VFMzSNzmk2U3SX7y4Swcz3CjSKPEVasv11M9W8x51dwdNaBntrhfvLTFZ71",
  "key45": "3gUu1WCthfDv5kkfmbdTFr2SKfymGYL43XrTPSgP74ZBN2RTqb4azgmRow1DjiqFaJ9yvctxkxcktFZs6WTW8Ckb",
  "key46": "zjUx1GYxBUxLqRXb4Ug63uYj9LGzn76NQAMNPW4yB8pDmmTcfLXSsk8BLmi4NZty4Vj5vohf5DqWfiB5sWLbYd2",
  "key47": "5jKP28cfSYwC9ugSWTNAxEXUkLm9aoDgnUVc3goXvYLRzPPgSyEtyEcqYarC58W2XuJffWMr8zPEXr9BmKPX4fKt",
  "key48": "3ZN2kiV5dea5G3vx5Uw2cwEtGtuv6duPEfwxoMVTByUMRjrMT8XN8RsWj6x47GGNJB5f8AhqA32Ki1hTgxGV1AY7"
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
