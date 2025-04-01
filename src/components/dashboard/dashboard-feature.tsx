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
    "3KKoyAaTycao191RMRuU1HG3H6H3cg9FeNjioAfyKcH2Y8rMX6iWgHg86fd54j2rcCNBw2jFxvyeSfhDkefd2o9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKRuVLDcNZybiUZ8UE9V5ijKxiRSkFx4PzT2vkehASWAnGyCEKcvCVJ4moU7uYxgaL2kYuDDRjobgyvEjqhDKXK",
  "key1": "4hySrd5RrBCdPn6h6wS5c17vCMDEXsYZY2y8EfKr7o52b8L2oxW6vKKR7Qsj56o9fKMU1Gfz1D1EymETkxVnt7eD",
  "key2": "2seb2HknjCn4URczhfhXPxE4MZN3r1BSTuLHkFRSzqEToxVqa7cgNKY3WhaL7wyRpFmHgENcisfvPNmkJgHjdB3e",
  "key3": "4YDgWxywaQQmMvj6zwohxFc4XNQYN79wQL4vCDjnVVdVUPCsFfsrvwGdMB9uGYrhfuBJf9Jnvnb9sdHyN6VuAJVS",
  "key4": "55J8J4qfSLhQMSMU89CoyxWsB1BDwZjjtJ7T4HLBWpz9gq5pf72ZVBGnsMnv6yo5vLwwCfej335M8GMGQaNd67HP",
  "key5": "4ASkdfRUbnS3AjvC6tAbX6r3E2B6bhmyiSdJCjUPf2yV9eWHzmUY9Tj8YM5kMMEaYCkxbAV5i7Xe7NNf5EZxiT8W",
  "key6": "4FuXouWCgpQPJ2zE1Hkx67fqKSiEteEf7pFvi3uFh8FgQDep1je66cHP83BjyQRVkHBFgwLA1EHoHsr5MBwBHhPC",
  "key7": "3KrjX5sCz7DucQg3YhjP2LzbFSCEjRn2HGxo45F5AeUjquneYSXVS1aXn9JRnoKzU5PWYGjR7H5dL5Mje66YRbK9",
  "key8": "4RUjXF5mUidSz3zrH2hrcSABMQ8P8gvGJEfMDgJ66YMyZx9nfBKrfdzUmJrpbof9z81NRWRz6VAbjXtbyRFHnhLu",
  "key9": "4gzRcmuXqzo7coXptfR2g9dsSaJCkKewPJKRXaRNPeE31NNQwKwABam5g4XkCxuXzhmWif4vNqtycozTNTVSPuXA",
  "key10": "5jWnFcgepP3C5cnuFmoyx77NmL4MiiSG1ZNcfFnydie9D4X36qF9N7NVfNSHiVXP56g9AQyQC6pENdrwL6yYfGEo",
  "key11": "V3H4xdBXrSBFsgsHjdjF1QY5Kyr1raQShKrvGP4L68buCzPXM6CjKYHvKAic9QxmxZ2zpk5L2CP5daS3CumMPi8",
  "key12": "MywQpLdYwSuy2miN9w4tdC8tAfKZypYWCjnMRtRUu21e2rMDkhBw4oEruR7L4eXZnUrh9pHTw7Yz3nEy6WGTfN1",
  "key13": "2Vm3W5GHUcb9HYx2HZMEB29wVcmib7NgY5UGTwzgrUKQN5GGsp9fnnnSMm7qf3To6YdWz2PbEP2d4iw1dQ1su9ss",
  "key14": "4BEzmG12gZ4mSBco9ysoecPKSmF1XWu2tZZAtECLYszZe36JAXVtkFsFnD5PRbQoSkXD1sYTzu5nkqTLdG5zjgBN",
  "key15": "67UaQeVU8TBec5hVjtSDqAf456yRyLw79xJs7SY7C1XV61SUrB1Wz9EzvhyJd8XVCZpqBWYx4DAdgr92wqKkTeSG",
  "key16": "2kgeq9gvxTuAR6pbQ7jwHhvGHD8fKNVcVMXWwMdRwBLzxHrC3n3RjKQrMTi5atRMR9RR82YXEa7P6tdztJHiCVLQ",
  "key17": "4LqC8xJDD2U1P17Hr3c49S4RAA12p8i9qTqGQg2iovDAdQjs6aEjTX196EL6D8x2eFkTqMASieQBmUhMfh3Uxk17",
  "key18": "4zgX868W6A2389wHgxTdjybXtpHDGp9HoukWGm6rkdNp17BUdpDewPQ3GJoYpeSFCaCjAypSitnM5Rp42MJHByv9",
  "key19": "3NwkrLyj8tn2VggeShVmL7KR8Ywz89vbxtKTJqekxcu2D2ZNBHy3NpgJZjkPFM5uP3p84SQDeaKthxpUzxgvpLTh",
  "key20": "47rMBiv8jZuNVVaaHtjFbkTK8AvQ2VrVRXESpUPEEkSHv1eaQBW7BY4FTrCZs3ftTHKSqJvmiH1Evq9DNPTv6fXA",
  "key21": "SSKk1GKc42fzUSD1wM9jB7gp6uYCDsroCsWBtQ5seQEhhPGLK4M9M1DyAQfu53JGEjMwjoBm5HwdcN5uSVhhpck",
  "key22": "3FdFch7JBFK7wB3vBQpKBCJNJPEVTLsB59zbuRzLYYbrimxre8JJ1tYJP2C5ueg5xVvVv2Fw5BNaDdjPFkCYYPTu",
  "key23": "5WgHrU2E1sZ6QJr2JjhWpWeDE4J3aPVRUg1fc91ioHu8b2BWGMBRmVhq31XuhzBFUkNQw5P7wQBRJdYGvsv9dTTf",
  "key24": "67SMjx1Y5km14aok6GaRyXsVyvPJ1uGCH9gc47VKM2UBMrMuc56rqPPjGpM3cMS2LbMjafdHa6vBQqLnTvcKPpQd",
  "key25": "3B7G6LPy4oyvanbqvQBtGp9nhaaVRUGsUwzPREdme3cgbXajFkpvDnu9cjLqardwJYZgKWbEwh2tQfmbZkrdEsJn",
  "key26": "3LeszGbYs631hoGCo4VsZSyKcQyExwvF4Kfqg7T5YFiPkRyA9mMEdopywvheXEjUgH5GaUzKuGeYC86KAh19h3Ea",
  "key27": "4YXtBYvZhqnMQNtNdjju421fqiV3Lymbr5QjRUMsBs1XThKEsyoEDfGnyq1f6pUC1QqDRCFEsSwAcVZ3uM4vp6om",
  "key28": "3eJc5UWMdM4bLCj7NVQGGkddKZ7PjEVGFfvijHz7NJHn97d1X54ThmrqL8oPC4Q3sCgAqwvm2ZvQJqyQdeaJPGGs",
  "key29": "PEz9n7TeSXQDPPB9cVPPFjy86nWsTWo9z3dvXCFL99d4KZP59xPoEDq5VikVcUhDqvnMiGVGy3iKTnThSu6kWpR",
  "key30": "4dFuoCtVuZSEtYcDrmcECudHngPAkUVhZrGa35XwrMQyuvtLFftxKfZC8pyBN5ijsfgxKACcLsTkAt3bRECjNdDi",
  "key31": "3b29wRGnzWes96MgrdEn87ZHoZ4Grsm26M2fjHHpjPKrPQyXgnSLHwhbUoPHgZnciU98rm5cJ72N2vkBXQvrE7JQ",
  "key32": "34ke8KiTMeoedXbLZ2mCsHRrn1bngUG1Y2Gsa9F3JnktBojHgStxE28LhHrBN9ukbEf5YauG5KJM7khDoidGksvW",
  "key33": "2E1qf3xb9WYbQBDtcGf6XK2FvAayXpwN4zmFrSXAo1vU1smi4yfznmPHLGENFToUFFhDXvWhTD7qmtuMFDXz52PH"
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
