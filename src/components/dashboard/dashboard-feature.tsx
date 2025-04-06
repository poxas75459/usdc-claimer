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
    "PLJhqcSFsGtNoyLb3VEWePuKsUCuemcYiNNah2ikXtffahjxyS6vrcGFUtVfK2ou1J3RQHkxiRxL3SvSsWHU4j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dJqVZKuD3WU183uVvxHUqhhzyp6fTeU9kr4BfUt8QRERiRkccNqhHy4eFbphG8B6AWoKUoj3SsgyUSR4dto7vxY",
  "key1": "4zKLvA5zhvsz37F6S6s8cgAtbdr3Yf2SMp1QqTmxQTFprWhMf6m3b963pNotskBXLoyAfv9tkVk1aMgUCdyRC3sT",
  "key2": "2mcHQ4dBu33hEmyySTTZrWbpF1dkw7SXP1mscK6d8rqjoeH3ea4YcCx1hmBApfN7Yho7azpWmg7D2MB2QamtLwJT",
  "key3": "3KfQAVrCFtY3HULHd6npKPkxvdtH4nok4zCvcrokFzLz1Nq7naNMEFSaB7DyxCh8egQKh4erYuRvudtFL9YBV221",
  "key4": "pN4MxSipegzZMXNNh5P4srZC7XUEGAiBPPudQgnAt7VixN6mty9Y8XqPaKoJdiWVkoM3m9FTTeUPvFByVT8Lghb",
  "key5": "5AvNZw99g4XBmmsqWKqjgrEfgbGPyDQadANapDsa91TRh4b5cpqpP3b1KspXvCDcfNjF22DaWdkUSJj4QYMFkVUf",
  "key6": "44fzxNjLgJTS4jbcBcJYBmLyEeEybMgLZCsy6RKrdCYgsKSjZWgf3vkzJkjBCy7BR8zFtjkxGGB54qGXo6LTYF9j",
  "key7": "5m9V4LpYnZa3UHZGTvq8X6zfMWc45Kyga9CQANEnFUamQe363xtk3ms7xBQSkyU7ZAR7tVkJ2iuchWq9zqfNJHZ",
  "key8": "3NEbD8k8BW6q3z4MPYfPD2Fb8MwtZgS7NqZNEitKkfex5bLDEV7crxuuduDaedM93tHS8STWhA4QSDx2bhDhKqgN",
  "key9": "2foghMSkqmieqbxNh1KZ9ea7oBAvEd66xeQ7X1maYaqjr8y2WDHytt2JkQur2rxTLNDuCmGYJ6xoQ1nn7yBSQqnT",
  "key10": "JDgyvTLFmDhvu8h2erkJXdm3DwkMRkmeUPQ4nEzWCXfDomZQpF1aDx4Wyt1PDmNtd6npfs2QdELt5K5v2kB5ugM",
  "key11": "4R8QRGxFyahrATcHgkWF1y8k8PA1huonYhsme6iU7UsoMqfxa66Ene8EwTyo3VakDEiWkyypcRpXmM1CoJd9mqN6",
  "key12": "5BJPa7xnALMpWkw678MRzcEF5cRCpKK2ZrvYWmnNHcFPFBkk58cttWPzzCraPZNPDN6SXCzusoRTaSocfup6VsHB",
  "key13": "3VVpX3FGPhskyqVSTs34xb53huMy6xYFeLMZzyRXvf1fs7zaS4LQPv68NLYWXR9CUfaawA7ZJoPWHUcJtCmHyi2E",
  "key14": "32oq7vuyNWBdraD99yxtbQrGX91ydKDLMcU74K8W5G22DybiTVQP8snrMXpkP1Qiw7N4fMdYhYqtYYFbgkqGSPrP",
  "key15": "4tksRRAzAezYQRip7t1e3yS86GA8AGp79REjWh5B91NTEr54sRdaMLPDho5JRUxQXrgsBSVQUBuoeMDiqwRL46y8",
  "key16": "2iCsb9YgoZ7LYU41WG1rEKoDn4WKNkdvdhb2MabBQ8iHUam9KQ1PXGFMJDVFXZKnh8GURiWLcaRwrBurpKwskCM9",
  "key17": "58G7vXmgMjojQJPjnz6ajVp2tNUC1j6djJU8dtDD5Mkq7YRVpUeDmYe541t8yeumyuKsRpUL1yuzxLsnGymxJqfk",
  "key18": "3Wb92wQ2aDAv52t5iirho8xFjy39s9MkjwFAVDFDnWAsPrA72BqpgpLo39v4H1rBYF9HdtNaUojNyUUpVPNBNnis",
  "key19": "593wiACGESRCs12aYay2EZh2CETEK4cWgZCstEtgAjycVhn3pBnK7w1ESxMgeRP3FeEigpmTNs7i9JuXm5EYMGGa",
  "key20": "56NL6FcxN2XL9WPg2KEVNUDWMMW9ACS4fcRWB8vppwLNUU7UMSZkXidVzPUEniXQXtjqxskeGPdRkKYSS5XPA4oo",
  "key21": "4oiKR25b9ALHwMwokY5Hi5pJNfi4ekMRi1SFkD4NVj7LGG6dvukksqwVN6sqcvEU2t7KLPgRB5wMZBLfQjTescGP",
  "key22": "1pTYHdfS4kBbVc9kpDRna35vYQkM8sfLj14EXqeKNa6GNdFh8epvBx4EvP4h4SBWWCUMsMLmVdPGdwuYtLBxFh6",
  "key23": "5hwFdpdRvfUAj4TeggyHQo529tgYoVaYAiSoJP755UQWkNRtPXwz5bgbZhU2kkKHYMG5sFHgCdcPZpxsrT5VmKHU",
  "key24": "4JASVLePFWBbMAC3ZQw4wdsakXqV6T3q5ApjiAQ6Xtm631H7vpo4yTarZdybTNmXbu5cQ62Dd6mH9Jaxbobm3rfx",
  "key25": "4ueb1pRrhztArMPcpx1xes79kVuYeLsKXWS4huF1N1n4B1ekecP19aADHSWFFn29CUcwKuvbUwAKcR6CiSsMf9gt",
  "key26": "4vf4HzyJc5nkMPhV7EpNwjQxi1YGPWWUPHuJdqpbvqeThZ5TiXh2u7JivTLuEuymRsXZXrqJpk3ynP6qBuTQe4oV",
  "key27": "28jVwuhGAhwCGWPkP7DiBV7Mpyu99uz1ix7fjtGvCYGn3B7mzNBXuEVBXqarzSQNXSCBuvZ1PXsMBopJJi1rSwWg",
  "key28": "49SPyG5y6eynFbFfoMALZmstGdq9zzDSYUFDQqY5x4FnMrPrk1z3F6XhvjnFmqeJjz9uUuEpbPTUJswdQ85fcUw7",
  "key29": "NHgp1v4sbvXWFFk2HRncVFL9hTJu7nWW44s2Zpfr5oqkE9Pc1qWQ7d3tHpUu3Z8dhKUbnz7ddZRHCwFuNgNmzz9",
  "key30": "5fefxD8oPU1N3LpZaow6Vw8t5kdXhTEvHjGhBT2pjT7TLNkYv8WZ5sv4ty7Pu7pYamRHyEPaoZooMSygJdsH8MFm",
  "key31": "4bwNty6nCRs3wDTjVARsk8GG4SMoFB1kYtV9fS96DrmDfggLggo1VPw4GsbXhZXQLG5uKtKZjeMnZn4YWNnwjZRt",
  "key32": "67XTbTaSSYX9yrcsR8PBPw9sZXdTi9dS5sBg4raPYpHinTFLmYrXrRww1JsRvRh86WGrQzkMGzQjQ9dHQ8s7uW4V",
  "key33": "5cZPYYQh4fZACBD5vzTCGEGFBt7dsqrY4SVUEP2jGDg9tN3sbvChtX9H5sf7ngg5g7YADqi65wYNmvrbh3AXZRgF",
  "key34": "63tUMGUqLL5fv24WziY2yexswb6Fbmtp7ybZEx7aTXpqeSaFVfPnuHPKQEHxgJCHWy2kiFtDdxgQuQWKXg4jm415",
  "key35": "23FviwKg5t7zFtQ1YcFtvQv19nyAwAEqv3snP245g8qCxp3QNjeqfVRjEaTD4ir55nj8CRYd7gJTHx7YQxfFLPFF",
  "key36": "2fep13W33zSouEM1fGSaMF4PK6ZQuHmxgUQ5YB7KaE4jaTM1ABKiDHzWDoqn4fFSsfHb9Xk3YBpM8KgSpWqvjYAr",
  "key37": "3mZpTWBBQCcPVYwRV4ERJVvRuUuUi8n8YQcKSQZvYPyTEXzqatKEvyAAXEdEzTNeiJQkLwWN1JEs3shxsvWiRWjz",
  "key38": "31iWmoNT9X7CxaqbfyYbPC9c9RPvWmRq6JKQGeAkLXrQXyWQDRA2cKz6mPHbY8Y5afzuxegoVwuWwxEk4DyGgmh8",
  "key39": "cjeBr1JHRQeqtXaVC63SagysZEa8oSfA2yXM4HHbHkTzFYiui9fk7F24J6oJyJYECNdXzfXS9ZyjGqc3WL5HLue",
  "key40": "32fJPTnSXqrn5hyGRNrX4rU8dS7PyPWzzKmLWhiPR1VGKfeY4tfQWuqfi25SM69pN9AedqjhCpuSZeTay7PoCJu3",
  "key41": "maA5kSJWFJ5m8c9m4LsoNgLzxK83noJ42a6kw44yPL4RzZqVcFkNAPDxR5JmtR2UW62tQyaqiNNRrRSGDPfZPFC",
  "key42": "2gRXiLEDYPd1XmgCjkFWMsnDn1fPBWVxLdM7NGeLwB74rRy2vVcvfu9PENeiPKCa3H5BbNrpAqUJ9hxcHx5pcMHJ",
  "key43": "pSXhC8JLkHAYpd2qxHCa2pukZ8W1Kg7ZFhAxpQpoxiWva2uS3aSELYPeCrzLQ8nq79wDra79NA2DTNSeburnA5t",
  "key44": "4cF9aDk3vyW92EzU5GpdorBXcArSyHDnbgBp4uoaB57VKxkKNuQ3w36UuMdeBLuCc4WXee4UoQtuhj6g1Pa4HmxU",
  "key45": "346v1sehnmxkVrwQfwksv3hGezzTPrbCGK8k43Sh2THZBwXffSMVqWco8BNfn2hwk4cJ3kvPs8dUDvBcJcCAerJx"
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
