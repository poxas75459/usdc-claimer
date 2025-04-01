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
    "Gtg5fxW7reHNxa6FkDNTFpQHpQrtaqYGuBKfJAKTeekw7hQAHrQvdAkok8121d59appjsDYtkZX5gv8WJBZoQNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUnZuEX7pj6AMEEvR5vmfrqvo3YCFYukb8KPAChoKG4zByKThEJtFN8g9Pq8akEecjprmbe7VKcNfN3yANwycY",
  "key1": "3YcbYZruqcbXFHxZ6HkJbBj77v6xXKDA1MrWKYJFNKS15T8vyCQLSM87CB67TD8E6DwjNiaajK8mdezwgfggFAiJ",
  "key2": "3zfZzyXBXsBYJDSobrR1r2Hs9Q6MceVNr8M8JpDv14cZKVTAs42yQtGZvkn5GBoowyP68qZFzMUD5q6hKGhQ2nBX",
  "key3": "2ftNnhWDAcx2qY8nVnnYLLtqjYyqyH6N26K4GptHLo9Av12ThTWy1weKfxyfPVEYWvpGYoNmLF64oHFtVPLX93cR",
  "key4": "2XerL8EuZsookWjYEmWDGMPQL7WK8qecYNXMtAEKRBRS9wFmGdu2yKRR8xWFq8cHQczTzW1E4YpvEfGmCrGnkgSd",
  "key5": "2gbBi5jFtP5oMrepTHpR4EKdMwAYagezfZad3PGVfWNVmkCkkdaWvxrTAuC3XML59ryyk9RFm9j25JQMXDEhtbdB",
  "key6": "5LZQZKJUGxnLvh19zffCMbyvGCzwV8VRQjHWNbQcWsp1xmDYWSEFi7tvef5U1JEwJW91umjX8pNpfYVv2xSbaoNr",
  "key7": "KmAeUMDtkDooofZUn62Abq69Fvtkjy75ACBQ8K6ZmCw3qtTTSfQweCz8ytGqPmWxgQnq86kGQg6rM5jHriCMKY4",
  "key8": "4EfyrCjpHuomxdQc66NEvAAaKYcwdRZsKMaSftsB2ohT5PTyyxgjHvcSZ7DkEm2nVZnYhq3zptvGFuJMEvFKj4hG",
  "key9": "4CLbdnHeJhHoNMY1xWVr8dB5hEhC5vcGzU5AeuXm3483h57bS9ry8yz9L96LxKXXcC8MAeELUitCSF2a98XRfiKp",
  "key10": "5J5LtNSDaTrVXhB2WFRHvwJeHBb7gWBuf7VgrBABvawhPp8hWG9aJJixedPRy29v52hmLv2me6mkaW8tAgzaHCLi",
  "key11": "2r1WK2xhdJHZ9PPEzYiyN1vZzmSmFzvv8Bkgq1fJZWydpY7BH7ggUjomGAwbto1dRFqN48PnbKEuEfKYF6e9CvSQ",
  "key12": "4qnMKoAXHk1yYgdgiMEcaK64yLZ2G1o7hafThBEUMxGyneGADUzT4McdXCjhkasziTSZWeHhzyx1Zqauw47PNsVr",
  "key13": "4mpmjm4STCDxrofFoxBfd3wsvGzK7bQchPG9grjwtbBqKeR5HCWdCFTLrjwBHbuby8s2nMjvvdcbiFWBUZVvj7r4",
  "key14": "3HZrCaK4H27SfmdhBdKPHRLAMh4js6bkRbNgKVzy8vLUg9WYVY1sQGoxN9PKNjuPm1qKoesrsQcaAzgk1nN9Dfiu",
  "key15": "65wi7jMn1DWJ79ncYk8dWnqur1ivDpD1Rre6uS3xcxPQqZHeNFjNGDUejDMFgRWhyLtoaCn5ShB8vVXnJmBZ7sBZ",
  "key16": "28z6TZKj3QrCJCev9ZqUCpKmELMLWqoJDrUVtnH4HyFe9w7p25hHBQMVzvjUBGzy4aB6hWKYWFYZzT42jRkGG6U3",
  "key17": "43bTLEV4mbrGTGMZvfpD2trZ4QXc5CwSZpRDsZRwVraatsZM2oFYJuJgmzNRgjfWT2GC98gDFd4orHFU5hY8uK8u",
  "key18": "4qnxXcTavaUSGoVe5t5CxaUfpLD7QLtfscSRLTt2qtborbSDNwa79bRniZ2QPK5BD2qruyaXLPeFFuEd92wtNp4A",
  "key19": "62Gi1Gaawp9NtqYu2PSvFNMB46UHrg5c34d43TxTeZNbyvMCkvFLJDQ63TsBSfXnhZszrUHu5R3QoVH7u7Rtee9o",
  "key20": "2ECTcusLrVLdz2vwoCU7JcWJVAPDDhqDbC6wVWuvBypr2yeH6czyWmkbHauELgvmvSXDUm8MmASVVj9XsyCs7P21",
  "key21": "4vFCyALMUrJf87KeJzBHwsGybFfAfW98y48mjjzUKT6FE2U6ouaAXifhejLohZYSAofX7AsC554mBVvAD72T68UF",
  "key22": "42fSVwGvPuybBvrceaF8uotd9sCBAsKqhBtYyuyfCXaRKG8Th9EUiiS8WepRXDXHjss3QuuhDzqhF3mhCdstqGF8",
  "key23": "4yAaQgNtbYFwoZc8Bt9LBvmE1TXjUKTkdAjvphXAxqZXjiVyKUNTVKWSE2kLbTSqFbqAnf8E5yzG9DqukviPYDpo",
  "key24": "2fbPAtNB9LbGER2nxyqL7Vts8ZiNMw1b5Sfaxq549nQwMHZkDQZWLaZ8uU6VwinwpmpEdAnrbUJANN5BWyWiRA7Z",
  "key25": "2evCCDj5LYLt9PxFP3jxwBKHo4sZKcYTW18RAQ2iwiKkqRFbsRQ8ihYa1uz6BjPY1aWpiemwdz9fppZt7eQXa3YE",
  "key26": "2iA4yDRKdMVyaXwaktkVcBL2t46zfPMnxKF17eyYf2mAg5QGFGimcmcgEJnZRbUexSMVBm6US8pASGHjwCVJKQBT"
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
