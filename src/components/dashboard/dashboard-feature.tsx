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
    "59tB79t2eATVbim25rzycgX7hWokNLWP3hAqXoRTKQ2xgS4KAkghQELWGKawFhcKP6m7kXa6SKuXDS4zbPCF64E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3c2safvRd5haLMgh86JY9LNqmHj3CTBFFZae6by7h8MLsJFM34wgVnCn4SK5bqJJSrAfVqfjefQaJJwgcYJ3xR",
  "key1": "5TARtFQYV4ZXmz9GSnq79mGsAYQLf8cjbxhxcpSM48uRagGLkvHQTYqogMAiQaHcyTttDgoy7JuY7AEgFM4WkakM",
  "key2": "3s8tjaHXNa8ewkhUDibZz3cBWNjzJjcSw1HPSibEfCsBEWQBxFDJYcZTvS2GK1H1PtyjZxQUZNcYAepwt8KAwh6x",
  "key3": "4CojSu56ULco5WJeDFpwCSar6gmsUuW3PWob7jAu8aDByuDUWjfTk8upGzqApwT8dJiVtKdZLU4PdxztkyEkux2n",
  "key4": "5NggKRMN1iDFtgTRaMya9Yrfmu49w5yGGDtnugqrx5p3zFPijSq7vywegfWQQjCpoBX8KgbBHULF8sQ9fBzJevWw",
  "key5": "63G92zNsVC6wNLiQN9V5t4UTxfi6xKH8UQf21qMi9ypt2goSpa4sHUzp5PYSRYKv1w3txbw6X3diEKtmGSu5MyZB",
  "key6": "LD3RE1LLVKq9h7mBwtWTx8Uese5qDHkEY4VhNLbkrs9TKzMVk2ASY3Yhz8aSdSD1SzXEz6waWbPcmuzwKXNyybY",
  "key7": "3vLhJfmy4bdvjdKGqHYVcVKiTMtpN64ZBcApETtfkYyxhHdz7Sk6toin13cJzx2iwyPGcrQhXnNCQ5vmoptGwS6X",
  "key8": "UPnLf6NyXSkF623coP3AvRsdXVTCwDZAHUc4XForcSdG2FcdnJARAS3TUZHYWePLMazPxKQbFpg2QC4cafYgQoJ",
  "key9": "3DrUWC1kfxBWpyviZUNtQcU55Sv7Rujbd94Vn7vFMAYJxGLw9kWDs5kyRXJA3P7oeFfKJtNEBkvdSg9sRFn63T83",
  "key10": "5d5nFFEsM6fqhfHNJZW5ghVd9Gj8CEXQQBTnub7EEfGNRPFZ3byFbZeUNzTJJyD88fd4jnmpZrNLQsdqvdTsd3au",
  "key11": "64LE5vRimoQLdFJNVedMHvzsrdat9CGF9gmM3VjwkVU3pxD81y6J7VPLPq5hWnze5DEt86Xv4bKSrEotFG3rgKD8",
  "key12": "5sdVJTLHhv822UQWiL6SBcYM5zFB4DnohxRoHvjV1rxKEw7bwETQzPg92b2dD2b1UUekPvWNGZZCUBzxtGkKs4rS",
  "key13": "KGcbTjmYofo2Mt4gRBtRRZAqbcD4eqUmYAfWnLrBqihmDVWFux3BmroJQHacnLmK1zCZm6ZbEuc2jnDMKXJMZoZ",
  "key14": "2gJDXwJ8uvYc8kbYd1cmjure8w11xACRfkpx4YnsAuWmJwMTnkWFUehZENEU3T65P8TJjeThohPRFmZLsUdfqgiS",
  "key15": "2W48n7GczoZu9njAjwHCvQ6WTsT47mGsqenE27xv7eop9BYULCkk74wTSrW4JfVaTc4XbKV4d8sofouyyZWMbRee",
  "key16": "5H3CyDLb4EuUvjzfc7tbjYBJp1XEPXJCBDn28cf5PJjZ5YqbViqJpnEinzoLM7qLNtjAWA4QrzpUSuBwW5FiHtLn",
  "key17": "3DPiWQQQQ6r39okDvgKMHPmbpHDnvxpevgxWXHT3YLyMH3PjMX6cVpZybZ2xRCDtW25GsEVhpay1qaRQHMmtYypj",
  "key18": "56qczxsPPDQY2eCZimM8k3FZXVHMjmXUR2f1dAzgDCNfGFSwV5k2n56eF4tq6BN93jGsjkxu6J1q42ka2G3efQU9",
  "key19": "3Zs4q2oQU1DtH1GbLk9xKEBYoagpWGdG3g6ZWBCLHVmpgsNBHePUH3iCwQ2GEd2EeLiDZzrfHUtrJjoe6bAZikFP",
  "key20": "8g1r1ng2h5cmYHTAEAZ4YvVhKNihc2QsPEh46poz1vXtUsbxxAnJpD4k72CEf4Ch9m1yrpMhfU2fF9Vzw4L46nW",
  "key21": "FkYnfVtBfCHWmxPMvtEt18ZN8XGRWsrvdbbgoFztSfF441HuYHNBiRAUMcPDDwmAPr4YXf2GxXYjUP8yvTUaEpS",
  "key22": "vyNj3BcPXsbFyN3izojkMaEFyCGeSJMRPoXsBGWvR9M6bLDZQbPz7mFWoXoRDeMJQptf1RTR42dRLRpsbvR9z8X",
  "key23": "2dF7zc6j8Quf1M4BHAkziqYFw5W6rwv5Sc5FakLv75Bgooy9eZMSz8bAwkNfonmkHYJVgEpXRUX7Fj9sBt9BzvWZ",
  "key24": "4MTnmCqT7WBiDnRRhot28JQo5nKSBWNDaEVoqnpViKGvU1bkkayHctXa1wWxdMPQr7mkerg1P1CsfQmNvQzzUY3L",
  "key25": "2tgmH9VFHbfTFkJAcbVvcNBuJ8BHMZ173Qb1k4HzbCTGcmDvoBFMP4LCMozAdCiesf8oDSenzAHxJUTbUeQ8mYd6",
  "key26": "4SQo4RoqcKbbXNxsnRWYMVY2ZzjKjzCApN6GBb6DK8kk1hb5fB1f5i9ymEcpE8UG7wnMqBDsR4zsMkK2Mgmcj4ik",
  "key27": "45tCVM3Hkr2qDS71Qb39FkMh12jNMMQXvZLbaxQLTmgqr4TQBMqBQzAYCBNZZmumEa7RguenAeHtgUGa25igqJFu",
  "key28": "dzWFbqvgajCas6z49NokJJUmzBTDDhMdwjF3HfUN2d2phWqKxQKfYLj9i9JQs5rnTPy7QqoBgP5oRSMaoXBzKgk",
  "key29": "JYMaC14kELd4v5afpjfeSrJpvcG3S998n3nUwsgfAx22k6mdhFDLikWJe3rqLxbpyceMoZYTonhQxSsf5f854qo",
  "key30": "5pk4XnSwU1HU1awsUaUj2Z7aANifMW4dqTsWSWwyp735pPbkzEB4x1pfpYkjQYvGs4VAJh9D64F3ekLaStStk82G",
  "key31": "2qJ93PavioVHiACtP74DLBWz3hZLbQaapvtjK16pKCetRNrQo9ggSVgW8gsYDcv8M6XzMqc4Ai4G6rE5uWeJKzRS",
  "key32": "3EnPcR4RjW1M8jSZHPSH2YCDYSVotsXPBYTuFhoznjZW8LYXZGmUPzseSj8pbNwyQAvm49xSusSxTPMrm2eH2oaB",
  "key33": "M3YwSLXc9RvXThBUC43sPhLibHjckgqsbaYaVjDmxVUYgxzi2X62CRDm3mBcVDE9tXkdfjwMN5B2DQrkvHWmiwt",
  "key34": "3KjZuJ8oXMTKVvTzYFtybKC85o4zjW1vh925pnNa4TGyE3LK9ZZ5sTSYhbWDKpyTnkkhSTSyTuMw6SHbGMq1okYf",
  "key35": "drTroW8e7QYzPFL3zcb8g8izWghNHw4x15M7jCZdEooEvPzeMMbFw4aaDjpzQFeLinjbv3wem36ESfa8k6WvzJP",
  "key36": "3gX6pLpXQbPEGA4rqNn4uT6So5ktzjRTiTB4AAxLcJpq8FfnyrhVxVd12AuqY5jv8gWrukg5mBH1R4EVZvxwPV7y",
  "key37": "5XaPpQ4HbzEHWwiQz4aobxzFAw3ePQfU8HBQBNrroNmMsSzSVvb2YYrzseWcNnwydQpzKvSRH8yBCZQbuiM83Fis",
  "key38": "4iWpxefBY9RpfP4d6uTWhHJbJ9sXwZH1RbthggZ1gWjm8k3Rgeq9TzxonE9ffhMFu4j6iQnxUNe8NjnR2R9EZjdM",
  "key39": "3tazuncfdFLZivG889PsFhbrJzdtxUoxqiDe411hrRJQCLp11uodShom1nbWaPyzoU5Gc6Yu16Koq15p2ZiHkcji",
  "key40": "22pWa8yUokK8nXDfksFzWX3JjW4hrDtFZqY3Gi19ucFoxbfMmM5VURx9NziB6BCaraYcCpycGfbTtEcYFTWDXWQD",
  "key41": "5hsJCSr2rKcffWUgtqVNmCjuA4ZXE21EUxLb591N9qGL7dVdRXJoXxMAo8Ld4byqF2BZvrh5tZboMkXzQUs4Swm9",
  "key42": "65p8Ax7LcWNbEMN4dhQwHQ6wtFkqhstNVaWNFFtfkayb4TW9uWfy792iguCJmQoyeAd4zPYnPosaQc57hRJPw9sx",
  "key43": "4ZdBoseYqeGFs2MFojtRDnLFxLqbhdoqkBf51Di9vrkTSPqqZoNfWhPHARBYVcZaNwWcJkNH89Z2uc6Sa9zsFpa9",
  "key44": "3vZaTnTJrtoRdjyVX8t39peESBmQP45wjqreKz4bxKDYTr3ThD5iM3Bk9o8P5o8G3Rj2ao71fLMxoQBzfaijJNEM"
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
