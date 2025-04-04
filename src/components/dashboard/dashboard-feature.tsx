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
    "kq6eaH5kZXufFCFLm39FhEcx5xjxoYXQWqtpthoxfLo18PHhU6fWXPetsS3A2xuAUYhK94Bz4a2gcYakE56P4wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hWiE6gH4iugbT9gpFomrw9paY9PZXurC8aghSWzGkoypxaZzt5vAGdPF4EnDAtZsgDophFnBN2qGDSboCfBpAKM",
  "key1": "4FP9r9NEqhX9zTemo6DgUEHfBfD9bXGhSaeGiRKzFNJrf7HofMhKg7UVzPvSbSK9zcoSxw3LDYcEsHsaVWNzQfrU",
  "key2": "3WiS7TBHKN5HmZsGGjqAE1g7BqrUWzmMvLWTvyqrrBx9QqM4WPwtWHGsFsxp6WgWEN8EUdo5BWjQ6pVEGjX7Fq9A",
  "key3": "5VE9XrvHV355JAw8jj7ELEb29KtaGsUkoB7iKox9BGM922ZDdaqQFCgF9rwtrQJCmHz3gJBFzW1HcsEuuBC5Gcq6",
  "key4": "4985tMMPvEhNHZCba8Trc2eELkH7LHUKWRyvFyp91VZhCcA5RrQp8aANiVkeTiAAKPg1NTcDxNPfMe5AJuBniZdB",
  "key5": "2MHCcjgfPhePXgcEoAMwdU1PsYarHyW7rEketRgE5goqLv6MZvQ4vv75MXUxpwoi56Eip7cYCsntNcdcqy3zgPEG",
  "key6": "g8PTy8kJViUyrJBSBJP5Xw61LSMAEMwf1c9Y61dd9rwVKcc1uadQZQ2EK9qaorGt7BiAAuK35UwNs5NmMJcb5ec",
  "key7": "4owRNWZTdSVo91E9QkzwRVwa9djsjtYRDxrD7dHjDtZxCpPtXESSZiMTvFY1BLihDkoJShJNmJu3d2U8CVpWiJTC",
  "key8": "2nyhHxTTCgHzpfwiFBoxLABiXzag25efpxLB6TX93AHGiUweYnvTap6mv3prS5zrqKQkD6ELTna35cNYu3h4L8NN",
  "key9": "3uXHzbZEwByAGpoFbTuA8tCyHpxvzn1LCZNHcUGkXGPeSxy3hzpWvHkGPuGnpxd3sdDZZGDPWv4zVZGgdK2j7juT",
  "key10": "3QajxhMEdMzvdWMjiQMdQJgSnt9JEjyoFWRsGLS9JRTMk14e5tEFZNLVjQBCUWM6FvTpffAgCB7d1z7APeYVnz2L",
  "key11": "5CHap75vRC8rTEc7oKZvjpgt6o9egLvJWKoAudoPiC4WQJCpnAo428tC2eJACMSAs7vJhgBmZGSTMXYcXprGpYBA",
  "key12": "4Muxhpt2MHzkti6yvux215z2yL3L9stW7VEvQM4HCbb5Aok3QHhvdAf1Uk8svK3RiZUJtmW8kbjeuiKikWuKjLuH",
  "key13": "5pDyopeMUAET1dNsWsbNwfkKDGdE15Wox7nDMuxaZjtNz9rk79BT8oBC9FMPVC4xb1mtHAh1hQyoeNrRKGh98NvF",
  "key14": "4dBqWuro52xy2Kzwhuo6hfsS28mjwkoPtzX1xeDVTSEfstcNoEoz8PjMtVHtWDf4kyM14PnqmwCjFxtjbCjVw7Th",
  "key15": "3xaC2Tu4RyCQ7tu8jE7WkHKq4MuTobGgREU6GgjRgs3twusBso6Zau2B6e2Yv1zqw2h2R2QkCJR8Fh4WR64PcaQq",
  "key16": "3cw11qoWPhTLRQAvEE8MriR7S1MovmMhREZ5fCu2TQ67vHo8ceDXDtyAPMNZiogVzWHYcXrRV4vqyuMKnquCpcxt",
  "key17": "4zVVp82BawSexqDhhpPqgCovesTbW7LFSjAkKFMGchpGyZ9iAUArSCF98GaJKmWaBS6reFymdf8QkuFeaknRXMj2",
  "key18": "2UGfP8naubc4zmmp3EZ1foj8bK9LwwDGdftQt3AC6R1m24CPStxHWrdnzNAJipPwxiF8EegHUnzJt9rsatmXT2Pg",
  "key19": "5nV6TwC3X2dPhZmoeSbBrkitY2pbpP6UrXrBqNyeP9LzjkXvhZRDKHA2JKHX5HLPUsE5WqnVvqetSqUt5xtJZ8wU",
  "key20": "2WiGshZ8WUFgbFqTxY3mDCgyZ1VRdVYvqo1eueYbKYK8HF25KMqe5Bg6MyTcitvVZzZeR3TZJhBpBjEfgTqyxKuK",
  "key21": "4hxd5XtSYYjMSBKJVnyhhdqFxMu6jq7k1YbxsSMbqFC4zPjFpmiK7AcKDko1Lb7w23CMqWVUXGzviaV4RDjW274W",
  "key22": "2caDpDPpQmfVYwYMTwHY7TYSdgzmrLM7GawsVsLVHzGPZv3oMHK9484n6o5SszhWd21DG2KD7KR4ywR76RHA5zu4",
  "key23": "3FEL3uBdLM2JAmBDm3p7zvzaepgK69vCX16d3CUaWYXWh6DVWc5pYnAJGevMoBU7hCJ7YMbmXvnF5FF47uHhL5wU",
  "key24": "2MmmVP9rMsnkA77aL3S4SR7ZGWfvccajZqsQ2n34hf5R3oMqM93zQ9gRYxEowU4tNsYiChK6turj5SeJrTCqtW3V",
  "key25": "Di58YRMw2Df9tvGKhQShaTZHaTGf3eWo8EtPF2u31Bi3c838AxDeaaEFRd7hexDUDEgQMFi1gGvoB546GmDsSUM",
  "key26": "3tx734BnESTvSNLgeYc4JGf5HP73CZViBqJKnGZrb4yi9tLoNZqL4DDTKcF8KTppzF9sayW5pHg6Z4CdHC3PokKZ",
  "key27": "23Z3ugfpjDELMa7MfwG9ykZ7zh3UcVtHcDfcXEQYuB9C7n5h9UspoZFkyQfPihg1uJUpKh4vbERGvS13UhMtkgmf",
  "key28": "5hFhigGmhtKg7UwuJGDDohhApWqSKpDyHEM8Sy2P2Lq78pdycpbrsspsHiKYTNimiu9HjKb1fB7mPWoS7dda1tBT",
  "key29": "7aQ9uqpxJbgW5VMo9zkHCDRCzKwqf2R8sA9UYJ8tL1KqTWAb7WNe4v5fZ319CJSMaipmtiuxeXQC9R6KvBPejp8",
  "key30": "2wLcsMZcc5fndtm4X9KGiRXdaT2bQa4gD3zy1cGsruMrY6cbJH1agB3fuiMhxrZEbWzk7cT2mfnCewAYn9iZGRwU",
  "key31": "6bX6mAAemo5SFHkroT8g5zx7jYPXXEfNx6wq9w8F1NP8DQhnfjgZ1VL61b44yvfj8v2wBTjkg2znqYx7nmU3pcW",
  "key32": "2Fyxk2cD4zZddeE4EDYpTWpGgYwwUAhqSsx9kkvm8dkwwkG1bGcrhbQKL2nzHtDforVyCYyaNzzns8QWNRDzrBRM"
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
