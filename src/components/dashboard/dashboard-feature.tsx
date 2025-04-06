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
    "fC4KrQccauqLKBti1Eo7q8YBjzd93fnbjQgQ6ALU6iRF3QVHUmF854P66SEzqdKZw6fLs4agjxWygQDsNE8CE31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mxqhc3h4VUVFnY5JNezRVqX25dcaKaHdJLKDJDFxiwrgAYMR5ZWpsUpNB2LvgP4PWWSKLKiVGbW3tFoUTFnUvGr",
  "key1": "4G3XQ4p8Lfyifyjem5717p7SWA6gNrCtPUVWLPWtj5fMrbkLdWzLt4zFiT27foHTWJniZKiVZS2VeSicvXBPNX3q",
  "key2": "2fRbyqpr1EqaDhahAi5ppx7NYq4kTvpJn41s7M3HVtjzUhgsHJLmaRiEnsK1jiRyMEugpyGQrYhgScmCJdACSYgS",
  "key3": "fgx8XicjcD3UgSfW5a1aDRbdR4JNPCUHVZ7ous3Qhn8o6oNswoMQXBtvc2x91Z91yTXMsALwwDk5mhcGPbEJkwY",
  "key4": "38WJG59jhJf6iJuUbzXp6iWTCWCzBen1nwitcKiJVLf5e5UH2DnabzjePpiHW24SZx2FiyAcoDp6iSCWzbYWqJd6",
  "key5": "4YrEJcSaJnBjHvoGTYdDrSxuPdb2UCQmGPkcN1sSQbkAxmQ5eQJNoztHipPfcjRzLD78azGMp6rZp3btzbP9p27g",
  "key6": "5x36z7typwALqDHe6mkh83XNwzzwNoCnMd25ipinA69mE5LDrvLPQjnAz1kFXLpixQ2zchbkaXEXP9QpohzNFqVq",
  "key7": "4T8cefGvmuCfY2YmyMe1GPe1NaP5rSWNFsM5eabpbspebdWTg6zQ4yT26iTXFHpo6JU59tNrXdbcixjEwXDYmxHB",
  "key8": "3mN9macwRmfWbLJyCtkEf9ZWZipiyNSxasi258mPuMUCRm83x65RpDmWCvT7QaWzfJ3CNkaYnnZQ84p8rfDCW5sT",
  "key9": "34VgfiP2rxpyuSytD7U9JZBXrJSXRPEWHdcE6DLNMwecWB7hskAs9LW3QKH7J14YYkK8ywnUTX2Ht8avycJQDyK",
  "key10": "2vFmib4AzQyc8roCUcLygjb3NC1F9E8AnSfGRed2ToFoKQKmK6PERUnoV6UjPQtU2cmqCUD4iCK4BLAedbkjYWPU",
  "key11": "36NbHbaSwUfphGXNP3PqPidgrL47pCMSw8iZqzo6CY69BbHLBXaRnzUdyjWe9n1GGccZt3Bt5bBAvCNTmvJENy4G",
  "key12": "2JprSyZiMuRVNHXyWxLwkXRkTbbu5waQ5VLy9fZbvFPfdANEgrBh6iH6dCwNVSTLjTh4UAFranGKmD7ztUUHNWcH",
  "key13": "3kP9Mm47q2Fvr5fow51J4oyTVu9QBKQrxRb1wgzfzC8Hk3w6CvaXbySGbYjLqLbHbimvt67H3yJK3J83PDhSL9zt",
  "key14": "AmX39kAsGN41DKpwhKfeQvgvUppCBmxaEPSAP7jXyynfdbfGUWqAkDDxWyvxhdbG9WQWZQ1GCqmDvcjjTouFLfj",
  "key15": "48xxpn5xVb4pMgHEKbRP2Zzgq6HEr3cwM6vLouhv66JpcTf5NNDGwxtTaYnVjw44CxmMyATWnGoSgTUaeqyHjZih",
  "key16": "5VC8UVPsXWxc4zjJAFkw3r5qo6Ny5wZxb79VbVAirK3SuUfZqQHp3MWVktUwMyMgnxhV5JBirFH4pW3Rz3sGuQPq",
  "key17": "4xyPyAkFW7HfWUSg31G3rfWZn782Gt7mdX6dUmB2HCcYA4A69fiEdM5JiFfhGdYju5PaFu2o6JzTQ3Xvhzo6CX5K",
  "key18": "43EYgu8btF71nrQuFTXt5yf8QgMWrwYZNGXYRnfMHEPnb6mFdQpXaKZbT2iy4sfURV4gBrjhXQY2fXjTRWtrGi2Q",
  "key19": "r2NEhytF3q5w5c3PCSvyfz4bAPVS54PDa66FpvZb1viE5ULNG6KRakd71TQkoNPn7JmAquXUBXTU1LzHJUPL6xm",
  "key20": "8UzA6bX3JwpqtCbK9SwbFgSvHHQMsFJxMAmFrfHTjgdiWDrxEHs89LpFt7vDVeBkz3GVAHVT5cbwxEGb2TyzFUx",
  "key21": "3NiQ7o2BTyjpLSsfVp2dupHrFj4vzHEW63mNKsr3snpxEou4jbZfN7CP9Gr9hnvkebA8AULnU21soNrnxgazPTgD",
  "key22": "2hKLfiF9XyBDVwAb6LKkvvTgTqnbK8y8HL2GXvJLmhpb7zthB3JXUp1smRk783RyEGocj7qJgww8YK97D1kwJ933",
  "key23": "3xPATjCdyG4tEaeKT5my7rW7hsQUgESGvbHRfKqZw8VEm329vu4B9vTCA2SLpZiKmH1SsGf4TEgJgGEhDdZFfiDz",
  "key24": "Z78mgUkyZVNvbjNwaY5n9H7GJvxXM98VEiDX5RmEEy675hBkRtVpAGtUFkVuvEQ4s2ijnQcSKgzvEQsCYGoypmY",
  "key25": "ZGw2z52fMLKttR2Sjoyi6y4JaK7zmHTg23FEDDwJFztPvXYpF5VpVwtGKiKrP5fSX9P8gJJ4qz5Zu6CU2JnDuhZ",
  "key26": "4bQe9Eu8L3jjt8TTNv3RnHCK7MGmyk2923ysPyCR7ngD8VNPLsBYXSBG8t9tYSHHvNPyprMLrmZoox2X9dLbFYf2",
  "key27": "3AnnrFFymNqTmoUiHGHjVUAWYiJfnJ1GBPRnMD5D6bQJwDQDHw8cy1j6tLVPZue9eSd7hi54m1cH67D2ibPEbDtK",
  "key28": "2Peh96m93833hFvQXuDEDdGnsTqkBKFyCZUSqYPmkWP8gUsiJ61rweJFrk9C7N6S1Gpk7pfPn862J9rfwTgJ7whY",
  "key29": "5S8naibuiXPT8GXRrpNGUf565RPHcqFdHUppxaXxqb6zQFQkSs1JiD5op68ey5dGB51K1e73gAK2Ga9fKyadmUV6",
  "key30": "4Gxg5aKxN5WWbFchBPP9W8x5dwPdppYuweYtnBeQ97xqyZxRt47J3CdxkHYNs1maTSNji8UrDpkvaqKey9tuikNp",
  "key31": "2EKg5Zwg3H6Kub6Fjhy6MP8qPiDCUfeKL4Ymmy61DYdTjwh9M4MdcWHkTPAxKkqUU8V1DhqqqkhgNcFxotDr7j8k",
  "key32": "3huvxzCJzvCy1Nnjn1hCGAs1Ysgbc7YQnQigSdn4E9PjPBdPNjNc1KN1PXJr2sKc8PYtxgFps7x8Bt4kdBm33qgu",
  "key33": "3QEQRKbRGFN7RLstFCGgrHdQoLJXLT4W54hVpKggwvmeRJiLTLHdV46dhTHH6ryEYbDTWpRdYWcv3AFv5vStPTbN",
  "key34": "5BUBc2yiDz3bShrsZ5rTGZYAKv2wdZHGU7Lh3GssvHv2wo1C2zc39GGMhYNeFhzHi816jmpZDG9XNrxCFvATVuYH",
  "key35": "29wmVY28sPWQkMEnDuhotbHigfbTmNTz5hyUGv8SnoZ3tZ2uJmLqsYV32uBDHFFJi7SSqE3rk8kFRs3HPW1P3n4X",
  "key36": "2aAKLecmwuGPSLQPSRafTHnHdecCzEatC5iqdhG5cCc5HajjvQny52o1YKgNdwLmVUpp27NDP8GGyFCocZL5MZ9W",
  "key37": "2arXcZFzTD9XzyTzy2oF2aJGcc5yzzKhPVAjAGRgNiQXiQXQwV3Du2wYggwhsqFZyhS3aqBTxsWrDB3T2xvnC2bf",
  "key38": "2fE1QZBzQDZZcCxMQzDEDod777Q5tU4PmHLoowqAR4UsYZKKdsc7r59DjVna6TVobGZCXC2ewRzpZPwKec4xM41n",
  "key39": "5wH9evzaq6crMxbKxUGou53v6fKb2RVUcW6ApjhpE7MYPgcwUyoXxyrCg9RRAg38jquS9aCD7MXZMuSFabZww5st",
  "key40": "2q3yx6tzKLNUEVA6efvYTG7Es7o1B7etZnqcXF5KZ9Xg1L8cGnffbCPtjHpjsNMJMprSDkVmzpeWdYoskd2y2xXk",
  "key41": "5rZS4XbtUgumtqrSC3kUBBkw5Pz5My24a8jpJaEcydTwm7Pfv26snutGUeHjoZxsahqqnQ2DWXT7QBM2NeDjVCKf"
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
