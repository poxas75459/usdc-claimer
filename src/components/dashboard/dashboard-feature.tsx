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
    "38EhxSWpfzEuMDkwutXLpBWvBz2s8xE6PYJopyUcRMTzPk1kUFGobsW48pjpZH58EZA1Gk1nEKMK5uyxFfPiR6At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6ZdV93G27KZ3NhJ8yrCtZ8KuhpSV9qgWb3AvYt5n5y4isb4heAcH3fMTEyPQQbENqCPryNFj7Uw8iNvD3Zte3N",
  "key1": "4CJCtzA2bVhkkaN4K6aw1f6pDkqmH65zCDKoXDRFUtowapV6Cq3Q6vuBFExmwCBkEcHx2tDFWEpLsiKqL5QQ6NFm",
  "key2": "4WTfBrFz2KjRqeFnysmtsJismy6Cvy3cWmYRTXLVTLP1zkh76ceBdoNip8vqrHuQfahwJJ7paUNXdzNHhqx8i5d7",
  "key3": "2VFJmVKRqn2QJUMfbt7AqnXpvymziHauUj1VnjWGxJpaf6gxeioQdq3STMVT1NUwRiZfQENJ14Lmk82Z1Ne8mAC8",
  "key4": "36qPwnRJfu3mKc2cWeLrY9N3uGvrKAPPjQZqhPJzsUxoY9eH6tph9ZswNGZ1m2EbmSW7pdYdHHghLnD2exyzFA6V",
  "key5": "5GxmKXqBwjpxuqXXscrGg6dBQaU1e2HdAt139SzWcHdV1RfuRSEAqRQRnb1cg8AiSdY1LsEzmob3iJjoTi6Pdztm",
  "key6": "3kiv4G711qksF4gxEJSQBsVjDyJEE1FTT2itAv2u764rfdvVYCz3zZ4sSHLdGWyAic8gBxbAmAjD5JLyRNHdJAW5",
  "key7": "3LpGruUCyFgokL5GLFxebKFdE4ML4eBdx8cGmJKtER64hLmBtctTHBQJpS8qNTEaNxY7C4jZay1U2BsyLtN1Sp5o",
  "key8": "3UcYcPyP1LCLA4WgM47P31uZ7NCAY35F4v1Ry1xAwvXwMdXCUJ65P9XoDHSkeroE8TdXrVxdxeaTACcJNv93yHBs",
  "key9": "2EJYAsnDABRPU4iC272z3M6Drs4sPJMnUhnXLxB5JQohjaJdsFgCS7SP4FZWQ8CXvBFopuUD3NoXJaQTaif3RmnW",
  "key10": "3EGA9zQ9ACQLrkqphakfDkmsxAg968KTxDzyM8cBwz2F2eGnHFpZqehayrXe5YQTTZ5MMHgxpVj5sTYu28hL4sHy",
  "key11": "3mzziaQwHb2DWQ2r63HTUFiBkFk3cpofKtKE6CGyrLHmvZMwPwSqmyf75EbCWLb2HDTYu5CdivPEnnCSZSksa2z",
  "key12": "5BmexjsZ3xPV6t92SGFvhENePvBP6cHBdq3Fa6cVMiMgh26Fm7d9eG7JHYhSLGGQNvo4dgd1QWMs45AwKENofk9v",
  "key13": "3FWPU7MyXPcwK2zqxHZnUf7fRb5wTdjfBPq5dCf4KjkyVyR8sAoMLikSvRpF9Jspp7hb3o2bpycpD4fLb1bRfHX",
  "key14": "4WiXpcR63jUwnGimTWeFgVzm5CYsYb3vxo9WjS8JtFiAx8HpQiUfTSj5Gow45AJtKqufqgAfXjTAGQ1gyk1rE1rG",
  "key15": "z3CScy799QN4GeNQAaysA1fB76AV2a3uxLs7DS7pU9MW1h8jcoQK49oiXXCbNWJbjqHyj6TgEAUYspXAvUoHNh6",
  "key16": "3AdMbPMkDa8D937MwqMefhcPyV3Aqk1ZrdhrFvmWeNGTxv6KTfBRMb316p4XHUsdXpJRTQs6EryNqRsh5eKTEuWf",
  "key17": "jaX3275ZWQjCY96pTdezS8VSunBRimGcancXYn7KSpE5oSNG241tuC7vwxU1qSuJ8G2te7fSBePUyqQeoUgtHo2",
  "key18": "5aDmuBNtV2TrebwzzJU2cLoJwJwhP6VLEpEoQjj21USu9nhVxKGQULpFvLWiYNqoz9tF1tUVX6YCxbWeTV1nhQAU",
  "key19": "2EusYhFiXcHiZhF2Zx7mkqM2uXyQuGHSmAzZhFPRXUSNiX3241ZCFWgv1nTnKonEM86zSGd4UB47VxeJDL6MqLoD",
  "key20": "2cWynERn85dMpxgQUy9AH6YS1Wr49UedgHBQrxj2cvGnoPJDviCKZG4cdLwNFeyYSViVmTzqExcCriAME7Y97PcU",
  "key21": "2px882QtF8QkrHJLtzbeSAeVP3tMJxb7XRK98h4yEMM1zmmsGjuZrjJAnbGB21VoLQ7C9YKg1PCNJ5NqwVqroxPq",
  "key22": "sPCZydsYCYFZSLky3KXwF5cqQqYgHQsFp5ojEXu17fRh2BDoBQaAjicjnxysXkS2VEysSDmMS2EDTGQ276BE6EB",
  "key23": "55K6GATqEVTJwBjD4PHPGFZxQxo4KHyvaNsECgdb3RhAbGshgJz2XWtrFvbHbZNGJkQ8GrcuxJiRTzJPsi1PqTMF",
  "key24": "3zKTZXy59mdLor166oGV9zMYPLy3TthXpNBqvjVeUD49UYomNcUepbGykGkChWBAutcyHaGd3cAAceoomU6VXq41",
  "key25": "Rp9NSgH2qPej1ZYdtN8ncY28YV13vdt6YG6MNNdACFarP4teGnJXPTWJ2LAk8fVYmL88VTAs6BQW3r4a4zjL1vu",
  "key26": "3k7PmLA7ZZumcA49dXBzRnBvt83XV7fmvyMoiAtNYFnpqQckuxgQRAQzBe1r7qyLY55PbZBnZu91Huz2KZtYYS3x",
  "key27": "22HqKAH1emwKj8w4JNNihPo8qdEYNGk1gp67Vo6e7DQy8Mkx8cekQCH4f1sLNtx36uzG26YMmcc5un8jXmpAdpeh",
  "key28": "2BjBdaJ57LgNRSez9QDnDy6VFB1w6h1cJJbgNbTLvpyvRe3GnBWyXVjoQ9WrPiTTCKUfrpbyu9gwHg2MmW3PubuU",
  "key29": "47YjDefhb7h71PtqQ6CRv9QVmVkvvEZdac1CnaZyDYxkSwYPPvCq6eFj7T2zCfW7JwPhS2vqysVV8m83VK1Uucn1",
  "key30": "WqLv3szsz4mKvBjT5jTTpKAxbbk24PuznpYnnzgfyTSJ49sZ52cWbX8G64TQCnhGxexS1BTDxadXLGZUHuaEZNQ",
  "key31": "4aiXTgag6EZbrpYNg3xTjuqUWuyivh3dBQNbAK6pzVWDs8XcFPvTEWMdX1b28ncLmcd1yc3XW7XsUM7gKcE3TLSG",
  "key32": "3Ktc1GiLGH7JXMfBSJXfxqpUpSj1pKZtbEyFxtt6TkaZLS6Jfyf3R9ReUPWLpRd62GoQmqgJ1it4bT9MjiiVeC5i"
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
