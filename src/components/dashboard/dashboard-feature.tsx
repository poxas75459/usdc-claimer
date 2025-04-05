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
    "3yBPNnV3keo9JrPoSuDSV6qskEBbT18Ce1oMdkhddFw9VmGUA1xaSN6HTPJbyh1BXi3VNLeeiQKrZGPRpJHhTn3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AUNYyHtYtPJtptPwXBdVuiMiChPikTfUt5W1QVXgmLDS6aunshWMuLTeF6zTSjDUwHMfYLZKisqysEaqRSNoPe",
  "key1": "6bNr5ifKJGwBYvwPQnRwaoFsXSATsVMsaR9AFpFkfEQLVpmTgJSa2kA4a2NUzVNv4yGMLQftJ99Mbjdo3dkc8FF",
  "key2": "4A6wBuFQ8foBxLDqmfDNDBrGNjH36aLBRcZ9N9Rak6A6KXatUSWXwsLGKfdTjMZTp96G96tEoCsbLbaueJ15K8i2",
  "key3": "3ALxnxaoHXAdQSs3h1SsSdG3Aboajp9vdA1f1qHjorpgnL4oWYBu5ZXoKBrwjGcvfRNFyimBC62KQ6a3dUgXPCUE",
  "key4": "4ihNaVmvEBpQX6mynxHVSz4tSkTHpvoZdDw4uT7WaCnQqLLM2Hbm1d34qyGpsLhmrdzLk19yJbDCHzgZKDBmFwYV",
  "key5": "3tkrDszAxXA5swCTqUoPH1RyFwMRYo5JMqZxpknYV2qj5mxR5GY2U5d22ajgeenEr4eRtUEsnGENV5ERvS72UfMy",
  "key6": "4aakytJjAsPzPTuNiQGVNppewEc6QCJPvV2AQ7bKgepYowqJsEZEQtM1Tt1uEVt6e4aCh8rCqqzCmtLWPXQzoEJs",
  "key7": "5U1npiCRz1UcWjWHg2YBGpMEDNZJJwr6YQawK66BrGGdAs1hw6tUbbZS1ucUMa6dKVfVxPMngE5hji7WK8QW4YEG",
  "key8": "2drAKv35B8p25ukXX2Gnj9nbc5rj3D8CvsDAaPQj3iceAvYBzqe8FwYuEo5hFmvwNqJSEh1nspPCJUsCoQGCkcrr",
  "key9": "CsFW95Mv3xQEbewyyXKvfY52qXv3Fd6kmCCGjw4K4TBGKyCpwW5eizrbSMCjAzUBCHEJXey5Z4LFNaiiiPSVhDT",
  "key10": "3Ux8varSoXuCGRT2wM6SPfse6QSzKyyumeYKmFVSoeBkZC4xRVjtR4aqZF38Gk3JLfXskumgnZWUM92uQdy6WZ6f",
  "key11": "2HTLUvfTtbrsBSpJ7iytTQZe9DMfN9xnvyhacAkZUCY2YjoMbpi5nJPJhevhkqsB34nKkALwf896dDCoBq8CtahT",
  "key12": "wFTkCSmujE9jTNgzE3S1X5Jn367bVN5pcbM1UhYbWH1ybS8jkA83LNrScPrjEgiyfwSbhXG9qynxcu39e4EvcUf",
  "key13": "3ThdVojojVLk24H9irXwfosMXYQgifTGQxGfkAUdPzitcRjcxAwPHEgwRjnfCLbTXMDLWo2XkLQYYVpVL7dwnAn5",
  "key14": "5nZkHLxxyQA3pHGmkCqTvGpeLHMesFxc7Aa1MoMcdbx7tJ5qU57vEF8G8vKsi5DH83oJTst79HB5UB6FsJAxUgeq",
  "key15": "3dvJNXVp5NqF7djKMUKVAvTRWZFDegTr6921VvXa9sWNFDBvRtqN95Z981aNRAyTSKGmFEskzdWXoeQ4nk1e4gDE",
  "key16": "4D7k1mtRawHaJXP57TbyW9fQpkHcnTH1VJGburrk8jTAEKNG3Ld2nSVfWC4VNEFdQbF2iAmAQoEu7ieYJHZtFoWw",
  "key17": "3J4m5fqprCrm7MskEsU4e4PCqDa8ZzHJ8iyKYymeC1nkmzTw3vzuvNcdntJDLiTnNbgntV26jQH8SJ5y2FRSpx6r",
  "key18": "36fCaxrctHefhiYsn5689Q2ibEZXHpCTcXexBYyqPJLd9dS9d1VgddaJ1hxHcF6MxJ4Gah1N5HrQXYcUDVeUDYDi",
  "key19": "58pi4ThuGxHG7HLXtsB7JzxeinkrtvA4AnGZoJ66rgb4ixAuoMWAaFopEZ59pRGDWryYRsqvauWPzq8mnzVXiYgT",
  "key20": "3dYAmXSoToNQfoBEk4io2JhsvGLSxfxbwYP5EuALHD6Ngf5YYkv6mTVgXcAsBWs4FvcFpnAPxwmv4XemtPN54qjE",
  "key21": "3pMkeNidRBwoGbyn5zB1YMVHChb65hGcNgp7W4T6Pt9TU9n2qdbNPHuGpDb2i58a8dP1FeBNmXtppswyJbAtkzN9",
  "key22": "4yedUZTUXYtngBes9wghBavBbXM3svD2JerejRHj3Qv7uHNpoMysqmnHauzHi8kH9JRR11uzvYHmraGkN8UnJPZo",
  "key23": "1L6yPHHjABsdP7QPVUkNd1LJrhchLAhL8626TfNo16rabmHnkuF4pPdfRNocxN4TcxggcPWFUoR3yzxouHN7VKF",
  "key24": "5ekxrqA9M9jbLh3ekG52p8xPTiWp3NLDuXNcb1PXKiX7Pxzox93g92r3m5RdmRzEVG6L8UM8DPQWPWVfGprJn2gD",
  "key25": "5UW9esWgBtyeuYbjj4EKQ4eAp3ND7tEKupjA8w51ZARRpXoWrdoHfwTmPaK5nqnhFAzznXc22AfgyKKqk8YWikSy",
  "key26": "FXUbe84y3BWh32eX9xUGCvXWZYrG9erQyA58AiGhwoxYQvphtkqEuvAA3gSUAmqJwjJKdoATQMpMaUzyNDmjN36",
  "key27": "5Bfjw6QrjAFCsTA7ccCdunP4cdrgvZi2zJwCAnq7GMuwGWwJq6Ch2c86aUTw5vTMjqU1sGjRXXBq6wQdtTQf6s8N",
  "key28": "3pvu5RioyZvYGLCriPvkBY6d7RwTwzdsaC2mR3CM391248yZU7ys6tATnmsERy1QxfNdCndJT1icHNy3iv7qND8e"
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
