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
    "tNx32SwpzazK8vADEGLxNZghyMQ6dnPAJEgMoFnZmXru7e2PL9bXDTgpW2dekGiAxVsBpM558Z8id98RNAeGgm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLZDkDbUpSfgAZga8jVJGK6GfiQBref231dBKqWXxmhfVCLkUUGcdmHSQmop3bzDoTf6C4b1GefcuoR2Dkgvbdz",
  "key1": "Skicx37P9x23U4DwQSr9LD1h7tuYqPHf4Msy2GLzmiHxSxLBKGmWgroLHJRr9S3y89wJ77sWRw1rWcy7uwWAev2",
  "key2": "5kkNGspNvc7WmsCfEMvknnPEniuzdQpE1AaFpfVcDSnmoUrJBQYMYGm7mwFjLGR2g5m2GhSGfBnc8sMUBtNvJ25H",
  "key3": "R4r4tkcNMXbZYAVfvyg6PBbmFCh4h6rUXvM7xU4PQ9PifLBLPqS7BtU23uys4xp1xehxMdQ88RoVuH3iVb6xS2G",
  "key4": "2ZK5zU2WEz2qgyDYsu8WT59w45gDfJGwSpuKyiEvaprjKxa74Zma6vFaaNkgKDwpig1Q1Cmuk1Li7i9VJMTWNNC1",
  "key5": "5vv4oYGFujArP4PBZ8skhduGx4fXTbVKXzemNFHFFi3bFUsv9UM6yPAAgANQZh8AVwZZDK291XCixo6AA9Fg5dq9",
  "key6": "Zgqduay66EPEqNY6dzRjncbw9C4aiYKnuCgEGr2FEouFaNSQk5Gq86F34ok9oNBGx5wKXTyWT3Pm3DHksEJQ9M7",
  "key7": "hRgFyo584k4zgemR7neb3veZspKn1scPtQinjLNs2gMSg5KMTQhhck3oDa1XzA46n7ARRG6Lq2RsWCWMM69CGrf",
  "key8": "2TAsKDXkcmX5vRt2e54vfthdALZcJL1goQjVwKek4dARSSxDNR58GY8317Djt9MPJStPsr7kyCEYzNWnVKcrzoy2",
  "key9": "2WLBn7ZiTqCVT4TbgV7Zyov4KidYVEMYq2xuu5TGoQ4as4WwYnFyjSchTvd8C3rFeNmWTVH4KGboZBybwZoaNnwS",
  "key10": "657uUBDEg8jRg4KqYwypFDP9Bx8LQRFGvZXFKGFB2ao16MRS8ZcnigxSQhsN9KQY2SA3YE39StoxbD6woJNeDh9M",
  "key11": "27HLbGpR99uppwmFuxwCXG8fCXocSrxxjiC4am58qZPUUttXudqafz5NfrAk8d9AUdvMVTtwQ1hLqXdD7RSAivdE",
  "key12": "5vVyvfygemMdwksdX9a74jsCf4p6xVSkS2K4vLfdJdAnytvz8txn7TbXA3a4NxFHSnUb2zp341M9KmoT9FzUMZm2",
  "key13": "4nitwEtQHTd79SQg68xTjceJQTtpXM4JNDSJBuzFd8PNRvFGfVoSY4ebnPvNxtnqaNLuSLuuV5BZabQVvccS1PZa",
  "key14": "3L9LT5gqe6YAPAPceai2gXAyqmqxpr4ViQtRoqBrXkoS4fdTx1X5SN5mhVfLuQoq7PWs2B23EFyjnRvrQM5cBeAM",
  "key15": "4APmm3utCpmxuMJuL2YxuDr3GAEbZc8QEY8jQ5Q1WsciKUxMJ9FY2EnPw2aTwRnmik1vXpQfwA1ZoGNCGiruNs7Z",
  "key16": "2PSkQgfVa5gGkgNRvdaPDTwJFNNBCDtdbTfDtNqXgcTb2DTFMrmtPSJXMukTqsSEprR9UPRpzASV6sL5ozUGWTbj",
  "key17": "4SGKGZn9GsHZaTPatSfrgwRXznxeyBEWfHG74mkHH1Q5cGnSEmQMbXFMy1XCQTE7oi2A82z9anEzRrs321irQdqb",
  "key18": "5B76Y2QusGV9MHPYALwr1FSvF1MiquvWnbVknNoAtgWRMDcEg5kWw6CfpKCp1YVctSwtm2BHhKE7LTrG19KaU9W1",
  "key19": "5obSW4nNErBf5j4AENfk9JNwbBh61TquiVGJ3AAci5keaVdzuwKfUmcNZDUSWayCiCArT8z68vuM3vNpVjx9mPDb",
  "key20": "4shPji8SD9hcutLbFwveZtCUdNa6T7B7X4ArZYVTcCAGFRxGL358YUZ38vCTKKzJwrX2YVscHBRxrDAut7XFiJGm",
  "key21": "4a6dAY2JwASu3EvR64ZyB62fSyr214QxJc6bzuzKvEewhfqZy2tRSV3T7nX5xoFQFVuUmAPHbGrSauncghhAZ69n",
  "key22": "5s45ryXaHpYMV3hwc36NbEu6QpwJ1FMno7o9gP9YE4PKbCGFbUjsqrQW1TBY4XQhq2RCvGf6SDm6BwxYL8L2itpf",
  "key23": "33NB7jUEW9yW8UgeExn6Z3ZEAcrPRSNuqajHXSWbRQKcJBh1uVWxPWp7XAsDwrVZkekaqv73864uUnqV4XAnpBj2",
  "key24": "4jN63aEFfwT2hZE6kyRQmbYh7gL2C1G9xALRdPtHUgnMKxRQqA4pHARFVZmB2v1Ha23MWUi4zBok7ckjKyzz4Ykn",
  "key25": "4GYDbKJso3zdJGr7W5w9ePqo2FgxYhz4GPRevSnBLBhUBxtthcXVnMozy35GCpfdenGjPKsboqoRQi1muBua1NJs"
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
