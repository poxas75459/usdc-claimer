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
    "66KxYSQAfDjtjndFRUywijnpoUYFfnAaooycuN7KUJQwcdM46QHN6PpkAv3ha8hm1yrXLo8r2rmbjBhzVZVo8ENK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4Er4oTXdCrYWTaUVHukqo9jg7nnpy6Kf4SQog9EVKj39asC1fctrwQgozNbKgVL7gq6L4bbe5MBQWAjMQ9HdPm",
  "key1": "5QWhUYjezeRCKsSkMDSkT56FjTkTcvRSP57HoqhrX1yMWuem8mm7PQKMhiqgoEBqvGjdp6cztQfc35BBq8sXqiU1",
  "key2": "4s15S6fZp59fv8xKudZ4KWaEzWuTBP2M4DnYbMtADRLUa2b58Rb8HDTbbafZDTuwbrR78u4iWupKZgTya3eFVNtT",
  "key3": "QiS6ruU2NdEj9sUwvGLissMoi7B7uPZ1AtoZ5PcZAW6WGQqNLcCBaGAyQM5NMhiEhE35K1FSYQLx2MEiqGd1LQp",
  "key4": "573R4nNdV11ukKFwn5dv3Uj3LKCRWxPJDujUfTXAoAjKEH8oahbcH5XQatKnZsJhyF9LiNbDCeRyRtrPMQ7fQseA",
  "key5": "3odcZN5CTeYs8LVKHr456rYcFPxo4hVky2HZoiU49U6ycZtGEFSktyk2S6wAwzKabS7qFVgN3NnQiE3LP6VVodW6",
  "key6": "4LxwjynvddUa4Hnus5xEvmjSVDETA19owgqXr1TAFQEgZuRJfA9LRRJXH7LjUtHRsi1em6cqccrHcMe3UcRbkUJd",
  "key7": "5nEicFWD8dhDnyPSHZAYsHoFFhRphqRD9qUt663EeqPJitX6ujzpQiqCghPTS9WVMzWgXjyV4TzocUBQ8MYQ4Wtc",
  "key8": "KQfDAvVuwJTRm912jTdxg2Uz3BcsHTfY7uL2RtDqFs4yCdk32HxhjLreewKb6ffDJSfngCmGoLG1R5ENvXd7Fdb",
  "key9": "2iUqfGKWxYGk2FjjD27cWHRzwy8eSYr8pAUgdN6x9zHKHZ2F8shtdNyfLWV8AJKMsQUtW4CnEQBGFHvMcnggqZpL",
  "key10": "5dE4NefSVfmP55CUsK6HUuC8R2ySiU19wiFPFbDcJgBysqvRgzmfjB9F5Qi96a1iJmZ3pnaqzDpxdYfQUrckCqm7",
  "key11": "2Z8Upn27Cp6VvpxaUki6tAKtcwkEKT3pqhTb1HsNMvn4qNj1nm6x1Ea6RQHKaahMgEVvby7gcxUastc5QSTqXF9D",
  "key12": "48PaPfVpBWPCjs38SjEt7w56q4WgjRJbRh72cJR4HdJwPQm9C2swCf6f8XrKXkSpFtDEftdw2nnBqwL4XAycR6tA",
  "key13": "4DoSTrDLmASfsTT71hwg93MpNsZFxZukm7TKTQH5YiyQiahNKmrgYtkLfULveVA6c8sBGZdxyYFupwezmYftnN8A",
  "key14": "DkyDNnjQXkTVHnkNDrQgWT93Wtk1Qsj3cqngQwXSVsexSmcRk3bHvqKDDEWgpz99fgkWLDvxwDbLnVuW3YBiE2S",
  "key15": "5oTprNEsqssff6UgHJt4dBbhPbmr66m9bUGSgyH7ho52e1gby8MeN1wY7sA2UMpNWpLmebUYP1hB2xuk2LqNVkea",
  "key16": "KZTadZaXKvn7BsVW4q4pz1RUGy9zupErXYAyjYXqHHWMZMhiN5bGvLmo3PfUymiuz4yErKMPndumFeWJdMA99tf",
  "key17": "61A49FLP6HmdKFqPCCo3ctuYdrojfXmwkKCvgKWnD3XkHUs2fWDq2hpNRZjcC1Pq5TGZkoFTx9H6BwKzMAMLmQxw",
  "key18": "47sed7CTuYpjNj8RaLdSBt2PQKTFGmtrNCLqyZkTY1uG1hzeU3AUkdgLU2kawBoRGmU7Tz1sPDJhLUnNVXsevXws",
  "key19": "1uCyALtbXE8Hp7MoL4KBB6pd5GbZzEUbst69GrPets4jNDZTvAK5xvgJ99SrVhNFbjS37ikzS3JPoRejYu18xkA",
  "key20": "5CmaZqXausBtD3pgbXr7RN5y3ChFywjC8459pBBVcvUVhLM9TWBafCZ6DLyECfHk5yeTi6uBYCCpFXQ1x3ectLP2",
  "key21": "4SdvQBvpPsgSLVCwY8bfZn67PWaZBRFNAK8cG2LWCpZ2eNzCHWhrA6hLnbfph4grtu7FimX7JfAdqkC9WsDyFv5L",
  "key22": "3mfKK5NgTk5N6RxTMwHtpDueBw8vEvyVTtRyk8i7EBqtuSvHNoBBfrLmHCKLX8Mjs9D9jwSfi3u53WeWBAYbhWXe",
  "key23": "2GKsWDnsWPhFCy3d1PAgPaHVABZGkgPoLrt9gEc2eiWeWN3o95iqhKHhr99RaEp5DbsCYNtpGA3y6bPDVyioEer8",
  "key24": "7DYUMj7YzJPYmFHxsHaL6u4SR4PmA5rM5MYCRgPgtmo9698v1s7Sc9YpUNreEV6EWBdUQmydYvofRCevqJhFXU5",
  "key25": "3cFsjKhuwwkpdkeRYJG5H2SdUbMuxDUnXvWG4uYJ9bSHgXVbUk7uY7mYUkHTaGHtr9QTdZSXKoZTNsQuexj2ojV1",
  "key26": "RGcy3xjcs1yG4iAzLTKufMff6YNwRb7xtp989GYuQX1ESNCiQ2JkEFQ7bfW8imuSSfLWL55MaU9PwXsWNPGevbr",
  "key27": "3EbcnTp2dqwF8v9snXQxbTZAm7p4MVcn4CPjWNj6t2dNbvQ93ntRqt1dKUdCqupzK8cKhxxPK1c1NQVw2vxbCQ44",
  "key28": "3YtgcoC9gvvB4ziYnuvxjHPftJcgPSLBkmczefKN3taK63SbFxGvnY9frTXCEUwAMLY8zaMitr5XycrFG1BvweY6",
  "key29": "25YNvQJVwgYie5649h1bceFBgSYhAtqseHoWg8TNr93v9Q8Rj4KmTPcbX5Ke1zRVviUqieLj2RVBzUNLKGCkzf2d",
  "key30": "3qbUUPvPHjxiFYYhoc9dnZESbHHB6jLaLCXEwDjxQz5VRhYo5bRqqFyyPMQAcjdgyhSRDi5Daqx2m6PnP7Fak31R",
  "key31": "33Z8wEkchBqnxFFJrSd9fpswRmvdSVZYhZaPqQSzd2JzzfLCE9CciRp9epyoahhqNH11te5zHF18PMKmNUuqPEAT",
  "key32": "r6iKi95jWdRvizHywsRfPQeqNUrafFjyFgoXCAVgks1EuFZdUEv8KPoKCurfu1USvvocPFDN5D6oQzBchVKHeq4",
  "key33": "3DmqcsLRvUmVZUGxrW69vnKVoaU1q9MgAWVXvKtbCAUM2KCzMSRt2MM6sRWQ8mqjqh7eEvxYKfAoMWz5X5BfaGXM",
  "key34": "4cuGtZJHTAnEnV9NrSq2WP6vjGkHZGQ8mnjY9eJUprGjbHwBxaCnbftqrK5ADAPsVittZEeVsQe8aictQ6NudXYZ",
  "key35": "Cyh1tJrGofyJBaKUdsyjSns37HjE1eGGPxLW7JMieY6wAZX6zsXBXSK9qUYPgBv481K157AcgBXXqcyFEz8zC3Y",
  "key36": "55DcFj82nqTRaqj5GeWC3ZG4dEs8JjTGfcUBvmoayJEhjxmMehZSaAhCFtPESd2VMFXt5tnSaaTWhAS7cVxDhkkL",
  "key37": "5zdnjSz1Gaoy9DmvG38EkNf1ZudQe5nzAaSsec1P2BCvnzHuxLC3uxAYNPmuKCaNDbsAG2ERGfN3URAWijFpWnEw",
  "key38": "4n6VWHb5YMtM2qGNExukvPGXsGi4bHToDTT7SN4cmetDy1E4WQAbBiFtXuXJJoW8VHPfwKSGoFzoq1jvv7W3x8eK",
  "key39": "3RKEMxwAhiQoPggncj1UqjwzRdFpWixeLa1txaYc3P3kPrVG8MHcruWbPws1XW8xnbdz9Jc8BKrz65qM8GsbvAHj",
  "key40": "2QP4ydMVpo3nghN5nR2Nntjz2VkPCG5cqkypfinDifTrwfMSrrmwEaDMD7WxgYCHiVPGFdcpnEmdN7nV1YVFAswL",
  "key41": "8c4UHvDwS8HzmeU5eX4yf7L4zAB5cFwzB8APG85fEcD536zMBZRbBKo5Gp7JWWRBkqnQxX1DR4p8ayogBPsvChF"
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
