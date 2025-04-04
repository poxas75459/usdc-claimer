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
    "kZqLTWZ2sqbbe2AYNdMCgoA4DSNKoXqoEKihcQg9H8JCsJEReCBm3gS4aGK5iLQpyif9wBYrnjTdLK2PFXReWQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GmWasxDYdmPDjaEe3vCWZgheFSRZLayxXQwZ7kwjgXncZoP8j1gEjynvFXihCFntNwMXztzMnPhECjAEXrHejrt",
  "key1": "4PUGBQKN3ojNXMyU47fsfZJnbnV9wK14VCzbJCJVRBMzvanN7mm12eMtBywLyQMSghYT18RXMk7Lt9Lo6GGXfCUo",
  "key2": "3tS9BVjVbS3BGbehydf85yEmeFxsQ4fweMhQiXD3Cok9eDy5CMsL6LtXNQqAHsLG8dUmxHkwoyPhUMFPMADjRbsY",
  "key3": "2ZhB4NbhEDMiqacmgT9mSP44vUiqzUjDzyiAAd342o6gpS1PTXzbopof8m7HZKL52NSuPbJzJH7DVJMo5FhyLZ5t",
  "key4": "3JJzVCdq6J2GdonRjLoLDCP8EuVGKdjnWFnJ4rkVm5gY644dWaMpYXY9QfzeTaLNQWnTbp6rBwSNkNbdsqVmF6c3",
  "key5": "6NvkumpEAuK6K8h3Y5RQaLcds2WkisRPx88xwcQkJGZDFkca9X8P91Pcx4nUg1XLcuetiXRCRSpE5WJeDb2UVNT",
  "key6": "4axAcXGfuBmmT9Xpe8jw3QyUct77rXevg83CNPYfgnjFSwQBLnbNhhQtoqXGSUwPVadL7cXenaCER2ASTUwaQyho",
  "key7": "432kqFcfiLRb2uL96vQdWG3FWoQHH1S2WvDZf6URi9L9MtViSbopFdHf9ktNv9hxejGFxiWCXVRykvp9YKHuobgN",
  "key8": "3KCWhn5XAHtWV6w7narTv6y9kPhBoJZLjo3uwMeCsupawaqSPFtyV5wEsaFoBJ6txaD4mwXj1JncsKZn5Yv5oJEP",
  "key9": "6ETFD5W1x9iK44NzP2W2UBZKWyiQG81ZAYieydz6U6WgmrVZikoaTfRYd7CTbv7ayQA4tMUpZqzSnBKhisKwB7g",
  "key10": "4x1f9eznSceq5jrzthTCypi2FPRvwcVgYnh9n1KKWiqrmUcpBgFSrsje7cNhL8mjsv8EfYsLLxW5ACA8dNhA14my",
  "key11": "52efiWAzTCgKxr6PNn56Kq8EXrBxdWvvpmsZK8p74J8PmJDNWgujBKapYw9aPJafS7ZgJbt2kAq3Lt1Xr4hqaxWW",
  "key12": "5dmbz1c22GqzAuRzaHrw4VGasFPmCqSW1qbfE7Zx5tQZmYxi8QHVLJUj54GsszjNUhtsp4LXkRHtV5TySdcHRA7D",
  "key13": "5DiRLLHz9HX2do9meUxFNuAUzZccX4AYwY9HpamLeEs47MJG3nBVpDZutbm4cmeAiDfZqWXa8NZPq81chV6YTYtg",
  "key14": "2a6SKT8EDmmgpJvcMBXPUx2gyu2bcujGdzk588Y6yGhpk28Po7E5Z11uru4CUmVE5vtWGWBUM9fW9oBTvVtyp9K2",
  "key15": "5EMR3MXFc8tMgVrD1Rhpim63hfbdrPx9BcxPnuipApVyRcPx55WK76DfQug9Ef9Q4xdsGy1inVyezfRmwPhxmE4t",
  "key16": "3KTntz3P1ABANenM7iM1rxKKoe6HXMHpWvoPvZgXRe7KUp4Wesi4n3wBu52ganfJRWGNSqt4GfdKYB8JBoYr86dT",
  "key17": "532E3pHQbErhXnUWcqa58M68adEbGDkHgvM6PrzYohZJLGbMCEJ1LgpvDUys1iXNkg54JaGsh7UoJrn97DmBqL4u",
  "key18": "61hcpa4VuL4ubgRfamiHFMQK1Cvykh46VDQhbf9SwmoXEWvhoPJHsHcm7xCKGuKeKxAfUh7wrcyNNVPAdtvmATU5",
  "key19": "254HPrzJ46caA3CB7XfZR6SHN8VMgfLCKp3tjodzwxtgJak2Abi3SRdBUGdPtYXRqdmMFisRPXcP3BESRZPPMXWh",
  "key20": "2a2yAVorYRhNQWL5RqVVGhP1wo3mbcBXNEbpuFMo3AY5bPFZtADsCYBJW2ZCGZ7GrRcr75T98gpUo9oyYfkSzBQ8",
  "key21": "63YXNy4mT71WGdSWwhhApBd1X5vBPmeKmvssvFbL6kunXQmoysTcKo3vjfpzkponLf2pJEo2VSdDZfcC7pPJhfpe",
  "key22": "33vhJ2DZEFoKm4sT6ij9hwP1t4YkCyWdFtEr1hh1yH3S7UE7wp5kyZwYPVEpVUAWF9GbM3em7eL8KF4co6fTS4uH",
  "key23": "5YZp9kaVYNDCQwFVgv2nMAziQAYngNbcxJtz7uow7B1L4XJgxhBBSBMUExEckNFSJSTUKaEem8BQ644R7HnXk2KH",
  "key24": "uJ2JjoHrceFs9Mk4viWZmUpmD7GnQ4YhAQyvVuazwhSwtGHkCSMThUtayh1jCqV1uSMvToNwrr6mhbzTkosCNcj",
  "key25": "4NrB9muZEyHLqGPkFoUdGBWvTh6S48KtzEsKpqdZXaHWCLByYW6hZx3ALyitkbprKpCx21iYos29d54L4zJYnjZB",
  "key26": "67nQqBLd7fdyy7TTKhGtP1NaYfSnAg89oubt4sEDDRKk74qdKE4QhfLsk5LSHQWKa5kRoivkSQEhED7Wtd83haQ2",
  "key27": "3bccFkJapwm9wp6pYu8dVqopmioFSLs5HbBjGMsYntDSTBSJQpS3EjneCjhYpS3BTMZSh52pAvC7L6UDv6ZuRye8",
  "key28": "5MScTQbkLntE6CCqaHWKNGcTVJoTTd3hCM8Drypyxnc8EUh6D4hEH2DobboLWajNREcdnJToJ4oBPMMTpXPwSRXZ",
  "key29": "44N7g4DbZecR1mTjPZ9rNgmzkUi9t3rpWm8dch7iAZKkCrXtTRVf4Fb8V4xkz6DuYQCL9F2noWEyi1xNtxuUrP86",
  "key30": "4WnirrJLUv2BTS1KRsfk6s4XUL5aKiYzEh1h1jRdaMrDT9WLx7AoEdBskRCYYd5F4a18o3uSPsfQCxDshDR35ph3",
  "key31": "55Gg8CKiW3aofGBiiiSdmWiFeFKDupsMJaDuV32j1HsZwcZtVU4WUZptuj1jysHU5JGy24NDqg67sapYGu5qdu91",
  "key32": "51qCShM9EfJ1z4TpcesHDr9YfMAq1ZDq5STTUyEgpiSwQD6c3WfNVzeLnjemjo53wjvK95rE8AX6EKh8C81mnTq3",
  "key33": "3bM4ugkABnGJcSLAQ7Jdo5d792X3BAeYxvRCZjM6DziUvaR4xc7ZCUHP3sc9QJT1xLGin9KZhE2TWVnZbw9A3dtN",
  "key34": "2smAcZQF1gcNiPcUp9tqA5EGdeKxKfJj55pBQdeuJYztVcHKSPuwLmTZJaymqmxHRvoHN4JMgMjeSsPuroQDoB4z",
  "key35": "FcKvfPWQw5tB7Nkun7N9ZZDWJJokVmut4fjfNw7txjtde6NN7vRQ51McmvpdVfEvq9ghTb1yqHzGnHGnRhicU8g",
  "key36": "Ck8e3BMBgNX7VotGGRgTFKBL3ksmvcAnfQfpepArF8XV2Ct1MTDAbm3cKyoVJAk5z3eJMJ1CP8Dj7SoxZBrS43d",
  "key37": "4Dknu1QSFVR2rHpV7TLDXKus3EBmZPSZr2RA5JtpSQvU2njfHjdYxF4z1NcnHudJukoL8axYdzMnE7C4AFW4McHH",
  "key38": "23xWGVsZahwakcTaumkGQSvkYjsd8WugFHSScETz1SQ4nvH3wZkZUAPBdGtFpEwwBuVtG1n5giG2JEP4or52ipvF",
  "key39": "4SGqbdLMQgmaYv7GorE8DnimidPfX4fFyQNe9fFoTmrJkJJDLHNG7ihmGbhnGtzfedN34pPpTuFFVk8qFZS4tUie",
  "key40": "45He2pb9ghZvx1bttwrrdg75CMnWbb9xufVuvR3AinuVKV1vEZp2UFKeCRtc3HdTHoFCYy7hMqrM1gakG4sHMmv",
  "key41": "8c1pHXk1js4VdQmCuZ1DrCdjB8ABP3NQhzqPUYHjZ8fcWR6yc7Umqs3f5frRseNetW6m5cKfEn8smc12vhUWxiQ",
  "key42": "ayp9tTnAceA2XHXcUKfDz3Nb3EPRxr4Yuvc8ZqqhTkup7w4cyeU8DhrZ4Txfn6MyF5zphR2D6Rx4FpptF54iGow",
  "key43": "3SNWQHhhU8tk5Jvy1YqcvBJpbUieqDM4ivcDJR9G6RTvxK9oXUHGcYFpJ7XScBunR5ceqRefMqEReHGqJoaGpNZ5"
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
