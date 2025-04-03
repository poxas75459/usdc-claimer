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
    "2mNTMEJ4CVa61wujQqzmXh33pQ9Lqek7UWnSkfvYAQy6fZv7WvfRLvqDAJRdobR3sd6wmoTajsVyaqQQDyTLi2Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CuSAm2V2wLRNnMyPmLd1JcQmiANjZPNG3sFQUD4gUgDzfKWwZhh9SLS5e2d4ncJT1ZiLPZKgCXPAfVPdujc129F",
  "key1": "dkYQyNkfAiaRkekUZmVYdR9QTEmNViLvHpixBiRMRTXqyrkyZnkgRsDkTsdwk2RJrjS5QvkyUHrSrfVukjrEuFB",
  "key2": "yvUTs1HHibYRUJZCzgQMQkrMeEPp9gpBMSg2J2P8ieo3bLxjuatjRRRtzT98fkzDGpoVpsrXEAxUqyR2tyqtFFJ",
  "key3": "63sN4A1qQP7pL41Aw1URC5ebuRgGpQiW5Ku25cjdQsqxMXStLV7dfWFWh7fkQvyUwKGFKzrFPUMcv3sSyBqhpHGc",
  "key4": "hDsRhmrB49fSFvDA4z1KMurvXNvmHpqWhWBvRzyXMTxrLusJ2me9mHBjub9NoCaPSdkHW46a6z1iQjGupm2jFSA",
  "key5": "3QnuA5umfMTtTwoSzf7E1uymDqDzqjQQXmWm6CM8DPgNjzborFX9NPXYKqTQviCHeigVrn77LA7LXnZMsXZu2LM7",
  "key6": "sdhKW9BWxiTBegPEoSF7cNZz3qTiJKdXvwJ1H4m1feQHaaRZQrqNFcJ6Ts3y8iV95VaHYqerat1fzCfnrpNpx5r",
  "key7": "3kMTdAT3AGJKB9z4bqQGkHvKa65juiHENhXxYCNny8JgDsDtRz11HBnQyU1fm5gSpG7sXDw1Hkw696fAqN4ECofQ",
  "key8": "5stCXxNtRQ1PXZzmPp9fQJ9r2zgsQBqMDigPLeA3ADari9gRFRFJoYjSrY7JgqTEVCasYRoma7tNK7tUuwaZMf5g",
  "key9": "2YMYy3A5N9xo8p6oAtjXpvizY662QoGWzwXbf9xYCXLAhpUxTcAg5wEpW4vyrb6CtLm84ofn7cGZ7CsRLoXJcbzH",
  "key10": "3Vt4Wpf4wnQ4PeXbMmXbApW4J8ZfMTtHm6N7Z3sMuiQUHMG2DnAYgyzFeBneEr8j5ep3oTdUn34bWGj2XRHb7kFh",
  "key11": "5thLLjPK9J79v4RAd7o8UsAL21iTdpx6E5ZXQRVNHDhgn3xV7YbK5FyKpc7bjQcEyMaunE8Tnsn1t8Wrap2WPQNH",
  "key12": "2hiGazhwAKwCvUYwnWy4dCeKiCREHcU67PQradTdmMi6MjBBgWCg3Cr2PVrkMECvKJU13RwSCvXkdp8T7MurViqo",
  "key13": "UmMdTiSJNWbSuC4EuphzKJUnTtW4GkCPQGrKM1TezEgPPLAZCDRaLbSezmKD9fRs59VGgHTNYTPtN8ttjEkdoCa",
  "key14": "4mdJmVfNRcWULLmHnuBXnXYyGkjWJoagikatdE9BRZo3P7MofBH9y2WzBLUy59JCdKbRcphi49419kqda82vLggC",
  "key15": "5KjNY4vYnPPnovLXsUDY3gmJDWWc6P7FeMdtN2WdgDjJdJHBZQ7oFfkGpFrFZpsbNH8wKYHS9sPT3KNbY368RJ4u",
  "key16": "5MUGPvisHpGuq4xSP8LSG4Lrrd3DR42kdaWxT6HfzgiFvd3eUBH8AUnJachgwfBiMNU1ydig7irYqyHSBaQMudKT",
  "key17": "2Hq68KTQBH7ohS1tTSmdNcCA9Q7UxZsUrmhc9ahs27i7Gu3o1P2dXf677tJpc9qiWWpfzVfDdGz9i6UvRtwV4KPS",
  "key18": "2qtAJey9WbP4HCJySdVHG19nq32tKPj9XuMCnc5WutUQDaFaapjqTiJNQd8My8mUDrFhEeU4HJbAJJ6pNx8skyjL",
  "key19": "a9ioMLrpo4edTFQx99rxv6u6t4uKgsXFJz4L44phAgD1H3U5tQxbSQabXZuxJwsv4RSc1A2h7xUA3fzsvyfwhjJ",
  "key20": "3brMH4hpwLxPKEhahHGUhg12vv8D9DPnX9LsvaHkUXRjjjArvTM8BZpSryPjT4ypdpLiyUUvxxWFD5YS7WEYFM1z",
  "key21": "WWUV4ESW5dE5LBJBy3dYZbSe27HxbgzAHTn95WeeqM6RpkUCgqDgDcwFUcbLuSJBxXNbBeERUJqC2ZeoMBX4B8m",
  "key22": "4MStnEFen6W9X33sUbxjBFDQkSnbP4Cytfn92cKRcDbs33dChDtzrDFHdp41Hj7Vm5CpWpzhdovzQQUQRkFkUCVu",
  "key23": "2uDUZdvTBg2qDXgSc9LpX6a22q4nWJMa8NuZE4zf6FERFuf7tpDZpbiYovXKLngJvVonVZkWJESHGGok5vnD8H1Q",
  "key24": "3ajr4yrMo2g4pmk1Bbp7riha975nGk4tVkHnBKcaAQq5q5cg3BRufNrHdmXpoRQJGspYS56BaUtTCDyW4TCT2UBj",
  "key25": "4ptxAUJGmJQRiufz9wWJA72z79yJfVBY1RoXbhaMacnBcs1i844BBiJBsxq8B5mXWU1pZ1eJazX9p7rSsyAxzhb4",
  "key26": "wNT26GWUhZo1pZLXKyvkuNZYJkdptvZt7BQhf9bmWHAdWBnJJng6tEFDDJP6RTqaFjQ2sL8H65EWiDjTgEZ9wwv",
  "key27": "KhyGw1LjKGxfdpNjXo4QXWRrjDSwBtna1FKyicqpDWgFAuKJ12so2ZpZw32UbyYo8eGkXsQFpsFgMaodbstmt8X",
  "key28": "n86iuUfRjkb523fN1jwZYJ44dHh6HQa137nNSFFUzVQM5dRqTa1z6hXQnj6Y6s3ihinACPDtBqS76y7a8wg3Jt9",
  "key29": "91Mhtozpm6mPxzVYHpJxonLHYYCfx3nEQvnifVjJTQpakUaK7xKCWdwxyQDcHSwMPAjob8i3h2Yrhf8D345kYWN",
  "key30": "3FQM6h1bjFFCxp5CUVo6Le8gbs1YQVVXsgwVVJkC2USSP4VPW83jRTsZ7Bjb9Nyf6D515jtPHXC2F2ScWh7e9Dq3",
  "key31": "3EFuyb2r3QQHRdTyjFeipG6TAzbC1qcg1947s2AZEV1jU79aDJapCGYgLFre9CASMUHuqf6v9E3ijyxjT5fDg83Z",
  "key32": "5iLqEzorXStD99rBtmwdzfYSzLFV2ioCSrvM2eT3ioAQ45V9LDkZquX9XzoXequJXJ53X5wBbwAuZXTanU1BjSCH",
  "key33": "FaUCxhuYQXqn3Ko7zsFrKkcR9Tv84opTxs2YLFv5csDoRhNfstPbv7sBuP9NZip9dM1SDvmy71zDcJ9jgnJMEq4"
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
