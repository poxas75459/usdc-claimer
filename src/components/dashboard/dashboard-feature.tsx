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
    "3JoPqDCmJKEuNZ3svM113AFDx6v9JWAShsL4q1YUqncaRhBKp8iruZDCtA5NTWhJYaC2LcVQV1M7NzRtVXTXVRvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRPukZFHQT2BTDtRtrhNoXd8He29WWVHLmPNHSYMsWJ1XBpY1ZrTvB2MMDBAHBdj1nN58TyJcwVvexDyz231qYe",
  "key1": "45Ykn94tqfgovNygsAw7CKWD4pvgRZeTpRTWmpBhBAVombrPY6aFVQdCXhbZqUdJxJdERpE2PRnZ7Y8WbipNjYZS",
  "key2": "4mNCmkzxynunpCiQ3xTJjd2tUAWpfXnR8XnU6FnsukiRyqerYB8Nzz1e6sLZkcS9mu23PbxjwfXErhGv574dDKVT",
  "key3": "5GyfYHtECwQMrtsS4mh8iXwLttzWEwLBAjouT4Z3cTUfMNYGvK3cwf9pZoRrNqPEzPGszffEt8tue9EdKVXPjuCw",
  "key4": "1BuUDL67jEf9LKXPtFBX2F9JKe72SqBDHSW2Zx6DyXN2D5LRt7LT5rU1pZFiEbj2fvCZuF54JN2CAAzwVRTVPgu",
  "key5": "2RU5brj9YgWAvJSH643gVPX6DvSA2ja3ExGgh7bsFFU9aAUssN1ALEexFxJC8vLbTvRmnu9Zcg8fmbHhzXxf6bQh",
  "key6": "4xq7FryFet52pvSH5SDZDFNvpCLFtUoaV3Zz6uALcWbi83WDFKH3geCUBM3Pmfft5ooXs8xPwpA3fueowzT4uDx2",
  "key7": "121obMmJzSshyEXfcFmGXGrgrJ5vMLEnvZRTsSYRpHmVj4DSPvxRRxiYA7Wezogz5XfnSn25X45pFADyxiDj2vT2",
  "key8": "3Lyb8tz3zbA4NsH5ptwbVYac9tG5ECo1SMLrZm4iGZaETWaUVdcWoeVb9YMSQ4EgruqyUUtTgA91kL9CweRA5XQr",
  "key9": "3k2uifRf1BQNwLHAVrwLtfphn1tXVgbbzwN8v9jCSKMweDp2gwHceR4PP3htxf11Z8kUmiyuis9YTvhGpsR4L63o",
  "key10": "3vcUj7QtaXXk5gzXPW5LWZQ5NPvBswEmDtSEQpncr9x4XLRPcse7sZNxZsaugkvYTjKsFTDzjj1yTYRK7o7jFpHh",
  "key11": "P3zwcfZxLqGRaof371pzs5tfXsetMVJph5RQ2ANMT9LbHZNRv6o6a1kPzM6wcWAcMGPXe1fhenhxnw73UM3TGMt",
  "key12": "28CgFg2xk88PHYKYLyZdesLoAvf7KEauQgYFo9CfuyWUfGQVFEqkrq7cBchVuRNE9u5cyqpMRNcUEKDF3CbYtUTG",
  "key13": "2zxkTeSyHzkjGN9FZYCiP8JZyfhbUMq8doLzfoQDNAvWRttA9pb6mfh6azWHpD8jAEQhh6QAqEyu6JZDTf7mdwUC",
  "key14": "4VLGFHLpgrwd9gnEMUGacs5gDqkxdzXWBE8oSnApMf17kPgysQEP9PM8zLygL6VV6KYsm7psxkeKGv3obg83aTj",
  "key15": "2iHHyySvfjwdCGEyBa9RENVu48Duxy9JM6EgycUNTPxrkpExb74zJcmaeWZ91MJzBBvYaxGqzZb4VqszicMg9MkU",
  "key16": "3JgXdfA5V7v4wB985MsJt6bZLBjvAyL7siogopGy8v9Shfa5BkuDBRZQezZjh5m1535QRdDPMTB7KSXrHqajavco",
  "key17": "WmsEpxbrm2dkjG7yRCLpDpApYRTxvjbriC7qhwBbutG3F78GtyK7G5bQ3LqboVAL47MLjTgNGq1LBtVJitg2dJc",
  "key18": "477FvJ2zYCFamu4jHewY1aGD1fsrS3aK3MErygQZwtj8JhbqKEhw7P9Jpbe3XgHBEx4i5SdKVKJrSbvFKrjFL554",
  "key19": "4EsUfygt8UKvHP3oN7gzgq5VVNgFcnBBGfZMmp8ZxbnxDCEC9rNJ4q1yotHi115JAJcuyZbaaTBHwuKy8NAMbkHu",
  "key20": "4Q7pZRm6WpqVhQ8sUxESJfkt2erox8M5j264grPMB1Jb4633WdP8m1Nc6cHbUZGL6kgnguMA5Hv561Y28GWXTiQ9",
  "key21": "5oWGHgscK1KMxetkojzp51ytaagaGMJXmhta1mKgxCeKk2WHKBXeVL9KtNd4MoKrX57geDz25TucwdqrJjoB9hFe",
  "key22": "57jKBWFBCUzKa3rjtdvUeT2aWsm1GaQxvRk76dD9bJ5BFKX4qVPxHKPGa3XcWqU1RvuagfS4Cpggy6cXd2Ujvfst",
  "key23": "4a2CVrpzPYkUrL78NakPSbmiiWQGHKixo5XMAGK7o5yRMirz5X8naRJ2LA5cgf1uTwLbGfwTWc4V7Lzthj7PRHJR",
  "key24": "k6npCwZmLDr6RnHp79Ta6zZrFgr2BfjXENwu8kABuKojThoRkJeKoNaPyi36MaP6SoPBA3YCu1PPqJozYtjD83e",
  "key25": "4FESkvUGdRh1V1hyS39FXkxFXQ8KMQ2YpZtM6GJnJghjFVpZM4eMJQXV5S9CjAyQoefhB5SoNM8gkg9bUEP9XkgP",
  "key26": "4ddN2rGo3AwEnHFk6qQwHShNnL8pRpP2t5faoRBQWKoJAt5z6vabsZNhFKHDzJpgb9BzTqG8m2fVznJ8UQVa83Gr"
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
