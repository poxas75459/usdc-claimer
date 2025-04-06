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
    "4TUYxtPUzXh753nuCjTCCxT9VKV2vJNdosRsuQo5jRNtd1W68gdvBUeNwnD6mxn8RgKXfTfX8rrwrrtHNA2eA6t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ZWKUBbXDEqPiWhhWBVZQJgzn4MkJnhCTxPnfVvZWyaUhjE2shBCWGuWkbXLqerABQEDGWQdiGxSWDiqYZFdcxT",
  "key1": "4teYtCKevnLHyi8FnRUdeR9caC6p6ANDdFJP7QWVNRVz15tYorSNfTPXuPo45hRqpUhxbmeFHhFjmTRZFi89L8TA",
  "key2": "4XYUCw6wokRoBEMrCaRZXSLBM7txgF6WVvsrqbhv2TfrXcXaJvRQ3P4h8fNsyMCgT2EDgLL2ESVm8VbcUpcbENZG",
  "key3": "5GwzgUp6ceu87MjxHeSLY7xBmcRfcXuVyo3b1AXpo2aACdaPbUJwYa1RWgZvmiQ1BE8qemhnQDcduAWj1nbrsHZD",
  "key4": "58jsLpUqh4hKFMWhXWEGBJRzsfi12c8ynyUveAfdNhQ4oUujYVZTDjWF7XkquUU45KJfJKFaW7q8P7fUv1LPqFRB",
  "key5": "5anfJ1Rz6wMbvfkQEiHpa7MCwn4BQx1mwQsLJPrpkHGbAEKn5e9m6YuMaNNqseahePhkh2UGicru919dBZJUfvPv",
  "key6": "2ThGHdwn6nhKhWMeS4WJDdGckzcexdNKe5Y6ZZrPa8ZgeXSe7BsKx1iduCc2YZeoAvFBxfkm8c6JbSDJfbXbuzHZ",
  "key7": "5QUaRcwoERx75wUxVdnutNb52HhZxrgXXsFBCk8NSc88XWvNheRRepZKJbS6CAid2c9jmCbQmQTGpefCm68db2KH",
  "key8": "2X3EuzY9iqAc4Bf72bvyc9kywLob1nYTnzREN5j2Ai6wW9oCDYpKZeayNASvDUh4qySS439ZWCmgNhVu1NSys1KX",
  "key9": "3fMbnKaEZDW4YnuzJzXwkpDbrvVVG45SHShTgZe9yhHAu3gv6ZR8pZiTMaRA5QET3VzWBrEPtSufkzuvjbnN7LLr",
  "key10": "5udWgspcoNKP8svf4T266A9rfooKWeX69sRBZCEpirMePoTDufyVzrJniT8TRBmNx4BLt5faU9Ce9ZqNvU6LJdDG",
  "key11": "5aobpwYFsqTkJfGCVzUU4FGrzCHxxxPmqF8v5a1j4yBEEbtpyEgW3QABtYLJccAZXg6mWpzQs79PurSJMDZaACXM",
  "key12": "3D3Lm4TtUcP6zYrdTCWJfoNjbTiMYWLxXSjNKW74ck3rL8jhw7e9St421GF2b2cCFaYnqnQkpT1yJ4riaUxjpFUt",
  "key13": "RLmt3FHCSWKaxX3sKqdtKFwuvLZTATMPEmSL1CUijKxERt9Rqkypn1yeP8tPfPFgJfyVSrFskVMr2jjNqR3ku6w",
  "key14": "67o3DuqLVExeSKrFuGRcTYHUATeRxvQUBLRCpZWiFiJy4sWubbUZo1kSzryrcKuZivGeyrfmpLWMv9YoFULWPazJ",
  "key15": "22tLWek1aTnQsXYK1xuA7Cm3XQuD2igFDH1GDa6Nqevf7L7F59qLrsJCEW1DGFov8N79wUxoKLa7aZWjVXZ1D9xH",
  "key16": "2J4Gac46kW9eWx6g3wYivVzgKtwnRTqHCAbGvetUb7fzoCvvmmR2wGKJpSVjzXAx2gGvK2t165ZRQtGV8buorvA8",
  "key17": "5eAtjS8sLq3YDsfQvk1KsXnvDpeNteQkfeexmJiVypUN6kSQhvZ1S9Q2pxSEbupU4FAgxPoYuXmuCjD8TohncnzZ",
  "key18": "4p9WdFoqgCYiTnmE5mCKwkvz8rVXsMRZEwreYKMwiywXzYyqXsc1EsXXnhxi7x4tAR3uEds6S2m9LdWc7hK6NujZ",
  "key19": "f9dkhg7So2Dzp2qkx5Fo6gCzYPUU1iUshdBRY9a2xfDkAXSYuCBtQNvGFqd6o78xp21mQVYv4HnuCBqjKeEQZHL",
  "key20": "5gtdmTmSDRohemYG816V3WmFTG9N28jsQ2cZSAiz2Fdp57JJKpSMybTTbb59gte6z1CQZjhFexnuYNgR2LhxVPqJ",
  "key21": "583MaMG3JvT9xK2Vkhsu8ruhS9cbRjTzMxL3WFmTz2uaVF86cjPmDoG6Kp6ZWRNtKQezS6jCRqEoMM12tmUTySvD",
  "key22": "5qz9S3ECyg5zaey3EkPH9q4Eb7KGCauz9J9qviLPR8CgeduV7eAPXMAPwcKV7nDAyUiqh7nAX5o8mYXWKXmwFgua",
  "key23": "4HqBW3RQsuMrRf8ExnGA6118QMqBzGSE7HAcdZV2xaRnypjadRDiur1XRbtGbemx1EPe9TR5CQyFbq2TDSUyanzn",
  "key24": "fAr3AqX1CB27jnCTLrHrSuCa9bJZGWwCwd4kMr6mHAoPDUKvgQcnvM6U5SqbseY7Zg4nPaU9vY6QWqhuBqL5PLh",
  "key25": "3doumzVuPGcEbxE6Q8mKpSmSqhfWyw7BjNQPRJ34F796W8BGHSB18NfcvANMRkBN7MSJpxLN9wbxSCC359ZzSHzw",
  "key26": "PDxT4vv9PRCyP3Z1e8Mee9Tho2W5cS8KWWHUkLQxia2h81eeixt9UDYYaamuRTnHcvtTb8UtTR2NY5rTvS1Dk59",
  "key27": "2WDinwi6VgkHwuk3UFapMa8mC6SdS5rtZncoJMfCwhJMpmDj4MHaf2D3EDCiuQai6XJc2Jur8xi3ZB4HyE5hnFLD",
  "key28": "4NzmerD8AKiNpGW9UMdwnzbSjv5LBa16eoUDvsG1mKtoLhLnVVEesZr3F2eCZWd33KQHjuMgyzWe5uitRLnTdWjR",
  "key29": "5t6EBbPXzAZ6X5fv3GEYi3hiuhh4KwrWp3Dhg1cQ89X4VgEwP1ApGbxjYzGXcmUJzCgqXYcfD1whP4rygdeowh3N",
  "key30": "2jgnL7GcEwCFiRStZLJ5ZzLjNWoFWkAE7ZCe9wTY17aQWpV9xjcMYX7hw6ko75fSmggecid3iGJojAzWMMKTJW2M",
  "key31": "4qEgYjUajHpxzUAPfQ79brepKxUZ5VD9FmXkafB6sgTBPQF8o9p7o1q3zFCxaFmGpjP1qRu3AdGoCN1EuvKYvHYD",
  "key32": "GGFwcZrRdFTHViALKMDTYGhpHWBDBGVBwEnGeefGPQ7sejC6SNwC7UzWAe9UvTA3aGv4bpyZsb2k7yvBaoxGEgW",
  "key33": "5Rvb3AhR3dYSL1MF8o7wnsiahHaY8HPXwiN61UXPTvyU6opNGpq6xHhGJt34L8DQVfogjxBBrPRPGT7NWW7SaKM9",
  "key34": "21TXewY8V3UM9gjuAuStZoCKvD6EqVgyCytMBSCM77hENE16iKXwLS7H4jypdTVHDeYC5cwBtvLmMaNn6CCDrgJi",
  "key35": "2nnpECMSPD4tJvrVWpBpE3e9PC2qGfQjugXh2ZEVr73rUbRqQpe6L9Ejiy2vUGjsAGUnaF2dR6BbF58XeBrwxWzU",
  "key36": "5rzrm5Sgwskbex8WpANvQMd1JKCQKrfSYEgHk4wNfWjwN4VTPXmeUizFLp9RJYcbzzmcAGyx8UovvwfE15TZzEZh",
  "key37": "5ojQ1yRFCQbTrySt32i7VuXUfcEsmt7suvLYJUbiBL45S2CEsAdrMvYc7khw7UF3zQgAUoQKNom1SqfQG1a7WUFv",
  "key38": "5Xhhcr4Z3CV93uMuTpojo1nczZLkFRLusiWTnnt9ueZYUGKEcUFZ6vQHy2fZn3StavRU4mdmGxjiXRj7s7ujxVNL",
  "key39": "ewB6MRgW8Mm6vJCTcHPw6bRuq6oHAvnoDPu982Pxkmg9o8ZptuQHaTXn8xFxFWjv7t78zcsjYA2AN68ReBniLvm",
  "key40": "5f5LTeiQMtiyo1TLTMiW21V5wqUaMAxBLfmrC9gUdQjKVfPoGTB6F4k1k8JvQi8wRJ8n6wJriLfsycyiyqMiA2yA",
  "key41": "2LekKpECGoCkw7bYSxdJFr2bAFRahJbGbBykotBD2QuaqMdkapdGfWanuBQhzsEGTR3RSbcCvSDNjYv87NhxLDoV",
  "key42": "4QtArVeoDpWjNBr55Zj4gCaqrqvmTPF7fF7pZeg7A9mUxMCKXBnWzjMPGewX3z9XA1TE1DyQ4JtaLnLJyG5nNheS",
  "key43": "2pu357cXZpzzrHcLSWKcFAUrQrprGwgmJDw8EirV8ta2cEaKUWnfe5HhZKcbHsmJDfk3AGBVtZY6QEiMHuHFMvi1"
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
