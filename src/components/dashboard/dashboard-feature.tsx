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
    "XcbKqbMWG2chLC3HjTvg9U2nojrwyi4XKChvYoKZSVn7nf3cJn3fpSzpBeStb2hWLZLu1DL5PtSUyyDngx8kAXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLNg6qPVdEYSWviUbrKEAzPJCn7ir87zNNTbUooVsD7uNzcDkX61NPxVkHLmWm8XeVkBzXga3UXeed5egxprDzq",
  "key1": "rz9swqWNNMx3gD6aXEs8Udq8T6D7PCS9X1o2naw7NhHgcrpEqpfBAe4uLiVeCCDteuNGG8T7H7MWiWZF9UinYfr",
  "key2": "6Mah7BCASGo2TRiV2o1KZ1obbT48dmaASEiPKB8qtLvjqr9f4dKE1mp88cAJ8Q1xtf4WmPcvK7PLREr1i75diRs",
  "key3": "3Ld5a91rPsmoqUXmzzrZvqD8JTjRERYqmeDLMp7CdvKBMQwGLvGuPb4w1dfLyaTvTHGxf49Xkz9yiAS5aZs6q5K9",
  "key4": "32SYWHK6WHZWpMtx3Q8z8LHXogRgrmao99cSsUG5FR3hPiPgzVPL1WUkVFqNyyE4Br6AEqPscSSU4mswgHx8ceYF",
  "key5": "2TQZ9HvX3g8isTMsZfazRZNjZiVfnzxw9Uv5YBFcVCeyRUah4XT2yrG3mrhttmnZCBzRENRVGZ259M6Bnzqyj1Yg",
  "key6": "2y1mG4Pp1kYXEy35tk2pScvUWneubWqVN3FTF11B8SDKcUWuHNPw6VxHRVQfLVzkeHHquS2jqcvYp7gSnYrNEkpG",
  "key7": "27AvEPaXWwrVNr4DRsTUV395h4oyBDivrx946ur5dKaRAF6pwAi2Jbz9dbqH4yDue4mRKzVLbuostsLwb2VcFUBu",
  "key8": "VdR2schH8RwmkFbqoypncoZpqnotN8ZHyLnzZhdwJL7KADKwKoauR6sYDQiKiXPRnrdg9ne5vjp9xjcKQbhD3pT",
  "key9": "21NcT7K4YeiH9M69CmauNJincamFs5rb2Y2TTinib85EThv6ampTLwEi4pvgdetnDG2jKjJ4zbhhxUPFhnEYRtyT",
  "key10": "3hxztxWoZg5KFf5AVbhW8hUNqL98HYDmudq9wHS95R7HCaxugUHCxJVzr5G9qn5LSTFJ7JJPCLgMcW4nSqzCjhmU",
  "key11": "3jhu6TU4GeHW6NpLLyQEDo6UbsRknqvhd1KTbhgiG1Ww6beY5Pf1R6Qm1LVVwNemRTFpbfYiUwo9JPwnkDTPiBb1",
  "key12": "4ZxzA5wM42CH1JMyfB4ykGYKBmtJUuMXBWfHJxeEk3tuL6acsP2zKzN46xPmbmjvoHaRkiyoupHzzUNRmizQYxW",
  "key13": "2s8gLXTVGhvnqTwGDRddPcMVqKEXJzUGGMkWbTbJQGH2stkzaB6RXEgDfuA1nf3KwgMBVtdxM9bw6a2DDhkSDaxd",
  "key14": "2pf1513s7gwJLakHhXUeRdUyATEYoMk81wQVjencCtUFJQPCciQfCNZKfWuKGbP3b48fS48jAKacwxxNpSjPWNWN",
  "key15": "43XxMuRjTpnmw1erDBRYGeX6ptXsvE1K962XkYn3SuX7fxEXyBFNJpFF6AB1Qu9s3FUT4zWDaqiSTnFnU5U4yCdk",
  "key16": "4AZqwwPs2wExVwtVkqnUR4oAgkrffEXp1JiGpjnBnsfrwy6g8DYsmJuRhdN7Tw4fZFStsLmQGgaBNNA6wH4KmYDR",
  "key17": "4oDotak4aNWhQQTP54b3tsDnnYScqszjLTgNLynYxVdvwjQQZ8apRDHBVDGVnVDAQZcQniqR5z3j7MtqXvkr5pa8",
  "key18": "5aQ7tutCvSMLdjnVzg25YdmMDibQzq3fTb6KMdT6M7CH15hdSvgVXdTmfqspGXx2CKED4q2zswnf1jh9ZaFndhFL",
  "key19": "4NFx2jgnpoHqqz8PDgzTe7ABuxjwu6bTiuRtz4kbBZSzZPgUJ5vF9buBRdkZALXZj6NNzkGhP4tu32tkq4Va8iir",
  "key20": "2fBqUxWtvQBq6bZw6D9rDgZZJoMQUB1k8sZqAWrpaZt7kbcYjurJj2bWJhDHrba8Zy2cgEGt26Y2UEXAsZKAi9nH",
  "key21": "4d3PrBxbqtxkPBH4BWYanDvGgT4Wuze81UV1jbyZcSBnPnyMYja6QBgXh3kfn7GWGRW6DNw3o3RxyDaqjW4p9YYC",
  "key22": "RdL6Hr8nRjZVvGUbcNgCdi6tALUJFL1EySX1jJckYs1tQ2kb9X6uQBX3ugYRNecF7RH8hHtRrGp2D1jVjnHVS4x",
  "key23": "2MUJYtiMnnyyRCuvoDqVZTHsv5LMhajCVSfSrEiHfgyphw1oSAaExdMjDf4zncEm7L8z6ZkfWmzvbWggM8hawXpo",
  "key24": "5qW6HWQqXdq2QYeHomjARws46bBkxz3XDcvXsqBFhkggc6z4UbrcAz5wGTPMDFeZ6MJFCV36hoECBcsuUbKQgxsX",
  "key25": "2J8z1baB1jkFtNRoU4tq9wCE7y2jmGM2SwJMroNe5i6PZDfrMfxjv1YVUrHnvTV9Jro6CeVShD77e1FJ8my4rKFF",
  "key26": "5wNW9J8k4sLtta2uz4i2NX7anDPDXiEA6hRHGx3kKasNddDiNBPvhV8MohMb2BvuGuDxMrEhYqjWyFy4E2PGT4fN"
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
