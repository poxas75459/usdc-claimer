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
    "5jHTff6SdZ5LdkmVhHf8ru8KTEH7c9VYM8mrojEwtFzNTWiCLvswpceuE6jDMKWJ6ZKCgnF22hj6HptbdzYnZ2yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24W2jJnvhfbyTHc9bn23ExdKr7WfWB8sHN3W6QkKuzqdbh6bHbVjwiRTwMakrscL9jvVjRtd3zN86XpUntMEPkVL",
  "key1": "2cWiH5UfsGSqFr4UMkXsUJhrFtnVLyrsf4JxjJFpHTTk35r88WpnL7tLFnAdjYvXds7gzLdhjrEtpZW8vwW9LFX4",
  "key2": "561Kr5G3gGoRz8Qaag9dyhZBYmVqUYQZBcJLbUyAqF7G2qAf8jvDPR55KnJ4orbbqUkUbkYRW721JrExXu715yEU",
  "key3": "4TnRosYWyvkcSdorKRAWTGL48GxYDG757tDpeDWTfuDZtu2qn461nuB9QMAekyy7dKSQFZRL4btDtn7Km59v92Hq",
  "key4": "45EPsyT1R2yYCpkMTdmaWttUa5VweuE99U51GJTzYcMmhwEnMmiGkMtFxY7eBSfFUCPYeUn1tVfBuraS4pbHEXu8",
  "key5": "4mAvA93SXQ8Xrn9bmyoiMRgaTMmYvi2vXdVMwzcCeDr5KyP5Ep297fNWMFGWvdQMabtBZbh9Yf8fF8zJ1hLzN2Wp",
  "key6": "3tmGrJLuarETGA3MSh5FryrYuJ4EQ7aPsAqRV3DJurhz8RPXXeB8JbMzwGy6b5b56U3po98ERNjAnCTSeQTgp9bV",
  "key7": "5U8Nn8MDwyPwyb8yCDTb6NuvkNMGcwPXj3JFwnfVsqjR9coPkCe7oK9KPYjdBCqNkL4wVQikLqSxymiqcpzyb23m",
  "key8": "2uAUKt5pDWCCVLPm2nnG2ptobGCpkpMEhvH7VqwN6F6PXDe3cb2CqDzGvcfjiViSEMavBfBYQSF5u7i2v3Wp2LV7",
  "key9": "4fzwT3zYbxMoDKNkJ81QCv2ce4P4TgpUGBg9TL5E55aEYuw5nH2aPjMRFmVNcqd8pG5A6DhCnsm9Vw3rKvL765sy",
  "key10": "3A3R4G1VdvKS6jnXQnzdLnVy8WrXKDdf3eGAYDrvCVai9RS9c8avM2qUQ4q3nBBjhi6HigBguXtzhmXmmEEiW5z9",
  "key11": "3GqaGTBj5JUhvg5JapZbjK7LhGhLTQWrnFazKkZqyjsooQU9aiDyLjPAG1bcP6XnrymHf3Ja1RqyVosLa5V17DR8",
  "key12": "2BxgCuLNR7UR1HG9ru65vyaj7ARGGZebuMEjvpyz5TT8Knada3TghT79QkfqntEZJDysKHC66KZD8eu3Z6VaiaRZ",
  "key13": "73BRWVBnc6BJLD9s4FRMyVWKeJh72JhRXJ115wQum4gBqJJhqTi55t2yzCxJZ9mRXqdfxVqcyzH84wocAPqJzLn",
  "key14": "5knJ2YYQdCPTMBaZAHay68YKVSrr1gSSWo3avAVFh28JxqDMHrg5wWrD4jtfziBUhxc4JewnmxMmqpdiUbbVv6rm",
  "key15": "KKiLgewHageFzvnsJGJgfLRRhiFxWTEon8tubYXwoT2SjzjFF1wevSvsMv8VorVGFVrZ1Fimm995ZArZn71EVKz",
  "key16": "24koRsy2iwPktJU9wrMKLgHtDHCLpqGCaxEkVmaskPjyXXqgdFt6vhAXixAkdYNDPBxyWGPmrMVugnAQfHP7JGWq",
  "key17": "2XpHaQ9KdKggZaEMrQUdfndavCj3uFnRNS7JF267wr4PCPe65osStfJd4CARGw62j4UKJJjKEvc8mx1iFxqFciNh",
  "key18": "5prNuVbTH6HNxKAJgSXC3xQuEcVrtSxDTLSGGJ8vmnpG5yEAphQUW9ZyJB2d59crGppj7jNDEXbKwzdo1S3LiuT1",
  "key19": "3cUXvDuKpusTrrWjGUrj1gvSRxWrzbdP7qH11mFXZ9AoYjhEQCocwPtjJJLCcGsWcFqTMgudW6H8mAQns9S9GzRu",
  "key20": "32uhD8U4bPEsQAULixowywmPsrsd45MgevXrSmPBd1EbpyqKUPdzp1rmP15S7EYNMgtwZ5KYUGPPacoWDBS9vY4X",
  "key21": "4hWhWpvDxggcJBubRvWWZtGQRm48T78DsXdKT1XFvVt6snkr7KEFZVjN7Gg94MJ456N4knVkAVWpM7k5Y8cE6BHe",
  "key22": "bXNVm9Dp1oWhQpw6q32jwgAZQjmyUWBXDEbnsAbE12psFFavUeZ7qUPuYT6EPQd21KPYAup9ckpMQfwXUkLAmNU",
  "key23": "5THtecU8fCJjQ4kUE8FTGMQ5T28XT7QoJxvh28L7mAgCAG5g1VDGhWiTx5XEW1PjpmwwAGZj79AZUy3MFUjzawor",
  "key24": "Bix7KmK8KEyWawRRJAgKgAxmYeoZpiwXmUSkq8KaSe4V9n7Zv3hwhdL2sPZRJqvfDDL4wPoBxkT4x8YNaDSUH1a",
  "key25": "9jXVPLvQCH3qxBGUqSsQb5YvrEFxRP3sECRCq3BPUSr11DFuAg5pfGd1Yg19DmCzbyL2g7vZg56xedFrnXPQmP3",
  "key26": "2p2D1LdovGWP9Ved7cTKRyzgFC2RLTpMC8jhbvRtQQBLXN9k28v7EsWN7ZLHMGXCMLnv8NFRg4283hYjn5my3NgJ",
  "key27": "3ZmwgQjqJUiZ5SvesQNtnuF7fn3ghT7hrzMSSPKRoZEwQEey1BXv5H46Znw7V3jRtD99ruY7usAjDd6JvzBJFpsm",
  "key28": "3jWmUeaaABmWBgAd3ZDuFG35A57SdLBSFhsWqS9Jf6e1ucW7ne7f8FuEp8RrXTdBpfJ1VFk8qpdgn4cfBwGkRjhP",
  "key29": "2KjJnw1NKQLVSae9JcvkQBQmNQYsr16EQRXVbeEng2xHqbUCb3kFQA43JTVooeEzhNHsAgrMusPECSZgFvRxeGds",
  "key30": "61mhYeoSZa7TRAfYNbF8ptFqn1s6nBokzEVLQjHLBBFzJmh4uQMFk1s4GByUyDcxegz1AHVoG1R4r47PPfsKnexZ",
  "key31": "3ANi7Uq4PPgUc97jcJc2bdBFyVhaFrrJNPwnBm6yt2HkZHEzdtmkWdF1oqiQLmbqgYTKt1Ww7ouNQhMNQfmSkcnP",
  "key32": "4jjaXGoDbXSZzq6BtfEvyPS6XzE9MweonnWFvecWVwnmBKLh4dajExTYphFdCzmszU4JdTCVumYVWHqB1SaybQna",
  "key33": "4xkHU68VuGbvizYZSKZrbMiapLkqQim9T6KJWTs4XkfszYgNfL1EwJAbXjCfb3WxYrR3KYAwvWb1PrmuTaMW5TFK",
  "key34": "jij82SJbjDLzKRuDsvUFNC2kkBa1uchwMRWNXLztxujQhhL6CbQRk5L4QSCZEYdNM8oASQs4S4cUx3pP7Q6CR68",
  "key35": "WQdLyGL46SrrSsKUzRWjoCC4Se7o9tQ91aLBT1WXtuzCbt5NcGGvctWbxANaFWSZonQcTbZpgGUiYSVpEmfBiXH",
  "key36": "r1JJ5bajW87Jg5hbegKKP7vipR1ERqrDTJj65aBumr6tEdcJzYQ4TtGh9ewuXBt1MryUigu6au528o8xjYsUBuu",
  "key37": "3u7V1SgAjCaVrvrHJ62YgX2fsRuUtUZ69ekWKg5qBTKyoAhTWSnYFDTpjyzyUePSdHxRnhMWTECNsYiKZpvaibou",
  "key38": "krPHAHo6BMSFhH9fQBjyyLVYzmDQvijDZZ9iEspLC96oNhZ6cGg6P2tNSc11DwFyFYP7AU2uxv4juksEC9mmei4",
  "key39": "bHUxD3vF4v3u3PymHmotGoSye7xRkbb5Bzy4fnHdU8gENSsPMDfeGTVH2exZySCgKDyMzRq8sZ1ccxRUoMAXYSt",
  "key40": "kTg8jjbJMYhDajFG6FVqup54CDkiQDcLHyqjKz6jWRaPPfwdDCSnPj534vvEtbVPmVLMZJWUvzLf4dc3FJR96n8",
  "key41": "2TwrKJGf3isMU1MkgNvREof4hGobiixsevwtfXUGR2pi15MiGhtLuMwts3sJytNSkBExTjDD3wvbiCB1Ea8aN88M"
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
