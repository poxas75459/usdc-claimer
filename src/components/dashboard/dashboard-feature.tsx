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
    "Z44DfKXVByoqnDbA5H2e8jnM9vfZg6Nhdibww8fZpdwh5NwGUUNXHUCWtANpJFoK4KVYGXNqFYPrREsT8e7UrHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cBWQZKMvtLSiCUWmxU7wVhymH2g5PDtysSB6JV6QhmKXLyW6CsZc53yWVJJWeJ2NPkNqsvNbmX3z25DSJnigot",
  "key1": "3fdkVjRhGHNABc2Dbw9URPyJRVbgXYLDaA2KsSnGUzBqGzUPfNzXajfmnEzeNaUNcBZoUHCMMETwUioAixhsgarK",
  "key2": "2hgYttsaeNUixWFG4pvsZLkEUB5SYM32kYcDJ1XVmEvkqpKjumJwScfxwUy1VZCaonZMg6hoibWBThwL9gFGiMve",
  "key3": "3SvT2kRXvxp4jGkz2Je3JxQEPV131P1H4thYvNuNrckp1GNzhvbM84f6KjCP1iEHeUDRdE3Ya1WPDrEx2BohWxbn",
  "key4": "24E1nT29Tyzjgj5dpqYz5RMN35dS3TZdmDjkfKPGfZUxYjY27mc49XxJeDrL8ja4MhWRU6Z1NM26oFBtvbnRf1mx",
  "key5": "4NijLMPEr5MtyfvSBppm2MEcUGgxLrBoQSpFQLvaXHP7CAcPaSsdiq7MBARqFyP9PQgyDEZKBfy7QWnyA4q8cwAx",
  "key6": "2ia1STDttEdJvLCr46pFEDAp8NLvdjxmJCYwwjCc9jiDxbkhW3UcVowyymkWfSBCGYhBxiS9o22mWxGwkmefz5tH",
  "key7": "5ULR5ZyoGazr3HVNJRQZCX46eWTP6KaUiTPSnps6qi4a1Asm9WWvvSoopLWmwhoV7opQnLZYkF9y9VWvLoLP5dAS",
  "key8": "4Yqs2fecGH1J3nJaSedHFjAfnoYRz4R9sVSTEKCpQEFB2Jn7YVG51daoBVqXtq3WqBXSXgxHuRiYZPAFVswCwLFE",
  "key9": "3PURCx7zsMFDgNuM8s2XoioLFSLR8Ghndrrsh5zNpn9QoRcBR8bRdY8MNj1s2mKMsgnmsHnJUg2DHugXSy5zBnse",
  "key10": "3wMSFjohMxjJSQbT2s8ns5Y3ik81quyupYF95hnwzcVEDPJ2LMpz745C2UUj5TqGkXmwfkrbVpHxAH6LudSvp9ey",
  "key11": "3bnM3dA6kVX5K4c9DUCoASasZzgAKMembk48648aMKPxqwRxD4LTnbHuD4L3nwQBWwTbvk8b6fw8WrQWic1UftSg",
  "key12": "5dF9Nk442JAmYrYdiRvxLk7SnL6a7qAC9C1EAGbEqX72Qa2adiNUtdUeU8NzNrBJYMysF36BGonQDwHBD2MRYV2c",
  "key13": "eCkeGPWkmAVuL1C7cfbZBUefFfp3rmY4BWZej9k4AnTPek2nS5KwkuAoCXqzdeidHTpsMHSJfGB77KeqWCp1T4T",
  "key14": "5wF3szP5we9RHrmwvBqXNKYbLqN694FvWMdXDBrQgysv6t618ggqTtRDfDLtju1zKYuiwV8HAaDdFbpC8brJhNEM",
  "key15": "3pkgZqoiKvH5fUWh7unRwtFZPJS74CepP9jsmpLBk8nmnXfTvp8SCPC3xNeg6TWKVJeikcxXfDPvV9Soez7wUyhk",
  "key16": "yuAjDKoPn2VCe5KmQPA5dZMAnVfPg55S4ALG3dBSLKoM3eT57Hawj3hT4L7mij8YA9ajFeLCAf8uN2aGwSBHAsW",
  "key17": "f6WHahdN3iqsPcYNmVUBy2zxHWM5Wk6vwwGFRo2mU7oFrrb4gq236Kxdm9dF8nc3tWu5E8CpdEBAMNxk3JxGvvD",
  "key18": "tdsofvNty7jtjhntq4A6CPeci2BPwg6ic9MS1UFgwQmty7uDVXt9syP5VM7jJtgLHNki1PW2r6P6okLJBuxj9MX",
  "key19": "5WjhpHM38Lj3Tn89ggsUz1mRbmRbQ76gJX89sz4hTL9Sq5LjkHY6v4kqRZDzSfzXitYn4qpJWKpjLYJxURGuzmUB",
  "key20": "2Ho3zPyRpH7HjxFqiSMeVHaqdaSM55L5N3HYw7DRVUbGoUsZXxhGLWAnt4SARoSnHASXCJUi36CNN691xXiTqePm",
  "key21": "3ZSBuU9aCS6G2Pw8tyVTqERQnFofePvFnBSqysqHL3JbVJMt6ASYbJj4qj41hMU8v2HG8e6bbCF8ZJ1bWox5zbSZ",
  "key22": "4o1a1wEMD7pYYANyLEmc3rgzuwtMfZ8bsSdnXiwyJpnz4xiWq9G5PwkyhCYdW6CQ19QXRTpizsrKJhPDkX8jbTEU",
  "key23": "4au5cWRKD9KV9AdRzLQE4k32QSFQHgHwB9CL5UrTLrewriNQrXM7bzKLRP4p3SjtYDc5AgtwBBwrmUS5zjGvxVT1",
  "key24": "2mYTppz6uK8JCqZYsURGAxfwFy6rpzYmvSAULsZM8Lif959ugCTG5NStUYKS2FYfebchWSojkxnn489yRcmLB24i",
  "key25": "XpzB5t6pUVFLchiDuREgXof1teCJR2Jh2sDPK1aQkS1cCwr7JyXUbykumQQqfw8JQgwRAe1KspJYHB18VkGaeFx",
  "key26": "2rYWprpg7CoAZjSPgXw9q27rmURPin5gSKHLFK3gy7xrMp2so89oXXn8H75badZwsiZXJyHX3Xd5bByP1UittEtV",
  "key27": "3cixkJFTqcZcXTH8te3Mv9VFR8KxiFkym5sXx1LWT7hyrqok9coE8xWk6XCEigsxeaMzU56AbEADmXatyttYrYfM",
  "key28": "3zwy5QwagQnY1JBT7UdRU7ts7NXqa8AXVTsRuvMMBHMFJQA58MbfcdjyLVm9kGGt1jyfn8Jbo8LjDbBBtnx61fVi",
  "key29": "4Gw1Jdi5xaE5AxiVFyyop336oXYdJUtGTqin4wHyj5tPY8bYLgj3uv213bziodaACuiyGU2URrwrmL5tFxH3qiKg",
  "key30": "4bXz2zFDodLYiK8KGFxZ3xsU2XNavD3CGGCXVb2PPiVrJEp7p2grBtpMNkAb7qGdweq66g2pRXR5Ke2XfBUUggst",
  "key31": "49knCDC8Y33eAsbLqoaCBRjKvCAusf3TCM1yASDq84q28hsecHe4BTQDWR8Ag41sfpew4j8xveuKRA2HfzL2Kuij",
  "key32": "3gBRWycyGHZVyuLJMYUCWhosu92bPNQBddcttDayzPeWCvpMUqKWsVi8quANVYqL88hmJ8HVwjgbZjU8GCiFqFmm"
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
