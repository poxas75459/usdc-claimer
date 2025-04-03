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
    "51hKyHvQHJnTp8AR8u2N2FRtuZJ6x4uG3pSs9QsT6dpeKBk5phQoczgFjoGydrtR23CuPHH2MssPQb4kV46gtXsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Xeynj3hebjvfPRLuJs3JQm82seoQCUEbfGJrQwfvRukbj4y8nAxSGaFiWGAfa9hsewj2BquKUxbKd5zWDPqvuF",
  "key1": "5tJBMScxyymqxcYQJMtxQkLHdUwSZW35Ba4QcqT2DxkHGk3rQu7LU5aZRQ9WxsY69ZfCU6VBVesvsSKU1ud3f8RG",
  "key2": "2fPSZRNYtbgtCBUHkibpSfrxwT5SyuUJudoAKcTexkqTbZBSPvHiSeAmp3bSZs1ZA1THEkGrywZJkDn4ngta63UJ",
  "key3": "24QeTK2yhP7Fy4awxSZUoz5EUatcZheyvYqwUbpfhsK924Eqfnp9NFVFiBe21zUMquWBAnMeFQJJhdS7y9GYXCSA",
  "key4": "5rN2PK5mCJLjPW5SXa8gYNwt9BiCLGbYWvSvFwtvFXdp4NjKFU1UVaT4fuq8W5pziepkk8H94JWNTpNM5iEJWCfA",
  "key5": "44KTtdz2sMZBirwRxE8ztdDNo26s1AD28dcGNXeHgod7rmQTjW3m9YHFJyLYNKFBpYCQ4amFuuki8MDroAZH7fos",
  "key6": "qkxmDnrnz3Gk9zaXRq42Z86LeF4GMHVT6jktQx3zYaomy8NwZ2cmzDDr8uHn7HY48EhFkBfa6iDePdJSkQQybxy",
  "key7": "2q2Bw7zB4jxcaJmhdbCRsVQdMRixv5qaeG9hJAaQutWn4iv21aFy2vWsdoKjHAaFQuSAiUemcGuwyKm3LFGxLVfq",
  "key8": "3oAbKUh8iV5NuVCrMzjB8h52Lh4B6JrrAwQq3vv2WFYWmbAdxVqgufmjWhzqMTASotCUM9eDo9ezaCKYBp52uwZ1",
  "key9": "2EFJw79fGov95sv6u98iwubtEwfpUX3VRRXFGn7iayZEWenqm9f9kLPJXB1fBYuFjSdmHAQZi1YEXj4SE4fD5rLK",
  "key10": "5PR6RPZhvE2T22ZcoRYBB9twpZj2VxfLRZkdNrMyQwV5nUVbkvm5fJHBfabfy9EraiShZZ126Lndf71cQFC439x7",
  "key11": "4PSqsEHFhXHQPBCj2r2kQDcyj1h545aprGs6wayLiohKBeGhAjcfjvWQMoWLWKY8uQWJdf2iCc8CqDYrskue15mE",
  "key12": "65bjVFZ2S2tzLkr52FidWMaUXN5hL18U8MKywa6dTcCsZz7YeV2TTKzKi5T4FSigseAavKTyemnqHyibm9jR3YSE",
  "key13": "4haDUC4oh7pENB7H9cn4Vp5UerG5Gvmh6xSartxVinCLMAMVUPwNryfx7zar6MuH2khgH7UXAWscKTJcP8nUR4h",
  "key14": "21ktLfw6pWHHLR2H5Jf9dYXqsatVY6PZtXFo5dGqcdF1BnqqDzvm71xchvhotqW3vpZ6Fi4FyuuiHTLxDn4FfZ6J",
  "key15": "368tb7qYnU1xLdKeo4Wt9G5urkPfiNNjnwptJ4Mz8ewvxm8bhY1YrJpu2EKHwQVXcKXdE4JbU7ao72tC6RsjLVHE",
  "key16": "653LdTEopya256dudJk1afPNatzJxnrUCajHRisY2UdYfQbH7HvPCfsRcn4axJ6ospnvJemwb25caRnUS4TUb66L",
  "key17": "3QJAhTGde1UNiHKSUdSWPBVC2vBF5a2bUnirhKoxLvse6W6oRzWQp5WdSB1A9Swb29qPRzNLLehpXHo4AGytY6A3",
  "key18": "26GEAyjJdevNLafcNwsU5rGgqFaHPf5h2xSKaS3w4AFtYh1iSkAV31sgpKJaytR6yEAmNrnERaGup6TaszKXDmwT",
  "key19": "eWo7jG4g37ECo7amLJFSDooXJTSy4BZwRyjH1ZSKTjzwXFp9YibvdoNcUMpy3ZhY2S9uHaC3cUcsS3WSskVEBkf",
  "key20": "2RvRFM3RLHWDcXXYS16qAgZS94zmxBEz2BY9fNSXhvRLseH2e2Jw45noQYyzrrFx82yFnyAATpHwZLjDKWh4KQ3X",
  "key21": "2xgVSEyRmToP3vgY4wD2L49aeuQoCW5qfsBDF4HtPR3o8sEcuRj6rHUQ225gDnA9o13XXTqVYGGBa2adsX3XQZcJ",
  "key22": "59k2tBgkgcDfB41r8kREb5ShKpJpZBL8wEZMEN17xaRcNjcCCppxWeLkkFAdp62LqUH5XCnHnh2rGtuizKJykZfp",
  "key23": "2P6m95Cypa1RVUeTuDsTjFynaD5CUvxYAVbEbCw1ExPHa5qncx1xLe2H8NQQxB8qwfRxUFV4uLqzJxcg1r2XXo5d",
  "key24": "4WDHPUwP2YKPQ4T8688qmVvDwCvR6vkhY9jkd1NAe53cSRtzDA5KLpT4yWK3zjvo72mbztg3ByftaRvaVXZdV1hR",
  "key25": "4SNTe8AqRw7q7BFYQF6ojbEzMvqJVKwChbeajJpLSkHyPiz4KrdMZUV2KuWj5pqT48KZ9AqvHsqTtdSnxc43s7vf",
  "key26": "5XkHqfb8ZKwWKvBLaWWAg61FeXro3zFT8xmNcn9nrRbHHNUNrRodi56DhTHr7swvp7S191AzCh4QD47bvaQPrtwr",
  "key27": "3gT8cY8KLyjcYSDE8snqLtthqepU1NXMU65bLWD6HEtWhgd9fQaTACuekXNuYHSic8gdUgN8yE9jtHP1H5SAv3zb",
  "key28": "2aP2pZJB8wHxQixTsUDEJrS3epGnoC8rxek3cm9vYrcyeoRyAX1YTWj6YKuJ6VehGdVTFqKxkkndj5EAj4uUqnNX",
  "key29": "3pJeHTrnu9BkogsTAaF8WkBFvejwrKJdVdq2iJktDNsjtW9CnGVZNYfC7n7jSfNViQoGJBhGnwGH1Foe4U3vfQtP",
  "key30": "4i5z5AYSRQv1cp1wZNsVJJK6DowxyC57Nr8WRTrupZJRMsTe9S2pQct2zskaTsHunFZmMAeREJ4eQBxZiA9sjgsD",
  "key31": "2Vwpcsh6oJrRD2YaECzUHrbxf8QUzSaaPXYpnjC17tbHebK8i6uDHci1TTeeUhropHbJiXFr6cvmQcAywC36eh1T",
  "key32": "4XLnjRJkWrpKyW3HLKHfMqNNyTbkY29rYzf15BDKNDVmrzYD27SzoXieUvVdR5FgUibXE5BB3JtvQA2hsYQGMEEn"
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
