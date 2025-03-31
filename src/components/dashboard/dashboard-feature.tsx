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
    "3UPTx4u83TFL3Ao9CfZSyZXcSXe5AcosjAmKmU6KhWERES5huvauPRVKtd8v3AE9trAgXiLa25rgaeDKhTVqKJm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZAseL5AA44J3KJYbWWtNxigEH7TQynHYJB3EBs2jQHZHiwgJTXrocZYk7C4peLNSTTcBYudcFVQEpi9Y6TU74vG",
  "key1": "2zGjJCAqaKDBarRLXW3Fs7eWisnbZb6XonzUineieL1x5guSj8TCejqrbgQ8H8jHZanFnyFdFprU41NzxRHuuyCn",
  "key2": "cjUNqqyqeuSFYLXXrEvqrwN3s5gojfpqczcc1qYyZ874GH81nFuNcfp5GcxSFB9B7VaX1C3QLPoAxH7fJZ23CZm",
  "key3": "2VfTFcorJKbEsQKvehsTbk1TSa5gAAf87deRt1Z6DMjKQ8161KdqBTdyrNRw1YkewwpwmDEay4kxVs6MrST5dtAv",
  "key4": "9YauTHADu7auYy1EAFKgYL39CyUfSuUf7WXDuvVton2EWPHT9tcWZJDfZREin9fbMZeTF3FiAvVYXbFw426xzcp",
  "key5": "UwxcwkPjouf1YXuDeDVVhPVsbaXRVtncmfiQW6bMBSeVw7Qv8adJEc1QBsakVnxFkGri1HVRMsR48VBkQkN8YRc",
  "key6": "3BJ3dyF3jC353taFXx3q81yC3nZC1cfBoJ12grZrajU41p4ZqM6kPum4fy7AQ9R1y78b6cupSq1k6n2hEeX7H9dp",
  "key7": "2BYKT1fHo4Mu6cuybDphU5jXz25d3wvmvCuY1hLZj6RDdZ44kjfESrcpKV47BhJ6wVsV4hiujwxwcpSsn8nfy1Tx",
  "key8": "4dpgvaWAsucD9R1XU5R3uLKtDRGH24BgMRp2CYWAZ2WPdU3EnZ1JexmpGM4WdusSFTrzSdVEidqnyVuySq3BvoiQ",
  "key9": "67dJmNWh3TZ9s2pMjZqDQ9b2kCWDPgEhw5wmcZkqG6SbfK9GAyy73Sx7XstmH254rkZYRdW4wpUJYkUqpiC8An62",
  "key10": "3oW5Kw9TTQWLEcjDukGPao4L78Uki6k1YGX9jAz4mfEtJDykZ3d4mVMdvrnGVEJNZC7tMGx8c9yYKceXnSxVXW13",
  "key11": "2R54wV6spL9r8rS1rVjv9Zi2Ez4ri1bqdLgbwYGEhB6P5uenS5NgCNqUeziNVPmxg95VvfJ6GjNxYThCwGGHbtsR",
  "key12": "63PxNqyVAYDoXmhNgeBxybTkQCXH75DMXMsbjBViqbnMbGLKX8knTE2ea5N4ytbTF2oq6AyoXqioagoqBpYSi1Kn",
  "key13": "58GiekfJJCEdz4zo4sZRJV5wLSeLU2CNGQgh4pazd5inFHXQtsEUWSYzkZqrqQG6kQkpqzmscweQ7H6KcbruWJZp",
  "key14": "4jvxg7EsEShvT1cb1fNTRCFemZibrGFSQNegJMMtWzUaQXBJSZVWDn96p1QCTejuRAFrtZXnX6vprrZesS13rnSt",
  "key15": "a67eDepbp7gzexTbSXKYBX7SQCNYgUzmconqMh6UCWe3PyXMXQSrNzAgGhs9aUEShbWkD6hSPvZctUwJJ6LyAbJ",
  "key16": "2piV3fLjqBG6K8B6S8xEhdFDbgCpbCZsP9LNauMAtcW62RYxUPhsfULfPXLecL7imWPRLwtwTasVMxs25jcewHm1",
  "key17": "4ewDLn13hRv8mC4YxQndDNeSQmN86Aq78jETMLYSjta8TXnHU1zi1pA5mxodRvEUeFMj1u5CvCF6fkdVK945BVUQ",
  "key18": "54pZEjMnAJQaUu2m1jbjVYM24vsq6EDxcnRjyWSfe5VwSWJaaqC6jjEfy1mNhjZfUDMEmhCbA8KbtgERUvAsTrtu",
  "key19": "3fNfYgCBVA1Q5GwJZ5wqwSH9h2Lg7ESba3M16qLPQKNdQZ1BqKZr1hoU8eRGmvwrSMMehCWsyQDHaGfpM3dYd9nk",
  "key20": "XVnfWpPJV1KiTAB8tEHKoeBMySNZoeZyrqENLm79SyjUo7rqu5EhNjSFu5Kz1ozxnAnndQs1eHzpcYN3GJXbuUU",
  "key21": "5iGjSWjNjaaauMFYa5Ug9mcDgfKh6JdxXS8rVTgnaTNDBjiVMcxhhC6CptXaehHnjYYQiDW5gmUQtGVQ7kgx1XTz",
  "key22": "zBR8AJdq4AZgANPPfJnHpCTWsXGEztT76pzBHHoeF1FZUhR5nVTvYSwME1BC9QKsYg3RNo4NX3vRCbN6T63GLMW",
  "key23": "4wGjMG3ZMKHkdFH8TnYwK9A1zisL4n6oyfrPbM1oH5fYKFsJDNj9xwmYQxZMYzoVtxCFXbHeyEsh5RSgwLysh5hb",
  "key24": "3Cihb5DkZwhjccjA5vXTGsPmLhiHqnYFJ3QotHDAvyKk1f7HmBzjCFVsR4Q7gPBgCcoRqB4ioXtFYSRoa1FZY9fG"
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
