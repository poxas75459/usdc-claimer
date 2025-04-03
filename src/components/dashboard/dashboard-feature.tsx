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
    "5PARkg8vJ3CyF7fmWyNR3Y4Rbn5HUGfKEm6rDi6tT84LweQ3m5YZ3mh8LiGetscY7ChEtsBbS71BXyA7NkKtxZ1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwWcM3gNs14spwoJXDtLHT54e1WNeWv9p7zaJbNiGa9Xe6n6JQERqTbg6kEWLwQeZEbgECG2YG4nPG4XC8Lvwvj",
  "key1": "5SVQEu1o5F3gqnZDfHD3SmFd3SMU5no9WYay21pTzaua6aiQ9L5V9efnj7fA9mjt3MhiQoCJo197UQi2jFEmGPLd",
  "key2": "534poQQuh21qNQoPFXqqqCErvzGjgB6fyMrxUsC9ZfWJo5txiPC1WPPd4qg3mydfLCPUHP1h6TB1rXtj3PUYoK63",
  "key3": "9vRhXjAaYK4pQkPqV8AkvJ6nCSQ2GecWQSA4mciVKuARSiFmSGXqpCvgV6LE8mNkVCWZHUgpiF6VfdPfT5pZWxm",
  "key4": "4sDcip9zwQb1EAYXiQbYVB3eZHAjsW4ANWJTfj22NngKf7JJotzBrLzvMzmLguNngcV5ZECrgA2PnPScuGmd6mpP",
  "key5": "3UW2dnyCFtv61JUPcvUXNHkBynKGx3xsgB39XvWF71kHLBg8JromFibKgR3Sw4Mab8MM5v87BUeDWzKoTmtEEBhF",
  "key6": "7Fho5ERh6ZkbkqwZXpWUohtuykDaEqJW7BLGwp2saxuq7hXvvPfVUMWYViZ24RXTBLGg6iCJcxJff7vv6dWBnyf",
  "key7": "4yxaUDdM7gdRddgXajgnrdD3mvN6y2FUd9g6Qm27acGF7dmxx3rvqisiwzcVsXr5TgsbY7uXcRRsMKVX3ib1uZ4N",
  "key8": "5akS2WtVBzmXaAAtv3cF6VYRbNoSRfTtfjcM5DMk8iAsYKooeBazpByGtaviozegaFYyyCzvT96K9eGhs3jjq2mp",
  "key9": "bgnJNueDFqJMr6UvnL6B5EjctLeXke8MebFA4sV5328UpCRGbDGpFRLPtTg4iEodCk2Hi358fQEmQCY3pSqhXse",
  "key10": "Nbm4a9s7n5F3cLPGAUfiFoRLn4VegxW7K6kGwxsbnK3AyjYEqjoB2vhwQLFofSMPE4wczvUSH4UHzcS3KS63vQ4",
  "key11": "5LDh3YpUC1nj5aMQosyYKDeunBoKc1y1YAYQ3snUjf1PVSZeWTdpFtbYNxr7HvKJireZV1Y5Ke5o3QC5gA1fGCM5",
  "key12": "L6ux1SK4kxKGg81epYhTsX3uJozeVihQd9MFqmFvGjJXk68vJpjqk5jBeER8m4FQP9eMGU9sT333gZeu7bLrBuD",
  "key13": "5oJzykAuo9FoSmmpcr672zrbhCS4P3h9gkfB89J7oTtNVhx38iGXqRSHuCDFNRfjf1kjbkyCynqy6KMpcAZhSHCo",
  "key14": "SSEKVTzFHoTkkE5udRXyMnYFnvBVxQq9G7AeHWoEAxstoi6QUyQARUWKfCvD1ph8DQNQLQDHY2hAjPbSzm57yK8",
  "key15": "5pgA2dBzTwmnfN5erAGfDWW119vDLi7mznUUjxtjVDS5hLm2YCedqjwV7tyN3rgtvQKfCkWh9sPnQS2NoABoV4dW",
  "key16": "67FeC25jCVv5Gh6Xirn1R5oqMJbdmJfnU6mL5Z5cBwh3pagLefaCMQ8JERXXrcvFQGU1dZGg3YZumn4VmUpDhngb",
  "key17": "z5dtMbeAyUUoQgvkrwbZGUrYfjBZNWbp6c4grcTYrvzL75XT6DW6pTEjtxof6mNXGPHnGbjSStC6MR1DnXwvaUN",
  "key18": "f2JpQGFZC1gFR7YccVXSixK7YR6oQ8jGTurSq7gESHSifSuz1TR7tYubvjmipkrro4jFKoqKaG9XvFefEuTfndd",
  "key19": "4nGS6fcH4PY77QjorgdiWDHkdaFDx73uDThrzzbHMe2nPDwiGjA5XUJM8z6ehve2UtkGG4drbfwPhcEMFhSN6P1K",
  "key20": "3QrS3dJ8526ovk2z5ozLrjKpJHv4rWvRWNfVDc2kXsGwBstLivu3YgecV2pFKWP1Nr1CdZog8kJ6heN2L85qd4Ao",
  "key21": "4GrWA6LYpTWrBN8Etuc1KkqbHwXLtoShbww7HvK6BNQQuwuHT3LT5z6kbAZcMi4C9XzPo7xhPTsJLeXTnN2dKCLQ",
  "key22": "5q2S1im8XHQ9AsYNg4PJisnMc29ywRTWj4U6a8Lkr5CzDWNZtxUf1gFpDFQ9ERRiZJBMQWN4EihfCfQ8LMmhWiVk",
  "key23": "2kpzddiD4pHetCRPtXZWi74gBD6FW2dpnCh2DZMHkKVeSaEp4HncJc6DdG6cmSzxKTUhiKb18u8LnfFyosD81rZ",
  "key24": "PdVWGyabs4hQL3rytCofZ6fyh2M5wm9PhfZurDJbPruHRTTbWeVZVDdZNxQLHBP43hRFauivJ3iCKYhu85FZQC6",
  "key25": "3qMCeFadtxUtaYPmvTeXA17zZ68ejAip6j4pzCV3DxHU1hBi5cTrTHE59XpVnMMEAMoT1WFSEgcRr4yJM5McSBbi",
  "key26": "4E9tPmWDtzdS53Xo8Cdp85mfsopyxMSz6aJyPLrxxdHCg3yoLTSmDDNMomfcisZkrjYzwAG3ebyhHCpnauDPhnSu",
  "key27": "5M99LbZgzwWcrEqnjoKtuqSCFXwrH9WivV3v9abSFv6mXweyipJMb4wr36xXbgMsXevZPdZERvbgm8sJpCYVMbBG",
  "key28": "3vXFioecrAT3PHyFrfjWbEaJds52dWdUybcE8de2TVjdBGLEDLDDCNQpKBgEVNcvJYaxewiT731CWAw5j4BceLTW",
  "key29": "T8puUQM9f6tzsdFqjyg9FynLs1M2xS2NkLRbj5MNXBnvAw1fmjx41rTVn46YKZgeRv5wDs5TQsxfZuVmMzheSwJ",
  "key30": "27ZbAK9nUtYASbd2A1nP7AewbDeKXqLqvEG628K9DGTcyFufh6De4J2wJwCQ1bUjKis7JWwGdXetWUEPeAjdH7Vi",
  "key31": "2jfjNCurCmvXsqCxHao7i5XuLjpLM1PJod2j8SEkTKZ7gQL1dFLuR7e4YUBX1zg5DhXMgxSk8c5PYL5ug56Sqyof",
  "key32": "jecWkXdQYYjLEm39NfZQRsKYNGXCTwBVM1bhLLDf2imphmVxchJndpmTQDQvxLa1GcYG67YS1N6xazcVq8SD7Ze",
  "key33": "2UrmKGxGSG1Qxh6g7mvLRTc3sCUB5H8sMbWmTyg39S9CX1GC4Zwx4Xk6Qxc5E3nFjvgZmDDAdHCJvFXemmU5ZMVC",
  "key34": "2retfeX3fmgHugm4DknM3yTJ6GzWNzEwciQy7cUzp45FzLiUYz2opEwVhNse2WQeSHhfRsSqwvbBa2cc29aGR41Q",
  "key35": "hEEPYQ97hTxtTXd34Duhqf3293zahFkRm1XWD8WcPUPjTHQ8i58EQ13qGFVTssVHgEeianrhdaZWj4vJdQfXxYu",
  "key36": "K9QSqXFxuqQqssVnnPnj3HF5uVxDRBPinvPjGYhNF7xUF6zFa1jixcmZLyfdUa7gqprQSQ5VoC2pyCeSx5NCJkx",
  "key37": "34usuYxGpSWLUMyJUaHF7Tq3ZZhYLAtQUcRKtEMK2eaAZo6CgsdWPaYn3i5UoF7Aims1hCZ8fDGAqhST49nN94aF",
  "key38": "4gW46m5RLmtxQY2N388khjGYxg3KwGojZTJVXudxD99ys2UJQoVpekt3sXJXho8d1FbEHMJJADof5tmj62s3jDAt",
  "key39": "3evgRfpZrLCw3tQYhK37QMomgcXrtGoE5g9F1JvgBByWarPsGQRempXAwMspYiT9sobP15Kg2LQwFqGtjk8DjQQx",
  "key40": "4A9P5vMrTyz1S7gVjVYRUSfqQbhQ1mp3kNeisknr5beFCTMNjRgYfqv4AZLWVpDsUkaDehNQHibifk2ZRPVXd458"
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
