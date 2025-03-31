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
    "33W2C1TuHivjwqrDQ4DHvcQRR4DCQup4L1Y68ZpYkBRPLuRAhVNNAh7mxH7unNFt8kKV9huZF7iFWZqjXUr692or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxTob1pXmEMf2M3DbG16QkAS67HszckH2nUhJektYwYSpvwhutpzrXX91NdUNdRRq8wLqj2esxUVDEMwEwFjhbW",
  "key1": "2byYyQvU97ExbmJYQoYaGtDqQBDgStK7hpfh9U4kpKKmbFFuarQDGt5ZPWvubBJ8WiJzVgE7dqsmKMCLZmtPApe",
  "key2": "2vKGsPMgk295xwX3nji1ZySeDdmu7ZV3FYXtzhoazb9fqU8QPX3uzzMVFC5mU21oLKgQHg8f9VypmpbKDHck5rZA",
  "key3": "3WNGzQfadDCMugQNBrVvpW42abrw9GFSMnBRVmhuW1GKUtTEZFwRGazFnS4j23cUGazsTc3TA8nVRtRFg9PVofkm",
  "key4": "5tWfQcYMm8CzQGsMAiPQBmGnsJMonxvSi2B1MtCmBektmRPHrJTqRCBMS5CQFd7UBV7NowB4ij6T4XqFcs3geDP4",
  "key5": "3eGqxVE8vT9mT3xxK7pDa3imD9HbxL3eM8Emd5rTyw6zg79EqrANoMybTc7WeGFbtQhskWhWTqu7xLr6NU8vykTf",
  "key6": "2XAJLYrxjywSB8edGZFmhgQPDhGyKDZD1NKSpLxESDqBGv3hKvbqPpSYU1SKzidd7yc42YanWtAtSt47Y32s63ds",
  "key7": "2SaQyzuFerXKiQefZbFGydfNV7NegKDk7QMZ6tM1MoZQC6Pswx8mRSbU1z9WfUvGT16t6eZ52vhaQyzdRZL8YKDd",
  "key8": "2Pq526q68DsPSTCs7XebJT1FV4BbhhqP5tMgya85Ed3soNdCkUhtwXgBUt5YGmpZXZ5hp9siAEG3X4paQt3ip3Ks",
  "key9": "2MrtFa6cwwecxy2pdZyqMWLakffe22HiWAD8CMsH2vZ4ka5kN82dpW5neShnmAgXsTtpyqTBBGGadNVFQGLGgL9g",
  "key10": "4kdUUw3Q4717dsub8JUU3EwGwKL2YAqe2hg6tNTVhaQjhpXcKSxoKuXqGLhnoCsq8moEb2Ti5gvMMCk77yhTBDRD",
  "key11": "4JtEvSRNQxGDUTCFMJ5VscLXSPaZihtKNmKJeqtmuLpTDFMNqM15nuxSqYB84jrJsS9grinNxE5VYAUtratfBhZk",
  "key12": "FvigtKxzSLS6B1mqdRfXCquzFUEgh4PtuQsQMsocHjKUXL8ido7JcG6mqw54TTz1ow4QXPFQR29vYAyFYruzNFR",
  "key13": "wzmaV8He3Km2sbf5QzfNT4rSnV4c1cpdGAR7cbKg1Hge86xpGBrh4BYxWR1d624K5sJtfUm4PoLS5WwRf5i9BPz",
  "key14": "iCXyQJ7Uz2MCwbeGAx7QVAy26w3pGAw5ri4MGtZ6HXo4JUS6N41jmEVsMr9o6VG3QsDpr9yKbVG8g6DgXcJc2sQ",
  "key15": "2oXmrzomn5WaeQrg162uxSzsMbcW3Hjhq1vr7QxWkfKMTPxmx4EosBJHGqiUkgibf22y75dWrCUG5LBLxtGBpwQ4",
  "key16": "4Pg8M5NBWNitTuhCZTBa8NcbiKJNdTBV5mFwUCjZ7WD7mEVaj7uhyfn4XfiDa6wHu44xzwddDEXgXLNWvUE5CafT",
  "key17": "L2Sh5oVHk487fUjHc2ZfsKR84vhAQWjjq1kwduQi83s7PVNkkvgSBRVqdocmmpcSAXCBB2v5SA1DHTJeBgtZcuC",
  "key18": "3L4pgSzj163AWEeix2kBYdpZJhU3gCuLCDJypJHAHjhNVq7i3iG3QdzFyj6BNJh5qGx8QMZzkk1KVfKktr5kzDDR",
  "key19": "2E8mEFVZB547nxY9Ky73hFtYJbp6vXq3dgfH85q4Yn2MuzFojyw2oQcTZ2sLDzGXcMUGcJpTnCt6scMhkMCoQu1D",
  "key20": "59rWHJ1vdkrLKG2MSKfwMb8Th1EQzACVXVuWyvcW2mA9vPxkLBf2rjVZe8ozoY74yFzgA9gaQz1QhR8g2SgCEYgz",
  "key21": "Jz4YqTjNWBxGV8Kw4DunSed8rdA3pT5Z8wnVerri2k3uaPiUEfjN1NPMzCgFzCEE4JabbhgrDzLRjtDaeokF7b6",
  "key22": "4c5mYMs4o28ASuc1GRkKFSJtDeTNRkZ3Hy4DGZu4amQFtYvqRbUesxtTKY5CFnZBuHNA2FnnXHCAkNQPTyCUjZYq",
  "key23": "4pwL23kFyLukbqutCWPPNEjZ7NskCH47h8ZQzbnBtPSbovEzFrHZ7LuTLMVpuyevcNQ1ApdiqCGtUDaWakszqk7h",
  "key24": "2Vdj61aumMMcvKcp61DxbbeZpmfMk2eDJGhLzQbgMxfbBeN3Qhkvpte4bdKU6WCBeUFHskqfijYZkCJLeyxji67M",
  "key25": "5BnVoPTetWcgQyiebeoW5jUX3vZUZoEYmkgxsBn4rwyCwce5McZx2VLCDzxNZ51fyEz9yRbXMwETvGATVZjgBqEw",
  "key26": "3xHUgsdb6DKimYKGQP13FJnbE6EPnXkL6rEeWP9QNZTGcVshuknhwRGgtgzbTxMPkMjAkhReDv4HBgiVWM18Qgzn",
  "key27": "4DsnbTjq7F2cST3ky33iwaRFF6Tgh9538KmWtRSUrWwiEdGps2goEJaqJg2cBm67CVpeStLpmTVQiEXaYqxT3HbB",
  "key28": "2NoshM6Bz3dH5JrjrfCQA8qjgKP4rpvQvDsrp5JSuFmx3zc3datUPCYno8fN763LnzoJFVPQzBBHebnRod6E1hXi"
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
