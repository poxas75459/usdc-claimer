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
    "61iJJgGKbEYsBQpDRNGuzJBMEgLdSAmrbGFRicwGLzVMYbTohwyo5X9LbBzxGTuAhkda8ekwR2hHCf2wXApv2ahw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238di3Ye3scHJKaZh2c7zwsubieLp9sizgivtbgDZCAwJfY32EERdAKz4TqMyqJabiYW4Wd6fokhpEe8r5NRP8N7",
  "key1": "5qpvHjRUcjcAefJ73LHi2AZN3kj9u7Jn6xj3CW4dgURU44gUSc9SmSBvaSQrnYRQck1N6Q9E8nfFgKsCuZSQ4dih",
  "key2": "2vWqpue65eyBvqnixeSf3eQ9qXugRTnBw1tLPYpV2mqMaH4KGLL7Gk4E9ysLQgqJyrwE1qUvqrmQrCDU6B8B48Tm",
  "key3": "2mLYcimLhQRvNouEQq5YNpcnJ9YVuGHfpToJvKcQrLNjhFLbrTXxfAtyX9BfKgdgNvCWVS9BFZQCzrNkT21qa8S",
  "key4": "29YHutWcp6WxqYWRGQ5eBBYrh8Sprmsnyhjtz7tbd5o4BCa7kCwy7539dCRkNcsaZNgYyU8fxR4dpcyXSmR1JVvd",
  "key5": "27At7PaYPZUkkaxJkyW9qNhCT3yPQpcw7Wo4q2YrHsDb1nfhcFHcvYHAyRkFeLcHohUgWizWTJePmHerxg884sWH",
  "key6": "3CB8BkX9gtquVLbbp8w5wwwgwVWddfodB9NY2CxnELhKEwnHQdN2UPZUh76v2AE3kq9Akmmn6vSkunMYhFFdGskM",
  "key7": "3Xv6PvEi7QXrY5yNCEA6XmVcTdKYZn5MDRsTbzCXWfpLXmHLF59QPVfbu7Dpf6L2E7FCcHk6FDijnkxRBDK85enY",
  "key8": "2ho2N2LVaweM6YvdTMkMK8AYRpiTokPC5VvkrUsbT1EznHgz88NJN7m8S2FDSa2tuE49rwYBKduaVbDDa3JXadkK",
  "key9": "4fAgzH8LmJE9p1j587nWs4eZPz6DSAZdPU3LWtq489kW7gdy3r3XpqtDCHNf2pWsvhAtTmKRpqjoFtRGxG2ctt4B",
  "key10": "3vNpDN5URnMDAEoSXhqrXwTRZY7Ahvo6zDah8KjePvXX62hZkdMbnpyGoQomVtyzg2QiKW1acUvXPwSSFKbjYhqu",
  "key11": "3oHcV1ZywPCXAnCevKcTr5a7V9y7jW2NEZdh8gAhckuoEoypreWB5GGUphso3dbNKWJwtGFTJUw4X4Jsx6ARARkX",
  "key12": "2nLeHrJVdJHAfkdwqHMMAXjiEnG62V1FkPNovz42rezv7nyb9PLhnGeeFAiSpPnC4MMBXYGdJTzDABCD4QL6M5Xu",
  "key13": "5jfCbEat6fTict6hZeeHUDgPemVwXXHG1Fs4T3nQ3ZMDe6bu7HwLjosZbP1p5axNjoBWCmC8ssoqfry3TxHa1CSc",
  "key14": "3yPvi5vCkypYGKbMBrPMsH7wLWoi62H3CiqJE9K3gK9szByAK2VkHAd24tw3CrZriPxVngK4c3tZKy7uaszAp4qu",
  "key15": "McHJ46Z7nCcaR7eWzg5YYtNfPJ8m9KE9VTxqdA24aAX32wJVR5Jvb7M4Z5pW6XUXk3HR5qQPDZsKJJ18cLHoxgb",
  "key16": "4B3gGeHJxota4ckKQXJ6GW6jzUFuPQEqAFqgMDaxB1PWUYyKQTXLR7V1th9oBRCcq5KF56CmMxqvodk7NFr7eA1o",
  "key17": "2NyRbwx9KU5GfTv9f7hx17rKLD2EiFS6r2wac3AGj5FDh3ejPwG2RgNBsiszKca7uumRU2DQw6u1QHrKWRcWkNJx",
  "key18": "4jc1dG2HzVDoQAek6ThZ4n8Fgy9k35dFxjfomVsPydVTqomjwYuN4TFd7FBBUhwMuJFarMWMNohTyX1TeXxs17Cd",
  "key19": "3CUYYwMzcqBu5Y4JTFi9wvKcduPSz8p3xcfLXF9HcCNHr7QNUBvgC112crmpyVzAXFyf1hbeDZkd2n5Uus8m4etS",
  "key20": "2jSUqw85UNZL1a2kiXjarWgykdx8T62Qbkk8q7T23uigbSACHbJxB1GGhKdjChAkpwRgoqPXoZSUzBUH221yGTqq",
  "key21": "53NUhAAqyzXtW94PmTmdiFL1T8BoCb1fvP7zUKfshpmVfX2qxffdgtAvmUtHn3jw7RJY2n3tcVA8soNgBAVfEUA4",
  "key22": "24juLHkypqR195brtPkWQWzk1bFaqW8aGBCsHABNZFnjBeTw5z3Afs2NVWUxmzrghGq5CR8feqe3LZB5qL4ABe6o",
  "key23": "4GYfkuL1bBanbWdjBCbgS8gFGfsjcP4pHNc4nZibcfKp1j7KWGcUogab4S8V2gkothGvYktyh1t1ekyPnkkL6vjm",
  "key24": "D3XpNrUTxoq2W3rgEqJrcRtPTReTkYxYmvTVJqE9mQM4vtfHqeEMMysgAUMn4cYhjZPHGRpgoPsvYay6jfc9K4Z",
  "key25": "2GpjAK7KJLYj6BWeZvZ6DeSxnSMpEakDKqPyBUGzJ9jrTmegCBWG4CzENL4PCxS3udfez9ThGX9h85bTqNPEZd7g",
  "key26": "txVQPy3jbH3dAL6jokTDpCRcT9w6Q2DmboFcU5AyUZdaPVzQzBMHpekH4bkxjwCrzF8HH3PSHVMkQNRFfUPvgaD",
  "key27": "dMPFaVdKsNC9sBsjPAYSZg3LvE1Lpv87rCC4qNMMZdubyromKWMMYBNsY18c2CgaTCysZxyLcVT2mQM4DmCDzoR",
  "key28": "3HzTPsE7MbRU5MDL2SZEXkyceJL4mDGkG7BSjASVrzqE3Nj55XKqGAVvP3Va6NT6qEz9yKCHJ3bS6wEoyjrWmZG9",
  "key29": "4ivzvua7tXk7oi3iHr7UT2NUpscmyb67GtCgqhBJYhUKMBeKYT4uf2W6V2ht8VUsACz2PNy3YyySReG951U5dJF7",
  "key30": "5vMgLhaSiPQUKpdyfufLKw881JxFGzs36t3Jq7XmcCVn2tqy3mQy3P7kZaQwBr6K6Z2rRBDrCbYE2aJ2GP8UbVMp",
  "key31": "3oo7y7Sghx7CXAs2dGZN9xVLU7xg7dUEzBLdQkq8HoYBeTq8M4CpYoZCy3nUx4ud4SZunLGZeXgYwWFZ9TjdaWKj",
  "key32": "3UXjLFriRY4yBdo7pK85FvRJiZKz89Sn4V12C1HDS6vNwqGs5ufnkG6VfJR6CoFUGvP1G483wvrgKBMhMjvTzzJ",
  "key33": "3MJQNCSmnNnDC9CAP9gLj8JvEV5b5kbpBhzqa9gfeyC3H5QAgHxyLJKSpVQ8A8pzLtZ9Vpjakak39A4Bg3YE1H8g",
  "key34": "5fuRM3Rs31PMYNFpvzshqyx3xBi6Xq8X3zKFuBXi4ht6ScZAFoJFiLCf8rLHT5eNPNTwH2xX6tYcFe4eJG7Kpf4k",
  "key35": "dGWRg7txC97U7TsPeKcGMePF6Mk544b7ZzSRkEJLwGaUkpQLH1NWXvTdHTX5ku6C7RoGMxF1b4ecKFhbDHh8Q1u",
  "key36": "5Rf1dphPJ75gUk7rUga2fbEM7B7ApA4Nrz53QByMYY2kC1Aj4iuqXesTxVctJnJBwFW2Lx8XyPp7Qh8P1kAbq29v",
  "key37": "5EGrmWmV3en4twSSm92qTB66YZ3ADtkCpDZTRwkjoztREw33jg7DjSHP2ncSrvrRpKDnpKKNW3umzy9Hr25o59BM",
  "key38": "3Ge5pjRX1esDiPZLzY8gwJ5By7yrGRw3mykKLg7m5JEUxNaZq4AYLS2j2TuV2U6WScngSeMAgJZTpZRgLVWHE5p",
  "key39": "3AcL88y3eHi8kdauHgx6sTkMHgiCzkELkokK6pVFuPSmdX7zteqWtUAVkocLiuGxrQMrYev9GJNcZrkUxY5cXMQg",
  "key40": "4WiwiXwcV64V1Wq8PZutM1yS46AkWqgGqK3whJx7RmhKyV5EHvahqhQznfM21TXAVSrSmzt14cHjyZEwF9GETgXU",
  "key41": "5f92TqnVeQu1YgrRaK973kyK9tgrCc2VLgyrWCx18WDCXaBcdMngR1QG7zXmNsXyXVvjqsP4Sscdtn3cUdYzSETb",
  "key42": "55MZvEGCLBXDxVRsZqvbX7QS3wqQuXXLikeunRLVxt3GfbPzH4krMGGmTLfga2tFxBgm9JwRuAWhXHt6Bv621D48",
  "key43": "54hTAsVxo6W8U8ZUbT3R7sdgTkh4CVR1dcgoaD4C3DXQW2xVDQHYhvAZwNeAJF8hBUoNPE5BmgUcLqkGvQhSqAwv",
  "key44": "3nYo4a2D7EEahon9t8BYGjcs2Z8AKrWKRW4jFxv25tYfmwgZhp9CwcvHVfwYXhoyh9LpeTB8fLyHn73Mt2ywsoxf",
  "key45": "jZRy6eyuQBTGNEnrP68wZcb4oEdHJ1ziJimYLLaP3qdtuVDUBw6A2UwLC6GBE3qJviAP9F62o8ZjpgBARVG5hXH",
  "key46": "4rARjwqdsM3DeeMTmqZQDV5vdqnNvGb23yGxe5gbePd9XdcHqP3hK1TNXT9CQsZw1eKwutt2i47SdWbjcFx4BEoL"
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
