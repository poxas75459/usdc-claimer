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
    "ABNuSABrnhx5z6UWmgmjqJDK9ZyvBuvzT2M88Kykm1ZueJn69R2FbewQjTXZgNTYbP1wvQQQo41gqFeSkPuZPZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VGHNxtSEuozio15LT8uz1mM1oZSxKDo4gCoRENm1cpzZmdVcdLATaZe5TFverURfwVN5n2sezrwZXRvGPMtp6Ka",
  "key1": "2Ut5p1ibVb9DdJgSPGsBsZWH37xTgxZKPrEUoyBr6cXybs46zfDHZimQZz4iEEkk1naWBLx5HbAkTD36a6kcG5Xm",
  "key2": "2cyD5mNwhcUbTKGzAXT8YWcqdjLr8vhRCgq3pDK3VAZN9WHCXJg35hY9iqJ1F35C9EFPrxku1HabdkyPBBTeE14T",
  "key3": "44umWxdyZD737UJUb6vqhkQYufLQFPdc5XWp4c6hh348XB9sgDhz7zQ4GcVUuYiyzEm7mnnV4m7CeofnWuo9PWxw",
  "key4": "35EdT5TckpnNmB8ejg9FtN27KJphsUfK6Yw8p918p9GdyEp146K5cvjfMeMaaR6mx2oEeaMUXts4PN7bkSod1hDi",
  "key5": "4vkp2xiugU2hzxzBX34718FXkfhpdcXjAGb3xL9oKEbKjJQbXUNYwsEfC86XJkTRw8E1rudYhUPjVBVnZNc4Jjsm",
  "key6": "3sJAGcxLirSaBHRu8s1ve6ntguTgiudq9tcdoUicDekZZ9Zv78uPC7QMhuQMT2BFv2snEmpwd5akvCpUuYAv4bfV",
  "key7": "2WHw4iWxrx3u3yhdtZRHC8dgbuGgSTRkCknKcHKrch8N44WxKgodREQtty3U1T4GaN62fK32G45xbM8swH9Qg1hY",
  "key8": "65d2iKtUrKQAFwdQ6ThJetNSpEWZsZn693ztsnuHFYVQeHUtGM6qxcMLZSxxfkE5UYCDtK9wMHbQ9ucX5Z2PhYjG",
  "key9": "6N9UcFNXqdMShvErhTieJRUATgsfWGnPt1x12onq8sKo96AJWyvGkYVLLQDEqLCyeMAc9L3kWEWvtXgmFoYPicg",
  "key10": "3JVJbKqpE3LPEZCFEzjQR282fxCs3V1NvXRRUtT7L97dnodswACxDnfPLJVmDQAhpGxd5BGJSvNp4Zw7jzRnf4io",
  "key11": "4AXb75jonwJQTVue77TqtC9qFyr7yFvGVoeJiFGX6B2Hpi1qyWrZh27CHZUCvKuba7K8WPhgnWWPtS4P4vAbVgUf",
  "key12": "5HSAvQiVD3AM7pg6c6o59WJnE7LMqEu18WCXqtH91LfoVMfv5G7sDRxfpp9WPRMdudhVB2dA96BRKAMdaeuzdp1t",
  "key13": "3iQAzuZbXemxbK2Q4mSCYmAL8RtUXdoxXqNs2RviCDT2FMi6ZVg6U1H1bDuEBK9B1FXCehfczmYaiuGkcxEBZ8Gv",
  "key14": "7tq9x3v6C58uKNZY85EAeScLMkUDygjraMjGpjyFuxDWXDVhnff8ZZbVXh4PKqZuuFBs94WPHa2RzC3FCFfgaom",
  "key15": "pLjiASksQW1jX8kDNSSbJPgUzAhu3EEYFQkGAnY7o7mjnDBrWRzGAgT6bdWpv6UdqzBjxiz8xbeGcVD4pAqAQVJ",
  "key16": "2WRjNSSqb2PEaV4QSWvGZoe3iEFSkkqU8K4gQVFgTR7t2A7zDpNnxDSg88cBasfG6zAiuhyFdeiz1QBcrXYddEzf",
  "key17": "3i6PF2syPXNvrhYvQQfbBDdRWMXyvJ8p29kn4ViXNmqp3yg1DuBsubNjZcPAePLoJJiDgrcjRK8FTwWX2qqy4eJD",
  "key18": "3QwFvrFLE8EtmffAtiWw2A5oz1afw5pPpaahyqthMXFUJEBPCs7HS6q6CbEcwU8vNAzkJZ5FZrTvLUK7BrQimu5q",
  "key19": "ZJRNJiNwSpPgi7KYxNXVF2kiNozvwAjsBn94NvoBx43ifza5DGDbYm6xncwcXSpiNfbDGGLvDNBo5e6TWk6CHsB",
  "key20": "87Qw9meSgQuz598ASs2JRYtL9hPPesMvF7u4vybsZsvYm44Y8mFTADr7CAshu3id1Sd9Wa3Dtqw5TgZq8dLEpyC",
  "key21": "26PAKhvvyPNSgxJuAfdBVtxvCCWzJ3HJgkYmWkiQYi7WS741YXN8J1AebQFgsggjvbG3BNNKQ7bKE41k7z1AJpTZ",
  "key22": "evq8ACVpMd75dQ8BKHgRREW6wF8DBao7A1pUk65cvA6wAfgwojjrK8CTJvHafeV2j9feU4mLxwZsjyZoDkjB1YH",
  "key23": "kzdPGc1ZhgpdfyUciMvNCXR4sfSvMyJitK7y9ejE5sxdyoSU1AbVM6ZnioSvXb49RFKzwjVDYcgmUbobMkbTVmA",
  "key24": "3UK4TZuBnjNEDysuNVhqxvXj2cTHcw6ZeJ6WmoqwipfToac2seWG6rvs5ppSbbM4b1bS8D4omXhkuJiHXo2Prd4L",
  "key25": "3oKXVVVPT9MX64wSrYHdKKzLJ9NNpmZXMbrqKkFi9gCtGEyXTF5igdqx5fa9zwPt2CxQ6WN6Xz6VroQi95cNugje",
  "key26": "4YyvykWJHCLCGyCDMt2z5J5NFLQDcmiZTa45PspyhdsAanhBSpUYKT643w9SbPzQUB4myGtaUaBB8j4kfw4oqP3L",
  "key27": "2rhHvhmdFUTyNTtWpsMmbEkMUcPiRqzNxg9CvGGKbKbeVw71zjwkFeEJ5FRuzvaU8SGVnAsypqXU63FuaMsRBn7x",
  "key28": "53RwqHQRAUZcf93QkhgAwzMRFCXM1Kfh9YXaWm1Rm7hkdi8BviKEWE92AqZwV9EHPAWft77zwFtXjohtRefY4ebv",
  "key29": "2aE5Da6qDoBeCrnT4CSRjCPdnfjfsugecxMUNutTgfXPLU2zjpuEpcCGgmJntUyWBiTWormkUFRQsMkRoo4P27Tt"
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
