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
    "eNJQZaTADgV5QDrfokfuo57tVcuDn6aU9XuGbrKgqbdCEbYgiTkwbtinBNRJr7Tw3iRQrD4DHjJRFb3oXScr6YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SFndxAcnWzUHgzWcNJdD9EQbvXtnbzY8QCAVaiHRCFMfehaN6ShNZmp1CGDuA78QuKPGrF8yEd7Z1dEchASw1Sz",
  "key1": "ydp5ndFQcBGYGdf28pAaRrNCeiAu9qLVhZPHAcmh6R63HWUjxzXdbLoZyKqKuooTiqcsbgnyQtyhy8na4hU1rJv",
  "key2": "2WATAd3HMAdipeUfi68nJQGciReK1nCfNqeiXzJFyWowJjiCt7pQZqr9qZZ8zHJyrFer6ad6GiAxRmWjeCfZ5kKc",
  "key3": "CkgK1McPLNGYMR1ATcuH96cv43UxBZfapV1576YiBUMMdAcmBExAcY6bnL6YBcaoffqrto1qXm2qZxEVAdibKVN",
  "key4": "3M8X4QenyZrhX6rGkenjM7X9gPJAdH2dAuAp267xGQQvS6ZMFXXAKpGwbR9LKBXPxhcWPBp6PaezEE9PLT9TRu4u",
  "key5": "4hRTMPnMWqAUxV2LFmZnbdJsoNKkc817asa8dJT9SQUuTqzyMx8sqdXyCMPbL1pVNWyA3uWdKVEE5zpcoEFU6ypr",
  "key6": "3JWpNDH5b3U6KT8mA1iSoZ8BfxqUGZxqdUnVbBu7TxDZyRFDXB9RQqS9eSQJHKqPU73rrnsFHWA2Zt5NncLJDxnd",
  "key7": "3NxD5RkFqTEaHYpJRqCbawghe6uy87AR8P1Lqg2V1C38ncfeT5WdBpksLdHefviBLZn1VS4LV78MaCfBMd4L3qeT",
  "key8": "2HkpHSzVc9vnZeg2aqD8wUNcAKMBaQMVSQQsJtQS9xXCZZ9JkfQkQ8hWx34aCfN4VRnAeRE2GfFNAQQYTiCKKoJ7",
  "key9": "HBWbphyKiJ3VUUAM2vgjDY47JE2vknJX8r7LQPV7DM9MypxCU5FS83CyXY6vFhxCr4W49cNd28NofJ2zQuPCSPU",
  "key10": "3JDo5UWTkaEXRDiJAfCTWwgxNtvWLApFVF6bop6hKoEDghZD1zvHPi2Gxy8GojiGCFJY7RwiCs6sxu2gBeAawrvD",
  "key11": "5eZ9uCTTzoJUhyjaeScfGLienw3HiZAXmM4bLxy8t5soEvXCa23iCSnKR1dYwmsEzEXke4EnGzZ3s2K15VHaK1pK",
  "key12": "532VjMESW2owe7cA2xW2xroJtYLjK4dpx4TJkGBJ6CLuWXzs4XaWd2VMmnBzwrEF5KZLjHk7kfo7xoCUeFbY7xuR",
  "key13": "2A7K8KDPy5Te8hjPvV2Ha5bmRLLEXjbFs8PNdZMkzVBiYuePQz9PUXmKkJ5aKBho5zK9ra2aW3mP16sm4cmZqrUG",
  "key14": "24khFZLgwQcVt27p2DkKMMh7gzphissL5zxrK6dNL56Mh8PoHYQYEYYJTBA4utfo1Ls4BCUYtDAPjyHS6F4Qheee",
  "key15": "4esZtUGYWFnv6RMkBWJLaBQdrvdP41av842KcPcsrkBctkqN8ua38vXsJoU3oDYUWUrjwLsm1VFW24mL3yx8yDbd",
  "key16": "45KBUvNSsdLVH1GfuLakk3mnky56vG29JEfhN6mLXehC4VyxM3s7y8cDAtX7fN9UTDgGT4LeH7toQLPZtLsPSHrW",
  "key17": "4Tg8VMrA9JZ6owbKkvSutrHN1UxTifFLX5fJoE6dtw1hEphBLuYCvQ9FxwjRMNHWTciEaP8jZKAaXQUoCNgzqcCy",
  "key18": "4ZoQXGPPG4D7SK4wXhZXDRjEwhnwhiPoCd88hEeudWYNAuAkiXe1JJFk8zCkiAC8TZhFzfKxDNPvXvA4a9pfJwXt",
  "key19": "BCabdVNK4kXg4XungboSGLWS8tQNM9DzoPBSqcAXdna5QMFJ7SDwWDYaiGYeMt9moXD3zDLekRSVfxH3MjekWrk",
  "key20": "3EyDFo2yDCmQaCJ3aWWghf3FYXBHLzEvvob6URVnbB7FVLFcTqoNzvh3SD9dGjMU45vi232wNuPFVoVnbQ157y4d",
  "key21": "5xcPhbbj51Eei5K1dbawRUoiAAn9RBLbuqJWxLupAuHUiZwN3vnvuksyqRJMBXtfNE68cbj5WCJHkFkqFc9kpasJ",
  "key22": "5MBZ4pbERmPm2U6CLrBL63D83NVpbTfFSaASvWWpGWCkyYVAzU3bnuHEE1ErVigTr2Anhk2KLjPLSnSFGs7c1KeU",
  "key23": "ddVdoFzdAVhUZbQD27EBQiXrKBoRqnJ89s9rXjHftXoLbfdHtypFnsRrRgn4ogUYmPkb8d4fFuRhV2PMGXo9ts1",
  "key24": "4RPQ6nxdg4FYy9gsW1KXyMjwHFz6BQZ9go48utxkad5z9yr6fnKExx5qDnuN9TD3J91P7YqcLbppzZBCdtgj7Js8",
  "key25": "5vvN9xZgpnhkao7x7RHZhZ18zAearGBVpWB14JvJSfndChRrAdGQxqEUvXNLxKMb87rcVrN2cxbJYxC1CbWy4uiJ",
  "key26": "5nNdAr8K8jMCaxMk59ijTTAuZhi2oRHwuqkuUV1u5QJGTMFH3QeSmwXD6AtYYVuvxEi65NBBKm2zB7AgvFMvqcBZ",
  "key27": "5pzCFNp9eXhgX5QqdGLBB3twZTg13yzmc2S79hkWMXcPBAK6ReSJWyaLMTRkDeenb5NBPKUjvja2si1xni7fd3PR",
  "key28": "3NZd7wAfjQ6t9YFyrMNedMMcNoLGqagj2cgz4bFfjaoubnrhaaUzt6s2VzLv9z31T8mUpZjFh49GBbojxd25VRbp",
  "key29": "3dxgRwnTVuL9Me2VgPBfefvYSYPCdn2bogTMLHBj1cPX6dvajeeu9ZFBGsfxB3cGx53Kksh2QpirBfcvAA8krRxp",
  "key30": "3BbssgpEKLp8MKFa8s2F36mhETQuyFT37APvH9rNhKnsDFJfysUTg7CsNWxbHTh6VGoyY2t4bm1oFqarZvRKinvY",
  "key31": "443Mu1tKFPzFazkPYP9uMreZkAAv1SFgG4goaeXyYsxGRJzpEqPsUKAPUHdqgfh1RTD8JTVx6wiCZ9NYk9aBvFdf",
  "key32": "5QPz1nrLYqKjdAwSxMGoJN3x4TF9JsYThhXkMqXbXUupjKxfeMJQmQMHkNmjLmiyNd9XLMx9RTuPMzGkfpawzUV6",
  "key33": "64ukzM9d9EzYBJDTfUunRP3VnFLf7MAEF5o8YpVro3krbw1Yk6wuo3t4qqYm9Q42KV5T3GzqyK8KzzLdZyfMPDFP",
  "key34": "5YhqL4sFoMFt5SjXfttawDQtpqEmda2Ew9ZVHQPhAKrd2g3JZukRxgJNm4szTvyXKzmXe96n9BPEv8XccXtDdtuZ",
  "key35": "3SPb4fXFrgvR3P2YJozGvzn3NmSViGSqjaocui6ZdWut2nkfwp8YcmSUxtdY3mtTceRCATbKT7VZBRsXTDLm1ZTp",
  "key36": "3YxwJjhAcXCqTNENcWP4Y4EVGi9NktK1WQiBHbzbG1rtzK4dmnCqTwyNoKv1yLtaX4EMF2GK1kCHgxGQGW5dNUAo",
  "key37": "5J7wKcRs1afksttYqe1pnDKy1r52k9Tw8WJkR6WqcBeRaDMWo8rUr4fAHLa1p97Ksj896KphkiSyteNDd2hPKd8M"
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
