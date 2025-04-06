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
    "8H8JhPjYdAGVVax6Qy8q67SzbZ8rNLYdS2PWmnz8PUh8n5d4QkPsn9W3pBTNvbPZyAYNeYXCKxftJuvJG6asfwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEiFdvwNNBuEzkRfrVbjGzWHrhUFjaMxffdiyunfMUXMqQ7RT4DM9KkuuXBqD5bwHDW5mEMWAznhp3sPi9KWnGx",
  "key1": "4FZ7VRto2G4QFzsJM4UGxpdhAkHaPqGEHuWG7d5XHFZSt9LnkXo1jWXHMu2X2rXD1VE2EKeGeJxU6FmCEfz7gpAW",
  "key2": "63CQ5euAkuSEY9qYT6Dz71nRTCqeNdqtSQvPCCW1FETCWKWgCeUQsPqY6YysjA2QsfXDWQTveDHBYNMBUrqdvo8a",
  "key3": "5U2Rmh8oyAiwx4rQCkCFCDGSbV3hvd7dks592zCE4VDX4zFjpGGTmFX62aBJpv1jFKZj86ixFje9nvM8SrweJ5vo",
  "key4": "3o4nx9AaJMCsNyNWozbnytnq3tKB3R9BnfwXZsRq6HEDwAFt17i3fELserEazRRLSe9YsNtV6gYotWWC2VtQ75gD",
  "key5": "4y6NR3ABXNnYeUnkn2VhECKvvMgbYXF3FkhMhbz58DdtFmtMQErkRY1P6eiJg9MQugyWXKsfeeuy1FcmvR8Gdm95",
  "key6": "41FdLmMMJSo7FeRvPWEX97iyasozjbaHb52U93hvdzfTZsB1P6bKHcWQesspAYN8FSvx1HvGPrbY11Lw1fLNscAT",
  "key7": "44kQkDrmgmerorF9JKrYXcd9S7xiNJAnrMQoEE8hCp9W2LvfNTKkW9YMXvtKWDhLqzNUJD5i1Zo5bwj1CN36UTmh",
  "key8": "39Aj4owXNGXW8fF7Y2fyhdqo9Zoh4cuCVE6WZsKzxT7NHDsw2J6SeExQZRFHNtmmQhPdsC4WChCp8jpfrsi9bozz",
  "key9": "3etzSJE4DhimwqR7ikn8gJuiomQPnuGGrcgiTcsHMSwW2mmFqc2dU7aDDMH5BCaVMNQ9GbaJtQWYib77mNpgTZmT",
  "key10": "5VyipYzqj61UFKpaKeMyG9F27D67ji2SxoCQqMqddpipkBGYPpRB4RULtfjQLanZm1EbaMA9RWS6g4hVsGvUE9bL",
  "key11": "21HP2kxJHjrKCEShga5sgFzYb77tv2Y7neNhSMT5qkKaA7UZyZtbhz3mS5YHg7MuKQ3E8fS8QRanuwwbUKDUJG48",
  "key12": "5G8N4Tf9VCZC1GLzBHJqwtYteMrAh2fTNoGF6dHLDeHggEmBNbbwjdjfTjTx65rGHXWW8HJxSymGMrJeW85VaBtS",
  "key13": "4cr44eNvTu5QWjozqcbZ3M7tb5fQE5n33WHw9LzHLxMcjtBbF1SHtNTsoVMgaJTFCJm2NeTgJQnviCuUD2oH8q3a",
  "key14": "367rX7Sjg7YbeDyYTJ9WY4EpYhL6zCiN4KwvRj8nDAsCSGRpcKRSPHi2gPEqg1kGVT6QpXsqAy3Wtk3ZGAthHaDK",
  "key15": "5ymFe38356XJ5DhkjdWDvD1qP6ttz89RenPkTMt9zsp2K6LypiSh432TEYQqPu1QoGRuHepajiUNUDRXCQLSgGqK",
  "key16": "46hhFcgdcNe9kUgkx76ipBvwLHdpEoEf26AMrVyKmnxytwv1pJTzQtw9WkGr3km4JCyRACAcPpbM2tbTW3gxL3xL",
  "key17": "ZBG1dvz4LYc9YGVxCVCFu3n62fUUctUU1PMHcRkYRpropwrsGByTVYFLCtcqgTgbKeGCdLmuZP2PPngTG9fovbB",
  "key18": "49U7JxZBUbYsXAWBCifkjiMznBUSBphzmT7YLpcMMcZArjK1poEouJjDm8ff9VmyMPS7TTVkT61EEhSwSsdbdfWS",
  "key19": "ttsxHbmDdbjjbhbh9rjbFSLxXbS9eDxHFBPM91KDMASo4z6oCETy9e1CQMoQh2SRtoWduV65zEZfoAE9ZkCVnir",
  "key20": "5hki6Q3b2Uxr5FzEoNGpyZgrVJLdZw3feUpVdSXCLugN3bKV4di14Zgao9UgvrJTTch6mFMrgpKkkfxBQQYcZMNg",
  "key21": "4D8vQJxT8hFahphMkpXg6Gf2vKeFr7xayk6curbyDYH8K6tTox2Jm8fQHr9nUpCeHrZKvGBHUNNLBoSRXLqVnEb8",
  "key22": "3ER5XUcMCJguvopa9yEMKg7wTMBfeXXDEViX8wd2VuRmWisuuCMuDo1oHVGSR8nqFMvxrNPAUgsrfz2JcEJYT9gC",
  "key23": "5wRfwYJ2ABUxcHfMpGU5Tq1qXASy4ekBTBiTDMTdFZPGyaabr7qVhRATvqKcKXZpE8rAkddaaZfXEHhZ26hgD1Vq",
  "key24": "5tAioqUMUMfAzDvUweAoBCMoZ6GdaaR9dqGPqZaLhZUf1Qwu5Co8Zq1irNRTNpudyjoNcxu1jhZiz7Bz1usjfLaS",
  "key25": "3udhoKdBEmnw8pmAvoymsBfhiDKCX83RHyQRBGfn58Jid7pQsctoBCJKt4Nwj2bqf8qCH7MHLDZ6XZVVZCGBdXDF",
  "key26": "2D3go1FRTmdtWm1fLNb97WtRxMdh3T6jHFtEJX2dgvDzkNnfXza5mEp98nJiowfqi6UiTyWZC94UF2StURKQTPDh",
  "key27": "aB3TWGT8NkMoWSgg9ebwzQ7MkgFtq1wiAsFgcBCbij1qMoaYP8hMb7qJeVdVjgRUKprgAbnidCwG4Z3vWuTUZK4",
  "key28": "3RoTEofL4QuZE61Y2NTbDy4f8sYQ813xGhjACThYgueHByFNYoevUTLcoDmh2FzPJvS1uRH3m9hTy3zsoaQyf3i2",
  "key29": "2ouiU3vZYucEVDiWZRMFHvsa4sYJd3NPjKJT4h35PUzEsmxdLi2WSMDxqZ9rsnRB25M1r1E5cGdYyxNDMN6Zc2fs",
  "key30": "5MMxYzzpaSwJvPRXDCG2NfNwMQ8sHhZYUJHrbU6qvPBW5up9LLUbGX8AAnD7cTFSC4MkUo2Xh6GxEvfX9Xm6GPjM",
  "key31": "2hUkq3CAXzdUoypgr9zRMrZSVjX8yzsLdkXtfrgGzcDsHNhwEoxbpppJ7NB1rcEToNkn8eTMiq2gihtM1eVqf2fF",
  "key32": "5FX4YBTMhsjxrn7SsVNn5n17huxqTERAeQVtqHy86Yu1WVEmdfWj3DSwy7BdPU7GZPrrQM3zG9uybrgwCKyLecn3",
  "key33": "4JCA8ucK9aRVeRT3wY3N2veSSiqVA33L2dtKGEGyGN2Ti4u6BKJhvGf5XAfcAVaGNDQ3NhnQbXEzWMaeXbvsYeBD",
  "key34": "4XXgKErYVhx7NxdhhMT8FUP5WXbp95wJygUhaxdVUTgYhtkA5rSv1cpH4Pcp2jxuMHATTsFdq5ocAthk1XmJXBsf",
  "key35": "58Zck14sc5dqXrHiMHDiJRSgfPNDUCyxPMuQt2LpWdXqMYPUyXR1E1pL5GeMTRKeyJP6UqHydJRz1Km3QTmQbK5w",
  "key36": "4UR6JCghGvdmZ5Wr3p25LFHPCnbXdQ8eJjyWnRpnQfErAWUt2DSD3Y3EdEYPAZtL1T1e5fgU71N1ygsxfxrhY2sn",
  "key37": "2EDqdKWGNAKxewMNAfVoZ3HzJh8J7bNEFmvFaFvBz9Hr8ceXpBncNTqnW6rjGfdEvUrRzLrrmfLJWYjQGsVEaobf",
  "key38": "3wXbHbThhh6ZUoDBAgsSXAehBqeAKB7VoekBJNURVyBX6AxHexYFZJ5HqZzEyNfwFExqB5w2zJrsyLPveb6XCGMV",
  "key39": "4ahchyPvEgoHdqneaHaTXB5GPjZY2J4KeicE5w8mcRyev6QeGAd1u3ewwoLE4dpgiRZgD5PKYnKb3BbeRDYNak8E",
  "key40": "3YvKMA89u8feekTiawFY5VPKGPGTzd4BDeZiGYYuCAkpJeM9V5Yn5hAMMj7MwwF3AFc27ohYWF6bhqg1rWJsMu73"
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
