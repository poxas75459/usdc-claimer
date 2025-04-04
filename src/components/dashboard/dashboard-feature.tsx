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
    "26ckjnnaBYGqGa83DcVACuY6q9LsGGKkyySh4dHX9Go8mCuv5bCatHHoUdshKMVnGTnwua8NPx561idvmxFLS7DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x8zvLtyaAmrnvjV6qMRUh1w4FFwNRhWyh5F92dtQjh3twLk6qcYcrVCqk1i4Kac3f3QY9s6UBZzdrL3fVGpvyyC",
  "key1": "5NwFbzeaQxd6geb4GUW2LVRPH3BmykXhDsoEqrJyTZe86obf9y2Nn5DWyJQXkgapyjR9f3f4BETHBqFLFvvVik9U",
  "key2": "36VbFViXKwH56Gtf8wvgKwZ7oC84Vq1rEg5fXyMaVb8zxqCiRUX9cfWidCaSNEHBG2yCmHYdQKYKch5cwzRvQqCp",
  "key3": "9STZhKF7pcAdzWgEXVnZf6TGPaLSub8dSbh3FaVBvgbDmZwyD2WGnyHFMWgmLKnYLVpaV8g1tXAUva1KXM4J5XB",
  "key4": "3jAK4PzifS8Bc7EKckfRAqg9zyoBxhf5nGH4aMaKjLtUJrY1WHEZGoAW2k8pqqS84Qc7asAURB18C7HKHekQpkSN",
  "key5": "2z9oYA6rs5JxnvWFWGhnFmNbWGqtETiPZwdCEXbAgvpsSoSGEUAZ4DuAQu8tiWDqP98QMkJAkh6TeanWAYytmAZa",
  "key6": "5iUwkRrkwUHzigZYWFiFnuzMZeHimMHKSTM7zys6AZHLfoiq6tP5eLu1bzxae4FBUTXTreFw6A8dynKucaVcMmEQ",
  "key7": "579gJ2cr82wWs3VqLvwacyqGPaYFkhxGkFjJMoW7SqMaQLBchKJ3pfk4Vt63UswCYv5fLGqkGERJJb27Ufbq5Uog",
  "key8": "3HsMPJ3CEQLyxFoPz56psuPJiqMziUmXb7r1igDRXsbjGT8KSFqxWUX4ELaGC53rHjo8xndz2kXotVzdHA5prqit",
  "key9": "5BkJ1HdhitAZHQR1WZLLZUFCnaEAo9rMNRXpdgmiSMKNznwiQqmavkpRK6SySNV5wNEnU2MNdyaQEDGbH4Hw8rEJ",
  "key10": "4HNA2QFvhFUMwMKZKmh4ysg1DwRYZGT7QMfWV7MmZ8QkDrkFBNqVthFo1TFgvhEtsxZW9cgqfKwNshhgyWEuFLv3",
  "key11": "5xkmG6rmgBeYfYJhXVQ97bhY4X2nrr8gNfdJpqXFaitSXEPhBK7wSsBDwqjsHf61aLpZdi39UvZggug4JBBmdRwe",
  "key12": "61Vv25uJzRXQ9vwmHXa1FrLTkF26cqsqjQcTvdNj7vbjxVcBaPwPjLgeSz7J6PQm8wREJXM62y1X7CQy8E4d6Lvz",
  "key13": "59tG5vPckyiQnNiiJdhSnhcGCjS6AXSvW5dWG9RhL71tTbmyaktypokZSv2DU7sd1sDS1fVc2XJX8mRxY6itb4KJ",
  "key14": "4pUwmV7R51P3JvoW2Ta55sAj9S6BpfcD3PQjb9pnJVhi3iwhhCeqe2XPfDYAF7zgje6v1A3pyntcTkxXq22yVCQe",
  "key15": "3HsXhRYudrkAheBLGMgMG1F6Fa9c2yYKsCSEYZ51ejJcWRqfCrcHUDmGVoDuQgtKkcBKABWrzDrKQ9wiUuibfGxg",
  "key16": "S9voVUdUGWtxDK1pE2Q9LSR542X1ViAZC35nJzxyCh4ZKo6AquYdhraReGL8Xr8XxZZCXEPnEfUNb6vUGw621JB",
  "key17": "5opkCGpNkuAwTxpoJ9hyDD4UiuCerXDrTGWrcC3VSouesyVCfm7yKhkQFax4krgZagz9C8yDDUnK6BarsVXtckpX",
  "key18": "5XqVKfNy47zs69C15w2hMKxvJkKmpjfTVJBais4aian5akPhqKEmFTJdUG9MaNgtGKmpTa2W3SbKypk8o7DsXABD",
  "key19": "2SJToYvEYmHkFYo4D9iP2eN2MM8HuhhxKyaeMx4vJeU3twzWs8kpyaMnkAaLLUzEnanE7fnWz1YzEisfUoy5Nohq",
  "key20": "4v98qReHzuiM1s4i42HcgEdy3ELM8cST4SRAmKmr6aqstUrcqrkJHUVJ22y1ZwqkN9DPHV7suT8EreqHNV7JWgWZ",
  "key21": "wP9m6vALkXRpZYyEBz8idUT258vtQePy9nbjij2ZwGkaND9F3ssGFVt2ezGGnY8gN7Lcajnw6TNqFxhdGgogdz2",
  "key22": "3jYbx7UJKqRnv36xxuPtHDwe5NM6KUN4mVgUGz84rFbGfhfHEDWPKyEyJKHyHEArAEPAj3B2QQMrg3Gxw8kzCNoR",
  "key23": "3Kqw1wZTQjwbez2yZ8Ft4Yx6W8GjR5LzvVVBEdYohnbmTc4mnqwXcWZkqNnWAV7hmVgFWhGpBCK1fbqD5XWzkrbs",
  "key24": "456DCRHPNELs5mM4pCZDx3t8gADJzJHs5KJAiLw4WMeF8wgFMa2w2J4bt7ENvgwJVo4ZdDDHXKRiWs3wev4BsREu",
  "key25": "22daiuwwEgxnaeYUhPho7a5fwBngwpyqcyaSTvE6ChDby1XFpzmNYQCjPkbP7cgUHvfEzFoKQ2HZf53SzhvmnyXe",
  "key26": "4RDPnsDj9ZoWetPfBvE84VGo4E5nbiYSpTDLKKg8MPDRkMz4BKYdTBNGkbimwLN4teftky14ZA3STaYnFyD95xX4",
  "key27": "3NfpXXBZ6tjQhaSiaTvPkymLKJuA88oWi78Zm8SgmQfYxi3GbDsnuRi71yHpEFa5bJ4qEjm1y3B5W4vK6U9Sd8k8",
  "key28": "5dvTYydFRETq8uw6hcRQWCZjGh5HMT16yYkrKVLePkbyWzhFq7QRJCqyH43wjQP4irDHxvfFv5sLtC9yPHZAEKMC",
  "key29": "5eMTqHdKuiErneBs3P6sUQnkaatWK7jd4DQfEWpejXZz3tBP56kZi2s6WTqVDs6fTAwY7uJgnjZ4rf3ENQpe778d",
  "key30": "4cnTZT1CGkw7wBRpAZgKbNBGuZznzr3Vn9e5dYsZhtmjVK4vKx4nCQnS2puPJW6ND2N7aE5TCMQ7Zgy98zR17fUc",
  "key31": "5uDg2NEc8WyyD1oXcH2op9KrAC363J9eaHiSpX5trGjt7Q2k1pLx4qoxCj1GqHjk3h6fTe6yZkvhAiR6a2DEyvWs",
  "key32": "5GRo4JaLMqwnmC6k9zyjYMjLXWp5UeVVhv7rbEQR9kNxnE2NNvDiWfLsUeDJFoXa7UAk629SrJXGpmz5euoCqjCo",
  "key33": "zbP7UH46ALZxqjsi5wZPuQWfhvLabJaEETro4N8NTgt32Y4L1j8pGjj3daxA4aAspt8KQdxc7wFbuMT9JeBaN1b",
  "key34": "3CfkdgNwkeHJbRUn661D1yxp78EuyaUzma3R59Bc45eZRGgC3zLXAWw6RZNLKe1jbUarAKx2TJU31BYLo3ELgufw",
  "key35": "2vnPVauSTNK6nqMYwpxB3gg8Zq8pS1SkGdatcYjwHw75RK9QyTCbxiEjFi9SyRuYTh3GQZpcxW8vKJeKS66EsjrP",
  "key36": "31WJTKrcrrrM7dmRvFGxfx9iSRPNeAbApMxFTWnwkf5HqcUehZZQhC43b8Er2nEaDTj7PuzAFaqeHazzMGaD64GY",
  "key37": "5ht2Mu9u6rcehGg8o3RBt9SFtPcg2HSiuxVCqAvkqjZpVo5GTwiKLeYZqyJ6wohVeuRDLZyuaE1E8MQTcZe452nY",
  "key38": "26uD2pXqthELoEEuF5Ni9DZZUCa9XXwmfvptAZVaJR7Q4VyQj1K1PBaGMJdrZYAqh4jsyvhbnpv7WwV3AhPYk3X1",
  "key39": "7v4Gn8qtNjyZS6BEst1AkSDzF3nAPz4Xp8No5xxcq31kXeT3BtJUBJW5jkxEUABZqkwFcTNfeQBaT6T45kT1khh",
  "key40": "2szDavr1Faa3vau9nu8xCB4h15WJjsojHYFtkUaerVo6zprxLsgUnyaChsfWN41LnXPRUmMHSF93fipk8hk7AiJn",
  "key41": "2aU3KybcGHgbJayQQvJ3WVKqMKSQXCtPbQBWUZKWiQzManPocNak6vzTXiQFoBp45i4cDeLp6KkiMPG4ufQHxuhm",
  "key42": "5UmvZ9jfR4V47swWXrPLLQzDurUwjQHp8U17WfjjUkpp8LFWeSMkrfmVN2q66ustdZpxED34wRcFnrfsWxckHCgm",
  "key43": "43GEhJBHxLT4QmdERHdQ8wgJX5spnSfTVcAnLCovTJgphTHmmcpckaKiavZt1NwGXZjzpPFzLoukwD2hMbJMCoq5",
  "key44": "2isSdFZcnUz8LPUuSgKhFsXjbw8PtZW6R2cLJcZ56Xk7f1y948iAbGaVNeCQkxH99wQ3LvrMjnHKx4dmoXsFBsT9",
  "key45": "41bTajLhuipE2zUZFsxoQsNaPdFaLpTEHP2MEoFboqZpXez2Ffy3pT84y89LarCFyEjbeRpjEw3nKTpK7YnfodY3",
  "key46": "34hDqZVaSFwxKpcPrhQtLgHmBTJwXUKwfL1qUev7gaVkDv5NJ7UPUDkTYfdT6UVDQ15inBzYBY5YFkhsfuk15ozb",
  "key47": "5pYmpJtDmVGY7CwCC9nL7Q8tfNCBhakQGNotV2RC1vev8pSQRc36Nyjmxt8AzYpxEJAR1Yrmifqu7TSaFwbWxh7t"
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
