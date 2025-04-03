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
    "5ArB7jDT8hh2gJjsAgawBDQRTKgyVqEyMTanHdNkmbSHazKgkpH4jfL3JBMmsMcpbvfh8JAZMt1QzHQ8TSAePpdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "565d7dwHBQtBkLzRvEBk8mbxd1o17WZHMedAWzm9R5P3QATYMFwxrEWHeXb61wpS6G2hC4eb7Lsj5XU2zPbje7Ep",
  "key1": "2z11ksGFjJkEX5BpJdyafJToTEnjDjmP9LPExd1AwFo9KTFHP1nxi7cYp4RaiQk5R1uZPFFNftPA2BKQusddKjE5",
  "key2": "3ZTq3onGycBNuXihACpSQKwxq6T15YzXqnywYaGR77sHNGUDNDdvuzb14mYXtzL4yn2MziTi8QKkG2xpWcZqyisQ",
  "key3": "3zY1TCQTtJT3HtnhudA8LJ8QCf6XD8WU2eH1uLtGHnAzfAUJoND8SQFQC65r1vNXvG4ZpWP93PVWocqoKQtRpxz2",
  "key4": "4vA1oTSCyiJjdjdoXKm1gWCrAkmJyDpceYyAC94Q9BHPsjmZ4LKGQ53kTU7n98jdi5Yh9JSev3umAszFcWw7gJYK",
  "key5": "4hKQeVoVZDR4dSZg7TC8kdtAEnoNHv2S2DLBomboBdhLsj7qskTT1ueXrSZLUYmpe5NzKq1j72JavpHoVwUfvYxq",
  "key6": "4tJ8rBGJ69CSGsDVVX5eex4TD9U5kzPt1M835DQaSCxiegH8h8yZARQBHYTqWymV8FHcHZ93nJSXxpZkNSgWLyFV",
  "key7": "C6bSC9obuqpuJaWz1AzP2EZ9svkZfYXqNpccWA4ZdUSMRFV6SgdJHZ71h8zWB4Urp9Pumygf8jZctGRiEWnT36f",
  "key8": "2ToJXmdiNvQLBb3K9XmfKREZC4yr5y6pArdMSoyYTnCoGavappx4bTG8k82PDpe4g4NHCPVQh6qaUvDcFzhmUXav",
  "key9": "2z2KBXxYLeTyebyQCzX8RWmnDeQmrHzwGNZxJcKGWoqwv5bjdJeJtn825NRL9WAjR2i8r2bKcn8H5wt8anUibN8T",
  "key10": "2xJEUoPQabxra9KzN2qn2Urr1sgmhb63znWDQwVjiKZfaFqP1uF5BjedFQAE98XZs2SNz6wJsgTczf5PPVF2tHra",
  "key11": "r2Nv9fsJT1QkXujgQVVcFqTvmcVPyAb1588VsQYGvRsWT2ML48xPbcYVTgmxu2ynWAK5LkGDYwsJfajeX1PMgQV",
  "key12": "4GPkf4xAxpqmwrDkbg2bzdXviNLGDFHQ6RZBcS8v6A4XKbhGT6VhnZwaPt4ui2wKTnsqWqQgvXpGXXF3NaYEbwAZ",
  "key13": "3bcXGaXAdyHKDZFgPNQJ1nWNDX4nJhiR8bdPje3tzPjihJC49hMwzyb3x8SDDodnrTGeXAFZ8QDnXygYUZQUcEJG",
  "key14": "4jT6ZguGKajwFsm2fAmeJtrsrmNov66LRXYwL8o5LGC6HUbwg28BvvEwpcV3XnyQ3e8zTA5XcDkYvUewYxMvzQeJ",
  "key15": "PVTXzXm8Rinv7BXKRxCACeXop6ZfNacTG9B9bZYoWLpm2SVsAXyFYZNVNCPrSf3pSufucHBZbw56ig4GwNAEvLx",
  "key16": "2e1osDTFRXXds58Gxi13iQT5XLT8HFbQyyugtvyBvfMmB2Wo5VXMKxSTBjf8Xciuninn5a3HbqAjgUqQku9zX7Mc",
  "key17": "4b8NPrvUNub5iLeQXezxmkQ21iMNNLTXqMWR1ehJCT6YUmezjU8n6hmAHzgk91RbGv1ccTTQPAXMSmW4u6djYxf2",
  "key18": "65518SykQH6DLwrxbtmeJHC9YE5vD1d8PxSEjSBb975mCKuDcuKoZwjmwAVdMHENtNuMUcKVdSTDUmRZJEmR1KaZ",
  "key19": "59xiEboLbV3W13Jr8LwJKTTfL4iL2sh9iDG42APtrkGcUyuavQ4Syj6zLkstHYyM8vaR7HxPCHPfAJdk26LqbZ5e",
  "key20": "4c8uxAHShPnXv3TDEUhD4ZQLvTyjaHHRXw5AUJXDwagmpuZmrhZpox6hgLtjum1gfKzhjshNPUAK4B6tuGKxXZnS",
  "key21": "3bjjBn5e1zzkWh2sYPzm8Ua4tJohvcSoVMyLVkzDxdSSzGsNZLkMag36pAHMrqQJtHXPXcto7DjWPTVZ9V8s7Q5q",
  "key22": "3E2ZQKErB4Ky1KNyNnoScx6YcHpuQrHyGJGf1MegvropgFqbFe9bhEXgkatLMnfSiN6jDtEsRBByg44rsx4ftuv3",
  "key23": "4LJpLZgDtbRnkswDKzrQSKCKNGVxyLKUsbhwDX8D9WVQTv9ussAxy5ciBsbCkXw36q6A4yGMGhMuBf93ovbbtN8q",
  "key24": "5Ekwa8aCE2eE1NARGtsyt9UwdBScMenioK87FEnzXPCwaCv4RdefXRfwZ11UQgi9Xro27ZYKTc7fo7MaXghj96Vj"
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
