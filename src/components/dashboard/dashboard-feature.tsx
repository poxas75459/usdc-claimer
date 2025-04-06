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
    "2Rf6sMQn9CK4GXo5aPrD9DtoJ8cqLynSyx7geGeaQXDWuouKx47QDBft5p8dQJdraABqpQwkpbL62NEiBjKvetSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dsR5RChHyW47KMzWYYtXjEePnoXGRUL1Vrg2weM5wTztvF2rfikYeYDR88e7jCaMXKrKjhedKEjwemo9EXNp5LA",
  "key1": "3Rmra8a9XBMhVDqtf4CHWxw25Z96JLhgm4yRgdUBo5w4mLQRYmcBJQ6LugmPHS364qnfoJkV9r2YsYooAjyD4Ws4",
  "key2": "2y5A8HkASq48S3mR3BtnNRdGjKAS94CCZ33oA5WZ55JjFTr6ABKiPWTWYLNWimPQfH1465Dsx7g5g2PX9R3e9MRA",
  "key3": "3tc64ukvKu9qa8F3uSrUaQ5tEgiWBbymYopFrTscMejJHREjwkyWoQxJzo9D7FNLyPfrYVfrECuizRSmXtWqzYpW",
  "key4": "4fFhk2KZSxFWhQHPPeghanuwFWcdyqJAumZkUFnPAMUv3QJq14iaJcasujoaaRbkujeT1bzFpZfMjKByXXeX7gFy",
  "key5": "5d5CCLGo9pMHxBa5yhYr73aGFmv6uABDAWiwadC1b8DVbFQ3ZPZfAniubQnk47mmyKiCwmbub4AykxJQbRsMgGxF",
  "key6": "2Vwvj5ZLRjfFVYYapYxuHJvvNy7qVab1Uk6E9xP8Y2uX5M9dQvap1BXNrVrSZbaaBhjiwHUdumdeGgoEoYcF9oEq",
  "key7": "94YvN9YfKd8otNWYvzz7RkWaH2fcQzxNuk2no55tSSCn8Gwb52BMgKrHScdi4QJWREMr1Xq65729rV6JTqbWJtK",
  "key8": "2efC5J7n8nff2pi7SC6uHa8HcWpQy9VFYybfTLKdgY86tRLGV227vNXF5XSdXWtzCc7aRaRPHPbnycQiKzHinvLx",
  "key9": "525fVHcn7ahCky1kqkJTbYxV7B6zwEmgDyeW9WAcQYz1nwxHgkeZJ1TW7wZDbdWLZWvuUXrWzU9TJ6BD6jFE6dW",
  "key10": "wC8MDAcsWpGJhxTFJjCLxFqRdtmGrtPFp49xZ8ntoPUJubaTmmfheQ2E2N1pLvB7vZsQmpLHxH7q3G3KYGk3YAB",
  "key11": "4BpckcnbURovexJDFn4G3QNr8iXJtYvW7hhofiF3QnFRZzcb1vr8jij5auNB72e58o3bMnU46An4Gfu5r6G2xjXr",
  "key12": "2Mv9Bz5h5FohPWRmwunCUwfeySwKm6tB9Uuw1bkLfX5GSYihX9T5DkTytTHh7RsP6toiqmjBXKmZh4DyFsPhwtfs",
  "key13": "4iBoQAy2FAbZ1LitrQtxUjXA1D3JUQmf5jJbyZBXpyh1PwdUYReUMVeb63TXJLFYJ6utMh4UspGxN7SKFxjUAqsV",
  "key14": "5us37hk5D2TJbyByUsNJn8UDxEH8WRJV63o6EkBgFCuthgAeHjLrUq45Jeix8AmcmFAEnqNnbBuhujL91xzFFSa5",
  "key15": "3r3FmXmttYFzYF7E49FxT7ewz6a3ACsai6tpCQLbB5td546NcvNKDYFAEfWM7geapUhU6TL7giTBiKJfb5v6HZ1P",
  "key16": "3sybLttcD11bogA3zkWxjuaPNHo8rxCEMZf3axXr54UcrqXu2u4PZ2vxE3nGkZFvuQY6ZDU6FFHrTk7Gnbf2UgC9",
  "key17": "4KvgoQ23sdJaDvkb4EMGhEuR8LN4CKCKAtHhAJVWd1fRqq1iL6Tpg5uZW36r2tc59cAH6i2rMKb2e9qX1mCV3Ao6",
  "key18": "6gf4aaJ5Tb9TYu6t9aUuTtiw5mVBWzYBNMi1x2L5MB7S2nMPxTUR3Som2AE8cjn2YpzH6A7Esri2fDGLGqLZ9LY",
  "key19": "2P5mW61wi9Q5hXJab5GauND5vXVmhdQvkPTmjMwVK9nQGQaydn4uNum9Lstnb2FjyDCpq3Cq9A8HFpKtzi1yzdq6",
  "key20": "5v3HmryMRuuuGzsSqPWNHbxcRYpwNthgne1CAhRBSg8ZzTqczGuadDYAqPYksaTAKNRgr522JgXc4QLo6o8S9Ckn",
  "key21": "psortJAsn7zptT38k1UTBcbXoAapehijRdRUJM8kNvRRbcjSHFXagAWsrmGVQ1XNACRPB7TRYsnWTbNH3diFt4D",
  "key22": "3muu8SbUZVobxzaHnGZwerzPw8CrseEj5s4mFYtchtXx6Psx9V88SL8DdDDHjgmnFfrWLkMhKEWd9UtpzYE43q2D",
  "key23": "2DPGEyVR3pUFPxaczi6NtsUUpY473YbjcojajU4f56QSce7ZKeUjEAk8tifoxZWbad12XMEQNkD88Cyz8mYCHZk2",
  "key24": "n6jT2kco4rBFKLd3TRTKHzoiha1ohFZzQZvf8MaRnsKKvsenQKk6whEZxsqDsRArZSKu6MavkET4PDoPxraEo4N",
  "key25": "4U588tpcYHPXeuqFLN2zaEu87f2vRVw9cfJG112k3NeHHwvXM8b9QaPDrDkPXZbLvJSRXiNfX38Az5KKKhQstoDE",
  "key26": "2PuxUgjYEUtGJYSN2fMHgJZkr7FuZAu53L2xXRSpSygAcJ2LbZVRxwYztR1k24furHTKpLg9uHQVXvnBf1LssYYV",
  "key27": "3E6WHEaA7H69uhyqQnR9paDei2zdWRXn2ZWuRopxJpEeJH9yq79XKmDcYms6aDXSuMiUypV5txhqnS6uK22BoZpj",
  "key28": "3KhQz1KNAhHLvDqW9dxFwtDdPzMizUQbxA3QzQtakJa3xTJPtvdS337rCZTsKVobVQTvJaY1tocN3CrzdZaF14QM",
  "key29": "4sSFEYdqeyj7uMscU3mgCTuQofBCqEWn28pvFE4K96nUZsY7cgNaKqjWdMjvsLD1LjuNjzSJqvM4nXVaqddvXdjR",
  "key30": "2LZT2hgBhpnv6bEBTBNG2FmvRwToY3hw9XukjP9CspQysjep9BXgCW2zaFdBmiQXUH9t77LaTUmspSTNnu2dfqfC",
  "key31": "5ShiBGE5ab9qYwzJiXhswjKGkwX8bTbTi5Xh8EMUq4pAxpk2TBbZfhYTDgm5ZNDiYgQ2827v3PyDZENZhhRuaaf6",
  "key32": "4Fvv4Le7VcWd12aUYczG9CT3Mf8MKXjNaKdvoWbRM8uyY7WDDtGYLbaZf6qh9TJzNfK5eaw7aXwkeWamdkVKw5mv",
  "key33": "3Y66sarPxBNQU4umeVgcuHH28ZEotRS5Ksq7iq5fUHYTsa6sNcyx3Xy95NdSq1wpZnimivaAJPpPPSHmDAHfWBQU"
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
