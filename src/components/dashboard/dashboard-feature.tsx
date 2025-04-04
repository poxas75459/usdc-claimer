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
    "g6TKKUkn5b1fjJXpmQ5HDqmW1iNwy8EvHATkhTfKezzTiRcKo5s878sQsszQc9vxKFudGJVeHfRq9gWMUchRdRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBYWtRpJzPs4yccjaa1fZ6J3Fa5vREBrGumMztEizV5n7tSxHzkGjMp4C1PB4uGdXPfGPdDUCmMD4Yj3x9Qq12E",
  "key1": "5yYX9oZW254rZ7Nwtmp4UbN9RssSfXwNFooKapqE7EsjBDN22W3rosS6NzKbvzfLWb5ZYuLaUSgHd4WaNb49vQsQ",
  "key2": "5guvmm5cdwfp2PQ6qF5ik7W5yxN5Q8hmHoDpSpRHUrRFCLCSPPuCkob8Kcqb9b5Zugt95Be7fXU9SqHcw94ChWm1",
  "key3": "3Ajd9XxSobFyVBoDyguCyphuduemR7fXncWRADw87UniWyFFU6kjrjCZUDPxfQTpkugTgHqDRqpTUwGBGxg4iqy7",
  "key4": "SRRygo9zgtwuJpVuzdj3cvKCcLYysVJD3JTLCxeYL2eJ69XEgCX1HjWyqVc2wSsAMYGbzkjsYjFCP9zcJd4Cgch",
  "key5": "2j6qNZdcAByCnyg3syMR8boAgonhmFXo3uAmg52378gdH3botvMWDBoWPRMCMyCAjVgKDoZUAupVG7PjNsuB7w2k",
  "key6": "36VmKBn8ovpXvSzuorT7YVWz6jnAdmV9tEzB4KGnA2WQkXHBV2m5ghvdBnBogtZekNysEAckDDYiZSAHshi78QJm",
  "key7": "3fR9BkHxjwsACZGZkyKiaxSXDSrTSF2ynz7Cme5NrcqtbPofNVSPwMqBs8ETHuF69PXGJMggZgrjVmjwg6jM5Zb6",
  "key8": "4zvsUynYgZpKrCbM8C4mEoJSaHJGda5G6xSecjxprSTjeEMgo2yLVk9Yv88TUnWvASL8w44Q7Yr5wi8Kne6HhmyL",
  "key9": "5kfwmeXCCc59ccNB4LgqQZQk4Jtp7w4stARD7pbsRx4uNQSVe8EdVXmqXr42EieMXBWPDYWWpMFeuX6U8XVa3nEm",
  "key10": "46s39Xm9qSWdsn6g7WeCVxa9bCjJihrWdwGLbEqNjytSZhyk52KNTsf5SgQPgBYaip8cWS8W27dv9wkrbJjQjpSL",
  "key11": "3Wg9w6mcLZU1fwkkY4bFheHTvFjLRb2y7tAZ7uy6GZUgpcKDTJgogapCU5cU8B3enhYR4VWvhSnsUJA5xxB6axrH",
  "key12": "WmdArHUY2CPj6j4JNhWAhE89gVptNmKDSeXXBmuTTkLKUvejdZ8iV2pywbhmwSE3iyLszFo1AhgKyvGP6ijbbf9",
  "key13": "3dnY8Z6ZPo3Tqa4Gavv5jSuWdf2fiSiJe8iWW9MExf2hrvdXnHjc45DBRkyNgSfEmSYEZgdmth1jUdTjEcYUB2pB",
  "key14": "2mGPVK5vLm29Gt3Rc8nPKC2nqTMh3VbMroK7PzceaKiCecbwa82zmRJVqq5Nkj88HEcACJNesnbvXSv372aVMgV4",
  "key15": "4VMkNQTHMZgx4fC4eNqp4PkhkZfv4tAdE8yabxWsva4gk8XwycUZuZqm7YUNdWXTA9Ni1TZJJNN1NY6xt8miQqtw",
  "key16": "2m5wNyKU4U7qLs7h3yUqc65KUZbrUbyuuKKUpPk9xFWKxbFVPC33aYr7q7PARDY156E8oVvmhU3CU8s3hvHafHeK",
  "key17": "4fmfZJ1AbXbhZ4pA5VWeBsvYn1t2bqAbsxc2QcgibYTq9jkx6kNBGGCkNSLXu5qBo5rMZWaM3kkLh354CQoLjJ1n",
  "key18": "4wMVYZDpfD95xE6GtySWQYuTDDxmm4njQuJVfAGCTCYd7tgWVHdrkYoqV2RmbqktPDQcSZoEWkjJDp3Nw6YqqpwK",
  "key19": "tsyfs21opm9fes3RdmE8kZu9KRBbTLjbiD4PE11hKPfZo7YkdquhKFgbd79CXp1BVGhERjz5mwqdJviUYeCk7of",
  "key20": "4Q65i1ZmbmRMfXrLScDe8HJdu3U6YwQ2U8pxgEgfWohVphLenJwCDJ1caTZNGda1HLHZfCLBpbVmhgRoY72a7RnM",
  "key21": "3FgeLcFWjT8M4ZxAr8SRUWbsGg6PduhfesBifhfAVZCdaREC7VHfV5atDRmV19VBWD8gY88ufiFuny3kHr1vcQB4",
  "key22": "4DS8uh8ix5VNgwNgZSCmLMfkDTYS42JqMRD9RNW9EJWAgfpMqDHSPrL6UNWRhLVdr64cFZ4nJGBuTstutF3HYVHy",
  "key23": "63iJR7EGveQfhCKgge7bn4BpmbS821WgxN41B47XMha45hUXjfzuZVfqxDXbenHgTJcy6LWLzUi1vDm79JwYMRmc",
  "key24": "3KBZLG7HmrscCQkRLBNEaf7EYDePhMekek2E7cwVx6ggQ7As5AxPGNbune3YKFNN2CVV65Ej3Zgf8zty3h1gfBa3",
  "key25": "3HwY9j5Wsak3DjdnHroj5Xdw1pCvnrnGute8HeLtBeRBRAtidhw3ABGWwpYsx6kUk6USiEKTr8EDgVKrN67THmSu",
  "key26": "57yw1CFJw1YfJ5Cd4wFKDokSQRNesm4rca594L6mZ8YXBhEnnwCpJWwA4YeCkv2QhFLbsLtgExf6N87nzw8utJs9",
  "key27": "3ry39BnzGyvx2gjRT37f1Dc86JyCZJiiAPCKHn1zujuQJhK1zLP27oAchyMJgLCuQKe2rxW4WCvEu4VwqN1YWEUK",
  "key28": "3YunsXidjmM1jujxxyZKtAfgeWPG3QqkvzuvxRB6X38mS65hhL41k6XyX1KiVw7KDKDGgXnEgoTDF19JomCbTo6y",
  "key29": "4FxrjpWhEkfGS1iWGt346XaYTPYpxp7bSXZrbsx4sdRgxEt2AwqhBXgJLhf6fhJKSHiEsoQeTKz2Qptdvjz8raNr"
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
