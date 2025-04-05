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
    "rVGTUYr7Cp8qYRib1h5WdR1RhyW6W6gw52YYwqnvGW8oCJSnpDgbqsL3iJxqGpEK7dcvT8K6qQf8EkMFVNcibjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaYsJ43Zf5aHmt3DdpscT8pKtketyvjjzJFEvif7wk6sbpnxZgkRgehEhpmjaLpUXDNRswLak5Fs1b95CdeuUEJ",
  "key1": "5n1TUuHazHqs7mxhDGPpiVySM6i7AcqTFSj3pubj779i45ykXH7RoX459HL4npprAba6XdSvEViUwWHtVcLzSERV",
  "key2": "2r8QQMn273gPfmd6gyS8dc5U1ikbAWXs6DkvQTFuGqMvE6m2HpXpPDJrjtvA7F9jVdj4GMgbUS8b3EpenG4g6eS6",
  "key3": "5CUhmekgEmZVU5LgtWijsCrDErSV8Y4kivTzpiZsMvaqaGYMhdWiwZRvN6CBN7pW6Lz8dCSX5TuMbkSb3EkZVjJC",
  "key4": "8AaLcfnFZ4X3Za9RsNUGnLDBsNKneBZjbFL9FEPYEoTVpKsfk2BVRs561XKvZcW95vEX2Vsgz6fFV8eqnvJAQs7",
  "key5": "5D2Ui8io4QfTT7RhJZhhkQ674prJCwhLdtCrcd2k8uavfsRiLRnW5F6My2DLU6MJbzEUfRYuQKPjsyLYPdYeeoDi",
  "key6": "gTwREEmws2WRppwHfDDm4QHQQGHH7dD5xz44yShhucx3Gwfx9VibjSueRJ9bU3iseujVSrcRkAejkCX7ZfFQ4Qh",
  "key7": "RYvnGEXycphm3udBaCoAdgjr7w9EEVL6FGfTGL6HG7yrsocADZ1QP9zzy5cKrWXkR7gz6py3s17sULrredcqhs7",
  "key8": "CCiPjXkXevWgFonAFxNLyGotDCCszbfa3WMQs54MSY4thhdJKfZv9gihmfdKKp6bf4SNysVgsPSkANbHQ8ADHam",
  "key9": "4DeHwstFjAuNyhD2c2aqL5su6btFUZ47A4HpRSJcvVioh5ayMxeAtbMLnBqCSVWW3vNMTy89KbANWxp4tK2g8LxH",
  "key10": "2TBrtdLnkiP6tG2YTAdbTWA2Rmg2xM4nkcUktRQ32CRwsiU8dbzSLEZX5aidHnmwU7sg8pdeTicffKTT6pEpPgNe",
  "key11": "48dmYptoUvcjacs52ka4pJdFYA6xfw857dCZUdvudy1VNhqynEkgbnvf4F72iQyToRtRJzfAUKQNB87RytS6yDrG",
  "key12": "37Aq3QQTjUwT3WLLp2pKt1i7DaXtGnACDcCcr6iBnh7yeiH9MAJhQq2PeKrYkmrKxSJrxSTrjv23FDPCFvbJ4a6E",
  "key13": "2uKxbUueEb3jPotfLFY26eotajKa6fNAVrAxfBmUfRKSkSf2wsDHT9kWiN9MQufexk9NhLaVapQXaiN7EFY7ED8s",
  "key14": "FyutTNdQwxaZavv4HXTS45oNMrWkdzzEZV7Qd7kPyEQtZuAE9SP9LwzW4sBQqDZwHeAGPPmrTGgmjcBMbSyQVFM",
  "key15": "621Wzjj9v3WHt3QWoAdrrZF531KdiFDGfDRgY2AmjdFPg5zv5XdKLDZ1pXytcVNwtAFZpeTGbmyxvo3vebgjDSzs",
  "key16": "2h74ZwSrA3FCbXEbdtjCouLrnGjUKnhCpPxLjWVpVFfpJg6aeWdUdQSAEuaiz4z17HK7A2YKsK2ekWcLgKBPKa6r",
  "key17": "xaWnB3HTkPunAn223HCDDkLvSrj4ENoR1KdcLL5q3ktE59riuni3q8aFmZgsFUQkRooPtMyqzc4BYpeHJnwgubD",
  "key18": "3zfiBQuFimvK44iGZTAT5hcnjwR1txA3xwTcWq5YJHa6t8akvwtmrZ6R929p26R8QunumTTaKK9HBSwggz523s8q",
  "key19": "4qTgfmdtj11KZbxjBTe2fe2FX8RHiMvxmHdrD8co7pzdRYQJjaHaRxar9AtU1cXSkpqLgEDxkxgQ4tSu4F1VAoeE",
  "key20": "3kPQZazKHzpCZ6FSSFNuYos3pH8i5PafMNgmB9UREDR1SYFFY2WK9S6nqcjKBjRKgmgboccZQ3N2QMJ1pU1cZ2xc",
  "key21": "4LBk2L1EELpJKpE6pLAdP99TD56mftXztxpic4sm9U4Qbw2y9wii9odqGCLHooVpXx6ycw7DuUbXqKrH4zoxTTEc",
  "key22": "5bkeve29jy8jxHhbT1Yf7fndog1HY6SWC5VEHo2r2UwnW99v5XVAUJQdq3xr3nvib58tutRbVBL9c9QXJrZPrb8r",
  "key23": "uaCWnfb5AyrsjN1rgmnRd1VfGhuHZyGiMfM5vFrx6EwhnxrRWYnGd2Dq7BiCzYstKYyEMexctY6LjqdgxNVfaHP",
  "key24": "4q8WAYHF6HFUumLn7JvxRuqUzqHYcJQCGm11mgegFLbr8U5t8qkb6MAtWGAKaDAVSoXzh7PYg22F2wCAAAxbLSXo",
  "key25": "5qHTpoMt4cL6zLTnefC1wgAnxvJHg9EwThSAtMjs8zSdJNgUzHbJnKv8fqKSs24Rps6MMZg7hVnApz2uVEKt9byd",
  "key26": "32nAeVTDKKGsoXQKZ2mBqzLvije5Pb9vWFuFzDnjqN38EYtsyimdA3N6azccoQ4sLRix7zy2xKrnGAWT817TNGw2",
  "key27": "r5wfasZyydNgugDXAen4eTW2WYDdJGCf2vqJbmvypapALV5shWmwMssjkVArsS9itZ5sGAD7kCT3eM1UqAMESXT",
  "key28": "4pYSHdXyF21QHz85uoR9VRhP8MzV95gC69tSCJRcB4hjY6wkkXv4KGMD5CdkG8otq6yzXYwnRGFmp7kdn1NtpmVy",
  "key29": "3c7acWMGN24SNv5QwJguj4K4ozupb8xnGaTeczH2kqVzVxNLrwoXEUzdfqqXg6ExKMXvLMvGNRHnJSSmdMd47Pnq",
  "key30": "5xZVbRrkcCPpzTptr27361ZZ74dpiC5MmNwtXvtL4XWsfXDW7UnZQvAKovy6J37CcCLJ6DyhtaagbnJBTh9VGELu",
  "key31": "5XtWDuQhJNugsYii13oQf19ZvmZp56H4ZqArnNcEU4qx2DfdowbLgVCXEWMS8EdSBNgzyLbNBnmoC5jxnv5NBcLv",
  "key32": "2d6my52NZ3ZX3yJujyLBawGb7ZEsJsMMHyVZaquJaoqV5LqFB7cpxgKvRutLJGRQWpe5AufqQv5udDGwPdbuCHZi",
  "key33": "2aqNjv77XdC9yQLhf16zmWBScF4eAPduaNPdtDxUx2xiFjyWkg8yx1A72EGM6sLTLd39QKqfP4tWndzrgjEsb9oS",
  "key34": "5E9sWatwCyKdx1JDuMssEyacLL3NYQrWQNDaiNfyuJ5sbfvYhQzBuCnzug8BN6QpQWHbdbVgzzsCVoR22XVAtgWG",
  "key35": "56NY1W3sNrNYVV5L53wphVqP52vUerJRCc7L51a8UA1FKqF82yGvoDxmqbkg23vtTqYeW2bQhidmXAxAd24WMGHA",
  "key36": "3XyLhUd7GHCYQEUxkAFXxtNSgsodPuYnrikNseFYfxYQo7s3d3v3zXB7B2snhM7uQRipU1cABnkYLXqSAHKptxf",
  "key37": "3fVJMzWqr25nF6agHY2zXZFsNAAWBb3qM7RZD5iLFJ1hp8sZwQXppbNDr8ijNx3L93BJDByJRCDELWYa1dJfQZNo",
  "key38": "48ZFJKuGgtczSc3zyYUha23LztbgmArVBaouk9PJWoZDmbShngL7wp8oEH9g8YtukTnh2KpsqvJw5mUkV2WhdiGc",
  "key39": "44PYRi3aVpz72QsnNqG4kFoCMuhahTEusHsx2MHpJo5T1spixESYvjw39Vwkcc8k7gSPJNckX1CPoZiSfs5PsQoA"
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
