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
    "2RRAqcn7DUTV1Mgzyh7ZZmBp4A8vCSyxeLksjQz2KNCpNReZvfgfQmN49jwxi9yEN2jqEv2PxdYfWg3rehpkd4X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtJAa71QP97bFai2xSZqsVLn38KuDjMU3fvAn7pkrW5CuXVgEHvWwQZHf6WGMQCsBrPVrToLnySnKptccGnLEwN",
  "key1": "3byo6c1UJPM7vTT83wrudtLyMgYaQxK8kArueweWK9f3ctaoBZUH2KB8Ym2mF33JEpptJtEUuNzy3MRsuwiDMDc7",
  "key2": "5cjSX55c6eA4frdksEpLijgDTXvrxqWmwUZnLBprEQZQWbcMeMDcC1rp3ESgiDngKjxD7WrXRtGP3MKPSM7mvrJc",
  "key3": "4tPjxMkKgRnUQtwY5BQS9xZvqN8W9zENAUCG4xiNoAHUEtgjfTZw4UvLfVFfycW1t3r7DSPJv7RHgTcUqVrA3XNS",
  "key4": "4RXieUwf2MCiWPYnatY2Qh7jNDNMw2zM6XLz2GpfNWFrLHdbk4i2oRqZEXPW6C9wfaPZzwKV2Sgj37kwsUZcJLNB",
  "key5": "5uBXjQGWudAKYxprX9cd3FijTK8tHeHf4kBMSEi4CvnLHeJhLYEh7QrcAJFtZkK5CCWVbptHNDz8xEdRbAQpZsqm",
  "key6": "4a1JvDHx7go6yBop4sL7cVD4ZCaMJotdRaqTq7UHxfpiZVecNJtXTEtWMaHQwdy6oXn9rywRR4FBt5vyWDKvRosm",
  "key7": "3BqtaM5pYd4vi29izX1aEyC2yq73t4WMDwu8cSCevHm5L6fPyNBwFJbmEopGUG4VvnG5zgXrkCUo6nTfsQzUd1DY",
  "key8": "2qc6Yc5mfShh1akpfQh79Ahqb9akGChRqoxc33r7EbUJb3RUv1U2KjMuVqqR3Lk1ijEfuMkqNtZsJ7Mg6Cg9f6UV",
  "key9": "5VgPbLiCjiV4awap9SZUfJ3bDKKkneWEf89Y8862YFh9FMAGgqqwaRLYtGU2nbBPZjGFyPoV5UdqBacafiy7Jh67",
  "key10": "4jvc9ReakatfsyzCXyjv3iTW1AebRnCHsq94FhSjax917eiUafbgKTSaPuBL9Qc25NkiuhXrUorPkD4sVWJV8hRW",
  "key11": "3cdcLgdbG3S1XK26m8JwwMthTVmUCmuMMdb992hsmwDkz3dLMizh8bv7LQRtrP55nar9NDVtiYphMK3HqMfyjESs",
  "key12": "56Ayi6vUQjptugYyj9HToGxR4GLep25KnS1dyKCuKk2kvrSASN3n7oXbc1crjjzyXHWi44knx77TTaDXGbJpj2MW",
  "key13": "4pC2QgXUsyZv6FBXtNHTFMajN63mYP4P1ZzabVmWryQHdF7evC6WkRKATGBYKUS1odzhwHY7yDoWhghPwAa9bsUn",
  "key14": "4xmZsxMiUJh2me8DQeK6MLSNpi6SPrHXEMQupN8RcJWqEvF2hAxwaCWoN9xSBDiYWXv6g5pQe48LizGzL7P9rv1E",
  "key15": "3zeituSzvgHDVAp5CjwWN4Z61w2LkhdvHcVQxtYkpSayKUr145oYagg1u97j5ghBrBj7gywb2KkPXXcpuTtaApch",
  "key16": "8WJWh8xU8jaGy3Tt52hTPYL6kXpwRkX8LXF9PZkCmZEJwavwZceBjc6QB46tw2BnWgM9YHmY8koyLHTGjeWM4Mn",
  "key17": "3BSmv8FixCKDGLNu63BHLTn6yBN9FdEim3MMHTQiZeizWjgWYMadmMwXS7N6qYwmpBorryTfhNSEfggp3zeVY9Mi",
  "key18": "o7FSCvv3oAy7vWaAsek9hszxTiy2EkcUVQUfKGgBMaJm6YPdzMV1tP4buEZk2uMke7NCoGEbspEN6VhPLJLU1BM",
  "key19": "4q4a7wu3ZkPTxPYy4Wubj9mDhNY5dj6P8weGjZm71et3Qtq4oAn1RawmKagsE624catWt4wz6HYzoShgsZgYvRQ5",
  "key20": "3sfpzcYBmMoqSnNL4Cwa4XHoqu1CQcd1mxrikE9utvKrLBKbr9ZBZ5J8U4ZnKu8J17ygPY9xduUZT5LxNdrqg7CM",
  "key21": "4ZXn1PHt1UJVmCncP26yeaw7cVYzFThcY6DrkLdh9jmq1jAo8VqjZ1FzzPAezD3VzcMrrr3Rhouv8Lr2EpQqgfmk",
  "key22": "5Vye2eaftKL6kyHqMmuhvBnFeznNFEzNZRo2X46pwcqFUKBQkMgpDU6rEj16hLdDN8EP2GCRW2pSJdhpbDL6Jpt6",
  "key23": "49ayS6tiQNnXh8qrmZSo3N1Lg6DmuMq92P2JHKCQ4zWPX2vgHBnCyoaoYmtP7gR8R2c6cxLA95vDYFZBbUVRkDdg",
  "key24": "bpkn7Nmc4nbStkmAyRb1xg2vqoZZduaixrFY3P11JseHJjTCkXCpC6V5bGEa7aaXEmQfYj1aWEASjgWgCTBcem4",
  "key25": "3jktm2yCbPKJjhScbSk7JMgreU313nZpxtG9Y3JxnZLPmH9SP2suTGz8Dz4RPzpR97FzQFtZ68bAu45cKFQsMPNL",
  "key26": "34cUeUmjK5RjzNQaYAeVZZYTP1qq7QtopQAh4ge9b2XuwrNn4K8YjkBAvvMbcnVwtGgDq3rtP5VyfFiuf5zbmq9u",
  "key27": "5sTiqqutrGnyEUhgoW8NSLxLymB5fuNELRvKP1pyeYeFUGmFVRHpdjz4qHixieumijHisa1WihZqUo7cVSkG7E1S",
  "key28": "2WwtSahDr5RwdWGbsKtdXLvuWjw5RMdqMorYVMnjSnXKxuwVRFkBqH77wRMce6jvuo2b5UoBWfiS7TKEDT7wJECh",
  "key29": "2jvQ3wtwff7MCpL3Mbtp3ZkooNA5SWSrnUTMGYvqiwQD2onDfCf49ztc3T4JBcXuhtq87nzSoBPZa7MbZ5H5oLGn",
  "key30": "3sWkZxm5usunVFhAX13UxraG8X51hVbzUE1m3DTYMy3PHuQ4MxwKDQLhkV9EqL7uTmiPbK4MYveU6XXVYkQ612Dv",
  "key31": "3aHFu2rzPXXFoobPwkHLX8apVNVRtNBCWWVJkEd6j78VoMAQdYyH9MQURy9f5WyfvotVZs4p7wWXv5SoSqLW37ss",
  "key32": "Pu45P2rxbCfnJRCtQZZKMYhzQEZcGonxrcL4RCoACw6NZ9sMmMC9SGJsr3r9CseqYd2bKXZt1mjeaj7ogmwXFtx"
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
