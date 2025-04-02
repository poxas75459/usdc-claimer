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
    "cZMuG4kFErHGS8F8WVrxXQEJJBboiHPP9wDCJYi5kepttu7jfnLp3W729PeHqsy8fb9mh3BJwaFMi7R5JKbrSns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XSdnSkZnCddMxeB7aSoTw6WiXw1Vuo1cC5Y4LxpVqY4pwxBjWsYCEuT8LfYqdEWdyTf3HKmdJc4Bvfjx8bNWQCG",
  "key1": "SMSgWN5qmkZf6L29WANznA1UJ9WZttPmid2Yz3Sej4b85w7ehUFNJdsSobYkxQAFw24nPpumdS4y7GjwcC7HQrq",
  "key2": "47Pu1gWEGAJ4GuUAckTu4CX9j6vLKB8Rd1Qaq64mqEkkUfEJvJzfVEU7VZTVQupwv8gqR2eHYTbp1baffyNfgbXS",
  "key3": "4G78nTSH552ibzSiJZ2uxy87PBwzp3CH6vd8k1xj8QMf2WEh4aHxLegw4sBDC3JBy8mPHCdezu8eG9tnSa6ccwmx",
  "key4": "2SnHBAn1jQeTNDYJe5r816BzTvbVZr6REfXysEC7u9XX2VGNRDo75HDaAyUVrqpEPaxXrr3cF4h4G5GUTTW9VkLw",
  "key5": "3LndNjTmELbwPgrDgxb83bV1bStUiSzRfYUobPZq4KxraYheZXG8a5ys5ADFm3wwbpv3fWcuaKkC1My9rRNP29pi",
  "key6": "2oMFo1Te3dNMxyQQ9KHhobiwt38HBRpL3W1LfnZNfRwjsrwStTr7YTr3cFXT4uUGArmBCEcCp6m7zg5PmuZ21zSs",
  "key7": "4Yrb6CZmMPCUrcTnRW7ZVYSAVXzz1HftPJhC82FczNg5pntNRe3JnjjME17FjbbSqNMg2LTHjhTYvwGWu6TxaGa7",
  "key8": "oroi9CEbm6rCxvdZvQ4EuG32uwa1PnUBnrS6HegRG8cm6CTywqVB9o1fM9foqT9rnhuWNAzE8dhuN5uwo1YsAss",
  "key9": "5wodkboVAekQdCn6fXLKQPDxPcA75vcfNdEkaErdL9kwxWQ6p8Hyeomqns9n7bP7SahkMaQ4gWeYceoGbvbRAzTp",
  "key10": "2p9gyB5oS13r6YxHDPh8KrYaT6BE4DXW56tK8an8mntrhX8xs93uHUuN8HVVeJ4x1FR4oZ6LTCnf3jSqCve3XvHr",
  "key11": "52Pexb79fUcmc7YxNDrrvHTDXRMg669kN2Qy866kY3AfUoGkEKMsJtrbXxKhytNNRrWCqxXMwf8sCuw7W5UWZjyZ",
  "key12": "4u87h5aeR4npKT8EmMU1ek1Mh6oPqU9BmTEUqyk4DFAXh3YP1iQP8dr2yq2Grd7LCz1twVe8KikaGvCzjnBiDqMi",
  "key13": "mLtCTBpSLXwdEnH5ipnWvDePBbEtdTWcQ8hRWEKg1ugv5VUhv25iHjDEqJronmx8V5jToWGBybGk1kjMt5vs4ZJ",
  "key14": "2g3vAEophZTaDZShhVen1iXfiLMnK1g9NCno4AathYF885CCHJTeCJ7WPm26KhXYLdWZWaeuSF6xueQbCVWxbp4x",
  "key15": "hH2riYwLUSZ5h1EedJCRmosTKhKAAxo3jtN8cEL7Ampcu4MhuH4i3z5v12SHHzPbFfTk4y93jisWtap1yr9CiDC",
  "key16": "4XBKgMyj2KkuiJygdyzzL39KonPpvifzfdej15ra95mRhftS3pmgyijHHjepjgRgsXwZYPPxWb5UfdnDN7uuvyiw",
  "key17": "3cb6zufibrJXnH56kszjLnaR2G4KLDYD1meZ26UftE9ihA2zCU1DLtjwCYF1qogjicZHHwTX8hsRahMqAXidEabV",
  "key18": "3ZA13FdRZQUS5k15cXsqGpWPvE8HcsD595G7RzgqAcuddQoXsQ4TWs9x8wuYdSCz41QpWAaGyZUFbc9inBQ8biQt",
  "key19": "4YiuUWRLYaZMkUGpwEdX44oag3mGYMV4fpi4yderqGqCzcxmvDW3wuXSx9Af9pevWPhetRXsjaw9xbkPeyDfe2ry",
  "key20": "Qe5XL386ZQkAP7Muvx9ie5QLqaVTxZTPmL2cTS8RhxXrdN5MCdB9YyTVaXMnKpFBWAZs57XuUhGnA389K2UCd1e",
  "key21": "RV3dkQgwZwbooRsPB85V8LDZH1wJn64bs1cxVkWfMhff7iE2d9nvsgDQsrfEC3AY4yTZBhsiEkUJibcvwABK8zc",
  "key22": "5qXHaecMFCfSx4BBpmQ9xAgSpfB4w4xnaXZb6kXmfUoVbtqT5Qt1DBFmjKE4hnF4JsrXPC5Zw1tJ7Q5W7iEahDHy",
  "key23": "26SExTbP6QuXBEEciybz85etvPu2uocWaMc4Ji1Hupa59piSLPvdAwH2Hjdbvc5FezgMmjUJ9GpHJbGMXJMqqWRD",
  "key24": "2ypGRi7s7UgPoC8XwQr7Tn7nkmD517Y8TN4rgycxsr1LS6dzjHdU1ZM2DwpJvCxyBevTuwD56KtpX5TkLzkePruS",
  "key25": "5fMgeCE1iZ4o2hyj2Rhn41Zp6YSDPtH9zefMf1G3w9ik7UHLZ8FweTiXHokQs6i65TfDmpPQnCfJv529xfiGMkpt",
  "key26": "66vzyPKCm73u3evkxWhqfRLorP3K6rDsRXe1s5KvzsdoWMDeY6NVFQp6pHhkDRQ9EF8qxmhiqCExizPw6F6PVJAz"
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
