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
    "2e8r8SjMLch5f6yeknrJqVJ6Wz5DMMBtDvtZ5dFFujbuH1HQRULSHLjm575hE2CJH6fcw5EfYEZV1QcHBFdgBnbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdPMJktsDupt3fJ5yjzaBWiYmkGCSDEn2tuQZfE57W3Mq3ZYRADYiy9ZUneX3cAJUk7a3AipWHPxLEx61ghCQqk",
  "key1": "2Qo8knsfaqdRZbAMNdsJJAyNT1hYYxrvr35DB7LN9vVtnAe3HooAttEUfY8t2DB29GuiazNwWnzurGgrXTKGFe8P",
  "key2": "4XtTCHNWANiUxJJBZBdmXoVe1t4yiYMeWNRZtGKYkALxXjqXQ6nQEAoLXaSax8kcChUaF3d6oCgxUmrAbBQKQzJw",
  "key3": "2VdAFNpociSd7fXYvS9y1CG17449U8Gk5noxoQ5JoBK8ZpXzep9BmwiVpHdJZNL878mZP3mgtcgxCCL4QbPqW3nr",
  "key4": "67GTHJqWTCVWbLrunTzDQdvYWF89yBFoFNHQ1hjvTMaEexpVNwCsYs7HkKYBXzXcQWEigqqfP31QEoX4G89QPC5U",
  "key5": "2tQU9rtcWrZYyLiVYfquGjUZCLYQZYEBtBkBGbDXxszscJfnLGsjbn91361sacwzBTMXAuu3x63bEpupPKftf8bK",
  "key6": "L1kggjLR42egUb7vn9Sn2VwjGX4ZKMmRrhdGVtMmdcGHYyGnKikGAnyVX8Hooeh1dLhT1eLVCBiifK4w58Ly7vD",
  "key7": "2CHeJ1uXpfhBuwvdZzBJyQRi5yMUNR1Kbp2Ztg25bCiKxFA1CFwCiGQw3JcUcXFMz3moZFe1vgJ2gx6i9KSC3vPw",
  "key8": "1ueMZsSoAojbD2Aqu46MEmyAAN7vBDBY4gWBYEGmvuxQQzZC5GgSXNooC3h6xENjJpUALg84sMkAn6CH9VJTw29",
  "key9": "yPJYYtVvAd1Sghxm1M9dYvXNTMLe3WexDDPPik7bgAUiXq4WHo2cRxwSMBgsJXod43zFAZVyEmTFUeDBpR1ZUiE",
  "key10": "3mkwaMJgdDm2s63tK5CwN4mdZCWZGDeQ5jELJXQR628GzZXfUUyDBtAcPeDQTtfUV1ADyZLhqHUWPFiz4PAwuzU4",
  "key11": "xHDJFd7tBrbSSQ8bqgDcavGFR493ogcTa6AykEimWtTuKorTcToFz8nosKWWo8eo9s6mzd45faPm7XCa7Mc4Ecx",
  "key12": "3RvHETMwYKLzQ3dRxc4UwbYZ8AQCeji2hR3guVA5aCDhe3AFymhCLUEPJbpGvbds1y5WWAH6HqxEBPb8ghfK8UKD",
  "key13": "piFA79q1nGECiaKVH2MjqU6abP4muPJw2TgwhfjunHgQWMYSjYDHYHHenDTCGHaaK5mViKgc458N6TN1nizc1f2",
  "key14": "2CtKuq2p7gLkRZAf7grDgH98txYtA21UcvAkGYKpv8MUa8XrEoEANKRwB23qaQHfFgbVssqBXZhb6RkXcHKXDkJC",
  "key15": "3fZpquTT9hAEa6R2UECsVigoJ1nrH31AU8KRdCwczgsEou7Mt2tsQBrFdasyz6qQGMpkehk4ptuoSudwDVoNWnpt",
  "key16": "5CVVGKHyJVbx2SPhFzeRydpxqKnzpzPqXHodidYoPYbLCi8SyCD52GeDS7px9rUMmvw1UY4igJnBEJTXBcniBNLh",
  "key17": "4aVT4BnpT8MfZh7b9ibTdAp8ReJVEKbeCBG8isXMnTzz1c2wDAz5o5Wi5tDgXKdSkKyhndTRvtRAvsEaynBML8LM",
  "key18": "2W6ej6YH7c98T8Ff9i4uP3YaYST9VMzixZBscLMhmmWGgMZRQhff5oNXsr5v2cXhv7NVzPTsVsar1jkkt2LxkdER",
  "key19": "PqhrhPwv7FAD4YkdTk4twMBp3Pfgs7xVDH6TjvT5RtCe9v1qzdDYFAZxAzkT75c8sWGt2WtNoJYk6dHCmmyqbej",
  "key20": "Bq1b25aWR6zFasDQw2wHogGKMtNk8k6FNnE2axA5iRbKvLoDejpz9QD858BQBonqmAnifkUsMHUKSV2LGukSAnD",
  "key21": "2uBbayJaUtpAYh2KshyKdMC2EE4zeE2MWZHJTN4iNgc2zF9hCmygiHDeav1y8Q3AQmKwVqo13r4W1yYFAwoxw2uA",
  "key22": "4mrRzK8tKNd4C5VqcJvGuWtDmx4PyYuiWQDaHqt3cw1Bp8q6TtiJCLWJ659kdLpqLVmaZA1ftjAwa947gTK7e16b",
  "key23": "3vWCbPiSfCfrVK43LSWcC2afWwv9978VKMbmunvAFDLHhY5hpfWphnjrASKSvmZaXE2BtgJEVc1mJbwUPAq3iW15",
  "key24": "4i5r29KhjoRX75uAspJcHoHAhtQbxgQP9fhGtatyTupmh4NHNUh8oTNmTyFZ1La1auF6ozWeU9o7LGApvXxjYxe5",
  "key25": "4SDbcdgrcZnRkFZ5FyXqf4Zgi5BJgYXv4P3E9p8Dc1frDyTYTiF3C3CCYDPhGoQ1bnBz4yAAsahzFMKVFkfvjbqF",
  "key26": "4Sv9boFgBg46NVdX8A7k6x64JvtabfnHeqPyGSYND8xEhZNomtuoq2Yd5cfpLuHwmwRkpQYyVFLhKDKdBLA36MPJ",
  "key27": "4cnCobBjbw1hBR9g7kBXSCiEFYzGRLZNfZHVomApHhjS1pmcWWqdnMq2QRsjBdb7nsNEaEVpsdLGGquP7RY3ArJK",
  "key28": "2YNn7K72p9ceqjPV9LAsJFqJJNJzabz1GCo29Hdz7QxhhJTzJTFNE816qGFfVi4hB1sGKVk2wUyfqv5XNUDvSmxx",
  "key29": "PjivST1s93m8NDf9Fh4ABMW2psmiSSmsEB6jWc7GVtTLvyeHhf5UZnTffXgk2fuCV78RYAXTW2rTx2hPdSZf8FS",
  "key30": "4h2CVppojEXaTLyoMftyxJvZ65Gqq5joyPTcDTSVsNoKVrarceKuuB2F65siQLDM3zsXanmLes5WbrUQ3YBPvUMW",
  "key31": "5qNKwdYJHZmzTmGGPyzCcq573KB3Ri7DNaBbYhccd1TtqjS3w91KUuSTTnpcSsDZaYYAyEdiKpU47vp9Le6tPvWM",
  "key32": "44TGeQMh47EEAf8wtoQWDNUFNrYdCAAjJsgQKQwASDFfERvzFU2ayjSXnNaVmjrNTsyVQvEyKvcRPHHskVYUw4Jn",
  "key33": "5ieRFRe2DvS94cgPCkGpk1wwnYERCWBUQ14xSNKpNKWBJKKmfRdKmY3wWcAHex3FRn58mhYfAd6t1H67HwyCWs8v",
  "key34": "5XwvB4igszh1p5HqUJT7QN3dotgoVzELevUmA14qFUdTV9KZYzbo5jc34yaQ6VXBMPahCezFCLSD322kBfbZoVC5",
  "key35": "4YZ94TEsYKXhTZHD1qmYUJDjWJN6c8KcC8x4vU8hdGjUsqUrhJDRPRGG2sd1WK3R6oEUuKWZfYmPQDbKsN9DT6NR",
  "key36": "1prBhRGvnkBpX4K5kWnSGGf1zQ9HyA11m2JGfCSDKxjRhDVyzpwyB978ShTUMtGF7ADXifZYF6tWrr7Z2vL3MCJ",
  "key37": "5Dxzzqyr8iX9GLsEWmjf2W6VX4SvBXhh6bienrAbwBh1G8QhKkNZcncroyZMUFpdn2rvkfgRSSbfGUH57bVozvQQ",
  "key38": "4n8btxhGuUdrUnbtDZcVpZLBbzKh39z7KEEbc77ziFPtwVddoshUqhTdZ2qvtNCApajG1aAQrcbcRDdsT5YKJdz1",
  "key39": "3iPsN9nQhdESqPkMmRSc9Wx73fSZUvSERSvpRdtGRS2cRwfBxRH3ciFoEP83LsqzMdMTbKzDrQNcPNHf2vNcJSqi",
  "key40": "44XKUsXG7jgGTwDgsJVfkMg4WsQtMdpsjJS75qqBjqU4Sjsw3r9dmUkjDwuwtAoG6jGBTxhx6VeHGLEwkeFNwBMw",
  "key41": "2xfEw9APa691mmsDnK7DV2S6GBCrKgkL5yPidd2jZNi1V9Xsn9fY26GxMMVos9YfhaArECvWL4z1UqXfJpHPww4n",
  "key42": "52RzqLjSuYbH2hBmqDqtNytkca1wmo7rAzpEdZBjK1Pwuk5UzWjpJ5vSFDqWKR4STMSwXavjzartSKTmbjz4fBMs",
  "key43": "4pSHLeS4tiJBh7DPdGtQNtnwW69ZCJtcnccDfEWRLvxKM9S9WKzTFXPEGsEHwLnNnEoRyuRr45vLsJpMQ4s4uCVv",
  "key44": "5GFnXY5oPZTKQZ3NsmGMhfDTp9DDLz6KJ656S38uNj5wbZtB4XeQAQB8GwGFNzKDg9u9m9SJsQj81Std8b7769w6"
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
