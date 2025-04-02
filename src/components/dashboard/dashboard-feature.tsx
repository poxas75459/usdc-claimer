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
    "5GGrjaLhy99LfvdRpS2CZUU8uapxDRfZtzxftfhcmn1Vrmj17Kcz9wixHwFgqkiCxDV6XYVEo9W9yY2yBT7A5U1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChNhcAFWEqAeJ31tavgLyjbS4BEBPHTfEG1PyRwxjrUD6bwMyHiXQK9BhzZw6jmC3sCRYwQJECRnVFLd2D6vQFY",
  "key1": "2qmcWxshE7f75o26qrDzmqZbRqeFfX2AecY8NdSFTjjZskRUJgRetHxJkJb7kv3z8WyKNHSu1BT7aKKrwPrEbaEU",
  "key2": "5EbNrTNPX4y3LKN68Fye6txK75BMpAiVErDq4iccb4Kj5DrmNvUws4T18ueANj5cRMPGYrh9DSyKwQidJZhbELyY",
  "key3": "27AoMQTHrW8oywX2bPcPmcfCBe4k9JG9xoMPUvWxRHxdhTxk6V6fxp4BtUFdCZY5biGzhvPGg1D56SuQseuyVn7v",
  "key4": "43fSTtu6PZ5G83Sb5VGsqUu4oZVdxTjFzoJZHxdTr5YUo2wSw2MouTrMttP1TWj5rvRN9p5L6mDok3ekTYavBbfD",
  "key5": "5EcF82if5JubqNSyeZNFtViM7n5EjDMYK6b1G4YCDwWjU5AXtVnanBhFYjEGRw5iheok2ZeyM7huYXAmF5Dy1CbN",
  "key6": "WG1frtWRzRfejvrr6XQD33MnkXbsmd2UB2sPZPHVqDJzLHo6oZRxEU7hpFowiL6THS9LrmLnsm81GRbyyoj5819",
  "key7": "3d5fFR6mQB9tZU6XFyjbCZbCVjzLFw34YmqF5xwXsnbk4p8mzVMrqjJsRYqi2YgyeBNX6fYJVFdbvJcXbFs4gNLR",
  "key8": "XfsPWu9YkZFk3dRwdisd62c6NSL6LV2Jv2J58rwMmLJpeqfdeTPFajEprJcZQ75moDzhAdk4SV1HAuAE7MmR2dn",
  "key9": "2ga3LZ8e5TY3Vj2LXnFUrMruPhqv4jWTwynRUetTEAv6Ba6yqy8VbR7oGwmWKb1c6V6KX7Sv7uWeeMAQSmwrqpy4",
  "key10": "314qZTKdegVtH79mMKCEPRovHds5PxuAEPven52GgSzYRAAzyPa5DFbWabZzcKfaHq7kgQCSxzkVL1j7KoxmzGvF",
  "key11": "3kx1GANJkGkfq2bF9m5wZ3YJAXHodvzGBQPiWQFbAmsD9Js2FLWaUFHqDAoRtgQfLhSXiBSFdCzCNmPc9o5Q51PQ",
  "key12": "4F91qWwXvkMA1oY85skYfcAxMY4utRZaUF4tgKNfBan1KRYMRB2GfDxxqMrX5chhK6Rm9YSXebxojsmRMx2yhdeC",
  "key13": "2cJC74wiJP8xV8k9iZdc1myYQ2YL9LvfZV1yXAZv5B1xKDjEGCfRjWnfh6iy1HyMpgJ89wFsox3QwCyQo9nXDeVw",
  "key14": "FqmcJoZWrcYTxNAK2nJfxo4AiwEixW3KWLtbCmiK4s9TUSK4TK264veVnLK1NwGkety1nbbi6NQkUFp8BcqZRCF",
  "key15": "2RpJFVzEMKtmY7KYmGG4bpe9UAUR1NmFk4QhArM6SgNNE8CxDntZDfbXPBvYoygC4QKT6ME5RaxSAStF4AaTXYKU",
  "key16": "4FNMFvXZYQ7g92MjG4PLjKtATMhUB6nKwtT2AFyM49ZGUmeNFd2uV3HpFxW96WrHrodGoZQEngm7u1X432ydFv33",
  "key17": "5ad3Z9HiGy7pEQyPxVvQe5PVaR91uiJYswfZraRsotRYajJ5GZQQtSXLtpnToTMeT5VhrT7Yk9jXkvdav3CbfH2b",
  "key18": "56Rk2EXZspQ2cThPRrSRjUWRdM2VALBgaaCC4WP39BBroCpj2gdgdKj8NhtfPcQaZ2tcCCLW5akkks7TknxCkpRx",
  "key19": "3wHcAkR2KPdpobqdajSJtMhP2aeQjYHMf6vGoQVmJUu2GbagnAwAy2z7jcY62AvJGY5qHqba5dhM5DgpyfXCqr3i",
  "key20": "5ad2AyWrAyUXAG5wYLMJdaNBQDLBx1C1C4Snj1PfmEX2zMTLYZoSdvaahUMd4ao2mbn9YnKh7ACqQbPbXfhCLdUC",
  "key21": "5hYUZTVybgVww94KN8QvYqmGFQYn8J4aH971Bm7jZASrkqtCFu4K9vXGjFUroPopYYNkFZVaUx5SXtoLSFT8JQAo",
  "key22": "Tp5hDKtXczDzrb9XnLDTLj7YdV9tjbCFdVJKokmVhfgWek1352SQMiBPeri3AQbV9vhkU2Cf7NHWmBcFWAuhcmr",
  "key23": "3EBTQkeLVSzH4sTpsR3nyQ8HGJVxZm2W17DBrfK9ZUkxReJVfQPqyNrsghdpkoQJ6fCBgwpFivA4mC1odviQm2L5",
  "key24": "4XSUYDUgN5vXyzKmuAaX7ULBAtGGmYA1k6CLec3hn6dZmyhvbXLsqTEsnaDogPEwgZ4NspzBRDqbt3DHYmkErJHm",
  "key25": "2J9zCNTn9LZrFbCebxQM74W8wVbAUX1pebavmgj2qRtwXuSo6jEotSGjqqe2e7cg5Roi6P6pVmn6QdxEnR2HsNj7",
  "key26": "4UeotvQi9WEqRMvyByo3hsJ8k7MXFyny5nhVT5Mo8Aspw2zgnir3nwwE1ieUQgpDQ1ktfKN5XrPumj26CQtqzwTK",
  "key27": "2oJJfXh2q1eRSXPjLNAuKUpYsgQAHGD2HieWpcRzeuqmCD9aekW5ssvRqYGfvjgy3QMxrZuqGsekEK981uguD2zQ",
  "key28": "5xushqhQoNnrF9eHeHzaxEaxap4t8wqwY4iJWAvz4ovmzPMsibNctNSDziJkZWi3gXWgtucJncE7a4cFkq5odHpY",
  "key29": "ptMo3bKK1rML77u5XkLnyms5kYL4moDV4Hh8TXGqckcK25pqiXnNrkFNqVaNnmKXFGkTKEMxZvXXLvBJS2wFQZk"
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
