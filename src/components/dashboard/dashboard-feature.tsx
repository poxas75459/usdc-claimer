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
    "4JUbzPdxH4vtxFbW3cnWk1hy5yRMmQSKUdxa646RdkBsqmdkVvv8TuaHEYCwmuSCXkKvxGQQRxqajQ5m2xh8uyW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gJvYYcBG3ed5MiLLVioMqdfuvHqNCE6kAfAkQCzAej82VM7djcHnsxun5xyZHyKdqmHJrw5oBDVdi36nTodTkbH",
  "key1": "5WQZkxHGYzGyWKmWuGQRr81zRobf8ukEdMvckThJ8PBR8p7tfsipLmf4vRp1N61pY9dJcTxtsC5vDbKeBgzw2NfC",
  "key2": "3Rg1U8utbPmKdwf1YP7N1m4RyW7wc2mX23qM9hZpcnNe4usJcAYmvHajgC3HH6JudXH6GtbxgzUHaT81PRwq4hmN",
  "key3": "4MX82CUNnZBtWAb7tpNo9aVchseDtNt599qQKtvnjZYVfWud2GgK3dzXbDkDHpSy3vSU3M4KHxeVHgy9txf2GWjd",
  "key4": "2CksWakp8apKDPVqbstZXE3ihKSumXa1S7qZXsKebjx7g2AqNRspWaRy22FL67RNzpgrPFKc6uMHRBe9b9JNR3m2",
  "key5": "4rYmysanMvSckZ4GvXak81ZTJPWvjyN8HVkvYxNU7XzUfhh1u3NMvBzNm3ZXAP6iVs9tz3ogvUqxy72Z7XGTLxTV",
  "key6": "4iiHgPhJhbXcfF8AyWCBAbsmGB26AePP9tdSmRZqgfRRwYns9xPjSgnUjxB5dZJ7PXpJa2eq2f2o5QznWyUnPMKU",
  "key7": "2kXTsmGoQ2mebuBDcWodGadT5PTveCbRySu1M4s7Bf8wsocT661R3wjtik6CnKnn3nC5Ufm9YaRPrHgeJT4H4AHr",
  "key8": "3gV2eQV6UkaU7gmypvVH2FDvfjG4dg5BUPW9MdtBdbbHHuHq8KJ9PjfM4iNVSeKSenbz3fcMrALbajZMSgjbwf6L",
  "key9": "4sdourN74EEx6WXjDS2aUcr6S2uwv797GtxB6yZLrWp8cw117aDapNoxG36P1F7ybQJ5xKEvJq8CRNXSnt3Tv3Ch",
  "key10": "2hhSgQFsiuCPukm584FBRAZuaGkYoG83nbaZksbTxuqFbHs3diA2ExMzQaWBTfwrbEWYBsE2o6dR3YZWWuQFFvk1",
  "key11": "zJiSfMBxLpZN2nXCQ1jUyEsqHa2QhVLrCXTWzvuyGztecvDi97p2iFE24T1yzfhb7ePRuCg6yPLuzFm71sGjo81",
  "key12": "bC5LN6YexLMR6ybgWriCNxHTz2pY6xssqWYodNMFKv6zgzy1C29QEjtLdbAFDNYMr3jEp1vhQLzn1Dn4VnsJ2Ft",
  "key13": "3hvpJiPRPPk7JkV9AX4T2omEumkw5V1SYv1TQBswMYKeNYtHQ4XnXwwFiTPDw1NNSiHcVXkL1FFKvASbHCEAeN1i",
  "key14": "23tMKMjM7i64CnNiriQ6sFhSLyX3aDhYRgkxN9eU5FBBNuBsec7PWgRRUCGeeg6fGYmdxb84rwSXfGsrcEqVWrVZ",
  "key15": "333NamA5WNwqUp8v8zivjRTBY9FNQ7YXDZfdXV7KabDymPaTfoPoXrRBbnCUnSredAsUSumasbzyki7j3FB5MDVu",
  "key16": "vXCDmSZKVh92e3WSNyquoyBVFceU2zJs4s1yZH3XERb2DBXHCvm8sivAp2ZEXfBsbR9q5JMZN5bPZ1f6d316QKA",
  "key17": "4K6aGMDqz8gqja9XHbZymhBH9h8DN8NyGxY7QMPxDc3ACbV4eL5qv1LrSAnP6LUqMPYKa7rrLTSzdCRo6eMsRY48",
  "key18": "4sJfGgMmW5MbxMmNS88m3pjadG7gwcDuyaysZBFtxS1v7hsjECa7eUGN9aGyD9hvJYkWpiPUHghSWw6KMnMBWJha",
  "key19": "91tTvCbaG8ne5A2YvP4V4NS5Cq9gPwaTUy59vjDkCtZS5GkuUWgRdHayQxXG4Wo38Xh6iEJdA6y1ERXuRrKaskw",
  "key20": "29pfg97AijC4atsBDhEYiTvWTopGaVPekRMQVT992ypJ8ouVMoVwgJuaLaQiTJFzDj84mdpc1wK3AsPbzEgUHsHr",
  "key21": "4sZmoGK24532oRjFiDh7qjiU5PrEq7Zjb8hCqrjfBd5azd5XWp7qSRnsMxuLzdSATTQrnYEw2KHPGRQA7BLQF79",
  "key22": "2bWx5EjQLk7cF943N3Xcidt93CYDtNMKyhaZ4EzDmPfs1dLvNBzsff14sVUNpPBeASuV7DYc69PgmGCL4AQmqH1s",
  "key23": "z8Z2kZSPm9TTGXvpVe8apMBDx4rzCjuidw6DdgAGUpQNS9mvFC2rvcnRtULnoRdUZK7o7RNZjJMhiZ4ivWZQsL1",
  "key24": "5LEjJvc75CfyFmoRJguczVewAZ7bwJRUuuAFGyDeyuJADtFQp5peaiq9JGgodPikLNGqWZeREGpdCQ2YohU2up8u",
  "key25": "j9up38uXmQ1HQsNVarKRpFjKHWxsy3YSXfZJhxjUkB7eji8NixyAVqZ8tpURHWo7bE7V1oitvn13tsbh5CThZhS",
  "key26": "2R59xK43sef4QkWWhk8BwCpyD73TkwDQpWPsXHcesG9LAksFwswu25pjfxwyfkEgfw4NhNM8JhZT71HpBQhkQah",
  "key27": "22jyiRPG4zApt7aoFVLae3K3cqTcQbj6PYVxfiuJ4XuJy3vNtiDzxVx9ufvjTZZsFoTZT9fFTQpAUHF8it2iiqEF",
  "key28": "3HUmDHPMUKCyYvZ33My1HofijMTvuGEjVrL7NxnG8xh5xL6RgEZ3GqiB9py1MZYwN2X62NtFjBcSrDzfBaJmgMcN",
  "key29": "2cRy4yfyCvYKJhNtLZMsZwffZvQCaVg3GuHrUFAynxPYkysh7PwbUMwu2HKWs1Vkt3NByasxPPuKpeBvckpNVygs",
  "key30": "tP9L8QB9V1yWndwj8tNTGR4ArgaqiWpXFsc7vhXLmxvKiEHjGzneLx583HAHkyQBeN6TbpsKUX4N1d82ue9iJt8",
  "key31": "4WzF6k2e3FbswVKjEaZMkAiFYzugWdd2fq3hdGxPQtA6R1XdWjCfF6BSdVNx1ajZQNuLmxvBQ3H5Ky72cGCfpw3X",
  "key32": "MijrCw4kkDZF5KhMzXzZdSyiWfMNNZfARkmGC7BZXxyjjTt4w6JUt9dFcV5QKdft5v15gXwcx3nTsWd31DBnvkY",
  "key33": "2nWXDJiighEeb7JLkVnRnsHyMXEQvsirQ9ZcSbdrFQrgHB7ZgwmzPLzzzmrE7f4UrXtDwERxpBJmLTGpdWULXGve",
  "key34": "3VRJZz3zMyRy2W127f3otXnirjoNKRwSr2xAkMfLgVhtWHpKMy5BVQEhPS1ZNAd5WDGG5knbv2HcexBwDhspoM7o",
  "key35": "2BtHe3JWL7zmFvNaq8qHfcEEeGsoEHnHcjGgED5b8Cn8fceJm24Nn7X4QesKzdvYEVDHjejdAXT91dnUBf55KoDR",
  "key36": "4aXvCdMe5JSiq1NSVBco8fZzCqyQPuoeJqM8H6V8qPxkhBjUQd4nR6aSnoiNhwp6zvFt8k7k4WHRMYQJS8Sr2YPr",
  "key37": "4uKYs1RKwfDoSeN5JpykDNoxiCWBpxxXoSAEwDVXekMtQvvZ3EJiuvEgr54mFG3mNWdyxnnpDEdcfT8eUHqLeG8y",
  "key38": "5GEWbnr3UQAoCcy5WRQqwgany494EiCpuGKYWt7J9jFpHgsPyNv3WrkGemhvqNadndEv9NFRYGzTSefffKgqC7f8",
  "key39": "5SNRpsoMqTmbDW4V3EpVp2VVrGpsgQZJsYV6Sm7QkAbf2Z5ee1As8bD7fUqTRLw5iUsyEuLUwC25PkYvspprsKgN",
  "key40": "iDm7c4e5omwCrvyEq57yFGggjN19429iYNPqdtReuukV2DYSrL7ETZ3TyYe8bL3dqXz8jMJG8Dq9f4WvgTGJHY2",
  "key41": "2QpG6M8XKUA7gTo6aUGDBAm1pFzrWdo6bpgy2QxP2BKoS9wY6HWAhDPWbX1pHf24jMEWz3Wnrp86YPLYnzRFkkH6",
  "key42": "3ciAckvRL5ktM5zomkRxqRpHx7CX79hjpxmXYjJw62QzmLLU3HJGzNFeZCFnWefx9zqAWmRPj2bSzeGYdkk5wnTu",
  "key43": "5DpFHQUajYet5D5mzGyow6ySrEdTaFrU6hApYfMNUDrW8WrBiway2JkXLNvEyFLB8keLmBvFUVyDgVaq6XhFHAcK",
  "key44": "2PDtqckUsZfVBgMVyfCGC3uovSeCfWYsFwPeJL1E3beFhqH19Lasw7v8uWrzSrwG3rKN6medtnkXVGR3jrvBLQBf",
  "key45": "2UXEV5kCPEcWgW3m8jbtyhm9BJnFA26KUMg2U6Aqqp3rrnX1RzpT8VDXaNns9bQqiycqrnFBPbFJrNAqEj7w9xPD"
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
