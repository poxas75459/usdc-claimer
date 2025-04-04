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
    "5SYjikNex6BrcypwDQCdMhrq9gp85Y4q7T4hPAcgjQAguD3PWpNxL6aveBT654BuKGWQtXbaBjnRHAEQSJu1HaDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmkTnSdQJUheJv9Wj35RYHDgJudPWSUo7qznibHbxA1SuQNBtSzn5MLHHT7YwTZb1wH1baLX2Ba8Xjbm1JrZLPt",
  "key1": "48QuUt7Spadv7W2yiPHq7xRLbZnwqaAZpy47KFXYsr3NWBZLSoeW6BQQd5941i491qTLCWhQcp8QXUzeACfj7P1P",
  "key2": "4mp8KA4mWWAEE25mnicNx5BGkTFmiG94EZ2s8rPdmpBB64Futxf4fe6Wp5miKZXEYVZu8DLWLqsGCY6Cx7GvUiqH",
  "key3": "56Y8Ny6Jx7S2XSw9Rmk1odkzwfpLh48aDncETqUJdpqgMsjdAT7pxuC6m5Qdg2Vzs9KkAHiRxamvF2AJZGAWW1bf",
  "key4": "5bwFjUGECVnDdbXBpCs4zdVKJYLQCFwc7RJo7sHiw7trf1iBYFzX2t7K2cbPqwuvBSo1s2agGbRUDizkfy3qmXPN",
  "key5": "3DdoKqbZA3w5PmPxb1qWbJhkfgfX98hSCS7qA9M2a6Pe9zT3FkrU3rvRPkE39TdDFvCu8hFkQkRnrpZU4tBvEJ4U",
  "key6": "2qdHwmcCLy21K1t3AWAnh9M3C2KWRNiYvLD3aGMBVne2i8zUDL7RdsBKBEkRVV3QyrTv2HQ9qgMYLfxxs8BU8qq3",
  "key7": "4fdbe2tRbqyzzeh4iRc9uRMSKGSBPhZ8uHwKHNnRk7JEF5rZeEeKYXKf2sz2d9VVMgVpZNhw9sdNgtcEBHgUroBa",
  "key8": "4pELb8DpWWfp156oxWCZLHQMQVDi98hdrtM7gEtjKumoT9QVbwsNeHijiFRp6ASXaisg6TdpaqMmd3PWiZXYHm7E",
  "key9": "5sTdEdrPcgEx1t4MCyx2oPRjiLbAmGhwYzatjQPcxC37jqmf6F7Pfh5iVumXqnQa2vfJc7BJZjimL8ASUJtqGG9J",
  "key10": "4Hba3oKouDGLBe3Dp6ccRgJpdQNVnzAi44jdr9HtUrbdXsgbc3Fzk2uyDWsnkdcafbvELcWzXBBw5JbsmQbRzeP9",
  "key11": "2hEKQ3ksCzoHxHyPEdu5bDsJs7AamTU1Tr44YEvcYMjLweTucCdaLRhDkUFgUmk4W59bDGnvSN1sDJVjwBvqPjeL",
  "key12": "4nwixKcHnXjuRxDxi97tEy9VQGGiymhzsV5g5jxGYgBrpYdai7TqfNkmqr1ra8WVc4q4VXTLzZ6Fw1KY53rd3jfy",
  "key13": "4dfwieKKens88Yi1NeStC8J1Diwtfus9dQ5DhjZ5t5oFCcJoivwfH612Uya3uKgtL65tbfzWnTXDv24EJgeNQpqv",
  "key14": "3DWRSTAPXLFUHXbCzBEBBZsqFpwDJCL4TNWZKVatSHhA8SUn4utxrhFQLT1aRY69d5W9tiXxXEohJh6nTjMXrmEc",
  "key15": "jQemaZRSKYrYAUgwLqp927GFyqwMkDsY2jShXNxUuBhtDvA46NpgNUVPWrohkNkDMHofXn3viTNpSCLgLr4Eo89",
  "key16": "2pb2SwRccJmnEBpUUqeh8pqs8DRHCF3g5SZN99EKcBSsYWutzVH8A3JmTw6dzam1SZmYA5ZaGCauqVk8UQyGVdRS",
  "key17": "i8voS4uMiCwLv8EjHdkgmg18gzvipiWvvoh8GSz7TZ9FbczXuMGXULspmak2biz1u7GP9T6PPzY7Yp9A2JiSxsd",
  "key18": "3FgCzfykdBG31Bi5CBHkSVFArFVFtN2yX3b8z8NS24QXEWZqWSdnfqPJcKnVRu75seva1HQ3ZgFd47cMKofz4f8T",
  "key19": "4qdC1xvqL6W4pHygHK3z4whok6CfmEFHTanSsM9dkaNAL89RQJHGhyKzm7jw48qk3yB46uEL7rp69X3PiP2DQ3Sn",
  "key20": "4xTxJ2V5tMadWzerDJUPzjpGk74NA96zXMRwJsdhjyDWqaqqwyu75mhYEMys8WrtsHPPUKJ2YMTLCy6KnZT4xmxM",
  "key21": "2MVaTxMW8H9SDP2XcTskjjiQXv8SDo2mrNhT98wwjaFu1nafqbxL8gXCFMnXZHg2Tp47P3Qmfw9UV98T2G2cWSm8",
  "key22": "4R8qfC6w2KqH1MW18QxjDoMMdnSTjspt7LiNBLjJpWBX2cFeJa5JgEBPajhNXrgAJGKfbaSHkxZjwxicGbkGpfpj",
  "key23": "hTDJSwozR4zq6w6g1Dcf8ANR9pd2Cb9HRR2UCFUW6urJxdKnrKr3Uwsma4QWL4ADsTz3kprohUzvFmyS1mkVxqT",
  "key24": "3mJWASuqUgoXej2dXAnjTcw1bLDd5arzYrvHSPQKsfzTE8fF3hPtbHie3zAybnNJE9wGfm5wxvS6ZN9EyDR59YN9",
  "key25": "5zU6s36s5EEN3QVYpGaq1P2nf1qpEK3H9dYoxsJfgF1RGjYeHrisaFodieoKFoF95Lvr2vyCqbXeUyEaR5dQSp9Y",
  "key26": "FMN7wBatZLbVGV5GWfb8NTUhVdkR39Af5jMc5gAw37nRi1gDR1ypWYipKwiyDTHjTvd9i52Usyq5oRfVB29bxQg",
  "key27": "ErmU5E9yaKfuNiQrUFGg2xm9Nww4hJP7pBBYEwQymrPN6BmpP5xfxdtj8gJCFDQLhEH5mLSrGm7Wwz7zvim4NUY",
  "key28": "3tMX2rx9CQR695Z66oi27gQSjyd2grjqrfDs7UnGqf5nK4MToLL3mxr6Uy4fJazbdFyPgmAQyZEzBqXatJL9VM7o",
  "key29": "5yjtEbcUCvSmP7VMhenujGG7BxPMqhnNSKj19SPdXp2fhoDcUzdsrToMz2xkZf3vkEzgTGKqen1TceoZRqdJkB2N",
  "key30": "3RxVY26dVaWGKtGPBbBFvgeELj87D9qzb2KByDUGSyQLZikxzoSxPd5NQB4HPD9NxfjEnTY7hinQDxPvtPpQJqTb",
  "key31": "4UkBSEDdn9fzq7icAcCH6Tb4CTZ9o1rg6w6BZUc59jFxPCk1z1S7cXDHzEpg1pTJnGRBYoJTC5YKLxryUQv91bb2",
  "key32": "3yziuXsNwqTyavXyJKH7yn31BoT66iGuatEEQxLsw1wiRtAEZSZ9fNeFWxEiqw9sEQSrCEVMErPgQP87EREAEVsN",
  "key33": "3ZxERV5SCT9RM6ikdVqqbgmuUWBzQhF9A5STYQ6fYiVkq9HDDaux6apYc1Ed44LKpB624StwAkMBBgCkcSEYEQjH",
  "key34": "4iRubPuW5gDKc4JzkmUSoQMzmx8EBxdqHgqvAK6635vHMkWLsZE1TDdZQ1EehW5mEUS8pk1ETBHLyymDpJF36UpZ",
  "key35": "54Hg4mVg6nrZF1YqjwZZUr5YfjDLX1RrpYbSth3FPuWFLaYxN8bHrFpjrv8Q3fztVXWVewoVKruEfxx47xXoA92b",
  "key36": "3634SSGMjhCUYnmyx6q482N4wbGLmekf8kehQdYTjhwKGRMhF4ykgh4ntw4Qk2inudRX8ANMkidLohN2J8a1Fk5V",
  "key37": "3ekwEMYU3ikpCpKRGYtZrCdq2aLXjRY2sr5NdaPtGo3jVRTMfiE2C5SJFbZUSPMWwHqWq3vx8kxrUFKT8tj86XCL",
  "key38": "344xsr5HrwLgeA4JesoZ6FTkj92maHW8iA4aadw5PpfX1wuKLY5PjHKXc2mYhxd7ndApGgWw76pAciLgUDiWEKnk",
  "key39": "41okjs2nEuwiGkufJZMaCpS5HpEZxrv5kXd61nNvgifwG2bJrdm9GjgTBCTs1ejiv7XdiaEnuPVuKtLKpFFPwb99",
  "key40": "k7uQQ11JU1E1B2gjz4kTJu28NRiukazFKZZTgBu2yyrHc6HZF5HUzeMEGJVFJ82g5b7RMXnmGNzoy5JUdNCcF5g",
  "key41": "5nFkjLhxf1HUDozGoz1gEJL2JikUMXM1Hf4w9ExAgBHPeFL4FVFvgGhyJWUtKKH4xwuMPjpB4RKii2YWNmV3EbS4",
  "key42": "5SqJBGNhiLALhHcESaA3XPma1EqM5k2NaWYySijCMiSZMGGeuPucTMevxGokb4nQRToLhkp1xSUcgBsEUnhNQDNU",
  "key43": "rDktk7tfJ3ABqp6SDmJxhVpdbr8okbPc9aYdKf7Bw874XsYW6khichmXEcp3hzEL55xN8zYLSSpRsvbnFV7MmqH",
  "key44": "aNeeEpNP6arjbXXBgiJhC35uC4doUCBx2dpVm2H5A2bscKYdj7PMqFT1Ca4CywMxTXru3JeJWrhk7x8RRD6URFP"
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
