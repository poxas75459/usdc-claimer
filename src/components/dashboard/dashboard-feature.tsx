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
    "2PUfrAyDeVJVBQkjGaA3e4sR19rkev3RVKFTvmzxYDLUnhnmBDtzKNBmnt8om9RDURKDdMAWdcs5XBv8ymJcCLsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLmoQRAejTVxv7LwYk2DYfTFBAAtzHKSP3wjVHUoyyaeoXbBo44dQe2CuqA1AdD83yyozqN7VrmiycbGZ3KcGtx",
  "key1": "3WdkTp3QwiR3DkjSDSYqYSaNGGyYBr3pgmyekM9MoHdWkYoQwpn5FMCtLWdaYC2ky7njatEaZnpGW7cBWbG9YsrC",
  "key2": "R2ESvJYpLZQ4eGucJY7mBRfb7pu54npnHKEusifZ4PoyEnN376zYoj5YDRXbswuLJdBb9Msx9fNyPt12UzsefuW",
  "key3": "2uwtvynAUxauy5XzoaFpUUEz6eLcgJ8qeikLCHHfb4StsGW2ryTcj48Mi3m6oAzAx337XvuxMCdqoNjTSKdcDcZW",
  "key4": "2wjaujYo4LT53v2wXnqGcc19wbYusCq2zcFaXi2amo3KdnmhCDYtoUYFecNots74H5W2yfkU6QowPhY1MCkbj53t",
  "key5": "3DSqL7gPKK1thwrm423dAZ9EvP6AVLpcw33YcWPAgcwcxihmSeYAsTQBCxA7kH6HyAE1cuGw3MoQvACc4mKxicmd",
  "key6": "5HgfhpVguGspn65yVm4gJneC7e3ngtXa4eAPqvzWTDQrp4kAMSSfqpCpB93pmev3CVq7N1zU75Ae4qHbeBW9w7XC",
  "key7": "3spLuPJGMAY3w8PbtemCxhw6q3nXdxmnDNEBhatidpYZMkY8V4TJ9iusQhWZtUmquPpu9x4fD62fWXHyyXyMBYjt",
  "key8": "5YCRkfcnDPL2Ln8N7qzeDRfu9UCPJJu6q7kxzRntsJsNkKZdWcqdu3KGeBYQJ8TS868dpgnzr8oRhh97SWTARx2G",
  "key9": "2m2dcFpXG28B8ZUn4LKGrZh87CXgWXJwtximFPa17AmxvwAQGLmGXAuM5PSMzFP6EUfxEjUaCsjEHoQEd29nH2r4",
  "key10": "3v2RgrmXcv2dnvXmPq9krWU4QQnZnUH6V5ZwgsWPEPvbjtP7BtThPBDCVSqZh6a2jdF1BwEGhZ494ewuqCr2aosy",
  "key11": "3YcB2aFNFz7qeBVeNb25e6d2bY8KH872kxm9jZoX2ZtxHVt8YtUn3MMeY78gwEC7d1GABeyJaHeodpnJcukuaYAF",
  "key12": "QGXaAWM6V4KUZSujrfbM6jqXZktwE3Ag3L8vbzpBWCgN77FZo78m41Gp1hHcygLdwaW6vwsafQeEwo4RT9dyreR",
  "key13": "5ZBwRYoS9sUt8iFoSVsPQVYNvLt9EscikZg9djLJXJ5wf3FBcwcWNnkqRvD8dt87mmKy28NvCRDBeMAqnRFXH9Ef",
  "key14": "5sWNS5HrcwSBq9TJ6M5xwpRtFQQhPTfLXFn7m42ocV28eBPLZFphGWcotrMBkn4AnAGK49TUdUfYBZHZbGZSkV8j",
  "key15": "4wZFzRen8dMQ4CUDzmLi9u3A28YDpM1zqZvNJh7F71ocHxzyKA4xzbaS9CuKkTa99zb2FSNUhdisupmgzdrhZvZV",
  "key16": "2Pet24v2G59d9LYXTkBpVppZRtTPXMEd5VsJi3RreR2yh4mm3omq2xWHhsv5kLFVxHaaLY8aoi1ogAMb4cLr1w8h",
  "key17": "24jwR5soVJ3V1EUd4UTmy5t26wa8fV55rZN4bC66iVpgVNVCW5E1vMasmGz6gFyEuk4bYkMemwCJx7MvsKHik9jD",
  "key18": "i6GkvGkcoEfvBDNm5Job97vryScU8HXkzxGz55ZXKVV8MdfJT5CxpXeShEuKmAsoopsFpdQLiBepWaNGH2Vn1m9",
  "key19": "2hrikE7NkuwFe7CA1ZFE4C14urWVTQ2Tf2enyfP72pWwx8iU6QnF6WDqZETU5QVCDJTLrpyAb7aynFK5nHRQWh6R",
  "key20": "2QigmroSCNijBce9ZK4vZHr6hwo6wP3MoZT3dJdUEwwvkwbTpXXVpWGUwbXCc4uWooV3W3byJsjz1m5yEa3sK3iu",
  "key21": "3hPK27XZv91EdsEtTjVCFMtfgSUiugoNvSenTQEY3i8XArpV7eAB3GQYpD9Mj3frj4SLC9KtjqyVGKkNGhBZJs2t",
  "key22": "2wABHiDSvdtMBAAb7QoKSkMsFf5VfRYgWzfHrTJ3i67aQB5G4zSSkSwyRJbAAudr28mogeCeAH4hKKCTqxnsRypP",
  "key23": "3SeSYKVKRj1YZrqFFLL1xc1rkCzEBPvpRe4WgwsJMifqbvF3VQPzcib8Gn5QBToVXuR7gExBCbVuTZBjQxNZQ53w",
  "key24": "5h2skjAzHJQotqF762Jx3WYQgZRbw8c9fXCfDfLjoYUSTxN9cnDDniZTTuWHjcvDtkytUvNWf2G9xgQMdmGMtszV",
  "key25": "wyy2rPMgBhCW5n4r9e4ncTAwYuXezf2LHKr8JKei2UvZkH28cbEfFhiz3HtLzg6M6WzVFBceQbbFnMRWsLfmEeW",
  "key26": "33yPyTKWTM9jU9snGX4LH4QDvBR5UxVWJtE3XVUTkyxBVPjRHsGbEZbL4zi9hpHNnWm8rUgsyYcptFpu5usvH2zE",
  "key27": "49MM1BzGNUT3qh2xwFBDXGvZwmCciiKQFCi8vM4bs1ajW587qC9gVFgjj7HGdEwzYGiubYwVAAqFMAgAG2HDrBUv"
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
