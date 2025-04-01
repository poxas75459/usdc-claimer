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
    "5ERJPfaMZnPJRjurAuHhxL27kV2miD9vGiWi2EQdrB817UmjiAKv5L2KZNpdWLwCs3YZFBYzRg8pvFZsyEnyE1cA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msKTkd5un4qCEixYiiNjSq45gyQwwtE9Wto9UG3aPeuCsftbUmA7v47GFEeo1uMynVEHwztUe21Yhv6KWnFUFfE",
  "key1": "3DKF9hHBRCaL5Tmba7e9Yz49SiQc6CqDWtg5FZQRAZDiytg57BYxgUdiojoBrJXmQpM4EToW9ug38KQzHmKtx237",
  "key2": "3oSwf84vLQYDdqr6LcE4VHoRfwqzDBQLuRiPGzdg8NTNneBNJjbrfXL4Lq8SedK5SHHwrsUcMEYoQe7JaZVMSbBe",
  "key3": "XkQGhKqjVTfz8vGPennknbrQeaNNWgEFSwjrGLZC8gY6hCVzPrZsFBXuwMBziUq7fTYGnv3VRsgFbnb9feeQ1fy",
  "key4": "3KyKcs4Wed2qP6pqSHYjC4jfHD2oWuMVeGHnjdX8Y9r9hKSyqi13Mz98oDtngJBqjdccQPGXPCAdKZdPqke8Jej9",
  "key5": "5MUBW6JRySavHZ95tRA97qy5g64JunXzGQkgaCJ3W3aDSdLhunUriw8GExSpchn38tmESsxULr2k7yLX6T29GZFU",
  "key6": "4Q1FGB5t4jxntoZrzpVUfiBybYtCJ1ifWCJYRJq5GHpK2SkmXnVAgDakDDisiyRF6XTd7bkzuzaZ9bTeLMuevJZw",
  "key7": "4njKWPGPZGD1fNkUK1y4rjbRMwPCkyUrBASVhzXw45rLLjoiZEsLzEVMEiTzeZkgAHpMn2ot7nrL5eE1R4rjRzdW",
  "key8": "VB6ketCwSVXgHJt3sGwQP5mpZVaTwRRE1TVZQxga4WyenTVdryomTPGZ8ZcoryTN5yqMihir35AVRT3gFnAZFWo",
  "key9": "2RLf49i11cqXP4A2T852Knegu6KgNoXwdHkkqS52dSqCYESAqkMTULpqzYTYpVV1oN57LYSjTXjEkEbJ7cdFUFNM",
  "key10": "4L7wQYSLgbRayWUDb239etx5wfvuk9ZoDFoWhMugE5VbqErzzxz56RnHea4KbuJ9it1rCesGXebiy2LwZZQGu6KN",
  "key11": "3axtsEDyaAGjxwrYSArxwUu4s2Pb2gEntWBpxhoSmACFq6MwxrZXcsdUQHkED61QcHKzrdmwtdPuJfi2N3KZ3xLs",
  "key12": "52eFWS4BEhYqomAxcN9R7zEHCiB6UXUnXYnmYz7wyVoaXAzA131S5WZCpAuCkGtjhZcKatEbQc7M9B1o3xa1Krj6",
  "key13": "3ib78KStaQLmdsWwAm1Ydy3kWq7vE3MZH7d8f7YjwijLSqpJGMY1MMVacrQqCjqZ8pchnX3iMfjQvAd1s724RG2r",
  "key14": "4t6Wwxm63xWE1bH5zkimJLtd8yuuKxJeU2Y7WyRtAZpG5ZENYK4frt586U44X7wPnddxcPvLdk6cq3jzzA76N2mf",
  "key15": "mUdSwSNW9aZ6uiVgxaamYJKnuTPjHKuzARcKnkWmzcNqCHQ57YDPZs9u6oxuQBrXyDoxVQ5YshxvKATL9hCf4oV",
  "key16": "7t3UQLxmkvvBruMJEf7aUHnVJbb4PuCoP8k6KFpnNjt3ELg21aaPq94G8G7bdbo5soCF2PetQX6fhNmwp3KLJyZ",
  "key17": "2jB2NWUi4pdrq62WALeTjqJD4kUDUmKNeRVBo1QqcKP9rbeidmHsHRc5YS4Sya7nvurVZr2NVVKmKKZugd17Q66A",
  "key18": "tMdBncbjNfExJCiEZy6znKGk3CQqipAMeBysQM8xcW9Jb2sjFzdPR1MfXrWRw2coP7t8ZnsKF3K3KUwGG8eU5ru",
  "key19": "5DSThh61mqdv8G8C8iLqmB7AHDcFWt3cN9FAa3PatktGECkHYgBnLAfbvKMnMwZtPe5qWib2xreAzhNTqioFMY9F",
  "key20": "3GQt9o79BeW5SAKGa5k3z7uCUAiBuMCsNb9FhJvdXNknRMWRLMcd5MMmgNHkufm8Th5CQN1uzDq1Z8aaPCR8Kv2p",
  "key21": "4E64Pnc52A7eW8hwnQicDoqMYY8CsXCZieqUyPiHMc7nGutebVDaSrxoxeApKdeXNkrdYdRvegRz3bE6QMYgyqzH",
  "key22": "6YTmYFaG14C4pCBMVTgUyWzTDAWGneYTN4tX2wce7wLEazz7LLbvvVKHaUtsAqrHoPt9SaoJnQ1Q8aartbiRrug",
  "key23": "5kJAACAuzD9W7FsGVEwriwqW3GQjYadA5bB8qre2moW9QTYSoAkvzsZJD2EpPDzQZVU5FGyWgJAeUZMmJ3CMKiNf",
  "key24": "5GByRNNirobWNzcno9Kq4wWDiAcp7Z9W552suhUXz8FKugTh8UTnXBNyGmwUmcSqFogB1w8XhxgxqBci8uu3HL2j",
  "key25": "hhBQ2UM8L7RFqQjCnCoyshksHhjusPJt2LvdHhjkrfYDwEvsNTUg62AuVyKfq3gQm89t428B8yd5PjFuXhyZ5Sj",
  "key26": "5Zz4tePSWRG4fJuHm3UHjTwYau2KY1Y5BcLa8SCoraXZh4d5KENret6MFh1aDhhr9Rqh3vLcRkjChAt9yAR37HdB",
  "key27": "3AcSLxrKi3yBeM47jhczoZVBZb8UqgScTPvd8q4j4jjRiy4nvTmy76He3f3S8zMnUK4xmiS1uVbZ53sQTDZt3tnB",
  "key28": "5ZWA1yyjwDBvtDwda2sUYVvtDHv3v2vGPsZ9fcoHhNXeJpjC9N2ivBbdcQLMpT9mpvRKNpD3wtojDsk4ruipf4Tj",
  "key29": "2SgRoZif6y5NJJA5bA4we3jY5x71T91y4MfvXtJ8Ynm6wLwht3VsZfaWeV16pzPtBs64MeDxNRdv7aeZfEZn8C62"
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
