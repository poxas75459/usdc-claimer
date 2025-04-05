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
    "3QynPtKv4Ushw8tP5FnQJZVP9pnUgxnV9yWpvXX8PUWiuM5qhBB8hWMaHekbBo1vXFarTLQsQuLU9H3cqLgxdSsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tFiB7e6mmUwbD2APD9LhoSJ9YPbgPhpgvdmfhznUj2teoQarm8UL8Mq4QxGvxjCgFKP5kVP4maVW7o6nqQwXbFv",
  "key1": "5QwFt35NRsk5JeJJ5NvGmAhRvkZTxTWSAGf6YWFUsEBpas6Yzmo9ayNzS6AdTXazxTuT8G5y4w8nRqYxQKr9q6Mr",
  "key2": "519zxBcW5Y8V5hCfKKTmmA62Xu6qt3paYK8NmebYp61cY3BqRCoEQRb23mSU6ECFdmzLP9jGhFppj3RPFDrpc77W",
  "key3": "2SmhLLt3ZFarFuHBJT7PXz16SXqGSFn2SS8SHNQukXSJ8W1kZBWnZp12seWSFBMntUQbvMEr2bem1tXd39GvKteh",
  "key4": "3vaPTAUx1vWPnAZTveg7MwEGrcWs5vSNndGPM4XoWjUEJhkT9T2ug1FZhjLaSGpR366Qak2aStQX8idYmcLbndB6",
  "key5": "5DPAXDmVMKsz7Pg8qhRqMzt6KcHhQQTRrYHDrG4ksdDSG4GqFgqGv7DCj8g9Xj5uJkdFA1rskCexo8kGirfmSxEh",
  "key6": "4rzQ5kJm6UYPeGeYYKWXPpdD5ZTyTjqnFcgVGn2NPs8JP14pPpkdoUUsRZ2EtH55EpEHJf2QrTznTtJM2bvD9BcN",
  "key7": "5Dm3zZVp5RVGVWfM6zY5cavMwiFQ4jy8QLEsoqqEBxLdkRgUntQdVZTjdEKMYb6APVmt2nzbRsqt8fub9seH24qr",
  "key8": "3M8sHzq3JjZoKKHKgPyffEHzWSeK7ExoAoA5HRK5vrw9jnZ1W8BAxy8HyN4NH5h5mjVfxdZ2VCjt3yRLZkKTXg4n",
  "key9": "4dLyWbUv1dyLGWo4CHaLQAcf7q2ASxset5hmWuPdqdT6Gt8eRFMV1pWDnkLJYVMcCXEC462536mD5ZbFqfX8XCCT",
  "key10": "danA3cwZJHyp39VRHb42AU1BSiKPJiyFswmYXUdFR1jtbA6J1CoQLTvka83kWoFYUoTcXhXNE4uVyfvpmu5LCY6",
  "key11": "3Bd9KkuhHhVA276txfVeEqqyehBrNb4srUGMYoozeG5TGt44LpTbPAhZBUhs8BqNBhtLMPWmfqQeXxgVePDjSAav",
  "key12": "31qPdcekMGKNeZHhJhKhf83Hcvq7WuFjKhzXYe7Pci8nbWDHp2kBh3MzpJtkXvhGewcqVTgstfS5UqSMjCb4bnhq",
  "key13": "2ihnEjdu9G9wir8WEQVMzLBYcSgqe3vpvX8B3Lrm3E6Rx7qWiwG4AR3PmQr3W7bLUKJH1AjVj6HVRitGiHxwHbdV",
  "key14": "2uE4V41H4Vcbot25NSDGn8xoNEg9hTHHVUNUDprh18jJa8M793LPq2Ggh7ifNWd3PeDEmCV24qzMfrHRz9V3FvMW",
  "key15": "QrKgjKqGS6yDSWkhkB4VnCtXbnc4oj87GR8ggvEzjq3marDKboeSL843h11d6vWUFq2yrCctAddN1YHXwNTu5Bt",
  "key16": "4sdfPoZKfQBYSmrgTZ8jR4SQ8hKRnpLPdu5KfZ4WLq3EJWu3CZACNaF6VaUJuqYA3YoLvgcjn4HcZxziBKpEVUXg",
  "key17": "3YUzYghVd333h3fgqddfeMe9wB1uh4xkYKLHNXBGQ6A4hWxa7iFDSj7FBRqxi1M5d6t1tG76Npe9FHF2mDSimUZB",
  "key18": "38BdPzdFnJvm7mQBoWiYreZ7u6dV4pvDdi6guRnxyZSaSBC3Ge8N9DatvHGcTeMtdSmtbuwRFmqn5XhmZHDoDMiR",
  "key19": "8juqAkdamStdhA867MQ8xFyrVcQrqKtTzqZYG2ERGLx8MCyQEXTx7F6U5ZKvbE5A2r8zeYToP5WcjuE2t2LtUEQ",
  "key20": "4oHVZJZMCDzcVvEctbFBisfz4QK4AN9u3f9VMmu88Bx2Jw3MCbVc3P2tVcaZwSLgh3a4kmLmG2e4pa5v1Kt9cZxa",
  "key21": "4xySASk7wEka2vr3c4rrB9892dkp9MUx2uKzjxSLDK5kh236Q46btgvHqZVbnPN39BcYrfKdKKrEKAiAB329YmrM",
  "key22": "5AdBDnfpUdWGm67b1Zt9tMmTJsCajc4zR7KBrnTCnwvqA2xpfVVr1BobjmyE8V9ZdyCHmahYTVpdXAPZ2dzcW3jD",
  "key23": "PGEpYJWuCthfVfTQfAPo9ehre1wWNg5VBsC4KmcrTjTRoEX6gSX82DmsaNDsZC7dAM6BJTfsanURZTsPECi8Zg8",
  "key24": "3cv6DGsDbuiTyCAjUwVX6ZqTXrUMmjgsom54oHtHF6WhSZkw6wY8wUWg5WYGaYfWWMNuzipQbpqoxpUQacCLeBrQ",
  "key25": "3VmJAavGgqrZjQ2TtEyxZKRn42aCKq7Qi69wWcmHsGpXPR1Kkri3T8AUENWTdi9FpfHJoDCRdhMKJESDYVUvpRiz",
  "key26": "2HVfyvfNFtLQzjPgiEAnhdP3jhYDZPaS9BxEyoB5NyRrNWVhCx9fd1cW8oZmmuGZqeichKstG9JAHSUgM5kacUfH",
  "key27": "4XP2XUfpTjvdfivuadE6WZiaQzyWywFFppB6CEBExHZjoSPypYcsaN6nB4Ta32oXQ5YkPzTY21T9NWRFRJjBbkoc",
  "key28": "gXCJXhtPf2AXH1JbgSUTpHn53iGRiJUxtRCktug4JxvKtaVsPSPyQ3BJG7FMdDFtsaHwGosdQq2FUTJuGNKmme9",
  "key29": "3NXpt5QMrVT986t4S7fsuZVmgTGH2sGtJak4hz9kdYsEJSVSPi6SC2MZE6EsH7iwgkCYc3WaQKymGw6gYC1m9RA1"
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
