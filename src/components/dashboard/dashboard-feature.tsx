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
    "3Sd8kcqdrJnfVTLpzjftAbkfHw9ZdPy336WNKvLtWCtG7Mas6KQA6j98tf7fHTsAzfjWrdfZ94NrC4T55wC4Zvz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gejCnHe1NFRHdVPpgXQWmTZDo3APD3VAYVB3wEWiEsVLoQtseae5jWkSeB1cjPa4g6gARu3iAFJm64P5pXWSZZw",
  "key1": "5f11ei8iA8FDYz1oecDiYDptLWWnaAc4vLtPfNrcwbmiiEKCaKUk7ZCVvhAmqH2RDNTGJTksjn7Q17cY1g1XFgLk",
  "key2": "7U7gw6oQMEFDza7g9Y5iZsNi6jVHnjKWSeh76ycgwTzZDyC4XJTi3fwnmTQBx3B3nq23g1qhXAjhGwaFpZhr8ut",
  "key3": "2aAbDbzm2VcHZBDiYeiMoVduqFKXkuE7LAKVa8Zv16T8qcDn5nxTfGgG76pXnf65PN2mjFBvcFCo6aSyckQM6wHg",
  "key4": "6pD6dbzvZnh4P61g1F2BxQLWjGtFj7CnfbsKgBGsB699zwzgVRXGyuR1DzN3i4cgHkEN5Fr3fnRN48af1dVCLsP",
  "key5": "2NEFcUJj7ihr13E7q2Jyw4qtd3aZN9ugnmoE6sUhivD56ywQLj8HhwCVmUn48yVbsYh2mNENXoctVyydDHMiUC7M",
  "key6": "3Ad2mTS6pjvfJ2PRh1kwtuw8gvL1ytFRCFeX9hvG4dDhTVf8oobDWEPL8xL15v3nfytbHxXLEdmummcrRjhdf9AA",
  "key7": "4ewk6cjMd3J3id2R5Nph4MAQUxiGT9M9ve73NG5S9S6AEqRZ8nxRb3z41crCa9F1mjHoZNdE49Djt46aFDEJge9M",
  "key8": "5xVPXQXZwwSvEG5AKs6C8ch1fEzuTnXKprCQenZjLwS5jgdf9x4KcUhxsZ5ZYVAaj9Bfiv3YQv8hMweo3WKz4iMa",
  "key9": "5Ez5NvxS4sCCSmgcBmzJU6SwYFAdhcanv9gtBkymXB9np32WVNKtynZZvtkQjEZHjgX8wTi4F2QqSbX4FtHpVFUV",
  "key10": "aXgqcVidxnwRas43Y8rof55sNExjNZG3UE9tSbyS2mnC8BEcKckbzhK68Y5b2BB74rkBBpWXdyY1L7GtuitN8oc",
  "key11": "2xW6JvY2gnGy2VmG7GDj1Ju1qaNcWyY5kNAMAn8jhg9oxtBvXikgYViKnrzfNkSDrxsU7fweWaTbUJCUYF7ZqPZq",
  "key12": "uQ1HVMqK42jFphCjguYAo7MEKi98SzB5NPq5MjbwxfJcVqxxZ1PeJyExPy9R42oUF26CgExViJSzTu4BrMYbuG5",
  "key13": "rWKcxFiJpbteyxqRAhK3MZKAFpdPioojH7eZg4zDq579dCoMWL6beFyQN7GFmMoC8ChvTNmxohWC6Tz1V6ZWgBL",
  "key14": "4ikmJJPbv4Ld4DRXhLWfMSccSSUFSPoGuqtkmqWxn4rwRMspxyPxGoYDYjtzD9hpTPoD5NyNaTQeqgePKRAnWNtW",
  "key15": "3KpPHadw6nVA2V84r6ifmtNdSXaWmgQNYys7xjbwyiAvCFG8EeLiYtij9hxAuShfuWpXPTC2GVVStjrdE2YZg6q8",
  "key16": "5gu9mPQycLrtee5j4f3kRR1G7VnpaGWAVz4Pd1qwiPtzcoDxu6xErs3Vdq3RRTYW7KH2xArTvMMHndvoZrs5JLFZ",
  "key17": "2R3LyFoAfkcvTRXxYvgQzyFMwWCzAc9RMTy7a4zhQydZvrunLtCkAkYepNff21hRwzeUm8Ky7CYvX4X2dd3CpTe2",
  "key18": "QpwYccJPWSUa3oJQkW1oNmcrbJ7C3TQ52T5rq7yXdqvNzzEzoKeM8A9GcBvq7fWtkgKUxAP5WgoDJoAYfaqHFLg",
  "key19": "5tD8oftyMrMG1dDD6s9LCTF5i9kUxrcKMERnqJuXfRCqX6477vg51m7LEvvF6utoNgHyw1ox296mah8oDWuh8WwH",
  "key20": "2aSFaPJQC126oMHJsbAyLdggcAiWUHpS1i7Aid8s35EMBDQv41i4hUs1aEZNkZHddUPP8AM3ZwY2FMJhLqR4wFcC",
  "key21": "5sRsj6XWfLE5rEa6RRzcPZeVi9ndv8zsF4qaLyyci7ob2QXWECexcCdDkkqFVDwzf1GYhiNTHWUgJJgHmmDYkp3S",
  "key22": "53uMwotHyCTexHvTatoqq5P4LLJiSqsRx9RG4TXy3GEwGFgW4gtsj3TX8FJXdb22YxfrMaJJ6Gq5jvSvzGTHNtgW",
  "key23": "2SadcF6hkVqCiyBvWq2UmK6mQyaf7yHLsu7eLJ1aTTVRZeU7rU3G3YWYUND4m9Uvh5CJSshitPogBCLe3PRNdx8U",
  "key24": "31SZiRSiyyS3ucVndiTf8kqDDvinmLbXsM1PYPSstavecEfruVBB8fjcgprCfN8hjDhYDscGJ8GEbMVY7TA38zZc",
  "key25": "2EDmYnTEd8f5YFGGtdSRptfMLFLzc4FwVHLnY2Fhtg4vq9YTgHDFLFUjdZnYJrhcADowvMXhQCC5QdnprpNoZUUi",
  "key26": "gBMRzbCB6ighqZiWdtPi4jFqGXLSsCdWm7SdZRVg9CXyJZCWtXkwcsYnvv95mAeVKXGuWbV1cXGeeMAL9jVzksA",
  "key27": "5acYBz85a2vJjEJQfmu87GKPfCG7EwGNAsYf7vm4qnZmqUE1i6ydZK2RPEKr8YrTybtcyEnw1bMPgotsomfkFfTC",
  "key28": "2ERbQ6LAn7n4563iy9j5xcRhv6kAeXJZzD8XtUWyg1g4mTjcRGiumtgtsDqgfr3JV8W5k6ywTiU6vkk33Vbu2oiJ",
  "key29": "4jM6j8x22V5fFS9F7k6rJWJEk1rS7QQU26BqkLDV81diw98Devwyh7cik6efAs4s3LYhSrky2JhibYAZhjRwk4RZ",
  "key30": "brnQmbbFXvdgZmjmiPBwbyH1a2bJsqQK4eNHH5F42U9uCb6UkGD4v5yBYpbybZckvbZVfKcLG9k4aMy2TCz5YKG",
  "key31": "2c9mtQxJJ1uaTCSZsWmFzNT7SutMmxhcGRAxUYLEtbhunnPAA8RE3bs8HWVgNoqxU7g86qnWwb68ZSbDXoLPyh4n",
  "key32": "4rBEiQzLGu6ZdZncZyvKUKv8Fz1b2q6pYyeakY9TLGf5X8oHnLEAWEMPB485w9Bhvr7rc9UmyhjeXwbnB7BEVJeH",
  "key33": "2FQtM8R1xmtiT7fH47yCTsSNXPgbWbBKWFJt6C6YriFcA5Hifk9c9fGbTEmn7ddzcbfuDQGMs3vq7uX1D79xZixG",
  "key34": "wqQwSpLUyrxnr6h2Zuqz6UWhyoDjFRfMxeUagcNnNedcDhWSjydXMtbkgB9WyyLnAQhy11Y3HjAm5yFTABtrV5x",
  "key35": "5MdpkwaKKD5WJ8T4hD6GAKi71TRq9a2Wsgii8dwMkAHGbAb2nC42dhav781Ksrxf3WPNa47qobnW3RR57Askf2X3",
  "key36": "31JgRhT1BpG9wzxnRF2UTkjdf7iR7mhH2cRrvL93qFfiuMonv2GX1zEn5KnHAN5rtrK7KM94wJz2Wxv1Z5tE1aNy",
  "key37": "4uEhb6ZGcnn2QkcVsskQQuVR9YEA4JtGHKCM1qe6EjhG3XtAT6u3S2T1iKqtE2izZzJuTBGirgKLff5EYguH7EJz",
  "key38": "kxcrog1jUc2fnyQX9QNZisB7ceoD9jgBBxAQ5mtWTJ9ihuYSeUdWzXbScCmPp9EXU9SXK5gw2mMaU5LgGHRKNfP"
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
