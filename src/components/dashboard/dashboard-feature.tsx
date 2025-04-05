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
    "2rAcrFMaJySwQqjD438Prma6bHTEedX1GUpiYyrVtKacaYx9RNhiCw11ARxiGAaA3s6BcudmATqKsW2AqUBW1Dw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2YCJJrwkTNvngcMoaLBcviwEo2jpyL8gUnX4rW6wztMf99gkdS9ScP4gZBF6X6Q4H7ARQuTGrXtbEJHPHERXUQ",
  "key1": "9CgXDcLzgS2skB2hcoZgDyw5yvGQ71hhBCaqZaffF4ndni6XcBvnSsL65N4XdF9rhqpihfsSCpM3mDr3fG2vXyL",
  "key2": "FYW4YcuYJzSqQ5HYPHqrFzAMWjHjKxhXZeCVKXEqj4cg4ANWXff4czNp3FunvmsFPxEsqcVvGR17eGe9sbvnUJs",
  "key3": "2WFRZTFiT1yxUjgFWZMeNFStQGkhKtYmcjnMxCw8VcFRixARdddighirD3UJZJupJH1vyUbBp2Tamih4QcmwvG8F",
  "key4": "2LwMQneYna2f7PBtVNc3ye5ZknmusQ5VAjazubAC72P5ZG9J7pRqxGR9mtzvoDHRLbM5AYwGU7Fyr7PHQiY73Wpy",
  "key5": "5fbnPJr3UofmQDx4mDErr6SDqkN8mh2MtCRH28s5LJx2AtwcNmhKEUKegwehAqyGb9p5u7m8kSMHmeHUQTzHcqaq",
  "key6": "8xwVnQ9ERZuW8xw9FXQGER1NJPi97BdDaVBcvHb5RjqHDhjsgigmgTDzTMbyDgBQDeoKEtWrL6SnVMq4RGtXWQB",
  "key7": "2Ls1eMuKNZSa1LnHWQyQWmJnuSPyLv3gg7FVFiah5tmJWeV9mNXd2M73fhWdHRHou95Fr9Y1uPSx6zK66JBcpkAD",
  "key8": "5QLNzVDiFivHSPHMF1qnCWCYuSJoDGPfxJBSBiGWEuFbe2x85ATYAgCo1S4ooQgTYWYFLPihENVdywhZNUKWfN6Q",
  "key9": "34f4mtt6Vt5SJWnpbZTSXWHDpNhUcNxYVVmJCL5UrwhodPBbZMxLgVUzX8Gwxu99ghTZGppa3kBuv3WUMxSt7cRA",
  "key10": "3Y4kuJb2zcZnyLChJF68LgghbaRCLp5saQx6JaReN3tynZUYsXAQvVGkTbELJ4ZhqqExss7vqRKFpBcP4FW7twF2",
  "key11": "2qyKMgaqs2iyGbtXBYBj3xRVF7krmGdHwWBDYBgXnbz8oKp3hNcEZx6UKxyjfctrKj48ASjg7Va5AtGAF8bACu95",
  "key12": "5ruGm9rWYji6rWsGQ2SUaCicHHV8zF39etCps8zj1bXfaXJhRw57WUHe73nwTLDaj8EMKX73TkDLXKS4P7U6ghKQ",
  "key13": "3RinnDsHiYT4tTSjMCXDf9Vw8pvzSm6K5FBsodbdJoqE3D1ABRkxR1B7BX5ztETYrMbzc8rizVNVwWjFADgf9drX",
  "key14": "3yGJJbssGQh4BfDqAQWjAoNdjWwjtvCHCbJq8K2RXN1BSZWv1FG6ieNkeKNRaUJGgpDuQTcL5kkwhFP1bCkxfc2H",
  "key15": "5BEFyNhsQ2JyTXSZGYvPjUrvxYeHXiDmD6MvRJByYg353zqYZSncgycsdLmv1SaMVjVS5X7S9SuKNxBdwjdvXvHj",
  "key16": "5kmwYy2An4YodzSFQ5vByKLnNs9SU69HCgK27SpuLQjzDe5KFh3VaZhujkujkn5UthNzU39fZfQxbV2zYaFh4JRx",
  "key17": "4G9NWaoexgYggkoYrmbpeMWSxyqwfjf1jMfU57PGRD19qhJkeob43X1nYHZN2Jg7RoLyADyy73VVB4LhA57rvkij",
  "key18": "38hDojoD9qjdoQrQ781GtrvPFkPYgZ4RDa2Bawy4ATw4HxKTxoD2swjVvnJcerN5zrRFVHvAGEyqnQC3U9rnWrEg",
  "key19": "VzfhVfMpSdA6njwE9xQhFYV5ga3wgcJMmkhrVzuEtGnBTqUcV683FzQKQvZEYNtbCtVQzb2AG7pfBjzEpd5nZPW",
  "key20": "2mLtdqRJubKJ7hzy4kFJqK6pzuySZ6bMqPwzPJMTQgJcEGH1qvLu7pi3Y6EhJsNrYYzf9KZFxGagjHv5r6qSauYr",
  "key21": "4sEtTwqcNUZhocCEPLDXyEka4ezEgEzm6cHvV9eFuFFyqBV9XBQMuzaJFDa9Jm4SgezKnc4dXvksBkgjqvtpaDGu",
  "key22": "MDGQd9D6rm4ZQj6Fb8bxRkux6W71zAiSfLPepcQkVQMbb4CEtv7a9eq6p2it2FZhh8TfcDwEpcDkoPmVLYMAbTt",
  "key23": "122tKEWFegaC4P3hwcsA2y7GUZEpXkbWXZ2iQqA4GKCfiHPVwG7MDyENdpPXKSUEGLM9DmuQA3wcgkUxAFbgEzUC",
  "key24": "2Xb9LM3jbf8MrZDLr98prUoXUoCP6vbquAVZ8yAxMXaGm4514gafDLocV9PgeFMwAS8qYF7QMUpzF9x2DAenz66Q",
  "key25": "ERfaFTBhe8dWHff1dHCMe439vRSVeFaxsGybQx5sBGmEqmqzELfYJaWNhAuwjbp5pE1yzv5j233v5ep6QRx3Cbe",
  "key26": "4thLvdF92wCfGSYzWutm5cq1KWmRqRYqhWSxPTpzHjtW3p3dNQo8Gc8YYb2HYwCDs4LiUrSq3bBhDLAAa9VoWueF",
  "key27": "9gj8avzfLkHv136FBLLQHHBr7j6sMDFW4sMh5H6M2xjNzmF1AHMku4KkiLoY9vEd7rx5ncX54KHFLzatjyXnnvN",
  "key28": "Mw3iHCVWe2RoMVGEGtqXrNsGgrZX3uAnobyLw8Y79CoMuWUKuQzHyytzCmAipCxTpFhN1ZTfR4jRgyKQFKwoLra",
  "key29": "4wJDTyXrYAiyLvzaoX7YoSNYKGjGc2PCs7vQ89kiqZPkRM4Kb1ksmy9KKfdWZiUjYbXyQgZiqyvKxgFgsHmVmkfE",
  "key30": "4T2BPm36iQBKr2eLbEJTgbxpms8UQNCBuQWWHTozLiehUNjkR8UWSohfmVNHNuoiZ91F8XZYW1wx5EMC55CdqerU",
  "key31": "5px4fBtENTdmmPePkiCmbmR88w9vfnPB4juChpzuhSDSQMgSDrqHDpj2zNprCeNfkNWB4zrWgagAaYUTivV8GS6k"
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
