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
    "4ai56odovrEgzdH1prMaVKt6691bq35MreapKrDxgi1LXQUVKznyCK8kR133CnBUg6QHNjNgygeqSHshsmS8vAGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGgpRwR4W8GSi3icS77djQbHKNRXa2FmbUFiReKtaoSYzob2vbVgj8y354EKvH3Y4RoxZkBDAB89ZkbZLo9h1RR",
  "key1": "5tdwyrbhNsKVMsh9gc2QUMYomKQ4aEgKAjjw81e98cuDxCKJ6pvi1Dh8z9AfLZBpAP462ah2a1aHRCbMb5rRNjF3",
  "key2": "2H8SaXA57qgsWq9kei2qR3PWrSk4JxqzMUjUa6hLx1PqoRCJX5NCyfTsUo7wScxtJ3ESV91uPoijuSXERKVYdYbu",
  "key3": "3UviKDbj48kr9c4jcMBHQ4RzCLMHWQZgcbQSt77dVZ1FiKqr1ejHGXSbPmsYovibhGLLVLxy1XrgSZuMvLTq1Yzw",
  "key4": "4BrX3XQpDDuVEUsVVLg9cqgoUhWoMnQFnGqdMXs4y93VWwyZ6HNd8jXjqzh2pg941BwMr9eKcGkDartYo2deaCzu",
  "key5": "4UAqgJmLznjM44xYYAQG5U6DhraYWEdHoL4YYjUdeKYhUNuVGEK5PJ4dcopF8HjKAN4hjz9AjA9gnniU7eTVcchT",
  "key6": "kw1T9tNgNJ93xGLhvnK6zZjftHZDnE6PE2VHR1QLbNYEJFaFto51Kw5EFFmm8anZ7rZgS86w3gScRGmjDvSWzsT",
  "key7": "2zPr3b6pRHyrk8bwQb7ohnwRy9wzKitmW8wctVcYaD2ozFQauX11zpeD5BFZuHhG5U3gKtXXoeuXX2FqxeCEvgLS",
  "key8": "5ViS7wAj4Dqra52AkH7vtNvBy3DNuW7JW1WofbCR3gonDgsDVuciitNYtvTxytESwCH2aoEqz4mu8bsAXDRNCfYM",
  "key9": "4r5uc4ZXtN7bDDWZTiGVSahj1ZUWKFvsyseXy1G6cDX5WCHLGsiwpyj5uq6ykjhGauMSXXZqwMnk4vsVXXFjaJPf",
  "key10": "4TZQfsr7sSZxKBmy64Njaj1AvZdi6Tdkev4JLPagcwU7Jyy72jYGoQzbT2rhrekgHF9VEfuoEZNR4UYoFefJRdN8",
  "key11": "2UB3FAp2VT4BMF13FEXw52LfBdAFS4SbpYxRiwAF2ZSQXm2Nrq6NTXuzbt7qoJC6eUuS43cMxHK2Sne7ssJGTZpL",
  "key12": "4QXzpiCm86krixoYioARYHU5Q92J5W2tXBda3zcBBpwT8VckhE3brVSAG1oHYrVYYnVLSx2ePtzMSw6RKqiokiK2",
  "key13": "4SNCbq6qMeMHKmLwMQQUHq2SYv9rBgvb1YFQU132zDwLexPgVFsy4pYHMi9cYYnWNi5tnJySbTfcTuMTjPsJoEiF",
  "key14": "2kiVeFvLjgyFcJeAtyswuwCA1sFUHPoCY6VKUJPsjM5FxGLSEYCRr6n7eBCTky85cqrQihdC439aTpiQgr7vSm7q",
  "key15": "36u8NNVKb9p5cFfw2xvvXSaM2SL9TjwbDopryEMhWZzKEPJmijNMet2uh8kneNL3SQUBkmZ8C8MuKzUnLnrxtNKb",
  "key16": "2YUg3JM6MGRo9kyjfHaKAqnaxPfcJ4kXCqUKbZ7x5BaHTJhcGteXwBogpCoWGtVmaaJyzfhZkdcwoxYZTGTUcsLj",
  "key17": "4nC8h1NzhGNMGrHLLuwZ1YiGihh2M1f7xZNyiZvQUKM9ysGKjCva6rRcPNXbGuyqyPMb3q7Ta6hKw23txEY4NsHs",
  "key18": "3R3WcyGESxvBmdDmAQBV8AmHLDadEjnHqn29pNL16YUo6JTNTasa5BSX35UA9A4SMhFBvuPoSU7h2jeFEYzjmtgm",
  "key19": "buWTYb8ia6AhcNamu6fnPbZZhobcWxqrhatkzYGf6YVFS6PQ87JHWJ2S7utg9cAu3yWiRja8CPshQq3zY1azm4x",
  "key20": "2DA29Pfji5QFvCcaBMq8UhbKQ8QLZxsByRV88urWLe1kydBbhAGx2xogbfwHbSCvNKimAKCF9jMGa9BpwdiTdj1f",
  "key21": "2TS836TMLNVCUwpwSiuHxXQRtnou3LPVhdP7i4dd9e1Q8UM7Ni37ix3rqFGehtQhqbwXNw1KG9FomcH4a8GMvDyL",
  "key22": "4wZHaYV3XNHbMHghAczWSXtr1w5g4Upva8GQvg1GocVMStXZzxKZTJmUFn8GJFkGPEQC9AZvq1qFhdB5215HY2Kz",
  "key23": "cTqh2P1HfSFy4en8LbxDJQtCWtWkNmdH9UjCgKAtYiovMkJLoaN35AtbXHmPj2gi1nR7UiXkj7yfmzCGadBCWEc",
  "key24": "3uZN6Dae8v5ZLDjMNZ6xeavMwGS11dtH4UXT51UyKHJ37vGcs9rfaLkw25wa9kDSFZHRsCPRzD64ztZfffAwQPWk",
  "key25": "afrMqZGizhvLjK8qz5PBcMomQEeJAcpdbprw54jkUyaWuGjLaSjNubpnTdhdheWedojLAuFtz3dLH1VDDifB1v5",
  "key26": "4mQNNujhc6KPCakmzvt26Uj9HcFGoKRWkNZFbEdm5xdY97MArAzozNZMXaTVhnKHKgKM7Cj51w87tJXqTJUHVXk6",
  "key27": "5DhdVUEaVDhiALnSBuY829VtSGXURHDk2WvqMoatbABBrs3tb2T2JzXRokBm9Zj1Cq6Wsz5erWKo9xrmGPjwKVFy",
  "key28": "32bKwqdEykWEZsU1M4KLs169AB3pQb29oMKQEZvdYXsif2nWQ2SrKcCrFhtLFU4g1xmiWELMYER2qGTMQFchzxC5",
  "key29": "35j977yD4Uodm4JFkJ2Yu2knCbYrqZpwEwWC559y7uYfj28Yfuv9x11FKarPoHHxMVaSm1F5hbQzSE32gmenFPqF",
  "key30": "4poiBLybSjCm9z9sAPsktysUfFfsF1dmxfZWsLWX96ixvbfLLHKGmZ9gNsbVgp4iSmeK33iF22ygkfqvZYJtQwcc",
  "key31": "Ucrn4Qc54cGkHo4urmTAET5W6nQ6Q6rr3DjQ5X5BMntJAxvA32Mknsr1B9xPCFNojH1auED54neLf1W12umeL7i",
  "key32": "k3GZtXG7kBZHfeU1TqBEpvXHCVBk7LrmdbwBihgLCyz2ypMJqn4oXYA6GYnesXMREtzSxxTrmbirr9R2cc7zvZ7",
  "key33": "56898tTCqhHeTptEzgbFiPEmuFPzgumHHz4w8ts2vA6pgCKyUP3z9TpcRkxBdLuHPbbPube3Ha14nEnHpRAcv9bD",
  "key34": "3pW6a4LVcLY8crP7A4uKtyMsSoMYFrJ5DmmzfvvsMr3X4PCZdPT9B9N7pw1GPmqWP8pgPJeWi7C3jZXE2wkomv6k",
  "key35": "58KG2wKfJ1van1VanqDQ7rvqETBNxaTH8v3PkMhKYZoWWQnKDnUxhiGn7Fo4nitULr1U4c8jP5WZNqoxDXYG6UXg",
  "key36": "2Zt1Sz6bdqKshz7oPQe881Ryt7gxRTLkBFE8axZMwN5iWf1QndX495ntdcFJenn2cz4y7HBQsdoRxTq8DGwds2bE",
  "key37": "4Ld6NszdWnrNc35JXyphc4GpPqa6esdR8qBKABXkPrrio5S3Pd113tHjoVPMtZDxNJiZtNUz98wNnGEzx6eeZeL3",
  "key38": "3bwb9GYKg6dRa86USNfGMvMAWtnL1aSUzxkSpuMMeUx342dqiW1hwCHuTPXA1gkJrK6BCGZgqRt6jLUrjXbiLJsh",
  "key39": "4pvA3gBmcuC4DoCVu45kkn5AHttaoshJhJXPWWFRTwUrLs7q42NqoQtUUEYT2TqnbxpLHEGUoQwdekqqs6YHrztu",
  "key40": "2ayMRpfViyiy5yNT3Zq3bwf6X8uWAGquKtgZ2NdyeT9dUg8mJuUZ881tVLp8hsJygTXQSjqfmNN8wQKM393Pk1X",
  "key41": "4duY2ibSgTnjKqtpK8qby9oJpoxsG7jgFRBa6AWUGuvkn6GXkgYjeGsgGrGjo27CtHj9E7aUedF98mSt78sykDcq",
  "key42": "5VV5voA3YkF3pXFDDMK518GQKrnktpvvqq27NpsN1DitGt5SwnE3zZVYK1k5SiKeJahFyi56bBccxc3UdEBAfTc7",
  "key43": "odabbqAHWb1a9bK762GtRYRwtAPfZLKb4aLVgwG1fRXyJ1JvVxGw1vRskjxH89tSREmdFKEmyq9HbXYd1zFubY7",
  "key44": "3h2RQXqhPAaAe4zJuvxxJv8xVhpMiaJeU27zAbjNmCn1hf5si3mZXAA4GjaxWo7WkfFjjndTJKaMTbzhGdCkkpUY",
  "key45": "4UhK1nPYoMNRahyxYCxj82WByA4sZXH7iS2D1THDimqRiwmHmzCta86ur2kTLEHf5bkR9GR5bUVWh4pGVQ1JeKXg",
  "key46": "3FUFtezYjjR3zNWDmmxFw2H1SfLKweouKmqSnXZ1RPfdcum1RUQnW3FomKZqRVdVNoHZRSCubb6Tk6omzvhk5ZJn",
  "key47": "4UZ4u2CyfMdGLZCbsCifB2P5MoXEKKtDdGsHPwxB9EwED8RzU5kGAEEVUDmHjpxYQCFVafLFxqe1rUJpZgZss3LE",
  "key48": "4qMX9zDfRPhR7xT3X2ptiWNgmZgDfsTvBo5ybaMyNyvpEXZBWcTEhitLkeSsc16MFQgM4MYpyojdrgLKHxH9MyZn",
  "key49": "2Gb3SPdtWwYGrAfX5f8vCXBBcTPfDykFHRepxZQu3PZdnXXARcUoYjppTTuGwuTekE9qvEkG2smt8ehcDeF7XJMi"
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
