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
    "4XrE2ZtkzmE1r2Cb2p4SH2LZie9vCniuPEWzi1KNzwjpxb87yMJBBsbhJ6CKEgLVpXn6ixBAgpWww6viX5sEQE9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24E78TUvS5DFnJU1FDmzUaG5SXtsLQTLBRywEeiAkCw1VeSEhG2DFHy3Mb2bQk7BRWM7JbqLGQRCvEfn57NVPQ9j",
  "key1": "VMSq9AvkLmRXYAdfXQgmQj4L3CfPXKTZL1C1fCsJMSizaFLMHpjE3NNLfZEAVRn56gTDmuUoYwVJixiLUS9nJQt",
  "key2": "niJqG1eFYemxXPh7cVEPRqtF99NnbLU6jqSSn5r7cP9nC742DYraRywPVcMNn6PWcGeJbVS1hwX9hZM2CrGtLU6",
  "key3": "3sX6Ujmyqk6d8XGF88eWzinwfhZdjsKkRKn4t7piZF1SPdRedXcyTYd55iN2xkAwpXVAMH8whHE2DrDdiJfhz4Kk",
  "key4": "3TXQWDSZaEGiGdNWKNDfVegCmZ38qEhxg3VqDc2Jm1f44N41wy1h9q8DcjbKoB5MjWi6ndvg2rMD1ki9V8ifNHZ",
  "key5": "4XA5cHZRkzbZKAKKHvZydsKjroiNRHszW2ciTJqU9qojrvWHDk6r46u1hmsdcQ2QmoQR7N9E2MDzvfte2sdPnapK",
  "key6": "5C6GnmsT89WgS6xSCbskHtEddm6HkCygXsDWqn2vFC2kcMxnkhGF9z8cK5t5aMpWMp6Cjz8Cm1Ex6VbcKXkE2UGR",
  "key7": "4dDx62F2trPdzwxf4eUykQtWYCkCGnjCByDZLCdjBCp3LZXdoJXZjBAG3sgaxPxnMa79FXkKh8LCLL9bPogNH5mZ",
  "key8": "5RSzMV2wbzW7pNeTBPTf1NrbWcsRcqX1HGpQS9SGrAUXeqdDFJ7s4GzsYactmpscMmxoCN1oq9i3Z9rSaJL4XzLR",
  "key9": "5wszptrUsDptoidxQjUwK7ubxdBa6a5YgbyTbJCRskrLy1Jf3zmfWmMTacVpQB4rTHZmq5HQ2pMKPYLbz3bAxekz",
  "key10": "4Cr5H4XK3kjSMiuaGXehc56VdY7Z1f1DEX1aEtXa5Sp6SaYuaYCiqBUB5TZxhNPjSzPoSomKBN9xHt7StwycAb7o",
  "key11": "5XuyTHfmMq7XAhLrzcfwXhLDyKD9M4RRcGDr5n9zHG7qhZvrWGezVKi7wKKEdxaAnDHHz21zmBPTLbEYn7pt2CYk",
  "key12": "3EhHgLYJ6ZzpxZqRfAo8B2SW4jV4WDUy66M8iEtbZPC4SXAai8XAzj3jUZfgGEFZj1QJNCvTNYyU154cqVhQ2hVd",
  "key13": "59pxqgGtmhTxRKe88ZFFNwUBwJtK8HWSjme8aJuA1QjYgDc15NDHuSm1PURA8mAo9pWZe1kGkzQ6RpM9rnRMTb2w",
  "key14": "3nNpsTvhGq3K6yyJCNUoqtYW5hMnzsdMo5dUyXrAmsZg6HN1yf4LmPQXJSKLyG8RSp6Q8EMAxECCipwXxpTLndDj",
  "key15": "eiq1ioDkJwoMBhV2RCoV2oF2E9RbviTxoRWretou6D7fRZAyaGg7gGBLjTnkTD3wUU4USCbnoQZkrLa9f1DBwDB",
  "key16": "4JnKfVG2rMbrgBfM3Qqnr9dcXzLfCbr7u7NrtPpPhFKnpdvVEbJGdZ7DHpjUzvgQHNpDUNGVaNn9zVTqRFhMDQfC",
  "key17": "5u4REsg49KsNaY8J6Er9d5EqVGbfaD51ohVAVVZdXkMP3LETVR7iV9m8gse1YXd8j1wKpf94t9UmvpLQuh4QsiB8",
  "key18": "mHAsZGqafQpAXpkbYE7pMdXM1nDFsmZUthWymN8S6xXtpVfEjGoodZyTjDBQSD63zaoVGdHZzBXcmPs9z2U6fgw",
  "key19": "nWokfpQuBE32ibVXjEs5Ku9WX5bmTSZx4bwdNj7kwNrxdFzYaarxFBKbD5HS2F2vK1ff7rihNFy56oPUabMiXjB",
  "key20": "RGK3DniEKiSWGJW33372rWU9xSePVUTAP4CWBcsrGq85gBFBq5hLrnd57jzgoLbZFNzqUr3LvbtQzz47ScKHKLS",
  "key21": "32Kqdc43BXNoanqXPUzDy5G7aEjZSqbK9VoEs98Peu7tPrhHY7YZWnUk7bNrYGWNmJ4BaMXwrtAfr4wZSCC8sau8",
  "key22": "28nGfVJ4XApzrGvXz1vuuv3wmdhzmm6rxBGA73TeJmCFzrtGwCbKYeStfEp4Lzax6k7ytG3DdmsZFb82wk1DCVMw",
  "key23": "3u7dKrSMqUm8wyjEhN9kdRBPYt4vekJdA47aPsW8Y79BDq7Hp7hhQrUTvcWLk6GFiJrM4hdSuktxwrqJdm6GHCpC",
  "key24": "5tDYw5JH7fwvoGaqvdUN2BjZQcLEbzmV3HdFChd63Un1egy98WGreQ8Sfm65VB8eg6GeHyar1eLLYvp8xuvwfYUG",
  "key25": "bJXJEGVRhatppaavF5aXhfqPhDJSF9AzdGegMp6gcjb5dxLpmq7QGpGK2yvJZqUweVgkHmC1wWQWG5f4gDkAaMR",
  "key26": "4Tw9ibK7f52PVCtDQtXuj6GmuHM7kv9HAqQTfsJhpfAuP6p9whz5xE9NdvzNA34vt9AfzMbwC9KGqxM89W5aDbQZ",
  "key27": "3ryBFxEacVr8LJcaGrxy79aqpJjSB6s3mt7B3i5wvCjFXCzTpbSoBPoD2rQ1ewgVpJYusSr4bwX2cJSaFm1AYbgp",
  "key28": "tJzQLoxVaihGoUtmvzi4RvueFX3z6tnxjKfiSePLVuduAsKxWh7rBQoU3J6NJuVmyJokwsMDJxSvDiEigjWCYoE",
  "key29": "B6J5q4fP5VFXQSY5471UYmmrJuoakgEeiwD77UQbA2SzfCzVqcHkYgnS3WkoCDzFX2qHpLFEhTBxLTChnp3Nkf8",
  "key30": "5UcdqAdnup5SiUL8tKGNBewmYnf8swqxoq2xi94GXhWwLGuxs6EoMJWAFveoDaTWNZye6UUgbwYY1NaLmKQtTPG6"
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
