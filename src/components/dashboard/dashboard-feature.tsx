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
    "5uyzUH9TbGnDbva7RAQDDFvxqL4zG9ToAqzBjj5u7zMxe3ok9xhKBzejNf8EsopXf2XvfhXk76zJSTp6djnZ33tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bx3T59dzDiHRNbqHpB46XiTS3vfoQPktgeNqwc5mnrQ8PgGLt2HGoK2keyJQ9fb1AaLcoPme5kkMVHPoKpV6H5f",
  "key1": "23QCyRzRiEd9Tt923bk8tn6cVu4ouffiWxVAWbm33kydqwaGU5ojrtRgCb1hP6W1nk9thdhPiQMZPUsLnEkGKXEC",
  "key2": "65EmPrj33A1aErrptdRUXG3GRh5Sc9DWtQ4CKDXd6qXDFiEo81xUBJp3amBSGuUx4c5daM8FY1DgZjFSkMNMQsvG",
  "key3": "581YpGyxWswWGtGFUUYYbBJH4YG1reDqp1tXp4vvY8Qc7tcgaCmYtoEFNXj39Se62m5umfFmX23Nuo25a6xpYgsV",
  "key4": "2gUz1qFJKQq9Jq2QxFxsw7tN2woscWT7rG9NPb3nfboPknSQBDQVsHsrVimS4WRYxQMbYxSYpngyfrrSosUHNjit",
  "key5": "42F8e2dyiBhPLVCLuzjSBgN4z8w9ux83TT3JBLkHCcBvRrwrDqeqnMVk6PLzcCWHEUEULH7LA7Ptc6UbH7reg5k",
  "key6": "7NWSACuZALqtoLmeknkBZrckq1gpLgv1yEjo3djjprj8NtdqeRfu6kHo25cqtZtZ4r8emE7NEiag3L9BHeFQsdh",
  "key7": "A2jXK9bfu9x92ohhYxHYV5Mww8YBLpceVAT2gKe7BbsAVMwL1L32x3QFG6e8DaVfwUFy4LEJX4RpjLVXWbV5cJk",
  "key8": "5QCzbxs9nR699AqGCt9E1jf7mGXQMrJBnWSH1dN66ai5ZrQSAfuNkyrtEQRuGWy4rrpX3qvndhPY8NuKi2v3Rffs",
  "key9": "2fzWokeEZcF9vmTVK1mYZg2NeM2VQ2vJwSyDPmcf1YBU6rkHK9QYXLLtQAYCnQ66TiGx7dZEumci8V7B2vZzHeCg",
  "key10": "48g9HiD1VYAEYVh5XZeDrJg1KiyYiynHmoN3yYbSKEdLT6iUWPnE3xaj7Rs7drqBcn36Eg5Mzigt4PbX8fxcG982",
  "key11": "5Qx4y6S2BHowSLHwMA4pSwtS8QyvSWuPkzis9GrK6V1r5sHNi1qU2duKgXVikzZn8oo4JHsJbdrsA1KiLDMwU1b3",
  "key12": "qcG5UuzKA4doLSqRigQY63LWjG7JVNX6FM4FwRvXsqA4hhhbwHbVAioGWDp2BWzTRxt4Egh8i5jbXeFNtP8GK6t",
  "key13": "3vX5TmhNphMjoBvQ3jzXc9D5ukZHczUaXYau1e5z1XXLEvar2Gy5MdnXSYPX8okPiHhwaNGreXgeixuY5RQzcpUF",
  "key14": "3yJh6UeXwfgoSo5oCHg3JJsPfzBme8ySmBWwuDistXEnmYkxA6dfhBUmpUW9GMirJs5i5NpEmudk6o2DiD8St84M",
  "key15": "3kxogvJoZqQiTS7VRU5CzpVnwgTjYyGK6mJPEDE8bFuV6sZyTTUUNxvUCwKXVwmZnRG7u9pkAmcQJ4WKgKoTijeP",
  "key16": "32g6qJZ88kBFYvKGLvMMw5CeQUfNfbjLSmMpGtvGe4hELcRYtPTctXKkkt1ivRrRxhx59y2NZZEWUN7ZxxBqKeHp",
  "key17": "5qJyjP6DFAMx6uPt1bU9GRpRiu7Kujnb6iXdNk85N9jkxrFMphQdSpF5jVrqTC2WHGA4C4mEiGEtYbwoDzzhwCGE",
  "key18": "4YfspC1AT4L2AseK3zwLpge4tEj5q37vcjMSKUKuT4mPQFzywzPBQkGEC1ApBJfpFPZEJC4n4tiV8SFA1Wz4NoNE",
  "key19": "619APMhMsGWdvPmEZDx9GdjJEtmsmnutScLps81SMcYAe3Hx5wLq8ujYjbbqU4Swmb6XVH2jTRvtdKLdebRkWDVu",
  "key20": "4bYuJ8CzkUCgVa4YGms5Y383qK9DStmeth2icrM4o8aRGRysCWLT4ro4irxoRwMqLPPpMptaatJGzHArCCKzFGTS",
  "key21": "2XGGvSiUepaVGMd2JUDrAC69GonhvWLB1mXCDFgMu4LRMSvYqLAA99uFM1DsqgFMMHsXGV4tR78hJgSxjXogDjyJ",
  "key22": "1LbsWbFMMdYsTQngvoqSvw9RkpuSKdmrZGzLSzthWVDebYQmenXXRDWJ73XS8495PheSw9fHEUkpRVPsPQfX7mC",
  "key23": "kUfti2yAC8cnB61zqjH8WYwYYrGCfgAd87sPtehPHmoxPNRaT9JxjuQ4GWbMkYX5Q6Emhu5otzBTVGQBMYXvWU7",
  "key24": "4rrsFeTniVK9Xy5M99gMzLqc8Lebh5bZrUKRhmy3Mrr4XARhKT1eRqNT72LP422DJLtQPFNfJhCPidtwR5Tqph6S",
  "key25": "jPCnzfGsTRiNjPVge2aPRHr1hERrapfJVCLNe2hj2kh3tqTVrCNmUMJfpopPceh5EK5bovt8eeFFmFJh9ixx2AH",
  "key26": "2DzsbJr4vRLn3U2FyzN5ekCQbiQqRpk8tNMxrSKcaHA7Mtq3eBdtB8bLjHoZnt5fAUQU2Uy3GEneJq1a3U8KTgzv",
  "key27": "4sVxSVUGhbxnZp4Z9PWyr7uw38QahZ7hQtx1bw7LGyNQ7CT3jfFHvUcrYjyTVAyyELTRh7DSaEnDpvnBNMVa4bSf",
  "key28": "3r1nJSoBDt5u9qh3zTgidNgXoBa6NugNq5ZEs98FQuM5CY2nJaHbNcF3HsxAn2aq7dzk169HtqtJUBUQmenye77e",
  "key29": "28nk1wfmHZorTtZGhyqJPdFhxCvK9yk4p42VqDzGjFuczgD8mNesCgmrGqvYXtTQKpSRg8KqFY6UWZRnXEfJauXo",
  "key30": "5iFc8sxXEMN1mArudoJzPRUSD9JXL9itrAvswKm6Z4tY646Vi12kB1866QzYPVuPcH1f1TyBi4gqQNXq8k6HGzJ6",
  "key31": "ZC6GHTB93wCUGKnoe7cZNTysuidS9jmxcDGfCPrnCvt2dj8bJBMcyWAMRpWU3x4yc6vb9nxQGXNSfrt4zbm8Bx2",
  "key32": "ZN9bSEsFMFY2MhgsVm641RBfKi1buAJDXKMsPnbkK9hXrgpzbK1CYnQK8d3WRCsynG91Qmf4JNivkjtNnB55wnd"
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
