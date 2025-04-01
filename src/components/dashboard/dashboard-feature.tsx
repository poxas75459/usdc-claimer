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
    "5myFH4qmxvkU4T8gSDGfa56uXFsJmhipKxRf7MmBDBFiMiaBGfUHdzYuA13a6vm42LW3YGBNSpC4UUp5hDFZQ6MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaekQMSsPrKte3syK2zqmB2wj2K985kUztZ7XtP9qCppdQvPctNFN7ppKsWDFUU11BoNpqGiunCSyq5L6C3dv42",
  "key1": "65uvafyfP3w3J3GR2AnPaV2xVdTBpTQnhD9XXesuxhDzYpun6PBbEiNE8zBjXnXXqoCkTVMmpSbETYb1gY2mEGXq",
  "key2": "3mqFpT4grxvPhG8L7EgdHdtyNgyQq8PHEpnL2uAWD813vRjpzrHDCLWDsT121a5n3LaE9jwJ9ZUHxPFmyEJ5chae",
  "key3": "5nVB13mLJtoosrJayfAsnArcBF4MJPXq2FWgbq4E79Phfr4gBEJTLPXnpm66SGUz852ChZprrb6KiVa2bvYvdm3L",
  "key4": "3WUR8KX7mycx2U8EkLTEFHRWttYe8izg6vLfbEtTN5P3752xqrx966gxKC8GwS69RR13Dg2fkqzqrNb33qA1nVs2",
  "key5": "3AnEgifkKHcfTBe48tPXmimZYNhZCpTEr8JtDbwp2uqZStvzArBQq54ebZukaAVoyMk9c3q7Lwp7H8arhCkoVXUM",
  "key6": "TJ3qifF3L5fKYek7UAe6iYG4mT3FNYfQtY26JnHGZe2V4Bv9DfcHasYChcUc3BSS7Lwa9wnEHrgBAhKnLmUywVw",
  "key7": "SDraMUWQDZpb8KxbomNh8URZHQEaCYnntCH2QWaqftaGGuehLb1hxaazUAY7ZU8WsRac6y5Raz73a1kwySQVHEE",
  "key8": "HYjdzTfieqkHi7ofeScG3ymhX3pt1ncVkSrxd6gmQsu63ffbUJ5aSeWYhsuMdSsLz2tyfENwc7GtD5eLMQ6woB7",
  "key9": "5rKrqxSeVJFiS1rMi3dyPmm8A4b68Wq9yRh15SwjSUEgEpmocJswf2fFWEf7sMeFjx2iccqnrNzHZNA5a7XPmqR2",
  "key10": "3oFSSqJ6kZAWFCvRhCskYSm8piDyHARayXcMXMKqMQW7SGjzrwuAohvGrFMibQmTsnR9MooCZp5ZJLrmkxqd4vQv",
  "key11": "efhVL7vvTaPaXJjeqPzGjiasrYB4uE5EXCj1Q9mgftnYKNBXMBo75iCmwR7g7SRF7iTkNG17Hby2DKQ1CwmHFVi",
  "key12": "cttPMqEDAJc1cMNRifs9sz835QXZKWGyFbuJCLRU9Vja21CDx7m17suWypodUivpMB5hPwsTDtMggvHBuPVDUNB",
  "key13": "3ENSeZD1gdvmDq6necZPiobh9N59jYPhqRauwnb19CMcimPhfr6TGG5j9H4qayiK6zsoeZ2vXncorjfv1c7fn6BK",
  "key14": "2tzZ9URUdW2dj8Fa8mcksCE1umeoEua3bhQQs7qzDxve3gQ1mW27oP7NB4DiD7oJS5wy2q8GF4iNDmqf6KcUWEnf",
  "key15": "XwACZxWAmCPFjJQb3LJ6ujsXS3CmhsBWRGEmtBHGjndE7pVZWk3AT8bdFn7JXbc5tdhdSGCacgLf7CH7LRMz1qD",
  "key16": "3obHSVKKoFu5nqrUtUHDrBQyFNZUiUaKWuP15rFiVVUdZjhGWbKT74Nuj5Bd6sAYC4kV7SDrNdDWAV7nGq248Jr4",
  "key17": "5NfQG7SxZPet1o8niqxYje9tDiaacxwWfg1r12ds8Pg7PZydhW1s5LVUAA51NCvXgPwGMk19Y7XC7R54rPuHB6A5",
  "key18": "wom86tGohmMvdWWbyewzqdXATXs8B2roPM4BXfmP1S32YfrEbPF2DdteCHNZ9eG4cjEzRWdL9ik8rWATRLnVT78",
  "key19": "46fcyCu1L9UXc8SZTmGcrAjPrDcpQBvjabUnLFcNGNmGYRX6zX2Py6cDUYUdn3Gqb8MLKGku33cXTsApSbDLScG1",
  "key20": "5xReqQZd8jrAe2um9pytyYVveyAVCNgeksXWLfrfCzAXhtmsoUPE37RqTkZi6N7HfwLGFrrwgi1Q9wqGYXECxnbR",
  "key21": "2gWKTQH18EUPDpXF78fA6fie8pSL41srAYoQ2cMxtCPWWJGC6ujhXnhaiCNEsJJ6mgY4teAV41pMPkfNcaKGhi5J",
  "key22": "45PnToTZdC1CrBh3gn7LMuEKJSBrKm3AExVRhzy3QwGbTFzARvt2j95hoWaBZDrc6GRBXmsyXjp4rYaWdaMKsJgU",
  "key23": "65eFxd7T3PmoRWr5qnKboWnp5QXbMT834bjgQXGgSiQD5EYSXAdewWC2ZzJ9ydfDZ2Cg9EUHqxoj37uUakYN3xHk",
  "key24": "4njQUT31y5ZkvJ2qQxyAZFVYoasN4xKuEtkgoLQ7TxVJ35duNKFzLXriGcQTDdHg4EA9JABNMrfZg6YjRj5DdwAC",
  "key25": "4Y6RxZ9aENc81wyshu3Wf6BnrWp8KwMKMDydRpmJweQxPwu2DpAxfjtBApREBt7h3veVEtoHjH9PLcw6p1YzfLEn",
  "key26": "2NFq8DYLeSbAWQDazWhgAGaEXX1GJ6HewitM1kqPaPMoEZvbNNyDGjCgXi5Px3FCfJTs1Zdthkx9gcXg3Jvpi9SC",
  "key27": "3eZBRmqQ6wS2jiZsznDekaHf4DDF4i4zL4Q4VMioWp9FrVsJQUvBsJtf5rPyoaUvRNpWwCTvNKUhkUGz36NqaDYr",
  "key28": "47SoXwxWQXK4Wq4ZBGzExxN8xCyX9PG2fir5zuy2aFWQWmrhT2oK1cEg3sZwyb89uYfBNt4HDX8JcyvYaDbmTbtU",
  "key29": "4n2dutK4UQFZSr2tZRG45mm9AQfMu9PXb847MfcR1hFUq4bsKTjESujBWXUYCGcBtsAWDacc2sHrsy1rCDJxzYgq",
  "key30": "3jG6FCzqcUmfxnn4N4yfwiEhWDUWQdEwJa6A5LYMfyqP9dsW5XJ34a5F6AjZm52tPk2jWWfFiFYzfA8Ezuaf6my7",
  "key31": "hV8vjZMuhHsrjan4T929cU1JFuSmtrSdrzNfF8rL64V1ta2quJkY9stsp4RDzjgWq2nUBuC12gabR2BDuxbaSSH",
  "key32": "4eP6dwdD74C1FLUJhHcWBo5TatgkAv6pZBSmW7Yef7SCTb2da9puZ1a4mFUK4dCbUHmF3t2w9mFfqqtUvvkiETkp"
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
