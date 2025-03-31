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
    "5YWcPgr6K27QFJkx4GYtRGDVbijDaK4Ap4Gb69DQvP2qc2wj4sHcxSAWeaZfznZpaDaknQ3E7TdyugHwePu3bPa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y83M4y2JitbpNsYgg2TamCwkNHJhncoJjfNA5KJv9vnmV4Awi6a3CTstB9HZB6MqGTM1mwFpcW8frWTDt828FdW",
  "key1": "3Lo3G9HJu96ambPPdogtivsYW2PYZaFkX4xoVGBdBhXTU1ES8K1DACBtq6pbHpkARPNWX3kg7XhHHaZGxUYDL6PR",
  "key2": "66ZJuBBiunBKtbtxRUnyWdU7tdeSnb6EXSvsJQSTSTHeEyPULmsUkqdop3PHSnhbgtBt8zQ4UR7TSnzw2wka8kQb",
  "key3": "2jKDweF5hAKHxDN4UwLjTPaw9LrAQ55iv5oxktzSsA2pUWhKUa2dTPhx9V4Qc3jzf4Npqb6pYF5aS1EEKwPqW3pq",
  "key4": "5yLVVGVeLSNUxTSJvbQp2YvywZ61dAwNyvh73mkSYZ5FUVFRXWaqCKC8Boc7zEnsQJcmDesFfcNbQ66u1uCZ6JWt",
  "key5": "4pFmZD54iMzaoPVxrbGYHktj1GLnMUEpfrcAFuNaFiuJ7yndND2wsvFC5gJFXD72vUoP9va1PZwBQbUTGcLFwbU1",
  "key6": "5uunAVjHTLmP213YD4SDqmrVAj2zqZDE3o9974xz7tUiwvEfbMqjAsSekSzPYGHHNwcVm6ty8samjyJCixzhhAf8",
  "key7": "4bvHjsitNs1tz6hjSUmm9TQNZjLaU2GVnqAuNPYLTz1qjyss6G3NxMTG8goeb2NFcseCY1shAxD9F4MBVhJbhVsX",
  "key8": "5i2t4SpGmHyztHtxe93c21p7WxbQBqq7n3RU6juafwatedzGcCGGagucxGPUt5fUuJx9513WR8r9oeM27WHSDo32",
  "key9": "SYwm7dDEfpSAFX68BSWGr8qTzVufDsmGWVmBzbXr9xhu9QGf99fP93RZibhMJTMYaszL5SLMzeQCzjPpidm9gfx",
  "key10": "4ij7qaEyCUeMnnFsVMtHcApew12dh2prKo2VEtraoVShPU4bqbx8gBzBTPZFe5aqvr8H4W2uA9Dwig55D4GBTFb8",
  "key11": "3Td8ipsBSPP2MmMA8AawTAWKnw5HnuahGMNoLvA23sWggvGUZ6q8tVK4YWxnG2bWSZLsaC7qfmfvTWNiQP3YuRt2",
  "key12": "2vUMZynXf2QkTA6NsWi6mNKQHoUBUN6tLtG5DChSU57pYB9miDocwFsVZsLVXTaTyLyuoXxsPpLevfZN5m9RpTqH",
  "key13": "2s2nfVrGn4xiCJF17JyvbazgdeqMHbeHG2GB7v9dB3ko1makScXdEScxuhAn46N7rTvcfbbnXdhSPc5XJAwptqLS",
  "key14": "2cpR5Q9Gj9SFT7PVdY8ayzgNLz3GxRMaZZ9bZiz9fCBLTdmHLe18iUfUfi4VCuyEzaYyyNSvPwb9CnVt4yNQq8Ju",
  "key15": "FJrjQSpPA9fZN2AEbyaxNPrFLYfzwwQ6fWz4Hb7DLGmmR8b91E7go1AaQHnaB8QkBCyZHf7judmbDybGjfsxB1T",
  "key16": "2jQfSRwEgoTQuixeJyyUhQeoxQoRd4KLcRPBsLTe459wnU1tqptE1AEDJbrRmCprA2wG6SXUzCPiP64aUBJsmhPv",
  "key17": "33ddHwo4EF4vduTmtyUnMu8Z3jN115ycPGv1YNVMLhewGgnc1UGMHMmgcVCoCPn9Xw7m49yvNacxrrxgseyj5c4z",
  "key18": "32DQe8jUjqvz2PhhsufMDWppjHcCTkLWf6STCLxugLWQssGZtANy3mjLn1d9d8Jk3kMPSqoKdqhi8NwSf2Qin9Zh",
  "key19": "4cdhx61MTijjWDgsN1GETBGL58bj9pcncyMbSeswLPUhvD9xn8eAs3f9wTGk7bSLzXLwiBTtJmZC2diJojTogX9H",
  "key20": "4cbKUnjZBf548yhYA2QMNbbiLHXtSQ5m5hA45ozX8wXVRmLUfi1RNgUYd974MdVHdLTt3YLUK8EhjoHKDjZcuS7H",
  "key21": "46dGFKLDcM9VChupKqzxc4q5KeXCLSEFs26VuRDYJyD3q3JoAEiPXZGec9uC4pXq8fvpftffMedcqExScpuLVYXh",
  "key22": "Yr3Ww9zEuW2DWbfC9Uc7inXLcR7DmonstAjDJQr1BrZqXP2LN9sAab7V1GKbN5fCLJF51xT2eyzYQFeCygxABtu",
  "key23": "2n3KhcxpEb2S6i49PrNAgmKvYkt61kDvXiuH5bPupQCj1aAxSzATXb4ig45FyeUM2FA9xzm93N3Wgwf5mkSQea3C",
  "key24": "2FgkD5Yc84WbNZA5tPWph81b8bhHRaBrHgdNdxGwuWdyj9rSu89f1Gm7W6MMKEfrKA7sDCGrgoasm5bUMXDGb9rG",
  "key25": "2DRfpipNTv9Pi1naPWeX118AXQZ8uNmjTQdHrC35EsyKtbvSDMNRN33zauzUryWHduuJr4fRND15eBvh6DpU9kkS",
  "key26": "64tx2ZL5UNGFS4DzZyE1ahjqy5A8JaKKyH1WCs1E42WCGE3m7zVPxnBia1J1XvgMC8ABWNPdDiYwtnnvE2sc1csf",
  "key27": "GkBei5bCqXdeNxTweCseRxT1uBf7Ja6bNgeC5Jkh2DZfzQychCyfeEYdjGUgsLZv3s25zozaCYFLoVe1dcK5ZFv",
  "key28": "MMRNE4QqgbMyRaLbRVKk9AvC2etowcfoKcqGVEqNQ1PNdq6tu2pHxSz5UGNT9GWCSRV3VVG51P1eYuXFb3rpMyk",
  "key29": "5Ci92U9wH5noMRF3eLNQWzYcF5GM9wiDwue6pcQpeZYXTsmCcS8sfyVo2f72ubAYSv1a4XCzYvv8vhoDRSMRBgrj",
  "key30": "24KMRZHDWwKbQ4XaFT3tSXyXZdbtV51KQRxdH3W9GyC1MayYvWo1ygtXTyYxtUrb9Y6kTn7eqefPxJHbSN9arfg6",
  "key31": "Ej4hhoQiLAedrhM5iPFhivhTeUgXuzY9Dkt6U69MrEVjerAkEbdkXbjdYuxiykwqZLUXaQCgG6ynq4z1FgMHvRB",
  "key32": "2U66CRZudjmzwFJoQfjtRY24kLHSBJyfEvBnWre5xYbfUmBmMqAXwGsdkJG4uh6XQMZdPnfAHzjJCdGUqXEgoqX6",
  "key33": "2wvhMW5SkVPTHJbjx2kUHcNYUc6kzXcT3yezH7fB71SKLUXRQU8GcjoGcVGZgPjk5kaPmAxtGyDvcDrCN3kyGKNt",
  "key34": "2wJFJTFh2qTfjsLh81RoZ6hvSwJS2pHRGRu6Ybp4gKG8AqB4H3fzQtGefRDdCamVX3SnxsvhuzxgZKa9QX113qSw",
  "key35": "2bMTMznVRR3jdW6LCL3vPiN8j7WkzFAKoJAZnYXKuTBj8SCXFT4uxiqZHaReGcq8M2Xxky5zoaZ2EaaykCYg7LLJ"
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
