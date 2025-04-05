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
    "3K6yFAfQJcW8GbojxBaSgbRPjotsRHDin1VkembCAjsdaYzENvBUA9M4EsEm9UxaUNEorBKezrkV37pxPfXcWQUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaWSPHP9XmcqtcdQQMAFaW57NXC8ENdbcYzEfhzVL6gdCrYCCXtMnmBc2oRwQjPQXzkMo23raJ78druEEqLKCkC",
  "key1": "4AnNxLffTdE7heBK4opiqFEnfmdyuNbutT28ivGuvrF48vgdTHRdNJK2Db8pvaNNy3wzfMdcnup9vvNrrdwwdyuc",
  "key2": "51ZkoSpb6np8CFwyzVyxjWgiNGiyEJ5d9Hh6tLArBGPCLyWpss6jdYGyiCZFHnyjXF9tWCrPF3CY77d8Ts7SsKeh",
  "key3": "deA6HNX4tKpbrYkwUvYLF7z7GdGJD5tq8iC49KtW5QEAL7D1FuVq8xeERaSoTbiZCdNzomYhabZebNp9tfSNyE4",
  "key4": "5Xnx7nCsVGRhGJ6jNBYnThHMB3TSb6FwnevuMXnootWuS1HGB17SMtACpjjBsCjEeYq9KwXiVBUqruHgWH9QKfHh",
  "key5": "3TRX3xZ8yfsPCEM9t9vwxSWiaiWGJwFSkksR1corzAwk9SkCniapbzshR44sqmMftqiXJmPFyKcpMvnw8BUqMjKw",
  "key6": "3MDQ6ZCM6qER3tTavqfheyysgyiDCPn9s6Ss49QSVCYquLj6Z3KrnXSqVaDxdWq6uRKfADe95vic1mTGxii8Kr2K",
  "key7": "57qWLfLeXwx21BBkEfy8j7EqjxefNWQTLA3hkUtJQy2apuH3htjwhhgze2qz4oL2iSi4dP9BG5QQwnKaCJVddw8e",
  "key8": "8fScneDa7qUkzcR8Ew742JnfzukE3SXrT9Fskkp8Hwxy1QsvaffW2xBWJjmtqUJwG8Znund5gwGVzdZPeMPXj9r",
  "key9": "31TtyCB7LFmpYokZNq77vJY1EsMHFeWKGAyX67TVEUbhEU25yXiSPohCHT63hLwRo8YUUX1rtZsYpb9RW1TQFv1f",
  "key10": "5Eb1rYFfxMZ8cESyfPPZ8Q8x6REwU3SFv3QzwCw87CC4oZFhFtBMYQNhe7ZF3ugo1grRUfLX5RDd6NPrRr3owwdK",
  "key11": "KjGpUaTfwodm1JGdsA63kYd2y57z44LvVwXL1qwfvykcpmdFNXbRPY8uAPKzPha6uJhx7PhG7Uvh8wmmoAzFV4T",
  "key12": "beKR8wXGRR7YY3u4Q5g4GrPZwFQCrCe3hZP6x75cxDtWCiSu3hf5F7rb4f2MxiaDtzYivh26n1XfZSk3THwBF3D",
  "key13": "3q4QK7SeJb6JY1FrC5RUYLNinF8qCv1TfEJ12qU9QGMGCuUFwEkpBxY619cb7bGt61SHeJ8xKMD4hCeL7sZXztrv",
  "key14": "2UgayfUrcNHNAy3LCUA8rSZkFKkGSqZFxqWwpN3oja7shwjDLEJyMjhEPWxrqGQpPKRwqYFjPtcTyf9gbBxr1mzo",
  "key15": "3pqbYTpaqY83G57AdGuTinEQtnD2zC6iJJmkAtobo3n3rStaYvDnGewMLQ1szrkVWVNnZAJ8cy6yy7fAuLmA8dfA",
  "key16": "2G8m41MZdknH78tPQkwA7sENGzH9w75YkkSdRBXuVghKU28DXEYyvQgQQHPcqjZZkn725VV1FHEDioUN9VTBwajB",
  "key17": "LHCZVSuyH8DKZXYL2hZmLyY3ccqsAZq8ELPWo2bw2wHhdFdSQTSPeRcKQHPRxvVEABPaYW3DLwoj1wdU6Z3cwWX",
  "key18": "28KvtTYQ5PZPDaoghi7zjgzhZuHEQYwZsmokHf2nTqZH4J7Z5p9iRHipPcpACSAWbLuSvwxYc8YGcNs3ivqcWfLX",
  "key19": "5TbJtaEDDmVFtCA1pAfnJXeRuSszMUVZQRxAhK98HXWdRASNV9MtursnQRdVY45dyRaBtsAjMGq5gq7e5njEjHk8",
  "key20": "2nNF8gXQTJXSwXrcpJLErtiJADmv43pTgtyhSduwLiphPokzkVMdaVuft7ea6pgk3NcLiLQJvtKS3yafT78qg3LY",
  "key21": "3BGJDZVspqDqhvZ7vbh4rCHVUrdCweugYiMKvHkrcd69SiaU7iWWnoB6S6tEDydLSSF9qdGCsc9scGZizrXFsVsQ",
  "key22": "5srDu3YoGL1zpxL7TMuWsXxf19jCbsfs5Wc1wXnVo2WShgQeTBHHXsfgkZrsvqVGABSG3jmkE3xtJqSBMSXiwE2C",
  "key23": "33ngBYVFa8m9Cuyb86oLkFcjgpoYYzDxqYETRbcRyNyyFXoGsiNXsMyjYdyGZnGYHvpyinFfwmuie6t2z4EvATkk",
  "key24": "5vjbk2ptq4wseZi38qpKUUxfww9LvKZd9LiNdrmQ8qEvhzF24kzrZiq1kbw8ztBjrVfXSrrdECarADmA5Zrs9Hss",
  "key25": "4hDT9W8RZGZL5r6nHV4yhZ6TCXHU5c2yHBnDupULwEhdo9yu9UEaM5DFxivYzeSX458vBERv4MMBdQgiYaBGrSb3",
  "key26": "PYFcAmVLT6SPrjdd3AwzHg7Y19NVkDFd9hDpaSdGU8Cht5upjVkhxJAJ85j415mjX7oYVCQMZMukHwWhHcLjNf1",
  "key27": "2M2CuS8aYkejWkxdQ9qAP3fnbnb6SFaDGLcxbyaf5WmpqzQJLd4ePFsZzxMnZJGVUEJVvUgqSFrfUMbAVQqMSFFW",
  "key28": "2KSsbJxUkTz3xRoACXKaiaWFSLZND8NnoWM7xSCNgbb3Sz7UyQBedHoTQGXLwuHrDHL79m1r9MNQPje66XJz3jQF",
  "key29": "26biYwSbZiJYrsarLGt1LURnZL8cuKS2gtzZqb3eLTqG5p2zVGSmWMfAx2FcX9NQPXAodXip81SWUTEUwsLHYLPQ",
  "key30": "2oTqgEHNaEVPqgjYhXfSh1KaWVfhLUTkyrzxaSX5puWos6bDWQXbnvBBfnYgJWroFpduVHViUj7XJRDfEEyG5yeo",
  "key31": "wNHmUvFffLC5KVwitZELUX6cWNEiLEvi8mdhahdH5ExtDQdzmbKndTPFGhutbmMK2H28uFcKet9cHfv7sE25BmH",
  "key32": "3Cu6G4F8NAxbdCYcrJMfd4kSKeMSy9i7FCcRP7L6QNGh3ycvoPQE8ZCJZuCE34hBtbyzGtnfxVZ2mKhwRfJ2w5ng",
  "key33": "KYhsmCAVY38VxSzLpKRgXyKvSPoooLBSkhwANi633MaJQxSZcE2fZ9rWghyJeTGxDFTNfMU1pDU4k51jeFJRD3n",
  "key34": "5e8h5s6QUgVCRRdH5kUpJbkLQtpZjBFTTxMowHwNBy4EBTq91p9tscUCBj7MpoWJ8mdTNNetEgsUQsXW1LvEWyhs",
  "key35": "5BoBZsdH6pRC9vBTYTgGmnWmz5kAQnxCujhmmyY6h1HTKq7MMQVD8Db62eYN3HGUjAHyVmjQcxcAD35q4rFwYx3v",
  "key36": "44RJratxC2hf4gD2uHW3mjvXeeN2Gmp2vWFBSPfhVYHJKYUfqKTtxhF75Q2UwSiZoV71QS44XjSky8QK8v4CBct6",
  "key37": "22MLBaiedTXLNm7maq16hJKzPSy7kD8hJiDXnSUiKhX7kDmkZnLBEAv41UHP7PmpKUSEPMpTXhQUkZajQ2XSeDfm",
  "key38": "3s1zZjnPXugXpFxytgQ1WY7Ect5PUihxcEQ9K1T9GcfWRDQTiCwEyzciCHBQZA4nBurDmqfcwZm9JqM9desfax3N",
  "key39": "42zpy3dA1riChFHu5UqUNt2vcFojm9PY7YdSLEMjzEhJ7t9mdu4H1fp17Yi8GdqMziSEC8tLBPvJ3u5YFhY2yLpa"
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
