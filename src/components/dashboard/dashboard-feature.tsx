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
    "5Qjzi9ePFafEE9R35GQeQJbiYPxwA5UY3BDoGqkmhiu7r4uVAtZg4pgmWxFpNXpuzVWcX1TDhJsW2Jj6gcUhFEG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1crCsUTa5taeduBoMhbYYp7zXuCXPgnjfBiEgSw2VD9QPetVf97dwcjr8PJ7J8yxx5AqjfyPSxzGNTN6RsTuuD",
  "key1": "5rpD2XEJ5MCshXKhob1LZePFAfzEa9X8GTHufwz4f6sP2krxztw5WW2HrWoZm6ZeSKBqGFsHW9ZVvmfPdSFjWSgq",
  "key2": "QMBYhwrTTXoAvihoHEp5B1n1NjJLnSKFQ5iHBjWXRdJDWrH3qE93LdQ1NPeHjNNGENSEcJXD52Uq2N6dgWahDjJ",
  "key3": "eLAx33y8sRD8iRwGnFWrVnxYg23DCHZMG1naTtRFeC3CwTiZ91bveGsosMWkfMZZ94UzwMRgBsf9dFn3fSvvqYn",
  "key4": "JMcBXdkubQU8itur4shBRtUe1Mpsb1EMpaQTgk1ha7CMawRZAyud6jAF6TTopWsErDnELPnA2vpnibT88dk8V8j",
  "key5": "5X1ByF66W3eZwby28EPcJt2c2D2LoYM1gYQ7ZytDfJMYeWfcw9GvnxYR2sLLmtyody1cd41reGhhpnddY5FQFrCs",
  "key6": "4Akec54wwbsn9DuLMzGRVfhZy16gm4bWEupLtykUNRwb1C8fb5MDLAtF3b6gMM5YvoWBRiLpg3eduVXiWrV7U3r6",
  "key7": "4LNk28H2ouPwoizxLXEFQvQdK8H6udYdUYTgs1PebBsDULaNFWkFN5PweLvpNJnZjabbPmrz5e92Y83YsXa62RK8",
  "key8": "SvFqoP8hLKiHda67tp9eu9AodCRMM235C46wDsFJp9wgGpjMTeHn2SeED3ZCCX9b3Hr27ybdnn34xHjUjYLHzM4",
  "key9": "42mQ6MMBSURUUTyjtyJHSZugpKzMb4y7MXtSvTsWmLGw7HzQ4cCmKXgQBNSuCPURNPZywa4Fijzuq5iMBwApkGPY",
  "key10": "31ahbmYa9inSFNZT7RS6mmbWrkkoxC5GubQKTv4MTDmfS3QcjQmJGhPAVfWtuWs6n2XJ211986L6av8EjhAEMpM6",
  "key11": "4j7xmmmWEDQo2cg2MDM4Lj5pBCv2Z9tTT2hdUXyLMLJUjjWhK66KvaeFusCNEgMCGh15V4wYddfAMYUcoABUWrsP",
  "key12": "io1pHj6XfU1Qd2CJdHAekgWMwyDhfUGj8DZpSSm7Fjoktod9dvjHJ5CBGK6UYudvvDjwhewKm1hCUEmhuYHQjqY",
  "key13": "3UTFSmcyphfYL5FdieYRUH9wPtpJpjxMe2MbiqpEASGMHP2sYC3D1fjUH8xontZ9tEt2obZ44Y9MBmGwVBdB1dGJ",
  "key14": "3ofwpBSauccPsCziZj7g9AUjtZsfyrnGAhiBB3RWfwmjx3SDv9Pf5NViMwHDiWq7Cj8VNJWHpiPC4qcFgkuskxrA",
  "key15": "4kjboh2JW3mugqo1maD7Bjc1RvT1MyNxKQvYDbvYyRUcmvmP5MWYXSb1jMhUow4eD3FmcpvFGmr88nNprn9kVis8",
  "key16": "4hfRJceWAa8oS62tqxgQSK7MZ658XLuifNCVxJPGpug9meC2wXkFTUhxiaUBHFd6DBrmT7GnyLW7a1mexRuwV4DL",
  "key17": "2qAHzPxdyMGrmSMiTQtKqdL1CFsvUfLZphJ3JkdhtkNm6HpQgQ39MmBdAxSeVckZEYixqmoReo9bNhqtoU9VMrRM",
  "key18": "3gpBiu8FHRYK6Ev9NEhbUpsHkksk1zmeLU9ZJkLnirevtvnM4pGmm1Xu5ERofpnHXb8AgEHYNYj9y8ttKM1BNd18",
  "key19": "3sLCy4hUmT8XUMYnZgyEoUqgnLsSzY4kbs8DoAqtZ6yRLQFYL6gnwbJgeZcJmbZtNjER5jLGcVoGD36vDLnY7U8m",
  "key20": "4YXU1u2n7DJjidY7XZKjbf6hpnLNwxZCLPWjV6QnDLmppYvpHvjCy2myYYiRdBgSSvFf34Q1MsnM5Z61KeiM86FG",
  "key21": "5zN37sfmDvcxkAHRYs2XC6eNizvuCEfU8Vp6w8gwCNLWzCnmRmB5id5XhUkSizNaZ1hU74TfvSzDKBwbkyVEnoaL",
  "key22": "33qL1gbJyCdLVVb72icrsHyfcSZXz8iMFC3MiJfwSGRo1w8jaMkMkWBUYTbXfAyS2enZsr5wiMRdxSeJV7jTKex9",
  "key23": "2hKMKiZG5ba7GC9gMvHFuEE2d4UnpPh2A5DepKCQ8Fa86yE1UgG5F5evq4R9HwKwN4s4YHfj5nkrsZgiRcdrCXzK",
  "key24": "3bQF6vSLnZSF5ah8GhEhPrHAeKcVNkKez5YLvoZs2yAxdMT5wqgK3AvfTEpc49KsMYHRB1UVgQz5VDFZwp8yKwyP",
  "key25": "NpkNhLT6nXHcXsZwDE3vmdMJVNzsiuBKMxiNavHY1pq9gxzxjcdLaHN7FEoyVfQdJMc2WbcSGVxJJ9rdJ39FoNC"
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
