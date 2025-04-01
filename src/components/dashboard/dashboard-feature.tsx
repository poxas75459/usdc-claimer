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
    "4WdKDhCce19HBFW4MKK9rQFmTPxk8pW3K3M5QUXFhfLxnbdLsg2PzRK12PKPKquQeVgr1K5HmuRi6djB4EJnj9E3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szaYo7UnFyUcGM52NkGfq94eS3dXnmNm7Duf2rxXHXHU1CHC58unTQ76UBerPXE3Mat2SsA9SwnNgY3zAyNdJVD",
  "key1": "2t3TaXwpHqNCLyf2n5Sb4a5BN5TFFN7Joaab7NKQ4a9qctry2HWYTYfLiXBZ7pVoYhZ1RAb5XfGgXFYE6CtxcLbL",
  "key2": "5akB7Y45tQMuKB55gSkQHUopfeFeSTTEqirANXsbtS7s4SqQ9s9eqWqLtVs3b3Q6Ec3e7Jv3pn8F9cmPnWYo6xne",
  "key3": "2rEhy4oBUeHNpmkYuY2AFs1BdKSwUD27qMDEsNn4AKcydb7eDJ7yrQtbkUDhML22Hk7BeAVrUziiJkJDoiZGeTSB",
  "key4": "4o7YfzaYFF5kCu68E99h54SR1AX7qEQ1VWu3NwNXivis8xZfy9gg5B1cHwXE4JbpQLcUh63Swbprsxif5CovsjRW",
  "key5": "3gsu7ZQj3rzH57cV2Gu6ED1n64Q61uccPyvAPShAuULuztQu9UU7d4xLY3r44unkJPk1Bxdm4fUQTyPyS8pwxcST",
  "key6": "5zXFyjEgULR4wXUVcmKusmEYx62tUYuydAaaJj82kgFQYFKsNdkbUa87CP6hu71qnAkrKyeGmFnwQsuZdj9Fhtqd",
  "key7": "ZHx2KXaqiFevH4rqNitJTbHRvX8cfaWonEt9BLWxXy5XV4izT1sXcDqjYPY38Z2SRQ9UjoAWxKKmdnps5mHjn9Q",
  "key8": "9wWqJn4jU9BubuVW97VkoDaqtSXp3jDEsNp4iQBSuQfG1D9kfCrstFsdfAeV2KoLPvCq3tTbqhhgsisgtsjVHQq",
  "key9": "E5bG4BUawTUpypHhPuqFBYsCi7yGNjFNcYzjJksSjVTyn1fjpYx9nUoQEAWrQn5SZAcyDk6X3qNEJAf7NsoKqyo",
  "key10": "3C4G8McnQftVXBFkjxRjXTVVJ1aWzLyVMmi86wxqZDSh1dATPeVFHdwzR6sADQsQNk4Q1pKudPkRcm7y76Kmi5Yq",
  "key11": "46JwJN3kxgZy3jXfrd4Pji4oYeXQKuhdsgYvqRWJLrCQ4vGyUBcf7wniniTBD8LaBAuRbcuetS9QrqNoN6U1po8B",
  "key12": "5nhzkK3DGcDMDtLPrpDyhARbKMPFZHwsKLAf1viJ2oeUUf7sCrnwJKYk7YCJUbpgXWzowkrkLbuqKobkeZ4qjm6L",
  "key13": "geALpmXjWo7b8mF7DznW9LzpdtzYwTMnZ4xLQ7QJi2PKw7uqUx69bZgXyHpboWXPwQBVit14Q3RwUD1g8vgMeTS",
  "key14": "2UUXRj3cM6gALKQwymNYzyzAyfsr5R4ZSozNg48eXkv44wLg6iZUGh8E4nLo1rXthqGHNz1c2vTvVjNVUpJktsYA",
  "key15": "4wBBGTtn4pHN4qPmFNzVqWWiYm4aiaiw1hiFW3SrPhSF83FGUDZQDYtG7dgguGpb5HDUKVuAs25gqK9Gt67bdw2V",
  "key16": "3QwCGLVBbdh7fzXvFqFkHywr5erCyo2RptbwCqGHifqS46MSAhrtScaoLzLT9XoU15igrRA2SVWVND4PXBhdpVso",
  "key17": "4G4mQcCX16E21GzAkXwUx6n2CDAVPS4fcTAAs8ZkKErnVdx2gFC6DM6buKFJUjRbqAz2BTpTa9bDzuDDckgkkY26",
  "key18": "2av1Ax55sooCfSHXnvJsAXf23xYCj34kg3JbQCUM2asCXpB5kkEm5PHNy3YwYAQXxv5L7uieGrt31yeM3hBDQM7j",
  "key19": "3W7kp1rwrmqqpQdXmB1pDw8N48mbdfhfsKvZJstdfVs2FcMbpKViY1ta5XMpAr55Zh5Sc6FMfogx67rH6xzubsov",
  "key20": "GwdcKDDowkULiW4MdZ3gM4TNKhdsxFVFMz1HedgRRWPcvueV3SrnnEeZuGE9vJTL5kT8de6FCxzZ2kJqkjXDrJP",
  "key21": "4c1Qjh9qNFFFp4ua6xtzqUuKST73FsCXioXJecMqjwANcXa6uJ3dyypzWgVBB5Xh5fuDzTERbVvmMB1QUymz9QRu",
  "key22": "3hdPTKBHTTNZ6bwrjQhBcxeX3QsU6HAr4oUhMUCjX9gYmSJkaaKJepxSPmVmwPR37Xwt2beRm9E65Y6gJ5jQKecn",
  "key23": "4M4GWRUA9WXVJCRHwtEWa1NBNh6CeAhGop6HYx4Ze5FFCs7yRcp55AupyVrNNwgfYVfGA6pTiGn1JWJMXZGkoaKT",
  "key24": "5F2SDZZDejvbrBawVXcB5GU7AztkyKQMuVv3b6pEY3KmkeqF9c7WtV8eKU9oZPvvzWAmgR85FDvMmFydDQZaLxxX",
  "key25": "5wGV1drH8adunQwwAe2m4GD29epGAV6JH5oiLmYteT9FgfdVPGQhwhF12TQJhrptPkM4BeDWr1ReLbFjw7zkYjTX",
  "key26": "3fmeRrepFqw544ctCfsqivq8NMxafwhdHg1ygmwXPT6XcM1YEEs2gFWFnuxrc4MKE1SUacAhCDvbypb4rEH37pBs",
  "key27": "2BudecaADjb3Fn5SJmkbWDsfosp6gPWom29ULHRfPcVCTJAJACzKDfs99hSdFt6c5gH3QtSn5QdExq1ZLdZqFrhR",
  "key28": "5RhPSYNQWS8zUMrYFoLgVjJ5w6xdZ74x348YjweAZpcSwiFKEtqp9o7fQkL3Ez1MgoDjxxv1cNziJ3F2Rg3gYZr3",
  "key29": "3KYSVCbASszDWbdf6P812hp8MLEKoZcykhFqh6CjBHMqS1V8fPKZKqnjEJ3nKGA1HYsiXg7qSGz7qdGom825e68w",
  "key30": "5anmbxCmXJXsyRpythtb8WZSeFuofEVezgwRERBgjZhqWYoRnG1fEaqBS99uVaoHFj5SEmJ5vFPnqKdMXtdxvw9L",
  "key31": "2P5iGNU2b7bfRGWH2awSskSBRFn6M57cUmsp9K2GGHmkw3coxFDHtkba9CJxL9ooWPqjPfUbDKZhBT8dBJSHqZii",
  "key32": "5Tvs4bqRSuJTjvTFhFMZSQkLLokbVMdYkoSiujULRHwqkzJSwFeLswDAfLWj98QNDshDZefH596qnafm7XB2cFGz",
  "key33": "2eycC14u7fctMX8bynimsKSZaFaSf6ABbYwkCjdhCXrnU35HajbXfz63dCCbYefiDEGYj5ZCcf5G5RW3GxcHz4Vq",
  "key34": "5eYmGZGNFVTvPCteCCJJuuev3g2CnzQ7najcX7o7BQZyx1WqF4tdCX62mJfgA7W3HQTQdeb1SRtC2UDWcSfghFZW",
  "key35": "5i54jjauGMNVXrsjzmMD4iuXiZCYynZMyZzeNrLE5rfQXPpaE14fmm6N2j3unnKiWzovg4f8c2is3Q9UtmVsT5Xx",
  "key36": "4Y1pHyruvy9m81U55Ym1b4mqxqTUMFfPZkJTyWkpJEJQftJrV2f4GR9fpw4mPN1rS6UCF8ZMukPXK8i8btrufsip",
  "key37": "4YFAzLesLfrk5JR9njHgLrFhZZ4Dy35CuzQd3pVF7AbY7GwdMUrT1fFs9CmcdvBjoAWTQN2tbj5Abt13YXbpWP2i",
  "key38": "5S9AsmzDjTax5c1d3Qx7TnStBYBdca6FAuzv9DcE6aK2XizfVfNWX21ZnGyPQo95txb9yQQwLua6ZPP4nnYKhuxj"
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
