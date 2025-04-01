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
    "4UZkXzjVyzW9MUwnAkTdFtvw3JMVB5Dd7qUsWJGQ6qBwfYQ8VFrP2U7L2ymHNMoKN29XHDo6DbSX39NJo9YiZDcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCoVG5kyAyNg5VUR8kLTWuyCUX37K2dbGDyagi4Dckoc1t5GugonQeQ8ZYkHcRDNpnZvHDkZb9hdyTP9fk2nx2i",
  "key1": "3AJ7GtHCsztkm7ZTt1msKdPVaAgX1poYDc4gQgMtTys2vzbRxhPF8onBtDGQaM3ZHE3LqnbJwDuxHngCgzGkcAGq",
  "key2": "5Tnwg9JkmYAGd9Xpfj2uWJ762gX5J6KKwjZcxx4MiCZRRqXvdFnmyLVo4846MVTqxkarxYV6gM3b8xq1XAK6rjAB",
  "key3": "39BeoS5JXxaS5B9e691iFYaUNtZJbysi7sNvn2FhJpxUg1xvwMJ8BK2i3gZnR6ATk2G5Xtx64ik4AitUU4FvmSap",
  "key4": "WAUhjz7ZCuXJYR1T2TorkkYBK7o5ifE58ww1uPFdb2tkrykLjNHfZYFtctqr8N9jAGbTUbUg3xwxW5n5akBTBeW",
  "key5": "3nJ84Ht8P3p4VQbWTRk2SNbnXxcHkjZH2LPNkFQ2t5f32MEfR9pxaG2261hy8udv8V22FVSXwpZzYbJzhPdpToVz",
  "key6": "3X4C9vCZB6rBFSir8LKzDFPdSTgZyERR6Z29HBLQ3K6cnCDG7Ytmxfk3pJxZP9MWKNHaXfupGTfzhvmeZSDAfjtD",
  "key7": "5zDVJ1v5UPqvkGvYkzuPUArrA3RDLkVHaA6ENxegE8iJEm4oSFWVsGhTtjJX9igzqz2Zs4kgBvrkq2xe9iWik6sh",
  "key8": "p2XPjd91o7Hg9gGMDcf4EnzurHinjY2MBuZUXuyo9CD1puvyZU3bHsMM1K2L47JKbEGTxkAo3pTPr14c4yN6kD1",
  "key9": "66nt6vxRcda4fPJw1RnYx9GFJMmZJaZ2i8zSbCCCMhSzy8zJ51iaLrip8JFp7qJxSHwPFu1eHTB73p2KEDDLFmND",
  "key10": "4ZHcZ3sHtq2hGG5W9hdnKMgNKqM7YfitaTaZWzrzgcd1quDZhTM1svEKNKyS5y1WebdXafYkUcp2jrR2FGqAc3T",
  "key11": "4fsr11VZyXTuc26gMk2q1u2Ak9xpyFEZPEVYnapVFKSF35p2iVw7SkH19nVY4NuoJ1rptJRmACNNkYRY96bFbnfa",
  "key12": "5Wkcu1nsUjDeuGKQQQ27VaYs5tBbYWiAEMaEbKxyVnuB8ikDKXoF2amFQwcvkRho6iHoZGeP2HjJqvE9oruhZP6o",
  "key13": "dgXDkZQfc7Ue4AmSjJBKNWz3UBhyB16sp6wwEs8rKSY9TAZMpXTiMP6u3AScq8MoV6C9tUR1nJey2gg5HiCC5A6",
  "key14": "4kWUsHrGLdBc6aNCdaE5UFyjKnLKMhnCNq4X1zrR8JD8FC3KbJv7JE1bw48EfEvh5Gac9PHei3mmu6mC6bhQg6MC",
  "key15": "EhCgeidxaXreN1at7KXSob465iNCowfC95CkmQRFoRY4Twznn8cvCGwm4DmM48bbEptmt7fRTLdruzMBcjSQDj5",
  "key16": "3mxbshN8vuCJdp6jsyUr1ocycGCaw48ssunnMJ9xQM1jJt7jo3UZJABRA1L7HXNNymT1Crym9ZQRqjXG1RiV76Pf",
  "key17": "2KgU1DztMVcXRZqhg9H2CYLJ5Wz22pi4mGSenFwUTZZTaSEFE7xeeVqG7JJ3eJvU1812YQ2zCcHrdEiSkMgfnUps",
  "key18": "2s9v1fWwjTbiLg61WCC9j2PJRx2fXC4U95MmUSGQH82dTyKgFC2Yk61Yu86RCjRqYF8zum9E5FGVSXb8nvN6s8ki",
  "key19": "2bwPWNzvjnKDmw7gHGehhWvjzeJa3qMHKUzqgVeUVsRkC3rSa7HWBRzmHxtSo4S4ejXRmwmacWCFU5avaLJgxWAf",
  "key20": "5dbTn75jwJvkSLMHXkZrowWnxqGLJReNzPwKqrGubk4CSax5da8xBm1LtQqx3JtaNbWcbtV8PcXX3F8zsAi79vp9",
  "key21": "3ZzZYfVgv4KTbXVxQh7uNxgUAFJYbmkzMUXjPLYjX2oddr4XWZhRSWP2NhwtRRbk5SYVEUHszawbt1mQgGD4kjZU",
  "key22": "5DUGgPjqumh1i72ucw7PWnFzrt6hGMGsQGkjT1szwy7kRreqJVPT7HiF93EQ4D7xN5sj2x51dCQsRQeEDWNNzHtY",
  "key23": "7paB4AAKWLDdrfpPecgB9VQQrVJNsHbqvRGkm9wER4t7PbhP8dTZVncmWvNUaADcVmE95BUJtDTeJaSF6o9JifR",
  "key24": "4MpVdTwQeZdueCm8cfHiCKRF5WrSU8QpdMfRCRJABEeNi8gSP8DgfCPhg2VFzDBp9H6vNt1R9eU8Eb3QCBZTXbnd",
  "key25": "3XK9VjX9x8JDWckga43hvaDi9WJ5CDCp1AsaWTitpU6K9kDRdSxdbtCQv6az7r83JCgoc5XGkgR9HbgF9JK8Magq",
  "key26": "4hzHqqhtEfTKJ8Q2PBTUz8TQtqfcCczEigtAbiKcaJ91kg79qEFMtsgEEon8B2H5xhndE4qWsM897DUnDc524QMm",
  "key27": "67GY5rdURpAqzF7Jr5i5X4CJjrYvWH5DvdFuuY7FhbaSMUN4kBZnxjNUx1mT8rWrs5wrJ1d21Hgh9dy2fjo4vtt8",
  "key28": "2YbZTGtxQiXWesXyu9KncyGuhmXebfXuBHNAmEeFURbRK8f5WVK9iu6KMyjLYXivvQTqYuVRTADDLKNpabBF5zFf",
  "key29": "hFaoxn2pjNMVjuRgH7syEur43TjzZV3NCRK9TtNh4oedwUTjD2niVfmhsc7Fu8zt4qgoR6q1xfHDhLYq7mCCKW5",
  "key30": "57iLMAVbUgySjMPGcjxBn8vv97qDYDBw8mY9hxahPtNvvewG8jXBBf5n6j4dz3GHHTX2EP19WHNAJPU8EkCC6wxL",
  "key31": "4fMno5YsDwz9CAPU5rwtVdZQ2fpwW7SEYqx8Xeo4gS6cJhy24hm2bdSvxwC5vapmTUyMLAs6QZEpcDnr42jMGeww",
  "key32": "54nm33GbDppGoZPXa2nFZjWXyiZfgHkSAxFr52tnf8gJUJ1i8waVt8PHyK4Zy2dcpxC7CLxKfx9ZGxShST9nnaZm",
  "key33": "5creG5TBndtyzGYxSGJy8w4v5PzCwawB43SqTgNHxSyadKcDifWcTWBdfUWzEZ5pTgZzBofAsfpQE3qiiS2UT9zj",
  "key34": "2PxsBFf9TgedbtF2mvHVA2r3YqHMbU8ZLQAzVKsrgRZXkJ7YxauZ9CoyepBoiYMgXVfKTvgNwN7YDK9sec8F4x4b",
  "key35": "5jLZQVtevFkEJkyswAA7VtGUfbDELF26YnnLxGoTpFYqTEsX5K1h7PSL6utM6kVTEBnv46p7EXtP3sXig3Y7gTbN",
  "key36": "3HuCoRWNLs4GrShS4hJ7yPKtGY3wbJUPwjAyNni7ZgNxNsAecqXN8WXry5NSCcmuBC4UTeu6q2LAVwYyrKXKVcfh",
  "key37": "q9jWL4Bf4Ct6pAZE6XTMXvwyCKVsW9D7c1gY1ZGD2CRSchJikEMakjoxRNMSnA8Qivf9TFCEYS2TpHJanhydQQH",
  "key38": "5w5ykgxkfMx5C5SFkBu1UyTMpjV8FmeJQgp7tcVPibUrxrduwZqhjHUtzm6n4EW4u2jhtyfr1kg1V53yTLGYfe92",
  "key39": "obuZnt2c2w8YhjEeiPiu3EKFyjadfgaQiAp2dm5HEokY5FDo6wbnr1rVE3Lxk2ook5rAzDGw6snVNJQNbfEYDE2",
  "key40": "RLd9wgAennnsi4LER3xnk5HRkhB3hrM1P78Po5oZwPSmmDuUYG5wecnikMS7U7WkH8R2aojKXHRrqcekGrnagZX",
  "key41": "FWZt8vQPJqAfvhZR45CeG4EHZy9rfCXbkvjVGVCnUUaD2yFMkmAYnHJ1r98bZQjR1Ag2rchAwtPdnfnhNPCPmsv",
  "key42": "kE9rwhgPfzSMUdL7KVRzgHrY6DYbGWJGN7LBAgnJffjKcVTuXyJwBS7Gf43vmH676UDvxvrgrgjpYKttZSJLdHe",
  "key43": "4thBb72VFf65uT4KtqsFXrzxKb3tou7AbKurjozHWWvx4USbMTQaD8cfcZrXFfhDeBkobJBqc7GVpR1g9i2EZ83F",
  "key44": "sKbeQuPcv9ZrhW5J3oXvrN3irCQKfWnZJX1DRbwhUZtnmJ2Kz98kvLyQe627B8F9d39dfvfiYE2xkzwV8RT8iE5"
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
