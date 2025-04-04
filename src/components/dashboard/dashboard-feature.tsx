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
    "4XYa84Eg53R75kNPdLjkfHJLWEJnuhMDUtKvm3BSGvEwSkdF3g2JF4acLk8HP4W6AiKWQ3xGNKxzv5fVVvAJHqRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3Tzq5u6xgxztwg5h21ivyup83iJWwVYZuBGRfmxi7R4tuY5bMmWTGQCEdpyuMt9DyXvo16yQcJRZ19sPLZDTnY",
  "key1": "2pVHJdqLHqTR1Z4NxuEdAq8eht5uz8a42vk4Uaw2PZBxm2K4sARTYaxsoddXVywvZgiFv8DrG8jvep7LkmM9mrJX",
  "key2": "N2Cfg2nxbR6uohgteeLBui9BKs8cRXqHkCQgeDb62J1CSwu5Teduxy1Np6wqzwMgXYPBpnQv6SzUQzJcQo9FTAd",
  "key3": "ZjKckr6eCFNzLTJMSbwcNiCMwRr6QexM2SSsLcaWEpenV1t1EopPw2kJgUyqNVgCroqYUgtdkR7BxJDvg16yi84",
  "key4": "35mi7bZ6xTr49s6x1VzdLN9iQw9PXtsRdG17BaLa89zvdiuv48zpZjdSzpzGNqeovaJhhXZR3xKDtfzJRsGBSyzT",
  "key5": "8gVAry3nzWQUtmyywGRpvTepT5ffV5tiBojnJwUv7a2mYWspncfeipBXjJFyrW3ruZUD4MykRSgY5haX82z5NXv",
  "key6": "2sLFGk69ZkHc9xhcWakof3ja3tvjG6b9PZ3Tvp1v4ifFimxARiZwK7qft1ofgmA6K5F4mRj4ihUoeuxSF9nfzo4e",
  "key7": "55oQ4cYdfg7vfbq46CmWM5uXBus8Twa5dgeWYQVxwtCwLmKVs6jBbnj6SyccLqhATYokhyJgd4JZWqg3Gd7BxeZh",
  "key8": "57EuocvtvGVJKUzpVii8PWT4rvtD1pGCWnR6yJ2aywhtds3jr7rr3HnjbXwsCffvUpvM1JbejMm36AFhqwi4LDUD",
  "key9": "2vGBkFHTzw7WNTz1dybtQYZreomib4SroWru6o2gje7v1Py2nBrNBSZUueKh3uB4wgWwNMqbbc8MCpzrX3XtZxv1",
  "key10": "ypmekoLWMffEAjfzQtAUM52xduL3pdcP4ApiWG7v64LBgAVD7i1GHyKigYqmAy7DHmsrkDrCLgMM9DLeiJJCzGN",
  "key11": "4Vdrr6gmx9Ds33Rk21ARJPX4NnijUCSuehGSfM5FyNYUsBtRhHRtscSNPVpNnGGFLSXdL53wfK7cc7ZFF5ZPQA5S",
  "key12": "5TxSFc7VMrVMkTQppYdcioyMk9tKVeMgsGZFAR3vbBtvBxkndhqf7GV4UyMGXVM7K4ugBCfEN7pEjfT2ZvA3Mmij",
  "key13": "37Q1WCpqcXYUQJ9A2yhw9PhGigDUCbJdLRZaGLvjmcHhEDGQgbaUgYvZsi84HUccEpq1JnUHNzyFMTj4rEEiT6Kd",
  "key14": "2AeXKfZ6vfehbBEcv5tzLZVo9RTrJFUab2wG2g9Wye5iMxF9Fra1Hgg27fxtMhdnSoyjEZv4kmbjgDvMjvz4AJzm",
  "key15": "62gdJyH5cHrdY6GjHAdf8dGWjuTnBKic4KBLobqXkBvSU1eCssCW2xgWhzhKnoAYba3Ti6FhpvMwzoxnAxbEDzu2",
  "key16": "2R2E7xWF9ZWwtNddB2u2jiqv7kS6snASRQ7uWxuz2Tqdxf8RiAAShc8FdMqoDrTYYqxFUZntYAkr5Dd6Fc6hxaPy",
  "key17": "3Pjq7zYLM9Lj9n5mKhbDQPGjmMTJeUKam1devTSoHDvjwwWGzoh6eXx5ZS8N8towLaTUEXNwwgXG2HvPudgT5eXS",
  "key18": "53t4zMnrjmSPUdHAv4598XgWco1FvSFz5vJXty1NeaaS31BNWdwMddG6NkoBpzaS3aBmCkPRWwuVVwRgLdwh5yse",
  "key19": "3V4zNewreLxEGoD3hLT2FCdKTtANErZwMXWADQ1FSomUmWqaD9C7QZgnjPsNCSCf6boD7juyxBZLW2kUwXKpYsXx",
  "key20": "2c2DWSyrRCQwMR46vbPARZphBAscqpPkJPP3NnMrHb3Ho8omBDbBycMXFecwJH2i2ZbGSdwxYLhLnjyfTzTUYWbX",
  "key21": "3apZ2doEwXnFhVBLmmS4ShjFJUwHQ89Mp9vSLrSD6ePioYzukpaXQvdFKRwo1SYwXGadEYUvAJYRm8M2QNAAocU6",
  "key22": "3GDJiFA7X3iNtNisQXHuLUa5eKtinCRuG8su2sqK3Fz8WfVKfLMLLJBkF8Hjo6AqgzPkQWmgz5Z13YRhGwNA2CK6",
  "key23": "5f5uAQs1rwM1xnoGSjkW1X8gCMfVdGG51r9MCrfEiSzhAJH5DK1TzZrbSF7eyCMqr7Xqi7FwrJNE8AHX1emvaGyb",
  "key24": "3dmypj3n8KymFT44zapqheX7iiXQzjHM9DbLCtyyMu9N26XQGEDHmCTawELtiMR5tUw6sB4HPsGCTiCxfUjxtv3t",
  "key25": "3xyv21TVnnkW9TmAo9GoV1a5xeCvrkUcrruiFrfLTmpsPvWqMpK67pHe2G1U1x4XK6rfDTpQBfHNLqzodRkHHupq",
  "key26": "3cf7sFPYxwm7beS6i7AidGGtrXQQYpozDqUaS6SEd4vBBvGGC4Ho81dCcmJLcVFSM1MzGMjqi6DV5xKsx1BXoQRj",
  "key27": "4DXGZ55qhY4DJBFSCpXsRm334XVrwNhbkyCZ6krov1pjEHXGkUNKuUXE2NXSPM3E4pE1S2smQQXErPwxuL719NZb",
  "key28": "2rsvvPinWkLdHCnDsbrSmJ4kgo1DP8qNYzdhx58T6ud9nGswSv8eK7JhH7kAAJAbYABQJ3wRNxhSkoe8WhDXgMaY",
  "key29": "gpnT9MoLKFZRPZLmE8tgmTayApktXe2Sa4mdYrKf4xRQFjKU1oiH47uzbzmqx1Dfr3bQCcSmZehdhbWwzsRGKZr",
  "key30": "36vaeqT6u5ENYiipFaf47uDg3xDR74Perx1WP7Y7PWiSFzC9d88nZNii2xBvemqBi2YBQacuNtNhrJ3GuUnz1AQ3",
  "key31": "3phmt5tZ1EW5XnaiT1Cb4Hz8nSVPw5FYkEGTw6Xy2hSsogonc4YtsTaNvRBVdJU88E3XAMNEPsNitATKqN1Cg6ZQ",
  "key32": "5vZu2GYWFrSX3GQn9i3YZoAXdJuFkgMbp7vnaGTtBsMPZKceaMP3wyXgn8Wp8q33kJPYB6naxJAtwfVxpnpQt7EW",
  "key33": "v3FVP5RcAuMiW2SPhjtSYCY2wkMorB1uJG4YEoW3gQBSfrSajwAgevDxBJDnxUKfYZzCwWcfVAuQLaVc69XbQvj",
  "key34": "3ZytX8rh8tbtiDEUK7mkSkrbak9LY5Qs62VB9SKABEVgTQKnRJNdAqprm2YCxF1xJ9mTuvfJErvzTeauKnbnuybB",
  "key35": "TRA2TfqoisyDRegMYiVSVjyEczHNnmTzZHLjSWutGsuynchuotKASMd9mij2pjtiQiML1yrL7f5ZQm5g3MY1p97",
  "key36": "N4BUTc4fMaXWqY2shM5D2G45gXiTAR3qnhtmrgc4hdUmLVGAZut55zxf7pBkA2cXWjv8RcXKLA1K3WhrhSTZmpR",
  "key37": "mHipT28UEyuNaXLNqXwLd6KL5kgzyY5gs99iFGLQwoGVyThHqFpez4kAoW93BG9pXdoxiEtVCseLiTP7KAWcv48",
  "key38": "CHXCnM9wbYGihsJktRSYkwjKz7viKbAW9PDsWkU9HzrsjhUyfFgViZQfyZJ7JQGrgkkPBvMJoJmhbvQ7RHnRdvG",
  "key39": "3R26f8KyUGWvvHB4mUSFANZrtaDrQESCkvRd6BT1BVLjSD4N5b5kPPszBsYfuTKLbj4WEqVa5L2YwT1hoeH6kEjm"
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
