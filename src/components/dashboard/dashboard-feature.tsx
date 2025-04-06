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
    "2SuXjonnmp8Fh4T7wV4NcHB7ZtwgukZrBU6NjKJpQYVx2CBhiqsXPCj7TCXdCVHbb6vdk3gmjW5Y7pg7sbzT5sda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6MeHJ2ToJgJuCNnKkTmMZtQ7Ft68W8ghEELbQUnURHW3ScJqesCtzyKoMi6xpyAcsCQmiCyHaHk2fDLrTgC8Z2",
  "key1": "3xe6K9GqHCfimiVCYdU9bQcdws6cEQe61zvfDu1F5xjdyu823CjqqakawQjyQax4t8G28meu35CmFRBiHAGxdako",
  "key2": "2a131FW5qLARv42f5tyyQiwTDgngmgd4aLriZcTeBHs6jsZ9n9Ntgsrs2AfZRERuwNHZ9vtQnQnoqHtnacVhGpzL",
  "key3": "5vyjFRPSD1WuCZJdFE7woEJR89Y6Ku7ZqCy13MDkPXT6aKSrsAFN8Yb7vFXXvzty7MQn3BdSUvQvRw6YUinZ5dj6",
  "key4": "2zKhnnnm7D7MJcSY4Tfn5cC9HQmtgdoDmkj4qPsJUKtUeoggKx5WZyrzoE2va8bqDZsUGRxhQ2oY7yRgT3eFKeQz",
  "key5": "5tfr1EMe7jWKcostyX2U3rizzLuLXTZKBYxgtGjCp3yzPqKbFf5mANLU4gSQmtejjv5KrQ6WAXrZZXvreCiRF5eX",
  "key6": "8PBWxEbUvr4Xbr5f9SjqFwDtW1ayozqWL4eGtmLq8PrTQrio953xJxtXToYmRDezyo1YGpXDPKebuwj36A8i8Xg",
  "key7": "3gxk94Uz1HZJsNzUzykkowV2H8oy7ZDyfL4LexayMpo7i7Qissq6draBLW9zPUT6xKX8yHc6Z8JACz4eHgAJZMxf",
  "key8": "54PSgxKDHvnTfBme6XKrYfKX6GMyne48KRLMmhG3LtdoDaDiLbSiDVeqQDBi28fh5LMHcPsDgughRe5BvbM9DHp7",
  "key9": "3CALfpe73A78x7LH97TEX1c64G7qhsLsnxcXjgHAYc3FA5PPXnH697jvNtsVw915o8zUH3aQ5Ayi9DyMYoKEaDH4",
  "key10": "2egtaiqdwLWZmum6a75zu9pdzHVoaUD42FTNw5NY4dNeSuxXW5an95spjQ8gny1b8DNvYHjiS3jxE3gWJ3sbotk2",
  "key11": "4umjqkTHEwifC88WdLFNf1uh39wt9VDEcx4pQksnwhqxZUZUTHFy2iqP4oyKz4YpUp3ASbr9xeZX3SWinV31L4Gv",
  "key12": "5kmiUGxkz6E7QnzhR3mXUgQRkehnvE6ygPB4APE9dNJNr1wkLuQ2XgNqKgUpu9tsjjihBSynvidHDNXdbYUapGTL",
  "key13": "ATA9uWwGyFFbBiXWg3XHciAo7rzKwMEdp6vk5UNd9XY4y57qi831ZAgYhct8nneVxYKRNVYRJgRzNvkBCeeTQKc",
  "key14": "3HXCMSJjP3S7FgTUseFL6SoTPpuY8ajCNB11uPvWJLTDmSNB8hHb5LGEEtq8DvBg2fZ1TQQTxbBAGjgD9D23cejT",
  "key15": "4tvjC5mdJjr45S6iGXt5gELDhLVbznBuivC59HeMzKAjhrR6g8297vNkUN1Fu56sRCK4bumUcGWFooqqm5PCXNTy",
  "key16": "8iuWXAsZXSKNRLmv3gPf7V7hyL3gVt96TVvvZT7SGGGci8xjNboJgpogo4Rr7x1skFMmRRBFh7SZ6sGnRQ5PMtV",
  "key17": "4DwUoYdKG1WZZmfXZnGh47mWX2PLXuX8X3aUFGczNpYkuLeRUcuFGCuEGXYtZnz4uQ9CnbTBbdnVRKD1BnFPgfiL",
  "key18": "3Z6QWGvehhZ22Rtx92Wg27gPqLDHMrim7xhcB7WvTWSg6CDev1qpvqd35ckaWvsaLHZf69DSxEhWMTkZNqXxpPEr",
  "key19": "2GDi5B7vkJKq3d7WcMr3h4QCr3bXbMRxMooYtcvPgHNXFA9pj9BdWbeHmuaJpfNWgAy2qxu9o9qMEVYCzDs59NNN",
  "key20": "4vsLWoiDd3pg6wr2J1ZVVppyWJs31bipQtQesW9Abc8Gk19pMMzmgrwei3R5HqPXxPqagDxhdyiqKpKwb9bqSkP4",
  "key21": "35znPqXX6yi7JNWHKKkusPg6VrMoHFGtnRxz2whDdJydgeTqFR2FXwCLidrPVvS3ET24GkFXPWMbcxBGx4fYytHp",
  "key22": "4A4zzfi8L1VXXaZS5ATJsBbnzy9CyTQyF3QZWawFrJuM4GuepxGH7nS9jz6ULbry3Jkw9ap5Hzmb51fpS6Rj5E55",
  "key23": "47VZByaipjxX1zb5zcgyrJZo6kwEbwRuP558e7AuZHbCaqYnXiqLwmPBYwSVVR9BvQJy5mu7B83MKBbLsex7ntHD",
  "key24": "xodGwHNe3EZDQhBEEAMTkcMtseaSo5XMv6f9pjSVSSnj2e125s8hbqinG9B6mHnGerudweeet7oMtnHmhqTfm8z",
  "key25": "2BHFQQwAqEMTu72gt5tP7KFn1Gji8UbgpwqcxXTP8YoTYSBkvB4gafCY1oiMFqQiu37YyV4bh8DfB4T8g2ar3cQM",
  "key26": "27Eo6SZY9UJNxJdzp3VqcLGWUHmyuiQdk8S5ip4NqTrqe6n6e1ijJXoYUWdUeipGU2zm2YhNxC1z1JTpqCtnBj3w",
  "key27": "fQzwAHC1NtY6fvjK6XrPta85HcJELK4XqT1kFv8gkT6GiYhQoHkFzPsUrcap2HFxgU1fTZVNyPmCJD1Md9mUXfU",
  "key28": "5M3awJtZGEHoNiwJgVTki3fyZBtP7DJQJjgK8CxW6YAH7rpR2yYQNXSBwactSAwrTZWJi4HzELGHWLbdmCUZRSgE",
  "key29": "2wG1K6BV6mFCtMbHckTseVcmUz7YiaTpbM3aTEfxvNQWGYGZaZJ3JBKpDHtk58zo3gcexcERfVBNr9zAQRuyVk3W",
  "key30": "4JajYtMKP9vzok54sUgF9NMgG7wrrGuRDB7fXcqTGEJbRtTd1qtZcjnuGMRdbPJYMbb9nAuHjRhFyRC3mpEX2bCq",
  "key31": "3wWAuWcADZB18kv5pS26w3bt5kuzquoP5aeUmfRBrbKnrhvb1Yzy2XWxbV3UiLU9QWTQmeaQ4FKi6it94EzoT4kL",
  "key32": "aXSStibnJJtTzGSjb7HYemd2D25fxphcW836sQzu686tnMQVrdt8wuJR49iESNweBvm7vV8Uawhbig9vyuGQfNC",
  "key33": "46jVKhJ5KTiXKExPGhh7xPTvbpCLVvXYDNi9Rh8RLvbQeqzaH8vimN1jkRpLfBG2bt9M8N64uX4Ny1rVZmY7M2PP",
  "key34": "4Au3uFfK33VtCHnPkcn7ZECZa7rAg6N96fowrtpWkqV2jitt67D6jmNBj7smVxnUhCFcUxECThSKhKqVzSd1Zq8c",
  "key35": "2FjKEn5n7sYSgFyTy4MoLyN6dVBNwDsYqYhwcaqpGqX5FQyziqUUHFGdy9Lm6RhP1bLzT68uy3tVKtV7sPTTcTKN",
  "key36": "2qvmPEZbXWGA9NiD1AYFiyjhjuSGPZ2YsqcSp38ozK9VAm4DB5WagLBvJ6Z765MdPU2jfb43DCGdoFcc73dnjZPj",
  "key37": "fKhwR1NR2qLFfqTppMbWgVXP2vBVSknc6u1tKFon5WWhGxQowdao5DpD5G149gh6RXS1oZ7VcHw5hH6zwn8ByzZ",
  "key38": "Y6NBPUfDyDC1nwSCcaxTSRocJWttojZYodcpkTpqiPJ4xsfe8GdbxwPzKUC8KqJ6fsasaev5N7ScE5868xLaKCs",
  "key39": "2Jp2XRzbsePqC4AzyTe5j8iL8yBy1PCs7dUoN3QdCPiQaRid3CL5mPpHefSDpJAqmyxr1UPGPdXkvpdKtbsHQwL7"
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
