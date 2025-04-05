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
    "3dMvofXmCJRiXXPW9sgBf4e3KMgQcCYXotad4c9w6V5UtASHMyAeEmDNBPwTxKjvuAhh58cLF5KJvCbq7nLKYU51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBZJdk3ZiYh17VMvh4D7mAD9xZhcpeeoCWLApRPYEMkLiTfjYTg35ZBRAkaG61ZqRUv6jMLPEaQ1YQwFvpEj1xf",
  "key1": "59KAy19qgME6E6x48dy6sA6Bao826uXf5WtzYGsMaRzRCiAhda4uKQn65GpZXVSW5Y8NdXCSvFBKxqrDUSgPWLN5",
  "key2": "4hERZan8WrmAU6CSPGQb8V3pyV6tonYJUxtSBhfdJFJdoPGGecMTytwZNyHmiXZxE8vdUqpMFzSKKKgZCxRxJJf9",
  "key3": "38Bx2hySmpEBd7VjYuQnhfKie38CXbN9DWv6zADjUxnUMChAeQ4s8UQ47YkN9SCykbxyaeHnCSSZcnU9t3RbVyzD",
  "key4": "5i43GgBz2xCurr9SFip34KERJEfZMAhyGdZyVdAmJsMA39ZserhQMkTdH4ssCbqrqgqHKm5SgHNrVt3ynfsgYswB",
  "key5": "3aibpXcZDLP6GyN77s7rVunZo3A53CESHGUxoqn1f17J5yRLXhPVHKQHjP2VTytAmUNSHYjVrLBUbcENF8nkLLcV",
  "key6": "4KkYFUbiJeKEPtieHgpgFwdKzdtPdUPpMKqiZefMffJm5cacmCbTf66RcUoWm3Su7ckVPnFgZeVvUYqqif84h79h",
  "key7": "N7nE8iH7nHiPidUCqJdpoFFi2XMsUWapCFxB86yx7VaP31z2r46BA36Gy6DPzEFW4PSY6RnXXC8esyAirP5wgfZ",
  "key8": "fVabeFVvC9QRjaodFNaXQpCmow8Nyy3youo2eCjpJyRQeT3GcxgDqujr7YhjpdaNpx1X7FbDpjxEEV1miRyFsW4",
  "key9": "HF7ECLEgFFbyT3K4z8YS97KoixY1didj6CNaXsgKYMViLr14sshh7MmLEPKzhTsah2oczsvmWyziZPVb9dDmRTJ",
  "key10": "5gVtwL4YUwhmE4dkHEYWJ2dPcZBCtDr74qSsVjjoVbg3YhLR7Rzb184DdXoKkxFitDMyrFAJebQVuU1L8QqSghnP",
  "key11": "2MaMjsRaL9ARpnRR2wF2nBRku3PpVq9k5uF3fvvmjvET2uzZU2M8GQmaouxpMKHfme2Uu4QRbkGFee1AYJVP2MR5",
  "key12": "2n92NMi7YwHpEfDrjXTZ4FBYTADaovjWSVwYAdsmhjEmXBtCijP193Mf6nHfjXDBC9EakiGW2TiF3yq92x6mTusN",
  "key13": "2msyxYDn81JEUCtXndpQcp34dBCU3WeD4DW2sXBDr4xCeE6kENxcZNq4hpxoewuCfhMkEqhN6EQje8qSWi5CWbDa",
  "key14": "44NbaYWbEjjngDoQc5xx19zp2yGXvrL5ZuM9QAfovZN8TCLsZqxM9NhtJ2rvoQys4ZQ5ffMWYZReeUgMXAepe8kZ",
  "key15": "4vNbZKqom8isDU3bV8zezxi7GmnbvfXT7FinpCY2pusJ5J3okzxF2v7A97YE4dxJrNjwcYPWBzMuesun2kgJUKot",
  "key16": "61qfqdA9U4crYjsik4obMeyTK7zJGdnhbKD4avYFxFRYbLGComvzzY52RgKaB8vDW6zP4CZQhjze2nWJNFbzWHGM",
  "key17": "2hqv4wqErTZ3nGmf1cxQ1o8Zhkufuys2xxvUb6HaP4q7L2YLUqfNqYC2mbhAiLEGNdN83vfCdizR9pDgW5jN1kmg",
  "key18": "4dB9eVT6xC7tWE2kWZmBmP4vH4u46EARRYmJKnA11xkgd12hjATvLZLHAD9ETJcFJpAvmd6giu9ksxeLpkoW1mLT",
  "key19": "2xEJ8TqKsZpg8ACHSfRGe2v3ushrzT8FAWxKwVz6JUv7EdiiRjL4zLN7891oogk7bUvM5itA6z88opsFME5CZGVD",
  "key20": "4pHXt1e1SZtui3vXzxHt1e38mSwaodwfu9hJ6btCts8h2HrGAQ7KeYZ4JbfBU9fqz1FrgxvNrWtGru2B76hhxQu6",
  "key21": "2eUnbNsdhDF7AdRTyaRQhCfcMnp5ne8U3kqiccx1bCXxxvvbQ7aHCdB3ZGYkZiGbFTh6JMT3wgPcteEh2o5Pdkia",
  "key22": "4EF2ufe2uJRiq8HxDhU36hAyCxn9pKUYHedhG735TWEZ6JFbz8vMzvQfjYRd6FD64MxjSB4L6hh28Kaio1xqqGWo",
  "key23": "3izZKqj6nLBGwXPxTrA2tsTgTBe6qTBatXsCnbSEZd1diYwB5aZuFMFpyERkJHNBVFST5guEy1Gr2hdXrf3Qqxmo",
  "key24": "3LUYwrUJhskVqfD24bwJmdK3yZ7mDDszVbPnCeFXpHkRJHsZ5A33y8r68LoGbe7kuGHUzS4szotP12bow68WgHHJ",
  "key25": "5pQnFvUrGgmQNmgM97h5WAFA4YEM3ZfWLgiBZ3yfCjtUHtz6Kve61h61nh9jHvc9SKzjWwfjPkmrXdCGm5r7rrJM",
  "key26": "2Qfw6rBceCGn4MmcaDoWHp9QQ7Hdh6LuFvTG77y7xNMKMUFKG2zGnSoJYfVC1RCrGQtRzohWURdsV7qk4wYv9722",
  "key27": "44Pyc84UAppad9vMWyv4YTcpZircdW9tmjFqWmxDMiWNteEQuipiYZxQ2fuU2KYd433aYpgcuHGqgMxmoq3FHhq7",
  "key28": "514W8CmEN4uq219MM5tw5ffk7wa2Ro5oqYPzPcoAA2REYs4VfGJeqppwndBbr5AyU3fikZxL37ShMboAqUEi1umA",
  "key29": "3t2dLPtTa5foqf4m771v1VMdJ6CxYir6xTUerghWgTSuU39UTYgyVytbTkxCeW5RvCh5PY8wHHBseL4jQCpkPSJC",
  "key30": "2sepWKuDjozqDv3tZ4h2d9SMkwbyBTgt1puzJ2XwYk7ruXGr78kxxhk6QfuWM9T8U1NobjQigusscCSnrHxaWDbZ",
  "key31": "65im6XtNzPsXPDzHsvLdSyLga3Zquu66PFtvHsdpCJSX1SAF5crnhtkoYkuQy2xb1zdo4yJSZVgNH7M1e9HEBiNA",
  "key32": "jqfjPPmWzXdVWtsHq7kCxL2Yo2r4PPF4mLNkVSqJobLuFbjSanmiwdViLqmdSnzBEcDmP4N54c2RLWukVXDSbqk"
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
