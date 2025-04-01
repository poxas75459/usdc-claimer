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
    "NB2gWm1kiNhkmkawm1BRjVR439gocUYQuhTwASiqg8DQ4mw46Hswn6es5hyrtUrzrSjarSMLWFVLNYxA58WMRkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Rki2bPQPpsAjgfMzUTVnnYfdS8rQFEynfAgXFuGpYRECBC52GQwz3J7cipUYzEMYh6xiekZzuRp58mVEdGADHy",
  "key1": "459WAjrtqG4ZCdjBAJ3epxHwHKDdGf3Ya7ndyNADQVVLkjS9E6txXA7exCKTy2VExcUjnvMH7MacWPZRPi7xUwq6",
  "key2": "3jCRMHDkMZyBL25nBXcV9p1HVvADEmufeYNywfWBCvNhLzxQV9fAmhjKYKQY2gxECW8Uo3SdxJiYXBVahBXazP75",
  "key3": "4Xka6uLsLm5eZBubib19B3LutEFcWGKZZs5HqPb9kP5PgaWswJTJBNA9x8Ahwq6Vn9UvWXdm75SGKR3mB2yomUmp",
  "key4": "6rvyJZjYYm5kL1nYxSWsy7k4vq7rbAhCF5pfy1MDzmYhzbVTcWZUWYe4Cj6cxM8fkLrRJVerfrv2ixFUPne5J6K",
  "key5": "5x2Tf9QefuHAFRjKRFwEMr7J5iNJw3o1RQcUGb3ZdskdfQE6ndvDyr8D7pmd1UBvzVrNvpugsAtteaqfDEvhiNN2",
  "key6": "5dBLFazizth5zjCvbXArK8ytLdyAYANaEUqdpi1nWXqv7JaQq5fgmftABjVzENvYCpQwpH6Z1Yo4yP6vMqb6U3Mq",
  "key7": "28aPnBS6a5JgAjJb4NGCjkVuKBJLap4kgGuW9ktYi1Ko5qMn2HpWc9WCeTqCY47RmyRX4xKWrYv7j6HkZWAFY2aq",
  "key8": "4G82Ctnxrtwt5zy74nVDPaVTbLwoqwjVe7Cg6a3GnWAxpmiovAW1M7tUeWs1pUZkKAFn55G3TPeFprVsMvG93fxZ",
  "key9": "39aqeMQKgXCZJbCHNVTjjwFq2GNRgyoptVJRM6wMRHpSy5QwvtNZ7JRqsh2DteiapQPP9BJy5SoBUZsWNZfUCZkV",
  "key10": "5u6QJx3JAWUZi7jtZcaqkwvMHPWTT3FHF3SdbRLuLqXfBfSC59RtdYboF2GhUzwxuiMJKCPNqwTe6xhxTBcHhfTW",
  "key11": "PXkY5tAM6HhLXb5FEAazpMHBEtPycDBWsFXp3NRFE8psQUUvwm8QCuT78qeBbWZFMxC4j4BVk8UpH5ZxnMdduDS",
  "key12": "4guTjp53MKH97zTkeKb8brC47JpH6wPqgKFpeFu8ABPzga4Fy3ibRNfDsb1ngYX3j9QHKYNdjYtPApmCZtjYoNv8",
  "key13": "5Tg4ajYBubRK3wNZQa2zJTqys6ZiNJkyLLjFp8hQCenHS1LnUspeYR1sLHqBU3EsebPsueGozhEdQSN1vMD4LLzR",
  "key14": "4k2XT7X9vnHYeSW7jbyz4oS8id7pYFLzyLCsA3PmdhU1HVwdmGNXYKGbkZ9HWFNNECGzx28AYpdgTQuo4G3v4d1h",
  "key15": "3qZYZHPGwuRaHErZCrpGgCdwdXECsgHNStBVkdGpz4unHiHkE1JijD8e9am9mqqep3KLQ92VcKXCSiC1AWszr2EK",
  "key16": "53ACLb2JjCs8wZgJZbPptCVq9Svahx6XKREZwX3s8QGnreT3A87Yy6485erhiA52pXH3VVBYLyFBcXKGN6QaNYfv",
  "key17": "3YzQ8ig5dncoKNTbgYyokFgezV7Fo4GcqLTp6kN76yDMHcxmG66Ne64eMSPfwnKkrhbXp1eo4XM8N6d22s8VebNn",
  "key18": "5YAYw4vsnaduJr1i1uRUhBRTr9d2NGFtkvY6cX7VxmaeKqkPUcdowDfxdDtBXh2q1xD36mp9dFeyoUsssosd4FTk",
  "key19": "2iHeovbYEk3dVvKESSmnG5ctKPyzKRkbK1T34WMVzCrizDWwmrcoqaqgkFQFw47Pt3hzUphKtoAtMo6dzsTca4LY",
  "key20": "5Dzi1VPr1BwzrcRfdaUemSG2hc8iy4vuUViWi4Wqy8B7Ds3hpcYC5823m88xQ38Nwwy9z3huFkU3mg5rXYj8a9yA",
  "key21": "e982kyzi8eqAYjdBeduXtQzVBNtSgi1th8uSEw9KeX94S2uGndiVvutVUT7PnNfU55bw8YzR6Gdzj1ajWkTi11r",
  "key22": "324nkm9Hg3o6JeeTr6iySj4smnwLRSSVYrKQKiKUZujDqGHtkVPe5DPxBGD4YydGeAQfj6AnwNLCAeFsiNFZGr2V",
  "key23": "658PbPbhy4tgJwaWkcZhjKwGjnBMFaazH8h3YGeJCuDi3L2KQjcaitFZwew3xgDG51QtHGJMJGGhfdCUfDnu879a",
  "key24": "nxh9w2M9c8UphVshqhbxUH3YPm8ooFGbhJa3FJbjnAPLY4ECKr3ZeAbpBPwBxRQ3dykKN12L5p7JJoBgUmHqMLW",
  "key25": "4Kqa2r4vCUsC7iQ5xdzvsXj3fCNwiUCBgAoBxaUB8sKXmTYGQ7pqA43PhGJSde315R6acUYvcUmKp1kNMwmHVxCM",
  "key26": "5yYHuwar5tY9EE7uDsBuTRZiYzcoSGcMtA5CkfHKtbVcvAnP8uHn8gZtnoQbRxHqL1ghWZjh5GuwUzz38dPPpRTM",
  "key27": "gCxVEsEDfUbJ9T2t5uF1cBEDcE7MbG4qBc3Xqv1Lf47kaP2b2cWiQwjmvfoNEBxsJSzwaS1qBvqhR5qB2mKrA74",
  "key28": "pG4qbZzBKRxXYztDGHCZHny1vXBumqkPPr3LwWwDUVBxvhRqQnYXYVDqXxehRL4dspfBdH7pJPad1Sh1jEZkUpG",
  "key29": "5UyFousQXNykEeuH2vqXDHXz3guhMnzBDav6ZM3NgNSowWNkMFbDTyJyoCroio5Vn3em3Tnyo6eknWRMeGZKHHe4",
  "key30": "J2h5uTwBeTsZapmw3uecV7JBoTajH2FT8Ni76bSk8cNJtLjx492uNfaFXRqNEMjTxGFGrgRPm93U4VLeaD3trTH",
  "key31": "gyzH485zDMZ2DUcvKTm7CPGibfunvGXhzoDZjjDsUX1AWFyiYJFEoWgKrqf2Ee1t8mrEoci2MDSkKotBESBcCnE",
  "key32": "2ic8QVcbNzHEYczS8eqzwAnLAgC6HtzojCuhAxyKxzoN2G7Da9SzeBQmdRrFzLeEjGMCzZGVcsx9Gqpy1yLh4QdG"
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
