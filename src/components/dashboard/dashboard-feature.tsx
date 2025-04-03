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
    "5uHBWMGk9VunLerAxbjXwmRuw6npoHCDLjjpfVxDdwaqGSXhMZfnrrtZVqrAdTU6v2hmRFHGba7PtxPtbN8hCvqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaLn2SXXxcpa7pARPbJ917DfPGrm9LHsULoZ5XTNioRUQwCBteKvimBFuHJr3nNsTfEwaTdU5La3a37vCgpJCGm",
  "key1": "4w7EKzrvQy8JGQXiWiyDJyVLiyH2h36wMHpg2yxTJ38paJDHR4DnWsiZqnPgfWu1c8MYMgVxNxvsrATu9ukPGtmc",
  "key2": "8cBBXf1NJkXCoJGPmu1uCs1epv1ZdLhTDbdy48fzWzu3feaYqdPGBgsE1uMFeEJxo8RhFaY76ryauCUzumLAHHv",
  "key3": "iQ2baASSjmS5UGziJumWC7c8kKj2hr5DGuVRp3jZuYxScm89GmqHndy9JDYaDLZ9K4oPjEdrBRmhXSF3KVPzkW7",
  "key4": "55uPeL76fJ4cUeKdFwRJo7LfnJQP25rDYHqF21n7zfQccGgsCb4NAGoXyQ1c6gUB8H3fZG3oi796Kuw9asBoZNQx",
  "key5": "5eCY93CRHjUdLLMK2GrjWvPrvjj2hkHhPkjNKFcXKiYNKxLrqA5ak3CWQEPTSrDUfDcFa6iJkdzdKjjGshoPjRP9",
  "key6": "3qbMD3yyfgPSVEXbTfSzNgUqCxHyS41bNuHSbUeK9ehok21kmJRLjy7mGiPCoY5diKteRzb1V5viSqgzHi5GZDdy",
  "key7": "39GvNatE4XPiSnkEMRyn8SucVvTpqCDNttQTXZbAuxynbvzNBuVFH9nvuSdUZmmubs5djn9zzYsVZB5cUfgW8hoY",
  "key8": "5V2CTwCnn6v116LixBM9uRzhE2q7mnRuw72gNTN8jwnwCN4zxDfLYLAmdjhoarR8sBMnAf62sekj3gz3PzUAwm1q",
  "key9": "sfk8Fh2PKXtnjMGzKEx2zqDetU1cTxw6x5zPV34bGhLQ6bocbfxbuDeWdKTWpUzGdnSXW3FFUTrZrZSCAgN6wwW",
  "key10": "3bfBdhnfGAA77BrusJV8UQ72oxkx16Dsee8njb91oTUVi1xr8NWebpf9BsPP4SNrEvFE75aMTV1Y6RCcp2qwQci2",
  "key11": "3E6NA1FHfQpYDrbiXWrtuxkBLXSwYWDqUgMmaoZjEs69RXs4xRbbDrbuCH3Hdc8D683YXUjJQHdxpUga1YMMrkw",
  "key12": "4ZXecZe5eRFtiiJRuzt3WrMGrPfsPT8UB5cHG8j9NMTDfNkZm5JKxmqVLnMezvwqpNhcbiK8jbTzTUSAsvynbNnU",
  "key13": "5NC1hJaiXus8FMvDZ68Nf5aSHcNahzuopbYh3Dsm9pdxWfPtEdLxFwL4TCK3aJbH24tMgi2P21F64N1tRCQhcESi",
  "key14": "4mh1Bt9qttf5SxyX2FxNnUSbkgmVz3FjbfGT4ih2aoi2GKGoKJbYF8L8eBGUUYRjKqEe9QWnLbTN9xyQpUUFu8RM",
  "key15": "3zQhsVUPmQPP8FwJKPYxWXBMRM9uyn9UfYKKRGCWSPennKwXWLedgZADXwqgX3ACPGZenaSXyS9X4nUUZFC2exBZ",
  "key16": "LfRPM8kYBeJA5PFA3U73vF5oRf4HxKu1WHQPNodgGZA4VwxoQHd4FaJa18LCFD3RZKrcavWRzJ4S16V5rdz8612",
  "key17": "Q3kYMaSKB3qVg3zKdFircUCWm5Qfmbhi2NEY2EPCoEZvPvRexVHtpYydXffSQQXL4HbA8sVjCkj9ZC2RkEEgPwW",
  "key18": "3k6TsVMyEVxbWZxEnYZ6mzemB1vLEbiFxHp6ZjP2LQCxgK46zLKRxwmkRZvPaw8fdLFedynvQvxgkfZX9HVBkRat",
  "key19": "yvTHEqVu6EKRxsVUyaHUnP4aJeALfQf1FZxSLbESb2sXPX8XpTMxW7RS3oX4qdzDc54saG4sYP3L78APJLs1oD5",
  "key20": "5tHpgkWHLGjbMd8HUjh9QzxTqtvkybkkKoecgR6dmT1hUbRHorRsKPxp8mxT8eeyHzzwpZYbCZhRnVoULTJYuSLR",
  "key21": "62dyAKoy186exNxsnNeCeznAF3mZcn7pH3ygQQRKULeNNy3aX8qAQWTxbgEMSeQg9wTAoVZ9CNPruftLKkYPGbqT",
  "key22": "2FhXv383rPhP4izKZMSAChxg8j8seFKfYxgcDTygA26h4X5gx5fdMys8vea8A9y2GrDAU5ojEG5fC9R3KnZ3DYHd",
  "key23": "4dczokEBno83cT1CYwnhVhYeJnBrZFPTuBwVeeWK8hqRtUiM82ndqdsedK8opkgvwaxJCKndVwg953B4gTnPnQqF",
  "key24": "aqp2N3X4Jjuob72y6VEPfYAK7waMty5u8sa7DU6GCa3n6ouca3Z9aukD6aENYQR5MsGeVccbNQraqyvgjtUkfz1",
  "key25": "4UUpthTVcTQ2VmELEqNdvnp4oyxLVJQaT9xhCEfXuRaMBVTFj8kC24L7oc2isjhkpV6gHR2rntQGxLwZf8S5LtJa",
  "key26": "4baiLhcwkf1eukTsPsFuSsk5Ak32HrHN47gdLYWfsQapTmWayoQevgQPwDNqsMSRXJ5Fv9qCVFMATyBPUfHNoeNm",
  "key27": "GpZf8TNhkJq5jnoWT1J1ThceQBVWMoZNNXRvGH2YoAq3S3cfUF9eRrS2Doi3k1NYstvNcdMK77m15WzNMpLfYYD",
  "key28": "5sDsjhaJD26eDLvSWz9DdFb6JaY9eLBjjEGeEQPjdxwPAtVj6qKa41JFm94VHpV8bS3mdMebVbtzfau6F8Cn1tvQ",
  "key29": "R8t3YNQpjUzszMmpPmRgcKdGUfHuDDFtVEGrisPETawiZxaw6fFWhi3CiREijdKYqkxLXVycvZruuufgv32YPLS",
  "key30": "a4SVF6V5uqAN6gBExR4haLmspopujCpjPSKPfBLkBCBfvHrSnXCtYt9wHULRevBXwfFmDzfsqdQ8QPGcZ1MNCjK",
  "key31": "3E2B8SV9dJ7GzspYyWDRy7QQgE4pSyRaHoPwc2qVwc8BrPeofCrgT1nb83nrTFeerdCn66dVRp1o98kCYv25uPKq",
  "key32": "4Kwf2o9sDzhCVovMtZDtwbLsxjtRfNksrgdk4SjdVSmCz3hxpMWusAeVKfBo4QwcHxrn9CqeNRnhNvo5YDvSPpm2",
  "key33": "1NsDGuSTdLrxJJLEgjH2khCrjjpkRoMeQA3botxQc34saXUwRYtsUgjotHs7nYYBCFmM8br7fQ3iJfh5eqjwPKE",
  "key34": "3HgsBoBbAbpHZyCxTSDSPxHrLC4ecCiJwP1ZYrrNRjs8rv6mHVAXfTtyHkva3io8tvYwGxD2AWRcc2CMoFkue8gS",
  "key35": "4eV5JRbpsQX5ajK5XgfvDicUuMELwEX5c2jEfGVkTdLZmsabvpypMS1KosGCHtKC9QkzKfZspnM4eG95dFDfWFtg",
  "key36": "4bKDHgbhCyzF9JSrxKGo8apHYLJMEiF1pfZU2tkk2fuz6aYyb64e2dWrsbhfb1UvEaB2PyaZMGssK3Y8fRANWZQG",
  "key37": "3y2bMcFipfznnWvLxVbZK4X8WPpCZ6T8KToYcqacovZ5e7pXSaMsv8QaACTePrVwJ6qtvwgffwzRs2aLa3s51g6E",
  "key38": "MYeoWYt5p1wmpP1PgHQnS15gWc9BbKajDBZcDsfZx1hJrzRebmB2NMGu9ASF17VmyUd1MeAdtYHE31os3DujT4y",
  "key39": "BEduqzVDpPG3GGHy6XFhN7daDWjzBTPB7pSJcxk2xNwAeU3T8zv1uf4gExhoyvgQa7FmFBabsLBLGg5FKVC4qWG",
  "key40": "4ZpYpqdx2gJaV2rF5uh2dFvxTuaurx4zXpZi7aT3aok4Fy9WrJb4hUM9WpAykBGhB1zDu9MaaEFNyCPZ5ELmC35K",
  "key41": "64xRGpjaL4U3yEqY3u7U6jrtciBQYdaR7BX6hAyDCAeLMsSCj943SZNSkFoaSomevJ5YfG3yxyjahCsb8ZQRVq9S"
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
