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
    "3Kt9YDx8keDScQY1avHfZtNcetBn4Mf6NEt5M8LtciZqJF4ogZYxSzUQioBihXMaXsdHWSYcTSntujrveSrE82vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43sUzV1imjwdREnRHDJchvoE8uGxLJQSEp6SFacrSkjcvob4hNik1XpyhCo6BbLzrB31oUYMUZ1o6B75HezTjtL",
  "key1": "fggLokhxgYMvFw5ZEGfYmKdwKq6VWSD8eSjf73AvAcNbW6o9iexkWvL2uu1AKW1fLDyazVLR9n6WiBWQGtfWFqw",
  "key2": "5yRenPHrStNdHCDiM38zFZ1yZ7q2jYK4YbAGHf2pKvJNQt5nUz7HKkwCAT7hvTXrezf3o9itCF9SLP25GLAMggAY",
  "key3": "nTyE4ntCrkmQFr6j243QC61TuvtYSQgE9gPHiC4FhU8wWP9zXwnLEvVYqYyBS328fnfGMdJrw2XrKHBwWvdsmPi",
  "key4": "32tcsWKhnFXC73YqZtxNWQMRndoXbCe5kxMMskbfDEr1P8ryQggiY4QYMiWP43jsQVxBDgndhA9BYTWwxunoXX6G",
  "key5": "5Hz6NoZaow2RfN1JE2o6HeZSoLVvrJ1w9Vqk4Fa78BLwNM9xZ8HYL7TAgcL7GZUeDC9qMdXwqpjq7JRK6WzkVXYp",
  "key6": "3tMC67r6pVQpMpywBNm77mBBsNrFWzc8554p1WqajzQzsKp9eEa5dCoiTSZTHUPpFWgLeNqcFESWvDhbvnVeMraT",
  "key7": "4oCpwSBXfDQp73NQydGqP6iaXi3efpKFNBmfWUEwxf7fVm3kG9LwPQPZK26ZMxgLJDX3GDBhMn3tg779MBRYRv9w",
  "key8": "5dvnvwFiHkbna1Es9bYnBBRCvJm3bKRZpgJ7vginsvhERgB2PjrKNbPNBA2VuabCeHaQ8zDk3pXKVBCpGTk7KJSi",
  "key9": "663z2ntWtExAH9YuNNfBDeVix44T4zKS63cSdv19WiJfT5pvjgBQq8g77Pd1avTnR4N3mn6uWhm3eWdg5sUEiKk9",
  "key10": "pRNHgsqPaQM5TugYbuo7adDESDWuDNp2w9X9c1C9B1W4QtfmMyX8LNjspMPRPW985dAPhT8DiemJQDZpfGummwg",
  "key11": "4CfzoZFGXr3jj6M3wbvuCd61a2iRRgRFcEX1Mzu71jQe5c9vbkfKsbLVxG6Z8ZJKwKsT4xC3WZBFkUX415dGCBjP",
  "key12": "6Kw6XTRKKBhcm3GJqNhA2tZZVKq4BDgWWpSDK8XmQBtgKzKi9S32bGhG3sR4Ev6dLz6KJWAWVqCWiFeThyxCKnc",
  "key13": "21pFrcsb5UAuyokDYkmfYjpQEr2PK1hBvKxzbV5VE8m4NXoD3mPDVuTXbeGHx3fmdJLkqXQyYSfWdzoYU5shystE",
  "key14": "3R2tHtHmGuteVNXWVSMWu5fzaQ5SDKtrtToDdNJY1VFGAXmT47EPWaXdKtT8HDx1EnfJZnxs3dzKmMfa3cRKpTkS",
  "key15": "xSFe2QmH64HfVtpnoT1BuxwgGWo8VkQe9eTqPrW1aafyZFrBG6V1C1h5Bv199N3SvVs2YWP4ckeU9BixHXw1NZc",
  "key16": "5Bv6vcLR9ACcBgjwgQhnAyg8nC4kmonGVefXweuZohBiW2o2e9rqSca2TgBpV6sCr7YRviarMGnp6AeYPqhdPHQp",
  "key17": "59MEwiyzhvRHTqhEzE2eBnRDn9pJphdnV9nbVhyq5YNn1sHNdKuWs84DDUaKB9JizosvACqqavgWm5jVESLsAYJ1",
  "key18": "PW8EF8jgPQLszhRkmbU8NtJh4cqDKrLQKQh4jXAmtwhJD4b88RaRxoVktxoCgeFB7PGmxSBQbepjqK8cfgtzS5M",
  "key19": "7pqWKphLWpnbNh1jRA5rfu4gTE1gMUpaw4mG7hxCxVueUaCcpv4ALeMuxgLSZ3jMcREBHU5MsyKrWLwJGYixmmd",
  "key20": "5tvp4JBk317TF4DjKjDaZ5CpBf54iz2AWBm5z9ZiC67wc1hPX67QdWsWGrgL5YrUj7yCfPNLihfUGQZX1uQArPSS",
  "key21": "5EMSmGbNyeEm2Gz7BYi3wNapJAkNp8TVpa67sfky6QFQmDQxYBp83HgPsS9Jkk7scA38h1Ko9WnyTLfSSCsNzoRF",
  "key22": "2sQiZHcLZD1doKshwUK8XF5RMndQMxxVC6wPyprohvcScGcuogfxtuhwvrBbxLh5wMArgi2CMXzh5V4RkJbPii1P",
  "key23": "2N8M8kt6ea4A7QXL3gMeq3evNYdN1kxAWyZWRLGLviDfDmrGZN8cuUdXRPuDy3nzajPkcAqyzdd9vJrCSLrGcN5Q",
  "key24": "5DVHcTWfJbvf7pieVNA1aczZbEHspc2fJumzkfGKwVfcrQ3xtDMwBSBmVeyYLLVcx44RLvyDZeCMT23CBCDCDaHq",
  "key25": "2agqZ2tcgL9vEP85ekomy2Y58Zbz7NaHxrxfXmQgx7251hVjqeGGXjBtBcm7tUKH4htzdenrNSwHGAwPg5GTsy4d",
  "key26": "4jaK3cZ9ojjRVcmYKjhukhSQ5mGbxyPpzqnAvjMhpvvBkccgRTwBgqsTeoYkNdgMEkG73YdVksRNkCNw8gxQJwwt"
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
