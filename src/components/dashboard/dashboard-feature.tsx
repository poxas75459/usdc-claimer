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
    "5ty6sLqG5CgV1i2VoaWtFF8nUHSor4kZu29niJhu3dAuTmTvBiyX2KunTL6ShT4tr36nhuzeCdFt1MwqaHVJ3iYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QiNuLukQML87MLnwpioSqryYqyhM5qWHzMWnuFNEDs7XEe1vEQKuDjwtHAMpanpMPsm8Viw3rPcJtaXH8q7pKJL",
  "key1": "3oibydpkMzn53uEiKxRBX6opG887aTJ8H2cVSFMUuSzGpjha1Qn9EZFVhekKd9U8rv5NL13uLQiPf8g91fuYbks2",
  "key2": "2etEoJzamcYc8KbndMRRoN15JbNxaGnocLSK7YG3sf3MQAGvLwhNsXHEcPTvYbzBjWEe6XuZJjLbs3n8KhiKAjRM",
  "key3": "4ohw7vKyFjQoUxsjcYuqBLgHbXrAFZjkTReGSLQk7R3LwP7PvGMzZ3zXisYm1n1HEKVdXqnZxxxQ2FqjNarFKFfs",
  "key4": "2gaPLoHMt9PqsRNMCJ1b3d5iz5f3GEGNWVzYc7eC7cuNboaGH6iXKQjPLiiPF1eikGMUHp47UeDTRKvE9yTpCJRd",
  "key5": "27JtN5NnJ4iowi27EUtGU9a1JDpmUAeRRniPhCgGFoJAkLkHyjW17RmoMd8eXu4VEo9Bfr8GZ5ytEbHdPkwXxyTi",
  "key6": "QUeQTZ9tE423YaQpD6faRTmBcjrAjjFpRBYmTDiLzUvmhcq5rWea28caRMEZU9ZJFva7BdeyMubo3ouHMRtV9W8",
  "key7": "5Qa97P4pbEBzCKDzeVzxWkvdEnCsi7aaSwZQpuyf1LKuSAYCr1FkGddJMY7ja4fwb4FsmHp7KvAXsxBujnbzVZA8",
  "key8": "o1MzoHqUNJ8CxivFPJHgbLQvP8j4uo1AJ4rcqWBtAjWsHHGLXFDJgZbFbQodsVjTvMsi3F9sVoNUakBrRcR4ntZ",
  "key9": "ECDvFUfWopQyoDTzofjbqpf6Ut4PDgAXzXEXbZAka6vaHdjqrZxbVBbYUof2EPFNy9aUK7f9GLjjgbf5Yztt2zj",
  "key10": "3Hu7BsdVVwSDzAiSZsY6PtthfEgBUZiPGXo4en3AtKQFzNABiimN3Y5xx3xgfMF6VhafkQXhXDuqqLCzHNoJCidm",
  "key11": "u7NuyaVNuffPFp8a41NwWhCdCY4qbKVjjKpqbuySLNi9NohxE1nwYon65BpyvujyCCdrpRkapCeTYxVTqQRzPD6",
  "key12": "g8HePkPRHQiYvX6eFiyYSkBsovxa5ALrwodkqodwxkk5EWAHZmxnETUzgkK4EmkmwCZ1ass6fjiByNZ5VuZMQLV",
  "key13": "3DcsBwN2WiYfiEjLUgcni5swrBm1YmYp98vPAmGkQ4Ewg2ndXzxB5pFhnqTpiDzuXMR99H5NpdcrBQQnHV5PWSmN",
  "key14": "4QPfYtNZV9QbpkHmGJ6Jn3TqATkgjKZjSwfaauT1gf3uXv2BcxhPsnSvP3CgsLpQEkyu5gAuqeJYsJb83EUd3GRH",
  "key15": "42a8f1FvoZLRmLhwxGF9hdVfaoy3Rv8WamWM36CjzBHyT9QciKu3piyrYoRNgadWbWSHoowHCJXUMTfQvsXQS1fb",
  "key16": "dZZhxbfSKoQQtigCfb8mBD7JuvFTP8bYfFcr8c3CaRpuxRQX5vDHRKDj7kVdMQsCAmr6xL1fxvQtPvoMFd73jur",
  "key17": "2EJpMY1f9XghwxExHv3u1KeQEhmZEUd9osQNFZ77x1x4k4CZ2mNEG4dvq2AYjyKzPg3vpHGi2sbfmHGFyj8PtanV",
  "key18": "2RoikCTUK1jreRvedNPJfscBJqzA9cQXnms5aXuJ815qc5vNBpzmarTQYmS3iaGLXdBoxJMx6Hw3LQvEGY5acy1e",
  "key19": "5yiAeRVxuFzRb58yScg5BkCJvMm7erzZyjDyAqB1CSPACuR4WgEVsfvRXm3Wx73KYcdFitvbiNwsAioR5er7ysm",
  "key20": "2TcuEVrjcS3XVfwbLENn1DAF43pPyF6VQGeGsZWwmP8QHsgi61GPU5ygnrM8PqRb8YxFPvHwQiMV7UmESeo8FABc",
  "key21": "5MxHd6xQGAsfTvvtLEFyUVCHkzFixGWcToLir8aDz2m7QwQWZDGyJpENWFuaukkKgunowob6PirSffs2haW7eXmb",
  "key22": "5aV9D5tkK4jqHj68dgbWQbhpqQtwDUjL6oKQYbPTwhhbehw6Bp87hCouAh1RboevXZmz9p5havCYFB3VMyS95Dir",
  "key23": "5yPYnXPw5WmCCJhQKqzGpbUTEHt8TepmYFa1LLc2ZEDvD7iRz93CcPsSzVdCVsfgmKLtMX1ZvK1P7dehWhGnY73p",
  "key24": "2kkqY4dqxqdsGVqBL7dgPASyHt26zGWyUCAtEtiR9sfh4A3U3L9tGYvtLgaeHz1mjMhqkDwMHYaE7mVvrZ2QXSrk",
  "key25": "2LPLFduRuPXbjxrcMU6HgFZdiXksWuSBjjifDE1vzx98pCYnyEVqRqvx82o2skJdZZzZvdA3rD1T3xrHNY8cjhDA"
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
