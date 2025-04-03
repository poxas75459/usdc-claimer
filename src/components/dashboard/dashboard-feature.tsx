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
    "t3jG4c3gXoDrp8aTL5Gs32uNwSD7mzLNYj42worxPsJxGqtuN7zcdBGDkAVwFQy8XWECHNfpNVBpL3McGCVs6k7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mspcfmJDyiQkQ4ik8LiEK8ojLXBC8hhxVhWEVTGyDLU9KvyfwHBwDMbZVMG2ywMBKXTHBxW5AwwKpv6xHiFNwML",
  "key1": "owppv3nBHvtVGE7HsiymCd6iArfDzm8SzSEukbys2vLMMxuxQjN9krvzxAGhym43FwJxyZG6ksMinTkzWXiKvwQ",
  "key2": "sZApJfCPV2qi6769aHr16XKLFbWp6nMpYmoUjfxYeUVR4j3C6UARaFNpn6nM4MuRHALFYAngBWhBfnogp8GrTTM",
  "key3": "22rsqsY81JqtpZKwDHN6QuF5FJm7Bqk7A9ttDwyy6MDUh16xdbaz4PQzJc95uXoxmZBn4USTEYDiKwkCJymSjucX",
  "key4": "3vXvXLDt2yuwVVdN5bTDgGe3hH33Ntn8Mz9wvnJi46qjfX8frihmKuNRgamE9SdSW2RP73qgoEUDUoojL9zxVqPQ",
  "key5": "5JQyPSmyjuy8ru1cUniBChQE2MuwAxuwX7y1nkSfZUJdJLSYnfUhR4bpsf6z3p6N63V53xPTDE6QQLcPg66yxog1",
  "key6": "23PFDH2Ev1FAKkJAV4gng73f1m1c4dHW42yiXWJt5okGTTAJnFnuxjHNQAbMTEAX2335k5DYXbjBsgutztnw1GL5",
  "key7": "3jaRKG4ZZrye6eGhzo8xutjGiqMKeQzuazeTgtDavLarRftC9LLf6w1xi26TV8DBsjnpqzDs4HqtL5n72KfsdRpE",
  "key8": "4v2Be1p9juFWE8TTwaQhN5t8NSJMYozVt9xXuPEWAStEQSEAd622SwhMNWvzqB8u5wv24PzXWXcq438c9ViLRpS6",
  "key9": "qg3FwudpmRNXomySEiSrfnzGEtaqUWDnAx7ZJ4L9gqXehRgBWKKkYVFtKzipNsybesUzHgC6UZXH3UoCxkYw2gG",
  "key10": "64Tvo6V1jxVU4PPpGeT1DiRye7SSANXnyrKuEzocvBgsqkXisz7DTdLQpFpdpgBXkBj3YwNHbDoHZrxyJmwzLjej",
  "key11": "5neVqxgB3VWsD1X9b2fScrAPCd2EBsXqZ5VY2zumVvs3k8DTxEDcYW1bpPJNvrTu39NnuT5nL6ZmtAZ17ZVRdScg",
  "key12": "2XxFhEiX4CPWNtJvNSBPcRVjTJXUiEN6mYYU7M3ozcoz3YJyr99sMDnQRK3q4g7YM8JAJL4p5aprFWY9DYw14XzH",
  "key13": "T8bJ7bcD8Sh52hMVAhrCyZ1mAUqCdKModwShS8pCAhSSb4oX1tdaEtPfza3A1i3iP3UW25UingcjKe3fatfSHjt",
  "key14": "39Je7tXqoaEMz8NwzBZR5rQroXUF36aAcdYXqMfU4kq7WvERcSRyxFgP3B2w2ZznerXYyxDXkPUNwZzsZhSd4aDc",
  "key15": "2grotqL2SB7PscvE2S9S9JxgVw5diuSqwQGkRDuCHeRDDKA2GGCtmRCcEEdxTS7NGpTCA6a4GAhR2NDFS5gtTo4H",
  "key16": "5z1p9x4ZWAB9bDYvvoGjFD1NtTrEERNGt3NHZWKo3JAGa2H4VU4PbdgMUq8qjStCBoyaPwJPdFbsVgk8ASX1aSnk",
  "key17": "33LCMWhwDUh9WLwafbLyyzdTguACakEv92BZUjE6eAFFbhWx1op13Ndp4WndbraHLNHe1eqdSuch72WcnYWsggDC",
  "key18": "39sB86tVbdaGqpvaVXiZLBmHbFa1tVX8WKiMwxxDgCT7YvtA3mGMPBeW4YqUwZ2bh8zUcszLjEyaBdYF9jgb4SmE",
  "key19": "3HdD35eGAoBZUv66ySMt2LAumLkGSy94VfKi8Gc4U9BWu12GRWMDATebUUtDbV4YLH79Bk98giU3Ns2cMZWoeYnj",
  "key20": "3pGLYw4kE6FwyTXKqvu7krU7AHjbtHkssk2UGXTZbH4RDexXfGsVELDRu3zaK8JbsuN4frvzL4DcJwSRgdJphSBd",
  "key21": "2ueN1ZBjEtzXc17b6d7shvwsaNPaMADwLWZvbPz49j2pVt6XjSkRaFeBvJgSLU9RHoCGWSBii7cgH4eTJ7YBAj3d",
  "key22": "5avnmTWbLQg5P6eso4wXrx2ZpaM9a2JFhDcRYf8HkaiwvebTefHdUQzks3HfvaDnM12hWi73T5wfGy6ibrHqYSW1",
  "key23": "5jUxmbYuQ4njPSRsieHK7NPWMtGjVuqWuqyQZymJzx5sC536YesHgGLTRR3P8C1XUkEkUgPdNieXqVUHzgnDCZwt",
  "key24": "2kbxaABktks4z13skfeL1yzK15vY1d2Etz9P1E1uwYmeoxV9ggiAk7RQTeq9chCXoVmDypskjQg6iKhU75hv3Zvi",
  "key25": "3BhLB9E1kSGjiDeGGGvsdcJuCUuMMpsToaQHNDg5ZgAAgc3BLpCDmFpr7WPe3xb4WWbFQHEkYYSXzKutBE92Bf9x",
  "key26": "5uJGDUy96VFLVHTdwBBDnVifatcWm684fTnFwBa6zLDPNCxDt3Vxbt3bwRAEB9JBnN3ZdMAmQbYYCyKYwr1qwNA6",
  "key27": "2cnRfsrZvLuhApq19aLtYTMH7YNRxhGybE6EVMe98a5dUd8TVoDkio9drEpargYLtQu9pgkRRDYDo8dfsWigjnrt",
  "key28": "3Fxx5jgHXSjoiRqTyc4Q1LT4eVuSqvnKUsj8V1AvBsTgfhSZu71EkD5uq2XbYwvDYhzDrN5mAhLqnoWfi4tgE1Rj",
  "key29": "4AT45DNcfRkTTz2GgRD7yNK9DfrmK29c214MEXhyWzs723Xrb3LMpfHhQ3HFWe1NkEWKFe5VgNPY4MaDCRJGG6Lw",
  "key30": "5RyMsAJFGtywWHfxv4p8fLUkmv5ZAqqZWWzF6X6kj761PkUC4N6926ynFwVoK8DSMZZ8hrt9Y7cnCTHuuyVTBhL",
  "key31": "2VxFNWQjeewpp948nZKBrMRfFLEQwq6vDcgopdD1Y7Rk3j1D8KBDwomZnJkUYf223zz2g7LKJWqTx38iLPfUZpjS",
  "key32": "5fddFu2qvUvvSF9CFuipcZFmSEu7wSsXoQjZcfEmDwfio36XJ9NgaZFQ7hHVKT3MuQ3kwb6Tc4KgqRewyQaVvvZn",
  "key33": "3BSGUfeSobWbnwiaFRt5YymVJbbUuyNs69rQj8TaRevD2xVCpowfg8WhdKTUvzWFwHwrifs7F7torEZpprnQoikM",
  "key34": "wDcEmFWztrHupCcjD6Fc4i34epnjtkQe2XEoAmqNPZtrsAQUddgySVcLjYUMtrFiaVbeR7V4r1v2Gy7XP4TQNR7",
  "key35": "3H5NMxsB9pcSQy8dfnVmpExUJ3DhGSjFTAAvyvvFfpY91PLtTwAnfUdM3TZSA8cDiXzERqX7TQLYgJJerzaPwjTt",
  "key36": "dKoMfjBViyFLcg7Afy73MWJySCXjrPXVTE8pDNDyCXqC13VZhXbqqvgADK3vAid558AgCcxf1WEPyYTBhJN4bEr",
  "key37": "2MkyHcKwUx4YFzPzKZya9HydyEE2gj7EEuD7B2SS6xmZV8XbKm3S9gkcV1c8975vzowB7FrgU5zcXSmJDpZCUMBW",
  "key38": "4bT2J1iSnxowEvxcD96qz8oQqHdiyCuyX2jyPt8baBeqVzLgA2b8BEnYqwsjbaK5uhdyYvV3m3i4mfpmbNRSENHy"
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
