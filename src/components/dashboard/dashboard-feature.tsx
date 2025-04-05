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
    "2Wbr89FHRff25NEcdzD31263VzhS4si41G6MJf728Vgx6GHkXNMwtFXMgmFrocCEY7FJmBKKnHoxuDkDUxSar9nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DvzY3XxwL1by294Q3v7MUfbf4pag6JRzxsRc8TQhtT1rpDzL2JsuRmgmrV92KE1Sdvfj14DAMHznjN4mDjqEzQz",
  "key1": "31mUSJiXLEt9xwjkep6ejKYQrqyo81sXvPhW4vPxhDR42uNCCUFTdfhhcsPx6m1VddQMDAUhs2CRFxyh1VyKYEYm",
  "key2": "36eZT1Tc1aTDTp5YeK8WHdxxPzWCVac5GvG9VPoc2ECvZY7eefmaGjpf14ek8AUxvgTe7ZWcKJmEZzcyhtD6KNFp",
  "key3": "5DDTZkUaMK81ooBqqtFq1afKvGxy646zQAiXDbvu4PYPnQenKMYk9XVYFtTrCb2friCweDFToioUsY9RZ6gWkMqy",
  "key4": "2kVGspegW89nj3HsgVFjEi4B5tc6hcStKdpAmWex27sc9meeSE8owfufASuNFuErUNk99CgtTUd3KRSrwDPy68c9",
  "key5": "4hu6cNg5pbmc2Zf1mBaw925ubg1XJq48YDrBJgwgs1RxXxsJXsZiJxZm9YRmSVprRtmFjEQUsEpXQU7FiLKGhzLt",
  "key6": "3xt9iZBM1rLKg5c582m5a1UsbyWdjSqXKvfqzREHuhUDZuc8r3Pib7vuYTfXDeGjwMJfUQSzwWPgFEs7ZtqmLfbz",
  "key7": "5SvcWY6FJVJQzf6CBiYC3BuM7ruWqJwKWvn7sGc7Zg3QSCs6jEzpJ79FnP8M2Vj9juzxvXXym73tUW3pwHicdSPM",
  "key8": "4w4dDBCJQpVCzcQUwSYBoq5Yt2Nv5YmaovTpyMDwckYxsABm3WUo4EMqHFhwY7MCuLir6611NPz2UxzMBhZKjwtQ",
  "key9": "66FhqoeutoeRtYSRDE3mAwzp1GQ368anjrAwJJKMzbKPkAV8Y9AFnSgTh4pYmR1VTZxt7awQZ6BejGkcmbEpLV7j",
  "key10": "2JE8QpgnyExFCzB6LZadiP8i2dVoswmsbsnyt3iQDahs2LEhAqds9shVPbA7nE7jqrdCVhdmMLjfpvDrRBNJuYtS",
  "key11": "5kPdn5o3ZCDRbb4EqGDuXMk6LyhTC6eg8dE9RUDnAdZw4a9PzEy6X6sWptveAYg7jXbk9JesvFCVpTeU76a2ChUG",
  "key12": "32KABnwY4F8gSDn9qdTjJSUB2YGkwWbLmx6PWCyEhD5DA65YE6cEhNR3rnJ28uNaQKaBrwcUXQPJh6Q9YxTF2NYC",
  "key13": "34z43wM9iQNjjpaz38cwSD8rUAbFD1GnLpJARxyLz96eGQKZBaAThJUeZphTKVhMuTtxxtmQpRV35VaqsHgbHTDK",
  "key14": "5ScAPTqAXUGshGcdHj2KWffcXaPm9YaiZLWAqVT8aep7aVdcaq5wpVxkNpqTUvkDznURFvgN3BFnGfYBXdC15Taj",
  "key15": "3YMR2YU7bPt5PjNwjLBmVizUgM3q62WZUc5uY686EkaohMzQPX5h8eX4BQEEewcLBZ9K7QV9tNKDTrtc6jo13ALx",
  "key16": "wK6YmeRgLib9PVbbGRca9vi7kucUN7jJXGyiFPupWHAjWuiQzUYCQeHpWUrxZsd4Qxre3oxu151vixqXcFbtP1y",
  "key17": "5ab4mYkfnFB26JjvdPpSBRWezEqYDD3uQesJeQ947874j5XHUs7psSfVwGNL67TVmuVNW5PiUhEwjb9GQr9FwZ8G",
  "key18": "AqzRgX55SVRjXp9Qvk3nPfPaVhFWnu99QWA3EFFWzHWu7GQuZJTpYQKZF2htMs6W48TYumLxGELAWh5E9UZXYpY",
  "key19": "21pQeCWHqAKsjnsoZgTrST7v4L4K61p6e62omUZc5vQzvnKVXRCtdJuufWJZ8tfLtPpKwyN3nkBUwv9AvCTNALc7",
  "key20": "5GRjyFGn5nySqj7hbpyhoRWENpzFZ8LeVjxoEjTGpXMxP3HdbBhQ2U8zFAwJtnNU9BmsUPuASd5SZtR7VaaB1uaj",
  "key21": "2aeZsjzwpG9L6VcDLveRkkAnivr4Q2Ux9SBHZvxspWyPR1Cpof1YLtiD6hwmgvsfhExMzGywSWGgStmh1rTr3KmU",
  "key22": "43thwVzvKqPvtafsE5fNLqfTWKjxKdR16kXbh7r2sz3VKg6JGBfWdt7xKGKYQaEm69Som81L2sizrPJT4SbLrpSx",
  "key23": "UucJLAps44Ky5fAeQsCc2TEVAq4Hk6HPU5Dm5c6WNuKdhVHKpCBprn4t7Nm9CbzKqmbEarvMZsuKyakMVkfGvuW",
  "key24": "p15Eo7SiAQUJRaf93pmPJ8XuQbvFHQuJii5AsTVsQqU5d2bncNmemkHLHVzT5KCkzSxZRVs9KPpqF5CqD3R6mCk",
  "key25": "2e6gFeVhSRH1shst8WSC7NZwbMHVbFY681xxA4c9txxCbqYjQutUP64AA5jnVCEJX7wqcpLQGMbX7cpSMvXuj1RE",
  "key26": "5snvveoqxE942VFPwYvQpJLY4onrXTEy4UjtiJxQ7QDE7DhkpWjErgUz1b5fGDBYTfAhpM3hDZgL3t1LVK4Txs6L",
  "key27": "QKkQokZaZEu4UsSzyUYW2noJtAfzGTxyVo8PLBqtu81z3sqV1bGtc6DoWHTjcnKV7gQn4r5hjfthMgFhgMwm349",
  "key28": "4Dfa1Tya8hJknEx7aWMR2h2M4qGv5d9npjc1C86SbRiGRg3QDSK3cKfSopeJDYD6UNA1yq7oU56BLrRjZGKojUTy",
  "key29": "36XtVaPUv9owFMvWbRGGiHs3ijLQHuMZur4rgVzSbcDzsHnkUoyXqvNMFn5H2rRjcD9SMtSHGCFvoREsfmqgYiH3",
  "key30": "3RaooKF4ojqeZGbo8Vr4g2Mc5wWLZRCRqbngVXjxGJJegJ35dstAUqD5RcUH61NKRdxrJKYfVGswsiW6VeerXihx",
  "key31": "2sqpU2FT435FY1kcTJQ2Dxedx9Zu3EjrnkYA4VVrmPxvMujCEzcBDDgvM3yJ25E7qeuGexg97ddjimvgBgsRhLWa",
  "key32": "5i5N4JrYaxR7HKJxtNVyEJEjUXvZyGoxPif7w7boDFko9k7nsrLAdCunEnVLWSrhp92NfGWrAmNMNgDBXa2yH1fV",
  "key33": "3d2B6f2i1VvC9QdbWnJ34AEhtSnYDFigsWPbDiFE1kcTJkBBQrnsa6rrPRXkvJZVgkVZuo37LxEodPJPHWvLDnYF",
  "key34": "5mNvji616qcFp9grFMx9NfSux4XiRofJmWU79Xj5mcy3HQdka8FCtV2EPS6h2EK91y2aG6pmZ8Myw7E64pD3qgwJ",
  "key35": "VgXFbN7omSzLNSdgiZ3i6CMDhodYftYG7TDt9ybibhZaVYN3xaJTYfbDZUbtN5iKs8rWatdj8Vew5xM6UEn94td",
  "key36": "4pkNa7VmUCBGeCSrLR4BKpEaawAk98K553ubYq7YkZFWXfei9NkVhdvonMn6r6BvEjMvnVaiWzcCXQ3Z1oKCtNL4",
  "key37": "58fyR7oCpiXZQNu2TDmTZHnccfKp3r9Up1AKUYFkeY52UASxn4f73mV2c9aJGQYvXyResX4qDYxSWCvUr2YrEBZ4",
  "key38": "2dXuXfrfoFi2m3pPoUJyRjL6PTvPedznNmjFggLnMdUkw3vrWFSrszbKT6C4GomLF6aKJ2vmV4BN3ZwvZ4cNvwSn",
  "key39": "2f4v5955gSppBL5tHueKegfgEv6LximxSidriD7GB4oYSGUZvVwozGyetCpzKf2fbiKDM5mtAF8jQkKuQJDzUBXV",
  "key40": "3oXi7ZCRbG68VK6AFYd42tY2VpKYZAVDpdGbDhKNgoaw3torqJnF9weZ2RmvxfWH2zhMzLHoyeSBBDxa5BjVdCYP",
  "key41": "3LuUSF8vUpTdjBD64DcCBWkxyrs17Xj54JXmwSVPkWpCZx4Roh9BmdBh72yD8R6Gadrs5Qf8qnZKy4SJ1cPmhsP",
  "key42": "JgpQUE3Cj6crWxyN33rfprN1gecqLaAfWc8VKXxC5NN3PTQTQzLi28iTx8J4bi1Qcd23rPa6BFUDtem1K772eLJ",
  "key43": "5y6j4XbpLoiR33BWVW1HCvYdb49fVRvjEGDg19mjW2TeicRPA9NivX7gFVubEtjSv3ENwsRfuNbZFdoMsxiqttwb"
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
