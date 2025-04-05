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
    "4bjzo9Nj1jEnYkdaSXRhrEqwbU33y6bSrNHC1vWFm6zzY57j8bWKwipKBCy7L6hNmv1xGQ8emKX51m6SWB9hQUr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZoUqW8oyzPQyahW1oRKTtqmLMasubzQJ48ECFoZG75KdW1ybZcE4qvyMW7ipurepxuTvETzy5EYWUKo5AhxH9Z",
  "key1": "Tc5rVtiEAbwnxKGkdtT6kZjooaJNZ8qYj4nW6dG2UmNBt42sEQMjCuf56HwbcppnRVwTGZWcM9xuMQdRDmDBvfk",
  "key2": "5QqEnyoXuZAv9CP2UovNiHaCpPLxf2pdq6tyjZmAR1n88wDMvi4rtvLkkXNFtwARLwGUC76B4KkvGkqmKgVc1xxN",
  "key3": "2TaZn7WhtTcD7ayDmvcDSqWeC5ku6uojdm2yLMqTYqf4CqcsoBjHPvFTfrt7EL2qZbmM6TqGzcm5Xt8zhGGALWU5",
  "key4": "52eTpdP9v8SHgydfeeW6E6mymMbduAX9C5XqKpA7PwANPhXoY53aWusS4UhwrqzPrG841CzYxXmPbUWQCtovv8AZ",
  "key5": "vgZHxSMcfHG6LV1R5w2mwkaN3eUk3URfZJ8eEEstVx6f14rD7UR1oj1tZ3x9d9Lq1jmtVSCsVkzAC8yYQipAPqK",
  "key6": "5YGWNc2h7XTbPC31vFi9X9xxw6GhGSyY73MFy77JSMpPcpHgPAV7zfcicxPJMH6p5aLgCkYqnVuW6aAKpfB5aVji",
  "key7": "5agVP6PKPTgSk8akDaiHHjungyZjgbNjB2TaLU2RXftV9XkHGQW6fbRuM5C2tLEFy3yXxPt2YZGw9KtDpf8UQu74",
  "key8": "E8PMGf11mTuU85Zqf8tDvzCFJ2fkxNETB4xhaSnKjXEzaAjPSCMLdZeWpda3bEgUeGy9g4bDgh7hcFo7RjYNov3",
  "key9": "R7eVFAUfsmUUSkwAHhhsJcvZBLkdro3nXBTUipUqZ6LBYtSZpNKtGepiKUAUbujYnjpAEW7GiXnb9PJRE9qDVuN",
  "key10": "66jEGvj6JDRrm7a9aVZuvw1n26v2Dxzn3U8m3qYNxjwf2NtVB25EZWKZqpFwMutbAbsjLuu9UUTJEB4yCXaiH4rW",
  "key11": "2aMMxEtTT44jrZMVNQKJrmiHy7tDj175aMdMtubjc9bL9EyqFMSxYJjQFFHsXRmtfdMHZsMs2mDp93o9nZpJVhSC",
  "key12": "33CrQE58EYHc6cx4dXSvgNRd5EJUtaA8mUY2KSz3AZnU9PiAPEkMQTrsdY2rzTNEGLQSR79RkcTFPjZnXHnTpBtf",
  "key13": "2gXDenDsivYP4yoZVyYvYVF1VKpBDzhbc2ujvFy5yrJ3ieqsUKi9G6C59Waw672LnwbQcngGm8ExZYEen9TW5etG",
  "key14": "2kEwwhLVyE5pW9bAfxmqw4z2CATQKz6qghppJt7rv4TaLsHjcwtuxqGHBi8aUvGeSCTpSbx1F2UXyX33fPxpaLxD",
  "key15": "4AAxX9m8DE7z2JFGtYtLEkVShrRusn17GWBbMm8gZi4kQSZ3qYheZpAhDShL84zAprrADaG9ETNeUeysuByXikVB",
  "key16": "3U5vrBTDYeYK3fd4GMKYCVmwRHjBsqaqpjSyscPaZrhDvNoDSFz17j2TMbS6pkdcEnbBuH7zeQZDDY1jb1wMaCkw",
  "key17": "5F2pD2jXZuNzy9EBpuMJaytMyiNLb8SoonLx9F5ovyCkjeQiKbkzwdrcf2PRNKGfHoGf3L8VqBrGYUUhVXm4FXtt",
  "key18": "3WNT7sHihSkMXTNkMQt6CFUp5wwfi2nN1DmUBhZBL5j7jHAvqpsnipQxr626qvno187mA6TCjm7nKTpaH4Zhda4d",
  "key19": "2byP2WdM7sojQbSGMvPep2AXiXCJwh2E6QQYeRb9ZEyiFEVbQFCnSS9fqSR9MRUUUPfK6Dt2E7hoXHRSiNfFpqGn",
  "key20": "5CEg6EA5A4JtpCcQ1bcFzze969p44BW5TQugZUyL5PryNEUqn393raqke19V8HobJpNH4tCxnncSpc3LkgGYBLZC",
  "key21": "MZnBWrw8XHkFzonCD5ZtgWhiHTwWrrBQ28Y9LMggAwc6U4qCQruuRdtCVATnnG9gEKQmxGcoYXKYXwVrfjyDDyJ",
  "key22": "3ZUyBiwEoLPteXFmE9rreVRRG9jqerwFMnmXB9sbRCzdw4LMumV9HVTd8ddkrkiE9tSNAkaLRur7xwVYf1SfLDsw",
  "key23": "hYWXkDZwcEEpTHjfYMNBRNvCxUUBqKBs2whkkmixSZZzTbWLewjKK9dKT2R6AKcs1GuV7qvtFy3SzCwfTB2kgi5",
  "key24": "4bhN1uFiqi9ohkbVULpGTkrfHgwgWAijqwnutWBUMP78RB4ZDxs2SBCwbJbrUZoDBdinBkH8HNRy3sp36ZVPUTuJ",
  "key25": "35ZLFEuM5D7vbHoVn452hpUmyvmCtoSMuDwXfvBpFkg8udjHDATbrnzvitZGwzjx6GtVGr4LmQfe52n8eMNDku9d",
  "key26": "4d6o8ykg6Zm28bge8Zr7i3bMBnLosaebtYbUzNMwPiVZiG3tji9UUTQRqbREPo8nLUafvhg8B1BBrzqcUA4qvjpJ",
  "key27": "2etbkPsVcWaGFo9P6Buf5e6JNN8BNYwnqYhMVXJvabqZq2Z1qvqMtdaEEjD8EubX5G2D6k7TCHHVTcimkWNpeVdA",
  "key28": "2N4HuN76i6PTRdjcrYYWQG772sn6ghTJF4MpZBUCMi591puaiLQxBKefBzedpzgAotbvQAXcHjXBZ6NWuX6ypFWR",
  "key29": "8vWyELVkDqF2bLahKhXYpYGUUFUijnSybUsyRx91Tt7Jn3Cg9SduBDfsymW2xjvRoFkwb3P9gD59eHpWjjpkV4C",
  "key30": "2E6NXLHQGkpnWrHriZWbgutAngaHmjrsKP9pCvLwqk5YPGCdHrW64GLAmYkYw56JLFvdZwG2xmdXZQvHGFFnKm2Q",
  "key31": "3VBr24JuD6yxF3Hx7aguWsZ81CkVDCUH5N5ZRJ3Lwc6z5xckGwPk2BxLeR9vJG1ayAiAkCUvwmukNv3rbSEzck1N",
  "key32": "2Phmx82Qf7tcJ5pEax5yfUWXaY1XZ4AV2qiH88N58pRzrMcEaKokL2nTc9vvHKLWdX3CCqozG7M9YRRYQt7uxqWP",
  "key33": "be8PiY4s4MHmQzowyc4KofCUp5MS8X4uC6fsGbbeoVm94YLperHhzBgJfnFnfwJJ3iimCe9sLHUVF4bc7mXm8Zz",
  "key34": "4vwWCQvntrcMyLt9iHa6Mir4QbvgcKEqKgtngHqZfM9aTn5o9P18CRqUxF4vEwLRwJhL6cLweraEnGVgudE8DbcQ",
  "key35": "bnpn4Xke8GvJJSv2zQiMcXcKPAt8HG4Y9ddTMRu1vjwVor2sbassyGzRjXzMmp3xkte38EwCW4ddmFh97c4LPbG",
  "key36": "28pQR9nuxzFwrm8h1FmtXeh2q4psTtPe3EAwBc9wnszGMCM9STRGtAa1Ln4Ev7k3NxzbcKEpqvpvcMFJrzQq3nY8"
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
