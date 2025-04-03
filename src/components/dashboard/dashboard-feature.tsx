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
    "2ex3kZrM59fZezGLsfwfbjtTHvMtKrgDtSbPSu2hHhgJLBvAzoDJ4K7tUsiKmAzzP9HoLHtjBiGWda8ZDwFMPJYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wn1BmYPzG355Ed7BG3VfQKdiW8SfN3XNPyZ7u2DWJfc4XkwHJQxtT95zW7FerePK6uxFrsLtEi6kE8Hf3Shh53y",
  "key1": "5LLmY6VKhmSWA49m5owW2A2QR7Q9tSSG1H4nznNaKzwucLiMCa1uyLJ7YoroJiCy2uKmVsCZLQg9YGYDXg4FCAqU",
  "key2": "42NzchKoRjV3FzxeUxuKmdQSx5PSbFBcGmVM8dnUE8ND3EACBa5RwTYxs8Mz2m71oFZ1VjMAAXASouDiQTWLcWds",
  "key3": "3z6v3jhfgdcjyZweaNV11kJWyPkEABQy9JY17izxrQLe7SgMqx1big4VRQi1d42iiqxcrYkbxgT7z6HmexoZXi19",
  "key4": "58fr8CWhBFL1G672GcWByQp37rrK1wxKWRYt2ZdxCwJzGa1tyohmsNkZYaAR1o3WxBjnqaXsn1G7r2dkmXBXRUTo",
  "key5": "2dagxkxPVLqPx49Loo5DyRkBn9wPjvhVEhZQi3jjNZMPNNV6CMpWHXMEdYdDEKkQnzaXWFYH15g5ZoQrruswbSkv",
  "key6": "4yW26RX2D4XRUWoHouxDRA8Xkqe61oc8nbRxDpTCaexAfudWi5oRFQMLNDAtSZjxLkmL9RTndagLvZYcuM1AHLBV",
  "key7": "65sgqhYQtXAPUp8LgZgW4x7Faf2CPwvpRJGdSvxRycyqkNBtLrzd2fvFdJbYhRP2J7LkjkDgDfibDHMFLRkVNZoT",
  "key8": "3P3TZKc6xToxA4BFRbxY8nwvZAHD7JDFRG3TZZo7mpL2XJfQr2b3kGaqJk8vdFGTwZogxz2QHYodzAq6k8s8PWzN",
  "key9": "XRCrXyurRntXotFQAohiF3qBG3daGxPzapsJLk6zEbqk881xcovtC4557Y8nxEufSgHN3h3UNDNNZt9iH2j6vh6",
  "key10": "5MBB52iokvXGPgiDmMCrmV4WAxzu3u4GppkVWkvgoST1x8wszuthY3nFBEpEpgsmof5Q3xYcPdACHA32KMdkzPUp",
  "key11": "5xXQ96euZNAvbgq62FMC9mdZ5XfPXNRDYuc5663krthzy2uQWXfG4KHyBhWGV8vikXEPGh91w6dmzgrVQg1KS8Jn",
  "key12": "26YBRVVyTkKZXN6jbnETAsqWm6kxzJNC3jzkKj7WPyL6nW8ogHY98acnCjd9niHBzHVynQkohiRq5oRiV1PxPWRZ",
  "key13": "xfvG9kNAdxYHJB1keQW97bWyX4BxjrcZFiYGSjLvSzySon6Ssyowinfca646RGmd3xDif2TDrHzh3zPDnMsZuHf",
  "key14": "3FF8UY8fzWu3fCGQWdXF2h6xrzwutoKXLwaaBHV53MQXwmVyn5NthcopQ51c4nz6JSsaHZm6QXSJ5H8t57NBZhzq",
  "key15": "vt298nvWuHU8BYjzv4nUbqphu4F5Xk4v6fn15z62J7H2WF4np7bYoS7ZrsDoEheJQaSyfM3CVjkv1Wz8RMCLoZQ",
  "key16": "61YDDvefsGDFfywikkt7vHYvTFRU6xWkw9qt8YJAMcpV3XLimqnjUitfrXPFR6Fb28qCSmM1rDwJv7sd5zQ5o3eq",
  "key17": "vLv32nG2A1eGoNDargaEaFiccM4Y9EMcPwadPPzpmzFmmjGZvcto59rGUZeiTyvjLU44Vsb6UWiaVUBNc2rmtGu",
  "key18": "2ZEpHWn5qgJQbLz79Trryo9yecQMHvBQRkwQqESk5t44o56bm1551BCd7hK3Cc6fKinvtmYDi4U46DAeyXZcFHfS",
  "key19": "hA2XjA4CrXfjZskmbXudcqmHW6YGtiV8qsbBoeJAh6BG6UZqa9z7fnUhL7XU8T2vkEaWpG5haCmC7yQKiH9o4tp",
  "key20": "5hjwHjSdpwKyseodNsEYkrLUYKSugA1BVissjYvFGBbzdhYR975kY6ienX8VgycKp9u7Uh9UTjD9t4xqio7AFwrP",
  "key21": "3b1RztpNV91H6UiYYDu8VajwbBoJjpPxy1GaCWZGjdYineqttW4jF683n9a5e2Dk54xvqZ7GwuwqW6FwqXCa7XXc",
  "key22": "65qGhiC7jWQ2roQMKvWqzH84SpB6FxNkTDynSRaT8CDAg521Q4YAXwBpn8xkRTHVd7cgodRH1TngBb5KHiAB9TtT",
  "key23": "4AaAV52RG7NuKNk5sdTuZHfYWbcxLa9x9hHcerXVBw2uHCG3cuubAm6ex6jBopdHNh5kBr38eDjZApoUgvdgTYyj",
  "key24": "7C2okamGsyo5y377orG7u4tFGuhLW7ZVPMaUbn6uVp9wJuP7gNBtSLPTcojJg6b285uhuvEPnVe2z1JaK6nzr9m",
  "key25": "4iZt92SCdW5J6T2TtVntPYUTUGiJyKXJqxxzm426Jw1isGCRyZgrsnoJpty38BbQwQ5DHv6M2xLhPcYJ85tDVN8f",
  "key26": "k3puc7cHzduB5ErV6Kg3w8qs7jADp2S3tv8yFL4r7ChUQyqXHDgyLsRLMgfVrUUyKAGNR4GkzfvHyyBbypcdv9M",
  "key27": "5CjZXDC9xmRju4zdptQcbkJp5BK5RwgokZsWgqosLxyzPb9c37zavErriLPSy9P1GXx4QJYCNojMo4DzDte8fj2c",
  "key28": "3BD1S2zbxi6n77KFSAMQcnDcF4vWu6caXueVtMNQLJnNZywA3G7yFtQr6xKp8qoJ4Lfdj2GqP1UgrG3Kw6bFrUn2",
  "key29": "2sxs9SSg4aYfFCnWktuP5uS7ZjhG2zh8Ryj6i9i8ZV38KNWyoL7LYUPGmM6AJm4jAAoN6bMfCwzVKYWoQTXLyQpr",
  "key30": "LALNL6rCg4hW7g98ycbEJ3ofNKhdAuF5aCCcv5SQfNs7U2RPiaKwTWcKdVMsUyTd3nK5p3RzifjSLt4yeJbTneu",
  "key31": "4fPSig6jkTv6AgDHHXCUPaDCdYKSi6xcYaBiD6AaYVyq7WNhUKGy2Sd9LNDr6J8sQKJs8GyG8cNr8pY7mPkGtkTX",
  "key32": "5PkG8bztLbegkBEwUmNN2evZAxoe1qQ9vDs38wtidQdpencREzKgYEfHRk1ydPfi1nkwx18W7YN2VLdAXXBtmAhs",
  "key33": "4RiFtjCWSwcnk8EcRQyHcQDt4cTRUsDsi7MA4dcfKRvoSH9mNCBmujtEPLz5CD3seDDuLB9HTnq4Fbp4atp9SgpM",
  "key34": "3y1gysMgi4rHrdXLVGMpFRoDzVNcDnwaqyp6heWnP8JzsPDfbCyQsRS3C1UT16ZCpwDoRM8JCB3uBDhiWqEKpawH",
  "key35": "66GRx2dtZJaz9o94mid4YhyR77gZa5XPf5jr3LWVgDcjnb9DN2wGTjKWwNN4s5V8kpmawNasMQE1XBEpuLSVnNux",
  "key36": "3B2RyDySiudGU2aAkWXjHAesw5M1ZcVSiZSiXqaRvLNnzzH5F2HZXv8aSp7aeByrRdMhJ2xdeo3aS3qbyBuyR5ke",
  "key37": "3JpLgYnEvZA7KeVGNTwqJARoU61kbnYGTPZM4mcrPVa9XHtYd1sBiPwkro89MY3hJbyWAeUpqeznFGPtXKDq38tf",
  "key38": "3njeKmtpJJsfKKXSpJ96SNtAcyJknj76EBaJZikXGnxyBKjnMcc3ev28wkJVKRzyYmvtNfUZerRFu4qZnXSjJLh6",
  "key39": "48cRzKsmZngpZHvvmFEV2jYRAekvTABxnPCYLVzyxKcy4yG14Qy7fiTkPnerGq5GytsgdB5dceSmpgH4gaQyiAQM",
  "key40": "46sw9qmHedvxmGbB4PULgPGr1BFyJhRhsqdmm4i7K3HyQ9iyae2hMdKiHMBujk25mJCqgxFaeysrcjAvZG6QJvfo",
  "key41": "311KCjT1utdidkAH9S7poaRoeRMJuL2eVuZFpm4wFYoY9X65uH4TRByCWQRwBeEj2Erj9icBqZjtZK7hBDvRyPue",
  "key42": "3Ara6RnECMrYJspXJvWxNe7Zg24odH9ASpUgVFDiqHd2ehKLWqjxdTaJoeZ7qNdtxcNoJRP6EgMv4863KvuBxY9V",
  "key43": "26h3a5BqVeDZCvzZcdwyoameBqA4wbX24DvqefymT2aqD9fRMVV1Bg8HyvKWboPBn3nvcRRoGxTA4SMGiRKRbu11",
  "key44": "3QbooCBc43m2Kqu2aGJYxsiA9wHo9hZae2ggJxPJv5ZXqL6Ja8QtoB6TPR7PRHA25mZox4KBUV8CehKmqYHCmME",
  "key45": "4f9R4c6z2hTkjLVNff2vgHERjk2YbXArkCb3j4tUsrg5FUL7Sg58hGHGi4raw6b5RxXu2khPCEuzToUWZjGHYq2H",
  "key46": "559EcnzSabkUJ5oz5k5kn1fiAjcACWpJMghfg3CvvpiR8qz4mcX36YqtK7vSGQPH4vd4sdhFjD8r98Vxe9SNB6kH"
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
