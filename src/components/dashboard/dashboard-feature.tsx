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
    "3NL2KbWUYJktu6ToCqwdE1fjesLmXZPaEJiyS6pGFfZD1jhTg5BE1kJSih8ajiWDDjZnzXW2iqxDat4DHUrEW5Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PdWtLQq4PC3YQK25C4u5xosqmMzeyf8VaXYywMNUQaEGRsbxzK4kooHvYRWZva7vPqwgkKnbxnzL3bFmTjLYy5",
  "key1": "24PXzF71FBCFixSUaznv1HDvkoRdcV5XajyWhXUrdtpRxKNMuGXcqAY7bUkqBeqjpyCY8FpkbMWV4qzbGTBfwLVn",
  "key2": "28zfkf6xPGwcpdFska7axUdeKaYq8uxp4vRXRYqVw8MyYqxFKQ9XHPSzkvJpqM48UEK85hEXUF2xRtpQucGxKiym",
  "key3": "TDZDTansV1E5eyoG7LiYLmkciSuMJ7Gb56t7NysEDwN7RLLTFeJLGdSMFkQHQ4npGNQy6wz8sux9VxWrJBnV8Ah",
  "key4": "5B6g7hyk6rweHPpgo2MPGAmJDbvaTF55BcXzdEaZWRQVgXgD4MnDn6zYHnuaC1vZcBpU4NzRthMMWVFj1mfKo6c1",
  "key5": "4PDbrXKVJrDBx5wCkXoyvoj2uGfwWAvhzPZHuMygaAyzRDMBAmE5gj6YNbdq9at2p1i3nvKsN6baebbFsMM7ViL6",
  "key6": "4sPorEce654uYhetRvA6XVAntN38XXgfk6BpQFzuDvGNf9QYyv5LBVtsdM4Kddr8kcLLtr6AJCsbnusEee7fVqv5",
  "key7": "4nfEYYTxMLRiVT4tdKVRN2c8xoDnmCoir3nj2Azc76zU2S8oyhkSfzGJ4XcNAq5Api3TGmP4xZwQYsZL6A9RjGrR",
  "key8": "3pFmcapzcxnEac5zwmuKRz5xkmDLqXDn2mbsYwBPZDAvetXxoZsSChshEtFWYq3Yn63ks57dbtUwfSXvtyo9L4z5",
  "key9": "WhuuZxTefWXyU3FBznFXftktteUCAkMzA6H2AMQLQArhBbujoujJymvqwwF7VndLjow7y8ink6BEc7eADtd9max",
  "key10": "3pJdRJygiXdmDt9AHd3cr6SEnV1c8Vn9ENPMEe9N7gfzxk8Wjz4f7svUmaewUr2CY5RAd4NJUBhYBUfxbpkvZ3Tg",
  "key11": "4nwfhEuXi5rJgwFLvAskXjyQztpYZaENygh8jU2uiZqTeEj2qLvz785QdStacdegCjib8Zj7EnNQeyoZ4Dz6W4i6",
  "key12": "m8VsGW7rC5WjMJfgQJtWtN5MHHmDvNPzvFRHSaWxZ6n5BAxa6KeBr5dHU8DzSLSAGUbnJRSDbh6Wugv6zt2po7L",
  "key13": "42vsbHxnuK6MQVq54kemfTJR2E8upSF4CpUGuWg88ftX954K9xRASi4RbvT7Jjkna4FHAh4wt7ch3TCFKM7YSvQY",
  "key14": "bjsokWgudMvezz8F8vHmw3M2S8Tw1azjNSkYM2iZFW7u9rzcNHKXnbBVerU3pwywfYWxaNeN2oDQC2NmqHawoSF",
  "key15": "2VqN4NnjPuMSusi7QcZuSkGiSA8kYc7Bw6xep6qhmJYLa5fA4K2HVUU7UCZHPZY2KpGBkitWu2Phdi3e4R9YSpTV",
  "key16": "mfapq85ZQmJyW31cZc6yHueixduTX3RyStrfPFPySkzXEnpyem7ai4XxYRGKNDD8PVo5arjSMpLGLXNSucbpx5Y",
  "key17": "4nnboMrsyzMj4c5A3Jd5caHbDqcb6nYMbW4A3sSQktHPSuDbN7da7cFR7DWH5BYgQquVEf3rxfMRvhb2VRjHxn67",
  "key18": "362Tay8Bps2mUmyuaeBh3xeoX1kF5QXf4qjV9EERY5SBmCH1WYgp6E1sK32PvwLAKtDr4hdzHMfLpsT2zAGPUx74",
  "key19": "G3gmAKUNAJV2MtBTgVJth2N9ikyEbB4GV4LmLFpDYAzdjk7RE3GJsV2DezM8TGU6gP7DPtxcaNheW8dmUGKWfRM",
  "key20": "5aWQfRJSurQkRNKe4PMPAuqb9Mk9ZarDN1guJTpnDpGjAHBF6DMEhYaQTmpuZoCtmDbzN5Cp3t8XdambsC3d7LAA",
  "key21": "2F9Js4r9vN2kwUBz89ssurbYLgZXkoC15NxAH8gT2PiJAqfDSswSzVRZ1xukcuC744knMioM4MvjakurJb7k9jbf",
  "key22": "2EM6W3Yj2kHoApYo9c4YQfQaTjAKF1irjpeHk5DNF3EQWssDLRfxt4VF2N9ouf197L2t9BSnM7dfXwgDBqqpeWPP",
  "key23": "48CYH3EJKVXjEC6VXDeLfDbvRqG6n2Tztd9gvCrN4g6cHYkTsh2ST28AVLRj5hXG5JZr2PYwKExuLfMkeXmDy5eC",
  "key24": "44TnvRZKNSpWHUiz8xcHXkQbUoHyNiWTyntYEyXczvZB6Lj2eMnnDnZdutYFyR7EUWgbySxHAACUqmqf7LzcAMSd",
  "key25": "37JP4boBdwPBydZYsb4GYCqJS2ZSVwjfZvXm5ozrnqarpXJq4rUQyiMo5CYWvSkfw7jNhhnMXKvLiLgHPNQDDyRa"
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
