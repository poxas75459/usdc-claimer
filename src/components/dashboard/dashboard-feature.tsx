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
    "32NEXaadt2cCjW5VSH65ZkbXEv4KPo5SRjPXu6qhDKk8gV15CE8ycLAetbuc9UXkZpoyxeqs13WHnMTvbYo2j4jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWJ91rgQ73fLytysQKKP5HUWPudthVSjTZ4qS3bhdcc6qcSbc4wAmDFBfsMTSeRiZE6YFuHJQEsAPa9rLL8DjMP",
  "key1": "5oLVdFh9WUqVNJ4WiubTyBfLXZXjTTcMAyzgEWibWyxHVjtUSfvohM7tC3g1PBfQkLG8vovnokaRrk39WUn8LbjV",
  "key2": "65Qrtr4EoFDyZkPLHHpynbqDTCNAtEZN5HN28NQxQRhe4kBztDAdwTsPJ5gCtX81Taki9zgYwbdLS3Gf5zLED548",
  "key3": "5w82BeoijpecVVDhdELgsAQcB1jjirudDJpmoydvqUXTZ9pgfb2vuwQsiGwqd6mXqCx7PeuUcmPr6xkU3pCRFwNx",
  "key4": "3qWnhUVuJTRwj4L4VNCQdFn277s13SFuE1aVJwqMxuzbxyNcTjEBzbCRZk8Fb6hzLyUzVi4QXDSJq6jMgRhzyAeJ",
  "key5": "29C354SZRHXCRUMknE6jScnKdTLQngDWRd6MVtHFajqVbLEGkYjYd3MF2Ko8aaLhycAfX36WMrXNjKH4JmYzVXaH",
  "key6": "3UGsyxBAQytouyQaZQwM2mjfvbGsVXktHkDAPLHRAMcsr1MHvutGnzK54fZ6GDf6451gkU4BEzrdj4isTxdqCMja",
  "key7": "4E4Nq6nEMbAyCmsdG6nQV6AKrzRdGhw5ExRZWcDR3UY4trSiqgdNpvKkM6ywM73LSZGXAFXT25fNVZEBPmtk2ZCv",
  "key8": "47MJtEKeKUSTPGGmdUvjZUV4eqgqZ2eKgxJiWn4H235uyNPywnRTN63m6UKX36BP4tqXuH14aYUH7u8cpF3tZTMq",
  "key9": "2UbTkZWTVLjgEQdggioSorGT7di3TMUUxJoWWB4muVUi8c8tqdR9U5DWBoQmiJM9RnpTqdmP9gvY23eXzguNHrNG",
  "key10": "4ArYZUqe2qLJwmchAgqxHgNRWGaB1hgGsWt88vEQ9b6KzJ6iXxgPtZVeHgm6X7UhscV3PrxKCSqGSA9mE5XN1A55",
  "key11": "3ihBy8kXiP8WEw3XgoJLdmhPL4RdXVfsL2jHV3jDPDREaoaN2aeWEmMTw8pPhs1UskSfKJVigdamoNPDC8VC5pDX",
  "key12": "s7XkH1MHv5EnffnME9VtWefvUF9UW8oKEXdJGFXbXaWaykSC9F213eDBdcHEWrif3M45zgYR8AKSt4255c6936E",
  "key13": "37bzMA5gkSTFoVwWgPueDVqqQvy8HzmiRR6snffGWv1MNAk31o5m79JNjzZM1PjR3C7hZqQLjUv8Ke64iTkirJg2",
  "key14": "2nYWws4X9J6THXs34ogma7nvyr2cNJunwEvx8eAjHT8YUV7tEPYKUGTFuVnVjeD1gqn1oLoHyC6zKfGgzUMWCXwB",
  "key15": "5wkN7qw5AkCRaDy3QxAzcm4S5YP9ZzspiymAJk6438FSaaChMRZ6cN97Gg6JTdjaw7Vb7QzesXNyYUdnKZDHKRnF",
  "key16": "4MYB6KDaBpd3vyDaX73YSPWcAeR21CbZjmwoxHwWhRRy2E6Gb4mMGzUkQySgHq4EZZrP8R1hqJbX9LbP33S8epjp",
  "key17": "4DPtZNPN3CpH3Ms72M6UNXZigYE3yUN9mHpNJJNsibroreik3s1q2BWn9fqrFDkUujAALb5f5nBd6ri2nT7Wgz93",
  "key18": "3w2m57uCyon2KHfatniscqBixjJamUA2RJEKVDGn9w1DTDU8NEXPm5FiiHtdEt6VWQZ6TqCjTiPKbVrBS1cDQBEP",
  "key19": "2MURNqW3AzXz3KpuCSAAc8A4bTrzBBpFy8LjVFBsXezYEaD1mW5U7FTpknFhPaMPa9T4zk8UTTJ9hhsBWyF18Qth",
  "key20": "25c7NVQvJgvupkt9F1UE6dJtbsm5HxPSoERFDtt5fZhqpFYYEDMVNAUWXhey4GWVJGSS3pDBFXdWfnW1VqVKf6v3",
  "key21": "3EQpLgAZte3KNLMKFuvZyQRhKQaWgzwAtNtnGLs3tCabdRcbXwUi21pw5Q3y7dm8Bezk4gDu85yAtmnENiwTigj7",
  "key22": "qgcMnQRySW5tjNwd114NQ2s3j3WKZqfjyKqrbGyfPJAfakfsUARbwnd1Qfp4fH68iLp4CsqCU3ZJJ7LzYfmKyNK",
  "key23": "3Cs3xtEN1UaHScxh4cEw4eRxzyqaSYSYAguy4qFugb8596YAjATiD1hn9sgrz3Arj2YiMt1uYNUaHo3Hn5KVjU4z",
  "key24": "3otrkioow8dDGvhcXWcY5FmisMM9XBooTRx9rn1b67CkL1bvZPbXHqrKFQWBKdLMS6A2B1jjEmVxW21sE6WtVsTZ",
  "key25": "3xwBUft1kn6LYdTR7HW555hqGNKzpWaKg2NuUi5g97aPYB7hxA5k457Ab1xALueNoeP6hnXyLhMsEBXQCkirCYRs",
  "key26": "2QwdaANN3tTrwpVVwHMJ9Q7Bq3RxoKRXUv3nJG4jgKwZ8q7AxjTsDvEpRcsWJjotDCTp4eGZLS6ic41yMMbFtaGi",
  "key27": "4ttJCaJKTj3SHWLvCqHW9yFgEZQFiCov1gPrvmTRaXmzwDWLgtfqxxdemFNhbPMkyGjFdQhm8ZxGgDUUxB3MSdB9"
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
