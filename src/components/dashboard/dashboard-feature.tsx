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
    "3ZH6A88ibYZnrSE4CBfufXzGrj3ESznR7mwFqHbcBW8APXTEvKKouqRmCAnkR4u5YWHg2Z6qRnxx8dqj5g9mKUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BD1swJ1tZN68vF6NrYEGdfCCBXkf2KmPshtHEecN5zVRPvfPWjzehVzANNMBjzpkTFc8uxfv8UEqAT1fxRhbC9",
  "key1": "2hGBsQ4exL73F7LtHXSP684f59hSw5dLyfefDkVnhFsf7REmkdBfZiWJ8eS9S8bn79v6wAMovYBZzGbKrnGKyrqJ",
  "key2": "53taNXKiCcB3y2haprwUKWDZ5a44juSHvduZbCKQtnzy9TvZZ5WHHVmYXzzmg1C2vCX86ExbXMoWdT77kZsbC2jc",
  "key3": "2z1djCyRWBFp8qtM3d4mboUHakUKfWQZ5eeg8nLgLQCt1y7x4aPVm8WVhKfECtKccCEQcYozRcg57GkuE9bSnAyq",
  "key4": "4sxDYca72hReDxRBjZqnf2Dp2mQJnuv88Vr5pLP1Ds1redUpqnB2qE2keZAWQo2hWWQdiY6hfLg2ivi7HMkxZCdb",
  "key5": "65qUWEH4nD4dsgA7SJ6bRfG2WkpkNwWitUysBfvnaRhKr8YfzVETLaY8oEPpUSy9jtUS5CMmcrMrNWYnbcVU8Pto",
  "key6": "dRzUz3CHB1ycvVfUXFRpE98TKN4Vd1mET1D12AxccHHBfcZen3rvJfkggRE9CjpbqbscXoRyZppkM5VVxs7DjtU",
  "key7": "3ueFY67RWG35QoH96FRog4Fwqx1WRQ7W45PkcMo3eETkCV43jM7EQiCJfW5NJeT3NAh88Zbfi1z3EFHhDZHkEueW",
  "key8": "GB7kLz8j3D2TW58d88soE8VCBVUkcEUfbz5MhAJ3ajGDQZJhjqPi9xoB64BuaBd3pDMMff1jSUtysBe3c9qR9SX",
  "key9": "5Fg5y3dkcEc3ovzC8vq26n89emMufSEth6egVnp9RyEys8Mpg9UpU7wyymp6SMKiuJTPgnnkKgBu7DYxN8U2nrCA",
  "key10": "4zikjvjYRYYwt8xqfahMYRV9hcX9qWbYHV7K3wCUresZ71ZEyuYnr5zWNbjv42on6ciTjvzXCi7wKioGAe5VTHcs",
  "key11": "jhd7m9R5mE5Xup5JXg4ifKaHfCLTxg6vwE6w6DybseDtmYA7Aa4H7KoHkZH1PmhavtpWHR3Q46MVne7gBoNYFcx",
  "key12": "217mqNkNQL8rptYNymCFyjKJpMZqDqVvNwvmnv28Xzq9Buqk3tZZbesXFTYjh6UvQoxWXe65VMd7zbstQ8W8esLr",
  "key13": "4mECBpAbtbUyZpQCfS6mPAchycdYjFoBPkEDLm3jTyPaLFNZfZsqeMpS7SzyJs3kn168EaQZ8KBkH1kNY5NBfJuC",
  "key14": "4W94STno4P8Wsf11o8iE2RmcQPfEmd3woDBjzLBxr6XpBTY7HeUkG315Ugv73NFtqmuw3SwdcmQioro7tfi2AYKQ",
  "key15": "5zZv7BkWrAWV8VT6FDwUCgWm4CzrDD463XtKKKe8qTqpRrW1a3FYcnXQjuWL4GgMzHC8SrZJK6RNfSgrpaa8XicH",
  "key16": "2RXydCjn8RZLtLn31XNWjfunzF5nrQ4UyzBvJvFt76f59AZYRjLrt8zgzq5SpXzdSihZvf1mZc2oCGKCKu1qyCZq",
  "key17": "3fWxCiQuQfXM85t3mHTQca9F63UzxPTzT5Kk61Qwp2G1UhTF94UJd7WyBwPujNmnBGoTeLGdBnwe21ayY9YAWD5K",
  "key18": "3kGyNBRmrs3isKLt2GJVjMeRtC1ErcevohjPUjFxZWJqNaDdgnpiB5DzFKs1iopsPYhNdKKCwihdQHdWmjS97VEn",
  "key19": "2hrPitDbCubv5gVhCwFKc88hHig5CLTP1KBG3j3sxbB12VYJQ4GcMB5RGpAV1y7hBSnZCFNFkzwqTsT7CFYZ9tzL",
  "key20": "q7X4sjANVVav468sqP6qtFeBDnoJGkW7gmrjRuGoZWBV2R9At2HqzwJQMnGj7bJCCR138j1nnynzTST4ho588C3",
  "key21": "qrKr6X9e6rJ4X8wZmufi2VnxZrxwkUurRBVkxXfTrsZYkZXVaoqUDFMGSuWoSNSj16G38hSibkFhk1ZChPzEjt1",
  "key22": "5JCBBMtcC6vsAmNtU9mHeeNSzgXGpggRyrn4MaxBF5G5Dm7aF3UUwALy5mfpBmUFAeFhohgtMFWYAd47Pq3ayzDj",
  "key23": "3u1VZMA7swcdyC21wohkdHLH2pQtkS2NfTXnqHDsvr7RocVCYrkdzT2Wqs7tFjUQLstd7Jz9uhdpGgHmRpSdNQf7",
  "key24": "2kv94kcD9EgUwTsLsZbzgeiTstaEQ7mVfzwG42AEivqN2mkCZKGzdLDLnQg3RTUh3bQ5raybcLiyehfhmnv7Bjfi",
  "key25": "3H5oSLtdgNrE11wQjgjxn9qJfqnmbVnwLhfJnHenhLiGcGqiKk95M51eLySFTTdc3jgsn5JQA2Q4g17kABpRc2LY",
  "key26": "4rUd9u44NmTwdsB7Vktp87wwREvxQE6yxAxcwerq7W56poofd1iG6jzRzdgeJKr9Hto9HYMCMA7yAv8xGCtgHiov",
  "key27": "4FAhJyQKhTkzbu9zTir8KMEHcQfMKVLA5sLUmCoPP8UUUaEaHErBkscr8FjTK9kLmJHqAH22Svi4daQZCctLSJCx",
  "key28": "7ubxHJqDRWWtJG1PpPNZEAu6mDKPHs1QhLgNs5j59V5MfE7V73rrn3pxj8mvXU65rvidHUkinXgaknJw6n5qfbJ",
  "key29": "B3vd6ipV7tNaFvGG2KhRMzCxygFGjEzCDAjrefEzDnHsTxFscMoisjVcGEyxrEUvyAJTUwKAZmiLk4jqfUaGGZp",
  "key30": "3QtUhbGpBMZqSueH3MEWprdUbNy2v5pYzo9ho3eVUPMiuFxxquSChFFCtWRaRczcg2Ebd3E3fhdBbS6y8BVP3JsD",
  "key31": "FnnEAqvvPxxpZwQboZMUqPV2YCKasKpwv1K8mG456bqQw4bRd6p9wCiW6AwFbhP6gvhVfv2mabK42etjNUFbsqq",
  "key32": "5dQ6FWQgyZuonEFsUEdoFphhoTSqtaX7Yi6Eaey9MWHCjYbujqNsjxCKWin5bU5TxQquNZS3MEKR2zpyRi9aVxVS",
  "key33": "4vt6j4DKPthn8uFQqJL5GVbUL6DB9Z45k9vozuAPMfsaCfne9zC5i5QSk7mH7EMN2T2PPtFxqCJHfFA7pYrcwX1J",
  "key34": "kg2J9o5SAbtJ1id5Vd8x9KTSPCx3dkQyjqCkrvXHWpn4FBaYZhcBYqgcEvf7FFtHomb1mYLAhhnEsq6Nv6im2Lp",
  "key35": "59GknKRcHX51rnFVpSVgHVGTmtf3orbMm5eirmsaqHxpVUu6GwjtszznYyuagpN5C1NnSo9oCWn43wVjrrv3QtdL",
  "key36": "64AW8Ya4iz7hhwXaV1SARvf84arKmkfZWSNEJrFW8S1cLWBYoF8FgAyQN4S5a6mreL5fumakNWP2HPNZdg3n7dUK",
  "key37": "3eYh8U4XNkrraETrvoemUgFxLNMLPB86Q8gdntnTgTeBF3atdNRXKbYAZVDWEwhiUGT8fynFHjSpR4MiZQZSU8wq",
  "key38": "2AW43r9eEUyrB3LdGFjfp7gBk7MP7Qmp72znVnDhNnxPtxv8CYtJGwzhs1uedgmUUmCUEZUJ91up4vGBNdb5pKJu",
  "key39": "3aXFDfUrau3R9zESf3mKF3nPqxBAX5puSbtNUMK2jiQjqDBnwKmMCJnvu8Kv1mmmP2N5VDZEQgg6wGixhRYo15hy",
  "key40": "441Vj5osXiLbwxttWdNojKSSdWgdPC33wHTnbeENiFGxX7EcPwP4uAtGeuS1U77orqPoRd7efSWJTKVVQEEfGAVm",
  "key41": "66m1hDXLhAvRFD2rVtkhmtJFYN5CbCWApqJM3X1iBS9WsFTFg9rHTXqkT7KmEqBuYwv5rdsWo6zNtH9V4bVfagXZ",
  "key42": "2yxCcroUDnv73h1Yc6mrvu3R5EBa5ngKaCRZYYZ7qSmEtaCWZpe9orJUVwWdKjdvRXaambfcNFzJ4UJsms4AY3f4",
  "key43": "gNvqCE94xMEZjfqUgVzx9eAnnE8T49NAqwxQWX72Z9NwnyNbJV4YceJS6JHXX4dYzrbAUbaS9dM9YrczWH8NdRm",
  "key44": "2kp8hCnkom4CyUfhPnvJYSR4ngaW6xjEej9dMpeThfA75Uxw2ECjQqcttVc6TsMfhj1fHkky1M66QtLHoAhkjxe3",
  "key45": "5vRSghHpwTZ84duZXSLDTRTqxG2EQEVV3gT8xrJyyAQgJbpfHoYixrwkMX7KNH8yjXhiwbwbbgA4gHS25nJbFbzp",
  "key46": "7whMMts5uFYSPCwcNz6hVgNcf3K9LgqL5zMnT7MguTmqx3cWjjHVMk4LjgwMXtx2aCDEPqDtJoiR9BacaGRq147",
  "key47": "5JhnnYdS3ysVytXSh8LcHe5k1uGuLXdNuASPEyCLaBNQDytcVNMRYpCYTUFVxsjMDe7YVGeLcQaQNUy5aepRPpg1",
  "key48": "3iygJ93tiruZz5PGrRRYSwd73cMsqmdMyRiZqyGmWUqrTJUXELm6j1SnjbpyPwwyGDwzPx7cu9yNMFGEjux1eitf",
  "key49": "bB9TAQs99LEVaLzEu4agHnULh3cMfeU3XVvgrEEKgFn4wuce86mzMLPmgoeJWkZkT6AFniV431akF4yGYT2P93Z"
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
