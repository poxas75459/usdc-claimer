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
    "3hhgVQVFXA7b4heD2PUvXfs4U6DNy7wEnfSyeRHSvjhL5oW6X7xvogw3apRbMUPwZsBgR1ZUx2jW3QNH4Xw7UNyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LbUXPskz91irXd46pfaanLqrFS8UJvFKLExifQcjtr5jPE3HFKMERLivT1wh5ykYC4mVFWqCD6PjAs28br9Rae",
  "key1": "3HTSxBgL7ZBDRoocnHos8ZyXt2QaMz8cASRSLQQapcZ7VKgyAhUoe7xVjBPaiaYXNUqgH6ighji2ozDi69w6i5Lg",
  "key2": "2BUi1dqtFAcY6PeUutAffntHsJjui8hmRAXQLbNg3cbbytvv4fpKqLTpQ5PXyjNUcNnQwcxpJxk6MgRWSLdeuxAq",
  "key3": "5uUVob7cKA27k8KbXUpHv8jk4SiEg3iNdiKgxtZ4p9hf4N6GMdK9Zg2qZPMDdjGWvT3rRKjRR6etsiL8DXdLArSV",
  "key4": "2S2EGZd6R1fxPuLhaVUZckMXSPFZdPgpdsg8XLBz6NzFqVVgsiZFNywaxifmbqrBqFPHqVjVU1NTJbNZmLNKdZtS",
  "key5": "3E7CsncMgT8VTEKn21YFa1VRYXpXLRAJs5qDG4Yc2etZqaqiwqJHDVE32jk5MufGMDFYJMszXiYskJX91PT3i8fv",
  "key6": "45YVwj7zNWA9ZkVEkYwJT4KNLbgYyz2FZ6VdEKVypBaTKzd7A6LBtuXZN3yco837wvQNxPfeRWqX8sqQaeo3n1cw",
  "key7": "5gGq2n3J2vL7QBezb89HnnjiBryxoKkz8EZJHBZp85wWh47re3akt6t6kzLojcSbrVTKQve7Xw1WMkP7jyPgPoV6",
  "key8": "4PBBbpFnFsswbHLRmHsYuvDJapdgjrbm7qpL23ccEq4FuV4jZRmnPJ1hsvXnJzF4bb8dh7iJ3ZwHZZ9K4sPw8T8b",
  "key9": "5LB1A7xGCwZMYGPov247nZWr7M6p6oher8jB8Pszajp8xJmSDbRB4fdVgFBpwYAHAyTWfzhBcDR5nXxc6owEZmXE",
  "key10": "2NRztVgVY2tH7PHenvyE7z1c2nj2arNVbKEoQVkWeMyAXLVpc4ueoy949bD3zgT6sm73czLkoUHsg7vvGpm5xgJr",
  "key11": "3ZijxubMMEDafDQG1csDAcWn4WTHQhqtm1GTtFLTxaxFDj9ytX7nD53sxdbae3k1YpGhXhYtHaaTUhpqPgTXR1BF",
  "key12": "4vgccGGiBpSQdGAZhijtBTvvYexRyYE1nFDHBaw8tw5KejgRNg1taMhA3XNdbc4FhqWodJbLaie5rC89yUg4qjNc",
  "key13": "5vx1aHi1Wa8hSg51AKf4WjmDT4bB8RP1ZVWRqbJ8pBQhZhnQBnCF2JvZgTrHhGzwEoxdKFyiCYutpPyoZY69sEHL",
  "key14": "5Y62xEXmVVniuxyURyarGifpXJ9THXZjBmjJj77vDF6RDfWkTBWVafrQb9aoVaefdsW6GtJbD9SKbkQVBN9eNB4N",
  "key15": "5Ceu4EWo2UkM19cZqFt7nTjioxhuRBGPmUfCVJGgtprair3dTAzorjfYJwn27M8UW2hkKMtcdin6noF6NZkHCovd",
  "key16": "4x7KRZohGKh646D4UM4EGgHaDA9fD2oayDxKB2by4EVSX7gPVLbZFqayBkz2SzNAM5rDWMn6oAZv9oXdbZdYCpih",
  "key17": "3siQBoFEsErxwZ7oTAiwbGu2hs9cEzHSkCBUAZ9ZqqixJWewizZNko959xzhvNb3SFAucgA93QgoGdkVEGwBsgn2",
  "key18": "58ybpwnVNyc33BF5yQMc5JSwfGbLK5GBnrs9VMf297F37ELjJEfs3QcSWUFKrfAhp3rQa4gSdEBj27eAAp2NnA98",
  "key19": "5tVNcbixV48vAE3PFEvPzbvZpAuNd8RqxLQBA7hksUvUgqpcyZ9QB6ZYN4b7uudjuVwLRF6UA5rWpHBHZW1doeui",
  "key20": "3QxsfhNcbh4iL5qQjScUsxvNkNJXbwGyqZ8B86Vex42LuR5PbssubgkLeQwMP6i69hJhzeBS8Wtsg2iUeHitaSc6",
  "key21": "PGidncKty7umaWZAn8VxGUAqKZJLS2xGX7U8wxmjHQVeuX4tKHEdLtE8V3VWyYH1beK8T34nr28pJTeaLGLHusA",
  "key22": "3g9MtdpGKk4HRBaVanrJySvLs6L2BM8kNhPRMSFidGesg5e6ZAWnEagVxzecy8QGT2GuvAhfHnVmpXqBbrXpSWD1",
  "key23": "fYtbVUpyBLtDt4EuwE67q8GgEmxPPQz55vrTHp7JTN846F4JUuru5vuGEJqHMARxwNTPvAGTdgbCKmbndWHTWaM",
  "key24": "4JS6Zc6t6fqQ2Fc6nYuZbhF7mP9B7D7ny6k4QCrLoNgzQtW2NDLApfvcQbsqhvS9dqGqSnQgUXKcr2FyhaQj9nZg",
  "key25": "5MYG3RrvLNkQk1pFExpwfoPSh6LpJxKXWXbpjJ1MaihbSC8bGgq1hb6pXeGpFpiBDcJ2NKo1kYYK2KbhV4otozby",
  "key26": "4iktuPdKUfKHaZMMZMjG98q7VjMVoJxHg7fE1fRZmQUQstTU7DDfdTsacUKw1uKCQ5dbek5mSPASRhBZ6cUm7wLw",
  "key27": "2hrydaz4xk431cU4t7LMmUejP3ri3c2SbJCPhT269ntKbySQaYQFTxVMi4Uk2orbKHXXyK9zJgZgVXTV9Up2VsY4",
  "key28": "4WQQjkYXB1FPXEzHPp8kK9nUN4kXMM8HVRiSNt9PGG7cMo7KZ4NnxndrUwEfx1NdJ6haRdAa3dppP16feDPbbiLv",
  "key29": "52qVyUckvRmVjqsB8S2M4MBa8mgtaW7b7qUbb7vyaDFHCdXv5KJmxMguNK952UU15DPzhSBVftrKfY1bHW6gTcKy",
  "key30": "1J2uarDp2KDhgY3KCtWaMzAF5wzB7zrZWuLnNCaverLDH9ai1SGaY8suTbfapii2KPwKQZj8c68hMw8fEhH1VW1",
  "key31": "5m1n5Av75DzLSrDjfzAjmovvQNh8eENPPiXrw5F2e6PQ2B9xezbXMSTcLrajorXa45NHzxveLRnU4bX8RSBke5N6",
  "key32": "Xc8j3pJP7c1uHJwyReVZypcGhbFfXz1TQYUgoTc5W4FwVxyuHGjFzYbtYdJjpiL2XHu9VvkJpgZkiJdss9RaYW6",
  "key33": "3byQEoYtwCZGVnXiowUYvsycMtVNQ6UsEcc2YmgyNxkR786m76Na1zT5oTyeDYvVPDpFY6pPkUqUWathDJ4rSDtE",
  "key34": "5CyraUyXm8Y4hLkR3xzh6yF1NncgcJwp7N3T3Z4wefZCsygfPK4jhFXXgamQshvtajnEh3UCsAZCE3LdYtRxh9Mm",
  "key35": "62DLMHL27Sf8zcJQkrztYPZDK8K7TRfahqvD7YmuZ88XUzY5Yw29McRogdME3cKrhBLnCzBTfFCadpzmSRrzrAK7",
  "key36": "5p3xSndcv9HKU8XWhZHvfzcMERLvnesEYusGxhAVdizKqRAcWaAJLFdmZAU4SRywxEsc7xxckiDvSrjftERF6zjR",
  "key37": "3W9GWbWfsrzWNQ8CG29WoeuYANZFwpty8GvpviahTTAcY5nnuQfuGF7TiAQpgPnAJGAY8AvqUtJoZj8D8yASLJES",
  "key38": "28wLtpspeaNzEAESChN91exqaVME6n5EToj9WbJzFGy7rwFiWprTuTtBVWWahCAVHmWV9PMXCivJongukVgVr4tG",
  "key39": "3xAbvD6WAPBjd8xyt5CiJWnR8HXpwNSCsHkBCGS69t6K3WXk1CH1edDJzbcGeJP1rT5UoED3wkBLBCYpz63VrQXD",
  "key40": "CAvWCL4CunrJCvDff1V5aTSHhfBBFzoVtNrFaVDPD8YTEeZCE38mAoTxDKpyS5Sn8wzgRGYEQLyP7ABgAzwo49S",
  "key41": "4ioV3kSrUVZEtGrPN7wjRHrHGt4U8YAX9YU5j5u7k2Gj8Nzc1n4nhorX8cjLZVRVFHEpjShyb94uh2rZ36kx8QCu",
  "key42": "5FCeJQsv1SyubN659FEhLkYjQWwqoRZUBPtTiKux7borkDeDizFEqEr3dw7n5NHQiNvjqvydrhoSqJn37hKxGjeM",
  "key43": "2zyNbUcHQbx5tEwTLQV1tPv6x29wnMBq3AjTYRMoxddL8SEtQdFxQAJo8DoKUAxvtTHjhpseGxzzXYJNg7qvviHF",
  "key44": "B5W9KVq4q38DfDxNKwjqWi89EwEWd4WnjkaJFfS6Z4jQ8Y4dMi4oMefyVLuRhBicPQKnPrGLdwrdbh58Lzn5WWk",
  "key45": "5cs2Q4fC3ZYvpBKPsnLwSm7DJsiQk6PX5vsKq369Pc57d5t3R7z3gbLJoRXLxtutvT19miMywZEnGhTRAu2bfXmP",
  "key46": "3dKCQsSACydLRJd4vLwJpbzkGZQUFoqRg7chnqM41xCUzKdbfgxrgarewKHYcHLqjoEcXA7hj83ygnm6KxqDQPct",
  "key47": "5GyLaJvzQw5NZh9xsAsRiK1x6j1C2MHyCUbf2UoxgPhoqj2TMfbJAQHtS1riqN7GUWgh9BBmjfSnzUnNhUoUv7EX"
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
