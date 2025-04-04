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
    "5KUD4ZyB5qJH44EGs1MCYLUnfgnBqwfWtkUCupiAKoZVa3nR7wXCKuapQhtyezDtvdvBd4iwjHZwFQB2mm4zyr7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vKx6L58YzbFkxD5SP8YimrvJKhYCyGBioeY9RHELHLm5X9WWVVgzqQhGaZ3ecNLPe2fw8F87R79gi3DT5kzV4t8",
  "key1": "2Q5o31TNWtEGzxGsT4AcjsA15L52TvKoChQHCeZaWRxDPf9AYwh7UdrcEMnaJdN2JjgRbfKiaZK1mhG2unyMoiC4",
  "key2": "ZgyFuFVJt1EZR3Epv2MrLrpScwo5qDCEiSzMVbtCHnu3J7EHn3nJJQ9ChDGGnTqkY1mQxRGJhDvB1ZnjZruDDm3",
  "key3": "5qWeeYGS4r9vVgxiti2YYwXXoar8H81q8DjvGNRF9YXRAc7jbZRq3scJ8raBwwvrVUScgCVXYAD3JNXVdcNgh8b6",
  "key4": "22uqsTDRq83gacdoPWVYBzpjzTPcdDs8eYdnXQnGUnLjMeUy4bWvoNkPT2qRNANEugAvs3cjbZtVxTUCeHuqHzCM",
  "key5": "52878MjXnFRaz5SHZtoUuLTGdJ871qvehCZ7LobjQPzM2G1WJYLXHgRpLi6wcqtACb4agBvNFSN4VJyrG4sD5XZP",
  "key6": "2TK5gbSQRGbZedypKvPUV2VVq5oE5jenmqAdftSyQAw7uk6c2C9v47haAKad6BAqy7JikznTH9UDLCTCHRPuGWns",
  "key7": "53gtnXRHSrCmjMMwCfKUz3RSz8CAXQZPdNdg9fRpvRj6kFiRXJx64KM2i4gmrZQqqx2xK4NEpDhNLhZvYrXU8KYp",
  "key8": "45LNqHuwh8bPDbfcxqNrtFuc6H3tMkNmKEdaaGM4Cg1DpztB3Ap7GW3QsV27bV9CyjVJYq31HJkrhebinMU212RK",
  "key9": "2dmExT7a3MG4zoR6j5YLCQzWk7EUnf3G9hQT6K4AWZ2KiZYgAfe4PQSqijrDXTzk781wCv5FGD6QPVFRar2hkkDG",
  "key10": "5mFmVHRa4hL14AAYUaQCzD2aLVsM1C7eK9ryUUPJZdpGa9UjLnNwEuV4GPSPVBhQZ8ATqUh9C7pbLbaeQ5wLAU3s",
  "key11": "2uWArYDMmmzAWUnEHzjBM9xZhEL7mqzh8EPiHgHwD3ACYHnossEap7qjeYph9iYBPYrNhyApi37gcviuE3ySBWRX",
  "key12": "3m8WZeaHfKLXSvgP4mNkw3GYmpn1EAjSy4U7Q5Nptq62iFozzDFR6z1xiTABDVTxG6mybALALgi6Jcr7voJKAJNx",
  "key13": "4uPV7c9v1YF3F7P6fLtkSCPxNFdsZAVBGB2DzMn9Bs2d2Ht9ezsBhiZh93SZCCp3nWXrP7BhmBhp56QjTk5ktW2Y",
  "key14": "5ySC9FWzeZAhBXzitoNoSZvBRJs4gTqfUaiU54NMcu8wNpqUgzd2kNoUNqVhypj2b7pP3e17Gp2Cbbau5ZYTewiy",
  "key15": "4fm6YWsUwWc9quEApBNAYezuE2vF8LurFjPSbyFux923JeSnAV9VNADmjfc3bcGsA9K42tvuPC9Qy3H7CuDVkqJT",
  "key16": "jdQKDoeXoJDfPsediSfsjkCVQcwhnLWChYmco7iZfBP6Wt64apjjssHmFs2zvhXg3xMeAuDfXBWgWT8BDCgCuxk",
  "key17": "3kkyBEkFZEZeJoDRHpNqpE8f8KpfwFSNGTqSoRtWYwDiGkrvUUTELekZ63ios7ezN7xApKcuThLhkRptNjkbEnXd",
  "key18": "65qe5bVNErhvuRDoBL5BFbLQoQpaWJwaTZt6NMDDzYb1DdhMQQHRQyKGytU4xmaGtScm8ZiRTXmLGQf1ZDQMbKEy",
  "key19": "5TCNu1AXP7RVWMaqRb9GbfZe8MzawjRrvJw19PpPARbCr3BQp7pVGRym6u71gXAPYaNkBsZFGaXHWkneVU7zb6Fd",
  "key20": "2CF8UQUP5ebnKi4yK6rttso8RoSNagZMaBMXg4q5DPhbFsVAz9u9FgrftKVrH7oSC6GhhPCMfVoFKSiQYxnFqFq7",
  "key21": "4tKsc5iua28V3K6fvVNc3hNcf1tok4kH3qQArkU7eNMTSbFcWeyK4H8yE26FxqRWRUAUdh8fDth6kNAKqf8NKyXN",
  "key22": "5GycrBkFpwzytxYrYEz8JMDYN4kMBonMAqAgM7MsAagsVFeS4tTXErNSW8if61j6wrrMZJVvYUjC6Ht13GcKbj4c",
  "key23": "36fXepmz6wXWZKbyVgswzQn97QR6ncpYgoVDtYV1YCfNiQCykmSnncMuMCjnmKRkNbfjZQVUEb98SCPWqNR9gv5c",
  "key24": "2q19CY1Jh9rD9AjPXtFCiantFcpbABC98TbPh5nb2y9gu2pwtCKGg7VnXSB7CXnDp1mp2SXc3LSgKg1VyQJh4L98",
  "key25": "4z9HaRAkB3YfJmWsrABsg6Wm1ab6T74SLMH3miqBcWgok8uNMgvxCzrC3LMFYG8mJ9cDF5GDSzTxWjoWyx4wjEo2",
  "key26": "kwYY3TyLjg6qPzZQ9NcZY2fRuvVr7iHUD1ngKzV13SV3JWDxCFjLEC9N1n1zT3cQ14JaLiqM6v8m4J5wQ37WtUi",
  "key27": "2hDt9Ar7vKthipQVkuBtNsYPVxayaaaKykSRkBfbm4EGCtQBdu9GXk4QDXHLTCQRUiw6rYh3CiKnE4cRMw3omhfP",
  "key28": "sA3DXM37u4b8dSwPwqyfKxBSRc68kPBVdMAP1wuG9Z198nf3v9d1yYtbzJTQGJPasoVTUs1KQT6Feh17jYiDY1U",
  "key29": "4ogo5VFVB6QdLdTcyo2b4xSskXmkBu4jZekWf1i44D64eh8KhhvWENybrhfawp7iT2Cq4cJN9oTHduh8xeqZT45f",
  "key30": "2gNGLQFPDtqk8kJz1tSwUYZjMWoLmkZdQKcAKsZENehj6sPRSLZouP746jLir9f5wgmKyDgkcDQiCNfHn6J7PFsz",
  "key31": "331Hyf3pAnTY4f61fdWUDUssLsePvBdLfbC7r2jjXP2kH3PXJyzpdioTnKmGn1zbmmoqTxwjErBBWkvhUsyXrM3M"
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
