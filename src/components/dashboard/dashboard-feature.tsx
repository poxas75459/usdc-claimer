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
    "2UP2WUWN2NLaH5XHEXy96NADEFpeoXQ6uiNE6fwzf5zZGX1nbhfuT9R6BEE5o5xv8Q2vKr2bsoiF8vHu8py3Ze9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6T2tcdxkj2CmaBT83jetbmgx4cjfpDotCAozyyEKA5C5QqChp1emvCnKJ2NFZ37CeBGXukdueMpZyfPCQyDUTyo",
  "key1": "eGs95Uqm9FhF9NpDgjjcWanjLDX4qK9qVEpoxJrzNfPB1v6b26PAbdv7uFgeqwbE8AxrFuW8evw3hU8JCWSqGNH",
  "key2": "D5r2QXsKio5mbdcovRs1Y5SwFreD41y758AsyGN93uin1SbFKz8ezLt6EFD4HY7HzSEw8yXP8hyKAefT7sUEhLv",
  "key3": "P9rYKTHJTaDrJiZbWgTfUJH5BJAfHhzhXPLtnUNzbJ5yev1qtoh1GdzX466fqeHp9vhxb1RJGJ9sPseUEm6gQFR",
  "key4": "VyVoNHAbSfoNQfnNuKqhR7MSHkMpxjtpNe2CbR5txuU67Ca5EQ1vUVqFQGngzATEPmQ5tEXnR8PSKXvLvfCDNg5",
  "key5": "5MLX7bJsyqSomnQfJ9qPon1k6wumJZojVzfF9RHohPqzyYPUXgDrZSDywkgRTLDhEd9c92bpqPitBq6PxproDyyo",
  "key6": "4JFtfJkQmpvByoBg6DFniCCiDMWtpCDqV4aV3KncD6rFosmQDwZRijYA7tHdk3gn2K9qU91AewcwsXMzPA4CBG8d",
  "key7": "4GryWhLckLZ3LUtddnQU6q2qGh3UGQDkSus1jUvUyhz3qPZtAhNd6CArZGVFDo7hfUf1f8td6jATrHuv6nuQYGWJ",
  "key8": "4NsBYTV1WS55Lou92Nbi3tUeYQJNyJMepWiy3UKe9BSKEEW3JRGoMFbGn7NMKE27AJbiEZf27GuQETVMGhgAYjg6",
  "key9": "XPRM6mhwZYpTvYFtjA6kP264e2Hs6e653NZqtNf9Wgrf6kmtQ2q22SiHY3USnNzbDYG5PtKQ8qFBsdmue51hMSs",
  "key10": "45bTtBVXL4fFR3vfoZrWPLJLh8a3Fch6uYv3Z1fSsSYx4aaU8L94Rip9Xi1rNYmmrnfj4AC7vxv1tpot2bMAvbQV",
  "key11": "24xrCeeQZwfZ7GKgEkTyxdRx5bKEh5ZHorwnuqbzZkGgZUWDsGqcxaQSDtmteqtedMP5DTETBrfi1a1ET6zxDd3n",
  "key12": "yqfsmfJKnPbmKs9nMYV6kuCLKXDf2MpG5gozpprq4kxqfpqkN5Zdb2WpN2JxvzAGsUSUKnDjdbK5gufqCxQuRS6",
  "key13": "3dhvAV8Y9wzyq6a3idwRfz6nMXBnBJfKFkFVBNMGn9qgEhLdsuB7mqbQbgtdzsoen5nQK8KGq8hzpKm2sbQwfTpm",
  "key14": "4KA64ZW9dJjBLyEW7QZ9yU2UGHsqn6dvCjNZLoLaXNHC3FSteNzd9CTYKzB67hM8PGJUcaUpkSRG2nm9vvLnCSfE",
  "key15": "2e5AwWNRjjyXH2UYAv7gwZDYnSKig9qe1SJU63MtqdYZfzVDnCVXmqZtuBJU7zL6PJTAgLqrJeeEe4a6dpiq785S",
  "key16": "4GYisNUR1NLg9jpB9NvFt6vek8MQy9QaqgbnB1d57WfGnmzp3Fx9itnYV1CaZZt6YBuKzeYEjasaFkK4sBaYpRBj",
  "key17": "4X6FTsPf5ozFkeLCnCCnRqnzE2YpRfKGk6uHjsGSXADgbvxswfZRFHzRCQkYySy3LJErCL23Kg2ZujcGJFu9trig",
  "key18": "U9kEmSA89zNjhEYHCeyPrHbDmhm9aXcxiDuNQcvKNkZc8crw2cVVbq6pEU9Dm6Lwk5upKUcEiBJ5F6U8smvHAro",
  "key19": "2zNp7Co5LARDuzNqwmxARQVo3EyDZ9KJY8jw2fEqBFARQdovCou7RdD4KWrZxC4aboueiFqzdx7DcaLu7vqz1qko",
  "key20": "nasLnEpManH4SXh8iWziaP98KcftpAK1G1QEHjs4Gzq8Kgrah1JhPG6n15UgJ1oMPDasp6GKNnGug7QGY21nPHq",
  "key21": "5oGRVPytZ1vJUFAPHnyz1sacxufLtQQFCzrCQbZxBsdK3zsVg4jmwb2hKsWTawp49g9CiNHMp731nThFJPLPcPqS",
  "key22": "31iHbs9aQ5ehcs2aa1qeipKFjUnZSLmVKaKeh3pecDKdvKkD6SYKTJQBALJveB5CNbgcmpxTcf79vE61Xw5BJ8g1",
  "key23": "4jB2xGTVVKQgDWmzv58YyMZNjrsvj736UxhuFdeWzjV5FoC1NoM9QMXRcNweUZPuoiffUVXyy1iABnKCRC6C4xzR",
  "key24": "cQt5cA5FXLNZa3CowjsyxQ4UFk3rN8i9aWJHjJ1PBo52HWJPiJQ77KGHmWjMpcAcs7ySoZnHreADYcBLmGdEYDG"
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
