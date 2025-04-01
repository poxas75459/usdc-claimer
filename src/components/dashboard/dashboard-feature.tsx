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
    "57GBY6XDv8iNnmngY7vRBtPD9a1e8sF6MH72HHAT2zS1VMm93UJ5VuGLGc3Yu9tKvsFKd3dRBhAR2UnTCEhatYz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWk53g9KB2WLJHroVVtkk822G6yZBiqdBSK8aA7ge9yMgeBPM7URXjQGRwwBgBddjnZxeZLXWwHf7Th9pm7x5MC",
  "key1": "4e2vas5hojbXudL3GWygogmbsjZxvYUFF2kwvApq2ciDnVFaZse5rBiCNSW2ueiBqZEBR4DXgnbWKFbWrLFRRxc7",
  "key2": "X89Go8tJ11i93fT1VZbj31TzfBSTXBRyjqGb678kRS5KbC5mKu4UCXUak6rEfc9moqDjRfDADTL26KbUAppCP1J",
  "key3": "56HaKaSFz38bRtEKJs8YGaRJ2QNQKZnUsoaLcNxanztPVC2ewtE9BAR9L68VSDtNzNhmdfaFqxY1cEhkZEEomrQe",
  "key4": "2yqSZ2LBzagkbtSfBUAc5RzrKjBxwcgQ95tFLxeHqdKS382ZauWcSHmoeCB9yPnJ6dt1pnNDNe54cibo6Sr4QGyV",
  "key5": "HGzjhqXoM21PjKrh4H2Y3qB25GUfCe7FhLSUGc9FwUojHhzFPGN5BbVrWR1YLKaiS8M9puASnMtuQFr6PJvEKtU",
  "key6": "KkxeBm64egMhZFQYTRgj4tp4WZc8KVQBPvJQy9m4FQmJ8dwLPSM4EBZYzh46QmRVPBEYitD3Nz6ZJgkevson8tS",
  "key7": "5hTN3ukdDTPi9M7aAfhLveznMVokE2pTAnPUwBvjuUGsVX1dNH6V9oYMKu3PMbciHUqcPBQGyJBQDAQcJePJfuwx",
  "key8": "4yXoEc2piEVFdQJFeqEWowr4euqruREiRrAqjdkimiYeZffzgPsKpd2xacg7LTQPkNXXC8DHooMUU4bE1jXunqg2",
  "key9": "3S1MauTEW39riWidPG5Lfjq9Pesizg5zYMvcErjv37C93MZ6yZAZoJpeNGPKxerxhU5SZbXZZNZx2ZqkFAKGNkhf",
  "key10": "8xSDQDWXCRh3BMarfDLYnBaXuAcUdYPkid4tbGHvQBx7e6hE6pkuGkRCqGtVrhEnjguxKj2chaYBdCBFeb5CARK",
  "key11": "3jB2mLmvNrc6E2DjDkYbRN3j5cfhn4XcPDFvMUo1J64xHP6W3xVhyXLsKm9eCKBifPamRHSsuUX3pYS6jB9sMmQt",
  "key12": "o8PqVDfFFmBPYu991cNaQ1nG4zppKuhcu3buAjeW23LWm9r8FDAp12AKPPLjesr2cMQYM1xFsQLUSmbkWfzdKna",
  "key13": "3tnAGsTrLwwgwFyWTNkqLobYawuATtbhdmVVsemSxJPsJs8ofNGbh5wxXHToDp1GKP6sm1p7dHfkU2depfQFxMBs",
  "key14": "4YjwMHYUuc8ZM95tCPj7xUMzKJa2WgHpPQr6b2wGvThzepF8kfqEASFug2eMJpMVXNTEcjCx8HQHEWzvRFpVSs8d",
  "key15": "3zNjZh8mhV7oD6GccXZiGzc3BLL3qWCLiLudMbqjHkHnNGXLxc4xhu4B1smdTCJJuY7QigJSUhn9tn9bKNDp3mjf",
  "key16": "oD6SkyPNP9xYgf9hrQjswsTY6qNJHyCoeDsRKvLxEohr2ywvbAxhxgMQpK9WEEWeNsnEw7pd9dd6VqDx8WhBEwC",
  "key17": "2Kx3DHzrB1uSVyDQRvfzQXCzdvxPd2MG5o43dCXuTWJKdnya4JMQiYo6VUAnwtJ6PZR5yyo2ZHP3x1mVTpKcqUQA",
  "key18": "284u2gsQXASUpL7raT9hAbk1PLkJFjJwofJrb4zV9HynLqmiuq359okMKsRdwLyKUBrj7HaxHw37MqjXx4AVfWrY",
  "key19": "4J3NwsBxQKbeXTtuYxUsMUSbjGd1sMWQKPNHXwRW3H8je9f3Hcn56rn2Z91A2cKcvg32kTKed9bab5VTGk7erZao",
  "key20": "oem6a5J79MqiqvaPmG1nrXXcaboYMTgZsQCCe3d9ah2sE1VnbM5LepytUdUbkQkRF3fP25223GB7eroCzBgtctc",
  "key21": "2BycRf8M2n8aJbRAgUKj9AZuKeiJJhHhwidiQiV6rHU2tqTHMvZycvpFQLCjN93CVrX7eGU8ufBKWTEeefPb6vpk",
  "key22": "5TRwXMpPete49A9Zg8zRtirituwZrLEDSNK1UHFq5fvqetCd8ihC4MSmfvRTYkeEbzK74uaE9xTS2GDH3nCf4XKA",
  "key23": "5AFtSYAqypi4AFvh5hZE7XhJ7SGy5M663k5Kd7QZbHq5yTqsZzUJsmddy8bMXDwLZGPPwsiqD5TugsERWWMkbRD5",
  "key24": "5kFrUEF1TbreyUaafiNybdRf1bt1uge8kn5BL27CDe5goFkk5KkMiQSFbxACrnK1htYfkcuWj5sBTmWiRSo3naAH",
  "key25": "3hxnVptR3bGc5wmvw8TFubK6eYjqLnBcWJz1HfsDPFZLQwo96gwfXdJWweLtmDCzBjrtQhkyZURV6zCpk112Agp6",
  "key26": "4EoJLL8VMfwcJYU5YmJ54LmW7E5LBkBoJjuDvGTJhTEJSUgm3WLi6VSY6BGUmJ5Kyt57hNR3avN527yn9LS33Amp",
  "key27": "59X7rgBYpYkmPrFxw6cY1jGLhNFdxHzV4YCwzAa9KZQhCHZRESkFQMnowUgbLw2PZ8SZwRCJFaPYmKsN9cPsTEaS",
  "key28": "36c8YN1M1SBfAkEjjA88bi34kRPvyktHPQgP3EZ2m1UKS9Bjqt35eLXqW89rsAAjP4hDcwHLjRAUZxm3q5Zc949i",
  "key29": "4HBWdQFomf6ejnuNdQ559AXrCDipWVjJwvA2JexZeuRPmcwv8XXQ5iUnkKDUmBsKKHoM3NocJqUytgWUqoe94MFR",
  "key30": "os5QaCc4vCY7K39FSinDAwZxS6ZqAMTkXUXM1Z3LGbab8GWt3r2Hobrrh9p7zz7beqmRasDswRboqeiHo1uXCpk",
  "key31": "5q4GpXZq61DnuvxzVTmsYYdbQCubDKDUTUSfQtv2Rh7QjMQ1MPuPt7X1WJy1HLgcGAXCuJhg3PjZNkmiyYc9ogvb",
  "key32": "43Squc3K6w861ZrMPC4ZjYPnuPKQVc13cYomcrjJAkctDsz4s37PN4i3NWx62r7JDMTQe8HVzbwg1nUereMjiCtn",
  "key33": "3Lfq7AxxgCwrGMx6pZU6iyBnuor3Sqbd9fSntur78uLpr7AzfiiYSp4QR8kik4uiKSd5e1HdrgkX8eqrWaBv2iMc",
  "key34": "bW7pmrMSA7Rd2NNPSkWr6KysfB8LUNjpheLdjQ5XHdJ7MTRQQQvGAiw8fD8kRmhzba3sSJoCqEFRNxCBmupZXQi",
  "key35": "1L3SCTg5PQhAcFEUCrJ7MTSpb4rWcFRZAj63gcFGoj9zBaU3sysRTCV1Ay22hH2TsGHL87V1Ak8oUSQq6S3sNyr",
  "key36": "3MfJp7R6tdtAMskskkSH83YbShytxwvQrQaYXMw8XoxkGyzxJo6ZdThTPHcbm7eyZYan4sSDcax2Ku7GeSrQmeeP",
  "key37": "2ztJi28HRgFVKnwmEKQze3GAh3HREkzRSdgMvzqgv36AqD9q9zCZDdbeTgMqe8xMNATo2bQ2byvuzZ4iyrM3B67M"
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
