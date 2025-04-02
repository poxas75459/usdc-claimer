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
    "2eJJ89eudCKpQH4ciVy5gwRVcdugzK4Wh5c5S8RkeYSeeHt58maujRirqQkKgx2zxL1oeDNqrGxtb8oyBtbS5kj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2QDHfAtBYpwJZBy2NEi6a7nAHCCgWkYRzHjQvto7Tx39CjwLRmb8vUJibyeGoYf21Vfd1RXDjUMxgFB71B2hrS",
  "key1": "26U9EXmQhg3qcuBigTqu5WGK86uH3oy2mFTPKsRAzAAfR6UfBJ3V3rpC4uDJj55jwPdhELqSfHxHxFs1zK3f1ygR",
  "key2": "2rdnHqXncsSRSDMfWkYfsvrvYmGYGqozTJm28ZV9MbnZXRQxmuvLfZfvLcprbtfbFf6WksgUYiqTRCe7F7CTWXK3",
  "key3": "2JaELhMfPHyhfw7ubkCQ3M27Gjqv8K9w5gB7R1F3St5gYMXJnNUG6GxaLvsVUn4GEZcXxnSia4vSXdqyDptaWuU5",
  "key4": "3aDERpZHRtaaM3RoGKuKdQJVYNeKkxCA29NPoUUd1xfFWvU4eDwHYCsnn4oqp2EKr84QAnZN2qxCutxdwLTmBRZo",
  "key5": "52cS8LKyeY757DiTAkbKzgpMBwoQL9m62fDq9bnviGRoxruLgvFSXeG9RoqoUud4oAX2YpEfndpdhvNSqbcEavcy",
  "key6": "2iaygRbhtdtXrsvj56YHYxoHG13PHmvKMiJSsYEbFBxa7kFw4ufmoeYA1DtqMsj672SpSV9c6okqYF3k3uWxF6YU",
  "key7": "4vcLbz4FTgHSEY54KrGtWqFDvs9AyZXgRX1hZT4vzrMtnGeXoh24NVSDfa6etHDd6fchZG6mKPtcovuax7Pm5YVY",
  "key8": "4xCJLkA9ACNDQwvCFBNkWLGHbxuBjtbtV92M46VVybSn7NbQ8SH5C9EvmaJarB4c6toCwUswebjWMtkwfmUNCirg",
  "key9": "4NHUEyepoQAupb8utZf1mKP6KKAFLAv8FKmjze3131nKxxk6v4tUtWfunZEWanC8t7WcBEmYDL7cr6QxVYbgDNVz",
  "key10": "5qfNxsf3VXeom42u18yT1XWJHaDuiLHfvCpaJ9BHFTW5u8KPkjq6owxDHNrQeUSQrdNJbZQFuAsKCtEHB7LkYquP",
  "key11": "3MLHYDRnHSBjgSNyJQrchwXperckdWKmft7UbLqREAPwj6zMZPucGGgj3RKXbe6nDFKfYkehF3W8txs9HZtbPAz4",
  "key12": "EdkAqPh6mnAGAMwVu7djXfYT7SGXsNqacEGcWGHmaGTP1fPRC3KgatF84AhtCvsN8Xskd6tfJYKtDacF41siYxW",
  "key13": "3Pu5od7nn4fp2JPA59NwruQmsPpLecjUJTzb9u8j1s2r3cQxzcuxnHcrwYFyj9chVxjvzYrm33NixDEWwkWG68Bk",
  "key14": "hetf2mZgM6ZrcUwLL37SY1GmCeDhAEDoFtrAVSfKDrF77kUoDXkY7JwwBYbJBSjJg8mS3MZ17wj8HrPEGy2iPhM",
  "key15": "4C4pRcsgi4XomdKfNwKpzxFymfq7po7FWBN4XdmMm4iURbGDkvRoaNhEhrdSaaGVhZKnFuTSy6KYdP8FezniTXzc",
  "key16": "rnARoWQqy6pcQKyoLiL5PQe3a8tMJKEw9PPdGLTV1uEYhVQmJdVonz3ufUvRXxCCdeV5kDvLgyf8jNojsk8GQfL",
  "key17": "4uPydLyZBvUsFjXV8MxZer354UPSw7SD8CjMt6kP5EfrwRvDhckp39J36ZneZLjuR6wxmB4ngk9P589psdefpYBb",
  "key18": "evwZsBY6bUnnmgLvvHs7A3KqK1g17kVsMjWaLrsFk2PFnYdLJfGRSshXNMjFT3DE3w9YjB4XdXAJFUrtxgGBL1q",
  "key19": "63kVRdUpsxviEx9Lqusa1wbQnXKcBbgTe9PHnod9Qu5w25ia6Th1gXBfENNHkyDHwUByttUjRAnemwRkDkNPJLLU",
  "key20": "4wc9TnzAyzTZ9td4zvDR8J7dceRc38oXmbR2iffJe5hNwM2WvtZuPEwJJGRhk18ueuiPWHxRPFZrgGd21nsH41MG",
  "key21": "36PesF2BBgnXAApqn3Fohmg5TEwAV7CHH81hesUwCG6zuSzXCKv2DJYATcqY9JP2e93P9omcEcKDkTkgAFh5m7mG",
  "key22": "5XSN1irdGs2FEH62tznXLBm71YCd4Ps6gSm7US22MqGcUvbVx8dTwZxWjLmDLEYKvo7qyo4g8FbPPyLW5QZWV5AF",
  "key23": "HJm7n8Pv9X6AQ93YbmSvhFjLoUBNyzGVTShwrFbW8yj6AzhPnKYahrY5sSxcP6H4Hba2Ycc6KiVp9QTeYQ1VtzU",
  "key24": "dY6RawwzxMdaHsHFkaM75KViuAccesxvK941G3og8bpvSaA8JsS7E5G1JPQ4ivGGUzFH6XAg8z6aEEU7G35ZmRM",
  "key25": "4U2VeJC1bhoW1qM8ce4fiDQmAvv5ZcBxnMJaqeQtaoDC1DcLC1GNAAGFhYoFD5frgrqpQj8mG69eArBxK654UBw2",
  "key26": "sfDJJNDoKAJ34JfkweV7AtfHWyELYt9kJihNGT481ZL1Cg4W3MVSkLb9EiVWZyX1GnXu62eW11e9dZBY9Pn9ihu",
  "key27": "2rERddmC6HGad1xtYhj3ovzEvNkyJQkoXtVN2kY83jMdEBGYf1qEMbWeSe8FsVLxUSCe8FGxfpvc2A5ibokc1A4v",
  "key28": "3heNAUwP5HUE6rNiABxGEZM9BEWnFBkCKgexqBVeaWKfeN68oDUxT5dQzKXgD8zS2MxEqgCkLUfLoZp1872fpzNK",
  "key29": "5qyphxCxogL5mc5VHrqjizSUy9RsV3qNDizx35ifFq9VFwvEuXAFJ1pGRd2byXe91jfxTruvFZrK3uTVLcVHUMxy",
  "key30": "icaj8TMf6eJGg4AZSWpenmHuHkv5giEkyWrivMU1q7UcU6NyNnWiNS1S2QbJECe1ciPJCaDqw13zztXpe8iaETz",
  "key31": "23r1j2pqe9CsnYLC1Jg23RkWQsPmTHW1tTrCLaY6Ncs9SHmvGMRkntibB8Q26sxPmpS2PFRZWKRP7eDgYAZGkxJq",
  "key32": "5HEH4DPKT6BKumvZAqHa1aBJ3NhyQtf5WyR6mqeQQkBvjR6h1qAic7CAkF1YwyAfFCvQtM5iRJNd8YNhZwDXf2Xm",
  "key33": "3J78sWoZ6sC7rJBEdGHtsnFApahT1WDy4x2CahLL2WYD2zigyYxd4joezYQUtVX8rJBCCfnk8Cfaa9t5nckpvMDQ",
  "key34": "23oHSAHsJQs7coAxVH6fsyrnjNBH5cs7iukdfJJ4aWPxa21wnFXetjiZDJZjGYaVYWoy6QdmQFAoZzEgKXrPD8Xx",
  "key35": "HCbKe7yawGzUwjQDh1M1dXF7XNDjRyeNn7hmk2219xYfZKGXvVmUfiTKfjSMeY4LQzCpw8kMP5sd3fYDBFhAQFV",
  "key36": "hAni6rZBCN72mRmrhcbTuYYuuniUJ4pmyihXWJ9QtwVYeJCd1u9txbva4UU6BuDEeZEJgWXUDzq2BePuAuBoQom",
  "key37": "5LAMNeqe3WCJf2sA4P2oZar1sLJZvQzZKa1ADiifm99EsxWPBc7FcHhpDwofrpfJzAeWUzDXaqCzynfGzww1yuqm",
  "key38": "34Dn7Vuqx4eKpQf2oFSh5ieQNmstSHyNfVgiyyujwfRc45oEiC2A7PQ7H1VdcJkkawFqBRuwSMH24RHQYm8iXyDS",
  "key39": "5HKCcio4C5mCuNhxs5baAEZkHhGSpPfhj7RDZTn8knYVYC9XTU1GUs1Ms7YkTTfgNMMdTdNqyLBsEPhwLuicTMkH",
  "key40": "2vTX4eoKn3Q496mADtJswNb2hqYX27B5ep5zoTkorbRBBPp8CGhGdX9kAX7BZez1AGaQ11stXiG13oWVtTWXjUDi",
  "key41": "2ct3AGC48oWohoL3FHhuzd6AYNca6TBrCtwcmGYDaeWo1KAzUL7A5MDHuqUxvxKUfpam2yXzHRhyJVeTc3dQqN25",
  "key42": "9tFMxcuMaTXViVe3cn2j5oCs5TQAa4cYGeTARmRvZiNJQ7Vc1bd81F4REGbbKS8B3pBgDbANjdPRYuYB8YRqm41",
  "key43": "3im2euqAJFr5JFqTaMUz9AXRnX1EULdzb3LvQnMMWeWChtmx1YsEVhRFXjyMDu96tpDY8ZvB4v8gTiYRA2e9dMG",
  "key44": "4NNjSghdB22fY16ABXkknBVcwD68t7PrzCJvZLqHhsri1rtAZRrqc2vcopZKzEDGYNnZmjAw8SpR8YBPMFYbmcde",
  "key45": "CoPYFXKG1zYLSodr4h6Z91c5AdpZp8meKW6kx4iF4WmpKwjHqe8UUR2KdMFKgLxaMEguUHJJnXqaJG7Uofzmn6U",
  "key46": "3RqR3T1LCtVoa2oxkucx2aQ13LjeJoEUfdqaN64D9RFBQegeo4FyqwV11dfMYTp7dzc7U67waXK8UzAZgBrjDbc7",
  "key47": "2QuAaWfrXX2npRWPSm1P7gVbhXbnavDeYaZVsEUcs56Sa4H91wKNPDMCzg67rbAReCTkaRjNHXDAzEswDGPv8acb",
  "key48": "DQ45H4k4wdE8qttTLdCUZC4Cww1GaKAJ4uUZYsXupsWco1j82tSPfym3gLUV5FtpeBMD37orDKFKpMRcAnYaRLs",
  "key49": "US5iaitMfTwJkKP1hsRNi6LaSDYez1uJrTeW2rkJeh3FYd8G8ob5WxCYDD9y5gGLfGU2MgN33RFsSBNs9S35WgG"
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
