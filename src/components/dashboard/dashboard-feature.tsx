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
    "5xcZVwmTaeYw8RV7ZqWP9748QJjPGNVCF5aPKHnSqRAABWDYqUhJps7s6eKjNoxMFkip1A2zeT45qpRHfyMF3DPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAr2QwYZu8c1pYW2Sr7fqVSz5VKTuKccSxLWzcAxgE1vC19txn8fUkH1R5goGFWstaPtErABhqpyR2shYtN9htM",
  "key1": "yCL41TpLS3ox1m3Fe7zA5HGsoGiwM3Sz1HMdan6wjG7i5BEDZgQfutorW2kspNnHZ3x1KCm1DhFQPACy5WxkKZ3",
  "key2": "47R5QDhF3Wf3osFphQmhdMfG6hN3S912PDB3R4y7swtgRdBmRY2oDzmAYdiPmYB5uT5eP7SLRmCxfjiF2NpjqREF",
  "key3": "5PEnZVaHkqa26HntC7kg6xnTKtQAJcc2Z44j3BrDcVbaFoPAqnc9ShCbctAeW5UMuxAeZWtaRmcVjaG3tuWkKjN2",
  "key4": "3pM4D36pAH39UF1W8nnZpdV7Xkw9jsoJD5yxWCqmDcTnAgGKWLohassKbMtQYekGjNtvhGiybQVnwtUSnEKwRKti",
  "key5": "2ebPM783AQFyXdM4qAibyebLPmP9VYwbS6vLyGHhozyRNwZ2ks7vKcmoSfRdGvwnUjfFFLwYe5CNcazZ6XDdinj5",
  "key6": "3EgUsuf9hHt5owqaJZTQr5cxNar8YD8t6w2Kic7CPfrGwGxydTSszRKVeoqDcRiyhZ5q53YTwRh4YYxKbMb8YTin",
  "key7": "3JRKQqdGxifb4C4tcqUymk4iiW7NHnHH58QnZYbo8DZikTqxEodThgu4ymuwg6eWysVGjwte6GD53eQFmnM4kFpm",
  "key8": "CPXy8gS8A4vpuAJtEQRmDpSzGwy2qgykoSxcYdH61ADH6XuRiSf88Giqazm7Bc5hV7jFiFfEjkadv31a2g9HnTp",
  "key9": "2bBteLASUrrVS8vkMj8PSZKHQmfZSY4XyfKK83o5VWjkrUB56h22VQnWWKegEQtDwfZSaA7h3LBVEsurb1L9HdE2",
  "key10": "2YpkMiN9rb5LYxRGYJTqhLM1SCJh1ZUjUMuzyVF41N8tG2gmbTa5qgvkZX4R8ET2GZTgzn3JoYrhAuXEmAmXGjLS",
  "key11": "2sDYySssefnHEKT2fwh5kYG8GfoAtL1UgxBxhQY5TemsNZe6XXpBAKwsNW9Wi5imzHaUxYci2YsW8Fd5WkX9oxig",
  "key12": "38ieCA67suabvG8BGx6MPvpxqL862FUPLgsgLCbL5qzM5aWevfMV9TfHu5m6vCRV9wykQuSgGAPsCEEvFpoTfrQC",
  "key13": "2yMqyDZbyX9N1idhDr8yBDy4XNoxXtTgP1Z8MxJca4vYjEPWQfRRwMfjtRovGKBK5KqMAw9G3ChY33C4p9GhJGy6",
  "key14": "2eXZvJHhCSCmNoWn8jrxRN5m1QqkgLRPihe2Wk3QuSVwQruVSmPu8wNW3wfzVLzVZr9PMkBxZWwfVoNXauGZgeoQ",
  "key15": "3vGn7EF3SSQEU2bi4BgQ21JmGaqNY4hcEcMiNqWBLNNWtoxtE6SBimyC69VWMX88TzfvFTyLScga3Wg5th6YxA94",
  "key16": "4sEDnLPymQYFUqepJEtyb3BK77JwwfY4kWGqHk7yjrQX3r6mYqA875DJFEpPpsG1LXfYboJYJpnnRXsvSCseBdqC",
  "key17": "5DffiFZS59uCoWZg4sB3SGTpMFjpZZepiHbf4GVD7sgqqCk3pspaEX8HiZi7HKdhHMUPfEpX2LyNqmpr69L5TsS2",
  "key18": "26oVNY2qKDdjx6oe13SvbbHVLVir7oFowF8RtTaVKhsGeKG1Uj4okXx1h7kMNRTCRoSFZm2Z6cvo3fhBbnYDic1a",
  "key19": "2krtehNpfzmrfXKYzkuEHkKRVMpT8ZWh7s4TE37oHdQWy4ZGejdwozknJ5bfy9vUbJVErEZ3j3ysrJc1oir5trke",
  "key20": "5zpfipvmZTa3LkvLUNgZzAgju8zEXZPg7QCB5pLi9mC36GEER6WkhqACWLW3QNpNJTyrbaF7LFdKj5sH7HwAiVtx",
  "key21": "5UfLp23VGaLQaR73KwYYhD141XtVUyrMXyVE5oi4LNQmm5gZLaaMFEw49ipL1ZFoPTXhqiRgJBKDT654PPo2cCdJ",
  "key22": "27TQPZARcKgvQiSoJPRQ5kNR652dadsEX7QYNNwg3xXfA4ncsLtux9UvBjj5R4hB4cTvrKBo8orbsNFrRq5riH6u",
  "key23": "25hbctSktvX28HiQouUKnfTF4D6NNNzF8w3Y6TLQMXByF3XEFM621N2oWE1Jb65SJNiMn2oXQ6QvdV8oovyqJw5i",
  "key24": "4qn4yFvAyRpJZC8PHbCnzcwgqnaa9yQjV3pHjGjwJFSo2FDDyu835RLRggSgc9vLDL5Q2rgD6o5NbXEzX1Ba9QLd",
  "key25": "q1PitJaSg1vuSZ7AnuHJjQUkA26z2axJ3fAGmhVC1JBuqTNG2QLw3VSFKG2iiuVXoWGDj9rpfpeaYdHF7iBgdCT",
  "key26": "4FJwhhjXBedtwHkRMXRQUMDWyg4nCt3b93j5vudDuCz6LQfoo2CtFXrGr2GTuQdHfCvv44dSn853tpBucJw79Yos",
  "key27": "4Q8GHcMg1U5dUiwjNJAsG8RRVuMVXVSKjshz8AgGr9149rRNMmY6z7ugGxRUH14aZhujJdEoCXgN5b2rwCzK46b",
  "key28": "4k4wCSQGvauYcnSGeQG6mwhNnxA1QDX9kRuNeRkG7AcUPELhYoF47oYTK1YL2o5JcLoP5zMbNWanbyKCfco6W1pa",
  "key29": "4NxcUC3fBEUS746bqEramuWGfUULm24BneQ7Qai1s5KEzsCYLSwkKj8Np8kCow9MbKBFaJJ27Wmh7sg3jv9Nwbch",
  "key30": "3UeBWrhYMG1CQGqCd23CMcU5zMMqYXaQiVataiwdmkteyJAVRVnjbU7qavBmrAL2Xzp3emb4Kk8bnovPfxT7oinR",
  "key31": "GaCXteK3BgiQoExdXcdS5MZ653LJZRpJNd9BqbSATnagHmPPG5cXLettL7sARwPTr9w1qcy7K1oRbTJ7USyhM7b",
  "key32": "4YZQByPJ7H5Vruex6wsFSGYjb7ou8WLy55mhWtjuVF5qqgsqnqW69kJW22zXZsLFAGciveDSXGJHEMucnYSKk8ov",
  "key33": "4T4LjbEXz1iF3SqpRveDmbPQxhJKaXVoTKriayCQa2vYuaFehN79aHqjhSTZpiRZPcBebtrGikWPgNg9ZnDzN3iU",
  "key34": "59SPwReair15qHMddQ26WARRCctHuaZTZSQQAndWtpyiyM7cGv7qmxqUcRguY2oLEyVdAWDSB59wf6m8BdYPkQAo",
  "key35": "2q4QxtRAKDTJeNU94djcsPeYhfKiRDa2Sz5YfxozRkhRa35vBbjoHJaErfGYr7VCRFGwAqtJXtzc9rXYLdbqwPED",
  "key36": "29bzD9PsKV8YLT5hnLjBLNCGHEEqEprgLhBSi1dZWUboBwH1mXo3XRxZ5rWMgMTRRYGjVg5ih1ZtaosAgKbR5NbB",
  "key37": "5AEkeQwhpYGxaTHRSpFoGBwKh4WhN2GuV65bJpydvDwZtMKzs1EWUgDG3CpoxaKAWwwTZ48dCY4mne9LFpnqKVsg",
  "key38": "3G4Bp5WnZQyo7PwaUdbUrpBQhv1vLVV76ad8BUMjNFJh8FnwHq7kfwCwWjuu6FzfGNvGz81NP6giWfVGejaPsV3G",
  "key39": "3hZqzvMyDwEvAeEBet9GR6gi5ZqmRr54m5WtG4JpzBHp2tkoTHJtQ3rJ9Ta3vRrMh2TdXEzfop6nc1msuaSqZp6e",
  "key40": "3iBcb1H7hEYn3jhSgA3pYVNUVyXK7NojodvK5Nsiwa3YcFdrrQ2MwVCxFtbxrhFph5g3J53W51UmPDJgGPnjs1Yi",
  "key41": "4sxWSYmdEttXsQdCauRs9zF5ErSE4pt8AJisnHyKicP5reC1wWy4vuWjttWtWbcJHyqoERyJk737Ttg8bD83Xy7H",
  "key42": "5jw26Hss6hzshRiA5vzkXn5Jjz4oRhT7k5CdevwKFDSoEBV7QGaA3Do4JgEK1ALqSMezS8A2TdCFxcPb4teWz61f",
  "key43": "3K9K4a3KY6wfCri6M1YwpNa1oAL4SDhPofwKJXQ96GG9MJ7cgUqL3eviYrrzmcZZ1rEEJscQLknJwCjvhfyyWCtx",
  "key44": "5GhRTpNkMWSKK7PcXyQ9UzQ4C3cvCXqTiH28vnK3hbS6bps2iH1qYEzLzqDdE1npYmiHUVdXJUsEo6ZCLpRE6t7p",
  "key45": "5kkypBDjE2D4TTMzSk6hoBVVMfXFkXYSsKWwBnNJK9hhgPVTbXTgtKkCt8CJubypAU7RmCs6bhQ8qJxaNejXUAk8",
  "key46": "kpcLfYNMzv1MPZPsJCkaF8Vgbnyz2jodF4PBc1EjZ5RU2giZGpsoxNQXQa8cSF1DZ36zsii9cxWf6j1iuCFyRUh"
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
