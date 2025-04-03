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
    "2YLP13THtuQHAJHLmXtCfuw8bSrhSnmP4Y9LR4oT4SEJN6BfoRfnFyhkHchmze1GTRmrZ77zStS8X8BnUVqeACFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrfNzFV13hSovycpAHEjXvs3BaN1bHTfG7ZKsKswhEAgoaYGc3ewGyAU6JPEjiQFbzKqwwGEQERMYfEVjgMRkQX",
  "key1": "5PiZdNjJvoieJu55usBxzJ1mFvBGWaAYa9ZQV7p74GVZSWeXVTpRHiGCoEHhZ4tuTPDjyA2DEL3JubGMDtu6dSCW",
  "key2": "3AqUqy2qi2BfCdJu6oM2HpUAzuRXgxLbxAerdsmiubTUbigURtZuYzjmcXQJE4rrzMGfMvygMxXwNzh8yD3gNjZy",
  "key3": "5jPSgb9DAyRSXyc5Fk9yE4Fbo59jEHjpavroBNJNXdAFEaATKzwjvGFoCwSA7hhX1d5RiA7YiwWwFfG4LDHbUUE7",
  "key4": "2Y7QSg5rzPpwBjAVD2HpgdwGk7HbXpTfZafiMBMr8KEtqtVkugh2aEiBsJat6ZjcojP8VqHRmj2i9WYe5dWBAAYC",
  "key5": "2ExXQ7guRB9jJtEWkmzdB5mnX4wD8iJ8NRnZ6x9enZSnKdaRTaDp88do5m6d6X7mthjtA71JRJaHJv6KXPh2K6wg",
  "key6": "5ayD3DP22MRkvwk7ueoWscH7ei2JDEcMwT3NJWkmCBBihvpiMcL7KksyDabQhaLMhxkotVthfSkvkJhdQ4GyjaLn",
  "key7": "4QiDSRbYjNQQkUM3YSfCvqmmYB7fn1ZeA9JBzFxrwUJBSia9Z2GGpFfAKwv5TuaadteyFzpv5inai5F62asT4Ttk",
  "key8": "4YevbhUv91EWP6M2Mq7ZGR3Nw9fSV7NRf4kbmTwxsuK4YV3xgU37PthQAC6VRNaYk6rribcmTwWz5qtpyzeMPy2c",
  "key9": "3ktFNBcidKbL4CWDBtWphPbyiqhzyb1f8i5kC2hX4dSiNVCRaaq8sBgh7P92uc6CMCRhCXeySjwJbExForueGoPk",
  "key10": "2gM7ASZTqt2JS9ordfyjPqJGjDh4sCv5UPYyHHAUbz2RayUdthFvr72qZVs8RiSbQepJnqrSqYf7RTwUYkQG4drK",
  "key11": "5WQw5KDynXzDJwLiqZPhiXJ5TuuABjczag7GBGtgrF5pfj9sw6YspApSxn8BZLoXcKVZ2NWcR3pgGJtH5WgDZRyM",
  "key12": "44ZLnudDZ2JX2PR9Dx7PL4EpiG64Pe9f9qScJY2cC9as6yMzbnK4aJUZUEAPKnw8d5G9f7KiaUKWboiYhjNvWuZy",
  "key13": "3SVzY2KrH18RbyjQmTJehHVCBJjPvABijvDvqDnA7tSBT2Am45rg47sG5uNYAup5NEfw52AvERqEHpr128BFvDqh",
  "key14": "3L3z3A9cXdzRXnUXgnSDCDeKDNiSfeZoQtDBuD7odKNsHhbt5rX5RW8KcNP4rz2bnJjYQ1pz64mdnwzfrjcPT9Y7",
  "key15": "2wDdDkzChE33BjW2GEjr1wZevaLmRpk1Q3MM9MVvPYc5Vu6rhsnjgjLCELALGCj1715WWnVqjvQ2GjqJEPT1bxTb",
  "key16": "5gA4kQdkGnc3dUhpYqt3tozo1iopUgr6CgqFC5Jgko8TBWTeJsty7QCW9xNNv5diTvfQwAijYsjU58dRkbFCrvrJ",
  "key17": "7fpeX8VH2VMYXHBK7sME3bohDAG3YjgwEBkPwh2kd9m1TT64ekyAZwZy8HUFQMk9XRGZ2AHmyZFZ2gnNFeswZg4",
  "key18": "NGYMjiNFr5eeD8UgWKMMVFvangh5adyp8w98qVRHFgTeBD1tyXwCFB3co1HA5SRTTmhfL5rQtQrk4HfaNupxYDY",
  "key19": "66oVHAD55eJaHG335KUkDs84Dky39Eetc82EPGB1CzjNRGcMGszdGM5gJt6mTpxH7nw76reSghQPV3RK3XsSQQam",
  "key20": "5Dc4pPHJztbMvYbkJUZAw2aKcyZoomv7uyA3Goa3PkFu78WzmmsAVTwht1paCV5dwLZxqX9it7WHAdw3vXto2hT6",
  "key21": "559c8XNYL1Xb36kn1HwjDkMYueidzFTNzcrAHpke6KpR5n71Uy6vsHg3GNQVqwYLUn4CM4D5Dg8NCFxzTBnt6xt2",
  "key22": "5P2eKqJDwNgg5Hk4HGthxgdxcMzZacSdPxW6w3ragEdfuzYPWFJhuSyZ46wqJMKfN2PzYx5FLbKMFQLmzbd2kuTd",
  "key23": "4QErC11UnFkciErzJe1MeGDjKBmiaK517x8jWdfWDdQ6CDiFNZNGWxwEdJWfPLc4E2QohrsDEY5PzLCRyuWJZ2jZ",
  "key24": "qAJCPM18AdBamCByaPbfC1MoD9zENSsgfmrE5igQofiy6ZZg9ssrTdbW6QAQxtNi2RUq52sctKsJLW3ssAMYm5f",
  "key25": "3TAYjdT62aMpP28sFuvTJYfznWhnAEoL5gEbanmdwz8GRwzS2hEDf1VPxzhVGkCGaDwnC1nsMQqpHXbk4Zi7Ab2J",
  "key26": "4598jspUHWYmAQCdtRB3jWzM8ih2W3gZiPAH3Dcga86D5KV2XhfM3mxXi4AZV4TMEyrGT7Ap9VfqspSVybrdu9BT",
  "key27": "2t8tivFjV4YctSFgueCvyBZW9qUSfUHaUDSJDJtHndHUQ2MFP7t6CoAgqwFE44BwguG1MwpaJPoNQDj4Nri8muyD",
  "key28": "4idahd2Q2sZhcxpyiKvVcWbUJv2Jd3MK9FkPFv9kgyUvATjomnoKevGzteitWEZeB3xPiFxjQCndnm5tRnVarxsK",
  "key29": "5xfBf7XsLgGPFKQC16sSnsrJPZCXpkiMgtn1DU4VmniKtWfUNUsjgkvZuWYRrwxzT4K3wm4PHmedwiUxZJQCDsZx",
  "key30": "R7qVMjBoTz6jF9VQDETQ5W6GjEb6N25ovcavvUwb7JSGf7yqvKdmoHkXvBiGVx4tRSu5uSrfVGavcXHqGrzi2r1",
  "key31": "5WC5hDKjKMKybwQh96x3bK1GZaT9K92aaCEh8HGSwzqHUP4DbkedT3oAHvszSNkV6nRi3x6gMBJwY39FksmD4JGp",
  "key32": "2HsovoKvFRQfAX88cAmsQCNHw6gtoW7xKSHRgwjeBAbMRgXtmNcpWUauqAfmMvq6LTbVAcLgHcVoNa3TRxbfz5od",
  "key33": "3jMiuVnScpz3X25otHdzAWyKXW1asvhoiiY1ffbMW6VPYfMFiqnnBc5LGEtmBiWPCM61wpSqpt8DnnBCUxkpcGrA",
  "key34": "2sDdf5wM21MfbeaKDjovBVUmTniRmz1UoBT4kF8BfiSaB5zKTgx3ydFm2vLH2dK2C5jv18KAfdNcaUpn8zhpsaA3",
  "key35": "4TfrFBvcSY1uWjb46GPyEkoTPRq1V4Pc99K1aHP7hTbFEHse2N5GnoAHeRMLZrPWPQjPztfzpfeRRhwcz8Qrz5MP",
  "key36": "4bJQvMDFJ8157jKiLep5K5HKC2PHaQaDi7ZxhBg4xJE2EPZStbux6jgBcT7fRqzjtiJJu1qQ6iY1MNCgXkuxUUve",
  "key37": "4NcShNHQEwehet4DvoAihf6TZR3m7vcReKsCW6mvKoNEpogP43qXJ9qLeYVbGMhkULZe3Cx57YBS3VM8YQC5nWpn",
  "key38": "7GPYp54obgiq8sthkJmpCnwKfQ8k4WqGP4WDMKf7uC52eaPmrti5oQTvyZMdJihrtLNgKdijprd9qFebunpnBnY",
  "key39": "5M5HCpJtz84Efo1KGK8uz4gWcqCCEtgTm6tjjnBEsqr9LTWsJpbvEsbBwwqXcW6BR85Q5FbJzU5gtB1jHhtYq2GP",
  "key40": "4TXo4XUWxqNd494VfXtUyLsKooxTXsY4uQaYbdGeL9rjWNMZXrqaU5Xkv4jWAbxyZ3HznpcgkaiQKXyfsJgYtGB3",
  "key41": "3sumN9TZa6QaZuotZy9Ut3szxShTxThr7odfdSXwUCNoLYqjUFNHHPxGag73KcJa7sV3fNc6FxiMFwa1cCzURKtw",
  "key42": "3QBBAn8RpFB1p6pvCxeqbtTgDt9hEKN7KyMoCKnE3LVMdUPHCpCYHYMdpoYo7XQ9NF5dKv4XwuYiq6tJX13HS3i4",
  "key43": "5EkZPYNvtpfKdpVVcdcTX7m5JkZTpr64rGBjaqrTmPBw9Tyu4bY8x5WbXHSe6Cy5oPQGS8zSEwnTTSTY5X2CoFpB",
  "key44": "64xDQXLvKwJKeWVpsmACpaw7hK8pynoiVhvZbA9u7eqDGMEWrDCJjY7eFfjamACq1Bcq62bKkEdnmqUhh8cxWCfm",
  "key45": "fV9KFfoMMYVjoRimo3PphAbGH5gKGaXvsnAcfhYh3hq5E9PUNVxfYqGBwqGYd9jf3CndwjMk52TYr9hE4sADWjQ",
  "key46": "4dBdiujWp8WAbee1SKv8cie8931LZLWtpQB6YWQ4EYyzTqrTZ2t7jXHbxqMio5UfxWQxr9Cihq8tAJDkP5DTpL4a",
  "key47": "4Mg1GbAjkm75k4PijT5Ne6q2BNNFMwGRM9XZJYqTsNQUDFhsKXf5LNF1zqfUTNyNdfrj1U3Zg636o54UrVBcyyRi"
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
