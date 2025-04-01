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
    "4MCphTLKnWRDcxMaQSVWM4NDy8oqseqxci2WN3uxFLepUnjfdaTPskKMkr3iKyU1JfhajvgzUbhZVCLEB1aPC9sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62edMXYwyUhtJF99HuMYdYhcVrC3G4pgp5J3bimz2ErdZ6ZC53dKHm4VB1riUufmTPE9PnQrH8cA6HCgB1asjw3D",
  "key1": "5rHARb9q5uP7Rn7hn6ojwSLhCnT6r43wgA7byW4YEfohKGKcfvBfhKCBUhRvAe6FWWoeVGP75piKC2aWRy8nRPKy",
  "key2": "4sAYg3kk4ctsZuSk1Qq3EsahE9dzMYfdBDVUYinHbow3nEHtPNgXMdLXMm1nKwJbhpN8Y39WJS6MnqBCo56r5yvY",
  "key3": "2fsuc14qegtkNzCibNGwdLyvULrG6ohs6RbcfxQ1uGUBmgCdnax4xRu27srAWyEQhTmGaaDqXwdmT7c2pnAjBoDL",
  "key4": "328DCwiTPCAmi2MibdJ4g8z4iyBdAPUt1L6bjuNTEUWcFdbKgFBTQTVkaRgFxLFvCSkrM93R1zMWqNMtLx3KqHYj",
  "key5": "5FAbjUSaA8ckVX39y9QabVdTGTmSaKeLQzfJm4aCKp7g7JRuJUz4BEULQE1o49eW6jLmhin7ZkNM75bDUyV1GTB4",
  "key6": "HJJCJwogehS1ejxVgyfsr1LizvzugmqY5NRYEPm7EJjfwAeGbRQntxERk8qcWLB53nSeLkWJfDXg1LJ2XYfEoSQ",
  "key7": "5a7mXBieY28ofso3staG7N5R6gS313QgASWCPS6r29vdAJth2YWyxijFLhiskcEkucd8EWVRjni6qVCN8tLyPNCU",
  "key8": "8di9BjmekjgXa4uQmD976jwymXW6u5D9HGSc3HpBwQMCuFmhSdEscGp2zcvwNuYmP2VmAWg4EUokWN4PGeU5JuK",
  "key9": "CbEjqvg4CcakrcMKdFRUEJxK3abEuc3NFM1cqUfcxsSqix2LmA2W74CqzmVuNzmGnchEc61HpKL7D4GFaCYVYSc",
  "key10": "5r8mFptERhR8Z4cTjG4U9nwWhLgCiUbZtzBnetY73JEQCqWSZYtFmRSfCWcHioqmcz9oYFkZ95PPhf9aKYe97vwt",
  "key11": "5fr8CX4aPfh3JZthXfFw9zk7HHeCaXLpXQU1NGdFxfPajT79a7NdCMDiHFGiNU47o72E1EkJR48MYnUx1P113DoV",
  "key12": "61tLPYHBECnTgizyrSc99TbY5iK6E7arW77emDUDKve5F4QV9jB3Hd8C7Tu23uUx6wSeBFDmqKKSDfFt9bQjSXKW",
  "key13": "rL8q9aff45XwH8v3GgKq5DZsfZN5426xXr1Rqaznpst7ot8v3uvEKDx1dMcCDoQLNdNfhRPNBkikivevbrut93m",
  "key14": "41qn91LhJe5vRTLSNwyC1nzaVayE3RUwYYJc1zZWP16crmJesk4aJzWgnCBzajGhcgwAnr5fx9uwGTq7y6gfz4gu",
  "key15": "2gzA77cjoqCS8g2xUGPBWgkczh2yJ6N7nVMgLLi1zBeXeh9ToCLi23JGg6kmVy4oSCWy6FADSDkgex64DU9m1fik",
  "key16": "53QnuYDW3xtDVyNLa4UfHgxTcfcVSEdNuRfk1zshrTBxCxydX4qCvBmEvzbkpvXSwq21eoz4CErHsR1kjYuHimsj",
  "key17": "4ytqrVchWPGVAPxTbucvJgSfMWC57TxgzM6gHU6U3ekTx9X6TAzWd8gRXG7fTV5jdujtL374vcK9PeGhieXx79Uh",
  "key18": "5D3gbnpVMfdaN8PWtZofaCawRH5ah3nk1gSt8HHi1nQUGoHG4qRkxqviiFvjSx72if7MgwCn6QbNdkVxKBoSJATM",
  "key19": "5T4S7BVCUGgAbpEA1n9aC7m76PGResmRXfZR9AkK7xenJUzJyLS4bmZ3S6WsUjL7v58KfC8Bo2CSgHh8atz8KQFP",
  "key20": "4u7CN6ZLBnBAuHFFhrVDXWZqCc6gSZLz8xN8fUus3tBjXf8F6j9KVzM4CUUR7xCervPt2Snbzh2MvULLwmXWYNZ8",
  "key21": "5Vpdw5YbwaoD4EFcgFAJRzb79yay8EsKM44udEdiN8UhPz7w9FnHgMiXFn2cRMx6QAReBRHXxfDoUnco67p4B7Q9",
  "key22": "35uEGGJRHnxYxCUZikygoFjHoDCof4CJiLps8Uqgo7owSJFoipeyWKoNXuqtoN8vrJ4BnEJdZXdi8e7gihayECwf",
  "key23": "3S9eebnQQskPDH6TNA2rduAN9UVQhzbZMQRt7kupzerZmUJ7z5bMWKkNdwbWogAEg3pBK4caF7zwQFk6DNZixvxQ",
  "key24": "5Np3HFqTKbFFpd518kMDTzAkP3938PXgHt9wWo8ptEHQj6CTvsB9FPmczs1HvSZv3RSPTNrAL4T5z3RFLEnungZY",
  "key25": "4GGZkMGYkvL1DnZxmdrYWntTpLiFAyJEcDoDZFwLU1HDEb8vuKWpkdasQ2AbvZNjL9zSDtM9YEe6PTGkubEdWGv4",
  "key26": "5JXoXgAQvF1tUU59UVCXGNZZLp77v4MhnWibK8WD3Ei7M7MfjHzeWUpYrnEnyzi9t4YJVMt4JWEvCVjxFktWVGpr",
  "key27": "5G5sBYxcn9H4hdq5tjC2RWJmkB6NvB6Udnop7oKZMsH9Fu884AEyuSJDjtdU3AmketFHpoxyF7AWYK53V3uJPDBT",
  "key28": "5CFHNNKEBQoWFZ4GJUVcxozqcb45nmZkJnMDPJfy77aj9MNA5EfyVakNhtYNBRYxwfCwmykEjVuUZHJLLhgDP3Vu",
  "key29": "3KToh3QhFPjssw1izYtnxL9jDuF31cdfdJMLpLDfz1QjgyrRkKpPu23j5z3iUFuCWYqvLsq6vZ1WFV8PqAupHooB",
  "key30": "5SozsHGNf1TaRfrjvbfXijC6JB8e1Wk77zKfZ6zGY8yr5g5RGXeRjP4bhWiM68Cc6XoTAtYX97V9GC7MMik3w4JP",
  "key31": "28diBHZYQoUv66KKkqThFQvU8eyPTFcE8XzBKGiLdohe1HKRPUAdgayhMqGBgnycbpMPBXvEPBcShrby3BhoL4nV",
  "key32": "5peraqpR4Rt1oNKYa1baE8yRMK1SdPd6q1dTjzftSSxQ2ZYSUYpMv1FrvzAAxgXUojnBSBRPysjuXmmT1DvvEG7t",
  "key33": "491Sz2NbinuXCjHmuthxomct6yUNwhVuqji5cQLMBQeTvX2v16V8BDcjHEfNc4ZaHSCGaRi6heQbmQH69sDuunuf",
  "key34": "24t6pnMEM2skqF4QpDL1ojz5HYhjpMiMNkAsy2fV2vZ7jLaznBSJNwru3VFqesqPNDLCuMp1w2vwjsJt8u89zp7T",
  "key35": "4J3CGV2HtuaNKizQtEuEN3FfxriMn3JcRVGxhBAnR23jwyK8ktFmG2ZWKtxKvUJ9778Wtfm4Zgfg74TGKA4g6DT9",
  "key36": "2gLsccUvajL9S17A3g5EkF8UykKkXijBQ8QCwLuDYJFKPAMwkq4HjcMtwT2mpK8tFvW9qNUncCENmDSngDET15wu",
  "key37": "2PyS89MamAXHbcPTLHGxEQc2DNvT4kDhRkdiWDN1HFGwEtTmuCJByuV3mVukTVGTSuZwhVCUU8tnCmpmxzm52891",
  "key38": "4zRpFpGPGnJRqG64uNx3cYvvnn2oYGuVAhAi8K3LxYw12cEfWV3Zf41DcGCfPZgaGoTWXwWzbzh3LAd8jVeaqzgD",
  "key39": "2CmYZCscRA8JZT3zGZ9hZZLUia4tzuS8qBs4br1QeNNXohXURbouwzDXoS1XuPVDMGe3ifLNaECfQw2uTSN8iffK",
  "key40": "4FQmTPi4bGsY5chXcYpx7DDosAME9Bwnn5wcKtdmwxSNiP1A48iYkDfSYiTfhz2BE4pJn1FpFArHdtBE946fBcKs",
  "key41": "5jn5tQngGhyjqHTHhmjdqZZsARbQmWeXvsnVetVUsvvXVKBZm3QaRWwAUXdfo9jujYEM9KUZhuK1qchoaxFCRqTR",
  "key42": "62D87NXaQA7desGb9EvpumndAvS1wMWnqnmWvMokKWVbAvNifREJKMbFmKjnvW1bhA16oX7wdKFPJu3Wxh9Ptqgb",
  "key43": "2Q2PDyZk4Jbrc4TLLzc1mfMc7L1xUKyLeHy3Kc2pqCqdP6bRonDmwgUsxYXgWgy6X92VHyGnVA1LR4SDGZtZLykc",
  "key44": "X4x3JeLyqjiwHFkhbZkf3qa6dq4kKh8iEg8m2baJYiwdM6QAUieWZKoEhCBJ9XdsvNp6aAbKLcJGrNRFkysD1Gj"
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
