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
    "4kF3s76bTrGSv2FikkJ9oCK59Q2EwCVx3Ed3MW11qFgTKhhRGqbaf6SrDQJRcCukEqCkz2CFhFHQfdmMDWKBnTVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dov5brhs36ZmsK7HFnxtsFvD4utBPCn761U2oVKtRdfUf37RyGEgU5YTWpPCAVr6AZ6Y3D1e1Psvs8pVzTWrXZq",
  "key1": "5WsQ7GrjzceYz92Fue4ohCwboXs2YVFmq1zAYmFWqh5hXwwW97ohZYMtUi6ZX5JmxNnqXKF27Dbz6ksedc5QHFz",
  "key2": "5dQ3qpmBjapaj9S5ES9PyzDkvfXdxvhGbAn3UfKnMo3ziDoNJ4QWhucw9FWkfsEzxbkvBjkwxvhKhXTVxK1kYxY9",
  "key3": "2GazS8wHnraS7SkAZ2a4cP3zj5mGxkYLPAkLe9KZ7bKjZGCeKk7xKe8DR36Sjvw6HXandoR983K3TFnkmubPotKL",
  "key4": "3z56RxqAGEBCncg1tu1o1rLcgex6ncSdUqD79NA8RExrUknqDkqcBeKpeUgX5LDyHAEaLfrTU1bTsx2py7J9EZS4",
  "key5": "4p5cFxcgArV34HUZug5F5JG7jr1fyoAoMtm6ZZTxiheJKSm3RmaGt8nkLRnBDwV4Q3asvccXotDr64dV4RDR1PHQ",
  "key6": "457oMPP8cinKNTYwKfSz8HAdobBP5AKhDgdJaW6kurrnPDS1WuPMUaGmS5cjVYQev8DM14kkwZ2ZrLX9KyPhLkpA",
  "key7": "4iySoNJRhB4WEg9LccLTAyF5yGK54QYinJsVcXfquf7fk53XopVQh5afDobTQA6jRRVmjCicLLGTEJAjMpmvUQkE",
  "key8": "3V4nHAec6iEqq5xoUBA21ZJRYEHoqLJhYXPYWkiTTgHFgyyy51ubazDcoxa28DYFLPoT58mX4DQz7nFmNbESHuN7",
  "key9": "28c6wUgdiw2eNqApYkaiFko1KfKvkS2k5vHT7unX2TqsTuB9q3VCcHLFnBKhpGci5vQQ8VvMiSbqTZLFtjLMEhsX",
  "key10": "2EvuQnWwDVT2HTYxsEkjfMYVcUrPEAKoZA6gYGp2mbvJqfrrBC1rjb5sKNTP81k47MMvYH3LLhBKRBV7HtYcvovV",
  "key11": "58XsK2aMP3kSPhsjTTkh82TBVBmKFBsbQ38WZEYhCZk1oyMcDuHsj5fDZGEiqwQbaC8C82iwLL4ZiAFeNePEey7N",
  "key12": "5aQGicWKhEnBqgjxzELbngjj3Vqh3S8dHZUziN1ucjHWQE1qEvybhruLxBGuhK7mRPCXKUoKtWaCJPK9rpKBqxrr",
  "key13": "2UMJ9omvWVrt6YhTH8tDFYqjQ1pVespWzrLZsAEQ7bXtFAPZ6MBNERrDdJac9TC2U5rM2Fw9BrB5KhUKF9MnakHz",
  "key14": "4aJquWvk52CREGXArY9GFWmWhYYRcfJsjBV3ZGCDv4Y7nnPLbnLWV5bnS7NBpvzpbEMaKPtPhmKRNcZU9Ke7mu8C",
  "key15": "3fCGEKCH2m34SFn8HDqnJ3DwAaZcrZ8tWhgvVYLMnyYQnZ29QbZBXVYdP4A78Nu4nBEa8dLw4DYz1Ku7HkvAqaLo",
  "key16": "273LDjYGNadMqaesnMdT5YVtk6G6UgtQJNxPdKGNb3MAQaVVSYjM3DEC6Y2ZaVXSA7rq2decxTh2PvnNsSVnvrqd",
  "key17": "34TEbmUJvvZL2fKtsVL7Fvqbu6awRhwBdL2TA2fMng2BCiXjPEFhjU7Qi7Qh7GeF7kiKqmrR7aJ4HWmyJXUiQTPw",
  "key18": "2JFxHGFnDeShnQgHhEsYYL6y1kbLAgBJixrrxSQLZz2hExq1JjvhUui4xPYewsYHMihaMp3L8bYphRhewtZDGMGi",
  "key19": "2Fp7KdcLT47z69eA1nDwd1hMMKL3bztV4bX39ULDYztpTX5eoCrgf9AWar62Q6FpHHy2jVbhbEq2D2vV1bAhUCGd",
  "key20": "EAXRmydoqhzMtHkBUpA6evunuuf2e5F92EB5aEgZ6hJR7TCkbrjU5PSbAoUCYgFUoZYFq5Tuq2Kqh71vfwVWPbY",
  "key21": "3DDht6ur7pwEreHS1xAWVDUXT7SbVLj7CvPyNV2ojKBSVmh5hwFSHz3fk5kTSSfUnpqEVrLG2QLfaZoeYxBLEvhB",
  "key22": "24uAR83t21f1XWpbDzKbDVU2wB7Kei5LjTMMcc68RqyP51emird5xzwfyJdvSczBQZazBo7hGBLBCw2CdjWjDhoC",
  "key23": "3KZHnXRApJrXu2XCYRizaKeQTCKudEhihFrs6hUjKmNYuctAu2LmJREM637twfQbRzyj9eTL12NzxfPiSg2fh64H",
  "key24": "45J6DzXqTRvp955WCLSeUY7bhxvJKGhgXW6kUXCWjsXm7bfmg3iQvEcGNfvj8ZD8QoJUieohzj8AVDvBraK7g2hv",
  "key25": "4TsPJJUCJzpJaQkptbghDUebCndeQbHGxCbuadQw6NGHHvmXjagVaXGnLu1SnFgcEM6U64EUKd1GJteeJfyddfp1",
  "key26": "5cwiZah93yujXXpeKnbXs4akyuwvisw9EZeLRtoKUNLV5Qg1wgy1pPy6RJBVJ7vYdC6fumszykXKhsDnRXKithL",
  "key27": "35X7rUYmeTrrXb5BhwvRnsR7zXFScLfJbXmQ4wJ54KDpn3zf1oUuMTiMwR5L1FnmW2A5MombQh4VWiPqRK87YAwT",
  "key28": "2eassymt5FmHaDDNUBSWo5fRGt6zp9nbWDi538sZjfMCfKY7ajDb5XgTRmCqEX6QVJUCUPnL9vzFSSCfvC57v3Tb",
  "key29": "4WKuW13eJiAA6WcvRAJgRbQLpxXPQ3QxaNgxKAp3jhbicwz3qW22HKozrc4hccWcjMG9bamMhoHX2aQopHytsevz",
  "key30": "2SH3ZQXA8YYv3SPm9LEyqWgGRmpq82qwU5ZDzHbhKQR222LpmViBjAhycKTU6VDF8jdZeHbUkGvxWq7hxGFaHaUm",
  "key31": "5vQ2CCuqBm3bvQnnMcJz6TwAzRDdWcPkts9kPfbaCAMijjH1CnoiffYupfRVU61rVm4ykqAaywhfxpGQ7sA8ewsh",
  "key32": "3gAMwPH26QQ2N4SPavXUnJ6pjnEbcT4syaPak96gmrrqoHKocE4MJ3p9xx2sXmsgV2uedfiaskDa9bJSf8dsr1fk",
  "key33": "5a1GXniM2JvYtVuWUJnQGorsbhtYZ286BPXMTLpxz3NXihLMrWNRPcNzQ5BUx5oTCykVWL3NYuUssAjCsy4aXQnk",
  "key34": "3rXLzbksjjhJh7QcavmbCMncAkEkKAjZ9LxAUzn6t52xnJmpRzPq4XvY61xTDJfVje9eUEnUeTv4Ms4xaykqrZJG",
  "key35": "4ULi4otarWXomye8YGoBHN8JuZZX4DXYRivYbBN6JEqwd52mwpiUWdSBsEdswxV1iNhagGWzhHaEoKkdEkwZsEwS",
  "key36": "41ErCs5VSgh9Gz4Y4QL4ij2dSHBkUzu8e1epw9D9bETCo8dnkMmTFKxEdbBFLeaDo94VkvcjyH7v3ctVPQac2R4h",
  "key37": "3k6E2j12UPhJbFavyLP6oMeBEcTZ7eoW6WCMaBsAyVZs655Fm6rTN1wEgpf27tZnnZ5KjKeySNce29U8rKBnsRyX",
  "key38": "3hH3q6hY6X4g3TyK9aMyvSvt7ArrFyXXM3Y3qMBu5cHZ7Smb6oWgstAtckWT6mR4rQaLQS57FUdodcn7vYxDY3Mz",
  "key39": "59bM6ED7bBEKn1cm3ipQyftYUjnYBFbb2QAhzD6iNkyMHRwjgcqotUxuLwM1DSyX46xDaZpEMEGFJFVdo2rqAhwf",
  "key40": "5XXe46SR54nzA4wUniN5oy8deB3wMrP147mZHm6uwpEou4BLrSgPqdnJh8tm8yVcFqf81cintzPhQwJncomG8uTZ",
  "key41": "31fDNZsF1NbZmzBP9KEkgZFcDP1oqriFzZmextfxczbXr4JAuT6dk1vGV37HMJfytiPggN4yGTUnVNNdVa3QaHr9",
  "key42": "QJbdf6yybzWhVmL9iABrUDueg9U2SaJBaL35oucgt7Dj4M7uB49EKuCSrdxhB8qT4xqTNzC3tmMvQaKJRxZJmYd",
  "key43": "4o85MVLepZHGNxwPCyGe6M4rBFznW14NCRoYChHTDbMr2vbGjdrvftmwVm8b7xKizFxLnEfqobzzhQRgrLyeZVsS",
  "key44": "5nQE2v4pTF6UGK38CUPRZ54aGTQtt2M6dKFuFvjTdzd4pcmrDi6agCLRfSTER5nwBUwCSapScbxuntbt5aJ6jdNd",
  "key45": "7aeVKZ1DPSacMMYkXm5DUxFwSFvmFhaitiAumSqdpu9yQHy7bMk3RRYknKBsQNxps9LVbTAGSQPzCBRXahAQc4z",
  "key46": "2HJ31d7qxdjn53dr6G1zfxTK54i13YdvPGbLwJL77G2f8MnVucwhsre9pHxca9iaA5aPCttvLF8dJ8fTmUxAvuAM",
  "key47": "56eHnggN6geTJKmzcQjDFgDrvEy7Kv2FEumz1xNZQKWZMWSaPXF8xnMov6i5QFbws3cdjYkPeJDwTuprB2xuWSu1"
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
