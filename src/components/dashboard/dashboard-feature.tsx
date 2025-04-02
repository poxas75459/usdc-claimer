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
    "5SP82vQqaY9RpjPEGjCz61D3JqUsQ2cscMUyDrw8nrcHUwauHLpuGgkZtDcH6Z81UdauMcixjBa381LSCQgdiR2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvjjTXA9hsbA57Lh31uNZq5iFFQy1WD8QiLw8XKPADKDoN894o67RtVgkMHvqEQCKeGwtcLuHoCf92oNBMRNtFS",
  "key1": "65bm6D8QuZpyAjqwakSG3gCxX5RsCMUVEps9wjFXTwsXBnAvtS5Y2uUURrcLXyz3N1r4yCe2WnXf9VpwUtcCCxaF",
  "key2": "3nipRfQi564CX7vCKPcUoiuSFmPuqz6Ch3gtaDpwcEUh1xcmb8qdkBSf5jcHMoKZ8xhtmxhXoTAGEA8hbwEHnu58",
  "key3": "34oiZcoV7Qgjey2QKnF6wKnfBaUKcazNoj7rThVCx4uHsVasxHFGCPwG2cprKxcAyPUwrSXZfTXuBTMDUNpDuJyE",
  "key4": "5jHyLhCb6FLKe6H3NmCWW4epbpeiUaSYmHq5SZzhKB5TPEajTcWg3n93NeZg3UTh4bxrCq5sXtphht9LfcmzcNAL",
  "key5": "4PnejcoEBmfvBzYt7FCPNmf4vNz4krH863UGuEPppTiT8f2xBwMoTkCKiwVXAKTz8KQBS5CN31yYNQSXtAuNn1a8",
  "key6": "5Rj47YF4aYugAFXm8j1WkTR7su4xePXTeGLRk71jaLgb5ByoToAtXxM5yvEdBHtWVgya3FP9xa6D6yKNieFwt45p",
  "key7": "2L6mU9R6MWzTCtsUS7MePJZAYZqe3EpBYa7FH4qgURhjvcyc1vkMruBb3ZtPyQKxS8XnGffyJ7bSEZvPA9592vDU",
  "key8": "2436oZFyD8YmayMiA2syGWm9T2dmrdJnhJ2NVeWgcn4qkhqhFRav7nTZCFcgsaDBZs69her5P7vqu2MKkqbcrJRw",
  "key9": "3KYvVtAciDRJk4w3h7RgLc9E2kLRgohMwnmPm32UQVUAtoA5MT9WkNkxMrp1Lx8445jKyDQE5eTUdB87NvcyiWaJ",
  "key10": "4fSKH2YgLKZ12BEexZwQwSvR5UqKqdBnir96PucDq2TchJvHf4AtSeZkvGTZuomT81XNiUDwf3xiheq2ijX8rrpf",
  "key11": "k3oWvs9DLd7pmDBcnRLNWn6ahWroVjrNZbbaoUcX1LBa5sFbVBfuHAXbUSr2scGsiGZJfUMw3MU5HTsfEnhdmvn",
  "key12": "2KbbcCpmybKbkDiP6sFuAnmDTtboyNh5vy4hZBUJf5D9MEwKuJpgqhVvYzsToHybNkD9zWRKshVSns8NKxoM9cwA",
  "key13": "3eZ15bcNt2kZoTPyZgHgrzDzZs514wmMqeNCRD4evusMbXYhjUkzzgj6bmuUerUeaDJgn8EUU3JpFSAKi3tMXUL4",
  "key14": "67iBi1TDJgfdWWx2Ycd3UqzhXpq9xvcUMi5TYki1mxBsbwdEj2TazU4ESe5NLrGFBxkwPuJpemZo9hbuXcSfxFUT",
  "key15": "AHyPyivQrSQNJ9LwzGPVPfxT8zES6CMgavxuHqno6ghgjsgAMVdpqUTzCwtFRgB5PBxzAXcCLNhMzRsChf6p44e",
  "key16": "e6SFe746LmQ44Yim7sFnrhsfSoHD2xfjNwCdXUPAJbRPx7i9asKWtUjgoaShFfAs3hqayrDaf4NtjCZ7DbPEZZZ",
  "key17": "2EofoHKhbcUnePxiAwD3kkAw2YWWvuMt8PNfnPwE89Ty1Ct6Y2ryzQBhwbiC5nXn1tMJjcTYSAR7qDQjN8Z2rDHg",
  "key18": "5Lf73ywmxYDutBx4N5uLyQ7mVtVxQkTya16CBPcsPkGgr5PnBdEP13MLWMbP56Bvi5cGVHk5jUUo2tcZzk4di4mm",
  "key19": "tJQxwza6cQCcppstssUCTcw43sDia95ctuUtGLPZ7gSvCiQkehLq6wvLgcV93W2G4KzLz86huqCM3FVp4mE5zxf",
  "key20": "5TPYo5tFy3a5k2LU9FK3MXC9LFQkP4tNqpsFbmfizBFynPz17Nypm9W8RihwcMepgYk93KXDnoExB4PSHDVSjawo",
  "key21": "MqSgfXpWnAbrHARShQyCQYj3cUbP9o8887jjrLDe3X9ZP8hf1FqYFuSVRFEa2VsaAWgXJDtaHEEsABdJGB7eP4a",
  "key22": "61ST6uYo7VNJLtnbRBuFUEZMadiLWuDXoUP4us2Zs2Taurhr2Hdo8VFkicyrmt1HiZxjiusVcgqo3B52K4bjWtDV",
  "key23": "RBDSprvudD8qfwmGvmwGPFjTjh6qsSYKCati9fizuoPAf1t78j2YJgph57qq4QpAkpDgLgkb8jZs23bdFA2QYes",
  "key24": "rhPHaboULbkfwMCgpd6WR5KAUqGYYcpoHcDYRV8pMwURUVdu7AwAeLVmz8LSEdgVeVRDMecwxNrVuPYM1mhcBnk",
  "key25": "sNwvzc8axzqqcoBqazjNGzdbwTxiUUBZPkYXjZefVL8p9NGYiTLHaAc4FT9h8zWR1gjjazaeeZ2Vh8fpwLVwaZD",
  "key26": "5FBgWY6bSB3swYVx1zyP8YaNVhmD8G4iuR1U9vWx2DZDjzNEiUhxNdhMGoMkQikZcLHzXoLS42BV7h6q6qRDdA26",
  "key27": "3H8TqRrJoGTzvAmRCgUPZ9PPieMZroKbv9NiNBbHh1uXML6cHpVALP4TLhj6zZ1yvfvw9puBusndH7ngsgZiApWy",
  "key28": "4uGdF3QXQ14Smhfayxsjp6qehG1CX6P8kZ2VuD6XMekxNAjmXsRcwyEC88VskjVQNVhDK7KJDcsb5gxaa2jLyziU",
  "key29": "41WxaYhD879jATwgK1kyTUyWB6AGaxm3zPdHuzTEhcNRGkwQrd9WxyRZkdZizLhNVoMhQcktKYaBapJYW5j3Edv2"
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
