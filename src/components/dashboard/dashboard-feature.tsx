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
    "3LQy6h4cdGNJzbc9kd3KavTqiDv8sHYkPLNqPMmWe9WEEPuB3nLkekYEzV2JotDjucFrKvJ5g4REneqTZbNvBmzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TM94pGHSAVBXxoBn7DxKvAZLY69vB6T7CfLgd1cU2jU7r76SVdAEM2xQwkFSyrL93ipbqA4XdcvDNf54z18S1rN",
  "key1": "4sc5a8ENzeMWF8Np4GBnKKLBrFrFzVEQu8rU6EotzRjJmzGgzSDPHP4RFsNaiJoWM7wiYR87fbs51HkBNB1vt67Q",
  "key2": "67Ri7rjvDZBDmBttrSjDbFG6n6nUK1jf8sZvi2Qd2tpWbtXzUPAwuzedndLkCV5opR1MxTXMvTsB8ZTNNKdNdhLF",
  "key3": "2kV1W2FtR9F9fBaiaJnQcgX9NPXgD3Zqv4ci1gYhJgSoEC5z1uW3WWCPBG5N6DKz5iHNrSwvK2uAknQ9Ag32vT99",
  "key4": "62qWFeWLbSLtMyqno5EwhvkqexqSPNywrAg2sQbjCvJKyWg5iLndSjs7xjQzJx7FHkiEcSQi2HLSX2Er6J2KGaXn",
  "key5": "4FWtKJcNq7qRJTxfE6Emgi7R8EZRP2VetYn93ESz1We6ranjUNXmji8H7bGbBHBjdmJB7p3bxcDMBCV3NpKN3zam",
  "key6": "46CvV2M8uZ41xJE3E2VrWpcMDyXxCVzffe98s2gQcYqbXP2oWw4nKVCEHTG2Z7hYsJpDJeKb68RsZn5MG6t3zgqP",
  "key7": "3ZeicsPJuieZ8TDTsXGAbfGjD8sLxMjVLCxPrRvaJeAL7CAPcGiHQPtrJfopdbLMeyS9hSHHJUYDeiWwgS88BBTr",
  "key8": "37Dw84AYJLw1P6vS2YnLLaXsPCikjmZiDxoUNcnPLxN2KFJmSdp2JfywBFMDYAfcNcR5YPpfUYnSY46anEb6A6F8",
  "key9": "9a7CbL9eqbAfbUaq3DCKpdH1KiJpm4QzYfpWfnPYtQKu8bS5YyddEj2V98Pb8i7bzBxJbXfMBmL6gJU828PaUxE",
  "key10": "3s617REoUKjLST8zgkPsiWCLwYPSTZrDTQCK5PtsXCx1K933CiFHuLsdgP1QskbsfGMeWtjfuivbUtsKbpMwoKrm",
  "key11": "BzdLmkyEzxZTPaUThQ1f86jswXhsJ4nRXxYKQM7wJiPu3iTupq8vwVP8uK6un11vrcVA8XVLzBsuGgg5DiQ12tx",
  "key12": "4S5jA2MX4doxBejtQ4gpseyzHrF4pgMYfcSed7JBmfdVvThsKoXMvycKZSjAUcbQRcyREFDgywY5jWmQv5NWmFwv",
  "key13": "4RjUe168ejgxNgoHqaAamDaZphRVPLydPA1VaZC2PCnnaoDPXazrbAwGsDdtuZBnSSk2xESvLcq2y8ZZm4Z9CT7i",
  "key14": "4rjUvoZdMJhsCWVV4coiNHTg6XHRKw9tv7wH6smmVkriYFswfsr9pStHYs94DXYDekqs9eKvAYWPVHqbKnQH7QbD",
  "key15": "23V2cBmFoNCMoYX8msSaR1bE79YuYV6iTZnVseFqSdLmQc8RXXsiWGr3gwuDthKbBpGN9sSnRkmr17EQNiBeJT6p",
  "key16": "2RzsiM4YFDpUdA7ZUoYV8Ji3En8Xhoyx7VkvapjBasbxB6GG7D2RViokcU8uTt2XMSt87p7VuJQgGvzVo5r8Hr2u",
  "key17": "iB6vsQf4zKfR3Nvvr3FsZPHvSzGiMWPJEVciyvmz5oEMM2rnFPotbvHNT2qSmi7fF1MPzt7QMeRpRTNWqLfDmz4",
  "key18": "WccLDFXJWTcMjjV8SPwHzBW8m8wT6WPHhobhYjSY6QnwwPaRk8Rmy4JoJMuFX6twmase39QuRiEwJ5jPHBVGQLQ",
  "key19": "5z6cY5UW5Tz3KjRnVEwRVpFhvfUXidPEWqKpJ89ro4FBkwLuh15nF6UtdymLm9Fmort8aHTc4B4RwGLufsNTvF8K",
  "key20": "inrrdzTC3BXp2oesEyxaGY6kUZzmcabWW7JwvCE8LErYZ1EBPghZvewVs6BBUvrzZGzJfc6iinzWJBeYfH4VfoR",
  "key21": "4cx1k3xkWdG9VPzQeKepPCJoQDZrrr3wP5yf9XAfZpASZoVpEYqTaxciqaMLrLV9jrYQiVaYXATXzeYKUoUXZMs1",
  "key22": "RWUYYyPM5VtiUwNrZPqffpTQj6tVHipnSJpozEDJUPEY8Rx92BCWHAu8NsckiikjqC8eA37xiDpo9B1TN5DsM3n",
  "key23": "2xMnbS6fLqG8brCejfRmcmJYPgaQftEM4QShQ65M14ukLet9vhQeH9mG6SvE2FiS9hbefTmyBwwRG34MKs4HaiR2",
  "key24": "4MMUu5z9T29FN122bse1npkQKDPzha6JjB89GDPGpu2B6AU7LmYUP2dFKQcCzW2VYUciubYJwKZXXrxfEBRemH58",
  "key25": "4DYYRvn77WBmYEi452iuxmopoidmjhEBhiY5zyRYBQqJAA8vFyTjeWXQbkX8m5iLaDJRY2SokCrqpnaHfRwjBy6T",
  "key26": "2HABMFvHPU5gYrcwzekU9J3ZaF5JVb57MTBJSM26EV3VSty8BHt91mLpXokdCZ1igBxref8JPBiBxQ84GHfwf91",
  "key27": "24q7uVkkGJK6UBQypJNUkUQ6g9P8S2T7VYnUc8i9zK9qqwmDuhKjgJ99RbLHnWyAgwhjbpce6wPT3N4vPQgvBMHY",
  "key28": "SYU9imak59nLhQe5ytGA5JdWex7QWdvoQfys2fSzuy2SizUWVELA1moZpeiv5iHAbJUSusFUg6v8yTAbKF6BuME",
  "key29": "2gMofKEJCwBzbosdyEBa9zuWj4gs3hT25gs3SLKsg4NdS5ifML35e5pU3PSuvCP7U422rUrnmTrCEC5g3MAKFVAC",
  "key30": "5SHbFejMTY3EuGCCtt9oTKcA6wDnxeyDt2yasPiTHPdmF5MGDDhetqZmozopv6rFmVgwZU5q9xrApu7BN93HmMES",
  "key31": "61ke4L6oLLseMXDWftYXVB1Lhp5f8eWKYSMH6nYKXQRj6PDjhrJ6oUjgKpNirNqREVMW9BWckAYGNpQeZYxLmTL",
  "key32": "349oJ7J4yfXUpuwtWLRGT17etdrjoGBCU2gRZ1yf7ur2huqeyywz9fRNV9DmvsshzFFy2QV8Jhz9Nr9cXWj2fMFp",
  "key33": "3uNd84PFcNzyCznrFLGihunQovd41XYNhFhtTbCMZoFm8ckpbdEMbf1DzoWBorKjAXEasiZwYF5DYevvoDoJmvPJ",
  "key34": "3f7JJh3TwA9RKcnF2knYbNHz3xjR72paG3WNrbnHy8zmMmx2tgxHSjAiq4DFPF23MmfLnMMLVrSYyQH5BGanv8q9",
  "key35": "5rxLatHCjpARzAmoxnCNe2WBwyRbE4X6hnpN4jryk8UfYXhL1UomTEEGUox65yXxKbNgqbtjapNKY6Nbzs5mDz5i",
  "key36": "49qX2Cn62oufSgFSNN56kwCu4s9ZPakH3PDDjJCj4CD8CVQ9fsL3pRNkawd7uY4GqrGeCbSudfcC6CQnFyzh6mjz",
  "key37": "67fyZqg5eWSw6qFhZedfnLUZpFAKxAfc9gGEwaHCYvyDsBC3Nk2NFkJ83KKB6T6QKRLLFEEYCS9gfPQRpwWVdqAG",
  "key38": "2X6EJoB4iEgrGw74JAxwZExE2jWLkEiixfS9zk9qVMNTK65n1b9nCfmqMPzoyj8mk6ATJ961WBA8Kz2HDqWPZLMS",
  "key39": "5Pqz49j6SuuHpu6s4bvEbs28z8TbPteLfBKsgpo2J3AuJyiCeiH1GGTzeTu4Se1T1XGoVxCVdbJHqvAQ3syQ2CoX",
  "key40": "q7uB8ggBMgDpTEttdTyAo79itQREKkKE2rq528DDUovgt1gwZAosCkmh4g6CywC9wvL8gEchdxoCW1tSiA12jos",
  "key41": "wBrG2BRquf7bzb8bvbKTZk4SHrcgW9qqYjHDUVjJu4WbMjTCcqW1MDteLRiugMh4aPsjf9XJ9pUuWFsvp1YuSLG",
  "key42": "4AhjxJqjNX5cnrr6bTiBBszskGsW7sd2ZV92uwKpfShkqYWjWAbN1WyP5F1NCzw3bdcGkb274SoWWYk3dMde8jiD"
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
