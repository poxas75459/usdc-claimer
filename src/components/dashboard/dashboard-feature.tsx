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
    "SSK9gGQe14viSJTm59LzQLqyH31X6h98MevXMTzULXHiLfeDAM273H5CtoQrSKWRn9W56ZTiVeS4A4ssw9fCh4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SL9diKPLRTsfC7w1XhvyiJzuz2T5zWZsoA6kcSxTZ44XgJirupav4oFB18YMQYhx1hgzWE7Ea34LjL4yQ7G3skp",
  "key1": "5HiWQRc1qFmez7F71Q7NhmR48w9NCYMDRMNBfa9cg4y4KRpnWQcq6AkUfzZyUtxXUH7Lq15dujUdh7gQuWMcMsx3",
  "key2": "4ziFsY7SHLuSPwCp73HQg8NAG9mrR8E4hZeeQvCS6GKKpUph7qLDETT1uiTTjbEMbaFCgxmtBAC1V4Zb5qccwNF5",
  "key3": "58wuqn7pgVFzczhwojVL1HTysN1qaf6xAEHKV1s45DiQ3Nr1HfE51dqarnSE4DEtAhpo3CVcHM1RzVPV9T2P4S4Y",
  "key4": "3nbtsfdKbjp4S7669u6sBHRENdFqd6ZKymZtfAHCZ2fGpKeWDyn6GXtcX3jByj6LqBBYzrisQVZmNgPjJwteA6h4",
  "key5": "3HLBbLBeokSqi1CnW6d3gCwg6svu34ah2prUsGuFCh23jDB7xzeTGpc4hZxaxk8ezHU9dCMx4uMt9Tgbw7Jxokbn",
  "key6": "5wumR1Pj9qCFxFnqnaoYgrgvG3KgBGjccG8jSLipkzSbQyTiBVrp7VWdKo1pBauWt3JbRGe7QR8aDYCYr8X7Jy61",
  "key7": "57KXHvDw5FNL1uUARkiP2Hwa4wpLMkTMr2t8WNgQgnRwu2QMSx6sYESzov4A2W9owuYTGxYksndrdcEbgmJvw2Uz",
  "key8": "3mR78ar3yEFhtz5qhkWJ94JbDitjWZ1RYGody4LP8mX2vYWUzpg26wpTyQiK3FMrouA3hDM2sasjTx1YPvkM8i65",
  "key9": "2gJ2S9iZdsDzbFLH58t4Wqan6JsTbzBMcXe1HrrR2AYUJwf8aaYe7SiTB539epCEdEvm75keW2yZJe5Xc2JKMugt",
  "key10": "2Zqg3wp1Uwc3KxyT8tjgQq6kRWQvQQz82JjMQuCVRxVRt7pHLWeadtr8chuLX3LaYwHG6x9TRebnSsXA942iZrDG",
  "key11": "4v8RF3FGBwEHTY3F8Ba3ncvSrFefGtA2bg9mP3RmBP4ir6rdAWDAgcdfuDiYPXANKCzBAqHHQvLo9hfXLvFQiobq",
  "key12": "3K52fxjjVS62SkXRTwpFizusfFgvEJmYXaASjpTy67CJkHWrW8Vvqa3yXrDHF95RPyPX6ehcqTZ2PjGCkNkoAKyx",
  "key13": "4YyNQ3nLnqWUg5zMPdsuQkjjNeV8GdyT8V2P8qmMCPgT6ZPHHVV911pusJqH2r5JKqgnyEiLA2mKBtyKuJmdyNtt",
  "key14": "28QtotNJkrepcgjghmy2ho1KxU8haU1RW6q2fH3sckFoFw8QqLbdYZwa8vBNqCrWSyGjTvUox5SQY1snuzK5EqCj",
  "key15": "5BAjwcWZaGayJ14xdgUPAEp87KV9TpZgPN4MAQGUq2dQaQKG34pBbeLCjf9F3sVJDMZaFbcVXADAG8bwoWjuh5Tw",
  "key16": "4t4gBXE3aiFAyUkCK7q9T1XE6YyzkcaJHe8ZWBngRtq9KAgH5ihctYbK5wL31QWgSUsZjKDpo8dp8QbyvCLFkV92",
  "key17": "5R2pDDjg8mxH4YPiTBgjytFeqjr4cRa5tQaWpdojxwNxa7DjKsWaHpVuKAPnLPi6SjMPqy9Ht9ukC9A8ZpQj8X5F",
  "key18": "3SJYMwgpCDYomXATvjWafuNC82qA66zeCSVDq95rAcVgwfAXzRtd1Fmz3Rzx9kmw5et7BvNwnRCz762XQj8gCxT7",
  "key19": "4oqN6H3wisXBn9zRdr8aVySE7FYUNk3Tb3XayZAgp98H3b6FAScYqeenfmtWy3EW4FbtWxSpzH3PQfLcCQ3cmfnt",
  "key20": "5XZKEJ2ETPL6SFdXUqRZMAiEd7Kj49gmDev1t28M2hPEQh853JC6eNUjCvMpayzJFT853ZBSUmmXzf1FNZRwqK4S",
  "key21": "345XEEbsAPW72cjUENo2qgqf76iHvnpTY9p5nDRE8D7uULd2SyRPsyJrngwQF6nWeqCCCzCA5itJfQ1kEqJJ4LEX",
  "key22": "5sWsfgL8ViwVyW2ELj3JjNYgwgvncwaLRiHp8pE3YH9y9VgyDrn3uYV8L71aJPHdRDryjBYJmePYrdUJxKJB3dHp",
  "key23": "3rX8uZqfX5hcff8EEXeqxHEHX1UvLRpq9qs1mifbBuSQEMGDvakwbaX9AYsHMPb18Cw78V1UNuP6cUus78ijCNqs",
  "key24": "3auaatQHxPyuHGetE7EgqE2bFpKzee88VG89cuy6GqvL18g8infyk3NTGsd7iwxY68CAFKNtxJmvrWxoYyS2WPWG",
  "key25": "5dM5BNYQkUa4osZY8XTk28bq6Pxz7R4q4jMUVn7xKKCmnLeEXgKGrpYv5DE4GiHHVRu6wBL9W9DmKnQVypykcR2F",
  "key26": "5PbcsSFvf6SNHsE9U8KqegVqRYDNnhs2LizTmvjDvrGZJviqm56vKXVDLE2zPLgUS3ZAuvVTPF5tNwR5h69hwF3Y",
  "key27": "4HCZ3ALk5aZUUt8FFtA6hbfs91aK29kEgLw6Ry5yTgghTDydW86aofK6gkaQ5vppPJAjomx6MKHPm7gxUiVt5KJf"
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
