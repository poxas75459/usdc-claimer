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
    "gkdhELmvHZhvaqkesKhskehVn7D65s5uLpng6eAgpKs4kzq5cWURVKiqjP49DNEXUaueYzsCGhMXrKMJhgPnbjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xXCZd6JqkouLarSM4wZNFvvwBxS7wCKG4MKnB4inLU9uRTH9GhT4y71xeCoxMX3GfxN4ciquniAjJ1cnXeQRMCK",
  "key1": "2WUC24NktRJvZNyuybhjBiw6N3Eku4cDYgwq31HA5BisNWoVQtJ6hanj1AB48Fj3sFMtH91bV1AR8LeEomwZNzjA",
  "key2": "2xDFUiJesXYNnTRVE8i5hBYiGAJhGgYCsEZ4g8T5YohXSSJkuRJpE5CAUf9QuJWydzEL8NwYgKewXzFsYoswbMXw",
  "key3": "67UxVuGLrnGsELUYBfbs9j3wyqA3njC6LxfyWDyzJGCjaUaM9pqFs9eKgRoioakqiuy9vth7Sbfmz7LrKfW2GHoZ",
  "key4": "4TEWRTJ2jh8aEXq532ZrjxHkRDETLeJwNXQD5vNBAd3iNJp1rKZDegFppndMGJvQ7LCVxrkWtE9DHQ2sJqwAR5Go",
  "key5": "4FLbrGr6ndd9BsZ4bwegXqjfzddpcrguLCgugdpaTaXKSnfEuoLzAVsKL48H9qnJsNF4gagJi8Vbajs4w1165cCh",
  "key6": "5qSUJmceN1MWcASGgxnbVzLcz3cPyM4HJs1vUxnSCaSKkxWtZMESQxTiHCFKVgftwrHLRG9mQD5TNWVuUUMqzi3v",
  "key7": "42UeBjQ4enFkRMGLjfPQFAB7gxm579EjuQQDBALHSCJf2qmgJNgY26VkM9qhtDPzKmLEhuFSqAepUtwz73XngGYC",
  "key8": "2YwdACUWozVwuUXQENCS7Nieptnm9uFphQpo1aCFiqZihS8rt9w83NTHRMGaKD6kYb5DDgxhGbtTyx4GzXhKY5PP",
  "key9": "3KVWQj7Hv4WWjwhSHNDJQNC3PurozhdKivWCG38S6xtV3dKhV6p8J1vTJ2fk4kCKTppHobkfScCaeUXa3cSTfKTd",
  "key10": "8PFsyajTtCBGvsXNEJDZHozFcmVSdE1XL1dkcwzak49ULUyHRtpXyfgPmiv9x7AzdEjaZZrdc82pxRTTtYmSKFH",
  "key11": "4YkC1aoLyT8xhujmrGaYuEKbxByBVv4LU9QG2cG2dXMUBFZZoAmao3Zxin5NmjPze3DXV8cRL3n25f6nKgWwcjoj",
  "key12": "3zQGPLQ7esc3RkZ6yi3ifvkeqMDnhJdZCpVbFNeNXPCEasdFuJyRcF4kRgZNnwyybF7U8G4v47KTxQj6gHV28qnA",
  "key13": "2tJf6eoeR36PmTANoht4MGAsfrtd3vSsVrtFfdBRMRGT4RYcfyHoeadqUuoEyTeYVwya4Ek9pHYoG9kD3nptA2ds",
  "key14": "3NhJqtfFPibsbpegeHULEwguD5mvmHpwiPhZH6pNFhyJ9B61g68yzcGn6m5cCUjUibEmBLn8YxX5KmsU1j6G24uc",
  "key15": "2ZhzHYLtzuxMGjLVa6EvHxJysk9T9AL5hGHhyLykkG1EwA2RBMJjJwy44F4zMYehogQnNHWL2XumrduPiLCmVU6B",
  "key16": "4TcBhejTjpJeK7qHSAhxZWWdiR62CEHC9FTUDHLrt1g3s9EufP9uqW9osSDKvudfu6bjtcvUThQaesfP5QNDiw1Z",
  "key17": "3TFRnejjw1z1kD5GSyyHCJN7hW2yaa5GnjK9ZHbEbWcBexWUZ1Bnrkkvcbsvm6nWrczRXZ61jJBr6Ug6hU1FUW19",
  "key18": "tWh2KuEwpK1vNyxAy1ep8oiuzV6kk8Mb9JtJg6eAXFgpWtvtZmAuVMUKcFCydyXBm2kNa5pzfAf6GN9jVwCGKuS",
  "key19": "4G9Yx6ufDM217WAFNnJyqwt6cJCAYhTBofRySyKf6doBZfDk3EewbzLnbmYfSucBFB7ynPaNpLdgUTNV4NxXKF9f",
  "key20": "4phw1pN5xYWhuh2XUMk5ruogCU239yF3Xb9oBGqrhkVwPqAbUS1J22TRV2UzL9kWNZk7X8zk4R9oDxaDK7Nb9jiq",
  "key21": "5zfmtXjv4qjAqwdfB76uLJkxubPSxxJP2DeLHTn3j1jzd3X3VTrBQumztGyhSCwVud7w3jhp5FjQsbf8jPfcqd2E",
  "key22": "26h9JZyrHs4tf4etQ1qsZ8R2xym2YuD7Bc3hSaFHRf5BQaTNb53EnhjEvue9hjCDBG6vDTDvvtSsrza4gDkM7q3Y",
  "key23": "5of2FapwvnTFngFxtNW6UguR1wSb2sqDw7TkaGJNkMCGJvmGZDNR8HWwgYUDow5Fy8tpjhtCHegQMvPSNzLPy2PK",
  "key24": "3sgcn7Gavc6FvDAk5psynfXLZV7uQi59VsjnhLgBvWWY3XpTx5uMCsVPPokQWVFuAF7JhHpKmp2av5msqpS6nQos",
  "key25": "5vNc8ZsrVPsXeQpLxTZ3xRMPFQmzfHJKuvVXvRmoLGn1Jmk6VWiPkVrGgSTaAR9zsZQhUXhSuhWGF3WL5xcLQWxZ",
  "key26": "2vASS2CJeARUt5g7wFsRhjCZQobej9vXnmAUsFp8KQH92fbnZvFtUWsJDWc2Lr8dSTfGjCMTov8dNpbJhKjZNuyF",
  "key27": "3cYMxqg47e8jXqdq4Gwt7xPWHUWemNxn67RgVnUC1oY131cxYLhNWbXLKeqfoP31rnMPzgLeajWzwRXLDatsiAYw",
  "key28": "5ZoR6AYCme9ZiU8SuSjaJaZBQ2deXa46UqVgNTtSvAg6hfA5HzP33Eoo26CRugMPNmLrwN9hDgE5Tz5t4Arg7tvK",
  "key29": "2EQVvVhPKpfMY4JHVR8vDRiZ2Y1ydyZ6dxAKk637HVxtG6SnBAuGaJhK57V4P8o92Cjy4zgc2Kv44FfNWCWMCiu8",
  "key30": "4zC8tGnBuBgLXd82Tms9bcDkYj4CGtXfwBe4k4NjujGmSKtfd72tpDa3ufo9wc6USFG5SfBq8DWYDjRajP2JmYmK",
  "key31": "7EBNXUmyjXKEe1eZvgfHy4jtMQ7hPccGoLfmVenTsxcypv62s5vtLS6wgE8s9ojRiepsF2B8MDL8WJBNfdkY3eh",
  "key32": "2npMEjDkzhAuwxw7x8oqJvrDCCdvLeQR5QdkLvjpuWnWvanWoAuU7XXnZAWFxzwAV4seBvyEMio4Yr9ndpqL2yQh",
  "key33": "3YU8BTkrvPwzDq5M548W1YRFiMbWVTAYox8qShQaadcBwe76zZjWkBGYY7yWGoEyJ3oFWMqWfnSU8EiqRq44cNag",
  "key34": "2azexgw2xawvcqhzXTkDFY5VzCMCYQewFCiNAdzp2b2WoDXkcbXDnpFmEyGoLkhVCrp99Yq6Z5SoHBZSSBWEb8dc"
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
