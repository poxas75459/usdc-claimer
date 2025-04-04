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
    "3gAHwZ49N9DnXuphKDqB9DBh5inUYooJwMpVAZYs384u85Dm3wJNHYKgho1jEiB3eYmErLKr9j9ZfN389ScpY5v8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rtmQi2GoztHMde8Vr44CqXmZx9V1LPCMK26WPZK8vipCiK67PcJDx2gbrWMdJNR2AbjaDgTz9QqftvwPTvgUdZ",
  "key1": "3n1x7AMzAB7xZEhWqg6eYupQ7jrTjF3bipxQ6P4QMmvEb8eCmSo5ktX96QCMW8oYULZEJ83xzUpeJriJqmFvLJ5Q",
  "key2": "3gkVBYwTBryFr9icZD6RTkbXzfMGPGUyxcz21tsAUjNHV74SMKPxRABRVdhHL5jVAXcKwbJpQRFTTBbya64cM6t9",
  "key3": "5WWF2Md3Y8jfFoH5c9yrEBcLv3FNZnKPuK1mnXnQNAojmNyxcf8zZUUXxHdaZ9WHZLxWK9jL6ArX6DoFPA8SufXF",
  "key4": "1UFREG59FY5tAYFqMYtgzZPGXf7ZcTGwfpNrzCw19YaCqxVgVwkuzYccVEfBCffE7ACaZAmLUmdDZmCNeMpvuda",
  "key5": "5P8LsjjwnTM1F9VLfUkkXD66kocjgygqnpoGbMN89RciLGniAz7rj5nGBKyJfZCGedSvULsxUsW6dAZaQzqvdEdj",
  "key6": "5R7B5qYzgy6ZkMqRMCHT91z15SGbcw9xwPBgdNyGnDpXh8dxMnTGRG9xy6nu1BAF5rbQGUBMPi2x2jtvVFitKgyJ",
  "key7": "3ZueS9M4gjMyYjMR2eiG26seU8L3p81uNGbeBYqg5AqWL2BJP4tDZetYE5ayiHbui5QSQ12Dqu14LNvFoWTbV8PN",
  "key8": "2u2c3w7bw5uB18QnFabq2HFGR4SEMGbkXTU2J6AJ9iXEK6jBTQVqN5pJ41wchNHswmDYpK5jobd5BcLY76AgB75b",
  "key9": "2uuiB2AVndcss5a1iJR4CctrmSy8evZgGdiyMhm48Js27JcWPBbHdWQznXxRMnw5StGmfP4pSKwaYUFkyxcyGvAq",
  "key10": "bF46SqFFGBTtW1EU983yxGcLYLcDg6LVzo8xyLzusw1VTNrcjk8KX7v2C8unEUZ7WWaA9FptAXfgbCjjF6TbnR5",
  "key11": "zGCrvWZv1AYKKax3UYY6zCi8vazobynsSLemKY4c2Unti23DQoYhuwtu4d1VvmsWQEFjTGrtdr3QxcHd4WpsrbX",
  "key12": "4Yby3wtpsnpApQduAAieLY1kn6HEnvPXgjS4XRxCjxESc7dKenTEijdYtjnYAzWiaPp6vk3X8xbG9R4pwZQhTQtN",
  "key13": "4SNNJ92a9AaP1V4sSZpCoWyZBBTKFHAVF2FHSxWkH8Xf4e2BXUbTeVLH7cuApVEBiG8ASSoZg5JpsBf36Xmpk7d5",
  "key14": "4isSD5FG1WwXaGeKwAL86xkHF1c4oYMCZ1cUwMUZeX18Dud73Bfu6oFLv1gSzxvLeKSwLmQ8vpgVfCCTd1gY2Rdq",
  "key15": "57QV8dkfuum8ZMuHVeWz5vxyk6nhGb9vbCkT2YTBPnx3j4fnHDJx4ecU4Nu3G9miaTUSAMrw6BmcYoq3tUNGQ1sq",
  "key16": "25A9f4hJvJ3LGhsg7J8xRiZK1NpsKxg8LMwJTY9oskzhFSqeDyw5to96LzHtaiuuRpHQQ5Ujb726bErApTUM4CAs",
  "key17": "4r1okzCGqt3cw7PhAHuMC3zjtgH2Y93PVyto8dXxfz1227TqRmDfgVMN1MaMbTgy6jb8urAihnYK8ef8PviERAVs",
  "key18": "4QjTTKknYYnDbgYNDgNxfVPGAm1VuHeVde1ru45wxMANexWnokgpH2sUCSxSg4NAS1LrsuSS8S7BhmV882La661W",
  "key19": "24PjTgku2QrAvgRBftCVSX6F3QVFKJ5pFkPJJNWmtAARoJpkAGvuuHWneTpurGMNeXqaUg4gPkrhjXAbsmkYRBCZ",
  "key20": "2KjchUGXZoPCUB8c9gXUSjMqSpBgGMacin5p9FDjhExU96n2bTixDHLUDSmYNceBwREQrR9CCJouVgNuoh2EPsyK",
  "key21": "vDQxU7Xygmt5w9apVYa5HU9Krwt4FqArg4HQtiPZgS4h8CQmtxgSUqKRRnN6bsCCXRhWfcKougqfSteAuVK9sAK",
  "key22": "5PPcfKQHB8cXxEocXbmqRKEYyuQxSg4BxTeNbJhV2QehmWSfBy4kUWZNXGd8qnRTMEppKTreDyVqejBxNaTLmV7T",
  "key23": "48y4LLpmSUiWhd3xPHwUtPoghDHvkqgt3FtwRiGVHczVHezEyjco5nhbDo2t8gLoNHYrUKiYZo2TD7Vg5Gp3jt1r",
  "key24": "5ZnaA4R92FY6Kr6R19NLuBs2aFMZKhM3pFaPC68RjVnR2MF8BCXu8nNddqyViUCR2oozoDL8dvbCYBakrzBDe3Mj",
  "key25": "3qz5X15Eb6UVDFi2BecZkjmJXjMMdEyV2zVk2PeBBYjswZbADjwG5pWQ8T3YFRyQ4gtfbZRYrHpBatHqyyQnqHTk",
  "key26": "58jYFktE8DuWnp2gEz3TL8nqAv65sd35ad7GRGrKkm2repDjQAsVEwSAJrkC8jpv5hvnKoj8MNAKGtMpBuFpxvPd",
  "key27": "4QxDc5Rpd77KLDvu3pXTUL26eUt9mRdkFuxmhbqNzNvZMJWr9qsq3aR9pGw2eF4pbVNMU71NJUVxfABce5oBCziz",
  "key28": "V954okt79LsfXHweU8WJZDeR8CDXgkwgNBZngzxUgqanjjFDWPd67sNNxE8YWRL485jpnt3Sj1FZgjBia6jyexr",
  "key29": "2jKM8oRGG5oVxEM8Jq1wQi7BP2SBKH3rMoLPMqJeYw3UZdeNaau1VbaPHYoYr1CuM8Cs7CUpBwMSniYUXafHM55k",
  "key30": "5pACrFTrENNKffFwBYZXAuoFvRkQtLwmePpbdTJsbMfaRDiWZPFJjLxJCyVKVo5YwFFV1ANQh9QnoJHbXAda6DQ6",
  "key31": "7f9HiuXDeroNik95fQDwPNUUAPaLGhCQwnoT12nWdJJYLXXE5teF5q23U3Bo3g29TC3rux1Z8RSrMAeKz6sDMQN",
  "key32": "dCxcgiPiDQm5VAAE9o4eAVeCg6uBgX2gNXvXB2TTEjeevRkgWVxhRyw9fhtAWJrAprdC9272x3NDQtx533QaRrD",
  "key33": "nxAuATGEGshgLUFejKD8T3tsVBa66bN9vtV5t3CgkQhTevW5pETJRvSJpJN9D4QGCxN5b76g6zBZ8Vt6KyDzhJK",
  "key34": "7U8AfVBVTkxHJvs798YtGr3LNdhGhxj3R27zoJt5TofukJGcVkpH9qmsUATvrsSe4DgmsZYBtvU8ZvTWsAZbMhJ",
  "key35": "5atjoNiFTBySHV5uGFfxY66bbYbFs4QJZaTnJKSsP1TSCsCtmgJqpHKPukekiDndedqCTum62Xs3avV1JEWhmZar",
  "key36": "4mFfxFK5a4RBAKoh6FjXU5cD3H9ubD7JA5jgo4NoECXcAxvmrYFgadPAojc9ebMsVxkpZM2EkMXeH4WTkvQ2J4TC",
  "key37": "4AK6GaYdvzmBJcLMFBWNEsa331zKxzt8ZZ3aFgMSxM1ry6afxaUdRowur7dKmr5AS3G64aYcvsvgxkqrxUKWaQ8B",
  "key38": "NUqKNSmH9UmdCAL1vF7eSDB7dBndF3rtdHW46BDxTSkHBq3Lp3cKLSJHbZdsVurzTo3d33Fn4vmFFjUT1t4vYbi",
  "key39": "41SnA6UFppsrut4BxamoPzCawiTAGbmwgEUj5GtFDdGAHpUL5UL3TxsjS8iHBYSG8JD32JfsenW3fPLN5e7bBfUh",
  "key40": "4H8wfEVvL9FZxUA4QhaXE7WuTCnLsMvBYBi6QcGhnq6Ca2dKS5cbf9FwoRyHVZ1h23pi14PyjcDAzNx1w2BYR8Dw",
  "key41": "5oZiqViYLWhsfam5HuvG17WvWfcPyYRa6dyLnnVP7fb8MDDwC2njkGykx3T44Z5sZcpy9HFhptiuKyF7maU1a9K9",
  "key42": "26DiP9LWDLsDKaMFsidsrWroq2sfgQydu9bX6QBGGRspDZxVVgHk6p5GXMX33PvHd1iumeQUpB4bvxDvTRs8RZyq",
  "key43": "5a6k4niMv9VsCNrQ5LmRoQx37sc2stSE4yi1KjuBsG1suiiJ3dGaA3qwkxfSHr9sUDYUqEBfuFJZaUZ6VEQKQUBB",
  "key44": "3v5Qv3AzgX6ukfdxvm6mF3nrkcTRG64FqweWJi52SY97sXdGg1qNqeNdSzTN5AkkkHRXwRHQeaiu6GymHLyE4pc3",
  "key45": "kygMhMQ73hUDkagogdNYSn7ygBub5G8fySVAKsEWu4Pvy2Kp41ttJ58DCATE8CpfKUycJTZh61kbQm8HjDAHkCZ",
  "key46": "4BdXivruud4pNfZasDEG4RMt3m5NsYwC5cbedZteUvQvj6NfFrkzRrw8EBU4iBDS1DsyCZ7fJ3LPZoAXP49x8HTV",
  "key47": "3Jkend14ixxvqCqbF22wAfz4s7hFD4KxTbgJaia2z3SYNTLynZZ3fx9eaTn3SuL3Z5KN7i3LTxBtHpqgqCU9UTet"
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
