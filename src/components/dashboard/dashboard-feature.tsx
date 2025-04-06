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
    "26CMKBekUA5NhMvfyjuj7GSBP7ZU83VAWgcjPkUadD8DH2ie8EmRRfN11FC1JvUy4J2FN16nbmf6uQ8redi7b9si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quBo3fP66m8u3RcVEQBEjyKdCzZAtSCUvzD5swUap3ojCRz68Czcwjbh7pba7BKY9WHn1WmF3xwUjwVwdjdTA1T",
  "key1": "3xMzPj5jak9CuQrNsfCoEbJKpr1bbLevcrS4VW74Fp5hiF2C2911bC7rVrMFCRB6DYfqwxNW21p8Zh3JimDhqYCU",
  "key2": "Q6YvqQhuRLS2LeB8qgag6yq7zEBDUF7fyuAqrjYJjzDpMiYe7tSt3wtXwYRB3G7xcvNb5uzBUjWipkowBhNhoCi",
  "key3": "5gxW2LhsadZLtmXjGLxfoBQpU8JY1reKMK2CK7sWEDM8Cbo2XUC8G9884Y442d36QVXK1M4rXmarz2jHdyJUXZdo",
  "key4": "372yVZrKdz4VUAVtVfA3XFrqE7HnD5acSsomaRByCPLvRVQZ5V23rwuEjdyJiRF51TykCY8amXXb2yGAYsKtwczp",
  "key5": "58snxMsFKgAa2ms4t7TVET7bdPC4MviB9zqnHYjNkJ7xiKVZRPM2kcX4o9bXXLMSxjWPT894x5b8dWfPPvCspece",
  "key6": "4ojvZBU5jSqADLboxLE3kKUsJzikYvensuVodhAASDyXngyUWd6jZREpxKpvsZeE8vCjg8vMzYsjbZV2iFn2sktQ",
  "key7": "2ZN4pMq5ArB8jvMP9pUJqjMM7qRHHaqcJfQvNKfHx3jrZpKZMnBXxhfNcXhasJZVHiVpB79ShNFYzCWweKznarRW",
  "key8": "4vpX3cWxTed6aD93wksnvBRGGnKPabFnJYcQV4CPAw7jE1rx9cDw37R6wpyuXwgrWxiKk2ZLbVCdhsdFuWKro4RQ",
  "key9": "3UwydG3RbcJpV1d9Aq2jJuFDirqrdnmhhynKZiqkP41nSWC2yMcMh82W8BqBm4UyoEjTisDouwmKEdZU52GUYtR",
  "key10": "49N8Dy3GmnBYKq4JVVwBfJndENHN6rxofT4GYPasvcS2W9mU4PYixNXJGknC4smgiUSQCmAHMpEunmChHm3S641r",
  "key11": "5DFKhgXzN5aRMV737si5X7Ym4DFQM7tPUawRj3FjCAUJmc6QeTKAHb366EP6ZzEExXudgubDQ7oJeeM99HykD1Ee",
  "key12": "3A4mM6rYGWjtowzoUMGtqim9wedBE6ECxikFB6NaS8mLF9jdCxD95mryXQ5qxUfnnEDUUH3HThWm9VwzU3RUJjRf",
  "key13": "3vndXwHnH574reC44oDY6vAFT5EXejx1ffau2KvNpmBa8f1yobWazxxyYoJ9u8JQw5sCN9db5QWoAyboJSAfeGP6",
  "key14": "3ggNdc3EHZz3dKB8AmPzAvU7NEjr3252Jn7Jq1mJj78ha2QUC3JkikG9rckUACyS4pBD5CJ2DRUY1TZStzAj8RCJ",
  "key15": "3nFe7f9yVZtpLZEJ3X1vuU8grQMihkzB4a8HpdU5uN23QK3LeU8TiGcQwCG71AfPYs6JNhDe4PiMurtU9XmJirjd",
  "key16": "41g6GohHFnCxKEwgj85VooVWUbfHxb3WXCSzz8s2oiD9eTyykpgdSXUJfuBJToDbfixtHJGAdKvfknZaeXirtkSP",
  "key17": "65KFykqFqoD8CfqHf8R19DoMUhdDnZQ6KwiG3MsZi1o5MiorP9TawsrU1ocLDpGfm2ZTbsZvunazQSw1FbWg8gLF",
  "key18": "5xcYNiPhmFZ4EsPLN2dhjPaHmRMz8wsSk1KbPB32fwEu8f3DiYinQdoMVVCkn6AGxXUm76bHVtZHk8dKd9yfpaNx",
  "key19": "3FES72Tp8LmB6fi6F9sLVfALfpUac19sPwERyoPkTE1eW5R4jXvUrFdrvo59x5CjbEfnx4Wqhfej3UekxpqGEzqe",
  "key20": "5ANTU6b9T8dwarR1UUTLLiRdkyNErwGMYshsz5yddpQR9xkJcswq5Fz7oJAuS4P4nL34rYNrfGF7DRZnotoCqC74",
  "key21": "5mU6BDSbpiTzx837oEwm9P4ZBhg8Zc5jCnCFQTr8DLkrZmb1V1XsvA7hxQze7s1HEBxp14jNj3jXNCKvBKenuSfe",
  "key22": "23tzZx3tbN5xMHQGg7eDVd4P56ucgVoSZciRPE827qxUHvZw1yUJn2RZa1qiQnnjPotsF2CEXV83GoBKP5pJWLyz",
  "key23": "295mocqnqo2N1pQxNE1dUJJu7GzJy2t5as2cNsLKnQEeCnBVKjmehEyP3Lq9GGqjPTpvgEEAPj426PGMoWJUbXwC",
  "key24": "5iBSU5ccrLKofhujDBNg8wE5wbryyMyJMbnPK3oKgwfQATkjeFqN3RdutF3Q7N13HYuUTpuCTyaGAQmq9DMhRX1R",
  "key25": "5bnWDjFCoriJn8RsrVTMJEYmfVyFFpbyeMngVUnVX3B2bW9BwbSuJm9Krjri7ZXWPqDFS5RZNSAfuZoZHgsqfTMc",
  "key26": "2U4ybWSoDUMFywMq2EMEXbqda1p7oW6FZd97CmiQTx41WRqFqGambU7Q2r41UDMze6fwuzRi8eWXQWdGBporewuG",
  "key27": "2qaZM7bqMsgfp1TjMCgv1u1sRV9pMNx5MpWkAkNuHL9rh85utcNxHZagiKNUH5q48sL2k3qsv99eerKFc84rY9Gq",
  "key28": "2hxyMqgCDzD33zpyM4GTTjS1HqxubnWvhRZETQgKf1bWfPpN2sfDU2KouAgvfnUZJYHkWp7rrKxaSaWbRcSVkFhn",
  "key29": "2qXVZpH2dLku7QgKwjJAuHHWVKg8WgTJ99xnhVQ4NFBEDX6CAHNcfY92LG6U7yyqvVBXUR7FozZ4XHTosokBQDa9",
  "key30": "5KpdFse1ThvyQRSYvsCzWwtHLNAjNfsWpUyVT5MMjTkqzsyQeWkRdLHZPd175943sVkfWizKX7emhSDoonYkvQ4g",
  "key31": "2fu3Mm2WFN53fF3VrL5UzuGdXS2AnFVrEpJp4vDamnv17L7XfPbPoRkaEnU49hu94CqKv7wrPn92vyoQtiLzFF2C",
  "key32": "2YeFQyWtxKvfWj6HifUqBucg1iHfC5q1wPzwWtVqfexytwXUvXrEnqmGBxiosusk6jNEjG7ATQAReNWEwceRmtRX",
  "key33": "4KZ2hWUCgyb66yCzYVokXANnFZc7ZZS8YdpCmMXPKVCjmEv6eVEAB3VDxbkhtKvzpzz9F6y6WyK35KCLSMntz2ia",
  "key34": "3GjH477vqmYeG8MUEMiMYacAiVb6MEAmE31XMV1nWRPrVFiGkqVPqBQNksHWhEi5MhjSgVmipeoiSZ6kPNfswpbZ",
  "key35": "HGh5go316rBooMPW5FoE9Jbdg5Y64rVpGNZobRFMbucQDQQnhTKviCPpyXmezNL8pmhb7mdAgbtDTh1u7i6Yu5M",
  "key36": "2VJB3SpHy7fDPXeHkys81ENCg4jVEYvgQfvekLdeECHfFvuvM5mSRMT5gaTUP1CYZcL1T5kjWJM9MUTFPG3zRaQz"
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
