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
    "4CWeJS8bsacXQMB2LTYLnbzZgwek7SoAV8frQmCuHSrwmHNfMrfWzU4aMBcp8cRyRAxLaLE7M1VhhLpjPey9hee3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Njo5iEz7DfZB8TrPQhAnzHT5f2eui8bH8taSDTCGZjZLmpLoRLVzTqSjpmDj3cit4EwQiXZwQEUGCbBs9uLhByc",
  "key1": "38JTWdYecEu3wd2VAGxASik5vL19MqqbvBgELUgTEmjR63s1GrKWFc8h2WJCWgPkvTuX6wGKYghKyT3hJARqaFpN",
  "key2": "qmLoG5WVeEpCje9bdZXUssUMUzNrG5kp94nvwVKR9grktbqZCWHbU3d4fUtyRpW1JZiDuCGX7s2DHu9JqJuuhbP",
  "key3": "5EGqQu8TW18Rb44Dr6HbPujaPGZnUpDfMe36cFo6ukU1jhnhYdLV3QkKkAArgc8sdXgFdJzNPNyYHfYwTBrWf26m",
  "key4": "CkxeCfGPmiFaqT2adyE2VmSaSHv3sx6ZEyd2n84rXDTuUmNpb3bQmoJGD28ydzrkEQw1NYVgSXe862duh497qAW",
  "key5": "5yaXKhaLB4BofBveXiuqvB93AU94Qv6tnAKdVyqz8HZLJqQxvwxuAAYvi2Qvy9GJF81oSTjsP9Bj8g5y982z59b5",
  "key6": "5XmtxpzSEVC7Kz1AbXtcbUm1d7U9VZwhauZtqksnGDQTJ8YjSh9BhCDcNCQCGT7c8x8YatqEuLD2GJpBvwyYsd6z",
  "key7": "4BiQsWRnutQtstuknN9xZeShKFTHEcRVUDdC9LJ21SGYpgJyQcHHgm1cyiauXTnCALAxZDGzEHoSGrXNXVuQsJYf",
  "key8": "3y3fbDdSZ1HD2y4SFtBAvsnPpMUXUizB1CaaSEhjp9mL6WqVLzo3PTbvx1cqjo6FvzrgdyutYGLu8ZKbn55ZcNi1",
  "key9": "5hxK2y7KZboBJE2EvyA8y1VWmi9N3nZsUVscrTxzob5wVcqLFGG56ZcgqtSXCKxBMUDFZEbSe3MuNp5DH13AnW4m",
  "key10": "4vNBBvayG8SegoVKm3PgVXg9vDW724w2tkoeqpe2ZRxtvYjrSBzZGtumRxvxsZVNRWHz1yTbRmpu3B6p5nHY8G8P",
  "key11": "5T1TzDsLVYZB2eonTHJAwpGh2pTMm67ktw6dndYom6NNzUFwffF8Z2vcwEHvhVACQY3doobXe8WM3tuD4Hrwkc16",
  "key12": "2kiufvXhxt9Ku4ASSocsXXP5Q3WhTB5N1EWg3EakpDdbKP49vc67gkuThaaUfM3Xcz9p2Yp1vKTd5wMm97Kjv2tL",
  "key13": "4t1sVSEfnxHXhveeZ3wzkb9eZaW4LDCEvkDfqVe6zYoJuoBjMbs2CpjRXMwkmXMFhiz7X2SDGXNtcPpHqWaQtHzY",
  "key14": "5v9R9oec3Z7FLo6GDdLjFVY97CHguMuV35VcqCKDqbF1mF4VK477DtMK6rM1BDQ69tgj7u23yxowUd1WXhuc4Yq6",
  "key15": "5fpfpLSKniBoWkMiEeyvukRBp7iEVaXZXwm8kF1FPp6ZnGRKocnfeMy3AdKqANBoQvkZwg2GE72uQWmrsEZFofFC",
  "key16": "4yGSUf74w3ydfMjNgais3hummJNbVdDK9M9D2CA4Ww9d9SH7cKJ9qBFnRFvMDeQH1wHRKcLWdgbp7jdRwdCqyezw",
  "key17": "5DCoF8aP8pr8bjH3bUhEMZCbnj8wbtkjmsrjoqB8uaUMwJD7ZzruJRjov7FBX2EQ8UHyPeEKzWA2VK1GeFCGf7sQ",
  "key18": "5EQWQHmrvLhVnZKttsGMxkvqKERqeKJa8gHfiGiUSgbTrDwaBioAJyCVK743m6u9D7LWHPeNy2HFsXRAizYuHc9g",
  "key19": "37Df7yoTuYoNuTzKTY6kbDJKVeJyWzaPyWXwcb85XXkYPfnDukwLDqUs3Yo82n4jGbjQW6hM9SRqqPGPpSwMNReW",
  "key20": "21s7q3JPLk9kRHLmpgDYiBPsdkNJLnKfKjt1VDi4u8Ce5jM53b6oqpe419LswMcBss3JENEBueygbY6dEvoHHkrk",
  "key21": "5e2VPq3c5hJDewx6Rp52MyJHm3HTAZHrNTVhgD2acnPSokMD9HLj3xmzzkECuShhZs21Vkkxtqt3fxZC1sLnbPS1",
  "key22": "3gFHttwp1oNDoJdv9JLEoaV3tUAbdChNo1cF7w3BfjTG5mjsvSMpy4tcUYXqwAAHHpWsfAeoFzFuYQdid3s54fuK",
  "key23": "5UXAZ5NS7s7YQ1xPoMosH9J9pGzGpf4T21w38hU12SvseawgAMdCBpKCQfAaWEqKauqv3a53S2bVEd4t6WdhNgk9",
  "key24": "kfVenqKJ7yQG5YiWE4MizVJcoavX1Cwb9uWUvSsFpcowCxWJv1ghHEzQPzuQ218hvCgsm3NSWo3WA3RLTBWzEJV",
  "key25": "45c2jyetNyRSJAT2CdsbKzLhv342eLF812gsUH3aDMxDTWtuse6uShGCkA7UsvbgwzfHAfDNWaaxh9tKj9cXervF",
  "key26": "2tyojTSZ9sv1N7W1L9Y8nTx4gCLeBrct5KXzZSXYnAVC27p1oxsNE4xFLaoWt41onGYRyoTUu3p6Yqju1NJwGm7m",
  "key27": "41kQctVt7L484mSxTyykPEx1oeDugDEt2BFPtuWzw8NoGwb6ALKuFg85wT95QTRddS1DCdknJzYo58u1kmTcc5rp",
  "key28": "5bmgAUmWY2bsrNZPjix3En9JuDxzjnyavZiygqzmnWw5LUwxEVVJtQiLNV48wks283V4M7y6bWuFtu7wMjr6G4Fj",
  "key29": "2bWLJTDd62FENLX1cm1Rs7Mo8b7N8XHpcsaH1H8QKgTUZmBc6TBU9ntFA1UGcBbu9VGLAn3metJzERjJiygZsA6W",
  "key30": "3uQPCFwwwZxRu97P5C26HXhqgE8XPFJJ2XisD3SBBmCPAGQQTJ1DezaJPRg4Lbm96zRdjR7dsscuguDNGizxwxBq",
  "key31": "2dYr874j9GHt3KcW2xzTwCiEiSTyLvRN7SyjZSmj2Z8JffX6STx6agqKeToMowJtH8YzXo5DWeNfjhCe3zQyJCoN",
  "key32": "YBDq7Xzs3vgceu3YyrD6nRVhXPWqBgKTDvHFCrwFEf4JE348gpn5ZsTnqebCYFptxzmxUUunYacBFV36sH4BRtD"
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
