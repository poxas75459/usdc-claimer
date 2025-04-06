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
    "4pUihqiQoNZ6avTHGJJKzKRDsKng8XcKqiC7VipU4Ak2drbcSAkCZNZWEYHKJuVR7uwjFv2HpY3ogrkXEd4avbAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovDYqQfjw6fULJVnsD4t6ubDabZybg7YkC4KvW1jngD4X1mLXtZFwZk9wPZ9jT7aqsACZ3U7pyhMSVWnM6fTP78",
  "key1": "PGY7BUWjHa75FxyXmYVkkD1iuJgorAeVVnoR8kQZjtewyipZR5h7YaiVXDmEWXysFg8biYR77Lmnbm7WNHtZzxq",
  "key2": "4565EzNYx5XchUyw43wPaY5SKx7Cw4zQcT7YF59dZr9Bq44sbWbCzGApwHoc96TirBXqwHkvjiMnd5uYn4c6mM5q",
  "key3": "5AVd35ekhSgPcSXtBGE338A8aB2vaJmTYXVx8LCvzGzaJbvLD9Z4Xk7G4ZNScFjVVh2aGLiMEy3KAPFMCPTi4LtN",
  "key4": "5DditQo5Xk7zATcz6QETkhP4WVfRB3YikwKcuLuLzYagxwvKbdkKS6oHGjqsaPx8KDpKXY4koYjFgV5DhwYXz6nP",
  "key5": "4BiocURh4fXAJfTH7hiTVYvpcd7wEZcWj5KhJHmfqLrWsnS2LsnTXxd97VSqKRuBn3AkA9CxEcyM2RFsDTXe3q3i",
  "key6": "p7iqJL6qFGUPs1vHkVhutagurFWzvT6XMDduvtqkRVPKpZooLBNnq9SoABp7VxWEkFp1XuLwPD9pTm5LMkW9voj",
  "key7": "2qZWjMedt7yVSQH8ua17nUzdcApQk5HxvGTfqw827fcirWv14rbuaPVhC5ZxTKHNNBbwJzbhxJyaZYD11KGy3RBx",
  "key8": "4EooxYQAbzLRTKv51wwZ5KvA2h8jGaHANVjtcCeq1xPckorUh2jyeEdtu4wWUm2PyAoMSx6JwWtENEZ7GV5J7NRp",
  "key9": "4A7CCM3isLHqarRYnfoUNJ5ARshk3YSXorbuN5CBDndbyKJ8c3JEqGBoyT7pD9KHsFrXSa3WepJ1jDZmcjd9TjBc",
  "key10": "56fZP1mHCeoCogKCxbhRefZgPPbTENYWHFLz4qBJBjJWHDQ86MrpSMsaPHTMGMhtkriyyrUsvBTbkLXDfm2Jm1MS",
  "key11": "iqzQtskKK442yx45m9Eyyg2WBM7ZMfJ4eNFmhoB3itYZrWLTqL7R7MvPPbSiZvZgM3tKozKNLGSWNuhxcX2p1mr",
  "key12": "3BX2Jv721qLa9yiBmWhLqW2wLhhkVfDv9eGWhsYz5iwNiwLgMTbp9QTX3vUJvJr8vExTGuzcqf4u2PFDt8qN51gx",
  "key13": "3xsDu5qTJ16ssxxLbaUs74vx9JXoPckga6yuaUa6eqi4LP2fjcbFzhpTKLHx6V2weyFSoJjhw7dMsNgG8PEuTZGz",
  "key14": "4454nGsr7aUeFGgaKe2XM7F6kfGFAr6R2KhuPZf6CuKsxhE9aCRTqwq21T5zue648gjD7sTK1bWVw3BPxhEzuU9m",
  "key15": "2NwqibR1CbTNTYXmcpwNPwrQRZo5idvkpfaGc5JgxNjYHuv12cXmX9f8kQdTBLdzwAT3aig7X1P2nwD9KQpJZjRZ",
  "key16": "87ZXRd7x3nbchCNoWfSf9ddR2cd2BtqirpuZ2DXYbaMycJAJsQodKPxh4CR2hzyN9ftkw5gCTiCBJCKv3nz4pkp",
  "key17": "3vzHG4fjgZwq1yDDfTaPGTARScN6McsjgM3njquJmC9Ba6GQq1Sh8PQu3Fn5zWnHmYsGgZ1wszn5bBT6zK4XJeQQ",
  "key18": "2H8Sy5sfMsXrVdLdMepghHcFdVXjTo1xLRHeDMtSYr284cFA3HfFMucYxy9ZNZ8WnTzyUDpA8aEQwh99MqHSUAow",
  "key19": "Ds5HuPD8p6L4mMFaECNx3cVWVovfas5KvsPFQKSYfTwJJefEZvBkfP7PAAx1QNhPGW8jArJdNU8CKG8EdYgdehH",
  "key20": "5KYfd9dGUcQxBSHHxf6KAeeSURVUF9ZrrDW7zHHfxgW8FGtP6BxZgnqRZURBTGDMhYggCADtRC1VpCzfrArRRn62",
  "key21": "J9wDmoTXKUHxS2z1m8auS8mhUSrzDwsLWsshScWjLdgNjLLHu4sBhPKHMAUwDxu3tQuE87xdkBcLGaNfYHuV13S",
  "key22": "h58F6hGXDemWVHbFs8NEbsqdkXWfoNKqT8wiZMq3wtxLGQ2iDutR9pgNx3ahKNz6TpJ9mfLLksrZ67YPqtJ8oh8",
  "key23": "nd6yF8mUc6fuEEdzn2GPFDgeJpYYNgaEzf2PRadekKAfn8kqNLpXzSJZHrx8WFsfkAxFVrLNAQruVwga4SeqTSF",
  "key24": "dPjyrVAJngizqc95Rze6CQ7iBcsN6NXTV67KcAGy5kXW1E1AP6MB9MZXAr5EZUuNBbznfXzETQKM887zmdWhj5d",
  "key25": "3LzvHLcPyixmAFMR1vTCcSmBC3NjFPrgtBumRRvb7sHZjHLbkRMW8CbHLhStPfs5nw4K8Gmc9mM1GgemKkZm4fQb",
  "key26": "48WGgWAqJZ8TnzdVrM1zhHwQ3k5ygq6a2UULbGMTu2uurW5vvR8MdmceS8BcM9LxUwX838LH6qoxg9mWZPkrfkEu",
  "key27": "5PbrfhWKsQyodCevqDE5uxeDZz3LUFVbxPnWfhA6jB2GhmLpcAShyrj5LEMNNF4eEpWSLmyqfp1SYrzSF5GFbdrF",
  "key28": "u4DwxHgKZQmtWy31sSpeUDFd7Vj4uhLWQg7Q7d4AR4rJhpRtshRWx2hghW5iE2L3UGgDo7AdhzvP2grPzjCBefN",
  "key29": "5W8s8E5x44wNQonPQ1uDXfC8FfwKPrvFytQw9WuDybeyDYmAPg6pQ13T4B4UXw6JWvzzi5BmpMEh3RfWCykCw8o6",
  "key30": "4JeKYbDBspxNE3ucfFrcCd6u7Hi4D4GGB49KaFGF5h71uL2ekVjTk8ErU5RAp62S8Gq1Z73a12tWtptgY4BuFfKM",
  "key31": "aF77RwXoSbZyBDQusRxEpHeZPTbATggCGn17GseHsv6ufeW51vHgdKmvT3hqhMR5usVKYma7HacQamXUvGSupbA",
  "key32": "2McPMzNGZgek2pVShMCRtjnmyVjaLAFFSiMbKAu7xWywqd3rpp4K5wkh5zyeQfBLrfiPvda55hrc4DN43tvpvW7i",
  "key33": "4Apy7U1Hzc2tzx5j3FAQnou2FaXuwJF35pYBjxsMtZfs842wxMhYRLVJNh8XNc79U9NBs2MhfVdK5y3bpeHvVvEg",
  "key34": "3rekFX8bksG15t8qGtfFjNG4JctiVJUYwVFPdwK43Ja28VJNVsbjBERvB1iULdzs3iMjnykWiXkVbHZcbzrp8ART",
  "key35": "66MPEoULsNZedvjCFMmo4tg1HJ6ehgir4ZzaANq8UhcDK5GnCx9Jwq3VDB8pD8gbm2JikKFvHRdajYrZxftftphf",
  "key36": "5rWPKQNt7sr7N91CBScrE5Za8bPbghHmt2k4jdfGEyYaKqXJbdeGgPApowxnxg3TsEC7mRgPKUhSxmzm2odUseQT",
  "key37": "2YukywXwWFpDbnLiC1CjcgLYx4nHgc4ErwbwQGbxCGshUew7UG9PZVrWSBNdA77ZKTGg6vqiurSQNtDyDD1hX2YA",
  "key38": "7yyckEnS15wek7DamMEQyueHtYZTkJ9vmqtpiMnkNNqARyYF69MC4zsN6fPDkjaz6k6rDTs2zYKy3a69xx2iVTm",
  "key39": "4rfmiSnp14iNazxvpMhCJmbwR65ebAPqmX9cztPP47LRtBdcuzE69JZYwkiy3h9z3P9QJHaJZQmdB9d8wZcAFeu7",
  "key40": "JUFq2a9JJMkzQrbPiEELzXRoansZhmpi5AtE2x2kyz65HbsrDbhrXnSCpZ75rHabSCmQxpAvcLnUZ7YoR6DWJS3",
  "key41": "129c67G4KRF4WgMeUiP4sNCCkdZYudaqAqi5pCVfyVKk7yKE6E1iF9zuCG8y6mWuLQot4b8qEtQayJjrQNJfQUbM",
  "key42": "3ntQk9qrkE18nvF4VdXjdsktp9NhZEhdewqNHwZ7sVDHdLKQxdxiWC5a9oEsf5VMho84RAu2y88WmxjM49NfWRz",
  "key43": "2QpHurqtFQ22yqJ6vvdUo49V1CUR5iYeB6jyWzRibfwZftJdMdxLDDQSsQCaznrENzzz66uoJfAv6NFbWXWxc76t",
  "key44": "USztn859fVz1ec3JuKfsd7uHDgt9KR4yMCzk7JSZpXnLATZ1tqCnHfV25TqtuNRyH4qaNEJzFHV7pmYwu4NLS3A",
  "key45": "2vxRLVyKeT5diVkrz9SRpEwQBAEmNvg6GBoRct5vh9vsFGbzQoN42VvoPSeBPGXxRjiZuqazX4EB9MFNy3xfKpyL",
  "key46": "5FKq8yDCUHquoUkUGNcQESq3j5vLaFGwgXHR2GZG4pgjD1NLjsu7ZNRxphMfTypjQF9fSKJr32atxLpBar3PJuF3",
  "key47": "5WWk7e3nB8aa8ML76bHL5gEAm5EZyMABbhPsieNTmzgwVbxoAkdjzqdf8zunGJ9nKcHYapFvsZSTdZ2xJFoGCGDD",
  "key48": "3dA6meH1teKJukf4wBSzf2rNhNB6EgJwLHrTKYTkhvFhaWQRnxEsoGGYvp4BJN67zxZG4u6pVP9DK6XQcqbwrRZe"
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
