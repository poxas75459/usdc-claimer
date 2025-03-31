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
    "2yhWnzKhQeUAV1VjpwbmEE2WKtL2Fhi4ebfKRDBXLyyTifmF8x2qe3WX5RoZREA5E15dPhn1YFsb7UvMcRFHpWAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHRJBSATUgaC6CeuMnhoEMEJQaSz9hHwmjvvmhzHyawxWDicc7TPx2WxVe5vs3Kd3F4hBgAvxBvQvRPMm1pwoHg",
  "key1": "56DUbGMkKiAzceJRifNAtbXuAnmsYtBi4YXvebpscLZ8ru5PG3nGZb5HVpANJ4dsZxvGb1VDLCwVJLfNFVXh4aua",
  "key2": "4PdhnkjcM34urcWk2ZCTUwc6SExHSoK6QiujzQkzvsxjcqBQWnMBdpbizGWnXSM3NxNKvwBr5Ne42Arcg3QsNV7A",
  "key3": "EM7woGzJbpE5UeEv9Eibj2VSpCnBwjyfAsLR45ke6mvqmxvbXG25mwsRZhWH9it4nnKEFgBhpquwEP1xYBLdTjB",
  "key4": "57uizyQE5jF6h2Lqzs2ixvywcpmsEx9YnDkNY3PiVhsEk9scVPedv9Byg51vbTfqJ4AuHnu5TYb75iKpm7dXpewG",
  "key5": "31ZRCePC4o2DxBFZr1t6LEtLSqUTxLgiXdHBdvCuog4UM1VEXx7qJzuUAsn4cLiyjWjg7o9XJTdJTbPbXfzShiZW",
  "key6": "2R8qwG1qtfzFmxpoY4NP955kGMoq3DPv4cebZzq4UmJxiJPAvEmk38B9YFmcdeeqZ9p7DR4KZhU9RZ5sD5KdrfYT",
  "key7": "4j9QHidRfdSAwmrs9C99vkbXu4GzkLBuQuQeh47aDyauS163Vqbkz3KnkqczqxqsDdgPk4bNnW3RywKDGdi5RFda",
  "key8": "2iATkkSpEPBeFjwWuwDCx7mAsX2pqC9Znx71sddJiaXF4FSLzSKsJ5MeV1AnNBRevSBypX6k6RXz53w2fffbyNwx",
  "key9": "5noZo2L9hyQ894PejQPuQTPqCkS9aUgZFBCSea4xCzCTp3J5yq3j1GqU9Pi1vipE3bSyEwZywMHfWATaVTS881i6",
  "key10": "5eef2KcYv454YoK3GVpkxV6K429CLetw31M4MyGqYXsu9WjwdRKuqCEeaEqW82GfxK7wcvE9MkVLJ5mmvHki5F4A",
  "key11": "K5W6A6MRYRzV6GFYYzkMSCZ4jCVEz54YZsn97g8VZEtPrifoDp71MYXrHxmMkAKVpusjCK2idxGs2vBdawS4Jp9",
  "key12": "a9gWnVy6Gfdp9xS5yUoJyh7WFxVjNE8d3koVKy5KFkVDSiZrwd2RWpoewuvnfM6puKsd88WbxL4w4sGQAPkQSQ7",
  "key13": "5c9FBTQZ2DRxNKLPju6UvgLL61hW2MKgLAd6JrGzX767FKNSSxDAkh2cArcm6LtbkL49LuZvrbCuTz7xcjrR4s9z",
  "key14": "4S9Cd4mfw2JzfaHBWpuHwTeMb6h2xAVXxk5N3N8Ys6Y9pQpEPYBzYWcj2a673rQ7aMLRXHkCHTdnz2TPgHqmFLtN",
  "key15": "2i5ShkEjVRTETvVnJ6QNV5zvarvxTo2tQJGWm8jKFZgJXTPhDRgZPEgkPvv8xJnpfsNk3JZZjebTPdvaeMwHUZ7n",
  "key16": "2Pumk6s68wQYnepZXnnaXWMpw4jVu5KtW3qu5HqUNGz138NjkwP7h5NjbEHrUvjR4YVqmV8WxosQANdiRM8oZvb8",
  "key17": "4kusqAjhR8hpXqEJu7d6SrBGrgWedVhVMQdAfus9pp361h8ftZWchJkLi9vpbWyJhNDjnYd3dSXKAeiRdF2eHGJs",
  "key18": "31iVvc3C5vrYbQqkXkhcz4T8kNCi7gHQeWuxqqm5d2qoRtiKxTtqFfrn8VLPmr1JW7AQwvKFfced4Xvyu7tRAcNF",
  "key19": "4NXHzSiVKW1pK8XuFtc7B3DghXiq3Mx6gnPMLoWsTdwWkRuYiSDYFX9h31ifLytCmcYwa7f8dRm4D8oH3QPHcN4b",
  "key20": "27RuoNmkgfwJbauvw5PcAiqSwe4fUtmiHhqZEJahC4SbmakK66Kf6tXgxbRFczY2QUxQLtsvpQj2fWHwZhG8seW1",
  "key21": "5ACwTh1BbL8HUhrgU3iyiDab5FU1trMD6cCk1MfLJqw2TLCXai74av2ff6QeqST2voxcZKvGvBgQuGSzpf8uvscq",
  "key22": "2qVggLyd3GqMncQpozvE45GwR8yXZm4vgUgKbf2yVwpGSsbJjDiKvshbiqt9Aqu56Az91E63Csm1knVRgq2Ve3Cj",
  "key23": "26oDYNAXjFczFABnw6JkekyGtsiLZ1FqScLiUTzTj6f5ZfFECup4vnYo5MTX9doTcpMiuw9ivtkcw8AF2tyGvCjY",
  "key24": "3k38et3gMjmDCJr3ravqdVrZjxQiXg7bLDUKZR3Q54xcbDGzLiQkJ61brapgifL4f96Nu39bqdvFKiU5iDTtpkGQ",
  "key25": "4L1E5CsMkqUXForg1ZHU67ERr5qjBxxGyFEeVTXvxMeQEwDj9FQaVh5WmZzXXMK7oqVWJ6Go2gBPZkNFzhTkB4AB",
  "key26": "5TB9X4TBV5wmKK1X8BV6TyFeujppZPftErUbC4JwAv5iuv4yqgKs6YawNYax3XFJoLAKs3a9AovoKRvGz5fYEz2C",
  "key27": "4HAGosAnsFojj4BzAm5KEM2oReWBUq3HN4dek1TED327UuBubdDMFsJJWrVCijuaQcNj1cCsqmdeGqDaQuQxjk4g",
  "key28": "2N5DNhrDyosLoY8v8rJXqWJ3h1SLHqH2U6LgAgbJ9bcJ2fsrMbhi738b9kPf3PaJtMeSPzvWhizsQpLGay444onx"
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
