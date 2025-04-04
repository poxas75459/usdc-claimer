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
    "4eDzy926eZkFhGi1aczTwF2x2XTUstf6xui7Xscsw6Hh2xJKapMDdaomdK14FAy4eLkmowmnNXemG5rKrDpC6ueG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1urdpcNV1mbmsddmKAsGXKaLmPugU84Fg5XJ7ory4G69i85C9jD6YBnF2fP8YWmCpm2HWZzpdYquK36jVrNgUS",
  "key1": "4UU9zKKqA54E8dV43acFHnVJ7aynSTVrJoZpTPvSVZwesgMY1cuK9wsKWNPxFwJuNtxNcb1XCFo9v43skwdn12wJ",
  "key2": "5M5oNz7cJRhG2XLQMvMRxoetVWNEVMmZCERJiowvMSoKoyvzXseqcrQpt5nMDi6a7T89F9gR5jDZAXzYMTww8eg9",
  "key3": "2VD325FhBZw4H1nNPVHqdbtYLNLqoTPvuqGdAvSzgMEKax6xJqtw6iGKx3W3Ty5y6atkMj5NfN8aJVahdjhzY8pY",
  "key4": "5DVjibcxg2DGYBnUZLghsBPSvdinGN9DQsvDK9oNUFZufs1SX1fZ1gAdxMzKcg7a2c1QAum7V9QM5XMtc6QHDN22",
  "key5": "49vM5D7UJATCh5RbS6wtz8Z5mXxmdLGKAmc4QgxLMgQd4KYetiHrLiqhesR9wLpNMcbbcXnXvjRwu4HJEjQjp1vH",
  "key6": "2eEDYmwwe4JAEw9PQ9j1uH4emyX7nAJsdoUtV1GboniEXQsiAnoftQV3Yp72NTeAYJhCFSN6ecbbwRD2gJD4Krsd",
  "key7": "61GvpX3dchx8HZxRiKgZhnbg1kLYAjdDBipgEd922BoF1ENKvj1xudtDG75KnpF6aobknwsDzzrcXSNJPaD7LgGF",
  "key8": "2EUD3fiV1iQJbnoC2S4qgDUa5xPAbytHnAyxQ94cUr3PG7ZvMMWn72MMNCwwQb9Ag1Nucmbuvhzqp2aoVjfZ6pdK",
  "key9": "4Af3mXvsWXtWdbuvbHcH9SoTtA54Qw5r67wZr8TcVCMzUoQgXEMEQxFkS7yyT1jH6NXzmnTUhcg7eNAfq4SJjqsH",
  "key10": "3icynBLL6gssHQy98tFWQzdoxQcYXGEzw9ouM5XDnmb8GHSsQ2ybHRPFKscaSmp31sDBaAiahUsyZ4UBFTjtZRMR",
  "key11": "3quop4ZqwibajHHsvpMgy6m3fR3cMbs1TupLmJhomxvf7TDzSZQJx8KopuyU3n5HkU1majzWiaeyDKiyq1auCRpB",
  "key12": "3M9FaXm7LKiEFvBGp4dcTJQCSCKsRV1UZpXwxxhYXH7u4kWzPNRLTSRFLYkUksCPcSG2uWy6z3bX4U1BHdKopBBs",
  "key13": "ny9r3P1FL6kvAB6L2bx1KEZ4iVmvtRudCNxYRHxN3VAL7ke5B2fpfpoY89qhWecwUp5tDAZBHvPMHiDbriwH1VT",
  "key14": "4bnPy82siJU71D3CzmqD5e8RVzNHSNvRGJKEjx16qxbmEpwBXP3drPieJfAE4F9kHPDzUYue1sKAFJJWDbp3w6nN",
  "key15": "5mduw7tyNLAX7mqEfSXgwpdaZx2ZsG9HnBnCqkBFSb7gQ6C54XWVFAqiticz8fQXNcaGCegkxQu1vCdgUu6wDoTE",
  "key16": "5bdtgya2W9Uqpgrzfo512njzMiGE3pbUN3vEPQKq677o49MJ36yGcps7CrW38x1g19owzN1KDpFxzHLyZE8CRYX1",
  "key17": "238fHRqYkMj2MweLUbLtGhQSTQhLirFjfgJcXpMiaKrDYT8HD2jaCFyhaqtJcD29ajr8r5k1W3AzXZGVHdTZkqbL",
  "key18": "5TUcSEqNC1JM6rL98CFADwXtxiDpLD1fWP7ZXWiz2V7thaEgkNMZNpFbrcNRvMf9y9PNxqNfWrDEijo5ZuRnFHQn",
  "key19": "4P8aEAGJNUrhTTRqvDr4uYqsnFwvMj1B4cUAcCZbu2NgN5JY5amzNPdFjGLDJHPCvBtVWxh6TJZ61i7Fy5TzcKxf",
  "key20": "28UiQ9Cs2QbY4KxdE4exBb3NMbU7hVX5EBrBcsKENCreqkfstMFfeJkTkMJwTNqKyedkZh89L9sTBA7EATJAgxuw",
  "key21": "3fQQr5jEwRqTZFpmxJgMY3VakXRMbsGi2QDwYLpZr6TGomsAHtaNKYayBgJewcmGHVSyEfVyT55pY8AwvHjfSWLW",
  "key22": "2St6qffqa4BsB8dUCZTZoorUMBFem4Jc6RPqa1KvvcS4Sn2HzjGU7K2sxGvRdrpGAxwsiBGoB8WFs6d1ir7uwfjg",
  "key23": "4FJFtwuQYwitQBpiQEQRzn7dvzV7SPSxHhyjySgKGKvWK6eiaibEUwuV5jDUaqUumpdyGoB1V6Bg3cBdxPDHTveG",
  "key24": "41FCKVShke53iXpWposGq8bqXYtVEaG7w2jaBCkQRQiFFyjKJcqYNvAfA9YzFAY9NEQ1JAoc5PB26aGwtpVNqEYJ",
  "key25": "25JDPJU9xXHPTSqj33525Z3BhH7hnAdnDhYzQ3KAGpuHsvMF9iHrxjBpdfSk1dwu1STP37WVpnLWcwjYT5XRBuE7",
  "key26": "46DodofUkTRVtxdMCf4VHfv1D9QDHFRHJnhQRkuppMBaRJgcXPRMPkNWThL3svWZ5VZSXbGteDRrFsQyte357qg",
  "key27": "c48aZ4BrJFgJNoTSME6FYtPrzAx3LaR427sy852GymX8sxGaYXj7mH1gD4gCo61NbpNPEjroK83u2ry5uATvoRD",
  "key28": "9vj8ff5CvP9aCbX1kzVGfaaaLfpVw39uufmRXCYWB6bUUVBNUMdtDcwB5vPtmhPFJnxCWEc5BiEG1y9NXE6W6k2",
  "key29": "SPVfib5ydQt6fB65P7pqNV2iX9jEU6BkkejSQEM38m27MGWn5qzZP4NtUEtfzbdkujdBcaT5xEyB4ytqHRrutgP",
  "key30": "4LaKodf64NnyhKr2GyUySSpLXWEGF1kihUQnTf6CewidYpTPsiXPdKxJU8EgKtABdfEFMowyv6NL9ARQtRg188b6"
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
