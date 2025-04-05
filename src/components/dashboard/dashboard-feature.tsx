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
    "2PJmWTQwfti5Cpsubw1jPEPnPQQSvDuieEnn3sZvsVMo9XWeSTpKKdb8nQT3XBq7djteARYKRxLSQRwCVaBGQWAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8yJH2g3jb8BgwC57bLbP85nDxNyRBKKcfnUckoyrBpqCM77HH9jq7aGjaPAdLM1xAYhYCyq9ktrCFWm58DKtmb",
  "key1": "oym74u8ZnHkswbXEa2qJavBiyCn3stHJAHNJGcLH3WaCNV9EjzMFzYhRLo8XQssUwSSfmw8cJjjM3n2MTxQfoBg",
  "key2": "5jDJFvHiMKNi1rcSuGmhy9iJ9YsZWyampKAKkJQVp83TkggnMZCboCuCKkQ9jdmodpGBBXzECETWuqDCdSGsHn2X",
  "key3": "4VF6BTPTVFnkSJjGSCcVfjwdufnQvXHugA9ui87jKZAPK3AjSjmyNEDpi5BfV9qUq1xqQCSHvPAB2uhFFLEAQg8D",
  "key4": "67YVeK6Yj11fzvP7hmyifC9UV8z7tPvChkjgCtRQbTcC4NJAox2hAVPaSShq6UovUGFwm53EzjixqtC6GwAcaFBr",
  "key5": "nTJbfqcAY2aWd2YbiqtoTzzBhVgwMafexQn7Q2MK3zk2qvV9ARU4odeCsjbXASVJrpEAceer89E75GU8DTTaKc9",
  "key6": "ezgYjxwGKvJb3rFfB3tSkGj4Q1G5YLTfPXHDCHLsNwoGBS2G1CnuGsWRDnxugeomPsepuG84eKTcYfKMhQygohx",
  "key7": "61zcLhYenvQQdx6UAfVgfgob1AXDGVZCKtSjnc5mS1JJu19gYVnn94SZBQ2gYoRZpLqLg536mKUdW2nxFiCrNMze",
  "key8": "63LyFHhikDivWDBwQb8k4RqbXKyGvuLRYzB8AqE3M7KtY8tVyrJfnjaV38Q4PUD1dBYh8atnrHNC1WVwrKQYm7s3",
  "key9": "5dCzp4f5xBc9bjwSqS8sXeoVVeTKxT9nPDWCm5guYgzXxPkgEyoxyc4GHBEUFxieVLbp9UjyNBrNx416kKAkdgf6",
  "key10": "U3L5s6eTF6qRhkdLSodPZFN9ju2bLEueUTfDJxdiLU7Tc8iCdhPtynWMt4RJbWzVL5AUq3RviegkdjSybpxfo92",
  "key11": "5uf89qqfEoBRu6cy38yX8ApRmN4TokbdiZ55x1ERGcmGwSQ2gxEh9LeH45JGZscx4THUywhisHWQ17fpL91mYKTM",
  "key12": "5nStjjXWEpHPtksD8wUibzcmaHP9pkgjLkrVBLyz6M1ccR1Mt7oSDewr84Kw5vZekjahSkdXzmQtbReFgwUKZ7JL",
  "key13": "6morPyB8E53Cm6W8QxTe4xaw8iewxRxW4DNefe1FTiAbTvT9i1mTEv12t6gihRAFG7VWH3wiiAQyFoY4XDEpEvV",
  "key14": "2GLg6UWfPivx7B8EXtNVoJMPXxYCRZa478yZ1hfgJGdKpyt9pNKPY6xr1Z8f1VqtipNC12uUmpSogELnjZbw4LXK",
  "key15": "3Jaj8wb6zi9STTijAACyQeUiRGuZmSvm6tejW8o1jFgoZ75wAvuNu7yEbYhMFD2SFJmfqqoiKGEsDRuHUpcDczD6",
  "key16": "65S3xwUVjn6L8k2gNd6A4bTsRyu7YTRBkTJbakLLrdiu1nBPKPSBdpAN9BaDDrRESs1YjeNRfouuhMTza5j7dh7",
  "key17": "5s5CGkpYG2yUy1KnWzJX9BD9eGU6dytAFryYkq2QWKekXcy7vYFsFe69cVV46AXpxTSV6BDVmZpx3oPn1EXnXEr",
  "key18": "2Kfv3NjV1Dx1oNNibLC6QYTUbNucPs94J5w4sP8tJexiBVLCKQk6U2jYGPWbPWBPp5C26zGzEJVmaNwUws5mbaxM",
  "key19": "66PWYSAxehZXFojbgugURUDCpQ6wJ56xvaR6A5ohMGHdsrH6zri7KevRVNWfKewDSLbVs9rhZLdrooahSdNsSxhA",
  "key20": "5vRYijy3njvtzn5nQ4JBT8ZQ3zi9V44eVd5pmYg5HmayfCSVeXS8tpq1eBGR4dsY4WDo571RZu6fi428gaNL4ist",
  "key21": "5gB3sgmSvBH5KLq9EmW2GD57mGMbN2QcN5jTUKm7QuBzxqJfCepSjdG4KosZtwHstEzDWGWGaRAxmsFZ9iZSqbfS",
  "key22": "zYMPaPT112MPGHnX6oT4g2FiSyGd1sj61F1gEwRVSHuVynE1h9RQXUtfzQF4oBSWZgydweCdFXYunw47KgA6pUd",
  "key23": "52RGxpkqS2pod8o3EVevNSqFwZHRNVkUn1hfpUJTbJdmhCCvMEEZmbZ3F9Z82bEkN9Ux9vFwP3uPVgyh35Uvm6Gq",
  "key24": "4RmUc9MWPXMf93YSKvvjocJEPLZhKx7dAWnchumzEq27DMvzdnna2ci8csiJTi4c1euTzSThWzdqVu7tGymA4iYz",
  "key25": "52qFcRCQMwv6LyameT8QCJqf1EWVGtp32uj7Wo7d8T9KkErXJgiRYo1W5Pg78p6ktLCzSKV3ixmYTZ7zofEmSVw7"
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
