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
    "hjRKHU9238ipTCpXLAu5o28mWnbZeeH2gwYt4Srow6kiTSHsCxLY1x6bZmtzq2xBXnzK1K2r8sX9diq6cRGtahY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eea5jHGVcyyv8c8M1VtnZ4ETKgGtgxwuMaheCWm7U54FXi1gZm4A5QJJqeBBdxGtEsncgKwdX9zG5sQSbBRSnC1",
  "key1": "jJjLZvhqTopEU3bFEszA6Rkc3HP3HZv5BwbSpCFXkGkJQ978ZnjJZJvxraL1YfCvkvqeppbGKoNejxbSyxjcHwc",
  "key2": "5rosmk4zbzusMiGUSR1oKtCgXX8k1cgqNm9xfRy4rGhjRzrJz2yH1crrJngdc5BAUjwjpYhn4ZppjqCNtJ3VxWaD",
  "key3": "5ST4pmDFLetCHsJRikyJ2HwxX8qAAfYhqRNJBXXB91FD88wLcoHMdqYNBYe6vGX4gDLmyfM6FaSJ1qobGAKgbyLS",
  "key4": "4oEwqZQTQQEjkD85W8SFKPUuyZ45gyqnguE1ChPtBD4qK47uNKoT33wJbM5ATBds6PFbXuzUzfzyaDveKqoN2zyZ",
  "key5": "4HHQuL1kzkBobrEQ4HfHQjkpTZwQGUedHuXhimjAijzVr1RCYoYCPczKQv6Fe2qHYADgpc72g9A3dJwg8QEyYraW",
  "key6": "32GKK4t7U1E3f3DuthKhafyh9hLQ8htFNLVh9HDV4zKhi9GR6fvtcd2ViMju8UW5GrBgBCxCkn2jTCuZsofnPwFV",
  "key7": "2BhdMTN4SXm4NyPvYFwDpssVr9P8QEWNyhp1mkHuTAwp6VqMjQfLfJwknwm7n7buRZdFM6qC4stThGTrYJMbJMQP",
  "key8": "5VxWHSht18LSX11VdfJHty6SjbLVxYGmNqrFNGXRyrDyTEEXxoNufcQ9Y4EtbYte8rgWAkFNnjsicQwKycvGZt6V",
  "key9": "4PzifSzFECoRVhhi18mEZ124vSzZDQGR9ZpVb1KiVsN8nJab3PtwZGdKLobNz3LPJcb4JtNP4QCusyPMmyMKN4uZ",
  "key10": "vDz6egPN5Jxb7fr4xCfdYgY2UCeLQ2tYzN1FX4yLGQd8TLP7U1rpRHWYtdoV9ZJBTQ54rGRXcYBtcH2c4oyzznX",
  "key11": "5xwwYRHujY1rDGdJ9G8N5JiPyoDReB5uHunRTURGJtMQEmMAQxYjotMhzMjKngebz6eNB3msp7ovNVzngZm9YJYw",
  "key12": "2GnrVwT15W2hskmEJGDyDy29RUFS41AghAnQinYMov9NZw5h8Ccn2ebNX8wVcnCRNmY4GSEWCVdhGkHz48ze4XzY",
  "key13": "JYJTCSzRjEmW1Jg11UcXjW8T1fB1QzHt3ouEp4f6FY2AyKHdedTaZrVBCUS2sJU4rscHaCdovce7CXXUj5gMeCH",
  "key14": "4xnLV17Hm3Fq113w6QcQQKeWtFXMov9CJKs7A4eSggJ34BiBHxBvSNPb2hSTuE58Qi1h58aCGHDKZ9QNgchQTovW",
  "key15": "37Lv9nJrycPMMWuGyftc1g6fCs9RRXeFLrzQ8MtT9ZgcSQv7ytfdFVkgjM8sZjnsu5m2t5BckMxpnYnSuYayQuJe",
  "key16": "2yR5aFiZRrrYGn3i2BL8GmdLXvkxFHYSpDRuwDWv2B9kAmc1Efyq5GhxYnGio7bpTzjuh6KLaHetBGmhxeHrRnz1",
  "key17": "4th6vuWcNWDKbTPJb5j6LyZPUkeoZCNgGSYw2pwQwYxpBA34k2ueqwJSfm2ieTAcxYuVcTH28CzhhbAxFLQRv9PD",
  "key18": "HEe5pAMhgUNfc1FQcURzUpJUypBrwxWNeaX6w5PhJmbYAwH8ChtkXJ2AP7V2WP2K1tUXEAamZnTmyGV4prCNpyL",
  "key19": "35aeSHi6zh4uACDDAsrTG9j7wNQdzagAwCgLN8cqqcATW9Pn2asraeSGHEWcjkh5EEySmfCdN2izWoUUGuVFoV3Z",
  "key20": "245tZzj6PQ6bYQ8NQ3RL8pHBrdTf9Uf9EPQ9Br2xRsGZdfjTvTemCKe8q4vvsqyaB6GTba8oTHRkS8wgDAMwHps2",
  "key21": "2XVD2VqQsoC2VhG9cKCjoXZHsFTrkZg7wPhoMvy2eUThCnAnCGJ2rNYhJCJUhSUgfsG9uAJtAm5jUfLvMdfF8FPM",
  "key22": "5brVCDhirkJMtE9MF4ZnQqfcoECxqjr8Yed3yTZ3NrfJeh7RsFEMmE9mSHnep9NahgYyo1EaJsWAy2Qh8RskJwff",
  "key23": "2bCdJdPY9iN4Ls5gZ4aapQwCHV8hLrx2eVtJWckPxbAh9d1t7YHAuKh2FY7b6swJNSaTzfLYWFXyr18n4UA136xx",
  "key24": "3Nk5Vp1qcteLKAtE8LS7aPjKTT3NKetCM1FLqCcMHn4xAAaqiJCxpmckVdgXcC7hmDAL6i6ShxWVJoaaGA16w3Gc",
  "key25": "uBGuxfyJVrVyNPkVuFQzL3hyz7nXmQnkvTYM136wGMJAGhMZXQFJxPUDc5pUAXDYWddJxM1Hws7zdgy9zjPCtRm",
  "key26": "53o6EWrCGcAQt1MSTf6xJA7zy9ebLerdK1bJsA5ZT5eGdJTNmYwxrZowTHdC8NkpVfGxJ4KCgNv6ScEn6eE6J64X",
  "key27": "1gcibX6dBeXVLgHLKNdY9vTJWuQZV6Bm1sEcoDG1XJ7ZVi284MHsS1WuHrruAMrq6dHoXqRRiqsRgqKjPQbV8C6",
  "key28": "3G3hfdj1VD4trboUXcfvojfatnfToEJYY3J8aFyqhAry54CCH1fCZ43HmdoJvJvxoFgvBdarR2ySL3JzNQTCo2LY",
  "key29": "5Ei8JX28aYr876GJpkNYWtSCuhJADu6jL2gw6BtpJUqqto15xEAzRxXLRH9L7SG2FUqi3EfHJTbDbQdEigrYXLNh",
  "key30": "2bmTL9okr2kgaD7DSuCuey1KmRY19p2CiDm1VMuEjLypGvBxKm9y1BR4hcMNBxKu4BUSGQeSmoS6ThEnsoghoktM",
  "key31": "2CLvWwMji8XaAGrk3zq8fLyHb4NzHQKRgNJJRXUFcdizJajzKdnPznVyuHDWxCDks7iTyTvDkqf5H5CH9pk7NV8d",
  "key32": "5uCjMWzZS9vUfc7qVsqudKKwtTmBBydCNgGP6Czkg8kQn4Lzx4mqny9k5Dq5mr7f7FLbxJ2TbLrkB1uQk7q7RRan",
  "key33": "2MXUd4miqtt567ggGUAPfTG9BLcBE2Y2pTmrvCKsFogCHYCH3t5tE8Qcdf8CBqK8MbTPhYbKdHePXSK4ee8GauqG",
  "key34": "5zE5uaek1EiU18P1uoCFnt6qCCwnLSGiTLuXSWiggemn8uEF6THkwNAaw9kaTry1vrD7vsDkaaAiPZKNApAbyeag",
  "key35": "dbVVccx5sKJsG7qMcospXin5BjrFBHF1nmqThsvyn11GvHrNyNATtJLom2KgsFqEREXx1XvTcm4YWByijKVtyQZ",
  "key36": "3E1SEH5JMtubEdnGXp82sohyZLi67w6YsYdBZX7dacjHNMApQZMEkJGuPAiPJG7LF68P6ehjUvwHLD3dUNLEKCcJ",
  "key37": "3QbadCa8f9ZA9wCupQSP8qMYMb68R1ZgbEwVduKKjyzpR9pvodv9WzkWCWFeKpCKqGBr7g1TadTcT7R1eP1Ppoz2"
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
