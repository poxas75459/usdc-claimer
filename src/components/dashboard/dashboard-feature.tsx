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
    "2pHXchTU9mw1ay6xurHF6WWt1uTvPG3DKkPBic8Ss6PqETwXkRHsQXoNdTHFvnke6kQ8hF2aCUYL69d7CDZP6FG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9NECwXBaq4N6qSRF8jYcTJsECxKKMm7nVY32ijrmBdtxGiZB73Ja9b8Jv6cf4DJEFJuu4qAoTAVCe9Nc9sqeWM",
  "key1": "A7vWmhdmwzpXsV74L6WxHD6uaUeyVP4zfWwpHxDhnjwHtE3cNNQAPHkZmPuhAfEmYNhXjGcbyQBif1mWk7QeYwv",
  "key2": "4f8f8YhucgJu9qkaSb1nkFsvTmmhstvJd15jSW2vzLurBkppNsBB9oH91YJLKieXvDeLAjMwnwkeoxXrub3SxRPG",
  "key3": "3Sq1Ao5J3T1BdG5GAhUy7F2LatwBUUBeztEChbVdsUyRMcJnMBgc4GEfJ1kxEhVkJsuJNFCfQtkCGif9QHECLSbD",
  "key4": "2vWExrvxGkfh5nzAHfSCgpFL47JhELhConp3ftMn6rGWXwSWA48gGhyjkAoTZ1b4xSvjYfsGSG3WyZ4QGxzsjkXP",
  "key5": "494aLWg9tBMQDf2tDxky3QrEwNo7xF9Ttmj2wufaoSZqtXeQmC621vqexmvBMTvhUg2oPpyBXKD9oWeZGiRYSi7D",
  "key6": "24VqP6vj1As3nuXH51LTRtmJXDA25DTysWyq824tGXqmzdWmMKn7YmpHjMAq6Q8n33KhWKTx4gds8X8oeyJDrfvt",
  "key7": "21wToK8bx1fF1iqYvSXQGybwZ2whbYtKJzNReF4ghVenZgqNXxjSp7hKG2jh8yC4ZTbEHtQnBgghq8hYygpngMu8",
  "key8": "5BekBxv8tinzXxkzT1pQfxruMrisvrAiCpcF87qtkMjFUgNhAtFMBu35xHdcamnDY9B5yh2jTivBBEKXiNEMewKa",
  "key9": "2q7QcwBv5xYqHJRygxaTfmanr2aJBwkkC21nekFGDTv2yHUoBe3KQoPQ8tpScPDVKG6Ftjx9zjhddyFmuDTtqwRF",
  "key10": "N2k5Fw18udgz7cGEHiSBe4NCsjyp1XG6KemaycKAppJWApWMDDdkodqkKRbYyPSKJRhyV1HKPN2W3rJubsJxuEr",
  "key11": "2DKac9PjnfAN7g7sDMqvpmNzWbeaBuJCVUJTRypghcHqYUNkwDiKpGLiBunBW7oAaJ3YiZFi1e7ZfkK4BnpHvxNB",
  "key12": "5Woc6khzb36dpPSiUKcyNTrQyqxBwR7hPoPx38jwfFPcmBRjVsgYQe4oZ4v7VSbbVXbnxZqKvTvpnCkEmHjjZgwg",
  "key13": "34Dp9S2V1iypUmsvcWuuCkJPNFQsDz79RConEis5vk3iSrPQj11LHK14q5AXvRHGRCCurunYeWEntZNevYp7jqpJ",
  "key14": "2W6tBqjRFbN6euKagNxEojacgD8Tmm9g7XkzAHnLv6RvZNrU57LJtvV8DWNeers9S3dzmiBgYmVfJTVT5jYJ2VjW",
  "key15": "5qTtbFJepPL3YHFj97gjmCNwkTA7Y5ccMuMmZUBEBZNqrApJDoHG9gNf3qQYrUW1dd8iH4fcynmNM2iWxjVSoV8G",
  "key16": "4VjXG9yt35FSvYsE6rSrRumChmbwVcre6LnxKAHivwWBo5GuajwARtw4moHg3iJqiuoBLL7UaN3sCSxPA9EZaiRd",
  "key17": "28g473QCY9F29ubPT7W7THNxXeFr4T2eNqJDyRF9t5VQnWfR9Q2suNVC8mqy3a2y9QwPvHWZ9dJTcT9PPkJ6gFhe",
  "key18": "Jc9X23sU1KTz9XRka1FQdX5V6gfVTV2VyxF21WRR7EfQuppZLXFBEV8Atc8bGgx35MVSSzjYX3f1JeRnCFNXVdb",
  "key19": "5CwbtGL4KaeR6UxRPGVUdYiq8UQEXZ3Hc4fXu1kQZvNr1EpUiivFN8t7Macp52oenRVwbrS8boKPPPqbsuqKbcE9",
  "key20": "5Q3DVge6uMmwD6WDzVUi5h8KCERGSVDijhcaQ3wp5cqVViDGvt822VthKFowcP574ZbZiQVVyncLz1tnVGPVe9Jn",
  "key21": "3uXaXoTd82UDXZ9ozYFYwnrSxsHxDymeJAvVptLrNFifSvsq4HyDU2zAXVWLaWupjfFZmDfDewVBYNAwVPAE42i2",
  "key22": "tkCGVhSSt17CVNqrmjmWpTggFVQkJxidNQiwMCnKjiyKckKfmqE9d8uKgae2XssAcUVYwEE8jdaYaJ2i9oh6nHs",
  "key23": "2c8YJjZckPm1uoZo9YzGcHpmzrVPN8o1y78R1ohKZqPMqG9mVypeTKG8EtwF1ir28Uzv5iPgUvKkhER7mGtARGLu",
  "key24": "bostCTDcVDdDc2veBDWQ3GK643xZ1ibdByn6CE2rWKgUoaum1LiaQ3sQRc2t45Sbj9wvLBS9gNRqS2wa9Qd62TD",
  "key25": "3dmWuUSydUhf83tUqw9T1TUnqdaAcJg3LWHzc8Ue6UWHL9DeMoievEkcXq41JAoyGBHg94DcnsybPfQfLdvgbwmb",
  "key26": "5Q6XG1FjtPUhGKjh6tKSWUNoQx9xd5tWXZXGcXiZ28xXcGUoE9eu8J5mp9g8PCRY5dZUw9ehVezVtMahkUstb6HE",
  "key27": "2rpgMebPUmqZvzaQmvwWthxU2g4S6FVU23Lw5w7VgCnfsa3YfqU282uH3LAn1ywbtEqsLga5Wk5KzvcWqf3i8X8x",
  "key28": "3tTX7LTNMcMdq65Au6ZqupZ32KJPAqECHHRR2X3Y8NVn2Wxz6ndPyLuBDfjfNFPymDvKmsHqF3sRe7JkH2N64XEM",
  "key29": "2ZVQ7Q75dNFSWSxSbbFKH3Sz2t44LDr6bVTxqUXZSgTnnZK9qXxrsvVNBJYsyT5HNARy8iSxEGfvESCEuWGTDKf3",
  "key30": "3XrvVTePMb8rqZpz4ec7m6HdgV8C4xes7aYTPdcdKmuB2zjuKTkXWUPPFwuWQ65Qwk36m6EDgBEHBpHkvGAbcTvV",
  "key31": "5CGN5FWgUC1tKRnsqj88vwvHaZpWohurUFaF3anSWAb3L7cTxmC7vFdTu5n9kzbxhZoCCW3oR6BVenPjk9TFeFRp"
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
