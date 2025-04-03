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
    "uvHr7fo1ZQfnLZ3qRZXv5dVybUDqw4DgVX341NR5cq4cxQHDfd28aTu2f6DgmrBEEEtEVMSGYzF8QA9Lmg4VpWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSUeJi8W68tsUc32mFkGwApPrJjKrGRsCaAGXbJSEqCUqiPHp3gJNYBpn9ZSYHiv9Bo54Wgvsr7RHvzF6QNBHwp",
  "key1": "iZ3M5xgSyh4Zb6uh57LAY7dZXdPMz1LGzabZtdUXdtn2J9N4BP1CeK5QHm9R7pHrDSwWpbTgRawGrXSMadaWrr6",
  "key2": "562HpaLX7498s2MFKYisvRVFM37eMLscsZvYH9w66wJBnZueQtwM4DqHuyk8t162idhvGroyPazkfUyeQPA6WgcC",
  "key3": "4MR9SLx3bC3ZyB73Bne7d6rTF9Vo539E7ULTe5Cn9AA5cdVVVFta5HB3WXvZixATrtN43PcJvkpDqGQtXBP7mjoU",
  "key4": "3tzFu2fEntofr1CWqQ6LL8dU5ZXzYSmQPTYPtHjqkzLv9KmLyrZ1N8TEH26K5ej4kP1hzrgv8AoC7icW9yGxn3KX",
  "key5": "3rhPLhJ927cWX79UHgqwS3jY39Q4LBsHEdEf3ZXTNiTEM7p97N62odN7hDvAWja2QJHcUwVvLSHmFReqx4dMfjMz",
  "key6": "5FYst9Xb2tkw2oWi3YxSo1XrE3ri276kwBaC3uWj4an29wGXXMyRF2R2yoDFURSowTftL4YiCZkUN9B8d3JBBPiu",
  "key7": "2XaieU43BduV3eR5Yu44PyviCbdvEqPWT2yKoqqCQUezTKF2P4BtUemqiuGbNneqcuv1FbNZLYxbQH8vL3f4mJy2",
  "key8": "HdBvMzeFESQfgZtPeY7kjygmXVVmwprWM5jvvAHahqCu2JiphLzNLHs7jg5qfi9u6aHcXTwzKp7XXJ9o3uDb1mn",
  "key9": "ge8f1siXw49TDozmqhJN5jb4S2oUxJ58vzSS9LrhXW5nN54janMtP7JvRKsED1xsMU2BFCLptKbdEv5WgDZyLwt",
  "key10": "31sD9oh9CgKFtn5G8sCJ1N95ukoXvsRNuzfUrwvc2kDy3Czf14in2gh3Wrdf9HtMdFC63KAK9LD83akXBXzRgJns",
  "key11": "2kroRn843tnx21FYqSPpTsXq9gBfCWXkgMinV3Q3gdMGumeKGzbYUbFzsbdN4fJaVumypDBLNQMrNvWucgRmF9QH",
  "key12": "YhthJxrbmDuEV5jbFpKSJRUVfvSmSukHc67tcySxARo7Q277xBHwMmcf6oTejZNSn1xvBmkQdr3tTc2pEYxRodN",
  "key13": "3RqGDLV7fhvbucL763PY58fm1kYcZdiYCf4eWHugwPW9vjiZyFVoxdtWAQxwazvvwnrSewyuiNDSuKF6GhvAW53h",
  "key14": "5S5dt1YQ6yR4M5TYqb3kc7MjSyaJ7kk3D8L2UAXxsVgo8VdtLDgFBz9WS6gNdHnGe7eYWWD2Yizdhhqxeu2opG39",
  "key15": "4R2DJ761wkoGsZqh5AyEH1voPi3DaTd67GNbWecprfzisYUc5ADzfaaburCo3EuTS5zmCJcL1VAT3vt5eaitYswc",
  "key16": "4WcGgKrBDazjZL3gpMxEBUbvFcEbjv8KCzN66wTiYfUC28UQcH9KMMoifJvKZ5y2wg1L8YkJbS5UtSFj9yGM5Fn",
  "key17": "3mNbvguQaDPH1df3XVaxr9uTAZpn12qacwFjB6KmnakLWosc6WNA6iCiQmuxvi6u1kzykXUyo5gfX4qnDaxqf294",
  "key18": "38xiSzAUXWw1mqrvJu7pdhkNzJEfPWrdfsAMxQmtSsUg6KhBtqrbHbizWQmM9FvyrHUYbqPUKpDd2kHaYgsLxjZf",
  "key19": "L6sGv2GNKgMSm1FA313BCzLE6uHxpYBmux63XzTjnRvFDsCNkHGM9CDyY62oXdAdm7bXYdgDLyH2a4MgL5G9RSU",
  "key20": "37yGR8PgBb2MrvDdsdFhYLYRWKH4AfA4wbGm9appzStQv2d9MiwJmipYGn3WUvqHHmqaqu8B3uZtgj2cmE53UwPL",
  "key21": "5obbe4xx4MdTju2gACmjd1ZcnRf4tPytweh3YaZBqKTef7gNj6mm7rBkFVa6r2ugAW9zoyyFYGmMbFgagjh3cuAM",
  "key22": "25BbKwQNW7qnSXYeqgwELwCvbNMnqYycwEFJzns8fGSWUCbycBBBuDYNc6oDeJcjBw9NxQK59KAqnoCwL333Dxgx",
  "key23": "51yY7SBoC8rUrYyUA2MmZF9p5iYaf5Atpki6wetyRMMCBzrjbAYB21nXSUf15GyEukt2GNMbfRv35e1rgNAsSVq3",
  "key24": "3kYno1C8d1kodhL8r7cKSYgTeeqeML24qerhinrYuBwZyhzCoTDMoh2PgfRmQFAx9KErTgFCqFaY2fwjnU85yQQE",
  "key25": "2qhistjaNnYcYxNAeFgCAZ6vNXAMvgZjyBLw5hBPpVDC8zaEcSBdZexageDecb7JoKJkPLBG3y6iJEHbPX1ZLCCe",
  "key26": "57vPa7RmH8LhHMAAsRenQNoeoVeLFWnanQM7Ks8LPfywZa8ca8QkEjTTZB2yzSmkhZP56ymD3EVLJnmqF3hnHsvv",
  "key27": "5Vpaaz7qE4bRbkd7k8P989w6PzXQkMJatSTc2FmJXpynmYysgkrEcuvq4VkBxdfziYWY5XBdNqpchYbrTzxHCjUa",
  "key28": "F61bu5uVdr8rXYqiue2A7zAEbKMcjiySMc6P6uzWS5M5QkZjNZbTWXUrVgww5NqMWxeikvWpAasP9WyDqEDWVe9",
  "key29": "KivDXF4RB7BaC6jbdr3iM9Yw3Dzhqddpt8rfqYKtrYXjexFJRAeYY84yDDY5Mr2TUncP3Umi46mLcVdeD8HE5B1",
  "key30": "4N4CgzH5RHrDFaarcQFCp7bhpim6kKTL6T1pQPtF3DQRB6HeVWAnUpWxgNvRywZXV3AVssr2y3F4WYnphcUftB1T",
  "key31": "3i3dedpqKnomssgpqdXoVJNmAZm5rL9hpA8PGNB95VofnroKSTiHH5BkgRyazNaDTnuAFKcxaXAUXd3XJiGvgEEe",
  "key32": "5axpVzsKUhiZuaTv6tSfV8r4VTcUoLFdLzd4dzgXNgyAWvceNXshuxnBrxim9N4NSp2arJ5oiCcJmdUxc8XkNdwG",
  "key33": "2sNgfHeyFdUkPR6ZkL2BqA8sdyE3NtUoo2X6rvJ3ANNmZEaB8S784PxTx5VV2BvNVRqct6cGbHH4i3mJzb4kcJ8V",
  "key34": "2foRbCzhqqpWbhYKLxgNrS5z6qJfBX5praNGRswCvrN2aMMzoVRDP1GsY22fxmhaL6ErWHiD71fKVtL78ass41FN",
  "key35": "4a4cUnay8PeJVmfT83rWXaE5AoQvCi6XNzCwmkXATp91K1y1nUYGpXWexxPuYyKcCqS888KrwE1EVvPTgUnyic5E",
  "key36": "2ZeRa7mxNwWEGFb8tAoWMpyPKKL8DZvS8PEjki8kgcoJhQ2XMGDtzv5sRGxfAhcRvWmMJUf4tUQ6cSmpwy7UKCur",
  "key37": "3w2QVdXLhpbhNbNrmcBiyTajFD1e4c6p3zATMjW8u7FHCzDsSq9hjtEcm8XYNhqXHLbYp6SiT5vhDZreFiaNZ8D8",
  "key38": "3aj3jbqzxVSnW8oBfzFEYUCT1cjdLzKnXRUm5bemKgsyMG5N1jXPpQtMcDXxxjxtj1TuSo7xr1PEYoQ86AXaZTS5",
  "key39": "zu8xVJXqHGeqRcV6S7ccUgU28Bhp2HJFMy9cTwiNiorz6pojWYvc7RV2ZKJ8jj2MC59irq1kCuvwQzwzLbC7BoR",
  "key40": "3rN2nLXm1DFA18war9XHUFqkSjamD6jeE3qaWriMqePtYdd4xxDYGPTv8gVLDZRTPrQ2GgQQmKFb44Fx6Gcj339T",
  "key41": "26hsnWLxF63f8oxFxdAkwhs99nhAsVJm4rVrRJB4baS7ESpp14N2hkRo5YG7icmkVp6V5owRktsqhD9vpazKQmc9"
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
