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
    "3bnYoEmg7iPqLh4jKFnLmQFQoAuRiv2yATQFqmiVx8No5BSTyFBJdCrT15DsKCU7VstTC79QMPZdM4C8zeo8DkUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dYeJuQCtZvhKJaKBHu2x1tzgynYcBVDQ6AtrD6XoH39Fbs4wFvvfzsCRVd9jV4kqzUy9EXR12y64bFmeoeSgjhT",
  "key1": "4vCuhZJL2wmqwyJa4txjCQ82CGk5HNKGx3MaCXcyitLC8pCq57eD7TBN5kBF3encm1Mrd97wZsyKrwK86XJj56s2",
  "key2": "2qTVtGx8WSNN5oURtFpz3zmJYj9Y2M2YpVexj3D4yPPZ1ZB6o5sG8ZJo3EK4yVDC3pxGAYNtZc43K2RE5Xwke6yh",
  "key3": "pCKTbodJd1ujhPWXUMs5uXGYEJfBgdL4wjg4JhT6CRm7cXBkgBpmuDm24S5JzpJD5zvLuDsmnQ5bHMXazTQGBwq",
  "key4": "2KAXBmjauBiyrr8D6ZTs6vSiVyUZKq5R9t2YTjzbhmN6e42spowPaitQSAzZ4gi9dKEe6CAZaXJ8gDmi7xdvmSNS",
  "key5": "4aPWab5BZv9BQ1MTg5Fz97XfKPLyDBgUU3QiNp1H3hoKXeKF8n3Sk9RS6fDhY6KusZCHEoaib1S2HKZ7efaw6MHM",
  "key6": "3Tqj49nvPhJDHHmKMr3DgEUnMFK2qPgX8FptRuTdxjSsmYMnCHyXnsUNj6WBeAU7Esv68XKCBGE12qztoQBRBU7d",
  "key7": "57aAe3o7YXYXqRMp3TKeJZXTUX66fxgaBzkMKpkPA35iuvct9pjntborfiotH5ySszchH8DNTdyxdKMYVS3HL8a6",
  "key8": "3MePZT4Pa4qzUV4iqg7i5d9z4PRTededQPJiJtUXFjwewseHvZAVBgMuG3bKeaiNYUsuocVzm5imxXSh4JgZQAkV",
  "key9": "2PSPFJ4rC8UDk54xuEm8WEGojsKvZsxEpTWDzVNvqjS852cT575rEmvxfUHaiEubYT3KeP49ZUmZzfynfdvwkS4j",
  "key10": "4wnRAP2vYwoVDyMmxEhoK6NZz7k5uLVLrSTCwwJxzBp7ASdpCNL9Qy4jhDHoNgQAeE742JmZKUMki7H5VG43hw7s",
  "key11": "3z6pepz28jKx8MpkMqYV7K5h7xtFE14Pk6vqYaFnqVWL5Qfy3NA3Rm1YgcauVc1CZo7Rw6nR8QM8zsEFXRh2vnML",
  "key12": "2Ze3xwRr69imKG6o7YCqrvzZgLWAs28CkkZeHDvziDn2tQY58FjoR9PAQon5W9PAuaW5SGDGTHb6Xiqj6wPa8HPL",
  "key13": "hjh3TAxSqpTzH6r31RGhupgtCHKK1CU6UBPAVcz2DncrxUkgrhC6F3ivwYEgUbyQpHcPej8DqdT53rphXoT5h5C",
  "key14": "gLVouKxaTz1AuQCZa72xVoLGCZg8PfhQV34FeRusnutuoJvQQAsZBeDhU7zQsoLCMLQytdjTDeLR1aSbKBg7tPr",
  "key15": "FtbYv2eWWK1NPWDAs8KFtZWz5xkkLQdF4BMNibaXFYvdK3eQKuouLwySFhDdE7PBkt1St7SoKnZKtVkejicFaMc",
  "key16": "UBzLXxEdnmq6eb9BmszFPn8kA5xDviniLnR4Ya321GnBbhU9u3F3yoB7whqNjdykoeMUWLWfdCqo9sjbRubApwS",
  "key17": "23Yf59qr9Xiu7QFrHjjqJvLqUQLihKHPJRU7ctoaSSiTGFXSPqy8FzAHMwKE1naTFxzcmkn3xrM8QXoczy1zE4aW",
  "key18": "3a3yb16GPPrhySsPbpZC5KPumumWfF5g4bMJHpVe1mroVsZAMecCYXxTo7h8hpbq5taSWTHBzpvHBSrxter8YvHY",
  "key19": "2MVNYfHSsaKHbiNJ3RjUYp4bpyFN3PrQe3ET7vWt5osKQo1QrcNtRh3gJji3nMY5J7RTgrKr7krgevGJbhDKN4LB",
  "key20": "3BA1Xd4G2A3EF8M5oNdy1f18h9qYzW33K5vNdDyABocTx3kM2pLUphzSzrUhjfUukpAC33UGsDpJCfkjoLgFBUjo",
  "key21": "2m9BFiYciFnCZR1N3FWKkcPyuvMKgCVjbNwSXZUWyTijhKMtRtPjysarAF4mRCy3EBGnywgTnDXaqGgymUV3SdXv",
  "key22": "3AaTM1Vjja5EvZgMi6Q1QzgJQZt8JbtLJGD47X2JW59doq6j8PY4nznenSqFAkoNsP4f1e3f77c1T4YLetbiGj4h",
  "key23": "5ea6oCEQCWJ2Tj9unygQzz861fx7xrbmVrrtV3zUZxRko5TTGxSK3DDRiaSF9C7jVmCdjTy9KsE1nxEvzxJRhEzk",
  "key24": "4gYqpiknA7hq4rk9EP58qa3yirrqCE4nC4M7iiKWD2j86TJPKbvAw2Ufk4ruusFA9RcRot9Yq5W3cGzmdosnmQXA",
  "key25": "3b7svjvYuCB6d1hdzzedqTJwCcYic9q7dJAMKwqQZfPRgRRWopsgsXHjqBGqa6cFwoowAmppm5HWLpF6d6bk442s",
  "key26": "3Sp41AwwoDGBF3Ld1NViCwMNuqhjgDDMe6VugJcW8WfBFzMTgm2UUo1nv8rHXbhZQQafff5HW7MoEK8A7YE1NFcn",
  "key27": "5rX6mHcb3RTaQ5dPXqmKLapiXEmMnRuLwGwnAfBfS3XD4syJqggZABh3XUJFEV9cbA8X1yAWNqxn64mGK9eGwJbU",
  "key28": "4kEW5mxyFq19HufZcXUePfUweDHRsPg3Zzq2Jo77Z9hfW3TQ7QGgxxY1NPqug85EHR86y3HvmEpz6Ud2ZUSkKd2B",
  "key29": "rqW7NF7iFgmBukJyjAR5NGJyV9t3ktgrKzwQBuBPMMztfjMrrQPsaQSHKjUvuhguUiE33Rq33Kz89PCpr5CDws3"
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
