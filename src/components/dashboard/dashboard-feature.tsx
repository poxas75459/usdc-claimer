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
    "3sNMFE1Ea4xvseFKT4aiv8AFt3CyMEpUYFg91bps25jQP52YTMdwPZXUVL5fGtGdPyEoiFGha3LLgCVCfDXzXfxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43aQk68F5B6ctEakz5ecuESapLFe7B1NhawKhc1ivEsZckDA5TMxDjDk7bN37KKs6RVsJhVL5SfFHcRSGFwW9ZVh",
  "key1": "3ckFLcmEbLHra5goH3M55wL97bAYjK1i1wfHkXamvKee9613UacJWqhAHusoWZpitEaZxDj6vw2nupaW3Zf6mPpQ",
  "key2": "3Y58rxcEHzp5UqgCvhaB2CGt92ukX8PVUTkLJLZt7GTHpMkqVGSof8iVfuy4kBm28aaf8TdoLCnxebmk64eLy4Nr",
  "key3": "5DuQ28cMS6Q711RVQcxNzjjGiX7xHpqwbni9mQwBh5rswphiPTn1bw6qBW552JMPafToM6XBYqmr5Tu9Zd47SU8Z",
  "key4": "32pRbTGahn1QXXXUKQHZGtoRf6VYyae1J5DVk731QixaGxeJyvjDD7ScVhrX8RTudj4eDd1NjGUoUiTsA8SvrcCV",
  "key5": "217rL9Aj9XMxeFRazyC4pRA9zpkKP2BAwGCDMgRC5R4CAHzuhY4q8EhegKBmShydKiBjXizZ56SqZz7PUyHM41cn",
  "key6": "3PcX5pNX1p9BtAu1TSAfpwaJo8ZHFpD3Tku3YUHDkLjhEkSwTrCtq7E7bSdTnAfaopeMeGTgevw4CiyMH8tZyWUP",
  "key7": "5gqks2W23W1zMH7zgMwHpFwvB7pcwFYiCXcbKtRAJa7zebaQEqHGCSzaQN3Bi9KpYRMbR3c1TsYYSzRVujK58rAi",
  "key8": "4CEsgKAgaddY1jrgQ6EaSDtWSz8RtJ4QrMiiSKpXZRMDpofJ7HqozApPUct2HU1kzAwd8PairRvDZfebLPTqtGut",
  "key9": "3HfW5ayUHfiSd78myNWkhd1krAYYQSz5smACd8RR2J2RPTgggzfC9kWtYchrfcJSz78Tzt79Cf1akkDmDnAEoDAQ",
  "key10": "rMPQVSU317d7gmW8PJaoTSpepdB8CgzC9ZXCsdLSaCrvfiXCXe3wFkDtE6y1qv9ujaq6cAFjJCWQ7s1CZT3KZAL",
  "key11": "25eGrRxbNkS5g4g4R5JC6PaDreR5TFigtFXfrRjfEPm6M2Yjvm7XmgGbuAM7yQxmwqkTGpxsCZrstyeTYeaf5vEu",
  "key12": "44t4hhsESEGNDgoVx5bM4bdhW6nsQWqSkVteH34rjxhfX7F8MNzmcEhxWVVzjHdD4GBSPbr99W3NxJ1RhzEBR1cm",
  "key13": "5MHK9eo48MUhRvb6z29JJRAzmKhJXQW4UrDzCTy5ntSvPvcjh1irEuurAavBy5VwuLgwkWHJBXEvdcRvnnNq7C5y",
  "key14": "2JUwbVvcdgkGSfGkcrAziAabaAk7ggXYCT4AVxFTTcqaQ7bwgX1Pp6GZoQSaGqoC7m1goKKEryYmkzuyhyDYzRGc",
  "key15": "2pcszDE9FsVPJRL8gVDBaVBLWN5uYNNPUcDkZWXbeHQGYhBY6Zp8CpyZyZCZN3V3RiczoKbZrH7eFZrpkL9Xjf9B",
  "key16": "3pa6bqEYb1mN9ZnCK83jT7pFdDMiWCkdLrNKZkaBuNHm3WGBWZNeQ4uzY94xMwxSf6267k8rXT9omp2Vhippsbfm",
  "key17": "GP6BmUX4Vfb6jeuudDzHNpw7S5CFUrZCvv7VmDqboLbJ8NUYfz2HK1DpK8hbUPz35FXBf2PNU1S7qSpjpbpFBdM",
  "key18": "3kbHPsZFod2MQMamwppC6tqr5J5kKoT11kScvadxmhnqcuhZm4QaqossCD1bAkYtAaVfzTrxFmZwTnbNnTFR2dse",
  "key19": "4EGq6d6jqK1XkiV1ZSFDqbyoqUUVTtTgb6g8HRFCJZcRKTzSb8HDVZogvUtQ9FHntF9Hyh7wG9JbqejgMkXGFvaK",
  "key20": "4LGjjnPoreLcRN9UHPfh6uidxRPNCqTkHyxiYPT83WRMG3zzU8eHbLamjMzJ9mLytcxw6CSkdA8WS7qNM7JSkCPj",
  "key21": "2QbwksC3hubdxGuAJQdptxhgMLcevZVW8vZAeM6JwHvqhDzWA98s1ux712gxayScN7SHtpVpXEn3cGsGAPujVm66",
  "key22": "3Eh8WnNYjHjfvcETxb7Na4oeX6ri4t734MXY1PHASaTdkp6bySMYXr7ak8zJhvN2rLZYNeT6kbRrdAxYEEQvR7fy",
  "key23": "2B8qwSJiT4ZhfU69U8i4SoNLTkA5xuVic3NLBA6Mu2xwiBvaEa2j58dZSKhB4excrmdv2sgJrcNEzkxJ2DiA9V5F",
  "key24": "mZysANChuoBN9gAKxycv48pM4BemchurT8UVJJMFZSVseZUAno2PjBnomxXDoBX1kH9zdgC5LC7aMMHwDxoMaP8",
  "key25": "4xcTCkVgWwJQn8sV5qhLQqAZDRtMVzvrcrtbgSLX1RvTAkTahNE8yk5dKJypb5yUptsWckkLAhXyMYwkrhuc2QjQ",
  "key26": "4NV7zhJPbxnK1S7X6qsKbyqApG2kVaYSZMWusMRGLMhbETpMpwEyyXxWB15aYbPrjWFWWbRk3ELwHvMPtfMDL9Cj",
  "key27": "xPPpNapmA54pW9fLk3F8W4GjXJQcG8wGJYoE9aJxbKGtRjsUWGo9mEXp8cg2Qjx6mBKspuWEtKt6cpGyXmnyDEg",
  "key28": "5zJeaRrJ3U4Rt8nao33KZg4qGgKrg65GZ352oUf74VrSQ3Rq1CyxgPfePPzA8RXXnhR6HaYXXv6K5bbY6SYHnuPi",
  "key29": "2ZoG8SKJ7kvSvbSv1hgmdCsApgqKP7fURTjhoXuNxMgsFidp7BveqTaQAVLFPizsAJnGCKc9kAT5oHYV9XHP1P6h",
  "key30": "3QEwWnboLo6Q1Nwmfa4ZTupeo25Ew62H4kGVpnogLsnr4M3AbMBLVxzvkRTW2vw6BFj3LpWxLnUvifbVAgMJgrmF",
  "key31": "2XvYEfvmizAYWTu5MXTeXiiTufWT5XH8CRbMptsDZWupsjhAJTirrgrMunUd9FHwQPBy2dJZpKKSP9ihVzgT52RF",
  "key32": "3SjTaLf7Baxid6oLxcwLsHvGpviMahsRCC53cC6LsSrfTibZHoyfyYqgCon66iWPdThHoMJJbZXbuyQZWwZ6ML4Q",
  "key33": "fS5Dw6vYyKhnoYFDRZBuHfSWiqGECiNuB3yk4mJjh33m7z1gJKV3eznRJ5fiqRsHZzaqcpUkAqxKZVgZAvgbYr9",
  "key34": "5GJ5Jo1DM9x6w9SAdHmxykDBaQuKHePt8rZbqbUqYM3ad9x9UVgX4fPeY7DYwuVhYsdj4Ki7XKCM8tdAbGcRHhVE"
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
