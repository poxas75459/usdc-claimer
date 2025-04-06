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
    "5wQTjySys8rjs2wigSCsW7a6dbfP9ZVv1iEd3BTQ4chwSLt9DinEXHZUnG99KQXn1hTv1TQX3yRp6V4LvhjfN1k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvxYY7RPqoRUHnAAVSSc4EGWLhPVDZy8Gg8wn6QyxzzTrm2dtwSW6w4JwmZaV7aWnCfgDShXnBAwR4P8GGdXYcE",
  "key1": "uVXvruvVpTdy5c4ikCMHzbVpc4gSpUpsPNSWUGqCNNEwUy8DqU9vGqjYomSYU1bahZeUarQVMMjN88zUowx1d7Y",
  "key2": "4nQUPJx2x9iNjPmmLJq1p7Vd5SHa6qQAkJ1fRfdzYURhqXG3XGDdwPpnCKQCr6vTAYuMGaxGryfnCJfy6CiAp9CN",
  "key3": "67kKxUobyjWetQTJjqjNCfCkkPBN16e8Rq1ZmK6ZAPYQiBeUtVXkPR4q7FXj2q8krVmrTrxmhfn2TRnZ8DsBwsHY",
  "key4": "28iQ9fih8rm9B4GbatLwCm2EUWrGdDXgXpMfR5XnKqz8333jaajZNUYujURtbxef9Pi26mW1dYsa2DCoVYJ2RPdT",
  "key5": "4ejBHKbiqtbzakXCVJPH3r9muZU2DFWR2duyTu34P7saU2ECatBoSfJ4wDiaxa36fisbjo1uTC5mdkw64LQPQ5Rh",
  "key6": "2HgYrxTadhC44CWdxQsP3kXXTsY28iQ9bZtZTcEG11hhnJZW275A6VP55UuFckBsiJkAKhhCZGnUZBWb7dVtijqd",
  "key7": "24kZdKwKFPH3rGzfne55MegL2DQ2J5UApm521eSjvktRJxcLKCe56txayvMzwxPtrDN18N3w6CHqED1S9xvTnNtm",
  "key8": "3t9FT2SuHgCfTk5BHDyURPY62NJ4xzEHYAFxL8pfLccweiCXXpGmjsVE4qpPeZHrVi5o9wezaUuj8xsA3MpCn9hZ",
  "key9": "ZjFxCpEC2ecHGg7USSrZQ8dY6SFZLKEKS8RrqtLf7EyvzDZyPWTkK5ymD8rZ9ECgC6dYUqvDfRyYNf3wdhDi4sA",
  "key10": "5eV5AtvughECajeDDbRHUDgHFKxNYTbj3eQ1ZcXyxbjbazkKusjxtSwmjeBs2AzXfbwU8dFaMZuZukRccAzvEoGM",
  "key11": "2oLBr2GQWxP1XvdcjZeEYfbrzfJcRED3QqqGFC3kHQimhsw54FLNVwmx669QdwACAXa1ZExyNogLJvQvxhEwWd3f",
  "key12": "2JcPAkZfC4Mnwdv5fZ61A7i46qT83LdCmm7kSPShuFUU9tRfntLpGVE6DyVLX65D4ue8ZNaZRJqqtPFh4LpxBonQ",
  "key13": "3Wu8sjqjWbodsU3FWPQW9wTLiqctqGfQLgqi2hw9w5TVfMokp6FZaJPoCRuH1TpmbrhY3Cj5H5AFbq8VePXysGmF",
  "key14": "5czT1nQPPKnTMX9hdqjLSZ2pzzo2u9iKJeFoPTpFjprx3r2txt87z7eMafrPJk71Pnj5pbqpFWuf2dMJzo59gZYD",
  "key15": "27SUnxakuUjrBoz7BeR1Mf3XPcWwfFen9JKb9uaMwiphdziKmwUtmJxK7wRtQsRYtZ8Fi4LmJtNxHajEmmKxQ8d1",
  "key16": "4GRoGKbiYhSLt2Lb9zv5DwU7a2QineeXApiaHb1FW9TGyRoRiLpD5g7UKAkDmwBRZGWJZE9mhNevc9k2BGyKkuCm",
  "key17": "5aFKMax2oDP6msy61bBJVMhfLcvDNtw4YZadBSBedGyDHT5rJJTWVLjbCAwNbJ94DpRQuqd6BPYx7zvA4PS6jNDK",
  "key18": "3exoWPprsk959vJwKizrR1o9j7txL2fqYicHp6M9JgjGJpTLdsguEpmgLL11DqLWwEnYxtmntcAc1Fuc9nU4yHdQ",
  "key19": "3nEhVxnXGGAgY2pXJc1REyuf8WPGRfWXp3aiWTUuGiRhkc4mfgjxf3GXDHT4SxG5uUxdzKnbzywqSTQ3pdL2QDQ8",
  "key20": "5gLYztmpF7z4GyRQjx1mZBWpxH9UFZzhAtZnhMazaCDETx1HVjNLYMfCTkC1vPJcRvbVaSMvSaxar5TMAxMQ4EfW",
  "key21": "3jgUs5fe3uFFDVKiTcGwdnxE8xjfLwCFmwwfRaSjRGU7VGq8vc1zQxDK6MUoRfXqctbvgF2GDMDYqfibGeNKwWwx",
  "key22": "31a4h3khwRhjswaJ6sBDgUXhm41Dh6DgXMvdJmWm2v2F1hksC9iafV3RCHsWfbPzfQmAv4yDxWxD4M5Frz3QQZhf",
  "key23": "GypquXqt19nz71FrxCmCThDWNH4SAgB4LoueaGmmr8Ws7CKR52qXcqroCtjZKbMtFXPjNv6UVse4bJ4RcKdXMms",
  "key24": "4zJcojMk1nAgjc6pLsSwKfTuC7hu3JWwqyFppdFCkpdxoeuMZt2EC4g6tibAEghst9GetRhMrsg5bN5VtNeXTZq8",
  "key25": "2fWhXAPp6KdbNNs43h8tnz47CVy4ti2bbpYNS2dSN5GLUqfKgHryBDPkDwHZB3ecXwVActiEMuUM6uH7F7SYMWEC",
  "key26": "dgGUMgsQEVRhZivNBPNEFmrfpWZLm8d5uZor4HUWZoSDQDooXT9dVUXUmDE5PF56Zmg1Z8pcy4yzQg9SiTCZUaE",
  "key27": "2ZG5A2D9oPEh7FbbmXWWRPqiuxPfBBufVdUaYFiXD3NUkEwEZx2xpv7RfCTEU2Cb7mqP2fdb8TqZZXB2gMNowgWc",
  "key28": "59XfmrAHDUdDWVAMHAmLsatgeXUcCwGEgLKirSk8FkuitNMHy9fbJauhtyxT4d24hwnMzC7zt7eYHKY5f5KFNT5d",
  "key29": "grwJHo74mvsEfR9GP1XbrduscpYrdPGbhKRhDJx3AKrQ4gcPFzLRoXECrevfZmfokgdbQ1niTQiVS1LRWwtXGgc",
  "key30": "48Xs25wzREgnQCqirzzwrkmicAn6oVCuU7zDjfgF6brg17zLMTyYMxDRZZ1zmyZpjwEzNBWjzs4Xw3zfiFwDQB2S",
  "key31": "51FrdVwxSBP3K3HX9xKAA2yAcqDDQ1nStVcMwnMJcdGzhuQbUkXpGfNXaFmPiYPJ9uqBG5H86tjMey2qFTFoBVhG",
  "key32": "4oUi7RPphKp8xbd5ytahDBaVMdNbJccFaDcMfwr2fqc2Atsq6u9imFgr7ViPJiWRoj6BmH4jfyxiYgYdvMRPnf44",
  "key33": "2WxpxBSqwdiideDChzqW21s2KMsoeqDyZrC9dpTDpUUTRa6EUpcciLLMjfFY1bzeHzTcAp7oGeDgHvnCbLRVfe3y",
  "key34": "43xKJBLFrW611ZqXo7xiLRZe4wbg8joohRLvg9HN6riTwgeCG5h1tX1KiPpDAfhTPPh4qN35W8Bkncnjzu7mwVcf",
  "key35": "KFscP3M1tAYCpMSZdo9Sebqu2mWevVAbxS2VkHeVbheXBbQVaX91CpHGDBkgdUWoGNYTpFpfCLGGZBDvHAsYaiB",
  "key36": "5PKe1bsr8U8iWPHodGDZX4w4LqZzpA6HjzepuaSFiAtshjiqWNub7iuq7SxXhdAobBCgKZgxgC5oJoFX1pQHqBWP"
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
