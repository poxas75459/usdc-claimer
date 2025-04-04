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
    "4T7CYL1bHVCvjmsuSAga2k6J3eKzt59w6unw4DTCvRBpvTQey5ywHrJ4pcWJAMBsBmCZ6fZ5TMnrt6dB7GDF6MjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DtpdXPhB7cgqqcvLMnmFpH5o2NCoXWSUu6Ee2xgA9Kr8D18LxanT9cNaz1s15AmAaf9kg8q4fGk1CErucox35vJ",
  "key1": "24NKraGMupHBwKqRF2GhMZ6ALEMF19ocJ5zQmB2uZsJGdAoNXviudkGtSEoLZXxEvWpt1dgiigCAYQvTU3RGuQWo",
  "key2": "5tzC2jSfFq2jqWRjN8TukLi2REUe9QepYe8RMfVQYvViXmKsnW3mCHQdZJeTSkWLYecXDvPQSvxwjh6VjvJmEm8z",
  "key3": "2a121DEARL5PbhQehx59A9xTEbRBM9p5WtxoswHUiiFF1w2fU7aMjaLKjzt22LMsQ7EQC86BMoq3ShT5XZLSd6en",
  "key4": "5pGmaF76FdFGE9Tg7gHX9m3uNKighdMACzMtMBHLqkXnG1rC7WXCY1qPsiq4vx7BTshTHrKkChFRoQhmBuSwju4R",
  "key5": "3aSiCBGR1zYYYLwvT124Y4inPDjvw2UGGhKvpRRAAmkGaVkfnJJqnmz9GZxoLuqGiV7rMetcZFJhjn7LXuZoq51P",
  "key6": "3xcLLJxZiLbek5So858U3o7q63RoYn65PerUyGJLpZK72Y5qXmHK2XyNMLqTCoDxfEAw8dAEs6FHFH3DnCKXZgFS",
  "key7": "5miVG5wTifLQUTJaZKRGSjGVi7UoS4RyRWAGHmZWoc8rWd13go8YqvrQdyucrpt1gkqDzshsR38jU7oJwHDMLBSc",
  "key8": "3DixvrYt1kJW7HMQHVUupwsEZccGvE6wGfaCr4Mbh1jVwVqF2WqYKse54upvfn8fK4juC39Vc8rw27mnyApi83iE",
  "key9": "3oEqnZBL52UUNyZSMzBcdWcYKBQoLrfum58XDYUPjoodqjj2XgmrEiimixD3r2cf1aGAozt8uH85UREADE7AubW4",
  "key10": "4EJvprs4dSc9eL59x7NwXCEwyc331CVecM97L7ZwLmbbqqpga8RwDXSUgRNrspucKMW5xNLtgQ7LMXNCxTCF2xT9",
  "key11": "2vBkR9Y3juSj5yjhgjoi3gctNWcVTDU217rArAmvEicyH2MLk6DMA3cGzN1RzpinDFMCHvU3NyZ4QsB8iF8fgKDr",
  "key12": "3QYxS9cr9EpGHzT1PHTkVmQYkabKJLDUdnae5RGiR7p4Cm2bWY1kunb7hcBck7P2BTzpbSzV5TA1WQRMEBoNirRS",
  "key13": "TnnZYAAzg3SftjBJC1aAzjaXAUkActdzuNtrhwMQJakuEcpcJb7We79HFP5Un56os4LZ5U8UwySYT5tNnWyWJfT",
  "key14": "yLP9h8BMUsT2yTDKkQVT6ZP3U1cSqJesGFWd1Tr3cZJ7Z2a2Vr4N81znnNnhQaZMBL6UqVCLzZtoDwZ9cJgpLWw",
  "key15": "2GWAutx1j3VTpADm9iQ259hh5z3geBER7Cp45NbgNEDYxZ2wpgnXHHBXe9Bm44HQ1xeuc9rHj4m7KqjYuxCrNEGi",
  "key16": "4UBTVTUEsYGm9BNL6qW61KKBWpVsCfMYSvHbj5MmDdfxBog9RssCZgUs5Acp1YmAETZkGKNP6SDDuewY1vTvLqHi",
  "key17": "kiQGA8fFeedDLRYizpdQbMJunXBcYcE6p33eiJn8oNrSG4XmvogtL8AoqQMuKMeXAYGTDpCJMGWi8gxAeohUDVp",
  "key18": "sNKNXtFE7VEVzPxKqj8F1j9QXfL77uD2NvyAtwyn64ijug8U841bJRvfuk5cb7hrUusHRQXRpvrgX8RwBMz83oH",
  "key19": "4JappsXzCVKbcgZ3wtVJxuacKkYp6PsAVgkwnTyYMVD9n7BXo2mFLY2KQ9vQwQAWdowzXy9eaELxy8GchpS5EBpb",
  "key20": "4iDABp1BYRbmz1EaLGLPhquMu8Y2Soo5jzDwU7GqW1gJiQSkRVdYV5AY2ovTaGgXWoWnyGXpJRUymme4hurtY71R",
  "key21": "3Zs9KGgCMitBXsyKtrqb4KE7bXpAHfRfRRhNeT6rrNcJq994bs1n2uZtiYgujmmxiBsvqz9TrNcdh2ahXhg84y2p",
  "key22": "55vFU9LxWhRcPwRB2W4gUV3mgmf6C62gLSumpNWmfv2aCmgEZxaDBxMofcxjk9MnuizAV2NSdwFGDinu6ipNFMHM",
  "key23": "2UqyZ3D8g1tHqucbSSQd23woT14NVsk7e2SiHhYnXaB5oGtPUy3otfYnCvUnfypRiHmosHQcwcnLoug8cqiNhRw4",
  "key24": "MAQtH5psXq7kTKpSvjc8j7Gd8X7Ad9aTuoFHdMxtZDDKg55KUk3mheSdeF1J1yykW8tDDJUGU2tBGV77VoXuykt",
  "key25": "66JyYBpizh1yADW9XBiXNEpNWxiPLNRZsgKwC1HbBWQ5x3xcMKZvka26VRx8QBpJKFqwbdxKAqEzGpmNXQ7MwUqY",
  "key26": "4pmrKJmVWQKwdAqsRxkQnU7T5ZxMS4pHAv1iFoD4Tqx5XS1Fc285TR2hHGBTMP6DWyYycLUmhDCXsBu2boRHKW3n",
  "key27": "3fjLJExVDca7LAokJ1oFGW5hmCnd3ua5KNppfbkbQHkRiGDPECJRiVTwb6SVDM5ufrWKhdruxoW2Tme4dszgpd4W",
  "key28": "4g8jhVLoGBq77wXek6Na5o8tByWC7TKtdgkwCFdjX7CGZ2zjMsZ1czpLN2HVSSoMtkTSM3jUdmxmCQnnNboxBj5B",
  "key29": "3ifpaMhTNjJD1FtM5rjowNzhrsNduZaiqAF2T4eTcJdTWdvArEGJneQN2KUiZFXb1dt81uaZXGxubs83EGF8Rmem",
  "key30": "3ojstvY8bx4bu98t287LcnT3RZEbGHvQFTsWSJ3ggX5i1UmN8u7tzw5TdZUAA7i4FDPvm359bfSdNNwC8nWKSZ5a",
  "key31": "2he5WfJn9NjSA4r4NcwfqTgLq5HQ4KF8XyVKfHNmffD5X1MRgZKWR7cMCje4XYixzpSxfvGp9sLA77YVqDWa8Qhj",
  "key32": "jCAV3NKYtP2TNjWvxLheLVKaDgsbzcT3caXfPDJYg4XxWckEe3hTmQCg8FYLVLN5EWtWiWQx51F2tQ6j1fQ7so9",
  "key33": "3BD1ZPj4Aq8zxKoy2DL7swwCd7CgEb4DJnvFVVQo919AckVECGuc2Nf1mwz5SVbeQ2e92Y3f5Dk3a2knPsd1JqJT",
  "key34": "5A1qgoiSWv9ro3nKXtoiQ7U6msDWfoTPWmUFCXMxfXxM7HCKe2Z5hJfyShjeMSHQFZKYTrNUkaVpsCELnQq1m4kh",
  "key35": "396YRygJWQwZuFGq6Ppew1nBS9sBQYH14EBwjCHjTSkadZgyU1mNuTXaDrZsjcxrhAhx4pqkvKDKBLYnvadA9TGB",
  "key36": "49YrZCYKX1wxjgpbw4rQg61PtVpPRPKyYzMJoYYzh5oSJ7pVUqRP3LKW4Kq5QixepocLPXRjjNzuVeXT6ZhNF9jm",
  "key37": "4msQUpQAQSwm4aGfHQfmkbJjrwquVgerCUsRKH5XcQ9hb9tS2Q9cRwZmW3gtUfaTXmzkpAe4ZwWWKkRstTrdhdib"
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
