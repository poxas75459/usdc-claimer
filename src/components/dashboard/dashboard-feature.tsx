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
    "2Ka3rHbmjJBNUinWVuNJXgUwNx2XaqyudJTuHjd2k7FZYFsLaxKzkEpBoojeDK5nSd5drRg8UUVcq818WvMfwdpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3BBkHohg61re9HSipytpNeWk11F9q1i3VSNQNjaaRDC7F6zqscP4cn7irZneqE4m8VcBuXjHyW8xuWH78v68AB",
  "key1": "2uQ8Z5y27UyytpaJTiyFGh1caesKUos73ztrUBMFqiZcGYwdJzxKENt4DY329bLvkxU7eWPDTdE2AqcmDW1KJZfk",
  "key2": "481kPgMJ2hRmsxyZ8K41FFDE93qVbouTWgMpEQ2hQbx4UxesCyeFRf3H62zRXitSoL22KV7f982h7CcYNFPLjgwX",
  "key3": "3ty7aegQ7a7JGLrdBoe4ybzszzUvjCSrCNgtcTauQfWSME65T5mVMV3po65jvH38So9QpVnVuEXYPgupDpBAnwiy",
  "key4": "5rZNGFq1qhESFmcRhdor9sHLJovrCnU5VZmoXyPpnBTpp3fv4ZuMyKxs9gZRXwNa6NV2PeNt9vBSbEGYEhXvS7mq",
  "key5": "2dZPWiE6Mjkv96YY5BKskN1U9V3W9vGCMhJpVAFUyFYJv4QBkDs5scYD9KhQcC9BdNE3B7KFkwHQV6EpKGxDmiJ2",
  "key6": "3QpPLcfgjMEr632pECDE7yRwg53wbTRKfSZ46v4jHwX7AnWPi5NbcLGVPWE8AW5bPVdH3kusHBmLL5qR8iwmtdSV",
  "key7": "39ZtrPezR5sxTLQsV9zzbgEd6ddHoSujGFzosoTkyXPVQidadNJT3CL8cTcNekjV33MCtNHHASsZBEQkhnuNCnze",
  "key8": "eyV29uwiNq1d37VdPsVyDkDXKXkaA4suixuiYmEgwNdLpQ8TYrfyeGCjcMpPV4JbqYYaFxCRP9Sc19KPra78jGV",
  "key9": "3DruHw9HrJS6Buc1jSn2LHoc7mgfoQrTYVy71UfiJyZK7HctxeGCeg5GXYqvdjcSiSkeLnTo1vbrQDXQpcq7QnJ9",
  "key10": "NjvibooAM9GTeGxeJP8iBL9ZMCPdbcsTP5Q8HPFjd777YYY7ZXetkMb81Prr5ZBEdKfK5GMXuYD8JBgQKK6cXyr",
  "key11": "3LSS9EwX7RNkhiNko7UoMSKcifnK1fG2b1pf1gsdUmfpthdGbWSFooe9sG8CxeNFxUkXLbeAPKWZ9oEGyRVRM1LN",
  "key12": "5kAZjYei1Bs8cN3MTA181yfVyzgCb6kjMZHtLCPzrYPhHpzQssrmrabwLqosn7fzjiB73h7XaAMKzDyehQxuD7Ag",
  "key13": "36XY8a3GJJTdD7gWBvJH9JsvmV2TVNfu1weaKF2JULMCoLmDe8qD5zBQUNqJyn5QfE8e2uYKjFfFdZ8sEUxfrLxb",
  "key14": "4rV4cUqFnMwKozxytq6krpTmoGnzCiD6TvM3ysEz2cg2YcSqTHJ2vHKQoBKvr8UMCbxFkTymfBXGT65qKyR5gdYc",
  "key15": "2YjVDYEcM1Ze7hh6NbUHiE6KbQ7V9iQgeC1Lnytp4Wrds13CZ54ar4AwLAEwrr5nRpLPiYaCgJQggdv6u4L5eFjy",
  "key16": "2fw5WJTdWNxky1X2bfgJJjxS3L7GsMWenxwtdyURohydujQfBXEB8wBaFsUKckHTiHBE8R53xY9wbvnh2T2DzzUi",
  "key17": "gWUHbjQNDvhhdHX8ofuxVeA91dfAbd26Pcoks6kAaBHnzpycwgJ5PoQV1RPfEEMJRti7HbPx1rVG6kEwsdxc1nd",
  "key18": "3TGTTUtXxoTApWrAKJ93pSmGYsqhjqzcrRPegriK73F8heQ5Axy8wZQAGheQo4Hu2AbuuZ5kA6wMZ1v8XkXMWynY",
  "key19": "3yUbm97bYULhZgQFfoEJup2HN2KWMzeENvgzF8LRXLRne9xsvUeHB44KDzBT9HfiKNF7ijjC9x2vYmskGT5MRYW1",
  "key20": "3BwWGMYYTsygnAgJeEwYXuSrkJ1KeijLnvLd44dozDW54dQH5MJpKWeRWu3qS8Ci9JhjsZDxG7vWBmJGF3xmFmFy",
  "key21": "35vqcf3nu8w7T72wLD4YHu86i9Ky9o8wweYEejAtm3gk8kLQp8REe4GyaqeGNr9RuoEYNKegM7rgmi8RJmPw3Vpq",
  "key22": "3dPVP14879sqJ2gaU4Byj8cPV9mWMXGUsduadNZeP5KTMgK2eNw1cHHyKyecariz9bJjmbcQ38wzXZTBmYSXYiAm",
  "key23": "63mMTwna11kDTLzEdg7xmchtr9t9MxzGVQ6iXo6a5QexzBsD8uzVZf4Urib3xD324T95VZJY8NXXpuw1C9pvvQ1E",
  "key24": "2tYmgqeALkv2mxmMeZYjRHfMUUwmsaVyB3V8maGhrkCnC2Sa6CmqdXM7NpBnfStUaPNvPs4DNtEW6gXXDfpc4n6N",
  "key25": "5thx9NviPKDRMw36YoGF8uRvmzuHJmyipaABYfUdDKssz2ZYhfVjnoG6QvoQCuJNvzqhan84k9B27XfUHzKSxcQj",
  "key26": "2ifgXDjuHeVRzRBQRifnBFTg1bnGRrLJ7mNTR4fmgZ5nb1mqehD9NgjEqqr8smDLMkbc9RVbGZeFnNGTPzNMfuGD",
  "key27": "4hH8iFikuMZuZhfGnj1CpLtbMkzmGQeP8xH3PGcJqCqL3ps2v1DKaCVBjuVp9i7AsMi2vBi26LoVQQQtuCMnuFs3",
  "key28": "Jdx9VxvCcyXrXizTzAzAoP4zBDsRmZFvdzJ2LwohfUrrg6UGyifhnhYnh9pRGgLr9QjbKPNPLnYYcG6kqD22ntX",
  "key29": "52tu5SPSEDVij5axPDN4MiRDR3meH93BHGjHv1VRXdhhVubVy2o4kHe8phz4nvTgV7JRUwN7gkekfUg1Ju31KKxF",
  "key30": "xCuoyPrvT3HKYUeDpGFquv1cfV9WzRKcFd3om2SdBcZZkMwfohRAxFcGj3btpBoyaVDEiUvGparwbycFwwL66gJ",
  "key31": "2v93hmaELELz2ME7U97BGaMpVtNiYd16w4m25Z11H4ihEXHvVLDNDmVdy765YvQnPiTZJZYXjHTQDCWf1yAw5E1u",
  "key32": "5NzduV5KK5apv9M1AFGpDD4kDDYckgEd14JUjPKNKVzrueFTLar19n2qEz8HCkphYZRfveYYCFX1xVczGEFKdVYf",
  "key33": "3Z4N2Szgy2gPWZqpANshH9QUCK6mVXYgxr2Ke1xWFtJ661PnBu4iDBCuX8VJz3kpMiijNihaezGzqboSWDgwnpSp",
  "key34": "67BB3vsrkaupZQjX8x8sfbkQw7MQKTiYtKfuyx2GjbZw9ZoiCPXkDKocwEKeCHMxXPqPTpwoLYvzQrxnxaFimx7w",
  "key35": "3KYdWPX9CvM9SqyTQ6b1adV9XeKWGiFt6buvMvuqSthvmvzqWvTzbYR835RKZ94RJtWAE2UqDFUjC1U3DsMnxWLT",
  "key36": "3QG4HLT8oE9FjqXF4fSGkLsdtFJ8eA8CrKGYkSL56tnMAxte8jnrZxPMpiNuDE41kQirVCx9AHQmUq54HKQiWaD1",
  "key37": "2L9Ekeo7Puv5syxnW2pbS2XXaaqrheCR9QuYMLRXqSCGJ3H13NpfDrxkQXRv9sJ8MzXow3xgeSwBsTikvq56i1uP",
  "key38": "DLHnuKqtD7S5MZkRDCgGPJukfkryTZRLWKN1BxXcucGMvCxaaoyPeFN6EaYqU7PVTkuxzvTBeQt9Jb5Ro6rvvYD",
  "key39": "1YjLKP2gekusY8cbQ8pZAvMLwkuavj7hQtW7BT6q7BDBZSWngh9yxniPoCezAJCEP6szXnJaPDEyxUB3F1Aoa1U",
  "key40": "3mAaM7LvWeWaFh8Pnj85VzkD9eVDW9RR4u6hQJi7z3dCYAeb1snD59YUJtonthDWfPTt7WNVuX8aA2sdZdN2DRpm",
  "key41": "5ChUedBu7n7owLSMknJXJBrmPhhPrWdZGMVtee9Tb7CrRaKDuZEnGHQk9NY6aPDRNwjv5pb3EL9SrGBKdPUzrzdR",
  "key42": "5Hd4tCby2XnmcMECTZZLC9vcS9BGaj83CnfWav4VzY7AVYGX4HJdBBZoTTwJMeU4jGHpKsjZi2bkQekSo1TXj9K6"
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
