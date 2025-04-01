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
    "5riCEFJu1X1Y2UtWCP315YnuwTeF4Z8REmuadYKkrbGJskaY4scBaxkekMEjVNGdnaguFKT7mHieffhyLGvBxZNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVb5jLapb8pVa7DJqs3mCa5dNDqwJ3CBPghhJpmp3Vq5j4kpEQF2A7Wrksp5CxcXqnKzXQ5wgyPoiUDx1UAJaQ3",
  "key1": "H5b3Sns8xaNcpNsVmyPXdPF54TN5L92pTRrDHsR9sbzW7Kv93veRry13oeiu5YtR8QMquMKXFzY4bPUPcLbnL9e",
  "key2": "3fc9ad7T9iWJM7ztwxk8pEredL6mAjYaCfnHtzM6ctdY74sVhgD8qhayjrNUsiT4BWLPCyqZxZUEXXC7XCbLaZ5Z",
  "key3": "1QFBoa4D8gQU77Af1rRKmghz5zGtD41jbjhr8w8ot98yiQqHbqx2VQSe9E2iYhe1XQMxwwrFcihtB5nPvaH8jkh",
  "key4": "XUdfF1QJUvBiYcGu3cNeLo9zbH7sq37WGmf4ENFsMKmgbFNxwCi5yCpr9GcQxF6oH26RGqz2CJqj8viKvutGcQD",
  "key5": "3TkMDDke7h1PCF45wuvNnjq24vyDST9YmpxEAiXRrR7uPnBZ9kssoZvQbQgRonCYby23D5CfSZyTdnd3HKaPqzqH",
  "key6": "qBNHxAvH8r1qyj3cpJGijVRR7apmwoRrVhPfYwjQ16mKfsW9ge2WnrUF5aezhgdFEohzsNHTHTQvG4JMYP4UdT5",
  "key7": "BBNjumhXEMjScUAgebuHdxNq19fVFweveDptVboCe5eYnfLv6Wx8c1pnEvSLQvhn51cdtvYfsoUua9pdM3PQfCr",
  "key8": "4ALZWihKkiz6kuktwsLH25HZ2rDuJqS9RHEzoo4gffQRYhFyHrto2jZTJmqLR7nWztZKKsmfFMhomYRax5kLfJJ6",
  "key9": "3pPuKUNt6XSoqFHyVky8wonZo2k4g8QZxFX7dYYyy6XJhGDWtkF37RQFTnJij4m6LxaXbeFNUfXMoGByQMt7k2nZ",
  "key10": "UJkZV94FebJF7qa98TGDsYfMpHmgjghzTZacEG5Cqm4eo1M4idtzFeYoFkbbRKsCgjuKyFoXMeymTua5pPLbFWb",
  "key11": "4rJaJYvGD34tRzKS3mSfCGwuT6QmeHkfZEzwqhKAFiZPgmGYEne2pMvAvamdENfQSmSk64VC6esNxjeUVhXHWKeq",
  "key12": "4UR1tW1AQGCyiGgfpR1DecuKyxCTE7izhVW7GNWh1fd6ENdgiVCXFonC7UGdRKPybAx1NP7wrSbZDnPqcGjd13zH",
  "key13": "2emVeFq1QWAKer2v3xugATbkLjcq8wHXfMSxbkjsNhxxsK38sfD1kQLNLUBjJEtDkt2kXUmYAyTpr5q9GzHXB8LN",
  "key14": "JXsm7L3kjfMV8bMdnCxBCMbLR6FqaETh9G77uFmwBXK7gH6otNTpEFUwsfw9qT1o3kzt5LDV81KYdXgJFkz5jFB",
  "key15": "3wa9Nn7ezQ59PSi2RGTSeWpdq8eiBjMbB5nce2mRSFCtLsgBXu332zbh2txhpiwUMdwxDMYGaCxfNmcDECT1gXsB",
  "key16": "3x5HGFgi819ry1DHnxYQ6sVdxbqwWU7FdyBvYbzR1hx1wQ8XW9SV7wFxeQW9Yfivk6UhYiFBsV3vf38m19ofYGEp",
  "key17": "3JQPn5jvRbaXyhsDQGnWs95DJDQCKbyUmaJHu1UuucF7RH9ArW2VC6g39eTAvuWDhjCfdrsfqXrBaqFbbshy7ada",
  "key18": "4wXN1sLoaXzzrJX4JDMcEqmhFKTWEUbLW362J6Ug4oCKVmknPo1VS63ZEwWfcgaEwkdUNvX7u7edqJPbDsw1Wca6",
  "key19": "MyTUV8kjeUKTW76sP7WogStB9o5e2THnPFGBYYcMV24MzA6sShStrtAdT9en4MRiHTFyNB3RLbGwa6yoUecKvoW",
  "key20": "2mNoUCDMgrLN2t4tQzWAmy51CoiriLpoSXgvADfrJin4PcTbJ6Km8EAQ4d8pbL3Yk9sHo4AZbonz3gpud3HteK1i",
  "key21": "4WgLFVekbn9pR4pMp15AXbqHmCisfEAHmPFWFCrrQVBiuADidfiws6WVWtUMQMQau1UBz6hVan3HPNNGwzuaURCz",
  "key22": "2vaM7hAF9nZZCAhcBpcu23kYyVvjfcMpZUzUo33usYwRv6qpjTTrWV4gqgcyEL8MYKGt8CzLB79hNVpmyQbPy5XB",
  "key23": "5Bvxm8Nbs5GJbBkUqozULTrEJHUJ92D9XUqTmEmDLdF17Q1TtbnTSA34QF5urU16zWdfiScSNZ6c5KcR1HT5szyk",
  "key24": "4TDmGp4FbCGsGj1wneNjLN3qfVjNjVy59tq4rnfcsUUJTjXJ42ochENf4pC5bKVikUt52rDuKUn73i59iyYCnEK6",
  "key25": "2yGNuZLixTAwP8rCZExWQw9A3Fsa5ciy3iZZkxeXJTuvgKUXGDqZSo2PPkFiWNuTv76pE22R3QtsyUZkHdY9k2sk",
  "key26": "3uVir8EWT7XkN2LwPJMJHcjtajeMSWwCXYSNstWQRLHoCovBtwt8Bye1v7X91JG6J4nJFTdQj9eQSdqDAL3dMcy3",
  "key27": "4h85wN5LpSabsFFwPmY9gDMBYG3xxvtvt2LfJzQ7x96kMNkHDAugcHNSn4KUyCAjqQsqx5usC3hxUhqK9TyXxQi7",
  "key28": "2aQ2w1YSyGTfNbTXfKX4Grb69iRWJPqa4WrPkC24YVCTWkWRtAyaBiHu4GhuN9pKx9ne2MMGHbuHx6b4hoYeiWMt",
  "key29": "2FvW7DUPocvno42z7HoVs1anytSFkP6HoozRNRBbN4X8PrREWY8JzqQHdrTyPBkT6j4prKPjFu6771o6FT3LnvN",
  "key30": "whuPVyACGoqya8NmLqEnXcwi23xs6HFdK7mB3jGux1fdMZUn9pYwNW1CxvQsPnDxcTi62kzZhD8R2mYjGCwvQxW",
  "key31": "3LesDEqryCdJDmRCjPfxi8NNB8y5qWsoFFbYX6eupsytj16eD1BSujbeHQsosxJtEz4vjJ3uSLDEVzEekiRPgBZN",
  "key32": "3JHuyeopxuYPAAUF1Ak3d5MHKpSP8rJWR1ytaSAMSCF2S8iz3vjjyfr14e5r9Eky6awyewX4noSeffz2TiXoqzvu",
  "key33": "3DNSA5Vpp63BAKYr9kEBzKPyjrGwVLoQf4zNsKYDhzujmkBgVgCHJUpzRnY6byuEQR9pRfw1bsKmtazLg1GDBtgL"
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
