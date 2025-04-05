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
    "24kCsAyVM9JhYyWXExpcydhjYYn2Y2VE1TqfA8kMVb26muwcLmFsPTpKEuhdLwQZUrUByodxYf3HLS6WTr97MLgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ged24k8oypoXJo8SmtBjbHwjWpfxcxQMYk4jsLJFdmredtT9AQsn8btpXAz3BeX2gEs5KkeFvtBKh9Lm9zfnn7k",
  "key1": "3krP1ym52sJaP1hAczetMdLe8AdB8MYCniWqA2vrN5asMTNioFaoLPkusrk8SceaFjfkQt2jgEX3Ba1Ct6f3muuC",
  "key2": "P833po2ZvVsiGeAvX4gzgB4LQQWCYWMXsmLyAr4xS537VPeWEwXn8R3S5U7SJsjG5j936BriDxBzLfcnYWzUzzE",
  "key3": "yHmGKq7ZzmB895jfENYb7PmdGLn1YkDoqHyJm4U83U416XnkVS57fRzqDuMFe8hxiHV8Rx33efpsgiGUbjF3Wbr",
  "key4": "3DnTAM6cN4pd5z7Ce5F38vL74pXyS2iawQQLVGbpM8oHCLMoHbHdzfpGkPqUG2aN6FReK5qD7FPLCVfafrMB2pSF",
  "key5": "DT36iDbCWAfSw8WBDbn3AzrY5zos7fCaAhFspADcbXqPgDrcJPpBmnnuLmAcKbE5vy81MWXuG6rT4xeJUMvbxgy",
  "key6": "2aS3sjBYzThAwPLRg41C11d9iBLdhESzeaauyySgP59VoZ2xEtFLLWJ93anKKxU4iBwujZgtV4jYy739gY3krxab",
  "key7": "fXRNM95i2znoL1P7K8XbwwatwLPQd4d4auU66KmqqUdv3V1R6L1dFJfxdoL5ZNazHJGs4K1SSWZhpwGCfMA94fu",
  "key8": "4LfnB3vBch76o2jADgWactbdZ7uzn7Qx67TXZbrFYiVfWVgdcTMUjpfPKStWoitQA6ATkwMtPFCziJ2XPdtaecEz",
  "key9": "4SbiwDYEjS2z1TcZUM7NR7G63h9AtzJ8ov58Tp13edFGGmuPYzoWNTEaU9Jv1TUrnL2jWhj1TsaUJXhRwmSEh7eh",
  "key10": "4LJabHS7HKQrDDowoiZH1M86khsrRMeY7mSoAr9ERDwqZ5ptthc8pv5q9W3MSmnDXQWGNmvsJjSe8b4yvaRWz6NH",
  "key11": "mGZ5MhMeJHuoZzqLBDg9sfGoJmqBFxWtT5zfBqp6oGEYk6dzhvFieHzmeBMcV4coYVpforfbX6cNu8DHZ3V62EA",
  "key12": "5T2Aj6n7vvmPUp8aDig2xj2Lp4A5QvaEoozGdkAKAaLzAEHaoGx5E2gh2Ns9whFwuDFEBiC9e6gN3JbSZJ6BHYwL",
  "key13": "2FPe3rDWdduQvdhp1mDeD86q2NjS94Ey4nD5rNH3kEhC64aVbvYXVbD1eRqNrk18vV91PSLABhBWEqyYTnj7Ff3H",
  "key14": "4u7AVxDmMbriRX41BdhuZxXNaHNSGVxPxp3mMHA4QD1nsyPtdhZZXKkUvPx1YG71D94moB2JAXm7HvPFPMZuSN6v",
  "key15": "hezUkEfrvLxUooQ4RhYXCGGKytQoaGfEgDRShGjEro2HYZgHi6QMWzpwLEJrHq6gNPPXiFmanqgpe6WNoVkhvSz",
  "key16": "wkZjQ7reJpkPZBUushLQZjEG1rrqzhrxvUutSjiCrisRGQn8BtmUPMRFfdTGuQtMFJ8JmDzQFs2kurupgHffdSJ",
  "key17": "675aJiKZxruwohpZarHrL2d3ZqWJwxNHgVCDWuYzESvWBQgVGZkkcFoZqbS2hJnyqhLiDGZZfA2R8dcJ3hVW6o4N",
  "key18": "3rtaqkRAS9n1kKPJjVGiMeTraLZmQEMuG8wtjhxg7GcwQVYXN9VVJbc5CycN3ADAgvVAawLHFNrXtGGGhRT1CALL",
  "key19": "4aC71xUQtB3ExjiVph3hiYfZWW1iHyiXNJohAj6dcMEkiyvNhLXDSUeG9LwtAyJtx5Ucd2pKtQDQMenL7QFTpgFu",
  "key20": "5cSZWwwPxaVe4SqjFo5iNv6Zc9SZwwiKCZTyoWRHo4ajBN9q1wGCrwGP2MaEqGAHpeCu7xxgxS4ARHmd9r3vgJNF",
  "key21": "2bphoTRWYRhbzGFeKGT8ZizFvBLFe5ckieZEVCBjyPGkkruJriyYDGArSHSoE9GMrSjXujzFUsAZmTmWJ69vPjbV",
  "key22": "4b5XjKM6JbwsRSiKVzBiJmKheHf9yWq77NXuMBea7TUjo4wpP8Z7b93FguKNftKL8SNrgMQaJegwVcoWQQtk4bTQ",
  "key23": "5WM1UPwNZkY5ZM59YR5UTWXdQ2AffEv1pyiZSRVWDdXL1caGRHw79qssKLtLyeDHmcnZ68J8BGjtfiJbnPAPtZVZ",
  "key24": "4CEnBR1FUDZA5z161vQnwE5xEgu54fd2HH7zX5AfZDzqsvuDdNyp1oTHLRQbStJKv8ahnbQhFcU215F2hchuAn3i",
  "key25": "5TdA8cV2dTKTjiMpVjEC8Bdggzf71oDYbAxkUSQw1qvMv7oCbnnHhjkJRoKSAwsiAiD5h1xLvqU9eZrX3osFK9E8",
  "key26": "4raHj2QEU2CbAVNxHahhF59DwgGB6XJVoLouWAzNYXYvGxto8fvp8dzxW3YunGV5NCHFDaFgnnZxnHJ13jAXBiuq",
  "key27": "2sTWhLTf1PrjbARwxrfNJ8D5tR3GqHXWxD2eiFxi9GukwL653yUSxS3ksosU3z5mdUb2jLFGzhxYDNJWdXtGceV7",
  "key28": "5ykUcd5BrPb4UkeVKiuqnghf5sjtKKHdvYCjb3sYorUh5VeCug14AqTYwSM2xWGmzrEezoqmiHMBwRBjWS3wGT2J",
  "key29": "sbfkbpeF9yPmjSKUEktfGnNu5MWkpo78dcizGqTe9jJpL2kt5DcGZQgDZgfgV1TSKhpuPGd55hFfQXM9m1FSeed",
  "key30": "CKhwnWoWAotoxLTsAsZKHd4keNP2BdSMLyvdsdka8pJ7ykURPHr2LPDvKZaEz2wbWNDJgqaz6TcvJvmYxrHevCT",
  "key31": "3JFPw69ew5cvT94Z9PJegS6ahQVjbXUrsZ5nTugCXb72YDS13qEvnWHxhj92iLfALFgbTsA45RMThNjyfpgQsW5t",
  "key32": "63v6kHpf37MGWrHmaDvaAdo2bkMSA5fYCtfuLiYJ7YNxUpm7W2oUfmUBjoc7RnRtfCKcwF3MSUeGC4iMNzYrQDHB",
  "key33": "2z5yfoFMVwEZhJTbJSu232gHar6mg2GPatdAzKQJtNsLbhAyq3P4t9gCLHBWWfaoVXQjgGr18fdiLKjKhyhzyjEU"
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
