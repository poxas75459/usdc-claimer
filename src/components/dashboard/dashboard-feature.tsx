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
    "LQHJV2pZDi46JxrnJN4KsBiH3C2XphqsYJsHzN8LuAwHCqMp6QosfGqfyESQFYEx8c4JPutZfcLbExpiKNAkcHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvQxnFdPmx5KRM8cJSpGHEWH8QvtMJxwddgouZzo77Apz8rmwUyp184qvq7vPa8iaCf8WpU6rGanj5orQVUPn9H",
  "key1": "3bUi7Ry1UFpAQux6AgWS8gF8FFMFqj9Gro4fEGMkSf4yapFi5XJF7jRsg3Kd3hudu3oeL2KeuTCGDH98Kan1DfEw",
  "key2": "3Ww1SXEzceBhWopuusG16zMrAZuU6hCphwxuXE5MJ49gRK11YfbiT835DMk3MVW7DnRA4BAQQZGqkPzNq5uHLKCv",
  "key3": "4JPf581Md7BphA8DkXpr5Ev8B1mDGM9J8Hb7onwbmgkt585JkNU4smxQm2GCTBsXi6FUrWeC7WqcQ5vcXif6c5Um",
  "key4": "57s5qyGRKs5kAKegX6vK3VsNiNBK3nTwmvi9tonVeu3MMxSe5ytfTKPRKeejcxz5U1pDpS3p6fNLegs9sS7Vxoe5",
  "key5": "5hJFq1dQCEfXnAU544C6DX1NZdH9hxiMMYSSZtoJTvwjXCM4MtSCW5mUH3Cie9HpZSdheqNMsoDSCTRkZE9cLWv4",
  "key6": "2Zmm9t1MkuDDV8MhMMg82rVMbcN1WMJdDkdPHFp9Sz81guCpA5U4sf1ZTiJokeRr6T3RaM1XtuvVDCmKMWor9J8q",
  "key7": "4dyjAyGgoteiXcjpXJ1Cnt19SXG1nyGLdjRfbgRpRS2gg3JoVSbM3FCePgwVqALFjk2i27bbGkVY83Asv68YMf9k",
  "key8": "4oZJKwWrbHcJ5B3gMhixESVrSNBRXrYgxTFigKyCJJPJpyMGZY6nKyVBpZ52qhpVybvfGnzLKabdHVfernzfxWKZ",
  "key9": "487p3qZqRvR5Y5WCoPmk5KzYfACmuHbzBsceqtpCNqaF5UB2Ad2cqKNPv7kcW6A6Qyneo1qjLbW1MsnhGsirzki5",
  "key10": "5oCsHpgqyZRFtpH59q4ZuU71dKhEwfCythXNvKPkPKVyVfgg5f86AtSVjR5fy4ZxZEzVqcRno218VYa3PRPTrvrN",
  "key11": "3ytjHqdLC4vcyPqcCCsBmXBSk7EjKahBRhQDjFC85Qa3sL1izUtDn4svK7aZhKN8UCCJ7431rqBcM3EPTPwV1gba",
  "key12": "4tzrFvH6Fn3oZSkk9rACFM8NKYTwKQTdpNNSEw78y7iAfA7MwG6gsnaX1Tyo2Nua5nKuTpwvGsLHDnP3NeubUo29",
  "key13": "3ozDFcLwcsfVFMCJfMDEELpoP73ri7RqQ4bVXuEgChGvKr8XvT6UsDpToD7Ac3RtnBuw8JSAwJyeD2B5v8zgGvuK",
  "key14": "4XSnM5iFXxigqEXA9ppmzCPT3bRJEHfhrmYxhjsu5A8th4byZiF8ZTDWZ9mo2Cm8MXXaFvjwkvKqzCdZKzfn6p1X",
  "key15": "475SP4cCbcCFLuZiaBMWoeFNrv5szQrJ8uvp9AQkZHQ4U5FG6i9HwXzHqPhD2wWx2bGc3S2DPvC4ke5TjNYYmgSH",
  "key16": "4hbtiMf79ufDhkvHsxGTbc1iA8CH3qRbRXuwfvWgDjJnBaHSbqmWVps4XKmCDwQPfr7dAcgn1LVwxrM5HSBd7VVD",
  "key17": "4BrfDfpcmwyC7TRDQSVdbKZUdEG1Wo15V4Eof3T2GiRkgoFTRU823uEn3dBvHUGYABoNtrRUM5aVwJ2N9p1QUUqF",
  "key18": "XtfkUZBBrLLdNNXeyPEVR9B6ivrdQQavLUmpSYzv6BD3SHyzJczkKp2bpu1QgxUANyD9cmzNuGiMDfKJMhAoxwN",
  "key19": "FVESgrwQJq5x18JzxhWdXeZRR6dz4UbFsb39kieuVXXeqjEv9pVhH9VVAVfF27L9rEtdR1CW8Dh7rhZQzaXnTBc",
  "key20": "4bp8PG9eGTyNWHWKKuaicPRW2Thp1FjQURWCE7UgFC6PuUsh7tdCJ2YxFYAxyYncH4isq3Ecscw9Dmw7JbRydLz8",
  "key21": "67kairtgupeEXHA6Yd4Kz41LzPoPt47ZK5jbbMU6k9tTU2kpzuDL9kJc4okWkqSqToLjPnxS5LVZuT1th2eLJRMn",
  "key22": "K6hi8xcWx1mBDQyZN6A3J1TGdgE9MH1Sf3jGA1TehrNiUzqyW2Z5uoEvbLBQ6rjuqTyTNou2xGccn6HSzmZN7Vx",
  "key23": "2FXnPcFAZ25m9zjJUt3x7TfEJ8iHLnwPHoj7fpUEgQgdjRiGxjc7sTnG7wwAjgMbEE6y8A2LmgFM67LTHP1kNk12",
  "key24": "5A4Baeg3ryikuqHmGG9nrt2wyQVyUx1JPSxPkhkMuQQ7tgJfJZfnBA1ckoUoHnGKizPiz7vJhYVsSTNvH4KgnAj",
  "key25": "FTh71ydTrBq2fuymcvja4w9WX95WB8jcpWcWP5hikX6yy5VG3oeGqYRrrkwXRiEVQfBWLee7kV8tQtUZgaoaH3k",
  "key26": "KHbQ3EWgB2cV4KLkWXXT8G826qL3HP4nk7dxTkHKVUoe1PRrixWcMXEGgtwVS9vg2wT6Ed7XLA5RbwZNtaEfbH5",
  "key27": "3z4zgo1dtwmKiJ3iFSdboHA34ucMatnvqhwT2JZo84ed4vmE8H6jwPPYMANXcWJokWLVefFx4iJYc72d47wE76Gy",
  "key28": "XVEjnZcDPcwXg1VEmEpoDzEURQc1W9U6G1FSEME5f99rjVgn5UcvZH7U2T6Bwqg94kBQwzVfmW1LAH1nyUj1zWs",
  "key29": "4PwW5GyEmfQiYkkDhwxugX8JbF2vhwzpRPWdqWX2NnwfdBWGtYZ7PAvWcot3X7uNB2LopiMHHsTjD3owrfdXaDKd",
  "key30": "3hFh82XDvzf6keAFpLmHhTmMf91ZdnfGdqoDQCzg3Sg3S3f7Weh5xnUUZNac3QSiNVnQiGZDnsh8y2JUqnNpQR9Z",
  "key31": "3fyySb3R6RskRhCj7hLZJPnbKmdMDK9kdAyWdVve5Y2JLaRpnyZU3MPnK1LUjakQdv8oKQ6K1wU5Nh1ZRzQBGSRd",
  "key32": "2XNQhpx4XW1xZEULec15PjMjAZ2mms1hdesxkSwZt7sgxvWrHNuKWfCsmiZHEQPpsGbG7whwaSiG6rMZzoXJyKbu",
  "key33": "4cmkYHD2XxUTFD1W4mPNQEUuiKVGqc2mcy8gkiLyXgEBgc25ZPYFsun6Pdf6Rge7uDVVjQqHZRKHVVaqtb9ad11d"
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
