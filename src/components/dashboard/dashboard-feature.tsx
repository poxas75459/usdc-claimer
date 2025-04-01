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
    "Lr12zVTqXdegdETrU2mNtSuw3bLweTujoEpv6Dm2W9reEGnpEwh18ywhuwJTSGhozHYNJnaRNx2MBsDz2LyZs4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTtUXY9GUvz9DTf8cPvRAze485BCxNLBP1uYg9CPWCA13bKQP1dk3QsvoyaYE5E3fDBwG7Dkr8JMzsqMAyakFQB",
  "key1": "2BMXGn5eLtHW2sZZQefGoTjXurakw3gQdVi388xDuFaE3QHBgKuxR2zzD8QJbJTrGKoNd4gqdGygtN2butkrFWJu",
  "key2": "ucUv6L1c3c8msvZ7h23QZQNBgNY8ErgWjsoBcN1dR1ZVG3dVTtaAZ5v8PT942h8VgZkDb5ifHGjcjm2PT5fgxB5",
  "key3": "1y25qnfAP5TT9e35ZtBGxKdUsP1VU9R73rRoYaYsYapDnMu38fxVozbY98xhryrS2niq48XWWbNw6dmjjaP39FC",
  "key4": "5rS9SJZeFrvDvHWwifJdcVATmLFg8Uysx1UyKBxBcErPEuAb1LDHt51QnPhwCH3BgUCkioDCrLyAhAxLEqZwv44Z",
  "key5": "Geh2vGovXNBMaLGdgwQznnoGkJqrQD23oLiVnv81ni2gkZdsqfPa7WzkaF4A53r9h6vAK6fWp7iRpUZKnjbdKrV",
  "key6": "4cMpPySysJFrBVC5cXVQZ3RenynBq1LrtBFv4b2mm4XWuQD6GqPnM6oCyYGQUiqU4bJVqiwiy6dvLLEk7a4z4bjS",
  "key7": "24GuhFej8F6TuzqDPFkg7hs7xRfi3FgrSyP5xLGqaycg8bwH3YfmUcfxdGG8PvegXBRHmhQqeodwUyjACDYf5uN8",
  "key8": "3pZVqkA7shsEQSKsfS3u8QoFqjUL47qdCKm15QUxv7r1hv3hz8LjF8wj7nxZPz1UydbY4jiX7KXLoWQRRy48DK3e",
  "key9": "59ZHec1AJ1A82J4yuwT4wgwt2tA9ohCnELvjyCBkMFfLAFdTrwTgNDiGvGM5hxCcR4x7q5SZqdCFdbxGbfWJGfzn",
  "key10": "4Y8ZCEwbrPbwpXMfjrUJnqZTFpu3wsMKEwPoym17NLuJ1psRrckzQDQQN6ptjB6UrP97MpFHmuZ6t8rtvWSVBCgN",
  "key11": "3QDPTsK7QccxkFiwqF6RTfcfdAaJYZadg7Cymw2jgEyS82iwxUhHmdvqEQr3RPdmvXnZ7q1e5ZXxbGnRsj7z9F79",
  "key12": "3aPiWad8kBJJTizRqJ12sg5hic46m57JQu3d2URSpw5bGzcYoj2vhhoGx14naqxjmNCqbHgk7NEsa5saLiNz93Zp",
  "key13": "3EyyxhzWXx2X4gyR1Hyxc8FebYXhQsxsVP5P17t6dNvsC3SmSyX978eGqBww8HSm5oaNrqzP3K2HtNy1RvC6DRUV",
  "key14": "5ofS4LX4HT3KMRJFM77SEqiAv8YRC67btJRd8b6ZMuJt7hFjTCtniug2j1ZpwYerAFdZBQEJRnp6Eaytf9stcq84",
  "key15": "2Bn5cxXdncrhWnv8S6UdrHcLSg26fGfngojHfQPkfzviPwUU9m8qLPrRiyhLKC8MHU4itBa1bfjRvttmXPY8A5Xk",
  "key16": "bkvdS9wp9asjr3dGgaNkTSD7jtpLVGTa7wA7rWqaiAoRHiYdfTsR9NPkYspocCq4QaoEmJGFiqtNWCtqqbCWBjW",
  "key17": "2SxcDhAPCW3LeBUcXFmdpLpyLF7ECYs51M85rPDcrgsrLgcVfyupDo5cUwjrP1eRkcvm7V9Srf2AJrMXpfDvAhnQ",
  "key18": "52FQFD3q8fXEVoShygTigEmBz5i5T39FQK5BJrwUF3iKmwm51TE3SJRNyMSdMUjYmYPpb5NsMbQ7vEha8UYwepKC",
  "key19": "4uSwpicFtP7rSmegaFoGTNaKrfdVx89mVjri2seWApsgzFTUUbgrxsYPWPUfEqVj6jYXKDf2WRuV9eiMB7QhmvKx",
  "key20": "3ERDoCANtM4ZvZQqWRPkpjfpTGGGN5PUrctFXGp7imG1WPyTCChcMXs9EFGBb8p68wU9YumpuHjsf4xoPPCjHzAW",
  "key21": "2vP3Enbz8Gmxcrv2RiEKBaGARMngfRCmjqbZyuqYLg7Dgf4Hxkn78NS7yC2knn3Rn5RekgYdNnGTcNi7MKBDnc9U",
  "key22": "3UDw4zCKussopCMveEaSAb4Rp6FSVhZbE2U7iKsRZeqGmQMie6576t7dJN7qFgg1ML1nxpdLgiCFLhfQLG9NbHWY",
  "key23": "5opqvGmECmop9VCz1C9pFM7Z3PLSp5d8LZTcdHX2QamFB2G9sLRLFCK1ZcBuoDf7rWCapVwLuCMo94jyzi3vj2ps",
  "key24": "2YcC4P9QygwuzKKDuPu56yY8puYSexFQJebBAQ3PvXPxLcdmuQe1VerLBxe3c3Xyg3Cy8HbtTt5G4MumQAdmzuKp",
  "key25": "4mCPssKbTqVfmanJn6xez9uCiSXi1EPTX5f6ssTDqbgKVPCx1FsVs7VLKs36bSadE3LfApok6jjpimSbvbuCPB3G",
  "key26": "3PnSwo9MTMayiCnSFxXt6jqoLrdYtEEtrAuEDjr6wddNUnJoEjLZ2QCA6zT7R9Lw6QKDBKPu65cJaLwTKNW8ucXY",
  "key27": "5rbLxzGwTxYGBFivdiG12LAj4kVMZGZK1UMpuBoAjJHowaK9hhGWabP3hNPkaK1LwLCy4RNFp1xcrpA9EtHNAG6n",
  "key28": "2qiRTmN1ggiXhzJHyuVZjfFQi4f53AuByWqHXPkrxVp4Pac1W16kEz2Rd7AYoJSSjpE8gWWNAnHcSFqre2e72uFo",
  "key29": "4akoTHrrD5wXXwTV5uSmEE5MQTzTYTEgzd6LRdjDTsDAcHFa2aasHLRZoXXyoTYexmJnj9MD38aYKdAiB9SCG7CB",
  "key30": "3i1G5WDNk3S8jLHKTBS5y43i2NkgW4g5nBV37TdHe51izXvssv9Y6NZ2xVYTG9axx34SGnxPkzLzVo2KejxR15Np",
  "key31": "2XnGH2ewqBVf8VW25svfThiAKzXzRBgg63Z76NumeRrPuooBPy7U4vu4tyfDBxgwS9EZnomwSBx9gLtwkrktvKG3",
  "key32": "5ajaX4sMVetLm8CHwLCvHeCX9N14HgCwoKZniXqPdRQx4N2iro29DDDZymBkiJmdkrPgULsFgCtrFcFq4dcAazAH",
  "key33": "2C89jRdzgsjntUNdKs3LYCFc5wXuSyJuisJhXWn4TXpALZ1KqJSg4g2FXKPTL9W1mbQi1uj8aMUWGWZ8dmV5beJv",
  "key34": "5syCDjTKavqpSKGr6NAzTprhUy7cfdNNcHYKaBWqyxGGGkJfrDGW6sbwMi8boM8MKZkhiHaxaYG2JPESh9vhLVJS",
  "key35": "31Fzj9bdLHEv5iC4bmfgavWT5yZHohWwTcQKjxn5fuCH8hiRC7mgSMnuSHwQCrZUf5rmnMrFXrnnc6uYqgbqBE3H",
  "key36": "3bKx9MikK5PLkRrkXxHVjyW8UPQmmx4UsmPwuT9h8ARiRtiPk1ofXoduUZaELuLwMNuDEiv5UwZxuNpwu7KW9dNE",
  "key37": "3avS2TBHD1xsPEfEwG2Qkc8nNQNMzyRF8TfdgiKDp5Cv7GLzMrgNWHp356h4aktbWNZY3258FmoUNHNDbG88LaMV",
  "key38": "5BQbSDxfpNDcMVap8gcXZGfUrSpg5EQPp4dBtJEbrPp2ngrH7AUNFg3WFpVSBfGGk8rYZsniBLB4hWrTossuhrdU",
  "key39": "5oq2XWNtPEd8ZvxRiwJVyH27x7C5eyBr57zJr8siL8v7RYU4UJ7yw5uNbJHJuYVSdftr5CMETErXwrPtWGGEc4F4",
  "key40": "HEgiMhaT5BuQy81R5P2w8xnbGFnDpGSqKEebpzJDEnpghPHam5teiwja9sPisJfZhmchHMQ6bE4q9Vx8MJFRi6Z",
  "key41": "4ynU9h4jREZxNM4FWm42V8GDfnkPYei1fssTHAUy28ovH2qaS7VWHvwZYK39YEDbYZqQLrra1MYGQCqJNCM43GFd",
  "key42": "57R4qWogfKMVZC8D6CRqPqH3WnJxi2xFQpzTWNMGLGe3pQQi2orMKApNFBWyknhn3KWWiSR2MYAw72J8BkYXY9uo",
  "key43": "3YSYSqZkLerLB89sysorSi9QLpohkaqkNd3yhWjeeKsUhsuTKo8gV8KWogz1NgFT8eRKucvSHr1Ju1RCTqrLTi75",
  "key44": "5hAJdjSRFuUr8ZyXEfU4UmNF5kbivhsU3dRMLc7xeBgTiBVs8cw4yprYfWFpWZP98uyAPz1DsYbnFPsGfEkWqkH9",
  "key45": "4Wm74dAE4kb164KZRgsYPfupxCKBRXCYx6BWPv8q9nNUkA9H9G9fSvFXZjr3sK4ijxyrpKN8gpfJUhJXNmEMNCPg",
  "key46": "4EysuVNrGcyyoMpKL1UyWd9D8J1HypYLqothY6AUfGgWirzES4b4SvsjymW8EUYbGJiiDY3eazMGT5N4iWEvstFN"
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
