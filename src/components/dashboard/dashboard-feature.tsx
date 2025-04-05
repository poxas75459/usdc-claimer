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
    "2v1kP45U4qnBUcheX6eGr5DVvNmLTW7E1JR5zjBSLAXsNj2Lh6YqTRLgnoeSoUbET1LLufANEhZkyUPtASoKwtZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4b7XBsCxcceKQ4h741sVBTXJYirnMpoex1PqGyjkrd7SD5MR2D4e7HhZUZmazNxyE4hR6D8CnwsSqqtpKnqfQY",
  "key1": "5nHPxESrhFrkSs68Bb7avkg8ot9DpmavURJ8a916ajEvWGPFN8y838ey5qHLGie7Zio2Ed9ok14dD9Ft98uabsQM",
  "key2": "4qd31Vg9r2poCnjcaU5ZHHqvFprRATFvDHFhJD63mTLgaXjTe2WfSdbQbs8Xd8f3ryqzb6tKgPAwzBWez7zvWdn6",
  "key3": "NE8ar34woKHFKoozuMnQ8qvWsub6vfANsHz7B2uyQi37U4wS1YDMnWyMTvdYHBMKq1ZfFj2XewybPPoAuvn62TQ",
  "key4": "otZssZgZEgU1PNnbZ9bjqoqaeghPYpFbJbN3JYdurXsbEJkzDhoHj7mVAc91JBhDFXGH66KTdWGf1GchdCuZoY6",
  "key5": "2CwXJQPARDRhe6PtRqSTHhAmiEhmk6LWoD7vFXCHnyYMixncpvvpDK2XntepjobxhgyNqeuy8Zus1dTQSJchiz2B",
  "key6": "4rmMKoP4scdoRYaMLQTjEisWoQPWAcUGsXFdmAqU6oFkpZTh67DdCJgSMqHbR3QRwZ1KQS3fENV2cJGr7YfHuWry",
  "key7": "2iyudWSeF4xFdPkFrv6UAnkf6WEV6AnpKbM5ApYTuo1bpqhWueayjRpkkxbynM9RyTumAmb6KuzMYhSnVMgy3Q7X",
  "key8": "2f3fzwqxdaqpXqT7Lf4jLvzMHGH6k42orQoAMHVD1MQRo7yaUKhTsQSaUaVQB8uLKXJR4ZCDRLVcbECqc4Eeu96M",
  "key9": "4R3gDKSgjxFdXH2XnM7vrSZ5NwVsnY6f3UDrPx2FGZGkct4gWgfwedRVotPS1kWUF16r5mdsJojA7xXh2yH4Yn8J",
  "key10": "5u1g1wRS7fAHzzaBm3zXzZLdANhsEtKA5GMQ6hQCnrbz9MqJgmFBCMx8twkoWpgZS2YVt4GoqX77rFmSqL86QJm",
  "key11": "44YYjqGqQDE4GpLr3R7mah1nswc8wE39gcBT4wN75QePAsk7DZoAGc6hkHKJf1yesNhMrajZwwNTvyvDrZptp3xT",
  "key12": "3tQ7q2Sqa2Jn2rPrpbJPU1Bvv88KNRprU2iAT57AraJ741DwRQUutWtovXymsBQ74S9t7yZJruRzfwUcYqkDWC5V",
  "key13": "3q5pBCLVNqnuFPyS2FjU1bAVNCU7sfsecHsCHoJCgKMnYh6cCU5ggiztzHgF4tzE6VWgBEradMN7aaxf5vmqhtV",
  "key14": "5Rxr38P54yrCsVUbTeBS78VW5NN6VE81Mf1YxYFEwRfWeLAGio9VijWK345Qs8aYLKxr2D3qgYHmBe3Ea2DecXXc",
  "key15": "3QL5t27dFMejgvvLEFDHzBVuFEzHgvW3NLLNifXGA4oLLS7nzCJKuBYqdsqZUxn1NZuQz4jzcthbcndfUUiReXtJ",
  "key16": "2W35B9YD8VxVxf6WoPi1ssfJrSXWZNSuWHsKmpFahwu3ZTChKiscTcTT5YAfxF6P6pJzyoXyAbQRBXAbnLVggkfj",
  "key17": "4EhVCrpMiLc7jSoDNZgmk7LZbWhEyowxs2UfWPgH6sjxjGstpUnkzVqXrbEnHRgqGh24VJ2xQVb5cnKcbHu6jNdu",
  "key18": "7KTDLEqYfRnjuneVatJ7qHxFk3Mq11ShXp8rn4Fp5WqCJd2WeYj5W8ZXLuuSQ8kimMXfxaygWBTdwAbyyGgncma",
  "key19": "5wvrpHbJGv4fyefWkQHxvqJJqNP2XfvP9RzRkK9MNcdXsw7oweA4vgzaFTBPiy2Uiz8ZgY2NyuPCDXEDJZaQaqbT",
  "key20": "4Ck5X7GEstx4kgHmTomjc8bzUXHFgk4g3cdA2WSpYdRyqSGrXCkwXgR1KLzELgkMHtRKYQNK8xQwWx1d2g3SQrFK",
  "key21": "2uzbJhMSzaECrHJexrFmDX1a8Gi2Cm9zpLbKaNUeqbxFeTdFWXWRGuDVfC5oG6ijqGW2gKMcfwh6ese8T6Drfkhm",
  "key22": "M3UF4EiKzW7Ve9WsGLuK3N1LhAa8864NQ1LdxR6tykP9DEE25AjRn65JuefEQtC9A66wYjL1sTaiHpnSo4FGneA",
  "key23": "5T49q6wVRucLQNfDuUp9FCGPcdoqqXcvUEbMJ83EhcDDjLHdoqMEU4JjVQbGQENVpsEEwZ5csZAgGeuVHem5iWRv",
  "key24": "DKdkZczu5wxzzA1uBZdtPxnv3ugSGPVTBApovyNPx9Mz9Dh9hnL6G3jofkEjurPhCpzmqSRLia3yTHvpp858QTM",
  "key25": "KRdTShP3mzqrAyrCCKxnErWpUrgjrcYdjuXM6GKrk4myYWHHhD4SMK9d99WMddSZ7AXs1EmNnyngqK6p9cmELdK",
  "key26": "26A5xNi3APRq6FRjY9PMyVU23MCyhJK9u3eLtBAqWf3SvogPn4KNhM4jAjV6GktqA6DPM9WWk2VzAvXF3f7FRQBd",
  "key27": "2b4SqaSJ1EESEgRoVrDNPTsW82r2PQsFd8DTLpcKLTyacpAvNhC947d5tgUCHfvd8nqGjnY7XMhseh981bxSynEm",
  "key28": "4zYzqeP2vK1SqzakC7nhbqZZdKkWGw37mTea28TEmFAowD3gsRD8rYKerRDpGJeN3XWXYVhCg92S8m2JFL1Wkqop",
  "key29": "5tRDsCz2wWLxbUMLVTLJiF4dSpn1xXSXKDVopyGy5qzujUXxePL8VoKKaYcf3te4bavAco1bUPCsy7C1Fyukx3Qp",
  "key30": "5qCpLWpj212brSwb8vbZQhpTVMgg3psxnr9RZR7mDTqVZ918S3SH8FCjVPs9CFtmFqkNMUDQwuNR15EunYjPo3R2",
  "key31": "Up1SiNEfUy55atKer6148LNUVL9f6F5Rpn3NY8iv5tSsxjrQLQGTXtfXCjH7QAseaHiPWAVmq5tMtW6Xn5xEcMK",
  "key32": "5mTCgHLpcC9kkN4UdtbZxWDXwK4Fyx3ywTJthw9BF1qjys5sgikNy3bt9Y7fbaAn3yxvqezVdsicKrQthf4oQe9N",
  "key33": "4pYFNzKj7AXY2Koiw2giWWjcoctrF3ovK1muoXmyP5dpta35jeGiVRiGxaczCpLjoxtDDbWmZsL67RWfMvVdpwAo",
  "key34": "3LGFN7Y4zDPpyNpx9keyLBHXXdn31jF9Rsb1zSF27iV642Mc1Aq1PeD5e5y74LGRBVxxEqJs1xXX6LjDyA2Z7m4t",
  "key35": "32gZyXEZ49pjGUsbPBJVivSWdMUQWvtKvvSVG2cc9eXBWyYr4okDqHprsWAh73fEthzWZAhGfFABCdFtBRMLeLbw",
  "key36": "5cGYcm9mKcHS2PNUEkKhRHwFcgQp467pZPDrsmzD5am73u2WU49XKBNkBUWPDCBp6iGn78LumMcrfH4kvxx5vPyy",
  "key37": "LsyejAw8hy9an4mJrgBAWuVx56Jq8E1T9GQiCJP5b9txuNGMSKdqNsvsp4VktgXfW7UZqethjNpMLCDZkh3fgVz",
  "key38": "5gS2t3ATMoRpBhKJtJce2jWT97zmfMYFikU8w1ws8QjQ4Kxgtt45bD7KYtjN4kMDWJ2wow1T5obYmkYqXVVyRp5X",
  "key39": "28cSEcPhQ4ucCkSUs6Wn22F27csVhVqRweSmxpmedMa222og9nX2E2BYDpGNKK1RgFBQUohgAZ6YqKYgRpunyNmS"
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
