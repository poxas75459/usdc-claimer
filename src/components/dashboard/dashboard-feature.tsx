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
    "2o8BESmgHBx4RF4t3Jakn2PYeChx7LNwmKjUnMCDBcTibEDS2FAYnUMKsa8mrVVp5FKCSt687YAXVfn4KCUk69mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pup6hBPWCNdpUZkSuWPVAo47SPag57NMFGsem5oZv5ENH6zfzLyyQ1HG2FSnmg3TF6yY2zR49cTfz6RNJBTMCC3",
  "key1": "4JYufak96YY47Mj2Z5gwz4m9e2uADbHBKodBkjjRQPcRxDcSbUNUQvH3t8TKxuw98ZMNarizaitWgnfrU5GBcSFk",
  "key2": "3hMDqpC26z5oCwuAPngHgNYKV8xyVBk3Gy6iDGT2ynSrET8nHujwuEazjuUDhFS43PMo6cTT1LKfiNqCU4QCKnGU",
  "key3": "3orX7ZpVw8nRcSRh7SZyVjrqv4AP8NyTjRzdx1WGfSW3m1HbuirU5a6Df8wixWthrx5JLREFSjSEFUT9LejdrYEd",
  "key4": "66uy9fUjNsXjpjGe4vn4xthbA6NBB8iVqvdK9YMYUKZSiZrfYe8VW8HisE5ZgmHyq7mcGr7QRDyvN3iSgpwxtd4s",
  "key5": "5FowTcbntjZLkco6XJ55bsehysDK7m8SLCQa5zwjEHJuyDvm2AmSMFEA7b2MiTzpty8QgrHAFhqEiVZ5M9ujutEU",
  "key6": "2xrX4UYyMPgJzKZi6nWhWZav4iHH9Ra9qH9dkxeTbtQeJM8i7RYXepmEYsdPqJweZvsipuL7cS36iLQ5xacapUkm",
  "key7": "5BoPewLMGfJNP7EnUtKKjNjNt56hgF9zzPhoaGprtaXHggyh3Z7EUfP7pfFCDYApeJ7f6wTjLvdwujL4bYe2UbG3",
  "key8": "3oojfupQb5Gd5eVeuR84ohXyMg69GNS7htffBHCU3h4krfbjRtotBNRvFmmc7PJti37KCSZJB7UTA8gd2qK1TcUQ",
  "key9": "5FfP167uGtSxKBJYgB3XjU5zMNpnYHRcs7b4sVNyKodu9iCK7V5veiTyL8ZEGusxi9XW4oYiewcUyf2RC17reYaz",
  "key10": "5dNAR99iaBf5Ryfx6eZYFSjBzaDxPgXMDTcxsxYoYeBgA8Pp2G6126VThXH4k2q6raj445G23xCaqLxKaBjHBXza",
  "key11": "639mtumiVnwHwapKVfkXB64CgJgYgxhPxReQtzaNotxynKN69CC4cKicdkrDt9PvmTew4okPtK3ChrMsD9iv9WXv",
  "key12": "3u5XpMaRpYvFJuYU6vRKeSXrzUsZpBMp9VbWSWrHD6UPQA5SgGm5Jw5XcNf4t2BZVCbuw4C3GHAuixaWiJD2o2wW",
  "key13": "NRAJGz6eaHiku9om4smKRZeUBXRJH9HxMwEa7UzJzUrHp5W8EBFg56RWe1r8mVJDT7hLqSXNRyvC49mR6RnME5o",
  "key14": "3HzkSMh4LU4AYZJcYyKC1KiQdg7DGZRtTt48LmQTtahdwh9BCKXFT3kE5jrUiMkUWJGcMo5HhZLZAx9TRF59HSWW",
  "key15": "56jqKZdKscsvswcAvjx1s8jCLw9UjRVPDSgexKJ6SAsTxtnqpwa9MBSfQRTEixqMKpLE89DFoggwkP5GGLDvKpxN",
  "key16": "4P3DX7vpUbBbAWMDY4WQUpRfoB8dvPRjSfFU3YnUw87G3z4M8J7VTC1wig5hA1URAeWqTMCzU1o4WrZuZ5iN7Lka",
  "key17": "35LHeCEGRKwZgN4WENC9JHhKVqXh2wF3YyLo66Kprvgh21wVDYxWYQVMudEV1ffc5sCkP9z1c2eT3y6MwdLrXG5k",
  "key18": "4DV4oR6VPj4TfZQkEB3Co19FRLK4zTsqPdSsJ8d43jtcpDUjYrLYFs85n2gzapouYoDjPVSUMMFV832FfnXS5vka",
  "key19": "5ay3cyt2mLfNRHrRoDwaaqVgALBiLAsQq6iYQPUEdSdhdNyuNzRxuKvzmKaoDbuGHyMp5Pcs5cxo3yipPrrsGbvD",
  "key20": "2xhju3nM9PtSj6TfKcgLWkdaafgZBMXiWMciAJgnQPpRVSUhJCRRNNY5P9GAntSvB7Ewekeo3d1Bo8aUbHm3qTRv",
  "key21": "VNGGT5ha6WiGq9iQHPuhEV6xoD2aAJFVSsbPwSWGrS4PtV5pRd4v6Z1pwCELDyB7Q6fwRCoq6txN96QgPkqBV1M",
  "key22": "3Ger2xG469G4Z8z8ARNuppAXR1MdzoMXSXsSoTNbR4Wa3HDenyZeBfcQB8kNKwh3TTRZ4i2rZwJkMC4u3atQGdXG",
  "key23": "4xDY8wKMJiUyoTzfJ3dGb6Fy91VRu8YhfJFmw4A6dpDiqrDTzaeyxAwdqGXYwiitGBCKNydRmSFgytZJd2xHNrLT",
  "key24": "XHvrKTaxQfMQzDGq6iyCiz5o1CqcGYUvzD3dv6w9gHpSxwbGXy9q5viwctyXdAcdYLX7wdzWdNxyJwpsh2AnTq2",
  "key25": "3dpTEXXQibxiRcpf4vY1NCTYqVyM5aYdprupBdgmnwNkQCrwb8uec42aNQ1AtjmWBx9C3VxmgvXP27dZgWyPr192",
  "key26": "4xAEiSUaYk1PLNwuE63aHFkr5He2n3NscJN1YuiLZpugFbqMmXeBD3eTiokxBTdqRGocRq5dL3ibsym8X2vBUGJQ",
  "key27": "2bRwgEtCGF1DBa33kTcJpSVV9jwJcikfFfHi7Tgzoa9ty6UDvATzjEA49qNydnjfQwMs4YrDP2QaW9SmcQKvn3vc",
  "key28": "3VhWWutZRXH8yUc25WJfjeYbcMaLwrafQpxfBDnCeuNQSYizeXcsE2XUbPMRPrNMAQhpWcxqZLme7hcZ9a4JWDnJ",
  "key29": "c9jFYoau2PgyEqQ1zMVFFfo7mbbyzYVULVheBPakmsSTtcjhFgU9grdfzskXtyH62YkxquexV1npeHz3oAtGnbj",
  "key30": "wpE2rkS3sbWnSdqrxLtJ7wXfagnYthsu5AqSmCWXtqQyU3nderdCfRNDX4n53tXo9Qv58j2QdUdVC5krYyqtYB4",
  "key31": "3MkZz7fFfUGaqNqFJW1oho5DJc4nwdS8CgNepJ4stZ14HQUVFHGM7Amjug4pduUcpMjZnsQ1PN7M7PLuF4E7ApTE",
  "key32": "2V4j2kYm825QPcPcugJ27aWmQZcAqKmZ1dkMLVif6LkenXA5rUuxKVeCu44Rf8gBcH8qwSrSDw46vz32R7W9V5bW",
  "key33": "4Z3BG6jEUXkv7zMbSGBCfdEKhkkwTbKikgWjPD5GCYYMnG1zCAC4RR7udi6UpRDp816iVBhR1aSe6yy7AYTpPnZQ",
  "key34": "43wjtEHeaJRsqdHKRQ978upA8SUnR7gMHmiVY5adaht6NaRjXrXfsKHDF5Y8BgP8XYa3xdkewaQooJythC6sFtKQ",
  "key35": "2D1V6chESsABHUikibUkcrPF5RkpBB136mZ4sXKMxcQXusHpf1cgUZvXhXUh87j2psKNi5PsHFGxa6tgdPjP5b2T",
  "key36": "RcQVyEBLH5Q47QZNtdZpg6bixSwUGpRfreACGE1rLqihdrr1Y9kCUpAaCyZ4iNjK9T24tc8Qb5XQZCD3PMwfcMA",
  "key37": "22EiE5rJUA7oJR8AH9z5QktJtLTgxrytUyyVqj7nwsqpQCKJG7ybmCZX8vsMArDLF7ffuxfDmg5BUAEZhBTKHzsQ"
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
