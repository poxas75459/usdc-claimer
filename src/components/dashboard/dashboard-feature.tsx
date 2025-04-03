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
    "3HFB4axDuxeeazZRZkifF1XF5TTvTSZzAfw94msq6oPzyXLWGXFzDUP8PfaEktxTD9qcSupDhEJaXF9DxuxxiEsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oB5Hm6uax73cVxucBBJwMJaGcMdbLjjB5xwsghQ2eUYWKrh2YMSV81wbu3qvqNRhaDMpW1FvZwEai5iiYKgqFg",
  "key1": "3PW8ZWu1225SHTuUhLhDUejsCiJDgVmYCpzdw2YTQpiT1Ybvs3Ey2tmNh44dCqxEgQCwA25JTyvMYJRXzBGhREJ4",
  "key2": "4wu5cZNw7b175muSYyy7XKLPaqrRLkNN3CFdussvrVtvWRZGaJHJb9Cr4hKJVJpDPBuQorgeYxpmB3KbmAdXP5s6",
  "key3": "4RhdptM9MFWzDTkJBRZMDmzStifSSZDmU3whmLDD55PurqQeAzUq33mBKyvbpHzR6WL8fZiy3PrdG82Z2tSANvrg",
  "key4": "4QrBwWHf192wk7m8W8y9JjRecx7h4HkPZsLb3f1amtcpN1oE5yr8uW2fZS6ybGZrVxL9kbznEW7qewawAGVfuteD",
  "key5": "2gGyxNcYiPkxDXcfk53yXBqMq2VLkzeHQnJtgSXRye6xv46crkPZrPtfdMacyhuADkCFpMNw8qxStjhyefsbVYrd",
  "key6": "2eeFpVLUJ9zuZYs2Ds8SsyzMdCzoKmgTTFG5MGmoqZMscvVJb3Ey7BdDfGnWg94kbkeEcNX6prviCxpkigri1cbo",
  "key7": "4BfBMy8h4k6ReQ1n9GjzNubzUaejaW8uV918AHv4oxvvdWMskN2mgKjbK5rcRiuHFG5ejNhsUKKPb6fj2ddRAC42",
  "key8": "3Z24FgTDDgMmDmWNkpDx6LvTnf5J5YZgTjDdpMBXW4AHSSP7ncTqb7sKRcMmwWjZgN4w5BvReFyghLG2HVJXMd8E",
  "key9": "osxtprTKexsswS5KV1Y6RiA1w3XFYyKW2X3iWrcTCMsNgs44ic4N2pJNFC8F6nCwdBD2CYNduQLq1p6ZYHdMw8i",
  "key10": "5teSXDtho4k22AM4RNBVNydUfkG6FX11Gx3FEW37dLso6DnJTAbegeFXx5xxiJLmNiu2oW6MPv2V9d5TwxRHhBUv",
  "key11": "4ZWQ2wBb3sc3kmDyoideNGUgqPtygSC55VqxZ8nQzTFsuE2xQsfJCuiJSuJC2hwHmfWNg1LxDSX6QdSkT8NbLFsB",
  "key12": "V853RDYtX2UVV5U9WBqLecXtBJG775FqEcAQ68BRXtQ7j4N1x2BA755xvWn3jT9d8nGtR4KkNWsnhiRqbkB2Bps",
  "key13": "5qwtugutD5vyUfAd2Mw9hwF3hmUDrn1Kc4GRNugvst7WZGochBU3G7ateLxaLFmnX7NDidyFKNxY7JxjxBCn6Db1",
  "key14": "kLpBySEp6PqbaQym58YY6D8j6YQKPcwPdcfiaAuGoMfNWhnzBx9if5AwYBCHgtjiSQ3Z453JpafFiXKJYV3GJ8g",
  "key15": "3kWdYyn4sNU7zTdgSzkg6hGV761dh5JiB3sgFSNaq66Up8hYxoWrZyy9b3GYNrsEmSdQcMjpxkKj1hbfd1gieoU5",
  "key16": "542bXeRW4HYjgUfXMT6W2eMyzqNUefAfFgannSZbGa5EfN2RfwkuVmbdefxrKFygDWqF4TbkFupYoa8eVyxUbM9m",
  "key17": "5ZfzKBVEm9AX8bS5TJKFTmoKAcRebuT84RthdHpRudsF7jEiXXH4DvfWvqjrzWU6a6AYkEyKZutt1VYStRBz8NUL",
  "key18": "49fjvbiHWgKVm9soZ2oomQsSjNuGfzqssCnnNGfaCcBiGJ1EpoKYu5NAkKVCsWMtVeA3ihVjF5bf8Uh7V4A9EPBE",
  "key19": "3sggyWfipkehrN3TJMNTSTjpoYZuJMRrBuUmDndPhSiBCovhYuFVjr4XqvXvJHGyEXxT9kvjW4Lw2pB5YU5HTAdd",
  "key20": "4AZVcpZwTDsfLDsTtB4jHKL1koWvm9tSKvs8S6w8rkwzsbJwcL6MuDp6xUnWFpC4YPb8kzLYkTACafX3xPBBRzZA",
  "key21": "58rtgW5h8mDuQ2oYYzTPAruXrRXEQy8k1DJ8TTteWRBa1Yv1EKEKBTTExSuTTdeoSjqKcrXjwBYXhwDEenHL75dC",
  "key22": "2h1RVX5kzWmizVhDDoReWhxSMKbMCZTusxxffZBDx3MnPzsuw6GvJRedxsGZxswgHSrDk1xoeye6Fq6oFAv3hXPa",
  "key23": "mMxhptCzUoMEa1igPxbK94v6RH4p9YCPWi5AAKQnqTFSfifRknQ5hjUKkEd3Xy1ZEyxbj8LyrhimtZGN3JXEwfy",
  "key24": "5eRghStisFvd2vLGLaX8Zwc2tQ4EbGMgUycSfUtfsQU7JQvxgqw1YKUKYiqcXTuSfFrB57vRGW2Y2eEL3Lt9mSYw",
  "key25": "6AnfRKHDK3e8zsj8DqqTwhJqoQ4xKzGncmrubQgBMecnFbKMvnrMqguTgD829hA7xnYeuXjsqLVXJovNxZ5WGPo",
  "key26": "5iFHctbm8THzJio5xyuoNkA4eWay4uMGb9TAAPeotwerANsEE2qBNrpPyiyhpKTtZWrGAsFDHKxfirTWKh5dBr7k",
  "key27": "2ze98de9eYjdGpECL1GvKZixvYukwWXiYwmn8vYr5quPco8nhoNeJ1MCgnn5ZqUydkwH5UcZFZQv3WfjUJQKzSZJ",
  "key28": "3WZnUmj6JziX9qpKzRb4f6v4rLSu5jFPjN5efobxRxNqADAbAQuJ4URsBWAo1TybduG2rYnMhyvb8r2sUeXdNhtZ",
  "key29": "4oYBR9bEFmRB2tK77ETKEo9DJrjRVzYowJfxXWxamJBbjQx4beU3xkHsWNh2bUr5UWUSKz4X3RfYB44hVzwN9xb2"
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
