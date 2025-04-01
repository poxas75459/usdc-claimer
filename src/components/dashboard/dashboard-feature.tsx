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
    "4b23PZrnCjhBwdL464v2D8noMFiry9Si79Rx3yZvqf8ndGgSo2EJsEVADW1wPG4m2fxYhn7yVRf6PNy2TyHWt558"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QU4Xy8SkAGcHyWrM2cywZ7GbufWrCg5xQo1SWaKKcaZodoGmdQRC9aaruvSvGjfcAVcYLgA9K9UrGMGGSaBayNL",
  "key1": "3RbdTbfqqeUU2iAtS4GQGrfFPotVE6smvneGMG4osfrYcQvbFZWYFkXakib6tFYwGjuAepLKRpyFgwbjCs7bkdiu",
  "key2": "4tziVougeydruxCmy7b6gWtxZGEoz6KXGAVikz6DSDBZcmYv6SUVKU4QJbMXhEGH8RVyT6rHEwgYKPC86BS1kay",
  "key3": "3cPE5AUcW9i92jx89prd3gVUybdpoWnPuKeEvntPKjxXhwNJX6wmq3Sqs2pCkyCQbBz1L6vDDGAf8SCcEKbLvqE2",
  "key4": "5v1YvL8uvPofHYvHnZWaknDtGrpB4DzTqdTHAQZLzXQuxz5tKSFnJLyjJa5knxk9VWrzX4AH8ZTK7J7jSgFgyk4e",
  "key5": "4hc6yCwhxEBYqszLsi3uF1KkESLMBMudox4vxo3peFUFrzWFrmkqn3ZUAXiSiYFjvveGYD3UWHEuSJEmffAaja4A",
  "key6": "2YgSCmHSFp2biWxmNdwhowUQDkhweLEm6F4uWX9ApBudLxQRvAAsc5NqGDLL8FZxZRMBidyouBYW94HZJ2T1Dm9n",
  "key7": "3DDQayGxjLi7UafuVZEQR9C3K6k4fCQQaaGmJXq1sYrNyLugr6rAVkeztoa98JnJZAf46oKGpdMGzKRPeieDXNLw",
  "key8": "5n8Uv53wqGy6fsydNcstynwanyjSZmPKSaMmaLcKRvXqAfxdCdrQAU9AT53dvCUuRNPoDgsDjeN8TCzWc8TGV65m",
  "key9": "511p1nj18mDDiUR7NohxfDs2QzzMaAhFwKUzmKpC5FX4rAmvPdNNfp6EVdHZVCJHKdxoYAmHfGCU3HVAgtSyxUwD",
  "key10": "3EYsp8RELagBdpwedQ6ATFzYxv5HgdeQ8gRCXGqHGGcceyEpRX5vtjr4rS7Ci5SPc5A1LPr2TgdbKxX5n8uMCBNT",
  "key11": "4Fq56zA4YEZzSp8bgXtEXTf9EDn1DWvhGXciSLkLdjZffuNwH3QvYND83xsfdeeczYXUqa1dvqC3YPmzcLbgybsY",
  "key12": "nuM7dGc4Pt5bwabVhpz9Gvk2zd9SWZBTcud3Y75HVGfYDjs7CGaiAV1F3SGEe3JGyvWze524SH11gwLpopiRJf1",
  "key13": "3kVMsmLV6S7PdWAPSNkvuoFTJth4vken5Yuh4UmE6ywgPheGuXznbQotJiPmw7wKckokhqdQPVzyRiB3pY4yPnbL",
  "key14": "3XKGA5Yf3bRKoCRwKBiiAfWRZNWkPWcaXBxMcX6mb4hQxHtWK45VYBvkdMjzPpoYE4kts2NqJ3JNhmRrvLwzuxfa",
  "key15": "WvWmdYL7drr8d956DDh9F1rnFtokSJG7N6WysDmKveWXSsPqAvJgHkjuwL5TtQfQhZYzpwcvpHQkhqoroRVoYu3",
  "key16": "5shgJmSueXLTALrFi5UGk3DmwYLEBNjGzfndFE38BjxKE8g3MQYjkqgbq2vVWC9eq2YB9N3Hg7GmcNMqWoYSxZ74",
  "key17": "2gRkrUnMoi2TGVjBoV3qU3WfwpkSu5htv1zUmXh2rpCCnFuLBYLtVDWgsj5JWy25YzsP5QwLsXKX5rA884WPU5vP",
  "key18": "5TMS2VhrxDyF9PuUfpkxBZgKb5cUhTCmob5kiUHr9frVYtBk3MDRGUhk9hhvpfBXiMALgAp11V5YkFjTF95XWB9Z",
  "key19": "DaWxghFmG69YXsGzpbSe3ek426qxjMwYfH8Jv6motJSvhTeaWg1YTcydsfEtcrPzJfXFZKZoMNHLydpuc73vf6s",
  "key20": "2kU7MF3pBtKVCmSHbLhbmSVt3BDzXVrh53k2bmKgZVdot6WaByD2s7w8W9rWMMxAVHTSfPV7bKHETqSC7aWVrfm2",
  "key21": "4uoj8DznqEmaE3YtMgXQvoyUyLjfzJDdNzFE8VDvymrPGSBBa1wFrwkFdEXpBr9X1Q75vmCyJJAKxfu6VHtsQMXj",
  "key22": "4GyZMHpUouYqWoHJkKCYqYi2jDMpbyprZ1p2dnKhMFRepPKnbMenAp1TNqhA5J469cpaTzJRL5cqU1eCQQK8mMna",
  "key23": "5s324wu8QY46Y153XsPnYs4gVwnf4Rs7watrGsgzaCdQPsVz5GvGJP5e92JsvERBfjRyadyKreWm7TUC9uXAq4Ph",
  "key24": "5JhevrhtwpJgXWHuvvd1j6kD2fPzj5HpkhiQd61ZUh9PW1RgW9RZq7QdcYy2Cgr9n7QyQC2QNTXZMns2QMJ7675L",
  "key25": "NBsgTzRKpHfq1cfznVNoc2wT4PPfteNMgJJG1sykmQQWxGQMiWvADKiwoZnuGJMgdyB7k9EcnFVcNR1RegQf463",
  "key26": "4xQUrd44ZWfoZ255EDvAVSvub7bzMQHHnzHwtXYpSJafyuCNJhA2xz5u4Jc1CrDeZewBcA5qqfBy4L5tspRkbzRv",
  "key27": "3y1C3r7SFrEXenad1CqTLQmg1W4GScuH8ErR97NDr5fRbyQCxsM2kMX1u87jcRJGFHBdXH9nnxrxf3s7MDXCGuBo",
  "key28": "QqAZFuvKVZ4i2HngFi7JpJLPi8JoMCJ9m3DzLpQ5bpcjscebxc2AUhsdVqLn7hq6K2Lqpj8JPHCfH61x3d3jkTe",
  "key29": "66L2QKF21soQwLK4MJXivruJJy1vSSga4SaV31YTx42TvdJTpcC3Y8rqqDNTznEwB8gB5aqfg1KChRG685NFdcez",
  "key30": "5j2XVXWcuxwcfLobr1yqwqMpGbSN1d38L55qN7mgKjytwjhcocxjLoQrJH6cfF3XKKf1Lid5mRwcKTRPuswYy3PV",
  "key31": "3stCiggcwHekYoSqX8hn4XdU8yWeZWpWd8E1AqtKSApSVReiMsSpG7C8yBT8iQdYwqP8eBCvneHnjtNZHfSAu3wC",
  "key32": "5WsUJtYES86boLfsyCchSDoxVbXWKgkstmJHUUfW5f5bZYJezbhWZ8WKzQcNAr7W9zU2hy6y4zvMsE9eTxuuR9oh"
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
