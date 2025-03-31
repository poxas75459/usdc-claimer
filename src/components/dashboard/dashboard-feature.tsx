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
    "3GuwUZU1XsFwAaYSr4yEAV26oVnertDm4YLhwvTBmyWNEk3DN9sVN1HMmCMSFZXg47YUnMgpyhYA6jDzsL4EAsAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvWxvzwykHPmdFD8RQHHRNSCxoxUE9gbrRBeP1xcfepnqVZPTZJTyMkNe8PjcX1KZjia5uq4a5XPkqHK7SqMF8E",
  "key1": "Q6oeh1pdcLfpseYieb6w5djoYKNQweA4nK4dV82h7NaFo9BMHA82inqV286d2JKwpwciuMjDgeCCVpPTSu2uQc3",
  "key2": "4eEdd9WK7o9UDMENeUdRXCG1ko7tSYe4ic8EDnHAyQUu56JTHStpu3XfHhAaw5V96mqKmdvawLQ24AKAcjFUJnAx",
  "key3": "2WqkDLjCt7eXJvs6xfDSahYVfypEyEWxuJtFwkykePC1er7zNuC5Ef4FWkwUtyWQRNzhVHxPAwXzYC6GaEDoUP9K",
  "key4": "2D74R2m4L2xxxQJe7kRsWbvGaWDGsY5tSXmGQSyxZwUQduxVBm4ffHcPtAC9DBMmvbmF1boe297SxcHX2eM5A89L",
  "key5": "2Mby2XDDyWNPhvGGnyboyhBqAs97zGzE8cJHTin9Dc9AvE5WEPAQQsveW8noDRfpMwnafopYKi4Jw5qUiM4eVZN3",
  "key6": "4hAr6gFdwnysP8WNSrufdp3n1W5VRzNpqFEu92JiNnaATvhueHUgFC44EPNQBhu3Y61MDeqX2N6NbMYn4U3u3PyQ",
  "key7": "2bKu3Ui6ForD7d7rLjFEGHSs7fFboYXsPz2pE5nxh45N2dhxDk9ZC84qsdaucDsBkF4K2iasEiTFjpgEgTEiiyPw",
  "key8": "3cBaQJv6wc6M1v9xYVH1nQ4iXBihDJ5To5Fr3tJ22jribkbojiQDKeKsbyvPUCteUuYrxrNuo78qkXBh66Y8YSzS",
  "key9": "5MPHpfmBn3sDtQxo4oGncyCft7XBzNvfD2eX3mZ7tbqueJWELVtPRYRCMLmE5X1ZJWCFhQq8BgvFMSx5aq1XKrEU",
  "key10": "GPTwpEGER88SyhmNJ2gsbtMNLp433DEJUN8SqMyLmDJuvryZzTVG51GUFKUnAAEE1VS24gAirTWFpzXkB7mRQ4V",
  "key11": "5oiByGZPk72gkXs1UCxcR6QmkKbo4a1bYCxwzBegTcLWKEpXZHA3LpUg3AGCn3FVp2nmH6vADApfTdEPKVybxCPB",
  "key12": "3EsHUQ3jSzSGuqj1Q5NNxS4mvuKtN3syvA3BRCB5xL9Ug6aaLmb561WSgeJLisZYqwGXZkhEbLeJaLtks88FFax8",
  "key13": "2WhHzWYQnLMWY1mE5aHYZVTDymYLaQU2symVFuv815HaeQi9HKUroYymfUKH3MWXT4wUrSH6JLZ3UPf79apQLKKZ",
  "key14": "4Dj183DSi48JTR96un7gJku6UgNegvxEnKDCobYyuqQ5J4RNNCujv8NidjHkqbJJqW5J9o6iuB3G1g7iLffDfFB9",
  "key15": "3oRNtTtQvuDTzrGGBTDBjmpVDEpDb4SLuLzsdvYrHktfgKm3pSxU8vPrZgRUjvL5rT3MhtSN38xFkvTnuR861NtG",
  "key16": "2rH9YMS4hXfSaxPz9MW2vEfdSgfp9zzqVLPCFbTg12GE3yccpKZ1ddErZAqrs3oTdBzwo8aj3rKWTXXYnA82U4F5",
  "key17": "5wNznKiiu1EVMucx92EsGHsnvWvJmS3p4ZBoGbAJSigAV3K96wCFvaTrGdKUxjXiVTj7PJwkwEaEBSFBgn1Mn5ox",
  "key18": "5QKnWn5A6dRhHq8k1ooM8QSW9o4XexDKASLyyzmrdhoZ6gW2jtF9PQgFFqAWrSFWRKaKH8d5jCz6VndFSSP6HhbH",
  "key19": "276LRWehJ6Bczg1c8ZTx6k73bRM3BdnU9QXYRqwcV3Mv1w9YDcZBUNqpEtevkWQHtiLtXkzadgC8eL8pJ2xjozK7",
  "key20": "4M5SexRCCdYFTbBUFXLStsU7iJGzFED2PtpGae6yCbTrJUDywxXcyKgLQ7Ggjb8q2obBJ8CfV6pdgqiKjUABsR92",
  "key21": "xGnJAeXk88y7mN2Z3TCA61nqBehXazWBwAhayk3HHdMnEEztXGXCpqsjMk5DSeWe2C13bXozufKnjWcD9Viaz8M",
  "key22": "2sLu75BL35wSg6BtFjpb1U2iZPQToXB6UZs4UJNb1r3R4brZonMTuKgTChkrTp8zkHRhNnbwkb362ckEuzkck2wS",
  "key23": "5KwJsvaTGxZ8sASFWap2UA4xLGFpjt4ZzjbAjEEx3rXpBzm621R5ovMDAcZnBhfEm3qvza8EHVtBx8qE4JNYbo5k",
  "key24": "269fQoe2b1fcmFopBWMo1XgBE2H4hKD3D9Cak562HpsHwHB8DDxqgESzNcXAwb1ZJZFxLauTNbhDnY4Rt1amjJyk",
  "key25": "5NP8gj99C1jXkdUTwMHAwP5hpxUM2SYEbUogkSb1rHwMio1KZRBU1z6aGDcJFbZwTyJrLr7Au5fvfrKSAYbmrAGJ",
  "key26": "5LZ1aLPvoEVfAx7yFJGKQfFnaSz7iA9hHAct7rcnYjtb5HQu9TqMES16G83yeQqtJcdv94FrsfqFQZu3ZLBVWY6d",
  "key27": "2cimaEfEydW9wryfBMdcKG9Huan6XUoNuXdVdKTPF9M73jp1KHkiQHPjjrVmMbuRAgtpaXstVRwH4VNUfgkHM1Gm",
  "key28": "1ztU8Tn6nePJW7yVgLmjqj7gSjMTMe298ziHEUp6p62jaLrs4G6Mnr2bQ7wPzYzvzXaG2cRpoW1V6rbv32wBZk",
  "key29": "3GACE2BibibFuXFqsThtLfgopWfC4KPe3hCP5vqofap8b2GiAMSTYukpJd9goEePUPAW17K6EmtU2woTbktCuoAG",
  "key30": "UfmnocgoWZYvhr7CRjrN4g4AJhapaD7tJhxsxmPvdeJ2qvEEd4VXjT6FyHRqjJrdtMFFrNtbMcav26cMhKnKyy5",
  "key31": "3nnokXSS6e7fhz6JgCVKthiLtXrXrG2QvipXRUfTzz42C653A5SijtYmAZtN5qqEzEHHf88Y783QyM6bXZrwfqPq",
  "key32": "5DdmPXx3VypgMDn5yrUcGZx8Whki31CkVvwCL81heY5c8SyQbTYiDCPe8fQQscraKL15P3ujyZNee2DS14it9GxY",
  "key33": "65Kx5Eh643BQA1sHUEfqjkYRk1xfqoaNmK8s1ysLNCWDdmHWivz6aiJ8J9Z9uo6PoWdQkLsHjkoQD5cSUXzrvJHD"
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
