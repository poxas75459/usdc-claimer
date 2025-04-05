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
    "2BLzXtz1kf7yXMJZjsQZBmisEhAb2UfAqLeMKN5QL2VypQsoi9HoUSuS3uGdNdxjxXWURknCw2eKnP79FLN9HDjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAvgHne3qzJcmCz5y7qtz8gLaBf4Jjvpxm8Q5R6HwnXRggAx5KkkPQrCJmhckAQ4BY2VpXwAxr7SHvX2PLUF5Yy",
  "key1": "24PJAtbHyvKMTKqAuHV52eekHLRXMUDg66ztgGvNG26HqCM8HGaVW75M9F7w75MeUfKSbgp1NsihgX2JsnbKBe9F",
  "key2": "3vgVcfzFCXEjerGuweozNQZ4ZU27z8FWiMt75HCKZ6KCtHoZNqrjXRqmjbyEyBYYWFJcEw47oDs4aM4HC9KdrqkD",
  "key3": "G4shXUUysVRFAdyQ67XVSXudiJPo5X1XPxsKfMoFp8fAXP6cvCtNJtxTSDQ7s8m8izCRAG4EvT5BcqSi35KjuSw",
  "key4": "X1vGNXGWoAR332UyWsFpvqe21wfPxgHyqiyFLEox8ZrPxieQTV9bC2WygKt5jEViX2t7oQqYVrVEvxDVKhfTeEX",
  "key5": "cbaHDKNEY9RVRmwDf6teU8z6ZxfVX4fo8FMymzi1j6yrVXsQN77jQxM1D7bCem3TeJEoUuGDFAKxuNH2mWoZxTX",
  "key6": "3YLUovuJZ1bcESmBWg5rkYSPrN1PbTKEauF8xFSasDKjYnNdgMQFWawwPkurJC6aoQYofucJPYb9Geff7joLQcqZ",
  "key7": "28V8Q1m15PDrikeSQnZQvb4X8BECEi82UsxP2Z3XnQypiw9T32JffFeuE5LNF3HsyhxeXy2KVyo6LYiakuzBSW3L",
  "key8": "5xAgtuBNNhmz3mSdXWG57qHiqJfpQDt1UkwvbhEV2r3gx9f4byv6gBJwLYAqi2TMBLSRqPqwkapgyBdiX4oEPrrR",
  "key9": "16FDYtmtMEqJFHbuC8XQE71rBTixiaJSBXDpnikjCbrAkncDJd5pnxCDDX1oybadZh4rnN7eHUvrxHoJJSf6C6D",
  "key10": "3EWWMbavSna3SX1XpygCWk7GRcAHryziVjRZcj5qWwpxPu7Kdi3WP41FNSH7Hdyetph3FBjgFtc7pFrn21RNGCnB",
  "key11": "3CV386dUFWBdAhYeGMUFHr96hEc7XHg4fvQJyhNzNCPFQrPtS9iKPnKsoez7fhR9TuPv8b45K7sG8fe7nhSN2shw",
  "key12": "51Ymhg2abPD3AFQZK5qoveuu6SU4nPdcf9SvQ1Um1QTWgYSn2HJnJ6gMk93FrsYDQyy7HFU1fBcs62AFfn7MUdJW",
  "key13": "2R9ojmWniDCvF9vnJdCYkGbVxdaVd7RUhkfPt1SGp7h3UJkiiVGboTyPwQ87tfiG385BDde6Sc4kCcGbx3wuJa7V",
  "key14": "qjSHdNhK3vXRENd8BkgynTURzb9m7ophyyRQ8FCJsVKwGcaDtM3RLsrxBztWwzYXFRPEW9fpqCY5AhM1CVwm3LH",
  "key15": "4mJ4F9uhYsmVPu1u8jTsKjNZQMhmK3upND7seyexNf7JBn9mU2e44PoepANAGiFkxgsTRTNENWCwtct7xjTWgGqF",
  "key16": "35WYosgbHL4fYey7FT1Zebp2pFzPAKd5iBXEyu4QGf4YynmKgvcao33MJHtM4R2hCXwsE6m4oHNpCTC6iVSAgBZr",
  "key17": "4pPv45NtXKxQYus4LnnnqNd188KK8qMCaSPSmR9i9jsKYN3hX4Y8rdVPfGaQUYd3WmAoo2iiqW7GaijnvLotpKbp",
  "key18": "45EFUDCmJSus6GsQGNn2Bq1J5bfby5eMtK4vnFvs5RDd4R9T3zGHWKcnL9AiZVsQRYuRod79PoVbL1SjKS4Q6vrR",
  "key19": "4LjKJDzWonVAyj7xhGjHBob32MeguVoefGjgXCZRzpqR1Hckwkp7hrCXsuChFKsRGpAuZNUyheAufqJmRhc15hzq",
  "key20": "5cn5cu8Sv69XtG3ac2DaeEXXg6tAbER17vaoRatHFpm2HEYZ6qPCUcGe7GST9CMPB1zvJom86X9kj3unXLg1KCn8",
  "key21": "5FbpDRu4QWB3TGgm7iRKzS6AsevRPV24CAi8rm7iWrxbssMe3vBoSztdWbjFFmcbf1p2Yecu7AyMZHpkRYF19pEs",
  "key22": "hVSVfieBRZLvtwzT9D3gxMKioXDQ9YBTZo3KWGrESAZhNuycWJQNwpe7AJkonpfY2QPdcRXs11x9dt7Xn1znHcZ",
  "key23": "4FTA5UiNWbxT6v9S9VXWNzwRJmdTLJufydmWZNA3g7hoPp64uyrQzLGnPyeHHSbuurV7F6Rod84pUahzG5BEdgyo",
  "key24": "5om87H1BL1q9ZTf9stCEKBpZmM6MCtUa4KekDWGSSvehzXzMyeMeC4uA9a9HAcfvwkFFakF1LQCzhrf1yj59hN7T",
  "key25": "38wvdE7qXgwrBfFYfaQBccSMNiHH2w8CRsQjcEzzhR5s3bXoJV55paPvwkJE5rvNQ3b3VDdopNBjmrnnNqknb4ta",
  "key26": "4TLwa2GzoQVdAxUjhxfzWuH81XYFPxrJRM6xX65bgQVYNWtoxQ4tazwzaDkQik7BWgFMwRQG9gfQ2kapscQuPuoZ",
  "key27": "aFubcTsmST8gt7h2YGqh3ygRdLdrrhMMttEzw1HFeUe4F5nHAqxsdatj3gHn8JsZwV8rQbEDyERj8R9mniPXs5y",
  "key28": "4BPhWgfYAd4HqAqFGraA19Wjtx75vUCDVPeZkGG5qYczC3setge15f5yNN7SPLUtWdM2fSiE3h8RZz9oSphP1aaS",
  "key29": "4yGoRKMsvT2ereyhzmGqzEKGWkNiBmc9oNwTmGyxsrsBBSHaVjQoGJUSCtm18oKXcxBRQFFehatAYoMNgb5pLti7",
  "key30": "E9EXGzw1xre47fzeJWM5GRXyfVFGJKJpx8xh4j2syHwHmWNv5wWM1H7nJRSbwYKJk6hXbgd1Mq38sT3J5KuefiX",
  "key31": "2DKqw35jDqmAHTZqbb9EB8ZpwhXS5hLu7a3B8v4onHMBhsXgBiqWhqXFKmgtgnLHhEFFQNTi5rGfuxHJTVxm3Box"
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
