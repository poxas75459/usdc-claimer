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
    "2sDzcyeyCJ25naG4eWyV6LxfDt1AhZboJ6XyAJyhbCZVqupFka45nXPsHUbEBXDgZe1GDyduaEqYsNRCHa7Sie6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReT2wQKERKmcqtkjuwAjBGPowbqNZSepF8HT9DhDtaUcCZPWNGfUEvehWHGLN47snV4bJveVqyzfXeuBBcZKzNa",
  "key1": "Kk4fxKM2LRKWLCrKacMpeMxPTNMhp1r29WNd466vruSfJYsuDueEeTohDmgrEPiUmQXeJ9V3MvjFu5m2CRzrevF",
  "key2": "62tWTnVUN6ZuEV94BUT4nA7Yxtwrcqsaau9TDhd9cmCoCGfxZ4hfciycyJMzBpycP6fjgvoYPmjRWKSbnjuPXeGH",
  "key3": "28m1tABjX2DfVq7Tkq4o34Ktpw1oPa4DZk78JVcc9ZkXT8QKYhatCMZuwLo4zQUYkvz8zu7QMaHxsPiUJsghGKTw",
  "key4": "2wAhkTPNoGf7BSZ3KdVhMAAXFCSFTvmxq3dmyM6mSKrR6aDcaForFMyBDbdtSnX5H48eJmHBpmwP5FFDvS3VTLoF",
  "key5": "5npKPJ4mQp1NoxWRcczuPqEB55DRNvFeHkzF7PNEgyxq4GGMEMjbajTfPwh8RsoUFUHktvej7qa5hvywpkWq627J",
  "key6": "577jAHVR1b1hboV9wDgvR1VsptG6KKXyodSetndAfF8883i9Jq7CHxF85h2k6yurveRbj9jHb2UgRMxBGrqVGXpW",
  "key7": "5gHH5xs3iz1d6e4Q1LKtGn2bB42DxXHifAc96GU2vzS6u2f2imez9ETLQcL9wnAEYpiv4xQaQdq6pmXHKD1PHmdM",
  "key8": "3unveJHJZDidKqApzPZpwgC8zR16Md9mbMmygbCmuANgHi8qtJ3dbVPd4NpBqsef8SbsBhS35k2KRfbN9V15HHQY",
  "key9": "5C4jQ5nkAweEjyJiitYKUpSahTgA54s7gFTEYJVpEPM7d75fzAfVWxqtVZRXHEGjL7wzYeFd1L3mmHk6pR5NxW6i",
  "key10": "5bBQ9xpMxTDoPqyL2ihZnWm2mTdUnfrzPMMYYF9aKiinWBXNHtmDj2g2DSKA2LofqwhGd8LhJbQ5DWGJ1Tny5DiH",
  "key11": "4ovqtS6j8MXvbWb31aP6fHXTM86YUSHcwpfwtYrEuutjWBaxbYfvPEdtarUUwZEmAZpZXZRep3GxG9G1UeK4gSab",
  "key12": "zSv9UJg7y2SWrRqJJvAFrAerQSKaUztMvhjhPGuqHEVH1SWAqSmN5imdhJVzgUXvfEZhve5CGE7wA7SNiSpiYx1",
  "key13": "2HEumZ7aeKiJ8gSpS4z94QCvkzRwgxM5tkpKh3eRS7dreYzjLGuHJxXEmU67YKnMcETphEzEzfsTXUX3xcme9Tvz",
  "key14": "2mC1234Jn8M95v4iMy7pEfqeHLPe1WFfPtTPEAGvpyDGxrWcbJJBWupStyTVh5oPtNEokh5QiYqhxcjDPzNMbzWG",
  "key15": "48MBiJJgvdLCSDoaPNNYCNbr89CLrWn6CaAbeoPWwt79QscRszdFDJPt4Pb2sYWTHffK9wtUxi6KF7DYqXAxRVX",
  "key16": "3MMV8oBmsdfScu5PGLmFNDu7SmVcskc9tFivHmYnZPzdGuBrzcn81WWoaot8XQNRchnhJwni1kduFjaxqSNfHGM2",
  "key17": "4gPWKBhezFjzFXZwG25XbG5BgJ1p5QxeATbW9J2icL92uLxyuCVsBT7S3vBDRFqFn7sJMz1SwooWPGAFFKdSHqAu",
  "key18": "3DtvbFQvJgnVMFCeh4uz5gYfqtnFfmjc6fZg9U3bJvsoJhLsyYUDdtj82SynXyX7UpAWMVD2RY6CyegVfcb5CgMM",
  "key19": "5GSWFD4zLHdLJNKHqTDLqJADuS9h3f7BAkdmPavSFopKh3CnAHwQh56Z1xY98b7zxRZPS5KNGJje8JhmqjkH4J8B",
  "key20": "2PU1KFKUfBmWw9i7Tm7FnAuPTrVd6k2ozdxuenY9UNQbbRDDJgNdEWiv8af5kk1kmsdvBFCjogiy6MxySmhv3Rbh",
  "key21": "4PpqDh7qfhXZU3WTTT5EuJNYNnFBs7hd12kGaA9RmFu1KRN5B4v78dyqanoyhdsqDNgub18J1MtZ5aeeZBnCS57d",
  "key22": "5U97uvmWw9TZavXEZgqpUioNVwCaUif3sGBQJxGSTiGFdARHqGQZvr78pUrtqzHkjajVxSpBUMFfYaRRvcxfCLV",
  "key23": "rWPD4r8M7hpxVJMfhrYmd26KgetKBvSjLbXzsqMvgP95dnBVZFYTSfhhzYmY5hhnZAErXdzYDQd4z5PJRUEAohY",
  "key24": "4G7XTfbYxnwmxuVLVEX2b7P71nfN5Uehkbsnf8QgadbmBNZ5nVKT11QsWYRPvwMRJWxd9V3m8gDDMaoarEKz3f5Q",
  "key25": "2xWo4i6gjaebrTAtNFFHn17BFyDZtK62hos3N5dYiGVtvKSBwsHecM2vkrec1vryvU9NTPfWfQ1gZLK6k3NZ2FUj",
  "key26": "5kB7Jy5iLtWQ53sK8Tp5WXzhxsu8NycXwm1KGXW7PmNpfzVS8J7WQ8mHDFSg7KcYjaC2kjSx12sosowJcBzmysBp",
  "key27": "4oRaMSedm9h3G4svKi1h7jBsvTq9PZzv5U8EvZ1dubiUaXVedDAPDopZC6o27BRRRrtu2bn7QE8xH8BufE42W7Ee",
  "key28": "5tT61jFercG2CdowXLYiTS8MyDQjt41S8cj4ffRRSM31CifQskyqpDig9c6ammHj4GSgsSAVMqWnkrpVLmsRf4oa",
  "key29": "5WTZQtBH1nYqSCEfh9y2Xp5bqafp2Wwj4N9RmcdAs7tSJXAW2xKA7hhQKqd4oaiYzoLWyvgR4V1FrCCjwPom7hz5",
  "key30": "39nYUUScnhNNaWhcpCNpyeFy98Wdt3BtSHB12FDsH2t4YwCFHQW6UFa7hPRqDtwxkgHbWr7ManeD6YkBRQNBBsL2",
  "key31": "26bGr8xGTVxcd6W4afegxFUoXDMD4SXGm4GfQ8wCCDFGTUBGceyDKzqgaPk9uVgiYJ6muDoWs3hAkuiLfKKq9xQ6",
  "key32": "5xts79KJa7sdR1hk1aUAPGDiPfqdYWnqsdorBzcP8wyvTtVKarbibyq8CH6ypjDZuraEsBuo4cR8TfGKr8KAkVkw",
  "key33": "2FMVMRj9L24QAYcfXm8qQtP6nV2rRwmE5RvaAdqcAsdkM7g5H2wU9EUmyQtGBeHXqfJnMrBcGcEzYr1uiXUtR4Rg",
  "key34": "4gMxAagc7gYKRATPyiky91ZD7Ue1DSZaij5vKKzziZBWGZcwZoZqCaiLmbPSBChPsri8RDJFQnZ2ULiX9vhZ1Yna",
  "key35": "4zxeYTSkb6R9xCYvKoj8drDTHLZ86VyNeirm7Q3ufPNpgHTUKsT46GBpYLitrdcdZkQ9k39VwCT6LpTuPCa74Bpt",
  "key36": "5bjQHVQCsqDEZnFJWkvFREDPLhp3RckXBuwkAuzCr5n54ZihjrkXULb9aoZsGKfn7QTMC5NS6MM71qX2QwymRVHA",
  "key37": "4vXwSBfxJnkRTkR83TkR7eMUdMGk9Dg3n4U38TT36zrusA2JvwZWcnDMxhjb85RfFKkQHvM4DPp3fdNwWpfQszkj",
  "key38": "4fyayQKPs7vpoAGJXfNCNcNs46N4NXATDVnNwm6u3Hfc8LdcLyjTSVLMpM6vetKUmkiXuX4wFYLDxyHBjdSAvFer"
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
