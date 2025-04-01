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
    "2Q5Zy85rL9RZrMm7KyPYt6XfF6LKWnUrTeKJUqohCipKdn2DcsJxS8VQATB5hoTRCEtqVzb4SZLDpnTXj9p9Fq5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbZ1GRB5v2umwTSe7jtMbSALdHy31iVcSRQGNjSasKPg7FA9KtWArGKvNDqNE2mHmDgGKhcRfRuPkn35eX9oQgA",
  "key1": "3bd4F7gG932BEwD3znzCdX9vQSVQNfRDhD1t14fnva91bGiLSB3khUjq6boadpUzcNGecv3fJSCk2LHfUphevsKj",
  "key2": "2GvNTnJye8Mijd2MpkYYMfRJFSHPgvAPzj8JrG92T332mqKXk5ZqYeF2gNVNP2E8JrG8DGEYpaKrGn6VxWMAy6wW",
  "key3": "5EqMwusCmKWQhhqMr9mTLnpqWChJRHFHD44kzLMDBXZkpPfXzTycBnnZRbtpzoXEdFJM1RwChdaCgXFKeugzpjdi",
  "key4": "4EckgY94CUutML39z6y1b4XaFsSRt7EvM6xM25X5sWVZziRMqTV1cQb1iJRarAkfBcAuZYGTnGPEFhtXsz2N4xKK",
  "key5": "22SSspb698rT1YVQ3C9vggQMvpvXGWztuddK8pacSjT8WZEPZQf5DYu6UWC1xDLiLyUfvg4dVmXxRq51G585nhGZ",
  "key6": "NhvdgarVqEgc926Kso7cbPdTYj7hTgZByDGc8q2jZLsU1dXqhFxLtNrsKXn35ev776Y8Pn9M2ZP28omhrHwfBwJ",
  "key7": "5BT7hsUSVku48N2YVcBcFQezcZXmbjk5HNGvob8eGg53Vz3YnMDNHu5vXW6y1hvLTfeV4aKAxrC6UwRTWj16iMab",
  "key8": "5qHHDuohK2jV83feaocjj9LgEEKqAMy4ydGZsxdKJpHaRow7ZQv563rGb5vBSP8VdkfUSN1SK9krQpgADyADA4sL",
  "key9": "2ssezXvhdsNKyaRvFjzvYUgRtXH53zEcjvhRSf25VFaB2LvePutY2GUkTTBAG7wWjxTedcSikzx1mBcWsNKK9awB",
  "key10": "YC1M7uJ1wj5Kv54idN4Q1wycw9Bt6ZW4Jsp33iudFQSJJHXzKwB5ifxp2ifvDsbc7adsVEbE8QBwDLQBN4Adk5v",
  "key11": "5bCEfuJL2KcLv4HLYP7UtH9MbRagyk616LBGvhhwTsvgMBXrinQhEwQ2Me5eCrcsJzHEqhSRpMt59ZaxVAbPDZDu",
  "key12": "5JgGGCSjVBczmo2jJmPDLspuyrhmfM9VLpqyBE3mbrQ3JNoFYESriwyFBsmn8NtHFSgrj3Md3c53WEsNShwiFWgk",
  "key13": "4BhFdCZ2BBzYvDRWvzureQetvvx2k29DMGsU2RYqGxfiHkD5yZS8Uh4QcQyt4uyhqHmYaDxfu8iYXErCkb3Amcjy",
  "key14": "2UiTgZ2Q7K2d4JP7ifWVnzCHWQwh9kQYRTbTq7C9W2FU3QSJmocSEr8DWYXgW7Wy3Ng5tPfWyTNY4Nf7qD4vwjMp",
  "key15": "o9m3wSkLzDC7jRA3jNHsppSWZnGcTGtz1JEokCv4JKtgrSNKPSwcU8VswEPJQaNdjRm645JhhCHqJ4CfnHnTFDg",
  "key16": "4niZg33dKsE2N51KViJFEuT7QeLexNBwgZC2FdWtnskTW7Zn56Cct5q7QtGuyJXLtMdUuhsSTcFEuZCx1AofPdQK",
  "key17": "2WrcSJLi6hgApi73fW3TRCmezrV15wiwrN5ryBRqUUv22CZosfY6kC4ZLyPRhqkoamYZ8XMgKB8HNA7WLW6i8q9C",
  "key18": "x7vMbP76RqWoi5wSxATGEccnVYqRdUX1p6EsMSvGVW5EcjBQgz9SFrkwdr9wdiHEft8RWTEbzgejW3Rf2VFWHop",
  "key19": "3WXT59GRzyYwXaWpU6wP1pfRumDNLuED5tPV3RnhkHw2AZTKx4CxfgawnhrXGmwk1kahMQysZNCBzjDNAAiPcUMB",
  "key20": "3Fa8P8vzjkmkJDAsWVYjh6LH8x5X7NRoMTHyW7TqYmWNumzjNZHuueBLA8YMVP2MdT3P1e4zJAatke95ciBnHgFL",
  "key21": "3Bt1Xy6dXZovR5tPnemUf3QCWcy9eZR8AQD8aKK3GytKxpHjwY15cvz6qPpPXQwna6cq6dH25Sf581WmvakbHbCN",
  "key22": "5KKvh7GnxXmEQsdRtRhAoceiYca15g7ayH6h4GkYxhcdjKnmUf7BYeR7BqdAt3eULyeDHXpyrWMrJ8uFQ6ubVbQe",
  "key23": "2Wv2HZJ7oT9NK9UzSc3CtxydhMBpAttvHEsymmpouJ84aFaHcvttPHmC6C6ASjXkzVg7UacLKNqXnpw1wDzxfjVK",
  "key24": "48atGvyDhykZbMFsC24iMRsAfbn7QuWetJSvruT3p6JmWMhvmufEXZ3PJ6WjegC8v4vqrWe3eDH3UJhSsfCSthEX",
  "key25": "3qDj3cTSXXKkrBBvjJmBvMmhW2niNZEuqRteTXU43ZWQW7LLm8Lo4wq4rGkchHD6tNjEQsmncRMKnrsHmpUTWiKf",
  "key26": "3ao6Qdaoa9dupho41hm6H5PKMZu7omvzjaV7rjidWdcHqaEWDP8Duz2WxzKu9oyw1k2carS1qBiSNQMne2Hcw4oR",
  "key27": "YZoY4SvXGGi3cVQJ6kvbjkiFDD9A356aTFidvb6Nw8fo3pxtiZppWdnsu1LXAQzgcTDQf3F8guvLavb4k3bvVb2",
  "key28": "2BxszWoWHxzLgWjGpD8AhLHxQLPwJnsS1XPKPngeewVmTgH9hPFNnAHABGy1U1rZGcehcndK5SeR3QGxUXV4v4J5",
  "key29": "4ZBFXmWjEK8Wdqk7QZCRfP7fuRkbun9XnbUWtbmb72gswQpNnZkRippbqSUdoYw6kWmTA8ckDimNpyToCYYjf8JF",
  "key30": "5H1Zowfnd5wejtLsbfAvJY6e9TmbR1n4F5SHsjXGPygJJdXAYdBr3dT7HGycZwoJBv6GkGGqrqhWkBLfdycBVRC6",
  "key31": "dphGcEgSe2eRkBNbc8Y5cT4kpxQ6JA5mGjg9hbrkB4bFampP7hM68bye1J41GhRdWFzC8Ys62UvsBDSH1iDcKZk",
  "key32": "jM99oQdceQNd8QNvZem4DTxXdFZHLctv6A9xx9Z98PgMZQ1fR8xwyRY2xYcJgFvBRF5YUebccsGoMgoCi4pgrK5"
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
