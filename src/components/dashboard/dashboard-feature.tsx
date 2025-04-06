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
    "Q979RMiQaKH4H3xq8nta3Fpb1DW1nD1QHtYLHsphLUiwVhvsaA6oCAVWZCRWN6165cPa1GFkmCteR5QxEBbf8kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cWKkrTpLLwdWL8PjqFYbPV7JssvgEnX7Guy8VpLzziCWXy9jwUxk8Baq69G3B1UcXifgYyqHyBLPYvvNChjDhdJ",
  "key1": "2XTg3LKTVoZPqwjSVCPBDFtLKc7zB6SqrQ969JGEEHzgraS2QkKCVphM16STpRixsdgFmzPJYSJiB2DMTcUQqwYK",
  "key2": "2yiFvsyzD1S6RhjT5HNVkXA2JQSYRh3yQGrjJd1h4XF1XNPe2r6CoZ7gJmLEkT4d33HkXda1hxyPazv1ZfdFqUWL",
  "key3": "feZsfN9hciQcVVprbmUe6471iYkMugPGp7DCD97xH5YecmqzJDD6oUZwuJo9feKN4qcaccT91VmBS7u7wDgeuax",
  "key4": "ypArc3JGWYmYhfDQSE9RmqpiU7ruxpfLZCtbZNDrtMjwTnAv4YMtkWgvgyTsdLrJGTRvBvajB6FUVjeX8cQqB1Y",
  "key5": "5yMLju1MMZ3u4UqfZmwMfrPHLxRJP7X99eJvSfM24si2AzHwxTB4yTs4P6ub3rDxU6jZCGU4DHWkWnHRuZysQTqa",
  "key6": "31EeJwHkSzCDbcAFv2E2pNgLC4KxjbAtUGX31D8bAG3mzysqhybRjJDiG78zUAps3RaHd3HA4KmaH3gDzwVGpCAS",
  "key7": "4esDz49jWuFEdquwQh7235o3m2cXQn2mmerDRZRHwBvBroZqMRaqZzGJrSsuWvexpPHK53bhd8sBsqJU8ZePsuHR",
  "key8": "4xBEvEh3K84XoGH3sG2sSoRtebhfNTntKjfBgP5rgFb2WM325FNSkBoQjy6HkMhU4HhBeTiooJUmxSnQeR7pLaAH",
  "key9": "5RyTkUYakYGVfGrt13BmrykFt9LL6m1S3A4uqifctLURNauSzouHbVG3R2KA6nYYgV2jFVp2NvqBPUhACMLvCrRx",
  "key10": "5mmpzfKBbCeX5xfBM7oG6vbchoM5SHZhVB8dLSxLmtFKWD3L1RGQCyeFmMvDBTpTCsX42jxsQUJ13KYAAdFPezMS",
  "key11": "5zkop8Msr6xbADKk3pNCe8mJHJYjfY3KNe4m3mxsVQRy2EjRvCeEZCwNJTc8PqCMvYE2kVQd2wbyFaQPXu59G9Bn",
  "key12": "RsarcPzBpFfVDxMm9XXudauoyrYvKfUtRh5Y9N9jSatjh7pJTvf4xz9T8SXayFRcBDnKCpAaxjLpUoNTqTpd3Vj",
  "key13": "5ffDZReRb8qbugwMevZWA2QcxA2Ak3u9bqz384td8QL9h2CiNFESLinFyWqEcKw5TKG39cha7zfUd4Lojvpsy41N",
  "key14": "61N691943rhQbcgJ7GhjWtNfkEgVkggw6jTv7bs1F9drnmZiAftEEgbsgJh8Fg6sJm7R3xoq9LnM77FMJLRA9Gmh",
  "key15": "52oMSUQjcE1Zj6KVU1K6YgJhyyrLWnSEDJSr5ToW9J8tmGYD8cGovvofAzJBAbHcndUf9PKmFXtHHFVaQnH1YCbJ",
  "key16": "5Akzm3utmZ9p9YptZBpeXZzxcrkFnNnjgu2UqjGPfYfwRRR7SXXbRvnYhKX5qEweFmtj83YTjvKrjv6CnBhH3EUQ",
  "key17": "v9zxo3gNEigNNHXfWWtiQdN2etKtxudREjfkRZVkqoKrLcnFUNwSJKZcyF6423sEqekug1Ut49iiahHaDeVusdy",
  "key18": "4wBfHAbiQVBQ3z5ggQbbeSdHC8Kg2UTAEmRGtTkVu6DFeXY51PhHv7dx9PPxKfZvTc4DNty88iUmEi8xNVTebEmn",
  "key19": "3oVxDScpS3piduT5E43BBjm9b1pnzFZVbqe2PQr78kT4wQwxKzXiqkJhM2uBFyUpYhYQBrFLCtXrJr4MNskkA3SJ",
  "key20": "3jL7gZQ2mZ3zCjGQ45zs2Jawtx8AsW3hmwumhKw3uhvvTwsHZtb5aNjyJvWG1HegarrTWEKaysvedqMAuHUGUTWy",
  "key21": "4xzbo62LBk25Thea4RYvTvb1BwUGqFHf6GKocogG9RuVpcFH1sNzxV6WiakRMR1LvjxUgXxK54LM5sqD8Cs4puqe",
  "key22": "5Eh5i65fvFWwEx75E2SL1zp7cxrActC8RkHFdeeuYw1EwUBze4RrDGgEs5JtFxE8FBFcRbqouhVd84BKNadT9qxM",
  "key23": "UgMBYwa45u4qgAD2Q2wyTEWWN6VecAbKrnSnTyNd43shwxq3QdxJMoiHpisAX6Hfyiz2w769osCMzraNqoSJGBc",
  "key24": "24hBTo35pYjWUffL1k9AU7k1M1x2jAjcCRQ2hkKicXGbfrj7MMZvdbkgH3XkRDZLNbhJaygCBXqYhZFhmMfeQzG2",
  "key25": "HnDBZ1ZvqsHXcZh7vtBPAbXtfAvdpnAFbfFVya8WMnmfGpTAyri15QBxLGbXmBRMP1MPyscM6DiAdQkZAPuYNoD",
  "key26": "58u7QVpZiRfLY5yq6V72z2nwXocxZtu14wQGJt66gDSDw9ZgnCWcW2o4XGWMBjGkBzPsV6ixDD8f1yF2put1UXVb",
  "key27": "jBLbmtU95kfujTxEpyge8FLDbEyCmcLgHx1XZLejR3vChFBxcJ9zFH1KeJbSUpX9yFQqLQvYtUckdayB61DnUkW",
  "key28": "Lw5H6R8sgzhV8Szbg2P6YohACkTWPqcxMshLqqY4VZWAEvvtskSWiBP3ofp4a9D8hdExFYmzzFY5ysGNu2E9kQE",
  "key29": "xJGErnTuwRVcc2tqp7bNvrUV36GsvEcK9iWTJS85icGAC5gjmNNd1wAXQruYLDSh8b2dArG6jL38aXrpbT6v1Ln",
  "key30": "3FLHPbX6E1ujfbQA63pUmankcAeGaHRWcFRmzywzht6hq8hbLwgBocZkmGT3bGyAGiJrtXPHmxoVj4rwBPiY8W38",
  "key31": "3STZSms5xV1txnzwhPKH5hKY1i6S51EU9hGnEFAApvCkNfto1wvet2JtAzEBXpbRyrCfqLQ3MSLJUpaySSttyAy9",
  "key32": "5aCKiihFHHYpmzUAggXt1DobLERTpCL6tSVsQabyrbMY9fvPPtH6CeimYxE34Y6oxkrSYFzgYUAQhketctAxAwVz",
  "key33": "3QZn4cvRAAgHGADkdJUveAqjr4jyL2yFtDqR7kHPKJugowfyMvgtJgnVgPSwtq6rFjAR2Hmrf3ECLC9T5rvHz5By",
  "key34": "63ZMXzFfr9kPyhvXjZxKPGtvirLbRio1YpD47wv7Yp7qUPHyybHUzCZmdDTmgeeup9pxwTSAXUCjze3LLpRCpwbG",
  "key35": "3V9N38ov8iqsQhLY89spQGPXYHx6YGx1XCJT6UhGTTptzTtuXgFDycgGrv9mu36mN8Vngp6J88cwwL4TtdsySkZ5",
  "key36": "NwejgWwpoqy1Um8XEtFJGhGmsNBSVmUqSPa6A7aYM8S4Zr3wyYJsBeKEF8wBM6tL6baDwHJ8MmeuU9uA2waByLE",
  "key37": "3DxvTTZSsF1isqiwPHjDrQeKVxeSzyER3PeqFvZ3N4rKUsmte2jnuLpfccGnxcZ9VPeG8A1XoCd5HL4gfzft4oR3",
  "key38": "3ntQq732szx8KGLRv5TaLtkAkcqbUDwLSzk4B13HA15FhTTui9BGY2jyCwj8Br9PixKKb8Ak7hvk5j2AfmwfkYrP"
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
