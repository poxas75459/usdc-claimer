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
    "5mwiBRxJY1SbQd8DBuK8c7HuNbWp4vJG7KrnSuNQzm16eacGZaGGJJvA3KcUEuRkcXn3j3SD2kgjfCJJhjspqzu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659EsM2VsCCbaz4ibY7Pa6VYHwvLEnX62NjEaYSwDJLX2RNdUqJej6yE6a3bpYdsbzaJhrJJm8rNNXfY7YdsnSwJ",
  "key1": "FhZeGa2y1n4RCNkYcJV33UEtHfooj4Vyv6AKpc18C2HRFLAwxnd5LkYXgahmGpfem8mAkmfdnypNTyH6gt3zQFF",
  "key2": "4y1Fmb1WAEskkFLkS4PhgYXatEJXWY7wShPp3haBbtAaxf7QqUz4VkCHbDx6JpDN53hNGi6nfCE1XSwDhLTTzZZ1",
  "key3": "26r5HeX5TtLRobhnzoQW5STZ9D6d37tQRgxnbPK9G5RRhKfWSYv7C5LUB6vzsCs3yTMLgcYtxUpuTKYfqfCbv14Q",
  "key4": "BYC1mDawE638ALGEypJDbWvMs4Y2XYKwny1SLeTPTNQuD9HkKTfurZnT8SLiQVcU9UwcM2PA8bTTzgRMsBwci1h",
  "key5": "45imSrmvbYPPXV6XdF8SuCY33oQ8ghcPWfBvK1fi961nqgE3axkGBsH19fk8m6HdzAKVkUb2Bhc567zrM64jTDhR",
  "key6": "2Yo13DG5cDdToixg1pacixXtRMs38PxJUECtzcAJ3u4rENazRJCqsirfqUGTwrZKyDmk5gJ4DQ8RjvpfwvXrCibQ",
  "key7": "4jZeiTmpRJmz4HZgKnqFpsW4NwUgEqAMy8d1C4cY7qm7bP3ThzcUS83jWhvLAQ2YHxBpPEfV4Rd9Qh82YQfrvgE2",
  "key8": "2bScwc7ZUR3YP7R2RkeKVXdCMPSLjL7KXpmE1meT1bt2Ecafp58sgtDgkWHVcaGuswTh8PVcUoAs17s8aKTCLztg",
  "key9": "4M2Sdiw8YMXv1vnnwnom8E1VWoBBXwhtQbDR93RHfhtP2wktxN7dQALKe78y1w5Fz8KvHwa6HQoqKSsHM6fuZAo9",
  "key10": "5nL2SpnAKBWvX1JDGfn2jTCY1oihwBYqYa8B9mf1YGMx1Pxe1A9Yj2WTp4ZScyWsM9G4ZQA3FwFwRvmmdE9bVzMb",
  "key11": "Le7jzUeAKJAPjkbyLYiZmiUTMSwDnuPehGDkstKNNxcJc9VAxv32UxHHMo6azvH89AfMUMxZKCMVxs8HojvZS1K",
  "key12": "2GU7cBzuqJ6eyR5o5yZ51scLfsJTaoAFx5EUANM2fK19bEGitxqqmpPGNzbJKP97Jk99wJvEPviPwvaViAMpNRC4",
  "key13": "2hgGWYHAFpa9VQBDQdeD4ZtPZUsM1eC61Xe3RY5stU5cGm6Twb8YFfthKmdyn7DperroahgQxX9rV9bYiNQT8Ucw",
  "key14": "3yorPAR29tjEuV9aySL1nmUn26GaRXxSRVNRiNXW2opJ5QoZVaKiUGCTqap8w4mNYFYyZ2zVt7Ze9F2Ux5YphiSP",
  "key15": "5UhRMaqta9VHSqiBTcmGSBiEjxCP1uLpgVmrivGVvGgMUVwUDDFK6FUXj7GkDirFJpaBrRFepfX26EJG3n7Nv3ng",
  "key16": "3FN8LamYMKHyRn9q31VxLDBGNKfXH1hP1js4Qmg7s3kH4tzZg2P2axnPwz382QS5q2g9tSRS216zUiQgTohfyL5Z",
  "key17": "2eUrj6goyM9Pp3zDrvScBRjXAbK2i5t5U4oxmj4nJcjgzfqGFadnmq5LRGMDeXn9QL6F3mNgUUYPTkxeqNXdUsFe",
  "key18": "3UW51fmFDDrQV9f7DzCf4hodS6ydCUUqyAuyvHig7nEuE9g7aZgBdPcmRdjbJYPZHfScVLG7stp2PGPiXAE1G5U2",
  "key19": "3LbHgJDnb1PewCYKZVKvkDXuqDGRJ8gRTRCgWUKMYdYymGGRfFKutPRkwGfydyL4BF7no2fkd5Jp43565N2pCFhQ",
  "key20": "3UCkmYPDEW3tn54DB5hJCUcVhN76nUmcSpuY5G7cfxabXbhhTVZ76ApTAjAd4eAmpLfNWsZqdFwzWxqqbMBxPrnG",
  "key21": "4Aj8ionrLTMNyoWZVAmHN7n7Z9JKo8v2T1UgK72QnDr1EjnaUcMcJpb4HusijQXsHt6UKBP4F7EFJJ3mU8r6Z6DX",
  "key22": "5PZVbRhMNKsYvZ1RWWbbabnZt5S3VFpzvPyioRHJDWRbun2VDJo4kvDGtFUZPpkSXVDRwcDjNLsJ336pQnhEgLmz",
  "key23": "5B2Ypp5H1YhgeppAKV1hVK2F69cnj618dEbHoMTTBRBFaxCPU88iEQ4ytSnubRW4dGTrYnofaZ2wweJ1nF9boq2K",
  "key24": "672esqRh1Za88AuNzx7UwMBQ4sNciYLf2VibEZqRfKAWQpq7RVs6Do4kxKeZ8obNjGBVgwjwXEb8W5tUcphurvpA",
  "key25": "35hPpkTpyGg66wB7ynrb9r5casPy4UqvUugkc5JBCSEF2NqvN7cH6gFEPjkRmTFnJWLdHLaX4bF1sC5PCBCntSda",
  "key26": "3uHL7aJ1dRBmBrVqEkhvd85sERAhmbTuY3fFyK1fg1oiGdremgdUce3NBRusG6dSJ6QF6ymZYn1GqEHq4TM1iWLg",
  "key27": "mjyaBUJ59QUvBNB1datEBNYYyW32VEhm2m3AXX7WYhbU9TWGqsUGJVC5LQLjqnhSXjvc84tSNRpVg3Uk2WQdymh",
  "key28": "3uvF7xvrZb8oG9LG4gqPSHaRXAC6otzHJggKN3cCseMynL4ybba1BiqG38FPysFumhZduYHebdjMoVoiWE22uzA7"
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
