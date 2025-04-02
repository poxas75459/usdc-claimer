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
    "iu6JmmayRqpw47YUNnvVbKc11ykWgCiPAvTdQL4G7P5LjJtakXHBgWoHezrUhRdRQCCDGsKwyukZAA2ResvDX3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqcD4mmKuVxSzZqeJeG4g87uJCz6fBJWZhsVKNyGbJBNAG9zxh2ifAV8MdejsLje5nkfy2LNNYwtNQgarihDxBN",
  "key1": "5f4gStHNyXnk9EgLhafMtm1egg4JZ8iUHzDZY6YgtNVeaHwFKSPjrzgu9tsceaQk18gj6DNUpJJN1ttiLHdazwsE",
  "key2": "sCv8R8yas6NpLcYnjqtCM7XK58bJghdEKy5uT5hqgjme7YmKk6ba9kbBLP7VeyPmJUM1VhcJXdJwmLiukDfk4M2",
  "key3": "3pTYWDMB1jzvG1XV97k67wnTm2a24UUyNPpWV958nwMKGXQFN9TnZF9Hnj5ejSbAYhmkjpujqW8BMF6epMhczPdt",
  "key4": "3Btv9rxfPaebDPdZYJkaW1FK8fqxsJT93middiivkq7uaRHs8WWgnLaoTeYrgiWU22bgzpDgFxixzNCYH5LagAo6",
  "key5": "5TLcgFp41eV3jDEbAYzeJPaGz39W7DLzCNHZVemy3bEXbHMVzGCDxtpf5k6eLn2q2XBCtLBmsHBPe41bYuFdKUj7",
  "key6": "2gogFfKUdE4Q4E8ydrSSBUNgUmrdJew77ddheYDfsLNdCUFuRiJGZpDwDAcKxt7Zp3W4iKpE6xAraebdf2fxUqf9",
  "key7": "2mRpkHNGxA8AZ6o3szSJk1yETxyty92a2XWDgqzBcUjgdv7rPciNqACRHh9tWZAXzvDBux7cvCFnY1x3mpXPtC4k",
  "key8": "2WdUc41rLaUD95znbzLDUUasF582jwa6LN2ccGzAQHNsDsNHgwFedkLj9yzDdH4zCXNcDi3RYdBYVV2mvgVusoGk",
  "key9": "5gi23PVyBb9y4qixmP6DujsRRkZZCbTMATB6YEjNs7oWwBHvoQiBwofRvGVhjNkkfxSrkv9H8fhiGc4VWwBy2Ahe",
  "key10": "43YzbjXf5q1sM2dWXhMii9pq9C3sPeyQiDtXzPfPb2bpoivbKnP9FqEMFSUUaQvprZ4zPjfHhdgrpPJwm5JHeVtD",
  "key11": "Dkvp78JKeXbVThN6hqQP6SRc9Ca3RQhnEFbKsJ7xdFcpmPzM2UpYRN4MMW1QRnpfYPP35NRdfV8XqZuAHsLXzkK",
  "key12": "5qHkMjnLgCJejN2tCoKBsmYTQjaGdHeNiby6TxQ2PFtteYXQoNjq7qNTot14D3cz7A6WtqU92tpr2UFfNFYrhLrF",
  "key13": "4xBWdPGcg5J97Rwsx4FpfpBtPgFf3hthnVn17oGe7RKZihScuq5we4NjgYkk5ijUDN8p2s4P8jBNALMSuJC3Uq95",
  "key14": "gjjXVSLQtz7LegWEHKuKDYdC8UdRbdw33n2W2uM3AnuqchTCxMQ5zjDFoxT9aX4wNzwyTq1q95B2uAjJs5vZRjz",
  "key15": "25NwRgKkHstfHDPTzeBbs8n4MkCRzqwKRDtET2SCrL2AoPFftcPxZDBbCryw6mL8GrdNXMcsGLBQx3vuLHBn8HDr",
  "key16": "3bCZAv8X7pvSLT4K4njRtf6LJsABgNDfJdH4uL6314oiMFYgNqQANaU111W3FDPVyybJNaD8xz5CNGYu3jQ8aX5p",
  "key17": "4k6e1cmrAnHmwBN99zKoevYrBB7WXW6vWEvGMmW9TeyCQroLUnnhoAtjYiDzUDKSz4Xm2Pzp3xHmU9ch6Gx8B1CJ",
  "key18": "3Z9Zfs3Lix9eYo5tgNc7f8b7KkBPCghGKyCm5Rrpxbo5m88yE4ysKtPifx5Kz3HwjmGXh9N1XT4UXZrY373mTLcX",
  "key19": "3hTswrRgM34MAaW52YTURjkEsQpdEchN6E6mYCpVB4nd1e3VGiNs7SHnfzCUC9aJiDqeHiU3QsA29DmA9xwRLZXX",
  "key20": "xkkEcavxHzCMGoYXvuXorjjpJqcaC95vJgmtwrnsVdrtymfBXSTRjQJTX4EqVpaxuqT7YmaHbfBDtPeuArg26A8",
  "key21": "4VVa9qMsQWGgjYyiLScefJAd6sRwgX9CdphmWCgXGbQ9QKr7EHg2CsLAdQyt9XNipvqFmdj8r5okyVz1C4SUoNTf",
  "key22": "28WRDoyQ5FidaRuqPmGJdSK8mtkwdAYwsr7v3mdgkDYEMFUyqYejtsPSapnU3Yc532txhp3qWK75hPexXsHjC76S",
  "key23": "2udw1jVe8VhbHQN5GeNfURambaovZg6qMoMcAW9CJdrf82SSwEP6BdWoALGM97AEQVotTWqaFnFmqPYUXY6Xi2L2",
  "key24": "3RSwxr4UUe8Jqtw6sSkGZ65Jqv2QX6UzPBz1mDU6P7kVBWRiGD53ThrHvkvAujcR2U8PAeAuh8ABhgQCq3S1GPiA",
  "key25": "4dQAzBrfZyMsJXVaAfn4YU7ApM22nswpVrsjBuv2uJRcKgffBWDXnm9H1ZPhykrmYXbUDk445AFHhzND5bETEbtd",
  "key26": "3e81n8NLEggpvGeWEpDE6UB3jkmBHa8tbDVzjY3vetkNJRHLA1tSUpZAwGoPczoMy3BtvosYxwA55bbTNRR6mtCn"
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
