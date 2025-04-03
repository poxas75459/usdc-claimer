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
    "4ddZ8zcB3tyt8zrqCxQjAbDDAQpsZEJtsBWLp7FFFKb9chGvXSFrtM7EejXixUhJg8H4EHUq5TMJi4WdnehuYKQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbSNC1zQ5TjCbTFBWKXLetM4hUPPXipMKrbxjuycDWYBZzSAZrfSB9WGhRSNuCG9ymFysUUhM2jRfesvybt5seF",
  "key1": "4hPFB7dA5aikYLB8NDe43GLVnvknJzwP8qDK5Ng9WgMrJ41LamELGq8ChVjaPK9JT2FJf2RpUeexDJottXPouthB",
  "key2": "xYPs9wBGnZJGbFchYTcSfqnRDcn2Xobm2V1AKWCRS31sSrMaTRnxouXdLSpQoqa3ayugSBvbh5mkxuZPc8KUaad",
  "key3": "3nMdfgyYmQZukFN5uCmWEcPr73tTwuQhEmHLJMYqs4NdUC8MKZcaRu2ukM9UJesqezFBkJsDxCsbQvuhAydHd3uc",
  "key4": "4Wq7QjDHxeTQEzw9bXTTknb6v8V8N2ZzYsG7nC1VqCjLVXxRpFynbuaxx4Pry7WbmSiHTsQZu7wKgHD8bSjAmhf5",
  "key5": "5jEDZNoKYGCkjjDyo3UjBUxsEoJWUa4EMWoFcoEK9iFvW7BRf3hLqA2SRs5DLvwduo3fuXVwqVYQYHb3dSu53RiV",
  "key6": "3oWpM4kofztnerdCPZJbXg6XUDvpfBSjb8Ko1WLxoVRUL6Ty2c9PKArR8gJHe6XNGdpHk7h1Babg5XqK1fqYJS6x",
  "key7": "2AGc7WfFAikKae2tSxeRApKWqdLwNgwXnDekuyk2LoXjLSNBRh9yCgZpB4NP7FmkgTpY4sC1DKpMtuCuyo9iHGSS",
  "key8": "3tKvofRAMTJoFVkxtXK3j7Hq3YnEMEbDLzv1yuuTQpTqe9m1n2SxKxTGc1RcYENyJajSGVvPZ61X8r2DvXcvroj2",
  "key9": "35185aUZZbTB9MuqKEmop3LQ3mnfJJ2FpFWNWb16tzHYyRTDfm7PdYscVo3iZgiseQJs77LT7bgR8GX9Ms3Zb2SK",
  "key10": "46sQ9umVtVtbCuczLwiqSLt7BAAJ2oWtoz3mW9AN5g8x3kw1h3JNRVsVDMxntJHFkMxP1Va8q1bEE1j8Szrn4L1S",
  "key11": "3aQtanPwrpdr4od6gSNvkDDAS9t4o7iuLMHqEhyJ3c7ZYqv4rNeu789yGTEfRkfJvytfBsE3MCkfY7XxKz9BeUss",
  "key12": "wyVb8jz8Ub8g9wJHSc3PLdhKgZsZxdmnYbiJDEfm2kpsj99cXU9vAyNAoYNWzFUWrvh8EqHogu69F21Sa7mTfJH",
  "key13": "MwEUmLWHduzp5t9uZZzrRVPk62F5hurd4xm1PtWazEWrGxjY4rweJfKznauoZUbJZeJrKFDEBW8smoquAeYE6Yj",
  "key14": "3x2aaLhguQRCHA3e2NFuYa6N9yHmakoUbXypWKA3ZBKfxbeEVjAX3h7a9G3ANUMCq52UrTKDqE2bCM8yqLAWfuH5",
  "key15": "5NhsgxQQVY6Zx7cmB8cJS7aBiL7ZqgAraCSQbhCdAg35HyEGcU7ium7djkQ57FGv9CPQg1SUg2MhuvTQL6jW5ZBR",
  "key16": "RReAcsGjenRF3YuMBvQV6JNqVbeN3CzgsLByafbQGtKTUpuqBG4pa2spWnCb6acVrdH48KxPscfMC4DgqU7PmPu",
  "key17": "4CSAEnLJz96qqKWPz6zPyfR9bq82P3gmrLiXWWwdwcwD9iqjgF9gLSpLRAZCh34efmg1GmrM5KMC7V7JpemVoRAf",
  "key18": "pogh66Ya8nVDqQhNJG4KJquPgw6fyPjBnPAAJCNsdeJUoQaBFDwmL7GhPTQZ8MDZMSWRQhSXyhFitjTMtb4GEVZ",
  "key19": "4UZX1g4vKMNFq3Kf5cfQia7tji3gNUyaW77HDsBy6MxsAbmwthMseGh763A7KSCiQNtfjSiBVab7mqRhZUZeuMwP",
  "key20": "3wJJ24E4jtvaDNuQTCqpENRUhNdugYpS8dQLqis7FMia5biZCfGobKeoP9oJ1fm6SaziTkyPkGETJ7qb4pir1eKL",
  "key21": "3HMHAm8drPUbpaMvGTFhv8zBhZmGmGDaFXyvLsiEV3iiM2v43d1SBT3yT7HmdARMkV48LbH9QGtS3XnbSiZq9xgg",
  "key22": "2u3bzcV3t3yLWmcchQEg2iiMaHxkFWthKaYDi4LxLZTBzxWzk2fL472WxewBXevfqYVcjpyCVEogFpDzfKUyyUHQ",
  "key23": "4GrYucHxQNmNjYf4joBjmUpZP7jT16Fhfbw4dJZq7HnR9wbwYrJ3qf49G1jNapnRQoK515wkXhm7S2kjNNpMPhAf",
  "key24": "3SuPS8pZdZ9qynfJvZ98QpR6SHvspoNtXpSFn97QQym8S3RAAqZJFsNg52qG7jtg3cWJfq7ujfk2kNzuvXLMQtMZ",
  "key25": "4zQf8Yy12bkXGneEvK93VX6XGeM6pomC26pUtqCuxxdA1vC3T1zxhKxA1GuwhW8NFaEJXT7HrQZN7MxEn5PjGdfM",
  "key26": "RhnLmfujXjbQ2KSaQKNy95fr1C6xqg17Z4V1WCFfJpJTJcDat1PMrDAAznLYUewWeLiYCTLNbsMvfjYRbb1z1Hb"
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
