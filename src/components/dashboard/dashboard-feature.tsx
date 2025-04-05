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
    "61rJa1McLFhTm6nFeX9eSEsbzMY9qF2mdnNGBShE49BKeVMm36XP8UkC5bXYnATsTtwmq5QCkBa6e5oRNCg2t3JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4NtNbChVQKL7B9bxVfbJQWW9MeML5DPhqwkAgg6Ungpa3d4q2oc5uUg98jeEj3Tqck5LX3rq6fHEzjXh3fwdAr",
  "key1": "2fu8is2EeeQS7Zh1kjkzqnFy2R8Sx2xTqp9e77bKLM2Mgii5b4juPSDTwS9fmDoGggVXRZFwbXegtKdr7UbJqy7R",
  "key2": "3HbBedxBxSzE78fGwZZxoxma5TZXyMjnXpjKkojrFJta3fET1ZFfeWexf1Pi6E1U6SnG4DFoZg9cEDp9sMcaQy2k",
  "key3": "5GE8xUQLJjRxPVkRBzpG3zTV3dvs3BZhcmiZ3T6tcAmzv931Z4AkAKtpE33h3e7vNHVRY9z1hcqBSoZSPM47AS5a",
  "key4": "ojH8Xts2ucHCVnBQsQYA1rS4iLsEVTNAdkrFVtvG7xTCcePNoap6WzBtdVPMMPkfeZig4saQW6VEZcjBBfQCbiU",
  "key5": "EZgUwbost3Zt95YLCyh3PdaPRHeodiNw1xHjNV37VacNKCwViREGr1U4ET63KkeVoBVJD99icBNL6P6q3r86TNL",
  "key6": "2p21aBscZmqqurz9WPRVPBh9g5GJTSoELc4FWp6nGuFpP5KVgpUJPyCYmPiHX7MUgD4X4usCUZL6PxsMmxQFtN6r",
  "key7": "3rgM3quLYwymxje56WgweDUXmJsMAwLwr1X7BoxPmfcyZ2LNVGit2fsf6htvPfz4bCncvmSCaRY6J8Zzeu5hEz78",
  "key8": "4GxToQpojSMj65EspDpsViyHqk7sxFNaGAGoh1XkgHCYYhh47aQdJMdnikFuydX2Htutmz8G2PtGU7mStWvCHyda",
  "key9": "4z8MPeGEF6RzL4XtWm6huLJPtyhKqJPGMhVmHFcKWrJrC6L3mUTbXJZ8BKkFo5PJicWTSpuY5tiqjXG5yrTQug1E",
  "key10": "tBe3PDjnGpzxTUoo2rc834RGFE5NNrhrNtRGxGdRsbPu9AatSrp1oaZQEir2LY2QgdxC1BZhokS1rMYGGTH2Vd1",
  "key11": "5DU92jusYV6RmPtBuvGNotxaZjC7Zz1UreoyYyXjA9u8wmiUC3qL4TuanWu9gtQS6ueBNQmVTAdWb7GPYkLkfGjJ",
  "key12": "33YR2NLThJ6TqSbWYSYpx6Min5poUcarpEsrVgx5ovcMkYAR9j16teX663PD4kj3fq1gpgeeK8oPpZkcWeAkQomX",
  "key13": "MDieMLG1hCP9JYaYEeUZwwt5YheH6ihxH3sRhSHZtbuqNpUNfMrEo3kYAXbTFGMWxRmnynXwQxiTTV6D7ZyjRCu",
  "key14": "5KpqrxHVn7sykYWFwzYb9fab4FHsVUSLm7KKEQ1q6FWPDouK8jNDVxsKtGxGU8vLzB4bo2Cbv8v7uBiC5fbP4HHn",
  "key15": "51tkL4h1smW9y9tN2vNABfNWvYU1WU5F1XSx5wy8hVyXHfM6UJ11Xiji39gRgpehEVQosNi6z45H8EmLDHYokdAp",
  "key16": "33zXKa9iTtdtVFzYWz1AcBhJWYAjkUpKNH89aDTMoZ1RMi1yk9vpcjpksejbQc9jSfUzpGK8C2Y5nfEru3RUGaBa",
  "key17": "2FSx6UTWs7dWWrmtonpqWuD4cA2xJGnCJT6wfSpYxQ1NLmaUAap8hbtrXTtxAcbGoxcz2qddw6ojYHcSQEyjE6Q",
  "key18": "3yrdn5nrdLAMzmq3x26nXv86gCHHovhNUuonu72WErTGxsWmqbznRwQUg5QjopHPoM29c5oo59jwizh3GA8ynq3p",
  "key19": "867tsetioM2XzUAwgMU1xt94wFccLiBhUkk6HykpVuwNYAzBeprZrSck2FArowBT5TKgkRjkvVL9nUEE7Y4XvWr",
  "key20": "3VN7hyawExHDdvxex9UhrbV4QLUxdwjR8XfNryY1bKSZM6KesLoMayPjLB4SUmVabgQ3W74z21gkmkW7ENSSUheA",
  "key21": "2LrQQuXaGNga8LuffTE2wmFphAdxiynVipWzG4JJyfkFUKUMiMq9oQ8VJWmCJorM1EqvyZaB69a96kRW85irDYnW",
  "key22": "5y8bKMuGCTeStyP2aTKAarX8Vr9mEM61uMoMRUJWqgcX3So9fKamodi6dSYt2HGGFygtRh2hnmWRb9jvB9Sj1Q7Y",
  "key23": "2emB56Ume6x36GXYCFPTtQfvR6Lxxcm23HRjfVrU7Y9ABsB3JAU5oFYLEFBFHYpGFKqfrut9XCmJfDF36TNHF43Z",
  "key24": "62pU8E1URqmBDVjkDD6RW6aE9eFSadMFbjYRTzuefxQR21XmrNipcJdptGqD5tmzFNnRPJkvXhtA6P4TPCkLXtDW",
  "key25": "4SssW8hvZoyP5K1Zq7ZjZZEzHfvbGSc66GY9t3jyoVnSTb4m27D4SpAjw2GAKMcbNAfJ81yw8bPnu2GP9gnUjUVo"
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
