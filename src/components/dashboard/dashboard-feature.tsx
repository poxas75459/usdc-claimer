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
    "3dGQTueKTiA12fztocmuPZUB8hWvMnkPn2BSTobRKsLtaHqbWLwKycUZHoAR723jQWRJUP8wZLQhk5h7jJ7TnGQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zkF25Bdn5xysxZRx86HZpL3Rc4VZeWFgPsbsXYQx9qipCso1ZG2c8zuN9Kb4MhCk3i7Mq9vnAYZ7oZTsZSo6Lny",
  "key1": "49FxedAg5u1HMJGqmM2svkkzJxh7hK97d8zfuTzW3j9CnPPCQsyCJKAdTzgL73SujBs8VceGjRUN15fRoStm7PAb",
  "key2": "4dU7YYgWxMm8KSzBGP82WfWNkzQRNWiHCbrDmAi4vgxNg2UYJpxS6RRPMG2zyRJSztzfuZtzcFzdTko9aWFdPELf",
  "key3": "vdb2i49PDWQJZkEj6TnS47CBHZ4T2KpgZGTftNsg7Jr64E6M6BNNQPiHYkzLTouvqHGPf5owjuPirzoT2QzB8Sc",
  "key4": "334Y5H3fCwEG7ZoHbYVJLT2gFRwLU8yhC5nCdiNQVwMgWFgkp7yNnnZSJaDu1roJK1zyrKyHz834PxvjKEu2fgUm",
  "key5": "3tzEwaG69U4fyB57N39m94cvcxXMGyvpnqASqzgvXwsodE53mRBTuXP8Z7cNhZWnQR68bYRCeoQsVtCBt48VzEYB",
  "key6": "AQZHfz2AiQkVmm9Fd3UcnHQK6JPirX8nFm5PR9UC5nmJDD28BTdmKDKZL4LEaAUNt2Nm496i42oYhyvZg1qySMN",
  "key7": "y2Mjyqb8x8m8CLn23g2VBCAazrBC1qA1jC6jnDUxA7APApeuZu2zcGSNGTFBt8WWv7NyqUv169ztsJfYh9qPW1p",
  "key8": "3rEiLLbrPStmaWJQm8j1CAfHTkHQxCRCMXzGzMxGFmCVmtUotcgneSrJL8pnSMgLiRx8Ay9iQ4MYCT7E85FVSD1t",
  "key9": "4R5BjdGKKb5r4F9s83EkzjCx5qus2na5qAUQwZTrAk6C5Va5KDuKTCQXGDzihUsXJrUHXaWaX88LHLZVycQbKtvF",
  "key10": "54BTe69nasEnAk4ouatBuNRKnbGYURgiCXX4LBEvBkJKDQ3ZyGEzKFHHggFMoiQ3jSa8sCgx8xiArJrsgtuNHXpr",
  "key11": "2SxBeVGn2zYYGag9Ezp13VeJVdRC4FLe2FNPa67qzE9KRLrkBi1Tdr1WByc53hNd3gCHxt5NYbf1BMCJ1jkSy3ES",
  "key12": "Y2TfYUzfhSZQoXASkKRgjnph3tVRMiYR4FjGfTBotWswnz4WNV86K4VSHTY133rrsgrLbd5WapdaNbH23ANv4JH",
  "key13": "wfMYKFmXzG7qTUkaskLrNzZs1CCJ5K85B7yng35qeseUxpr9YosxUTEHVBtGfAdY3zCb3y8HytSQMT6t9xj8Tvt",
  "key14": "5xEtRhoVHbg3W7TKJNh12EeMFyBe93AMduJCj2vaN8PPkQCA8sUWgSRNyW1DwSEsSyc9qcbaWTgHM8MEs8fYWMUG",
  "key15": "5YL2EnrtdSukpMeXouFqSJLX55Le6rtYzL5tbsoMb3nHymCUGcq2z5mXyMzFzMymuBwNyZQZth8CWWPKfCx2pX9X",
  "key16": "5HVZbQKCwjF1FmsfYZ4778CsjXfoRTmg1Qfb3q9itzkbaqxgvfBCKt4fqm8Phj4K2iLJjoPBEmVa7A9CpNrCjubh",
  "key17": "5KND2gsuifC2kqhqioaq6ddhM52LzwLbC3QHBSAUKfyeFFfGkf1xJWTYvb11D84wgaikjRh55bFELCD1uL1bqv6J",
  "key18": "2oDbUg5CHFJ3mJ7EV4xHzGhasS4wak8kPfn1NsWoDSRMCSRSMVphPS7SnUC1Vssbz6aQLcMbiTC9EcUQFcaJxLrB",
  "key19": "4pZYrmeNYyPGREPvn4F5rW8uhTf2yjMokjqacLJ2NKGpuFBgnu2qzmkARHaJXhKHzQbS2sXEWZzYnEar4GVRAZ4i",
  "key20": "2aQ97ofuBvHs5SDaHRrJsbXUCbaVw7PVQhCqVuYd3pZa9kb4KHAVSr1KSa2TxcvzQubLnfmwqAuKu6szBDdVMXXf",
  "key21": "5axxm7bfmvbuYSH6qP9Lu4f9pFox44jmjPrHxVMNXLCrvsuU6BJL1ZqRpAestSMq4wR2vFJpgw3sYw2U4htEvKcU",
  "key22": "Dn6THSb7P2kfLbLV9b2W9M5ob2xcdLHaL17UHPcsaGLg5K5J7hZxZmTknk48Vn4dCMZNYR1dVaMF74irVAQHBQY",
  "key23": "5e3SxA4cNbPEc4tgVvg8RnfNuxzmD2rZcVoxwtHxHwkne2JyrxpPRKPJ9M9XbjbfX5XvsWTbGd64y7L73jQ6cS7u",
  "key24": "5cKvKA4kervnZuo1sBBVgjxdy982jAfLwXwLmSvvqVw1VE7Rk4h4qNVPzf7YNXQh1vxgQYYLQq9xqnzmaxsrzLny",
  "key25": "3r33ZqerpzvGdFT3GuApgeCyk1txwSQRYCC58byQWAY5bqXbRaH6dcUNtCMP5UfwpKBgLPnzE4aUHNxdmCc8YQDD",
  "key26": "5CYhM9838kmihC2x4x8TnAV5Vk2aSvoX4gtfXFa4S3FrC5MzEZ7tvQB2ovosMR3AUf6N7LJ86ryx3QjEu9P8NEba",
  "key27": "2Ka9z7iWGaquVZ5GBvLMxGbudfP8weNEboTwHxDJArPMtMd7ipaF5WPkT4UG5ca4aQjbo7vG8mmDHm7yYb2uo8ED",
  "key28": "W7LnfTspGgvew6PgLBm5EL3yjhCGZqNtU2AagrGbp6gUqPbkYcW4ywW5NZBDprSrt9vSb5sajB6vwLkg6Xpzddw",
  "key29": "4jbnNcBJbu5TnLeRSZWKcCWfBm7nZo1YR9KvqnGPf5LesVFnn221beXTJD87HJ3LE7uH5CJfsrhSfUdWGg9vu6b2",
  "key30": "4ZVCzrh814p2pAXm1YTDYV2244Mq6djhsZzMaQuvhNW862MXsHRjPLsFzQwnQoF4sRk8JzNstEJJuNPcm3kmTT3z",
  "key31": "3CKCpLjTpV5ho1B9g5LWBYJ3C3223HPFJ7tCv5mjtGWpjTHf9wHcVRz1sKErtioe4WCTCRpgA3uUKjYNbecR9xiW",
  "key32": "2DeLwCXcSBxyofcHYCC4wrTexTnjsfhfWk7CYFSM8199ev1XtMsn6x6mZn2C8rDD982NNdJWDxxqkrevksJxMQFx",
  "key33": "3fjuUHbC82VrDMERRjiUf8gjrWajVAXTCkKmjEhSXNaByLrFvXtZJ7bkGxyGoJ8ELW6ve4izH8SwtgGL69z8gaFT",
  "key34": "3CQG2mKTF1YfrKCfWY1jgrtxS3dcF2gpKGAmH2b5pU6KzTJKcgK1qcZUKtk9cdaw4GAhCmWVNsKfDGT4jEM9DtQp",
  "key35": "4HGsurGXueHiCTgjCjZpLTiQ4u2urzFa2xw5hiudh7E9jfnx4SeSRgYcBh1EKtGVxY1WMja354pPjftARokvEwi1",
  "key36": "4bumCdogxiNasRm3qWfe78GgiJvjDymRJz5LqpjeX6k4m6c8f2UrEJQMuiVGbrDCcWHSQ6kJTtpGnUMkcGzDVhNa",
  "key37": "RSnrCMb1QUScpiiD6UuXEBLAa6oLugob2fY3i7jc9faN7EFmhm1mqodFp9n3rbkprer5DWZgWBvnnx9c4DGvBan",
  "key38": "2NSbs385MCmbbToJVyyRerpb6TeUo19s7coCh2VnWs5pPm5J46wYVq5vvGmk1hfWRAc7q76QoMVSzQSNQdigXs91",
  "key39": "5TvrAEXpbk8RypYkaMsDGH54eq3Sq5u5ZT6LLmHusUAA8XEYgVWeHN7XhZ5XK4sS2qoTbC2XJo2ZVNWNZ6ZavKKK",
  "key40": "5maTcAhDmWeJbCg7WH8uKNLXdhxir4CfimeyjuQnkjqBD7h5rq6sX53vRxAseURiE8zH1dqkm9tA4zt22C8XZQxn"
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
