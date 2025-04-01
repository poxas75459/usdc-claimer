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
    "38EmPRJV79AHcJXmgwD3PiukyPWH3mtTpQ7j42W4ma9yvM6w98Ypnc8FpkNwvfvf2z4miipMqTCajnzixQ1s7FGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xcq8rvrq2cD5UzQNWpAkZzG4nbSetfiiWhU4CfYCvjyDMjLdzu1fbfjdGsSNiP2ixm23d3QNqDfNBqAHUmH81LS",
  "key1": "3qFPzsTri7urssP4svwC48xQ98JUTYnkDQ2PBfi8ioLkR5qbaWquTeBdbxx5tUUFDFdHC9quvY3MCt3i9as9zqJG",
  "key2": "c8p1UZ1U5XNLLR4FNxbESDNEZf4gENJypEbUTJCjKvuucn3BXbarV7r3vD5sfzNmpdfugHnxbnR3stte61zxR9S",
  "key3": "3ChGV9f42qqmWHkg5dDpWgMA3v6NbmyT6p1jowevkeQdaSvEh1UUM8zge4KPDisH2aCcfwzu6dHWD3UteyL969Js",
  "key4": "DXFdoL6zE5VQLoee6gRWfQGWv6MQjmYaRJfhcfcY8d3yB9JMQMkEUnrfQFV3WemXAKKLLEj9fuBxhsFUUD2seiF",
  "key5": "4jXhAES3aPZg2KfsphyG563XJS58EFTiJ4gJZ6NryVRs6T2SPnFG33EKiQk4piKcy9ckaKM6sBvcV952GG6CT2U6",
  "key6": "3YARgGmDVrbJweTMjEMUuattE6NFGQa6sJZnCc9NoSnsgGhF1VFLKrbVDSFWCFv4b74Nzw8egWutC1ECjh8JG84a",
  "key7": "2w4dgcGxFMDo5TpJNQWbnTJQLbyxScSWyRCdQ9tVpihGLJVPCHumASh11NNYguPwCA7we6JixetY7DV86CqZC1RA",
  "key8": "5MfsD67LUfQFYHSuTV7EteL5PhKACiuARyxZ8z21nrTkA1fNfCJKg7BWgGczVQzeaPJLitYfS77X1kypvBzLbuXc",
  "key9": "2ciq65KjFfiMwuqay8yb3f3vsj2kXSff89NLnZzEdF5yLep5fHFio7sURpJnXYT5E674CaRpn5FXPLUyNne5VfWR",
  "key10": "37PrTWhfvgWjdgvKSzZCzpXSFMAjC6sqkC4bw4ZcgtLztcvh3QJGgqeqU3sBpnYzhLoEPCPBFBYNwaisavYRQZcr",
  "key11": "3iwzsBoyViDAEwtvUeAvc2rPst1FtynS2gGyx6W4kyc7Kwn4Wp6cdDtDfD5WMHeNpeRPyQTQQtiiwTycRC4b3qhU",
  "key12": "3jfVmPbutzSx22y5m5TQ8PdQKpT1MfmpX2CcvZD3jgUYSCRrQobSzHcCHSjZ7yNrMwmYi3yxhEDwdaKTfZSkfPEU",
  "key13": "42SNGrAs1i5wxYxtrb4t6J7ZcmnUWbvgDrjPx9njvEJQiT8P1XMJDEgwrWxBTtApuBAm364NJeaqrxia8HcDqoq2",
  "key14": "MiVq4JpmQRhU5e23ipfGxkM6KXXnVDJvuXePH9W4gcp3U9wpwiH83pK7odgT1skpZptVJRB8aE9hPf3wbRSvRkS",
  "key15": "2dUxtWjfHJowgn4dqKBEKDMgqqq9H5HtKvqc5Qg6JzoBxfMFwLApRHaHh2jnFkfRY89KNLiPrk22sr9qTCm2aewp",
  "key16": "5SXAj8wk6VUavEKqEt5MATgbvFgvrxSwxte4eLL1XHrodbrEivgS5PY41gfVu1ppb4avmJQcUcwjmWkehb3GwrSF",
  "key17": "3SMseH5a8tYQkHfwBEc4zJDXQ4zqPYtcktNoUPnHaJHTzhGX9uarU8hV5pPg7vLpu6swBPaMRhT1DAFHNvvunRdn",
  "key18": "45BA9sNdNvdHJ19tnzWXWhnc9C8hZ1jvGVYA31XduEyL8nbzjn8K1WbXBnLM355AcQTLMx6VRmfUSVvTJesmRcRf",
  "key19": "2gnZdGvEw7tBoxZQYW5k5hKonhaSHnMYWW5igjAXBtQuiuP1h2DHUabN8nXPQW1GCJas5xhkpWE1sU17bUfYvBxH",
  "key20": "2Uj7A4YvzaoYqNjdubfSP1GpacLo9VUZZH5QDorwhHysjdYnGVmeCmSpzhUNWVr2sMw6tRMHe8gF64kNpWFuzWwN",
  "key21": "2eQADmeLUw6xHXYUwBDbodNdbg2RsAnzLeScLCmpFnbN7ppXWBY2fGCqfHgUCS8ukAPVxtHSzpWVyC4eR5EghsVF",
  "key22": "2GQsbXFZzNLCKWzJxz3mAPeUNerVxnZDKfDB7VpWQc6qpM2cLhbRgNdEPTnUYADGiuvCNqJkyktZiHhzYHa7s3nq",
  "key23": "Agxq3bbcP6SwBQNTNjBnaeY5EfrJQ73ZHVxvpAnFMwcGSgT6C41P2eD2HukXNnm3LasgwVucPtsdRfjKG7Ci8TF",
  "key24": "5P6vYQTmy32KHL9t3oKfU73kE5xDXfBr1jBJkMXGpXMFFdniCw56e8MCv2ujy9h8jhgMENPHfxVfhXiegdtu367J",
  "key25": "2kgTRhRXaDgwxMuuiBFLzcHYqz8ZKPce61NppBwpZRu2js5cFhJmYF9mt4sEwpxeB5fDitnz9M3UWbKobcmhLdtW"
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
