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
    "2HfWc2CEieRJySurZ9rqrpo23B4cKcdEcqVd8a94zspKiY9xzXXNfHUeSEpxBTC3PVzP8jmhYB75GB2Pjy4Rr3e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52n2zJ4oRsQR151CDS4XLM3r6kgpyLGzroKKgNzuf35BmpVS9Zz2eG9jX2Sv4c9MUJzKRCKDAnaBZNnZ9dcKGwWK",
  "key1": "5tahMutzbzTVJcd8Udfh7TpiCSUxEA2RnK5ryJmX1xcEZpCnWNmSkGZwsdgiE6vP7CwC57WgzCDkaoEuGLgX5mpa",
  "key2": "frCTT6ptrhgVRK2gqnCuhWp8EXbWusR4SdJGC1ohJzEJ4HC2rk8NkHv21cL7o4EhdzMfRAiSs81UFTgkv6jL7cW",
  "key3": "5T5mgHZP6qt6HBVcni8y83STTkpNkVy4kSws7w8fcs4TGo3Gu6Bzyc8oLMy8M72k2tkW2iau68jWLxDmNY3ehiuo",
  "key4": "3ELviKuUKDSs4R3YkLXsdejusXEbEV7x5Mq6BV4WeCyerLZyY3ksCXwmNmeFJkrfLWwHK17qQ1mXJJNPu7GGgMFw",
  "key5": "JM9oPtQYjBB6QeUGkumjsCEqWouVdNxYyDU1BGtqEydQYzA4QBKkq9AySunoyhdTJonJ3RSdtgehcNL4FMBgxbc",
  "key6": "65ZYzu57fBw1GcaRbHvcgSGjVFVyVojVzXZ8AS7r9tkZgcVtTWJewE1knW97LTFAFLkJwQ1GZ1BJSa1fypnWPPaQ",
  "key7": "mN3sQwU75SYXMHsNVgvPufci1ovfcSfKYU1Td3vJABB6wgPobVU71dpMVt1wpZ9R3xCgQucFqKvXZqqJRqCYRW7",
  "key8": "2yWPC5byg4W15ZubKV5iC7r7WT3BByvCeREyL2bjp64Z4yJcR4bqT4ZJTjcerv7KQ8hMPJ5qLVPHMeNd7FfTsyrf",
  "key9": "5CUSpxbcvYst9Yhh7UVrQD31b3jgoHk5WKLAbubErm4szPWevdb9BjwmFLW1rM1KAvHhJPWLepyQUUwVcX2Y3sFu",
  "key10": "58uZyEUKfQcHWDK3cFvdvRhsihHXQonZpwGKHGsZfrQnwToGDBbxrcAjHmfEwf4mBuaG3HRVXqnHtjGfpkUES9SW",
  "key11": "5HcLS9SsP1agwfLV2ZXUkGmeroXhvLLhAzVG9g1acte1V2i8N3XD3UUcor3QpPr3DVxzWCEUXSipG6AD2xDDMNK2",
  "key12": "3NrEpiYnPchDsk5FnpGCvShU9qh6EtBt2u9e967BCWJ89d6dvxMr8JxSMe4fXjhmyCrEkStLgAKswPA9427shikE",
  "key13": "3RF5766BUnugZ9jbvrVqweybR9yWAvUJKs5hUirt48nYCcUEWzD5ixcud95TGbAhZ3gEyfi3m6ccQV9EhRkvjcSA",
  "key14": "33NiZmAhnMkY6ih4rnSioTdF7CBPT1EKcB4PViCH6CaLKVdW1tmpNsgTgjTjbgcppyaP9LEd7BZVKP8nJX4zKNyB",
  "key15": "38gtsygwV5NPPECi2oPw1H1peNUH2ex68VEQfQqqQoWbjSqvMcwSLMdmkY4Pap4EnBHCCeeBkpbDiCpn5GS5DjLM",
  "key16": "59gmJYVHFKr8NANeCaevsMkqsuPBgdCNMpSnavynRTJ3GuDhiedo8cicxWYmjhdbfiV9ntBcP13kE4B1LU15ncLM",
  "key17": "5pm9j312Mx1FsLNn3FHE3EFGoKqv4STDNB6AgWRc5kZsEx54Pu5NLzpKMrQ84hSYBsfw3SpnSJzHNL8NpBZPBw63",
  "key18": "5jKpc5fyUKJw29yKTsGsewLZ2HXZVapQZxGtR5EteP2xFFrXer8mAiDs1KCDczwsUSjX46woPDV7Z5EBzBj3xw2A",
  "key19": "Ko2RfvA7a5faVbBDT3e8eA2qCiqmQWsPbCqJh1DRqNezjVAbsvcJGwK8Jp4fAJMeq58u4HH3S9FCohSUEEjTGQn",
  "key20": "2PaugwyuELJCDSe7m6z5yJzVnTHM2PFDT7pTZQEjo14vrvqBkuVFdAooz6zWpAJKPgrytuY1BorjNtCEDgGuRGdF",
  "key21": "45U3wGGrUtfZJwD54GgN57inYfs2xWNiTzyA8tVhqHcGG8r9wEC8qRU6dWJQbRe19D82x6ad4GwXCXY67JP8zXeu",
  "key22": "5nfsEodK2zKN8iYjLU6Gph7gKxWWbQSFcywDdnwnFSoGE8Uvr1yqJUFu7L6rVfwUjmE3JSrXUMNkNHBUyYdxJ9NB",
  "key23": "ADhzhaAzSxDsKhBgfLrZhcwkvAwzJyuM6Qo7W6gsTi8Sn4a6zoBLNvHUmbj7MsUP1pFWofoE8Uh3EmymUHhnbaF",
  "key24": "67L3T6WghTh3UxaWLcA1RBxuLjynuW4eyh31di2gJ69V6EV41AV5dnLVumVXojcCuQwVAzaCWc6p2N8eS284BqBP",
  "key25": "3uKiU6BUVYPsj7c85Pa4pcmFndK3Q1ySCynGRC5T3Ap6dBBmayDtGediPXeKJp1v1GzjfbrHTRNsvjbuE37hBcgV"
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
