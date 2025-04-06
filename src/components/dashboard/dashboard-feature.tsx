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
    "2i7W13Eq7ewERgeTobeHdeF2aVyZY4ot18EawBeWiAxeCQxgYKPrKe2Hix3v4iWX4FkjghJ4mfym1RtK2WFzaeUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuC1TXQvMpMKhfuoQW74RSTLuM2h1wc3NDB2R1WDQMxwVk871zudWFdj9hXR1vbD5jmpHzSy7PMHUZ1Bcejxp1t",
  "key1": "3zsZF5oNyBo9e8tUrfRihneEwPq4D5oG9qbctyatnZixcsSCdbh3GtzxTMaJKXzoxBf2e72kgX76Cp8inQF18hgj",
  "key2": "4EEcRYCgSTY9k8D85gV5k7PxzZ1AcbkwHyiNzgYE7uN6ReAHmbVMj3o3uNMFdGky9Nm4kaxD94aDizxV9RUmup15",
  "key3": "2g5wM6zEXZHZdUxcJYgbZN8EexiPMVbqiFdQGhPZjxKEditmkyGvrci5NmhZDefB4Tmi9nbf4TgYgGbqAHuSc5Fh",
  "key4": "2ZZVVdf1iEiGkFc7mzPCwsVAUbhHM8Y54WF7TKybah9BwZaKYW3Cf6QBUdzKmvuVapaaqAunhvE4Ap6cQMW7E6ph",
  "key5": "3HGZMPx9Nvs63eJHVqVigbcHHEoGJLD8KxoJWsigXSuTHWgA696Kjphx7mTDwN6KSS6c9eo8KtVbratQoEH6QZ9k",
  "key6": "3SGUpj4pobk1oVygJa8rTk5BGWCZkGdqbZEMT8hz7j1sGwJjdSYBmPUhKUm9DDENySNDuvRZvu3vg8Cudwh5mJyR",
  "key7": "3HoUUq2ESNp4fo73JjJmmpCfGykP9ZWRWXLLxFZufxKYCpCJ4Es1BbLE7xkSy4bBVWYoDueYsj12ukff2PjYMHib",
  "key8": "5LQwcizuVpXWPvqGupx5ac3hTAiw9kKuhtZyTPDjnsfF5CoXWVa7nYoewMPL5f76YAbxs4wLwTyohAoiLs4wmsx2",
  "key9": "4x441j2kqUfxyuSdRbF7HeF5iG8mnLXndkJ7WsTRW6bLreBcg7KGAj6cJmrwep4swjrMx94Ev9iENWKWDtCWwEzj",
  "key10": "2GjKDmPaUqbJZn9kKGfUoy9gXqi8B1weEnQTXGmosRjNRRjnwaottadRUmfgDoDxUjd1C7d8ajhYk1c7AvDtDxKK",
  "key11": "264xPeTTnU2i1gDN4d7QLvM13U1xgLQ9F42nwR4JxaSp4XwxH9Bi4Y8mpyuWSvYH1L3pC1L8uD7nBzFnFGXzEihb",
  "key12": "rzqVEggYYkgj41Fw3KC6VHanfoDV15vAxyQwd2kzZkKRQ8KCTE9S3u4xXB9KWrd7oVbcSHrwKvR4S6jYcU9h6hp",
  "key13": "4yciA2hpbUCRWJAZVHJY91XjAtPDurxRD9MGpAqcaKLNtAT6fkKA1RQ5biAr9acMw9Kj4vwMJnhWv84TRLbhDDhb",
  "key14": "58EvKC8vFmw7r9anHniN5wLzwHZ5Dp5wVYs92DkmVxk9ntXvzSq5J2fgs9QZPEHyHYvQKt61xEqM4RwEkTuAd7CY",
  "key15": "54PJPxcWfb8fChUfkv1496icN6GkVYthHs9WoS9mNL9n6HtvVLxWfptVEGnFPJrKce9D7EhD3d81MSzwpPVdFq1S",
  "key16": "2kZW7Uk7BL4Lvm1Kj2JvuVkZymLWvZzUDqvab6jPdHouiFLUYdvTyZZS1LpBu5rEtLNaKqcCW7C13LsiSYromG2W",
  "key17": "3uvgvh6oMj99J3MYygTqqLBparEeK4cXs398zzpkobxmtpLitnvUUkpfcBzhbZtn4VYoe4s4MhgLiN7wo4kP9Eqp",
  "key18": "Ka4kAy7teMrKaRqdFgMaKUWC5saMyyDsMHjvqSZybhTFSi5ZGsj4ikJqmK8fuSr5goZL5PEeazNUzUGdsJs36KH",
  "key19": "427Sk18Tr6pR8bZwgVYcjbjQzLW7wR6yrvSgd5SYhicNGDXjr35ooNsGu1QiP1HUoKYUUMVvQTwcDtRBTCMiRHf8",
  "key20": "31EWZ3UaiYnJMJCdXztkeiVbECcTEf359Ww16SJ4rwXPWpeogrmgU1n3dTHahr7tKFHP8HLn8m3oNhp6ReRiUSSF",
  "key21": "35NZzSiRV262APZ8segeEDiiikNarSz9RF9yDNrPb5oyVTFSayUEzG6aFdjA5sNEKcnoY3P7i9EZ2uQutD2cyvJ3",
  "key22": "krebR6rBLSTh13kHGPzj571ZdEsvkRMNbePx3XSWi2SjR5RMS9qGJuvrwCUfEAMaAWzdAhT3Hm21NpC5nunackJ",
  "key23": "4RHZ5g6ZAg8E3AXkQLGwptLvvauaNQhHH2Dw82UG68TiU49vQgqvKRZbkczKn6Zozs784FLgpcQvLv6BHRdgCYRb",
  "key24": "5HyApWx4eGX3HkmwXxyJn1fzHcsn8MVkD9KujkjRdbLPAwQwb3Ag82iNqkf3Lehcxbo3HdC4gCsEXfH5gMZ9vuYE",
  "key25": "2B6KZnZJegjTg2WnQFMfWe6H1Trn1k6xDdcrQtqjvSGPsiZ8kCtHs6Tc8x81BZA9YPtUHUnUyu1m5nizyLefw1tg",
  "key26": "3CA6sRLsPDUtshfrMakq1YCREgVrZpmNKcnBW8Maf5yjQp1HizLvFvDGyAMoiEmoNFXpTWh5411CDKPFRwrRbk78",
  "key27": "3LghaJvmUPF3iH13BbsmiFwP8KmaXhzf6xfCKNUFGAVfJuMkYktfgAneDm7wgWM7XBsZu62h8rvyp16k4icUTby6",
  "key28": "5svJ18hdp9XYsUvUiqfmRkLJnz3fD7o9uwXiRzYTCHeHv4CXtt8DbEFWnhVbPhm1FBJf2VHt21Y9iXj11PqbmsWa",
  "key29": "dw1gCd41qyvyJ7Xhisz5KG7xHPvSgPTZrVXKTZMLv2AkDpBLncr2kuXWkZnw6nVF1UoGXEtveEUaHgwr3ja7kns",
  "key30": "547dViKoEaTRPnkN1ipDegLCXdVFPQJxAFXyy3g9NLZsLTXk5ihWUooeVXwSa1pTMpRdFFL2xbDBZGrLniyEfPXE"
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
