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
    "4WgKMgHKR5FPxioUKZ8rSuu7bnDDy2qPpYRBHMdnt1wBgy1TGgLrBboTQw1a7EBNWrupGSqhNLzGcBW5G97hrmh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ibk3CvFwKs6b6vSmZrLV4xQN5xZUTUgUnPDvHKWUdQGN2o7bt4Yb6yS1XxLC9rYrNDH8bwUqNoyrP4WnoVHQRQ",
  "key1": "56h6jDuatbX567CM1iC783SLy1pJsayQZcmW57zhM8swSdBPbDpyvCZAzQ7UEwQuhR32bHij1xLhZ78CCtDE4zYg",
  "key2": "3MQkcmYm18C412nzbHHogsLitpdGojGTFYqgezoibwpprwvw5SA7s5N2Aos5UyrnRsYW3gek9KTe3KSGS89tRWtH",
  "key3": "zzURZXz7MGah2c6s5ABtEN7uQHVgQdufLWKUnWHYtchwp7WRQmiFx3aaJPtuwTcK8M5U2pW4xq65pFpRkmYBYGt",
  "key4": "4sgnEJrjwpkUWGQmepoG8ye9vj8owuAE551LPgoXDJxKgfGLKJkU4fA8NemGksLDHH61v8HBu5X36mRrekHLfs1a",
  "key5": "47L5fDtDkcTABvnZiDfE9MDzYarEGcQv2XaVo1X4Z1gY88pg89wBwUP4ddizzAoDFZCugqhNzPjHs7beSj8QzawB",
  "key6": "4zex5ZBYePD7jNwHgGcRq7dgcxMPfRgLaZ9gS54GYH4XyT2srF9gQErSj81sqiqGhRRPLYPj37EWbanLoiAKgEqT",
  "key7": "QVadDZH37HpjDWE2M2dWYpVymK6wbhCgAsRaTjsFDV3C6FbKYPMywqNFe1nmqyZZ9LgkyaMDNYKUh4i1TtLHQx1",
  "key8": "4j3ckcrYKdyp21i6PiFYcgzfod9MzpwFuz5BE5GW56GnKh9jFH2av2msJUYKPa9AyJt71EA765VApcxeVFge68vw",
  "key9": "5imLHprBiUf2p6h3RQJkfQb7SypEpejy4R6iRpioYgKv1istA1PEHcpMLXJPmxNkcaauAoJQuHS57iiRWaKnbqiQ",
  "key10": "3gkEi6H6eaSv89rmb1ncmd5xTH3EeHtwPpkMj3GFmYxh3FZMg1dcZ3WpTmEvS1R1uwy9BkWMbznZAzCBHpFbxL4a",
  "key11": "3W8k4P958JiudXHzNCjFwpkYTRAmCxsjFPGfGzwwwzSHNTYHBgrUErQ8KNCkXWQEHUZQ1rvbnHzriy9RLsYthPsE",
  "key12": "5whciyD8ndn9bFhqux4Aj9zaebTysj1SwqA7HxBbTQDd1F5Bj29JhywHv5BXZu7MEhEhbPUsrkEwNxaQ8SjunSTr",
  "key13": "39N3KEbNB8KhtjzMBVygP3wF98NK4NJCXtgMBpsa3aGm5czecuqUfta24s4uHpvtiPDgsit6uD9J7oSXRbsDR5Hp",
  "key14": "5oSu74c8qMmBRBBc5Y7SYNBr3ap1uTRbsAbiKLRT5mbarZuezXssvxvaWDGDZCWWvWTgoqePReAWyVYKgEz5p7EN",
  "key15": "2kvujb33W976D9qoL6wta4ycew9rGvmD3v7ALoorHomaK3ox5WXKpciz3hPzF51ooZhtk3gY5JWeN333qNsh837G",
  "key16": "5dmYuAcRKqtF93L9qnENWep1xHjvcGBZwoufKKGCibatZQE9brvrD1dR32iUwwFZJ7NYda8CyMFbTfrPVBng7j8G",
  "key17": "NvxRGkAqbD5E2H7W64hT8vMe1b68G3Qjg1Gb5rBkDmSSra6PsS6LGGNmdmLZ2d1sJgF8Jze82uLPjEuZbmiWvvH",
  "key18": "8hSTiB5CUCPhEuwGz5YonujZMDrxsdowuK1nsPkPsw8KVJ1oE8Xgcmwm4PjFncy295hLQqVwpeYYGyAqJedPHRC",
  "key19": "2GhMqb3Ypr2KNHrnGiuu3fLsinjpxz9kCLwciYpaeyRn4KiGRE5LgBkMXE2ZNMYQiwb7Dg71XZfiY6gnB5BFuSC1",
  "key20": "5bfnhkPw5LrrmLJGy8rHoYko61ScQWJWtFkgGxMRoc4YmveoLSLaosPk68mgmDGNVd8i1nTqKkaQLs3bBuB2MSWy",
  "key21": "aEE11NWGpXtPvYjmJWiCMPYV9kejUD9RPSp6p8BQfYn1VzoyEbwPHcJdDxpJc9iJFh49tnt2kSuqjTM79YTUVX8",
  "key22": "2BsU5ki3oMgCdoPSkgm2aoqmuAhcVKT7g9kU2EWPozN84RZmhecmuRZyaYCMSWb15D915Ab6axYZnsDomxerasaH",
  "key23": "5tqFxEeMAXnXsfmbNqkTj9fCfHcf7qxsHEqeQrHL2fXu7KHxfdg2kYQ5mm4qcMNCrCDiZ1c5u57vkG9XnXSPWRzy",
  "key24": "2PcCHgn3xbgHdkpa72u2xio175Rm93ui6VuiK8AzK8oyFYRoZjjpVZw6QZipH8oc6Z3bpoTU7pzdssHEeFvHR8m9",
  "key25": "3YkVYhXWMGQuSxCr6PVxMe7T3a1SfzbMRps1HX8iNKVKKF7D3QtdHkvLTVx3pvfvunJtHDk4LmHUanPWQHoVJ7ZL"
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
