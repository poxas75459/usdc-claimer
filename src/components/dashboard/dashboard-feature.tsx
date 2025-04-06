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
    "g9NTPc8CJqz2KFbiPdZv3hJo9fHeBsnKD3nsZApatBFKkxC37fXwkAmdAJ6NMa7GHtwcDJV83pLPfBho3afUdB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "riErbPBD5j91JEYN6MuVLtP51Ph4tbg3V4xoc9yWZzKje3oDLjesYTSVEoxt8mUFiMpaoskGAfcmr94xa45x7Ya",
  "key1": "2qrX12uB1HSJBHubgdwvnsAVpYD3xG5xdaB3UkZ86Y54MA6b4NhH4rVpYFvw2oEiTLdm7NdgBRS1N1haxb5opoKa",
  "key2": "deQZZ3ZYLPeEhijJxokMbsQD7uz4zg6G46qF9YwitdKPaQi6TocL3g25fdGhHoW5ZH52RkRd4egnGDS5txMtAAw",
  "key3": "3mav5b5BzCmpmKqZDB4nvG6QUS6kAcd4KU643rvzSBA2RNeu45DHHW1d9AC33WQRHQiWKmC7UTUiXPCpQ7MuXvx5",
  "key4": "65DCg215fzPAK7CEt8yHsEShCQHrToXc69igdPZvpyyBNnF6hcVSVLo7RtCQA5pebZ724Z478U5eDY6fzu15Z6ta",
  "key5": "3f3o8P7TbQHEMA41CrubP2wC7wGipx8s8yuyjGbiUTgVdiszH3M9DZCV8fgJvdUT84RtMmfqy1oyx7fz81gk22tg",
  "key6": "6696JHqjkM3B9H7M4Xo6SmLvyrvNvxBNRrGMkSaBedGTkow48n98GR3uMtch52Aazxksikj3cFqKGpu31TAqz7F2",
  "key7": "53CTf976fUdtd9TUnvGatc54mUYhX1crUps5MzFbPgxU97hsu4M99ZCADcvdJzmAKnLVLKvEQJ4LpcDYNoMjVu4C",
  "key8": "4SLJZaSvMoKqPWgLAGatNDowqCaRz2mTCWrs6PkjNjLRaYnB7CSkeNCGWVfAUg9uf1ZtSuFDLYJMJbefjNWqFA7Q",
  "key9": "2jDgNPmf9BTRPTG3i3UgqZMmj1tmbvmE7cD2dNV7R6zQJay8pANZhQm5QdLHH4aYWV1as5rxjucQPHpurGHuRXSS",
  "key10": "2eezAnQnF8HNgv3qEfazRHD48RrDYwhk5SwFFv2y3sktGygZfZxZ8NvqDQLwJ2kzoLS8nQ4uk23M3h6tFd7w9qoy",
  "key11": "2b8Lufog23Y9JoyQbHmYjMr9J867UD3a7R4ek3XzCJajYd99Ss853L7YZCXn4vTP3UF72faGPDtXEQfG78xxhfgz",
  "key12": "558NCoXqKaXb8pqATMwisuNuwK9sKdib1ypSyQcFwjwXdVJixDZZQmak1SbzLQdr93aahQJkfoWZ1wpKqVsgBEHL",
  "key13": "36TzS9onWzDUEYjoPyx22JPPSREaDSMEQmeT9kAFXjtyPCfFcZMLfxMf3nPL3uhzbEyd9B9MCEAgwZuQqr1X6Jwb",
  "key14": "3JE2AhiKMxvyGRhkkQqKnYLpftHSfrQCyFgmfB7KYEAa8pLTKRhQgjSBfpm85cSUTqMptDP1e9FXa13Uq2SD1PZk",
  "key15": "3SBdXxxqaEQdNEucJiTXrjMYf8js6E9dSaRR8PpjkVshiFBzeGGwk82yGMRiKmuBmx9pv4oy3NaVicahhYdNoaU3",
  "key16": "5hEKRCVb4gnZYkgVACLJRoggHCZtXfpLZvyv3gb8mxrJMGMswhDcFPd4zz8gY6HZ3LRTB9KwQSGdztdDMdQXqnXk",
  "key17": "4T5S2GQrvxJecSnhE8zz7HnJu7WUTegwjBDTGt6i55m3ksZ3yNW6PDvuSiiKbZ18S5VHVeLtAHqn8sPtCQWb6N4u",
  "key18": "3PTJgRAzJxKcNRfSujKhcFr1vngKtXmbgJ9NGFkjKPrUfA7ZKP8shwhoCJ6953RyiLjp15MeWVRMWN8LfVLgGs1u",
  "key19": "5TmL638SbGQvotPDb87RbW1SPfy2npzeYqCmrc6kLe4hzA3ynmrwheBiZQmDvXfr9v88aWbKKeVCi3cqsvV7C9a8",
  "key20": "25jDv3gfB4Q9s6Jgvppvoeydr7ssXRvu7iSHedDKiAzp6WvdfhcMkKU6W35Q3nCurB3nVYZ46Q9ArVDAC8M55QPm",
  "key21": "ZvtuLHwp1h9PwHBU9Gw2iRuANMhZcwhusGvp8gurYU3DS2cJLUWBAfhnfzEZrXCuW2ZSjJUsMXtCFHwgL9Gs3Ys",
  "key22": "44rZM2J51YMVyvJYjoR7qMbfH8om6FggQP7kUduTrB12qB7LLqP1vbmjX2ixofHFxAb1EZV7dFCU8XXT4MhWATHt",
  "key23": "4hC171kLhXjjJELaiX4u24fZShwNAQJzSsYywkcjXaumEWSLm69VwBLdL83m6KYaGBH9dBSGrnxT4HRQy5P2AdJd",
  "key24": "56g2ZHS6Le5DkSy5NURgtZPf78CchzPjb4A1SDxQBDdhhTeum6jEukHrXRiYik6zTkRbrL7RtBpZkgiqpwKkJe2E",
  "key25": "3bqJ7NFWiBZE3Ruh2TUJXX8ryHcmNaR8TXRU9152sKkzKY6sVY19F8dUqURZ9pfzLwCk7gGwgCjYL5nfZRR1tv3D"
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
