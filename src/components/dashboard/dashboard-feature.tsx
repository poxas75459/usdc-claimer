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
    "4REKmMLBwbyud3QBawzAkdaUARKTLrKy1w2Sncst8QERzQvKjzdUHNUjnzPopxF1oGvxynQgDR1fswSMrDhp7hHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8b3uFXWw5iLaEBF6niJ8JEJBTiKWmsKWXD69j5RifhVxxkN5FovhaB9Mv6Ltkma5DoDZfBMxw1oqXjgFZzU8dyt",
  "key1": "23hSC7ugvtgCN2PpZZAmTDDYBAhDTvFE9FMQaLS3StbqAdtpq371orhMbhJ1BkSqsnNtweESMZZjJcgqchoBpuEm",
  "key2": "4bAtYTWm8AFy2rUkWRrXJWQpyieU2nPwpHLFnHbXJE31Nexgtf1ZuZtMLMZQFnFpj3azEEdnAjKD5ghu55XEr5UQ",
  "key3": "3sVL8F6SbmSfuCkwhCTQfU3UGzQfnwZSp9fWDKP1eq3Yk9QQ8b7CGQV2aaaZ3ekua7q5X4dmkdk9igcf79ZKxzD6",
  "key4": "3d7f8KevmSMuhWQndBEegi1Ukwo1Ciz5rJTJB8tTiBt6ssb9a6Aj6hE5KRmsc3BZNCyG8fehTVi2543QRSt5aSVA",
  "key5": "2QGFTbAvmebopABfb9t8xeMk9FkPEuCjDvmRcyDjL9t7zfeVhMN4D2AvA6WyKYwZTk1S4fa5G926DvrNvDx2b8p",
  "key6": "5Z5pjdxawK3m3fkM9XMHqC9Jeuz6YtAdqQe2fzzrCED2MoCydaiW6HQXHAbBRXrsDGznbtag9cpryCPH2Dscf13T",
  "key7": "fqCN9t71ejCrovaPHznvF5Tz6oRLTGhgQsUM4w5BGhQGzhBtzathKCJ8CyEzu2SDsDZ6HmBZnh1jjpJexNDszNA",
  "key8": "7ASmPpofBaMyKZYgJaSd6BkvFgEZXPHzLHqBkYujhUKihWKNmHnMXAipbVr5R5Jk7ua6KvC4nAZ6fqG9nKMLdEd",
  "key9": "s6saUadYjJ1GDpNCEA28ujzsdQ7XmedAyVzdWfYGnMwtgh6o6GzgB9Twc4Se3SF7jGxwZsLk2h3AEnxiQTu93LD",
  "key10": "2erh6gWCPC2VxYLwijEHt5vurj56CGUtP3mJVHRmVwCgZR39Z3SZSiTNGdngKB7d2CFFy7VyBmDEMFBUfWJjr5qQ",
  "key11": "3A1p3KYHG72ZAFxA5h6TwxykEkBKXjGSrXaFnAcuTJmRiapyN5rXtxN3Eh8gszBaCZm32otsmT2u5GwjxcGCJc9J",
  "key12": "3c7dUCZk6Vj1gc4tXWzH4CN7Retv2Ar1PuwHxjESoKuFPbc7M14mkHz42aSG8tVs6E1rTVoPmg8jEAvXo8yT9qVW",
  "key13": "3GbEcNgFvQpJQXMcUZTUZ5SxHEcBMNSXonZ7UWTEYNESmAEruQodw3s3DefjUxduck6w98GnQZ5ABWbqjJcu8K77",
  "key14": "X4mEv7Ys3JeDjsJyoaeHStMVcT8stWgH3Gr4kNXxdrLiykfwJx9KUnznzvGtXPyPBjuRYwxbWm3LVGxahzxQXho",
  "key15": "4yCFoCQNasyT8dKRXzQgdX2gFgbgJw2redUjFA9o7BWWFGtAtJdidNjwX2TZNoc3YxcKxBTEGUsuyUqZfG58oMyy",
  "key16": "3ru3XQZyRmDTn8vteEoWnfX727FL8BKebk2YGxTkCFrgSr4Hjr4v7fZMBTDpgQjLrXnrpkBgMirCJV7mxTe1Sx8b",
  "key17": "4YddkFyDZPYszCQJRXdsSZ31fxP9JJXUPkBWmNXNjpDr1mBmNkgzaMYEhapgCZyiX1f2e69BoK6Kcvh5mSU9uJRL",
  "key18": "5MHxRykct3ErWHeWz1mFPMkEa2wKVWNqgsEbgWB8dXTpefYLy3xGG6QMJaYa9ZGawVVgrZQxEt93RcWeUokzXCH9",
  "key19": "2c53k9XzXv3VLmY8iD1j7XvWqHeN39ZH8ZDiBrcRTJezZKnvXn6jiFnRWRYVBxatcm48xbhy1nPtYv84FmLvtdxo",
  "key20": "2ybx9sU4qT98aDf5zRmyHWGckbBeXHDB8QmTxzyybBCtT9SDjEGvo9Gm27bfjxsDPcqVUycTz5AgzFSQxv3H659i",
  "key21": "BUAfcpZh9V1c5Md5CbZk1gwG1rius3j4avbkvM3UpMsct1HT9aFAzPxGX6Hz4ADmMGQaJWndHvMausw91C6r6Qm",
  "key22": "2ikCRWM1rCD1G1D8XrhP46jS6RSpQVP9SJ3DmJFmiyykGBB7Kaoh32LQcikdCFcEgMRGXWBvptFcpjh44BKhKAir",
  "key23": "4ZtMQvEmiWaCLzKYzdP8g6SDwazn6NZc1G27t9y3EpQ3PamGaTt5YEcQDZrzhW4udhSkfHmp1YwqfGDZrsZRTDCt",
  "key24": "CEYUNxo2RYo4yx3WZrzHMqbE4GGYokgQSyKiFhbrzaQfGG2oWwULCh3eBXoupURQxxQfZZ1wNgiM9oq4JQfKX4C",
  "key25": "4rHLX1DnGREKKPKi1j283fuK4XS8AASEmQ3t4SVesAB7FhYPydqJLorZiGmwi5ZAK2qeB4VXKE3gGKhmQ3AzHwrz",
  "key26": "3y1T4MuFHpvcoK2mjwxiUhgKkNmRNyLmWhBDuBV8StZ4YbPNvkQe3HMoM45xaiaXvm3hAvNcBMJPXJzudcLEpuXm",
  "key27": "3RHZ13UvRNMRgrhcms8HqruQhyuTavBB28XQQwRBxESdhv9eX8kAHZQccw7UJ6DWbsQmKU5viTCNoiHLZZzRi8ks",
  "key28": "2w7RzSoF9PQrU71Z3nZWmq25ZkNeb1zmMRBT7rWs1XxBN3zJgakKEt6rSuQ6BKZJQRXAoBzCxPHydpXXP7DvTnFA",
  "key29": "2FFSupZfMuwvTPVDhuUdCvb4MDAxCzDUkxJLkTbPsAtKe2ReMNa3QTyZDCSNfHbwmSs1EU99gHhPhm61YVHLZNkH",
  "key30": "5RhaFmRofE8t1PvcUEyRFcGeRXVFMGP5a3KDKQhHRrHs9ipsSgPiYMM5tiKJqZFhPXTyMfbQpsXKGUtLMC5aqwpB",
  "key31": "5fcJzdJorYJd1DkVroNNUa4mJvTQ55NhwHoxgWNxDquNjgVFm7i8Ar2PwTrL1U2zLSAqnZFVqBw6G9gvdBa54bpT",
  "key32": "3ch3M8SnhUfa4QhvuE8ShuvJS6yFRtT1oVydAC1xp6vuwwMX1m88eSgaqJav7RtQaNESaGr5h93soWVLMmD3eGPJ",
  "key33": "2FoLx3Qr6kQtbbvuHsemfVy7ZyFpmxEAQFzwZFhLeMhKER7S8SG9PnbNGWm98NAKxeFHpB8hFUux28Fu1K2fPjuM"
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
