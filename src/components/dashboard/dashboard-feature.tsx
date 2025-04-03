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
    "4cCdKydF63EBrpjfKEWw7na81t1Zb4dZKE7pL3CBD4kAtvHrZshr6JWWpaWsyRcv6te7RGQYpt5bnYAPLDk72q5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLiedaYTYgxywWTVCP9LSuE1SCKFcbPcdFXWaDL3aeKxe9djMKaVESYYgsHwxknZghuUP9wSX8ANvwUdcCWsbtt",
  "key1": "4UrrfyeJNGPqknfaGYXqR4boMuYqTzeA25R4RQsEGvExWCxhLf35ba8gEFFkat1gSCSdmNQkXTpvoMUGL4VBUaXg",
  "key2": "4Ev5HVyXemDytAK6YtAARqhjEk6VQM73FwoTHdRY9CdRojrCYD7kdU5VgX9beeJp4EQ4yX71bTYoRgQMEX76Bb4h",
  "key3": "5k4XKjL7gCV2V5wrirDsFsovh599KHe2A81b3Am4U2PfJXC9yuUDMasCJdNd1CHFqHps6faAy8W6MJZbMWdashe5",
  "key4": "3DyLQFSdhGgQTErBpk83mCyZZG17LKDCqg9dKwTi1k5vqSE7A6WLR3M2Fxuyts1avwHED53nzGwpDvDakqdnuhon",
  "key5": "4rrbUpK7qYCupX5fNFYxJWH3k5QGSogwnM6PXzccDwgSBbhaY85XDv28uxLphoT6W1Pf4iRjJxgLUFGSAMZpw9T3",
  "key6": "4HnfJCF5oAnubeP4oMiasVeFLA18ZEvdowZ2WF3MhkqyudNiAdpPHDc5hXQCdeBRQDoBV2CQT8j1LaDFUiNogUNQ",
  "key7": "2WcCVXvCva3KEiZ9SNQF2a6vCgFeDN4Noh3H6JozTmkb57jppdVbL8CpsoBLwUzPSsK7ygDCMw3Mj8mHTzNCMU1Q",
  "key8": "5QjfnGcGvs3ExY6w9gz8Q63WyDk6MAaQGuSbE1LCPzoeprUNT8PbvFQs3YBL6jZhKorFNeHLWiZNKJYR8sZoDY2r",
  "key9": "35XytWdk45d4AgtcfjJyDgU1cNtoRqoxx15biTKp58HrFyZwZPeiXvpGdLQ1SecMbvcbN8AK1oicaKX631qkmxbs",
  "key10": "3j6wG8K4BEa2rV33kFJsSkqxHfprHoksWFQ5gZ7eFezpMps7jS4gpMiWsb9eXXa8mKL1rySMsQrzTWJo1rc9CwMA",
  "key11": "4RFw9Bf1j8zcVv8yFXmsNW43jaxZB9LfTC4F7bMq6TNT9Bts9UAtT4MrhszHM3VCnskhsq9FFtjLrzktV264PgAf",
  "key12": "3gLnyBeNw941mt6PFAqQrKjjLXezZTn2tfykeWLjMXVBUfwpcaaUZriFUYF2aujHXcAD6RRxGfP6YzRDy8AGt486",
  "key13": "2ELVL7vuu3sX2rKbGFQG2WhN8cS7ywJGvvymD6Hh7PZxXKp4k4ecxhdYjBxTqLfyzsLfWhYW3HJAYmQqoQAJreAw",
  "key14": "4t5H6FmbJkqNGE1pnt1jzEYU3y62LqW1RXFeZ99SL427tJKsFwwZfNCDRe4rVB3Td5BtKgWDWevkFYUG4mmehXp9",
  "key15": "2Li6bic47dhuKS1niBRUTmscg2ZRV1u1N3j9Jzq7HM1iXo5FUKtV5U2UnX2jvjJbNePrRHUNszdyaXRVt451krxF",
  "key16": "4ERt3qx6Zo6LvLZaA5CrRHiyoPgoon9kDeF44zLpaewbDM6KhdbayGD4wtDCc5X54wBqPfBT8awfgE5HCDGryLGf",
  "key17": "61U39du1WVFjdncqXFK9Zg7L32appbvVyuHW8ixCW41PmK3YwJboZZBg6Wxefyf2RCo6cEFBpM9GCPUbKNeHu23J",
  "key18": "2oTc1y5cidXa1MLivRYEfuXx3hVnBa5FZnAUggu3zoD5rXbbkWdptLoEJESYuhbxBt84wRNt9CCNH667G1keAw6F",
  "key19": "ZGG6ifTfvd2zDdPLjsRqUZpEdDxKgR1NMZqUC9mwog6aCveBCZg8KjuC9bEHzZbB5reA11Uch5J6byY6y4uMgZT",
  "key20": "4YLQ4UHejpwCxgFXkAcmEH6Sgr5mVTaKZsXEwMKDG7Vu32biTR7ZWhDA8Nov3bzseRV9G1472C2oPEZhWhMxts2j",
  "key21": "7vrvfJn1dsVgicYnFj3ywasNViJgZZGUJj4UScUMaDpzrqwpcrjkdWype8YnqQnmVYxBi6ccKYwNHnkmV1RC8gj",
  "key22": "4TcKCtPPryujd8jtMxYbifjduHnD8nH25b2ND4zdsg55312dgRXYNYw2Kr1LwyFLmjEnaxNhDtxbrhpRoFhWR3RW",
  "key23": "289mcUzCvHQGNTR1DFF33H22RGsxc41Wev9vGPcKZge6BgBHmYoyoFc8KeTXw1swjqiu28kJenp6eSnKw3pECJiQ",
  "key24": "4qgzodb22nFU1oxfuuv58rKAp6aJ497pH8HSX766Uh5XMY7qLn5s7pJAb545pYhKWAPoj58Gk5jBnmZqoy9hze33",
  "key25": "4WamjzfUMrqLY5pBpNUTsCZRKkzAEJC4Ye5Z5v9VeGDpf3Qt6xYLcP6oJUrnZJekCd3MyCHLNtLxwSdmWfGsGTSF",
  "key26": "xyAWkM1PjxdrXeJ5pC5wgxP1mENk58ezLKH7akxuhX2EsPUzXGkdKaeVXdNVfT9Dyuw3vsBLWk6GbVN4PRjFgmQ",
  "key27": "2D3BeJFHtFDnhLPjEdkDEEn9jKJFXpNpFRH3To43JpsQTWBxSYFw1q82yL14mtxyPPMN8yrWna7ip742PTt6vTJ2",
  "key28": "2pCLjekoeiW5eyVMtMCS4zbQoaevQ9CniBMWXRCQf53CXw2ZAySM2RHiF7JypBpyYHZKdyrZx45rP8ua5z6zJU2x",
  "key29": "2dyQHfYhWPhDKZWLJE5D6eF7wWqkZ3eegFffmx6MJgZ3zyM5RmswkyK2YEbxN3peiCNLoVTkYxNvWfqHVnX3vMLd",
  "key30": "5FsQFaAZQVhQg6nbzHALp2CDBMJq9dWT5iJ217Gawi5Uqm1vgLS1nonnD2QUXk7CsiQYGLuRvQSCgFdz6fBZRBFu",
  "key31": "Y68q188SV4XD6umikfXTQfUyLioxFdTHSj6N9LEVFwMirNePrLGprLtYR9pGFb8ctnv4HRcasdV2iaVGaGZ163L",
  "key32": "2QP9Cki6nT81oC6w6Q2Qmw2fQtbozR7zmecFuxDdy9mcR2ASnfW53T6QTJ3UG8SMh1dN8F1EfTZUE9rJ24XMu5FG",
  "key33": "53PQ6hzHKgZMiRpB8yWf6qp4FSFJrM61dGMRn1cstogBTUHAiC4vWeUCWQLY5e8dVY9h1KsQK1iAyypxQvgZVfG6",
  "key34": "4WgfPdN1HJLdW96ZyrKoawEbCEAFFNBBtM8r6HRUXrB5h6qmJFdVp8mJk7e4FdAdpTYkx7oZiXbkmL9kJ4kqEQHh",
  "key35": "1Fbdd8QRTg48ckKEJXmvGk5zyxCwWgesFPYx6Ho5cdDLxDfgJ7Jarjrad7nwEwbPVffLtH3CbJfhQZpSM4eShmN",
  "key36": "24dayYKYprGRY9EZD91tQpkZqASGyM2QvqnfeHK5PWctWHffbavAaA7dHnkFj8opaaLDdzoSphg3JwTr876dEFsD",
  "key37": "2RUrA1FJPr1xYLFFTngXyuKAKpiPyw51ABjrsTw5ABStVyamcdA5zpvCe2vukVtyfWqAtiK8nQWcWjd8NZwjtGDW",
  "key38": "2s1MKf5pHRLpyVcJN4RK7jBfwQbZNGKMzhS7wcyMvwWTCKz22PVGoL9QAsoFHQSasrxCsfYcio7m12uLJ6SDQ5sW",
  "key39": "4FHq7iWh6DDthczXdQi9TFdJUNfWHGuhAk6DQKGdkfyz462coVHq4cHYeKs3wK9ro7j4atq5GR18fhYvjjBAq9GR",
  "key40": "4Z6Lt3mFoYMhudjon7mG1rf1b13wWLVPnuifL9FgL55Tn3sCf5iWmekvK1NSzYdxC2CxCaZrA1Ff2hDvkSoo3KDd"
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
