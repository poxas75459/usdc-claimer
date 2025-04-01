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
    "3LgDCM3LktWzHAGgGzeAszQB1D7sMRX7ox7pFRqxGkQV23TM5yB13W1WRVZFU2RdXWJ54dG8Dj6tP3M85zGrfKcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDJrTqVX8TZwYhVGpCgMzJyfDYc8RW4BJgKYLUxkbCfgqzva4bk6FsZttrY3hXb8999zAb7cXq9JJGEMMFXqr8P",
  "key1": "27cuaiQhPMGvVECkJkG5gyRcmjzkwjx5LUM2GZSFKdmztwoAfyyaMqTnMA7YCctxRohTKFy9ed7NFUtxEa8aKmh9",
  "key2": "4YnqSwr6nQzqy1Um4xZHdEmu4vq9Sf8naZ4u4XydJP91fssHPFqLGNsZmJyZeok52fncyfLwdmZLkkZcXajW39av",
  "key3": "2rPJTP9U5cQRLENg2oDwswZFTdZuQ3voTMquEqehfAFr7cVFDkSbZYAu6q1T6cjfFAyfKKPiHDbqzUp3E722MANp",
  "key4": "287RxLdivDAWLiGQfQ3jFWYtNhSsQqsGPFbcaPbqYrD76tKen7GpbutFEYKKnzdbtxCxzQ55VHdtMk642KETL2kL",
  "key5": "2xfUuhRprrQ2kS2ZWA98P3RdDdL6xFmt1XLjpbsPx5MAgWtK8fzvAFzu175BmRqEgAdwp9BE5ZJAvQxzJxmV7xDs",
  "key6": "2qLLntHWYto1Ph9h5K4oS8kQsGvsuKdZnPdK3mksoXb2Fn9fikKiuMaV4CSoGhCJxgo2Dga1WcufN8mYJprVkdb5",
  "key7": "3NDeUBj5oZ7hyNgfE4LRSizMg57jiF6RremzZmszNAzX39KvCS7rK7pp5T3Y3MKubKh1JTKrrunDS7Q6WjEpLzAj",
  "key8": "2oTA2VRrisLsZVynYNcwDT3x2gfL7bz18zHryYUrEvSvWqfjRRMjptsXkef818oDziDg4NyDeBnw9qwV8HehLSN1",
  "key9": "2ST68Eb3CtwaeWLAKZajoT6QzpyrZWnywnuvbmzoqqSrEg4QW67Z97DeUPuJp9Bd7vgSxhdqwJgYsTpKEGEQLrap",
  "key10": "5fbbh36PLWe8jydBnhMt4dKfWDVRvHv3xT8sMMaCXP4oAmgqkZondQ34FRksAeGG5dCuxFUe6JGZd7TRR3pH6qSs",
  "key11": "4DDXC8tpfugneD5Ln6QubBT4zDhbQVPCx1dHyK4UvfSKnmn7nccXNEzczeXB6h1ppyhNZYMq8bP4Uy9RCD9E8ZCe",
  "key12": "YfeUbPTPmTAoDVzYiXGVdY73ocgNC5ZYHg2VaYM1df6YeduzC7nVk1xEQZ37MroCirJHtmD4TVQtZMNCdSQqiGj",
  "key13": "3nFvefFzinnt5JPQkRc5UtsYKVwAoYGrNuiMPCZUVFNFKoYiYaPX12aimkYaGPabDYKnFAZGHNLCB5j1jedzEm8Z",
  "key14": "5H96twDrpC1bcqkPjhrBYRyNHt1HsFsGmprait6cYe3aZwbZmQANBUfa5tpTvYpvzXhyd2w67FWA5FiQ2emSNHz7",
  "key15": "2dCwAduDEStH3QFvQeNoetBkvzUHS4ft5e79R82GCzJpMxhDZsZKjrzpQv6FpxHBx6x69yBPtWjxiqkFjRX8jfdE",
  "key16": "29DJfAqpGhonjoAyBsT5UT3CGhHXBbsWN2LVkoKPDvt8jLQwrjCyc9MBTX9jXiyip6K8Rt8RW21gwD2UvWYuwLUb",
  "key17": "2NbLfVxUj6At1bN2Co7py73bps93wmuVJELmXBB6iFtkz6e9H4q545bqeLGLGBhc5t1VA5uoPsCLnsjuZ7etJ9pj",
  "key18": "3ydJ6DhSxFCRxoZZuQ8EG9JSk9VnHNMwi77EWxZHQztnP3Xu4xhQWLB9Kq65pdGbRqZXxkbKwcxb9pJWLqJZrzYq",
  "key19": "3fVJ4uSe9dGzgFUbmjHjmkuMNY5bVhRuDrFhUghgFbfGkS3H9ECq9BKAcfAdMcp7ZqEWtqF5VVcNLnNGpKBjYPcB",
  "key20": "4kd6Pm2p8ULKUantZPQt8U7TU95aUwUto8t6M9f2k13oaTBseYDwxxGH5Pht7LZLRiUaPTvTwVgaa11a1b7wqz7r",
  "key21": "5EnZL76R8kF1n8ydvtX3yY7TRsQ37oLK6ddZD1ceEPvZhHq4L52mZv1QSGidyV9hRg23aZS3BgkEXfkNg6RUBhuv",
  "key22": "5UstbB8QYs5h6vaehG3JXwPjgfUQ9MZhqgoyRa4XHJLEHpWYsE3Zbp82kgjKZW2z7mLwmpHPGh5kXgrt1QgRSAtm",
  "key23": "3f9pGSko1kLqJomi558SZ8CFT2FnK1EZW1V7UEuvA9Ei66P9CYk3RQ4EMtHU6XygVV2d8ssL7HeysDkVfMDhkNq6",
  "key24": "3tyHQGv3rNLQDUYWTprLsNTpPSy3GaWoGiezfyW888kkJvyQfpPtwnW8BGHkTSZr5r91wH6YiCWWLcDzJon7xvZL",
  "key25": "359PAxG4x4UdKd5CgMwvJee992rFDug9XhvXeji5W57ss9MwzbTek8T2JkQtG9wvTgMmpfVoxA2HfwHcpotWR3n3",
  "key26": "2NXESYTK8TWFkZNWcqq5Md5ZBcwow9gHSB4BYTDxpx8jCs5a5ivQahBkFj9r8AsFRSgYVnPw5DNEzpmoWv7adBm6",
  "key27": "49GVoUZBqDPoisHuJ5cSH5knCMMqVubm8bRBJfVsYKbmom7K6xQv5dJaBk4td8EEkE5zAebdFtoUVVexcPsnZsmu",
  "key28": "4zmBXWgJA3cuChCnW5aAMnk1KXdKjesXfzJ2vkCAF6yyuZhbGsk1rLoW553ZVPttx5EUHKtiTfMaFsqtNqwz1yxN",
  "key29": "EjYBKBE5xJm12mehNNhhdykXACXgV4ZCaFLNWNo1qNjHaSL2u3NN98si5sp6L6EcFpeK2sCDxxUMNPDAzA3VHg9",
  "key30": "2TtGNtcFbXnPWrF1c4g6c3zpw2VUBXqpe4Ch84qnF3gRTNH7EKp9JbTCkYdDxkhY3rRf5kTeaokFNRx8qu3BvYgz",
  "key31": "3aykh2GW3aM6MusP1YqMFrv8EderrbjkKpeHY3zAKGZTHmi8gY142xWKQ68YTUCfPUsYYn1NfLiPNtchAECvwgT2",
  "key32": "5baSQf6dtT929pfEQ6XwJ5kCGpBEF84VsXFhboCZxTHykTrwYpRHmVYzXpjBq2RtQ5hT1Yro6VCa1AdsrkAf681W",
  "key33": "3gdfbXXPBJaWJZhjyrqQKM9EXJLRi1kjy6TEvQCCbz513BFD7X3WK9TAgHipSXSkZ1eeNkgM7BtfJHpch7koJmNK",
  "key34": "2jVpwv8T6aHwLQB4PFjPwskLqAN2aKQPs2vHR6zQJwKkjvWAyYnFHJxX441fWG6K6rixTgXzEtPkSa3Hm25KSHiE"
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
