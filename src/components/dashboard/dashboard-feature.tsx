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
    "5iGnwtgaFmSP68kT1ZPrwVz3hjMZWxcqN2eUEKJVv3BpFnabkCBRC4bQtrgqPLbBmj8DG1C3kCEztEVXEL2ovzdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32KBw6QMjAktLK2zukXaRG5i6gQbPa97Qh3F1KvFnRWxrcR9DF7BUaRVK7xyaXoUVTRqNWmfGsvFEGbNcUpCpaCq",
  "key1": "8einB4HvuUDj1szMfBYx2b79uzjsLxLd7XYkA1H8GPXLJRUMfVvWLodswtyuagTnPAFuQN73bfvUAL3cNdaU5oz",
  "key2": "2AJuTC3WzuwpkaVuxRMqttH87ue5jQmQNYGZyAhRsY6TAt5VmKny7ys74UQVRfr78ibBRdqRE2Vs26ZiNjjF2o8r",
  "key3": "5RoLMCt1jKK28P27EjH5bxxBmi2QEUHhe42u7vCWBfgCvb2zttTzQspf23XzN4D26Jihf3gjRURNpmHrn6hxAjii",
  "key4": "3uV1gGRmkG3dWLz1TiCbL4BZXpCQ2uBfethVJEKYe3PPDABfiFM8ArBGePTX9KEua8CQAXFCXeJTPgjg9nhfQiqx",
  "key5": "4Cwwe47tynyyFgmiKDZFBX88XGhvRTEmjRSnDvr6sS5vLuB8FZrt3kdRZC7A11GC4nRsKiPrcpXvzhQDvnutMDMu",
  "key6": "55RUsN68JMfBqfmuMPqYMvJGTEasKv2ZSPLXrXzD4ehY41R4Sh7CfJktZYRMdL5cmyRbmZvwF1yZPXAnrYr9Bzey",
  "key7": "25rnyJHkHmd7i3JFcwP8Q3D8E1DMRM1bBojuPcbYJnzMyYhyoGa7PNk4VyXuXtmZmAFgL42Q6TukRTRmshMxBCqQ",
  "key8": "2J485N6UQuUSE2fZriftQSQEigKAydm5Sy16C6T82SxEG7d9xpnJLKz4zGDUj1cNXFGTKeQBW9P6xMYK6uDUpbiw",
  "key9": "648rcRoVNpuytTVytjgy5zi8RV6wHcUuWCqM7M6zApZRNZYgLn8anYLmXqLmSNarrcN4eHgaz1ApeXUjBH1oYs3",
  "key10": "FYUUUyu1bPj4aNPJW7Fs9ySzFHkQUTMEiuv3exKNDNnnGyK4roD1iXx9HuzdscDEY1NKerA41NpaCoTPv2Z3BFR",
  "key11": "4qQsamZdN8jGymydRFBuBq5qdExxYFNtP9KVGVVheRE6eiRUf9wDVCjmpzTD54z7BMd8Ja87RupZG1isphfq9Qqg",
  "key12": "4HQpH8zbJysobmjBQ2CvdysWbYSpqHwUJy61vMPfXxRT5oj7xqY55RcYvnjRSm2B3fahbzEhKftkH2GCtQmxfiur",
  "key13": "nd6JWKNJQTbnj8FhuAfnQViqSZcPpZVVwbKfNb6enSTiQAyDW2siEqdKv8ViB5UmrkxtmKexukoeimoPwAUzoVc",
  "key14": "4P5sjXaqNE7S81NvY1i6PD3widZffUY5aesxBrxF17ZLGCX8HZcLyEEwdkwymwdPJVitRTShP3GfhMAyHo8yo6T6",
  "key15": "5TcCCikUyNjX2Bvw94U2FcV7ntqCS6xZUb5EiMXz7P64PrZLNPh5Jw69Y5e8hYjQRApjUg9YBm6v1FQrJQEw5eYv",
  "key16": "35Ev1bJSu1wPngbyZGAfEKMnD8xSQdDveLsrULP5dEe2MFtssgxKjDTv7Dzgpcd7nfRcFPwTaE3ZthMMDtcXvGbA",
  "key17": "3bZ1WA2d9RANj7tr164BPqZw4WdMajRBVogEjtCguZ4nFSWMPRkXsbyVt2qqNXW4kg96brFUYtzg2bEjRRBpVnhJ",
  "key18": "5sKaC6TE7Uvc9KLHYreztTW3MaQYLwyaDBek7B7j9aDnXAxi7hLTZR1aToqSWXn9fKVipLK7FGj6h9f7dTLmb3wd",
  "key19": "3HyQpbEtdgBL56szXZVcgh9QLCGMwpXwDWi4DiqR7FDNB9m9LNW5MhsMQ18GNeasEdhGB11aVncW7tz1vYPL5tfq",
  "key20": "5UfTohopC82nGfgtgdzYqupUmXPQqhwxkEqkxyvdHZ85oaFVZuMyPufcHEw9icksNudnm9Te1KuwDd1PjfrU8jQG",
  "key21": "2XtxCyxVXKk6Hb4Ft2wzW8jcWRBdGNPpFVBJWtKYqV5cY9WRA2B6c8oumx4rqTSXAAn1EqirAeNQyqamcsMEwckH",
  "key22": "3CNXqsaMSEoy55LT66DtwiqpvpUVFZTwR43w528XSfRL2NFfBCoN61JML2XBd4hTYbPYSy5G3Xv5gwXxEZQFMzfu",
  "key23": "DfqoW1xfFmG5uJA5NFRhhKkcYkuoKHVEEUwzkZLfY3ay5rR5gfjEG6vr9VzNHCWRQwRMM77zDASkAxPodM5w8xb",
  "key24": "3yLQSNGdb6UCBFtZqHB6a3xwu92ZJra1pDLR8AGHMcoKE1h1ng2jCwx3y9U6PQQc7DLzf8QsuC8QbpabRZUYas2G",
  "key25": "5S8khsAviQZGny94EY8Mu6VKKg5m5XWQG89kQoMWeMZbJgGa6fe37MTgFubX7ZjkHSazvRo4uRESYZBWUWhjGTSz",
  "key26": "mAsFjE9Awzwnx7q4dSVKDCofzjeGPmDd8dNpSgEhMsLbR6aeEJzdaJCLhG2rAM6GkspiNrGDkzMtigH93NxK6Jq",
  "key27": "4W4G9a3D1brqSVqMMjzGM1nVVTBBeE6KdgUky46HDnLYcnwogf4mMbixQSbdxEqkm7da6K4jLw9hvZQz2cr9c4kv"
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
