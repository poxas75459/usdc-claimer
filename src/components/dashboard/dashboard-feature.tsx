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
    "21U6cUy6HDjpqqB1PXhYk7x2ZBCPDe4XVWf68UT7a5dPbE1Yys6RxQ23tPeYLV1trMRTRWEzktHh2Ay1S3KDTRAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ByyGR6rQ41cdQAs697QtUHLta89TdStzkND46tenxirRin3VQ9HLERCLfaANCjFVuvP3bhzSS1iJ6AGnUarasN9",
  "key1": "3evejmcRzh5u96J4KrJxFo221uPHXUeh6oJwP9zvTHUWXbxhLtJCxhUwZ8TgV3LhihxXSkaBMVvr4u2kNiAaRMTP",
  "key2": "3hmuTL64aGK1gG5KD8YePVnk2rCjrwbL8hZbBiMYnCNo9NptfkH8j2faPcUWnnGRUYVF16rQwe58AuUF4p18AXvi",
  "key3": "2Mdn4587Q5TXmFDk71oBqu8nj6bCr577WAKW5YTUKAgkyVBAuZ1ySdRPASPZohUtV5F1iFGNHnUu3HzHgBuY6r55",
  "key4": "4FcFuWDz3rYgcGP1anZBRsfo17yWjHZz2jjX5xsKoYtN7hh8znNVw4dvTuABmEmNCjCxRDvJMEmgSMWvg9KUpYvq",
  "key5": "3yvuqLZy7yNM6qGbHwNT3eWQN8CMYsis3xAvpqDoBfE35dhDhgfdXim2Ga1DJJVui3Tu7HePXRsXd6uQs6vy2kCv",
  "key6": "4AubNRnQ5i6bp55X1UjzyyW1jJpswaXUPD6gJkjk669g3dZqtQ4QRah2DtskHxmLvVhCwbAYENbpMP82X1YqkL26",
  "key7": "3D7BYcpQ8FenCWqyuQ7rMVpjoLZVsFdrNcjRZTfp8F96kVMNo85jXwsVptHNUJqR61ScHADDcTdbfBadNEqs8MKF",
  "key8": "4bFtoCC8oycpcB3AVABiiqYyVhoUMvkVToXDah9vx2Wr83Udrnmr9cUgQAUvs3GdkmkokBdDfFrdTFA2upVi9C3U",
  "key9": "3XCqZfKoBheEZGx3uN4QoMEernk55rMqeSvmLT1HF9WHUaXXPRbsiNkAA2FtAh7vg2HuQwoB7zMjBavLktnNDY2X",
  "key10": "WK5RRBwsgux2A7QytmtnoiA9SZdvnbWVB6a5XhuyHT7t4bdJ2DLeerYQU3zGsnDLVc1nMfR1YaiuaVcHFuHd6kp",
  "key11": "3usTorRkkBWwwiAFDbGftXx134ddEMmD2GpsquSaZQCDikujRVm7qXp8DspNm2gMQJMrYQWCKhXnz1iyB92DmKKe",
  "key12": "hNndtJqgdsP7k4u2jH6bvzmWeqr1kq3gdmdEVKG1pHooacPTFd4b4Fh1KhTZanccoYgwemQSkeJdbHHk82jNEe4",
  "key13": "4yBecp3veuUhH3LzZSAEpnrtFDnw5tF8Y4y4hPitYgd7MMiauDzmwJLidg63tdxqVVPJswKPAuPRb7EK3c53umCi",
  "key14": "4yFueiHKYsGMC2QhivTEqRbqSNAABc4LDA4PAxVeVfLn7srbBKa5aKKhC1t1CRd1Lw6j5Z59QGhxgDV81QjF3xYb",
  "key15": "UmRmK1okLSXAqKdbnWgxHQedT85Yi96fSmbYE5BGLC6smTRruKdyR2qTny643mm1BRyAvxSBz5DD6m877qjKSd7",
  "key16": "4D6RQFv9vtQk9Ab3zMjB2n4NkmJUYw5RGM78pvRmD3jT8kJ89s5shS8tHjkyydwmQhN1WrndnPMWBEMBULTKKqVg",
  "key17": "VbNtgj1jmjDzLDTpbaHuY76vUw227dVpKBYeBAfkA2qmtvCXNzsffyDwjYkzKceeCQjeDwVXUuZYnzmqPLmGHuR",
  "key18": "3t8hLXN9nwKNqeXJMNbkKjy5D9Dg1NgQL5o6VeRDUTQVyUbRjHSjd7FqWcmJGEctNrpCu1v79YAVrwFyp8wP2zEH",
  "key19": "3z3kHve7wfLe5uNPHsy3XTHP7HAg4nqnJWHSyhmMCMKV9mHM4izi88BtX7ttVcqUHbfkMv3o8VPgVXvqu2DBu8Z2",
  "key20": "4TeZbWzts1f8ETCgVUopmT2bkhzyU4S9vGxtKWCsxR77eahsvz6TJp79trNZG6YzY6MTssWkPBc8i8Jtz8d51Rjp",
  "key21": "3ueu848yPjRJJ4sFc2jPFwXSpTstBt12hf9iQne9yuCGtxPCTgy4wWEr8v9oNFsBybBWk6qNz6offZgTkqYYYEyc",
  "key22": "5qoTdD2q28yX7es6YNU8AUKM9dM2NKNcUNGpbFuTwx5cXkUwbvxmRNtBA6xbMdxWDSMZ2w3jGUULPFY1eqyZ8r5N",
  "key23": "oGzm7MoFmbCNV3risGoT35Ej1HtUY19ohDqziPyo9QHBgXhYCCgXedgvPnmY5c3GTg775MsTfzzepPPCcZEgYbA",
  "key24": "5QTcU71dQbZZkzifpBZ8jMJGtDafgdMpRMK3PNyuiGZKkMeU5fyEnjtAUM8cptoXeePgq7Azh63J6S5CrLGecyP9",
  "key25": "2S2AGmyFnvSBJHQ97ZFNBeyznTeTSVUXqPJ9HsUy1QxHYhfahnKEzfYwFqKjz9q8n9YYrVY5UXkvXWZaPjTh6Fxs",
  "key26": "3Zu79Cqz8tmFbMtDNYPx8pUtuPS3n9rre32HZ8hujicZgzoivZh8DeTdUrZj98ETk3Zrv2jPHKcB3XFaBo93btM6",
  "key27": "v7X9JC7AvqeUibMvUtemFfGMzUNBo1245CWKoKP2Y5Bw4f9M1FwSwJxrnqvMiqFpNTnMgK6MrXqX8B5TqYFBU73",
  "key28": "2WVFD1Wd6dMRyJmkGYbPmMVKXC1kBUvTtaH2vBRvBfTU86DjY1pyprFBfsG3js3sgXrQLAbZRVLRHvhSUwkerGkr"
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
