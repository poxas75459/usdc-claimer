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
    "53ctH4yksfZxkTZEpDZWpeQnDSVBUqFHh3Pvvw1bZPzYGAy6JuHnBFCYwK1ZexdaFRaSMKsyk1Z8bF24LZV4UHpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNSoHU5vo7dV9SBGERUZYwh3jfzW5qQpWL56SGaukzoM5aatnNYCfpdGuvrsaFcPHLGZPBwQAebz3adV6sBRDYE",
  "key1": "3m8nszkvJEtzU7iT348kvYfbVe5hqeZfoPs9VJmQqv6ErEcYcwMCdFRVUTpvSPckj3hMp3oF962Lh1HpZYo9MEdz",
  "key2": "4PmjAJK5mahF7WNr9nAtm7NiX8cM1isxrBNLjxiVG5VWauQx9aHQcbw6XoWhu5ErAQAA1X4xLsrxkPK1iRwZtGtR",
  "key3": "5F2stVFMXxDvNvWtY9Z8nd4JmN721A4md3SijiBkBdmwqm9ntUtpniQMaK1BSRU4aX2bpCeyhqRzYoujQzxVJvFN",
  "key4": "2kpnxZjK1GUgvPf55R9FTKD3qHTEQpRLcmZAPivKJZMMN2wpD6oioKSMRSNQ6RhL7xwpCuu79yeHSntWeb6hnoKJ",
  "key5": "DDWnHDicvSAk38YkPEd3iSbe8EVoFATYyaXnPah4HaxTVoESYAoT7yMcis1ALKNndTaHKayN2PLpUwwx8r2PRHM",
  "key6": "67TAayiDjvU3pzuUYXu1VvfTTcqjv5bRUfui72CaiLerZa6xMfqwbUTC45fgKHEmo8F6ocpPKAS3HPVKKVZTvb5z",
  "key7": "3ESAx38ZYvJFh2GRSeu7xxNqjseyVPX2KEfijNnjZLcqRwjxQhg3i5XRQBGiyvQdtN7R3qqZ3GPE9Rx4nNHW6Ng7",
  "key8": "5PMKRhJ7cKdpTvQnmYHauX8BRwtUDvQ7QtaUyMRivz4eqBsBXVREr4eDbEGSNryW8ydiNg6W5dKPwxXAyVMm8XWC",
  "key9": "42WAjjZpPPgFEHYngMyoGhnzMRLPDaQLq8kmjcaFVQ8CUy6kGMW8mGMMQjDQt2rEioxqgVRTnmuxtHQ9gDuViGKN",
  "key10": "4CjNwuKZr3sjqho3TQdsTJDphiMNSFLvUiwUCPyfpgMAHg9oZxDR5whppc5A1mpJrXHgcQRSqrydWoNdGUSVH8qE",
  "key11": "66eeaMyHwNGqCGhPk5zbYDJrueC5woDL1izsNA6MWvdgR9dXEic5xSZwrsNmvACcuGDtqdhh2guZtt8xTQpouFPv",
  "key12": "5UuqcTCNhbjCTazGMbJ45LpZDcguCqu1JZrCxbHSKGgtp2zmAP1Cyzan8EBCiD7njTLbsktJ1f5tfEeUbDChnbYn",
  "key13": "sQc9R1vJFFXpq11j1PdhxLFopEACWsqo1f2QLs3xfSg1th9XqpoKduvuuEF5wDbLFXbhYNbugajy1zyXuucWp2L",
  "key14": "5L94y3N1xAaZfMB4gGbCWWBi6TzZdL1mG3CsDHAxzad2AhPQSzBukaAdh7UHceTxPThpkCxjZFqJgUHUqfQz4bkm",
  "key15": "3NonuT1q1MxqKJDShsJwcnmE2q8e5hFYy9i8giduBYPp1RDZxEcuwAJCGpksUbCabNwPGamBeTeDL2Zabw4cr5C5",
  "key16": "4gh2d85FS75CmqCE8Z9ihHzhTsoPqY28RkLjMVN3eJb4m7X6ycXMVBR5QRW9mQK6Jr55uBUg3hYjuCnUS8SSjEHw",
  "key17": "rEv9M6beYsHYreEooxaaQt7AxSN7LqnECgRPEGYG3VbA1vHQyVhcCyEHh8yMBeABZmZEHSGfazKKYzLXa621HJZ",
  "key18": "24F25rtisVPJ6LftoEm1MVuoURZg5GbHfyym2vPv57Mgzf4r5ywxUT1Sr2PWW6UDp9zuDPYsyfnuxputqGJUWgLx",
  "key19": "4Eb5r6zaezuCVgoMo4qdsVpZNKwWUifBGkQc6qtEjncYuhbSh8yhgGH5vUnQn7wiRwW2x6byfd5PAE6Bqv8iiRRG",
  "key20": "3pgxRPRjgar8gqr7wXK975FJwQbvRx7ZwCNhBnfqamEAEuczpuDN1aP8x1rDVMdK13wBNGAZorJ9rSR4aw4gN5nY",
  "key21": "2SanCfHM7CMYgEAuTpvrKmFqHsc4jhKhzUiegjTPzFiWFn6H8oMuZ8k9Tj6YSzHXzmvQbGsbXpcThBVh5PhG83Tk",
  "key22": "2YZiKm5Yahv4Vo5JUnkaVpiT5yExWdjbBdKzqvruedBZy3GiLkwogMvPwPF6wM1Rgt7KbmorpxVio4HNFrpMdYw6",
  "key23": "8GtsW4o82BpWrHW7DqQXrnKd84agdjsVNJPSRPayb3wxRZPz9keMNS9JnvFWYhpMjwwQL6HpQ1KnkVJ56juzTiY",
  "key24": "3YNkQruPvbULo2NQWNwZ8TAcXiuBs9SB7hPLcHk1fefRLF11if114GFgNev6LMbc6znkRVDjcy9UGfFkh9WZmSVx",
  "key25": "5Rwsg55uxoHn3TjK1tTFMGh66rAeoiXuRZ2ZALsx5tFTARSNdiL1QjYY4eszE2waNrbFBQ4VLjCMac66TD6A5z2n",
  "key26": "3QBsQVeka88PdXPCXC2NpcgoPjVKRciUxSww5pGRFmTRBFUpGL4k7PZxrKRJVAsUYkUzBrPQe7Gs1RCXrrULqLHS",
  "key27": "2yX8gZmjWD6HjyfUGusdTvbdcnBgukPvsVmXDxeEnnRcFJkEqSqnbphzPz6w7BdkmLzW7vyXVA46et4YbYjgHpbS",
  "key28": "6RwPDCmcUHn9puaTsLX1dBj2Aoto9x9LMSuesWKJrVfzXSUVUCWnibwnA8hS3Uxrarp2mjkBX9ePZoFAsP7R1se",
  "key29": "4q2Xzdcw4EgB6KXHrXMYUorHQAiyE6zUFnbtRmrnWLnpMYFSmXtE8a4WiGNNKK6wiEd5wJrrLikXj3noRucXjkiM",
  "key30": "3xo9zZPhQxcN9WYpQtmi4Dj6w5Tna95JdrXckMPfNzos39twWjvoaUPhvGZgGeApPx9kdQoSE6S9rZrjEDHkwDK1",
  "key31": "5krJQyquJ3nrN4wRBPZGH3QDVhu8rXm4WSGSyNUZKMnUSSk1PcpsVo74e6ZShbxpisPUk3X5tbjHWg5BNzNhXrsu",
  "key32": "3tnzT93uaqyUYEWYhtXPAEUtXMz5Be4AWdXjBK4zTJy1rjmknDquo6FXU5KLDevUMZstckvQ5T7Z6qRXB3iomAtw",
  "key33": "5H3UCsv1pPNY1Kinys8vvpBYcKSGJSkRu1Mbty5c55XMkjaousjBSf1TY6hTKhqQGMbBCtTMRUnmXQTojFi1iF5k",
  "key34": "2y8kCXqFefLTeCGshaja4diNuA8CNunLWptyk2gAY97XvVDJxFdMjF47qTbJfzfgzKBzFPC2KDmpA4tuEb57SU7i",
  "key35": "55GoMZkk7Bnze3d8MUSg2iMtBvyScyqkHjBs8HnRAfjA5bxaZqaCpnQxfgiqq6eLgsAEpChpxLpfP9etRU8da8iq",
  "key36": "5emtrgGfQ3cYSC3cMs8Beh9zHdTAgdiKXUHYcGmTrhuh5kKFCbqWpZoKMeStKqcBkFUuedPV73PQaqUSi9kt8keM",
  "key37": "C1WU7Uki9HpC4M1nfcxVJ7oYZrDY7qHM2pHiHgxZx2dXCjQEQViwaZnyA3UNokR5t2MKQTjtsDBwk9m7dcRvdSs",
  "key38": "3aDRxREEmzcut9dDsx1RHJ8YR4WwQSeaQHf8fMYM3PJ3otLQ8SGo6xy4xpbGWzy91GC8TJXm298bKywacK8n8Jou",
  "key39": "5us38qUYZvYKnS3RnR8oGp4zBcv5REGEmysMR3AqqpUTXELMb3wbqqK9C7aroc4o4VpBNJWcUvLWuuruZbs1FJ71",
  "key40": "2zyMcaL2Tk8XGXKhWhSAzJjfUCw6t1rN1KvPUZtJx1aJG9E2Z17nJZyQtCybXaQDPRS4PFP6ACh7SAA5sUkmw9zm",
  "key41": "4iXhpV5JhDSFihRf6zwF1n3JuJrnXzXvNE8wBZvXJWbqJWLXH6okHJ3HShSuGBovaKdrJzk69tsHV8c7trauQnBY",
  "key42": "2cVe6qFfAuf5QM5w2QEjNcV4DYpiA3kBTqgBkCXYzGUL1QKTmPP7WPx9FKcR4fF7cQ7Uenu6n394Cci4uoHuFiFs",
  "key43": "2mrkSSKnAfUTNAQ7M34syoE9izDVJBUnBV1RRuwsRVaCZYa57xDJsdS6TkqMed2Tknn67JvENPrPYm7gRvfxHzx1"
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
