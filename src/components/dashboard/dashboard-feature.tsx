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
    "3JWWQ3Dgjjx5AXrw9BcBeNGipaYzSwRSHyUjBP85cV1KxuiAcUizHStLnfNEoZLScWZpRc33xcimzC1jftbikK5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gFxqPCgA2zTwZc4jtLX1wTkLocnF3k7wFYci3Tr8WLkhZZLSau7qvetw22c6tYCska4Bd73WL7qUj3G5aLd2H6b",
  "key1": "4Mpr6Ps6ocgJhhWnb6JpnpuQQNwa28kTbDSQLikBfnHUi2id4A8vjDu4W8P6B3tbFrZ3i5wbxfwNZPR1uzKtjNMz",
  "key2": "5kv38koYcEgHmBrBnXjoc2wXK7amo6xyyk2jgTRQ2wxKvZ3Bp7kwzUrB62Um7EB2aRX4ZvWuG7AQDHg31z3hgA9u",
  "key3": "5Lzr3qRfwzGBJ7z9euZfK1RtwmrfMEtDGseVncxJ6se8cRhkyQfGLEr7sGJsbuBh2e926jVNVC4427oSA3ANNmwQ",
  "key4": "5JBi9S8Fshx2uqp1kwabERujbgyKxjuTwXBGAEhFRgxYgTyNjB9BZKmkzkU2MV5p6eNnfKM8bmA1ckatLG5RiaVJ",
  "key5": "3jBzfJ2r5QL5PZ7iMbRCRePRGy8FQusPG6wvW3VuK3G4skabq3637BeocBprhe5DRm1KeMJ4VKAcdcb8LPLS9n7S",
  "key6": "31qW3S9Gu3PqWwVgAbopjM2bVWK5fVQUKzhrRbC34MaWerd2Fh54xGXzTJeunEF4rCez1Tyf9zEDCgt1evdsSaQD",
  "key7": "4VEbQbnHiUZsK8oQBumAUVUL8CYLi1EBnMSnLHWbBNVQiDEqubZ4xeKfXpYT45ELnZyrEWMD5kFYPaj2x72ef8Za",
  "key8": "qps6qS2v9Vk26UcmZsNenz3CJW5RC5asidZQMucCzF3D85dKda62tfBJhC4Hsg5xgvhuxpxqZWSnS5c7BYJWfDa",
  "key9": "37LUHAQCZ6Xx4zGwPQgBSshh4YZL2kCiayj7Tw1yRbnM2j3WdWj6waUAiV7LJhJo2uLqMBurLLYRmLorqRVcH8Ao",
  "key10": "299z1myCjcTetswNnKCCGU6Kj3w4XehttW14kyphQ4RYzoBAZd2cD59oPwRgWVkcRYXAm42UWN5MjKeu5H44rfPQ",
  "key11": "3YgLWZVoCpnmHHux1FaqzgW6tkLPcbY2QSeeSXtCbuJwubHCN4WLfeYhxtw2ZDaHLtaYn4Eu2YRZch8eJRxCiqPN",
  "key12": "4gpdPz1iyn8kBxHPsNohB7nSoj6xNWQgwSr6twerbXqBuv8vLZJoom5ALxqR6WeGZ3qLJh7j6nxoWesfrrcs2S9v",
  "key13": "r8LT9DrJRNBf6sGwyarYscddGKUUrYcvrvLkuj27zdYCWxwNw2yY2Yxp1XHmHvDbMK7zfRSiysi4zGTkoh9MURw",
  "key14": "2y5oL2VZeQSGwtEcJ4PVbF99zPMpkUFmL1PcwxnaX2ceyxXuD2x42ENSFXKpbjsbA5jEo3zM67MZu6SxwvaDN2Ae",
  "key15": "3XzJDNz67iGJdyX3LFZa1C6auXMUfcvuHhYdYtjhSVNRHa3VYcUp6dRdcDAMgBwCEgfKfvuvBYGZX12ubxgnEDn3",
  "key16": "51U1i6A7DGhFk7KfDvomtRzUaNaqTHhKYetjsXzWKunjkysG2GaZ6x2AgUfWkcXQ896nrn54vnvzJGzkhWTvwbgB",
  "key17": "5vcwbW54ZV7vyTSUt1M59TqUitrwdHJ5Xfjn2SLEZKkaB6yAMuBj5BkNT6wBcEaySBx4w1AapebgU2XqzjxC3M2q",
  "key18": "3wUN16fcfNXD2ZGePKa5Nd1Pwjwo9CNnmz1Xzhck3TV3EAbQAvSxvF1xg75HmuRkv98AdpDkuzkTQJJevRY18EyH",
  "key19": "5z83wzQZ4sTZ7Rh32WjEgTUkoJdPnJTozpGCwLVhbHoptAYr5xCcahEPymAwbfw92aE2ZRe68xBfGpKrzjEbuxZB",
  "key20": "4Rk3QXgKGQY26TojpbCPhgxbpHdkyqHkFwhvrCYoVfT7sVGKbXXPGeXHGC8bAmBhSBtZNHsrntUC7tBm6CBr1mZa",
  "key21": "A8URcL8WLDftgoT1LZ14EAC4y49TZUW863S2qBmFwgwubUqKUySnnJyoFQBWGaNMLTGHiYSAvzEWJ8Wt6WYaxyZ",
  "key22": "2oWLHpSQgigHpFnR1AHoHFcPiNbwLb5TnoTgGnoV1mcCFRuVhzfjCPAcDmZt287BWsCeRS8UE3mbhZDU2BUVVb43",
  "key23": "2y7SUyB5tbfECHKQjV58y3B7jSMDG3sJZp6RVkdfF6j2m9d5YVmPY3q5akTE25Mpx7Cc2cxEAhTktustDmgozBCM",
  "key24": "3sgnzCKerfNmz9bUynXarpur4u9h67DHnM9YmNDXhRh5oSg7CTwHgPuPPnoBFpMHcemwQKy46cqBWxmr7mNJNgXb",
  "key25": "5sMkqJ5ycCmApKFSV6H16umBv6sJSL3Ar3j4NjumEoEJNzHiXLwiMoLv9Mnus9hj7V5KcgpAPEtJAiqveA1sDwJM",
  "key26": "4utjpGWGt5wxRQE4a6FaMRvoQQcGCRgn7VY5DDxN89fvLfj1iUaH9LX7xfbjvsjStyxwPpDAMy3cSfB7wqFU9vH3",
  "key27": "2tGBLk445RzwbWbeHfxeQVZugnkgDzFdKaeiUChE5tpPkU3KBDHYesnV392vyUPpSkdCJ1s4yMwo9HFbz6B9CVZo",
  "key28": "3DZjfz2bHzZbpqZEXbub9o4sFvs2a5tHiwzZNoeyCPe3dAPdYawEiZoKK1DV4pUdfe7NyGoN7yxMDdiJu9DziiZa",
  "key29": "ENfj6Zyzq8mML9oG8RV3PS9yxG8wQP9QkqTeimjPzpCx64u244bgaQLE7qTmfNnpcfEeMasDCh2ivHrcM3DFhZr",
  "key30": "21kezv2pzf9shuzSXeKghvfkbbbFZQ2gpcZ6HXaU2kBxnUnv3xWMTjG864NTk8D2d7ZYFtiyGaqAYjHWFRY6ZCCp",
  "key31": "4Xk6c67QJJoP9jdCJsBpztC8hzwxnd1oRHyUV4iFh6EUZYb1qtCcTa947FRBpYK6xr4TNH3uxdrSm52darxwhAMH",
  "key32": "5DBvg1r3emJQS42j2BUHRSDWu179Fm269BxxpuoEdokQQKQw5a7SJvFKgjUARQ4QFR3d12rLCuc6KVUSvwiv4EPy",
  "key33": "j5zKDbCiXTx87SCdvgkxMjR9cH3ZRxQ2tZN1vxr4PoiG8DfoJwmHwicyN48nrwUKPZWCjUaAH3HKgJmLxM7rAVy",
  "key34": "3f7hg7in37FXTJX76Z1n7Nt6cVLfbaseyhGqaWiXznu1GYPG9eRU6qUufrmbJuW7199zfuyut8eYdXZTdYcBr37W",
  "key35": "5EB72G2qH8QWgTNWszNLDojbyV1XMSN18TriFa5v5JWdAAHDYeW1xkYcuBLFmmXTqR7jgSjp3Lawt42Q4ToG2nmr",
  "key36": "5yMbpZPSHoCCyi5xtR249PnwcdnixJ4WeWep7pwgwEhYuVokT4zumvbxqi3eZjYKbE9hQVHVfLzAB6Y1sLEdhAue",
  "key37": "4exq9AEnusnwM6nVpX6XXqH2GC97bF6EgBqFw6iXn1DDKYW1VBZ8HirriPhuiaxkqrM1ZPQrdEAMorASN2uBF2p9",
  "key38": "V8PhC8L4LtRSuSAq566aiLciVs5qAddNBjzbTiSLBestxiTAHG8DUEUyFgiChxebm4fwJHLyjy4PU13GU37fy3L",
  "key39": "4tCBi7vWe7tEzWmpZ5eUWow22VqboxQA9ssVx9AU1JoH4XC66S1jRpwKqMwAKmic44b2P3JBG2Gmdc2U9cn5Tz1s",
  "key40": "2EQu5TzQxjeF9WyFHbHPpHPS9f5oHbfCjU9WXDwcJvZEudQicmTTwiHdcWFxEJTZou4mSy1oiYhAsYQ5FY53Y5UU",
  "key41": "6PbC841rsodB2YEV6TkAtGtmopCQrgGzojZpmXwLRzYmgDZvaa1zPq1tAjLSuWpYuy87vxQsgCQcn6UTomEkyHx",
  "key42": "5qNvSRLxXAimBuWcdPMZ1dYfRn7hbxVtYd7QQjwBAGL9XvKsNWuq6DKaSWV4M9ni25YcxBkFtzzmLnmQ54H2cKqC",
  "key43": "4f9rtDqbFXG3kGzAfCE4nCMhMtpoSW5yJ7vvm6LnxN8P5FUrr2omUq4kQ4hK4ruFgRyLfL9NVwWewAAqkNz8PxXh",
  "key44": "3TCJa7NKsbTrnJMNritgXdXZN7dqSMae6ipMzeWaSaXUXa7xBVUqkhcA24KQVLjHdAwgUN245Q4sUfwrv6MhdK6U"
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
