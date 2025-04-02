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
    "4DrpesvUnyKNTqnHHVnaD5kxoHzE25HKSDxxkeGMtM3UW73CNhonpyWgehcjCByXdSW49ArKgK6nzn2oCqMyaqV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x6jCbSB35wxFKLPYYjr9qZYy1NxYcj5T1fc3bPgftLLfSCf9XZnQRaFYsjbuPUwfThBDyAVhxYVmaGWVvtraF9Q",
  "key1": "My4Eij4MVqK1578X9Ni6aPc6FUC2yAJoRnKBDrbZH79DM2jRQZFU3Vi4qhXXBiDUsY5GzZ1XChM7SWwsNcU3jkb",
  "key2": "3zo9tLFaeQYtDWQWKZy2EKzJRsgRXUhVL1dMDSxX2T9Cufc4yhVE23tfd7M4pJKH6skQ2ZjwkF26btW8fGSJB81v",
  "key3": "3Lpi8CSzDnAxp3s7J5sLNJKiiwrkNbVySZY3i5MEWkgfU2gPzwKThy2aeakC8JYDDr79MuYNS7ZWcY6aL1E52waR",
  "key4": "4L75aqsyp8waRiPrvyXr6ggWERhX1kxc7ysdj3PqjJYBFEEqdGF2CKXbrUd9nxPmAHBixv54i4dgJ2DTAGLNidqE",
  "key5": "5owNmyDym2skymAZLGwYVYNTmaTE1TZJFCcoWLwuD5F3M1nqQ2QcWnxJnDmHHXo1xrzuqXhtz9JR2sFj7fJA7P3z",
  "key6": "4Y2uZVkrsJjAuWGNEfqs3yGe4eZb1CgyQevhP3JkUj7tEJLYg4j8tb4in2TS6PYNztZCdei84ZJZKD2kE375wae1",
  "key7": "Cry7EuvxtdXE1usgScVHvKyHRzzWN4Knuz4L2rT87Gw813gQctfWu3FoRVUtpoSsWQx1xCqCLFxAKkEBYXjWm94",
  "key8": "zSnssX597Zcb1XgXtpbz53PyK7eqG3Q3gznbpjPmSfHUMTCnFUwnuZe3WDqLoZRSCb7XejDPB52RXeo5PgVV3qg",
  "key9": "4qYD7kcdWjkAny9KQkSkkDPLExyPu8e2hEpGzgRrdfhtpRwAGTsGnetVqJGc6QgbXHRdQkL5Dy5rE7UT9JVJpax5",
  "key10": "3sTeSSMzNu2PQcN9PsQzHkVEeLAFGrsnahwJWobzL2urQX1MjYmveuXenBxJCs6Ccci69zjxvwfr8MbB15uE7gXE",
  "key11": "4bsGAdUjEGCrC6587jouBTBj3pq3512U8BJRzCYkWc2mYxRMUWAhyDFVn4QR8eon9uJ7ox41KXS6Tr9scEr2hPtv",
  "key12": "5ePH9dr4Uy7GZrtHetpXRXY5zbncgr6p9Z7WC4GpcucJ6vWr2VZzNbDUkMnGFB9i8VkskdpxVcsDXm9UjPEAkrqq",
  "key13": "64nqFNuMpxzLGigbs9kvKGjZs6YEDpFCqtzY2RKKzG89tR4wG1CF5P2kXR3DzmNkGbMDdXQ8HkL2P5ZGUEchUnrY",
  "key14": "pdXBnKQkkE5ZHUrmAsRgWPXSiXBGDwzDgHu9YoJ27h92VBDKbj1N4UYxeR8poM4GJWCAb7PiPeZfVLFpRHuVjp2",
  "key15": "5Fp5ehX5A5R9d4UjoQwMdhvCbwxD7xggV1s74WbMXRryY9GhLDukqLMAD1NPounAYfaduVAAjX44nUt2h6K1jJiH",
  "key16": "YRTFfMc9zQHwnHQwaEWCaoEsvGsMLfcQnfhbAKZh7HCasa3FnynSQqzdfyFPnR5jehXzaxJoZRqPm9vpmYXDQ9j",
  "key17": "2mU33EtCmjJS88fgSnpRGiVQhbwTQiM8bg2Kx5cWh6iw25ENF5rsTVmAJrGhgZPFPqUa9H5eokgdFouCsw2U8Koy",
  "key18": "mURNGfMDq3WKYb9TLzyCevsJjuXm6Y3eCNjbqrsi4NjA5oSvb7gjDV5zFevwiUpJPmdg8cLCcuyBcuzXFvZ4suf",
  "key19": "5uc7DoKhbXMMbUm2QeiQxse2Subx8ifa3Aid3m4fkBLbg7McBMxb3xozWcTNe2mvF9MLjkDjGnHZnFudFqqCvZf8",
  "key20": "4ANadC6HwCFiX7cphEmV6okN6anV38wMPeYhrF9ZrUto3LgtBTqtaCdiD9C8UHmyAZoFDDC7AvcW5HBL9yWpAgny",
  "key21": "3cmxJQfMj1yQbC48CuptvFBUcJzBsWwkE4oBbbCqRSATeAg625Q8sReYcwCpfHn3sZoi27QbuQ2dLEwLa6ct3uhN",
  "key22": "5zGSeXw3o9txv9R6p56bSY3cfxydcw3XuDiXruGkMdWFa3WSTgiUnVxz4St4AJHipSsvzX3rugQMCfyDeqkTfkGh",
  "key23": "36EiujTz5K6w9XKjWGjDbtgSXeuBT4YdDRuhiuRF3T5SPPWqL47XwrKFmtriNoJP6kLz7rjfh27z1Q8qyrqFkFnb",
  "key24": "2fCFRbkd6FPWftki6G112RKDG3cWZnvi8B9Lox6vLDQ7a5ge9LcrqBx788RwgNrdxnsnLXBQaNizcFWghgEQBZiL",
  "key25": "3ovNN1ikfiffcY1Hx55BuWrkRkgtrKE9cBnFd4HEWuZ9VUguKT7WH2ybjPFM27vYWJCN9vu8M2speGSFKcrorJvQ",
  "key26": "3bhEuQVVH4NhGA3j7nKmZV2aTpqDf7kRiP28r4nMWb1juu1bUvTGyFP9nTYeWcmgvQuM8Rgufo15b6uDFKXB81cu",
  "key27": "5K6MdyUPyxGGiT6C7qm6oZBqqSFFZ2C5iWD44UiWaBrSqbmZ4ZDnoXzAtAZLYV7cbKmmUEVkahWFMB91sVQ612HQ",
  "key28": "2Bo6pXtF5TNf9nhQeZHTwyU4KDyezzpvCRN1Q433n69AtnHt4m4ztMH6wzqA3Zc6A3dM5hJ6GJPvW8THp8UsXjZD",
  "key29": "3UL7C2rR54buPYdJN8bWsGQ54Yw4D1ov15UxQsnwbp8h6VERgwv2mucwxVYQUpw868PSgsUkNzdcFnnheYMooUzh",
  "key30": "4qhBVaAYhdFCwpWBoHHLnhoeRMPjXYXdh4HbfweY6hBuaXKzVUgE2XfGwjux2VjaDjyg3wndV5DmJab8dj8BUQ34",
  "key31": "22CKvqhrjyqu4nMxeaxZqP3SFEPKmehwsxDWTyR7BGaKHJQjcqq2uJa1KQUiNit583Vj5tKYzNZ8n73uDeYrL2Kx",
  "key32": "5cGAx1zu1dNean2MSeCSgK1tF2qnXJw4igKLLzCfPF3MCWq6XVYoavkj8Prkqwn3urp38h91WqkthQmv9D7NAuBJ",
  "key33": "2PQdbCmUpkPcKfBHtqq2MRCZUAXQ1iFmJoy98uaa5wVbepQiCyQaKr27kMikrqwZTnjPZGPKZKTD79KfLeAL5PXa",
  "key34": "48k2tigRp4uYfGHFAqnbnzxqPxU6Bu5CPDZmc2CeyioLzkTQ4EbsuGAvsRFpqx7RQMshvPrbNAGgSKh338U5UaG6",
  "key35": "1nv2btK9nAeupyxUfQvhZaK5dNj1tjuAsTtt3zxdke4vADsCPaNhKXpdvGrtNs1GMbQodksiKhMGHNCERLjFyQ",
  "key36": "3JZ8abc5TNvKib9VK4ATQcZKCmURFD4msHzGZdRaobBBiL2jgmnAHMkk6Rxd38X8KtQheAqxDdFvJCjUCTvkJZnN",
  "key37": "2QdJLwdnT5AygmC6txFdaxAw73oLxJZrFokKB9yAMCThWfgozXZRCg6jdLybnfs875ApS1YXEeHJmUmuaXf4LzJ1",
  "key38": "2ztKp5MRNZZw1JaNZF7XF2syLUtZgBTkcseeUzjAWeZgK1rGdp7D6qVgdjy1KE4KRgL3mpGnCrdAotbKWMfTgsNJ",
  "key39": "4zNB5xLoNvxRHcmj63298oYwLJd4wS5Vf29MALSUWFMFdpgMi8vPie1SGY86QHWRdEJmqWPLdVM9JT2Hzc19bk6o",
  "key40": "3ABFcXg79tvwxTr9dMdqeWEneegWLeJEv5yuFFnkGAV2jfTj3PfhZMU3iwNaLYPDQQtXQ15uVciNe6y8XKcQuADM",
  "key41": "Lju788QNEiXJBayw71M6ELht84spWsCVWp9aPGmmt8JvaQgwrtaSJeoww4MoQkc2o3MTpNswWQBpk1Fidm2tMkR",
  "key42": "kgnsFZaUWiU9ff8Y5eXWqzWu1e48Rc73mhLTUSYziT8VTcGY84xJMpRD1GKQdxg1aMg8BiEL2co7hbNh52VV9Ch",
  "key43": "5XKxrLs9uQVZedu1wgGer913a8Tov6agHkxEz9Xm6kRqEoJaw9XeodPhBqx2HegfXayAmoGE73KD62Y3ieHkF2xc",
  "key44": "3CG5ocbDdogzCvgy1Pa2XAfUBKigP5tVb73s6QSzRCt5ACUEZcD5WsFGHRPCLoxj8A8yYU3NRVtcXmmEe5BiKics",
  "key45": "5TEjEJLH8e6URqkr7RBv3wPbEAkBLkEdm3exerBnL9i6QFUYHv4LKUZ3hiwpzhQ5GDuKkeinzoebkp8FXSeR3eJu",
  "key46": "RM2wiNa8D5UqymVbqEbXpFtkxF48Ywx5qgwtqgatRsnjorzdctA9ZAkPhkMMdpK6SqgKuDbQW1bhP4hiX5Rst6T"
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
