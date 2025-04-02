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
    "3Dr6GAXrsAjrqh6Y9nazMR8JbZsyKQ9Bs2c7FsUfJHfZ8dk7Jgrq2mokHBMeojHLNUNkHwRKfA4fFBtHBvbcHWeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJDsAV6xAnZxZFFS6xExpiqZz6zTikA6qi1LVxaKgVYDA7cTYeJwyBSC4TJRvcgSog5naVJGDTexKzWxHkts7tR",
  "key1": "2rYqaqunzxCSsmVyw9TK2Vyaw96Cmu9rF5HbRWujLAoUchciUCmNZxnAre9ZnekBrW4grDrrJuaGTh4Bau7aGKkR",
  "key2": "5kv3W17qubi5WQhG1DMGtdapYp7rDDyrbYmU2Zn6BKgtNHWZxoN4HV5ZihXCdsT8Dsfrep6tFN4wsFQGZZ5fqQb8",
  "key3": "2YfveVW2qzikFDjGno4RqQA5VfhWwpBQw2HRoqTzeV2A68SAunxnRxFs7J9RDE5o21kNmHngh2AAY8Ru3CSkCs11",
  "key4": "3RRBs66Fs681ufmqY2bya3HuVw3Y2LHi3ZdVuqJ1TGXfsD5J75EMmDEeaDg1fpcG1CpsSM7sb6kpYeb9fHf1Fiig",
  "key5": "3fQMd4LVy7hvdNvqymWWpSNkFvGpi2sNWSaTTyc1d2ugFCtZ1p6o8n3CY5iTTC8UW7GfpJPWd8h81UGQsFMhLT4c",
  "key6": "6bh1rjhvsjPf9KdBEoR1GsZaxHZdjwu51FG8G7LQojWiY6mCnPZFAdXm3QjVtLD54mp9hnuvXNjmpPadLgWtWy3",
  "key7": "5H4LC8bXnrjggfq7Ycggh1hpJVsnyftqeTFSoWSiu7fVc7bNa3ewj6CbCtXoWRUbJWSb5CQTzQDxPPQHeYz9D9Ms",
  "key8": "3kkCL6vdrvf1LLE45fPaBvuxxtZLcEnLhGLWFvQpXkwSBw6u8LPnpAgX2mxpfUavhSAk7zbbBhrrDR9GaJh5GHYW",
  "key9": "3VHqDBuCResR64DE2ytFxHNo69rjfvwZUdbFk7nr7d6oqcSmpEsD5aerApHxeh9GLJrcViQUxqWKZP6PQdiLjjBy",
  "key10": "5PFHEykYiLAW6rpW9fpVrCYRFZm3e5HcDw2uaP1fyHLyv15LSoJ6kGGfAK91Kq7ez2B117ax85nErghhewsPvEoc",
  "key11": "2o6tf6ZHCzfBP7SmVo2mEipEotuv7sQKfooDwGAZikxLEpn7hXBbHtfHNw4tr5c93XxrjmX9kXoa8QUqE3frJBg1",
  "key12": "4b6QRwXUoLpx6LTx4BrWa7oKJd888b7DCXvfRvSzoHNeMaiFdo7XKGF2uVAWY9r7giH1TL52a3qxVtG9EjFwLSa4",
  "key13": "ECvERNJvBpzbYKX6qHya881BubX6P8T6puHToXrAgDhhtLAyqGZCxGtp7sTLTVAe9mCiHnrdWC92MqMc1NBcRTC",
  "key14": "gYmopoYHEupctkn67HHsAahSuzmSQWvRrGRE8dfZN8gHc8UT8vk1DgnqWo1kGuTr3LjySKWFoAhBfCFxQYnyDhx",
  "key15": "2JimmNC8Nz96AfUN62WBz3rbT5c47VYsU1BXaWU3QB5agcR4GVu5YPpajH18V3r2wkawiu1BaYUA57VKi1e4bead",
  "key16": "4yzaFaofxv4BzCm3J7nn3fN3neRmMgHZPedcebYxMyA93AjN2ak499EcbhiX5xyKmf7V4DqnRaZ8ufdPVzRkJcDs",
  "key17": "5YWtmAQart9RtS6mQNztThjgQZmxozN9YeYaXwPHf65P9z2BdUoqLfrr1HCjjvspEPo38xsMrzdK2dnRzkov2Qsz",
  "key18": "67Kemnrr3cjDju9SPct82qNspPa1cSV49DoJAvEi8228BLUSEw4Pm42SvAURP6TiTRhk7s75CiCUrJPdG3juzYzm",
  "key19": "UVuMqR1WyMqfk9TzL7UNufWfsvJGaViVH2s6h8yi9MJpgvoFxoAAF3h6JMCwhiGxJtZxmKwTwGiccsVS3EfPW5b",
  "key20": "5Y5Rdf3d63EFfQfdUtT2paVgMpxYUnR2JwVnxMvgpofEfEdBaqVhLgJAcWLFk2c92HbvuGYW1fS5K2Koa2CbiL8M",
  "key21": "3fPb83JWEbpcWEfLGeiW7NBnnEUdxYYgv59f5Upq2qQJAxn6bXqeTaawKcYx8iU4bMtHtMiLzSyyzfs755RGPFG6",
  "key22": "4VNjMBQS9UqmWxNehdUKQ2coY7BNHUkzyXVMmScc45D9ztLpjBeB1Fe5d2WsG4Fr2iMUE66Rx3zREuC94x3H9EKp",
  "key23": "3nQCRK6our335PHr8SM3huK3sJf4eN95PbFXRtk4wke1KTYvbCGD98MXXUv4pXmdpdjaLTZU7U7UzP87wZVA9AG2",
  "key24": "gwbkEtApj1BwiCg9nMWY5k3rbLNCeYM8ByGsWvGGJbp1eCpipU4U7peGGHeLYtaiZDAg11Sda9pZcQRcb4955AH",
  "key25": "5gKXVmeTHBjdEaWZeDLdNo72WALChJWGqWVUREbjyUc1H6N7fSmv883vFMKfLKDud8L6oqLMnW3m9jWBMJeuVMQk",
  "key26": "2YM6e8MqF4fYPwHpehSgj3qDQPmb9R5jK73KffAgpYZETj9Q3XrABMNbccuYHQsF1SBbHpvbowmebXty5cbQCqA4",
  "key27": "3rqfFWbwTTgedRgndSEubVc19yAPaoJsWeLoS3k8LmJC3E9asK9empx1deDFaDyENSNemFAVBFW8fKzaUZJBY2Vq",
  "key28": "3N9uUpTcVacQYruvAKmRUTgBdJmfRM7DYe3kSHuw2BpfoSRcBt73LD3a4zeoCjHBHPDrWeFvE35irsmeEd8RM4Ts",
  "key29": "57JdbKB1o4w8Xr3Z9wL58PYC5tqH8MsYwjij2hUJjvjhku5y9F2DY5xEWnKfeU1vfFSHAWYC2LuT4chHcfYH7CpG",
  "key30": "3xWXVo6JKgswKiVpkpkCsW9rLknigMdoDPBr3mf4tSR1mLRDXbemVpSH6tDjt9mvvKsUqY5fNCAXuZkBxgqWVJvz"
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
