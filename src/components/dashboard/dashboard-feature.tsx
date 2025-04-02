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
    "3jfeSu46s9qRBVdKrU1csF32Xhm1aUYXusepTy5oZUsp6ru3V9xnMUoUwHUeZDPnGRCBBYxg8TdsW26uH9bztRse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rc9cgHDsYaN1LaxuWn7LXdxxCt9VKuJHzrAiB4dtBL48xcWP76vaByqHsNAx6YkqVuZGaVDWoQg47ybahBzDD84",
  "key1": "3X9dgmmhusomVPcnqfoa3ruWZhbohCghRAPj2LWTdum9H1UfAx4ZRkCR8uC4BWiqawERj7EybXsAqTG7saWrAWMU",
  "key2": "3P5zrHcinZdrUsN3Dn8iRCoAVQxWRVguTYrdM5wjRjXBDTn1XUAfeTg7KjtTQYMoro2Acue6hwDAvfVaJEdra4GZ",
  "key3": "36yVyueKwFvZsG5RkQNLjR26iyRmob8Uz5kzgbqgdjaPqZxUmNirymNeTxJzSYFpCRegzejgkwrRxTSNxwxD24DL",
  "key4": "3wFwRT5ubkah3jitm4RqhNPQUszzfiEcvVwsF5s9tdA3rUG9Jny5qaYGh8BAj7Q2MsbdN9DNbXAJsFyDyLNFZyKg",
  "key5": "5ju5PfSYsCjzNAvMABpUXH3sSWMY5LUCgeq3KeN1aFX9DpP79JGFprAEisAFginD5t1ECEtis2wFhWJkzHfH841W",
  "key6": "4pobpfWwtFyRMNLmYJB5j9nwHoSP6H4MkzHB78dv3f7vzMxgZ1CLHdpZGKjvv2YVR9vHUJJMX7XSN4a94h4pE1xL",
  "key7": "43PBPhYu74bMPaQ1Fvfs8Hs5eeqPfp8PzDonwdBgjR8vDRWEvw3dzucfMmoF6gx6qw2jy3wBuz6tEUv6ZUgBdgih",
  "key8": "5PAkoB45ztbxgBRsYDAotmB4WozHKtyK3SSZSATGFmwLHUFCAXUCf5zL9uk6umoy2nhBbgLcw9vM9djCzXbZSQS4",
  "key9": "53BZKxiPMA1q96gU6VPX1MQjWRcRMAsib4Va6eABgf4idXW5NmwT95r2K5cXKHqLYSpNV4fBLjad6JX5So8v6eC1",
  "key10": "5CJJto5JbGroxFSJpDdsHa6vmP95vMDUDFydFnk4Rvsu2nbJp6Ncn2H31VZTAwAHEe1pxXo1FJBaQgp4SAetGmHq",
  "key11": "B8QPJCthp4cvQHS8EmYgDbZwiifCecdh91k1QE89tHPsC1Wh3oC5qXPoAyhK4FhMU4Mru5CJUCecBqFDDW9pNCd",
  "key12": "PKqDTBanaCUyFaB6wRLiGrxguRUY88BzaWdwtYf4YVjCskHmGG6KeHKHuvXvrjSTxvfAF8PqYDod1BDnmAdG4Cx",
  "key13": "45Xnt2b9sf9QwvjNFwjDfdKU6bVrfLJCTZCQpU3yLKVC7WUJ93hXEgpsEfH215XxnsDjZCG1Ynaxjk9327jmGr7W",
  "key14": "qLSFUriSJqGDfVA7npGcdUvkncD6TCaKdAKBEU7Gp2eW3S8AEs1fh8usqLQskEEBMW3FERKZarsLS8iCjc3E9mo",
  "key15": "2281jfUgCVGmZhBkG4TFDv7qffXUi2cGG7dHBEyc9iFvF8YQCSPfkJm4eq8XndSrU7q2pwLDfSi4sDWb2QEZ9ETe",
  "key16": "2iuSJc5EA6jrPEHwW893Hcxp3wemSHLGYiUswohPgFqHLw61P5Vp63fXKrZiWgk8jHEoBR76ws6eGCmZ3qiRocZv",
  "key17": "38who9g4gFR8Dsh31pxXDJQjen9LnMx5zHKE79k9A6mRNDifHzeL22wC7VcSYZivWksQnR18idgDRKWqtCf7JByY",
  "key18": "2DR9767KuLQkxb6rsjYHLHMXDmsHTUjaiYMCh6Kjg3SiJWgdduEYvGrmyGPCBoxXahJDyxNE4EzBJCxsShVcA5NK",
  "key19": "vuTrUJrsxgsm9BPY76KduHxhk6UMJ8QyodWfMnCmNisABnD9e1ofwoKreYmSiu5GNQaMV6Bo4DZze67EtjHKagQ",
  "key20": "36wqvGbkDxUCMx2eux5Fb8wojhkaxeU71DSotwutggRL83ShPydMadGXApGda4ZsuQvcHh8MachcviuTW8fiZWfz",
  "key21": "4EqgPmxy69qgwjy5Tdy35i8qEZPCEasy5CQiMmZyjFsQ2oxySMdqC3eSGQHr5TPgfH6HhZeJNqXu9A3bkN6HMW4C",
  "key22": "Wf19kJYpv1KtyFGcbr6DjYUo6BE1azvJrAEvLfNjwatPZCARAGnnzxo3De5PhTNQuUtqjRD6gYW9hC3s9TPW3He",
  "key23": "2DCaSyGyN4xWFgTuSbf2vHeWAFuyhehEy6Qjx8qdTk72E5HEmZArJBwisRBgMdafWVLbsL2pEEifm5Yeqo92zwxr",
  "key24": "2HUQVmE889sRKFMJeGZbD1E6jS7SmkoH5x5ZABmRcQZCFDbS4GKsj2seBCze9tqTcEhmGHgexRjv83qnpuBdwKUN",
  "key25": "hHKUbAQWy6QZJYSY87XVL7hrFAJuhmmGFFAwt7tLYP9th9mRxshL3ns8Hi1CRK8Lt3GKP4BUqeffGH1Q2MtKDoR",
  "key26": "y52FCe8ZNHaKtKUCRhmnt4VzhpGZFoJZWfu4VmWwAguEmboUryYGGtbPwV17kyw3BnooTbaSAhRPUpVNN5ezpFB",
  "key27": "3g2ZDWv4s41k6mnQA1h2XYU4gkQx9H1XDHmDyjBXXMhQRycpbynz3aethneoRpJ1a7JazQ4C3ryRHdcge396maub",
  "key28": "2FSt9CFCRpDqsyHaLZzmJYWKk9ZoB9iKjS3SjjwJatxFrU6g85LmNkVcqCX6dw6vYv2AqSXyE35yE43uYTswKPXp",
  "key29": "4StXmXhkitc9q4vana2rS8frLCVdKGvezn4wHKjCZLDG1KvpaMnunG1ASgef7dUQx8VEyYfftdPVNAaJpmxFvQ2k",
  "key30": "4CuX393i24ncgnkd3axcBRFAjwibYVBoGtMFV9CT6XKdw2py36afSVqxCK3GRRaZAR3hxMGjhsEh9MAHrV9CfX98",
  "key31": "3nhL3wr4tccZ43oHYmYMkAms8Mk3f9x6npVLkE41GrJwszVZ65iR9fZJ4wZj8naJjnF6evTGX4EZLNPojMhQHuVR",
  "key32": "5fqBd6Fyxmys63ffebp6iFq91GCG2XzyEsFUYtfrC9gkmtpDoqsD96Nzaqv4u68citea9d1m38BGVxBdVRZbyjWg",
  "key33": "4SJVLH65sUyTFsZtW7StRw64NXS5nUNHjGs9iLgzA54BCpWUNsopMJmdVSxRo5Pvc66TVW8EXSV2SxSVaVRiu8t",
  "key34": "58DuMz6L3JoQHCLbrvqms2Vy3gckzhirmwJE2sXSpGMGDSUszVEGyLpKvy6XrdCs7amfEk5hGgqKr1hSQHcBpb5m",
  "key35": "2Y7jah7ehzpZja4wXB3ZTm2ThxRMDPp5VgSe1BFxY3xuyGm1nnwK9p4XBqJPLJ5TrDk2J74ovQ3ENcsUjZCveZWb",
  "key36": "31PVvXYWS4xNpdYdiyPikPGKiTrtRmtQGFhDRN99ukfEcbrYKDxfXbiBHWuqgjEt4u4q76Tur1avQoSr9ccFkNAS",
  "key37": "2XoUgDMG9nRqNpkWt9TcqPMmgPdWyX5vfWDB3YPiJmJAZJa59NeMgTAhwv7jUmBpRAxGVYxfV2cD24XK9wbiChqi",
  "key38": "56wR5kV5SrvmmepUgoTSdz44Vv9uzjp22PF9ks4sB2fzKZTbYkw8HDSF53GnxANeNYhViZqUnv3LXPWjVto5iavp",
  "key39": "2s5KXZqPjgSodTTRN4kdY3PVx47tH7Y5yRH1Fk59mjVMr4GJPe2tg8oW9nVkhvDBnu9o5bZMMTtxhsUGK4n3yDpK",
  "key40": "Kug7bteHPs1BNAadX4uBaUUipnqgjjXn31MvwUptLGqmWrvUzHjKe394oGzwJXH8LN4ZeTSxHS3yUqC3b3gNENA",
  "key41": "r4CtB3Pp3BomykGLLbMc74UqCKGJUJo4YW6uun7Tabg3KyBPmSj95A7V1hWgJHMBuqTYrvGstf1kXPBsFqDPfXA",
  "key42": "5oog8XmohvR2hDCC8JHfrvdG7vs82pCut2P4dUcEeMdc2S7tyDLGSjDAB1MqCagU8aJb5P3PmEA4gcX8VGNegWXL",
  "key43": "43Gb1DDpyPvqx17wJtfPjVWoRay25M6NGKVqqnicEroWqeZEYafdV9Wsp1JgF8iSrkujjVmpxZhre3aXFQxWXJLE",
  "key44": "5U8NJJ3MnChHpXmKQMnDperW7Dc5SHP3YiqebBeZRAozak76wKfLywGs6QUqeonMJXuMVSJqrmkHwRk85AdzbHp8",
  "key45": "sm5YFEXYLnAgTD631gN2F1NP68B4jat3SsGCMsf7kFGm9z4QL8ioEe25NqV9y5LfdE3EdcHRe71K43kEKMRkv5m",
  "key46": "2BR8bV7suZDwSX8eF3yyB6FuL2ZoSSJwFikuxKgGZ4QFPDP21ZRNVbM7tMDXrViTy7B8qwvW5cJkRhtvq8in79iR",
  "key47": "vgrZrqGZR5M273qrASeydgnrHV6gurNknt4jcFE4L3tu6AZydBJCDmy29dLpZpkqD41w62aLeLp9ojge1Euw7DP",
  "key48": "3okpj24sEq5kyeseqic2KKvM9qMQCeA6xbxjUiqXwS1f3QPJqrrLHJyMpdoe7pE8sA5J4zbEF5sSUKzCAng5nvni"
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
