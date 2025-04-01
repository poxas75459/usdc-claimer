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
    "23vWqDMAEkK2AVcHhP2JcY4Qtwj1tbap6EJ4ruDMoPArTTLd1HQrg5U83XQ1mUpWc5FFNWfJtgdF8L8MDm1MCjQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHB9ae33xjP9JozeeyoGwdrxTUCsh7k5Ne4c69YPyfS9v2hr73dbDQ6Bs6yGPu7FREw7uc7Lvf3BuUGgvxLZ3d1",
  "key1": "52JgFZnRfz7YpMbQXKvB9sJKrwNAoFHKzszdDigaPCpiNwwygX95T6GkC13VATDGGkjsuH5iirjW9fjTWY5X2Kje",
  "key2": "51v16QmVMzZevP2oa4WC6NF5AWCqfqvYwq651QpStRNJ7VtbTgB7MEPZZZhwmvByarsg4FhAHvQ6styH7r4qr9ZG",
  "key3": "5K8SJmX2oaknJFi3NDsVDwVVSjnhpyCEV1p6E1V7WqwjzYvFaAMPURp24ebD8BX426QRgdA8nxEjMXTx8X5s1L3D",
  "key4": "5Qe5MWqyRzje2QbxX3EnZ1tDUuWiuopWDNVG3BbcBdiwHDyUJgvsJdyE6YmakuGeV9VQtPe93ELNVgBy2z2H7N2b",
  "key5": "VjWm2veHK6TMTtQ35kEG64kxWrLsufdgwJytd1mbSLG2GCjTwR5JtPrnmVBSMHn6Tzt2qQN2FSq7nHH3bLfA3SX",
  "key6": "2Pfjqzg7Lb5Zvaqkv3xrSd4Jrh3JqNyJt8VM65UiRirpfdY4fzEvCHtUfFhfTjqjDTzmEdFM5XFQzp1no1ARPq9t",
  "key7": "B7iUq5qsMf85fACsYMK4ge8ERcQDLWvNa24PsWRMEo65u4GBzXLxQDnYFivckYzzzm1d2sYpXQ3T7UoGsPYYMvQ",
  "key8": "5MQszhJgBmQU9Futu5zMD6SrrAJKn14tmRjDJwiCatt31x6fG3Js1bjNeWUKQJQ2eXSHUBy77U969dua2hunEgYL",
  "key9": "56ZbRs4JCKLx8DeVY1ws5ote8t7tGiGmcd2MQTJSYqpJDaLrMp7J3BSY9x21JDGcK59PVLNMTJCgQ7vh5KjSGAcr",
  "key10": "57kev1APKMKSGN2eE1AfBvsN7kFSsyPCfC2aYCT7ha8EciZcJWz745D6SXvkA1zqGkgdgChixU3EyDFBnMMQasww",
  "key11": "5gjL2hnH1DJqMCh12YRbhSWhASAcpUUt2PDbBVEAPqahJzcgf9ZjUr2cfZcCN86z8qNXM4QwtEi3GLrofibSVypm",
  "key12": "3mU4gZRpgMxXNe8G6sXa9r6U8HuHH8cvyy6tmUVS6xVuSsSZYEk96aHG7NJT9qsUQCPhuZ132EV2DYUTqqPSQKVL",
  "key13": "rAi5W1ZdzcKUA5HbFJMUTNZx1iDSxMVaFVgFM43YpMbjZB3Yra9ACuonyrVBm1kFi2mwYJswvG1AyEG5VK77FxM",
  "key14": "3jMU1wonBBKfaB3hE36AZEBwqhb9PLga3wwwy9DbLpGfuVEnh7Fj3cEMT6Z1YJrcci4H5w5Tz6Afic7ysYexQbqk",
  "key15": "38nrwtt4JUYrenisAeemczrG6tvEwJq2vbAjgKTas2KURxbZHzZtGXDhRYYkBPEadxaB6K54QN3k3snk8rJSCBD",
  "key16": "iz2vkg8FwgXBXVaNsnkJyxjccwVXbUq9qxidRAkNxF5c3GLQY2XUafFEExV4aSu1cBM5F5ongKHxrbrNUPRBJ7a",
  "key17": "iGHBGD88pB9HjbmJwiVKsJutnrzW4XiaWZEtzA3j6bhXrsNwEJTgjVkuie2b6ra2wPHku3Umy7kt86HzAJXheSy",
  "key18": "3Ctrxpt7UkGVGPykEMTR9F6k3ZE2zMVLQrfpCoP5uE3iqjLrxdHzzJHW7UrFfLsPtGq9LTAWjFStFi6NPunh1m3A",
  "key19": "5H6XFC8dY34yqmVgVYwKDmESxPT14VCZ8yXMoRpEYHXhQD4JiRadF4SJBz9uB1J9pJagH3n6aCf17sYzakcu6SYa",
  "key20": "3qMw1j9vJCL1jNgBsUD5Y9SKbT7Gu3czojnfdPA82YtbtnNUz9upsN4Nvs9U5DDNGZUn1BNyqkkkYKm867S5u5sF",
  "key21": "5qv9bQwj2iiafvftgSN4A84PDkvVgfuCLJqJKEPidhd6FGFnZSse5Q1JWCsmckX6J18hiaTcuyHt3EJ3E6nnzUpA",
  "key22": "SRv2ZHJThVi5fXsaaXwYeUsN5W3Bk4uFuF5AepETNxcSTMDF1Y8FPr7tP7qoyLzcqe4yhhhrysCd27gGoKnmYsd",
  "key23": "55epvHaCfyG5McMZCkoNRTxdMpjznrNVL6k9tL76AaDSXi5qPw6m7nzRngGnVmxAiXyDXVD6EMfutWLrCtbBAtbX",
  "key24": "5vPHReN1D4XQvMEWXtX4TvEJDfH2NJTemjoNpMrx1x4vWdx4W5PLkoNt9gvF1LkKBnMffD4dmZN1RgR2ZE7ci5DU",
  "key25": "4kqNi8DpmUKfyUmutTsJmsDxrvfXdDvjeCRDUTuZxUWvX88F7KNo8jDmeGCus3VxuRUGHL237arqnMuNTZgosDTF",
  "key26": "3a2qWThgEoi9VqB1oc4b5vtNbiQ72ZzsU3hQUtytj65bU8sRCtVxcxcsirpDHsfvcN9ddtjDPJcZDMvcqqbQZ34r",
  "key27": "3zqFfGdXCE4eLCU9DSkgFG2jLDxpnDA7YjGmG6uTsy6vTNocDqk9TXLadbL8RGBXkktusYc9Nc1froPEbB7dpufC",
  "key28": "2gyGFCQgP9EWquvQywj5JnLX67ABynhT7LQ9CV3EPsS6gBu2RjECoh62oXrnvt1QuAgfoDNwvyuXf4ARU2KjwDUm",
  "key29": "5tEsjp5KPvy7JfNavip7gBqQoUNjNtU4NsHnjw6473MwXpBDxWh24z9V96zqdJA5MB8w9uVm5Hfj7Xc1BaHDP7LC",
  "key30": "5wwEUMjc2qEFwdG8vhFtcwsbirNwWbSEYZNPrXLXWonDCSL8EoSj12pubr9Z15dFKd8SePjTzCWnwHcTByyLBADi",
  "key31": "22rkp3K8gtYxkKZQrXP6i3D8nSB67zawwMatPksjK9rXrZJTeGZ8wHougy3QEJnmKEP1K9bh7nBwPANSjcQVKwNf",
  "key32": "2Tjmz9JKEgYWf7stZMhK1DPqo5Ubg4KdMQCE2gTAw5f5fQR9umAcF7P7YLSzWXxY75P7sEwMHC6geqKv3QTEFM1s",
  "key33": "4Be3vKoyHDUcvPf5Jgwy5q2UdomzzrKGZJJ6fTsr73MkGLU6Sfzx4wov2zT2AyTPKub6uuiHdpR5uK1nVfeDEUxA",
  "key34": "5VMGJXkBixfXbMk1dPUdgTMbGGQN3t44p2kdvPuRYknWssUSw38syyaCTAwbRaz2KSez1yy5CKhv2t5hasEbiJiW",
  "key35": "5r3mgvzBFXitj2Qvq3YihBJeZFbvaECoxaaNEHHEXNPjfwyPrh8MrVFkHi67b2eMeaUFnHrr88DbRNpxnzo62FnZ",
  "key36": "3uT1up1g2a2kxVem18FSNxLQF3NzEGPZwnEpJRzVjo2pChhGPSXU816q6eegsvYrGi88KzJBYLD5an3S4YocYCWQ",
  "key37": "4JedGXoUANzqX9AoNV2V9jj1aTo7AqYoyNZGk4LLRmyFyJrTt6LoB5XSs8Bu6ov5byNFuyAQddYH6AkDrdYfnuD7",
  "key38": "22t7YmmKoRMESXEmkVwSGeum5pst4vuQXn3ta7kvgwhkbsmMKEtiP1YsSz4aHnbvtZi9mqHKDMp99jnw1Vb4CcR9",
  "key39": "4ee6KSy4DvQcUEXxJbRxNQf4bKzjAAorYWsHu7skQzqs9RTyofgEYpP8i5nvuyVFMvpfTRf5givdxmh8LLdwTkwV"
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
