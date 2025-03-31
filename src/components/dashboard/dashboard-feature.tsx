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
    "46hi1gmK4xEUJwmNRRXkzrDU8varftxqPh5k7uhC7ki7WUHbMWeTG7hLZZyQnMRwMQvmW5gH8cYWXjawzop21tAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gaEaJZAsAwXqctEdaayR6WjFzKNknp8ipz2UVgfngXiJpiu9y7W1AAA9a2opkXJ6aooJSVxK7a6qYUwYixcSjL9",
  "key1": "59JXcyGrKYCJAz4o6Qcvr6aqbp6uYnswC2Rfx7YnPCg2boUo5bzZNogLQwhr9z7KhLoxUoNnQLCCd5zDUncx3iwk",
  "key2": "4VFhr85sDDJpRkh6hj9kp52vPJrccbjXwQGmnVAVm9hsUctoHN9Vp2xguRe8R6ZduUMQkfW18DynXgqSCqujM6mU",
  "key3": "nsZm1Vt1vxsuHa6v2r1NcLBUyaqfsEUeVVbZe3TmAetLVq5yzsAEbTaNdNWa2ZcueLpXuanKh8wVqv4ycTNUog3",
  "key4": "2ZHcDgwSsSLE8rPYTMY8ShzcwYh38d3pbMBTKMTxkdZn6gZ5qe7oLwgW8TwPV3Fbzpr15JihMFgGXnwqjwVH3r86",
  "key5": "5QEQ5y7CPHTunanym8msbfkLHVsE3pz8W65JdMaN5s6A4vSyhG8XAuc5cT9F2wj9xoFVezLQ76tTgSHJN6N4u9P4",
  "key6": "3CpR3d5GbD4AA4qmu2WqHPMa6AX1gUN6xd8yj6QLAohFGNR5pzm9nUhng5yRPJRzir5HM7vAztgXYbiyd7oSFt7E",
  "key7": "47otEeWAknAm8tkLUDDqTQZW3YdFtUZEozvKLZDKTcFawNZFm1KmAa8WE9uJ3wsE2CQ2oa4fzCoyGKykCqj8SSkQ",
  "key8": "5PFcPMyPjMWWmamM8AGGqcRg6YGhuyks987BkEZBQnxU7BSpq7rW7c54RTu9QbAEzspKmexCwCKMjx4PFHKw9Q5c",
  "key9": "2QX1NhNRwiGpnGTuYrFLdJ8Q1B2QD2VZ6uZJ7zdt9LPtn35hJxBw8gETDEEh8XCzJcJ4d2nh7DkBENCMfohk8W5T",
  "key10": "2j2WMkq5NR9zQRG1RHTiLMRRn2G93YxQw7WcxG84N35UaapE4aqM2xwiGVoeAR8MmBcB4zBsNhTwhE27CVuJ4h4f",
  "key11": "3EawqpQzTqwEh9BBjdLpzA7cfBpA34GwR7y3rPPcAzmUHGbj9BRenRCWh8DnrT5W4Skakb9c9e35KNWMFddYb8r2",
  "key12": "49VDZPT4BEVRu3A2Fy2u4jJEEMkM17MEWYZeHhBgWz8Pbg1rHvBmVsPqa88x3tpbaNxNroGUJUcgrYb6Mjb8Lx6r",
  "key13": "2Esc36t6rLDX9WGxGq6KFZws55yv9DCoT1zGK55UR9HBbGZ4YHzTthYRZM3GuEk93pZMu8kXX6QWjS7NPpNKG2Ax",
  "key14": "5AVieM1N6LUGtgBFh3fKYtFgzUxTUYV8Ve9fuM6AkfL3yMBz8ComSifHybJxCPiKkNfUgRbB9JZYAZ4eMwaRC236",
  "key15": "BuvhvnSQD8PMAnnnLuZfrmpXD1AanXmjrhswG8B71R1r12vLr5n5aSYUsWGwb18fVXBWJvTpkUvBJFDggrHNubW",
  "key16": "4xw9TP5gY7qaauDKFgEz22tBwoeTHirwKTf9gHgJdJw9Z53pR7YnwB3sqMtH2CX1XXmMuYTszAiR837wVxfWQHQu",
  "key17": "4DweZHaoHmHbuNDZ3chqmt9f6v8aWrLuvW91i3cwE9Lm32VYMW2GgqBoDtA7UjcuHMepRWdU5Vq7mmKqJNQce9mn",
  "key18": "3srS35w8rh396HMwW89RsRxyTJN6PUfRtEJ9hpzYn1KFL27XFa4zuf5zYfdvFnyGBoyJkDHnZ1tMTWwExJvS6TNP",
  "key19": "5B4qXNVDJxYLFW3ShABeVnDbT5nvTofUToee6juENud9wmNhQqL3Wa3JuuedZD7KiphNy5SRqYTQsTEbARGSVJRB",
  "key20": "5AArm4PZUn4nkFv7WbNYgkFUMzKoSPYyWKyH4oPamJA5US5XewxTnjiXrxteAFq1j3jcX9jNBomHLhEu5Ce5iQYy",
  "key21": "3os2qFeTz1CGfKrnAwtgkBF8ZnKw9Lk5PupXpheuuYBbmMpVzkRw1g1xyiHS1Ei61roCB2unkAqJZCNBnuAaAuTw",
  "key22": "33NzK4M7WrrEvfBKEyUvN5X7mgYWrHPjKjsPvXkBCCZU4PM2AJVXWc6rXitqQaH4Y5utdJ9bLdpB8VoXzpuuZRBa",
  "key23": "5Vcteq6TdpePLDM7BpQ1ncJNwsdjd67cpUyAGKzFsrpn2ChJZYoT9utE7TDYbPNxzQcZ1WnYEcdMXSEmzwVozyEJ",
  "key24": "47MseufZKKuhpL5TxpZdSoCdwqi6XthTwspoUdkUsmceFzBc9RZe3zEnCkrcyrocqy4VBr9567MX1HG6PHS4TvqM",
  "key25": "55ppjQynKhQSjA1AZYJy3sz6DTC3rngHgH4wm2FHu9XYHnoLg9yAJ6dtnPwTN3aL1JjAVYgbSczBek9tZ6iZVS4S",
  "key26": "4Yk4UqVwVELCF5kDaJzfa6DQejdMjDU8KZTxA7Ga7LUW4Am6krGXKPBcFzWYf9x343n1XzQkq6mLpoUAoDsuqUpd",
  "key27": "4KUdUNATcqHjQGX3TMihcCXRcwGuakyzoHKRCUiLxKvDgSWnCsHSTRFMYxMxMQkQuX1tzCF8NrrBuVaYBD6vTdQk",
  "key28": "3ghNirxtrwL2FCusYBML2Rcj1dtYZ83z1iBi9nWXtSmYUBJZXu9kacvMHt2dBe224hoEhg7KnZ5puRQjY84fPJWr",
  "key29": "66utDZVoVxYMaRVMxXqb4wXDFsG22NQvHZqeWZ7wngXwtfXnAaSGF9F33mtcVAfZw3J57f2jEUncG4rna1yk5iMj",
  "key30": "5Mpi1N7TJ41Vz5dhQgbqpQYvbSCdYnazBoPiTJaHFHTgcxo25MwAwwxp4xrrefC18xdaYAtNfxMsFYCkFJyaWyDq",
  "key31": "2areyzpXfNmrpLm2XrEKYUE4o78ZYc7UsWrVugc7fiAhXyA9wZJTcVYXEZhVeuDsNTJPxkKXWqXNUfJzTCDRPL92",
  "key32": "3EyJH5eAvfZn7NSgyvi9SqxPBBbaJ1SowvdouvHAQWAByy3vJyYQjUzaHFsFG1Tgpdew72iNzavjkid4Q9CoPxji",
  "key33": "3dueS8chggYqHkTL6Tdm3Au59Jrqks5sHnwM5VUEhBVHNyfRwPq4VKViG2s7Mh594Y3Xdcjh228BFEHAxzVtbrba",
  "key34": "24KW93tHfcgyirCspW7QS1t438uCnRsAigVf3pGAcrV1RWeUhGbqQARnXmK2k3cg841cBn7EaTVfwqeVaKTBCVLx",
  "key35": "3fi7HVnLNDmLXdXvnZWUgkX8y9PnY9Tg1pC2uC68ek1t3UT3y5H79CrFz7hJ45E7QiyXvBjsJ1ceSB4oxUuFpaAc",
  "key36": "4EZ4tU18ZEmUa59xU7iMY7NJ9Qt1nijYESantfwDJn76rzUYE1rpyAvJxDvJUmZoX5B4o57fP79ZZhLGmD7iz5Wi",
  "key37": "4Jj1vWEJ38Jr6BifEJotjFsxDpYRZKuzddu194dH2GMxEkKfubL66UF1xSz4GgNzXunJcmGAVuoQZupeq8b9Pz1h",
  "key38": "5etq9LnTpVq5w84nXpcUVeA7ynh7x7KapB6CGvNvCNvjb8TgQu8pFvcU1ttBwKYJYoMyNnFe2KKP1veYKyH86Bgj",
  "key39": "n5mFf8K738YcSNC1hPySesyt27QpXnvZZep64tp4XGNRj8qYCFY5AYEY3v5E8JrJ6sWuKv2oSMZ4sT4mapHxvVw",
  "key40": "2yrX4CNN3Kx3SBSGjiWK9fydQFSJVepSMoNwLWqopjsT8bpyhjGsEviMAya5yYodsTKc8MqoN1ArfhNGiKdZ3PbB",
  "key41": "4FDa6Kj4z48QHPmi9BkQE6eZreYHVspZK9Ch9haWx7er6YGPEQJowfVVApwTzo5z6JNHwD3YhCX7HuP1dAznCRRt",
  "key42": "2quz9dc3zH3q5e3fw27YoJWSyLBBvKGUvScBVBC2raAtxANg1yLHbaREDbDE27b84ZnEjEYvrnbKSci8ZydkYZhg",
  "key43": "2AJBD5HSmKLp5yu3Bu9QM1nam9kvhWRnj2vEbPRuRx5V2ocSFAhauccdmxrPbzxpQQb9wT3GA8cp9SHn1BUZFGzZ",
  "key44": "3m5p8Zsgxzkscxf4YnhbAnPgF2BVDKytzoVcmNbk8ackm52kuQLPt18q42ztfMKB3C7UssLm9G8pi4cA3aiFxuBw",
  "key45": "5v52rEtqwwDTnpAjiQPPstqCyQJ8e8juwYmEKPvZxBHmQS4LRY9ruJKy3hvoNATFAG2NFyPfW8Uityjt9KS9DS1x"
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
