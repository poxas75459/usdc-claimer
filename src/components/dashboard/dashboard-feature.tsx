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
    "458B6fDHnf3QSiAFwbeExr42Mye6eKvGv2Z5FZHa1qKvdCWCYdQ3XiTE4LBXNJkCChWXCwHMJtxuKr4GT1WmG9eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LneHM5mCJZhNoWjpaPchjmWF8tr9idZR8knzxfKgAtDE7TsMV2f6UmnEdvNEWwRc4EENEZ4cwUErYnJfCo6fbf6",
  "key1": "63LefzNhcuDXmkgRqDRbg2DY34zGw6jVthuVpF98y5jGmScYkMAGFpEmn5AYmonDiodTRXpVFULznBSsnGGBe3UF",
  "key2": "66VbLkWxEAnJLz5K1aGATS95FAbFEVKeRwFzywwT8WVfiUriFGLxoUymt6JbiWsGuAhdCqXYTE8219moWpiBoAQR",
  "key3": "5ZcXcBXXPaAJ8PhmAHzmyNdinZu6D53sWtfKmWgQ6p49p4JEB8MhpH4nKXe2W8eZHFRjDkr472xpVvGV1a1s71xF",
  "key4": "3hw8bGJA1TCQxRHDFpDZ5accRUYBsNoX3DhZVc44XoyCA7fAesRoCRmuUdbfxfNLgKaKiV3iv6GEPjM9oPZSdttd",
  "key5": "4cCtRSNG1w8YW2Da9XYSseuj4QwrriYsGpP95559DLBkcA47dTkiGeGJ1jvg77ztK19861P9mNuuLsU4jtchjBPJ",
  "key6": "YHu74M2fmspmWfggNDQ95y16cVdhwbSP3vimbSYG8MqfYe1da44xjbCscjobG4hDXKWVkqWfbZV2LED4DzYVque",
  "key7": "4VYYzgnsPonDmcDpWM5AEhJspqtkru1VLQANimWvJb2M2x7r31mkpzphTFfVTCVw9Gb1UTiyrTxeSkk1nXSY9f7y",
  "key8": "4zDFS8P1DZ3AoeYF86wfq1cZBfewix1EBqRRNeJeNSxSDfmpVJKimHRMAJasfDZPbuPLWX7NMbN3KsBgp4hkaTJr",
  "key9": "4C1JshJYAAV8Db3qkDAych3nrEqcV7zMYuNR3Ur7uYuhyr1W8NiWMdAq1jFrAbZAbAdZ6g56oEPPL6q1tw1San86",
  "key10": "23WNAGUP3HTSdAEEYqZw7x8jbPquEhwdbJAXancUCLqMj4jn8rn98TGbMVyfF2DqQDEbifgeqGGTcQsMpM66jpq8",
  "key11": "55L1oKETbLBRCkpjSzNH6oGg8CPmPpXobpX9MaikdXyQmd4SHYBCeQPQsLqg2X79s3BEb7D35Z7CSfFEatdF65Xk",
  "key12": "44xbnFub7FMspSwtqe1f8U4rmSF4aWCQdkqtBABqKfjL9M5g4p1H7CmmgTHgUg3sXDkzUZyAcUB527TDX1zQmFD",
  "key13": "2UL48enyF6VBpuTmnYwbwDbmoZdWhXfWFvAJUu6sEwJnwrTyNiaTVyBxyVwM8FrjS8E59J4N99Z2Kiqn8VEQY6Wr",
  "key14": "2ejeQ33Eubdexj8kfSxVHUrZpvXTvAhdJkydhkJMx1RHFkrzBvUPx8cKwz8kuz5BEtD3mgxRGRdfKN5BTk6dYUec",
  "key15": "hWNJG7Lrjjz9cKjJMj3U5rAVZYuoGhY1STE9J9qXdydzqkMexPATsDx8nMceRPZnYx6CaiuZHozrztiRX2nT8SH",
  "key16": "5M4Gy4aqnMuSHTBDBsZce4iskYyoFbAtVhRV62W3Xehsxin9pog9vobpny5VokyixX6EgE95phyPiuHdQg7UUM9i",
  "key17": "2tKD9a1qCr9Q636z3NYFnpsghQgTuYLG6uiohua6AuFsmCijHUuqeAvBkb8gXMuAzo2QaeHzGwGtBEZwer1stUeG",
  "key18": "2x7itEdPpgyKkWYzuKJmptDEvCnJesRkMtZvTHwxEy5EaBwPD5L4j5bXmKiwfrYZ9ATpbm7HiFRKyducwmnnnGDF",
  "key19": "5FFHYBNeWUtJ1zLpNMJqGWrknrnGkeAKYhDpV24UhF8H3BFUsLqPipi75HvTbcNMSbGe2cnxUy6mugRaG7q4EbxN",
  "key20": "323BwUWdaeiJ9hyutR3vS9KrhUapvxwwESaAAWeJDqsEEeanU7J46HWLzV9cs52ZFqyMC552dadtvrUsNHwAeMA2",
  "key21": "5mXd1ByWoqXbvLfx3WksPdFiJu7i6t9oUfG6jPhGBH3HciUnPPuFnehKPQo9JXmWG8zaVKff54nbdFjFjmqhYXX",
  "key22": "5NNLqXqjRrjhFXamszVuXiMeTV8BZ6oGwDLF5YP8MsW47oYHs2cRcrEpzK87tgM4YgHnk7CGNUBjVmb4mQy28EoK",
  "key23": "64RJ5KEnEArpJGb19oksq2nLtwdA2pURve8CzXUH7EZnQcujQBEPxYazka3VPT3dg9VX6LQGYJNiVFzVXT5arxRT",
  "key24": "4GiYr7tXNjE9NZQX19Y7uq6dMVHZ78zo2bJAMTcA5FmESgw7Cmw59ZBuf2Jv7hTsQuf39NoD7VsBhRDZuVNadK1A",
  "key25": "2UirthtGhcyiTX2X3baZvdXSVUTmZwVt8VT3t4e2jWyeDsaDJk4kxiPZWE88aFXAiyDFQMDbRdixMNzpqSx6L7gw",
  "key26": "63h42AghK6QMWDZJRoSiLsUbt1GAx3zqTj5QBweQrocbDAAVaAFXAYRMvCMXETB3fZCZmnoWeL54nDmscXqhaRHQ",
  "key27": "456a62iV5quXqHXc5mouAM7M7dCLAGP62sBg48m2tf9P2f1EKxQb2gz2z8is3ZPxCV7YGK7oG1pVmzHWZWYpNRny",
  "key28": "vjcvSKD1hLPdGFrAcZ8YbwpYVMJnr5QJ1xP9CMR7yTugL6mWQxzH1nxH98gdn2kqyrsD45PfRcVM1qMa2vFxnVZ",
  "key29": "5kTJKVseCE4CLgvt1wv3K1JtzkAd87SPUnuxWWp2F65kxArhfFk4rVb3yvTgJ3tyHaL1AHaPsr9EVSQ2fVoJcnBq",
  "key30": "3XmpU7bPj5xrjvAEKrtH8ZjdaMidTEB7tiRwHqZFM8yifw62ycLHVHopBZbKXW88Atz1kfQeZXZcFbQo8cHPJbnE",
  "key31": "3MUg4zoiFJ2KHsTwgqQcwmQT57DBJbfGVkxi2tawPG5xY2QXRAQd9kqYgrxJytAErfqbUQKDFSkF3LJMCQATidu1",
  "key32": "2RmaAoijHMfWzEBDVuYSkLUtZ6Y3JGXE5HbZ5xc8U6kGPwRT6WdcWEkgANhNs4Fm5fU4FRf4QztaWcyPpCU5thMA",
  "key33": "5jr2hkS9K1TvrS4ifnreR9BUSHSz4RW5osr9HYkQNWjvH7BJGWeQ9SZJPQa8uskeWMAGi8fepPCRpXNUTfMcGo3C",
  "key34": "5hxEnNrp9wxAH7vEDk1uY8qpTsxciZcFHYowubrTTQUEkErDuarWL7QUz2pZvktgC2V4ab9fQDEodk2CUPtRmtp4",
  "key35": "5EU2g2HHFmNrtPnmNhHxJe6KLsDjwxn2QodN9BXwfFPoj2jcdeTSmJ488EZTTNYhe91f7XKtsc34ngQfrv352eRA",
  "key36": "5ycXPEj4Fc8xgiU3m6dKNTcsTzP3nVs9jw9LTnYyM6GRLSAxjT5z9yCxBfqSgMM5tmUxYmBAtav9JJiAMDyMp9w6",
  "key37": "VdTzrtgUqYYKY7EmneyV5KdRzdjTf46onmV5DuB2hMwWnv7oranN78a9zS8nvYwNmb1v9pz18doQHABUTDon4H6",
  "key38": "2FB3CugR6m72kcHhLqUmpxHUaNc5KxuAkaF4uxEGMeTqxtJAtXT4ZPzKL2kbVQAZYmchpzgnGHd153BaVAo1fEnR",
  "key39": "5VbT1hby8TBy9Xwaesoibny4yKXzLiA6dMGuYLqASN64WJxcMjD6bCcvh4bjhhLxWvxnhNnJYD5yrooU4JUMedTH",
  "key40": "KCAV3pXKmcUmiPCBt1AzUtg6FGKV3sbiTRZj7F4JrUH2sUXtDE9dkwUUXAfWUm22BEKrb7iBJA6kz8KqgRjK66c",
  "key41": "4DX55byzNMGXweZ2hHJVe3iCa4jav6KjZdTFJ3RmyGeQsquMh7vTyQB3fyPn8YiFWWYg3x77v6GxCg5Vz15mBA9r"
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
