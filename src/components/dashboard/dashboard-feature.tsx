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
    "5mUGpbRrv1fJWZtKEerinYjLqFFBJqT5n6q7NMRmsP1Fb2tBNDHkvEHb3iZ5CFoYLsuxM2UtFG2pk1XMi6SJmZdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uv7AZyazh7GkzYhygPmbmNouPhnmNK6uVnuY9Gf1huPGJ5FenGVUDBDcb3tMmuJaGfnLqUXfR91eJYNF6QcMMeE",
  "key1": "2DY3HN3LTfLRtAyLqWJ8KMPYfsxwQvoJ8d2gFQvQmtwcYu8iiadBKm1JJtsWkqCN5jrCqExGrBQcES8giV2DsHhk",
  "key2": "tLHb5i2J7fv4oX7yU8enqnurhvrQuXUgH7qDekGYQYCh9DZ5USwuu3k3Q4uh6i2ghzcJw7dC6ojTjgwepogYRS7",
  "key3": "46GD42WmYg5wg7vwWALWW3zqE3oph4DfqARaLUoSSoJ72VNWThU2cc2K7JwAN8TGRtxf5Y6tANhvgAWUXnqfVEy2",
  "key4": "3aWUK1mCwazo3uJYz5J7G1ZFFtF9QVqwchsgDgguYVnLJj2KowVDTajVyX9zo75ta4pYzQM53jqGtHckUnEzdES4",
  "key5": "51qWMLxovUVyKgZogidTPe4cpZ6qVbRkwkHanpkxbG479MXmJRZXtxrso94epTTHW88vBjtq1HYbApk4rCY4eCM2",
  "key6": "51ZBGKqwBJzzN7G6zwLoN1bbcREEdwmS3TMiHNLTWbBZotwu1jay6Woc1YJPzDq1QhAnTbkFZpghtDDcTvM38kn5",
  "key7": "3zrz6BuWTME7nKZ8ApN4uhZRoq1v2DokjecwKPijKcNnWd23uJ5Y56M7goe7pDwu4HcQhjYVKBnYqw7wiD5cbcGh",
  "key8": "24XP8qzT1JdKCvRijd2E6qCz939vhYKChS3z5D9ExVH5UnPCf45xcU8M1KS1TyKmPX83ourCKUVUZ1Qn4Rk5hi3j",
  "key9": "2dH5LgrcQJZdcnBC4ua4SDs6NdtPRborw9dFSciTge9cmcv9KKytTN4J3Nd4QuEYjUgG1PmpAFxx5hbh7RJPXvk8",
  "key10": "3zqyZdLBA5yk593GJioKv3VoEXsj1diaE6izoNkoh2YbKd1t6atPmcgYxey9MkimGUqpvwFt4h1VCYP6kYPdaGr6",
  "key11": "3tzCn11y2nD8SgpjNNWFKGH9BSd8JkAnLA345dEdjZVN8hXzEwfi2RLQmyReemu5GuTabP7AkNqeg5AE3wUKgN12",
  "key12": "2cxUjuptRE97oNWuMsyiUyxroEuuxvGLyWrGb5jKQJwjcd4Mvk9e5TxNraQo1fj4mzJXy478ae64uw66d46TsV7s",
  "key13": "2SPPmw6YpnYL2LSS67ib96o7mH6CcctTccHtFHBCi1A4JvuW6W3Xjf2KnKHcDFPso6T2fHy5jzRv4zHA4dWtc2yo",
  "key14": "2G2kw7vDNhySr48d78UU2RLcM8qWLzEDKDEdq2TDj6aiEN8Tw7mkDjTwS9wXQ2ZFFUQB24GTFXSqrbsgttCtGWJD",
  "key15": "4KAzNHTneCxPdajLVbPahi8K8sb72NBSuXRJcoDU4WLjWSPrJyBkr5xcndCefqK9Xo8oDZEtPa7hokbptvr6XdC",
  "key16": "3xzDbYZrh6cD5GVYzap5BT8V3cFjARp2Un8QUmAE9aSyQyhNankA6QQjWxjFBUazNTn16iJCXSfu9KFBWVu85kP4",
  "key17": "4rR5xxy8RwSagdXLUC2tSE44Zg1XaYjohKAJ7iW6XDovB8SDyoaQrSBWy6yE6rStax5nimSbKBHUx1k3TUwUJUw3",
  "key18": "2qRXaRM1Qd3fHu9mzsr9PaojZJeV8cAL6aew4zt5LKVMDGaZKyc4PfXaQW3fF6Tf2P1UmZxAX4RuAuNpkphjpV5y",
  "key19": "4eh8BpsrUuhxuRo55CiDzkBff79YXDvw8GLHh4XPridGtCZ2g2tD4oUQwLmXMdV6rhUkSW6qQbGBP3LQ1TxvPLko",
  "key20": "2gYuNezeeBC1wtSyA1zsD5jMb18XUzCMdwXjKMP4QCcnEMqVNdx2GuRFBYZLehjvgVjyzbvnVkSNKQRSA8vRhTPU",
  "key21": "36hgpQwyRwyS7UbHXpzesnSJ7mVcnHMbN26xYwv2tLpQq1qjW9Jn5RMoPDfLt9gUycZmtGv8rk3fzM9C7TrsJ24H",
  "key22": "5mWFa95yChEj4u8kMY84awRfMrcgpuoFjQgC9Go3gshr9WRgK6nyYLEDBcAR9FbnwEY2zqMtER9GNpqr7y9fhSdb",
  "key23": "372ey6b8VT4EDkSAUzX6Yhvz2ee9iRG361H19iAkNYw5vhUP66R41LufvBQYvZJeAhU9BBZtP1gHoyK8mQYDVZuU",
  "key24": "2VtsPGQh4Z8DjeHi16tFkRwDiLjvz87zqDvq354k5bDyFSUVUbotXkPQrTP7aa7azVzmY8XeRKDaVLveXr7dUz9k",
  "key25": "4q8SZqRVtkuSroXHgJhHmpjYQxKLXubkjUADbrprEaqoan6uJpoDtM1kUbRJJhi5UzV68Wp2X97GfV8ujwAW5q9i",
  "key26": "3svgR7KHc1aXoB8QBc12keXRyUzyVfX6xWF6k1BaXJUQnYxLXoPs33EeZuzRsT64vQjxCWZNFBRd85fAF9sGjGn8",
  "key27": "63oktVnjCqVrusW124FaHU4e3Ua8WHt1v3pCucuNfD43P1ttyNsdm6eYq6DpTjKxrRyTmipTUsY2NEMQu2wG8vdK",
  "key28": "5uHrARHWMdapmtF1ZpZTkDRR7jpLPXgDVx5YpCjUnvgrb7iwFtcM8vriCJgNmdLBbV7R3xRqixbS6MHTjktc6JBL",
  "key29": "2WVpj5DNdUX5TKnXGeCmXNWb2dAxbBB8z6sWhgxvriXBMQbs3CCsti17GWzxFBNdi3iw54TZ5d33uwpo4zxh6fFa",
  "key30": "238Aqtxjbh7baeBQi2K1FPhEUidtnuTAmJa9HoYPEDYPtdbphHbyFswiU1ZtcWy166pkDfoM9BpPZh7A2kaD6oBr",
  "key31": "3y1ranH7yWxrf56mB1bQ6HvZYSyZ5FN9papmHbcC5QyjNcF4scbhKZAXVjvA41vLhk5k4TqrLG7uoZ8xCaekB3bu",
  "key32": "5ueKvxDajutmU4AuoorfSFJW4ZoBqAaGdqEYU5NZZshZiJhHbgthFT2zmiPi2dttrx4w4ygPcpxMyRcXvjs2uMCU",
  "key33": "8nBRbvq6eZKRQjTEJ23sxZThU9G2h4F2kzgFiTwzqfL8sskW41uoSWbPiuhbZCT6tBgjxY6ovbdqSfYJqAyMaTm",
  "key34": "5eFqJwf3xtruvYAwyPJQ551m5FQB9rin3TgWmQhZAc4Z3EgS7qsNiTmhdnDnpdYVrDtUze3nTrQF6D3LSmuQCYAA",
  "key35": "5LoZPurCNkWV3MKQikYTog3joq1Pa5akfoorNwdc2mhJFkwfTVPhTWyj7JHseFp4das5cEkRgSKkvaZE5yjXT6F9",
  "key36": "2cnV5ZMJnq9dZv8HtqxaEkBchdCLFRykkAwH9dghGXg2BCjvpgmHddWeMfakBhk73yMscyCHPQ9RRXQcL58uoE71",
  "key37": "628ikcuzCequ2ubuMx9hepBm7atb6FsW2mkpL2N5G4yL6HDZNpxcQCgWQY9nr5TV5TtjfHvDPoYQ8yMZ5SkZn7XA",
  "key38": "3NuFrWKeDbFbMLxJDJ1MGpArQUAL6NGEGgWcvnkgankp6whbfiWzXDRymk2g1jJqKyymdjVxnVUqeYa64SKawp82",
  "key39": "2MTwej23aHrXJAiMLMixhaofuWFTkn5ZMbx5ZJoebQ2MUqn6X4jogL8hjPtpqgDBJ6tgZjvu3su188gmYnJUssEZ"
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
