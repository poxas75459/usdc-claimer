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
    "t18zSrVpPCB16YnYRiGDV7ucgqC73KMJ8EMEPoWuE8JG2Wqs7NPsB578Mm7zH5T9GmQUSQ5VVVKYqTT6vF4zTHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDNyf8zrKLAbppj7Sf8ugUjmJWXwSqkHA8rZjDKe8o7U36n4jZWXEGCpPcSkJGVr3VPPbS1Zs7DSKXRuyBWPjTf",
  "key1": "3foiy76hiqYvTyLJ1GiuS95Y9Z2BqruSS9EsexAGGVWavMN9noCiQ7szjYMv9An1y93vNCZejAaWEEnA1rAezN7P",
  "key2": "4JCVCyCGCJXR8wZXRUAAFeMAdiAMwzBC5kuvScbc2qntM8KeE7RbS8PsLsWLeSL4Jn9fgbfBrSRFMTGJvptzKwSj",
  "key3": "2KLUY1Qx9RZhLA6QrtNd7gHyKGS9JDdU7S8r5du6KHv3hVQHrEGb4qvUqsd9hVrKgujAWjdJymu9HHBTUTGmpHCC",
  "key4": "3NrF7jh9hcWcD6LqsYVvXagUrwjZpbAgx2xYqqBBMjT6zF5H5Nen4HHytbNfHaygEtGkNXEt271S1wcac8Spx6Fx",
  "key5": "3HYvRK23RFFivpxWQ3s3JHJGdA7mqBhG1Vw1waFy4dRDd62E6iATY4SbR2TB8bLNSwnz1JL9Vnuh3FukpPPbHQND",
  "key6": "4mbGkG4efCRbJby4CJURHA9v41pQTduGhJdyMvCbSuWskd1QsD2HA7e6D2wSUaBRbD75K6hycifc8uuSF8JoL9k3",
  "key7": "2xAHu4cEfrPw5rGAxFPGHe9Xhijq165v7A1STap2c8q77CeacqhdphMqPpitDQe7R5HZVyQZA6kP1DMmstvwrh6e",
  "key8": "3xosy48KgKX2Kgu1RqCK79Bm2ddnqf5Wwj1qvprfsCnB5ihyGU3b3Y3dToCkSap2xvwCnKktZr8qrRJ8vLpuMdAQ",
  "key9": "4JefoDjWH2SkwzhQ53DBQTYrQvL6iQWWJZvG3uhacmFmZ7zr5QGLK6ktgKnRqGuxFhxqopTjLhhxkLg9wNNFHeW3",
  "key10": "2rhvdN6X5CuFbjV3tc9t3Qg8VUuDNcVhbPNe1nvAqHDVUmXbKgET1xNXXszrbVEyXmbhnwc5H2E8GwDVtJ9ywgVF",
  "key11": "m6jimBKxPHGmbBamE3QAkp61CTkZ42PHwck1CvFLBQ4D2tbt8aKtGzmSHHkecQn3qSdAUbR1NpvacB7xtdkaPXh",
  "key12": "5hTGvUeZLRREv3jNZzDKhrPDaf45zHX8mBUh9UCmoQRX2SuQWYK4pKmi3vDNUXoAAedtt5MLFXB3A7qebM2CYXzo",
  "key13": "ZaA5maavM9fEaMuZ3iV9HTF7wiJHV359AspRkY4B1r3QybsundraooSTTkJshpVGE3KD4LyK3jHwYuucHwqwELC",
  "key14": "3wKpojYZV7PCX7w95SkYcarrzVfet9xMxftkVP37JJJNXFHbTaRg5pvJUN1q2ouBnohzfQTrfWVrFHidrmNiVotu",
  "key15": "4JwfaxG9c7XxoR7BCZy3waTRGpaTTsNY4BYnXSiYS49dY6V18WupZ6gCtcG5Urfn1r1XHhxYYVdfnDbPLXE8qFnA",
  "key16": "4voFqUJGDQJN3DFJvZa2hd8rd719Q7SGFP8yjNiBHiCfoJBuotJiz2crdnhZBv5j2DY18cb4jtF1AonwDMxkdqPw",
  "key17": "2Z9Ua6PhokWLmsFgKUfL5qu7m6QFCxfvewqeTfZBHsQ41zZioEx89JKrHZwixjR9tXSwU1yuF7ibbEGWyt1obxho",
  "key18": "X2HzAe3wSE1cp3a6J5RupQXvcQpDV1GeNVsaPwNpREuWQZUDkcZjsbnSMQJ3bJ8RnPPbnCCAGsMDUNEstvS9JyX",
  "key19": "2bhxWppJ9Be7hnSVPchQZzwanJ2r5GVcMbsAAKkcKzNt7tHxFRSRjaXCt9Dd2a8xPT9kyCd6xw1BmiMcv2vEjD6x",
  "key20": "39JAjHBgJe2sXtnuXReSNZdtpk2dm6HkkfXMGCqjZyat55F8N4Wr9QXVgZyKR1d8J38y8LVWNzBBvcAegwRNiEY5",
  "key21": "526itPb92pHw5gAHvy1WHHTT3JZoWxrg1XUUqrf8HS4EBYsCFMMywAxVS6yETrwiJGA7eeSADMLPVfBCasTpzvjC",
  "key22": "vULpSGMrKpr6nQvxM1eMoHLZTxmyKAhETPi2zx1pNh4TAyxVj1wb7LPaygnzznFrFXZ3VUYAPHjZmpVYwEJaMXB",
  "key23": "358dAT8Rq4qLtSgx1JWJ5YvGZG7ygUMrMBKVgJgEi3ThAhUZPikGjSMEuH3qgACjPSoChcX3UESNAJgzKsYPS3d7",
  "key24": "4s2jnJj7Kv6fcnJb9nanm8VUeqioVL7PgCEPdoFyV6UCKWamFWB8onBcRep2LyZTxkhtiRY8UvnXyhLhwWrzVoqG",
  "key25": "3GG4e6kULgnoqbN688HSwzPkFvp8VWPY8i1ATG6QGDYGkYD7RRvBsdQ7BxogAuMHxMJzdzD6gwvhj6QyxUdpgb1h",
  "key26": "3Pamr1x8C2d8zUkkVCSPxtRKiUmcCtLVsMsbeFyatEgJH6ew2pXaNpNn5d4dfgidcZhnnuJDkCC7uXCwnKbBFP9m",
  "key27": "5v7KwrHiPnoqWm9XBLRZ1F85Nvrdf9MBgWSTQxhDRjpzqJ3mD9qRoBRMJv5FtgfnRnthkWSTrWQw21U6k92dCLiM",
  "key28": "4gzZqoHXHK2coQHeFAX4tCoEFYTo1FcR2KP4RuDV8Bj6vnRTEL5obt3vYmGqzrEtqvc9yGxi9p3DGfbr5Amdh8YY",
  "key29": "5qdju1wFwN16MHRCCm8dFNiyPBFDQoRHb6t3SjDyBwySEK3wzwhUoKhLUg5rNCHKB6cxT8zVPwa3B1etk45qLevb",
  "key30": "4swmjcKaEmPYscGrTbQdFC9Scih73GHD4qVgK5EfUjh21kxryrWhrGrgDu39PnfsPehQsv1e9nbVB3yN7AGBYuaJ",
  "key31": "5KzSQ76yWZ1TnEqiTPCVk52nGce7KpXYzJSXEqDCukqYwBXYpreAW3cPARWPYiqvn9LvSDbwKRJbyqp8Jdshvx57",
  "key32": "3eyt9uVa1J75DnELDJpRj48J6qPm3w6GJmAwFxLNLgdCvonvz3CQaSre8QoBDv8hfs36W386zvvbe7Yc55qqQNMm",
  "key33": "42fpZkYyyYS14pGNnUnXchnmPJyRQNus3PKPF9K4H2RhS69V5RBueQMmjrvvF44QnNmiSNra8UnLFV17KdRMSB5G",
  "key34": "643Y1zrJjTXQBb7VEnXFxp3Sn1fs3c5HFFYdg3e2V3irNTDniPorLJhkLYdrJR9qnmMSQWyh5WB1SG9wrN8M9gBm",
  "key35": "2cDpTWxhCvc9NuFdbek39YVNyEWkb5FpnncaMt1UjWn28BantDDWU8B5edGoGhhG1wbwHBHQrKAW2hixxMUuGjks",
  "key36": "46VbwgKt9nu3xyQxuzJktsN4n6VKp2HGX1HaNAW1esKQPSKDF4ba7GJ8poYijcqpGuDDRBdmEWTMfWvYCHe1Ergr",
  "key37": "25myw8gd4Adg172dg3epiYukZZXv9nSEWGh2mDfB2o6BPd5R5o4q4yKeVL8HD83iwr7J6jbjW8H1RgzZCSqwdVsM",
  "key38": "3jt6uwqiUeJdMWHLauAoAyJCgoZfLLiFWK1xoqSpUAd1mczvdcLvaQb3RVkXQaqonZyjufyujwcRVyEf4wjDXTet",
  "key39": "2nmYpG27fMvTtF4Q9YDTJybHyoc7vnTayJUpNrfomZCtHCJYuJ5jr5YBZRAuxPe9tmhjGmgVttLci2SsxwxwjjTJ",
  "key40": "3gNxPzaBCsVZoDC8binfzjpdWciHdnu62im5YTr1MYXPCwVeSv2wxd2t9a1TkfiU69EYLXDKfDWK1qY9aXoXupVG",
  "key41": "2nkTbHaPTGe572n9pQfBzThz4eKcURYigUwsNjugrGuKfpUL9itypgKmcrGSQ583Urri12avdCybuf764Uo2Zvm4"
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
