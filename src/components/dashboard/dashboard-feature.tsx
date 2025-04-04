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
    "3wXhdQbgqxYrnJaeCAo7RK92FWWai1LNmKo2FEarremcNLFKKfqZbuDJvVWAKwkJw9UCTTt3aLepBqZ29Q3q9E5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeHZ2mmMR3p26qoi1N9otG5x8SV24b7WK2rRP3j5SoLE7d5qL8jYu1AemFcP7HsMqeSf5HqiUVK9YHAvWnFr82F",
  "key1": "gcntmLSeWpku3Rzyw9ezVnxCeSEJFybGN9UMdeD67Jnrm52cbF5vx3YFvr4yPHYsBoyJsA8rZSzVnMAMNc6vBWm",
  "key2": "LUDtvTX9mTBzTEwFkLqtyuV2ihMQmndosX2ZR2NsC84rF4nyRdtmw4CW12kfgU7ikjnVnFDkRRh3Tr2Jopt6kjT",
  "key3": "4GiaVFVMZdNPsBFT91oWUjtY9q5mGDWpiBjGHtmJs6mD27heyvrDAXCprgD9LzMjmKEY3RPcd96yP4CLnNVYi357",
  "key4": "d3nTzXsJuKkEnR2B8PHLswZzKpjxEe67HaFoC1v9V5Z7EWgnDQZeaJgmBn5Ey4ogd93jDt4XSzwEcpkdCLiZAXU",
  "key5": "4qLobpz6Za6NSLN67xgw9bgPZAfSaHLMLKD2Sr7h6wG2oP9gnVTdcaSUZXjsK8gVS2tgF2RVwtkWZrA9YshYR49S",
  "key6": "4kqzJAuHUMLdYhWR2VhvbKnzUJTupLe6kgG9BLmAAvZnGEG3HhKkdwazqY6Cxed9YLv9HWkchkCxdVMYJpDRL2z7",
  "key7": "4LdaNXdXKwtq2naxBpqCJrBW3evoKk76fsYARMgbDSRqF7cgdntQKEZqeTfNZe3JRt7FTcmV1d1AJfrhDnMCiuhT",
  "key8": "2vAn4kzoXrPLfSLrY8YsJ1XvhnbJkGHRz5ZYvam7S1pv3W2ugMR6bZDsQAdFEafm74HoxVWV8CcennRcE7ZyrTAY",
  "key9": "2KRYyY1FBpSE4JZaJ9MfKzY7MvjasaTc2s1NroCa9bA2U71H8VS4hmSdWv9aq7qd7K5gFJyByxcCGiK7sUWkpSyN",
  "key10": "4Ytqe14DHBGpWpTZPwziond4gxtFbt9W1AwJ85tf6eNuFYr3c4T55zYRFKT346MVUWK3aLjswoNA4SGcivWXdpNT",
  "key11": "4iqcZvB7x3fCeSCbVeJbzeo8csCsnjEgrwutj45iRS5MP2ZgRFsoK9ZaT6vuuT25iypHe4s1w3KTYSG3y78eGQ2b",
  "key12": "2RqfiDaMrheRiNnUunZQJHSdTeubcyexnBy4w8QkYGHi9ohV9jZKrmwWVYuLDsLxR5WWB2QiGBq4792mMqvPFjJb",
  "key13": "2TnXKvRbyYkmk1h4fbpfzPJHbwTaLQeA2FEJUJ44cYcHsfQSjyAawMvTKsPLNNeKYYhUvgX8uRhCxg2rnUgz2Tm2",
  "key14": "2B14DvhM6yx3wiAPhZqCeoGpurSany9CMLxY4gkTCjzZgjPw27sR4pEdm6giybFDgUBP9GQBgBE6bNSj2L4BFS59",
  "key15": "cxWMWSm6mnLFGpCnAs9FXu7EmHcsx5y1QaHgRM4xKoEfuAzGLtodS2R4NYNRTKLtrHmL9h38WQDihjJwHfLN1yn",
  "key16": "48QUuv9Eo29vUizbZTaNDGrDNoW2mgTe93zKymVY6LoPVJ8uVzr7q1KRuGJER9UPjA8LaLLEcpRbBVH1Epx7vvDi",
  "key17": "LvXbo9DivpYuBtoHvsjfgh2Qd5P68NCqYGoGaE8f1rJA6QCpMMe1NzYDMoiSbtr75QBJUpb8sRQgZTq6bJnnusL",
  "key18": "5RovmsBz8ZcR7uHtkyYUL6HAR2dZAqXri97mB5mcMGWdEidMzinQE9KSNBV5xP9VV1p4JKojpV7Kk7fvDYWkdxbT",
  "key19": "5sHwn1tE7NyyjWSnaH9bgHKxkC2kUGVr5AonTWNmfkaG2mDDDhMVsxS57c5hpmQ5JkCSwP1TePJmvv7GCseEaoWi",
  "key20": "2f7Rr1EGj9n1pngRdok61T1BDU2DJaYuayqb2G8TwEqWfkhZcE5BydA5szZuJFevnhh9i2svz9XdvBmTLJetg94g",
  "key21": "1mtPgtqgSzteqPcU1u3MHKiD8ckEnAgH256PbzzYe4xPMKjhg1u2qjQ9hbWVbveNK9xiSj9xrdCxL8EcxBW4WQd",
  "key22": "63JVbEc3M5FZM4rA5XQKchGNSWB9wxsdPmPKrjaSokpE94jjjFYa2LwS7y176axYFTgzoynPKiCBnSd6wP6pVaft",
  "key23": "3swE2tmuL39GhqMQ6xmg8LyRBy9ManXeeWTstfVSocxq56ckHN53sSz4PJSWyunMQ4kK5uMSsC8aYvwhBHM1dVMD",
  "key24": "5MMC8WRirRmR17m9FPdmoJ1RkRu7TqX8b7pCUfA6tLkuNY4Debs89LkeVpCHfjvQuLLJA3zJW4YujcL2uhxAhXpN",
  "key25": "3sG1VDcPqEfi32CJvZqPjh36L6YiHZXz9pvhTFSAxjLyiM9EZnac876SH5inoGTnnrvHRhtfhUn21BFQGnLrNKQB",
  "key26": "4JAYGbTh99e2BhFtVuS1DjzpaHTMG87HwmWXhDfrkBYyJjKJWAJd4S4SEncdmMuMXYJcSBwHgxdvBs5TfKwSQH8e",
  "key27": "62mRpkXeCeJt3uCx8rv9QZdoyne6c3QibgZST1AYcQkQAy8iuPBgtWVphBTfDNzcr6jQnbqnebrjKReHGvg1eHvH",
  "key28": "3Vzs7g9N7DuQLU5ff7MLvkcZj19twAAVZURoZSk8gohWG1HCYs9idVLxpK9wmdf7KtckWhdvgU9a7nUjjVq4zqb1",
  "key29": "3CGhpyGKc5z5cgR8hcrRwLcDi1DabsgyZxh7qCZ8Nt94CWWzEpqopaXyFAwyV3cFrTVRrjgK2RQ1VxFwQKkqBYVF",
  "key30": "4iWZM31Eqbd6ydrGHYd1ERLe1ePxi2EpxrdrDPuCCJYEvYNNgEgHGkYPn1j3uwGYPmtwNtGYfhZ3fE9C1XjJUVcg",
  "key31": "LQfPiVJJtBexmgANAEgbY1YiMxT4tbd6eP4Dbz5zKdBcVA8GqNuDJum65Jb7xqAbP6JnHhq9kchu2ZBANa5brbv",
  "key32": "2yWnnvGA25dxPHcX1KiJ8eK5exucAZJka9LKVmRuU6VSjrAnh1y5HbxAoqrHvR7M5YSFixWVxSbfvFNiRHYJT4g3"
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
