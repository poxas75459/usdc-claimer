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
    "4gu4pxAMKvboUgq7SYGxcnTTcZnvhz4azqyzTTRbfdme5HkdD4QQs6PX69niwSWZ1FQHwHP6LoNHKjKqcKQZxort"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aoCQAc19PYeKhJQXg2cfdQRxM9jBE7we15ajfn9vwCYw4wrCSpJP6TqkimVTnoNEjRLWnUkuvABgqR69ArSnGy",
  "key1": "kS4bZSnrKpPSHjDdsaYRJrWXGB7JrpeLvNJs3Q3RFJC73mM9ZUm2LRnyRHvVBRWXJRpxEXCNmbvivCd1t1mu9tZ",
  "key2": "LcrK3DqQ8o8P5ky8Kn2snBuPNtqJQEkoRpErZSRVA4rrRtE25oztXvAQFJ9YrPJQrcFSRKhswXCFJGv9JL7KQDc",
  "key3": "5ZwDyWbhWAZTfqv9FiXSzTKbRFq3FTvCY7EsQJj6wZd7thUKcwyhC3V9WNhZDuDLiCUzRVFuEwGT6qng8vHvoNDt",
  "key4": "4UYsARUHF8nHKEBFHVV8FrpbvqvEXN5VeQpz79qDt64XZbbCQSZNXynZKtZbSbaHtTokMGcZdTJzN85MYepptZis",
  "key5": "5nCAJJU2Qy7cJx4PNV7HX2HJRM7KoEHkWxthHrXzuhJDP33ZvvhVGuCrT4ftxpmm5P1tGGPMfYTZKczVLFnyk4i2",
  "key6": "3DxYuwxt8Spv4sBfRqjY7VpsoWZQE5bQDz2DDpbCKJkDJsYx745NCJhHbLbfgXW5Nt4k1iDZwsjaV4MiJkE8uCJt",
  "key7": "65QdPsbKUcVUGKsGXKCaeCNPVvWxV9rd9dB3d1YrnJPvmcUi2vMmUdwdvD4gi2Eu6UM11GMpCFtipCoud5h1aoDj",
  "key8": "2TTKG8h94Q9sPY2sLUSBZKatXGxi9DXEsvpbViSqsw39v2wV7HXXrcAkDXj5ZB72WDWvSg74t8vHgrWdXxhYcEH3",
  "key9": "25DrNSS54oFA2jNJZxsdDxDitZTX6a9bzJspFXHEgrrqgErR1RWvvoEVjSuDayTPpM8dz1EK5vZferxLY9Nxuw1r",
  "key10": "3J5zq1Ggt3wNTRyH3ymTZqp5RR6VoDRmJn7mrNyNGVucmKyBkMD16axPy8q8PGkbKhxGmmssuzNa2fKGhw1NbWFe",
  "key11": "2yGS7ETnUro2zbksV4PfXRdKDXocakwn37Uggh6pT8A1XPN2HhMQDgAiz2rekbyxade4EQ9FGd8bhi4S5Xim4ADU",
  "key12": "2fkgmw65hUj6UjdCiC5cCYhfzeAZKmHKYZscYJFCLZypSGaJwtnktAdWVmnWXagmmWtBg6kTuKXbQyVyvKKFNLCr",
  "key13": "p1j1JWTcgTieByKU4uqMX8Czfu6reYJqeH3cmReP4wFjCumJFxByWiVCMxi8wcH8cczyk1V2NUNtnaw6tag4MC2",
  "key14": "4cX4b2svmrHTMAdvKqmFHmYaYLFVrdiHwRhF9iuhzZXCQavqMtyE59cG4srN6Kv2veKkrhTrTDg4oYEYg17uij12",
  "key15": "4TBb37k4CsJWifkH74Ehou3sU41KMkqCTmj2ZrGcm2MncQs2oFK2iyH28QGtzcvDGbjRbkb2exN4UVn8kueaQ9zx",
  "key16": "3j1CSsxhQ4L2Cicy5dx7tyv2K59Cq9NNixu4FR1octYGCa7MBWAyWN8G8dXCErngBWatDsXGYou2Bt4PWRHYxyHC",
  "key17": "2iGqgcKYcm6ptCcu7fyBcYgAkQ9oiwoE6T6erjQSbJtvPvr2rPtdxnbnmhAFuy7TW1asDKpcJEpBWfkuiaAZ59TG",
  "key18": "8okVPmcLqqm9EcNEFNrysANVrDJCrW2Z4psWJPfTFVjVUkqbEycnVgEcf5eAge1Hy4JVRrFhaXh4h2xSXyhXJGZ",
  "key19": "3m85RNYmNuwuqR2pmNFsFPK1Bfsuk8B1U5ccDPLkb3bdCUK8F1ZH3mw3U5kXimqF1Pgwd9hQWJ3eg9AEUn3MKvXj",
  "key20": "5KY1A3K2M32ZSN1zBB3E9GkAkvCi65AFWwqHQKy2P6juF4hKzB5VKrB2uAJH7jLqTfWyibjtRxsijmGH4Bp69Zx5",
  "key21": "eKYdkLFzp8MRcwBGbFLY8RXdL9TaEmSmRgomWct72EsT8SYDKwjCcn1sUt2bTvoJ3KUApybQN7bdDgZbZ4KxTBu",
  "key22": "2KYGk3FqckLqSnWa3cxPzqhwoZaoJxTiq5HRJpH78GkvB2SUNhnuwTGvR1k4fYESjTRm7ewgSDTiTZS4Z7FTesED",
  "key23": "3VLQnzFEhXEiKBq7wAnFLvck1wS4zmotGoTT5DkXWxg7Woo7ePwY5MoUcM7fWai4hyCeH2skSHqaUAbrekAJ12Aw",
  "key24": "a5XConrRkXmN2fNmQDD2mWaxxry3iVYcvKW1A9gBK15bepB5dUYmJGUqsXPB7MejiMmpPbu6JifpkurodHxEe37",
  "key25": "2W6CNUusC1S1tpnLUwuPbF616XgdaggtGFoxSHu5Wgj9TyEZRqjR5byZUALK1fH2rr4TTmAYecQWe3pfvHKbFDBW",
  "key26": "7vGj6Ct2nbcBjeiBF48W2sW9cQF9p3pEx82B5P34feuQspJiw2YLFSzkuTw6WfUg2as8j92C1jXy7bbq1q3LBqr",
  "key27": "3diYUq4YTSMJaV6nFKigvAdx5W9gc1954ZZK1Q32LkMP2Z1tEghjvaUiqhs1wDxGZEocw18rCT3VNseVfMxT3KS7",
  "key28": "sWrRuvok3ci4kZi3vEKSyee82KJQMbQ4ahg6nr9uLoGXf4cjTDPuy7kJCT7CN7ggkKhzb4SMpFeDd5WD6NLLCzH",
  "key29": "5eZhXKpMLxaqKSfBJiUM3RGXsWbxVDZiRqCA5DKCXTXonao6pueLSDKt5AX6LmqaTCkZw8ahp7JfrxEQTG2yVc3S",
  "key30": "3oCj5HasFd1vizX3GwV9hd58seKAakyKeJXV399mbCecwEF4Xkd3B5t5wh5mHmknFtfib8zUjdrPhN8YJtQdC6oa",
  "key31": "5L4wyGRkxxW1V36pcMrAXy1hcYmMd3LkX2BhuQzdPjhtTGFgAgB1gS1HV5uAMiPP1WEvtAhYC16aqiNmPaMgUt3n",
  "key32": "2krx8N7FQ33yWTuRTRJTbNAddvMLs21kY2JwWonPMiMttqxKLpYS8LNvXSHbncjxpCHWFtumpH5TYdRXWsCVCY8Q"
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
