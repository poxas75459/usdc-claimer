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
    "4qJciSjGMyp4qskGzq1hLDhAsb7mnAwnYM81YdCMdHL1wWCx8Agaru4oHkyFxyctHF7SWvJhe8kCLUeSHsnci2cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBMCmRQ5rnZGs8t9eCVYCc9Sd9s2VjqZJvd6adzWQ5g6HR7EAm4LniwWNayAtJ5SwdnCUTHVi3bxfzZexwdA3Yr",
  "key1": "24VbiC6XE12PBSsH21mUTz975pACif8fBCKH45JRRffbsAHehxGFrJkhXqU5G98iQa6y3PevtwzU2KDe4ZgKdarV",
  "key2": "3HWxQ87e2bvn7tbeMuECTkSmx7NwmobU9QmMCt8SE7AT5n5serZy3kKxywsn34EmoF51AgYFQ6gQzahGTvDpDbta",
  "key3": "24chPqRx674gi8ptPmJ16H96L1Bx8YkGi9D3Srhaoo2kg2qRbDpgkKdGou532EsQpZFSqRPEaCBRgEx5pRbJ91sK",
  "key4": "5iyRL33kP6HufCX5nhkDjD1QdK3G4WQuT8b3VfkQjLpRWiiaTaoUAxB6SaQ5Ep2nsWVHvjBDAQ7c3t9BChSE51ga",
  "key5": "4b2jFMoKPTPL834sCFm23XnZpD254v4b1mxzJZjBYSa6gfccMA5rj4CPHwraPFTVEBswTiN3cUsP1dmZTzxzibi2",
  "key6": "2JvDGjmhCorKxaDePMJKvAe41qCNgHx7xQCsRdsCukPpC1aacE8LDH3xwRr5fqN8dYSh66wcpWkTMuQD1JqmYDuM",
  "key7": "5AJkSFi8817N2LVanN5WHNf84RkuyebDRexX9NXSTQFvY1q1Xh7wP6DK9EyesbPBbbth3mcNoss9aTJwCYA5Ukin",
  "key8": "5Ya2ZSeBY5iKL5iM7zhHhKbVcaUBLSt8BuNTDMdJHqc5MDAUAL7q1nQybSd3h9cbGcp1FbAoyC2fUaATg75MSjqU",
  "key9": "23LTTD8DGaYpWtNpfyJUfoMJcvjkRuWwC1JoyRZbwnxtMLkzancPtHPy2JKkL7LEfnuFBxFhG9a5ALqkH2i8LK2M",
  "key10": "2dNCknTQ6dcujH7n8xXmW6bUbZNsMRmfTcKubuFJ4F7dkN558gzrxRxeeusvP4aLY9S6SFC8KeVEuLuAmioQVJog",
  "key11": "3QEQX9DqEFRmTCkmuLyVerUuWFBgue2Ngg8asvcCXNnzhKCwJ19njDoojEGtYSi1tERvyUsCZzFi51ofmtR63HkK",
  "key12": "dMX5CXeg6QFbmtavhhuwrNhxRs8QkiWW9rQ7pGbdhf2cHVrg5FFHi4bkHS4LQwo8jJVumkXk1tiLnFRRt9ZL2nH",
  "key13": "3YtKxNdWAV4mGtLPg4EWb7DThGqTYfzrYsgYYL6XLekJMXPM57iNrRxDDTwtNghZdsztMxcgpktX8hPcJ8prCM1U",
  "key14": "v4YyVnSGbJaQk6PU8NyMPmZpJ8udkBuN5V8zcDsjCWRxaczGT98zDzm4MpRfja83cDaETyjNf16jf3oSW4JMKdz",
  "key15": "4buZddfe2893tZxDvzmD9MSp9bR3cNM1D15xFCPtr2tJoQ4NKfbuPqQqNGTKeWCtuKmSorQ9HUi3KJkafViExunY",
  "key16": "4tbgYzq17kSRixQXTM5mhCuFpmihVcG53bwCUYec159op7VP3YH1X6XyVhZk7kaSr1L7eg5eeghF3VUL1fJ85Tre",
  "key17": "5f9XTmqcQc23UTwNTuxPDBQ1zvnTqUhLuR1dJv2cTsjsJU8WGdasExFtRjzPduUkyRD9BVU9sFJxisDZQNxMYDkg",
  "key18": "3C2SqCLbxWuaVaTCG2a6UJTpFXj7uccSxDE8bnCm5dwUMc1wQS5C76y7UYid8heP7iAXL89YzFYJNFAYUgZj9g3z",
  "key19": "5J3FNYGg5DUwypghq51XXjkLoo2vyFTDS3vDHFY6emgfSLvG2wdX47pHJRyAuUZX4rfgLJCtgKSP2JTSSc6eeBp7",
  "key20": "3m3qiKvDWD4sDNtiHxRTFHmidPMe4mmHRJbdcfPD2b9WnvuwDyGJf7evY1ELcaSrEdSh851stY4eDpKKWPRgkAC6",
  "key21": "5X3n11Vyrdmc8zd8EgDGWVc4QCYCjgc41AKHCQFcS2Chw2o2Wiy77u1CTagtah2h3EECwSJ1ihbVpMwtMUtNjUKi",
  "key22": "5HvaGVWkhoJVC5qpsAZ1m2b1NCwCLtJMnL74bfmwzbbxT3RV4doT3zeNkXadZ1bXBs9atmxszBEhrQJDVKSKJxWh",
  "key23": "5Y9jsSVYF5r2mmyqVDJ7tfLDiVqcPy7iYMgJRN1JcsJ3iijB3qsF39JcgAP3k8HRik8afux39uhV2Pw85Aui7n2h",
  "key24": "4twAQMMQALTpuw8832AUPXDCm7yqfNTqunG4nBpv2rHrqTjiiCnoB1s7t2q31hNtZYFsiC9AFeqgycYc84azQDTe",
  "key25": "2JmFNnbcS1av2mmzy7Tkc5ve7Z5hYG8SX666GZnif2HD2ttqHvcSFvRTd31HK7wccf2jtf8tfpfWCvd83BRMix7E",
  "key26": "4up4fzt9fCgG7SuAEMxrB3fLLiCye5dV4SzvwuXYpMpo6tAQJcbmVoBSLFGMXqemJukwE6j6932ozxLEvksaH9Sa",
  "key27": "2vLMzqU6wLmGdkErfVkzd11dWqQCwTcYRrxMgYKouGVDzpc2qHjWPdqWc4tD5Bg5BxCwQgCbsUBDLJmWogfp4Bz2",
  "key28": "4aSTuyCJEofkCBbw2GgLUbFXnjshA89bYD8ttc1AEeknU6uUfUQFJLXEaiXz4TPKPxFW3Us9EFjEMMCjYcYgPw65",
  "key29": "Fas47TmcqKKDAberiamhXg6fvLnvS1ZpP6vNERxsAZUSq8ykhB6Tu5pgkGEEBFZs1SkYbRn12o7aYwh71VkEp38",
  "key30": "2GTpyHiwhzV3nBTGshfHYcvP6hWm7ghQ8jykBGeYQNFC3EUKrf1WFaJxvjChvCDbtbK88v6prZsHHbmK9UauFfqP",
  "key31": "2ZFnBY1p4gduMD9QZAXE8qLwYCMXys49Dr2QpaTRxsU1eZHUhiEJnAZMA6Ense9sSZtxDWt1b9dfDydu176b7ATM",
  "key32": "2LGX8LGxqsdMsNhVdMQ482UggLFiGw5AgqpDZGotVnJmRrHmFj5KY5FyJ4YmbDB8WdQiVnf51UUDiPD3ZzZN9cTH",
  "key33": "1vYUMrWALurAq7xYMb4VBQgJM6UBvAH5DF1HP5WKHnNpr4e6J5eVgMGQVNGvqFPo225iXrGxpZxxXaKvVa3vWk9",
  "key34": "2rzui7XMqfFmphDVJEiX5Gyb9i5SBdTuT6CCGYxvYbzZzYeZ1BhZiQ6kXjuT2depJH8vbBo33TCZUReSpnthqM7C"
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
