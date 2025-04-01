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
    "ufd5FUPWvLfwiqx2M8xC49LVU1D64CfbG927jnGjf5rpEbFFh4n7WvviCMLLPdfNUvPYyLCm4LosdkVmMCZM8MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2wQRB1GvH1sTxmfPwxW44sfEakvoZX7NnteUqak6Fu8FS9oXqGraZ8w965TEgZm1Vf5kbnd2M69jgWVQaYa55B",
  "key1": "5AoTpW7Fbpqhax5NVM7y4CSxyY2ypK4qzCe2erqmo5AAyqju6CvED5V8VQ6EFQ4pjpYumsHLRHvRePJmLTQ28sLx",
  "key2": "5VmoQFV3uCbzJuJDKJgDVCpZRHs2PWK4FXmvnbJ7Sn7DisBvuVfUh8JPXc3FZqu6fbT4ahuX9Knno3j9MvhXkVw6",
  "key3": "3VmSdd8bGaUJbW91EncCbqPT2u75n2NjhgmbY4xp4K2sZfsNgpvmJggJYv5J6F8pysfAwpgiZFpa3ZQy5HMezz8m",
  "key4": "H67Mkpu7ChvyPTuJgnZdvruWADWSVaZ1yPH1Sz5erQBeTDag3vaNCjfyPBY1Sww6kKFNXVVNXmV6wXwE4AnpB5E",
  "key5": "626eaP9dhcj5g2MzJPrVL4eCRMkbgxhnLgQtT9Cb5joJ8DU8kSrrLSc3vE6mWVzEScR5f9dWcaksQRd9KUvLBP7w",
  "key6": "59wy6FY6TAj1VVcow3qd1viL8Mm753jcfDJYJP4orucc8QfJkhy2rPLcJ8cYGco6UZsJYGRYRECcYyPSi9d2U5Jm",
  "key7": "2FcsWv13Pk84uMXoS2Wx7Mk9cMvm7wCn24pZp5g4hYSb66vQjgmqYysNb5ox6ewSNHsPGajAd475qVunCFtDTQWK",
  "key8": "5YHEQNYu9NEs8CMxFFHEbkBDSuvkvgkDBGDGVcoNg62HYdYRo7Hput9FziNW3aykTH9CyGfmsuK1QZqtErrBfps1",
  "key9": "MrgX9yZTNWsF6Pmt3FL2D5nn1KuQgtAAEPhkTMg9C4cbEN3WqdszMsQ1JDDa9QykMjEV7sZNMEu8Nn1ts4Qucek",
  "key10": "45hyHz7zVxezYRMPj6BgGjJhoqgQGVWUgBF43yxpgQL5Both6WJPSrewPmWbkXUbRYFfLto5moVhicc3WVeewWLT",
  "key11": "4eEjaLqKqXSfsSMf6iCigTVuHvVRK1n1tNVEUhmJL5i9Vk51VKcLJFcnuSrVzzRywfuNHyNg32k7HtBC1x5VGuKj",
  "key12": "5A7x4J9nR8LzhNFoFJHQkJ4qpyA6PXbogdJTms8uyXMWELEzKUY4Q5VgtvrNi7pafbZWENHPGR8W77CzAKQCcwqV",
  "key13": "4XL13hsReym2vjAphW7GD22aLY6xGiy5krqAfcfjF9zbhHHkJEcQFKwsyZcbtnMzpwcnwt6qX6ukyHUWAoqtK6Kn",
  "key14": "2G2rfJUsmAdnQwifHqc2N6yd445VCajjqkDqkoCFnMF78jx2An7UwXCpcnPVYUZ7EpFYn8Ty8U2S6vwwk9qAVTnA",
  "key15": "4NBxLxp4Coes7wHsJZD5x34Wt6nWBF9GBvkXLMUmBKR4bPJSThJCDjNjuY4hmbQmFgv7TLcXEqWh8aNadUL1hvUH",
  "key16": "2rszjEMZTmaSpSEw75Cvj2YCqza3pdspRQJb9skTpMzZkgJfi6ZQxVzCfA5dnhb9cxoXzChgNfPGHVNQ8NiDuk1s",
  "key17": "5pRxTcdHNcwr8B3XkA1UU639yWHTNj38Y37PfWtcvhWLn2MjCMaRQt1hbJLN67S4T6qF3PtCPq5RsUaBLPkpbAoL",
  "key18": "4jey1twWngBNgWW2878FvfMw8MNcZUuDqKiyrsMwqyDZQqLBCdnkn1jUrFcGeHptERRLGiJGna6DqVGVtaLGnFdZ",
  "key19": "3G6C3jKgZj9SdWQwpuV4WR2EA6G4dWZpehCTP9zngSpeTBFbpAB7Av3KVaaEa7vMkCiMEn5G9aSrhC3Ywoj2BGHE",
  "key20": "4hnx7GTFis2Q4XqSpHa1idq6JjoLhPbZs2y9bHqLq2yPtuuPjk6c1RPQJsppYMbq9XAq6zWvNYTQ49ewrEpyq4mF",
  "key21": "3eDrXHmzq4ZkgStf6Gbd2M18dRGVJzC1apyMipRQL8XPLGddwXqbE9FDmYmdkRrpJwPEYiAnXRpjT2GUFD5xp2Nm",
  "key22": "CBsrefZvC22nkyLq3eTyYRYQo38fxxnPquNwdHpzQjznXgosbaYEANVmmXsM3Gd524tyuYfvKvRbSpAMW11sPib",
  "key23": "5wtSsy4r4j2RN9ZwdfkW2YA2A2S47bViqQ8R2ujeJKy9agTh2wUiNTyXUnF5f38ThXpBd4zyHcPNQQcZco6CErn",
  "key24": "2ubkumkt76HJZVvCjD5HG7XoKpuYZyMqaMBrwy8kwwSFpwGfJUQFtxBLRxGfW5qPt6YeJfZ2PaW4eaSvKcE5Rd4N",
  "key25": "4PgeKWxJQPtBxnb4jSqpEHzW7Ah5rikmS3xWmcK5iG4aswbbLHMD8mYwL8uBMmGuQKgTtCeCxLhdqHYtirdnrkRQ",
  "key26": "2jYWBMRk7bv5UPg3Fb9SefkmEphmCpjUn9QVMgj1tnHiJjUWFVssXX7tMohuptX1BBJ9ixzdi4TPotkC1YqNbcvn",
  "key27": "5wW6XtiAWTf7QKx7jgP3w2Q7VLe6pU1HSTBavPKLGrXrJ4GJ1SxvG2NQpPjuhTeF11autYDuEX1vXE4EnZrfjrPa",
  "key28": "521gcFsHqvVC3xxxrYLKPrjWRduZEkMY5p8AueaRac9fEqUYUmMWhJS2Ma7tTn14SW5c9HpuoW4tCEEBdmkNh5ky",
  "key29": "4Et8xNvDtDJPedDqeDkYniBDSLWTeLzLXmMKPCSvT7oAA4LDqSnmVyV7z2VhmKdhiXZusdRtSRHQqq6PouHjjLt1",
  "key30": "5MyUpqTLQ3SHnTdANt9VamxHXzTJShMk9C8jJMQmzKj6BcF3uGZ5W5c6nFEUAhZvwm3Z1YFVtV1G6XtyrbRJ2SDm",
  "key31": "nBC3ArqJLneBDwX1Z9NSbJPomsu6q9kjnZjWpRZYwiASxZs7phZGC8HxstgGSvBgCADo1J6s21fzLDgbdoTR9fP",
  "key32": "5yAikQ5rLYtZGHkxxNJzQuV74FgUXAjCPgqQyj58uMUVCuQYmSLRYifyWZZm1iNxVeeB8KVWjC9c7MeJ69AEajis",
  "key33": "5TfAUvwQ1hecUwSAEfnkb97BcgkwVtQTBxooKftiRufXBzRhGvr5RQFL8ZhDSxGx3SaNvyC9H4LJdgQiTKgNyENq",
  "key34": "2vKPbkswq8KMStVyU6nNWSkGT1Em9xjFc7uh9U4zGkDCRamPCNJnADLm4FDJn7bF6dER8JRm2BrCjxnnFzSgBkpK",
  "key35": "5SojtULWdXCixf6ydQngNYJX44fieszHhetuQ5mUrrLjwKhiECrV2wxaqZPkJbP9uAaMQiJVrYLtuDXECjcwFsw9",
  "key36": "57gHGUhU7n8H75BTWEf7E2VrLNRFXqbzNEmBncQDTSU9oxrEgvdE2vaC5EZMBCELDWKJB1KF2F7yhwQAU29yqu43"
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
