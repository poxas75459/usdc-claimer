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
    "3LmqsChqqosWcPLhggYBvzgVmadozhWQa7bKw4Zv3Korg23WrzmPc6CPAnJMKF6DfuGedwhgd7BpdWtH6Cs3jKf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35cMUx7r8fvAg5VSRXNLJBc4qjfZLJDrm5sTeJG4zcuhkQGLajspPNPQRWqJUqkpRmVHVQvA6K8rWxgp7KuE7jSm",
  "key1": "35RRhm6r8GJezi2LyPLmxcYQrr2aJvW3eNuNWJatvbBvP4aJZBU9dH2rKaPN2TJVERjuYtKQo9Yq8boExx959uQ7",
  "key2": "4KmQL8RtkATDxBD13Tf8R5zRztdVBxm978XRPxHVV4HSeqQZmaFiYaXZicBGLuskTpnZEApNyaA4e2SXjtBRx9a9",
  "key3": "FKVG2UfuR5vuhUjgzL8CSME9jHHBWu1HEbNVnQNg2UoFW4ttbpjtjwwyeGuk57wTryJHX51uEzHoTwQ5aPjb81s",
  "key4": "2n2E3Qugo3xRMRB8dppAqto8WszWiEPCy7qjFUq1tNErgUjAAg3e4uKSnTmeA6CpsNoY9dmH1j2WtkBhnz5SQXBr",
  "key5": "2GwNAKWdy91NMZeoG4pws2EhTzpAM9n6iFGPRBdMJNcM8tazRYF7tumsarRrxvKXPq8ApEHk5GX6aCXdYQFe1Cv1",
  "key6": "9PLCCRpBKvQ6oy3xy4YJfgvjmniPB1gBxprGG1mDTgbj7Gdke1aU6sCjZxiBWiwBXmU7QJQeNHvXtTec8e8sWut",
  "key7": "2pmXSbPA1i99Xpdn38HRDYD2txyzX3TAxQtfCQRnziE51X311rpqZcNpyy9N9LECh3ftqKaey5EZ9nFgHmJNtkNR",
  "key8": "4TCkwjrZJiFuj45v5AxAYaR6qUXrc26SC7C68hDUs7GE75BReE45vjaY95bSARtDB4T9pLDZFzukU8oamviop11r",
  "key9": "A2y3NuqkESsMt6vktDoqKqBqU5QRPV7jGrptDzLTjb6bCGzAJzG7XaQFmXrEhydttMaFc6cngEEJUcv3cQWMgnF",
  "key10": "3ACDePFek8xXqrQXuuvQzZ6NaiKAYYdq8vPa3ZaFsB7hcnsbnN8paPRhxbpKo7NE4CwDwkySEbpCtvWoaN9gZ7W3",
  "key11": "5vQ6dUUt9EQeiarPFK8AVgqAwKGPty2pV3Xbo18rK9yddSdc8G9cXZFs6kXkZqS7BSGujUenHYhRZmwnu7X4ZsBx",
  "key12": "2ZHHkJevv6bSz5eu4Ktoo7kANitUwLTNh6KWfhQAr8bRXK9tCPmxvY8S11Z8zUkUxphXC1NnuVh8WPEKevrgW1Z8",
  "key13": "rvVxFaqFcxQR1tDThb4ZXYzYAAkR3wwYsSFn62ogwUFj7TvhfMuy99x1wnkhBkfnkJRKqPNeoTptAdAJyK1s39A",
  "key14": "5xsHK7hpR42k8AjTh5dGUtZwHNrLpMAZAFVbcKGzVTBqzTrF4vTK5B7Yxg83ikZrH2ysitvuXpdZaLPEuqgtWarw",
  "key15": "5t2VeRTvmtYHSmgwoCbQtWQXckXpBWdq4R7QjmpRDfPRYQz8FfncBA5bUaLmZRkWxqouwpYYMfLVDzqiXCGdFuQ8",
  "key16": "gknfW4oxfyvT8TS2FTpvTAy3SCe4S6v5Z7JgxeWQS1X8MhCBDMuaeUSKsFuhBDrHhDmXV9zpKiEigJmCEKUPCcf",
  "key17": "KrBP3dPCm9r1rbKkCX7ML5atLE5vtR4xnvZttSkZExrZN8VmR9BH7p9YqsBLwY11WXJHKSxC7MAn8LZVQFq7RcX",
  "key18": "2yypqxSxUSpfnYtTwS7BQwarP9QEx9frd3MjE3T7pJ8t6NjBd8sbYoQBMadhDZzMJmGBkWA2JBMVZTP7TFkcFsQy",
  "key19": "TK65kRS41mBZ8rAqUdXwHvegvByzQzfkeVyC9NRnNSs3h6ouqxhE5nrdBo3qg6M19KXLrTiCpwX21TvYxeQPyei",
  "key20": "2ov7AaL8fKc6onsrngmFi94RL37gTWutmz3y5FhC42ZXZnbAbx88dVnwfZdhmqX1ikgqYDXHGtBPU6eqjKTuuq8P",
  "key21": "29yXCLzFy99ciGN9wprJFv87mLrsqSiQwusJTeeSJ7fRZJDKp3JkzjmJ5rewVMG8Ya9gniWvE2nbgYVi4pqRvikq",
  "key22": "3sVb6sjvvzA5rhot6chcqMmyyfFcKYTb9zkc3t8ZWx3pTLB66dxuVALiUJguHQXgFc6HRmEbekgqhPPpMCwhW3EK",
  "key23": "2f7qcieAK7LbR8svKfWJ4qmV2ta6EHR2QJzNy62nFZL4M7hnxY73WVmiocXNVFdXtZsoUu6KHYQ7Kyk44rjG7fJ2",
  "key24": "2ApyX9FZbs2TYHmNY9Ko5e8YfnSRZcJKpKWvLFBEB11CXtBRsuqukoZQfFAQwAFQCA6bT8QFBqhauRQBhc5MBLVk",
  "key25": "4La8NyYcM2iwf4xSnTPPh3FnUxq1sfcpuXdQUq97ZUa1rMhSR2FbCNGoeHbK4Ki1PWFmviuw2HhNVLjYdaz7FP7o",
  "key26": "3MYKWpGniewHaLBDWQ5y2f9kqkec7cf9tqRRDrkh5bpwvTDWGfUWdFCToYm6VhJsLyy5p8kd5Tqvsb1EFFMTxpcm",
  "key27": "5jRvE5xLkuE4dypWDtxkLtXBsnZkJPgLaA3cLAvBRTr3Gtk56JvASQFj9mXATsgRSEF5nfgSvLCSREurUVUStw6V",
  "key28": "2qFQLyfF2r2ACbVe2xATrGHjtfPQa5eY15RbTmJGA87kyEwE3kDstCwv11iGUMkApVmdBUHoRB27pxRqoe4JESnt",
  "key29": "w2QejrZxA9zqJLbB9uBZZfJUKwYX7oB373EEuE856qAAhiKgx2r3r1RRmGnEbie7PbDkjhT28qiFSXc4T3bq4M6",
  "key30": "3NU5ybxusz7JrF7r51betKoT12b2ej3LoV8JLFvJs5SqeYqk3Fx8M43RxGZ37p36xZShqaKarJsujh48hL1yoCpt",
  "key31": "48KVRoqUxoxXHnqorQzyFRc6fgM819HHZEbe3yZhiF9cm8GV8VRyW2TXRRzNJQogWyQSKZmKLbS9YrFiMHTHAaBf"
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
