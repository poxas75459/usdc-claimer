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
    "51yi3v5vMSqFiVxU7SD22esDdFWng2wHEVXrkv3mRZUpBcWQpGoaYBpGk8fzAKAadZVjGJbZYhSmx1JKAsh8F3KA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nqc1SwvVGLLnHRjohVgRmnr5hGHcYHRSLcFwCPUm2WAwHeSkp7ygrvzX4DE1EyzctMmpkshLDsXN1mw2GT7xsEj",
  "key1": "53pn4N4JWnMG7iP8zCheA8nURHGe7JvxV2aAEwpiAGjRoGXYzR3EHd16cDk3E7VA4a7RvNPKMAKjo9jPYoPPSHYN",
  "key2": "5A5LGXMUHkzxNohXZkvjxSE2fKrYo1GLCpc4BJoXfsd2ukmBMF6f7sq4iJnXD7YTnmiDikvzD7E1TCVtac4Gj8Ko",
  "key3": "3W6jFdy9egJhfm2A6wq2z451J4DBwnfjDjxyYCYLiCUxKa3esd7qx812Z1aAh29uMJQA9vY9Pb78hUb29r7nGXxH",
  "key4": "5pNJYapGzUDKb8QcULrSzfDkdt5AiDMdecDWNETDgaQp3hrPEn2d1SZ1PEYRu2cM57FUrUjsTfUYCwg2fHEexs5X",
  "key5": "7KFPLx3s8hNmq8bMSrcsgooMBeXwgXRegkBQVZjqauCh5q2TKCb3rhXvVDtN45QHirBriMCMUGfxjY1g2t45zUY",
  "key6": "39q9hySJ6kgj6Jnt1ypRBm3VJkdb4NW2NaP2jGFszcJ6EmuhEkTsGnsBD3N9pKpGUqW4q71mKRk22n218WZLYmkp",
  "key7": "4Pj5XxkVikRCg4QWgdsn8hEENdqxACYp7PN3sFEHattmsGf47DjAxSEKT7MjG4cAAfKenC64G6GVaaPjDCiSjtfC",
  "key8": "5L1mRCrmab1uiUNbxP8vxcpGFGFrs5WKu1LDWjHR3NqQ2VVtzUvUFtvTo9HskSdtSb4fZj5uYnFA5Y6JpwGAaaae",
  "key9": "3kZnEMJPtSCNgn8s6qMy4VJtaxr8qMX31xnXxeaLisqh1kB3oChWKwHHnxQU9zpMeq7gsWcTFMbJMM638u84Ab8a",
  "key10": "3JkTv76QMFptuJrbKd1cPVaEKW4a4jGryxhwRUMi9UESpCkG9tFVbFj2cGLeamXofKZXAAdDogmLAt5DeRZ5gx5m",
  "key11": "5Aad47Cytytw1P3CYuQM3MJTX6SrUB1hAJfxtt3CqzMLxuQCYZSqtVZouPDwPNPA8qSHj3nVp2gXCAhexg8xhpzK",
  "key12": "yRswXfeu8L76w1FFKkM9wDpisXC5tHVg8Hv76VWEE9ndiiNUGtMReSXaqx8pxxhckaC2YTfWHCTFbW6Sc9XC8dP",
  "key13": "2ZoVCmWMHV7QzhaNcnTBTpBSikBgY3GRnvS6PErsT2Dhm9SyHfvcwwqy5fQupqf3xZsV6BNUhnoswLa95HfsRvUw",
  "key14": "32Gued5iin8X1umgFTHt8mnFkVJfg1qQ9wPmvhcVFjDD1risahS4YY9fZpDAWe7Fo1KUGewgtj7Yj12WY5Wk9sHZ",
  "key15": "4WugPE3ahhPBZjixcBNyfzccaAcqkhPr2UgXBtfM23uC7wUwVTF1ATEyMF3Seab43o9KZxzDGcSYwXoeqkonE4pj",
  "key16": "3o6XEYcBzRqpe2oaMSbkXHc6s4zmNwrrNUVjQpMmnWr2r43e2ii4muHD16E6agwqC1if4rGK1FxCAwed6os5EkNa",
  "key17": "3bbiZt1p3ae5brooW8TgYJcPopTF7ZMygFQwdNchGaCN4BQ5oAC52FRPM2Y5ZRZfF2cnQqKmiCuk9MPF2qqCnLu1",
  "key18": "2GCssNYr5KPHx4cXxJEZVipiHeMSMnJ2SURp4MgHsSwyvsi4WW5hdPC1UjEPM6c47BZMbuhz5HMuqoXmi4NDo3RK",
  "key19": "2ubhdEz7FhAWRy54CovRowVXsZjoKByvgpQDRYsTD4xkoXXzQag1a3uvSnWhf7HAc37XwpgutRvgbFiSz2eMHWXG",
  "key20": "3nvNMbsThYJRiiBrsppCiJJc1CNifwwW9gYyaHVurXKcZQWjV7hwXTdaqoktWKY8cfwwLMihJPzvvz3n8KYMgLCL",
  "key21": "3G3o2HsKh4p3KerT8TPLogzFswWypWyN2MyKpKpCk8jbpXeV9jdo7j5Dx71dJd6Z5HqgG1P5wNeGoXHMjnH16wNi",
  "key22": "2tvbwEZ9qP2Rfyyvenqus6LPqPYX6Rc8JFZMWxkMQz3nkP9MBwdf7eBhVSydGZCZp5mU68MBVt5ch8WqFwfdLT5X",
  "key23": "3XJphYybjdN4FgH4RGfUyRKqQnPYCdiFhVFsX1B6PTGgAq3AZsiJu32ZSbdkAhrkDiD7sskcMPZewRHYt7QjzF6x",
  "key24": "4FpEqfsdTjEH2sAE83pgutrZKuM29BVoJyHjbkEGccuWi8mgEcbUrKi3zmdVmUG6mJGcSLYDHUbWDRfZsZQW6igq",
  "key25": "38K92xoFE7CPKJ1WiXB6omQG5tSYvFr9Nm3phJwwLP1xR2AmcfFard1sPBJPdnsidt6m6qSP2Km6EFVfM5uihWAS",
  "key26": "3Y2x2nv7MFN7CauM29ivfmt9WN8weFaLMLupvr8UZ2yyUhgdmWxrSwcLvV6M7D8HCYAB5DrHMGbeZqEDHMsp1tdz",
  "key27": "33bUzVQvKm5GydrqcUPuUpPfpULkdBj7Fjj7XsXMKw6FQmoCNFsH9CYK4xd8GweMWQEjm35j5zepjd2Q7BsxYyUM",
  "key28": "2xF59yMFViho4e4kDivkDwn8kT4bM8cSKNYWoKSznx9jDBE6JT4yWZxGxYYguD5i4o89SVb5RUq7kLKCTbm59RaU",
  "key29": "Qau3CvU4qG7yFUPxjjPuvwD1L85ifoQ5AsNn62CUEqHEYVygrr8wXom78rxHjRheZF9F3JX8hJYEpSSPqDHZowU",
  "key30": "4Wy8nrAtwF5u7zohiyBPd6iXgaerRkSLdGjKQCkh1eoJ7miCCDBE4gsSJSyz21WKMmQhZDZ3HsyyDaUGQxGBzmjb",
  "key31": "2StYrwUHzFigDhoarMQDtoERuBmvnwETZTUEc7xf7wZBmzJ7kivunRxt6YyhDK5PNKPLHVLrgPuZAT2R8px7GjVU",
  "key32": "5KJXTbddhn2pu1VyJfvGnsZb7yrnUDWsnWoQmQLTGqyjRFQkDc9zUHnrEo9u4rmVDn9BTFaDikspeY1Muh5CCfYA",
  "key33": "Q1KSLALBbbgZq7K7jRtro41GBNi5jhb8Ymn9uCNQwy5qjnGpmvzUSJJSrR2eFgp2xzsN7NL1K6RSHsRLPKmxXoN",
  "key34": "39VLt7T5DQ1asiwQuESKCtDx73qhTQtiNLxdAM46mb6dARAt1DuH5Cf114BGFTQetHniz2agP9EjAtw5qgdRe1bF",
  "key35": "3SZieUsXrFbr33aKgzJDeaEZhgt7Tbbnd36PL1DYQcb8eKWgNmazpMDRCi89iUTuCJ5fmWqxV92hZB7KChXZg1By",
  "key36": "5FcZ3jyH44Kar52kuP6cfJAJsJezo8cZeNTtoJ9rUXNKU1kqucgYUWR8vBCVEoSbgeBSAYWMVxQ1qib4ctYbmLSs",
  "key37": "YcfNnn8kJUCjJGNuciJwCCwuf1SXVYDr2eghVn68TUzQLK6ijwMnSw9WcJJZRnjU8fDoZGPpjzyGAKjQuaDmX7B",
  "key38": "2vS3TKKwdTMpfpvH72EhuwrVfBVFR4U2C9z7otrSvdhw7UWyF9a53QP1Wr6g8yyho4ov2mH8sAuAdZRe4XNLHP4b",
  "key39": "4DWXNo5WiEE6UR93jkeyWzf2BAKXdARuUUvHLGhsRUs94NAZ5wQBjr8j8GRv3PoH7VRMcAMQEeMQ984BrtzGJ6xL",
  "key40": "5n1vgtXgAcQ4tcBUg2jVfxkkbeXLo8FPuugzNrpMMQbqmow8N1wD1UYTVgkWubY4WTn6SGp1K8Pb2YaUhqqV5Qcj"
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
