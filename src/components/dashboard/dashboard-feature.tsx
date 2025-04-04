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
    "4TD6C6YQzFQ1KmCDd3mh6WbD3QQiA9nwjR3eY3Wa7W8S9ieBLm2syJLuuveFTmQj4XbgusN5gKYXUQ24v6QN51Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XayxZYjoz9NoSPNZbKDPEfeweLy9kJ89L52YbZ5NhuwxYh4kLK1X1Fs5wAbPCtdgkwovze32Sd64jck7ZWM3TVq",
  "key1": "p5iUfsw2PDVtgrUzx846TUf1tE2LSam3g8AeMBJ5coiVCR6UT5uu5jzMdq8Hh4Admfi3idQgWm3dVo2vYKhSyHY",
  "key2": "5ANsaiSSYK5x33Ju42Xy4fM6Ra6XWcLUSjmVMv3o5WHL5CSW5Gmw2tRHtf53wZ3DHmKfnusZ7yt9vNXwKKQz1xer",
  "key3": "62rVN2zhPgdRKmYjQ8XGrHeRWuzVxaeztnnZUhv2GjgB4wWgCdQ8UGSghKAXqZMiKX5ewUYxh9aFs2z2eeSDYGoA",
  "key4": "3j62KTsBGurVdjj19S8MZp8CD7SeqyapCsvA22w6eJRa8cZk5Go9JZYoi6Zr8CGyfuUGGgxTFdsYqrdMfS5E7sJk",
  "key5": "UrYRDmjeLVAiwpcTrxWwy2ASNqQXoRSdUKpjypBNLV1upGTzFed2JZrevbwxCKQ7MjcVHJCXnxS23aGZ1HzeR9K",
  "key6": "2uCVZMuVYepjBdYJ6joVgaK39pzSvESHfUZFXhwuwjVwqqsxDnKQaayj6arc8qA32x17mNorovSGAbGvspTKL4VE",
  "key7": "dn5Ao7UtdB6hpr26fyZarME8o1YMrjaWAiNzkFTdHPpQfoTJxfgNhsp8sRQuJVYeR6ficuweKb7gW6qQuRWehU1",
  "key8": "4ZTYUM9S8z6h1KFq4FvXPh6v974Sov7ZQYdHbEeSUNGxHpHyG1F7aNMaZSeSqb9MYgk8fEnhxYLFPgEMpJVLj4Th",
  "key9": "5tsQrhbpServ6PwCoiqGRxJ5BrycpnsfS69582W8dKDD7jB8VVsXkHdtCHS7bySo4oxvPExnvYNpwFtj1YgDfn9Y",
  "key10": "5FR6EaBo5HTkGo98CEsxDvxRPNVrkxqAh7SBXJ7WDKhzm2ztiw8K9H8wikxPNdTnpM3mcaEiz4jKL8TT9sTsJxYw",
  "key11": "2GGdYU8Rc7DrWNndspdJL7rqFeLCZxbkRo5YwuRDiedQofSeXw1Kp6DjiHLX5qi5jJTywCngphNEofa5oWUJEQX9",
  "key12": "55v2h9t5SqQa5oRSAVRBRbRZkynuHKgWmX28wycRUi3EmWaXKqsejtYU99zGjvSGK3A2G9ZzTCkfciq2pRTekoYP",
  "key13": "47LwtRynHYJDJ1ycrNBFmaQprXuRQxSeqzMRH3fr5WTdKZJWQGuXo1SPEiY7vCfKJfq53GpgzbcnPhbCsEY4Uz1Y",
  "key14": "ge9eNDYmEWCjXZyhfuktdtatmUUWHq867LVFLsJEi8mZqDKpGon29rYqCZyMbdrKzvon9sca7VnSAo2Sg7vprBr",
  "key15": "LH5ZhE46iWrKrrTGzMjykVUHkqVZ5tNUnoMJtuxoFrEmEjtFysusaec9p8e58LkDgf463jovMsvF8Vg25UfTQkb",
  "key16": "4eFJk2Ain6Bgi7K5N7SP6ZQhgwQ8fbW4YtkWFGHqF6L12wizduu77JPKNf2mCTgqyQUpTwZd9eQQhxqGuF79A2Pc",
  "key17": "2vzBCBJK6owm6PXvUCgDCtoYvp1PCGBCTcDnsqrcTf67pozLxvZsTAjBeEKuUjXrHdNCRUa3js5PVarXs9JCXeey",
  "key18": "5PrzFVPatwEaSCvEP9TKiz7YkSC7jNd9DimagMcGzTqiSZHq8PdwKbum4DCrdvvU2H94vPggynQ6sgWx38fwJQJU",
  "key19": "2viNhRAGrWbVtXmUxT4UpWtJfyx5pRxWegYsv9X6Tpg8DTyTNunNiAchze3uUAFFUd5He87XLUPqti2jWtyPeEC4",
  "key20": "4ETijz9AtXHTGDjuoeT77UpMK8FeKawu7SQ1xXzT7rrKNEJF6QXi6c5YW3w1EyArqBC8mEqMXx6mGykHYScbErv2",
  "key21": "34PuF939AcfpgFsR4LzMgrvT3MohckJYRY1cCTUuzQr1mjfUmKzPo3jTbcQ8UFx94SaYipWrCEgZzLVjvoYrfd9j",
  "key22": "58AciRk3BknASpPFEnGWEP5aAMD6KiHqj1VZt8oGgmU75AyNRLpNozxr9edn4vTfMjGis5m6JGp76jacgidPV9hc",
  "key23": "5ya43HUQ8aL7vCZZGiaChmjzmzVfkHHmKx6DRh5JTdZm2RWjpugg9myWp2FFkjUuqH8bxG8pUEmGxJZfBeRDUtJB",
  "key24": "2Wz8jwYsw4GWRR2NN5cMCcuDTwpzsDBsrQijju4J8FeK6cVEbx85hEJ3BwXPrTkFuQYC6YZpQ6vk6G9XqfN99hW4",
  "key25": "3gWrbz8JseyhjZ3byuCx1nsBhoaMhU5GgL8KCdBACjiQgu7n2BZzRtMU758wKT4MdFPJqcLtwCFY75SGeZY4Z4y3",
  "key26": "YNwM2dGR2DhzfK1gwdhorqQgyzNKNaudt8u5MWXzLpy2N5uahBtk56kc1V1fbuWgUZNV3sGrJuQLvdjiDU4xioV",
  "key27": "5SeZxVwZehWhbVRdhJGC5LdS8KXyRTV9DEXei2G4JN58y871hmyCkWtomPntZqVwcqnj4eKRK1ccfNcAmoE697vT",
  "key28": "2NnHid7D3goG5n5Mi1kWkWFh1fQJMQbQjFzmjDVeFVsGTDi3Gwkxoh9gEXjVoshxgNXFXPuPP5fZx3q8KbiM5WSD",
  "key29": "3moEPsJnGcxT5FW4hypv8yV65Kv6GmGBx9gHHPbpAcM8w722FEaCgWb5fBph5eemNT8BDzxLW4vMnvBehH8PM8Q9",
  "key30": "2bJY9St8RB9i6WLhMynet4nVLkRG4KwKD9Z1idjEuj39NVupU9vsgi3HQcpTyG75kytN8aZbQ5EKXRgEnw6gKofx",
  "key31": "3qS1UEoQ7JktzE3k6kBVxNph7KXiCpNayAGFauTPhU6iEQQ5ZB22Lzw2ktf2LpCSCvNBn9k35ADaYW7hYy4GSisJ",
  "key32": "5mLcT8zYUJr9FJYmGKNszvkmDUAE62xTvtspE6YweLuFQ538M62S4ez4e7zz6kBYySvLkcnd9Lyrm6UBt2Ci46u3",
  "key33": "H5LCioFNMMJeff9np8d9KaZJk8ZhbQVVNbeGd195Jsc23bb197et7VkUYg4ATvNZYTgigocUXsb5vRTGBuuZ6E9",
  "key34": "F4eVymtSb1aBXN3MpqDckC3vUeNSxCBgT2YhE9KWx4YQdXvm1GfY85ngaUM9nDsaUw6B77Cc4KG34G15cCthLPs",
  "key35": "3DMaBVfTJcur62q96c575MQ1yi1tRVjDCR7j3ZiuksXsPXRYwA4NB8kqWUydMQxt3wnDnSFp5jJV6BkU5jdKBujS",
  "key36": "5XGZ2SfBQMT1mZ77Sg1keFFun3PT9AY7mb54Td77ZHGqqjKPzyX5z4z6Nbke4VSg6oWGYbLMor8nbHPYHt3uwxxH",
  "key37": "5wunmqWrvPuPxwf23j8f3Ucy7jPXFVJicDbNMdWnvcc2jz916EmFYoeUA9KpifvqgL9SQbnexTZua1rAt4EwqPHn",
  "key38": "jJR6U8rz7oaGdQBmtrTfdMfkaEk5gwuyZAvREZLvjN4DRPzTJqsE3uF8f4bj7apub1KaQdCQBjpUagAQdShyvcX",
  "key39": "5RgbfEKBAYK3XZj5bt1AqJrPq4WSH2ZF1tBanpzC7eGrXwReTEzRYzTv95g1x163vrwCvSmNxCj51DBK6dWwLfcE",
  "key40": "4DueqNxT3u8bkkBxzveJGFmWfQQ3ybrLWYdXMaTMTD41zMXMYmjPihoTKG2QDheMwbcdpHYbsVah6A3zKGK3Gzbs",
  "key41": "57ZkBzQZwzdAizfWG87ZLECghWnBxs6XUzg1ReyVMbMMVF878KaPRcYggCiSk3cjtwjuG97ueVa151uKxM719Waj",
  "key42": "3NKdMjTPvCy4A1aHL6vc6LGD2Fd7TA3qRALdcdQDujDPkXTJy6arAd1j34Sx6qptcPNVvwd4TQ12kDKgX3burMJz",
  "key43": "4oUSPfny9BE1F84Nd3Ng2JwR7BkDX9D7yHxxkdPLtD42v4FaKvuPJbrXPzsM9rgQpr9AyCeCUKsHvGhapcQVBoSt",
  "key44": "VBFksuSfVePnkDWmFSwhT9TfwgVaEegRLmAn4qkaNeB5UFcuqdKaufDkDLoEkmiqkZMU4RANiCCxF5k8DZn5jJv"
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
