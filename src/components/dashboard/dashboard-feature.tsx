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
    "2HAPNUTnsqLLUWqgKGju9zESRiG68kYKYFxwTqeXa9h5qTcYCz1nim91pu8i8txv9aZuHyzcWaVQ9JzKKX9FtmLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uV9Ysvi3Y8bQPejj4aTaLbQguhCKCcfS7UEN83L2Wrw8HQ2GiBqiAth2fUke9QN5j8AB91hsXhW4utSChFSAHzA",
  "key1": "21WQafiLtKSttY38PnqRbfLWGBnPk9pmnu8tuEnjXnsnWwuazFX9sxk951XLhN89WcXVSjW7SaEmdQG5gE1A7hmc",
  "key2": "2mymDaKe8nESWSgbPf8ar9JmMsEjnmxyRSategBzbXXSszns9742eLFh5JLfoZXZTY9DZdwjtGuacWze7MjJj3qF",
  "key3": "3oax1SphghbBg48BqTuGhUfbuHE8xTnkWeZ9yVx9bx59ubrYZ75ukUdfREkKJVSCUrgEysoGu8DVLaBA5iSPW2kq",
  "key4": "4sN5T6akcruf9gXixvzzScSHqavscnPULyiLUZz1T3BfDfCKKAVqG4nhEUfesVocsSQDsyjZVHu9qz9EuvUZFWuR",
  "key5": "325sSZ39D7zy5xJBYVcy6kegiGNvzK5FF6QcecEVfWr7S9pXuZj41GhY8HWbSjH57YMFfNvAdi7bqBMdSQaZAejL",
  "key6": "3Ta4TpNiStq3yhZ7jMbSYX2V9QfuvaSVVHFphnm6mkotQm8CVG8zdXNy9KzF7L9WN9SDZQcFZTxnKsGHcNjS48Gz",
  "key7": "5tZXcnje88BSmoXbhB6LUJj3UBR8938DeRtc4kN2pq6GaQBm842H2KyKm3b7RW8ZnEUZ3T6LwM4oJ4FsEGvBmgKC",
  "key8": "2Rv68ViQJs1oK5pNgBeeb3PAmV5SXq8PCbukxxYfnJBGzReQxPbYYgNVERqd96VFmT7C3scifwwuGKjb8YrZYq63",
  "key9": "2kd2JyrSrdpM3u3MTe4cJ2FgeCak5uN48LatSDMbHdwZN6YF54zKexHMpbAZZGqwDSUq2Sh6nh9gBi5RPxKf6D3c",
  "key10": "cN1F6Qcbm6HG7aK5tFZRrqxweVkEnt9bKPfNBsrMdrwz9VeeSJNFmYcwyc1oMRQPTUitKJjSthxnKfv9XgDS4jf",
  "key11": "3KD2mybgkw41iHSdPvrj1huShDHL9RvWQsxwDNH9oXa1gBjCJmzWRiMzCmCfNsN2Fm9vY693wmjTvqXHLo1FovcY",
  "key12": "zRKJ9ZQrvzTvSZYV3JyAwBLcQDouRp4pV5M4z4DAhmPtNDptr1vY6pLFNzDi3wndTH3RHFV5HSdrpiMCwhYXN1b",
  "key13": "4XTuD1GwAoeEghTMSA1fpRnnLRnpKm6LCDGFAbayHJeiq8yuWFzPochHizC1NbVWDvRhx6WhCvshfJGpUfjc3UBz",
  "key14": "5mDyYryFHrJP1PK5Wk5jCViovsxfhaBdug2Z9xqKNEeQFo2aQmskywep5oCanaSR3RSQodq4vTJYANk4iLZHod2K",
  "key15": "4WNjRyzZebxvvBnZEv3hJDP5UgP9BuqLQdjcAjDxLn3dYpJ46kbjXPoG8WKrf6NjtD61uKLdLVZMofJasGiYqAEM",
  "key16": "2MAWE7Uv82A6kuS7jzX3dpA6WxbPssvZwBqbSkrFecNt9PN9tyZTWXfsmBmaYTacsyWfgJDtHExfRPQhzCwf3qzd",
  "key17": "25yxQEhPivnETZTQPQYHMo3xHiKS7d9vWT2B5GmrsrUCkuvwtaFVr2h3xhU1f1DxnXUZ6WRmqRCx2n3MteHL7rLs",
  "key18": "5xuBMkVbkwFL4yDa5XDYeXUo8zDDHcKgtHK1pn2nUKj3ubmBVqDXRfBXjWZ6LZLsNTbm1xJR4NQ32TiZxY94j8U9",
  "key19": "VUSUDH5vnr5HD9CsRiNs5XpdbroNi1vKVYqHGo541DmHJEqt2pnLfeE69vqVAyZhEd6sKQ7gjYmoiKxFD1iVN6R",
  "key20": "3vf9C5GADzSfoNpayKtDgaSesxTGRPjQTwB7UcctaxTF4b97aqivLJEtGLzpUt3nF95qh4CJ5wzjg8Y1o9n7MU9X",
  "key21": "2VREMBRVe12RNNZH5Q6oxG1mY8ELTn5SBh7p7W9FdeKcpW26qoodAUoJG6rpEwjS6QWnkNp4iBK76Gv1SEk2kXsY",
  "key22": "4XK7vzjch3uJfEZ9TJVQNZcTV1ie7hQabFSBxN2b4MUHjT5rsS4GHLNBsHEWdTpEnzTpcTwWb5PJcyqZE8n3CRqW",
  "key23": "NPdV5T13TrE7gk2fAPHrdf4GgG4P9a3yKeeABqsiDnpsC93F5MiCp4d4JUDT2eCxDkJEwoHiyYmpysDJFHDd2HX",
  "key24": "6Epc2SSwq1nJ1ubG2ieTwupqDLx9ADkGWekVM9ktF5pm6dntpJQA3q3FauJGC9LDNwbULcMTLsrXZuVXyXwvne6",
  "key25": "Yj3wqvSp6Wr9SBuvitfSdTUtwURoYEJxed4V8E596qxR83yyGv28sw2QbqAX7WXz1m3u6khtzZ15jcJkWE1kDyD",
  "key26": "4btyqPZBDzrLFQKes27MTjc1QbwQLWp7CNqdn9eJgci1MNG39pW49Tmsj7yTBRUCrEbfFLcHbvnaexFUxPoWDDpx",
  "key27": "8pW1nQFavPkMmSKa5H8kLht8P5QpruSvhPztvvJfLSiR9J8bR4W6NT3fkGyF1po8jSEtwoYHkr83ywVy12xZ6sq"
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
