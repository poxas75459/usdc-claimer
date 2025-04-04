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
    "4RiGriCenXTZZvYmbfZXqHVkGDHS2UWahHGKS376WiSbN64ddEwz8Uecb5ZerMaKvc7VoMNFu8MQG5CCgEEar4QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFNBZujCDJqbd943gzFrLN7ZRoedK5tWstucxXmpwZk22B5sdrEEJtCEQZDokE8sDiE1oUnzRuQorwtgo3cJPho",
  "key1": "5PBETYwSujfcdRnuSTZiXFuaFkpmZ81MuTgqSWLy4RiLYBkuXMe2WhKeX6GN6N3Qk7AFUrxqXRob5f9o45ioVT5q",
  "key2": "4mSBAieHRLc5DyErW6PcdjguTeBGhGx2yaBfw4WWCBudZviiUez8WU2bZRKkiPRXdyjkiMLFMg7dzcw9Qrn75am3",
  "key3": "2r8frWyCCmA2aAGUTWRsKN2YpaSofdKwT9pH42Zuaj5RUyhuFrydSqJQVi7xucfjV8w1uyvCicSMF3MXhC8z9i5W",
  "key4": "4qvwCJh3yrE7daeEM1nRsyKgD7L7FH5yqAv29Ac1YiqXG65xPQBjV97CbY3uSo5oBD4bVCeQJMQ56BEp3VDtU2Hg",
  "key5": "2x76N1GVhtWjfScfMZyv1o1a25UvHspDfMd7Qguz96XoTCee4fX1Tz9ArbTGg6HPq7uWJ1fs9A5BBS3ennZ2rUcx",
  "key6": "iGzc9jD9PPMHA4n5ZtKK6Nuz4si3hENitXnPBMHjbBf7jFmyvNFkoWFfVw6kZhwvujPv6REytvwk1wVACdkp4Bz",
  "key7": "Ae7D1hJrfN7ghm4YsdexH4dNqK8xzc9gduJD3wWKea1Jk2VzvuajF91R1FNDgRKgy4tX1nKgMY9tuDc585PzK7e",
  "key8": "3Y331FYF44o4pZ7nZdHaB1RDyEQgYq4pGwfAir4xMxKALBZhcyuQUvCwdwxwHHCrtfx9nDgRWJPvEYYWQQrxog7P",
  "key9": "47fikk7VXinxuwgrpUk4pvbzn5pKpMiaLNTo2CQDDKSKJxy656u9SJc47T9t1ZEdT9JMmY5hTHL8kj4zJhax2Jjt",
  "key10": "3meU5TDgzKfV1mQMrAd4PipYENRpe7SXkrzBu97UKxkLqkSWQvqCDzMPFmCnPkEGRtoYMXEBotF9E2Nb63GMRXMk",
  "key11": "QR1eaftW9ZMDQSHU14dBjjTeMFSZYRp9wkYRHB4suB7yiGk5EBxahBSQoFFcNUNDGSh5JVpTUBHxFB2wcr5r7PT",
  "key12": "5nDU8VtFctkBaHuuxCooqgjiHM6HBUag1WukidDffT61uQujW3eDYLXMgNX3MmbRo7UwCwBqG3ZoMHWTg4VjK3Wz",
  "key13": "hy81LdK54sJwDHgGKJdLPbipJT7vwkuq7QMgWoyfQs166irvhDkeZcVtSTSEAdxcexgenRxvNHUyn5TnLwoqyPo",
  "key14": "GkMu7KZtjmrrrzmtHendg7mbe4FKSd2PJ9NKczZ2kBzSZW2UVnQyeDdoasK5F8ts9SKFskc3YiXsNQAtnQAD91T",
  "key15": "2RTjzmnCEQjRaxKtBVchuEo7ky3Eb1tsU4EgZszGZoj9nVkPKuuEdboRFyUJ9enAvbUsufC2nzZpdgQvFrd9KSkK",
  "key16": "2ReqQ33xfbyYXyJuwDaB2W4o2MissiJXaz4c8c2JrhGbiZ6daevUoDsAXqgqb4ABefBMExZH5aY2eEWmWDjuCyqM",
  "key17": "3HvmWYQYu3vBd2wgkGrVPnZUKFaTALnZifShat4hQuMrw7dmWdnWoMenwNajopFcoH19svf5BvPikbdnmCA4qPtA",
  "key18": "3F63uKUAzQtDhvpNw5zd6w9e983JGKGrkomSi4HtTCKkjaK5DKWmZoHZsqJNRLbBXTsCmdwBW9ttYiRn3VG8YKf8",
  "key19": "49MzdytdCfQwZxVZuKNwF8r8uC4Y4jopYsEXmMehcvxbPMch9DDb6CGJpVJACyY7wDVwAAWSpBC1xzYNvS6ttCUf",
  "key20": "65n98k9iXZncrZdzMSjaW97jvN8xPwzWdzFWFxbVCfcC8BQ4bMcZRQgRxFhNuw3Ho2Ni8Ynu4WiwN4B4wbGMLuvz",
  "key21": "3cHGTxxrjSmikz9WMh8jPvQ4LaBTBoNfGMjFYpyxEwmQfRHVznb2K3hx4rhR1bSmtVE2hbYNmR6GZwNuEtZSgESi",
  "key22": "3g9jCmW7Lh1TqPq3AZ8DU2xy5Bu9CCM3r6UAao7MdDmSpfDCfFzU4H3LjR5eAyXYCMaYPNLF53NeWv5f7AmukgQe",
  "key23": "4Eagy272u62eg2JpfA7APLeb1fT2wdW6JzuErmamAFhujMvcmnWH13eXwZeNskHPUc7oizafzqc1J3vU8YQH8JU4",
  "key24": "5jEfojRBtiPCWogvoAqMgUCQLCPizPdR3ZQQN5gLXD3AtM44tNnDu1qWd3QG9PU7j2tCRxJgodJfuGyQGJYrCUct",
  "key25": "2sdQPSBESadsqoWoeAExwJRMpzSRa8EJ8c1rsLT3YpinGuVVuw7pPhcq4PgaR65Xw14wz7mMwBGBFQagqBZ8jbgy",
  "key26": "43LjsEdVJnZM5hAUpigKoGBXRdwZv98E5JnRGcVhNwQjMDbVxZZ7amNd1NibwMLUBLPaaUNvZJDq8JEn1AMwUnfd",
  "key27": "4KA6tRBXc777NuhzkBaqQaYo2xmto91FS6Ji7e9YXvz3UJ5UEjj6a8oUp5ab3hr6sMCxBzfpkBBzU7yhT2GpK4FU",
  "key28": "33yNoFx3LBWzJb2QEVSx62f1BudXLuE41SAKNJaqyUbVjpDKojBnC1ePfRCjkuV7zTnw7wFfKbRgewcASVwREGKc",
  "key29": "5xKiVXm64s9UAvXobUpMqEYJ9KHaWFbwjbNxoXDf7goR8SFsW6DeBbv7KXmmnKEa2WeeAnwkK26qBWbNreSvhAu1",
  "key30": "zYHh7mrE8ZnemYCuGxCHHC45LQFUM5BM4QtrTCGejqV5TydaTgGdzgEQAPU66LJYGFtz8ahfr4SheJbHZtKVJ56",
  "key31": "4F8QE252dznCSHMsDxFqUgWj96L6w5iKc7HZftH3wGMstqTin1CVxXo9g1TaNjfuRMWXNz8YsuDYX1cDLnXmRFcW",
  "key32": "5bk8opRLRG41KqEwCkCeMS9XwNaQusf6n7FnT2KR3yoCsMFzNExedKab2nJdTzqpdFbgF41XZM7TaQGxkLqMpdQx",
  "key33": "2nBtHuPnfo48fi6NmsYUSSrH8tBWwRTaZm7zsUzxoDDpRibMEb8P6uqUHhPvbn4W5Y6Sm69rYkUySWuW3wNBJCq7",
  "key34": "35jsMzA9FUGBpjgALQk1WupVdJ6ku6PJHQkP6yzUgATJ8VLGoB9k9AocsfVdrXtHNocs7n8NgDMRrQhv28v8s88N"
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
