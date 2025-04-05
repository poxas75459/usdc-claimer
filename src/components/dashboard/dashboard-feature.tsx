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
    "4uZgyJVXhnGjguhU8LsbxBvcz4EvC7tu5h2H8bj1nvPX8JNhCcsC3P52iM3g8FaTbirpszwWBbroGRs8rgRvgJK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LX4qq13NQkWQm3LxntfAmd2d1qMNrksJde5qunAo8saYfza4qQBb7qzZafu6614a1Vax6fK3urFugyRTPebp2t6",
  "key1": "5Dk1Qo3C4jH3GXrV7cWMQZAHvZb8kPQGFEmiKcQPUqkE2QBSoVVipqhurY34VKCLTMv4MuqwzckmkbQmjLsb2Rep",
  "key2": "5xD35w13mGDEY9m98kkbupPnHUkL3pE8cRi7ZX4F8ZPMFHYs6Qyb7yE1Fprkhz6DSmDXnztSTUHbdJoPcUPcPuxX",
  "key3": "57sh8U6jhWmXQbScHFgVrxPramBVVzBEUN8eYukgFJoYx9tsCicvNPKx2f7s7pm8GUQXjseZGxyAPrGFKpGnCBkJ",
  "key4": "2ohNHrVZRJ5cUincK3pAm1YAyCgiVEZScFUriyFWM9vGUopUnrPwYEnxJ921trvNRbvLrsrFgf6k523kDYbzGov1",
  "key5": "3XpZhm36LPqf8WCXA79ZZD2kJLdJKriRATwVps7efCpkJiFNK8jfU45AsQvnUF89HRYnCk6Fc8BAfR9ZRCkoGCts",
  "key6": "3DPS4zAdyDr2vgJvS1sxZZP7hGSBJ2bg8Pna3z4BQdNJgSzv5nwsQHuwDSwHzQ8pwJ9Rv2TmbwUUcuJ9mFGH5rK1",
  "key7": "5MrHyDEWNbzV4wrw8PikHYqhEoAi7YXeQdfXyLXSgtQBJJGiXss6UvsbGFJQqVqwpw42tQ2XYsQsQ1n3AggPBEUF",
  "key8": "YmN1QVbshJUg1CHjL4RaYjG6C3iHPYBTwe6XCre8EzaEvG9zhJwkJiG6jLTon3h18qdVz8qo1F9pTRwe8LMsovr",
  "key9": "5be5QDQQNZ8RybuPm3LV3gey8uyMTngpg5dtYvrXfxdjjGcDRMnfMKggVuDfXazpiX8Z1ZqgUpsA43QYvnKn3KsD",
  "key10": "2Js7vf1vQTnWxLyUS9drfxq9JNbZxLtT57NiBNYYANa54tAnmQqVgH8rNXjNj342T9Y2nrvQmwjw7JvtWBXb5GSu",
  "key11": "4hDLjkxwonsVmv75Eb1sfWipGtJXhgQxQRFuFph4kjrYexKcwrwUE245QRsJz6u5QSxAkiexUFuXuVgryh2UmNWB",
  "key12": "2FskNCRJ1M9cXTMNTGcoBQoYZoZj1vzM95P6Zqp43qbnuNYPh18reTmp5B955rchXXtBZTLZ8QX1Vkgav72MUHa9",
  "key13": "CgN4wKXddcREVDrfA1vBxnPA7f7LUBNBnyn6ChB4uBgtzfw5eZmDyK7oxMxe7QmKVUGCrcGzCz2RoJHXCVc7P18",
  "key14": "5MLtCze9EMTsGmRgReLg3SjRGoZiSCEmFuLindwiuqNm4nszUbYW6fA6R155UDpy3v9hk2vrmacSA6mT5PByKz1H",
  "key15": "4ksJFhcmgLsaebVFw1quJZEkoGtWxVVfJL6BbgZLVzm3mYSRoTqQtzTV3tXgkuCkZPEJAcFXNjr1o8t6qx5i1mrh",
  "key16": "3D8w9trsJeeRJoGoXgMKUMN2BapzCh4sPEbLcrfXUdt7RaaAKLfikHsHWQeogz72jiEXvfGvJoBeSF1re47bYNBM",
  "key17": "63oJZgnX4bva2p73B216meU2bRQPFV8LFZQSPhQHxKCyiVQBFg4KXeTA8zVhY7JKGAFj1vAVZd7zgmh2D76rieEr",
  "key18": "3T8EM9Y6Egc96Rr4fKDqXXyxUH7Cdt8ve1wUiGEutMg2mpMnAKEL5me5m1g2fzxMSiFKfkdfQvKkELB79Xh9eAjJ",
  "key19": "2GW9Lwdc6dALjVymBieXddtiB6E3BVhC58u8R3ZiWKeWD9LFCxDXjJiXzWAWTP9aZ7MyQqbq4em4g6NauF6wSTCS",
  "key20": "3uTwUmtP1wYzQw8uUAB6dThUabY8UZ3dUmYQr4pUZbWzMdBgE6mpEtLWWZaj4S7URR8H7RsKgM4d7z8CLHqTq6KV",
  "key21": "2crvMyQJtseCC1sQVSeEpLMxBJkMpsQt4P9XJ3P7bXU6ZqQu5iFxKPTnRfKWZyBeteQNc8fLzgoKoAxErooQdppr",
  "key22": "236pN5w5jAvU3ETa2ZuckWk8bCp2iy12Pe9VFrqgD1YsbrBS9cXGj9M4nz61RPCcNmhgqZz9fDhVczWWkfZfcTL1",
  "key23": "5teCZyc6YyyzKfG8BfFWgMfTKTGmGvNBUQoZLTNhQysYPyEPvwwkvwYhuK9baqCHjCdc5dFKhwJnzFbz7Kuja1aL",
  "key24": "txKZWQxF1tVHf1mSxweZn2dVMtmgtKNEdWpENToAub25EvKXXp2J6fDWkyHZs9wtHxpXhC9dD4ELJmzxizs4wvY",
  "key25": "qR6xQTStwGKBcjTG9bZuYxkgQu11RHDMKEZAh2iPT96VQnLkBNM26RNYQEqruEY6QXm9wWAnF5UNuHswijcgAZK",
  "key26": "3A1CSQFKqUJ24qmEcQCZkT1cDcpqma4vjmkkKbdTon5NXejghUi6ysb1LrZieXuJwWXUnhUivoJcJLVMoNnrEQ72",
  "key27": "G2W1bDfL8n6y61FuHPqQgaRUhce5K5uRbabxjJxStLfXK1r4EYu4eoRbiHEvCPxZk7ZCaq8N5P3aSLtMrLMzwfV",
  "key28": "4d6mHY68LroED2YVFKLxJynmcwiLndXcxNEZ5nKcaGyiDD4Q36UJS5YviqiKbeuoRK3Eu89NgyuY42NdZMEWkCeV",
  "key29": "32f5BXS86ikFEbSLJwzA6k4gL83VwYLfenE2eKRpsPRDBGW7CHaaPiewcqQ93fSfxfFUVqGZhM9jq21GLCFrAa3A",
  "key30": "3m7Fc7F6gFfd2KnWxBY5J9wfi82FEbtGqYNDVYc8MGRmzatAmtEgVdmqTc76VCfVgzFc1HCQXBc7CJrbLNhmWWX3",
  "key31": "2QWMLfAcngg2psKCWKHVpg9bUVQK9Xj5Z5m1VaXFHhbogWAD1QpTizVVHDYkoLs8MbxpYEv7NQgWtSTVT3hNqs6q",
  "key32": "3YH9Zsey4wZw1dFo8m4i1ihEhZhUzr1PNycdUiBd2dkhk4gdHxWUavXCMGSXCox4rtevH3XBPP8KLSp6tcRqvD4T",
  "key33": "515KVFC4aNHTdigGZfhQvbUCtwxKT69ECJJEncb9SFeoue6iPC3fHkybv5jk7QNGnHV8n4sPXYrVctPoapDeqdpN",
  "key34": "4qB9Vpa1ijtvV87cfzHgZf1AC5k6JWTtPe4vmYEjkX99Fs3HKPSpL4QYH79j2qdftAkeCS8ytnz7iUDcWDjfuxLh",
  "key35": "2kz91Ah5MWtY1hKouPvUKpcb1oEncKkSm2Q7r6UqPwVvsrz3Q2jKyZ5Zb7STtQAJDcb3tN4Dp9pnAm7QC4RqzNhF",
  "key36": "5QSMtQCVT121UNf1Zhhu8LuNNgCqiGh5T7JQgyu6Z9cjnRTZRMcuo9P5PV7UgAZhGWseAMeHsKib9kWGSCgoNx5W",
  "key37": "31JvhgDaG9dCPf73tYxRAUjxK4KrtGFA1rwThU2o9cuTyqqJa35zzUjGFvWxZV1rUPNkwXMXDrgq3uTsGFoxX9qL",
  "key38": "5APTu8NUKQoEhDeLmeW6D9c9VnkJ8Ba7wUnxJCitQK9aKZ6RZyfqPimAb9Ei4ggvULDJ76A5MagpmjLZMN4vSaHb",
  "key39": "2BFecPPNSLWcQGUASZDzmzibBqsKBDpsw61QXuRQBtt86s2xf2EWooNKiY7Boe9zdwLf2LSTGEbKA1vUtL5hz2Ru",
  "key40": "4L92Ex62LXP9zWij6X9dvJVxUMLXiW2jwMEbtbxFQTagf1zjzupGgNKvLbXhdzctpeYh1Yag1xfV9E6AVmKkUohr",
  "key41": "3zWEcNe2D4u1cs7wfWDZ5szG9xpvi9enyutPfuWnrWxaBLAtmXQwAHvxjFQXsV91Jq6bUeg3JC6i8fRnN5CcvKgA",
  "key42": "ACru6Ncii23twVAoYvqP7AzWUVVpYPH8fWjz7DunwbVRHt9dxoyNLDX6V71znDEsuWUnYcemRyQWDx7nrdZoXwi",
  "key43": "5hHE4exnh5aGo45nZjxn9qCJSTmkAwdrWjEmbay8PnyyfqFx61jKJhmYpDfApHsEg28JoL6fw9DVkxypf2XkSDtE",
  "key44": "aSN9L645H7o1QN28bHk4B5C9onqC7wu3dgAeyncyRGxBHPfZCKSdms1cdKPuQvvBLn7s16xG3aRLragjMJk7WGk",
  "key45": "5HpnVp8T57xrSQVmRjQ66HA1aimHvbT1vvBnzoirugSDq1jPCAVNJGcpV83U3nrGw5npfBRX78xzuofpShhwMNTj",
  "key46": "ybMSThF6xoSHU7mtVqD6HuGJaVUkFTbe446P9Whor8hcCyoPKj415emqR5YsRp6hUAoH4qStsjQUkB4xFwb8DsP",
  "key47": "2yrdxWpBkVzVLZSjeBVDmoN4Tbc7zSF6nLxTGaZLdx63EyZCG9CLit5fBhLjiA2QLuszjNLA6xzqhJcafsbx58HM",
  "key48": "5bNZEtUoppSbUfBwUp16MHaSPZDisLFrd5k7LTzvzWjgjkFoUBpvdmHD3drY2HngzNJioMt59CnpnfUpFtxp8faH",
  "key49": "4YFsGBSyMN7s4TAEM7Ugfj73GdWEVF7LjeWxfykiKkSQRBjdxnAFdyViYmsoz2Y1719JFU3DWgkPoQmLzMp2fBV2"
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
