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
    "48vVWbicVXUuPb65wQ8Mts8HaHzxtMhXfVY8Sn4NR5AeGGno2nbLeKJh5FWZ1Lw6FDbDLKate1sGxS2kByrKgZ9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W7RKEzUYXsQDHnfsCGv7Ae2G1eNhvDY9x3baqXmksAjpERQ2EA8aGssFMR3ePYgJptjfA4vCqURTFmk9BrgD5mb",
  "key1": "59yv8oTZJnPajDkQkr3ZizLeJR2LbZu1fMpzXXxCuFZYWa7xMrLbUhqb6XiiensiR6g5qMcq6DTgvnMWZxP9quS8",
  "key2": "aScCLpNY2cjVdJKfi1B44ma7hef4ccbPY2Agh58uPb4X5Nbyh37DnZC89CW1jnAYovktzsrs6dTLxJnTZCjwFi7",
  "key3": "2iWB19DQNQFWWj81yqXTE7GSyEGDp8GjxEc5Ct2JKcdwUvk771gs3d5voNS8tSmfUT32cJBugy7Xy4sZr6QHojeH",
  "key4": "2nrE1SaSc6T57uN1b5DLevpR3P13j5RBeL13d94jnhE5wGmF8aDNT2FQmFFSQmD9iPDzEcv9BiWEytUcM8hhFvTY",
  "key5": "4bPmXPv5YpEtUH9QvcZJNRms3nAHgyzpciJTgEE8LSppifuLe4yKusmKroZgJXqaQw5VcA8U3bEhJPN3mtsYNEQ3",
  "key6": "5U5Pu5jzHGDJS4LC4d44idh31o5TWX8NotpWD3oc5F7yrY1yZPTumA4cpGPp5ArWSbR59b9SdhdhtkXsCmHGsm5V",
  "key7": "5ndT91JGwK7wLaXkzsrGYRLz9Kxo4pEvn3sPMqfMTjuNGDHuMRHgbsTbNCZhutLh4rvMg7CSKKrnmb75p2bLgNRL",
  "key8": "UmTDq5X6U1kdMiTJAePk6YqaB5mSEuTwG1J3sCUSWXEmrZXAEBSdDN82snt53o1J8bjGKGM1BAfYy4EseLiQGXy",
  "key9": "2F2sCujPHD3rVrMrj95P2RsJa5cWxEpwdi8tb1JXK7iS7xBcb7W9DNH3LC16L8AQjAqgDxkxEG2Dq169GyRwFTbX",
  "key10": "8fCywgbGfRVmSmLKx2y7s6eCGx3zCqzU9P67UKH4yuyjFjxQ83TuLf2fqGPRe3zjqkysqqh2ejdAJibiefmnN3p",
  "key11": "3ApGFPwdjjZaBo2kw81VzShKYmnRCmTYggBUDzRRuvR1TBwJAmWJHaT1orva6s3vrRUDzdnR8v4pN4CEmPYt3Cfw",
  "key12": "5zgUZHdhf7caGJnogS8cKk6haJq3VSE7H9pRiGP3teXVHRbDFWczojqeM2hVXnYYnDtUHtFbcx4c8M82286BaSPL",
  "key13": "2hUVXjkCumKNe1NJY732CG9CAh6syMuGnTtJBvBVyPo93aXh3vcb8XkJAHZM4xhzEVzCxgSDEc3hhRtd2y8TUhqr",
  "key14": "3sHTeJQa4dctV2QAf5NCrsfD1F6r3L6bRwsXDcA8EhYduHTqL4dr6JotzuYCrWVtzMGHhbJcPKs7uR2pEZxKtbU6",
  "key15": "5JffMzWmiNEREgphk6t435tpYwDY6CpWCjovm355Lu83zCZAFmytAf3EZg7DuRTv7MSj6qYCueB9HHkjEeWFPwmK",
  "key16": "2fY5NwQrk2NEpMBqPAE6V3yC6ad9MFQmn3an5FKu5kQ8XiGgVLp2D5Gjon7onTLyb8q4dHxRpDUnqRiqSYN27D6c",
  "key17": "5655qVGNtR65pWPFzngbcctZVXHE3HZuVFWLfbdEjV3BStvA4qWsiNDfDJLJmudQh4Y5d9UA2UyR6592id7RX61",
  "key18": "5nV6mC2ZSfPmu1MAR2zugBfDMB3XFeoBqRg9rTttkPCqUWr4fnkjBBxbSM9BdzYyAUiz9g4T9HDQpaJCPBFcMLXG",
  "key19": "2LLSEBN8QakU9u7fJYUsGjztmM34G1XUcCwpvo1iScvxsUYmwEGbHSKVZ4sU2rRnhbpUnagzu41CMCrnXiH7rvWs",
  "key20": "4qWisqXvCeENvcy1PFYDKMwNpLzkDMiGNwRYfyBQ5GwjHJa7dZMBZ6K1g7eAFNjMA9bVvPY15LUUkEKvFFE8KWHe",
  "key21": "3gmVX4u1VTqN7dST7EF9ABzrVZvFxSuRkpTCga36HH7sZeiSjwHrpvuXTTgu5zEqwftbqBp9aYEQLBWbDPZchaWP",
  "key22": "5tg9nrMyV2kh9TFtqU6XeqzeJjpfG4mbvuEp5whpxv6HJ1KLiJcBoxGUsJPTpUUFJPMVp5TYfe4cWs39EoohqLaW",
  "key23": "5rMKfc7MLhziz3FZyAe8EhReWf1T6yhjzm8G1YsHPcf2u2f4k84amvYsug1W3LW2U5sb4LTJPmE2qfBRt6oHbHCW",
  "key24": "2upzvGFJymFaK5q3emLJbMAW4bHapZfhWLvY5uXqyUHcYM5c7bCvtct9ze8gbdC3NM1K8AibBDX6h3LF4Qqd6mKw",
  "key25": "2rdEepPENzgQUd2bLQwXsK5MWLcVS3km5NepEpstGJiYAXTGZ5dY7KFSMMJNRP8X1GjyoUHTmYHydhh8VxgTdPHg",
  "key26": "3r9M7DyeMrEjCMHJvZGcthVvWGTKEDHNPGWi57NMsx4cBG9MUsVoywv27CRRhL9v1z2m3LQZVf2gFY38yYdyGGk5",
  "key27": "3RrCrpqprGsmNJ8whfMotA5PqoTRYUeMA1b92xZwEy7GSCW2MMBjsx7CiuGp4CKj72MM2qD2V8GjF2pTv9GDu53n",
  "key28": "48gSH56bdivh9scziGG5KYdPkpEoYUD1QQoZVV6kRUHrp9jhPQ4ArrKxYB4Qqsg67epqq9NzXu7jgaYDbcw6MsQ",
  "key29": "2aYR3S6NJxn81avv7SVTGph1pNqMpUK2NTE3U4w45DHrgRHdpphXLKKGJaU65YYKZgSp7ZBPTei1bdKLqe8tCJgK",
  "key30": "5syvXTmKnzZSVh1zMzy4gVoWzGLmyw7t3wWwGRzc7Lh9r8SRAHdiGZuWXviq56F2bKNzRcKw1PoJx3eCZfFaKobn"
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
