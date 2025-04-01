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
    "3iu5RV4yf1jj2m3fcgNy4KKTHuUKsHGCPmV4VcV1RydcUdvoN1Ud9CacQDWyEDcQvgyKRMrqgxFMyVx3Y4pkNaEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVKxgHUA2R5CqyAMEFxmyfHhUgHGQKEcQy7aQ8j62AbjkqFnL9MTRQzR6yyizNpTQZvD1nmx2oa7orTbYB9Xdd2",
  "key1": "S1XSkNUMSh7UnsQv5NYVUL2kboVfs2TVnxy4tC9xKEmPYaFZ6sDUDsKjJHqxhCv2bnLjkje7tHybbJ7FSfW2FKs",
  "key2": "2GNTfnfqNpuKNETVwu5XgA8gwbtnTbaLKdZgSJJshetzAztzt89KHw9jJ4gjsjNAG9wqLnE7LLnEmvJJoPUQCyub",
  "key3": "45um1wcqQMdZg5XZewvzrx9oe5Z5HKoGLibM3Eft1hTrbEARBELxQcheKQ5WtfaktsQMbiLL1wmDz6ypCjVDVrKs",
  "key4": "3y7wniP9Dj8gPPaAq5qtDsQN1aFQGuN7sxpmoTTvGWvgZcPngQzsFrkgmzNiaADm66ep3SBtaHSrjYjRvz5jozAq",
  "key5": "4irdkEgfiY28gBus7eec2VTjwpTNbM5LCfvNPGigsrHeEF2dQrojwuEFkBn6hCtkV3jhRNu51MK6WZk1KkZe2kG3",
  "key6": "53knueqoGWVC4ZQaFR4rKrbXZ81fZXDxVo2NYvpA1RjXz7KQu5mtsN54CgrFjmZBp2M6smqdz9yrQE2XS7ygLhB9",
  "key7": "5GMa1H1UvwtqzC6iEk572o898N6yiLCRfu9yqwHV9BMYy23aT2isiZckMMAnrnNp9mnXgwHa9EF6UyGvQZutXX1t",
  "key8": "jvVC7qmP3ASd3Tde4rWzdU7bHoFGtAeBKpLt7vtRRC6kfUpTnYdfB7hQ8PihX3tuVNUJMW7FENC3qCbm4SSnSuv",
  "key9": "2PL8nKogaVkx57aVYhWKdGPLbxwpbtgV3fh5sHUjQrwswnrYv5EfG17GC7XM6uzgZrZJjDnLEsBdQA3panEs8kQy",
  "key10": "LqSRYgjC1UMjV81WSZvGAQFLM3xYiEzGUx54UcP9YyWKTaSncYvfQRSrhVe9w7hdPpjRuHeKjqEsLk96NHszC1A",
  "key11": "Fo6eWXEjpTPoyQQjbztMAcuKZc2F2zsRQgDKNaSPx3x4wAwA5sLjs66E8djmYJ7fidVi9FyySKV9zqySEruaT9Z",
  "key12": "3Jw6HNgXTyeDTMVUvMoiXWMebfZypE8mRQeunxodpjVpnbRbeKgZR1HFqh8o5igdZrSzGqAfyaxQnuykexkTmVA3",
  "key13": "2vUtRFDXRoiqBU3856FabGz76fuaqameTwn2H8qFLgoTUL5iPC5pZ9zw5donvTeMCZsFLsLApusVDF3P29te1amR",
  "key14": "66RTEmf7b9ANKSCXM7jVfHA5DEeYhiBZiAW4pnBhSbZvbyqQuyrtKqnKhGvxgUxf2M8XoR4t9cfzq6qsD6up6KR2",
  "key15": "ux6HBT33Lkho1XvrHbRVaCQc6kH7EAH7hA2kNSxc3LUVUf5gfNPTao7KW9XsEuvLDQutGWhba3ymmtvGoemYCYj",
  "key16": "5aDNoyHjRGwoP2H8JBimAGkFKCKSAT7ywPmo7753bW1CTUv7HMQFzx5HCvBEQPrt8Rid7no1YWfEZ3Sf3fN7iToE",
  "key17": "4GGiDgN2Y7RnpkAVuF7gnbBmAXXkaQN5KYakg9XgYZ1r1hHwfyhdLsoB3BcXgrKb5zxeJpeCLUjmEAk4HTCosKF1",
  "key18": "4s7vcvutKrhWK25kFf1v7qVg9aZpPWmPU2FpDZ87KeFDAMjpLUp7vvTwNyBNKUKhkRh4s8mrFFcXCGeTXDyaFh3v",
  "key19": "2qPcV73aa4ySRqjJC3qJQjn5YnPdhjVDSC6DCJ6KVqQa5qarbkZjCqLDUsK4sjrsWLyAkU63fYoeD2XS5G7RtjNC",
  "key20": "54fPuN4Y8sGpkrbwdQSLR4E688J2p8YzvBNcwx3tVm3DCX9wNE76Dtzc3XXgxcWwmCqT7ZzjgUbPGx9UkpAsKnbX",
  "key21": "4z35Xu5WHu1TdDncmkTaipL2qSyxHaDEDBorfU3cVM3xyUka9thKjoBXhkE5vDqLWz7ZDjVfk22vHpYUYKpkboP",
  "key22": "4zeSZmt1CYsqp916RodcKXeqZxHguzZ7d4BwfptLNP7M2ECnjw5DSLUViKc3tK4gGvs7GhdGcwL8wKrzBw5wxxEd",
  "key23": "xYnSPZUUo1Ti27Gje2iF2Ve15JRHLqpYuoC6nmp7stmTtxvfYQbrBgyLpM233ctV1A2dxCQBQPmZwqFrTFZBAJD",
  "key24": "2EVPZciVwUm3PGBUVce8ZF8SKCdHX7B3AVHTUogsXzDzStnZPhNxNbryY3x3VigTD2UBxRDjkboRoCUfFYfWSvmc",
  "key25": "H6S3cbDYwmXkyk7wWRxAsMW1shMGkAuKALo5dkwTS91bzC4vJb4FiWrj8G3A3zWwC9ZT1ouadgzygfQZFUecBKe",
  "key26": "3yzxRmzaT3VMnLFTHAEPiaHDiiJ9GAzFvP4iRpjpRL8ewJpbrzt7NbtsSg55Lc4D3zmKtMKxji2L3pfsLV2UP8kY",
  "key27": "5wHpZMpzrNkCRNFX6uS5SuS26YupFMAfeWF4EvbkQjxokPxgzbg8774JyPdruBPvkYDXaM7ipYW5PB4cHfr619ye",
  "key28": "3p6cYqB5zDdXmGT25Ucq9RMBkxNuMkkmmHzgN82JZirKsEHKmDJzEVCbPNR5XgFnG6Ax4xjWHSGCX9qW5MMPJLfV",
  "key29": "5rFURDYJzuQVGWkDSc3gEwFP79k6Ftvhq3WPK95nUEzM9FFbJ8QN5yDYwGYpTu8aMRNjBXZCjiiyyTt9VFieLT2j",
  "key30": "2dp7Y8bA1BFHLwNy6VWGpaBGhxEUc3A7yqdoHqj7atGGHRPBBTgF4yZDrwKVdCMwNqVshWfTbNU1bw9rowRvxzcP",
  "key31": "581xt2SKBfNntcPGeuaemot9gRyvNLCeCf692wqVXFuUWqscarLcJjfySDDgZicAU6YpQZwvR8ib2U3YanDP5x6R",
  "key32": "TwteNm25zsvrHbvvEYLmMyjEJwdArtr5ZtebpoJ5SGzUCd6tsc9SK2p4EWipq8uw9j6sxSBGjXGa66JvW6AaHLR",
  "key33": "33CtCZCdc9rFA6gFMk1pnaposgrv3SoYSnpJmBJShYcM5fYqv6HTJTPPU6RYggSoCMQ6RQUovisf4Dhb9jzd4iZS",
  "key34": "4uFcCKzBtSZnFA1NMSR8j7eXTHyRk1FyasAfW6NwxEi7M9WzPAN2i1fzwBYjVXyNDpbHjkixA8gRkRzWfMLLcSnx",
  "key35": "QzLdNx5Yj68uqYmuoung6ER3JMeF3eB4GTBvPB1frtrPGjPB1rd8GyATx7VXJXhY1Rn154FchT6CJ7Nf9NB6v9Y",
  "key36": "5UUMKFJ738fZCdcN8QYuEpmQiGapUuL1uzsF1iJf1LBcQJbYMcVJwjYM4xQMHrjLwRfb9euhvV4ULyC9So4XEep6",
  "key37": "4csZHh65n335Ev7zAJQNGMENDeyZnEQ1fEVhSKqDr1stnvuN9awsrbf8wLpqKTXiHGRPW4Tez1sseykmagBtMtZm",
  "key38": "3NFRfgv2YM4xgEYon8ZrhDztSp75YBb2SfjV93CWoQVdJ3Z11MLzHbu31JQoVLEPEX9WnMtSbxFPZKSbSHjbdL3p",
  "key39": "5Pi2HkaueGb3QSqFWQbHA8SZySu3BHFuVxh86m48Mz2hVMpcXNcKKyw8PPaundJLzhX8jiwbKwFjTuveohEWzEn2",
  "key40": "aYLAnc6eQzgeh59wZz81ZjzHnQYwavfvt9HauK1Q1zpfhnZgJdbqTcxTtWJ3pdK9eSHrNXxvBci4Wm1MZev4pz9",
  "key41": "JnReKAR4RTKoMg482oJfoezv4j6FC38Ymonzwy7jXUgWncWinQN92u9wjJEWjM6nKZjnFJpQScJsAiDwwavZnZH",
  "key42": "2aCKzxNfgoWqxGFsnS7jZd6qj6tGYCFmMfdFnFNAsJnAVqWET4xHJ74NfRTmLws7UdhteB1e7wUmZ8WU9ZQjKmzV",
  "key43": "5V4UaKnbbNjgjqcrxKmTM8Q2kkSQ3PgCfQLFjQpT8S7juuKXWHFCNiZuh3v1c2XKiMPWE7fAngd986wWxjzdN7uV",
  "key44": "2smr5mwfKTLW7rWwXZiGbyewbJizE73tUtSfKAfbSGhSz2oWAoeXjEZ1ibnLV69d9gYKWwTg6SjTooTgqVyfxyEV",
  "key45": "aB97gxMjhFNc3P7YiryKaymskbsXwu5qSkytUDyiqZrtbdaCWeCm2RV3BLhR592aNzXxYUtCjiMHw5GdhqXTbZw",
  "key46": "5VnQ9EthdsYSnsW4YzehBhZka1KGXs5v4vfJMgPXzfrNiEnqFqTUENtnwYgU4EyncehAhNskHbqzb5H1NZtobmJJ",
  "key47": "5C3XgxvRkdVEdSJRUpTk4v9it8GGsxzztDHP7CxCTfixSBY837G5ZR3xkG7iTZcG3JZ5EwXa2Tuneg2gvSXwfbR6"
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
