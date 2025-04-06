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
    "5RbDGqaz2TyxHqQr5KSx7nMSE7NzJGRhBNt1aBYkj6vPwmcCiZX6MPydN7brg413DXqTEMv4E1sVqK8LX5mdWeo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEQnMRmV1xpCQ1kaxJ87Qz9qF42i7ATDCRRxrHEwQe2DBSXvDvsM6z2AUNJSNDTYr7o1fEVaByWLZmYtxHXWLtg",
  "key1": "4vMaN81q8ERZjT7Nr2PQXSQWNUmyB3Z3pF24R2MNQSd68Z2YRA7kV7VZe7rzbRsLN9dSJFGKYTT22pWQtLYveXPL",
  "key2": "U1p1zKM8sytsmm5EKBvaUg2hb8WSKJaaA2knHM7MCi2XH5VRFwu5sVfNzSx5kH9DegAVWu267kWZB6VnkpJxuuv",
  "key3": "4TZ2YexdegSSi1ytAwjnBXb1L94CQ9KSewMuK9eJgWZzBLnLSkUfQoXJacqkiptyMQQ2m5G1U4zFX3oDhZhhYiZM",
  "key4": "4BA9hxmLQYeMF1h9pXjzm1eeqtUgDszrGWUBNTbEFvfpdPExpKGJpSzxpXkRSJ2x9fEVPYWdT2o72rusqKMi78qu",
  "key5": "4Yb3zp94Lo6AVpmwWFdQ3SELiWB87tcNds83x8PvywLm9oyDzMWRwgWmMjwm4mWYDdsbWopebHLBeLZFb8SL6PZe",
  "key6": "5X4TgsESqFHB4cEfSY9THemw18hethyZjg7sm1EV1fFuPp99h5odhBc41WVqog7c6FP6Coo5SgJ6qREaB6LgrKZb",
  "key7": "3WMwsPKwGmzGikAFqYrdTEj41MTyuto6TnopquCGPQ9qb6En8gWkt986fAgm3PerFpWLNqCooAVrGj1TSJwM3xcG",
  "key8": "2BZSfBU2uvPzHk8dgoXqhjVGmsjWXBQsjs9nrHXPBNedKqSuGnvyX1E5FSNeCSjaubetLV18oQbeRcedt42RUSXd",
  "key9": "BFjc8ujmJGQXdFHyPk5bzGkBmUtLwioxDypgsTbEPgdM2VTsc4t9wCJJ11VPAoZ2PwbMZU3riBcT5UCMAv7XKcF",
  "key10": "61guBgerpZVZ9Y8rUtFDvqTUufrucXKHjABHs7AxKQCFd3iQaDpgXJKNPHugsEcJ79tCV7Trp5z3rLfGrbAxHhRc",
  "key11": "4ALzmLXpeYQKBRgwnS3ddd5wUf6fDByGzFsTpvPuXYmjWPVyR6PFr5JvToSf445mcNU4kM4UDaKbSBoXERDYe7qN",
  "key12": "5empmA1iJ4Vwsi1M1GnfqAGv6Ekx36rTtjUyL4cNssSuHWDVAtNHkcSFzsmg2c5ebPt5zMFC9CUENCiEmVwBM2hU",
  "key13": "5Uhd3jk5qjVNJZphv6dBg6fYLvXjMy6Ag64uEfScyQDudW16A14bke6PS192wpEEsy4xQumwFFqTrBpecQRotaZt",
  "key14": "pFAJQAm3rmhc4xY5z19A7sqCxSMX3j82e4jmZRff2qdKD6ozQyaSBiBxSY5yg9LLG7Dkk4h4b7zck69D6BRfFDp",
  "key15": "2zLhVsEJDCkjFv45R3i5oUTkkMMVXHDBPHnwksvZTm1683oDVZ7h3WSyc8ppEkYrz1AnmpxjhB2iknQR3wDD4fyU",
  "key16": "4ZvTU3F1ALePHe9imy2E94JiGdcmWszMyULdXHgyJfYn9FrFB6FZGRnzofDEbeF96G9wjs8E3KGhDiVpdDQFzmSC",
  "key17": "2yh4dyY7wueK94g1eaS8Thfux7RyH4H21NaidJd91ZCtRt4JeNwpaXue2ob8qiLQEkkEZyBgn2FbPqCazXATkG6s",
  "key18": "448A4WqbreySRjaye1BP5RcQ6AQGJ4ZAsNhnGexWxksMNRgi5xsm1rTnJphsoQuiDkCTAtSxw4fEctAskmbZScCx",
  "key19": "4Z2gkKGK86S4PLnzYnYsrHhLYghK5q2CUeonpy27bfN7DykYBderyASCoBNzbrcuRChBEFm9bhf2HHkRJciUayWu",
  "key20": "353fYfm5RnkntY1MFSSV8gpV49m3ZApeG3dQ8gbswTWAKuPnssYzA6dQsHbAsSZuZEbQADh37pevd2bf9Y1D6Xzd",
  "key21": "49xEo6RzFzp2kgdsSbmnUukFH7KmZWA66orTQVFYWmCd6oigm4726nTK4NrNBEYFFWuS2xB8Ys8cHeBvLByM7WMW",
  "key22": "5EsQwK7GtJ5VmzH8LCzKwxCCBoMbaQ89LTvH85gRnRb12csYjVmd6et4fjeuAx12azopCMPEadHdEMrt98wdJXN6",
  "key23": "2wydv8jQLkaMa1qFEfsVeviVQXdDYzV8sTxxCkQX4TSSgJ6NDHnAM2o1tmKxW4EqSavm4ZgckFdGkDmdzKHEisU8",
  "key24": "2wzGdSGhsjGJHvesFbh42fDN6DfvLzm2saWPxC7utJc8BikwhNmTCK9q562V6BGuTQwCL7v8QVzY61RUSs3r7HyT",
  "key25": "5brVVBTuAc9tCEpJgPVSgYeuCQDUyP1MDN5fbFskDKNn7Zw2RAFVfd8sPvWrcu6rgex6yrM3kXf2WfucgKy4SrLn"
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
