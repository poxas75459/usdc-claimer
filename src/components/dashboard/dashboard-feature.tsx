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
    "Ncpw7i1p6yBREZNcrHxhdRUwzEez22X978sUZFV8m6Taab4D67saKJ3UwKUK9uuLjiGLxgBsyqihsdBK4DY5e9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1zRrGCvRRZMmxpS8kiCwMvr3FGyLmH5xW4tdxrgkjbwQVLiqkowpxiYV727ejs7Gp1r7WWLJWwDsWAxRL7m7WD",
  "key1": "4erwNMJFs2T3VA5nTtP3kTerVV4CRrq4usyAJVwSg6UddtKFBfwo6fhnHHGQyKWa1uGXVnha8KNydjh6WNtTq8Vs",
  "key2": "2WqKLzARSmuNc4e9sDN9cSwc53vqeVzzpjqXk5DzAXzu8F2y9ADRQ34cmKXGaE9xGTSJ9Lh9QjFPZcse22FtAsvd",
  "key3": "5ptwzR4PidyNUYhjNWSGggnPZibmhUU6xiBQFSiy83TXMCfmjKNLuMyGaYX9CNwDXTRCFfdzZfFzZeq325iL6EjR",
  "key4": "3zLJWcrgd9TXXQnZWL2r4aBxgMVvq9pHpCAQJ1iqUvKGgTbc7MQWuhYGLzypL9Mmksh4eKuF75hPiRQAbGg8dAqx",
  "key5": "2PSwXs263XeAHsNNEcZK3ycsxXFZ4jdh6VGWP2yuvXLHNtcruurqEWfHVKimfjHnuTTKRP6SMGr51LmM45Np13sQ",
  "key6": "R2iiM27UCPZcnkNn1gaTsxPEZPfm8bd1CXShda4tqTuwrwmjXaqhsz5irVBu7mr5DtP6iwF2KanBLUg4SFboGuS",
  "key7": "2HdvgiAdUnDx4VMGetWvSBvR4opmiHa33hZuk7JTq9TbitZhDk8MkhM4E9VHej96tCpL58ekJYU1ZhsoQb9cmX7j",
  "key8": "264izyFyWudzCeUjnnC6uXVnNjPYXnM98jJJJz96eS6rPUC4DApL9WboAVBeHGLo2YxKw8PsxXGMoiuwAv5VZcCr",
  "key9": "2hcfYwZw1Ui63Bx3tWAx6sbwWysaJEzSzUZCbnLwgpizPgc23gNcFdaySeaVe4Z5bK2ndRZmhPcAHyZwajWj1bGn",
  "key10": "5QRVFpFRxcj2c1gzBUpK7LXiGuiyTSwgq15Upcq3ftsjE5X6PDeixSipgQ3F9ia1Aqhgqb2JVqsRjyiWgQGc8Xse",
  "key11": "5P2sENStVK6TTiE9kRCxAKnTKySKbrsa4gFLs6pn2Egnx1V36PjpW5bS9X3wfH9g5xmvdrVoJy8QamcpzMyaeoDE",
  "key12": "36Xmf8BPBWhzJ14aGwUtkUzuQyZKjzTzF8LXEPKEWTvayC2CEETk5gjzC1evKM9aD4dFwiPk8rLzrqtZB6ATqkwV",
  "key13": "2JF5BFF7xR3Y4EZs815CwSku8z4uMFRGrrKRgDLJef8YyrSk9ghbqczULa2Un1hFP597Y4mAxEnYxoXe1JCn3ZaK",
  "key14": "zxyWpwRA6YopVRbHAyzbHCuVuhoEAYFuCVhyoizbWY2NarXQbWwbaPhUpYAMqpbAh5D8tmycEjh6WXpWGzd1nTs",
  "key15": "2TzYpWJ1Vw67seXSpRidNnGWruAqB9NWiUmCNUy6EtoL1LPvouGLNC37xZpvEUgF6fe5BDefaB1AviTNwTmCmEP3",
  "key16": "3mRCDumuvw8qZtzSNVL4jfA4tAf2z2jGj9z4yUpq6JrUvNffbAqK3H1bMgUQ1Xpg8e8LbhgfjKi8boT4WE3heezJ",
  "key17": "ezKHRqxK2cJNmASXRnTKhoxMAogBjVbUvVBrDBCT1ZoVkQUPyyskAuKTDDD97Mxh8zebQQsS93fvLDs41aQz244",
  "key18": "yEnTtiSLWXZUaF1r53DvNnxiqYE4USwP7F6uowwzegtZJNJAZgud6w73jtDiQ1mDxLsPmd9wPpCUz8zncnruqua",
  "key19": "2uLQ3FHQk3i18MfEvidbXLRvfYSj4dGnySeiBJSmZpZchRBqp1ujHBZkrCNQaq2QptD5LVaX29XAwQapmMhqk5aX",
  "key20": "ipneVZVhvwriiFCVEu5TTKEDpALHwQke29ULRdBD3TU6MhyRUUn3ty7r8YXKmJVxVhF6yQGBE14kcK2CSLDw31G",
  "key21": "5uW4LWGHWcSigZ4sUmXtvqcwnNFsZmBpyh72gMAmX3sA1YKt7qVSJ3zSt921QS4FHGT6hNsST21LQcfHc5ij9gKo",
  "key22": "2wkKEqXmYr98havubfmSBwVcHVArQiR1UbPxSZwRqEizZpTq2JQ593rhfCXc42xhgxTWH2NKYaQdEtHnWiKq5dCZ",
  "key23": "UJJkvwTR6prnH23nusDpDUZS9hjjXkGN9UgEwFLfW5scadGHBT2ViedZ3kaMyNax55Lfv1odf9Eiqh2QghEPr3B",
  "key24": "4Q6knVssAaHcKiMk3AJ597wicaeVEHJX2Mp5Jrm3P4kL4KewqLYC8Kzj36b1NK299xgXAYTyFcxZpMp1H12rLEuT",
  "key25": "23xrmX6zoriw2NV3iSgeAW9jyGTLpP7Y3TPNgyqxwKeHkQrFnGmVwL7Vrj68SEfNv23mwYrKCH1CAr7Xk3ifUbzG",
  "key26": "48cHQ9ukqSwEJxnjfWwWxoRAAq9qecUUcSjNXrpfRFtDEoRUs44v2mhH7SxUQLW9FZPqdF15hGRCAUq8ZisYfbLm",
  "key27": "ikcqgJdM2c9RBic9rR7MZvr4e3whr7YuNf8z9vvKpTPziYSBSwL6u6MrNSToBHN91P5BwWAqeWpLbTPPVCN7VtG",
  "key28": "2FKmBmesVYEMPLQrP7GpcHn2cQwdsTC1B6C5ho8BsSLcueJL5bwzXSu1r6ZhNCguVsNmVjNVTa48jdyjAgviLUKC",
  "key29": "DoawWbqptzBR8JKGtU41jSEAmQ9SiAmHAYkuY8yZyLTQxiQrZ3a5ZxA3uT73jRJKHRP7bgiFfcGPPuems1E4xnt",
  "key30": "5g59UtYpceD7YVw1bZcAXYcBHgVftv6HVWE6mjo1KFive35z1aryUVTetgDo62vc18Smu3qejhPvQF1kM6JzGeeS",
  "key31": "2UU82mDhnxBL5oeBMZSPL7rZexYD9nAas15cA2cae4QcWtW5XNcpUTpBFkN7kiWr83SRnaGCTbC9faFEj16mnfMj",
  "key32": "2N7zwo662SQf5jb6kRcajmo8FZu45QXpwLZ9ahSUYH1pD15WvKN9xktmLmWce6QmeFF7LVnC979rg6d7zrQKGsVR",
  "key33": "3h91bDZXeBUk7RbAWbSLkhKszegx4cFUbRBMg1HPnrMTiBRNvHANaV66NuEkmK2YqmT24WhNbc6T1442H2uaQJo5",
  "key34": "2jPve4ikJWvzuXuJpSh8c8gk7LNFukZ1MMEDYrskUjxtAwJn3hXahs7y62wdfJKMUNg4Jkg458JmH6c8HwRf1AmC",
  "key35": "5TVLx1kBpGghiTsFDGDuTjp2UVpqWSVWQfTRSEHHU1ATheN5N82zkDug4hbg9aZM1qiG2KgQ6MHxPB5UgKStrXAw",
  "key36": "By5VSjHkmepi1ZieULFTsXRnJpiQwUd6rRMMdwyf9UHgi7aMUd5KdZUEvx5bNB3U4Ju36cWGx3LzeLkg92YJx9S",
  "key37": "5q8KFpTT1wv3qcgDJQZhFVCvKTqnoxoBiFarMU44XC7MwatfoqgE7VXUVZaXH4fyQSvBfCDYBydHwFvrTEzoJ2qM",
  "key38": "4miZnYo5UCzoCHfq7hkMXuj9yxukbLCqDsqX1ZLVnAgK9q2Vh3szW1ECf8Fr6yQe9LPHPfMQCG62TskmscXkWaac",
  "key39": "448ANaxmcaXvwV5ut5gZ3pzHXGYGo1Zup9S4rp2kqRY4wUJ8aX4TtVZm2Hoi7BykGS2KVpEnQYZfaiHvBzT93MB8",
  "key40": "2aozYmWrHNfEKc1WYJ54E2Lt9jcW4fRzu6zYcB9SXGzkahzUu2eKwY7ecPG6SoTpwB71C68YxqASTn2BVta8GVUt",
  "key41": "2v6qcJNKotb8pArWC6HExdqCeYEkUps3tRNSTtHLLkuvZhshU1Ls7HtkktWAzBVTfez2YCWjVa4T4io7L5EsZAPS",
  "key42": "ecdgGjSMA3Ef3DkWYTo1e7nJ7vDj7gTGXef3mAGJ4ph9W7ZsBtu4brapdRujrcwjznEz67ba8iyo6bPxLmusVzC",
  "key43": "3T24PP4gXYQVs9cayYf1TwESTrboxaefC5fWQYoQQAgE3TkSL5mKfwSw1fZvm3t4ez3pfDqvHrwewTjGJdbpn8Wm",
  "key44": "mK3BPGGWhfcLkgwrUuRn2FPbErQKkCmQawJ9wFhfX2emhhq6zAwJUK5MpFFKoKjVFw9KSaVgXn1r1HsUDsWXbBV",
  "key45": "5u8nBdUxpUeP4RUnPEApKE5sGkia4RNoNsnqZTBD6QLPjHyhNJ7CgGkbijzuTqfVNwu44Q7V96ohpfMCnd6TPNcj"
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
