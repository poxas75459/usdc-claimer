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
    "7iH7MXwArJpTWjjQH2kYEMgmesugzjEiFWEXTF3jpTPcrx3exAEzCp5ncHdfqtwe9Ccze6vny4TADejNie6uQ1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKeq1NUrm8eBtYuWkK28CRMvopbqwRr39Hy18gWAku451x3ARuLWhMekmAMTeMi7yJvqEyQ9uKCDzxGC9xTDx38",
  "key1": "3yndGwRBfnsJhSykAcg8XL4HQs7PwS4xov2VD25FTbuo1mBLU9MHgPDg3ToCQH2yLAMguFv4miTvNAubC9zdPoMh",
  "key2": "4qbY7ogTMRKDzEB1HfGdi3SynicFuCodhSZPtuXnXsaTaXR4ridbfe4vwNFBJsZMC8XyEdEPEdJxiEhUuUc9r1hP",
  "key3": "63hAf1Y1fWPnXVWY16KdYXvMpV4UM91Scw63sAKSjCChXay6yEFstTsPwsZmQWMmnfyaHJkUjt3zYtgbTGDzuiBE",
  "key4": "4Panmu6xEdanB8ae75B4B78D4ZxcXkK6xEUcuqr7MapM7M9JLWhgZYobVpkmWR7ytGS4jjkE6Xd1LWTcXP1tedts",
  "key5": "2FiBjVvd7RQb8muxMZ6QXxkgoyu4r9EXHxSRnevGrWDiQmtpiKAWwxp66cddAnY1satBZSgbVch5ocv83VARKutx",
  "key6": "3rhhRZviz5nuHTuQ7sogpo3caB9Y1d12dF4VBLtJkQAgTMj9ydekgh8JCA3BgyoaPL8nhx8XkAC76Wkc2r3ui4QW",
  "key7": "3NQe7DFXHD7CpVbEqQxSnJNCxZd2wWMN6TnA6hLbR4gNXbddJeLxTPiPe6454rpahbCo1XDU1p1x75MTYUEVDQHn",
  "key8": "5cqBm5EZsvWfkVkdBhypbSnHCsiPRhK4NSkRbmTCQa541xL9LeBrw9nzT6AsR9P3RJhY6dn6ouXTxVu19VfKp8Mr",
  "key9": "3KUP66GM2f9XXMES9rPC5BBQ7bWAwZsSAUwFFYX7ZH821yZyut65ADzupBXVgKpbu5MMYfDD6bPmn45Kv9rMaqrQ",
  "key10": "3PvHXYipo8eMFGtGRbWEdP7cFpn2UnY1DA5SQDgKCxivijx17b5iQ9k9Z7m5JSiiaqNfnFBQZ2gTjYWDAoWY25Uv",
  "key11": "5qVQ3a7jcnkKqybuoU2nTDpYxDSaVUwdTpeuxY6MTpknb9UP5qt4NS4745M3zEe4ccpf2CketLHKKYkwvR7fi4rf",
  "key12": "3ob1yTR87hpw8xz2hX15rgT7L5e7kjgztQYH2AJutbFjoGh7WkzmbjhqKvKCogywQ9rt6NCa8XXeDn5VuPyoPERo",
  "key13": "u1cZ5cmW7VAeTFf3ayuTpCnxS9i8dBuaZek54gFqjEMYTikdZ8WQ6zhrAa6uDsrqzNpB57VBRWcUXQAAvhtEfkf",
  "key14": "4no22pPS9Z7RimMp8TqWfKkkCxCkYoe8omtMyABUSnHDa56CbKA2xSuB4PpMou91JDx73xaEvnt5J1Fd5nYr8SFi",
  "key15": "2Qc7GxbNbtArDUJSU5tz3bRzkRpdXQSZExoa4j9Td4vm5VXLbdi44NvvCUsw6n7KvBCuQ63ykm5Dmh9gbYXqsRmA",
  "key16": "472ttVYsdULLErUzgzqjXtsq1iCG6kgDLzh2TDdKUA57E5FLJfFLLAqtvQVHgqEXSnMWCc4FqFkA4xuGuBUDba5",
  "key17": "5bFqqpQuNKX9vFSPeQJoXYfeNPb6dxqUXxF7jp95hGPwvNgHxhDTCvVEwXLBGFxqjNCYfVuPrxtcDvS5RDBjP1kL",
  "key18": "2gou44rFQo4ZSMwyAdkX7o4MDTQj6Hd9DBJoTnRmkD2xjjZbuvJ5QbykE6M1dnaqNAsZpCDJjVCyh3sJbdZv3P71",
  "key19": "EhcvfY6BZPoKjRccvqND6o3RDbjaDUCzHTXY1xJBckENursbkfzCe9QaQdnFzvbv6U8PmBy2E9mnfBirdBAMPuf",
  "key20": "5m9ckTVcrR4RPxZji5UvN8aXwRzHWwpErip6szSqcutTKG95tA8A6fH4PJG7MMAtxRuvM7T1ysV2SMfN7eW936Za",
  "key21": "5is6vgb97yC3Jg5HZecHmscYjMZNZFsJWmSS2q5bLDW15hQutsWy3SoawybmxWT8jW7tCxj5en6nraRyfkX1xmUW",
  "key22": "5FeEdFK6bRr9JLCRh8s3h1RoYiHG27FERwqehTik9cBqN1NR9eQqCtNo3pDxMYDdxkhJWPbVc6x9N6mcyV45twcZ",
  "key23": "2rJcTN78LWfQ3fdMAjnnLS1udxyjhGqUGYHHS5e6teGBk7yfCMfVyTWNNf6GRoDLwUcg7QBV7e9BU8c7dZzBuQYM",
  "key24": "3oKK7ycXpnWqUA3RV2RKdGm831DDNgzhEz4wmZkKib2i3AEeguGA84JjipHG9ZARfVdSVD9NFJZYfLHH3mxYbaMz",
  "key25": "2jJiVx99LsyvLMu5gJWJohz5TDnopzaZYpufuoMBEK9q4auBcsPwrhsSghF9gUXt7PJAMUYapyE5W4FSg4uVMTnr",
  "key26": "4skZv3aNkcfwabXbAKWVC2nWPnMhDybqVWXjUDD9Pz6rE7nKZKdieKzgvTY5EyX878LTeFBm3MZTPA5CcqmFhpyc",
  "key27": "5AbpVihx9ZVtM3bV8TjPbaSgLS8hcK5y6WMGYRGtyUtTpfwYkmNPeX1kLvGjZvCsYhuzC6Sey26T9fmah6HneuK8"
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
