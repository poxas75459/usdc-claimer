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
    "4xDwn3qp7ZsEvBQwroz5yF71YxkfAUevA7gzJcpRmY6TjcNHNfTpw3JuwjvCmZ85ka33LYBkw3Q8wZGBi8UY1QbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Jk8KAw3bhfyFBKxFUzyBBryjk7wa8XsYkDqSDUjT5LgRpRuxpVf5Rrh8s1GoD6pmTMbkFKi838xgD81MwEKtqP",
  "key1": "zGnmi5MgDM5xEDWmDE38mv6FGxJrCF5RGZwzqXV6mn8ogYE8KN8gva5Z6MMfnMxPwStYtNH1WNXudwKTiNe9WX4",
  "key2": "4bP9YCxVJLcJbwpaKLoAiB7gQ3brHpbojMB3ohk6W173qsdZCTbS6akCXKoCjMgoBxLv3KZV6DRfayQgQT9LGapk",
  "key3": "5zQw2wfPfxiStVdCjQp1guKotf99ggZCJhhEKzP6fmhMn7j4W9mCdDkP6wLppciHXgfzUerJvHRgv7VrvvyEVFnb",
  "key4": "SYdhQZuQ6kwZkMsqeNTAk8M58MEETMVqwKtFMyfVALZuqsimSAmssihb3wZQ4kGJhqcVZQvpfpW9BghdXPq6LGx",
  "key5": "51AAnVCiqPq87p5VeQtYomz2uQ8cunqGKVsFc19kthLQZ9X1pjr1a1bNntyM6heTaiUAzZd346Qu4Tyn5VxLbH6D",
  "key6": "4jq2hRXLrSYb7k9gAi1te6CLoGBLH6afgiuS9FpT3cb4MnBZoi1WCxNYzKYt8xir9hFKQtQ9XqSYpas7KQbya8ar",
  "key7": "4eEN41KQRkBDdNREDMXczxFJ9i1Hj6JsJ2xqetBUFGbfuTR7xfZu6ssi4nScqaYTVZuDy7U46iyj6kiZb4tTiSWg",
  "key8": "Fe6MgP1BifhPxKzKRnGWzUEVUErxqURskB6jEa3KvL3feRAzPUUNdcK4Kusyo8vRLd9hVq1oDhkGRxRSdiakeTr",
  "key9": "4KKMhteabnxjfCdHJ2EPqfQd79danRgw78Nb4jdVwF9iQXCVmS3whhh7zE3cgUqjyGB9vJgdfwDtjwcqJEbNewwW",
  "key10": "4dAx9rDPfd9hC6Gqv2mPjzia3VQvyycJCKEZVa8V9UyYuCB3KXiNdekNisixv1xpws5EG3LVquDDGR1hvQ2krEwK",
  "key11": "3zqybprx1LuT7wJb4YJGVHHZ89hbqKmm2w5DD1LBBGP6vuNR7j1D1gfbkEcP2qXdzox97XuQcBWvtDZC1ivxJsrJ",
  "key12": "3Zpm7xgEQpT4DpVmfLBahPCSXqhpKn95DMTz6GFmpBGruDrTdZEnJ5yAnWVyK4yiuGpRg59vK9zjLfDVZT17vT6r",
  "key13": "2LPaxhwfHT5b3nh1an9YPsCbY9bMaeMh4rS1j3hGkRtjtaQ7DGNLnwqhtZnrhwq8Jj1fo6UUg9CjB7p61vZNU6tD",
  "key14": "edRZaMQdWeHMGEE4QrsySBBG5YvMyJwNovEjnsJbxCq35S8VtiY4ovdRqacmJaavBnbrrbBVZv8N8RQ7bZbQN36",
  "key15": "4vZnyRmW2tZz2wJMv8PvWkjsCVqP5jR78nzCYVNK79nzBhNvHDvQfB5p2ofLDxNgz2mraP4UsqYGZmK7oKsBXPft",
  "key16": "2uYYZju18JzdZFxc3qYeuAEwgnWxvePfHXE3NoPbzLbx2haKwg3k6umBU4CyyXWB22oNeVyfhx3VauC5wrfBWgt8",
  "key17": "5Vjnv3jrD7HEBPCYcHsbbWwRjfLXE1KTpZudmJfLG1YpYG67NCutmgGghXzyk1ZsVNcPJWy5PA4jSzuhFetb7eMr",
  "key18": "435hSYeim6ptEUBVX7sK366QfH8Em1WMHvUzsYQiKN3ZEaY7mBmipVWNNFCbWum69QwcNpiy4sQn3A5JSjB4YqWG",
  "key19": "2sRjCPhXwaYhduG8esUbBd4TNDT1VZBzEaNqvGbvP4d1oEKzAdLg8iSXexR8BtEjeN6qPLUC6HbyDeHeYGo4ceDv",
  "key20": "2EhADMNyjRrBBK9NzezTjLBmqPbrLwxUaxkvH5GDPJhdWpoeHL9hMoJGCtqdxprza7Lo5X4o18CKyapjVJDJDS4d",
  "key21": "34PzTCvwUMvCubDk6nrTbUvnFJrzrgaPAj8vMoGbqBXzSJwx5uosw1rssNppgitYJagUrzXAEuhpVVeAaThpM3fm",
  "key22": "28mZ68891zot7Y9wsxxBdfjfzQcqyXy3Sk5oKte2QQ5eJvitcuhK243gns5Lkzaf5sHXjjYvimsy9k9LrE5xwoaL",
  "key23": "2sbHGNKc6889fS2Vb9eX8ebc2m2HNVvSnPShPp6jKA8TqZoCAZrLBJJoS4Zt7PkCpCAx472ocAqYJfWAEDJeVT7N",
  "key24": "55ozaciiKnMZoHYpWHcv1QdCYvz6oLSRvBvi2AgzWNJRUeJeyp2Vn1UR2hjX3adnxcWRio8moT9tfKHiyY7WT4bs",
  "key25": "irMVHui9UTpqF2hjRCrKtcuiTf8MprzRrQDKzXTrYTXHfjg99UWiqUnf8cnhwtC7e7akbimc1JeiKdbAuVhWQEV",
  "key26": "5sz8QLBb1ADhDJZYqffY2wAXVShmAE7VkBJk55xrLQvwQTPxHyi6Av8YnwtYAauUH9phdL58MjgytdiLoVZFhYsK",
  "key27": "GnGd5qsUCAc4b8HRvmthSsszUC1KSpYJFkPePwRbpp3EEH73B2u5etpVrh3222iYSr1YmgFRLq2EtEdk3Ybv5TC",
  "key28": "4yF8D3ZMepgU8vw7MrcnLMQjyGbKr4jb53FxSsQotaJjcAFxZzWiTPx7V3gddHwESWPJXqC37HajpzoLvKHvYLQu",
  "key29": "4fDAtMNJY5Fo3fsExBR6V3oPsq1hJfHqdjEcMr9KN1pPgdHqLGjXKviriD38LRiNdTy9r7BK1Q5RkVMEUzhiwxaa",
  "key30": "373ZU3n8nHVrMv3cs3qvs3kYok9uMg985VakcknyuYUUU1oHNCB4A8Bo9MDKehSnDJDWK4evVkBcCqTyC2fkw9g3",
  "key31": "2mk9Xanv7n1VvMZdtA5jUbNLvBAn56pwtQSLnNm1S79qRDuLAfZ8UKF945pw6e5xXpCuxKEbEqMZH6UhB3bfWfo5",
  "key32": "21N5QgQuDqrgpUnETvXi2ZKbX8gzBVwm53nA5puyzybDrqK4EnkfuWe7QtVTgH76k34yYkyJsbP4RpHXbm38k3NG"
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
