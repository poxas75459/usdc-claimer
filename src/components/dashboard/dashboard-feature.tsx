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
    "3qYmFMQo6fiyA9dn8x4A3NiZ54K2Tow9E8dx59jJVZHSdYxR9GCEMb7wsrdC3NKuUuhpjvFrzJa6jihzoa1tgLB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2PEnrqWYRNfb8ShL2BuYS7i4SSqjpYqmEYqoLLGnLhhuYZW8kADheqiqBhWA71wQk5UfS3fzvAHHtWtVg28h8i",
  "key1": "3RijNp3XVzRyvrgeLR7qcedaJKGZCjxps1Ce7dKXFNpheaD3uPoBR9QwHLLLisvyKrETZvDTdv72rATBu8Qm5jx6",
  "key2": "53dSQUSLZTHSHYh9eWNokJw5AEvBn7yc5NK9MpPuPjpsiLeyG3Pgq4R33kt8KTPp1TK9reD3twPy9EioSefTvDU4",
  "key3": "2Z9eh9ZkZRFUo1Ava2bhC5F2UxePUmRbp8Tx8LVShRDgEyaxpzhdXHZdyQfNgy2sTJnPiXTQYs4KqpdXEJje954G",
  "key4": "5X9XeNxZ2ezVQasX7MW7vPKxV4hBDZWuXs193nbsCMfRjZGQr7j2X8HZW2U8HevKRLBeoxJAYg4u6BfnFqSNp5Uh",
  "key5": "2W9PvrqX1HDjYVjb6rEW1MFwfdYw7VShJsZqScNRMZgeJb1wdcL1PEUNJWT7kWmFJusyohXqp5syZobRqEsF8xr9",
  "key6": "4RRhPsDpVFdUwapHH5UdWw5CuJmvTRwKuttLyqsUgf4ApgN5Ep1YxBYhbSUPgAF6EpX6SgXaF6mKx1L3TpaBgHge",
  "key7": "42wkwTzjtv5azdFDWmaC6mdE6UKJTDS3BFrWWFUsN6nKXhLSm8hW5KHA716gL8cS3tqzKAHvK7ybXEZ3BmxpReb7",
  "key8": "MerBwgbQFXVAY34Zvm3oDnkWf3r4d4EZ1aUFkvTt8AUVeDngaqpBVuR4Mc9o7KZamywy9vujw129TAfWDrzhsX7",
  "key9": "4egdQFEtH3ecijUbGwod2Hx7ds4VbKR4K4pRb6ABHz6D7oYiz4B1kSpsfb1SUhUa6EkzRCxUgcB4H66fzHnEecus",
  "key10": "5rSecoWnobD6rBi4ARZEfksta8iULBdTqiBWYYuJooNh3ugU7WBFLxVuZaZQyCPB7XoAf3a1fxuiogmHCFeQzYc",
  "key11": "4UY5fi5xrMeKRU4XcxvBeuo2zVMiw2T9S77zGJ1TnXRpNjPcBsfLFpX1Q9TXXtffPq3ejsAPni8RmiMNgV9UCXcj",
  "key12": "4P7SvssxmGFDBtZg5YSqeAgku2htuoiyJ2Et4Y2nuQBrPxN7jSfRtGohU8JjBrkprXFS8qy2HLsBqk6SwW6LWewz",
  "key13": "235sNMm2ffkjDy6ux133CztnKUGcC1Pe1rxidf2jCebp6c3qYsCz8YhCdQ7mnp11HnBZdB7goowKX4bfPLLgmnS7",
  "key14": "uobCGxM8JrAVYHB4uquH81bDw3cS6WjFiKHqW7jZ1Ei1XK2nGycCA1B2cs4jL288HgAhWTyWzGKRDoj5sr9LngA",
  "key15": "5jmgALCGbz5judC4vtDecVrTBjnydgxi7u49yTwawCV8aLVPvk5SsCq6zTjpgxPaCwipziAmC6fisrJfnZvEfBXe",
  "key16": "2wUs18KK5ybsPyhdoT6aAspFr2rxTzxn5FRsFY3koGALbCQyJNgo2kE9vKi5zpV3YYYNwZabQdVER9AgsQ5Hkjas",
  "key17": "2ySvhdwqagEGMemkwfZmQN9peo9csZ5hRSJtobU6amqoRffXMMowxoRVGRoZENgnGWrBuVGkV71C55xb9UoGW75D",
  "key18": "5zgepXs5YGgMqjF7SRDtCTG4L2oXRyTaTp6gcRJnkX1sRq47wkRYsqD8dubphrdgDbfim9CtsqT9TWnXGZtEqNx1",
  "key19": "4rhMVvWc5JjtHhDF9xSjN7h1rpsT6aCE6sT6aMiSiQrPKHtY3Hr4sFRvxvV5b7e9NwZhApWqtry56EeeAiveCNDU",
  "key20": "3uDVzzrDUZiHs4WeMA8Y21vhPhvKATWSMP6GFWvw5pcugDaDf8ugdvu3XLJKRkt5Uv6rdsq1RGAAgucgTzGAJWCv",
  "key21": "4zpZ3RNFWc3sXLXq6ajLV9uGujJa56uAmX4PxhbGdsUzFWKuMXhzSJh46RL7sz8g1WvcZ9cu5axiBRU3tgoPL1nb",
  "key22": "3oXnc3F1Kk3NHjoz2b8hc4piQreLkowcTgeuWDMS8WQEpyBCpnNvTwHABUcK4wrcGpM5oLP9py7hUTYaesiE9rsD",
  "key23": "37ufbDDDBkFE8BaQdai8FjGDtqTWtUkYYHS64tyMzxmADrpmLdD39hiPX4V6WaBggm62dbiX13xTx9JiTG3hpDiE",
  "key24": "MWg2rDM1XmcSpTqPx5uqBiBbcaSP2ho8eGQafs9Z76AqqyvLwFGwNWM6fRuTTyFwM6sNVfLkPi1zs7UsuVcoxpX",
  "key25": "2z2tfryf84oCNC4yrBCUthCFqcxci936U7teei2tcDvaGCtJVNGpUWEwiMdmB424w1sp24Fc57bqjxTyqZ6zbLxb",
  "key26": "4TdFajQFDBTWYVXKDrHKTP8jcgdn9GiQZHWQzis7jYox89VnKjWoSsqdNpJwHPLhWoHAPJgsHp2DjyPUEcGfgDnc",
  "key27": "4GjQ79KjYspbrLmL2K6pwPTxU8d9xvHAjoBHxEEweoQz8SQZXVUKnxcaDAQAoaTzFQFWvFArMKML2eBfRDuanRsj",
  "key28": "27cza2Le9s2zdSmo4LBvsVB4ZmZBbH5P9bLVC5NmQWrUhjfrQbKTDyNeXsJ8eTvqSAEsRDuBq16tMkLvtGVsnoWY",
  "key29": "2XTEMAyDFMbbPBEY2efUAP3NhNAkY8kA9mYHxkoMzMbVe6z235CdJMXc5ib8UgZSnSLLQQGNyk5f4GD2jkYJvCdm",
  "key30": "EQRC8o85oJKLJTWWF5EXaUUXCAFQH7eZLUoBh8ARQ4wT9UtJpiGozrYqeCkAH4jcrK8mbYt9DsSU8KGbzKVpGGs",
  "key31": "k6KYLb7FoBRgWb4kQszabkjnYysAUuR4mEaDV8AYpPAfzcwmNkCYpUgPBt98v3dddk11DHY2gMpKC1XEkdKCmie",
  "key32": "uYQ88ZebTQDJyRVpXqUDk6EMtBDZHh3NGJCsJjWaK9VNFkaQhVjQqmrFXW23zhwd68NyzHqyQqENC9uorkHNiGc",
  "key33": "5uQ2ynEd6PTYjrzsG9nwSqSDwuubwMB9D4gK3s4YpfoqSNRU71ff1JDgZEjrfF5K4dE3XLFvN7qqvvQhTxBHgpbk",
  "key34": "3cdaAPBSuGSGvW3HXMXAnLHZDaiFCK8C3wtCQMwsXPTea1jyFcZywc6eQ398xaZ8q1XEmEhHVqmz7uroZtyJa49G",
  "key35": "4SSVK6nrpPJnz2kowiz7g95AhkQT6dqbZ2kYXG25tXnCk6NaULRow15uPkXtodKR6d7kYSG65CVSxdpwJu8BjbTo",
  "key36": "21gPjEUAZAXt5dLAFhjt1CGypuahhhQxo8KrE78qNtewpTk71kgGMth1s5WwoBN7iz1uRiSNtUck4vUabrRohiRG",
  "key37": "5Q1ED9eaDEMEizKJWPHvboDP4GinAgTi7K2VnH2rDNJyToRcaMwVskNbW97BH4uDJN5Cq97a1HfDP3c8fdAtpWhB",
  "key38": "3dGkjbCBvKTC8B13RA39Ku17x3vwy4c6RjXYVWrzu5bP9kmJxPw1qGpZFhQbxM7fAstDeyZyts7JKRFspu2gYWFW",
  "key39": "qeWzp28finYee4AUGmxnZiwkWQ3wKqvFuZCJxM3e8aHgivCnN95Ncn3QTJessg27kYoq5Df88wyKmj8LeBi2Ucn",
  "key40": "4rfBsX2DjAvxrQwmcR314hST5gRrkmvydkQk951PAMVC3P9H3sWBhiYVV97Wn94rGwYPSmKn6XtfsptNqu31dwwV",
  "key41": "4RAFDFnSvaVYUNzNVruY6sASJyZ67ExTqihT7pe4KdEEZBrs9goZ1sbNsr5ESC6VBfffZmSXeyCDJLaV2eeJDDJ4",
  "key42": "2KnJULAcEcSihWfNtdtmVhQcerejSwthUtarDK9V1Rnqn8Un2TLmYGL7hjvDgfeRVkW2XzAtv3SHYYn5oBH8gj3F",
  "key43": "5d4LGd7ojiD46G4HJnKbw2fet6NWW8txMkBmzQU4Y51rKvQuUJPP8viGf3CZyMs3QjCC2e33z3rctwufZn9bYx5B",
  "key44": "5kosZdPiB7RYQbcV1rzDm2eAF5Znez9VYCfoCKseo6Ww9wnqs39sGMKnA8ZkUidB8UyhrxqMN8UJMLdERspx4qTC"
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
