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
    "57VozbWmMzAA6LbkwoSzXQX3QtpyBKvu86J1JQRQmTtx3tRL8Wrd7GA5KzjYmXeafWd6CPwt6ZaMTPwteRbTz374"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgw1DswFD23FzMpsihtjYWM8hM2Sv5VUZJw6L65c71rk77QMMBo1a5mHSZxRqKz6JnqAcgA5hJf3tk9MPVezY69",
  "key1": "5wNb7fELHtraK5TPXxMAosKW83RHn7B36KqsUxztj1KWEeKZq1yiE6ChRQGPjqVTZcLqYWT7Vc9gFRDdvpLTJPoC",
  "key2": "61J3hoUUxZQ2KXANUhk28sWpk2wn1PaX48jiX7PAaRzhj7zyNY8UCwLEWfBmxfFw7rwUwDScTQEKbrx8PLpdXEEQ",
  "key3": "3PSyfYwZpzu4bqHu8BxUVaRtZ7JbuzgrkbSVzoWMAJRFmw9MJnrYX2Gz6FA14rLY2tAccPdFTkJKoGEYBD1w2fz1",
  "key4": "5YfSCv4Q8SHD9z5YDA4qDvAKWxaBE3Yas39upMkutZvo8TuqMZykqDxHY1uDaqF1ZVH6iF51AkEgxqvwPgZ5jnt3",
  "key5": "5LDbzKz9tvWfSNCirMzm1uLnVFm8zTsQsC4FPpnjfxcaStEv2HPNfcLUXard7cyDcb8AkL7MwCR5zotRcdZ88bb4",
  "key6": "UD5oo1f6qJbWFH4RJVJSD6149PYJwaSjTcNRVsC5B4MKEjwCe3CFfeSgQ1G8fkYZbxPBc9cxU5FAyXm4r3bR8eE",
  "key7": "65rzXoD6LfMXXbXV2nB83UehYTr8qMAguEHpagYpciLfGAqQUkaNU8NAZDX9bh3kvyazuQbDP5dPYB6X7JHVvF5N",
  "key8": "4r9hvgYrgsbLe9Q7A9KXbzKDQCFZ8SLynaQJYcDBpqUH2URNEdLwzRe6hPbD5hPZ1tEmTV4HGwJC825viZQu5t81",
  "key9": "3JPmiERi6i3p1dg36PUxtjeUcqeocY4vXg1MbD2NWW96RhhD7Em3KwuCEMCcZHvsGy64unKsM5Sd5QdwZ1r3U2NU",
  "key10": "531ZdnjHjRBgEhqsiS8LBGzEEAYAmji2SddggXtLGcVcHGhLsHqAFwMFsWfPui9jDh9LMsdBypKZZ4tKAtQ3ZsWY",
  "key11": "2wgLnMnRrejx8zqZsEnNgUyLvetDoi3K2G1mZjtZ6iQ82KfKz8bP2ZcX5JwTUirRptUPeRnUhinfzCp9cNHaxdAX",
  "key12": "2S1RCZ8XGu3i3wnf8Rb5aKtkFVTWTsM6WrZxeSw5P7zZNFkWTK9nf182ugdB4NDsu98o4btK3WV8FKsif9fCpncV",
  "key13": "4oGgYpHGchQaMWrDSpBTUCzqFoSv5JoeUdShw3JNYjX8XBHAJYwMA1eC58qAW94ja4dqG9pX1S8vrf1h4LXjqffR",
  "key14": "3LWX9k1XRnNhA4WnEkTK4dEvcSQ9kJwhkMRzhpVzufSoo3iR8jXkN6uZzB3LuUYG1yEur9kJEhQZDhveRDz8RxVA",
  "key15": "2QCucbvjpvp54x8cHDvDZ53XKe6EAWuR4LVjha6KN2PeMH9bd1PViE5L8QSzuhF9AN3ECnecKWsZFF4mqYZRW1VG",
  "key16": "4ZDNCD6mP3oV3hXyrFNL49j9aKR6z7dxj3i733KtKcV5BocShBXhSqWG9Snv5SoXcPnyRzyd7343PxtBWebXL17U",
  "key17": "4krpyWQCPp6eFgcN7wgg8M4qFezkM56LukaFfWP6onw7zPRmHp5sKmVsNngM2aXVb6V6i4pkpTwW1u6TXyp4jHr7",
  "key18": "3PMe6s9JCU13RAKy5WJ7tHdo9SSMscSLVUhwNJHt5DgMwUv2XEuSr3km6fAqXeqWRgnSAmaFBzhkPJP6DD1EBPwm",
  "key19": "4VgfJSjrN56rxj9TprgRvs99NNVJrHg8eNdbQBX1Un7o3d692ojaHMRojwPzHbpFnPsESaFJsiadU7rC2WSAQUPn",
  "key20": "SQtwBdvxba8s9d6CBQfLBCi9ybJXK2ZLVfdjDgp1rJbiMbuhPVtTSTo69oZ3zEKiHqfzLuFNowaPC3ZqGzAWy18",
  "key21": "4bboK67ss7k2oRUAxcsjB2hEvQuwNxkgbZsDUEnDhA8nRZGhcL6vhvthWQMPN9prq64rJcFDrF5v5T9L8zjatGxn",
  "key22": "4aBvaxGMM9BuvHLCYCDstzr3HdksirxjyTjCerteA5TfgZPq2UN1cvBskjes7aZZjZgbawR97ETteG7TGx3wusVc",
  "key23": "kpf88GfmtQQTCHzg1zcwL9DbmT9mJvetF42pdJzqY6GTnGmyJ1ayxLKJB3jWFZwyxFYSdGqWocd3dC7VHqcNPKf",
  "key24": "2hj1aR79mYYJCciUh9u4nFuPWBVVp3VTyvyV18KYW3VBC5V39qgU9dKL6WdzEWhbJHbYtpsjiZK22dfY9eDbaD6J",
  "key25": "4K5Lt9FD6dPCwntan6FA8bejiPDne6V2gp1S2ivTTbQqx2kRTj5X3xyeFwqyA9L2HDT6SfEyoL1zheAFEvZsBXFu",
  "key26": "zQXGjqEqpGVn6anghjWKYmYTtZHqVmdzVphSKYPzotimELcKsBoT7vv8EZnG3311UbUAuSiHKEWrbURb8bZ7H8m",
  "key27": "4S6eebNjN2dehWuc2V3e4zCittYhnnuZPSLrsfNHt71GX6pUnWq7Er13mT7e42Tr58LUco3C1iqXj7RViUHYFSyh",
  "key28": "64kXnuZg74GhiX4Pepuh4Yg7gd6P6sd4pYxdVxhJbmShTKNVbL4TKZGguXHKrsmkQuJZMkuEFuhoG8MGXkQZLPPV",
  "key29": "5b6WRc5gmQjMWt8jFbXrVHasQhw95cgQQmBk86UzTYMQcmLhAjFVkXaENst5yyhQLuJtijovQc412by4LmUV7QoN",
  "key30": "4Dw18k9sFis8TmyMK5HyFiq6LNKgT1cGYnbXv6QYQ6EXjkAp5YUawUsXoAKqCZWYEw5QaQoyr2vHtvwJuVGMUjy1",
  "key31": "5mx6441xc8BaCZFaDV2X3bmUgKvCwASx6tGhDxZ8tCUDPDEs4fbuo8ePcpY3umtLKbVmUqHz7ZSMZbGCJ9rMa4J1",
  "key32": "4Dt53sbEbMFdyWkss2rotQursWnhhGyvHeCctPgaXidzMGRjorP7vE8i8sV5T6YWYXGvw33QJW4GjchNrcMXuEbT",
  "key33": "4cU2Hnu21yxvp26qzD1CmGRtmBK5wpTbNL2PDjSBdcGL8AiHFkqZAEmV5XW72sJjsUwX1hDipn26BNwtbmDxJSm",
  "key34": "2uzFSS79EkJ68szB16ToBu6YeJjcUTZxWqUyNAp9P6uLaQj1EDrpZ4h2Jyp9VfwQFA439rD8vNptXWpw7pvs4SeF",
  "key35": "22RwciX56KSQCgqmwaH2nYoGhjDK6AUWYDSHVXnFJXvk7mhAbUvRFXKL78iNt7to1sHfdVL3o3b2amVLu8NXYR3h",
  "key36": "32du7YuZ481LA3Ejb7atSCjzqNFK56vaZDd6ieHG4yLhxnf2NGcnYVQEiR1yhYvK7PjNFC4hRDnAAf82yQNkvyrx",
  "key37": "2RXGXddgAjSad2nE1TXX6yn7pHfudkiBgtsQYV1CRwYfJZ9YVSWnbEhJe6FoffZQAgH71HYS4XciJR8YjEG9p16y",
  "key38": "oJoErSDVfFqqCp8n7VBE3tFeAfuWU6HnVKst4o1ftyW9Z7zdG8dkC6cYX9inigG1zbizXKSj13VHk8nkhPxjBSn",
  "key39": "2SmNn4YvvYrDhpeUosJP4VHtxsxGkL2xbe6tA52XDjTt22MNNjRdKY7KHSu1KwdGi3Bjb1BPZzyQwMLMus1Xm7mu",
  "key40": "5TKTnp7XWSvCbVYutK6b48KYKBo5RPcizdknrptNSRGyobSym8BTZD63YW3RrdLgs4rZyiXWgwgub94Qi1e16Hd5",
  "key41": "5BA5yJ9TC2RxKqPo5coTY6w2rDkHcAFd8M2mfrJovJkKkR3bfH8ky2K9pUKffJcQwvGM6MMZMRy9BG9bbfm4LYmR",
  "key42": "vSU4TqFQeiKoatiDpMKedgTu27tdST1ppKkxtaqZ9m6KJzsPyfckL94k63F2m7Ku4cYsGG2BoNTbyuWGNr14C2r",
  "key43": "5zqqnNxHjiJujjn25QVxjTZzTnkUx9kkR2awm9v6C3wJJXgTxAyc5ZC4p9vGYcumnsAyvbxvYsw8iRzeuhdQEbtk",
  "key44": "4UiK1jQJamfBKUcRiM7uz4adiUAimheDfwTcNEtJ3QYV6z9nKnK1k8aS5FZQHENSqptfRfQprkhD6UoASvTsrQtd"
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
