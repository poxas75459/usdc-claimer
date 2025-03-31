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
    "NHdmCYQ2TH79MqGkZhHyB63g1QpotPN26wcy3b58qWg3hCip3YMJ5DckrxAy67REvYNgsexyHCLnurGD3JJ6QpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22BmKFZyntdbLixygQTqbG5D1skHTCDaoRHMG4i1vGymianS8JyJGSMTiCxiiUVhUq7EEQxCNrt1fXXC5uPJjbMy",
  "key1": "2jh1KFhw3c5tmHrGDwwWh4yYUCCep8xaMbRJaUNQqB54vZQ5TH7qHo6srYYwitThHJYHDrax38x5Hk6UsDhU2yVw",
  "key2": "2RKwQC7hUWa6s8JJiULuLxgDLf3w3k9HLKPSNApoNxnTT9Mz1ft8D96tmfvuNMae7vvTozekFA7zaHfSPQKr93KS",
  "key3": "4L5neBK1Kf3CLRGDN9nkbfY1aLPszHcWTUdDBfJf6QDnHNs39aDzykBP9AHgemg82f5tioh5GZQqi6dS6AKmtGsK",
  "key4": "4j1tUBVnxFvHvGB8gL9EkRjEQnm4R89RZru7bEdetn9yuHqqAFqi8bGLg8S1t2ufLfq5cDFSdicgsVp2GEJSWNAs",
  "key5": "2qdQ2jAHzQg7BAvMru1VVRfrAwxsAEjJocvrzV7AFy5Bb8BvgRArqZJCNkYxtG11zXoiJ8t2j3BaWQHZ1aRGtCN7",
  "key6": "2NZVTfKfG11dsiicM9hHRf671V3uNMUvQVcChs4qfEnBWE99Z8tu9cK933u6F5u8ffWthGcCXcbxxEgHBmCDhiTW",
  "key7": "4aRXR263NbUpyw7PkALCSnv92qgbnWobvwk2Cdkut73LhnYHqBoH9dZBVGmi1JJtDACgwkDKuuAS5msBaxCbE6CV",
  "key8": "42hU7ffkRqwCHUuaiSZPSfV9Xq28a7E6bWWqc3PYjfNt967ekGiSTABFkKx3eVbpzHYZSG4NPJnrG6HaLWcBonQz",
  "key9": "DZauBaF7WTR7o2iW6u4mLAXwNV6fjWo1qiUuEKR6L3Cnx7LDfU8DPrY75oSH9Srgfs2G9waznCeqZ6GdVPVjB3K",
  "key10": "EWbZTk5YUpSDSEk9TrPv397CUmPDtJQbbMFnX4tMS9UrQvAdb9JxEeBBHaor8xFr7mrKtAxheQpHrG7LXromPw6",
  "key11": "4rLDJUoMze9b6SbnogrchzixoXNQwhDboMs4ooHoocPL1xsW8qbouWtBGZ5eGi5nacNYVBEVc4Db2RsCGoiC36FF",
  "key12": "48Hoxc6bpMDY8gKg2F91bBpnQ18jdfYrAm9rGHNF9oTMAkLfj71NmMkhXyvKb87D7AcPvjdqbUC9czMxzohbhSoT",
  "key13": "2XTRfZibrm7ooLLHCErSF1C8WmVc5BFTcb4kdzqStfqqXmcwo5fdYkb2Fjk5S8yXBpcLBe3q13jhTMZDEAbDQtax",
  "key14": "1QrbNomUQVLm5m1HyPSUcdcXh9QTGzQ5uUFkHwh8zcqYcXkS8kVa8L1tCmeoH2ejraW4PCbbJe5nUbnYT1qE7uv",
  "key15": "3EfrTRYNw2ZRjzkaFbti3jpKtzVMg9t2TQ4qz1Dzi8f9gjM26gRX9emkNZb28YJTQ6K8MPnKhdzLZF56ibEXatfs",
  "key16": "4LStr5gW8fPvJwGz2zS4rQHDXVDQmizYZS3Wbk6Rw39XuazCFYg8DfVkFCopxquGCYGcREZ2dHG5RTBbH246nXJH",
  "key17": "3qFk9Vsvvn2w3CZn2C2VYVmPSRL8KhGCmMjLA9TgghYgoo6UppAsFZA6hXvDLZq3cJC7uEM3Ut63vrWm1AvdLibL",
  "key18": "3SQqDwhMF35agGGemJvYy62XboRmtuu34Bhuk8jT6N7TkyXzRiKm5i6LH9Dnz7HqZAHSE63drH4e7pCdtpF8D8Rb",
  "key19": "4z3uSbmoGpcneMfTA9zCwu28tWmfmn3bNdzh91e4nPupkg8KJ8nM7Ag1WQHSuvSgw3rbTdVwGogeMp6PmVPPc434",
  "key20": "zcQkpFxPMzVoer6xarbfgYF2xi9ac5dafu8qSDDCHFio21Xwt7226d7KEb9vbPKWeD7gcUhCBbRJ2kGSWTnbsJ4",
  "key21": "3MqQTtEsG7VRKT52UKNnh8HqixRBqzsfXfc9VEkiDLn9gAYb6AubLVbWo6dDB7X6XuqaHeo66CYFvMGHXPCuHiS8",
  "key22": "2RETuqey5Dwn92MXfrWN8vCEtcs2k5V81wiHcghtYhLJFuBvUgmFuaEhSLhZmsZq3CmuU6bVtgg7Uy8qEscQBVft",
  "key23": "61hQwALzia7FLNv3oqBWhLs4tQR7KpyPe6f8JEPuZtY72DUgDuhq2ZFFQDeErg7jyhYKywH9JNM8nuC2hueYojam",
  "key24": "3sYr5r9pCTbYfi1UC7rujpvQ7VD3eAya44HxzTjCzzKVTrcGJygxU5hbv279QXwt1RGKu8Z5ChB5GChLXS2fcDsw",
  "key25": "5WgNhPWrnaqLgJWwdWB2aA9RmyP4LNFKp99CrLXYiK7jKHFrNS5iEy8VxYdA2ddUmed4kSCb1yD9m9dse3vifSvk",
  "key26": "3rbfFrUsUCdUrmdxbDjXrzsAJk4zGukAkoY647LHoKi4WJWymcxMMDPgPEiMDXS5facc79qnNWboQskg7aFND4c",
  "key27": "3DsuhPy3WXCCXb7ztJAdjyYBSSyK6agT6iVrYGRovmtZRR2C4vDwq2zyvMRwN7n6yZMqVawMmrL2hc68D2r83Fj7",
  "key28": "4BHxD3Jakzi98SwHUKEd6BQzxCX8p3BDH65kCqSsUYqtGoQ4ycaNcgwtjzKhLDAAx2ryWxk1z2FkC8sKnE69jfEf",
  "key29": "5oogSKq5MrckvjuGrV7ffjngosth7gFt8DhDF1AcUjT1hhgJswryi44qSXczqozLQuWK75VTxEZ8t3n6czW8GMiJ",
  "key30": "3dHzcBXQeVn8sgEnS779yANk1HHXVeLkEN5gZpkHzdhuN8KTWMNHV2Pb4GUVVXTCABnQWhmpU3of25Gh2mfDmjfg",
  "key31": "3Yp2Pz6uvKKjJbHoby7LCtAm7z35HnVasK7KXiwEgsEUgiyLJmFwiVnniawWmo5t9kntQUGa2EemYq2Ry9NkhvCg"
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
