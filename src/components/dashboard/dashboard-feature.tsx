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
    "4cHithWrbSqcioXuepfFX3212MgLV5nUHB6WY1GhbeRyyqaFyUzgL2ZFyT9oQdW18vwNYjiQuov11K1paFtjfhQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqKuNENHsgHv9qX8d9Kb8g2CA17ftcVJYyjr8zd2UvYjk9dxnzFSuiwdhoQpwMAJpYSfGRH9MBo2cwXUKUy3waQ",
  "key1": "5eyMQPFXiUcsDS17pe7dkmbVhrYiwtUxxoU3jZCw7Hji2Y5FYAErSGFZ2Y8zHLWSucRcYFyMrxB59MCA66bdGV6G",
  "key2": "5xBRcZXigAZDYrkwU63Su57s6z5zkhXC19P1hDCQpjUE5KjX96Z79qMskAf33r6WUyu4F3Apqreh1LWPML27FuXs",
  "key3": "3tR3uAdsXqspBUDPw6a1Zk39kS7FJ7yeZh2NKLeCbJe7mwRmEupyGi7k6dWRFhrEbw9j5bh4DhBasqqt16p1SZKB",
  "key4": "5wVdfRnepDUY1Sd9rgNmkuJM3hdsXtpBbRcbLZx1Kngp8wWbJJiaHJ8DBJkurRgkYbHX9mGQ7iCkctPxapr28iX5",
  "key5": "59J2S8eJpo3Yu1fyBWzUkshTzNx3D1JPJxBPsQuhu4fZyas5gjYsF7NLaDuUAuNQEA3aYJLYBVRDz1Q8f1LhadbH",
  "key6": "2u9v9MbBu2P3RbA9at2xgG6tUTH3C2uwYPMnEVxLhPmNDXyTfwpYtBHthUbPPsSChkdKriu2fLGMmRmciHrgrCyS",
  "key7": "3wKiwfmj6aaXdfBZQWm9oxmVPXZE85rD3S3E25PBJhdtjDduAZt3YTAZ6a6AsnFhnzqdPF9yxb527uy9w2vmMi8q",
  "key8": "2rTuKQzdSWVpH7gY2UZPNSRSvdmkG8KcaxEYtn9pKCr3KERQkSDHx84PPpDeCJuszeRXiccKb3gjMwAPcCF2BHSm",
  "key9": "4FwDFM57RacvMSfdXZwZwv3ApfPSmTFHjbuoYxGMXdRdgKdb9YgkyDEBMeu98fLZRwW2cjcUhGFVK1ARcrgixoRq",
  "key10": "4ovX2W9ageStBUfXR6sbF2nCwpuXtFV5n9wccM3Bdv3fL5VcDpB6cRHg6zSSB7Dobf6B7VnYf9Ne1Fb8VZHhTfPL",
  "key11": "x4krGcJYWTp19rQTp7iL4ugNT3WQx8utFJQYm5PmDyCWJSYD19CBq1apiFbWARtfbpKT3BrCzNdSTE8h6rPSHfT",
  "key12": "jNZshMnqFynQeQUtX6zj8YbXwLqXespegwpjAi4c8KoJfZUhQWRz6ue72Vyh6q1tDpZZioKqCXCo8WK9hBf2hy6",
  "key13": "2ddjLoVaeNLeN3n3yaoS3oYJpbusVwnVbtVfvTu5z8v4LrsPfcJw5eeF87Z2n2wANJMY2KcfKtEE6oUPvPhNJed4",
  "key14": "4fCsBttMDADwDfkoBKV6vXvXUcJPWdvYnV8fu5MmxgikVXLYe2NYywdg8n7TkmRVddJoZojuBcUmD2UH4gtZBvE3",
  "key15": "k9Dgjr9YkNkL6NicBgEevfhX2zMjeVLtFwKKyoR45AVoA5fRSnuQZFzom4AAvMZRcegDXr5RhCr3mzAvv7dU6C6",
  "key16": "3pwAXd3w43FvYTbfPxyQMtd8b2xsF3k52mdGfHn3safANCi9pcDWYHD4E44F3Lu7h1yTQbN5mKxNH8KUsERFVLSU",
  "key17": "mrkVi9f2h1YjxhK4ZvphsPSUhbStB6itgdAg6owUgDkqR9EkHnhqS1Zch1KJZssjxN74VgPYY8PDai5trnxhoM4",
  "key18": "2ZZRcvDzbCuknJSb2w9oLPXFYjewwwhPedoqHRyVYW23vQHXoKwm4KGR1Y9ydnWTFCFJhfAebQ6CyXgqyXgQfgDt",
  "key19": "37qT5EiHKYfaBVBCTQXjjQfzt4ktiXaTy4264hda1LBX6nD4FfNCAxM1HEH8dHLQ5rFxEmQ2opya2WSB5W1KJz4D",
  "key20": "5cE9w96KLyVvsuoeWyWF4VcJULxJuQZa3vgJWjevHYaAGEne1hZmPj1KDYrncMT7wUkuBLU4NJgso2gX8FMifsbA",
  "key21": "ZB3u2ykbKBG3JjrD9HGaGna4RYc5aLQozwRPJwwVbbB8NE5byg7mFrUgW1zcq3xLEDb1D8ZMjHL9SSRRQK2Yq4g",
  "key22": "2pVm9zQbwfES7EWrXwBttTqx9QprBq3hqV7SYoMZUjJGrRs9t3XT6hA5BTVQHKryf8gnWwK2GMsPgUvV4Dhk5Yfa",
  "key23": "62TTuuGZCgV2ip4qeMCFy89D8CuUBGoDsuYLxRnEBBjptSQdetxKpALE6h6jpkKX8wQMgTh6UPu4mkepvTsvgv6y",
  "key24": "2SA78717GntsDPwiKoCg6pgG6FMUhv8AJe39KkBqYsmVuhQ7PCcmLQeEKjGsCx1yZrjUMXKeaD8y1z2f3H8PQWdB",
  "key25": "5V3wLArTqgc3wLWVaXkkyCaZVD3vRa8T9YnxZYZrgTrksWoo81TNysrSEf4VDYtJ19niGp4zYovPtbpiBvnNLYCp",
  "key26": "3WZzNcMprDSt8HZcUz7MxLGMCG6q7v4Z2FvASnLARFTjZqS4m7bzQfWJyVtvEVXY6e3PCC9VjSy2aH7z8aAMF5rB",
  "key27": "5i9rq7RxFvD3mrsa7T7syUcL7q5KpHBepeLdRfZzPsZDB3JhENhiHBJvLY2rsk59nKKrob6g4K1uKR5fdYPnJtN6",
  "key28": "ewVK3qYVacynK53xuyJk7J6NDs8sPYRyNBS874MxB39AJf3yZAR2jT7RtVwKD7T5awm187D9wTrF81m7AzDXtwN",
  "key29": "4nbE98AaWuxYPPdjG1v2yfU2uPa69Cwf1QQXEGofVVEHWrDvKXxt8HBeahg6kSMRiN5sfYSpTGm2qhevgudM9kZ",
  "key30": "3gmfE3Vt3viaHcwdaBrVagPwaAw8xbPjSf8nevE3U4jTLF72y81khUcoG9TRPQ3yq4zwgHRmEWTAryqPMaXgbxTo"
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
