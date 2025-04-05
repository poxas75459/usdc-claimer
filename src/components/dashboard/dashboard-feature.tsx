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
    "55wHx81ibzsFXRAkvZ7YtCxhUgc1ujFJFqodX12SLGgJYyLGHQURv3LkfoqXD4myCEaLjHy24rVJAqS5i2L1L4ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F3U6inzgam8Equr2TH74rqZeUDQUcBeUjkins24FFSBwwaK6QVyRbVn66t1pxqyLJGvYEz3WWkLBDgPanAcFpBs",
  "key1": "ayfCWmRrAGMLwFHjMpZhXw9CCMfnpDwSHRrzx1bN6b3zQLtSc6w8cjLXRFK34Kpqnnv73Cw1JHGG8DCWsBpfWXy",
  "key2": "2AXzskawXrb7wGxaisga914prM6VM5Q3U87bJfNWWcwz89g4GtcwHNbNJoHCvnvrQoCuhGWBLEvLs9aecV2YwC47",
  "key3": "4w22gxgxC9A6qBng1vkcym5tcTX1NpgjpnNPqaNu1x7TzsY4RLnGELNGnu13voffuNoDaNAg7BbkDLmS118LmMvn",
  "key4": "4Z8SZ6mtTa11Re1onXdhv2bmc7wpTzdPZL5TMyZPYnFXYzZLvPvg4mvGvcHgcpqXLheHXpsfMuQsVV8mAXwXapeR",
  "key5": "dLvtfah78eNH5NHq7dUeqoRY7LCNDfrqJ1KgaqEbQwyQC5UWsN86af4b7AqKzbENRhRH8D9GRedbVysWFUaiNKs",
  "key6": "52Z86fx3DLgxkGgikNPr9RyWXe8LaZZjb3YqGLySfXmFByJxBRKzZJhaBz16ayAQfyXR6T8svFfbjp9ZXn9pxvmn",
  "key7": "41efe64vDdmXnWEi2NzhnLKzV92mivum1VNfDxygTfh6rZvvUmpFmaXSVDZ64xYzSjK6fx69913Ls2CXKKwWdnD",
  "key8": "5h1s2kz6kbHXxR7NTZjNyncTF8fJV6YBceJMiW9ZJLJ2jPLcR7k1kRsM2KeLXwew3GVeTMNqeuuX23ABbRHACR5u",
  "key9": "2amZGriz3EMEUJ5MozUagj9KN69LLgkf71noQVx44DSf8StSt9EmQdjbvjSGY5vPC1XzYcYHPWCaQ5vfqs6LXqV",
  "key10": "4AvtHnfyyUZHdtfZFNgBVQqjFtZRQpg4ELs5mvKyB9RenQ2mhasgrK8cbQfznx1EX1sP2WZjsWie144KGKNMPhY6",
  "key11": "o4CTTX7LBbeKohkenZLZLXwjbYPtpDrk8HWnX9aNujWzpJNwPSaWvG3R5Tuc2R6yd8dVEJNrGTJ6tjBtTq7AhLP",
  "key12": "5Vd1g8335uWQGFcjLtA9pEnQ2kcb34kP1qByfSiF9mejErv8dqk2HcWq7fKjuKXDK5qsRwzdCdf6khEoGyTeuC4U",
  "key13": "utToab9mkzPU9gpvg4otJHHXcUk4E5R8ZV4goD1sNmmPE8rwgzDGRtbg7f9Bc4P9gjxJxBg3mHrWxWXcYeHMvcA",
  "key14": "46i5jD6Z1aTxXBajpRaYUu3vZo9nfXPBZpwJRjoXBXPKgZ8rkBhFX2zLvppX7oZZcWbyW26JtzBuZDoDs2TPJHbV",
  "key15": "D6eWGNGWveUoop7RckrQWRnhGgsBeg6EETXaqxsEtHC9WNjV6GqLgqqYbX8gajrL5qdVmXhQ5EYnWAcqfcPQyhB",
  "key16": "3Ck5QgUCUvthbem3dTzgtLZa19H9TBT2JZYsMKv5NnUpkoMvLaSkbm2P5QGbRqqnRJHj3H5it9KjgTDebnkK5tqn",
  "key17": "5ATnmAZMssyN83HrsqVkYEvvtKdxmP7JB16xpnmW1c1jX1tW7aK8PHER2h58YHuxzBP4cYbQp5TJpt1SBdySekmC",
  "key18": "2D19MDnQwqjyunirswh1q25eU9dqPQzrSMSmKSJip1ZqW9w8emSvr3KGt7Nga2BrrmYTBVxDQcAwN2wsrupuGeCd",
  "key19": "2UAneX6cZrC5S2fcDFViS3sfKYcjR7HtfSQUet4Shb33DYBBXKGSfK627evR8Z47fxh5jYnJq57LAVe2DByaFudp",
  "key20": "VdkSdmpWxgz2Sak3VzWKwzY9Q3Pk2yT6PPNT8ZPbYJnf6E1b6aiJvkCwoBHkZpbzTPS8bwb76pvA8M7Xbfw38TU",
  "key21": "2NuFmV2aUF1qF6qZpGysR6Z8G1zg1pUeCiCSzUHMv5ymArk2FNgUE5SSDCqMXMauA31j5hdpgfi1RXvm2HCNzuqp",
  "key22": "N5BQpsftX2agr4rJ16Ndo9ZBX3wtjqnBtTRqYnA4FM4mEf2AeQBFU6F78S9j9CAB6hmuMybbGuBmHc74r5UYJtV",
  "key23": "5Czvs28xCyinVoe5aBcWTTexUousQmzVxzfQ9SZvSs6XKcQoGUhcN6hWcAgYX5vRWfdNWKZmWNA79QqeAgXiyXZf",
  "key24": "3TKToF2FFRdWnZch5KAcJEw3hXsdgRhRBAyPtkyE3Gw7Y8zcAW2LaMzHcgnp5ArFfwgQMdvLkFtSEtQVxH5AcfHr",
  "key25": "4v1j9xJJ69bRvHRKQgkzHpUF8R1GZrdqDzUFEB1f8qiryMrkKh5gAxt3mFmpZDUhyLohiDuz3bzcdJ8qu5dVDzmY",
  "key26": "5csn72pm3N8tjZhtYEAYTMDQyz6ERtzLkJ2qapADBduTjDYBDtkpjHD1ZBrDCysD5zFMU9VhWTE82A1NnTtzsDqD",
  "key27": "5jjQXEnYHnJfghjn8AStZazbFCti7Cr9sMBhZrqhRJSYWpmjBTPrEiDrZPxFza7g41CnsntZSRZbmesGM6pLgEPP",
  "key28": "5LFrpkAktYjsqiMNLtV1XzpyodVqZ2x6QC5MVMaALB5bz69WW7XZnncGyGgLLiJJrcApGsp8rzmpMRPmv5XhpaN",
  "key29": "3nYw7cMLTaxK9PietcFKE8SYxfqqV62hZmtguaNka4UYd7kjoVkgJmrUqTRxiCp4sdEUK23wNG6mztRAbkfnrHyL",
  "key30": "2pCv4ARdHRHpBbvbXVWKsb8svbGLjhLa4qRLUMKFzQ72wUDucmpNVHefKoHyEzxPVmMqtYMp5kR9zJf5wrhVHzoN",
  "key31": "5QqudGkUgHVDq4XPpVkUBwb6e7KNYnnebLcSaoUJQZrvQTLc37TQauxg2EPUzJgCfU6Uy5eJ6oMTccSDW1aPo4hP",
  "key32": "3H6Q6CqYE2rcNviy9TBjnDjKKibnbBJMob17gW5ccQEbSPzhfEMRkdDkc17wMuzyxDymh4m9D9MgM4GC6kcdz9GS",
  "key33": "3iwoSjkTe5GQrYHDpkScKKT7jfKASGLabJXye2zTaiKMc3mma7fZ9LF3RPRC2JrowaiXqsQCwNqLbFwqtsJhaGJZ",
  "key34": "3r5KD5zP6d8eK4rwKcJ3cPmDM2vNNRwksbaK2xzTWH9YT9dQpAzapSejjYqpcFhrUwGApmNDiuQi5o5KWdtv7GHz",
  "key35": "4WpgpYhRY2ZFWrxAZdYA9VTXRdAQGhcLotAbMd8SsMU5fGaH1tnRhxinnNb2Fd76Gx4RKntEGNYWTbzg2bbSL2iQ",
  "key36": "59LbVqqEgyzJozcGxjXvjsXMqMqmQ45L2XzLKvAMBBuYASSetbatJpHsWiCuAqC2HRPYQJJK4pYpjJLEvStmioAN",
  "key37": "3dxZGcKhCc7yKtUv61z8WoSkyXxgAvpS43xoDXeySQDL9pWL4o5u5FDpGCU86J2ECqJPzLwHMGjeYpQuCRuBHTv3"
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
