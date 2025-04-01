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
    "2HX2Bopdm7VvwuCubbtvATQnKdL4YxBmtFBiUdCrD6MJZuJaLDUwFmqiU8TYT4JFEkuVQqZgByKRe1yp76ttwBqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbocFEdTMks5fsTEacoK5StpcooZ8BLaG8kgtcvZVmaMZcpC1Eu3NeRNvPkYhFsBTQdV99czaRaZL9ecYrFdGWX",
  "key1": "38WB5sYfazc34PyqCTGwd6376H83bnJkhk2Y7zLCyH1GBUnPhBW9WzkHcRntEVTAUjCtEeGbo6ZB4jA77gK6i8GN",
  "key2": "ZzEFLaQHkFiZu23REVUTfFWarGGVM6To1SGekv1Zn7sm9rgjC5ET8fyZkypotpwVb7s8PfUi4pyXkdrMkTecNXw",
  "key3": "4tLn3HAuntWqD7Wg3GmcV97wuHnmamis98whSm1HZUHnYNYrMvPdxgdkjBU9wF7QetcBdEKuKmJgTB4BGpTivu5Q",
  "key4": "57zScCxubWQBziHLvKNivKXpcwKEwia4XXbmKdGsBbFkfLRfPZ9dLGkDJQ1enMyobX6CTeuvomp2JF1LyhFjdBrG",
  "key5": "4v2AtwqFS3u3bmSGQ92H9mjmK1KG5vCZNzzQoVHA4dVRjjNijr4LZgdZi4UuEuDqKvjt33Q2ztsMa5W3q9Fbg1YV",
  "key6": "2W8LHt8jBnzkAUrJKq4rR1weJsHjE1G4MmMCsa4pHP8jDbnwwKu5wDPgHNAbJqGJXbvD4wg2qETiGhJtBQCCmBEB",
  "key7": "4mZotfCFKcNFgRGoHswZbtM9PiyiMrCgWSywpNndYgZqYkmATekTyT2bmub4eG1M767b5YDZfEcfQnPxM3ARLN5G",
  "key8": "2Uffih2A7EtZMq8s39sh1RmihWQaPLr64V6bMZ1XmizyknX362k5yjKaqV7m3wo1z8umsp9BYm897EFavvoG21St",
  "key9": "p7QyUQ88VsEMPNzo7Rb6vZvnVsVoEKh1uu7gjFPLFvFkCkb8iXkG9D3hJFQ1vf1DHgYiNLCQjEKVnVr8umSpY2S",
  "key10": "3sDkKDAgCVrBRMVysocSY7a9WfrHGE5HHfErZSkQRsK4fgVBRjAWXEaCNx47ga4HtRt1bu97V3tkiMJEmz8gnM2Q",
  "key11": "4gMcftvppv66B2ioe8hc1fTEg32rRF2WBmgtNLBxqroCPvkTzADUk9idtnT9iVC57KjtzUs3jeTD6JoZVAQV5FfW",
  "key12": "3ZYtmMUkodFWbMAFUayBGh3tiCAndH2KoYTqeH4vNuyvXaMSjB9Tqu6woAZJoMNoPXmyUHoz8sJdvs7odBfUMkj1",
  "key13": "4PBpWJmFAuzwnW5tPirpWM7MZvMm4PH9wZJpwm5JqmExLNDYURQsmJpk7odiBWvnofjGxbxgS4GHcp3vJeRB7Pna",
  "key14": "3CGPq75vSxUMVDrzf4kB9EmKEbaCYEKgFD4a1KtFxmh7V53xZbEsRtxkp5TLGRuuCrEdPX1ouG5admrJzjeEf1gn",
  "key15": "2eej5jiwKFakpj5SzPsLWpfiZmUYc7zNjZoTEd1ABX7YYiyLjmjiiMEVWuhYxbH2zPXS6EsQH3A3AHnx2UBxAFc4",
  "key16": "29MYmqwdMAns8fzz96Tfn7Nt5xy1s64itbP9wH4XB3Z7itWms7KL8ZwNtxsBmpeRHfiTyxfNvLFyUjsNpxxtMjXM",
  "key17": "4USpCzLhxzSqpWjkVuX3cCc1nNRMA4BJ8gkYKMsKTC4wkpGfa7XGcpCBntxQcWGAk6owyDSqJZPzgrvRFndSwWHR",
  "key18": "3oHaS1HBCUDoFSughxehmNWwmNA3o25TZJ6rqWVbz92EF9h7vHUxBhQdS1mpAhcHVKds8gHgDMMCfV7iUpFmMHfs",
  "key19": "3Mz7Vezru5a4xGL16AwfZ6ZzrHuHZ7efCRFuUai22AM6VoVEM9trFbpZStaCSp428hj3Tb78ptq2vSk3sc5BcMXA",
  "key20": "4UMSvE1c7NFU9titvSftrcrVwzTB4rxNgzfE3M3SGxh17xvGeegfcZVt6gUXVbEjiqhjYoCCqYaxMhHTpyNwYBqS",
  "key21": "3btYbaDGHEMCS96Z9SdwKTKjpFcfHhC6UeczvKYYmNNf86pDK7ERSHwHbqVuqG4SdTLw6FDLZY3p2PZTJdNivGPk",
  "key22": "4AMJCx4Uv1BC4rRPpPh8kpZDcoViUpeCjTLVbJeAyk3Jm1Dr3jSgJVYKpRm9NrVD4QbUkYKbqjXCq4qZkrFHTtjT",
  "key23": "2oUeCGSsuCR3aaJyvPJCwwProLmH81nT7tp6VYjrhnUzziqXxxTnau8PVcHXYnREAqoQxEQiPouPsQW3wjBw7uJf",
  "key24": "21WYTxjDjzgiSZQh2khg8kcnNTXfcerden3DkLMw52v2Tpd6ChoBJhvJGnvvAwg1Ggsw85Mvx5EDNQL714TeDKsd",
  "key25": "3smUTYuhXDCbEPnc7cfyotcSFcMKmZDj9e9pj6dKv8ems8TFVQqgL8FYt1Lk3PfLeEukYhaR8ZJxELNRApczhfMN",
  "key26": "4hoLM8cv7zybiatz1vWs5QrzCud7JjNr4S3CCRAQ6TUrvJRKLKiMtv6hLX4h3NjKimNuYqcMVzUV8GT96HSjWyTb",
  "key27": "322qeJ8u7QJWB4otxEU6hUKonYPes6kZASf7V2qawXUUYPsdeijLeWRvw3jfz7AA1S7WVDAkm93pAwV5L2Fgi8U2",
  "key28": "39NMR5kjj2J1cLNoDma6dikd3aJqESbne7UU3HrJjd6NwuwuyuNhhKRpySJRB4DGztVEqSdpjMQmJAFRsfkbLTMu",
  "key29": "5ugvfgbyDHceLLk93EE1AKqy5edeuqf6hYAhRZUQakwKoxUWJhkqcZTQuPcTuAu1yn88wQZcTvFoCWnzd7HSATDG",
  "key30": "CfBKsFHxSbJjR5Ead1FNWecaGSETESzerVTXFdiJKkr4LnUieqR9DDUfvxkyuzPYjgfSfWvETbLUSdJL6rkdS6F",
  "key31": "5H9mNCn5rzecPCfXdUUFFQTLU76699c97NjoYerHq9KRi1A5GUxfgRcWBE4gCGNzvksMLGv77ejcU29xrQJ1tmGi",
  "key32": "1PRdmDk2K5zVtYF3xxAhVMH1RFdZFgQ6EqB2YzCLnxTqUheE3FtjoY4JqRdNgkzvDBWbpv93iQsC59613tTqFw6",
  "key33": "2hgodqjhYfkFfnwKUweQbHEJqZZ2uzmmL3j9x26uC31t6VL4wXLsQC46zw4t4okZAy6M54vj2kyhs8VKsxPJ9KJD",
  "key34": "3VRuYAHSdCq4tScq5MpshZhb1TxkuXi6BYCEE59NtY1npuVKxevjpn8rquvh9HhG8ZJQFi414F27h7zfbrToi6wf",
  "key35": "4WufS5RRhiCQuQNrAAiypVdkXPD5UNrUwfj6xGW7WxSBN3CyrP1GTuVfM7kTGwq2TqhVnFtK3CM82gm8juF9uf7w",
  "key36": "4b8n4N6qRPE12YxJqjWjcwrCXu1SS23oXT5cYhwoz22NEhAFNQ3TE636zjggfXeCp3wiVCxW1V1kUZkacXqdH7tp",
  "key37": "2tZ52PS8gr2ZJsFEJozZbvUKJkKMrTKTxgi5j2VTmFYkoPYcT1MFxtR3gFUzEqzduTsvYm4LQVA5UNdKif4RDs1z",
  "key38": "3cyQpdYGYA8DUGBJ5v3r2JKW4KkKt8gTCSXSGhMjZf9svpbxDe83sygSnzKK4qMfaoni8r472cfBW26LgQC91AGp",
  "key39": "4jaisajDMeV4CPQDCYMEPNtQwxAotQGeUkrmiVeoXZuESU2iNi5qquNKtYAHgttK3mRm3MXFT4JNnfrLPnHK7BQv",
  "key40": "3sM6JZZKgC4bTw9mfNUcxsYQpwinGMQ5PXAtWp37ZitWcZhfePuCGC2owtujyM6Fwd4uD8dCSpjYU3LrgejZJqaG"
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
