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
    "41RisgdXQg2tk4zPs5jJSduNpKgyimf8MXCcnicGGex7h33sz6R2hK2naH1LzTEbXwkp6QsaAcmybsSBYdnmm11u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C1q2z6ZUwyKo1ujahvH7G2zcdaBe7yypmFSmNFhtUpx5iEZ8sKs6TJDtRmEST9i86WgPdUUS4f8S6HX3q74UH7T",
  "key1": "41hZrMs3LTKH9ZQy4x7UHWUD6E56iCUTbFMUNFuspvucRjBRSog1Dgw1TzVk5Zx3ed8KFoz84BSGuPLKUMsy92KS",
  "key2": "5zF65f77zJDaCJdPCJ8pQ4A5sVcnvYs2b2hS2V9oWG3AmHVwRYmLYRQZcMJFYThEEqqUeMs2StuoRJYBRSRThrQH",
  "key3": "5ypomGWLmjYTAr4FLh8Nj6WT11CCL9MyMoY6JwiRZq3bUHSBhpaqrwdHGoNfdsSQg2e5tZnAU17TCsYJM5tL5WWT",
  "key4": "52X6hANK5fKGnpqA73d9G2wHS5PsEEfLgPQeCZHkfcrPE6hZJT2DEvpraeFRQisgEZuPxsdthoR7NjrusDSFCZU",
  "key5": "3zVZjpsfW5Lx6qahwG434rBCdsH1ZrbzhvPXKVHBLwQz5iH3VfbzxmuaGTGsAyCoPdY5NzpvvchDasZqrMuzyY7P",
  "key6": "2671HJkbi34HxRPQiRA38e3hVYy4W83cdaHaq7nAU9RrfBAfUJz6p71KHp63AcksVyf9xyz8jb8fCamPAZmY7umc",
  "key7": "4fVT4EpPbEEQZ97Sou5Fy4qsibtVVKTeonPA75y6fmEa4WVyd5ZV3wc37tcq4ZTfbppmfUu1WK6x2Ww3zp8T9mny",
  "key8": "z8mUrgQUkepfkyq7FKuaGy3jrdFW41LPJfeDNfXZokmcz5cEHg6zUQCY3Dd3bRPhGb7v9vqzqLatpjJTwMc4fW3",
  "key9": "2qRAgDxE79qNAtj2naSsRXWZh48RT1mfbgB7Yw7eq9UmFMyuWKn4hJK5sM8Anogie6cHqaf2tT39maw3pV8HJPPP",
  "key10": "4DyrxXra476oUyNu1BVRZUBPq3kXjPrcdrkxhoE7tCjzcviFdbo6xkXE7aKJhwk7FJpUSfCsA9SRccsNEDLB6AMV",
  "key11": "3GseGsgwoZdGUo9oC85gfLWHrYxt3H4sFKGDEYERCKNRd6eJitQLQnu5VvSSyxzAW22haKcQGypqZ5WbytNr6kGW",
  "key12": "5mWuXj6u3GFUBTycSvCVqfyz2L1rBUTu37qwnriuC4nUpvZyKc1K6vGbTSJ5Saz73hVBPwgrDjLVF3Ehym4SFTFV",
  "key13": "46sJ2jPAMkKXf35PVydFXeDiAvg6Ci71U4V4ccMYgVxzCf1ZYwbRRzFoBmtcgusHuYPuj1Xc2bsTLj9LwkRcx3V9",
  "key14": "3JhTnz5u8Sm42wgnLeTELwqpaaSp3QryDhjWBRTx9sQDvfQHUeRKbzTVcDT5Xue6twSTzaaZCMqKqmDd8ZxecDUj",
  "key15": "2Swr6uSbqUXNhP99AWynhwbjhXMjXPmq4hWuK8dRxMqbrczd9yftrngKECaD8NyFyHoR4BXkkit4wn3E6X83VUNw",
  "key16": "2GJ2NicChYYaDAicN4qdJeXn5rVjaxUomjLNiotmcjbhkgbrRATfazfvdHhJGHiRvdiXsxv9R5poZb39veiE1x5e",
  "key17": "2UbdSzFgNpLwvcLL9EFWFQ1LHNRQtRcic2buGVRgfZyjL6Rd2dG1qxKX1zjWHdWAuSf8gXLxXmE9Dumm3GxehA6e",
  "key18": "4Lv6RH9EydbSAU8SJ8cW41s9GTposuZaRoDsYciRVUibjBPFjjmbPkn4s3u154e2YUYPGJKdKDXYounjjzUgU5Di",
  "key19": "FKuCpKBj7DBVtYrwbfCZxSxQUYceqXYRPoxm3sQ1p2gJRzRYLy5rPa8TiaNCqmWwDjEaRfBFvR2Adgs23vgBh39",
  "key20": "Gjea6M75oGaWmwn8jB1gG1UXmU23jvxLLgu2k5RpagnY2hxdLDwCSZEHisP9nM4ebzkKRV9XUdHWaGyhFBDHoJY",
  "key21": "3JNxsu7iqxNLrKz7HrQgWHVCJh2y5cJTKTCCPkbV4jYz212acZnvsLQvw4U9Za4RWKRi5Z6LJa3R8u4ePEjgaznL",
  "key22": "2hYiE5mVgFJVDU8e1pyKofYjRaDJ9Y9EUPBLsTML2zUbMaSXL4QWywtRRjw1KuQ6REbjUkGcEE1XHVH1stGrFiby",
  "key23": "5HCj4L7AeC3x2cZj75GSr2XD7Z4TaiK4tBDnBKkJyBwMtt5LA6SHxoQqQCj6gEKxPJEM6EFzFEhQb3sFouMtA2MW",
  "key24": "5bQiic4Wa8eZKDdgi7kiTbhq2eTai1QeQzWMLenfEMW2VE82Eoci8f9D5s9ZkCM4retbLFQNaMiw7xQJzrC8RMEj",
  "key25": "4NhNn4ABzoCkEJ5xpJvEniSRKmDjHsWWD62bgTqKUMWzfJ9w7TU1uU9oZDkCdXS1VyZSKez7TRgF3f7rnXbcxCBL",
  "key26": "33U57iz7T2LBRSAnmXMbAdRTQgw4dCBCKPfA1LeRqMcb7wR8AD26a35Eer2Upjcuq9vebEc6f6gg6m585ZW1aJNk",
  "key27": "2vQoB37fE8uMgMaUAjotTeSi7BAMbynCd4PgQpNAvLJ3aqwEXFyrNVe4w68hLm12WnjYkiJgsWRBA8X5WbEFXVtV",
  "key28": "4FwPEdtjdzaJbBoq1fvri7ytHEewu5WfGY735SHGbWc5GGxMCuhADesPLpnbwqP8jWpqJu4dkSeMgYc8KZMowfEk",
  "key29": "22nJqYeK1nRgHTneaVct3EXXkHFAd7B1tyy98Q35CjnxsMjNj8YUzC2cSXgUffbrf8oHUfFm4f2S7pDUu2imshXS",
  "key30": "5ux9j6y9jX9ih9GgfNXXRLpn9w9X45bBDYyZQ6C4jBkxjTc2sUbVh7CvAmuSj9xY7XQy5DZumjGdPzLNYgHfpJxZ",
  "key31": "2PhfsYkVMYsMvr3SSG2R7xNzT6EPAovcttUpoCq2CzQ3RBEmcmMbCvEKn2pSzbNeSBD1i73FHfKNLW3Ex1aGjrsM",
  "key32": "54TesF3HBHeadBYrzrZWhtMDksKiY1gt2dkQpV87bK2umWUDacLrhYf34eoT8yco1DiJb5GZPQRgCMcNawrVKZ68",
  "key33": "55unT9wQnaP1n4wvsDkYnt1oGHGHQhFLkEgZdNLNmbJPkAdVwqqpM5SHSEY7apx6TGkzJA2sZhDNSRYbJCzkp66P",
  "key34": "3eZFWq3N9cgyyCpTL567QKVYqqXmD4A7YkMrg5KbA78gE4DCtfSxtHYX1tS62Z5aCa8bPtbPKn4hku9iDSZLzd1j",
  "key35": "4qCHFJhCaz5Y5oSvq48SnNSvc94PF8o6H3NxmLpn6r4tmCvAg555UJMPY7zyNq89cGXgjmik3qC3prnWA6EF1p33"
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
