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
    "3WPnC2i7r79yDUzgzUBxHn8kqGcd1RGqGnetf4zwHfX1eKWgiGiWzRyEX3Nw6Vj59QAkVYboaEDVs9X8YZQQXDgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H765gjHxdqaYW6o1wW1WcyPhgFA3uHabpa4MocixD3KAy4BLqhBMB43zSZ7zgSk9cNZsKV3gctv5iMKmpQQosqQ",
  "key1": "2VphrzYAey94aXfiLnggQcPZ8NUAD4T4fXL866WAttdw7SLT6DhVbsw45bUwrnsrvGhfhAETm9D8Cmvp8PYxjUi4",
  "key2": "3etUYycmRwmSaGWxii8RqkVooDwqiqzHTXsrpz54RmUWVfPEYyxzE4R5gjL6PzdbWU8q3FWXLaQLstFabbpyspMX",
  "key3": "2zyKUZGLKDs4fZtJiAFdZMWhVdnSYvHkc27HpV7KY3BLjB28ik3Jvqr9McbvqLEnuecXJsxXy91RzW2tGe9ERra7",
  "key4": "3jyfjniBdq5C18uasmduvdQDMYBkCgYcu2mcgv56D473yJcgPrmFRhAzsCWv6tSmwS4LxtCmsywPHjkZG27vkz7Q",
  "key5": "4yMQvrJ3cbhtZ3r8GBdVkTkeQDxnWHfYz4MuHdtKjswRDrTSGHzqih5GXs5yZhsuimvCE1a3qMyKx7G39HJptyAj",
  "key6": "2J5UxAgn2ZdLY6q68t8tBqhZ9DH6Bg182mPJRELrzpv2HgW1m7hxERR45MvrGxR7b62CkGVXk4wdJZvLmktGpxLi",
  "key7": "2nw8MoDFL3mvDJHR1ZEjuJLc9YUJM7dNtXQfpVAVdLGtzrmxePzrjDgd5hqrPSrDYTozdmMqMMQcritZSrVvsD3q",
  "key8": "QJuLw5LYR2rsMcf3EGt9Jcqau4rxQA4bN7QCqcgde2gzRVwWHBdCzwURZXTdceeQAS1sRvAFaYt7bbAe7LuoKdw",
  "key9": "2AmkuHvjRoXf93gweDEhCASpipXq59BKgDtRrPwtwg1KDSjuPurEF61FJB48LxTsGaGH4jLB2Pew4heknv2eHyhL",
  "key10": "3i77riRzwwfqe1ftqwtLEfn8zFDJERAssyNjYoyW4tWXKQ1f95xcmwPu2Nokd4hTRDJgcSU1DDD1XPa8Hik5i4SP",
  "key11": "3xJhTviLqodxYkJoJxGjdoNHSQf8vbqUkBrWxWfQoZMcz19GN9qvq3XN5ACiNwf3y5QgETMzmcAy4NzYVuK6yAnB",
  "key12": "2NWCJsKBD4JXk4ec2xVgMW2R2N3wDZHDYGk34KHitvzfnxYQC55EHL2qAVLyUjjxmHNzb7ttoAmS25vrnkSy6twT",
  "key13": "4mEGJvGWEr4Kn3utEaQw7NEkFwYp4dsega36LcC67v2LPDTwuHNiwBhVGJnoktghqjEeh2LADZ9QAbE9iMAbxNWA",
  "key14": "5MDDA2RwJcdN4c39pEMc2oBwY4cxC6mHSWgDvxWVEr2tw4jJFzH978yxPDiix733NXXNdYmUSfH2LLWYg5UCZXXv",
  "key15": "2vdNbdtqYaY9DSmtRhJ33PaePJHWjtiws6LJbax8ReQy4vav1N19x6oPTEeYAWGEVRjLB8cmFu8yWXzQUaw3xYpW",
  "key16": "2eycdWHQaKTwjEfzEse9dyCFreSrNspMxM3vhipE71JMSdmWuHaPVWxG6UTbmAUoohuWemetWgcF9VoNEkstoPrt",
  "key17": "4n6YdWAZjhPgACcKhngtom3PSPCy2hsrjLc3z8y55UxSj4UtvBYZzLGLXhLQkzSSsCxqCAgmWTciyHbNhyKkyGJd",
  "key18": "2uZTbMiuvFhyGNJ2ucKbDfSs8y1hnb8Dg7a2SG2iVQroZXpPJ6W8F4Gvp55cooNKW4uXQUiDMVk9mBnaAbAbt3uH",
  "key19": "2dfU9BvJDkwo1C22SyejJMj7ZZC5Y4TMuTQVVug47Kns2rELypP6GiDt8g9nSsNYZsC4upsXLgkhod2AphiGpazM",
  "key20": "5w63cxmMoNUCW4pQcmyiGuJiHRVQFBMbupY6VchSgupfBXdGvTrpUps4ydDqMoFxVVWSKdmvHmxomG9Ldtz6upYC",
  "key21": "1mqudYchRHkLKgBmVLQZFCiD3tg464Bvwxvbc1Qr22M6S2icqZkUQicMGdsy8WJzUy1MBgKMbvUvMhoig238sZ5",
  "key22": "3fL1ZRxUqtAvSsNoXJ5DVuJgahyypyibmhP6GqFfJjCNafF7GbxdExw4mZnm6tshW5CRpK6wnuLocf5Vo8JKJfUa",
  "key23": "2nNRpooFvjwAxpewcYw9dG3KAj1CTTQShsFk4oisrzUFwkYoWhqgjDAZcjWfZNTYwdYie58x7ifojQjnqWbAxCxb",
  "key24": "3U3sxUb3kYc37woovuT8vT1T2dCQECRFYCss6JDMFw75Cr5xa7DjWdG6TGsBph7gjbrLEESuK1t7bWDFaQQMAvAS",
  "key25": "39RxQTUkvfYPca2acRn3gAovT52zzqVJZLwLBQgw2QJfBoSpx7bdUcXaPhHoYGA5m6xqxyxUi194iXGBcNh1Xp9V",
  "key26": "4zHFQSbmiFYVsboGK6tQhCcPezQxequGyrWg17st86KdBvpRgSSfmHTybEid8d4jCT3F7CXDggfkiaztaU6X9Jzw",
  "key27": "JS1aUqe3wwr1qKaCip9nyTnReYZ5wvEGjfTXGNkpCUPr7uf2BApdDTfrfkYxaDJxVJEYiAVMjbbS6ozpPL6jJ6w"
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
