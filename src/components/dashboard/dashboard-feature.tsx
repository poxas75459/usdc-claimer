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
    "3G5EN9G36MRdiGhBdATcxQHr9owDQvDAdiegouhFWU62fynw5E6A2NcwgWGy42eJbLY9vV1vfrfGniNqwy7q9dY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTmRVyyh99dF4JqxXkY28R2QsWProAr1BDUCHm39PdPe4qhZ3V4cpGSYMhEYYqQbfQ5wrkhnkAyp4pWNxfQVdHy",
  "key1": "5DGwQAb9HHVz3EkSdDFrLBDDpWJmZpX9JyGegcx3wb4KUSb9nZKvjvn2SKiyAMSeCfeAsdPt2CHEFLoYYeFquFQh",
  "key2": "5CehsN25nJ77fCbCNon3bukN69bWQT1MELTeCtWvMcE3nfXpv4aJAGLnDk4NqEKJetG3Z1M4ztei9fw9wvD4nhaE",
  "key3": "4aZuvuwEMBnP3txdPRiypBhVtffqWrAJsQKPcKsr6E4UefnX7BLJcV97hwJhMf8r9ow39JApZuMZ8jaVg62d4txT",
  "key4": "3YuSKrW5ZFtnKByGTRKoPZp9949Hkz5pJ5M3NixaaJphGKhjUeocpQ7XjjFgtc2tqkHdhfZUeb3hhmcn15QkTRfh",
  "key5": "32mwYGD4jL6Xnemd8BT75X8NzvSGkQhv7RSsLD6bY4rpVZ17c7xhfrSYQLmajMGrvr7HTopwgLZZu9VZgsS8GQhv",
  "key6": "5sVvbtF4PmDXBevX7E7gsz99u9q9PV1mmQ9CRejiiQASzDYK7cPU96HYY3wvEBiTcv5z766BmBhzV8geYbaTmr1V",
  "key7": "4FyqVLeTyY3jtGqvWCm9D6HEGE52euFJaFBzjvXGqPwPHDzLGGEripNnSTonUZxE9kNHLWhoAa3YSEo6S8zePMaZ",
  "key8": "4bAuPnjWAMprM85y5jTEyQqEvKe7KELgGZ2c88eEHSZsoexoouby9M4Ht8RR6N13YFqNJKL1sTrDsZfh8J6ZdFN4",
  "key9": "3Se8gZBP8n6R9LcGSWETKisd84qkYjQZFo5k82AxR3XXSnpL4ATMxRff4tkFtHrPXzUkDkiCmuNnozHpQTXu6r6W",
  "key10": "imuGfLy1bBDeEFPtKRgddbT2ZrqstWmpAubZt5fftJouimXDAos8N1X8MaYUsCE5mg223qpJmU823xFRNy8dQTe",
  "key11": "36TgJhoaE5YugPkqVf7L6x7ZQBaB6cQwTn5fSGrrdATMmngpbawU7vETC6RoeqNjw5WSHopr6ybFQ4f8DxR7hUeA",
  "key12": "2SdjCtCPz9xL6zEdEZAo6NgmMFdgih2agxZj1uuzmNEAD1YJ3cTPoRKae3R1HNZq8fA31DpbgQotFxPVVkzFs9Lv",
  "key13": "4wZFC13qS5fTL2YsmwakDW7VoocjFW6DPinvTqbrujJetniFhj3v6tTPVxHfKWGJrMbWNRGwYwkirCsow7MVXdwo",
  "key14": "4rzV7iJHe5ukwvzx3xVpzW3cKTEgmJyXomfDp7ECZdnTvwdCtfAegsSodhAuuaiTWJuzHuGVRmXzHiuqva5nptmQ",
  "key15": "4DSu72c378QqwUchequwPmKnsik8hL8FDd6A6Ydm2hDqTWAU8SQFxUbCoXT9APhjGR7u5L2CuQM9gcNBjwPX4RfJ",
  "key16": "2BVbjmHAwC1PzfHV9yFC6xi86jiLgfeXmuKPsewWh7BkNP4stTFNDJrRPGW7fCaen7YxdSbQTN68Mf8ssAnoDjtJ",
  "key17": "3bozX87NfyMXeUuxUgutmEbMsFPR3S7dgNbBVBe6utb9NiQViiYEC3qAz8naWif34xvpQCC1cFREi8HMx5gWK5L9",
  "key18": "5VWPoVj6c3QcoxP34N5FEo3QwVNKGUz4pCXS6uE2hvLVpQCyktXZBrt6nPDjR4t55ZmdCwwHAfcpoaga3Yjf2eLw",
  "key19": "5coYdDSfF3XmbjQ5quqK6ydFFnCy5AR31d9KXbwyZHssvgTxchcW4MzSKHeRbPzYtAhK7xLdfUojQGqyssy8Y8qo",
  "key20": "2tWjoLQbT9zcLfSN3SztQtaGKNotdSsVfEJTFAhbjB4y16utUQGbtudixr1CQSvm8GSFiLT6VGmuj2HHqj98idpm",
  "key21": "2Vxy3AgXpXtpWNfitAZT4PG2iWAEzhv3shQPeAWNgcwpWdCFFHJ5tooxhMj5ykxYzFwbAUYABrje1uhDgEDZh2aY",
  "key22": "5q6K78g4sc49WFbs7r6HmK7EUoGxB6duF936uhfifFZBu6bC9sv2qwXnQy33baRFizuGqnhcfzXBvpNtBPicTdD6",
  "key23": "3uG84C9tHTyMaA8yJbvD4NGL1qRzVEqtEGcCz4oau7ewZYG2v2HAdjkyBdqz5qeAY5B1vWjCK8Sj5yjZT4eCoKhk",
  "key24": "2ULiixTs43sLoLXhGF5pcRTKV8bZK6NG3pP1NJH2ugGE81ZSQtgV1EM9ybA7uHgva9GAC6EDGPLRrk772DWuXndF",
  "key25": "3aWbTy9WzofCgFSEEcRN7vMH3vedRnjSJgHT9xowowt9MqYr7RtQib2j2AwidWtFcsVKhqZ3txvZc5omWiLwJu8j",
  "key26": "3kE9YZtyoBe3fCYa5YcbcKBZT12RZU3fYZvQeTEdaPkgsuite3eZW7skqMbZKpsVd6H4awZcoykrS79CWX3N3p3",
  "key27": "58uPHXdBTnfwrmaMtwqgMzWvwSe93sqn622QTtjV7RmsTZw89Ydx5qvSviEp6PZ4DpBTSpMr1a1f5TLA4MeNCTDo"
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
