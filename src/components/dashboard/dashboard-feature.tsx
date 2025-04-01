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
    "4jdy1iNDDMPpqZf5aAYfrhVTjqG6xZoVC3iukCHinToQYaBbPnnupDWnN6sXLEapeaVH5tGRf1sy5qsmX83S4nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ci8jUNFjkg5iyZ5M654aS83nBjhvzJv5bm3iNygd43XbP8zbHPArdsaxAJE2QgPwNirytUnZ6ga3fbAYdKa6X1W",
  "key1": "3x2YW3tRU1WF2Ux4ySuH7K87mQEAuWwGL6oUm5Jw3cpYQTppJAJRVBUT9eFJZuz3QsdXLKtYom51rLAzZfe3zWkS",
  "key2": "fMwYdn9HaXs2KaHXnpCRMetESvvdhS5EDbVAzQV1W5FALYVMykqXbKVHUzPi2MGpe6pmx6WK1RDhAkB7LB2YzrM",
  "key3": "fxivkmndrue3gKj2xAh4PNJrWDi9S8Agtfap8EmpttDEGgWwsbFipgikEn6UZDPsV8igbRhpwyA6xVBycWTsbUB",
  "key4": "4H5icxrJq8tHe4ub5ZfkP3XcoikAZ1TWA4Qq7JpaF54d31AxKLvC8KxSrLkKDmEanpvF43TXXrE7XDAWV52cdARG",
  "key5": "2RBsvMbLFCGw96isEb3qptNQ5rhpx9HyGWiqj1LoorLduv9C8FBnzKpS8K2mhLKWd8Kb9KJMLTRtjkRovfcBDWWJ",
  "key6": "4SDhgL6SYBgTiV7dvM8X2a73HrJa8RxyzAD4RwNNBAVC3tcFWmufhcq8hKcLYxZMP2uQzdHUVxksXzK7q8HCRgMG",
  "key7": "2iRD2mbwu93aMfFbzoKKP9GiiDL7v45cJ4TMA64z8eNpL6S1muf5un97YnHkV2TF2wTHmVTR4tvXiux7KcJWH1zV",
  "key8": "5144gr7VVcW8HKjvwy1ZPtn4RJpwRkj7SCnbTxeafRHgWvovMFPr56qjFP53BiLYhRWVATtGEAoVkF7iSqFsWkdN",
  "key9": "4ZQV3XnhPviQbefbzk4ghhzp1EuhR5yqSKuawxi4p7UVYXrLEfnfyTvF3beFL4CfNsw7BJj34g73qu7ahQPMu2iW",
  "key10": "4TuMZTqyStPHmDD3K1oMu5N9WbQUX1WjTTdA1dxDHWQUQnCQabbW1DPkhWkJ8XNUEYWr2vKroM73sxHrpWKa32X9",
  "key11": "4Q2XmAkUz8iE1AzjpCBzNX88L16tW18ompu8mtuHDUkmGS4UBMB3Skzi8CSF57KKUvkoVa8uBgjBG8rTbrCRRxSc",
  "key12": "FT2UaePvkST7GEuwPMC8aMu3CpBZvCYgwPVifDhM1gtkQTBeSXm8fnqS8A9sfXJDhHT3D8K63rS8d7xVfWZ36LP",
  "key13": "2wgRonyUY3Frb7cpm9zycrf4HbVhnBXR8tcdykCAp4mdG5kM5jqJk9NMGbx59FZGw6QEBaGKViJjudpCxjnDksiD",
  "key14": "5gxcosf4uiqhbjEAsTrrJfycBpuzrpi5Jc1LSS2XzmfbvqGF6rCXd89K3o2BR5Ej5wCgaFE7F7svNq8ZMLHLXhNn",
  "key15": "3sAqVzQaS2cavqydbbwZtsda1jPmcEYtp9KiJfi2NsPV8WmMbbwPXdqSAEmUfRzTPAQ1c2n4CfLRHTdoyaJyJJE2",
  "key16": "iYcDekfnzf8uRfxi9eZKnTLQRGvmHffryKLW71arSKSiYj5tJNgCS2ZD7aM8r1hqrNuXE1iA6Yk6wptog1s5zMj",
  "key17": "4WwjcepTcJiHNtm3oaripqbVL8XMgHvxjbRJ2DCbpptMmZszZ4hqZabtbMjnG7LttvvnUBa7T2kgVhixiUSuy39C",
  "key18": "5jF8oy1rAqb1uY2dV2sCCFEDQt2yat4TQXeyiX3eB2qnAgUFF1Tp4gKGAT4nwM7mXVVGoMZDWgstDeHerVptiT8E",
  "key19": "2uU4kcAVXgmQhwm6DSperxtdwg6ybw62L5Sz7NLthQSdhXmSyamrDqd6EVBQnYqmRSEsxRVe7DK6dNz59VaXspHn",
  "key20": "XDczb7mXc16FFv71GRraNpiyDo8FTqY2D9dibaUHgiEQMg3TLyVi3r1JwRoaMmnfT8ra5x4MP3oF6Aqmx5nod6b",
  "key21": "4AjLz9gzQ5vH45Hb3EsCtgoLK816mQHcBk6hvNnWAnruNpMKBnnEuw6sSk9YnDTehkCAgDAAeuCYptBnn45ouTyd",
  "key22": "22p2NB1MBR2NKhkHsTMuQFJCJ5yTW8DYKEKzVQtLtmLrAVHyS94MLCSHxzVdUN6ZmX3dorcDJ3eeAoonr1mAAcLW",
  "key23": "4HZkcEZgUiB5hc63HKEo7NdDYYMzx5qK3Czksurw7K6MXVD6H23PXJnffcoCZFJsKm33DrsCSvUJTT4c3Q4gbsC",
  "key24": "5UVnsbdDJg7BN6DWzqjh7Cj6w9CTXakE8roNEGcL1mVZSginLhpT64p1RKyGxhwTjKjtojyxbf4Uhq7VNBA9yLoo",
  "key25": "5PQWT7hgJVPcLjA1dts7znc8NHT9c6g2jQNu6QY5MwUZixENhPxB1A5bDHE5N1dtHWoow3x39VkpqP5gXuc8b9Ed",
  "key26": "3kAcauG4owGHqFGXJRjehnG7U2UonbpWstiBuCRYYC5D6seXDKz4QkVay1dvX7o1kX7C7auc8MemEo8CkfZtUUtM",
  "key27": "4vbTw3qD87T8mRqVeXztfio8f1p7mycPcu3ykjmDTZHk9eU2oWAWQ6zfraCwp7VBepcJyBXm822DrLx9sqvTXvAH",
  "key28": "27XMeTwGQBqmEDSg9sdYk8T7ZzcpegLdQ6tfnv8UvRpf5g4W9GiP9584nHFn317EnFFjYaZ4jpr5JR9HtyXXhWes",
  "key29": "5SPigE2tDvzNUsZb97zj7PkU5hufmZbHHJj21wytFdCjMdYGQPgxCQXeJ7eFFZQ9F6GygBjRTvqeCDT2PwbLwDkf",
  "key30": "3CaYWGCkLfEmXWUC7r81GLekeV7cMk8CjiNymHBNNyyr3M81UVx3X1311UXVSdUTDYvUUKY2PP1McyeYF2yBU6sh",
  "key31": "4JXcCFCU7FdNdH2iTeaDeetNwUiCXRDjMBupYsyvMYDhbG6vdNQSWgsyPnbv6qgepJJYQJ8CzoW9ARwqubmpJX6T",
  "key32": "22gseCiV5sGmcjdpTx4MpR1fZuWyHNoRwivj4NdnDuMPixcGDNnJRn3dgKky2JtwQJo71eVVuAMz7LfLHL548AD4",
  "key33": "QKVj7X7rKRAMiwUse3eLjzgoqqZNRE17gznVSF6Drywk9T3LNscKDnXyWf5D2xWn6UAHQtPex4NKwyhYAbT2vHY",
  "key34": "2xZUWZVr4tCHMjhKimZymSaBxXw2uAiaX8EQEytZz6hXZyB3Mm4mRGmtXo9Ja3kzXDMRERbhgkYLqzRDtKAeLR4E",
  "key35": "HpBXAe7zt3ugnjDYPPCcChcYikTBW2uf2RF1VGPNk5nLLN5txxSFu37Dm6FarxKhmvqdmqYohUxXBctkvr1my8z",
  "key36": "5xEe7Wswd3BWwcNGjAFN9sZEuQu93DdcAo7x8gTfrWomfb9oFreSkAvB4xpQPtNS9h7MdXmkPyNmvLsbJzKopksK",
  "key37": "3eqiwj8BQb5P8voXDepfTnZZUtPFdHjE8VKJyTxaxXLSBGeE5cs1CRmMGV3RyW1RTNhEQVwLEzE1BKrEHEyBBt7a"
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
