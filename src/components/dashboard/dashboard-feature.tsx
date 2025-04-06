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
    "3EBDWGNwpZGFZ56837wkpUZaBiB4eQsUdmXv1cKgrH8FQ7r3YKcNWpNk1kXUqQi7L4FBmFBTs7NLMXJSyRfEUZYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sv7c5gs8PETrPUngFVjzzoHEnfMNuhYMnbcbyR8rrEA24ZjmwShDUUQdtouTcp8HjfUuBGfuJ7xRmgMNbSat6fk",
  "key1": "g8EHQsdfYdDFgKPMuD2W3vjz2kL8DJhjTJC3zEn5Fnkjo9GBtfasvqYBSXy62apQMEYUuEtKNzMkaHrJjz2XKex",
  "key2": "Y19jDAwtXBXSLaYgrZPJ537T389z6fH3GarFn1tqwg6xeB9VmvBRnP5yU7NY9e4JDHH16aUDWFKENJYp6UrY6A4",
  "key3": "2kqgNkqwRCqDyK9pXLvAXpX7dUcP6oGVf7P1wYiKPJRqa5fCZWdjWKFGpYhsneHQ527UN9m4fJwjJ59RHReLh3y2",
  "key4": "4iiJDT5pXfCmwgfK5aokBwZ3SDTZ7FCumo4pKoqqWhZsyEY8bc8QftkFG9gjHcNNU4XyA7diejC43fGUinfXyDeW",
  "key5": "jHdyS9oUEbfkFFNDxiFni9Meetn2YCCEXXfUG2VzXthBT68rspfh5MNssnkJ3TU5E3stUPujA3hDJrTwoiDGEDS",
  "key6": "37HnAt2tEUSDZ9qHCr7v16yXKEpwpwnPC5JHdhkZuDkobD1N2SwzY8VSMdjh1wgadi5q9iuZf2qMLvQBM2wNbAx8",
  "key7": "4bsF5Wi9RTa6KfXs2xVG2QWx66evfYpizJd3FnGSAixEYPzWSnGWfhM2G46J1FQYUJTvr8ngH3GHEEK1fTCWxJYv",
  "key8": "3jEFLwsWcK2JMaGV3cxhCJS37Hevj4DuweXZF7CFif3r9VUVSyCZwdxZ2AZDSYrFQo1nTpgbVAxUU72CxsK9URbD",
  "key9": "67Y6EML8g9YjM5tditJV4VhvuQkXum4uW2eUGht1bcCMuwDY3gnJ6JYQJZpk6xmvQGEEHpRPWiLrhqtQdU1EeFY6",
  "key10": "34Tjhz6PisfTsrPko5RK4kKxiUz6GWoB2Wt4R4ty2TAr6e1MLZNWgeNvFpZavaGc3SqnXxHhYsmtUponQHVdgvpD",
  "key11": "AwcEveARAq8aBGRRUcmaG5EktbD1TJonLSof8y92XbtY8qiiPKidEQRnZxEMiejxiV6SfkGAmSto16oc2jAPSy1",
  "key12": "2yqRwK7HAGBpbDiS5p32p1geTCXMkb3zfuxHD2WPTdbyKdpnyduSdz2qWgqaJUJU3V8jN5SVLfo3QMtQwWfQxXgL",
  "key13": "5iRs5AR1uuQYRveEUKcpugvtQWKHi628EjqccHMWhoZTWnJ3uofiZoidJBYjV6Y4mNYX74Uv5ckCJjqYdmjWn2HR",
  "key14": "3aHVr2DkLvg6KwdG6Etx3xUyvYy9bmYFKSjmAokS8MSCYFKhdJ1qVmhAPKLvKDQcrQ2opHKXaw3xLTA6HWzgNraX",
  "key15": "5JzzQ3X3kpkXMs9egnK2fhwqRxSNp9cmfcdjetkKoGZEkHMFu1Q47uC3sbD6avviTFPCusmkRfbkvUHreX8vjCo6",
  "key16": "3SsMaJS3T42CGyaHmjXBzC87PzJcZQaDf8dSfhxUtkZMESm8L3BK9n8cn7dmS8EJKu9AU7zmUwgjnzZXr2HG1k9q",
  "key17": "5k2xNey7TReppbzEUjskYpcEZPgEjsrsnJ2ePX625uQ9YYfsZooRLXjh21nsUrGskTM9oyRaSgA4298SZVPot3d7",
  "key18": "auA7JYVhEKxge1Z1fVULq2ZrKy4Pz7fzVUaCQUcKmBM4S2JniV7jYrJGM8FLUReYs4Ry5Grt2nP6dkRWposQe2k",
  "key19": "5aMNiExmQt4dnEg9BYd9McCFpB8MzHZkSsgUuJn7hwva9zvSGkERiLcunsL3MdDbHxhM975t2GkU9HCyzbgyk4Pa",
  "key20": "5FibKpEuWJMkhFDd8dxgTF1B529ka6mWvWp1y51mH9Ga9NCZRJyKxdyVmXPVd2tHzv7byeKiqeyS77XvVPK1RRDy",
  "key21": "488V1tqcABcVFfAhC7gaKAe2VuRumkY3JebHy1VXqQ5tjU1wJViGFLZnejCVRV7Wex48mPLumg7KPbwTfK3sEjkn",
  "key22": "3SzDuLTY6XekPp9Rb7Dk9iGXuKzGdfWXCJ4dvrrsuxTnQadLPizxgSDm9CRwKcG3wLywDpscu653uZG9cpTbs3zW",
  "key23": "2txoqFqjD7haTLPWZ6BeZdD5uGa65axmYTaJjEMnDSEaKmkXMwJ5VFv3MYPUrEbgN1ePGkqDawBLrEyWjuMdvYLJ",
  "key24": "64PH1CpqvasdNTpew7yv7shSF2UsXsawiH6X2rgbBaimvGFQfzV5pkpoYEuaNCwbXqGxf2RHZc5aebixwdKCBc2U",
  "key25": "24aw1TQt5fC81xccZEQeQDDHK2A5BjrisBtMFF8aofLKgjoMQetEePmoUyVUQUX9syH5QMyScQBgRSy4j4MWaKzM",
  "key26": "3UfJpAKrWYQAKg6euzxDFW8xoyhcYz12THgUboVNso94FbNUr4fDCGTcFkM6EEdx3ouNgg135Uo41bprLZtkXMcp",
  "key27": "2YtTkgFT6GA8KqRo8vsFPbnqLk3bqxMBGVmhr46WuFTEfKZ6KLCGKbpeYSXKFLBki8gmcNQ9ZiD1NQWoGndAWZZ2",
  "key28": "5GjRo2LpfjdAu9e8RQxQ9Lk4qSQozXaCey6Fn4Gqn3TcGf1awdL9cdd5HpYpTTPMPLStXqeR8wx4s6Bco5MpTLWs",
  "key29": "2oHjwRrrsqvUU3fh1GgYSr9ksK7YY3UbKeSjNEC8wcWh1cGFxhqYbpMxSjG3Yj5xxCMCFBfsk37oJnFL2yJrLsdp",
  "key30": "4UwdyyK4JD49hT645xC3CxhVmADA2SZQhmNrydwy2vW7KQpJ66WothsVLuTotBqxU7NpeSBUYFSRpEsLgsiCa3eK"
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
