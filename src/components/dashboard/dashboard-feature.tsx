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
    "zsZPYiBuPCMJQPEmnd9pYVYN8kWoi3SN7GBvbdEXPU1HfvQEvLaEnRCzreUYXSahk5hF8BkAT5HxzwWex1s8RG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kknd9su4hsNysoHYXmb47vkuiRzjk7wgKoWHt6NX79mCLVVNp736XdDS6fnCPvfokAooUV1quctb19r961nM1XT",
  "key1": "5B7tXkkf61f7kgXJarji2Lqof5SZwHeySHuqknzMD4WUwd7xa3maruuDYDCXwDTZ3VWkW2L78MDDPZDtNRnBDjSg",
  "key2": "3QqQrG8jYcGfHUk8thzceCzW7xGKeBgcbV1MoD3zscRGidbs63tCZPKNB24NGT1LS61DmxG4c8osCr87YPWR4Qhg",
  "key3": "3opQuhpzAzg8GKkCUcUTpNEuVmXT1jEubAn28adbfwKNSTxBYnyyxy7F1U8KNwtb4LUmsRZSB35s2ybZyNmjYoGN",
  "key4": "8bT2sYz2yXrL2megBK9oyAP9VaNvCJ1UPMDGMQfJJGZynLQe4bVfXmttN1GQETKCwNDzGQmT4JbY5hwTVWd9Q3D",
  "key5": "4edCs3oaQkihwDPSU6usse2rpkaWxDwkC3SFda9acTR5B4sgAPoyjvJZ6a9jbJi43Ctq1d5b4siexqxFV3UhHq9u",
  "key6": "62iAZB137RHwsyzfzYLtoNoZpb2ypYgcvoJc2SCfSDQwfwB8KvVzBCnmqVCD8G46HTd4Br3q7uEeBDq5wr87t5FZ",
  "key7": "xmMzsFiRLQEWNUggMAqSGYsE8uevPzKAaWU61HFCqAbderknXyRCYfdvYAX79Cv7T1Q7TuwpkNuR7JVqTHYEq4K",
  "key8": "2ThKR5HSj1RVYee2jhVd1wztb1xLAGq7Jk7jvFhMtfYDrzQivu2jEv52F7me3t6nMAewRC3mdDB9uSz4wCCePXsS",
  "key9": "4wSzQtyicUJzhCYEtpgxnFWCrz1E8XyeuosdezRCK8N7iJWuy5pKyY8E3nDHjJKCRqfsmyTnfghBEDBRVHWjiQDP",
  "key10": "2dgySq7HVooSRyaameZ6Uy8td33aPfP8QDfX3uccwbws5YxrMZxLkRsXCkoXfmj24eceibtoyRyWaXhZur5eUZYf",
  "key11": "5ipGjA8y84LoRjN493iypf4f7zQNhU2jEReRD12XNkU6QwrPKX4xSrDyWRkiraRDS2YFjogD2PieouhwEHHufmZx",
  "key12": "5aAKc7dhK8NLFrJeeCt1GBzXZ8w5UzESHNaMSLcV5LqDXkeQVyXiKyQauX2kmYKMeET5ZDkeDZkYkj7tBF4JaTJY",
  "key13": "2qfTsQypkdBWuwBMEBQ6DWcpVmvtpvxmH95dPtQdAzpdDGnSzLWiUQRPFDn9ujJyVncMwB2JxEG2gbQL4uAvu2uF",
  "key14": "5WQWoYzyEYHU2xhB1PgeN5VDqrst4DpbeYjy1ZYHqR96CyHNaqeGy9XwPzUSdVWkq5veLjSru8AFgnGYdxJ8R8MM",
  "key15": "hxdfs9t6betWobEGirXvdPhHVp8JCf3emzBxkYLztazMrXdVcrwvPxurAHySVgFe8jRQcc5xcej4XQg6KmKSooY",
  "key16": "S1KfnWPZd9zV4CiUZy5uxXzqPST9DSzobsUBzUYjMQBw7hAcUdp2qPNbowHjrqZ1bcDkAvVdvSkXZvVySPJQ3ur",
  "key17": "2b7SBjFSbtpQkrzeexrqCEKu57HudnTPtJusBgckvgYK7QY92Z3tshBcwRaabYHmgRbjcaeb8Hn649fU9RmhK2om",
  "key18": "2Jfsf2N9aAd7KP9jaa3U5wRMC4jznL8ZwofsHE1YPe2Es2YN5wK7ZcPeX7vt7qeGhgRwJqpw5vaB8LSanuj3QsaA",
  "key19": "5BoLV1qRVdGqgxvbRkrmFr1RB4DnNZCTkNbvC9iTpgrbv74zJnZrLnfirYug2mEo1qKxks4tT2vR6xTsCBuVFY68",
  "key20": "5XzBMrqMV6LaKHYYK7yANPrKgR9DMKVXQDNd61BeiR5DtT1NT6fxZjf7uEx9NwSsQtrGMVhG2X5hMHBa31nPhEzd",
  "key21": "2T2Q5UgEFPxEa7cAmnPvGtQChmPE4c3Q96H5WHzyoQwfTCuH8yc5CeVrKn9FXwnh8ujyBxCHJM148witHNdUTutM",
  "key22": "ZCfpBf3TC7JqE4WUpnpmSjR9tWibtApcEyiwY8nmYdymd6bEvKUnr8Fbx4V2rLNQuSjLr3VnKkvgNZy3QJ2mjrJ",
  "key23": "yfamtjSkrNwChHhV6vX4yKukngYy24NupjYTNQppH7P6in8LpF4RoeeCRzZcbbXPFHT8uTdZ5xqfFafPrMPVGMQ",
  "key24": "2mc8iWUKa8EddTqhZoj4neMRHPs2ns2v5Qr1CFnjnHb2sSVi9F6VdH3eJPhuZzBWWp1yCSXBx8hQkXMzAR3oxEQN",
  "key25": "2RVUXb3oxciJPaPfu9PgZoGXeNZu7UD2uXRX4gYTymJDQU6ran7ZMig73PnveyBZobmufinzHq7W6NhNR9dAJ1qm",
  "key26": "ysrfRDnBeFMMDSTumpXxgDnRbvyrmanUeCzjVArqmofCobjBGk3KG9sb8XuP7k7MTUYPq2HwS9qxhCohHHocLQc",
  "key27": "YoF3KchEHjAxPT78GFYoR9fsUWn45fa2tE3YF8mRd543sCC84eVLDVxsygXf2SLD5EpC3CbMmBcSzRBmcAbQW4X",
  "key28": "37928Cm5VnFnE1DVqbBULD5Wv8SNSakPauDWwsMNZpu8nm4DEbwkasEqRwhmWwc612d1CyyBSdpZHKcKv617Xjyf"
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
