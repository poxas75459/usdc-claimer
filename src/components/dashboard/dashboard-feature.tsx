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
    "2WtfyRtCrwWSMqVXo8iDoqVvMvkcafoEN1Tc47oeC6UkAdB584XU3kSiogKSi1nokeXm9mvaJg8QUEmSNf4yDZEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wm649aAPXKRvTaXsFX549sSMB6Qa3VVH6oTBo464VbiC8xdr5pBKaeANzezB9TqtcmnmtfxwbBdFd1MfayEgTCR",
  "key1": "3EfdwDYPTBLwvfJMhYY7EEkHaU4VKE6QGn5sAf7FBapjGUBhyZ2BgGULambESKoUqD9DQtxA5gM6ovTqYd1rfdwh",
  "key2": "2fd4P1dKvTfEa2doDrJRzTgviS9zxBeBFG6rHcpyKMxLnX1sjhPdn1NVaj52yKvkiYVfV5th7P5h9sdLNDjXbUyf",
  "key3": "4ev6B95XDsyWNLX94DFgPAJcWTsSQkxf8jZtxcHGvUvwiaTJP5myrwnXBoS3fBA19qMmgmBSXpUN9jFxjnmjrLEh",
  "key4": "2EMrT7E36tCJMMBPquyzoB7D8XJNaKASCpib9Qop2beoUUjoUBzToxRJowxmN7zgNNXJXwFf3RLdp7Srzj1tStL6",
  "key5": "9EgfYkDMzoaaBfX31n6QCUJyf1dj13PHCDR79tT32kTmjDMQNCvQTqQGH5cYqXrAkfuDnd5rcx6uBZQiVt21pCC",
  "key6": "57MM7yxKMt8wbHHnWDLHth6U8TPZTRy4aCsrjCiXrqaFuCa5JBv1pvneg2AmV6M6fk6RRVYBWtrdx14HfyMShGLv",
  "key7": "46KyMzh412psqzYZXeRsaBxfVpeB9h6P6REFnvVxEB78bqEnRG9eHY2daBbgxQ2c6Cvjj7nqLMix1fYSsDDLV9Mz",
  "key8": "3Q7EktYz2628L412Co7xGsKGLWoX4MsUNJapmSF6LxaYsEsqk8Rg48EgymaUW2UJJyCLpD2Z7TqW8MM3Fp6mNTyz",
  "key9": "5zhyWYmCKPEh4hVePcbTiJ9nD8k8mD3au2rPh1AbQPb3bzNW8yjcXovzVp8mNe3aJK992MFn6U9S7FHYC8mo4Kj6",
  "key10": "3yi8vKUxjDxCXLBUBVhjPRnHGmZzHvtGhqjDEqE4natnXLAJgGamVmzARaR8QnJ9jWVH9jMgjP5eK5rTo1F6FdDT",
  "key11": "3ro94PpGh5G7orrfx4GGV1hZefn2AtjDYw13YaKE6KJJwVgYmS5Z288csQzm5pUF74a83Mje4kKHZMzynaGxzuWp",
  "key12": "5aJjk3Y8ybNbvZ3ELETjNBbNShYRpXhMxyR7EzMCRjx9PGy5cc4gqfxe5xjiQ2ck8tdaoFXEPpo7swsEzYJVeWHR",
  "key13": "5fTugRZLvP3aAkqD5bfs4Dmwa82TUHaiABdxegguXrZmCKUrBkEXcQXUf4YJE79itSyvzeYHdq5WikDaTPh2pnyC",
  "key14": "4LGmc6XHmvGEuuPz32hjPQPd2Tfh1BUm9PtpJJYFCFRhvnNenopNFwBeL2sgmq3S8uGetVmHHBSos9AkEzhSLyBb",
  "key15": "5B7DmDGQzYrekBeWxeZboegmvPQXHryDA2er3q6DK8JGXgHjcAGkcQgmpYApLa3RW7vLgTybGgnwaWngzNWKjRgR",
  "key16": "4kV5XhAXJUNcTPjJjXAkyKEoPen7mfhoZ42sfJjaWqofzuwfbLrb1XA2rhdiq8A5KnD8R4DtPH1AJ2YBqZfi6hZ2",
  "key17": "4mEsK5ezYYWd9fPtqrTkbxEsGH1koBEu2n7fdM2yWxzhALZi2rUh7ScrP9bQLm5xiHqfckgXrt9wHEN482MvmVap",
  "key18": "5TRRjyH7aaYfc8dYRn2kqwUvNoNRxeUjcc7YpEJWutuEaUUkEBwyUYUCkeRLhAPqjEvFKQ2mehe8q7hTnByr2VcN",
  "key19": "3tnkgGS1Q2dKHrqTw4ZpST2szyXGcsgTXrwm3cvT6oUPmVkwn4muzppiBpKNNVQeMJPjRYVjw6gCH3HRkWKTe7vy",
  "key20": "4mVgYYPjez3448NdRp8TLgyZ4E8YbYvSQTEyuEHKBbtAwJqESazJ1PbF5vbWNZ21gSWKm84JX3DCXxQGxSX58TeM",
  "key21": "4Eb4RujVLzL8wsBkbywfJXpNCiFnMpdzTMMvWEzbg2KNHSb6raEGFGVG2XfaoDG1NrRFJguJR4ArdrdMvLFbinFE",
  "key22": "2QhPaE8S18MR2sxh7gdPfdCtZUuvtnNLbkrivFFrssn9eAhUznh9vd8XY7KGoo5yPUJRjJpwMgHdGgqdzLdmVUZH",
  "key23": "4wabH9dVWsMv2LPGj5WCu6nZjkUsCpFu8dT9zzmg1294edR6XHSdjw7dtKdbofQFXtsymjowNrCHaNxbDs29QPwZ",
  "key24": "3rYETCANgcYLJcZpe7WPbZ6RvP621RG7ymcyEbNDSQMSqp2sMFwNkfvYCAKpNENbpMZRx3S4upGwTc9t3rD6NVwi",
  "key25": "321azEdxYJHTM79igBkqCGDs1hXcewefewBLRjr2z1yqFngUENnUXHAJZhGU6zTKsKPfp8eXzZfJShZhJuhqrWd5",
  "key26": "344WLoxXwLvpKtMK8sq8FNJJ2p5h2ZcGoFNn2ZbbHyS8Kt833umD6AdL8jTHhijyMYrX3wBHwEzBWhC4ANtCAipf",
  "key27": "2UxXfdvGUouTSvjCyL5T6SpE2FGbXL6p9N85AC1YVWA4WdQtjokXPCyTwSkn5ymAqf92w651TBHquX8aBeZ1L2oc",
  "key28": "JW2rvFnvyyYb2MV76CdsW47eBoc7RwWFc6YWoaW4hW6r8C1FuCRAvB2p2h42m2MdW9eRGjGGXNx9rMYY6Pq24rc",
  "key29": "3ZPENB2rg3NDTxD41LKCgnBe2nQFgoQE8rGTFErua8JZKqPwqawQQ5NdiTD7e9TPR83CC6r5NQbuUcJRvZNbQ46Z",
  "key30": "44MhRiwimvYPvF9iXz715cxj8GmyxDr7xY92DfF8Ch4xsB8UdoCwbnZnoKTqtUz5oFejcW3zrUwZvcbTXwWffmjn",
  "key31": "5CSXSzCi481dyprzS5EudUXKBvaoHojXZDUxwKAqydTxzgmRGHq7uXguq3Q9WNYTmmMSGx934cMAymsRwdWTBKWH",
  "key32": "3HaHzvwLsZQLJjFU9WxP5YxZtcsSkU4xmzCKWPXm5EG6wWxUCm7DDCogbnydRB73yUNmCVA3Z5FLwLyJBZN9seDN",
  "key33": "2ULNFg1sVwhwLGbQowyU8dmDGYSvjMDaUV1wVTr4f8TwcC75cpP35eeZnZGyRnGVyyNpbjeh1zVU4XzMouDGaiLx",
  "key34": "5LrA2phrgLyCzxHTsLE2FZYv28Wep5D77soSuFM4xEhWw87iysQx8TdWkguXJ4D7nUBWApXoBVXYDWQXkhuLq4Vx",
  "key35": "3ngWyDLcqtfHMF5ThqsYy5ZBuNKuCkhLXqxMiaav3GkiBZw88mxErKifV4Uxh4Db4y5GMxhVKJ16piBW4yJvK1yp",
  "key36": "4TKKfDHwHM6CSLvhVRMvWwbVCvyvcdXELpLZgCYC1nkDMCbvnhsDAzgYFdGL4DoriBie52o6escGPovgLgPgRHrF"
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
