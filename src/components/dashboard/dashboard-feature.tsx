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
    "49cTT1pECKPYTDKDDxYpCqbB3rrMKEFAz196bFEPqwYkuRu5ytoQLCaGt44XiM3pEcgW5w3Ku9u5AadvBohrJ2eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzM8WSCW7yZNrEBJDV56WpME3VCpcz3uPfUxcMdPBLsUiersMxBkSiQsG1ppJh6dD3CHpFhVv5ZgM6LMD4S2y3n",
  "key1": "2Y12YefaGmCz5M6JEsLv8YJBDpiEwYavcVwjpBARWXgPBmCuBESAY7mMQkYka4CBzW9azo1rYK1kUTikcuGZwqBq",
  "key2": "5tKCapYaoQEomFGH3ZgbSbtQLih2Hy56tTtJ7GRV4CztQLj8LGVHRQRUs3WEWZRDQLVmk8QPhanMga9cz9SNne6C",
  "key3": "59d58WYccDaki9LjURU5oHth2MdjHrWWGwCM14wthiU11Z3jDZWNjUpaqFPnhWrfjFEkDqxyQrZSneBExQgUu5Yb",
  "key4": "5WV81jRKNpoWmTJaP8dahhRwiZpNc45uh1SewhK7tojhgYD7WUXP7uKVwWf1QMAokMTfk1eWJTdsxtLTJErLUtwd",
  "key5": "Hm4MCoiDiw4tM2UWFXp2TS5EySZ46LFH5XNsF8mVw8FSAn4tJbEJKYwUWLJuQ7iXTmM4Gcu245X8egbEy9wRDRw",
  "key6": "okXijK7gwjM5z3ywXXV5YKtVBJziGnCZMgiPbqNseaomX6onT8Xye9m42d9pYCFKGrLdDPg6JqjGkvijrNhDRZm",
  "key7": "28tFfmUVzVmf4b3z4wSaBuJ4zDtT9eDNCdR5XhywpBDfoyW9HFzKLqXmcKw3EWiyUTcP351GB3wS8UwLMTHoB39Q",
  "key8": "124C3zZYL7simGLPumU4ku4JWFGmUmu19F1WZYL1Ad2xHUq3mZ7RPBnjmyMCVBSmo1M5u5cBEBBQLHPtncbGunAS",
  "key9": "4J8dqeW1RUQajMJQwnHt89FNGbfL588uibTEuSVZw5vFvHf1gGvDSSX2tWrc6oNQEohiZvn1wihbvF1sXXF7YXa4",
  "key10": "29GymzKt6pk7kjSBk96kKpbzHG2sV8BgWzU6Kmq7ohMnMsrT9jmwmDAppzmKsHb8CXjc3hxrif5zpAmqZnVgJGaQ",
  "key11": "2qDXNgQrLXd4GCEELt4VNec3e2d3szgbPo9ao74kp8fu6X7625xH2AwEv3F7GQg3n3mMcuH7gdcWMojv5KvM77K8",
  "key12": "3xDTerKLd8ziNgesJRh4FG8edvhSNhurH5759zW9t7ooRkyhzfep4ijD35FKdnLzLdPhYMRiariuuA48sNcR3QPX",
  "key13": "36KeCkzGA2dVyHRgvydTW3YcUJNaL82b3hZy4VoMPDC8W6SUU5W1BKKLNdWMj1aU7ppVUKh3YoP4w46Xp8zGXyNH",
  "key14": "22LcR6hwgvEvyGSu9DJpBHNAfdaKPAifeL94acgoxzjZ371sQLMVN9De31N4BB83pQKnpUSM1vAp4XY58ziX8MR4",
  "key15": "5txfVNPbaaamWx4kxVpjTfDVvsTjYXm5zcn4utGziFZDwBdVWwuJEreYGjDvVsNARgZT7MHRMExEc8xzmfjzVkV2",
  "key16": "wMkvEo5NaL9ZyrZrdtiiHjLCve1ho9SR8LWZsLVZ2V4a9Rg8Z66esf2Rxs4Zv4Q5DjVwtpWdV9ogU2H9QHRS9m6",
  "key17": "42dXd8jpxcQsMb9ENnGQYY35J7MPwYzPzhJYv7Ef2T7sbJcXxYH3rKouJbPhHvYdhoNv7BuLKRUNNTZRrgDFpKgV",
  "key18": "3tmqi78sUT39QhpAsGRzZDBV9rkvr6mpDPPEAL6Qsjut15rzvwhPvyzKDxFoUKyEmUXuYCSwPDheS2yzT6z1c4RG",
  "key19": "Kj2w5zoBXLc2V7FU6LhZEfDdDPEM2ZeQGNBwX3Ugt2G1JSZhuahQoLpX7KAqusJcRkJJzgC6gYWdSUAhaiEY9dL",
  "key20": "3uCVuERB8Quh4GmJWgSAo6FytWfBDzWCJPUm5xordkeA9wnBrxHGMVu3aTrPFxyHkP3TX2zoW5dv5nP882W6dn6E",
  "key21": "4sNpGckvkmMeqH61QMgubY6S1YhATxfau7d8gTHGPtHe16hHVTjpoALcZN3NKE91tpMTE9hQJgZtL7VZeR7itRv9",
  "key22": "2BPrep2ppTqFK8NHtGR6VUFLsNUBpfhsh7mWmq4VTHYenF2ZBciamYxVdf1Z2zqGYYxeC92vbkuqgw6tN3CDk7Ts",
  "key23": "5dz8UTpe1M8UGBK1crWmr4jHVpBKHhCxA2psYWEQokDeDgNd5xBw7YW7SAzNXQm5KpjzStTwdEgpNYQ7n5cYruxx",
  "key24": "5tEWeXECRq5UN7rAiwcxSiZjYZxr61Byd3ixWTS9q5FuX6scjE64QjWp5s652WeyByfjydyoP6ADyoR5SMye1aKW",
  "key25": "57hBTiiCe3UVg9PWd5y9pNAu8M4AShti5LNfPPwxgwMkVrp2RFwrZ12tBgPCv1j8yq9HcnRFqhconUvZeA1P25by",
  "key26": "43E19N4riJhNqH3SSkhC8dLfQHNAUTrAK1uq47Pq6ffu99foew1uzLssoRVZABex2BQbRuE4gx32UT5PYAMi7HuV",
  "key27": "5JnU4oGi7QijzkXN7VNNJfgBJfjaNkYwpFjjK7ADaY8ssHUkCFzQg5RRfSSPzzY29VsMa3BRYKBGtAQigtft1bkR",
  "key28": "86xGRGW9d2rozAfsfnZocyzchezu5ncBwbRNkiXECD2pAUMRAEjHjrp29ChR7GqEmTeUGgi89XKDEXhQxnv8v6J",
  "key29": "4cTQMBkH19cAZL4mqVUKntmpYUhoyXdU3uVd4dJv18m7cxyqd3YiASuCDsqnkZcxv9zjoH5mUDNPyRku5wm2vYVe",
  "key30": "BC8tw4J9h9PbpN2Y1Q8kAPfLxU8Rp8Gdj3XueaFN11qPMVqfTLsvaMJN9o3vGjb2N4rvvxbGotc8YBGjetob8H6",
  "key31": "5jj9zca4Y4a3dcFfxQaWgV6tFkSA33KSyK2WwkFbx1CMUXdYMyRjm1pCDxv3Un5tR1yNPxYkfLw2qQZnz16WWu3d",
  "key32": "3FyD8urXeYkmSpG1cijgYyqWGnEc5AEUKtbqS8ACTWMiysny4PYJXGrco8KTe9QKbjD5PMbp3iWsJK3V2SY5UuBh",
  "key33": "4H5pWsTsCLuLkcEqHj8NSjhpgADcTueRU4x38CJWMUcYVkU2WcVNDUYaoEUughfY93srBB73fLzMAyeRTTVtu1fR",
  "key34": "2eGmmBYygrU81jLHws1g1EQnuyU3ufNs4hw383mi8TTY6za1tApGVme7Y5S7weZJn6vfA3XvJ6KbfoGCyqnuQMVH",
  "key35": "2hkAVbJZfmfWsUzdkc5dd57w9ow42sUGnpumTw83UGLbTSSq2AjnnKEnzFrYo5YtwKRuNhbAcBLqgbve3AZcmJ5c"
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
