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
    "4CPkxf86r1WnDnS3DGYLZYbTJsCNaugEqWQD7sGqmEkG1ZvLBh4JJbh9uaRkhD4y174R5U17rdUqT3T77LsgRh4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pbt8Pvsd8uVNBYM1QhWLT1425B4HXNhW1SJ9CQ28WUqktwheZJq7yAAvWyyKVBRjkWAkxHiW284o4SwawF9HLjP",
  "key1": "PFsb8WXN5Pnqbuy99Vy2y1msqFgv5LXuVZLsgTcM2krqpieZ9J8krexBGAk6tVtRkDzy7aqAeMXqa9uLxsqxk3R",
  "key2": "2BYpzojHnvBCwbYQ7NGBB5gB8BJq9Wa4FocsQtYrJ3Ure9y8fQV5fatjdepWk8sEn4Rbt1xCzvaG1TPB7pWYmxhm",
  "key3": "38XkM4mNq2MWVBguMvEthiEuGNztn6CqVqbk9yg7KHDiCn2uu8KnGKBMnnfoWpfu5cDvNt6Hvd8fvGKpwUXeKuJn",
  "key4": "4FxTgdPCxHRQxPaFXmZpYewWWa9BB8bYFdrJ3YBwHBVqpuKhJfA4xnTB7xxoFrSBkBB8jx6uu9XoxiyeZa2MyPHb",
  "key5": "3s6Hr2ioLomE5ykGdJeXCvfZqRBXnQ5eHZLyQeqrV4oL7unNALbFcGjTV28C16XwbCnYj8Us7NEyjrtXd8XXAc87",
  "key6": "L6gPf1PQyLkFRiAQbt3vzv3UntYaXjwFJvTNNcaN6a1jrvyP6sWrtK6tw5nTUCf7dGxeepjk37isDGTSWAmrnwm",
  "key7": "2jd51fi2ateXvWBVtwLUrAPSuLPxwsrmnNvYmXLTnvxweGvhjT3LsWNSEdcwfJFYmTvAVvoaY6MFfr82nvmmaPf1",
  "key8": "2zthXJ7irwKkBgu4LXYSG3BQZq7QCQXaphxsrXtQFFtDakj2VMwpc1oMyLRbanbsFjBc8Mo8bBvcigW7EPTdz6mi",
  "key9": "57UcH893BjMkRDy8SgrqknUVi437XX1kM8RNNt4jKySp2GHVeV3csF8SMGf4Ned7tz5JBCWbdEgqTk56GKuyRj5J",
  "key10": "3BsvnEbyuv37xjvqBDtn2o4spT6N2QHz4fpQayvzHH64J8jpqDZbe3EQN5TqUQ2BcddSQG4ZS2gRaQ8RUqPDPw3D",
  "key11": "5VCG5JFH9BKSnSh6HDS3qEM51nmzBSBi1BGLpjuzAzqM9keUYzR5cypKwCy77zFwEekAteVMhHe7uLJmZPUsXEwc",
  "key12": "Tf2VLLCSRqchbqDcCj5gRkJnwNDGgdRCBxiU5U7748E4XBjQgkV9xMPqXgHhxXAJ7BW3BTBj2a13UkMPAaaCZDK",
  "key13": "2JR1BUdJbb3ho6AaH1WwGhbQQrPAHaMATV6Zn6hA7nwoaDxHE9mUVgmfcDkf9HpewkThxPYxnp5SfxUJa6uxciPn",
  "key14": "9XmxS1NEnUaYMepgKHU2vPcEBo7kSD9TuVYybzvpRveSy4mk7CUqpxHjbYKMnVHJQEc4mVLntx2XHNm7ZRerwYK",
  "key15": "5V8HuimNKAQmfjW3g66Z7UWrQAWHoHw5ZiqHfNxgfc6ezAfwRupU3zwYPAZsZeX4jjpbzztkr534LGGvmxEwqw13",
  "key16": "va1MSba8QVsiotALEEH9MtKfxFkj6mddMaZAUscVsxPJCnJZ4HfJE94DgrxJZtyfpkpE5F2h63bbwQnfSuuxPE6",
  "key17": "4GdVbxvqCaEytM8UQf6nDdVCLs3rCAotoAaS8QDM2xx5N7ChZftjqXm32oRbtyXkMfPpuRf4bnkMr2gyuvUfU9iF",
  "key18": "2S2imhZz3AeNusuSUc91VLU5gQfHfcuEGZKenkgdKKVcVv21oCGjh4kt43PcgGJ48hAHXkdTaMSDeFzdhm6eYeMm",
  "key19": "2jyaptJiMS5JAV7juHFVAnaVc47Y5wvTSsCrga4PgdB4QPCWTPpwPpLasy1CjxXq74X14jpWJPNakZ2gAH27k4Rm",
  "key20": "5djr6NZAStFttotSW1UsEkuN74yVbddYrwgrBkqNMutpc4wTWiCPKoNZv5EyuTkZfWkjzEhm1D5Xj1nLbxTGRtkq",
  "key21": "2KZ6biWzbqgBKjS33xM4bV7dnbRsTrPYV9nDTgxhzpExKHSR1AtMte5J5H4RmDU8APYb5gimxqquYywEkM9WF2Jy",
  "key22": "4piyd6oYGfzCoMrXxREb7rdFv34S6wXKSH9MxCu9HJtRmyffPACospsku5SJWwuNgPFismyQZxXQJ31k9izMyhJ",
  "key23": "3dwyoJfC4snrGWBFMaoRoLKNGqV3PbXp3VCvGWMZLTxqfb6cS5JzKTpFr1D58dXb7bjj5UQi27BRNw4JZ33x2e2J",
  "key24": "PaZ8GAnT5f3PUiXsTsmRpLQfSscxysFzqvJoqgoqhKvNgbVWbCdhC87RHPgipeuiEyTT6qDbZ5QTRtW3VPXdgFD",
  "key25": "3S4TiuHfcp1xcERni7s3eMyMhjqfxF8NUE8FKWJSQVwsTs5juNUBLurUCZZN4JcGZMp6CDSSFAvJMvgFw5LHKGQo",
  "key26": "5qkExuJPceGPDoC5M3NAJsUb3nVjGqZQxuCHk4JE7epKd4zm2ZbkittKEPgKwiT1GT6PBF9QoXKTkVvPhg6rkqo4"
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
