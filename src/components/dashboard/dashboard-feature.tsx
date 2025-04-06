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
    "2jd8WHPXkT5tZCN9aJFEkSbsR7xBdUvG7BUHARVf9p2iW5tRfRmzrZkLKyQdQDgt8jRjPWmm2BjbRX8nqUNHBqpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jb5TEgP7zGGnHC3EYLVfd341q8h3b1kdkRAv1F9Xjfz1rLv4hPUGc32Te31wNo7PiFNYLoMAucth4H54S5hRwf",
  "key1": "RtQSMsGpVY81eEf6L88d5QAhiqB188Jrkxf3MwXhfWef4YY4gtMCjY1xUMbjMb93vcdxqptFDd8pCHpcVV85X7S",
  "key2": "5ZRcvRGgbqNdbBZcTKbGKx1b7nAvyCfbw9VArm9svFM5kNQWiR3x91ojEj7usBxmRLZ8Daof4auuFoUS8KazrgYr",
  "key3": "3dvNrctRJ2KuVgJ395vGSnYGxRErog1rH92rpyy1nxRjMzZLsVGxAiN2RDpaY6tycpjUd1E6hDd6EiRtgKPvxsAn",
  "key4": "cpGHCkVnkuSneUEsoeyzanhYHoPE8NU6XdCZiRFi8h5d14Pq1zAiBVhjUSewfhjGNk652mLjQmwsQdqnFe6hbSx",
  "key5": "4aocwxkvSkkmsqZJZgzj7DDcL4Tj6mqSb1V4JNfD5qBNTcQ6P9zra56pWsbpFRK7q6jsshxkxQUsMoxh1u2NgyTr",
  "key6": "4B1nnws728LYf8KvwDYzEYoGiDQuARwPb9Uo5y69Zwu9Z6SSE44n1nfeEgn3XydhNjyQYCx3JcMfGFMe2CHEuk5V",
  "key7": "4AMNoXZ3uUDVc1PocXTu4M6ZhM1zdDLBJazM6wqm4jugbRMPVg7dwkstUhqiYDqKmQ3jJfgucjCnpSkfMb2QLAev",
  "key8": "bJeWMVfHtC39kWibi5Cckx8vP2w287aGfyD9vTPFCdtshXvgBnqEUE3x3LweLWWmLsZg89KP1vL4UTrEZA8dBdb",
  "key9": "4gbLxrGnoxyppjMwPiGQgg3jYYz94PbYx97myiqHH82imHSBd5te2rnUruexRHq7V9yezHJ9pjKjBcg3SpBPY8iC",
  "key10": "3ndiEBTDWdX67KdwieLwhDcZUzVJxpXuhnkr6xvvUgGtk2Uke52x75Eg8Ajs9kePewxPa8C6AmpudKgg7RoYPUWR",
  "key11": "637ZbCJmMSRhh7KYiTLm32YYPiASw2S9QCui6xtiW8TfrvhetoVycJvCj2ZwG2qwMcToENchF3xHN1zUioxeR65k",
  "key12": "q2QKHGZo7FKpShzExcvrGjtw2kmZR9aD4BQyGb1wzChbUifak5RYjmWKyxyvfUfNYz94cMWLCLpoNiDiMjfzaNr",
  "key13": "5QX3KGZzBisd8ZpQEnay9T8cUNmaGgHALdX4CnUH7nT7fGbb7EV5WTiF3awuJ7NMh1eyqETQSS5QhxcwVsZe8EWS",
  "key14": "5c9mYBqdNYXnBbAwEGDnQdfGPRNrsa6cZS9HnitxmuZmW1bfkcf63QjA5kZR6rYXhrGQwLHM7HExqYB7NBCG83Rx",
  "key15": "8pNwKtyzV9iwD1SK59VwRmm73aQpTTK1mPRiUSKChg6C9yZCbg5Q7KfxbGVnyLBsKQdsdCvMLgFsKBsFs5o8j9E",
  "key16": "3dcpu7dnd3aUpnKq3XC1sckpAaCqfRA33HqeSJJaqoAVsYYKFtcQDrgsFYgWzqFgyEPZ4kzVkDQ4Nep9ghpokYRs",
  "key17": "4mThjvq8BDKorcYmLzuhTSd9GBb2QUhTi81nZxuMrxZmsHzSHu1bwgU5hA4CTE4fPnBuaqYcSa7FwsNqGqDQrv7z",
  "key18": "4XtvU1icUCheuXpAtQisVU2Q6QbWb9vKPkRLPpgNmon8QYVGov8bv1yW54ckoASsrNfy3MMoAL3nMYKTzZVbwHcP",
  "key19": "5cYh88uPXZ9AdAfi439iTmumyocGu7VW7CBxiVBp5U2eYSbLiqvKC6jSatKysSwTdEVG7FkYVAX5DuHyqgadLpWi",
  "key20": "2HhVRgJRziCULi4kdy1bcR19bWVdoDu5vGa19ywo85K4cZMsjuAcNGENF4bxuvKifNzbfH5v2w28tE7sdnrbbsLE",
  "key21": "5CDSCXoakSfnBo7WuRFptVWTCBsNczM5hZhcxPL4iEKkFQG9RtUxqwvwArZsk1wDSgt6B4kdVm8DhK4GuYWkP6vW",
  "key22": "jvezZm9Zi1bPyyvtWCdHv8zg8gyWpuyJxcWYLLHyLzcmrgNZEnFAXmbNzfxDAstctDQrgrwro5c8NgbE3Mi9QYd",
  "key23": "5Sg1PEVedD1RdPQJB9knmRrAApjD5sUVS31HPn9fSJmTav1Ycc2ckqQfDxUv73zNAqeY75ZxZLhu5oKTzcC15hTZ",
  "key24": "BgrqsfWaNNmJe12ZcPrhiEKmE5yzMrKHrpiXKzARtGAxjgHrmHaCot6eu92uZWcHKdgjJwqQWo1ZXu4BdHRMMJJ",
  "key25": "2xyTCZKfdMqGB5CZEgRwKR7DR3cJDMitjRRdhNZC7FQEZiZo8rCGZz9nSbUq9rF7EDG2BHFzuBVFMgNJTAXuxTT3",
  "key26": "2PayoHERAnuCQTsy2oXMz3awEyBUJE5y2tD5jTccBr9gEepoTrn8sd1vHrk7mQ6qMavKMN2aSVTnXE4bpHD8LUse",
  "key27": "EF4nBgT745usHWaAPob6VqR8v4EKAwnR1efowmmKbPn5SWyrcKGgfYTe33MhtGhHud9nckGQZMsX2ZwSfxoxhfY",
  "key28": "4WfsYuBaaiNBH5qjRE2w1uWVdPU2vjNH665m9CoWHTq9iYQQJuX4pZp6qqCYGBvXL9RvnUY6zgN5Q5s1KEkMXSW7",
  "key29": "2BmLysNQeWpivYmvXncMb26UvNVfnQUGjHQ7TDogqE6TdVEmyrMrt5sWFtWp9BxkMrDJ5D1fTY88wAXF4NrJK9Mb",
  "key30": "AGbffumb1EN1DmkAnccB62f2t4f1Sb5yXByq1XiPryq2SKaiub6qHf8E9vkJBHAVWMNBZk5r7bxgo3khbW14e8z",
  "key31": "2WH1aj3kjyMMtZ3jdXSkRjKwsGboWdMiZfK6vAj8y5UpurMvfe1gb23dT9mMUGQuuHw2Gegz8qM3nKjoya6RniMq",
  "key32": "2E9RmefQQNoas3oxChVeYQUNKtTDh8oWoUq7TUjYVK1pXFE9s8jdE4BF9G62cYQk9t9vwjmszpoAPqZDzaLxLUYL",
  "key33": "5LWcNr2CSjam8WCF4JeDseJNHL6zHThq6Dd3kcsRqLXV4Kx4K3EVdhQcuS9joGDogp5AcYXPdHRYBTim7HynWv97",
  "key34": "3frnG6kada2Gnan1HHq66YWDN6xF7ortkuMHFHmhvyosUREhC6knB1S5T8PGvne6TC82rLoKVQFFTT7uioMoPvVc",
  "key35": "55BqXmBDLpoXs6fG9SxR6V7y1qHzvJdwVEZyrtMeCtaQk2BgCsGsHwRBgrhm65iad8htQJudTBqtxpRH3ZtvHjuJ",
  "key36": "5E56jNxyYB7AeMB3Ga9Vqmzjv4nqw8j1ASFkpsLVmUBLkqpD7gAZGbs78xLmtp8pn8LoJcFMHKChnptUebmUTFyG",
  "key37": "2cTdJaPja8q8xriRJadciKc2Bhxb3WUeSspHVmd3ddak5Ja5HkPHseXcDHByZuumQDPzTHqvyermmwNtF1gNHcdu",
  "key38": "2n7UL6WFRUFrqP4RoteAWWnF9qWdvGEPTCMshfEBF2u6AS1rAi1JDaxpmCuQUmRvUNqTRMoY6DXSLiL4wYj1NgPx",
  "key39": "3DUdyZfENTTzzaR6VBqta4dEw8Kdzga1JG3dycyTsRxUmZdhiNgKoS8tMPRYfHLRenLuYqXrEZDeyDtXqSucnx5c"
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
