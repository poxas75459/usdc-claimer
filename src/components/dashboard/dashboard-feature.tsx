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
    "2oUWSWv1rbnED3p6K7CmTHbf4GUdpzNZNWNV9HNSVo5dApHuwxbkvPyJv5kdDgW5UnXkY44Pz5Q7KVNpEuLJZnGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rMnie628R6S6y9vxz3aG3UY6WFk88NcR7JHQMpQaRA4HEXntD1Rqr4St6UELaREvMioPTgL1taGUbf6ofZqZaP",
  "key1": "63qcSpMSJhoGYUu8cFRePSYkEZL9RjVvarJMezSm29aoNFKZbERwQkrQkp9UbwJioMd4wtkDJQaLy27MmVb1FUbC",
  "key2": "3z9NR8dBNPDfkm7fVCZnx6Z67kfQio51hG2hpTz1gMYyZCY24GG5LMmZcHNhsENZDppo4nA9nRxudHQmkj1STDAf",
  "key3": "3fp8oHwnpFcwMiCWeH5GD98UhuZ4ywE4BQDQHfwzzumfgXVSZWuhYawPVJVptBuXSrtUMkqk1WvE2b7FE9kLHgzx",
  "key4": "2Cp2PqM2tkxmAnfGY3a7HqsS5j9yKNNptdWcPfFftg3Xau9pLffTGV2yzbFnUghuu2fhGEPHjCVe7jaAXfE1oVTn",
  "key5": "3aUKub8PigwoNik7zH5Q4SmE3VY76KPr1RhhEgi8qsCumXn7LPKhZWiq1x5FcR8EYTimMD7sPTFVfCLGa2Lyfbc2",
  "key6": "rLk5CkbRBExFiZVV4yXzvCH5SNYzeUmThQir5DAWBDfjowRhY5b9PqKKAHXirzMsxCfJk7PFdZgoPy5prBdVaJ8",
  "key7": "2YDiGHRj8n4HycYb3HxuKAzvXfGRoa8adc1Q3Yq1RQquok5yyWj7zhb7mHgiRscuv8RiXmKiARQVkZYuCPWRTyoo",
  "key8": "2K8nVxKcMGFtHYE9L6QAgt3euDvdUmMJwgJBtxZ84UBgqXcd1i4t4TK63Ug41codpSUAuHneGDV59ZxHgL8e4YUq",
  "key9": "2gynWMeZMwV7GPdWyU31diYpTpwmK9tU8pPMpTuXqDm5vpuhiXnjPrLC8hzr7M28v2qqirqTQmKcJDyGXdHJBSZ4",
  "key10": "53u5KMjnAZ9GZzoKSzi3Axu37kMetvMeCPQgxXV6gNZrt4GaGLsDEJ6use9yJRUkP8qnxNGPFJBnMYACZAM3ngxw",
  "key11": "4w6xWuV1uS1C4PyqqkUGk1D8aB74qiYLdTpWPmhbuyXtQpPVGnksiirVpFVoHQV83vJrtwPU4hhRmfDiLUQNeimH",
  "key12": "45zQqqizDAsLLfPB8c1LmQJDYD7f8GivaaM4dAcqgJKP6c63Kz1FKuMtrzcUzLbEY3HuYHzhmZzMTXqUTvKY99SQ",
  "key13": "3soWB2fQYNc9GRr5YqWYcpupab1Hxngf35Pbu37F4tqyyt5QVKQeczioxnzEye4xT25VFbZgKrqYNrcFq5eeW3Ye",
  "key14": "5i6KBfMUeFC2XdjaAguvLUufWcMr4XdFuPzDzB7KeZSyHDmY7qfPyXMqECmWUL2FxysTvEZAuj2o9g52wiwuP1KB",
  "key15": "5us6UkpM2YTqjeQq4WfREBV7G9qHVfxC3rnHVCwGt74ZiRgV7Na15cJfvX4wtGE52WM97NPcUm4c9Jfvajtvw5A2",
  "key16": "eWL6QVJEDQyze73pTLeygLx5D1XW3knjTQer8uXAizQZbhTvYNnU4ANzfyVSu7oJbq7zHohNzm7nZdMMZYyLXS4",
  "key17": "2qgno7o6awgUq7GC9XtxRZzyQoQoyxyVKAHWC3JGQZE3yPKJQXpLrcPLe9b441KyXQ7psN3iBrjBGpDcAb4sCgWf",
  "key18": "44CTtWe6jiJFXSRfet3uV1UXc4X91uye5owV7Yb1w7Ekgga7ikuZdeHrU2FQjSTUAXeQw6nGJ4rWm4e4bVCmouks",
  "key19": "66K5BaJrYoaA3p1tHQFGGQjRV58GgBU9ogiaxDg9v5XJqVAREfeLrLGQFeXbBGzLQ2DDvWdYdQbKciuongMTZeey",
  "key20": "4ehkWcUSPi8mctoZBdgLwqniRq7EqJEWKaGkTHVAwy3yS76U2cjUewiQULkz7Jup6zeL7FmZ2foG1Fi2XcRShAgZ",
  "key21": "2eCAPq32m8bwA3qc3K17L4c37HH4tJ1J8rYN5NT8CVFGhUPYz2sWBp5xAYKSuyLYvGbT2pRnyaByoPxm3ew4qpfh",
  "key22": "5rNEtQq3hUQVZcAdLgrG5E1Dt7iksPz4tQHioy9fqQvop9vngvQaq4GZXbTA1S3kaWZcSgA1dhA78PuqC9rr6CE2",
  "key23": "2xmcsW2JVQ1qidZRKmpziZcN9JKcT52EaqPE7LgWB5szdmWEnkQL7XuVKqbfN4ghdo3sWJfLbLFm5hhcdrZwGkfy",
  "key24": "67rJWuTFXz8BV1kuSmxyXCN7bfxrwScCSV2NbDE1TTMUemnLqxdZ9BwCUCjJHZ4wd8iAuoFxVKLpjD8iPSM2t8TG",
  "key25": "5UidZrdTpG7wqvXFUFb7zPGgE3WcbXK1kGov6LEDj1xDMWuKQ52Uym5xvAWeTEdEfN3FsBHM9DimZ8wu1mBo2Res",
  "key26": "5m72dtTNssAKmbTktKgVJArWgvvomqkbevCLDu19NZfyB3ZUwwgnD2oH3vGfeKp5JiQR1tqvF3TRPTMAeUipgWng",
  "key27": "3SiuMpBNx5x9WbULMgqHC2HQJACsfyDtnH7ECmX2AcRDubyYF7SoAeqgihapqkUbJuFs9qAwKRk5GPw71uwVFUny",
  "key28": "21jm63RsnydLYdgRvZjgKDNGL2HppneQDePQy2VVxMD8Az8gvyqtW7aW3Zkk2D8N76wKuhkSbQK8F7wGSvTn1dzW",
  "key29": "2CL7pyQtC9QaLAFQdL6T3d8WWf77hRsMH1pwXducgz775LkGQvJwYnxjdt3JxACXZvzB3Pscpg5Qc4cWU8dJk6ZW",
  "key30": "3GkesAt7pjPbw6C534nhCL4n3gFf9r224TKinGY9Bnbcfjzbkz2SWqVEbxrX39zH9amqDK5Ywg8FzdbBzD5nxGjn",
  "key31": "p9DJE5xCYiS71jU3BX3LmJPUWMtFwfVyckMKHiWVywonHCNTZzFHdyMBxc6wW6n6TLZS2oCjJQLGv5oWrMnaiqp",
  "key32": "31yrZ3RJ3UpuMCw6XenPHZueHMx3XaDcgnTfUUGqUZq589sf6ByPEi8v1VyCgY1hvpRbAVo2JCeb5qiWNVyFRm4t",
  "key33": "5Kc27FwyPhx8VE92V4L1v9isq8KKjfMDgdEkYt7bJkLbKnpP82gcXTVNaaznyK9GrnkqQ5fCtz7fwkCToGBEpzKd",
  "key34": "4T8UDsafp45uwjVsfrDB6NQW19rU2SpvgtJ1kyVCtTvXYpAPKiLZJ1FfsSJuM58WiKi4Lo9GLDx9nR3dZAgfoMJ6",
  "key35": "9kWY7yRGujiR4J3X6fFiXpRbW1mzvFfHnLD72RPnBqPfiFEjXh6pbbitEyazkruW11QYW4bQzwUh3eoF1Tcu5oU",
  "key36": "3yXnLUH148L3YSta3oBUSadpHux6utBBCZ6nix3bEiEu3bM4tNckzwcZDUW3YLjc52YCTw5NYAePLLmK4goDZ6LE",
  "key37": "5y3AaR7WRHWHXuAFh4RAfoyBMeFAoR5EDn1Eoy13TwkXEQqkPCWWjpXFcdCk5PYJVZjxdZUKR32zypqB4CESefQC",
  "key38": "3QP1Fs1fWh6VSC6yNpTYhEbSADwB3WsE4gVHg9gN4kQ7BfER2nLNPwPcHSoJYtyB9vqKbYHq1ac57Tt9TsBU5AzS",
  "key39": "66fPrrG66gbBdtTtcNWwhFpZgD4eYFfkDqqSTo9xZUr8MCvv57fy2XEzTfNEwAedUPZru6wbdFYfVNJXFyefXpAq",
  "key40": "W8mLaLsTDL1o5uQgnQvhvLCTf4A1CXK4cUSq6N2hHMLUFsyWmKFL6dw2igtaci5TmysqWpzbSiQtZUMvxveGSgT",
  "key41": "4vbAvrjTmyVBNwkqgih1V6m3wYZ7EusFzotqSWDT8rCeieWBqTNmyFEHJSuMYcxuXvMqmyTKHwSkwXkN8fwL4e8z",
  "key42": "5rC8uaSBZ8EKodXfKb2P6Xu4jPpeRrhWiSa5iuHEusCSmiaXS7HvwLr7gJpuc88Do6zfdpwj4rnBdNNpFp3ZZKrr",
  "key43": "3BASX9XfcQk1xsUKfobTf9q9JpiTqVQ2xL9P9UwKEimPuPqfDxHDgLKbN6NrvZC7F5ZdLK5oJv7h3KiA8BxKcZ44"
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
