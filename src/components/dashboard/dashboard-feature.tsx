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
    "kTnWiH61PAjGU4Rvnadtb4UF3bkUCQTBS65jckEsAQUjxC5Ca8ooyueFoC8sjo4Sxdr9CWmgtTG4892yZFvSkWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QQmgfm6yZzK62bMYBHHFxkCbKd6tNCrHZieMEoxQUrV9YuqCHPwYQBcsvcT7N5UVsMgo41wLJ8hQRz1TA5wbaj",
  "key1": "3FYAmapUd7kZHiysm42zYjSLprJHRWAZRCuphnP4QjPsUFgkLxr4ZgUGUvRXwRJBE2V5ZyNjSgK5hPm2j1ZP9in4",
  "key2": "4ZquPFCraNnPhrYhNL3U9oNWjQFi7psetAtchcC1Y4BVNjdozoqLedViLG6KCUgiQZhf683GtFxZE4jmGcrwEfTM",
  "key3": "2dKgf2jUcbTWmKajnWM4H2NumfYCYBSUqWZWYu2Sa9tiEQrcYZb1GuPi7mfbC7LBAXNstytFYWhzFHbECxsA6asx",
  "key4": "2rasQGFfLa8oSsVH4zgUbc2pLBu7Q2xVHZcrETaZyF5Qn5ShKjtMzgPcjc2E8s1UnW6n3BomEvyy3cwrwEpod3vn",
  "key5": "2oM3kivv3Pg2RCzpVaLpiZQANJADyzEqX9ksnAZChgjqiw1RdbDwo673cSfzVwfnCMC549qbWdTa1X2sPQfBRaHQ",
  "key6": "2kMsJRLTBuBxANSK5eLeu7tJEE2YgVwLT1YkmQEgLY8wyuDbtWUsyVQn9SeKNpqe8yp6yvS7n2A3WX3r6JrP7eGV",
  "key7": "35sHcVU71ayQj2Xzj1DNpAMR9oSgQi8Ns8NCyz1xvub2Xp7U7mdxqn117Vp2dJ1hBn9XjikBjwdXsJ4jLVmKucQw",
  "key8": "2XGu34PNds1ExSjkEWTUYLqtZYxCjjdc22wm3v3KqyrTLx61cWNHg9twaKo1aCZnUtUg93JPkTDfWEy797FGGy1D",
  "key9": "MBjMCZcEJxNFQGFkPiMrsiicEEyi5cBNYBj7sa9UTfgyZcgEuL7RNZog92CQyyAr5SFvxcVWx6GM4bkNkyaLV5p",
  "key10": "5PrvCB3rBHDLiTmzqanj5pqavFGUkB3cM7aZV2XHbNpKkUqg5vW1TrYQzBbdsq7GzR8gP9RiYVTRTJ9qbUtPMSXx",
  "key11": "HXmYzkdXe6KwAcd1viPBiYgoZxdBhptnmxbR71ZMS9AsWhFx25zgAsjwdcRsokWuqq8r6QhFM5DViCRrTG6qCoh",
  "key12": "4uUbJZ35psaLE9PicErU8o63YVFXmnqjrQfTYiwyEZNK5SZhqtUmaVGeB1jWuTUDrrKySQ11harWLpbjiwsWY9Bt",
  "key13": "65VazhLgNr6RD3xXhEpb239auSGgm5oyAfd5DgtJHfBpeVBFQwjjNboVh1Nud3tLcsUXts8RtCUxs6aeHxh3ZAG8",
  "key14": "2YFDFx5Bc9gj282nzL2RiBCEK8R39T6a7Cmq3AVg1bHHU4bdYwawh9LtCbYbvogoMCDvvzeRGN647sDAuS9tnyTA",
  "key15": "dYBPdJRhdZb7vW5vuNAzWdFr8wkhNr3hdqfHy9UFkML13XfEQGHAKke1vXihEShesoRezqVwetmYd1YjiALToto",
  "key16": "4LXCRmFEFeLdrpgayeu2zmKKtmrxG7awASMpzEiwBWr8ZdmBS86iZR28ur5tFok4qqRbFiqU3MEWgtFm1sxyXsT4",
  "key17": "5ApqVnaebEVvZb2rKByeRUX7JQg3bJ6aVzYb3GDcqH7AdYEn94kH9hjFhD4VXT89VvrhQYCecmdx9p1aiYwpWK8n",
  "key18": "5F5gt1re5oxGnhqP4kZVrZ2aJv2zdQHFNVBT8LAixKFgqN2zE8A5kRW1Rss4nso2zpG1SCXTjqXShBWZAxNRwM25",
  "key19": "5KmhWyKWeQHc5nqYV6arfmwAZM6tVmPakDaABjHPmffjdyiL8cz8sqLhiYyAvp9Em4SLndAY88FGjotdX6Ga1Ujn",
  "key20": "2cTmi4v9NptAmdnmWUDQ8QbCoqv4v1zVt1RFnjhEriZPLZpdmeAgq9nQR8AiiUgmcuTYA3aeVRQZMfAhXGkLiuRp",
  "key21": "2kDHQ4TkN85AWK5Yj7kzSsxSAGxhn6q2vu7DxPQGmjShWNBv622TEAbJQYceWUGERSyih9HYxWzPm2BCeXq5xY8d",
  "key22": "55ieJCirZmWk2E9HK5f9hv3aBERw39vCcriTkgu7jKG6qiXZJRoQKgbt5gF4q7JQPqQ6yDXxVfMUtSoK884x8Qf8",
  "key23": "3sp7vunKpzxA6YDr7KXFtXhamg3ECjryKNJxBciYSTNtCXh9hC7SKpbVNTpvBWnrMg7V7WCnCrxZmCs2M9FaMUDS",
  "key24": "3TXM9PGDy1rJiYyv7TwdVz8ebjw4CBhwku6UR4yGpxbNEZAxjuxA2wmu12LbQmput9hCox7v9xZ9bYLUYUVxjory",
  "key25": "2PSvexHQwQQKH5YyG5HDtchzvKw9Q9npWaoHhCKJ6TdmT3gSFAvsJ3TGG122AyiLcDe9RwCPEWrRMyjqFFqqwSte",
  "key26": "5nXYUqQbkESaNz7ZoxZw7uXWPXkXes7BJ8CzTAjaLixu97ZpFJX82Lr3CRcaZkFud4fh4g1PP9CFsprigTGXuzuY",
  "key27": "2W374baZwwFwJoFmAYxoEoSd1Vn7Gx8pSB2FjaeiRDsdntSuXvBByqhYwc5fwfXXxezEF9M1h4jQCLk2sG2hHaqF",
  "key28": "4zTcdbbVfHcATycmi8arRKdHLEu4cG38i2fQs3ThrB5i8f3eASu4i71kd9n1PTZudBW1fmAGY6UpzSPyJisqaoLK",
  "key29": "3NytvT7gENKxjnGN5opoqBgtndKvyp7Y4mZzAZxA7nJUEx8Ra9VuRaLd567HfiQKi2Z2egoPpsF1eWeNzEAvEdqC",
  "key30": "KTEsfuvcbmkhpp2ZiP4DgxYjG5ewWe7uHVaBP9Q8dcTqUm2iNhhBy2qADmSUkbQrhp3nKEqE3JPP1AHBHbcSWuo",
  "key31": "2jLdkXpv54BKGc3dZvrLBSAjaubVVeZCqMFiwSfBXBcYJroiUgjBgYSjBD8F6CEsQ8PheQ5evFj4WSYxr7MCbANK",
  "key32": "4huGkXWVAjxDv9fgw8e68VwpMMdnXDFvcyuGqwSJB2URzSr8zimnsMiLwJJ6MM8VvcR8NXjanFMDZBujy7Hpcq1x",
  "key33": "2i6LxwtuiJPPYyVFVZ5foiueUuKYhd3KGVYSTCM87i6vThundzS4FvPoBqYGCAZRAtAAkSoz3ZsgWSgwJrwQq4tn",
  "key34": "qjyPnRe2vPGAoeukBLPnvwQiiyEMEBfXBivsvYe3pL23azxwkV64s8C31t5izBmaUfLmsWrscTJHypTE5qaSycm"
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
