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
    "4FzDuLpHhXifBWoGdDzXnMwfQqjSxeeuJ89saKw2SrZTSFLAhRZdurQ5pqmaFWzCbMtcXLgW6jMhLuiqnavTsxKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G9y3fMUi1ckhXbs6U6hkc4iQtn7pkv56GMNCdLsYaLQWP86iHyftKtzthhfzYKUCgFVBNrJrXVWA1DxKUAi1Kki",
  "key1": "5Zgy7kv1trNmKwWe6TWhyftGLxwFYg1UuKg1CJZcgZuT73GpK2c2Mpx9iZ5CFbeqCr1SxXmh36p3XtKVvzgFys4A",
  "key2": "4W9szT6kiBuzq7eTwdmK8MUrs37YKnLjA8yMeMtnSNjwFWKC62kCLPuocyn3mn8zJmSd4CeXWjPVaEjZ3g98z4fe",
  "key3": "gmTyTF7h8MtuqS3R1XiiKKHjs57CnfyPAUxQawQc7ZGd5dj8TdkYxPa6ph1jakuUx5neFpsq5Kf8vTVNsnrRLrz",
  "key4": "3hvKJsH2uCNYKjuweVWffK8kiiCkdXh9guFmYJzu5ZQi2thgh6Nsqu2mVR6a5icNQ1BaYhVK9ofm8AResjQBp4ER",
  "key5": "4rf81CHTimJ1rpuvex82wkBjaUKZqUNBwWzHr6bqvPysgN5xNmtnfyKemLhk1NYaoVUJhfbCY7vb53Fv3nEDFLBK",
  "key6": "4ZpqtQ3mXg4dmSwz7Ac1rbWus5myvDJcjeaobUM1eh25yZX6jKUpni5D7MZWHq9BnX8jScQYXojVS6avcXSNd83T",
  "key7": "2xVb5xLs7oenq6KADreD7W1JTPwyFR6N5h8DieHBx6QbdYuggU31KGJa67KH2TgPYhBc9GVgmuvuqJg1haoJ7AN9",
  "key8": "4GLRXgqkdxP1x979dR5zUZzwWwoArdeDTH63DURF6diGmaPCnKWx7tbG1zdhNz1w5X87t7nYK9wGaGRpiuzPDYSv",
  "key9": "3wd4aj6UTmjJzWESZm5svxtmg7XVi4CZnuwn1QmiW4vZiNibueDn7ec6f3J8qorw6FyWKPTxc7qw57ABs2EdwC5M",
  "key10": "4rwsqHFWPSbqvvLh5XQw9pbC4JgBnkSD3yTsRapq96WkAiuYhKE8cpkWecgso6KC8u7J3FCtFHu1VxG8KEKw6Wp6",
  "key11": "Dx9SKP9GyMxanFcV5ZDNStpfy7bFmmz2gnriqpKs7Pc5GFSALBYFYqBWDTwdpaAdufbPRNjawfPL64fT9kFr28r",
  "key12": "5pVAt7sE38XjJvbMW4JD1dfyb6AQqepDHVBKEvurZVJFD3tNamPs2YMRfonh4dw8AuBFjnpJ2SVxWAYb42whEewR",
  "key13": "63MrYqjCu8r5vGqViymGHm1Lo3tNZNepizaJUR7eKNpY2mmeMVV2GVyxsaHJCmThwDj957Y8vKuayf7wnLgQXD2U",
  "key14": "4ak34sQ1bCeUsbyCF7xJS6gnW6HmhE22jJ786yj3xfZtVu3MwqDXdkdtiy1EqJoJZM7o6xt7K7uNQwykPV2LaLg",
  "key15": "2oY8EormHRaBiXmTD9pAgTqD1DRt5GAzivqmyuQb1ciLJgFjQi3TXEP5764ya2gAZiTqMDSiajRVaW7qvncGZFVw",
  "key16": "2YVEbaVs8poqzyWgEtHRn7JNWsjq5bVRdxqWpHEommFkMV1Wu9Y2bN5JB4B4owYfSzTECr5NxJjUgGJgCxCTowMG",
  "key17": "3gsaw8VQdpc6jezRrgFfECYXwW1ka6tSzh6gcE1p5ocFnbid55im8gX33MHXe7Mhow9A2DQNbEkGBGHi9C3PTxLK",
  "key18": "2XckA64kXvu2iUMDeuHkiUuqz8UQ9znLjsy4KWmogZimUuFhgrZA4FXrPGSsm81r5yZbfHawo8W4LiznrUujaWaf",
  "key19": "5SrbFyFpkQV5qw76ooWzhfqNsESog1rUHf5L4mV9Dm8L6e2CVrXXcgw4i4gNWbYJ8gSaZiyBhi9E3ghfaPCr5bea",
  "key20": "2TdL8yWAjMoXKgUqftVbyCXVQ3EQE1ukQKDYAVbf1easzq2ac21WTVrJcCE7HhR99gfDgLUWdPgKTChJfsHu1xVP",
  "key21": "CXoPXeX6Gk4PDpiddy9ttAopkDL6eWqi3F6brnKXRnbS4xRdEySmUuT8u9ZUuK7DafWDGtaAXyin5R3M4mjgXxJ",
  "key22": "2V6QSGHwmhjSANRhSUBSUNsnY78jyG2nK25XK9HLXhYiDfdbPGifHKYBGazvirkRc9wwcNhRNAivKEHJZRmEKzjh",
  "key23": "KksWzWdhaKkqNQUyEUu4eBvCKRW2RVosVPEmzV2H8WtMku9K8PA64R298A2Nxwa4puJXcta2hQCtLg5QTounc2g",
  "key24": "53k3aWo2v3iMziE9crbhKtML8m7Ue6qMoZ7yKNrjGLG4EV2y3j2GLZTv47ioyffpBrz1eCBiVUCjRQxLeEAAmYUV",
  "key25": "51hXHhKnuC6wLVS4oVEJ1UZQa4KSJhsDQrLrcCBpSGTnM2SkHaLZy6KLRMFMkVPvFRe5u33YTxZPdhFVL7hupVvH"
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
