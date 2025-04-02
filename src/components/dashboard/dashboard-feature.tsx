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
    "3y3TFfBFewCfBjDAkFr1B2R1udLMT4xTVwgvsJUamBcxgKko667dGGpgC21xkugKLhuVK1PoQwKutV48gJWLuyE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJ8SKEVuiWZVrgfWgo2CmEvuv1C1ACXYaMtvZdbvxWQMkTP5752rxaM8x8i8wviZDM7LdVj3nwruhMKAxFZpWr9",
  "key1": "3eKzA6uQo5A3qGohMF7v8xJ3aNN3Tt3SmL3RakXpVGBbZ3WcAtk69idpMgFrzRkRESuDEc51cfZkLRkhqJiyw6Qg",
  "key2": "34FuxdTKGLVQeygBnCxGEbFoPbdnwpKtFsxMSfXBsjJ36qg56xMiYUgwHQ5qVtaVjaozBhXXvREicsWB8QXYQ3a9",
  "key3": "3E2RCNX9iZ75KtmM8TT4Ln9mpKAh4daYGMwnc8YqYmUkjdWHt9A7XH2ZiRzhZhik95Ck55Ap2d9SKhXpFM4qyKJP",
  "key4": "AKrUv295b3nv1v4asmY9ciqencHjxdg69rDzgWv8A6HHK1dL39vRmhvXS7b8YQYWpJxzgbr1JHUDQeBDPyKoZrv",
  "key5": "28JhPRuFz9RKU12QkHvcxdsse85dmMTGtrQQYa6EJDJUzYyzMfYhLQNzXvcVAmybMW3NdtZPwfUFD94KdwieeQ2H",
  "key6": "eWwfZWPhwwh6dAef4TW1MbuKejWocvMT9Yb6QhH3iA4QcxHPsTb27acWxWzdgBdQHc8G3RFxZuqcUrWBNr7oTyy",
  "key7": "5o6RZrxkziSMYJiJpVYhsfPqopdQ9ircmguFXvwaLRSAABC3jWmN7LAV11UNCLeBuJrvFQpk4qiELDvESMoKpLGt",
  "key8": "3XQgbh6s5RPN4fs7MFLwVbeJrNroC7BB99pVw66BBjc8jbbirPi9mhHu6SZPSPDnnbtsfnu4BxVv11MJoqbjjemz",
  "key9": "4pjVN5YzRyika3kjDGjhN8Bh5oszKBboqiP64JpLBjTUeE2BnjLLW78rjjYrknp4FyMQy2vDs87j7sLW8yzGabGa",
  "key10": "5tLeen671cgUMAdL7o6RVGGAP2eYGneJEbeRPt2Vu45W84TG1stjPnX8uSi5eDvVzw6h4G3jv6moiXoGL46o86Cb",
  "key11": "3XVp7qzo8eiyCF6k4kMiqjc7LLbQCTwt37NedLM5atn5gYyvSAftNUcdXssg1bhLoKfg7QaAsyvpCMGWvYAzPGAe",
  "key12": "5q5juXws9dDithqm5S636zbYaoy5G7gosmNoSJdG7VpymEWRzzMDgFFR3KRKj4vRcJYrb1pBUo22u3ELEMKKzJwL",
  "key13": "2i6BxErtM5s3m1Y2ngcmDkLjw3Lzim877G6CJaCGSS8SXJyMhnqDZHaeJrEsgEE8wkXEh5cDXwhRY5cwiHpaQgKf",
  "key14": "646F4QY1KWtMxgSna3zoK8h3czc9XosTLzvqEHxBT85LJpavqk5RJFyvMRjsRMdg7SyvrfhJMCRsG5YiBSo1rGSW",
  "key15": "3DLgGsSUt7TeH4Pm9WWBGvJY9VBLZv8Y3nJxZLahBcZYAXzRT44fRytzj3f8vjcCL3hEgcg7dSCftABb4uE2F5Vm",
  "key16": "2fqBH5Sb5oG2JjhAnhXXuHdeskRwHz9XKw2ohu1yVLLjtsxhmsE31uz8wMeRYAPx5wQnSUvuDSiVMBp1EZMx8aQS",
  "key17": "3NsR9V8MXnACj4iG88acVbtWzJ7aefDNvJXNsUNEfSzyQNHxSxsgn22pPy4dcVF7soLpV4CdAMyb5AJZRggcsash",
  "key18": "257yYjqr8fLcrSx9oCgsXuYuNyzE6qVZq8zmSsKNUnC2BmqU72ijCuRpd6TwD7AseXCRRKSbYJhTEWZuF9NjumJe",
  "key19": "2Qd3xsTd2DcD4RaPwM9tpeWnyuGK5MCeYk2nSdq1mqRSsrLqV27tvxmD9DASm67sJ4pgSLi9L2T6QtxLQaXkVMw7",
  "key20": "4K3JTfLq98mGToeoK6GKggofrUboKXKMVM8Q5Nyb2ARzmNwvNs5srjn4LW6EXf2qWALsCL8JNwv8oTtCRwCiio8i",
  "key21": "4yDGiRMdKJMhb7hH6kqqoYRLxqTwKCiStH3JBgY7LZ1tX2LV2xz5pgivDtHKKw2mHH8E99oYric9knxEYPaS7DMr",
  "key22": "sEfH56Y6VXCSHWKqWF6Yak4Zc1noDANV9wSRytynRr8j3ao5NHf7B8Xb84wmJ2DfHWDoM9PyDDBJmLPqrpBJSuX",
  "key23": "63q6qyroX4gN7v5jrPC1TfHSWFeaXMiDqwGmT92Uw139wBKk9bXSYuRb3RXWK14tNvwLxdTYeHjU6qHAmDKEU9G9",
  "key24": "4PJSj7qim323UUk5Mmoojn4JQryEUHcJziiNzwa1XBGxbgnRGNn1kdgu2myE1dtQbZM4QVhq4TT8sxJC2R25XTNV",
  "key25": "4xrzXT445xUKyke9kWfPhprLxZeMn73S7kDEfBWnCbz8VQQq3ijNtCo9sZdsM91fk5CYeqH5H4DujJd4onvRHFJJ",
  "key26": "5ZpwY6FtCDexEmHukKoBNe2fWsncqc6WHWVEi5oa1w2KyPNQ59uy82idFQ8PpBFgUn7At8Uwc4ywvFgpgoppEuru",
  "key27": "2BEbGYLtK89z1PDuxfR2sanBaLRWkqAFpQdxDYihw8t3YdHCwFxAMjrBjVYoQMiQXaTi9jgU3YwfYTywtb7FSurk",
  "key28": "46bJjYh7zWWCH9BrM6o5SCGtTe7K6553zhBbxQtvcrZ52GWsYFHAuQbaHqMDRrc2tLLqZ1pMGEUbTSzcVdv25R4Z",
  "key29": "4Af5PwEWtDn55dVi9iCL4417simqFXTn5RoC9AM8ry8Z3beYwwcBbMAcvQNyt89pDYNss1WidXqvNQDLoM4ArjWP",
  "key30": "3Swqd3mz6v6FEnFXS4cJ2xqCQ2MnwCAKpfUEv1cLwvGWLjczKHHPzBkYhUZW91VKATfgs4jsv2ktWQ5whqFiVtaR",
  "key31": "4n24L4noddPtVxxH2fzrKiNNNcZ3Ye4RBSaQU12EEmuCUVTbShvLR8xc2Axn4gxTSpcwSX1fU6b2X8pUBRhFYFNP",
  "key32": "5hiSAbCP6vnnFCrHWa3Vg7hGoVUmDti7VKfeVAmuMhXdFnYjL2pzsh2qJJ8DzWDpD4XfNfdJDr9FKRT8zrZFfKdG",
  "key33": "4gjPismB78HcFqKYVtuo1QHGoqZvDwZEdkbqQT4UTckejnnVjrYBSRo8no1iZz2LaLDgh8oWqhUjT916bXj75xGo",
  "key34": "54rySHRkVLCKXtTSniBP1eAf84u6C3nkt63sz9r2rzcVXSVMaHbj62YFBrrGcDpY2FXwiMrmsmo45XEXNw5P1aqG",
  "key35": "51NDPqd8rd9ppeBk1qhiQAZUQ2A1AV57MWLQafAtEVb31ubMjq7tKeMXGWnD1NMuYzC5qxHaKG9kW9GgQVfE6qXM"
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
