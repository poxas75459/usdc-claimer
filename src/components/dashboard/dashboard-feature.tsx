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
    "4dpZSzz4LPFMqK3YnB2zdiWN8niaAXXisdfEhBgghrnbqU2mEXoYf7C15rjH3ahNANGHGkWU2Uqi74upLGoMkNTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33DtN3fJah2uj5XtY7juHsbhpZxrYVGwVmVjtygc6NBgiWWuYNjMEDeVW7vGcndKvV4QUeNtVixvNPJDPtrg11S",
  "key1": "KZfZLkcvzfVM8MR8V47hFgfravimtW9x2WSPyV6PxVNzp2GKsY6QPvyK4XJbEvLd5xW57zsgtCK5cj1M6hHPATp",
  "key2": "5MCwkr1j9hM1894bcYeQ8nV7i9qXAPqiJsiLx116Es81f2tnueKNDTkkwLBWLwb7eAqbvctdgTfhU3x3DRT5XEh5",
  "key3": "5txb8tuQGyfe4Whh3C28vtbVtHT2FrqyZ96hnMp46tn3s8enXCtNZTiLSJZAMXGXSRoZ7fA44eXCHE6fWATGvY9k",
  "key4": "3134ZdRySvSLhq7RyDqVREKmk4JJSNsQmZExo2r596yukF4Dzg77iZLPjm9mp2MLFzU4bkAbSyJPMa3z4NhMbUFd",
  "key5": "2DosBdE4cuqT7JkBcPFWVVmkbjCDGx6FEVi5xbUairEA2CmX39zcaoRCsJgWSRqq8JGLY1sCyMHKoHyAhvHMSfzD",
  "key6": "3QyEmFPiP2S79rbR8DhwynX4gCPkQ39o7sYiPviwxd4cCpEVjV2JBwQdFzzn6fUCiMuE1tvYNHmrLqkbRDgX1VAW",
  "key7": "4fDJbHpU6vFHWrwjCMMegXQrUwmKA2fXzVprUit1pgmRVtdm7yDp1TfT6NcHUwf5TXRoEhD2apy4fDQiiPGquuPY",
  "key8": "3Gj23QAoD2HAkAniLowi1ekiiRLMFjztm1aLTQpRAZd9WEngy8XdW1th6Qa9BhhCVsMDMJzAeUwWcFFyGg67m24u",
  "key9": "KcSu4h5ikQi7rE2kJeh2SaDeSjCDi5H8f8jKqxffq28Vri3eLfEkGJDNjPDg9hRWGjdPCWpAFySNYqvMhwhhxhp",
  "key10": "Yb145a1H8QFY26MMZf7f5QY59Wx2YGBQugJtVUtzcJmb6avj6yrZ28UNe8LJc9FbdDSutY9MFHp3GkQWA8NgwnG",
  "key11": "2FXjvKRFYxmNspNnpgJQcTj6MHzz4Nn1qmTQyjqeGTsw1ymVvKF1Ks27UdfpGdJLqrQncmHSMffNyAhtsCahTR7J",
  "key12": "5h6DEcKeTk3hbv2G1bbmt5KNvoHpmu6RMmiKkYERWAZAqx52J6J6mPYHUoF4bSZKxMtV3SK5MGnBqeuHNzAjB9pq",
  "key13": "2fGPA31TCUbBAfrHKqJEWmBMiSho65bRmtB23qeaeoBfBWjM2ckJSYKAVqHyrqHhqYeNaQvfVzfMN6ViBC21k4UD",
  "key14": "56UE6bN8W2ZnRnK68R1wvzNdGG8KQFnioqtaX7ktthKjuDEwAapDi2ZEwLACRD4RWSoCoUXGbqeFaBPmHvzUEMbL",
  "key15": "Qry5xW5i79JZngSNZo6cMqtS7v6oh8m6eRHTzriNQ77kDfDg8sPighLZUJgQRq2yWspepbzPbYfEoKHRPvuZPCQ",
  "key16": "3wdyahm8odS9pkwMa4AudGbTGsSFb3FF7sduBFbJur1q7oi2dcAsv2BcDnMxCbVWAR44bjzhRr4B5HW6veaDtFoY",
  "key17": "55XruT3BhZLggL2QwYkGTCKtq18ti8h5WoFHRPC2EzDPxNwXqmX1vhnDiFXSvsPrxE6yRvfkwUGexbPiymNhVqgN",
  "key18": "59isL43BJDZeSHJPGvptw97ySDwDoi8CrYVW8ZWSEferYQNyjcKbwPWkgLdxYsm1iCfKjps6xgzxYpC6Nj5e2TtW",
  "key19": "5zGWSGQr6WRz88dhjQfvckvbo9FcguFVyVqQkJshreHPtjCVNB3HAHofjSwaKgvGFPQXXpd4d4Kjk7cTC8A36Jrr",
  "key20": "4V2siCbkP6VVZ3Jh24q2xVytdu3cNTXecedW7j3i1Ft9QzdhQQD9ga7fwaLwfZLn9sZJ9CJZY1WhmWrjiyARWYAh",
  "key21": "2b6RVMJjn8CGRJisHRxJQ1gAzYke4S7vC3y36XADSg5HeEAmh9hHQK21oys7ZCyTZVEeJicZAWU5Lj6hu4WrCEP1",
  "key22": "67pkZ1QsA3Hs9iB8HcvorrCeoFURH38NecchZSmgc1DCBEUUCWy1Fe1MKPTZVAcPafmVighxDm6XQhjqVTEtsjmA",
  "key23": "4cF8WnpzTvhMm5A7ynVo99AuQbbN17GtusMKrKPRq85YtT467X7d5XxpcQweJ7WmLMcvmmEcXe3u6SQGGs17XMrY",
  "key24": "46XPC4GN94eJecbPewMQimKc7XzS6oTjrsi8ADho4dyafRBCMtTPzDgbdWiozHTEjtVBnBMDoq8eurPL8GdHbhJ1",
  "key25": "3g3v73F3oEYUho5zmzFJeCc8VkUrKWGvy6oD2arxjw9S6wXMXPyqbWf5Fg11y1yqF8Srfsm7ZVmYzotUH2taSemK",
  "key26": "4EmiQcUsr5sYoABPfXvDA5wti7sg56GYYN18Xj9b3dEsTKAaK18QsWFCzRgQbpoV7UynjFnCe8tB2eNh58N5mX6K",
  "key27": "3auPtQZyYHLZcAxNSFTwbun8xThNW3SGvWbKktoYd6BHc36V21jFf1cYjvPYjhg1aLu4XoxzfECLJf9QKXi5zZJt",
  "key28": "7cBSRUdiuD1veNtTaeUDJFgqD1yfhVsfjQjxPPtwoL8vqCE8on5Guv5KcniWJBi9wdFGYXFUB3ZfJz3HQ8p3Dda",
  "key29": "28cqHYwANnKcmoyaJyUtYeczaXAvkuh6BcQMPC2o1dswgqPjY3oGsbtsML2xosd566HRfc3x1W54oLSqXTtWJWEt",
  "key30": "esdjvWhHEdBe9vtNpMdog7EcF9Ka5hPBc88aZFW2i8ksVxDqhTK27hkU11efKzpV3piFdVFSPBLgw3JTPbCmQ36",
  "key31": "Bbvp6gBPFMy8qK6jwkAsNw8UJLEwnboEnBjQPUKuDPpWws2UdoMAefTLzT6ChwoxXFSW6LpFYPVDTyJnYk1yGp5",
  "key32": "2FivjG3UcoMN8JYD25CjCRfgak8QXHjbw64vSe56DF9Zztxzoy37ueakUKPpGUtz61SDdWerE6BmGLvGsTndNfDa",
  "key33": "41Q43iUpdAEEmQfbDtNvNn4xKKMYUw3ubUGPwgeVb5GkEiH3LBhun3icA6P6p4dxX3t5DHRWu5HjUpJj4zAjsh5M",
  "key34": "3y6p4w9gPZq7RfRMfKtRsMraByC6EddgY7Djapy2qvxNjj5CcDrCDNWqWXptd8pqwQmnEopVvSxa2q8j7tuYmcYo",
  "key35": "39zfeVBzh7pBktWaKVV7CR9F9cbmnhb6HMmRnZMviRQy6cB3PAv7Nz91tEzAD8tQpXQSyrX7eNVVR2LCKDeVd8aL",
  "key36": "2kXq9SV3e6tsuvuHdJuXRuo2j77Ld5XHq7eMLZsMzBzQpueVmcNKAQHGCtpoisjDSbyYdmeD4PAzci5TJvFje5QH",
  "key37": "2LiyJRHjgsnQL6gqYJrHCtLKMLRpR1dSm8UDXYV21oMD51nFdjKJAs8Qi5gXckojTqF65cZiJ3fPE3NJrePkEVg2",
  "key38": "5AJqzVFzWr7SZXjeVGrsaNML7GBS4TH8GDvTJRbH684KqWSUxQEh8kP7eWRVxcWVdUzSCLyVyC2JeaDszuYdC5AD",
  "key39": "27Au21SiHRiGN4cjKgkAvXcqr1u81qde963LJ1UVaoBqadbryDEJ2ux9WoqD9QKz5B1NTr2aetEeNr4qCBxbWF6e",
  "key40": "3Bo4fRvCDomXsANxNJQ4wZTFAFqFDVcUiPp9cptNYGZrsZCoiR7ZGcMGn5PpGHYwg6xaMghus2hQ32jK1bq1FL9W",
  "key41": "5AGdqqn2FsMBKuVBvzzrhkZ2F374TsPaj9n4QXTic2QWutB7aAvD7FXk9k5z77N6ABhACrU4tp3NYZuKRBW2hHaT",
  "key42": "4LVkHaA42y1NNkayrhBPkJv4paQKJ2hWRcNYJszj6hKzCtLUcQjg5zLZyhon92efcELiypoJGFrY8vGozbnfnw2v",
  "key43": "MFNe395WCDdcyEGfXDKnoB6A3PqunsNoqQNFfgsD49g6uGKCbxQP4dcDCphHtXRYGDy3a27iZfdsTgLMmAo9XuT",
  "key44": "3oBAfhxNEM2RRa8ZMaafS7fEfcCGqjCmnXn4qRVwAjP1z5JezLAwLoMbfT4uDLJ1Gks59S2sPQrEGG4DnELL6cQT"
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
