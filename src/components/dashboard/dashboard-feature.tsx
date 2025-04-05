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
    "5vFFraJ12VpeoS3ncKn2vpsjWtFh5FGMqfCsRQSFXYxU7A9kxwsWRVkGV9gRuNcUw369HzTqNEsqJxKzc8cgcxSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dm5XmcRJBqh3UfFN6krnw98Hr8JMLiuG3WB9ZdLxEUsMVXzQTs2ky9n7xufK9kcjWaE1ev5zQuU9Wm1YE1L3LSh",
  "key1": "3qiH79PBnpVv7wMVpg9SQ5uS8gLQ7sScgcqNYjiS6YeVYupPLgLU4DDwssZ4skGEWoWUTMyY7dWzqqrpw7KWdMHY",
  "key2": "3s7hWZwEnXdZpa7wxt6Rn45MbQfzFoXq7YeKS4sWeYsvNJamQsSdLyC5yogwyi1xFL4ChXAST3fZsnHYm88dMhhF",
  "key3": "5VnhrLcNnJC785sc1P42ToVh3J3gicTgjwWgAuQKR1RrT3mFdQMANx9s5BqCJywNeSuwmuRVPrz2Pkrkeda1ewtW",
  "key4": "52j4K7F9RurhzrVMGF5ZyqLPBzoEjpQCR5hH9wueUxYp1f3u6Q5tHea13EhZwB6ThYbHkMFBvP2juTQrrjX6jkuD",
  "key5": "4LVJy12cD8aZc6aC8PwSqT4iMEnoZcvrh4JtCLRMzAUGGbC43CFXTQVpKvjPJdE13q6zFqZn2V9Etf3TFj1vqYSZ",
  "key6": "2G3CFz8d8Q3ebBS9SyDmRpLf67Vg7ChVbKKzvfjvzpVDCJG1WEgucPQyYzhbqBM1sTJdkvyiax5boGgXX4jvtYPg",
  "key7": "LDEdvRHYL75igN13aNrM6nEUABPnLvVTKLZGCMYJYkjGLXiY8k8UJxbTH4X2ZCa8YVgoRvthrHnP9RSpTjbDSyC",
  "key8": "5ho2qsf7Gk1krjjQwsychRorGh233zMXT55F3qz9X5m5GrTBfyMPwXyUSvMjQLiTwKk2v9zLed7s6XjxGH81PjL2",
  "key9": "2fi6QiGjEF5J12dRxscyXpXxxPxRshVthFErtpWcU3XfrWa5HRiJwDnuYyubLbfkRg3i8efSB8GCZ6hN33aWhgWr",
  "key10": "McinRvAvXCpRDX4kmUMUC7yhUoveTV4K39k3peCiwhn2Nb37Ehs1z87BW3NCd7xs99f4sqGNdbA1QWxra24tHwX",
  "key11": "2S7g1YGLVZasj71XmZmggLtELgG9bAVvC1yFuWs2v4KpKfkouAd7xLkWKeGKJUqwAvQxR8x1ZyM8YVd8nL3jE5Hd",
  "key12": "63KesbmoMFUNpAjRidEiXP1zwMDRrSnxWNf8NirdCh68b57cY9qEQAyB8SywoxzzdvN1zP9bgvE1vuxFbXB8JYAM",
  "key13": "2gptYKm6XPajEZdE1mv57UhcaCLTV5RL84ED2qFHaRKP5RqbGWVY5d7vBSXYmJbPCyB5JDcXM42KR7DioHuxadWV",
  "key14": "5MdzwMNCMFhyDE4PPXwUbc1BTXZ4L54QyKSWqqzUVFurGFkdt9wbAsoBr7imGBx4rAeyaj1tzDvGwXEdpYohaCSG",
  "key15": "3rbqYuCYK9ePYveGgpg3SgSqthH8WvjMK2gPwhE5JyK8VGRG6f9rDMDb7VzwLhd1wXXu8v2moqDkHQZTeSgftjNK",
  "key16": "4U4P9YpjreNjsgKcAUmypdmX34hCAPwmoRha5vNX2bbGWRRJEfEJ9xt8dmLdjW1YKAQgPnFZvTDHVqkgKQjM67YW",
  "key17": "zPfYRE4AtxUsxm4PvXCuihWQuUUr14szW4TbEeKDfz5URK8J3cRTaCcKQ4Fe5vyzCCYKgC3GKFZ5ypV21FgfNCb",
  "key18": "4666HUUwQkoBVA4rBa4Kn3RtV6kJN9tPSeNn6RmmuzUS2KoLA3iqK8X85H6tq8yR2Rc99ZajXNdaP6PbbKXzCXgS",
  "key19": "5e2k1rDKisfK4ZAFGmJCua5a7EQLBb751Dsr2jj8FyqViWDFk69gZB56n7LNukrnS5pmKmADVG4vz53KajDvLdMo",
  "key20": "31deRPeHU1NCCyNRUXPLdRjUnj9D3CyhgymQHZZ82JjVf5NnZgpkE2xRsXp6U3nbgCoD274i8V1MxXAhu2ezB1FD",
  "key21": "36tcNgZUWMpYqHQWtXCmCjPvN7vgWBHCp2Yomte1dcq4zNrfKZq311RCfQMrAeHCDXKpTPHP65PrR9GMNfz3SP9H",
  "key22": "45bpPAVT9UfYcLzMSBscBjcZGCw4XDGQJcBKw2dYLu3nKWRPfd9S4ctRkmyLKi89NjcEF94JUP7iAaHXJJz4doA2",
  "key23": "31gu4K1AFqpmuSVAM5PckhqCimajN325NUGYyBhwaYxmjPezWhDa4367VrpvicTGaq36eaeBukisb8KY63wykpwE",
  "key24": "3p2FfHQJpzGvy8isHahLWd837HbmTzyDePRzNkAPp7Ziqh9LAmLQL7Vo8XPyp87UhDTrQRGycxc7iUgqtGdLUitp",
  "key25": "5goBfyR6h4MPrdaGY8Cieod5gHmM7F8cksMJuyMEsxzPypYejPVEusxqpXUEzfiNte8Qi3NYygU6WMEayJnHuHAS",
  "key26": "3fVLGRGbALpZzReNwrriw9pftpgZ661LvzXzKxooyXxQPQvQc4exCfV9USz8z3qPYjUCz6rKy78M6C7SWoM18eHA",
  "key27": "4rtV4F71hbmGVqhhjH7Q2BadedkzrqmoxoZEUyVvw8ZpfUej5uZ1PSNdPRiDZVXgND5cFi35C1KR7ftxcrY8KySQ",
  "key28": "2X9imq9TCJAbSwjbNnVzSB8UK7MDKu5oR1F6C1CdLh5t9mpfHszYEUfwnoHeeY3Qinq3Ve8KcnuM7dVckbG923TS",
  "key29": "61fhWDuLVkTvJTmfuJrckp35ePq7ZQEKBC2ZkRDEzrAPpn4EBTWyWHTqdbn1VovHHGLdKZjhdnqrJwtfaFE3FuMJ",
  "key30": "4TsABtKqCpzVieMUzpCYi1eBcZTn72w5yY8K7Yw97917sTU89jECWBPDiDoW9m6K5u66132LM6haiLoKN2eYpz94",
  "key31": "2rpRStRJSwrJGNvAaKXoi8N22VCkuF9ZkQ9J46aHeFvx9bo8gg6YbXT25ua2yTQJpBXVjJb95MTRp3p99FxLUkBy",
  "key32": "5n3FDMsnvvK7ZXQ9JvmZQjyYp9a56z8SS6aAZEWizRNYseQU8wm9KyxB4eJ6udy7KTXcymBeN4DPtYqMdmaZRAZJ",
  "key33": "2PGT5SauHyowvQs65tVibjmX6DZDCaXbZeynjo46tYG8dMSHDt3UihicWC3fwrDf2yRZKRtd4wJibSZ2ZT2JoEwX",
  "key34": "5Ys7Lzstz2UPVWJ456P32EzH8hXLa71f77u7x9c5nx7bSmek4B2pmXe1J1rJ32G8xM8p3MbjMM6FAJEE2AEeRjAx",
  "key35": "36Bt4W9qamVt7dbMbNGTAPezmsMiVL4E1nNwjrZSKxy9Nfq4L9dfwnoXyJfMughozNc6E1Q5HC7LRf92ukCrNRDU",
  "key36": "QHGA2J8f31x6NMPAAW41g33zjFPzXXQPCDx3iBkEbJRCLFboVDqqQTeP8HhYHpc6NJbXG4unSnjXQFzJS2JmUt8",
  "key37": "2zqrwK4QnxqJ75NXZM4rNFrzTVe6uY8ZdJYyrrdq9i2qaP98GqKAJ2s6oAG1rWyoVD8nYxLVhjoa7iPNvjuGbvAu",
  "key38": "2ojo2Wz9J51Uge3Ar1Qy4WDbZ6ddaBqteJNtH9nntGK1FfHubMduenmNs5Y1fxi7ZJv9Qr1rkDEr1aFPYzqdy5NH",
  "key39": "545pWMM6TrgTXaRThmAKV5dL5dpCf98gt5iofwKTzEQi5Ak4nbGRTdhtQuiPMSShouNHan51FsxiFPyu2PSnxDnA"
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
