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
    "2brzjN8RUxJ7NiUTpVjYLdVunYR5mmfwzjFuFCQcDSNqW3t36MrZbKB1W9FGELLosaV3AXChZWjzncNKaTFyqVqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pyEZSsrzez27WF3wLtR95gZW1CnRCyBeTmMULAtRzkSPdhEj68hMiBH9o46zZzRVTP75Bkjyecjjvvt2TGaiBPg",
  "key1": "4wJorW4UU75yqmTUuNP99GDuCzoexuDkTS8Guf2TPkQrfv1GRWQSsio4NX6cR7iygTpr5pcigwxqUmh5DGCzFZS9",
  "key2": "46ULdPnD6qi5DgLzMoghK8oLRJXxKWmhqCN26WFk8YGU5jfGmmf9irdbuJ1z1o6coFNwo1reSHVqPML59zaPuv6m",
  "key3": "2ok39yPbVSVRU2rNsHvWYywCakHaAqmk95q3UaTwQhtRhqy6uk8yzcGpzB98kEeKa2CRaLmviFDG9fHzQfD2CSAg",
  "key4": "9cVAcfNw1ZE7tDBYNCJWUehgegQ83icmV5c487DmBDurxxUuu6ocPyCLRPP5d9m8oWm8aty7EiSHAsvrthAZXXT",
  "key5": "5q5bzey67TNnF9XMF56tQPBh3DsbyLYAaTvJqAeoSa7H6TRWPfCS3uSzxtahrj83K2ZaoHVhRwbNDpzUcEJJq5TB",
  "key6": "4HKPdHBnLiDxxi3aHZJFTtKHZD9AKiZctDGBo2UnkzQ1hdF3q71WsnCUPHSJXPYjTFuxKwQGALDugzbGDFFdCi8P",
  "key7": "25kjpBZddVCErRBGshsUN8VdyDhJpwSAvWwZEQ6qvhjGK557TthCNvhsCvSk3GHWLggxXk3jDTPsaqSz1Vs9AP1R",
  "key8": "QNSmQGg13ucysv8rTHeaMH4tUkxy6dYC4WJz8aQzpt2wMkKcKYHzwQUzbe11ywan7jocCnAGCyz8srXsBhLHbdo",
  "key9": "3VL31DpYFm6MRzjevNUS3VoTEc24uHVegykDiTsLihbdPr7nX4asG84bYF6JJdMSaMtqVQLqpk4761rVMEH5NsN6",
  "key10": "a8uXDqSPvFhPuc2xSGV8NucyNCVzq2ZdeWpSQ6KqQ336LJkpj6WKfo8CyuX8yPVM4N332uAVvp5SgqatQD5vbCk",
  "key11": "BS6or8N36iJBPYdA3nmwkEqVoynWGPAxKuVAThCSdR1NH5ATeATVnVsREDkpvk1SVGGZPq6PtFWxd4XpiNTKQZA",
  "key12": "2ujQZbXrZZmp7SoXLCjmQuQzTdACVb7dXZDT2KJUXnMRyV21RyFwww6RwqteSsn6NMpW9kXXa9AEbVJAfPsRq53c",
  "key13": "3yE4DndNYPbduSqvFVd5pmfivY8uCD47TKH16PFUTiQ2bGa2sTZim845LmjGVYHGhxviEoNz5kqF9EmAo5i99HEj",
  "key14": "2rPv8FWbtDtYSWX8DF73LBwWnphBnLGfJyhqRVZoACw9MERgR6edY56HXL6ViZBxKJdQBVZtSfPuQJ3p8poW7z6G",
  "key15": "4VWTR9Jx6Zu6P8Q77Uc1E4zG4Zri3Q7ZCwkdbb4zgrptVUYaAp3tePibgiNgT9brTqWnMgmU5g87h1sYE3b6Sgzx",
  "key16": "L8fCAJMgoByyqR5HnCfic3AYW5wwW317i56pMZWYXNfvg7qYEj2b7dBPgtD2hn5FE4sQm3oHXxZez9CUHGbuN9a",
  "key17": "5j6t8U45jxBSy9b3vMy6bYQPzNtotGEZbDHq9bySqZe8onJvQTudiVuDXQDopgUeobb4x9iS2d5NDManX5Gm4r3D",
  "key18": "2JjFubAiDKSeAK5uEzxS8pm6HSeGkGKg4FywcMduyxoK1TTUwBadgyCtNDrZTqo8XnDD9q15EKgARiJ97T8AJZpa",
  "key19": "5aPddh9sxgL6H7YeBamkAqoT9zAR7f6dZ75j63bNHBFkAqbje75RPqJTLfTCcRkeNLyUu6BWKR75b1KPMmJMegHD",
  "key20": "46bida2PpTpHmTqitgWRxXtx6NsRXwPzXRniePqjtQVf6ag5XzUYdVtvgjDh23xNiereevN5ZKuZiHejZ9kHecZC",
  "key21": "2axf4sT6rq4Qh2Sktz5LJqzjYSFf4kDxKtvrjkmcHu8v1ftkpJzh14tr1KCb32mM6YnF7aAqXxG9D6GQ93XFaHBY",
  "key22": "3KLfXZ9NzyERm5cdHDfh9DJwTB67hQifAGPAnSwcwAwkgZRxTUdnyKobPxrzmFU36T4xtVgVcufcefCfDczvjSQU",
  "key23": "2UbtieMqUEM9ndPKndrk9nFAxPPu47aMNnRNwANJswCqvHEvnKQzkiiU7H3ajkEEVEx8eG4XGXV78sKDf6EjnN47",
  "key24": "5jujEnKNqUaeyxdBZhEcX6o9KYgVX4yvRBpfWDpdVMHejuzLmpyCeSf6DE14hf51YdEzWg87XboFTAqqrpDt66a8",
  "key25": "5ti1VWy8B2zaxjpemRiyzNzYzX7TGkkfiaSB3mzPVFxSGFmWVNzDt9h2De7tVCN72wcU5j76PneEoqvwLB9XKA4b",
  "key26": "5EpYT1ktSxfoN9KSixsEMC4mtm5uqLeDJouZCgiKpFdhzkatC2Q53EHmUYfwG4xW4J5et9QK2kBt6eEBeRHhpiVo",
  "key27": "2XdWo9Rde5TbjDVDwgLVeKgthJUZvLgPF428cHz8dTPnHqdpXjWPErtwHGRSCqJz2hZubLSE3YkRvYJGQ9oQGuxs",
  "key28": "mfd9ha66KgPg2hQfENmdcU7AFkbFyrrRVqitqYPkHDcfMZtZqUJ8VFHwdSfdgPR8zpBvFikZdXybzSKXKZ1DJDB"
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
