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
    "2GAqHJUNcuHxahai6e59LWBjvZ6pc5mugcfUn1djTndaYDb7QvaZMYS4JmVRpXtfCGoadX7fSszVrBgVv4pivAkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3yovpLffe38HVkx3KWmm51yWNyLJpJPdK6pjvWQFW9xKZXK6PDH5m6UZ3Pw3Aierfm9p8A3QUfBWjX1EJbBhsu",
  "key1": "5FZDMBtkEXncxvuRYpSxr6axtRuTMSvHYCjkbNXrbuntjGGBC2KiMA7Q23fgq9MhFqv9zCG9yE14bVcd6x5wMjSg",
  "key2": "7foui2j3ST54rHsRUUH36K3f7vT2U5ntRfxQFjsBSfLNgsgY3JcRPPQCYfZ9tyLmeiK6iAKdiJNDdUovwfvaC77",
  "key3": "2fVzNvft5JagHfABMyy7aN3ca72TPv299An9wBAc6YnwQsRKu8uvxdcDoFiUMr6px9hxeboQ3i8n6Vn4CDQqxLT",
  "key4": "aoFHwxTmj8ta6QaWiJRQr4SuvaTAe45W21fvFvSaBJMy9GEA2vNjCZ3rB4xP3RxzyLc21UWPuexES4sncBqD3NS",
  "key5": "25LFftzV85riNCA6ZFTrvAjcp1ngLk5Tm1rSffmqTvF3PQfYdVHVBcn5T1X7vztPf2wnrR4ktJyJX4rZy3639ZkQ",
  "key6": "21RLqhuMSU9c1WSVZhJmEiqmgprfmS3SQLU13TyTcyswEtnXc31LZLXZ6ccnZQRAmvQU1hSw9WsLmFsBHnZztZBd",
  "key7": "3AsbMedoKgi2GFfJqdsVDrRuca8NEkLGzC4MUT3JRpTQnfooiwsmdWyPa5Zcb9PscAPZtqE1uzeFMMsmKrD7f7QL",
  "key8": "3phLuBRGtYt9omWP18w1v3YR3FWAbbUKpBKN1QE1Ca5LEWge44ryhucF7ucYeBQpo5TzHJ2nALHU4tekWa5HY41V",
  "key9": "4XYe4ZQtHiLwNjmgEqn8WA7smPnCvtpwo5UiXPtYXdrJCHKPzmBPzt6MrEisDpr9EQM6Heouk5JsN8WveSccu5w7",
  "key10": "2Zk3PLa8FhDcC3ZaBNv1kjqgx663SrWGsqR3bdY4vPVekj3h1rND5wFrU3N5JB5AQrympaZECVFxrnLw4hGqTEeT",
  "key11": "3XvRvvQq4DprnjCZxQrXZs4iSq7VfMTnDZWFgrnnhj3qs8BBW3ZSJyFsAYKH7q5YgDRuL1mdeYwMwNskdCSEGbMD",
  "key12": "3GgReLq2YtyoKniQBsKeJuDSPinqVoSaJxHcSVprzKxx6UkbLcXPNbF7S1hqHqjaqqZogqfmmGHuSLNdKmWgnviP",
  "key13": "58TSWM4zzN3FgVqYmKC2Y5PiWPYEMks1S3YNmZWxdgu4JvJM8VzvZHcguk4xfbwdFiVdXP42iSn4WjYAXu5goyZA",
  "key14": "5TSgKC9dohjxqn9DYooqmDwNrpRWYKqPaGhjWhZkMsnyD988MdURromZsUd2FRwkkT7oqvjBQjAHKg2nRBo3N11U",
  "key15": "4eW7AXuNAWGHbrb6aPsKR4UG8E6dGMLLfgsPDh7QsVQ6rS8WcvsDK58iGe6RHZfpWERqeVtXpj4TpQjk9LKRoV8N",
  "key16": "4vF1ZW3e6HfZ1PwUZY9h6d7fUA3PhEZdoMDb5cuH4c1BPMvzddRke2xMaA5pp3Hmsxxa6mYHT6q2DDq3gGu9wFKQ",
  "key17": "2UttmdXb6xP1sxVe8YzgXAX5WYU367S86SbLNg73r2J2fS7EFX8DpuQskU2KZBdiFBy4rfsDiGaYcFBpaA3BPUZ4",
  "key18": "sjJideietBV6H7cFmW2oL5Ad83hiABhqo31jTcAcnDSy2AjRumUghALncb2jBZw5VVoNHcm2CfTh2Gf5sEyaMQR",
  "key19": "2Vq3v3Q4pTEt1UBhyUoYuDkUHCX25oAeHSMuF6rSkz5TiqGTrrwMFaSSk7sR5iwVfXy8grWWk8RyfkmtYnxDh7hq",
  "key20": "3KWd6JiqULbDcftQtzLSR1rWZa5QrbMoc4BucTyEC7YAGYYh19m4nqvrynqoWVZxybxod1uLYra2jVpYbtiRqupk",
  "key21": "3ZZ5vxuydf9WGRDHpQ5iaQqVW8tiWCL1ZkhwhX7kt5whCiYh6MeCGFih9z1XUkTZ89R7G5dw7SVM7dtnN1NotYZQ",
  "key22": "5yRyNeVges7EnnigKVtbaU5YHZc1LgXtmhpCyBQRmGxC23ybwAwPAVjwxqfH4uGSAHEg8MoYzUQ3RxYEcNJsGb3o",
  "key23": "3uBmULFm7ehFAnkKk3xDnCA7CTFHvJn8MndKY6jadt1MW3N8GhvDWJ6q1MMD9xWA1e2UCZK3ZbXE3MLHwq2MmYZ1",
  "key24": "3XzEkvJProi72gWPsWnLmobJ4mw1becCd9aRaJ9itGcm4K41NtbKuTCde8k2TuZfiRzcpRGnB2ckK42chuZTFomu",
  "key25": "36wXuA6fGnYrDVJcCEWhpR7EpwMLMeYai1zigFtUgqTvvT6j5k56a2nnX6VEEcbpNytob6zJxevvZrePLHqABKbX",
  "key26": "BnccrdpKMPwkaMai1fNajJfRsLdEip33BxZ6xGRUSXGKpK3UMH5a5Q4QUiiyN9e6GGYLwxp6eGdaL96fdsUrusd",
  "key27": "5cpDQXyXM2jQdTctyWX8H4Jy6sgbMTj475tDLdecx3DTrX6drKgRHNQFu2jpKjBuVp8Bu1aTvgdSjJs8eQHrJbgt",
  "key28": "3Wdm5eQk6DucSc7W8zgAY8PF6Y8w5doPdvmgpD7F3QjUyFrSAfByfe36kPqwFub2dh2wfuFNCp9FxTfBUK62DhBp",
  "key29": "2Eiwr1FjY8Ri1adGky6WjEneZDATRwpYHz746ZAmQx9J72sUQMVxVgJLWA9xgKnKbhivX2STi644CjhE8biLGGEa",
  "key30": "4w8S5Cy6N6m6bgeb1CiuQE66YjrhpVsW3aNkn7BhzYfe6TPvu8jn1zxn7WK2sRCvjNnmqbXyoQ9m8AcraK8FWPeR",
  "key31": "3HiFFP1mabvba2YtckhAXbfXPCpMSxyvW4awzxk4PWCDuNHLnPLUgtQF2u3sxcYgdraz7ebXNAX5gGBAe5NPscd6",
  "key32": "3723bUYX7fguzv4pA54cBRdnvS4wuDe9stFtbGH77ixjCNeiSfoCiSXXV3CoyA5psj5hjcQhg8SKpUuYAXUu9wGP",
  "key33": "4D3rW5zjuprKNc3phigBDwAkx5YFY6uCnpZFzL312CjrVWp6QwV5vEz3hXCTCPWtHEHvZ7pdKk57pwCx5w3Wir7F",
  "key34": "5CVefrbzFsBrcvHUw9wgwihFYEWEHQHJ6HAMotJ2cjFs6pZy9CJSeb3BZku9Md3kT6pvopCD5T6pAczdHY3WKPv9",
  "key35": "5FqatUkNXrRyk8B35w63JuGW8PqRGS65gFLyFBkfaVKzyxUYiTwic6QA85BMAJTyZ9aso2zjiXD5DGcU35ZajiE5",
  "key36": "joqMMN88WxwiN3VsTLYddud2HohoFyMPELSXFqWDgzUcdFwN8DPfebXDcBZEeS4XCSKGZE6FnRsxizxb5YPEfge",
  "key37": "2VXFMxFhRuNF3vEmsjoP2TcykpbqoH6WbKaB5ZJ2GiKaV5z7QRauXcnSJ3fJRRmcWc1mUxwC8kSEZqKgfdhsNpG6",
  "key38": "2dPLYatigQfq7pdu6HrynigMwThjzbsuQe7QMpVUfjGfGvGpb6fNVjjSMH981EoPuy3PAB22zfHPzKfieBB26qSu",
  "key39": "4zbYjTqoa7tWPN4aGwKeZgF5k7qcrztJ3jyzf7aCo8wYR9CYbyUrH58s2KwaBdUKFi8zoEp2smzRubBrQehjdHXi"
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
