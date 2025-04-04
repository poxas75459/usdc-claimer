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
    "4gwDaX5KGAkk1HTrB3B1VAgwDbdFVE2tjDdXTRqMKAhGbyY1Qb7z5hWr3WaSdZaW6tAiGcQ1KwSqphE2nn8fsfpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSCYc7cHcWGidtYPfwLSRXh5q9ezJuKsgVmJ1LHe9h9CDEodCNdd6VVhHr4dMnUVX2qNkkfbmCNpZ1dmhL5NX9L",
  "key1": "3ByrThimywf8LYPHogDMb5UTsiVSzWrMojuHeKJUZb5j5Sv76bMESdVhHW5pqtmWtj5vANZgmgR3tzVvTnvNaBx6",
  "key2": "5hNQcg9LNFoEvjE5tAny6U4FmBXd1nL1ocUDj9gDf7h7fUYTaHN5TNuS6z95iGUHLSFaX1ZQrPVykTM9SiZMJoyW",
  "key3": "4n5FcTZJxDaiULL66QdN9MYVVTgNMJrR5Y5Hp2v7LjkHZRhit5GQPXGCwZ4tv3UbohviNtLRoiYDiixqPtEezSkB",
  "key4": "qioagaqgvWmbAEcsK6Pqvm3cTLqqCD6ceaQ9BpeHXC8NcAQD5kxRc7Ppf4NVa6bnmJCKTLXoy5yrtsQoitwZ5Xy",
  "key5": "5e85g1Wa6BhFe3Evga49QU4S7CetUUx3zuaFNNdc6co8AEji2eXbskmi5imqKqSy1r167HD37m7QgmW4y44bbNY3",
  "key6": "2tu9eBQWsTH1eDPbZRjGzMmq3uB8Dmghucvh5wRwXU2jVAMp56YPpBNg95hCqTmoAeFdZJbP2VU53bFFP5zqidKZ",
  "key7": "3U58YeRHeWdE5VkGk28wjNP3GKjTDDDqms5PSKFFEwQ6p6Gy9Goafj6wupBtEsaqFsAGYNFu1JqLhgdiP4nzL7He",
  "key8": "4K4dNJwrmDG4DAF6PCHov4ZAHhbTSioK9xQ6jxEyq3fBzZUBfKXvBZfyCHwScGVcW4KUkbzXEPLKpisQc671TGKy",
  "key9": "wJ5hVpSu5ie85BvHnuQ4Gyp6zUnE2Y1BZ99EWU88cvWewEZv9h73mQLrRbx4WFUGe4QQM1uArtbDCUagWonW88t",
  "key10": "2vRPvbHYJZ3hiojYXfBxXLbJVwnv3uonutPS48L22teu2KD1QfeKCH1b9bXQf8eK5uYSMT8xEXYva8Qo8gbNoud7",
  "key11": "2UuFrJ7vWLzGi5u3MmNTPMziweByNuz1HPLy8Xucvkj4fmY1E2FoD7jigJ9qnFmafWqpL75xpkWpV4D5Lrajr61A",
  "key12": "2WmkHicaB5Prb4EhEe1411unfKe67dEQA5CjLKzi4VvwHyjJnHy4KrMy8XVvceVzayaESV53TiULM4HHLxsyhqSn",
  "key13": "3UuAHiy3Y3NcQ2weH2JpmjEn5NBVuqtEVaWYBSSgzU5YLtE4J76t5pbpZbfqXrujr5FwTDZAZ6npNPvPM9irw3Pr",
  "key14": "2vUmbnuM4N2gJwKQEGYqVC6NrwUbxYLoan5z2TJRFWjiC5xM5z6Z9VUwuSEVnnQXD8fa9eQQoeUf8LnpDzfiQAzi",
  "key15": "3BZkHJpAV7BiT9BB5ene4c9Ua3gLVoxwv74j9n931ipVo92QqgRsLub3YWKbFeUVqM6RAPModL8Jzv1AdBrsXgbk",
  "key16": "5bknMSPTfzdGrXoMT8LJhSi1mgeFPyLetbhbsBtEV4hhhQrqo3GdecTdcCGquLPbkMQCkCGkcsyxtzDDHKEKxcgF",
  "key17": "5SSMnH7YWAM1izzPsj1Rz2TAhTsyqUdHqHcukdmABJwuXJETJZs3PwxvFyHRmE337qAh79BiE3my3sRain4XPTBG",
  "key18": "3nEfzWFyQRwq5JYdKwEKN76yHWTMKk2sCqDPLJgwyCqcSjU4VgYU6ESvTMN9hdwTa6Ck6kf7AvdVk2ZvAdsCi36i",
  "key19": "UyjcEj3XLS7tK312KTPsFxnaBRCzmCS1FD7XS8pHyoKueZzE9dgsYDBt5uCDyhXB5iDgQbBnN2FymG1rEG5sY4V",
  "key20": "5rHvgzcqG68etwRkqqWKRhT1m3KrywXTPrvZYMmV6PUnK35Muh16YoPKYSy8Pp2MbMePGDQHHBQsRjriCAyvKZpX",
  "key21": "wCLtVFNZJHHxFq5RK7MN2RKTku4PhsFhzsd6kMZLkkagXWKS5tiShjGqCycxzN5JCgtMcUsGK1VEgNdaVXEGzhG",
  "key22": "4H8quwhiQ4WqZqXYqDaNk521TQfdVZk9vpwM87CGcHfRij9xcuwLTwugh1qGonSCMMLmWxhpKZ8wgRbJYqLNzrEQ",
  "key23": "3ZNRSEySur4VwEppvoDk6FZL8aRBkYZMcztSDQJ9eShNQJfdRZhKJm6Hi5rGi33KXhuFj9txJwjmbWaht5tToBi8",
  "key24": "2EDNf62bCzFrGjR4hyvFFKRUT3trgZxw65bPP9t4ZMDuyE5dZAmiXcnUNty918E8mAYJYpxR4hoJiQmTTipfpDqK",
  "key25": "2DxbUvDUrxCADNpbj5PMJ3wm7FdVVNsVFkqx5Ya5ZtFzbC7cfQ5CykjgdAiigzY75nEmwP3n9UX48hWA5eqvmAnZ",
  "key26": "5bubZLKdc5BunRgpfPzQfjydQfX6W4rwA1PjFzaaCVJ4S75aFd7r7K9RauVj88Uvcoid772Umz2skv9XKKQ3SBgu",
  "key27": "478eoRHGqkgy1eLnx6MYXQjYxEHKswLsUzrDCiim4SDzva6P23GDw4poohJFZxjSMoaMKaqtCwGhnBqoh5dWMN2x",
  "key28": "5YnA2VL3H2hTobw6FJrYMTMKuFeRArA84EdYNepkXgwuhjHdS6zf6W3N33p87VhZ5BYh1SvWQcHZhbNmzcGZdhhM",
  "key29": "3tQqs42J3biRMYvvahtnCd8o2DZWbWRMHWwy1ScWCV7u4a2BAbzSP6V5XUgrddDM97YaRXAcjjqqqh2w3VMqzian",
  "key30": "4YUD6VdLgrknCnrSUrqGhWbXEk5HZjvTVN88QV7dX6pMdEw7KRaJb6LUBPiFMatG8UDF2zLCLF9Q31MG9faVdKAY",
  "key31": "4J7KaedZpNMMm69pxwLDy1D2a6QT9SZCExw4FFsXHoEWxQSNFNGwMSHV158zoPjK5tBVgxRaUtmRCceLKiLLhsWT",
  "key32": "3WcdvznKnAWLTXA2X1grP2NDv7YoD5GazsE2xDQuJiU7Rnxkg1trVciaA4WVUktVxzpmE66N7TRtwHyZHRBzF4EC",
  "key33": "3JexkMvS4d9SeQgMk8RcisN7LX5vWA5X8WHRHpkx9AuKnjBdZ8ukZjh248utTjkTVSgBVeiXvBzxVtijtbdZKngt",
  "key34": "3qBth7hjfSEMf7rHbcWHsYA3Z1B1fLSWrD4hbhiqWHEypUpzufVoqwappSXNboy8DSz9Q16ysgo2jfi1NHKLmRjG",
  "key35": "3UJVMssr3J7v9j9iWjC6vYFShtG67o4QyZPCnmj33DfwhRb2YeEifKtCyz8t6KY9ik9T3Va7VULAnpE4mS28AzxH",
  "key36": "2EaviL1M2yYUfVG6FM3fQxmQ9faw8W6Zf3MD5YvqRTa44UBM5RPRBgzN3whtd1sZzF4A3cEvL2HEjqoDKb7xbzjP",
  "key37": "59gWSWQhw5D8Sjok8VDMuki6AERtUAynpNbCBiAW7hydzwiNPhmNGwsJQtscnwYErk1iJDX66rf2Q4arahDpYQrg",
  "key38": "3uhriroUAi15b2jiuT9Q2GuRPcyxk4XEs4QkJUvLK6RJtz6FZ8xARoHcxR1xgmrc8XLBBzDQn9YPM6BjnKqeCro7",
  "key39": "4xot6ogq73J28EfVptdsSLCbCPdPf7cJ4XmKcG1P4e5vjcmjkAUfCc9gREuq6DgX2uAYG2jXwQ6ET8s3GZHLzGeB",
  "key40": "4QZRmnq1Mb6ALXSHQhz8WxU7iQdP3whd6xBS78U4sEyHyNnoobuBK7PnKr3jmUkuZciF433GTi7XkmAJqadjnkpH",
  "key41": "5bhhvrsu9vQmWKesBSQpooPpPM7ggBdXhxwFFbgPzDNwSqPy6TnjFeZFbPGbWk9wGWJM7kUvkAu1wXbqdAL8g5VV",
  "key42": "2VjME1cW1Z8X49RkpUBt7MdZzLDXewd1VsgeFBGVZ5CmHS1oMxztkH3DZPeWgFZzANSgKG2H6AzCM8Tw1HivutCo",
  "key43": "53BWYxkpBQxQS4CGj214xbb6y73mXGAR513pudQGJLW4ahArCcGmGyz1sLQopHykGuY1g22bkEWuNahXwop18DrF",
  "key44": "4aBkEGH2Egk173WzmCgNkzNsSAArgsgt32B3GevmeLV6QecxW7nFBxeoKyJNyHdGHcLCQPG7cS78L4qaodSQsqHr",
  "key45": "KzDqv46bX8rdcMnLWXU4mjvk1xcaWuuYzmnavrvcS6mPbCXntG2SbSeSgF5xv9MRk3fNwFmHVWv8eS1qJNgHcfH",
  "key46": "2xvVXuby7Nd6jxMFgSRaFK9PXwjzGTLmfXkzwovCpTuNnGpryGx8NfFGbADwquTsHpEUNTFiEuoGsh9wWW7jjF7E",
  "key47": "5TPUdkAeG4rNz6EKdiGipwSRcuSV6xTPZygrGjjAWoLdeyioDHkoYH6ZR4J4Yq94KkFsYKsJHeEZZLn8SrMZXKDU"
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
