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
    "3G4oGgbxSwiUQMahHiqUVCbtGqXzE4pEFtQiibJs9EBSaLkapmRJ8Mu6sVzf4JSATuQhGmfgxBNTvwVVNPrd8drJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZCz6Yz5n6dZFPXd2YJhuKQoEdxu663fnGAeNDU7AftqmGLGJSR6ZTFSDbYYcDHsoa8H176x4bqgW9QkYAUPM4N",
  "key1": "42XBxCspz6ewTwFJMPM5j3fgs62GU1nrmfgT1k1P33o9ZUgySzddw5tehc8xS34RxmiTxVCdUZQGtdPhD4AQkVVy",
  "key2": "Rszz9NY7gf1SpcNeK4c9rYugdy82tmUpMiQc2YkfSJ9umfts9DQpk6ucqrbECkezqMDoqqiRTTxmSo553PoQ2Tg",
  "key3": "3t2MCqj524PHR7qGjutKwmEgnkBbSSZJ1sbgrg5WH8MPW9iYCFpWx7yvVKNMGshyf9QRzGyxyJDnRv82mZiit5K6",
  "key4": "4Xb8Wdf4ppvhBfksH3XbJQBc1j69VttseRXJq7SWPmEd3zr1TbfEqkJsPKkwk3mEizqBiqcHgWVqssoJ5r5HhmLN",
  "key5": "2TV27nbxuwnsJTyjLGEso9LvEm42TBn7d4hxqRvUyVRAmMzCn4iJoFzsnkLr2934ztfT3RzVWXSWNJtguCHvbBqq",
  "key6": "4rwbicg3WadkidPuMHSmwE3qBtXnokA2zcNo8iKq5rRM2pHaowpCDpcFxcxGZKoJrmSKfD1GVgp8vZXYq1oSFAfP",
  "key7": "4z55vJg7jxaTQ39vmXPP9DawLg5q3wKsowAVEwJMUgfH7PAtpehm4BAHDekxGbVPx3e9fGyhraja5ZKCuzhCpSwM",
  "key8": "4wKJy8Ljz3VkWBbdjtEHTRJi6zgjfrfXs91ovVEp7wGL882g6Un4tQv1axg52UrFpoXRx5oJfm9EceELz4Gd52h7",
  "key9": "Pxc6F5DxZ53P44G1ZHqEE25asGUhLfXogGot3zWNpZ7XpFyecWgdd7jGL1mqnqCvJX4UdJdDJCCXmXSepStYrRP",
  "key10": "3vJZHQv8M2vdkNgzPHWYYGZnML3Z5Fh43QBQSruKiRZYqGt8aS5BSv8nbJ9BamxPaRkHxvxh46rt1pzPemeHgaNQ",
  "key11": "38wWYCVm6WVRoftgDbe3CpLUEh3uPJoMktXuW9DW8XXxYeyJWKHm49ZzwXhpCpga6ijtJE4As8hioiUPs7XoUka8",
  "key12": "ueaiKw6xrcmBLAQTT137TgJezrU2ggMCt6MbB6BtJjLGJdwhrxj89yPXhR21LUie64PcgdMYJABgU9oqTsktCph",
  "key13": "3DCDrAHEMQnLxyy8HTuVrH5zXrdJHAjqXnKJg28QS46hDpbedy7fWpSsu5GUPjuo8izowbsTBTekRGnRcZRqqQnV",
  "key14": "5mMu78U241sP1wkV3ds5wGs3bBFFcfU47cAWWRtaAXPScJPERfRo5MgykpMxdLXb2wkRAibTJuZFvh1w16HLbSTZ",
  "key15": "Bu3j4o162nWVNFwdWYYzPpBt4HZFGqHYty2SGUMESciip84u1Yd3NykP3UzPYE7yU4BNotr6DoRA45UeH9GyMW4",
  "key16": "3Yctmo5G25XQXKq6htCTt6YmmpFih9CyTLzkHYpcresTXLxs5MkYsAKk4veyea2b6CSZAztdd93k49mRWyQXSmYG",
  "key17": "5r2AWaKwxkHANub3LqZi24gi6mRvMUXTagTAmTKMk1yFuHpzCrH5VhsAhbMZMxfabNsoUf9g8dSUMgZxu3BnTGP7",
  "key18": "25m6e9jJBF6sQfPeLt98gCQf94JirkKHsqCiaKLV4RKYNa1EToFEyd4GoaQeu6cfuA7bxorAWZJ1wmYBUEr9Y3gu",
  "key19": "4xNEpvFq6649EDG8y54QXeyvurRRwZV5rocZbdgNxMzABW2TL9zusW5UL4F132PUuLZq8hHQfiEzGqAD1DbxPxHD",
  "key20": "51WqDtyEJjoJ1Y6jUBqWFDscz6JPSTntUCcWxEXAUPRLBbgtXWsyR1eYRosoT1WMptBrw2WBj93aygfHrsFoMBKY",
  "key21": "4htiftu5FDM3wFdE8Juz6ozkPoKtz5wXxt1o8ewD2pXwtf4J5fxgU6NtxY6z9A9GMiVziW6Hy9Z5ydKJdZRC6k5X",
  "key22": "4QPw2a3koZ4HcdxgTyomPqVszWyEBnBRVrW6qSUUbiqqXYStHVUyV7pHaK6ZQCwEjxuCc6aPnSrzHbYRyEE9WBDD",
  "key23": "qnc741xXijheKxv46zPQDPQPSDccpJHCGcsUwBJwYLi9B4tqCLGdH1eaHftEsu9J5QEV9y4cdVTJD9Quh5xqCvT",
  "key24": "3N71yeDEeUrJyYwz6dUeRbSLqAPG4ppp9cME1YUcZe8YGmPbXYCAb9nLAwHHSKQDRSaphKDNFE57NH6yahNRkQe",
  "key25": "2YWjFutCh7aXof2TvnBFH4tK2au4DkXcgvxTxUbH9iEt6uxBR2MpD1yUkVQ2bQ1UhnjSYztRFyFNXFJkKcGdd5Rs",
  "key26": "3e8mUGaagNg3Wjt4CWiLVe3B9XK5EF88B3Ti68F9Yqdq8nCXtNkZBZ5WVjbrNnYHCoY8Y4wqS85V6UGYwTiLCUHi",
  "key27": "2QTkB82nRrRiMaukVi6h3Z5xHF3SzJaFT4YjfBZvHPmJXAm6QyruVi58nd2TwQNYFwAtti62iPThKu1Jvvs72rx7",
  "key28": "5afyPSXERcS1cMzYzoyJwyoXTSe6xARWntmbRX1Aou6YbUtzH3njNQ7KbEsyNo6GN2hG5UM1YMoNh9EMYUspgkaa",
  "key29": "43B3siWd2Ak9kwd4ctuF77tMWq2KHbWEkG7b9BnbjLMfqg7HnZYV7gECW5ais47p9aysAexpdoEyySq2KwtLEpPW",
  "key30": "JtZ9Dvd2DMAjjiE36tUEYWFeEDBsaF7P6dJMYpgM9EkLoYfdZiMHMYCVJjL1gQpfY9Uzz4dp9WKh9WZZTt9XnJu",
  "key31": "FRv93wVueBPkdFrj2TmXvhajKvTSuusezbgHzR3G4BaFqGhXtTgCiikfZw2m7tnWm3Tu43cLoDVS7M319JJCqoV",
  "key32": "ERkEGqEP6RonkvU3FhxCYRXVSXpENSwvLoHPuWcDueTw23LivJuASa3j35UmhWG36uufAxps26ZHYLm47DQNw5y",
  "key33": "29o1DGSTcuQRdZ6LhMeU6FXV3JnpnTwqU83vPCYottSLihnSmCQYioBip4GRpDQtZrwHWvw7LoToBFapDWHTcPNo",
  "key34": "5HXyi6vobBfbU68PtiMLDTjvQzikJeMBi9nK7oMvKqQHtJ6LYNbryoNK1oCyCM2z1a5uT7N7TUvqxC3r7GsauDp4",
  "key35": "2AKDz6v79WwG3QoKVwwLmF6NtWBW1WdbmdY5MmXcMc3J4vz7vJJ7RzSngxwzgrin1TArYskWcqvape7JN5FGWa3S",
  "key36": "4uRa6y67DUuQfGA5N3B66yZKUcWLW5vdJaoWMmq8NgibGCmBqTvmxbygWuh4x2eUiinWpBDYm5gWXsPtN9pVApM1",
  "key37": "4bbUvsCXJEe4LeqSaPbjtiHiuVxHoSKNCa2rxBLsdTiPH8jNiKqPQQeadTLbtJ8XKm6HTHVd1aYW5azRVWSfSGS5",
  "key38": "3HKA6N4KaYrDCvhZPnvwj6NmBxy2Qm4NjHJgB16JhnEjTmktVKXAjJroRP36faKAdoMUi4utLCkMDYoZichqehe3"
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
