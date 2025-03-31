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
    "35fJmDE8SJeTzgfwydBAPUG5BeW47uZ96v9LjtNqLdvFYAiAR4xf1UKAgA4keTdrrpqWsBdJq4tzzHSLtKaed77y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UuNZw1EjZ2hTwoZh1CaU1nXwPpeqMufzAfX8DCUsg2MA1KVZCZGjjWhMGsEWuQ3CgSHkKXefzdEiWRXNzxYFucb",
  "key1": "2ojrc82EmE7FxNM6dUUarr5tWLRG9BTycdMUizZLzXwMfX9HeffCuFypajsRfhSNwSFDs5HcuQRzSARwQxxUSeAi",
  "key2": "2efoXXdojj7SQsmaZPTH8G3hpq9xnGXGAAGRseVABV9Tbq8n1W7iCUQgHBx51ggsjuPDm4pHUtMNqvJV43EZfMVc",
  "key3": "Y5MTgiTnENECi3SPEBqGa9fTdZ4TuJLCjFLCtLT5zWxgXgreESrvQhRqcsS2RszmToyrCmyKUhX87Bp93oeCjC8",
  "key4": "21yr2jdoa1VJAmpnPqJwxgcQjJy7a4xZ1WvQ9kSH28SJtEpVLXkAMLMH7eLavqu9up2m7B4u6TsMf9NVLgmXdANy",
  "key5": "5vVfr9gRtXUyxWi3pvrNQct8nb1eywCNEAGJwLvU6pNC5idP9PQj99RxJv43NgV2MtmMTPKMCTmUqVNVBVC1kQZ5",
  "key6": "5stNo2ZTyNHs2JSvA3jFvZjUH5DgTDzVQX81zaUsWrzqnoQNhkapCWBQXzpWsGa2XGjv41T5Xnr7QVRGSsUfVewa",
  "key7": "4XChV12cuzDugswxbwGe33ZZxun5qk2t8JRrLRQNDoxkP51Aran95rWyRiKibNfx6jniDWc57WguSNF4omWAUH1g",
  "key8": "1Ktzifi2LgxWJRvagd13s8gBw1tuYZTeYCAXQEh8JUAUW9Y9Y7sCEXe2W96bnupYwd44NyvkyzFhVePy9FYQC3V",
  "key9": "2xTTQqsKPvHShAUVRkWDsvGv8J3nKTJFzMKzfdT99QSSLMQAHLHdiAWHGUEzF9NMPqN5ANhPNVPfyZqQEtjLoXgY",
  "key10": "2CcDpoTUUF7qwH5tbPMJkzN7fWCACrXw9oje67NSk5Zt3sRuKPrrDeTGGRry6L1Q3qELyVmAwbfBBpd8jeqEnqiR",
  "key11": "4PQG1RXQMRD3JXea1EBzhxsZx576hYUz9ooHD96fvdqusypd78pVTrrnLZ5AuU9rkD8yrqwy3KsMG2QDDrSDoUhB",
  "key12": "4snPpWdteKHmPkuLEYKQuJM9MNksog4J5SRQYMmTVPgALiV3Rqbxxk8XMgd1MRWPXPgqMR2PTjDNQx2q5RMUB4B4",
  "key13": "5Z9ZdYgp7kqPP9CZxB1RkZzkUuJK42XKn1Ex6HbsdQ3TXw6RLpY4FgcuZdJaE5MRiqbt8QYxMMuaWz1HEM8FK1uB",
  "key14": "oy5LgPCkqd2b3gPSyAtVAXLbVWPnxjQgniFHd6d3HJiHWTCpi8YzxiVRsF27ePaWF3VTcHZDDXRx9nw8zc15NaZ",
  "key15": "3K4Z172gDvpC9NTnK4rpVhq1JebrXxMaxy2KUDduXTjQggZZjKPLQPsc6dxhjy5vctwukw9rksRCdhBuxZ5YgETh",
  "key16": "32BteGvqdq9aWYLxyYSYa1X87jAKi5myXrFKjTGmjEqSHqhPB8UDKXQTCrtaembr7kFo9A68apLP6kQrsSSoTEni",
  "key17": "2W6XfiyFMp1tF13NrHCYgs1NT1bvTYR5P8qfCa4BFiiZohWjaqAb2jfR4mvGSxexUK5WftrqxoN5159Dsmri1hev",
  "key18": "66Jkpv3AcDu1x4vE3DYzmNCF3V6rxEdzEY56DFqCz4rSGUbCgRNCPmNCQw7tYtN3HQqJzoCTdtjwpzj25QqgwFmf",
  "key19": "5hm6GT2yN3s93A8H8oMBDQA7rhQLzJ35iZ6RBsvEdocRBSGDEcWxixV3c4nj9UZSbfEHyBKVz2rNxx3jiJWznQx",
  "key20": "647K5sKAYHHSz49bHAb1ai9yQmtaaKzYR897VgKRYAnPLR1aG8VEnSyh4LGLBqXLTZnbrwq3B64enpa1CBNHZRvy",
  "key21": "3xkcEonEiZS8NVahPrZfj4hL1WeMYixHRpSoKdXcpKe22t1NMYMcoY69cbLjq75jLoSrVYep5zdRzkGLzjYaqwPp",
  "key22": "4CDshVTF1o718qAQkvJimLc96UwwQp4DVWdb8vcC5B5pVpH2KEEvwwbeqhzxRshwpNZSruQnGMg1jGQsGdoNP7bg",
  "key23": "2HYSoKYewdkRLjXyeyhyZAG4J9TFpYS3dtsypsJckcD9asRacEDafCuGGak5fQrhvmiY2p9x3Da1pQQUr7sT16J6",
  "key24": "4tvfsgRDuDfFwqG5MRML9UZCtb25BUTbiKtc8kFea8CbkqWd4LNvms81nxbVRvrsRsecvWDzEjezqvR4DS4nbdpE",
  "key25": "45FJ1qnu9F7nrJaj9cKpSnbKQXjmBpSc22v3VzNoyvZz2wUSddRDezwiHfDG4CZBXS2WYSZxf3P5kCQ7DvNzmS9D",
  "key26": "4fN5LNXJmfYmAke8SXi9njz5tB3DoyRPgYQo4CaZdwhP9X6w3hysiHrCEDhbHeEsyjzMv9CqNVE75yNLUvqRPjSJ",
  "key27": "so5XrwSNp871VoWJSgYf3z12kWNDSXbcSe68uDYLqiuiDg4mHft42yfqJpv7q6sV8yXznNLExTHmZf466SVcfCB",
  "key28": "3BUgASVcXH57AtTpsJaGL5WJL9J8qK78eL7i5ckRpGDJX7Un7jJZAaFyxnJRnzXVGaZuVAjLQPbfP7j1kKHZeMXh",
  "key29": "2UUR3rWhECGutNJRbw7Do5hqztiXM8XCjAxZcfopi6LpyPghKDnAhjTqSJ74SNdU3jfUWjtUcSx6FWLz8bpmohev",
  "key30": "2ajKPCmP3MNyqAvkaqtwucsb9GQvQ4KXGa1K4XFVmcMQGKt5w38FUwzQ69n2x3L3rYfCg2KbRtBnpV7n1qDpCBjH",
  "key31": "65jmdNqmTBM23B4Rqz6U6GWQLi39BCPpRUnRpDvqq3o3Cgxk8yXR3RsY4tb8VnLuiTMyRqekLdTb4MTGwBxarHh5",
  "key32": "4mU3t5zqVYLaaUMo9ujDAq5XC9vNGDzxpshJHfQCKhJJQdEaczPsJD8T8yeYs1yTUdxH5bzJbhqq7vSbg3FacQKF",
  "key33": "2iUamHPUVr7Dp5V8QXf87RSXmVPvFghd2pstjkdgjUXT4XrczzX6hD69UsYcdSNcE1shxZzeNL1rZ3x4eRCsePaf",
  "key34": "27TJgTEVodFu4VM1ZkRfbE7frDcTdovLLqaaDSQ896nXPFjpLrxjDJH1ZDMjAT9VQxcW3ZidUqZstCaT59UkrQDB",
  "key35": "29fnmkpXRac7eGXd9Exff9mh8xHBWzWCyTZJznUe7pHWrnPnz8WfyrgNd6a6Xr5HTpvo9oVUjNSvbfFYbGBgcrTh",
  "key36": "3XeSoAmfcyb7vMKurNwQcxd1AFAozYHmyfJyaL6tpcfJUEKx1w8g7jkWuyBMMZPjvv72nRzoceoxox4S8CnksXjH",
  "key37": "67UyMngRZGqtKWQTob2TpoKQbpfvEvXV3LuyfeUy7pBqyQrVfBFve25hSBQfQ49smau9WofnxS6KauYS2EcRne8C"
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
