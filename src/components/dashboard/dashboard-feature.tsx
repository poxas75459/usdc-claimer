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
    "5FRFce4ww34mVmRrdp9KpLK1zMyi6pweD2go6TQ1LjFwdHmL8HqPN7vX2dx51gzwa3jxjrYHWcT8oenaYyxpGvF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6CpaJLJA9dj34pdWio3op6Hv1ZxxUWtJeRGuzKnwjKnymDQeWi2qRr1iasdsTjj7jbkoRKJTdrcQcAVN2fwknC",
  "key1": "3bDbXdcQzKGyJz3XMd6eHT6eQbiepxC6iSs4gq54M7hte4uL1CBwKGBt9i4n9cChPxdD5nM16rrcJ9cqpREaUdj6",
  "key2": "3BBDu2tyJ4yrs4bFbo1bSHDUTzewYjesvb5LMyGmYxTWCEisg1YX4om5NcePSBQUmfKpq5jW7iTYjMmEEKhtdxTi",
  "key3": "5zRUeBt2CMUiC9NadEZU1NgXRHSvgv9QYmi5r3TTjL5XsrXko4fcc6s9sgyVybX55sB317d7rWgd51qjYcMeYuJW",
  "key4": "5Ppf32Za9SuUA7Z2rUNpD2YMjrsQ33vRW67TSP74EyW8ut2KdwCJPhs6xyURoiw16inzR1e8zsPi86hPvgMTnDMo",
  "key5": "3tEtFH3H7m4hiseHfiDsnMu4z5sQhF83iqbQJrZxuPN5s83NBwaKTTxYMHKJiBb67bC1wjqKZRvm3EYLMNvKHSuq",
  "key6": "2GkJKnGmDUgJio44iW7VKGkJfSocdRnafELL1hsLTbXYUMNvPg59ivfhQN2v39KEvW8JB2A3L3MvJh7xv6z7b3bY",
  "key7": "3hVDN5EJ7g6Y24hhFNy9KzvBeDnNnGcxgNXUc93561hFUGQMCsLtiTojCGYeodBFMubqB5EdnVDoeHNi7Pbjjnd8",
  "key8": "5u4YHJActWvUKRfEZVU4tpzLxxJo2YmTv1Jf7JzV1mCFvUNzffzopsSGxgkPxmDbpuf3jDF31gcG1bN13MuW939u",
  "key9": "5SwofRJtUsLYUMNFv8ED8okFrMLwpevHGByZRdPwsdGGF7jY2YGbdstWhYLqEuG7fUnjWs3ehM7LnWmjnomw3Eho",
  "key10": "3Zs3URCPhLG3yomNNHUA9uUmDB2JkBhf7AMMy49WfTaMdUciPLWYY8XCkzJhRFYo47vCA8QKCukXBEYjDpNyWziM",
  "key11": "42wjrMT874QdUSeXQwBWrnrktN5j4pvToFuty5H8X1wB6vv7vFS4qXJ9JdqTpyUVVXkwfGqJbrJtKS1EArQp8cpd",
  "key12": "35q4pdAaVfjWeM2bv9QHTmZ1QrSKxHBmSwCw2b5iEvewnu6KQyBd4kg6gsesgGPGmXNYJ4JWdfVEtGU9fo7FCtxB",
  "key13": "2qQxne6qEuhX92vcezUSvPiaEdmopieTJg4MbobdgLyhJAsmoJH2sjWcJ1mENZHguBL4Q8HkJ6xb2pGwwPytovFG",
  "key14": "4Ed7LWwMDH9yRuCZwC6jZbgDu1bAkmtxKMdsvP8bd4VfKJgUTgnbrLzpBfDffoKur9hB3rYeBDjVrxnyhqVwWgcf",
  "key15": "s1en1D9uEv28hoGbPohAwVmcc8Nh5H3TCaKzJGHyrihwUBtmKiYg9ZbTDNDVvPWTXssDMfkEMLJQnKFd25Fu1Dn",
  "key16": "2GHTHyW8mejc8bbEMNN4YMWbu4tUWrRx5uc5aU67LehXmMyXcSRFDC1oNyWY5N8tAVnv4qKrZZ9mPBgwhys9JcFo",
  "key17": "2CCtiwbv8XtGb7hN9eqdTN5L2suLArMB72BsSAGAbaEyj5soqZibP5CCu5yKr5UTXw9doLhtoF6gd1pMAAYAcAnF",
  "key18": "2Xq1Ni3FD3PhgVqetq5DfTDkdY8kBE7LvQnANBpfNcTjEAPG3rnVedF5AFf6ugtSopENiiMycubU8uboaqbPEdJs",
  "key19": "QU6avTF8HUbZHWLfCNRfJ1QkM4T97E6aeqX83xpEpDPmYjE7cDSRunYuUp225vqJeVU6RXgQ2XDbgLTenN88ZiY",
  "key20": "2sZcs61VTxoJr9Asks8Coqy1LTpWjbdctfs5XdbRaXrQRYZQy5gfC7a4AxHgHFA5R5d1N7msZY5RR8LwggTuo8Mz",
  "key21": "3d4NTALhHzZqkRh8Cy7MHFqxrWJT4SYHydW4v9XxBRdzVwA4DD1AYSYT3fr2miXfdScB1BknEUDWfhVZwX7ik3oz",
  "key22": "5PRVstn6sHwPiTuvtYxe8csCNFMzmtaao1X4zvdoqWcKSSuJ4jj7pQ4wgjxRcxZMo1enKy4JzARN5qXc7PPzSSzE",
  "key23": "4SBfxxACqRXWzo1wgirnwerawMMzCk4CK1GPK3QTFZAScavDHPBkLsPpwFYVhWmqswv123gJApSg2f4DYUyy95Kd",
  "key24": "81Qima3NRyZwVET8GCs3YnQXj8iijJ6aBhoB24TrWN9ZyKbsB5rh7V5bUFpqv7QBDdkgFQMwTqCSjw9kCuh2GpM",
  "key25": "3Ab6doMJWjuR3SBmVYAKWmizbcjsoCqfnKBEL4Jo4KwWnviG1EkQm8gyyeVmNFZyNC1wDfKxyE9gTA2HXK3u2Svr",
  "key26": "618sAgadvBtS5eQdbyR4gGkHbSJ3urKmrKtcHmcXWYLSpex9LickGnkiWVmv7TKREkiZJzSmgesG1RBzfxUCN7Ey",
  "key27": "39RsG9KM4f7Aj1sqpocNo7sHfmBxyzWDfdyPRLFmCnFE7xiD3y43BjAhY2ZaDzQracPjkMfFkACoC54aRN2Y5g2b",
  "key28": "4EGftdeRuJbwvvb9TdR24PszkANx3NME3qKbBhtnpe3MS3KRB7gjrJjkTDPACPse5XH3YkyMPSBAP3BEaVtYNjNr",
  "key29": "3jXiEvyMLZVqBH7S2Avj4EZBeBxrDRKUPTXDoK6ZJcPcV1rdprrKKP6qWVXjKSmZZHiiUnCnztpvURbgnFbhxZ2Y",
  "key30": "37CoY1uTDPCRVpLwCDUe4sLaMh3vpFo3kFMbFNdiyVBSUEaXGLrv3egcriDgwF9udsbtLM8BnxmzM61YizXmmx5h",
  "key31": "4LocDeQxMTyfC5rNnf2YnWDFUE7guSKiCttGAESLqEHwjTJy4nC1rhkemx7s9KLsnHk8jdBRArunQ13HDw7oXBQ1",
  "key32": "5gjP5JuhQ7yPANV1z9DmxbuUig1nzHMKDEJAjZ4i2w6XhcKc8Bj3cnc7un7va4pUoBFrwrFfu9HARQriQDGXGMtb",
  "key33": "2xHgS84pUz2VXweNS23BpCHhBWqYpCJjR2ipQuuqiNCuefNyeVuQGhL8BgCyQ6RdW7SnuErNU56HerALQiUxmU4z"
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
