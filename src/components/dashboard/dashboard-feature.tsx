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
    "3ThRHaTfXz47ejDpQyJ5ST3YwMi9LuQxvxLgthqMsu8zGdo4FTgPZdkgDxxY2SqwvDfs99CcEbZfHWjb1dHaBPgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43f6vozAsruHCvveFhoRtsZx72Lp9Z3JNjMyC1MeSzULCvVcUv6mibAdNt3zHfEscKMKz5zKAEoDYJ5QYck7X2bM",
  "key1": "3K9oiUsN5aTvBUuBLJWCybeG88pPU6q2nmMAcPk8vDHJxPzPNHVqTuKoiXNG6gd2Dm9rDyfVX9TMewCRir4QEX23",
  "key2": "3Ljwgbw7rWpcXtCaC4KPevVi1P58WK4zgLNZq6Da7eAaTGf1TQ7Xqu2hYJaDymxuHhL9dPyRU3SZa3SqNBCZg3fE",
  "key3": "4tTotC7FRBCCQaBLBVjF7xHkWVZy3GGFYtjvEe3nGTa4fVeU1Ze1DYgPsyRXVA2uwKK1cnCo8748nX6ZJGKXsnGZ",
  "key4": "3RhqMg125jSWvL6ov1yseX1pZ5U8MvBVxqLFrApXe6JD9RGva383bLbuwXRBr2di6THnTHyn1n6qibj8tLUwnHiZ",
  "key5": "2NnUdsmhH3sJ7Lcdi9oeM5c145K2s1AZkMrMFqeYMcNX2Lj9nDz11CLcRU1CkHbP3Nz99PMqB6mzSiifpcmqqmRJ",
  "key6": "4JeAUDKWFhjxjgvuPgA2CrUB94V9RWcSEajgVGzcqAtzMebDDhv3wLtxx3BfWyCxBpSe1wcm4AczfUwTrPFXPmoj",
  "key7": "35i3JeWCHzxFW3QKjTpfbzQcBee3veCcqEucP7VhAPJgTLQnJQKdW1UnhBm7nt7LoPuWYdh4NZ4DaDMvnDYwQMVa",
  "key8": "59e5eEUYG5m78ZgyDUAw1SwoXYCadmPbSyR1YRLKzKvCsue4Xn6EVp8rESpSTeJU3Q5KEKqoJCxqLHtP5gu7BKnM",
  "key9": "C8Vi1mpCk58dm5wEy7rDkv9EzeYLXMNEywfa8z8QnwucCL13NHPo6czhBptEcqEb7w2ZY9djhoT7ttErgTU11qJ",
  "key10": "XUmmjrsstuxRpmdMPEgFHZsFjzegkww83jNhw2ws72d9Ktjga3yL9er1Nyijzqe5vXZkX427o1PXBL2mAEvGbC8",
  "key11": "2KN6vtWj2gkcXmmxeuuBhAzajRRVzBNAWYkSdfjPRgc2VAJYV1hZvtta5fDwJ5iUXrju8xZhCpGin5fWZvHyugSZ",
  "key12": "4ueFUfPQRLbotTqEwqKUbNTpUhddMW5ZjgX5jo2ryXzFsCj8UomPWE8mS9tXjjPrBxhZmpurSknQS7yXs35xvB75",
  "key13": "51HT1FcUWX5zry2zgNDkpWCcrCc5qGP9fc8tS5vz7czaE2wvJikHwQMEKFKpx6TLgbLVhkDmfAYbmjo4DtK17AAS",
  "key14": "3XJnJ1XA8wAMmGzJeXDJjvGwiEg1pubdwkZty9WTxxhh2YV42PrRPrXsSd3JoZUUcHUY72Ar1XqpEjbZ6RgqJacN",
  "key15": "5LbTZsWy9diuWWJAtFpL6TvK9P3FTvLCHU3WGdRC6ZPpNHBNFucmBfwLwcNaNZzrFSH4YBM9gmu6tcZtbpzSfQjV",
  "key16": "41jtXjrFPaZeFCWovodp3yhV5ULcEBvyMxkYGSg9rLuMFT8bqJVj7Nr4UW9q2JLWuwZjK5E55B5THn7ot1hgga5Z",
  "key17": "2iz1fihtKeVaNAqzY6Fc9f6LPqryvWSV7FFkqwxs6gApt8gaQuDNM3nz9qfHb2VPhQ2ZBa1nX3q2Pe5hrVFkqYnd",
  "key18": "5pCRP2ixp4kfG4vPVwgjVs9sfXbJpj9rCEQDm3thN8HsRVMpeFcxoWPBYa4Gydew8irJPgdBvT674XJCE8dgPb1K",
  "key19": "4uq7daVB3XU8ECTUsSwdSssrRfaWd829oRDvNofDjxTYxhAUr3z4Ea6d3UvGPfU5yWfAYXWCy8uJvs2aQnREWP6Z",
  "key20": "4iGxss54xj4gk8AUqZaSuBPt2URu47eDAqLhhBUMbjwrt7UEww18mkRXGGoce3qcRxoLgCf6BgV5L2EPn2vXStNs",
  "key21": "2oc4CK58Cm556qSonMKve6BJhyMCHqjmb37cXxNEzwsK7hHGpjRMwryCUvC6JU8q7NWZNPEii2CzqD8jziRduaEq",
  "key22": "jXYHUMnqivvPLFEhmkWxjzvmqL75VzgAMWvLhCdufHtVbRko9GVQufE3qxt8QeinwivWfuzz6p2gdafx1kdYcYn",
  "key23": "DxKZ5GaMBY1nuUUep2BPZfhkUUnREcVNSG2iRVZJUvyiaWp84Kt4NUp38rRpWHPFaYNF1UBNi7QPJN6vaMgNsWd",
  "key24": "4S5QmoKxYrBq3r5SBFPQSGukGNALb41nSDjTSR1pMQR2SF82X5KAWBYNG1DEamArkHzAUpuBCEFvbKtRiRTvAQ3t",
  "key25": "3X8zsFfwZ9EU4b1be58VgK2AbPVCkZn5eHa6T5dRnrB3HqiKMwTRYQb3BCYGiqEL8xMFJcpYbeLQo57vABGAbVA",
  "key26": "3pt7uL3ZikfphHuwbukQsvHveakYcPGTfzE1ssioYxcV3ixZyqtziDXYku3jiWt7dutuuVHoWrXGKSxG25gGqadN",
  "key27": "5Nk1GvQ95pq7KGLA9K6JzZEYzt3y9HtUXQ81NemYWapqPX71VmxvdHBX56rFrJtiRH4Cf8cyUTquJBcbbHnJiV7p",
  "key28": "Ge1JLePg88fHF25RpxxJDEqv4LHRs33YCQF3jW2pHLwpU4sBPx7S6K9TxSDfhMMmetNbAVEGkiVAnWL7qXuereY",
  "key29": "266MzFr1szFjaA8F1RLYA37sTTeNHpTmcwCenAzsibAkvJEzGfc5CQ2bFEsw9h6gBVsF6gGNatdqLUAnCBSEM3jA"
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
