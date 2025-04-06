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
    "2VpQDgXSGkzMMD3PxA9f5GmPsrtxPtrNA9pveG2RYRSqYwoJjYzScuTm91ANdTVKZ4SdFDVXxoq6zsSP6rB7kyzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmXeYvKU4FZ5JdZcvMX6m5Rt9UgeZVfGd9a8RGZnNyALpj47sEup5ZynVuqwnxmMt1Vz24yjmDbc72QuBRTFvt3",
  "key1": "2MgbNXZ2P8CDiYb5peYVCigwPxyC2rvH75XUNZ3zgxAKmYuwYcvkbcpnriiy9q5sugd44qSK4kVZij5vqgd1KZf7",
  "key2": "PVe4M4JoKF3QyJQ8hy87zDogXKkLGggyc9qL3W3jFXQWBkQzfLr8ZVZnrAqnRW2DRtiycr42r4xj9LPQm4KMXz8",
  "key3": "24YNWxmHAYvptxBNoC5m8F6CZzk8Qz6DdJLaqibEzqCm9u8ZRueLGmDA9NSHqVbczctQEKtJDpPGD2nqCfidFzBz",
  "key4": "4u17ggiSSaZiyFG7HBHUbfFLETVWmaRnEJD32FykHCqRhea85mKAPRoyYqhNf3z5YdHab8oAvCV5d3SzG5L3TvTr",
  "key5": "3FGNVeenwoTzx6SZcsGfWXGX6AK5JdykqVNLudMJK6wGcm56YxJQMNq2TuVtSLNwiqGZuJuA9kHM42PzBw9e8vnk",
  "key6": "7cwSmqbi8tPvWrVsyk1tBK4jzARYz4k9x2doFF6W3ttJodx4GxbaUYpENUTU3ibCPqd2TLY8QLQsW6PAU8SSs7D",
  "key7": "2JMxmpZzrq2BQg8ME5PebxREf287yh9BzN8RNkko68pcYBQFW8zESMdvNYd6RJfoEZYXJ6YUKErt8ycBQ8RV7MsM",
  "key8": "3g7LrBhgwRG5JYsYNZaoaxzMjyaiP6ZV2qCogXreY1JpLnFarMe2PAL22fRg9kK2eS2EQ2AuLGHwBk1DyX4P1a4f",
  "key9": "28P9C9oGhpbHkgbHKjDZ1h2fpW5gjGfwQ5GvVrz31pmV5QB5LZJAPM6fHSfLSQFa3ZuZwMzq46q4K6484v6zE384",
  "key10": "3xP6Y8aQV8AJnJ6td5noaNXHm4LdT2ihwdcrRn8DE3dj28cpXm7H7g2vuqMojix3Lam3prhXRVqz6HaETzrW6AVQ",
  "key11": "5AjVF3XBUY5UiQXcfEo46D3TY8DGvGVjRDFzMM14bNVVqGTFv8Kf68fGEQg7iS7C7JJN6HEth96xtKwsFkN8kooB",
  "key12": "5DPSf2tVvMVuS6AFnMpKRDj9s6xfcwEAtARorZtmwkj346QZM5XCpyXzHSBbtEPf1H3EyrmAExmhdmcbbZBMvGWH",
  "key13": "3Hv8n76d1S2TtewuLECskLRmQGiVqAH3MbdsQNjApgNLnjn6qD1vLg3cVFasfbRwXpX9gMF8Re7bRvo6qN3S5oPQ",
  "key14": "67adc8hkya35T1GrN3Ji8ndM9tYcKQZ7cNVfupCyCU6WAFdG2QDRKnK976QT3pK2sTLBzQWbJTR8JhDsBMxRyiDk",
  "key15": "4J4ws9Ab2ZsBQuqiN2JfduVYRo5GoauMtSAoEfAfJcGdFj77Vv2QiXfE49A2TScwbmAL33t4HK8dSjY5F83sMDYz",
  "key16": "5noYbChGaERigeyqiV8bvkWJwQEGUSnwBvaPKGxdCeTnKU1JhxY8dJ92atTZhBbaqmbfQaYwwuRk3PgyggpSMooJ",
  "key17": "31JjQjU8Z8QgGnwRnfHTT5KqQ1XyzXMLcsDHdZPDhj7xFWM3Uju9chffrvoHn9HUgtAgeDvSBGBVAzCzc2hKGswH",
  "key18": "3nZkgUpZDqoNv18o9PNnjKA33Vg7XVUSdRELnbWkkRXrtPq6DnEBVJV25jJ1DXmhBbwHTAh2ZGHP8fcXPvo8c2uq",
  "key19": "2mFpSHUWui7qp1YR6wxxrkS4S43avbroACK1me73HtkAh6MRVNs4oyjzKVYVVGCUcsGSq61tqqfPEd1wXJJdCdgN",
  "key20": "BB8EybKJL5LsPjVPEgHPdbFuTh7uGHgXFi84f59dweu4tLjp2v3rnbTrMAzH6GVK56G4unBfsmhWZVqZUSAE92L",
  "key21": "5En8jgvW6vxvHoHTbNtESsufDeuNvvej54Xkbz1WC4u8BC4dDPKBv7hs8eGruDP52B9B7tyKPqpabzo8Jajyi6yd",
  "key22": "4RvtbWfZEM2EDjm9QvZeBUxjannN9cRjfVZHWVWmgQzZASdyoXNbDMHcqWk5NKQ1dpwqBLwxoap8UVUacNX3djqS",
  "key23": "5bmsCjDTG3NpjuUqvdb6rhmKfCRVR9up6kYqD3vFwwpqjYaenBnXXRDp5uuzdiGJj7P15v3CVBaumUaQVWLEgxDy",
  "key24": "3vzYsEy9ETDjpcxTvZ2rhMEjuwMbmDABPRTfEppc9Q548vPwzFHckXsHa9DsFN3hornbrimsqNyBKGxccicd9R3L",
  "key25": "4yQ4ToYAeCNF4nxK28vzUJYfKrJQ69kYwTYfNN3VkztZoeQSQxjdSdmeBTAbi5g9vfVUFPt3CJv7GANVah18CrdR",
  "key26": "3diXwY8pMfRbD5r2Ge7SzZ3eYGjezFNVH7hQBWJeZvGRhGvpxJzfmobqB2zm47LyfyTyjGQtYGNGDfhcBcJRuNpP",
  "key27": "2zRAxcVqZ1f3G69BhkRvCU1NV3QvfSHjNEDbvnyUs5csVMLSVmJNKD6UaB1EcGt75ShSgsBCV5jgenWbyvY12w6h",
  "key28": "36tbJGgu33aYSEioLzmnBzrgdrLKwamYeJr2zarVnjrCQ7vAffQUE5UiyP6NYVoXzyGTUW6ZfyH36AYt14fz2XMw",
  "key29": "ezcYMq1GTndf4er2WHhYJAaxBCyavComyi59AiKwFXAjrMFWWgPjfPCeLASo1igmYk6EBwqSLUf17e988gzfVpG",
  "key30": "2WcFmSsk4jGG96rMMZX8BmeyiC4MRinZUTaatBp6SEsctZWqtzEg6woTC2oM2E7qv3nDboCRUbm2BJa392n37Mwe",
  "key31": "5kL5cxA7nvs79mnhba38DEgvzfCwFY37tcJUKaTcLURyZScLfeFK67UaMLZ5E4o294GXe2DHV8vbPCq82anxoaEF",
  "key32": "5nXThcXnnJCkPTYteeVo3wevjWy1CdfDh8uptJdV5TVbE6Qb1Jx6TK5naWcC8qxQd5U4TjMYrjxAmuYFBAYMqxaa",
  "key33": "5LmFk84aAoGWxpziwA8wd6PpSW9hxLH4y3cFJuWC1gwuvhdZEMrDVin57LjEdVHQDVdjjXxYEQdnEbAdYSFFs9UY",
  "key34": "4NnS5KF1LUtHpbRsGaHqh1tneYLrarhkgurPanCahuMcZhR6EHiByVXxKiuPPwQCHTtZ1C8JYcnFGRb57WWJsuKx",
  "key35": "4rx5prTzEY9DRGdfoRj9itrw8gCVx4FogSoV9sNcjS2sfECEjVZWEiWXt5TZ4x5FJTBD4KWrj5VP8asta5TXKQUe",
  "key36": "4N915L71w9PgUjUctMrcv2Se8YtXHGsuN7BpMoTxPAxpRh3jTErA8jPSRWz3LvYxYCCEKjY96kcyjyvYCLgDxVx",
  "key37": "tWD1CE7fMqZbmgvdpxrC42rBxCp4om7JFdXUzyhnFjhvsAdCMmqJWKHKDdso8Zv1mZTNYMWfZKPHQpwHvE7zrFK",
  "key38": "2TzwK6QqtCJSRSUZiWRFLSNhnaddsHVMJ3zQRcDXopQq5hzEeXYGpJ4ngxSuKeF2WxCVPBqnozhXZ8HhQVSLhGTh"
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
