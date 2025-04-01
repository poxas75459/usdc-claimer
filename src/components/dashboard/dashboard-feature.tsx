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
    "DSaX7FC8aP8Pbq32DsrDjLatgvpzxbsZ1Xe1QWLNeULativ3HumfPGhPAJ5vP1x4H4AfKFm6XhqkN3dLv5A2svf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9keSRb8B5Y9FAvsxSeJ1sqTuR18aZrQk8r7AxHaZRcx7w99FM9iPgQgjCgYwg6a2Tc8Eanji8kyZP3MvaU4e7F",
  "key1": "33wX2ZaMSomy3bDBaZE9q1uqCrZbXQM3sMVjCYJmwpXjbPpw6fdTrfB89fsJzp7XLDk3NKrxTgcTjU9XceYSJhep",
  "key2": "3Y42tHtyiEj8dde53LHP1xbA7ccQaGTsGkQEA4QVBkWWzCazi1nrsyaDamkj2DVuwirnH4xAv5LQ5G4wZYfED64T",
  "key3": "4Zx2HNDfuUwYgEMYqFx1wQv6RzhQjZjtYNNoA3qajcno5bQefCBAotggugtJJqa6hM8V82Vdt7bfPu9KrhD4sFw9",
  "key4": "4d3b8yDuSuXaJyTdJH4T1ehgsycUxsYUHYBs7BKJk2tEb5r4342kponvJ9E6KTbRACn5WZxZmagDpoHS1sdLybiN",
  "key5": "3cbgWSXEb1nmPFJPvi6FADYsPtMqhW48MpNKPkP4MWtyhE9z6thzkZbsKQAidUBKMMh6gbRnPfBcUV5WGNELxH1k",
  "key6": "4sxBeyxeB9fJdkh3RK9npUWUhixwEfy26pTyg3MoQzkvqcUiTv7NnnMrnDhyXiLQii3QihKrqpbxevdwaFCUEtJ2",
  "key7": "2UgAKLfiDYPUuKHjHBYDtCFpL833tPQpcsTTYYxCecVQPeu9aLg3P1Q7t8baxi7RuZTNeiHboRux5cME94JYTnhG",
  "key8": "4uJwzzDh9EtyfE5uQKKxsUjsZxeNxKS29cbGFRPi6ZemAvjYYcvXBkQ78VyrTbtvnCWAs8V4CWQQE6vpCn14gtLJ",
  "key9": "dkjE3uTXbZRT4xDzwVGpApAHpVuQ14P47KfCGPEWtNtVFQN4HqNu86b5jxcZmTrupYvQJv6pXf3BHwBq9rqYEiv",
  "key10": "qwRzw39Ks6RnGzFPKDMuUMHNCaj59542MUaKfA8GqctwcFw6ofhiiWsswJpA2NN28oEisSLyxBrUiKmiYo2mQYo",
  "key11": "jtMzpBYwppohyznGArEBPXW1HVwTXPoFYPg8K9xJJfa9fK1LRLmF2Jut8c3EakPcFaFSNRV2AGgAhXgSpyvqsMd",
  "key12": "2MWQjQ7ahjX6wRRsYfbuXQLCS1wkAu7QkTYLTzPBhD6ncBXX7Cysb4chfGw9HbFJ6kaufJEjZcQDouo5PGDYHAtN",
  "key13": "3afxyeNyV9yv6HCoy3UTbfYJyhMiqvXfgBvLytMkNoMdx18DchHrCdYoKnWcB4s4aZSqv6m3wARKocj5ujfJKh9v",
  "key14": "4VMhYvHz3wMKhwF2xjyt5r9eeqXLgETzUWJeNUqn16PDgDL1cNPdCpQBVx4kD4fDADBtm3dRq513iswsbbf8C1YN",
  "key15": "81vNM4nUzmBXRPFMLejGctpHorNZjzn13x7DjJ6LVJJh8MUJ8MBi9xPVZa6RyJbZomrqXvRPK6ucWtn1u8tFZSU",
  "key16": "4R619Vn3HLh7mKCXoA1xsTugvevvAES45d9TNKkJ4Hx6ZvT6XiBppjYzg3C6W5eXpFEQ2YFRfnYiuNyBqs7Eg5si",
  "key17": "2JPx8EXUvze29CnXJN5UYp3YsWcKUdJ8MDyRvyFBRSx6yQngiYrpKuaDqvrQix2XyTAVTa9yJntBE7QievcpEufZ",
  "key18": "3ftq9v3FqEfZUgwxgg6wD72KAhS9cotaDH8hTmeaFXWD1S17nvDrFNoEvp9uxo73aJqjiuPwPrrkuNLuvRpsNY1Y",
  "key19": "3JPYWmpo8r66JqYa4JRwSALvMB8XEB96TmcXUDbPmcVbM87KkN38PqG2kT5t2qiNgpyGN8Ks6UcNTcERHPCZY38D",
  "key20": "4WMH4KmGFKy86zryFjvUe5ht4hyXFz8fgd3pymUwKDJFwedh5wUQhpcQ9SdPvRRNEgYbze7occAMMcXKcYr9ZxwW",
  "key21": "S3Nb75Z4fSy8mjXqGVHb7TfqMS6d1jsSZyjysg61ExKM1xWzG5uLGZ6ZcPssecQbd44XXjQKbaUJmb7KZGxupeA",
  "key22": "2VFtE5ibsrpCKhF6Z2exHFSHAvR32UTqXF2J6jdNKZ6Pw42GciCfjsdCfKYwswNPtSLHMkMCzpqPXxEWUE5DAHhB",
  "key23": "awSeMYmaL1Hm4kgZLvdvJammwQ2EDqkLnHKhjHXqd7iXAiCLKDvgKRDLTutxtgMpoNtPoQnAQtSFgcggc5ksMzu",
  "key24": "EgGCnz939scJfnG4BrcgHiGwj25LSyZFVBysk4WmQa66rWP3DaseGaSQpDVupsb8XQNoamBtNN2kdehXddgjwMC",
  "key25": "3VCqTnzm3gvieWfePHArauXgrWVau4UHmEACVzvyaioN117emykSBGUTLKEkKQGF4MKWuJprmhHgE1FWZTtWsjQr",
  "key26": "5LBsGr74HrqfrXYBzaq1nRdyTZrLV5t97XGU2nXG21XzdmduLRT7wN4Xq6YpLVcUouz21Bkatyjme4kjWrn8fuZc"
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
