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
    "2tgnrLRvTGPtdw7uMyrteAkCXJggFx62kS3ogpVvQ963jaAXQmKTdPRwuJprT1AgciTXwsb4ueyg8SuD4baiHTdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pzCVWDNsW8vYMWCttweWfeWZjuKuHfHtJR8aRxq8YwTHmoq9B8PpvbKbt7MzstaGRfyiZysjACwzt4WSUsk8eca",
  "key1": "5p5vTYY3AHq3DR3f9mvQXic8jWGJ8arc6oTRCHmkDYpFVDuUVUy8sfheBM7avGRi4chZGVhGVEuxEvYWDbctSc6V",
  "key2": "5fgz8MsrFW8HjcKKsUwodidnQYo55R9jBuXhH2pi4o9HinFeSHuHV9cCYSXMV6tMfkq9FQcNTUJRc1zMFsBZvYTm",
  "key3": "4pf9Z8aY1dwECkwfhjgPDm1xzxAdwb2H6MTqVg738p4VudT9JVeoivbKSWYRhmZMuuXhNd115X69aQkASQsbQS2c",
  "key4": "5DNeHKg3gFxdDs3AHewiDSuNjcGSahcTqkYcetuSQ8BpTGgFrwE2DBqCrN1JXwt1PoC42WVt1SdwZjAH5dHyhGu8",
  "key5": "k1xfJc4QdcTEvC9wjkwyZg8KTGkTdLh7uGteyA83Zwr3YmAUs771VL44q6ytW2rUTx6imWL5qrADs58NUzF5Fqx",
  "key6": "4qpfSqL2ueyrAU71BZFpNk4zkTPY3gAkKsqFCuecePbpXEhdEkQwWovaDWzqWdcPi8wndjaEEt88zJk8jSwB2f23",
  "key7": "3HySTgBeMHM7ifmYz1uQj3QB2MUpcuqptEyZ2JaXBsQWiYcVW5ac9RLndLABeos1CUtUmvxBZAv9a3DruoVe7pBh",
  "key8": "5KuFRJDgnFB7cKKqceFyKuj5sgENqoogs2Sg48rej2CHab3avxC3uPK577mBPgEiT2sUHop9N36QaL5757dr61p3",
  "key9": "LaEim69sVz3kkzLSrzMJaK1PXaa1bgLdZCYVBQssJVmCYbf7YyemDr5gSBEku8XaakuGjoS482P5BpkUJHqtVoL",
  "key10": "2kPSepBThg33EwsxtmuqDrQnbexAAi2Spb4de6cct6o3wKCnxwAu4RRrBGShMobTxYGPF1JTqFGKPCfG43AMNuzh",
  "key11": "DWNEMzbGaj3J84X5jz3VmHr1DtjH47Fy3kn2rUNbLjKdAdhqQ4Ep6suSJvrmhCryfnVkaE3EWpbz2vG6MQCEPVm",
  "key12": "ZezM1yihVcuREq71gdvgojjqW8HxPSdfbomJNtwyVLrXJyfoaUBK3ywCKVKx25hG3apLnap4GgsGPP3NuCbtTgT",
  "key13": "5E37iyxE35BTkXcPfnJHS3kA27PNHUXSXepyVShQFKskVet2kHFvt7sA7rSzw7Uxa363BDrY8UBjraVLj3vUE3A1",
  "key14": "3ae6YWcN3D3UUcnxjZrqXkxC1Zk7JzxU8oVj3H82ttD569QQ4uWGuSHM24hd3mrqeicJwhgq2Vi7wKXWVZx7K5rU",
  "key15": "3QCgwpff16ESkSJ2hzFcM9SDnTTEehoRvSZfxCNg84Soz4mJXEvwa2caexo3jrhhQpL6AaimcqSy7QC6TknDYq7r",
  "key16": "22FYv1RKnuxx7NL6SS3WfSmUgnof6XyTcixrGUz7h8FHETqNkMoFKYX3Rr1zhDKHDEMHWNMcVbuLZV3jryPSvgss",
  "key17": "4hsbJuEmJAWv4FU7tn7AEpxyBNAvuBFpS1ni8act2DgXZexnRdAWtUCPjLvqW9gmVvD1e6gQsMM2PbQxBgQ5jksJ",
  "key18": "3ndpF2DEfqiA16HveerNQFK7sRn515FLfqMYawoG8GiXeKeeoY54LUb4AUKVQMobZxGKDdKVhDEhyPNp8ZHMMqzs",
  "key19": "63oaXfFxgjdRcMpUkgYn3ru2qhkrohTamobrLS8J1nwxYfqCqwbabrYZr4aPV2QUfKBuAToiZmpsAnYEpxKfKn2f",
  "key20": "xrq7kCwiPS9JgPaKjKZkbev9qMkQ773uKLEycn9wD4Zbmw33mEyifbN9EavPb69Um6KLH7fwkUbhzbp1Sn31Txe",
  "key21": "2QMmuY9kDEdojoVvBDgQNYFwbhiMxjYp9jUVyv2yna9RKbmFhYZ5eberM1BonNz2rBUUf4EZBt5LQSmM7NXfmN6A",
  "key22": "3LJ65kGYZdDLfHfkZPY1a8ASPfPEWot5Kqtf8SbgyWvMyHvJFU82BimjVtDpN4pkeF2H41VDg5LERmCuiS2UT1nV",
  "key23": "GwBgq2crXiWxx2XMh1d7dDBrBtRriMyrSpe6oQ4MCjuFNK3yy4WLT5ZwNc7umCJ8jHSBBnZvdtxo2fTdw4GP22D",
  "key24": "3doYsJPXZcHSDDNMb4cpMtiZqTYvdEPmujAFoFbU6hwoCCYhbBFLppFNSKxebSYU8j5Loh3QG2LY7acGKTXFmfgH",
  "key25": "25DR11zk8ELLL5uQ7fuWm3JgJAZ5GQ25xoUUueANyJN9PSX4iuR7CqEEE46c1U4P8MHXqLEnS8frMngxPAirAiBJ",
  "key26": "5xmRT4nY2ifBcyK9dLMDWiz4SPiv247W5x6Yq9zriBFLVYj1g8MNxaonfZAP4VzqqDa4BTVf4izmTnc92SRW2zjf",
  "key27": "3DFn3MuEtnR1x134jJgcTQjnENa6z8oYQtWUVvPfJ6MPpf85epbEAzfk97hZsj2nyART1Yt1qgkbnYh6BLV1C7gV",
  "key28": "22ndxixeJntPRkBLLzNp8W3pnPRChvQt2YgpqyXJfVmf3EDsnUg8KaRhCXuHK7XSZ7QCARxeXeDkemxGVSWUJ1fU",
  "key29": "64Zn18KcishktKX3w1y3zuxj5SLajbcGf3Hkost1mDCtHmQGabKTKZ2ktfLcsfPR9HsCEwCiHfoDH8qQ7U79xo1u",
  "key30": "3seJMba1M7L25cmURWvmxBHcBKB9nQ1kEktdprHx6pxUKdDQ5hSbsgYTDYzgx4JB2E6KaF8nmizjZhM3GRPZZs98",
  "key31": "3d4ptn1ZHrK1VCswK71XH5dXwnee3knX9XoqKEdYVxubyZNHtvUcaQvqqKvkoPGWsBdfct2Vngt266JG8xZkGkZ7",
  "key32": "n9h6djuGjj8dq7VgT3XD6Ns56zQ1gEKZ3wq472KuLGGE6aZ6WPEkFXWuqSEXMvhENGXg5zhiZfSVtqCejsovDXw",
  "key33": "NCUP7G1infkhBb1o6pu8WXcuaYx9F1BDGF6oFBncZZVhfS5xn7haYsbMFWDMfkrREuk3EmXzrBefcnNS2S1qax8",
  "key34": "29ABgZz4nhdX8qL7GeLGd7WjFfKRbc6ig1exJ7BWU5wdEeqUZeDt6AGwwPEjva9PmoN1F7QEHPE2z5ErYTZbVMxd",
  "key35": "pBNT32FxrHhf55LogEteLizVzJkrPRPBo7b7ohE18nn4747BSttSD3RfusnH9BsDpgQVUK7CR9pFYKVhoBvjYDm",
  "key36": "4HtvZ63RS9tY3p5kPMiTTH7CPcD2ffZGVM6yAq5v15jKX6CKxoM5ZR9WM5m8rHCVcoahLckhS6nPLozYtn4wGzsP",
  "key37": "4Gc3gRrd5Kc6VDckkRN82zmveRsAoCCnVTzpHD7W4bNuHCFtoZdb9sNnidsHLxCtbCis5d9XFYZTzmjaMbdSJa9J",
  "key38": "2mGq6PYr5DHmmoHJi5PHqJeufcydR9TtcLHMTpRB9VE3xtN6CRPqbpUmw9KeTDxtapPZtUGwNgcFzXNytfMLQvGD",
  "key39": "2G8yHHcWP9aeoPqiDpmFyXv9hTELbw6zMEtuoRQyQk2gZeYd16cQemhaiCGGnGpVMjjvoTGJ89Mr4C9i7RQiq1vf",
  "key40": "ntYv8ztUYSNoF7WFhRoEXmetaQbd2VoSYvTFTbMDVjqaikxgcRy5J3P8VT48woxSp6PfuQFkAwKdrHuSuBgd5kW",
  "key41": "4DJPQcJS5Q5GPrQUYXwSZnc3FxAWsxJgFBXUyASJsLcDeHA7ptBgBENL5ZirzXjhvRNoR5aRwxEcSkMpBJhksWrj"
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
