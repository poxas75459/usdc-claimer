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
    "2rRmbwnKM21FNWC9HzCgYggSM3jX2iSwdLkm1HnggdokGNw5f5ZrgjHF4cHLzS3zhvrpgC2B5vn3RShT9NgXK3r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45igm7kMzgg4e1pvyxz8THSgDrfz82e2KjHJ6AKU2dZnPTvX2iBNBV5JKYrh6jM19a9Px8L9ZQAtrPMTDMaLifC6",
  "key1": "2tJY8CmXN8ND6iQjR8HCzL7i4qjmXoj7UXqMiadsv26jCpMJ5P7XB4XQpz92LBiiRVASUJGBHVPif3nbz8Hruzp2",
  "key2": "5RjT1WdhcjqTHwjG1Q7Zx2T7acKy2vDj9J2FHDicUwxz5icghhorWMjUhoJtRJzcRzkDfRzvi6Zt7BJRxBhHynxw",
  "key3": "4TzNqyPQ8UR8UWNiD2jkknW3EGGcEi4TdvJgt5EfwadP2TLxJ5Zxq2tFR5HG5GXcr7NoX9MkXKQ8LmMViug9swD2",
  "key4": "4x72ubW6MVwBfbcQ478TTLmTkqeGa61SgQeAgxe1A7qAYJ8RgcqDVmRaAMiR8Jr9d93exi1yY6cX267czCFxKggU",
  "key5": "33WzQzXA4G25P3sA8zpAS5ohaHUxjapVcMFYWb6NL7GwzJVbMcLfDtFYxtm9ZvTBS8to3ZumTmt8XCQXt56BAWh",
  "key6": "4LsML53iRdFD5pfbNHA9zc266CrammndqUiF17godfrptp6zsoY3Ykh79wCp9Q4iFYSM52FuXRexzosi1HjaTRS8",
  "key7": "3VSS2SmFMjdeyE2C9QjTwwctYkAHQfYnk1vnWPLU5aRRiuaGSyg5oP3CsGqpB25M1Sv55tQPjs2vJjsjhzZyj1nw",
  "key8": "4uKoEToJZp1hDEumKzkri6DZKSzRMjbdqeKddiPTE6bcLTWr9SMcnhMnFBW5gcBcPqa6XFG7Ju49DuFqS4LbU5uh",
  "key9": "5KwDbnHmYM45KtzvkGskcqdGSqNPWKE7srW97Xuzmguik2xRYHChrnfyQd28z4D5o6mG8cvxEqAtJ9B9Y4HuTwGZ",
  "key10": "3Rm4PphK2TJeTps3XSc5dXjqZ441UPkbBCC84wMBvcayEJJZXhRh1XPZMbZkdgZX2JW3aDPS8mZX9YmhE6vfMtyJ",
  "key11": "N5KwKx6ne9A43LuYPvCv5PmndJFaT9dkofTTSAhyd5Sz6oRUbkL9wP1S6u3z4cWdC2XnT9uRZAKzfb9pvQfeDLq",
  "key12": "5Uz3KFeZurwmzso1Fj5RCZUr3qQfGFyusHK5HKLYKGciWsE3GUZT4eroRnwXA9RFGCBQK2tmG2ZPb9wXruK35jYC",
  "key13": "pnUyTPEkBniaykDBbx9zLNsrgtaxGHmHW8GWXZRBfMdUGU2bTzF7Y8d863XordysnKL4na4EnVSNhCuUrsvBeRj",
  "key14": "2ZHYyzKLEwSj97yyueUy9XdhSCZQnrD9wpDQXg9wJDuYynyqqHxbRU3879uLnXcHETvmLXcrQdFfjcrzXRJUPoFC",
  "key15": "4hEKpAfCndAuVz9VSZyqqvi7aZDcKv83Kg1FFGbvmuUxEZT8jmp9HuJA6tSpC5PFs9Qrt25TRLgiUmeyi19sYuAw",
  "key16": "5RpUt5k6axYk2zg3eis69ZjXxkjC7L6X9YK5VdfjJZDGYgo314LqqqiRwwnSL4Nb4Qghddkgsyb254nbjk6zQ3do",
  "key17": "3jySEuGZuBS1mdyrHmK28YSDQcpKbQzvJFjD8y3XFBDbG724C3nxXKekW6Yzjne4wxjgSgi3b35ZpMCBFH8FuCKA",
  "key18": "3wJoUm956bJUPUoenE8bR5Ffq6MQsPqPDq3gjFvMEgDNWAawZT9vRZJXNc6xuamMHwffsofLMN3PTKJv6F3drcHj",
  "key19": "i7y57LEFkjFhjEdRdLKZvmcFjx2fpVgqcK4NALNDRJEM8MZHRvrSQxzrBzhyoj1eoTz4oi3gA7oitNnRRFGuDop",
  "key20": "3vYYfFCAfATmUSUN4VnbvMUBLBfBarkUb8hgf5cbALBxeAuNNzxXGEz4jaSDMBfrjV7SRczar2v3AkLY8sXE3nj",
  "key21": "2QXWaan5RHkPrUXkDLrH2KgdtvW7sBCFZLwbBAoGjySGYBgsTBgyGmtbJAPadwyD8D5NXTuNFSSYF7DPTeBSHL1t",
  "key22": "3VxYdSj222TJiLfdZwi7iP3MAsK46pVBZMRnLT7rchzc9uLgiN4WGqnRyERecqvNkKAbxJ2Hc2aLu8oqWewUpRCg",
  "key23": "4C5vzwNnu94ckgVK6YP6FvoLjqmU7YmFviP6endEFKa6Db1NEft9NndgnsLmu4WrocHaL1haZGPb4vkLb3nVdJp3",
  "key24": "5yP1gv6svWYoGUG4gBT9BgrkcZAB34iwJ7wfgKXLJh3LnJV8yNavP3rSsp934EzXftd3xFZv7ohR2Qid92tr9iaa",
  "key25": "KancSg44bT8re4h3NRZEWcpaqcnV4XQzgc2HTGwALnt1izYwbKgJvpdHLUo46N12pppV6H8YahPqHWEufeMttrh",
  "key26": "3sw6KAjABRBU1JA9aGa9QwpheKCVSQnSNowPBy8owBYARhLUTcYbQQLxjMGgUvz1XdSjAmPmyEt8Fqrz9qJMdoyo",
  "key27": "3rCEftzTpreZbc3XDnK54psTHt2pQSYPq9RX9fmdVKBxUusMYZWgNEwmUjmDDA8S6u3sYLviStXMiiE7tMhA51qg",
  "key28": "5JAhSkya1p31rTsbEn1FdnWhALP75qhhm1egHW4L5S45gNeZwQN2H8xETL5gNxnctWZQyTawYpzXkQmev4MUg8zu",
  "key29": "5ALnn6Sq6cemrxnBNXbjRQLzo3HAGG9utm4rRWZEdBAFy9YtDSpHZ7U2atFN2kM3RyP7UCPJjwaPXQjUSAPgitXA",
  "key30": "GDni28qdsVwwgtAycLoCpuRhf8ba2beY1Ym56T63VheUJPzZqkiv1PpAqovRbGsKd3Goj6HJwfQywmJCsVAqFUj"
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
