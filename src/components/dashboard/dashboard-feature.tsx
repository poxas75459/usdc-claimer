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
    "jMv3Sfy8kWQQPst23Rhu1ZWRtosFj1SaVUuYaqt3Hmvj6ZfHdgXhzPdhEsixCEGcEx3CmzFU2g8iMX9ZAyjjWGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dT3snLe3XxWCJjkc3TdRN9AheeAPmTpTUPhAqboEpXLh9WfqyYgB3qonYiPKBQCbMgYvRLdHqfqA9KHD97agSS",
  "key1": "2bv476SpL1EQ7mrXPuo5G7rPG3xFgmwRhx3oWFfDmQ4BsGvhjwyDq6jx9bBUGwAmXYLU5iprwXZA8VJZm1MsJaPn",
  "key2": "3Hyf9mNrT44x2SJYKHGaTvwAVh6EeWD8Fnnyh5URPYv7VtFdZE2atiWDnyj4MHwhoFtqZTbv5ntc2TDx6yqjGGwk",
  "key3": "5iYvp9mZNzpusQAb9tP32QC7WrooBCWmD5wuwjdLGSgWNkwjdnynzArmfe5gZKDru7QbfXv1G5KHaBKeXBrqbLe9",
  "key4": "63QSajuKvZGxEX1ocxRv82rxo11RjF391BXiCnZZakZWiuvkHXbUwCNc2yqceSkt3jz7q7vCM2UuwMcMSk3Pdsqa",
  "key5": "SGfrWn9TymBy7EPd5VfpxzYfwSJke6fC7bdsoHpNMhr3AiPiqB925T7k6qVLx34FofQ8Zc12A8BhEugTEXZ2G2H",
  "key6": "5oHzwEaWaMjqSgZWAKFZckoCzPdPhVjEu1ssSe3hS1bY4AkV9usJqEYEvvS2s5HKJH5g93FCA5bLGr42Zoh5CkAv",
  "key7": "4F81yhx6moYqQt5NwaZZo1BoU5uWZ9drFQJu9RkysLqKA4pDRv7zmzbsjq16HNfZhrAM4MJut3K6QPCpDaE9V7R9",
  "key8": "3hQ5SUUxq3S8cvJVvZTrf8X1q6hnSHsgt9AZH2cNFCvSdr7cUxVQ7fvg67QSX7Xv9jb7dQ2WHb1mT97z2y8R9LsN",
  "key9": "2KG7kRJPXEhhteZqhzMwPbG6wrDG3xK2Ec2tmF7VMXxFCU8esbycHcjcYyHXgUDmP8eDFuoN5myScryDtHFtZaoF",
  "key10": "36Vqs5fXpSCoeU5YzoJ9G65KAUn3MqbEQJ4SUimnMrHiS2gSerpo8XkFvDbrJBWqHHzpGQrKVHPfEZnxgfvQTHaJ",
  "key11": "2yhvcXAoUBzG4AgJbHf6Z9J95HBcUJJB5xGkCgn4puw6SeZNDV3mCUEpxt6ckedfHtEezkFpzdEejBGcPZrNf5Ar",
  "key12": "5rnEvRBrzm4eKpLkvtyc94qsMeRjhvkFySXCbMNdw9CHLN4QGfcjnRf9HqvjBdpchBGBnMm98HCjJ4awHmttZuiS",
  "key13": "t8UcAMU5DJDymLvpJLR2MEbyomGtPHeebrh1WW472YDEWnC3WEVNfFmWJU7F2ZUU9DNr7ZovWGvdbdvTi77zGu1",
  "key14": "57jsB6MATz1yRCo31wpE7M6NBkgEpg7REh5b7jaMTyiRXR2R1htbeyxpHfnSrYorY7ouUFrYwJfHgAouSi5zbuMW",
  "key15": "wTnhFnrGesVFvuPrHJqQoUjmv4e9sGqEAQitLd6GupmVLfybQafK99AuM63QVVA1U33f7Y1gXfCtznHzCuBNUTN",
  "key16": "3K4hN1BSa45xzZBMwDXNfRbqMVhLn6Tv131VmcZ2sh888RU19XspHsBvzTxrLDhidRKTfSte2cnk9zVeAmGVSpVE",
  "key17": "2iXtprKbZDYFeMJixTyMLnLystFpMWHrEYedy2JdR3gTE7B8bN7TVqW1mFUGrxw3giD11jqDgC2NjjA7NvQYxFj8",
  "key18": "3HoHmPxFEkVhbEi4TdgDaALiNyEkustdqibHZ6yhXEUieUMXXodD9AaMooBf3gGPa4WnTmqtskd7sBK7yjytHmpM",
  "key19": "5FRNY3yHPjYK2EZ1KqBKMMcLs38bBsH1oUmjhk79dtqUYUCfJJkMLgfiUL4p7bLqnqFU6Y6qzzfiJCWvkRR2sZXU",
  "key20": "4u28egmyLbvbsPLUr7t5BikVqzAHRUFL11oXzhWANxYsBvq8TMdijj8322h1UWgGfJa7tDspyRbH5hqMf9fLcFYw",
  "key21": "3dQpLBm2YiUTeya7667tJeAy3nP5iSXrkHDaTZLLkU4b2MQXLvNY5s5hYgj1S177hvuQRo8JqhRwTrmrLeLToCFn",
  "key22": "5W2YsmeFyWcdWmUGG7X7pFCDw3cp3z2zWfUpNdJt369S7nRVuS59XPPZwHk1MyeuHCtGBtwaVYYNgZamHJmJM9a1",
  "key23": "3haG342HR2ocjvfiXwaimY4cLaroDQhT6oVZbEPHfawLbRmdC29WvwPD5mPx8KxdYQNSArc8fxhW2Yxun1VvJPHn",
  "key24": "5CLoYkj6m7E8uzLA2RAiVq7KDpVFSa72WX3UAZW9BEJ736DafqbRb8ziMbfKBkLjD3zDtFcWajjNLCJUJXRzYgVF",
  "key25": "3MXc4TyJyhAJV7h7YTwVCendToPejLNHvBLgUF8FHwgM6GEXyiuSEb8jkjmRk27dwVzrWb4m9FzCLFXntNfxw9jq",
  "key26": "27PH42rMZBaZucLMVxPosis6VnmpWr6v6eGiiMSSWiSRZV4LWBmeabFKbSe12pMZXmfTa3Fz3Gz1fmQ5EmYLaChy",
  "key27": "3QFHQxUkd53oub9s5KiXuimuE5nrRRX4icwC8P8thytYd1vwb3Q5B8KYC3EuPuUQTacgsMRGbAgR1iDPuc7zcNiX",
  "key28": "2mKcmaTdhH56cRcWNxC55vparNx4zyyMzA1J5ggm3L1YJSxtMgowSUiB2tZBPc2LvNFRHGQ1PT7LPDZE8rxpQi6",
  "key29": "2Q7WmBfQQ9FuJX54JHF95fcWjreFyKtg5U3qqQNF5ZZHGVYNPUQyWRKpX7uFhT6Tpj5WdePsKKpHcY6RfZj52C1d",
  "key30": "2gqmbVJY3eXVbuo83UpbbqfWc668mKy8pKRw2KVnbmWqoky24zcR56NQiGj1McBUTE6QznMVVSJdssCyGSXcyPK8",
  "key31": "5xwQpNvgpfY2k5VbXytuE1qoGnhmjhWq7xbaL8sgWLGZG3xAvYJ3oRqY6bZZ8hBQLkwebEa7pUQZQJamT46vC5ia",
  "key32": "3og4M8enUFVDixMcXDp9cYb7CJE4wAPQweBJbCyDF3qPRSt7yHb685gNKXwF2rnQJAuGYRfaWdr4yV4c9rkxAwPW",
  "key33": "5bSfDznXtvCch2kHhsrnXfwYSPxscVvT4gGXr7gLsv2T6RwCPunWBchjziRSiJgjDRTRy7UThLU9iMqeSkRR6gNS",
  "key34": "AmZwKiWU366FN2BAXPhjsj5yiqMYcBaP6aediaREYg7FHxLvXSRrR1ecY428kbgMyCcSmpvDNqCtpEMv33xJkbr",
  "key35": "3zieczfhqT5PXd8QKV9bp339HRb44Ua5X2HQCqVDEGJwFjyxy61BRxU9rAb8fbgx4SwXDteQiuRPDUjsuh5Akrmx",
  "key36": "4yTmj8dSsEG6To621WfMhKygEWa7xr1eLTMULV28AqrHPr3f4ap5QtkCek1DBTciPtY4FLYytG51rAXNoRwm1nnd",
  "key37": "3pQhK48DF1h6DU178thWUsJJ2NfCjFkcToGnNKZZiFuZJFxLkS8VGZxZgefXvD11U6u6JDDQgTXXH69GgyE1McuP",
  "key38": "2yTr5o9VvDDvQJAixLawvST5JfSdspkWXTSc6yviVQV2FxBwUzh2UrMRFpw6hXho9MEyNmCE6EUjmZRNfvbGa6Q",
  "key39": "21ZadmxFpwzbhy9Frnumh3YVkvnNPjRoNQK77DZCinLC5xtdbcfSyFEjbMC2kx7XmGedtrXMHYGN3NAPcP6WoEVr",
  "key40": "3UahCAydkRkAk64FSRoUG4RqX5WW6tPbZ2V8r6eGhUQJABVTQXHhwPNm1XxFHArF3sxaBPJJ7zsF2aXuyr6LjJwd",
  "key41": "2HWXUuRn554YVEtFUmUhKDdL9svYTaoHveDg5HM39Bb57xMdyNQinZPWLvzNR5sdPVFS7TvaAM9We7giJXnheTKa",
  "key42": "5KWtgQM6p3uwYUBc8arB27xNZop9dD91D8QnYtYzpgiAxFmM3AMciM3QzHiAW7NbNuAEz8CTUPeK8TDfkkz4jH3q",
  "key43": "2Gykbx9ZdT9ki8NHxC9rz4nYPL9rmDhARHrhbXB6EdmKcn3C3EZs5e4zZhzZWchV77CdStb1uygKdx1gsSZFG7NZ",
  "key44": "2dwY6UAgAwUpw3AyKhv3auDxSM519ZaMf2S6RXoSdn88LcXiVYWaoMTc11eXJrYkFBpQGiaT3GwVqb8voSUFj6PN",
  "key45": "Gc4RN4KGJ8xEZKmia8U3o6t9tFhMFxbX5s5CHUCJRd3BCYmccVTKEr8rirpKLbw6P7SeidWE3j3ZPh45kDtRCbV",
  "key46": "3Fhtsbt1Z3R8L8VMqb496J953UXwQAdEBR9J9fbjMobYR5pNiRjPwWL1XHuZMLVao9yaY6LrQ9krrufCLNDTS66h",
  "key47": "2vCoEQkCUzm2dLTeZc7rwTHw6vMwE4itosHQZwQfTpKofc4hGrVu9FT9Zf6PgZY3y8XpNmfySbqM3Gh8XuXg7fsQ",
  "key48": "2umLv6rqTHR8BSNCL6UkoV3vmQv6Mzjb4tvAyAbsYVUVTaowMArZVR32dHknt5Bgy66e67AN7bc1sQQTW1GG9nkp",
  "key49": "WBFKeJCrt4MeCBCW7x5rfHsbBnowCJwaAgZ8j3Wo5GSsZcxH4Tsha5DFttbnmu6aTegg41EqzuR2pwnknJ3eDqC"
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
