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
    "4rrWWWeXh7PKKwkNH1SVU5zEQHTk2wU5EfrZAsM4YdCCL96NutwC6C8HTGonNBcSQoY1YoPoW4YLFio48L8seddY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3tXL83gg9tPgGsnaX9UmcA4JYABhSPwWFJcSFmKfoY9kPyW3iS9eab9KZApzHNoZ6yXG3ZBRoETvEaQTbE4fmJ",
  "key1": "2RBHvBB2W9awxbotokPsLdkipfRL2bn85Fw8Tjpb1e5KS8MVjsnCAqHEAGNMzwDqz2YhRpxeCaGCfwHWLw9cioTD",
  "key2": "3yXWGT3QyaMBYwAXLZzPKHa6TCeiCkNjHPgMUiub1Nb31PuTqWP1K2yBcEEzv5pvhdhvBCQ4rNmLNESrmhTEwSR6",
  "key3": "2NrnjdshjJKHZpSkKtXV3pJtodCcmtrDqpg8u14S5z3WjUVor2t4ATEc18XckeSH2zWXaxodKeAxiBV8XzQHJ2eR",
  "key4": "4Xj7zy5s4tWEdPEv8VrjYZFcdK3C8igVcdSNP2dgWsLWEwkS7KBe3XYPX38Z8kTspqDVsdNbyHttPAEuuWghr7VS",
  "key5": "ThNzRjcEbEgLUUbjnwUPajXybHnJCHVZWSDVycS5jQD36hejN4mowaGKbGTcJfa3GfGzaq3XbAbckmwe8bNXtSK",
  "key6": "5NiGfGK44mVuh8qheXkWrMTNHHHXMR9hHomPuXnHiG5PvVLCeCJf7xSR1ztDUxwb3MJXKar9SBieb9caKwh58v72",
  "key7": "2EheYDM5t9RGVAtQmjfrSHyRr3DLwCGbmYKuDAfACgew3W1u3pvau2cydewnGewfTXm54gjvR4SWquJJGP5X27Cm",
  "key8": "2ZkRF4iCiFrCBSsX934QtVubzcWdkiw2q38WYrM3HrcFf7dj1vYghguiDRUL9m1HHgHseY4BBLwbAFCxHc7Jidqn",
  "key9": "4zkaEmDPQT2uWwrgw8i592wCkBnfLgzkSY3DKAQTSwJdRTJQNivdnnCDHxh3L5BKRDsAuCmKaUo5p3hiNySEm5Dh",
  "key10": "3hy5wmMcThy47168i3qdTrugQDULxikUWBTzCFnjS5UtEKnfYgSvQCWWYPBinTnjM5Ywuk75evA7ZrW4kidr6wef",
  "key11": "3a5G9rZ5nD6EMNNfxowqUoBJoWX1ywmLHZUAsfLdm4sPvnetY5QPugGgU1nebwNdbRBrkACTt55Qz2vYPYu17rdt",
  "key12": "Y21qGBDRtT23Rvzi4dBdbniP7tGPL3Xw6ufuAEbieMaSHEFugBmCcJZwbfUtryX5m9rtjLU2fjuMuT3SSsrG8wL",
  "key13": "4NXYR1GfJXFZFfzGeSfSitjvvEwSkJsDMX8jRAxkv5U6kAqbVpvbmeDr1DuTsq75eRcPPyGSjSccmZvWmyAo8DJQ",
  "key14": "5d2u4n3SBXGNurkzPABCPDy5fjxAoXAoRtUUmrbuhjXR1ks7ni74heMCgYsxszH1X6oxbJj9mV7DxJhfj59Ybgop",
  "key15": "K3exa5D8VCJ6ucv3nMgTtdGAoYGh2U8KuS8jGNnSqczBXhidYSAGHKEJvFkmhSnNPGFeoHNrCxRDhXcKTQZiAyz",
  "key16": "5oonxXiSahhCipd1hFNGuNY4p3JGdLWkb3YujmkDSYtMwuY3rhseh4NEYfL8A73cWsvfa6eox86gzWqzjoKiJEo5",
  "key17": "5X7Gm8ccHbS1TVMLLaoxWsn3xzEao4wBnz3YmLb8CMbZcXyx21pShvVdnu9FjNccTAGJeiAEbehqdYxMbZxwNaXG",
  "key18": "2xqQKPEUtaXiJdLXXm7zUatTTkTVHS5Y1pNpFWHexZ6cnw81aaeKZsSwKHpg3HVE94Yvnbsv2oZFRqSRS1Vv4aXV",
  "key19": "2ufVYFNGFp23Xur2F43MYSXdyDwLKUPinzxojUzVCkrp5KvVknM8Dxs3Df7opuuuBrmhDnd3tAp3uVyRWT22wG57",
  "key20": "hLgm1yKXsud6KKpRtuvmS2iRxDpnaxtugkwr3Wbz7tGuWBYWQanTMU9fDf2c3FQSKef33EoB8jpofaDTMj2FAy9",
  "key21": "5xVmFTvVenit5bkRzSqKb9hn3svKZorSEP1CKPXDV575s9cXoxp6MQyRhdCzqNEMUFbqChAK6P3K5jvUiKvKa77W",
  "key22": "4rjCBc6N8PzE9LjC6FfYUHwL8KyeFfBB3Rz7yXpmnpcjkyBTTkQqC2bXNP2x5AQVf7XDkmsdH2G3RWHG1uEKQ5Hb",
  "key23": "5cekjnKfTMnAtJigvxwzk8dTrfTvesYjeWLU898QWi2QkpVFbAA1hAuFSUQ8h9gHvaEdMy89NvJ3CuFzMSBpwQwD",
  "key24": "65At4bCcEZ7iRGNPKbtJxEbuqNzghX8NDvMN9FsXrQP7AyNgWwnMZfSTX5hGaUhEq226PuyWmbVsa3QjcpzLLqj1",
  "key25": "eMhgMqRVijkG2PWjTLUo23bZRFbGGCN1bhrkFu9jPeo3hH5CgoW59vTNVVRxwUxMuH1KiDKc95AG7GgCCjv7M7x",
  "key26": "4sc5yPTX6DTqFe71uZUrHQDoiEDTXKPYbvD7qf2VDkA4Ymg1rSWP8aeTNtRWKusDk4QRK8VvrZHjrkbUQTmRhDDA",
  "key27": "uSKQKgnmY67gjAcSd5xVtN3U2ZQeNhmjsLgmjZ4exJP1ypMoWeVG7KE73EuuQBGd313GEtNehdB4gL6kcrfPYx6",
  "key28": "39j2JbrtgwaJrVLz4NBtjuqxo1QwZDvD9UGsCiqZUXMJVSd9ZwsXwLUEioX3Lt7jPnqrvVeZFryA8pjz3tkCzBNe",
  "key29": "4KfvfZGrsG3jLX5cvQQi2GuZEhAptvWZKFPJLA6G1xSoiJfjHVMgdR3q7gwE7uSjvrPesrZwUrwx2pBrA5ofMDJd",
  "key30": "2xB49ds82PRrnjd8nYsTQ3k5jhxk96esyg8yNhvYF8sxkhgnJHSLD8Luyv1YbAJLxCD5QyShEt7WTAYs4VM7gUB6",
  "key31": "Q56jEWdzsUN7zN5eBCP6EvcBqNwNd5wTWzVrZ9eubWW6zDqv5J9zHobxxbfuPxWuk3viBZ45qQT6TjDhftNu8SQ",
  "key32": "67kfcemGHJNk6PrKjrsTMhQgUvUnEm7RjSBSYzAAxVkYqtSmYojampShTkAEPbAS8v4cab125VvE2MkkdavyvE2y"
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
