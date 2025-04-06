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
    "5TPZzJcY7zzNyn1dkDSvJAUhGAMHjQ1YKYdmjvJgQu5VGCVvbj7jpNdBU5oQzErT38zCsXuNW6q9dnoEr2yhaeC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2azd4G6fLnJ5f6W2KakF1TdMmmmP3FSgAaDmNFHLeUTMLg8bqsc43zCh6g2NScoezV379A3myf2rGgdKnkimuGzY",
  "key1": "2vfkseDDh8kd2fi2KvbqY6PrPJHj8fvaLpF7ADDiXZUzaGURrQTxYu2miAHftV2VsUFt2j2PPebdnrvAdsh1BZPn",
  "key2": "4d7x3G1um74gteg3QPNLW5tmfCtX4hBts22iNqaWKeWqFYXkFS6iSVzKod8A7vPnLopNToMmeZLteDTXf1HusUWL",
  "key3": "4USrQJnsgetC9rZjobsPjyu7atCphAadZijSPGs3GrkXWypjnfttEw84YWNh1zrAFmsJtsE8KsnbzH5RZyDPZ9oJ",
  "key4": "28cEQozJ9uyYSuYA9sfha1HgZdkrJGKjjTu3ohfX2gZ75t7hkgSjq4wjppeBvcbTwsigbFqnQWE2MHMt2yPeGU4p",
  "key5": "QCMp7qrGyP7afDgPPMEF4H8R3CVzUWKrr4RCXWgoyTqmdH62GGp2jh6EHrGB82bGy3A93omZCEnrygnUKh4cEop",
  "key6": "FeRVnvyj6FCDPs3i9WHcYDjZxsGgwygDFjiH6aCZKmZFbfDRCK4zw1y4SL8FG1kHK2cyLhmN9wsXDwBfSL8yqcC",
  "key7": "4iD39EaCgPan3J12XTZAN8FwPToNNAvt5VLXXc1Wybq5cbSjtpxTaUCDd9LUgk9YtiGDsP9nYGZJHd1UKmuACKjk",
  "key8": "5VMgKHqh3h3aiFFS12jXVXASEKdzYE4gAnW4QwkzGWqc16gXwHJU8GALHDsKKEsLHJqWVth9xWDmF9eM72EDWj19",
  "key9": "5WCG23iEx35fPoDP9S8voSEUrY9ZBKDJ394Ddo64jjmaoC9y4ohqtbDRdd64wsghLdGZVBbxEUFTdaikewrHN1V8",
  "key10": "4jkYPz2MVaZKPGWSJq7S58Xot2p9HVixmPHRmXtYbm8jNBNiaTShgsQrYrLHpbtz1JDhbdN855kRA2XPndzCaN1M",
  "key11": "5iwBwx2JiKdznYzSvwwGEzqTw56UsN4h3rEzfUsHybWxn4ZULnB2xgR5r743a16TKLyeDcCQ6KYRZEMqhQYUS9Qm",
  "key12": "4CHVwzJ9JibMM8QTs4FAner5LP24azGnSagwHL7MNccBfYSBgMPk12YAaZ26AaTSUZfC2LfBsP5TBA5HoXY7i5uH",
  "key13": "4GJDGKVeZDRFcDiwDMaUbyLF5KfabYxci2joUEtGDz77GdBMEj8gt3y5TVLqe7TW29yQ1j2a2X38Q5e9d9PtQHSo",
  "key14": "3nQo2afHBxcQTa41ukopX9XKYPrC8EYSecXZE4UehfSbW7SsbnNDT52iNPsqyynpfj8PAbzpWUEuCL3U47AYtUJ",
  "key15": "doJJosM7UjkSpBr1Nw4QvoNaPRHAPgMAWvcRYXjF9C3NRTBRymjMy2TAFmu4SBGaDgzWt1nwGDzUJjbiEpeno93",
  "key16": "2JA6kxs1ibmsqHy6eWsERSBwJT5FT9BbG6i8r8pWL9Czeixkaz6L32ENsVacLasv2FVXnChjdFfcxxMixmRpiaE7",
  "key17": "4fLomJyGxdrRoQJFWXsj26UG8vprRdASEzzcKQTMgqwftT4nErAUcYuMShuEirNkVQ3BVv2d99cToc1fzbXCX68J",
  "key18": "3atR7zUxynzTWN6QM9N5f2iaeF5bvih85Q2MAy9WaDHxW6mBGtY62dD2J3Um2oqWcsMSTdfP9CPcbmk8KuLr353D",
  "key19": "MntcRwFYej1koMhqjup7hAyLP691qvRbNtTm3VUwA2pZgKyad6BKfiCJmcSCcSm4MpbU9t2ke4vRFbNzEWUaBHH",
  "key20": "1Tjm9PAvXxFTcp19NCXznKiSLe9d9FfsNbL1wZ8Uy7F2tU4MmRzVzStDNbcu7jNPMe8FuuYCgniALmiQMqjyKtT",
  "key21": "346dfEHwM8arn35yptWKYycP9pehrd7pQHhoBXmzm71M2Yd2DPNuehdfxaAZJ3hreE9dVVWKDNiuX89hL1Gq7gxM",
  "key22": "3W9NaJRmtALnpyWzSKBqMY8reSvbF8NvKug9XZvPDY5vMvdjppBwjPQrFpmj5YUuRphdY6XXySRvghmt6MJALkYU",
  "key23": "4M51wcnZkpXdJGcsy6kv9dZZVvLw3PSJoKDGGigb79fTJko9Zq9jUdVJmcdWFPNj2vx292hmZGCqAJBtPFgdYJ2v",
  "key24": "3dus8CgmyR8UAF7vzf27QCUb3nSSHFF5qQM96KgFbgfUC5j7rrzMEkYxP8EXKYgxV6FdGbNeKca3mkUmPekoJvan",
  "key25": "8nj2Uap1J93xkbW1Lt7no8EFfKM9w8Kuidde5YncumAxFvbd8nSGGpgksnBrivfXGr2MP9xBgy5AwMfcwTGGNuZ",
  "key26": "3QkgvQKb3Ms4UuwmV8czhiiJ6PmBG9J9dxv84U2XT9E81HEMwqfxeCFHedUw93NY3x5gSjpbJPv9U5GoDX9Eny3s",
  "key27": "5TahNtfVTjkHKq5xQSHWGja3TBggAuTeNndtcuTxfXwPzCMZdGdGzLDKghwhFeteqSNgXvCTNCMumYdVAAcqf44H",
  "key28": "NTsQN14BK7pqHo8YDE9GN2sMN82Bw8VaU475RiAewYN8kY89sF7px7oLc48mY8tuYHojzQxfU6QAQpLtYGc8GnX",
  "key29": "3QcZSsaJCawRw9xFbb3uacVkTJwNqvMbkVxE35ZiG7roQ4WSBu2S3CcPpPdwFjtk8MPBud73bv9ky9sZkLghxDEx",
  "key30": "43GcvczDaiQLGkXGhDJ94uc3jNpuwj5GkKURmk8mEdxJDcP1qraLDtqYH2Zcd2R4Wa85bu6PpM1R7VwBuNUw4cMy",
  "key31": "2iMJdngzXCF5j17iZxmNQrtLY6tuiXtSCZjHVKDGLq7bMFLJEpBdvLFbVadUdoUEa5ss3PJEUMXcqmXYWdTAyX3J"
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
