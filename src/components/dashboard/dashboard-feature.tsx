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
    "2E1yeYZFejLLz2KKB1zRQwHYejdhPXMv45ghpbXXgk19qE5gL4Ck9mPi2AWkr1irrEv2oYKy5UPQCuwMvwRx8ej8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwfHc4njvTGgP4tPMHFByjuV8fBZjo6raXiudPcjcCbJBZBfcXu9R1YivjNtH8yYKsMsmtQNRfnjajbGGAAoueV",
  "key1": "W3kNuoDAf6fs5QSv6ow772MQobZV7w68NbhwyrTCtQTTPw66MntEohiBoF23YnvmQH3y8HxRoesFbQwJRGLz2uK",
  "key2": "34KQ9fttWDW2u6zbBsG9GwnywBG3qkqrc9yrCfVjyKMhEJi8q317KSFb5NHrjX28nNGMnqX9CnPsMFSwxjnZheR4",
  "key3": "5LzxWJN6yWdzXnjxPPsocjrxHokBRuJtBxQKnQ8Rq1w5gUpAQfXiBUXmmkHtUEKsVsgThp4wAZxvdykH7kHrerVP",
  "key4": "32QZodQEhTjMHp3nN8RMRhCa64K46Ty6wPRXL4SmtwC8kk1NexSHSUEeGA43hAMsDiCHUuWP6sawgZkCkpuJKeQH",
  "key5": "3cTvhBTtXoxtYNwc5udUS2LgtWyLSChmbahpd2h5pZL7BLXApPNgFUg3hgAGDQfr7iArWigQy51nMEYDDm8CGzDJ",
  "key6": "mfzH4Zjaaa1k1AEsaogAfvLQhhb4ueeUee25EFUvwKsY2NV6s2WnNsHS634gEHf5NJvaWdpCEgzoWmxBsyprSVP",
  "key7": "55Dg5Xe6gGNYwR4XooGMsaYwCRUdwsHWqrVVWE6NbYJSJuZ9zoSQrKjq6prBJPpPzmNwzodNo5R81GftLCrpbnWg",
  "key8": "3TVx2vmawgAeRrAZsDrZZx3oVawG9rTzUZsvKJoQKvQRxv4sdWDksceToiESaJLWnK2qruUapeUgBdkVhfgYiGzg",
  "key9": "27j7SGiQN2i6CzQg8hYHq5kKda13Yf2SurRNdwT1yp6JmDUwPAtB8Ucv1T5XSZJr9tWBVHUy8JBkhpX87BiE5n9r",
  "key10": "36TvKhQVJSHFpJxmYg7bsrf7VXW3GPUYeVguY1CWm7QM9VPBTW1uRRpNmDyFCw31NfETVNUTa7DnVCy24eyDSE7H",
  "key11": "3GkV51VEbWdvcj3bG2N5iT6uGSpLMJiCambRRAeW7fGqMuzvMe2ZSkki1jQGQ3HRSK2fttky8DxogxvoECjycfYF",
  "key12": "rn4wgstr2kRN88V1Z1Wu9jKk5CtCnZtq5YSanmV8uBqKXeUGRQL5kBKiN1J1tzb844YRx75u8S27ycE4WJJr9pK",
  "key13": "3n7yw8nxZFCkdiKKf9BNUEKcpSRLmZxCyqUPGDbgPHdna5PBr2jMEruW6SWhTSuLArr6WTZFM9SPVrKJYGxT1HQt",
  "key14": "VUgs1Cjfx3E5KQjGPcEz3WQj9etjefm1AqdS3ZqGKdHF5Vwmqaj575Hh5pY2ZT4F5RRDuqfv6wNYhFDttUDcLm9",
  "key15": "263RDkQacvK4TyB7W4Jh26AxwR4p3VX4zpTJxz8n1av29xeVdsbmpMpF61pwiS8kC7KkuFZUuF4acY7n7oHyXhZS",
  "key16": "5oXti9uQcuBzmz2T1RWM7dkJPQHXxtEov6REvHqwruyRfwQLrTrHQWK94ubeXM4P7ef2FnKuSEW4h36tEEvA91Dg",
  "key17": "47SHCFMimAkM6U1FtmG1QF2WziVwEHsiS8NRYGKtM3i1MKBxGjP8idZ3it1RvU71RsLnhV1wqYZ2FjkE66zRrK6L",
  "key18": "2UXxVSCM7hzy8vGXKn7bvUmpqEDNedUZtcg5KAxT7CaW3WdZf5dmRSdLsYsrr44uooKVtDFY6SBtewLN84FwXuUV",
  "key19": "3SmbuUYccZ1qBkSCwobqmAmQ7hXBw4Q2Jcmcbr5r7j7upUUgCeWZThBVczxrKtaSJiXiJwfqFnMB7amQLUNL1kVK",
  "key20": "2u6TKE39BcNpq5G2cmDsBbBCxv1s6Ba5FDMsU6vkoBzHigJVgfrYs5qReLdiKqs8vZozV1Ako3orCvVogzp6HpZ7",
  "key21": "SpvfjA995Du4P34A3c4dYcyHGA4bt8q56AGoQFGGcszNAve6QeehySdh5QzaoeKDSbBmDDshGrEZhAR77X3fDoR",
  "key22": "tUGdz2FhAwAbVxbncGh33x1AYBHN7JySDn8CxvtRX9odx1HAEZgFSAYvFfenYMQAAGEGbmQ1GCaizLyerwPgyiF",
  "key23": "259WKEu695Fgp8RBBnjrCvBUpNRqn4uCzVJcNzJxjSk4MG3eQ4Z2KPrnnutbMAX9VkWBQ9kbBaCLjSY7E6PmUmp3",
  "key24": "2PyiuSoxJqLZwjdK52MVDh44qxQ3ZdHawxc3em2RDzvMRLntyhFTxinRhNVTYw5xs98yUqykEGw8DG6sGB5Fqtvj",
  "key25": "5GhaK4vdJQcLFH3pWf4naAAr4Gz5UFqGmB8KxvvWDttCL8BdxA9eGhDCHkgcp2cAUdMTCyPRCyeTJfuBAwHFfJtu",
  "key26": "5mvje7QqMoCRN9ytiz3kJu3aW2J8nKf3eSK4jmVWGTGzqG66cntDtPm7JEptzwNpVDcUW1FhrDYePFLuvGjPb8zg",
  "key27": "2iXdaaTBxoWE6WUcnWuii89KoPXA9tncvfDRE1Buj5WoPQFshgochzWAk1AE4aytes3yXRaKFW9CZe3cJ35pH7y4",
  "key28": "4zZiVJDtZsq6ufTS1BSRjoPv8SCPMkAcQjnq1Es5gbfSUyozbMqEfUT9QVc5cf9jgpfuLp97yzEU5kokFzHRahhA",
  "key29": "4UDdxLYzoHvBZ8AMCFp7US8pRRAdnLs5FQb8YfdELHAWdY6g7NH2ze626mhfcw572ggjk7NzUyyoF6sP5nD5grYy",
  "key30": "5ct2fLuZrrbgU3AEJShVHsqirW1DtKoCnFFrgmB8ye1q7YgYePzxPLmJExCR9MxUJueZbYvE881pctBxJYHYz36d"
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
