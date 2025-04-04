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
    "4HaEWHB9Pxvc6GvCiscz6kgF7kkYA5EV5dPgDB6YB662G5mYyC7sKXAEX8pFt1Jmw4ag3vXsVW5XCXSxgWoZ2PGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Md9zN73NRzCwQuMxc45kHdw4vwfh6yb1moq4FCDgnwDwa8Raba7CGNCp6GqnT7hYxCnFWeMPzA8659TN8JMewVU",
  "key1": "2etBm8U4y7J9yfrZKSedJpXARZunmKtUmtMcGXD8xDVCqbPhk2E4emkW3xwohzKNmNH3gRrM9xKLmYgXPxi6oUWA",
  "key2": "3BmZqgA3mVZ8N8g6E2SEkyQcP5189qhpHvYLtBy3q3Y54jMvciCFCRv3yytaea18eFaKEDdazb4NvYyAomfNW5fn",
  "key3": "31KfWAU9FnDngdCamAxQDqrSTigwLWVq3UMjMjBsr8ywcSpWVGjs361NhfUsyYkvNqj2b64kCNUkgQXS3SeJFC3e",
  "key4": "5q5CPQaUGyvmiJriCnvwULq5oPoyKafQV1Q3Wtm7YechG2x4w2555YKfx9VtJuwyTmMsevaqb8RsjSG8q8stTkQh",
  "key5": "4yeV7kioNEFGq8zKez3FiXD1JrqoA7xfW4EY7TEWiRKgDwvrHgEbXuY68E4xFRWin7WYXgYExtdNz5wMuiqMCWCj",
  "key6": "3wfwGWrWK5rzRjHhLd5ruB1u2QXVmVHfSWwEfC7vgHFtqRUAcWM9FVphfWebJFEA1voAcK6qDMDJMXp13erCKQE9",
  "key7": "2KYD3tyKNqh299Hv4EYiuiG8upqnzx6SG44se5rB1UMNWyFTYK4zHxyoJCfXZXHZgbB7GWqmJgHVtAXhm1EuJGM1",
  "key8": "2Nm7oqKZdNZ5n6drJwMfxWCVbqvmt9vPHeKg3ZsN9Hkrg5oHbeqJRXDrTMELHwxcCNr8vm7c7DhFB5v9L761pahZ",
  "key9": "3yEDPPcw83y4uWdabjd5sQ3tFpFuEBooKDhFiWaBmZuFY9h8xCMkPQiABNWHcTHs4E9AGW3jFPCMcUuxD4KpQyYa",
  "key10": "2PKqrzPc6dNgVR7ZFV7prz4ETxyZo8RyiY7Wpwx4KpR3dnSc1gZaANVEjqLDJYrsn8x8pS4UDGKaktdeY3u2dwGE",
  "key11": "FXuTz8zdhEGXjH3JTeVSevM86mcdHyrXeMR8t6th9Jc9ijxWiKrvhYM25Mc96TDMFb8QnVEYjwBSnHUSZzAiXe9",
  "key12": "4zoYw11TtHCSzLZr8kC35arJD3ymzmt5NgXxuQLTZkunrJDdb1CchLtgubjNCGWxDpaBVrbnQLLue3t5NAPR4WEc",
  "key13": "5GpZzpxGkT7VU6e2mWZKqNsAhtgGofm7wVNn4mVUwXKyh2Nd7cD3Pftn6HAAr3qRwYz4gkGouuk8bvZg9wD6hMBT",
  "key14": "2S28kCKHiSdjEQ1Dy5pNjW3ah2UpNGs5k88jSuFGvsuBQ1E2FrcGnFSgAD4rPufi8hBgeiqpLkZJrxZomjo1GT3F",
  "key15": "3mk4ftGuDwssKUyAt3LvY8eZ74krYvhaWjW3MAxgLp1z7rQXhszu6QTzSaBGTVN5GddE9F8qXgoru8uWyDG1jG3H",
  "key16": "BEEga6CRBX2FaaoWhQDbZKYPQddLSA2K1CHyByQDjg1cp69UFcGSCB8N2Vag2qiawrsk8X9yQAAdHfP7Rfm7iUA",
  "key17": "ie7oBTYpzrehtdrJpfdSsmMN2WVN3r8LKWAz8vAJrFXhtyEccxUAW5ZFn6cbSgKomYaRSa61AGBDYYwtcp4D2Zs",
  "key18": "4FRcnH1LptMMqkjYGqDN3bbWYVwcdkeU9zKZFqQckV3bE8sQsMUhFG6HEAG1XVbY1pdkaHKoXr1VmDPz4nbqtGKA",
  "key19": "DrbJTPw74TPupLimR1t89VzhUrMDCKzMT33KH8StNCausEdeGiFxsvJkEbmQpMpnbdMFfdJjT1k9e3cStGDrhAy",
  "key20": "GhSeAEGYLpukSe6TnjEju8aFVGTnjnd1N11GcH1iU1pqUT5jARXTSjyH9VfHnBYu7XP2RLToZfLZTh36RMwP9Bh",
  "key21": "2TA4Pmy1Bq7umW4evHPyeza9i7AV6YS5JT5zPJwV47v5whypePYELJUmsab3PvDHyC8XdT48j6iGYMXkwrTE5Wtr",
  "key22": "3cSPhSoxSmVqDdRBLWK5AoiYAC88URqHm6yKVj43MrfdXw31ehDKiewHCryCnK9G2b3vbA9u68nrrmbuevQtGHJZ",
  "key23": "EMPpTUDxeUif8axsVMCTvYaE9EZ5YasqKgkqVtNx8nZdxgMLG4RPHz1qKLrg1QmEMg6zQxYUWvjrZVrXJwtWZTJ",
  "key24": "4sFaRyUu6axmmTXaTHt8sFe3PxDq7nJmddBZhiFGJdaykW3pFsSQNovhx26eNWM4WtfCUArQmPCWJEFmYMc98UVv",
  "key25": "2Fw6hopeRp9mMHYQv3UA29gGsfDrHvVabrquekJrgPBBSQ9ZMVreQd9ffw7w77B8bCHQ7t1TndWxhNLKU8hkrUzh",
  "key26": "3v7bwLu4RWtu8s9TwJ5TcM2VrTxScf6M38K6mhjREuJBB4oaNXbn1pVij5hHLTPPfiGeWfjJE2JTNA7haaD1KdQC",
  "key27": "5kpjvved21eZL7fX9peSB7vvop8nto2Ha8e36VHViLgVMmkqCEWEuEZ23upbVVcHCbb3X8KC568mfDnhrUGHKX7b",
  "key28": "4BsckNf7qLA1KqXGyQejxV33fhRjx36MHpKpuDCryzgF8VjN4MUWpzpLyExwEUvqBBeXENh7FVnUNZXHpeLdnTeV",
  "key29": "5rqEL6qoGYGVuJEPUtNk8FswmtQG5tes7hmb5KrcTHkJmnbziwnVs4zEewQuNE42yAc7u7oRJPo3Xss1pgMXLwc6",
  "key30": "4NZcnvf4ZXKouFBFMYTWWcWZfDeMQyAXFV2BYccudFGrGHt7Q53JV7XaJTiv9DKDRbTyMQw29erCAtjUW8JbPKAL",
  "key31": "43TCScnGGwy4ENx4pNSStBmACNjYEBaxazF29CsdFWaMrGuFfMjsLANBBxMJScBW71jwPhhtEUFyqPAfiqAuQcs2",
  "key32": "5ajFeRUTutrojEnhWB5C74x73Js7XtTh2iEoKvrtYRqCB6LMMdPAbV3ftxwGGpGpki8FndhuuQDUpSCxwHJxXqWe",
  "key33": "ejnpEKmTiNshTRoEWFxCxSZH1xRfgkAJ4egc39kpnjsT61mQikPRfYyGPjRQ69f1BFzmEBWDtq3DnnqG1ZFSktU",
  "key34": "rEDAUmydSPUr6RAzE3MKzckPFHzMCcyJDBqo27DT1JPxwreDH8pSxN2ZrtAXYadZkyKb7eN3HkiKaNPqV285wU4",
  "key35": "2jrEFDJeWgrMmGn423qiPAkTY5aUbbGatAFpYKPFV6DsLdg5ksjQ81PVAwV6JSdvN3STdFoaD36A8GV1bjydmP7g",
  "key36": "2CjykUCu8K7gcVg82Z99asxmsPGzrotEgp83YskHDVbvJ3UPzn3uj7SYycBVoafBzzr1A43ki8EXwYsDuqxmEZqe",
  "key37": "43raZ6gTCbST1hgRPRqYRg69CzKuRAAFfhqeMdfJtnvWtVVvzNggJDk3U5wqJW368HrFSdQswZpxoSN2AFGvbVib",
  "key38": "4brE2dCLqcoSaURhsLH7krMYwMTExmi5yyk3oSnFWNjZHwiPMgAQFczWNbbkbqUKVPyHSqUmzegUQNnmzVTHi1Kb",
  "key39": "3eTJoZzgRP33V9n4VkxDEAqev1ptBvy5JNfKCZNmSbZwYbKcPMmBqAreLzY25EoZXSrY1DQNURC8e8YZPwssKFFX",
  "key40": "KUDFESETopGLBeAhuBC8ktixVsjmb5mpVJosAm89949uRNuhiNKVbwzw9aC9buZuLoYHJrtzTmdANsJ6NrQPGc4",
  "key41": "4pvaD9b93SqQiQB637Dob8YqFjkpk9sW7mAhaTGycBzUM1rw2FBZ91Q55AUomt88ZCTZfpStpAushVdCgPMfTRhb",
  "key42": "42uzqAC4MQFcUoZdM7XqgD4VFSe1MpFfBB6qtYCiQtLC42VLzofEm4m2vTiPHYMzV92FEtMkHsKw1X5U5Q3oyEc9",
  "key43": "5irQr3P5kkJ19mFwmKv5FvfUypVQoMn2emYi5P4S9o5zZ6atrCiSTGjB6hJyY2wnVbeEiGdQqfBgu4TpLJvLKufp"
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
