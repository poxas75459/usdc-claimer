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
    "568VAtFCg3vhv2ijFHZm6DrwYkz5bHDMhoSSTrqKoZuw2pHQbztJ7ozKuJ6WFT4H6BeeESyfoLq9HRnZ1tvjpW8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTxQmNzxtfKfdFAjDUTQo41S6eGnqZEXXYmKPq4zQvh2gRECQ6MApnB8CxdAHr9iwjACZP4qNMkpcrk7246cvjF",
  "key1": "24kVKMVvfK5fvkF2yaAToFMrNR3dxEkcJ9UrX8B56sjWVxem6s9knnz3DjxtSw2tnq2Kcpzw5u3SBLPy66LNV3BV",
  "key2": "37Nhj2UvzcqgW8wXo9aTdJTvPsSCJTzG6e36aKXUkRRUHWXM7avapTpnhAVoovD5xNkeY5iVuHPXb4jW3984n1FM",
  "key3": "3L6VhhsKguZ1mstWYdfonjXh9DmUBk7KiaWtBLKTPZGVKZRdfJKfPwVMvzGABFhH4s3HBYJCB938zMH7F6vzXLjH",
  "key4": "3aeC2ccr9wQ1cXiPd5jTqx4ZEKnBcQdct5LNRUiamWfdNkxbfrasC2da7sEo4sKZ9KzDNFf4PVH6iYaYoU14qSTn",
  "key5": "63ssQxZerp8j9MDGAMuv8Tqg2DuVoAwUM9K6GsyQ3p7m9BF6tc1nBUiB4XmVT19xHzbGmmMcezUEmhfNVQEMtjNt",
  "key6": "4RoNDAJpGQoC6hvQo7Dq7JHapAaG4NcParKfBNYu8m1aG7xqX5nmQG46ixF4gCG5X5YKif7WGEjNcnEU6caJ4Vmq",
  "key7": "64k4V2udjaUDoUWRXunM7QGCmqbEurpTZ8rqbhR35hP44ys6MvkwqqGU5HmFrKqEnWWMBojPaN8gyxPMo1hnwo56",
  "key8": "5LL65JBk59STn3k3gEQZQzKTzgZdVHLzMsbjEthwPG9f66836WrWR52WiKZyrbeMdZCjLGGxFteyai1Zm8KF4m5L",
  "key9": "kWMcyybeTyhT97VQ6oytuRixwAeaK1g5aXDJXEQBsENb4uDaXPYY6YhSKwiqMdhboQm1GHpA26mfjnybiyZMt8b",
  "key10": "3wAahPdP6VVs2cAtUW1z4KBQtfLVg7LoMrcafEDX1ekDDsrqJoD5ACAA9zbyKVwGxWSnX1wtFEP1LHqTYUYnzyfy",
  "key11": "5qxd8aEZ1pWUskMb56sGFi4VKkbUhr6eQ3GognrywEC8BXkymUicjJwxHqHcRQTDYyjEx4BB7Ujmqrf3eVGrboj",
  "key12": "5jMbqCiGrZ6jnDCeNWdGDtwRRCQyC2eiVhAkEy5vvXArq4sfkaU6TXSDQ4jHAchrJur8CgaEYntdHiZQrzCM68da",
  "key13": "5xwDqcJssXoyVdq86aQtajzajAefxpjn4DEWUdqkX4wiNzGxVux1fGeov6UypKzMgiGcxvWmci7fox4F9vmUzKdy",
  "key14": "3mHNeLjoj6WvjLuE2Lzk4smHAFLiEjmgu1HFHx6Kz7K2FDudkqeuc9c8WhvBKt8HbSqCBAzVbH4Gj5ukDonXgyWv",
  "key15": "655GjzwgdNcypaMaYw86nzi34rnPioziqRzqhKgc5tspdK8jycEbdoXoSUGPg5Tr6b3R7agWRiNXPzTcJtor9kcM",
  "key16": "5o4ApWXuYgyZY1bwiKtjKAwyFpGfAL7hD22HXtywPE4sRCAjysbxAxbgNjQ42r3CGrS4NZye3kSWzw54Wo6eDGBN",
  "key17": "ydAjw32AvwTf8oPinuCYc7N1CAekQteg3Ny6PCP5R4Jyq8fp4HqTeJQ4a5AZvgNNa9EqyC2hxm6TGkJPJavr5K9",
  "key18": "53GvucM2sjTcYmkKtkvLkGMjVqtLwZJnTJyG8GnE9GtcjkJQDYLgiPwaeus4VZVez2Hg34wvgJp98W4DiKmncJkn",
  "key19": "3BqpN65Ai1jPkYHVRXtibUTv6YcnwkjrfwNrXMSoXRUQMP8zzRfCnW658UCiT4Pjnsum4hYUxsuGTjYhWw8YNdTv",
  "key20": "392NeKpD3JhaSmF2F1TWrHjtEruwTXKDZ4kiRuuxqPei48FtuqF351cFExqKD3SwjhBsESJtHaDU2W5vDVGr4aru",
  "key21": "2RsV8kRsPV3ZJt1PhXMmoKhpp6w9uGsnDvVEs1UzEy1QaG8onXbHGY4dQycxW5aMooUVs7gmsJLwLVs1nBcSJT3i",
  "key22": "2kwrkS8CgWZXBRYmkFgSTro28pwM1a6WDfDdMxSriJx6eap8FGvveqXHYMKkw3fKBL7VQ77GytDjtXrjSxpTGGAL",
  "key23": "E6RozXLe6iyspzUkmN2TqfqjZz7oKcgGWNBh9ZhGfTjsSj9bikt86H2QVME7Gwrtksz3ZMW5qyDLNckDZzav7r9",
  "key24": "6G18k1z5JexRtBnzZcyzYfRF2TfgcAUcFbFVaVkoKZKxgrdnpjruQdxqnjrRZpuYX37vh8L5Dm2noQVfGe6vPo8",
  "key25": "41i7Gs9oNsFr99y2QDmx8BNNJqexHCq4aYpnyS4jHsfhUjWQCtZ1AGfv5RntNwUy353STAhpS9LEgr92sAfJ9nsM",
  "key26": "2Cygk92wyXdmc2jz6yKLP4gD5F5cX2ztwRjJVJPkCeqzHpoTNcBaxiH44ugGbVH1SqNKvbg9WAaiB1Z9ioBNdkb8",
  "key27": "3xHm7jFmrNQk1qFmghfetGS5tKNFH3b6kiRDnZFupFaUYoZgxxwoG81psvATpVTSLzhuFM7n4qoAqbw5ZbKsfVKM",
  "key28": "2A4Euhw9ZCgqRks9q4oNVjZ5a3snABivVdnagB6GVYJjeMxpnBUoe9B13x5kwZBHm51VXdzwx73RcMb3qkHiZUAZ",
  "key29": "2agnj6M1eTUGpSdEfTtxcJxY7vqDjF18DKK6aDcE76XVdJRRHB7Gpp6Lo66fwuB2DMEW2uxmQ7M9dk77WJra5AXT",
  "key30": "54HBsfRrvyT6YcW6i1Cjai3vc15vmVQj2ZTLvMANSydCdZhyReG2dP6AcSwV6yfHBJJ4LuhDY2BebzUGdWi2a9oZ",
  "key31": "4WdirEkdL4usAycg6BkYNzsv5MX9S7x7MifcvLbzXjsW18JqyAdWDvEtj3RmdKiVvQe1brym8GZDAxGkYxNHp5W3",
  "key32": "2Y19xrspQKemXitjHnyoVZdYfQsVgmM2otyRSGLLW46DDQs2rnZY8fYqrXtun76AQ2wD3FBfzd34u6niXud7i7Vm",
  "key33": "QKbFFNKZN51vM1WRBQKurrQMnyF5FW6oyWC4EUkrAm5ywwZhVFBSNRWwmJ72KoSkkBnqvTUTAQ7hNWy8HPFhfse",
  "key34": "5FRtYBxpBWQrs6sQmUBz2qzVcV7EvfESBammJkxCBqW2XTZTXBMRXeLuicy9kBBw6vuVWm5upeEN2gyJpaCRQXVP",
  "key35": "52tUMF4thtvGPJYKkjhpoBMhoQAThjVrZ11h9XYDhyNvHBBiXMWVRc8DDkJ7U416ptw7a1PpbSyoQYcMhgSgzNT5",
  "key36": "2nSY4tW6wtuyCFnspUDtJpbhFm4Utsk2F8MFkSPNSF5SytDua46nEgcot3MsnrTrxHfUJa4PAuXsq3DKEFgMPUa9",
  "key37": "5DsZgYiKysCyAZe4jsFUG6ZSARGfpAK3z6q5DgMC79LvzA8ULh1awd3WJUYKmznRfPYnVbDNsPdHHyMMGbWa4nzi",
  "key38": "5JKwbPhxjVMNu6TaRgcmt3gkwBbbkRUrgz47ynikksmerW7dGtpq87ysfkviDSmUhuziXxf5f2nhxuxkHEskAvah",
  "key39": "5Ki9a7ZksnZ3S9sHM1i7hCmrfePAYrTWMX9TNzXWjN3YYLmy5Z1RVLppc8PE8h9fGZt7hNSoEpTDSRddbqKqiwT6",
  "key40": "597i6nVKfyQrVnfh5Tb7Q6qGDqxA9rkaWYNB1dZAZaAvAGLsPwP4iYvVFmAWPgUQiPvNzNZGp1QmQFutaVWr5SJ3",
  "key41": "3wGXExigFwYMcb9F1N1jgpMf9FPPJif7mhLictbqFCcDR9Ld5nfpehEwkzwuCZzxzfzwra6QM9o5GhN6TqVdxqzt",
  "key42": "3GxWhXxWL6Ub5283QZACnyprifTe1HHyGrqCRHBDgTGr8jYVze7x7UwGC4vUyB1mQwgXYC7EKj3fBxVGDEM9WwbE",
  "key43": "38RVWgeMukQRwX6QyvWRD17UeWawQMiz1qZiQpudYb5DAuUBEhkXNSq6VQ5UccWZdiDD69YAfukEcv3LSAKSM1yd",
  "key44": "2Dcfb71kuUoiqtJ9ojKTJhP9YC1arKa5oLTwVsrLHmhspyzpth2RaZRqiCgVi7ivkfgZQHh2cpVeBd5ANKQD82GH",
  "key45": "4Xrmrt1XfGA7raise8TYmjKAGTuVAQtw19xSW17x5Tufj9dM3ocbTMWzib12sYRUqba3auzb9t3pTnBtLFPJL8fF",
  "key46": "3BVwpmaNuyXCj7BRG8dP1KwUp9nZEHC9Cj8ipnZxw71W5SJKo8rFqw64VdmfhzczXupFEvzpjNaMGJxK5BN74qtV",
  "key47": "5Yso7W8ywHNKnYToZbqJMj8cnWfCyS5ZnC9kxj69nhtvpiAG6cJgrvXtrNuiXXtdYkAYQtNy2u1y6YV2uPQ9ida1",
  "key48": "vtPxCHbw3wSpUucQ39z2YdzpXMzM3Vyq2nRbwcArMFNxvswCpViY3W8gwXXz51PQtqQ9tE7xvMfSswk36ysvTXN"
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
