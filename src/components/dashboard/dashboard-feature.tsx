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
    "scxqoD7bWcQpH53GoUYkBUrMzZRPGFwSnWNEg7Jj2nJ2DW2KPyQCBgb7NyFDMnCtZJXi67bX7rUnb9Wd26UFmgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUjzwwR9TqcTwcwQpC1QentHHU23rSFScZwWuyKCH8hDLaGsgktuMevYsCHXhjYykcdXqf9ebA8Pq85pAY2mHgW",
  "key1": "47P17VdmweLdGfwfCu4g3YZQfHvaG3MqGBUrXDJSjnexsiDA5PqWN13ycecmeoEA8waKmozC8GG12Cu2HdvJ3HPG",
  "key2": "ZaqgYeKDjJkBCn91BKaQ5wVrmTy2BRBqCbTG1SCuo4ytbz7KnYXvhan5HkMym5Nj5YA58mZaTodakkx7fU6HWyV",
  "key3": "SFMkWULGxFw8L6fmtQUHcfoxKWph6QYkoXsBY5YdZ1a2nbHCWh69Y3dNbM9nGi1mHriex23QP7CYXocGKYmcd6x",
  "key4": "2Hw2NsUWd69KpzLPf8SvCTv3dZvoc29e12DjfbaxKKjYmX8rTHWVDNHfXrDJdpaVVz59z5QDnNDn9nHai7ajofDQ",
  "key5": "dnsLPH3DYo65S7bWWeRQZL6pCG69gkysNvQB5SVQNL3JWcNu6RQEKy5qQaXPBcaaoWSUtW31yqLUjaSohWpYhaf",
  "key6": "5wZdjb23FMc3wfcRe1CziAbLmjyH6AdWHX6PYSXc8zr5rCC71zZAQchWgLnhy9FnfTFMuFtgH2zsQotYe4uG23d6",
  "key7": "3TqASHuGyX7mpQuNbo3sEhs7UCTuKwFSQTZRVYKvHNM9ZtMgTaS7R5op9SPx5EGugPeY6EDm9xPSUjpUvbpWm1BM",
  "key8": "5afQyoqU9qxixvPjKdXsoiQHDHdw6T9UZzuemVywVDGAFe8MxoCeeqEcWPJYqXSp5PJ4PuvzqptiYeff6a3NJ1Dg",
  "key9": "2NKwZA5Udjmv34jfswoRcZYqqZ7XrJGnXepeo7wEX8MibZ8k4TY3rsbpHBZFiVxHjB4NcjC2ZumRBCdLMQPbA36x",
  "key10": "34cPHbd2he7stf98fcZQJfiz8hnfjEKejgzWTxqAV1fiHicS6tyXojrVafQBU3RZfz68XDk2ffXWq8DruJQLMB3R",
  "key11": "4YxHVV5e2MZGEQQt7zNhgK9DH7nMf7LB2n1CMyBjqo71ggPa1ekMfHhSnbqVTnSk6trz3VQQxb5SFm2YVr1ZY3Qn",
  "key12": "2HAb7jqAGxk9m61mSGnSmncNa4xgWFfnVJhcchJvxo4cRSpK9fykVDJW4nvx8ChMKB8cQbJRxRytJ1NNUHRS5g21",
  "key13": "4DzzWUxqg22ZwA3TJH4kEowoQX9F92n5DM5n2oa2SkftwAvwEqeQMdkrS6MY5kYCgEG1dbZXoMHBKxBEUXJKw3K5",
  "key14": "M3C9Huc9bR1bEvVq1HNeG39x965v3TrfXEz4CQgoh5GZPduaw9yXqZ7tiv5HG5Mw7Yx1EWk3xMyncDdJ5ZTVBii",
  "key15": "48SQcHkMbLpsqQgvfDqfk4qiD3ZASoUxrUKJYdvGvNffioV16YLBjSBzherSeGStF2z8VQkx7pSDrwaFS7uzjrNi",
  "key16": "4EQ1xcWRbZzMr4VWjyw4jPBnMZi2nRN2xMzj9ymqEqu3Kbpeq3sPmiwkqw9zv8gVCjwYeb8NT3GPMJ3tqravtMb5",
  "key17": "5ebnMwrtWW4STfb1XX2g2c83P6ApEyrkKh5S1FL5tMbsfTgLQvTXdginFzyZ8oEADJ45Wn4asnTpTzyovL2dZsAC",
  "key18": "5bEeeF5oDnSLwohkKr3TkS49CfEqHeQn8k4bswaf3SGX1aLGRaG98wQWopE4ECqWU8VMexm7ugmgK6kDyQTnUZuH",
  "key19": "55c4rbRQnyXfPCaigac4qyHN73SDrGW7geyCe2kbh35MFhoRTNppx4rfNP5dWjFuYgtRYytsridwozzZBBLNxNpR",
  "key20": "4BLpmmzJ67kjKc6JDunv6UVP7xq3c6GLZEYLSnKGhKsFcZbV6QgugqqTruMnU4SGXXrdLo3XrYQmNGQEr46rkYPk",
  "key21": "3MBRHccSoXAjKP1fgrK2PMgvH4rr3J87uTqeXmyhvAPD5Fu54Emx1Yx8fiN9wXwHzwwNm21X3mzmwB2x7b6jPJfr",
  "key22": "hTCrJQ8ZkZLeuVt18cmdapiXHswLnhdsa6t7siQP6JakeVxkmZZCvWQKuDXK26WiCxJqiBbHcExg3pSjMDpApk8",
  "key23": "4p1uTejXB6bo8BaVNMkoti8eTgPr39TBNVukFq1c3oLyQbsubMbRjCQxG9zcmq6eNcdBHoDNKz9FBJGRBQtGbedq",
  "key24": "5PNLraXJX8mdoZkviAtJ3wQsXZshjfV6c2TBGMjNdZp9T6qMB78xwaN6oNc69wrXPCUmmWTaEemh62K7QMjdED6v",
  "key25": "3GFZmQSh6WFGYvyeZyYHpR1kDgzAjfW5PLfN3xRooH4TWcXqK6F6qjEHxoNs6xw5BTSXVkhSLeSjLVeYXYThSecR",
  "key26": "4DrHYBcgHDwDqFXhkVx1NnmJ35eiTp5YSg5vgRds6oZMh6t2ngQEV4wAp3sJYVHX36ZNGdwDYwnKwR6DVjGBLr4R",
  "key27": "eBDqBfFKqEP1LAktMAkVGznEC48Xaz4hbQ3h5uXxEPPdP4RzcU4APHDnNLLiabSD2jtgxW188xkzpQwjY5eRohC",
  "key28": "QNyPvfT3EUc6gmyxAKattGBupKxGZRz7ZHJtuDN3Y6H5t7iUuqU17gcnk8yGgewErCtYVuGw8HpCPWHN1K1Lrp5",
  "key29": "4KDiVopowYTdJ7g3mfrjq2y6cCskMgi7hkyWYPB2JjvfgiseGRM3L5EnFcBHs7tc4xso8xP2UbSUha3FDmrfiPoH",
  "key30": "Jm78dQ5f9zxnN4DDcVZ15fTXcRxeemcynAzYpMLxxy6wTPjQ69pedxN4DB6sQX2yA6Mj19ExgmPv4xKnRvdGdTB",
  "key31": "2AvHYPProhkVfk1fitowxMgJDKzkqJQBFjMq2Wn6CgqQpbAgUgSnJsXzZBCoV72VCRkfseWZeqvLbnCuGq56cG7d",
  "key32": "o8af7t7yk6BMNdFp8Vn57PeuBT3yZ7gAqsqQQ6EKueyUdoCL9w5ZLmk8MRNAPXQ9MXDkr8XximFYDe5vC7igknZ",
  "key33": "MpDbRqBWj6fuBBhEbJqunNNa3YsJfMEKDarPHkyyJ9PEoGmjU3M7R8ybWv1e2498bySezanhKDosnWE3xKFxPLt",
  "key34": "5HtFm4BBDiUYiZ9ugqp5x4h9noP1MUDc1EsUb16NwFG7USGQZp1pSJyFkt661qbDcy2y6bTu4VAj8PHYsPafdNMo",
  "key35": "5924KR95TTiK2Zu9THduvKfNqE7DC8q346nhDmy6J6vsHyEGJfAdycWBJLAPynoBCMNzkHjc3rjMMZ4MrSdE2Ji9",
  "key36": "ftborrBEsAUzHigrQKFCiyFdBUzGUT5gxqeaZAkf1ZNdHdNZFSCM9Y5wYvSJXEGKXqxaYHCWdRxo2voNZVmAgBE",
  "key37": "46avmbQG4xT6WkXTmFmufVatUFXfGYuwYnaGKG1gdYpvygqJgdacmSrsLqdiDUEJtsmN8teNoznanNVC1V1keZfN",
  "key38": "5Qp1wYTUokooCbUcsxdVMj5UEdXcgWLZZGbzAbkz3CYXp1EVgC559S2A8PnYJs9JbmQ7xYXJtWQUxLBosBhVyLwM",
  "key39": "5jTZCEQWgW2p9ip2sVpgpydFyEPv5fFiBeABvU17LEAHx1bA1SJH3mGJWZYEg5sYVce2J9dD4HQ5i5HdFEBVbTdx",
  "key40": "3YjdB5zn9fS52bGRpCmEtE5ene3VJXXjz7DgqKJVskzKbCdhRkKrgo9UUA9SidEo3uqJqMpyBXapAnnGVGow21ag",
  "key41": "nVMq4qKzbCEioWJC2xhzGCqiPNibSpbfj4jAxdfEhw5cMr3vGfC9NWg8Sa5DmrEF92HKcZfNRRP7UrgpU2QfLcZ",
  "key42": "3Sg6vMG64Hu2KEwPrsr3s8i8waUBwNFGejdpkjXQMnYin9oTZn9eENf7vvRGceCnv7Wc4tBaWXMWtQUUhAUT1bzg",
  "key43": "3h4rR81B8PJD9JLM9Y5oc5DTirT3RuM4hzDdrbuUW19uosCnVWoSJ1Mf2G351sDbjtZPn5RoinwNMpWkw1FYdyju"
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
