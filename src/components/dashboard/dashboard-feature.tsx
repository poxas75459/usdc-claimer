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
    "4Kyw796pQaqhZ1PYtz5ZJptunN53NrvWEoYZjdcuzjDNwH2kzPatQvsF6WFm4UDdmUkcnYWXi4jDXoxroBGTSe2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMjADLESJebz4zGys6k7urbQGj5F9HjyxsLBzfiL2Fip2khjaCNUSMiX8V9UJpNR7mX87S6YiEsgCkp1A4dY4se",
  "key1": "5V3Bbi4yeMuh66k1thZCfd4vBXKktxTMLLt9UZwBMHSHnAweFG3dswqg9Y34MdyCNfgYHkBBcc7RWRa4uxuyKX8q",
  "key2": "2LjxDisD9Sp6yoQ2hi1pzZQeZiPVrG9FPcDxXGQxxhDAf7ryxVZfzr5DufQFsTEEpCR58BseBwnpY1J4MWBjLHr7",
  "key3": "Js9f7pnu28oGsmZarmfi1WkkdBwqX3WsVg79pzXa6F9rHCqbSLCwYqL69SZgzCYvzDmZw6ewqVRoicohY6SXVB6",
  "key4": "3LJJ4sWyGhdvtPt65Z1iChEVtJCbQXcxQZ3j2CacQxQay52peHS399JtuewNmXEPagRW78VncEzYsYU7tZvqzvdb",
  "key5": "4HUQ9HDoMx3Ju9btZp4XP1tqLcGTFeq1tfXKwiU4fuPPC5p266nyar3jZ1UBCMFf7n8v2k4R41ZAoXDukyTTsP4B",
  "key6": "2swq7iFKjaLfqVErCLwTFnYsnEq5Kf87C5xuHSKGbGpasKoN8fVbsGZ5tzLTubwYwYV4PqLMfFBXAeUABZz4L8qx",
  "key7": "34sBe5CtbwWSjHHTnC4XZU3bpE27YVp59PWez6u2fWBQxf5PZ2cAa49x6zDzRsJt82bbAoqJNHnW6ewTy1FXqwJM",
  "key8": "5VovPZhV6j5zJZvVMiWpQkevkxo4hnFaZBGH3eUKhqYhwNjiUtr3YjYa3Y8oa5RKn9rwsa1vstQ4QUrnk8YtA13e",
  "key9": "4kFG33N9oRCXHvT9CLPSKXZ2TzLUxwUPMqHPfzc5QNeAvw2MhCTcrRnYeXhxmXa5pC6TrbVNj8b8Egyu4ZLZFxco",
  "key10": "4pghYraYGscf5t7mNDq78bofXN7YV3dpunJti5V1wk7sR9DqmJmQMkLfDYyNCqMwyyffegjFqEpPeCbJA5JZN6nC",
  "key11": "25d2nDR8jXh64yYVhNz26DZRpmnMBm4Fx5BL3fPVeqZpimveDTe3sQ6yQPR48DoX9d9wPzgqa5bN3VGyiWmFkRyk",
  "key12": "62JEAct8KhxbsVDN2ZwUTU8JcNoZohVxf7fhUeN6HmgHXj5nmh6vT7sALn5Eqs9EB4x67xfe5hf4ARnyNDssHns8",
  "key13": "59QDZyGGwtpKFbfjPCEyS59eTDDVJ2wxwHzoVbqRz5ionwAa8dqX5Me4faYtUVTmGrYup8Mqjy3RePjT1qB9e9i8",
  "key14": "4hMcP3RfWEVU3m46isHCzZtVhQkHzgULh6J4iFV45rsCKFhvNF3hpKA9UpxFjs7AEuY8m372koZMw8qTbwQrNw9J",
  "key15": "3ueeo6V53kgWhwFe2zKRxQyYAg65J4VM28SBPY8Pm7jsKTdtcwvuEaVpt1URfFSZxuQowY4Hs8j9CrFnJdbVEBz6",
  "key16": "5WrgkcF4a4ARXNy9oHQ4ToBkr5t9xQXQiYwmKzcseEg2jNBr7VS813r1cQeNUzvmeATsAGTccM5rUvhCntSx6Hhr",
  "key17": "35GxFN9toM3Cv1gYDP6QdgjkRzStx5BJnp3ijs6gDJu1an6pGg57it2H5tnGq7SLjCDsj4WKQChJ29Chju6nEMrz",
  "key18": "4G93HuYPsP7NvGRpkVoC1SDagjM6AG3aTKY7gnx5o7CN34R8AyXHoBKeJZbN3S5Qj7u4zWHEqFVmzuFuHPdUT6wt",
  "key19": "4yAeGb5ESyMS6tDhh3r25wHbgcLAwU8uKSQvGPnQbMwUeAzeazFyYbjBn2BahHkRctHPUnitoMUkU7FdRuHgnmya",
  "key20": "4HyutCnKUkCZAweqS5Qwsd87WJj1dLQsT5pXh1wFkQNsLn3u7sdCkBxDxZ85JnBuZkpfUxiLLujpRGiGYLuAJqH",
  "key21": "CJAo6iBTzjsLxRhScpt9tYdCXVzgSKevGoxi2vwb3bTxsuXt36rx4Vde8YqJXVqpuQms96MomQDYvNCaxyj472w",
  "key22": "2rL4cJNf1wTcXdQKcoSHo2bLsjctso21pvj1aL1gFD2QfbajSF5x3vvTfsv7H5BJonFVQoDbUoeBXKxWoQ7cGYeo",
  "key23": "4JYz9hpFmGgtQfbG6u6hwHTdFbnXQWbhFuhHLszB6PmjVEuFMn6ZWPspdCga8kPX7u7mWRUczKcJugve5XfPPFVL",
  "key24": "4dToDBNFx5KiWcb1mKk1yGJEgmBh8CHquWr5WnV8MqHtZX2CovjfuUynnsSisSRwqGn316tw5rGG9LQpbvaaz1jy",
  "key25": "5JvFUt71CURvknW1NGhecdGtvYhhBKN3pfrnJT3YXmXJrCav8LhDNaTqFfPH81NwDQx5V9XafxM2yYgNtWqVpszz",
  "key26": "1zzNdR29ZXJCbyZpNNbEWfjZzf64qhrWTxBh6z7VuBeYkY9tozxa61mC7agfMStKPX7r2Lrjxk9Aff2RffxwM2E",
  "key27": "4LurAndfFPtX4S6Qfk7qUB1EmMKRWBdqfCEoiNDkwxVxPzSyDDw86CXQAhd7EA5DGxujig7ekGdoKH6PMgTNgqjC",
  "key28": "3GCJLsYjXGKBQssgxxiFpQ5DBaysNtMgFL2fjd3WHWZvfkwmTo5KLaBL7j69xpTtizUmu6EeTrHJ9Yk5PsFdD8qZ",
  "key29": "mRsUizcJPovdtXq92t8nj5bAbsPZn1UW125e3LFUvsFd44jQyGhZUZaYLBpmuKQvSv3kWDjaetYnbdD614MM5dM",
  "key30": "2WvZ5rBsFp8MADN28q2EgamCasoRL1E37b1UKxdssXKTB6DDXty79fAEGvNVnae2XottZ1JnDmUcKAR7gniF4kub",
  "key31": "3xN6A6TZn2MN34Nervgq2CUWGmNGPQ11fgeTZQGebpTwt5SVkdoAe5KAfDGXMrZSDkQeqryZFG5RdVGySfxWADkc",
  "key32": "4Gcw3sEKMmm5cThkvpRQtu93tJTYMBMSriyJU77eXsRLrzDdALVEsrMDG6zcjNt8wg95RB1oXDEy8jvKHWH4UJhx",
  "key33": "2P4A3XkQd7UExeiuSHHjsAq3easjJvowfKnDaBWsgwV4fYdx4YE8bEC32SWaWEJTWw3pQT6mjQxHAaZs7mgeez7E",
  "key34": "4m2Mt79TGE5P98owvKdb4oKD7sBFYm4f3zPAqGefFhLjgh8ZLAAPQBBPN1Pn3BnZPR6EuugBJ2bys39w4rgACz8r",
  "key35": "fzEAR8vSAtSCMHYtMW9xjzbZYnYeWuwh48txVcA3Kavsoe6xMAYeYqaBfeevH2AcLxYG88Q3kn6DFSYMxLW92bL",
  "key36": "czEsiCuqbPaMSFuVqTa9nYZz5hQyADd5xdzV3k3G3MLbLUErZeQf1ys6q6kVziBdyHbriL4s76nPX36Z41AgWxB",
  "key37": "4GgfoM5WzjvW15fLWXmoG6MqMDQZY27t1AFaS2hsGxVFXDzcpXx4zWSYT28zDCuJh6VgRypjpViZSujSw3vKyNU",
  "key38": "49djTK1rPpc1XzBqT3QS4xWsVtorZb5e3VDr5ShTQXjmFYmKr8Vy4y4EWewczq3tFRk32EcorTwuQUFDd5XEyYse",
  "key39": "2uJM8BQMLKhtiwPQv4tLoh39BoH5sF3wDwxpxZHK3Xfc3KaQoiYEeC3dHLBMbpHBQ5zE9pWHPPFcg9NKCmG6M3Bs",
  "key40": "xNNMT7A2w6bLch9sGW8Xa7ZuXaChHajRo2pUxKHhMLhScSzqJk77CL2P6xm8zt2sMYLUppZj1UuqT8U9HHSC553",
  "key41": "4nfpw3QCr2UVR71WkDHDB3bGdsPS29twhMpZsg3JXufG2DKe1SU5EHfaoNr1qTVM4xUTCbF136HdPNSbrJ1KQiw6",
  "key42": "63kLq4Vbon1NHXbGFndYmHxzbD6arfYNuqR2cQiL7z1wuoYvT1jxWFXa7h2JKiaQnbYVuj1yoa3QEyiA17ZfD4VC",
  "key43": "5VTCVy1dwvu5Z8NwvB2TxovtsZbmjaPUDv3birh8eMEkRTzgSQsQPGTUjPQrvjjfLjMSEgaLyGHdjRCAR9LgK2Qs",
  "key44": "3DaSrzy1fvQNteumctoLSuDFv5rbfTk41gQsvoqsAs4REJLutiv5Pzeu9xe2W5qCS6wwsnkUnqVwG7PhdjVAUk2P",
  "key45": "2ocdb9vRkKkDnQkbegZdHhmF9hdbv7zcSQ7vi2ncHwYdavfwtVuac99HwqABiD29sPn5nE5piBhxHNGjLbYAX1wd"
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
