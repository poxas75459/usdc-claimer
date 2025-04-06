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
    "3gk12jGg4sTvyh9MXV38uEWM1LNemk2XjnmNQB1csMSSK2mnJomAUkoUzsD9VPMRu1yGwe3hgGg3o4SE3EvThRi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDcRr8yBCwQ4EFKWMbU4FK6CRvvwuqtWruEBXMKLmxG2rndUYGYyjYJnMrbr8K4JDag8RnYk63XLSqFNFGu6z9q",
  "key1": "3gR7WmgBmMGEtdedZp21eWNW5a9wQDPzbetayCJ9X3B4JD8Gpp5sgWaTLrDkm9Gf2y3VhuBwpx2TANxsthFtq6EN",
  "key2": "Jrpvi6YffP8jWqV3tRYYZbiyUZ7w4M1bdUzFSoxbxzj3cDuoMF4oma3xJVWRjDD3f5ttBnzcNSn1Wre4atm1DAv",
  "key3": "oPqrcZCUeFwU75q2afqP4CThy2WZEaTgVbqWKwqdE2nG8uTsj68H1CesZDGC4gqKnVktKYedHE2KxK3TKNBidBG",
  "key4": "Fp5PaLknSn8uzd1yW7UrXpDKRyyVrAQinCErMYaUcpa5ajqmefH2cGHFghxTTA6ZKfiR8z2Up2oqRXLcyVXDduk",
  "key5": "2iRtE4cqLwPFqd4uwNnePLmXaLEQP1QbGtfi3ngBbcipVMaPv4AJR6Ch3nWtD1BaddFtonWSpuykA6mMJsbVVm4i",
  "key6": "5WpEi3y7oXZeYxyeKBBEcZAvu4qUSf96X7BbamnTHzcY4SzvKxbS1AEGcQ4p1MC437R1iKYcJ71VRVWCa9pzYmPB",
  "key7": "MF8595172gPWdUv3QBY4E5jUL99bTowdtozF9ieP1JRgMjeoYbzNipVQ5wFMNychkxzUWMcjvLSdiKBUjvfEnJP",
  "key8": "2ZZuMZLhc1QMkxygHWmPLte1GpbivUNuamcca9rYYtXAZtfiFY9YS3YDLbCzE4Ueppx9rKv5mRS831jJow8CTYRQ",
  "key9": "4wpq96A7q3cDLgoMW8Ajd6SBWdYksMnGnzBz4dKehGEWidGX4jKBZFs1Q17z7kNg34dchCyTPfw9LqFVvUn9xFnE",
  "key10": "4gnV4sRFEod5k33dCFduiEG7u6TeGgkErdK3CiL6U8mUGQ5jnHhgzGbSydc9CyyLyrSL63hof1NbfHAZ38DVdKuW",
  "key11": "54utUB9D6z5h8GEfQTN5pUxGDaKaFnfuMVY7CAJB9MpHayipb9GWmEfyEB8ruQWPjey7Cux2yiF1XvpfXPjg5TTX",
  "key12": "4s29A6TYzrKTYrJnR55kbtEqQr4kTbuwGSu8My3uuEtTksJafHgYG6W7nbWkqDVcdWzekiY1XrXTx9hDykdzfaY5",
  "key13": "5ouruozH3UR6438Fnr57aCAVUcNnmubPd1dHhKPQEiTPyjWg9tWG8ud39G1tVHZZapbFsXbJWAY8GNrr77QUhQ7R",
  "key14": "26u6HtUuQ91RYHY1TNGYNH7LfTNLZrKaJ4nXjSbLJvUiT6T6m6egZFDN8qJBxDqoBGtdDPTDhhcfhbU6eo9yRdJV",
  "key15": "EgeQmuKQRcR8oepxf8PwM5taVupZX6djUcs64Ug9MaztPVSSgkDkRhzy2PsnZtGB3vBPpsrhcwR81w8jK2Fon7K",
  "key16": "3S65nDpq3m1MRuKS6R1CdmGxjZiygLzE7PTb8y4UNVe81nFmEZQYokwLceXSG8Et8SLoiFnuoaVqmFDe4acdMSG8",
  "key17": "2aVckPyZGRofTFbSWqoziFUx2Ny973NEqXvooLFypZdNxst97xZ9GtGEBVF6gMFb5EkMhKFs5AFn4obieiE2ToAe",
  "key18": "29AC4BYyfj6na6jmEeKyAqhBwGDk2HpoV2ZXUHG3Y6nyXS4hSQs423FPyiMFovvva7yxkBvS7ufndyNGuS9BsRNE",
  "key19": "3VRZAh5ckxSAQRuPYFjhedk56T8yM19t1MgDm4vwjyP1tJniSd2DuvbsKKfevBUDTtiV45uee8vDux89jVFnYYu",
  "key20": "Si1fd1NWApXNoPg87YQ9BkycSXdviDKp5XzDbyFWZKhbtVygNKcorUyKuxaJy6iuHuy7JvSKuRZwRqAEef2j6wk",
  "key21": "26zR6ocdb317U1afDzJxZnffBwvnm1aUAkpaMYiFcSWCHh16dDRWeHFhGn4JV7ckkSAsFGHezDNdgNGt8Us3mHiG",
  "key22": "47fa7uvzQxa4iLev4PU15y7p2wPoBitkemTRPgs7VjmGeEYJdB1czbqXb5RwwTBaoWcXpEEtQyGZbJbeswAWPDr",
  "key23": "3NK2yfEoLaDMv4tRpxJcYQSMuCpDa4CPdvpyvjdB6mUaytBMKsfyDbWNyW5hHG4NnkUdSbrMBc1YBAtQnHecGx9E",
  "key24": "3GFUMxsryWgnzWqU4UnJeqfFewkGmEQntdP9bqmZpeF56dd557pwr31AHo6R9bspUkxeBWG7aZVtFKGPzBpCejbh",
  "key25": "SVq5ZtmB2L77DXGMWxYZprdgjVgmds6CLXu6A5AFMAM5PBG4tt29fiBfFyQk8xQSE8PWXfQBvWeQGfBFoVbS11Z",
  "key26": "4qonSmQJhjqsdocKgxxuHzWMcchwuUJHNBhbb25iZdPpfaQVh4odkvxjYQQZYMpxVsDbWdhb36U4WEGHwMmcrnPm",
  "key27": "25kHhRMaPmfa4fjrR5AtvkCAbHvm8wtj1XW6BkxhRQjRbLkKTS2XKpZZjvCpVNireuxgG72QS1PWqWrPkGF9dmSF",
  "key28": "34Nzw28P4eDFzFVsZeUFepRwJNfPSPdAWewidV82qmxCDy3pxaUYHKe1R6B5S4QCGLGqVRUphMbNZCRuN9oEqCLY",
  "key29": "64adDWtMqFcAdPCBUxiEwYFStNLG7rBZN7LHBPwa4SQyiFzPPbQ5nfZ7UX2V9x1VzUdSDfKdZXdCAZEj8PhAw2gC",
  "key30": "EqFSHiRrQ4SwiHYcUTmBrLcKpgN6Cek58xLsfyjdSf1StnfKgz5wWQnqDiSQCL7vgK4ShC3DTVGQrH81fRDEphU",
  "key31": "sUJukZwh5MAHz42qVdn34BjoWGSQGRktkEn6FvZG5Xcgk79VDL9RTeuJp2osrZ8wSX8XQaDsHVpxQBnA4CDa8sX",
  "key32": "3JX3uJ66rTXTi27QVoAhyTVB1AWeVgVjQudoa1nkKfYWhWUpyDvJrMJw1Bg9gZEzXNya81uGHTQChscEJjSipENS",
  "key33": "3Pe4VtcdjonEuoAQzsgcydKh1Gch3DWxQzgnjaNJgYdXCHqubRXwLY6ViJznP2cGJwHeeYBMbzVQUUdiQUvjBDAC",
  "key34": "4XQ28C3uDjqorXSmsAYxxmTRR4fHSEbnKdWJ9xs7NkvQMT79DSmgWJzMrxE9sPG2H4KtH6wjxZ84dhqmdWAyTAhQ",
  "key35": "2fHajuKq2RgfZ34fpy9VDR1GNJXZoEejq8JrjrszFh4EV1kjjKqzFfiTpyxKPmHed5VpUfCb8NJ6jsgiS45YvUH8",
  "key36": "3aZFudMHNE41HZcdmzdn3yi8MMadzuTrZNPyMo6uCv2HsWdYujh3yvKGomgGb5HwLanSbJyPJpHYSbEXsVjcii8",
  "key37": "59aFvMt19yQY8fTdWiUnV8AgGin1VsQCiyW3EqsemcxKUDXAUTQMXfwi19dNyPcq6yUq6kV3azPsDdEUATfMG8g6",
  "key38": "6vySSb6PHMukUoQT48YcBAzD3zLz6eWKunkBqSDVVk1wHmgLAZbHyzADHvPBBgS1ZLXCew2DGbVMzTMeTuMLqJz",
  "key39": "5P4W5XKisA3iWi9VRKUWUiJkx8zUJfzsCdXvi3paXqPyQuHCw12486D6HVrT98EwDhQ2ZFaATW12bKKaRPN92Fv",
  "key40": "5o9uwQu4bKCzWZwvy2qgCxuRQFAE7NY37gRvRxNYVufX3jkfC18bVWN98LEwTa2bjiR33ssFEJdYYP5Moq4ZQKwQ",
  "key41": "4n3yx3GTJyAdabJPrteANv2N7nv28uBpdoZqqZKj569dC52aCM2K5dBsZ85n8fJyvJjqB55qRFS9xdK36LA9eEFu",
  "key42": "5QerGuEhu5rxHjC4g33obh172PNH3WNp3Z5juZPFFTWthL4Z96DHb9QuAjTES4vnE7uXFmukaoeV6TK31Gr6cUUc",
  "key43": "QGBzvDkWCQwcCzCDMkJGRp8a3KGYUiimywDL6G8xaNCQfU7uqXWcXwaxDDd8o45cy2TDgf3Qoh7J3htLGyvSvwE"
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
