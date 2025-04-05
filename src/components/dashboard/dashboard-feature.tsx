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
    "3X69FJP8Jd89RbWhUt1C3AEuNcaNBTUiVihGobJSwQDaWf6bLvswAwC6XPAQzJxt5U2LwJtWeN5c69SHYDo69sJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kjw7vmfX4fKSo4BMZFdp13z2bcEWGCJkV8BLskNua6yD6rBgQofdmYzp3qAuFdNYvzwEysgfSdeHKLZtesqKawj",
  "key1": "3DX119wT8WiPtjWpAgWxJJ9WkgUJ2etj4NsNQ1pDkoFckKX1sfiNHuS67ZZu27em8hyf75RiUD7HmTmNgPDj6ZSC",
  "key2": "5gEBhHRerDmMTp4ADv9dQ4WCjvA8uo6RUjTmY8Sd2E1MWJQKApi36JHvSsXjYAY1MZ3QHcXkdU5zN5kAVwRKcgzk",
  "key3": "WPvaasiJ1viq22TKnaxg6tZmDxXxaaeZri5W1V4UtDWAN9EKMcAGsW18uxqZiuWwuV5ypLZcwxyGzw62E7roH2E",
  "key4": "gduWrAi5U9PoJkrvFbNzf3bUViMiNhYTggzgjrGBaNzSFC4QELRD6S3mfmV1NaHRGwYUq9GViyxyADT6K9XjgcA",
  "key5": "4VXQLoZzTKgL8WRT8JDHVN2qsyFNcgo3bryC24SqY728ZmY8YAymqvi91gPrpz9p5vmEPJyaWd1K2toYG3ZFXyJ8",
  "key6": "28w8jfNeQgAjajenKMqpLRVxanVB5X6cv854jnTstjHA7QB5QKeSErGiqVujSZMgsEJiSjM2wPYEUKH4SxK9tV4f",
  "key7": "3GEaeBhmUNf771VBUdURi88M3B91hKyB4ZTQoywVFASGB3ZRGYEENnBRK2Fu75VCaxvczKeiEAMVNriBBUwUGvvp",
  "key8": "4NVr2azaEav3xTtDACxfmCZjZciCz3wfsK3QVwj41idH94yW3uEhbAZ1BrzxctNYng3zmvJrcCX3jZJwedprESze",
  "key9": "5DQ2d8N6KKuFFjAzKFNdRfv5YVbnsQ4nfj7JGN1Gq4J8FNp7D2gcRYAeFqKaCGw7t5r9ZzedfpgfXLd5BYCKtgrx",
  "key10": "4tYAvpmC8q25dsVpzX5pw3J2ZrTezSjDF7WVm3S1dr9xKKfm75R1hdsA5wQuGFcQNFx6CMYfk7GG3Yctn127tv7A",
  "key11": "41FhZ4zk97g4QGYPeRqG8N6voqqRGRoM3fHWh4KWygcFGsAJKeq44cAR4qbb1wcksL6bXwyTNdx6siiHw6mqejGG",
  "key12": "65oYuqVHur8xQXJPtq6m3k2K2BK9sSCjeg13p43e9RTSa72BCyN16Z1R6mNxhxrQ9nNw4pEHNBM6H8Q3kqatJn4m",
  "key13": "kQsiEbyPsu4e5uYv1E5odoj52fapKgD45KRn63vGFHGZawq8CY9SvcCig84xVzVYA4E76NKZe3WmHFtvWXzoQAW",
  "key14": "43RskVk7dCiyRKtzF6LRkksRKq45i3ZQbyFqCH2KSJDR88HAEEKpVrp9b3M5Mu3DmhrxbKT2NAwwwTizDUtrR2Vt",
  "key15": "3qeMyVHBHpWTyc1s2c4fEdqk6cJRXLcCFbtUDascEQwP7N5eeBTg526zYKcpHxLM3Mm3rZ6PadYJEwVxyA4DRmhW",
  "key16": "3n3o6godMqk7u5MUR8zwDckxENxtwBSkuC7BUckaMXxtNDeWXg4TiUZYJuraf2CuzABbUKWNEywPNBaQf7wrzmRK",
  "key17": "3gzg22prUQq57Q13GFxdQUGZWf7wz3ce5K9vhCNySQgg3v1hsFrk7MKd4nNDJhTYQ481Ae33ptyEpMvAM7jt98AG",
  "key18": "3tv3jvM9buxZndrjZV7rHjGZCpfokxJU1vp2VTtfP7sykB5H6pH2HckqNGEjNNytio2V3s4ey37VPTUys5mcJtL",
  "key19": "2rkGWt68Zwb4e4TqNWAVMqnAGewbpnUsEDCNVtQYFA1uZFtK11h8FJ3JkDFzKoSfNEFEGbWEvaWMfBb5hADZCWjv",
  "key20": "3FV2WZWvJyCLpWApjVXBHDZnB2mRMYMsdEPF28Dc7sPKWJC8vBjFKtKDZvG22udmn1bgd6G2YqSuMLMrQMb7qT6C",
  "key21": "2DteWci7M54MbRroNKsCTJjU6g9USyavBRgY7rNi54UeGRhxNuw529Yu5rQqiDGLvSueaKLnq1mk18YSF6qKXPS7",
  "key22": "21JxjawrQ9TwprD5eEW7K41auRA1UyPg2FzKU2vV7bb9Xsz12tKecgQQbMHdJ9AdvYGG3NLoRv7UQpaFjy96LNhW",
  "key23": "3gFe7Hu94ay3UfrmNtisSnoiRoDFPTrtJ5BmPPnzYFWvRDACFKdK2Y5iyHuFtStFCTgD4JkrqMnDa5eRhLUMp4HB",
  "key24": "4kEyUUYeFpeaePTgxwc8o8XBbbqQRfaeHXYij4m2CvNgRsNxidupzRvwvaP2fcV4PYHVZhSM1CYokTNueFqgKdTg",
  "key25": "5MVJnGoqpzxm57mQAXz3g3LpcizoX7UVNDHTN37VJ7voGZLgoqQypJdBU42HF7PiMrGp84tiAc2vvD6FjbUkw1ey",
  "key26": "5NcUzP5576id9FPwqHZWe2LyuGfQyC113TBP6tk1kZQpKMon6TBWTX5oG6AttYAnmw5UkpYkfaemCGL6Q7fdwVtK",
  "key27": "4Jec1GctNkRGKvHWpAsLy2NQbPYyRXaEbLod1QgmrxcMTsv1APhY5xdSS4fq2aHKPWSJtosYXZLXwNMMjHot1Kpo",
  "key28": "ubqPzDZdcpgdxHdiy7pMehooqZ9Xf4SN5pceAhXY9V3aoe4xE4Y6dU6rQZm9cwXWRa1Lj1KmnRQtTnsRW5stbMZ",
  "key29": "2xLvcnHLWosK3sz7MtEaNYDB56BEnNFGnHdBqybfzfvPhJBnK4ycwooPkkvPMxkfMqiGULrY1NaWrT5oTgb5wbE4",
  "key30": "oMvqjb4qJMr99mWZaiTxG4Z7VfFNJ2B3iv9j4WCupzaTcW9G75FL2TTvm1ciYTj6TqLpKhNwYG39C33RaMaZ5RD",
  "key31": "4E7omMwR6NeUAh5JUw9B8qpKYwQ1H8hXWD2c3WMLv5oVZGZ5VwHC1ZbMCRH1WYhqvtuGXzsktSvkiW9WM54WEgUr",
  "key32": "2xuHD8h8hu2XR9Wno9ysL4hTHXBjomt3E75s13Sy3uXXVvMLZcdS6FDrr4nGYmKauxgkAPX2BVUUWE43FpKmVcr5",
  "key33": "4zzgPex2YqWa6Je7Epn9xtZbQcYVM57dyK1k7WTA16N6657hiMo4zXdViC9Gp88J22f3oDFhnTZecsRRsP6Pg9Bz",
  "key34": "4siy5MK7xVNgpZyKyKZJ1i455m5amN419n213EkSfY8uE4dfMtAE5aBXPLU7dAUbgPiPzoNyRgUzuLRmvbVUh2Yq",
  "key35": "4vwqkg7tNd8JY1nhtnBMXQvNQLXVBMFEtz2iJktmi1jhTTqvv4Vk2m4s5v3Qaaq3paxDrKGP6c1qJrZYQB5JYwap"
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
