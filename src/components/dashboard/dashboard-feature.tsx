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
    "3d4Aq5nyzKoNhQnL9ytSsCjFGNANCQrWAhmz8GuVvUMjRTntEDxnxpG3ftBmmNRa3uF4jiQ9wXzTZb8QGqovpZrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JmyN89uV2eyNuQgT7Ju4pPjhpFN1UEgh57Syas5qBq8dvrJo8wiMcs5D5KCqUHLSb3MNSPQPMffZq4AtU6M11f",
  "key1": "67ZgAcFYBQ4NmtVG1Te1MPeCmKNL4egzDb7bPm8wEw91ySGK376FnARCDssAjMTqGSRGLUHMtdjyNRMLR74oB2io",
  "key2": "4JXNTwDhBdgUcExJCgmiGFp2QskDCXba9rSwrh7qiz8KbvfoWewuDgqY2DxBSNAF2Gixomw8J3owdJp7FENsNEHJ",
  "key3": "2XEnhGPK7yCfvNrkWi9gDhAbb7fb7v2yJbxhDmGz7C7g822yFk8ZBCjkZCRiZ9jEFDiKGVum2eaof9x6C1Aegysw",
  "key4": "38mD8sAW4gddGN3w1wHY2auta9Q6VM1Jw4ufcLpfnWUQ2bCda7c6hhBSEjyvyAym3ecZJB5rPnt5DycVvgdiecQk",
  "key5": "3QqQWMgvsEkB2QXbDSz9SigJks9BPeyFBVAjmLV4sKZB71UwgbjuqM5dNCqAx57LGk6b3XtiWfUnLbejENx6g6Hf",
  "key6": "H4vqpPCL2bsY32XDu25iG8eF1H7HBAA2vTAiYz3fBd7c3JAFNaHvuBvuSXLjVLEj5otk1faRiZ3DyUg2g654F5f",
  "key7": "xRfwsGJSpMUEDfxjF32zU975QAiBFs8RM9DNd8bnzYU6jk62QDXj3KWJibrEpZ8wZHmXii81vtaMd25FaiNUU2S",
  "key8": "5sbcV36DCJWtGX9uqRweMeaehikhAnnm975xFsbFvQuXz8JQ3pi4XV6tUGxGW4r92KEv4iMYP9yuwK2Zug3tZCev",
  "key9": "2C62GaMhY9babr1TgoG4MHbAeww7uzZvawW7W4HqhP1GJYPnxCzno2ybmNvx82EbLMreFL1xuhgnsbTrE96zwCy4",
  "key10": "5ZbG4HCo2yHJjhsN8AMDoRSjwWtNQ3i7aXMNXcuroV6xNJ1NarWEN1UxuBmMH6m1Lcfg8urKr8K793np6tXiUmq3",
  "key11": "1WCndCzbeXUsmtGxiEybGSSsPiooffNxiUywV543V4hb4RfiadYuEijMLbRvrdZ2bqCohGZcfZ4A3ESDAgmWG2u",
  "key12": "2XH6hY3jUSi29dSCkpi11q9r2c9LAkQZuYghd1a729qgQN5kH7rEZux1eQLRj5vNZBeZck8DptWSkyh8m1rz5Tw6",
  "key13": "8c2sFhMrjaRMWFAp44MXrbFwHGGpfSq4Si8nhmFitxrc3PAupTKdkzEYxXdeV9HBmcNyNyprBopjeeMX3BPQ3zb",
  "key14": "41yXGf2KZz29FyaRdyTrhfVi8bRafddvX42oWpK2xsK7pazZctKrjX8nqLeEcwk58UyYZxBy2vrbdD1ZGL9vD4Ak",
  "key15": "56xS1LL13Wgt8sSghaAf4Kt8QV8rUGkaq9CQYUehQNLTY53yjvyc995Mk3i5oLufeb9PqzgaHnNFUfDrmthdMjbJ",
  "key16": "2tk8tmaNpgY5awyUzkTqAMopumKgMjdxF9D62rnF7cVpkWHBm1HctM86K9Gz32tW8aH4fG5C3gXfbBDyLYVjGuQz",
  "key17": "Z5z1aGX4p6YKdvYTTTntfDXwojeB5J9EZLgA6qSmB2zeEpJwGD6MCvhLHmcFATwRApayQB77MDCDtfoutorZjXV",
  "key18": "UFoBGL5wgVeCQtHeL7Xc4uTmbY4TAxgdfLMcyKBGMCMmWhqtT42LTwDWGJ3tGCM7hXahVMjkPKrmUtYqrunZpge",
  "key19": "h1smmTviUe1sbt3TboWa89Dcf7jjb3zXsQTzgT92X3e8ACAGGLDG6mUTHDdnBf8uUCEtXVfEKsGFob53mfPfFA6",
  "key20": "5nvzghBYckka6UJssv1kuXX5zrYVjGGusGzQU1Z37A3HZuEsrcinSpk9hJWULy5JC5ZHXS7P13RpL26RReU7Pn6u",
  "key21": "4UjFzQdqm5PWuWX41nTJEkW3gkhaQcgoqWPjbbq8rgTpNGMFbcumBZLmJAnwTeMQYtRdPBN3veH6q2tBgLKcSS3S",
  "key22": "5ks1pWBoTiew7V2S1vxdeHbKbKJrCzVv73ENtdzuPKazdDpmrzocC6T3ygR2jwC6zCfdZXuweCisEg43dgs9CvhJ",
  "key23": "3fNuo2TM2SSxmqcZesxNSg6G52qgp5pqSZDRwBpQMEtZZ3Jt7qfxrwz27dHtSyr8LxkFtPoRGXxafBVk6uXzBagy",
  "key24": "2FEfYc92ir5GK3KaBfYFhFmwP2UoxDfnfJ8p8psgTmwTMcJYD97n9zzJCHD1btm5B1Eq7nFUzA8MZKUSEPzpcNvD",
  "key25": "4pWLa6RKjnnVYd8wjoS8vsJyA7NUVFLgc8NU6xrY8pB2wBsnsWGWTYFbg2rGrrqpKXT88k7QV1ryUyRp4a4PiRB9",
  "key26": "hufGoRLv8oa2omXinDgGYuECqeMQW7kbyvRUKQifSzPap2rfFXHS8N51eU9vbpByvbAFyktw3eBWUbvSQHpQ2CR"
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
