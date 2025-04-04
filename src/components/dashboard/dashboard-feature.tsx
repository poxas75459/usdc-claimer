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
    "2ncZx2kQgyFKc8TpZiusWSxxLXJnkwqUAhoSN5hSrYJGmsRgvPvh3gdWi68SV4ie6wkjhavruQZW1EB3VpMZhBQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRKQKSbgztcmYUQFoh9EN49cza8Z2AkCGLjjWCBD2My4pFsnG3j5ixj4hFmTDfAZkYzZySwN4GYG9NtmfrhJQf2",
  "key1": "AagFZist9m5aXYkV7af8rhjP8LpnxW132eihhZv3wnM6R7htJQT2zNioM2JmPfAN3ERrX25AyXYjJ6bBPGKKfyK",
  "key2": "5pxe1pQnDWYawJ2edBXPPL3dpmSpxvhuG3Pn7GEqTAx9FPmSFg5xc2RT8BVtgerN6ve5a45fN4mPJVjv3EBWzmuf",
  "key3": "5HnPzCt9zDmzaxkE7kxs3ffBJVYRHDeKYSd5NDdJT24tPMEDU7hUSFb9SYCups4eHcnfyWmMQkmGQReN9FZ5uiGD",
  "key4": "5VEw48bd6u7ZNtDxvyd8rwbbCc2qf1ApqdYLxZ1d7E2RzXjSmpMPhGcdbTVZ8vTv7jq36du8dd7jrdssMcsgYagc",
  "key5": "26XAStYy86ppHiY7Ab2n4agcLcRncgTRKgqBajMnsZKWLUDpvkK3sDBoEU12AbVmLLQmStYT3dKycWJmR7nfZGmF",
  "key6": "2EKd7F5PQPGwy3yR5R8NiiTFwNQojSwwhREZkNRj6ead6GuzzNAnuFeK5pGbGbeTfR4BXvKuENJjTf7MKiWYeDgn",
  "key7": "2t41vsheg2Aygy9QKAsMEzJsERo449gs8Zut456TRw6RPqSd62nU16svH17a7VtrTCwQx1xF23Wxiwr64ajTF37d",
  "key8": "52aZpTEueWBj3ZjHPGb4s2VDujYnVy2zbKaKmQatktGKeHHQhtgn9duTzgacSYUNQxRDrAakQJwLnj7tSgrsbt4t",
  "key9": "3aZ5sAxt6g1SdrXTQYSEBGvdFTGi6cfaqiyKAzLPor9uYDHFNJaYvRxbs3XyeTmPXaLUfKMn5puo8CqBViApziTM",
  "key10": "3KeFQsLw7gzNXAboTY5sVUsyruEo4rvxtZ4DieSYi1b9SaFuuN2BxFt7Xb4L2U4QCgVx28tNCdXaCh2wQvuoSYm5",
  "key11": "35MHGNEvSTWn21qKcx5oGVe51Gbiwim5bMQ3wraYAvhnZ3z2BaKr5VJbz1tbw4wzyKENHk63wF7KUko7fKtaCsP2",
  "key12": "MXdLnL2ek3jGJm62rHJaA6rjmcpQQio1tzitpGDcjugs5qN134gtNLEAHetfW3WV47jR5w4VcYZagaWA6FrWjSr",
  "key13": "3eVBgrD8GKRZ1mt7StZxdt7tbAN9TdoA5J7Bgvr4SgZDor5GY9o6ekfVuGwYiL6wBSpVyDTKDVnPHJQd8dkHRSJv",
  "key14": "381zs7PmRqyZYL3WDTGxHS5H38hpmcx3ZXQv65Gyd91oM76oA5QdXqHRFmJKcshZKB93FBHut3FzripbDkZjHm12",
  "key15": "2Ff6zn545iuQjpc7yQByqQFwm3eeGBJP4YNnEtTxT1CrUWPLGJugHJkqaFtMLj5HMaLKsrPfQ53hm95ToNMwLBK3",
  "key16": "XYjKSDpDr67HCXJeDfS5YBvfRnxwSQ8LNmfEuhS8zDMLCRvFrem8kNHjmov5SdreCe6eH2gtg7SG6a5A8y9RWBf",
  "key17": "3AM2YygqnxTqWYbZGQcLQn9HPVq4YYdeoVsMUQwpkfSXTpwvtbSvS229MNftjnFXakTvAShY5eEZTuoSPVDVAsjt",
  "key18": "33VaJn8rmzH5ijyHRcyuXjARxdDcBB2WaYUaj2nDqzhQSdKrRFx6M56D3doBDAGoLjZTNS71M8Ne4Gs9eva5MTg8",
  "key19": "3sRqwShVENp9BxBbgPwKJ5JbKibMas4JJJqtifgPn7G1zX3kDJy23fcGC4ByNvEN2PmcoSmskFEMJZ7sz9JM4p4i",
  "key20": "2K4wPKG3SpK2ynDBrmVRBQD62L1gyvrppwi3AeYLpADsNypzTiixswtZ5h8i2Na2fLiWMweZ8XtKzNQQqK9kSz5y",
  "key21": "hSCpAxFrqSos1NLRRL92BM9QwXxq6xjbF1HC3R1peDFHbxZsWyTHjkfUitVvT66x2wJME7KVxqtMh8HDLkoRWUJ",
  "key22": "jG7xxi3EUQhXCtssnMguPzs3rU5VnrEwTGxg2mT5TfE7Lc59MRkcggBhb5TMnvGF6y9gwkTatbNdfGCiGNboZBZ",
  "key23": "3xHxDnsS11GVPMwYnFKNcSbdwjRyth6EJ1L4tnfTyVYTMeckmYjQJ2orPgeYSJA5VnKryht6gLZ7Fo4T1SvvvMow",
  "key24": "2e7pMWH7s7aekG52Fp1FUNtjDAKVzqNVnrdg5EGfuGnkVUsDgrqY9APTaqoCeQ81YzmpC1C2Wz8pS5x9yCN1U7gF",
  "key25": "36pBtH8aFgaHLWgBbHJmMaPpV8wwEZKW5ie4FF5VydHHF3bcD9hfvzzKBko6p4uvnBZkUJUCdukP7GdycL12Lfru",
  "key26": "48VyNQ2gf8hhRUwttufw2NTTjzcHfMhjMyQtPTGjUQTaMMdoAC4EDfniuqojLkkQLhSWnL9WQZq6yPM8S9g3eh6B",
  "key27": "5Kcvx58fjq9D8xfefoEBcWeTcQ7fznMGNGE8Mdvn59vGUaL14oo8wW2szD7zZAW52m4hMSg84eeMVhoXnxBKCXFS",
  "key28": "xVHTS9tAKeFcY6bkHuBTRKjwkPpoh6hFZdmr6Bxfw4EXJUiMNKKnGS5gWHsHoQBxVB7zpu9VztPYdBuXmgf222F",
  "key29": "3VsyFhA36HdE9h8JDCCfxEGRwvZYCF9c6LkthE5WsJZKvF6gfDZLuTqCXpjKmwFXv4RqtkavpSegXaN87xbbAvJQ",
  "key30": "5niaQ82mQcPfJnLQCDCiwxJnY4b7bXCGfheG9nmEtPxtB2Uo8YBeyYvysrHu8gqKJ2eLXC2q3iXhu9A9hsdK5cw5",
  "key31": "nRhQfz9qpGXTnb375QgEdnnyAqVpr8NCJjEALUGDE9RbUNNZLq1q4hzSn36SnayeYe8kc5S68sddvnDHAZbBuUN",
  "key32": "3xACFjyuB3AhrcriQ7GDyxQy3QYsfWEKje8aLoLmLuydQMfKGbiPSRTqbbWpqzNAKcPaTvoQy5TmN98JvBrJSMeC",
  "key33": "2uDF2w8CEYRdS4PrPKzyoBVRrVdi2JVA6adf6MtMwvTegXxUBY6kirgXmyUWwMTwByKbYNUHjTraPDGf1zdqq33t",
  "key34": "5PsCMY5L3GqSBPYo3FZdK4i5NvosCR7rB4EJt7gq3uNhqiCB6AM6zPkN6Sv1R99JHoAPGysZmcX2SSvpUNjVfpoC"
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
