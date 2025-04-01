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
    "2NfMo4zmMt6PJCNQ4FyWd9SLWHkzGsdTes1h4ncLzzeVtt8K3XYCV1FhUSY1jZMxuKFGyk8xRVvWtySqtAQDghsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSxfhoEWwZs73hCQ7hg7qiPZ2XxVLcCzjgcmnqjap523uChkdfwehkmc5kuWymwgpzJWAvFc3PH8qnPTeF52pRz",
  "key1": "33Vr1wgrt5BU7emBf3HzxAEzQibsHggigbR4icCnuGan38rPCxa61cZFf64gMVaE8jvSw5twJnGtHU3uzsU9NDVx",
  "key2": "2bJtZLofEncpbPwg1oR89nj9Pj4PDigtBVSKBGiu2Dmva8qoeosag1fk6rq873Z8NpqPVM3uRKSj37VToLUBKFgK",
  "key3": "2KR8yxq2MnxB9MLHNJL2cgC2pjiTr7Qx4iCsmS8ExZ7bztmzEk2CW41C3UADz4PDBGsCs7HsggAx6KPzXT9opUFq",
  "key4": "4uZuwUxgjqNAy17eNH5QKtQEsSdakbhG6qkn3ep5bBjh1FnETJ5FyARGETvBMNYwnhpTBzz3vLPgHsLwHYJMY7SH",
  "key5": "2fdR7mKVjDg5CaWoRc752yWrfXGSJrf3aV4FEVtjq17mjsdBtJ4cxugv9ySRqXnJSvjKC1d5mTrNoqXxv4buZGXx",
  "key6": "2Cu9JEr3v43pAQw4N3fy7mhPBA7WYev2ggwmeayC1hPLNuXLbwadahESAG8MmgKNi7ik7N65goPeBoLiFpmmmgtA",
  "key7": "MQtfG9KXsWxvAUJZKZQ4CNcR62cFQ4xdu6qtRpRWpxNZp3cC7XTqnG5kSfgmR9vgoPiv5XSSVqtLsMmM253LsFm",
  "key8": "4ZcoazCPsuwptxyPpkXNQ53prTUtrpRZmL3oScYffBdxTBb4zvM9KdR9LKqrL5HNgwTgaesJg8cM9dqrR6fdwxcF",
  "key9": "35xCLAmpiPwkA6cy3FnpYdaYAzDnBTSkjVunpScX7XYF32ZgkNLW11bN2Q8nv49bZWqVSQzaWcdPRyvESHAALDGq",
  "key10": "4oCZFxQaRtJGgxjkvgULunQ7MnE2cFqY7R47AUetfjinMxHSaC6qd1NWCM5bo2UFxKsQuDijrMj2L5wP6Nr3ZC4V",
  "key11": "9AgaKbwujFJRKKrcZGNH7h1fpAh3xmnepGfg3iBv3CUbMhzdcp5yABiDuWHb1WbctckVexyJuGRMgyXVwSnY1dB",
  "key12": "45mg52AGa4ziw1JCFiPGtcyn952MFNL7yGR5FAjKtZxYLhCxVvgp7GXPLX3aNVVvPT52gZREsjK9HcmwSXwrFwQd",
  "key13": "2aDQZ6kXJKxjJWCoV3wPXQeu2eeYzdjGopDcLJsz4EbAkvS9VpfomuQKUZnztVY2UQPkxXzttqKWKwHjx6w7e8jU",
  "key14": "ZQJk9ittjMDSpD63FCgKJ7HP9RFn5KYMWYHZFEfuBVZJhwH6LzC8etBrjRFm9nq1cyrFKCUzHG5xWDdS4zpuRPW",
  "key15": "5VeMJvbUDrJrRAUErR4uBFgMgAc7Ni3qjzSs4xY5c8Tpwc9BqwMHcQkZ5rUoYDz9nxJLKpJeRFQQu8623awugK8x",
  "key16": "248piv1iyLvqaaQQfGjP6uocgnjnkBm4jL33SxHraqWQZXz32NSwBiEQKcEmhCrbT7BsewXnygdUw3QRZ1Dvukkm",
  "key17": "3q1bxdGaowzpSRgjhj6hi1kz2SJ8uuaqvbRzGRugjibqwgtwvCr5GR1oxGBLHrixgEkL4dvprVMMdYW2wSuQAosV",
  "key18": "2UPDA1AqBCmN7oQTMG4C2yxAXqcq7upxWThU71AvqGTobgSutU7hvtUSZ5q1AmZKWL5bPM744rwXwoZD5Ybgrhir",
  "key19": "JmkLLZ4YNaiiuZ4dW25q8Y9D2uipEF3pdax9f4RPT5NEh4nSLgwZfcTeLMy2ENxmv6oe2dHxPJhCQmhXSqRn27Z",
  "key20": "2swtfLmN8R3FpRHHcb3z1Hm5yPGBx5RWFui6JAmEvzw7i7piGiQKWoMUHfPSHb6kv9zqJWaVJDrdReZf3Ar4BEkA",
  "key21": "4Eyp8HHEUwmybM13x8RGM7B62Q9wkpFNjC6Axdh9P4xEUUkX3isUD6Ld5DvysgzE7iJ5nErcVy5HD1HokNhPbs7U",
  "key22": "3UMbLJr2m1DwW7kAZbrw161A4PeSd8jX9Y5C1a7gYr3gwo77RAQTu13qpxhvMMPM8usqHnAvPpsMsaLbEo5PNxFJ",
  "key23": "AerVxcytSuuvT6FMUK47TaqVWFyvKe41d7MWgvfwaQZJPBEdW37JSjMb8ipKyq1xR6SdYyQF49ck5bTKG4ktPXd",
  "key24": "2ETvf9pt8Xq7crbCd9T9k7uNUCoHi1PvP47ybtCVM7CPhdom1baap8o2qCmRSKKjP9PyUZeJM2yzxv2NAPdRPcoW",
  "key25": "37bDpX82hmEiiomsueyciwHLtr8DBbKB3uC2Tu3ac2P8ijD3DyBbFUAqYRxAr8omzR1CF4ayJJQnN917KzGcmwAx",
  "key26": "5nBLWpJVo9L3tgkgtyc6WvqxNGot3S6zXk5212n2etqY8mNdjaqVXGKLw6X3KvtJtfM5vy18UC76eB2ADKXFJPZD",
  "key27": "5rAMmVEtdhEop6Jvw34T111bRBQKQEytKDxyFtc6JdFQfAyByPv3hWGCBttA72w2LHuLqKKf5Bbgp2D82cKBAmWT",
  "key28": "5BXEp2bZKv5JZf3bGmzFAE2QpSfv5caU2Enta2Mi3616mrjMyinfT1aduDkcSGoHrTH2jcqoSDTuQKwhjM6GMrL",
  "key29": "2ifRfSPMjeRnCsQwcUS9KNoc5ofVZrQnc8fouwaJo2KDwSFu6ziDmeaFVNp9sT7fVk9Qi8YgdWSskbj5vi1pKDe4",
  "key30": "51z6NVV1RvPrCHPNizPz922R4B7yF3fQ2jPL9NhidGT8fBw8n559NqdiGehvpyhSpUyFd4YZt6zr1rXdPXPKA85T",
  "key31": "4FJiDzK3CrqVHxKtfZgMAQiZgkzqjqwftg1vMNCDUaqLnRDTdmGY5dVeGnAEQpcULiYTWN5qu5z56LU4wRZgBTRG",
  "key32": "4LAbnkvj6kxrKk2Sv7fBFf32NiAUbQLhrH2SeeBRXrPqMGcA8ipUWxmVkVf8N23mPSGTbjr5SC7Ao4dpXuLVhYrH",
  "key33": "nCsTxh9URRBYuc3RVfBPbQQybSkQp1ygqzkzSddL2NsSPoS4tQrAGGpweogonc7v8xRPurXxTxS9s9noRonR2dk",
  "key34": "3Xh2WQJouRGffKKcLhT1n3GyY9bjk3iPFjLPxs3GbWDzyJSX7UyqJ4shPpEbGE18LSsjDfPD49zNfg5xqHU7aCGa",
  "key35": "fdNJYAkUoEMpjFTBwrqLFWEAbDD4XB7zmzaU7TCKHmFZpDExkifc64KvoMpfMpE6JBCB84EG9vcToEfMZ1pHGGk",
  "key36": "4y2hDuCgti11icZdDqWhsefcSmcSEX4PYKV3Eqv4zSmqTgQ9dPEgAiyZVyjVGtivWwxhYxzJmQp7T1Mr2XfyyVYZ",
  "key37": "uPh9Bx4m9DwL27bM6tUY177uNfJvko8gFtEBn7NUmvXZTbsWZKN6pDJ1Cd6L2Z1CbEJWd86hAP2CAhU661MJ9Jo",
  "key38": "3YTarJLfuQZTHWhYbCVC54YEg9KbVPhxNgKgzXqvPwtBuUUuDd2xqXCPpmBqFt7dFPkGHq4c8nJkHYNvkPbxKtkW",
  "key39": "3kZwWM9Xfxztic7SBmE3RB4U5CmLyX7LSAyjhhuTqG1nNB3f8rhpPAkXRPPjVb75UTRwA2Kit1XDMXa6TT8Wzt8g",
  "key40": "3WPiu6z8tNzdE86YGiHiEi6PEQ1KSUPH5H1YMwhZSkZqmjCHGPhjJLtFHkAgwXmgKZG3pUFwjr5j7TtHF5ugzL3R",
  "key41": "2d6S75u2UrEwFD6arW1jST1emhrvLFWFec2UZ8ozSTNFcXZsjQct5GV1JXErU8T5RG2jpgdfma9k6LhNTudNMXQu",
  "key42": "3QHrGEnhJz44jQcKLs6aMXrmVTdSSaMFkLKPMKPLVLEQ6Sb4onoCgPHW2h8j5yMZyiDiDqRqiroY4E8tawFLptmh",
  "key43": "4iyA3YMvzS5BH8izohHZCuz3A839WLyMnoQxJZhcrZkC4Pkkys4ozc1LrGcnUcovfsLsR8Djkb5E9p9otc95rNS9",
  "key44": "5Tmbn9zqPGDEPMU6D9m3D9DbZoAT55atZmJkJ1qRqMvSVjLYXhet5Hi5jFSbEfWXY39oMdxPLLB9mA7oZGanvWpg",
  "key45": "5ymFFc3nXsFrkZwmn2SouCdHKAEcPiDQhZEjwrVoxqS1Kw4cVXva1giwvDTPYocATdg42LSZ1CCfgWoEUCueviaZ"
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
