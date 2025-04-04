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
    "f123ixpUwDQ8vmvacVwz1TxqASfacH3nqrcWaiCxyzbx7NSFWS1qzEze2SZMerPUJUty18cXPSpDuz7uhQNhusW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JAft6s4YiZrAuJHAnX9LJaQLiuDZcUQb8LD4JccEe3LB88Fiyh5HJaHBTwBjttZ6kmwKwnWpngaGTaSTHEHt2si",
  "key1": "5a3kTEPNMitf6MQqbmcYKGqgkz8WkGdU9oa6GQdckS5ipYgmKjis3sHJqBoc7rfPJaATLs8ucKK85rJHpipjY8wF",
  "key2": "58a2GeYPdYa8jEweqoM6zJNEt7nUkhshAyrcGRYpWRkfMtm4SV5ovLmcU3vAxdzrYchfekzFLHw9E8iU4eJY1RtV",
  "key3": "5mgMnPyatXCLfJaHxuNZgpUqsqTfWyAPyN86MNA5AmGUTW36ugXv5JaLPiQxM8aMB8SFzG5mxzPm9CWz3DrjExAN",
  "key4": "4nW2GirpZViuXAg5zvkqLN35DBAogBrLaM9CaBiBrxPNEtBtMkaaSBpZ3ySZuPGjAjeDmknbh7Y9LtzNmRZNptJg",
  "key5": "5WM7ZGvCdrd2PzjSxZe5zmYF72UZUDRzbBbR57SCgE8VNP5bunx9KKKMwcHYBt5BEYGzz4T5i5AX8wjdUBRBFosu",
  "key6": "4QLX8A9dWQgwaLEhdjYYhmd2WcywFhF9qxqivMeonWs1Tju7SZWer4ntacgWHshGtoi7DsKynxTbC7Btb2hWiP8c",
  "key7": "4qWob1DmUB7ZUPUngL4koBjCcPhzjyJYvz2aoLwGv9QcP451w91kjZgu27vg6Uy8doP1oD9urr6BN6q3wTU8YwuB",
  "key8": "4r7wX414gXrCx3wR7rygmgMgF4Jv1T8asPaa3CdjyMduytg7yGJfeP4AgTMRevCSnZAszf3J3i2X7JdMwDcaHHKu",
  "key9": "3Diq4SkhTEbMDnM2RQ3bXxZMjch5W8FoH2zHpBTx9sDT7GohS4vgoqyYj8mjYkncnEWZQpmNMmb7VwxRdAoRgATv",
  "key10": "jeMUpMspdkF8rKfVwEjrFbrC1C9U4XggLoM592Nhfhy8rc2PmFAzRZm3RrwpTQSLxGkTnXHdFFArHCso1sp7m59",
  "key11": "2tdo1jNqbkcDZLoqVHQcicGwuD5KrCugB5BPY6RLBpsemtV3FyFdY6Bz7TQBEbhXanX4h3egHaEJgqBt4ZB57JJU",
  "key12": "bp1rZAeJ9s7HqWaLoFpqrSwjBk9RjYnND6zhwJJkJXtEhxfLc8C4RqQ5LjgLtP91dWjyQGMFqr8nvTK1U9LDAvY",
  "key13": "4diBwgSo3QuBt9X8EE3opaVrdiVeBEEnxYUKmv8yS8WNgcTtqvsrvaLpWWpT5obBQU1xdk3mAEdZa6zGsXiDYUap",
  "key14": "5UDKuPhRj3BgdpXXfMdndGmXk1yzeNDV1jAvVXe2EKrJYhnQLyhXFHqvYH1y3issiwFxjbVNh7kAr3TMN17ndkmF",
  "key15": "2aUkBhfWBBtqrH3D3LVQu6zrqfYkNJ36LdNV2t5VzWeTcfb8vAy7fsey4197phkuCjHpbpTdb8ahruLnL3BeqgW6",
  "key16": "44bUbJQM87Ycf8mvWsiKt5m4LYbGDTNLJJSA6V9ZkMTt8FnJ2KZoxagBphuVSQZnbjUYXAemBioBwvX9SqQfxBHR",
  "key17": "4feStXuWz59vL9B2q1yvefmupdaCqiqP6tDWuH3hpHXLaARG1WrEdPaQJfeJAqe6Q8psNxsPgqri3CNLoqjDpBbV",
  "key18": "2jHUzvu7vqkR8rdac3zpKs55JqH4pyf3u72pKKScCpovp7BfuwUccizNgZq1VEo24CpobUkTi9SBoY6FT9wsGJ7s",
  "key19": "3pJ1UFK28pXDZ3QEVC14w1QiBbGhw8ASyKWupNDDUdyQuqCJYKkShWpMaeo8SqAfDgw55v326jfSTnjsmqXV6EwG",
  "key20": "Ta4EJndJAGE31qVXXRiLfa2YwHEiKT2r78pJLnAag4acG3FK17EKWinvXMSBiiNXETJmtkq4Ay7XTW6kybiYgfa",
  "key21": "25zvMYMA2e2MHVLgjVLNq2X6jefSRQa2aQJdwEStpMKBBM436mui7yZWHQwvdoA6fFh7ijeDr6JXXrwtX2D3QGPP",
  "key22": "HYhPi71JKMVAXBPuWJPvuYGoFMuKrRHM7iEosmXXfScH6YwwCNjqo4TNG769VXEYetqAAyJ7z9Z3ca39JiPtmji",
  "key23": "3PToH4gQSk563D1JxofP4wMHMp4fZZbmFiPx4kT5MH68DMcsySk3HHy5NXws8z75oX1Pd3eYSZukwcu2UvNRoJ8",
  "key24": "2z8HSJkeFpB9rHHrfDcRcxS1psE2FsVzDxR4LkecLCkcu4T8gnuaTSuRDquSWzf6Ge53eUnWqxvJDq6EGUAgb1if",
  "key25": "4uA58Hm7M5XUv2aAHGoMp7AtHuQ4Gmiwr7cEeKe3RbA3iKnVnnJQqyKjgihgDex1kUTEfnP2Fj6VyZiy6XcnGLjF",
  "key26": "5jmYus8cFdvaKFFyHnwVj7zjccWRyBWCPgZEgMCKH6Xdv4fKwLVzrDyPo7kjULK1cgGdhtZv3UKs2toFtTBr1xKM",
  "key27": "2zP9kaV1wo3hDNFdFapyx3eE1BbCgTP4AYmXMM2eJHmuNExqc5hNhcesHpQ4WjpgvBQTqXP1mfpfAB5f1kT7SmaS",
  "key28": "4HoRup1QV4JtiFCW7wcjsCVTYudL4vbg5fkjWNrYgXqTFaqxTXSX9CfGuo8wadDUgFvug6cTP6X9EaZkL26VKzH",
  "key29": "4rDz9GFYjo7iaMW7LhyM7BHdHFE97r7b7zGPpZR476c9shqAkmgy3yu6vGdmxbr5oTPKGGZFR94Qrru44cEhnFze",
  "key30": "4rGe2rKkAVhYTFdAP6LZEnepBTmRaiSKrQWLCxV8WEKZzfArTL31LD1vsxp1Bd19EX8HLrzgvVSTLoJ8dPwcvura",
  "key31": "3afseXuRRFu6ncpMtewmBi5xZbJrUYFxwpgdYC9mbsGQkicnw9kK37vHBm2C9fPt2QWxTU2NeomjMa11x4Nht3vr",
  "key32": "2tKbMGUGnkK51SxUcYShhUJyaFaD26stQjZ1AUsoHXMVJ4ANo7y62PWgMRuWvbX4PqtZvtAieYZmTjdRnLiCQWqf",
  "key33": "3H5itmqfjwyhSYTFBPxCwVwMy4Ly9MMV69ZMsLcj5zVuUrPQU41Hg9A5QyaFcZsf8MS3Y3LkML2Bj1qjdN7GCk1g"
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
