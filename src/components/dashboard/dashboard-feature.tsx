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
    "5RK2u963BEQe5PdBvk2R1soB3pkULpsvdHPMsCFBLGVagj7YNow2ZHEiJYYgiw8T9cn7aEHxkVGeHggquxREw4RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3raBJt3yWfEmw9gQJ9mMQ8mVV67Q3J2Sz4dSCz3uTkeomBYLQJ95MiqFfKa5SqbgB2kNczgBDt41QYzaTDztkz1R",
  "key1": "2mJwxRrt3iG6aPfAkqwphAJRE76dudVHKQzNE5fE7TSgg1J5vaLgSTbt9YgZYWUkfrqKvdMZNrvgcQN5TvdvPCY3",
  "key2": "gHfVG53PgBG8tx5qfqqeLgyrK9qVQe6H6cfeGQ3ttrageMqSbPN7CEBivtYxYJuHnQvk2Yxay7ewNjXZiofEtaC",
  "key3": "4k2CM3GYpTpi3SnZ5iayjws19cs7mzUjrPZu5BQLvPMhFJE3vJJXXK3ByiTuGjWHeiCJUjP1QjXmyzjcEWUd1HLp",
  "key4": "2P5P7jaPuHuMPy4KDfgkK9AM4VSqnySyjq8yPbASRYzuVvYpq2DCFDiV7ojnXh4iG9E4jxEPZsqTVNbsaUmMuE91",
  "key5": "5rcGvQd9LTznKFmQKyWhi3UomgnhKDhaVZNnGYfTKw2sGTqrZ3iE3s86YnNkLAZZzKjWo9fyHjhRU4SpjfHWYSh2",
  "key6": "4A2THzfHGRkNCTdV2E4uJwKVgHkpLRZ2WRwAKTLxUQkeqFLVMcc67gigpEkNj2JvX52X5pzuwwDyHdgkAvuwAPqV",
  "key7": "5WBDDZqY6oLwL3bd5ZExn9wyNGqhtkbRXfN8LVgbUzeJ23tzWEh1qiGCwjViKH7i5rNh63HbkiAF53nnhJP43t38",
  "key8": "4WSBg6FHcEPgj4x3oRhhRuiaEMBMGRqvPB8uZCpdZHMQAcqk4uSdJVDYep6QwGXEQn6KrUykToEtqRX4DCZxVEAi",
  "key9": "TFCUeKDWHMNryquxY3c9mYm35v7Y5xf1VFCAErbYeryQLv1z258y2KoorMdAuEm1venUA5pYWZK8fDSC3uAKbpF",
  "key10": "579DXf32Goyx2KzwWEXbLXPxiqjkuBjiSM1dn4o5xhY1LAb2cUwVCDddhTJHg3FxDd7PFJFza9BrQ4ak5rwK8br9",
  "key11": "33nKSknvoQE6T9AQc9Dym3zNE2M2P3qox1NaQdnPtJXEnnDwd7wfpNmYoroQg1fhkt8k8jfSppcvSdLPM8YZcrqw",
  "key12": "5EieyVA5QHNYhYMuFcjp6bTLmUn2YZVHWu3wMPv6yhPVixxCMfuAPVS1U1cqh5eQjV98rZB6inUHSa6TpXcXMKyG",
  "key13": "jfY2Pu4wTHEuDNgbDjhVCJ5Z2v8UqWi55kydybeivRdZ9AQkQebhHxe3PE4QjLvMVo5qKczaDUw3wSxrRvmoMFy",
  "key14": "3rovsDTB4gENgpmgrah2XBceJ68BuDnK53g3nVaVGFrwrToyifFVLEsXnNGMuvJYFABihEftsGFfkGBBALmyAy54",
  "key15": "peZYYc8up2td64FnqunTNSyceBsUHpVuP7hENn6SiQkESXimpct36n9Sb8eDZJarxirx26V4r46ENfUB14DWn3E",
  "key16": "ckUBgicAoRARgCwoZknrKe2wQMxLd9jhsThzwwVD7ShguvoDjbiTUwwaFaBFf2Gbm4WgRkfSX8C2Vh2ineeeM7W",
  "key17": "2zHYegnSPtnVGunqgNuPfpyVRT4Le7AEjxdzAgvUJTVvFFgazeuLYwY1eMbfvWYYRju92pYoREGvrz8cXd1VH2vd",
  "key18": "otDQUC9LbPgdGrhYVysmFq9kpZhrV4PjJTGMcugv6J9GauijfwDp14GQp9HcB6vAgrDLJtWRojvVgrE2M9R6qv7",
  "key19": "3oZpLTdK32aR6kwi5yUvXUd3exdyVZeaLPY6gPWqdSRq32zFqNBnvWdmiCXpGsRxiAuBXd1dHsAaxbpjbUXqvkAe",
  "key20": "3aRmsdKevFKSSX4UvePBdEHSdFzVkx69WjRi7Aw4tvLsTRov3P2e1Y7DE3hd8ATV7BFB3G9MfoW3QvYj1FuDkRw5",
  "key21": "Dqvbd9BdN7zycbCQjS5nyguRqHwtAhbbnUxj3qHowrMkLCb1XGEnpMF9Y6GJ8qxafSSAn3ukV72YrsSav88fATE",
  "key22": "Vs7whxkAqHE8AQvCjcVCKj3vRksYtQxzZ6voRDp1zaUJhNwvnkcyed5c19vBMX6pTD8Y7tCH2Fm5BBBPjDd7eVR",
  "key23": "423wfz1ZJKxcfTEXaU4fC4QTi8YjP994QdBy4qtgSwrQbrP37Zmhu1HNRyMKre7b7EuJuTdYio3aF4HEMY8fKmab",
  "key24": "4MCwCCYb4ZRgYr4qjoEPyANACpHRfTaZmuFU5eL9qiPPRfwUtHek4ADqNJ79APXKxTXVtf2gwKFwvwSZxBXtsUkC",
  "key25": "3TH2jobPMzHLq8zXzX7m4p5BQTpCgDAv7eLo2ferp28dwXoFaFRBfc4L7DuUtNCDDe6oryHrWBZDmFEn283nFnRb",
  "key26": "3bHcRxFAXvoKFtGwXMRF2QJuKrFYyi3VyxQYMvjd5JohT4SyZ67AJPDxoi4NNS4EdbxMzqNfWskmvGva6CmVckS8",
  "key27": "5KKs7JhrkgSYZLkoL1vFN3puJd8Y8vumtZjPNkwE4CNkXpNJprRpwfKkfkMsg1D9K31oxAcjsfhEDd3R4zKvidGi",
  "key28": "4ByRbxcBzo9D2FKKKv9kPDcF8w2KiUaH5j81mAe72p4USY4BCyv6mBuFv6TJyPrk98syq7RVVHqejFjRMZzrNidh",
  "key29": "2p9hyTAhjNKMQACZXptkJqcQ4ETCrX8tWKVeDZwvPtsGEdphxnQwP7rjTR8gCW3XTKKLdGPK2vDZBeTnaPt9yvzN",
  "key30": "4WSpK3VbjYUAHo9FYnVgJJmENNw1AeJL1YMvFEJbZG3ZDcVtuVDqPBM1Dq7beKga9TJNSU25yMuE49Sd3oHhkinM",
  "key31": "sfuCNhDtN38bBqUtCa3J2YdNAGro1LXgUESQkchLexp4Q1jsETdvbeK94ijgg5S8Doruwk8uauyHvy2VXcUq8rf",
  "key32": "3cU5roTidLxtFQUjEWNwtEUWduGrMYg4dVhLnNNxivoAjrPecjNySsRk9evSJFxuKoYYjCphMS5pMtkSZavBT5Ui",
  "key33": "2cKchRuw1Xg7vdqmNJcq9gKAxHwPSbz79xTGJPuHonbvzJTScszVmQ78ys8BHz7cMeNC6LLjbBGmBqxVvaEbAPRd",
  "key34": "2EeUA1SFtKM1Rd2YGtv65fmsA2dB1Hzv1XZyLYN6gpYy8unsqQf49HJKTHgTkErpByrP3z8GJnfCocowpBNGJh5w",
  "key35": "5q4HvcMSJsrjG1Cy9eSDjH7nGScsogAgthnQoAUu26PJHAHQC24bW4u31EvtxBAccWfXTqJ7pat7kwjKNkQkfhez",
  "key36": "5Mv9qQK7W1EvWMvLrs8CY2MjYxTDv64QPxP5N1w6ppRhi7DJhfCGBn7WvwTyApyVbwLeXXjp4yyS4GDVSmzA5uiX",
  "key37": "Srun1Nc9XJBgfY4erUTodoXq8rBeUS97zUZ9k9wKgh6TccLBxYUp1u4VN235waHvkRdqVShmUitbgcVqpQNzr6K",
  "key38": "2AzKXKkVC7aFnEh4Fqn9ZJjFJXQFyu2kTMJ34ssW8b1Kj77a7eSRe5aiHee3AUTF6tGfrynmAnJSMoA3kxkbaqqR",
  "key39": "4gG1H5cr4BScAxbhi7UGxsgSEEAB1ezRcpnhsPQrhkEnMWiN1ug5wYYB5dCRmn2dDh82P1oRBPLraQaSuzZYPSLN",
  "key40": "3DZCq8kKjk1wwyRbJ3jnMjUHHkMXYePCAyEs1eiMTvSghta9uVLaV3UMwBgY7pzx7WRwXsyaJoCSf6tWUqNeBmaQ"
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
