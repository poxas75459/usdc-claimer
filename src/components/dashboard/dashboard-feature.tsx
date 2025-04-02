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
    "3aLefWgF8kfLksGZTXEWBrBMMm5XyQ5UociJBjrDYr3SejWDeeZDa41SAtUWs8nYJTbUWmFCk7RQnErRiGsfM8FS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RERGyszuMzWizCQRtyoppUJiKjY2RNoY3MWnfQrRCFQgW2PopqBtzYqYznA6S5eEWQGrRFq5EXGSiecTLd3wjvT",
  "key1": "3K5xzVxda2Hb9A5X5AHncwncLpC2u829QkjV3657tRfgaeDsQrK15d3JPpmnwdL7Lc5EXCtYiYQ4iTAtXbmLZruH",
  "key2": "4CFL2Txx8jQcnxntaWRgc7V1rbmcp2bwmtfsGijd3dKKCSYSnBNF3W4bUFRhxBRrRoxBtwUxE3owmoCiSfP4D2f2",
  "key3": "427g6ac8cwXu5qDfdp2uRX9CBF6PmyVERGHp4gxSDwVsRnN4jCMJL8CurnCQE5XtwthtFudQj9cxZaVoif8SoDG3",
  "key4": "4LhxPehwYV5SownT4FMvzK7h3hkx1Fqcz1bMZVhCj3ckKMtu5j9UuLBah41f7CUYQN9wAXyNCp9XxGes9EKD8Z3w",
  "key5": "49u9bivkZP1Azczmv1TQkuM2MUYH76e8YE7SHFyHdF3pNGNDj3c6MLNotiSYfYJPjcRxKgXUMA5kf9oUEWCkESx",
  "key6": "3hdzp9kpL4hwMDA6NxnYALezpjaoc328nGnSRWVD1DaDirkwXaE3nunN6pttGqGEb7v5E6a8SBnkTLjwMsBcBHQz",
  "key7": "yK5kkk95sgYgiPEc99L4eueZr3UrMRUTs4PLMXmNNYRups8JxXQZ8B2ofoBV9ht924AES5uJxUDEibKaeZmxY8n",
  "key8": "464nZUHa2yJuHz2TN6iNP39EsL786gWoDWmcxqnjf5FuUi9fSyv7GMBT77mDHJftBuD216SYU3e1z9cMAA8iPKog",
  "key9": "2reVfsjQYogQLVt5si5foqtT84wrQNd5GiXbUuV4XQjggQzVrCr8f6FPPYn6r9CuZeupxxhSY5VtDmH57V93AjpD",
  "key10": "qL2PCNdsDb1uxmXFZCwMW8jMa7HUTuZxSdBkfU8cxWSqpqYMAhvRAeu8dzj9dmorfnEUFNCNwDKm1EZSxYRJ8SK",
  "key11": "26W1x5AdYHYu2DvHVg4ip68EDTfBSxUsNZZjS48najn2tz2bLRPf5HhaqU3Ju76v4DSveWGJyBGDG5aWq6rNQLup",
  "key12": "21XfVh1vdWsLrbX7hHviqWJV4zHEWYn84gt7XC7ie87nj898LaKfS86czUk1RYfEcJctCqGV316azs73tf8YA16X",
  "key13": "Abq5M4mAZzcHJS16xcy86RBkhueAcuawxmQo8deeAs5uf7K6sP8dft2TusQBVQt8TNGCUwhNq4cTbve1769DiUH",
  "key14": "2oVe1NyNTpFodLite6bsesYJEjrdRKQYACKT7gJTq5fTjpMRx4XxJiBVshQhJWJbRKpuz3guzCQPrY5NBmVjJFAF",
  "key15": "iSVYs89X5W8KSBoqLPU7ZA1yDDCsqw6KtedRoH793SHkmcFiYtN6PRdn71okPmyT8JAG5tiKyDADb28DSgtxqdS",
  "key16": "46psLNtPGq6obpv3EYrPXC1oNWb2siBbMPa58gm2Djy8NMdh8AL1gsxJtDgbTnBsevUrN7JJkAjuz2oTLNST2PN5",
  "key17": "4S15XF4rSp5xFhsUFVMt9oD7g3dKapDxhcSoTMy8q6AcuXtxfaT7vuwigcH2sSnRPLXsRBWqo3fnf2vjNEB93Jgu",
  "key18": "3ptUuC1LaNMzdYkE2ixg94EVE7vKEfzhUvqk9mBMS3F5mhi6f6H8xSoMkvaBorM3cpt7NAjos6syrkFxCZ1EMEKk",
  "key19": "gBehCX8hsEifQS1pVv9efN8x5K9er7p8W86VgkkxnQBNxiiD3ERCETRJCRguJhGyLQZmYwBMnCTDg46Mv5WJt5b",
  "key20": "2D5ZwW1tiLNvVDCzZ3tBFt86NKMp9JpfjmtjtX6M5YRTMgdjxp27PEqMSfeDguZDpnueqvh7TtNZuFSEfFjP9pFH",
  "key21": "2R8fa1r2Eg1RUtQzqKea5WG6VzYTxKe7Jn4Y59jk1KYhszhfPSfPn12YipncJPKwkbkvh4wbavmQrNmZDaJesxBm",
  "key22": "5c2bawmuF29QpappE3NwePSudgx4qA1umf7vFN2BgZ65m7rSdZ3rizCiqZWUBNZcsiCvMWvzd26ujWuXZbgezRAS",
  "key23": "3ZNJYMXy5LEvDQWcc7CGP5tCGvTCuK4p6pNVf11CM7sQ1YGd3KAhkTeBTuHnJcUhnZkT2EdWx57YrgPhs7SNKewe",
  "key24": "HzThcC5SgyRgD1xxXc142o5RkK4wWntt8mRFiCzhuXRCwab79dsfEo3sT1UBKBKNSV2nx5Y7sSA6Fa4zF5636b4",
  "key25": "4hwTzLHoqraqn12Et1JJaKnyD94xCLymbDkUW71PxrrC9aKCdGQhkFnSHCFcqb9MG6CoKTeF8aq21iaVW2i9KKBA",
  "key26": "3CHutPA4DZRdUMdRhAdAwkzFiyiQSUq1m6GGkuUcfvz8LNVTStz7fJcwYLZFebhRH6Nt2tDE8usyJbDYsH4qqJvA",
  "key27": "5DmadVHsKySARiLB5FWm91kDzX9bLEkzzJP2cK9C8jqX5kaEdbVMP6d56LrJfzWoFmyYf27pgw81mGrW9AHti3jH",
  "key28": "2XjRyRGW1nckBf3kCja4kKjfiMNnjLaiQNbC6m9JUsqVMcjVvFYdh3t5nMbEpMpdpSfpY6Ajs8UmFCyP6VjeuRVJ",
  "key29": "EL6rKwtgGtXzEYQ87FCN9bJD3Wi6ft5RzWZ8mNoVqQmA93LFbkYSMidSLsaAVceBacx2oUSwedqjWwgahsYJ7Fg",
  "key30": "3ExDoYj18jnre4uopm17yuhdUS8MkCSr3CmDbYFuKBjmtSHaPWh8ntbGgtggATkBTkgFxS5re33dtkn947Z2ipLx",
  "key31": "2PECNtykfdSryjcbhJ5u8LvMhNAR1SmmdEuDKAFZSMQaZyEACGur3HEBgcuWvz8eTjwJ3DrDP4UEX2619wFwS44Z",
  "key32": "5eUmvviGjFv27APSay4azmqHZBm1pHu6qtQjhfuqovT4J1FBpvYSdN5Gg3AC9gPjXFb3VDFnE28YMMvFv3rHft1o",
  "key33": "2bPReKqmVcoD3tPseVhMgr6fUGi89bdXRhYRDqspop24UN5GR8QRwvfDifD2R8RMbgNPooBn6GuWa3JpKcsMpPpx",
  "key34": "22DaSXkmXWuRR7oyXZaa5xPL5rUtA6pdX7evpwxAsKvrub7LdpzYVxfffs1AMtChmJgjWvdPxZCe582zoT4qdr4g"
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
