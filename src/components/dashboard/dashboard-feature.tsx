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
    "48MkKTqMvLNMuApkZaX5VpsQeqPYFZ1odvV581C2H1n7CNBTUpwQbMKNZucjqfkDWBZftm4BxrEpG8DgXU9cpTj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDyW5qYdC3XoPRyrDHtMafWJrFnNgRQFYDKzbxeeA5ybZEcNqVowWkUm7xo4MinUKmDmrQvuKkLgCNUNb5XBgoK",
  "key1": "66XX26jDgVqo3NNtsGQDJQGRAhYgQqVncRgQtLbL4sfHsSb9bpyY9eXiv9TXrA2WrYhMFpjWV4dxP2f2NyjpDyVu",
  "key2": "5CprYUWiAwi4V9AqE9WM3PC7mgoAang84GZfS6CH51RJj1p8L5pizgjPgbw3huKBLoayUhwUkSKrMm7iBcTZiwcY",
  "key3": "HgzV3xK8cEcoBW7V9MhqeEL6pwopxrGu3def8BcjjfcpFq6CQTfxfg3jQWzX3tGwK71TuiKBuMuaVQbXb7NXZhu",
  "key4": "3kjziMPNYgLEQfHWnhLvn88xZooy4MWxNa7HH4RGpEcgMFmBWo1tRzufFBsXCaAMwX9Q2kTSooQsujrqm9kYMrLA",
  "key5": "5tZeyFAdtFogSkKGms8rhtZzFHfQ21x4reCJZLFXUPQA3Jax4PPeTvUweVKgLHV2VVNMnM2Ln1936i8sLvgG8i55",
  "key6": "KVC9xtGnLR6vS9u3wxQL6i9ro68Q9GUhgfkR9kwS2pCga4ecuXT4i48N4bw8pauvyizp1eJkmtoD2g3Bg9pimrf",
  "key7": "3svL3SupwfwUS5ZZVRs3uhp4NFiBevZADEWW5BoYLY8psEtoj81qa5vwauaD3XP3JsvT3V1GHr9BseX2nMLYv2Fc",
  "key8": "3eVHFhw41gR21MnXueM6msnjurMARhc51d2d4ccCZFeYprHFUx4dxyxqpZC7VZXo1JhjosvfDLHkCzAu3vrWr7vp",
  "key9": "3uBSUUh5WBgKoR3TFdk9V2XWySooyW16hGQMhiaRQrPBnT6UpbvJJthWVxzKEDJLinT8zMRB8K1PKGP7aknzv2KA",
  "key10": "nx3yUwSVxsKrRPbkmQzBjQssDrxtEAj2Zmh4JdnBvSKHAu7tVSqALQmDUEX4NGTbAzAGi9qCUCSf8d8wGx6Z1Cg",
  "key11": "4Uet1p3yMxzRrAzW1zLqzhJdBVvE5RgkKAHN3fGJQ61zX3zFVAXpdGujs34Cqnr1S34dScmEH5uwxLj33tmSmN3i",
  "key12": "4QtzvmoGmWejdidYn57xs1ba5geUmhM5BSeTG61McZSpDkTvuWX9HpyngDhDuuTYxaeRVUFcHdYCSaQzY7vJd8kb",
  "key13": "4mBg17JiXZKQN48a36nKgEdMVDpiyN9XS5tR5BLdxnHNFCmYc4HcxYT7DdDnTWj9fhd8o5i4E5pNeUrVShNJ17Zi",
  "key14": "2RYtV3vKnfUZAfi81GJUra8toT5suYK5xAW2Bxdv1Xa9dZ8JkEEKaea3Jgb11FjL92U4pES5hnCRTg4xEJyRWSQS",
  "key15": "4UJ6pD9rAr97g755zUDibzdxrY4UJgzyfpxXevWxWB5s4RjSLeejvRLc24g9zysaMsng2wiPMVPwf2ifdiFcyS9G",
  "key16": "4Brd34P3PzyRPit9muPPunERgbs9e2sBqz7kSF5FpzDcFrVcaHzwfsZ3WjU88pBvHviWAWNzCnJAH4StjhNjaapS",
  "key17": "o7HXrLufAuwiezNHnrM45F6QPp8kRvBdVRsbeYBLZcQnqCGFQXYAJ3PsucVqvL7geSvmUz2KNUfxhBkGU6aXEJf",
  "key18": "26WdAbFeVGY2SBAMLx7tkxDbv8JK4WEjQi9Aju5bAfJ9uYF3N7jGCbBm4BSLPXFjENVWZj6eAtPHm4GoxDoZjXc6",
  "key19": "31djwsVPyKoEFmrSwtYBSr16TmUQj5U2P3DZ6KM9SQgDJKLyC5X5Xz7gMNfWcrxStFqK1WF91zHCKHVbsEezdBPT",
  "key20": "4hGDb9QwoDuHBg9WeNN6RBjsZXPSHpPTzPhmiGeQhaBJt9b3wTk3KxUyXbCtMKEuPN797PP23No3e7gJbZqiYW9h",
  "key21": "3EVrndYy6RqZnFezbZqJ1eHUwmA9dvzgf9MvpNptiXLDL1PCJxLZmPGTPqVN2hJV8sAcuGaGwUjtdUYZ8mbidMZX",
  "key22": "3vkykmEbuC6CmjtwgfWZCgXipstKvAphwoS1yxAr16QXnwRrPmDBDkR5mAfHVRZxrTYxLyGuYxbodmB5htYVjaxh",
  "key23": "4sPqgTtH3wJoN7y3AdTPpsCFvAppiqERB7aP3TFvusy1KifUY3DGJQ3HXTxDe9BSuYXnaYANjZp8DjGdNFngiTvT",
  "key24": "3QdLe7edLK2A2RNrkZcAreXvdB49X6dEM93W1i2qhakkPXVcJUpLVK3LhQgtEfAAHKJmgvWmJ6bbT6gh9KJG9TyR",
  "key25": "2fBb7QFqcvMtSKEeDETKb1JZLbt6yiBGuLCRFsQoo9ReGi2qFWzDcBCxishMMsn38juzT5a1EFo13ZjALVDnnKyK",
  "key26": "5c9EZReKZ1Fp13w4fSghQ7BaCvYJHLjDrqnQyJWyK1KxM97ChtB2A5WtiDzcmwdXNp1q4rcbiunZE6oEcmrfdrui",
  "key27": "3YaPvZc7PrqNY36DBUNWWixmKJdQwLevnWsUsjTGw4td2Tzvj6a9xsJzjqKPqPzN75spVkcWBpfRp4FjEjgyWpAA",
  "key28": "3uwE9GmPpYy77fd4oq5yNUJyBrWKPcAPQJMHN2hAop1PFiWSYuy82EFVytk5pDgAmTFo1opi7P8YGqALrajv8UiC",
  "key29": "5ewmy4D7pDeMHjKre7H84v6eWe5hUE6DT29vBJgDdN64c8DspeEScjVQX8WYkFytSsBHwaKp4KGTprFeU6Py1NqK",
  "key30": "3pcSXEgScwDmRTqeVm13dnr1YkCKi95DBvh7to7FNxSC5tnqsUEZwS78tcbazbrkguYxik1EismYK3r43nfRYyiu",
  "key31": "2AiwoctHsD2KtJe7jsQxdnDNHMKUd689jMrSiaFzY4CBNaX6x8bB9b5dMzpuA8KKw64iGN13rZci8cyYYPwUJVNL",
  "key32": "wU3GW7CwQ4rKBKUVUnWL75mfaqmdCwoFmQ85K91n4z6jnjxzaHfLKwTGi8UcNc55hacR2pyQmB6gRg3Uex8DAuE",
  "key33": "5Umn5St3grxXbnhFFXCWz5Ff4SCEKTPudFraDF5wDzLwXcuzWcVL9hBbTiLFa2sCYNBodJkwVzsC9VbGf1dDDmgU",
  "key34": "jWUULb7MZ97RGjGeo6BS95aZx8EdunfH8gRgAe8W4prpYs7hH6SNL6ry2izKmdWuSUAevKnUXs96iZeugurdHTU",
  "key35": "2ZVQYdg2Gz5eVpcE8MZtFYWRUJ5ZM6i6qnGL4uJm4Twa44xoCgzyVTufJqQk8piR1W6NpUmhQWXiGJ4UTPbuXSkX",
  "key36": "25eNaKoUZBoygKzWrsRzVrqq5mGvPTwW39gZXfKkdEAb3xbncUN9h2598kqKdHwBVWuy9ppd2jgSpG4snRN4LsKL",
  "key37": "44xfm8fasm1AGEdzLtQiMrCNGGS7dKHvmiCdG42KgMowLeA22AHoLqyCPgcY7uzDHzpBMhdMKJ9kN7XHaxi76eJx",
  "key38": "3PRC3r8BKDLxEJax2MXdCuFiDe3kEMtjZn25Mfjcs4WKYFfzKookA1A2qEGPQ4ZvgPvh369fxA7WP6LQKebpTcRG",
  "key39": "57MeHugA7hjYU43pR2dqHWx34EwNwnGhq78SnjGUvAQo3xZRKTsqrtPHgZJreAuHM7s9gS1xHW3emMs5iz2PxTqy",
  "key40": "8Ru3BtunrXz9b7L97YkQtCXbYSFQ7pdAr199kYvmu6KD9LimPbShyqme5pxq7x4Z6Utd1qNPatV5o8sUVanTXrn",
  "key41": "5XGFKnKJBjwbDzpjgBq316fafa2MrnjFd1Sv1QoDXq55Bi5thbtRZDcJrvWNrRsuaQ5wJxveyUUQc8dT5ZvdtE2g",
  "key42": "2ioayKZ3hRWLLFeJDexMjWGESLkFYBsabdhFa4sgEmru6JwJiSo1PGQMKTyVjAUkNBn133vMTVqK5R3QtqBaoQXQ",
  "key43": "59HpKciQwurcDSpj49v9AS1NNRgQ3PJdvyJrJXQzY3zHyU4Babm5pVxumHAXRPpRtRWLMU6aoz14VGLZ6rkV1vBa",
  "key44": "3KirQwGdHTrx1XHWLsunvKTkHq3uMi4QLHUPiQSxqgqwKn61r3WhVatJbmugWCcETE5ATQcSPGkD16ZZKpQTCo7L"
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
