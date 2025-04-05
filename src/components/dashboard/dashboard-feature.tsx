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
    "23mwwgBVuMYqzUfqskaDLuQVRzE6tiM4AwpGfdEQ96TdwBENGUZxxTU1UDeCGbSnVGBGrodiULbrqPARY3BpKJHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjctTrpxN8SyR5MTTc5oQWe6xJhPnVEZua8fA1xY34a6oajVa6W97PyiYrqZQSo2aXCCDhBiQ3ig93fMatAeNyj",
  "key1": "wP8zJfBqvXjot618WLycfLDAfPQ2ERpL7my36g5oUZuPmWq7sQNrfE7SsgHwNmJqUaKoLM32qJZL8AxrowfkZrT",
  "key2": "2rbvu7r6B84qV9Cc4kAcu51bqmXhNcVm2puDvmyT9SQfCs6vstHoETcWXKwEStW4rjMzTZfxoLBAX3rM6sPDrQ5f",
  "key3": "56yfPUGBHSgzAuXuGC3GEKVykuEkMzyYdku47kGyCACMffhHVZHbHBkFmPwy53wvH3Vi35MZwUTDcLNtoxPr4XnD",
  "key4": "2cAxrx6XxvFsrKtrQh98o8XLVnZ4c2UbAH8mM6W4RojdHMkHXkdHi4nq1iVu9tqadG6SqEzgHX2PaeKiZDCTWuDW",
  "key5": "2AmRSnf4McvfB4Cs9vuchAfc4NsxL78UvUJnsR4tzX6qMojQMQpkZ1U5YYtEtzMxtyaBfzJLNMypDTgs96GTSVQT",
  "key6": "Xa49J6sAMGRzi1kZzFMJn21xAEh8zCQzFj1f3hWamwxMmMrCbh6wSSjjzWUNzMZC7BzQPAmCqUKTJ4wKh9xcDQ6",
  "key7": "4fT7oAT8K1dWWaZY5K38iBaxsusB5HbGG1p2MukaNNW9vah4NVVkptRX2pdKPZC13y2GMNoyGvhxwPDusSPHuDFm",
  "key8": "2xH4mkYHHruApRMtrZyYQWTnzF9qKbnX9DQm94ToPSMujW2Ph7Jsn7EzZNtmYi36Nw7ePcPw2FVYdjzMN5G9j2qC",
  "key9": "4UynoWvmZZD167yxyeXoXmqQL5hPqrrpmzX1SonQ3ybmJsdta3ZgCK6fCXDwEANvHchaLZovBAJFW5griuv4kbSd",
  "key10": "32RUppECinExFSsUfTZBXnSLBTYZQqy5Huk6LZZx9rqnNUJiUyNT9hgSUfGRgdYYVpcXhXpJmtw1eDfw9syfcBni",
  "key11": "3kymVmQ6FgFeokakPzyXpDyr3W2DWuLvqLh27rVHGgJqzxnJ3oWkGgFtmFnMKDDonoMJd1VURt9NEhaNbUUBJPch",
  "key12": "4ZrwpxBH4w9i1iQiXhebDvnak4Br5AKCsebe4fAA3yaU2BXJC9dS3e9a3N6kqLnWpS8iFeznJirkNGtzwwGinbW6",
  "key13": "35KNUjKsysSfcb7UQsYWXfTHeVoFfRbNtJDasxjkMR1bQzPtiMoWnAooUQutFFDc8DHKV3XLZg2qrvDk2saUZDgT",
  "key14": "33LZkn7BeJjFiddtRnUZ8zqefFjMNnSXEWmahhCKtHBhHQnQbhtqHJ4qJiiToQQYAFhrvw5QQ4MkGwYooPubfCAS",
  "key15": "k8xZJ98EMkAjEfcddocgApHHXAj2CVvwfnPUoHUjaQvzq3bXsnGnvhnGUCiFAkZHpN76vWPwkQqGVtAg4UPqCr9",
  "key16": "3WVAFS1kcGrZwAiPv2BwfFG6YsGETEiiKCwsW2caegLWfVaaFV8aAigQAmBgNT6NPVESnA54tt2nxJP5G3hSYkRj",
  "key17": "4mhrnRREVFh2BbCnAKp6idnorzXorC4UYjTBvSwsqQUAkgJYo3B5qDmNVnQPZbAfA3SpzJZdWCmhdyWKXJh2RuKo",
  "key18": "5zkG7jvit5KwMWt8WLgKtHVjwdQL14sCU93Tw8YU8uWB8ZmeN2QuxY7FitHCzZvA2T79RP7YJdPbAVrgDkhGmgeZ",
  "key19": "4TTJqz8jzYB9a2mFaMNLckVQsiMVi4rq4YWbgAHeDtLhcJVuCLPLrbQsNx5us7oVYGgFh9LobdSxv1J6ob81y4rc",
  "key20": "CEucRmuxqBYsozxChWh5ZDhsxsHqW4a9RjQeuXuH2GNQRqNSTsShe1TrtHK8ctnG1unLfT7dqmo2zsz1GVnQSre",
  "key21": "5ejV4nrgTbM1G829DEvWMuT9nQi6VnqS6WGsmNt5RFExxTCgCyx5DvaoXEGzQgj7BnY7F3TWaKnQupsSoqtqL8ju",
  "key22": "2CHWSCto51EfQS71awhGxrKqV8shz7aFes7MFpj6Db356ABeHNSmYbNRKUgMeC91dzN5Fq2KzAFro5GXf88X7pH7",
  "key23": "4S7re4XWauR247rsqgbRJALHxJgJDCpWqkPtxbhoovw211ZyCsLzgB2LRrSWpSePRE1oV4Z17smXKvi95eCLFkQr",
  "key24": "G3R8tmDepZMY1Dbq6CbFfhxw7r2fv9yxTGM55Goy4gAJm4vLmViZ7YLuVLxxZiVnvidDAM4ZYWkWEZsKTg4fW82",
  "key25": "4S6Y1JwzvuXiaceWVDTFpXLmMoCcnxmUy4vFHkEJp53f5zQZXuiCZN5E26N7atMz9SbVoWgbfDifs9MACrTY2rHm",
  "key26": "2L2UJPnma3XjqeuA8wWEGM6EiBm7MHxZ2uzh4FDSXXRH63wt3epX7kkjujqHuo99aXgqDCiBohQimz2PJuLbq1ND",
  "key27": "5LumzKuJ6hdHvbCxMNfStHQNXCeWmHd4qNkmwwJ8oHzKFKnyJeznxHGZAQapXTBejDn9UcaLGpCBQdpXFKLvNZJ8",
  "key28": "2jWwZCZQzxqnTyEyagEuwMtLzENwHozHnSHe8wYaV9thfGqU38nwMg4Erfsz9hTKUmExwFaVtm88K9Nip2FyT6qn",
  "key29": "3mCbakpxcYVEoUg1KM46a9ZyfYTaqoPpAGGGpg5z68Avc7rCKXmiiBSV34Qms7jCafkKCQ8A1kQH6ABFQnEGerDy",
  "key30": "ci9K6frbLxLn1XSrUMwZ5DfRDpUM9iCb72dgxL6ffVoYSJaDCnDB47gcjNew1DoTjvq8hx45PMeo3aXzUd5rmSC",
  "key31": "28vJA539vZD5jY1kt4EgJku5itgiP84zDb9r5YBjGBvgW3jcBNFQehoeYSCykjPkq4tB1KssDMBXbYWz1229hYcz",
  "key32": "1yp99R4ySgHZ9Udeti8NLeVkwtbymVzyRW2YKixyrfixr3gG1EQrzo79g3vrT3bcXninbK4pqF1CTZg6unyCWFi",
  "key33": "5mdvWWqrVjbVDGM14FCukb48i6hJ8PBEHwyXfGFrE7nDNMc9YtzcDxBXqR3yZRgy8gcGp9T7dyJPnzSG5TcvJzFj",
  "key34": "4We5ZjfWkFsxfGyFAGwf94ebrbk4VHDGX32ceK1QWmLf91n585iGxGzmXgDGT1a89JhkA6pUkJpKP9icdvArPmhJ",
  "key35": "3jbrLJy8EDYMEM6poGeHshNvwgvhfnjMfbuQmgoLRgjapoHqHUA9BfSX8RvXSaG6hAYivPbpDe5ZBn6LugXQgpn9",
  "key36": "24szWmejE1nJ1etJ4q2gezkhpn3Ezg5qTM1jsnTS32SN3JudMM7bv2Cxoa19LVjZ65NBd4NEDZ1tcgcsVzwWt3Mz"
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
