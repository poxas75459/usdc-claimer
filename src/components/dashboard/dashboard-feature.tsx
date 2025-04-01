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
    "B4y3ht5WnA3icwW9YH8jPTfVPKFeS2x5HQQAY7i3gjtTgbMXMTrjeS8uT7NhjCUem8uyyZFLAtL88SsY4UAg9AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EnZdaRqxUUTJmpMRv3SSSzQLsm5bSiAGqLmRBa77mtw8fNvrtaeUJe1CJMDxuVcmbWSfHgYpBp1KPB7pTieGF5G",
  "key1": "4JL8sKvdvfQwWZ7LwGaGdQxSWnvxP4DAG3vK2o19zv4pw3sVzq7W5sWygJjQH32EB2r9fVGBQQM1w25xLwCoACev",
  "key2": "9C4Kb8YKLgsACWgQegVbTUZfU4s6DfLYYojgJCVanG89rANoG83dPjCYvZ1gHyPxfkgCasPhmBCep7gFmi7h7uC",
  "key3": "34Xd3SAMDww7ZQDCSAgSAeTEfs5bPFYan26ceRrLbeB6kGt1cqreSiEVYYGHWk8PGPARRETvzxBtdvvNsJaLb7qg",
  "key4": "45XERZpUmEppGsXsJvQdkfVeZPrD8BuNuSb65SjAXoW8L1QJ6pn2G3bUEeha9x189jJXhJZVw36uxEoiW5oZuBt5",
  "key5": "7CvxvDHKSsooNQ4acGErQ7gvBNZM8Q2G5cZ9Jaos3gFaeZygEeKNiFSaxuAAaJjTHwUPRbbfda1rFxU8B2SbpT7",
  "key6": "5Ux3vqnYsKv9HdYgfAiTPAmy7ib7C9ABMiSPTe3xZsUSasnFPGx6VtUMqJxVmwWXgpNTT38LENrAFytLrrHJCbsh",
  "key7": "jNRQA5dNSFAgTm5dKXRthGgSfJKGr2eaiJqoN7JhCLrRaRApDwjvX5pm7hBRoF9kyQ25D6bEDNNpqeZZXSxgGPz",
  "key8": "4PPJFdVSRKf5kDY9uoSw7tNveDt7C1agoLvn69z3TNb3tV2MHCA4eKgJqgdN7xpXnUzY8Mo91waUr7gsagEnacy5",
  "key9": "5Gi4K2wNRPCLmaQxDQoRD3i9qxpBmW2h5yX9SCthiqMLnD6sTiFSCSyMYiX9xCdjz4KZ2zhgtHvjamgBepAHf9bD",
  "key10": "4rLxg3gZGMF2FybJhjPnPK1EtbZQPosCayuX8ispGB7cKWoRAH227wu4ZShs2uiBgMCh91P64EucJC5ay1brkw2f",
  "key11": "21rxdMhZ18d5oan86EHVbzZcRNiJ8rBBGHCFfuerkRr6QBkPCU8YRPNSFK9wsB1LHFvcD9bRNfDqiCjG9m2Z1NTn",
  "key12": "qssJno1T1VVnLfVAS1LpTJMwG4xkmRyr3QTa1fTBM2tzH93Mffw7ayVv8UxMDDSykCXr6ktypHDjXsYRmoGf3d6",
  "key13": "51AELaz4uCPnvd2pWk7rcYCizde91hvxEwBWXKmk6zB5YyCT7dRt922aFq8Y8akLm5sPeRdTndLqLXD7iN5dFASy",
  "key14": "DFnStJLvCckq5XNAH6pNLFbbFBcgWruGAufEWiY5qTYpyMPz8AcSWTfSzCT7wMUGLRW66SppkZr7sBsmCkmLeuv",
  "key15": "2s1pzf5gWLfJrRYfXmg6P7x2jFsLNMWEApKXVprZThyew4GD136KhrKkgsCCQ1zQLbe8ad6rzZhPuKGpvWAqwrqy",
  "key16": "2m7Lw7nMUgCh2yUBsqXak4sq1iHmVk1Synnp8Vef3NNexiyBry2vokkarMXznAMRHs7wjBBQKwbCFFwh24HfTY7r",
  "key17": "EL17vzkKWD9374CvH2NB1Hzx1o6peK2rPYQxSg12N9dtei6iCLzYFVPj5R2MNBXs3Pvqr6LpdULEiMJNJs45Tab",
  "key18": "4udLJcHV2QBcJe9encB1ss4hHaQL9cUpRj4ukrCWSx8r1PyQQCGUyuvAD4sfKbvtvVSoDLWqLDniU7Pa1ftVS1oX",
  "key19": "2udQXrDRH3Ce9Vt347hv1Yv55ai76w6puXPtgyCzQ1gvLghrtV1gQ9ZZXorPT7NNiVLS3v3SNCcTVdkcNjtDvsP6",
  "key20": "5wPg1Uq6FSrAJpg86wjPx3LwiQHYwUhJKqmM9VQk6vKYSkP2DEpy7iEG3X55o7nxp5o3y73dDHvrENtT9NX191w2",
  "key21": "4bXBxpsNttjuoYEBELKe3aXoocjDa26PZ2F2x7rrJ6fcdocGmGfnHxBu5i1ZgvxCWEGPHwRvXmW8NQ11y5TQM7ZP",
  "key22": "f5gxsmerbCSsMoLfM1q2Ukmpm3QVvjVM3yJBQgaPPqXbBeXRd1Na82Bnzuos1uehCzRP5Mpo6RAzVhKbVN7bfkC",
  "key23": "3sP35FMmodHGetof9KKUqJbFoPuYFj5CyJFmPy2RDSm3aDpsBHTTWDQGYsR1R91awi5hzF9GdKRbR1nrZnbWpE8t",
  "key24": "5PcyYGBF93J9mJJVcrXkk5LnGLq5LGT8obi7fKaeGEGA8LhepScS5dvThwggdk2yUPpRaCr4ogqHen8fk1gGbfGh",
  "key25": "2xuYPPCUdb8MaMTF3Kf9U9LnFieC7qgW4uKBYYq8orUXQPLBf4jHc6hZyy4K51jDUpPCeJ37MEs2799nRewGtxBy",
  "key26": "4rTFF14iyw5kCyh1LeTHhDwr62y2wjh7kRVe1UJ1zvJoTkGyQEE7gXLQjSoZEMT81tBRBAUhjavYf8SZjMtN5Lbv",
  "key27": "4E86oPU1xuB8aTHJFRfnhnNFS6VBL4Ft371gK1ZSiC5e6poitPpAhYRdiFZkrjuPkuBWA4GjhDuXVYBMy9eoJYDd",
  "key28": "56uvwpXzNu9km9tQ7eiKKv6BsWShLEnTv1HFX9VG1aKXL5rL8SP3Y8F2LCp6BUVcB51cLCbbGfoK9yV31wpoXvoy",
  "key29": "2XKc6uSQ6i25WepUcARzEwmF5Q9dqJtmb9i16G8d88i4xmzsniNgUemDdQ9bXdJk48emSQ9zHiBJbDqHb3JRU7ud",
  "key30": "4i5UWLKE6ADK3Bn7CYWsrTPc6zMMQm8yJ8ZHv1zSiehuEJkFjTz3oQYJb6Ynqdo3cuFjdaYRCuxnVSW9KAoYiZKx",
  "key31": "a3r6HJhKs3HZXHAZM139ybA4uJZX3iHEtihCX9p5QHkcwAYNygw8os2ukushAEL2dDBuJi2TuaPDjLh57uEJFL5",
  "key32": "342oU763AmzHbiS3n7WHdvENZnjQMyUkzdYqFMuYGudfrsJq3KiJUC1thMd21ztS43dFxpx6832TD6i25jVhZELJ",
  "key33": "4TtsTKoU3C3WWTaVfp2khr2itnFJFbQZwXJBNHN76Eha6gsHczEVtoX6eUhMA1DtrZh9YvNArhzcdNsXTqhuVZRT",
  "key34": "YAtCraAXAKya3SQbrKiujYeD3DwkRE94q1JnLmvMbjhCC7yAQBHZVCthN2QQsyaD23pBXQENheyxKwMbuZfKN1h",
  "key35": "4uCCeeV1YAfiJY9RNk92oqGRowqa7rA6qJmGEsAjBEZAVxZenrKp8moKBRJ2hHrPgdEcdBRpoDCGcFieE7xLj2jP",
  "key36": "2XeWzLzqB8wkPif9V8bBsquwWHL3V3SzKZW4PAaMn8HuRjEHayL1H1oaAKACaPmDmGioFdmk17dB5HsGsnxxAaUr",
  "key37": "4JwuG76NBR1JZsPEFthLgvLrZ4RcSueutwvmBksY8gTzTwgTfXpPsgpy5SQAPsjxxaEEfFanJfuRSK64YkJDFepf",
  "key38": "1BY4rsCttCdaPaz1oeo2CRDJxF3MMLc44uWeQSeyFXRvwWWTjqWy5UTzTssLWUhAtM9JX9qckL8K8JSZekfCmav",
  "key39": "5Ptmqt1VPpmxFBtM7jmF4yvXvurA4Yifd6cAYGubjAwTi4g2ECCZULLr93xPrUX6FFZjGpEiufCaQbtrEGssZFGs",
  "key40": "3imEXqJ36VyMhrMceHx9uqmCXKPEYkmUJhdubXfih917eRyQGwX2M53sGDHRZ66g96hpzyB1SGxgQxC3Gi4fYtYD",
  "key41": "4tYch9MutvUgxgKEhZcZQe7NS7DcPj2FZLnKPnFNYpDrvbHVcqTSZe6dwchCgTxZ5vnWAV9EBqQop7SP6VenMWSy",
  "key42": "2uEnXxVwjw34MuZTyw44xzBMRSJiV2G95ac2Z1bNZq29N1mJdyMyYG8fBA4LLaHXdadyQUMRo2avxXabBXHQTuCa",
  "key43": "2nuXNVirUcGzeYYH7f4YNnBtmiD8xc4teziKjagRMaYSRMPjocYkzCMceSJzcn1u5JAYXDxDaqB1jHiPP6YBGTMp",
  "key44": "REFfpLhdZPJm9c26e4tntbe2rkxfqEgKvTQSR8AJ5pFcZ5ByHLPKHBpzjtWMe7MYkBoZSngh1oxENckdJQ3ToiJ",
  "key45": "3DZY88qTuaccSzvJdu4FGXU2widyZo85YNuqL6gUvFxu2SsM3HPa5rcTWYDFV3ckpfGDCCv3pqSncWAUWez1awUi",
  "key46": "4ti6f23BRqGA4koWPn1N2bd3npnso3VCDUD2SmQK8iM7MGvqa6T3ySqsnZkxVKFazJaY2A1aoh19zVBSJaAkRVZk",
  "key47": "3c7NpYwR7Tnz1Cr1PEo8oiyvpjzyYuAbQjUBa3FKtoZPCgJAEZ2B52err9gykFe8TrfcEXA6xftHVPGQsJTED8k9"
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
