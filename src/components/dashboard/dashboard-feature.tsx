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
    "4BNLpyuMCijjCY4fqp1ER1KdKEpRCMfbnWdNikb5JkpRFcV3cX1QS9HVfccBtKDkzosUQrazhb2gi23vg3XEzvy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1Lah3n5MvLf126PrN9zjjbH9Z36teP2pXiQhxv9AGNwg73wWptNcoUtBkYFGVMyqc1jSbafhS9jU7jsCfRHNn7",
  "key1": "3XxVLtQcs2qrDJjM7Atiz9Af6mQY5rsJhrvJvd25uTPSFy2ie7T5yxxkYa2HNsb5AUUxgs3Mq6juzFjVj9vudDJ6",
  "key2": "1AYNx4QuaYvUiQULJyLbmCHvQgytDLMsbkWQqJy5eeavDTZ1Hk7vu3d25tEXi4x1n1CoDfa2ZjpBkNK37TgPRis",
  "key3": "33xnXSTLWBTX9tLuY76cx3RfkCu9XwLdYhPQT1VokG7XwyAnxWESAGDJLTVuRa5aoU8fcjyvWPUSbKg1F2tsQT14",
  "key4": "4Yz5XdYwrdi1PWoPgjabH65E3fu1pUn4GmJe5jeEKbYpjHdKqPrwmF3xR68NsvuDe88Zviq8LGGzmP9gEiKR3y8a",
  "key5": "D8FKeEaMJF7CTQ7yR5496DwkptmaSqrrRkVkCd5L2BHZX9N7U95eSXzjh7seY2kfRFhqponddsBi7zYQ4CTmLZa",
  "key6": "24mvtTVKSsnrBqKuijg23iW8fRhgiQova8q9Pja59WZrxVTaxhpn34VgCGnuMZ6ZGcJhbQsR61YAi7uWDW9BQfwg",
  "key7": "J2CRGS9sf5ZiVPct1qJ6PbRBF9S61bnLA82c6D1ttLXBY2ZPAgjfm7LBSzTYcmB7ebm3LqL2x5YkEJYoLNaBzpr",
  "key8": "4Ef8RmAxamD9SLzosRSXvBzg3oU1E4v1SuBMXY3Mv2AX4GZYSWCPRbFShpsLW1FUoY5PELMz73bREEDNcjERyjyz",
  "key9": "4J7pbzV4SwDjQAYPjxpYtZXaqw6wbyk2ueXbyZKyNQnrT7PK2dfpHaHWJjws4EVa7y2jUWZcjoSjdS3Pu5a1wan3",
  "key10": "5c938SZQyNJGAPdW7tW7u6miH2Dsar3p1t1y2LfTB4cujggSgQziWAimAMVenmeUSCemwUomMryeTe5HXFe9mcN5",
  "key11": "2QsnwkqzukjeJ4iHrAjSpbVXjKJpJdE69DwCHs543CFTtE3sSF4kF6FwxCLpDaf8nT76ETHzqHyyZ3CP7UQHHR1c",
  "key12": "2AkbSMk1taQev4sfY2xbM87ZZoz6GYF3B4gXAd4m2QT1jxYcq1fXhLhcRqoUyNAyseeyUSToea8ScWk2eZ2i74XT",
  "key13": "5EtgeemUNraY1fLWHmCaUsR4TWXfavyJdBqokF1L81y9Wv34er6vQ8jiZAMAmPfYtbiE9vZUwndpAA2yzzhvhtvc",
  "key14": "33iGcnespz22TYNtwZtDLCGfTgRbhy5SrSjWmgP4b18vp3XuLWPsfeM57kJzETeso1ncEvnK4yYmmBoapZ7KPoxe",
  "key15": "4PALjoUXbZref65x1ttrYYNB6GbQEgXtgSXYbgQqHvCygMdLNdt1ovpuuz9D9Br3r14UVvm1EXYmiZMxnmRw2wHW",
  "key16": "5Dwv8TrqPYzKRDopYpuRMgBT6jo2iDLeoZ5FpHdXaxAN2HGoEqhCjKEihaKJMozd9FgsQbqpTy12TxegzRog1tot",
  "key17": "5Hgjm4TFZo9kMmfimq2oerUQfQiY1huqE5i7GJvH3vLfA2aR84J6Qqgz583jb1oAvDvRyuNw9wv4v853TvWHuTWn",
  "key18": "3Hkrnr1XnC6vNNR44JmtS6iHpUep7i5j2HY9A5RDjpHP5yb86JLMB3JqKTbP4igHVqTamDh2ya33FdARqZt376dL",
  "key19": "4KhHrXnCLXnDP2hawCC4PZdpfbJMjNqwbFecKQL8wjCUoWxDPWAv4u3cQ5YDgapoFy8yWSEx4LwKso2LVS5eQYwa",
  "key20": "19c7A59Hc322heCK2HYw63eUZusbSUBNAcziDdHw8g6sH8rYe8QEYk3fbn4fMmef5qv6hD2pG6kzZwZGDTto1zP",
  "key21": "64jdP2W2qfUx2K5CiNfx7Q848uBpX6VPA23AonhoPazfk2UZQnTxgrTqzVTBmnBCNNvBkSU42z21Qp1u14xvnDAE",
  "key22": "EU7NFrMi7w7yrxVmZjKv8Tq3phkAwnkk44DPKSSq1LrXPtzrdH4VCtiJcMpb9qVKZPbeS9t1KKcfU3EBGRbBbFi",
  "key23": "4V95QC64AHaPdyaMbndQ5BxhAAQ15w3YqpmUPGnXVV2ZHHUXaLiWtH1N5JPQ2RRXS8STfSCiGQjvbXvYsftUTLCc",
  "key24": "5r9nicf2x8fA1BiHPaH4WGzyKUup3NkzJGv3gqNYYGipzX6M8R7rbeVNS3JFvv6K1Eran7Cmdo77mgzMUwsgSucQ",
  "key25": "XvxiP4oq4kWsW3Var7TEzUhDKykjfJ1XKKTXyCWH6ZzPF2u3bxRgYu13jYAGcA12XLUurCoJy3U233CCC6AD2mz",
  "key26": "2YnHwXMm3pHSst32ufNbeTj54EwHk7S4rkgWHbuTE6i1Bx6vqirmbqWLzZpyESEjnWbo8VPPW4NFDMi4CBRo1m4V",
  "key27": "2WMx3rLxgNs8fFxeTpSunEHDufUXXM23Um81Ras9baBpDfTTPEtMUTVVAGt8EcZ6PXXQa185vqHFSipWnMkZNWEg",
  "key28": "5zWA99Jztn3jYD1JchwUJFKCEhMHajC8gtYL1nmr7MvUndVeEjBkJX91ZYfht1qd3qeXusfaH7ZrzRT6XAMqoap4",
  "key29": "4wXJrR8hGVuYMqseG6xpiNDRYE7jA5gTPixnyRUrQxNw6WD1Ka2RYy38vvKEZTzbF62A93PJELdCgsAT2YCn8Kmu",
  "key30": "2Rwom6J211mxbkm3dkMPJY7suPAChZQoW3YvJ7rU2hiunjyv8fX3PN9jH6f7KA5uXMUg4yVxpqyvN8bPKH3U6fg9",
  "key31": "4nqF9bYdbMEnLVMm26Truf5G2T1XpdZmQJEswntGiwtrnPMMccKkEgaHyBbxfeEz6aVp5ymW9wc3UcxR8GVDCx4F",
  "key32": "5pGzemJ9i3uZKGqzus7AdGt4VbWw19CKU6cupuGGLJZtcsJVoWvzfsbTnPxezfcj2azMVSQRarhHGUgDvwauDbDi",
  "key33": "5sEJKZYDbvQW7pkpEwXMKXxUJp9m6sHLfZxCJjKHPoN6S3zE8cj8FXoFb26sFQrEgxxA2gKGvywAbmUq8EG5mAK9"
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
