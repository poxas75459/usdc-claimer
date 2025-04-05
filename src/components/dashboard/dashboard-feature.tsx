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
    "332T3aGDiZEVyxdpd7u2FumjYixqfsV1ooHdDRebzWx6yJhDchQxQXPkrt9hDAKySJraA9bw2X3327rArwAwTKXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUMVHQUnjgQ8VNvqb7F2o7ZFKR7WvVCvKwnTezfe6TwVrYhV25jerbjkjVXDvoSaYcjjEBLjWefSK6cykk23HHH",
  "key1": "4ZWcYYBejJLMNUx2SP9nhBmfbSpVtVJP5FhAfbdS4aS4W6CQxoBwDaL4kq2P9Zm48rU1gHsq9veUUoRx8LmveqNf",
  "key2": "5kxYCvHp1BhTUPV99zCv6GFjmuUxrnPmr84YkLP8iWhPzVrpSm1nSDh6GmyXDizFfkTtLm9gUWH1XNchXZCVZH4p",
  "key3": "4p5d3YD9aT2pXTYrvy9HGAESEsTdALcAwQYQa3ZQxhe8asX75JphrWYNck4o7Rg7ouP7iX5ojMvyNDevadBnbkX",
  "key4": "5rKqykQTjErJV2huqPdaj1Qr5bqRp1MvA8fU5U6AZ36LTPSF7q98NWAWpok643wbZM3xguBgafhc9VtngDQDdR7a",
  "key5": "597ndBrVDSeKdK3gGw3FEN3mGmBJZKWNi5aPufbQhVvjcBUv93FYrMLyUW3CSpUk7pnfFQAQ8fWHqnLYk46CHFUs",
  "key6": "R4JRrcD4HgrPaKu2d3YpEWQbXhzsk5qV8TzJiGPzqkzWcD66QFnDZn7XvA9Ah9bwW6uJRDiG5quaEgCFrrD38Qp",
  "key7": "5tJmCRFHDrSkTT3mm8TTbz9cJkRJCr8DkWVt8EheEjZNJcRcvHfD47a5MThWzGd4zziZXbsBdBAu93pdFuk6yfLR",
  "key8": "4sSRsJwVnbh6Q964H2TSbYFdwB8rxcJW9Epb6csutDygZRAHA7yHVnSPjwi6KzKFVmJF4kYkp5AS6Cx8xyejgBfc",
  "key9": "3HLQv7AknkR6mNp7ZANTgFtmVxHz8SS81YpU8YCSATE4NMUZnFWnMULR6QrmYmp4wuasFkEUbt6fbV45q4KhX4M5",
  "key10": "2jKSLfKBSdRXAtKyUSjf71RcGoCGkRWW6uaFTryqLd8DraArj5FtrVpZHVVLSgoVNwNAyxb1G8kPZ7XP4QbTiLF9",
  "key11": "U2zJ1WSKyTKUWdRBTGVmQCzyN1ef7zuZwTgAnbBksVCbRjzXub4ahVD4nabeYgWrB6TNSbwPnzRJLPtETiyfFcd",
  "key12": "5veZnvFW3syWCeGxm9mpXyR2iX36NB3rnFyMawDK9cfn2aLVva8E1uBdAB3eUCxQxjbYDyFQ42yKez2v8ZDFUDYv",
  "key13": "DxD7gpkJJsVibD6PkfVTkhMqfR1LvMHwxg7tMFssVJN4DGj7qwyUNjWfaWM8vKAaD5hef7M8A4NcdRTf8F5nfk4",
  "key14": "4Mtxib1CkpjRVpyr4mHimtpZ54CwkGv18matLtakzS8EG51Q1VackCvKw4oidCbZk9xbYk2Whnk9VrN5onyeMxLi",
  "key15": "5N8wqLs9QfX77nD8hfQjzndcUUS7neHCrajwrCVgBFoHyQhztaie7xaz1UCafdA4AQgCUUzroVCdmbs2m341cKFy",
  "key16": "5tZf4xPVgyBw9YsRkKRVkrqrW5uPDXCLFEmzc2cjwUExHaD26haDoiWvWjot4BFgbQsJyaJTjFpNHGfDXGsWH5hJ",
  "key17": "4w33ZkTMNKnqpPNJ2pnYtojatMpzoXuKBVZEmrqkc5qh3eR2s48GC2VmRXjKmMPBJSALxyTEUrMsfqntuEY3yJzW",
  "key18": "5MMqV1cJmzqgBAeNAUafp5edo8yLQo36V8EYeNQBQpMkkBXet3mE93TEWEWy5cZ3XxozZJD65JkqAMw1bzdvXWER",
  "key19": "2VGgNuwGAr2vo1y5LtJKyTecLp95i7GiYqmtP8wgxPHjmJztfS8rcqYGZ9xykTQniAmFiSewQDkgbxNUHpcV1nnL",
  "key20": "4J4jkhiup6bkRj1CVKEsyyHkYzk4vxy1DuyXQtQyY2MRbDUPfHgY2QKKTdc8nPponxv6xJi4j98NEim2najkoT7W",
  "key21": "RzSok6RQuxjc4YupZaqiuo5wp9uBCtaqWtDnJ3hKE6Nn9mN1qTvTFo5VYXKVFKSyZDyL5D14t26pbDFS2jJfZsp",
  "key22": "4FUuTg9GqwHwrNqwYCeyQD1siF3nrnsPb8RTrwEE7TRUjS3CbMm6GHrtT4yxN3VCUbNc4r2fKS4QQbVCcz19Hfqg",
  "key23": "2q8c2iqRKUX9ExvzYDB58WifqxUEWn5c6WX3Guzrh2jawc3W4rqHTxczUoJyb3NWGaSPrynaJ5xABPgQvbSi6ByN",
  "key24": "5pAhzStj25Dx6DcaUCJmQsAzHJSb322wXxFwWRAnPtzKPWT5RgbGmFAAsQxLt6n9KGdtzpg4HXgqPDmktx4jV76N",
  "key25": "2hcT6QrhZyQveFKFHY6XAw1CeXscA3NmPukRJVqenDkMwjKQjWsS8aQDjK3HShwU9GGHtEJNTRixJVo6C5B8jKHe",
  "key26": "5WCHJfV7jYbYbwJWj29RXzJxstW6kMu1q8NF8UyV1u39fe1qWo7Vgiid8YaVXfN1YLwiUFhsxpkmWiLYooCcCAfN",
  "key27": "36dvigo4Ync1ApaJkJjBnozhNZCX98po8jqrUGqCg2YbERsc1ny5SYC32qKDFRYsXPWTXUcZsQqqxKeNu8JNqYVN",
  "key28": "2osGPERkbUgyPLKd3pWXb2uMDBDBVdhXurGsRiTwXm3XjGfjoFk3soBQN552k2cvfqM6dFGnmu6z7isyPore7jiZ",
  "key29": "45cMWjK398VhJETVgGga2BHWjjEdpxuwvSRqp9eeJfu55JU6SXKyRFTPp6aaHEjKqnPcjoDJzbDyENDayXfaMkzS",
  "key30": "5ifSUM3Y9q3nzoiJ2t7sYETQsnuZRk4qhkUzSGbPqR6WMLYk4N2kaAwK5GyUWZbTHRDnup1XNjd8kKxg49FjP2Tk",
  "key31": "4wg5aaR4A5jU2x8LHZD3SN7F7LwwqDbeMN19HosZzfJbSsgEFBZnSwUfNFhx3qkpoNzz4P6G1GVrPRecdwkcNKA7",
  "key32": "4kfMjBGSDPu23rtXjizVyVDanLkZmtPLjxaR2h1WpeUPdLCPWs4gh8wWDArSDLsF4MBNWX5bch4Y6SnZPANhWUqj",
  "key33": "45xN5v4vDzQ8RoaTrNsbsPgw7RJwFZE64ZDhHQCetZ9i2EzetbypxCCQcB8fr7tmcGsZyamJCETL2qqYH4WzthCB",
  "key34": "2jmzo59Beoc2afKwZ9bNkHbMmGvt7vC2fz8ETFJY2bnqpWX3EkC4cxhYEg9fc9aAEseePVtuwwNEzfywdsKp42ag",
  "key35": "4NDXTJTmvGHC9qkdkGtvGr7822XHeLvcg6X7g2XW6Tkm1nBymW8Ehk61JpismKJ97zBSrD9aQmCE4ha1y3aMGntq",
  "key36": "8LjUhf5V84YBKq7Zdoermd13JmLLQ4DLaR78zRDKRTTiTsG8mkWweMAuoUTz2DVA9sSGtBv94AfftiE1XTTFLGC",
  "key37": "5u3vTzPZJjPcWiHMqDmkC7RJyjHjdm9PBTpVkZgbrWRgfCvobkSFMYR4JjUgRWzJo3yDNomcbym1ZBGknuyqchxX",
  "key38": "2UahUcC4yqiC26C2hQ8VSLVo9d9KcEKq4d5ATmVdKE4Aa4axN3S6Km8MqKjdme1rK9Jn3CeGw49WnoCg9LTEtSek",
  "key39": "4VafHZHaAv1g4Xxtk9hBkhWgqEVhDivULbmmRuth9kQeZTXJF5o5yhyiVz1s6Xavo6fyVQBVVDFbsnH3pesN5gMe",
  "key40": "ddMmAE5YcFm8AxwCAGcoKagtUjVuPBF6pcPKd5sn3mzA6ASP2G29wUS3KErwpHE1aWjrLsrj9zX433BM3PJrNGn",
  "key41": "9ZuqB1kvDhBXxRappvv2wMcVcfaEVE6VtAqH7LyrQciB1yM5TmpHtybAdY8ZSpyckAuWvAmmdEvRs3hfJXEhF5x",
  "key42": "4jAcGApAG8MY2XMY99gDmUijnYJzDCktRT5TpidAjvnYzxN8wmncyWfPuKq3xNR1YSPhGckP5ZCJawXhDWEuqTRS",
  "key43": "85e62MtwdZjoop8NUypVGFLnpVDZCLqy48homCgmz8rpZxp9fxcW6kW9fZoSxKNuA2MUkxKfSp2m1ZxrC9iALAq",
  "key44": "54ect4U9DUnBTMohpFKy1FzGP4aLGY2hiAySYmNSRpAANbyYQCzD66Vr3rzNRGwWCvBTide2agiex2J5kXENLQhT",
  "key45": "3Lt3E8rBDU2noChyxdGFZtrLkBJmsg55ZSPxdtzR2bxWzSePE194mZfJHQ3Aw5J86diqGoXyJPyXbmF2o5TC8Avo",
  "key46": "3bYJGZjTnpfNEc8qGZHjH3wPAbiEVeR714CPqReyc3d2xxqKyr9bFG12jp5YRX2L7D8tdYKpr4Gk6exRamFLF9zw",
  "key47": "33fdfnxr4G5JpuRHhHVprYBZp5JWJhfXsa6qjtYG8uz6hCgDF6vc7Xuc5hAFWGuPiqRMvix2nMTC6TBQ24PxjcD9",
  "key48": "3yrLgaowLLQfdv2Yo3eNKqEu6Emsb4yamodsqyr4PD1EgJfx3V5QbQY7yoqQMM4guh2UCtckwsVp9FHiUGYQyeRV"
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
