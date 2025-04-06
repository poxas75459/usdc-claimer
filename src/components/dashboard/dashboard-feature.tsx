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
    "4bcLVMy5bD2rDZgGYpEqj8CkAmxKoJ9hsZX3t8Ctgz2YdkWZznoyMVgDw7d9R4bMXp1vSvdyuQHJNho6fpArAhmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LW96i3w3NuiWpzYBTmUVRrwZsLaUKLAkkefykNNvufEeVL7XHMNdyX8W6diKuBCPhQpPaSYcv12DJHofm6yw54u",
  "key1": "YxrRsd6XbQ4TwD5j8ZF7rDoTkypz7NE6d6FYxsg7LRAQgtAPMC9S8vMFSiAzvpmcuAyvpcf8GunbhFJQ7axbfEY",
  "key2": "5ZcVUYQdgsdifyW9CSTtuVYYpkWLd1WvrZ5r1W74SDb6UTUgReBXhZ3DLE7dXpqtBf4i4rdeaqbrCi8PMPtUHXA8",
  "key3": "2ghMqPXyLB1i4evf23EDTryaHQCemrz2BFpDNe2GeiHuMaEAGKbKv5rHKJfX2vMaSaiDe1yxsuUq2NmW6D92oS7d",
  "key4": "55sFKSL7LEdfugkTFERv6JFW13eMYYPwwu4rFtxHzXHDuoxWbLccDLJxh4xa4A42tAVVt7KVHvVCQsFBgqf4AM7w",
  "key5": "Nw7mdm9u2crWawHJ3DcD2Lme8fYuPXAS1cF4voejYNZuqDDgp8gxDmM2AUn6Bi3iZzpB7WQmsbYy9rppeR5Euvc",
  "key6": "2gV6TRrgGXXXRdNVzUZMEeNsnbSVwu3ybe1EpHKiW1hVd4EAsEkGJznd5VoXrf5LFwLoHr9QLV6QpyAcVYw3Lska",
  "key7": "84GDvkwNiXZ852u6obdf5Q4pWfmjJ86PrEGvn26S2pSA6eoP2tCbnmUzbk8bZjn3svGdZmbqz6xjyuikuf6E3kd",
  "key8": "gUiATF5DmDPDXBoLhAoqe83f7MDBMvS4rTe3KEcGnhJM4DPeWa5YT6gpPppgqZzGCBtfrp25ieVhVEwqJq23v52",
  "key9": "3Qbn9GT9gwC4BL5RQGLcMRaVtSSA4E6TNNBukBKqYp3nUZarYmra8G9pV4dELKktakrpsjSRrwXzu58gBn95eGrt",
  "key10": "46ixaxdsfbPgyTqmFvopF8Pv8YmG2pPw1SZ2pZQ9FPvcNeXQKCdZQHqPuv991eXmBtLYbiTvbcPE51SwidVmtHP6",
  "key11": "2wMidvimQsgN8NyqvRwy9qfGFR3cwsU5mR3bxGaZw6Rh9CQxVky7TEC8AcqfXXPt5QZJNUpUhK2pdiWnzCN1dHug",
  "key12": "3tLgZSF3FJ542Fu8qhDw5y1WNqTYLKFpQvudeLFp5K3ivyKvWgMTyAby8aKjSGGbsKgAHywZUFmFrXW2ET9CYw4o",
  "key13": "dPPMQPJ6me34F37XJRRfA77kNK2r5gZCDChgquztV9nKB3PL15nEx4Cnra2KRHhKzmWrtMkgswsNv5tAqJHai9n",
  "key14": "4RR7CQFAs66vyVdgiEHxe2GxhYXcuQLSThCJQ3YQCTt98Z6zwtVB2CWhc5aN3rmn9YB1dUf6jqMQcq8WQdetXm8m",
  "key15": "5qB3ehpHwWmFrpanPPJh4GYCduE49WXnzLxzs3eL5E1iKnbdK91EMtFyWM49ZdFQXoB4211i4pf57kP2LAdNhY8G",
  "key16": "46RC8hfywycRuHccSZJe3n9wc9BztWnZAoxjNdn1J5rjNnNGCG4xJWExcBmzjwB83GZgeEAu3T7LXtxoWZrkvgmY",
  "key17": "3Gr5QDVsBi2BqBZ8oueSuwHwp1vw22kBRsPk1nipgkDgfC9Amzb1mbz86KsnLYZs7UGUtmpdmR5ykqs24rxaXwhf",
  "key18": "41k995icwAMzjYXmpQrboB6rU17HbhAVLaoTFojUPymiDsG8NnWaiyMmWsDtFxLfFebhc5NMWaA5TG5vRQVrixRt",
  "key19": "67PQoHsE5sdWxECLEFJbw3R9VDf9R31PR7N2dmtx5hgDsJQSy6YC35Bo4WWv7CXDwAW969RG9KACZ7G1pRFm3dZw",
  "key20": "3GYCV9ZSud6Yof3tEvkmpPbECuuXbcaHxLSs7WVwWChr3yNE2uQS94QESLh4xmwMUj8raPTj3RzitC9HUR4zWbfG",
  "key21": "2uDq5KxMqyY3gmaAE7eDZ1fmKzeAdUuKv6CH175yUwZhV6x3pCjJNsQj47Ux2fvvrBymSUwJ6Xai6rVtYU5q6koC",
  "key22": "61TNvQzJAUyRtxMGo5wdcinxTzRjepD2qFRZA554wccriGfD17YBWnCUsv818zAriLAhog1B5LbugtnHDZYdZncd",
  "key23": "3KBLxnJRvVqePA8xkcYh319MbYgSwVigtpXvjGxUrgycw4M3njP34qPEteZ33yspFcp3DmS7qYokD2VzvzF9NWv6",
  "key24": "4Q8uEsov4Sv2Wg6EeLM5fVBQAbYxA1D2iHiWAMANc9zdKyYH4XF5YHRZuCKfQGUzFzcxdZgFicfSVMcFNxAhj5n4",
  "key25": "ECBbBjK2UapKix6H8FaEkNmNmrjjxTR2gkmPVumo2LzCL1B35BLNXrnVyDotVeQ35DAahNxBqrBue5aihuUAKKL",
  "key26": "3yCTPpRajsBYY2EC714Ab6WSEChMN72ZeRXAVAvjfcFPQUV6f1LrSscYND2xGqqXKCSGQV96WaporuELCxB5HbnM",
  "key27": "4sqz9WKdT3dgeS4nDk6m6qoYMGxwMa3Uwbw7PntamLig62MMnBGYJ2msMa1qNKN2NDiqhfu5qssCcRpifv5iHNXW",
  "key28": "4h9exjbx11us7jxzz6yNfRETqPn6HgX2QsxTkNytEWMGxgwDf5gMnagp58uBuUS7BoYuWaniiaM4fmbvrHrU4F1Y",
  "key29": "5L29PTP9QFm1bweBBaALZGBikoMLAwNLei1EANRuZX1FzZ1v5pGV1WPMPv3pojppCXC2jtBFn1YFBpdEzBSu5kVL",
  "key30": "3KTLejWvFFqsrysavgjbzKaaZxbEaZivAwf4YX1nXArbf8wecZXn1zHQs3Rt1fwDhRhDS53DAUnM3yVr1dgvsyUz"
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
