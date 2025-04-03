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
    "5xkGqepXg1rQFZUDFdYYMiBYgqUdokHvKBB9mVJTwCcngXxrLMmPqL4mT6v1QW2scRqSns6uFJht7EkvtBxBH5QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n2CFCEGFywuB5oPZAzascqZWBcrC3zB5jwU8LcdPBTAarz8fkicSXL3gmwdQStopbcJbxuDCYK4JHNVKXAA1Nfy",
  "key1": "cHorKp796fpuR7yiSs1LFxh2REBSZSHVVMGBJKMaWyETse42uVMwy1KW1LWdjEUp2RXifqxAQFz5mz5oZUYUwCT",
  "key2": "393iTHShpMukRycmhs6Cs8jvBY1fV83G7qejRdVqXTRyEHyzwWRqMdKcHKhicfQqBMFjKtaCfXVhyBxdXfn8YdQ3",
  "key3": "4Y8eZyJc4891kZPqra68iMu15JkaHkXHL5VYrkf7zQVj1DZ9Mq2UBvsqMkEHakvz4k1sAG16PicP1eX8GVje8ALp",
  "key4": "5JYyREzVY4DtCFCqXFQVT9qV6pF4L5b1CmRH3MMLMCkXgGuPpidg3XDTeW2Ej3i2o5tweeREfHEwzBxStzxQCggA",
  "key5": "thoxMXtQoYqLGDKqx8ev4T52fVEQSzN5YQ9y8UYCx3oZTXH4a4JFn8ckLp4tE55V4Ki4Y1uEjtSAw9nCDTvdhs5",
  "key6": "2ZwJ9CfJdwihAwpgreALw33PETncwhEojDZ4tPsZvNk128MmyMT6wdNk7kaBKRyujo38YA4AP2JDH1XArhEbocon",
  "key7": "3BUUfg7W4GowL1dpwaUvRig32P6xNF5ZdtDwSTD7L3We4NDexBFtZ9Z2sY8WakGxFWAiPrHYe171Fo7yLT4B3Mtk",
  "key8": "gqF8zP8nYBgmptxy39qxcr6QuZSZLKEAhyBuhT2DgKshTAy1AVgSr8bwvokLaBFJZpM7nhnSSLmXfk7iUKahHzE",
  "key9": "5yUhTWP9FyCip9SuLwuquRo9LGtc16JLm8Bnt3BxDhaAXcG3SB1aCmzGYWt7Pha3Xo9vbxhWEvyJjLUGcDbqwJuy",
  "key10": "4PG6nS8UEJTNxzmwxAq4GK6ukpkaUJ9wUPJnpCrbWazvfbSLZ1zPTr3z3JCEm2v1zWEFn19yqyeyZjds9gMa2RXN",
  "key11": "29w1LU8Y8uiBBn6YJ1kmcmZjVsUfwc9KjhzYExhM1tWzJWieHiwN92ixrGGmVjBbpYUGeNEDKSyzVT7iy7qZ1kXc",
  "key12": "2dtu5mTWmRPmo96Yi5mFK8A9XoFA5WqGnnHB8iN63x2GP5AwMphqCqSjiXRVFZLjPELYZLXcaqwWWi1DXrmZcZxt",
  "key13": "3uoePcdGctJm9Q4poY9JpGdPLMewgJncH9AhE1diiKxKQHebd3LDqrmtRtuxjr73jKK3empZ2HDaPpwV1dLZ5RfL",
  "key14": "5HG7ZFjNQgCZGNaDYYKP6SPdAE1H6oGYTJJ4tQD31z3hcDVkeo8WjoHj6dzT8UHZdiMb3pioVpboYaEcMynqRZXW",
  "key15": "3bjdLkz46oPhiAEPcmkXsw4jbYuvABEFrJHQ47rhbhMSCwhdQbcKRe5gLiduiGBYgXSUDeuYvZ8wHFWJvDwyiXnh",
  "key16": "2bLSqBgbBhrMHfSvCQ8mgbSvU4Ea7BsqiXV8cutsScJ7RD4NxyqqjfQSg8ohZ6PUfTMghnMDwK4nxpShHcTreoTu",
  "key17": "49p4SKFzERpJg1YNT6RUuRMyg3uj7Q9Vs1cru5Qtz194mLuMZKDchfSDmAcMZsKb6Z8o54NimNebFKB85uuD6R83",
  "key18": "2QhdbhStrmeW3bP7XR2rVxEpxa4zgrDTfizN2oPAKv52AJ1wWda6r3HVmXQMmnq2kxbKWhtrK1SbqdnZe4y7UGVT",
  "key19": "2rYKUQFZLmq7kJJje9nPwUsW8WiovGW7ExMojBqdeV8PKDKHVoZyj9EHfhV6Ct5qnhzf4tPGjeC2GLP5SaWHVibn",
  "key20": "5Y5AiUc1xDrMuRqqho4YY5mugiKaY5MALBYeXuTHp4UakWRKqCReBRLLej1uGg2jrGkZgtveyMe4Nbq6jHwJ5aFM",
  "key21": "wKyimJ6vpfn5tycmpYSoZHgeBpiPy8nPcXBVvPezDDLL6JFe4woCQykJbVNYCx6Dg3eeBKuQzJcqnXj11iXEmoT",
  "key22": "37y89a3GGx9vDvKQmJk5EjXkp17ikWvwDSLumJeafkmQS3hEnMrn1nLRLo33MWzNN9522WbEdSWH6T8Ek1kgeixV",
  "key23": "2jeg7pn6gEKTXLs8ZxYMz7FDR5BPeszD16kiGdkdiEqykCYhoLjkLe1pPf6zoM9xCS41M8vxTwV7hECN1EK6oxyk",
  "key24": "4QrDpoyBVzk2W6z2ftTNg6sac8o81C7f4Up5zeq828cfeL6LLR2Fyb87bkBcti427p9hfAwjGyqQb9Wox2mEfoWP",
  "key25": "3eF1WFxh8b4JVjDjDnBnUkkiwuwJPbPxaRz5FpdfZaMvEFNEps2HFCkXWwiiW79gvUGiZTUd2fmpqPVoRfJUSeX2",
  "key26": "32aRq9SaSNwjfDsvywxBHxSvBqfxi5U4dMJN3e2J5RX9xhdpBJ9wR9Pj81JovhYWYFohcVxY7QtKohoHDM88d1rg",
  "key27": "4W1im1EzqoXF4Qx2KprLuPqYSU6osgUqRcfVYQKo2DBezTsaty65opWeoQr7YoPJpvpfWQMAMWMPwMNpmrmvELhG",
  "key28": "2jyCkVV9DsXwruVGD8C3h6FeeEbLKWJAiXFRC9iprx2afVXUrhkahSHTL2sFY2MGqLpu152rTVmgZEGNTYWe7WCb",
  "key29": "3WgwqQgH4Hf2SC8xizEPMDCx27oCSyUVL2rf79GBLhk6PjtLQULU2NQKmDTz8PjjBFKAq7JJ4gAmyrW5yAa75SfN",
  "key30": "3c5avJg4Gvjv9tjatHksPoK2pnMyJQrXHTt8ipjtYzb6eXXc8ZbYPfcjAkFoZiNJtrXrFg9fo6kF9ADMeF1mMHft",
  "key31": "4JoquiUfpNhr6jK5EVHHnaCY86UXk6LXFvE8pBvp9foE6xobPhL5po9k9VayaQm2b3PhTPeMci4osHsqf7ce84UV",
  "key32": "4bHuxEViYEehu6UxrpVW3Q2mE7LJVEhamiCybexKcC19hNNFZA5oKnR6PGgso2VSFiXUfzrcUSd9mCmcGLrHh9Sw",
  "key33": "4JhyNaEdzhsb2p626YFUEwaZh4nRctkNbUyAwDw8e5SrbdtWgi5wQWqQct7HDSA2HgmF6qqoRLdySxwQY55CyWNq"
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
