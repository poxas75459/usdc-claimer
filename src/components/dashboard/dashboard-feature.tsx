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
    "3hfnMmbQhUnZKD8KsYNd6UNYWfuWBXyS11zFsSfdQ2YXur1GD1BqyJ8tJDnRzb4sc9pUztLM1u8eRsEoz1qd4rY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zHTudBaG2VxRUAkP4pvyfJfnDNQDGac14SxYohCTGubAZWB4rm8nfzDq9rqLTde8P22HdiExUN1V5bGZNaE4zKW",
  "key1": "596Fpiy1KAbvLH92Fs8381JDZevBivRFXf58hEGmkR1zbA3MeCuZnRHR2FfexoDkXBHaU4er5hf9Dp3HPynW6Hqy",
  "key2": "3LDZ92pukhmbKN2qBaX53d491f8b1VCxiCi1zp3VnwBy2So7dq1d6RtsUxqZUdjZixDJaxN8STsyFjYm4vr7GdnZ",
  "key3": "BGYdcUXWvcrizqpAy58uWmA1X2P75noMHrbSytC3fk9UrBigfNPd41GScWpmGvaCVDQ2tXXsQvHoXNMsiCGgYN1",
  "key4": "UdqFaMzMzxoStvCV1cEnmkQdTACxXwNN7uBZCnZeyGHCYwN3CAD7QfFHwtV8hFsv7z2ny17RM3JhqxeWw4yESS1",
  "key5": "3cDAzZBu9VS17Bgwa44xHoMdQanPLUqFM4cZ8mM5VU3BZHDaUdnp1HBpRh8vUNRdHHko7N8KaFHtabVBZmtUhbEM",
  "key6": "ZYzB2yv3CXT4yVdyg73RUMtduw4WX6GuywfQJAzAM8xdCd7WsE2L8bsfsqxRxaSb6CNZu1A8355T77ENDm5rEkn",
  "key7": "4mfoH5U983XgzBRXYc3bZBq6o2uP3RsffWqnUXiXX3E1eKCuCNASnw4tvqtGkKKAHJFAizBSvYqbkBucj1hCRma4",
  "key8": "cSNBfgQJ3cjJGjqfPXRVRHs9WThivonqttcEYWnsHwevA2zWDM5k1aK5aL8c5CkHo3G6Lc3AaiQcsqxP6ML6Tez",
  "key9": "3qTQs5Xvkh8F6ctrkWH6LoG3cJqBHbJMRT2smk6e46ivNEk77oZ7MRpj5Riw3nxsqz3k86X6WTYWBbqaApKtEdgH",
  "key10": "51q1iFsynWLAR8moPd98YWacwsmMByD5tUFpQxBf1cYadqpHR9bVgbJ9Yzp1GrxNfYZV2Aj5W4hPrSx2dthpgbrS",
  "key11": "PFz26qbhxumnKg7x9eb7mqNLc4m3zG5UQtYfmcyZVhtCtFU9HPtecXAXyZ5NhSkwVywgUm8LKKY4nYKEj9Lc3m9",
  "key12": "wTvcrZtVD81AKY76JiyfDiFwbvEeRhBUjtBMo7nNYXLuaYWt1p3khqg49R5ouam3H7ZBuM8uN2fGoZ816yxwCiD",
  "key13": "5gqC3cR1scfLUJ5a1snJWJbenBU2zeesPDCRh8YJZmhmP2UtUxsvi3BsHTvpw882EyC4VnCd9sKV6scqw2JM6rid",
  "key14": "3U28HEuPbzpxc8bhgJV2md3rTz3n43RV6pgqdDqy6Evw2D2LDgHYouYsuhjj33g2bdHEUvwtXjWFBCuFCn9N84h",
  "key15": "3bvnMZ3QJH7rGqXt6K6agbsHv3kkD3E9mWhxc5Ua1ExUCK42iES6y625Nx1xrQtLmmbaX3JRCuo8ny6dPqAMSQEr",
  "key16": "42rs5uXCrey9QU4c1gyL4ZCvdTXnjAerw2c3XGqZfhUE1ifJP6zGMEt6VuscbtyY4ogC6T9AayaWHJa15VCbfzqa",
  "key17": "5uptTcf12E8fY3eAYiBZbZCcz58RwavBLsBSUWJX286dVY6ah3zNYJwQE7tyNnSCgD4ZjETLhKs7MBBUqYJzdoSf",
  "key18": "4A9p2niqV9VAmYpjV7NcpTV63yVTTegEYNYYgaK8q2VXGMVrjaV8k6GLZJ2WLdwv48eyMVD3L28ypDjPBoDSP6sC",
  "key19": "33foA8KYq3e3rTSuyzrrdUxn6w6EUmfzatgrUdGetLMh5f6Ey7X7zCwsu9k3XN53R86UNPVjzJdyzq5ZSfsKTxTf",
  "key20": "2UCRAanH2fYLkQR4L8157JwmfSug46NmemWjbNaMvfcLgwJZPMesoqmgJyPVxvmbt5GK5bKvjvzr9Gvobtpcniax",
  "key21": "Ed1NafWXGVb1NUpvb8NtimyuXvZqRfY5LHiSWjiqwwStWF46TaqNLLLeQ27qeUP1xwpkXfCFXx4Ye5YsV2d4G3q",
  "key22": "4uH9cj1H3X35iExmrKEHRx8Set2kJJUtsVczDVMAe3RwXGcotEEhtPruvGiJD91e28Lq2CcFyK29ZmVyiqbsuLE2",
  "key23": "5y5Zh7hUZVxunHxw9bvgS6Cr53eKUpfKhFiD5Sd9n9365XjoKmmGmD6peraJQot13GFv5gTP7bJZeN3WWZnwMMBh",
  "key24": "5b4ZHA4U3WKApiR9XW8ZJrQyqecjqmuB3DqaZiV4tH739nSqxc1oQU7vT3nsqtFVrhUqc17uLEjQgf4pX9qy17xc",
  "key25": "5H4McWx2rbWexMBkuyQhwkNdcgf2uv1wrvkgDVP1ypSoTEKbVtnvA9c6whWLSCPa82bjVpfqrN2iTgrUzXyqF6MQ",
  "key26": "SiKspXp6c651uMv1idnRR8Kd5wNd9Q8hMq3Ctw3tDw6dTRhysNwMbHLxs59heXq9hoot3SBLhgkE8WYxrXN1jgv",
  "key27": "3uxYHbCxJ4SmmcEsbRMcHssccM5wmcAHzawx7YMkK54dFnY4BLgju4jV844kLJ9WBfh47YC4w4E5ebrgHbwsXgD7",
  "key28": "5efUePsYcbg7HoZnwhVyjfaxDkPZSjEN193WvACYoU2P1trd5tZeuMXK3t3UrEXLCa3G5S4QPREpVidc6qpQJkq5",
  "key29": "5YpRwrHt1UBeUcoM4epAwPo5eDQ4c4eN4HaeA2ptiwPpNdfmChM7f6hZRhwi61JLofPXvUUNXWJe84tsetcxwvAd"
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
