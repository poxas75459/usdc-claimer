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
    "5FX375sN5mZ2nTLEEThKX3Crd7VqxS69eShRRyBsjFfT3mBudgGwbTFui7fDd9HeKJF4bFsoVVVdvy3MNXTLjLzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoAdgoEeyEu56vaKiznPebv6ELy9WpeuFcMw6VxegEP9coA3KaKWXX8hiJon9DrRt8bjZAK6Z4CNkJkodPdVqk6",
  "key1": "2mzsTvMCqkvCFnJ5woGaDMubexXKDTmAifoz5shqyWZA6ZmP9jjUyRzeW5eqquKrG3Mnf7jyroFTtQ7veBbZ9yfo",
  "key2": "1h7Dh4iti9R3cWCsWP6gZQ8XpnKh53mxcCgpVJL79drcMn9jX9eKfYqoKtrw1KGxP4iP1MotarZMMVAhY18HbXC",
  "key3": "HdCRoeyw2Cw2F8QFvJ1APCNJW98KRH5tTwi2MgwvtYe7m9GSyrXUnDDFyktg8LFdjysh7zyaMPaGF78zZBW617n",
  "key4": "2hF6DJyyr5BiHYrqvqvXebPHo4YPicNxNvvyo2c1qi1dQWVq5xY2ZsZEyDuERzaWzNcoGPtv6b1L5t5gxVUSdfvm",
  "key5": "3755E6spMJ8P5JWyeSN2CajSZxpQiPNQh7mcrgf1TizDxbEdm8XusAnVqb8WTesm6QwtiQP8QE8jxqZkqqwRn83e",
  "key6": "YKyApyfskpRDUbAZok9cxuC9MYbSK7PXC4vsakXCBz9LJpxznQ7zUJtYNdKN88sVUuNnogDb3GHfekTMPWg7z49",
  "key7": "41aBdytiKLs9srb2LHcG3xZkxhwhDR55WWxMVePd7VGKiLzM3Eb2VDg8uGDvQK4Uc2rMsWvDZzPaHqzmSmzTgQcv",
  "key8": "5Mchjh2P25hGYYF59Y1bXMg3eowyhpZrKmGr9DWpuyMBwQ3QFu33J9xRjTYrc5EHagRPjG5ERWPSdtYfgtYi3Wif",
  "key9": "8QFd8WmBMr8AN4gkQTzWzrQhYr3jwoC9ybtcuyh2sAZfUEYjV6AaPw2BdPY5pgCocaYhQzTDvhVbAcMaahqH5dW",
  "key10": "5XU2iTLEA2KoJcBHZ87sDyTRNy2UwXCLZDBz2GZueXxuqeeYmP8c8jb866v1sEsMbcZu1m4dht3sZWeVn6tqmWeE",
  "key11": "4dymjGF25LmdQV9Zj4GHCBLFtrXYswcJzVmw3WfskHVdLJH3meqNC4bQBnHEyh5Xugq2139FiTbwCZLgQcdcV7hQ",
  "key12": "pHVZmUUahHkYSxztmWE88trBdC3RP8f4YGgWfYosxgPpjQtk4aL4EpKmRDNbkP8VSrPcZvhBfpC4fes6sp1My9t",
  "key13": "5vW33JX9KFUCnY6TuGyQdbJNU6b4HH4JLW79rbWkBFzm6Y2Nzr2uU9Nps1i5ctPsYG1jFB4xu74ZSgDeYBAFYDi7",
  "key14": "24fCbGexyZU3xsYrjBLMCrSDvRpih5GjCq5FjMRUPYUoySACpBmmnFytX7Z9wp9z6GMEzyLXD9xWFD7mByA5YqAN",
  "key15": "4TuyQjT4yMxsWBW3f8zZdh2cDsSLCvN7wEcgp4BKtxBWDkJmrAe7HWf7XcuMnohQtsTc4uRzqmGTt3hPv7NirUx9",
  "key16": "5ygcpbw4ysfoikyHnxuefwkU5D3ZrkBysL58NUJPAXnurdh3PUcsfJS1WfGJDeejisuEdJXWzSEreagheTnLUYqR",
  "key17": "1ufPieFDouoXr4SQSQYRA6CiVvU9nTd84HneQeYQEBU3A3ptirCo8QXLAAAkG8J1xSEhLHsU4HZQFtHge826JDs",
  "key18": "58nSV646oHjg7KohtQwLJLPu8Tyi7sfn5iJKZ1E7VxUCdLKKGZ1EAPYeXwYBJr31QFF8Xc3yvPAsdNSJomXRe2hX",
  "key19": "4cV1TXJcinR1S93bPguuiNu2Urhi89PeDX3sAD9QdjMGA9AqXfW7d5UTCEffVR3trV3duapZSMoqJfCGmxzZvhaK",
  "key20": "5nYLtfmNPtjSqT6C1zERaUYc9X5NDcXzw9QWeTqtx2kiEttKNsMwZRX5D7Am8yAu2EW1eZbLE7EjKjXmrKyXrn5j",
  "key21": "z1pPb4N2aS3z9yPByQsPKMn4aWYFG4YmM3uQ2M1htcAvfrB3wLFhPe7Kvn597TVwS3z2AFvq2oKw8stwsvHt9Bx",
  "key22": "5ayuUufZW8AGawsrQPxZMscQZuJiMSthtFTrkDfCiCiU1B7Wib588ar3uwHszcaLX9LStxJsf4S5M7tezVWptC2H",
  "key23": "5YjsnyMLnu1C2P3Q3kmhiqCXrox4WCdwUiWEXYiEQBwWH7tbk9ArS5TB9Cmt6Jt2jAUQYbAkqcxn2AH73dJJMa7Z",
  "key24": "2Hn64eStUnsNiF43QQuqoyovsfvwQ1gxFjDYdiUakhD6B7dDtDTitkafdzX1Pa69NHeZJsvQFVsKWscbZ5v1JeN7",
  "key25": "5xfqTG9ecr1WwSRsj4vrnj9WLnmiWcQEcbwbcHnFb7TzHfZ6e1nef8yPyaD12PJorcrYwo9r42BmdhmVDWVdTvAN",
  "key26": "4rfkbur4TqShTfmhWrKfoh3Tk4kgVfPFjfzsk3xCz9KJPRvs6z4bqSYSMaXRH9jRHLB5nvU8tDJ9wYJq8xSG5kuU",
  "key27": "38maW6K6nJQMP8M69JzrE2FrpqLdEx2egr3bsdhNtgUisBRzCSCMZ97PqoTLxYs1MmHDunQWFbSo4XRpi7Qhm5Cr",
  "key28": "412WnXJzwWtK9eRNMjqXwVvaa6xt8opKC35kHSWKfboXwMv43f6AL2ogg2x9cuQC8cjxQ8Y46CdhfcZnxEhEki8w",
  "key29": "5LvLhqAq1SFaA8ZwrEzgciGLnBcDVHGK6JiibmX9Xt3GXdadmYarc2b8nCjnS7ADepgkkUHeAWdrJXxkcrYYc76C",
  "key30": "49WjeQ6JMwhvds2PVSeJCaPo9uecdkNDD8rNDB4F1Sxx2omSa9kM8P61mehMfVdVdhw3L3SU33avsVDTyVPo8NeY",
  "key31": "616pbnvYdAqsFfsKE6qo8f88hifvkWvWKo2oaRxmpKhrHuQLcLuYe2BPfAXuNCq4qCwUapweyx4NA5zTeP2EUz6T",
  "key32": "62j4L3MRmVPyHBFM1a9TchHvs8tKMijThdPgJiNB81n7BRa71tc9Z4agyP1AZyQ6NZvQycZXCaQeEbnhPChUJpUr",
  "key33": "4n2jNXVoRCCkvZBV5UDDsA1ZP5ZC2R9zvGs3p2hA81otuiYVXkktyY6WsWp2WkAgGogR9PB5D2ckwJuSu2YV3FVi",
  "key34": "5SA2UsLsApHhbx9bjbdTgV77vAW7Dk4hjkPvuDqvmkb969KzxPfCwJsxnn5fDmfSN3xFzxAziCb6n56rMwEdWueC"
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
