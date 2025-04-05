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
    "5HZa82eT9weNbu14db3dhGzzJ8VvWZw98m3eCCs5n8KncEv1RWLuNr6sFmkafnx1HUDqEXxfUR21VgwVV4AdEd4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38c1z5TWxyhLEJ1rZbMtg9UHpvZkExQciL3w9cyzuTt5CqJpE5sPiGcvYQoCesvJrAieyqLUUyNfzWJfdze2gJAr",
  "key1": "2vtaQrdNrKJgYMmTfihDJi24ng3wzy91SCs2zLJhp4HrXGB51jbWq8T3zZkesfNeBiwkeHdxhVKNoaRCNBYa9uM1",
  "key2": "2BkvB9GQgueBC47Eh5NrZfQdeDWmCHqqWasNZKarAtynpRa5yx5WrXT6S6YGMrZrpjLTsr1E4ijSviWn5QGkNbDK",
  "key3": "43dCCUuiu8JgUoupFfybrjJeo35HSKZvb9NQbPMH5EyKdsD3Z4n3qEECdMfEQ4cHNdpaBnhRQZLMaoohULdwPyRt",
  "key4": "35HLutj59rRdMwVY8Ent5x45mKWfnuNTtEU8Jfvk5MpWExqS55DxaCBrLbT3AxWDtUJYThXXoSTVP183GVv7a3ma",
  "key5": "2FfPQaiJR1Uzm3w77Tefc1ZnTNqETvpCVdmiGEjdGheV4r6zCB9UsVTrADkyhoGHhCQSy3dkYAzKXwNAQNxBjqHh",
  "key6": "63NcCd3bhRukYaPUxh2VfmQmPpNmTNURsPrRQWXRUPEfgriHamvdSAfrccGxrGCZFKAKJ74eCAriETmmBNyK8RnF",
  "key7": "5Dqscnd4iRdJepjokaSNfjatoNFwUGmwk7fDp1fCKW6BvJst38KXiAo5CdSk2SSazkQmBDhFN9Wpvq5eEe3wcta3",
  "key8": "4MUZeA2dC5giYpi2xVBELFJJmyhk4G4S2N8JkQBsABhEvXKuHg962gSpdMrM1WfJBM9XHGJ7uSfeXM472xjr6hjc",
  "key9": "5HcsyjTc63qWscvGiFA1Poj7jZB38MQFLiF1XKYhthucVRpcNvf9UuV2L47upRq3yPB5jjc6jhgiHkqPhGwNGiFG",
  "key10": "5Bi1LhiWpr2PGD1rCGnh5tidDHqgbVNwUsfK5ayMxDj7XgpfMoc5551h3AM1hLozahXy7qFE6Lkd2QYxWMcTJxnu",
  "key11": "4R6XV9wF8td9ToCBhkXy9ugr6RVGDagUj43F8fRfxRihEbUrcu79vigKL9b5e9nFSadLSZec7cqSP1f3s1jgsK6w",
  "key12": "yfUvK8VyW9JuQo85o8nRv725SvyAHp1Ex1uqC6d6DcSfqfADrgYgsxDH2AREhVmoLt3H9TiK5AdEgiH5pJNfAQw",
  "key13": "21t5tvoxUomKsHRHBueeH1ukkTXQoWW5w51WLJihRtCboD9SWLJ4HQBxVFiak1mv4fHeW6zC83GPRFXRFHXVzrN6",
  "key14": "MWR93jM2gPxg6j8P2iWJfujh4GGq3xVspZvS41kUZzFNdFpuqqZ6NVCEb13Fz4f3YiRPCtnpyiMS2ZC6JjyRiQv",
  "key15": "2ZstKCP5R7UuDLGXZhSKNb1qzBqV7v7Kpfz3CzAqTSunyFbqKgYB2xLs9cq9BNxyZzjd3XNpGRwXPQjeRjocrXWU",
  "key16": "4vSvuZPUpQ6T2rm2jdsUCLLDikt6CGGqpD7xHS1aYwh26MxWcUR4jQe4b31DP2qbZG9xtrpDb3TKYQuDndZUgCP",
  "key17": "25MfzhGaZJxfRHqfTgUm7kaNbxpyLWzwAm5xMkyN9avV18ZwdMUHhhUpW8bZkrFgoqwFuMKbK42twignMQzm3eW4",
  "key18": "QPDpitvFXcABN56jkXikqFo7du8Ft2kyttxLcVAZd67iSHZaTuqb3N6cQsRQV9cexpoyhPPUK5dZ4XadmXeHnuC",
  "key19": "5P2wAzDWQCiMjxEGJdcdzYXCSGEgXVubdz5AhKenb7S3pr7SdyX8aukJDaGA82GFtW6e3ML7JuGnVMePr8mKhCpH",
  "key20": "PZzZYp2btUzRVuER45daYp2p1PBfnQJG2DmoRcHxsixPjPpYSDw5pWHtjKCrDnDihpj6QU7iGt2eSKUismi6po2",
  "key21": "21H8Q7xMFAZWYxMh2P2sWyBMKe4Yzb1axUdRMqCgZSFAZevBnAM4ytABNxVNXXTnUvdnEBjFBtutagV68ZdjyESV",
  "key22": "4tuWiT7kBPCRWobohcWhjL1mPyLeWnQF5tUjMAHjx4QT1kBoUH6Z6Nm2tW16p6LxDiWXWcnzCr3XtRvWqxY1c3hy",
  "key23": "4JG1vmtw89Km1Nze7mtoV8oMRtmargF4U2MeWY2rvAYtsKDpyLjMxid3gTqHQfRdiJw7ucCCSrJuTJBADQDibhkt",
  "key24": "4Ycov6c8qAz7uBmGPZV9Kowi8EHs1pnygVbv2EqnXb6zGEPcYPS6Aqv6KRSGTE6ZX2US9D6PVMQKAXbbBtdPtfkr",
  "key25": "MLj44udHfLFK5AQVbFqDkcXqUG4haJrfkqvWpGjL5xiNRCR9RcZS5X8vCrkTpKZorMzMx1GS9egDFY9gWakQsxs",
  "key26": "2u4Cyj2MsahnMZVCABMgnetZEqVYxbnfYFiTbhAGvMNCscAYn8HDEok2WK8xmLaGbLP3EGvdSqVCwwXT1swainTs",
  "key27": "YzMCmc8nCRdbrpLuPGVKP3tTTpSayUJQLKtYQcLLVoijer5sFSvPVJ5rvXCHMNfdBTeBeV1ckwnjzgJxPB1jLBU",
  "key28": "3iX9dwcGCvoVaNM592buvmTASybr9915AJ6s7JbxJ5N7jursfGe6oCxYp4QfnoSHv6Rv3LYu8NknddMKoomyFoEw",
  "key29": "4PLDhfBaYNtWEFeeLyRm5g3NNMU3SCqqHEYK2NiHfyBhNY4zja2G52aUGvc9kbrHC8ZN5NscbUjtbmPXpjEBkYF6",
  "key30": "3evsfVB5K5CNunrcxy8U3wxVUXU47ZHdac4bbDxQtdfQgopQ85n5vA3tUyJLkVzGYUPNYitTDC6wzhv7ignpfCZM",
  "key31": "4gVuyyrVVjYNPd8y6tQW6D7GJhvmegQdew5ucv6zE4XG9XAS55eMbV5SEtjKLGDYTiNWczD1nCoV1v4RF11x8cFV",
  "key32": "a18HbNLAzMPnN3cSmJD8hYiKcezfpxwpyCBE84DY4HoC85ugkUTP4p7fAwxmeYzX5HzEFNoeV9dAHEeLis1x1eD",
  "key33": "Mj3NMpSKP6ojZQCF9QavcN5Xegf59tuVHRjNAmy5xB8cbY9QdD5YGkTGMyA5m5Q4PyL6fQ4uyinjwAebrrF74cp",
  "key34": "2L1t13vBLLR7EfUqqZe321rUfXsFcV4zQwak88bLqMRmRzTx5q3LrMnGzMawCy2UyyyC6tMr6uWBuDtGXctfuAP7"
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
