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
    "4CSTtynHR4i7VFHGzft89jkhqPTqS48AMsCpD3rt1UuWD23geKxqjBGATejzhcXQo8KbRDiWMj8s9uSLpVWi2ox8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eaxpa8snTSqfhrnQ2tvJ9Zg3MVVzuTzfnRMyqKFtRW7XEPuFSpnjjhTtXvy82AdVXpeztSn82sH9nTtA1oNyrx2",
  "key1": "4R9fud3QZxKGV9cTViPKahRTspSHZm5PBBS4gx8U3TuwyrmntB14hyus9uF5gEcSas7qwDjoXesDxkhqwoAzvkiE",
  "key2": "4i67YMma5PSJxw2i5G46Qf4DKBs9mALmTKxBnQfHX7Gv1ebUo9ePN16pG9s71MMYZsHF2cDtBFp6cnF6JQAnTqX4",
  "key3": "4wQoTCEuKi1GH29ixp44Zinraf4LMqcNTQP8mJBjMRpobDjfpabm5LNtnt6n3wAyN81VQRD7pHWnr6LnoeBR3oNw",
  "key4": "5qhfwJLdeo5wtMpQSFv6eEiWSDVTzkvj9jm6yrRyKazG1GrxY3pmeCzT7LALVKko5hb7d9z5zfCUt5RBxavcg161",
  "key5": "3AxefbQqqRyZJybhGfvSioweoHhpoFCcVYcXvm6Ye4Wm1sHjqryxqnNXtTub51ew8K6y6FpPkuYh5PA7ekWvJWYc",
  "key6": "3kePnWuHpwokrN4ejXNMSdBGUHiwRnsuxvGJsaNeFhzM42n2AfYgqKMbUP7AWS1NCdit4fAzTPqsCwuK6ws3wknY",
  "key7": "5BCKYmLCssyDVxhdJtjVgeddRoqGFVxcUMGcScQqtQFxRiVdcy9k5Av25rgdh6u7HYAC6cQHBysEVcoVE2LZVjcu",
  "key8": "5cTaRLbagpauofS4Y6iws651uX8gf6W5djrFJXjM1whr2XNrHEyD8pn4fuVc12zkqTJpkg9eZ5Hr3izDHtC4393s",
  "key9": "UfwZGGcg7EzEhKxDKbr2nDheDZdVU1EmnqioQoxXguTAr3vDefEb59NBDUbMKGenfMXnxpdawRoWuEHuFg7qQZh",
  "key10": "9qb2TcXrHcAwbK2ytnB63YPWDG8NQtP85qW2j7mSVYgJ22vtqSpZ7rcTvNg3xtfn4uZ1MtXzFp3PyGbMAKdCLUs",
  "key11": "3ppMKRTLHCaTBC6xxMvRGuk22dnpC3TWZVDK25TabY5QMxu1QncJ8je8iezCQHGyiztXKpLb52pDfs6yHQ6sYSKi",
  "key12": "554YdiMp7xb3vMhL2e3Q72auUtDe6KdykvEqWo6nqn57xME8ku8j3z89zCUHzeT4NrkYefowvWbxMznyNdB3c4D4",
  "key13": "5YyWxEqFGZuzqhsQrCoAU751ktESUhh4jfhJYAq6AThL8qpqK9XoGYwUV3Uywr75zzy6su3ePDUDEH1npVCNyVAx",
  "key14": "3fG3pDV5616hThGVVXcCzN2YiPqZXozV9XUbSrgZ6r9wNVMR53rBcdHCJEuS9H4qfMiDd84cTLWPMAgQt9zyQD2T",
  "key15": "5bbwahTRuh9oCuJfJRuch2CLG89Er8NJGc9wBhwjzUHvyZ2toVauxdhLk3ehjvGyHZVgjwody5CoZ2FQBS9YMpjL",
  "key16": "5WsSe11V5YUEZwdkhPHhYiHfr61Ejvz5ShDJVWRjPzcnqugNkpUHhbpWoAp6XtjPPBihNxzQPrwdXpfDRRnJ7LGc",
  "key17": "2zSti3WNfxQP4xb5eqWtxovaHHRhNHLwBFR76nDrZgBW8AZ5t4wJkzSgCToqRPRvdnJSBwxb1kaQPr1pKgvYFuMv",
  "key18": "V4YhBjABCUQ5fi5T4zdyPyBsbmCpMbzMVW4u8yYwfpMjj6PZRyJJSVWVMcSKxqXArbwyHzDwBAjdVe7GxjaZDzT",
  "key19": "4bdEm65RSsbnF5vsGhvZgMtREnaQtTeshmz4beQyQGcTsLSXMdpPXpQRJAh1U46TYC5kh2cs31cHfYrjFASnSv1v",
  "key20": "5XzuMNicQFpoagoMWa7PJRwMmMk5yu9Li6AzTSjaFEQp5uLAxxYj1q8xkZSPBxcNgJYmXSCboraDXVJXJwYHusb",
  "key21": "223T4uSS1JWBTAr2WAsy9HDTaMfYAL2UbHVXq6RJEpkxe4i6fePx7VKpVLJgpcmNFnXk9S6irGVMZVDgS26ngnNZ",
  "key22": "3EL6CRsAndAHDG2MiU9j3j6umZjyzJFpvy5wVnaDr8Ux7GYnPsZg8WsRzHwf2n9awbQZhpQcN3Fq1x5m42nXuLWV",
  "key23": "o2SmzyRBdHXaR2PQxC31TDXDdNMjTdKHPEQRPyNuSR4EfDiSDU14AjuhFmaTubWKk9j13PNWg8Qgs7WsBGYCey5",
  "key24": "5AqdAB4SDMeqDdufGTxNtQQL127DRUZbBgMo4ZDKp9wgZP3fkfvXiLBntqcUyAgUokXEiu83JrjrAFanRbX78fSV",
  "key25": "4wYcHqcSt5RfRBJFcynz6e54WR72tHtbLmwwrHosUT3xPC2tz37oxnaFvR8bodGAb3xKzFf9wFr6rMkJpEZdkYQQ",
  "key26": "63LPsuEAQWYdroZFkEWAQPpLJdtRhswpHfgQZEinBgNLfYWoCBiNZN5Sau5LzSCNE3jvFDCvbxQex8JgjLNWisaT",
  "key27": "43VtHWTDcWzs523sWDcBmSLXdvf4crHmnAFA5LXgqTGWwoYa1Xwg5UVG2SiyCceTcy18jPMaXgLSSjgETsGfMPjZ"
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
