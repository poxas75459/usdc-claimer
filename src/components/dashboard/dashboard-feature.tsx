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
    "2YJ3YMD3TPChnamSPAU1gEFStZTQMVyhyBMzJ9mw9SQ77Ug3u1zpsaAk7RddoowqGQNL3KvfTuV3eSfZ9eYFvYCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UAWQ8Kx25zcMDDhdNa9478nGbALRCPTimNjzuNdBbyhwiSLJMieZs371kVKNjxx3HwPWR9ws77F1hRJoComzrM",
  "key1": "2sQYKvtXGU8Ut63KhLX7D8Hj6Hhr8VqZQP57KjSEYn1sc2pX7cNvhFnDhAjFZuZemcfaK9MKATW4XJfe3dz5qS7i",
  "key2": "v7Bw8ySidSmsVVgcZybX8koU7bsdS6vjVsmub6Fr2KgrPD3PMh41Vfbjk8PDXcFD9pcTpCkrUQkJmKBMTRbuy1C",
  "key3": "4aEzLwa849Ap6oD2ozKWJmggi4u6N6URQWzVzwftXAejdqv4rUoruWw2rbsTMH8AU2vKNpUuVPZCawDn1PeCHAaN",
  "key4": "4RZHmFQ9ZByFojqdMtujHyrG5HDZa9xEyBXkijiFy6XLVrCMw7Baxf3VzTQJS56SvB4phMskZ55vSLEYzuKZqLbZ",
  "key5": "5cEyFabfus9V1cQ88FFyKBpnNrzjtP3L9NsxMz7kX5L7RUUDtdzm1DdSvbsQQiLYvT8fRSW9SccZMAwfE5y1KuCh",
  "key6": "365n3p2W6FKLmdPT5uQt4ZqVZs9HvZ33jTHnhhBZAeyxxPmLtneYwWqZaKVkfuNXtG29nH465C15i9XLf5oTYyfE",
  "key7": "48aAHSr3JoAQopxRME3tpJwPeNBZPnAbypijqq7A1EucZsz8GmvyMMBWLWLhHgz3GyiHnjtoEohwtDgWUYHk7gAQ",
  "key8": "47wQZ73N349VnQ5uieunzJGjDJfemA3eTwXCnjgQEV3jE2AA2RpuHHhW27BSCLUjUxNLgYJQVptKV2s3yK3qZayU",
  "key9": "3bUDSWFzCa4L2HBZmtPgMPUbqXvxXdBjZQguP7GG74kzbiS6NjM8peTYiqjDBxFyGFwVxXCc4f3TBKpLXw6Dndn6",
  "key10": "3gQKJjdrywh8BWiNHdGuq4gzTzXdGPBqFYMykjb4up5bv8EuHMSwwge7sHgqTzFVZdMWKYQTn6XdPkf8TEaKHB9N",
  "key11": "Qzug2gRmuoNL4xFfCMvp1HTeND15yXEWt4cnZdcTdxqvseYtNT4Wd4VhVkNyfsdzNkJGPjMkeQ9i2Mj7AXLBa9C",
  "key12": "5bRyG4npZFNb6tJQoyrGbDmREfE5ft2NEdSaVav8ivJ1iJFhkmKq3rXBubP8buMDxuPnckM6gP7n9Cvns5puXCwg",
  "key13": "2tNXyEkrKrnaCfiVsE6MGkDQMib4UGRYVwiwnBQfjUNFokuTDhVRjnkNRHcDrpShpq69Q6tbCfFSr5W8DfGKfjgu",
  "key14": "5jLYZ1yNFFPExPw9meWQeovx8rPjXdEj4s8o2twYjpwdFidUPxJwynepU6bVhE18wJ1DU9f6j1n2uMvoCyw9hByR",
  "key15": "hA43yysJXqiNRn6sRVV217YLoLgKa4DqrgCZhZ5hpQpXqbv3yvvnUfD4utkR6QDekQNFNHf9BAyoLDXsDK8mYPr",
  "key16": "tnHL7mg4oNbGJC7prxovNV8oqBHsF8LdAkZ29uThaQiTCD4bEQmAx8c8GUqWpTPQWwSDHfehqmJDAK3P34vFCp8",
  "key17": "3d6NBjPFb6uG3ZhuDJHJnsPcqR5FSwx3CpnyrC1tbFcx8rjwjBUnafv7aftSbDgy1oQk8SNMbDUqwbUeZysHgakV",
  "key18": "4zkfCzBskLnFERwkkcAiZCWSR72h8GvwBaMnXrmCDdKRGmiSTokan1WhTjwie8s4M4yw7RgDVKmFCUt9auvK2hE1",
  "key19": "539h4gBbA4duQ1niiBNEbhF5zMpz5kwqcvB3YBXjfECFPpfmGcBft55zsokWoXSzARVDFw37K2tmkjguURZoa6jL",
  "key20": "5AHQ2vDG6SmxGz6QM67VUiDCaaLChXsR4N6XedjcX45GQRUiJchyaHNdp46KqLxZteVwNtLgYkKwQ7okHo6ruY8q",
  "key21": "LeYG8aZERqzJ7D3Q9DRyhuN34FbtZMSwVr9Coo5V25UHjEQXt4FPWGm6SjcibxJRf7q1HFff39He7ZyLyfNuYMz",
  "key22": "3ZRPgR1EdtrytTEsyDMSQ43jC4qiMqDdQWMbRaq1JEeat3xf5jsYG8hAxsWS1Z617w7bD6tE4mr7kqnXrjrXmTce",
  "key23": "599hHaGqtLTRSfh7S71rvdsbQGgVkyQKLsiggdfXhqMqHMGNt29QRqYX79yifaB8x3rmS7RLtALCSABam4Hf4NKY",
  "key24": "123ad2c6wTieibPtYVYrVDLeLcBHmN8z4U7ZDBTUiHWh1YDHDoytuSFknqouT9PXV59i2SvYza4VSCy4QshkDVGW",
  "key25": "5JF1XGKQz31ft42hpbKJxFp7ev75j4GB7EJWcyGzbjHQsQihrjamw9EgdByLsUCs3TCzBLFaSqbyZ625hYnEgRxg"
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
