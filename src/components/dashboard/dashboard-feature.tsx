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
    "37uTDNBQhQf2Ru1c8nF3foY5EMF2BGuPaA6UPgwE9C5zjVFznYefJxVcbt8wtC1V6PUgrP5FXNkj3xi9KAyz97LC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G6wwV3EZhJp63acN5H6hsfNNqMybGfVaRf875yXuAFZFUU7eLMAogYA8zLAatRFVLsanyRzwKo19pdx1Xov9MUQ",
  "key1": "3cdZcMLeUaHbzgr3a5XGL6GcMzNrA5YDRU27wqC3s2RnqyF4GAtuEape9oXaSG7Z6YcyoLLHEiLCXx67XTU8UYf7",
  "key2": "3AFvsSB4wF4Ftk56AfU4MdBf45yVfvhJpX6hsHkj98sSfS6Z7P53FS3MoRnXJ4MaLTFrNn2pjLrdbcKdzXhSHTb3",
  "key3": "3W75HfeRqYJXsDZDhps29K2TcRJkgitFuKvur8jXKT8SbV4uwLME4ZZWESHW8tTMgNksq224icqJYsiefmvM2B14",
  "key4": "5gXfi5v3Xpt3yUg77RdGfq62EDfuJiiTxeS8D76bvMZXuiAscsCJt9kd3iUMtA69usNmmbf73fHG7mMooSbCT2XV",
  "key5": "2JFezqpqXZEQKJhndzHBNaRUuNhQ6jE4Cpi8KA7K4vjbs3rKmKJBBGqJhQjSfYd62dovs613XCqyrUd1AXacVHXM",
  "key6": "4wDvjSWMygPqcNgyqiiJcK9K3295b25dwvC22HQ39tY7J2gg4XBiVsGBGGSwhNzXn8jShTxx4h23L8LbJBBZDdmj",
  "key7": "2duytnW9QQPQq9YTMMok6ioDeFZFbS7crwutfTsDYQHFGqicWL41zQ1YxDTYWvwfj3SVV6G3L7QawZDmYHyzVstW",
  "key8": "bEUs1H8hyekCkDS7y5cxDwYPENxzbTJQi3bdHVJ1v4voDfqHTWF2CR3bzKCScGGkxcgdLdBp3QmJu2qVeGn3dZX",
  "key9": "5D6ZKU84BtzXg5yhaVDcyPu7Xs2mwVBQnMVQh1Vk2fVQsHEgUWPk5rSfPFX1UVo7cdWvqktCWENCBBB3KSjtWm34",
  "key10": "TXeJFLjsZMXLS4qYdufveB6mNevhb7b15aSXAEeYLjEGv7FDYEhoLAy97PAaqUWafb8W6r1GPncvzLeN4wqkGwU",
  "key11": "3bbHnCKaUWpgdTFWfH4G6zcXHvHMNnAuobWo5qDLX9yoh1uG6yiCVp85BhTUzNrDBgXs4pe2n2K9oAgJL2SARuTm",
  "key12": "61QLFUMZ9d5TgEC4njb5Eqw6biUodDYhror67y9EJrH5btBX1cKTMDRpW43JZyDUCap54pACa3kRRbXHCditU5Nu",
  "key13": "4sB41ouC6EHWxFskM9pM7hu4Ky1QAxY7wzkGMaTy5QVEWaSYkc8iGv8rzoooVqReRK1BnYT8XArJ73Eg1eRmepVc",
  "key14": "4CpnVAdXP21vzjsNx8M4upVGThv8kzfjsZsnWYR1t2CwbkacdAFsUX1sgFzdY6VthiJbZs4tVKaTn5UYjuCYvVU4",
  "key15": "474LPYzy78XLif3JpA6Q64it1kAeyi54YNGaVLVe5jAumzYoCDB2Lwnjwq5Cb6PPyzR9jtcPr6wnYiFNczLqLaR9",
  "key16": "42UvzyQPK9FxEybg4hST2XHWJqzRtW3UV9nzewzj2sgeoSW38pdD7ojTvAczvaPTeVnBXTMfebUYYakgP71uBjFs",
  "key17": "r8wrRSF4AxxTqsrV2YEhhh5B4aALWUmoSWiPrMw8MM9LGxr3rZNUuwB1TorTEW2JR8tdmKFnDAAgK4VMbYn8MKe",
  "key18": "5nWcvMMejQkWAkUoq2RpzGEZSkmVcoXGSN64RLogFehUJV7r9WK8g2EqLNk3YArA7gthTJeF8nzEAmVPZU6Pbgmh",
  "key19": "cSw6wr4RCmcp4C8BDCZ3464xbLP2x5ALuSWcoSbXbjTxy2eHAhrzdR99AKUHJL2mHNLA2qv3eGNR4f6hayf9psM",
  "key20": "5gMLGVjKFX63RTXnCGqERVqGHouG3G3sexKJHCcYWbmWV4gzVNFHik4BRsTqWp2ibTyY4Q81ZVFYfSV9K46xonjh",
  "key21": "KpWeqTpf7GMnHXBexw1zPFPERcXMy5CxvZhgyoVbEzoVYJVBA98eCpo8LzAPGi1Ni6b64x9ymWNXRMFHNJGgE6P",
  "key22": "4FjxDThY5vqCFFim5QFpbjEZFLVN1wa2wUJg5NZ3Ct4mRNxbfqSyfsxYikgDtBCCe2oCQ9tEbLD5nMoUv6hVb19",
  "key23": "38SnmcJzAkzaBX8ebYEpyytRgkTzfurXLMTtNchGnw47T1KhtVyfHHsxTSp71JCBjpXRrYPxvF1u2B4a1738HP9H",
  "key24": "4MbnUYtUCpgJHpCnABuaEr3gQ3dkdWvRhuqFh9sD1nJYfbFQZ5oHfBkqDqMEZhubxVfsBFQFgUtPQsULWJs9b531",
  "key25": "3tiB8MuPWhH8r2aWYjngBrbRaJYPeMgQDjjyFAKEzDQ8x35CQrxeaG6rzkGCwcTqk79nhxiGt7vpN8Y7q25uN5ok",
  "key26": "V4RperxuqfGRriqxtREZ1n3CLf5MDRZZQR1XTioQLjDLF82PRffMZ56BnjD61QGAgodqNHwQbNSmfC9xRVyRUi7",
  "key27": "5dhd7Wz2NmL5cFkojLjyavxRVPPPkeim8CfxKtXzR4NZM6LEWaXHZvvir34s4DCocuLYrb6LasLwCSa564EBmq77",
  "key28": "8Q2QTgf2QKCQccPC12BrYnZZYNAEUxzqmqNToKvfBiwtRa93y3LZixMYWsiEFdbxjiRVC7SmEYP23EgkVSTej7n",
  "key29": "3VUKmwqifu6PeksjCXz9nMdYypiFcGDkDTtCHc5wKuhYLeDotsMYcHWpj62VAnF8hU7dZMP3s5CCzNwGvpMJWoFN",
  "key30": "A5nJeG2e69e6rhu4p4hdgtozBvfL4ZRh6HKzpFDFmNdNwounXVR718azBJE4mgYKa5oMB42BvRMdga7wUzcXazf",
  "key31": "62V3VS3wN8J5GYVAAQBkfGDSYAKXaCfutkxEKPek6ZifMQ4AkKS5A3BETGBD5F4rKEZiRF4kToBuAJSGW2D4vFiy"
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
