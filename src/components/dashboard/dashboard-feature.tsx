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
    "2oJLmUSRoDoA8RMdePyguECvx1cTCv27jKP7r8WAHG7foPczdwEPfUrR6L9NMa2iAbqkAahHqboUrMcNL6sYQZnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYdvWTTE1RmUTQBMh48Ct2E22d5xwiyqzRBLJBhQgGJ79PXb5jxP3Lg6ipx4xph2U7essPVGBwfQuky9RLKoENK",
  "key1": "5tFXoo2mikrwR4PKrmZafoEuxUzx6qnxkKTwautnsFcfhB42Y8xce1UgrXnAPboT4ko6VczVJhfifrzaa6TfCQB7",
  "key2": "2Gs4ZbPRiYFjg2vXmYD896JzNj7fBKTUu7GpiTWodGgznJMyp2sARvpAeHbjBmYwsLSiZbfFbb866sbuKaQJtkMU",
  "key3": "3Q3QqfL2KcCGTGchQEi4VPspLo8HJH7Jyw1w2jjJeugYFzZNhe4wqwcmkfC9iL8AYeNNnKsKf9Cd4D2Gqb13p5sE",
  "key4": "47EsHqe8v7j2sjQwyKJ1UiWMrKLamhWcmQTc7URo9nshjZqdvnLUDp6tCWQRDAnUMJocv6cngv4HJtnHTkTLpRdv",
  "key5": "5yGigRzWSJYdrWrW3X2mKJ6qZAn9K9xyaU1GWGmsJe9kHjq4xmVKuKbkf5sPmekqfDk5gxpLLD6Uciguf2oMfgC5",
  "key6": "26UNkEjEha6WoioDzWsZVj2GukjZRq6cauv7rxPmpLnwzN4tQME5x3oAuHzGNtgV8xC5p2asZmLRqYQmsWkQSWi6",
  "key7": "2FCqmxBnSGreALQbLFGxiJB9vtuvDmb49scawKgg5UqsiY9JLKGzYtcKpUt3r1un4AEXfGZvRCato3M3JcGt2jwB",
  "key8": "tpNNGyq7F5pniBrRYzdjbv6AkFdgYzzKhQ4ABTRQLf83uk4yiQ9SXwfv2wjEeaB7g9cxu5UmZ67eUEPXcuTEVUs",
  "key9": "3ZNkA6BmpYkpxChuQaQRngJcckJRJp9L6K4cSwSeBjx5v311zxTFYci4P18XySniPRHfTbSVjJbkAgd1Ut8YYZq2",
  "key10": "5Jm6fW8uKbWkBYhHvqd5ANfaYERiZdZ6zBEmeLYBkeuiuDWesSoQHv3U1MCdz1v5oGxLpb6wL3JNcNWi8EegLiV4",
  "key11": "5PBPMp6DeNq2CJReYmacvhPsD8Jibu2gE5WEhMcXKLJbawnqXrggqWBpq1WEmHmH4ZRS8bRVNm3xFa16hUNFpnYB",
  "key12": "5xyg6qBC54uKTTT9ykqbkzhf55W3yvSs9NvrxCshRqGxpVK1SVKq7Dxr55oEFmx5aYVhGFU5mDu5xUu51j1SLyRc",
  "key13": "61wYq8RGr6tsLTiui6j4XC3gReckDCSvtEVC27wuntTR9QPRtCxBnSEmiTHi79uigbvKVQdoJAaEqUprke4DDz1n",
  "key14": "5Q7s55RZSQKzVokT9VrnMap1HhkZqNWCefpYkbh1CFtr3TKrWs2uA1QKWSG9aaMv1U94q5WrukeM8ovyEKw98ViQ",
  "key15": "3WnUEUA2bb3uRkMJBhcjLMX9t5CVvvWsh9G74YiswwA9vD6NXDzAmFZnjcXMS7wvANxu8gwux7tCGg1woX6SYBCW",
  "key16": "rEa3kLDzSfySvp1qEJUddeMbWcwknD6X8VQg2fv2GCs5BkRNKqLJ6vQZk9Qw7GeQSWdXojiwDG1f5KGKSzvG5Mh",
  "key17": "ejjaoMmCfmzSHhFmzsPuRvkCwq9GrEu9yigEpCwW1j2z6TDagjFfMCCpFcHMbZKgRDahZtqJRCek96ykVd2YfxL",
  "key18": "3qmC1jC8cvvmzR6RK7bsPGAfjRTQwo6Thh57gheZtFMgR2yM2hWKVe3WjRK373x5P13KUsGZ7CS5AivAr3htJf1F",
  "key19": "3gToG7dkYGbNG4QwesJcFSZcX5CDfkm6aUT8aeDmdjN9Quo81hdEhQprtLN1RYzfJxZS5QomiDx7iQBfE4J7hJSy",
  "key20": "3u9ZSWqwZnJWA44Fj1m8VpHTeVcnySSh3N7ptHEZBscLREtvTTs2EmAk5qyJQkbfp9fy6kJv7a5yQBx2T2gDSZzc",
  "key21": "5mNffeYmqR6i5FSdAGtctp5hiZUaMYDr45aHmfUyTBbwr6hQRLmqPbuq7qMKNpbu3eN2hM6s2JeFp6gJNakjMKjr",
  "key22": "5ghmnFi3Tku9UmsJB9KhLHuXKyxrfLffQjMBs9vGCLvWjWJx1sFG3HMayKPrjg8rffLmapwfcWCgNVpXy7B9w16P",
  "key23": "5HMtSGb9CrQxip6MwNcwZ7uF8cNswMarXr1qeKs2Fg23BpYUPwHKmb8VTjVtGJZusRQGsSM2eao1nSgCd21mDYbi",
  "key24": "h6y9nYWKXWTDvjRAsfSS3CVUqx99kdtRarn8ZEsqdcbnAHByma9LVt29sQHGMHUT8BCDCe4rSNT55RT9ikHCJt9",
  "key25": "66F8skorELbiHKvpqQXw3Jziu5eZLxNKwdtksTK2vu4GrjqQN19MATvWYTbY3qnLzDxXrN8DTVu834p9dnthHSk4",
  "key26": "3F22sFZJDvkcSGeHE7w7vSh2842CQUewnaT8SyEKPMXt9EtkRd3b76UFckVr198smXhEdQTYRriPpXZN4MGfbU65",
  "key27": "2Br8UcYiYot73LvseutqAReZaeraw5azFj5hQw7CgdbQ59aHL86rTTDNRRBJGxtTq8SHJWhhpDybDgW6ce1KqZVP",
  "key28": "49NxvAFnm1SwsBdqEo5sv2EwawacsU5AM7BA9b5noMB1thPRn5EuCceRaoEAVS4qzVLjVjc7a5kHYw2pzufXVyEN",
  "key29": "t3tQgFcPXtLNUEnc1CXF8Hbg58UEiTNq2QUxikZA2nHNoGXeHmY8oF8sge12nPeyd5jqiFmQHubvh153soTt9FF",
  "key30": "48a2niBtaq1QvrxBb7axsKKZHtsU2PTPi7tWv9NnzsrQY33ngYQFyZPmuz4vsdSBhGgemHnJBhBb8M9kSeLB9FDW",
  "key31": "5jeKJWMAvfCXwyP3SZDbtcXpTn23ysf4KoxR3ZeQ4aSZhADP5A5XmZxT6k8DrkXYH5nwbQ7D67DnpbaJ6kqhbGkh"
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
