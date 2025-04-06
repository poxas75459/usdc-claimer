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
    "4FUBkFpXfCURPqMu2GDP5fAgHfSiGVaKSpLdgLWTaGYLZhi2QUmfQFQfuXWCjF1yjQ1vUQZ1DRhxVHgu54ep1kRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwV1aHfVUWsDd6UsptTJesPeKwkizLzXz7BjTMPfQp5315XHV8gvEvBpdZtxhdgX98h5d2Wu5FA6tyDKsni3Yno",
  "key1": "4p8kX4Qxazipdhm96evnTkZ7z1uHuMnvhpqVjwxFMp4csjK7CwUqUUtbyGPUB6XbnK18x1sY6CnPi2anXnAzT4Vg",
  "key2": "4KhpFBjjxCbbgvUC6FVqYZhqapFyb5kQt6MPSwg7UnQi1475M9gjnycHk6rYVEAYNXu7eoYzTSskJmyCgQinAjxS",
  "key3": "39pBkiuadubwnaELTWQBriT8wgGB4ph2WCXSRxTWenYNZA92SVMwJuURfcmYNpjqodwGbxCqXhpikmnVTrtvSvit",
  "key4": "4K8h4zAXfo5SwPFBZAxeyEuBttBbVsCuyf9rMhHsRqFkAYdKXDGoKsSgcfMQ9B3PUuPQJeryEPWxWyk1rUXrWRDM",
  "key5": "3NpKDD1nT3yXvSiUcvBy6TKdmF3BYaNcTEGAigJLmfnqEmTn3p348ht5qg3Dsg3e2t1U1cbLhEsETfS2wZAyC3JS",
  "key6": "4xH2WBaUXvhhhMPWSRKR1hPYCsLc94u6h5thytTuc4B9385MXf3UVNPVZFWQRffhCnpqkYHuqZC7UJEvhB8f6G3C",
  "key7": "5btwcrTcFSMQwUxoRBUYLdVoDxNA53GEGfgNoByHiiYbnW8drWApqy59NN8fpMZtGXEij4MdytoJPZAZ8XJXdv97",
  "key8": "5b96UQWwG2Uyd1YDStfib7NdqFV3WzvkCq8jK8iMJdFxo7hJjFb5qDbUrKKX2whEUg7MqqvBUX7VM9aSgpBQF84Z",
  "key9": "BbqASb9aocsaK2C14gpbeAAQ1Sx2cTVcUALnd3GsnS9PmaiaRFgM7ywtgri4CbLqVZ23qZPNHzE8mJQ91dhs8JN",
  "key10": "ANpridUYhogH6HUrSXZTBF8GeZ8TquwcyzKSYTFBXUNJQdK6jkpy1T5apSFpnATrwBV1nekEyM8dcezFhdXA6KX",
  "key11": "2UMdCQkPQ8QDth82qXzLMCFCs2jDVNTxLWppVa12FQZ4vAmYQaCFe2akePMxg4hSbVSPJUrc5Tzv8nBnDLAY5fjF",
  "key12": "kxvN2yYjmz7jcwEp1wjL6cA1CaNrGoAbBekCzdPwWqcoK8sNnkz1VHS3JNWtQ7hY5dJk7dtA8RoKmrZroP5sMjE",
  "key13": "3RTr9tpLnfpSfstY7uwNGUes4mRtDWe8Go3cHMQ4GPUfEYLKsqmDEKz9SFA5rV728Df8QTGQQz5cDx27LS4UH6d6",
  "key14": "QzjmyKZiZx6rdbR9fHAMeQfczP9ujTSaWaj1J8kJUjpY1qSoi5JwfmAoK3aZ9t8LCEN44xPqBoa3QE6EeRYwvBn",
  "key15": "2KXWtCiD93vVfP5dM86wT2WvroPewwg5ktWo66BndnjakMz8954m7HcNEfjT3zN3RshXy4rBu4jCCiVi3rhNgFWi",
  "key16": "2xqFSpToaXwEifpQKW62acm2URrRPiJ6346AwvnGaqwuBRLtERbCyZKvmJ7RnVwFEudZPBmYWzYzBr3EBgk1ZHRp",
  "key17": "3kzofJMeawu9BDWyy3ggR6DSKSUEFLbbtCKxW7hG6BraKFPPigFNBycqzizMQbMLYvufSfwiJUahN4ci1RHhezjJ",
  "key18": "iCgd5MjHNVizUFzo3ys49My1NTp4TQCRxtzWFnMG1QfQFtVT9wCnx7keVWPG8Gs3HnYVWZgVG8UdVdt9dTyVNTp",
  "key19": "q57X2A1S2Va7GurmgQiLjQ42x68idVtcUtJjEjmLzKS4xEcsVWCXqqWNeXvUKtauj6CFCLhrULoCxfNirvFcX9D",
  "key20": "3y2cMzVvhgK56kLR4iq9cY9yY4dGL5Yc1ix9spvQF8J8kEwUGgNjSEbigxw47QhxZ6P21XQDoDaPA618F72sSyjG",
  "key21": "5wFtSRkfEHSjikhjnNMeJuZVqvsB71Nwy1NLa3tt9tokii32QiZBCqT71rcGtJQqMUVhshRdqbYg75J1b1mGGzUR",
  "key22": "125Fw6GXpSJBDMXDt1NRDHoqr9ZJA2TcPHKctKsFTT7spM4BaretJqYosatDxZcWGAhYn6yHj1ZbXv6pex5raERs",
  "key23": "2bUMnvhuczpprFCmuPrE4DLsWKK4AxbzNVEB4m3pfKxPH8HAzzSXhDme9cDCsqXjhoWyX5u5oTF5AYFBb5sfgFQh",
  "key24": "3sQwdtaS4SraAGusoU9bgbaRxQWuAY6WnXyDSSqdUevD3gAaMgfoAUebugA6atBeh1ABfpSVc9SDKxnie9NZwUjk",
  "key25": "5ibA2gFkF5cfCaCF3HSVQ91utEjCFkLLt2S5qiXVemoU4crgKUY2CPWNJiU8uKzPgRAqX9qGHPB7SELfsEo9nRUx",
  "key26": "3ekrqojsZAJrQ8opN6xfos1dDNxCt7AMsJQmeq5vTqiaiLNUt1PjfbvpJJ64CCcvwCCaMSVJB4ZDFiz5y4DrXPff",
  "key27": "5NrjriNdTfc5NkYQetUDMx9fvpp99JtF2E8A4ZnhLAnPwBF1vHAJ2gZvUQpZSBm79pQD3ak4C66tG6eWFJU1a2zZ",
  "key28": "5PYsi9YEWcyEGodnGLQ6qmqx2THne9oCt2Dmdbg7TsVEEGm51U9Tqhor1LHVC6Rh6U7rSSQeenofJe2GHgjuraKv",
  "key29": "2Yv4EM1aYs8381oQ5YuAZbu9Rgmxvc9pSYJYYAQqLtahzFtUckHEz2uTVoofDXC1yEZYg6ebx1wo1LhRHsB2mxZr",
  "key30": "BE7QYokRifKtryMzFT41JwmcFY6z9Qq6QWvxHw8ZPzB7qP4fyAnbVv5FdcwZfJVacgoeSreXhYfh9WgwGWAiLcE",
  "key31": "5uhR43GRTRXFneaiVdDsfc2XMgrAeNiY4YrNQ6x7xAHvVRx99pvmJiypSzRQwn71iXdE3EZY86eaGapFYbiLqTzx",
  "key32": "3yXoq6zmjV1erzT8iBPKmsNre8egtHYWU8TbsAJdUe2ibr7iFJtQ6i43sfdfRauA7DPgwNZAHQLQxppgKezmY93a",
  "key33": "5US5ynZgP3GMVpJPxbtaNKQ4y98awittkvHwWs7nLncsysczWU5NJMWChyT6YNUa42XVJtHyBv9UJMvaEL8jB1qH",
  "key34": "5WyGa8S9vw64bRo4kGUPmfWJvZF1WyJBV5SGkkqYtRfcBZSFWGa3MTZzgaASRYvZFDkmbgpozKBJGKSksq7WUKWR",
  "key35": "oW7e58r3BEXcdQquPPMZQmkSqQpUySvuaWjNLojJgKnQ2w5YGYVGwHNwYtBbQuThFhGZpgtSJFU7H6e4p6bSDxp",
  "key36": "5abx6sbSbcHic8yqZxEmdhTdvkWMuLcm9j8SByKMVuUkAgQ4QMTJdquC51LsCnfPm4iNgjBssucfKAAm1nH2brvW",
  "key37": "4mQVwScqC3vSYE7Rn6ADFpipnLL9Y1zEdzr849qj7WKFbEEkxN98gqs4cLaxSC646QPn9yBysdfHJyc5odtA2ucN",
  "key38": "5WmVupbiMm6M36N8aNWJY6tRBqrUkNj1waRWyij2TCttiUyoqFM1WdZrD5TP8zbYkh9953ZrQd4CRqC6VhKUBVTw",
  "key39": "2a5B8sCRpTEnvBMRrScPgtWgyL2skW7qxnvmEXdraUekjaZTsg8jajoMtnjyhEBSEYb8Acug97z2JfWpKAyxEqcE",
  "key40": "2p9EJyLhDzPYvcT1w8ht5fdsAUtiJ3twni8oAKn5p2LLj7RfyPANfwsxD3V1U5xevoPGRf8MJrqFvRNTRyd1jJBp",
  "key41": "47Bk4vfwvyRVA1mqWUexQh5o5PNuWCpHhPDASTTEZCk6ouSftugsChymrTZFecYdkmZnbzijFPAw4Y7LTviTSMaz",
  "key42": "4V6nZdqqsvtXiznhJ7vA8CfnmxyvEKRVbTcKfAPwy6mw29XPJkHX9BNkBf8BEzuRJ9EW7Tr5NNL8YK4cDJHQdKBM",
  "key43": "2cEXJ9HV4EGJENcaQhjzusTRRNnbfgCDEo3CHnSkNSXQ8UVxvuYj76gQgHi9zFuUb4BvYxw2ZZQtQSKiyY2tZAp",
  "key44": "67krtsnJxEZA1VbkFNbK1t9vuddvgJoM3MeweEBDcDzkAKore9fJ8g5AdakTy332yGTtJyiyFaXas5oKFCyhEFzh",
  "key45": "4Dh4BZHNRAxZGpDEmpvg6PAw4TUzq7YKDzTqJAXWhQKM3fbYBcAzJqbef5jjJRoG7kE97WPAawy4FXHpAyEeACMb",
  "key46": "Y6Js8oCP55bQNk8qvd88cUm3WxibgkqSdZ27zkZmh1HfxyyENzbfEAJxrZHe69YGPDQi3fcedP4hpqLWBAYGvP3",
  "key47": "5zenfMZ5quqARdz7HAqvNKViF6bccVQLpGQkxfeHnq1Nk1chuLv8bKxTdUnTBTcQtoX9vZMsQgpFXxckrhV4EaJi"
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
