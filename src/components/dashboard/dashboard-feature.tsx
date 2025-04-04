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
    "2SYSD5j9LmKKnrjDjk6NTy3JqCQMsvZVgFtpBTtBhSWdCUfXKAatKjKTkrgqnkC5Razxyx4AwKNpA3Lb9ntMmg1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CorHFQ6sZivj3LfNTvu3hZUcgC2VhyfduyPuWc6vgyad8KP2PeyJ3UM6U1B7t1aDfMD8v5MJvZmEGdbFhivKqAF",
  "key1": "5otRpF2kh5BgfdfrE4imR17vvHHCeuipbkETg91aPXpDJ2xavP4syhY7xgnxNnnfCMkFcNcixHzbEfzCWjE27st9",
  "key2": "2zhsvxkwGaypWnc6ShiiA3ewwMouQxBnwwgdHkovWpRM9SGTXvEpq473yXeovDF316shKhaxwocpzCC7hRrxKg2V",
  "key3": "5uV332m8EyDj69SvA5ity3ZqbQQ5SoeoyG8x3NUwbF2Y8cDcnSR49V7DYosxn4yrxZf7tyKReM3KvbEXwZ9Hr8VP",
  "key4": "rSpiF1bnyc6VvJWwktfV5ih6XKcvqVoRHprxe3dTsXUb7wW6Pqn5EGA8vbJvsJfeZRRPfLy9yPunEB35sGj76Sg",
  "key5": "3YjXpgtCpkPJXJjUSn9b62C8nPLuZNBQsoQ2vRmzEYNyQk36N9PYd4b29V7fpZbggaR1NLQBsMXwnb3mho5dowYU",
  "key6": "5QAreQzBhhGvzSbJ7XNctBKd8dJuPrY5456dzZ9VKc2HGHv3pcw2RTopL63u7c2TUJe9QmjHzgcCQDLP4SFw21Cw",
  "key7": "4GUWdn4hz8so4XVLQMMvqeeCFokPumPhNpAY8Md1T4p4J96yg2EXKKaB6SSkJY9hJx8V6qCujvhhoYE1Y9duMkTe",
  "key8": "5zkMifLGCBMPtdVD4uJSERQtLmfDGtFKwqZb1s7fCbxLwzgT1oMFPBSKoBvWeAn55RKV32s2JtAbmJKBjAqvFapq",
  "key9": "ZdNshtpmhSYVoW3JER2yVNvt71afC8kSRx6KWna1iNBZjVZvX85VgXdiKbqQd5FoCq8BHetYDiopK3Ty6GEaan8",
  "key10": "5guScMSJnRbvzQb7tWA7rfsag7Jg5NTmmyB7qg95UysD74F1MwPjd2YCGZPD9cXzqG2qyg7Zy5wzg4LGQmttDQ6L",
  "key11": "4Yv29WvvwKTBHmdwAxHSU7dQ3dMTzioqrLkUNZHM9CVHgUQ5kmcAVfvDgFtKm3vSRm8g5uJoeJzqsDiUvqCC5rqE",
  "key12": "33NTkYVyH9vBZuf2mkLsajwX3MX1HGs71rxa5W3Rt3jCCwgRPeKTYjvWFeWMkx4Yrg1mFZ3NdyRGDuKGU6GUMR2F",
  "key13": "3FKE9KBD7jzhKQmSwZaQaiHd9t9SrmvQYdykiUvHSJAj4ziRWvBCwxUGwD6CAf15Yqqc1Wz4j9YWerq1cYfSQVMX",
  "key14": "47fLtV1gUW7TzdbQPbyfewWeUCeSRbgiREqts9a6ZXRCksmLr4dNfxfRZJy5rH1R14HitD5YsrN9wjWWCRds5iEF",
  "key15": "3UysCPEagg4tiTHePQwGWbjkvSuku6sJJF8cLLn1xhC2Aq6SefQf3i9cZo2CsNvAtv1cCrSwzwbw9GtGQ1HDfLWt",
  "key16": "3XNx5C2uxPreEGFNwJtt5jL8z7ovb7ctZ9zgXNZpogD2CMFQbGPeQbPWFHBgjdcoMs3rxXD1kbpFdxcMhFZJ1KK2",
  "key17": "3kzkCWJK5vyyse4fBbE2E9yHwNPkHYjXfTeWvJZ67X2MAuSEH5aHppiCcPMw7jpw5fdmTKiJcna21HmkGtasRW99",
  "key18": "45ckSE4mkHSa3iWdj12XZKYemSy4sViadN9s4YxpnxzQXX1Fw7sLzxMnSKWVSgWcxWV1WcqwRWfQVedi1yTiSUUn",
  "key19": "61myyS7q6H5XBRNS2367iEgGxra4BpdAHE7ypyaAaSt6DRoL1dFxSyHnr23RLkTeR1cb9JGyzmdsuiuzpomkTYDw",
  "key20": "5Eogy9tQ9SABu8hKxSWsU8LbCPBnwKifMz9CMzkrQTGVc9qCFnjPugrSE7dCmBJv4PV6rLisYNr7nHnA3cmJqnqx",
  "key21": "15r1amjd7xbsYtQPdc1WbQrBFTCNXzmkoCWBZ6HwnVpRTx8ij2L9bw5f16qijUCme19VswExNcH6cpPK2t1jNaZ",
  "key22": "x1FnkwH1v3Ty1QkpYbceoBb3uWtZ77EAsVQGakeMnNdw8yDNefc47Tw3aTCG7nG59EoX4SW4tQsVuZmkTkCz2ho",
  "key23": "4Mv8KKEHo4hDC6Z2ziN83UU14j7oFurbnrU3cwtSm8GQYWMKvd7mCxcsuMkYUCRhaATsgzPASY6yuC7pKtA8Ec4D",
  "key24": "5uK47oc2jj2D91q2C3iAD4ErKfHHJ6LXQN6dhppUVDwTotwHN3nhHdJb7bUvwN5dwEMe1BxVvfkuTMTmkU1MGWNR",
  "key25": "2s1R7WATareM1dxLVSY1u6g7k5So347xJ8pUgmgz5PpDTF4BcdyYeWQSSERvLYSxrZM1QcUSnkR7eXPpbePWeBCd",
  "key26": "bgVJQexUhWvXc7SeDpzpmXQ8WTSN4DLiiof24qFygJPkRYsMagKdgnrFR6coLeHtAu8Wg66RczcR44gNzm3FTBA",
  "key27": "p3jFN3wBRWNDccpCSnyXpEh26jQkbqftydG3jBCRXy8qDrn5tLQtWSYogTwTbRxQ7CkU6tNcY2RKH1fzAtkGYHd",
  "key28": "54cQ91LtoEvhYLbQPQ2mXbQo5Mf8U4te7J7e4AHFFzHZnkzEBfdd33hRFJDTQh8ak3ZsfcShYgn33znKMf6wFo7d",
  "key29": "3mK7URKdyXK4PxNw1NvckTcWAYwZHv9wjGimLT5E7LtgqKfEnW4XFRuiqPmiohw7dkWN8ML65NkR5hWZBoT8LpXb",
  "key30": "235erJ6W7L3nioJR9o7Li7e5TrZiC7tB4hJiz48HqeU7VdQvA4PgozBkHABYiqGN8JhxFDXHn2Xd4Bb18rCSzdRc",
  "key31": "39b3WckAh8V7UuHnQTEUgdnNtkdYHEnCRpzt4BBVtoSHpHkKLvgm6w1gAdEnQDw9ySYSQu9hQiGBgYuig5NJqjF4",
  "key32": "2NS87vpzT3DzuVtdZvvsndY5J59ZzZuNg2Jp9aawneuQWDkn5MHahnU8e7rhqETTVBGc3psvaXnYgwPQz1u1LTTN",
  "key33": "2SJuQCP69h78A954QzszbFJPBM68Nm2yhk1VXkHByK39L92ZbgtkCo6xef3ddgj5PddPktFhVsuwgwswo7gCgb3w",
  "key34": "3kRRZtYCoG6JyNeKRsfajzfaFhq5kndnMrPUuW2LMkSEUaor32K35w6eXKtpVCRfK4nh8Bxfgqa6Ddo6NR39vViX",
  "key35": "5CeMWuzDXLYUp7FpVhU42CdmSyDAnSSTcwnVMpjngbn8sJiigWZPg3obQS2KYRPqcibpR56fkSu6hwuLjSF2akh8",
  "key36": "avgZjtH3H8YMkysyULg6NKwut7uvB8A7dW53YoFvgXLj311Z1FF6eaYX8eTpqAYHTdBYfEJpog2nxzCss2pRqcZ",
  "key37": "3YHJFS7fTTpuaJZ1eKitL1wqQ4mfSmFRKCyCTVFRbeBVGdCgrVKXp2KPKeV4a9VfEwcS74oKZTif3G1a1c5ES2VN",
  "key38": "5MxvPYL8Moc95UKZAzqnH7m1A5Sq3dAKen7oPzEzEEmDHL1CAM5tsHXpLQsv3kP9YJvpswGPwxm8kRWgHKDWXph9",
  "key39": "3x8y87HumzuzehU4FEanzVJAVEtKfz3UUBsCrGj5BDfaW3mmxYdDhBPHEvgbRdiBAz5keYhN4bdPYvbHtp4SHzTr",
  "key40": "VwsgWUBkWWgabtYwqYm7BSMb6xQ8dwX1BnKUD4hMWemCfVV64nX51HhSYLHfJFFTAD9dTNRe5iH8vrPkWC9y2bj",
  "key41": "2w61dcoW7UZzZgTiy2aC6gDeMiFzTUkhXJiGiqK7Apv4YpKuDkddf7G2JkHhiKdSUFYuwkudgkDdeMriFoTqpT8g",
  "key42": "vwwdqHciyZLPaFdoN2biGdcMEP1DwwSQobZWwWxh84C29rmKPZvbt8U9nyUAZFA7aa8BvapeVfaXrmkRAmKszXm",
  "key43": "2LT43tyGoEw7HxS5KmPFayLkLhdZdfqXy1x9qcwghZkPX1meS56gVNq9X4dy9idTHbtgNr2uiBgaBu17jZRdRQsF"
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
