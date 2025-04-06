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
    "vf95JQfhgCxXtsD9AjuygEy8LvQQf7uHCUEPG3BuiVuo6WrimHK3zPU3ra2NLhr15Q13AuQoZ7qXhLESv56uTzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxHSJ5pY5uZr1QccrzVenW8NTot493JYCP18Ud9bZ39bZfvGvKM3fKMZE3tZ7NnmNkVkkeeVULXQCAqWAAy38St",
  "key1": "wnD1Uc5Un1vZgKQkR3r2V7iQnKD3H4qaRENftm5DV6VMnA8mj7hLoU4ap8ci8ZLV8oomzKBT2fhRNgzTeTyQ5ZQ",
  "key2": "QbyHFNguDsdPk6eeiCe7bToL7XAi8WJFDXKXGTx3apkzRyRSFnt3mxH94yz8k4oaHf6VLbVk39vsiHJ8itwGKma",
  "key3": "xgEb8yX8nqA1BmC5nXudop7BGZsyRKX2w5vSfRVMEbnzhLuqCkGqYCGQU5L9cwVPr96dckM5fKJFcZNPoxtmDoR",
  "key4": "4bNDjJ55GJzCpAGvGfiB7YBQCD82m7eb8LJKi65bxBapyojdbf4iBsMb44qVnisyVtYqfvi9x4UYy1n3neCLVuSD",
  "key5": "Ym4YhAxBGAdxAm7ojm8ucHEwk7YV2oQoXUyBPoCNAEdwVmnYqtT4pnz1m9xQSVbBzuFKhJh4sV46WGyq1LUyVQE",
  "key6": "4zsvZbdjt6LqYLo4JrnJfCok2eKWomCMmXf8VnGcm9YrWLSoyoQ6PGZ69g61w5LfqEzGDKr8MzA5wY3wF6qoL9Ur",
  "key7": "34CUWNPZUpZN7VPx5j13488uD4XHw3Ui8vcHhyjykTLRgLod2zUkiRo5DTNGs4XZ3DgnAHXD7EHhy9n5qQeP326K",
  "key8": "5FVkE6MjtSjVd9D6sXEgjPFkLhLGwRyYQjpLV62Hs4LP38g2Pf7qMqTa3AUdwLie1oZswhD6QUKArzTTf51VeGzt",
  "key9": "3D5JMWrLMQiTU6Apg5Q5GAzbi9Xub3Sjju3h4dWs4xU15ZBYGBw3u4VLQaxHWHdktDW8qVHx5YYuvCDcHyGdRX15",
  "key10": "xLNHdcMqxKE7QS6icCJB6gh5TRUVEgp1qPdsweZuaJJU79ycDTqfpw8AsEvpr1wgKNSHC1xCW5ySUuD26ZLiUc6",
  "key11": "43DdDcqrrRT4fDFX3XZY2ZwehNnJmdCPr16DWrUBYWzyc8tsk81hMjeg6n9Fck666GiPPt9VzJPQJDSGnYXwAtq6",
  "key12": "28HDg7mkzbrcmgCg8JQwBKd62r2d9XEePMY5ArS9oid2Jt6imq43FigFL7mjh1DbSVX1jKGcSKZ3PsjoJF8iNAgi",
  "key13": "pKw2CDeXhPQiE4jTkyuMt93d2oYNnkh5rMVx1Cpv42ZTW43xj1nkpzvNCQ5qMcqD4FFnA6m5EHyR3DHhmMjP135",
  "key14": "3WPQFpY56zpmZAUrsqFyoFimwA2TJFwnkji9fTkWPE3eAB7tEL2gN6PAeWTVpDTMcKeak6KKq31AGbSiKCnajHMx",
  "key15": "3uVHgmyDX7ksHJ17cVgM6hW8tAh3DdXbyfztXMucRBZG6VxoivFQHebADU1Z6SaSuyjPkF55gSypYpCbhsz7N7ti",
  "key16": "5tHJ4LfpyeMr2rdiMjjUBdYPjAhND2kB2vne9KXmErBQS69Zo57pTeTxWcd15nmb71v6LUk7NABHF8rTxGFCXxiQ",
  "key17": "548emwcNKaTb2wD826nTNqZ74ra9FQNkoPT2ZYgrwX6y4YBpLGsgWr813Kffv57fuVYgQAGV62RJm8N1JZWhuEXo",
  "key18": "4zkNXHwHqfHJA8az8cn2NN7P7dX1UaqEPuD99Hs97hKkCHwoGf2BvKkbr6Xr6W4nfgPDuvLQrPx4qeTFPgJXGQhj",
  "key19": "4g4LPQZgdQftX27hyaKheziHZpT7KSX9nss5b7gWNg7sfdiNph7agJQLkwzLNAPRBKb2iJ2HE3Uj97mRoSRJbevx",
  "key20": "4G9iaMNuBGiezbGh94T9GrvWFv5UdjSUpaYSiSbCLXrV1hFaqjDDjT5dLbaKZVVSSZXj5ptiHPf7J6tEhvN5Jp2Z",
  "key21": "2mTjh42MW8H4JqmodoTYi8swnzAeSpYvSdVvs5iUcrPEqicN7MHDUs62PriB6sPrJm9kzHbKGNWytpj9bWsdjkdq",
  "key22": "5LHNeNYQB9tDVYsnFJS6jmMTtt3ZQv54XNQE93tUQ5pVMKajqhmqfGeSPiRy22UNREucASdhKwupSJr9qKofubXD",
  "key23": "66tHg1bv6QD8TwAihpYtLw29zjRqFzp8oUuSi6yctyQMCMzbqine5XZxh2rChrDu6mBBX5zqeU9cVCQ9GBAxVsST",
  "key24": "4xc3GfMnSEFkbeYVEcj2ekcV7oshiUsziSeTujCM1ho1BpBYpuEw9gNgaPBNymTajGTY22Ux3pVJEBTRNFPNwkrH",
  "key25": "67V96qULyNwzbX8AEgauceg87cUMz4TCkQjfUdBNTdT2uuty47jmtrGqMcqzp3ThHSJjFAzemRrC2CksmoYGybUS",
  "key26": "2eZoy3XwE1g9qhZxdXY6hWaBzzN8iyWFniK1aosFRhtPdVwcYvC2z9HKiaeuMf9gPHR7v7HCk8vehxQS4FrzdPnB",
  "key27": "4GqEAf4b3V4DP54Ch3z3gyeTHozCxyKbozKMFfQVdkHA2NV5Pf64r2RoyQ7hu2yVR2Zt6Nw5GEzaUTH1r88Anumu",
  "key28": "fa6ds1mQ5avVRAxCQZ39vbHjU4wJeVubtUVxvsT8aSKmk57Ztn3FHpyLBpZ87q9cgmJqDLAAE5VmC85ftUEuKZ8",
  "key29": "4RKwAxjFdLV2kDuqeucNt4i2Teo8rWStgTda7u2cFuhsHQAHwNNX7Tn8kBrP1LbHkt3uQAPYACwNXGpgzfhpYSdU",
  "key30": "5i8KNBBgg9qQaMPPLYZEVNceHC5nqzTvbpkUJrX81QgDkQKJJkBLgxUN6ufhjgn3pgo4g7LYVtNG7mJ9e5P8yd2C",
  "key31": "3c2skS2bjHJK5B9vEJEehJns9r4BWdwk8jR961x6gzVeXrEG8qAgNKd5P9AWzVftKKXiUrpwD3S1AzJQbwThpzaT",
  "key32": "4LQzEh9fBtArNb8qLhgQPJ4VZDSH1b9SEKC84Qzi7R5DZWPGJV5vTNT4RYTvQQTwWUU8x1mLX7MevgqNvZgWfTqu",
  "key33": "2JMQ6A1o5BPRb23xmL2SD35HUHeCPfzvyCfseLbjW8cnk4CPopV89P7A3LoNMoMn1dWrPoUxqzLSrfpgTNgYDJTw",
  "key34": "3hAZaGxmy4HpXE61WiXb2EPNU3BtxhvefTR14BZowTNL8sxkJPtLcno8twbQYUYXeA2uNLkitELn6SMEQn9gsu1q",
  "key35": "3oGhpsbXQta4QrnBM1hSSjN4UjPA765Pfz8HDisT7A64U7cFfoeYNpBneAVy7Xj4kKqiTXodPWgtWM4mtncJhdd9",
  "key36": "uRbjHswh4sXSBzCgYbN6aabKH4PedcfpoGvyXiyFJojhDTECVaCrsQp6beZLqwAEPRCzoE7WXw41XEojMAe3bAc",
  "key37": "3wpe5QAEnt9mt4BNjNUL3XNUPUVxfJPegBDXuYaphUf5xKdhiZW5GtCSLL2DPM7GoYVnqFhivRQb48syhgX8c2ra",
  "key38": "2kxTqt87aySQLWRcqLa1q8sbLjdQBecEC8ohJJ8W3t1J2GbHbCoebRqDYiTHmS6iYWUoW6t1z2c4y6xWgacygdbB",
  "key39": "atmePoF6TFQ9WcG35smq37gdF6nZ95tabaCj4bW2UkAQuVoeYYzcPQmsg3wxr6PmT3pfiNgCqDDv4NAQgQVV1Gd",
  "key40": "51uh61ii1pzwgfMhsbtw6TMAzRcxzhciYYGp9Wyyww5dEtZAWqj3YpX2xksZxC9PXkm1quweXRhND7HXGbTGdjMF",
  "key41": "4FDCxJmtNrLED8fidpXKRcA8gSxws2ZnyBPqCEANwbZjhz74Jj8E7LxkCtuPu37CCwiRNy6dn2M9fnuGh4yYBXUu"
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
