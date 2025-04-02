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
    "2v8ybE9ytbbr6iKnjNjBs2PHqXQJLz32rXNaLsYxGdkhY2EckaW2KgeCvjMyEkAt9fzXv4LS7YRNFE9d4K5q7kc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMpAGc8M7MpU5ocQyYqUA9TWvTHRStDdZB5ZdDbgvXFL9FiuyUs4JfH85c8rXMCb3yC6WtTzy2x13JB3abJgGX4",
  "key1": "2XMG7EWfKzttqbAU1PCmyqBRGZFvcTAECT1sCtnV6AECZRWdwcfYKhrwVeXvNjwzaN9KQBrw4HiU4bPHkEmUgaCo",
  "key2": "2YcjmJ16eh6tjwtK7FuoUUcvYU8pyjmk6PYq3ocCyqNZ2bPe8c8aW6VyZbHtgHcKzX8VTMNgTayPxL91JdSJHPTQ",
  "key3": "4ME48PjJjFFXEKyTEzTg4bzvJprbD7Rk8sMPKRQTLKBiJukRmimLLrNmQ4ZBCjvQcjdS3auJArAevinuA7rTq568",
  "key4": "37sA3wZVVQZ6SRdZNRr6C2X6WiuN1CcMks5CpRpJwZ9ny8s7WjfAnxewdUjoeZzLStxdATQWvAf8wMJzVq5w44Ua",
  "key5": "3f8CckLkfMFVvZZzv7sFCSE5NyLumZ5sHtWUXCLCbU7EB9SB7SsuW111RTxpYrnmAT2cE5VXq5V7NwdNZhok6S9G",
  "key6": "3ixTkrTqr5nnwBUn3W4QY2AEDzAGE8Ecsu9aGskHeWugTSPTj6awYqnP5Y46AQ4EF1tm1oA6eeU62US5hj6XCMAG",
  "key7": "j6pWjSHSzAX45tHFeWr9mfsAkTr4xGKGAzoSBZ7Y783x3hSsCEHuwwMxQTYR7uGTziNd3G5WaySjQmw1LwA7Fom",
  "key8": "DiEZnup8cAnMuRaK2PvUQmNReZ8AwiRw3tVujfdMR8CqshLrTfT6Ur5WiixB7d6CwjSiGTMcp3xeFBUaJgv4NDk",
  "key9": "4s2sUpt8quA7np7TKDfotPWKwBc9hEpD9XkUX6A9W2dHSpFNwkMfknT73AnPtPsGxg7S79gFv86azXyPSKJsaqcA",
  "key10": "2am3XE4QqXzYGNP6DF3JCSPU7uU2ByGw2381QoCpSCiGne4XkD7HRaAWLzecPKqCRW2VjFPzG5Kt2wyk4dLRHCLj",
  "key11": "49bPx3AAcFCe5nANdJsBy2nyAzw9SCgecjYFi7t2ipEosd246qBwXer7qqnPmME8GkF3yEAL7dXPxw6cGt93N1AQ",
  "key12": "5LV7bJUHdwxtk53L5zAnGyFLNhgZ43xAHSAuXpA8UMENgnox1w3bJJm2MDLzTX5sYrBzDvbu2ApHWr7Roqs7pmK1",
  "key13": "3ypCfCgP2SB2taqwyv1mZwcVwT7b7NxvFJ2Mm931Fa7baQn6tTXQrPnGn2arZHQNmJkz8XT9c5sVghSRpsrBxHtC",
  "key14": "5FUBrGAGbRiqB1Zaq3gZ4wh2MG6Qjy4bVyGQSUTzyHUfvwZBTtmt5UCy2dk9tgQeN7xapj7VF4e86Kb2Cvq6Zuug",
  "key15": "5V4fEQnHG82c4NA4kMgbEodCpXsftUi688BKUM4M84bE2Ny5yvozwh8CLdeoF7Fzjf87Quw5cp5kCN9pZSEhAep7",
  "key16": "5tjQEa37AC67qoUsV6H7jjHkmbvjFgjLmDWAmQ1r4nofjnbwZPMb7yt2k7reMcA4pssRCJi1pzSkq1jDtVBHokGz",
  "key17": "4ZyV55tGjCxULUuZgpDhhWnduystQwN6v7ZuZZZiBKA2FNvQWgE1Na97QHEQzhCpx43FkpZBcTmehNdoeW5rqcCD",
  "key18": "3a8ohwKBgRdgQnSkNjPdoxV8wgLjDPUQ5P8vwTx2nco5pkCR5G63Czn2qvNDLteLhgVYfMErK4YztueG2VAWULaJ",
  "key19": "3hKbE8GykKSw973udbURpJvpQ7WneNEU7ZC1wh8NPEQ3pUHYxQ3VaYVXNoRNEttRjyJHGwgnHDG8Dhb3bE2HxNcJ",
  "key20": "48UAhzJM75uEAhUVGDwGu89Qrx4ubdAPmRhHZ3gV2mVeNqcLdNASzVZB74X9J7y7aqVkMGHzzT4VmRfPA9mCiBEt",
  "key21": "Hu4PVMc66CvpNrFMbc7qCLp2HtERYUdJPNWpAvfibBcLa8MAkEtsd35LajbcMisSMpD3V16xd3HgFh92cLw3qhX",
  "key22": "2bT9Yzimzz8a557UYp2sfDz9BTqHwJzsiiVHv2V1K9fzvQvRB6iBPLE35DDK1rmpKUoeLdGWhGYGAW76Wyh2it18",
  "key23": "2TFp5JJxzSw32pWT8q8HnVQShqFFE3V2nXtuHvLbKsEk4Wig6HxN48qMVofM6YQmyeahqU3ukvuk94CxfvSayFmo",
  "key24": "53UdK9fiAGzDhPudiyqgdVahPpxW6pQhaUKVYFRe1rBFz32hkht5jHgoMGV69J8WxBoMYj2zyzrTvYBdw4NV8tLf",
  "key25": "5FnrdtbggBxZuYTv1xSnggMacxJZs7JjDVytE7pXtyoC7HwNJ7AFPeedM9oLqyCHz8yzCrt9nJgJTDWvXF73CMBA",
  "key26": "4bxCs39CPoyzRQTdhoU4bc81zUBmeM6k9mwQw6ZT5zQGrAmTxsaKv55JyrJKSsiXQGCWhYdz4nrqnC85w7y1rjAQ",
  "key27": "8rivDBHvj7fnMCYhykZTL82GsMCc9Q5SjVupZ6wKwVHEmkHdMYeJGNym4jvzbFE7c5JDDhMtgHRce5MK9HWFV8U",
  "key28": "3mXTwLmSzzBTzLe1e8UopkhMiRwaN92av8zt4hDt452xB5zGbCUkimpbdVpHjT9QjHJEDfJ5SLZa21Wo8esUa2BD",
  "key29": "3zxuJFaN6i6BEhebePsF8SeyZVpfFyTphh2z1QfZj5TQazzWnE84ijehUHXwDk8grhr1Puvvk7Z8HuE2VYFqipML",
  "key30": "3dRu3jeggNBEVNJu6RBQMKG55RhhAh13fAMU4XPBsdR7vrguazDSm7G4GkSvnNx2YeMe4A9BPvBtMb7H488Mv3jU",
  "key31": "4HxRcMxaCkHSnDPhkshWhMwxwbQRUihXGycgUyNwT7jW4HttpSP3giLW7eADNGUoPkETwYYiM5R7jqhDQW3fyCtH",
  "key32": "B8zsuZnh15jF13K1Jbbqnhww5xjJgU7rqWRF4W8mPjFRU8H5AZ539BRn4fKqNkELNDZKpK4ogKyN5DWjM4JToPt",
  "key33": "4HX7nAzYS9Xs7EkuhmXroWFzyk8FHB4UJion4BbSQXjSDUDz2YyZmmQmFec34CYKfdXViZCBJc8ziGVe4YNQ9VwT",
  "key34": "5BZAw5BSpzTieNjcpGQfFLLrp7o4ptDTpoHATwZEBE4jUuSq7YrmbnKWBiLXu2Tf6aUXVqY4A9uFL1CKB8fxywrt",
  "key35": "2xAe978CYfXCC5JM6L66PNui4ADCdYRV4fsRDELnZAD9MCnWpBGsCxfz7Gjw242SrNKibNMjWWGFkiLMzYuApZr",
  "key36": "2NN3MTtec6npYe3g5mfM8qzs3iaiRSTDNoRfrjZMmjc49X5fKFCHjk1wzbiB46ZAXw11rPDXKAUFmjDt7EvJzQs3",
  "key37": "5HgKVK3UjsxtNSTUV9xYanSqkyegxAaoQSk3N3bBLfZTeARLziN7PHaDwpFrB2EYqbo7yoAXpvivf2kNEZwYbhTy",
  "key38": "CaoGgxm27SAB6MmipeMZtsgR6owZDDeTn8QWjRDQtH44q5P4sVaVMYJqoPQuEDodxoT5cftgABc4VfpecSywSib"
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
