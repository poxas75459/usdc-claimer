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
    "FpbJjNixsdWoZyXACavBxxHy5VLWoCTVD5VrYgavhJpMFfjrEpoKjKNAwspaaLtcAZ2Ciq7QP2wjZoJCRvfNmvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZK5xpBcwVt96Qchc9gnqncmMrhhN2QU7RZprhWqVMpRgtrhj8wWrwW5GLvF65NxhPxhLo6vVJnt2Pbj2zZi5REB",
  "key1": "3asUPD8FMK3CQDVsYCVRxhtP8gswiVzBNtYUu5gxyFFWhcTGgzN4iwB2mLxzpuWzygKyu4e43wYgELGBtBHcBBZ3",
  "key2": "4pvhXuw3hd6SVVeEfr4wPpu3LYxVqDXrvfW6b6X7uknx52LrSiBGquhzFnCS6fAFcbATn2kdfgA9mUmEo6xy9cGD",
  "key3": "3WSFt3jL4Jg8AB1t5SLYMDn4SkmcFGasZXa41z2UtLxFm4zWDRqEkwFzsz8w8yG7jcovruV1ucEFMXqAzY18ZvY4",
  "key4": "36jmM87XjdBPfN6pX2bMjP4cHGBLRsFeJHMHR2R6w6cgwQ86NWyqaxjc3dwspZmhhKwuJa6V2PX7ydpjXP53BbQE",
  "key5": "49KZpZ5Mrwib6Beea7V1yBodPwh5suu5R9tBLxT3aoN7FG3xMKJLuZu99AWwLLzBsieK6rM4aMrfsuuarkKQy1CN",
  "key6": "2esVdTv11FVfmNX3mPMmtA4UJt5xVw13HMVHRSSSk4bGW4vZvrANzn7MhTaWQibL3ePX4HKEdQPD28hTADCnajxr",
  "key7": "2EUGXSTEFnS3we1reyd5g28fh3Z9rdTwpFLpjzh5jaNr67EboMqJHTccVwVmzaaCxKKXat7YLHRq1KvbijFtr14d",
  "key8": "4ZWw2xQuLJoJUWd6EMqDA4qtkzjybjEdJBWBBsxSEbmhzLNMCWeGdCi94gABBQ2jvPBrS9R15ZYqicjshy5Xg4yN",
  "key9": "4adGqNaW9WsLQ4re96y6MzmFgbL5QzfoHJMqsHVhFEcpMj65sDq1BC4HxzbRyM58rKmFfwqCK1TewpDbFTBJRXx",
  "key10": "4X9QeQbQJBSNskD6HqdKuyEZ9hnXr4nkXpZZNMqqymHH2PLkPVcD3VnogaXSqs8y8ELrzEVQGxJki6GZ5h8a1JRc",
  "key11": "358qeCUyTXPcqgCfDmAdsSMMP4QtnUeyiKtCZkLJ9q5DZ7CWZ4XLD9t6fKa8Jpas1fUHFmCQW89zMvUL7QcdhncV",
  "key12": "4xFcmBUmQ7k5Yt1YnHzuZFNUxZnS9FapTnZXwk16w8E5KEqyXDcV1qd1keL9AKhGhimjREQqTnzxS9k88zBvQpim",
  "key13": "Sk2DXb2LYqFzF2z16nF3ufZjY21bqXB6fYSsvXUYFwYpTbvTJviZXJVuNLYnTQXku22EwB7zvi6kcJBhUPGfK8U",
  "key14": "3fMaXooMdzcif2atfF5GDtPfgHrCSfXFsU1JhTAGv58QdvDfJUT76G3LvdTfqwekNsj4PCiQaJZEJCWTzaXxoBD6",
  "key15": "MXGDNhqC7yV3Adw3fhqoo1mJqp4vXKrbLQZCphNoDLXf3qCsNTbn6vrBKMdcyuQKzbGdgEoukKS5N4rWS39RLso",
  "key16": "1aXHwTqdacy6z4Upj7tr7vnKnuukTRG4WWhrtxGErPtJ6TouXnoWnJW1v22eHZGEqyNLs76kmpssuoAFsDUSJym",
  "key17": "211tAZoMGYe2Qq5qw7fYz8Bbaoxs8nDkxhbZ4pUT6TmQ2EaH7rzz8viRyWWNYPfozV6U5f1U41E6WxawCwqCYZWy",
  "key18": "33ukFb6Bmfeg5ZntqVvpLmD3ZhFh3gdbPUezWeJwa9qmZ748b5QR474cA7mvBP1Vyhx6uVwCsBC1HfLBqLSihVc4",
  "key19": "4dBwDBv5bsxkKXFpaiNcMJCfnw8tsUzLMfXhT8FTbb5eEMxioMF13Dci6CCLkVGdkS5cTsNd6RCaxe8HFixm8DqA",
  "key20": "2JmqMRgTsAV2BV2EAynQUoSWvUAMTP8jLWe6RKBsDDR12jrRRnXxRu8CqBSsmHeBnTPMZGXG1yq1KyphRJc2rgq5",
  "key21": "1XzYMGR1QymcYb9Ni29RZkisAJpvzFQBUfsFRMuLwWqQTGSXcbJM4gpTqzXDysf2obQTuz2Bu8tsEX9YT6yjJLJ",
  "key22": "3Y13dB7pwW9aPVCjBicZJFf7EFPj71SLuXdttg2fZikFSkczLdAto3yXqupPH5pjb3zgTuQ6HxVL38AsPrLKSWcJ",
  "key23": "5aqSMFmDdREhb2pEy7APqswgwq3YvFeT8Lu2AuRxvMW2VoybTnsXrLP164PdoL7E6E9vTBZ8dFpfsNWNmxSPFSfN",
  "key24": "2XxUpawiGAxjdEfgMdF1MCZ3Gqpzu5zmDS7FTMedydGSXmDDesGH2vT7p7fiXSeXD58Xvq3w5WVywqxtXPH59qew",
  "key25": "5TSUXTbi6uvjTqNQFQoM9ai4eSoDUhmJ3QWVG1P8H2W1mPVKtHBYtyzmKLvFVmedKxQ2hDzwfXhDXCZFfRZvNkPY",
  "key26": "5YPxgRVpLDsMxxSLTaBfbgLmY8YgJiiK6gNf7qWJFgChAmWoxhti45U6Vtm8cJue5wVs6mbKDrY3KSsVgBQeahwB",
  "key27": "2rhFMHpc5hwGtxv8xAh4ptZ58oXeg6DWprC7S4oKvCyMW4N4VGgSrni3m8S6xxjqV6qemGwFrADW7EGvhbPjnhwJ",
  "key28": "3j3C4Lb9MCLJuQhUPZuACoSsc22gzjF9d1zeWVVpsQxSskHusTBUEGx1KBsNoXsK57Qw6bPVHGJCWxjzxLHSWZEa",
  "key29": "sfaBdbeVtBs629V1ZKTDSRuS7374dr9MmkGrrL17SZckzekQcxWKteoYpULdv8QGER9VEM8Qj48P76f2cWUJXm2",
  "key30": "3H8PmjUykA5RAzSwtp5jvUxc1UzjxRXZDkmVDabnqsJTRzZ9CsxY8HtRQUh4Qpd4KT3qxD6rLaHNVbo7fZQ9Tu6w",
  "key31": "2KKS9osgyRGZs6Qcnns3xkb957amMNRY3dzpU7cxz3iAmMr9nkdDQ8L2w7LghFWGteVcKiwQrNmhqfQq8NWhf4TS",
  "key32": "5HSB3DUriV1rWwFmWRuJa6WN8kD6LYyQLPUri4eEuR1Wa1KV2uDym6Pv4uKBbLp6fJdB71v9jQTCtLkD3hmvPkri",
  "key33": "64cTzphc9hY6YxHfxVUJCTBnEa1pXT8UoHqNjoerXp9P3eacdYYxHTX5HdGRK33Vkpi1XkeRqRUriaEwqCvUpyQT",
  "key34": "2PoRCzrBPphjrtPEomPGAGgYsRBWNFTByiokrSUWW3QuRxagqM8ejMgtgzC6UL3KyN5wth4bHMH2ryA2usTFYtxf",
  "key35": "21bbREECnX1WQddtJxMRWrQpx3MpRh7nzYnQU9UaNRRUp8a8RqV3UwWS8EHB8GqpwTY1CaGaP2emNukq8NR5VpGS",
  "key36": "N6uEcby6v24J511UFVARBDA8mFhtq6H2T4JZkqEWWPB7EWCKX244VPYWrQEDGajRHU1oKTWskVKysmigxnkrVyy",
  "key37": "58dMc8tHiNF9e7GpG6ueYYMbzkBRwSwHXW4GuntwcpEXV9bT9UW3gFsJcmQKtgv92kLBGUHdKupMFn3CbDy9XhKN",
  "key38": "2b3vgXPdNyvQYEQs8bcbZyK1yCihnp2r548TWNgenoaW2nomcNhMpMjRjN3r2fBBTBv85NfadQqqkPtVkiLyymdi",
  "key39": "4AUF3qxdyxxtrgKSzBjV5RGUHieZohAfb8iGioVUGw4w8vaYZRxJ3q1kxhLvMM9yzEwy7uuvcJgnthFMgD9FEcUX",
  "key40": "qNF6g1PpFbXpphHCDsoF6f1LPhwBnNxFrcuKA7m2gQjcAVdGvp9gALRbruzSwRxD6n5AmUkufYNW4CkSS5XZdUp"
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
