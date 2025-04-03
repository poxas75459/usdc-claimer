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
    "41yZYNiRjTUg5Rx9o2qtzBL2GzNprCNqLrfWUByYz3u6sejgbbnQyvm4xQzsxN4D1hTY8pGPJgKhob1QARjj1Jy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dc8KPjQNbjaMHnEx7FUYsEL6bPhskCsvtDdLyM7e5tj7nDMHoFzuQ1akd1AJ8fGs39DQkjam1wzsqUkyFoyBQXi",
  "key1": "339g5preESgZCMY3pvbqHRyFr8NEMa7N23sBLkPkNTYZ3UGLwewCdr9ywsceGQpxBGe1FRx8P2MmR7LKWjufxeoN",
  "key2": "3BXeWnZgcnFdBFJKKZFqwaBtHMEgiUU3qmnk8YLYcwEYK6yFsdW8XLnYATGBRpsTcmQN6LYUj8yuNjV1FS63BZvo",
  "key3": "2tpokfqkKVnYMPadqfoGYmwcvcW6Gvn7WzFM6wLaUFG94HYAgLiEpnPHR2mLQKsY7Z91FxXXVjyTv8rfzUWsL7Cn",
  "key4": "mjSbr3zb7ZsctgDF9czZ5qgtpFMjCysQFkSmxiXEpUj6yuHuU71EvQdPNFrvM5bg53mWD9pMvAC8G2hRf4LPg3E",
  "key5": "ERC3tRf4j9WATSUzgfap4vZ94uNrRmYc76dGAGus3THtUSQGq1pSMrG43gfoxbHqUCPyxZTQcNXSso9vBTTdmyk",
  "key6": "3rErP8KUZKY6nemfG65xQqbEVttfM14t26Yxn4bZFFyJei8SubZaeZoov8KXr4E45W1CWykMpHPaqmkfx6K1x45X",
  "key7": "3uvFAaScKsCfvM8wLAZncjzZcE5u2giWu5xk8YC7RDA8YxJuAAf9UpFeekMj6hwKuuTS49fnfEK4ERg8aSexm7sN",
  "key8": "56eZDXHT9X3zfzy9xcszPrfWo88EcubagA1fQv1S8Z4yZbU7ewr5735TbiuSn2upaFMfzF1BrBgxM1EfyCvBPD5F",
  "key9": "HATT63mpybWsBxadSDnasYjSm9cwXZZS98kUbfkfBuX6ZUt7rdUXXBFPXpfmeNV1fBcBeYumNp2iGrRPrT6rTwK",
  "key10": "571SKea6iQkoTibh1typDeAD6HChRnTMNMzCyNCAvbo1c65fY42mXg4NTpwUpHfWhq7C8SjtrwQfDjMq9tgDdHBF",
  "key11": "4STGdqEE6pWyoQtEe6ivTrG2Dze3T6dAPD1x5fQBMH7fuCAa6KRw1pWW2gTiGafPqjX3CrcSRkhUXrbqY3pJLdWz",
  "key12": "2LcFKdJX8MdjeqKCZKfy5wY94sqARB4UDqD87g6XrsWhaUKAjZj8MuKRqphuVC49Cr8yGVQ7gEpfSEPFr9ptma5W",
  "key13": "bZs3BreBAU85aVtuTafRci5gWKypCd9gu5MPQngSSC6pfSx8EcYZArbmRFs2n34DrdNVYgnJyuA2efXDNrFx6np",
  "key14": "4pGA3ypzt6Cj2zdTbAwhwUWovAVmcBDqDSw2oRVLTC8Sn6kqtQEPDoAsALdCToUW9ZBsp47iboU9mpX8JD9v2Jmb",
  "key15": "2Ng4Kj5onobzi6j4buPBx1pyHw27EWkPtv5CuEsXLzurCrDszAKycDsQjvuXWFwq5gGPDkgYUzhqGG9pdvp8ocnt",
  "key16": "5krLRC9WwsJm9qfZ6K7xY1Br1zCc7a3GsU7pMsZbj83RVA36B2K97GUzd2YTyqVNzc3sAm2oDLMvt5yzPEyqsudM",
  "key17": "4R6hxBNNzYr2a3J26LvqP1oJ4PrMMhRxWuxPxgJw5oxs8TmrFRGdqxWuMMJmY1Tz674QahwHtRaw6f4NCN5tZvL3",
  "key18": "5nEFDxeCA2BUB1GQBc5VV4mNbHhnPg16pNcQfGtbsGGWZPMyqDbGZGeaowLWwbwXfnwMtPkCdcrgoeug5EAYcUUk",
  "key19": "4xu3rkrdnf5RhMcZTzvJDkmEcCpfYGX3HxYfy1KaiDwXLTFbhefX4F6iUFHJtb32Y6y4RNLLAZ6ySKTktXijKxXg",
  "key20": "FQNtHQz2gsneJG2o7hj7UAikmLKpee5dH79ua1J1zCWzA6uDVRzqPBdvmwvjBApenAnSMt9U5vYLL8s5bcttoKW",
  "key21": "4sZu96xUBs14nhZesyY7VSTJvGw8mftebfh2Tsz3rSTcv56xJFEZYbmnX6GH8K3QcjzDstVGtmL7YrQtc31oj3dU",
  "key22": "4orrmKQDQG1qVirvbYbDU8ipubSNKNMnBt1HTXz3jxTTtGtqc2KG4GcVWu4Aru3ccDqLgCgepsSPDem6mCecrVQR",
  "key23": "2WFt6YbJ9zrhWU9Q2sLNBkkWaQGtitryRy4NabdFyrLi4VKWLM77Z2pxRyYhj2T4CPQvD19Y3GnoQY5jwiZvqfiy",
  "key24": "4R3CuCUTaNmCtSQvSUyeFZixd3Rp8zHWNz6eKQHeoRo1sB2xaA2eB1ouJRUQoDvvnXJNkxLNkMhXrM7peom5e7SE",
  "key25": "4jxZVNAPCwdb4Gmt9DSGGSJniBLv2jVWrzpw8p6b4xkJ4JqYPhkHqbqKZAj7TgSLWrPxBVFTKSmwG5Mw2a7A5AhD",
  "key26": "5RMCn6ERmFcnbtSw8dedahfCxX6MZrL1S8U4PSnwcvR1NcrG7v8wynY2oiMNFb4qwp8wA2hLTGqMmLqHk6YkHg7h",
  "key27": "2fThkdXzRC9espjXuQstRtj98vojAPkhAfZaHbwVStCqP4wxr6dBKmMM4adtdDSnp2vPRcvbxXP6e11qWoPTtppF",
  "key28": "49Wmb4vdSkJqztu6A85fvgv6oH4FocaLBLZVHj1WRFh6YPN2NyXiWvnnUt6eifRgHbHy92jk6r1Y9ZoDqWMwjesD",
  "key29": "24wATzKjQS6pKvXjp8Y2EmU484xgSeqWf3oyface1YBzSAfCyqLRmZ4kR5zZkVpmkpX38yg9kKMSn85mmGJoZznC",
  "key30": "31xC7ttAxRBHMGEVtoqaqzNNir2U8PykdTmnHSQiVn2vx5hiswa58vrcTxb3veVsU4nLUf8wNroKLZLJyjBUYATE",
  "key31": "5xu4f9XMCeerD21fzfAHv8zDuDNmY1u36ZFXUBZxn8ivDmSHi9RjMGQarFY31t8vyXyqiRoy8tCAdAytXcodSt3Y",
  "key32": "3jrgLYQ7nbQqbMThakJJS61FViskSucbPmgwR76S9mjU19PoqkEdjS41MEmo99JZZndZn258qj68o4x5Dh8eCbGh",
  "key33": "2ijuQqGsg8cQKCNcDxWcenfsgN3FsBbavdE2Wc2HY5ta4gCYB48hd2nZAVFXBLFQhmJj4384QeYbZxCXgJaogM8r",
  "key34": "4SQRTeqmwmeeQtXThcjoRRzFgM8adkHShzhB4MFdNg28n5dTXTaU39s1QrBeegCwsosWSicTkbAwiuiCHtDuRy19",
  "key35": "4eNkcqcCrpkN1exzimd9TucbimKeNkrD5yhsusppcP4Yq5ouvffZ2Rqd3LRHRDLxq8xGfo4Ba4o9FxLdbFRM7jDd",
  "key36": "5FXyqPEX3pkLpQUiVx7gHysDY6wG2z2e6HNbxLe44Sh93VTLnQyX7iyYtqkqp6JzT6S65oHUKq43hyFjWVsRYxWf",
  "key37": "nHK2XWQkD6uekfkvntABD2E9YqV1zg9vdKrYXSMCXPGgYzW8LCppbsVPaZ9kv2U9Jgqmet6eofwpBpFr9LAeYoy",
  "key38": "28j745wQsh8oSDBxkT3eKHizvqWaxntihnFZTNAWtSZB2fnNcufME75fC9eXZnx6wzgAvi1bgTdUYCaX1w4obg6B",
  "key39": "5JLtgspu1RNd4pkBjcHjoctEbBNt52YFMaaNbWEB6uoXo9QgkU2yK44CM5EWoMpDHVzbhK9RPMqcSnqLN8P7vDhq",
  "key40": "5DrVW2NDy1JgRMBMBBv47uGhrm8R9os6LS9HSi8vSMvPbmWqTBkG6vW21WHLEssMpJWtPxRP6d7jX2uciUE5CHV3",
  "key41": "5c3EZ5qvRJ1g5dGucmyGg1nDJ1wXoq5imH48Vwt9VJKPqHnS7pgeA4yLm1mgnmuG3AT5sqwvtXWkp9Qb51Br41NU",
  "key42": "ZsjGKRy68TxCthyfAyC74x25c74kNBv2XacTLxr7ERasJSRJtJRKWnWHjKzgh2TVKMgQ5rK68iERb6EgQKqb3fR"
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
