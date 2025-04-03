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
    "5bUFkjAzLxfWMYHdJcryjWcF2Zq4tfkQH1iwe6fbY3t52gTTbypxrgYSVHao9Lps9KompDYGkvjtmDA5b5RZFCAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VziCiichZZeJLTTWgpigmg6ZpnsC6x95dEWPxXdqJmB22S4cTsLgRnnHviRAWc971XcKjQubBPdx8Ca1eHewKM",
  "key1": "4TZDZ38gAZ8xpaLcGxzG6XWRfx1p2t7cJFzZ92dBMN6tcgxY6vDGoMA1LApLWkSc6tSFeJ3VEQNoKisbmnWxeSTh",
  "key2": "5CmXt1nTtVAQqkWqQBtJW8a87pZpfirCCxRXcrPY2ApJMvRRBAmAuNYBaypudJi9cYsRVhVUh1ZNgT68czX3sNmR",
  "key3": "59hEiBFNdUWgzGNTdNHsnRmapxgWLfX8dUGEh7bUBwvkoEWjYpwejkNrumEo6FZkjSqTweeHR9znKCkJVDChd3xp",
  "key4": "5DAUAdFV8AsSsrrXCekkatpGaVrA3VX2rSs243J6GJMb5Ku9zbgaryhW1yW84Gfr1bVb9PQPJgmNENxFiyuBxNPG",
  "key5": "42jpgANEAdoC4Fw8TzPRPCJNy8K6sdprQA1sh8iK77rDkRCCUPmuoMzJYQf4edCWBykvTGPKFmgACtSoX1VMCfBb",
  "key6": "45HG9Vr9JL9r4ijosXeVnjvfhDo4hSouAg4FRxw7TSRTGxa7SPjqeqsaNh2hZhDRMg119z95PA1XDXNEG2idygfB",
  "key7": "2cgiNSFY8Dr4LQuCmU1S4EC2NZrdbqXPtQ6a5KQAZbiZ5v3EVs1vUSQ9ovfgJvWkQBdvS8osVLiqdCzSp1bTJwyg",
  "key8": "emN847kGLY64qW5uQznU1E7EG3e1bqmmZQQxRQ9zRf3o3yTP5RxSEqzX9e6JXryoJ1GJhzMPj4E9tZ1j1dLT9ob",
  "key9": "sFQNbQPJL7RavvgUZZAvdVeJ4xETr9YznqTbxjS6yHkyBRApjCZ8vrkSd8htGwggoqx1aYXktfct8xA7uq3uHPX",
  "key10": "47FhkUsnRytqQrXac8VTGzxgrvnEmNJT4LF6YatkU46tUQEcXSkBLKiGntuC6E7Z9dBRjZ5SdMrfHjnSt7sr4tXy",
  "key11": "32i6uJXFhM3o9YF3KrcTbt1pKAx9cGBkACiWxvzzihfb53h8Jbg8DQDx5WsJeQbjifs2Z6GfepeoYiZ7LjQryHfK",
  "key12": "43E3pAs9QTPyV9u7MCYWvZc1edGCAyF2VHNN9CaeymgpUBteLv8btg7r4FQX63mEPAira943qaVDRadQUXDuwQiF",
  "key13": "2yvytDsbws9krw6tgVihHdtzUMiAMBDD77zepHLTVvvVgqvvHCy6hWJ3W78ga2tPNn6Pwv1HGpSnjD4pAKgAcEf1",
  "key14": "JxD7UFMMQCHeM6nNZpBy2AojKYwz2x3kkbueqgSSpKvctjrvKz3tJKdvi4vnpMKA33JCT9ts8yfuzyKVphYtwxJ",
  "key15": "2ezDRAHkGM1ivC1mmzQKyoy6h5vC2WEcsswKMyHmSj9puA8E56sZcmXrk7WDaeMLWP99RuWwxsm9ttm9zHqK5BUd",
  "key16": "5HmiDB2EJPJr6g37x992SfkLdXMbEboF5XaPDs4eFDnaZ1vXzgFuVTg6Ju7YWYgzw8dcsNM3Msv74i8Rwx4b8wgz",
  "key17": "3VYkramufDJWdZkTxYJC7muMTMZgA2a2fPiEDxhuDBWCErEKFZsxeCUr4DWWiBw4QEnAXcFTjD9z3NbFbbKCraJH",
  "key18": "nvwREMogH88TjhgtfPKVw3BEEf9KYBmaca9VkRN8Kg1FiYaGiXczytgy4e9GJacmaazeuuAFzaLyuQsm1Vz3Han",
  "key19": "3bSq7z5Yx6auZJZFRVaMaU2Y3LnY8V2iv6fhBUk292fCej1hyqJtmkNjxzTAEqApBb7AEGLTcaDLwbuucGqpJobY",
  "key20": "5PYbQUAbAyVz5K4piSzf4vMA1agaqY3cvcvGTshBk6EtUC2WhcFSKRUfXvmPBWc3fvhXMApdM25VV2aRC2d4w2Kj",
  "key21": "5zYLB6B14ZoDeaBAvYsjeBujcw8dnJxnmXJyksGVq6vkCYJ2wTYq3kPC269NowPvbiewSXbYQvA8cYct4SntsDHC",
  "key22": "44RxS5dLwEL4CuxPifyjcBDkX6p2hbehgFLmiyjydKcZPL5bekA1ZznazEGPEBEnQeMhCdKwGJnCBdJKhJi6tee",
  "key23": "2jfHszUDY7QPtDXKFqDd5ALiyzfWf9rNkS3MqthNin3oHLQBYi2SPxLKmXJUwGEBSeUELaYyuahsKMYcAEij5tUp",
  "key24": "2KDDDHpgwNfYxiiARLADur5FZeY3UyBMYh4UxSrYCQ3ha4ypiFiYJHvruCPwDkuYiQWrG9tPdXweCcsqVcrUyb3t",
  "key25": "4AsUEj6HYXTCmJ9KNxWdg1rgDRB3PvnDC1f9nUaJWB7ej2EG62EGapZG5npW6Hwn4KRbxUUWLaBUFrzTa1Xrg85H",
  "key26": "5dsKK4ZpST5e6SiFNM9C4q7FjxgaA3KrHH3HBHoJwaqkdbNop4cuw79ELifCYdgehJeVM4yatuKYqsoBbAeqy41C",
  "key27": "3H3F3GDfy46yM1vS88Bf2Q3UrV3cexA3F9sVSAcjmn5yWAHMStx54njcqY2D1t3LFck9spQwcMFQkz39mBmA4Vc4",
  "key28": "55isTU7HpX7pExFuVbp2paSuU2Rn6oWjGnQGDFvHD3jLvpu4PfEWvwetmecZKSjJvDKMbXex4kShJfBSZZpeLHax",
  "key29": "4zpEmYRmAUhKQ5brew8FYsntHEkKPn7h6mC7XAr8evExQcCQwuma3GqcGSVZtMNaRCDT82faTf1aVQ9GMkofGjYP",
  "key30": "3CuHqNXZnuuKzGijxxg4xwevzat5UheyZYuhG8Y3p2hGgtob4C4XNGzFt9PnbiCJRkLxf3MpTx63aTg8GX48wNSB",
  "key31": "TKxrBKKHBRHNXAceT6jAyKpGsTbRG1r3qwiDHNUHJVQMD3nE2rKm2pZTmG8RgsqCxotNPnDsTbq9v7JN8MEcz8z",
  "key32": "5aM4WtTS33Tm9AFs8GCSuSBWgRwoRaoPyvFQKcGPyKJTK7vXiVsxRgEXwC4VVpnoo4AXGTgkaSBngDmzZsis2f4D",
  "key33": "WCNCtjz7n4ZKxHifXAGFZujJcQnEjmLxYKkSU2jHsVGAdZez2EHuDWu7BGFpEhrg5ikYrZiE1X4jgEz7D8mM4iQ",
  "key34": "5DG9DinjA2gSWaXokLB7sZ3p3pqF919S4jeirAZKkG7m4XfgpuYwtW5iyBRi4uhW5WQ3ve4oYhxrHBtLfHhVPzVk",
  "key35": "5PNL6GvrdxbLAf6aZSq5UXKQZp72WK31Zjq1NPQ5ato7k39RpCDgAbsFDrXTAE2gWUa4W5zhPMwU7fbycM8ChSag"
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
