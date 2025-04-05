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
    "6WQ4qtyfqVooPHq4BHoubncvFNxAAYndp2ihpWVLML23yJziPJGQ6eXMxmjoCraXyzdoY3v2rveXgS9RtGqRsZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCtmPKe8ynk29NaeXfB9no6pNvjJ7NuXBDeDWii8JQLs4koDLuPLWJAEEBnxjGt7iN8PTphStewLGpzfD8SqCj4",
  "key1": "62v3wFwtsuPQycVzeXRC4djuKhXFLbU9ND8E2w5ipcEdC74daeQwApKQJGj3RXfZ48dqAREW6oppctS1pJyWPwTZ",
  "key2": "3hRvVQFqnoLbMK37ts9tmPeNqG5vhP3kEU1SzZTTJwwf1abNjtwC1ww24QkmHiMFDuuKG5Ui4Go7LvyUoaGdAbXb",
  "key3": "1hgbeQ2LUBZL8VXpY1Dif8ZLRDPVob5ZUbLUna6F6sqp7TpRdusSzgxDni3oNhS2Bq6aV2RsRjQCdMPAF23PvyX",
  "key4": "2eUqDpPssdwrZccDQxmiaKD14VPCHnEsaduZhNrMa54VQmpfespwquYcvE8cLuNNHeH3UGYzX531jXucez1LWrCg",
  "key5": "bAWce13fDAH15HiU7K6Ffw7yEM9nkiRaTYUzP5xUkHTBkp4yPak2aCSNTgcu3NfV2AJ5X1hBKpVy8afaDAdhqgc",
  "key6": "wWRr5acCoFotMbT9bD2xf1B6ukDongCsyZbaVBPbAPKvpCjPLXZvSiowp1WbUDQnrVAitV5H3JzCTiDTx8QJQQc",
  "key7": "5VrxEQ65f23KUv6okttvPs1xiyv2mTC8ERDeewYxnXUCzPZ7vwsCcpFfUawQEfWPpZiBwg2BxZh1XB92RtUfWZnn",
  "key8": "2y6DuXsa6TVGt6CjUJ4eHQGpSsZH44iUAxmKv9NwQswq6QZvgHsHQc6gi3tHxYQua5wEYg7DhoAQ1QbkC2ZUAUaC",
  "key9": "5dPKXxVTdZBDkRKFpsWsiPqyqVQie86nVdBqSZeBcBb5dQFpTtSPJtJHYBCTBzRbFxN5uxgisHNxTrMRrY35tNwu",
  "key10": "55Am6c25AUy23yWkoKwbD9WMcQE1SL5XRSnQDPN3VGA9ye7RWKV9uMrQW7ZonD2nRPyNuP8qdE5HgLm7T3GfKBCb",
  "key11": "2iphShSj1E1t2NDtTsDG9ZoDFA95S6uJnY3JAwDM4SBXsrAnsNGt2d44aQCE7h6bAJgq8KqpyDrL9yrzRtJFCPjm",
  "key12": "ZSm4CApSGtJioQzUFcGHFY2J3ZRousw4VFzxMo68DSWRdhtEaim8TZ3pg8icHzZ7pSyhotifZtjjBJVDRm8EQ6w",
  "key13": "53qLcd3digF3p7AbHMGPbVEDTtgqNQ4SQNMiPupFf7KHYgFmLUhRjYmqcd1Vggm9qRjTQjMfX7A7HqTtmLMjs6Bw",
  "key14": "47qe3qYQr3PwjYynkqioDJ9LWauYTRfSsK4tWLKqsnDY8veF9c8H1yoMKNk5WwMnhpvxNj9hu3eWbYgmBbTADVCD",
  "key15": "3N9DEM5cRJF2ZgeC8P1Q4Np9i6daJCZuRDHL3jXacwCmhQPGnL4dGs2jXrwmWEyYvyJxuoX1XQkK8D5A7YZaDgsH",
  "key16": "4EKz8Vm1FSYDaKeUyPXkFDHhvn134hukbjCoYxWFqwv9d8nwJ4E4ZNVskinenf9kDBMJH7oHcceVPnWAZs2ySDVL",
  "key17": "3Q1fsXDLE5dv4nq1M2pPgTcCt8H4NvhMg733Zg2TRnLwHWMhqYVNgAp9PWovrzUH9kUtDkG2gEbdWaWEz3aNEm3Y",
  "key18": "3BWudkjYDXgfYDsrNkQbnHmXPTer9owWTmim8pm2JAWpinJSenWg6Ms6NrbMWwEjEZ5B4Jrrrbvmjc6PPggqpugT",
  "key19": "495AyzJk1foBTZvq3vkd4BVk1GxbiGVSt2Er8kNvkFV1Lb32qDLJwVFsUymDKPtrUMqnZCF57UBvCuyS2kyk9gUM",
  "key20": "45ZYHLptKRDBuPWvBAz9n72aaLvw8pGSneDb981N3mMGkc6W59ADtoccK8pDrQ9mE1y2CMZTTy8MKHSb8fcnXqw5",
  "key21": "XTzxWJ4NktWNhJqq1P2hGbMTQtXPEQBf5orZF5HBHkGoPKLXPPaVjDjznD8tYYbCoveXLHBs9TQ9Q1tuct2N9hP",
  "key22": "3Y8a1Va4jHv8PerUafwv3XqQyr9V8LuwtkYVbwNebeApX9YtH2iLKotiU9VrMvsfcgtZFjJQ5XxJ432rsGPfoy3s",
  "key23": "3WiPGwmExdEd9Mk6GysaUAo1gq7SL7SrBc3gZdMXkYu8Z9Mngw4KZmKP2qygowRmC3WCEioDA2cmjWWQoHJpb8hs",
  "key24": "5SwzeMxjseirGcp4XdRWKJsGgsr1xXh7KhBWjzgqQ8ZYRCDYD3vnR6P9NjURJ4hdkbeWoKF3GB7WLydsMJagHdQw",
  "key25": "62CEWuq7zfXfmBGEgDiNCCsChy4zpTjGLArz1JtR7b7aB5U71kAP9Q7RLdomWVKEM6DGvprWb4n9Zk2GfnAXonWA",
  "key26": "4LMyRkAhzF4geSDcqPyYPuYW6qhAtYrMqfQRuJxjYDDTaiPRPGTi1sjka29Qj268WcsUqZFDnBYt4zGmN8WaG1BH",
  "key27": "5KpewaWKVjzJiroqrm4MQDvYbPSUpeTduK7GMkcZAT1YAuwavyNGW7cvprHd9sH5n6e8cw8dh1kkTUAzYDQXgPjr",
  "key28": "3CpXKvTfpmXm8WnMpq75f76BPpVzd7oQwhLXuqQki9u94YSPBwNBfvXuNNhRy79CkQVgs5RB5QMemy7r2cVxgKWc",
  "key29": "2ubNpdDAzwFWj7ejZPU3NrbbWePaAu5GBxrSEUa4s22Q6mQNSkrvz1dHLR9WXPibUJfMjEhzW78RPBQDoTBhgt5w",
  "key30": "3Gb6NY7QCSDTogpey66LC5kKZDvu4L35umuqFzv6A6sdVUhZ2f1BkibnP4EdB86gtNimbiwhyC7Mxzyecs6CBDwt",
  "key31": "3SKhvxhGwSYP37W7Z5rebhBRSEETyok7Fj3URwdk8KsXcCfxUQGvz1cz9ELBRv7v4HF4xEJsKaZ2HATMaimdVtut",
  "key32": "JTuD3JW9sE36YUVWkvfg3AMAvcpXkkx8QT7bKeb1wR4AkHaS6wCiCZ1H1BKPpWqLTaDdrGfbknaP3s6jov3JwWn",
  "key33": "2fjpz19FCH2xnNZvNSHidW1wCcESTGD6E5hX2LeaYTV89Zgo5kbfgsY91CqnKkGn1G5t8to8Zru9baTYiwaBTLEP",
  "key34": "5uiZCqnkULNk4R69ZrvaoAuy6sBSf4sgvY7Re2Vwp1sscYrS8cmivYqG5J9u7Qji3KQepfyWEBkpct6aHy8WApBJ",
  "key35": "2gcFFyi9XfCBXjRup34WBwfe9VaYyBc6b8GGciMhmD82cA3QJaj6wU4WA4z14fAX7dYr9DWetm7yVFTDV7JRQJkm",
  "key36": "5fSgCauajvf9cyRoCmYFNW5ChfpXGUQDTTo9yM5xFN34Syj7tpyp8cqyZ1rzoyCwKPdPjxjawPqRbV7ESkkqrPt",
  "key37": "5o3WqFoqHhj48kPP97fV1a2k4PW36E5WTdjdbX7kbz4cycepohEaCw7zHbA1rXxwtS3RqHXf6274uGZwhN1aYpjb",
  "key38": "5AsEW7hy8bX4eGVQbjZPLa65fsvWLGMpsDc5WUCaFVU5r454Eg57DJW8x68Woz4zff4W6ERZ7WkS17jeGVnJqo5Y"
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
