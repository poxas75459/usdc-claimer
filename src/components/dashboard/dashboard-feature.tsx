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
    "5PzYWhQxH7HB8vwqWoSKTTc8s3yS2ufvRYoYnDx2gGKPKD4VQhxavgWwvFiRsFWtxwhHPASDA4EnoWTboKpNyQXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1EnJJ6etbAm1RSWrnpCBsiaPoGaqgZWXkugapyuf9qTZQoGhfHW6oeyrok3kisGuuXnnY74zTiBMGMybHSfqxb",
  "key1": "3v19wLRaSCbqohP4zrHnrCaGkfPUhmhcjZ4pdK4bbEYUWXDwu8fbSqLfrG8FQAzm6cwgfiG5pk2HsxcYYYbMgr9Q",
  "key2": "6k4em6Z7BiBAugDf5cGtSWdpNzsfgEz7jsdnpPEZw6GMeZhNxENQNW24E5mrkdTUtc821uNCzGYB8wMX5krcE6e",
  "key3": "45hXMN2abri4QfEV2giTEKUKD3WCu27df9fyrpVZ92FK1VvFKJ1i5G8oJFYSrjx4su3skoeTjyNyqg16ctNwBJrT",
  "key4": "515G3AAGfHcNKZqdxeLCsFd1TzdJFUTNdt7WEnqPT3fzr9m9zsuKc5XdWXPi8WSiSxombPuT8LwQVdPyM4vU2jTw",
  "key5": "33gZysXrNZgKRiZhyY7uc9PvX4VURyTCGDrBsEpJAUjz7vVGcoKxpBydYduiWtVavPiDExa3PiXxm5f9BiwGxyTC",
  "key6": "zL6kWgNyvw5giMHkHagB6NYknTkiXGXbNUBq7AhRyYahcmd7MHuH7xHL5NJU9xSPgq6DYiHD2jDYmS79Jw7NtS6",
  "key7": "2jJa4SSCsXhHRuk1nMKY1hv13mALsckq8RwVbFiJaWFKJnAtHQoMf68TkaDyFKPdif5uHUY9n1NPWWxaqkzoQkqi",
  "key8": "VYHaTWGgfU42dX9odj5uzYS67dQUWik2Z6A8WrcMCGYMuRtizgPFTxE8QF1LPdwhZkjDSjaZwg8atbLSYhN2iC4",
  "key9": "4h2YMzDPJMzfbce7FC3YMxg118agrHUPzpaX7vzqLv5zgyfZUJn4cH1wdqDf2xkee46tQeuaXSYU1L3Tr9qgUN8r",
  "key10": "5YSgLmV7Scp4APe3Wnm5PVZeT4jXgA4DfZ57k7jKWGbxxQbRq2cz85XoiS9pkG3TdkSGJcYLx2ckpKM1Tipxq9dh",
  "key11": "4zzhqrs95ruVsE9ThtuBGtHyurPBs9FknJSWkQTmZ14rupayNiTDcfAkjzsto8niDz4HUdeWpvmF54xJvYvEcSoY",
  "key12": "qVFzLpx3Y8192G7sFjaPe96vQztYu1RbE2i8nT7Mf9E32tZMoYy4SmbbT1zMTUdu7jDC1nPLY83zNPnq9sUtHXq",
  "key13": "Wu77TAw1PXNsoza3jcBJSCmK4wrHZdnfuxBYBZse83XzHkKdM3RD98EFVGgPnweKhFZJynUMeDejWL4M8LDR459",
  "key14": "rDzjk6X98zLYCLMqKW6Va6hxKxJCMWkK2E8NTmb91DnRMunCrziiD8SxP7ZhrxqsmniieA6Liq8EtiBPbb5XYj7",
  "key15": "2V2e4AoFC7XnQZ2FcxiQcDk7np22Hsp43Ri1KjnkXtq7NqfCgbPGjVS1fePeF1XXGcRW1yXLFuYp4sg5NUTCHrkT",
  "key16": "5k1Wymabmk4iMH6K7Qt51vq1exaxX92gPrW5ig7NNCUeVvstMSCmN9Tk6fM59vyBCwNXDQsNe58jYkvTV3aPRwGB",
  "key17": "3tBavr4uWqeTfVTS5cCMVcyY66oPTCUpaFCpfkHw7nooz4aRomdQxMgAqTbEkbTEvNXAUWbBq5Mb5154N78397dG",
  "key18": "5KwZyjyfx7wWKYo28zzxSrMU3w3vGa7zAoYMjinZcpFjixvzEhNzHy5MDCk6ZSfYdqWPFGXVp6x7rrCnmkkwvk1w",
  "key19": "4RjBJ6M21PQWwUZ8nWHygUej988AmskQUXLr6w2WPjGEeTUJb2q9KuDvTpeNmBxwbgwV1D8nbzH6zAHVsDLd3HtX",
  "key20": "P5YZs9Xzj8fKZYeAAEf6cyNYXWkDiMA4wxV8RX15dRXeLNWEpnuAyggpJpYjNJMQGdh1gVLWrrR8Etyem72AzxT",
  "key21": "HpsN6nTZHcuvtoKmJpCuo3LcFTdQLSe1JGHjJy6TF9LcVxkxoGzNFHs5KiU2hfxJSD943FsT6x3v6ECkyey7WjH",
  "key22": "4f7yw181geDzTL7uhmtTcHZFtGtcChZ7fEaiUstmiw3wyACAr29fzHBUG5JgMBNSFdJaMw12FWq78YRFfkwQN9YJ",
  "key23": "5SwTgRurW5PD1CVTGb8daU88rLfwFuLY3D74ghusEgoNsxb9wVRwQNTMQX4NtSa8rEDFksrryUrB6KWt7herBDSC",
  "key24": "5zyp96xdThHY5cnCnkc3LYmWbPJ9Na9TiHnYsRZkCQqhGMvNcqp7sUVrpEGQxm6RPBCd9moHbMCX1Uu7J8phdBkV",
  "key25": "3vYHhprDf8pUD4hq2fxRcvycs2qYravjupK9Z2SyfPUDFpUL6A5hKfWcpqiPXTeA7paYa5yKL6KgbC2WG41JEoa",
  "key26": "634jxsvBzReKWcHV2a79Hj2WQTRXky8MJpXntXKzoCkJ92FuY521LX7tyTdRQbod9zSDRYUYJmJkpCywPVvfL11r",
  "key27": "49NYbMDrg2YsFLNvz2jcjnNVkpXv3vPcbQKWfMYGvHWCLPQokmDML3WGBnpR879f331CpHP174qFePWWG5vEF5x3",
  "key28": "35NXdvskho5BLbu398sV5wX7iGMdK64UpNDEGSgQY97KasjsrE2BwUmGq39JWaQHoF6xPHppGGUD7KeUyvqCfe6h",
  "key29": "BMDiiVyvptvALaHLhKT1CwsLhax5mjLNdinZBcSWyuAPV8kJ2gkJ3bARpupbCvKeHnXaUzdZCqXyhBaqs3S7vEM",
  "key30": "5sMT3YbpTq67kMm7L4QVYQcAWnGn8QCXUxACaynnbAVJ2zFX7tD2RouEmyfBiZqf4ZhYBEuUAeGyhwpGTtg8pTG7",
  "key31": "LTJPiagsAMZY7anKCgD88GSPCJRSESn5cLh24AFkHHg9GpxrXGpJyg7zkoY6GJWTH2ZQ1GxTkgPr97zWzsFweej"
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
