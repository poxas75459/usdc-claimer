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
    "4xG4CyrKsk8wthC7khd1swk6QCAh5PdJxqAueHDB9HkCtQ8DHQAoAwXJt9U4priNBqNdpKVWTJ81aBHJpgh2xPNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okD5q1nJchs5sfzkfvVmMXVztid3SJRKCNLr5LKfvh3b5pcR1mt53exPou6KUatWDgSz8tMfPf5StwYfSx7j94q",
  "key1": "3yMGxjd647ogcn39XxR9s6YboUNayL7FyLvoJosoVnRvu6SHzM2f49KPuZy3rVznzRgj5SVmCSRyVezYpepytmts",
  "key2": "5RNZUKpqnuauPQtL4eLBFVSybQdXXYALyC4Jm8nCC9hvWyRQ8ZZjq9TAzdN89FRuJsgwVRpjKjZHbJCrpr67Dsix",
  "key3": "LwV3HSuZRiUfpL8fHjRdR9EncN1DuVBXhEffZqAbHqXKLiFbmBvB6QrXAQJwEQZguz5fZ9FGh8ah3ndEjWz1Rri",
  "key4": "52hBbP9CHUmf1xNYHTM1TLbKuhM4kPKMYnbdr4kJFiDVZnMVZTveM7ZycPS4H2jQUqNkqzabbBt9jkHdxpzKWtQg",
  "key5": "iXgqnak7bVHMpMBfn2bppNP7Jtt4o761Xzyoeb2sf2v8P3RMfezfzYzUAnDxQjq4xJvmsgM3YnPPkkv46V6YKyc",
  "key6": "2vZjqKomeCFeq3wHgwRGvjTJUmp4BoTJz9xfyZLTrhiKob82WCfhnCmoxDx1QFCRo83KwiAYjobQRztAsxihCuSh",
  "key7": "2HpztWxPeCwAJQXKG2W4pZEyErh6RQm5nrC6tmyFpHHRTppVJuUoBqGXJ1nBLWueo72HUpY6rKAmwFTLC7WPkU2x",
  "key8": "5Um8AgdZ3BE5hBpxfD7h3KMSKFqQCromAsqHgpyDv9ZuoY7H4qef5ESmXqxkdo5rCSu6zGvrKZ2S9MYaWrKNMZzr",
  "key9": "4P1Q3dMhMMCHK8ZN9sQihF4qVp8oCvnBJ2aaEiHfLt5vxFdekeenaAAGv3MQVxd7mY8ZzD4pmXFZHTLTnsARsGRd",
  "key10": "cN5z1FYr89U2iMmzAYyxfS7fGFNi3ZnYUKFVGtgsSfDrv6xcgUvVWSHp49PT3BUUuUWtt1YJwksdQKjNEbXc67k",
  "key11": "4RHMKCii7yq3mWwHfMfPtC1mvWL29ccDFLzU47piNGoBgBqAt5FwVYReo8RmfCqPJQCbHqn8G8ooW8UX7LZupMqL",
  "key12": "5H2GTJfjkaavPXaGtXYCMYSa8ViAJJ19WnSsMPZ1C2stZ2deiZPdAP5xjDbEAfuFbVWDNtGyjnMDyBMz6UmfSjtG",
  "key13": "xngiZ3BjfXifw5pYSWNg2xVPNTqdURfTg4xELFM6VmKsRusVK8QWcWLFDfhU19LJ1FcUGmrLNz8tJnAiiQPb6g9",
  "key14": "3kduVNPtDDPHJ9b7VZY4EgKFnF7wc3iQa3JwD6iopDTEhcwZoNH1tr797rMZjKMJYjkwmoU1pwZaWsTD8QT9ikGD",
  "key15": "3SGCszDnQurYEjGpp7UaTWW2d3oMefL3ehBHix1cx5PfgwmC6bFuutsxRN3ocwNkNU7ksbW5o2eyB25fJHE1YFPn",
  "key16": "5oX4Mxzxvsc3mr8PB8gJ7RZwhVXzCbAHZ3inJPUWiWjRyw4NhRGKvBzuGHEsKVW3Wnnsr3Kcyn2K6KSgvKKirPsS",
  "key17": "2YCQnDu82HzYDwX62W5CTnFfUruvUbjHR8MuPa7SUuFV2gqP5VnQLaCRRmAGT7NMFGzpUK1CJ2cFL1s5SSDufz3f",
  "key18": "2BDXiSajZ2GAXEzt2u927douJWSJxdNi5LirZmXtzB3S2NmUVNpz9cExG6rPbKYDBGsGkb2uTtQAD9KVN3PFmxvx",
  "key19": "ddEzLdfoZDALGCaTmFQt27kBHF2LP2ZjvwMKJu2WxQbTdmGSbstFbrx1CAMLqCCzCfkL1PRCdnx9qFDMSaaKhi4",
  "key20": "VhV1pJXMFru4RJ8PL9Q5rURgo6Wq1b9HnqPHDXEqeChpPvqgWt31QE1KNvd6EYGFzL2nUZgqaLEk9dXJrpSZXtd",
  "key21": "2HXtziHUNw39msUGMiqZPQFeXsBYPSzeTtSfMPsiCUghJtQsnu1y33SX1WK2b7ndsaenAXbeHNx3A9vAWwkE7vwG",
  "key22": "28hTQvytvcw68JPQyPqiMfXGzjubH15htUCv66Lowzgtar5N3PicsXShG6C7dqZCbobxFJR9RQ9HDvgHfiRNeyPL",
  "key23": "61ikPpYT7knAkDpSNBWBaevbPJzue3EvJuSK9Tx3vKW4aHY5RnPcz92S6v2G6erVsaG6CavbBSQ9BZn8xhpwX3i3",
  "key24": "HNtPQmcM4XiRogVhMVw73Y1pNJGj3RBsFiJ6HC6HDQVSH5nzbJm3ywdVK7YUEGJMHwMYJChJKETBNHxCX7dHsQG",
  "key25": "2PV7r9yNKSGEHq1cbRYyRg3b7R2wrB8zm1rNyJFVZZxVT8UhLjBdsVAB5FXMpCrrjTGhjig5m9Cza3rC5YberVVp",
  "key26": "2uQuY1xJhtFSRPfum2XtyYCfSLfqUng7JjTQn2tQBTqo9A1ZKeYPxTS8BHoiHyaRZSnGAUC8dZ27XmVCSpA1o6wi",
  "key27": "2NMHEBNnrGZCE83jKhNsMpx7QNY7yYZnojkKEoAc3qKoKJQMxVy7WM7WaeCAT3HL5pngxPcpTZKVNjuN7MZXF5LX",
  "key28": "26qeoNz1z6awWYqw2cgARDzkhW2hHN7a8wZgHMMvyocToYjKEX4VgL4RxqC1n8baJoU44NFVBaiCiqrtqSkCGLRA",
  "key29": "3yYu84vgYMFtBMrUu8LY9ELn7XwFLA5bVYARKiEDAQYRfXRMs8Wwre5v8dVYcoxAMJomK4nhST4sGUfyZoCu8eaH"
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
