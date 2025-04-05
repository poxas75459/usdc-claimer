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
    "5wPJWJWZDnvsjf5qAiHRCcahD7peaHC7hxBfjC5WBEFm6qXE44gdQxzfsdjeuxxeTJvwSv2UcenGLcT9Z4iwDk8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iE5vrUKsGtw9BQ4sn8xQcubnH36V4vjby745djZaJh7XkCRncWVKix6DQMy2fdKkRsqVsttcnWed55n4TUV9suD",
  "key1": "2K9RrmhmHnrM1BLRfekA835LsHGiX72u7VHLG5L3M3A9wNgtrdGX3foAcvNJ2K9QgAbeqJvbHbHNLgmFWUhrJnJF",
  "key2": "2jD4ey3NkhbDN1Dyg2szXZwUHnsKMTV45rp4Vmv6ikHeWmGTJbYrJgd5rgbsgrbJow37AdFnSozNiiU8ofikKMUr",
  "key3": "3CEsp4Y4o49EGPoHQQnLLiZWyQJon9j86WARAxgn2Mhg4JDb8u9QfWTbzuFjiwBCMTDNpPUBNSfAyYj6aEq3WRkE",
  "key4": "5xYJzWVPeLbTs6kToRqzuNX46jSmYehgPXV2EmfY1z7PWqJFsXANk1HyWtb7jjC7KNhH5A5MG3rtJZ2WnDASu4Sj",
  "key5": "4m6akERTNSrbHZ1nDQ2jLDEHHTYuJ9xpguT4SMh7zXR4xMNKbS1RCLC5TdLMTsmRWgTUoKgmJmzQBxSdsMtWX79L",
  "key6": "3AGeHDGhqoba1hL6xf18BP4Jy8kMzr62myxvDF7sir5z2xU1ad3YpzUz1Y2E6rrAwXmHV6UDAx6swqfrwxmdezDH",
  "key7": "3fGnX1RvkiJn5y3wpy6xNaUiMPujEgChYtusG5WQ1BUb9cXL4N1cAdEBuW9KdHZB2Z3ueWfcocy6q8QKNCgQw4We",
  "key8": "5DvkHogWWZCMoh4SaPfsKAxj1u6uGsMnMzqnL2byScJy1vALMafNs5kABnmsyyYkCptocS9UFdGEgMPGrg3k96Gb",
  "key9": "36XL5LgopVcrN5irQaRvZvXh91kNWJb62eVzXFesk7JaLy4PR1afpqrVNFAfsCQGjni6xRnnF4LVpSpNTKzVuVHx",
  "key10": "4zkdzFTdjWzQwDTXaN8Yfjux7to1URAyffPtmGroYWwyCPPg5BXu13rNSJm4ExiR9pnibLJxdahLwDBAWaAtiXu4",
  "key11": "59naNEF5HPAt1f53YSw5mMgaAKjgHMypCpfogvkKgc7U5Pzv2WmwhmcNXpTcnpZSk9cisQ9hT5sBjPraPgTwgvtX",
  "key12": "3vj5enHnsC1xuzKhqFEiTpdUwbYU3wh3LnnC75ez7oREfB6UmELuQ3iahbGzMmvu38a2Zi9NmLVKPSAV3MbgRMjD",
  "key13": "2nosQFtivrFQHPoERRRaehUBtpZ8juPkKDDRyUhtWHT63NKD9cFod63A8GsZXtSB8vLbNjb8cdEKiP1uLC1rLrh5",
  "key14": "5AimKue78DumFYb6CKK3FyLGBeZZjnVFShJLBxov5Y2Cw1Bjv1PU36efPgiMnv5T5ag62axE1Yna16jGjPSCPmYY",
  "key15": "3zN9WkUaT72p66o6vGTfERZpuvqRWCJVmG1fuy6PC5EEqYZ7vXRZf4aqXeuNFfD6tyWHRBLtFP8NReLSTRmH6Zu7",
  "key16": "3GX1aUaFDXbfLkikHeDrgK3axB87BRmryvW36e4SENf2QbV6ZP9Pp4z5Hfojn38PgwNCT3VubAfdseUf5EVduxWn",
  "key17": "5yB4RzJrnHhUEr6cYnac7HyzsNb8wRgRJsCZLYzrr8LD79MoPPBNGTk7ySSFbsVhAWj5RZFdMTU6CH3KrzgASZpA",
  "key18": "2WLJ3aVxFyASXRpvzb45HR3U9o4rwwEAphRMRo5imLxdjegiQfipip774BKytX68yWunaXgRunrvtRbtkMQTrAgL",
  "key19": "e8ikiXeR3HfdXtSTW3cdiL3214gyMwAUd82iCQRKgU8i6XmPijyVpu56dVyrsJ6x5nd4Dw2PBpEynsmGmT7sbik",
  "key20": "3pBw8NTZbd2hTAxCfGnp5fL5VgpyjsaLqidCRzRNYWSE8JKpfKBKRT22nFDv1Y8GEjtZBJihWoH3SQpKvS3y1CM6",
  "key21": "34XvQS3YvuyoJqeV7WbGrvMercKt5vtSXWF7hy3V1Fw6CQdwUfy2xDP57a2v2ZZQZVC7tWp2XA1hcqbquirQDCFq",
  "key22": "3Hj76T76GE43KKV5aFPadAnKoXX6TnBFo53rEi5YZw1t2W2BDcmSVHaPDvjyVr7cUdNiTEGSa38UkzzKZVvrxoem",
  "key23": "64K2KUm7UC5CJ5DPtWb9c4vhHTeqDqn6SE4Mwqd28ctmWgsnbaUki3mkza6suNRQ3NqefuCc9y6JArVyBdgyLPjK",
  "key24": "3VNyUgoMwBJ3pHnhbNaYJsmPN4ANYskaUQ92EUfdWSpGHPp7xrYEFcBXdbE4vVzgkti1U9EshAFXxBvUW3Mu3ZyZ",
  "key25": "CNqQyvydTakAZeqqfHWQ6XU6vFjLdgERV814iRdvarKD1AFwdL51wmXxUn3UW6oCBZZX88e9kuLkbydihxjjcxb",
  "key26": "4msZhioH7kVHAvTE7KAPuSzAq5TcUFJ2nUL4qoJrVSpZtAwDacfamt1BjWRAmDP9krJhBNEZurfZdSXnqYxw6wgh",
  "key27": "2bV12L14VKAYosoDf3xGH9T3U8TQWZzTmX1T9vUQVjb37ie4PoitxkVdthh6EC4y4ynf2jz1XNUni7sWi4WebbMh",
  "key28": "23RrnAXNeyKfbZerg6hP8dKKUmvUcdRARmfBiwaY7k9jshVmnzCQnsp7N5ZiA4odbNnaKwGcr1P48PxvGfAfd5ms",
  "key29": "5SXbeYrf5GK4AKzseBShXjV3frbnPRaczj2J4FHjimGwB74cf7q5xFsj2D9FsubMfWXnU1KJoGaEgixSVeWi5EqL",
  "key30": "GYTFsUNWZ4ZE4wuKEbgwXMczRe5yLuV9WCPSqLddwHqBgTCeQ4HheN4q2ZxTdxF8gkJijUggBStXZTpzzAjgEjG",
  "key31": "41vk3GsYbU9TYS2hiKBDDVd2gZm4pEetpVrrJvshLws2zpXwcrUY5B4ewmxWxXXWZ144q1GRpX471yq7pK84EWDm"
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
