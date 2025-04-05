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
    "33vX1F9bMFVF2AQSemCoWF223EUZmBgd1qLaEjmR8QyVY1pkrjX6xc7qnNGvbWkggmrrG5NY77737qptjpeuUkXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ym5AKk8Rb7r5NLVv8NWHJiLxdhydeoF3UqHjKpMajop5XQkH1WFdDGQyRW41p9BLTwhwWxwjdFHt4m8USNzgJBv",
  "key1": "54HohLZr5PrjFx8VXeuJBTBJZSnazVuKdixyGRM1eVsMXozA1QDDoVphPpCdttTb5ra26UuXCm4GXFwFUw9eJxeL",
  "key2": "5EAekb1246wyuS9AkEBkbzVKqD4uPpvrs34WfFmuoWZoBG14QByGbREom1UMoSfzMH3fR45LpBsj7NT1dWmxZGf1",
  "key3": "4rHmt9x2TGF7AEy66EmBqUEguba4YPJiDQF2m2srJ8MT7pkbQnN5kJg9oD81n8dYENowCGshK21HMCMVsXhSFevj",
  "key4": "5quwuND9z1RnfowTpT7bE85gmGn5H2dmm9h7uauB3NRRHTb7VkXi5mW3BkPrjaQh3S3yVENZzRTs4hmfg7pzsX9Q",
  "key5": "5efAxH6f14FnyHXLenYQDsWpwCtRkAzvav7P5z52xs85fGckSsYjcngp573f7UHiQ3xDXhmDnUfErz88QSUN2yjL",
  "key6": "5ENn1iNtRFzA52VYUxWYQfCLzPpLhtyUtQvk9YNsHFzy4kSETjaCGPWRShJ576N3Tf7WCQEzaHQgkV9B8ozqNaLj",
  "key7": "4izVfxwEGLD7wfigJ9BovuPq3yqfoj4szNeypW7XnvMKRdVTKJXY6vWnbtv4cAts9Lvpo1skJrjzGoTAfgjmykHc",
  "key8": "63XrJoM7KtSPn9kNwJPEDQEonsJ2wSZijeTqhk15PzKqCTf94fJr33u3mAMZXPyiNjHZwBuPK33MoTLiySFhxnf9",
  "key9": "4K3iajUm6tDJfUJapUbQHWRvr1eLDrnhNkmLD18JG297k5Ye6ZfArpY1SN6rR5bP6w69ng4sB23enoWqXHiiRCrs",
  "key10": "64uJpnTXQfmjDkuEZSadzwF1VhGKovopqYMjB1qFiLgxPtv49N8t3fpvQpmAVJr6SFfwNYouaWxsvT8pQqrMUNgg",
  "key11": "5hnQWjFzkf8uFU1Gg4FMpbMiEj6q1ueBapC7HCJX5EZX6WnTYSM4BE7esjeCstSaiMchJo7pDh9Q2k2HwsLfoRcR",
  "key12": "37AR7U3YLvEjy1nYXnDzgKsSRChnyECMgEYSNukM16mDzF6CKUPh3CVPXkd89S9uDpbY3XCwmGYU9aMwdQir2Eej",
  "key13": "5vbC1RgrB4zEeQyA3Xk4e2knDVno79jGVmPJyiivZEqtciYbDy5cMF8pu3NP2hXmjj7dxZPaenEK9qdL3jAb1R7q",
  "key14": "3Pj3FZJUq33aeFmsWh6WgkRsXigiWtixtUg57qERWpe9ssopF1h6JkoMzXpf9fEHFubgjJrQcLP1o7Gqox6K433f",
  "key15": "3yQkJ4LqS9YazJZg9h33FiUwuXh5PA17X64b6fsb9dNFjyB3jGvVysceWXDFXi77T9AZLgZGRj8f56nEwqDUjbJd",
  "key16": "2PpXAvfMAoWSNgBVMj3ejBXZTw234nrQzECMmX57pjFWRAQmnvkbu1z1X6VK1F7EaDMYKvj7nNhLpV7B6JrShyQR",
  "key17": "4vWuLRt8zSYGp5kSx7sYDYcEkphDrcGXcAP3TG222k3vs4JnF2jXFaspJRsdwkHaKkCCbzibLsvLuViB74YniKLj",
  "key18": "5NhidqV1XtrKF6vadMgE7u614RsdtRLWTzdZUVyfjb1kHjoEjt6Vx3T6MKHMoaD59jhUXywdAY4iDvsG4fQCf4Vt",
  "key19": "j7iftXVbyvfPrgtzaG3cKSondP1QXPgUUv5qZ8x5KzJHmQbc3xJEZyayJD7VkBTGkF8aRujwReopUgYjdCWW44y",
  "key20": "4Q4fSmznnbm3QN7MExDfb7r8sQozmrZbvjLoNkQbP3BGBtEHUR19YDdUSxqruAdbdLBhiWhBn9UKECpYzh3MyNTj",
  "key21": "5tdrKKnNsaEEev8mK3BYGxNKvEPqhE5Wh1uThXbyjNQUUdBTtgFckn48cmzmBnZ7Ykp2xebvXgYCVJN22FbCvCGm",
  "key22": "3cqf5TDuub9atD9Q82zfySzrwGockVHfRGeHbiUeYRsJrQKLnvHusaVYfUUwJrazfmn5ymJ86n7XYj5YRjbKTdY4",
  "key23": "32pFbcXuaqjNqQHwaHK7T3hyrpXcDg5KD4XVEVJxK2zGC9obG7fUR46H8AHSzkpedYkfBjJmmL5tXRZb8iunhLPp",
  "key24": "iUPWswKD23SG1tbpjaRLK8cVuqykaXVRUvdUFwAxuy6mKfRixrCtVgE3R9LCFVrCqu9uFcrxY3di4bFW1kdG9s9",
  "key25": "2WSKQ81oQ4ukYitipFSGLts8QfXyyJakKmzh7Rip9CxqNMt39TNLouekGU2U1N8kAfsCDr5anFX6SR2EuAZcaqa8"
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
