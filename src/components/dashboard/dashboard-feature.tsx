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
    "45vuABdSTWB3knNNWHY5TktCcpLpHSwHyTGGDLvX9qakTVXKW1sr4LpvTrVEeTbZ8Qo5wCmtM8G4tPbWhwFDR9d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vN139kYvbaq58um65zcmqsWY2WsuX5jaHwoDcQYNVyxVUNCifHdWXRoMjHJdjzP9LZoZAKmAU27B1XBfV8KwynH",
  "key1": "2PCryNGQRJV4AaZuuUvM9p3LXmePRuuPT2Mw6ccCQgu3FZbNCc7Rrgx8nS98pA1rq6st2e7nCkxG9FLFSMDNwwJB",
  "key2": "5BLHVRMBQbAYNYdkxSofN6fkCg3RLuXyiY1DMM9W3xoXGBuH9aezcF9YUdX7jhSqMoWYP37HhAPzs2Ma1KqaKVUn",
  "key3": "65QpcSvH2G57wBWcTykQ6RKo64k3EVM98NEk2W3diitYmBrqTBEdUdCeLjuLfiDY2GxqTd5sV8bXqnpsB4LKXCEM",
  "key4": "9qjjUaQ9Zi6ErXA6SNuxn4m8cemYio1L38Y39uftSN9EapRtX9KNimyFz8LV7cQhsdQ1Kk2uLx91cq7WcjqHpeH",
  "key5": "4W1us7CTzqkinZBVxyRs5RhvG11uLCYVqWWcAfRc9n4fq8wgUGjoPvyw8HnYztGNmgy5hRnENTmtk3zaFzPgbXVc",
  "key6": "9rVvEf9hvCujduo7sc1UJdjkzzKgTXEnwFHvt6rQ7jVYfGWCMQoq5hPT9shwuuZCdiwqLAdUePQXZVR4ou9piUV",
  "key7": "5p9wo2H3NnTdTqqnZezTmsfQnXR9pfrnS9fNq7GcvZiQ5oyfQP7Sggab96uxqCc61kfaFKFe8nThGkxWJ6zBnd8C",
  "key8": "396qonxdSBVkmbV6hcqnW2N1GaEEUJpYAa8VhYBKXBf3LwUQpC5EoRRhSufGQFWGGMDfPte8fhBmGc12oTF5ztue",
  "key9": "5osgPfnqrPo4MeB7UCCeGakDRthAkQBYxtpetZm3ULYThjsj5JbCTverfw6M72AKeFPiwhsWBLA71EWyeYL7pDsm",
  "key10": "15zv53p2yM1BxfWVabbj4auVd11dG4eJJJjHFWtNtKGFz8mo9jxATD8puG5GVXUGLT7FScKxPv9S5s7skDDrEEK",
  "key11": "oEW63pZnq3C1Rk1Kcs7rDQbyk4XZps33mNBJwiX38cfkUkeR28E8v38Wc9JmyiFbfDZJ7Suy1VWpdG6Jn7AHbgu",
  "key12": "3RVqx8KVJ9JL5fuJJvpvgwFXZ7yqTno2RDEtFrcFYiYLoHZvKkqzhtW7ZCFMaKavGNXwabvKz8gnRCu49tvwWZsj",
  "key13": "5CRjbSciR51Q735Hcx3bRBUDnkp3ESpE4H22LmfHfDbj6ywgDmjvjreJKfDpvA5ehmtZfyyJ1NdcXnUB4KAi2QSh",
  "key14": "5q8pjp7Nc6ReCZ3HvRzusgweggju2wRjBFA6KqM7fkuhNC1hK1gMm1HLYqJXJHGtY2S7hJXLCkDKQfDwq6YwBvJe",
  "key15": "ZffhahHEzy8gM3Q2KNy6uZEew6e44eqJETErG8wyJFYR2ZwQ6RwLWQpjByNPY6rh87X3BoVvkTDjEJ4uhV9FUWP",
  "key16": "3mBsbedBqkZC21jALcqfkoGBPy2q298Urm4UqFRHBTEgmqkhfdPLm7wck2HxmgFC9koos8AdRAQEunX9XZEP2ZtA",
  "key17": "bxbtPJkPRErZComeb8dimmunCxnrVsC16AsKy6z7w8FNHsagwFR5DrazxeaP14a8ATdooynuqYEcsc32ZtGcdgf",
  "key18": "2UhwBZGgepyLMkgMbrQuUMj3StydutHapJfbCArXinxCtb9p3Wd9YBDoZvgAwUMhQMxFwYfHsYnKotSrVLExEL3g",
  "key19": "5MKYfokvzhmhsFAYzxv8M1P57F6HhbFACKWchKtVdfpyUnNoTUpRqLiq2JrsmLL4X9j3AMUxG55L2WG3PFJiwmHH",
  "key20": "4YAg1EPk528h6Z5RhvqHi2mqhAQi7T5JmekyfTVDx49P5ckWwSC7zAiVbd2aepgNqD5cRNAbg8NZGtKGd9NiQwY6",
  "key21": "VxqjvGczjADLfBr8VbRNXasJHnwQuoiPWpmdGbwcFcjqoVCEQan7jX2JvfvPuEGf2D7jjKFMKnQbAWjtWnedMx4",
  "key22": "5KruQ1pyabDjqk4ybVfRqJNmyGTgZWP3WLJBUFmS4nkeoBBasg6stpEEst5dgbU7bi4dmQD2y5qf9916nDCDSCJw",
  "key23": "48GUXr1DgwLNx1HKh3smmkCXna2QVkhYazSJ5JT45kNtuYkKSCVccgP8Dn33PSBPmXRW83hBSi47txUiEFeYS7PP",
  "key24": "2TNVZ5Vemq8GyEFaZPH6zQngfQSGUtKZLY1MqpT1PrcZZJhsKCCFZLVwMf2vHqokpu2tctSUsaVCyBcbU9wUsAxD",
  "key25": "5KYxjsqrV5EYyhGs6rygsHnTyUZb1RmVU1C7c2Kef4BUSPmheryzgCsvbnGjcxUsQvh7eCKF2QtvADXbNUHrvcXs",
  "key26": "371WCRcN9otFGCjE7Rv7NGXe7y6ej9hWmiUtVkmgXyXSXUT6A2x7tZ6brNpWugrYjYjQZug5tiXvAkNyPb3C34iF",
  "key27": "4peyLSaosSevjJDASs9HtXvy3dmPTJRBbmkdH68UNEVLeuF3gBB8gysjEjDU53Qn2z5Cu35bW9cUTANJ67e3vtqd",
  "key28": "t9nCBTg1dux1nntVdG4gbQF5qNLr8YjHbqdSUXkFbPSVCMjmiwtu9zP13GdaAokqH2CjNzPzLU42W13zH8AFAfW",
  "key29": "4u25xR3FGmkQhsGW9tMS24XBKT9WisZ8wTQuZf941gJWGSRnZN5jfpUPr4bqv7NUUU7UdA7b3S6iZu8AfBHLagt5",
  "key30": "4PwkgK2ccjStxXEz121RTDwE6r3QvkVZeZXwJvUf9ZpGQdVYreA59M5hskE6XwyajTRTsFsp5B61dASFC2HB6vFe",
  "key31": "3FJjGShn6UD2iVS26JdacHzoBbkfByCHob9fZtpDib5dMVvbfmJigNtCxrp2PNHU8mpXLZEdznKtLV3G1P7HfLBS",
  "key32": "V9hyyEhxMUjw5fHoAZc2N8HExiVxb4UmMSVHW3QMShZEJ13JMfhh3f3BVcNPKNrmGc25BHwhesrme3cmLEkYuu4",
  "key33": "5uw8xG6iiB46ksnDFiUVWq6m37G1ybUm7yv1DELiAEvj2qCWEoaZmBSAgR3PnpnMBBWUcrbobq5WcHRxhxGUa6ZC",
  "key34": "5bwjxF1MgvVvHqUhyhVKzFP8wwWjuFSmrcLwuDumpseLbHUoTfQH2ruourDs8nMD7fz7KTdDwqB6LJnW8G2JWGUU",
  "key35": "49xLhxk5RZxJDW9yXjb3SxLYVZuMkvN8JbpRXpu9ADKyNyHAie96zaQso8hX88dBNA8MoU9qMkb29NKwSDfinMsg",
  "key36": "3PZyM3ipFeQQbzwrbTsDpdC3VuTtwMVjDYC2trSBVdtKgjXK23qJB8riHBw8C5VCuR2c1S1HkqJXff15xEySCfJH",
  "key37": "44GNrBvRcyYXJ3AriqxwmnmtXtK9jg8HXW4Za4H4rNhhraQvr329ZfDGCVAndwknP9YrZ2H3Ah6EuSJkJZjRbRoJ",
  "key38": "3YALe7rcV7xfzrnXXayQBTAzV2yA49AVqo2zbodFp9KRdWcrobX5yphqC6eW75VvFZczY5ndDZTtJqqu4myzgEuC",
  "key39": "YoiaJAqKDhVuzy4WiV8CKyBCpxM3PC5xeKJenxtgct6RSqbdmKQRV7dxQgyjEau91GKrnBibXvT4FuWXBFpdfpJ",
  "key40": "5zcz6qM5voEi3xEBn8GqnJJ7C1zcwamDPsMKM4xF1Z5rxWAoRoJXgz6MBMRd34bsLDULpohw8PwW9D5XHUtyCdoP",
  "key41": "2znNB2DTFEPfdcrVN5aARb1mvRwGqgRXyMrqyRjnWhQUHmpxyV6SS1V7duScBxLk6YuB4gtQNpDpJKv6K5Kri4VT",
  "key42": "5ZAnWnta7avmB8MxgaQsH2AY536BXjnyyqdefq2nPewRyj1bvcWnzvWGcouwP1ts1CBvBsNgmrZz87c1hDbWpw6w",
  "key43": "5xf6WYYfphaNKsvCsCzTPRVELW719v9cdsguBTPx4W8eGzZRj3LtXnvoZBfFtfaeH3FR7bLsHZonM2bWqkAL3DDQ",
  "key44": "34pNnCvJuDqUeAR7Cfc68L4n3R2YdNGNGqCyEby2TMndoLNkViE9YuSGYm5Nbjwfa3cMFtzoHfaYLgFi2ZKmHk9h",
  "key45": "4ZkJEC2mRsUCMMZv8dyqXn7d9BvNBmRb1WHDRYKMuBKC246u62pccBv3aYbPqw5hZo44G1GB4sg1s2G3563Z9fV4",
  "key46": "3GfTGU4TTzn2KpfEMVUTo6dVFoSzfUrarT4HbX8mUgDDZ3ZoQhfMMmr7PZi9WNnbbkfQ2criyJVhWCYZWFLP2LBx",
  "key47": "4dGCn99Qtfx7DCSXdEw3rVCojAK8ZaRf9QKty4bAYdSMsav4v7iBu6MDkPXFV1v3zgBzFFwmNoWjkjbn3JKaUm61",
  "key48": "jz3Xg1wJoUJ8s5mSt6SRs9c5dvYTypBmwptruNwPjKL9nSAkFgCuC3CdPyCKvKnaQcgonUErvhP278CVCU6pXXL",
  "key49": "zREYegBVHJ1Szk2ASnFCn7XyGvhfS8fTCdbxG1QRPFHZ6x2DmWtsQUrtJGSwXkdXxwSK9cnc8Ub4qBcbDbTja2Q"
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
