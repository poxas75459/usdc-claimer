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
    "5Z1snwkMccZ2QawuDM9tbUZQZtY6CNRxg2xFsKjLyK2JBsMBEQ8peQGZ7gKt21g9x4bGnmfrZaFs75JqzuqcTWiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcbEjxrf6wUTr727EXKUMUXLmAb8QKR9NWdSJkMLPoEip3qzH9FfMW8PteA7PVABJbrnqTRvLpYXLhgMExpTpMm",
  "key1": "5EAaFSfYSVHf7MDWsfQZn3YFn6fRZibZ919cMNpnp5XKpJkMwHigyb9uQW5uL3znXU4sy8WXrHaBDw999Kg1jHwm",
  "key2": "5BMtWZC3UweVQtMX35HGXr6hqBosRZdymtiEDanbY3LQ3uHqXak3mezrGfiut66pxYeKmx4XV6uj7eqkZ8PtMHwv",
  "key3": "3Ae3ziPYaa66rwYwGVm2ShAKfxhkJM7w4cJ7G5fJqLYfu2wtA1CVc1LdMRUEPNKJp1X2RE26hRzueqUaXkHCai7r",
  "key4": "2wVKowS7jv7tVro9wX6Jz1YoTMNZaTnGU1SQZo14QAKJ9QJHx1FnmnibXyuvUkZUA4s7CoNa522XukX8JqL12DoV",
  "key5": "5mvjoBH8wb5uHKDmLGSCQhNREwovCmhLfmzw2Vcr7mzYFD9Kc4iku99xcXbzPMdKiUzn8tQdPCRVC6ttG3EeCLk",
  "key6": "2hjwmaEPcAuJUfSCh8eVnwkM9ZocXj3ivPtHGZM6hXdcma8XUjUvunUxs6yqETJJBWD5W87ERJ31L6QD5gdCFjNs",
  "key7": "f7kXzgjpa85VpCWwUa3AoToyjrfZeo47GMnYGPyCkhCuyMYKpTz7TPtD4fAA4hi9CCRGmzMKvaDkDDVKmGGr7Pk",
  "key8": "zNpbftFu3Gpzexhan3wyroh78kzxKWEJTa2DfhFC3JaQVPUGusxVqvE7PZonbBeV4msuuFEWb9eHriSNsuSzDmR",
  "key9": "yCzPZfbj8ogTefqSahGxF3cPrz8DZAwgrcqjtinbx9Fb2RY7RAdSti4FgANrNaoWLXkqmC98XDmm92BWYZ6ZZ3W",
  "key10": "4cgFcVnPVQhZ4vwQmkaed6rxgBnzRB5Sh9BaFGnLfKSAjYHBR4Q4zoBquCBcPH9qZy2BiWMreWur5N61r9aNS6TH",
  "key11": "5TGKox5Mx5ujb9xejufSKzPzmCmqaJnyxEpXX3KttGVKTnQnwPP8TMJJMeYW4tXY5v6y6Enuv1XnGVRxBZHkdSyr",
  "key12": "5Fs7Kabwia46TfF1PwZCJxqYJ2uKE96ZVm1yXVa9T88trqoansMbrxXm8dRadrjCj1dUGbsBUjbFfLpNY8unwLWA",
  "key13": "45fjCceQzGT6jBQdrEPW87iPcoVdeKKysfB3ssfPiDQKWBUjCKYpYiijKAC1rYecBomqnogS1jC9K3BHAeAzqDxz",
  "key14": "5HQFFXuL5mzoknvfu3i5HR6nnFLTYnfKffcGzXe757yQ1r2RvWzPJDXEmVLYyna2qbVfqzxBbo3AmhbAfby4F4W7",
  "key15": "2fTaHVvHi5ikZtHNPh33deiyGqGZPMNFb47qHJk8LeYyfsUbLtNDGUsYBAZowuhiPTtC8jHKxJ6PBY8SrFYiMFKM",
  "key16": "3Pwcb8pbUtrM2wRjFU4PSr1VmPPLYDktmbXuk7xMgur3rypxDRzwn6CKK67SeqD6AgmotTcWb4wNFrMUoHmJEiHY",
  "key17": "LVzurY4R2SuKhugfgBJqxAZibaD8bX8g376pJrgw5x1JUxs5GuDb9Xyfcpw8zU3Xnkr3BuKt7NqHSXZX98vaLee",
  "key18": "32BjwLJrvKc43oSPnfjCkHCTdv2X6t5BMtesMhYzkeLHhjKGSP2ReLVw2HefmVBMjDEhKcN9auu7iTzgYrf37Fxa",
  "key19": "5aftMQ1NNNnshJPV4xBVTumVXDE8GV1PZgV61ceJEpaGEshDDHNDW5QZVnq3YMdGhEqDooCaPcpZn7tx7LDuf8f3",
  "key20": "4euzTtVXPrGRcvaSJNnHBXhsAR6GC74quaFRHDqiTwsSFCHDBcLzJHB5w1tUB2uEVnwEDos13Dd1scEGiUtvtRj9",
  "key21": "62DkBT7HLc9VNRdcXmXJCn29THNNByCvuaPFTbrCJp2ZaWrHsi11KwLzU7mL26rktaFHoRwsJKMrHK2ZVro8heuz",
  "key22": "2VjyiamnhjxYxJdSADXpGFaWgHcShrpFwYsfCoiuqyArXp9WWw2WhJuBvETixFNDosY2qXgYpVX26r6F2cdxsM3F",
  "key23": "4Ci8bD9LJ6cUaLV34LwWhYCyLgwsnZ5Q346y4kivXfFN1nBmokWkqxKzoowC9krti7ZWMD2hJuhATMFRr4hMn1oA",
  "key24": "HcCPzHRVubgHfVQpAeZtSvxjN7QmysvNZ9AZYYDP7Y5gtUaNRJZSSmLtUFzpqrLspTydS6GuBA2aMVkjq5yRFDc",
  "key25": "FaPmic9sBDMTvszvm9feh3VErCiBQpaJ5R9FSkdvWWUGcTSxcgurpmE6VWweBPrsBeyvHkNTGT26xdT9SPaGtfx",
  "key26": "46mVVa8PDVFHCcvX19GTPAZyN1hgzcJViruf3Rq9pQJEs852xediRw3Wq4UnyfS8wtKnerzi6iGYGoGbatpDCgDs",
  "key27": "25qRasigckwJ7RxVtXH1BTX3keQ4rDuZzGyXG9kkShQkRtERSYc7d2qzhfMdZK5npy5NsDyeLrZtYDv9hJjShhwo",
  "key28": "a5Tq4m2CxUSSDeXpWRdyCKvjttsM4np69SswZjV3hizCKo3A2GNtL7Emt6Vi9XLsiswQ3u4XeBQA8mWCH8wkkVW"
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
