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
    "4XFhskke8bKx3EniR7pBHTJkCWLzdZn2DvZbFpmaGa1eW15e4hbaHvHwsgh94zdsUwwZNkScWKLMqR9i2zoaDg5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Pgn8mT4yqvQ1yLCAeEUxYQu671ojbYF6mR4U9J89JGkVZozH2astB1mw2kPYc7Ejj8A4DUyebk9qshamQvAmcr",
  "key1": "2oSTsxYeGpKVxHaGTPbrQNKVUzRXasHnadwGX8QkcZdag9WXoU75LQ8w1QRwnTiAS2NWspEnXHNoX8tkBaaSFYrU",
  "key2": "5LqMr1dM1JeXUqmHtFtZFMYeyZYWGVMHETbofMt1dPdsob73wuZE2dwxJxtygX7jnVuqWJjqLNNAE1TcqimKBHJ9",
  "key3": "2MVKkLgHzYz5dBcV74id8fUicjLQhnWnn8Cx5XdFQZkiAvCtBgBdiRAEEJLNK3aeRieamVkBiCRjRhEJ1m7YY4pr",
  "key4": "252dyH78xqTMGL1KCvqot8zzQxvsJCE5KSsqikS4yo6BAt6iubwrobexLszj25MhaBaeZrUkKpoZxz53fDJwjcHD",
  "key5": "5euE6c5eFvar6fbpUQdSKWsnmAY4L3NbE5ebRVEpeNfq7ZCcpnUhZTm1jMcB67GEyPodV35mzRhnFWVcveoBGh4E",
  "key6": "C38zHJaEfn1dZkVEuSh5Y2biaE7jXNRJWCWZ8AtXjUZ5EeEMryimaHm7SpLRdET4XibevuyHFVH2a6ChMyZ128a",
  "key7": "xccenqvFemcsbibujJkek4mj2uVPWr3XYPvy64NbNwAqYy8NQMWS1JYjCZPqYr4PurQWi9Z1B8G7VsGAwhJudBK",
  "key8": "GNUb5mT4mHDmLdW9zojQTx9oD27toib9y7wZErDcNN4aJigokrUkahi1YZffozBm6PG4MBaaqAFXrzgDNjxsdFi",
  "key9": "2jUtMPnNcfYs437uP3H5QhQ7AXUkKjMJ4JupDy3fWLnhTZmnv3mC8BxgDufoNkPsHhoPDGhXKbkRUcDNGXHY4EQ9",
  "key10": "3CkLn2PRyyuFSnqB1yRiduBv9dG3SYMj9Skv4qKVYyeJ2vheFqtFdjyMcxF6Nu4Nr5T9DVQSvxQxw1ot5JU8UMZm",
  "key11": "ABiAfcpEBRzK2hGf1ygxPZ19tu54HWDiKT88SEMNaMdR1fPST6Zjx1Jv62ziXSi2DYDPrSo9LfeETrQC7iZtaUE",
  "key12": "GXZh1fk3cFkaPBk9avdd4tDqqQsTdykf5qS8em8a4p7Fyy4qwpaYDG6SM9sg3c3K3Th3bUaTiVHLsw3mRc1Kmkg",
  "key13": "3VZw2dN2ncyaXMg311WG8nc3SoMZr2jnZR8CCLqUkprMCsVdXqys6vqwMXFthQGS7mrYnADUNQXy3gKXND4vSNtB",
  "key14": "wP6Kn7pmwuhoyUTQci35v2c8MYCD7tBvHcRZqGp2jL91tFM7NAJJ1FToyuFedBWEed5zYpJu6A59mYCRdtGNTpT",
  "key15": "4ABJMMy5iX2bxKdLZzL6HcShY84x6iJ46oECbZYvPJhuqP8hbdbMAvEFhNnL4sxMYMontBaGg4R4pRQf7RXJfkcq",
  "key16": "4Cma27dYGbVieCtDbFVqnRAB35bQZcQPWVQkQuSLJ2HU5N6aTtEZd5bCpeoxmwYj4syokmnR4Ks9ruDYFecBgjgq",
  "key17": "4aW2dqwcgieR9x9mH9K255PdV1ejR7GsJTXPPVihDvjTyy5cCRuaENickDSwKt6456y9z9dQwVLUiauprDc2Cu28",
  "key18": "5KvmXMgLhwjaCikEALCys7yZSA9aWixNjsSMVQMuRS1NKCxJH6Bo3tnCQNEWotavcHjEcdojdDYja1KjEH3r7ZZ",
  "key19": "FVaLoEzX4STefKvtV65Cj3tFgPCY839zuWT3JTaRsxbW5YGPgGHTeqyAxZVWmJZRai99LkTTGfNRPXHBHR9J7Vq",
  "key20": "4a5YZrZyoSS18ULPtuLDRPYME1sJi2NuQgzrYBvZqMUdW9hP7YAxZTuDPivYH5fj2sHjjxgabRLe7r2VK9WWTZnY",
  "key21": "3sYtAhqLQiT7fYEyeJxsqbpvL8rjz4co2s9ofymQdEBtf8DTf2XmdToXLrpAjLFtAQuWcehxuCxUvY34C7ejeBhr",
  "key22": "4yXvMunKNai8uM23Hy4cQooGnYBUHK1oaCzQBu1Q9QqQtxc4bNzGbS6GMVYii7FFxwLXBaG6LfeVJry2hWhzMt5q",
  "key23": "3tvHv7tPC54QcXx2oZpiEiJXUdZrvHHDvxjzbEVFkAWth2ckw4LZaZVQUzNCU1VNVk6j23HXHEzPYvhaGRjmztnk",
  "key24": "5u3nnVuoU5Poa6ij7YArrrKfQcFbMgpKeEfPBFahChpyrfcDGZ1Txo8ET851WxVB28QyBmoLEBeKmnZFJ2oEn7Dy",
  "key25": "UBDVoXMUtNgSD5BKTfaqHtm8oSfa6CbquqRknEMW3LGZF9Xg4p3MKVJXH2jRvEpZdC5Vse8Ew3ch5P55WbS9uwm",
  "key26": "3cQ4V8fYhgDGHMuZ3itJQh1pd5T288iSQHk6BQN1Vy1DKDUrPEgZbgvE4EPShgkCWLzMKmeJDTYeBk33hKvqu9n",
  "key27": "yS3uFY2vCWxXbWeGk33idrWzt9rtNjqx54pZbzSZ3LfBrLDaSotmW91g2UWLDSZHHrW6KdcV46hi67giG7M78rV",
  "key28": "meGbSVz85WHFzbG41huR5sF7oDMDbAoauyqfyg4hBnMdwz9TZPXLbS4TwQGFJ95KvwW3nQzdg79ZW5yy99XTVKQ"
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
