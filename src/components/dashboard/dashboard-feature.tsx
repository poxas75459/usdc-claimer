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
    "2RP32G73PJHy7EW7RALFjhYbMvc8yqeiRRLCy6rpHV4tWxhapNeBAjLKabXGgk2AG2nonLfDaDWYwzcmwqbZANjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6GwmFtDC8vXkttkx9L5LnPdnAVYYXw2uFp7cPMaxh6X5yJz4RQkink5TD659iU1NFBK9CeUwE1wNhoeW3UAsui",
  "key1": "3ZzsUsL4THYDe6BfGh4r7xRfW61vfAdCmY7NsKSbbEXuZEropYG2CHrDKo14VrFwXFKzFgKN5DAttQPBwUmLfWA6",
  "key2": "38zDWMWHXnD4Np13A8gGepznRUnQAo41D9iYk3LXgTwje1fYBA71gkhxuEEbuZsYTpKxHCa2d5NWfoBJLvuPjgP",
  "key3": "4CTMYKzY2b7tXMeWtf3b4w2eMCS1kNd9DQLU544nEfBWNeKGudo1HUKuxoCP9zwaYAanncbvqfweu2jonWXxohWq",
  "key4": "3C66RwzY8BDq2dJmiA8UTYMmHa8a7q4YZrCY2cGWWXvZT9FMYxC491owJv4o6shpVBxVhxBh8bSUuYqcAXmRY8fv",
  "key5": "4Z66YLLXHD1qnHaJPnnZAuZtqF3yGWyYEGL5ruC7BrXFnQdZGD8Sa7BFvBM7mNKvmPfzwUG5bU3WnLdxWv56mhA1",
  "key6": "4b8yhbLBcwrKyXJpcmZyf1cqX8LTarTmBm67tntQ3iX5a7fqXkEVuoa6hRrDepER9fspXN6WrgZvgVDqjtGRG77o",
  "key7": "51qszknts3Kd7Ru8Ss68eSKLvvGCvb5mva4UGY9apLzMDdVTWFnE9HY9XxdCEh9Cogo494uc5bJauss9BjXSdo6N",
  "key8": "52ssRfQzyyno5SCUcuMrcvQoF38PvVBy3KM1z2BirCfoybxr26siF1X2cQcVUUKiYSQyGUEeRN379CqdwHAySaVp",
  "key9": "2pa3abKfo8vounbqTyKnJUVdz4NCpF8jYyF8GYx2VErP3EhSvoJqW4XNL4mZ2NnWGuvxGbWwfRD6DirybPpgsois",
  "key10": "2FGej7HPn74tMk1RddQ6cTGdZbruxScEHJKqu4t8LQE7rrjc7Cdzbyu7NwEd1bjpUD4o37ktN1KJ1xr617Jm9soq",
  "key11": "2A6Sb7ZBpLPPfX4krZtccMaMirsCzyjAgutMgYmvB2dKUwxuou6anYArbUffjroGcHEvbNqA6TAfF9Qzz6wpbmvB",
  "key12": "4bKXf9m3VmaD7q1s75CBPh9noKu9GBgBa276ZrtU3scgNSLkP5LXwADzqYSdHN6NshmuXb6oj3g46iPT8HvuJZQ",
  "key13": "5dLyCbAFDEzYWGy2iruictvsSexkKE9SqpHwQbHQ1YDajgXWmVsykEWv7uz8YLzCQVh48owrHWCm1QQXgCmRs3dF",
  "key14": "4Twkmh1zzjbvNCLsDZdrNvtXRx8itsD6ki4n61FGJReEhBi11chTPFSeSAjCgnvRAsdTBsRQDCw1Vq6VQxnfRpxA",
  "key15": "2FJfbQUUAWAULFvqBQd8t9cNCMrFzSLRUsMWrR3USccnxZCHhA8pNL8HubGgChsau3vRWncSip9LYz3soH8CSzcG",
  "key16": "5LFvhLuAkZNCMJvMvp7H2MMVJxJ7TRg1N1wypdVN8u1VqNsNg3pfmooPNiX2brameW3YoCBc2G1hLaYZVv6mFAwt",
  "key17": "592bfy5iaRwbmteGM2QgHRdD9UZGJS8g9PA8p5uvMLUzpFaHTUCehsVKPQMNadmH2yXPcFw692MMoGxm9mKVxsco",
  "key18": "2fsev8FDVT1AMnnJgtdrf2Zh2Qh9oq2KQsRHqVhbzggD7esd6fAfk51GiP8oiGrtakyhyzRwfY4WxiUqu5k9atzc",
  "key19": "gFRbHxmc36iiP3xJssV6gmLynSETriRvtnKjAKtDqiGK8yDiukpEBaDWs356oznksCh3dRXwq96uYctkRmS3knU",
  "key20": "66Z54sXEs2btNo1FCDDNuC2jSP3YtAASZFPRmmy1MSwEVxieLyDqi2VDoy7EiHkJhBongJTAyhWMYYXmxcyESNtf",
  "key21": "2q4AMJoSKehHrtiSFNAfKDipP6WWzwnYDoSSDZYyWou7eN5AxkBeE7MEvMprhLnULEGZd9gXiumMEfSTSYtCv1XX",
  "key22": "3wCTLzHfJkb74nSBxzkdVTtsFM3miqgfVdUh3KGqSS6EAPHFjG159C7UTvbnoSfoWJtPmDXVxtpdYyM6h9KUB17D",
  "key23": "UrnxJFJaMKLmsuRCVXP3grXJ1iHhvRRoDSDrNsjn6o3Pn6nCyB9Evh8QH65UuQLFcVZsj33uPPqTxPyJJWDQyXt",
  "key24": "3PdfqQMriwprzyWZ78KQYa9awsd1pjearUcNRhf2wh6v2gSeuLsgT8qQRygL2HqyqZ4ZBjioTwZFUWKPg4vgaLGF",
  "key25": "TYtfTmH7EvkGFSvjRyitQFxtjqoARn1X3hqsiB3TkiPjBiUCdxhZDLy1NUQutxTmsgfkiAavJg1mZSwm3d2nLCZ",
  "key26": "2qymmCgNd8nwT4Ye5ZoQ6ut4qSkwmsZnmVfiTaj5Vre6h6Yvd74ccCZQ95X8cKpKdvVkukTN57PWgKewSoUaKGcZ",
  "key27": "5KiDGmpbsrASCoZR5ctQAS5bXMVFgekDDvgqfNNJNVZa7wmPnES23vmVyaSzH6q712c3HHFAvXw2xGS4j53nzEnN",
  "key28": "4mfuQcuwWeuBxKev6vPcjYzDJrbCP9pZUrefEFaJbpcxg88H9PQfoqGB96XgJ3mqeMqSUyJo5k4Q2yM5WLzkt6mE",
  "key29": "4xQt7mKJaC6Y1sxcWuQQ3H77VW891JthF77wkihxPvDyNyhSqGvec24EUerM7UMceMogmnFJ2tDhBPtfcHJhuV3u",
  "key30": "43FRbYdmLD2Y8Qoffpm3n6f9QRaGxPNc2kmPGnsDBojGd7oWaU2gPJ4MTrJXfzBQjMQdWsWR1ZNZPAqoM1FwppWW",
  "key31": "WsTxYVYaWunweYvyVtoML62ggQzdvSFE63XAfmLoHmW8HDtwJw95WuTtWMVCyDYMcQzfeFg87qRMhpzkKCBeCaD",
  "key32": "4oxipirZ6gmjdUo7CJQa8NhWp1kxQefc7iKFWBtHtNi2QDBtNRgwFBzPG5Upe5abzNZJ3U7g5396scptCXe7xXqD",
  "key33": "5kb6TwTwwiShvN77CtrQAB4RL4kXKVCndFXre124eqq2NbR4FnS5wZfcSjCiFWTCXMNmMxng1MC1D6ZP26gY428L",
  "key34": "52t3cd93f7dryiMTNFz2HCAHwJoi6iBJvHp4viDj9betWaKRM2BSCaaGm1e3uS26kotuF99Ys1MEWzHM1RXtF5qv",
  "key35": "5nWUuSPbeVjcHvKdocWo22eFh9PzDBkfTPoMWghoTuWzBq94oSJmTmnWdAP58ssRCHGPaZopUb9G6Na2xSLunUHo",
  "key36": "2j3LTMnCJgA6niTLFhH6dV6tMV7QandQJe5pCcE2hUYErsWkURSypvag5G4fGzc7D1HYS8pKHmYFGsjqNyaiqMuF",
  "key37": "CN2KEBP1ybDYArME8itzw92z9WqWSv8SsUxMd4mACeFtErZe3MvpKs14nhp7kKT7p2gtVngkJTreerRJfZi5inc",
  "key38": "4r2YhWLpVg2cVsMD7Yd1m8RerfwyZV4vc6HP3DG4ytYynqaczVi3GG3JxQ8tEFnwVmDMaevhgMdWXfFsaHKfw9SB",
  "key39": "658ACzmeohytnesjzWMpfpGHE5KuPiB8LLm2ekg4qYr2JsjcQDed8PZVeavypcEm1yEGDihshjwGPL9pzMoc2xay",
  "key40": "5UisZ57M23Rw8bCofgaftbo8khuT8YjwDwHrmbSJdDtV5GpLEEHFDxK5q5TSgeJVQVLXDiBMSapk7o4chFRjxrNu",
  "key41": "41so6YSREGV24WnMha9Wi3wa66epRWRoKimQJ44Pg45Ghd5VzCk1Dd6Mepu71BBqS6fR8qmXgTHVNtPDY4JWCHP5",
  "key42": "3p7sGP36JBnaQ6w8KELQ1h36HAqgRUFSZQQ77HGMJqekxE53aMtTNzjCtvxtNDFd9jhQB5U9w4jJUNo2d5mSwtuE",
  "key43": "CNvbpaHbn2tQpPETzmToDGScE6nUGHZtS2GDsTdz3RH7BbRjQ6trGdeczQaW34FWT3cb8aAcKFqHZ6JDXWuTynn",
  "key44": "4TpH4q8SbNtCZhUisjtMQvCJUbopJ7wQj1EZxiQzXqb9r1oG4LDh9Duht8mPJtFVC3LMKzkFrMhVcufvBWVhLx1F",
  "key45": "5Ks1HSUzvft59bvCmBytsZ531yVtCJkjjhDMu5ZjE7fFvLb2Pp4TvFak9aNdLPw6vQDdJ2LXeb3pKGzqBZqxRnLn",
  "key46": "4GjZMDnViQy6L2BEYqCaJACkjBE3x1sxbKa8twgUsUZV1myrLaVzWn1C7T6XnrEAruZCyS6DzeBMtZkAcYLoC29m",
  "key47": "45fSY79x2cztntknpPKRZv7e5ah5TBUg1UrZhSrwfRKnfHSpUA99XbfzKTx1U9TjhSzxvBgUBeXLouPM4WvK4X2u"
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
