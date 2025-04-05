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
    "4TNWaMEYy64WD8dPz25jhDVbnNKMtd312cNH1LCZUgD6YaDYUs2mLXhMq8YFnQ8WWxnPcaYqQvv8oNTvDq4nXUrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ppW79mSuEBhaje4ZczG5CZr2yxKXKFuRHNF1CDZ8vZpBpBn2D4qfQdJy4DhtGaQUfaeLWC4GuuYY61d8hGmher6",
  "key1": "2p4CF2p1MmY8vRFv58mcZs6T5fjM5XFVwiLiVNArCaM3FKCRgA8FNktbdGTG6PKzZuUZA9KXFfPb3HCZJHWTG5oE",
  "key2": "4nJhm2kURZ2JedZg7T27f7f78AwZPzyh9qJW83xbbnpZbjQF4FyKjndUGnjF6f2d8YnWAupGVcea413L9wh8hyhH",
  "key3": "4BMqvTFtKi7qHWH96boAMwNSsjEeQgfAguxc9yRPEYMprvjV9FtXjv18qFDU4ae5K88k6x7ZTjRkiv1kNWNZswC1",
  "key4": "3GizMubSan1nE4ZrVYHr9Lte7grjpAKvvGWxrbHigt3PLSZge4c6rtuzY1Dv1K2EXMFie7jwdsGYrarhv5GGaa6",
  "key5": "4EfCdwzD1er17T9K8cJJoG56FYAB7g8uYbRAKSaLTJQedSFNb2ieZFWTzVygEMpbCkejtK77rkLF3gKosUujLopx",
  "key6": "hXxGWzdtZHcCwDp79e7iajYAXquXWarxrXdqGqRdLtUBzzrzVmDa2PWV6DYUsfX54jt7NB2URESpBZTTivFEfpe",
  "key7": "3Wkz8h5eokxtsriG9XR1wpNtfFJsbPvRheTN49APfX8ze6vBSHDRfgWweKBm5si5bybXBmHt7kNktY7dQM2iN1Kv",
  "key8": "4oEt11rsupcgxLhSinVLeHaHp3FJaqyMkvDJdHris2bn6T2eRY8kXg8rawBqEvnqC7tUb57vhPWh6a7LfBet5p4i",
  "key9": "am3Hbevkgu5sT7MRfVZeDRzWzhpVFMXdZfTWA7pVAaP2iViqnmYm6n9nKYpCczAwyqAvrTj4hRzJDjso5Dq4nrM",
  "key10": "2zgyQqqYgwWphKvq7Hg7PgssqxfBY4xewihWfRAeRYQrBr6SbhJh9b7VCEs5L2URzcfJLStV2YBu6vDr7rntTrvj",
  "key11": "392PwJAN14KdJ2HbBrZUBBhVpAx2NG7Dap9EAffxoFZDgxQUz4UYzQYfJz7A9u5vikiJw1Syz7KeRjSQC1WZpotm",
  "key12": "2PmEr2Zkv7bmQNyfyprS7gTqG75khv3hRfECaYYNwaBqCTVNRFLb7dod3ma4dpCWaEP7FU8GU9tjpki1trSHsrh1",
  "key13": "57TBTLUZp2DsQ9QW6PTMkrBfEe71koJneTCtnmYwLya96q6LBAsULdonnBjUz33orMGjvxcPYBa7Yh4x8kJWjsoF",
  "key14": "3Sf3jpVJr34pGF8hUXiiQ1rCaSpJvX3izPCs63fV1uYWKyhKeXQBgd2htvQFhrAZ3kCMAZfyjkWzSg8dHcTavRqM",
  "key15": "3xhRfygwCURH46Tq9m41cmHjh37S2aKsU247Sr3hzme3JPvqAFLmxaacMM1Vfj9up3gJL4BGvPSgZq8DGugMmy5z",
  "key16": "54BguHKZX6yUmD1y8vjKx9Gzog4mHQP5hsr9Q98qY6ckfwq1aNxJLfPpGvnfuDfevHsfPjRqaFpNULqj1Q26rHsZ",
  "key17": "2X8sNH5HDednimW9gzPiWJ55BB8Q5AKvasn8F4CTCR6WiMVzdt3qGg7KafF8cbDcuHhqejEpfepiaNJ5cASMjoD1",
  "key18": "2zrX29QYnukKX5XvAoZnLyz6ecjJ2FDAS57Xyy4uRYvjTRygiDjgHQVxvWuKy558UdqRz9JnEoXDnvG5j998AAm5",
  "key19": "4JgXR4rm2949CFCpVXRbwZbP3ye7zXe9r7ZXSmPAeVRnA8jUVFeMHXZPTFTkWQuFA2TbR1vWuwq8JX4NwtkndekV",
  "key20": "3xvWxPbr9zJRZonkCn4Rfk4xPWpoCycM5hjtm6uVAGTcGRr7SZ2D2gCqiu6qkQQYy8MjmGHqgybiT7sDnWqw9nvK",
  "key21": "5p7H4dYJ1BEZj6VUAqypapQEhX6mW4LskrKCy8mZvdseURG2Rxt89R2mXBtiR3MXdBiLfjjFnFHqfsePdQV9Eo73",
  "key22": "4y2UemtkWr4SzRur3zEYXMuskM3M6ZLJ8Rme4hcuUbAbgXfvqkzPZoc17NxmKi5DzhpSGu56Y6ntKEukyNicpe76",
  "key23": "62hvRA1h6YZXmmLBjWDz4g3Zpq4fuPCoqxT4J3PwPeNYJoYmNMS7Q6ekjNLXjzZMACAEdqc9Gh7QxTYRczdQnxz",
  "key24": "3nMFK3NueTixWgKoaQU9v8TbgUPTVXFrdq58X18rbRbw4cCMoGzLeTbMfsVjKKZ8xmLh45yiUEMZkHM5vHp1CCdb",
  "key25": "2AHZBrGAHKeGvp1baCAhXZotJnw5tBxywkJy6PM8PjLVQ4f7dohbepcKueU4BfnXWJaeaiiSqk11e75H9eomuDCr",
  "key26": "2qZfURzFzFqridSyzASMVvQ22skfJz9jKju3vyZeZsdEAkgZhy55ADwBLCtw7xSDkYnTJUdcz4P9w8T2tSq3khKg",
  "key27": "48kNmTrNa9x8Lu3Ax91Mde23CbnfiX1w8xctm7Lrex57XbTzcWkeLSXVVoPYszYnxg5bqCreZAXtEXEkQcxmtNxR",
  "key28": "NU6wog8Whv2gtr61PrtLqE4ZFwgVjk2CyTndVe5zR1jBERZMt8JtSoQ9L5owGC8usyoAa7nce9zRwuANXheERxe",
  "key29": "61njBwpbJUk1s52YAiqarTjfG49XHkzkbRtnSZoY9KbWXiAmYWGpzLU3PMUQUSTySanFAVYwt8EJd1w2HQqEVeAN",
  "key30": "61JDVj6j6XPvYs314yMaKRGZBVcUB5EXykUxciuA9PLscxQRfXXNSw59Z21MEzVJgRjep5WXBPhwMbvwbAeNvAx8",
  "key31": "QcBCg4VVh988qeJ1eBugVeNLA5rjdhzVucHHbr4wMVRzb8qCVC8f3o8vWMUsW4FfX2mpQzx7hhHCS5x4v6y12nS",
  "key32": "3gmKNGM97T7ACMetoXBziHzUP1EFUhicbVJRcFbpgDeksTMAYShEAHQcgi1nc2r1sXReeZF5HbvMtaapw2o3LP1G",
  "key33": "2L3WTWRPrBRFbpp5sKxzD2B89JgKggnVJotbMZBSFCFuuQtEfGFYcrP29NCiLKm59hwjTe1Hcs6gmsBy2BSqThcE"
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
