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
    "3PSQmMiXAjpAk4BRbzMpupDk4krmnp4xsCa52HvVEJyDWj6ZNBEHtzkSwDJBcMt9rENXAzw85JLY2yhXmD9XwLzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDrU1DoQvGFoncSathSFy7LqdwKnqgx8nUYBzHX9ppw6ez8n328fT837W5imrtmYmyJk4YPHPZj431zQopqaE8a",
  "key1": "2nU25zMwCcafNgwewaeaYDQYR4Up5iinhKbkaZGdqiYgcUHbG9xCZJLUPAETiVQhLQkqdMmriEbb7qG3MW6PjqrN",
  "key2": "4JHDaX9HkmNWbWjja2PCdWHc8bpBsZKWGsGUcbVQqmJ79cDRD7xt9dftZHftZyfHpCRM6JfUpaT8WfzXzkNETRoK",
  "key3": "EyuHsQJLcmuRqLG1wEFZEaqVYsDwjJkKRwgHsrxSYd3ybKpicvU8zJbDwvuHgsJtUgerdy1RdRTSoUs9zqoDA9z",
  "key4": "gNQpt3CJJxPNfgkgp18MaNm91tYtt56pajSy3EVWpCwDRBzZQm9XC6eWNDmkUWK6y8VLpy16Cy3oQM7RKTgbTw5",
  "key5": "5ppjMELrycGArCwRgkcDHvZB5gqVBommD8my47z5eY8wjji6iJKNStjZFJnxEsWc1jigNb3XFaUKMgWpf3eQihR3",
  "key6": "4o47dPeAyxBGim5aYAotXd1LC3cMhfdRN5bvEExUC5BQUL1PHCK2CgXXMJ9FbERgNBBYbB4qmNCuz9b1w7hBBY2U",
  "key7": "3miHQqBGb1MStBY9yu5ArsixnhSXHgcgA2wEcgYqEU4evkNyTrouTzYGjH5j9D5Jjs2VacJL955jQBobAa1Tcnp5",
  "key8": "67n7MKnFWUcegSXvqQAFwxDoxdf51yGZtqpDcZtqvgRJH3y3fNUDrwgw4dQA7yLXyMLEXtPkLErNhi8jb8Rwa4Cy",
  "key9": "2V92Q3G5Uq4cUHAUYxXe8FLibHmsXLJgMMyR4h1NWf751M5HNsunZHuZksiYbYaJgNmmRv7hJ3WUH8hNBJrFXUdV",
  "key10": "4g4PBgDei1oewFxsbbtAynLsgSYUxFjRA4d4wdzEPBtH2jobCbLLeebGQGVKNL9pUrNWCMb4SL3rJYJWcCoDAb4j",
  "key11": "5Wb9UU2AnSQykKeDn3Aiym3H5Ysz8YPsborGyJBYTDPXTCoG5xrQVAu41fgZv8R4D8HucCWqcsZVKfqFYDdQBN72",
  "key12": "21JYV1hDw1eXe9WwXejReUPcynjJCxBoxfB4xBwcNgDZDGVCZY9nzakAMcvD9wZ58aC4b11HTWUcN9GJhceUF98y",
  "key13": "4UJedSLV6SrhbxmSFTwLbF89vdpcDEmrWLQLTCfprpeDh7gn3g2wgapEgCtX4Vifm82HRJpayheNAXFMt1mNrDik",
  "key14": "4MgKvEuh51DbxfYo3EZHJjeVQgBp6NaLRkh8DecMD2ocZsf3cftasnM3htZ2izDLLYPExbTeCkNAV5nfRuZuszTF",
  "key15": "4riQY4q6WgV3kdVL38SbfeuRiPxeiQoTFxfKZPFEBqQVesJEXdPfxuKCbxGZwRWbiykw2TscBRGmE36PRoZBXWNR",
  "key16": "i1szkFbfN6Q1Y7ViRcrjpjHDYD4hgpHV4WWkSpa4vJjnaYp3MYtyibnkG91eYLZF8ih6YyG8G1H7mbTkX16Kcxy",
  "key17": "sfVPy8nJRiRFVhE5CaJiGHAVR8SFVNKgRnTVNXMkoPsQoodoi7EvxieCcVry4WpgpNXWE2Cpm7VEftorPWkHQU7",
  "key18": "26gzffTr7wJTEZNAzAgCT7hyYybD2Krj33sL3HPJygU7h9xave7redLMJe2J4anBef1B92BHvCQ3Au1Vs89BUiy9",
  "key19": "4uYxWyPQYxoxCsumJeMp65Y59HaKXaEtkbjNVu1XRq6pKxy4wbJypkK4usvt6zjRxvjNDgETyCoK7qsZBTLHR7xf",
  "key20": "3WzhJarKc79eGupV43xTgtfGEwQoeBTUwQP1B8DEXf51x7wtddf3zgGjX9TRBWaZQB94tFysKTd54rVZaK61NfNv",
  "key21": "z2C9whagQxbBjzjtWSxukjDTMeRT5TrEatE9uMm7FAt4J2YqhsFSPisTtQS6mgktT7X2YDG2cWAZKqjf9SyGdSe",
  "key22": "2AyXtWCwvGdXSCDTj8ExH55mT4Bt58wrb5nQtoLH7FfY6ofcsZQh7aQoGNDGXmPcX4zekdB44Y89XQAfr6j6b797",
  "key23": "5bhEudxDdXPeJx9vsBPr6L9S4Pxwb4iGhR4gjDuJjBpihbwpiS5SHPTnNYqMXG2hREt9A8mrAK4sjpjq3VLnDUNo",
  "key24": "2tyPZHU1Ghr1BhJcos2peTxZtdwyRe3z3KnyUnv1DywGJAH67YRSTkFBvXWCE5NNG9jRAW56mhTo2mCEQGhC3Arr",
  "key25": "26nsJyvbazhni6Q6WLYnt3jPt7hZthTxXjCu1Ry7p9tJdu7PyEuGvhpGHrTjCFHcH53ur24jNgaAEzhqtKKCuFoN",
  "key26": "3jpqzYqhBBKcyoP2ehwQ6EVbozYvzwbV4x8LwauRHTY5LMwT8QWAAXZtFaaakJgi5UqzjJmEWWvzMfkYncceiLmg",
  "key27": "3mBkHy1btN5ojqwrLk9G4MxN8x9rJL7GhUx2qNJAzELTedWdbiCWes4gvxyYTpTjyj77HTQ9BKPpq5eXZFy56bas"
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
