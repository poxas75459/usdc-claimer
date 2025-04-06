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
    "3m5Sd6mVRbWvaw1aEZxveBAauy2ksz1LiYkgMovTBmbHu5khcyHTx45foEMoZos7aDwcobqWzmyDi5zu6urZ8WPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWiTycnBJWaB8aPMcxyFpCCJFrcxARssrtAi8G1dcpaqoW1VxE4aeUSFB72T6gKDj2EkZthP9fZji1fhVe3RD26",
  "key1": "29FKgVTQUFhgWDNmDMZMNRto6bY497UNMaM93QuKS8iTUj5LBdFUGLbEXyBwzBnqPoFsxStXGL7wk3MQpRf89Aoy",
  "key2": "ZFpZkL7bLnthFLE3hrBAPAtuwzj6w9g2KGk43p1YBwrnypiu6uvezvX32SRhcDQrYrN2D4EvupnBXN5EJGWYaYX",
  "key3": "AFyk3v6wcvSyJESNeEFTNhecARhyYyhYPufu22uCsU6ajRQ3JARopnauCB8XBNja3dsJxfmdekygLgnyYb41C5Y",
  "key4": "3a6fcwU6AedGirKiC5VSk2u4LTWGTdXUkAWCPNzDyFZq9yBrRTeHh5ujHGrDZaaFGhTKWERycFW5Ur58EFDSpqGz",
  "key5": "279ehUe9kneLFErenzy87KGKN3D2pWFFWXm6UqHytovwubBSyVp5quytK5ADqw6Bbq2UXbrcTGT9cSwubGdjB7QH",
  "key6": "2FQSjZtjP2yQUVju4hFEyGzozUocWgnFBmc2ok3w4Ha5C6zqe5ccH7k61Saz7YK8DA18Q8tZbMdbtTx52KPt3GeE",
  "key7": "5J6YQbHSZrpitEiM2pPvHxcAyuVJmpTTVG6fu9dxu3pF9iFtut774ZSMpefcFrmt14fR9orw44JwBGDVSZ4a1hCz",
  "key8": "2Nrs1PqQLZfg4fhvMtC1wJYSdAav794ExiQvRFCWVpE688aijBs6cUFEVBGC8jTGsDo1zoDgCWjWMKQ6AhReey5",
  "key9": "51vdnY9kmKGr3wfD3iXBetVZhKg7AXcfUbCQZQXS76XQBgmoZjVNhLiFNXD7qKXQ2aWmJoCQQ42eQmL2Vd4W1Wna",
  "key10": "4tPZE7rYLhi7J8QeBesrPouXyV5yuRMyMhYopzDHTbEcVJJ1nAXREitL5sxVNWD6Hwcdbsj3Wwki8ZQDo3sXVh9e",
  "key11": "3gyzDs1nwLDuVGapfZyVWPYb14mzKpbMAyLon2h2tDh1peoEZrFWQZPSSmrDGaZqyQdmVcnmvYa3VMkpgz3Dc2FZ",
  "key12": "4ihRHdka71LXroMUhxDpkHp2i68CHBijunVwWetciRCjMiL2efCPyV4bgqBA9XjGPihQEzUBxyu4KP4G8NYghCim",
  "key13": "24qzKmn9Jhhi4pbb24664xh31rCTimB3uWUUz2CCrsk2aHMiJt597akNjMdakpCeEAcG8hXCPLWt7fj1bkwv5mBt",
  "key14": "3TGYZWTWDSByiEt6adEsnn6ae5iTUtuGKJ9FbViL9ZuXWd6xMJombGWnFjSrYXRDy9izCvfcmRJr5xJu2PRqkJH5",
  "key15": "5b8xpiJKUn5tRB6spfJcFbmmmxy4xj74YqwibqWLbdynqvszbg1wK6ihfHwzzsh65JZNWoRBkwtCAkkWjahWgtsn",
  "key16": "d5kGRXL9StSqMdoW9SGE7F6oKcB4u1K3TbTtn8of6fVGpJT1KSk8kY5iFV7LRpkGf9C23Qo5WGjtdKQRVo5Pgmh",
  "key17": "56hHWgJ2pi91fYvb7stKdvZiT6yQSUydA91T9yWR7qS5D8iPLNZrSEEUkN55R4aE3yTpythyb2S5Mc88V2xPMPKu",
  "key18": "4qwoQrhS1L8URdUMt3SXDqGgau1QoHqTKmRizWoYXZ1eACTM9Kqiq6eXTLNYeh6jEBrNRqdBG3rRJGZe6Tdfi92H",
  "key19": "5yHLYmog2m3cWu5giXC9Wohv8FY7PYsB62hysU38rKNbxFDCpNHjNPJhFYBhmfYBGcWNU6arn5zSABfzcx55QXPt",
  "key20": "LXSXhfNs98Qwt8jSQe2M49sQaEJPS7dNoUiNcU1yAx18Xaphos9E3actVcE6EA7KhV32Wij5WDBcicdxt8D2NfT",
  "key21": "2aS4XLz58UatYzzYTfhFqEWsJZ1KnCkp4RUCtBkBubQw6W8dyZnDeuDBFBAeq1Cg3dnk1VamVbqu77qmDG8MLk8K",
  "key22": "63WDoDi3enbv3eC9QcJqHT7Zo3L3H11TCGaJkeTv7ph8FfFY49PptXgW69j616Yk3RqNiQL2X5p4wMJcZraEB1hN",
  "key23": "1pFckWLD4cqHkKyHfm37h4ozDHrFgKqaqZyveUZYfxiMRuFLCCZLERaH8is5ES2nUXUZFoFGmtocWREjjypmuLy",
  "key24": "5QP2QABRd1NB9DhGi3TKobzbY9rmPioJ9vgD4u2EqEEHo9cGUDXZBPjyGN2EoggXTBgZrNiEW4Q1QFz2j2csupxD",
  "key25": "4RKwAyLjeNthpVWPJBkgPgirMUeaDUHJHJ4fp1k4hMto6bsqhbKyxsgvxL8utWFvdmerD6y4RPgs5tYgDxHyptfD",
  "key26": "4JcfaqAmWzbS7eRGUimXbDnoofhBK9XcfGA9gorocxmKC2e3nb8eM52F6mD3m9pyW1B8ffKyCCmejd7e3U2pnnY3",
  "key27": "5My37LPdzWuXfQYCGNwDutr439hXKJZYRe4BUwHM13c4ajCoA6Qj1D6Kn8VwVBR6MucJwFjBBxYVXjYSyehAGnX7",
  "key28": "39x2GYaqBm9RrGEtYEfE7gkHSazgLM85t4QosSHd5oDJ2xEaXB5ZSXP62JDhMbkP1kjoHfktsg2UYLQr18aESdvo",
  "key29": "WjBzEDDpEfZTnzDiSHYLLSmcHQVP55SC4U3Z2tTc2DKZKHdXUY3zQc13X1RhyDaeT3nEyMdVWqMRh62gyW2gPir",
  "key30": "5ap7U6PFz1siYWGmyLGtigKJRBReD3hLosw5jpAg5dxWx1aa8hKf3N4YcChBkPWHEJxXtkBMUCtEWoZ4PPeRwYCv",
  "key31": "271Yjx7VpmvWe8iKfKgQgXzL5QwhFDDf6zTmhgfU8V2A9BGiRg1g5q8RqbWrp9rHidqWZQdvpwQtLXNH1b4iKJBF",
  "key32": "2EvEm9aJHwLRywGP892jea6q7TxsigzTiLVqVTDQdfKwp5trNUJnd8niKinukGFi6P5jdo7mcCXugnXioGNyej6B",
  "key33": "5DUXbiSEEFND7wg7SYhE4TKV3VyvAxBkdqMY29BdqpRtWhDHgEgaCQ7Poc85FswHDr4vksp9pBMZ6SCesWbEQXdA",
  "key34": "25Takpxeqxh7WfQ93DZnjCq8QHnEqQLMGbp9biMuv59oMMMvZ3tfxLky51iQ5L6Du8dZNTC4qNzEaF8uxQNN75JS",
  "key35": "3n2LxVUuQToAzqASKsWkkcQ8CJtiRpGRgLbS3XuYtzhGhtCBmURVExD5CFHp5oCuLCuoCLU3N83M94UNj82ZCfTW",
  "key36": "aSnr63wYAmpU8FqhQyQi6NkZbrGAvSM47TmqRKw7Za8ovFuEYi5WutnehTef6mJPA9x2jHsFjxcV56KovaEGHB6",
  "key37": "2sjRycod5Fgq8rkgHePjZ51wQAMja4XNi5qNRyrmmEakCezdvHUTFsKXeMWjjdLGjXEwnEPwxgP2qKw8hXCNnemg",
  "key38": "5GwgBMiTxxZt7hBTd5s8HrPF7wGr8UVEEGccxu16boCev8ZYwh6MMssuqMn4wj63tpMfcPeg9oyEoc6CQgZRiNjf",
  "key39": "44bngG1SZSZYonB2dV6buEVXCUDZ6egT3qPA1bVBP6dyh4dGLsagxR9aYQ6RM8d7gPEVzLaywzskR3kGsjjFBi97"
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
