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
    "ug6yKrfhX22gn6XuKHB8kbVJtsdLxnFtxPZvCurPWPaygQkAjXpeTPGxQ96BFFiHxZbpgzpT1xYtRA69UvAmSVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oH5WKx7729KXToKTu3sMDhZpVDjeCQAXd9cNUrzyDzy9UYoceTKa8GeLYZdotrgfuv12h4CMZAZkup5ymCdtKn1",
  "key1": "59fJQx7wCMXWfSvkztNmigVYYT4DLft4zBi4BCDSrc4j6f1XaWTJkRedgsVM1SFDn2qQXqm9zngMhu4u1y2Vpvz",
  "key2": "4G8A8sxgJU8afUi7VTfFxTm6xd7R2BhDHWBhaijrhwfhbj9ELFiekHSFqGtTijAmeAN7qM8zsRsodU82YnUbqqMo",
  "key3": "4YDZ81r4jzmmuE5waf7RmVJJvwKs3XPWnKGWnv4nmLgfMK4fXBnyTELkT2zEsUykAPoahBfHJyyLamMgErEGoTX2",
  "key4": "4QKfDirKJJv2g6pjmwFe4PrXRKz45ypN4cKW7pNFeg7NUHsK5u1GNxv5s6JkMV5MnttWv8awamRHuScAqjX7njQC",
  "key5": "4SyQW71H8Bk57AKLJ7EphW9oiQArxtUGDQwWGvLWStCQ77uq6yXBCzh4aeCvJ3hrMtuaXUbtbckg1gpY78JNfLAQ",
  "key6": "3i8WYsuHcDAniN19XRDGGRWh2cuTsyRLQ7DdEzMEyQn4b8K2V4MpMNuEHWiUyZeuaFBZ2sa7YnVWmeX36qZPEWiL",
  "key7": "4VcnGD313BnMsPygHoQ915F4piKMWLRbctNhK13n4gDuNEAQCiXMwjDCUkNNY22RnnzLGBBGNnB8CmAJAybUFQPi",
  "key8": "4WS2nhFkPyaB9KHc5DKTUgsCuWUA5g9CTnE5F3KT4vMbXxqBy3SBD5fcxxRdjcSJPf2G8wBYT6GNEWNDN5ikGS1r",
  "key9": "4TsxeMG8zK7hPewJw3bSBPb9jsoxrhamv138MxJXFuCnq1FK8Wre8ZhsadQ4stHZNJTJHyaJ67vFXcVe4B8vs7ZY",
  "key10": "3EAgb4PLbm9ZwCvNYovxfqCw1jVY9oxaXPxYzMKtrdDbZvNDV8eoDvMZ3WPJQm5rCpE4ZYkEmy67uM1cV2vH38Fd",
  "key11": "5ayMZeqenG9HvpzDG2Dk9LMEE8cQgufzhR18VRervFr3NMwhXiZY25gUBtWCNZYHNVTjLrT69Fk42mE2VuJjvEmk",
  "key12": "58r8b75ck8NxMD38dQftcL1jgcYieFyWRvbRgdV2uWUMFcZ8QnLSLLuX3iaj8gmj9UxNgq3zwqNGF1Qz2RC8Yv1V",
  "key13": "31xqoSsKqGL26VFy4uRwH77a3obGDTYWXLcwg2p5knRQoNqABeyPrSvJDxQMGrfAATVHR2ssPtUFmtQzbS6UVNMo",
  "key14": "588W1D5Yrm6WwJAbS8wgzbDTV47ZvXk3UKBnNa7XD3EAmV5DDFeqoM4XF8hbJztNvoNWZNzTu3pgBARx9E7qH6Mv",
  "key15": "3ZvNBFGqsaaiWG8iLzU9QEkuYMs83VRqnCWk9e92t6tkmsviSk2g53HANqG2wfsxp37Bd47b5et963BerTBG1M6A",
  "key16": "5MwNRvy34GAKABykuRwtwJ3JmwRDaYh9dwkZdj89qTztDNxfz5o8qbvjcbbv4vqwTr4u3ncyi7BEFEJFziY6it5Y",
  "key17": "3Rq4PV5KStnNfHgAicKWf3URsn3LZi2LCz1h2eqtgCyc2zHDAH9EUSh37rBBd2E1gP3o7fSxPNLe649sK5wgmp68",
  "key18": "5wgcVfbN5PHD2GJdfCYtS9TWuedzRYz3sKXB1FVHteKF9qp4aiCrvj4U5UKq3j6tYxnsyZcUfRQx5DHp6rKr1ntQ",
  "key19": "QgihzdYFeqd5fga8dfAVf8YESpDe4D9kzdnnpbVetH94WcsCopRQTZmJqwn2RmcvhpfG447nZwNid54CXZWvq1a",
  "key20": "3hc8Ms5PN4dcpeshZhWmertJuBPASRy4CCH3HWBG8ZM9zsjARWnTY8ZqVzwe75dgTRoeN97Z96mS56rEceJycinr",
  "key21": "3zafevFS5rfuKCYz8mUu1qTQRL1EBXsAKYXmXqbF3263DMSYPtjyJAjwmvy8S4j3PcuA4J3QPqLurG7iZyy2CECe",
  "key22": "474PHYVSPEDyWqiNbKUbkSiPvidKfpqziCS3tW4FG7ACgwKhV9EnJMJyk3LcJE4ki2kJwgHS7CytwjjdKqc8Z2me",
  "key23": "qbzT8DoPoDLRaACySseK1WjRDRUcytbuESipmo33qsifMrab3T2ww9X9VbFyxV4dbfFhEcvixMbrA6pTY2qwH5H",
  "key24": "5riwGPzcKEDJq6ohtnsZHV4uTxAah5d89Th9xhaYr7TSBNXQRwuYhsSXJv4RTU2PFsKsHWvq7jLzgeK89u1bw9HF",
  "key25": "ko6Y1tZRM6ARDYjejncuPEhNz5qy1SwepVDeWSKesa7QUSTkMWMXTmrecedqGxXydANUrKewJDjNMyswAh2AYsU",
  "key26": "5iH3pVvkpVR1mLRCj7JhqeSb5d6vAara3jHsKwn1SBNTJSYrsy6sxqoFQmkUnwEjdfNtKiZ36qvDhygmwV1XKtuA",
  "key27": "2BqaeiMLbxB8brTZzibrx36jMW5RS1HoRW7X2mTQxTAz4ATvmYgG6Vqa9Xe3i38EnSbA3MneEDVG6zzW4kbo7CKY",
  "key28": "eKPVDg57kdXhw8cGcLbhaeopW6oWsdsnKq2cAcxdXHcro9u4hBTrdRquFgArk5vxQAmfEtG9jzwhjiTotiiu3rJ"
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
