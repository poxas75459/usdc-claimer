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
    "4pDmBVFbgnpyAWfhYGEeAmFPPv5onGW4utGH4DT4SNxiPTYtJx45s3ci8mNA9fZYrfhuKk7vwnUsgBSR51dm1Yks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iG59N244QRRWf1vw6nfH2E6kFKVHu6RYWszdKRuYW1Zb4F3rQhMKWk24Fc261BAFpPDfjw7xJAHMqyuNsRS3Am",
  "key1": "52GKMhCCdcYZVyUXKFjRuzwjWNJmGsxHumMT4yxvFA9B7KBY8cBA5wR1tvBXEraA6ZM8QntSkF8A2zB8XfWwsKAo",
  "key2": "4HYX2HXi1e1kyYmKAw2JQn2L5DPheNfrPC5X5cXoUkiiHNNNFyw37Za5JNEZ3pMBDjy28pRaV4FsK4xU2XYzLKw7",
  "key3": "3xYcVmrLNxXSJMJ5JRPVGPuaD8CfocFd3TaH3hq5cMTWdxuvuJBTWTagT2mM9K2zd6HXBtmqGfNED5e3patdanvy",
  "key4": "3RtgTTVDTBgk1C9wEvWEAZY5hbh6ZenmQ1wFv1j8ZCupZdCLttA81bnoWRSMjhP8BWjK4ohw2qWQuYA1aC2gdm4B",
  "key5": "2WZnUFCUC4zSojKkBFyqg3aUyhG5C63eCQDnErjbAj5vHbCshgwxrYWAHPV9ijFmYZztKzcHrXJ5JAtB9RsbzL4X",
  "key6": "5yo4a5y7xfoChQqrsKQDZrvVLCyhdCkaWBh7btvYdhakHvHMrHw4ccVyXwMrAYg7goL1q1VHFvyaaXoLyUnYQAoQ",
  "key7": "zsSyDoBxphAKhsq9SWpKDrpTAZpevv9MaKvgAJzuWmhramGytxo2KxpVsUEWMEdRku8kYKyovfJbCHtK1FnHJTG",
  "key8": "2DS1wD8VPx2RtvPjJrK89597MZ9BKvzzgSbdrVDTcV45Z9eLrekZ9ZsJsqWdyJ3qJ2TRQsLQGjfpw4AewNd1QpCe",
  "key9": "36vFyF931RAYRftnA6LxrTpmEGjE58wXKDaqykhC9mcSCb4o6nULyKKaukYvZRseTwTnjG7Sh7L66jBqsK6DqnKX",
  "key10": "44pKDmzfo6zPQhvf8SiZhdALVy3YNT85HRKh7nw9BoNNYk1XP2fR36gw2dc3sFDQBXCNqMDEtTHnhUkAmUWBF1Z1",
  "key11": "5T9JdZQGnnoAoVeVGKAQwZXuhMhKKytesKQuiX6TavL7q9TbkcQLY9McoY3DBRWLZmC3qgdyyrsFxwPcFnRhNdRi",
  "key12": "58Uwo9aWa54htEanwKKk52qh1MSvaZjACa2gRsidEf8k6gCbMPZD6aPKmnhyUb2mET8gwhi85HUUGKt1Aq8sN81M",
  "key13": "35EjUHGAGPaZ9Tr6WHD6iWmd9PTnhGfv4da9fivQM54cnfdGNkKifDjMHi1kVVPdysWC3jNmEP3LJXk5pkpxupNc",
  "key14": "2x2PwD66qeQd8UfRBPyBvMonL9xTReL1PAphBN6ZmwbXUCuhzMSH98xnJw3stu5SadrMSCeFhYbPG2wHWAxx2jpD",
  "key15": "3Twfm57LxZuNNm6rxw1TA5g5YngSQTt8p42AXvc7Ww55mVZbwLSSAb7f8U6euR7EzvE94zj14M3dcYuSoZQH3bDJ",
  "key16": "54dfF9aDrjruduyY5MRf5h6zfJpSggA3nDHHc3aSbhD2LfKTi5DaJ1XQvSvM6wn6EoYetU3bLu5Fqe77w5Bh3VsP",
  "key17": "2m7kgkQWrB6W6ZsET4MstcSB9Ptsd91gpgcbeP2v3MiLMvuEG5cfwtyq95FCptFtoC7EsWFwHVpbnHkjJRWi8RNt",
  "key18": "5YBPFtusX4oms73UmhWRovRSeR2CfD4HrdgFNkaQNsRnHBDiCPvd5QL1BkaSvVwsgQHtd3Mbq9W6EgtkhnS4Tm1U",
  "key19": "yAPB9cgjKKPDSnZ4RaWVDmyQXmhAuhJVQ6FdXSwtW5Psqk2e2UN3S8brZQbLG7L8y3ZwDv2nVP6xxtrYhaFEvWL",
  "key20": "VtxGKcvJ2jxyY8DZkP26Ait4U3i6L4DkyEYcq4HGS3XLAPSUu45ds8Bghr8d5XR8fWbAtdoAYR1YUc7QJUWD2CS",
  "key21": "3LTeNj4TghkdDLqHCr97kBBybQJ9s3iBeRhNMK2PsPujwThmtpgxPmXMmUsPsB2gdPTebQ6vZjuhc3xNU6Bp4Re4",
  "key22": "2UeZp6BeLxgYrY4VvSp4GKtnCVpzsJ3RzTChwC7AVj4eSkWGabJ2ZFLHtoM6eqf2furGJMBqq6a11iZMNukr8jD9",
  "key23": "4ynao8EfRvtrLWE45qdK3F3PHXugHnH1xtSxYvjA8SVLTooNqNm3VyKA9LyP2LPRgdRDNLwgEDfYH5cXoNX9EatH",
  "key24": "3dFafB1txoqJ3eFveG4agnRCMja91F6P4tQAzq5xJ3Pz9RxG34nBiUnfN51NuTrPEw6kGE4hM4qrJJSgAQDTHQts",
  "key25": "CDY9AJQvLeDdta2iBG2sp7XFi8FgXZ2UBP1Dqbv8xJm9JZY55iny5uKkTN1G186D4i5UpaMaKQAdBLXpdyv6dEu",
  "key26": "43j6jEnqAF6NkkSxLcJgWcTbvzS6VoMRm4t5gf5VhtaHE97apZ177erF4tFRMdq727M38bc3YTcAxAvEDxT8DohC"
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
