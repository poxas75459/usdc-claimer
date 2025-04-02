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
    "2oqiYxza6LBV2WUvgtyeJwJTcd11dbJ7z3PttTLvTYNYUui7CS6QhcYLdQTrrZmemiZSXoBAyKFixuwQ5Zc4ryoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKtSae6t4howJsRD8NCF4iJh6YbgnCLLdia8FxFqz5yqcpg1wwnciQGVXkmB2gonBXfXwLeWL2U6aCWSp6iHACk",
  "key1": "3qHfqDSp1XP71AE95QermvPgzRMrDfbkE9ChKt1PSzriTtCFpEdui8PphYU5HzCq8iagjErYtv2Yo3iXg9oQJyF9",
  "key2": "3jyzoJTsio9Bq7kURFMbytoof4CaSxPFSVePMhUJVkx5Kzwx6sFsTpR2zpNiW2aby14PGBx4ESqfy8DLa517pnUW",
  "key3": "5MudKcV3kXXu669hHHkEXAdUD6M9CSedFMXcVmVVeHbbQ4DXMkpMotPwxNGJ91AA89z6rNSTzNrC5ikiFHfMPKKb",
  "key4": "2WG6MqR7m76unRWAqJMZfasyjYMAVdQVuqUsmdZXhzR6mpdGPGUGx6yAXiRf4gmvgxuaiu8a3bTbW5XJUKTHuWMn",
  "key5": "5KntUTvzJ5ks9KUY5PV8vN99a5SAbiwaNaMhMX5EbUqDAHBtAkC287G5V4wT9DbEbWnA287sAHE1H5Mmu5AH81Hr",
  "key6": "3Co1NmZki98gDUJgEx1bEN84RA9b5J9CgwZ3tfjhh5cn9JpEdBnybCGSRUjpyRuC67pMJEVJ2yEaXfFJfqd18HMH",
  "key7": "7DjG3f3dMoJsqnbSSSs6LZ5vnQZN8kH5hMng1dRogiDQDDmziCUWGfWLEE8HhKNMTQjL4UzsSzjVBHnasSVtZRL",
  "key8": "2ssabris5amxy4u128uBTfEpmmvzwUbBGLyYytjXjJ9W1ewVX6weWkQyXekUfThPiFXs76HWmFcBQyG1V4FHjwUN",
  "key9": "qdkbCzDdZTWTzYnqHrKLxbAKtrgdGJH26qPY9h4u1iJY1gmYofsvCD2r4CHdq8Y8czmwi1SovqhVLcfQivQVLvm",
  "key10": "LQUCziUD2efNRqsYHCLDoUA3pCh9YaL6qi1uJdaFdeGks1NQSPuZDxQSAyW9jg66nVE6zALuMmgVBvfGEwiEsXM",
  "key11": "4gzSGbpyZfrtvAJP54xjvRcNZppnBmCEahRcwjWnHxg8puW9y7kSzvpMvpA9v8QHxnGajHmBsVjDGgRZnq3tK5Bg",
  "key12": "2Lg69cN17Ni56xDNTed4a3XGcVoDq6upVM1Q65ERHi1HK6M5brcZyGEwf8USsgePhEHthZSxp1UbErZxC5TazTL1",
  "key13": "466AciLa3irqNpgZqEuHN5WkziMf6HUD4PEHTgHGWp3n1PBdH3f2zwmpsaDapZwX9NZcU2jaEf32N61PNw1bBDMr",
  "key14": "3MwsrtDHibriyHLms2Vy8E2h6Z5AtkzWAKwMF6DiiANKXaCtrdKD2eSXkNmSechLsyXbe8jcfKMp32TodPhWWxpg",
  "key15": "2N2LRgXhfKb4xhh5F2nh91qzdQdc4gSSiyhMFM4yp94DcL4HimqxrPftj5iA3t73nsfFVq46XVvEEyZ8rjnAVPgd",
  "key16": "39rM5SonxAdJoH2JD34wP2yazAKwu3kGfcUVc7Qzp3iPK1o9Try35YhAR6i9qhebkVtemCEsMh4RFwmgcwkxU7CB",
  "key17": "5wFbwNm4E8DYH8Z6f35zfo1yrKCYwXgjkPLFLLnf7i9GvQxLj513H4J98drMA4F2NxWxu6GY21e2WuxLqw1e5Rnp",
  "key18": "29bMccvUrB7yw1Nk6LRZTvYpJAo3LFDQqtnF2HneXP7oCMpj72yeXSGXU3RS5jdLCZRtquMdA8PnXwTD9yajApDN",
  "key19": "5jGocFYqXqH6bqg8Z595MXYFJPP383bKVEbUh7wsapRnwRqD1c4WF3Mv5actbouv3dUGisAwzNUrfZqP3fi46SC1",
  "key20": "rs3kUyjZqyFdzLWvdfoidYj1P3DxPjBqTxqWBuYR4B5aNjg7PhaqgBvLFefuPfWJu7J16fXxcTKHMVWvZMarKQH",
  "key21": "26ZLTLpdy7dG6zYctSiP1CDyGdQXEKwvUf9jNGgi97eG3g9fManzJu67y2UQQZ1VpjftC72EZDvsNShM67kGpU7j",
  "key22": "38kxieibQrEFG6ynGn8Gp9xLzXKqgEehtS7iHFWdsH4SG1n3AfsS5RpLp7x5bJMEbkYTZ83MPXzdz45stAihhKuT",
  "key23": "5T4VBz49Ct23LGJJ5RBNkMKfVJmfV2yzSmpUAhXeuARuUjEy1smistu6TiUKTmyyggyz1aJmH1J7cxZku2E2Tumv",
  "key24": "5t59VipYQApgiRBXMSHzhSq1cYcy4RNrqn3xnz4Q98ejFJeFt9SUbYt1pAiraQPVCLG5oiUYpE3dvbFSCUL4utrm",
  "key25": "hcYGuSfFJE7rr2awWpTVHdJynpzerhjcWcCcqbZvWVEuhC61yBK57kMsukpUzxQka44zAXyEFfSzYyZqEAuZoeB",
  "key26": "3FYW3ZY4TMx3TZgArPUV4fQ8DmSDm1vHzR1Z3PpPXGAVRHc9QNcFtA5adVmksZnP9YxZ2UGfZCaTXEx4rhNt8LM",
  "key27": "2AM9ASDgXJ3PsGKgZbZKZRkdMqyUu6rnFcPoLcbjdZSVqFtbGdGmiRs98aAKWDadi4yGGSsVhPpDH8cQqhitLPUd",
  "key28": "3pVDiyUaJxs29fjKw8VVxKFPCAfBPUpGsz99wdqUTzF8ed4CRCBi6PPvSLWSpyzT7qJHJZG9arcoMVaPVJLAyvbT",
  "key29": "3fxgTwYUS42WKfLKiRchpbf2eeA2tU9JJ1sgzuLaJEWrudzDFvPgwdsht853vEdKigGmK8p28UfdhxeYrHTFdMeh",
  "key30": "3pP54pwdVngPYjxtKiWJxFXpA144HxQACXzZCtduWKeTaL4p7Nt6gofAFsLpgBiCCufFKWqb82b59W2fqHa3vHjs",
  "key31": "4623dYQnniGQwLcX7hYSeMy5d3amgfWZvv1r1UGXhoK6beA6UGGG4TCGwkT8fpJY9dFy43yyyVLAmymQvKjiNGoS",
  "key32": "718iHXuFvVmCNsKnPuiJRfyT1HWWAj7eqJzVmkbncpQNHT9PtV1u1UijXywnRpNriBwcyeSudra1FSQKUpe3aRc",
  "key33": "3kkT1BJ5ibJXGna4ZucVQnnXoV4jKj92BnmrHetzHZhzYv6XPY9ZifTt7895jqwCDJPZnuocgmB2ynbdbuSRRG7J",
  "key34": "4nHYkwcFQNp3WPazxbxqjtveJfkXstBquNBYK2CuW7RyvWw4YfDYp62jJ4V28wgthdFEnrAuPjdHhTBFABmY1sMS",
  "key35": "5dt3ivuuhkLg543GXJhi6eEsPknAnLcyKDHoHG41Ka78WLL3oz63cciyMEfC6VoAFXdb5ziESzWs6W24PReFTQS6",
  "key36": "3swDe7oRugxqxLvrSRooPGMaytwoaui9mcNxanw9wkcMiiZZH3Ckihg8mAWpwKi4RpVFfQgkT7hapYCe7GfRw9QR",
  "key37": "xCw5qENNmgBxDJx8sKE4gW2uzh4GnZ23wN7YgwPgX9Xp3mmhGk4pp9CHkP1EP2q87MCBKa7icXtR7eYaffCney6",
  "key38": "4AezLqeRXruUK6DNRKVbQFGuJtie1jmzPb3kLhayxfZoaVKTQGLYDxXXFuffRDx3RtRcQYd4jj8ZNaULh44tH42S",
  "key39": "AbwY6v2Gaakk2pQdYUhD3CbftBCpUb6FYETjH1c7x7T32ynMA9BVMJ552dyfvc2mWua9JJqegHJ4RnkN6kp3dCM",
  "key40": "3MBtyEVvU6UyR9KDQrAGfgbz4N1WPdmZyGFa2mWUnewKrSSDcZt7gAHuEWMRAZj7KGMPq1ie2Ec7QKX4dMntMJU1"
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
