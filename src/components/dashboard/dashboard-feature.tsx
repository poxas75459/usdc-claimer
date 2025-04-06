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
    "3zuaqHSGad3UHusKnKh3LVuwxAE9Vw76RZWfcPhmUoHgwyvaAPznw2xkEdY5CTxa6pMHkoT7sJ5o7ZFuLNF9weQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoaopxTj7Cfbc7UM9FWRaXMvw17s63Zi1fDKGN7RDo6bMKWiWzDd68PGASvRQpZXis6F7Y9dHXeQRUSSecqba5R",
  "key1": "4p1R41f4BDn49F96UNJZiy7xYyQQ5HvKMrbH7X1NqvvjbqmLh7hE9SmovoAVYw4Kq1x4Ar3GTXEbvBy8zQB9SQGE",
  "key2": "3G5wtwVNmefFq2RejBu5nLrHkMt381dVKFdNtYSsSHS2o6rktFFcYu5P3zbDko7fTW5T9LoXgEG9TeaRpKKZHCDZ",
  "key3": "3dsvHvx32LeghomP3AwBRgjryUJqMc5qmzuQ2PY7r35qRf3uxdw5Hu97AENgqZDjbcAemKEhCZGF5mhV7UvH4AA9",
  "key4": "5TwsP3rL4ZdJpFQTuS4nTDtFmvsUenizAgUGCzosoyN67LYFUbpU1cCXUf1vrogpfo5cjyMdwNEwrqPPLDbXR2Ug",
  "key5": "62R2sCct3zLDUoHaoNVrEUhmuUussBxiC7DjuRtjioZgQVHFBnwp7uCVvvJQgvJnPzP4sYRpuLuoUEvmeb11R1qE",
  "key6": "2XM7pTgHkzBazZ2GFLBn3NHk7Uz4gaqwzngGSicFDBm6f9YBMQBtJFT7yZTTQiPWssXbi4KjVwc2n1Zabpt3DZuc",
  "key7": "5WndL6mmt8eHp3KFD8aiLVPRdvQjGrZDcJS4Pud6HPeHHHeDeSTc8BASXa4WtgmsdjP1xfDNEeXQA4xm5YJiqnH4",
  "key8": "gGJepbSCS6RniH6554MRdApM3dhXArJJjBF8GtpczBdQ94gnqeroXy9fZS1RuxmkgLGcqcT8xtQiR8oyeT981wS",
  "key9": "5p7dQKt8YbRD6tia7PeJiLGtRHKdbth5GqYNgT3SwYMs7KGEK7EgERXRW5Esd2a7WrRAeMU6ywsBuB9yfDwyAfcr",
  "key10": "5EFqC24wJ39YSbdPp4AHpBY4DcnkfHYamdNitejKzbQtW9hWJhuALQ5k16skYZGu8Vzct19puBMN1iLNbnKQr2wF",
  "key11": "xTunSn9gQzCsi2ZHWJ9bxSwcsa14MRWCxsaGF7azCt8ue1JT8tQf4hFRKtDLPMoNvLYacra2rW9NomJ5d5hdBdR",
  "key12": "kS4hRUDAiDz71je9t9n2zYqaMuCsGzAvUr2zsrdnf9oozP4nXPXtyvM7Qg6oFfHzYWxBcbxcLCMr6bx5gzCTCDH",
  "key13": "3bh5xamGWWFN2NrVShV657fjoW3MFAbUaKE4kRmNDaTYMp1V51m8fmBedYpEZGdsW2MSnBgsVW9D2m2BcTSQ6Nc4",
  "key14": "431yPtj7FSJJuTGgjGE1PtURxcwByJtB3YEyJdGgM58AA6SuST7rzFMjqUEdtoFxdKfJjps2xbL8uV4BeR1zkQ46",
  "key15": "4WL4sBwjGVbyjoc5HZnzpphYJ989B3K3p5XKSbRx7xoEva72vP6jzV8Wx6qU6jSqfWDUmKHP9i3jeLM8x4tgJA1v",
  "key16": "3rznQRGRH758UyhkX5sxWxYZAquKkAuY4xFhdheakWkPuhfJfjVo88RaMWdBAz1po87zErGeW1N8bCKVinRPAAPS",
  "key17": "QvUATxjt6ZZ2vcVyGLZM3yxP93bB2mJuDrSvg3JijBkcB1HXce7WWUktuAJ4PoCFGHbEGCvUxz5adwntZR3RaRj",
  "key18": "2ThgK16DpvPb3UiwLgSVSBEfP1ZPLt5asffxp2c8n4XuyRTqgq6WM3JJyKD5ysLbc59zZjekfhZxBhtyTEjy8fPB",
  "key19": "2dYcnSRGC723hiXNgd4MRN3AmAAm27T6HuhzigHA3tUpmk8R6m9TAMSu77QPP1PBPfCRSrJo4LikMLncX92f894e",
  "key20": "2XGR7zFtBGHkPFPLgYKLTWgp2UJxEeoKu357jupKZcUa682xcmyTQimAqzsx4gZKnrKyyDzU5C5mvMq6wuh6DQwd",
  "key21": "bbCHZZVbHPfoxHCaBBPEuvdgtXsw3GBQUv48kSomwJrLA9H6dHViFzBeE7sAbe2Mq8AvWkvAZWpj6ApkyRU9JcA",
  "key22": "3PJifqoJrQorxBRerwv5sw38v6tf2LEDiYJc2fDtS3LCVBPjHrAnWmd8z1JiRA2hSDUSkVhRxC1cfTJVBjmgtSJq",
  "key23": "5dacaHRYeP7ps4755m5EXRXQDseuXqAWt4GbxXwZHwFAvQGR88nLAQBsVk5T4sz4TNF2Se9xUUwDy84cmkEf15qU",
  "key24": "5fhzotxGjsFXmnTLxupjTMZS68vySgHUmygjkSKviytvya1LvqsC7bv1Thko6JRTavkzDAsRZ822gt5p8c3MBCJ5",
  "key25": "3SEoNjBQVSrb35icb8x7FR81wRn2Pc3zV2zYXisRT2cCkDLkVm5Qc1ecTL3fG8h9xRe8rzkVZpj9Y1ZXsE3dZ1iB",
  "key26": "4JuVma8baSWrF6aZaJ6SBxwr3g1AY3cJGNvz2EWfBYnMaS94XW7bkkqHVB8G7tKbyedra8UDVhvA4PXM7XDjQNap",
  "key27": "4aorgarAm1YRPEbqHU6qByKy1otd1ddid9jNrfynp3H8dNGhnCCB9PquSXonT1p7WSNCS9AvmwwHYzzh9RV6YjZ7",
  "key28": "4GgKobCz9GLq6MzaV2naxerzEzCF6t8FnUU1fEewivmrtvmr2mb8WbxnCLtkwBpcGjCEEByp82MMFYU7WRGc8BFp",
  "key29": "2kCSNfQsB8EJK2FQerWJg2yJrDecUdFjrYu1zPpgcv4jQGYKpZWnMXqTQ6miVYdBzggo8PHTHXqg3FoQe361aN1F",
  "key30": "4XfG2xLVtn6eSEpkKUufYN5rqq4XYUgRRviDFWefS2RuPLjfGCsCRt4NUTHYgkSFSqyM6vzaBzDuij364J4fvC9w",
  "key31": "2giomB6mdeYDLW98u5HC7WopG9mWDKPj8CPsBxLWsdTUjL6wzdguhhbXXXB9AjiDEW1E8ctrG1BcvzBri7j4AuP1",
  "key32": "2wxWMJb9ximoYNcmFRni8RSzp6BJq8u4oJLgYUVGa9MYVMdqwTwf4jTEyYkstVMMaeAuLVuWj7ogYjW4ceanPm82",
  "key33": "3Rjr4cnBSsy37yPEYAZcuLmrybGDe8sP2fnnEC3gDtvr4cUEHJpQjUqTHX8tPztMmo7yK6NK51xMmW8UZ2skQvfi",
  "key34": "2HLTujNNte96sByzf99HBjDm3xLoNwtD8C61rDiNaunUSUUG679ctorw1uwbS59A7ebGr5fPyCYhEhztCojL6sGt",
  "key35": "52WzTGL5p315z1M5khzxeyAub4qf1xLgu6n5TCuaZt9ck4d34ugdzb2DK31yBrRixUV2AULLemh5kJ4WDgPoLQz4",
  "key36": "sTMd8iv8CbKaXJFPvfgSTh8ikoBBEdTjPdq145QX54C1pMYQ56K8sLg2RyNXGUWtnKQNqLbSFWQa258gpbAAr9r",
  "key37": "4Y8gqEc35EU2mLeAwVsPXNKQ7Ru749xtjxZX6J2FUqtbVoGBetGT6g6iDgrHNNuB8ZP9MsNdaXxQDr9iFejp8VW5",
  "key38": "3hMwiUiGrEN3hpcuzmofxUd2Unz5RjNLXyJXjcsA1AfyU75GqXmPupnsFx73PkP2JKx3VZSebyppE1GjR8X7Ktyz",
  "key39": "2hNqSCG95kZZN5LPh5t1PfaTbGhnhQKQcMbbSYQzXsHMNvnEprUWt2VoETf3r664A2PKJNDjs4QnmQbVMKQMrkTa",
  "key40": "tWgWYsabX79Dj5k5bDdTXi4qPD64DJU99VGcx6ME1pc2Usx1YBeQ3JFPaghuz1CAW6aAZgsByKep8hUzHAUVGC6",
  "key41": "2pvXdhUfwELKPpzJrwPGVfBjcvTLRPzzdM8CcNg7P44EnqVpF6Trwqj4zBJsfy55mibU9GXUpQWvi8sKxbQNg8Mm",
  "key42": "eogxVtsPU6sJhirffJz5pKETzatESVpu8rKVHVqXC74CdFYcXKoW432cXSpKFZprN86f9zGpkQ3xq9wBTn8jAcP",
  "key43": "mBmSiyv4UcnbBTGeXuS3Ua99ALqqvRynvJRey4Dt86igVnhYioTNDgM9q1WrLMkaEFRmHLH3b7bhavaahwcHVJZ",
  "key44": "4nS77tj8k7YCgGyGnYkdeukHRVTdiE8RVXBexHa75Vjh1w8zp8fmHcw69S8sou8iCWJooq7mZEnDFianMkFgghFw"
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
