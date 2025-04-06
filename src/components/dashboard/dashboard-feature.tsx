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
    "2iPoekHSuYwx3UfFgWqXhMn4ugvw2MdJ5ivrRR6CttX3ExXvMoFDUGPoAW1T1ah4U7dGnpLD664JyXgBq9fjDRkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fog4x8fHJtuWqEPdiUJX8xAD8rEWGT4eBAfibbs7Uzncsm2fWhwRbWchX3JEtZcN61uwVKMU7QABNbuJ7972zEo",
  "key1": "53xerQK7YJCxbZ5pcBHupVYVQuWrs3vUr1MMqQg3hdFyTt3APWBSMSfnkK3ReYetXwmFjUcjGViYqUEY9H8P3gBy",
  "key2": "5KUbLw82cJJxXZZuxbsMca64wFEoL8yrbLSPxGNVw8KEhA813eMZerWb1JUtB7F19iChop3GBT6nzTu7BpjSD1TE",
  "key3": "25GcodCTyD5nPNTYY89J5B4pZp8dosEsNc7Rq6fehxLw5SKwwjCAZcX3X3iFiRaxbASkTMnriC3BWkmHK98n1C5w",
  "key4": "5gFihWon7c2fM1G3qvWvfCgyubNrZWpTc9nHwWrA7NdPoiWSVun1nA1EhNuMXbcZzPi2PBaCzaDRZecEB9UJLWM2",
  "key5": "35WLaYgTEpDgtQxHKQoCMRCPFUF2MckGBzs1wykcqS8v2HtveRyAW9s5wuvuvxgGfMo6nXwbmNVUFc6Qj2JZhFzq",
  "key6": "2jbtvX1a6rEX8DCF9zo3xraNqcTwXak8RAm1r7XXQbxyPBqZ8bupTcnUHLGe7XUpvgdQ7x7sxEPQR4U62iZhG666",
  "key7": "8gQwdhQs2SVU3pJrJJYGUTBG7ZuemgMG9K1tL9SPLUznU7AWJ9JWznJWKwUEmatAMQuVdYgwuXWWa76gej5cdF1",
  "key8": "2mVjMZd9b2vPtkWtN6bXDDd9Z8NrPbZMVXQ3GyD5jkXByYMgvFAgM9sBsjyXTQdQuVnjpXA16kVD7sNdWejomo3X",
  "key9": "21BHe2h9CaCSkcZYFJmW4XE7Vr5v2tjjCWzxhUbmZKkpQCLndBkt32mDoS2hGQMxzzMwe5mbDCEGSgczkLCQnSEu",
  "key10": "D2w7mTL9oRb553bxKgSJ48pgNH9Dc3DEhZ83gA4C7aNNoPbJ6692GoezXKdAvt8rhHFNprmdbgEuvbTSVNYFLL3",
  "key11": "3DyRCoSezHdcaKDPPusHLWtfspepPryjWE7WYcdVYwnDQzbewakfduBD1vjSz6MsXTNv5WmAcAFNvJsqzpGnShFe",
  "key12": "3FyxERgKKBNZv4Tw2ioUGoSKxpkxfdr546qy6GckeYEsPb9uQEAEUzRMLodj4eccKjjQdJE2u6agv3nELpKSta7s",
  "key13": "4suu6wMZnLCvuN6KdB7k5zUHmEfpEioddae73KzZL3XYbMUP8o5Vm1pCvmMHRhvA5nRqH82Seze8Tv6bLeLLeCRV",
  "key14": "2Wrew1pcy1zqC6eiPvHwqgcTtX6rgZn8kGZFbmnafDyEMmX2ZbDtYEzXVr6SLYu2p1pEmV9AxLW7UcViydwrC8GN",
  "key15": "5gCJWfHPxkyGvizjbkngF6jZeoJpQVY42Mcbr9ompqZzS5XSFG2p91YR8EUEF4rT36J9jkUhbV5Reihf7sxorHnX",
  "key16": "3ZTuaW6Qu1dDeT9P6xo15Lnce3wFpejvfZeGCLeS5EVLcypaX5ywf7nP7uU3f2aSvYcDw87WXwBrWfe61gDMf8bW",
  "key17": "56BEWRU4sXhkJKAFV58uWT8nytpuyKtUQ1hkRgcfWNNGAy9qQW5AQUXXX1aLvZwPPSauAPLspZY7dKrGFBY7fqAX",
  "key18": "nS8A6jR7Q5KCS5hFuSSjBGmorZV4wa5wPKQucsYae1jrG2JygtRsSVN5bePnwDSRAJ8yLvTMST95DKQn42pHb4U",
  "key19": "4Q84wZdpZ3WyW56VrzNfaXFCTa3nKVtsUmK5AD1UHAqEaKMkKoRvhM8ZpBDnx4To46rAYyZ8zxayFrJ6Pk9D92Es",
  "key20": "AcQe8itGx94wqkmEzPSwF7XTUbJW73Fj7kPrRAjGtfDB5wXXTcszz4XgMgnzhTff9Vet4ZicDFEgf7pasuA7VKL",
  "key21": "t1rvScGQ2aV8nmggQAY8q3JFZvMv5VRaHFwpbBiyicFTBXKQiA7dRDmvQULJZL9wkRZKvG5axJt2ENbSgb2Jfc2",
  "key22": "57HSjq8oAzyJaTrmKrM98DNY3SDHzEnhVkmP9AoU7RZN9sqk8NJ3Rogokcx2242RYnU2akXmj31b1cCMuyRRDZoP",
  "key23": "448RZmz5gaoc2kPQqMngtemMf12kJ6r3pCEDL8SSE5yU9WqwqCBczB8Ltzsf6vY2KtNFXdna3kiJCC5pqJNMRqjX",
  "key24": "2SCh8njGZgJAW6AG6k2MHUhp975nzubTwtHcVngg53QUL5TmMnSr4zcipisHuJqEyDW6vhf9tF5R3UGSiRJ62Lh5",
  "key25": "5uqguSdiiHPAhXv6ebUAE5cq8RCwYrP5eQgjnYLk1NArfwqMo5CCa8Dg1dvP1s3kcer3PRRKDX7VQuCEc389kfgU",
  "key26": "67ENK4TZdHP9DqLQ8w3hsUR5VoKWy3JfW6KgDaJ1HbfTGhjzqdABSbFVSgYpNQGmtdSiJ1rQpA3ZoVmTCiRNXf37",
  "key27": "kD8LHj1r7qSRQVK2aniyr4CaLEyJcVbAAdumE5udYS4sBNYyVznHG4k1kbPwjYnWivpviS5RkMRaUPDpYfUXbrE",
  "key28": "pdkouBaR6AK5etJrxRJ5gXGEVCQLHJjJQgYZ4phfCbrVTKf59nebwmYwe4VTyCN6UM2zjsapRdeap5ZKiqu926X",
  "key29": "3mdBNQ4PeqTXGhgfKcNzQ55AmutC95xzB9Q3AwVHXcSYuPg3ETb2fG7pqd18jRaqDu89UUaaCJAFMYaqQVU2dNRA",
  "key30": "3jeSLHmdKzUDftUHpVz9oDs4Tv3XDL7DH5D8DuoV2sqYSAYobvHbHTdXXKmQ1V2TkHAaRzX2E2UBepykpg8KephL",
  "key31": "36uYL4gyhWGcgCQjKsVmiCVbaCk16hwTBj4YXzwVoyj5cgUVBgZbmgnYNX2bErwqeJEDpgRTCX6v1ksAFsnnnDeU",
  "key32": "5HBCK3URPWiyaojWuMa1512GtT6so631ybT5XHFJmEK4S31E6T5gZfJGF4X7568qAo31awUNRUz47ET3BJTnQNTC",
  "key33": "4RsSq3QmM7dHqQDJNtTa9RhhmK1oqtEuBj5taTAmyxAwFh1uAcyQCrd14E3mdpVwymG6mP8wuAFypvn2pSGxnEGq",
  "key34": "3XKUipfyyH4xst4oB7D9YwkPPEoaScnWgcmA4KUHE9dEKk7HFUnMq53TGwyijrbmVVcUZRdMvX2NVEtCnW6kWZUc",
  "key35": "5Jawhy7N8NfW4wqRPJAuvARNd9Hb4xoLQUqSkJs3xS3rHq57xEzxfKGA9YWV8eMBT9KbPbfSVNa5o3Cq7Mh9MdZV",
  "key36": "5HQjqfxpEuHkiB6wzhVvR37iJ58EaqgFnoCFv2CTL356uDv223BC7P7goEzQPhicj18wJ4YbP2V3gPpDdu4WAzLq",
  "key37": "4W9TFwcEht1AoM4JCLZvGNyjBs6xcX1z44wRTsjv8yf9ix6DeuBDABr3t7iUEUPGUd8fE6FPuSosUHAwwHbiRgxd",
  "key38": "4dWqLU88bfyzD2YRrmqskJ1Ln95JcmpTCfAzhzGLqA8tij6dt9R2QEqRNaFmMUSY4Dq2GRWpQKb434SYDamH7yNM",
  "key39": "5rbLAQF26otSJykDWRXVsveakTBiuPW2Fhbr832xarQjAEn19kjR2deaXTiUc8VkCDD4BxQttZd3vA3G2CoGQZNu",
  "key40": "4v153gasBJVEQcUAVmBdC9tLpWHd9ZCsPGkq44NY63zx8edrPsWqBUfinXKpW3yhg8ProrRV6mpitDxfj3gegtth",
  "key41": "72zS9FZMjETDt1c1pTDtDzVBU57pbFP8naucUgdRhVSDHm8YNzWc8LBuhqGFzktsgoQ52fwVRuyuoaHshTWsGYS",
  "key42": "5LA9Vj8wMv4kcSz62A6UAxmJt1yCJJAzGGhKFAw37CMghmtQCnLNYRAw2EWhkWchwxZiBrDiTg531CuT8n3eEtR4",
  "key43": "pNGMkGp9Civ6VEs8zTpVsDbJEf4DDxtBtM9zeVACcRNHszUXeXVprNJLr6XS2QFWH1rDNMHwEyU61SgQx6hPkWE",
  "key44": "dpzupaGrRciyeAeBmg66yEBEwdyDpY48PE1QUPV7iYprVQ2LPVw2eGN7G9xnYfdNrztu1kdcbqDAJachdGXtobK",
  "key45": "4zuHPxbP4G6mNy91yZo1YAV7NrUUuMuyKt6c9XK2f768Ctb5E2eZmHMbfLXszBYZ8u3GLKqK7L2nCRJ2e1Y3enE8",
  "key46": "ZC8CjLByP3Us7CTRRnPfiT5u5tGr4qWZZoCtsLFL36h1JKBhDwSCashEzK8HaVRjHGMZEqTkNx3mo1LLv1mtSke",
  "key47": "2g9eFfANR72XhJ69tP2QxUxGShxYLTHaHENBeib6Tx9o3eNBzf7jYs3NHnbEtnRFyAYecXhuVwxixiM7SetkPh7x",
  "key48": "5YKNGCc6mWbrgo2JWCqAsTYo1jSDgZQXrkVGznCnDZFds19BY9DBGbmVrmTxMfoCsQTzyuTTeu4SxxULw7hrRg5",
  "key49": "5yUxi1VFSEBycr1TwnPBeJ5wmqru5B2DkiEbxnUMEjrbTNXreRvaCE2zzFzVFv4kJhXATT2yStGzuQAoUY5vtuP3"
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
