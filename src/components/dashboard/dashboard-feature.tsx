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
    "3qazwpgxCMAK51k7Z9U3mgzm2BmZhhdYE9uSHP6Lftt6yAp5pcPbQbePyoejQa8NnCLDQPsgiMrp2KTW6uFVCZ3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRuFyPFCtTXP8tgUuzKooG21LKzGznra7XRh7P85W4Nu4GAjA9BxsMJUVD8ToTaQrZ9A3UWcf5JppxfevL41A8D",
  "key1": "3Y39HqRjL1m7XfSS97JnjvZqWHCYQjo2DyW1YoQ6GAbuEmQn2pBmWAN4p3qAmxNFTPyWYCjrX4uxXSKsUc5NGgU1",
  "key2": "5EPPcABgSdk1Z8kQk9B2iqoYmdUqEvKBsNVe9KDbpzcksnjo2uEBjgA6uvjgHXqaitVrsqg28Pp4CDXkFHu1nNYq",
  "key3": "4xevtABZdHuTycNV45E2jfFPDzPhRQyCiAzsTyiXLc3EGDo4hq9WR2qqktwfV7QUxigaC563WvbpNgjXthXwNh7t",
  "key4": "nwnC74Z2nEnRGQq8HoJS5CDcKM5aTqGF4oNDct1v7ynbNpAGpwqakpU4b7g5TP4FChx7Mmq3QoDZG7XL4hJr1SR",
  "key5": "2oweEopCqeb8QaF8YsMVUucowbPH7d9h2TewQaBREbkUsJm9Hduc11mGntKS6QKNoMyGUrWpNHgTQDrPsCcLM1Un",
  "key6": "D3mRCzdTX7ymVRU6pt2jnjWVdXote6JKxMvn9YVyp7pknqFEdhTJMb8EnBYinGjt1n7cXytwZuL3T3xDv97tbej",
  "key7": "3Gvsiic4PcoBgsN6dsRViaV89UZHXzF34dTuQAAGbSFLLpA6c3VDJKZzk1Ga1fDgZpWedGjSGaoshpJwktFMsqk7",
  "key8": "3YSMkthTDQpdYmhQeeWEmw4oXevf8cZ1Ejk37SaqsUEf9TBQgNoaJJpGV8hu9iknKnr8CSWhVYzkrUcFeEiV21W",
  "key9": "4SG9BLnqJNFLn9Li3xHew85tpPH89ehwR4TFkN7wggAQPz9g6FhGSceyfuWnkTZA5jZ3GtWd3N13JSinn7KaQBnM",
  "key10": "43mZEFTQRs8fr7wLAuH6zmtvfC6CHyYWe5ZchdG2BfjtyaqUpgfNeozpFbdFFVTxZ1f5eSU6c6J1ZZMZpGPa1ZFD",
  "key11": "2aLqnKQ11AEPUq1kbAyPXb8suZpGhVHk6WyzxqMXxpRaCrTjfH2zNqsbfRJvtxNovUsCKJruUiXvmxZfRHjxziCv",
  "key12": "5XduF8cs22A6dLwfYZvuMptWjF2mstT69GSedRmnBJE1814QVyinYzmxrR3dBQE5rqkkvTAXPmm8MZqfVQa8oBSL",
  "key13": "3htwLFMJB2Peiq9Eog3JqzBTLBKR8cv96vPzuvBDAHop4NpogZ6xZpEoFznCarkv6pjExjV3UaLkGJ3N5rLHVfXd",
  "key14": "4yJ4z2hsBfKM2xhNakDhccNzS8bsqyhGjzEnnZ9mYbMd1Ygp8uQN5gBdm4UDLrfeYH5EDYL9u6FpeN9KT7c4NATC",
  "key15": "2sMymWcJSmi7AAp3EoWzTTxYDsEofY1pg9f64nVHMqUrfveuQMCS1ziBA2jozJVY8mKareKT6vqz3dgP57go7cNs",
  "key16": "ybm8Fuv56tXn3MaZQpJQaFP18PyehCt9vR7qCkAX9RvUFJ9WKfgfnANTJCXJ6bAszcf8XQ8cpyujvQa58NXHsPN",
  "key17": "Dx4p9RoqQxFyspdjSiHWCCUtB7rN8nP4HDsk8ACZQUNEwTyVFmbWNKZGKRQoJRAL6pAmLnoZFtcpmkhZMAtiWMo",
  "key18": "4TcFb6PZFgHTdumWPMUWqbYrLQUeabNtAWTwaX6EWB2JTEooPthSrE2bVENbVLFxQmrTHpXKk2NjFYLTPCA2MXSQ",
  "key19": "5x7Rv3wU5YqNXpv3G91xiSkjsyvN7waoiFbty1mKTt8BkdAd3xcSuJLptpWb9H4cu1bv2zZCHHiJBkB9uryvDVu3",
  "key20": "2TkW6yLqJB2CnoAJ2bunGhp6T7vKWJyH3PisYVqjAfwYcXp6V7qAqpRXZDQcKQweCXBFKxpWQDmdbj3fDWSBDquU",
  "key21": "4TiSihp3P3Jfy7bNjH3NQcGc448sxqAyRLTYHA5aZQj3GAPR3dzQZih1CofBbGPxoukUpHmYt9mYS21fG2JgcTLS",
  "key22": "yht3GWPVb84iARVfuwF9Xqn6KJtNfhofxU3UGiX3Cs1AZD6wPZViVNmNu6pKpuGd3NdCgRJeyCJq1hr1B8iniQR",
  "key23": "5nhxS6p1CvbtATXgotff8LPinFb7RFBJdv1Huw31YCPYG38ia8gbpfQ5yfPAAyYnMrnbkntfvAevXgp8tvW9ryTe",
  "key24": "zwfgArU4UT1A4UhoMCuik8KC74RxpmJRSzhw7paSQRKk1yCffjbpLdXmNfApPmbLbvXMMKtk2yVKU4EJh37eccT",
  "key25": "3Eo3cyJGPaatf3cE1venmd7X4mEfYLXPRrk1jtcvkN2w2GmFy9jKDdAA6V9p592D5p5ysAKduEB4T4Z78wWmGHfL",
  "key26": "2E1fPPNvkFsgFzv7oQf8XKm4g7SwykJU7md9me1k8q2GSWtejJLgcrXXwxFak8bFRv8wz7EvTSKas7BK3KMCGBfU",
  "key27": "2e12ct9UANY6po5kAr3jc6Bp7cEWu7LvqMUTVLTrAokeV9ktdSye297e33KqMf6XdRxgcpHGq3VNT3uMfypPJdVg",
  "key28": "35PVrFoHb7n5VbXozCyezAKvuERjBKBqewMxK4yBpXxBpPG2tcBdZTW7RpwJo3R2Q1A6azTcEkRGipxo4Y4d1fjG",
  "key29": "4RdKjE9219CzFfnVbfDk2GvUL9ybsTGoq2zsFH9MDd4BfQmqEfngikyzdKB8g21yLcNm71bL96ExdjPjBPMs3BDv",
  "key30": "4kGJ36EH542iqn57uAGpQFd6ne8G64xLdThDnyLs3CM7Q2BK1fjfrmHV6RksmQGn9hpoqX9CmzzLDFdxEn1ZJhB2",
  "key31": "4f2RzYkwtofTvM5Cwy9R1wDxeKxH2aEPvxwGg71oHgntF1aXsrtRxx3qzL5BDLSbdCP2dHUwzVfHsXdRAhc9bJSf",
  "key32": "3HdogDmugdCKxiCQM2mDFks8YqwUoawEKjk5VE1AGL6VxuqsBXrr6H6etYwR7wWKTNoMufpcZr5GNtPBAaq9aL2M",
  "key33": "5jnAcxGqbP4Zq3vkqcSNy5QbovH6zBmQCQ5RT7kP8TZrQq2CgEYnxg4sREZnvREQ2BuiwXFhiMa8cVtoM5DMsLTK",
  "key34": "2gPywFjGMMdnFsXPYj2gRWKCc5egpBXRMYbRdMXJPW4j3kVDLe19pJZLZ5kvXqYwJ8EBHhe58EWajmREeCxT9Gjd",
  "key35": "2Ev3r2uNa2umxxoCxzev5Z8v9qC3ojPFANdTLGrm71igqpwCiyLUdx11tiJF69ryhJhruZrhgMJZdTr3KYqWfigP",
  "key36": "AAPeRUU23e7Qx5j7ZQ1EAA8nLUwqR7xVPFTmxBCX6cXmnpXzVuk4MoRAqzKVuXVvqtUaXCUx9XUeqPSww3kvoDb",
  "key37": "2HyxGX7HGfvfMRkuhRCA8GFbJS6UkuVNNwJuUWQHxyLF7x19YQ6rJeNGmocxMpFhTh5ZpFU1yynDSxJzv2SHVFZX",
  "key38": "4cFkNr7q5yG3uMdN1BYMurLRQc21qSgmazGYNeM3hWiDLk5NE7o1NBYWWa6kH6vf7YY2BTbJkqukqSEfuZ3TKhbG",
  "key39": "3RZb5ZsutKdNLESwxoDjwnfZ3YDijkz8DaZCgmfEfckHx5WXDx8ZoBYL4V9NTTqQZtag3RrGtKFar4hNSBvuvD8i",
  "key40": "2AMxMW7Dsr3grsFCm8RinzfWv5BrS837Aa8d9JiDWJqjqNFU5ett2QGo5z6WbAvo3zHMWeJvnWQHVHr1ds3w35ij",
  "key41": "2W1cWdPVModP1ZbkAPFU8H6nNZSwuK1SmAcd49mW4xkmXCHjgrG4rHVf1DjVBVpUxRdVQ6JSWtJACnSAdUguBit6",
  "key42": "CRH8mpYKkqHnUumjUTqwZgK2LFnix2wAuNLGwEhtojMFPhSRDUrCcKkK4zCcaLtgTi3mn8tyjBG7s8TtBx2b7WM",
  "key43": "LfzCjBZTyuibfLJGYj8K55k4aatRYFJQvnkgZhwX73owjuKgyy97gfdUe9fJ7itgrvYaHHW5Y3e6yMffd13ykz2",
  "key44": "5CR3PLuHRXWSjchUDnre6T6f9p69x99uHbLGpkbFAyjJKMSTrCuHx5BqLFwftxVVq7XtawwHtBTXPX8LtzVizxCN"
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
