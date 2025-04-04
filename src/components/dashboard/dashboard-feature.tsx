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
    "37vg2Jaw7C3z4LHHrmSVay3aM6PtTmPusbEFREfx8FD37vx2ciecjqR2BmrY4DyrNkp9n48bDcvNNmCoNDQmcSkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2hgCJBMpUL3AvGicJq32r6LenLDKx8jjE2dmvcZXdr9s4wGhTPfJLRzcoVF5GxYwhNGaqxNFHBprXSP4vTHYFL",
  "key1": "5ZUXYzXH1uoES6z382Q2yZZUckz2aKgJrvDL9rJUcFLhirfZaYJ4vqsfNze9SiqsuSNnjyPQ871T36dJmVw5QGV5",
  "key2": "4T8KX2icsSWs188pDEzXhW3P3irUyFU9DYSVMcxB43pGHoBdVRsbFyCnwu6adyksko2p8pYAfRtNTzKMLABWzNBj",
  "key3": "5QStZSz4JefKu1yuFPUruiyr4M8S3xE2DwzRDhyinsxAuGLTqZzXjapbhPYib8exSNdahATUXvJjjuofPZFdHSQ3",
  "key4": "Cj4moemyfRtWvtE8yFpe9nXcM791FWsnj3qZVGvVasxe2Cvvv8ke1fw2F85BUwS3HNkwrz13WYFUGpGACn6dxai",
  "key5": "3arFNAH4TmBph3Z6t1NR16cje6YfMFk5R9rEMYVR16JjtKyTXPcsVv6dgNFavDtqBKpKHqqshuksEnDSersakM43",
  "key6": "5fWDvv3WKxvxfgQTW5W7DA3oakLiCXyYC7sDagb8fx8CCuG9DbTocPWkW7QVvuSzGVV3HcGvEKL1fweLm1hFzDpV",
  "key7": "LTNjTP3dGMrx5HgwaNQ8Nn2oymwYTwrscu9Qhso2rZkZ88NTPozdUFUwzhRnvzE7G3Sywx9vz13gysb31GuFQ5V",
  "key8": "3Gc3hjiqfUBjMHDfMnJJhEo6mxHLrsrGfiw9pPpCVkyBPUYrsgyMD9AtGUP2SU65TevVtEG7HS5zFzhh9bFwyDcj",
  "key9": "3wm7TwwGThvR6HkeAhHT64hjkihBEorpZJyTFkEC15Znb9yF6dB7sNS8giF2LfpiCdeKtpjr8Ex5qvhQ7Tvbz7iM",
  "key10": "4MZ9EEpPsmKVVg49k6r874YYx83vJxcZwKCwUA5X6MuVEPYzMLpH6M4LfgHSk6x7CyfygJzJmY2BVaWnkvjyjC2U",
  "key11": "3LafcZw23139P8yBNqQpETQwchxqcXDwHPr7fBZDgeV4Bt8KHsxRHydkNXnDr5Dg7B32tWKHAP6Up9vhckKktc7V",
  "key12": "2n4AfmeJsHZBpBGzeq588CXxmcdJGdNY38j4PZPAyXrNnsLVKg9KEhMNByweQrfXQrNiw8TkCvXz3R2reNHnSvuG",
  "key13": "2JLfvjXgrsnhjYoxgt9Xa31fcHeEAw4nxMs81PsKmJqWDrws36TxLw9u9SRWbZWgHyU5ftBfMxFkgEeH1YUzJH3x",
  "key14": "2YEMLdKJfLR1vhcsEBQUrZs1g8GBbuqGPNUUUKUqPFkGeYgGqq2t4Xp2474E8tZ4oN3pCH1NRYURhy8em1B8Va4M",
  "key15": "28AvALxEAb7MtRdiPw788pWJ2huP617n8qdy6Tj33BVUMPByLXNgVBe12WcDSDLpaNpNFR1fALT3rT5rjL6J62M5",
  "key16": "3u2syTCgJyoyFBKiR5BhsA2oBLK9sLuKf8zCbCxkbiwaDnUN3iTo6zsb6h5zmcKevxmVR3cAgGVRnSfU2pf7f62w",
  "key17": "4eSj5cPxMMzq5QQnsMAYuA82peAmbTNG2qqmVfD7ZWHRTKNKaivNccwhcoEx9zLGdn6jndCYZF5TTCSS7jtQLQgT",
  "key18": "4KL4HNDRhFENwH3d9puP2ywKVsm41SEJ1GiVY1V7ppkhWLPH6ABbwU8KxanfUmvrtCnnZKpFSjHZ4LuhZ95RVkK9",
  "key19": "u5SRzA7wz5eiDr9gGGRhzkBEo658fDEuxnVxqC8HcExYAwM974iMJTUVk73xkmQozG2WXdLheLjqVZkfmcZn2vz",
  "key20": "5SMfxw74eaXCrCqkw9knbyYWHU5Z3GZD1cEN2kGNcDzsAtup4LbTF2Cfx4JEBbpHFodazCcXSp9wCHWBBsSP2JZy",
  "key21": "KKGT1MFtSxbmDb8JgFLJpe3Bn6JcDWJP1XMGnNzuLiTQjDgtN5ZqfWDssjTuPooeT8VTogbgNdUiArVmEQsHhCx",
  "key22": "3GBEcMosYvun8LbVsNAw1VQUEtb7fKTSD4y4MB6eaz1iz6T9KYbD7Q6a9QDaWM6MLhvM7Ni2542C2rqaaKgLsAuq",
  "key23": "3p7F2MkzZkHmfRb9RedBZL8vdxYANyn7pC4ytMXskbrhq7QhstRaSNULMrUqWQUEBpjn2zZiAA6js8QhCNZXbxaR",
  "key24": "3Jkd4Yg8E3UYgZRJ5Pkqp9asBGnHLcEiuS7GmUyaheSyu4sk1bQ6jhoCwp2uU8VE2nnAji2A85tzB8NdEFuB7NmS"
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
