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
    "2iy1Z9XBLLrNTaXuScUiNoxiU5aQpHZ3we8Qab51mHXXcTSuBmnB1388PowVYSZHsX6fGJU7MGweLFeWBDdh89pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrFBCYw13QB1FGsZa5uZ73EkRSweXQMFeYCfeDKCvrdbe1bM8CmonTpqx2HjEP3zDdv5bWSLqSYXpFKN6P5NSnk",
  "key1": "eEVCbtYXxbxKGjsdK47qwcPWtJ3v2E1aBXcQZj5Ex7txtmtZrBELsaLfp8AbD5Vr3PN3Yvt64KPFDFJwyw9XCbg",
  "key2": "3qxNa7dmBWh95j1AbgE46be6FZkn5vd9rQfPRnDEMaGuevW8JkwRCDNe2drTsE9R58iAeUKziuUdqc7Qm6QVzaEx",
  "key3": "ZzdXYM9PGF1PFhAS9JzhQdWg2jCsSsSizhGdStGnWhjveNcUxQuBEx7NhTocpfG4iS9oCe21uHpdGWm34BXUArp",
  "key4": "57iTdXRxyrKkjvGRGUS9kn2u4G4vQhMyxF3zfdrJnPnxrrusR5AHXgV2JeGNUYbt1E9Ac3zBBBjS1nP65ok7Gbc8",
  "key5": "3ksxJUbXRcxiK185tj7BURjY62o3zayhU1MwErRuhycCsF51R767BsDhyyAhpfHjK2VvXnjPEU89wCJTtCrQByhL",
  "key6": "2ZmT2YvYMHLzXgfGzRwGpeHwbsdx9NKaHmn9cuqhYZSb7FbLa4A1YGMxekRM22oBp2zFGgVGdUMtwJoLfuPGRZQP",
  "key7": "3sQ3pwU3YpVSfTeUQ6Rd68x2z657JTWytjLU7CHC5QHtfyfjWRxMPz3bGBhcGQjwLGqMgZghQ8XACnsB6wF3PLnY",
  "key8": "2jDgYCRXBUS8nmaNG7Xx5CgFSfogsWy7CBa94GTkAaBhVwiLWfxU7tX28QZqAdCUgZtBed8h3z1PaWK5LZNiHJBv",
  "key9": "ey55NmD5iPdJ92JeZzpZsxBbUTiUzZpiApQws4jZfhPjDeApfZo8JovHocAQuPwzMfB2ccXyzFEpCdXiCV8Hofn",
  "key10": "547JduDkiVi21fRkrTrMotz4nc9QFLMnocyvCYfbnp3xpBeB5BrRGJdRAhH9TYtT6H5q8Dn3oVsLvPxPXBzbwtRh",
  "key11": "2SHN4wFrYzbW9NobFqVnMSPbySRtduS9vGQUawyHKj9iiBwTxeAE12H86kJVVS99umKvTUu3vwhFJrjdW79SZxk4",
  "key12": "2FwGPFisUriUKKC84K3MwscSQwDfKTR4bYm9otaFvukKUxLJrHKe4sUuXcRDsuYuWR6SQguCP1WvSs168KfsKuiY",
  "key13": "5WPj1tYf5CkKTFLUkJKuYpFGvgqRPnPDZkZsZddnMmTMc6e5uJqKy59AnXZzDuRzyJGXqZHJLHYcoyrimp9RLhp5",
  "key14": "4ZBw6uxEd6NxXebxKAFQQjvp69QHZ9jTm1Y1HBt3U1Rd8gSV7ykjgoYtjQBSeTkqM1bSNcJH3Wduy1MM1iDUzU5X",
  "key15": "5A4ny2ANiaDiwzqDR4HPoqanhvPaYJ3t7Ttupw5BfK1r4LSdkyER3y2S3JDD6gkw8CLK8cEK5muvDTAKJPvAd9CA",
  "key16": "2nFSSV3TMw4hSqrd6V1a1THphkjmcf7Pp3zSFJgGkfaBNjR4kn1KJDQgyPhk3HUFZZbvVfbJmvpLSRBYsByfEHVk",
  "key17": "2d9na72ZYvWsDgKcww2toFo1LxEDvy6Gq6ST5MqKnYWMCQnJihcfXjdxKC8qW6iAKN83f958TbkskKbeYgcyEJz5",
  "key18": "411fuohgGbuEHUyTxW4F9fauuWQuB1b3U75yVnD92Ji9NoExUyVnjDcLt5gTCG1rKfVFjYWo2B6pnGV1QZ2euXp5",
  "key19": "2HpH4AsaxV6ffi9UoLiFpVQY2GepMiB7juJLUcCwJuFaLCx7Do4CrWBtSRNsbAAm2YGPYj7nXFbei9TqnXBGCiHp",
  "key20": "59pxigQ1mzmqmaZzdj62op5je5txkWmbim7iZqqwu7ctcBqW58YLfYu5AkBLgUAnvz26se8JLvJEM44cfHGexoDw",
  "key21": "5oXC4MJyju1aQbkiSeWbv8Q5Te1naasaVxWDpRhENFi4gS8bwDZLmX74uQc8xqCsMwqWHnVhY3LT3Ts9PN7wZe8u",
  "key22": "2KE8YxL5QaRLd2prFnFFAq4WwEpKA6PHmdcaMP8Xzk3jrpEqepgV79FYVNTmCvj3r52YtUdJzqthAnmUkEmZzebM",
  "key23": "4d9V9vbCL7oYdxbsg6VAFhFCAkL25L87zgVBp8RVi8btWhB99i576YRLcwo4MW4vT5ZZXFPE6RPc34Y9TnXvuvgg",
  "key24": "3PnbDdivffKE4ZUUQM3pG6ucyD3fiXDSAnMEE2bgmdtF69PNuLebDCsdxWyzxjceWCu6EbvzLR5jo6cZ2Tijw5YD",
  "key25": "4Gc5mXPhQSNtfvDBWDrtnTHG2sH6qXjJBSe4Gpf8tTgfHFpqp7Qm9XigVcC7zEy7jAgU5Z5LTCZE77jseRh4eEbL",
  "key26": "TXRoBAYXFXCvtYeykiFn2hQ84uXR4iF5qvjcT7wnqHVCTRRremJNU4TSgA5V5gn6g98NGuENTUMTquGenByy8oD",
  "key27": "RCZVtnJe43ELiE1zgufinNtmHVFRnoYGf9x2TpVo8DK9MT7fzCmeNxg7Nx9N5sggJAnjiGJj85sPv5cEJpMDDu3",
  "key28": "3zvwsEb73iGkunJp1tQoLYRgELGTdTGUP2nhEnfWe9PEgv4ft4kQMkubrjFpTGQ26zWwgKXkuKqgQKuQJ2QSoFZr",
  "key29": "3rkD79KCJ6zMfUAXcWB3ERVHugUtKD3Narao22wW58FVYMdzZHnmFDSGQnhh1hJZ6ooptT6zU47B63CeaMs6AkXR",
  "key30": "obmNSXY5N8AyqGZ9KbxysttB7gG9XynRGGZkfTivHxeL4kNMBuzf9wNSisDW6UWjXFzu9pvxnR7bBhBM9771KhB",
  "key31": "4KTjGQFMotjzCxP1DzzRcz9KKrCPUQcnfV8KUfGteJXL4ax8r8mJ655yEMwcAA8ew9cSdskx6xyhQR1XPqYcXEir",
  "key32": "65T6FZhicx4v1Yx9tLDRih2SqoTafLwTMKsi1RrzHMvBZZqWfHfuyuu9T8BVE2NQa9eZVdEZbEn9K5SXm9WndfF9",
  "key33": "fQ3h7FLaGjiZhp2VsiFLGnu8J4TGnTipMRh6enTBLvMbFBhmnXi6YxNGgxq8eqs5jc6XK2MHpcnut5v458aHy29",
  "key34": "63k5YqJuPuR5HbEp3w5iRwDsCtCx13aeLy8u2qvgjGKU8eE4mDMtExduW4w9ETVUEKXQf2S9a1FPq3PTCuuVBoXG",
  "key35": "2T6uYqWPvSerjGGxKWdhTxLBceaar7Mb4HRq6v3CwMn36Y8xrDQRp9huAKJ2QzXoLtS7AziQq2h1suNuzdZYAgbg",
  "key36": "6cutZv6dqve8E9DyQ8x7jWTXqhVuNhU8eQ3vUhjJhwqbyGUuS1Gv8jGNEqzDA6MZyChgogAKGC2H5KLjHQJVtTp",
  "key37": "26qzQ4vgfQB7vBH2MLSLXV3t8QfoGSETJbSnM5AxAmm3XmgWm2tJJvuiV3Wfesn81sSGA5avTGAW4E9LWQ46iMPD",
  "key38": "qEK6n6wpdRGpiMDtCXhFZzsYexaDUjPrRPi1jgUXT4kj31WdfMhYHv71NfAgkGJkGL8zpye3euByNw4sxhb11g8"
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
