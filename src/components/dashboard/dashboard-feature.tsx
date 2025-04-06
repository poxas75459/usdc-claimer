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
    "y8y6fYoY3hRfzHKf7KKAfWpP1eaQzbqfQ2gejEddS2eVqFmFiiVhJZY4jVp7LbZnNGpwgtBSBmgLnxTpTN5HaP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ww5v5uvebmdwTDfsWCkbC6UZUQGVL8EXPyu496qS6b3pJ17a7kT7SXWCb3ht6S4GKjGf6x71stgsFusQpUT7C3t",
  "key1": "4Zt5jqv1GoqQ3pnZfqWJQg8xJFANkwgLKyo5fHbhtGaejxpEW17cbBdekBAokoT2AqVPCNWjehakW4cBTwWV72uh",
  "key2": "v3FxTVMg8RtwDHvgV6oav7dUuu446q4iDnE4XPMZyGyKedifPwkEDi8Gysmg1YQmdyeQ3214usvU8u5PGQriJFs",
  "key3": "5v7yFqoFUmXfHs5s6oBvjAfZe8NqVuVyRTBdnc9YEPXBLMJfNtDwQQdKrndWM3byiFQk5ENJSgobUi3vDqVSkMHA",
  "key4": "5nXQENKGZHFBzhU6xJy5sgAxDeEagXkXBDJ2yzNqRtjvbYssqT2rF2kwEPofwiyhgyBBanvBNxQWy8jCeHzSsY9v",
  "key5": "3ZYCsVo7a7tMgryiFCrPGj6bcxTVeRVGQ4VESd4ofvFxjteqJA2FDNSd21GtDTY2XDWwPXEhGHzKL21uk148d2YZ",
  "key6": "49BCY6PZ2YoNJUH1iCEBsqAcMV4jLXXauZkqFDABJCV1f9nR4dcD3f8vy87kn5u4q2VRX6vf1txqkfYkFcaak48",
  "key7": "3oQMUTeNnzG1sJ5Db92SDAdgwy1UCSdcemHWVqFt7aXHW2DYpoBZgPPze4baeuXPWbLPZdrUPB5g3ocV2V2xxnFv",
  "key8": "2Pi3ewc5S19pKfceAXDbHGxhKfgirBhxBdsSQpuwwVPE2nmEg7CwZtxSBNJWGmcxLEAubKff7LcTznTfcyFBx14j",
  "key9": "58uMwtEo73UPurxjndMbnxs1sVCoEy6qHz8pqfmx7UrKy8VVgLmfeB3xyU7q3qfZzK7zmzE17baPoADTXUDUJ2Jg",
  "key10": "4ZtFDZCo19Z2aBReuSiNeQsN12hS8F1SGXEsSzKwGsbUA3jLPU4XG4KAv2qk5DL6SFCNEL3ard1RaznmDQiLu6mz",
  "key11": "3c7XE7pVCPVWq4wrqie7mNxuKRsJYoxQNWsyJPpSWLamYJt2Sgu3dpqX8YB4ggasgC1rCP94Hr856h29CDcSvfSp",
  "key12": "3nZr4mahiP97GGcxgVCNp422GvvX5i2tQDpWUeq2A7vDapaoJgiCKrdVFFWkfxEo38pFHzZwfvJUe6ahB5grawZR",
  "key13": "5sZ72bVcwTFNFRGrmim8gQjSoanSKLhG9ttvRp3BH9GsinRi63sqabwH2w8hZuj63knMQcvxcEHTcoLLS2yRgqwC",
  "key14": "3z9vQL5SWCQBzVFUyAEpegP3xRbYXL9mWcQJbZUw3AeKWrQxjnQ7yQCs38pDTCwzcRCFpdutLB6mXkzHEuWZxq1B",
  "key15": "XiAbDvMCvSnZXJ5d4QerA2EFeXqYSEsAp17rXbSHF5UnMKjjsoiQFmKw5Vpz6m6pET8qGQAudVS1U94vZBCnUHK",
  "key16": "2yP1qXUqhRymMCf3D4PpsLLHTzPqhZdtU8PhzJFNrWjLEoiStgEhoP8q3Mh8YSe49PtWZg9XVrEjdtbqqise3ybX",
  "key17": "5XkWH3XxNVHE3VXKUGd9WufW64DyFQFeguDksvhJMduwAk6TpCZsKLJwPvjArR5Rzoyf3k4HYLFJN8JcUdBjgm5u",
  "key18": "m7KhwvWnNPQ3ou5taUoGX6V73FoQC33BE44HdS88fqCSvdUbEkEBF7V3J6NjM6JTceKKUnwApBpBmk218hhZzg1",
  "key19": "5SqwLYbNytibsJ5aAJy32GMo6dZRZCyt1ruzm6hdbHmpwrp2R5cet2qSs4ajrNrg2gHptz4xAehzWykidapRqerh",
  "key20": "22K4sXkq7qzBJqDA4pqhZmSdfyttWLXb7nhqbcbsTa6kU8UBnNeA24Jj4yn2y16Ls2mK5ybEcrtshtXRt3CAoxVW",
  "key21": "hebosEE1zBf5cGptKjDepJyV1qaU3ExNAsiwn5FU9e2AKhoB9zfcQqMQZCJTFaCMNG8w7fGvbhDokyZe7prYUSH",
  "key22": "igWv2cuKtUspUTH4FDQWrsqPVJQvpBvNRs7rJv8wS1j4pV2FBpN2hHEtHwdQbiDagqnJ4BhLAmqiBL81xe1mVDx",
  "key23": "5p2GG4y5Sh7RiNm88Tx41AckQFcAudQ2ByUQUdqWcvNvrV4spGbQw45eFYT1nDQxGvWdRTKQhAXYDyLQZ8TuFxt8",
  "key24": "2gRZ9GLidJ18mo9jsd4vYEYRPgLnBXDmthA7Gwxs1xAoD6MJHi6f4jEJrxmttZZnenrK9gKVvbQdVrC1wZeFHR1u",
  "key25": "BThwNKe5YS7eYBAfA6niMxBT3jHJJzvGL2imhfR8XHd1NgNDwJPqh1fuvoxp1inDHzt7EKZZiyAXQfkF9AoPCSH",
  "key26": "47gbYiCvmVoPywkQQWM7HoPUbLob6jfXPC1HP2Yqo2pSXhg3dkxsBNcP8RPZ7CDhGZkz1o3vi93xtw8sz2F7QRs5",
  "key27": "5h8WB82WBTnJXjHN1ethNMasN3NEqoqRSGWqrQGkvjf4U9GSWkeRu8bNzAjLTdKHnm8x48ZEE3hR18RspQBiRd1F",
  "key28": "VyBmrfoiAVTEABM3VjVoNoMnLyiktspqJpkBd3z1tVPkECpynAkGfNPFo8ogdgp1mGdKJ2GfX3WngF4UzcCc8JP",
  "key29": "59xsf33ZzVM1MoVLXfKFA9nCfWqoCUze5WWxt42xn2Gj5uRd75WegayRGjLcGu22SjL1uLq37Tx7qXxj3cQDr1v7",
  "key30": "5tEN8EF7qjfpUByLjUDocDSdumFgFGtYdU3dPjFbv7QBVtvkHr15q3BFQp1Ceu4qrVWPfAtPjBFQABgYMxy5DXKS",
  "key31": "66Y3Mi9NQXAuDsuS35cSLjYefPCQQAT8S3rCKHESvK3nmGqGtWdM73MCmyRbegfsyR5wFbLkoaKArrFHyw6oTpMv",
  "key32": "5YizpraK1YGs6JQ6xbZCgb73bF2jR9h1VzYh3PccBiChBGJdJeiCKCfCPXwXDQy3Svq9PbtB6nKUWDDQXTnvBB5H"
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
