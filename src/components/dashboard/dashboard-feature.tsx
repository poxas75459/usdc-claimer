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
    "3MfvnhBKRzvjoNkpw3fNsFHMWGtUmR8jsCnhcLBabchexaCUPpsaUeDGKjd4xFD9ijon4HXV96CZEjRMeTnEkUhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AGszEtQVPsqEGooXe8rwSUKGsWoovR5kFQdaaMgW9MbWKadeqZxpepCRUMHmmJDZCkD3qzBbfh1ottHTYeNLbsn",
  "key1": "5ZKF9qqCuaDPQJXC7xb6yYVKham8CZUzJuHhsgveF1QrKgkF9UdMKuzLJzpmARQmfmw4vnD9sQg71C8BCbteCiEh",
  "key2": "5pYrRgTojdMzGtKL6mnC3YThQCVxunpyNHsybkZ9QXiCX531T59uK4q4bktF6Wo6WijdzPBwvfEmbeatohBpRV3m",
  "key3": "5Kitz3JrWtzXNxcQGwetZunKY4NFLzgKiNhi2TC6wNzWRqLwdzw28FQLRV1SaNMqgh6zexPcdqK35C1DoYHXg8qN",
  "key4": "4Us9CbULgYLi2gKqicoKGUZKgkAwywAxdc36Y4iWgvkaRAcrMapj9wbfuhWXhoGwFW9WZcR2prTKAHyoSnGLbMwy",
  "key5": "4jkFu56psoJKDTABeQLphcDyCpnz9dAxeeCwZYAXnbg7AKKuTTwNos7SZ7yTNzwUJbNsUt53X9NPQCNNer3Hz6LX",
  "key6": "4NH9TEUrndXjL3ycEXJuuUc7sh12cNcho3vPU9EXnDyqroKUrgjvqbdNWXtucKXSczqSkGwrHXvM4BWwJTjeVgxG",
  "key7": "3CUArFZEahGdNmpsbUf7RtNbotEyF5q5wdVhstZnhnZLDafu64de1chTF3cunN887DmQC4yS1vXaGX3hTSFvBU7A",
  "key8": "46nX2LqgkiEP2nT5Qf5FfndrXYjiPRqQj5wHUuhnAgiAtKVrBsYPNAAey32ucuBepiS6dNth8XC3fDFG3SjwuEhv",
  "key9": "63S4FK7nUh8GoZfSyGxwm39WNiXTorDU937DFrBuauooUGibmfqFzdbNdFDj76fCszBP4C7U7pSxg9yvoRfDJsjZ",
  "key10": "2HH2LM3Xxzkz81fd65FMSZi7dx67yBb33sejFtyBURkYPosTWiKqhSqg5gu2m2gQ1KeMZB2LVBMgXAxWCSfV8Bb7",
  "key11": "aq7kvetBpuF1xhh1R5xP8cGC2UsdKobMR1koZTxtcfaoG8A4XX35GDTJAbrysueycSCLzdWf3HjBeKwqHCtVsfw",
  "key12": "4jsEEaPxPHjndtXXXru9JoM575XDtfFbum8G9NjQmNJJq3Pp9xYM8ZtpbvQsnrumoiwbcVqPuYcmcujWDFZwF4E5",
  "key13": "2DuF8Ge9ouaym1R92SGRbQ6EJHWPBjLMJrr4s8xo93tzSp2DjPTBMeqX1C1gUx5dFqX6M7QdAVT9LMQXtMbjC2ex",
  "key14": "2iYY3iyV5U2cHgEKpuSAbLZA1MhhmEfnSD5xfUzMMRHumWMn4tjM4c5MUufkQwFAEXtsBXeS7GTQo4gGVwYS1LhQ",
  "key15": "2TP8oy5hjtGJFJvesrKozeJXTjsSWPKwDowesunzqiwhFVr9EEFRSXLUtmafh7fme2pmaJvyJLDjnAr4NovgS6TP",
  "key16": "4bnJ7tMvzVAn9ATmyoNjvkgjUoCZUksV2orqijFTAhSWqXcNNJL5hzQpSxa7Dt8zo1JBxn2HbbXLFD6ahhMJTajK",
  "key17": "245UtWxpxKwR7hQJxRVXqBdotTCUcLrPFHqDLFYNzB31rGHna5tKRVdFQMUHpUnDfNqH9u8YGGYN8LKGkgcUgBpp",
  "key18": "BKgscnwcRumw6BfmXqkihdAhiT4EQaKoy9jP24JMLGcWw9SXa2XMcLwKPJAWjaJLGzZhfTa4P9E3y2SMbQGgGWw",
  "key19": "2Af8nsTSp23VoTJpfQLj9LSH314WJeEBtiu89Wn2BpSDKf3NSrG3Kaw4FKcE65SXbsAXpEnyYbdR9cjV9hrQRAGy",
  "key20": "3wuMz2Ts8TPECkujqfPYEwd4s1m79rtTFeyAoo89g2xWo9iYhRkBxMUKCTTjJfuS8r7rDp1XVXEQKJNCDxr4SuGT",
  "key21": "eYyEZg9tpghwWaBZPsg9EeKPisGMwpfbGkBMh22LZExAPVFug2mvYH5Lu46sVsk6jxhMxzNdp5awEqBR4UEEF9z",
  "key22": "2TFrum6KrWnHvz1anhJAthv5oT9a1tPMjcHLCbcAg7w9G1QzM6VnsAsSFeQ14zRWpC9rNU2pFv2PnTjyZqSnorsG",
  "key23": "3KbFYq2H9fSBymotQiSLfYz7V8X4QtTTxS3ACKELQYS64fqjfoUwMwpa11GqbEKhq1FzBn6ZfWMUJExE7JnD67sX",
  "key24": "24NuEn3Zwibn28g7n8dV98cKXB6JmHQRxrjE2429LJhmRw8JVH74CYWx9KacDxmFjawfoXouA6FJke4zyhXg6xaA",
  "key25": "4EqNNr7WAuMBA7YeDG4ghQNwWnSgN3sbUYQTw7fgcf3nih69qaQfcjzjgA49CrW6XRcNzQPiysVp9zA2jDvnKrfL",
  "key26": "2NRw4fcbpdiRXqhj5krTidXP5UK8BUDXDH15DhPmbsYjcpNE8cHFh9ig2mj1c7Km8LW51WLzXqRFcJR9nG3uKDAA",
  "key27": "3GUfaxEMqXe49mLH19Bt7WZSxqjh8XEZ1StyNnwSqdp6eDkgRkY51MU6nbWqKana7f3spqguNsvzrVg6Ds7xQnVk",
  "key28": "3ZoaL86TnP3qGu6AVAhB3whMdyfq3d98H4rbHH4ofyMBTRm63zMNQPeDUxvXKyjivCvvB4cvJzDCao6PhvcYKegP",
  "key29": "khEECpHLJEQSCmNLQPGa3SMz2zQNgbB5YaQ3BBRCodmjSziJ7NAEsbZguteMjopa2NPJno7PaJhTc1QZtaUvQV9",
  "key30": "2TXv7tZquFWfDmDsZuw19Nk1rmvwvgkTgUBdQC5SQoo2DPany6x4pAJzdgQowu897MfnouvceWe2syHPk2YzcJB2",
  "key31": "3oznMDo7b6Aj9pNf7yjeZQbgQsjFKAZMWwnssQcoHMBLSi5yaqpZt2cyC7sAEipiJFJM2r7yggURU7BLDrv7cif9",
  "key32": "4PPWFwHKmY5ZgzCoBYKun8s4Ka6J7VJu8WiWBbhv6d59rMKVhX8jKRLCaDompYhZXGsP4wry48Xvc7gdhCFPVTaX",
  "key33": "4JKDgfuofCjf5uGmmschq7zNQcQ1ELdrRgBEvf4mqizYEA6QvioHG1sc113bJcdgCN4fWUq1EYL2oAJZXSBEDeb5",
  "key34": "4mmZUEDFy1rBza4VE9xEzheR2cPxWaQQmvhsYoQL8gQNgFQM2maLzkXfJ9BgGiHCC2eMyb2AMPswF4axYEtiN92a",
  "key35": "62TfCYQ4xBcaJ6c66c6d5BZKwPCVRsTRZHUbC25oQQeF7EqJspSGQivhW4quuFG6C7ZPfVQdWK9ueP49kNDtp1Wd",
  "key36": "22MYwUmruZckAfuGt5xh3caoGjqiYmuh8s9a7PHEAvmteii4zduwNvBZehs3vFBxergiPToqTznTKYVejYhQCsux",
  "key37": "4kwgLEVjjpQUkx2MBUBA4FAZha4gpfdb9h6uGAjHTGtDUMfxzK1wwJKbb4BtNzxoUfBYEfdWessvejtUVR5aRAUL",
  "key38": "DEZjQRiW6i1L2fKEQEAxkCcnDkSo3AAzJ2J6BbWE1uYSpZ9H8VCCq4xUuyfRR4g6r6yD2rqehVtYeWokHzgha3K",
  "key39": "2QKjMJ6NrTTvsaaUgdJ3QCdZs2wVUNmGiCUUpWcbPhzFNCo82RKVK8JNC9SuCRPYXzc4H1eC88WGoKy4Bt8Fa5ze",
  "key40": "5HBzbXZu3AorVnjmQbBR4sFXSkXSupwJNUTmxbWnjBiCLwztQCQLoi1fP1U7tbVuqvpWDxx7GRoGtAsGorCxX4NR"
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
