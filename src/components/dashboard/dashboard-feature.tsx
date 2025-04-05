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
    "HkPqTn1uC8JfGaUnCUiNQEKC9hv4wTrgVEGgQMLf3eUhVt2YGFotzi2MtfrhWQZ3h93f1CtvtWZE9CCmhxQfDaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iHDUMdUUCqZLfjFsoZFKUySMRqE8G1VJwrUpFWghR7gkHCNrMKqdH6W2HyrhBkREXsHnXvrEeUuvPcVugGqwpE5",
  "key1": "63hkWTkMfvbL9FpJNDWBbkitH3GF4i7zbD9xBNGfxadTA9dah1nGjq7TJ839HDFC42uK165wXfEuNnAa8bTxoXk9",
  "key2": "25cEYDRzm7LnH2UNzEVG9YxejvcwDH6iYBgAb2BjQSr6bNVVFnFP1qupz5bVAZkBckUhfAH7hMY1MyB4eY6ofQdi",
  "key3": "54n5JoyTWZT747h1ynDNAQu4N329EFHGSZgGAwCbfyAqGRkqEzV2C9YWLzsSmT44ibChTnq9wNvcT9UwqyJTRT59",
  "key4": "4kpZhdh9EyJcQaDUw1pK2JibwbWbAELcZMRDzTZ5GiNNo45MMjbUatr8QYSDWnTjLdwQVXT2iRz4rKh98HzBV9iK",
  "key5": "2PMArg3h9tJ12WNs4YuuasBx9XDmwkFkj1s8Zb9VTZEtwf96mUR5hDyeYtkVDxi6oNpHCgEwuf1UxL7moAC23YFV",
  "key6": "4hchdoBiiqwSyTwideiHDQLBFUZ2ZqJu7fsKysgB6LAoJcx1NkUCoyf7GuKJwFW9imBw5VgiGEC3JQu8Jfrkw3xQ",
  "key7": "zMRhB1stB98zGVeM942mzcvLBmaxxKDCVPi4azX3UakrLHMjvnqXoT4DZkpyfb6L8ejJRnBeQJ1aGyJB9ZwwA8J",
  "key8": "5GA5Z1QoKMRiho8ezkCKpYEpgnwk6Jr8CG4SoeZ72GRD5WNpTdm87ALSReiDP37L9iwUiKUUUkMWScKXwYj6kUJb",
  "key9": "4zJpPDRd7rpB9NCNdzmQTtyVgtBCBCy6fYDWkSQcYENjWroLKxCBZv5HZ1zp35RutaYfUjt4hmgNCMZaep8nqwn5",
  "key10": "4FW2fZ5XbPWdGq3gHp7r6w4Rgnqq5BArdCMzgK7jKWKTHsTnCoSmpXZohXiCJz8kbGkKHDC8GtCCxxbXkrN8j8NR",
  "key11": "KaMAkejHPqC2iws9x732hCX5i8vftGq8s5CSvxWZ3j57w7RGQs1JMeHi2MJGp31GJfP3EoUyjCE5QCAtztUSDz6",
  "key12": "2QxZKBWgY1kZJkmUxbqanyyaewScPixVtpvKUcFT7tP1Krjbz1oKubdd3pg7DmNDbSDTuGDRmiu2CbgNxd3389D7",
  "key13": "5S81rdUkEWuEs4ogRMsxpD8nFRa3pjBcS6KQV5mDbzho5SgwDDJggojbs8ry3QbT2w1fomFf9tQhaF1yKPRnJBDb",
  "key14": "26k2g8y64JDNMimtqgTsyo3v4MK1X8y3CJWZF4YZKRGi8yyWaiPVVoosHZuwa7wFDFTPszYACbccXbeVzujuSigV",
  "key15": "3PaJvqegdbut2Mm7miDKW7zeK88eTqiyaf2eRz2CiyHn6LxfMY9Ha5VNpCtQGYTaNuYtF2sYVbRVv5F1f6AaGtNx",
  "key16": "d4SPJSC3oumhwyFWpu442AyBS5nPVVEtF1j5aKuVpNmeB6ci1xzYQz6DacgZtRHmeCUgaqwgEoHowixSqKfbqGr",
  "key17": "4LHSZ39MmqkaVP35nuKcDDPMDocQAz5PDzQ2pRMpwFEJ8wuLrRzszmqeFj8r8LdKf4d9JSY1DB8xyCtRBGezf86H",
  "key18": "UBw3aPaXze4uPUrzBZv19cxcHqynKnFVrSzh7RHatizHzrCtn9WzitNpXXcGcZjsaYpfPHF9J9cq93BvhK1NdXE",
  "key19": "3BzQEtwky6uZ3rTbjsMK3NLLWKNSRCj1uhZnZCK5nDiqqrLUvdsTRFUtnFWQtNfBk8zqWPmFo2k77m5jHwxNPCaz",
  "key20": "4tCZf5Tku8oXcHuaQyBUogiBDWTgPcqfq9qYkwhduvn72nkgAQBgeYQd5cnx8qMRpXyMFgWMK7ZmwRQfNFyKP3gB",
  "key21": "fpeyPiVqB2vwECNujswZzWmj8662i5h8LzXfVVsKdrQn7vS19Q79kYe5dW51peitTb9V3HXcrZ7iPmrjLN3UpR5",
  "key22": "2f8jMbF7ENsuGDaSSmcf5bSos9ZGpZBW9o2xgwt4st4AzGRuU2JUAHg2xrKFUrD7jCVtuhRjvJ8LVNZbgQGvFrQv",
  "key23": "8Fu9rwHWVh7VBHMXA4F3DH2A9ySC874WXKFuPCFUweDHwnMb3jGQX9NMMSdRftUbGNNAqyeXAR1igSAKoYhnfeY",
  "key24": "4a5yepoXJVKPjeiXvntDSLXnuKPGdtR8CMS4SwGARnB2Lm3JmcMweQ67NAyQxzA7pfVL8vU5MWdpE6mfdvWPVN7W",
  "key25": "3yRNdGf7uiNkCBMqjKxZGLR7ZcnKQqFMMK9Syhf88N3D1dJqdX1DL4TDmbs4eDqT9xJcvDoS9dziPxAxTm8AUSpk",
  "key26": "2rzFjfJZZYkbNfpeZpA9vaJBNKFhyUdiLFSphavKQoGFRr3gcNkaRuXPosXiKpt7pueyv63PPBAjAafMB2NWMpHg",
  "key27": "3b5ZLWMQRcXRNSK4TMKKhKEKJm6E81bXjM2gsKjWea5yhokaLmMhrzoUduHyUfLtWQ68GivnFtt4LciakL5Hpuzw",
  "key28": "hBrKkupY9jieRnQUckwCdcpWooj8iZPSESNm6TgDU3AD93cyqYGuhFByuMDWf2GWv98v54giJNUZTRuB9HzKBGE",
  "key29": "43gmkBpWiKVLwwQdvdxLZBziZmXKzpVAhBB8iH8Pwx76ty31cWLh8iF4epqShdxxsecKXppXuG4QRqdr1XwNeEDM",
  "key30": "5heXG7EsxpPVNEZg9tDA5SFRC8AfMkSDLrLhBackeJSx73ZWyCHsbGdxbtfnPYed4QzhjdCyuXgWWM1K6bhzNyDi",
  "key31": "49aCnjFkBbQ2DBpdaSiMWCYxcJHpSZ8s7AEuhJGxzfUfRBCP9YpQErTKmyTErFmnW4qBbobVJ7rATb2nsMtesNcV",
  "key32": "pBJQWwxA98BCANKTFKYh23gziWsraX7LRWXtCr5wWvDRHeuu8nzTbGiCCBj77sZbCwynqB7e6wD8MMijewWZKdQ",
  "key33": "3JuXvohWrfraPDC1PFaMGTU3ymm75gYUoQDyXscJpn44JMPm8bN1hUwzJVqcBHEnFeDFWspwuyuDdbArQMpaNakV",
  "key34": "3yic4U535pKv3LNhLQDL1rHswQQEEi3Px2A1r1gkkfEXnBpYeM18otmFfwKDUBarUhhJAYZLvjgR7b4sRxjB4TsP",
  "key35": "4n8Y9zkgENNfhNcQyBh7i3YJhQ15YGuADYJrRdTKtbxipYjAiXQk5ju3dUpQjeymZ1jBHfUy5SS8RXdca3p1tene",
  "key36": "64S593pUgSkYyiLrp1sSLwXz6m9mEAjXHEvM5XLzXtFFEpcn2uv6sBiRfHsqcb7UWQAed2u7HaBq2ZbPzCAD5gt8"
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
