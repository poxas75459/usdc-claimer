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
    "5gN5QHsVPaNk1UStWJgJVj25bhXHwRQrwFVk6mFNJjpwb82HkXNtxEmEQS6WiC16R6fxZ7ZeDGhnEqN5aaMwzgdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCgZh3yz2Qh6q1wPR1D71sFyBMyNZFvanWrdKYjs5FqFy8fAUTHWPEHgz7DFp46aSYoAkGxrzukZwxdp1nVDWdt",
  "key1": "3yvtfFBEi3gBfphaDepH1VAkaxBYcs3T6CYWrG4c9CTaRHCtZGp9g1DRnvF6C9WT1vbjxXUc8AqYyGYj9iiZQgZN",
  "key2": "4DKXdSDWD7nVDpuArLRSHPnBiNUBtraFsRvbgEHwQJBGjZLpvenNgbSJYzEqwV77hqEdEWQ5kLkBJWohKV91i3PL",
  "key3": "4DVxsGhDQoyUJiU8cnvGk23nbi3NYqYDLxJZLcFTmsKc3wZpyp3B37ah7qDzWNKLh3B9ByA8G9fJ76gNBXbo4gQw",
  "key4": "53EMUCUe5m2CFjYs2dQaFNoAhdeZ1yDmhH4cWgiVvvYHSpx1mRURT7XJww5WgXdwPMw1vDrSMm3CkunAhtLcFjSg",
  "key5": "5qXsq6T4RifUsTxoyNPAAqf4DHc6YZG31ZZgBRuUALoDorvaw8xKegbFLdfUS74Ppugk5TxTciH2YU49Rqr1pmu4",
  "key6": "4kbE5aohY1Wp8RBPVMS3eYnWBnfZwENnUnGZ5fjFRbNHEgL8wKEjEPJ1wsKtqLgYBUrPsroX2yegSm3SLCHDdnJh",
  "key7": "3NcP8x81WU2ZyEYBdKAj2bmHdcWEExcLXJpkTQ3UEkz2KR9dQcRFVAELo4TM5F5G2zVBiFHPW1qebiQeD7KrS9MX",
  "key8": "qG8FdcD8TfGkqEeN6HEcgzuXspZSJxefLbkFZg6mUPgrjWyLMsn3dwnLGNrX3f1xL6B7kimemyp3fSNJi3W6kmc",
  "key9": "2X2d9KrJKbTvyPLxRoGzNwa17WFnSt891WT2qsmFxV2eQHUV1wdDB29VgQAR7UB8bkiiXUBAJQpA39wG8wpnovbm",
  "key10": "4gaw9w2eDssYv941QNhutJhnm2FQdSn35kZp248QB82ymqsjdKMjBMxae11eJGHwEFHBZi7nuk7EFWw3A4dtcWHf",
  "key11": "3yx84M6cmEADb8Woi79VcW8cXizurbbg3oNvgZQ6Y7zi1rpL1y8EkRdxuVQmHkthJYgSr3TEbLGNzKPxacCAvdvt",
  "key12": "6Z8DJ8VPNn6gEm7gNyXCkB4udmAyMqAJYzp7ViD94UATS1iBQY1ZxQVxy2DqvEaKY3BoHbQe17YTJJQ6T4LSmX3",
  "key13": "oBrWV6PqPVKGwC8JXa7UdSF3CADQ6srBpeFiwrYQq1cXePKSeHJbBPKJejeAeiF43JczRhStmu3KKsqMbDbVSyt",
  "key14": "52QpDHKhhyyFmvNBCKDdysTxUpwtoHHKwCtdfAEyVonqzz41DMbL43M6WmihC9we7fE1qLTeRPVd241F8CRdA3qt",
  "key15": "4jQVkcbbkXqpHbcbzX5Mpcuc2D62nMYZeWBSrexMBDaiBG7g4orEL3o1Mwu2X8hFgJ5FxFUzTA5q1KQcUToGFtb6",
  "key16": "14U5cYqj4AFgB3qnUrfn27S86Ss4Qk3nAQBTUKjm4ydwuMRRsizSU4Z4vdP8miGpTNCtrFMuooSB9jfSjmat1Py",
  "key17": "44UtHubAmxBipFnr6Rw6Yc9zfSH53W82oGfAEzd8qZycTmMbc7hVv51EpyjgRGBSVxTe383L3a9nHkdhnndMtZam",
  "key18": "5tUQbA5a4vPUw8CzVoR2g3PssEMutYJJmPUmbU1T9skkqNVsQc7NDFZQMR3V6ZvYYUivA25HUapVDMrdyK8SfiAp",
  "key19": "5uVd5uiHsbmaDJEYhciKzmqYRGrqpCBqU6E2fmw1a75y3PxRjN1Qr55uXCW3wwzN7h69C6KQW3VvMKZ9ykodEVuR",
  "key20": "3kcSfiQbMkVKjvr55RqDxWZQWs4jf5B8TYhPPqDjDWvoBGXCRcDgJz2zgSA8BHJVE7Fe4u1FjVF5y9gJz8EKPJTF",
  "key21": "5VdHA525uy4YsFUJNsMtKemknoo5Bg5sPMZFXU4jzStqVnPLevLgW4wUhRdoG14Csh1sf5JhpfejpHT52rLuhuHD",
  "key22": "gMSyaQ68bzGHNZGcf3miG95xmh1hDHNHp9586QKez6nmWmggrwDqi9sjdedTEV75tcB1Z9sDUavUhSpvJWxTBuU",
  "key23": "P82a7fi64jVyj8zyakrMWUjahWG4Q1uJ7mLyVJg5nQEbM7hqK2wWADAH3krEMUksn9kNkJr19R2PGvPKmWKTAFf",
  "key24": "3acGuKxVj7SwG2zF3WWwrd4eQtZzufZZpeHjQBhEty5k65L8ZhLHpk8nefQjtTw2boutkGcSMr7sKP4dGXCzJEdV",
  "key25": "4dgu3FCwSjr8WozNdd6jWGwJHsQ6C8Yn6ygbQh5ba1fuAX4xtyhx18thpPEugK5Vdq1hVxFtowNyyamZBkj73pFt"
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
