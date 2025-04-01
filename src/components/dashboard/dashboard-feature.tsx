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
    "3gaUeFJKTEepxX7D6Nm9BuJ4XYLVui1YBjnC5zAwZUNSLaQ6Bda1C7o3MdyLbWm1Naz6md72v7wqAia173BQqvNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAufhG4dMzweGH4BbSP6ixtHjZvDsNTdzvN5MZwNpYmWymfDaVWhEAzxu4qhwp97CgF46rghpyc2Tz4ZKCGMty",
  "key1": "4q5zeyGgGfLCFsvqZKQU9LuaQ7yB99BRJ8ttuxVS9WGzCVeb4BEJuHy3CSskZKmoy3hanqUkH7BEwMy3QkavaJHL",
  "key2": "2b7NrDvcTAZwS1WQzaoLZyoV4mRNXqzsNnX323d8oabVKs7KuNvBg8kHba3fiGGtEaYEULCJKgM7KGACCmjmVofa",
  "key3": "5ijDUpnLrpfCkWnkHVitPLN7DmpPpC3c349dcbqaPtJ1jmifS9GEvaE7upt2gWgg8f8Mn31849baMLuMJqSxsyJE",
  "key4": "2E8TXaQD3yGNtfrWqus489qgcDBjge6xqkSoYD1wz8Sh9EyuhqYgsTNQfLcgozCq1FtSEfHQJWfFdvCT9exf84Xi",
  "key5": "5f5kjWQJs29BHtXYZkajT5myaYBVgN2hR8fQZkipDAvVATzqpXArVUz1pjhKzP1k9wwuFXZy4cVssH5zgDzM4VH7",
  "key6": "3XWiYUrbAaB9MxLpFaX3LUhi1TWbgaa2EFJaysqKH36ekwSAmDoahkCU42kavoTFhPphRoELDytczA41gqLXdnSv",
  "key7": "gDx1wiZLmA1sH8ykW744xKdesuypLYQoLV1MSvnj1SuPLht2o6ApZgRq9zvUfwBaJaR9ZxJT1mXTFKFVtDe6KCa",
  "key8": "tqEY1TKmRyzw3d9ZQNUqQ9XL9tq4vGQKadQpDjAikbJ1sABs34tX9sUXTRbrR5acmJRFh5FxgdsevXK6CXaQhjR",
  "key9": "4vteM8VLMzBXFEjCkhYBZd6tRVp2ggQj1PLbt56XPY174TQCwS7Hp2BCR6W7xPxnmSnee1Nonbw7x38RnpLHeECz",
  "key10": "55DS3c8uWmAK5cGjSVMBscNohVU4cQdYwvtMEJoNey1EbtnHQ4p2fSpiQkivWtc2e5x1h5RoJ47jRq9ifFSzfwa9",
  "key11": "kR322yoUVN8KfXr7T5MzXRmn5bGx2QU2S8WRdvDbbA35sXYhZtBmaf288y6cJ45RiXW3iHtE3ftx7tukd2g3djy",
  "key12": "4yMm4m8TfE5yz49apG4XFVq2cL5nxYtXfwMfN5yAZ1cUjC3Zjz8mBgwhrLcf7cTNEC3S68Vj4TD9srL7u7vfe5Ai",
  "key13": "22oJRJ5moRwgWx27m6zBmj7gz76NEJtCcnCuGRfmXZ6oKJb7xBtgCc2g9BbgvML4BAP9JAcsKrfhiDn3B5Fv2H6k",
  "key14": "nutkSxWnPsnrH7MsLJkoTo1HyDtdngDUqpEEy2JZgbyVXisxdLTMERS9iqNA39jsroGNR95XPohWKMutDnUeKHC",
  "key15": "u6oUGs7g1JYWon7td8zWPMuksNASUaaNN2RVU5aYwPVLKB3cf1Y21ydgfFGC9rhbjZykiCHFRCZFNjYwgth9Tzz",
  "key16": "2JqjVdR4HDnbxnAPeoar1y41GWBpZwEbNTRy1omuqgN8f1dDLvvm3W5n1Gk8u7QhfVt3fi8PTUdAbVBvxFT93VwC",
  "key17": "46xWU6J8MoM7eyKjrKLz93cSygbf42ttsJQSggSNyuQqyL96nEuGtYkpUPVLSN1i5EotMDD2683FnMow94nXzKCC",
  "key18": "2Rb47SjVyZ38oNehTqiapjUstaas6UKmDby5HwcBzEyiGtdGQVxTiHjyS4KyhQefMsve5yuf1KTQpQwiEAGCrf2C",
  "key19": "3RorjXhQuKtGpbibE2KquhC74kxYgL2A6LchCoDpt3oYuaPXdzRQxeRMXrFHVK8YgupdrBwnGWgGW15SadKKfpi5",
  "key20": "5JDdt6D2pHDJ992CugsD3sddogoLbdD3NBVm3NAJduc6pmoLwiXrSP9VP5fJssn13CZ3Wn3nxXupcJAaB2WGgnrY",
  "key21": "2QNwh5XpSGGXQkzHrvuqMJmwyoSYVzNjscn1F6HmruYDwTCPcMmZKnDmzxjE1xXkTEdKrvcrJmt5mmhjfZPgeb9",
  "key22": "4DWPTZEPCybVz3Z4Vrb93qdmCXz2jyrpVwunm7w8XvyKiyfukw6JoeUbXg9XDm6EXfABRy96sCydBTNxNCi6Sx9B",
  "key23": "Qf94DJy2iR6EV1hh4p62EyD32nWk7pyWbvhyEhLxdYM54kAxnv117AiXAnkkK8gjABvun5GiWpo8gX43n4WE52m",
  "key24": "2pcavVPS4e3ReD5NkeEYxu6xsKwyf7yjmRMf4AKLFq37N6g63kWhdA9DZka53ZGGiMdNPziXeXEHN2P79VJzQ4q3",
  "key25": "jP7EDkod3EzfjfYA7qE6eYfD448c1msYpaXb6p2dV4Bp7pJxaPo9JCxWX2XngNKHDrTGko2Y88qMDg6wciFRevj",
  "key26": "3bLALsFY4bHqQPFZZBiAbQwieb6hRNEaWDKjteFj65GSCcNoFixVvgw7S1Jiw6gxWpLgry9QCTmtLqg9eRWoAAWe",
  "key27": "67YtHF2j1itbLeJbhbRQn8oGDw8ZUyNitnC6bcbo4xmoJEJJde18UmQjcVXhJyijYh6rnoos1wazxfNFMC8t6fxw",
  "key28": "272QFWSTUuexLE6tSKou3CTuNnJD6gXaPVaXrCN2Bq6hSNHsPwhSdgdiwuggsFNGzhW864gk9YH6FZa5fgcqkRZk",
  "key29": "4Kp8cYSXtpTNocyJcnW637orCcYNTBeXz8sENB2QJypoPQayNtmitx8uRQdeaTScaemwJCZZAPnEbAk9Ld4SXU83",
  "key30": "3NNAdrEjbtP7A6RYaJqY6Qex6XpsNFUbPNuFDf9erV2nXigD5NTn7wyHmEEBEwrMYaEYAeTyaF9N7FToSXgacc5e",
  "key31": "4PVMxrKijKSzncQ7AEVANRV2MGbYXzEJZYWgK3fHM5wTPk3riCjsozz14HLbTX8XGLZ4ya5iYzWF8hjqX8i3o8sM",
  "key32": "5pg25RnrHg2XukAjWVr364Mz73t1tPEHorXsiDcBfgbYxb3nvyAeUAtAj9gGrSuyKw1tsk2ed4J9xbk23UEgAza8",
  "key33": "DDF5fjRCjKL1Y5DhprJBzMQKsas7HaCscxUj53UKGNWRForWSQFbKFvJvHgEa1f2dodAMq4Kp3n6fjeYqowQc3Z",
  "key34": "2Yj9onqmL6KbxsF6McwPEP7WqjViKXYZeYQVoMHHEUvtuAQRzXWjQR1jTC2CxVfBhPo7qiwuyAR6Z9gbBhtymzm8",
  "key35": "31hX22Q2FuNb81X9cvsT74VKExUHpcbm3tne1xGCCjSBA22vF4nPk428kBBYdizvWx563zvWGpnP4Fvk3gLYi61q",
  "key36": "3BXHCxuWzCb4vvvHxXnM3JGQHwGP3pTDnTkKxoAjyHMauJp25AvsiJF9nL2acLr5kxJxGWfqMoR657K8puzVjvyW",
  "key37": "4LLGCXnke6J35EcgDdGZ44ZyDSP32xqSQY5QoS6VAX1Em3ZdncpW1bPrmd4dkCVhkzbbFPeK97FeWAxdEL5uEVKc",
  "key38": "5vaDQf7yhQtqG7BqJmEMYgWW6PuokgXmiTRZpRU1Agb1MwYnArcnrbYcZ5txgkgBDUiiBdvwzoLnHyYtJ3vd7tuX",
  "key39": "3iRs2BnQXd4kyLXRwupXk6zTTw34WFzrY3UzpucSWR5JiJEALktXPLJZqcT8KKfuchwL2f2HE7ZwyUzs9SwfBDjC",
  "key40": "v8WDQuce9WTZ3iiC98QWbNCoCe2d93KZ95WvJFpZ1K8DZ6XgzqfLVtQJUGsBWao5XKB4ptq5doWQKUKErUFJL2s"
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
