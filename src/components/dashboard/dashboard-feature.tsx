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
    "3AG7hhEbLjojZUAWgvxdanX7coEtBaHe9ugtHDNvLxCU7imrspGA5HGUwh2ycoRQFe78NygxmpW5hTJEfQYtzzxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJkoeAbroRoWN5WyErB2yMDzKmq56GXZB8z9E176gnonhfvJvxvZd1t3JawRDtxS5jzwKTqRMkWV7ckJuLvm12s",
  "key1": "ZQpV5kN9jYjpduujHs1BapuMoMY24CJN4CdZtoa65AwN7FgzuBw1cgW4gMC3hiftdLaf5goV4DXWZtVQ5xRhhxW",
  "key2": "5QPtpLQ61q9RsD8m5BbqXnsfPhWwV24x8sCvFoPnWrya6nEGSJBb81iTqayjoxS57T6cccyBF8VWZHnTcaotMPuQ",
  "key3": "3ZVwqM3SxMVmK9kZZJA4mnkukQ5tYVMyXb4u2UiqeLRUPsrJHfQU8HHxkSqYmE3zwYgx67UFAkGPuSq74fkmsDoe",
  "key4": "2Ti1duREUAEaMXWxdkeyi844suZ7UsUtNPXGFrgYWyZtgdRi5LcSiPKqdVV8uWjEonRTp1Vpqsww2qVY2Evy7FQx",
  "key5": "55bBqbw4EYoRNHD8nbi5HXdkxgkviaqjV5B6SGDttPaNPamU23yMM4fZ6ruCZUAjWXULCkF5Nsz21KFjMxE4YRse",
  "key6": "31GEfToeuGKESpv4nGEUzUU1UYFvEKVtrUdy4b9LjSTdAQPtUvf9rAYB3wWma5YYqLWgaLSnmBYxkDrWnrmZDy3u",
  "key7": "57wRuRjfXSbjHmxY6dQujis18KVXTU8b3jUWM6TvBubdRoQE8uJX7C9W1upR31jzqbYzTJpDsC68CTnzPCVtWS8K",
  "key8": "FUBezuu1E8fd1i3Qp5gcAQahT5wUqMzvg3KorNDxqJ5YLMHxEWyh8KEnfkCNUheDqjtC9JYH22hF4M1NFDAJZwB",
  "key9": "45P3NiwLdF7rzGrZoCDHuEbTtWXWUoiF1iYzG6NrC9UjdnHeGZS2D8yfpnRjvAKBXYjVsadFho663Xmvz6sC9gyQ",
  "key10": "36jZh8mTFZHeLGz3ZNDWC5N62J6WgVCtbaC672faBKWbuVVgaNiR7vaeasF41PgkC2ospVqmsbvF9V8tRGEJSKuk",
  "key11": "5gcsupWZ92F2phfbFZSLdxw1HbK3fwD7VyLymA7rH4b46vTpEXjDxNWjaVuodvCuxzPvHgUV6fUjim6XLNwzrQRU",
  "key12": "4EByr6VVP67nBLuN8qr37iXAz3ySoy8hK78psqr4BjiYkVbQyoWLHPrL1RqDmoapzWMWNbCtBudZSkXnbUUffUU8",
  "key13": "Z6JsoXah6BcFJ8YzXvamQRK8GzJU7Xr7Ep8vPG9wpui7FEY6evYuAoSYc5VeSoJeqnKe2CMUCk1ybQBjKscUP3B",
  "key14": "35xDHJ59xxExJvC8UV6iMV5hEwy3JubbyrArSug81MNDEhi9yic22cU2NYMXrR3rfbvryquzgCoE4iyLYhnnpQAC",
  "key15": "QT3NiKxpzZTX1DqxKCgXNUxsp6UGRgR3jN7Uj4dsPrJVQMjeMhdQv6LayRKTBPjjknB4gcp96uGJimcRnPSSZ2t",
  "key16": "42dvL9G1d8ceSVTGePtQedcJ3VFSuhjHNdwLcxUV7mooFpcXSPRLkL6dJzC8vesw75rcMwuXjrWHmkZPcJ6xVL5q",
  "key17": "3X2Fu6bByUrWFb75es5FUgb177Vv35dvhTa9JD2CYWLj2173PcdRpNMpw2zr8EutWLSVvxkwZnvjyXhbsxJLg6NF",
  "key18": "vWV4pQVhgCTEvKy6rmZXRvaEZGjgWqiQEiMxt4gFF4mqVYobtwhqRJfsoi8nPUXnoLtfBGVkrHxrWQLuHEfgKMh",
  "key19": "2rUWPMd9P2EpxgVGBtf8UQwjy6zCbzSx4RHCgbbtZ48mxRLGzBNnfqAe3zPdroGEJVEXD3Ks1G1qHREiPpJJTT3P",
  "key20": "5PBCFdX5MXbZ99wA1LueAFLhFusSGiLUUFwNEVNoPuqDb6B2fbTya2XfBw4EjkajMdSSuUwifQ3tX4xGQqg3t4mh",
  "key21": "4T7ijN272vJe6zQm1myAKs5CNg8w3dnajkwKNmbP9XPdTt3thyWi1kGYxEnXP7bKrHq5UXrxuTxg1nAT1c733a4Q",
  "key22": "5oPQsr6H4TEspdoFV7V4dfUj1DEfRgd6pEBkUkt9DRqL56t1TYWmh6RD7sP4zCELu2KycpFraTxaigPqXwWMGaBF",
  "key23": "2oaQV9GHpiqmAtHiE34DE1dke76CHjk72utpJrr8qHU5mZa15YS9eA9sqqrBBwgnVDbSH1y9PWgiqKTjzLy8qdFy",
  "key24": "4xUQwcjHxptVWSFwn5wt5TzyBDTwKaF6yfRuH5APyd2sDb8GJXcwFdZgSrTzpcnwHfhPmTrHe7QqycYGe6vr4Kx5",
  "key25": "61hSxQPjYjh8TLkRrZxD5oq6Nog1wm2BRyAKwvMWz6mJR1Ap9kpK6GBFqifcS5SXGLfdtQmFKWpnAmAETrNpqcjU",
  "key26": "36sq2PzDrbjDraB1CL7C9cqM7VaqbyHtAnFLuJF4X13Ccj7fJYhLBghDXyvgFwUN3fgk4HWri47R2ohUCCDNnrRA",
  "key27": "5MQbQvq2hZkMWmLgKKUiDqdgRir2UvU9Mn36QsXv4rcHqggNjYXCxgwCiUvVPfaMTf3RESsTebqMXCmpvv8JXiG4",
  "key28": "3M5HRVMHtUhH3tS5AhgXrNe4UJuKXw2BPSLDRsnNCLba7aWxsmFtVoSn5wR2zx4gZhBovCMBdeNsg6m3hDaMM6gj",
  "key29": "5CKQFCZcggHhWYAZ1SyKxiCpBXJ9D1MsYYaw3mEbShqqGV4uvcB63uogXVHMREXk8bBgLRctqwQHxHx51BRNvYQm",
  "key30": "3U883znM9h5AtCTaqHWHQ2Q2pKXioc8wMcBzKKWhdHeCE5pzNKnnijNDpN9HBnZRjVh5EQdgLLx8kB4QNRYWayXg",
  "key31": "5mFQtHdKoAW5Ey4RQhUD8mDzRW8JQrVVRxWAZYJCyiw1d5EHNZFDg66SfD2Xkhs45eAv1Ryb48WvFYQKF1GBj51k",
  "key32": "3qXZ1wGDa2pbUafL1iwp6C7dCBbqK7YdQTc6HFPr4P1iQJqvP3feoGL37whYNQWFdHDJW8NKhMZH7354mzeWrBaZ",
  "key33": "yxmpSh6Ssvtfo1GYv4ALYWzjR6b2Q5rsFHrmo7MPg4TFWvwR6hQ4Bp2uJLn5K9SuoYuZtQyRfboouWrFdzrHHad"
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
