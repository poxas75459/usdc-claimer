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
    "4sapjnzc6QmjhYGPdwku5q2NDjqyWjp6kcBVK3NwJPf3N2b8et4dhzXYuF1B1QkrZTPpAqyBNoyujLfTSbNrt2qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TAZty4f5NkVBjHKwG5v1KKp33vUHykruQjqYe6irDFamyXGougCPDxaABatiqcrqJ3VSb7bwtQFrWFgUXPJY1T5",
  "key1": "5Bcygj6vV6VsuVu3DGz2UpDwyHqF7RdYDU1Wh2xWW8GBhGxu7Ya6g8RGcQzWTvzkTzbWpuHCumqkWezx8iFWWo6x",
  "key2": "Q8FPqhnfcq7BVEdG8o6qcZzDQywWJ7kDaRrjb2ikwrSrRCztLfXNAqPGt7T4WsYqX8Pa8BEnqh6gXmrfkAjxWpY",
  "key3": "2hjGtKMqqvsPaEx8QtKwA34xLofkqfubEBhYQJyED46eg1nYxCNtoRm2ByGxi2Snug6VQbvwP1jMvbqvGTVXweD4",
  "key4": "KgJJN3RS1CUVod2GGgcECambNRRVNijd9P71nGbGDQPZe1oiRsEHEmW4goNhdCPuzeaWEiBauWZVwpXUKMiXUX8",
  "key5": "2TDRAkWe8FY81uKdpgQWx1MAhzD7J92tg5fHZAfNH37zVo9knyQ3fKuWoAEbGaXLdxbv1te4xWWm38EUeQp6zcRU",
  "key6": "55Uzo4Kyub2V9kQVvdAyRQjV5SCQ4QFhAwDitzL1Gr2FyrTWd4Jk1S24ajp5rYJiEvPMrAM9yyHFB2CPLF61tdwr",
  "key7": "tGeXrZ6DvMXQHuUVymxjmTCso5z7gqLjT73fHCgTv8JVqkvDwDxNUP3gBQYCXc6xwE565drd6gQrDv4tcqfYGrd",
  "key8": "4mymsd6CQXxLqzXRQFbfc4cnwiN1fqF44hwtRcXuZtDUiZqRFTdsLbWzPaEmoLSWhTZ7nx8qczHPdMpoPq6PyzfH",
  "key9": "4Mza5gKNBXB9hU4YEzXZRaP1ZSe41Z4xVZ8PzhezR7dPHqVLAXWuEysc9qiBWBnQMmg6qFrW8VGNFGz8EyYBsbCE",
  "key10": "4CXyhwDqjKsLjyxrNvRqAyA1vwpvPAc9S8wLSbwTS5hooqfSPJeWGs9E3o3YdYDfVQTFFks6KcEq11Hx2Vcxo9e",
  "key11": "5F2kY8B62faGHFA8EuD2C91xEhupU9Jv8h35Vbc5sT3xR8se3JRzwh3M9rGHSwbZBzwH1TZckCdZXzHULSJgjSyp",
  "key12": "4KgBkTAd6q7oaaN3aEMqo9CX6vHYPpNq7kRaz2qHJhb6MViMToDPXRAZz4byYDAcRsbseSFye7EdLdfJisEobubC",
  "key13": "3WipJPgL68PvydhKBGqfE4pUWBczmqipmw5VoxAthEsYX7A5Miy6o73jYzXkn95dDnas9gcSDF4tV1fi68Zc3skL",
  "key14": "3Ze3u9mUScmFzrnyDmB7G4EkiuuriwvWaQHBvqYcP16mChRradgqMXWkeibR1Yq8sSeKDzvhUm2Gqbb2ok7AHPDE",
  "key15": "21S6t51aJj3nb9euHzXGHsdmqQPWoaf5EedeWdMVRBpJQ1WCYaEePCfj3k2Z3L7fJ8AELS4P1YSFrAHNxvUZjwxu",
  "key16": "46XQmvpavjBu7ChcodDucxWW6K6QhdTiWU8fDztmnYa8RwaqZfJoYZv94Px4Qu4CZKResSbTJFaQB4TRo9pJ2z8z",
  "key17": "2G3D4vSd5tkQLqUB2NCVE2mbEyYexMrqSEaQVn7T1geGDJ6NzSS2osZxtcV9mzWr1KciLgZuTwyPSPD1Ytam86nV",
  "key18": "5fnaH8TXFaGpDv51Hyr8ocuTkJLiP8w77jqGiUBZtQib8b2qYDDR952CiJAp2Mf5NKjjSXwrsBx3y1dNV6FGCYUA",
  "key19": "4pujcZZsTVfGFNZSLQhN58FX2mBzi7kRnEBKK4u3zyjcuwZi4H5eZxLjwDqtZWpGQgVQVDRSN2fbaZgUz1DE7WWf",
  "key20": "3yQ5MCgjzht8z4J8g64GsHBjJ1xEk7172p6sGf8rPDraU51MDJghtLFBpnSn7X4MbZScPqAqveSmWRnyJ6vL9M3D",
  "key21": "4S8kv1HPRn9yUbx8jYdrEpMMjNHMznQMmJ5PmsiAuYZekuWLrAA9xpiFrv8R3qzv8NDFytphBetAQNZBnGCMKyni",
  "key22": "58evVctbNCSYx2psTzNc94pb4aqbSDEBe14w8bMRRxgGp9oVmaKhjdq8KLU2CFucu73hgw3pFF8gLHtZycHatDan",
  "key23": "52nqQfgboDmefgjc54mrB4JeLvrrka5zYz9jDda1FQapQJbDut9p4ndvNkAHR1LJcGZzh41jhHEr6aJmAFmtRxRy",
  "key24": "5B7U2BR9nWwdHDC3QD9UkGogiikgnpXo1DD6fAQezjWj5Q6yGwbXpotCWcWbxH6iLxqjJvjh4ED8ecnZNET7rNSK",
  "key25": "WJXqbJvPCwe5HcfWf8bNgFhWXYMKXDuafJdkasxKXnFBXqiswWK4G6fLTAAq5bzXhn9E6QmdGVBxmBdABEdypUp",
  "key26": "QyNaZxx6L3skHbU78UAN452tiDbWNfrHsJLooqxkeguMSiR9TaYYtk3t9CsjV7yAtFFYpw85R65Rq57Q22s9ADr",
  "key27": "2pw8pV2ewdgLdSyQ6CX92K6RArZnUbRSMktFPBLNULwUj9uMBtGEFj4VjFueNZAcQuUWUCPsmGujXgCHd6r4vwvA",
  "key28": "2vc8B4VviNzXTRdgbPtWa5H6W1X6c5vNvPmDN6QumVYbEtRi2KdbMB1ukGK2eVb3YZjUjfRZDSENqXym8HKc66az",
  "key29": "nZCRMDcGXga9vXHrXgzPtjDQCC4ZFr6weMMog1DN7XEXUgkLfASo5dTmRfzgRWJVfMeVnzKi4gYgLXHmqXbdvj9",
  "key30": "3rDhHNJRmHxsETrM1uceKXNCLnaoExiUyLCcqv79Ju6U7xdPFdHGsYXqCRpWrim7uqzTTvJn9vZGemjiBDtrtvC1",
  "key31": "4R5kLmnpx82Jnxh7Nc8ruEuWzkpCJE7ttSdDT3By7YqmtszhjZGYfzrcUfQUuG22yvzQvRxCs2EL5ECUrGPxFeNA",
  "key32": "4HBRwmbn4T7JWSwpwp8CSNbcjjujWr8sDqVayexxeSLRAXSqxxh3KSY3PrYDoD4rxkGTdA1ZV3MrEytrx1NrZnk5",
  "key33": "2rTAX9EUBzee5S7S5otnTaho4A5qgPYvqEdRT8fRP1jvjPxJvwbpiiT5Y5K6cSgprq7yWLk8TbZ1pu7fMXCBrAma",
  "key34": "5SVg4zJkvSbBPwQwEFna2nJdzeGSaRYmdTHiQKNpw67rXbJpZxAgfv19YfDQJC7RjxhihvZhhZ528NvyN4PUWPgm",
  "key35": "2haAHTTNTVHZNwG7JihN9PK41SRDbPP5XEsxBqe3Fqr8MrRxoa1MRSwgca8Ve9TSTKfHJBMhM5B4M1rGcUnbhxv1",
  "key36": "vPLG3bA2e5ckZzyBk8THZAoa7TPcp8XCMUb5viqWn878gLEQxX4A2HJfsoGFW4ZiyQXcjeRFGvEnK1Lm6BKjFWM",
  "key37": "5naJ7c48TYdFizkFf3SBYwVrjttvm4BcPzsSkAfXAyG8ec6eGWW8KY9MAKgDudku6xFSq1Zvpi9uRdYNmKeZ6WY4",
  "key38": "5BLp2Z34pkkLrkm5V333V4aY8yrz488t6EfRxFYUP3iRCnEtJT4rMRJa3oaLhDvB3Sc3thJfRry9XGqRNohAi5uH"
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
