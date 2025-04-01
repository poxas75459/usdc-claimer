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
    "ZwthnxAZGGQZNxNbmbyDdieRkUmCm1PEX44toZo9XNPqBBpyaQeqhzCrcouT149H7qzME2Fj3D76fkW9rqLCGSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ChoafY6JYbtvbmyN9pHBLpBxMdUXafykkUJwvvgsrebSpAWcqnhJwFR9Jf99BjJHwKPEUUekqsEx2cgmtNYQLc",
  "key1": "2j3aerWqUpSBY1nuvzmJ38Qs6ANw2NvhNPJQkFj8FniNcPa6voNXwVvixmC186CotJkD62QcNAPPN8bqb2wT9Xcn",
  "key2": "4vtCkuCcFoyKqAb2eKHSDtR9iHXXQnGY4MXjjBWYDLG6sgLee66MkzbrxKp8WNwbiDVTuDEqp8BFp6YAs1xKEVys",
  "key3": "VdgGfydjcS7aE37G6GcrkPvcRHXvDhKMjHMbtqzbJz4i8e2N8JEpr7tYBiM8fAEdQhS2gsz5h5FYqiowWDyLZ4d",
  "key4": "3S2zNSbxpoJXy93M542LfWQzchqnj7Z9WLm8An976adwpX3TzQFQr3kzSqHhfnmWTZ6BNn7JzU8A4sHa2srPUPpW",
  "key5": "5V95yYiqFSdFjY8At1HSifUX2A74v2PDiexnegf4D9oNiq9zsApAGZWa73dLqxPneYmhdpmyLZNNMy5rejhk7VpS",
  "key6": "5fiCP45ksBfEHRs2akNRXfFRAngEhhnEBjENcppiNV9pxDhPLY2MkoEUHTb9FL4bH4xb79GWeQa3ECegieUqTv3N",
  "key7": "3r9PLA6sH2pkkBxwh2Cce7zrXpw6h7HtxGEQs5R7avmnu5zHNu7mmmU4phpWKhMPQaXieLC5qrDs4NJypFE7jcSx",
  "key8": "3QhLpyCPzXrysanMQsZEWEyaVMS4fT3hEuLj8xRZfLwLroEHbm7evcx6TL1FgCcbZSYFGFexg7DdgzxXM2JcL4H6",
  "key9": "4RdoQ7Dw1y89WqeAxx4E2FscC8dSqDDJqoN6Cy637PJSt9vfG8o9N8D6Lbqoc9wHkYdFrUDVZzRjzRv4SGFmX3xk",
  "key10": "3PkE1X3BNQDpe9F2pKcNwPSin75MsT2JtKhbDBar5fPcKjCf7WCiJizbzcdsnB6C28TUFA9Xd6TXPiJa3K4uswhs",
  "key11": "22qSj4r2xoH7MF4gA2Lb3bQvNFdeqgs9yUajSdvgdNYci7Yqq9RYxUWVBnuSzpTkucuVkNReQuspoiUJAVGk442J",
  "key12": "2NPyHvKJooF7q94p1AkReaH1Je53qkVpaTFU398QjuMDDVGERyftMnXjJHaArpC7yYnNSQaKxDkk6xuN34Pt93Dj",
  "key13": "3tHLP7Zqk4RNJ5uTy74F9FUoQTWA1aLFUJjDvWVmU2z9UXN1CF3piWiu4rRTKxExeJNkPTzDecvvcbHbL2FV8y9R",
  "key14": "3k6ikjVxjp2t5H9ugQLUVSTy49fGhesedYPwdkTJPs2gmP9a6hMi5PbrR29jFSn5ScWdGmLHTrtn5Az71Wm23ihh",
  "key15": "2v4Ckwf9ijYrGi8WSg7AmUja37BGS21t66kjkAvkxLvHTp4ZR6TCkoA8HMMiFoB1TJezpEN7a9hJeQA86qEd7ayd",
  "key16": "3QmC18wnTwWinbJtwXTsiX9y5Lu8pFNLVFgcYoGLyMC25NpLoYNPpedyY653uVJz8BLVCH1CFjs9mjssz7nzTwPE",
  "key17": "2DLyM9WGK61LWtEM9RadNz5NY9BXKpJoLur18jFfYf7rUsZknARMyBmt5TC4pxnJqfuwvLH7ykhqWprF6Aav6gtm",
  "key18": "5ycD8D54ns3DTBzveFacmqwcsCkUaKyAsaxkNdrHWVoDo7476oAfzEAPR9TaJmnudLfVHbA2Srq7eLndrGRkJ1Zk",
  "key19": "3zhYXdmW6buwjerC96ykRE8CFuDs6csdvBSbPZ9Reo54TPe77jbRaUPSykrvNHmbBpfr9fJGAaxPtwvnpM48jMcB",
  "key20": "4cwwXMkFptv41MPaSL5ceUo4gSk2QfUxzHfTCcEbCBK3CDThKtykyD8Bm1EDkX8u855ugsZM8pihA9RUkiwVCLnC",
  "key21": "AgMPSu6uLdBy7AL3Ti9BU6zdmK3vyZ7HfjwdQUp75duDBqqooJL5n6cQoVrnGMkLm3kCpmmjU7jStvSREhLypkL",
  "key22": "4mjabcGbEPeNYCKoyJgUYnzj9ZqX2pZAsRBd9nbi4NBXDx2DEJ34VRNWtpoiUNoXQzqNrLJZ8K7PwRVe6m7PYP34",
  "key23": "27QfGt3DpBrXhDqWSzZQGFdMQ5RdhJtLnVRFYWmyZDa5gkrcwTRw61uSbXDbqccJJunqrjpw4G5vC11yaPdTjCHf",
  "key24": "26rX5XD9WtMDVeKqMJaNYTNPzFRLVDyQLh9VKMakVsrkD57tx6tuXZ11kmHAWv9aAuWR2L2uAMguaRMFfAnKfd9b",
  "key25": "2jcNxabNs2Qm1BMTvk3WXhLxHjGsh6r2VnJhiNcQjrzUdZtzza7K2JgSujkpbV4RU3bV9gkaZ7TrJhhThvQhSbUA",
  "key26": "BiKZSeRee3PsfSvtLQ3fVu1FB9Cqx4dLJeoCUxuxygwVtvi6aGrphJxGYkf8egyzf7XLRxeyEZfdKtCuHg8HknQ",
  "key27": "44bv3gG9oYoVKhtgyaefrQA1TuLr6PgEbNLTBfC12hf51ERTuXNZd4JyPGLvEbeUpPsrqRzuGK65zAvQjVaYLWJh",
  "key28": "59uu8164mxbZYDFaN5VZPb1goud8eHi1zwumznyiXzf9uk9y3HuSVdhrUWcHQR26oEL3BtKFKE2MDsW2nX84HT9E",
  "key29": "4VfUQxFcad5LQt7zLi1yH2qha95C6Jkm5KUPAbf3H97GMFSXM6HaELUEFAR35DkYRWnRnfcK91AJEMuNd7rmuXsm",
  "key30": "3CsSXX3kBfnrQWrUjRXGAqph4V1vpTV9saSvYu3uvCLvfJyXMdidxkSn5tjnGUKj7K6NWsRzD2W9cvYCMYswCkNW",
  "key31": "3DYAi1J3tdiM2yprKXqUonz7ZMM34H9a5i85KXtH5FYvspfupDQztSNRm2ABvsbmUxe9BMXBHH1mBSMBSAda5okr",
  "key32": "4dLN5fuYBPFueYyvo3usBZ5i6jY3dDeXWh4CLxwcWTaxkRc23wQZJy4a3YUeK77u2VF9NsTmMsk8enndh92Le1Wj",
  "key33": "5znPyL5Ni8WmkhKzYbXcZrNvrkDtK97b1E6ohfFi8s4oQrsSJcg1LfeN2cNfQXKYfmonc2imQtseexDM5FjGinGj",
  "key34": "2PANG9JDauPmMhds4nTZHL1AiH6Yc7iNt8BxFqUgeefsXLGecMhCGKSUiwZs13kaLMd6kZMMHGMHSzrs3yHdGmYZ",
  "key35": "42iTAABTrFt6KDZuiPhzafBEQjd62WsXNFJezTsrb7NFw3FV2f3KgsXpiZpCncekAaNM85Gz6g7HRmue7x9U8vqz",
  "key36": "h6zj35Hdd1TKDubVUM6BWTioFWhZcAnC1a7pX2rHoMM3pragJJWNSNWVyNLDtVFbnwYArrCj1HAb7waShqdUskM",
  "key37": "514JGqEdYsg2U71ck8FawG8MNcpWgdhue33abaqBof6qL9q7PfNRvuiyfDuEgLYQq41q7N74Aes9x7RMbHZpAZS6",
  "key38": "KGzrBfvXkmqkMLjBqcfYahosKenehdvUhjs2WJETjcDiiGJhviewGaggXbRm1ZoMcmLA9jkCtHMHykdcgJZ9iwd",
  "key39": "64QezSznWhab2DrijGLwEJDaBZAq9iCNFQqB1Q99N58qgkzvX9BuQsSBfPaCbsEvKKu6c42vJMRbp48Xt8FqDSQp",
  "key40": "5GLHuQhaptEF32tQBGDmzUPTb9S5jq6Hcsu3mCjptev6xcwKnmFqp4sN8hdxsrwb7xapVVz95QobvVpEgjVMxmwX",
  "key41": "m5fW6qr6pnSk4Pfxaj4CxBsKRP4mGtA472nTnj1goYXBeHCNpihq6oEqugAsuygCQNP6yiVTRHHUMNgRPZzRbo3"
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
