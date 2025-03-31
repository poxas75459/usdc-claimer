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
    "2yVXdhU7kAtxNCLn3oujEWWFHSmmfK4QtBEBjNdnHHtyFFYqKHL86umraVFFczn2w8vRm9QrYmKUyEouzRQTdEyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56egKGdseKpRcdenyRn5kJFzLdDKfeGktSgADjiv5LdBhtRear4A7DC9EGLVWdnz6NmnoGGJAVECQYQwcFaSyby4",
  "key1": "4yv3CA9vwjLQiByS3XSCAi7Lkyx76n8pBdvQWVRLmCSAw6yGas9gzynMCG75KNGmk4w3WgvbGc15rXodHEss3KbD",
  "key2": "3RN6zuxwMZuyg7Kpgd1uefHWyMw5hYNViqtFuPauHqwHkrdTTuxVcs9XVtcgzhrDNnHDSbnC2e1uuFXs3AaJ4phy",
  "key3": "5PNJxrNKTBbhBu7xfnFfQo2SdyzYEMSgHdVRTbZqZyZ4Zpeys2FLk9uRSpBFMqbFzSENkk6LRfmTZbGn5Rsk8Q94",
  "key4": "aSSxfUqYzaBURAz3dgPTZWdF41oRzprReDXnvxhiho3mA8c2ii3vQL9Bmmz4wXrL2AVXmS82EJG3oxhkhgFhg3i",
  "key5": "4oSX98T1p6SETC8c3bAnE6sRtpoYnE4z8zW6rW7Qad2DERvmZo1BRjm4fsiHHVAmeKt88YGodcRuQ3qE4UnzYiUU",
  "key6": "52GbiEcGg4zLchh6dHBQewuxtr9rQv9s77e8AVLnh6UWcKsJRWWCR3y4XiYyCRncPWTXxJKDkwt64JwzaHuLTd9N",
  "key7": "3a5KvcBxJUQVHrMR7dosGGo2G4Em1svmBYsbz6Bc5rTzDPbVoXuoLxQjesrTPXpcaLgCU9MTA334e9DcvaH7zcFp",
  "key8": "KsjMyYGLNjbGZgHCQC4rpU3qDCXxEAoxzBSCxFS5SZnjgdwzvXt7jrYCrfrJtjo21i5NLoQtykU7mi47EtzySNd",
  "key9": "3xKnwykmAihQagJ7GYFo4X3VMkgz4KTgnUDckYvxvQHtXr3KHxb9CYw5nqXBCeqYCBy5YKFvWvxYNrNNFs9Zdh7m",
  "key10": "467nVf3KLmgEw3L1SDNUV7QBtd1FJoU8X7meodVqHYQNqGvwAVFF6M42NBMc3f16EwF4qVxkDMw1igaVjDEuiCQ5",
  "key11": "2zfR9yusspKxG5pdy4CvsRh2rw4vhNohzjih9LLhzgX2GMTtd3v5ZiReRdqzoJjBiif7rtL8WyjVRJhAw9CE7Fi6",
  "key12": "5dbj5TXRJiBgrkBoEDkKA7G91KasBzBRrhs4bUU8Ybgpi4n7AYGeCxvUM7UffMXxmVSFHaHqUcaAfikqnWXpgcqz",
  "key13": "4o2CbKJDGryonCe44dxVNfgfQ7ifD3vZDQ6RZp6VvjysPzAe6snRY85bb2evutjz8fkYgxi1Qpd5LF2de9ssvux",
  "key14": "5FFRYABfuKLLszn2zBQM7NXRsqHzgLnN1JhqHtp6frMdzBf8Fquej98kVtVN3HyxtYSBqHrmfCLVe9AdJkLgN8H5",
  "key15": "5NoU8YL69WQdyRNxagYrKVmoPR2e6uomPeT2m5WyiKC36ZoHeWy4uZMJnKHmRdKTLnV63PX98ULjb66bmQf5JmPF",
  "key16": "LjiZ2wSX28rNDcNeNaSW8VDnhyXByeGEC8qwT9b3u5MezmNGA7Do2E6RNjMX8MfTX27SLc6cNVu3nTgTKYd3yZ4",
  "key17": "5BkNjAVEyeBR5kniiMMJSYKFbvxksABCHTt2gspTeErVtwV48nAo94WYoXNukWiZVBeJMCPiFBbBKCEfWYJ7o4vJ",
  "key18": "3eGJx5TQeU6s8miSWqs4t5yBpKCVYE5tr2HFfnNUXifeJDaqGBMjj9qvBRfrqV4CD8FsDYWFBj7onb1LP1NYaaMs",
  "key19": "3roVujvbXxnnADcFTq9ubJ9YQtMbFgmRaNa6crwC5rWBff9cXqRmow6SbwTcctRE8QgDFV44cVws6Y5XFxQ929XU",
  "key20": "5sPQsuVyoWpEXRwVECB8ustjgbb6UrofXG2RH2y73ffdt9cQ9LpnTJGzw71XyzGpvoExQxEt5uCFGv5QJxmya8yv",
  "key21": "66kv36X3SCETj9VfYxTCWS1B8rhrWQLmiR1iEhiUpQsCigHKSSmhRGeHBrCFaYg31v3yR2A7CoyhhmpRBiqdaCU4",
  "key22": "4pjZyk4xB5gQp9fZDa5zd5dDb4PQygTmz7s3AhiwVJP3th5oTa5VsZfQo4RbXu78wE51qkjR2KtiRJ9q4EFjL4rs",
  "key23": "66jcaJg6PGhWhMUETwTsSLiN5FnJwcFa12okzxqMRXfnfMqae6mhvw1g1MX8fGXppFcVp55N1E3sckqhMUZLAMW3",
  "key24": "3g4HaFZY9puYLSEYw6ogj8C2o7NitbHNoMRE5E5GEwzSSRehitLSuYkmsiBDWeAS8WoCnCYzhUzFLoNk5oJvshxT",
  "key25": "3DT9STtutx2xyRV4aiGWUmgcvd16uHkvFdzovun3KX5RhpYceoPKoF9i2pCfPCkfK6VHnwHJXMGGg1S1kszQfxA1",
  "key26": "3ePeaHxjoWvjbscA56Jh6P7u3vRmTKSUqJGwc31zWJm9JqLatp9KMNtud98bo6FpDaikGVx6MqazZp6e69EggkcK",
  "key27": "411srxyp2hp2XohEiQ6ZUmaefUvzzcxYxWQ2PDwkugwmvcxLRgnsGhaDJZjTB42wTzZpyy2YXiYY1YL3wfPXdvx7",
  "key28": "5Tdu4K1b3uDfmAinQyALWRGMJFnchBNQ1mcQE7hGUrcReL3urfCMBsHdhMm6e4o4XxD7YxUsGprDNzdczW6wAZFu",
  "key29": "2Ae12KoJjGAHb5Qnf6JYeQ5HYjXnHufqobCtFMvDsGqhLXKAGEfCu1Kh6Ymj8Vo4YZDTkDeJzNG3pSb63mffp1k3",
  "key30": "5FRkHdietUthQRA4wDQwsBu3D7gordU1kLLoaCEtWDgpm41QVanG38BGphUNL6PejqmniDH6oTQixzkwofmp1eM1",
  "key31": "43asLT1rhnSNuNBmtgHHMNp4PVpFJwseL5SwD9WvZy7JwjCGDkKDr6mKwKtaFQkwrrBSptjc3TrsEEc8mSd32DQS",
  "key32": "3t7Ank2pVor95W3ZZ9nytPKQWxESYmPrmW18AK4NztKrKgiyW3QEDR9nZjswzyDvwgvaYkXbTciiDDzNfND3p9zc",
  "key33": "3ZV8ybWWSq7mDFf3HGksF5KGx667h5mJjExbg6o2ZmbmeXN6Pv9uKiqwgtXs3JahW9CjWz2neAdJKcMM2AGwgujD",
  "key34": "5P8cdrCzFynFz3wkBCXWvs3oqxndajBEXaxdXjwo62Vif5TyFsjKH2K2RcyNoZsFU9C75xeu5jENaE3yeL75z2sp",
  "key35": "wK5t5o3NyMKWH9Qxxj27VPCyA2qg2zjcoH2Ks4ScsAovn1p9X6422rXwVdvjAyxtXU9P1B6BjonkhdLEZpwwN1H",
  "key36": "5ej9NCMR9emRexwyrX9fd6dc83yfQ4rSa67Q7ftgQfaypBWPhb17DhCHQtnwWSR5kwA2f7noWPeBqjuRDqPvoeYo",
  "key37": "563S2buzXNgortQDzRDdCBZzTGn1ripS2P7ne8uY34uqCi8yirEBH2sDDZQyg7sQmSP2hYMQAUd1E1naqpmogdJx",
  "key38": "5qDMV71tu5JMgJMiz2KDACE6FvpgjESkcRNTjHEvX8AykyrJzjzobyfH7ca87drcQarUuYewPTdnRgXQU1y34kMU",
  "key39": "HGPY7fgqH2QYyKZ9mCGAdyWcYJex6CbjCYQi9mdvVuMpjugMgbfQvJX8ErFGLkdDWXkLqco7Pti4bezjCE9kTtS",
  "key40": "4AF4Wr8YvzCTkLGFt2ErkdVVq4Z18iaLvACXzqEv3dusE6TgDyHvUcqoGpSov6mt2cfDAoAuGxYZvLSNVSdxqsv9",
  "key41": "3R79aKFiKkty8qSVXi5bnu6a2nJ2JHrqGWDdmyygPG7z1gASAh4b64zqJDmBm27e3tDQNSrHaF4vf7q7YPuvFL7s"
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
