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
    "2k8pJ7sDk9Xkf3npGxb4faHkFQPkbdpYq9BLjKNFG7ZRnsfQePn4bxByssNy7SxEdR2k8CdgNphd54KkuMENXE9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdkrKeA9cC8StAaQNYUjWeeqMtALWycKZDKAfNkWGKEqYAMbToRkNAttw7t5cmHtcLiGvv5wLRo9CgaJAooqiCo",
  "key1": "3DTkT3h5LftGiADvcT3EBtWudPoztQz3qHzsydz4MqESaZLUnze27rrwXATrstoaNdL5na4RXV241ftYLRiRRxNi",
  "key2": "2crJYnzqKS7xV1M5k2pdxhFwsBzAKZauCk7PPECbNwVFJo4qpXKm7VyDD1JaGoDYrvkQfyH2MyzJKHHUqZwiawGu",
  "key3": "2es2L4oYkehqRs4YDfdz8pBeSW6yw35PuEcgWE2Xm5m4rmqGfqXAix1VugFieU7yDhY91JYDGNHRGvywdPwMZU5Z",
  "key4": "2jMogRcZKRAF3yUmCwtGPsCgPVWEaqSqMiPePz92a716DE1pfhf9xMQy76ReD1YZman4y4yQSd6KcPqWYRSy15WP",
  "key5": "4QdZLpF82w4ADNSMN5CJKNue2vv5APUXkoTFpuYwxtKar59oDJiE9jCieZaN8ipX8YpqrDLQ7bZqRq8vBzsCZgLC",
  "key6": "4VXMGWvX4ZSuJCRzve2ThvkwwZmTcijgsibLJnboMpbmRpnS2fMGyqZwDGREjPTvJUEMSh6mifDer5oWF23Gs6sf",
  "key7": "4eTJbM7rRxWKb5RmU1JGnvnm3N58camN8A1AZeQ3DPJUM6DWPEDkKcyDv4C4eWwJYRhskHiLqaF8c4WjWHYCYLKV",
  "key8": "4qHiK9xvwVmZjofVNUTx9eHcN55dWSQkCLJ6FQG3o8RwoZEnSsmccRhN1n11zU4Pu1UfFVfsL7LJz8UQN3PMCvVi",
  "key9": "tDDnuGS68oxbX5vzSkhc6Vtc9NHSgvZnw65LVSrtv8kAGPKhCfagra8wx9QPghTPN8WNqVWRVupawsLcqvD8uWQ",
  "key10": "5mZC2odvE71Hbq9dRUjxMid1YoUpoiUaWZKdaZ2BPkSTY7r5RGZFZPVzPbs79UUFEXTsZE9x7hpzmnkbDaFS3KYb",
  "key11": "3q2Ps9xLvZicy3oH6ZnS9qq4WiEr5t2GHU56DZ6ZmvjQrenKkvehNNGi9cUUqSSdCYyUY1FoVhoVMWaR8ck4rEuJ",
  "key12": "3Kc7Biqxho8MuPaKhPPTW2h7LvpJL2FejZnXCqhHQ5vx34XzgPsMRKXyxJvtAqL5Ru4LnaiHhRYCa5crPynTh4JG",
  "key13": "5eZKDqWm8zmyMkXG5z3g7xU2TyMDcUJTqkQFVPzPJbTnzZ2iNYhpor3UJW7VsDQ8RLxLi8j88zoD418iYkGFhJmK",
  "key14": "6pHbM8QG7LHSRFunbKhuoDjzyfc58QJGZQyYrvxkateJy496Vxr24EhAJqrFCKC4qdb1c7p6NvfFKpY4sh5XV2N",
  "key15": "yaWsSnJvVP8ad4igf3TmwiqVabbWEouhc75DFJBkzF9tatJdbL6dAUWHtZJiuLWmDqrCsYXJV1U5nY7VrUEKCma",
  "key16": "3gEWgyeTUJVtCcRg9eWzwq4m8vX3rX5HHAUj9SsuMVukTgPmcLVLAgkm4fNcYA6fwgvZ9XFeyUCPad3f91D4PP9P",
  "key17": "3Dfau5KfCCPDnVNF19zfYGMD39atvgHEf75WvuWLmnbdYUugxPkFyo5Rux7SUr9oudrNZ88sYFeFvvjNTvu5rqak",
  "key18": "4jEyY3Yr9Ag6xfZ1uL9pk8XJP6Gp3eRv4S2AX4SDkw7N93cgDgTfLTkpChmC3UuMBUxYTgGMLHjX9w813zQn3PcD",
  "key19": "3tMjCysFnPfn1PgYKb1iTsGxKPdgujqdsiBxnVFhxhPioUfeDq3TtjGQFGg7HeXofpn8BnybQGnXZcRSGB4Aouyg",
  "key20": "46u5bnRwJUpU6utw8TmCd6i5FSNT4p6nLWxFtSFeXWU891PLgsDU6PxaWjCATsvagx5nVYk1bUkULsjL88DsHi5n",
  "key21": "3Pa55SZXKPxC6iYf2SJ4FuSrhD7wMzxaz1TRuJ6ii3Ss4oQoHTS99tGKgFQnNWHFcRP6ufpoeXtv2ZWLNkTpFBuy",
  "key22": "3buvkXopikwiecwAz9Sr7cMb71Jqz3JmiNZCYwG9qCQDCJwhFBKD8wUo8Y8Z7PCezqtyW7UmJ8Zbwh9ZdrvfQpT1",
  "key23": "39YWHhgq8jMTHms7vsYMAQ1L6bNCBqgaQncGeJEJWC1RiemQdab8ibxnZ7gtRrQVmGBBSZMuBoCCv9tXzAT1GPo5",
  "key24": "4FW9ibcYggNEpCJxndSA15aX6fUEVWrLK7SJSMm12dHTfGjzJcvp4tTaASGCqYkrzgpN6ZstPSkAZgjjuMyRrgvo",
  "key25": "3Phmc38LG8gV1UUAq1eFEZ3jjCsjNHDPkMsd9uFnYwg4dTSS9ff5pJdsKpDmPXQwS27Xn2uZiC1KU93wDUB3GPqN",
  "key26": "3XBU2a5vWXabWGWHZSqo6t4zYGEVGuZLP71odzfUMcWWmB9UwUv3tzkNZYWsYWAnbhxKEAUhMvPjuLCfN2g2WnH7",
  "key27": "4obWsxaMWW5morbH91v8SP7b9k9NBuWD7EHUCq2aZipHePGognhZsbYyZy6ifqBk4XNvEe7Xwi8dWoSqBq4Qh2JD",
  "key28": "5UeWVaZL6MyFZsJhCo6VWRtgdaxdTv2mzFrSf3eDwF14vbCxpckySjZW5Wuv2WWHM5cVzY7RD2Ub3Mvf5o6C68Zo",
  "key29": "32UtBDgNomowa8kJCq1GmWrkNsKERyAxWRwBCuixw2PwVZVQgBmnFD3AdiPcvyXLx5aTpTdCHyRn3nQyicV9i9v9",
  "key30": "3MTRDkgYdpTkNzKddK7h7ZQnmPjWa7DNuHP8QAX6MiybnvbTwbKpbLK3zVdJBwhBdbFL9H7SLRpiE9zasAu3RBCY",
  "key31": "RZTA68HMpPWM3h8EnFUxj5Pjege5gQh3jmwLBjvqYGpmo5ikPisuBwUohQo4ecoQFo3cdVFApcc9UtsVPkRMZVg",
  "key32": "x8ewtR3WV9tfvkfQAb586BPZEVP7QqYMQ8LjnX8ZoCfEbPGkEVHHWhVtkEiovyScVAuGGrPijEoUsHStX8isn7j",
  "key33": "mTKa4YjfDQBF5FmqdtQcVW5NQWW8zSWnmaYRUHUxrsgdrpPaGKuYoGQbpNA6z9AMG8dp2wDkJF4txGnXwj3mdd4",
  "key34": "2USW7Sm4tfccEB68CFqc2N5ueqpjwxfYBTkoBMjNGY33JJJjWPPYVfFcqNGfpV33fsywzpWMddWvXiLkMfSkSGy1",
  "key35": "5eZhWMkK476MZtEMEGYmkycsjq53wKfwi6zu7eUKjDvxLTbw3WxYNoPQqfNgYq54ACcSVWVQ1EwgQb1EqwKrPDqF",
  "key36": "iMTJGaBzPPPzKBmQvZB2nm4QPd6KfWphVqKBSPSfehVht6DrU7pQcQgmYfFttdX2gT9kjJ7LrAhZqJGmtKpntmF",
  "key37": "3JRBfqoTo1hSHo6X4cMBX7pXH8h5NQUdNma9WEPtaGw84Ti3fEbPU5wLb4pF744ZsnAQuumfFj1paFvgWJWpi5Bb",
  "key38": "Po9v8T8nsoevXar1iQYN1Squ9F5hFqKJd8nfg2rpQZyoTc7MMK3dMZKhPyhWBsA7zVAsQaHFCMcfrwL6dZBbWM3",
  "key39": "3KJCyRC46Xv16XsnvdTgb7L83j7S6swnHnywuvh7kwvHmdPXqWfX5gwzSjSpfU5AeVYZkE8AvDmKQyQe7MytC9vS",
  "key40": "DhtF3rq3GE3ErLdGpwFwevEVrg9TP5sUeK33MR6jfT2Dui4kosBATryLDoedfDbQTYMkVBcfoAQS2AVx6NkERz3",
  "key41": "5svjxLRZcBZ7C7dL4Z1Kp5bH9bgipEvRA7LiJknwzz7NFED8Je3VU31VJwiEwScWr82nRSosnbPuQRjohHvxhZtY",
  "key42": "Qa6r8wcm8jJiLS1zxSxZzrVfzHqp3TxtWHrawzewCCNraVbP6LS88LEgJMWgWdgRpLmK5UpDd3oUUGp4wNiVM17",
  "key43": "4EK9Lk1vNySrMkn4xGeML64CacTfjfKH5tb8vq8xPQWHnUHDzamk87Q4AtYYMTkzmLy1QLdeduhPWqgSNwgzx5nV",
  "key44": "4B3veWyBZPxZAzqGNQo9CaiYBXNevQt22tgfeEpJcvS1XHJ21qJF3wLNCkRVxrcg2Q3vdyeFt1MXGHUNRHBVA6Tf",
  "key45": "Rip5UZXwEStg23oZXrV9qLY39JreksafjdfiBMkcbYsBWE9xLfck8a3LohSYD2nGy8Y9B3GdJe2VYrXX5TGpmMb",
  "key46": "2eQkZWcU6gT28AbFq9ZeDrHNhxs3ADcraM5yqBdACCbvLVooKsnQqmMoACcLzvgnWvkJ7MQyHzmGdz6Z5KEEBF3H",
  "key47": "4fnefvjKDiWkjYMJK2i5zsfJMaEeNWQXsmXdDQ5bgbAbDtJWghdb5b6fuNSsYzo63gEaT7h3zUF9vsuBdVXLVPHg",
  "key48": "34nWd1MDBeysVnSRgEmxtcPiVCDsd3mWJ31R59STSfbam3YMH79EmVFwKypFkfQrf6zQYceFUC5no82F1JfsEdav"
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
