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
    "5T5a9m8H1mnt9Poo1jbBwu6q7XrifMmLv6NvqrqZQdyezUCgJF2mJi6Xpf4TcGoHQi5AYGRWzfj1zfXUPBSaXBKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmfY7Wa892Mn4zs9QAsRVhXPdwaoCixHCJycY8YRprRG9FTd8iRg2EzACWWSqweXgEAEktjjWohFVqmHotMEafj",
  "key1": "ZzPsF8ivXvCsi5DnZADtAin1kfatczGwCJ15WAnJd1oQTHtrX6GJeRu4NZ2qfdRPfwgDK2f1MTkM49gepi2oHKf",
  "key2": "634WkGVXGrYVJwRxTxfyLqNDE7Whow4LDdojCWsxeGuAxs9QhyW7i3SVzqM436Gsm8z2EafeduvJXzgzxAUhQt33",
  "key3": "UeZYNnHTt7x3QbVxan9oM1PnieqcuTa1bVejgn3AKuKTLgy24SKXVDBBR19mXqvn8zDYrQUxBCyZ6bwrTBb1QAL",
  "key4": "CuRGSUpPR1yNFHbeEujiKNS8RR5km2RJdhVQfRSPEg1uMWS62kMPuvUbLRZoPVH1bceVXco93yUEFuuDFXP9hTj",
  "key5": "57ifjv1DUFNhq1FzuEMidZt9o92AGvoYzuCegX4dujdvt3LnuKmcSSv6j8hHqoKQ2eZ87ew91og29261DLwYPSYn",
  "key6": "2yt3wZxLpujDYZFJvKgnFS4dbbtqn5HQ5nMD4GLvhEF1cJ3mhSvf2qjHRXjpYJRV9ikVNoECdi2YRw4tZ8tTanPi",
  "key7": "4L1z9XhZ9gADDgwd25YMqV4vZTaLPhL5N2xHsCYreki2J78ac6gUmKQ8bNJscjijGiZ2UH6cDrWP5w9vqL6L8xGU",
  "key8": "2MPE2UGQsNeu3iK7XVkUVzoHQBcEUYJ2TS5xsY8LzGkiTAtfAZux2nSiotGimLcZEiE3EBK3wVTA5rTwCSps1Rxw",
  "key9": "4toVBGUM7hZdsAtRYHLxDzeBYZ2AzvCNb7SwNNnexrXk6mLmSBAzxopVNCzPxYktwG6Wh8xT7amcev1gMLYFjEqY",
  "key10": "64GaEToFePfDoMAfHDFyEbqPrhowUkBKRnYhg9jtq7FyKsVUJFgKR8yrhN7XLrshyTr44T6oqXRfwJxEBWQWSAd4",
  "key11": "3thSqzQnvUHr9TXfnaK7XEoLBEQcrKhToFMaYoqt6q2woeQpjpBmtSs3w4h5ku84fwpfKca6T34EfDpwVLeKrraE",
  "key12": "ZZzf22dh7szdJZUwYrgFBVNX5FkCcerusu1mQZAZYZNEq78Hs8enY8M3QB3NQ38KEYDdZcAcP8dQtRx5rCx4xRG",
  "key13": "75HHtSnxno8GVWkq1jEnJbEargbxycofwTPzo2NJ8fcCnMWPmvxBj1CDH3abLmaj9Zwn2pnzn37GCAfZbPCWcfg",
  "key14": "Js6zyX3xV2Fv3GiqNikpP7FRo4m2TQasDmKbNHFWbYodhiKKN26AV5nBLaWtWacWmaXPdDMa97jaGSEPSgMZG1C",
  "key15": "GFbFCwZDtLvCiTHugV9EsAaLL4GMrBDtB8XHsRTNkRZBphKwgjh1dSBoaAZrZkRVZLoPD3fe9Q3TVUa5UdJjx3n",
  "key16": "2oXgxFvSpsKh9WjHSZZdt1SQaSjCKWPVmBr1bBdo19mhiZoeC3XCr3JkymKhDVSiDppWubpZ4652VUHYdCVaX5oo",
  "key17": "2Y4RYHivj8oUsoofTorEc3YzU9Gwz4pHwQb1LGGQ89skQTsLZidjdmUnMSpTWWHoU69dKeWt53LEQUs9BWrsBAXZ",
  "key18": "2jYqCJY4rXmgLRU2T4pX42fZqqm7tthsFuWi3zE2dj7kTYT34yi5y7Fd65nEjgZBoLeXSNPxGzNpjy5T3aAhnsqE",
  "key19": "4mchnxQHLzD9zbqnrm42gghAdqSkACZQ8Vfcb1pNmMykRTXENLKZ59DuF6bgJBSH6s5FUm85NJtzNYpt6aUs17Ga",
  "key20": "5fAoL1VvyjeWGhAvNAas2mEr1tFwyktW2BZaG7n93ymRRuh1RVZpmq4ycoMNcC3k1tfhkgU1ifKDCpgPVS8msQys",
  "key21": "5jWq5DcsKiMmz9XEjW1RWxtQSDAijGa36yeNZuACy2mcGtPMUgSAT2oCAoS8xCcNR2QQ222H3QQRdpkiXjReCdmL",
  "key22": "125NYsxfcqSDv514MG8gxhMwrmpu64XByimjtvvtGj3oYNHKe5BjKPP2Ydyuu3mnvDqS2GCLuZyWsbxtaDznf1tS",
  "key23": "5UKvVghWWPaun32B1RuwMhnsXZ8G7WKLoQBNz3VpezjtEY4s86MNNNUB4u9bothq9yJuXyZ3ahWyYPZS1nRfDQSQ",
  "key24": "4tjTSv7ZAf1ugUtbrquu8HPuCfTcvYzpGZR5HM4RBSCinfFjpe5eUbjfjuxwU8EcmQjYb7zrSsqrAALhYTjXkXdS",
  "key25": "4Y1M5PqVEHigjaBeS38C496fH5qJtdAHEwWQp2cnPDhXMmfT5avn1gS3Ccpttgmkky7RcxRTDjoe9gGe8TJmCY9N",
  "key26": "4D17XF5sPFm4iC8qkEUdq4P3h99vp8jhY48yLfLucQa3ENtT3kXef3ZzVFWJ8tTomrpsExz2n6i8PYxyazSjEdm3",
  "key27": "4aLGeGKtppYd9xpRAbyXnzMEgyP931aGNK8eKXhWyCp8soxKoBWhB8Xzvm7D6gP5os8jWXD14ygUSSSQzTbYvNkn",
  "key28": "66Az2YbTBw7pRBzM9Xyb9bAUaYFdeLfUB5vMnBzqAbTr7iw8sDdjuxjU5ZXRM6EF4tWHbC9RKJ1GGJjbwpD49FYv",
  "key29": "2vCjgwvZ6p3vMFirUUfCmMwwY1D1qDN7aKzrweBH9Vo8rqntSXfM8rbMaPxW6nLdz2wWRyF9WQjAdq4CuRbfYxLu",
  "key30": "2JZiT2rKF8MV95QTB7qVAe9SqRBPf9peX6V2yKvcfoCLHKULWVuuUe6q9TsFP1zqQtCttWTSMqSovZS6iRA45spa"
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
