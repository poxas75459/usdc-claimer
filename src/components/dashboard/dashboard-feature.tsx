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
    "WvJftqvHzB1TDBDEQYuhYa8YVueECNTHAivASdtYNzti68b6mmPuuHnnwyz8B8vnPd6Suw6CuYjMjgG2XgZCf22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5DKELoUTWVajB6HQmyYvCwWd1abrGMb8u2hyxsEhGcUurxC7P1WNapYJ6uQtmCruBzxuW6hs1TG2nVqJ9w8Qao",
  "key1": "AfvHaFG6vyuu6kv9xyzuT9rV6ConuHyw6ZyWz9Ldgs3YXejmfGaAB9UfHji3KTkGRkxfjLQBeVGu259dVcWtkkc",
  "key2": "kTrUPWTHbHgZxy5ksKVCdg7PJEMumV5EdtVBHT3DPngvZD27v78AJAzKHEsRzLQuTXvtQFxLoxbBQm7y9kWzavX",
  "key3": "LmBJxzD34Dp54M9efNAc5w3r4uSMBjVkeAPXoa5FxES9QWR74DoD9GshPdroPaf6tdEEnDv15NG2ukXaXELgdQE",
  "key4": "cP63STNTCmq3k4nsmgT6WsHTNNrfZjPXBncPtux8K9dgvQQi82Q27qpyiNWvmqaUrZDVGo2ZNt8npaFWotJNgnM",
  "key5": "5B8o8FVVyuHyURQHR45deXaAKsm3fn9NKgzFY4xQ74mT9s2KS7Y9i9PfxNofRmyFNJAmnjgLgofy9bwGqB4u8eui",
  "key6": "2kx5MQghbr6JnNz7uQdpjNA8Nrn7TejtY5YdKJTynkstM78EmM9obqTknxMSJrtvqXXpmZjiMtdvPSMFwowG78Pk",
  "key7": "4E1x6Y6HDXpzGkTiDPvECmPq3A9F7whnLQcCzgqQNK9Sgimw821ix2xuL1rAfrC3nMDQkYoGRHJvnPqQBqgZEZjp",
  "key8": "4AN6u5SVbyZg48bLavCVAeZGcc2ucmVXwBnRAQjfnTk9gk4CZHkqz2Fn8UDhBGiDL3Fs5jBfeirfHKaC38uvHn45",
  "key9": "5G6mtdQtxthag2pSaj9Zg9Eou6kPmTAauD4wQ9cP2RNKXJahT6rwH4LBXyWRLnTLTQehSxUJkC7bXp7aax4mtvon",
  "key10": "2yhTSUiupNrsMCduTuQaKuwSBqFRr76XtK5BCxSrVszpW79Gv8cReUCUwGkBPBvZVJmFemP9qLfeizWFRKF86EGR",
  "key11": "2YZocderxcLaZuUFn9g2onzxtBpWo4ug5FV6nH6bTHbSmYmc8Xq1WBi7irt7CNGxbg7JZD2tj9c5akteA1PGjSbj",
  "key12": "FiahXzToDwsp3nDhbRseu7hT2PEfrwTn9pJGM19QQof3icQ8jBsSYLFeD4719QUWsYCWs5j5DgkwDbA7EpPqqkC",
  "key13": "2j7nvGDinFgcoTi3JF36d2DgStfpQA7q9nw7gGrTidCuGiMZkFHibmAtNoo1cXqKbKaq5rwRfN8tn4KiMjSWjfz9",
  "key14": "JbaNwYVePQqzvZTp7QABQaCaQP8caT7yeaWwHAgryeGeApyF1ACa4AgGCnTFh2JJtgXiHfSta98ShPsf3SPABJf",
  "key15": "4kZ8tBu5vUaY6gwYRuYv8xZGs5YEQAXEcqn5uoQ3a1NHCMCJdj19BAVe26Ha4PiqXYkQkwm6HhBGaofqijo7b7eV",
  "key16": "3b9RND5mw4tkGy6EfXBvqXms6ZhnQ1azNVy2ymywnD1jECmTYbPWKENQPjMCGLjYEGiQQqEgoNr4tUyWzW9FzDHm",
  "key17": "3xBwq7QfVmNfEGM3F3Duk4VKLvrEvpmHyj5djK3ijvrCpoNEpBdfc45V9ySNdyAgdC11UPVc7tcxxyTKVkovZw5q",
  "key18": "HBYjoNb9a3NkaaGTs24ZkzJsoXHB15idPpBa8A5vujYKp6HvUWYTuZ8rrgHtCXoEuHdoxqgZNujRiyQNXDzs9z3",
  "key19": "65EP5UawFiwoGqeQBAapygqeRcpQqhbyFsJDvMx7ZfeX97odsTauhEjHXRrXF62ue9KgqcKVibGKQUEF8KsTXV7N",
  "key20": "4pegJgXWSq2poco9FhuPgPXXig72Lf8H14KLLwCoyZUxV12Lb6ejrxJ7ov1bZMFmsmZZmfB2teefq2oyTLKHVhQE",
  "key21": "5BKGuSo9mTzvxaskBT3nDjnBNoXpqfCAwKVVk11kR7iN86AYLiAa1gxYkpA8PcyznPExEdVWRxvF88Yx7Gx672aR",
  "key22": "4GHFUmWeZn3u694kfwFqzGFE9VqF7c1mwEpPpRwDBTdVtssi3W5Hnq9pKgLPaxMSrn7kLRadDxSRRUh9TJkXeGJn",
  "key23": "rqpAzHuXmLvh6pokvj56xWcRwq5Nc3fSeYtxg6LAB8uQ4UVBtNhGSNg4R9eWbhqJgmRd96jQSNuiX4mLehdt5if",
  "key24": "VWk8ebQeiT4rvetib5qu5nC4HqJVbEpHHDy4USo6r4uMw2nN6yjhn3cAZbnhX1uABohah7UGx5Z5CUTgHeQGEbN",
  "key25": "7MmabeAjXW2U8NzH99tS9dJaHoVop7zYUDNAtCzCDb589sJWSTzVArWf4b3QUnmb4UWmuGV6kU4oNpNEpdMpzV6",
  "key26": "5ipxK1585EUEibhZujGT7LZLfYn4LzgR14RzvukG95rPT52VzYdzRhHtyHooJmhv7xc4pVi9aB4Nvdw8UyFX32U9",
  "key27": "41ySNKYAJZa5va6wYMGB7xhpiUi73a2XauMh6Mmp3MqN9yRwKpGNWTvHrnkFtAJgjmjf1P2EkVPzVmhUyboyUR1S",
  "key28": "5kaBt3NG8wTnuvkJaT16aZV91zQMt4YGUKdUBhgkDEnZvxStx4fFa4yfDhsfgvmuQHLgajZeTkbaGd8rsDKpAo9J",
  "key29": "2XZRhS9bMPbeV7DkMkud7y1jxD8Zv4GGfDXeWdj2o5ufBMA1w5sE4wczBRvC6FHJWQVGRVMfsXFZtvDHejFNZGDp",
  "key30": "4qz3m9GgLwNYV1sUnCKG2LW5M928zPSGoMGY5wdHgRzyPPCyH4Rvb4WUhZdiabHYEw2vRp3qoHUCVpb9uMkazcPL",
  "key31": "3zfJ9KPzKd6jTsPL43mByWYgzy9FzxDnzLu42ta8hKtZMvGYgJVh8iYmUWfbwtaWS5AJChckYU4iSDwnXVXHmnzE",
  "key32": "Yu9ynXArNAJyE1TB3Zwrw84pkFSLxDLoSsKAMNi5szuvENUnDuBvzz2qvQddar5tkoSgzpfCkxcuE2r5qvEnYim",
  "key33": "3r9D6DKqo26KWinG2S8B9UXYvBQ37W26DcMXzL7zFhGNfkyWuUMSnw8mUQxAD5ZfPeVdUv1hGLBw695NjcF81Vre"
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
