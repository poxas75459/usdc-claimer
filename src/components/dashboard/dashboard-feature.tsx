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
    "2dtJuzeGKTZFizdfYUFktXJrsYW4tmnzdve82tvmnHhHTG86SdCuHF1rSJLqM9PEoYJwFjXxC2amQiszoMhQqo3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEW7ksMDa7v15suxb2LHWBm9ho6vTRKd1YGvfbxtmrzZp2pHgX7qwbpd7sAuLg4PknDtvPdtvZoFA7MeSEG7Qb1",
  "key1": "5Qsjbq3gJuq1S1dnA1zBBh8KRB5d1JMZFnv6RY4LB8kS3YfQdMiAXBtKzo6hVhDTfjbZLYkFc3rghpH8rWumY4Vk",
  "key2": "74D6WcZfCZbuB42644Sb5inRZwhTXS2NFf7hhEuoH3n6Xvp81eNRY6e2r7nVFEMydmFH9viFaUgy1JQ7mut47nz",
  "key3": "4BnxqZZPJL5jSiKEuPt8wb73pxu46FxvpThWMfz7US17kozzRG1uWqXAhJprJjWnEsq8br9a9wa3DYoq9AQpws5k",
  "key4": "22UX99Xzw5cQRjh2zrkX9g7a5Wqnc3E9uAF9YjxipYWs2UFcXvHvuMa8kgRKdVnTFmGZogS4trbHuvj92BL5HeLR",
  "key5": "65hDciWxuevsu4nWXsgaaWgsfXWE6j95JaeapRhyN7HejQFvfZvJaCy9jZaQGuz92dXQ3hyh6hL8xXitB7yALyuP",
  "key6": "2vuN4W2huvzXpAKjM3qW9ZJckHs23Rvw4JfsoQmEs2qZfFcJxAU2mZgNmqkf5pFDoJLBBSzk6xVn7EoixKDsPUXg",
  "key7": "5BR6gkkQYkQiA11RdADvmWMWJa1VfWjrugErC1dydfyMYTG8KauqS6DojxLVPoRrY1qdWBStrTWXjPEqdsRHYyUZ",
  "key8": "616xibqN9iZjNngEZWc4ptjAmPBLFSGF2voqdRFKCmpddCmSF8FZFt7sJSQP78GhbQfopcmckLvdYQpUGACQSfku",
  "key9": "3FcDDHnuGMa4XdoRGHVWt5iV1mpDJrojXdnFx3qidA9zduh8gbBJw4VpsBWBbs2q1o79hdFy15FAjceT6AtP97oM",
  "key10": "2dR8WVS6CwgFSsJtdQ8tCHX7DQx4pn9AqAS2yaL45DpQD15yTxjzNkUoP9zcoeiB74qiKwaiME9MYBM123d29Uxe",
  "key11": "4BJkS47YQfvFeSj6v2XUDFkcUAqbmYewBgPoihgpNDU9qZ21kWiBPp72QPT6Wj76RkhL4BWGJ6yXLLztEMQbz77S",
  "key12": "2ftHoqeics1aiMDPYag9U8ngASLbQWEgAu2Q4mczu1bx68nsjuhCQBJLJZ5AmUFNX2zn6m5ESy6QBHYgVqUDpy49",
  "key13": "63hmq46tuTKjPLEzbCDyBy3r7fKEtLSEAWRLoYeU2mBLLvHdX7aeuxRUPcPZmE4gBvVjY4nzCjLDLmubk8ewNhYF",
  "key14": "4XFAzjjHfsbTqmMp3jQ1cSMrJURTYeUroek97zhj9pZfofeF92ZFKvJyCqqDEkjtxfpkgSL16hvDBMMzb7Ho29u4",
  "key15": "5o51tm7JJUPcYs4jSkfZy3C74rJo25i9yBD5iq3BbVhGxiRk9n8B6g3f26qcW3ZD2AJf3xmUCfZtv9RqkzXBpJxB",
  "key16": "2sN4qdqjvRuE7s3ZNKmjV3NH8snfxpB3yWBPrh4BTBAWMjiY26Mjdp98u4nGZrxqVbWsYYnDWAwWYoW81mHoDaJY",
  "key17": "Q1q5d6ZphsPLKGSEDspVTUqvWDwy57UzCYLRfW3zcEfm9MeopGZNbvV29hKojU2oFNXvznJrv1WAVpfm8poGQPb",
  "key18": "5i5ppwndS3knbrPB9rAL7npcroQ4i7PaNsJKBjvdjhZe5uPGZfhi8Deu3KNnexg8dFjGygDdwNnuHoCxBxS8sTbH",
  "key19": "4K2adRBkjv3bzRHi1vuyFTSpRY8fKaPT3Zy3d4mKyriBmcDq7Vd6kRpYMqhqQ8HWQgWLvyuqZZfRshqcnxRaNw9B",
  "key20": "nsXLgJVd52GyUBstiQFaUqACzWXAKVQHpKu41ESsHS8Evf1LDqi7HDv9rc9MD7ND7eJDRhhY9r6nMZ6r2eVGkBd",
  "key21": "2NuRYHG65rr8j9YYgTe77ZQTmTUtvbKRUoUig5auQEydyuGPJRxXCm1H3afbXFUM4YCAiLSeLTrK1uWFeoYbfU4f",
  "key22": "3KEzPTNJRRX27w6ryozDT9s3JzefWBDLh4zwMUtWttyxtt6UVP1HtyH1mzT3AFmWumESHTk4XWXyu638knmQx6ca",
  "key23": "5bQF4g6KpoP3LUKXXj2vq5xRFtx8Y4Q5bpzY9YHjHC6sgEy4n17ZkE4nP9qZAqasV49vo7F1djLaErQ1JW3McT4D",
  "key24": "XabkAfYziAV8Pn5YjU6LvTqc2GLHzGarV5D5iSRLUQmshpXnvDVjD1zigxECXA3ZZxdQAj9BHuNCkwZaRoX2eYu",
  "key25": "P7YxMrRcYNcgz6cMQa1s4Vhyqzr8NjYM2tmfkMfXVDL3SqVdATNSjYhCBm2yKfCeSmgNBMtmSGkSFytFbUFavYd",
  "key26": "7oFRuiBxeL45tGRo2XCvhHTQBevMcQe1tXEAbXArhJQ6dKaSVPoVBcArN2GTEiJqQCReqn6iRhT8RNaYz7iMwF9",
  "key27": "dyg9aZXd9FmYNhSpxmbCd3qsnpeRu7TBEAzSSQCb4pq7ZGfzNz6i2XBp4Xd84GxfjaQwbQqKpM1S7wGnm4pns8r",
  "key28": "3uSsJJ8YDGDkbYJmCkVdBgWKYhvUoF6FuRNYPA9EohAvTuHXpNtJoMpUSu85pEJJSQsq7GVPei3DHoGPMf5Zp9jP",
  "key29": "oNEPqeDRSQgsMQMyqM2Rhnwn9tAwjwk9p3DG3C4G4HwXaKfBQcp2P3VeEiM3cdiaCCSK2JPNebh6dfk6gcdAHaj",
  "key30": "2gHHmnsNHazqaYDRHMSi3Q3KiWLg53anE3EA8rzzANLtvNB5UXQHEGwjJ6DSMHsigwuBWiACcqUYRrmE3q7K6Zut",
  "key31": "3yxci7T3ZbDUU79ARJ9PiGdvU743XUMmFg2x2fBEhfJ9PHwgYtcLS4e9ZSDVpDMCzQxTwxYSkNgmt2KkhPi1yrfp"
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
