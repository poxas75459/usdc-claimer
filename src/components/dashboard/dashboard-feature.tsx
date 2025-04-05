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
    "44by6E4szqfmDEhMBcYMotmi11zGomNj5PaPtEQBoXzU4NdzsT7qpYH6cJYGrey1sFbu1pVP62JbdY9e5DWgUA2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfLugQ5BSejCFRAWGkeXUu1BQwHSHFrCGUu3n1xr6DBt684kM34ruyeWMUXXZmYf6pjBfM6qikxqjQH6LcTQHF1",
  "key1": "wNjsewVmZh59rwvQbDyW76yRhTP5NtyGQf3tEmdmo1RACPXznDD4ouPYsna2EuKFwFMmGpqCLcvezmsX6zK731j",
  "key2": "2GBr791JxiWhz7neGqxbkzqfE6to6hjUEgEk62nxpD3Ur3HGhbotfznUccpQ6RCZbNVYBdb3qeCS2FwcW7yMzKYf",
  "key3": "3pmShxcR9N1Qd5zqSbRzgjoZbqb6pVpBUhMaV89sfb7UpTyz1fD9VJT1WMYsRJzsyg5yqPjZTV8jgaRnypR8S3PU",
  "key4": "5sbPWH3Ax1WaBG6VZGsityfk3cXB9YHwLQouCVQRLtMSLjaDQAfUrC9EGJckZBaUstdLtbUE2PCyGAZp19HbHrEy",
  "key5": "2GrYcWJsBY3XZXYPT7YBAb8sGezCmdBonpQoxHdVT929b34sucZ14BFTsTiFWdUt1ngChoL268JCubBMMianwD3D",
  "key6": "5atD7LPQWagtL7FPkKUabkFGvm2d8dK81vnktQ1mNX61ppmgUciPpoyXRGDFc2LhMajf1wnCsa3XXiDdpT4X9B5Z",
  "key7": "3prEsCCVsKs2qcKF4Qcoowwn4AJjV6EZfwBGMWPzd3cSKDi6CYNk78WFgHBSdpQWeJCfxpdsZdEVNEPwwtCN9s1b",
  "key8": "2P1zd53aDugKV8CGDksJLKGHW4MhnytV1pGGuhzbKWTUeEDW2z1cyvpv9sYgvGySKZpjAcxHf58VR9K9XRXVZLAp",
  "key9": "AYtBRHHEqihJnQsPP483rHR2F5P2w87F4P53EQqGBmMfbVYXCbstXfvLVa3KH8MVU2591sy5YHNr9yPYiwMYnFx",
  "key10": "42Q8ac4mA7KmnMUB76WQMcEUsccx8jEG7wTs66F1myWLTz3QmwDTYq5xV1qbRa8ESBuqAoNposrhkurBoH1cQXuC",
  "key11": "2FHFDWZoShTD8V4g5inpPFGPRXEAtdsZYsiPQ9QnqBDUT1v6QrWEeuWhoERpPFuRzox2zCG94UWP5HuJj7HJ7GRq",
  "key12": "61hpZ24mt2yLMeAnqLY4xFZVo9zCY8e1g5Zd933KG67NwmHjanZW5WLHhPfFUmNc6feu5PvLJ9svDNCN7TgRJWsG",
  "key13": "4LtSC72jMQYCnkzh5yXniHnyrkh8NeSrcFRqUKADxcVDaPhizeJqMfd4EHgZZ9r8UyQ3aJFCZCmPRZnUXEgAbUHW",
  "key14": "2zGMNL4J876NNZrS2MpmdhfF4S4T9pskNQwmkNwrD5Kfizcc2F7HaC1BWsWVQtPoxXSQrGbudvDciSddDDZcb9MC",
  "key15": "4mHdcBSNpCxX7ja6AFSTE9TFaMHhDyGvcgRx25s87YnUZ6YTbAyf7LD1zgKM75ZgcX969iPxeWbxddA3iUHxiukx",
  "key16": "52TG6fmzRiTEDHzjGPm6BgUm6KifezfFELVz1zZqmnfQN6VXzvkXypWMgaDetUDZudVBMn6SQyDKGjAFKfi3xs1C",
  "key17": "3xZsWZ8HuD1WE9E4pxF4rDiWyhMLAcuDpyrAWVit74pSPPqjhCe6yB38YK1z6QqbNoimhfRNS3Jznkxdo92EydMX",
  "key18": "uzSJjqF8r7bP4xArszYGqhPQGmNdF5PsgmggsJuyDouk1fcbL4ndGEo9uDHnUBcKer9bwaCUEAXTBv6PMYPpQXH",
  "key19": "4phSogoMhEPCJaoUKH1iBc1pw5tgUJMVkr6TitmRHuNw2Awp15ekRKtdsXhEmwvzPT8Ktc1eApgqbadHy2B6wpbv",
  "key20": "4VUh14dbufPEQ3SZNbZMALWhfZP5QpV18LKucVcsU1QNvh8n92FsSUmbQveqGv8BCjUoBFtezeSLet87jsLFcqDo",
  "key21": "5xd4StN1BqHy9kv82b6xWhMfEUSdo7ogGPD5UYy41Sy2gNSfysGsNWpQZXLotHdmhhAjXMfwkDYB3o79eqCNie5Q",
  "key22": "2c4NbXPBZ7zr2722dePr8ZmWzkLrcUEEKGJjRZMTk7UQxfEtMT1tot9pWxP4o3RsJHveJcX1LAZtG4Uaktrq42uq",
  "key23": "4fP8GChEYoH2DPyLCyoZLaK5xrNw3exMTnE1T2bLzWa5SFUxFpBSFQqTgS2Bf9GkyeinDDF5Hz4tepCVKa5TVk9v",
  "key24": "yv8yn1uMPM9CQ67AjNLA8okEicgrTr5dsETrVhXUvLLsy6HCVUwjwPCzpHRXEMChejJ4oL4MMHN4PABzJtuFy7q",
  "key25": "4fPAbeYNqJ8GTcssoc4BFfWwZHLzZTgFSCJ3ArLJgv8xFixaWvQ2Niei29PUkwnPjYmnorYxMZPBQTJsKNefRU1S",
  "key26": "2oSrhFBC54tb7pYe3a4AkXjJjAjTVM9Xsw3waNd5uviJbCNmCyHgER6nkUMNysEhHkxmjFSLcEtgVRFJ8Gzj6Ktw",
  "key27": "33Zh9sLQSD6kZNQAKAikCodDaTDLfTKDUyJxkZdCiMjpz4vpH13BGeTRBdtAvxef9qqGXz3WKnuPRjzV86889Q9Q",
  "key28": "58XcRx8eqzgomipw2UUWxHxmxk379wyV5TG58Z35QrRyJER7BJvoo9y5MnwQ2iUvMqdHzgSL8b1F3m1ccTA1hEoC",
  "key29": "5AtT6mw9CcD8DUFQ4TnZuKxYvdiHHMPXmF9HHRg1xakJWPsJUNbTWphnAkW4BTTtmKSacGsMCkBczoqRe6ZVravp",
  "key30": "3wGUH3BfsreMtDZprQBUZ3EWkVcXfXgBLoNWVp3ZHhxggkkLZAmSNFDzktUSwaSjpSNu1QRy2mnHfrRVLBnf23ty",
  "key31": "5Fn3pDgKcWhn45gdJbAYDEWYKXvV2QtBRLpV5amZmHwPaH8Rh6J9Djdjq8K6tFXdjTSHTPRF3zh6jbKkxHyL2TT5"
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
