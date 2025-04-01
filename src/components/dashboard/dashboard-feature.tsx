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
    "4Qe9MZrVnst2YPVCw3bULq9ksSpYef4FnuGFeX9J5jtZenvBwKp5tezFFCAjhQ4rq6oFd3VSbANsGroQoHKtL2oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQDNmey3fEBHrT79w5fgZXkZ4cFmv2FVnYNfv9E7PRFVHethSoGxNgQ1wRatJHA45ZmtjvH23bNmMFNDwvdQ1Hb",
  "key1": "5VgT1iQ9GLVVNnS5nmr6xvgWKngeEzAKcf88W8LUsrueQQBq8Jf1fQxZ9qo3bJTWDtxceCR2P72rmsc8CYQRW4Ac",
  "key2": "BjP7nqqgRdkpRHmqSSN1sca3dh3cGieGuSCVB6GK8sZWMddmSL2FoVLPszgtN5Gv85jLQn5RQDP1KiDzidjyPqn",
  "key3": "2Co76f1W6TFnauSq9oYJy5JT1oqQGvCLDwjEQmypdfd6rqLdKqxheLS438QSqVFE2WPQsrmp6ez27SeEB6yQ3NCJ",
  "key4": "5gKYYZsoeT4pMYc1rCUwbJqH43EpWaiHh1fmbcicmGFtv6StLHgWm2waLNRiEc8vz3udkW7J8JaymSoYB9JUpnrH",
  "key5": "33re7YD6kHAAbSD9Ba9Vhv9WGoQvU4P7UaPK5KxMsZzfjFYYC4WUzBDz1quSWwAFSTAuUxPAVH512Cw66T9QHWqS",
  "key6": "55pkuZ4KnHERT2rfRwe8xTmAdSD7GQpMiSRBpaskTeZLmJ9q6E1JB7D3QFpFCxj7YmAbLeNd84BLWzTeL9b71ZHU",
  "key7": "UPCoNAC41PLhwCzNBbmXdWy7hZTXTXeepsSgVMrP79evnqbUjMn1tpMMZZED83MpAP88TZmGw48rCqPCtzFudRD",
  "key8": "5ye19D8SfRY4wANuA7fs5e4wMihCmtPsE1TTuCDdwiNwpmM6D1GKYR4AUwihVq8NGqDYs1zuqRgWycWU2NVMRKqC",
  "key9": "2e53N8hCi1S8RSRR19REiVFjRs2WTbbnKDizaF3qqGBfuGpvbybZvLDeufpYZ2b8SDoxq3Q5TzSS3CE1ENzn9fC",
  "key10": "561Aj7f6xLZ1H69Kz2L1WwXvgTrP2ZrbDcLXnA5xgj9uSmCjndix993RwGxMyYfctc5rXDHPiCN21Q4TLVsGCFYT",
  "key11": "5AW2rvFUHhCByjZVd5AaKimb5si9p9Mtz22txvxgqeyWQesU5EqPsvfxPwpGmjJockrfUSXBAwQDYkjwLeMiTpoe",
  "key12": "4SmZrfT4HKFJ8DMbk59g3wYLJsoToboYtPuH3aBwMS9WA6vtsXJTQXMwfoaptoSpFuR9mftuPyqiqr4Dav2D46yD",
  "key13": "4qWaYttWC4G8dYeXirwTGzN8sQBBgwjb5wHnECnsFchVBRG4KVHRJwmunL8c6qzhe7TfzgnS9WE9RzPBVtvAWpJM",
  "key14": "4bRA2P5pLPe7d2ToVMWUegstSevygyDHwWNJEqKmzHM7FJGdb6bGcRfhk2Gh55eqbwP4bHndS8iHbrFT3gcohWjc",
  "key15": "XvtvPMQSo5vFujXevuKofkE8YT8Kr7Ta2Ja6dxaqHadQGN9R6jbsySZQPCE1HZGtCCyck34fM1oSfvo5eUTYDFM",
  "key16": "5YZhoM5HaPTg3vpBBs1K9R8cBkh4Vi2Q1cniZ3SMLsL63FnFgdCg3enVsR75Dcqu37p7ZvU8N3faMiEKexiiK3x8",
  "key17": "4zoZLbMcaW7TPSPZTsTfj4TRYwhDAE7c4ZB6TKpu96mX6j4smqrNApejrXFHv3U3M9PFnRbchSNZirQVLrxhiMbN",
  "key18": "4XdQZd5AYVTuw8vAsRPvHzfc9VddGCfcpCpsZofJjLdRUDocbCUaEJKGzs79TjyMtXD8X4vgQiDm6E7AqMvRuqTV",
  "key19": "3dayK5AaoJHKNCkCp6GN2r2AUboGy89NzZuo5Y4yN4fAiFPn7LCn6Bu5L7NCKPpPG498CksmZ56CeuzdUaNs6JS1",
  "key20": "5jaQJpho7GbndvDCnuV53kbRHRD8vTh2RjtgpBGMfah5NvtRnZDYDYYRZeLwYyHWQZAQz6ujEHMLtu16fVngthXR",
  "key21": "4qiCEsA7CQvRbvAikbEELFBzHhQ18rV1BBe6dkNBtAq3N63zvkARXuyRd39VfqnkY8kL6Q56qaBEiRoPYQNNMYYn",
  "key22": "2YabRoYS7zHXWAWGzgujNKxhydL6ATrkJJ97kiPQqHiDcYcQFx5sQVsu3D9J34rSj3PDry5vQk8hvY6f93CaB12W",
  "key23": "41bqEBjuKGShuWuRHV3uNcYQTcGY7gTS7o6pWWbPXeEe4EcfPqj8XDFAN9xgswhyBZFSNHKwc6acthKRZM6u9GGT",
  "key24": "3s6TdChYd1XSCS3pyQdQPRfbbqSmGHkbPLNXGV1CtAyBfoKNCgPSB8quj5nERVumFJ4njE1XgW8vkfbfJZhwGqbA"
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
