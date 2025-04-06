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
    "3o9Sa3fH97zPgg3bY6RRDpGwtPCekExf7bDAE6tJMERdBdY624VnFg7ThL12frCYeXPJcZXwArS6EiAx3Z5EYVcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jqU5v46ZEhgaMEbLkHxkJTsNUbR4ewAqY6wcpWsYRsgwSQsDDLcn5suGBz7KnNktV7g7kHpz4f7BeQHbjYkSPV",
  "key1": "5vQ1dvUCihFWPVZEmripAH4cj1CVaMP7TFAv5zsfkAHbB1D8G3AEmGhqh3L3brQcChn8Es2sPXdw3S1eVw2XpV57",
  "key2": "3YSmdKexoRE1u9A2Q7S9LEE2p5uEUrEt49sYXjeXej6oHVADXQpedDE1ywwFMjRn4uNUcquRrCMDDv7JEUS7FuPL",
  "key3": "2o7Mq55Xm4p9z9HPErgEg1Dy5jW2yb8wBDzDBMELj2BtATv1DygN5xDvm3Zu7NMbd7rjcMZ3tND7zdbxY9ELNCz3",
  "key4": "63yJJYeXndMcsyaWvXyXRmDBUJHUxcWeBSBeQ5yKHfBEc22zhhFd2GFrkxt4Ex5uupL8T313VtoPjwXF2MoREdci",
  "key5": "5xSBQgDKCMHy48K5LBke6CUTVZarMM4khdY9NUMUuRA19Zj43BVcHouKy87yRrtZGy8xJhB45w7N9Nobkz8tUfBi",
  "key6": "vJE5xrY2d4SFvetrgffMwkdBtugqx7gGEzbovAYuWgNQuwa3XuaRLXz5vVjQ3uPf16ybtUn49KhF8r4dqaA8rgV",
  "key7": "2AWMjTwvo2Mpcn89vnLi9qspxK15LDXntD7Bb38DhXyMp66zTWfkiihwNHBDnwaFBrJgKrmeXRAazYpadR319vuU",
  "key8": "1wqXdrNLMBu7cWiNS8VZz8xQdarehHqhJjdxEdnvWWfiS4GbSpZENnZsHhjQ2oPUYF6fYsvBgw5RusBmtRmWdA8",
  "key9": "5DLRZw9r1XV9rZyY6uJxhUzWc92Tgda7io5ftBGEdNNDS5GdqiP1cSfdBiaEz9ojmfjPohXDgPHYQy2FfbaVDngq",
  "key10": "674pXk5M1hxsbgtujpGFBkdyGAQuePwFVpXcC2Q6dgSQ4Go7pUc7ck3cZwUfYJpqoVuDV9JHjdBgnkWfUWHn66CC",
  "key11": "4CTsC15vcN795np6wCUBhFqWrtg2DSegLPZ9j8XTr4PpiZne5GVG6KeQQ2K5hRqe7q258QgxWtMva6vx3NbFEb1n",
  "key12": "6WgUk744dbyduipFyyTqV8y2zvE2xwvXs8WpvJJ7aivGsS2hhtCBHYR7wWTtLyGrnX5Kdc3XE4ES6bqNn9RAbEQ",
  "key13": "2jVcBhP8AhuN9MKKPsqbASbpU3aZjJgv9VHd893ccwY42pL3nQ4DwxuVgDrf28mAB6hbvpxhTZ4Ms7XZM8dV1GHS",
  "key14": "u8NYmkXcr7XhBepi4zSgr9GSQkYn3iPVSsmMjPSiL7SGqWEpk91t8223xr6NHiQA6B19j5QhbzkBf3mpCEajq9d",
  "key15": "2osU4U5XHA4kaDNpmMkeDonuC7PhXydLBhG6ZvWRpKhpGk7YWSMT17mJSXzm1eRkb5An89QX9pwNKa8NXQioHkia",
  "key16": "cZKTWm7vv3ZrYQxaXbE1qUpFgyzvEdzU7TGeeVBswoc5bquRyFA4Qk7fskozLk2yMLrwXTVxcbYFfhaFQWxWx8a",
  "key17": "4rTxwykT1vfXFznK9MkXMwzm2M9bruxiDknsYQWhUqTXWrXM5iTruaYyQGCW89297AGCnnqeMuxXKDZHbim8eRZH",
  "key18": "c2yV6zYFZwgzDxyVyBvVoYkbZxAxH84KoaEYZiJSRJm1UsNZU4Lh2dxYg77AMmcZ8bZczURvwRp4vikNA6jCqg4",
  "key19": "35X1d9hmx9oMSQRJBCxKtoyXB8VANQU1bFFDQnYbYYhp5gUoqgo1CHCL9ttPPLCKnGxe3oDycniuyW6Cy4tJ4RvJ",
  "key20": "2vPvnLZCkUjNKbWCpFeYcFphCEpqb3BFkKxzjwcHZCGwmiTrgTDc5zjFacXm4jPEakRpirSPRjquA7K3Su7h5Jw7",
  "key21": "2F4PoyULQKHw823U5gW8oeMBEgADkLk8RMsXXfPUzqpucjxTn4RsZsYbTXMEKz995JAyLAmbJzET6gAWBxsdphWT",
  "key22": "372Z2J5UsvBUpEfWP4qn478o7gU1djkzWeJgZ4M3KWvoaeGto8G2h9c4x1MCRqXkZoVT3HhqNFrwfcFpGYBGkaL",
  "key23": "42UBjfiUPWTxx4fo8Fvds4VrQyZ6iXcLreo9Gq2Nbr2WJLMzuJj4hJu5964JUtoXCMnz8QzvpgtdUQ5ysQgTR3e",
  "key24": "4wu3cxq65SZsqCk8Y3Vcy8jxfJBQDfBKNpn8KbeNMu6HYgcWP9Mn8bYirKQFh8ePseBwUCj6ai7dZH5BZkXyfwWA",
  "key25": "5F2t5iVwDVNMYgo6bHcqzT2gpcgVwAQYf5ZYYLf7vvrQQmDwF3voveBDfRRdV77oaGt3BvxnDYiTxbUmSex8Gh4H",
  "key26": "5jxGiYB96htHFnjNm5wWY5bfE6VX4Ymx1EbSaLsAJKLP9i1uuBixxZHheCSvRyJcVBifuasYmLjsUew8TRKvqeDd",
  "key27": "4VqSmFU7my2NVSvRTmXF3iM32wUDEpa7VereoVzAXaHqQZmtxgcQsNyQopZr5R1SDjV8AtsNy9CAMwBVZotjoBAc",
  "key28": "5rppqM1VcpUuki8Ueq6Amx9crCrGQnLzh2xS5K7kKK9YEjNP8bYTb1H7hCYXWGK28RXPNurREsHvcr6wkXJgEHG3",
  "key29": "5X4qyvmiPCU4tjoMmvvYUJT33UgSREKwXgvTBPFtUmMy1yA5Yn2MjhS4uBFnW6ETax3Hq9c42kizZzVNCLUFMzhJ",
  "key30": "62yEjFdiHKJRedyUiaMKBAicvaSysxboBXXkoWsJiMJ9tbHoZiSTWVUzJGQyGMt3efKc97AxppS2GMSdBLwksdM3",
  "key31": "4zVHeNP8mHqjofQXKAcmYGD8CmBkyM9h6WL2WogAa8V1AK1fx9R5uvcbcJUmWSQ4AErPkm37QqoPA3oVVvJpNWwi",
  "key32": "327bBg6j1APdHADYhcQqRHcKay51ZeR6mSwK4JRrsHAnsY3kE7Hbwq2P7WN45nRUSrjUJBciUddwnnZr5yTMZC1T",
  "key33": "5bwpewDHAVDbhNu1ryKjnvsktLJ8PPcMrxsW5wbWz8bfacwuKCXnA1vmD2nMp4Nwr11vw756A77zsEzTnNbKWF75",
  "key34": "54v5RZo3gzpJj6yxi96fZzn3ExqkfpFwFaUUSidbTq69659rPV1dVNzp8GRAvt1uVwNTufVHH6zK1HrDQEKnAxgi",
  "key35": "49Sbw4BJc5rsrwpffSqqJoa6TJBm97qnwDp4H8gJ1NoBGCZy4NDhopTBfwBzeW4Qtn93Ekddfo7BnqyDS1bK4Jdy",
  "key36": "2cNsMkJXpd4CSivbVaYpFR8No8cDtVuMgTLZ5zhVoZ7kvDJVbuJSNf6ScYGn6cnswPvBia3SsGwhCQzp6vUXwoLD",
  "key37": "2gidnCcCerGbjMAGsPCnknNfR81z2nmSQAPy6gAVcpXUcgA6EEWouHauem54YumnDfxdph2sdUi2zrNm2DEqcFay",
  "key38": "QfjssBvTdzBw3ah3Q94XF65WmnaEBJL7EVRUt3pScefcRwvdWBqsf1Rtzyj2MSfJCzZuJ7MckyhGp3xVbdBUMmC",
  "key39": "4BRVYKZce6QTF3A8HUAjhUzwsNVFT3nTZPHwQGmun9kN1D3ysHWt4C5wnmdDfJjQvENcBa6hdXwRHwJvq2Uen3bE",
  "key40": "2NPdGXbuiVxMqfzn99XAo6z58TPGiThLtVEBG6LFnbYWKCjqG3gCTLJJmZ9qPiahbAEcPAQg7dYN1pt1VyuSENhG",
  "key41": "MRNkVcMvzDBzErM58fLRSFD4ReoaiMrpYQpxEpMvkNW7tvSacPbSW5ZKSNfXXFfF9X2PXVXmVU2xddM1YjqnR6p",
  "key42": "2GhLNrq1YzQNLCE9PXPYef92MMFXZLi6xMVLQoJnKnRNE5JqgwWAeFwVNiZiEATTgzzA9MNZfDfeh4AFSaaYdEfd",
  "key43": "2jfX21zfGB2MxF9tz3HSWBbgd3SUBb92HfRGxzY49q4ZjAXBGvXkYfPVpGbSrL4cK9CLf6t3udoZ8LCuXhNBQyUD",
  "key44": "5HgWP9psL9zAUfR5ywkz7PcxdonGT2dWg4SWNZzWjz93HGokNRABT1SJ6wSpLR3Qz4rSdyMrGoZFqdXW93DfqTYo",
  "key45": "4FPPdHyfc6AbeTpLDwkhgr6s5wCQ98GgShNv9g9Jo6PZoB1HPqpVSp6ACmxFg9CfRXqZxQRcBWYcXHq4uGnXqRcG"
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
