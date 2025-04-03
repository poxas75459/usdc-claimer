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
    "362geAsm7YcGqd9JRT57rShPFawngDciufLAtm1ZakDtVwdaCYqyYkwjhkSTYaUxAVRVhfgXoux8SSkKXHunRnGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNwBYDXR9ex1cqqifJK5963FSm1oyyD7LtU1trgkKvHH3aowwC1nSiwgK7soHQS31Dve5i3M9dMMdzS2uhksBu6",
  "key1": "2342vb87B9cjuCurxGXq1jYn96gBz1G4Wt51ghUHP8u4UraEB6doJmVGp1C3R9Fff792mzXfzGkm4EFaAnXjTVto",
  "key2": "2RiqwgRFGcasrsr82um4aqmG7iJYTK1qFapL44vtxQkkE7g7rAV2Qk2G7FwaBvK8HSACDaPGcfDS2D4E52crDmEj",
  "key3": "2arsBZTf9rQF1MSsqKwuW1iqMbkzop8MGxSkfLnfpygas4hoKdGGoDddxHGhJJPaf8sfbPsJL95hUjbM3SQ4cJD1",
  "key4": "452fhaNoSbe2BRYzwhr8aiwVzqMJd99aYERN9MxjdqgBBerFZ3e1abMFpgo87dc6JuawE9UsomsU5XMaofpN61PH",
  "key5": "2jV9oFp41Y3YeA8boqC9ZHxJc22HzSG3ZvtH25o9mUaW9W2cUhtXELnCwM6oT2JUkxr8R6qu9vKctPzW3sn7x2BZ",
  "key6": "542HiYsk61ta1MdpHd4ZX2rEpJVgPrtPq2TRgRudWF6wpUXJngnjXbaHjfxf3Ru6mnC9w3Vxk6tAxkffA7LFYwur",
  "key7": "4WgpTN5RXkX78jEsaogiSipxBhWGWDu2SNcoavhzyb7vi4gfXKK4fES5e9rT5Te1YWxv1vSCyqgP9qRJuxj9wuRd",
  "key8": "EC5hGA8WQV6KmPTWxPSCQKsAtwBeGMMV37jZbJJ6jFJRYwC3Ma6iZTQTzatFm4UV94ydRfVRKkRJhesovKDGgNo",
  "key9": "ax75hU8xNYnMDwzR8DwpohnLDQMU6UjZ3FLatDQrNGv7DpQbo8EwfXrNrGRQ7noawEYVHPtuHcpg7gJJD3nNARB",
  "key10": "2D7gpiFzfH9MvMjL6ethjQQKiJAp7XUj3yybTPPut8uNgKPxkXs6HD19bYkW8BmwfxJ4JiE74KCb5gneoDwDonHr",
  "key11": "3iACWuDqUZBFup1yE4bKYWP9FpNn9k5hyBsEMTXMakPHa5BacysjL86kFkRP7jr2dqCgsuFA1qTAQ2i8vtEc2RwA",
  "key12": "2sHShpob49KaKcnRxGp4RiNgyALHtBJHpx5izXY2yJKhMxvkMWxWioatdLx5Hd3ki4F3o9Bx4oNhE5ZfhqdEzctp",
  "key13": "2Gvkztfueipe6sdhieeg4Mv3vZu2EvfLQuA9sakEW6inLtbqPzsgzoXubFLFXseX967PWkV3izjbHXibpoRg5AfQ",
  "key14": "3Fd4QZ6bNdoForwhR1XxMMktSXbhBSjWjiyrajBAuBjRLeboAbyeHXoLdDrri8etU6Sh77mEN4PSKpS8PoF7Xh6a",
  "key15": "38qu4yYp6JytT4mG1x39ShDqzPy4Xvv4wwMSrgKKXGPhMDXwjfGA3dk9tANMUM9Sa5giUp7iQ8pq7gGNPY5pEhZs",
  "key16": "2kc9TNEAr2mLkBLpKot9Y6vbskCj8yvKVkFsMcNo5rYsrNmgHePmKcobTKwXiWC92BFGNwGpGX3i3KPEd8JCHpqs",
  "key17": "31jF5JcLLDEdnZHw19twKW3BrH5t1bwxgaNw2sfn5FLw8tVVaqqHsAysdwpAsEQ1ppuREZhGkyK36HG4TnqWUS5B",
  "key18": "qCjUVZFXzf1Z4PdnDHKiFbioHSVX1nuNSCz7uXMxspJ4CS33WMEJwiXpvoG3CZmKiazMGrB53pcjzC27uDJuFcX",
  "key19": "fxN1bKW63E9mB8wjN6feKCDnuV2DM5Xn4dYAih4JiWm1rWZZSthwgLvuQtRhQHvnj4cFBRRXd3u142V5De8UUvj",
  "key20": "2oYkJc5tWpMTMpKzrPPMBXHU4EXZ63XhfyQNgsiY35nEtkRZE3pzpa62ymHVnQpZLEsHEc46faoekMGxZS2PVGD",
  "key21": "4SpANdPSC2zuFxdfUxBsQmBDgi7iPZNEjvhZbLDfCnMJhKnSUskjNjD3iauaK2hT3Y5wTbKtMnjj21ZvG1e9k4Ag",
  "key22": "w9DWhauB4uvuZK7JWnTqapQj2zewiwfzWcMz7LoNtR8rdFV4h5viGB7GnFGSNyKKNgALXJgp9spYqjzoxo4kLSc",
  "key23": "5j6opzfQE9daAuAAkAS4eeTmczzgRC7rtmk76sAVQP9hBGyzfLQT5ozji67WLZJoQ77Nyohq8SmZ8T9xrPfqVNNX",
  "key24": "5MBaNyTbkLfHtjykBeX6u1D9DZkfzrBx2xeP5xaM418FSoF1kQz4qRXVBCs8DgRHguJZJcx99rqyquvJywRwKweW",
  "key25": "4NmFtqY9gcYGM4Uz2X8SH8MsTsXrVbuATFGnVg1JyipHY7tk9Y6jydeLqik832mYz6muoQ2vB6ysW4K3P74WqcjZ",
  "key26": "2QMC7rymz6ddZhGdrpPKLz75w9yuPPBDLqsUzToaYiwt8JXK67S7d6EW5JhgyxUGY7gaAHjARMM3A9UpuChQ3JNQ",
  "key27": "5wYw4mpiFCpTWwXRL2r1foxGw2kz7yqTvR2HiDDGJLyJD3fZgGk668eeiJNLKfAMvh7V6NZb3zr4QtQuVsvJK8Ft",
  "key28": "4EkgJ2zgxk9d2zMrTDosYqNLTG2vBifLW56KXd5YJ6oN9uwcGa8y3D3EubwFppCFiLRS22LNNKCz7gfwt1VnFgwd",
  "key29": "5iTd66SCYWVGkZmhqiQqTnY8CEK9JPyxLq6g3tuKmgq15PBNsU43Xrv8e5A24PN8Wv42NCevn8qQdG9cKNVUSHFE",
  "key30": "jvfbFmWeQdNircjq6cAo4ZkTCyKRhc8JjASo7XSUvB5WsWsCZxdTfbjWAdSHMPjDdXjp8zcnu9w29YBvKhckKNP"
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
