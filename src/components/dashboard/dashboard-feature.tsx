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
    "2aF1Cdn4W3d48DWygYJruqfPtgELFkywoNips7Amv4crH8Uq9rPQsXb9THYWk7rb8GLmVHapTrqEGeEaqrHPPa61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67aNH8ceEz9jjqqWs4UFicat39WL2nroxu47J5nYR7gE4E2sWoqGGaDfNwySXTiTEruKJrNVNf73z4fex3w9RvAP",
  "key1": "51jAiFTasfM2NxyfBSbLmz99VGMaHjdu3F7B7b2Suw2W26quVtvX7HJfSK8Rx47MZXXoyB4LaN4sbXd8dxWpJnXY",
  "key2": "2pR3877YEF34U1dMCx63Da1gjzVJHVMYN47yHVPv9MnDBXbQ3YHMynPGuJpCs4H4TY1nuNkuC7xfvQgZRo6CCsPc",
  "key3": "42JkmZcP6ZmpV171jQh8JeppqM5YS525WxR9omeUXYRhMvN6T8qBxigHo5TMYWJv5Wxp7ZhvDoP4Mg6C8VhwGxBV",
  "key4": "62dys23XuVcEm7StYJKTQJgjiYTZ7Ae8K9Hcvdy9CFB7d6YH4uHqtJzW44igmz7MFEbSAD5yUzqnR9zHpEhPt6U4",
  "key5": "eE9WQqLJfJBqrj2y7JyjGxRfCaJcEJTeJJF8CfQ4Z8BvbzubiNfrAd29pyJmRPEaHXo7fNjhBvtgoTqzf782Wq6",
  "key6": "34fzsUe3Vu6zaB3MLFX1PCPpoC1LuXTAiUt21JYW5jcphnMpER8wWz76Uug1RMbbFFCcCP6a1VWKBraXbii73WBd",
  "key7": "2Quaj3x5oqyAwLe1xc1ENyLBC13ok4abwpQ4LW9Esu93phCYm5WSx51oNAKa8pyRcWXy4PFydfqpuXWHaR6nr3YM",
  "key8": "3oCymhHMHAdACgruyFGFMA6kAAWNwVZkuNrLD6CoxyMwMDM4W5CsarcNWehzbAeeHdZBsZJaacxrgKdP1k4SFugz",
  "key9": "VymyUjFVKcC9hXX3dH4oYzG474NeT1C3bbQmny3DWG8KnXbqnzCPCE9rHjrHqGpKox5G6LChoVowPCgwM6c98f8",
  "key10": "2zZnkfzBCoryB1CRC73vujrXVTV23m6npVQrfWBBM6LxoYa9RLWTVFJ9tSZpPGFwvrjn2sup5EN3v11XtDU7gUvU",
  "key11": "53fv9T3tjgYk8oN4tw1hLX1aEFvSrX7xgeHQ1UqZEPtdEWRsXLFVMxGEAWUAT9JsXkvZQWNZqjnxTQHB16Ds4kLS",
  "key12": "zKL4qUxyEJ29oM6NfqcrZ6VK6XR85u5puNAVBqP4daGdLzQBj4GQoM8nxoDoHBpqpQxddWGJVvKoR1CnGbbZAmF",
  "key13": "22aLoRXBRmeniNrDTRoWmWKVZkDP8kbjisBwNvuYxUDbcWGJZVNz5ubXPxPnyxrcVh78QhaqXWcv6pZsxxYgoAMi",
  "key14": "2zVkDhdTWVk9kdVZKpypnuRzG2ZaSZbhmvoNZiFqP5rKWgTdbNpK29fmDavSrYAWGeBx9ukDxAU1WdmsyAgP155S",
  "key15": "dycAyBJNKTeAZoVQcHic55Q4L2AV2bdUHNCHCRrHRTiEz4AwNUd69htgYuLNW12qJ5ib93vzkkn66BTcqhS4uQW",
  "key16": "5KPe4omYGSxVm1muJV1A6bmgHzZjdEfNgh5nbfkD9maFMFhe8aCY3eKy5PrSmoSPnkYHewAmxhSPRT9tbCcfXUDy",
  "key17": "2CwLnq2TJrGCfBsYY1ntQ3CuthRefj71jGfqybSY5hDZyyeVYzFy3c3mtkYur28mfgMXkrGzkPDb8ndHBydmLsGm",
  "key18": "2Jwwd6fW5jeMUjz2H8khALvBKsFSUGvt5KitbuvFTgbJ4NfkfYV53cnqQo78ff7SPXkqXWXUjmtVpYd8QqG8WuhC",
  "key19": "5A6KxX7i7mShzFyN84RqCFvYFDRY3bmDRBJTJGK4Ru7cHuZBMfMihNh6Bt21xo6S2J5Hyu5BNYhQGesqPFXPFJdQ",
  "key20": "3ajkg3ADi2obqghuukir2NwT4j6j7JQAsobPfTUDsYCa1dFPWtkYV6CiZUrMGS9tNdYVeM1JBiDr4gCWjYp2QgFZ",
  "key21": "tymA4dLccWYCth48cAuXKfrWihnx7thiNZQuzsy1N9dfJm7trYTfD5d2NxPY6Sm48rSsFMZmffrKWrVVg3zxg3W",
  "key22": "2nF161Gs8FkjozaNtj9u9Uf2ufW1GdT8htRvYhD8Z4u9Wwby4Yv4FEc6Yo58rYDX3tB7mCwq2b4jKhdqVXYe2KXD",
  "key23": "5sqLEwjNaFeRovcH435ta4uFKDgA6NfPUPDLeBs5CyQZ7R2Ut2MwABvYx5wgrCWHCRjUqiucjsKK3iwzSRJxJQj",
  "key24": "5NKXrPnBJKoSywfrCWht2RGExct7ZzzZ1oNA5USmEZd3LyQvUCiBKEHTrVpeHeHYCkpGpdFnVaasKaAdvGSEopmc",
  "key25": "2mmXiLRRY1QfMzo3p4ApDuiN22ZfKHhoR2fMzqYcVzv2cE9HKgerfv5k88FBmyYrTWQuiXgrT6mM29RxhUn5Mohr",
  "key26": "4CrLC1Tcof9pk34xsCn3Yg7zCNysRamwkLcFPgi9YKZJMkUqvDk54ZTzxysqCMQsbELbDLWEfTUA2UGdRLj2xawR",
  "key27": "5HjXYcsQJwSk99SKAkg1bYQ2Fwzbhwh3DqAuTmyS1YJHfZuZwYS2ZwakazRX3yi8ERz4gJTXrzfNSqYgfNLdKHWT",
  "key28": "58RhdX65Kb8iyrS1ANiSDqwnttYKZ7iTY2F8nAHSN2kTH5RFS5S1q2EH5nEhhk1goZeNupG3WaNQHg5tqVFLLh8S",
  "key29": "4Aqxf3He4xNBz3AzSmD7CHwqQXhrSqSZKUv82uJjyhBg114w3rPyr1jqzbWm8L5ibgmqu16g5XjDTaCcwD6NV3g9",
  "key30": "5xLBfp4JqtJGHi6jUEgcjWdYmviL5DDw3FBDNNmDEdYuB1JGLxN4ERTaWE7rkzP4yiLBd8AZ6EeoMKB5hkiC76zV",
  "key31": "3T6AJeCRXuVMtJp4us3Z4VXwPrCKS4zHAUTmmK22PtG5AjcdaTfZJgh2K5Xs4MbiXF12BCzwyRc7GpZzbFkaVb8W",
  "key32": "ipqZfyzu3bkNNzQNxsMNeJBm32xcqbu7dUxjHCUy5bWMX3SWZHkXa3sPwa1odfd4tSJ9VH5UiGw5bxXbzR4Bjpj",
  "key33": "3xtTuZPN7cF7piZmDp444F1XhgNYfpJLNhB8f56a1Mki7t8n4dZp8XBa4UPXjh8r4AKtKDdyFY2tqLghmERqDAbE",
  "key34": "5YQmgeiadBWnTJAagd1zmbu41GCiRH9PM1usmhXVnVcEQqso91LnR9dCDoYwJ7tDXWqXJe19nEjMXk9JtQRUbnLN",
  "key35": "4aMfkP74nueYmvvxXpAPrvPjfYuqRvq8LAo4n1Au9wwA7QLmSsJS1XD9yYonLyf3k2brrchpLEfEugGBjKMRkx5x",
  "key36": "5f6EuBaZroxodDhLpNGN8c1YjKvbG6uDGRDs28XxHcqEz34LHRKPvRCkN5bmkmVBf3ApQ2JP3zKyMMMrPBd7xBLE",
  "key37": "5eXYXwtMcq4au4xAdZMwDygUq2rhKqxFrL3D9tvmUkowQ7Du3fqaT3NcxtcwEZZvXyaqftAXkpQQNPtDUDqrPbMK",
  "key38": "2GVDvuKSZVH8CDTY5kJQ2JfkkskGYRPDPX3LCYzdJgYy3kHFRHgwNDLNjT51cfnBqB9GzoVYPM2ST6XWRKZf5aJ2",
  "key39": "4N3JkJ84NXywqtSffyre7QFSuCV8aVbZ3YjBiagewQKLfbXsfvEgmfjY5dvbQpCTBg3Egzvr374cVXf9izFF9RsH",
  "key40": "3jjTNGrXC5mC9CHBceAv1XkgJikUawjJaij8jYjvBeEh89WcMQTy1JXGJhy8RatLRmTvEEbQXXV2gYA4ptUM45oj",
  "key41": "5mzWBAp4weF5vwS9bNAkUqcJJrjDGdEFYBdNNWAgXfbRLPXVeFX8VJZyrk27cxLWSf28QAYd8feWUqVPThAZkXAX",
  "key42": "2sgmnDxMmrLHoxQvAUr4WJsFwdatvjTMV8HCGb7AMkrRcFu5dkAFyyLqN3PuTFpEXHB7eVm3PfDy4AxFgZzuXs4r",
  "key43": "3LqoYTCRpCHxD3U5Y2aJScsbC55THmkyM8tmmzfLXFCa58daSK651ShSmxqA2S4k8PtCyWpPeqSPMNtf9gNasN32",
  "key44": "3TzCpnnb6z2XKWL7saTnp6DEob7KQdZa3fjCxHHQajnZzaStKLY4zRBnjnkmfjWZNGK1Xw1xXG9hhAdqb4REcfVw"
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
