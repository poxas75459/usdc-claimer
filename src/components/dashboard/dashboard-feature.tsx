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
    "ju4WKw4jKpRgi2eaoCXCJUtBXZcdkiKU3jWNheAKW2AgJ2tjn3uUqptd1xzsRfyJavATkhmbxPdEUMbgGccEPL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eRPYqCk8bVUv51Exgd8fJcZa5Mb95krSfJ2T1p6t6zkovRQmZMn7oC7Z8U97t7o5a16mrAxqTQR3894J77ZvEuA",
  "key1": "62dEaP51STwoykT8QQixqgDKimDqvsvKmWPovdpwVchGwhy8Xt2CJG1g6zBFSs9LubhvLqFcTd1ucdgRr1YqWfVu",
  "key2": "2mh3Z64BLW4rpDz5rkttVNAuiCUFYY7E6YmVnGvHqTSPQnoJS8d5b8993395EWLMLX8CRRj8hvFgdYZAE9BkqLDf",
  "key3": "38hZNRqLxG6YZoL4oqCrkpQEtumBRxeLVyEcAc3trGD8U7VdaRhysiVBG8SyocyyqqvLT4sSbT1NEX3Wjp6Acziz",
  "key4": "4heCL22cAPFYLqxPr4KBZ7mXwPtAHgckdwBxr54N2HfDmY52a3RxXkdRd7oEyBdkkmhCyHTSbjQb33NTGwuDEUBg",
  "key5": "3VY2vz5jPwX2Dv263ntKBrZjqe6zhqvP52UxaAKFJtWuvvs6QJzZzepVtxWXAho6kHkGrbhJUGtFLCYd3No2wT2",
  "key6": "5wp1Q1AebBVtGdMo8fyzJn7Yrw1XDjZZUWVWCKE9Pu6TSqQJn7kntZRGkgGoz47YRcyk9YJG2CNDNLaMaYheZV2j",
  "key7": "QwXKUovjntsLqp6tSytHjHagkHrFHv1HNLm7EtZusxcdsmJDHpSmTjAeJQRGqveiLjc6rrANFJ5ufF7hWgX1Xqb",
  "key8": "5wfKZBcN4EqyFvHYYKF5KZnkCY5vkJFoPgRf1URVQmPKv11CjdPfnbnFzPxJ5o3iXm18v6DBZW46dUeuDznghJci",
  "key9": "3f5JM4hAr8DfHr4kCmHFgRxhnkpwWgCeSWfr5oiANaqU2vFtML3iUzBKCcbwRVrMhbjz5UiUkWCtzWAGM5Hy9mj6",
  "key10": "3BBYqbS8rnXrRHPGg3Y6tCGykqKkuFgBU7Ceb3YQVgqcdpjwCbeEkmpRuLSGBbFVmcUSSH1g6hHBpS76RujCsNcW",
  "key11": "47dtcoQpW1ameYCwJ4r4yKCN7GY9XXBUfuN7Br3tu8FbEDiCvLwGoquin5NK8h2Qqt9W1KbTEkVEiUv3heUX7yh",
  "key12": "HigQbT54LxrC83mE2Rg8ztuqNSCUdABQeDwyMtVTJvG9nwwhsahY7ZzmJDRkDCTwCeADdtzK85pSMrQWFexLveM",
  "key13": "3TGLHk5Vm9jQTXgATHmKanPjWUnDfjw5VhYfHJk4LxoVWQkxgLRarekL3Ud53xDvxvFWdutpM2J3fa8BSrrzKNX9",
  "key14": "4YPxqUN1wox1e3E5USLCggF5PEBcdVV4W4Sw9Cn63b25fn83m7GVrHnTRc1q1UnmJw5AvwhVDf2T2veBCDqq5dqE",
  "key15": "57aLEg8rTBBH26wXu1qWe1h19iFVp2eq9xtfpSmAvm4JkbaYaW6gs1To5FYmLQKzJsfipGV9n2kU2yjqD6zgvm64",
  "key16": "3maErinkuoAh7HgKfvwm8ciM8AwVAPkas8XPxxRgDFF5MidEh5kVtP2ze3HydSgjGfGpt3xYxAGswGy4tfNcuznn",
  "key17": "xJ1T2rf7emC4LhrqbybKmXY6kFpXZuxcfXFXUpCCTbUM4qcMtXXjQzRMYWZChi9vgzrivjv9ZbyKsRLWjdCmy1e",
  "key18": "35s35tuWWCJDMMgAoP9NZA3C1bepnDF6tVaZgT6Nc83juYJcj1gPA9BrUESY9iPVoZheHzJeWYH1hbKb9MLPKxdE",
  "key19": "2NPfaJ4XeviwuavxPKVc3Y3w64RGpDm3vVWnZNDNy4MpHtwNvfChbkkTNkzLcVnS9m8GdidR1fZ8Cf8nJRjWmgib",
  "key20": "M4YmwypssoCHU2tCmpDyP2wFC2PfwnK25jUyrxuhXqS2wA7xGPnuvoR6jneX8UNFnPkk67rfyxQWxRnZCGqLTmH",
  "key21": "4sZHh3vip1LdpHkJ5kBr9xtu9VFVhYg35wb12f4fEMK3fAzcDxuRSeXYF2SaLpqSDb1WxcnxZwC8ubDMoNXXMJnH",
  "key22": "13Qi1NgoDF3dDYAQWL1bJeLwQ4ERzBZxw3wVYub4aegmyRTbk62x2b5R11QGpF89RJ19pCd5M4TCn73mfBPKVVR",
  "key23": "3RopzSWEYB2xYtUgRtaiw6cXZsRXwoZhCeswzHShuKTYG5vTRQEYTGfDzh4PGGMD2gYoLwiEPNKP4B46PZRBYcH9",
  "key24": "2ry1XehPeJJmhcto2oZJDdxyKW3LD61LCeoqcbQfBAz8rG7sXEsL1hdzeUvUenSvxgigZRuftFi4ZzDpz5n1YpYP",
  "key25": "3mPct8kZcnEZeCnyQKewukSVQpKh9QLaG3pyUPHR71yD6fXCcVzb18Vn3pNWGUgdf4P93TqmRsi8nTJVB4Y6Akzp",
  "key26": "2opu3UMP28VWAAHFFbBNPPy51H2Kr9tpQaFqgBzaBFj7ez1X7bYkcZhec5CsvnjYQRHhM73h7qW5kKAhMmw1Tj76",
  "key27": "2M3wYmRjf1qu5NJUWEVxU2MNAV2qB7agnoyxMDJQDqyFtY6KVfwQi2tAvwzQn174d2E57UyQsrrM69bvWPWYn9xB"
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
