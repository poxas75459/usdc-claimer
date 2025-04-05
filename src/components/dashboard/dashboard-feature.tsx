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
    "4iduT98ykvst2mwxq6qymD7w9ZspZGDyNmiUngXTKr7mFpCHYFHrVZErW1u18XJyz4zQ4egU3QKigJ3EgZxzhN2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3suQUxKXzVWcgLvNo6yudk67FdoD9XFtcNnSR62ymhJf6jwg8g1hWCvVAUFUYVxFt7gGcPvejcrat4PMWdgFF6q9",
  "key1": "CMqN61sNfR2ofNEYFeftMrxjexTBoVotrC8EmtUsSe1SYw25i6gdQwraYCgfrmBBiLG9RdkNyQDPiqWZXHeSz3H",
  "key2": "3xqrirvpz9rCnZBewSpijQVnqr6aVb2PyWUFNuqHvVbp7ZkPmPP9eQxsDCkHAZU9A2Cy1GZHe6zey1mughXp6pAb",
  "key3": "5jJENZ6VSAEHF56dJiE19v3u2pkFSW5YkXhUa8VzvzPoZU8Ue51Ua1LTey6gNbvPcvbdMqFKAvVMs6pVN1UBxhRq",
  "key4": "zmXYUm8kfQiyYrRVCS8o11uHH2Dz3REHqsbJbBSogV7avwpSjZoSN9iCD2sJB9N8P9mrHCBsfknxA9SxfW5YwJB",
  "key5": "2V7YoexrUpBJheDjna72Sdx6ZDqAbNZKi7tqnjkcRYyaxcykeuJyU3evrqT6QBs7JFLHJjn55pk9dwS4erANsjq2",
  "key6": "Mcy9Vwjux9ogPxTf2nNazP85gZMg4ruBKUEkDAjCX855MQDcsRGwPcb1VPp6VfudrEiK9kHY7w69moJhXRRr3Vh",
  "key7": "3n7chi6caDQPejq4UDa6iaMpebXaqHcjXP1HdQHCjmNJaQMMQ4Q8Ampd2nN1Y6TPGjuDtohnQBDzZF7LoYHQBJCp",
  "key8": "5CCHtmDitkDtqnVV5Tp5bSYVCg6oSX9dqLss7RWPag8DnBv4TyBDwPrKPwo2SH1GAf2AZFVBjNWnQjKrXenJLo6X",
  "key9": "21dkXBRygVB2BX2B3AZbjEYvY4Rm8xTtK1SKwbDgawAN8W3eEQfV6pDno6DxFaWnfoDH7SbPptFWF1wiEgMrDoQm",
  "key10": "5ktuHm4G5vBkxxJJnG5y4eZhC5HGTfZCCnpGZxoGu9xawtTQuca5wn94BG5cxWFBVXFw85bv53pyXLopmsnzxnxS",
  "key11": "29Vyrkr6QVcgEcoDeiuHdFyrwHw51yiwXVwM34ptar6ymcC7HKZkGvsccoqR2Reht5b4YPaTBdFXL6sWhYsBg5iN",
  "key12": "gYr4VqEU2u2rZit3rPZBzMpb8Y7gpMtQxsdmMQBYg7GjWfUd6dcjaJjmEczMzagX7NoBwrZmzFFYokwjgaJSrp6",
  "key13": "2J9no7vhWAV1GBfa1hpUM16ZLdea8FvMRTVYrHWPHeXGNNqwQpcNmrZ3ueaFqJoV4GQKH75vpyZEfdqfHQcgvEaU",
  "key14": "iKzkHYS43Hry9zvvP66KNsp1V8wWqFBM413e2iVufTjom1S3ApAKQDqbDPBeAJ7JqVPN8fhzc2ztAURB1iwYHvF",
  "key15": "2MjSqwsTFWGxcHwrbrodk4LVCpvxY1PryJXfo21yFAcDSZjuytYMWCoFusSzD15BJHs4MtNvyKk6eyWWSW6ZKZbR",
  "key16": "4gME2peEhEniw2fEQ1LeKmXMy4umxzytYbcMDrtSiNgiabmbiSxmU3A3p7mqUG2gckWXgsn6AWAt6FNVHmdGsuvY",
  "key17": "3EHw1P6kSfQiZJAy3oGXmko15dzXyNBhNRnpKfGf7jKuhueRpXBKsbuKNhBS4S1N2Yo9nmzXLdcGPUknVJCsKWA5",
  "key18": "4tqJdpgkooUnTttRqfY5kKhqDqZNpAqexoB2BDnPN13BzgXqE9H4uD8Xf7k5yXeuoLq2vemYEP96kgPhW5e6e1b3",
  "key19": "4KCAGj5D5pJM1iASHcoPaiC5eKDjEUj7Yjff7bYJbC47xaKJNAGvXDcxWKa7cgWgXU2FMfZewgGmqY2UZyCbMsN5",
  "key20": "4eXv1PwwJGcFPsMihnnb4yp82eDGtNKBrp4hKxaimrSMvkjAQmLpMpGdyqfW2BfnRVa1vWaaq4C1mLxNVrk7bXzV",
  "key21": "uucYLEtWQAmv5qjwMisovL3cVLoDgYcbgyxH2hobSMKADLgwrNTibvViQwQA3HkiRBGdeRqfPkhjNwZo8vfCPQ2",
  "key22": "32QgX71VKSaJrB1Qd2g7hMDXq8JW8TqdRFcJAmMEh8UVQAJDMU9vjJ6z3yv4det5erLkHuE6EwUAJXiuDUhDBFA5",
  "key23": "4Zomg4xWLfRmR7cX41hqnrgZzFXeVURAa74RwwA3yAebm2PAd1W32Zt4oLhiairKJSHFGWKnHo9MbhLiKBdqtg34",
  "key24": "2aJFB2ozBWJdUsQaL5PPSN9MXrZ1aJvDLA62biTT3QWmnFa7wZzGox1ji7DbzNnufE2fqsx9GNpKYctknoMYkn34",
  "key25": "5ZdC3aJNKnrz8oStykJruWnep2PCiaBvzLUx2Voj4RnyyVfn2xMTp9658h7iqqY1nE5e7RAUJRYThgtrTGjZJmD",
  "key26": "4rBVYrQrS6VFs19rBkQQ3KrsLH9jvsbVkQq4oXWfu5CyWJ7TUYTChR3Ba4Nd2oZBncBuxSAd9hrrEdeDgsgC4gC3",
  "key27": "2Sq5qp28pJeYMtrwbsdTPfSHBnVdBzBFS6kWFuwcgLEmgWznrzYUF9R2T9Wr2xW7WuKBtAwusibwUYqKs3iXofTa",
  "key28": "ucYsHRoZgZiGDTfuLnx41zdM96kjR4EDrShrrSSPgxnqLwwcQmSn6iZ5aF8WR6e2fiDeyaqdQ4qXWboGyLxDsd2",
  "key29": "4gvGjKjFCybJSY7PvQ14F6VxRTKRJULKCvpXA8kqW7qXewuTitYSn6fAVzeAp7oyG5Kz2jwJCGHf7JUEq4mNrkS6",
  "key30": "3UGu3MdQg5dFcDTkS4Jun1neBETmQCEgQoXr476mCDwxJ2oT3cK31t1wGRb2T3kTf28mnfNzFB1oumiX4fPo9YQv",
  "key31": "5VVjXWbnF6dMN19zNmD1kp83DQFt6jQfGgn9U7RHsqSCYHXtDGnVeQ8L9UNZDaxHqGj6wosdjH1JswRAt25JARj8",
  "key32": "463v4tdKRw3UYKXzEKqLNNAJe8SS4wkvVfvz7weSPzjbt6yRE9uuSe5x8wrzXJGw9iDVnFYL329mPFZzioXeD2Mv"
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
