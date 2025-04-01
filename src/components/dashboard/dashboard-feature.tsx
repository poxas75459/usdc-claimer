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
    "3BaqztLp7qPW5AMtxFSPstQmieCtkXjsYWwebKdENZqAACg9cTpwEf6Raw296XicKdYvPYk8RUtaVmgPmTzqA8Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u259PQWp8i1LBJ5BwviwfR3BDaYGsudJviZVpx7ounaMg3Zpom1RWjFaSmTKLuP3tVZdkwHAhEsYstC23rMWWDB",
  "key1": "3sNkXrxfKAXDLkM3knrfVsH1xziysckqbpdzSaM1YF6Jbe5J6Etd5hsVtXdDjo9RoNyGZuJ8MUnwrhCeHiDZDMEq",
  "key2": "4sYPujncfvf2FaWa5MT3upVf58zaMY11CqFHBVPpjYaxmpLgHiCtw3AwvyseFH5vdjAEaWafXJAYgYwsAnq51Sm8",
  "key3": "2HJqMveXX9rsGJ99XSkdxXYWquLM3XUVHYdU9kMvWHpZR3Tp6z3uW9MjTp9qGUJ53TmcbHYzUbkstWYMwaacgytz",
  "key4": "4Gj47PoZJNy2MYq29PLKzPLnVPBHTGzsWBM1QxXufxFkiKYcJNxLpzKZCFCFLAakh5yqt2JGYK9eCvY714QdZd19",
  "key5": "5tHG2rSsVUP5qkvE9PTxPnwqrUVW9Ei218EY6vAqYoR2gkjQZ9i21Fh3s9PE1tvuuXmVHxWcE5ynDVLSmkNo4G8m",
  "key6": "AYgNDZjYmF4ZJYFUxLrPPjQgtpSic9M1ViMj7A2Nt4FdsLmY9wLj4mk4Tg6DfuTLawoqtohbugf9fPG1m48YEwF",
  "key7": "4HSGFzPbt5Zho5zkRcLZMnXKGF1628cX1qZ7P6Mt1RvoLhqa6VQsR8kugNq5FjX1xYuQxeXBaYaKQTAp1GZMEqKC",
  "key8": "4FBEqeAqfJrsNFoQihRGYiHtQRnQxLVpRAgLLnM7RizpF4SNwhdm137wsD6gFC4HtahfHRmkT5k6UfjJ5a1cWWEf",
  "key9": "5Xy6RCLbVtszx5bPUtPvVBJNykBkLVvokNXahx6m76S7fwDDVCWsdZkpZ1hesm9REep4DbyDXJ9djXAkfhujq9ad",
  "key10": "5UkGK2TGtCKmG9BmPPETcATUVy5hxD4HWKLmZ7qE1n5hAHdBVr22MMzF5YJMPpMwcmwJ8RqYwXkxbG85LApDyooo",
  "key11": "4s48APPSz29E8G6PKQrNcMYH1njrucmXXtueeS3qZSwYqSwNLutc1ZcPJZXJBw9KpQzgrVHFuz2f2ii3jR2XVU5Q",
  "key12": "4negbSccn3Wk5H2Jp7VL2C9cNKbJjcSaB1emYFrTp5a7EhFcjYeNvospsViHoQUuCeF4a4SvYZTq27yaVjSWb86n",
  "key13": "2rdQwtAurCT21DBQ7gRxg3WN51KMMYz5mn3JLSDcDNfnCxjEM1aa5zRG4ZwbEgHsXMc5DSRSvsvhnCrj5RiAugy9",
  "key14": "5XBzJEcVQwp8XjEvGDygcDuJyngw2Evvkxq18TuiNcJuY6NJp5d7yfLkc5ULEiF3dcfttX5VgYAP7maB4UafBvUi",
  "key15": "5XgJXUpS1ZEiEqGmnizW2Ax5nas9dx7UBurVuANDyV8EdsvXCK3jztkHyDghGyXa9gf2a7jY5L4NmYXLHLw6Tsm",
  "key16": "4XVFfgEWF5ApTMJgJ7qNEdEqPtV94TGXg4eGe7ZKfGPFLbVLgEkugsz5SAfTGW2pkg83RkKWRyg4sytMfWKkNSkj",
  "key17": "3Lbba2wSkfr9bbC9nRFxoQfQtxwvZdmsVYrnAYeemGxQqit51ZNDC6TGt8iknceU6fNw1n4vLut6zizWHyghcX3h",
  "key18": "48UtJzrp5qmreDAWZsvqNSxj9PkabAkWK5PLNHmLQ4zVNt87BLpbTzQDqMHfD7moqqNxUunPfvg1xkDDm8YcqA6x",
  "key19": "3pycAqDEBjqBBb8YKE7fBnkhWVZyPBXzB4K1nAWSPeX4EnBVSPb2zkemjdRqWJEizBJvkxxFkyrRGwv5S3FroZj1",
  "key20": "5gLqnKczNQECfcw1TxUTfZu4iCtN2HoCMpLDsGPrVZ4rjboiHddRv3zDC4CznsPqhm58k8JSoWz4c8DJwnVnUiW6",
  "key21": "28nx8qQmQv8izehvrLDR4wqJXAfFpcNRRu8LpqrkPPnwakQVftagGLas97RxHHuUJDUPkLyJ8cr6VZrV28pfnvFA",
  "key22": "5y8WUNG3qwdAXHvCgiRzxFmMxBbFQunDqLsbvqbhJEo92767L12CE5pixVKQjxNQ2fU46hDVXANYucHyNBiUF5RD",
  "key23": "3Pc6waMsJTxHS3fPxWaquPiEHqRuY5iQY4DLiFJNLTxFkVuv8CtBSrC97nGS1jRuQeB5tduXf3WyAzAApfJByWSn",
  "key24": "nVpTS7sk82qE4WmTsrfT6uSzgbUZjHm2XS6a7f8WyPY1x5tWdnbE1zCCcw8kurc23f8wuPNC6frQQrRbYdLK22c",
  "key25": "k8BiBAWc1YVUjh2EJKfv6WPKMzsmN3mLe4NiKayaM9JyyZLSA2SU6UDhZte44V1X4shvbSqQrAkLUxVtDuAeyXv",
  "key26": "4fc5ZNBqz2QvJnisSs5DhG6RAdF4m4DnwBKL6QNEYRz1Cr13vocSnuiyUaaRNyCu5tgJJheYAfmF5FaDPeBZnDDK"
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
