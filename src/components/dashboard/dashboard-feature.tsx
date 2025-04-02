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
    "4FYGJZ7eyMG8bwcSmRqwS29vdHh1GHswxPCR8bLQKJQ3pLQCbQM53nU2hd1PhVMdX4CydDYp4TYQU3WE1ydHZNuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22pbzdjbaQSB8msK1fHPSxwr4Cwf2yrnyf5WZcJ8x1HDUTc22Nvxv3mitc1WPNCoTyQqxorPjvXVx1CYJfvChrRB",
  "key1": "jXNettRcP9zteswStUHSfKr6WQykCK1qkeF7HCqYwZsVjvUz1W2AYBvXBMsCkaGYhmF8rvrqhGSumBAfpacVNvf",
  "key2": "3Mjmo6jYyuA5mM9uETWhMWdpcfT8FNUq8PVGmh1mY67eijuoVUNCYUiRZ6B1VDxTrbqczckNjYLmjxbPvBScewWa",
  "key3": "21VYns24t8XQte6EqhgbZqNHTrdcwQpHwgbRkr8waa7sS8wU5B1ETo9gYxD7ahxgqHhFtxUwCBM2hG7kcrbi7qW6",
  "key4": "3Q7DBMJLXMxTnW6MhL6tZhAMMmL8dz2vLFcSgTGzSgGz68DDbvSGLynznuiT665z1goyh8uJq7wqBwgsdiyeRETm",
  "key5": "apBWQ1XqtbX8k1hoqpLq5QLHZFPonzMs9MywfKXRhce8paRHKGt6pCUZSoBbL1VoPjLLk2jLhrfQDahD9jDzZNK",
  "key6": "SFGhoP2RCmTrMET3kQsUZmZyaNJ65u3oRkRhKwMXVvLNwMXmVHNiwN1usMz7pZisyqVidWULmgNtiqqPKqT9D5o",
  "key7": "2szzLVAG9z7weTogm5LzsTCHfnHoTYuQFpU2gF5YgM3HNGE9Yrje1gwGNjv6s3HniPWotJrKPkvGJ3FfVtJvq95x",
  "key8": "hQ5TZ2wwJTQ3C6X2gJahne87FqaJAA1KTxodzu7Cnxk18Fk4wmDBhkrAEvkLUGiZGDAF3YwBNKXYTrhaBP7WaQt",
  "key9": "2n6HhyZ7YbmebBHW6YzWyBGTJ5pBMChx1TxPo541FYoqmfak3AmhqPiKcqa61G2htpTC2bWycvXejH3CNjd2GkaL",
  "key10": "4nMy9MLJWuwqU4TRZf3Ntdx2yzZTYhHJGXrhs5F4p63QuiDoe4Vi6sCXWRZdzfbELMywv8Wsb2kMUCrjKYhJkfiw",
  "key11": "24LHWPjLd1qhAxuN1nMPDEo5FxooS9i7SpzZu12oakff3xep5EA2W2uVMh3jjZduvdEQ7Mezi8FceicsmeNkJefG",
  "key12": "XAR6VCQm8RTjsdshibW3J5WDw5yNojUWp28FFzSz95XQu9ecJzjBqtsSzFxstqdPS4PxSafS4dqQfL41iYJEKuo",
  "key13": "2D93yygA6Fe7x4xCmQ4vzDSdE4LWhSqXiSywRjFNQo4YNQQwUtBEU1PqdqHPqBUj89ZZVgVAJuu8Urp3hsaGEGKM",
  "key14": "25eEtDLhaw669qscvUvFrpedGhaDUMDSnrHzPKxYsdMDN7DWbrV4vgKYG5qNiTCs3iYcCiv7fxTocTeFruo8M4Se",
  "key15": "3qswdVeJeVebBn32xZEPbYmHCzu7hcagSSMqaCLRb3Vpb57nAtb46BSNku9CME7zzXxMXXueGJgDTuFSqHbj13RZ",
  "key16": "CmwRdnUXhiDuv6bePvuFCgdLpcM3PLJAgqagxbYHn74u2YLR8fdqebi9SsjRKxKVznyKMLnJzNyJuD63FSUTe8t",
  "key17": "4MdZQbZQXVGFedo2udd6PeArU2PBQsTM87AeLafxZAP4X3Ya9RAAvpMFkeA5BLrA69dAFrqiGoiCKqF5wCB5ZGHJ",
  "key18": "65THDMvHeQ3YkKzyiAfj4CpYwjqBZTx9b3PAxc2uySunwvPDucK9PJKZxcfVATnytmvZtaLTUFYhjJvdtGkJmJx1",
  "key19": "4ez43sPm4pw2Z7fo4UieMbSZUgUuBupfyjNNTQZjWMzVnp7hPFWa6uKtfoZuS8cHypJCLLUzFxsnw1cM3nPSnmMA",
  "key20": "28xJQro6mksRYDiCGPNt78cs2Dy2Ru1Meb8Ryvb6wVzdNzFoxxfohSfLkvoYiUwa42E2ExaiCz9H2h13zpd1q1QG",
  "key21": "45Hq7X7UC6c98d6kwiUSE7fUDedXxtuVKTHAhkA8pzTC7hD4N24whBcA2XBd4YZn8q9fNyNxbhtVkZJNPotuf6hE",
  "key22": "62CcYP4QcEiQBvzUJXRwRoa6vsLs5tuKjSta1L4kxagNXTeeAhLnoDNr79yDtnVyJ1jSS1B989qaS22pdi1cNUUQ",
  "key23": "4Gzn8rLS7RmCDL33Fwimc4hRUQrjYRNQwtBYtzM2BUjnm14uBD2SEw89mct9DpqTaiyoa8K5CEvZxARKSPC6ZSEe",
  "key24": "HRTsuZ3yBSa3cbJvFZCrmN8oWnoUhuNWkT2uYkU22Prbk4mXBF5yqE8hrAwzLTddxfSLkPKvN7A3BNs3nurNz9W",
  "key25": "65yKdp2WtYRc8oLFGWFfSdPBAiNaiKuBTSaT5UpPRYGec6FQayP9XW2bjrxhT8yHcEpeDc9ShkboxnNMBtK5euRC"
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
