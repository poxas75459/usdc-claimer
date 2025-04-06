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
    "T2KbDbRoDtnv6pwSeB7ngCrKtARPT5jpqK1zSw6MGijzuC4YM15MvGimqoktU4CJwmRc6WpnjZjnyDgrmYxeFa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ButC9An5tKx2jSbwTaFuzGpwv6Gbf4dPr3txiEnvTM1ATxw13FHNA2NWBeyFxxv6Kp8dxPT6i7MUqmeNzeHs12q",
  "key1": "5CkW781h6LpbDfe4YxqSvsgaFMLNL477LbsussFizsfg23goWMDdf31azodb6BXXkTmV59LWb4Vr1BpquoRGoGky",
  "key2": "4oQKrsjZg3qZ14x1W2eYyCxUg5rZFqT5FYxodvyzaydwPSjDbQsBCZeQHdx9G8mhGbjaSq5Yg2VwhdVi4Us5KLFT",
  "key3": "2W2XBQEoprVUWuioyB72yoWG4Ajv8EzTYgGsStLyiv2UMFHaH7mHYpWP8HH697bFs2giRd5sBWSSS8ojWYVx9eUN",
  "key4": "4pqhDh6h9XNNh1XSQQxkwtS2UVikKwUeXRPsDwMqoawbYfXKR2RZF45UmV7JunHroLqZwb9gwNS3JW3wJ1crN4XB",
  "key5": "5nM9GSiRKCsviSekNHXhemJu3Hz7J1e8zCTaXWw9kfEh8Wov8u3pvocXqYFbSRZxrLgSPkBPW5uM1yKqhnrx8Yh7",
  "key6": "1KJrmqc9Hfm2rb45Xq7t8o8SgYPytxEnwrYsZfcUjgG6fw3du71AaVPWfTv5kf34oaqyrRjwEQvMD4EZsbeGTHe",
  "key7": "HunCHJkDYL9cvFGuiWaBsJiNpVxYJwDdRegv2fZtuczm5TQ8XgPsEv9mUJfrH8WzqH3zujWYwhtiVmri8XwUGst",
  "key8": "vFX7bYmBbA796zBHv2Ddbrcv35RiSbL1Y7cRthwoZc7GKo7uKBeiwbKJoSFkxAbMgcfnJ3j5kwEGkSVAnFvtxcZ",
  "key9": "2kaypggToWoSoXaNujn7YpdVw9TCcuQgnL8baLPjDScyxzeiCGkvKywrkTPfFbsDJ2RtFBY1LLWnNVA33T7zjHbR",
  "key10": "4EYtBd8RA4xQHv613912PUgF7QsGX4euauTMUyvSVYtNjzwFdrKfc4ePUScpYDMKwKeRAfE9QKhdmivnc9yRJDSk",
  "key11": "3iSpwadC9BmcEEymRC2jefGxDNpwUtF84rgbyQGo3Tq1naNsFmW9hxj14UbsjrpyrknJ5apfGSgEsNFABUdTtmdW",
  "key12": "3oKZRZMtn2VcgGDA3Xxo4dN1nU2DcKDesXV1N8MdH64ckNH9u7XdnJDCdsTNTuHKUFKPtrs9pGrQ1piMT7xct2jj",
  "key13": "hVjL4m1gu4w5ry25GVut1VqJpSqcQPUAbkM9A97XE947WzSimUyPssAj5pqaWTozzEYBnLz93GHjwwg7zcKgkNP",
  "key14": "49MpXv1puiysQXfF4yoM2cRzWN76aHiBPv3Q4ZTXmiq8YNaDpNEEenGGuNB3cecuvneHt5fJbrE46HhdUrsRo3wo",
  "key15": "57UDcTi8JzGj7caJLbb5HWm31N7ds3r8qbovexeYiSbNBCQPRerTKWKn6DJdfrcVVGxmAvEWmc94fhC75BstXi5E",
  "key16": "4Dz97yLFARSynKYXA8KuBVd2iLuhxy9Hpduub7DKmgMWScHTZqCsakgddMajxN3Nync8gpC3dT2mH6GjoDokQcm4",
  "key17": "4sjPqdqKDUkMpDRX5MebYFg1M1z3zeD7VJuzqoHPkGfZFncvBFWeFRU36nD95sgG6MP8f21v59nV68brn4JUNZRo",
  "key18": "5hSGfnHYxc8tNbHRUnYKMzMMjMxJZsWs9wUPtWN35u1LnCRwjHvcYg4qJ36jFoJnXLcZtDucoS4idE314XrML5Wa",
  "key19": "4bh8YKwMCiBFYKYxK5rvr4WSVrtrrdfzU32ZYZEdrZgww4YUxpWeFfFnHAJ4u35GZJRTRyTRvaiK1mLnAgKG3bFT",
  "key20": "2mHWyVsHiXDQDuD3myAnguaYVoK3r6X5wicYDun5Mc29A27MA9TEmU5xwxUuyV2qCa9cNoqVmtmG2998Q58UriPw",
  "key21": "5eoXcnx7CiTH8Pqe7ABErH5VfpajC7LXnjKgAEbcsk7wHYiZRnpcCboZ7QMxQFJ1hGHGSZuHMR9hSripJfoPtgsG",
  "key22": "3FevVqj19u9vdP77EHhMX7UJcvZcNcd71JCkCZ8TBnFy3zEgjHjs7SAjQoMouxzQPem39uqKwmhMJ6nvtj6hhn1J",
  "key23": "E37F5CPwezvNGaCtnmPTuNAjT2dbCsZk2yDA1YmA4B9n35bguYu8ErJyuFTphiMxK9LgqTwThddtLsaQWRV33bR",
  "key24": "2G14qm2F5stgut8DWZS1D1ZRBo195gojKB9nosjpMLKBCBU9St2ybjZzNYAB9piSjyto22tVZjWBCmWFU4yJvipH",
  "key25": "2nCf443C1LscFjbwgcf6ZjEKctUa17FNnWDBqNWtdkP6iaYc6kiPf6QLFX9H9Cq6vVb3oE5axRhtzKXECSQQcjMc",
  "key26": "4Em44r92B6cN22wJ5DqMvUsTnm5F5NsUxBu4dZtTFtJeKPphHpFtQwZ4deGpp5d1SysDvYXEMmWMNVZkWBYzBC2N"
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
