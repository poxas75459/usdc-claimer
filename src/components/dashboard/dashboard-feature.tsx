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
    "2ysNaTvFZ1YaYFsuzXRXCyyfaVSaAb8NZkmX7s7VShzu31m3Eoq6vyKWyVEFXL4vvXyEJsPdx7M6SwtfcYU8vjLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpniTWkVzar1fhQgZsFbV3J6y3htQ9HiELtH6qV4tye8Hr1aZ4nckpSPsxk2JRz1vrPrMcwmZBmqgvaqWGPmZcD",
  "key1": "2KjUyitjkdhtvCbT3Fav8UhyyKEhBW7zZHHvJDdNtTY7nqyeaP6UcjT853e1gDz9zaqDKTjQAKpdDc7LgV7kGEyJ",
  "key2": "2496CYYKSr4GxgMSuzKtx5sECY6SfHg8BRmWFq7UdBSvFik5mASLaPNAopopeWoo5d58csca4opM4jtPBtC1qsYu",
  "key3": "TPPsMxq3GKEbhC15xpVM4LYqvsfmj4TxWCDxb9uiJEXEbBsmjE9DwZyFULJ66c9YQ13GoHErd5YKvwfKAXpdjQs",
  "key4": "5tCw9MdziUoBSjfzvi6LmDXbus5AR7iDS24k3oQtpB1AXDq5ZaR1ahVecksz3sK1daJdxa6dAWD4bVyYRJk32A1f",
  "key5": "5ehgfkpiartct2v5RQGC3UXhX7sqJdPpx3eNN1MxCGtWuAUHTsaw1fKs9fkPStkGmZ7nd6QfEqJuxgU76FTh7LK5",
  "key6": "3qhaVunEJvRzkNYPZfp2TEyNtYmHDPC93kNrz9d4cUkc1SM7rBZVQ9DNeW8VK1BUqPMxCytRN3SbVSpmqNTDnbHh",
  "key7": "5UZxfSQ7nnQnmvHmWybsin3KJ76PdtiWVwF2mXHrVTJ24ZUoTn5skohvfBX2zJwRit4Bp3RXztJ4FYwQsu8aNXmK",
  "key8": "u2LcoFViG4p2RPP7pYMzRSh5wAWBB4kEJVtSXmYhNLjJ4zg3NaMzJb3sNZ9ke1uFh5dARZHFqwnqPttVwbpdZwR",
  "key9": "3BkNDPMDM3zKh2btwxs2wRFJ96Q1D9pg4m3Vwjy1mNHHAxwNfpZPMHeJWYSJ7ixQL87YbPpyypmtHdVaFzQBAFeA",
  "key10": "5SrRy73emwUYc5kxHFM31Y1pFf9dcSB2GqYhBkEWmhLdd8wsS4L8GYBz8wMLALMAs7jacr1B8exDApBc7ZfDjVkN",
  "key11": "3iV5XNKrhL78wxpyixyPFfX2YYtPVGfhWipffsddvDzcvDinz6oSae2Fj9gLnxwMxQ2Kba3yv4urHidv2PBTKmfw",
  "key12": "4Bj6zEYNDJvVq5PUXgYeuRPtmkfMA7Q7rtQ7A6J8bEkKYab4vN5a2ZffTqmQZZ5ut4itQ6xAAuCuPcPre9n71vCz",
  "key13": "44vFFQoLMubdBT9C6Akxv4GpLA73APwRejXNT3tBcGPnMmRPgAtQWapupihWquGH43M3UbZMgHU6yBtaKzSgdPHp",
  "key14": "2nznf8TixPLc2UoBnJQXUCZiMqS7AQQWSMurZMX29Rx4hbwMvg2xD9rbmGEvwdhtJX2s4SDk8AaSpWarBXnPrSNC",
  "key15": "3w1g4fgvxJZuibi2mBKUZs4WeE7LTrzFJ3DRY74bDeaKbM5q8RNAhfLTLLEYUtAuLkpzGXu33xZ1HfonKzCCPJ5N",
  "key16": "54yAPXGSmP3W3u7Zkqe3dEiqRxewvj1Up2BHFnkRpSyTLpZJtvYxks1D72VgrEV8rSWzoQWZkdgVcHZzXkqBuUkd",
  "key17": "2LqbqEpZGxKxiewKGXSmm5NaK6fyiP3skkhutAHdg6fMQHyjctYZBEuQ8QLeimPNP8SGVGEcUpywkMRdAyw66WX4",
  "key18": "2HavuCiVPKw4KqeZPcaBvtwD4kNPtCt4u8G3jTuQ2SpaQxJRzkGrG5jv4kR9NNRrtKJXeTfBsGLfm2rsK4D4UTwY",
  "key19": "4y47U5S45E7Xhm37EYEMJN1rcvigFRxLhdAd7AbrH7KVLjivQyNdB9zxmqZhk9TQjrit4DogKdhbaqeGTjA2ASsH",
  "key20": "2ejfuG7PDKhVDV41e5cSEcBb4veXLVuzsYakmCqFU5qF4KEXdUpnKy6jG41zRew6j3Cy6XHxf3tEwycRVMfqssdT",
  "key21": "43vRapv1LqJVNP7iyxpbFVV3F8dGYrKwrJbv4MiuwdGkg6bPsMGJzK5RJfUBnVvKq5uJtct8ou88SH88LJejtgog",
  "key22": "45HV1L47i6ub5sC162jMN3FbtyLqG7tyHtzeanU59yCf3uCDLTRUPPgQPJwvZTrBRqW6gAdxyxifvfy3sVkJYdG",
  "key23": "7M2NKsjCCQgYxknKsjctJr2CRkMWttxcL6nVLW9LDZe7rh8eueqbn6ogQX6Cokwz73VxDUkFoEVYkd2LNwm69Q2",
  "key24": "2pSxbe2bUgysBL2aeQha4ddS4EjEHnUjXiGQVCX81EQe7PZveGTCmnrFs8ssq4zUpFB1KTpQVRxthnsyV28cTcsH",
  "key25": "38pxgJetAeC3CU5pjgRbitmdq1my5hKnxyynYz9hMhAEfTAV4swvwKXojb6DmoaHn4sBDnHtAVE5XcYKwvk2axtR",
  "key26": "4QCrsh1qaxJ9QCEnyxtQRPWEt9uiGUACGvs2pNP1vURoiqV2bsyRaZBcsW6iceRQc34kG8P94PhxXTfq6scG5KaX",
  "key27": "5keZGxNuyDCGpXKCfvYgNhnwU9eD4JkvR6A3oGm3NUxTsbcCbPSwDE18eqUU6rZi7zyKBtAmY2FAt7xrm8smy3Xn",
  "key28": "5Bj1h563XZCUF7Bse5YuQktBi89591EW1G5uKimHty935yaNNBV1XYAqQxfzLSDqaJfMkR3Xu9HMCMV18wg2CUi6",
  "key29": "2HGPqA5ejBF6tpcmtd3pPgiBbxcVTJi5uFayu3sfrfgD1BTf24R44z6A3NdH7KyyDEwtec7P6QSdi3RyVBA54ey9",
  "key30": "4pSRqtS4X4dUvgiY6brQbaA1wTrswTScRftZVJmGsRmn1sbsmFoiHHPBUbBVpGWSGddMSzwNohwcgdMPNg2B7hAz",
  "key31": "5ZLmmwch8kFvVDhGDhzaM71Bk5fb2dRQWNkkV7VJ3YfbXRf21gUbE2fg2cLGq8E9KrrKydLps1J3AUoWmcavpbZz",
  "key32": "cZHSc4LwdfQUTGeZFnnaJtBbNtArdgmHQSUvpUj5grGouzrkcgfnEE1XgVBihgg5LRmcT4eCkqPQ5rkZ1Jvo5xv",
  "key33": "5RSmw21S7UnKxnNJYxjpCdFnSjHVSkCyBTjEVZjjVtLjD8UPmALyCv347tzjN6L61Ei8xUkNthrGTdGmNzaVKEB",
  "key34": "2qxouYfWDmEfSM5EPohkyNudqn7VwU8hmWc7zv7Xbzjo4atKB2cgcSZw4Rtv2HEpSrL1QB8LPw3FTwXBqNHPCSv6",
  "key35": "2boUDkk9UepCzRk6VYdpP9zZqpRoJmkuJ24dhJoCmRxBBWNZRfqaSQ4Aav4qD8o84dXVQsZtgb4vEt6PeST52rwB",
  "key36": "3BUb79KKroYb31L14cZuwVTM7mSKdXCWEDjLyGTMvtcamvS6bUwFhnJ8pjHC8H7efUP8PjNYZBLrBGKB78qZoQh5",
  "key37": "4XPKEtPz3B3FntyUweHTAnBUwEWpWrZkxkmJCLfMu3AdgNQ5Lyu3hzxNyQBrqQ6wD8SRVurczwCGUjv21gw7W3x",
  "key38": "RemoUFJPPxK6LwaN1VSCcm4MNe6ttXPPCVxLzZnkXsa3mBxhWw7BZ3yguargY9FftjBogyqF6usSxFPfm85pKqJ",
  "key39": "4EXN9pAbF2hmuswx31DxhgKHq7WUYbBFfxxTMC2d4sEdHcjCVGWjRgpzmhn7gkuJaS7h51Q3mtcjiueRWG9RNBJ8",
  "key40": "3pFKF7Rd7R2fzFikqAJNNtkKdoyzipdRVu2AoK7yuxFP9B4TMJsLU4s2A7Ybs2SnzvvMABM8Y9S9TgKGhud8QxiP",
  "key41": "3b4WAn7Da9pPK9LoJ38XGSbTunYBC9uboJnqqBQRXaESv7c8sB3aaSXYvFm23GGq1AT3VhSkZJNBXdzWncy3AddA",
  "key42": "2xYMuo29U24WqSSoXV3z9jYDMnaEGMZyCcNQKXRpGxha2Ps3vjqsrmih4XZfri6LV5p5KeLm2HmafR4RYYp1qpr7",
  "key43": "5F4xbsN3oo3Ki8sqNaLRvems2noRvM3h1FpiLn4KK2vACUMwkxXDAdoRobwZveVjXzCkpVqk4NBxdp5VfsyXXeEZ",
  "key44": "56sq4wycYHz6vTVDLohScVnvFzDyePaV48BY85eHZA1FGALLhWXPKm8SQFJjWMcgHqxsj4DoGoUePQmgAryxhkHm",
  "key45": "5kiVcU6zcjoronYnh5Kq3Zh3bGzLpb3VS82QRXvsqCxSXU3ebcoK37g63VMCPFgPvHA5phiMc5tTZEgm8DXwFbdq",
  "key46": "5Majh9pzSbSuLkgLwCaj2Jdwf6yCGyPwKBa9S5X1Cq4gh2KXSZUmcSxWzUq292TbuU97wkMh3KVJd2TnJCkeXLJZ"
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
