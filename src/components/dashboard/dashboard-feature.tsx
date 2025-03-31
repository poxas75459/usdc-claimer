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
    "46U5iSDXFGNUQmXywB9YekA3PxqthvVrvt6D1NMTW8UjNrNuuAef69eMtRccjxPbjzFoWcfk46n25kybFoTp6SQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDzF4pypTvCUiMdggbf1WS8hYiSWHnupCyXMWnbJ1FtVxoy41awR3AHCFJAaXp78UrYSY64XVTm39qYoBYMPho",
  "key1": "3xusE7SU9jBYSnYboGaazd4yG6JHXDBYTfdRYny7NfnBrpPUWios5fjFXGaKj3yceFe5oXD4xuA6dEuZRnaeZT5x",
  "key2": "3K3snbpFkZRJNfnTcWdbgktGiRPocstdE1AU5LL5nwiSo48AtUpHKfmUzp6M5s51xbHDFdNSz2QUddyNNjMny8ze",
  "key3": "2X4dj2QtFoKWLddYqGbpnkRvcb38UQkoXouFjUD3CUYV9GHMakMB24X2jzJXLGGLxojhfB1bVHWAn7WHCvVhG7sN",
  "key4": "3BBUfx2CVJnc9VLXUfgkuRpDkwrWtkTW8Scs4WsxMc8VDXCz5T1JhixjykSDwawxpmYsoQzYRZTtC6aGn2wjsQXV",
  "key5": "5Uf6w21Lya69KTBZzek8ywzJHa757dseSkZPE9peQeJmgXXCCebJ7etzdifq43EGtk9tRM1M6d9TWVYF1YYaszs6",
  "key6": "4vKhif4FPK1NLkvJrzjUUN3cJTh4NfjqffKXMPM4vTW7nvMTjVEHiWmgWcUQiBH9K8UiviurC1mbYUDaLxjhx9DE",
  "key7": "3TeDT3B6UcE6J4t2Ryose2KbVjpXYe3YkCtWCov7tFhHacyqtkWSfY3QJwjx9v8JydVqWBtPtWKPJFdFHPw92qn",
  "key8": "4Sgrek2z2ix4URKP5SGW7WnQDECYJfJfTPJuwAyAizU6UbzKWzYi9B4PcS54r7kaAi8z9HW2HFsFSDKkXG1WVqF5",
  "key9": "3tSVPLeWK617jv8DrEQL8eDchUuVv6QbjJLbhkCKvxuMicJmGTuTNgSQSmzHuWyEX3Jtr6aY9jYk6K68mPkfmQdu",
  "key10": "2onJDnPgZNzoNNUodnRaWUCoKc6UEs2ERca1z84a4xq9Z5FV3FHZJrS9QNieA6WPxz8i3jqJEZoJW3hLeByMkpqu",
  "key11": "pbq9hSbTjWk1q2XxVcR7yawDWxPqXnHq5dq4KJVTBSasi2F29iDeXHjEjqtY7cnheRcxH3dFdWb1fktSdgniczV",
  "key12": "2eTvtd52S2uLtJyWduwQ2r6bWajrQtLYpfJcbGCgRCZShe5KoePeyeyEXLn8ZgxmpGd1TGuC6LjyrrDwPpY8fBeb",
  "key13": "3oN3sgCKJCVDK2ZUDf1ZvQ17fReXzhfDDbrCeQYcbL5WPY9YaSY6AZpZ3QovK7CLtp8DNK4nssJTRmeagy394PYV",
  "key14": "5w12VXw6eLk3szrUVukFq1Qibq2GDRGPpm3tEVAyZoj1iyiQgoKf33LRrLhntrUXHSRVav7TnuihHxHbEZhrhpWU",
  "key15": "3uZ6uefpAdDkUb8qfxiYGcm9tQ5M3pWybMt1Lb9MXR9CsPZisMp4G32XT8vp8ZEtWF58RHp424twzVWAyDsYC42Q",
  "key16": "5Vs3gSoXXrXmmG2YrKPkhVXb61sbQBJbbBsXRZgCvsTx38SnPZknPNR4fMpabTBXPbLN6XiNVCdAC2gb2B32vwxm",
  "key17": "3sQAcyYPhrgyw38CoXFpnqXHDpMdSRbU7xyy4HYZkA7LGNiWfiVHirLpKMZSUq146AfJbdzrvcrbZThyodwTvNXY",
  "key18": "337jcw4UvbXWTTcygVfZ4AnWVkDxRddAWAgEciMZraGCQFzc7LY8CLbiiKjrE7QyM4amUeunvi62NBksa2x8ex22",
  "key19": "5QxBrHvCdYCTKyo5hbfWgQd8JkzvTWq478HvjCL66i3BbstxU2VaTBXEJ8aSK43jCFiz6rMpKKggT2UT9suwwuug",
  "key20": "4hM2fqoFUDpy88ht2dDymCi767tVtUA4FX66qox1KqoMEiYwgXvo5Kue7sWShWuX1NcNSAhECoGF1qmuRut12YYB",
  "key21": "55t96guEe15ybNEBa8BkASWuSfZ2Hn6sPCqsJ33zFMpVGkCBxf7W5Da5xwaCTda9o6wd3aJFooBeQHfyKTmrPJxQ",
  "key22": "3dUeft1Cm7jnME5fatJxzYJijjJJSCNfcm3hgQiUhX2aNWD9WDc6GUc9BqnY8fAZCtUrqnC4vQquDcHfqgzTETeQ",
  "key23": "58miCuEmiFUymBgmDJYrnxVCvvphqRfGSM4jNUUye628Q998pf5FYN3rkfbGehpcNmUzkHqPtQ9yW8vYANEmLfEK",
  "key24": "3G7jpfYPY1c8pepgWaz4o4PpE7eDvVx2aqkRtHz6BDySUu9Z2m2sPMYcDwLVL1RrCjjZd7TvtguxsWvVBJ6Af4XK",
  "key25": "4jV9Bgq4bA3FWW2Rmsqzh3CScVXPUERVowPj35Lj6tP7kszLRirH4nuTSAGgvM13TXFZXQzh7N3VGFnij243mCYr",
  "key26": "mV831Z8bRmtxnnYwkj6h9a7EjAzhsKNqh9RoNjeKYB6BRRtoVRuPzot6B2E8gKfTfx1qBpGFAoNSUR77AyZxpKH",
  "key27": "4tCmJWFirhWRwjtGfDveY2fyHVToYBa76KqxeT13AjtahKYNEheFuynQ9tkQDXHMoLJxdR6yM8nBEAwoS79cQkW9",
  "key28": "3eybSiWdZKmHk9Ey42C2vPe3rFWTB4wt7XFKtb13vrHUYZg19osrUBc4CHqkAA62MKxmrjGUKXXFwoqPwEQtWuWZ",
  "key29": "MbV1k7Xs9dT92LEbPF4CwAsBdGyx49LvEXgWUdbjZazodLUnv1hUZM8Lgh63UENPUr5TbX9iP54rV1HvrFr65GP",
  "key30": "5k8jxh45yQN2QV1wwAcerKJCcFCh6o7sbZye1ZLEdW1X2XiNJHbSigjMPwDzcoCEXPNxhJrX8Vga5LXEPPMBQh9F",
  "key31": "7QqK5bzWL91fX3FBSqwo9GZx4LjQAePrZDT6N92xN4ZUacz81Sv2K26bz4N7BgHghSNJkBLfLviCo4eT7jMfNjt",
  "key32": "2456Z32vuyY8Lpi47h8Q7gmHcmiurbAtEc3aeiwoXDyzBqqN934a5FpgdakmE65LGHxPoMutHWGNYVeetkga5XCU",
  "key33": "Hr72WdGEZUiPrZyLnUGvRX8hbDF2GasG5UNxuQoec8TYoygBVGGCWKTsRNH94YQVki7vqYzazqDipFYUyRSZZQu",
  "key34": "4geDexwEQxvMrSTQhgkWbkg8fXxFkse3FPs8hNS4apa762RSdUsuGwmRGVh7aY8mfxaSHhxUUHSxfnBMP63einP1",
  "key35": "4V4CMugPbCogEvv9GUy92Aujua1X4pExfbTmFk3uiZ7PFo5X66gnstVx6M6BYDEmWmMNfyBLrc8rJz2jVog8qnWT",
  "key36": "4s3szY9b5ZMN4d7Betr59TVgJNE21jbnSx3EybY88W6KwnMCRMuuiJTsD5EgmszRMw2fs8UVNJ1BquzQH7kDhuWR",
  "key37": "56odocjAadCGQj4443e9SKirqDaGTeTdPaP6pdNw9Wj1QdSTNd6crMoA2WAnSpRtZmLoahkTTjDYJV5LTUaQFKPV",
  "key38": "67T2xGTSwifVGYxEptFQo56tJRsmUWodMoutjNr1c1yk7SM13N4NGZRaw2q1cBm4PN2sb1e9vMuhHvyZPudL9Dpv",
  "key39": "4pQXHGeWxD8EpMBytpDtN2GXhUkCtA4tHBqQBXMxzTNwqn58dTfWNNpAyQiUKd6JT2uKomA2NcqcRjoLEyfXgQ2N",
  "key40": "45jW3jTXZ9mJatmNuTH3BVFbYSWEiMXg77P5ZfVh96oaZV23aZ99g3h3p75Uj5449ZFTRU3mbRQ3H2wnYRjdRHQ6",
  "key41": "4RjJTuwy79CGkjdDrWv5S6R4euqmXyceX9SAJzj6YTnQB8H8xQcPtFqcwhuiAzGT2aTkqiwQPxaVzj6eXsqvjqH5",
  "key42": "2dXVyKSBqf48bAYHX34aV9W6GorVQCff5yB1mBXgp1sE465GoMVmXofjXs2VyDHJ5tjbNrLQnNcb7MCfV7EeU4dC",
  "key43": "3CFMpR91Ue6soHZkh9v7rYNTMa2c4XzmtqKo2R6VgiMQgaUPsdgFnNTwRzVEBEiLbRiCmCMQkH3xESxpPkwWpyPt",
  "key44": "65wqokNGCvD5qWDepadb9Gxv6155ZKYH1Rm8A3FfeXQ7gPiWLbTpeMUbjGgwYhidQp5Pkys1CBbNKSJYwCUD7NQt",
  "key45": "31kLr5Bg5cFNEWfu8k45XaXra92jygy8kRTZXwH5daCy1YiRsfRjfxiFq9x2hjsX3QV8kxZ6PBGbAcgeK25VWymu",
  "key46": "64rYihRLZeGD7YC9vHMENowFmRvxWTKPgZX8CjnmYsNiRK6xr5m8RFzJGymNAavYgnAWhNcjKeXE4qQt7qtbVeUm"
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
