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
    "5SivaA7aqdXEUcQ9q5dNBchqz99vKfBiufWKueEaxfGUZbaCHHfSQAwF6EtuXM8ghUf4LiaiDPg4yXZVaQvXi8SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5zHh8Bc8EzV667tDSjkjxeMhGYhcD366UohMo7CR5HLhsVDqFPVroLn5iKDc5uasGizdcHQhnDHpa6PQJExyv7",
  "key1": "3M5xXPuzdTbJFA3TPZxD93rQtL2coBdH4mamrJyErbMaHDQnu2osK7yiUQxyjg3LdVxDGLVz8eiyhvhdz94N3stF",
  "key2": "iJoGHyb21vNfBvh4yADSVTpgie4sooGKETNgeEiXEjwm23Nu64tKp3szNCucYndqDpRFKkXLBpLxM2pQN1JDeoa",
  "key3": "4XhHdydtUiByAgdCkLN27sJ5iyu2U3MTbKbrG6kxAMCa5nHCmzGRsB8vsSTgr2PkVb9oGcmthXeqGdUokSBD27zB",
  "key4": "65KnWX6XF7RJmMGTuK7hYAcMre1dDJmRCSshsMfsnekmUhUS3TQsKhCbqtt1V5ggE88yE8LUCfQM9ngyAfyTfLrK",
  "key5": "5SK64tSn4RqT7wHBiWiCvmxT59xvxWViUnhLXsJHS4x954ruZGbCvdnFrMGUhhZGSFoyp9pGyZEJ7JooGc3yoHpN",
  "key6": "3W2sdnMY6CKqbHLypsX6W5517PYytoTNX39ZHbaZKqVKaHKgEvUU2sdvh8u9rtedxFuNJzS4TeFka6iPJpSty18X",
  "key7": "onxVihtqGdgHHeEGG1N7M9zsdTvqZerXv5n34tG7g5uWxZC6GkzZk8fzUKpBHp1Rvg7n6w4snfkJ3RP8k6P9eVL",
  "key8": "4HR7S7n57kuGd9Ns5en7HmnLMzExASjzSkMCRYXEs8dosDTY4rbsUNpf8R5t25Bv9fJig3UPMHY9rqqkFirtZEaG",
  "key9": "5Jzg7Sx3kycG41pYkUzviZvidid7PpS4hvciyqiMt85tFusjBsKpbesdwZMeuLWYntS6obGETJaun7PPVFJxg1fz",
  "key10": "47R7joevjY6Rf2FG4nweTWjywTPfy8jWiSd7aLA2mud82M6WLF7pytqMkvsQZMRvKpcJ3iWkfAykoPWcWd2SLG3S",
  "key11": "4AyXdgDaKJQAocgmCtiyPozFMKGxMtBvxFGMWpj3woM8crg3eQLrSmn37ksUyLE23ZuinHXPFdxw1ZWDT5tiuc57",
  "key12": "3UfvGKy7r711KoiSf6JiyWD5AQ319yg51zjyG5d81zyLHVP43fkAjJnVgEnyVMcetL3eR2aD16xriEhtRzkgz4AB",
  "key13": "5MfER4rcNo47gzypqKUhqn5G9TohYAjNQmqimqkdFikeUEU3j9fTQ7BQxXpGVNccGGXiNzvaeys7qJqACTmUjZ2R",
  "key14": "5YzEEjZh74u6fSYmYAWNNLMWzsQs17jTbyCmuVPeiJGC5T25WCQMjYAwb5xkM7EpVizzSPz4Y4PFmeYU2s7r1ncm",
  "key15": "5UJ5bw8NcHr42MZYBPmYCjTM3BrMhmLHtnCqn9uPBT6yxZHuNYqBLwShmnqTdwoXz8swP1HTWJBhzVQEUDCniHzQ",
  "key16": "2PfgGg71fiDmdJmgX5ZYxe2wdWgmeUBTBRYHRFXapLUAa5G2RZQ24DyvhXwaJmqF2oeXz6xCRFCtZ3PPfFuC1VX6",
  "key17": "2Qr4ADHX4nxhAwUSxc5qTMXMqpAe34bTCP1Hswtt1M8USDg3n7ZTXDgy1Ruzo1T1JURDpT6j1ZQwvyi9CvjhXixJ",
  "key18": "5mJK2FHJtrNqHQM9cT8DP38vWdPdizQPR1eSpEqV49MDo9oCrBy7Mexs8GiNUma9r1bX3g6BWerWN9TWvTYDPoyY",
  "key19": "2AZ712AduJUxWD6MhnuzNaF4qYvF3kPag5iPyoRmBqjyKUgoKXWLoggYkW9JVndpTqvKC3UNFnb7aHTEvTaqvbTe",
  "key20": "2sXbZoa8idnsZoXZ5c7Deos1JpxrXxSzww8NjYh5xfNV5XGHNVP35r6PyRQYS8W9SyPWhTTwJX26giXmyaYujzSL",
  "key21": "3MtUg5bTW4yuqUBMWeSSAJiY59aJCmLmmfU76S3XjqmqXRV6uSye5JzeUqTD7KzAXJ9fqm3ctQRv8xH3n1SRpVUB",
  "key22": "BE7PadwoyTown8ph2Nh5jn8bDeeeUYKU8z7E4JxPwxqQF3H6MivMT5ixjpR7og1ujw8Gvyfc7SZbEyJ9na3eJku",
  "key23": "3JpzijnW6ojfke28FDePSv6nECt3d5sgeZhqCHyiUp5Hm65qpxuFACYiU68HUAEVihtXxLgUPqQsonYjHGcfjmKj",
  "key24": "4mK2XcvKkApjZhxgn7qipM2SfnxNW8DPhCbpZSbmMcwYdPdcV8f1qfWH2njMRYo4Kk9acBwdKAaMNbvY2oWjnrfb",
  "key25": "4DrDA53XQxAEqHD69McBBnUcaVfTDiyVXgz5iVJ7ber5MxtyGjVmXqCsCe9R1DjzunXRQX5VkUmhx2buMum5PkHG",
  "key26": "3L1mCukfPnGHAs5Nsu2opBgtYAYmjV9SkiUtTWJZZPVW6rXcb34R9cp6ndG63oHhobpBHpfaB3nFajpP21GoQ9bT",
  "key27": "2CPt1wMFu6MjXw8HEvTav4WusPcs1ti9xyjVXwCp7PnLRo2DPpmcQhhJdHVu63eNAC7zZGGib63JgDC2gPd2er6y",
  "key28": "5JYLzSvWomMa4WzyxqkFmmYssUfZWctgSpeoGn8Ku9TnyTTNPkSJonJF7tpiDX7Mnq58D4LNPWC3SzJEPQAtUhK2",
  "key29": "2CuEM8L88hTqHPm5EgFABxJPqUhAzoYNJejkhctk7918nCGgWo8KKGCWCSQ5j6Y1x8CjM2TULE3g4nrDYfiUqqAJ",
  "key30": "65UeXHzPpNfTRs7GmQqbZZfquCea4DWiebLSf7m3tTHh79VMY4DF5c2QERtqcKkGRUb6yVMF7ndCDWyXjygMZrkR",
  "key31": "3AMeBdsbgWH7tACKMYr76GtBrFyPdaM7GMifuHWNTyENwTMFxkePq6ro7nEyHYFDBa61tYskvdd9FfPaADCQ7x8s",
  "key32": "3Ktf8VXckvioTGLUrKVT5Yt7qQuqSkhFZRUu2Ekb2EzLuQdr2UV7e1NASkSGc1c62kXPqCxiPCoufBzWy5TVGXcp",
  "key33": "4xQ5zxEanbXdKT4cBDeBZKuAf1qgssJt5QPuVMJwXymAC4Bdx7bAefKFcW3kzPdDUmqTxbLBT6SeKuAX4exHn4hi",
  "key34": "3mK6mKavgP9DTNYTmXSCLLFVQFhFLaCCBw6KoTfXTPpPfR1oixfTvDQ9tdaQnJq5h8szP1vknoUUxWS2Z3bLVST1",
  "key35": "5aeMcq3MJfHAxXmJjT7Wc7CkK9ZEaF6YfLSVhwWtTeL7QkdoW5TWp92Tn2BYdsFrHmfHJuqQaUfftdDBw8rpQzAR",
  "key36": "2JHExc5BmeAtTosCMZJdFeFCsM5j5WRxDzSkkWtab6W8fGK1aSXtEbsQ4Rqgy133Pa4q7dbRKsgysLNy1f5s3QkK",
  "key37": "4fGfK3ifr1Z1pY6WUhD1FPipJQZ5LcCY178VD1PYgPT91WSzdMXoaG8dUxtQSUQvDhVDiV5YiX4b7g51zwAUoSUJ",
  "key38": "kb5DUgGsr47LPteTCj56MVdhrXKKmviRa7yt2gz3Ufwu3hJc2fPB1voFtPTEUXB1j4afJ7H27Ly7dcqKwPDEm5k",
  "key39": "2j9fb5gY6MsQoJKRgKmh5yE2fo7mN3NMijuX1zPGYczXSxtMRJDsP6ZNJrmsvGbFPf1SKE2wzfUrzAwQRTPjYZ8k",
  "key40": "4oWGfSkjYZT6gmbHJQw6XnkRwN4qH6X3fpEVm6WUn1UTrTkeezmkcVt4LGnzyE7LrvXH9mj4SQXQwx4TsxfHZSBt",
  "key41": "2CykryEFPxGRcjv2aTdZNmdLwz2Hbm7mq6H1Qiug9DfjoWEqp8Ewpx6NVddhpVpzrM9gwAMzv4qSWiKSuMJLhBBc"
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
