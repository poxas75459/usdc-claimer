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
    "2F4QN398aoz9Tmp3qfrmvT9seXWFw7kz3UBGQB55RZFEHwBjRsYfLpuEYKkTMXMLatcu9XumAz64dX3hNnxzDvaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MMZZMjhPawhjjAtPzdPPB4R9d2Z3kTWpvXvoC1JUQTUrCzoR2NqaWRhTPBoYn5sonJeQ6eLDHhKczAPn1pTFvuK",
  "key1": "41uHxmmrWr6AbPsPUhm44b7KTBWDaXZGn3gD4JHVEHDR5KbKe1LaxWgqM1fuCHZ5LvzP2wWsxsjNfAEQsJrHfBW",
  "key2": "4xHVCLET9XFE32aQobtu6F39p8AB6VRHVvfmaJ5ZcqWfnvzcCAwgdKkE4yi79aKhjtxquW9ftZKBj9TgLxJ6HJar",
  "key3": "5nQNAre1GiWNbDUy4DC23vsoyozQnggNeiQKX1SjCtfxhAFiGqzzF4UuMM5Bz5q1RzPQPfweqEtp8WEoYPS2TrjB",
  "key4": "WC6vi7JKuYoZjtPinPwn6B7aKj5bCHJ9sCaNE1gc8Y7qcP4DyP1mJ3fypfxPFwha6HoknczwMDcP4yMG4NSjoB1",
  "key5": "2nvqEsAwcdpPZn8WT7YFuL4JEZkp3zfSkN5ov6GhJjPboibgJJ4avp9kabAu5vYoTmdnRDNDXjnFFepx3jQuKpr4",
  "key6": "48KB4QeVoL1Z7t69NgvfvJXDD8UtyV7P4CgGHtPuMnrACXBQmeByJPiompunHftXY22Fxyf5dmBAd1hsVNDv9VAM",
  "key7": "5Y8qGrTbpCcejeQAtNMTHWgSMeBv95K8o4P9k2gECXFhsiwyYFZbmUDhbmsr7E7gdgthihbsZDy9qBsmF6ZL44VJ",
  "key8": "5F9EbTrmxGg3FS22qv7w26K7YNsRiwtGAWSfkBFTDoHh3hgBCzfuWPd7ztc3hivhmBygnQWNMeeypRSTMqkPD4fw",
  "key9": "3ZTW7rWEvjCCmNkckYWpyw9qA9KvFDWcm84ijMXop8bM7P6FTkduPUbkW9nowv2KsGBWKuB6vKYARFxMtPrd5U93",
  "key10": "21ktbmgTAgmYn82ocrZJ3FBUHzdMGfppDGPM1zmLm1uEYT6txLg42SYB4psscRXP28UxdBRQ73WEsKgFeTMiiueG",
  "key11": "3xkLaYh9xPzHUivLifXEnANGZHtjuuzQSiNHjUQV7Ec7u2d14bVzSQfUGstNHFMnL1FtGdhaLQ2uCZNv8xouXL4C",
  "key12": "2UkfBjXQbqvNKxzD4oVLuDJUpyKqPuKgyMcCbE779mAFFMkMUtLaFWs2LWZGc29cZKRWtVuQ6u9uHbfLB9LDnibw",
  "key13": "4RzWYLif3sXDuU5HvdU2XHHXi8sFLBuBYSWFhvaitAGroiV7RGJ9seuujmtuwzFPWLJcfmmzawBbsu9HEUa5HMn4",
  "key14": "246k91PBiWGErDSqDt2bbmeD9sLcTnNYGtxdxQ14kqcVdo4ec427jd7GtsSjd5sbmn81egDwRTba25Tq1xpijsF2",
  "key15": "jYvmwFWx2Jk1ze8S1zRfbiENCAsjCbvTxAJpmNH7okvfwcJWSvTq3iYp8R8Lx1cdScWj36VV6Em4JYuK3xKRkkZ",
  "key16": "2PR23PZFkAnyEdGRUnLc1HfUA8gzHFkF1xFLTftrpX8EKKcws2ys99zGKTx6iwuC7WUfhuGKBeYUV39z3N4uexr6",
  "key17": "9Z2Wyx9swz85N2npivqsT6D63JrhUDaKaEmZfVAcFLDNnH2GfH2D3VbhYMZgRDBcKjC4KF67UmpBNLL6CQ9D1S1",
  "key18": "2zc7hFGA79NAvXZHuED7XKFtUGzRHR2jGqirr62L93gcNvrZBTW3QKx9dm6mHr5W3CzJR6QCSdRfVSPWSvhaLzjE",
  "key19": "2AS4aszaoWFpWWajPdxH9SRKN1pCuMzbYqdEiv56aLxF6GEsceyyDM2GZhQmPxxTfEDYJjSUKsivem2ePHMCknoi",
  "key20": "i8THRBkgucPWAoeWAmAWTCWzoqN2tX21QtnzMXaAe9iH7mJjZjYG4AGQAiXqdBkhKQQFUaxJq7vkyTqWz6qnBKi",
  "key21": "5ruhtDLgES43ajzFBXbxkeZsDEiEkNVCQ3VWs8LJk8kaqUwVp5qGsW82R8bGT8v31yLFyu3jh4jCi8xBRwVUk6WA",
  "key22": "3thqLC7yLKFs1xTBmT4aGYx8uZKx1YE8LZdRmghcdYKF275PVmYug6bNVUaLiH9HBzpHnHtou6LFA6CgWFMFYhNY",
  "key23": "57qm1uqUbd9qGgg1QdWBGJpGy81Tgbh9HfkWPB36KRRAAruJgRtuXdjEuSA83BLWCkt5PA8GYS2xP2yx8HkVXRhS",
  "key24": "4omEY65bNinAjHB7dBs3XW2v7Li6m9659aHisNmte5DLdNgbGNYYkdk2e9QWtrstLg6vvhna59jbgamPzuA99kBG",
  "key25": "2HcHSMDryqVyWnEsWzVxnxcEGp2QTQk5vDnnT5XboGnTyFisq38nF7Y26SYUh8cD3T9zmjEKVeRsaXQmRYPirQpK",
  "key26": "4BPtaZj7KywHCsGtuAk57sHr5bD2tScxNzVQXarp5vStKznwxXkXDxnucMBWT6RQcfgF8Rc2z5fLKhUqV8nKgg1a",
  "key27": "2XJXdJPXqgeR6QSxebqHoLnrYeAfJpPJCsAnKtyj2iqaxVDYjkP6qcAmJ97FMsCrowkbJpWtpjr4a4DAi1JCBaFs",
  "key28": "5gJbv5HudPpKXpUXsxWLyhkuFdriL1teM9Q9iA9wDehQwczDGrKLgT7RpmQb4eoK8Ue2FU9camkSGoXfUsQ9LHiM",
  "key29": "Ki9aEJLoXeez7MCe9T8MeUPqnvrH8H8L5JfDBmejWQsMYzRRcAzqwFqZ1HzPFYE9oSF6oF19utG3HpwLVG5EiLb",
  "key30": "5ykr7BCWEyHnKA1YPD2SNuf1b1jVBJQreQFwT25nZAcWCF1D1UZQDEnFdux8nDzo3hz4gx8RLL2gQFtizrtgSuvo",
  "key31": "25thSYAKDo1vgSGYEdbAjpDrYnWsmmsYWisPyPSJqmtoq4mmjntFGEGsj5ZEBZLh2FTqvQoG46m5QPukXbiUyYrS",
  "key32": "33cZtNN43kVTEF642vsNGbp6B3cHg7b5Q17isVAWUN6EPhxS6ggt9crAHUTJV7Rw4eM5QbUM1krTh8VUNZ5sLj7a",
  "key33": "5Czw82zFpzKYU941kLyoDg5mNfFtv3iPue7dgBZ5p8pVgy1r2w58jyuNGDS9DC1MKm29H49NBhuEGhmomuQ2TMNB",
  "key34": "4zLwAhXwMtbgg8jBWgy8JTZufoahHTwTEPuGXS26wGjC93DHkh8FrAGAymdAA3MnKLkrsWjyoE5WvByw5WLJh5Xk",
  "key35": "36STQ3r5mv5M1z4htq2cEaxBEHbNSitaMZGisCLro47i2FfjMbrEhpEo6CpdUVWEfMF9J1tuPt4h8NHtJjXgAifQ",
  "key36": "4Xs8zTg8hfGFYkUpg6o3uVjHM248dSti88AW5AYGxJXbDS2TV11VgwnR7Zj8o3v21cwaAmvwGXX9cvQ2njatt3Sd"
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
