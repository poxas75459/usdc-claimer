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
    "5RuzqEdcqhbnP4iQksqjeH1mZwaHp8DPwbv1XcTELYQWVrNzEnG1wAKGd5JBspimQ4Z6wBzWu275tNPsDUfDixDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUAUBmkZaAZvgure8UhqgSceuvw9MAcqRoYepEdkVFCtxcN3g4n2XC3RLP2TTyKEDhgb7jndJJySaZtVhMv8994",
  "key1": "4grgwLkJe3nNYnj4feLrDGsa6R8BzGRf5DktNkr6keUMqxw7ZetpL2bSKgm74myF4g34S7TsWdZRgS75eoRR5dkt",
  "key2": "2cHuqzxBro7EeyGoH17v1vK5fTtrs2jHcpUYWA5auSREUYwS6Sc2mz7mEKVRgKoSqdCa2aLriQcsUYt9rBtDm1Co",
  "key3": "4Ec422SQ7iJQd7rkon9PsfnesoVziXA5MiEw76xheWu46G9CFAgH6QM9nympgTVhSwK4Moxh4vHihjBr5kUn5mhr",
  "key4": "2W5nrtYGoK89wMaLAAfHZrBV5WDmZRLviBCB1N5dJVwJgL6bFgvH4AFVES48R1jtSZmdY2n9SvA39W1scNfSft6n",
  "key5": "4YheCom6UaAhYJK3fMULb9jYz3RcvTzfXgsp6A6PSGgMuNnbVUnVWWKMczD9xXqhLfcv2ALXV8gEaZP96V8YmmdP",
  "key6": "4dXfBM4htsStc9dApmvn9xYGvZbWZwHiwiN6Zgh92vFmKjhqLNRszUYRa2SkdMJNTK3vnpL3w3sXAsHFgZmtQjbu",
  "key7": "4vvovU4TyB8go7RJHQ89cDAPU7DbD25oDFmubwJmLMcGfGy1WPT7S1vKvHCSc2aNUFgqaUZF4oJ1qNo1hZLBtYrs",
  "key8": "39U6kRac7N5aRq5boKg373jcC1gjN33sjst6wn1QH5jSeKwAaHT2rnGMQvahygg4LfkF6NDf5XqdathymuuncA8",
  "key9": "4x8sN8dYmxqBmn9vXEghBpQqfkgywTjve9q7mtExZCu2KucNoPyyJ843ghnnYK9LCf75yBwzgiozZHGZQAwdomgy",
  "key10": "MBCFNqFDN9xXJsJw7nNCYpmQrG8cYtmL7A6RmzXg7iXCYxdgmk2UDpp69Fhz86pui7sxN8XCkH8MnfncjkoRWRc",
  "key11": "5gPmtVjW9bAfoZ1bUUowhLwGt6TqvMaYtikBNTKaqJg1uioSbHbHtMn4yQuGRHCLX3tnvMz2GDr2CVdZRpH5MbV7",
  "key12": "uhNePEGZJha2Lp3WwhescA99gQUd7adyvKPSbb5ac36fKqQqWA8MhNjgL1jWEMH4rJrR77RZaszbVq5s2Qg4SQK",
  "key13": "5kPHAnrcdGYBnj3Fdf4zFTYovSQoQSG3k6EHdNFipQhSmedjRkrbrErPPD65UC8xmXWtGuEXaRhnK43Kg2kTUvPE",
  "key14": "5dBj44y7AarrEgMjNzLxFTGNo8kR3Di1ghPXbwaQbs3GQ3K2A9fcTnUhMXzMF8bimseZGYt679hu7Wutk5JhbUyR",
  "key15": "FyHY5kL656w6mhgF3WVWYc9JvCPzkCa3TVrJkC7G4aS7gGKfXVFLT76XW1uoG5bh9B5qcFkHZRRbAkzAzMMzwfD",
  "key16": "5AQEFANoPrea42LCJBpzGmU6zZRTTci5bPzgWGpdFVV7DSLQSvmziAB5oh7NYuRB3YnGbznCG8fyBtFMudN26snv",
  "key17": "5JbycHSgKmAUXe7aPdzVVtZvzjjjCKXSa1WJHNQW575tTE8pHu62KkuMH86w75frcTQnAjXsaaktc7t2dmovnTN2",
  "key18": "5g47pGm7Kfze2fyX249wzDbNJccKY4HP2YvC4iG8WpxuosC9mNNwpRiGp6m9z1yco7Wg2cWZmbxchtbvxCu7AjWo",
  "key19": "4carZzQdH2dhDCGSt9AAYAfesCEw1WgpA7DtGEfhdeCRvpBqi6NHikZqrDUMJGnshS1D2NfXeFCAkx8KhV4wHMUe",
  "key20": "5df46PWQNfxwp9LWSmMUmk15644E1pmpnce5iubpwLBmZUDPdxwqLZVe2N2bRrgwxz1bEFhEu8X5eaRkUgmdt8hb",
  "key21": "2kT1ERbLTkL5sqKQzurwqHJtcQApqKe8sSj4ez3wvYf7ZxamQcTZpsktMhYURHZb4yuMZkHnXGF3B9hj47HCFLyo",
  "key22": "445tJh9KLU646JmrxECBfaouWH7vf6jYowkMVUBTNTDxBwFMd9eBq7osmgDG11PQ6HoafEcCsRNA6SMQuybdZg4n",
  "key23": "exRvMKnhe6QgFDQjLY6wEf5HZB38dXM5csNnJsdQUQmjQc3Jy7yvmjR1hn5fdqPKZyosLkYKkigdta7h9j4pzF4",
  "key24": "4vq8xNbj9to68UH7csbkc71GQs5VgjZTyxsKms9rJdmqX7ypiE19dRHk69PwupQ3vLCFi7jbz2cuGjXd5DYA87XQ",
  "key25": "36SgUZU2ABvz4r5Uxkm7AtKtLreJ1LK8KCYYDiXPDXnn4kfhvpKiErfMcGzdCwCJz7gFpEdc8uwwtZKdfaaMGUd9",
  "key26": "4K6rEcT9eBbqHoB2nottfZZWkXniWcR23TkM4VYK7FM5KJeQSo9DEDyoY9LBh36ketPYs9igC1UzeACcDShHRzXK",
  "key27": "4kfh5YChDFfaYADu6tS2WkKTDDqVAf5MZa4oGoJSuMDxkQjsgMoSrVEkeXBEK56AAa7AJeJMrQvbzQwGCwehXCfX",
  "key28": "2d7F5e5yq2mVKrisUingiuHKXAME5RZyKmyrBjkugo4scx1PpFQsKdFm4fWjMDrkoFgaRJ4RkyqqnLtUV481rj2F",
  "key29": "2mp3xv4TmWumoL8cahir7PJ8k8UXLK9Tv6PTUprfb6TghXsi76QqUZdhk7dYZPtxRpeP6ibFpjQJpUA1S5Ab1QSw",
  "key30": "qYb2HjdfPssm8ERKFWuRBDYWkvRqUwDNF512qmWHSdCEqCdEtqwLYAHkxoKzZ2RGY79nsr6BQhJA4qmEhcGZ4KQ",
  "key31": "9qtFeAiUw5gLhwZzHrsuXnmLVejJEmyjdz1sjBbJLUjuQkzE4ToVWybZtkXxvanx7s4GhB1ofYnrv7PLYkjVHh8",
  "key32": "4xKEz8dpce4CtZTheFBaNzit4WxJ1RvKEXLNtoobNh8aQgTbgHvVd2ALkr2GoHZFK464w8kFeybkcB9EAMWkzvaM"
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
