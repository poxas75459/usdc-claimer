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
    "GSuduovfLWWUD8zAxHKyNzKWTjZ177iG8zS8myDEf1JktvHzxVA5aPxChTnUfU2nMurA8Cwg9ffrj87BMGF2fww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqNPhNBNBY68pNWtfT9RyxEQRY1pDkB3fDoGYwKcmPSUQ26ZPrJRGZ6Z75TgCjXes7534a6LweDSCeDssNnso5f",
  "key1": "2zjR3DUi6XhWLDBPYdcGqDCUBrUhfgpSneBwyGeSYHsTVQ3fnbqxcJKEn2xHBkgtUeYcWu9ZtDfMgda2L6CmK5eM",
  "key2": "4TKAQw9tpDzpAo97zxgLUGe2FvMhc9mJ8ggVYBUjYyqMq3K3e73C6XmizeHA16CzDVqSN9H1ds9ZeNQGKRzyBXB8",
  "key3": "5kRVrjfLNdFoj1Aw8ZV4LjF3eu5PqKN7ExysySGCpWkCwDNA5MoyKQCCEnhZRagVJDRmcVmoSySymcF1X88hDzNL",
  "key4": "QYjTjVaNFYyCShkBp8MnKhQoaF6QgqnScFFmWAjFwtkWnCY5Wo6AnSoYoBZ9WE9RzeqxZXGTvymvWdZiTi6XbMJ",
  "key5": "zDbbjfBa9Xq7duHiKyjW1XG4iyxeXpCHrV6BC3VCT231ZfoqBTZ9mC8D2iiZ2E6cXE2e9dak4sM5yN5r2rC8c5Z",
  "key6": "2vRhRHJQbG6Q4H5B9LcEE4QphjsnPuWTKWfSUHXh6mUQhn48i6KpZzzr8J8vwJ3vHLp2FQJt6kCFW3DXL7MvYama",
  "key7": "56i6vCD8danNNsaoSz7xwcw9GY53c1KG6jQs9npgn9yzogrdL3f9jb85Yz4ZC9caSFgK7ryWmgDebagpa9PSHc8H",
  "key8": "3Py52nMqi7pKxABMEnHZUCo6MLhkA4np5HzevS1eLpYaes9xt9fgZ5w7eTeyQffwYCJ2mBrWPL5JDqEPBDVPCtpr",
  "key9": "2KptsA8KeYxwdg7z18Kq54qn4G2Bh6k7CpcCvxvuLKxci28x7vJU3VfTpvxTSnnxg8KLBQGN3qqMhe9WVHewM2v7",
  "key10": "5VQFPhCgPsaxkTf2zvXaV2vwukwTcjGkq4Kq4gBLnNzwKjD2foqCkRMtq1jbw91CKPt51N2dj9PQntdke1JhccUF",
  "key11": "DFbiUxuHsH1MM9ioxDgM35vr5UYBLdvxaDewLC7J7z3fdfeanRPWGG5xNxCfNutiooRjbdSM2azrWKACzkR2gge",
  "key12": "4cLytKpPmPGn6ufo1ApPEn4qjDBkJ8wzuAPtXgELD1QqHNCQx4xjwoMfmj79zpHE9JrAdUNreVQyw5EZ7hVxDWDR",
  "key13": "4ux5TL2eWoPtngUoasBi6Hi1JFhMyoPohZEtD3wbhigmppzdgj5DBVyfp1Sur26mW3zoBAuhSAmVwqTdYByeB3vV",
  "key14": "jMcrTDWLqeDDfPbvXMwSFJoatrUtPbRNJFgLUEghs97mhSaPGGJNwZpUhB5ECMQAAXJMWxYwcf6ve4j4MvDm522",
  "key15": "216kUBpQY7eBrqCZKqM8qqxbwLVj8LscYNuh3nJSuMZozt6MSjycR63HMuiSZjHynFXxfAR5Z343vLtJz4MpYpw1",
  "key16": "39bBPK8eFiNhsdhb2uudWip5b44FvVv4nSJP8BcwJ6yXPXpGdawQo5HYjvF6RezZWxUNT3Bkg9WRKYcJ6GgD6URC",
  "key17": "24VMtHVsUcK1bJiBxnmsbUVagz7YQC54niHmQbQUazWZpA3p8Yg9fdScfZqEz3ZK4uXFhzdtDcPAPGMz8GnzcKG1",
  "key18": "PAD39Qxu2oQQJNh2d5AepE6MhVT9Pe4fGdALHvSds2QREAAoUwAfJtcA7ju8qJtUW1uLHAxpMnxgHU82YAwa2cJ",
  "key19": "2zFmPzWkAA3MYwYrYNZrP5urQ4oSYwK8JKvsB5BAYDDxVw29ErYpg3J8W48s15jBQYdjUqZbKmr5jtrLys9jkCe8",
  "key20": "3rsdjNvaEj1cXWbLgoy4T3MFeN5LTbo4KXVJSXdVsajTLAdyu38GmN9o3f3KVXfYeBAfMv8Tcfq7FD5bhPmgrNZ1",
  "key21": "2LH347QcKP4pR79MaAUW4qHyRT9gHJc6B4cpkjf22jQxQTCDLGvEoVJxaaeVaxQcMz87B1AFq6UDaZPz5AAX5ntj",
  "key22": "4e2DnQPFGsqeEGZ8otscHAhxpFjtCHkshn6MG8gXJuU4CEV5gSHpux3UAXNFhQCrmhUGneK1cuR8WoGC7TQuqLHr",
  "key23": "2s2KizR7N1SpkgA6vdMtFYkYqH4XxddcF1dKxWXZdotGzcuUV76UVTngsWbSjMV2yE4oMUd6sURTfGiiyF2UYqjB",
  "key24": "3yhuR1raRR9vEPsBnvuMESDnCqwLJ1MYGfjhkihaKk3KtabbuyX7LiDJpXSd4J3KjYcTE2cMzhTwFKhQPfjosDRg",
  "key25": "H3MArgcvsn3Zd6xd5QhYaxwTTqVDboo44yUjoJh3XMdc1vh8rT9tu6dmxfCS8wj1i8WxPiRiw6UJWQQZ9L7f3CV",
  "key26": "4fjFkEVSV76DE36DeAqTVqkKECCRVebZrHwnHUrgoZCTUUazjVq8CfkBieb2HTXxVdbJWshYLn7zSekLNvfq7ch6",
  "key27": "2LY2MEvrq5LA5TF4F95yNJsEQ4jkPRqeNRhsL4mag7UBYmv62C6XE3tC1nb1wv4mafxcCYxDcPnNUiUu4kq6aVwY",
  "key28": "3uyBB7FiyPRdNvThQTBwamoqsA47zRoQW3StGFqrYkS9gWJC6mhD8tbtgPnFMpDyCo6HdB7Hrnz3kLaUQE37mMHe",
  "key29": "3xdAxbzP4wLQz6Py69wf7SKi7prMMeKW4TGdEY1KkVZjq8fkEYCSp3eMnjpK8zhgUYxy6otWTgB7725CNsNnd8tG",
  "key30": "4PcqPVjHMNTawTrcke7TZsEKG2vcb7aU4iV9DXNKHn38XfwBPTECNX6Dq3Xb2xtzPXZ2J2ZaP5dhQyYfa72j1szG",
  "key31": "5wv4tstugSVkvy4FZPdeSuRCrdbR2SftFdRghSgcjMsBUjycpUaKeQG7EpVJUPyLVP43353TL7K2PT43PBe5MGRd",
  "key32": "oyqjB24a2P6WP3hpL13T2VkK4sBQEk53v1Xdhsg8UNVNTRgcpx4sQMe4kiisf6B9o6nThND9zZVspb8Qph2WdWH",
  "key33": "3wXUtsTaUg8emsQ7TU4MMS54HabB7tBWqjAwP5pjpz8haUpq8RJVrPrk3rYc7aEimqU1T5rhNMhmceZCTU1aEHYD",
  "key34": "2oe1SAgstUfb7qzqUHuhqSbar3tfy2nBVfHHD7nbcPNY61pnFThbXDrMMtbxsFpnH2veoHQ7ige3Smih6Kk7xMau",
  "key35": "HADQeNfpaacAdBtmoqVUWSADf94NKzvsxhdwRm64z47aiAm3SqP46rmLm7TWoTXADSAncKy2NsgMdVgVHSDeZ4m"
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
