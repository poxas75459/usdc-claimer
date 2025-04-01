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
    "3aSUTynLj5Lo1dCsFuEnwtedQUB9Bc4zH2fpGYRakx4SMYv2UiAcu3sVHYBa4XVVfhNZmrx8ha8LuyV6kpNPGATU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q85tdbuyU7MUn22572FkjuwYf2KTC6jxcrXgQvbGHd7ogUvx74iZ8nWiAEhfiCm4jcBLH4gzz7uDRcxGwGdXF3K",
  "key1": "3DCj9f1dvZHWmuSsdCoLZLSb9uSR7qXnwAMKNWMdwQgd85RZ527RoeLhHixg7jzXJmUoXK1ETF4uPLpTTKoQyumJ",
  "key2": "u7iHeiyuosKs29EedRSFFQSAr5ZAAk3PvnVDwf6GW9gALp7pzH5EuXHU6QbFtpsrFVnmECyPYJSqtAsLFuUoj1A",
  "key3": "2Rrrbxx9xs5mon7aYo6cFJqPFV3X8hM86zdhk6KaL4FS4qEpGG2R2nowudHtYXnkh8AFcR6btsY3BZSLNVqnHb1Z",
  "key4": "2wsJHWxkcYdPe9K7pgTp7o99LYBf9bTdic1UM7JxKw83YhimmQui6ddN5WW9pys5aHZjZEnErw7tmARCkDQH57ig",
  "key5": "XeBu1ev6vfSTxzfj9UfXk3ZtGqaGNoaiEdZF3LUkegNjxd1oPXdFtkXuokcWDbo3G2pSC1GSDeNbjzCsRiv9EEX",
  "key6": "obviDkSTbZaymSTc3NQQSg2CXfVpSg8HfYJ1Z22UntcRbmDmwU8x9SbjpTX3kta1ZFQ1g9Dqha42umFvEPkdEd6",
  "key7": "2dMohxiz13LaaU8VQGd8yZJyTrUsJC9nkDntwzFPmKc4xbiqYf3eTuXZoynabrS1xfPZ9wzSo3xMUJvew5AtxGkg",
  "key8": "3UXp3cU9UoZeo25RWUzmGrtMVhK1RAMkKrhGXEMLF9KMU4weFRrQArvpXHwWVNTC7UsrKrN64RPEDansNpvQjZcB",
  "key9": "5XVERyNdnwaxNFMiCWnhUgdC55TrMAiYUF3QDcwegAyJy7JY4hb1AL8WoatS13mLQfWivwC8PttJm4sFKSAWNqnE",
  "key10": "BD5j4AND8anCxVAJWKahtFo9pvCW1QfSk9JoFB7fCxeVLMRmewexmrijdUJNckeV4HCmKWfY8EsURNtCQWgwBu5",
  "key11": "5S6kenvAu4Rz37TuWNmfUu553VohsqPuUYWLGz4Nz31QN23ES7CnRYJwUSZeBFYXRPSBRNEdNfEUCcwqymHDPoiB",
  "key12": "4kczjugWQb5AV3tu1FDjWyMm1R9vcRfDyC5KmKvfHaaCGUDuCPf3VgJHSrANHh5sSAvHxU99oLm129kTgYW7CgW9",
  "key13": "3aPSKGULkMW1QgnoUw2ErDe2TTZU2Mdgom9QhUSxdxyDYkmeByYwSuLB3U6keggoaEQuN9X76wue5Nr5rgsHUatJ",
  "key14": "4K5Ubkjh8i9ZTshDrJceK8Q1oXGjgQ8BsymUgnQn7ujpXb2tCUfQ5ptEFU63DeXpxzqUAABxErw1mkMKoyqzQwiZ",
  "key15": "Lh3gDZEpmc3LinH6UQx8jqFPGUoF91HdJwc4jjmqStNiBxBaHAidB9787pucVRF6S3pzr4TsoiQMjGrLN4GhMr3",
  "key16": "5PQkqriaMMcqdzEYcJLUdsmg3unqdRLM6DVTpmpdRm1JJ6THwgMTzxQyyaNaXUa7HC6JgirnoxnD1EfjbRHV55ZJ",
  "key17": "5UTw4zVUKginmtxJHgT8VEogPLSxGp8WYVNcQpqLhKHJ442mD2TrAUkGUqHA64UeJMrFennSZ6Wd2ZrhwPwvtva8",
  "key18": "5A9yjARpVbWwNiRbHwdSpARK18QjtSFALWaX7GMNy67Rd6tQxAnV5Bm7ZVprr4m4yhK2Z3n5vnSA635KJvDhnwwD",
  "key19": "5hE9NVDD2c9e9uZ3dsYiY6R1KhbTGUArMotdJXSP3BWaarrKGAvCuoF5tq3JV2nJE5KSPJtYKDYL6wQY1rbjYZaN",
  "key20": "2HiGTgKP61doeYKVDywfhoSQQ9mswY8JrPEmjpVGCnhwP2GdjhdsBfbqAkFHvZPkzhikXYNDCuAvjSHcUgkYHwc",
  "key21": "2RdBKuneLSgsHRJvXUsFyFLwDYzEoRtfgRdSLR7Ud91rVCUoaJqKaH1NFsF43yoDy5keRAAJuk3j6ZNqZJH2ptLj",
  "key22": "5QSrzTWk1YWS22zxy8Ky3kiPs83RhgqVYqA5jmu68j9gDhCjzuotefahLYQZXispFx5cDQQDjufMNYf58DegmcVc",
  "key23": "gRHFHZ6PNByqJwP573WJ28rMqgeb5msiyPxgoa29Bn1gehPHd4y144drS9D5ibMRgRUHe6a4TePmCr9w768Xq2y",
  "key24": "TPQq5iMjuvzkcRVwmwgZx9mNS4yWhUY1mnK5rk6LhSgenxvZNiKtkLUwijnzAaZXyfLPfZ45e9f5mZfD887ZGEW",
  "key25": "3TCW8hhpetz8ykLGTDmtVTutQKnHM2E6rSQ6Dfidg5uKMSg55audPnqdvTjrSgVb8KBr6B6vy73JXUP8ujfhtpa9",
  "key26": "3XYQdkFbGLi2BSG1fwjg8YVSRWugGKquNNDWdPYNkCgks4fdELbVzFnFZqNkRdpn9x4a3sABCUTakjCbXAJbwJ7x",
  "key27": "4gChTvkU7guQ5RdPehHZqvNYy1zmagr6saHHAgDDWNcjYrLHZSygeeNLAeyMF1iGvYY63WXYrNEv5ntsBG6XCQCY",
  "key28": "2tXuMp59Uqgk1uxuwig6U2NZ9tqst6rwwjMTjzyKfGvuVHCmZLb4SDVCHwsvDXoNLCKbmfBM3JjobqgwLm9YrXgJ"
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
