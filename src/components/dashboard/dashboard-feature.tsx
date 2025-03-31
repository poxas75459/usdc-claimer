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
    "HCoDeB32VhRNusnbhNoxmf4s1Sq76uHxZKBcM5ZS8i3752x5kje3KRCa3j2zosughJCiWct3Y1h5gxxCAvYxEPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ubYYcKaZJTkCq2PRfrkfzrDBtEZLpp7jVJYSCqNS7qw86KcsnUd46UzDCs2jRqCfgbPJFCTXRjM1LCaX8JWH4tw",
  "key1": "Zn2C1xDrDAThJ4YTRgxRHfenGdJAbbrBgCB7oXNMre1PDwBjpFv5SqsGjHDE4u8MExndqPVM6t3AX65Fp1K95JW",
  "key2": "4bvyWeydtZvf3ijBdBfAbB1CjwvS8kixmR53JUfYtFUoK3nVEpLV4j1vju3CW8qT7tVdpcNZh1Gu85Y1rHaEzhuW",
  "key3": "34Gq8uXvb6d8shXK57DHxdutGCnKessW7TZiFRhgR5LubPeTNWoyT9MgzzRfQiWCwgGDFpPqwPm2fVYKuRMjFtCX",
  "key4": "5nWFmqHJyrQ6F6vM1vHfnukHgBgS38Pah8LpuCeCs7LJfkHk8vJei6Vi5NR5858E2P4uoQmPvM6gPu3UwLrjEkha",
  "key5": "2FaCjwyqNecUydKDmBhTNeXNgBJFuRmk7g4BafV1EVUoiAw2naAUdBjJnrkrU5VnWXYsZjVMA41qW1uWNMPSaG9G",
  "key6": "4SmReH7Mc41KfXsC69PWsAcPyFMNjvThTffMrLyvyhML7SBcm74y2uSmRevU4edi5Vr37pP6ayHPW1pwLPRojLYP",
  "key7": "2oWdtV5vfteX9NMMA2Edz6Gambo5H3cgvxDALnuLTXPDoaLCzXqDqd69zPPTuRpvo8VXisvSJc3PUxH6v461mVJD",
  "key8": "5UzH6VX5yS5sgbvcA9rfCAbpVZ9mtVdUiyKnTguNGgfPJyQKZimM2CTuEvr5GTpHsqoMJWVZ7yVipkUr1U5WzXTU",
  "key9": "57EqhhrrzbYvedZkg3XoYMUt4Uk1FWhFSK1Ab3VVfHSJjLnRLkvrkRe8gKFnJJF2sK5p1PBdzUtt18pgJM3Tdeim",
  "key10": "2rCZJgMmw4x1VXvh58MmhYfouc2jb6qEXLfGpnXYQjmHdr1SN32YC2u4qJVHdymRT8YfxGWX6sGqXKtJhGo2YHPE",
  "key11": "2P3vWpbvi5eshTAkAcQbyoDntbGJHb9AHTVFhAjwwDryYv8UJqe8qz2iY23ftzri5JMCgu7C1UUGDzomeHsEAa86",
  "key12": "3cseLDeFg7HoA4FaBkL1iY9DsyPV7qfFebwXGnHpx39yNQ1foSToQ9wUoTpWTZyUk9tNFM6LhgwLXMKdXTVsidoc",
  "key13": "5rd2S7TBC3AZWwQCdys5VXfeMwSqFJ9QNWUybxWRZEonrn5Rky2vG34WsreEeqwreMRPu33TB6TiNLbwJ1cvmp4o",
  "key14": "QYPmtpj1C1WBaeNpKhVyQYQDUejdLSBjeKjyTTVk2xjrBU5o2KYbnVLakFMC9MpGRgKCJVpLND6aVuphJt9nXpu",
  "key15": "h3QkirPeXJnE2eL6cqFxxHfZgvb9QLxH1EPk2S8vQ1S2oRryCfrAdfiP5oz2M5JrtLYWRaTQCeF8opfLWrVrQ7u",
  "key16": "2DBg7N6q9P5oyCRF5Fd1y7CS4QbEM7YVaHXD5wEy6h6UeVUxju4X5gqpKewCThgBi6fj1q5VEcnGNv1JQ7wtA4bX",
  "key17": "4ZKXDmFG6skzqUi4gi1i1pjzm9tJHRQjxbLM6mp5Tzs5j9QYtRcpTz8vgDWxBHzdLcM1rsWbnjrrsU4cjYn7rwjX",
  "key18": "EVApUxsEwzx6fc9Ch47k2zYibhmQ6DjmNhoL3dmTNyHJraNq7tHZE9rcokgBNMnndYk27AqCjLYc2xpF6Jtk9BJ",
  "key19": "3KDK7HEDUWwRoyXGv1sywvf1BSsNWPR9EV6AGtYg7pWjZ7QubSUr15WHedkKNnVSdh3dMeMvj68KgPWSdaCbMo1s",
  "key20": "WaTV6nbkRCPX6TwthWtEHSK9Vj34iczzsmr2z4cWbtDvLbgGTJnPcEpY2ifSeJyYqzKEYUQyiLuAtwKkXoZL48w",
  "key21": "51ENXgLUJY5in6L1ddzwCzQaTSo4GfwN7L2aDZYrkH7ExWjCwGwiy7t6jeCcj3fSfoBLY7aSKRbAYexkQSb73Qir",
  "key22": "3xavtgthededsMKsGXe1nVkgyEKSxsZNsAjGiTLXDf4bdTrLVsppXYxWDg9snCkrYDd7XifsMrxXdB8STJZVEKss",
  "key23": "4Da6NkLiQSUbou9E5GimyeP9ad6GsmTcHT5DY4yuEkcBaG5teKXi36YhPsP5avj2EfJw6NxJ4zMrjcDPLGiVaDzN",
  "key24": "3RkrJDAjs7vBjq5Bvb6NKJVd558tMQhpKsagcRmKSuXY9eiUEZzpcvuid1zXRyshiUsxH21n12bWcgaevQBCZ3p3",
  "key25": "44ZfFkzFXncAqQg4K4EXdFdpR4FHACCBsehKgpWzhQrrrMYBDVk8p7tHD5EMTjeHwc535MEnbWNVZndyx5KBNwux",
  "key26": "2eFGJXdK5DWMoRhRjQFfBnqHRKFR9wSAjC3dL4aGsKR7XHEhFJKjX2Jrg8C657tmmAHVvkFm87643QxjdKPYY89x",
  "key27": "4Ng35rjB9eiVTjRDHFpxYCFGAeKqYq2NF9LgS3NFUJkYggofjTTng7k9ThDYXL1NbigGoygLLNsr8w7FAMjeDWXp"
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
