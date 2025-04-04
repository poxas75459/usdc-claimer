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
    "Bq3vFxURUmdZzmDgeMm29eGrfUbwKiRELR8ipXDEAgvQv9meGgMTYfyYA5nzUvgcpaSa6Z9i8sRLybwsJfeKMH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBXZ68RdiVz4Ed31nt4sTX3rRkYbA9Fki4fmT4bBVnR7AJ2WbwQ7jWyaJ5H5PMzZvWcDxt9ENUeqvfdFt1YgrcY",
  "key1": "2vaKqchnMeKo3jkQdwSEche9GTPT4t31ibEphbejmw2WJ9wYMmKkfGXqAFNg2bu6FEpUkVuywA8KroYqpK2GppQT",
  "key2": "4Hb4jhYeyop4BiQPxmY47mAZNHbBDPokNNosQeBKyzpKs9opGdcXXD7fNbMjsopWWV1a9PNKKMd9JmsySRs2F9LV",
  "key3": "3uuS3VbyFiAFoFYZovceCTMGLehwwSDdSWXsTHXMFWEYtPrbCvpDLrJPUnfxu1J6QRobY2ccQfGr6ZaQpppLWDne",
  "key4": "4pGMBavyvy4LsSYCDTB3PP2bpfvCt7ZtEEMMcBXCxsxLca83fxUWvzNT4AvZW7w765FmBgDzT2U4qjkP8axr7tCi",
  "key5": "57iNjSWeMiCzSCStY732uqLYYHpWR7EmtDjqCnF3QTAEo89FHZbMsJ6uLMAA4RskYL1UDzFpijsmdVNaRRGzMwjU",
  "key6": "5UyAmnnmSbqLUWafzcDvzu4eZRvsWvqQ5V2g4hq5vLKG5btBDKhJCVMw8Gobqtkvp6G9SWFkDCx686WyLD1rDdN5",
  "key7": "3KaZhdoZw3ZWr7hZhmjKcEKn1x3MfhcmjBshAkVH65SyQahSjdyiTLM6M9G2uPmwMjChmPBS7ndpYvNuAXfSfuwi",
  "key8": "2GgTwp5q36URH52kzFJvxzHuygiFVicoFzeTo2bS8srXfRmr76ACd3Ts611iaLk1nkH8W8yuxMzcz3V2xysMdJKK",
  "key9": "28cNDABPpRQFSKXBsJFkzh944zRTSnhj31WbVRP989cTonow6CHCSniMVgPmp4gPUwvSNTHvC3HxG5HHoBJLDeRR",
  "key10": "2kZNzrJUgJZr4A9c2bxLbXZrrGQzYLDSA3fogq2pyzg7To5gcCLkxhCr7UHQ2HmQzYbK8BtRuk2A2Pjb1EkPHyHu",
  "key11": "3LAN8MXkiymj3xA1kDtNAcohZVRZE9Z3ZyAHbHFBrhzdo41Ntex8K9m6pW7FNKqhHpBrDptcmCGwVSgyNsMZaGTw",
  "key12": "4R1fKNySqjhN7qSwtz6FKqtHBrRdW9RXMcu6nHehXk9S1w92fzwZc1FD39yKxas7aeuT1gEwT4tm5F83NxU3S3d1",
  "key13": "ocbFiQ2CfJ8RFN3rCmegPeKGH77CYpgnQB6bU7WDfqJWveGij2859JAhUHoj6sLBYasXNH6eqBeZF9t4UUwUwfw",
  "key14": "56A6SzUyKYGyf7dDFdHRmqx12878twvebHZpWBrN23NaBzsSKMgJETXCnrkcVND1EDTTw2ZWCdeFHeBSxFtPXw2T",
  "key15": "59zmSsSZ9PPYC8TKL8p3g87fW1gTCeG1dimASM4GU6odmdbWx8o4R8p1wQWYnn5wceVyAzoFDA7DYUhiypyMp1mx",
  "key16": "4PwxqeGP622Pzz9ZQ4LTen1JNQwhBomQyMxGxfs3npkcaupfLd3uvu7faArMszmhQvREuJiS8XFUgwQkwJC6VyMe",
  "key17": "3tQD7zJ6zmv3M3WB32PNvSRGk67Kt8AAwxy2cj44MFYtm9JETtUmHm7djaPHP8KSkjLDduumfBDyngYe9KMSYSbV",
  "key18": "3axKGXsSdTJigyfjRUzKyFkZwRGayb9aPDMfBRNFicZZ2L58T5f7ZnwxgSrS9RKwTzQ8NJ9BNZy8Bx3swdpcxkQ2",
  "key19": "353B6955iuwdLtxVbUeEWMT8v6HAREfQNiwy5XYTTkD9onuq9TuPAkNYJdE7t4yd7tiwLYUEyMeuGq9NeREjpJh9",
  "key20": "aWU2hYUeMjiZ6TVJ16BoWroZsvd2x6drqyRUS5dPKQkFAEAuE4uVbQTPfJcwjKx8CqdgCHYgz5JUvsuD5u4N5FX",
  "key21": "2BvLx4KzFwnTiujcXPyK1z1NHU7EiEWcR5UmGJTVruPvLG9pNi9LxgaWv2yracKYvhhB8bBVgUVjch7ziNu14tgB",
  "key22": "uLtvysbotxBy5rBf92Y4Pwe4T6DYGkLNNYSVPQrkriskYDsJX7gBGLr9atojycPzyEMDRwyJXAzsGcnz2JkBMXV",
  "key23": "5AdiheUbZnvnvMu8tve8BahfzP45aD4kEeqtjrbde8tkorzC8JdFthkuKLHWQAT7tdi2EhQyC9sZbBTYLTr16Pv3",
  "key24": "2JCWNmxWXp13kJCaDe5JARKu3DBHRGQ916jpgCKGogffm6ym6HQ167byVggVEyC8yrjPXUcg1gAwth3iaSXGQ1X4",
  "key25": "4RRdcq8Wh8fEecSrbMy5AKHu3782GdTEYRksU92m12oQWVJgTRPGGABLCVxDnozgZLG4p7dBXZtUJXoFtukk17Zx",
  "key26": "4BqFPXpBEfKVqeB7DAtBCxwDZDV2qN4E2hwDYU73S1h3MLopZqPv19tMRAyXmCr8uaqj7J2xSycpdpPcGoStWWBb",
  "key27": "2QQMZ6d8JpfGiQvq7WKEz1YNDrAC8LqDyNHAAxrYZ637XF15im4Rija3rqqX5NmjC7k16U3YBgeKLVZ72aTgYRku",
  "key28": "4y99HJDyjY6pLjukfoJvu7yaVCBQvv4a2KL7Hpf7d6BDY8nXGDcFM2aohWRaF3hsUxiPpBxSxB9NnZbzVLrFsCth",
  "key29": "3daTs1LUM52BEJDF7xJS25abGZYisX7fpK22tk9iP3uo6b9FyE9jnmdTirEU5cpreXSA7tobsahEk3XKKQ9AJjSm",
  "key30": "gmW2GuoNvy3g2Dm6b7DGJwrZGt7fxoT6KvqNb9K6Fmco4SPvn1eTziLCDYXSEbRh8Ui1v1hMZ81cxaoZAQPhx2p",
  "key31": "4RDTHw2H9WmvCqEjGJ3RyxYkeJwbUWH2s2XBhtdcD59ZSTAgSru2ENQd1CXdgUUFDwyjbhL5ac1vovaxcNrBiwiQ",
  "key32": "2QeT26pxZ9bEP9TuWNdZdcs1ZdrFNut3kxmBxWjwqX2Z3XJ5NiHDp4GZbLtaX3Q7X3QeRb5ygnZ5SJEQC5VBa5wY",
  "key33": "3aESJYepmAHH2gfNGvmLtNLGuxifQWvrv1tj3jLvU4p3FNuQUnUEQRNcn64FfK3A98P2o9DtX2MQZgUchjXZq9sH"
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
