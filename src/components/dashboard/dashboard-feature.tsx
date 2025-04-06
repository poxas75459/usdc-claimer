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
    "2aPCgtouQoijn5o81J6gPzuVbV2bbCooevz1dKzSkJ4fCiStRhk3W5iDD6QRZQDKHrtGeQWm3EUdNh95Fm5i8UnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhHdxg23xetnAk6rxDdVkQFwrutvdxCWpe11XnskpL9zDnb4YJGYgr6Pe69EqEXXmG1PcBqKmP7ykxM2ZGEQ1fL",
  "key1": "24VcTX8nkBfj6MqBk4BNQVc47riJQy4YRMGie1fF3croVaeiiRbZnkW6RLZD3uMy1cNLPT3DVpvvNbtn9jp87EmW",
  "key2": "u5wKNj9FoTc5fyfNULvNWnBVDbMczxptgcuh3LscG8tvj8AnUiaTy9TXDtMV8VYZpZR3mk4jCvd2ZRNJWgMoCH8",
  "key3": "3asi9EZrKSWc9khsyXe8T1juwdSntB3jgRXUeqk3PCP2ikDqXwU1zGummHp6NiwjajhzwykAw4gUUCdvqKtQ89qE",
  "key4": "5SsaZjWGj1MekaKssdLmNLrq3CfA5Hr7FZ3UYohYsPebqAgj1dyn37RfiFEXiR6cbPHNy2iS6aTrtPJCEi1HGxm4",
  "key5": "pqKiSTgJZ2oShfsmz4hSJfc8hbQyjcj1Uy6zcuvDG3iamGPmyz6xNEBkcTVyYfAGtozx71z7n3kB44meptEeZQ9",
  "key6": "46FwvEKYYk5RAdqc6Nda4osw9VJWLtBprw18PfXfKsAyphhnSNbEK7zs7Y1kFstNwogDWH12T5juMSwJG5fXLzLT",
  "key7": "2ppUvZdqkzLTWEbFmozqtJGtXv9jiZYFWRbos9KEiQkEyfunk7QMzPGtwi7vpqcCYVLrccGWxe5dd2FTeELeypRz",
  "key8": "3LggiFd1K535FxUU3vy8EL1WkenSu3YaJZ1ZqE9GLBY8TGzo8MFizKrK5ag43wpsPePXkVdsx8CNxMHtmr9RsUs8",
  "key9": "62EYxKDy5AcGRRdYRcjoaLniKW3j4Uar7iqQV9z2o6G9qVdNExN5vaUVmhbPNjP1tNQsUr6NtzqD3KP6L2H6dmhB",
  "key10": "4Nujr4UZZhCSnu9rdawvg9EAaH2RgHkchjnWZSh623BR9KCtqdZKdWKCq73pMHh1Akiq9TofyoUkQZh3xbzKpsJ6",
  "key11": "5uGSaZfZ1zMwVwXBrH67X7wTyq5jSTV9Tkfhjq3C65qd1xNiR3fVge9HtATbYF16KD4wZJA9EGrhyWSXuNq6AULd",
  "key12": "4HaBSH5Wdb7LqdS8nM8o1UDJmF7jbRmBfSsTgzTkUU6H1eUbphU5JsAjgDTyDcqsTr3qFEe89TyaeCsBVdnBB64Z",
  "key13": "3ayXQcutPnpRRehxfbCurbByzeSSr3D651gokHFPwRFzYmezFJ9M2sW2dBj8Mm7TRe4Vhn5NZFQ8Htdkg6j3Tkse",
  "key14": "r6wixxkmM3iHr7G9mQwqrdig5cSLqc2vNVLVxbBofnzbLQuCnX2zp9qmeGgVJi98tbuxBJnWaAvc5YsifscyKfT",
  "key15": "3daNgZu3aCooiLjq5i6EMWZiVaTArt43qzCNnT81DFw3LHxYj31NXNVbsxRYHnAuXvg6jvP1VhJLjXjLGUYA4Fr3",
  "key16": "2BHoQpnS7gLbjRErebMpSTy3XxtCqWbJCRB4sg4C2Nj1NZDpzPqD9rm6UNQWnHNVBRm3euYxL5cFxXwjxuZccHWk",
  "key17": "31RnSLT8PsnTH3YwnBeg5y4HyAiXjpapnNFQ1sW7KuS9YKnNCTwq6Ngto9JjPF7THe83WzpqLCkAyBZGzHw1hGVm",
  "key18": "3LLdFKjJMJQcLTg2ZNngpX7FsJNhapmkxLjMqH56mPg2xFY4kYp11UFR6QNMDC8HYsVdeTsniDqfqjPVk8vmvrap",
  "key19": "o9wkwZXMxuCSncr1tYhAViySyuiJwU6mzhUh2KyLjQ2AnVG1u1q6pVVUYyFtku2jnhTwjFBQbww3xbqx2CQb1SJ",
  "key20": "55y7ZVJjxAppWCt5gwon7SP2s1RsXUDTcLkrCiDf2WqZTTycypN5dsGWo9SgxKi5fc6WtsGTA8z2qvh6NSuQGXyB",
  "key21": "3sSErG4AhEHNQeroTg1yjUBNoavf82xW5747X4PoqWngjDLntGn8nkxyhBprjDX7QFrPf9VWkkNxWKuwQiEwkeWx",
  "key22": "4eJrHDCCvUYkQBaVpfL2U6ATJ7vE25MGLLjuzGWb84ppTJ5SGwdoLJ34DStn7TqLReKDkW1ucAUMGMKvyCHqN823",
  "key23": "64qThvyMCVgsWnmbHwaDjuaAYoFdR37MHWJosdQrWXUHrdwMBGr59KCW1bfpt2xxtRDJSK4F5RjcNhmk4h4LRuX1",
  "key24": "5RF94QCVprDw5bKLGHkFqeY85mMFK1cxJqfn8ckFU1WwCtuuJB6J3uSehK4aK2qhGnDzNnTQ7cNuUsgjWqfT4GKb",
  "key25": "5yhUaAMZxVKb85Q9PbwcQo8a1w8QswedLa6XHLGo2xFEf5wmec96Dy4SPEKX8cDiHnfBN7HWQ5nnKGdWbp2Wbgk7",
  "key26": "5mNDW1JfMxCxQmVgnKSLBU92AaQLLubh94Qju3HXFuinrk6bXG9pYvfuEAifVDy2VtyAQqTz9xgjCRm8Wws4Ae83",
  "key27": "5J51bidkb3SPZVucjYuXae9QAx4Gw54YsqBwYXJT9jM88ycs14L5TPQXQE8S1iF1PzeoSrA6UdQVsbMt7CtqGRz1",
  "key28": "3BvvvxqYrVjRaqtN7BRJML9nvzWyjKb8f3Ky9u9KHYYq5RkAD6gNwN5Zcxd3upJR3gNFTVcLCv3QmvGRivJH4b82",
  "key29": "66MP5MFg4o4Abca1Bg5PmGimRp1KcVASQdr2FttzfF4PUpDufhDCBod1TtkKXVk2rFy2o9vYS3y87wQkA1MuSVAT",
  "key30": "3kZ8abWxCs3L1113TqoAD455oDvBMV6ZAM8QdKZcwCMceMciZCausdgaMicC27mdFbYyrRN5KE9ezAb198puR2ZF",
  "key31": "2rUET5WgovBYTkuLtZjeD7713S2XqD55Dhr62nJrjqbm9RLSzVXrrp1RRFdFZhQEf4zSkhTkwXsmgwSfeqrodk5T",
  "key32": "4TQktkUdm36xBEgjdm4JdLQ6Wmt5TrWGoQoGHbLcE8T981BQmuxKgrqoqQp7N3WDn25eDTRNXrieKFr231c4acym",
  "key33": "3h4oKPhgQQESMnwXVkXLDQwNGvchUitmhRNXWVX6Xz5cUYrRGD7g9RXocLFdmaaB8KJRFWg8ezMoti3HUw19TnFv",
  "key34": "E3MkWjEfGGMZHf3yEpXEnjniboMujZzEbR5SwXHZbU87Kq3JsgY9cd6kidX1QrfL3yFDkM9yvr8z68ob7o11uFf",
  "key35": "2fJFKuB6D4qiUs8iU6uo9nuEx7SvN56NGgcLWxPcCt2H8662rdbkB5zxL3Aj7sVUdLqzENRnWVuPRwahTvDpLQ1",
  "key36": "2139G7xHjCdt9r3Wrwdj92SfpHMLfL6GZN6t7JLHTdsgAAEpMck3p6fcR2Wuw4BNQ2kE5iJj7dNo4LYtppgiqdhB",
  "key37": "5F6cQCnJQj779WdJcFxvVHzaSFirTBNcxKgtnciyDcKJRr8fN9YJuDoobhcfjfZtkcL4JCNoqsuRnPLk8pidJa7G",
  "key38": "671Bb9CHk87tp1we9mXrbipas1tD69WHiHRQYdBXXTFzJVEQ8rvG8j1NvYr1Kj9S9TUQxys69nNGizCwys4GxeAo",
  "key39": "5SZ9j81cEaxmzLxDE8FgT6TaJ6wfDoy4ABaRgg6zqk54FSigB8ithJHgMu3XeFrp2G3BhHmAQdxe2rSw75LDgAAd",
  "key40": "3jqXDRWdaYehuxfySUrVcHnACq3DsvQw9keh7TeFNkwXjqHw96tpH6vgzck9uUByq9GzMyrf8H8r99ASirsFSe9k",
  "key41": "58HnPWvCXFzMhUDz929VRRKambufsmnLVb7Pv9mQu5kb98Bb2d1L95hNmYNQucVo8gaWCZ7P2Uuw79KqzXyPUZvT",
  "key42": "5iFE4XAV7MURa7FHVvNLC7Ckci8MowDnzm4uTW2iiXqgCD8cZDbStgcJkpYHnTEfbEURL3LGfG4aiky2vXKVpwXq",
  "key43": "2t1TRz4tSyUE6EUupWLiBRavc9rPEPrnbQoWxUgb3TrSBAwMMA6MjSk9j15c5bs1iqL3CNdG8VMHaC9uC2Tbg5jX"
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
