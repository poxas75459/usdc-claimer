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
    "hmLhsoGutDyc8sWKESWe8SUNRhzdThY6xSWm7EjZS54fe2mosdTvNm31dQVcyjmJLVF5LSieMYnb83uRhNH125V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSfv3UGrRcttECwwaLzomWcqPAkd2kfs9fmyKoh25L6ts6WvTwEa53XDATRV4c1JJGirU3vV6A31UciLrKgnwJ3",
  "key1": "5UJUtxx1b65zsQ1eS931SiEy1BinkqRubfqXjwdQRWWiiR9q6jLJnmA7aKmAFjgFpnwZRhX8ZU3GHGz22SVJ5KwY",
  "key2": "584N6VzCTZJsZn8Tb1B3DGahXixwE3XdKFs2YkgLU5fxMqdasJS3kyjRFQv68HFuCuLNrzD3ytBKDqr4w21wkty8",
  "key3": "vo6vPPgFLhywWJQ6utqyHYsZZxNZ4r4bBPch9X3wCGzHRKWVt9FMcRKCwrtwDM5YSWyDQ3pqyh263ZvCwrMkodX",
  "key4": "5ayB6Rsge1MkekeK7Mp57sKeL97TynKZsLiqn9DCpAxxSvnFYdrJaUngrpv8t5b2M2t6PNRtc3HXR5EkJ7NQNFbw",
  "key5": "Z5LTUdCNa7fLCgcxbHrzudpsxwDWRAQNzCTa97CtqNbQsbmNdA8MSRGsgpTmmg3PWTZcih2M7GTPN2aMSP6Kd58",
  "key6": "4mvsCaqmhLb13FtU89qQgFRsdv4aNjrtFgnVCYAoAbf8DbhWJP73NNjAMZ6kvgTJDiU7NEHhoAMVZxKuyFGnfAaP",
  "key7": "31VKi66GaLKvri4dLVWhgTbsNS6ta9PdLNvC5QqzCGwPrbvqaTXbJeFcVhNqc7aJjBRg9sEACZ6ECfHoVunSsmzV",
  "key8": "7g9YunnLDE6H3cVAZ3EsPGt3kic9KFBYoKCNhLsCt8eNEWGwno2MBHurrVDa74y7yU7h5ZscEPZpDqLKAyomW1L",
  "key9": "5bDRUD6HtX8xbpJzqG2eq9wh6BiPCoiqnLarFnNkzgPAweuD7VYmxmU8yHRvL5uYnpSZ18PiHG1iBAcvMTTL5Vy9",
  "key10": "2S3f9bou2LEPZq4vDewqY8Gmvbfc6aipJjoKrA9dJMSED5TpLs4SnnADxFbMeh19hiTubpfeP7HbPfbV8SawJyxu",
  "key11": "3HFaueCQqncH31XBu98WeB2yGozBwWXTrVkvbth3L15uHNL7f2LCb8DhNSTFpSkXYC5Kb2UwV2wRmSAiZzQzNVwE",
  "key12": "BDChv8CMjd1xBvWtU5gW3s7eoX5JQf4EfLzXYT1uYXyRtCQaHseh6Pst3dUCf7dLwSRTkrezAPmZKgzBztGbLKL",
  "key13": "3T1jJcyF24Wm2awJmdCwPPcQV4QmgSnJ1b7mTeJYgy9Jfi2KzmXyjhtsff2rqnLQsHTjRjcaJqSCkT9nkNTEU6pQ",
  "key14": "5BVWyTobQwFqXQ6VZzC7vm6pAaXUk7yo6CR42CcNyCiCALmLFNR9rJEhMBj7Yv1gBk9VWMGDkxZQPnP9wpTU23Rc",
  "key15": "5iYqfK6MTxJLgdo5GPF2458SnzBeCfjoF3iw58QuN4rv8ACpWQbXTPU4xyaQT1LKJSCy168EJZvzbLdWhL9nM3z4",
  "key16": "Gkii2DyqGhBEH95zJX3RHoEyYou2jpY6CrPDuzVKSxwmhuwQtGqhHmj5q9oyvppeiP564Bp3Abr278BvkrF5jHq",
  "key17": "hx8Z1ZVyvnnoeK7rDW7v1d4asUtqyAcgzjcQZ3ih1zpBHgFg1dQZ2NSaZfuXRv6xX8LS1npXQcBRvrAewDyAzpC",
  "key18": "X8JerWgGxr26VqnbUnnz26cvC7Fv2SyQeQa7MQqDEkk9yAKNB8tAp5Gmx563AZ9KtpNGcoENzkcxqTDtGuMLwtf",
  "key19": "StjHHU7N7KwM1oGk6gvqBw6jU66GVm6YtNPS1hw98uTFgS7R3gCPJmg32qBvuyKXsoFzpGTBu8dp7qtkwxbxSKm",
  "key20": "3fr5jkSEXyym82gCZNn8362wSysiTZi6TAkUoQPATMND1Cz1BghrR7nQ8qDpa7zZn4o1jVyT6frLwKii8ZqMTrqV",
  "key21": "4VuCgNJSAb9jYXeGXB3xC9JpY9g8ikhwfw8BmG82iRN4bF24asAWdUhvacUxE3kmiQTFcxjVkUKbBQGJHJC1FETB",
  "key22": "4MQa5qBQ2UzqMAcUoawnZCGS5oYaWiv5m24taWoXgKrA1wga7VbJNuPefRYxzanq2YURquLqtcsZRjf5CheoweEy",
  "key23": "2nyVyxrgvpU5JRTFc6E5Q5UHm1ByKACs9SMEoS9k8E7paq3GBrxxUdVsP2HbJfHYUNaqo4c5R8q8Xen9HAsSTGWf",
  "key24": "2jts9q2GVU3j1cWXBxf99AWALw5BHu4yjb6LVN7c8zCGQY1YUxuLJ7qpfxXEofm8UFqMwquCABsDhvEgp1S3WDw7",
  "key25": "3JZapKrWcT8iN8j38gxjb1xDVxaJ9AujRBr3g7ZaSJcgap4iSJ2X4AYjYeVBBwcyThwt6Ttg4srkXHdV35X72oE",
  "key26": "2mc4R5HJQzoypQ8sUmiXB1QAQPVPkXo1WaZ7kbdUokaNR4pcwXM6EH4YfLZAssoUN1SmW493qA6gNjpaKrYM9ReG",
  "key27": "2AETAvJMrjB4ztApnfD1kgQPPhJcpDLEKVyyix8iHfFwLWoYXW9BU83CN3j3Fv5mGphB2CgevoUwpECHUCxRVKMA",
  "key28": "3rPDAJaPGare7b9TSAGNYjciGLqFyEPFteMzX4w48EK3iSH8YqAM8QUasq87Hm1D4qN6GAwywwPb2Lzh2raVRKTW",
  "key29": "2dTdUSpyunQVRKSGdWYA8JGVWZbADNKqvHgSnEZWPRdtmJBwRDMFN8siSyzN5QxCT1VowaoPVtYuzRVe3LrRp4Cm",
  "key30": "5baom3ap2X6bkxgnnSFZj584QaM3Cn1VA6i9bJgm8JNqLPQ6QvNe6GC91m1m5b5VMXQuDsXX4r3jFSdY2qkMMFiM",
  "key31": "5g91rQxSnxT7maMaNYGJQWQGQonvV3xTCaheDpedjeVQp2CrjBmQLfPABK88Ehg4QuGjoybF1xYK1seq6paCpCcU",
  "key32": "3QfQhUH8V6b7AuTBo2qXPRr8xk4e3LfX1MhNMpQK4ycfF65RLcPviepfXKG5bTJE6qcRweFTVJG3uM7r3Qn8XkNY",
  "key33": "LD6vFGm9WJMtvjMcFhwH71n8Q6pUiNRrA1FsnqvrnP2U4YLPzfyfwmYrA9GbEeuQmhvGQGFdYjKecDQpx1AEiqu",
  "key34": "41C5tx9A9fiVCZ26zxed3wz6oavPpWEGHFTCpk3zJmLxscKzNj8A5iNm7rcyxrWW23pZVhFbYtkByJxDD9DJBf1t",
  "key35": "2pFe3zqUhSwgwx4jAvD5XcsdW87TjuzWrYGD1FLVekefVUd7cLUUgUc8ySg5Dw7MpYkjzrrREP3q95NM1UAhVpA6",
  "key36": "4Arpq5iH5JwiX7SCH4onJ5DJ7CmyFEVqf3ASpzTSffM5EsmCWGEkSvYNpakVGnXQwcX4byF4hPEkk4bckCCXieCJ",
  "key37": "5CH3mt6NSC8SDjieeWoHZYpih8bSfkvtgRvMNBQxWn9WJmN4SeyjZQTemtkgbCGRshM6PVUmyCzpYPC7VCkaGKby",
  "key38": "2SdTDGscw5V6gAxYyWVsoAit6qBcmjdevumAnQfP1iSmR22ngGCFvYiARyrJnyj4AVNygJim8YewtVQEhUAoRr8u",
  "key39": "TAhjifoZ1v21AiA1rHPSFNoNLZrV6SwrmJBRQW3QyceixMDtPAuWAsaDYFBkVrVLbDSD5irAEDtR6Vb3pLLFhYG",
  "key40": "2jjCefv5fjvmomvdzYooLvB55ExRCp8iQi2sU9yxUKujYYWPxTgAzeRg9EiRN4ZC2eZTN2tGjycv4TRdA8wvcPP1",
  "key41": "3KiLDSpBxVPERindJxhdoz8EKf8X95dEs5bdxQhXoQZzaB7YDH4psmd71GDABccNGrjhgTipyDxd3xL3rZwFHsSa",
  "key42": "5tKh8UMArwLaLGuY2nDT6sZwstJhxHmmuS1jVjV8Dk7so8MXi5CpVuwxUmnZ8HhiERqmC7wrpUfQdE4tFHteeJWW",
  "key43": "3wRHnsW5NExp7e9ZdJGN3cX6h5VRdTECEVJLK9y6xpV5VmWTuBaEzD8rkAbYqGqpJrCXFHgoT2EcNkAszTsefhqQ"
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
