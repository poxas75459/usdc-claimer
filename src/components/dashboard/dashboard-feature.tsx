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
    "3pAJ5mVwGnTUegx3sqBnbSp1AaAk23n2vAAFVWjN8UqPe9EfEzvnb32gGZTEoryuwkPkhjEy4LjTYhtspUwbBihK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BvbaS7S3G1aNMkYjHYwqfFVu9QAe7zsjGuTPf2vP3mZ8bLyySHXmXSxUzTtjGo4YDTXAdpPzPBcWE1nFEgX45pH",
  "key1": "3jPXasFKevk8sdDoSZ93GBKtKwfuEzSEVRdTYqe561fEb5x6N7gXJsTEW5KDYbBadFWyhtFMF74YeTNSDiWQhfCV",
  "key2": "5f5Vhxg1AZngmnnxMnqPwb4fZeBdvdcwg1HcEo5HfaWV8rpjEktqMLoenkJRpBF4BouewjT2x6xFsqEANfcyDviK",
  "key3": "2X7G5iULdgp4ZX5ztU5HMhks1FRWy78oZ56YCx5gRHYPdZW45DNJoXgN3joNmgHQC4ZLyWnqknzkjinmZgCWpjpH",
  "key4": "4DZKHNKQMG5Q8FpTkJUc4yvDAR3PVvPvoXz5UcqBbAk24MkgJMh6mwLgsy2HD57V4i2AmSG2p7Kjgqa7f5XEWWwn",
  "key5": "A6ccZvTRyuPwxAp7W691cpxEEtf1jtAUyWidU1jwNe62r4boHV57cLz8wRkWWmWvcDn7D564qXMqb1GsQQr29Hh",
  "key6": "5keFL6KJiyPY3UuxagbfJtJuqANb3mAvkNYkaBuzjibw444yDzTDwCskzrVQEJyioYfYaN1XzumigJtZ8ULkaRPv",
  "key7": "2jc2qGkseDgUbZL9tGR2eYH9RrQVnR2TcFqtjcUbcHW2Gkfwoh48M3Vcu7ZuK8vmjt43YPaAuF4DxwHc6M9kPP67",
  "key8": "4et7MykEb2UM6NrjSw61RihfFV5gVJ3qm8kPb56MQ5fgesmA2PnPzmLjGP8co4Nukd8xMmeRQwhG2GGRNxMncqGe",
  "key9": "xn3omEF14Ls5zERsUUn7EYkRvtyXkG4E1oLuo1re9v31rZ7c6TmFWbDFnPcMp4fepJwXfySoMUVwYXZNA9et1hA",
  "key10": "2cv5JRQCeYXKffQwDAH7FPnaaZ2Ti42nKKXByoxzMP9TijFmpbpfLUfdKw81kareQM9pPVUPow5ZX4Cmh7DU2H8h",
  "key11": "38fjoefpL7ktSqs18LKvfoCoMKeAvHusANoBVX1xqisaoHqaaVLVtZ3rihQ9nAkh4axLydYR99K1iALYTMjQNdGN",
  "key12": "2Vg8HDczc2SBpKDTHr93HM137SBhZK1iahjPUhHKVmyxAeB1bcFRGALm4c4BGwN4DtZ9tTUoK6zSspM9ePhG3Y8J",
  "key13": "3pHKpx4iw3Zdzm3kh5TzSJp542ihdTC78VeexPTChTiETnJHtUFkf1wiFKKigPV8PbREV1BDrZe2zXfyhunqULS5",
  "key14": "9Xb8cFCvShbkyeSJdnKQiUe3JCKdM9YgdxhbqbKgvXcCxZ9pJrpSaZvCMqmqxHLTjyFvtVU6vLTSDXPRkcLXG6q",
  "key15": "3UmugwNcobLYEFre96tfbhw2q1kk4LqiKrWf9CWzHMcUpZbxaXSNo88pVUZniTw27LpMij2spxmptCbD5WTW83xp",
  "key16": "W1H1mNsrtgojnBTCX9G5NDmBoXnWcg9aK8GPg4f7Z1VqrjgVWg2h62YdMHfaoyRavLqbLsAwNX5RPjT7ZrWXJ1V",
  "key17": "5159wzrS24QUV9nCTL6mwWPwJxZF2kdNfBhvALn6Bu6m529PMDfTmkLeCYFt78Npe9W38vS2B4c4bgCJG6twWfUw",
  "key18": "3A97wxj678c3ehRCM4KhChtVG7fb1PasHGZ1C8vvuQkeqEMGa4LtrURQ2ayAfifXx9RuTKKqCtYaQUJcBv5vP4kh",
  "key19": "5Mrt5XkHKX2ygMtXZ3YdwPNFsT6ZMEPSVTzagQjm2FKN2WcfPYQPE94M3R4Hw38QW45HvF69dcdhy59ifXAF6Pno",
  "key20": "CJ9zDERKL8c4QT3kporNNV7MY2h4radnHn1apJCxQcsDvC9mXyQbnNHyqEDQJYa4RtJw4WAWVLdeMANUxZawzeY",
  "key21": "5dZCRrBMQiZ54TJt4WrQuARRvCw2bix79zuVSvmgMKBdYRfGtH6foxgvnrkCuG1NP4ptSHkvKxBCaTjZt87Lwgb9",
  "key22": "3rv1fHF658ggA4wnCArvJShSRsN5BziAmXkQPz52w6MkVHmZMg9gV1ebBY1aEfXKetJUvb3mcuKZib4LwSHSRQrH",
  "key23": "5WV2x32HgwB81XDofzr9bbHT1BbQKrKFNmDGr997HLpAonXeSQN8KL3x2u1oQraCzZ6fYSXvd6SwogDGvkrdQdAA",
  "key24": "3eFrCrn8PfKH4GGRMfjLDgoimdEf3nFtFtTPJL9yXU6Lzjt8NajK1h8VWTF9B15bMTcejrjuQUH6fekjhbf2rf1Y",
  "key25": "tfCracABq2BDHuRdJcWZiUev4My4GxjXh9AESrgtAMd5Qf7zkcBRVA1vLyRgsSPABAypRF68GwaBkGiVubBd7vm",
  "key26": "2HtzEYeniQRdYiHKFospiR9VZ4PQdwMFRmPTibfNY5kw7A6i6HUbMTNHsQPEVCh3NimPBKwxNB4jvXpFq6EVQExa",
  "key27": "3fUhfaKgXirqUbxceHAxcubVFMD8nkj68smsAm1n19Ag6sKhNLpJpFYshuA5tfnUYYJvdMQYkhpM1rCRhTTbZrvR",
  "key28": "2PsBaCDiNVGwqkXETBv5hAm2sAwqLERv5Q4ARPkhUNb8WY4nYWzUXGn5K5inbHftdQGQDt4fc7STMK7167GyzoRL",
  "key29": "4iuoKnqRdHs9NNgkte2er6yUWeXEhpcAJQ3RRCvQDuywE9nZj9jpKmtLTJQLDYGL6yZC87jVjWmMDihZM6ioVr8t",
  "key30": "cA6n18H9vvBUtXc63MHTQaXA6EfH5E5p3M8iMNzEhV3fP7bKsxTeKtGEoCGgM3FNAM6S6tGpAd7GBKEKqaRCzCo",
  "key31": "3Zu4PYYpg88nYamHvsaPznxw38BkCK54bMDmnv9fAdxxx4j1Dsf6jo69MAo9k7ypni3KmKKMixfwWpfJb88xWE8Z",
  "key32": "2itZxu1HuXZ7iVrpcAKUWg5HEFuRVsA2XjvpsHqDdxocWYXxUFJoR6xcuVvUn18u6Z2vBKM1JeciChWXZEAvbG9d",
  "key33": "48fVmTQTmwNpRvhiwCVSvTXNraWYuhrCigBgSPdpbsBq2NrFcoHQCyVbmSPe4EUvTq15JxwPSSCBhm9JGm2bioRF",
  "key34": "34uPtMXTiFaEYDAsfs7L3nFnBmCcW82JhW2PRF2iXfWs7tQBKDL5usxGoNvZC91Ux9BUfQYX4mBjj7WAtv44n2Up",
  "key35": "34pNAhYyHyCwrGFsbMADrKPWFvTACP8tsh7NkcQCPjt77jtVN9Ezxdxe9zKoHVS7LjFHekmKjUTsgz9dR6miGZ2B",
  "key36": "47Y45TpZaQosH3DsC4UytKv68D8YiYcgx2sNv2ipimUk1TRKYq8PqdsNxRAWC8d2PRezwnwaLqNk99P9HPwgbrXg",
  "key37": "354Yt2FUmAdk62xTgQ7bcgQsZ6KgAQ5fVNobgoRTaB9MAXkNUZfBDHdwEk6FCCStx1Rxwdy6pXxtcnKbGVYqx3kr",
  "key38": "5UZ3ymqBVaXE1NTSpmDaQZkTFdmmLP6kN7CTXTyA6k6CrVMUSXtRBmLhDqC4toJSagDDRwTqFT2QtZNGbo1sda9R",
  "key39": "2dV3cCpYR7KTc6eZrWg8HrLLuUekM8yiz3E1DNUzQrqQLCZ51sDuznZXhF9EvkMnZpY3VTXVyS3KrDGGqdnGtrez",
  "key40": "2r5FCvgA177oy8CjsSgvVTxdTPqzEAjFNeHiejhQ7zTw63oqdcF3iH3sF8zx7GZg3NaXWX5kbXUa3Xdv14oziBan",
  "key41": "58KXzujHQG2Xyg5W1xadXwuSHD9GhYFtD6AXJk4cHP3tezxFMu8M9ka8QHzFjX4nfc75AuXPRGxe3EdkHQYRRMSZ",
  "key42": "4NF4eCVkSyuArs5Ni32xfwJ45qhBtfZ4HuVnyLUTjTj5C5dGtot45nhCXbEvbxoKsbGXc7mupdWp7yxAr9fZPb51",
  "key43": "3oQ8p3MNnNUbJUs9cqAMUdmGWqxg2W1mvEKJXwRrSH9XQib253MeGXxDfJE3uahXphwj5MuCjgByWF7mgn5esijG"
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
