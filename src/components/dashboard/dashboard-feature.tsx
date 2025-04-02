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
    "4a5j7r6VhEiBQW2iTPpLQw1ZWDsyFuxbZoT8Xdt753gyy6FhZmV3Knb1JAKfTKA1Hw83bb1xAtRKEjBFk9Q1oqF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tn6KRePLnh3BcMQTRiKJPD1YGHomhYf1YiVqA89Asr1Zb7gAUmok58f3XdogZk3pBeGbnYYNaijZDqUSqZzJcgK",
  "key1": "4ETmBpN64SgLNXTRtGcipMb9zqv12rcxUXpmgF4sQU7TV9UBaUxinqARcgrZwyYwefGn1NhJ1r4HZ4yK4nyfVvLV",
  "key2": "5ZP7bskHmQTjxifxJufDGMMnTwtpw6RMX92knqgfP7AjqNeWoRbY4FphrWVQCW1L3SWDnB7FWm2pJXYCnobAJJJL",
  "key3": "3hfVcN4p6bB83NymhPhzrYQUVYUFk79paz7diZKKJUdzcKJCuE2eZY26viimjx3MmEUM4oUrwfWQow2FjTackMtj",
  "key4": "4guB1SHws1Up7M64VWc1froFBYdcBxDnEHTTvGPyvmbJKjjRUQQREWdLEtJyy5PPbw96JJPJW6HpfE8i2ECE3fSL",
  "key5": "5p7o2WPyovUc3xQZD8gPowfCwB1pTFzKuCVS2fkXMbWD1yR4nWCLpGcjcGZEXNY1r1fFXYZAjFiDtyg986JiUieG",
  "key6": "2r9fBVGB4jgtF9RMoC93ZyGLnH2ipgvYrbyRjXYTz9VcCL4VPU3VFrYQfzvWnj2Hwo6BAxMoy8zWWubZkSVV3AeC",
  "key7": "2FaVikKXqW66xSneE4kRKr1yFBKxQSjGxoQtp7PPRAia5FA1KDSyevodZipNoKLSDEAG8fHhduGGzSezLB1wNjBW",
  "key8": "53XaVgV8v6h3MgK3M61PGgLpXFpMj2m9oWqSS1SDn876NjbKh2bnYiJZqc4H6GD46jQ5JqpthJ89ghyVHnznwdg",
  "key9": "5VHTwfkRgKKJMUH52VLqjt7A7zEBFsfEk3QBkx75imuGKkNg3QVdyEfMdjNTFsPbkhN8X7yTAFyjN6mZUWCJEAYE",
  "key10": "2mGCE6iVTTDwvj13YRkNTYK5vR91f9uN5nPfAd8rKyx19QcZrsLtPVrS2VuKW38btqPT9bM9joWJK5ob6gZKDnht",
  "key11": "2n4imRWcnbfQqmcFvdrQteHwoyGBgr5bUv5YKTjsnSeUh9caNtLgnutTvZvojqJMTXELvhLJKXDDCR9bkKoczHpH",
  "key12": "2vMTkYLGVfVw8u7vV3q64HLRm9gCRVVRasCN9jtqcMAoXEP5Ep15pMXAoXbkJDVp2PuF4cdUMqUqof6qYpE9qULz",
  "key13": "2pJjjdFoztZ4bFrrjxpFEDECQ3UCfnX54WBqWaymPFagTjDuKpzZcTJUqgFY9GzxsWKnaVaHGE3i8bewBd5LapD7",
  "key14": "3yvf7Jw68VY6861VYwP66m1TMTGgazKd7W3QYd8TGKqt7SK2nk6g4NNYL1fSz9DZhFRh4iFufLt5AWc2PMWrEX7j",
  "key15": "5p6W1MdPjAQPvX6xnZSoCqxgtVRMiKi32LUgwCiKbp8XxS4Yz6owNhNzQV338zLK68Yh3wYvuyvGXC6nD5SiCejC",
  "key16": "nCkWhpz6jrpp2YXa2PzbCF6QYQL7nYVdnQVvaYfnEecS1xqCPXg6i3e94y9bT5fpjr6LCV4oNHFLYCU982TAhSN",
  "key17": "5XFCXyZ8fRfg2kXhWmAvFijg8HAbHHVtC4mUV3LXLx8xZAhQZTEYKYK8fMowMvSgoPQJD9VJVwpYiReDkPgJJb6X",
  "key18": "3PRBm9bHDim5dhGbUdmHogh7DzM484dTEFxDNDQvxFSry8FnWGBsNaETGQKRVzme9wSDNPvcQXDYqh7chgYmuzSS",
  "key19": "2JWAH5g63srNEEcWjEvHAFJLNcP652SQq8WLkt6VRmKh8WYt2vyVocTD5jdt55tFABg4PfZWEz9sDCSfiw7CcDtu",
  "key20": "5GhxB3ndnhtRA29ZsZZUCt8Fg7nDL7sBfJhvgDvKKygHqsFDM1X7b8nLbfpV9jxiews4ABqXqHXw686ELnqkZBgc",
  "key21": "3aGHDcARdYKVLKV1hYjbqnR2RRrevSkwFPfvnXyEBMdg7xydd3r71TTwpfBkBtSUfHuYuFCTs4hvwDGxiybM7AvZ",
  "key22": "26zbcPcnK6CxDaCg7HMZ7Lho5BDHmDQqYkqVyzkvNGoHDvFPRufSF8yBec4a9Heyvyy4LtJYmeruSvPWzyxLV2Q8",
  "key23": "3Efe4LgvJnsrG9ra8qQr4iYfew7k2hr1EzWD9K3ookpZXm7hzUicoyuqkXF2LrXyWZ83CwpNG8H76xKSTYbbnhci",
  "key24": "31raWJvRP9BZ1mwLBukyNczfAXhh5G8KxxovZAVysXyzZqmnXxAhV5VKham2WKNtEkCRzJ2BdL2sYsYd4ZBup556",
  "key25": "ZgNWuPEDLF4H9JYEYSHiK9A6TVoomiqu61oEb9ChxfjJEDcjjDikNDncwsdMUHniMbZEAKh9e7tMWRdCnU9ZUNY",
  "key26": "5ZEGtFz15GqDv1Qm17sBhbWEs2fL5eZFJB3hUbQQhWTsRMMYiiQnYsmSKxUKTb7wWrkUtH18BfwMHmcHG1MRC38Z",
  "key27": "2vemaK7dVphjmfBickhKDptQh7b1y18cNSv48H52WyEPh1PVuytF4TVPSJa5xemPgFaaRadz5kRSvdrS5jmiYw2s",
  "key28": "3Tev462Vskyjt8XJoUVz1qGYsXyHLWegAKmKDDoFpCuWUePSRuGEtZ1cRv5xyMwFKf6zUTKfEnPisgMKPmihEMwB",
  "key29": "x9MV4QMrJ6kVCCPWAWaLuLV7RVHjYjZXKhXXcaWnL9s8w2kxxTX6DMq3apjEZkPs2moHvrKDYyu6d5a7iM2DPWv",
  "key30": "122WivUqzFn2Vyd9S9F8khThChGN7fCR6bnm2JXSwot7k259Rz92sj4dcwEkpjFD3KQVJY94cWg5UZRstjWvtKXL",
  "key31": "3UZr48aiSvE3MTxch8eVktmFEPjR77EVnhsFnRwwTzzdAhEChbHSE2tySZgw7TUtC65foMhSxXQzhXQfVkSvTxiH",
  "key32": "3a9EVk5WY9D7zoisA2o2Vch8KLDitFkNxoPECFz3EH3HnVYPkCgv56NUkyTBc6NhhRBShEV5pkhsTcwAe3whSHyz",
  "key33": "2YhXjz6KZJffkfrvEnZT6YFgxWQXzR1TSFTqA2GgJgWTWHQRVVyaTtMjCEQm8xQGepFt76hh1oWPnyiBxK8VnfdN",
  "key34": "3qjZb2oSCFat2ibb2LDoMqq4xLbL7q9uaBno8ZMgxUmqGBwEvjCP15vZNdNezjAvVXNDPkARaTMqK6y7FKc4ddjZ",
  "key35": "675qDAN5HpoRSQcEFrTXza4hVMjj9dLTRd8S2D4CMzxGMfCmmNTD8HBauEv1EpuDwTo9qWoFQqAYhSAsuZbJrb3G",
  "key36": "129oXMqeACGdnGqnWRUfRVt8DUS1KgYTBdgqoikCZbceNkUaQ5L8hckqZKB2h2VBZiod5qTRsBqda4JoNrCYqCgm",
  "key37": "ma5WEH6MrhhWayaMgW4pZ7erLgM8cn2YjMEphMfrVwEZsX4pCCeB4c4frbtBeCu89rBQyLgSK9T63YFquaCeogN",
  "key38": "HHk1k2BJ3TDDWZZr2BNoZXrkih3LvMm7S3q5s2YJJMsjKbYAwPGJeq6AfQ8CwGDAqjy53Skvn2BiosjRfw3XA1s",
  "key39": "V69yEAxdWrnmBmHPWaWPwtaA6ypH87LxANse2aGb4h3Jkx7YkdxjvrTwY8GKaytDWAi692xMa6m3GMtRFaANcLw"
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
