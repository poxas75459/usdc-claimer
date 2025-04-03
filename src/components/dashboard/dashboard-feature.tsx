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
    "3nqufm7SP3P12Cw1SnaKRXZndQ13Hr63Mj4EYjUBQG63d3cm1A8hpkyGjum45rCFBuxsYGXV1F27Cfpr1xRpUnRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrZ9NdZuSka4jZYdLiFpd8A1YMju1jAGgLUgkFoX9pHWaXrk439oZiHjXEchbeCeTb9aFRL7Gq7Gow92LvD7yo1",
  "key1": "5b8eDZmCHTLFAJAsMb2w5fv4D6L1DkbuFmNhrkcSAijJegvbnt4gHT9BaaFUPrVQqKzyBWLz2edUkHGdr5z4yt9d",
  "key2": "3RxrEtiwMvmRYvkLFmvZsM5HB5yR7ANe1BofrchbW9N8cX2qsVNJE2hwfP2xHtXdLQW6LjE6K1263q64WUPVbHW5",
  "key3": "62RsJKtiDegvqLdZ3QkzELqqa3GcQSAxhVgDazozngmdZVRbYzoBZAAXAYcKspFDnW4zKui2JGL1DxTSeFPg6SS9",
  "key4": "4CxGBeTMQxtwF1PmusznQnTd4CoV2RnnD2UWVygbvLJWm8vtmr3zGtFr7pvzMCf9dfk8an7ci39LQ6dA9sJfvZSD",
  "key5": "3Dr79JaPxWzP8PGpXjrvqtpHykcr9du9q1MpKRMPAU34eKBXXWH32St7XyWtRkDW7aNEve3oR1RcM6XBRCRhGpgA",
  "key6": "YGS7626kAFh526dNn6zeJzRxBYxqgxzGe8dy558RcH5bCBgVjr2XmbHwqadhLNE28gTZGMxnZrXrC5G8uTxtuVr",
  "key7": "3Y28ycKrjrwchaJYhAnJ7quznCs4GKhJM2C9cwer9btvJot1guPCk88KXduhQQiWAw79pf2BsVxidpDaBNPHFfLn",
  "key8": "2nRyxWvAaquGKq8T4ibJ2HfACks6DyTNJA6x8Grft75ceH58g63eDRYapi3N6FP4KqqVN5dBPRZULkoGMwfroooz",
  "key9": "5q1D81mcJ8TkmAzb7FY6VDV13McKE1zDEa5Spku2RzwopLDuaMcEGu2Uv269BT67viRGYKudeh3ezLsQr5APydjw",
  "key10": "2xF1JipqxsGp9xqhD8qevjtxzd1M8X6pT9gHx4J66K7sEHgGh516HiacGPxAFRzLZDAsVDX3XNNP6TtS23ryDf1u",
  "key11": "yT1qBiDza5yDS9F4SaQYsFxttRfHtwrieNTKcMa6Xcfiog5ZifnBsyyCTCETRYLXe79ZecYGbvirc2RaQ5N1dpk",
  "key12": "36rR6G9fsRXN29xDc7eNDi36hk5AtNUaBJxUWqvMqMECBsVQE7QitbA6R2vHvpvUQsgybZ2azimSkaGLjrQMAM4b",
  "key13": "4q3W85brxCoqvC7KiEBViWr35wJa9YSdBrbvWEVWp4cdTYsYTsaQz2vfRnU4BPXjLCxzF9Mgjj51VQUUJcSqiaT7",
  "key14": "4c1zduLPQdbPVgxYdffTLEVvAMUefqrTaBZWTkhNwJKgGQXMLZSHTKHkX8gk5u6eBwieEAdMsva3vHnTHxcve1cS",
  "key15": "21gpnUREKRepJEotkxCpKjFtkC6skG5z4N94FS3JD8LTgigtbudqVZeZ3WgnAcDsMYn2dnqyqZQ7AutjGE12gM2q",
  "key16": "4tXiwHWTtRKxib5T4NByQ2rXLHikM9pT4wr6Fbhjajm9K7hrzM8a4Pf8DjJiNptH4za2PXfWQrTXWghWTjPaHDtc",
  "key17": "3WvSQuqeiwM1QARarMc6StUTd4Ljyyd31ZgsKdaGkaWPwkq77zJvr8bSJ1USVug7pqV88QcUaL2HfWkgErqYNmRJ",
  "key18": "5uXkxcDxHFqE4WhLQTu8xBkkcc3wWq4WKMK8FJcPS59NygY9NibBZtj2VGspUE3pBqNSwMEZFKUNhFxwfdHzisBb",
  "key19": "4ApUX6XW96B1kvXTvtSKUmVNEygGXBcFdfbZ1GhvQfuSqvmi6FKvA5TjvJ8Nr8eoZKCrLSFBseE67vScSjeXW7Xo",
  "key20": "4oefz1rgbatA5uSLxeW44RLdbaHSmkKuMThhCoFU2cfmP1HDzxmy9a8yNGLCaUoXhgrRgjJbiVEWckvcAAjfmy7W",
  "key21": "2i9h1qwkCxHcv3hbpD8brPHYLMLoDmp7yZSEC5sgaBUXppWBvKx7mqw7ughSi129WXcmUeUUS8ceCguD8otYRncq",
  "key22": "4PgEcMAPXLkV5ixUjcnuqguqipD7Du1ijyNS2p2gWaCPr9ybWfK8bRAfktqfuc3dGpTHbHFAK2XujzDMTkkXJoNP",
  "key23": "3kiKbVKrsnFeZN7aYV9Qn34VCH1RvBb9vsuBcsNoNeykEaB9LVvy3AkRMKwJg7zZax88romK8de1xCALgcfY89GZ",
  "key24": "2rXuJXVjLSuUeFA2pJrH1o1A4Bri3aNBKKgxfrf4X81qHNLc9EBTfUvNghUeDr4AovZCYsQoBadaFKcfgpghLN6H",
  "key25": "4t4qWLm1KHk4ufoKjy72ZeNsrF1oDeiQUkTLd8yD3SNvEbCvhNbZf5U9XB2JbxNpRuhBzoEBCk5QcHfUwPYQnUGa",
  "key26": "4x8gNvWcAEKqgSLLkzXprgdC9UnizuYQ2JHhnV81R1fS3yoKuB8DJKr5buzTLLzf3uXqwnATyMGo3M83qfUAZNF6",
  "key27": "4NrLyvJdaabKhvSuE2MS5BK63b8NzYY4rUhMusuFf3kNx69esp5b8BraMAGjwDMZuKJpx64Dnqvq6R4t31gmJte5",
  "key28": "5SLaPYdxWsK5gAku7BDuWp2LC3cRHv8n42T9iNqg66anNTWxKdM9banUu2DwQy68kEjv3vfChRrFsmgQ6LAoRS1z",
  "key29": "TXPgn5D6Zt4Fa2Q9Wr2wo2659ovFrV44V6omA1smkV1Hx6qUuiEYt3iqg4q1QKM4b339dQkHWZ8Upb8vhoH6Chk",
  "key30": "3BAVXZYGgNzUmT4EbavDMz5bLx5qSWNdpTJmoDsEPcG9JA9KTXPWuX3ct5LwZPYjgFrXrhZnQD2AdpiNykGd2ABi",
  "key31": "5DNwhGfv6E5SGVmi5AM7JYrLC6iSBCBaQQrs2RyVYsawoQ3VGggNUSmDY3qMPP4zkm7cwbNqdkmuoramh9fBQVz2",
  "key32": "3exY3rLKbqMZHMTAW24RLMEZgL4ZirRyZGv9EpL5oZkKZXETEAeHKZ2pqtwKe2wGAQDs2h26zybYsfXb6uJEQDQA",
  "key33": "2rjAVP2tAkYGPpXfbY9TusaGiWb5QCjAWjE5Ao6FFyF7xpGwPQRsyCHxhtLgGpK3J3QUdbZR3n6zQiDDLDRzvwvw",
  "key34": "5zG7wZvgwnnYgxDMuNvqBgW9eirvGfFL2yAx5VJePESuumNn5EAa9WC6994BgGeiTkSqixgEFTDeK4YiKzE9itUX",
  "key35": "5BUVJjXoQu5DX4LtoMuZ6dWjpzUQuE9y3k1RJEoya9bFezY99AFTwY4PuHjG5SdK98vdz9jM6R3wTMvaVKHW4Ssv",
  "key36": "35iWfG9kBg9CpkmFMtwNZjfMcqbvMc1T2uC8CKC2KqTLLSn7KfY4eGePHTmSiyfGEFYWoEVox9sELLZnZ8Enh5HD",
  "key37": "fcFpLH73C4GdQR6ZCUzm3GgJt19ptAM5SAteaDVCrSm3newd4UXhNEX6Z227offztxjPPeABZjzBCtnYUdbeJks",
  "key38": "3UvECCBW5WZkvRQsnvqHG7wTuQLa3g6uQ6G8PpHv5NcBU5PfJfuPDSYZtCbKaNJ549NqRBq9ZpFECAwDfh65UAkd"
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
