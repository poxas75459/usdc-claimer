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
    "3Ttu1BZ3ZiCvRQbUXP2CNK5Gam7389bLVEQ4wjub9yrabsRim47uZfZyuBXsMqA16gknuVNr63t611UKndR6DLju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dkj9YQtfC2BKjNU4xJXYVJoDbDwK98Cfgfecb4n1kFjsYZwyjJXWGY15Q14p9gzZcLmGmLJPVcoVRMgZpbWKN7P",
  "key1": "4yL5nJ8Toztq1pTinL8VH25cg6M3Viv8FwG7M3HR44kbNnCoDb8mPU5VfWbDxQK4JtSrN1VxjKETbCtG23EnQGUB",
  "key2": "2iB8ioQr5eHnxPCRTgvVk7o9pHWJD4GpEKVRRxrEkHLawf82MH4oTg7VZUzdJcuDYFvYj8JkhL7SdCr2dLY4mVxs",
  "key3": "59VygyzRnSJWmtg6GqLZ2hN91VUdomVBCVTsDdjcV6LGQaWBP9ztE2fV44uFMh3QorR9qG2KMdCx7Lc37tDhLu1L",
  "key4": "2rzaVhd3QaJEzmDNX4ar3na61FrLpeMR56SWD2EPQEsDTnrsakRB1YBV9vx2HEW9GXR5vbHYa6enCw8T7eDRJ3LG",
  "key5": "3fsmi461powuxQoKeVu1WszPUjsYxwKXuUR3rWuB8zm1CrNvAEmrZbWz9qUPR3GonLQxb69c5f4c5fRt2nY7s22m",
  "key6": "2hy4WNE5wgjQbmYutLNPWfst7KAaGmaJWj3L3BBFhswYKmMTvMtM3oU4Syd4KRYbCCTd8abrCr4Jc9TzYw6gyJnQ",
  "key7": "4oRZB3kd6pbeM3GsUSqDPfRjVDniemJVzEjSreZutyYAeLiQ4zPHaLhtB9Mknpr5PuW1VUEzqVoQVGuPoNKMzdCi",
  "key8": "2Fafb8pvjishwowYUiXcJKmFhzkNRNFQLAPuwDvZKDbzLWz5ZEuXRDFL6ppf2W8qpay133aEDBXsVPYufiMthnfa",
  "key9": "33YP1QCWYpewK7knvLtbUQwCcxbXxg4imYsXGpNuhxHWstKfLj79BZavSshjCD6vZZHLjRbVMumgxV5t2jWu2FPb",
  "key10": "3qiDGQ8Wu5QgD6BNVpZnJHyZvLTvDxLsvVmCuUqUReByvQsr6iw1ZMEzVS2J5YGgdQg1QSVYNVvLLZoaED8hg6xC",
  "key11": "5J5UXrp6TiQ4F4s2pSEGoMoM2GTzoqiVuwHtXoPe3K14EyV9zHHgCPFKb7AwYMcwoP2Ty7jgdmetkrG2DDTzR24U",
  "key12": "5fPqhLUJZp915ghCdLksnayRCBCfdWWFBUzw7wyZYpJ4ECR6p5vyCxsN3RkErQQt9kAiW4mBxQaCex482bjE3sJs",
  "key13": "4yf6sUWhktDwSKAtutL4WzoNmJp9C1iEuT5ZPWyktvUwNrGs9TDAyChYSKHCbTJBcEifaxZXTfLM5TMPTm1rNGg8",
  "key14": "37yVT8ubCo6okQhgeqwYzQKQeDpuqZbwbXAKue2oC9dJ1rnMoWyPJoE8ynZ2bjZGb8rcrTcqmnBnskJczoxSbSGo",
  "key15": "FHvUSB2W8YX6fbwLgiPPxg9febb9mtCXuJNf9UqCBk6VCxR38fha8UcW6pVo4fSwg14DNCEc39EwkrDZsbRdpjP",
  "key16": "vPb2zEYZsAvPD8uZBey5kmYhzPVgi9LpsPn2Ne6UeZJHHMj8S69aKV9f6j2s98v5pMJsA5B8XWwpzKzTSsGxATr",
  "key17": "5vKrLYTYxbJL3vkFJf141X4C9fJp8dP16wWmpiWA6f1rizBV26oq7HMt8ZBpSrTVRyZtKGkBvWpupnSiBheCGtya",
  "key18": "2UkD33j3gfofMW1vAMrmNmnmeFHFLheCyPEaFCqE6Vyj4DZ9kjwXSRRLsgoBo12L5sX3i9xQniyRoCyoJpvtqA1A",
  "key19": "5XFpXq69y7y7BVca8H6QC3Ec7fJey7d8vFattCf2uaqMhb5oYro9tery7Dv2AcEgKJzzV6rUgJwVH5TFxVqUAuNt",
  "key20": "2vLkqWwUzim2HPAvki7uP8KYkPnYhL1qagKnT4oH2FaVM3jKD6HsxKaXqSza2owsZW52q1LJwPwd4tcnG5oBkFi8",
  "key21": "3z8RKzUAHNMLCVvANKH8qNYesCTVEenVZ2Nbqv2R1CrhyD6ATH14Suzu7pZdECMES4qgnTU2Bp3My6EARMLEfZdH",
  "key22": "5xJGmg7gsM2JyE7f6nRtknmwiquGomi2uB6PuYhMDeBLoajLtCBHFADWwt4qDmMUZup3Xh7MKK3bris5WKvfyjyC",
  "key23": "dMsdfgVtX2aAf6Qg4tqfBuW3sRztP4zqLNzhQzmwiXhHRziqFT3kHNVK8xihuULCybFVXmKvRPgfCPwLatyjVWT",
  "key24": "2YQ4W1spfqPSar2PBiPsVGHjNxq6nfvo6zR18Q7SV3htXhamhEijGj29dK6YVSNx2ttxj9R5KCJzZKyJwrwgjoyU",
  "key25": "dAqV87KUWWK64DUw4Tpy1NVyiUwqjcnxUy8omSFTDtaH1hP27PLPQJCv8kVuvfdfisihAn3Pm9Q5jhnv2vMaBbj",
  "key26": "29mgKpQ8hWPgY5J1kHR6Vb72uv5eHDPzp7HLTPRua7JG1ckeHHU1A8iahhjUAY7ATLmsyzQeBAzfKANPgyvueM9d",
  "key27": "5yaPydDgTXqQpEm7CdubjNBQX7FszW6AMUWNQM1k1TyE45RqVtJLFqiKtS5uifoU2s39cnNWErsU44WrQFHJtiGW",
  "key28": "2xMeJxttH5wJCjnWyBhb2LgV3ppZidBnxQujJCQpc7zw3KwqUGB7sbccyr7kB7EfQZFTRhupmjFWj5S4DsSWr2SB"
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
