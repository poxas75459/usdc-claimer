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
    "27LK4Z8o1m8VpwhjZaWRpSs3u4srif4jZ3CwogK81RF1CMyMQgeQn84gmxp1RyeuxbuCeXVYnqoYbjBZ2XPxp5uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVquho8EZ2uNEqArVdUWmmLki9ifQ4pcfYm56BdMtvYJE44BnXHk4bgZiooui9wBejiNPjm5Syutd8ujN6JUiHL",
  "key1": "3MR57cgJq6GnEf6SWBZT2umz3oAtxU8a5W7RTorRmjCiUk9MCK67fEYGYiYE5bqSzNAFJvB3bz8U4gwT94ABP384",
  "key2": "5jnnduoK6vrZjEvrG9eQs3dKQj7v6EK1NV5it5ugT1224NyFTK9VnoM7njmPRviHMqZm7RyHhV5iUrRpt2tiRW43",
  "key3": "58W1Rvi3U5JbpcqCPbV5YQUJrWEk3iERmexchv6J2SJ1reTZruENpDoMuSY3MhFJc5TU1neqDk75V99askoV1V3o",
  "key4": "5D1LPb72XaVJtKgceVp3FTjnzpumgBtn3kBV2y4SxLNDqiJm1eeUCrb68FDg8GXLRqAHsiynvY4jfhc9hrujRjbp",
  "key5": "2hwrD9xpfc3Wk5rQr83RH4jBitzpjRMPJrcg39Xii4xX9TF59rBWrqMPruoj95z2FjNorXTdh15vXAz6rPJdv1iS",
  "key6": "64aqvc4fTXRy8RFLu6kDdht4MBENFM4sdPp9ZhwrNcsSNUHgU4MNukvrzpcaQpbJwLPXxAkCkTnkwWq7Wop7Xyvz",
  "key7": "3SQjv1JmiVHAwKLcwLxjoDUCNZfcuG8huiarvC4ZmVFMo7FZBceZei6SCozdQGGkJ59dah24uy7JNVU1tn2hbn13",
  "key8": "64zgCv27kAR3rNrtEWT9dZMD7CUN8PUiigDUBQKLP8bG4V4Nj9MPfZFGiz9cjZ1rsD36sWhw3hUjkmtyzCa6ZLV6",
  "key9": "dic1rDbkku76israQEGPd6sD1AQSSsq3fsrAEwiQxYEYXvqmFP7MQBW3Le2uPHDno8DPGsCfB7x4NEBaAc3gmtt",
  "key10": "35sCYgHhetAJZQNt3re4xymLjE9ogyvYLKJE15MuQUPaTYZQjmJHFS2sF9QdqszdCJCpZ42H6Yv5k6wTtcJxLM31",
  "key11": "2R96j9yM62ynASpk7aLsb76DsG8ELVuFmzBVDs1kTr7bqwvZ2Nj2PwbzhaR9eVpbawJYbXVUqymF4HwiXoVmJJbt",
  "key12": "wdZWqntfcDGgGG3Q9mMXx26wBUxiwy8LUd9yrP1RbyMcFx55YmY9Cn4CJxWAxpFGAXKSyBJf6ebrEMfSTsaNenC",
  "key13": "2iCmNPQhoigFwNnsdaNrUmgtbeC43Qbnc6TVYMdkXg5mgtPD4fauxH5gW7Q4mypHSvi2KcB9w5idPNVkepZ7GMQ3",
  "key14": "2LTSAtBqjgVTtibL1c12KKPKbWKi3MRviVPjuPuS76ADTFq7u3WfgDHxrqcH5SWSHRvXpSdvzoja7cdpbpceLW8w",
  "key15": "bGH7fQBUtKFYSVSDV5X4L5ZT52zigFNcUaMHpa7dUVvLqnKDPWDiKvuJfhPNPxCXasSDWDGYZEHRNbKEgnG5ftN",
  "key16": "4b8HPuXBg3iSypDzUnwgzThWQh4MyK3iYuhAdARimTZDBoUBLKnGfD4XLdisKnjb7BKVSCvsNmfVUkycQodS9Mwi",
  "key17": "YnLS8RirXJXW8PtUMzU5XCMj2ApekTa5E7hksHV8pnCwkVWZwh46ADvF6q5xapMDvF8Pnm7QDadZ5wHUKwhPqo3",
  "key18": "3dZeNyswioPbNCuuQLcxUQH479h7rBw96i7nDQ9aLYRaKXgRyBxauLPXoEcGtwEh2YsFn9zkpnUD5d3N6HzwfpxH",
  "key19": "3vWVdNqqggsc6ZHpBUj8RQwN5rDSTGHBow3AgbAbEbDfT9yAKnz37fMug4mmDUbqVTQRAJWzH6pweX7SUTcB5U6t",
  "key20": "5gsKQ9mfNvBaXZ8wzUgNwpCBziCaSi4pydRDL47uSEgYCXNEb9SYrk8H7LPoJckVfV9GBmgfK1Vdgk7U4BcchVvn",
  "key21": "59HYtr6utuEC4DTjmFCsE2PDcb2RJCXM7k81Wg3koqWAkZWacWz2JoCuPxk1MudPSqYsWtuwRcjE5nExnbNWeqR3",
  "key22": "QuRxFPj5rsaAGP3LcFh9zeK1dwKyrfyt4x9NbkF525Et9oDpAMaeghUZEyqxZfA7Z6gidd9bWRSjWZceGNfzpgp",
  "key23": "3ankKT9Z6Npe8XDVyQ8sUXemHkHXscjQCjN4L5grvhAjUYMCE25EErgJzSunyLh5mrtR2gU5WXgbcwuzmX225xNH",
  "key24": "HfNmHCmykzJmaScw1D1zvQyccNbGMLAoEVmuFpEofagktEv2CfV5r6Yd1jJaqin3145Wr6qihyDTqv8fmY8yMg2",
  "key25": "3MhpSmVL64deUd8gqbpzhnSkZhoBbZjdqJTH9DujNBcAjfzueCeSPKCRoq1BLM4x81hcwmtZtG5ynFfp5Ua4B3Jp",
  "key26": "Hc2du4wW1cY9QzCJz7XtWw5ZK6j7Ga5t4adAiQv287cY6BKKvvVPhg8p9nvihiLMfFbtA5fY2Xe2kzPWJaqq9FU",
  "key27": "2GEuX2Y5fvFbdRziLpuRZF2PD6mxnUC49gTr6VAMB3si8mf8sTZTyD88q1mUKRMBe25MZNEVGHexZFSMfi4jzBvU",
  "key28": "4skbsiu7Nn4mA4PfQYCmFhtv8j81vnsw8QD3VfBJwrZRUkiKzCXD9yWaTu12DfFA9maKt9dYiTchfnyWcb8erNsV",
  "key29": "54iMRQuPdVGYdYWTQ4pWBe1DyK7GQ6ZooKqabnBxSTidWaeYLoHYhJ6vsEZTYUeeFGFVT4mqqtvseQ5KtGLmMujH"
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
