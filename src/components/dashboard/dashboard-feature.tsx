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
    "51NANZCNsLYAaGB2HJYntJe8TaJpaoGJTgLtvwz4ktKegTNAfz1v51t9oAYqPbKtgdPxKx9e5peYYtn7S1ZsYDth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcWrQoEttYi5keiHdTzajxdPpmdNWMACxuY7YfNGoJicVDbWrTM1A5BnqCeeyo3uU8E49ceGbFV9P8upuDP6JCT",
  "key1": "3znHt5S9UynZf2aVGsJohtEQuR91VhwbJMXra3xnAZ19jCNHrm59ALZpGjTBNGgi1mHFmJ17ceoycHp4XjsjYB4a",
  "key2": "4yDnSdznWiWmKSyhQW46a8Ccg9JUz2Qzhawwcc5wz96JycVVeF7G1uV8pQm9bTBq4S4VnS1H7S73uhREFq9R42VP",
  "key3": "5eUGgtLoMc52mDnnxAEGkX5kKjP88S7EvFySMgkQWx6mHczSbRZwHUgspSxg2hU91m3V7b5kXpTX75rRuAXFDcbJ",
  "key4": "4xg1ogsm9dnBnsyzJgLm9EkybwxuVLLavgfY5fthYsazU9JoWGg6YwfFGbrLHAv6HnCD9J3fYCqYU3XHAfKNR4pM",
  "key5": "DevVpyfpBGDKNoTZtLqwf5StyGbv1r5U4g5B6nFsdcjSLwPAaFyVrstyzPgizYJXCUuyFD62o5RsuQXNNTjHaSX",
  "key6": "5urtWiP6hzkcUeijNKVshwNBLWq1kf7thAzuPWVJjrNsA6yG6kk55gAb7mMx4GXzTLNhZaBpmjaZNiNVf5NSvLpe",
  "key7": "5ynYSGJEDEvCndYnNsx93kv246mautiGSjKFWnjeaaVJfqnQESUvDHWP7RR6SKHV6CPariAFkwPcaNPeRNnEoHJv",
  "key8": "dLR3Z9hw7zHnmqkNrXVS271LCGiXxnwCnVqdtgZiVhJSM85CC2kiHvoigLwPJYnMy7s8FfrhAR6SgbboC859dWu",
  "key9": "5hV6knRbUhFCmoRNJggKx8JXFueH92AW8KSKBN3vqkMhK7LUMWspVXn9MBjaT6mRAvXGzZtms79sPwkrGWTSbocn",
  "key10": "5ppCguJr1pL9YVt7MD6VN4cZo1W6Rsci74YpijnUpdXxstp2LCXq8mNd7DFDbeM6ytZpmvPwjUNBteTbrMZv4dUC",
  "key11": "4awjktbvsLEeJKsoEsscVmQWrtmyUJv7qy7tYFy56WGYkvLTXtbx4zmr2WXUD16BczQMfcKduZqDYdduxVDt8iXr",
  "key12": "456DvHNwM4Sah5G4qE5WCxpnL1F6LcSG3wux8NMd1zHavfJxcrvy7b6m8MPwmuUPbeWHTKRBftKkAsRrP7z9iHxK",
  "key13": "4cwZABNwXRz8W4myVpWY3zuyLiZuaAyp7WUFyquZ5EevQ9qD8jnaxk461xSPDpDJsN3WssUYuYRhLZJvh9MUNNrJ",
  "key14": "58xgGeyLyypRbCGwLjxyR4Pq4Gbn1rvPQLUDHDnxRWyhbxbDXLGDVag1fsGQ4VJgsTXBFqQWokuu4vYh4KHrNPYn",
  "key15": "3nJmEsuPUNGQrc4qf6VrrxRXxSGJ4vte8YSJ6jr3VJGfycdWCFfiWEvspGKGD5ndwxBiND7ne4mtH8Z4eagxV3y5",
  "key16": "26c4f5CkBBq3WosdrJoEbe6v2mBGKTVsB14XJdTr4Np22KJfAYq9u7GbAVPAgKDFzZBSmHSZDDWyzQ4DQyHei964",
  "key17": "5TJuPhhmsLyzjfFevB3RYTtZSuVcR9sMULRYc9kkoui9tRuomNy2JjED99tTNnFefP9jx7qZPSEFcua4sHV1A4mW",
  "key18": "5FkjrDfjdk7meowrjvsGaw1nReMp9mKfQVwgfo1Ep5ZRtBMgYvYFkLj4i6VS2xDA7fdPLBNYDpPbQT1xgoi7mTfM",
  "key19": "5GrdTZfJxgPbWcVNBVGafJaQoym9BthFiyJVHLJJzWNmArEhRxJdRh2UowsQeZ5kR6vdGHNKxpQP3aEaf7DoGPzd",
  "key20": "r73ER551BfNSabbPc6phh2cxB2Q4nC4EH1fNyKTV1BCPo4v3uAve3qwmDWMwMsXahhve8yfMk3h3Bn3HVB6VMyZ",
  "key21": "2a3kcPNpFJSuzGcLimzjbRdcQpS3Znbx2tyb8FDPnGkJXXTUKmv7tmFPwL2sNacxzfn9ThhP9EhsroGNY7qnaqWN",
  "key22": "3aimXCE4CzsZi4iRirEXGyTzGtc8KKkVczUEN8hafYNLTxFSWR9jpZecfFNcp7GacwWesVtyCUuBnvbkyNGfaLk4",
  "key23": "5z6uL11Cmcf8Jd298ytuaZCAXxmjsfkjXC7nDuhGRKcmBdW7mDU5D5P7XnNVzguRDEJYJ5GmAs7GwUPwRmjantkR",
  "key24": "5ko4MfzPWdTkxh6Zf7zqLJkywYWLfWPbqRMQMSfAoddXwqYPk3RituSKZqtCmFUS3VEDpe6mN6ksAs7bj3uSbQGS",
  "key25": "3SD2azaAdp4J2BqJzSqfAHMpTkX16BWDfLkj5FNqHz7Nvu8pCCdComQyBYEJGEmt6kLjtya8imf2ykT2geGvADXS",
  "key26": "46h59NazBskyy1RLvj7g5PmaqT5qRhGepKaGpEjXddXqbPBPW2u4FK7g7Z4XC5m4pyo4DN1fiikTmjMnmoFKST7N",
  "key27": "3pTEnyoP4xXsykQDMG2c1pmUH15iG1sC2ejh7vGCJVSofno7S36xo8qB2jzBUA9DA3c2CZ2W3b79uE9yZaM1ty1F",
  "key28": "4FJAV86r6ua2NwLpfDyhUuctqSL3yofbUU4UBRLLuSZmtAnAqja6788scPJATbSymjCSKzTzvgFxkb16zLqdqT9d"
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
