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
    "Y2uTaGP4NsetiqsrQY4ftcC9n22KiCEGij8WizYE8b9ibEY5wgMoCaiQpoC3vmaWyKCWajaqEm8vEtRhVZfwTpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bda3kaB5N5f73e94zuUaty31AsPLtJMT3BqDnmJfXm32tBvQjhnDhEzGKkVPQWETSbYuGjNKppqajEBHmQxoRXV",
  "key1": "5fgzc52ru8Hr5fXyW11i4U5Kwjs41iw6sUGyS48vh6TWY9oiiYK8MYc4kgwxxZxb61Qt5ujzqZsd5NjMcvkMvEoi",
  "key2": "5YHTVSwaYzvFVHXhdwQ7sKH8CeJYF9MSAFxUy5kBf4XmfYNvmRZ5fcGgurpww2uLZaLqowbeygfA416pAe1UAfnn",
  "key3": "36Rym3CSvwbcGfuYxqYpNN8cDf86KwH2SpZsnZWWGDbZeUf8unvfs9X2vJ9M3MeJonzgb73ZV8WAqYFQaywMm2wM",
  "key4": "VKPvviaZnrRFrNdnnAspU1qxbjtbFhG2yBizfUC9kfRZEvBMiSCMNmUYims715jvsfZvhJsproAtjNhx1vFxT5e",
  "key5": "4Ziv1pBJ3bnqoHPuNDJoUW6XwPghz5ig5N9RFh1uShqgGe6tf8o8CfU7u2UvwW6ZiN4vjvh7XrJfiSF9tFvLTZZC",
  "key6": "3scZQdgwiD23oRywmvpkDxx18YZRHTze2YdHhApQJ3XTo8cV9GwjPAKssP3qM9SVFkxGDcddDPVCcjd4VG23fEbf",
  "key7": "27bc8tpzp21smwFcG7nivZTTgr3YE5WUiAn2THon7T6qqkKtFkPyZptAPaUKiFyEz4au3Ne8tWuWY9e4p2vuZnAs",
  "key8": "4gshfwLMfYPWDrzfk5rHMXN12ZWyDJrx3kHkoJvqLp5L1jDNTjbRPaAjLhney54AuhWMotaiSx31A3WkrBXQiqm1",
  "key9": "5wXzFY3cR1pDNRj6hUweQRzKCGDtfNnj9V3s6E6cd7tWrV99ATRkBYS7u9MRzvZken4m4XsXEoczPmVx3N1Ud9vE",
  "key10": "3obU5dbwNVeGKUSUuHR94TBeibvhhE2SR8jKzupBnvBL2G56YXGbe3E7ravjF5doDGLQ3KEFJQCodRQJZiakc5SC",
  "key11": "XPghM7iZ2r69fPKrxuuGM43NihWsvomF6sLMVFxfxeEi6cSzM9coNqRTMA6fqgcj1SvN3R4m2BHaBEMTJnj85gd",
  "key12": "2CKCHQZKBXhqjqvD5fWQJJwAAu55SsAWqv2UtLk4npp7g4pjCVEobELLpKSt3yjsB5Q4iDCxEH1CuCwii3avt2DG",
  "key13": "SGqJSD8iAYuHfjWexMq99p47LfyaP5SjUeDL6ZzTgu3naSQARzr7HWJELAj1bVPZEERLF3Zy1MQxseUbyxRDYqW",
  "key14": "ojs8iud6JyDd8p5LFkbfSBqAniZqkaBBXfRVcVYd7UPPSERi15TYEQGydDXHCX6biTdP3FECLt2XGcdVKbJNjzE",
  "key15": "5ST6eYvMkLjrh7Z1Cnwp3Rmu3CVnT2Qpr9AXSyBBGKf5vFbiAyXzTRrsBhwbiwPw4XyYyxZxmxJozUSoGbTV4qts",
  "key16": "3V2HqaMLb3hwQ2CUriK4PZ8sarBT5uMdzjVjc93mK8UbE459EomkcZYeBbfZh1H2HqMrNzQndLzvD8hz6nxZEmE8",
  "key17": "rYBKZmACC1SNvYS5wCLZP4ofMoUyf1f1wKSBG7hgt1AcUtK4xk8ebqJXLWZcU1TMJPchE8uRzbLQDEzkrpCrkYQ",
  "key18": "5Y4v68C8MKc7CfTYaAi5wt6vLSVaZHfeWvdWAc5VsDW6qjLvBFA5VJVcjjEonZ6z4TW6AWuMPbm4B7Rp8dGgGiNw",
  "key19": "2YUs3yEqkBfiS2BHFGdPEMKAMojk2xsVDi5JP2vz7D9fRXLya9btzXq6XxTUDRfppHy7u8odEqwj37jWXnB2mn7X",
  "key20": "4h1T1dDYUBSTciPwEhXN1xhbCCGThuTva7XhUa4jR5gZEWCeEScibkc3WLKZqMkFAMPM43janfZFLByCUTm6gFxE",
  "key21": "4F5tEuUQRmJFcBaTN531CrZnU8LfGHmRf7f7bzLeMAZSwSsUM6bEAzAUbmT4JwbYGcRhNDCZxNjVW62r5boxEp6v",
  "key22": "R4sJj2VKaerU2pgqg5jt5xwYcvk5ztGqf4ux5JzGTdSsaWhu5whQZhpMU58RoqduyYBDZ8XCx71KMYDX9sgHYzs",
  "key23": "4b4KuuK6GwzBQhSc4t7npUbq5hNb4hXwPBot2daLkNfZ1hKb7kAKrzqNBTCTWiDCs1tDEnMVCJEnKoETK7VDmstN",
  "key24": "5bTqeCjo2ZvnDoTzdgFHVvJtmT6SsuuEjKzNACcyPLctni2WFwYMDJX2fU6rLFN2dJXLXfkFDdJ2QSKLeeJtp3ZA",
  "key25": "217MT7qqfXFY3to3JSjMLMsRhiWuCNUHcyHf2ZwL9U1CdnzHvCFeshQaooBqRZbGP6jdjLz6yvGjLswSfmfVNYHV",
  "key26": "5idzjN8wyYTgWdk81M2E5Wc5X3b7rBhqgCXHHrfaN5kTKfQRsvrdMhkNQkzTT6HTQjPPxZmbTWxd5iVXDmxmBT1P",
  "key27": "39KCYqM8zeo4AQe9ApcoD2WGt3gjWsUnSx9e7ZWoJdTn8cgMwo5dsGeRFXkkZW1HuhKh1XfiTWetwzyhKKsyJYqo",
  "key28": "3z1WUensohjiDz8xkPrcn5C1Z127KQooP9vi8RmPQfXuRDEdtBPveigzsUNFrD1Tt4soqdPZBMXX1aM4EKhXhZC3",
  "key29": "4srxQCbuunXnTGNhfu4Wapt9upBSPrAc3GV8QJNv7NGzYDWw1geKareF2dE72JDZSsSbZjwac4un4v9vKpS7Xj22",
  "key30": "51VpBPeX2weXjkrNAR8RwwXjLMtQ7kAArwCDhKQFXVCq37cJoNDZyr22d89CpwwwZSR7vMtsqwHmZ5TTFp2X3M5Q",
  "key31": "3LmUKMJVMYT26Z6oZhqueT6FGtUEwSJ9ZeCkBnmHRZTfYtjLx1hSMCxvpi3dH69jsvCpYVzzo6tYokBmBWMD11N5",
  "key32": "5fQsLmswGJ7sceJ79JDaeJfcqT3UVtN4DGe6TxXyviUPma7Yf3ZUSGHoA6onf2ztARmpN1oVZ2JmL8y6Fr8Yt4Lz",
  "key33": "5mx5t2d1WH5Db8EuyyFiAAfuoij3YNNv8zyVeUZrfJPpJojGHinAZqA7oVP5XFyuRAv8zYNrfxyxKB3nQgeWz1vm",
  "key34": "drEgJfHnBX6bKVwpiueDasn9Msg9Uyxga6CT53MDA8V1YnsZ15bAxWNtPSwU7cPk3Xj8ufxqTxHeXKWpf5Fo73Y",
  "key35": "5F7fHa3Vm27KB9W2ujtYh8cEhCdQUxT2ZqK5zJMG6CHjVGsG8n464J2wGqX767USBbVH5m5gonj26uR3sjrK8aEh",
  "key36": "5yCkYniGAMBFbvq9t2vnVk3bWBT8eXmu2RvUmztAh3C9jiDmo4HTKBbxxee3zeQYN6Pe8MH1QS6bsFCL5EkZK7fb",
  "key37": "4gMzXsn57Gi5BmEAMENKnxXZREAu5n2isUUyZRTezfFWZK28YoGbQKstMZ7nTBkjNL878zbXLS77s6NtZL3oy3Z4",
  "key38": "5dx3CEZhrDkHe9CJFv4crTkxMoDJA4tV5RitDKtvPnHDWwQvYr6VoyT5RxtNTviSAeJUVH52h4xVDXJkyVFAb6XE",
  "key39": "3PwVjXAFBz7hymG9wHGPQcCT3ZXRzRxizhiaZSWBgfx3Avygb9yY5wDnFgbDoZ82jUqeviWqsRiSDE5c4wG2rkcb",
  "key40": "2dExZ2erDeoRmHiVsP45QtQFN6Lv16h5ytpPTW6v16W3SF4qSfyNX5Qf6uCfjbLAhwrKSPQFmiV9w9bRWLyxxxVS",
  "key41": "21dde5t2YBLZUMEaUbiAvvkNgyEoZWwkWVogq1C5kmR5easdxjsrPHzYe9gKydBgNEdDBAF8G69pYiiQTen8QyBs"
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
