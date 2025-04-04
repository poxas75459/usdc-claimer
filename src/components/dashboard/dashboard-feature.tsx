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
    "37vzcz4zbXVXomHGJV3ikosfzssGFd1NSmF7q47GaSuHNSjhkbA7skkMBpLUTpFFFVaV66zwbNiahDU7ScSjEQ1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yg8snSo7Swb3vs19GJshA9XKT7HvknBT4Zx5k1X1mm3pbRdjmXn37iFC6qv6EH6FhZ9ouQMAAWjtkEqkmDW9fz3",
  "key1": "5pf4qVYFiw2ju73bzpaemUZm216m2NLdcUbMLy9LnFvDFUSrFdGFfdPkCyFM4Eb64DPAqiod5ehCueudBH9hB5oT",
  "key2": "2epsHrh7AGoZcipU5zSLdZnqVU3QPZPLXadznn5vYU1S8ZB849D41ZY8dhDJmNbCtuiAEgfLWJCaLaobVpTt6Ugx",
  "key3": "5oWCDsimHBT7dXnASwhpuczct2WtPwq565dCMUdNtk6sVKkhL3oYg4ki7XEWb2qQD7GRhXxtE8WvM3B4uv1mCysY",
  "key4": "3b5mtfssHPWs4MCuYXwVpyvHougj6VfHYJoCqXD5nq6q7RR4v6Wt1cCetpQAQXtF9FASBjN5bR6rJS92nSRJwF5L",
  "key5": "4yHR46WMYYRBsmKmajqKCNhSKn3dce9XnZaEAQSnTGM89Dwdnon7pMM3U4sc87EaVUs1rew7PCJSQZ2xAGQMdquE",
  "key6": "5Jvg1dZRkoxZbFxod5XybvZbUcmnokMtJdfYnYLqupQyUKVUWdJ8UemHktQrSseKTeGaaoXNx4stCaNMDfpTYz2P",
  "key7": "4CMFXoBsYUMTWCJvvvHNYbAFhvwbk6UDCFR3nxmsmDk6hg9TQvxhvH3DfMmwaMGUoMcMHGAqRGxp7gq9UCRuvoDA",
  "key8": "372HZ9MetpH5pcUmwx3Exkg95zTpeXSf4xJwjBWJDx6rL8qhcFYzFrm2amGtWTCPsbpTxs79LuuuS9kPFKaoHdET",
  "key9": "5cNFQaHVxCwafiAgbkGLFqT3yqxkWZtVYRTT1jaaYsEzCNS6yK86qFQuYiCxt4eGqzEGtZpxBuKewjCynNLpQSEs",
  "key10": "2yuqRH8tG9PFVKz4dzB59LnRwTUubsLD2G7y6G6bhs6ziiRbtEk1uiWteVewZ7Da6CsV4eUnuMNdM4tEfUVZKwHt",
  "key11": "4TbHVWrtDHXmYxvY8G2Zw2zaz6scjvx7gFLftNPJvfEbLbhMeqq32jKPaZJfrHf1CSYxnR6BnHEWpQPVhVRfZoQB",
  "key12": "4525AjxdieJAnJTmnNmf3sPbYyCUN6ZGhS5jz1gtuAn8rb6HGJXRLRCQbGYC8RYJviZok6tjnXmJgEnnw7AMSgD7",
  "key13": "QvWqJ9ZkrzVW2Yp6tVqxKF36G1UbL9zkL4s9K1Eh3h4aG6M7ccJU2XUAzV8Ex2nZooHoR1rHBu5uABVN2vc3UA4",
  "key14": "2fUSmGGkxYCFT2dVCqb9HVM6Qc4bCNkEZnh6Y5awKMhUqgaabbWivVJiP2UA6iyaWf7cNZUR79XB7CYXR124apmF",
  "key15": "2LnwYPsTuptvEJK9LUSp5dfidj6qZ8mWRYDXdvEi36i6ztWszuTGdo9nBcFNDJo28qF5S95bezDHDkJbgx86oiG2",
  "key16": "4nEaYLX6QeNU1kRZtb7u83agTQ8YJn7DhWQgbmtDR2GbveCFLeAgarhayBQHv2Epkkk4uCYux4gSwMfHssjKKo4N",
  "key17": "5kvFoqGHuRQ6aQGYRJ5EwRYwX4AxbjUPuzftTNfRPme35EHSJzT9zeA7BfbmFPQnwEgwjDGdS48WenKnnHkooEpN",
  "key18": "YgxhnHwoLECchpphHhcvc9kmdZswASCYxq3dRw1QHRETxFFpxqp5pqTSTHSbVTMDDCc5YhsULXMq7JoTzV2m3vj",
  "key19": "MBZifULr4zj5SX8soypCsmhwWGFwPiqAnxL8PREP4s58TxP1hzPrbMg7idc2zqnTducjTHLQsGzhumkTBTZYYg4",
  "key20": "QrirGrQ9UseqHdWwxvKa9ns1cdsZtTwr1HibV7WvVkawi1w1CsyvT6YXMB4LQt7r1b14JJn7KAbSmxeK2yPx2ou",
  "key21": "jrSDdqgACe3Agv1c5ByDEhkcrByvpvpDp9MnVRLq39NvKertPriXDtpknxaUsmJL8WBvZQw3Ya1zDzaxPkRAR2w",
  "key22": "5hEXpHiiDBptDLDQkosqAiQApLifwU1eX9G6QgD4vGq76Q34iooWbf2hCTWdDjJXeTyVcqk6Sk28VGbESFq4fh7v",
  "key23": "3wP7G1VFwVn8G1T5TyVJzFZbaRLt5jd5e1jC47bmJF3FcoviQbMuy8gDcY9ifEf9NfbaZag4vXHMkGcgP5UnjnGK",
  "key24": "4uTmZMwuyaAwwYVHf42VTw8E1Lw2GaMKTtXFXWEikbL6SuR4TszsKufxVymv754ghNwVqpxxHBNDiE2hzTVWhy9r",
  "key25": "2ihNm5gMMt5hxaDiHyrpu9frKDoBGovbtjZySQra4oVqksFicczZUw8sLyUsHDbVnrNyymDxuMQwpjsr5FLzo6Z6",
  "key26": "zanGEm35DF1fH6xSgSF642FkV6kSYaJKSpVdhGGWbCT6Aad6ToUojwFXswU1XrHbvgvQP1kqdQZ7csi1Vjmxnh3",
  "key27": "2BwpKVS9NHCPgY8q6eBPzrz1MgmCM799qJp4mfD94BiaXe4umuTq8q8Kj1KWNbSC4MTyDKLTxr1KEmpfC6KoMiAt",
  "key28": "3R5YrVEhSxXnJCatzQMQhrG4YUD2sCLmCK8ReTJACnZSu2pkdJ2LNvD2bXGuYsb6mXDUgubGvtsxFZ5T1WwfzzMv",
  "key29": "2iQBTZPjfokiiKGfjDGvC5XKSYMafKTbH4qcM2LLTyP4VzcsdMSSTrkAcufqNPPUXZi4iDjRv3fXtDuwwQYiN1Ge",
  "key30": "5RQF9mY5PfBFutRfyrHRXh4VjupUSgeDaR2Bt2MjuSMMDcUxGMWHvkGJBkKuoDn1YD6UeDERAa5m7v7SDjtHFp9j",
  "key31": "anVzgp1VqhXJZQ6cJ9gHkuh1ZFt2y4DYAnfxFo49ss1DHbkyxqnbRcDqbYBRvTgzdHey8ya94umG56sojoyRNji",
  "key32": "o5tp1aUg7ur7BJNREgxdLFn43rJnnR4izkEUwa9p4qY3CmYb4SDzZi6StiosuRzMjNZ23Ld7xFgWJwM5JUqZ6L5"
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
