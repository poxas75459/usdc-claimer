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
    "4EEnaUnnNsiLX7QCCqsHmuJ2onrxHMfxpMsYUkCDRNbi8zJGQCz4S6kWqPPMKbQf13RpK87CnX4ZG4KC9BiTuhjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lf3APncoVuv5HpGsFTmXq9E7mpTQVjTN1U4hbzErhyW7f9mFeg6Wi1dGbkXUNtWpDWZRWJZFuPftH8VpSFDCUji",
  "key1": "2vLMpJas1G4cyPKoexi7vWZGAfuBQ3vXH7tpDDvbRAtT1wyhZvw5XFFippfFuzk24gCQsWhsLJV7zchN37Qdw4F6",
  "key2": "kfog7xQDN2ee5zh4UN3zDZEXNrUfY2vhF47kv7xQYB5PomqTkF3cQm4K9NjDAhYh1cW81mKkH1C7AhKsQXDD5vx",
  "key3": "LQcqWnYTNWhaiapHL5SzcdHbLE8JSQWbdV97oMPNnWrXyapnhe9pvUtysuuui7dwNBVbc44TLK1cpw9Tt688rkR",
  "key4": "5uvnePLTJZRsupD1GtS3Sr8EfMzijexvkwPyUGu4GtqdcH394NjBdxe8dUVCue9ky8ZQoKcwBNUeKxM57Y3wgmVc",
  "key5": "2u7XobHPUsYP6NHvJMUBbj72Tn2E6d6Fw2rpYig4ty3WM2MdTJ3VZAAF56wU7NDRbUKPmjWPm6tPFDo3pP12rp9q",
  "key6": "ED6i8eJiwPtcfGRJdP7wuoRxQggqjk4Hi4zRUsMYRUyAshyj5mDGyFzXwFZJ72kL9fcWFgnbvRSxjwJ1Xeo75Wq",
  "key7": "5cPRoNN1hnsyhJJsEMcMZ5Viopkr2D2RZGbQqZc2Z1cw5TvjPyR9YTjzgFsAZTyTugQ7L3yekdSCuLEEkw8JfTFz",
  "key8": "2vYmZeCjF4Q1gdJNYES9rAy9jFp7F8DYWBKwhnaRLen6mQVJ9nxyCgjRPKiB4x6BZbEt38GUQ3TybWcM2UgLaRjJ",
  "key9": "4rG2VLyEhFEfMxgihTxvmFVZm9AtwyHeA95XnH5qKsKksJmdib88nvvwqEMsNNo1cpMFLCJhHXMtJjbXCh6jWi94",
  "key10": "3YLYn7ap4niDUEKvRScM2oUBJPx2LbPkQuEyFvEugr7Kof9bgMtZy6tkTknpAz1v5PX6zrwxG7Q6JqKWk6zsQenn",
  "key11": "3hPbbRwL1Lx4yCsQKN7xL8bPgEePxX9tWCTNmgj4X4bQXfYgRYNRDhE54BbFonCGtjfCrowCiDdiigcakt3UUCkg",
  "key12": "djbtYS923ciyqZL1HEiFP1UxjTXsJD8hkQXSxbaxSW6t4czMwTfHQj8T7E6tDePxdTKUnjA58dk3axg2ixxsXg9",
  "key13": "44j8QuE6FhVKZ7XSCqorgdJ5u4e3mr1Duouw9PfqcSjmuMc1kfFBXveZzWmLgTUZwJhnTkyU56mrjJrVZDumsynM",
  "key14": "3zRcuXtEhUSeMEWoLEbfCx18KNananANwNuFrDsfqp4LyBEoBexnqi9sjaTR7Gmcj3cJdommxVhoyqJidHM5VPUa",
  "key15": "2yriDyboACvUEBimZLBG3nNfVQLSbrWcNNEGgDxcASrnojrhpXCWHVmctGpLT5euY5Pd7NqqvpZASrWbGksKff87",
  "key16": "4xLKEhmiQzpFd2x4mrStCHZxQLKPjgBwUzPZuZnF5thTkfixqUBbrkGjg52QZp3jLT3UnDMZhb2TLQLCM9zD6Jm5",
  "key17": "4kkxbkDNh4mdiBqZdU1oH5vgqTot3uZKsyDpiYGugA4Q1iGkYfdzxK2kyahkz8YEq5bYzzpE94hhvFLGRiUttS6j",
  "key18": "Kcd7v8CoXED6mPjrNksoA9zYffz7XuE8tdymj36hDYgD3csU3j8EDirrJpynsPKbWwN96Fvn6oTZjzUvWdsmMC5",
  "key19": "25NejG6aKPahPeCZ15jTbbq1g2AJXKJAixQobatTRM8W2Gyn1sbMPDC2oGVzQj4GHwrT7bGtQPrmePRe6xTWAvco",
  "key20": "2sqLEreP8LqSJz1Ap1x4AKUuuGZV5LdFZxtRm4qvRMVFdnaJSRi6e2acGHdp6NzadhYjD7k7rDkJzWAbsvuNdhVe",
  "key21": "529gjBR4KfcPdUhyNRwgGrgaz7VRXqPaNXduzzFF267e6fAPUe4VQBMnni4oLNMGhXMjC4SK7nMq46wRpqy6AZM2",
  "key22": "8FHDaZ9US7dGVAxoF32nMaFzGSLqn8hE4yDFoyBLxmXVBf55oihFeUJBme3SL4PSCYMGJbjsdvjFjX8rrKRkrWu",
  "key23": "5PdFCMYLsNMELBycrZ8U42fZqskQsb5U4o2G7f8xSL4GJewkkPwGvzhZJoVGG1jUzCwk5yTnag22gW1b89N8C4mK",
  "key24": "64VUmTC6B1NN4bMH5FyFQRzvbEa4TCQyXzG1BAQcEBmVF9GZPSVCFafTRdUXEwUgD98928LhC9p3EXM5MUHQ8nFV",
  "key25": "4ZucMTqYZ6z5juanCHQXu3DyvFohedv7zUBQRVSaW8JjqXNrnm8AWkppXJC9qtLiwhqCmaAwU75e42mKyMYWhUWn",
  "key26": "rp2rZibMRxBaJ1UMk4Xa6PgUtfCMtWjzruvm4X4o6Gb83s4kCnrFgy4yxnnNUYWrass7v3f5awbbAv2TQYz9ZGc",
  "key27": "2hUYe53VYadXaYFtCcFf9NbALKQhF5u1AawCRBGwVNgGZdUQV32TKr2cKvcmSLasHJENbF8gL4cugU8myRtBPJAd",
  "key28": "4XGAapDagQ47opxGWRwPPbwhfkWfRbALjqYUZCCBwwDG8E7SAovT2ZCWNiUwhQG6EY4pPzS1peV4NMbRgVKXK1Au",
  "key29": "4GhPDv4EDdGnzjBkZ68BHJGzDAW5bNUGg9FCoaF48urat2iyRpaxRMas6zVGsYtU3SfhYVrg6FsXdsijpkGpZaFF",
  "key30": "4eSyQ2kc5as1VjmjkUwN65q15FzDs6tPhEBVaW8m7ZDcPdin6Qk8ZKiJnpHXD1JW2ZhgXNtcsHnQnN1qvs6Uvy73",
  "key31": "2uZVDaTCEFp28Ez83hxg37FgoW1CQgyAtxbPBEoDMoEcikpUBtVR5JG3K9uC8zb9QUojPXLFFyvudhob8sTbznhG",
  "key32": "5xpVG3rbkybpT3fZonsDhm7J9EGikYHapAGWdL7BqcDYwSM3f8EsYRLkTnMTkzf3YkAdYp6FxFanu4jyskyAyyqr",
  "key33": "33AfcLhFKphLJEtD3eHcgBAy9MnWLY5gQskwTbVyWmePckhR8EXYwrssqMMbhUUFwNTVUbcV3UCsRUwD9QE8dS91",
  "key34": "4qMvGFgSkAJCwCTXEwi7RoLhq2JA1Tqq3bycq9GL9mYCtSxWYEBECr2XHZ8Y7GWyz1NGqpBbSUEACGBqGVX2PbUb",
  "key35": "29tMwUsUcicYXF52W6kfCQfmUDWFrw5Bb5EsofBZvccXbsXrUNNBiRatYL9aXip4pWHAsgWTZmATgx48Y8yfo6Zf",
  "key36": "55pXAbNUAXVqqazkdx8NgycHhV5TrhV1swoRmxdzLrnoqjQZWg3DTb3xYoWmsPg2gWCfysRG7r2BqaG8TCDJCwNA",
  "key37": "psTZM9v9gE5gHfphgus3uYXFsE9TtHWN3z8bHxskLoi4PjsCK9qknVinfr4CzuPCr5dWBshkFUhdiabnTK9xrtg",
  "key38": "2HJRfbvG6kHr2GcJEH9cGwm3WbBQGC3Ho8DPN52gobfpQt1V4fQ3DBWZ85cRBxCc2ZRWvYip28jpeM8NBV4YUUgZ"
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
