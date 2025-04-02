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
    "2kb2p3zLcdLkQmj2J3NYYcaKPRKapmW1477tG66dKaRMWX7w5dB1JsUsszTaT2QRLrcJiVUM7G4XatrqAjhdWhXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHwWZiS3KZujr9jR5E7y535Km66ZNcmQHSodJqAguoccQUM6MqBwFuTsJcbRfZeSL6j5EPGDgcMSjg3KzwmwdSX",
  "key1": "595SKrQPnqGRKaZjubdTMkmr82LnW56Qz2gLP8edSGU3BWB482GLYW9EWxd885SGrbfxh2aXGxye2PtMx4MKKnSf",
  "key2": "2pfMxcpBaskoHJ9rytrWW8qQLT2NFKDamvbMU2s5zdnh4abom6ywpvae3JD1JS6BNorwrYnsqhK7Rv68f6cNTqjT",
  "key3": "42ZC6pezPfW7nKQHfhjfVcLdQ4BtBbUPNV8fYkVQYhQXk31XhpTMk7YUgFvEpibzvZvBTjjbV6trjCcnmBTCesNd",
  "key4": "3wbByvwQKiPnX8J1kifcAbUiYHM2uGJ1uns1onBuoCVDagVjruPkz5E3D7mN87UPwztZUmn4CDKT4JYUDrievrWx",
  "key5": "3kQjjoFgWBM65RScm6EMG5nwwFqSdPH6xBSXSQeozvKCMzhE63uLA8bNSYXJx25eTjHvZ3HHs4iNLKWGhiSP5PNC",
  "key6": "s8bJABqoZmJgwQmsSyjW1CiCtC9eZazQdVmUvZYSwFdfH5ZppHt5iBexgM4xzFs7x8dZFHk3uDJJsUhTYEm2sHf",
  "key7": "5pqwUMCjok1aMm8tsMXBXTji8piPw6q8yZuGMyV2GRQNaQPhcVHF2nUUi4aorq6cjEijoYHQxpUPFxd8HL6stPBA",
  "key8": "jHhWkgQwUuRTfudJLi9YRP2aJ5giS55MY2uqmi1eP7SUmDjKgiBCHBsfXU3ZbBtd2s9spmCSMeoLwBK5JKxrwDf",
  "key9": "5haVWNxtWje2CtGSW5fYBrs4Cg379EerpGE1hNNPMeZrdwQiKVXocjn7pQLnz9odyohsfB8XN9gwE7sBzScFH7iZ",
  "key10": "4Do3sRG7gSLPaWJ6LqgjSTRLRe9i78aqZ2PkAJAwd4xE2oHzMuqUiGoDu26i3K3KFYARM3mWGGyyAWrRtHr7Jbxg",
  "key11": "xG9NJEJVfoowWryP2g9ZRy8BoVV5dYPXU1qyX8NuYxnZ3P7JyLqyWGiKwVXpmqubZzkfXAB1vNpMP2euFDfR7sh",
  "key12": "2cgAcUpYH2LVrkYNDwmcJrL5wFu31rBUMTMYvViyp8ki6SJWygkg4N4VkSK9BjTDkn5dfCBwEf2B3Kj6rVdaDit6",
  "key13": "5cd9T16LkoXqnUxC8XPXBHjc1oAPfSBfYZMR7a6q7CcQLp2VvRrGa8g6jzGpHXQ8ZEXmWeTPPoPysF1GH82zCMaS",
  "key14": "3hvkZeWFVTwDa3eYU7ek7ndskjV7V1qvkUJu6BCJwvEiD6j1DfiwEoweMMsBzUcPSUxR8mLpYa14ABxzn2SoMXCN",
  "key15": "2qCbjc1gXxfVi4osX6ev659WdawSxMukRpkYCdPX922KdbMWoSe1uLDbdYs62zJbzpXganamEabePhBa4grxfrtn",
  "key16": "3uF52vvcm74XrEsKWX1EHY4cKPjvY9Sa8NvNjYAHoefqufRp5HPnQ3wqMoQ3fezxyD8HiHroyeumdQypzD7ZxSre",
  "key17": "4AXPT4w9BSw57jVUFYPDMTQH8LZVvV9Sch27xKnpoJuA6o8LRvup9qZmrG2ktj1BGQ8MBqA4Y7VKQUMvLV6NWRvP",
  "key18": "XCmpN2Rc3UXLty5bgA6Qt26pngNAYpZVUWvVw7F4LADJthC9RztZqSMs89ppjV9XosdRqTyviYXFpLkbCutxQTV",
  "key19": "uprhi8NDrkrKG9ytzahCqaAJacLhhmgWJeQGFc8KPaqXSvLYJjYZq62MkLfMFxSig2UxM5GAoq6Bcu1yQKmfZGQ",
  "key20": "26ga15UsMagtsnp4mKc4LLfegrmLyNAtY1L5Vf34Q9nzRemKFUUHaeomLdKLLwkmNnUE5dWq7sjfnRXJvRz447h8",
  "key21": "4TxCHaL3G4vPCAHaKS4P8um4SSgHq544uYWrzcH2pbQe4ZRTePMEMXcsBEbLZZvkysnJqTxggJFuBrMBwcTKenFz",
  "key22": "5iyKE3EvS4y5R5bxhrzw2RMNTCZxWLzZTyaY6wqhKDZEnsMDMpcn5rVhpFaLpDUihUhvx1haNkoif59zu784oLJK",
  "key23": "3qPEMqC4jFzpFeeVmJSF12iYzCiNLdCavNkUdZhmT7Df9hT4WGHyXhhPLXcunBuLfK6eX26VgL93LqSrzEarvcMn",
  "key24": "3gARmErcQvjq1eComenhAhNbaJCR9e67kzzKN9uFoN9ApyEBuyXdSbi46JgqfWC8jjY5YE6kFYVQMa1NoUYDfVuR",
  "key25": "4EkXL49rzmov9447SMD8Zv8C9UVyTrN6zf3nMyMQNeaaYsvhhwTRKZy2N3dCk5Dtt53VGktR5wqo273sGVDmQqfy",
  "key26": "5oHFj628AfvADoFJkPw4gBNpLseDDHtp9ixuSfQgbUWBXGXjW9SHV7t3DA4Qa8e1xUykVEmNj7ucmGNQVoSsaPiK",
  "key27": "5h57BtnGFPZxsgvrbQG8UPMheWPFkHEX1wzcg9bREh4ejAfX5LCrLdBHa46ekGJkYaJBCinMPvTY9o553hKJcc4c",
  "key28": "5JBYFHQ8Xuph5y2traGWrnFbKeV8csQrN1uQTbsxn9vw114KGNBXw9ahwMEM3QWRqyY4RaELS5jzMB55BVzT3GCQ",
  "key29": "5etbMSGDQRi6eipfMfJxrTtphbFZDTJiKJXLmfYvzvkcQr4pBxkvfYmmtWjsA3wUfdfiEUZmp2xo9F1EwYGxKBAA",
  "key30": "5tNMzgrnQ4yrU98cqqtfRrAfrcMnk9upSLdpcKTymty2bL7zQuHW9JR9JJ47iRGU8Nuu2cF7JdUfGEQhvTshhPJf",
  "key31": "3kbywmbKE8xPUkkW7wnFY8K2Jp3HVkweZT2Qp5EtMo7mjDtqVs6qxr4FRckYbinXHMefo7eFvjsPLuSArWJaVNy",
  "key32": "43aojhTVtyy3BgmXE7DC5csvoDxJ94ji67tqXjUaGUErTaPV5YqdmH8uc5VQ7vQSZXVAXRT4sBKDLAcDam2hg41H",
  "key33": "NRn8yDnypz2URKZMun8S3Qdn3P6R2fhGQf65WKrrbunVLrtqxp8ULEJhN2NvySGT5qHggaQSnZXMbEd9mn4A5hL",
  "key34": "3Q26wQ7ccbDzSonQWrLFshKDabTK5knepNwfB2fvsKJBZ5yhtBK3kmpSo8p7BVAdpGaRJiNvhgeVzYAE9wzjXkhd",
  "key35": "5Ai5AA8bWNbLPMLeaEtNZCnJfUT4d3X4GVTwLwbzvgT7ACCW75BKv9N7inz3qhHYLLf6nKiyM2WUKuf8ETJri17e"
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
