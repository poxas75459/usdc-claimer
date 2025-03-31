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
    "4Wf3kLft6wNVc7XRsgTuSxEw426Hfu7KjpE75nmKXzsyMcc1GCFsBSEKjJBGr9i3P6tthKwJTPoWUUu2tJnbWDfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsgRF2RzAP6GrYt7wwRdkCZQXq8dMq6stML4gBa9VDroSkK8XRej19N1HwYTa9cuitgXF2FnhJpQApUGS2AzLgn",
  "key1": "JS42UGxsoWcDu1wQyJAGrPbfzWSvw3UQwuMUKKuh5tWykPfmgo7ftogaXwYUa5ssDKS79HNMG1UJDU2xodyYqtH",
  "key2": "2ZxkpPHHgiAoZjdjAnUGfoaWjs2BV4oDX3kBJx86kG3wFUGk2gGauRtwpgBoByg6rBuZahWCqJfiuMkWiGkwpynx",
  "key3": "Qo5Adqwj5hyw9kpq1knyZ7XjXMbPXY83L4GUqV1SLstFsTQT18K3r2TN36Vf9ZqGEBAkjQbit6vMNFfjw5pt95M",
  "key4": "2VPRxMu9TrpyBG9SK4sq9JM6Qnd26o58JiS6vcKqwo4r8S2zB8RhGrbucAPFvn4teLeDyy7Pu6aemWvS5ZRpwNAX",
  "key5": "QzT3oPiWH96826z2XmWji2MZcDveSQjTfmfkA6V5KgxTiZkgC8StJdTfcsVta64vvFPCbeWfw9S8UySNJHgsARc",
  "key6": "24nppt371d34JUyLNXzT4vYYLWLe7ia465roWST1KFGofEpYU43ChLBnKTjxGBE7Sk1svsB77B9jV7AkKmAdndFV",
  "key7": "4SsN1jxyAwS6V6V9G939Jpo1tWfb4er94e48nwYvYJrcoetY3ziyCPfBkSF2wW2gpN9FvDk6e8T9hE5YqsEpfdsB",
  "key8": "5RnKhcz9yatxRMXudEPTDNBJpP9V3NDf4LT4mSRBg53p3728vQwwCa7eHbn3i6noWnk15wTayKv8PdG4jFHbUBq7",
  "key9": "5uWZ43R4SvJMV5mr2o5m7yPCyo5L7dtcH212dWnwkLgn8QGv4Hw5WTdABkLhSMcMWAnNXHMc6hDDjbf3pEGY7jm2",
  "key10": "4DTi8Y5eGtCKCErj8T2rawijG9kXziXh9qkFbptr6wY9LU6jGVjG6FtEczxrcDN9LtG45LvfsYbgR3TJkdb4Vtxs",
  "key11": "3d4NuVSemSKysJmB59toK8FbLNCf7k9MzuVAVgh7YPLSZyqdi7kTtyXpUAbvmuDhhKbBHKtudD5EorzkNfus75f5",
  "key12": "5cwcbpbkqNrF3edsa8SqVBEezknNWGnueaYZukvp8cuHixesSsPPWQF8qmKuDoWNVE7Lqfzm35pXA3eKEZdr86Xo",
  "key13": "482XyCnfKRiGPUjLFW5u3eFTH5GnTM7G33DFMLat5TMB4mbvskqjNnkCSm3y563wUpKgj3vrCqXQFzNAFHFJ32yh",
  "key14": "2xi6EBu99M83sN8oLnx6pHF6MoBzSrvrytJqyjsTfnFB32yt8W9UsuM7BiQVKvAPWSzbMhrPP2UdwQtF9tnhKMpN",
  "key15": "3coekyh9h3y4wRR4tW7NBXEEDSDQC7EpjL6qVFmTiDabkxzigUw6X3g8f3wsZzQLhMtttT5hEt6hhqi945NSqPUV",
  "key16": "4tJ2BWQBt6Kjs1S4ZEUjPvCqiAe9cqqosPvQcGZHqwvSUVtstu4XqtqtLNTgC75rBpWgqotgQZxiV8sUXqonM2zt",
  "key17": "2k99ERQ6QaRaaYPBFkQEexszwVbMct8ENwLtVpmY9vjCU6GHYCQjQQNxXzGVraCrSZkTTPjQcRDbRjQG5hbrJ9PP",
  "key18": "k87K6941UY4mTLYUGxEPaxs2fB4BxH7usoYqX4bH4jryLcQLbvQKvdjMPzcGz7MRtP6auoV7qQvKifqPT43DAgc",
  "key19": "47YoKmad2jrcKHe3be3sEkNEA17kw3EJCXyCrqvwzizQvJp4gtqZufAt74JCCo5Q7Qfj4GP3RXtEwgmtNxt4ZfhH",
  "key20": "NCF9BwiUDu5vhJCuPY5jHjRGByojgZaYgphVkbRXD11RKacLg8LFSg1ak4rmxQuGjig2PguovHxw5o6h18J4GTJ",
  "key21": "4hmNBCrV2UoV4PCd9QjqNkzRW1oJiyBDCpjueMYAyEwktSNcYtdoG9VsYpByXWXari8f24178gr4vkH3YMCsjYij",
  "key22": "5i8H8GXZE2ndroSFJgekkr1X871KG7fCgA5QC32yyVueowFhqXoHoYYNPDKKqNjyDrh3DbNyj1iEEauomx3eASKK",
  "key23": "8QkChAXVTxaxntXTuRUX6d3XX7mD7zmA9nj99L76jA9QwaEuNrAfNsCrVgzhGyz5fGxa1m2pV7VBjzEGeXw57sE",
  "key24": "65pyBYhcZgg6wUzUzSbq7BtndY83bub5VEwCsS2bH723uGUbL21tg4RxBvKLBLVhQyQD9qEJcLZm3iS6Xtqz7Es7",
  "key25": "4tH2jT1dUjDpzTH3U6NrmtgsuApPSEtuBnwoVygAecEnycmxhuXLeTr5bsr3hwJWQMPpKzAapP2wsLxEZGYMLPfg",
  "key26": "5jpJbzkxPpYRcy7QnMNZfW3M7Vu1Srcb4USw4uqirR4SxBd6Wx3FhRntuiLExjofrFLLCPVprWMpEqrQZcnM7Trb",
  "key27": "52kU7Atum2VhEMrWoZ6cPtPipe93cnJkZU63iBnd9pgGp4zQEVqgUpX6S9D9fXmeYv4za1ykX8TFsTGJkeinxyCt",
  "key28": "3ygD2jGGMx6sncrShj3h3MoF8nSceTqWCuxRMz9QUYrtReBJpoKGFuchisPgdq1F3ZKz8EWedWoHn8hTX5Ab57Pk",
  "key29": "45gT3A2f1XK7FpKYMjxAV3Xt1v9gBmYTkiFvHG3Vqtc4T7Lpfpo8ENEgs1bJQSd7w7vSDhoBELSeupSnUppjeLAB",
  "key30": "4QJ9A65rCLgZ2WsnViNqaVEwvT7zY1pptAhvyN6qbfBmZJaSRGoZA3t94UQkhs35xW4FDwoU3kEYvf9vmE5aDfDT",
  "key31": "22Drm4knTxtoCPenT7tH6RkbF2mfiQeZ1r7S2dDXZwsjXqTbu1T2HuH3GKe3ug2GK28xqSnkMc5EdgEZEzFKCNFG",
  "key32": "73ze7AfZeVLUdpStRrxXZxkDCnnpsn1p9kDnSFhvv58LhStyspLfAcyUgCEVq28e9NZCukp3BXmgCVXAoJPjfgP",
  "key33": "537bAJgiYZUphNAagJfF3N2zsF5hmsKphtvxBCjVNYubcvoJJN3bCjutjYZDPN9ZntQifEr8yyjjHxELzsdNECLu",
  "key34": "2dFwL9ifrgjw3p8sSHtiqePuXh8k9W2Qn5nc9fP9Qwqt5LGCsnti5CZnGrKC7HiqcPsv7eBDP9F46UWdJgZMKDeu",
  "key35": "2EvhBw5N4175gzgzN8yNzy6C9Ve4Q2xXcTXc1X9vnAbX332BGHeZUoe7pjPfQRgn5tVUSJ2JcxeqByXjRZWrkGx6",
  "key36": "mL1n2NA6WHyYZfktRfJJ9v62G7zj42eBP43vtdoFBHwgojhQKgGp34a51T5uZXAgxaLJpJB1Pe5nDN9KXnqC5UE",
  "key37": "3EwSGRAaG5MuRi95CE97pwu8k5c7EoaE8bgTWa8Q4ig2czjcoQWcxYWSQwv8wGZBSc4H2HdNt2fA5HMAnXHYcyxb"
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
