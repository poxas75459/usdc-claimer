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
    "1ksL9XxBeaYCAdr9KLFzJ5kqhUtQvewCM6GWLxLhAc6GtKqBs3jbCK4gS6orXzwv3AXYagZDB1vUr8cc77Shtza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkHSB6vcNN8YpF8AGtBDzr4rCgMeCxohf3pJQbTdPYLQnsNw6fTTg4L33gvHw5eNLfUzjhKE2GKwLu9hcMx112m",
  "key1": "4p9D4gZ38n4cvfJdA3PYi5v7kRVbJGJ56WdoPNZ7gvctf5B1bVS49FtW5DRqvpPqVS83n9S7C8wcQCwPJCaJW5pg",
  "key2": "4eYScEiMtJBfrVNyxtkXysP5fZ3mznn5n8nYwJKt9njeBFJUGub3Z4dijryhZeJJjyJ9nd94JTGqMjZyhRYovTAQ",
  "key3": "iZ73xTkTn2iqY1ho6tfMB78G8SdUsMFcxS5DaqJoU8h552LnyTit1ajDSs1ueQcCiymBtR9GAs7BEdPSUHfYCtS",
  "key4": "7otFUaNj662MKaxZau73PLuMw3cstudQw4dMsswZzWY9Tt1eV5AeKhwp9ACKm7M1cwPKACcraUJsJWxXLVcXQrY",
  "key5": "u7TgrS6mALtdGZnk5wUG8jypefKbsDfXHVrF49gSHhqLcjdMu9xd3rRTZ2ETjFeqhFXUjdBdcnQQDydqSkvF5Um",
  "key6": "2s8G7bVUicj5HUBnnrJRp1gAXPy8KnQKYWQMeMiDAc5LyvVCcdMaHKZ3Snp1Q87DPekXAJWR5VYX6nGHioN5LGPh",
  "key7": "73gGSgFAjcaLqC1RNr9xsWkY2xG8dm3zNuWchnJTi5u5WE7rqym4nj6K6s6cJH8vbEyBas2BF6ryRqwLSFP13Nk",
  "key8": "2WYgJH3969u5McacHFVLxRxidcrGyqPDJ8topLB21D1Ymf4nrBj7xB77kRAnJ5jwSKqVmWTidezDEmYacyp7CEMH",
  "key9": "4b956YTJFkvE1P8oBQhRqMpVRsYtwoNLnVMZkKGSwgPBHPg4N96M7cXQYg4jqTUVDQhd44T2JW4oS7supFrPKNnH",
  "key10": "5kVvCxLPWFvKrym4JyM1WcEYWfR29CKmDUxgk47n4MNhtCzu6ChhCVNFThqbbphqL5m7y18WpHWQzEA9G4kfdBwa",
  "key11": "3Ztk5RYxNBEYnqJew67uiBXFGbWB2jNdX8caHGZZ7dKThPHPzDUjvUL6MnKwiugm7fL7QXcyUzSrag1oaWBgp71s",
  "key12": "4jeu6mpMQBazNaqKYfZJa91ZgV9a6Je83waEeSMtsRUPquyynQkjUuVxAUL11ui8J69JULGRZ1uAU1m1P9dq3TnB",
  "key13": "3yTuiTSU5THBbdsfG7TAvdR4iwKRCrxzcbYGKQANjAmfLgwqZQvHEBwXjgv6dCYMnrvd4rdyVECkipJEFVKr8RLs",
  "key14": "67X116oYfYjBmNsiFkabATcEm7LgpBvCrdMTNiHWYUTEmiJ6XqDTREayD5dbci9RPJK3ScfiEjunLVknhbqJM2X7",
  "key15": "3ipX26wMFuz4J4cqHWz2PcEVb2uFptzQzEAFQaQskMmsUZY94u1jv3uDpKcGTCS9vKJZ9mu2iJA8gwtbeo43W7xP",
  "key16": "3xv1hwKqk5DQ1ZSqcJctcgCrjQoEbR4UP3nU6m7d9VrXxVmkTZo5zsWevJnA6UTido3ugn51dUK2geNw7QCKoLkD",
  "key17": "3rt2P4WXSFmZnt6BwitcNiKfSUTrUqShWJP9iGNQw2ie1e23w22KqYfhuD5hpUaepoBU9GUg3R2wynndnsRZwowq",
  "key18": "5p12LvniUwdA2i6Uc9zYMqsSJSjsxRF64HAkES9aGPKV8pnb7wkemm7dpsf44h3y2J7hxYS7NUkGRuK9rMDYqSHc",
  "key19": "4kHMUtmkC6os6LBekMkUAy3oe1F3kEPMZE1epsC55c8h8Wftjs3m1qm3CvRUSRbrZSBqJqHydg37WXc59cAz81TP",
  "key20": "3YwXeGtX9xTJo8GXVHjf1wkWLB5etEyAc71AY3CsKXdyAEihMMtLkKNLvM8nZMygftH9fHvFAcHWiFYcb2XoLjnV",
  "key21": "4DL4xy8sWkk7NZ5MEKAndbpsFvNzcG8LM5hdofzR2FJxLs8QCyuErm4eSsWTcoiipYEnmgr4QXYaaj9Atwd6LAkc",
  "key22": "3uB11yiuPzNgacNk8waWzMugefDQ2frQ6b4gymRoUm83w4ovDJWUhnAAp7y1yhT5cbQpRphQm2b2uQNMGJYLsou3",
  "key23": "3td6BPM7pLChKnWiBhtQ26X9eETmNGxasswdpjN2qxJWCp6RskY4PLFihyCANjnZiUx2c3LkZgx3V6Zg8TJJhzeT",
  "key24": "4TPH5BhrRFMiqwFyD5bvEEexoSdggzhugrUS3MGWtcuRpquPGoL3YHh3Nr9kL6qmqJM7HPdd1YZJkEoqHQwGT76Q",
  "key25": "4Q3HG4bMrF6VoxQ8i6yv94NwokYBxU9X6Xhq38gBPgagc6fXvnUREDqXcAqdpHXTbFYJQMgBit1nsT898uJZ3DK9",
  "key26": "3e4yUrBqBNkoUUpnEK6dbB3dVBUNYkSU7Mf3kb3R3SDmYB9AT6ZLmyQA8kYPU3BCt3Nor71AEekMwVRrAxTNPJ49",
  "key27": "2mCDgxYfzEoMTJWAMx9XbovyjTGyQVoJQr4hJ87JueGUYNe43f5E7uVSbZ5kaKNADjFrGCTCk7p9da8bgHQrRqG2",
  "key28": "2rx7Z8d4yzE5i39HXht316D49UNajmFaKP2wvNZubvuwDGSatU8kAsQbhBrCRpFLrBNZCpYRKFvaznwd3cwjKb7m",
  "key29": "2Dc2jmMSBJGVC48DAPbBikyfWijDkKvCMT5SUofYsg2PwL4PhJ6xXBuj99BATazEzjVLcQ7agAzwNExKbUKdM4NX",
  "key30": "4cwrvBfRe2sbeskBVR6BR45mHtrpYYCMyLSv85t1goY7pjsHDsPmkPNbc6uViKYo1WBTR5QHg4bpno6hrtk8fwCD",
  "key31": "3b5vaUmFNWsAXHWBhaKTjoV92XoJsD7HzUkUwXU3dtdzm8CHTaDogiDQ32G7fB9EGQRUofhs1NNT3cJmKt4wi7Km",
  "key32": "GWwfn93wDeMkq8iTJ882TRs4bBy6ED8B2T2mZKXyPbmEMoEKcESrxFxbMgY6N1Hu6FW1zXXsfQckj8phAjfH9Yb",
  "key33": "4NbjiDfch5tVn7MznK4jWLMwBxaH9TrxcCnqx3bJFkfAcqFHQc87XkZaMo6YrHBTAEErDdSx2nGaBB9d1R19sLAn",
  "key34": "4gnqB3FKn7CaUjCtk9Cyye3Vv4Ka1GVtC4dhD2vpZ5NPUTzn8C75atvQvUmBFAmnUxavFk3PmTWxzqysdHgMSpa1",
  "key35": "4RftDDfLVC57iofDyeGtYMPM3hteW7EfzM71XY5N7StqVfaXxz4zrU6K96FR9YXP1HBUBQxdtQ5bJeijCgpBAbNu",
  "key36": "RHgumGym6xGeeJAugW6cew8kmwnH317rPhkqTBQkCjmnL98j245NDqSXMj6CVpUkPqMpzRqJFr5Lbcv8HrJAqwG",
  "key37": "5CrRYFtHheKHqLm5NQPMJTN81mNc1UYue4mSiZKoeqLiX5dWwAvkNFwsBGMvyHmiHnfG67Y3SrjR4UT4xSxuNbHi"
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
