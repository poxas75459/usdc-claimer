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
    "2McjEMqo2ApB7FatoRWvh2SqCThXZKoYhrnzNpenkNaXAojiA5iwSs4ZQyb4xbpR8nyRjVNssB1LUp5arkxLGkNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZbCtTfvk8mdwiyPPjiTpKxnefSrJ2sF8DSS1ZcoF6wVUT557sQXQT8yRdAmjPnCWqebAqBvefkDigmKzchdLFbi",
  "key1": "3LC3xuX2Jdp9TSbWUm9ZX2ULWP1zKFvPY7WZ8Fe18r5wtKEVbjdTESLCDBXKxHTXr229EffGGiDBaV3Z7ebGQLcA",
  "key2": "31EV9hF3PDQBbaBUAx9omQ7FL3e4ipywp727ctMsVSPR8eF4rPZTB6hCKaFwGcvxPHvnsLSsQnDVDmNXVNDxQ346",
  "key3": "2kGXYSzxvhK1tX2YpM132xHDxsgV9jETBvEJVpx9SiKBmnw7Gfq25MiwPSc3QtMcihprGsExKXfrdYbFQ8Spv4nZ",
  "key4": "oP5GRHNf3XM3Gr7a1RLcnzMGFs6rD99uyaKXzBtnMqePuxeRx3qa4y2QHFfVoRQwHgC5JufWfw3MCvgqrxrbMwT",
  "key5": "aC9oBtz1ivW8pPneYs2RMoR1xCp5VAuRzCf6rcsQqqWqVeVfHhhNqUEuMNbxnVLCbybAJ9kEzzFhuGna4akmBCM",
  "key6": "2zAewhQBAPwizW7hqqfZTKj8TP8bHgJNCdFFSMw2sbpyKgiTaEX9DgigE9YzFve7HHWMMZgT6Tw4hsaeXEm4D5uv",
  "key7": "4p7dUL1xoUFqKN2Laznb74EqqAZzYqZWwSam4g824wDTtNutTVPxU482MybXe3t3yLMMmk5u2q6BSAhsNBtYdWHe",
  "key8": "4o6KQrR9dNx83Xtij2iUB8aSXL5knaphK7xXs6onztb3Nf5vtKQjZ8LZHYCdojfjWcH8fFg3rMiRV5FDgV9hVGyf",
  "key9": "3i2wpSZs1yH7zpQWnK1E4gXkhFRH5ofCpwp7RyS6gadp3oQTgTSG2uHNqkrR1GQMy5U25mmAFc17obssJBfpxVV5",
  "key10": "2Ltwd1mt1d9uSGgkRLUMeagbY9W2s7eAn6jUGXWMMsWuQ5eHwVqbWWrFWaV5qCTgseFkiXbJXoHz1w3JW6XdSGke",
  "key11": "2DgXUaHtSyBZ56fcLw5ZP4YZ7aEsS9W3Je12wZoo9Max9QMwfZfRrFZGWK9CPFTyRxwainB16XpYVn1NpVcygtFk",
  "key12": "2R2UHYxVNBwPubbZ3Z4D1n9pC4RMFYEk1gA1u2UW1yxWfDVBH1wKYEwgvbJEhdNAFiAjjsprb4zjVUSciJSdwKce",
  "key13": "4M8RzQLEhFWnYkHBNZS1tBKZBNew2zDMsGNJqFf3XkJQgQm777wY12BuDgqv1GT5BX9JHEH7ufuhKyfHdH7vCkvF",
  "key14": "6vuX8e8WQsCKxmUQJM7YmpczJ1gibbsdQcHNUzhRvUqGG3KBCgzRFa6vfbGPrtRJ6CrwSPZy1vYFkSVJPuJoEZe",
  "key15": "63tALAB74iTQxLyupMNv3DjUAAstDZe7hS6EXurHUmvfk2qumMqTasvTtJ4RNmQEEniaUNq2Jz2MpC3die7TmUSy",
  "key16": "gNjrVSD2fRKSrDTM3CA2XxyVU9sFZjU5u8Zw6UdZmkMveF7aBbaWCiyYDbWCvH1xmfnc3KsqvqJzGebnExQXe8k",
  "key17": "3mh1QKkCrpM98fTzGFptCJgoGywterUYDMaCSdGAa8SUiXv6aHMWWY13xSYmVqJnpJP1GeHHWM7jWd7JuthkNbn6",
  "key18": "4RwmoA4oAUzK8U4x2Nq1kpuWGkPyFwmKVW7owCXHsrjDVpUHwXwxUa63AsfoPZYw6CsZEAKHKzj7rH5v9nziMgbF",
  "key19": "5Ry8YLWVHzeepDTcp4QRexvYqDXYQJweuXTbtQmgLZBrPLr1KD3So7V4cAEiRJz1yXzXw3dpPGHJCams2nvqcph2",
  "key20": "49RoTuThsy1NT6BjNnr17MpLnA9qLEsLbkebPXJpkGyRnAA7b4VyjoWV9yoSrZMNKAaiprvKwb6spPvqrasPWpE1",
  "key21": "GnefyjCpC26cntoSkYYjoHNYXWY7D2tLpU1FhCEk8EJ2vNPgGvGGNJmT5B6rjLW2fRQtpLHbVBTX4ffLVb2G26s",
  "key22": "2ih3MgFrhsTrguSn2fZtcD3RfjaUQ6jkm3HwrWJxK9WDb9XBV4mk5rz6eUhRm9BPCRAkjdS9XPB28puXMEf2FnFo",
  "key23": "4zTPVMNzZiQ1Q8nZnrFsxU7wWT9szxsHzBerr3rwX8Y4bToR2J5RK25CxHa3q3UsbTfX2UqHAckasEwgJhH37ium",
  "key24": "4VywtvMqe9PT5qZ38i7gejSi6xGG3HgC5M4rmvVRGQ7VHmRQbi3tfQFixQLV3w8j5k4hRGUNmdS5WTma3iXKmHwz",
  "key25": "j16WBahZEdSmVX69pUT1NYVMiFft4ygBLArfBZHbSedtWG3Mjpw33VAuUcJ1apvoaXW251s1wevMwGzmLGVWi1E",
  "key26": "4nVJnFs9gjuVRmb5eLrVM5WjQzX8V5Gtqp9nhZ64sTjtBUpoo7XV7GK3SGNPuKacN2f5rPtNSnmEmLJDjDMkVvdG",
  "key27": "4Jw7ZFEJMfWoMH15PZtqy7KuLSCrSUZWurLfsFV6uPRkpJHj8CboN8BrCxy92MT2heK1n2e1GtSgmmV2SYaW3ybx",
  "key28": "2E9YU4E8CSa9r5gfJqsUZ6b9aysYY4EZwtgvUX9tLY2d6jAbvWB6Rv8MjxVa7vCE48PMY1XCVQwJXsJKeDbmMnPR",
  "key29": "4A4iHMfxY6NyWV9hg9p9NsXmcfJcb3EA13U5X8sCr4Rnf4kLMfNmCaAvix8q9ewzAUtCW7UGxqPMXw4Bs19WCnCU",
  "key30": "3TWYqvwjQ1xkDwfNCCP2XcEr2ASypNgReCmsypZL2XapaFNoMp4fhyQLjEt9Ybm7RAkfw1uF1n3JsbuGEnxTPsXL",
  "key31": "3tv3GbYfMTjHeVLMYjFJF4XXPLAHvRQ7wz9AadzR4TdP2Gtecsamp3UGN2gXaDwXzCFKmzp372nChMa3Vhintbez",
  "key32": "4qRdzxmLsNfsJA9fMK95Wf6EHmPN8cryaQruqUeWnd1e9YvhzsRFtRNcJXo7jW3ADpbZc8eGrRxKqmdpNABtcDnR"
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
