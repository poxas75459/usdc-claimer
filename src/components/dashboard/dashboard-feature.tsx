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
    "4DrxJzQ6KgUWRLcWaArga4xU8JWENUYJZGm3k59WqVyncHRMVr1uSrg6eCCFfTmbtsuNCu56VBDYcGYSbtwr3XuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rGJSaPbEKJX8exvdHk4x28GDQdUJr5AR8wYrxFPFduqbN8XBmCsDbTwAnHUfp5ycyN215AvpDNRaQ9FzQAgtzTG",
  "key1": "5VYcpijFJJYbyLGDeihPLM6yXbVhuLLkcBp4d5R5NtYbWFcocPhv4C3yk3AcvTMQVdJhJXY8Pz98EPBTF7HE3Bia",
  "key2": "2rwBWpW1UeRpRD42BkhJ4jsqQg27wRESGgCG4y7XdhvfmLp15G7MN7dka5c2CmYcuacAGeM3C3FLQvvJ15MRzXLS",
  "key3": "oPpghtfBF4zFTKu6vypn1rraychfZnWt2AKysaTMva3cTpFAy2DVfMZPRHGfTa5DyZcZmSN1yEQRs3jakQFzooH",
  "key4": "4q3Yzx1L4MNFtEJH3saT8b1DapaTBHLetnyY2HgwCb5JwF6jxjt9hAq4LopWR6o1j5xJoJ1JCdq91cPrNpc8v2Eu",
  "key5": "4EjqAN5wc8PGLne1FDdGXfeCEFA7kfnsE47QYFr3fycpVPstVJ6Hs62XhuyVjd47uqCJNo7t4bU4kFwR6hcxeypP",
  "key6": "3J4g2eWxEjvLvA6jMatmZfd7NZz6Pvj68RZmEBFUziAAUYox5L4mppVM4F9F8gFBTKmKLd84C9QzSKPbEgWHHeja",
  "key7": "GmiMrUqPtr8oACPrUQW1sFy1tTzzvFDASoioP5EuoVVsANqFxwcPwNmPAKxkXgb146PgSeDbDAdjU9vEBEYEC69",
  "key8": "UyW67mny2dg5PAckW4DPLbLBHKeFf2zQKs967NEkmF4yezjzs1ELh8zryQ9pxvJ9W34KGhxUY35VfPWdL4gCTFQ",
  "key9": "4yh3uJgVyQPwc5yDu4CfhqP6v9jWehR15MxRxsvR6tNWL8eT9e5itHUe4nypFt6qrvu3y1nfxaMMCkWdDW8oQrfn",
  "key10": "dTKFxFp2gHXWqovZ7NGLcGJToMKbTTtXLdXsfa9SJEze1hD2tbyG3hqzW5gCssuTXWxqnrWLdMNvammxS2nqcGf",
  "key11": "rrcxjGLqPB9PxuicbKqARBEJcH8BeFrvXzULiQgYKdyH7sdnkiZcD5ZXrbkJ6VEEiEpQWqXq7eWBwUz6SSqkifv",
  "key12": "4uX69V3jX9wueVAqdJCavzixZhjaFSNK6iUd5MZwNDDzk591TEaiEJuWFsV5M65R9h8HySz3Yabz1DG4AysHsVtp",
  "key13": "2atZdRxk8Hx8UsxrGZjYxAMchQPdKHatqamMdSj8z5ch4jpBZfMiC6kxmjofquUUjSKKb7Eeb7Md8CXhjypdBFww",
  "key14": "5Cs7S4fcziQ6NwsMyhcsThxy2QXzkjwVsBLuVwqzcirayu4QmafNrYDYCgJbui98rhdfcMsY83AJhiXkHKD9L1qJ",
  "key15": "4fPwmxUj7B33Y8jmbbiHR45AcCSt3F6qgKM6BSZtTtNTXrgWhppWR4N3vYzso7gARSHtWHmEVSZgigpD3iZwY7wi",
  "key16": "3JVnMMaTxFd54ovUbbstD8VHTo8FzgVk9g12wRFbNXGTLUUCuSsRKKw3MM9JmCqPt4Wd7oKvxd9LyTrKnNF5qLiM",
  "key17": "7eLEYBrW1BN4K8ucktc6GJ6PSEMQwCVo8jaW8hpRczg4E3Wq9pWNXZ6s2HTdejXC6hq118s5UP9iu9m2gbe8Ban",
  "key18": "4pPM9xaPchCaWmrtfrBmqocAjJdvpz2Rvqm9qws5TDDbqYZPeaWrtsBSAewgpAavs1Tvof1CpAAXzA73AoZtWG47",
  "key19": "4q9rLKBSNbDom7JKuys7zKAvscUhSqYpaSx9F8ciaygBgJpVMbtq4YbPDrbzJerFgspCsas3aeWDkJjShQZxZbF5",
  "key20": "fCp4eidk7ga5jxocUfqm8Prbf3LkrzyFH2jAyi8jDhwSApXua3wDukRCfAePeyisxkDpovaQRRWE74cVyXn4FVZ",
  "key21": "23fjhEMsf7jkFfU8ocw3hpQnJrcmGVzWjHmhicMmU9gGaVUxbHu45gZGDovrM15Njdw3PsUHabM21yHodcqcbGcs",
  "key22": "3e8fg5PWgSCz4bPu4GfS71FzSQfkfTXvYPFCk83HA7eK2QoUMyWfLzPc1sTHA2jXjW4cPDFKx57ZS1jFRCJUNsJA",
  "key23": "4V1eVhxS18EnvJwDQyYV2dww7C67xwmRmHNuuAb4WEq2iDT7QjEi4BMWoUB39VaqZ96zdps5FtdsFvHDcx4TT6UW",
  "key24": "4QkveSxW49nP5YQYwVmzsPJe9HhMjBgrPVCoidEgtDxUNqy89w95xgwB37cUwjWn2XkiF1FnQaWoZzNFzPx34JLb",
  "key25": "32UBUbto57zRSR9vumbnZ3kGHraa1MK3fDYwQML4b9XM96W4twKPoTcCxkekj5y8FGqkZe2gvnWGEipe6UCPs4rF",
  "key26": "6UCLmuPQYcnPo2pZLws7zdJRBmWPjAFtGjDy4U1n2NGudRcsoqvs9gdU8c2NuBBUiMSAVyQzb2VYvw8yUyGSvmR",
  "key27": "5LFHTqwS9nq1Q5bTdqV7ZESbMhnAiEvsgtn3zcAAVRGAwF4ppzwY4dVYB5rqPuFspJhGcHZcJcP4khBGsUXwPTWg"
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
