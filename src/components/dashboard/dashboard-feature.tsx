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
    "4GRt55ZS8MHXBoTUr4uFvXLh6bfHxvaBAKcQhEKQo4rmw2GVqNGKMDuU22o3DMsJXkz9qwVzkbPp8rno6kLqM4sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJ64MiFDPbjLpLU5XfFXoC2AC1GdEpzZ363c1hmtCHoaYT1pW71rcaG9iAnNg9xoubpqYXnPFL9owwUYSLUhWzM",
  "key1": "39aKbE1gCwmBa3nDKpwtMFY1yvn3MLPnQyVEGDQvUwk6WoNmNwJCyDZuJkzeap25Bf7YgZmAjdukzJJcVUwox8VH",
  "key2": "3MiJMNA5erbojwbVXfKeFVRi2FiMcsGqdnqcDUjVfsBhEevE9FrB1wEDEFniPubvLeFarvGhSMDnUCJMs8RPkebE",
  "key3": "2z6WVt52tYC37kPDoyZk8iJ7Eh2H19gQEzTPieBfFyuGeb1mDFmQRg53XVk4w7sTnusSLAtZEAFV8T8c1gHfVHYq",
  "key4": "5EGnMj6dUvNTeYrSY5iPdGhnhToG3sHnEFqE55YjbX5Vc9UcZJuNHJgTJ66kTQk5Yycyvwnf6Lcu6KT9KR4LRRg",
  "key5": "9UKX9adx57gu7x1uYJLxSWwRbm5X36wcEnnFaAWF15H3CHnbFVrf6mjhUZKkG3wZFNTGjhYQ9syWzUfRZtaR7r4",
  "key6": "4W5Z6R1C3bMdLbtpjyuCJHpagQLwKYbAM3c6huJeDrCE9pxefNsmwkeNveTLbvotSp4Z38DjakZPu7yuGLEuqHAx",
  "key7": "2kzQPe8ftuR4LBnwGc8oG4aWy2TcoC7vSvRvhKDSye3vYvQndirocJWBR2MRM92hH3m7GYw8V4djdcgJksVxvQS8",
  "key8": "4Mgcz18UPxP4bRDuXnQK7zatRS1AmpAx8ZeidScKnKLTRioTaw1WfBx1YFJtXkBeoCLfR1DKronFyiGvn5WDxYxG",
  "key9": "59YXc6h2sY7A19VNLcWGN4Rogn3YAYYbXEeHs7nt4WH8q39XobweYMSkt4gTLDqQuYL21yN158PLP76JCEPsP27n",
  "key10": "32rsbpenXUd8yPN65pWsKWxG1mV1TVpqNhCcuWmNRjgcJC21uhT5PzykPTTNE1Bb8PVB4K7Aupo9KQD7XwW11Mh7",
  "key11": "5AmZGWDFU3738YUtVX3dni9BYsk1VNy7CgGbFhNbhdug4QUFQHSm7o43jSenPK43qFTXVzh6UM7NbjZTZjWvgC1d",
  "key12": "QpcNxc26uDta8JxuQ2MgToPUTyj6nx72XyXjt8QVP8LDSMzdBZhFcfrDp5XjMdGKqSnnYLQiqh3m3GWRPqfSBq3",
  "key13": "41cKMyyitQezEp33R7xy3ExFFSJxdAwmRuddbn2ncdVYsAMKGrsR6uL9hzkapUVXfLAunXoiwVvYegff674HtfvR",
  "key14": "jdxgjcRiGfzx8Gi7MX2jMb5jM6ZQnASV1F7emo4LmmyW3YnnUAjYzzwFQuFpkg6pTtdrXYgkcsQEhBCxGQmLb1S",
  "key15": "GDvKKFxa5A1ymUgtPQ1PeU6st15je8BATopJgYaCXwHVZ2DHtMSTcKLYyogZCAnrpAuGnZJ8Sw8joUNiMMH2cny",
  "key16": "4gYCjcVkJ6ymLJTh3nU2DtV97jUVzisnSRcZebLT2VDvqJSQj3ppDAea7iFxwr5okzWoHVsgcjYj3vxxnyGhaWRw",
  "key17": "4Gn1GZBgnkVCobVDJArbh6pkCTvTPPTcwYpShv33vJv2CvGLNNJA466CY257Fp64WxukwkNZjckksYuNrb9uG2E3",
  "key18": "38LxJf7r4u3SrdZD7i9pHny4HnTD64bNDHsiBe9GqQAgXJmmsgPWGXdYJbBJycNZxTGYfZHyzYdeh9hhACkeyhcm",
  "key19": "5GQXqW3TVuBQMwo1NcoD6dyecC97whrJ6xtv1BzWE4eDQ5JLiPxnK6sCn7gbMBUhkYpxWkyakMfheKn38k8Wte13",
  "key20": "BKyymEAm4HwWfWfHZ3gVuZycMHq5pmFrqzfoWFsVdvMUy5jGUhHzeNDGGPrAahUwrHvEwyDTYrRnG74XveVdGfK",
  "key21": "5z2MynLGW99Sj7fA6RmJcnvQPW4Ec9zYsiSZwQWrBNbfPVgYd37vL4SzzNoi1nrrr6gRduYh1oa9zYRf3QHNQgGA",
  "key22": "4QDMCHrXNkB2Ws6NGDkyhrwPia23PQUPhfYunnvR2YiP7QiBnLvzx92uBMcQhxRTvHf7f8GpVA9WqDpanyDdeK4G",
  "key23": "4ybTxg5YhbBVvkfNgqzFSWf8LjfTXCjRsy7FvUK7F9wz98DC8iEAYpNg5btmS1EP8p4DTKsyBkoNSMQ651eYtRrS",
  "key24": "5j59pCvwYmPqzaXfa5uTNujgfFPSFhiWZBzENJqbNmjSv8zV1c69iGRwGH6cdxbQyFN5Z8887e6APS1WV4oeiXH3",
  "key25": "5LeuCrg465JbL7b7NZZenVcgkofyznxgidCWJ1f3GjNDvDWV1e6VhVWPwCtTbtof4SnQRYUbh8HHhUwC23o9tpXm",
  "key26": "4XFUPYKLvRDibzLbsZZ714JwPHii13KicmE6KcAHAvxvXkT2XqtzKhXBVFwX3KQmSsHUzkuQLtQhbfvxCAaRsdFz"
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
