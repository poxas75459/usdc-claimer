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
    "4QMUGqnk3vDKrcaVjxgPWZnJm9KMxUb8EWhfTpC5zZ1fk8n79Xm6D5Z4T3JWDwpWbUVziprcwqz5PHyGCWh6vSQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TT1HQFCVSHc5aGkHEejj5Sv5Bvx92Q3P7JRWYyXDqT24StJPVQMUUQFt4hnfr7CEksYKFyDeayvvz36HFWiSto6",
  "key1": "4Wipzu4HM1ioQ3JoaLjv8LugjqwqUhBgbhPgXBFLKKiQWFMLdNHf9dwKZzMk2YkbKsb7vzTVyn5gByxf6A1StnJo",
  "key2": "ZzmhTyrhxy3am7MJuMLSDaaAFPz1on9GgmRmypBf4pmGMdVpojruH7kfH1wj122SqkKdJ5uFEBWLcBs8zT3vs5M",
  "key3": "4tfepZCcMHp3ZRtUNphdKayHTv8Gb77kFAeYAX4WuTGZELx4gPU6zZRfBosqhrWy5NLQibC4ZHti7Ae7kcfXsRFp",
  "key4": "5FgfKm195ogwzSFzfh9uNAFg1miukWmBFxktvvKMxJAcKjnspn25MPauBYCyxHZH2h38sK2zsfGsjDPQvwTkfWkC",
  "key5": "4UZPyn7E5bdsniCS1o7mbJ1BZKXU5Bbs8FmNvVbY1KpjrxZ7bdnSmbKjBEfVm5BFNcBS5b9UUZgeqesrqB25hFEn",
  "key6": "Luwh4RRgERFbWGSYjK8p8kjvp9Lw4WLt7i7y2TGJpjwDKzgenJiTtNLtBSMZSytbL4rziUUn9BF21ahXbcjVT3Y",
  "key7": "3HhHj5nDJktpNUmJQLvQECjezMtBPSbhHUKzPqKbe5tsobYFgpNGxKN9j7x7ceKZM9fBHC9Dj68UVckw7y52rKBJ",
  "key8": "4mfSgUZyH5J7tayvJL99jR82LbEB8RmJPD7a8CP2U6di3nKD9DJKeRFN952UKuPJqJKTCHvx27uCjCR7D6eXTFTf",
  "key9": "3oRU1uzDEgpt9bqboqKAzG4Ax4H2H9LASWbKZPMpXQV8xxYEsmYw5PSArrjiMG8H9MAbRgBjCder9hpNuVvs8Wvr",
  "key10": "5orpwazw46voe2w3VUrVdxMfXDZsh2KF8QcDEHQMnEpTvrwRRV2JECDVJMPNHFKFaWjJeFrcyGPLqsd5wFMj9G54",
  "key11": "3CxD6QEXgnRsLrwumabMnpaMSSkGKcyWahv1t55QPvbhQYjBofDEhnswzS2twy34GXUByYP2MST5NybRNFwE2KJe",
  "key12": "4CD5ZREL4emFdxaaT3gxRgYQGb17Nj78NkNmhDwbnVvZf1DvhZRqk7dCW24WXjJWT7XsY6hrY6tTBNJe58jifwqH",
  "key13": "4YizFerz6RJ7mDz9WNntbGkX47twbwh3b2edXkrpQPThWM3Miwsiu6tpxp3yTNtcsAicH8VCAyNRaspyp3pLUGKm",
  "key14": "3Hx2Y6qFHujMTZ8mGaxE5bhWMKYHPdwNDPHB1MSj9cGooyBAhS2WWpvwMAx8nujGd7Jw8U1SVDnFuaR71JkbZMkS",
  "key15": "5GGkfy5R2uBo61SZxmx3aB7hGxFdg9oKwo1hFvEvgeMq798rGFqyHhV8X64F2VLkZWyJc6Tmx1qBUdwjhy56pACF",
  "key16": "4GAZ2cdjRHimE3B4ARZyK7BWq2mMSLSiDpK4cG7AGBctZyZZSzTKh689yb9QZpEGihWVhUoso49bXz1NAs1t1TfT",
  "key17": "3LRvgSmEjXMrAD6bFz8Tc8ve9oxLU1yPMartdyAkLvCubJnA5hCizCFcCnq5aQitHU4kj7CcJKcRpyRbBCVHvJxT",
  "key18": "2xscwhLdaCJbu2JKLgjHpcHiHfA7LB92kuNoEhU5BtUkYx48sAvoHPTNVWcktRw5kfUw7mjegAirdAfHpGLxAFuo",
  "key19": "34oTfxqoHVp4FC8Gw3Xh3zJz4Tc6gC93ErRS2G9nLko4YCpsqSxh4G6BugHRyJLNCN9ovPkYspULqK1gL6rs8DJ",
  "key20": "yns93kC92TWqN1kGn64kSpoBWS2E1s6hi5k3qGhui2c4mhKntwQjuyuacNpr4ayqRWgdD8MSkqNPkiLe7XoR4Xo",
  "key21": "3ivKqF5LqkPZWAabsJDy15Fetm9CjfB6Tf7G9wPekefV1zNYh9k6wBtq9RifBpbddaky1zL17gCLPPdqazoEhXVZ",
  "key22": "2Sf8NizhJyB3HMrg1dqexURzD3cEPGTYssEbQizRbWwhDaYXhpWsMx1JdDZKuDN9c7h5jVBxXDkekmRDtCjaeqMq",
  "key23": "2ifQShpYD5XRrMgBAqUCumFTFKnVYMn8mx36N3ib9ZEmXVkWj9rkokBcrDtK1Ky9mCCmjAwRHb665afpk9HhyQSv",
  "key24": "4J2wT82wpnau4yvTJ14oEU91Woove5RKTT3oojTDgdmZBxWBfkXvfMhaxEpTqGXRmbn9U57s94JMbtxMPTA2TYJc",
  "key25": "5ik9iYYZprJ7L9aiFvptBGfaU16SbHpVYEMFz7qUxXwGTxyYWnaFL8Zdkk6xSjK2oa8hvc4wGvdsXBiLg4sxiygK",
  "key26": "4ukgDFtEEHd8Z6FV4KNSJUusZnnvCqLH6Tj4Cj3r3zYzpEW645JmU2nHaJdVUXWUvVgoEYyTqVh5yPYFc3gebL8",
  "key27": "4kgPEPWNjh92BdWfYjByN7fHPJmsPBvzCy21avFRVV6fF1vHtF93fhR1QCfs7CjVVLYCDH2Wfyri315a5CSq7xmu",
  "key28": "26X2T1wPJVsyx44zGqjtRaZBS27SE8umBC2BMEkQKjM1sL2d48DceduK2UzHpk4VGjShdwUspd8SAx55EMhbQvye"
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
