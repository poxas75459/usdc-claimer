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
    "4MS1au5WykMJBJ5KCc1vQNVez9s2651oUS4VkPPeM6Daj9PDhswhqmT9FHWJHpqcCbLPx862gGFt8BnWUZoNCNex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XohqttKx6AFvCqrNTMxbRPvNjCPC7ke4e7f8wanUXCJgPqQ7nKd8Hb3ce4a6rJc4qBFHRHXdhc2yRhg7VuZPJ8",
  "key1": "5RFSr6TC7dsgsK46sWWUJpbWUXBg7kRUNednroVQNgTv7gqAeMkhGzqMYn4BtoYM25VZRZmjpLKEEoZwYxWj4rRL",
  "key2": "3HjYSbsgk5EtUt1stNBiVakM3PwXUxUioDSbDUVUmEcV7jNUmFKvS5Z7r7AxyyjkvvczP1J9U11mxSf9uTeM7Q2C",
  "key3": "4Kkz3zvZhfo4o5bouoc6LPaEJAPYBJyuizmD3xNa8xUrN7EXRp68uzRBgMW15dctrTZaMFFM83cmzErPPjnsvSkU",
  "key4": "HsuDRVB9cQbrqLMhZ7dpaHhALKfVASSDGTg8rwbDFfe99nzPT7NYxoLEXSKTqDYFPbM8ZrkcaK9SWEGULs16RRA",
  "key5": "3bqifySzTNXMcUDWmNnrSjudwhZBrewA2oq2rAkQEq5X1ShtWZTZV7RhiV37tZyitZ4YT3MZs7hyxi5YcBaD8hAa",
  "key6": "4C6wGrqfYRwEsb8rVtq82pBa7pGwkBZ6NuvbPHWKfuBCZj494q9midHohgby4SCJWeD2b8w4pT3ktun937Sz2FQH",
  "key7": "3PujFmKjjHiVW9tAzDNeZQTPvKZN5HGfm2Vbh8Tz2PFnPz4eLgjMQ1xvc8cvE5DxUi7UBru5Y6oVWRQNDxCRSdLA",
  "key8": "aXKzFRtZDB7RbpXFbDWVardKLVW3vxyZYiLQkwGJUi6h6kd2QDAY3c7jCfZBdJoCUDJEhaN7izMQWwZS39AMJQb",
  "key9": "8owBVMUmM63eb1Q5PQUwsn68rAa9rvpFLaMBfMXk7H2B4WrR63BUteC7qLhaRTiGxaEiB8hGxocXkLYqdm6Xhvw",
  "key10": "3sJbYgrxQaKSyn8zYStvHLKVfzK7rytzsE4WuWHSo58bhjVXiHEF2PeyEbhymXcMYAorxmM4dqNCM4D3Sibje3AA",
  "key11": "26b1FqVT8hbRQxYtP3yxf3L2ihhUMNpaU27rRx8fFJSTzSAy4GHkcHK49HSwzfSJZTeH13ndGuwBQ58irwweqhJV",
  "key12": "2kvNU6hDUFRbsgQArZGY7nq8pGryHJeaSGoXv6oSkbqBw9xvJ2fsd51vTphHTRtHnMyNV6g5w5ytyjxbUh1aKu3L",
  "key13": "3ydj5sxWuCT9UaLxEFhr2zx1rmrA3Rj6aMT9sN5DUeSjAPQtwbr85T6CZLCgon8Bu1ckXmWxmrBga199vS2aRHSq",
  "key14": "3RzzM8234BfJaYRnMJMPjsaU4AnAidj8JiJTud1xJ9HNDWqrZ2PhNhtfN4tDs53xF93tFefKVkQftxFK2mzzUWP6",
  "key15": "5AZEzFE5yQzW7Qaj9DrTvSfuwmk6p1dQsts7xATCADVeqUcCdgYmfM9BhBhmuTcw4KyBseSc6h2tyBDXASGmg7oH",
  "key16": "28xEZ62BNAAshHrcbi8Adjm8TcfwVLnCCDzAkw8z6SWh2d2CdECgQS2MAeSSQBE5DF6H1YZeQ14N7tb7oqV3twwr",
  "key17": "2vppgrrdM9h7bEUQ1E6amJWdGHfQFv8bux2nvZXZkEZheVPPvqyqqwgap77qdRCYTRFSdHBRX3anyeh5dp3xhiaM",
  "key18": "5NCwGorYChZ9MLinGNHqS5JKMxWLBnPYdDa8XswLt5Bqq5rU1HBCz1AHmeiu2RLzZ5CnPaaVj2VN42RJ9ZjvHQK3",
  "key19": "3dXsetrqebY3k1Yni44BZoayR8cniVJ42EVZDUNEvAc1daptWJwvJt6d2S3RxjuzZg61CdhkD7CwV39MBhP2ReJn",
  "key20": "3HSgJXMmXXECYBECuznPAn1MDqyVDxFgCnCWNp4gudJMnrEhRyJfr3LaW5QMz2cFhbn4SpHy1DNNwsVLqKVTzdJu",
  "key21": "3M2j8BXwdF3aeDMdrKR1dtmQivkpe7S8MKrHcGfPfVz9gVSeppPoLCTqaK7avSBzz4s9EgXipRa4ZEXq9Lwe91ZM",
  "key22": "2E9SxZdGoL1quiskmViVoBVCz3jpJyC6zyF5i8oQiAKLJxvJ9vRacaig43hjopi4b4XpboprTMqXsVB8noRycf9w",
  "key23": "3r76bPY1BaMcBsYF9cCcVMyeWF3Hps2nNKAhgpgyqWWBLPf9DrNrdQgUwYY5um72jTX47NMV1hgJuLkNgg6QC7Aa",
  "key24": "3nx5RbxhEL4e9KU9drpVhdWXXrWJExZEwYCN4aEiHk7PGRALvPsQTTLm66UuvpbrrGpTredC9y5kkjTfT8AUw921",
  "key25": "4aaSPCvuykig69Ffkiwz2JHEx4yB62ag65zXungrLPaMm5mXER6jmXderyzS4zGDs2XdpFQH51CPVWHt2E6XPvDq",
  "key26": "5SELm9mgnuf1J4gmNhvX1kZW4nKCuFc2FGoUd7VPQeB6xLz3XMUsxqJBhSqbEpLRoWtiHm3UjWnoK4fV4W2fy15P",
  "key27": "4xZiHLaMYiMeVCkv5pbEdUpi9D2gDFbWAZeEDQvFDqbRfS3mZ1BQBMCzkvRCwicfxFt89Tfv69mTiPzoW6CspRvZ",
  "key28": "56bErFbCN2B9z2urzM5U4NSGRcCJfPVDsfFfTdNCmdbL2yWmcxaUAz7eRGMEBvFuAjgjCaV3wbVVaUM6pKhUv3D",
  "key29": "4CvMgNhT8D3UEvbZhhHtkYDYPth3rMKXQkVo1si8AS7rQ4ZTRBgWDkuzg7qm7H6NgkD33zSkNfJNjTHW4XTkYDdf",
  "key30": "61AzdCe47b9yyc1LHQ3msv1NrFfkzbLdhdhZzSaF87TPrYSSk84iCBYcLRnCFok5rQT682wmL44fzEmmU8GDxYyi",
  "key31": "5tGGZqHFw1wK45xZggcNjDJ2M3FsHSHahzFg25DE3bQMXFtiedLUbYPDF59iUhf9rM4arSzyJ6KD36YoxjRTFo4p",
  "key32": "4GBxqXhk1Pyk4Z5JoHSWMrAJBSrAzoBEDQcxc5pGiE9bby4bsByqt44riLupyWHFBihLbX33PhTNtxrpAxq8C67g",
  "key33": "5ZkGAqjyeSHzXib8RNAL4VWjcmeRuNVQHeS2qXtgLBZsjsF1L6k477JXPQP6p8BEp45D477DLpeeH1WqEnkhTSpJ",
  "key34": "5Go9XsfrU6jD6K5a9raKnNDm5xbcrzj6UTRgraKit5Gewbv4K6aYZoqSQjWtADQWrM6Y6qHDWg3EcyHRV3SqHgGx",
  "key35": "2EthTXoxXg6o1KbUBiaZAtBoKd7cqWhvc6EW5EwnHELQsaFLKN93mUtBywbSfW76edv38JpUWDyKbMxS5LiYN9cg",
  "key36": "2HNKyWi2Lo6vxJYWz9mUNwizvkj8Rg9zCFk8CFmGtfqVskuSXvfco6vJ7um8Z8ciZ4S9yE1k674YXbupFQhxkeSP",
  "key37": "3y9j5pzYtzc8kNxSjFn8ZdnAvMgzycH87MxbDtzX6fZmFcAvxT9iDPha745P29Gb8Ems3RUz8ZV6HYv9dsEJtEkd",
  "key38": "3fkiDGsBmB7ZuEdg2KeHw7BnoncLm37VmcHbKshh4Y2beiDPsS5y1qGc2PhzV35NdYFMqSbrmtHwz9ZVq4F6KonW",
  "key39": "4SVyNRTNC8jdSf8RDGv7vbtWhEGAhiBVLmVALaC2J1yMx9c4zXXZCGqLAqN5ncNhTPNmUzd497Muw3x1fZbZqRDY",
  "key40": "4VXR8JgJwq4YUyeeYESb1WujpHJyoC3hGLmUrpsvEY7MTDhazUEf1gvcLPDvRWLSwm8gVgLk5ghbhaJWVxABqwVb",
  "key41": "52gf5qNUQhQaApaaHJCHewtrCjH3MFaWS71m8HdNqMwSMCK2XnvJDHf56Gd5Z7vKLbwTkxTvJqsaaq96MsUcjCEo",
  "key42": "3ks4Msrye5kBu5LER8sLggFm9GZrz5bY7n5xxPEw93ST1fbqLRACbmgPf2nNSd5bUziUU26MsHJ2iNLgXo1bRWiR",
  "key43": "4Je5Jso846wu2QgMaxB1mAF2v4DjErW4be6t41pXAx2pHW2S6PpxKx3jbZFVuagT4iU7n1SZhoDGsuhNeVzK7HFr",
  "key44": "4Goe72eKgEPN6EvRo6XZmwDTc49qBCrsS1hThUiUS63vRsJX8XW3RAwPMVkhP9Ys1vPQWfjY5FDEesUmFShRSDjW",
  "key45": "4sCZCttGUiD6hubnjYLrNtsmPDMC21xVTWZgNnHeLDMoz94MahyPRrpbZKXgeU4Js3q7kJ4vvXxr8TWke4wCojKZ",
  "key46": "4jsnLQoQzqJc4P2SSFSA656gcmC5WHdtrAZA3SEEvVoQ8M53QJmWE7GqYvHMkvLAtWetvZhrfHekTLwH4rFd1rA4"
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
