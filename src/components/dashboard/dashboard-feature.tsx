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
    "SnqxYKVv2Dm4bHNAELJTtw3dnFWCtxMwjRZYovE5figmWWpmJ1MVY2JgspVimPe7SzX38TUZ6y3EMwrw2n84Xni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PTfrA5rfTHpeH1vovNvanPezzt2FsdaVtfG7nC7J2Rerp7XCDQf6vmZWV9vT4T1KxRuSLXET7vGFFWEoptFu8nG",
  "key1": "4PJrgXWupzzTCpRL2qsEWyuUqfAEUbNTETjNGt4k8A3zkzDasUrtZbwEKRjcRfrQjDcVEjgrKUcvKcuPFxnx1x5S",
  "key2": "5q1iUmdXb6ZBLKK9KCoeJrPPZJSzWKLKj5936z5PuW3byLxMyYJ4ACiM3hS4jd2zBMEn9EtHYBeyWaXDKwZCwZB1",
  "key3": "5DvULWqF4ndawYxkHMWF47LqvX85Qw4wLkMeLLaRd3tL72f7f8yipKCiJCawoY13BzfU9T9o8Npt821FcVK6z37a",
  "key4": "2Pox4ShrMQgggaqRQJKMLuWY7yscj9EsqGwQuCgDBY3wXPbnfYT4nGr6959gcUgtHVCXFeXKeXoyoLJ3A7CBoGYX",
  "key5": "45ZUA5yyWm4zbgXGsAT13zbHps39N627cDbNLgUNxDfr3DjFpNCURzFK1oXDaAEzEn4u8gQnQjjvQhYSNfCKaDeE",
  "key6": "4iNfKR1rE3CCD59KcxRFYTwz1LmMmDQWysxhVv4YCWCg3RawPcRKZG7ppuiXKFPMRnUvQeFTBuTNsvfgU8gfysA1",
  "key7": "2HSLd7s7MKvmysWSVa1DZng2PT4dScFTC1PSuznQjdhyypaxgve3JhNJyspEmPuy4L6BpKiyB4hBnDJALqpSH3v8",
  "key8": "2MRKsreEXLLTJqan9YK4Ssd3YeNVBZyodRcfNDnHE7dYvDrDHan85Caz96G1gg7qUdkHFDRZmLdSCU1pGbZkLUaW",
  "key9": "2M9hLtgkAjoKrMQRz6VmdJUpuDpmsEohSQm1eNnZgqDvhMDBCWcHzaLj1gaKDLcWHmdWYuZCsVBhY7PL4QHF2Dxb",
  "key10": "5gn2ZmpennjcctCXmBo3WJ5J845hBy4hn3gBHar9uKraq5qbrQzJG5RWJsNyaJsuZANPq1TbFPktjiXUCwBhdwQ7",
  "key11": "4BBq4W93rgP9SMnDck41PFpPfTUHsiwYzbqhiGyRrjdTzP9gNQ7hoiQZjWmQCRcoizmVuMXt3NLLEuSbmtefq39K",
  "key12": "VbdukgHtjVhgHnRhC6fw96RK6YBfmUvysF3wMNdhyQUBweHozgm1LmHEFtZ41AGucNppb5Xsgc5ZF5DoQSUkA9E",
  "key13": "5tnr5Ji32Z19AD4My8hqjY4prUPDrzDo9CcZVJqPfkr8YrpgA5Qzc2CDnjBmRNrEf815RMsn4GtyvGiCvkf9ezHf",
  "key14": "3qpM5ZDMVVHbRYTXLmTSmQPskurG6aRDfJJny77eW3PR6RE7ccH3GkTpCDdQK4n71Dzqj8r36HMqwjK9pSEX8AMo",
  "key15": "29kzKWBMm7q1VWbtjQ3BFKUB6zZtZ9AghmF7LHEWyDTcgGuoDaqoBefCJfouKaSwZCHxjD9BaueXnMpo2ft3Zcj3",
  "key16": "2B744r5Tr2ugBYBCjkEj3qjQvKb1LFMLQ6mHSTMnFUPcrEqz2dnUyU41qPsE2jjQQ3dDGXQpAnFNd8pNXCr4GTMq",
  "key17": "51XzGL4aCNyMcA7N8dtsBmQ34fmtJxnbL8veybnfMVtkESu3UNArbmkPaonrBZHMZoSeN4Xjd6Q4z5g4DNMPm2BW",
  "key18": "2RTpeT9gcrZwhQvG7EE8saXUUfJFUY2SzB5pmEQQNBuqufZh11rwW86W5C6ghieyHx9HZ4wSQ9MmE9EvqqynW66G",
  "key19": "4M481MT3765mza5NVm7eYHAtrHKZdB6cu4xuQaySJyUZ8kWFbZEuJdPzUGmCwyasgaXwy3d3UWJ5EAtP3qDcWybA",
  "key20": "3kSHxAYNMwNpdp26pBf9EMCRJ6LammM7D3Tt1DKc4C89n6vdcEhWE1PFS1bqwYqAA1HHf6Jym3sNz4qvuGxng1ZT",
  "key21": "4ED5tMMnqdMSPYotYxK3N5j8Ed4mwA1jTJqvx2YA18p1jNhCgFP19GowMjRi1yqvubgNwZwe8U5BqB9UxB63y6dk",
  "key22": "S88aJXCSgDBva2V2LkCDTzaKaMGpiX1rJ8u7eAReiJET3bwnmEZxsrEv6RwLtX8zs6NcVZhmxE1ymFLeouqFRaj",
  "key23": "5BYh6RhPfpDDmhtZmNm2WKoZcihMh3meM4PD3HanYx6hmDZ4Ci4ZYNGZESu3HJ5FSBNtuTiNg8w8ifSDAtYqEzQs",
  "key24": "HzCT86MbkzCzUkVttzPapJVAACgTd2JWmB7ennqegcsiwMgpJX1QeqFadeCWZjCh3ZwHZfXoKe4eeGJ6TDxxHaB",
  "key25": "2YwowByS1KQhhhK2Wy5aA8ZhNBN6uogjA9ATQMxhcB7nDFcCfN3C4ChcZVV8roofjHP5CYZwyAL1iCdZphZ9p3P7",
  "key26": "5GgRNG9FKqfr8YDhwo4hzg1ipPk9s9FZVdnC48voNcTqJaXPUdhxwQ7rpDkimAVDE6WnLiHdNDCCBbFA5YzowBy6",
  "key27": "5xrv8rz912UN4uc47hPLaszFsTtjv43pnFi2zWr1udPijskhhrXfAQZM1yV4cm5ZdQsuYmsxcgLye1YT7urMC4fe",
  "key28": "423UdZ4V9XPdJikKGhxcM5N67xoH2ZaTH1hEk8FyJeeK5w2w2sV2dfnyzfPwvvkFg16kWvBpVsi5jo6buRd4n8f3",
  "key29": "3uSzQZxkU7ebBzaskaB3tYbPF9ZXSQC8Pqfw9oh5uggsgpAtDFJZAmmp5kdSyJ3L5qBLh4TMPBtBzFgzZvm184X5"
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
