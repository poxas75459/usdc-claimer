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
    "5TCw5Ma8tYNjfwNdxKCdKfeA1aCCkxgbX8mvxPacppRviQwirX4eim52EsAbtyKY4vs9z8mudomkHnWk4Lm4989r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEVb5anMpz1Hfwr49XHvSbUf6DPkQsFcTCVLY4YGPMK5eTLCy2jZPgshuR7nPWVifrZN3FsPg4r7xS57C3ymqGJ",
  "key1": "5a3VXs66ZPY4VNvRT41WABkomWu7Vyt7jcn4xAbNC87911ZNJdMuqTMsnh8MgSDT7mVg2PZULEAr7VJ9W65j9oKq",
  "key2": "3snGJWQQG3rAfQLvTVDnaXycpgRs97wbfkmm84eWP6hFGHJ6ahaVpdmcpcchz7fiU3cnfHArhTQUZGgYFkY546GN",
  "key3": "2cwMHToYNN767VgtRbGPHkX4fWstgRj8qLAh3pFUJWk78AcJw7v6FwPNbFYwuTPuh7aPY2NE5SVz7Vnah6PUAu15",
  "key4": "n6J3wZSW7QhMrmYqLgumJyakKUVA92W3pN2DpgE9Lk3Mk2wdaJevZN9Kiyv1io6sgJYQXLZ1hXgSaHZtrC8L1ZA",
  "key5": "4x4zLtN1m557afyhBtaMHZ7eBfuGmRgcQhBGcz9kk4Bj6paJEVoew3FnhFPrQxnNdJgdWUkiuWyeJjTkxHdfXh3B",
  "key6": "2jBxWB4G8367idJ5nhxzucq7yMwSDKDyQ3TwGrg6KDkysFv3fE8HRmBiPXfwwEYGXiiRTi39EAbfvEXtBUy2M14v",
  "key7": "4STfwkrHzLvqageG4yM2funWPiyd1uNhe1TbEEyPK6eQzXG72sR4Zo5bXjpYr7HQY1xBXqBi1EsAXK42AZNe7dbe",
  "key8": "3pKCC8yhKWW4fVKrEWb99m8yDocWr4jcCrtScK7F7a3q7QR9Ut6yauyUcDy152F8u1wNvPUDpYby2kmFaKB3Rf3C",
  "key9": "61inEJGANyk56F4MkdmxXSPwAdTQRTPcTtdDWNM83dxhyZ5MgbpV7bEArNgPM5jbNCCLwsVNTz8XDhQreV8L4hA7",
  "key10": "36jq6w7WqiQCHmrr2vSnYWUsjFj2fw1E11NTGEBNg2fbtS9fTMKMmty9HxK6d6BYC77hhVg5LBS7H5XKCLBSrR3a",
  "key11": "55yDxhWQrjBbq73YjHtBGS96tAx4vsvgZzDHXDpdYKwNYz1YGGo4cGqo2Ba7MuiAGekq7FjT1E8HiFUS4QusR98N",
  "key12": "2bu9EGU2NzNTX77TwpeV51ucXGzQHZfQ1yqxthCMi8ddaGhYFuo7nVVvE9rkAtPpNo929VeqZgNfKrsLsBsBqUve",
  "key13": "NKk5MwV8LJ6tH7N1RnwsHjdrYt4LMH4r1r8RJ9E4b7edXqFvUeysxaRj9KC25UST4yytgcCiARu2kwak4HBHd83",
  "key14": "2RdaeC87mFgGZJCGcpSvs2z1iCikwXfZTxXvfT3qby5v6pNffQNQejEyoCkPPFZucu5iUrjyKhQ9dwwkWssBRPT1",
  "key15": "5WVmigGHnThRwr61MdVHLNtQDnSgyTxrkMEwwSe3grTBZmEDmqnHK8ed8iZyonvbvh1t7ryU8dXqVNXRYTrZLKM6",
  "key16": "5jMm2HkXQwsC1wynu4ciJtmhuyHa36GVrkdhmc1U62YnWUrD6gQafGgyUDuMiEBuYow4pEvGZ4G6HREAKytnMy4C",
  "key17": "2SNFAmFdb1wp84k6jqv8nRy9AXcCxDSPKV3mR5tnbCj6EjugWmzfQTH2qvnBijTLREDajwEREo5tVsLc5kYW9hGK",
  "key18": "5coLq81TXmoHsEca8r3NgcwEMG8YwAWN2VPxrVcC6GgxHEzm7ak1bycXyDXvSBt6GZ2QKLqQtAWbnvkNgjaJYYuF",
  "key19": "25o2tyUZzij2Yfhqg8yZZchnTEFPXZxWGNqxptYYdCr5iK6HBvHxpZbYVEmRFQALmFTcUhYksFX535fn8Ri5XcCm",
  "key20": "3yYoGbGs29erW3y5dRoU2R17NfeEPfuidhHZQERxeKz99th6ZV216mKVJi7EtLivLY6AuKerZtHtYAYwUEHRidqS",
  "key21": "3ytzHnM9waEh5PhBRw4L2CV8pGmB9CTEDtTCTEzM3AiCVgR5BA4PaRP8wPS6GQ7yjt61Q2KeiXhN1RYS3Ncs76Xj",
  "key22": "2voK1eYn6WujxG9tgQ3wokeXLwJ1Hp75M8DPKFTw2QCJoKhaiwroeK5DKNd4Sd8p7WwXuAYUr7BJR15bpuq7gEeE",
  "key23": "jMNWMaNUkUmvQFPWZE4gVHiDK2CdYrTbksfqHThEKRzDzqeSsS9XUHLsmVaSftpt6YdhwBxHoKMmZXnDK2T3ZqZ",
  "key24": "499hCRWPhv8nEu2Qq2DJfnyQnNJFS6YQoeT1RKoZNhg21G7BA1zNujcufpsrjazK9ZiuQKScRCzC4QTALYVDgJJ1",
  "key25": "ohMebjWDAiiQnrvoZ1AJfpc6d6zPsBMjLGrAk8cN5mNjUDsXJGZAWhogxKtgQjYEW4FK1rqMpKBn5rBw4msXPyk",
  "key26": "4UTfEsft4uj2aQ6UsksbqT4mxdnpmUoXQoiUw83NbGUFmNtgknRSFg6gChCWfRAMDEwpWNM6Wi5FiuBTDzJJtzQs",
  "key27": "4ZGKJ6EK5terGywN1XV7UtbPG6eFRmUSKoSAs9h4MuncNqT3v7iCoJzAhan1YDSQJeHzANhi1qipSGV6pZNudHAM",
  "key28": "rKV37x9d864uVJFuxNAWSmPdwYujuW8qJUAEheGHoQkY2pLszjhKx8DEJrqGJoZf4YXRBcoH7qqLLQ1Vux4djS4",
  "key29": "54V3jCPjm24hH9FNmKmyXZJyBxhaVknyuWN8fn7f7r6FoghNhxy6oHo4EhebUEr2sEhdYkZVaz8akgBtWKMnw4Te",
  "key30": "2K9XFXXXmsZeVRupptF76YGmjFdxGnjF8K4FMQXxq2QwoBvdfgTcpnS5e5UM57L7isWvVkoTFAsCfPB2ofar4iwK",
  "key31": "2tcDgt19x4Ccpz1PnYjBGTiEJsAgYceHYBFKaqNQqzJc2H3QX1uB3ZybiEHt9kFEtMSYcYvVRZsucyL6Tx2GFabD",
  "key32": "WFxZQqDrFsRpBAqwZJo9j6MAsSfJVB3qw6txv4p4yLdcvm9VzzWaLVPnQLMdy9LAg8x4EjC8Luh2cyUqsdi7RdU",
  "key33": "5c4Fc4cwq2WsaB4ZVF8bjbQmxqGNficy8Tj6zCMMox8mcikdUxM5oiNp3cJqRgo3t6jrHuAmqWErmBzVpxakV8vJ",
  "key34": "5tWniMShWPwvZnuAJMpeegA589GanyAQXTDSfFFbaekmfMuBbTCN51Dx6ZvymMpVbpFLAVhzwkj85cD6W9ijo8FN",
  "key35": "3WxCTPo9ZKTaNszRh7A4pM9JeMr19CaYUcCUUFZWuKUv7qhjra7xsqiTxBRzHhYr1Vg3C7jPBBgPSgKvX5ZBvF2j",
  "key36": "HNYJo5Xyw6X5tzQ3waE16eThykhbEmguN2YZB6iCnZc1gcnLe2Tb2JC2GhiA3hErBRPqgMBzJxF8wEKJELQSghe",
  "key37": "2wPheTAUtxknwHSWHyY5iX86dnj7tQRi4BGL2rQ8ecx74EFSX9uXq2EyYza1xZK7fNNF2QuarQPRXYzH3e5PRFcU",
  "key38": "4CiDWK8EgV2vLn6oMM8sTX3DEDAfpxaxpFd5rgqKphCCmjMgaekhHbTyFW8KCErEKMWikn5BHZQmMc2krpiXUsTb"
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
