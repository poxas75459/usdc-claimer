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
    "4cGt6cJH8gEFaTMZffPTBwy9mmLcnhodhw5eJ11hZaxmUMPbhb1y8WR8WRwBsLcfEDgozdQxtzzcFpeNWJ9M41h1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QnacQJgy55qovnyuDXt7yzapTvH6CH7kaXtW5BbNG4sZoP4mmou2tttmMTDZbQioJzvbPfC78E6uoiLMSCMCt96",
  "key1": "3wb4sUPcyyKHKdBLCqaeSqFbKna58DfgK2QZZxCtudL9h4SfJZHaD1fG7yhVq7hiHdhfabJPHBfMbfZHDzPW5YJC",
  "key2": "59bV4aHZie5FKDQUiALWJ92Rep1B1TegXR7k7fSrqCtvak2LSC98JB846RHV5pVj4faUbmqW7VTsercjvcWiHSA2",
  "key3": "2xPFSsncn8pPLPtRcuoSTn4sQrKwZPTZQkiFGF64TR7fQZgaBgmHSicn49r6PcioxYzXioonYuJdEBxWPfvobk3N",
  "key4": "3TE4H516vhqct5Dh1KS3wMHsuurDirzjUrNAKvHtGLmLAuPdYDKhcC2nNa18b5h253jat66R1A6cUA9vDfvvTc8y",
  "key5": "2PgRuXvAEfeaa9ho4gfsLaKjFS1itTnUymkffsRpKhEzcnytENZhGi4pFvHVqE5FA2rqhi7gtNPLQzJ86a8NXXeE",
  "key6": "tQ6FfBb6odqPGAunvLy1hUrGVXfRWMvxSSXVTaCx1o6KVc5qJsLeo7gFNbGSgAEtbHLcVzKGpe9RuKxLEaN19N5",
  "key7": "bd3yp5XkGwC1GpWQv51CqmDhT2tejRyxQ7coRc1attyJLWNYYJxVTzzxwiC2mNkvrgHQF492tf35GG3UvLfxfAS",
  "key8": "3A157gQMBU4hfHDxL72Zwx8vAf3fUd3a9tB1HeWvn5os1BaDW3CoKPP6D6U2gPXfBDTwgqPbSzA1mCkpSzgVRB9h",
  "key9": "21qYY11HhqzaMA3uEbMWon2LG2ptvVWBrPMJYysVWWTcc1xs195U6eaNvJV9ksVfAUEsAXM8HpfFF1FjLNGk16rp",
  "key10": "4yLZunSapy6JUsx27DJG9ALap6aQgGqV39u5RqDDp1HanPh9ErRnzwDvpYeqRcwwjAdKQoE5PAJjsHPVX8rMaEin",
  "key11": "2tMNzVw6J4Wci2DmfxUAuFE3Ckycq9rzachkkgeVW3vyGQbNMLGhP6Syi7rnVz97VGd2S4Z1esibqy9qN4rwVN86",
  "key12": "4XkjGcpk5aeHFZvTPfLpeyfMKW1RaC32tq7KUHLiJAL9o4gjuku5ev4JMzR6mTdQ2LBBqTxXsyomoiaBG3oJw4YA",
  "key13": "2ezhEFCTYqmQzkbpC4fDsuDt7Qnb67THpaNKx9wHZWFDUdaLx3m9cyWyN1AhTeepfjwYJAtXWfAoLrrrH1z85Zc8",
  "key14": "25bPfQu22VzmixU9nAmyzugaXJ9zkrccLL6Gvi6AvGWwRPAdd3C91zrSUFs4WtXPnagSj1CSDnn1sBvZs95JaF9A",
  "key15": "5cVRoa81aBjm55qbE7pfPNpnQiZ77Ec2rcS5buCvnfC6v1Efyzbo6ZJGVYKoU49xjmRxoZQFjajt1K3XhSitsaZT",
  "key16": "627SvFLCa9UEzWocwZjkkNc58UVSKuTyw5E6hGd91uYnGyZEZvwMtv2jcRVwBaDkrTBcwTBy3aLYAad8WJhNJGvY",
  "key17": "3QHrqFZh8AMWMdmPx43Lb8JXGDdQ9oLgH7cYounCetSkHsfHdGVQ5piWFNrdfdNMRTgnm1xtiM9wkQTWYGnXW4eb",
  "key18": "4uHYrHy46KCQQExCior8LRYmsR6oCvwoza4Us6ZdphBGFjvZE35HGHNm6ARKdPJP6w2YJdhbSWazNmdwCbUrA1kH",
  "key19": "2iu6tC5j635aNEV1vXbDKSiyYTDyEGKfPU3BtJ7LudZdpFyNguAo5nUEfFbEQMPKNig3MZ5QB4PJ2r6wQ8bzHWQk",
  "key20": "4MjStsqjX7ycayfBaUzm3S754fBMjaDqUMuTWkPGRVTMfxDqrfUpvAZWhJtFyeKAw5vGUKgWGx7xuCvvcu41sECX",
  "key21": "3FraXhTJzSwGE7MHYWSX7oZmMtUSExuD8EkusKQH3qDm4wzPqKLcKhnpt2u44PqcPDzztfpo8ss8Bgx7E12cFYAm",
  "key22": "4UWBe2tmomC2c8UFMNxqvhqu5KXtDZLV5EyG7bU5zQxwVaheVBqYzXYXHdvZo1qNPCgcojrMeL2U5iRKvc7h15pN",
  "key23": "5tE3xSUc4hpYG8bJUgPAF99SQEfuup4iucgzV8YYPc5aNM6KXpCFUj1UokcLXmPy1Mqej9NKkjyqJ3kdjkoNWxSY",
  "key24": "VPi3kkgubQ7UW9xmkhGaT2r4DBZxX3Aatr22iSzZCe7t14uxBpjaQK5UThwV1YBvSHCoGNnXcyRiCzNKnjeZBL4",
  "key25": "23Auwg8rLBiF1jYe1tmDtTSEoe8Za4E1G16rkkEjGqTwBjJyk6AcQQu5y5L3FvGwiFMmwm245WfGY7GcYs2SVq6H",
  "key26": "62zdkrcYWyRBMoBbFkbmU753yTVXYy1MuD3esq7QdHTj5wi9uEiZRBF5e8NnSH75FmX45SnZdGfTajDZcoqu2JSC",
  "key27": "hFmdY4aTcuuEXnsjLq54mSH5fgjuptKzQ8MUu2BFbKTH5cf2mcqADc7qfDBHydiDFheE1b3ceGGY8ViMWYm3nmY",
  "key28": "Yg8CAt1Q4zEJa2d6UPWdJSbJ3sJNhJ5CV58UYTVJjP3PRSK7w62Uv6x7VUwiezXDKUKdS8E96SZFzu2ecHZqUuv",
  "key29": "5ptTiQtm4qy9872JGjm9sEe1grT251DGMHXWbd8WdZgsTWUyGdctc2GnXgqpisfNAvcBeutkoucN8kKDtaULQ9Rk",
  "key30": "ewmJxKKUQERjBCjms1AUrTgf2TEn6v1g1TqMBsp55iKzGYs9qpvyuBVsardoefr1iY8SGtwwWtHVZxJ3ypVU4YH",
  "key31": "4pEjkjm1k3J33pBP2VMP4ksushaHg1YrVfiCEBAuHSCxKSmZ4DkSJnQdwGZSmH3XL6wYcrX1t1BRcXX8be47URSc",
  "key32": "4eFsaXM9eb7jAGBCTh1Va9HfDky3HNf2dZYkR3UiYVqBbDe9HisoNAP3Ho16TuGLp4ihGEeU9zekuZZgMnJ4u7nU",
  "key33": "2PhVoaFcmPaLMfN4JmDJKCwpep4w6vZpSXy4pfCC1ngL1iWWqJSxHiAFVjU4wi85NsmJPBNs4hjQPa3HS4wgeeR8",
  "key34": "2ViZJitMjzo2nLxUJy2FHMmcTduYJNxbhdDcdANMpjYoR58bS799LqVy7U6qqX9gageNNB5QyijpP8sFsoNuVWet",
  "key35": "kUgoPm15xpf2qrq5aXsbdJwFE9Yt9Ak2YDGYTVCtfCYvZyeivJW2jst78GueVdghhUmY33dVaKDVkSr83A8AtMN",
  "key36": "4eKDEsziQuwvLNGkzLPq9QD1uzPwkvYSKzC2WXBUrmeWHC285zFdQJk2HixFdZCLrSJru51qzwspjNUQTqkJCgub"
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
