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
    "B6xCp6BSeeGqYFRBXXKpC1MfG1U9njWEzxoo1nYVydU2W6yjuaLETcxuyYkDDGUSHZS3Hzw9rWoTQkEKMZUCNjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJyC7aw6SXphHTpdM5jWwh6m9MjLjMViwRkTXU4jBTU7G3DNHj2CFfk6S2wdnZGYrCjwesYJ766eMkPr3TXuKL",
  "key1": "jpRZw44bQ49ndZocnePQ7j1eKbw3XbAPxuhEJdxW33nsXCqmnDjzFzV5DWwToKiPdeWPfDwamZ3JS5jgFeqfaUL",
  "key2": "3z9mVhxoPQcaNx9tyDRJoztnWsnMr7KSFqwyjvED9iEW14c67hjGuNwBy4BieAqSAvCzR7VZtYJ9B1ZLBV6fqL82",
  "key3": "5aHArQtatpu2DtvbHhX43cLhAdRgu11CLnW4HdHJynLQqiGnh8uJHMRHXkAtEtyD6TSMYpsk3KNfm22CwhL97KeZ",
  "key4": "2xhnmsSLZWmBqRNbNRuyR5bP4Gn6WjF6yaEtKNHvtmAfwH1F91vdLRQfHc3mhYog5HbbRG1pXHo3QWUjiQFThTPp",
  "key5": "FvRfGYptwiXkJTGBdv3jFW3SeCFRofVUn2nMAmDJykjeyh898K87wEV1BhehXLrxWK9p55Wq3FMMfiVrAQ2wWz1",
  "key6": "4D5yvxPZm8fkUPzCeASgM6cbAgxoxshcrTw2qPFCkFyMuhMiAEnyco2qkUwVYiQpjoWzA8PKRVhdpWVXucP3Fv4R",
  "key7": "5NFqWoH7mUbdAxQhkzggaN2bk63Xdh7nY2YxmFMyy45UNYVC2N6kA7HNoTdABanvdNP6xqHRxejKCkUNDexb26bd",
  "key8": "UuexLFDU1oxJg95GGbpTppZ7jEhxdDi5g6pQ9wgj8QKSeQCUgNX6qjgaCaAP6WMg8gjzzGHmAoHkMJjT9xKxzJd",
  "key9": "2HNsgGKePDQR2Cf1VAw2KSR13qx6c82BwwJxH8r2KRm8KJomzJaK1n6ZHv6FzR9RjxjTC5DbyhanJqCCn1omBBxu",
  "key10": "2FzSx8jZiDwREy27BKt42PGhtSY6qkr5Tibt8wapyqKs3kW2Bm8cM6MgomiNfwQTMqn1zGNcYioqvpggNH6fdkbU",
  "key11": "2QW9AmrvnTMKDLuEdBj31JQg5JL6ptnp4zhoMoFdaSvCEp3SAHVu39SQJC9BDvfVPQLGioNUUho54ELWC6MnLK5N",
  "key12": "4xiGuArVeBBXZ7oGn8pARAtCgFb9vitc5mvTsf8vi2YtMEaj6hQD81ap8NRXBuufki9S62LwdmHxnTLh9AvFpFXe",
  "key13": "28Q2vhhBTuJXFeu2fKGNqvRQzwEZkmLwGdpz84Uw1wi49dsuVyr7pYb8pn1CYKQsmN6UkKp1Kkk6fvh7a13tie5W",
  "key14": "2rFgSBGKzf8XQc6tBooW4PzPMuFXAP182TxCtt3b5tvH4hEPJnHxkBwbc964eCbTKTgxFiQpmyck2ZqUGkWHobhQ",
  "key15": "4BRHowciLFCVDgUAJSC3rKZtFwvr5T2nTUKiVeQdDer9ezZBUENBNqZaBQtBUDJMjjspCLC1Uq34haXxgLzoaAhD",
  "key16": "36ACjSvBV3N5E8xeKZbwmEmjfKwHaT1o6RuHtrTT4YgHPAQ6JWQCBYUSVGF5dmzfBk6RtDF7TSaQXt5Voj71LZPa",
  "key17": "3dWtZpRYRQ1A5tQ3HcSUJCP4vebvTEcChb75GvZcs5JHJKjxdS6a6WUyNzAdeTnVJgYfAvM8jcCjQawbqYR1FSJs",
  "key18": "5U4AFA2J9HugDDBts64JXW5avHoQthiY34DURyzgiVmbAe2hDbe6LQ9QY8LyEhbxTSHm91LSLJggtNYHK3Cimavs",
  "key19": "5RGup3Ai2K6WABGwQJbBV5EwrFT7bWNM4q6jBgTSevLEHVu6iAbhHVfh3CAJjMpB8jWx1CMNPSGZXPJedZHPYK6Z",
  "key20": "iPushR77XrUhsTR58SrcwRfpyGqioAnFAnn5Ce26yTMFAnaJLEy5E9AW1ZNL1Zb5bo2eoqSv1Tm7cCuqK7bcvq7",
  "key21": "66vQCpjWph9eDYqmPGYbRRFmij5rqVXhPkBGrfH5fiFfu53uTm2kzm4Aa1AzfQitB6vqBbba5QQSvr3yxQw9mYo",
  "key22": "zUoHQuWbv3dRStXSrEqaumjsgTgxhVF9EZKWLouS9AMsBGdLU7DkkFXU9QW2H63enahgv2GWxfLjTPqszPB3AUb",
  "key23": "3uPFTS6tiz23nfSwEtXHL1AqnJDVcvCVmj8z3qtTBCg9CCi8toc5RyAnyeJoy8R3Wr5qZmC2hQGEP6tWdaky3WNW",
  "key24": "NFNMuGUY3fgtyM3HUvdjnyEbiJU1R9nQMtWfKTehH8T6VL3evoiLzneQnQSfoBAJfSDENqYtconAb3LMdSV49yD",
  "key25": "4Cb6hsQ7BwFQZjaneYTmgrouwD5kmMKSAKpzyBhMkbFJNPmYs1TRgoe9HYSSq6DhLzmXpfXn5PxGpMBQUs1w6J3L",
  "key26": "4pE9XLF4SHyd1LYSmWhchffBT4PQeQKVpe6Dru7zRVdrKKNbneVZ1daGU6PtcXmt48t1adJWivduvSL7cvTcX3us",
  "key27": "44Abx68br8nCpVdrjxgKs12US7PyELZ2RVJzvc8sNhgpG5eQWVMCGCSXiBwWoysn8vioZEzXvGh6fX3RwRwLgv25",
  "key28": "3f4preZugGA88qz3NqF3ZY6kKKp9cbRTnpLNxYsSk2sSUQbzPnqU69gz35KgPfTrZWHzSE5eYVqQZsLQGbJmsjNi",
  "key29": "5sYeX7KRwZAaHTrNZ24X9LtNwWCShtt4VFohQKdXcJRM849YrpUyqjZwVXZbjpM3Y3mSx4HEicMW7oDbyyXvr4LY",
  "key30": "QqWfs5pFgnPvymErMKRKZkaLDk28V5yTAn5GNy8yvtvoQLBNrxJmG2oCAcwz9j1ynKMjnBw2WPrGFH9ynBFyQJH"
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
