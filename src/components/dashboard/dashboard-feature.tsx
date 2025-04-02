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
    "5qCbgr4maAT1P6p4bvi79W2CrTNBDUn9LupMF7MoHTy5oCGJrh2RbPvKKQrYpUXUBe5yrjmoVHofQ8j9uSdQuC2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U47XCHcbpLkCs4zJdSV5m5a1tMvB7Zo8jW5phmxbV6Xmca6Y9ox1TDHs4fexfHyMxPDWQEyq23kihpq4bmC3nNw",
  "key1": "2bBSc7FUe2nwqxoU5WyEtsNsxqeAcVmz3rEr9eMEbdWGPjUXp5Qo34WoaEvX2hoPAL6e6t29MFs4amMqfTFfCZFZ",
  "key2": "5V1sMYeArUggWVc2ZpffpW9BBuxfvADaRPVEaEsQBSAvtTcKdN3u6UihJ6w9p5q8ktM5R93TG1HVwpos2RJUQzWQ",
  "key3": "3bfF1FzoF16hgsuupijmEd6w27BxQgpLDVAsN1CYy13M16Cac4AiXRecPS8YD8YA66CA4jjHSDWGa4eEakHYMtqR",
  "key4": "2Ck2Piqr6ghU8s4JL7pFJ4QazVm4kKvjLiFXNAVHr7xbfwzDMvfTinaaunaSja7ovnqF127eG75LTreeKtARSoPt",
  "key5": "5jdw8UVuc6cLGXcBHosb71jfnrBycVKag8tFwbGF4Rs3Aco2XUdTmxkCiWAu36HpMdfWvxswAepaKevuvoszBVsz",
  "key6": "5PXfDWsNdc6Tvffb1MJsXc5mataP24FKhRZaVFCeQMnutrwqSUMgwJzuSTJx58nxSC16hFnMm1ZAq4mLcSuC3xFE",
  "key7": "5ckipdzjMDrRUbrpG68YBk15cvpKXWUdgCGkVcLaY55NH5iCyEPrKvV6RUYjcnAxf8V5RtzPUtBnzst7MjFVz1ih",
  "key8": "5CtqpK4hBbcciwT2AErRBa1F2BGhNJ5x642Sco7DTyLaCFonNVj5b5N9hJi2WkzaQBFdP3qpqRH6cAJRLYA9EUip",
  "key9": "67E5Nykog46tRp2hQcb6kxEm97YtL1NDCAWHbd5yu4Y52kWhvTVrNW3WnPqPNhYJi9ePUFyiaD8NCtoHnkoSiPHU",
  "key10": "2iHURtMtL8cSWp7APcrjM3NCqGqgaV9m3eFXY7Q1TQV4RCJZoKoizaeSrgYirkR8W7QEt3aREdTJ4fguChyw3YVU",
  "key11": "2zacTiZYY7kneMQ5kHuECwu4PGkGHK68Pta1NS3xUkfHp4dqCfwi4ANQAuWhpsuwhm2rLT3D8Cv9EMpHrza5PVjP",
  "key12": "5KSNbAFKDS8sxd2rsN8ndCVkMZyqk5rQUK8Juy7CzUCk4QgEfUgtvyvvXyCHVPER7LFKTUFpktBjLgPw1h9BenkW",
  "key13": "S4r8mYNReHngjo5weAe2tFpGFupMpCb3zdehnPrntLMFEcvfPVAo2ayVowbTAMRLajMD89nNnf6U3uiqUsXuk1s",
  "key14": "4McUq1HPWRdtRHRq3Ln7ufxbTECvzJPD6fhPiqCwN2vDiiFMbf9nMi3u53cQcz4ombZ4HG3c3NfC1povD4688o1i",
  "key15": "4UztgfGvNNLAvfQVr1f5j7USt3K6fPdJ9xG9cGuJAo8JhgyauzrZqp7uUxzbdnCbuvShrsp71WRrxVEbQY9s8XeQ",
  "key16": "2fGLewQjfA6HqdEvydrhXWisZRi3KZw7gk45ddqgStLiTB1mkEdTg89tihcftorqaks4yuPVmu2psAWSfWaMceiA",
  "key17": "5ivRoXVbbWVKCe2opLd7rXezjUbHWaVfPY5SatSUokmtf4pDAsz1umuXVaDgtFNHQBwTF1sWkEgxRYGKiNWJz21F",
  "key18": "5ERWzFhjjaiz45ydYdk9SX8q8dxUWjM9UNEANuAgJeTfD7ns8SuyKvp8SUy6MupjDCJZdF9htf4BFPcZudmH5fXQ",
  "key19": "3s6JAbZ7JQkGCqPb84ZVfJR7fMtSFnSoeHheRT8QaTJeqVtVw4WEGpEj8Uh1W55VKMR5jQx7D9up4JC2PYM9wZpV",
  "key20": "5bpkS11oLTqn9SwSGLExP4P6pMLTHxTZrHMHaELyMcmW2ztT9hNTziHp6E9Q5ZBx52KNwAcFhnBJ4xNK61FhNjqf",
  "key21": "Ce27VtSodfNxQkAG8s9Av6yA1wEqcsrXeh9fqU3qYu4GJhuBqELtzVkdrmaSAN6sQJyfqQbenoyLskMjSx3SAkw",
  "key22": "5YqHLxxxupPzeuwwmfyNGv1JkwXMU9vGXTtfPrhT5CttNnWLzN6FsUEk4Nqq95nLgBrgB5ZvQekb1C4V1GrCxZ5W",
  "key23": "VqURFVagBd1XXh8xwU2MfEkmGrnFmK7AGbXsdCkbwNNB2nVjCTP4H2xAKKt91pNZ56RPB3DRsyiBNURcCBB6FLq",
  "key24": "5Hq2u1FovQs24XokgvFT4yksj4915MACgHsxCyDzE8b5XEXdzysoCX6gGCKQqRSMKmm3kszCHk8Xv7E9Hxki3Nfc",
  "key25": "61KCgCYhunajhWSGmUE2DEYu6wKQCEBN32nhcYC4smHptrWXk6KhZSj9XmP9uk7j1AnKsdLnFHXvdzLEi5WCu4bZ",
  "key26": "4YB6BryC5PfkysxXJX4ktR5JuLsnnMcUWRbRyUz7P2fnyAuKvoEVBZWFUX19TGLtZXADrzGuhcG8RF2bZnwMmrse",
  "key27": "3sG1WahML8PKuPtw8sAVsSN237K4PuS7NoPowZjEyQ6uoTJYhZZqG7ran8CBHjqGwTfVUZdHXQnuKzMR3MTAhDyq",
  "key28": "4QZcmLqvEYVTnmFoxJwBBrAFtNcCPFYVWA2CZFnWM8ouhvvdbCG6ppZEDcaFwoN8LSQfa2QaVU93QEFNZB18txoB",
  "key29": "6BTwqYLxJimgkvhTPcYY5VVCBzVxvBbXSeg4jzzSWc1u43Dy9yM8Nr6nnRCpzZ2ES8ArsbD23maaFKVMc7DxFat",
  "key30": "66AWsGv9VUBuVphi3ejCv7NUmhEyRkN8LYfJ6Yyzv8LyVAvvpyokJ8wEJKWG36qrmGX41NJkoigmh4oBazoH8ky4",
  "key31": "4PwYAcMwEoBukYMxYo1gLCHwb9k7QTQ5BMWc7MzVQ8buVgNbMmpKLCGzHTozfqVgEEkKuR2WZWsSvkzjDgyaXmt2",
  "key32": "4TRrCAXYNjFA8KJE7hSy2p1X8kMnU75BCDBQ2VZuYduxgyjJQUHvnffCnYpAAWg3dRmFG2knQvqUuHtccaFRmmRW"
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
