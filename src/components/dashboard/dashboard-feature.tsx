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
    "BcbHXY8v6nU9CoMNEccBa2hoHWxp5hKXJyMptLx2ZoSji3CiKWh2hu4NdDcgDUXtpVHGudSTQyVspzpiUmyYpn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kP1DQ413ESP4U4UDGNcLkVEznncDDFwbinqaE3Z6V61vSfSSNtDg6oxc6RjWnwQ3QBcUw91ifF84WzKkDbrrC9K",
  "key1": "3EhNMLMsQH1n62a4kabwmp2VmDkYW4SJQbzvVkevwN4RZdnw5uPJiLQfp72mscJ7GJAuvVJnwYvc7YvuoeeRrtFi",
  "key2": "3LT7uoWzcaoEmb7EttJFe57stD4KFFcbPocXTNcnu8qbrHBfJADH1kStPJbCNh2zQ5db6FgoHjgs2gGYdMFkWVFp",
  "key3": "3NYAFctX56fLfPzmMPuYkUcHP6a6A6gwLZA8QeiZ8WVYgr4iqrtSBNfinVQXoE14FW3TwJJBusp1eXvFsj766oMh",
  "key4": "5huGZ9zCyTkry3e1z8NKFrZevs2yYur6pJEvs4jmsWgm6JdYVcyvFwupKRHfDWpRNb2cxCZeAVQRdC5n9mHzNpoH",
  "key5": "5xGSghysuWQKGbYm6TTM879MRhH3ovyZu1ad1m3T5hzGyTifej4tdVA9KsQMmYNkVJwjf284E2LfWzGk9fMgupCz",
  "key6": "wBpa17P2GyAr8MVs6Z3ySYjksv8YfUEtxEm5JPYazUXjAPuK1fk81YvnegfS8wDYDbKB9CNyEYKhbe88Cp418eR",
  "key7": "5eLVYxSmZfcygycevP85znaT7xVkcbjdXGJfiD6xJDeWimUfdwsDxnK4SXzV1oppnKgmdi8MefjzQAqbvcmug3ii",
  "key8": "4A9ZTKkKKRvM5wP4qukmisf17ometWuTr4dv6psWWqbpe2D4dvg2utexTTEeEtFS3FSu2caPqLPhh3ou4ufCacpF",
  "key9": "3jWguZf9aBoH3YebDafrAFfFJ1TZV5SAM4ZjMtAS9nMGxHQHum6j2ZSayjYB5PHicYKPNyk9EpNCppDefQeLDK4h",
  "key10": "2To1YuBTqnZ9rCU2keAabtYpxZWd4oj6efnPHkYefz3BTTg1wnJ6PrMg2X8JRA8zrUPT3f6i86HgQmTG8pnQjRi5",
  "key11": "udmrHVVno7N8GrEVpZR8ex73wow1mvtj7wzj5Hqb38MUveds8WZjd34y6mnXCLJGeiHEt7r8upyPJ3N6JKSRnqK",
  "key12": "5zxgJCP2oMBNK7uPHDvoY7mQEiGFqMuNabvVZ6YozhiUshskGQjzpCPPUb8fPqhiU8G4mzSfe1ozTMNmhacCXWmm",
  "key13": "2qH8PYzJ7zzQGcGARTM5V8eNmnP4tvXJaAL8iQqjdcvZUYdgTmD69jWqJ47fGnpAN3SpqLrqF6WABnUc6acc2i2P",
  "key14": "5Y7pZQSKTvKJdWCso8d7z5LdWcFWrUYacu7geujWeqnxKTRvMQif8aifNcecGmaLDnjALLVNVu9EmnF2gmFGenn5",
  "key15": "3qY6PtrYWQUYZERo2GsJx3q2RLFeycGRVRaKsTTbEv86qofxD44fPeATrMFffqSLh9DgDRtRzCrfMZqxiHAwJGmj",
  "key16": "2JTBXmPXQ2o1gm74RNKYKgpC6zJYgbRv6uE5WnvyDnBUrFWwv1aKFuhyULtzTjK6j2VRSMVV5GNjqf1SQo45P8X5",
  "key17": "3M469FQnbvsCjdhXkN3M8eHFEj9dNwhQPQHbDvFvoTnsnk2ctJnCRH5DdRJetEdL6gAAn8uUrLwyLASSLsgPUwM6",
  "key18": "2Z99qMorenRJktB7HV6refKqEN5CdDiwMaofWtGwKY39Genp5aNLE2J6YDMG3RHQr9w8sB1accr28jgDzpKdWmFk",
  "key19": "4bBv5284qnmqw2waBfGeZihrjeDZNquKsTyhxpH5vb8tKAMHQupR51hyUi9dAxD1zgb8em3sXxdd7c8KnZTgvDgH",
  "key20": "3BX11nJ9AkNHh7sojtMn3GsStN823uFs3oNKHXEcAiqL3gt5TcX6YbVoq8E4YEt17a5xdcHyZjZanNfo9rAsRbgn",
  "key21": "54t6XJb9JVmSG4yNq1hRotPdo4mp7Er7rkEfkk1gnuNGtt83pxfFPyXwosSr7rsN9fEXa4waqCjsTn7qJd4GxU85",
  "key22": "3dS7WZ8xFC4BX3igyaGEJRpg1coPpwzLj4GWmPXtmhYrsy7XeHqZUfYfAt2UrrhPCFGCirMxHaJgt4DTZxp5Nws6",
  "key23": "2QKASRhMKtiJm7euwHUWBHppiCStGd9uPRtUZJyCDhxK7SxN9YaiXW3h6VBP7P1bfbMgDkhKD92XTDZWU7xzo3vh",
  "key24": "15xcPwMKQjK7amBuuk7qRsN5dpHmcdLEdARz3abRq9uUbcgshD9QD5BTJu8sHNwysWnVUxAb2Mn84hxYC1njfiP",
  "key25": "44mXNom7S6QC57EdGGuEXvDQe9sKFuyM3sd4tfmARiijG8AyGKVb3eVUcfsQFRtgUPLfJ3qmnCwrAmqSTzDFqUMR",
  "key26": "4HKqJuk7RZbr1HgNEPGBLrtqZTpEE5gchQS9HUnSG6JnrsDgRHemizydjbBTGB7eTpmXe17khEDeaJzpjfL7Abjv"
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
