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
    "4ai2TAGm8pWjgVkrXoGf1XcMb2qAcwByK7Aq5qTafU7hQEuusr1RG97basGUhBARe2KotW5WjRBtmAmS78FaigY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "om1yB6aWjrmaeTW1gKyNetWkSPxMmAeov6XKvheJer4s5fEeJx2G2QboGNf7ipu2Jm7J1qLA6XKkkKSEFPom7VQ",
  "key1": "4PbzkdXgP4bLLo7sxoDao8ukHBBLQyGQfHD73nK7nToWq9ck1mSG368W3Vkn2DJSJkerkcwHHqpDTNjxVbZbK1Qh",
  "key2": "2MGy1FuZSCkgQhueRGBDqX7jykYh5NqKADLgGnv77A9EMMTcjAak5q39w8SobAhXxz5qGBdxEywKjNg8n8S3m5WJ",
  "key3": "avxASEpo8WWa41NCAfU6izfVGVe6cSba4AZVGmHWvSzsLLxfgMpQ7BAbWmkrpqsuAKXdEyW8Mg4PxBXErfUkpYR",
  "key4": "3n4VUMcojXQKwUMFm8fVv41uJENSso91BrzdJjUuU75ibmXmxK8fg7SsgLT4R6KMN7x6pqLkFVqLGsZr2qXvDY1x",
  "key5": "Ev5pKWpkjhRqXBbJsEYsZRdcMP2sHcsM8eHVkBgTqw1LJP6tDJ5u8wrqnQrCeyB8DNhervxNZ2oaqiDgRtJwdxc",
  "key6": "3BiAMz1ujaP1j7HCw9VJRSgjBYuSeNS751NQxQe6PibTjvDrbvP5YzLVXVS5d1MBA1LhV5FY2zLu7GnqLB2Gcz3f",
  "key7": "QS5XkruvunkGPYP8jef43FTiLVqGjKF3BCucsH2GuF8CyUEVZpztg7U9KqTewm1B8njpkdVvpm3LARVf59pdgtX",
  "key8": "wmQMnS9Hc9yuCmfbsfK8mgGjudVzrHXsBZaiXik1qLkvZYibWer8jp1AxHL3Xr9k4YKDERyVXuFjgKBp9S5YLhV",
  "key9": "2ak1eBpDtfjAjz7Ht9kMiX6BC3FxX3KrxQanxnMEBTRQjNL9g4CtKL9wUz1FJi8LN1q4BoRt5VBgSJ4nTf5upakT",
  "key10": "5sYtAkhnFmPYvRm6VYdJX6TkFCXpjaXLrwB8qGVfpBdEUg1Y3LNwST5Dx3ZorTADVLy7wD261r5m6t89xcWrqvzy",
  "key11": "3f4QERDC9tiUNT8hTAAPCH14723LdKGTbotXZVM1H5kAFTP4rGAFNzPtMnsZEq6wX9QZQoNFd7w9GvVQXQANacAd",
  "key12": "48z7XJNBWn556aXzi8s5EU8Z8Uw5v4MxMdQgmATR8yuJh3s4nuNRfXjZYsEvfEKfeNASXbJ2kNAn5FyFG9pZwiNn",
  "key13": "4ZayaNUPYcd2SRCat2zarLc21ssA3akPysyQHyS4vErGWRUXPeqvwd7WCp3Shb3QHD1Yunx6TUpK15bnP1daEnC9",
  "key14": "3ZHXqVFMw5H3tA2aS99CQhFeJ2cvRCW1KtNbyB88Yaorbe88EK4jXrwsVAP1F9eqfWLNRZWrYbZvajikhtpLhgLx",
  "key15": "4DzRqFhPjpEvuxG57VkimtY5GjUYdatTchJUNKPPXRTPNpL3JKuKmVr6ausy1eWNmnH2HD4SCUBRVVjSif48BwQt",
  "key16": "5ErjqmEGJu3pELmd94QRKmucZmuADqgrkZjckhB84X3PMg2Porixvx83YknokZnikjJnbaqdw2m71fJBH91W8m8D",
  "key17": "5PEWyMjrYGRUyfM79jNnxUeBzBZgQbHw8Qm2bbyTj4CnQq9bAP474kQ6ALFMiobFCnBTYYJ3oEANeedRVsdhiew8",
  "key18": "2ETuWiRe9jySWhJAjqiapnnr5icP1HSTn53ZTHSEHeF37zMRyLaGdd4cWJbzyaDpntntpVwua7zWdvoPmS7JKHFq",
  "key19": "2tdoa1unoRawo9z7bkStNM7gKHop8YuY81HeDFbZF8mtSmT72EnsMwLDshyNXNMgtS7S8jSjR5PauL46DYqEP8p9",
  "key20": "5mcBE3JgG1y7xmBvjyAsBaBqtFJNxFBmiuKPyzKCP2sf7UdymCwdTq3CFLtxvvtw7GSiSaczz7aALQXVPg2fNUZJ",
  "key21": "2YkniLqTLBcCFCAk7kMMaY9evYHWNJCjsL3HMzn1JxdcfzoZQKGnXjVeUCrMSDfuzDopVqoRH9E6pVS3mCkgyJDj",
  "key22": "2QQxHQDLYHCwggdctvFj6iXngwLKzmVzfi7MBYsifg7zE1MrUPoLCJEswU5BvLt59Az9PirhkCYLSLLCXyY8Rk1o",
  "key23": "m52uLarTafhc24vcX9eepdQ7uKfj14AWFp11DnSuJsXsAvTreKVZY9t6jeHUekx8FAozQy78CAaHfvU9wtgEBD8",
  "key24": "3q7W6c4jEzMTk2NXtNxip1foVw1oc6bc8VUSMdsHLoVWwPc1XYp8G9PUDhurZsbWcozXGSCR1YQT6VDdAQEN5667",
  "key25": "56o7oBFq44yP5inQLRsPnjhBvtEcHMmaikcRhVt1FNP7LPKEtBJx28M88rt5xosZ1vcjpq1MwqhEVnceNucq9erD",
  "key26": "442d5YtsVohVD7KfPPnCRLrZ4uDunztK4VrcwLw2uiv4Tx5LCyRYcuRAXkqjHA7WymnPQBtSkB3TSwL4cjgzyVDA",
  "key27": "2ZyBUHXsJeQ9B43sQs16PNEZMeEdjnPdguLPSLkcjUTezAMwNXcjqg1Syvrnx8vqBeutcXS8fere7vPd9KaNqiQG",
  "key28": "64d5yUZi4ZkEx6wXCBLRaSaFZNLXCGBSTP6ae6pNBX9nmuJS8kxzjV61Xyu2vDAZQCxhBapxgwmSJoQUcYeDYJVX",
  "key29": "4wwfyegr1GurP6VBqCovqSKsEubpnbi1vcpJGo5PNkyGGd1TSPxg4Tcxs4kddWmnB4z17mHc7BnDFi9kn9CxjrJS",
  "key30": "4MoSMHZjgckeaPULpGHdehukC9majMeazmyLMqCzG9qSFq3GeeAeXBBYPdtGxCtiudxBvuAN61UrNm6os7EpZQ7o"
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
