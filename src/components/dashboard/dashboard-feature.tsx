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
    "3kkuW34t2KvNuJCcHACtNt8F53aCJMzp1swJnobjoGnbat5tGhH9aM3sEbv6iU9ajbniaBgWXffr9APHyN3EqogF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vx5YvSN8kBC5382skvKTwJUyhVhuG2pu2uoeoHNe4VCoA2VyLfxjyaThnaMsvm7RCDSh3rCtShB3xFYgCFxJcdp",
  "key1": "3KLWZgDcxAxtedmZz7Ho7ata6pbyB8jGvzmydo4LY4Lv96hrtRTwoFYD27bap43VBrsGdTR6M4Fjk83fPVrSwjVC",
  "key2": "2JDdJwo364CbYBH5K7Bzwk7tuEgSJ3Dsqk7nyL1EfBDw8reiTk6mQ8BdDTdT5aTSxJK22R41ausGx6qE7qkbk3JB",
  "key3": "41WfJdJADVZWkfuwEbFmS99LCzYCEcNMN9byPhxibLDTxJZTX7ErsSnFxm2eEDAHuEmiHyMe8PuPvFiBHaNUAAkJ",
  "key4": "2mSooefEQ8exdfgnu65poeGwZJ2ZSR6azpC78aDgwvbzCkyLXseCpSTUjGxoX1oQYhRVkEEgryP1J31kWQ1ipvY6",
  "key5": "4uJ1LzdcpxX2PxC7Z3u99CWaDkyNGzPKU8wFatMNzEsy4fsVtiwwZr54SwsCxRmY55WZCnBCghJ1Uk47suquBvao",
  "key6": "58eU7YABcd6PptAK9kw313AaW59Lw9hvQa2ohdBBJ4KK5m5NmJKavXww5LMhDEnb9j2K6YVEqhkn9bKwFEGfNApb",
  "key7": "5DAuiA4pSY2WyznFVyHXt9M6BGPjoPPjS5eKyY5Pis2yybDk59R4hWqXHsBHXvQiHxHtHq3Q27j6YSjDh7Xf2yja",
  "key8": "pcrfV1QcnC8yNeJ4VRLZYZQZTWp1yKrMY1xtDVR9hF2kMrVedZCFUbtnspyP6wj9fdma6BCJb99MiWzS64JwNXk",
  "key9": "5DocYBxnTYwgfWrAZwRFxQng3VHJr13eZPyZgJmbVxdNTUQX2RaoXvY1zbgwRneECmiRfDxGoZs4AqrMKJCwz37Q",
  "key10": "5YMEQYYT8TBgdWEghjwmjygWHU6CPfyx95agK9tUr6rjwjJ7AVRMvNpQBbbGsZZMUZgaZFt9w21StMh7giwuoufj",
  "key11": "4rTtanZyBWy1FyXbokxH6DqCMvbZoBPB8ro4ALAUfBgh6BkomjLmtxDnNNdzuRgeKPw8bnwNkpAqoosukjoLHgHK",
  "key12": "Z9rP9uRejkMB5cq7QJS8CU3xV7gtmMqLSAXT9f88D7gBr1NYfc9ugAuRs6DNnXFa7JK8N6JFwChbA11TsfiALk9",
  "key13": "mQR7aDoPdicGbLRMDjGtJW5RB5eRVuezBYanmk5CXy78Q7m7tc1s35V9jJR3x8DE8QFqtHy98vSB8BjXNxSPcay",
  "key14": "2EmAmQLqa3q7xZhgY2ntnMx9EUjqqCnAg11GwqXUqRzQa25RdYKGdqAJGJ4oHbtdCHDpgTP4g3QaruLZkyb2qh2E",
  "key15": "4AjVAU5AiSH7wBucYjDM1iFdb4NPjYnvw8q4FZbYpPiDhhf73wG3UQZd6mKuhTUH2q4Fdtb3vxWF2wM7Qx7p4iNx",
  "key16": "FVhnhRQxY4Kx3ZrcDPCtiuzng28ZHrPgD93SM8quUFwgt4fkF3J6cwNvRnwtKm66VBHWfraduSanNSpXLpdGiK8",
  "key17": "dKJtpCJvtp1SC9Ssza65d2s81u46u37kexTqGmXLEGFkDwYPSop7Ba8pzjUwTwLUvFUveebzshmUiiMRd6p3nJp",
  "key18": "2oMxEhHDLm4XRCMzy6at7XyQTW8uWecEtKnBuot8Ue8ES19EqjmHMCBAJgFb9b2hUufsf3bupmMgW1ufKHY8hVGs",
  "key19": "5iqdFQpQybPz2weYEW9U82f96KuWWwjGVttaMDdhKssYGo2VoYegW2HLJnAzJb1ko7NRjDo8UJ8A8BZZ9ALf2XZJ",
  "key20": "RVjr8V1Xi5dChHt7VLfXDjP4fJ2qn9c37qqTNSYKuvpcScohHziGve28WZG1LsoVuyZVZU3t8H8Kp72eNxRGHyw",
  "key21": "4Aatj46DxGL5gnBTHKxE9VC1xS3eFYwtGR2jQbmr5AzMoGR7tRBhZF1T9tnpBXfAhVGRyx9uSJEYsi9B229FNK1M",
  "key22": "7m5eUS781VwNKAdn1FAdCwKfU6qQ9mtyMKPBR5LYdRnFcrUmVY8Raf7YKbdtNrssb5xM5rDbhb2zXx3MdthuaGF",
  "key23": "thLibZV8HKFZm1ST9eDUU65qvfQF2XtQ2VRFQeNqVadW8WqvxKm3dX7BpxvsqosCszMeUVEhNW6Utc6Y77WXRkB",
  "key24": "3uUr6p7qfRNDPkZsQaqjJ5eNYvFPqDTUxwfa88QLmTFqwSHbx5L5QvLnWk8Di6XnSheFihv55q2CMku5TWvgkZNT"
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
