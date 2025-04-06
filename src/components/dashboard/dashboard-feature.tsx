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
    "5L3xVGLpb5m4Vnm8RJt5F3oapXy3qyaqW7gPSXz3qXsf6eZtPwDspGJbyN7i23YbPir29sGbipA9eetmgZ5mgh8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvjWM8Q8SxGrQ5gJcQLA1tfnTyU4RRJdJbVMvSYH2dCzSdeZfmoehzzpmyoB1eVQBY2j2QyjFQCojcA8qBvKGXr",
  "key1": "uYeDf5cQMwCgb9vqCuWAEgoEj2NGFBc1ktwAiJK6azaHTTAjJrFiPGhK8DPbEnyhVuCW2TyYSCMWM96iLved7nT",
  "key2": "2HD9ExRweQ31szH2uu528dL47R4MhmaAmbHDuaXAbXuY8kV7Xuki4NhAdQL1zXv9NjGfY8wk4XUeAwxZtY1TMp1S",
  "key3": "4U22WLTzcXsgqvot73fK2768xRknmWwykMsxVukjP2K1c39PtxSrkQNsVH2ZGUbqqyTy43FfhuwYVigXiKHUeCZE",
  "key4": "5MRAYfYf9kn7eK9QMEt6UWAibyAFRNtzq7TSf3eG3EDhAxtAspGfE7HuyTT544Dmr9HCBAaBjyHpiXfuYWSESoSw",
  "key5": "5EAijQhZ6bCYi397Bbw2xF1J41bUP2qkswWLtWmLKa7LndvetFJBxENex4it7SMFfncWsnpzfQQhMLeDuVspogXN",
  "key6": "DkvTXJr6VULGZCpjrgoo4guq859mYPu6M1EbzhFzPxDRpRZYHGxYBveRyffwLXM3tjQTzUuUPTpaa8zTXYPNoJy",
  "key7": "5TJ1zSDGX9k7AikqdqDkCWBjpdt8QFJLSwSmmzQ1pMkjF5qz8EqxMArZPPA68xJwVqQ69SJFBZtXho4wjdVdPeKo",
  "key8": "5xdvDHXny8UHnxXYkJ76yJcGDKr9bdSe5L8kRtYaHqTe155UkeV2DTmuKj8vY7u5E8AC5WtJyExB861wWVroU7PH",
  "key9": "2u72hX6MsMwu94fSFgFkWu5ub91KoC9R2kZ8FDthGV1tgvYaG6upe1k8F3degBnHc71idR68q5SR64SYarc8BgPd",
  "key10": "LSLUjYmFnsT8VBUiefWCD3bR4ocek37e6FcAy3639xUkRu7W9ftPNyPtUsWtX87Yi81Q7fyVWvqtiTTLmePLqQK",
  "key11": "5YD6GtLBiZHuViKnrVBmDM3LGwpzk2QzCjLfJaRokozkko26Dt4gwXU9wYU28aJVcVXKwJL2P8Syo6ebZMRT228y",
  "key12": "teU7FsQas1ZpQVy1gDGYrnepgHhBXeAwhMRVZaSYfPnZHnUkrc2B2cVpaTEoh3pWFfXC4Rm6B6BVSdGtQHdUuMF",
  "key13": "4mwFYEq917h9uoE7MbmwJY8FtkJBuhUhCBZumudWjRAs9q5h6CaPZrLSGJZmH8wSi5NYwEwWPjAbWy9WDcUVw852",
  "key14": "44HUhEiaBJjfYD2H28zJYxz4R4CARqBMf7mz9GwNKiCRRYu7nbA7uujWDnnCPyhqaKW5NYcisQMMboGwVBWgd1af",
  "key15": "4SmgzfY9R8s4Gn1ddoGiMoojv3FihhXkUSX5eVxyunshQ2qorTFkfQfctZ7653ZcNCRE9rRqdFrv8CqKCqc7tL35",
  "key16": "4zyiL2cXfP7thBW7s6Cd34d53EyjQgBMv3mmKsSTWQX2vHXahjujjm7Eyw62ejsdEncVRCmCYnLx4TgGZ1NW5ugS",
  "key17": "4ddsSGPLiw3TPJMhbQMGPgvVTwCXufcLR63dgEtqMSyNudn9vFv2H3FJstpoLi8xFtAAvUQyFZfun9v3G7kKk32L",
  "key18": "4CfhuFpZvMLfLi4SbZJ7NxQhSQYWaUa8jcDunGvxyG1c7ubQb2tuD65xZskCZSNF9JMQx3oXLAnakLmbnsE4rXQ3",
  "key19": "4hHCmhxGH3JzGtKYpuZRgYdqdp7gkN1447pucoDejHagZsbbN2yJVGEsstmKoGtg85BRBfPVbhLSrsPxVD6Q4iVe",
  "key20": "F9WKJGXMfBtntnZqzeEYz7iKSfnNQBhv1E5cWSBucbT7W2z47onEnjJgzUz8t3h6nJjDfUcspovuzJi2FdVUorx",
  "key21": "PVYP8uDAM5LqX6oR9qire2RFtVuWhogvw7tEd5YU3Q31aEBvEm57GRob7nXucpWNhDEF6vF1tXrKAvNFkcfsm7q",
  "key22": "2Nv19dxYtybWeX6K4DMMLXzUBkQdvyaepvs74nJCnzdkQDqCAi7ED46fihAUEwqXvVTPycFVraET6owgiZsEjbPY",
  "key23": "46sf4pscmXSFxi5NWpe58gZVTEstUXX7cxfox1SYuFtUJ16dq9aZGUBeMiHf5c8ZvVaBKqQc3bJzTCmtfL9n9B8Z",
  "key24": "5kVTJJ54spZ6PVBS78BSB6GpsFSVm5W3nGZmZLpZ21oBcJ4ubJyfyH8y75RauX3dhQiTD5R2YLLrx8WRraVXAXw",
  "key25": "541ZnN5sW8wGWCvUVabW45bHUJCfWqVTwPQdXFQkEwP6dEfQakJKCcM5CLATukjJRG2nAnjLcwvtYBddNr96BdU8",
  "key26": "j3p6jFTM6ghRdLzui8382DwX6qxxURWN5JFf3DBtbKyYr5wYzgzZBDXiU6rb4VpQqqxCF7Q69EsPQerfVPDbaQZ",
  "key27": "56ToUFwakQYb26bVXxzznYD6sC7yzhvTz2TxAKeeSV2untkSxMZN5d13QSxLJPz26rvUHs24M2kCBkHe1AFTFwhQ",
  "key28": "5Waxq6Vv5SFtCFovbM8tDJvidMDbE48JCcStkkvCLvn3XUvWyFzD2mkMLeSGUqFgfwRSsdiKtJJ6vqfJUDDqf6Cg",
  "key29": "66fkVtqRy5D4en4yEwLaL46S3dWe6a8bzdZ1QS6Pw6h92u9tqh78F8d2e29EWb2E9KMaypgbMyj6drfwp7asFWSL",
  "key30": "3y2C1LDp3iMQkgd7SUvBVmCReodJuJF7K74hT9MYoPJksg1eML2io4qYxpfip16gBfd1mDLZWYKsDRobkLfvrp4Z",
  "key31": "obmaUFUVT4es4rcEgxhNnAgrxP9erk7ZnS6z63Gke3o2fqdRd2fafBuKKuNr1fLWPtqGMcDc9zRKkZ5F8XgNTHY",
  "key32": "5K4HsQYuvLy4FM66NaMNC9yt8SEJwmJZApZYwuabUHgVNrJFN8cTuYB3vyATnrT9yWY9iKhwXfJogQgExqQH7iP1",
  "key33": "2QeqexSWD7VKH5HmwTDK3JL8pwFpbx5J3MxgvfjHs9Bcq2hKzwC2Xkwhep8oz3HCnvgTH9CvdahZrpqYuey85Bsj",
  "key34": "5x4JoifuDGdsteCTqBLQ8d49hn4urZtoxKe2Q8MYsijUwSGws3v7TcHHPbSUPYBPUHoZDeYeYNRsyzEjAuf8soNC",
  "key35": "3UZ5VHR2K1RgU8xek29UKvpVLjuCKHUUDm9y2zMLgyZG3sjTHjBknNLKxiEzUdUiF1zaBiYrsCSsxc56cspN32Bu",
  "key36": "3nV7Z4Jmjb9TZfDQB2JLGWdWD4d72tKWnEFLJGYT8N86i9SrGLWuy1hMEjxmSDvpqNxWtCZ34CB458DvNeaeNjWg",
  "key37": "583htArMEou2UAGDwK5QatLihwK4SyJGms6HY56ndt6suGoJEy4EyA2hm43G8Jg8EF8mURPEgjyikzL7vTmJfXH",
  "key38": "bDtyHCFmsUFsJYpBebQXkjXfu6MZYjMbKA8AepSKFyrrW9ZgMEBjLBZh5gRXn8qFYweivg3ZzfsqX15dQ97mCWy",
  "key39": "4YtvQrmXWDjVuqTB6BmMTAbfzkdR8dzWfRxAqvYUrnUgtnwb69S9DbNzdCtxJxVpkYFuErbYBCRuoidbL4tLE4oc"
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
