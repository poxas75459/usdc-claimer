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
    "7vjGbnQxBmEfpvrc1sKsf1DcvauBrW7MWby39dZ9m1gt5tjiYFr4h3jk8MafRgPz3cYJCSBogHH4jHN6Nc3hkGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvTXukFbfjESoQ328crbTMonobEfEhisZdfG4tprmG5pis8qg7pgfjcdFVYMtjVFe6iy21DZYx4wKAHFZJescpF",
  "key1": "5JfaPwMGcGj4cxAkc2Yhmzk35Ewv8SrK5ba38BMRfHGuPtcrFyXaf5djUrWEuDEargZJHQcTbKFxSA4Z2PATnWmn",
  "key2": "3jF6oG5rXqBm4K5gmMWuz3ZCjkXmxa3ua6WuZpKUue9LD3aTBVbYoc2nN5HQtpkTDmeeQSRPPujgtBqcPp2rX223",
  "key3": "3f3ZUzR9bQk6i3zgSUEG6Wo9kzVtrr778wxsMvY2LRw8hPtL4CiB1A8MzNFBSatZhqtd1BJwLSnvRtpxb2AFdVa2",
  "key4": "5AcTDYtKnqd4UNn975KBuDThfsa6Xj8z8GCbaAg1sM1QpQvKjsStRRqaxUYurcMLn9RZTh7sjwNcAGzJJSs3pWrm",
  "key5": "3Xp4QwhV3MmXtRbYoebr945BEK7xVKrdRodvC8qBcbWtojXwD6asmpr28UDHrYuTH3gh6SYQQTeoVvqPF1RkMX7K",
  "key6": "3nFoqqbtBp3cKq2vASBnyZ36pKZKmuKix13JqgeeRfDDMbHXQMpGoJeJHLmqo4uGXMGu9QdxsYbjDnhE2W34m9C7",
  "key7": "3Wp6ZvykTUoR11eKzHb4Hbb46KLKYS5GbcehHcpZmtZhVyRAN2yojrvJ1KtLrTvREbdgVdWL2rqCRScQjEAJKJuT",
  "key8": "AsowaageLqNYCwRhQWhVuW4MaMHx9YDw9iTR4jFxkziGk3utK8jiqopng8NEpHV71zh1WeRLWCn37bm93YMhBAo",
  "key9": "2bXzKKWHVzBKo6pXM6jZyU2XbbkE9drNj8UREnM3tmzcFxER7XTyeVLWMGTC35u3feXsmuFnEgSmrrsN4hsJNrdV",
  "key10": "5fMwABHL2xgwmhK4tyAEFgSzWGFgiego9UBYgRHDZrSUk56eT1B2GHXe1HawhjMzh7suDW7Jh3DWNWcK2tASqxY3",
  "key11": "5KvN9BAdcKrH9rot7UAsLSUQzQyBcrDkcwtMBv94SMazNoBe45NtoF4ndWxN7D6JDMzddFGANf5vra9S6zz7HYB5",
  "key12": "5rwy4ZJYZaf1wksZUSe3mXNzVDdd19frWWKFPPpFHRseje1aHnJ5duBr9NQppJwyfXp4dLt7bowASzs4xVfqQXQE",
  "key13": "3BA2rt2UW74Ak77EfPo5q1PCqsFz92RgsL8ayRi5KDnCkJVZmLMNqVagJYuB6LpwSvkgzeP9DBFyTjXPuMxryLbS",
  "key14": "CB7wBBAYnyhMQy6jxUTYxiMArVwUxz2GJSv4vzaaBsV3admem8cRdC5EQvxAEib4GP91WALzBM1J2W8eD5u9FWz",
  "key15": "2REmY4G4bayK4j7JL3yLa2NSu5UQczJUYPTjvbx6SsNXXqfQcYPx31r8NGbe5JPZC2Z1bpS5sjrcaTRzTj69fRaQ",
  "key16": "3TVdrPrYFkpAvbkSE92AB1WTUTobv5yzZ1mXLH7FAkWRQpATHdux1NPRQFyWJMg3LAbvE4EVboMpu4Z7SFYbk5nU",
  "key17": "4o4ZtQ9WD6tn3Rvh4toL4FPx9UZXRMohWyqDX8gkShgtMtQ6UvmAvouP47xBX5sp5prtxbFBXAhCcer6swrPWEJT",
  "key18": "5er2KdYW56AxDpWHnkT3M9AoYN5xQv7stCp7QPGcPRK6vpGuk7YqepWEPYXvJJ5hQz3pXd8QpGg1mPRQFvQ7rkT8",
  "key19": "iioi4a9SRavQ7db9ye8Y6yv7APdPS9zSzEV8K9jEnJBbWxbMcEB2EqNwu2yGanoctm9w3ifihE8ZBgyCbPcJkrh",
  "key20": "2bvBCBoQGzKPorDATh1YVu1Kuz9HfCQpc25tpG43Eni3Dmq7MzZj4PZKEJRaBLBECoyF3gdnqXU1bfN4abp5NCBw",
  "key21": "2zK2xB4GRbFfgK2uRqckv7LNwppKgGZ8vqWTM4xJDC87PHJ2cgzBsHhhtXLWfDxmWTskK7ukEEr39Ffycr4XSych",
  "key22": "2PHQ8pfjJzrTFPr1njvofyDSN8pqj7cCSX14C2eMRUrTvMHZEihE743ARF98jGCKdZUvj6Hx39SprcUctUpC3qrA",
  "key23": "4SLwmKbEP2X6oXGTy3rB64BQha4Dm5YuQ39UhtQJwvfZqQKJa9tj8CJEFvy3V3Q6mL8fWECcYQcqELSPDSGA3MJ8",
  "key24": "ukN7kZN8L852WhjvcD6XXfizVoZieeMesXQmLo7N7pok4XZjMgARAdehX1UpAGbSuB3vNGLJLkUsUvgcofLaSpT",
  "key25": "sWtZEqk3dyJF41N4ehKk9SM4JXGKxzjzL3zxebnHBi7KZTwsopr6vR8w8uPGiwyUeG3FAhUs2cQGZCavPFdDXVW",
  "key26": "5hunuFP4ZxXLayLrXzfmbghQyuowNFF2dpy8K18NYznNTwUUf9gEKTsQ2K32qpPYVmeykfzEJGuz7cvmZEeTxbPq",
  "key27": "4fxQ7UCJVk9o7fXCVX8wYZESWRLwCxQPqvrmDBtaYUKkcbvDWCJfcfYNpXAMShPqXX5nVV5Cbh1Lsn9ZpdvoKVki",
  "key28": "381tQmRyJUACkFc1G1aPf7AcTG8cuYuJMdSwsQwpVUxpBArzxQu9FVoed1wvmEAgAch4TLtRjAcBXrm7JyC8RQb7",
  "key29": "3Ak14KrwnaZVDMtBc3UaH8zvZWgrwaDSDyXWiFWTZdq6G6HJzY7wWuQy5pZcbQPs8VMMeh8qJTz9ZQbmcA6gkCAN",
  "key30": "3ac7kRGnNLtpW2GFxBmKrKLHaA77KcQLjyRE9QWLiDfzf9aoeNFzgvPMqQmhqtBLi5hDJVVdTF1AMGAgtGHX2drz",
  "key31": "45jDTAhS46LAZW128PbatVHyYT5zLFbnMy4dXk6uQZzKBSQADkFWQjRePA3eZABaLs3npZwhHWo6a2PpjpmN5otj",
  "key32": "5KA3iLJQ7qvb6xs8L7unw3Vyrdyu7P2cD9X52Ak7SaHNxnYTacwZegKAiaijZcutrJnQbugfHCded38dBmaYnNor",
  "key33": "S92Rfstxkbxr99za5rCwPmVDdaWvWBroY4GdoXDSVw67kMg7Af8NbMZnz2fnyFLei6754bFUKZhdV4ibchgJTRK",
  "key34": "2RKtFdsNgNj3h3n1PrsomvJV3PwHM6XrhmdFqXoXBuoFfZ5vwzVYj4mJA2mvibbuCpeUibDtJrdzCqXeR45Vz2pn",
  "key35": "2MGUrmByjmMKMvmsMbPWaHzRHGSzn3GXM6xEMu61PbkaQgVN7hvMAWuExhy8w6XFBJ6YFkKZwZAvXzUvcMfHcKGr",
  "key36": "2hcVa68ozivaTmy8r7pBcU5sYhJLaAoVo1AqcBs13macxLmxP8MTM6moMwbex89Bp5AQwYXpAuoyyDLneSgmNmMH",
  "key37": "5VMUoKGYVtz9BjrCkcnDpFx15TRJgHF5z9hnVzBfy4yxz19BPWKoyjtiSGnJ2stqPMzGPPHHcjkMTdzeSG4eqQJF",
  "key38": "3ERAH53AzgzxQX6SufrT86hXsh4fajwivNxR1L9uJs2qCaWZP1MSMkLePpcBPWhpzJ2sb1i1c9UEKKNkhNZExGZV",
  "key39": "2fekiSrNsEvNUwrj3Yb5zM2BMnjZ2Jj24oqcwTioaSsbkeHbnv8LvhUim7sgbUyxfDpT6r7Sasgc1cVszBLmMrq6",
  "key40": "55zQ4WKoDVX87pD6N3JBPv7w7bHEefvY9Xapc48prb4KkQ2vUcNRb6y2fc7ofNgE1dGXpCnwz3u3UDWLNbWgDGKh"
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
