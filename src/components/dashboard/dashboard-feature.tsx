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
    "UB1GPvPgWPMh3wy6T66MNaL7SiLyw5F47tKYAxUpxLTyd4n3GjkfyNBpAYkrSda9hjebMz6RfigPMncGFTgQ9aJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3nkkD7g83mmnXSuPx6hUc4uwPdNKCzLuMsZ7xKyyXqeLEZMmjiZEhqKNgzchdfbxV7GMUZKAAMK4ihrF2iJwmo",
  "key1": "5W6ks9JT4Zt5zDoKa3kTaoAQFaQe34VWdwwwWR42EXqPnDqc8RHZYXjzWQvCubGJMCVBbkLBdA4eTYSfd27ENAoS",
  "key2": "PyZudPUrZZkn4jt4vPjTAfV6VbcGyHTwXucz4mX7k3mCJ6M8mi8xKjQSYBhwi9yVDaDRojC9pz2UfMZuVRkwd2h",
  "key3": "4T7HACKfzkSTi2G8HPPqDGU37JRVTanDQPq9GjQARqkJVky1QKV89kVqw5rRyMoYdWYrs6X6FnQcC7m3UCNKK3AB",
  "key4": "3PRa1DbQxaeqLootVYM98oXCvXZ2ZMgQwXMt5HZXr45BiJc7TfGtbT1DyGqV65ErZJP9vTX2J8UznyiBAtQW6HhU",
  "key5": "5UNLk1Y9QBiQ6rLMEe2jLpzcaDk4ok5QG28AEhdZoJ5pvQt2fisLBTqkfnB5hgsiEASM9aYUEEaCAvtTfdUuFhWw",
  "key6": "5oXkrBkFBjhK4jFVu4uw8dNCFUBVRNtXYhqV7caeMJLxH7N5hyoK7gpcYUCRsLQWSk6v4wt5AXAcg7sLc4JM4K5M",
  "key7": "3AK3ZRug9QScRBR1RroMNKCDu9Px93ZiPQoPSkLZphzP7GkUpDiECrT7iT43ce6XJ6isALFhK4WeHqZ849qh6rmJ",
  "key8": "3iaPnqp7syh9Sa7qXfwYXWtuRubFcGsWSAv28Xakvgzd9AgdXUZuzM41rYN6AtgtSTt8NNLnYs3zrxA4X2RiBTQv",
  "key9": "2Q5tCzhmYFCNJeNoffjaQJzDSJ2dLsYdyrmH7Z4NjfR5p2KjeUXsHxUeaZHWqgn4sFhhkncwGQyQmpntszygbBKR",
  "key10": "4BrzZSEa3ddFjXW1dVAYuFwvLRBKXcR9ZYafJifhsPe79EubyudneQf8w4iYo6QGwRXAtmB8FJq4Jv4DuMw8UJsf",
  "key11": "3Frd6RuYgoAkJ3MGWNeMrmSSJWQTUWRJiiYRsK92H3T4HrZsHvAda39NCjJQ5siZUMiEVHAkHoKprbnbQKoXE8iu",
  "key12": "vVRshuPeEFxTarGzhnUe8HV8fXjqGN9FAxW7X87qQQF7QsPaokTQfRrisYaxcWyj9gpYgw7pyjTuAE3JWQ2CQ53",
  "key13": "DcstdEPrWW8PsELBRrQsVsJpLmg8x63YFU8tiaNrR3fem4nf9oUutDviwc3D4frWu4RMjhHhF5a6A1MMZGoN3wG",
  "key14": "Jbext1rn45XWsFbWuBqmSuEmjkn2kW7PydWdgGkKyqHj7X5pKKzd8DM7Uvm1N4DR3SFTNLgQDuKaPb5hJVykMof",
  "key15": "2qTZtAx3nYzr1sTFRMwHf6fSXEZPKZ2NwCpRMLi1TUwq599S8MDm34mBtdNZJnth5MKdkw6qyn6NUuJFF1duw8K6",
  "key16": "3d4NibrEb6ivHnFSqKnZwNnrvNSBYESYqKJEaG17hGpJYivtQoxRo1PDBPBhn8CbV8RTKL9sKj4Zobd9NzRafJaM",
  "key17": "5KLBtaAv4JKyU8czwinZRgyGsTYWdzhZFp6D4jswWDdGjQP6CKutB8NA6DApb4AMf3ffDPc45xGdN2qGQxsqXi1p",
  "key18": "4CYQ7TKB1yAwwjbN7ckmFhBm8RaV2uP3ptsDXRk3R42NYzz9PbYh8DE6x66pvEoFhBCsygvHm76B2BaUtnc9vvrC",
  "key19": "4W4F4Fx6dtTGbKcKTQ92Sn1c5HPdJ8isiedQAjLzjAou18DzqycFSwwJCJFY3oGVohvPZwC67kxDBBKrotGozqwz",
  "key20": "GCwjupdb8Ve68BsNpsTghN8DmfduMkHrez6Xt9exnKhHzuWJCtti7WwhDPrQZwsrGD25AarmC36MDybKSASrsr2",
  "key21": "4tn85cDqZ3gcF2RaphNxUN5XZtpXtLLzmMV2qkvWR9h1TpjQqirF1uwgHi8w3kdmbgfi8VGoK5UKJR5LFXaJgmtR",
  "key22": "zchqenQH9sjUNcusRgnsPrCUKNirQU73427zfjYZp4xHCHWuH1rgHAe2HG4TNTSkCuXjgcDvq4jW22JcMG5xSwX",
  "key23": "3UP1XADyp4zisv6bXzzHvtVfpTASg6PGvZiskZ9RFepMkqgAZVuC3NdTGEqr1K76XeJzpkNZrVD3iuVpX5ywdQL1",
  "key24": "2MwPtM872mvtpYAy77dx8XuVVLgD5UaasgYXVwZzbUiS4DuEncCpAzGu8EbDAiuacTbi22M5RhJpnVtKEKfBdYUa",
  "key25": "48uZxzU7GGtVdi7tF5YpEQ45KUvpAQeEKzT2j2S3EPqKNLmihvQAWQ6bHNub5UBLGF6uxtsLC1Bah3yxbqYZHRfJ",
  "key26": "37GYnjWMuweaMxiHxpS7gWW2gX8BvUnYmdAjogvUxwbwA8L6uEqGF9QjxyaQ9b187Y5Zcao23GCNFPVkigpGqJzn",
  "key27": "4C65GmvGzbyoQA5STvztgvFhcGc6DugNZR9icDwqPAC138YrKoGYfQBGtUZv9MEuiGoLS8cXdHDTXb5ADktiAWfB",
  "key28": "2C69C7x9zpUzFQTsZcmvWw1NeLtGfRFuzBouM5wSNzU9ZLtcJm2TDN64jURWTkTMWHC235ttV42chAvwX7DyfZK5",
  "key29": "3w7SzYsiiXyk64myBpgrzg825VVZmCzq4TCtr1nWFjqWj3YHtHtUoUpjCbXHFPgMsjCJ9yCpyYfH8CnGXQAAPnZw",
  "key30": "56pXfuQnKCvLzs6zvXs9SUmeiyBfihL8paxFMykg1WairqgpJ5zMWvWqpMLSHZPE7omv69ed6RT2vrebXJSDdKQ1",
  "key31": "FVt9xvf11hBz3xCRseRDgNUqUAq57UrGp6qPPyZw4ecLFLzrS1ZL7Dp4QQHrnYBktiVxbYKzKK8qD8c57ozPhNG",
  "key32": "2xxBgUXiUJ78mZVVd39M88kHKwAGmKQxpgpi3CPtZQwfBFvBE4Gu4dkT5F45DPpMjjhx2Q8FPFXdLMWswoD7rzpq",
  "key33": "2LBWQ54rJHyUFvzTfCBBarNXCK2unsdKL44cyPjkEukGza88uPVELU32EQS3n6VQ1N2xQRgVcSANjXV3jwwQxfhQ",
  "key34": "5kL8FQuyLXPjbtPSijLQczowa8MagXevwNi3XBNfq18UcuH4hcxNWChMFmHuUtVL29jiDg2d3RDaNM12MKBwpj9z",
  "key35": "4LKH1YRXS3sXQxXfHLmf2eky5tEcNpb8fNS9RTFbgaZxfBfoR19AKFCtqnvoLxpJcmus1q3p8x9xLhuC1bxfzoEM",
  "key36": "2xfeRFk9hHJAW3nyCPpKARXrQG88my6qAcbJsQhUGVimH64xxM46AqYc7cMftR8NuXLHHzVKRnFZ4RfNa573VtAh",
  "key37": "2sFPCyDu8QxadR5dpzsPVmzgYESdYqTu2rBjUXvNb58qFGMiY8tZP32iTzBah33x7viaY7fYyjE9kuBWT5J87DVC",
  "key38": "fSLdPuCxvxseYFMUsaNyuTFu9CG1RZ5eoAnx3ERmsC1kBeF5iJMCX9BmGi23KSvQAwuna8ogYwfj1B4nFRnw7hc",
  "key39": "2y3TdspAy6anLpbQdhnNLZccyrrdbFTHbKPnZtTcR6kz35g5BUz9goidw86nm97FtZ2stMwDkyuc72m4xTHPiPSg",
  "key40": "5HLKf75LAxUJ3VeA12LV5VzdHbGN65EbpXK5NP2RxuSMsh8J2hQMu5ZiHbcLcE1uekWGPbAUSZaVrc8ZEdNQgsub",
  "key41": "2E6eS2USbnBXF3pvM8FfjoBo8UWW9JFYgCjm2ScMQxEUqJum3Kw6AtLfJ7L6RYBkw1WYvKjSf9CrjhcZmd5XsYr3",
  "key42": "2f4dPE9ey8KRVQG9o11NvJVXr5JPzGnAxVYR5zLgjtyJc9x5NzTgNeEHgRFdLQHk4CVR5z1NiSdwVcyxqkiGWfAp",
  "key43": "3WF3VFsRKx5FbPspoAzZVMwfjtukiEooB9iaoyd4oNHAJBt8dkWCwfXyixc8bqSddPmpB2bNVwZHr9dr6SSatXJt",
  "key44": "2Nv7GatJCcvjyeiBib2kTR5xYAyRRtoGJmnh6RaRQYr7rthqNwqWJfmsq6tUuix522dycQUtEGqRyevzhkRL2Se",
  "key45": "61v7xEPZp71KzTUSPGhxp1F9edJKeaBB9TBWxFqcuPhgbB7rfYpbSpSeHy8EC3cmoKy7Z5LCmfrB5CbkxMa36pjp",
  "key46": "5kV6ofTSZGV8gzSXU5AtxtYzxeJvD7QvuPrbCTQkCsnnv3ubkRr5qrpQjaoEzdHTbL4vMUK87ZtoScx58W8o8zqi",
  "key47": "NEzFAEwbrDq26oNiYZfKmD8ZgDbaxN9QSzfLNFMUkJhAe9i7G1SGfs3jCE5rtyKjaDN47Fpc2FYhcPXn452en9K",
  "key48": "VLzc9XyG8Umfztjd5rtzKgMSLZADFqgJLrhxsmfb92vrDUaMLLhMFJVVucvXMhyLp8Qo617bFkimeJJ3dUfQAEq",
  "key49": "3wiQW5KyaY8d9YYBCj9G8scXLvYzjTEL2yZ7vmD4tFaiLNQ1nJwx1paFxPXwHM2btroKsXWHun1QCAXzwjQ4baQ6"
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
