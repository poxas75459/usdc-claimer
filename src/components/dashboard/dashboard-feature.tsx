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
    "2tSHwWurhkq2zbKHbt17fsy4LCErphJRdnXipREv4VGHdYkRMqWit7jMAcegPXzVpGSKByXUkBKH67QUC7Qybgdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLYMXwEExVEbvYUZ5DbSbzjUWfNpaeczsrnRAg1fEMN2ng9vKZoXDAVp3RM3K3dx4ATzxmsYePxKdSmrVP2wnfH",
  "key1": "3BC89XdEizWcZzKqFouwh52NqR9eSYuw4zuJhNokETtPRKjMNiMG8beBxGNjtALdRtd8gHtbdi8QKsnvv6rcehd8",
  "key2": "2wGRYoggA3HykKXo8jK8vsxKhema4ByCMpsVG93DVGTboAQyGU5XdJ91yHwuyBgBYKi3KmBQHc54r7cvgxjhVPVq",
  "key3": "5B4kWKRkLnkf4trCTxoGvr4CccJXajef6BT5XToooFLh3LKbMUeVWSJAPWFyZv969NoAh9AALoVpgiGcqsZXtWAA",
  "key4": "42bC6zKLpAMPbqnWGJ8zNBrr6T7y8sDmD4azJC6rPL7zwMnojCBuF5cUHCt1KB9M7vqbmMC3mnkHvqv4tfBQQ8Mn",
  "key5": "5BSGqjBz74SHkqdvSwuw69QZva9WULNan3EePu5aK4kFH4T2vPtBYQtSHn5uFsN58tSCaHqrqKvi3gF4XzDWzqQG",
  "key6": "5w1fz8gPKGWv7GTXP7DRWjS9k5RUu4vKJU768PMvcQCvu2XG2UnwoHKDwZKcseihfGpxY37MHjGFTHouLDLeV1rM",
  "key7": "52hpC9wAvqo1MKC1k5pkNh7JkD43QQ5SJ6qVkbsXjEQXTSFGhDfz2yJgBmsTputqWLveaUMtwrHJV3hYnRtiS9z6",
  "key8": "4Hctjh3rNyYB5rN15BdkqePVtLEtEB6LY5YpaEJrK6PkkeHJFwD1KWwYSS1wDr7NXV25seBJK5kZCjsk3kkCZjQY",
  "key9": "358kKBE7UN6zc5jc7L24nY488wKc8zjcxWjEjp9oHSY25hznrp1xgWcbXerMnQrTrvD8LwaExUrnuU5NQGukWqbf",
  "key10": "32V7SkheawJTwQ53AZuRx3mvyhpmjkFg8CjV778zuLDZPDitMsHesxkCMFPHTzpZ5AANQBRkXGith5CKu6rjn8sA",
  "key11": "42z4CSChJpJn4FSuFYxE5j1TBBc3bkZbiue4uTntFnemXvLswTwekS7qT4C8mJP3Yd2Pup62v33CVDZs4svxfTRq",
  "key12": "3QKX8YxTjRCdR3of819nukAVXTjMVNsb5k4b3VExtDQoDwBkaQafYmEqmnV97xqfJqSkSx8KVw9gm3b8m8FVpxBQ",
  "key13": "5M2weYrNonucV3Td71MpFEPM9PDoDS3ECZNWKfWsMuvJicygaauapA8ZnV1jKj7P16BH7n8eYJXhpPmzv44paQ8H",
  "key14": "38cU9x7nTAMTxGta8fT8DL2TTsJpgegQX5XCSSuev8ZRSjukLDuDLJb1T6gYcDK68BVx8Hxorpyn3c2bpcDvUoUS",
  "key15": "2y63T28HwczSQrU5keD5S1vaXji6GWMBiNjDqc1wgwoJo4ZQusJ1gNKWoJeA94cDbxv6rSYiiA9t9enZoveNeLkh",
  "key16": "3M4UD4h4UzqV64cMgharNuscerNpNrCxnBxdYcgAjnJuLQHwCymVKp68J2pfd3vzGMYf6g6PsjGFmQSbmHG2ZFDd",
  "key17": "5ma9GC5UpprJEDVAEeSF7Fmcos2z4DbMgcdLFeiS4mnQyuy69V4kR8RAm2PLcB7mZa8R1YGqijnitCR3hCBfqeP9",
  "key18": "4yQ5vjg1ftwQGXiEom4hjNMCUCJG3FVsqhHMLVJTu6J8HmkmaS9eQRVaKXPhjHxvHyaSbxKUR2qJcmMGb8pv3qTB",
  "key19": "3SwhC5A1Qt2Z4Ps6iAagjQnrkE93gzGtXxps3p1HUiQamHQfNPSC7WX9Zcntkr3wnnsJtShFo3uScnnhYa4tWwXJ",
  "key20": "3tK3LEdfoquLVCJQa6zyBFM6Ri4Q49j5zbiYmZ4kWoWgKo4fZ6r3KtoagACoj5N9PuzPYm3SgGUiH5CjgTWhVXZw",
  "key21": "5PxLSb6o8k3SNjiRWV6QLmYgpVxeFf6Gqtm4YejPQGD5yCEZQLpmk8APNEEy6MF9i9M1YpoGwJU8YALohUfvdVao",
  "key22": "5hcTKXEvzndFfKiBLwXvrczLfBtBZwFWzGHtJqUA7rBSQ2SYhT7w54zuJXhwe9KnwTgT91t3fxL3XTRoT98SmkQe",
  "key23": "ouhY5NtkbbMzSv9umHyiYh5WdqDHwTdwLeM4m6ELuNUEpe8NFug8F5E6FeCQDn2G63F4BGZRAju3hEiDFcyjx8t",
  "key24": "3gcZfUsjFuFWd6okU9D2J4vQoH3KTDMqJvsQspbqBUaWQ9ELyogrtZARpa2mAoBaoRKhKLjomhanL2xW33mxrViG",
  "key25": "3ja2ZUi3mTFJo7AjsaGNgqwb4WxvXLfVnKur7nGRyWFZvEBLyePQ1sLRMbYRuA1VAwJ7q68gKshrzzAbWCRrJhKR",
  "key26": "3FEMXMXcT67348ycncKx8ovxSf45p2A6r2hMwHy2AmfaxshYJLmhDmVYpXzNi6RWnNJGPM2D6XQtj8oUe1d63ycy",
  "key27": "3JAc1dfv12xJ8tF7jmpbSVuDwdAV8ww4rpb9SDGAeX7HiRLJfUEAXGwgbvyHhzobW5UrzwWazjYS6TKxj5umvFmk",
  "key28": "3FastLHY9rv6h3SZkePCJCd479R8b7z8FwcsQTXCnDP76CKPnHVsWceHc8FfThJcwDcZ4KQvhnqZXHHKU4Qt5AuH",
  "key29": "4ikppix1BQkyRZrAmVtFEVKtcM6yzwZZAwogh7TxBemdVnXNa32R3weXUhbcCL1aFEsSKvvWFNtGQkn68DCNyJmR",
  "key30": "4r5MiqS5U5RVkFVjN3VBWf4MzTUdMZLZhYBuYMD1dTaz8SujQw2yQU2VvW1gGsCn8TpxAS3LYP6rCMkRaWJ4BhaX",
  "key31": "CQyuiRsnxENWeZ5fxJpwBJTgZb9L199YcrZ8z3cVyToz1xsPhG2YqfBoDjxyG3MbK2DtjEAMdAaGhTyNxyHr41S",
  "key32": "597kcf7LnSr1m8BGAYm5NYYgHYbXhbhef4ML8hJfDnWRWTVL3c3MBgZvgbpQ71ishT3pSNyEESzgHnEmGHCzrBpS",
  "key33": "3svhE7kcZgTpNw3mF5JwAeEF2BA54a9btMM1jCuPMfAkXDHTnLqHaFHf6mftXobagHuRaRuzJVqcQKqoBNez39Vb",
  "key34": "3W64xpshfnYX67YZQhf8XtFW7JdsyPp4n3pqwykcXFGZvoPRtYVPgzpMQpdtBKsRSNuD2HZi84EmGbTtBPftSTpt",
  "key35": "yr3NbRZcaBm7MMkoPjs9aKscFq85nTaSWqR8VJETK4xLuckizxZpCPVoKSKHxNoQvRcW8WWeRmG3kLttrUbRL3i",
  "key36": "5Qn6onLqZaBbwE1EuiyvrDC6VYpo4zKygaNx6S17dMLcj4uF7hCjHQcP18GMaVtgDsrD8A8cqbDMPsgW71R4gJZB",
  "key37": "2jHaxbtWRhehMHdfJPoWsg2b8vrtLSZv1shJdYfeacUwKV77WJuMtRNHU1PJgkwiudod1DVCWP4kia8yseJKBTeJ",
  "key38": "5SoomnwaZvh75jjfDGttrvjfrhJBWiLohWa91EMEQWooxnojr4mphPLw7vMjkzNqsebJcWnXcSSPTTxtnu6Y2s2n",
  "key39": "4TRtp1R73R5QiF293Z9uQC2q5NvJyWGHFCQ7t8FHvPZQ2BEQ3C5U6pYYARodUziZ4WeLYwNVui8y7QHa7BducFFc",
  "key40": "2jje3GwCc99GffTWBKJkUXTYzhKG9j5nMUadGshfRq1wBL8eqbb5kvrpTtV6ZPwQV9UnYq8eJ46YpfEujfmnz7LM",
  "key41": "PT7ReuduhMTFcKNbiN9Y5eJjcPMkvLx9KZyek1A4EE6dEU8e4Uu8FvBEeuBhDuLhpHVQ5u6Voqo18DK3NbZt3DX",
  "key42": "4Ej4p4QkfcPhgprjJ2pyCKShCPvDD1o2YbXcQBs5M49FjuM6CaZoR1ATGNsBbVC5UkdRs5N4cp5w2nFjQw59M8ng",
  "key43": "2gkoh6BoZXL5N4hm8uvPkRPpA2NKV7AXRBmL1JVX2AMzNS89LPBPwUohJ4po7BZDVsYY8BZThpu2WggC4Uj85u8y",
  "key44": "4LpQvT6sq5MByxpGrFTmhXBKR5jzC2LhsvEcktxLDDfirNr7mDkCeuxZRoMsVN8Lk55kJVWusPvhvuYfRmeVADgF",
  "key45": "SjV8jNoD9pMvu8JbZP9Zpwc2Gibxq7P6NoFrb68EMK4Bh8w5nv8mAUyjhyByfbsKo2MvkgZYAixJahip34LPvTZ",
  "key46": "4QpJ3QGLZWqkawBHZLjSjVLwjQV37SCzvZS7fNeFdT1pvik25YMWtCzgPcnZyBQ2oiL8caHEA4Z5KeNkpK3guKrS",
  "key47": "tGSuTEbTCVhhJ5Jw6T2XjsStiZecxbMwD1mZ6FPf8Fn3VGTkFT8JrCb2kC3mbi6eavZAktcGJJPZHTFChvG7tpQ",
  "key48": "jWPgGSaMJxSNREEHePkFFSTjPPkEXnM44XuJLyjuTE82CSqFfVZ73US44irDQa4d97ZM5pwvryZJEofFxqPmzeD"
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
