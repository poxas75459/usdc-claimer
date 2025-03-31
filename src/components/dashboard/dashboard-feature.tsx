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
    "47yNUYC5KZwkM3Xabn5camAqA79ARuq5RtkLbFedb4xqVCMitGxdoREJ5mGqpYNMENmweeeFc3B44VXUrPpuVfaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cso7GqemdERntPb4f6m4ARcGwdi9sRrZtW97u68qx913Xbf1124HUyhBtHFRG3GwWngZKKZVTcmCoV3bkyxNq4e",
  "key1": "41Z1se3xjHcG3EeMDyFJe3hEtq4f3mQRRWNEq2X7BWra4BibNcvw6LP2NKm9Lzv2zDGkWAFAfz2v3wWQM2sUVbGu",
  "key2": "4mcefKnCTjGfrU7xty2WbdjSq2qffJVEKTL9CLXGseuNK93T4sjrF9WtDHnM8jEeyMKK9WvQD85ykrKzexBqGWje",
  "key3": "RJ8n5g7M2wfbTGqZWM3m4VnXz6vvY5yGmg9fKA8Zsi3Vn7r2qsYeJbj6NV5Wyf9rJua5KguofKngbQPdJe2FZwv",
  "key4": "3kZ3f2HqSqThjDESgnzZPohsidFrDDYQSdPFayjcjTJkAUBXe7uLnmxgJoqi5HsUhhBeWRNv7bFV24GfpQXvPFTP",
  "key5": "oECXt3HCEdCS97HyTesNLHmM2Yo8MbDCc4WMruwBTannNAytteQWCebepaQYekQyNi8iZzTbuBhnxbQnfviZcab",
  "key6": "5GdsM6ddqJVm2XZedNzQihgEzXdtzz2WL77LhcjNJpg4uRenJoVhWC1GmDtaSadFwUTZhLUYURqeTWDMKVPnXDEk",
  "key7": "4VHGeYMavutKPFbjzKuKAUQvjJ5hjRPZiKT3AGzvPrw7icoL7GpvwfNxaE6RXyD1TQeSoTdGMJHAZS8L4qGgoGof",
  "key8": "3fhu7T9UAWmCCmAcauEaxVidt5hC8r66JRr9QgrdNKo6wKes96G9ELMFxuMsdbwrcQdQX11wSMGT5eJux7j5LRL",
  "key9": "2ETNuoUU9LuUJmvqsHLUdS4cd2CnN1EopAYNUHe8HKW7bVCBq25kRpZ4uCwS8kNxkvTGftZ1uev8yB1FRJVoc4V7",
  "key10": "4w5piATDngDrBUDrSGcL1r2fk63odPgikKzKtVeNhTcTE3muXKqLDceoDNKYFrAtwERp7v9DuBrZeoTfmuGa4YSN",
  "key11": "5FUQRFfHvoKxUQW94VFihPSxH2BcLxfa69ohQTn4sSqqWU6G6zPTwNdkXvPyNBPJvfAUeDhtKC4APwpsEeskP4V8",
  "key12": "3hKnfCMcNkC6qHqYhTwCNm3164r6i7JRzw2ZayQQ5gHwzgs1EXeDfQwUa7m8LNEbBqnVinvn6oA6UHyrpFnte7Ch",
  "key13": "3WcrAuoQ1qZup2vtdYY48hS2pvmsnH72XveJLpaGXprm3gSqS5Dig8NEhaaUAQroGJ8HEermNvSVC2f5nJt8dBQQ",
  "key14": "4SvqXwFh9H9eGuNjf3osvqi3zi56i7DwSEuyUz6aNPt9YAhZKPae1T2G5vL6cCmcCSdABX15GHrBDbLFx8ShwpxA",
  "key15": "5z3K6TkkA7dgrNC6jeYF4pcwrMFviwBc4uV5jTy6ksHusyGEh16bDXckgmjHkiUKg2QFKEYRdksg1VYD1uvg4uxR",
  "key16": "3RooGfg4QVE1dtc63Diodw6KDfaHi4V1mf7CeHesqAticw14CNCNceoYJQ9snFmWCs2w5r1EeoXYFq6ZbChHMWNK",
  "key17": "23FkecamFc5XYvehJxpqgYcYDtKpYvaW7Xg1xMbqGeaMEBtyb6XRgt8fnNcQaKQK87btdFM75oKJKT9Fv7HBrZFw",
  "key18": "3ZTWfJy6jqMG6YPL7jsewBmdJsfcLZ44AyNZTUGgdgtc6BpE1716f6sg15q7CH4ayBvNatzGkpy7Tv4gXrdv2s9C",
  "key19": "61tHeJ1WwfvrK3ad8pFKyQNMybqwR5nJFtoaZHbEjerEfB5mkvqKPTZgn8orxWXMyf6gKDsVTXB97JDjz27qLhie",
  "key20": "563eiZpv2Bne8Wpyy1V2qTt7ZNbJtDX3q2JScLvvbaoP6Vdy8Q7qcWAa7hSV6kVzZmTXAidyT3XzW7EQgR6BSpA7",
  "key21": "63NYSoWGwyo2ziBuGUfCQSHSqJiDQgSXrMbdZoCmP7PxXc4QB1WGa3muWBF4fU31ASVpDyx1Didm6giHCsjq63pk",
  "key22": "5Ta74DbdNRYvqnG6z2iKB4uGE7sJu4KSxEGtDzwfMgs6tMDp8LYFkMFiQuEUhPBmHDMS9N7fjWzm6SaWAw8hQbju",
  "key23": "NFfqXsQ1WFab5XgzT4S1HFd4un3qDq8NiTVsxe53H2jUmmtCXAxKQy7U1bFyQ74dEhuqGdRnFzoJqiuDwvbqbXc",
  "key24": "4gEun3verGvSnJWP3Dv4oh8QZcadmUsXJQRcpdNp6TUQ4mjJjBFc3ikxUj4vAuhWF9XYrkax7JRTQrahLFmYF3To",
  "key25": "2U2QwzzHFoTL8BBf4kCQsentq9VEhvQHkyTkQmWXABsTTC38qK8d6LHMzs2xxCB5fHNfw8oTqk9oYWQuExD3a4KM",
  "key26": "5yQtTH1rMaykhRvmmqFohiZEvJXwbZQfTR1H1CrJcsi1CU3jTpu8286ZXaWrNgYhvtuWMthVKZaTAziqJRiq6m2g",
  "key27": "54o2p1EoWaLJFoJquiE6jjHxUMP8w18bY8D3z6u8tSzeWopFBM1SaM3gwKz4BS8zHyQdTJZ2Kjh1LebJYNtoxt4o",
  "key28": "4MG5zxvviu15fccekCoXFgQPbT16YYQwHnw8ZSfjzRuCow7yJmCUS3ERdprLSxqrGWtZTYmAjaQpKZ4Juhy5L9L",
  "key29": "39sHzjTyv5TFt1JyRCKYDqUxJKieswFDyKXTXXbNCobtAfejFdBURRcavvDZ87sns71f2UQCDZF7YQJCANsLSBeR",
  "key30": "4uGKefkYxZYqJJUTBGfxU6u28MHABxVkn5QpPd4aPvPKdcLm2NQw7f6VNvTbt3QURFzK9YZbs1RWTDd963WJ2b2c",
  "key31": "4S4otUFK8nqKZT2EWxCLTn7ijXV51JgXJHV2rM3NJJFwXJamFpeCP4azGoNKpf1aRNq17DurvSDLrHB99sqeKj6P",
  "key32": "2zHrcRFas9Z2qdU4hNboeY6MAPCo4gFfdHTxgy1a2kcuinX9aFJj93kAzirDTjs4NQaUpxXBTuidaEhApoEgECyp",
  "key33": "2DbRSXpsur61pJU34iC4PcPSDrypjhpdX5NWHz6i2fAh9hS7CdLAxTYD8ieDCgJ6epvtikNHiMEcqMLMudHHcugm",
  "key34": "3xiC8kNGSew3qAtVc7oPFw1hUKAcWKuSLjHn5sYJxLEGQ1DVnGQAj2WcmHYRTn6KD7mf1rMRx1LjSmDdnMmpg2dM",
  "key35": "3VsF92Jet13RfN4x32W7787A6rF8W2kJLqS2G6xXyEi24Fx9A6MyJMVG8P5nntKRKYxAexGygCy19juMAazkKN5X"
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
