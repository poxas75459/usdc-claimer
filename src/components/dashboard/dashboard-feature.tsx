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
    "5XxTgMyzeaoF2vf3BHEHGxAHmokuCAGLikD659GsqgpMy3irnJ4KvBcGGBTmUNnBEwFgsH91coo8P4p3zFpcoJBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ovMQUB9AiXU7PQbktqf6j4EPJWGLkwKYsreSemo47VUjGUpUYd1RzxzGtQ29JpbMfhbU1BYDHprBY2SuxoyUHVH",
  "key1": "4FLwkC2A5KLNqWTnib4zpF1JhUbhhhh1DGmKa332NL1gQvqCkM5qPFFgkPhxyxGRDdKmh2bg1YQfEMJ4RV9PVbug",
  "key2": "3xRhf9E2D2Acghv1WfefVEKyLMajunQej4hvpomf1KEzLUuxydG4sdTuvJmSGk1sTtJwUgLBNZYdsMexrctsC2DX",
  "key3": "3sAt6HMdtQ2dKoruNEqa8chFUBzqSUiyHuBpW9DX4n4GcHtfp63nrdD9UZohWfDn36tAYqk5WVqhL6r9QUpVPzkg",
  "key4": "4kE38dT4BpY8kukLquM2r4nmM3krYomFmXoiWgpa7RXGYFnoWz5TGHg5HEmbm3rjkniJ6qpV28q6BMAgQGEkzwuB",
  "key5": "5yjMk8CLSZjjcnqrQ9Y138S55m8Rvyyf2kmf1J3zdbnCvuqoXDugiPnpPhiDb2PfViq6GBqa68xs3kznZEbYHseq",
  "key6": "4hchkpZXuDX1WyxjFRrHrhDefHdQyA6Q7YZEf6Hh1YRFKRXbUywAodDvPejihW8vvpZsFiUFcbyzHvG69fk71Lmn",
  "key7": "6BRG6XB1vCgrmQRT4zP297rLYEegcAXZcRfCwuMa8i5gHNUHGwjtR6ieyr8BGJP7bCmx2aYv3RgpDmGJqWkjsoe",
  "key8": "29AxYYuCTcPfcpDYNGjTJ9KEDKWRFSrEWLGaCPMfDdFprwrZUMrdhkarwLhBhispesG9ho5friPuWDp4qFKWUVbe",
  "key9": "3X1eR95txr8QZ7C1xiWtkv8kWTG1dbU4aMEMidsaSWEiq3kRx6WoWXoGegvYhxsyCKU3xeouxKQFyWqToQ3H72NM",
  "key10": "2R8LZ8Ts4XPrPmt2fFkWKUBPPHdYrTCqrZHTEoixwRZgsFPXHiZn54miHCArEqvrWuy7SLMYxGQgxoXJmXhXKG1T",
  "key11": "5zVojZ5bvUfkNmhASXHveM4jh7T8s64VXBuMnegTzTbci6u9Gp3z4NvhEqU4QNAhWh9RpxPM5Etk5r6PJoSkNjLg",
  "key12": "23LbNQszHDmtu5gJeSeYqw47xoPro8Zuop182kVZGXKKg1pejWVgdCmqnZySJYxutx7crgryqnwnnTQ9DKomp3st",
  "key13": "2MXpEBMKr9MNFPiTfPUCb1j3x7RUgx3DJMuCSbSahc57SM8Np3o9vEi8MhLJ4L5LzRUd2Si2aPkN5Hp7vBtsArYE",
  "key14": "4oqZ1E3tYuyEVEVoPzAin2QjmLaN4HDZgfZtuAa3VntSnkiqu3mUCyiy4GyhmhisnQ4La29YJHU36Wkkmx9KzBC2",
  "key15": "vT33iqUXE62fXFrqT25xKFvpZQwWrQQhsUabZa1TsJeu7UnYo1zGarnzyevV8s3qCqK8RsXgWn2NW7nLDCV3H9J",
  "key16": "nNht7WinYpzGQ9eiyoEaBRLV7v8ddJr8FpXCvD3794acJEjzi4yePL29uBNZ5ZbJQM3iEkAPvCjrPFtMqiCuS1X",
  "key17": "7YCNPkTUR7q9Kgcv9NwuuiTV9NrsUuveVwNvtbbM97tvy1twzP8ATYut1494c6oavWdBcfKsBxR7rDiHwhgPHAA",
  "key18": "4SUJqDC7dPi8waE6hRpKk4n6rGMofBHpFMqnTR7KPLRio98V6noEdkupG1S3m4oTPPJ1A4XGKFHJofHG3MPPur6a",
  "key19": "4GfjNFZgXUsbgcb3vq83Srqgyu3mWoRL6tuxkou5rG2eYc1CAsvWTg6izYHczCeFXaQYtsVaTDJUVQsZ751gGHfc",
  "key20": "22ZJNTs9iWkEJwaLozDAfQuj9C9VTh74ep1J7cy4Zduc1TzM8M2dJ953UfsxDajKiJkweME374Fj6RHGUcQzcbeU",
  "key21": "524SgfgJ6fbBuCzS7Uhe7N3JpeWtsuosmTptMhZPuzdiyBWWviUonVrz1KXxdCjpyrL41bJLriQBf2BsthFdMbar",
  "key22": "2qb1z42YFpzfCpTmufm3R7JbUgfvbKmU7VvXibUdgWFP6KgWY3G5GhuuSB9PSJhDF4GhaQsX7A1su2SCi8qFLsG9",
  "key23": "42W8yKwKyVpHNtfUXu6FxDj9ZmoUFFDP4xMvPDm9gRy8uaadYK2zFHsZYioFEsvwtfRiZM673URxFiALXF6oFzJ3",
  "key24": "2yu7MhjpKMNaosjfWd3mpMuHCVHrLn4eayUsuC62QYCF7xsaJhRHRwn5PNroKW5PQqJpH8kVpgLE9rmYNGoWoL3u",
  "key25": "3wB8Uyn39sjX7f9aJRTAS2PxWk4h98Zznd1mt7Mr5wU4igmY3BUe971yhXPKRi4gWGr6LqkgTbsJpoHdQ7m1UJdf",
  "key26": "5uJGofsmyJMc5XpbF7W3Lysmnj4ED7BM2to7TMiqgz2ew7ag2P4puf5hGECDJspVdmrBJyptfPHCfiNDEK1GSGQk",
  "key27": "zHS13rGcgXDucwiPcHGpFFje9wa7nhng9UiHqfWJVFC6hDWHxtRmDzehXWGou1no2CVydK1Nh3cdEtgidtGk9Ve",
  "key28": "2ezP7mYQbrEcUM6eDF4DJauvSHqFVu3PqHUVzx2e3hpkhLFE9vLPa97vC4ahq9WVNfgbQe9KggxJHK1BK4jGsyvm",
  "key29": "55ArHikPmGuKUZL6Ek3JfhCW1CFFErWzJcarggBzJGD8gBhBukQiRAViLmYeWV3mDhajRy8HGAWTv5fgVGDMG85L",
  "key30": "4nKmc1v2658ar3kuC33CWnTM51QGqwGvMDXcRUY78qzLtuGLrD6QHN3PwE4rZSzaA1GY6NoaJkgeENtgSVVh3CQ7",
  "key31": "stGwGALz2MziHj92omJw7gtnA26QPYZY9RzS19NC8e5e7Bx6b1tBhGG9HxZK6yM4Q4cVooEDDjmt2GNLU5QEeWg",
  "key32": "4woF46phs7PXtqbK7dDU2WfpNJAgrUCeRv32uWZC8YtQ2u7JsnGBQEFNwStvUP5P7Qrm8gUvKYNqgvmu8EHoKAth"
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
