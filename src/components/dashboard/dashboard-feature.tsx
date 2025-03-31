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
    "4UKeCw8yDoLj6WSbHxZZGNNqRbwyXWWhtCqhQxrzjEhYejZn9KhVHeoe8ksaLNHzRiM74cHM5LGCoPYUD36oByZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzCGZHoC4pfEp9v1F9KFz2e6u4pQxMdmahp8WX49otrcC6e8gGjT8RALPaQAocYav77cEZof9Y86h5mpeetoiYZ",
  "key1": "3U6nTQVpZjdgJvZqRAn7josxMyGEoeCpZFc1qGmYqBguJvW2ewPdKsQLDTCBGEEHYf6CrZKpeiAgwpbhFpqY3XMq",
  "key2": "5snfK6F1orjsxTEQXxKfgmJA8c1PzcFUouf9jt1x3ESAZEs5Zoz39ciByC8hsUAyiRvU2ts2FfQ9PomY44QseoPt",
  "key3": "3GdPJpz4zamumJCchxvNrVW7619QS59k9ThL9bR3vxKVXLWaGmvaCBt7hSXnWpr12PCKQhhTTLLGBftVfNHPkm8x",
  "key4": "5cKNVZ3pMehJKcE92Eymn7d1tsoiqAkFe7Cakwy1KQrsqtfhtDguvVPBoznuS15erpakghDL8PRgrKVmvREPRf3K",
  "key5": "5DmcVWaLpLoQuUhCPcfoYGwCcqUWNxkQ8YvrjgTWtQbJjEscCxStemp9bUdSpU9p1vQc4PXdUGhHP24wYPA6D3Cy",
  "key6": "5wd1wK1dEWHa81DiZ35vQxJh4skuDYBPSFdUdrwkpk5DsLLtjgXwAiafdhSpd7VAy7DudHkKAQDt9i1fbUx8ZF6z",
  "key7": "3rqx2BY9uoc7QGpXoWNBsVo8WYXdMCY3pzPK2skKfpUiyLxDpiFZDzduFp5qfnsi1AtZQjGgNn12KKJYmZM229ur",
  "key8": "5PYLvUczMBKDf8Fi8bq7qenPqxzkBKdLLbKQdcKuN2i5cz9dgixF8K9CD6NwzrbrdrF4DoGygczCB6AM9K12Zzet",
  "key9": "AX8VhA1ENhXHTi5F9M1Yg2Cocb7PcPJe7SUTfpUQPBKXptYEqvfGd17LB8KBQEQHyeYGscjKo9NjsgD22kh2jS2",
  "key10": "28VAzB8Ew3AEh6eF6jzvEAjkTHTg3uQqAMP8fAA1YgqwK7oe8iZGrvJzhi31ZGMqXx5htApfqHPHZacZ4Ky4tigY",
  "key11": "4n6osnMSnHv1VckX87tJ7YiCFUB1sHdCX37X6quErMbhzY1Lo7pr4cWZcSdcLFoSrqPsohygWF3N811pZtu38sD7",
  "key12": "3DKxxb2d43tps95GGmWGiJn8ngc4TrR5RANPXoCjCmGwGHASmrkxoQesF7oqcTFEd4bBTGpPdLa9ue3i2YrCAqmn",
  "key13": "43yGsTMjGkrCVYvespzCZ1JLesH2SRxkiTzyuZmY49XNDvGrtFRpuNixEgripFNAi49Ea7NRhNPPyRbMQ2scWKKZ",
  "key14": "5XJBGb2seYnRCSSnaVZdNhY5ykXqgpFcT8K6biX8Y3PeBRvBLg3ZbzTNZoGjYtpwuNDDvigacFvYmcm5F1BDa8CZ",
  "key15": "3t8qUNB1JoFApYLTzGJeLrnAqReyiGmnthBwyd7pVpMDPu5xfLdZvsN7TZmr4cyfirKmM68SM53neBbSahjgUuXY",
  "key16": "5GYRmK6Q7hQHAagytN1bTr2SZjbrKwEe9MWH1YV8hg8v4GC5QoMNQ84Wz2AT2PKBN4bSMHYT9TP7PTjEF1H6RCVB",
  "key17": "45RsYERmkKhhCY1uaHSrukHugJWayRUYGf93jPu735BXvT8wnPr1wqj5Peq67d9D5333XcKLDFnzdDxYyTyWNKrX",
  "key18": "2E3PRBZfqZ41PN2xLu9WZvtvKNf7RTiAtkYtGWSTprV5maD3z6wDKK1ovCUPZrFCjvco5Ce94CJ8ECfmUgGRYKwt",
  "key19": "5pFrnZKPTJzgvGZNnLt9cGyVYNkn7TJ7xKqyBgZ14W3TowCz3ZGm2gTbeyxbyUxNAWDHF5YEmuTv2fz6Mz7paEHw",
  "key20": "5Q94vpyNbS8kphvNTe7uxVmUPNYKaaa6Ma2cU5uFF7nkZwf9L2yyuQbWao44yY7719biGk8xfHnV2DhFd4KWXMWT",
  "key21": "3UpUMb3MkxM3BTnFDQTTcQ5V38LijfCCRWrBryU2NhtTjJe7TP6ukEEtssh4zwdq8CtQevQ7JCand5PmMay9CR1r",
  "key22": "3htJGwH3wysSczQ1XaMzgHVEPGJDM1da6B8dmoY7FCNb9w3fEnaewdJXSyXWk2RMufhnhGi8MehtE65hiMcaXBuQ",
  "key23": "51B1EPqu3nERBVYnBRDUgGgk5VuifwF3mXwMkUmfq8N3uUzuxBMk7k6oiMA9ZWmxMJfLfztMx6m53bo7RQS1wETz",
  "key24": "58pJ3hkzi2m1Rxc3CWd89PAqAQA1v9mT7YnkG7tNbzSXSrcygZKYiQyjRhq7FzNpNYRNsQkbR5eeYiskpeBkXu6S",
  "key25": "5dbhXVvPgvEu85t3RKzSkQG5ygxBkn2hCCLGANqFUbkNxXbJWqesR8GtZR6FqjRoczJ2U1kYKwRVob1N1Efhj1gv",
  "key26": "38YaLhuNqR6SHBfnZWmH3WoC9v29SJGLjgzb1xSwzRgGzZJQtmr22bHPSVtYbZ3zTFkL6bmUtzDBwMpfvc4NJm4L",
  "key27": "5FrP2o5umw6TTAKt3AMQnUHL3mdeBGTLEV4TtnfVPmUNgPcGLspzy5FENxNCkGtd94h2WKbkpQ6Ao79vXQHSJq63",
  "key28": "3hAjcgV3bB84uGvB5GgwudYicY25vhQrcdNUy2ck37HkCtbH7QEvtjQUUBdypmKbU6ku449LoHCXcDGTBwucUm3B",
  "key29": "2DzeC3BGvng1iB5E8eZCkHCqqC3WvC5Nzg2o7XFYQxdmfjcyb39cbb67v5ivkLpnSvJxJ61fzyE4W5dTd69xHKFD",
  "key30": "2T9gzsk76uKk7vwmVKCigRehh33MNyekQeCT9AheEeDiYUuvqxSYov9iNC16P4Wny2f2WEQHRyXDUMwbw2u4pLKB",
  "key31": "3HouPh7PA6UhKX2mXi5nLKUritGH7AXHMXwJTBT8FcaN1umc7JbstAM3Qwexqyufr8nbEMGqZDzFFKqo2oQQPbKe",
  "key32": "2PVGZAkNVhrN2CqCzXCx2ZpUKLxSZDUycp7u8tF6iftA3rfbMDW7zkL1rJm3ebVNByvPLkjBwrhHWboqdtsw56nN",
  "key33": "2P1JtJRTvMw3xoGbr1DinCVzkhYPYeF87u59472SdgqskXxjnzfAQ4JKw1Atoj1NsjsgUXJ4JDUH4ZDWmktX6WQN",
  "key34": "2eGBCxcv2TLDyMD4dxBorD1V9CDAdPzgFJQFnqjnd1GnUNjuHnhMkDTAJkqT3EQBkLP9JJVSRYwjRM1fpdAfnMCD",
  "key35": "4S5wRWzG9c3QbqZVcQgGt2SJXKKZcmqaJTH3pXG6gK2ALCoFwGYV9Xk8LUUHP8Z7uxSaDRnxBrEWoQia1QfsZDpL",
  "key36": "2NEEPWDm9p5o8YzhFHiWUu6kabgHTHAgpfvdWmmZhvrZW1kUoWmCCTDMRBoCwqa8gXcjGrGr2zPVVhHCou9gGEC6",
  "key37": "5jXM6vzMLTT62DbR8sbr8uGsp7ib51ACgPfCFQ4VY4r5bhrYkon3mSn6ojQcdkCDg1c21dQ4J2Do2RyEFq1y3qtm",
  "key38": "27f8QhyK5TjeWogpqEVixRHqmPTh3WZdqc2SxxPkZ1bkU7b1HpruaiPGwsCemoJ8AzKHSQYkyfPzofbCu6UkEWrw",
  "key39": "5jiwFnykjWWXMKkkX9R97Wmt1RVnKYNGmdm75xY8PrmZrF7tN4WvFuguG2f4r8CRHddKzzSox9F2B4DLzuNEGgqm",
  "key40": "KerGkRepqfrrU63SvfVyrRBquriFpgongY1s1aUV7ieBySZe9fAcPLcpzenHRW3RcQPB9C5AkgHmtWazouhiReq",
  "key41": "4hKSX6Xme1uE2PeHRwk1muiwHoBzUzm7UkRUj95p4hMh9xL5dc98LtekcBVg9TtNTfurkFvNxTjAtkemPWYd3U9q",
  "key42": "4X2gadkK9uXiW5rfC82VdSCdQJVy1bkDytsV18tKtjZbSsVLP73YFEnrvG97bJNtRoXngYwm2noMrXkvD1XRxtjB",
  "key43": "2oBBr6Kk7pvTYocBBUdnppSoXudMa2zn8wjgfybTSknmYUZrF7rX3PyvzsLjJTQzA1YgNXggrHzT5gwu1HcCT1vz",
  "key44": "2pjypiamRBDJ51Av7f8gM6rR1B9zPTdC2zG6Xo9hUZagzHsiGEMhUggv9cYBj4N7Ppf5EqTtDpnLjLJy1gRHRBtP",
  "key45": "3ARLBE2nBTxPeWXF3Vp6DTzGWzAdE7L9vcWmqXezm9Bx4X36jPdRpo2shnieWgQ9uLfTxAjrxds7iFd5jgMCBDd3",
  "key46": "2Z7JMQmgVb4GBX1gYCQb7PCdakRQvaNMEcd6WBxgxyPj2HbeCbXoEetcL45wLis3UeC4iYiRNp3Zunk49E8mgkBw",
  "key47": "2SRUAUMxmYi4JNBxqHeqXDQWMjhN3mGMe5JXzQCJM9aYiFWwdrmEWcRpq9WbZYw5oqGP2gPMhHTCsY4nph8jKvo"
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
