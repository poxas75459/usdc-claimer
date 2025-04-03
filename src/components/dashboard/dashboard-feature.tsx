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
    "5NoYSDWg56ANnEoskGgQkjXAJt4MnLwFSJ8QF5BPE4BSYHegehaaFKsgsNhpCCKCjFHSWLDtWgdXDMPmT1ebcMgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxc8aR1yhczbroJFticRzN6mvSnKXGCMRLWCyp7VK1svSgZDDBgyBtFW8euvr2amTbqzXfiJQd1AkJwmEWidBC2",
  "key1": "4bd687E6kj5HvEUq5B22gjSdiSDPaF9VqVcGzocT8vvFZrwj1mCVii4J77qXtWgU7aG1HE3PHmQKfRzoBFj44Kkj",
  "key2": "5d3qCbab6kQC7YnAuYuPRysBoL3CXw5Ld1w24ZgXuHBdM66uCCQoixiiQweMJ9uogqp9ZjGU2YYaJuVauWFsXjkv",
  "key3": "67Zs5rvVZMc8x2ZgHTHuSu4dVWDy6cnzVJn4hRbDW3Y9ofhfKhY2wXD65ZiXDJRB3vEW2TP2RzQJ7LAwQz4Ro8S7",
  "key4": "41SXWEZcrULvYqkvgE8JNuTfyNXnCD3PfxurePoknac8ksHUMpmSFH5QLsVHFaWbchk1kn4eniMkZJYicFvnRdHX",
  "key5": "46XgCQVadvgTV7j766B6zMAYfwjtHvYcPrzgcjfjDTT3sXTQewYJcriQciujT29aM5iZQiP9amSYs96MMr1mGr8M",
  "key6": "Z1wDW5mokwbcW4kXU5fn4r1Jn9VUnibky1979gTnAKN5sWXEiDSb8CUfkE5Bd1CSe92gEN6kWyYoVrhpHphQbuv",
  "key7": "2NRLWYeUcGoJrh8hqPJv1GtBPE26ZYUmZmVyGPQMLKgizQnR7ypeyD6zD6pXyfp8Mtiwt1qkrSUVK9dK5BXXxAER",
  "key8": "5J9bWG2B1fpkPDUNeNtchsKP2bdRP22629Rozsntjj7YbUJwCPg9fgwoTA9DxsbGWd6LoMWGLguMSYwP7Gt3XqKz",
  "key9": "3nB7ohrZNFiGr3Hsvv8Xs2AgKKfNykU9qjSV1ejwaHrKE6f82Ai1jpJfGwaxvN17rfHf5aYpsHp8xrfXkkFaJKYU",
  "key10": "5gqP9cFUT53V8TaSCYZQdEDawYsr4Ar6KHRrftgTUAJp9gF9G4p3EjkVcJVqS5FXXemRRmArf9zHkLt63FQNkDYg",
  "key11": "3qua8SuX2o2wffBFrYuRxXLYufhZkG8teg5MLri3ThTCV8AMbr1U5gBLVdf1HXC1S4NFvFAwYAMRYxTJGNq8j4Ga",
  "key12": "2QjihcRhpb8Xt69s7ENmJ38kZVACKEddj27hh2tD3C9TG7EceEEnK1ozaPnnBL6EFLyrcPTPFgwtSopvw2xTFtTu",
  "key13": "3gfpDFegvTZqcCVRaj1JMkYxTEuCiuq3Z2FZBHoXwEHtSCw14kqgjBZsBrQvbBQ7eokAGE94XMf9vGvyVAFNow9a",
  "key14": "4p3Nw2odW4TqGySry4bffJtyNHnZHPj8CvxLx3Lp4rLpxYnTNkf6cKJctK1vhGQpdax6DR3sSxTg346NrgaZW1F1",
  "key15": "5WSuC5ETTVimMd6jmFc8RVKeqjNBY5jPUi5p5Pf75hhA9NAC7tb5xPBmDPNNCGyimaX3fEWsJCS72hT97EpjQmum",
  "key16": "33Qr7HVRsWtWpssFzeDm58mUjxEuf4Hpjna7eH3JRU8v5dWcWt23hgn3z6wCaDKE7aWDXtKF38u7AL4aHFZXnmTn",
  "key17": "5CEoQ7yW5ZhzAuz8og9qt2k7xWviwUDDMwZaVFE9oNeN7BhZFwJx5wf8fk7z6xjU6bPjyx13y7wMMJ88SXXmHXXe",
  "key18": "3rbBKgzBNT9WowmAhW1C4Zpn7fq4NjEuUrc3jza4Cmq6LSE1RsHV6CkA9nyzgZ1ruRDJX89PMwhVKAVrUAGaREZx",
  "key19": "3tDsovSeZMJLS53ZjxDMirFrktPt3gjzr72btzDKSUXfGycnEf1qKAeSvmY6fb3HDkMmY2tRr7MogjYptvFPHsuc",
  "key20": "65TkrRG2hsEdE4VtjATghMaw1E9g5qHLAGsazuRERHTTxYaSWxs5Y2R53sv4XZV8dzbV4hLKu6YJvPAb35LYwAuZ",
  "key21": "mdsdA5zDgWxFRq1s34ahQuYXVgR1XzW65KMxUqMCGwkaU3GUUhyS8GjJpS5RdFaUMKv1u9Uhs1ihqpwABiaVTG2",
  "key22": "35U9faun5h7j45ieYNtPaE6myoHBBucBvVr85jbJtNrnjmrY7m52LdmFSAuPi8nCUent7gX9CaFkrZvLRz2C3Ru6",
  "key23": "Sk7dgK93FZphdBDxrytZTWuaTR5FduHQ6weo51idM1s9SkGX6hWAzrDysWZvkTG4jVMVLqTZVCj8xySZoUCqr2C",
  "key24": "4PMGtVewzy3HrzapF4xhAWRz1neK92GdvJVcac6wCDFJy113UgoteeuFdgDkjuDnrH5oShhA3hDCsEnnL6bc1qAU",
  "key25": "31cfCDsNo4qJDqCQHBavrZmjVzJeLfKLpPRiczY5zy32ZmgnFyGpsd5xtWhLXEJfFrpfJLERqdVcHnuEa6MWom9Z",
  "key26": "Rq746sCfiC2rQHxJCY3oNV2bXeJWt2quueWN5ZCqNvL6LENHkD9QHdvKtRFMp6bUdLp6pjXBH1QFSc86v7w5QGH",
  "key27": "3Y2hgQjZuKe4CXd7S7gujKSTcNxXQnpAsyCQNPqScCZoD4RCoUNQutqM9MsPwNPKBqZdCAaki1Xe8S5854ipuzFA",
  "key28": "3dbpX6KXAAvoUnJcfaRwjdm8kdLYL77hQ6xfkJ1R3UEyisnsrUwFi5M6dmgx1oCTWSnZjFzBoN2dBYK5q3keCMDM",
  "key29": "2d85wT7honeRyX8ikJruZFFeVNiEHc1QDKkiwD27AjpTpqc3Y7VbYm9Fs1NzRJ9CXUkhpVoCR516kdYnwsbkZVHe",
  "key30": "2wAJ8NR7P4e63sN9B8TJmTUzTFiDhSSyN4rBvHKDBmm6HvHFdSMiGJeT6FN3kBDRSRezy6senK67wqEkhcoxL22w",
  "key31": "49e5EVmtrW8w96q67RCVmgfQZcsLvbaLf7FdsDdPDKqTYTu41ndBwQmC2X1MEhLfPW3Lht4QstQrAdKKjnpTGjGL",
  "key32": "4aThMXLhgBnVXoQb8mSgB2k3eoQ4fWQzSjVj2uHca3c6A4hqqBGQQg4cuSfBJDzdVaWngnJHmFFG7g35FBjpYyUy"
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
