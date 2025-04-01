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
    "5UdREcjyxwKAg1CH5pgXdRrHSvnZeLeu35W2nZZHXpc9zgEwhQBaKD4zhmCAnHWfaZypa5riK2NYyR8mMBUvAUCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TbhKjvXjVyBnTnXcoyd8XmYYZwTodGMyf2DEpVg1snKmC1B7bjeWnbJkrns6wsM6pdhfr3F1JzAj9NTKTkUBt1y",
  "key1": "5mmWVhsKaBj9BUp3U7ryKa3MxZKgsv3qmWEznk8JmGfvczQhRggRGo4ooLbUHdGuX8qUa6TYv39q3LA2U2tpxWc2",
  "key2": "2XYWbtpCMTM8s4iTpUztJWb9c7694FqMXv6DCCgNBTaV5tcPfKZeZYNzRkaY5gKLLPcqj3ow7MDf9FCjztXwK4GJ",
  "key3": "2Wo9TvMCukTPP8WryvAs3FYiNz3a9W69BiJQ8dCxNDjuS2mLVahThJCJCLLey7LbxRR5gU6A1w5WxocEGY2FPw7J",
  "key4": "2KsVpGCJBbfDFWws3V6Jz1G8hPZtUZjHdQB1HdCREyxaKQUTCY6qrZKAqnu445SmBaAP6hkTmG2u8mrmcF3DT6dg",
  "key5": "5bMqaWqyS6dmFLfsKGD8rC4zkPy4yktUNm3cwBhm1LkbfQejxYYgaczJUC32mqmTY8kCTpgij93cjmFYu1XvvRWx",
  "key6": "4D77WLGX6gLZuD3Sc8sQ6ZgEB2FaeUkJgeQzQh3xyEQF8Kn8PTG5Ln2uB6j3DQ7qAEgdxy8aoWaHj4mLESsEViCt",
  "key7": "3bM9a7MPjLCQE5dFokUQL3zFHU8JXyWx4n5tRKV4DmxjX752QSKGtGRi7EUPtNHNxxzYG3wqdYsNtp5ayq2QMkd1",
  "key8": "5mRuVKdXzExncf28AUzkhxNMUWuyGwK7EiyeyYnzBTCoYP25dkmmQJfVehVPBHk42GUjS5w9kcsX2scthmTngtDp",
  "key9": "4tJ1YmVt4Pe7ThEyydmGqQZMXgCWDHJwGpoEtQoYHMDnvixqmzSBFJ4CUgzSbNQu1RrAeKDFomSPr4bQx7FrPb4v",
  "key10": "37oJBXQe51DFJuwRfjVhahKcB3SxucPZ4bLgtsWAdgNyaDogRHHYuHps2CdWHXzx8AwEBEmXUkFEDSSMU5wfAA9y",
  "key11": "4fhtjjCN1DDuvr5Aa8QJ3yiTAWi6MB5qmBJtY5SmXWjCMMckic8U74exZbY3GqQ6FYYZBcG7BrukYPipWP9TkyJf",
  "key12": "5oXKEwobRK9vdwWMc2diARB4PCtRfo9E2Dx9bNakk94yUFBsuvXAU2hKg3WxxRFdsjaspoMYJWhnyPwADSiSgPi3",
  "key13": "2KcRR3sB1QbU4SLCFwY6TyE4SJHgu2KVSU7zALxKoGTekCXLoidz47BCf2XnrErbUxEFzk4MvX8HswkAjKisMm86",
  "key14": "4a6SpuRDbnDKky73WMVGSe4KxrfMf72Qxe1SzeK61vGnG1pu1aQcVtEdadBHKtbQLAD4hxxduW3Up7v6CwHWMjDF",
  "key15": "51X5g3WsHfnrugfyQDUSf5mdSh3obG1wAahkjwbUTEzitVojXHySQLWGpyrwLf9pcUaNenvHVc48me8jrMF2zwqG",
  "key16": "5fhxxfpzgz5yNeWiyQfMwKojm1YCfPiC6E1JMB1ALGojeu1Vcy9ucCAf5ofcNhe8RcxEs97Eod4Dgq6nQe9t26mq",
  "key17": "3vS3SKeu9FxxYZfq2HzdUkvjX8fG8foEQQUND4yAh6a49ZozWDJ2gyqor5LUq8sQGUtKu9S1ppSLHvhhGvVUc2kL",
  "key18": "296MgSNJEKifqFtLJ2HVmwF3bHrsHqAwsKUMiVq7sfn9R24WPemWQHxrMRkSamSmVNkNPNt1xjQ98dRAm2CWtxzD",
  "key19": "5dZRNqEhibNEMUfqnz2u2yxaeUzDYwcABvFZrC3FNEQCzC6NBSjcngq98ojv43ZGYjByfu8uS1iqPUWoPfSNG1qt",
  "key20": "2a1U7KeVQjWt4Z25bwghp3uVBjUHfacKoXQRxykTQT6KZM8xjunLvNEDvUj1FzqivJ88v2QBRJkPeukSLJ3hDu96",
  "key21": "ZhYse6QcFt2hVnCWZVkucioRtkx59mtpe5HNU8C8XXBM2uidkhSXfxV4YewYvaap147uqhq69EX2xyc5MaWvLq1",
  "key22": "3mSuYMKrZZHfkcx1iYHe8SWJMEox5WrpCkQujPCxwSJbkfkbeCknnVPSwkDJAzN5qsr1kcee7ZAQK1XRDsHHRJDc",
  "key23": "3LELe79stAikgiBxn7CQ5y8qb4QD4xWraSZYdMhr5QXxnuEgiDeVEYSV1vS6EZHveh8saezGGn5fbx5oSaU5HYfL",
  "key24": "5di1HP5DNnRkHKR6uCVuDWvAyAu6eBpeafLHTmmC7DwMaoC1buoLMXqvdqQ9qe8JTWzXE1tRoCTft94aenEM8435",
  "key25": "2ET887AYQtXpR19xFCJe9Yk4Kjvj7K6B2PKcSDxgLxmqaiZwf7MBeMqY6WD5vFrikS1BVvwuAmG9MMbhuu3CxjRW",
  "key26": "336yyuM2cXzRXB9UGTPNXRtZ664NhArKYHsKdPmJyCC5sC5rGcgGWHmW2onfcwqQqB5KiJjppMchmKrVTGWdKg2t",
  "key27": "WHkCWZ1NF7ZoZ8QJYHCLdiuoMxDYtQcfaSLZihJoi6x1XzZZtCa8fGDtVVCbVyLF4heCDvrey3YMhiQGCUzzjyD",
  "key28": "4e26cNQrZuj2Bz1EVQeX8i8q1qHktLR75RiWWHT56e4tNFMvLKyuWGgY1o17BeiXLZFhTmLbzjjiLZx49DEyRJBi",
  "key29": "38v8sMgLxNTefiV3cSCyZ2bVU62RaH6xiKPRPtnbGxFY2ia16fNeBtERiPQwtMaFnP1ruXGApdxNVrf7cH9HuBwe",
  "key30": "24spV7w4McTojKgHiQ6miDj2WdJG7f3pBzfWhoPY4uFA1xmLzCAaXr2LLcsdSyMa9Mu292mV4y3DLVksXnkc8dHJ",
  "key31": "3R39FBJNQgFt2Sn8eHiCs8ywFER91PqG1fATaLDtmrFKtfenckkEkLY1A9npz5Y4e5utCMmUv8rP8k89i268eRgr"
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
