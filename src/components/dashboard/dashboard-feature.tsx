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
    "idFj3BVveYzVQxQSnyXs5RdTWpdfW2ViVN65o8StmwWXWovphe5oQ1yfrBZwuRzuy6kecEm1b6C1pmzgnY1jh1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQKMuUKxS86GKq2e3XmFgeLVCyGHGATq98Cbn4TxrHv8mFSUwpd9Aphjctsk5rX1V4iNGg6tB7F13qRjd4Hnms1",
  "key1": "2vNmHegvuVRuVZtHc1TExsjT52H8cFQWR3Z9gkNABaU2YMgUrYopxHtKs9v52PCic4ySfyFg7zsEiH3Bwupy2ckA",
  "key2": "2FeuPJv6jkKi69vxWxhtxxUTztTXcZ7icfSsVhLRWFgd5roiqN6JrT732mkggtZEsrfTFLXAmNjNsd4vWDcw6jV3",
  "key3": "49B7WZe2amxQXLD59FrmArMMCd8v8xPKszuoDnxDNeM2A2bgD964ACUDBBbFnGp8kCuM3ytDsKk4Hmij93vJzQVM",
  "key4": "T3AJxjaMnRVBPWLC9nL2toT3dNX9RskiZ8eQwwA3p64cxWWPCjaFTu1Kamt6LFGrjNmmRBob2jBKjV4xN5R7rig",
  "key5": "vTGsmAC6eM1zRVduKV6a8WnApehwoHbMvgpQ69pWmn6pAXXxGseZDv8iFavArcxoDuuyWeW2BkRVMtyMYhwpDrU",
  "key6": "ADAwWLirZ5wJAz33V4Hy3vXj3uhiRkrUQ4ukfaufu4y7zQ4vHXf32NUdvmGXvhuNd7zbfa77aDDiYws11drRayQ",
  "key7": "4yeuy5Ve2CTdoxcJ2NV9fPeUej6Avr3zRtQYeKmHm3mQ2uD95yP6DZmokkYrtjskajgPEmXtz81xYX17RJrQXVb",
  "key8": "2mM82nKkieyrgwE2K76YwcsU3HyBFQnZJwQwuWb7rvaS2cxuxtjtoq5a2c2eum4q8zpuRtzM3DStj7PDJwLSChh8",
  "key9": "jYYWGQh8tVJwCkNmgMdgWi72sgvZvCNqhErUettYrt3YnBdxBLwCfFt9X8TggjUJe9sUDjDyjgHMxqjWhRRmExy",
  "key10": "byZBWCYhesAL8oJdTxddaQ2TFwubmBWWnfkQHsnT6yHWVF3Ro6HhVCHnSTVU5gLCDv7mYUsyUH21ZvBejP6uaDY",
  "key11": "24vDNmgYartWtJRe9jH27F7LnZcyKqPE5gz2fmX3Qdw65Y4u57a8fVbv7vuxwJEgnHHq353tVooqsCxmMG15QXjD",
  "key12": "2LvLPACP5mtkDvGQMD3QXznFRQt7zMKni5C12KVxTKn8jfPTLwbgBzkbxCisP7C5dGCfEvh8ddzSD7Y8XKgYVjgb",
  "key13": "4Sig557bg49nLDpYY1kJYLrdQsN4cGNihGpbsq6DZ7TY9fotBM8hrcRmpZa5hE7QkCPmMb26fu3iWEYfiJM4Yw9T",
  "key14": "Gino6tN4sF1fB6fpbCt45o1iHJEgMxkooPip7VyYa5jDiL4uxBXoqNWEHQxx1FrMheZJkph1uzuno4JBDMT6JXp",
  "key15": "4qe5PHogNfCiq85TNiUiXM16J3usjwUYnagVYNmRwd81M7kY6hgQXX2tJRzUKW3B4m9VVJeD9bhPatsvfXB3vvz4",
  "key16": "62efBGaUU2c66u5ZK6FJRbtdqh6aEdfp9sxDxNeSjjJ9XtL7YHYXRA7YETHUunk6XhadJdLuNpbjF7BxutjTh2tK",
  "key17": "2CZ7AHdR22UsQJZVFsFsQTsouzTtbqPB6oPap6eh4Wqe9acpBRWwAUsZ5MnvSCgj6n9F549S92XxV7KBUWFiJpD7",
  "key18": "63xy97ogY1RXbHT6VZX8T4zdAPSVVmQm25kwgXPgPCF69cFKTCG2rkzfJvXz7PsDUxZioEsjXnoPUBBffNp8vBL7",
  "key19": "3GuyyKBQN4uhPXTLirhwDW7JzgJ9XRQJq2e7oz8i151BNjDgozqT7FiBsvbTHmrdg9RMHRPYzZWM3eeZYwZTp6YF",
  "key20": "5hqkzKZYUdB1ZveW4Sikd53Bv7qUQ6unxTgM8vRbFKmU1gV79hfTQrqtJ4MdcdjkpeVPsdnHRWYMKt92uKe9WzfG",
  "key21": "5MYWTuMvQsngZkf8t2y7VkxGZMueFrCPftL9aRoFdUpLgBhD2fxPDdSV4sqyEHm63aXYDj8FQr4xwhto1GdTjNRo",
  "key22": "48xqpFYhbkifWyEsTzVcTC8wojYHKMwrDE68Qz4auppVLmJhger2ebwGp2ss7HRz7YLFYp7cQH98aWAFmHCV1jeT",
  "key23": "4UeV7Xheb718fByj19YaxbUfS4mT8DoDwkqW4LJb8nmwuKnBgXgaw7nCaBZyAJXsMFE2kLdpM47hCBRsLNfWnUQw",
  "key24": "3V3U1VDKvLLMZQSd4QtK956XDJs6bghKRdd6ULSeNVAoPVPtEyr4muJrvEbTiqPwtE3ccYu8R4ovTCov7x2mocXx",
  "key25": "5RjJGePThWfYTQ6q7p77RuPqJixdkZvjXkzw8PqEbZjcvPBq5NoocfeTMCpXS5ZWsyzDAnr4gbbniBtbJtV1kr26",
  "key26": "2pJz2kuMsgiSkaA11jYp7tqvqMeN2arasP2txbt1PsTiqy6UjeAbrC6bWoVaapc2DKBRGkhuSQS4UwBsJoPJUSb4",
  "key27": "5musH9XyHGsGt3ZXTf5C817tEYzxFUDEC5aAL8Cjpcia21imJdLLd8E7BMNHCEZhX3xiBvmBjrASCtDhTQ46Jyac",
  "key28": "4aZuyKvZHhDuFmNcuMBK8bzwUboWBbvgjKporUPCi6WMBff4pXKSZj2BZNvS4HbN7obiS1dEB9fAjzSvELqN4gnZ",
  "key29": "3JH1jK5E3SkscMuvjW63ZRBApib7xZ7j2GVpTrAwjT4v8qn6HCr4XRaACfhj4jkAjhZRmj1Hq63bz4QhUGouf8yN",
  "key30": "2vBFNbpn8owR3NteFiEtDtC3VZWCSk4Ua12N5JY1GTWzYJfXR3HeVPkZkmdG3ttDDxpXY7hZPPt1NEirjGyqFruH",
  "key31": "2GmkhK4Y1kWHC8tXHt5LpuahTMNixMnJA7zzNWM3F8Tpvu7fmpk3zUn57sPdAyPsx4SW1P3Q2GVDDGwkPgEJrmVY",
  "key32": "5HBTWazYUiLbU3ieudPLiAMPgvaUJDbxv1GvuBEbhNcJuWuTRxrYWMxKbQzqChn3gbwis2cNNVbiatcEpDoedAYq",
  "key33": "3cYakZ8jPtUS9Md14XCpJLZK2WR6XeJ9ftFay6wqGKBWgomHtdiUeYbBtJtUMh78rB3Mu3JhXqkh7sgfZdDvjbmY",
  "key34": "55kYRb7PGuWNW482nGg46MN1pGNymvghUoYr1tS2huvM22PiU9Nv94nhuuQpHSunXs5hczi215BAkEFCgAnEkhrE",
  "key35": "hafPXyztGy9Gs5wnA9UVAb5hepdYFidp11zEWCJka6cbsQug6e6v1tUbkV3morFQoXCNkr3KiKqqEY1PukzNLfN",
  "key36": "NUpiY3zY5qUZxqPR34vyXjjb9SsvFoM2Aa9a2NKJNNpmiB6sSQhbsQCdYESdEnibYJpCWai554ydw6TNmjzzkXF",
  "key37": "4KLUsvynDCGwrJsebTGzGMPBPiXsKQteEVGXZicL2jLdV9JLvdDqy5N2tukWnRLrs9oVesMyA8J11pyXhzAUzGx8"
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
