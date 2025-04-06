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
    "5s8kn56e9PaDaBNaCPwW628Nw1fpbxmnMoDbEpFn7wfH6FwmDbhDUHgGLfhBUzQFVtig6XcTqXn69qwVJtBVWtjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYkyUVnhFAvkzj2dXgbdQwe2kQiqyJnGsSfc2zCZVrWyBYj8tAt99FPPS3ALyhik3VKJ5cNBZKKxevz6L5CiALi",
  "key1": "oY76A8a1hFs92Jw2LAiSxgmRUUCgJMmMrcLWfqLoR3VCc8mWCqkhvz8KzaCZt4i47epwykuyk5ZoePYL89WWtov",
  "key2": "4h9LpbXs1zHfwi56y4ja3X3gjdhgN6nqj269SHJLAKLwgSbne7HxPRwPGt4MabSVT8dZ9YBAPUg7WTtTpmdmmnCY",
  "key3": "pSJDesyWcJzqvhPH2DPQXV71oupPhgAXHcZksSEPtPKtzVceVF7hXFNfSHd4u5v3Jok3bjeKoMVQErLe5Z4p4Jx",
  "key4": "f9aGQVKuTXSSkDofwJZuzdhZ1ukSVh6idcausuAjBPogRzmrTbYzENDRFLboGs1uoJVf5GsyDvmHkLKfTDxqNiS",
  "key5": "4w86dYapsY3jBkbNUrV7mRS9HhRxwk1PtXyS3jaQktGGYeX53T2BNLc9BxYtD7U8LEdwzWtQzmGdBVJWeymveTcZ",
  "key6": "FPpekapKxLEoHkzioBjPjEzjoAPPNkBvp7FceyytgFoG6EWy97TgGeHXeKDcpLad6hta2KHMqf8G4GbZqexoKdu",
  "key7": "65MyZGrkMzJrrUhuydBaD5Vudpho8d7sXAuz9MHgDRr2oXoEn72F2NwpkQxfR7KScrpDq5QdhyE2wc5wKABDMYXy",
  "key8": "9Ud3oPu6DJoMPkCVprRhAjQ2EYGK5w7LkvRrHZhXXyQFtAFU8UWxuMZnjUvEqftYhwKHhaVu1Ztn8qm5VVvR67U",
  "key9": "zaJAo2GgFmL2pmZG4n9a5Q3EPrTp4A36Cn9UZgCNW8pAwGBJ4YofrTETcJq1rTFW6V2e3hPLAzy3jLwvzMdo9KU",
  "key10": "diT89KNgpQrQBbgriHvBFtWM7DuXgNHCX6gVCzUBKvQXvp9osUpb3nah3LKmXpSWrXnutgTnV8JzXyqFavHLQLF",
  "key11": "UYZuye1Y8GzJdPnZh7BhFEqbMNogx13isq84nVquKAGGB2bDrGVuJqHfWXaiLM5G11xGEhL4oWUJL9UJXBbHFsF",
  "key12": "3doTvEuQQq5u5dbaiVD3u4Cx1yEG99wHSVyi7RzfeK3UA3qHPPPoA5d8UzyJbXbAX926hJZ3uU7ygwNGFdWqQsQy",
  "key13": "67T2hWkr2xb1TWinfnJHFAZwR9Yk164vVT6tm5tEJc6MACsgfk5qz4Hj8j9xbxJ8rZAdaxQW31Yuhstb4eiaLRZf",
  "key14": "aDU6pVbWWhm5K3RzNdhV8bS2jzydDovyWjVmVpnzUUkLpX9C3P88AgEz2iZgpDco34vZwfhBv11v3coADJckom4",
  "key15": "4pzieUmeHMzhLDGxtCcnjD5dfKf9teyiiZbfHrigLg1AmU1i845YcyFFVLy5yeH3U4CZA9F949LJXnrx5mu1HCDx",
  "key16": "C1PoAcnKgJwxkTs6CzmSpgvLdj3pGyhM9Z6VLLteQp5RKKcPSFhBsmVW4CxorxTFUBuY3vmhKPFgZVttsc3fghT",
  "key17": "3wuB1AMzWhJacphiV9GLugc3sjsU7AbKH9saUiYg1tvpo6xqPn3Xxx7iA9bYRBKaWrfEvmmmLD11V5xeR8wPff8o",
  "key18": "8m8wQhhhNN5vLEE8VqPE16kmjgfeMLrsmxKuPSxfH9n3261sSURk8xM7oWN7N6Fk19EcCds6WV9SD7Jd9A1PLFx",
  "key19": "3TsKpvtWMcf35KZ8xhZFuJM8uySx8jy7jcJVV9GXQv6FcbkkBKsoDxWmf1ZYigVQC3wizVXGvyaJzxvXUETGWJWV",
  "key20": "5BVYTThJ6ng7T9jcezx7ErvFdBojVuixbvx4gJqVfGX4zx9wCzRH5UZ8YMVpE1G2y5wVefe6RMijAGG6hxJhM7nG",
  "key21": "5Bwe4Ni1xihSCBeB9y1qRCkyZCv7VijbGLaqvZKJ5Dt8oZKjtJtgJsfx4NoTG5t1wxHzNXdJ87gvhpxxT8EjjgKZ",
  "key22": "4MscnUWfc5chiDPX7Go56FfeokrwvfEYs9Yvw5iTCMhuNaTdiiLXWZnWSDcnHThYHo8JiMWV6oZY8z1ac9z4Hj3s",
  "key23": "5GF5CePdCA1dDd46vCnk6NL1JQW38TekSXdUnm9KGAVNYYGo1ZPYcbi7taHyA9JE9NdfLyhHppqm1FWSDoBojMrK",
  "key24": "3eD5h8S6MJRiJW6GzThAGBTpk4pPBoYbmvENKSeqokENaa1WLPUiQiXYcHq71t9mtM3LpqWRu3sGVvnVSKF4eTj3",
  "key25": "GCEzSrxzGCBBmneRFooBNr23cqCZz2Ud68foUjnWFV5hVAEVVbgtfyrjZLPQ2MFtJBQxPPM87uy3jmrETsYxP3Z",
  "key26": "5yBpqNUZ4UGMWruznfiwdwYXeLbrfgq3iMMTEKcF5PXBHFPskYvpgz8qvBWFXp2N5gHTrBHp7Rqjt5AcQMc9mPPm",
  "key27": "2XTMqk4KLm4w2m8Ty9uHo2dVcdZ6CWtR2FcfmemEiaKNrx5TKLXgxdrST751ZLhvuaaiRfPT4UCBDF7TWXA4C4Kh",
  "key28": "bJYgFjS19C2C4BcYxKhnoZdCT4oNUmKkQon3FEdpDfY4114y4pGzKXPYAmYh5rYuwnMQuiYvsnZ5LNrQ4KhP6Xw",
  "key29": "2EtywAeFVokSVSggXY5uTpgUyBLC4hQi2Y7hwu1BNqejmYQuCRkQ8XdY9opCtUxXPPXG4C3P4NoGRJxsNgLbsRmr",
  "key30": "34NgH4niZZRt5rrJrWNn6ydZJrDx6d3vnCAeWEKm3Yf1aYwG6yPSEGszwRBt9Vm57KRY2pY8KpLAvckDJMxJr1p1",
  "key31": "ntkcBMC6hp8q4bwsCFo6wRZJD4JiJPfEH9VZdCCqWcCGEeKiFZG5dSjbodRdnHn9g5FG6c4kgV1Ea8EEwrLey6k",
  "key32": "5HRrVmHYFs2cdzqMMjRzL9Ny1bTYm1gQAnsQFHeWRRbCFB2NVKhZkmoFcnXjBnKgJ6mmVwR478vnvS71koUre1MY",
  "key33": "4cxWFbqmUDwkzpiyawwJiiC4jhRjf34BujeEM9pACCoCRYNBejHiJj4pWtBdHmK4aL98pvJjzBXgRNvby2pbAaGX",
  "key34": "4J5zkDbT7gvHEchYtC55Yypf9Ta5SpxWaQNiVViHFvBvRE9kh6bgPAek8WNTETTMXzW2YSEJDsXz6s1v95J9g6XZ",
  "key35": "4d9F4agLVU7KqX9GMoVrpySvcTz8o8kU9J9VJkP1JZgj3pSGSbd2bucDKWMtnwZaoQefH1d7XKuS7Fg8fGNoC9Ut",
  "key36": "27wA3h1Ft4YysqHCswxwTFxZcH4hgs1YNN5kpZLd6X6jaGPmVJWMGzh1nTMtN81ueo6VGYt59BhUsDqm65LrMeAU",
  "key37": "4SnyJEJysPXPR3r5SThtnQFe62SvGXrdCRKBczawDx9wHCxFKKyutiZo49pF4hi7rNBt61M4rgUjTvsQ7ThAFUXu",
  "key38": "5Z7NsseBYX5XLiZWzRdh4yXihj5AxRkeuKT1AqZKJBjQGfCkLsjeuKHJ4stfLbWxmVUmwDGMe7Qo9oChNn5PR5dk",
  "key39": "67eqEbYbdstANKgJzSpp7F4bBUPA6p9qyY8kHG9rMKHmXLxonNX1ngSkZT73oLBBHzAuZJPiqQ9FM2sJLrcYfm8w",
  "key40": "2KWPmdJ68vZ6CDJnbLaZEMpLFGZrEfHiom9cEy73cP1ip4cD3AHA2CBZBn35nyyyvAP8HWDBEsgWARJvVfxvGjo8",
  "key41": "5YiGgPsUdAboYyWxbFhH9Kd9vWwqLaV4igcJmopRkobFd8Q3EtGNtX88PxPwEfCESxhX4CEpdgULusaxkoJafG8H"
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
