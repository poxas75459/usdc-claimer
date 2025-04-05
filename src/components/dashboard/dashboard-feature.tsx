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
    "3jwciTVULFd3VFS2tXQwG375JRYxBZy3T4JrxnryJABdRwBvBsH8EeTVkLWdCk6GiYRK97XhbcWQNTpL8W6aingv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rsAAqaX5qVMWmXjy3ftSEcBg5zc5yqYwqQxJJfxkTdCR8c2UogXCZq17YKkDGZoWJNE5gBozfcBDhC8cjVgAN8",
  "key1": "LuWzcGVArVUP53cgTXz5NxavHnZSC3uWV4rU8xFW1EzezUhynmXWvSvjBasfEmA1AP4aGdZYMtYSQSxeznweQD9",
  "key2": "i3mcbdz9WL3sPirYaF5Wfe5TdeXymYSq3CcqMqrSz8PMAR35rpjbiyr4Dgu4jau9MgAdjYVNNog2jQHwPQQvcd1",
  "key3": "4jjKFb6cMyjTw9EXLMNTZEdwtEoUoyPTqi5UGk7FAw8A7dvgGpdD469pomwc6PSRXnkBQxkcmYWGGHyKMaepQ15J",
  "key4": "5oBkH3opD8iCbCDVpvpCApSuTMMF4UjPCGBrs5HYEG1yUmgQXZvTxyNkcg4NLygwVdpi6k3VYAtw9jotxYrQDdtd",
  "key5": "FpxbAEEmy5764uw5CAWF3uL7ekeUGZt9iAV3vh1dzs53m7tyhhrcFrbbvEKbMkzpb3wwtAjJtoByTfKhvcnqvgX",
  "key6": "aJ6YCxpdyiGSDQbmyT4ZMicc7G9h9eoqyL6Th9MaWhtdVTvW8zgCSVH9ERs9jkeacCWRXbPCUQ7wDZckeWjbeXn",
  "key7": "DNnxyACMu3TXbZLB4hCDfZqy9Q8S4tFpH6m1d4Q3Bd9Mhk3Jd8oxdUmqHvHUYjCVgQo8rTPCZb34MsGFT7t4yEo",
  "key8": "52kLtxTAbaaNXffbFGozxFyjwKued4wNbgJ1FKpnjsz5YXCj3Za1FisSTwFEjGkvrBYMAdrqfkDwG9DDWKEZkgSa",
  "key9": "tQnT9AKvZwc2ESnDM78LeKbsShxgHE2F1hMtxcVPx5inay2hsJEPteXuKhueHCBCMdPdSXx2dy5rEqPgvkK2Wmz",
  "key10": "2Z3rsWLq3RHVAVRJVX2TvjxHwsrfXuRA7zdo4KZSRiFCTVrrQWNjT4c8aamix1RckYSsXwE79dkttW3TxGY8ix3B",
  "key11": "m3NreWPHAoc6qsgk9wN7bH5JUdUQyvAxLMk5kpJ98VXEzqgGykHEh36HWVYqBA3qQNu4Gh8MDfxRY18QoGKmwAJ",
  "key12": "CkWAwxyS6cdTHvG8JwJQSrrSQF9CxPLQy74d6PvB2NCdhpYQp9T2Fx2F7GLsS6m7w62Doo4mTQTJqHcgh5ReKV4",
  "key13": "43iCVnuXig4UY7wSjSeyavbgkuPQcdVi5Nf2SmA8KhAXEdNQF1LKkiLwUuB7PhC6fKskQa42nsZp8HFPp2hTpUc1",
  "key14": "2TFenvZyYNZL9PbZA7o58znKWKeR3sGKLbdBYZSufqdTBKEBpJWpTUHxURaGg2AXNLuawu4f19xjauo6ejatpJre",
  "key15": "azgNHMZ6j7iQfyTeG99yQMG4b6aWpgnaZHkgpnQFcc5VHveVcGqEbmXG9YpbmxqusAMibzP1Tn5T3sjAHvnii7K",
  "key16": "2LeE7VWXWfKBF8eYaLEkXVZ3xLPC5cq1hj7Dh6Fo992kuwk5e4AHiibnKtqJZKc5WVL6qxrpwP8FjWbfQteuqXTg",
  "key17": "3u6QPDa3QWk21dibx4HFuR7o59xtS5kateYmbRdbN8PyMwh8Kj6YnuFgji8m3j4BNpigifwMWSPibAKFRBxC8YMW",
  "key18": "5ZkBEpH1b98qttsAQLb6PoJ96j82n6ZM8bKASVPtQoNVkF5kq6UuUsBJjwdFGXomZSwZBPyLK1KD12WCorV5NAto",
  "key19": "4ya57kcgNm5J6GAW6JwsNW6EhVJSLobqKjtzz99wkiA9cVkh2j5YjWmWJwm6ydpVnnCBJhhfK11inaZgeyMywkAz",
  "key20": "2aQUgJU7ZV5evarvQGrnKgGidFFziec6grTx1CHn9hMsyomJr8iR5b11EmeSPscmEMCnLTWzqAerbafHdCSk2MPa",
  "key21": "44Csss8CGDbcsXZg1RsUmpcLHzVQvao175WgPyvfA3fDE3h6gueZppaosWMNvdozL8DM5ksZRFnBfmK9NfZxnfRt",
  "key22": "4gBi8JYvnVMy6jd6Au8YDSB16VjDRcGDLn3gEaM6APHYfNEX233KRgKF6tDvpTG3tftTocZvum2ZhUwMLZn7DUFJ",
  "key23": "5xCWGFurNYnwvXDPUpk2tFYzVKL1u1bRqEdL4SVPxNtHNFys5Ax5rrJiikYA16uUn1N52GJtaWwMrTiY4bGT3Kxx",
  "key24": "61QRdTXs9gcARmBptsQfdvmKWZsxCyZyYwbJyCjJkRAJmNzSrfao3jsu69XD8xVzBqKPmsSszZ3LihuXjLdmN2Z5",
  "key25": "2AEXRjKQsrWcrouP2rLo8Zd6Xp78P6NfLKyxZAWqXBitV9cVGGCRaHHmHvrBygqS7LG2LZGnSdqarEVn43t2XLFd",
  "key26": "NeL73vLgABFEHuzrW8KrdJC1nbYcT5yCBL9rLzQwxtwwpfqvcpGSWEJbJs6vuMawmqZfychjwoXejh18YUPPvGu",
  "key27": "2TdFbGCh8AhEDRH5xnFKFx3TiVFEpcdKqRxKtRPUAVYaXxgW1M31BYK5ozKEUHFRihDjPZj7NF7qzyy4yiwMxdFo",
  "key28": "HbCGJfAS2dhwjEqhtPqFpXgDzYnUbjVYBofarAb1bssqfQVzc4YFWB44JAVjGLVVGWaWhvqzwpbL8VdcQQLQvYt",
  "key29": "9AQRDCpVpFHbFGtgz4gX4skw1o8dzfrjyWf1aMxa5GnCeDrr3coyU2GPR7vdZLLNVm3YU1LFHvyRmaadXk5WroZ",
  "key30": "5dpDSapE43g8PZg9ydACr6Kfosx2ep4kQ1hA3yUh6NN1jepMAw8R4rpuyWUBbHaUPSPRJ5TFqcKHbwXKvhGyxBqB"
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
