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
    "4anQR9RvWUGshV2oKYmSn1g9Ff78A5earNM2Y65c9wQ8JrZuxLK2VqZh9sYNNHJdLPuA7mwJocyLFPD8ubZCq6g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJ7AA3ZGb8Jy4SNxyTNpACESDm5fjMmW5Ytqr6BGUm4eQ1oAhHDK1AqF3TA8ZWtMUWAQ6rk1oL2Up8qHyETQPns",
  "key1": "ZtbY2YUTLG6DCNVdzRHFZvjRVByrtTvbpne3HJ9t14jXN6oTYD4YjYBd8BrkhWhGQbrA9Rp3H344ieGtAAMyG8c",
  "key2": "3S3V814ZPjFj3zvZfw8R3wqcREKa93oD4sTUT9CGZpDFiaAdhAsX2fUXaiPxSC5i4YRno6j3FmPHvpMVMZjhLg3w",
  "key3": "27TeRkaxryq3bjkRPxiN2mNg5SHgqUi3RwAiogzCt24uSjRKg4NUNm3Dz3MfLH7fUbkTvNPK51A6bC8wd84gud32",
  "key4": "6rr5gj6dvYh2AfziWSxQctwLDggb7c8qzCvVzQp9CVcWY3GmiPKuHxLPuZ79P55KiMPs5tQL1tnUqxtWuqrAtdJ",
  "key5": "618tgiAXBHpwYap3tpdoxPwGLV7QPmbL3vNAQC89i2qeyQTjeajf74EaLZYEkPpkPy1ZJEzm2UEdoCRNMesa5DTn",
  "key6": "2vy9qJpgp6BpqRQE2ipsXyfkgodS5SinbZvmFoSmY5ZUpoVh56dL2E3NahUYdVsATV48a9fu8vAtH8feQkxauszX",
  "key7": "4jzvzU6BdZYcdeLnU8T7yN2AcTb8agkQxmoUM9SFs91Ww7zKUJnWXFhMSz4MYgU7zcGrojobAvEE62s4YTSDD5Cg",
  "key8": "2Wuh6tdLcL3x5uGKyTysqnLDY23z4TNcgGKzTRL4kHt3qhrVCCpWVXet6TwwevuStJtBKoGwkv8Vf7He8S5TrdEs",
  "key9": "3opUgr2qHhtPqidT9JAACvkdAbZzNKoPnx4GTqjNace7J6zpi4DZqDvyv14ahLdskAP7CBXD3quqncQmeXsMD4SF",
  "key10": "4Mkqp7X7H8AzzjkZzMyhu3d19fgzY93XjAissFoN1w7zEGi8bnDxZRcTQxkV8zUzEz4HAxWZ5u7rMqQso3YkQpX5",
  "key11": "4LswhSPT5U6t9K2BMjea9o1Csc1LNBRYCpmWJ9wCvauhMRGGB8wAVvMoXGyp53e4YCPzE2y3rVq6B2av1Ryrb1A4",
  "key12": "2zvFwcdTK21tamqztYVmrNKpd7ubV2aeMejuBZtempAzfUxQQxNHoCx26P9hv6nPaAGWW8mXjLfvXnLq8tUwgPWF",
  "key13": "3M2SJwbt4sUR6ZkJ8gCQ2ujnbSw81Zkn24mUHVW45MDsH3YNftF2anCotL5ukvYwQ6ctLAau9GydFm4s6hh593xU",
  "key14": "4zqENXsSQqtmvAso8tR4zBB7bpTzjVQuc3WLhCJumk8gv3Nz3wA1iJERtrgpSAJPUzQKqy9C7d7fKTzEr9YNsDKX",
  "key15": "2u5cu8UxSpqBwhdbcZxDiKz29daQVCVED64uWD8GGq6kkRptpm3CF9beBdiJj5jkqbTNbZj7uS3dMHVXo9L8NWsU",
  "key16": "35fAEQbv6kjAAKoqCmHZmkz3mHUuHSkMe96wMXKZVpFAFCV5SYJJjjJTB4AdtQQoEY6J7VbwYMXGMVxtgtfVaLRp",
  "key17": "2h8AczAZR4pEGXd8itGcN6WJwXYXBcAKNQJ7ioLRYZNvGjQYzBajyXVdHYgtMZgASKPSfvTG661i9Uro5hmzYu6Z",
  "key18": "3u5jyi3AkkAL6YCBVYBDJ7XjW38pBnCcfxsmAg2XypFaQuA3eUKGAg9s4acMJYM24HeMQdexn6JRgjmFtXdHfpxh",
  "key19": "QxhvKCqp61favtSwRVnqHHNj1qqcNmjWVqdy78ZDvmY5QctEPdAg3RmKf15pzoAQrM9ia3KQbgBHHMAqAJrkHL3",
  "key20": "28Y9p7nMiSC2fZQjUJtYfYGKN9nrVjjWMYVtLymCoeaSiCM8qM8rAgwRrcZNNiJ2Tj2fbE4GvFJphJpaHVgUR2xS",
  "key21": "5RDT72yh5XV34hfGUnGWFUXEV7TchA2urEPNFf2HYK9AzLYTyFr1YNhCb8y7yapy9d135zWRB5wrKAZevddYj39c",
  "key22": "1AcoeKdAF2H9eTp5WeKh4iGVpLsdvW4Dz6RzwqWqg8SiqQas3wXUJMFLso5iguqQpMgYZ9czHH6s6kg5MCKFCQR",
  "key23": "2Y7UgY3fZKgT173PQDH5Jq69iGEFH1qMzf3SqMA4zXf81VqUqsnnoM8XDNojPApt9BuQUGW7HArVxULZNGGhMhDr",
  "key24": "5DS4Xqh4BJhbUWzQHzmmPTYRXeoretCFEzZcY9GgS2h4mLWNiMpixjbafcP1BfUXho711vxVDUsET9UJz9Rdb3uB",
  "key25": "3iJnrDLnHjHoPFwcWxmciB8A3xZo8geTQnz4oRsQc4GEHSsNyZsNVL4SgyxqtHZ7BrFdsuU19RDH8YbgisVBnPSN",
  "key26": "5rSA3V8CA8sJCQWLRKXdq3V7XDvzFDDVWB41TutDuqTyCfTY6qnzM2tEdtoeyV1QRL1hzQG97vV98E9ksnCdc2Jp",
  "key27": "XLbvUCwRNJkQ9SzRpA1gQFXGNKNBRrNFTpuhCyk9nUrkn75JtFSLhg6fwejsRcCg8SRBTdqfDnwXxKoeFAdD2zN",
  "key28": "2nbJaQRkzikQw52MdLajCYpweeLU93UsB7dNGcdoTyyftgMe8WugP6rVwhNQ8wSFUFTykAM2aj7RUCX5Wcx8GizX",
  "key29": "ruAtQ75vQSh931d3JJD9KsoMUTiXGQy77ZQSTupEokPCMRTZQP7Cjf2dnoD9Qvydm7LemaXPJzWCwQ9dWzzyD9s",
  "key30": "3B789v2C9nYTxzPkCbz13Zs1MZkkzeJ4maEUPrPVvstKnFzdytEfeQnaAz6WdNye93h1gttfzPDtAvgXnkWLSLEo",
  "key31": "kVn8Fq2CYUYVJUggCL8yEayAwN9up12K3GotyWB5AbtdzeGCdQhyWJvwqTKsAd8ZVs2LR7QABDaRAfHov9pR944",
  "key32": "42ez44cuxLWctgJgCNrutQb8wJgejhns9JjFgjEcv7fYGkKC7nTpipEQL1jpYPV39ZvuQ68HKXK92UP42sj8Nhgw",
  "key33": "5L8Rf51Xecxs8P2jCYERo6V3haNz7gkqiam7bciS6cAQnmQsbnUmp2ebEhC2BtFbRiemiTbP7qeHCa6oYKVj2m9m",
  "key34": "4vCwJjDBKu2jfDzRjmaN5WTT3sYZ4bBn77F4N4R3UQa9HmhFjTUtQQhxWbTpMXUZnFNRV6Vw5tfc66L4VKWYBP1e",
  "key35": "koRF4twhi4xPeFbtQwsAoe7ZfpRE7P4fU78Vbvb1usVg8d7E2sLzBkNVPSoDceiRoxgeNfzV5Brtcur1Xrqet2f",
  "key36": "doatCXD831fnZY8VHiFBvgm5zn1T26Z1i3qHwU4yfSMJMxyqKBgJWg4m7r7pxSP6VHhiZ2tAwXH6GBgCiyWog8a",
  "key37": "tfy4BruFru7mmULkDxFf8hHaxiUhQkGG6KDbwHy3hhFr585RSc55R4VsSxFVqXcdvaTn6iLsHWhd2XWgeAAza1z",
  "key38": "29qVjTYzmZUwBsuMZSPCADdF4BsMkUtSt1K2CPUmZSHBzkq8ynPfQxh16ira3x5yWczLznTk7MjLAWMRvWTEJLSf",
  "key39": "2LSJco1qpJozon8PXZSQJwu4qcv5znYALEffQmvGfJkbNUqcFmwEPo5XJqPikXSr9qFPDW2hPWvHPfpzrDMt6sx9",
  "key40": "2ShQKTbupLxbkMfWVrmKHRkpSWLvkrPohtSUGYGa3KFNnArZwuPXiiaViZXv6Ah4pboubrrwYUBWDy4BUprnPuhp",
  "key41": "3DyrUMrHGP6dxKSt616pMzMUzkPt1znBdGgukkU9sCSxrWYyP8Z8DY8yAsPX4iw6yKLKN4qDvJMvs4o3vyCDWAqb",
  "key42": "2FmcB46uCqARL8sEaN2aGaMzr4ysbfJZjh3iDkrVpYhWfang67q6nw4uos9x6k2KqCST6knWGRX7z1iC9bLa84D8",
  "key43": "58CJcrJoa1J9UNyfA8m8HeqpN5BBmBMd9R3cHf85VdBJzKxTxoKxqpLbKZrh2WnLu8LZgbhxZrjNvkLJuXwLQpK4",
  "key44": "MetLsfGXjiiy6nNW2KcQL5hWoTDhifzFYTnCirRzVXJtkdxiR2ycFgbBtsUKyUVRkVE3SNt9BrSx6qs7BzRxF9e",
  "key45": "4WA84nCcvhoVfSgDKn4xmk78NfEcrWEeusNCGTWkS5oxVXCnUNjbZ5hbVRt5Gp9VEMsnghrzB8kAyLRB9oh5hAj9"
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
