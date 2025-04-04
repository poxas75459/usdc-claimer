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
    "5icHPYst21rTidz9oKSjEsfzjJeVaqc65u3dU5gdbtyuvgZBF6vThXmHftC8frMYi8FgnbLZqWyptvM2QHqZ5fvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M23sGmoFD9nYiRBJvS635inwaVaV1MkkjB1v1kTmTfzcrHFtr6g8kTcDx8u9TLRQMWdT6XsrTq1eqoDtYfXpZue",
  "key1": "sPBjgVa3Ap29pQTfDipULJxso9Drg8GcJRCzvRhukN3Hnj7b1jeEbhCJe8ESGQATooQuqU2ssSMjNd1LvRo9f82",
  "key2": "49HRVPHCtQLGgdF3EoCihpWHey1LcTxfWPZQhjprJP6wUFDMEkN6iJrEWScspHwxmWtiJEvVNjyvQYSBJrHeTxmF",
  "key3": "2YpzUDmN1JMrgiK8NGopdzzBuj39PRGBjjudczGWADqfQPaLdkDPR3PGE9Qd2BBgvrYytedXBJfbU3giKBDwrtqy",
  "key4": "2jMLLMQ2o7bdchWTv1kTrLrkXssemfsHCpvNbuhmngqrdW7X4QDbwDaNXEMXfjKpN7yvpSVs6pU9BvjUw6ZoPaRU",
  "key5": "7pZjH7r7vXp5rR67dYDqpQbfQTojy3BUjwo2bD3rg9nQHsGAkj3urCJas8bNdaEy7eNcEGmaPaFjFqXmDah8KgW",
  "key6": "4K2vcD421Ecg4YMPvFyC4bLCokfVQaDtWrwBojHcknuppMksQykC3Hod9uQyHbHPQDGmBAUKHZYr3GQ35UPUXqcD",
  "key7": "FyNZibg4MKqGKS2vYTvVtMwtCeeCNSLLCGiMiKMMRvKKsdfdWLhiGEWLDd7JtTXekbAwN3LC3B4APAvbn2tW99P",
  "key8": "ueQBZDwySjam3PZNPfNJ6h7VrC7GBPC11Zro7P6GznXTpZRLyH1oEnhZscUNVKJfK6gqRoGhizKMHCKjjMQzWoz",
  "key9": "4anxYUMi3XjMYT6hifzJDRUgUSGoJhSfhw1m7rBN84793kBHxss4zSyuWMDgHMTyQMdEkDPfoYUjUKjUfVgEAJbA",
  "key10": "6cM9gRc3ADJBATNDaqmTdM2kHLzpgLg4mEkSbHzdZp52cTW6vxtSB8p1smKvG9Gxt7jE2iqATaE28ns3zy2PYho",
  "key11": "3F4Q8tFctNMz8EDGzbUimQ6JHJUwQt4vFkxGeChUUb6JYG1zx5gqykQQhSzzKnMXrFbCVaMp9TkJ3fUFuaAxQEww",
  "key12": "5cwDmy97LcPg433zgbf4f3uCuvvVNy1w59fykZVCqLgCBZwdi6CcdsWhv49naf9NrNY4Wsn37hHWWAQS7SvSk8gw",
  "key13": "38bSy3US5aDtzRSdYEhNfY1VsugXiQmnsMVWynZ8g2bVijzNpUQQihUPaKp4nweEF2M6K9rJHCLbxW6fX51APmgM",
  "key14": "4nCH1yEbnQtuqZxT84do6tQyZA1WWohmrS4zzYQ3jc2L61YbAE6x7MgnWPXeKQr289mdHJ1izNLipgsFNeZuTnBW",
  "key15": "NmwrmAHHSE4AGpWXnkTMsvRa8tdEbZ9SPvkR7jKx4LVyqZzBt4ptMwLiEbbAAFhqzFNkpRTungQUYeRp6w6WZgi",
  "key16": "4YqE4moUod1AdYfxqz4dzjRxXXvNr32fyyqWaihq1N2hVu9VMHC4GYuhyBPu1KBEokejoXZPJwuKa2Zwkq5NZZzB",
  "key17": "2nv5UGinnAZDXeHHTunAGM6R7n4x6wViY29g9UtxNdfsHtjjUqzvdjcw5ZL9fqHQhE1GoYphPmdMMevVjKS8DqkG",
  "key18": "45r23BprjCvMV24qgxwCUTRK197jxpCGSG3Gm8oBzUezf9hmWo6wKco8CNHXzQvxuvrYNE4JdZeFn7Xbia181iQU",
  "key19": "4kXCkCHiRjGWcPK8vNSHYYyWCFd1BhqXFRx93B7TbBh4aRfMHfDDh414MzeAPHCDLRU7t2pPgyMtBoehegCT6hrw",
  "key20": "5nEbPnFqQRCiKJNPc6A69dFE6gWj9snYgr3fc6Zi6gTxrxTTGXoARTahhqmsxEigs4E1uor4VS2A5UmKVzQQSqNB",
  "key21": "4hafkPbrrdFCNShj8PwgkrXsCsJDSEHUHw3JxQoaSeKQhT6rZsXK2xgJFLnhx7j2zhn9iV6zNn5m9JDKw24zkEGL",
  "key22": "46vDWQweP4Y9qKbw1M2gxTnWRTwz6cr432ZY8WX6DDDR4sLxuyCvvA9u7CJu8rtnJNTCpmFjgKQqsv9s4JR6E3nH",
  "key23": "t1TNGBddvQhRB3WBtotZTkXLzrzqfp97dMmifNnsd97jaPRWxCTFq5KKWVc8Lw1eY9V9gZBBmZN4tKZNHJyzhdZ",
  "key24": "2n29MCq2XFW46rGHyV1FrH9ET3EjHd9tXBrw9CTtTRVqAkfLCYNEnrBf7f2XCGHTrtkhi6Fjg3PHQSvcyMuPQrc",
  "key25": "HoSpsyQfRwp398tazipjHwfiNhBTG6LCS6Rd1LRRaz3nrq7THYFFG9Kq1dfAA52a2JT1VHWupqasYgenZJwCFCy",
  "key26": "cEgmuxW6o3nicuHfm11WTUSuDvnCUWUgKTqVrxfRBEBE841ZC8fNeSMyhNTcK9t4XNwBQxyE5fWXpHHoUfjVe5a",
  "key27": "5zZWyzjDRjwZaJTVQXtWaVNg5SJqEV9jAv5iLqTiCbLSa9Vx8dogyoSnTfC8CnswXdqD3vWPwFggtaTow7qEptpD",
  "key28": "4zWjQpYA3LPK6or2Er2jAvGGbthaTwz328D5tJ7kjdF6WjM1FCeswTFAs7ZegYpWjPiX9Go15uJsG4UXa88Fgp7c",
  "key29": "2wRsNFCVNrD3ETSEoHn1QJbnzj8rAgUcNgTHoGk5deaBvKX8oFSHWiBmheWCLCkqc1Jb5WAoVtw1ihaThmrWvgw8",
  "key30": "5Pr68uFmhupoxtukswywec4hNe9FRe5V8HB3CXCcLizYCGjbRVKdtdvdvs7G8NatCD2VBHeA7Bt884njN5FGJxP8",
  "key31": "jPzGmNyEGPipGRRbzrDDWBVFmUtCDZZa6ZgNatujZpkiWRfngTBCUeVhEv4tkjfJ3Qraw1HKiZ7t24Wd7rB8vbQ",
  "key32": "5XYr75zAMEW8ZmuaqfRtBcGXtuudSkvFrK9jKiapiSx7dirwrZdMdfUVioYvwbQDQxHJBzWuPqNXCDL7Dv9VTXgV",
  "key33": "58S6Mp5Tg8Us8DsEQn7sPYzMwThpNFtBHhxX8agRnffaADLFbB4UcPAFuFfUAsW3rrutuccMGpPeYfsgDZ5A5XTQ"
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
