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
    "25LdSC7SRsDZLofAhyk8YDLoB3XLL6Whd1QPePA5X1EsqY2LtpWP3v35mDsaPaVv35FazqLum969SGeDCNKJ8JWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21rK8gRnJpgg7yvusDTET8QL1bDDrgZnEfUG1uawpKVCpi5mZjrwgX9GFyhFr9Hfpm3CXmw3ouF8NyBuKrZKfjvw",
  "key1": "3D6opkJEX2G4pAzQsASaT9yGSsYgYWTvjJyD3faqJASpJKYXtN8YEg8qeaxZ6cweCVJ1ZEfbjWT7TNDXF6Eqg3qa",
  "key2": "4pfd83cgrnuJjaeVUtCcN1NpBRXV1FXqF4JCixxApzBLSAWdYdJYk42VwYZsfKDmhSB7byhZe3qG6sdXsckYcTpc",
  "key3": "uKHvf5acrcdnezVnkb9pVTFhLJGyhS2esVBemLGrpfJ6S3p9SYFSeRFPD5kXjZiQqUfMEf94wuvnh9YAaTJErmv",
  "key4": "5igBHqj4316WNBkovx5XgAjJE2Ac9g6fiFWxS5wtWf1KNvhggkQ3rZRKJVeuAkaGxCFzeZfHkkxyCPh8w8DP7wDv",
  "key5": "4thEXHtUwzneK69N65aE8zwx8Daw5RayAEaELeGvFjMw3a5kPFRHPNtQXBHzjWeXC8PxHjZqpt1btntTdqBSAVJK",
  "key6": "4HNMhoSZhFHauipqjjq8ctLbTbPt83ViknPzazmaG5HLHNfLKHVNwi6WK6gAGRxu2PoA1S1CusV8hNdzvTvDpoPB",
  "key7": "74GnpSgrp5HZHG5JZFszqfQjWL7wUz3E4meWysJaSFfjBf7qQ9GX5sakcAbWWVsqen9yeo4qgnnSzfdc94YZfT8",
  "key8": "4i8vxbgC1gGNJJk74vfrFND75GvnjkBHh8sw9yvCVsRqr9eUdxWAU8W7tfaa5E1Jjei8MCN2DAt3ixmsxbocLJA7",
  "key9": "2dAzwTxYwURBYMeDRWeqfJi1LPdmyGap3eNfomN2qaxvYUfGHrE56AyYE67FHECk4cgXtSruzj5d3pCcqACG1VaF",
  "key10": "5nx79MQeVry78CrXhypaYccXgSXdKFAPth4E4nqCkKQDa2us8HKRkJA1UEXpKGJ85hKSCQgVuVAZmaox6UzBHreq",
  "key11": "4wGh5NfKCCfse2C2au7FXg59Ed2THzKcbWfxHjGAAtbWBuvxpi5eUc85UFBy7M4Mu4dBh4EsQf6QXHuXZBBexP92",
  "key12": "2xCF3HRp1RvKTjjFFqAEmfYYqaceWXR4WG7UEpAd7DP6xyxAArR5RskX3HT7bcgLdvP1DjiWyoqLAcbTuAH5C6rQ",
  "key13": "2BodNzteaTVc3ebGaWN5Xme7gtx5KrpNciTp4hTEuYUiHhMTbfb4mGt58SdNQzHkscF5697va6RELkVDe6oMzQrF",
  "key14": "5et6PhStmM4mytLQE1mJPV7m6uudxq8uX5PKDr9KMFMHVLPcbYjJAFWZPdVrer9z3M9K7MmFtTkHHviNW4iSTHgb",
  "key15": "2Rr4cswvbZXL3T7jcqh95GQADH9fxdgRmc7eYhDZHKFTRqC7hCqfn4TQbYWVULfrVdrnco3wBUT74Ph2CZVtYdcG",
  "key16": "41hZygLmaRCwNxR4H9VgaQJKi116RSrATJSwNep8mob4t8UDG62V5PbSC26RVn6MQkgq94tbjh2oA738V12PFzk",
  "key17": "Qz6fRE8WUu8U1GcWW3FFrGaUeQeFJEyNm157QzD9v9Mqx5PSywRkAAiTxxiGFyARYS7AkKcDD8dFT2JYrT4BXHF",
  "key18": "3UTJMKb3atS9n19FS3ZGBLUt2tNjzYxSz4ZDQBD1JGR4ui1PT84Fa6dLybmoztFKMzrTuRnE6qrBDsC7KihvAPzh",
  "key19": "41kNBBUfRVtJ4XU5uo1jhaB9BKHjyck4QCWZtzXiDPj534d2up9FN7MCtvNYpcj9kssRoZd7QfXGgTVHxdn3GkG6",
  "key20": "2KVmM4UCiq9fXpRE8tzZf6srJcUuVBhqrGLKuPVmB8cwi2ZkinFxrNRQKZ3jFshhUg4B9mwYYYZ5YWueQDw6E3ee",
  "key21": "48rPvPdm8uppiLr58zaS13pAD1Jsd7txGaLKmBh59pg7Skg5u25kM5FzxHRpx4upeshLZ1X87ksWpPp5iq1LboyQ",
  "key22": "3b5VfQcqFtYAtKLWuGH7JiRdifijG5vYvpcwxWHrC14itickd7aZEKFZttR2ob93w6V6LGGK75eEZsbNaRgRQSmE",
  "key23": "3jbSyPrFrCWNa59k8JmHKMZrJh1HZ9cS6mhTwcGYX7kKsE9T6YXkXbpMZu4hZFTZ3xRhiMPAop3G69YBLu15GpPC",
  "key24": "2nfex73fV564xCXB3gy7SSebQQdDMLMqVz34y3yyvAPsi1koCpY8jfXvcRUX2zzW54SnBSAnEsnopw6wQFBAgmFH",
  "key25": "4tDgrCexA4xrhsQ1j5tKNBiodMJYXKFHx4euwHaWnBbcwJ7G3ijx9BRS4gpAjEbnpszAXCJnehX46k89YWxRw2r9",
  "key26": "32CBLQwYTVNNeAyLjXn8hDd4gMdMXtYMdta45vo8Mw7EsZsDUZJ6asG46mRkEtGwLVEdTaSNZjwCdypTUR6kD4qN",
  "key27": "3neNh6wwCqxJXZM6U7kCZ29cPZ1TfDY1ugqBGLQh9aJ174Rc63V4USWkmUvBSac35wcZ2aGbzsNXL7Admb1mFT7C",
  "key28": "aRNwix7u62kYmBKosqGSFsSZHiAKe6DLeE6fqZHcgeRtW8fid7HK2j9Z8VnACicHzHZ97zZp4xVKCpm7VFKR5Cv",
  "key29": "4125jxnfLZ6pTxzkmRSSq4kfURLLtUnaWmupZSpA7957zXjDN8NuUoA7Q1gzrPYu3Ewys8YefriNZRHecPr7cHrM",
  "key30": "kPhzTDppZCDKF9LDaz5shLcGPLDSCzotWru4JngLvNzDbD6cSEH8BcWSLoY4SdnwsUJwhMC9e1LTg9jzRWHMCzW",
  "key31": "4iu2VUFGD7nqtfp1GRwAi4tXXGd4DczEG2VDHry3bQPQoFNUpwBrrEm6P4hjYACAPsVrwn4D8V8yDsNi6a1sQLYa",
  "key32": "5dvAukP3RWGBfqfhLipE8Mvk2zz91yWiheDttaWwt2hsgx1XQdm8RY5iPskoGgE72xfTc4txModDgFc9Vg1KvYGU",
  "key33": "X2q5XjnSe9BrqDhFCxNQKxNNhJM7TgywT7C8SnvCroPRF9wHVWJuX6hQ3JBg5J1QuZG2WnZzw1hzWPgs7ZHxJnu",
  "key34": "F7dhaGtayKH8s4FXSBCED3uu5rDnbcJ7mFv8fCuG8EWFP1W613kiqQHfkfeMAEvLMPHfaPcqbTgQvKMv1psMZgM",
  "key35": "4iniH2DShZJp2SexRTF2h7Kg7jjuSC5VpTStfGAbjieoCB5zQ9zWj77LDr6ub2hXrRYaZdJj6fURHfUDwbUgDo39",
  "key36": "5R3PVJMGMtrWdJQ9oMg3ku4HAxBBqk9NGG6A8pmTSCt9GnSStEGacGG79juckFu1Y5h4KKXiWHXmswAuV6cYEV8G",
  "key37": "4Yvb2x3nSrqfeYQGPnA6B1HXCPM2YotP8QpzChbFixCgVv7cBsVgES3yCaLtHBVFXwWTNVdWY2uUfXSR2q9bXHpo",
  "key38": "A9vh2JUMNmwtNtEb3TsRgBGEykhW8Hjg7hbXb8UopHRBqQMPmbadNCbc6UyUm4aHartFkd6imAGMHNteUnQ4W76",
  "key39": "3vYyksmao2vm7WVjarMXLHjhdbM7U1w9hG2YDTUkdPHdzYCtGsfzwXG3gAFEsZ3WZi5mZEsNVSo5TX4CnKeLwESh",
  "key40": "4xopo1o5U9xA1pMzyKans83got9E7wVog9YvuuJr8tAD9MPyuaiu8Q3sL3WtwLgchueXDxpRoSxLjzLQZL8yocVG",
  "key41": "3Hg3ZdoA1DzHy6eMVFxKC7UjkNb6aBpZDJumN2eucZFyqTdoKLQ3nejtj3sy1MEeDutTacwRezZGK2dsbQQVnLP4",
  "key42": "3pEQHK8tLc8CDw9Dt7tMw2nMc1W4LmCcL5BWpCvgPaxbeBaSggT7GA8UYccPpEMgwYQVD1PQLLdXkxbFNqczJCqs",
  "key43": "3ARRYw7wJ7kehgHJRusXhwRVfLPZUTNqEoLZsjVbn13rT8C5ibyi3DrQ4Ksat4Rxvg6SsdA4stcB5aTqkPzLcw7x",
  "key44": "2qxFFjnxhTomywf5o83y24oCsnvwes7ibqR5Z8GyiYULFkr5fxRrZHPaJyMjHB3r5473QTNrXRqcxBwt7AkVX3LE",
  "key45": "NTaYqxn7dzRAv6YeezaXiSUH7wyHUx3tV1qRqGFaVuff3nQ1iBPGHjN1vfEHA3D9kV8CGv4ViL3jwyRMSwKje19",
  "key46": "AbUezw26UrD8wHVi9Day27EBeVvDRaxLsoJ6DG77Zbeavs1kpf9dFiyg7yShoeakFWt3zWzJCnAjDpvLsK8SjPK"
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
