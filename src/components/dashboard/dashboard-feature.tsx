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
    "4WVVSs1ZCEkiKqmdHfEKbBT9vucwSomQYYu3YSw19tGV8hFsGv58Tbro5ZPBg39g3b6akWzkozE4LC19jaEAFPSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aezukYhzdEDuDc7XQ9UfuCdTgpgWQdJsQEeE7pNgvQhPCcuhmqRvn9eVGnA9faW56KFcLsUVphaKRVm7vTNt4H3",
  "key1": "42isAHJqdW73zoupWcauFMu3SL2KacHxzwmKoMsXYQciay2KntndDkQTsLKpZkaQeWpwjGUQ8b9KTJVJg4x4usAm",
  "key2": "3YbnEzv2n7iVtgNeMrxMsqLML9N5mHzvD9KpuCM1TtdBf8JA3aHY4Qs9n5Cyj675MgLjYUVrCvRhS94u6ejVAjme",
  "key3": "4d833vLYjERpHrJSwWFz8Yz67pDw2w5cNgMAoKZNTDN8zdqKRbQUduUqotN2PDatg5cnRtECDo36ahEcysb1vUC1",
  "key4": "2yLmhBLVFW8m88tYmmajZa8nFbVE4Qibb5gQhKP47XbZxTHXNA97KXn6ATA8Mv9jJaeQvgJS7n5pidC8v5cFDK53",
  "key5": "5QELKoecTY1J9TCVwyfiRfSEQG8fYMbk6PfqaUsKBjn5SV54yAuodXwLgNSKUMSRq43uAQU5ui59YpJE4Fmx821",
  "key6": "FtYGj1An28UkPkZkukFM9eqfQmHessJpfsDAzcSQC5GEkM7CYmpxxbS3D2wP3iKhzNE7LNmLARTBCKhvf5weyc7",
  "key7": "58X9xrZHBotH4sxpMPF29gBKcv5LdkmYuoEejdDnfogGpZcK6UQecJMQaZAJXbTG3SJmbjNiNjcJCEdYwKm85Jci",
  "key8": "3nfvcNRK9kuN2DfaW4qAPb1tpRDEkiwNC5WypStmMJq7mJFrQE68sTPjbeE1u3Siu9w8E9uzgsCExtqHSF2jk5XD",
  "key9": "43FKM8oZw3hsiPaztC3sjryiuHKQ6VSt5LhwjXcymqSJpC5Mk5bCaDoc288a9DApanwWsHj9dygJp5xZmE6ZA1iX",
  "key10": "34ePUD8jy92tN6JgMHd8DHuUVGL33dQ4cpgtVBv37gk3TFXn4WcnQsnLMU4Ae3vgBxBGdvTq7xDPesyPWzuFC9QL",
  "key11": "3wKYx7HgMYfxCng6qf3ADXKjwKnUcztqWtvuFPAJa3xZj6u3xvD1VWM93zDmbucPCmreVgQMhWsDi9isztSg3L8q",
  "key12": "5C2ZouTNmbPKWitD7rAwhVCWdoAqbXiw8mGoHnyVkWTX4c6XUcLp1DM2GPBk656UUPjN8WiY6eYWXLCfybpM2VR7",
  "key13": "63j3DZPFFL1WBbaucELkyyTyBCFQHtUV1kWbAxAA9JRSVXJG6h9W3EpLDyHnTTiXcVPNgxu899g4awsAHdBaYoRT",
  "key14": "129GfjPaGKghsohPS4axzLYeGFkK3EENYCo7myNZzW723rrEVTprntMfzo5i7TBV8JqQ9hmTKh87eo3h1pKHxNCa",
  "key15": "3KaBb4teGcxSDfXfTMRik4673nzxbYQXpNjU1Q9337R6ra1iYEp3NtE1EXfPgkmQX4mSRaLSFZ7orTPQYJTCruQy",
  "key16": "4rccohqGYTDqqb54uKDSp5KU3NqgFRwkFTM37hvPp4aTqfh11bJmhURsBu2E2ERyxSDjgd8TqLX8B6R7t1zRsdz7",
  "key17": "ybCu2wXKezGZ2ygrvwVreNwSAqyBeZ1EbV45dnuCXPtoHoknGBA7VnmReq88xazdDYtbPhsukrthdywyWrEzLtJ",
  "key18": "4JoRHWHi1u6GrzVYXZZYYJ2YknRmKPJ7FA958kLVS6ZYZfU1fb2fiPRj14M8x8Dhd1S81ktrJTsBSATRugH55oDV",
  "key19": "3YHy5dFXFj6Wi15u9q4K2xrxscDVqfg2zppnyHLrJNo2dasp6zcujYyi2uoKjZvTMgnk7Gfh89n4zVoUDby7qhRn",
  "key20": "2EvZMHBufp3g5Yfegbib83nrShACfkX4314aekdAYHfvpNeWn7mvTjL8kghUqfovDdQT9hGvMeNrTtcbHMqdiVym",
  "key21": "pdZVHNYKzy4r71szN8JRJ65EPrX6n6pQquD6N3sNke7grMRp1ajcxa8yJ3p5VwHMQScDQD4BXsbLR4is6Dd95iF",
  "key22": "3i6M8fDuoSaNtFZjEACXxTaP8BRb7VZBS82FW76eoAsBYmRmUg9e6h1QuJZdSW9d4zrcuBzzgZHRptRvQkDk6DqH",
  "key23": "Z4uHWygQWYU5hom7j9vh7rqPVqZ2BKDWaaQqJP3T5qptqNeybudCcBYJRL3JZjTcwRpifS5hYNh67wp3mEWJaRb",
  "key24": "431kLUskV5XQUSuJsQL11TGeYDx1rrXo5UCm4sMSu1tiyR4UzgH33z324vfjforxc1Enpi9EWrHw3HGMVkPpzp9S",
  "key25": "3kRFurV8ohWFFymmMkbPnN97qwZn9tnvSfE5MVJak9Nta5qFuGcbh57J8wQCV5L8N92MwXscdvtQkp2YZhW7CEVY",
  "key26": "4LZHsiCXigbaaqazmehTVATXu8N37xr1jUhiSyk9VEmysT1Ch19B2Dj6SMNifTEV7ti1PjP5fBXSfBbP6RzNKLpQ",
  "key27": "XhpQYsaLjhMCySePrrxy9Ak1BPCGmK91tuAwAu1VSFFHdrxRqgaHhvVuYKcSGfQhTsMk2z6zCVxdPijsYGheM3H",
  "key28": "cZjsB4wVYRgTjfov1oe3YK7PK8PTeAoPmquAsVT6Ho58fL2UHHatTaLCwiiHHLcm9j6DtjByikPGvC7ab9C4HCG",
  "key29": "xsuTtDuxbLWtxNMGQ538PW4A6M7eeo2NDcpSGHdZ6iBm3Etdr1X2rPbCXga7zV4z3yvLLxvfbtEQHeR5pt6K7we",
  "key30": "3pjqvaSpompz1QB26ZeMf6uYZVHYtj51LjiQeyaRA922CfFxCTnLp7MkrcKKmbXfFe8UxW1BRpKsx6rkcHf42ajd",
  "key31": "jjeRbD8hvRnswaiUXzdFJX2faWY4dNJZAYi3svHhaEXqrF57mnJ5VMuEyKobaCLpZMGySw3pyaG8wxjRNL9Vb2a",
  "key32": "ETvah478DqtWe8uZY46KWQNbDdChwJUCxvJsbH4313MYrAEuZEKQ1jXA8wyH8pFcnfbcDYtmxBkHn93LpakZs1m",
  "key33": "4aTm1WzXtuzm3TXxeQCW7EeYpJvhjaj2EpfNsYLMUoDKga31vEdgp1HDRmea6pXrjzM9dDB2tRAPwgJH4cfkiAUD",
  "key34": "4q2BrP2Qv7ENwbxhvixDZzjvmGfei6cPGmjdhby5GisX3Nj7jXSPqTKRLkG3P1rcRJb8DFskHevrSfqg944Hi7a1",
  "key35": "3qbPQfcXafeEFDZsLMgq2GZR6RWoTEcZuLdsmQoWnC1QFXfKkrApqFddxq7pTWUg6DkxYDieDhmJNoRRJoqehaiP"
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
