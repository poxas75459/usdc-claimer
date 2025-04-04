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
    "4ZTenVeGXTHyTJ6P1nCyA7WZ3THjkWeqdpmcCi1Um9MjGVQZW18ah3ZmbB6pPGWzHkxsyk6GdvmzdYPJqBEcvsne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jHibrgytTEXMBDSepUKeSir3haPHRQj8iXJvVVFngu7aPyFoALpUEd9rmU4qn5JgMogMcutvzDESEESayxE4Hm",
  "key1": "3hU2tEMe42a7o68tH7s7XxF1D7FhvxfJofAr9Vr2oQAAwSWM2HeFZBoWNZW5hfqfqA3Y9rSkRddZQKhmhggRq3ak",
  "key2": "C6mdmqfdbkNyizxay62fiBUSnWYY3GyS6SjDuWvhn3SNFpK86D473PgaXxgUZpVBsnNeuPh6DWCKBderXbN35dp",
  "key3": "3fWdS6CzgME7o2jQNmEfFcvRXiCZb2W3DcbB3zWWYUriQwasTV5cieg2t9pBJSCxi5id2cXsGzypdxB77ZKdoemT",
  "key4": "3JPjCws8gGeP5kMYDrfYx2hUtbQApJgPN9ap8PUokCy3mCphpSg6wCGtiZbMgBhxpKGEFncmme2J16NWisXrHASd",
  "key5": "ED4ceYSFJLb3EsoQoEhEMSC2pNgUixUyXEK4LNsCNrdeCg7sUGPWsyvNWCJUAwiuTyiEjJiT6AvnvjMMkqsMiUa",
  "key6": "fgFsBJXWFBSQnfh6hdALR8Xj8bi8m3oYZYBwBMVdZPffrTihH6iLys9Wy2ZUKc5xJFwHhfZ5aMGCNQeetYGuxhY",
  "key7": "4gbVKKk2oN17erc2Cfd98A59abKQMZmqiWdbp3Lvhbhc1HHxm93YoghH6CeCeb6WHswp4KU8nSFTuKbKWbtCn4h",
  "key8": "VHeV2HSZSEUaaQHkdd289hCVSgNDjGcRnDqtk3iaaGKHaJs3ppvvxts87WMNRwRQr3NCFYPn9RAT3VTcfyWtj2e",
  "key9": "2bsV4NavNfWVtszMjHoEvNbVMqCtNoR4xcbsWwszeW6siYkcKHYBioi3FTT7A4U5An7TKvHxUuJvmKpo7KjZhAL2",
  "key10": "JMzayJE2d78rnz3dHh2GcsmYWVhsp2aqEh5Num5uMgQ3q9X23faw6HEtXuFpceqTgA58FYFt6J546zu7NHFm54s",
  "key11": "xCssEP7KLwNybH5inPQGzuJWaNJh2V5dbCPiQWk4N1nskAZpAk9TKHx4i5PJPj8Tr8t4nzzG2TLVgYrPepBE2qF",
  "key12": "3dThFPhUP15VZ2E2v8ugZWjCoUbTsk9YPcxgH56oswfx2szp3Yx1vhshczzaKk528MqZxyB9Ame4kGDhWRB1i1Vx",
  "key13": "3ZxsrpQxVRJagPUXDeyaVXben2RQvJvAdDrLKWmbLT5N9DcBvo926SLbiws3Fp1ZFMJdqpcDvRjJVnKCBKTyQDiq",
  "key14": "FRdiKer9QKFbWfTtFQ9uKceEDsrnHFnxA7Nu8kvUtpyQhzefGGvJxns4PV2mQC5qHrZ39VA4EhfsC3JindgW7ZS",
  "key15": "4RDf9nxKzZJqZjnkeEm2DtHjT66ahE9AfejBXKupMEcenMxm3zx8PyK8kjQcVTW2YbjVpEBbZEcoJ8wZHwQ5p59E",
  "key16": "3CaFDXX9gtVjZa6rfW3nbfq6mUKgxhd99sXx99BPTjSaVm3ieM5byz141nizanGKu4njJnfTVGhZKJqMJy7sw8aY",
  "key17": "5ZEAua4i54yBugqt8w9oR8GMFATYLtHCk9MYDwVJZsZ2dBYtvnTgNQHGNaB1m66dbdY9HKUbghiqmNPqKYHmzYUb",
  "key18": "4iuqkuraZy116gXMUmj57dVdifzUxxU8HbsBNs8MNbT2UqxphXYEyXeTHRBor8Vi2s88zxAifvFKG7wtFK5tjVCr",
  "key19": "4kemEg5uAA2aszhFF2kfBrcbqfExAWfkrveyptse6uWnHMZSv4DUqUpNRK6x8CqP2aZGSPPXMgAQFZEFkp8yDM8z",
  "key20": "S5N5a4g7ath16JVpSjSVULSp361zheDhk6CEUyHw4xuYxj3UGnVa9s8LezktxbBGuBrebYqJvdHYJytrepiASV4",
  "key21": "2U2vfU2ey7vgdaSEAeQSzwAhmTQHidVs858R38R61wwJbtvMoDUAK5FyNgAuxHyjLYrUmpotgVf6rzmVNVhb2WvD",
  "key22": "EhjsPWPuTSscX4XstpbeY8TRjH9eB5BdA5M1QgkjPsyaW54pwCz8Kja5KHjJjFryrL4sDsxU7SfMa9hUQdSTupZ",
  "key23": "3JV6kVS4UynL9vrzy2L8qAKv5S5eJ3r312W2y7y6yxpsJLvdg7GKV3gRfy2Z9DR5zWfXyFhukkJR6N1L3ksdGDpG",
  "key24": "5nED3hKkU2XDFcX3ULsqYmJUn2mMQ2HgnqvwYYsCX3AphLoNTSBiuxyAbZsmk4UbPTkMzcTwVGYU4VvTb3WhLgJ4",
  "key25": "36JV5yZQC6RQByUtSFZXn4QyKH5PY97peoZPEfHpfRKWvtBZckU4qTWZXikNwinfffzbtnyFjaQ5Y4bzcdpRYmqB",
  "key26": "5QEW4XWBKvpvHLJE2tptGunx9zyDvN6aTnY1BQBdSWyR2s14Ceb48NG6Ssr9x8kWZ7VbcBjgsjB7JrqfpycFg42q",
  "key27": "43CELE4woCCJKRu9KopTij3JZjb1BMfZNerunC5yHzQ6yb81w8i1uP8hvbLkkXrA6gqLcNg9ygKCHrj8ekYzqCg3",
  "key28": "3ETKRABRHu55DsY4Y3E5BSW62Y1dKYgToUK1hm3q3eSDuNniMXj5FrREkJDw6HJGbSvFYRaNqydU615rqyGqFH9b",
  "key29": "KCrUxJSTtG5fWJqBxwuaJNMk7GGPKiPqJoVj9sMwUrctagWx2anm4jiDJdfCRryEawMowx9iFd8wTbsw1dHTVBY",
  "key30": "3tJJM1BJ9aQE3zmeCpCQAKWT71BPu6PozQ3XpUjLvvqoy2G1A9jsEkdQpVLby371A5LUT2MaDhfpS56gjmpHWpEP",
  "key31": "4gmmXypKQDXC8tTuQXp6A8V9aWmiNU6HQfLUKkt3tYBmjncW7WSUYj6FYWwnKYTJsKd3Q1bowpBAuGsQFdGkgJmH",
  "key32": "4Xyi8kqUAkVeTU2tg1JtRYYvJRDXrX559Wins6EE2PhFZHH8cHB44iwhAevFe56e6xkcmjU7is2YuBguuFLdSbau",
  "key33": "5N6YpmSR6bbUurnJCKAwf2xMfdGDCDvND7iGZhTZxaNS679qKJeLgDbPWaEULqXFSJhhmSQEDu7MQEJMeH6pkorh",
  "key34": "2qjvzd5x87JhnMZPa26ivvQ6mfp8doj1rvJhTqA9v1SbLZ79S1qigNgS7mxp5rM3hcodpc77JnghyZqwUZu5unGa",
  "key35": "3WUpBC5iQ2jNAT2BSBCa5qpv2aWA6aaZnskrnHZeKcbzsSCYA6hcYyvSr7FjjK68ci7iSCFTstjP9DT4yVDd32R8",
  "key36": "2kxBj9oknxNgwGpjx2uveZP3CwzVHzTEo63YrWEds9Q6iiJubXSvg76CsWVo4Fx8AWB12X4tKaPvS95SbuwVNtF",
  "key37": "3LUyKLnFsNesFaDWrhvj1y7Vezdj2Jd7kgbBjHfo4YSdru7CWfn1DnyAk29RZQMUtRxJgUPoD2hSJ4XJ4xttmYPC",
  "key38": "zrByL5H9TWZMHrKvSTjtEozWQYd3CyUjg54kYyBjzy7kbirWHsZ4risY7tysU45K4s8pnDJccrqdjhxVDfceJDE",
  "key39": "3AMkwEKwewVkSdS3SPZo6Ua4V39XcG8jEWEGv1jrmQDFkVCqrevjPwHx4UAgzMNHFFEwaqEUPqSJtcah17sQcc5Z",
  "key40": "2nUKtqHrcZJfDyF4fgQVaGRNAedVuGuNHSRhpd6rWqxQuKMTXdkKXKShBa46SS8ThiAuUvHqMVQPo8LNG59jG3VG"
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
