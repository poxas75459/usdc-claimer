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
    "66xp35MEKT6xX1hPjRTCy6XhBsiooaA5Pdizh7Dv3hF1NycbBRDviWg1gwzXLfjUsrgmCs2edDFkC4J2MsoPq1e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52o6XpD72borXoC2JFJt4qjTRwbU5KLJQw7VrUcNHoQctb81jQ5itAHEV85SE9xtCrcSwRRmPJshu1WMCrn1q37Y",
  "key1": "2g8kSodZPZNMLrtyfwQAKHb1EbhYJPo7wzyCws9Gcx74MYmXh6seXrc7jvLbQBhAcQTvHfsX23NdaNatWhpQQ23X",
  "key2": "3A1iyPCs6rNQ1TXNTZCGHbgQf2x2Mz4guFfX4QvUexhsKQo6fJPpNt51jeZc2RU1T1YWMQMZ3KX1k2Q4yfhghu58",
  "key3": "5RqMMnHuCQCk2bgnPJ6uqxtoYpWrfTxMDBfqDQAaUqrg1mE2bPWjgVykMhqXzewK6pMw5cn6WVfX8Vj24XFLxdpN",
  "key4": "3NdnKskWoNn4MoWw2Nx991gwvVrvk4HcxGGEpNDx6p2PX7qt8WZRYsUZpYKcXP2i2V9bSwiNgWszXJsQdb3M7i9F",
  "key5": "5WK1Ev8J7vydoPGUdhJmqpAPd76gnJ6bVkDSH1j2EpzzVnH4MnaiAn9KDLDUqpuF9AjrszUXStmKWd9nefPUbwYb",
  "key6": "28ta36sepPhHSsFFKyK3iWipGaS5Fm6SJKchp5s71aQdchGuvDAnQXeVjSBgBfAnVbPYygArNiNBUKWyzgFstBH7",
  "key7": "2dGXgWvum5wTt37QUDYBRvSqUtrPfP496GrfXhtJYLYmrm1ip9YudRprgk9BUXF9CR6xpRv4i22DCstu3SduuD3b",
  "key8": "rwqvGGJjMwAMYxXNufswPz29ZRyQnPjyfy2yvo57PzDUyu66RU6m5L1TxN2h3Gt9eYWTPYP4WaFza7uTppq2WGC",
  "key9": "3HrUbCMktnpem9hdq9vDjw9Ch5gqcA5vvfnN6wKAzNo3MaScdba7x5KtNKSAXy3inA9TAJCJfiwG9XMUqigMFDv1",
  "key10": "nTcPtVWALBoa9scChxMqRjU4156v1Cd7VtxcdCd9DGY6qpmr47xAKaL5ydr6oWEKNpmb52RXJJ2jjRqU7LcBwbB",
  "key11": "3o2xi2bXAdzNvwDVDitTmhcwGbfhH5f9RvojFXfHx6gRGv4Y4KxeBHUcBXXPx8aAXrGvuD3zp95fbpEQa4AHysyR",
  "key12": "5ok6kz1TMkvtLjjcSmnaa1g8ckfALkuKvbmoVtSaFYXAHGLwjw8HuCHUMv69gx7zuYpHzFvK9729qGkQbeiacn8a",
  "key13": "5qw3DoBK4ENzWbZ1kumJdBSpfEF3AwV6jSrJrU1nMmqn4QhghPHk9ftLU1wrdVRDAmefKTEFaxyU7LmdXgPKBTm",
  "key14": "3oCz5jwdecf2f9y2nP2WCP4NajEWFPjUG3xRwK1UPysk2ZBeHG5NmVR8wipSkKp1QeVaVaY9VDWnoSLiXCwxuyVz",
  "key15": "3TTsEUsAfFkVepJYpp3Ngd7eY9h9bDg32Kd6LgxKqwVMK9n4627AKaeYrizNbUnaN1DFcjgqbUQrCj47fiQKPAej",
  "key16": "q45uzA58MNpz4ZK6q8qByCtz2LBUGeNKnHhkhDDw4AWJ4yAniN7AyaQHgnxSUYmifgdZGUmFG54UJU2wdfm3UbH",
  "key17": "5soXvCAsQrXbCt7RacsYaibtVLb9aXh9hGLQypT1qT8Li8TZv2AyyHNUg5zMdgeXp94dYti1BcLjEyju762RLntA",
  "key18": "56F6b8wPMMPBcBgCohuN1suoW1xrxh22ZWpvsxngwTCDM1KQ5kDdx758Ei4cEHXgqfi3esY25nuTTkfzsJxo6xhA",
  "key19": "3HFXnDBz1uUzHX5QpvfKxG8yHARQ2BLgmA4PRUQuvmpmPU62tG8wz2QzNxvXJ27pBFqAfxKnEFRiSWxKycgxjwTZ",
  "key20": "43W555UU6MTPfNUdtZ7QZx2fXomvE5Qsgx2uvaLx33ZeNoNx3Ld6PbGJJ5qumF6rKLFU1FnaxxP2NK2sHp2v6Pg6",
  "key21": "kzmTjP3gspC8Fco7QrCKKMRgJHX5owTgfHuwMnvX2hLo1ZCGXzxSTVfVsR1F1rwJYVd95J2YyBFx9AaSwnzR1L9",
  "key22": "4W1f5xXbPtJUzAZGSBGVj1Eg4v3RwqQDEMrui7yZpdpBDApHwWL4iphTufnoXWLS9zrAMGn69BkXdCGD3ve7hiEi",
  "key23": "2GpWHnyNs44oChepvcStYxpRwzm7k3yj9phBsacZiXt3Sqtr5QWBiszdSKqF5SUw1wQQomptcZh47qN2NLA4pguo",
  "key24": "3WnDgURHzb72r6akdDQxcRmRiUkqJg5gPuKuifsh4Kb9c13keDkQRDhdLsiT9U655CA5jPJtbF9gA6bdS1jEdrjC",
  "key25": "4V27KSyMBxaSa9271aWgVhuYvvJWCPwqcHbMBEmMxZ25pbSHPEUxW9Vt42vvc5CMfh7mjCMpQF5w4qBa5juxGQhw",
  "key26": "5AQFAuxp8WweUGS4aZFTJCyzUVSbDsVZy8HxvW7EHbzZHWaw5HgjarugRWv1YbsvEenDDPrQ53gkrTDQtPWP9tFZ",
  "key27": "3AJS3RFuFjwN695C8FypwyGLgWK7k2YcU9xhNRhpXuCKYuJC2uxgDwRDRPBBwrnRSU7SowT2gzvfjbx4ARi2n82j",
  "key28": "46295sorPoiEReVRPqC1PTKcYJqFTN3yeXnagwAkdbuEgT5k9gYZVR3KqsXAVjg7GaVmKY8FmP9TGEo6ivV5yasU",
  "key29": "55brzgs369uHm2LWJ7W2163DnpcVueFNRJWHPXtJz2yjyCcJUALpdTfZz7ZLyQPiazB4JRXSHchptwvsa9VuSbe3",
  "key30": "64RbmdqcRijyrv3tn5xPknHMn5sQDc7E7fUkuyRYPeGkyBtJ624hbS2wUSVm49bitcYTeTaGfKt81sbTbogqFyP4",
  "key31": "31NH1Y9SopKjESHZSautLDCVQWV6ehdWsFd6aNWbwQbef9mBnCJ9TmjPiNfoYjBzqFGbvzoYvgFKMKiHPsS3Fneh",
  "key32": "4DYpz2DrP7aSTtpSaLteq7dNBGGXj35y1tu47T1uZvyhdy2TESnhrbBYypWGCKoNrgKKQiQqz8coqE6hPNWxGtBY",
  "key33": "4QsLQLBVNjJh8r3jGBZoCMovdp9JSgf4Pzne5TRG23SwreDNmBzoQuWysrpvk5pkGyFCKURQFJmgf8n8vUjy7FYh",
  "key34": "4fYKLyZ8ZJmk4tjaDibzkzrhrVwBEvLBN9EQBYm4oi6awXELDxMZamsMFcs1b6hMTdnBkCx4QFRNM136pNozpbyL",
  "key35": "44qRWPjaibxHWNCyBSvKbNu5Teffj85H7M46jCzi7AnEcnJuKAztwZG3FfaUQkm7koVz8wBvyJwnPtz3fYYQ5kbz",
  "key36": "3m7gyeWu9uhdtRC7PuYpdMg21NaZKCXAKEiHZYsVMzAcayeGVTd6dUS5xJJsRdeKyh7Fy7HC1oFp6f4WXEdi7yRw",
  "key37": "2jqcmQnW2qsqgkMxAAvrPo9yA7x7efVcfbe9zfC1zTiuYsmr79e3f8eeD9dL8irnMzTM5seAk1QYaJZfVrh4r7qP",
  "key38": "4xzZ87Yw7U4ZsyQP2THmQxyXp2nbB1KhWaCVyhimkwgp9Y71EkJppXTWvaByistqq7W1ULfWmxDZ1fzdoFnnB2J7"
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
