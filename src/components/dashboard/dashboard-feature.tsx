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
    "5VyCmYBXsuMKDZmKrhcxspAShRfoLgQcDj7hBWnehfHuJrwQTW1sT2bLvngttv7YkgLea2oSnTQihCBuSooDgwc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GHMwsahVP9WrgNT5ijeYZJou2P3CT7TFEwuKMjwvfpGKm3mVRWJCBEWfHAwWfSS74cx5UhM4FFYSoUmX9mxXeR1",
  "key1": "9NbkHaRi2uruqjTN8nqcB6nbe57ZGoCX6gWtXxMw81HwDZUJ9E68pn8C6qtVjYVP7FCYU8dzicx6scfRqbERTtC",
  "key2": "2zERKmmkp4TZTrpRb2zv22dNuhuPJgjPdAhUmAoUk32G33y546W7Pr3ahof7ZHC6bDMKP5WWaY1gTQEqwzvRSj76",
  "key3": "3ew6g7FVve7v2CdkBofxZ8AoXsTBwTHxddgh3fTGRwr4jTQW1XbbvsSKg4FLf3Q5wWZMnqxya176EVVkVy1wy1hD",
  "key4": "3o5mKJZ7XzFHrS9t5LpgsiccS17j6BxmHKUyzuHDK1gpgokH1M2rE9A3fP8MgU6T78QCmftPhxEzN6m27TacwXGi",
  "key5": "5aCiz5EmmFLxn69SUKCrWTriraQQtCkmz5wNBMvEo4cRVTabLuirbSvkoffeG4cs5yqKoo3E2FTScZ61FW6WuQrD",
  "key6": "2L84P6k6HAqNceEzdXjdE2KUiwPy33JUmBW99iNV1hwaWaFbRgsjm96pZ5ztNYWcoxHf4JDxfi5zyfsB3W1JEpdn",
  "key7": "4SpUTsGQANwZz89vZUhgM9JtT78ZAPmSc9pYc2SUbqPZHcKjZ93N94trZWL5RJoVDqhWK3ZfT6twVkJF3FmF6Wda",
  "key8": "5gWpWpL4jYCdKUMS1STSvkaq4Fqim4zsiXQZGYRUm3SGLPFspmXpfhtFZBnqpA7nPVRg7EvsV67NSuFijCFctvix",
  "key9": "61seQhLs4KAU2b5jwf7YcuzTUeR6NF8F447oZJfkgKypTsKeGQfvzhsZUyZdYi29fHDTtQvTnT5hmYzXcZNWhTaL",
  "key10": "3vfuZArcwmSSjatjkkvSqgmRQjZoMvVWB9wdEgJ1GxVZmUbFoKc9z8f7dq3gS4AN8YxuUgp2ZcWwgfgQv9Kyvnzu",
  "key11": "4kDkz8DY5n2vpqSHHkAukqKXDLCM9wUoQSBzsP3SditvGy5b9SZvFUvRuk6ydYzLtFCDfsH1jqSc9YaRAzYmAnDW",
  "key12": "ScwiLqVSTBCtRSQX1tW34kyCjfRRQnzoTHuDGaawQQGtdY7VBLZY6zPRfNMU4Q6DcNGCVThHuAyFd1DY2kngKqf",
  "key13": "4YNkZwuHAEZuftZ4mvdkYd1FXpTv64PCixRArPbh87V5NDZDBYEPdTeNsQ4NrgoamZari7RsrtYp5NgkVP19R72S",
  "key14": "9eb2hot3PSpFDwbquBWUtaUmPKsoMrGyuKZFmSinuw9GBtuiTRq4ddPNMJ3PzyRfbXkJetsCuw7mQYwjbPcTjzU",
  "key15": "39UE985qVE5KtVGptPRqyFV1iMurFzpkVG5nzUcWVjF4QPVgoTmRFN6EZ8vbLKctNe1ttWaBek5H2vy1N6tEyQKa",
  "key16": "2tqjQem8oQ5uckDrx7KJpsCkv8Bp7gcSobemp9KczKZbU7e1WeXkkEf5Nj98W6KJ3jcyMzqPQRS2seof8Gtic6N1",
  "key17": "4qMTFtoB8hwJsj9LARUaCeKqe6tBe87KcQmh1w5oigCEv9TpYod2i4vEigkumYRYnEaq5a4iqXJb8jg312KXbwwu",
  "key18": "3boBNT9GDevoPgYFNp381FDaU3uqM6ij9DdkYpV7BjNC7piKkY5TpA3YGjeKZPWqAF4QzTw2U1ZMgGWcjSuRMJvS",
  "key19": "FtYg5FRJsvShfhEPULgFs4rDmmZ1ruitX89WxaUYbTkTR5JiuNW6vPqDFXESXPt9EVvrR7jWoJ7mZeFpBm24tET",
  "key20": "xghUzps3TZ5CiwK9xT9XvwJKpaUNnPGEs6p93iJ6VC6g428yHWwQND73AdvJcidyGFkxm9ja111SmFpchGXZaDN",
  "key21": "4YaYhMPPChompAc2pRSAwtBae9kBjXCuVn5EvTewRs7ztnkk4iehPXRTbWDCBheSAzNaApkMA2iX4ZcRcpRWcn4k",
  "key22": "5yRQ2RDZZZM4wunHm5HxgdPeA1SsxEiRD6E83qqoazE9UCMckHHC1AMeWuzjhViM8vKBD7XQgGDrYM29nPNUKMtD",
  "key23": "qWGbgpkJVzwbDg5ziJRcQF3wf9VYwMU7kng6cL4LJfHAkjbj9ApPNaPrVigzLMPRUu37YMCvuKZ4wqxNPDmBD4j",
  "key24": "3tawyZJX6yFbCMVyWFHpbrysRasCrZFwFboGzLTv2e1QaAw4XubVWo5ZAN5GkN9UzjUP4Uh5D8Sj9cxFNCn7wG1v",
  "key25": "4NU463n433A5G1yn7Eb5patgHkaKoomBnZUr4YZea5DjaZHqFjcVdC1d8pf94uL8HUP1YTAwfPYxnPpkpQHXubRg",
  "key26": "59rKYXvwwuBPLMXtnShoe7jbJg6Xmf76QdYnf6nrUUjcth2QAgnJSVYjhqPdb1JTM3Wm6Gxs6roFB81RpXXP5iRo",
  "key27": "3LvgLfJ1cdHqYjKV4eVeTzwqEzs8ugwGXeae5RjPmkP9tz4VPH7kb6KL1BXXRdkL3qjMrJLXDrLrigLGwXrnwYGm",
  "key28": "GnWxLUo46Uxi4wPEoRDqzXYHDQewfbtkQbHJJ9T1BtiKncHaQ71Nqw2crH1gt4J9bpcqztJ1PfVZe1idRFFoHZN",
  "key29": "5icSB5bGennaMkMm9ybS8xhJZzLeBd81dAMnQJKfHkLMtZvsS9tjP4WZju4eaepnyMGiotjdkR7aS7aBqTZygaL3",
  "key30": "4Smqsy5GWfssqZNK62XrRTLtwWQ5Cwhoe1T6MmrzTVErhYEi3GFRLuKZBFF1V7WdJXtTmmdggS8LWnz9BGKCKiFG",
  "key31": "gvy9dchQ7eH2Qrjmvzqj4N53avU1BieVu6rnwVXBvCEvb3kzvBHrTPqfAUjJnD4SftbAZgJW93PHYji5PPmgXdN",
  "key32": "4h9pw8i5uF5CUwXT13gu6v9PNbUTZLALQAzw45yGSkEzmHm78RUD51ZRG8xzKaVRSLtw7fxbZ7gHb65es2Us86qH",
  "key33": "5CsTt1QqNqBAZDV7LDqbV79rUrE8TtpbtaJSfvgn2Jh4PLVNRh5AHR9gAXnjXrP8hSXzz1iyQrvAvi3U1YXCEWZv",
  "key34": "3AcV4zj5JV8FpYJ9Ht7pEgac2ecRyPZ4YsFQaqQKv1unUx5zsjE3NF9wLbd1Cq5wsdYCohxQT8XgjyhZWudcVXHh",
  "key35": "3KqMUtUfnVBTqvX2udTrKWAcWFyMVwJ7JAAwda6gRLSWNewA39yqS2hpecJWKrivriS3gXwjttfb1gf8etQ1RiHM",
  "key36": "2zxkoTjAb8p5sYgFUGRbxm3Dvtypkj1NgQr5qspF2pRb4iXetih5WzbR6JwvVVnN3eaPVpTiuHHAehmXTkHMBEjY",
  "key37": "38G2TTrRdYnwMk9tUKwjnrYo8Ugyewsz5cuj7mXE1oBLygeLgut2ydonkJw1dD4W8az4Q1GQZzaCEXnSkQrgJZph",
  "key38": "2xXJNpbAWyE7LNdLizqLBPrMStNLXK3Fui9GfRL4qMRLyzc4pfbKvVj894ZXEbLbxgYFWqWuAePqyy1yJTtHbjgX",
  "key39": "3RfTJGK8CG8rJm8QxdWVUvrDNSQnqoNtE2BfybjoGQFHR6zbtvJBxe5mKE3P7PaNBDhc4i8LtG2MD5EBR5RzExrK"
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
