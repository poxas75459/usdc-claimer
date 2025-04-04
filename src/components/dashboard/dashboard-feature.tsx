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
    "5Fw6nh1UAqQMin5h4YHLvbc1Eyhmb1oFyS9Uoe5PypMWQz3thkodRg7XKyihm6fKorDSRtUVtMqqGNHD1JMrYWfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SUHAwJqtFBBdNQtM9gg3fE91SeqYKmphHS8ysiDjyt3LNjANcVfTAxUUixaFrHP4ka9ua2pfDAFCs4TEhN3sJaV",
  "key1": "3oUpEQMDo5wp88SVtFc5bgFVu7DHoNHBeF8CsEiEKaoegwtFo4z62dxeR8FMzGZ6WzsingKy4VnnsbTNc1CKWCmQ",
  "key2": "2BK8SuGyMLChpGGYjLdMCcZkCN2S4Sxffu6Mg2nSdudZ48KSph6eazirvf53j9KBRRsWDJT8czPizqiVk23jhK5c",
  "key3": "qSx5GdRiFPqD5FZVKC5oYw1bjYEHBuqDoujjPuhHnW8sWxzWagDA8NWJdRnf7Jao4fdSeKUfygRu3fvCpkbp3qs",
  "key4": "5CPqTKa5HNZGf2oKLhxWPaWBFAxmczRqZUEQbjnvWY9bRBD5HE9ZfmQVUpe8PBScFpCg3dnMAZRc9wSwnyAkytmV",
  "key5": "mWud82NbbfuM3zTGZTPbxLVjfdgtpU8n4Q8oxp9p4CfYVadxAmFxkA8s5Qbx3TVeLbhAg1bGw8h2VFdw2b1GcAR",
  "key6": "4EpEJdnB7nsiCSgrKDADyK38fRAnJiE3zM3GfwnsjGf7GmdfbepFgAnkPybZwMqevczvpUkqrDfvVpT2S8Jtrz8N",
  "key7": "N77rUjsHspqGvcVc2GM76xdPR3TEWBu6rZnJBbqm6ko7iSNLSBCu6tVzyPddGFQYCtj2k8yrGHS7h6yyJ69or9m",
  "key8": "4ZciAXSjkmRqmgBdM4hefAq1AcZvp25VaA9jXJbge5da16qKZoxETBH3FFcp7GyBEzaoowt5gWN52eJJbYUXc8ut",
  "key9": "2ksBsBDxUG5wbH3sgLabrs3Z8F5SWhkvdHrCXYnK3eAgtnXie29NWvABuEZzSxybxuhQd6rQHC294qZ4nQJsHRG5",
  "key10": "5CJ9MfCMD6R9wNgkBvz1co41gaH8QK5Vd8vRdkFmrNSMqoALXoXVGF8NDDo6P9woxWcC96KjLH7JpditmujvH4L",
  "key11": "PzSbmDHdxkQEHkjSgqRudk3fzTeN8C6B25XAARREe45xCrusVjvPtpRrKD9u2t5vDP1afPWBkNPwGx3XTmbaF1H",
  "key12": "4PMr3fVPMu9DE96kydzM9nmLWdKf1i7rBFDxJxYvkngBkgG1zNZ4N1xih4KihPocRG4rx1c2m5gHPHJhqioveSoy",
  "key13": "3q2gcKv4HQD3YeV7ihmsb67y5G7R4YZi731nySgJPRK6bV7ZfVvYTBCKd1cHmFvB5B4Lnj6iBxv3csrbqykvipEB",
  "key14": "v3ZsMA4oKdkU1tmrKcJ5jVQSxfDzw1UJoW5jVXQfC8mGZuLj26ZD1oANgczQQTJe2FLRdvA9XZuJ2HmH3aSAudN",
  "key15": "LV7civ8amuPauu7Sx4kALYtLwBpyGu1eAoGNkdxQZCv9xNFknRSywgQatLZULt2MZPwDhk4r1dVhsNcGkA1Y5QP",
  "key16": "3uJUZNS6uEtNiH9WUkfBsnNkVB7BWz1PSC2S9qSe3ZMrjPdftKu5vtNhaA4F7yYfGMEaBHgrABVrmkcwbh9Jaxw1",
  "key17": "5mab1ax3oumcv2RC8Eg4r8MejbadqotRBvxfSqQCM1p28xGeBeAFCjunTJxNcrxHBJHLaAdd1DotW2ZN1RxCmG7s",
  "key18": "4QMt1Q6PpyvayjyQ8dNgg4dkxCXorm7fH46D1MASr2Fgxh2uQQWSL1FwLR3uBiK7hVYzg3JcmS2o5z5eNaPEBfoE",
  "key19": "4yqCvdQhM6KnRpgaEc6BJnkHdhKL4dovW5Aa9EHVQ5ewSLdLkCQd7wHhEKGzmULTfBtEJiDuddAPqNwMn7wGEjjR",
  "key20": "49r7eHff1vMi7W6ZjPHw7kKCVUhPcPFJWqXBF4CdhYySnpU9WWbtPE6dqcCS4ayfyx5FKs6rheoMQydPkFTF8DY",
  "key21": "3KCN4aFzcJBQYADcJXS4gU48BiRVzEbPf7WhrdGqsxqGpAAXv9LGiTwjtFzwNB4Zj5jaNG8FgYVH948EiBWuGMW8",
  "key22": "2ViEV3q4FTS1inN78HJTQ33pnX7tZ6GXagqcZd1J6jx4fY471oJ4F3WUy3Xbso7FvyiNdudoqhrQAdk9jeuVZiyC",
  "key23": "4ZJCAWYEQWst4TAWVKcxuH8zmjP8jm6BaXiGgmHQeQaXx4euYQG7i3TNFxrn8poryEhnQHW6nPHytMAbH5PiWN9j",
  "key24": "4tVqzoNMU976s7fUMyW1fw2TSmKZRKhXotFbTmaFCHKc6RYXWVqG7GanNaThrE2mf4UUTHvtXyFiQq6aBk4C53oD",
  "key25": "ZD8BijN7WGZUw6dZq2bLt54Fz9n6stvRtg4TeMbCbKNfGEwwUoUkMbD7ZQaRELQ88xawjhKXPjtpGY56X8ZERqo",
  "key26": "623UJbevnM96j1UWrkhbVaAW5VMS57WPNRzNTR5FubhrCP3a2S2yrk6yt9bTWncdEWhxqWWMmzimmhWZpULacvUN",
  "key27": "5V5vZEa72XaSFrudgvra2nRpuZmqzaTVUf8Xy9N2C2jFwnTm3csLYbB9wZVujPf2MQ1Cff3z7NWaNo3UYLNaFa5v",
  "key28": "8TeRoUXP1FWwYJN2GaaisUZGH7bqresVxtB1YVPJ9wy7nQ86c2yntBvyvv563o9vgSyeHdUHYwBfaGJpaWTFwLr",
  "key29": "2gYfTbJg58eex5hdC2jeW5i6enSEyngWdEaMu7xtM4HyZESEmFPQewYZexASg35m3mWxcYHBsVS6ViQfw668LHww",
  "key30": "cn9SwxUnRvhU3tSYkamSkmtTv8oz5Dz4inzJPJtWwCu4junL7zgzeZEFtBosuZbTgmfZgeemgfEt8bbUHykbaCf",
  "key31": "x52XaCKLHjDMEhdtDNrPRtnS6Hxn2wMoBTW97y7UqB5nmBmbNvvnCoaNBzERHeeywbxqSmu2CVmAF1D3MVayaP7",
  "key32": "7Y8oKMztjSLNSc2ZVvWC9cYRmQ2MXffnQDCZoajJ8cLbmd7YExFufN5NNnVZqLQzHzYTLZ2QE6uKf3GijEzcigq",
  "key33": "RSsdVwXd7eEqHhsck2sZGV4gffvppEvJrUvZyCGjJsYDiKmELqaBQ4wGE5N7fmsrk8RoPdKRNFyUKCrtZL6WbCY",
  "key34": "5GW7PMxGCryJtqCusgqtdAL2vQ5PFieTyajhp59LDQFrbLZfeS6Ui3qBMMjqDMvUU2NFX5f3VtnTaoYRCjUtDdcD",
  "key35": "L486H2UeYDKbKGiGvDnfgcJRGmXquR7wWV9XsuYTFBVwY5Zr9nfLmi4wfCWekbARo6i6tnkpcLHei31ZfLbsNxD",
  "key36": "5FnPFrVvFvQQdERD7tVPzAWk3DBcA3vpEYPuykr6Mguqu15ioUQvRV2YZZ1TjpHmtqgUiTButiFEKFiRQUaKtQ73",
  "key37": "47Po64QTK88iCZU6zNCKR17PMNoakmC8kKRM4RvMZu5cQZK2Mwd5XxCyUVURu6iE54dMdcLr7z4P2i4Sjazwm2yW",
  "key38": "HTSmv3gbc2VJvdMnJCBYWhKxvsJ7PoRqdjuPtwFwRAb313WsanDhxMA7BvWewgJ4hLKyfXgkBFDtRi6m5V7q4BM"
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
