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
    "skDXhdtMk68USxvgRarYNZsgAn5tgzqDiZ1zFGDf9418KhFKJAeBvhfQvFoYsSxPGomremFQevDYgcBLePuk62g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cdm8VoS29r5SVnuFmRND42gev3waZMEfx3K988rFq9gJ3Y4aUHUQQCFkx7EhHmzrsDLRU5snFb5uRKK9JaRZLFd",
  "key1": "2HYhKtF7CKcPkoSYCZH3jrjvJbgX6e3AwcPYh8GVySyZeoVmeDNKGUcP9qkXmpEpKjUgZvP2fKBvBXDekrjdDhPn",
  "key2": "2udVZ8AF81iccanQ9A8S5EndZfuown6z14o7ZfDjc1e9KAmkHWk74cRYpcCFSrLRM4VAfkgnsC6koSKi3J2VZRxY",
  "key3": "34124K9WGwcu8ioieEjuseAWqAvEDBu4VaPopfnv9pnyDDgBrKMfKcVXAM3K6HXts4n43yVxzJWjKvF5hD5b3a1E",
  "key4": "4218JSY5UKYgByV4SQAwXBpgiRm93PGGJ4VdRouDAFcnSrLS41ZRN3NT4NjpJyKnzEia36dMSG6SU52JPyb297HA",
  "key5": "4VaiwCojm2H7wDo42ufrTwePn35byK9EXYjYs42a93WmMmicywmHew6rxRauzEQ6UvNpEW8RF2jshf8VZpUgVRUc",
  "key6": "NV4LQtJxb2zwX29DpPNd5m7QNpJ6cD5zHA6vcRxRvf21wXAHRopqT8kvfXHBZKpBfbBsuDWhm3h77qJaLAmwwWG",
  "key7": "31J1knTXLGgcau4TGXi1nXssXQ2r2AtV7P7i3gM3GhLmFXbSyHK7bi6prxd7kdjzkTpqgnXDJxzxfzCvxjeGsvEL",
  "key8": "4CQdGub7drW5wTb7x9nSv7PrL1gDRMPaXBuAoVjoYjoAQfj1HhwuTGXciTNipjPcChk2AHLD6TC4VH13MbCPCsGx",
  "key9": "4icYEWezXwns3KBM7xhxM8karhJgvL1Tc4Bu7VKoKZVUsEFuvSL3RT1Hs7YbFH5tLkRqoWZkDboaZTNbAusoHSxa",
  "key10": "5pXJKnLsEEFxEKohJxfvQJWmHd6AkosgUfiGc2vowzjgnF5Yh42YACLZSNePB1gGmjNcwk2mMwLVAZ41zGpgvvu1",
  "key11": "3YGtgN4Uojnfp3vtx896DbgWjng2DMrL1BYcbbBqFLiA8w2zpvVMGjhWv9wk6z99xtX35JMqkdySXe3qb3DfngMZ",
  "key12": "5SyRRvyfXVVJnXbrZXPyVqD1UrQCRj8q1rw35hTMZDMwot4UUy7aJPy8b5VjBvdG8VzXEVfGm8TCE1ZHbMDgJNQG",
  "key13": "3z45EMsBwbJopzuerXo8FPhwfyndrJqCYdqVXqEEoybZbWP2bMUgKp81yWKY7yDzLzWvFWPDsYiUPaqmFbjN4WKx",
  "key14": "3cfFTizcDQDEFTJAjYgyBAi3EqfzL7Zijyns6U8kFu7GWKbJ6xiyew3aczr7wVKgGJbNdGU9Db1xyRtEicrtMM5k",
  "key15": "3J3Z8QVo4ehmsmpQMnfTyDcFYTP5g641y1uH8pR75pP7vLKmu7TegD1VPtxaubHs8xMj9uWjnTS2MhSEu3AMmHdv",
  "key16": "3FWA8cA1EsK5Daqv2pxB8WtMXgyTdxwRTWdfm9x246nF4QyhvxV6WtFHX3Wk27KmsZEh5uTaFTW9h6U3bT7niCmq",
  "key17": "5P7vgoJuNKmET1cspQockywwHFBwiTeFCYQVT3YYeBfShj8Mt1paSZPWs5vy47sJdwW3eFXEAQYMaobTPiLH1QGD",
  "key18": "4ZVAZxveWb9L5VX9czxJwxGQNZW3Khknyp82t1kRrC8VegfZ6PxqozHBWgGAtrQZAuTfwh5myNyexebx1M29VjN4",
  "key19": "SaThkW3ZkFzzGnqHNbgiazC3Uq3aJYnpV4EwNwLEPQ7FRRqn26Qg8B6VwVoTXzwmP95pQZASkTDXa5VGKPvjZni",
  "key20": "4KHfHdFWD6zNEtknrUsi31ap8fssUmK83fiGzRrE66bSqKF4eyLjNFXvaFeq6Q5sUgNXZiZbjJkKeLHRQUkTL5YZ",
  "key21": "535EVzAqDmARhviiVuYqSpRFf4MKd1nGYFb8ggbmDgvgArmeVNXY3VKXVAkdvDaJBB6U1hvEsd4UqnM5h3JDLcUr",
  "key22": "2Ur4o9HDXxNXcmfagqS9W5Nvu5X2gGBsnUsYBLQGm5NYMPZU34hb1mtpkPSBoq9SFWViZa7auCUHH8eVhAAJtskL",
  "key23": "595iJrtWA56YjHNRsNKB1L2RJTbDj9aK31Qh8SBBYQwx8psAyeoCxrEcRrKrpyjddLsRY5gZLH2topEMtYrWUMMy",
  "key24": "XAuGLdEE92fbvf38LoTxeC26EqJweX1JZrFBQiZchr6mFYqQd237d4SRPVhGGYcctuCcLKZDjbMCXJ7jG5zPxxK",
  "key25": "5ZMTJ5uooaV7QSkk2eVfPRU3WeAoK4TcFnPzJic3ZSGd7oGGajTX6DUXqvWNu6wMQGux8mRU9DeGMFunA1UqP6Tb",
  "key26": "aLe8eMq98bh9SiRZHmHkEf5PWVo3LBHfrRwDZMzcgSX2dh6dNNrmoEuMhYXZzLBQjZutSdCm2KhKjgUyQdibv3o",
  "key27": "62ogMkAzvFy8F95vXj14ww7uGqUftMkiH7vnF71E7fZNHsSC7PHWoiNhWvoh9k3zuYZhhv1SkTDhy1FXwb2vemkF",
  "key28": "UoQgbNtSCYgoSiG7a61Ag6vhtmnd8rtwLksS9qYcK57NsVMCsyUtvqh7r7TS8StckES9VC1BjY4zpudN8L4oTRg",
  "key29": "5ABMGxtuFCBHHw7VtNsCnHzqMu6fYaZuKRMCtJYM53EMzDDd6cyRC3kPdAjr8oPwEF9VpAwcG32R1LmVLrEaWUiA",
  "key30": "5WKazruA1h8cmVsRe5NuQZiboVA54v7HrNaXsAMVFF4iMeH9t25ogbzXG9JY79ndVWzCZb8XCEAZzS9Yohi88rTU",
  "key31": "5G9M9WXV5iHrpc5SX9GCH14VzSp5gB4uLz6ZmUsJtbKwJBmhhe71yNCLPR98QEwbXcR58Zzrrbky3kEsYQ1bsktw",
  "key32": "5P3wHdHgbLbKQnfmmzRi7rq4yuf58cmJgwYFNiZ5GcuzZ9KzboFaNp7cVkftXBRz9USSt78thcmt1TBG4j7E9MtT",
  "key33": "4vBk8tfKRTg4xJY6uvfwmokDmX6A62irZ1DsAtqEYfHiCZeXJGgrMFdttaLQtwpp2U6R3xhztFQD55KHd4FQQt44",
  "key34": "yp557UTmqAfQMK6KmpXokFRREfPz1s2b92BVx9YUnyWrDtgJap2zwr81FQ3syUCYd9GL5XB75RWgy1yVqSmkF4N",
  "key35": "4Yu5B12o9mVdsMZ45ZSVxzJrvLGGKGq6YJKjjjBNm3oaiNhcc2vQkhtqREZbMEuse7ZS5PLhuy6cHm5gsdeUCAEd",
  "key36": "4F6ANxkm3qSbmU9cHZaGaiGyQVRYYb9yxJuNkfdUxQRH6ZNmpQ4uAJ454jZrA1qpbEriSnsaXCn1RFjpmP8m9RjV",
  "key37": "5mbEE5ftNagdJ5HABW8JwddnchcGdHSAKMWg61nfP1ipJeBWFNZwmTZoTJzqs24FmZq2V6DYV2LAu36oVLrd9xYt",
  "key38": "3YHWYVi5gNKvaqcMrbCSRhdz1uUjAjDVDQLLAbwha2V2cEYzTnekUpeuWkweMJLFmb3pCAD8bwZwMsSDaaCx2Gc7"
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
