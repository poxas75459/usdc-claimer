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
    "3pwsNpvy9Q9nrzY8Zg61A6LrUd8UnSzPS3793bLwaivYoVsxZxNfyWoAZZSgmnwKygdJTqQdz2XHijhQys93xCzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z19QYgfjSN9oDjbzqAPkTQKmiiCD9ZsmUitdzZKDFjvGfZiCmPL9r3Sj2QDeKJK8gj3vmLtUC65grSa7LyQfEJJ",
  "key1": "4BBZvrJyAm1JuQapdkxUx418GzMVFZn7K63RGyexMmxwVA2sTpTBRctWzEFwUYvHdrvGs3ushnmHfFKwVCpBmf4d",
  "key2": "5ru5iZbupqTobJFaLZY7kTeD3vk4CDacEA7YWdkJQJCVH6V8YB1roZk5EH7hJFqEAWSmrCNnJDFp2P3jXjq59cAC",
  "key3": "37CwB29SFZSecACj13Sa2WcS9xAzEZSqrX28XbxpMpzRUAhYeoVAfnxJZpyu5G1gDnvh5dbLRU8SfGPhAnQn7RKE",
  "key4": "3kPv9f7oTC3zf2jBQs39Xn4AjB8tRCXKHZAgjFh5XE9FTiroJhe6XgaNfkxV9fB3HnaY1kArwMFZtf43iz32m5MC",
  "key5": "2BxomMuiR3wFxRCusk4pe5A2453NwVaDeDQhSZ41bRLqtx5nY7deCfh1Cw2bkEeJfj8rkBLppZyNddzkr9fep2MU",
  "key6": "3pcFGWRvL93e6giH61rgjn56LB1h6dprCULHBEZ5nMaKNhTcYeURyuUXynXrgSvijpyDUoqGYjk42Wx2Y7xvqU6N",
  "key7": "3dCrAGNFzytz2ZKuE6RDKjNPigo6GJvCz7zz4g4tgjGxwW7MYpDYnz57eGZ8BNuZrx7f35GEZUPpAKSd3Afk1iZx",
  "key8": "3KgB3t3Hhfyha1eR4KrqcL9NsWcNnL58rMPzbJR8JbUF8qpVhMU8XyRMM9gt3Zef73x5GAqMyj3nTAqiXeTF7VC5",
  "key9": "skbsEFSdsFrLPU7DX5LJtPUDYD8EqYipbddZkrPBsa4iznDVkuLUYqv6MwaPz8WzzY8HdLP3LH7TdRcH2x34Bx9",
  "key10": "2wqwW1JP425TfaURzPxgmLoz42KHfaRzw1bZHLf5CUZ4GwfSpjPd6XKuKoufTPTuan2x9HwmS36KBhMqgNTJSS3T",
  "key11": "TMuW4ccNAgfaQSM7HRZSfoK8JmVHgMiMUJPmEj8HYZr36UH3aJBCgXNReVrAWeA6PkN8aCkHiQXZ7Qa5C4KSZG2",
  "key12": "TdyVoQo3G8kZ9XXTM9a3UkoichqZERXv7p3pZc5PPxTvZWYfjFdRZTN4gwRfjvRQWUkZAjW6hWZs81uvFMBDtc6",
  "key13": "3vyUEYnaFKKacsXCtUyDs25Xr8RX462bs74r8As4ZiX55Nz6SPLGdDUq9HUe3uFx9Dqf4UDTjYQ2fUL6SQeuQXrJ",
  "key14": "27vzVLKTMymfHwQx1V6ympEnVBYtTKfemD63AaygK84krSfgvz4BtDLZawc74MuKp3hHnw7WCRAhVrGVsgX9G5Sj",
  "key15": "5jXQrzszVbZhCanCij3ar9eQepWTph7F8EqtcfD9So2uGUouFcZZiu93m57rTKZfrVtagHbDTQ7fpKavAMTpM3pV",
  "key16": "4914Dd9XKASDmnxTKZ2PJJiHwiv2zkE66ZjZamCv1cL7QRooNVGu3oZbDYe3cvkJHmQuFxX2KyqxBsL4D6crqcZ9",
  "key17": "3rPyBNDgsLyHfo26u1berke2cqUf4CFqJrGVRUgYgebvKQtKkA1r7qEXbgVgWXu39wCo7eMM6qzkGLBaSdF2rGRo",
  "key18": "bFugvxGT7BqMxeLb7UpfFbKoSwpVPWKwXrRTMLEJsAFwBxBzQAyy88eCUfkhKCj7q371HtbPKQPzDmTsZT5E2KQ",
  "key19": "2UpxoF98PWsjU3SxTmBCq4ku2Unqi3g9g977sBJ7JfXgiFoBrdz2cWyxy4HNWBxPJpau5HEGZscyfkJt5Y3BG4SD",
  "key20": "4ugDrh8zKZddFQYHjzqpaWnNxno3x1M2YvuqmMsdvrP52dG5GGddGK9zeVZzCnE3rAbmvzQ8J3SjExYwP2zR2h5n",
  "key21": "yTWz1cR9xyB7FX9Nv2mnSKDJpW1qRGPxgeWyHS51qQj8zii5nXz6JTdAmJVqDc1fEhzAwoCEBf23DJdC4RYZ7Lt",
  "key22": "fM7wRk4ZEiJ2XUR1nVhhCgSi1VRPHTLPTd1U8fw7zxsSbMEygpAyfnXtbcDWcg7Jhatkp5iF85KAUmrkYt7yvYR",
  "key23": "5AqVH3wV45Xf6ShAnyCRt2C8FVxnQQvgFc35TFfAGZs5m3hc8ay3Mj9z2jAwDRUmhCBqFYvfPvN9e5rGBKW74NHe",
  "key24": "24qdRNg28ph4sm8Yre7ETnCryzQp5SnmoFavHu3B3SeMNBheDa5h13MiSnr7MPeiLXNogFCiaW7DbAyaGLMZKxG7",
  "key25": "5Uv9Yd3ispseNugScgR7WqPUHxxqEZcJdHYWsHVGFTUeVh99bebcJtuadbZ4QrHNpYKpyJYTTnXKCU82FgzvZoBc",
  "key26": "2h7SM3AHeEZyC4nFrXjMJ8ABrntu5NZMz3byHvSgbCMjoMuXfBRGR93oKPtKpYCPd7q6CMP4qPS86Fa9Pb3pHCzr",
  "key27": "JvjrJyUCTb1WWvVXAcfPzAFJmKqXqNtqEaxJaPUY8CyrCSH6m83Yh92pcPjRQ25jZvdhFDcZrEhL1HTFJrN7EHy",
  "key28": "3Aw16AputsnEMMk9EUV49Z6h1CvR5qHM7cucwqkQVrjFdhFp4yyA5SUCVBN3TxjRWFBAyHXN1vG6vrcmDpmdtZ4a",
  "key29": "259jj6Ct4mneKWeQ4CFmGWpVKy7g3u7gmdEKHxnXrgAAhyH2MfADJMHRZJPvpRMhfYVyzzDR5mqCBybdNGrE38pC",
  "key30": "NfqyXs8Msox8zQ6hBXMYFXLYNZBkUrSfuFSUHoQ8VpBU6bECUZQQMiRspSzEMqUMVCKNXAqgc4XKDUZjNHdsrZE",
  "key31": "3wvdK5uZMrTvgbrf2m1QnsLQsMuo56DVbx5bHYV7i9yQn84q6S8oEoQgM5y4Jz6jEEZcsxCGs2e4f5DHZM3gse3c",
  "key32": "SQQYcqFzkm6Fp4UVF14bB9pMQe1b7gip7xWk4fXwxyAohbcSchkucht9myLUshQMRNBmVbremQnrHqM5AAxzewx",
  "key33": "34ek8nXbDZWW3SgRkmjiytvZjq1bqZXnHfEiGDiZ1fYVG2rLY7ow2Zqj4SmheM2peqxorZhkndN2BE8dhfCg5po6"
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
