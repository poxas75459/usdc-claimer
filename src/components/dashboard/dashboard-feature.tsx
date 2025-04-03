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
    "2i4aEShSRTMss8YiHbpTjcYmHc7Us1ZWUj3VNBgWSVLx7oMpVkzqpGWoDdB2uqRLHykyFK1pGkj66JepDzS8eg9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXUBZaWFHWYjrPmJPYDZc463uDjZryyL8fK3wVGnZfPgqBHj1c3SJkhEWZyR48FNCKQPsv3cCU6L5UQAp7z1w6S",
  "key1": "ah93sjEk4PuGYn4nfvaY661dg8VW1aZxuSRjM1S3QybTNY72S3KKbCTqb29qqHNnXz4cVZ3bQkpY46WXx31TBBz",
  "key2": "2iXb2PEpa1Hx4AC9p6EZKfcgmJqH5pGP5HivarFwA1yPNGGXaTnGaEQG7QWUFmuDA5B1t6Z1oBaDyGkjYfLYJzRt",
  "key3": "5bN7ippEgpCk92Rrqa2g3PD347tFtVsmdiH62WnNYRyXJsnoroGj5VYq6n8nv9DYBkKxj5mtYD3ipjHD15apaHLo",
  "key4": "2YTRwm4MsNjBnkd4kF3BvEii8ipBRT6eXCf12ode4PKjnP1VW1Ygfk93WRZ3xW3dA8QyrVHVNPA31JC6GBpP3a5F",
  "key5": "4KH62uBMCQ5UUYVzA9zziCPXUUhmeUkFGLamL6p8bth5jCd9CwZY1npbyRqAeYmHcEQmWXETVNuGyKt5njVuGVue",
  "key6": "3aSP9WLQsBejMFNFajJdvQWWze3XfY5ZcAy64Rn7nXn1Pnops2Dq9zmjCNELkRDB4ZX4YXskCUMmhU4KbcUwWj2",
  "key7": "43EYyq1uw9hqFjfgeUvwD6KKr61s9XxJHzFWAQqJFrvXkq4XRY1e6uozzStm1uPgUeQccJVBfJuzaSWrckNWntyx",
  "key8": "3yqGuqenhLTqBnJ77zWiP5nQZ89cycrZmJSnreeUYW3zb4Y6K9yDLg7Kq8a6REuxBVTDtN3w6DMp3sn27HxMuVrE",
  "key9": "kwvnWqAiRqmBRBdVs8m4TCVwPMVR4L1CmuVtz6XxcXNr6ijXuFDnX7u2rbWVDUspQ8ZdWYtmcVq5yZe33dUW3Ey",
  "key10": "5NoYnod8wrQFDrTaAL6hX4Mpoc94gJutT44PThcLtw3NNBpdbEicBkL8bLWHimxCyuoBoebQqiMoxWEEirKHmaTC",
  "key11": "2E4HgqnGahDaRioS1MxRo3oLhdj9M8n1dj29bTdqtXZN65x5b6dHKLMYdsCHoPuBpDYar5cqL1BfTuux3x9qd5LX",
  "key12": "2U5jKSevogRjeG1eUrmRaqKG7wyGoEY6puxiiPjuPQXamBwMAsZagTSXQRM77QFJmqDonBrS7E91g7TmuyseNjNS",
  "key13": "2Uw8dtcMgqfBhzswCi5NqhTzmMKpFgqYit4agDFNkGmXRDKXz7JmQcTnFj8Dv5T4aSedTDNQb7SsRFnfDaaHhbt4",
  "key14": "YLiNZZ7QgyiKVmxDJoQmuUGXpzKFaLTBvZdmDnjhq8bx3kuSAoxfYDG9kfcwtWDt1P3sYmmLXArgj2S15F9pbp2",
  "key15": "5zJpfyfmKJTo63kyWirV2JA1zQm7Le66xfSr4UC7JsD1sAAnavY37fsAERPf3yreHkMZubRXY1za9BfTvMpv3E6C",
  "key16": "5zdHx9pKFe1noeGdx6nrA2EB7r53o3jifrgr4bS3fjSiEuJcTShMqxwdLQuibzEPh4Pe2MVfk4kv7xbqbMnBBzH7",
  "key17": "16W8WrGEEXYUkAHSSv1HWFeANdvSSUhu7mgA7jmQPZEQUD3X7QANzazU29LzgZFA7C6GzYsCDrXV9huVRFhkCuL",
  "key18": "3JuNTNGt9sc5FRQnczFZkBiAWuxmaRYWwMEv1x3zMf55gRbsusPMaVTyPJAkLTQ6Ka7RMTXrfkqx3zfaJwDvkYp",
  "key19": "mXTQaHj9QiNCSujyke5ETSMXtnD1X4LLtMW1EtLKtPxczcsAPVKFbqcgMT9iufQMgK9oda3ADE6pep72tBHGYmT",
  "key20": "2D9gF5BKzZuYBfazTXS2hjv2RJTahLf8pbpiRD3LCvUBuPExrvMqPoc8Jc9ASxt38Chf1RwMHvPRAe1XooxgC2Yo",
  "key21": "5Za6fMqXCpJBZcdT3sfjTJmvapCPD4Ysub1jfC89L9x83nPnQsxrxN7VitAHHTQfhsQiUp6xTQNBDvFFpNuwCNqE",
  "key22": "4TWocFDoNKQ1maiMxaWWoR5Nrqb3w4xkFdpTNLmQjGSsXTuRVM6wKhrk7BZWLyjt4G72j8TJ9yeEr1BYeTC25UXV",
  "key23": "kFZBQzoXBwTqYucZ1oksGy7sXC7rF8foC9JDjwZU38ECdQdwt2fF15urjeR9eGqZHPN7EYs2n3LWTW98ERzKxsw",
  "key24": "5ztXdJwQwabKdnfPiYUfBXgJ5UiruqfBgBXHyujidMU9kn1HMUBycKw5guE9hMNnWMHJeYPJtb2KamzBXZVVttn4",
  "key25": "5NGFSmjb8c9uDj1th9ey8iwu8TzQp4EF62k4cNKChEzHskpYXw7ZYyrdc87Q6bTRKhda5WXhszcsJJcTMhFZuhUv",
  "key26": "3dQijssREYdkys5znzVXMYDKMU2XQQrKdXKt85hd3AhAgUDwZutFVqSaEXGxm2jQZX4tPeZbkqExtnJ3QbTkeUwv",
  "key27": "5rfEFgCgpQS2Ggm4WkCq1puyaZyzYZLHs9RekK4SQCF7aDHX2r1Ym8s7y2b12EstkFdb3J37qgogwztwNkr6byuM"
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
