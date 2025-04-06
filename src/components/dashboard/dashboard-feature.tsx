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
    "21wwymTSG4qb9Coa8n6QysYfvXZiTxoWYETUsyFeFF7JhwdATo66WGFMMhSJYu1D676DMS2n2FBLgvCfZ3H9FE4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNBomGGVmUS2syGpYj6ggdNv6f3hVxYzU48e5nLiygJTfnxZaeQSsRvQUxV2u3qZhZpfiJbMK6Chc2W3nJRW5i8",
  "key1": "4PN5ZVqXfZsAXyyUdhQrNaHZHErkxs8QA2VN8LatKVwJJAH12J6TTZqCGSuZovGG1ndTDQ5Yz5t5ioqVBcNttMw8",
  "key2": "YHvGMHZbGVMfSGRFKPn72uUweuAKd59sxFVJ4117rNDMcvNagDcgKxEGLGS9QVZ5X9mVrDFB19JSvBoMWLHfLka",
  "key3": "4LibzHeFmbnxA121oJYqs4AeQ9L6bCsWxN7S912YRwYUbogAhwKqWGfkJo7Zu8D7myggxs8FzemTnwS8wiiZhWTF",
  "key4": "4af94QTAJiJBTXbd8qCfXPpQD497Sw2nVv1WRzZQD3F27dewo3CRJZ4PJ3ADGfWuSTqsL6VfK27c49Rh9rHpFoRk",
  "key5": "hRD8i33uRw1fTinBrgH7g8wnPRhg3KdG7TZjGgsbnXpixo9KWPJWxvzvqnznEvHabbZ1fSG2UgypDDiM6kJ7gCb",
  "key6": "5FLMuR1DJV9Z5LrDT1AVj6CUU58m2FnS48ehBVd2StcDCQw6kpCqRMGfGjVggFSrUfLtbfcJwxHFg4JHKE3pngHt",
  "key7": "2xcGXYASEZHzrA6YhnvBEk878LqqeGZMcknMunPG4k9eD1D3n1AvhDcjrjnPdCViJwYFoh2QXgahtKxCcMhSNFbx",
  "key8": "5oyCBz7bUkzJ3zp6yfborkn6R7FZQ1CetcasAmY4dn4pLfhPUarz7t4SVWRULEyqF3d4aJ55VmSjmsr6tYsSmw93",
  "key9": "xr6N1wUhhpPazNqygoRnR3ykyKdyiEVHaXfj7JqWSq73phjy6EHiohdS3xYKfKP4zK8QxrknKB4cJjorhWNHVku",
  "key10": "5EXrHsewfuTv3ysqwXqJbzUGUHbt11NFVQMAJqGCbCn6gVAFKTR6nHJEpZem2GompPK82uYFY7kreY3wqmdMgdBU",
  "key11": "2CHKq9DNYFcuDi86BoApo2cB2zuPfp1f9enjq9quC7uedn57ggPG51Dw83zNuPbUxxYK79RVmEoR9bEgS4y7QNiM",
  "key12": "2c7TLQq8jSRgGfvVoXFv2X4V5byadXKTPmL82SMfUYG6QWq7XyDUKBDjwx1BtAfYSBpfhj9cjJTPghy9zX6isMmg",
  "key13": "29826LBywdruBTVUWtEiSPT3AzPP7w1XMCg5euVppDpqFiTyr1nrDQ4MLz5VxwjsLsHrbcJJhQJfJZfSXsr5Qobp",
  "key14": "MTYop8utEFhuvK4XL7C9ynkAynGoy6JkjbAn23fm2Y77fEZw6YJsTe1aFXAxfSACLJMUhEJnBHffU6KswiatEpm",
  "key15": "4fHY8LuEqtA3wg5J5Zw1TKccG3VbkWeDtMnZPGNJ8xYiUtTqPNiRD8yPfFdWVTRRQxWBx9zidvg7RpccB6UyVaMq",
  "key16": "7cbi7MWYdp2Dctah87o23yZLHMrHAeRTt7uoURRGBKmY6ARsAQ9vS6zwJqVCABWxsH32PjKvrYwBSBc8qVJiooh",
  "key17": "67mr5cLHNPN38TPaLiqNE2D6krzCaAFPRBvXaH5GpFFcAVvpDnyneYd1bZ3i886sPKKR5YnphK1ZKnns2ModJbHZ",
  "key18": "3pvJiU7bBdZw1ySXhzDF5UcLQVcdqgfCTBaawC5oF7eHzAfyN3z27hDqRaxQh15jV3RiYoLa6VHVH5JuoDdjpRDP",
  "key19": "wGaByKddH4akmRm1mZf97RQ9dipLc8LSbbDLfcsQPWJMzYhSkLXj2W4uqidm3nThhJidaUnYuxS8CrPSQhX4GET",
  "key20": "5ZGgE3XSA4HonFaJ6aTh2BDBkGQprbmXftd6vRK8NyPxDRUi9GPpeyLWRhACV1UaUqCfRXJjSuTHm3B32xqUwVgv",
  "key21": "4z4JMPt9oXX4QRur8pwMgT8pBVbLch5er53mELinhAhFPyb8uk9hJxmn5STmob5jeoTnmgAbvWMuEzJjhuocVQNS",
  "key22": "2MrpUq25ucWbfbsbQHYqyzy3SZxD76vEEdXNkLuKGZBZN9qBGgP65uqQKSGiDUH5m6nvasE4krvHa7nNmGi7NtAK",
  "key23": "21AFVVmH5VsrdkHHGTqYWU8MQUQtaCAjVVXRYcPP3YUcTGTAAK7SpYJrEgeRZ8gFomwYLkNzSot4Q9rm4UqWhu5v",
  "key24": "4fThfN8u5eVJp6L1wdDGs8EZ3NJWmRzWvJ4yB3VQdaUgdcv1Ex18WbVqhK7WDRLxiBozA5QJPGn4AjR3Yt7fTWTq",
  "key25": "2qZwgSbhcFNAppRtdT9GR6zXns3Yr8YwmR1EXHvZdB2gLoaLUn3MWcpW9FiWSYNUhsW3uEBMwTbwAVMSiZW6nyMj",
  "key26": "4ukB3Msw1sgJbjTXkxmRkRoJ8K6p4SWPYaZ5XmxhZWA4yapsLFHnyDTxGaz4k9ECqDFah2rJCVguABW18Yf1Zkov",
  "key27": "3DTPFoDXDEVT2HLM8Kk1dZFTCsZNM4cXKe8aSkUe7hJv8YrykM6erTCQbaKCwpZh6baTRiw9b6Vcn1mBJtd4zAPp",
  "key28": "3ssWYWRygis2jNzvWdJLLEV6uzi6djeNmfhyAekmPJvErEcL8X9GuZ1L6NzgoDh1TpsNdEtiutAzHkxWwXDDfsKE",
  "key29": "5VpakhCH1emXZvFcGWooTtUtWnEVVUNMZHM3igS9YtbDPu4uMcM64tyXpVN9gLmbRbTHxRZG3mM8McK8tqo792cT",
  "key30": "653gaQyZPaoiHqVAbRxesPUxVnf4p7Ckw7tZaUVsMUBgRdCokJowRvi7xZUv1iBubhWnpoAkYouvTbq5bpEAKsen",
  "key31": "5XsDaKcp1LQd8ExSsGdihZVjcT5Y5UkkDomw4QS9CGVHwesrTUPZjiZQxJTcWhMzPEEw46tFmfZdmUrLFb19ppde",
  "key32": "YxyM6xn4cAoJ34jds47as3522cp6mtz6whMhQgv3UJ4uCLvK6Dt2qg3mwSCQm6rwkTRH1M5knNkL6bWPcQ8wGwL",
  "key33": "5HvLeQ8SnYuD8uG2BncuWeGdHUyDty8T8apgEfpQcAv3Zq8KwFLKFhDonboCBMojT7hjQD83xk1wQpmr9CfRUXDh",
  "key34": "3xgAXxNGwecNqKkUGBfhtz2DEepcrCwLyZUKtXR9d7Ad2KRw2G2oBvVHrv2zxs1sVqi6SWU9Fx3TU5VQy3M5hEzB",
  "key35": "5GK8oBpdrFuJB2uuHiZJ57LToSDmnhqJ256SoLpbLFpLaFAZBX5GHkdmrMLhCuojTJo5u5PzfX7spmCJ24GFpULE",
  "key36": "4sjzh4AQaCnY1sH2a7so8LumAxWaWczXSapLkDxrZuVse9AfCnozTEEdfoVX5CTCrQ5KjaSUthu4US8nyo2rGQR2",
  "key37": "63kbLVGeBtSWYda5cGEVyB6VjCLLovkRAmHejjNuFHqrjksUNf6onp9MGgHVxQafXyUyBAsuEERR38AciePcPa8s"
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
