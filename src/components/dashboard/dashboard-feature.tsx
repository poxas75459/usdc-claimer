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
    "42cvnvhCpQr9u19EjSpqYWtDPkyADgWbagwCTrXSbS983SNsiZ6FYs2HzeEEvExutEPcAV4WntuHnD88opq7xANF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ve91F7DdhMDtUwSwCcvXJ1NU848R8jzqz6Q9JWp3DqjGwdC7Cn57L325votUsMZnW2P938TGqfWxNSn8HrnmymQ",
  "key1": "3wKBdUMhmC72SbG7HNduDBr7VSEt7jdrmwoHM4Z9bMZSDWju9WJqd7dABS2xAB7q8fCN9QAi8GMSsEu13rMgkoNp",
  "key2": "2yZPCP2faEemrmoX5W5jP2eHUxKCaff7AruUf2W9haUUbQw8fTqB9iQuqKtt3Pk6WZhttBxwSzJceGLqVNe81KEP",
  "key3": "53LA9okay8WNMDwAtFrJ1tzr3Y663fGHY4vMwbHC9xmXCHWTkvkZbgMtjrBsBLUW65iNVhDjC9zyzqimbpABiQdu",
  "key4": "2RnyLq83JnYZeQTQQrRx8BUtd2mBsvuAxha8SaxF8Ci7rF7pSnFUr1xZkzxas4Lz3nv8ndLHhRMYd7zibejHYgpc",
  "key5": "3d8NHky6rvcXnaZ4VFsMswPpnA3c6EFrjABVjQGCro6iGv1pGFYCxpmHW4fjRXLKyrPb2E8EQ6tBWe2VTFcZ3Zyv",
  "key6": "2inGD4RiC6BXZCgUtJDLz3RkX9yxu3wj6W4TkRADsPFjW6BQnLTBXd1ghQTtUs1MCfx8oroLK5jtDARxwWxZWFWf",
  "key7": "2tCiSs5wyHTzaHZAPP4dg4nndiKtmjg9eBF8BhmtvBJFxY7NyMtkh7yzwvynN2HPuJTghfpVT7zLNHrLg93qzN9J",
  "key8": "5bSGhDWt1dAiSjTvg8j9fUhkjMxxaJgRhttsX64RU4PesoimCaNDcnpHH2mEB4ggqWJWNBUNCwDiHPBeKm9tKUxm",
  "key9": "uAPwRg1fsH1bugrCUmxPnBF6q218WzM7dQ4cQLm6doCMYiDCmhT2dHsF9bEiSn4cH9BH6qpqdTbZMvXyz38UZri",
  "key10": "4bCgv5CE7UocUaGGgGGy53wqBcZnrFCoZcU8bWRifsPdZ4t2cvi9eFVdv4S6UeYYCrkJr6PFrTEurqeYAHmwLbno",
  "key11": "4ktVbgGCFe2ioaLQBAR7Sqn8UqcuoQvNzCrsLNG7nwcNQ8uiFUqyHVzeTG2jNXTfxT6QhKYgFs6PLf13PxWc6vCM",
  "key12": "2EJGUmxB5xjPiMMbampuDEjGNN468vMFE4qgECmNsdYJcU7asyxnzqgnzUfXg2tRDVgBAbYzQuez84XL2yNGRxCY",
  "key13": "KkRzY6dUq2pbsuinNMMoXFUhsLoWzVspzPFftv1zx9dWtvUbhNNtF2SEFv2J3XzasKf1v4qxqipXSHbeUnKJcoB",
  "key14": "2nFPyKaPK9J2C7w7ywmTKWtGN3LiNi27guQHCnsx1NWBHEU2NuVKgz2yUYDzpPTVDWTo6PSSv8qUNjcSUpy9whAT",
  "key15": "3k6zX74HG5KKWVFw2kgYgDK8wCQeaWCQ3QU5116ouYtSxwtNSHQSpi5yGFXMEXpfBVRMSW1UuhantKHhQFtKiiuh",
  "key16": "2uDHTMjyQfbmWkQBhyjiRpr9AKXFaaQBYHhuKVG8hx8XwQB2L8BYtKdzoHiDJ1NemjYeVVY7AjJjBeo1J8cEqhCb",
  "key17": "22c9s6yxpYaMAgsWrX2kteczu57RtHos53uiEpxLA1zfwJkcZ1N94acrPdX97vXtsGARAYFM2cUXTExhXqoLxpfJ",
  "key18": "2gkuHLoHQMDGFQiFSs56tYLpeUdJU4751PhFiBzY9HTArdz8ePqopATXQfDyf9wPuntu8Hyo2VB9rHXU5B2t2xyj",
  "key19": "4PuXzTvwd4Ec25eFdtHPxp4LzqnXSjkW1Ew1mP2MzirQpV9U3WjKb3go9xT3zaSb8RBY5mDpKCpaC1LyqpNAnNBs",
  "key20": "veEZJQSxbLxGaFwYpTB872btQE9MaUjKsHiM4HLTuRi1wYziHueMHwLuj9Xcpn86mg56yygiRLCKhuMeBMhrbnG",
  "key21": "2i1tcWQc4vGTRGDf8a2kTWWc45V7doCj8pqt3sTcwyr3NTRjY9NyK1AAUYuPWHPkHwxiNxZAdk8AizXkDoHnZohj",
  "key22": "5SJMHRWxCk4vjZYwomScpm6LmJrqhTmR4LGEsLQbJVmfkVTTtFSLqMghdLktRiM2abCrusWR54LDkArVNXxJtHDr",
  "key23": "2MyWKvgLPiyhBA55LPPHQj1D5xK6tcAQR3qYPSHsq6qbie2owv2JZkyVsXBzgydV1YSbPzv2L3o9KyHfb8Ru9ZF8",
  "key24": "2y8QX9r7qp93twk9EBC41dysCz9wwbMQpiC91s5mwhTF8NHpKVWQfvYNaBAZ9oypz68RyMcbkB9QUaVdeDTpWarf",
  "key25": "5uXyjrMPAwfuK3GmMVCKFDXBp4skL1KX2rmFTZYkbk2ijyndTJtspfavbnTM8Hv5h3suHzPLY67Q1Q5BzgXJLnut",
  "key26": "5Pertpj4fXxvYXtZDcDPVjhcGVqNX4NkoJKpo5m8joMthXZg4yNFAA44XqhRdPey5QFZ42s8RqT7huoRi5FoenTe"
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
