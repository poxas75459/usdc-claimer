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
    "3JmeawoyLiTGryayBSiWeEqiHtLJvXfUYzzxivvf9Uq9UCEG5zGKqLTAD36WSZziDSrY5Qzm2dyrJpJ152S7PnYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzhum3P1UKywkxZ9zxGAaWrPmBnc8KNCfv3PEvaTMXFgLXuKpmPPZx9WBnupe9PE7TrgS2CS7Gr82ocubTCauHz",
  "key1": "2dwnihsAruqzGCQzFNjDJPiiMENbGfPaNaPRiiX9SFVva74UqLyq9oVVUPy1pD4tjaJKoyVMeLYhsWsuwJW91G5U",
  "key2": "5Xv5ZFPBUjHrYGLjg3wwnHkrPcY25nWBcP7ttVGRWzmh31Hae5ohb4Ja63jYS8ZqJzwSKXa3ZZFfNKgPjg7Cmtw9",
  "key3": "UrbuLtCNviFWcx6zREEYvRrePxx8bUCqjMpQdRgKducnP4qd3Tk9Zqu6MtwdjzDy338g5qrxCRTzyGeGrCN5C1Q",
  "key4": "4iisRBfi7LAXv718rAg59mFvW9SsTHtryBATtTGmhB1EcSPhfRZbqUnoXHQpSiuVWvt2VAtfda1U3p7APUF5BbbB",
  "key5": "2UizQJX5su2EniG8bohFEaYkG1wXPeWaKzh3LXAF6yKXLThPkdGxNiCvo7gb7AVqT62vwA99uaWNGC4pmPquxkRM",
  "key6": "4PkCvdYThSMSRkN9NTH5uzHX5gMgHLkxoH3iDFaNLash8xszkqLkXmFTdWKxidKzuYrx7hJvzUKzFLm1xY3wkr2H",
  "key7": "hcTGwjK6bPiWjnnNwbyUdAhotxocWLV3W4hLuNBTensaEc1merEcpg5Jso5dJFBz4bXTxcGgNMCjtkKEHcezJAr",
  "key8": "4MgJEQphu47JwU7bk3Yqwo7mWy2P9mnwmZxoucWG8EhMZhd4DxcUxdvCh8DneKSa9MH2Y3JpMAnB9YcmvZ4VtuZw",
  "key9": "iTNXPChtPFMAKEkSzhaKYgWNf9TkXk89zzMsigxZo4yWP97EP81N1DJsEEjCG8DEn1UqSCFBLQPY5svrHygDJZT",
  "key10": "rvufZZWkxpmpfh8zbpg2ZP5X629oqYGRjtdSmZkLbF5NePcU9z9H9voe1oxMvmA3RaS9sBrGeixefvm2oLiCxnd",
  "key11": "3wZu1NftcMdnFcP2ov2oxWz8dJoYxqnV1r38bPj64YLTJa8LAWVsHVRWCJGhxQ2qYJzgJ5of2vqrQtbw78jBPLB4",
  "key12": "4GwqvD7pjbBiM457HZwRMuCK1cPXaamZkc86RbJG9pK9NJhSm5rmX61VbJK5e6wr6YrvuFx14Dbavs9Kn91FS2JD",
  "key13": "zPRatBEEXJJFVabJ741jRPt7LWE846TjfyBxfnQfFn3mKNw6LFiAHwR58Qsp5HbtuHVN8uDQo9bFstA2iSiQC76",
  "key14": "3eh1nJjLoXAVwt7Zbmrwig2kAB3ZHf9Kmmw8PGsaojcRMWpkrT7vy7NYtXhd4Rd6azNJsQZKvJLfjZWNqrC8neWP",
  "key15": "4ywXSMCcZmMWQfdeTc8cQbURE8suCKm9e3uaLYZp1tY1zn8719LMhm4HYi5sqzjakP8tA7SCpMS5k9bMXPA52pwh",
  "key16": "LMDZNZfhphpWsQrQFSURKEhKDzab5GC5tSLuaX9khzfWNu975DdzhBKZGQY7HEccevGxTSwivk8YsD56Zf3VE9x",
  "key17": "48hJqXLwzzxkbfF6B3WCtQMUJXjq9w3CBeDUXV8KpRFhMnBrtUgYjp99wNwqsBU1b63jFyZFfPFvkcDEbTcdWfk1",
  "key18": "5ZonCsragRrNFJAYqM4dsgdSSXypxxqajocR5CP5j1absqJBM98XVGzjm7Xc8eeNU3ku3zEfSNoyaRmsMSS8tYLv",
  "key19": "4mmJGWQ1vTApQaVBkhJkLXMu82HxzKtWM2HvFWHLAwbEJv1mvvzSrCPBkYHPoBHNFBF57o8KTZWoydWQ5MLESV2K",
  "key20": "kaNpzhHGwoKJLZ8CPSsJnFouKv3B2n2pQbEX5cgpZg58t7tPz4wwEA9v2zEX17DmY7Fv9BDosMVHB4KnHMerYWX",
  "key21": "3FG5GF1hRcf3VB5DwA2te8ZrrK4cgmy4U8nwZeAA2P7nckwU9rMCMs7Hfc85giJR1M54h5MNKRqRa1N4gRFB8sKh",
  "key22": "5pEuuniRpZUZA4y2MTUsWTAQZZE9N4knN9oN527ELGvMMi8MVojuXoTt6NeVkZNKWGiTr14czeiVwiQgzFZmk3xi",
  "key23": "5C1qf1WDP7HHtwwTtY7YU9rSqndJbhNXnhAvgv1upttmhGgSZ5L1e55fqEKA2WjAfVntheU6UDiUJh2fGZfAMuzu",
  "key24": "3jp3MeJK8PwpXHJR36XyAUzKvG5Gt5moZhNVhd3nEsapbApnfM6ierpDBPkz3UfL8dPWoFVy4gwo22A2y8M2bGSd",
  "key25": "uFWHFBcJsEJ8dKLvhWzz3Aibhh2aHtJyRYRfHMA9UVfctBY8VoPxuXHqjqjsB25kKLnfaEBy5dh4E4KcH6raDmH",
  "key26": "4D1xDSeBc56bAXXDY7E4jqW83ywWMNrodWJdkAj6WNjfUbqxtRzYkAcCd63F8RMmR6yY4zoyGTdWNb3iAyo9rU72",
  "key27": "q3JLAqRqZG8Pvh1euzyBrrimjjZHZmBJ8dkCvkSBssk5KXp7MhMLEXdSRHdBKtNx7auHtE1j59faJKtUGkppkfE",
  "key28": "jPpCnfBz3gNR47GX797Q66Qqtir1cqqvUXzbBNJJhvqktGDxTmSZjS33XYaqZyGphaKLo5zmK1NoQ5ZAjMH8qJp",
  "key29": "BG3inzZLT8Lj2rEArukeMkeMs7yjurP3jXMYHJ3d2HK7PCdUUt7K2caxb5yRXzp9J2DymtyZ2gBVLDbDecw2Cjj",
  "key30": "2BBTFhdeEznWhWz8fZLg9w9p4HPHzrcZf2y4pFqqY42XRkQS73X9shSVQK8zMnujkktWqQrT3vwCV1NAzf38TE2V",
  "key31": "54n6H1SHrqfFnBvtQ79p5NokyGA2xLFwHHU1po6Yttocc7TsJSZZKA7HQkWQzQ5sFdaFPB5h1QVzF1LzD7EzWugN",
  "key32": "7wcrAfuwe7N3FWy2qZRpvzpUYVqESiQiYYZezrtN7wn8jkGNLRKyNxpM3wmxk3iij9ByFvCjpDqPL2qu6Vnxt2Q"
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
