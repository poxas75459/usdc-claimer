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
    "3wRFd5ucYqJUedpFYkHxb6DBeuPL1HEefbXbTPWGTgyeBznVepAXR4wUnVE1y2bqmXxKQcuRbdgamboMvbd4w2nW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WgCSng9RKeA71XKC7RqchdiYMcjmCDq7mt4ocrS7uH7t3JV7eBYaRFgQA3mbWjcgpxtooEKc4ERKremXxDjd6h",
  "key1": "N9VE6fskZFSaefg9EpGn5oCUzGznEpwh3318ezLVjXnzG6gEDxSJxTJFaT3qCHDgNLW5AzgdFEvhKEh66WAxsuT",
  "key2": "4fmb9cMpEruVBq2fuMGT4o14jQdYEKvZWrdo5BBvioyxj749hwgqaMae7simy3mcWEgQtTDgWNpg4kQSuR4VXujf",
  "key3": "2cVF3FGQ5NdAuvuepoNCA9wenuDXRRKGvEZmkekDyaUJVxbdp2HQDct7cDYytY2p5ZRgoJ8djVYMxnitVdMoRTmX",
  "key4": "2rFmYJsQC8oMFtNs23DBBKqYdbAp3BuKgYcntc6NcRgrPqjBPvX5qEdnawG2HeNoi7eNkyUE9Sk4jegpJEyu9Jkm",
  "key5": "3GMPzRHQ1piWSgRwMA27bT963CGwQwfx9ryvPBbCkPGLEv3ByeCPrCMka2xskD9TJJRNQVnnXbR41DQ4kpeB24N8",
  "key6": "2egAfRiWmo8CCqzoozP9SEMrU2aULNJc2onidyoNP7zgYWq9E347PufhqFfaEdoZP8yMCXRegTzuczTrEsaBwBvT",
  "key7": "5fm3e5K1JYqeb2kpPxvNMwYas4tjh25jgBuK6L9ES49ZnUcUzJD2RhpJPZ8WjYoisseNBPigb14VjEetNiBrMT43",
  "key8": "3riHSiVPYXVBMXP9mDdnBjUHXGMt1toHTRvgA9qWXZFVQX237m7EsWuFmZa5pAjSG67jvDiabVACXKQ37Vri1fnP",
  "key9": "48vKnQaPznrtzpLs4jhNhXhzQTbCeAa9HaXJ2oVX39xJziHoJnUeSyoBiu5jNqwoQA13LFP5wtu1v1uQyGs9hq1t",
  "key10": "5tAt39sJ56eFGVsiszbhogyfcfgCty8MzHSt2xYCaRPJAWyDcFmst9b6FCJKZYayHxWDWRJaYX1gJnXE7XK5wda",
  "key11": "5rtkwFunyEtTE36MB65JbKBmoWDTNpti7dtkhunTaykWLUWaDwL9qtAf2vkhbzvogfK8Z2VW2hVt6Nz5CfDC6dSV",
  "key12": "5EiAMcNizHD9tKqER7kFhAb1DsnsorYpXpU5agRGkSN7uJ3ebK2YHamWAXChvbYU5Z7kmTKYAJNLyr3w3wWELWxh",
  "key13": "2UNCddz3dqjS1dCdTsUT1Kw7G3nc1WxUDpSw3cEZtpZ6Cfr3GgCMWdEmcnGtTgFCNoGsST4qgcKA3HkFyjzTwyqm",
  "key14": "5Ldy5ejW69X3QQmWNytNtmHpLbeRy3QnRWvAEW5Q3r13z5P3RctW3SU3DyosNAzjh6GQEwUm1saePED79d5uhWPi",
  "key15": "46MZ1kTYvH3r2RkuM6rdcVfJfL9SKpEEfD9aM39tioQkj8kBDY5b7NgavCLRnEZueZUgff8kWQTd6VP1jbUAQjHt",
  "key16": "exEsBaZJMk7yqtUGLW3ghVSwv139Qnw5aAhYxuuEX4GYZaUiDKB9nfAcnjRGHHJJAV4KcdDh1g8B1C19TbThxX3",
  "key17": "5VDcCxpNiCN7axyFMivnzJC3UByicV442barbMvPcWShK4qvgb4prJKm2A3dNtaUaA4MibkKM91gZVVpMyqvWsYn",
  "key18": "36M6REXZrPN2v4JtouYpgSXwxfKVyqxPji6LRzZCSTuyxNdAcDG4tGkhgHoCL8JyG2XMXtLYrERt2RkRCyCtC4fM",
  "key19": "kKpuRFzngEuTvjuN9DAm2AK575onDAhm4kgQScasPS14xqF5FyouRirgMMV3xS3HKmLw8vBceoN3kgx13AdNSjQ",
  "key20": "2NYjwZnDuNeSEa8a4hao2H1mHmjfXmZWykfAhCTunpoY2sKDJUhqK3SgH3SbwKFvDhear9cgNgPqauMcQubk3PAq",
  "key21": "5X2w14vUF4GxuTFNq9sRFpsj7d8y8Qh6U2SoHg3QquPEA9jsxsNXZQhAoLtLJ8sJbSBAXMgJC9m2JPsN7TGPMCX8",
  "key22": "2JAiHeUvkDkkrXXrYKULXvH3C4NFExiLHeYXTb2SjYz2VpZuBvrvWdA7UFqZE62ugQ4fLoNzgCU6JvHwBWkTCkAU",
  "key23": "5BQPt8xnEqmC7kzLg8XS84fCnKspMdkJy96SvjUgkMbcsKu1CC29WidHxmJ3wnm4Dzx3mtmY3z1yybBL6k3bG8gh",
  "key24": "2H5c1KNGmfsW3kp8c6bLEgiBGeg7WYuK86iikzcee7uQujzUbvW8F1XgdYDiXwvPD5BPD8GoVK5SZTQRZYuvYrt7",
  "key25": "32ACmXL76mhXxJDLMvjdidVZihWVUGEFJZNCbrFqwpBTCLv6BjFDT9nrjeC2WjERJx6EZHTsqAi3PfLfL9K99dYd",
  "key26": "TmF6AcDMXyqSCbt4M9GdmR5zK2hWzWkeFmQEacgPxzJihxkjRbUwopkx9inmJ7HRnS8kq7X4NNN7AGuEfikEaGT",
  "key27": "32Ba8R4k2ZuUMLD6S7gCuqxvPz155kHhjSsc2s3BNSkhdQwW9XqefA2QmkahxwAc15YDBZTGcEkNzy87nRDF6J2f",
  "key28": "2Y7u2cByCFK3G6jmkdg8WMUBU3Vg1YGYZcrTYpwiz8M7YEFcYYDcfPyB9eFgH2fBtAEqxuF1NYGFBhZ1fFkU9Xgh",
  "key29": "56oEZUqGy2nHfiEuYiJCKXNJEzLpnAUbNJfCEnjuk3ujRmM7NYAY6oXc97qHSDc1RG24iVgt9u4hSkrTfHSeu8oX",
  "key30": "3sQXVTE72FCmHG6wL3ZaAwp9N2rLiq6zBjfmubKBKSoLsJofaqgFu1Djkt2uyVyD6yKm5vPNikTSB9hDeg5ru2uX",
  "key31": "4cXeHYGjs4WYxG4zQjh1euNt9weBQEGYvDEFNTLgcq1aJDqxYM1MURL7kJc96d2cxtoJcDreJXNf6dDKsZrGDTva",
  "key32": "4rEmEngVUBiwcYPPcDxrWMoRarnwp7gBx7fBomWYQDRxavmkykCd4ytHJhzLPcpZ9kn1Ar6tgaHZ4SBdx9ySYNgv",
  "key33": "3u2FmW7WXuPqbZM2opQQHMeowbUX8f9Su7Y71T2o223mTjU8b3XFguMYtreGajgepccLcmTizrpLkomAjRoeShem",
  "key34": "5v49PAReqvCXAmrtk1goxDPnwb3ERJFMEPUppj1tgAeAxgTMWMpVCXzMfvmbGPueAafZRdgfMaszy378djeHi3nt"
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
